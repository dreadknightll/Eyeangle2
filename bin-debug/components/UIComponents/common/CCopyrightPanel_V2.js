/**************************************************
 * /src/components/UIComponents/common/CCopyrightPanel.ts
 *
 * 版权声明显示框。显示白鹭引擎的版权声明。
 *
**************************************************/
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
    var CCopyrightPanel_V2 = (function (_super) {
        __extends(CCopyrightPanel_V2, _super);
        function CCopyrightPanel_V2() {
            var _this = _super.call(this) || this;
            _this.s_cpText = "\n    Copyright (C) 2019-present, 梁力，MIT许可。\n\
				注：部分运行库和素材为第三方版权所有，擅自提取使用可能造成侵权！\n\
				白鹭引擎版权声明在白鹭科技官网上的有关产品可找到。";
            return _this;
            /*
                测试滚动效果用：
                            var i;
                            for(i=0;i<6;++i) {
                                this.s_cpText += "fwefwefsdafdf\n";
                                this.s_cpText += "6fgfsdf234234234wser234234\n";
                                this.s_cpText += "f4ddfsaf23433234wfsdfsdf\n";
                            }*/
        }
        CCopyrightPanel_V2.prototype.childrenCreated = function () {
            this.content.textColor = 0x000000;
            this.content.size = 18;
            this.content.text = this.s_cpText;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
            this.arrowUp.touchEnabled = true;
            this.arrowDown.touchEnabled = true;
            this.arrowUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpArrowTap, this);
            this.arrowDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDownArrowTap, this);
        };
        CCopyrightPanel_V2.prototype.onUpArrowTap = function (e) {
            if (this.contentScroller.viewport.scrollV - 100 < 0) {
                this.contentScroller.viewport.scrollV = 0;
            }
            else {
                this.contentScroller.viewport.scrollV -= 100;
            }
        };
        CCopyrightPanel_V2.prototype.onDownArrowTap = function (e) {
            if (this.contentScroller.viewport.scrollV + 100 > 400) {
                this.contentScroller.viewport.scrollV = 400;
            }
            else {
                this.contentScroller.viewport.scrollV += 100;
            }
        };
        CCopyrightPanel_V2.prototype.onCloseBtnTap = function (e) {
            this.visible = false;
            //				this.content.y = 141;
            this.contentScroller.viewport.scrollV = 0;
        };
        return CCopyrightPanel_V2;
    }(eui.Component));
    eyeangle2.CCopyrightPanel_V2 = CCopyrightPanel_V2;
    __reflect(CCopyrightPanel_V2.prototype, "eyeangle2.CCopyrightPanel_V2");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CCopyrightPanel_V2.js.map