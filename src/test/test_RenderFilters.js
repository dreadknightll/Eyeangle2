/*
 * /src/test/test_RenderFilters.js
 * 测试各个渲染过滤器。
 */ 

test("RenderFilters",function() {
    function testFilterWithCa() {
        function testWithRect() {
            var rectSrc,rf,rectRes;
//            rf = new CRenderFilterWithCa();
            rf = new CEyeangle2RenderFilter();
            rf.setCaRat(3);

            //rectOConv
            rectSrc = new CRect();
            rectSrc.m_left = 10;
            rectSrc.m_top = 20;
            rectSrc.m_width = 80;
            rectSrc.m_height = 100;

            rectRes = rf.rectOConv(rectSrc);
            equal(rectRes.m_left , 30);
            equal(rectRes.m_top,20);
            equal(rectRes.m_width,240);
            equal(rectRes.m_height,100);

            //rectIConv
            rectSrc = new CRect();
            rectSrc.m_left = 30;
            rectSrc.m_top = 40;
            rectSrc.m_width = 80;
            rectSrc.m_height = 80;

            rectRes = rf.rectIConv(rectSrc);
            equal(rectRes.m_left,10);
            equal(rectRes.m_top,40);
            ok(rectRes.m_width>26.6666666 && rectRes.m_width<26.6666667);
            equal(rectRes.m_height,80);

        }

        function testWithAngle() {
            var angleSrc,rf,angleRes;
//            rf = new CRenderFilterWithCa();
            rf = new CEyeangle2RenderFilter();
            rf.setCaRat(3);

            //angleOConv
            angleSrc = new CAngle();
            angleSrc.m_vertex = new CPoint();
            angleSrc.m_vertex.m_x = 90;
            angleSrc.m_vertex.m_y = 40;
            angleSrc.m_angleValue = 25;

            angleRes = rf.angleOConv(angleSrc);
            equal(angleRes.m_vertex.m_x , 270);
            equal(angleRes.m_vertex.m_y , 40);
            equal(angleRes.m_angleValue , 25);

            //angleIConv
            angleSrc = new CAngle();
            angleSrc.m_vertex = new CPoint();
            angleSrc.m_vertex.m_x = 120;
            angleSrc.m_vertex.m_y = 50;
            angleSrc.m_angleValue = 35;

            angleRes = rf.angleIConv(angleSrc);
            equal(angleRes.m_vertex.m_x,40);
            equal(angleRes.m_vertex.m_y,50);
            equal(angleRes.m_angleValue,35);

        }

        testWithRect();
        testWithAngle();
    }

    testFilterWithCa();
});
