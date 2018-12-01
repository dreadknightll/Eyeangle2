/**
 *
 * @author 
 *
 */
interface IUIContainer extends INotiParent,IHidable {
    //未指定UI的数据类型，未定义横竖校准框。

    setAlertDlg(IAlertDlgPlugin):void;
    setConfirmDlg(IConfirmDlgPlugin):void;
    setPreloaderUI(IPreloaderUI):void;

    getDlgLayer():egret.DisplayObjectContainer;
    _getConfirmDlg():IConfirmDlgPlugin;
    _getAlertDlg():IAlertDlgPlugin;
    _getPreloaderUI():IPreloaderUI;

    saveVisibleStates():void;
    getVisibleStates():Array<boolean>;

    showAlert(content: string , listener: Function):void;
    showConfirm(content:string , listener:Function):void;

    setCaRat(cr:number):void;
    getCaRat():number;
}
