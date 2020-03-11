var CAngleChecker = (function () {
    function CAngleChecker() {
    }
    CAngleChecker.prototype.setCorreAngle = function (angle) {
        this.m_correAngle = angle;
    };
    CAngleChecker.prototype.setInputAngle = function (angle) {
        this.m_inputAngle = angle;
    };
    CAngleChecker.prototype.checkAngle = function () {
        var ret = -1;
        var diff, diffRat;
        diff = Math.abs(this.m_correAngle - this.m_inputAngle);
        if (diff > 180) {
            diff = 360 - diff;
        }
        diffRat = diff / this.m_correAngle;
        if (this.m_correAngle < 30) {
            if (diff < 3) {
                ret = 3;
            }
            else if (diff < 6) {
                ret = 2;
            }
            else if (diff < 9) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        else if (this.m_correAngle < 90) {
            if (diffRat < 0.1) {
                ret = 3;
            }
            else if (diffRat < 0.2) {
                ret = 2;
            }
            else if (diffRat < 0.3) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        else {
            if (diffRat < 0.05) {
                ret = 3;
            }
            else if (diffRat < 0.1) {
                ret = 2;
            }
            else if (diffRat < 0.15) {
                ret = 1;
            }
            else {
                ret = 0;
            }
        }
        return ret;
    };
    return CAngleChecker;
}());
;
//# sourceMappingURL=CAngleChecker.js.map