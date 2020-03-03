/*
 * /src/structs/CAngle.ts
 *
 * 角度结构体。描述角度。包括边的斜率、长度以及顶点坐标等信息。
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
var CAngle = (function (_super) {
    __extends(CAngle, _super);
    function CAngle() {
        var _this = _super.call(this) || this;
        _this.m_className = "CAngle";
        _this.m_vertex = new gdeint.CPoint();
        return _this;
    }
    return CAngle;
}(gdeint.CPraElemBase));
__reflect(CAngle.prototype, "CAngle");
;
