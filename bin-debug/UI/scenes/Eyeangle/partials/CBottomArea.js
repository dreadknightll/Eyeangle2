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
 * 练习场景底部区域。
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CBottomArea = (function (_super) {
        __extends(CBottomArea, _super);
        function CBottomArea() {
            var _this = _super.call(this) || this;
            _this.m_bg = new egret.Shape();
            return _this;
        }
        CBottomArea.prototype.childrenCreated = function () {
            this.m_bg.graphics.beginFill(0x447700);
            this.m_bg.graphics.drawRect(0, 0, this.width, this.height);
            this.m_bg.graphics.endFill();
            this.bgGrp.addChild(this.m_bg);
        };
        return CBottomArea;
    }(eui.Component));
    eyeangle2.CBottomArea = CBottomArea;
    __reflect(CBottomArea.prototype, "eyeangle2.CBottomArea");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CBottomArea.js.map