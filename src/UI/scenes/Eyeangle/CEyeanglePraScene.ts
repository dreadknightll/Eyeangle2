/**
 *
 * /src/UI/scenes/Eyeangle/CEyeanglePraScene.ts
 * 
 * 练习场景界面。是用户主要使用的界面。
 *
 * 使用方法：setWinWidth/setWinHeight —> startNewPra
 * 
 */
namespace eyeangle2 {
    export class CEyeanglePraScene extends eui.Panel implements IEyeanglePraScene {
        public constructor() {
            super();

            this.m_wm = new CEyeangle2_winModel();
            if(S_BUILD_FOR != S_NATIVE_IOS) {
                this.m_wm.setTopSpaceHeight(0);
            }
            else {
                this.m_wm.setTopSpaceHeight(0); //已取消顶部空白条。
            }

            this.m_topSpace = new CTopSpace();

            this.m_UIPresenter = new CEyeangle2PraPresenter();
            this.m_pm = new CPraMachine_Eyeangle2();
            this.m_UIPresenter.bindPM(this.m_pm);

            this.m_tipBalloon1 = new CBalloonTip();
            this.m_tipBalloon1.visible = false;
            this.m_tipBalloon2 = new CBalloonTip();
            this.m_tipBalloon2.visible = false;

            this.m_notiLayer = new egret.DisplayObjectContainer();
            this.m_dlgLayer = new egret.DisplayObjectContainer();
            var notiLayerBg: egret.Shape = new egret.Shape();
            notiLayerBg.graphics.beginFill(0xaaaaaa,0.4);
            notiLayerBg.graphics.drawRect(0,0,g_winWidth,g_winHeight);
            notiLayerBg.graphics.endFill();
            this.m_notiLayer.visible = false;
            this.m_notiLayer.addChild(notiLayerBg);
        }

        public disableForNoti():void {
            this.disableScene();
        }

        public resumeAfterNoti():void {
            this.enableScene();
        }

        public applyFunc(func:any , argArr:Array<any>):void {
            func.apply(this,argArr);
        }

        _setParentContainer(c:IEyeanglePraContainer):void
        {
            this.m_parentContaier = c;
            this.m_UIPresenter.setRenderFilter(c._getRenderFilter());
        }

        _getParentContainer():IEyeanglePraContainer {
            return this.m_parentContaier;
        }
        
        public setAngleArr(aa:Array<CAngle>):void {
            this.m_pm.setAngleArr(aa);
        }

        public topSpaceGrp: eui.Group; //存放顶部空白的组。
        public m_topSpace: CTopSpace; //顶部空白。
        public topArea: eyeangle2.CTopArea; //顶部区域。
        public topAreaGroup: eui.Group;
        public midArea: eyeangle2.CMidArea; //中部区域。
        public midAreaGroup: eui.Group;
        public bottomArea: eyeangle2.CBottomArea; //底部区域。
        public bottomAreaGroup: eui.Group;
        public shutdownClock:gdeint.CShutdownClock;
        public cmpAngleDlg: CCmpAngleDlg; //得分显示牌。显示一次输入的得分。
        public finalScoreDlg: CFinalScoreDlg; //总分显示框。练习结束后显示最后结果。    

        private m_parentContaier:IEyeanglePraContainer;
        private m_dlgLayer:egret.DisplayObjectContainer;
        private m_notiLayer: egret.DisplayObjectContainer; // 只为调整显示层次。无需理会。


        private m2_isFirstPra: boolean = true; // 是否第一轮练习。

        public m_winWidth: number; //屏幕宽度。通过 g_winWidth 传进来。
        public m_winHeight: number; //屏幕高度。通过 g_winHeight 传进来。
        public m_wm:IEyeangle2WinModel; //画面布局模型。
        public m_userAngle: number; //用户输入的角度。

        public m_UIPresenter: IEyeangle2PraPresenter; //该画面对应得Presenter。
        private m_pm:IEyeanglePraMachine;

        public m_tipBalloon1:CBalloonTip;
        public m_tipBalloon2:CBalloonTip;

        // 顶部区域相关变量：
        private m_topOpen: boolean = true; //顶部打开标识
        private m_curImgResName:string = ""; //当前图片资源名
        // 中部区域相关变量：

        // 底部区域相关变量：

        public disableScene():void {
            this.enabled = false;
            this.m_notiLayer.visible = true;
        }
        public enableScene():void {
            this.enabled = true;
            this.m_notiLayer.visible = false;
        }
        public show():void {
            this.visible = true;
        }
        public hide():void {
            this.visible = false;
        }
        public isVisible():boolean {
            return this.visible;
        }

        /*
        *  界面子元素加载完成时触发。
        */ 
        public childrenCreated(): void {
            this.topSpaceGrp.addChild(this.m_topSpace);

            var rect: egret.Rectangle = new egret.Rectangle(0,0,this.topArea.width,this.topArea.height+5);
            this.topAreaGroup.mask = rect;

            this.shutdownClock.setFontSize(24);

            this.prepareTipBalloons();

            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onBackBtnTap,this);
            this.bottomArea.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOKBtnTap,this);
            this.bottomArea.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNextAngleBtnTap,this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCaliBtnTap , this);

            this.bottomArea.angleInputter.addEventListener(CAngleInputterEvent.EVT_DI_TOUCHSTART,this.onAngleInputerTch,this);
            this.bottomArea.angleInputter.addEventListener(CAngleInputterEvent.EVT_DI_TOUCHEND,this.onAngleInputerTchEnd,this);

            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP,this.onReplay,this);

            this.shutdownClock.setTimer(g_shutdownTimer);
            this.shutdownClock.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onClockTap , this);

        }

        private prepareTipBalloons():void {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        }

        /*
        *  创建场景。第一轮练习资源加载完成后调用。
        */
        private createScene():void {
            // Do prepare wm before drawing the screen framework!! 
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);

            this.m_UIPresenter.setWinWidth(480);
            this.m_UIPresenter.setWinHeight(this.m_winHeight);

            var imgSelPt:gdeint.CPoint;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = 0;
            imgSelPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());

            this.createTopSpace();
            this.createTop();
            this.createMiddle();
            this.createBottom();

            this.midArea.addEventListener(CMidAreaEvent.EVT_IMG_DRAGMOVE,this.onImgDragMove,this);
            this.midArea.addEventListener(CMidAreaEvent.EVT_IMG_DRAGEND,this.onImgDragEnd,this);

            this.refreshScene();
        }

        /*
        *  刷新场景。新练习开始后调用本函数重置各数值。
        */ 
        private refreshScene(): void {
            this.cmpAngleDlg.visible = false;
            this.topArea.scoreView.clearScore();
            this.topArea.progressView.clear();
            this.bottomArea.angleInputter.clearAngle();
            this.bottomArea.angleInputter.unlock();
            this.bottomArea.OKBtn.enabled = false;
            this.bottomArea.nextBtn.enabled = false;

            this.prepareTipBalloons();

            var balloonX:number = g_scenePos.m_x + 65*g_scale;
            var balloonY:number = g_scenePos.m_y + 190*g_scale; 

            this.m_tipBalloon1.x = balloonX - 20;
            this.m_tipBalloon1.y = balloonY;
            this.m_tipBalloon1.scaleX = g_scale;
            this.m_tipBalloon1.scaleY = g_scale;
            this.m_tipBalloon1.title = "提示";
            this.m_tipBalloon1.setContent("请目测图上显示的角度，并在下方区域输入您目测的结果。");
            this.m_tipBalloon1.visible = true;

            this.disableScene();

            this.m_tipBalloon2.x = balloonX + 20;
            this.m_tipBalloon2.y = balloonY;
            this.m_tipBalloon2.scaleX = g_scale;
            this.m_tipBalloon2.scaleY = g_scale;
            this.m_tipBalloon2.title = "提示";
            this.m_tipBalloon2.setContent("请目测图上显示的\n角度并在下方区域输入您目测的结果。");
            this.m_tipBalloon2.visible = false; // 隐藏2以防两个重叠显示。

            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE , this.onTipBalloon1Close , this);

            this.m_UIPresenter.updateFromPM();
            var pt:gdeint.CPoint;
            pt = new gdeint.CPoint();
            pt.m_x = 0;
            pt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(pt);
            this.syncWithUIPresenter();

            this.midArea.midContentGroup.x = 0;
            this.midArea.midContentGroup.y = 0;
            this.readjustThumbSel();
            g_praScene.enabled = false;
        }

        private m2_oldImgResName = "";
        /*
        * 在场景显示图片。
        */ 
        private showImg(imgResName:string):void {
            if(imgResName == this.m2_oldImgResName) {
                //图片没换，不用重新显示。
                return;
            }
            else {
                this.m2_oldImgResName = this.m_curImgResName;

                var tmpImg: egret.Bitmap = new egret.Bitmap();
                tmpImg.texture = RES.getRes(imgResName);

                this.m_UIPresenter.setImgWidth(tmpImg.width);
                this.m_UIPresenter.setImgHeight(tmpImg.height);

                this.m_curImgResName = imgResName;
                this.midArea.img.source = RES.getRes(imgResName);
                var imgRect:gdeint.CRect;
                imgRect = this.m_UIPresenter.getImgRect();
                this.midArea.img.width = imgRect.m_width;
                this.midArea.img.height = imgRect.m_height;

                // 设置mask避免图片显示在场景以外。iOS模拟器测试能显示大图片时能看到结果。
                var maskRect:egret.Rectangle = new egret.Rectangle();
                maskRect.x = 0;
                maskRect.y = 0;
                maskRect.width = this.m_winWidth;
                maskRect.height = this.m_winHeight;

                this.mask = maskRect;
    /*
        换了图片：框移到右上角；
        没换图片：框回到原来的位置：
    */
                if(this.m2_oldImgResName != this.m_curImgResName) {
                    var p:gdeint.CPoint = new gdeint.CPoint();
                    p.m_x = 0;
                    p.m_y = 0;

                    this.m_UIPresenter.inpThSelPt(p);
                    this.m_UIPresenter.inpImgSelPt(p);
                }

                this.readjustThumb();
                this.readjustThumbSel();
            }
        }

        /*
        * 在场景显示角度。
        */ 
        private showAngle(angle:CAngle) {

            this.showImg(angle.m2_imgResName);

            this.m_UIPresenter.showAngle(angle);
            this.syncWithUIPresenter();
        }

        /*
        * 创建顶部空白条。
        */ 
        private createTopSpace(): void {

            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopY();//this.m_wm.s_topY;
            this.m_topSpace.draw();
        }

        /*
        * 创建顶部区域。
        */ 
        private createTop(): void {
            this.topArea.addEventListener(CTopAreaEvent.EVT_SWITCHBTN_TAP,this.onTopBtnTab,this);
            this.topAreaGroup.y = this.m_wm.getTopY();//this.m_wm.s_topY;
        }

        /*
        * 创建中部区域。
        */ 
        public createMiddle():void {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
        }

        public createBottom():void {
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
        }

        public setWinWidth(ww): void {
            this.m_winWidth = ww;
        }

        public setWinHeight(wh): void {
            this.m_winHeight = wh;
        }

        /*
        * 刷新缩略图。
        */ 
        private readjustThumb(): void {
            var thRect:gdeint.CRect;
            thRect = this.m_UIPresenter.getThumbRect();
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
            this.topArea.thumbUI.x = thRect.m_left;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
        }

        /*
        * 刷新缩略图选框。设置 m_itm 或图片显示区域发生变动后应调用。
        */
        private readjustThumbSel(): void
        {
            var thSelRect:gdeint.CRect;
            thSelRect = this.m_UIPresenter.rfgetScrThumbSelRect();
            this.topArea.thumbUI.setSelRect(thSelRect);
        }

        /*
        * 开始新的练习。
        */ 
        public startNewPra(): void {
            this.m_pm.rePra(); // 重置练习数据。
            this.m_UIPresenter.updateFromPM();
            if(this.m2_isFirstPra) {
                this.m2_isFirstPra = false;

                this.createScene();
            }
            else {
                this.refreshScene();
            }
        }

        public getNotiLayer():egret.DisplayObjectContainer {
            return this.m_notiLayer;
        }

        public getDlgLayer():egret.DisplayObjectContainer {
            return this.m_dlgLayer;
        }

        /*
        * 关闭操作提示后触发。
        */ 
        private onTipBalloon1Close(evt:egret.Event) {
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE , this.onTipBalloon2Close , this);
            this.m_tipBalloon2.visible = true;
        }

        /*
        * 关闭操作提示后触发。
        */ 
        private onTipBalloon2Close(evt:egret.Event) {
            this.enabled = true;
            this.m_notiLayer.visible = false;
        }

        /*
        * 顶部按钮触摸后触发。
        */ 
        private onTopBtnTab(evt: egret.Event) {
            playBtnSnd();

            if(this.m_topOpen) // 已打开，关闭它。
            {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());

                this.midArea.setTrueHeight(this.m_wm.getMidHeight());

                var tw = egret.Tween.get(this.topArea);
                tw.to({ y: - (this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1()) },300);

                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() },300);
                tw2.to({ height: this.m_wm.getMidHeight() },300);

                var timer: egret.Timer = new egret.Timer(305,1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerTSClosed,this);
                timer.start();
            }
            else // 已关闭，打开它。
            {
                this.m_topOpen = true;
                this.m_wm.showTop();
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());

                var tw = egret.Tween.get(this.topArea);
                tw.to({ y: 0 },300);

                var tw2: egret.Tween = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() },300);
                tw2.to({ height: this.m_wm.getMidHeight() },300);

                var timer: egret.Timer = new egret.Timer(305,1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerTSOpen,this);
                timer.start();
            }
        }
        
        /*
        * 顶部收起动画完成时触发。
        */ 
        private timerTSOpen(event: egret.TimerEvent) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.x = 0;
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");

            this.readjustThumbSel();
        }

        private timerTSClosed(event: egret.TimerEvent): void {

            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.x = 0;
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");

            this.readjustThumbSel();
        }

        private onClockTap():void {
            g_praContainer.showAlert("为了您的健康，每次使用20分钟后自动停止。" , null);
        }

        /*
        * 图片拖动时触发。
        */ 
        private onImgDragMove(evt: CMidAreaEvent) {
            this.readjustThumbSel();
        }

        private onImgDragEnd(evt:CMidAreaEvent) {
            this.readjustThumbSel();
        }
        
        /*
        * “再来一次”按钮触摸时触发。
        */ 
        private onReplay(evt: egret.Event) {

            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.setScoreWithPro(0,-1);

            this.finalScoreDlg.visible = false;
            this.bottomArea.angleInputter.clearAngle();
            this.bottomArea.angleInputter.unlock();
            this.cmpAngleDlg.visible = false;

            this._getParentContainer()._getPreloaderUI().clearProgress();
            this._getParentContainer().startNewPra();
        }
        
        /*
        * 返回主菜单操作。
        */ 
        private back2MainMenu(): void {
            this.finalScoreDlg.visible = false;
            g_pageJumper.gotoPage("WelcomeScene",null);
        }

        /*
        * 触摸角度输入器时触发。
        */ 
        private onAngleInputerTch(evt: egret.Event) {
            if(this.bottomArea.angleInputter.inpAvailable()) {
                this.bottomArea.OKBtn.enabled = true;
            }
            else {
                this.bottomArea.OKBtn.enabled = false;
            }
        }

        private onAngleInputerTchEnd(evt: egret.Event) {
            if(this.bottomArea.angleInputter.inpAvailable()) {
                this.bottomArea.OKBtn.enabled = true;
                playBtnSnd();

            }
            else {
                this.bottomArea.OKBtn.enabled = false;
            }
            
        }

        /*
        * 触摸确定按钮后触发。
        */ 
        private onOKBtnTap(evt: egret.Event) {
            playBtnSnd();

            this.m_UIPresenter.inpUserAngle(this.bottomArea.angleInputter.getAngle());
            this.m_UIPresenter.submitUserAngle();
            this.m_UIPresenter.updateFromPM();

            // 显示正确角度：
            this.bottomArea.angleInputter.setCorreAngle(this.m_UIPresenter.getAngle().m_angleValue);
            this.bottomArea.angleInputter.lock();

            this.bottomArea.OKBtn.enabled = false;

            // 显示本次输入的得分，并显示星数：
            this.cmpAngleDlg.setRank(this.m_UIPresenter.getCurRank());
            this.cmpAngleDlg.visible = true;
            var tw: egret.Tween = egret.Tween.get(this.cmpAngleDlg);
            tw.to({ y: 450 },150);

            // 显示下一角度按钮：
            this.bottomArea.nextBtn.enabled = true;

            // 更新总分和进度显示：
            this.topArea.progressView.setProgress(this.m_UIPresenter.getProgress());
            this.topArea.scoreView.setScoreWithPro(this.m_UIPresenter.getScore(),this.m_UIPresenter.getProgress());

        }

        /*
        * 触摸“下一角度”按钮后触发。
        */ 
        private onNextAngleBtnTap(evt: egret.Event) {
            playBtnSnd();

            if(this.m_UIPresenter.getProgress() >= 10) {
                this.finalScoreDlg.visible = true;
                this.m_UIPresenter.updateFromPM();
                var score:number = this.m_UIPresenter.getScore();
                this.finalScoreDlg.setScore(score);

                if(score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if(score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if(score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);

                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！" , null);
                }
            }
            else {
                this.bottomArea.angleInputter.unlock();

                this.cmpAngleDlg.visible = false;
                this.cmpAngleDlg.y = 600;

                this.bottomArea.angleInputter.clearAngle();

                this.bottomArea.nextBtn.enabled = false;

                this.m_UIPresenter.nextAngle();
                this.m_UIPresenter.updateFromPM();
                this.showAngle(this.m_UIPresenter.getAngle());
            }
        }

        /*
        * 触摸返回按钮后触发。
        */ 
        private onBackBtnTap(evt:egret.TouchEvent) {
            this._getParentContainer()._getCaliDlg()._closeDlg();
            this._getParentContainer().showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？" , this.onBack2MainMenuConfirm);
        }

        private onBack2MainMenuConfirm(params:any) {
            var ret:boolean = <boolean>params;

            if(ret)
            {
                this.back2MainMenu();
            }
            else
            {
            }
        }
        
        /*
        * 触摸“横竖校准”按钮后触发。
        */ 
        private onCaliBtnTap(evt: egret.Event) {
            this._getParentContainer().showCaliDlg(this.onCaliDlgClose);
        }

        /*
        * 横竖校准窗口确定或取消、关闭后触发。
        */ 
        private onCaliDlgClose(dlgResult:boolean): void {
            if(dlgResult) { // 点了确定按钮：
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                this.m_UIPresenter.updateFromPM();
                this.syncWithUIPresenter();
            }
        }

        /*
        * 与presenter进行同步，把presenter里最新数据应用到场景。
        */ 
        public syncWithUIPresenter() : void {

            // 更新图片大小、位置等信息：
            var imgRect: gdeint.CRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.img.width = imgRect.m_width;
            this.midArea.img.height = imgRect.m_height;
            var tmpAngle:CAngle;
            tmpAngle = this.m_UIPresenter.getAngle();
            if(tmpAngle && null != tmpAngle) {
                this.showImg(tmpAngle.m2_imgResName);
            }
            this.midArea.midContentGroup.x = this.m_UIPresenter.getImgRect().m_left;
            this.midArea.midContentGroup.y = this.m_UIPresenter.getImgRect().m_top;

            // 重画待测角度：
/*            this.midArea.m_midCanvasOld.graphics.clear();
            this.midArea.m_midCanvasOld.graphics.lineStyle(5,0x000000,0.9);*/
            this.midArea.m_midAngleCanvas.graphics.clear();
            this.midArea.m_midAngleCanvas.graphics.lineStyle(5,0x000000,0.9);

            var tmpPt1,tmpPt2,tmpPt3,tmpPt4:gdeint.CPoint;
            tmpPt1 = this.m_UIPresenter.rfgetScrAngleVertexPt();
            tmpPt2 = this.m_UIPresenter.rfgetScrAngleEdge1Pt();
            tmpPt3 = this.m_UIPresenter.rfgetScrAngleVertexPt();
            tmpPt4 = this.m_UIPresenter.rfgetScrAngleEdge2Pt();
/*            this.midArea.m_midCanvasOld.graphics.moveTo(tmpPt1.m_x,tmpPt1.m_y);
            this.midArea.m_midCanvasOld.graphics.lineTo(tmpPt2.m_x,tmpPt2.m_y);
            this.midArea.m_midCanvasOld.graphics.moveTo(tmpPt3.m_x,tmpPt3.m_y);
            this.midArea.m_midCanvasOld.graphics.lineTo(tmpPt4.m_x,tmpPt4.m_y);
*/
            var tmpPt0:gdeint.CPoint = new gdeint.CPoint();

            var tmpMinX:number = tmpPt1.m_x;
            tmpMinX = tmpMinX<tmpPt2.m_x?tmpMinX:tmpPt2.m_x;
            tmpMinX = tmpMinX<tmpPt3.m_x?tmpMinX:tmpPt2.m_x;
            tmpMinX = tmpMinX<tmpPt4.m_x?tmpMinX:tmpPt2.m_x;
            tmpPt0.m_x = tmpMinX - 10;

            var tmpMinY:number = tmpPt1.m_y;
            tmpMinY = tmpMinY<tmpPt2.m_y?tmpMinY:tmpPt2.m_y;
            tmpMinY = tmpMinY<tmpPt3.m_y?tmpMinY:tmpPt2.m_y;
            tmpMinY = tmpMinY<tmpPt4.m_y?tmpMinY:tmpPt2.m_y;
            tmpPt0.m_y = tmpMinY - 10;


            this.midArea.m_midAngleCanvas.x = tmpPt0.m_x;
            this.midArea.m_midAngleCanvas.y = tmpPt0.m_y;
            this.midArea.m_midAngleCanvas.graphics.moveTo(tmpPt1.m_x-tmpPt0.m_x , tmpPt1.m_y-tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.lineTo(tmpPt2.m_x-tmpPt0.m_x , tmpPt2.m_y-tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.moveTo(tmpPt3.m_x-tmpPt0.m_x , tmpPt3.m_y-tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.lineTo(tmpPt4.m_x-tmpPt0.m_x , tmpPt4.m_y-tmpPt0.m_y);

            // 重新调整缩略图：
            this.readjustThumb();

            // 重新调整缩略图上的问号：

            var questionerCenterPt: gdeint.CPoint;
            questionerCenterPt = this.m_UIPresenter.rfgetScrThQuestionerCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerCenterPt.m_x-8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerCenterPt.m_y-11;

            // 重新调整缩略图选框：
            this.readjustThumbSel();

        }
    };
}