var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var eyeangle2;
(function (eyeangle2) {
    var CUserProPanel = (function (_super) {
        __extends(CUserProPanel, _super);
        function CUserProPanel() {
            var _this = _super.call(this) || this;
            /*
                    private s_PriText = "\n\
                            只需要使用修改当前设置权限让内容正确显示（修改分辨率、语言、字体等）。\n\
                            不需要其它权限，如：完全的互联网访问、存储、读取本机识别码、通讯录访问、读取位置信息等。如有申请，禁止即可。\n\
                            建议在权限管理中禁用除修改当前设置外的所有权限。\n\
                            本app不会向用户索取私人信息。";
            */
            _this.s_PriText = "\n\
宜英尺眼通、角眼通app用户协议（2020-02-11）\n\
\n\
一、序：\n\
    1.1、不同意本协议者将不允许使用宜英提供的相关服务。对于不同意本协议且以协议所述方式侵犯宜英及合作厂商合法权益者，宜英也保留追究其法律责任的权利。\n\
\n\
    1.2、您理解并同意，故意逼迫、唆使、误导他人违规者也列入违规用户。\n\
\n\
    1.3、您理解并同意，对于违反本协议，或经合理判断认为违反本协议的用户，宜英有权对其账号进行封停、限制等处理，且有权公开披露其身份信息以及违规的具体情况并进行必要的说明。您理解并同意，披露的截图若难免含有侵权、泄密等不良信息，后果由您自行承担，且宜英有权把您作态度恶劣论处。\n\
        公开披露的同时我们会通过您提供的联系方式（如有）进行通知，或尝试通过他人转告。对披露结果有异议者可于5个月内与我们沟通解决。\n\
\n\
    1.4、您理解并同意，对于可能违反本协议或可能侵犯供应链厂商合法权益、扰乱公公秩序的情况，宜英有权向您展开调查。若调查受阻（包括但不限于沟通受阻、无回应、不以真实情况回答），情节严重者可列入违规用户名单并公开披露。\n\
\n\
    1.5、您充分理解并同意，违规行为为第三方逼迫、唆使、误导引起，但不能提供充分证据证明是第三方所为的情况，宜英将把您作违规者论处。\n\
\n\
    1.6、本协议内容会有后续变更。宜英会在协议里注明最后更新时间。您理解并同意，对于协议更新造成的纠纷，我们只根据情节和自身能力给与适当的帮助和补偿。不同意新协议内容者建议以邮件或QQ形式向我们报告，以减少因违规处罚造成的损失。\n\
\n\
    1.7、争议解决：争议发生时应当先友好协商。协商未能达成共识则可通过监管平台、监管部门、法律途径解决。宜英工作室愿意接受国家相关部门的监管、整改、关闭以及履行法定义务、承担因违法违规带来的责任。\n\
\n\
\n\
二、服务性质与责任的承担：\n\
    2.1、您理解并同意，用户无需支付费用便允许使用本app，但因使用本app造成的后果由用户自行承担，宜英工作室及供应链厂商（包括但不限于运行库提供商、素材供应商）、劳务提供商均不承担赔偿等责任。\n\
\n\
    2.2、品牌标识的有关说明：\n\
    “宜英”目前为个人工作室品牌。非宜英成员不得把宜英标志、app图标等用于敏感用途，包括但不限于产品标识、用户图标、论坛签名。不得冒充宜英工作室进行产品发布、消息发布、用户召集等活动。\n\
\n\
    2.3、您理解并同意，宜英app为公众提供的服务主要为非排他服务。用户不得以己方竞业要求为由阻碍宜英向竞争对手宣传和提供通用服务。须出具带有宜英签章的书面开发协议方可认定为专属定制服务。\n\
        违反以上规定的用户应当向宜英赔偿正规渠道推广费用的10倍（下文称“服务限制赔偿金”）。造成其它损害，包括但不限于名誉权、人身财产权者，应当根据法律规定向宜英承担额外的法律责任。服务限制赔偿金不包含名誉权、人身财产权等方面的赔偿，也不能减免其它责任。若服务限制行为同时侵犯了竞争对手的合法权益，则应同时向竞争对手和宜英足额承担各自的法律责任。\n\
\n\
三、知识产权：\n\
    3.1、app的使用许可：\n\
        本程序使用许可为MIT许可。关于MIT协议的详细说明见MIT协议官方网站。\n\
\n\
    3.2、著作权归属：\n\
        根据国际上的规定，本app著作权归核心技术提供方北京白鹭时代信息技术有限公司（简称白鹭科技）所有。而在中国，因发布推广的需要，内容创作方宜英工作室为著作权证书持有者。\n\
        侵犯著作权通常会同时侵犯白鹭科技和宜英工作室的合法权益。白鹭科技和宜英工作室均保留追究法律责任的权利。\n\
\n\
    3.3、第三方素材的有关协议：\n\
        宜英app会使用一些第三方提供的素材，如图片、音乐。\n\
        用户擅自使用这些素材作敏感用途，包括但不限于商业视频、用于自己的产品或Logo，均很有可能侵犯第三方的知识产权。\n\
        您理解并同意，对此侵权责任由用户自行承担。且宜英工作室因协助第三方调查、取证对您造成的损失不予以赔偿。\n\
\n\
    3.4、二次开发的有关协议：\n\
        （1）二次开发者发布时须在遵守MIT协议的基础上把app图标更换成自家图标，以示与原版app的区别。app内容有改动的，也要在遵守MIT协议的基础上去除相关部分的宜英标识，以区别于原版app。\n\
        （2）二次开发者不得侵犯程序项目中框架引擎、开发库、素材提供者等的知识产权。\n\
        注：本app代码中（例如：main. ts）包含白鹭科技的版权声明。二次开发者须充分理解并遵守该BSD协议，避免侵权。该版权声明的最终解释权归白鹭科技所有。\n\
\n\
";
            return _this;
        }
        CUserProPanel.prototype.childrenCreated = function () {
            this.contentLabel.$setText(this.s_PriText);
            this.resetTextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onResetTextBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
        };
        CUserProPanel.prototype.onResetTextBtn = function () {
            this.contentLabel.$setText(this.s_PriText);
        };
        CUserProPanel.prototype.onCloseBtnTap = function (e) {
            this.contentLabel.$setText(this.s_PriText);
            this.visible = false;
        };
        return CUserProPanel;
    }(eui.Component));
    eyeangle2.CUserProPanel = CUserProPanel;
    __reflect(CUserProPanel.prototype, "eyeangle2.CUserProPanel");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CUserProPanel.js.map