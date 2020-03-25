module gdeint {
	export class CShutdownClock extends eui.Component{

		private timeLabel:eui.Label;

		public constructor() {
			super();
			this.m2_cc = false;
			this.m2_cc = 94;
		}

		private m_timerPointer:egret.Timer;
		private m_tracerTimer:egret.Timer; // 用于刷新时间显示的Timer。

		private m2_cc;
		private m2_fontSize = 24;


		public childrenCreated() {
			this.m2_cc = true;
			this.timeLabel.size=this.m2_fontSize;

			this.m_tracerTimer = new egret.Timer(200 , 0);
			this.m_tracerTimer.addEventListener(egret.TimerEvent.TIMER , this.onTracerTimer , this);
		}

		public setFontSize(fs:number) {
			this.m2_fontSize = fs;
			if(this.m2_cc) {
				this.timeLabel.size=this.m2_fontSize;

			}
		}

		public onTracerTimer() {
			this.timeLabel.text = gdeint.seconds2MinSec(1200 - this.m_timerPointer.currentCount);
		}

/*		public setTimer(msCnt:number , listener:Function) {
			var timer:egret.Timer;
			timer = new egret.Timer(msCnt , 1);
			timer.addEventListener(egret.TimerEvent.TIMER,listener,this);
			timer.start();
		}*/
		public setTimer(timer:egret.Timer) {
			this.m_timerPointer = timer;
			this.m_tracerTimer.start();
		}
	}
}
