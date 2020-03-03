var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * /src/components/presenters/CAnglePresenter.ts
 *
 * 练习界面的Presenter。包含待显示元素的坐标计算等。可单元测试。
 *
 */
var CEyeangle2PraPresenter = (function () {
    function CEyeangle2PraPresenter() {
        //顶部区域相关常量：
        this.s_thumbAreax = 25; //缩略图区域X坐标。
        this.s_thumbAreay = 0; //缩略图区域Y坐标。
        this.s_thumbAreaWidth = 428 - 250; //缩略图区域宽度。
        this.s_thumbAreaHeight = 160; //缩略图区域高度。
        this.s_thMaxWidth = 150; // 缩略图最大宽度。
        this.s_thMaxHeight = 120; // 缩略图最大高度。
        this.m_userAngle = 0; // 用户输入的角度值。
        this.m_pm = new CPraMachine_Eyeangle2();
        this.m_itm = new ImgThumbModelAdapter();
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
        this.m_imgSelRect = new gdeint.CRect();
        this.m_imgSelPtOri = new gdeint.CPoint();
        this.m_renderFilter = new CNoChangeRenderFilter();
        this.m_angleVertexPt = new gdeint.CPoint();
        this.m_angleVertexDispPt = new gdeint.CPoint();
        this.m_angleEdge1DispPt = new gdeint.CPoint();
        this.m_angleEdge2DispPt = new gdeint.CPoint();
    }
    CEyeangle2PraPresenter.prototype.bindPM = function (pm) {
        this.m_pm = pm;
    };
    CEyeangle2PraPresenter.prototype.unbindPM = function () {
        this.m_pm = null;
    };
    CEyeangle2PraPresenter.prototype.setITM = function (itm) {
        this.m_itm = itm;
    };
    /*
     * 检验是否所有待填变量都已填好。并不完善，慎用。
     */
    CEyeangle2PraPresenter.prototype.allFieldsFilled = function () {
        if (isNaN(this.m_winWidth)) {
            return false;
        }
        if (isNaN(this.m_winHeight)) {
            return false;
        }
        if (isNaN(this.m_imgWidth)) {
            return false;
        }
        if (isNaN(this.m_imgHeight)) {
            return false;
        }
        if (null == this.m_imgSelRect) {
            return false;
        }
        else {
            if (isNaN(this.m_imgSelRect.m_left)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_top)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_width)) {
                return false;
            }
            if (isNaN(this.m_imgSelRect.m_height)) {
                return false;
            }
        }
        if (isNaN(this.m_thAreaWidth)) {
            return false;
        }
        if (isNaN(this.m_thAreaHeight)) {
            return false;
        }
        if (isNaN(this.m_score)) {
            return false;
        }
        if (isNaN(this.m_progress)) {
            return false;
        }
        if (null == this.m_angle) {
            return false;
        }
        else {
            if (null == this.m_angle.m_vertex) {
                return false;
            }
            else {
                if (isNaN(this.m_angle.m_vertex.m_x)) {
                    return false;
                }
                if (isNaN(this.m_angle.m_vertex.m_y)) {
                    return false;
                }
            }
            if (isNaN(this.m_angle.m_edge1Len)) {
                return false;
            }
            if (isNaN(this.m_angle.m_edge1Angle)) {
                return false;
            }
            if (isNaN(this.m_angle.m_angleValue)) {
                return false;
            }
            if (null == this.m_angle.m_imgPath) {
                return false;
            }
            if (null == this.m_angle.m2_imgResName) {
                return false;
            }
        }
        if (isNaN(this.m_userAngle)) {
            return false;
        }
        return true;
    };
    /*
     * 强行修改缩略图区域X坐标。
     */
    CEyeangle2PraPresenter.prototype.s_setThumbAreaX = function (x) {
        this.s_thumbAreax = x;
    };
    /*
     * 强行修改缩略图区域Y坐标。
     */
    CEyeangle2PraPresenter.prototype.s_setThumbAreaY = function (y) {
        this.s_thumbAreay = y;
    };
    /*
     * 强行修改缩略图区域宽度。
     */
    CEyeangle2PraPresenter.prototype.s_setThumbAreaWidth = function (wid) {
        this.s_thumbAreaWidth = wid;
    };
    /*
     * 强行修改缩略图区域高度。
     */
    CEyeangle2PraPresenter.prototype.s_setThumbAreaHeight = function (hei) {
        this.s_thumbAreaHeight = hei;
    };
    /*
     * 强行修改缩略图最大宽度。
     */
    CEyeangle2PraPresenter.prototype.s_setThMaxWidth = function (wid) {
        this.s_thMaxWidth = wid;
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
    };
    /*
     * 强行修改缩略图最大高度。
     */
    CEyeangle2PraPresenter.prototype.s_setThMaxHeight = function (hei) {
        this.s_thMaxHeight = hei;
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
    };
    /*
     * 设置所使用的渲染过滤器。
     */
    CEyeangle2PraPresenter.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CEyeangle2PraPresenter.prototype.getRenderFilter = function () {
        return this.m_renderFilter;
    };
    /*
     * 根据 m_angle 刷新当前角度相关的几个坐标变量。
     */
    CEyeangle2PraPresenter.prototype.refreshAnglePts = function () {
        if (!this.m_angle) {
            //角度未定义，直接返回。
            return;
        }
        //……Keep the original angle value as in json even if calibrates.
        this.m_angleVertexPt.m_x = this.m_angle.m_vertex.m_x;
        this.m_angleVertexPt.m_y = this.m_angle.m_vertex.m_y;
        this.m_angleVertexDispPt = this.m_renderFilter.ptOConv(this.m_angleVertexPt);
        this.m_angleEdge1DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos(this.m_angle.m_edge1Angle * Math.PI / 180);
        this.m_angleEdge1DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin(this.m_angle.m_edge1Angle * Math.PI / 180);
        this.m_angleEdge2DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180);
        this.m_angleEdge2DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180);
    };
    /*
     * 与练习机器同步，获取最新数据。
     */
    CEyeangle2PraPresenter.prototype.updateFromPM = function () {
        this.m_score = this.m_pm.getCurScore();
        this.m_angle = this.m_pm.getCurAngle();
        this.refreshAnglePts();
    };
    CEyeangle2PraPresenter.prototype.clearTempData = function () {
    };
    CEyeangle2PraPresenter.prototype.submitToPM = function () {
    };
    /*
     * 进入下一角度。需要进一步传达给练习机器。
     */
    CEyeangle2PraPresenter.prototype.nextAngle = function () {
        this.m_pm.nextAngle();
        if (this.getProgress() >= 10) {
            this.setState(2);
        }
        else {
            this.setState(0);
        }
    };
    CEyeangle2PraPresenter.prototype.fillScore = function (s) {
        this.m_score = s;
    };
    /*
     * 获取当前得分。
     */
    CEyeangle2PraPresenter.prototype.getScore = function () {
        return this.m_score;
    };
    CEyeangle2PraPresenter.prototype.fillProgress = function (p) {
        this.m_progress = p;
    };
    /*
     * 获取当前进度。
     */
    CEyeangle2PraPresenter.prototype.getProgress = function () {
        //        return this.m_pm.getCurAngleTag() + 1;
        //        return this.m_pm.getCmplProgress();
        return this.m_progress;
    };
    /*
     * 获取当前角度。
     */
    CEyeangle2PraPresenter.prototype.getAngle = function () {
        return this.m_angle;
    };
    CEyeangle2PraPresenter.prototype.fillCurRank = function (r) {
        this.m_curRank = r;
    };
    /*
     * 获取最近一次目测准确度评定。
     */
    CEyeangle2PraPresenter.prototype.getCurRank = function () {
        return this.m_curRank;
    };
    /*
     * 设置窗口宽度。
     */
    CEyeangle2PraPresenter.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
        this.m_imgSelRect.m_width = ww;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    /*
     * 设置图片宽度。参数填原始宽度。
     */
    CEyeangle2PraPresenter.prototype.setImgWidth = function (w) {
        this.m_imgWidth = w;
        this.m_imgDispWidth = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
    };
    /*
     * 获取图片原始宽度。
     */
    CEyeangle2PraPresenter.prototype.getImgWidth = function () {
        return this.m_imgWidth;
    };
    CEyeangle2PraPresenter.prototype.setImgHeight = function (h) {
        this.m_imgHeight = h;
        this.m_itm.setImgHeight(h);
    };
    CEyeangle2PraPresenter.prototype.getImgHeight = function () {
        return this.m_imgHeight;
    };
    /*
     * 输入图片选区位置。
     */
    CEyeangle2PraPresenter.prototype.inpImgSelPt = function (imgSelPt) {
        var rect = new gdeint.CRect();
        rect.m_left = imgSelPt.m_x;
        rect.m_top = imgSelPt.m_y;
        rect.m_width = this.m_imgSelRect.m_width;
        rect.m_height = this.m_imgSelRect.m_height;
        this.m_imgSelRect = rect;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
        //记录起点坐标（校准前尺寸规格）
        this.m_imgSelPtOri.m_x = imgSelPt.m_x / this.m_renderFilter._getCaRat();
        this.m_imgSelPtOri.m_y = imgSelPt.m_y;
    };
    /*
     * 输入缩略图选区位置。同时影响图片选区位置。
     */
    CEyeangle2PraPresenter.prototype.inpThSelPt = function (thSelPt) {
        var imgSelPt;
        imgSelPt = this.m_itm.tp2Ip(thSelPt);
        this.inpImgSelPt(imgSelPt);
    };
    /*
     * 输入图片选区宽度（参数填原始宽度）。
     */
    CEyeangle2PraPresenter.prototype.inpImgSelWidth = function (w) {
        this.m_imgSelRect.m_width = w;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.inpImgSelHeight = function (h) {
        this.m_imgSelRect.m_height = h;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 填入用户输入的角度值。
     */
    CEyeangle2PraPresenter.prototype.inpUserAngle = function (angle) {
        this.m_userAngle = angle;
    };
    /*
     * 提交用户输入的角度给练习机器。
     */
    CEyeangle2PraPresenter.prototype.submitUserAngle = function () {
        this.m_pm.inpAngle(this.m_userAngle);
        var angleChecker;
        angleChecker = this.m_pm.getAngleChecker();
        angleChecker.setCorreAngle(this.m_angle.m_angleValue);
        angleChecker.setInputAngle(this.m_userAngle);
        this.m_curRank = angleChecker.checkAngle();
        this.fillProgress(this.m_pm.getCmplProgress());
    };
    CEyeangle2PraPresenter.prototype.syncFromRenderFilter = function () {
        //renderFilter有改动后（例如caRat变更）调用本函数进行同步。
        var caRat = this.m_renderFilter._getCaRat();
        this.m_imgDispWidth = this.m_renderFilter.xOConv(this.m_imgWidth);
        //Update imgThumbModel:
        this.m_itm.setImgWidth(this.m_imgDispWidth);
        //Update selPt:
        var selPt = new gdeint.CPoint();
        selPt.m_x = this.m_imgSelPtOri.m_x * caRat;
        selPt.m_y = this.m_imgSelRect.m_top;
        this.inpImgSelPt(selPt);
        this.refreshAnglePts();
    };
    /*
     * 设置横竖校准系数。
     */
    CEyeangle2PraPresenter.prototype.setCaRat = function (caRat) {
        this.m_renderFilter.setCaRat(caRat);
        this.syncFromRenderFilter();
    };
    /*
     * 临时显示一个角度，不影响练习机器里的数据。
     */
    CEyeangle2PraPresenter.prototype.showAngle = function (angle) {
        this.m_angle = angle;
        this.refreshAnglePts();
        //        Update itm
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    /*
     * 设置练习所用到的角度集合。
     */
    /*    public setAngleArr(angle: Array<CAngle>) :void {
            this.m_pm.setAngleArr(angle);
        }*/
    /*
     * 设置当前状态。
     */
    CEyeangle2PraPresenter.prototype.setState = function (s) {
        //0:To input 1:checking 2:final
        this.m_state = s;
    };
    /*
     * 重新开始练习。
     */
    CEyeangle2PraPresenter.prototype.rePra = function () {
        // Start a new pra.
        this.m_curRank = 0;
        this.m_pm.rePra();
    };
    CEyeangle2PraPresenter.prototype.clearPra = function () {
        // Clear angles,progress and score.
        this.m_pm.clearPra();
        this.rePra();
    };
    /*
     * 获取经渲染过滤器输出后的图片区域。
     */
    CEyeangle2PraPresenter.prototype.getImgRect = function () {
        var oriRect, ret;
        oriRect = new gdeint.CRect();
        oriRect.m_left = -this.m_imgSelRect.m_left / this.m_renderFilter._getCaRat();
        oriRect.m_top = -this.m_imgSelRect.m_top;
        oriRect.m_width = this.m_imgWidth;
        oriRect.m_height = this.m_imgHeight;
        ret = this.m_renderFilter.rectOConv(oriRect);
        return ret;
    };
    /*
     * 获取经渲染过滤器输出后的缩略图区域。
     */
    CEyeangle2PraPresenter.prototype.getThumbRect = function () {
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var ret;
        ret = new gdeint.CRect();
        ret.m_width = this.m_itm.getThWidth();
        ret.m_height = this.m_itm.getThHeight();
        ret.m_left = this.s_thumbAreax + (this.s_thumbAreaWidth - ret.m_width) / 2;
        ret.m_top = this.s_thumbAreay + (this.s_thumbAreaHeight - ret.m_height) / 2;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出后的缩略图选区。
     */
    CEyeangle2PraPresenter.prototype.rfgetScrThumbSelRect = function () {
        var ret;
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var thRect;
        thRect = this.getThumbRect();
        var tsr = this.m_itm.getThSelRect();
        ret = new gdeint.CRect();
        ret.m_left = tsr.m_left;
        ret.m_top = tsr.m_top;
        ret.m_width = tsr.m_width;
        ret.m_height = tsr.m_height;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的角度顶点坐标。
     */
    CEyeangle2PraPresenter.prototype.rfgetScrAngleVertexPt = function () {
        var ret;
        ret = this.m_angleVertexDispPt;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的第一条边样点坐标。
     */
    CEyeangle2PraPresenter.prototype.rfgetScrAngleEdge1Pt = function () {
        var ret;
        ret = this.m_angleEdge1DispPt;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的第二条边样点坐标。
     */
    CEyeangle2PraPresenter.prototype.rfgetScrAngleEdge2Pt = function () {
        var ret;
        ret = this.m_angleEdge2DispPt;
        return ret;
    };
    /*
     * 获得经渲染过滤器输出的缩略图问号坐标。
     */
    CEyeangle2PraPresenter.prototype.rfgetScrThQuestionerPt = function () {
        //        var thRect:CRect;
        //        thRect = this.getThumbRect();
        var ret;
        var tVertex, tEdge1Pt, tEdge2Pt;
        tVertex = this.m_itm.ip2Tp(this.m_renderFilter.ptOConv(this.m_angleVertexPt));
        ret = new gdeint.CPoint();
        ret.m_x = tVertex.m_x - 8;
        ret.m_y = tVertex.m_y - 12;
        return ret;
    };
    return CEyeangle2PraPresenter;
}());
__reflect(CEyeangle2PraPresenter.prototype, "CEyeangle2PraPresenter", ["IEyeangle2PraPresenter", "IPraPresenter", "IBindableWithPM", "IPresenterWithThumb", "IPresenterWithCa"]);
