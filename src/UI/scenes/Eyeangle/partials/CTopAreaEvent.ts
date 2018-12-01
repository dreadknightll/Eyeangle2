/**
 *
 * @author 
 *
 */
class CTopAreaEvent extends egret.Event {
    public constructor(type: string,bulle: boolean = false,cancel: boolean = false) {
        super(type,bulle,cancel);
	}
    public static EVT_SWITCHBTN_TAP: string = "EVT_SWITCHBTN_TAP";
}
