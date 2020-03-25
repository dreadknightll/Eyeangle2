/****************************************************
 * /src/UI/scenes/CWelcomeScene_Eyeangle2.ts
 * 
 * 欢迎场景界面。
 *
 ****************************************************/

namespace eyeangle2 {
    export class CWelcomeScene_Eyeangle2_V2 extends eui.Component {
        public constructor() {
            super();
            this.m_cc = false;
            this.m2_tmpS2StartBtn = true;
        }
        
        private scrBgGrp:eui.Group;
        private updateGroup:eui.Group;
//        private urlText:eui.EditableText;
        private showCRBtn:eui.Image;
        private crPanel:eui.Panel;
        private userProPanel:CUserProPanel;
        private helpPanel:CHelpPanel;
        private priPoliPanel:CPrivacyPolicyPanel;
        private horverCheckPanel:CHorverCheckPanel;
        private userProRead:eui.CheckBox;
        private userProLabel:eui.Label;
        private priPoliRead:eui.CheckBox;
        private priPoliLabel:eui.Label;
        private horverChecked:eui.CheckBox;
        private horverLabel:eui.Label;

        public startBtn:eui.Button;
        private helpBtn:eui.Button;
        public localVer: eui.Label;
        public latestVer: eui.Label;

        private m_cc:boolean = false; //Children created boolean.
        private m2_tmpS2StartBtn = true; //Switched to StartBtn.

        public m_latestVerLoader:egret.URLLoader;
        private shutdownClock:gdeint.CShutDownClock;

        public switch2StartBtn():void {
            this.m2_tmpS2StartBtn = true;
            if(this.m_cc) {
                this.startBtn.visible = true;
            }
        }

        public childrenCreated():void
        {
/*
            if(S_BUILD_FOR == S_NATIVE_IOS || !S_CHECK_UPDATE_ANDROID) {
                this.updateGroup.visible = false;
            }
*/

/*
            //获取程序本地版本号和服务器上的最新版本号：
            var tmpJson = RES.getRes("localVer_json");
            g_localVer = tmpJson.curVer;
            this.localVer.text = g_localVer;

            this.m_latestVerLoader = new egret.URLLoader();
            this.m_latestVerLoader.dataFormat = egret.URLLoaderDataFormat.TEXT;
            this.m_latestVerLoader.addEventListener(egret.Event.COMPLETE,this.onLatestVerLoaded,this);

            var latestVerURL: string = "http://www.gdeint.cn/download/eyeangle/latestVer.json";

            if(S_BUILD_FOR!=S_NATIVE_IOS && S_CHECK_UPDATE_ANDROID) {
                RES.getResByUrl(latestVerURL,this.onLatestVerLoaded,this,RES.ResourceItem.TYPE_JSON);
            }
*/

/*            if(S_BUILD_FOR == S_NATIVE_IOS) {
                //对于iOS，需要调整按钮的位置。
                this.showCRBtn.x += 20;
                this.showCRBtn.y += 15;
            }*/

            if(this.m2_tmpS2StartBtn) {
                this.startBtn.visible = true;
            }

        //填写超链接文本流：
            //1、用户协议：
            this.userProLabel.text = "";
            this.userProLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已阅读并同意", style: {}
                },
                {
                    text:"《用户协议》", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                    text:" ", style: {} /*必须留有空格，否则发布 Native 版会出现显示问题。*/
                }
            );

            this.userProLabel.touchEnabled = true;
            this.userProLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.userProPanel.visible = true;

            }, this );

            //2、隐私政策：
            this.priPoliLabel.text = "";
            this.priPoliLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已阅读并同意", style: {}
                },
                {
                    text:"《隐私政策》", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                     text:" ", style: {} 
                }
            );

            this.priPoliLabel.touchEnabled = true;
            this.priPoliLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.priPoliPanel.visible = true;
            }, this );

            //3、横竖校准：
            this.horverLabel.textFlow= new Array<egret.ITextElement> (
                {
                    text:"我已认真进行", style: {}
                },
                {
                    text:"横竖检验", style: { "href" : "event:text event triggered" , "textColor":0x4444ff }
                },
                {
                     text:"并仔细阅读相\n关说明", style: {} 
                }
            );

            this.horverLabel.touchEnabled = true;
            this.horverLabel.addEventListener( egret.TextEvent.LINK, function( evt:egret.TextEvent ){
                this.horverCheckPanel.visible = true;
            }, this );


            this.showCRBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onShowCR , this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onStartPra , this);
            this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onHelp , this);


            this.userProRead.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);
            this.priPoliRead.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);
            this.horverChecked.addEventListener(eui.UIEvent.CHANGE , this.onReadyCBCheck , this);

            this.m_cc = true;
        }

        private onReadyCBCheck() {

            if(this.userProRead.selected && this.priPoliRead.selected && this.horverChecked.selected) {
                this.startBtn.enabled = true;
            }
            else {
                this.startBtn.enabled = false;
            }
        }

        private onLatestVerLoaded(e: any): void {
            var jsnTxt = e;
            this.latestVer.text = jsnTxt.curVer;
        }
        
        private onShowCR():void {
            this.crPanel.visible = true;
        }

        private onHelp():void {
            this.helpPanel.visible = true;
        }

        public onStartPra(evt:egret.TouchEvent):void {

    //        先显示翻页动画 （未完成）
            this.m2_tmpS2StartBtn = false;
            this.startBtn.visible = false;

            g_praContainer.startNewPra();
            g_praContainer.saveVisibleStates();

            g_pageJumper.gotoPage("PraScene",null);

        }
    }
}

