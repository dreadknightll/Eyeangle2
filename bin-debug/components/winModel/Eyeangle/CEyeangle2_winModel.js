// JavaScript Document
/*
 *
 * 练习画面布局模型。只计算和传递相关的位置坐标，不负责显示工作。
 *
 * 使用方法：创建对象—>setWinWidth/setWinHeight—>其它操作。
 *
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CEyeangle2_winModel = (function () {
    function CEyeangle2_winModel() {
        this.s_topY = 20; // 顶部区域的纵坐标，也即顶部空白的高度。
        this.s_topHeight1 = 30; // 顶部区域收起来时的高度。
        this.s_topHeight2 = 180; // 顶部区域展开时的高度。
        this.s_bottomHeight = 210; // 底部区域的高度。
        this.m_winWidth = 0; // 窗口宽度。
        this.m_winHeight = 0; // 窗口高度。
        this.m_topHeight = this.s_topHeight2; //顶部区域当前高度。
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
    //--------------------------------------------------------------------------------
    /*
     * 强行修改顶部打开状态下的高度。
     */
    CEyeangle2_winModel.prototype.s_setTopHeight2 = function (h) {
        this.s_topHeight2 = h;
        if (this.m_topOpen) {
            this.m_topHeight = this.s_topHeight2;
        }
    };
    /*
     * 获取顶部打开状态下的高度。
     */
    CEyeangle2_winModel.prototype.s_getTopHeight2 = function () {
        return this.s_topHeight2;
    };
    CEyeangle2_winModel.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
    };
    CEyeangle2_winModel.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    /*
     * 展开顶部区域。
     */
    CEyeangle2_winModel.prototype.showTop = function () {
        this.m_topOpen = true;
        this.m_topHeight = this.s_topHeight2;
    };
    /*
     * 收起顶部区域。
     */
    CEyeangle2_winModel.prototype.hideTop = function () {
        this.m_topOpen = false;
        this.m_topHeight = this.s_topHeight1;
    };
    CEyeangle2_winModel.prototype.getTopHeight = function () {
        return this.m_topHeight;
    };
    /*
     * 获取中部区域Y坐标。
     */
    CEyeangle2_winModel.prototype.getMidY = function () {
        return this.s_topY + this.m_topHeight;
    };
    /*
     * 计算获取中部区域高度。
     */
    CEyeangle2_winModel.prototype.getMidHeight = function () {
        return this.getBottomY() - this.getMidY();
    };
    /*
     * 计算获取底部区域Y坐标。
     */
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
__reflect(CEyeangle2_winModel.prototype, "CEyeangle2_winModel", ["IEyeangle2WinModel", "ITMBWinModel", "IWinModel"]);
//# sourceMappingURL=CEyeangle2_winModel.js.map