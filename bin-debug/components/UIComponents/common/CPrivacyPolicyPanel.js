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
    var CPrivacyPolicyPanel = (function (_super) {
        __extends(CPrivacyPolicyPanel, _super);
        function CPrivacyPolicyPanel() {
            var _this = _super.call(this) || this;
            /*		private s_PriText = "\n\
                            只需要使用修改当前设置权限让内容正确显示（修改分辨率、语言、字体等）。\n\
                            不需要其它权限，如：完全的互联网访问、存储、读取本机识别码、通讯录访问、读取位置信息等。如有申请，禁止即可。\n\
                            建议在权限管理中禁用除修改当前设置外的所有权限。\n\
                            本app不会向用户索取私人信息。";
            */
            _this.s_PriText = "\n\
宜英app隐私政策（2020-03-01）\n\
\n\
  本文的主要目的是和您约定我们收集哪些信息、如何收集和使用这些信息，及我们采取的信息安全措施和承诺等。我们深知用户信息保护的重要性，特此制定本政策。\n\
\n\
一、名词解释：\n\
        本政策中“个人信息”、“个人敏感信息”的定义见GB/T35273-2017。\n\
\n\
二、我们收集哪些信息：\n\
    1、我们会在征得用户同意的前提下，收集用户昵称、联系方式（主要是QQ、email，也包括电话号码）。用于必要的以及用户协议规定的沟通。收集方式是为客户提供客服QQ、邮箱地址、信息反馈页面等，用户联系时便能收集到这些信息。\n\
    2、我们可能会在征得同意的前提下收集用户的操作轨迹、设备型号、使用的其它app及服务等用于产品的改进。\n\
    3、我们会借助第三方服务实现一些功能，如：通过百度网盘提供一些大文件的下载。会收集到用户在这些第三方厂商的账号信息。\n\
\n\
三、我们如何存储这些信息：\n\
    1、我们不会把用户的个人信息提供给他人，以下情况除外：\n\
        （1）用户已违规，按用户协议宜英可公开披露其有关信息。\n\
        （2）用户的行为损害了宜英的合法权利或扰乱了正常秩序，需要举报或把有关的用户信息交公安机关、司法机构处理。\n\
        （3）用户使用的某些服务需要使用用户的个人信息，我们会在征得用户同意的前提下向第三方提供必要的用户个人信息。此情况下获取的用户个人信息不作他用。\n\
        （4）因程序运行需要，我们会把个人信息存储到其它厂商提供的服务器，并使用服务器软件运行、管理辅助软件管理，还会使用加密软件进行加密……因此，不可避免地把您的信息提供给了服务器提供商、各款服务器软件的厂商、加密解密软件厂商……\n\
            对此，宜英采取的措施是选用有知名度或有资质的软件，并适当了解其有关用户协议及政府和专业媒体披露的相关信息。您理解并同意因知名或有资质厂商的原因造成您个人信息泄露，宜英不承担赔偿责任。\n\
        （5）GB/T35273-2017等国标规定允许披露用户个人信息的其它情况。\n\
\n\
    2、我们如何处理用户个人敏感信息：\n\
        我们获取用户个人敏感信息会根据必要性原则，说明用途并征得用户同意。我们力求做到拒绝提供敏感信息时不影响无关功能的使用。对于获取到的敏感信息我们会不留存或以更高安全保护标准进行存储。\n\
\n\
    3、信息安全措施：\n\
        宜英将按国家一级（即最基础等级）信息安全保护等级标准存储您的个人信息。您理解并同意，若个人信息泄露事件为此标准所难以防范，宜英不承担赔偿责任。\n\
        信息泄露事件发生时，我们会及时联系存储厂商和公安机关进行处理。\n\
\n\
\n\
四、儿童隐私政策：\n\
    1、儿童的界定：\n\
        我们把未满14周岁的用户界定为儿童。\n\
\n\
    2、我们如何获取儿童信息：\n\
        考虑到儿童不具备完全民事行为能力，我们会在征得监护人同意的前提下获取监护人及儿童的个人信息。若儿童在监护人不知情的情况下使用我们的产品，我们会对其进行限制和监管。\n\
\n\
    3、我们如何使用少年儿童的个人信息：\n\
        为了保障少年儿童的身心健康和人身安全，我们可能会把儿童的个人信息及app内有关数据提供给其监护人以及有监护责任的监管部门，而不征得儿童本人的同意。\n\
\n\
		";
            return _this;
        }
        CPrivacyPolicyPanel.prototype.childrenCreated = function () {
            this.contentLabel.$setText(this.s_PriText);
            this.cpyTextPanel.setText(this.s_PriText);
            this.cpyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCpyBtn, this);
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this);
        };
        CPrivacyPolicyPanel.prototype.onCpyBtn = function (e) {
            this.cpyTextPanel.visible = true;
        };
        CPrivacyPolicyPanel.prototype.onCloseBtn = function (e) {
            this.visible = false;
        };
        return CPrivacyPolicyPanel;
    }(eui.Component));
    eyeangle2.CPrivacyPolicyPanel = CPrivacyPolicyPanel;
    __reflect(CPrivacyPolicyPanel.prototype, "eyeangle2.CPrivacyPolicyPanel");
})(eyeangle2 || (eyeangle2 = {}));
//# sourceMappingURL=CPrivacyPolicyPanel.js.map