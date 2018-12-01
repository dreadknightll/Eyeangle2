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
 * 用户角度输入器控件。让用户输入角度。
 * 外观设计见 /skins/components/angleInputterSkin.exml 。
 * 用户体验已经过高度优化，操作友好。输入方式：1、单击输入； 2、拖动拉线圈输入。
 *
 */
var eyeangle2;
(function (eyeangle2) {
    var CAngleInputter = (function (_super) {
        __extends(CAngleInputter, _super);
        function CAngleInputter() {
            var _this = _super.call(this) || this;
            _this.m_locked = false; // 锁定标记。为 true 则代表控件已锁定不允许进行输入。
            _this.m_inpAvailable = false; // 输入值有效标记。若为 false 则代表用户尚未输入有效角度值。
            _this.m2_moving = false; // 拖动标记。如果为 true 则表示拉线圈处于拖动状态。
            _this.m_angle = 0.0; // 当前输入的角度。
            _this.m2_lastAngle = 0.0; // 上一有效角度。若本次输入无效，则当前角度回滚到该变量值。
            /*
            * 临时角度。在输入的过程中临时显示在界面上的角度。若不产生有效输入，该变量就不会影响最终提交的角度值。
            */
            _this.m2_angleOnShow = 0.0;
            _this.m_angleCanvas = new egret.Shape();
            _this.m_canvasMask = new egret.Rectangle();
            _this.m_tchEvt = new CAngleInputterEvent(CAngleInputterEvent.EVT_DI_TOUCHSTART);
            _this.m_tchEndEvt = new CAngleInputterEvent(CAngleInputterEvent.EVT_DI_TOUCHEND);
            _this.m_renderFilter = new CNoChangeRenderFilter();
            return _this;
        }
        /*
        * 开始触摸触发事件。
        */
        CAngleInputter.prototype.onTouchBegin = function (evt) {
            if (this.m_locked)
                return;
            this.m2_moving = true;
            var evtX, evtY;
            evtX = evt.localX;
            evtY = evt.localY;
            var tmpPt = new gdeint.CPoint();
            tmpPt.m_x = evtX;
            tmpPt.m_y = evtY;
            this.m2_angleOnShow = getAngleBetweenPoints0(this.m_vertex, tmpPt); // 根据顶点和触点计算角度。
            if (this.m2_angleOnShow < 0) {
                this.m2_angleOnShow += 180;
            }
            this.toucher.visible = true;
            this.toucher.x = evt.localX - this.toucher.width / 2;
            this.toucher.y = evt.localY - this.toucher.height / 2;
            this.drawBaseEdge();
            if (evtY < this.m_vertex.m_y) {
                this.m_angleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
                this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
                this.m_angleCanvas.graphics.lineTo(evt.localX, evt.localY);
                this.toucher.source = "AngleInputterToucher_png";
            }
            else {
                this.toucher.source = "AngleInputterToucher_futiled_png";
            }
            this.dispatchEvent(this.m_tchEvt);
        };
        /*
        * 触摸拖动触发事件（拉线环外拖动）。
        * 注：要同时实现拉线环外拖动和拉线环上拖动的事件处理才能带来良好的用户体验。
        */
        CAngleInputter.prototype.onTouchMove = function (evt) {
            if (this.m_locked)
                return;
            if (!this.m2_moving) {
                return;
            }
            var evtX, evtY;
            evtX = evt.localX;
            evtY = evt.localY;
            var tmpPt = new gdeint.CPoint();
            tmpPt.m_x = evtX;
            tmpPt.m_y = evtY;
            this.m2_angleOnShow = getAngleBetweenPoints0(this.m_vertex, tmpPt);
            if (this.m2_angleOnShow < 0) {
                this.m2_angleOnShow += 180;
            }
            this.toucher.x = evtX - this.toucher.width / 2;
            this.toucher.y = evtY - this.toucher.height / 2;
            this.drawBaseEdge();
            if (evtY < this.m_vertex.m_y) {
                this.m_angleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
                this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
                this.m_angleCanvas.graphics.lineTo(evtX, evtY);
                this.toucher.source = "AngleInputterToucher_png";
            }
            else {
                this.toucher.source = "AngleInputterToucher_futiled_png";
            }
        };
        /*
        * 触摸拖动触发事件（拉线环上拖动）
        */
        CAngleInputter.prototype.onToucherTouchMove = function (evt) {
            if (this.m_locked)
                return;
            if (!this.m2_moving)
                return;
            var evtX, evtY;
            evtX = evt.localX + this.toucher.x;
            evtY = evt.localY + this.toucher.y;
            this.toucher.x = evtX - this.toucher.width / 2;
            this.toucher.y = evtY - this.toucher.height / 2;
            this.drawBaseEdge();
            if (evtY < this.m_vertex.m_y) {
                this.m_angleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
                this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
                this.m_angleCanvas.graphics.lineTo(evtX, evtY);
                this.toucher.source = "AngleInputterToucher_png";
            }
            else {
                this.toucher.source = "AngleInputterToucher_futiled_png";
            }
        };
        /*
        * 拖动结束触发事件。
        */
        CAngleInputter.prototype.onTouchEnd = function (evt) {
            if (this.m_locked)
                return;
            this.m2_moving = false;
            var evtX = evt.localX;
            var evtY = evt.localY;
            if (evt.target == this.toucher) {
                evtX += this.toucher.x;
                evtY += this.toucher.y;
            }
            if (evt.target == this || evt.target == this.toucher) {
                this.toucher.visible = false;
                if (evtY < this.m_vertex.m_y) {
                    var tmpPt = new gdeint.CPoint();
                    tmpPt.m_x = evtX;
                    tmpPt.m_y = evtY;
                    this.m2_angleOnShow = getAngleBetweenPoints0(this.m_vertex, tmpPt);
                    if (this.m2_angleOnShow < 0) {
                        this.m2_angleOnShow += 180;
                    }
                    this.m_angle = this.m2_angleOnShow;
                    this.m2_lastAngle = this.m_angle;
                    this.m_inpAvailable = true;
                    this.toucher.source = "AngleInputterToucher_png";
                }
                else {
                    this.setAngle(this.m2_lastAngle);
                    this.toucher.source = "AngleInputterToucher_futiled_png";
                }
                this.dispatchEvent(this.m_tchEndEvt);
            }
        };
        /*
        * 画角的起始边（水平，X轴正半轴）。
        */
        CAngleInputter.prototype.drawBaseEdge = function () {
            this.m_angleCanvas.graphics.clear();
            this.m_angleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
            this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
            this.m_angleCanvas.graphics.lineTo(this.width, this.m_vertex.m_y);
        };
        CAngleInputter.prototype.childrenCreated = function () {
            this.m_canvasMask.x = 0;
            this.m_canvasMask.y = 0;
            this.m_canvasMask.width = this.width;
            this.m_canvasMask.height = this.height;
            this.m_angleCanvas.mask = this.m_canvasMask;
            this.m_vertex = new gdeint.CPoint();
            this.m_vertex.m_x = this.width / 2;
            this.m_vertex.m_y = this.height / 2 + 40;
            this.drawBaseEdge();
            this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.bg.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
            this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEnd, this);
            this.angleCanvasGrp.addChild(this.m_angleCanvas); //Problem occur with this line!!!
            this.angleCanvasGrp.visible = true;
            this.angleCanvasGrp.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.angleCanvasGrp.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
            this.toucher.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onToucherTouchMove, this);
        };
        CAngleInputter.prototype.getAngle = function () {
            return this.m_angle;
        };
        CAngleInputter.prototype.setAngle = function (d) {
            this.m2_lastAngle = d;
            this.m2_angleOnShow = d;
            this.m_angle = d;
            this.drawBaseEdge();
            var edgeLen = 100;
            var edgePt;
            edgePt = new gdeint.CPoint();
            edgePt.m_x = this.m_vertex.m_x + edgeLen * Math.cos(d * Math.PI / 180);
            edgePt.m_y = this.m_vertex.m_y - edgeLen * Math.sin(d * Math.PI / 180);
            this.m_angleCanvas.graphics.lineStyle(5, 0x000000, 0.9);
            this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
            this.m_angleCanvas.graphics.lineTo(edgePt.m_x, edgePt.m_y);
        };
        /*
        * 画正确角度。颜色有别于用户输入的角度。两个角度均显示出来便于用户查看自己的目测准确度。
        */
        CAngleInputter.prototype.setCorreAngle = function (d) {
            var edgeLen = 100;
            var edgePt;
            edgePt = new gdeint.CPoint();
            edgePt.m_x = this.m_vertex.m_x + edgeLen * Math.cos(d * Math.PI / 180);
            edgePt.m_y = this.m_vertex.m_y - edgeLen * Math.sin(d * Math.PI / 180);
            this.m_angleCanvas.graphics.lineStyle(5, 0xFF0000, 0.9);
            this.m_angleCanvas.graphics.moveTo(this.m_vertex.m_x, this.m_vertex.m_y);
            this.m_angleCanvas.graphics.lineTo(edgePt.m_x, edgePt.m_y);
        };
        CAngleInputter.prototype.clearAngle = function () {
            this.m_inpAvailable = false;
            this.setAngle(0);
        };
        /*
        * 判断当前是否有有效的角度输入值。
        */
        CAngleInputter.prototype.inpAvailable = function () {
            return this.m_inpAvailable;
        };
        /*
        * 锁定控件不允许用户进行输入。
        */
        CAngleInputter.prototype.lock = function () {
            this.m_locked = true;
        };
        CAngleInputter.prototype.unlock = function () {
            this.m_locked = false;
        };
        return CAngleInputter;
    }(eui.Component));
    eyeangle2.CAngleInputter = CAngleInputter;
    __reflect(CAngleInputter.prototype, "eyeangle2.CAngleInputter");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CAngleInputter.js.map