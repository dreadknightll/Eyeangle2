/**
 *
 * @author 
 *
 */
interface IPresenterWithThumb {
    setITM(itm:ImgThumbModelAdapter):void;

    inpImgSelPt(pt:gdeint.CPoint): void;
    inpThSelPt(thSelPt: gdeint.CPoint): void;

    inpImgSelWidth(w:number): void;
    inpImgSelHeight(h:number): void;

    getImgRect(): gdeint.CRect; // 获取输出的图片区域。
    getThumbRect(): gdeint.CRect;

}
