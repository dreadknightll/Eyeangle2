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
/**
 *
 * /src/UI/scenes/Eyeangle/CEyeanglePraScene.ts
 *
 * 练习场景界面。是用户主要使用的界面。
 *
 * 使用方法：setWinWidth/setWinHeight —> startNewPra
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CEyeanglePraScene = (function (_super) {
        __extends(CEyeanglePraScene, _super);
        function CEyeanglePraScene() {
            var _this = _super.call(this) || this;
            _this.m2_isFirstPra = true; // 是否第一轮练习。
            // 顶部区域相关变量：
            _this.m_topOpen = true; //顶部打开标识
            _this.m_curImgResName = ""; //当前图片资源名
            _this.m2_oldImgResName = "";
            _this.m_wm = new CEyeangle2_winModel();
            if (S_BUILD_FOR != S_NATIVE_IOS) {
                _this.m_wm.setTopSpaceHeight(0);
            }
            else {
                _this.m_wm.setTopSpaceHeight(0); //已取消顶部空白条。
            }
            _this.m_topSpace = new CTopSpace();
            _this.m_UIPresenter = new CEyeangle2PraPresenter();
            _this.m_pm = new CPraMachine_Eyeangle2();
            _this.m_UIPresenter.bindPM(_this.m_pm);
            _this.m_tipBalloon1 = new eyeangle2.CBalloonTip();
            _this.m_tipBalloon1.visible = false;
            _this.m_tipBalloon2 = new eyeangle2.CBalloonTip();
            _this.m_tipBalloon2.visible = false;
            _this.m_notiLayer = new egret.DisplayObjectContainer();
            _this.m_dlgLayer = new egret.DisplayObjectContainer();
            var notiLayerBg = new egret.Shape();
            notiLayerBg.graphics.beginFill(0xaaaaaa, 0.4);
            notiLayerBg.graphics.drawRect(0, 0, g_winWidth, g_winHeight);
            notiLayerBg.graphics.endFill();
            _this.m_notiLayer.visible = false;
            _this.m_notiLayer.addChild(notiLayerBg);
            return _this;
        }
        CEyeanglePraScene.prototype.disableForNoti = function () {
            this.disableScene();
        };
        CEyeanglePraScene.prototype.resumeAfterNoti = function () {
            this.enableScene();
        };
        CEyeanglePraScene.prototype.applyFunc = function (func, argArr) {
            func.apply(this, argArr);
        };
        CEyeanglePraScene.prototype._setParentContainer = function (c) {
            this.m_parentContaier = c;
            this.m_UIPresenter.setRenderFilter(c._getRenderFilter());
        };
        CEyeanglePraScene.prototype._getParentContainer = function () {
            return this.m_parentContaier;
        };
        CEyeanglePraScene.prototype.setAngleArr = function (aa) {
            this.m_pm.setAngleArr(aa);
        };
        // 中部区域相关变量：
        // 底部区域相关变量：
        CEyeanglePraScene.prototype.disableScene = function () {
            this.enabled = false;
            this.m_notiLayer.visible = true;
        };
        CEyeanglePraScene.prototype.enableScene = function () {
            this.enabled = true;
            this.m_notiLayer.visible = false;
        };
        CEyeanglePraScene.prototype.show = function () {
            this.visible = true;
        };
        CEyeanglePraScene.prototype.hide = function () {
            this.visible = false;
        };
        CEyeanglePraScene.prototype.isVisible = function () {
            return this.visible;
        };
        /*
        *  界面子元素加载完成时触发。
        */
        CEyeanglePraScene.prototype.childrenCreated = function () {
            this.topSpaceGrp.addChild(this.m_topSpace);
            var rect = new egret.Rectangle(0, 0, this.topArea.width, this.topArea.height + 5);
            this.topAreaGroup.mask = rect;
            this.prepareTipBalloons();
            this.bottomArea.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackBtnTap, this);
            this.bottomArea.OKBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOKBtnTap, this);
            this.bottomArea.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextAngleBtnTap, this);
            this.bottomArea.caliBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCaliBtnTap, this);
            this.bottomArea.angleInputter.addEventListener(CAngleInputterEvent.EVT_DI_TOUCHSTART, this.onAngleInputerTch, this);
            this.bottomArea.angleInputter.addEventListener(CAngleInputterEvent.EVT_DI_TOUCHEND, this.onAngleInputerTchEnd, this);
            this.finalScoreDlg.addEventListener(CFinalScoreDlgEvent.EVT_REPLAY_BTN_TAP, this.onReplay, this);
        };
        CEyeanglePraScene.prototype.prepareTipBalloons = function () {
            this.m_notiLayer.addChild(this.m_tipBalloon1);
            this.m_notiLayer.addChild(this.m_tipBalloon2);
        };
        /*
        *  创建场景。第一轮练习资源加载完成后调用。
        */
        CEyeanglePraScene.prototype.createScene = function () {
            // Do prepare wm before drawing the screen framework!! 
            this.m_wm.setWinWidth(this.m_winWidth);
            this.m_wm.setWinHeight(this.m_winHeight);
            this.m_UIPresenter.setWinWidth(480);
            this.m_UIPresenter.setWinHeight(this.m_winHeight);
            var imgSelPt;
            imgSelPt = new gdeint.CPoint();
            imgSelPt.m_x = 0;
            imgSelPt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(imgSelPt);
            this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());
            this.createTopSpace();
            this.createTop();
            this.createMiddle();
            this.createBottom();
            this.midArea.addEventListener(CMidAreaEvent.EVT_IMG_DRAGMOVE, this.onImgDragMove, this);
            this.midArea.addEventListener(CMidAreaEvent.EVT_IMG_DRAGEND, this.onImgDragEnd, this);
            this.refreshScene();
        };
        /*
        *  刷新场景。新练习开始后调用本函数重置各数值。
        */
        CEyeanglePraScene.prototype.refreshScene = function () {
            this.cmpAngleDlg.visible = false;
            this.topArea.scoreView.clearScore();
            this.topArea.progressView.clear();
            this.bottomArea.angleInputter.clearAngle();
            this.bottomArea.angleInputter.unlock();
            this.bottomArea.OKBtn.enabled = false;
            this.bottomArea.nextBtn.enabled = false;
            this.prepareTipBalloons();
            var balloonX = g_scenePos.m_x + 65 * g_scale;
            var balloonY = g_scenePos.m_y + 190 * g_scale;
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
            this.m_tipBalloon1.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon1Close, this);
            this.m_UIPresenter.updateFromPM();
            var pt;
            pt = new gdeint.CPoint();
            pt.m_x = 0;
            pt.m_y = 0;
            this.m_UIPresenter.inpImgSelPt(pt);
            this.syncWithUIPresenter();
            this.midArea.midContentGroup.x = 0;
            this.midArea.midContentGroup.y = 0;
            this.readjustThumbSel();
            g_praScene.enabled = false;
        };
        /*
        * 在场景显示图片。
        */
        CEyeanglePraScene.prototype.showImg = function (imgResName) {
            if (imgResName == this.m2_oldImgResName) {
                //图片没换，不用重新显示。
                return;
            }
            else {
                this.m2_oldImgResName = this.m_curImgResName;
                var tmpImg = new egret.Bitmap();
                tmpImg.texture = RES.getRes(imgResName);
                this.m_UIPresenter.setImgWidth(tmpImg.width);
                this.m_UIPresenter.setImgHeight(tmpImg.height);
                this.m_curImgResName = imgResName;
                this.midArea.img.source = RES.getRes(imgResName);
                var imgRect;
                imgRect = this.m_UIPresenter.getImgRect();
                this.midArea.img.width = imgRect.m_width;
                this.midArea.img.height = imgRect.m_height;
                // 设置mask避免图片显示在场景以外。iOS模拟器测试能显示大图片时能看到结果。
                var maskRect = new egret.Rectangle();
                maskRect.x = 0;
                maskRect.y = 0;
                maskRect.width = this.m_winWidth;
                maskRect.height = this.m_winHeight;
                this.mask = maskRect;
                /*
                    换了图片：框移到右上角；
                    没换图片：框回到原来的位置：
                */
                if (this.m2_oldImgResName != this.m_curImgResName) {
                    var p = new gdeint.CPoint();
                    p.m_x = 0;
                    p.m_y = 0;
                    this.m_UIPresenter.inpThSelPt(p);
                    this.m_UIPresenter.inpImgSelPt(p);
                }
                this.readjustThumb();
                this.readjustThumbSel();
            }
        };
        /*
        * 在场景显示角度。
        */
        CEyeanglePraScene.prototype.showAngle = function (angle) {
            this.showImg(angle.m2_imgResName);
            this.m_UIPresenter.showAngle(angle);
            this.syncWithUIPresenter();
        };
        /*
        * 创建顶部空白条。
        */
        CEyeanglePraScene.prototype.createTopSpace = function () {
            this.m_topSpace.x = 0;
            this.m_topSpace.y = 0;
            this.m_topSpace.setColor(0xFFFFFF);
            this.m_topSpace.width = this.m_wm.getWinWidth();
            this.m_topSpace.height = this.m_wm.getTopY(); //this.m_wm.s_topY;
            this.m_topSpace.draw();
        };
        /*
        * 创建顶部区域。
        */
        CEyeanglePraScene.prototype.createTop = function () {
            this.topArea.addEventListener(CTopAreaEvent.EVT_SWITCHBTN_TAP, this.onTopBtnTab, this);
            this.topAreaGroup.y = this.m_wm.getTopY(); //this.m_wm.s_topY;
        };
        /*
        * 创建中部区域。
        */
        CEyeanglePraScene.prototype.createMiddle = function () {
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.midArea.setTrueWidth(this.m_winWidth);
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
        };
        CEyeanglePraScene.prototype.createBottom = function () {
            this.bottomAreaGroup.y = this.m_wm.getBottomY();
        };
        CEyeanglePraScene.prototype.setWinWidth = function (ww) {
            this.m_winWidth = ww;
        };
        CEyeanglePraScene.prototype.setWinHeight = function (wh) {
            this.m_winHeight = wh;
        };
        /*
        * 刷新缩略图。
        */
        CEyeanglePraScene.prototype.readjustThumb = function () {
            var thRect;
            thRect = this.m_UIPresenter.getThumbRect();
            this.topArea.thumbUI.setThumbWidth(thRect.m_width);
            this.topArea.thumbUI.setThumbHeight(thRect.m_height);
            this.topArea.thumbUI.x = thRect.m_left;
            this.topArea.thumbUI.y = thRect.m_top;
            this.topArea.thumbUI.setImgSrc(this.m_curImgResName);
        };
        /*
        * 刷新缩略图选框。设置 m_itm 或图片显示区域发生变动后应调用。
        */
        CEyeanglePraScene.prototype.readjustThumbSel = function () {
            var thSelRect;
            thSelRect = this.m_UIPresenter.rfgetScrThumbSelRect();
            this.topArea.thumbUI.setSelRect(thSelRect);
        };
        /*
        * 开始新的练习。
        */
        CEyeanglePraScene.prototype.startNewPra = function () {
            this.m_pm.rePra(); // 重置练习数据。
            this.m_UIPresenter.updateFromPM();
            if (this.m2_isFirstPra) {
                this.m2_isFirstPra = false;
                this.createScene();
            }
            else {
                this.refreshScene();
            }
        };
        CEyeanglePraScene.prototype.getNotiLayer = function () {
            return this.m_notiLayer;
        };
        CEyeanglePraScene.prototype.getDlgLayer = function () {
            return this.m_dlgLayer;
        };
        /*
        * 关闭操作提示后触发。
        */
        CEyeanglePraScene.prototype.onTipBalloon1Close = function (evt) {
            this.m_tipBalloon2.addEventListener(CBalloonTipEvent.EVT_CLOSE, this.onTipBalloon2Close, this);
            this.m_tipBalloon2.visible = true;
        };
        /*
        * 关闭操作提示后触发。
        */
        CEyeanglePraScene.prototype.onTipBalloon2Close = function (evt) {
            this.enabled = true;
            this.m_notiLayer.visible = false;
        };
        /*
        * 顶部按钮触摸后触发。
        */
        CEyeanglePraScene.prototype.onTopBtnTab = function (evt) {
            playBtnSnd();
            if (this.m_topOpen) {
                this.m_topOpen = false;
                this.m_wm.hideTop();
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());
                this.midArea.setTrueHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                tw.to({ y: -(this.m_wm.getTopHeight2() - this.m_wm.getTopHeight1()) }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSClosed, this);
                timer.start();
            }
            else {
                this.m_topOpen = true;
                this.m_wm.showTop();
                this.m_UIPresenter.inpImgSelHeight(this.m_wm.getMidHeight());
                var tw = egret.Tween.get(this.topArea);
                tw.to({ y: 0 }, 300);
                var tw2 = egret.Tween.get(this.midAreaGroup);
                tw2.to({ y: this.m_wm.getMidY() }, 300);
                tw2.to({ height: this.m_wm.getMidHeight() }, 300);
                var timer = new egret.Timer(305, 1);
                timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerTSOpen, this);
                timer.start();
            }
        };
        /*
        * 顶部收起动画完成时触发。
        */
        CEyeanglePraScene.prototype.timerTSOpen = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.x = 0;
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_up_png");
            this.readjustThumbSel();
        };
        CEyeanglePraScene.prototype.timerTSClosed = function (event) {
            this.midArea.setTrueHeight(this.m_wm.getMidHeight());
            this.midAreaGroup.x = 0;
            this.midAreaGroup.y = this.m_wm.getMidY();
            this.topArea.switchBtn.source = RES.getRes("top_screen_button_down_png");
            this.readjustThumbSel();
        };
        /*
        * 图片拖动时触发。
        */
        CEyeanglePraScene.prototype.onImgDragMove = function (evt) {
            this.readjustThumbSel();
        };
        CEyeanglePraScene.prototype.onImgDragEnd = function (evt) {
            this.readjustThumbSel();
        };
        /*
        * “再来一次”按钮触摸时触发。
        */
        CEyeanglePraScene.prototype.onReplay = function (evt) {
            this.topArea.progressView.setProgress(0);
            this.topArea.scoreView.setScoreWithPro(0, -1);
            this.finalScoreDlg.visible = false;
            this.bottomArea.angleInputter.clearAngle();
            this.bottomArea.angleInputter.unlock();
            this.cmpAngleDlg.visible = false;
            this._getParentContainer()._getPreloaderUI().clearProgress();
            this._getParentContainer().startNewPra();
        };
        /*
        * 返回主菜单操作。
        */
        CEyeanglePraScene.prototype.back2MainMenu = function () {
            this.finalScoreDlg.visible = false;
            g_pageJumper.gotoPage("WelcomeScene", null);
        };
        /*
        * 触摸角度输入器时触发。
        */
        CEyeanglePraScene.prototype.onAngleInputerTch = function (evt) {
            if (this.bottomArea.angleInputter.inpAvailable()) {
                this.bottomArea.OKBtn.enabled = true;
            }
            else {
                this.bottomArea.OKBtn.enabled = false;
            }
        };
        CEyeanglePraScene.prototype.onAngleInputerTchEnd = function (evt) {
            if (this.bottomArea.angleInputter.inpAvailable()) {
                this.bottomArea.OKBtn.enabled = true;
                playBtnSnd();
            }
            else {
                this.bottomArea.OKBtn.enabled = false;
            }
        };
        /*
        * 触摸确定按钮后触发。
        */
        CEyeanglePraScene.prototype.onOKBtnTap = function (evt) {
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
            var tw = egret.Tween.get(this.cmpAngleDlg);
            tw.to({ y: 450 }, 150);
            // 显示下一角度按钮：
            this.bottomArea.nextBtn.enabled = true;
            // 更新总分和进度显示：
            this.topArea.progressView.setProgress(this.m_UIPresenter.getProgress());
            this.topArea.scoreView.setScoreWithPro(this.m_UIPresenter.getScore(), this.m_UIPresenter.getProgress());
        };
        /*
        * 触摸“下一角度”按钮后触发。
        */
        CEyeanglePraScene.prototype.onNextAngleBtnTap = function (evt) {
            playBtnSnd();
            if (this.m_UIPresenter.getProgress() >= 10) {
                this.finalScoreDlg.visible = true;
                this.m_UIPresenter.updateFromPM();
                var score = this.m_UIPresenter.getScore();
                this.finalScoreDlg.setScore(score);
                if (score >= 270) {
                    this.finalScoreDlg.setStars(3);
                }
                else if (score >= 240) {
                    this.finalScoreDlg.setStars(2);
                }
                else if (score >= 180) {
                    this.finalScoreDlg.setStars(1);
                }
                else {
                    this.finalScoreDlg.setStars(0);
                    this._getParentContainer().showAlert("成绩很差哟！\n别灰心，继续努力！！", null);
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
        };
        /*
        * 触摸返回按钮后触发。
        */
        CEyeanglePraScene.prototype.onBackBtnTap = function (evt) {
            this._getParentContainer()._getCaliDlg()._closeDlg();
            this._getParentContainer().showConfirm("该操作将放弃当前练习的进度和数据。\n您确定继续吗？", this.onBack2MainMenuConfirm);
        };
        CEyeanglePraScene.prototype.onBack2MainMenuConfirm = function (params) {
            var ret = params;
            if (ret) {
                this.back2MainMenu();
            }
            else {
            }
        };
        /*
        * 触摸“横竖校准”按钮后触发。
        */
        CEyeanglePraScene.prototype.onCaliBtnTap = function (evt) {
            this._getParentContainer().showCaliDlg(this.onCaliDlgClose);
        };
        /*
        * 横竖校准窗口确定或取消、关闭后触发。
        */
        CEyeanglePraScene.prototype.onCaliDlgClose = function (dlgResult) {
            if (dlgResult) {
                this.m_UIPresenter.setCaRat(this._getParentContainer().getCaRat());
                this.m_UIPresenter.updateFromPM();
                this.syncWithUIPresenter();
            }
        };
        /*
        * 与presenter进行同步，把presenter里最新数据应用到场景。
        */
        CEyeanglePraScene.prototype.syncWithUIPresenter = function () {
            // 更新图片大小、位置等信息：
            var imgRect;
            imgRect = this.m_UIPresenter.getImgRect();
            this.midArea.img.width = imgRect.m_width;
            this.midArea.img.height = imgRect.m_height;
            var tmpAngle;
            tmpAngle = this.m_UIPresenter.getAngle();
            if (tmpAngle && null != tmpAngle) {
                this.showImg(tmpAngle.m2_imgResName);
            }
            this.midArea.midContentGroup.x = this.m_UIPresenter.getImgRect().m_left;
            this.midArea.midContentGroup.y = this.m_UIPresenter.getImgRect().m_top;
            // 重画待测角度：
            /*            this.midArea.m_midCanvasOld.graphics.clear();
                        this.midArea.m_midCanvasOld.graphics.lineStyle(5,0x000000,0.9);*/
            this.midArea.m_midAngleCanvas.graphics.clear();
            this.midArea.m_midAngleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
            var tmpPt1, tmpPt2, tmpPt3, tmpPt4;
            tmpPt1 = this.m_UIPresenter.rfgetScrAngleVertexPt();
            tmpPt2 = this.m_UIPresenter.rfgetScrAngleEdge1Pt();
            tmpPt3 = this.m_UIPresenter.rfgetScrAngleVertexPt();
            tmpPt4 = this.m_UIPresenter.rfgetScrAngleEdge2Pt();
            /*            this.midArea.m_midCanvasOld.graphics.moveTo(tmpPt1.m_x,tmpPt1.m_y);
                        this.midArea.m_midCanvasOld.graphics.lineTo(tmpPt2.m_x,tmpPt2.m_y);
                        this.midArea.m_midCanvasOld.graphics.moveTo(tmpPt3.m_x,tmpPt3.m_y);
                        this.midArea.m_midCanvasOld.graphics.lineTo(tmpPt4.m_x,tmpPt4.m_y);
            */
            var tmpPt0 = new gdeint.CPoint();
            var tmpMinX = tmpPt1.m_x;
            tmpMinX = tmpMinX < tmpPt2.m_x ? tmpMinX : tmpPt2.m_x;
            tmpMinX = tmpMinX < tmpPt3.m_x ? tmpMinX : tmpPt2.m_x;
            tmpMinX = tmpMinX < tmpPt4.m_x ? tmpMinX : tmpPt2.m_x;
            tmpPt0.m_x = tmpMinX - 10;
            var tmpMinY = tmpPt1.m_y;
            tmpMinY = tmpMinY < tmpPt2.m_y ? tmpMinY : tmpPt2.m_y;
            tmpMinY = tmpMinY < tmpPt3.m_y ? tmpMinY : tmpPt2.m_y;
            tmpMinY = tmpMinY < tmpPt4.m_y ? tmpMinY : tmpPt2.m_y;
            tmpPt0.m_y = tmpMinY - 10;
            this.midArea.m_midAngleCanvas.x = tmpPt0.m_x;
            this.midArea.m_midAngleCanvas.y = tmpPt0.m_y;
            this.midArea.m_midAngleCanvas.graphics.moveTo(tmpPt1.m_x - tmpPt0.m_x, tmpPt1.m_y - tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.lineTo(tmpPt2.m_x - tmpPt0.m_x, tmpPt2.m_y - tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.moveTo(tmpPt3.m_x - tmpPt0.m_x, tmpPt3.m_y - tmpPt0.m_y);
            this.midArea.m_midAngleCanvas.graphics.lineTo(tmpPt4.m_x - tmpPt0.m_x, tmpPt4.m_y - tmpPt0.m_y);
            // 重新调整缩略图：
            this.readjustThumb();
            // 重新调整缩略图上的问号：
            var questionerCenterPt;
            questionerCenterPt = this.m_UIPresenter.rfgetScrThQuestionerCenterPt();
            this.topArea.thumbUI.thumbQuestioner.x = questionerCenterPt.m_x - 8;
            this.topArea.thumbUI.thumbQuestioner.y = questionerCenterPt.m_y - 11;
            // 重新调整缩略图选框：
            this.readjustThumbSel();
        };
        return CEyeanglePraScene;
    }(eui.Panel));
    eyeangle2.CEyeanglePraScene = CEyeanglePraScene;
    __reflect(CEyeanglePraScene.prototype, "eyeangle2.CEyeanglePraScene", ["IEyeanglePraScene", "IScene", "IHidable", "INotiParent", "IContainerPlugin"]);
    ;
})(eyeangle2 || (eyeangle2 = {}));
