class CWelcomePage_Eyeangle2 implements IPage {

    private m_commonPage:CPage;
    public m_scene:eyeangle2.CWelcomeScene_Eyeangle2;

    public constructor() {
        this.m_commonPage = new CPage();
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