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
    var CCpyTextPanel = (function (_super) {
        __extends(CCpyTextPanel, _super);
        function CCpyTextPanel() {
            var _this = _super.call(this) || this;
            _this.m2_cc = false;
            return _this;
        }
        CCpyTextPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.m2_cc = true;
            this.txtArea.$setText(this.m_text);
            this.resetTextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResetTextBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            this.txtArea.addEventListener(eui.UIEvent.CHANGE, this.onResetTextBtn, this);
        };
        CCpyTextPanel.prototype.setText = function (txt) {
            this.m_text = txt;
            if (this.m2_cc) {
                this.txtArea.$setText(this.m_text);
            }
        };
        CCpyTextPanel.prototype.onResetTextBtn = function () {
            this.txtArea.$setText(this.m_text);
        };
        CCpyTextPanel.prototype.onCloseBtn = function () {
            this.txtArea.$setText(this.m_text);
            this.visible = false;
        };
        return CCpyTextPanel;
    }(eui.Component));
    eyeangle2.CCpyTextPanel = CCpyTextPanel;
    __reflect(CCpyTextPanel.prototype, "eyeangle2.CCpyTextPanel");
})(eyeangle2 || (eyeangle2 = {}));
