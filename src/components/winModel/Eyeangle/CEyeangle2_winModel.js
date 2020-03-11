var CEyeangle2_winModel = (function () {
    function CEyeangle2_winModel() {
        this.s_topY = 20;
        this.s_topHeight1 = 30;
        this.s_topHeight2 = 180;
        this.s_bottomHeight = 210;
        this.m_winWidth = 0;
        this.m_winHeight = 0;
        this.m_topHeight = this.s_topHeight2;
        this.m_topOpen = true;
    }
    CEyeangle2_winModel.prototype.setTopSpaceHeight = function (h) {
        this.s_topY = h;
    };
    CEyeangle2_winModel.prototype.getTopSpaceHeight = function () {
        return this.s_topY;
    };
    CEyeangle2_winModel.prototype.getTopY = function () {
        return this.s_topY;
    };
    CEyeangle2_winModel.prototype.setTopHeight1 = function (h) {
        this.s_topHeight1 = h;
        this.rearrange();
    };
    CEyeangle2_winModel.prototype.getTopHeight1 = function () {
        return this.s_topHeight1;
    };
    CEyeangle2_winModel.prototype.setTopHeight2 = function (h) {
        this.s_topHeight2 = h;
        this.rearrange();
    };
    CEyeangle2_winModel.prototype.getTopHeight2 = function () {
        return this.s_topHeight2;
    };
    CEyeangle2_winModel.prototype.setBottomHeight = function (h) {
        this.s_bottomHeight = h;
    };
    CEyeangle2_winModel.prototype.getBottomHeight = function () {
        return this.s_bottomHeight;
    };
    CEyeangle2_winModel.prototype.rearrange = function () {
    };
    CEyeangle2_winModel.prototype.s_setTopHeight2 = function (h) {
        this.s_topHeight2 = h;
        if (this.m_topOpen) {
            this.m_topHeight = this.s_topHeight2;
        }
    };
    CEyeangle2_winModel.prototype.s_getTopHeight2 = function () {
        return this.s_topHeight2;
    };
    CEyeangle2_winModel.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
    };
    CEyeangle2_winModel.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    CEyeangle2_winModel.prototype.showTop = function () {
        this.m_topOpen = true;
        this.m_topHeight = this.s_topHeight2;
    };
    CEyeangle2_winModel.prototype.hideTop = function () {
        this.m_topOpen = false;
        this.m_topHeight = this.s_topHeight1;
    };
    CEyeangle2_winModel.prototype.getTopHeight = function () {
        return this.m_topHeight;
    };
    CEyeangle2_winModel.prototype.getMidY = function () {
        return this.s_topY + this.m_topHeight;
    };
    CEyeangle2_winModel.prototype.getMidHeight = function () {
        return this.getBottomY() - this.getMidY();
    };
    CEyeangle2_winModel.prototype.getBottomY = function () {
        return this.m_winHeight - this.s_bottomHeight;
    };
    CEyeangle2_winModel.prototype.getWinHeight = function () {
        return this.m_winHeight;
    };
    CEyeangle2_winModel.prototype.getWinWidth = function () {
        return this.m_winWidth;
    };
    return CEyeangle2_winModel;
}());
//# sourceMappingURL=CEyeangle2_winModel.js.map