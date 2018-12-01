var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * 练习场景顶部区域。
 *
 */
var CTopArea = (function (_super) {
    __extends(CTopArea, _super);
    function CTopArea() {
        _super.call(this);
        this.s_bgFrontWidth = 428;
        this.s_bgFrontHeight = 160;
        this.s_topRightWidth = 250;
        this.s_topRightHeight1 = 65;
        this.s_thumbAreax = 25;
        this.s_thumbAreay = 0;
        this.s_thumbAreaWidth = 428 - 250;
        this.s_thumbAreaHeight = 160;
        this.m_bgBack = new egret.Shape();
        this.m_bgFront = new egret.Shape();
        this.m_topButtonBg = new egret.Shape();
        this.m_evtSwitchBtnTap = new CTopAreaEvent(CTopAreaEvent.EVT_SWITCHBTN_TAP);
    }
    CTopArea.prototype.childrenCreated = function () {
        this.m_bgBack.width = this.width;
        this.m_bgBack.height = this.height;
        this.m_bgBack.graphics.beginFill(0x33EE99);
        this.m_bgBack.graphics.drawRect(0, 0, this.m_bgBack.width, this.m_bgBack.height);
        this.m_bgBack.graphics.endFill();
        this.m_bgFront.width = this.s_bgFrontWidth;
        this.m_bgFront.height = this.s_bgFrontHeight;
        this.m_bgFront.graphics.beginFill(0x00FF00); //Right top.
        this.m_bgFront.graphics.drawRect(0, 0, this.m_bgFront.width, this.m_bgFront.height);
        this.m_bgFront.graphics.endFill();
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
        this.bgFrontGrp.addChild(this.m_bgFront);
        this.switchBtnBgGrp.addChild(this.m_topButtonBg);
        this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSwitchBtnTap, this);
        this.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onThumbTap, this);
    };
    CTopArea.prototype.onSwitchBtnTap = function (evt) {
        this.dispatchEvent(this.m_evtSwitchBtnTap);
    };
    CTopArea.prototype.onThumbTap = function (evt) {
        var ptTh;
        ptTh = new CPoint();
        ptTh.m_x = evt.localX;
        ptTh.m_y = evt.localY;
        g_praScene.m_UIPresenter.setThSelPt(ptTh);
        g_praScene.syncWithUIPresenter();
    };
    return CTopArea;
}(eui.Component));
