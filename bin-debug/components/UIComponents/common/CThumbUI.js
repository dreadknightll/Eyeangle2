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
    var CThumbUI = (function (_super) {
        __extends(CThumbUI, _super);
        function CThumbUI() {
            var _this = _super.call(this) || this;
            _this.m_thumbTapEvt = new CThumbUIEvent(CThumbUIEvent.EVT_THUMB_TAP);
            return _this;
        }
        CThumbUI.prototype.childrenCreated = function () {
            this.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onThumbTap, this);
        };
        CThumbUI.prototype.setThumbWidth = function (w) {
            this.thumb.width = w;
            this.thumbSel.width = w;
            this.thumbCover.width = w;
        };
        CThumbUI.prototype.getThumbWidth = function () {
            return this.thumb.width;
        };
        CThumbUI.prototype.setThumbHeight = function (h) {
            this.thumb.height = h;
            this.thumbSel.height = h;
            this.thumbCover.height = h;
        };
        CThumbUI.prototype.getThumbHeight = function () {
            return this.thumb.height;
        };
        CThumbUI.prototype.setImgSrc = function (s) {
            this.thumb.source = s;
        };
        CThumbUI.prototype.setSelRect = function (r) {
            this.thumbSel.x = r.m_left;
            this.thumbSel.y = r.m_top;
            this.thumbSel.width = r.m_width;
            this.thumbSel.height = r.m_height;
        };
        CThumbUI.prototype.onThumbTap = function (evt) {
            this.thumbSel.x = evt.localX - this.thumbSel.width / 2;
            this.thumbSel.y = evt.localY - this.thumbSel.height / 2;
            this.m_thumbTapEvt.m_tchX = evt.localX;
            this.m_thumbTapEvt.m_tchY = evt.localY;
            this.dispatchEvent(this.m_thumbTapEvt);
        };
        return CThumbUI;
    }(eui.Component));
    eyeangle2.CThumbUI = CThumbUI;
    __reflect(CThumbUI.prototype, "eyeangle2.CThumbUI");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CThumbUI.js.map