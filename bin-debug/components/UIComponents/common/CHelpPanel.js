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
    var CHelpPanel = (function (_super) {
        __extends(CHelpPanel, _super);
        function CHelpPanel() {
            var _this = _super.call(this) || this;
            _this.s_PriText_Android = "\n\
				一、适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
				\n\
				二、系统权限说明（Android）：\n\
			    只需要使用修改当前设置权限让内容正确显示（修改分辨率、语言、字体等）。\n\
			    不需要其它权限，如：完全的互联网访问、存储、读取本机识别码、通讯录访问、读取位置信息等。如有申请，禁止即可。\n\
			    建议在权限管理中禁用除修改当前设置外的所有权限。\n\
			    本app不会向用户索取私人信息。\n\
				\n\
				(更新于2020-02-25)\n\
				";
            _this.s_PriText_iOS = "\n\
				一、适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
				\n\
				二、系统权限说明（iOS）：\n\
			    不需要使用相册、相机、位置信息等权限。如有申请，禁止即可。\n\
			    建议在权限管理中禁用所有权限。\n\
			    本app不会向用户索取私人信息。\n\
				\n\
				(更新于2020-02-25)\n\
				";
            _this.s_PriText_Other = "\n\
				适宜用户：\n\
					本产品适合8-60岁身体、精神均健康者使用。\n\
					少年儿童建议在文化水平良好者指导下使用，以减少使用风险和法律纠纷。\n\
					老幼病残、孕妇不宜使用。禁止作医疗用途。\n\
				\n\
				(更新于2020-02-25)\n\
				";
            return _this;
        }
        CHelpPanel.prototype.childrenCreated = function () {
            if (S_BUILD_FOR == S_NATIVE_ANDROID) {
                this.contentLabel.text = this.s_PriText_Android;
            }
            else if (S_BUILD_FOR == S_NATIVE_IOS) {
                this.contentLabel.text = this.s_PriText_iOS;
            }
            else {
                this.contentLabel.text = this.s_PriText_Other;
            }
            this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseBtnTap, this);
        };
        CHelpPanel.prototype.onCloseBtnTap = function (e) {
            this.visible = false;
        };
        return CHelpPanel;
    }(eui.Component));
    eyeangle2.CHelpPanel = CHelpPanel;
    __reflect(CHelpPanel.prototype, "eyeangle2.CHelpPanel");
})(eyeangle2 || (eyeangle2 = {}));
