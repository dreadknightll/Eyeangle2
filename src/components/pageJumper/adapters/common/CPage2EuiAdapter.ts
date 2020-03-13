/*
    1.Set m_adaptee.
    2.m_adaptee children created.
    3.firstShow.
    4.showPage/hidePage.
*/

class CPage2EuiAdapter extends gdeint.CPage {
    public m_adaptee:eui.Component;

    public constructor() {
        super();
    }

    public show():void {
        super.show();
        this.m_adaptee.visible = true;
	}

	public hide():void {
        super.hide();
        this.m_adaptee.visible = false;
	}

};