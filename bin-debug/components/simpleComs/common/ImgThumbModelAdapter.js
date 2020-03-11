var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * /src/components/simpleComs/common/ImgThumbModelAdapter.ts
 *
 * ImgThumbModel 的转接器。把 ImgThumbModel 转接成 Typescript 以便调用。
 *
 * 使用方法：setImgWidth/setImgHeight —> setThMaxWidth/setThMaxHeight —> getThWidth/getThHeight —> ……
 *
 */
var ImgThumbModelAdapter = (function () {
    function ImgThumbModelAdapter() {
        this.m_itm = new ImgThumbModel();
    }
    /*
     * 获取原图与缩略图的比例。
     */
    ImgThumbModelAdapter.prototype.getRat = function () {
        return this.m_itm.getRat();
    };
    /*
     * 设置缩略图区域的最大宽度。缩略图要维持原图的宽高比，同时不能超过此最大宽度。
     */
    ImgThumbModelAdapter.prototype.setThMaxWidth = function (thMaxWidth) {
        this.m_itm.setThMaxWidth(thMaxWidth);
    };
    /*
     * 设置缩略图区域的最大高度。缩略图要维持原图的宽高比，同时不能超过此最大高度。
     */
    ImgThumbModelAdapter.prototype.setThMaxHeight = function (thMaxHeight) {
        this.m_itm.setThMaxHeight(thMaxHeight);
    };
    /*
     * 计算并获取缩略图宽度。
     */
    ImgThumbModelAdapter.prototype.getThWidth = function () {
        return this.m_itm.getThWidth();
    };
    /*
     * 计算并获取缩略图高度。
     */
    ImgThumbModelAdapter.prototype.getThHeight = function () {
        return this.m_itm.getThHeight();
    };
    /*
     * 获取缩略图选区。
     */
    ImgThumbModelAdapter.prototype.getThSelRect = function () {
        var ret = this.m_itm.getThSelRect();
        return ret;
    };
    /*
     * 设置原图宽度。
     */
    ImgThumbModelAdapter.prototype.setImgWidth = function (imgWidth) {
        this.m_itm.setImgWidth(imgWidth);
    };
    /*
     * 设置原图高度。
     */
    ImgThumbModelAdapter.prototype.setImgHeight = function (imgHeight) {
        this.m_itm.setImgHeight(imgHeight);
    };
    ImgThumbModelAdapter.prototype.getImgSelRect = function () {
        return this.m_itm.getImgSelRect();
    };
    /*
     * 设置原图选取。
     */
    ImgThumbModelAdapter.prototype.setImgSelRect = function (imgSelRect) {
        this.m_itm.setImgSelRect(imgSelRect);
    };
    /*
     * 获取原图上某点对应缩略图上的点。
     */
    ImgThumbModelAdapter.prototype.ip2Tp = function (ip) {
        return this.m_itm.ip2Tp(ip);
    };
    /*
     * 获取缩略图上某点对应原图上的点。
     */
    ImgThumbModelAdapter.prototype.tp2Ip = function (tp) {
        return this.m_itm.tp2Ip(tp);
    };
    return ImgThumbModelAdapter;
}());
__reflect(ImgThumbModelAdapter.prototype, "ImgThumbModelAdapter");
//# sourceMappingURL=ImgThumbModelAdapter.js.map