/**
 * Created by Dread Knight on 2016-06-12.
 *
 * 用于比较用户输入的目测角度和正确角度。根据目测准确度返回结果。 
 * 
*/
class CAngleChecker
{
    private m_correAngle:number;
    private m_inputAngle:number;
    
    /*
     * 设置正确角度值。
     */ 
    public setCorreAngle(angle:number)
    {
        this.m_correAngle = angle;
    }

    /*
     * 设置用户输入的角度值。
     */ 
    public setInputAngle(angle:number)
    {
        this.m_inputAngle = angle;
    }

    /*
     * 检验用户目测的准确度，返回评定结果。
     */ 
    public checkAngle():number
    {
        var ret:number = -1;
        var diff:number,diffRat;
        diff = Math.abs(this.m_correAngle - this.m_inputAngle);
        if(diff>180)
        {
            diff = 360 - diff;
        }
        diffRat = diff/this.m_correAngle;

        if(this.m_correAngle<30)
        {
            if(diff<3)
            {
                ret = 3;
            }
            else if(diff<6)
            {
                ret = 2;
            }
            else if(diff<9)
            {
                ret = 1;
            }
            else
            {
                ret = 0;
            }
        }
        else if(this.m_correAngle<90)
        {
            if(diffRat < 0.1)
            {
                ret = 3;
            }
            else if(diffRat < 0.2)
            {
                ret = 2;
            }
            else if(diffRat < 0.3)
            {
                ret = 1;
            }
            else
            {
                ret = 0;
            }
        }
        else
        {
            if(diffRat < 0.05)
            {
                ret = 3;
            }
            else if(diffRat < 0.1)
            {
                ret = 2;
            }
            else if(diffRat < 0.15)
            {
                ret = 1;
            }
            else
            {
                ret = 0;
            }
        }

        return ret;
    }
};
