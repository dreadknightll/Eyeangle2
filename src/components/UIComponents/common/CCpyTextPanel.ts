module eyeangle2 {
	export class CCpyTextPanel extends eui.Component{
		public constructor() {
			super();
			this.m2_cc = false;
		}

		private m_text:string; //要显示的文本。
		private txtArea:eui.EditableText;
		private resetTextBtn:eui.Button;
		private closeBtn:eui.Button;
		private m2_cc:boolean;

		public childrenCreated():void {
			super.childrenCreated();
			this.m2_cc = true;

			this.txtArea.$setText(this.m_text);

			this.resetTextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onResetTextBtn , this)
			this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtn , this);
			this.txtArea.addEventListener(eui.UIEvent.CHANGE , this.onResetTextBtn , this);
		}

		public setText(txt:string) {
			this.m_text = txt;
			if(this.m2_cc) {
				this.txtArea.$setText(this.m_text);
			}
		}

		private onResetTextBtn():void {
			this.txtArea.$setText(this.m_text);
		}

		private onCloseBtn():void {
			this.txtArea.$setText(this.m_text);
			this.visible = false;
		}
	}
}