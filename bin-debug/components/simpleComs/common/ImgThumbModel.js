/*
 *  /src/components/ImgThumbModel.ts
 *
 * 图形与缩略图转换器。用于处理缩略图尺寸计算、原图与缩略图坐标映射等。
 * 注：本类仅用于计算，切勿用于存储数据。
 *
 * 缩略图尺寸的计算：
 *  缩略图应满足的条件：1、不超出指定的最大宽度和最大高度。 2、宽高比和原图一致。
 *  符合条件的最大尺寸为最终缩略图的尺寸。
 *
 */
function ImgThumbModel() {
    this.m_thMaxWidth = 0;
    this.m_thMaxHeight = 0;
    this.m_imgWidth = 0;
    this.m_imgHeight = 0;
    this.m_imgSelRect = 0;
    /*
     * 获取原图的宽高比。
     */
    this.getRat = function () {
        var rat1, rat2;
        rat1 = this.m_imgWidth / this.m_thMaxWidth;
        rat2 = this.m_imgHeight / this.m_thMaxHeight;
        return rat1 > rat2 ? rat1 : rat2;
    };
    /*
     * 设置最大缩略图宽度。
     */
    this.setThMaxWidth = function (thMaxWidth) {
        this.m_thMaxWidth = thMaxWidth;
    };
    /*
     * 设置最大缩略图高度。
     */
    this.setThMaxHeight = function (thMaxHeight) {
        this.m_thMaxHeight = thMaxHeight;
    };
    /*
     * 计算并获取缩略图宽度。
     */
    this.getThWidth = function () {
        return this.m_imgWidth / this.getRat();
    };
    /*
     * 计算并获取缩略图高度。
     */
    this.getThHeight = function () {
        return this.m_imgHeight / this.getRat();
    };
    /*
     * 计算并获取缩略图选框区域。
     */
    this.getThSelRect = function () {
        var retRect = new gdeint.CRect();
        retRect.m_left = this.m_imgSelRect.m_left / this.getRat();
        retRect.m_top = this.m_imgSelRect.m_top / this.getRat();
        retRect.m_width = this.m_imgSelRect.m_width / this.getRat();
        retRect.m_height = this.m_imgSelRect.m_height / this.getRat();
        return retRect;
    };
    /*
     * 设置原图宽度。
     */
    this.setImgWidth = function (imgWidth) {
        this.m_imgWidth = imgWidth;
    };
    /*
     * 设置原图高度。
     */
    this.setImgHeight = function (imgHeight) {
        this.m_imgHeight = imgHeight;
    };
    /*
     * 获取原图显示区域。
     */
    this.getImgSelRect = function () {
        return this.m_imgSelRect;
    };
    /*
     * 设置原图显示区域。
     */
    this.setImgSelRect = function (imgSelRect) {
        this.m_imgSelRect = imgSelRect;
    };
    /*
     * 计算原图的一点映射到缩略图后的坐标。
     */
    this.ip2Tp = function (ip) {
        var ret = new gdeint.CPoint();
        ret.m_x = ip.m_x / this.getRat();
        ret.m_y = ip.m_y / this.getRat();
        return ret;
    };
    /*
     * 计算缩略图的一点映射回原图后的坐标。
     */
    this.tp2Ip = function (tp) {
        var ret = new gdeint.CPoint();
        ret.m_x = tp.m_x / this.getThWidth() * this.m_imgWidth;
        ret.m_y = tp.m_y / this.getThHeight() * this.m_imgHeight;
        return ret;
    };
}
//# sourceMappingURL=ImgThumbModel.js.map