/**
 *
 * 显示最后一次目测得分的框。 
 *
 */
namespace eyeangle2 {
    export class CCmpAngleDlg extends eui.Component {
        public constructor() {
            super();
            
            this.m_flagsContainer = new egret.DisplayObjectContainer();
            this.m_flagsArr = new Array<egret.Bitmap>();
            var i:number;
            for(i=0;i<3;++i)
            {
                this.m_flagsArr[i] = new egret.Bitmap();
                this.m_flagsArr[i].width = 30;
                this.m_flagsArr[i].height = 40;
                this.m_flagsArr[i].x = 35*i;

                this.m_flagsArr[i].texture = RES.getRes("score_dot_png");

                this.m_flagsContainer.addChild(this.m_flagsArr[i]);
            }
        }

        private scoreFlags: eui.Group;
        private scoreValue: eui.Label;
        private m_flagsContainer:egret.DisplayObjectContainer;
        private m_flagsArr:Array<egret.Bitmap>;

        public childrenCreated(): void {
            this.scoreFlags.addChild(this.m_flagsContainer);

        }
        
        public setRank(r:number)
        {
            //0:No flag 1:1 flag 2:2 flags 3:3 flags ...
            var i:number;
            for(i=0;i<r;++i)
            {
                this.m_flagsArr[i].texture = RES.getRes("score_flag_png");
            }
            for(;i<3;++i)
            {
                this.m_flagsArr[i].texture = RES.getRes("score_cross_png");
            }

            if(r>0)
            {
                this.scoreValue.text = "+"+r+"0";
            }
            else
            {
                this.scoreValue.text = "+0";
            }
        }
    }
}