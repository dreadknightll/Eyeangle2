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
var eyeangle2;
(function (eyeangle2) {
    var CWelcomeScene_Eyeangle2_V2 = (function (_super) {
        __extends(CWelcomeScene_Eyeangle2_V2, _super);
        function CWelcomeScene_Eyeangle2_V2() {
            var _this = _super.call(this) || this;
            _this.m_cc = false; //Children created boolean.
            _this.m2_tmpS2StartBtn = true; //Switched to StartBtn.
            _this.m_cc = false;
            _this.m2_tmpS2StartBtn = true;
            return _this;
        }
        CWelcomeScene_Eyeangle2_V2.prototype.switch2StartBtn = function () {
            this.m2_tmpS2StartBtn = true;
            if (this.m_cc) {
                this.startBtn.visible = true;
            }
        };
        CWelcomeScene_Eyeangle2_V2.prototype.childrenCreated = function () {
            /*
                        if(S_BUILD_FOR == S_NATIVE_IOS || !S_CHECK_UPDATE_ANDROID) {
                            this.updateGroup.visible = false;
                        }
            */
            /*
                        //获取程序本地版本号和服务器上的最新版本号：
                        var tmpJson = RES.getRes("localVer_json");
                        g_localVer = tmpJson.curVer;
                        this.localVer.text = g_localVer;
            
                        this.m_latestVerLoader = new egret.URLLoader();
                        this.m_latestVerLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
                        this.m_latestVerLoader.addEventListener(egret.Event.COMPLETE,this.onLatestVerLoaded,this);
            
                        var latestVerURL: string = "http://www.gdeint.cn/download/eyeangle/latestVer.json";
            
                        if(S_BUILD_FOR!=S_NATIVE_IOS && S_CHECK_UPDATE_ANDROID) {
                            RES.getResByUrl(latestVerURL,this.onLatestVerLoaded,this,RES.ResourceItem.TYPE_JSON);
                        }
            */
            /*            if(S_BUILD_FOR == S_NATIVE_IOS) {
                            //对于iOS，需要调整按钮的位置。
                            this.showCRBtn.x += 20;
                            this.showCRBtn.y += 15;
                        }*/
            if (this.m2_tmpS2StartBtn) {
                this.startBtn.visible = true;
            }
            //填写超链接文本流：
            //1、用户协议：
            this.userProLabel.text = "";
            this.userProLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《用户协议》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {} /*必须留有空格，否则发布 Native 版会出现显示问题。*/
            });
            this.userProLabel.touchEnabled = true;
            this.userProLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.userProPanel.visible = true;
            }, this);
            //2、隐私政策：
            this.priPoliLabel.text = "";
            this.priPoliLabel.textFlow = new Array({
                text: "我已阅读并同意", style: {}
            }, {
                text: "《隐私政策》", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: " ", style: {}
            });
            this.priPoliLabel.touchEnabled = true;
            this.priPoliLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.priPoliPanel.visible = true;
            }, this);
            //3、横竖校准：
            this.horverLabel.textFlow = new Array({
                text: "我已认真进行", style: {}
            }, {
                text: "横竖检验", style: { "href": "event:text event triggered", "textColor": 0x4444ff }
            }, {
                text: "并仔细阅读相\n关说明", style: {}
            });
            this.horverLabel.touchEnabled = true;
            this.horverLabel.addEventListener(egret.TextEvent.LINK, function (evt) {
                this.horverCheckPanel.visible = true;
            }, this);
            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShowCR, this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartPra, this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onHelp, this);
            this.userProRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.priPoliRead.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.horverChecked.addEventListener(eui.UIEvent.CHANGE, this.onReadyCBCheck, this);
            this.m_cc = true;
        };
        CWelcomeScene_Eyeangle2_V2.prototype.onReadyCBCheck = function () {
            if (this.userProRead.selected && this.priPoliRead.selected && this.horverChecked.selected) {
                this.startBtn.enabled = true;
            }
            else {
                this.startBtn.enabled = false;
            }
        };
        CWelcomeScene_Eyeangle2_V2.prototype.onLatestVerLoaded = function (e) {
            var jsnTxt = e;
            this.latestVer.text = jsnTxt.curVer;
        };
        CWelcomeScene_Eyeangle2_V2.prototype.onShowCR = function () {
            this.crPanel.visible = true;
        };
        CWelcomeScene_Eyeangle2_V2.prototype.onHelp = function () {
            this.helpPanel.visible = true;
        };
        CWelcomeScene_Eyeangle2_V2.prototype.onStartPra = function (evt) {
            //        先显示翻页动画 （未完成）
            this.m2_tmpS2StartBtn = false;
            this.startBtn.visible = false;
            g_praContainer.startNewPra();
            g_praContainer.saveVisibleStates();
            g_pageJumper.gotoPage("PraScene", null);
        };
        return CWelcomeScene_Eyeangle2_V2;
    }(eui.Component));
    eyeangle2.CWelcomeScene_Eyeangle2_V2 = CWelcomeScene_Eyeangle2_V2;
    __reflect(CWelcomeScene_Eyeangle2_V2.prototype, "eyeangle2.CWelcomeScene_Eyeangle2_V2");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CWelcomeScene_Eyeangle2_V2.js.map