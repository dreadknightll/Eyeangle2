window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","eyeangle2.CStartingCharAni":"resource/skins/components/common/startingCharAni.exml","eyeangle2.CAlertPanel":"resource/skins/components/common/alertPanelSkin.exml","eyeangle2.CAngleInputter":"resource/skins/components/Eyeangle/angleInputterSkin.exml","eyeangle2.CBalloonTip":"resource/skins/components/common/balloonTipSkin.exml","eyeangle2.CBottomArea":"resource/skins/scenes/Eyeangle/partials/bottomAreaAngleSkin.exml","eyeangle2.CCaliDlg":"resource/skins/components/common/caliDlgSkin.exml","eyeangle2.CCloseBtn":"resource/skins/components/common/closeBtnSkin.exml","eyeangle2.CCmpAngleDlg":"resource/skins/components/Eyeangle/cmpAngleDlgSkin.exml","eyeangle2.CConfirmPanel":"resource/skins/components/common/confirmPanelSkin.exml","eyeangle2.CFinalScoreDlg":"resource/skins/components/common/finalScoreDlgSkin.exml","eyeangle2.CMidArea":"resource/skins/scenes/Eyeangle/partials/midAreaAngleSkin.exml","eyeangle2.CEyeanglePraScene":"resource/skins/scenes/Eyeangle/praSceneAngleSkin.exml","eyeangle2.CPreloaderUI":"resource/skins/components/common/preloaderUISkin.exml","eyeangle2.CCopyrightPanel":"resource/skins/components/common/copyrightPanelSkin.exml","eyeangle2.CCopyrightPanel_V2":"resource/skins/components/common/copyrightPanelSkin_V2.exml","eyeangle2.CHelpPanel":"resource/skins/components/common/helpPanelSkin.exml","eyeangle2.CThumbUI":"resource/skins/components/common/thumbUISkin.exml","eyeangle2.CProgressView":"resource/skins/components/common/progressViewSkin.exml","eyeangle2.CScoreView":"resource/skins/components/common/scoreViewSkin.exml","eyeangle2.CTopArea":"resource/skins/scenes/Eyeangle/partials/topAreaAngleSkin.exml","eyeangle2.CWelcomeScene_Eyeangle2_V2":"resource/skins/scenes/Eyeangle/welcomeSceneAngleSkin_V2.exml","eyeangle2.CUserProPanel":"resource/skins/components/common/userProPanelSkin.exml","eyeangle2.CPrivacyPolicyPanel":"resource/skins/components/common/privacyPolicyPanelSkin.exml","eyeangle2.CCpyTextPanel":"resource/skins/components/common/cpyTextPanelSkin.exml","eyeangle2.CHorverCheckPanel":"resource/skins/components/common/horverCheckPanelSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/alertPanelSkin.exml'] = window.alertPanelSkin = (function (_super) {
	__extends(alertPanelSkin, _super);
	function alertPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","content","closeBtn"];
		
		this.height = 180;
		this.width = 300;
		this.elementsContent = [this.bgGrp_i(),this.content_i(),this.closeBtn_i()];
	}
	var _proto = alertPanelSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Rect();
		this.bgGrp = t;
		t.fillColor = 0xaaaaFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 62;
		t.multiline = true;
		t.size = 24;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 256;
		t.x = 22;
		t.y = 36;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 100;
		t.y = 111;
		return t;
	};
	return alertPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/balloonTipSkin.exml'] = window.alertPanelSkin = (function (_super) {
	__extends(alertPanelSkin, _super);
	function alertPanelSkin() {
		_super.call(this);
		this.skinParts = ["content","arrow","closeBtn"];
		
		this.height = 400;
		this.width = 350;
		this.elementsContent = [this._Image1_i(),this.content_i(),this.arrow_i(),this.closeBtn_i()];
	}
	var _proto = alertPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "tipBalloon_png";
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 151;
		t.multiline = true;
		t.size = 28;
		t.text = "标签";
		t.textColor = 0xFFFFFF;
		t.width = 297;
		t.x = 23;
		t.y = 94;
		return t;
	};
	_proto.arrow_i = function () {
		var t = new eui.Image();
		this.arrow = t;
		t.height = 47;
		t.source = "arrow_png";
		t.width = 84;
		t.x = 134;
		t.y = 345;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "看完了，关闭";
		t.x = 113;
		t.y = 277;
		return t;
	};
	return alertPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/caliDlgSkin.exml'] = window.caliDlgSkin = (function (_super) {
	__extends(caliDlgSkin, _super);
	function caliDlgSkin() {
		_super.call(this);
		this.skinParts = ["OKBtn","cancelBtn","caliSquareBg","caliSquare","caliImg","caliSquareCover","chCaliImgBtn","minusBtn","plusBtn","undoBtn","redoBtn","caliRateField","lockCB","closeBtn"];
		
		this.height = 600;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.OKBtn_i(),this.cancelBtn_i(),this._Label1_i(),this._Label2_i(),this.caliSquareBg_i(),this.caliSquare_i(),this.caliImg_i(),this.caliSquareCover_i(),this.chCaliImgBtn_i(),this._Label3_i(),this.minusBtn_i(),this.plusBtn_i(),this.undoBtn_i(),this.redoBtn_i(),this._Label4_i(),this.caliRateField_i(),this.lockCB_i(),this._Label5_i(),this.closeBtn_i()];
	}
	var _proto = caliDlgSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0x00FF00;
		t.height = 600;
		t.width = 400;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.OKBtn_i = function () {
		var t = new eui.Button();
		this.OKBtn = t;
		t.height = 50;
		t.label = "确定";
		t.width = 100;
		t.x = 100;
		t.y = 519;
		return t;
	};
	_proto.cancelBtn_i = function () {
		var t = new eui.Button();
		this.cancelBtn = t;
		t.height = 50;
		t.label = "取消";
		t.width = 100;
		t.x = 205;
		t.y = 519;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 54;
		t.text = "横竖校准";
		t.textColor = 0x000000;
		t.x = 93;
		t.y = 47;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 103;
		t.size = 24;
		t.text = "　　请输入校准系数，或仔细调整宽度，确保以下图形精确显示为正方形（横竖偏差3%以下）：";
		t.textColor = 0x000000;
		t.width = 320;
		t.x = 42;
		t.y = 115;
		return t;
	};
	_proto.caliSquareBg_i = function () {
		var t = new eui.Rect();
		this.caliSquareBg = t;
		t.fillColor = 0xAAAAAA;
		t.height = 150;
		t.width = 270;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliSquare_i = function () {
		var t = new eui.Rect();
		this.caliSquare = t;
		t.fillColor = 0x339955;
		t.height = 150;
		t.width = 150;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliImg_i = function () {
		var t = new eui.Image();
		this.caliImg = t;
		t.height = 150;
		t.source = "square1_png";
		t.width = 150;
		t.x = 70;
		t.y = 220;
		return t;
	};
	_proto.caliSquareCover_i = function () {
		var t = new eui.Rect();
		this.caliSquareCover = t;
		t.alpha = 0;
		t.fillColor = 0xAAAAAA;
		t.height = 150;
		t.width = 270;
		t.x = 70;
		t.y = 217;
		return t;
	};
	_proto.chCaliImgBtn_i = function () {
		var t = new eui.Image();
		this.chCaliImgBtn = t;
		t.height = 30;
		t.source = "refreshBtn_png";
		t.width = 30;
		t.x = 20;
		t.y = 262;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.height = 40;
		t.size = 16;
		t.text = "换校准图";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.width = 65;
		t.x = 3;
		t.y = 291;
		return t;
	};
	_proto.minusBtn_i = function () {
		var t = new eui.Button();
		this.minusBtn = t;
		t.height = 40;
		t.label = "-";
		t.width = 60;
		t.x = 75;
		t.y = 419;
		return t;
	};
	_proto.plusBtn_i = function () {
		var t = new eui.Button();
		this.plusBtn = t;
		t.height = 40;
		t.label = "+";
		t.width = 60;
		t.x = 140;
		t.y = 419;
		return t;
	};
	_proto.undoBtn_i = function () {
		var t = new eui.Button();
		this.undoBtn = t;
		t.height = 40;
		t.label = "撤销";
		t.width = 60;
		t.x = 75;
		t.y = 459;
		return t;
	};
	_proto.redoBtn_i = function () {
		var t = new eui.Button();
		this.redoBtn = t;
		t.height = 40;
		t.label = "重做";
		t.width = 60;
		t.x = 140;
		t.y = 459;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.height = 29;
		t.size = 24;
		t.text = "校准系数：";
		t.textColor = 0x000000;
		t.width = 127;
		t.x = 90;
		t.y = 389;
		return t;
	};
	_proto.caliRateField_i = function () {
		var t = new eui.TextInput();
		this.caliRateField = t;
		t.text = "1.00";
		t.width = 99;
		t.x = 208;
		t.y = 381;
		return t;
	};
	_proto.lockCB_i = function () {
		var t = new eui.CheckBox();
		this.lockCB = t;
		t.width = 153;
		t.x = 219;
		t.y = 438;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.height = 49;
		t.size = 20;
		t.text = "锁定宽度和系数";
		t.textColor = 0x000000;
		t.width = 89;
		t.x = 247;
		t.y = 429;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eyeangle2.CCloseBtn();
		this.closeBtn = t;
		t.label = "X";
		t.x = 356;
		t.y = 2;
		return t;
	};
	return caliDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/closeBtnSkin.exml'] = window.closeBtnSkin = (function (_super) {
	__extends(closeBtnSkin, _super);
	function closeBtnSkin() {
		_super.call(this);
		this.skinParts = ["theImg"];
		
		this.height = 50;
		this.width = 40;
		this.elementsContent = [this.theImg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = closeBtnSkin.prototype;

	_proto.theImg_i = function () {
		var t = new eui.Image();
		this.theImg = t;
		t.height = 50;
		t.source = "closeBtn_png";
		t.width = 40;
		t.x = 3;
		t.y = 1;
		return t;
	};
	return closeBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/yesBtnSkin.exml'] = window.yesBtnSkin = (function (_super) {
	__extends(yesBtnSkin, _super);
	function yesBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 220;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = yesBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "yesBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.source = "yesBtnDown_png";
		t.percentWidth = 100;
		return t;
	};
	return yesBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/noBtnSkin.exml'] = window.noBtnSkin = (function (_super) {
	__extends(noBtnSkin, _super);
	function noBtnSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 220;
		this.elementsContent = [];
		this._Image1_i();
		
		this._Image2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image2","",1,"")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = noBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.source = "noBtn_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.percentHeight = 100;
		t.source = "noBtnDown_png";
		t.percentWidth = 100;
		return t;
	};
	return noBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/confirmPanelSkin.exml'] = window.alertPanelSkin = (function (_super) {
	__extends(alertPanelSkin, _super);
	function alertPanelSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","content","yesBtn","noBtn"];
		
		this.height = 280;
		this.width = 400;
		this.elementsContent = [this.bgGrp_i(),this.content_i(),this.yesBtn_i(),this.noBtn_i()];
	}
	var _proto = alertPanelSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Group();
		this.bgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.bold = true;
		t.height = 115;
		t.multiline = true;
		t.size = 24;
		t.text = "标签";
		t.textColor = 0x000000;
		t.width = 350;
		t.x = 22;
		t.y = 46;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new eui.Button();
		this.yesBtn = t;
		t.height = 55;
		t.label = "是";
		t.skinName = "yesBtnSkin";
		t.width = 150;
		t.x = 47;
		t.y = 203;
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new eui.Button();
		this.noBtn = t;
		t.height = 55;
		t.label = "否";
		t.skinName = "noBtnSkin";
		t.width = 150;
		t.x = 201;
		t.y = 203;
		return t;
	};
	return alertPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/copyrightPanelSkin_V2.exml'] = window.copyrightPanelSkin_v2 = (function (_super) {
	__extends(copyrightPanelSkin_v2, _super);
	function copyrightPanelSkin_v2() {
		_super.call(this);
		this.skinParts = ["title","content","contentScroller","closeBtn","arrowUp","arrowDown"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.title_i(),this.contentScroller_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this.arrowUp_i(),this.arrowDown_i()];
	}
	var _proto = copyrightPanelSkin_v2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "noticeBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.text = "著作权声明";
		t.textColor = 0xFF0000;
		t.x = 123.5;
		t.y = 80;
		return t;
	};
	_proto.contentScroller_i = function () {
		var t = new eui.Scroller();
		this.contentScroller = t;
		t.height = 420;
		t.width = 320;
		t.x = 42;
		t.y = 141;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.height = 800;
		t.width = 315;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 151;
		t.y = 566;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 85;
		t.y = 567;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 265;
		t.y = 567;
		return t;
	};
	_proto.arrowUp_i = function () {
		var t = new eui.Image();
		this.arrowUp = t;
		t.height = 40;
		t.skewX = 180;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 90;
		t.y = 611;
		return t;
	};
	_proto.arrowDown_i = function () {
		var t = new eui.Image();
		this.arrowDown = t;
		t.height = 40;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 270;
		t.y = 571;
		return t;
	};
	return copyrightPanelSkin_v2;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/copyrightPanelSkin.exml'] = window.copyrightPanelSkin = (function (_super) {
	__extends(copyrightPanelSkin, _super);
	function copyrightPanelSkin() {
		_super.call(this);
		this.skinParts = ["title","closeBtn","arrowUp","arrowDown"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.title_i(),this.closeBtn_i(),this._Image2_i(),this._Image3_i(),this.arrowUp_i(),this.arrowDown_i()];
	}
	var _proto = copyrightPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.percentHeight = 100;
		t.source = "noticeBg_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.text = "著作权声明";
		t.textColor = 0xFF0000;
		t.x = 123.5;
		t.y = 80;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 151;
		t.y = 566;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 85;
		t.y = 567;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 50;
		t.source = "rippleCircle_png";
		t.width = 50;
		t.x = 265;
		t.y = 567;
		return t;
	};
	_proto.arrowUp_i = function () {
		var t = new eui.Image();
		this.arrowUp = t;
		t.height = 40;
		t.skewX = 180;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 90;
		t.y = 611;
		return t;
	};
	_proto.arrowDown_i = function () {
		var t = new eui.Image();
		this.arrowDown = t;
		t.height = 40;
		t.source = "arrow_png";
		t.width = 40;
		t.x = 270;
		t.y = 571;
		return t;
	};
	return copyrightPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/cpyTextPanelSkin.exml'] = window.cpyTextPanelSkin = (function (_super) {
	__extends(cpyTextPanelSkin, _super);
	function cpyTextPanelSkin() {
		_super.call(this);
		this.skinParts = ["rectOuter","rectInner","txtArea","resetTextBtn","closeBtn"];
		
		this.height = 500;
		this.width = 350;
		this.elementsContent = [this.rectOuter_i(),this.rectInner_i(),this._Label1_i(),this.txtArea_i(),this.resetTextBtn_i(),this.closeBtn_i()];
	}
	var _proto = cpyTextPanelSkin.prototype;

	_proto.rectOuter_i = function () {
		var t = new eui.Rect();
		this.rectOuter = t;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.rectInner_i = function () {
		var t = new eui.Rect();
		this.rectInner = t;
		t.fillColor = 0x999999;
		t.percentHeight = 97;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 95;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "框里的内容可供复制：";
		t.textColor = 0x000000;
		t.x = 25;
		t.y = 22;
		return t;
	};
	_proto.txtArea_i = function () {
		var t = new eui.EditableText();
		this.txtArea = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.background = true;
		t.backgroundColor = 0xcccccc;
		t.height = 352;
		t.multiline = true;
		t.size = 15;
		t.textColor = 0x000000;
		t.width = 306;
		t.x = 22;
		t.y = 64;
		return t;
	};
	_proto.resetTextBtn_i = function () {
		var t = new eui.Button();
		this.resetTextBtn = t;
		t.label = "重置内容";
		t.x = 75;
		t.y = 427;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 173;
		t.y = 427;
		return t;
	};
	return cpyTextPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/replayButtonSkin.exml'] = window.replayButtonSkin = (function (_super) {
	__extends(replayButtonSkin, _super);
	function replayButtonSkin() {
		_super.call(this);
		this.skinParts = ["theImg"];
		
		this.height = 120;
		this.width = 160;
		this.elementsContent = [this.theImg_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("theImg","source","replay_button_down_png")
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = replayButtonSkin.prototype;

	_proto.theImg_i = function () {
		var t = new eui.Image();
		this.theImg = t;
		t.percentHeight = 100;
		t.source = "replay_button_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return replayButtonSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/finalScoreDlgSkin.exml'] = window.finalScoreDlgSkin = (function (_super) {
	__extends(finalScoreDlgSkin, _super);
	function finalScoreDlgSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","replayBtn","score","stars"];
		
		this.height = 480;
		this.width = 360;
		this.elementsContent = [this.bgGrp_i(),this.replayBtn_i(),this._Label1_i(),this.score_i(),this.stars_i(),this._Label2_i()];
	}
	var _proto = finalScoreDlgSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Group();
		this.bgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new eui.Button();
		this.replayBtn = t;
		t.skinName = "resource/skins/components/common/replayButtonSkin.exml";
		t.x = 100;
		t.y = 314;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = +36;
		t.text = "最后得分：";
		t.textColor = 0x000000;
		t.x = 68;
		t.y = 196;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.size = +36;
		t.text = "200";
		t.textColor = 0x000000;
		t.x = 229;
		t.y = 196;
		return t;
	};
	_proto.stars_i = function () {
		var t = new eui.Group();
		this.stars = t;
		t.height = 55;
		t.width = 200;
		t.x = 82;
		t.y = 244;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = +64;
		t.text = "练习结束";
		t.textColor = 0x000000;
		t.x = 52;
		t.y = 92;
		return t;
	};
	return finalScoreDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/helpPanelSkin.exml'] = window.helpPanelSkin = (function (_super) {
	__extends(helpPanelSkin, _super);
	function helpPanelSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","contentLabel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.closeBtn_i(),this._Label1_i(),this._Scroller1_i(),this._Rect2_i()];
	}
	var _proto = helpPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xa5a5a5;
		t.height = 640;
		t.width = 400;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 149;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "使用指引";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 419;
		t.x = 17;
		t.y = 96;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	return helpPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/horverCheckPanelSkin.exml'] = window.horverCheckPanelSkin = (function (_super) {
	__extends(horverCheckPanelSkin, _super);
	function horverCheckPanelSkin() {
		_super.call(this);
		this.skinParts = ["outterRect","innerRect","caliSquare","closeBtn"];
		
		this.height = 500;
		this.width = 440;
		this.elementsContent = [this.outterRect_i(),this.innerRect_i(),this._Label1_i(),this._Label2_i(),this.caliSquare_i(),this._Label3_i(),this.closeBtn_i()];
	}
	var _proto = horverCheckPanelSkin.prototype;

	_proto.outterRect_i = function () {
		var t = new eui.Rect();
		this.outterRect = t;
		t.fillColor = 0x000000;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.innerRect_i = function () {
		var t = new eui.Rect();
		this.innerRect = t;
		t.fillColor = 0xaaaaaa;
		t.percentHeight = 96;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 96;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 56;
		t.size = 24;
		t.text = "注意：练习前，请检查您的设备是否合适。方法如下：";
		t.textColor = 0xFF0000;
		t.width = 408;
		t.x = 16;
		t.y = 52;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.height = 197;
		t.size = 24;
		t.text = "　　仔细测量右图的正方形是否宽等于高。如有出现3%以上的偏差，则需要校准。初步估计超过80%的知名品牌设备均无需校准。";
		t.textColor = 0x000000;
		t.width = 190;
		t.x = 16;
		t.y = 108;
		return t;
	};
	_proto.caliSquare_i = function () {
		var t = new eui.Image();
		this.caliSquare = t;
		t.height = 160;
		t.source = "square1_png";
		t.width = 160;
		t.x = 234;
		t.y = 126.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.height = 75;
		t.size = 24;
		t.text = "　　如有偏差，请校准(开始练习后进行)。每台设备通常只需检查一次。";
		t.textColor = 0x000000;
		t.width = 398;
		t.x = 19;
		t.y = 317;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 170;
		t.y = 410;
		return t;
	};
	return horverCheckPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/preloaderUISkin.exml'] = window.preloaderUISkin = (function (_super) {
	__extends(preloaderUISkin, _super);
	function preloaderUISkin() {
		_super.call(this);
		this.skinParts = ["bg","cmplPropor","readyLabel"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.bg_i(),this._Label1_i(),this._Label2_i(),this.cmplPropor_i(),this.readyLabel_i()];
	}
	var _proto = preloaderUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.fillColor = 0xaaaaee;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "加载中……";
		t.textColor = 0x000000;
		t.x = 96;
		t.y = 58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.text = "已完成：";
		t.textColor = 0x000000;
		t.x = 92;
		t.y = 111;
		return t;
	};
	_proto.cmplPropor_i = function () {
		var t = new eui.Label();
		this.cmplPropor = t;
		t.text = "0.0%";
		t.textColor = 0x000000;
		t.x = 209;
		t.y = 113;
		return t;
	};
	_proto.readyLabel_i = function () {
		var t = new eui.Label();
		this.readyLabel = t;
		t.size = 50;
		t.text = "就绪";
		t.textColor = 0x000000;
		t.visible = false;
		t.x = 141;
		t.y = 187;
		return t;
	};
	return preloaderUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/privacyPolicyPanelSkin.exml'] = window.privacyPanelSkin_V2 = (function (_super) {
	__extends(privacyPanelSkin_V2, _super);
	function privacyPanelSkin_V2() {
		_super.call(this);
		this.skinParts = ["cpyBtn","closeBtn","contentLabel","cpyTextPanel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.cpyBtn_i(),this.closeBtn_i(),this._Label1_i(),this._Rect2_i(),this._Scroller1_i(),this.cpyTextPanel_i()];
	}
	var _proto = privacyPanelSkin_V2.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xa5a5a5;
		t.height = 640;
		t.width = 400;
		t.x = -1;
		t.y = 0;
		return t;
	};
	_proto.cpyBtn_i = function () {
		var t = new eui.Button();
		this.cpyBtn = t;
		t.label = "复制";
		t.x = 90;
		t.y = 545;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 210;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "隐私政策";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 419;
		t.x = 17;
		t.y = 96;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentLabel_i()];
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 2800;
		t.size = 24;
		t.text = "";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.cpyTextPanel_i = function () {
		var t = new eyeangle2.CCpyTextPanel();
		this.cpyTextPanel = t;
		t.height = 500;
		t.visible = false;
		t.width = 350;
		t.x = 25;
		t.y = 63;
		return t;
	};
	return privacyPanelSkin_V2;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/progressViewSkin.exml'] = window.progressViewSkin = (function (_super) {
	__extends(progressViewSkin, _super);
	function progressViewSkin() {
		_super.call(this);
		this.skinParts = ["progressCells"];
		
		this.height = 75;
		this.width = 250;
		this.elementsContent = [this._Label1_i(),this.progressCells_i()];
	}
	var _proto = progressViewSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 66;
		t.text = "进度";
		t.textColor = 0x000000;
		t.width = 42;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.progressCells_i = function () {
		var t = new eui.Group();
		this.progressCells = t;
		t.height = 18;
		t.width = 200;
		t.x = 30;
		t.y = 25;
		return t;
	};
	return progressViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/scoreViewSkin.exml'] = window.scoreViewSkin = (function (_super) {
	__extends(scoreViewSkin, _super);
	function scoreViewSkin() {
		_super.call(this);
		this.skinParts = ["scoreTxt","scoreFlags"];
		
		this.height = 75;
		this.width = 250;
		this.elementsContent = [this._Label1_i(),this.scoreTxt_i(),this.scoreFlags_i()];
	}
	var _proto = scoreViewSkin.prototype;

	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.height = 66;
		t.text = "成绩";
		t.textColor = 0x000000;
		t.width = 42;
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.scoreTxt_i = function () {
		var t = new eui.Label();
		this.scoreTxt = t;
		t.height = 60;
		t.text = "0";
		t.textColor = 0x000000;
		t.width = 80;
		t.x = 30;
		t.y = 21;
		return t;
	};
	_proto.scoreFlags_i = function () {
		var t = new eui.Group();
		this.scoreFlags = t;
		t.height = 72;
		t.width = 150;
		t.x = 76;
		t.y = 2;
		return t;
	};
	return scoreViewSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/startingCharAni.exml'] = window.startingCharAni = (function (_super) {
	__extends(startingCharAni, _super);
	function startingCharAni() {
		_super.call(this);
		this.skinParts = ["textLabel"];
		
		this.height = 40;
		this.width = 240;
		this.elementsContent = [this.textLabel_i()];
	}
	var _proto = startingCharAni.prototype;

	_proto.textLabel_i = function () {
		var t = new eui.Label();
		this.textLabel = t;
		t.size = 24;
		t.text = "练习即将开始";
		t.textColor = 0x000000;
		t.x = 20;
		t.y = 5;
		return t;
	};
	return startingCharAni;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/thumbUISkin.exml'] = window.thumbUI = (function (_super) {
	__extends(thumbUI, _super);
	function thumbUI() {
		_super.call(this);
		this.skinParts = ["thumb","thumbSel","thumbQuestioner","midLayerGrp","thumbCover"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this.thumb_i(),this.thumbSel_i(),this.midLayerGrp_i(),this.thumbCover_i()];
	}
	var _proto = thumbUI.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 120;
		t.source = "noImg_gif";
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.thumbSel_i = function () {
		var t = new eui.Image();
		this.thumbSel = t;
		t.height = 100;
		t.source = "thumb_sel_png";
		t.visible = true;
		t.width = 120;
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.midLayerGrp_i = function () {
		var t = new eui.Group();
		this.midLayerGrp = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.thumbQuestioner_i()];
		return t;
	};
	_proto.thumbQuestioner_i = function () {
		var t = new eui.Label();
		this.thumbQuestioner = t;
		t.bold = true;
		t.size = 24;
		t.stroke = 1;
		t.strokeColor = 0xff0000;
		t.text = "?";
		t.textColor = 0xFFFF00;
		t.x = 28;
		t.y = 80;
		return t;
	};
	_proto.thumbCover_i = function () {
		var t = new eui.Rect();
		this.thumbCover = t;
		t.alpha = 0.0;
		t.height = 120;
		t.width = 150;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return thumbUI;
})(eui.Skin);generateEUI.paths['resource/skins/components/common/userProPanelSkin.exml'] = window.userProPanelSkin = (function (_super) {
	__extends(userProPanelSkin, _super);
	function userProPanelSkin() {
		_super.call(this);
		this.skinParts = ["resetTextBtn","closeBtn","contentLabel"];
		
		this.height = 640;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.resetTextBtn_i(),this.closeBtn_i(),this._Label1_i(),this._Rect2_i(),this.contentLabel_i()];
	}
	var _proto = userProPanelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x999999;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.resetTextBtn_i = function () {
		var t = new eui.Button();
		this.resetTextBtn = t;
		t.label = "重置内容";
		t.x = 90;
		t.y = 545;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "关闭";
		t.x = 210;
		t.y = 545;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.size = 32;
		t.text = "用户协议";
		t.textColor = 0x000000;
		t.width = 134;
		t.x = 130;
		t.y = 43;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.width = 336;
		t.x = 27.5;
		t.y = 83;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.EditableText();
		this.contentLabel = t;
		t.background = true;
		t.backgroundColor = 0xbbbbbb;
		t.height = 419;
		t.multiline = true;
		t.size = 22;
		t.text = "fefefsfdd";
		t.textColor = 0x000000;
		t.width = 339;
		t.x = 27;
		t.y = 101;
		return t;
	};
	return userProPanelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/Eyeangle/angleInputterSkin.exml'] = window.angleInputterSkin = (function (_super) {
	__extends(angleInputterSkin, _super);
	function angleInputterSkin() {
		_super.call(this);
		this.skinParts = ["bg","angleCanvasGrp","toucher"];
		
		this.height = 200;
		this.width = 250;
		this.elementsContent = [this.bg_i(),this.angleCanvasGrp_i(),this.toucher_i()];
	}
	var _proto = angleInputterSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "AngleInputterBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.angleCanvasGrp_i = function () {
		var t = new eui.Group();
		this.angleCanvasGrp = t;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.toucher_i = function () {
		var t = new eui.Image();
		this.toucher = t;
		t.source = "AngleInputterToucher_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return angleInputterSkin;
})(eui.Skin);generateEUI.paths['resource/skins/components/Eyeangle/cmpAngleDlgSkin.exml'] = window.cmpAngleDlgSkin = (function (_super) {
	__extends(cmpAngleDlgSkin, _super);
	function cmpAngleDlgSkin() {
		_super.call(this);
		this.skinParts = ["bg","scoreValue","scoreFlags"];
		
		this.height = 120;
		this.width = 150;
		this.elementsContent = [this.bg_i(),this.scoreValue_i(),this.scoreFlags_i()];
	}
	var _proto = cmpAngleDlgSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.percentHeight = 100;
		t.source = "scoreFrame_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scoreValue_i = function () {
		var t = new eui.Label();
		this.scoreValue = t;
		t.size = 45;
		t.text = "+30";
		t.textColor = 0x000000;
		t.x = 37;
		t.y = 14;
		return t;
	};
	_proto.scoreFlags_i = function () {
		var t = new eui.Group();
		this.scoreFlags = t;
		t.height = 37;
		t.width = 99;
		t.x = 28;
		t.y = 62;
		return t;
	};
	return cmpAngleDlgSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyeangle/partials/bottomAreaAngleSkin.exml'] = window.bottomAreaAngleSkin = (function (_super) {
	__extends(bottomAreaAngleSkin, _super);
	function bottomAreaAngleSkin() {
		_super.call(this);
		this.skinParts = ["bgGrp","angleInputter","nextBtn","OKBtn","backBtn","caliBtn"];
		
		this.height = 210;
		this.width = 480;
		this.elementsContent = [this.bgGrp_i(),this.angleInputter_i(),this.nextBtn_i(),this.OKBtn_i(),this.backBtn_i(),this.caliBtn_i()];
	}
	var _proto = bottomAreaAngleSkin.prototype;

	_proto.bgGrp_i = function () {
		var t = new eui.Group();
		this.bgGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.angleInputter_i = function () {
		var t = new eyeangle2.CAngleInputter();
		this.angleInputter = t;
		t.x = 114;
		t.y = 5;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new eui.Button();
		this.nextBtn = t;
		t.enabled = false;
		t.label = "下一角度";
		t.x = 370;
		t.y = 74;
		return t;
	};
	_proto.OKBtn_i = function () {
		var t = new eui.Button();
		this.OKBtn = t;
		t.label = " 确 定 ";
		t.x = 370;
		t.y = 14;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = " 返 回 ";
		t.x = 4;
		t.y = 95;
		return t;
	};
	_proto.caliBtn_i = function () {
		var t = new eui.Button();
		this.caliBtn = t;
		t.label = "横竖校准";
		t.x = 12;
		t.y = 147;
		return t;
	};
	return bottomAreaAngleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyeangle/partials/midAreaAngleSkin.exml'] = window.midAreaAngleSkin = (function (_super) {
	__extends(midAreaAngleSkin, _super);
	function midAreaAngleSkin() {
		_super.call(this);
		this.skinParts = ["midBgGrp","img","midCanvasGrp","midContentGroup"];
		
		this.height = 750;
		this.width = 480;
		this.elementsContent = [this.midBgGrp_i(),this.midContentGroup_i()];
	}
	var _proto = midAreaAngleSkin.prototype;

	_proto.midBgGrp_i = function () {
		var t = new eui.Group();
		this.midBgGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.midContentGroup_i = function () {
		var t = new eui.Group();
		this.midContentGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_i(),this.midCanvasGrp_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 300;
		t.source = "noImg_gif";
		t.width = 400;
		return t;
	};
	_proto.midCanvasGrp_i = function () {
		var t = new eui.Group();
		this.midCanvasGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	return midAreaAngleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyeangle/partials/topAreaAngleSkin.exml'] = window.topAreaAngleSkin = (function (_super) {
	__extends(topAreaAngleSkin, _super);
	function topAreaAngleSkin() {
		_super.call(this);
		this.skinParts = ["bgBackGrp","topScreen","bgFrontGrp","thumbUI","progressView","scoreView","switchBtnBgGrp","switchBtn"];
		
		this.height = 180;
		this.width = 480;
		this.elementsContent = [this.bgBackGrp_i(),this.topScreen_i(),this.bgFrontGrp_i(),this.thumbUI_i(),this.progressView_i(),this.scoreView_i(),this.switchBtnBgGrp_i(),this.switchBtn_i()];
	}
	var _proto = topAreaAngleSkin.prototype;

	_proto.bgBackGrp_i = function () {
		var t = new eui.Group();
		this.bgBackGrp = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topScreen_i = function () {
		var t = new eui.Image();
		this.topScreen = t;
		t.percentHeight = 100;
		t.source = "top_screen_open_png";
		t.percentWidth = 100;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bgFrontGrp_i = function () {
		var t = new eui.Group();
		this.bgFrontGrp = t;
		t.height = 10;
		t.width = 10;
		t.x = 25;
		t.y = 0;
		return t;
	};
	_proto.thumbUI_i = function () {
		var t = new eyeangle2.CThumbUI();
		this.thumbUI = t;
		t.height = 120;
		t.width = 150;
		t.x = 36;
		t.y = 18;
		return t;
	};
	_proto.progressView_i = function () {
		var t = new eyeangle2.CProgressView();
		this.progressView = t;
		t.x = 207;
		t.y = 1;
		return t;
	};
	_proto.scoreView_i = function () {
		var t = new eyeangle2.CScoreView();
		this.scoreView = t;
		t.x = 207;
		t.y = 79;
		return t;
	};
	_proto.switchBtnBgGrp_i = function () {
		var t = new eui.Group();
		this.switchBtnBgGrp = t;
		t.height = 1;
		t.width = 1;
		return t;
	};
	_proto.switchBtn_i = function () {
		var t = new eui.Image();
		this.switchBtn = t;
		t.height = 30;
		t.source = "top_screen_button_up_png";
		t.width = 60;
		t.x = 209;
		t.y = 154;
		return t;
	};
	return topAreaAngleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyeangle/praSceneAngleSkin.exml'] = window.praSceneAngleSkin = (function (_super) {
	__extends(praSceneAngleSkin, _super);
	function praSceneAngleSkin() {
		_super.call(this);
		this.skinParts = ["midArea","midAreaGroup","topArea","topAreaGroup","bottomArea","bottomAreaGroup","topSpaceGrp","cmpAngleDlg","finalScoreDlg"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this.midAreaGroup_i(),this.topAreaGroup_i(),this.bottomAreaGroup_i(),this.topSpaceGrp_i(),this.cmpAngleDlg_i(),this.finalScoreDlg_i()];
	}
	var _proto = praSceneAngleSkin.prototype;

	_proto.midAreaGroup_i = function () {
		var t = new eui.Group();
		this.midAreaGroup = t;
		t.x = 0;
		t.y = 300;
		t.elementsContent = [this.midArea_i()];
		return t;
	};
	_proto.midArea_i = function () {
		var t = new eyeangle2.CMidArea();
		this.midArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topAreaGroup_i = function () {
		var t = new eui.Group();
		this.topAreaGroup = t;
		t.x = 0;
		t.y = 50;
		t.elementsContent = [this.topArea_i()];
		return t;
	};
	_proto.topArea_i = function () {
		var t = new eyeangle2.CTopArea();
		this.topArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bottomAreaGroup_i = function () {
		var t = new eui.Group();
		this.bottomAreaGroup = t;
		t.x = 0;
		t.y = 400;
		t.elementsContent = [this.bottomArea_i()];
		return t;
	};
	_proto.bottomArea_i = function () {
		var t = new eyeangle2.CBottomArea();
		this.bottomArea = t;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topSpaceGrp_i = function () {
		var t = new eui.Group();
		this.topSpaceGrp = t;
		t.height = 1;
		t.width = 1;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.cmpAngleDlg_i = function () {
		var t = new eyeangle2.CCmpAngleDlg();
		this.cmpAngleDlg = t;
		t.visible = false;
		t.x = 165;
		t.y = 600;
		return t;
	};
	_proto.finalScoreDlg_i = function () {
		var t = new eyeangle2.CFinalScoreDlg();
		this.finalScoreDlg = t;
		t.visible = false;
		t.x = 60;
		t.y = 111;
		return t;
	};
	return praSceneAngleSkin;
})(eui.Skin);generateEUI.paths['resource/skins/scenes/Eyeangle/welcomeSceneAngleSkin_V2.exml'] = window.welcomeSceneSkin = (function (_super) {
	__extends(welcomeSceneSkin, _super);
	function welcomeSceneSkin() {
		_super.call(this);
		this.skinParts = ["userProRead","userProLabel","priPoliRead","priPoliLabel","horverChecked","horverLabel","startBtn","showCRBtn","helpBtn","crPanel","userProPanel","helpPanel","priPoliPanel","horverCheckPanel"];
		
		this.height = 800;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group6_i(),this.showCRBtn_i(),this._Image2_i(),this.helpBtn_i(),this.crPanel_i(),this.userProPanel_i(),this.helpPanel_i(),this.priPoliPanel_i(),this.horverCheckPanel_i()];
	}
	var _proto = welcomeSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xFFFFFF;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109;
		t.width = 359;
		t.x = 59.5;
		t.y = 84.5;
		t.elementsContent = [this._Image1_i(),this._Label1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 95;
		t.source = "eyeangle2_logo_png";
		t.width = 95;
		t.x = 8;
		t.y = 6.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "宜英角眼通2——\n角度目测训练";
		t.textColor = 0x000000;
		t.x = 109;
		t.y = 25.5;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 383;
		t.width = 460;
		t.x = 9.37;
		t.y = 280;
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48.33;
		t.width = 452.67;
		t.x = 5;
		t.y = 5;
		t.elementsContent = [this._Rect2_i(),this.userProRead_i(),this.userProLabel_i(),this._Label2_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x86c93a;
		t.height = 45;
		t.width = 450;
		return t;
	};
	_proto.userProRead_i = function () {
		var t = new eui.CheckBox();
		this.userProRead = t;
		t.touchEnabled = true;
		t.x = 58;
		t.y = 10;
		return t;
	};
	_proto.userProLabel_i = function () {
		var t = new eui.Label();
		this.userProLabel = t;
		t.size = 20;
		t.text = "我已阅读并同意《用户协议》";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "1";
		t.x = 12;
		t.y = 6;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.width = 448;
		t.x = 5;
		t.y = 55;
		t.elementsContent = [this._Rect3_i(),this.priPoliRead_i(),this.priPoliLabel_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.fillColor = 0xd1c3a3;
		t.height = 45;
		t.width = 450;
		return t;
	};
	_proto.priPoliRead_i = function () {
		var t = new eui.CheckBox();
		this.priPoliRead = t;
		t.touchEnabled = true;
		t.x = 58;
		t.y = 10;
		return t;
	};
	_proto.priPoliLabel_i = function () {
		var t = new eui.Label();
		this.priPoliLabel = t;
		t.size = 20;
		t.text = "我已阅读并同意《隐私政策》";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "2";
		t.x = 12;
		t.y = 6;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.width = 449;
		t.x = 5;
		t.y = 105;
		t.elementsContent = [this._Rect4_i(),this.horverChecked_i(),this.horverLabel_i(),this._Label4_i()];
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x575793;
		t.height = 60;
		t.width = 450;
		return t;
	};
	_proto.horverChecked_i = function () {
		var t = new eui.CheckBox();
		this.horverChecked = t;
		t.label = "";
		t.touchEnabled = true;
		t.x = 58;
		t.y = 18;
		return t;
	};
	_proto.horverLabel_i = function () {
		var t = new eui.Label();
		this.horverLabel = t;
		t.size = 20;
		t.text = "我已认真进行横竖检验并仔细阅读相\n关说明";
		t.textColor = 0x000000;
		t.x = 85;
		t.y = 11;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.text = "3";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.width = 448;
		t.x = 5;
		t.y = 170;
		t.elementsContent = [this._Rect5_i(),this.startBtn_i(),this._Label5_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.fillColor = 0xefd5d5;
		t.height = 60;
		t.width = 450;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.enabled = false;
		t.label = "开始练习";
		t.touchEnabled = true;
		t.x = 176.33;
		t.y = 6;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 36;
		t.text = "4 GO！";
		t.x = 12;
		t.y = 12;
		return t;
	};
	_proto.showCRBtn_i = function () {
		var t = new eui.Image();
		this.showCRBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "copyright_png";
		t.width = 60;
		t.x = 277;
		t.y = 720;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 60;
		t.source = "eint_logo_png";
		t.width = 112;
		t.x = 339;
		t.y = 720;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.label = "指引";
		t.touchEnabled = true;
		t.x = 32;
		t.y = 725;
		return t;
	};
	_proto.crPanel_i = function () {
		var t = new eyeangle2.CCopyrightPanel_V2();
		this.crPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.userProPanel_i = function () {
		var t = new eyeangle2.CUserProPanel();
		this.userProPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.helpPanel_i = function () {
		var t = new eyeangle2.CHelpPanel();
		this.helpPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.priPoliPanel_i = function () {
		var t = new eyeangle2.CPrivacyPolicyPanel();
		this.priPoliPanel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 640;
		t.visible = false;
		t.width = 400;
		t.x = 38.36;
		t.y = 65.42;
		return t;
	};
	_proto.horverCheckPanel_i = function () {
		var t = new eyeangle2.CHorverCheckPanel();
		this.horverCheckPanel = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 100;
		return t;
	};
	return welcomeSceneSkin;
})(eui.Skin);