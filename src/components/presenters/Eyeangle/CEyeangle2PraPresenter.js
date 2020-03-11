var CEyeangle2PraPresenter = (function () {
    function CEyeangle2PraPresenter() {
        this.s_thumbAreax = 25;
        this.s_thumbAreay = 0;
        this.s_thumbAreaWidth = 428 - 250;
        this.s_thumbAreaHeight = 160;
        this.s_thMaxWidth = 150;
        this.s_thMaxHeight = 120;
        this.m_userAngle = 0;
        this.m_pm = new CPraMachine_Eyeangle2();
        this.m_itm = new gdeint.ImgThumbModelV2();
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
    CEyeangle2PraPresenter.prototype.s_setThumbAreaX = function (x) {
        this.s_thumbAreax = x;
    };
    CEyeangle2PraPresenter.prototype.s_setThumbAreaY = function (y) {
        this.s_thumbAreay = y;
    };
    CEyeangle2PraPresenter.prototype.s_setThumbAreaWidth = function (wid) {
        this.s_thumbAreaWidth = wid;
    };
    CEyeangle2PraPresenter.prototype.s_setThumbAreaHeight = function (hei) {
        this.s_thumbAreaHeight = hei;
    };
    CEyeangle2PraPresenter.prototype.s_setThMaxWidth = function (wid) {
        this.s_thMaxWidth = wid;
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
    };
    CEyeangle2PraPresenter.prototype.s_setThMaxHeight = function (hei) {
        this.s_thMaxHeight = hei;
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
    };
    CEyeangle2PraPresenter.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
    };
    CEyeangle2PraPresenter.prototype.getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyeangle2PraPresenter.prototype.refreshAnglePts = function () {
        if (!this.m_angle) {
            return;
        }
        this.m_angleVertexPt.m_x = this.m_angle.m_vertex.m_x;
        this.m_angleVertexPt.m_y = this.m_angle.m_vertex.m_y;
        this.m_angleVertexDispPt = this.m_renderFilter.ptOConv(this.m_angleVertexPt);
        this.m_angleEdge1DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos(this.m_angle.m_edge1Angle * Math.PI / 180);
        this.m_angleEdge1DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin(this.m_angle.m_edge1Angle * Math.PI / 180);
        this.m_angleEdge2DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180);
        this.m_angleEdge2DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180);
    };
    CEyeangle2PraPresenter.prototype.updateFromPM = function () {
        this.m_score = this.m_pm.getCurScore();
        this.m_angle = this.m_pm.getCurAngle();
        this.refreshAnglePts();
    };
    CEyeangle2PraPresenter.prototype.clearTempData = function () {
    };
    CEyeangle2PraPresenter.prototype.submitToPM = function () {
    };
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
    CEyeangle2PraPresenter.prototype.getScore = function () {
        return this.m_score;
    };
    CEyeangle2PraPresenter.prototype.fillProgress = function (p) {
        this.m_progress = p;
    };
    CEyeangle2PraPresenter.prototype.getProgress = function () {
        return this.m_progress;
    };
    CEyeangle2PraPresenter.prototype.getAngle = function () {
        return this.m_angle;
    };
    CEyeangle2PraPresenter.prototype.fillCurRank = function (r) {
        this.m_curRank = r;
    };
    CEyeangle2PraPresenter.prototype.getCurRank = function () {
        return this.m_curRank;
    };
    CEyeangle2PraPresenter.prototype.setWinWidth = function (ww) {
        this.m_winWidth = ww;
        this.m_imgSelRect.m_width = ww;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.setWinHeight = function (wh) {
        this.m_winHeight = wh;
    };
    CEyeangle2PraPresenter.prototype.setImgWidth = function (w) {
        this.m_imgWidth = w;
        this.m_imgDispWidth = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
    };
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
    CEyeangle2PraPresenter.prototype.inpImgSelPt = function (imgSelPt) {
        var rect = new gdeint.CRect();
        rect.m_left = imgSelPt.m_x;
        rect.m_top = imgSelPt.m_y;
        rect.m_width = this.m_imgSelRect.m_width;
        rect.m_height = this.m_imgSelRect.m_height;
        this.m_imgSelRect = rect;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
        this.m_imgSelPtOri.m_x = imgSelPt.m_x / this.m_renderFilter._getCaRat();
        this.m_imgSelPtOri.m_y = imgSelPt.m_y;
    };
    CEyeangle2PraPresenter.prototype.inpThSelPt = function (thSelPt) {
        var imgSelPt;
        imgSelPt = this.m_itm.tp2Ip(thSelPt);
        this.inpImgSelPt(imgSelPt);
    };
    CEyeangle2PraPresenter.prototype.inpImgSelWidth = function (w) {
        this.m_imgSelRect.m_width = w;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.inpImgSelHeight = function (h) {
        this.m_imgSelRect.m_height = h;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.inpUserAngle = function (angle) {
        this.m_userAngle = angle;
    };
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
        var caRat = this.m_renderFilter._getCaRat();
        this.m_imgDispWidth = this.m_renderFilter.xOConv(this.m_imgWidth);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
        var selPt = new gdeint.CPoint();
        selPt.m_x = this.m_imgSelPtOri.m_x * caRat;
        selPt.m_y = this.m_imgSelRect.m_top;
        this.inpImgSelPt(selPt);
        this.refreshAnglePts();
    };
    CEyeangle2PraPresenter.prototype.setCaRat = function (caRat) {
        this.m_renderFilter.setCaRat(caRat);
        this.syncFromRenderFilter();
    };
    CEyeangle2PraPresenter.prototype.showAngle = function (angle) {
        this.m_angle = angle;
        this.refreshAnglePts();
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    };
    CEyeangle2PraPresenter.prototype.setState = function (s) {
        this.m_state = s;
    };
    CEyeangle2PraPresenter.prototype.rePra = function () {
        this.m_curRank = 0;
        this.m_pm.rePra();
    };
    CEyeangle2PraPresenter.prototype.clearPra = function () {
        this.m_pm.clearPra();
        this.rePra();
    };
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
    CEyeangle2PraPresenter.prototype.rfgetScrAngleVertexPt = function () {
        var ret;
        ret = this.m_angleVertexDispPt;
        return ret;
    };
    CEyeangle2PraPresenter.prototype.rfgetScrAngleEdge1Pt = function () {
        var ret;
        ret = this.m_angleEdge1DispPt;
        return ret;
    };
    CEyeangle2PraPresenter.prototype.rfgetScrAngleEdge2Pt = function () {
        var ret;
        ret = this.m_angleEdge2DispPt;
        return ret;
    };
    CEyeangle2PraPresenter.prototype.rfgetScrThQuestionerCenterPt = function () {
        var ret;
        var tVertex, tEdge1Pt, tEdge2Pt;
        tVertex = this.m_itm.ip2Tp(this.m_renderFilter.ptOConv(this.m_angleVertexPt));
        ret = new gdeint.CPoint();
        ret.m_x = tVertex.m_x;
        ret.m_y = tVertex.m_y;
        return ret;
    };
    return CEyeangle2PraPresenter;
}());
//# sourceMappingURL=CEyeangle2PraPresenter.js.map