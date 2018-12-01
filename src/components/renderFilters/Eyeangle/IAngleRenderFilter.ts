/**
 *
 * @author 
 *
 */
interface IAngleRenderFilter extends IRenderFilter {
    angleOConv(angle: CAngle): CAngle;
    angleIConv(angle: CAngle): CAngle;
}
