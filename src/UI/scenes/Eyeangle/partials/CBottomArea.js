var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 *
 * 练习场景底部区域。
 *
 */
var CBottomArea = (function (_super) {
    __extends(CBottomArea, _super);
    function CBottomArea() {
        _super.call(this);
        this.m_bg = new egret.Shape();
    }
    CBottomArea.prototype.childrenCreated = function () {
        this.m_bg.graphics.beginFill(0x447700);
        this.m_bg.graphics.drawRect(0, 0, this.width, this.height);
        this.m_bg.graphics.endFill();
        this.bgGrp.addChild(this.m_bg);
    };
    return CBottomArea;
}(eui.Component));
