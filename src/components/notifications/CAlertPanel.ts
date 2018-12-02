/**
 *
 * 功能等于 window.alert 。 
 *
 */
namespace eyeangle2 {
    export class CAlertPanel extends eui.Panel implements IAlertDlg,IContainerPlugin {
        public constructor() {
            super();
            this.visible = false;
            this.x = 0;
            this.y = 0;
        }

        public setParent(p:INotiParent) {
            this.m_parent = p;
        }

        public getParent():INotiParent {
            return this.m_parent;
        }

        public setCloseListener(func:Function):void {
            this.m_closeListener = func;
        }

        public setContent(con:string):void {
            this.cc_content = con;
            if(this.m_cc) {
                this.content.text = this.cc_content;
            }
        }

        public showDlg():void {
            this.getParent().getNotiLayer().addChild(this);
            this.getParent().getNotiLayer().visible = true;
            this.visible = true;
            this.getParent().disableForNoti();
        }

        public setSceneRect(x:number , y:number , wid:number , hei:number):void 
        {
            //设置父场景大小和坐标偏移量，以便确定本框的显示位置。
            this.x = x + (wid-300)/2;
            this.y = y + (hei-300)/5*2;
        }

        public _setParentContainer(pc:IUIContainer):void {
            this.m_parentContainer = pc;
        }

        public _getParentContainer(): IUIContainer {
            window.alert("Don't use _getParentContainer() here. Use getParent() instead.");
            return this.m_parentContainer;
        }

        private m_parent:INotiParent;
        private m_parentContainer:IUIContainer;
        private m_closeListener:Function;

        content:eui.Label;
        closeBtn:eui.Button;
        private cc_content:string;
        private m_cc:boolean = false;

        public childrenCreated():void {
            this.m_cc = true;
            this.content.text = this.cc_content;
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtn , this);
        }

        private onCloseBtn(evt:egret.TouchEvent): void {
            this.visible = false;
            this.getParent().getNotiLayer().visible = false;
            this.getParent().applyFunc(this.m_closeListener,null);
            this.getParent().resumeAfterNoti();
        }

        public show():void {
            this.visible = true;
        }

        public hide():void {
            this.visible = false;
        }

        public isVisible():boolean {
            return this.visible;
        }
    }
}