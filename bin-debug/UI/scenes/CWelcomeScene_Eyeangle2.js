/****************************************************
 * /src/UI/scenes/CWelcomeScene_Eyeangle2.ts
 *
 * 欢迎场景界面。
 *
 ****************************************************/
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
var g_localVer; // 本地版本号。
var g_latestVer; // 最新版本号。
var eyeangle2;
(function (eyeangle2) {
    var CWelcomeScene_Eyeangle2 = (function (_super) {
        __extends(CWelcomeScene_Eyeangle2, _super);
        function CWelcomeScene_Eyeangle2() {
            var _this = _super.call(this) || this;
            _this.m_cc = false; //Children created boolean.
            _this.m2_tmpS2StartBtn = true; //Switched to StartBtn.
            _this.m_squareTag = 1;
            _this.m_squareChCntTotal = 1; // 表示换图所需敲击次数。敲击多了该值会逐渐增大，换图逐渐变慢。
            _this.m_squareChCntLeft = 1; // 剩余换图敲击次数。敲击一次该值减小1。减到 0 则换图并把该值置为换图最大次数。
            _this.m_cc = false;
            _this.m2_tmpS2StartBtn = true;
            return _this;
        }
        CWelcomeScene_Eyeangle2.prototype.switch2StartBtn = function () {
            this.m2_tmpS2StartBtn = true;
            if (this.m_cc) {
                this.startBtn.visible = true;
                this.startCharAni.visible = false;
            }
        };
        CWelcomeScene_Eyeangle2.prototype.childrenCreated = function () {
            //Draw bg color
            var tmp;
            tmp = new egret.Shape();
            tmp.graphics.beginFill(0xFFFFFF);
            tmp.graphics.drawRect(0, 0, this.width, this.height);
            tmp.graphics.endFill();
            if (S_BUILD_FOR == S_NATIVE_IOS || !S_CHECK_UPDATE_ANDROID) {
                this.updateGroup.visible = false;
            }
            // 初始化正方形上的红圈动画：
            this.m_rippleCircle = new egret.Bitmap();
            this.m_rippleCircle.x = 329;
            this.m_rippleCircle.y = 569;
            this.m_rippleCircle.width = 20;
            this.m_rippleCircle.height = 20;
            //红圈中点：329,569。最大直径：150。
            this.m_rippleCircle.texture = RES.getRes("rippleCircle_png");
            this.addChild(this.m_rippleCircle);
            //开启红圈动画效果:
            var tw = egret.Tween.get(this.m_rippleCircle, { loop: true });
            tw.to({ x: 264, y: 504, width: 150, height: 150, alpha: 0.4 }, 200).to({ alpha: 0 }, 100).wait(1500).to({ x: 329, y: 569, width: 20, height: 20 });
            //获取程序本地版本号和服务器上的最新版本号：
            var tmpJson = RES.getRes("localVer_json");
            g_localVer = tmpJson.curVer;
            this.localVer.text = g_localVer;
            this.m_latestVerLoader = new egret.URLLoader();
            this.m_latestVerLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            this.m_latestVerLoader.addEventListener(egret.Event.COMPLETE, this.onLatestVerLoaded, this);
            var latestVerURL = "http://www.gdeint.cn/download/eyeangle/latestVer.json";
            if (S_BUILD_FOR != S_NATIVE_IOS && S_CHECK_UPDATE_ANDROID) {
                RES.getResByUrl(latestVerURL, this.onLatestVerLoaded, this, RES.ResourceItem.TYPE_JSON);
            }
            if (S_BUILD_FOR == S_NATIVE_IOS) {
                //对于iOS，需要调整按钮的位置。
                this.showCRBtn.x += 20;
                this.showCRBtn.y += 15;
            }
            if (this.m2_tmpS2StartBtn) {
                this.startBtn.visible = true;
                this.startCharAni.visible = false;
            }
            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowCR, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartPra, this);
            this.caliSquare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSquareTap, this);
            this.m_cc = true;
        };
        CWelcomeScene_Eyeangle2.prototype.onLatestVerLoaded = function (e) {
            var jsnTxt = e;
            this.latestVer.text = jsnTxt.curVer;
        };
        CWelcomeScene_Eyeangle2.prototype.onShowCR = function () {
            this.crPanel.visible = true;
        };
        CWelcomeScene_Eyeangle2.prototype.onStartPra = function (evt) {
            //        先显示翻页动画 （未完成）
            this.m2_tmpS2StartBtn = false;
            this.startBtn.visible = false;
            this.startCharAni.visible = true;
            g_praContainer.startNewPra();
            g_praContainer.saveVisibleStates();
            g_pageJumper.gotoPage("PraScene", null);
        };
        CWelcomeScene_Eyeangle2.prototype.onSquareTap = function (evt) {
            --this.m_squareChCntLeft;
            if (this.m_squareChCntLeft <= 0) {
                this.m_squareTag = this.m_squareTag % 3 + 1;
                var squNameStr;
                squNameStr = "square" + this.m_squareTag + "_png";
                this.caliSquare.source = squNameStr;
                if (this.m_squareTag <= 1) {
                    ++this.m_squareChCntTotal;
                }
                this.m_squareChCntLeft = this.m_squareChCntTotal;
            }
        };
        return CWelcomeScene_Eyeangle2;
    }(eui.Component));
    eyeangle2.CWelcomeScene_Eyeangle2 = CWelcomeScene_Eyeangle2;
    __reflect(CWelcomeScene_Eyeangle2.prototype, "eyeangle2.CWelcomeScene_Eyeangle2");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CWelcomeScene_Eyeangle2.js.map