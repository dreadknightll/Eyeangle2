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
 * 练习场景顶部区域。
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CTopArea = (function (_super) {
        __extends(CTopArea, _super);
        function CTopArea() {
            var _this = _super.call(this) || this;
            _this.s_bgFrontWidth = 428;
            _this.s_bgFrontHeight = 160;
            _this.s_topRightWidth = 250;
            _this.s_topRightHeight1 = 65;
            _this.s_thumbAreax = 25;
            _this.s_thumbAreay = 0;
            _this.s_thumbAreaWidth = 428 - 250;
            _this.s_thumbAreaHeight = 160;
            _this.m_bgBack = new egret.Shape();
            _this.m_bgFront = new egret.Shape();
            _this.m_topButtonBg = new egret.Shape();
            _this.m_evtSwitchBtnTap = new CTopAreaEvent(CTopAreaEvent.EVT_SWITCHBTN_TAP);
            return _this;
        }
        CTopArea.prototype.childrenCreated = function () {
            this.m_bgBack.width = this.width;
            this.m_bgBack.height = this.height;
            this.m_bgBack.graphics.beginFill(0x33EE99);
            this.m_bgBack.graphics.drawRect(0, 0, this.m_bgBack.width, this.m_bgBack.height);
            this.m_bgBack.graphics.endFill();
            this.m_bgFront.width = this.s_bgFrontWidth;
            this.m_bgFront.height = this.s_bgFrontHeight;
            var bgFrontRectBg, bgFrontRectLeft, bgFrontRectBottomRight;
            bgFrontRectBg = new eui.Rect();
            bgFrontRectBg.fillColor = 0x00FF00;
            bgFrontRectBg.width = this.m_bgFront.width;
            bgFrontRectBg.height = this.m_bgFront.height;
            bgFrontRectLeft = new eui.Rect();
            bgFrontRectLeft.fillColor = 0xAAFFEE;
            bgFrontRectLeft.width = this.m_bgFront.width - this.s_topRightWidth;
            bgFrontRectLeft.height = this.m_bgFront.height;
            bgFrontRectBottomRight = new eui.Rect();
            bgFrontRectBottomRight.fillColor = 0xEE8855;
            bgFrontRectBottomRight.x = this.m_bgFront.width - this.s_topRightWidth;
            bgFrontRectBottomRight.y = this.s_topRightHeight1;
            bgFrontRectBottomRight.width = this.s_topRightWidth;
            bgFrontRectBottomRight.height = this.m_bgFront.height - this.s_topRightHeight1;
            this.m_bgFront.graphics.beginFill(0xAAFFEE); //Middle.
            this.m_bgFront.graphics.drawRect(0, 0, this.m_bgFront.width - this.s_topRightWidth, this.m_bgFront.height);
            this.m_bgFront.graphics.endFill();
            this.m_bgFront.graphics.beginFill(0xEE8855); //Right bottom.
            this.m_bgFront.graphics.drawRect(this.m_bgFront.width - this.s_topRightWidth, this.s_topRightHeight1, this.s_topRightWidth, this.m_bgFront.height - this.s_topRightHeight1);
            this.m_bgFront.graphics.endFill();
            this.m_topButtonBg.width = this.switchBtn.width;
            this.m_topButtonBg.height = this.switchBtn.height;
            this.m_topButtonBg.graphics.beginFill(0xFFFFFF);
            this.m_topButtonBg.graphics.drawRect(0, 0, this.m_topButtonBg.width, this.m_topButtonBg.height);
            this.m_topButtonBg.graphics.endFill();
            this.switchBtnBgGrp.x = this.switchBtn.x;
            this.switchBtnBgGrp.y = this.switchBtn.y;
            this.bgBackGrp.addChild(this.m_bgBack);
            this.bgFrontGrp.addChild(bgFrontRectBg);
            this.bgFrontGrp.addChild(bgFrontRectLeft);
            this.bgFrontGrp.addChild(bgFrontRectBottomRight);
            this.switchBtnBgGrp.addChild(this.m_topButtonBg);
            this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitchBtnTap, this);
            //        this.thumbUI.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onThumbTap , this);
            this.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP, this.onThumbTap, this);
        };
        CTopArea.prototype.onSwitchBtnTap = function (evt) {
            this.dispatchEvent(this.m_evtSwitchBtnTap);
        };
        CTopArea.prototype.onThumbTap = function (evt /*egret.TouchEvent*/) {
            var ptTh;
            ptTh = new gdeint.CPoint();
            var thSelRect = g_praScene.m_UIPresenter.rfgetScrThumbSelRect();
            //        ptTh.m_x = evt.localX - thSelRect.m_width / 2;
            //        ptTh.m_y = evt.localY - thSelRect.m_height / 2;
            ptTh.m_x = evt.m_tchX - thSelRect.m_width / 2;
            ptTh.m_y = evt.m_tchY - thSelRect.m_height / 2;
            g_praScene.m_UIPresenter.inpThSelPt(ptTh);
            g_praScene.syncWithUIPresenter();
        };
        return CTopArea;
    }(eui.Component));
    eyeangle2.CTopArea = CTopArea;
    __reflect(CTopArea.prototype, "eyeangle2.CTopArea");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CTopArea.js.map