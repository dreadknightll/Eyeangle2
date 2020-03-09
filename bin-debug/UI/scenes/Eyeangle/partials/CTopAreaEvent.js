var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
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
        return _super.call(this, type, bulle, cancel) || this;
    }
    CTopAreaEvent.EVT_SWITCHBTN_TAP = "EVT_SWITCHBTN_TAP";
    return CTopAreaEvent;
}(egret.Event));
__reflect(CTopAreaEvent.prototype, "CTopAreaEvent");
//# sourceMappingURL=CTopAreaEvent.js.map