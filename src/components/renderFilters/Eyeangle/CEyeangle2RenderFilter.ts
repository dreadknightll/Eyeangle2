/**
 *
 * 图像显示过滤器。用于调整图像输出。主要是应用横竖校准系数。可单元测试。
 *
 */
class CEyeangle2RenderFilter implements IEyeangle2RenderFilter {
	public constructor() {
	}

	public m_caRat:number;

    public setCaRat(caRat: number): void {
        this.m_caRat = caRat;
    }

    public _getCaRat():number {
        return this.m_caRat;
    }

    /*
     * 计算某一横宽经过滤后在屏幕输出的宽度。除了适用于x坐标还适用于水平线段的长度。
     */ 
    public xOConv(v: number): number {
        var ret:number;
        ret = v*this.m_caRat;
        return ret;
    }

    public xIConv(v: number): number {
        var ret: number;
        ret = v / this.m_caRat;
        return ret;
    }

    public yOConv(v:number) {
        return v;
    }

    public yIConv(v:number) {
        return v;
    }

    /*
     * 计算某一点经过滤后在屏幕上的坐标。
     */ 
    public ptOConv(pt: gdeint.CPoint): gdeint.CPoint {
        var ret:gdeint.CPoint;
        ret = new gdeint.CPoint();

        ret.m_x = this.xOConv(pt.m_x);
        ret.m_y = pt.m_y;

        return ret;
    }

    /*
     * 计算某一屏幕点在过滤前的原始坐标。
     */ 
    public ptIConv(pt: gdeint.CPoint): gdeint.CPoint {
        var ret:gdeint.CPoint;
        ret = new gdeint.CPoint(); 
        ret.m_x = pt.m_x / this.m_caRat;
        ret.m_y = pt.m_y;
        return ret;
    }

    /*
     * 计算某一原始区域过滤输出后的屏幕区域。
     */ 
    public rectOConv(rect: gdeint.CRect): gdeint.CRect {
        var ret:gdeint.CRect;
        ret = new gdeint.CRect;
        ret.m_left = rect.m_left*this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width*this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    }

    /*
     * 计算某一屏幕区域在过滤前的原始区域。
     */ 
    public rectIConv(rect: gdeint.CRect): gdeint.CRect {
        var ret:gdeint.CRect;
        ret = new gdeint.CRect();
        ret.m_left = rect.m_left / this.m_caRat;
        ret.m_top = rect.m_top;
        ret.m_width = rect.m_width / this.m_caRat;
        ret.m_height = rect.m_height;
        return ret;
    }

    /*
     * 计算某一角度对象经过滤后在屏幕输出的角度对象。
     */ 
    public angleOConv(angle: CAngle): CAngle {
        //Change vertex position only.
        var ret: CAngle;
        ret = angle;
        ret.m_vertex.m_x *= this.m_caRat;
        return ret;
    }

    /*
     * 计算某一屏幕角度对象在过滤前的原始角度对象。
     */ 
    public angleIConv(angle: CAngle): CAngle {
        var ret:CAngle;

        ret = new CAngle();
        ret.m_vertex = new gdeint.CPoint();
        ret.m_vertex.m_x = angle.m_vertex.m_x;
        ret.m_vertex.m_y = angle.m_vertex.m_y;
        ret.m_edge1Len = angle.m_edge1Len;
        ret.m_edge1Angle = angle.m_edge1Angle;
        ret.m_angleValue = angle.m_angleValue;
        ret.m_imgPath = angle.m_imgPath;

        ret.m_vertex.m_x /= 3;
        return ret;
    }
};
