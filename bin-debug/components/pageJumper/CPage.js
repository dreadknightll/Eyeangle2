var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CPage = (function () {
    function CPage() {
    }
    CPage.prototype.showOnFront = function () {
        this.onShownOnFront();
    };
    CPage.prototype.show = function () {
    };
    CPage.prototype.hide = function () {
    };
    CPage.prototype.onShownOnFront = function () {
        //		window.alert("super.onPageShow");
    };
    CPage.prototype.isVisible = function () {
        return true;
    };
    return CPage;
}());
__reflect(CPage.prototype, "CPage", ["IPage", "IHidable"]);
//# sourceMappingURL=CPage.js.map