/**
 *
 * @author 
 *
 */
interface IScene extends IHidable,INotiParent,IContainerPlugin {
    disableScene():void;
    enableScene():void;
    getDlgLayer():egret.DisplayObjectContainer;
}
