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
    var CHorverCheckPanel = (function (_super) {
        __extends(CHorverCheckPanel, _super);
        function CHorverCheckPanel() {
            var _this = _super.call(this) || this;
            _this.m_squareTag = 1;
            _this.m_squareChCntTotal = 1; // 表示换图所需敲击次数。敲击多了该值会逐渐增大，换图逐渐变慢。
            _this.m_squareChCntLeft = 1; // 剩余换图敲击次数。敲击一次该值减小1。减到 0 则换图并把该值置为换图最大次数。
            return _this;
        }
        CHorverCheckPanel.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.caliSquare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSquareTap, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
            // 初始化正方形上的红圈动画：
            this.m_rippleCircle = new egret.Bitmap();
            this.m_rippleCircle.width = 20;
            this.m_rippleCircle.height = 20;
            //            this.m_rippleCircle.anchorOffsetX = this.m_rippleCircle.width/2;
            //            this.m_rippleCircle.$anchorOffsetY = this.m_rippleCircle.height/2;
            /*            this.m_rippleCircle.x = 329;
                        this.m_rippleCircle.y = 569;*/
            this.m_rippleCircle.x = this.caliSquare.x + this.caliSquare.width / 2 - 10;
            this.m_rippleCircle.y = this.caliSquare.y + this.caliSquare.height / 2 - 10;
            this.m_rippleCircle.texture = RES.getRes("rippleCircle_png");
            this.addChild(this.m_rippleCircle);
            //开启红圈动画效果:
            var tw = egret.Tween.get(this.m_rippleCircle, { loop: true });
            tw.to({ x: this.caliSquare.x + 5, y: this.caliSquare.y + 5, width: 150, height: 150, alpha: 0.4 }, 200).to({ alpha: 0 }, 100).wait(1500);
            //            tw.to({x:264 , y:504 , width:150 , height:150 , alpha:0.4},200).to({alpha:0},100).wait(1500).to({x:329 , y:569 , width:20 , height:20});
        };
        CHorverCheckPanel.prototype.onSquareTap = function (evt) {
            --this.m_squareChCntLeft;
            if (this.m_squareChCntLeft <= 0) {
                this.m_squareTag = this.m_squareTag % 3 + 1;
                var squNameStr;
                squNameStr = "square" + this.m_squareTag + "_png";
                this.caliSquare.source = squNameStr;
                if (this.m_squareTag <= 1) {
                    ++this.m_squareChCntTotal;
                }
                this.m_squareChCntLeft = this.m_squareChCntTotal;
            }
        };
        CHorverCheckPanel.prototype.onCloseBtn = function () {
            this.visible = false;
        };
        return CHorverCheckPanel;
    }(eui.Component));
    eyeangle2.CHorverCheckPanel = CHorverCheckPanel;
    __reflect(CHorverCheckPanel.prototype, "eyeangle2.CHorverCheckPanel");
})(eyeangle2 || (eyeangle2 = {}));
