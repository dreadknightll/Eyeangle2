// /src/test/test_AngleCheckers.js

test("AngleCheckers" , function() {
    function testAngleChecker() //Very few tests. Additional tests require if bugs found!!
    {
        function test1() {
            var lc = new CAngleChecker();
            lc.setCorreAngle(25);
            lc.setInputAngle(16);
            equal(lc.checkAngle(),0);

            lc.setCorreAngle(29);
            lc.setInputAngle(35);
            equal(lc.checkAngle(),1);

            lc.setCorreAngle(30);
            lc.setInputAngle(37.2);
            equal(lc.checkAngle(),1);

            lc.setCorreAngle(40);
            lc.setInputAngle(36);
            equal(lc.checkAngle(),2);

            lc.setCorreAngle(100);
            lc.setInputAngle(104);
            equal(lc.checkAngle(),3);

            lc.setCorreAngle(90);
            lc.setInputAngle(94.5);
            equal(lc.checkAngle(),2);

            lc.setCorreAngle(-5);
            lc.setInputAngle(0);
            equal(lc.checkAngle(),2);

            lc.setCorreAngle(359);
            lc.setInputAngle(1);
            equal(lc.checkAngle(),3);

        }
        test1();
    }

    testAngleChecker();
});
