var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * @author
 *
 */
var CTopAreaEvent = (function (_super) {
    __extends(CTopAreaEvent, _super);
    function CTopAreaEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        _super.call(this, type, bulle, cancel);
    }
    CTopAreaEvent.EVT_SWITCHBTN_TAP = "EVT_SWITCHBTN_TAP";
    return CTopAreaEvent;
}(egret.Event));
