/**
 *
 * 练习场景底部区域。
 *
 */
namespace eyeangle2 {
	export class CBottomArea extends eui.Component {
		public constructor() {
			super();
			this.m_bg = new egret.Shape();
		}

		private bgGrp:eui.Group;
		public angleInputter:eyeangle2.CAngleInputter;
		public nextBtn:eui.Button;
		public OKBtn:eui.Button;
		public backBtn:eui.Button;
		public caliBtn:eui.Button;
		public m_bg:egret.Shape;

		public childrenCreated(): void {
			this.m_bg.graphics.beginFill(0x447700);
			this.m_bg.graphics.drawRect(0,0,this.width,this.height);
			this.m_bg.graphics.endFill();
			
			this.bgGrp.addChild(this.m_bg);
		}
	}
}