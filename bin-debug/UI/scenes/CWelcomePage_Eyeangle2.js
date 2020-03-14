var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var CWelcomePage_Eyeangle2 = (function () {
    function CWelcomePage_Eyeangle2() {
        this.m_commonPage = new gdeint.CPage();
    }
    CWelcomePage_Eyeangle2.prototype.show = function () {
        this.m_commonPage.show();
        this.m_scene.visible = true;
    };
    CWelcomePage_Eyeangle2.prototype.hide = function () {
        this.m_commonPage.hide();
        this.m_scene.visible = false;
    };
    CWelcomePage_Eyeangle2.prototype.isVisible = function () {
        return this.m_scene.visible;
    };
    CWelcomePage_Eyeangle2.prototype.showOnFront = function () {
        this.m_commonPage.showOnFront();
        this.show();
        this.onShownOnFront();
    };
    CWelcomePage_Eyeangle2.prototype.onShownOnFront = function () {
        this.m_commonPage.onShownOnFront();
        //        window.alert("CWelcomePage:OnShowOnFront");
        this.m_scene.switch2StartBtn();
    };
    return CWelcomePage_Eyeangle2;
}());
__reflect(CWelcomePage_Eyeangle2.prototype, "CWelcomePage_Eyeangle2", ["gdeint.IPage", "gdeint.IHidable"]);
//# sourceMappingURL=CWelcomePage_Eyeangle2.js.map