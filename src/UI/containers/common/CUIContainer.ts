class CUIContainer implements IUIContainer {
	public constructor() {
	}

    private m_alertDlg:IAlertDlgPlugin;
    private m_confirmDlg: IConfirmDlgPlugin;
    protected m_preloaderUI: IPreloaderUI;
    private m_visibilityTempArr:Array<boolean>;

    public setAlertDlg(ad:IAlertDlgPlugin): void {
        this.m_alertDlg = ad;
        this.m_alertDlg._setParentContainer(this);
        this.m_alertDlg.setParent(this);
    }

    public setConfirmDlg(d:IConfirmDlgPlugin): void {
        this.m_confirmDlg = d;
        this.m_confirmDlg._setParentContainer(this);
        this.m_confirmDlg.setParent(this);
    }

	public setPreloaderUI(pui:IPreloaderUI) {
        this.m_preloaderUI = pui;
        this.m_preloaderUI._setParentContainer(this);
    }

    public _getAlertDlg():IAlertDlgPlugin {
        return this.m_alertDlg;
    }

    public _getConfirmDlg(): IConfirmDlgPlugin {
        return this.m_confirmDlg;
    }

    public _getPreloaderUI(): IPreloaderUI {
        return this.m_preloaderUI;
    }

    private getAllPlugins():Array<IContainerPlugin> {
        //Reflection of this class. Not including scene.
        var ret:Array<IContainerPlugin> = new Array<IContainerPlugin>();
        ret[0] = this.m_alertDlg;
        ret[1] = this.m_confirmDlg;
        ret[2] = this.m_preloaderUI;
        return ret;
    }

    public saveVisibleStates():void {
        this.m_visibilityTempArr = new Array<boolean>();
        var plugins:Array<IContainerPlugin> = this.getAllPlugins();
        var i:number;
        for(i=0;i<plugins.length;++i) {
            this.m_visibilityTempArr[i] = plugins[i].isVisible();
        }
    }

    public getVisibleStates():Array<boolean> {
        return this.m_visibilityTempArr;
    }

    public getDlgLayer():egret.DisplayObjectContainer {
        return null;
    }

    public getNotiLayer():egret.DisplayObjectContainer {
        return null;
    }

    public disableForNoti():void {
    }

    public resumeAfterNoti():void {
    }

    public showAlert(content: string , listener: Function): void {
        var visibleStates = this.getVisibleStates();
        var alertDlg = this._getAlertDlg();
        alertDlg.setCloseListener(listener);
        alertDlg.setContent(content);
        alertDlg.showDlg();
    }

    public showConfirm(content: string , listener: Function): void {

        var pc:IConfirmDlg = this._getConfirmDlg();
        pc.setCloseListener(listener);
        pc._setContent(content);
        this._getConfirmDlg().showDlg();

    }

    public setCaRat(cr: number): void {
    }

    public getCaRat(): number {
        return 1;
    }

    public isVisible():boolean {
        return true;
    }

    public show():void {
        var parr:Array<IContainerPlugin> = this.getAllPlugins();
        var i;
        for(i=0;i<parr.length;++i) {
            if(this.m_visibilityTempArr && this.m_visibilityTempArr[i]) {
                parr[i].show();
            }
            else {
                parr[i].hide();
            }

        }
    }
    
    public hide():void {
        this.saveVisibleStates();

        var parr:Array<IContainerPlugin> = this.getAllPlugins();
        var i;
        for(i=0;i<parr.length;++i) {
            parr[i].hide();
        }
    }

    public applyFunc(func:any , argArr:Array<any>):void {
    }
}