/**
 *
 * 数字点阵转换器。用于把数字转换成点阵。程序中把得分以三行 旗子/点/叉 方式输出就要用到本转换器。 
 *
 */
class CScoreFlagRectAdapter implements IScoreFlagRect {
    private m_sfr;
	public constructor() {
        this.m_sfr = new ScoreFlagRect();
	}

    public setCnts(v1:number,v2:number):void{
        this.m_sfr.setCnts(v1,v2);
    }

    public getFlagArr(): Array<Array<number>> {
        var ret: Array<Array<number>>;
        ret = new Array<Array<number>>();
        var tmp = this.m_sfr.getFlagArr();
        var i,j;
        for(i = 0;i < 3;++i)
        {
            ret[i] = new Array<number>();
            for(j = 0;j < 10;++j)
            {
                ret[i][j] = tmp[i][j];
            }
        }
        return ret;
    }
}
