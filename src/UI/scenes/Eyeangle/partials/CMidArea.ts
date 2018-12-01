/**
 *
 * 练习场景中部区域。
 *
 */
namespace eyeangle2 {
    export class CMidArea extends eui.Component {
        public constructor() {
            super();
            this.m_bg = new egret.Shape();
            this.m_midCanvas = new egret.Shape();
            
            this.m2_imgTchStartPoint = new gdeint.CPoint();
            this.m2_imgStartPoint = new gdeint.CPoint();

            this.m_evtImgDragEnd = new CMidAreaEvent(CMidAreaEvent.EVT_IMG_DRAGEND);
        }

        private midBgGrp:eui.Group;
        public midContentGroup:eui.Group;
        public img:eui.Image;
        private midCanvasGrp:eui.Group;
        public m_midCanvas:egret.Shape; //For drawing angle.

        private m_trueWidth: number = 0;
        private m_trueHeight:number = 0;

        private m_bg: egret.Shape;
        private m_evtImgDragEnd: CMidAreaEvent;

        private m2_imgTchStartPoint:gdeint.CPoint;
        private m2_imgStartPoint:gdeint.CPoint;
        private m2_isImgMoving: boolean = false;

        private s_horSpace: number = 80;
        private s_verSpace: number = 80;

        public childrenCreated():void {
    //        this.maxWidth = 480; Not work.
            var rect:egret.Rectangle = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            rect.width = 480;
            rect.height = 2000;

            this.mask = rect;

            this.midBgGrp.addChild(this.m_bg);
            this.midCanvasGrp.addChild(this.m_midCanvas);

            this.img.touchEnabled = true;
            this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchBegin,this);
            this.img.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.touchMove,this);
            this.img.addEventListener(egret.TouchEvent.TOUCH_END,this.touchEnd,this);

        }

        private redrawBg():void {
            this.m_bg.width = this.getTrueWidth();
            this.m_bg.height = this.m_trueHeight;
            this.m_bg.graphics.clear();
            this.m_bg.graphics.beginFill(0x999999);
            this.m_bg.graphics.drawRect(0,0,this.m_bg.width,this.m_bg.height);
            this.m_bg.graphics.endFill();
        }

        private touchBegin(evt:egret.TouchEvent):void {
            this.m2_imgTchStartPoint.m_x = evt.stageX;
            this.m2_imgTchStartPoint.m_y = evt.stageY;
            this.m2_imgStartPoint.m_x = this.midContentGroup.x;
            this.m2_imgStartPoint.m_y = this.midContentGroup.y;

            this.m2_isImgMoving = true;
        }

        private touchMove(evt:egret.TouchEvent):void {
            if(this.m2_isImgMoving) {
                if(evt.target == this.img)
                {
                    var dx:number , dy:number , newX:number , newY:number;
                    dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                    dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                    newX = this.m2_imgStartPoint.m_x + dx;
                    newY = this.m2_imgStartPoint.m_y + dy;

                    if(newX > this.s_horSpace) {
                        newX = this.s_horSpace;
                    }

                    if(newX < -(this.img.width + this.s_horSpace - this.getTrueWidth())) {
                        newX = -(this.img.width + this.s_horSpace - this.getTrueWidth());
                    }

                    if(this.img.height < this.getTrueHeight()) {
                        newY = (this.getTrueHeight() - this.img.height) / 2;
                    }
                    else {
                        if(newY > this.s_verSpace) {
                            newY = this.s_verSpace;
                        }

                        if(newY < -(this.img.height + this.s_verSpace - this.getTrueHeight())) {
                            newY = -(this.img.height + this.s_verSpace - this.getTrueHeight());                     
                        }
                    }

                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;

                    var pt:gdeint.CPoint;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y;
                    g_praScene.m_UIPresenter.inpImgSelPt(pt);

                    this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
                }
            }
            else {
            }
        }

        private touchEnd(evt:egret.TouchEvent):void {
            this.m2_isImgMoving = false;

            this.dispatchEvent(this.m_evtImgDragEnd);
        }
        
        public setTrueWidth(tw: number): void {
            this.m_trueWidth = tw;
            this.redrawBg();
        }

        public getTrueWidth():number {
    //        return this.m_trueWidth;
            return 480;
        }

        public setTrueHeight(th:number) :void {
            this.m_trueHeight = th;
            this.redrawBg();
        }
        
        public getTrueHeight():number {
            return this.m_trueHeight;
        }
    }
}