/*
    “练习即将开始”跳动文字。
*/
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
var eyeangle2;
(function (eyeangle2) {
    var CStartingCharAni = (function (_super) {
        __extends(CStartingCharAni, _super);
        function CStartingCharAni() {
            var _this = _super.call(this) || this;
            _this.s_startX1 = 20;
            _this.s_startX2 = 15;
            _this.m_str = "练习即将开始";
            _this.m_startX = _this.s_startX1;
            _this.m_startY = 5;
            _this.m_frameTag = 0;
            return _this;
        }
        CStartingCharAni.prototype.childrenCreated = function () {
            this.m_timer = new egret.Timer(300, -1);
            this.m_timer.addEventListener(egret.TimerEvent.TIMER, this.onNextCharStr, this);
            this.m_timer.start();
        };
        CStartingCharAni.prototype.onNextCharStr = function () {
            ++this.m_frameTag;
            var dots = "", fullStr = "";
            var i, j;
            for (i = 0; i < this.m_frameTag; ++i) {
                dots += ".";
            }
            fullStr = this.m_str + dots;
            this.textLabel.text = fullStr;
            switch (this.m_frameTag) {
                case 1:
                    this.m_startX = this.s_startX1;
                    break;
                case 2:
                    this.m_startX = this.s_startX1;
                    break;
                case 3:
                    this.m_startX = this.s_startX1;
                    break;
                case 4:
                    this.m_startX = this.s_startX1;
                    break;
                case 5:
                    this.m_startX = this.s_startX2;
                    break;
                case 6:
                    this.m_startX = this.s_startX2;
                    break;
            }
            this.textLabel.x = this.m_startX;
            this.m_frameTag %= 6;
        };
        return CStartingCharAni;
    }(eui.Component));
    eyeangle2.CStartingCharAni = CStartingCharAni;
    __reflect(CStartingCharAni.prototype, "eyeangle2.CStartingCharAni");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CStartingCharAni.js.map