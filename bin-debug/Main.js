// Main.ts
//////////////////////////////////////////////////////////////////////////////////////
//
//  梁力 版权所有。Copyright (c) 2018-present.
//
//////////////////////////////////////////////////////////////////////////////////////
// 宜英（eint或gdeint）是本作者设立的个人品牌。
// 本程序采用北京白鹭公司的白鹭引擎为核心。
// 本程序调用了libGdeint库。libGdeint是本作者开发的共享库，供多套软件调用，命名空间主要是gdeint。
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
 *  启动过程：系统启动屏幕—>资源加载启动屏幕—>欢迎画面--开始练习-->练习画面。
 *  数据结构：一个 pic 对应一个 json文件，描述一张或多张图片，一张图片带一个位图文件和多个角度供练习使用。每次练习随机选取若干 json文件作为数据。
 */
var S_WEB = 1;
var S_NATIVE_ANDROID = 2;
var S_NATIVE_IOS = 3;
var S_NATIVE_WP = 4;
var S_WECHAT = 5; // 不能上线。无著作权。
var S_BUILD_FOR = S_NATIVE_IOS;
var S_CHECK_UPDATE_ANDROID = false; // 是否检查更新。
var g_welcomeScene; //欢迎画面。
var g_welcomePage;
var g_praScene; //练习画面。
var g_praContainer;
var g_pageJumper;
var g_console; //调试终端。
var g_winWidth; // 场景宽度。屏幕准备好以后迅速填入。
var g_winHeight;
var g_scale = 1; // 缩放比例。随着屏幕分辨率的增大而增大。横竖使用同一缩放比例来保持宽高比。
var g_scenePos; // 场景的坐标。注：不要在这里new，否则加密打包apk后会无法运行。
var g_loadingView; // 程序启动时的资源加载画面。
var g_sceneLayer; // 只为调整显示层次。无需理会。
var g_dlgLayerContainer; // 只为调整显示层次。无需理会。
var g_notiLayerContainer; //只为调整层次。无需理会。用于存放各container的notiLayer
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
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
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var scaleX, scaleY, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        g_loadingView = new LoadingUI_Eint_V2();
                        this.stage.addChild(g_loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("logo")];
                    case 3:
                        _a.sent();
                        g_winWidth = this.stage.stageWidth;
                        g_winHeight = this.stage.stageHeight;
                        scaleX = g_winWidth / 480;
                        scaleY = g_winHeight / 800;
                        if (scaleX < scaleY) {
                            g_scale = scaleX;
                            g_scenePos.m_x = 0;
                            g_scenePos.m_y = (g_winHeight - 800 * g_scale) / 2;
                        }
                        else {
                            g_scale = scaleY;
                            g_scenePos.m_x = (g_winWidth - 480 * g_scale) / 2;
                            g_scenePos.m_y = 0;
                        }
                        g_loadingView.setWinSize(g_winWidth, g_winHeight);
                        g_loadingView.height = g_winHeight; // No overlap with the prior line!
                        g_loadingView.x = 0;
                        g_loadingView.y = 0;
                        g_loadingView.create();
                        this.stage.addChild(g_loadingView);
                        g_loadingView.visible = true;
                        return [4 /*yield*/, RES.loadGroup("preload", 0, g_loadingView)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("eint", 0, g_loadingView)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("eyeangle", 0, g_loadingView)];
                    case 6:
                        _a.sent();
                        this.stage.removeChild(g_loadingView);
                        return [3 /*break*/, 8];
                    case 7:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createScene = function () {
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
        g_praContainer = new CEyeanglePraContainer();
        g_praScene = new eyeangle2.CEyeanglePraScene();
        g_praScene.setWinWidth(480 /*this.stage.stageWidth*/); // 当前版本：直接指定480低分辨率。将来版本：根据舞台尺寸获取合适分辨率。
        g_praScene.setWinHeight(800 /*this.stage.stageHeight*/);
        g_praScene.scaleX = g_scale;
        g_praScene.scaleY = g_scale;
        g_praScene.x = g_scenePos.m_x;
        g_praScene.y = g_scenePos.m_y;
        g_praScene.visible = false;
        g_sceneLayer.addChild(g_praScene);
        g_dlgLayerContainer.addChild(g_praScene.getDlgLayer());
        g_notiLayerContainer.addChild(g_praScene.getNotiLayer());
        var caliDlg = new eyeangle2.CCaliDlg();
        caliDlg = new eyeangle2.CCaliDlg();
        caliDlg.visible = false;
        caliDlg.x = 40;
        caliDlg.y = 80;
        g_praContainer.setPraScene(g_praScene);
        var cad = new eyeangle2.CAlertPanel();
        cad.setSceneRect(g_scenePos.m_x, g_scenePos.m_y, 480 * g_scale, 800 * g_scale);
        g_praContainer.setAlertDlg(cad);
        var cd = new eyeangle2.CConfirmPanel();
        cd.setSceneRect(g_scenePos.m_x, g_scenePos.m_y, 480 * g_scale, 800 * g_scale);
        g_praContainer.setConfirmDlg(cd);
        caliDlg.setSceneRect(g_scenePos.m_x, g_scenePos.m_y, 480 * g_scale, 800 * g_scale);
        g_praContainer.setCaliDlg(caliDlg);
        var preloaderUI = new eyeangle2.CPreloaderUI();
        preloaderUI.setSceneRect(g_scenePos.m_x, g_scenePos.m_y, 480 * g_scale, 800 * g_scale);
        preloaderUI.hide();
        g_sceneLayer.addChild(preloaderUI);
        g_praContainer.setPreloaderUI(preloaderUI);
        g_pageJumper = new CPageJumper();
        var praContainerAdapter = new CPage2EyeanglePraContainerAdapter();
        praContainerAdapter.m_adaptee = g_praContainer;
        g_pageJumper.setPage("WelcomeScene", g_welcomePage);
        g_pageJumper.setPage("PraScene", praContainerAdapter);
        g_pageJumper.gotoPage("WelcomeScene", null);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
//# sourceMappingURL=Main.js.map