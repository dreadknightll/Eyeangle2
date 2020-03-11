var ImgThumbModelAdapter = (function () {
    function ImgThumbModelAdapter() {
        this.m_itm = new ImgThumbModel();
    }
    ImgThumbModelAdapter.prototype.getRat = function () {
        return this.m_itm.getRat();
    };
    ImgThumbModelAdapter.prototype.setThMaxWidth = function (thMaxWidth) {
        this.m_itm.setThMaxWidth(thMaxWidth);
    };
    ImgThumbModelAdapter.prototype.setThMaxHeight = function (thMaxHeight) {
        this.m_itm.setThMaxHeight(thMaxHeight);
    };
    ImgThumbModelAdapter.prototype.getThWidth = function () {
        return this.m_itm.getThWidth();
    };
    ImgThumbModelAdapter.prototype.getThHeight = function () {
        return this.m_itm.getThHeight();
    };
    ImgThumbModelAdapter.prototype.getThSelRect = function () {
        var ret = this.m_itm.getThSelRect();
        return ret;
    };
    ImgThumbModelAdapter.prototype.setImgWidth = function (imgWidth) {
        this.m_itm.setImgWidth(imgWidth);
    };
    ImgThumbModelAdapter.prototype.setImgHeight = function (imgHeight) {
        this.m_itm.setImgHeight(imgHeight);
    };
    ImgThumbModelAdapter.prototype.getImgSelRect = function () {
        return this.m_itm.getImgSelRect();
    };
    ImgThumbModelAdapter.prototype.setImgSelRect = function (imgSelRect) {
        this.m_itm.setImgSelRect(imgSelRect);
    };
    ImgThumbModelAdapter.prototype.ip2Tp = function (ip) {
        return this.m_itm.ip2Tp(ip);
    };
    ImgThumbModelAdapter.prototype.tp2Ip = function (tp) {
        return this.m_itm.tp2Ip(tp);
    };
    return ImgThumbModelAdapter;
}());
//# sourceMappingURL=ImgThumbModelAdapter.js.map