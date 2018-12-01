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
var CMidAreaEvent = (function (_super) {
    __extends(CMidAreaEvent, _super);
    function CMidAreaEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        _super.call(this, type, bulle, cancel);
    }
    CMidAreaEvent.EVT_IMG_DRAGMOVE = "EVT_IMG_DRAGMOVE";
    CMidAreaEvent.EVT_IMG_DRAGEND = "EVT_IMG_DRAGEND";
    return CMidAreaEvent;
}(egret.Event));
