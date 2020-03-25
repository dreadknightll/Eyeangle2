// Main.ts
//////////////////////////////////////////////////////////////////////////////////////
//
//  梁力 版权所有。Copyright (c) 2018-present.
//
//////////////////////////////////////////////////////////////////////////////////////
// 宜英（eint或gdeint）是本作者设立的个人品牌。
// 本程序采用北京白鹭公司的白鹭引擎为核心。
// 本程序调用了libGdeint库。libGdeint是本作者开发的共享库，供多套软件调用，命名空间主要是gdeint。

/*
 *  启动过程：系统启动屏幕—>资源加载启动屏幕—>欢迎画面--开始练习-->练习画面。
 *  数据结构：一个 pic 对应一个 json文件，描述一张或多张图片，一张图片带一个位图文件和多个角度供练习使用。每次练习随机选取若干 json文件作为数据。
 */

const S_WEB:number = 1;
const S_NATIVE_ANDROID:number = 2;
const S_NATIVE_IOS:number = 3;
const S_NATIVE_WP:number = 4;
const S_WECHAT:number = 5; // 不能上线。无著作权。

const S_BUILD_FOR:number = S_NATIVE_IOS;

var S_CHECK_UPDATE_ANDROID: boolean = false; // 是否检查更新。

var g_welcomeScene: eyeangle2.CWelcomeScene_Eyeangle2_V2; //欢迎画面。
var g_welcomePage:CWelcomePage_Eyeangle2;
var g_shutdownScr:gdeint.CShutdownScr;

var g_praScene: eyeangle2.CEyeanglePraScene; //练习画面。
var g_praContainer: CEyeanglePraContainer;
var g_pageJumper:gdeint.CPageJumper;

var g_shutdownTimer:egret.Timer; // 为了眼睛健康，20分钟后自动停止。

var g_console: egret.TextField = new egret.TextField(); //调试终端。

var g_winWidth: number; // 场景宽度。屏幕准备好以后迅速填入。
var g_winHeight: number;
var g_scale:number = 1; // 缩放比例。随着屏幕分辨率的增大而增大。横竖使用同一缩放比例来保持宽高比。
var g_scenePos:gdeint.CPoint; // 场景的坐标。注：不要在这里new，否则加密打包apk后会无法运行。

var g_loadingView: LoadingUI_Eint_V3; // 程序启动时的资源加载画面。

var g_sceneLayer: eui.Group; // 只为调整显示层次。无需理会。
var g_dlgLayerContainer: egret.DisplayObjectContainer; // 只为调整显示层次。无需理会。
var g_notiLayerContainer: egret.DisplayObjectContainer; //只为调整层次。无需理会。用于存放各container的notiLayer

class Main extends eui.UILayer {

    public constructor () {
    //程序开始运行时会自动执行此构造函数。
    //但由于此时页面元素尚未准备好，页面元素相关的操作须转到createChildren里进行。

        super();
    // 初始化一些全局变量：
        g_scenePos = new gdeint.CPoint();

        g_console.size = 24;
        g_console.x = 80;
        g_console.y = 60;
        g_console.width = 600;
        g_console.height = 800;
        g_console.textColor = 0xFF0000;

        g_pageJumper = new gdeint.CPageJumper();
    }

    protected createChildren(): void {
        super.createChildren();

        g_shutdownTimer = new egret.Timer(1000 , 0); // 这里用无限次。实际时间在别处控制。
        g_shutdownTimer.addEventListener(egret.TimerEvent.TIMER,this.autoShutdown,this);

        //获取舞台宽度和高度：
        g_winWidth = this.stage.stageWidth;
        g_winHeight = this.stage.stageHeight;

        //计算适配屏幕应采用的图形缩放比例和起始显示坐标。新版白鹭引擎下可考虑去掉：
        var scaleX = g_winWidth / 480;
        var scaleY = g_winHeight / 800;

        if(scaleX < scaleY) {
            g_scale = scaleX;
            g_scenePos.m_x = 0;
            g_scenePos.m_y = (g_winHeight - 800*g_scale)/2;
        }
        else {
            g_scale = scaleY;
            g_scenePos.m_x = (g_winWidth - 480*g_scale)/2;
            g_scenePos.m_y = 0;
        }

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        g_scenePos = new gdeint.CPoint(); // 场景的坐标。
        g_scenePos.m_x = 0;
        g_scenePos.m_y = 0;

        g_console = new egret.TextField();
        g_console.size = 36;
        g_console.textColor = 0xFF0000;
        g_console.x = 80;
        g_console.y = 60;

        g_sceneLayer = new eui.Group();
        g_dlgLayerContainer = new egret.DisplayObjectContainer();
        g_notiLayerContainer = new egret.DisplayObjectContainer();

        this.addChild(g_sceneLayer);
        this.addChild(g_dlgLayerContainer);
        this.addChild(g_notiLayerContainer);
        this.addChild(g_console);



        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createScene();
        const result = await RES.getResAsync("description_json")

    }

    private async loadResource() {
        try {
            g_loadingView = new LoadingUI_Eint_V3();
            this.stage.addChild(g_loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await this.loadTheme();
            await RES.loadGroup("logo");

            g_loadingView.setWinSize(g_winWidth,g_winHeight);
            g_loadingView.height = g_winHeight; // No overlap with the prior line!
            g_loadingView.x = 0;
            g_loadingView.y = 0;
            g_loadingView.create();

            this.stage.addChild(g_loadingView);
            g_loadingView.visible = true;

            await RES.loadGroup("preload", 0, g_loadingView);
            await RES.loadGroup("eint", 0, g_loadingView);
            await RES.loadGroup("eyeangle", 0, g_loadingView);
            await g_loadingView.touch2C();
            this.stage.removeChild(g_loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createScene(): void {
        g_welcomeScene = new eyeangle2.CWelcomeScene_Eyeangle2_V2();
        g_welcomeScene.scaleX = g_scale;
        g_welcomeScene.scaleY = g_scale;
        g_welcomeScene.x = g_scenePos.m_x;
        g_welcomeScene.y = g_scenePos.m_y;
        g_welcomePage = new CWelcomePage_Eyeangle2();
        g_welcomePage.m_scene = g_welcomeScene;

        g_sceneLayer.addChild(g_welcomeScene);
        g_welcomeScene.visible = false;
        g_sceneLayer.visible = true;
        
        g_shutdownScr = new gdeint.CShutdownScr();

        g_praContainer = new CEyeanglePraContainer();
        g_praScene = new eyeangle2.CEyeanglePraScene();
        g_praScene.setWinWidth(480/*this.stage.stageWidth*/); // 当前版本：直接指定480低分辨率。将来版本：根据舞台尺寸获取合适分辨率。
        g_praScene.setWinHeight(800/*this.stage.stageHeight*/);
        g_praScene.scaleX = g_scale;
        g_praScene.scaleY = g_scale;
        g_praScene.x = g_scenePos.m_x;
        g_praScene.y = g_scenePos.m_y;

        g_praScene.visible = false;
        g_sceneLayer.addChild(g_praScene);
        g_dlgLayerContainer.addChild(g_praScene.getDlgLayer());
        g_notiLayerContainer.addChild(g_praScene.getNotiLayer());

        g_shutdownScr.visible = false;
        g_shutdownScr.width = this.stage.stageWidth;
        g_shutdownScr.height = this.stage.stageHeight;
        g_sceneLayer.addChild(g_shutdownScr);

        var caliDlg:eyeangle2.CCaliDlg = new eyeangle2.CCaliDlg();
        caliDlg = new eyeangle2.CCaliDlg();
        caliDlg.visible = false;
        caliDlg.x = 40;
        caliDlg.y = 80;

        g_praContainer.setPraScene(g_praScene);
        var cad:eyeangle2.CAlertPanel = new eyeangle2.CAlertPanel();
        cad.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praContainer.setAlertDlg(cad);

        var cd:eyeangle2.CConfirmPanel = new eyeangle2.CConfirmPanel();
        cd.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praContainer.setConfirmDlg(cd);
        caliDlg.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        g_praContainer.setCaliDlg(caliDlg);

        var preloaderUI:eyeangle2.CPreloaderUI = new eyeangle2.CPreloaderUI();
        preloaderUI.setSceneRect(g_scenePos.m_x , g_scenePos.m_y , 480*g_scale , 800*g_scale);
        preloaderUI.hide();
        g_sceneLayer.addChild(preloaderUI);
        g_praContainer.setPreloaderUI(preloaderUI);

        var praContainerAdapter:CPage2EyeanglePraContainerAdapter = new CPage2EyeanglePraContainerAdapter();
        praContainerAdapter.m_adaptee = g_praContainer;

        var shutdownPageAdapter:CPage2EuiAdapter = new CPage2EuiAdapter();
        shutdownPageAdapter.m_adaptee = g_shutdownScr;

        g_pageJumper.setPage("WelcomeScene" , g_welcomePage);
        g_pageJumper.setPage("PraScene" , praContainerAdapter);
        g_pageJumper.setPage("ShutdownScr" , shutdownPageAdapter);

        g_pageJumper.gotoPage("WelcomeScene",null);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public autoShutdown() {
/*        if(g_shutdownTimer.currentCount >= 12) 
        {
            g_pageJumper.gotoPage("ShutdownScr",null);
        }*/
        if(g_shutdownTimer.currentCount >= 1200) //20分钟。
        {
            g_pageJumper.gotoPage("ShutdownScr",null);
        }
    }
}
