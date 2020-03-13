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
 * 显示最后一次目测得分的框。
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CCmpAngleDlg = (function (_super) {
        __extends(CCmpAngleDlg, _super);
        function CCmpAngleDlg() {
            var _this = _super.call(this) || this;
            _this.m_flagsContainer = new egret.DisplayObjectContainer();
            _this.m_flagsArr = new Array();
            var i;
            for (i = 0; i < 3; ++i) {
                _this.m_flagsArr[i] = new egret.Bitmap();
                _this.m_flagsArr[i].width = 30;
                _this.m_flagsArr[i].height = 40;
                _this.m_flagsArr[i].x = 35 * i;
                _this.m_flagsArr[i].texture = RES.getRes("score_dot_png");
                _this.m_flagsContainer.addChild(_this.m_flagsArr[i]);
            }
            return _this;
        }
        CCmpAngleDlg.prototype.childrenCreated = function () {
            this.scoreFlags.addChild(this.m_flagsContainer);
        };
        CCmpAngleDlg.prototype.setRank = function (r) {
            //0:No flag 1:1 flag 2:2 flags 3:3 flags ...
            var i;
            for (i = 0; i < r; ++i) {
                this.m_flagsArr[i].texture = RES.getRes("score_flag_png");
            }
            for (; i < 3; ++i) {
                this.m_flagsArr[i].texture = RES.getRes("score_cross_png");
            }
            if (r > 0) {
                this.scoreValue.text = "+" + r + "0";
            }
            else {
                this.scoreValue.text = "+0";
            }
        };
        return CCmpAngleDlg;
    }(eui.Component));
    eyeangle2.CCmpAngleDlg = CCmpAngleDlg;
    __reflect(CCmpAngleDlg.prototype, "eyeangle2.CCmpAngleDlg");
})(eyeangle2 || (eyeangle2 = {}));
