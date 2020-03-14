/**
 *
 * /src/components/CTopSpace.ts
 * 顶部空白。可设置高度、颜色。
 *
 * 使用方法：设置width—>设置height—>setColor()—>draw() 。
 *
 */
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
//注：应对iOS刘海屏无需使用TopSpace。把data-scale-mode改为“showAll”即可。
var CTopSpace = (function (_super) {
    __extends(CTopSpace, _super);
    function CTopSpace() {
        var _this = _super.call(this) || this;
        _this.m_space = new egret.Shape();
        _this.m_space.x = 0;
        _this.m_space.y = 0;
        _this.addChild(_this.m_space);
        return _this;
    }
    CTopSpace.prototype.setColor = function (clr) {
        this.m_color = clr;
    };
    CTopSpace.prototype.draw = function () {
        this.m_space.graphics.clear();
        this.m_space.graphics.beginFill(this.m_color);
        this.m_space.graphics.drawRect(0, 0, this.width, this.height);
        this.m_space.graphics.endFill();
    };
    CTopSpace.prototype.redraw = function () {
        this.draw();
    };
    return CTopSpace;
}(egret.DisplayObjectContainer));
__reflect(CTopSpace.prototype, "CTopSpace");
//# sourceMappingURL=CTopSpace.js.map