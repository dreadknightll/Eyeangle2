/**
 *
 * @author 
 *
 */
class CAngleInputterEvent extends egret.Event {
    public constructor(type: string,bulle: boolean = false,cancel: boolean = false) {
        super(type,bulle,cancel);
    }
    public static EVT_DI_TOUCHSTART: string = "EVT_DI_TOUCHSTART";
    public static EVT_DI_TOUCHEND: string = "EVT_DI_TOUCHEND";
}
