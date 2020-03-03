module eyeangle2 {
	export class CHorverCheckPanel extends eui.Component {
		public constructor() {
			super();
		}

		private closeBtn:eui.Button;
        public caliSquare:eui.Image;

        public m_rippleCircle:egret.Bitmap;
        
        public m_squareTag:number=1;
        public m_squareChCntTotal:number=1; // 表示换图所需敲击次数。敲击多了该值会逐渐增大，换图逐渐变慢。
        public m_squareChCntLeft:number=1; // 剩余换图敲击次数。敲击一次该值减小1。减到 0 则换图并把该值置为换图最大次数。

		public childrenCreated():void {
			super.childrenCreated();

            this.caliSquare.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onSquareTap , this);
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtn , this);

            // 初始化正方形上的红圈动画：
            this.m_rippleCircle = new egret.Bitmap();
            this.m_rippleCircle.width = 20;
            this.m_rippleCircle.height = 20;
//            this.m_rippleCircle.anchorOffsetX = this.m_rippleCircle.width/2;
//            this.m_rippleCircle.$anchorOffsetY = this.m_rippleCircle.height/2;
/*            this.m_rippleCircle.x = 329;
            this.m_rippleCircle.y = 569;*/
            this.m_rippleCircle.x = this.caliSquare.x + this.caliSquare.width/2 - 10;
            this.m_rippleCircle.y = this.caliSquare.y + this.caliSquare.height/2 - 10;

            this.m_rippleCircle.texture = RES.getRes("rippleCircle_png");
            this.addChild(this.m_rippleCircle);
            //开启红圈动画效果:
            var tw = egret.Tween.get(this.m_rippleCircle , {loop:true});
            tw.to({x:this.caliSquare.x+5 , y:this.caliSquare.y+5 , width:150 , height:150 , alpha:0.4},200).to({alpha:0},100).wait(1500);
//            tw.to({x:264 , y:504 , width:150 , height:150 , alpha:0.4},200).to({alpha:0},100).wait(1500).to({x:329 , y:569 , width:20 , height:20});


		}

        public onSquareTap(evt:egret.TouchEvent):void {

            --this.m_squareChCntLeft;
            if(this.m_squareChCntLeft <= 0) //满足换图条件
            {
                this.m_squareTag = this.m_squareTag%3 + 1;
                var squNameStr:string;
                squNameStr = "square" + this.m_squareTag + "_png";
                this.caliSquare.source = squNameStr;

                if(this.m_squareTag <= 1 ) //图换了一圈
                {
                    ++this.m_squareChCntTotal;
                }
                this.m_squareChCntLeft = this.m_squareChCntTotal;
            }
        }

		private onCloseBtn():void {
			this.visible = false;
		}
	}
}