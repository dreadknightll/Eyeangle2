/**************************************************
 * /src/components/UIComponents/common/CCopyrightPanel.ts
 * 
 * 版权声明显示框。显示白鹭引擎的版权声明。
 *
**************************************************/

	namespace eyeangle2 {
		export class CCopyrightPanel_V2 extends eui.Component {
			public constructor() {
				super();

/*
	测试滚动效果用：
				var i;
				for(i=0;i<6;++i) {
					this.s_cpText += "fwefwefsdafdf\n";
					this.s_cpText += "6fgfsdf234234234wser234234\n";
					this.s_cpText += "f4ddfsaf23433234wfsdfsdf\n";
				}*/ 
			}

			public childrenCreated():void {

				this.content.textColor = 0x000000;
				this.content.size= 18;

				this.content.text = this.s_cpText;

				this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onCloseBtnTap , this);

				this.arrowUp.touchEnabled = true;
				this.arrowDown.touchEnabled = true;
				this.arrowUp.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onUpArrowTap , this);
				this.arrowDown.addEventListener(egret.TouchEvent.TOUCH_TAP , this.onDownArrowTap , this);

			}

			private onUpArrowTap(e:egret.TouchEvent):void {

				if(this.contentScroller.viewport.scrollV - 100 < 0) {
					this.contentScroller.viewport.scrollV = 0;
				}
				else {
					this.contentScroller.viewport.scrollV -= 100;
				}

			}

			private onDownArrowTap(e:egret.TouchEvent):void {


				if(this.contentScroller.viewport.scrollV + 100 > 400) {
					this.contentScroller.viewport.scrollV = 400;
				}
				else {
					this.contentScroller.viewport.scrollV += 100;
				}
			}

			private onCloseBtnTap(e:egret.TouchEvent):void {

				this.visible = false;

//				this.content.y = 141;
				this.contentScroller.viewport.scrollV = 0;

			}

			public title:eui.Label;
			public content:eui.Label;
			public contentScroller:eui.Scroller;
			public closeBtn:eui.Button;
			public arrowUp:eui.Image;
			public arrowDown:eui.Image;

			public s_cpText:string = "\n    Copyright (C) 2019-present, 梁力，MIT许可。\n\
				注：部分运行库和素材为第三方版权所有，擅自提取使用可能造成侵权！\n\
				白鹭引擎版权声明在白鹭科技官网上的有关产品可找到。";

/*			public s_cpText:string = "//////////////////////////////////////////////////////////////////////////////////////\n\
		//\n\
		//  Copyright (c) 2014-present, Egret Technology.\n\
		//  All rights reserved.\n\
		//  Redistribution and use in source and binary forms, with or without\n\
		//  modification, are permitted provided that the following conditions are met:\n\
		//\n\
		//     * Redistributions of source code must retain the above copyright\n\
		//       notice, this list of conditions and the following disclaimer.\n\
		//     * Redistributions in binary form must reproduce the above copyright\n\
		//       notice, this list of conditions and the following disclaimer in the\n\
		//       documentation and/or other materials provided with the distribution.\n\
		//     * Neither the name of the Egret nor the\n\
		//       names of its contributors may be used to endorse or promote products\n\
		//       derived from this software without specific prior written permission.\n\
		//\n\
		//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS \"AS IS\" AND ANY EXPRESS\n\
		//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES\n\
		//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.\n\
		//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,\n\
		//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n\
		//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,\n\
		//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF\n\
		//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING\n\
		//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,\n\
		//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n\
		//\n\
		//////////////////////////////////////////////////////////////////////////////////////";*/
		}
	}