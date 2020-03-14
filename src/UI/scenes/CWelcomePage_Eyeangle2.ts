
//此类用于实现切换页面时启用/禁止开始练习按钮等操作。
class CWelcomePage_Eyeangle2 implements gdeint.IPage {

    private m_commonPage:gdeint.CPage;
    public m_scene:eyeangle2.CWelcomeScene_Eyeangle2_V2;

    public constructor() {
        this.m_commonPage = new gdeint.CPage();
    }

	public show():void {
        this.m_commonPage.show();
        this.m_scene.visible = true;
	}

	public hide():void {
        this.m_commonPage.hide();
        this.m_scene.visible = false;
	}

    public isVisible():boolean {
        return this.m_scene.visible;
    }

	public showOnFront():void {
        this.m_commonPage.showOnFront();
        this.show();
		this.onShownOnFront();
	}

    public onShownOnFront():void {
        this.m_commonPage.onShownOnFront();
//        window.alert("CWelcomePage:OnShowOnFront");
        this.m_scene.switch2StartBtn();
    }
}