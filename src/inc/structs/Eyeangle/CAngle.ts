/*
 * /src/structs/CAngle.ts
 * 
 * 角度结构体。描述角度。包括边的斜率、长度以及顶点坐标等信息。 
 * 
 */

class CAngle extends gdeint.CPraElemBase
{
	public m_vertex:gdeint.CPoint;

	public m_edge1Len:number;
    public m_edge1Angle:number;
    public m_angleValue:number;
    public m_imgPath:string;
    public m2_imgResName:string;

    public constructor()
    {
        super();
        this.m_className = "CAngle";
        this.m_vertex = new gdeint.CPoint();
    }
};
