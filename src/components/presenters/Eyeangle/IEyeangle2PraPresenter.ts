/**
 *
 * @author 
 *
 */
interface IEyeangle2PraPresenter extends IPraPresenter,IPresenterWithThumb,IPresenterWithCa {

    showAngle(angle: CAngle): void; // Input the angle to show on screen and calculate the points.
//    setAngleArr(angleArr: Array<CAngle>): void; // PM do this!

    getAngle(): CAngle; // Get the angle to show on the screen.

    setImgWidth(w:number): void; // Set the width of the img shown on the screen.
    setImgHeight(h: number): void;

    getImgWidth(): number;
    getImgHeight(): number;

    inpUserAngle(angle: number): void; // Set the angle input by the user via the UI.
    submitUserAngle(): void; // Submit the angle input by the user via the UI to PM.
    nextAngle(): void; // Trigger when next angle button tapped.

    fillCurRank(rank:number):void; // Let PM to calculate and fill in via this func.
    getCurRank(): number;

//    rfgetScrImgRect(): CRect; // 获取经渲染过滤器输出后的图片区域。
//    rfgetScrThumbRect(): CRect;
    rfgetScrThumbSelRect(): gdeint.CRect; // 获取经渲染过滤器输出后的缩略图选择框区域。
    rfgetScrAngleVertexPt(): gdeint.CPoint;
    rfgetScrAngleEdge1Pt(): gdeint.CPoint;
    rfgetScrAngleEdge2Pt(): gdeint.CPoint;
    rfgetScrThQuestionerPt(): gdeint.CPoint;
}
