var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * 练习场景中部区域。
 *
 */
var CMidArea = (function (_super) {
    __extends(CMidArea, _super);
    function CMidArea() {
        _super.call(this);
        this.m_trueWidth = 0;
        this.m_trueHeight = 0;
        this.m2_isImgMoving = false;
        this.s_horSpace = 80;
        this.s_verSpace = 80;
        this.m_bg = new egret.Shape();
        this.m_midCanvas = new egret.Shape();
        this.m2_imgTchStartPoint = new CPoint();
        this.m2_imgStartPoint = new CPoint();
        this.m_evtImgDragEnd = new CMidAreaEvent(CMidAreaEvent.EVT_IMG_DRAGEND);
    }
    CMidArea.prototype.childrenCreated = function () {
        this.midBgGrp.addChild(this.m_bg);
        this.midCanvasGrp.addChild(this.m_midCanvas);
        this.img.touchEnabled = true;
        this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.img.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
    };
    CMidArea.prototype.redrawBg = function () {
        this.m_bg.width = this.m_trueWidth;
        this.m_bg.height = this.m_trueHeight;
        this.m_bg.graphics.clear();
        this.m_bg.graphics.beginFill(0x999999);
        this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
        this.m_bg.graphics.endFill();
    };
    CMidArea.prototype.touchBegin = function (evt) {
        this.m2_imgTchStartPoint.m_x = evt.stageX;
        this.m2_imgTchStartPoint.m_y = evt.stageY;
        this.m2_imgStartPoint.m_x = this.midContentGroup.x;
        this.m2_imgStartPoint.m_y = this.midContentGroup.y;
        this.m2_isImgMoving = true;
    };
    CMidArea.prototype.touchMove = function (evt) {
        if (this.m2_isImgMoving) {
            if (evt.target == this.img) {
                var dx, dy, newX, newY;
                dx = evt.stageX - this.m2_imgTchStartPoint.m_x;
                dy = evt.stageY - this.m2_imgTchStartPoint.m_y;
                newX = this.m2_imgStartPoint.m_x + dx;
                newY = this.m2_imgStartPoint.m_y + dy;
                if (newX > this.s_horSpace) {
                    newX = this.s_horSpace;
                }
                if (newX < -(this.img.width + this.s_horSpace - this.getTrueWidth())) {
                    newX = -(this.img.width + this.s_horSpace - this.getTrueWidth());
                }
                if (newY > this.s_verSpace) {
                    newY = this.s_verSpace;
                }
                if (newY < -(this.img.height + this.s_verSpace - this.getTrueHeight())) {
                    newY = -(this.img.height + this.s_verSpace - this.getTrueHeight());
                }
                this.midContentGroup.x = newX;
                this.midContentGroup.y = newY;
                var pt;
                pt = new CPoint();
                pt.m_x = -this.midContentGroup.x;
                pt.m_y = -this.midContentGroup.y;
                g_praScene.m_UIPresenter.setImgSelPt(pt);
                this.dispatchEvent(this.m_evtImgDragEnd); // No parmameter passed. Calculate inside this func!!
            }
        }
        else {
        }
    };
    CMidArea.prototype.touchEnd = function (evt) {
        this.m2_isImgMoving = false;
        this.dispatchEvent(this.m_evtImgDragEnd);
    };
    CMidArea.prototype.setTrueWidth = function (tw) {
        this.m_trueWidth = tw;
        this.redrawBg();
    };
    CMidArea.prototype.getTrueWidth = function () {
        return this.m_trueWidth;
    };
    CMidArea.prototype.setTrueHeight = function (th) {
        this.m_trueHeight = th;
        this.redrawBg();
    };
    CMidArea.prototype.getTrueHeight = function () {
        return this.m_trueHeight;
    };
    return CMidArea;
}(eui.Component));
