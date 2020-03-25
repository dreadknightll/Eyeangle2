/***********************************************************
* /src/UI/scenes/other/loadingUI_Eint_V3.ts
* 程序启动时的资源加载界面。
* 使用方法：创建对象 —> setWinSize —> create 。需要“触摸屏幕继续”时，调用touch2C。
*
************************************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LoadingUI_Eint_V3 = (function (_super) {
    __extends(LoadingUI_Eint_V3, _super);
    //此处不能使用eui。因为未对接childrenCreated。
    function LoadingUI_Eint_V3() {
        // 注意：new前要把全局变量g_winWidth和g_winHeight填写好，并且logo预加载完成。
        return _super.call(this) || this;
    }
    LoadingUI_Eint_V3.prototype.create = function () {
        this.width = this.m_winWidth;
        this.height = this.m_winHeight;
        this.createView();
        this.m_flashCnt = 0;
        this.m_flashTimer = new egret.Timer(300, 0);
        this.m_flashTimer.addEventListener(egret.TimerEvent.TIMER, this.onFlashTimer, this);
    };
    LoadingUI_Eint_V3.prototype.createView = function () {
        this.m_bg = new egret.Shape();
        this.m_bg.width = this.width;
        this.m_bg.height = this.height;
        this.m_bg.graphics.beginFill(0xFFFFFF);
        this.m_bg.graphics.drawRect(0, 0, this.m_bg.width, this.m_bg.height);
        this.m_bg.graphics.endFill();
        this.m_procra = new egret.TextField();
        this.m_procra.x = this.width / 2 - 200;
        this.m_procra.y = this.height * 0.2;
        this.m_procra.size = 56;
        this.m_procra.textColor = 0x000000;
        this.m_procra.text = "卓越是为了奉献";
        this.m_logo = new egret.Bitmap();
        this.m_logo.x = this.width / 2 - 60;
        this.m_logo.y = this.height * 0.3;
        this.m_logo.width = 240;
        this.m_logo.height = 128;
        this.m_logo.texture = RES.getRes("eint_logo_png");
        this.m_progress = new egret.TextField();
        this.m_progress.x = this.width / 2 - 90;
        this.m_progress.y = this.height * 0.6;
        this.m_progress.textColor = 0x000000;
        this.m_progress.textAlign = "center";
        this.m_p2c = new egret.TextField();
        this.m_p2c.x = this.width / 2 - 80;
        this.m_p2c.y = this.height * 0.7;
        this.m_p2c.textColor = 0x000000;
        this.m_p2c.text = "触摸屏幕继续";
        this.m_p2c.visible = false;
        this.addChild(this.m_bg);
        this.addChild(this.m_procra);
        this.addChild(this.m_logo);
        this.addChild(this.m_progress);
        this.addChild(this.m_p2c);
    };
    LoadingUI_Eint_V3.prototype.onTchTimer = function (evt) {
        this.m_p2c.visible = true; // and flash
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.m_flashTimer.start();
    };
    LoadingUI_Eint_V3.prototype.onFlashTimer = function (evt) {
        ++this.m_flashCnt;
        if (0 == this.m_flashCnt % 3) {
            this.m_p2c.visible = false;
        }
        else {
            this.m_p2c.visible = true;
        }
    };
    LoadingUI_Eint_V3.prototype.onTouch = function (evt) {
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouch, this);
        this.m_flashTimer.stop();
        this.m_p2c.visible = true;
        this.visible = false;
    };
    LoadingUI_Eint_V3.prototype.setProgress = function (current, total) {
        this.m_progress.text = "准备中..." + (current / total * 100).toString().substr(0, 4) + "%";
    };
    LoadingUI_Eint_V3.prototype.setWinSize = function (wid, hei) {
        this.m_winWidth = wid;
        this.m_winHeight = hei;
    };
    /*
        接口方法。在加载进度增加时自动触发。
    */
    LoadingUI_Eint_V3.prototype.onProgress = function (current, total) {
        this.setProgress(current, total);
    };
    LoadingUI_Eint_V3.prototype.touch2C = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var retPromise;
            return __generator(this, function (_a) {
                retPromise = new Promise(function (resolve) {
                    _this.m_p2c.visible = true; // "Touch to continue" flash
                    _this.touchEnabled = true;
                    _this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (resv) { resolve(); }, _this);
                    _this.m_flashTimer.start();
                });
                return [2 /*return*/, retPromise];
            });
        });
    };
    return LoadingUI_Eint_V3;
}(egret.Sprite));
__reflect(LoadingUI_Eint_V3.prototype, "LoadingUI_Eint_V3", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI_Eint_V3.js.map