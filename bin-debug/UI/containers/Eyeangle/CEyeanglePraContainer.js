var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 *
 * @author
 *
 */
var CEyeanglePraContainer = (function (_super) {
    __extends(CEyeanglePraContainer, _super);
    function CEyeanglePraContainer() {
        var _this = _super.call(this) || this;
        _this.m_visibilityTempScene = false;
        _this.m_resNameFinder = new CEyeangle2ResNameFinder();
        _this.m_renderFilter = new CEyeangle2RenderFilter();
        _this.m_renderFilter.setCaRat(1);
        return _this;
    }
    CEyeanglePraContainer.prototype.setResNameFinder = function (rnf) {
        this.m_resNameFinder = rnf;
    };
    CEyeanglePraContainer.prototype.getResNameFinder = function () {
        return this.m_resNameFinder;
    };
    CEyeanglePraContainer.prototype.setPraScene = function (s) {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    };
    CEyeanglePraContainer.prototype.setCaliDlg = function (d) {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    };
    CEyeanglePraContainer.prototype.setRenderFilter = function (rf) {
        this.m_renderFilter = rf;
        //        this._getPraScene()._setRenderFilter(rf);
    };
    CEyeanglePraContainer.prototype._getPraScene = function () {
        return this.m_praScene;
    };
    CEyeanglePraContainer.prototype._getCaliDlg = function () {
        return this.m_caliDlg;
    };
    CEyeanglePraContainer.prototype._getRenderFilter = function () {
        return this.m_renderFilter;
    };
    CEyeanglePraContainer.prototype.getDlgLayer = function () {
        return this._getPraScene().getDlgLayer();
    };
    CEyeanglePraContainer.prototype.getNotiLayer = function () {
        return this._getPraScene().getNotiLayer();
    };
    CEyeanglePraContainer.prototype.disableForNoti = function () {
        this._getPraScene().disableForNoti();
    };
    CEyeanglePraContainer.prototype.resumeAfterNoti = function () {
        this._getPraScene().resumeAfterNoti();
    };
    CEyeanglePraContainer.prototype.getAllPlugins2 = function () {
        //Reflection of this class. Not including scene.
        var ret = new Array();
        ret[0] = this.m_caliDlg;
        return ret;
    };
    CEyeanglePraContainer.prototype.saveVisibleStates = function () {
        _super.prototype.saveVisibleStates.call(this);
        this.m_visibilityTempArr2 = new Array();
        var plugins = this.getAllPlugins2();
        var i;
        for (i = 0; i < plugins.length; ++i) {
            this.m_visibilityTempArr2[i] = plugins[i].isVisible();
        }
        this.m_visibilityTempScene = this.m_praScene.isVisible();
    };
    CEyeanglePraContainer.prototype.getVisibleStates = function () {
        //不返回scene的状态。
        var superPart = _super.prototype.getVisibleStates.call(this);
        var ret = new Array();
        ret[0] = this.m_visibilityTempScene;
        var i;
        var s = 1;
        for (i = 0; i < superPart.length; ++i) {
            ret[s + i] = superPart[i];
        }
        s = 1 + superPart.length;
        for (i = 0; i < this.m_visibilityTempArr2.length; ++i) {
            ret[s + i] = this.m_visibilityTempArr2[i];
        }
        return ret;
    };
    CEyeanglePraContainer.prototype.show = function () {
        _super.prototype.show.call(this);
        if (this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        else {
            this.m_praScene.hide();
        }
        var parr = this.getAllPlugins2();
        var i;
        for (i = 0; i < parr.length; ++i) {
            if (this.m_visibilityTempArr2 && this.m_visibilityTempArr2[i]) {
                parr[i].show();
            }
            else {
                parr[i].hide();
            }
        }
    };
    CEyeanglePraContainer.prototype.hide = function () {
        this.saveVisibleStates();
        _super.prototype.hide.call(this);
        // 注：super.saveVisibleStates执行了两次！！
        this.m_praScene.hide();
        var parr = this.getAllPlugins2();
        var i;
        for (i = 0; i < parr.length; ++i) {
            parr[i].hide();
        }
    };
    CEyeanglePraContainer.prototype.startNewPra = function () {
        this._getPraScene().hide();
        //Then sync with the presenter
        var preloaderUI = this._getPreloaderUI();
        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicXMLLoadComplete, this);
        var picXMLTask = new gdeint.CPreloadTask();
        var resListPicXML = new Array();
        this.m_seledPicTagArr = gdeint.randomNums_ts(13, 4); //13张图片中随机选4张。
        //        this.m_seledPicTagArr = [12,8]; //13张图片中随机选4张。
        var i;
        for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
            resListPicXML[i] = new gdeint.ResStruct();
            resListPicXML[i].m_resName = tag2PicResName(this.m_seledPicTagArr[i]);
            resListPicXML[i].m_givenSize = 500;
        }
        picXMLTask.m_resList = resListPicXML;
        picXMLTask.m_proportion = 30;
        picXMLTask.m_taskName = "picXMLs";
        preloaderUI.addTask(picXMLTask);
        preloaderUI.setNoTaskLeft(true);
        //New: Clear old pra in the presenter
        preloaderUI.startPreload();
    };
    /*
     * 练习所需资源加载完成时触发。
     */
    CEyeanglePraContainer.prototype.onPicXMLLoadComplete = function () {
        var tmpAngles = new Array();
        var curTag;
        for (curTag = 0; curTag < this.m_seledPicTagArr.length; ++curTag) {
            var strResName;
            var n = this.m_seledPicTagArr[curTag];
            if (n < 10) {
                strResName = "pic00" + n;
            }
            else if (n < 100) {
                strResName = "pic0" + n;
            }
            else {
                strResName = "pic" + n;
            }
            strResName += "_json";
            var picJsn = RES.getRes(strResName);
            var len = picJsn.pics.pic.angles.angle.length; // Error occur on the second round. Maybe resource not loaded.
            var i;
            for (i = 0; i < len; ++i) {
                var tmpAngle = new CAngle();
                tmpAngle.m_className = "CAngle";
                tmpAngle.m_vertex = new gdeint.CPoint();
                tmpAngle.m_vertex.m_x = parseFloat(picJsn.pics.pic.angles.angle[i].vertex.x);
                tmpAngle.m_vertex.m_y = parseFloat(picJsn.pics.pic.angles.angle[i].vertex.y);
                tmpAngle.m_edge1Len = parseFloat(picJsn.pics.pic.angles.angle[i].edge1Len);
                tmpAngle.m_edge1Angle = parseFloat(picJsn.pics.pic.angles.angle[i].edge1Angle);
                tmpAngle.m_angleValue = parseFloat(picJsn.pics.pic.angles.angle[i].angleValue);
                tmpAngle.m_imgPath = picJsn.pics.pic.imgPath;
                var tmpResName;
                /*
                var temp = this.m_seledPicTagArr[curTag];
                if(temp < 10) {
                    tmpResName = "img_00" + temp.toString();
                }
                else if(temp < 100) {
                    tmpResName = "img_0" + temp.toString();
                }
                else {
                    tmpResName = "img_" + temp.toString();
                }
                tmpResName += "_gif";*/
                var strImgPath;
                strImgPath = picJsn.pics.pic.imgPath.toString();
                this.m_resNameFinder.setInp(strImgPath);
                tmpResName = this.m_resNameFinder.getResult();
                tmpAngle.m2_imgResName = tmpResName;
                tmpAngles.push(tmpAngle);
            }
        }
        this._getPraScene().setAngleArr(tmpAngles);
        var preloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
        preloaderUI.setNoTaskLeft(false);
        preloaderUI.setCompleteListener(this.onPicImgLoadComplete, this);
        var picImgTask = new gdeint.CPreloadTask();
        var resListPicImg = new Array();
        var i;
        for (i = 0; i < this.m_seledPicTagArr.length; ++i) {
            var tmpImgFileName = "", tmpImgResName = "";
            resListPicImg[i] = new gdeint.ResStruct();
            var resName = tag2PicResName(this.m_seledPicTagArr[i]);
            var picJsn = RES.getRes(resName);
            tmpImgFileName = picJsn.pics.pic.imgPath;
            var strArr = tmpImgFileName.split(".");
            var j;
            tmpImgResName = strArr[0];
            for (j = 1; j < strArr.length; ++j) {
                tmpImgResName += "_";
                tmpImgResName += strArr[j];
            }
            resListPicImg[i].m_resName = tmpImgResName;
            resListPicImg[i].m_givenSize = 500;
        }
        picImgTask.m_resList = resListPicImg;
        picImgTask.m_proportion = 72;
        picImgTask.m_taskName = "picImgs";
        preloaderUI.addTask(picImgTask);
        preloaderUI.setNoTaskLeft(true);
        preloaderUI.startPreload();
    };
    CEyeanglePraContainer.prototype.onPicImgLoadComplete = function () {
        this.m_preloaderUI.setNextActListener(this.startRunPra, this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    };
    CEyeanglePraContainer.prototype.startRunPra = function () {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();
        this._getPraScene().startNewPra();
        this._getPraScene().show();
    };
    CEyeanglePraContainer.prototype._quitPra = function () {
    };
    CEyeanglePraContainer.prototype.setQuitHandler = function (func) {
    };
    CEyeanglePraContainer.prototype.showCaliDlg = function (listener) {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    };
    CEyeanglePraContainer.prototype.applyFunc = function (func, argArr) {
        if (null != func) {
            func.apply(this._getPraScene(), argArr);
        }
    };
    CEyeanglePraContainer.prototype.setCaRat = function (cr) {
        this.m_renderFilter.setCaRat(cr);
    };
    CEyeanglePraContainer.prototype.getCaRat = function () {
        return this.m_renderFilter._getCaRat();
    };
    return CEyeanglePraContainer;
}(CUIContainer));
__reflect(CEyeanglePraContainer.prototype, "CEyeanglePraContainer", ["IEyeanglePraContainer"]);
