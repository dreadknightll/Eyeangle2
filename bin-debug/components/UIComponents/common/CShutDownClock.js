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
var gdeint;
(function (gdeint) {
    var CShutDownClock = (function (_super) {
        __extends(CShutDownClock, _super);
        function CShutDownClock() {
            var _this = _super.call(this) || this;
            _this.m2_fontSize = 24;
            _this.m2_cc = false;
            _this.m2_cc = 94;
            return _this;
        }
        CShutDownClock.prototype.childrenCreated = function () {
            this.m2_cc = true;
            this.timeLabel.size = this.m2_fontSize;
            this.m_tracerTimer = new egret.Timer(200, 0);
            this.m_tracerTimer.addEventListener(egret.TimerEvent.TIMER, this.onTracerTimer, this);
        };
        CShutDownClock.prototype.setFontSize = function (fs) {
            this.m2_fontSize = fs;
            if (this.m2_cc) {
                this.timeLabel.size = this.m2_fontSize;
            }
        };
        CShutDownClock.prototype.onTracerTimer = function () {
            this.timeLabel.text = gdeint.seconds2MinSec(1200 - this.m_timerPointer.currentCount);
        };
        /*		public setTimer(msCnt:number , listener:Function) {
                    var timer:egret.Timer;
                    timer = new egret.Timer(msCnt , 1);
                    timer.addEventListener(egret.TimerEvent.TIMER,listener,this);
                    timer.start();
                }*/
        CShutDownClock.prototype.setTimer = function (timer) {
            this.m_timerPointer = timer;
            this.m_tracerTimer.start();
        };
        return CShutDownClock;
    }(eui.Component));
    gdeint.CShutDownClock = CShutDownClock;
    __reflect(CShutDownClock.prototype, "gdeint.CShutDownClock");
})(gdeint || (gdeint = {}));
//# sourceMappingURL=CShutDownClock.js.map