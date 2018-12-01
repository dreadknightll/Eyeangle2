/**
 *
 * 图像显示过滤器。用于调整图像输出。主要是应用横竖校准系数。可单元测试。
 *
 */
var CEyeangle2RenderFilter = (function () {
    function CEyeangle2RenderFilter() {
    }
    CEyeangle2RenderFilter.prototype.setCaRat = function (caRat) {
        this.m_caRat = caRat;
    };
    CEyeangle2RenderFilter.prototype._getCaRat = function () {
        return this.m_caRat;
    };
    /*
     * 计算某一横宽经过滤后在屏幕输出的宽度。除了适用于x坐标还适用于水平线段的长度。
     */
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
    /*
     * 计算某一点经过滤后在屏幕上的坐标。
     */
    CEyeangle2RenderFilter.prototype.ptOConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = this.xOConv(pt.m_x);
        ret.m_y = pt.m_y;
        return ret;
    };
    /*
     * 计算某一屏幕点在过滤前的原始坐标。
     */
    CEyeangle2RenderFilter.prototype.ptIConv = function (pt) {
        var ret;
        ret = new gdeint.CPoint();
        ret.m_x = pt.m_x / this.m_caRat;
        ret.m_y = pt.m_y;
        return ret;
    };
    /*
     * 计算某一原始区域过滤输出后的屏幕区域。
     */
    CEyeangle2RenderFilter.prototype.rectOConv = function (rect) {
        var ret;
        ret = new gdeint.CRect;
        ret.m_left = rect.m_left * this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width * this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    /*
     * 计算某一屏幕区域在过滤前的原始区域。
     */
    CEyeangle2RenderFilter.prototype.rectIConv = function (rect) {
        var ret;
        ret = new gdeint.CRect();
        ret.m_left = rect.m_left / this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width / this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    };
    /*
     * 计算某一角度对象经过滤后在屏幕输出的角度对象。
     */
    CEyeangle2RenderFilter.prototype.angleOConv = function (angle) {
        //Change vertex position only.
        var ret;
        ret = angle;
        ret.m_vertex.m_x *= this.m_caRat;
        return ret;
    };
    /*
     * 计算某一屏幕角度对象在过滤前的原始角度对象。
     */
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
