// /src/test/test_anglePraMachine.js

/*
var g2_imgPathList1 = new Array();
g2_imgPathList1[0] = "test_res/test_pm/img_005.jpg";
g2_imgPathList1[1] = "test_res/test_pm/logo_250.gif";
*/

test("praMachine_Angle" , function() {
    function testInitializing() {
        function test1() {
            //refreshImgPathList
            var pm = new CPraMachine_Eyeangle2();

            var tmp_angle_arr = new Array();

            var tmpAngle;

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgDir/Img001.jpg";
            tmp_angle_arr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgDir/Img002.jpg";
            tmp_angle_arr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgDir/Img003.jpg";
            tmp_angle_arr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgDir/Img001.jpg";
            tmp_angle_arr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgDir/Img001.jpg";
            tmp_angle_arr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "imgdir/img002.jPg";
            tmp_angle_arr.push(tmpAngle);

            equal(tmp_angle_arr.length , 6);

            pm.setAngleArr(tmp_angle_arr);
            pm.refreshImgPathList();

            equal(pm.m_imgPathList.length , 4);
            equal(pm.m_imgPathList[0],"imgDir/Img001.jpg");
            equal(pm.m_imgPathList[1],"imgDir/Img002.jpg");
            equal(pm.m_imgPathList[2],"imgDir/Img003.jpg");
            equal(pm.m_imgPathList[3],"imgdir/img002.jPg");

            equal(pm.getCurAngleTag(),-1);
            pm.startPra();
            equal(pm.getCurAngleTag(),0);
        }

        test1();
    }

    function testSetData()
    {
        function test1() //Normal case.
        {
            var pm = new CPraMachine_Eyeangle2();

            var angleArr = new Array();

            var tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 5;
            tmpAngle.m_isHor = false;
            tmpAngle.m_x = 10;
            tmpAngle.m_y = 15;
            tmpAngle.m_imgPath = "test_res/test_pm/logo_250.gif";

            angleArr.push(tmpAngle);

            tmpAngle = new CAngle();
            tmpAngle.m_angleValue = 12;
            tmpAngle.m_isHor = true;
            tmpAngle.m_x = 30;
            tmpAngle.m_y = 115;
            tmpAngle.m_imgPath = "test_res/test_pm/img_005.jpg";

            angleArr.push(tmpAngle);

            pm.setAngleArr(angleArr);

            equal(pm.m_angleArr.length , 2);
            equal(pm.m_angleArr[0].m_angleValue , 5);
            equal(pm.m_angleArr[0].m_isHor , false);
            equal(pm.m_angleArr[0].m_x , 10);
            equal(pm.m_angleArr[0].m_y , 15);
            equal(pm.m_angleArr[0].m_imgPath , "test_res/test_pm/logo_250.gif");

            equal(pm.m_angleArr.length , 2);
            equal(pm.m_angleArr[1].m_angleValue , 12);
            equal(pm.m_angleArr[1].m_isHor , true);
            equal(pm.m_angleArr[1].m_x , 30);
            equal(pm.m_angleArr[1].m_y , 115);
            equal(pm.m_angleArr[1].m_imgPath , "test_res/test_pm/img_005.jpg");

            pm.m_imgPathList[0] = "test_res/test_pm/img_005.jpg";
            pm.m_imgPathList[1] = "test_res/test_pm/logo_250.gif";

            pm.startPra();
            equal(pm.getCurImgTag() , 1);

        }

        function test2() //Border case.
        {
        }

        test1();
        test2();
    }

    function testProcess()
    {

        function test1()
        {
            var pm = new CPraMachine_Eyeangle2();

            var angleArr = new Array();

            angleArr[0] = new CAngle();
            angleArr[0].m_angleValue = 5;
            angleArr[0].m_imgPath = "test_res/test_pm/logo_250.gif";

            angleArr[1] = new CAngle();
            angleArr[1].m_angleValue = 25;
            angleArr[1].m_imgPath = "test_res/test_pm/img_005.jpg";

            var imgPathList1 = new Array();
            imgPathList1[0] = "test_res/test_pm/img_005.jpg";
            imgPathList1[1] = "test_res/test_pm/logo_250.gif";

            pm.setAngleArr(angleArr);
            pm.m_imgPathList = imgPathList1;

            equal(pm.m_curAngleTag , -1);
            pm.rePra();
            equal(pm.m_curAngleTag , 0);

            pm.inpAngle(5);

            equal(pm.m_curScore , 30);
            equal(pm.getCurImgTag() , 1);

            pm.nextAngle();
            pm.inpAngle(22);

            equal(pm.m_curScore , 50);
            equal(pm.getCurImgTag() , 0);

            equal(pm.m_finished , false);
            pm.nextAngle();
            equal(pm.m_finished , true);
            
            var i;
            for(i=0;i<200;++i)
            {
                pm.inpAngle(i);
            }
            equal(pm.m_curScore , 50);

            pm.clearPra();

            equal(pm.m_finished , false);
            equal(pm.m_curAngleTag , -1);
            equal(pm.m_curScore , 0);
            equal(pm.m_angleArr.length , 0);

            angleArr = new Array();

            angleArr[0] = new CAngle();
            angleArr[0].m_angleValue = 5;

            pm.setAngleArr(angleArr);
            pm.startPra();
            pm.inpAngle(5);

            equal(pm.m_curScore , 30);
            equal(pm.getCurImgTag() , -1);

            pm.clearPra();

            equal(pm.m_finished , false);
            equal(pm.m_curAngleTag , -1);
            equal(pm.m_curScore , 0);
            equal(pm.m_angleArr.length , 0);

        }

        test1();
    }

    function testSettingLensArrAndRepra()
    {
        var pm = new CPraMachine_Eyeangle2();

        var angleArr = new Array();

        angleArr[0] = new CAngle();
        angleArr[0].m_angleValue = 5;
        angleArr[0].m_imgPath = "test_res/test_pm/logo_250.gif";

        angleArr[1] = new CAngle();
        angleArr[1].m_angleValue = 25;
        angleArr[1].m_imgPath = "test_res/test_pm/img_005.jpg";

        pm.setAngleArr(angleArr);
        pm.startPra();

        pm.nextAngle();

        equal(pm.getCurElem().m_angleValue , 25);

        var angleArr2 = new Array();
        angleArr2[0] = new CAngle();
        angleArr2[0].m_angleValue = 7;
        angleArr2[0].m_imgPath = "test_res/test_pm/logo_250.gif";

        angleArr2[1] = new CAngle();
        angleArr2[1].m_angleValue = 99;
        angleArr2[1].m_imgPath = "test_res/test_pm/img_005.jpg";

        angleArr2[2] = new CAngle();
        angleArr2[2].m_angleValue = 430;
        angleArr2[2].m_imgPath = "test_res/test_pm/img_005.jpg";

        pm.setAngleArr(angleArr2);
        pm.startPra();
        equal(pm.getCurElem().m_angleValue , 7);

        equal(pm.getCurScore(),0);
        pm.inpAngle(7);
        equal(pm.getCurScore(),30);
        pm.nextAngle();
        pm.nextAngle();

        pm.inpAngle(280);
        equal(pm.getCurScore(),30);

    }

    function testClearPraRePra() {

        var pm = new CPraMachine_Eyeangle2();

        var tmpAngleArr = new Array();
        var tmpAngle;
        tmpAngle = new CAngle();
        tmpAngle.m_angleValue = 25;
        tmpAngleArr.push(tmpAngle);
        tmpAngle = new CAngle();
        tmpAngle.m_angleValue = 70;
        tmpAngleArr.push(tmpAngle);
        pm.setAngleArr(tmpAngleArr);

        equal(pm.getCurImgTag() , -1);
        equal(pm.getCurAngleTag() , -1);
        pm.rePra();
        equal(pm.getCurAngleTag() , 0);
        pm.inpAngle(4);
        pm.nextAngle();
        pm.inpAngle(70);
        pm.nextAngle();
        equal(pm.getCurAngleTag() , 2);
        equal(pm.getCurScore() , 30);
        pm.rePra();
        equal(pm.getCurAngleTag() , 0);
        equal(pm.getCurScore() , 0);
        pm.inpAngle(25);
        equal(pm.getCurScore() , 30);
        pm.nextAngle();
        pm.inpAngle(70);
        equal(pm.getCurScore() , 60);
        pm.clearPra();
        equal(pm.getCurAngleTag() , -1);
        equal(pm.getCurScore() , 0);

    }

    testInitializing();
    testSetData();
    testProcess();
    testSettingLensArrAndRepra();
    testClearPraRePra();

});
// JavaScript Document
