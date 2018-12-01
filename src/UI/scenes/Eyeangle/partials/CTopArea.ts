/**
 *
 * 练习场景顶部区域。
 *
 */
namespace eyeangle2 {
    export class CTopArea extends eui.Component {
        public constructor() {
            super();

            this.m_bgBack = new egret.Shape();
            this.m_bgFront = new egret.Shape();
            this.m_topButtonBg = new egret.Shape();

            this.m_evtSwitchBtnTap = new CTopAreaEvent(CTopAreaEvent.EVT_SWITCHBTN_TAP);
        }

        public progressView: CProgressView;
        public scoreView: CScoreView;
        public bgBackGrp: eui.Group;
        public bgFrontGrp: eui.Group;
        public switchBtnBgGrp: eui.Group;
        public switchBtn: eui.Image;
        public thumbUI:CThumbUI;

        public m_evtSwitchBtnTap:CTopAreaEvent;

        public m_bgBack: egret.Shape;
        public m_bgFront: egret.Shape;

        private s_bgFrontWidth:number = 428;
        private s_bgFrontHeight:number = 160;
        private s_topRightWidth = 250;
        private s_topRightHeight1 = 65;
        public s_thumbAreax: number = 25; 
        public s_thumbAreay: number = 0;
        public s_thumbAreaWidth: number = 428 - 250;
        public s_thumbAreaHeight: number = 160;
        public m_topButtonBg: egret.Shape;

        public childrenCreated() :void {
            
            this.m_bgBack.width = this.width;
            this.m_bgBack.height = this.height;
            this.m_bgBack.graphics.beginFill(0x33EE99);

            this.m_bgBack.graphics.drawRect(0,0,this.m_bgBack.width,this.m_bgBack.height);
            this.m_bgBack.graphics.endFill();

            this.m_bgFront.width = this.s_bgFrontWidth;
            this.m_bgFront.height = this.s_bgFrontHeight;

            var bgFrontRectBg:eui.Rect , bgFrontRectLeft:eui.Rect , bgFrontRectBottomRight;
            
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
            this.m_bgFront.graphics.drawRect(0,0,this.m_bgFront.width - this.s_topRightWidth,this.m_bgFront.height);
            this.m_bgFront.graphics.endFill();

            this.m_bgFront.graphics.beginFill(0xEE8855); //Right bottom.
            this.m_bgFront.graphics.drawRect(this.m_bgFront.width - this.s_topRightWidth,this.s_topRightHeight1,this.s_topRightWidth,this.m_bgFront.height - this.s_topRightHeight1);
            this.m_bgFront.graphics.endFill();

            this.m_topButtonBg.width = this.switchBtn.width;
            this.m_topButtonBg.height = this.switchBtn.height;
            this.m_topButtonBg.graphics.beginFill(0xFFFFFF);
            this.m_topButtonBg.graphics.drawRect(0,0,this.m_topButtonBg.width,this.m_topButtonBg.height);
            this.m_topButtonBg.graphics.endFill();

            this.switchBtnBgGrp.x = this.switchBtn.x;
            this.switchBtnBgGrp.y = this.switchBtn.y;

            this.bgBackGrp.addChild(this.m_bgBack);
            this.bgFrontGrp.addChild(bgFrontRectBg);
            this.bgFrontGrp.addChild(bgFrontRectLeft);
            this.bgFrontGrp.addChild(bgFrontRectBottomRight);

            this.switchBtnBgGrp.addChild(this.m_topButtonBg);

            this.switchBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onSwitchBtnTap,this);
    //        this.thumbUI.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onThumbTap , this);
            this.thumbUI.addEventListener(CThumbUIEvent.EVT_THUMB_TAP , this.onThumbTap , this);
        }

        private onSwitchBtnTap(evt:egret.TouchEvent)
        {
            this.dispatchEvent(this.m_evtSwitchBtnTap);
        }

        private onThumbTap(evt:CThumbUIEvent/*egret.TouchEvent*/) {
            var ptTh:gdeint.CPoint;
            ptTh = new gdeint.CPoint();
            var thSelRect:gdeint.CRect = g_praScene.m_UIPresenter.rfgetScrThumbSelRect();
    //        ptTh.m_x = evt.localX - thSelRect.m_width / 2;
    //        ptTh.m_y = evt.localY - thSelRect.m_height / 2;
            ptTh.m_x = evt.m_tchX - thSelRect.m_width / 2;
            ptTh.m_y = evt.m_tchY - thSelRect.m_height / 2;

            g_praScene.m_UIPresenter.inpThSelPt(ptTh);
            g_praScene.syncWithUIPresenter();
        
        }
    }
}
