/*
 * 
 * 函数杂烩。
 * 
 */

function tag2PicResName(tag:number):string {
    function _isInteger(obj) {
        return obj%1 === 0;
    }
    var ret:string = "";

    if(!_isInteger(tag) || tag <= 0 || tag >= 1000) {
        ret = "";
    }
    else if(tag < 10) {
        return "pic00" + tag + "_json";
    }
    else if(tag <100) {
        return "pic0" + tag + "_json";
    }
    else {
        return "pic" + tag + "_json";
    }

    return ret;
}

function getTagFromResName(resName:string):number // 不支持大于等于1000的下标值。
{
    var ret:number = -1;
    var trimmedStr = resName.trim();
    var numStr = "";

    if(trimmedStr.substr(0,3) == "pic" && trimmedStr.charAt(6) == "_") // is pic
    {
        numStr = trimmedStr.substr(3,3);
        ret = parseInt(numStr);
        if(ret < 0 || ret >= 1000) {
            ret = -1;
        }
    }
    else if(resName.trim().substr(0,4) == "img_" && trimmedStr.charAt(7) == "_") // is img
    {
        numStr = trimmedStr.substr(4,3);
        ret = parseInt(numStr);
        if(ret < 0 || ret >= 1000) {
            ret = -1;
        }
    }
    else
    {
        ret = -1;
    }

    return ret;
}

/*
getAngleBetweenPoints:
	Description:Get the angle degree between the line between two points and horizontal/vertical line.
	Parameters:
		vertexLoc:The location of the vertex.
		endLoc:The location of end point.

	Return value:
		The angle decided by two locations. [0,360) .
*/
function getAngleBetweenPoints0(vertexLoc:gdeint.CPoint,endLoc:gdeint.CPoint) {
    var ret;

    if(endLoc.m_x == vertexLoc.m_x) {
        if(endLoc.m_y == vertexLoc.m_y) {
            ret = 0;
        }
        else if(endLoc.m_y > vertexLoc.m_y) {
            ret = 270;
        }
        else {
            ret = 90;
        }
    }
    else {
        ret = Math.atan((vertexLoc.m_y - endLoc.m_y) / (endLoc.m_x - vertexLoc.m_x)) * 180 / Math.PI;

        if(endLoc.m_x < vertexLoc.m_x) // 二、三象限
        {
            ret += 180;
        }
        if(vertexLoc.m_x == endLoc.m_x && endLoc.m_y > vertexLoc.m_y) {
            ret += 360;
        }
        if(endLoc.m_x > vertexLoc.m_x && vertexLoc.m_y < endLoc.m_y) //第四象限
        {
            if(ret < 0)
                ret += 360;
        }
    }
    return ret;
}

function calVXLen(va_len,angleValue) {
    var ret;

    ret = Math.abs(va_len * Math.cos(angleValue / 180 * Math.PI));

    return ret;
}

function calEdge1Point(vertex,edge1_angle,va_len) //not unit tested.
{
    var ret;

    ret = new gdeint.CPoint();

    ret.m_x = parseFloat(vertex.m_x) + parseFloat(va_len) * Math.cos(parseFloat(edge1_angle) / 180 * Math.PI);
    ret.m_y = parseFloat(vertex.m_y) + parseFloat(va_len) * Math.sin(parseFloat(edge1_angle) / 180 * Math.PI);

    return ret;
}

function calEdge2Point(vertex:gdeint.CPoint,edge1_angle:number,va_len:number,angleValue:number):gdeint.CPoint {
    var ret:gdeint.CPoint;
    ret = new gdeint.CPoint();

    var sr_angle:number;
    var tmp_xx:number,tmp_xy:number;

    //1.Calculate the length of VX.
    var vx_len:number;
    vx_len = calVXLen(va_len,angleValue);

    //2.Calculate the angle of R.
    sr_angle = edge1_angle + angleValue;
    while(sr_angle > 360) {
        sr_angle -= 360;
    }

    //3.Calculate the location of edge2point.

    tmp_xx = vx_len * Math.cos(sr_angle / 180 * Math.PI);
    tmp_xy = vx_len * Math.sin(sr_angle / 180 * Math.PI);

    ret.m_x = tmp_xx + vertex.m_x;
    ret.m_y = tmp_xy + vertex.m_y;

    return ret;
}
