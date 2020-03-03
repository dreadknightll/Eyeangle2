var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CPageJumper = (function () {
    //不调用gotoPage，则页面显示状态维持原状。
    function CPageJumper() {
        this.m_pages = {};
        this.m_curState = 0;
    }
    CPageJumper.prototype.setPage = function (pageName, page) {
        this.m_pages[pageName] = page;
    };
    CPageJumper.prototype.getPage = function (pageName) {
        return this.m_pages[pageName];
    };
    CPageJumper.prototype.isPageReady = function (pageName) {
        return false;
    };
    CPageJumper.prototype.gotoPage = function (pageName, readyListener /*Not used*/) {
        this.m_targetPage = pageName;
        var curPage;
        curPage = this.m_pages[pageName];
        //		if(curPage.isReady()) {
        curPage.showOnFront();
        //	Hide other pages:
        for (var tmpKey in this.m_pages) {
            if (tmpKey != pageName) {
                if (undefined != this.m_pages[tmpKey]) {
                    this.m_pages[tmpKey].hide();
                }
            }
        }
        //		}
        //		else {
        //			add to action queue.
        //		}
    };
    /*	pubilc onPageLoadReady(pageName:string):void {
            pageName
        }*/
    CPageJumper.prototype.getState = function () {
        //1、Idle state 2、Jumping state(Target set and waiting to jump)
        return this.m_curState;
    };
    return CPageJumper;
}());
__reflect(CPageJumper.prototype, "CPageJumper", ["IPageJumper"]);
