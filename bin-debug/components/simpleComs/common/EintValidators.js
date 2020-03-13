var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *  /src/components/EintValidators.ts
 * 聚集了自己写的检验器。例如：检验用户输入的文本是否符合要求。
 */
var EintValidators;
(function (EintValidators) {
    var CaRatValidator = (function () {
        function CaRatValidator() {
        }
        CaRatValidator.validate = function (str) {
            var ret;
            ret = true;
            var tmp = parseFloat(str);
            if (isNaN(tmp) || tmp < 0.00001) {
                ret = false;
            }
            return ret;
        };
        return CaRatValidator;
    }());
    EintValidators.CaRatValidator = CaRatValidator;
    __reflect(CaRatValidator.prototype, "EintValidators.CaRatValidator");
})(EintValidators || (EintValidators = {}));
