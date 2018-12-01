/**
 *
 * @author 
 *
 */
interface IEyeanglePraContainer extends IUIContainer{
    setPraScene(IEyeanglePraScene):void;
    setCaliDlg(ICaliDlg):void;
    setRenderFilter(IAngle2RenderFilter):void;

    _getPraScene():IEyeanglePraScene;
    _getCaliDlg():ICaliDlg;
    _getRenderFilter(): IEyeangle2RenderFilter;

    showCaliDlg(listener:(dlgResult:boolean)=>void):void;
    
    startNewPra():void;
    _quitPra():void;
    setQuitHandler(func:Function);
}
