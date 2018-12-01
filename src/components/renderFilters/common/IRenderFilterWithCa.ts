/**
 *
 * @author 
 *
 */
interface IRenderFilterWithCa extends IRenderFilter {
    setCaRat(caRat:number):void;
    _getCaRat():number;
/*    horValueOConv(v:number):number;
    horValueIConv(v: number): number;*/
    rectOConv(rect:gdeint.CRect):gdeint.CRect;
    rectIConv(rect: gdeint.CRect): gdeint.CRect;
}
