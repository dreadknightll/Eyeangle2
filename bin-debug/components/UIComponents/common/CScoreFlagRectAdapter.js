var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * 数字点阵转换器。用于把数字转换成点阵。程序中把得分以三行 旗子/点/叉 方式输出就要用到本转换器。
 *
 */
var CScoreFlagRectAdapter = (function () {
    function CScoreFlagRectAdapter() {
        this.m_sfr = new ScoreFlagRect();
    }
    CScoreFlagRectAdapter.prototype.setCnts = function (v1, v2) {
        this.m_sfr.setCnts(v1, v2);
    };
    CScoreFlagRectAdapter.prototype.getFlagArr = function () {
        var ret;
        ret = new Array();
        var tmp = this.m_sfr.getFlagArr();
        var i, j;
        for (i = 0; i < 3; ++i) {
            ret[i] = new Array();
            for (j = 0; j < 10; ++j) {
                ret[i][j] = tmp[i][j];
            }
        }
        return ret;
    };
    return CScoreFlagRectAdapter;
}());
__reflect(CScoreFlagRectAdapter.prototype, "CScoreFlagRectAdapter", ["IScoreFlagRect"]);
//# sourceMappingURL=CScoreFlagRectAdapter.js.map