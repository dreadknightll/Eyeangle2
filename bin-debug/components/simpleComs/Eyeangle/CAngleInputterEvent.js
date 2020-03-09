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
var CAngleInputterEvent = (function (_super) {
    __extends(CAngleInputterEvent, _super);
    function CAngleInputterEvent(type, bulle, cancel) {
        if (bulle === void 0) { bulle = false; }
        if (cancel === void 0) { cancel = false; }
        return _super.call(this, type, bulle, cancel) || this;
    }
    CAngleInputterEvent.EVT_DI_TOUCHSTART = "EVT_DI_TOUCHSTART";
    CAngleInputterEvent.EVT_DI_TOUCHEND = "EVT_DI_TOUCHEND";
    return CAngleInputterEvent;
}(egret.Event));
__reflect(CAngleInputterEvent.prototype, "CAngleInputterEvent");
//# sourceMappingURL=CAngleInputterEvent.js.map