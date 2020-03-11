var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
;
//# sourceMappingURL=CAngle.js.map