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
    var CCopyrightPanel = (function (_super) {
        __extends(CCopyrightPanel, _super);
        function CCopyrightPanel() {
            var _this = _super.call(this) || this;
            _this.s_cpText = "\n    Copyright (C) 2019-present, 梁力，MIT许可。\n\
				注：部分运行库和素材为第三方版权所有，擅自提取使用可能造成侵权！\n\
				白鹭引擎版权声明在白鹭科技官网上的有关产品可找到。";
            _this.m_content = new egret.TextField();
            _this.m_content.x = 42;
            _this.m_content.y = 141;
            _this.m_content.width = 315;
            _this.m_content.height = 1500;
            _this.m_content.textColor = 0x000000;
            _this.m_content.size = 18;
            _this.m_contentMask = new egret.Rectangle();
            _this.m_contentMask.x = 0;
            _this.m_contentMask.y = 0;
            _this.m_contentMask.width = 320;
            _this.m_contentMask.height = 420;
            _this.m_content.mask = _this.m_contentMask;
            return _this;
        }
        CCopyrightPanel.prototype.childrenCreated = function () {
            this.m_content.text = this.s_cpText;
            this.addChild(this.m_content);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
            this.arrowUp.touchEnabled = true;
            this.arrowDown.touchEnabled = true;
            this.arrowUp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onUpArrowTap, this);
            this.arrowDown.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onDownArrowTap, this);
        };
        CCopyrightPanel.prototype.onUpArrowTap = function (e) {
            if (this.m_contentMask.y - 100 < 0) {
                return;
            }
            this.m_content.y += 100;
            this.m_contentMask.y -= 100;
            this.m_content.mask = this.m_contentMask;
        };
        CCopyrightPanel.prototype.onDownArrowTap = function (e) {
            if (this.m_contentMask.y + 100 > 900) {
                return;
            }
            this.m_content.y -= 100;
            this.m_contentMask.y += 100;
            this.m_content.mask = this.m_contentMask;
        };
        CCopyrightPanel.prototype.onCloseBtnTap = function (e) {
            this.visible = false;
            this.m_content.y = 141;
            this.m_contentMask.y = 0;
            this.m_content.mask = this.m_contentMask;
        };
        return CCopyrightPanel;
    }(eui.Component));
    eyeangle2.CCopyrightPanel = CCopyrightPanel;
    __reflect(CCopyrightPanel.prototype, "eyeangle2.CCopyrightPanel");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CCopyrightPanel.js.map