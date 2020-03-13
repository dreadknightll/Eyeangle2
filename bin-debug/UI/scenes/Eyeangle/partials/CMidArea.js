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
 * 练习场景中部区域。
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CMidArea = (function (_super) {
        __extends(CMidArea, _super);
        function CMidArea() {
            var _this = _super.call(this) || this;
            _this.m_trueWidth = 0;
            _this.m_trueHeight = 0;
            _this.m2_isImgMoving = false;
            _this.s_horSpace = 80;
            _this.s_verSpace = 80;
            _this.m_bg = new egret.Shape();
            //            this.m_midCanvasOld = new egret.Shape();
            _this.m_midAngleCanvas = new egret.Shape();
            _this.m2_imgTchStartPoint = new gdeint.CPoint();
            _this.m2_imgStartPoint = new gdeint.CPoint();
            _this.m_evtImgDragEnd = new CMidAreaEvent(CMidAreaEvent.EVT_IMG_DRAGEND);
            return _this;
        }
        CMidArea.prototype.childrenCreated = function () {
            //        this.maxWidth = 480; Not work.
            var rect = new egret.Rectangle();
            rect.x = 0;
            rect.y = 0;
            rect.width = 480;
            rect.height = 2000;
            this.mask = rect;
            this.midBgGrp.addChild(this.m_bg);
            //            this.midCanvasGrp.addChild(this.m_midCanvasOld);
            this.midCanvasGrp.addChild(this.m_midAngleCanvas);
            this.img.touchEnabled = true;
            this.img.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
            this.img.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
            this.img.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        };
        CMidArea.prototype.redrawBg = function () {
            this.m_bg.width = this.getTrueWidth();
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
                    if (this.img.height < this.getTrueHeight()) {
                        newY = (this.getTrueHeight() - this.img.height) / 2;
                    }
                    else {
                        if (newY > this.s_verSpace) {
                            newY = this.s_verSpace;
                        }
                        if (newY < -(this.img.height + this.s_verSpace - this.getTrueHeight())) {
                            newY = -(this.img.height + this.s_verSpace - this.getTrueHeight());
                        }
                    }
                    this.midContentGroup.x = newX;
                    this.midContentGroup.y = newY;
                    var pt;
                    pt = new gdeint.CPoint();
                    pt.m_x = -this.midContentGroup.x;
                    pt.m_y = -this.midContentGroup.y;
                    g_praScene.m_UIPresenter.inpImgSelPt(pt);
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
            //        return this.m_trueWidth;
            return 480;
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
    eyeangle2.CMidArea = CMidArea;
    __reflect(CMidArea.prototype, "eyeangle2.CMidArea");
})(eyeangle2 || (eyeangle2 = {}));
