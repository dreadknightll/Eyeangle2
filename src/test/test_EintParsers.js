/*
 * /src/test/test_EintParsers.js
 * 测试各个解析器。
 */ 

test("EintParsers" , function() {
    function test1()
    {
        var res,dt;
        res = EintParsers.CaRatParser.parseFloat("1");
        dt = Math.abs(res - 1.0);
        ok(dt<0.00001);

        res = EintParsers.CaRatParser.parseFloat("2");
        dt = Math.abs(res - 2.0);
        ok(dt<0.00001);

        res = EintParsers.CaRatParser.parseFloat("-21");
        dt = Math.abs(res - 0.001);
        ok(dt<0.00001&&res>0);

        res = EintParsers.CaRatParser.parseFloat("2.34");
        dt = Math.abs(res - 2.34);
        ok(dt<0.00001);

        res = EintParsers.CaRatParser.parseFloat("-3.42");
        dt = Math.abs(res - 0.001);
        ok(dt<0.00001&&res>0);

        res = EintParsers.CaRatParser.parseFloat("");
        dt = Math.abs(res - 0.001);
        ok(dt<0.00001&&res>0);
        equal(res,0.001);

        res = EintParsers.CaRatParser.parseFloat("aba0");
        dt = Math.abs(res - 0.001);
        ok(dt<0.00001&&res>0);

        res = EintParsers.CaRatParser.parseFloat("klmn");
        dt = Math.abs(res - 0.001);
        ok(dt<0.00001&&res>0);

    }

    test1();

});
