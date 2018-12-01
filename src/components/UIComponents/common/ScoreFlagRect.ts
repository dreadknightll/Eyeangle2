/*
 * /src/components/ScoreFlagRect.ts
 * IScoreFlagRectAdapter的实现体。
 */ 

function isInteger(obj) {
    return obj%1 === 0;
}

function ScoreFlagRect()
{
    this.m_value1 = 0;
    this.m_value2 = 0;
    
    this.setCnts = function(v1,v2)
    {
        this.m_value1 = v1;
        this.m_value2 = v2;
    }
    
    this.getFlagArr = function()
    {
        
        //1、Init:
        var ret = new Array(); // 10 * 3. 0:dot 1:flag 2:cross
        
        var i,j;
        for(i=0;i<3;++i)
        {
            ret[i] = new Array();
            for(j=0;j<10;++j) {
                ret[i][j] = 0;
            }
        }
        
        //Validate inputs:
        
        if("number"!=typeof(this.m_value1)||"number"!=typeof(this.m_value2))
        {
            return ret;
        }
        
        if(!isInteger(this.m_value1)||!isInteger(this.m_value2))
        {
            return ret;
        }
        
        if(this.m_value1 < 0 || this.m_value2 < 0)
        {
            return ret;
        }
        
        if(this.m_value1+this.m_value2>30)
        {
            return ret;
        }
        
        //2、Fill1 flags:
        
        var startVal = 0; //Range: 0-29
        var endVal = this.m_value1 - 1; //Range: 0-29
        
        if(endVal >= startVal) { //Do nothing if startVal>endVal
            if(Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
            {
                for(j = startVal;j <= endVal;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 1;
                }
            }
            else //Start and end different line.
            {
                for(j = startVal%10;j < 10;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 1;
                }
                for(i = Math.floor(startVal / 10) + 1;i < Math.floor(endVal / 10);++i) {
                    for(j = 0;j < 10;++j) {
                        ret[i][j] = 1;
                    }
                }
                
                for(j = 0;j <= Math.floor(endVal % 10);++j) {
                    ret[Math.floor(endVal / 10)][j] = 1;
                }
            }
        }
        
        //3、Fill dots:
        startVal = this.m_value1;
        endVal = 29 - this.m_value2;
        
        if(endVal >= startVal) { //Do nothing if startVal>endVal
            if(Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
            {
                for(j = startVal;j <= endVal;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 0;
                }
            }
            else //Start and end different line.
            {
                for(j = startVal%10;j < 10;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 0;
                }
                for(i = Math.floor(startVal / 10) + 1;i < Math.floor(endVal / 10);++i) {
                    for(j = 0;j < 10;++j) {
                        ret[i][j] = 0;
                    }
                }
                
                for(j = 0;j <= Math.floor(endVal % 10);++j) {
                    ret[Math.floor(endVal / 10)][j] = 0;
                }
            }
        }
        
        //4、Fill3(Crosses):
        
        startVal = 30-this.m_value2;
        endVal = 29;
        
        if(endVal >= startVal) { //Do nothing if startVal>endVal
            if(Math.floor(startVal / 10) == Math.floor(endVal / 10)) //Start and end same line.
            {
                for(j = startVal;j <= endVal;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 2;
                }
            }
            else //Start and end different line.
            {
                for(j = startVal%10;j < 10;++j) {
                    ret[Math.floor(startVal / 10)][j % 10] = 2;
                }
                
                for(i = Math.floor(startVal / 10) + 1;i < Math.floor(endVal / 10);++i)
                {
                    for(j = 0;j < 10;++j)
                    {
                        ret[i][j] = 2;
                    }
                }
                
                for(j = 0;j <= Math.floor(endVal % 10);++j)
                {
                    ret[Math.floor(endVal / 10)][j] = 2;
                }
            }
        }
        
        return ret;
    }
}