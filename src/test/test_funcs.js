// /src/test/test_funcs.js

test("Generate m numbers <= n,no repeat" , function() {

	function test1() // Special case.
	{
		var resArr;
		resArr = randomNums(200,0);
		equal(resArr.length,0);

		resArr = randomNums(200,-1);
		equal(resArr.length,0);
	}

	function test2()
	{
		var resArr , resArr2;
		var maxNum = 100;
		var cnt = 4;
		resArr = randomNums(100,4);
		equal(resArr.length,4);
		var i;
		for(i=0;i<resArr.length;++i)
		{
			if(!(resArr[i]<=maxNum))
			{
				ok(false , "resArr["+i+"]="+resArr[i]+",upper limit exceeded!");
			}

			if(!(resArr[i]>0))
			{
				ok(false,"resArr["+i+"]="+resArr[i]+",should be an integer > 0!");
			}
		}
		
		var testCnt = 5;
		
		var testTag;
		
		var sameCnt = 0;
		for(testTag=0;testTag<5;++testTag)
		{
			resArr2 = randomNums(100,4);
			equal(resArr2.length,4);
			var i;
			for(i=0;i<resArr2.length;++i)
			{
				if(!(resArr2[i]<=maxNum))
				{
					ok(false , "resArr2["+i+"]="+resArr2[i]+",upper limit exceeded!");
				}

				if(!(resArr2[i]>0))
				{
					ok(false,"resArr2["+i+"]="+resArr2[i]+",should be an integer > 0!");
				}
			}

			for(i=0;i<resArr2.length-1;++i)
			{
				var exitLoop = false;
				var j;
				for(j=i+1;j<resArr2.length;++j)
				{
					if(resArr2[i]==resArr2[j])
					{
						ok(false,"resArr2["+i+"]==resArr2["+j+"]!But all should be different!");
						exitLoop = true;
						break;
					}
				}
				if(exitLoop)
				{
					break;
				}
			}
		
			for(i=0;i<resArr2.length;++i)
			{
				if(resArr[i]!=resArr2[i])
				{
					break;
				}
			}
			if(resArr2.length==i)
			{
				++sameCnt;

				if(sameCnt > testCnt / 2)
					ok(false,"resArr should not be the same as resArr2");
			}
			else
			{
				ok(true);
			}
		}
	}
	
	function test3() // 产生大量数据。要求全部符合要求。
	{

        var i , testCnt;
        
        testCnt = 50000; // 进行 50000 次测试。
        for(i=0;i<testCnt;++i)
        {
            var j,resArr , allOK;
            allOK = true;
            resArr = randomNums(100,8);
            
            for(j=0;j<8;++j)
            {
                if(resArr[j] <= 100 && resArr[j] >= 1)
                {
                    
                }
                else {
                    ok(false , "upper limit exceeded!! Value:" + resArr[j] + ",tag:"+j);
                    allOK = false;
                    break;
                }
            }
            if(i%5000 == 0 && allOK) {
                ok(true , "5000 groups OK!");
                allOK = true;
            }
            
        }
	}

	test1();
	test2();
	test3();
});


test("Basic functions for getting angle between points",function() {
    {
        function test1() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.x = 20;
            vloc.y = 30;

            eloc.x = 20;
            eloc.y = 30;

            equal(getAngleBetweenPoints0(vloc,eloc),0);
        }
        function test2() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.x = 20;
            vloc.y = 30;

            eloc.x = 50;
            eloc.y = 30;

            equal(getAngleBetweenPoints0(vloc,eloc),0);
        }
        function test3() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 50;
            eloc.m_y = 40;

            equal(getAngleBetweenPoints0(vloc,eloc),45);
        }
        function test4() {
            var vloc,eloc;
            vloc = new CPoint();
            eloc = new CPoint();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 40;
            eloc.m_y = 40;

            equal(getAngleBetweenPoints0(vloc,eloc),90);
        }
        function test5() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 30;
            eloc.m_y = 40;

            equal(getAngleBetweenPoints0(vloc,eloc),135);
        }
        function test6() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 30;
            eloc.m_y = 50;

            equal(getAngleBetweenPoints0(vloc,eloc),180);
        }
        function test7() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 30;
            eloc.m_y = 60;

            equal(getAngleBetweenPoints0(vloc,eloc),225);
        }
        function test8() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 40;
            eloc.m_y = 60;

            equal(getAngleBetweenPoints0(vloc,eloc),270);
        }
        function test9() {
            var vloc,eloc;
            vloc = new Object();
            eloc = new Object();

            vloc.m_x = 40;
            vloc.m_y = 50;

            eloc.m_x = 50;
            eloc.m_y = 60;

            equal(getAngleBetweenPoints0(vloc,eloc),315);
        }

        function test10() {
            var vertex;
            var pointA;
            var r1_angle;
            var va_len;

            var xx,xy;
            var expected_xx,expected_xy;

            ////////////////////////////////////////////
            //inputs:
            vertex = new CPoint();
            vertex.m_x = 3;
            vertex.m_y = 4;
            r1_angle = 30;
            va_len = 10;

            //expects:
            expected_xx,expected_xy;


            expected_xx = 3 + 5 * Math.sqrt(3);
            expected_xy = 4 + 5;

            pointA = calEdge1Point(vertex,r1_angle,va_len);
            xx = pointA.m_x;
            xy = pointA.m_y;

            ok(Math.abs(xx - expected_xx) < 0.00001,"x of pointA incorrect!!Expected:" + expected_xx + ",actual:" + xx);
            ok(Math.abs(xy - expected_xy) < 0.00001,"y of pointA incorrect!!Expected:" + expected_xy + ",actual:" + xy);


            ////////////////////////////////////////////
            //inputs:
            vertex = new CPoint();
            vertex.m_x = -2;
            vertex.m_y = 10;
            r1_angle = 135;
            va_len = 8;

            //expects:
            expected_xx,expected_xy;

            expected_xx = -2 - 4 * Math.sqrt(2);
            expected_xy = 10 + 4 * Math.sqrt(2);

            pointA = calEdge1Point(vertex,r1_angle,va_len);
            xx = pointA.m_x;
            xy = pointA.m_y;

            ok(Math.abs(xx - expected_xx) < 0.00001,"x of pointA incorrect!!Expected:" + expected_xx + ",actual:" + xx);
            ok(Math.abs(xy - expected_xy) < 0.00001,"y of pointA incorrect!!Expected:" + expected_xy + ",actual:" + xy);



            ////////////////////////////////////////////
            //inputs:
            vertex = new CPoint();
            vertex.m_x = -5;
            vertex.m_y = -2;
            r1_angle = 210;
            va_len = 5;

            //expects:
            expected_xx,expected_xy;

            expected_xx = -5 - 5 / 2 * Math.sqrt(3);
            expected_xy = -2 - 5 / 2;

            pointA = calEdge1Point(vertex,r1_angle,va_len);
            xx = pointA.m_x;
            xy = pointA.m_y;

            ok(Math.abs(xx - expected_xx) < 0.00001,"x of pointA incorrect!!Expected:" + expected_xx + ",actual:" + xx);
            ok(Math.abs(xy - expected_xy) < 0.00001,"y of pointA incorrect!!Expected:" + expected_xy + ",actual:" + xy);


            ////////////////////////////////////////////
            //inputs:
            vertex = new CPoint();
            vertex.m_x = -10;
            vertex.m_y = 10;
            r1_angle = 300;
            va_len = 5;

            //expects:
            expected_xx,expected_xy;


            expected_xx = -10 + 5 * 1 / 2;
            expected_xy = 10 - 5 * Math.sqrt(3) / 2;

            pointA = calEdge1Point(vertex,r1_angle,va_len);
            xx = pointA.m_x;
            xy = pointA.m_y;

            ok(Math.abs(xx - expected_xx) < 0.00001,"x of pointA incorrect!!Expected:" + expected_xx + ",actual:" + xx);
            ok(Math.abs(xy - expected_xy) < 0.00001,"y of pointA incorrect!!Expected:" + expected_xy + ",actual:" + xy);

            ///////////////char_input/////////////////////////
            //inputs:
            vertex = new CPoint();
            vertex.m_x = "-10";
            vertex.m_y = "10";
            r1_angle = "300";
            va_len = "5";

            //expects:
            expected_xx,expected_xy;


            expected_xx = -10 + 5 * 1 / 2;
            expected_xy = 10 - 5 * Math.sqrt(3) / 2;

            pointA = calEdge1Point(vertex,r1_angle,va_len);
            xx = pointA.m_x;
            xy = pointA.m_y;

            ok(Math.abs(xx - expected_xx) < 0.00001,"x of pointA incorrect!!Expected:" + expected_xx + ",actual:" + xx);
            ok(Math.abs(xy - expected_xy) < 0.00001,"y of pointA incorrect!!Expected:" + expected_xy + ",actual:" + xy);

        }

        function test11() {

            //inputs:
            var vertex;
            var r1_angle,r2_angle;
            var va_len;

            //outputs:
            var vx_len,x_point;

            //temp:
            var sr_angle;
            var a_point_t,x_point_t;
            var actual_xx,actual_xy;
            //expects:
            var expected_vx_len; //temp
            var expected_xx,expected_xy;


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = 0;
            vertex.m_y = 0;

            r1_angle = 30;
            r2_angle = 30;
            va_len = 2;

            //expects:
            expected_xx = Math.sqrt(3) / 2;
            expected_xy = 3 / 2;

            expected_vx_len = Math.sqrt(3);

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            ok(Math.abs(vx_len - expected_vx_len) < 0.0001,"vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = 10;
            vertex.m_y = -5;

            r1_angle = 30;
            r2_angle = 120;
            va_len = 2;

            //			window.alert("cos150:"+Math.cos(150/180*Math.PI));
            //expects:
            expected_xx = 10 - Math.sqrt(3) / 2;
            expected_xy = -5 + 1 / 2;

            expected_vx_len = 1;

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            ok(Math.abs(vx_len - expected_vx_len) < 0.0001,"vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = 4;
            vertex.m_y = -2;

            r1_angle = 150;
            r2_angle = 60;
            va_len = 2;

            //expects:
            expected_xx = 4 - Math.sqrt(3) / 2;
            expected_xy = -2 - 1 / 2;

            expected_vx_len = 1;

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            ok(Math.abs(vx_len - expected_vx_len) < 0.0001,"vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = -1;
            vertex.m_y = 3;

            r1_angle = 120;
            r2_angle = 120;
            va_len = 4;

            //expects:
            expected_xx = -1 - 1;
            expected_xy = 3 - Math.sqrt(3);

            expected_vx_len = 2;

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            ok(Math.abs(vx_len - expected_vx_len) < 0.0001,"vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = -5;
            vertex.m_y = -2;

            r1_angle = 240;
            r2_angle = 60;
            va_len = 2;

            //expects:
            expected_xx = -5 + 1 / 2;
            expected_xy = -2 - Math.sqrt(3) / 2;

            expected_vx_len = Math.sqrt(3);

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            //			ok(Math.abs(vx_len - expected_vx_len)<0.0001 , "vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = -8;
            vertex.m_y = -7;

            r1_angle = 225;
            r2_angle = 135;
            va_len = 3;

            //expects:
            expected_xx = -8 + 3 / 2 * Math.sqrt(2);
            expected_xy = -7 + 0;

            expected_vx_len = Math.sqrt(3);

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            //			ok(Math.abs(vx_len - expected_vx_len)<0.0001 , "vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = -2;
            vertex.m_y = 3;

            r1_angle = 330;
            r2_angle = 60;
            va_len = 2;

            //expects:
            expected_xx = -2 + Math.sqrt(3) / 2;
            expected_xy = 3 + 1 / 2;

            expected_vx_len = Math.sqrt(3);

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            //			ok(Math.abs(vx_len - expected_vx_len)<0.0001 , "vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);


            //////////////////////////////

            //inputs:
            vertex = new CPoint();
            vertex.m_x = -8;
            vertex.m_y = -1;

            r1_angle = 330;
            r2_angle = 150;
            va_len = 2;

            //expects:
            expected_xx = -8 - Math.sqrt(3) / 2;
            expected_xy = -1 + 3 / 2;

            expected_vx_len = Math.sqrt(3);

            ////
            a_point_t = new CPoint();
            x_point_t = new CPoint();

            var vx_len = calVXLen(va_len,r2_angle);

            //			ok(Math.abs(vx_len - expected_vx_len)<0.0001 , "vx_len incorrect!Expected:" + expected_vx_len + ",actual:" + vx_len);

            x_point = calEdge2Point(vertex,r1_angle,va_len,r2_angle);

            actual_xx = x_point.m_x;
            actual_xy = x_point.m_y;

            ok(Math.abs(actual_xx - expected_xx) < 0.0001,"X point x location incorrect!Expected:" + expected_xx + ",actual:" + actual_xx);
            ok(Math.abs(actual_xy - expected_xy) < 0.0001,"X point y location incorrect!Expected:" + 　expected_xy + ",actual:" + 　actual_xy);

        }

        test1();
        test2();
        test3();
        test4();
        test5();
        test6();
        test7();
        test8();
        test9();
        test10();
        test11();
    }
});

test("Converting tag to pic xml resource name" , function() {

    var expValue , actualValue;
    expValue = "a";

    actualValue = tag2PicResName(0);
    expValue = "";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(3);
    expValue = "pic003_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(9);
    expValue = "pic009_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(10);
    expValue = "pic010_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(99);
    expValue = "pic099_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(100);
    expValue = "pic100_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(999);
    expValue = "pic999_json";
	equal(actualValue,expValue);

    actualValue = tag2PicResName(1000);
    expValue = "";
	equal(actualValue,expValue);

});

test("Getting tag from img resource name" , function() {
    var actualValue , expValue;

    actualValue = getTagFromResName("img_010_gif");
    expValue = 10;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("img_211_gif");
    expValue = 211;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("img_003_gif");
    expValue = 3;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("pic004_json");
    expValue = 4;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("pic018_json");
    expValue = 18;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("pic903_json");
    expValue = 903;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("pic2903_json");
    expValue = -1;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("img_1003_gif");
    expValue = -1;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("pic-32_json");
    expValue = -1;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("img_-233_gif");
    expValue = -1;
    equal(actualValue , expValue);

    actualValue = getTagFromResName("fewwefd");
    expValue = -1;
    equal(actualValue , expValue);

    actualValue = getTagFromResName(" img_823_gif  ");
    expValue = 823;
    equal(actualValue , expValue);

});

