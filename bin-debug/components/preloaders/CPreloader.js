var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var CPreloader = (function () {
    function CPreloader() {
    }
    CPreloader.prototype.setResList = function (l) {
        this.m_resList = l;
    };
    CPreloader.prototype.setCompleteListener = function (lsner, thisObj) {
        this.m_completeListener = lsner;
        this.m_completeThisObj = thisObj;
    };
    CPreloader.prototype.setProgressListener = function (lsner, thisObj) {
        this.m_progressListener = lsner;
        this.m_progressThisObj = thisObj;
    };
    CPreloader.prototype.genGroupName = function () {
        var ret;
        var tmpTag = Math.round(1 + ((9999 - 1) * Math.random()));
        var tagStr = "";
        if (tmpTag < 10) {
            tagStr = "000" + tmpTag;
        }
        else if (tmpTag < 100) {
            tagStr = "00" + tmpTag;
        }
        else if (tmpTag < 1000) {
            tagStr = "0" + tmpTag;
        }
        else {
            tagStr = "" + tmpTag;
        }
        ret = "RandomGroup" + (new Date()).Format("yyyyMMddhhmmss") + tagStr;
        return ret;
    };
    CPreloader.prototype.preload = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        var tmpGroup = this.m_resList;
        var groupName = this.genGroupName();
        RES.createGroup(groupName, tmpGroup);
        RES.loadGroup(groupName);
    };
    CPreloader.prototype.onResourceLoadProgress = function (event) {
        var argArr = new Array();
        argArr[0] = event.itemsLoaded;
        argArr[1] = event.itemsTotal;
        this.m_progressListener.apply(this.m_progressThisObj, argArr);
    };
    CPreloader.prototype.onResourceLoadComplete = function (evt) {
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        this.m_completeListener.apply(this.m_completeThisObj);
    };
    CPreloader.prototype.onResourceLoadError = function (evt) {
        //TODO
        console.warn("Group:" + evt.groupName + " has failed to load");
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceLoadProgress, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
    };
    return CPreloader;
}());
__reflect(CPreloader.prototype, "CPreloader", ["IPreloader"]);
//# sourceMappingURL=CPreloader.js.map