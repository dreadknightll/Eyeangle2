function ImgThumbModel() {
    this.m_thMaxWidth = 0;
    this.m_thMaxHeight = 0;
    this.m_imgWidth = 0;
    this.m_imgHeight = 0;
    this.m_imgSelRect = 0;
    this.getRat = function () {
        var rat1, rat2;
        rat1 = this.m_imgWidth / this.m_thMaxWidth;
        rat2 = this.m_imgHeight / this.m_thMaxHeight;
        return rat1 > rat2 ? rat1 : rat2;
    };
    this.setThMaxWidth = function (thMaxWidth) {
        this.m_thMaxWidth = thMaxWidth;
    };
    this.setThMaxHeight = function (thMaxHeight) {
        this.m_thMaxHeight = thMaxHeight;
    };
    this.getThWidth = function () {
        return this.m_imgWidth / this.getRat();
    };
    this.getThHeight = function () {
        return this.m_imgHeight / this.getRat();
    };
    this.getThSelRect = function () {
        var retRect = new gdeint.CRect();
        retRect.m_left = this.m_imgSelRect.m_left / this.getRat();
        retRect.m_top = this.m_imgSelRect.m_top / this.getRat();
        retRect.m_width = this.m_imgSelRect.m_width / this.getRat();
        retRect.m_height = this.m_imgSelRect.m_height / this.getRat();
        return retRect;
    };
    this.setImgWidth = function (imgWidth) {
        this.m_imgWidth = imgWidth;
    };
    this.setImgHeight = function (imgHeight) {
        this.m_imgHeight = imgHeight;
    };
    this.getImgSelRect = function () {
        return this.m_imgSelRect;
    };
    this.setImgSelRect = function (imgSelRect) {
        this.m_imgSelRect = imgSelRect;
    };
    this.ip2Tp = function (ip) {
        var ret = new gdeint.CPoint();
        ret.m_x = ip.m_x / this.getRat();
        ret.m_y = ip.m_y / this.getRat();
        return ret;
    };
    this.tp2Ip = function (tp) {
        var ret = new gdeint.CPoint();
        ret.m_x = tp.m_x / this.getThWidth() * this.m_imgWidth;
        ret.m_y = tp.m_y / this.getThHeight() * this.m_imgHeight;
        return ret;
    };
}
//# sourceMappingURL=imgThumbModel.js.map