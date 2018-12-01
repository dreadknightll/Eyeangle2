/*
    “练习即将开始”跳动文字。
*/

namespace eyeangle2 {
    export class CStartingCharAni extends eui.Component {
        public textLabel:eui.Label;
        private m_str:string;
        private m_startX:number;
        private m_startY:number;
        private s_startX1:number = 20;
        private s_startX2:number = 15;
        private m_frameTag:number;
        private m_timer:egret.Timer;

        public constructor() {
            super();
            this.m_str = "练习即将开始";
            this.m_startX = this.s_startX1;
            this.m_startY = 5;
            this.m_frameTag = 0;
        }

        public childrenCreated():void {
            this.m_timer = new egret.Timer(300,-1);
            this.m_timer.addEventListener(egret.TimerEvent.TIMER , this.onNextCharStr, this);
            this.m_timer.start();
        }

        public onNextCharStr():void {
            ++this.m_frameTag;

            var dots:string = "" , fullStr:string = "";
            var i:number,j:number;
            for(i=0;i<this.m_frameTag;++i) {
                dots += ".";
            }
            fullStr = this.m_str + dots;
            this.textLabel.text = fullStr;

            switch(this.m_frameTag) {
                case 1:
                    this.m_startX = this.s_startX1;
                    break;
                case 2:
                    this.m_startX = this.s_startX1;
                    break;
                case 3:
                    this.m_startX = this.s_startX1;
                    break;
                case 4:
                    this.m_startX = this.s_startX1;
                    break;
                case 5:
                    this.m_startX = this.s_startX2;
                    break;
                case 6:
                    this.m_startX = this.s_startX2;
                    break;

            }

            this.textLabel.x = this.m_startX;
            this.m_frameTag %= 6;

        }
    }
}