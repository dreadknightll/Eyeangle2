var CEyeangle2RenderFilter = (function () {
    function CEyeangle2RenderFilter() {
    }
    CEyeangle2RenderFilter.prototype.setCaRat = function (caRat) {
        this.m_caRat = caRat;
    };
    CEyeangle2RenderFilter.prototype._getCaRat = function () {
        return this.m_caRat;
    };
    CEyeangle2RenderFilter.prototype.xOConv = function (v) {
        var ret;
        ret = v * this.m_caRat;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.xIConv = function (v) {
        var ret;
        ret = v / this.m_caRat;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.yOConv = function (v) {
        return v;
    };
    CEyeangle2RenderFilter.prototype.yIConv = function (v) {
        return v;
    };
    CEyeangle2RenderFilter.prototype.ptOConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = this.xOConv(pt.m_x);
        ret.m_y = pt.m_y;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.ptIConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = pt.m_x / this.m_caRat;
        ret.m_y = pt.m_y;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.rectOConv = function (rect) {
        var ret;
        ret = new gdeint.CRect;
        ret.m_left = rect.m_left * this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width * this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.rectIConv = function (rect) {
        var ret;
        ret = new gdeint.CRect();
        ret.m_left = rect.m_left / this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width / this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.angleOConv = function (angle) {
        var ret;
        ret = angle;
        ret.m_vertex.m_x *= this.m_caRat;
        return ret;
    };
    CEyeangle2RenderFilter.prototype.angleIConv = function (angle) {
        var ret;
        ret = new CAngle();
        ret.m_vertex = new gdeint.CPoint();
        ret.m_vertex.m_x = angle.m_vertex.m_x;
        ret.m_vertex.m_y = angle.m_vertex.m_y;
        ret.m_edge1Len = angle.m_edge1Len;
        ret.m_edge1Angle = angle.m_edge1Angle;
        ret.m_angleValue = angle.m_angleValue;
        ret.m_imgPath = angle.m_imgPath;
        ret.m_vertex.m_x /= 3;
        return ret;
    };
    return CEyeangle2RenderFilter;
}());
;
//# sourceMappingURL=CEyeangle2RenderFilter.js.map