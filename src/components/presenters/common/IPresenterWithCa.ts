/**
 *
 * @author 
 *
 */
interface IPresenterWithCa {
    setRenderFilter(rf: IRenderFilterWithCa): void;
    getRenderFilter():IRenderFilterWithCa;
    setCaRat(caRat:number): void;
}