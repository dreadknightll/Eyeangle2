namespace eyeangle2 {
	export class CThumbUI extends eui.Component {
		private thumb:eui.Image;
		private thumbSel:eui.Image;

		public midLayerGrp:eui.Group;
		public thumbQuestioner:eui.Label;

		private thumbCover:eui.Rect;

		private m_thumbTapEvt:CThumbUIEvent;

		public constructor() {
			super();
			this.m_thumbTapEvt = new CThumbUIEvent(CThumbUIEvent.EVT_THUMB_TAP);
		}

		public childrenCreated(): void {
			this.thumbCover.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onThumbTap , this)
		}

		public setThumbWidth(w:number) {
			this.thumb.width = w;
			this.thumbSel.width = w;
			this.thumbCover.width = w;
		}

		public getThumbWidth():number {
			return this.thumb.width;
		}

		public setThumbHeight(h:number) {
			this.thumb.height = h;
			this.thumbSel.height = h;
			this.thumbCover.height = h;
		}

		public getThumbHeight():number {
			return this.thumb.height;
		}

		public setImgSrc(s:string) {
			this.thumb.source = s;
		}

		public setSelRect(r:gdeint.CRect) {
			this.thumbSel.x = r.m_left;
			this.thumbSel.y = r.m_top;
			this.thumbSel.width = r.m_width;
			this.thumbSel.height = r.m_height;
		}

		private onThumbTap(evt:egret.TouchEvent) {
			this.thumbSel.x = evt.localX - this.thumbSel.width / 2;
			this.thumbSel.y = evt.localY - this.thumbSel.height / 2;

			this.m_thumbTapEvt.m_tchX = evt.localX;
			this.m_thumbTapEvt.m_tchY = evt.localY;
		
			this.dispatchEvent(this.m_thumbTapEvt);
		}
	}
}