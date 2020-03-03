var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *  /src/components/EintParsers.ts
 * 聚集了自己写的解析器。
 */
var EintParsers;
(function (EintParsers) {
    var CaRatParser = (function () {
        function CaRatParser() {
        }
        CaRatParser.parseFloat = function (str) {
            //  Least result: 0.001
            var ret;
            ret = parseFloat(str);
            if (isNaN(ret) || ret < 0.001) {
                ret = 0.001;
            }
            return ret;
        };
        return CaRatParser;
    }());
    EintParsers.CaRatParser = CaRatParser;
    __reflect(CaRatParser.prototype, "EintParsers.CaRatParser");
})(EintParsers || (EintParsers = {}));
