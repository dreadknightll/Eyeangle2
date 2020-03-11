var CPraMachine_Eyeangle2 = (function () {
    function CPraMachine_Eyeangle2() {
        this.m2_lastLenScore = 0;
        this.m_angleArr = [];
        this.m_imgPathList = [];
        this.m_angleChecker = new CAngleChecker();
        this.m_curAngleTag = -1;
        this.m_curScore = 0;
        this.m_angleInputted = false;
        this.m_finished = false;
    }
    CPraMachine_Eyeangle2.prototype.setAngleArr = function (angleArr) {
        this.m_angleArr = angleArr;
        this.refreshImgPathList();
        this.m_curAngleTag = -1;
    };
    CPraMachine_Eyeangle2.prototype.getAngleChecker = function () {
        return this.m_angleChecker;
    };
    CPraMachine_Eyeangle2.prototype.refreshImgPathList = function () {
        var i, j;
        for (i = 0; i < this.m_angleArr.length; ++i) {
            var newPath = this.m_angleArr[i].m_imgPath;
            if (null == newPath || "" == newPath) {
                continue;
            }
            for (j = 0; j < this.m_imgPathList.length; ++j) {
                if (this.m_imgPathList[j] == newPath) {
                    break;
                }
            }
            if (this.m_imgPathList.length == j) {
                this.m_imgPathList.push(this.m_angleArr[i].m_imgPath);
            }
        }
    };
    CPraMachine_Eyeangle2.prototype.inpAngle = function (angle) {
        if (this.m_curAngleTag >= this.m_angleArr.length) {
            return;
        }
        var expAngle = this.m_angleArr[this.m_curAngleTag].m_angleValue;
        var rank;
        this.m_angleChecker.setInputAngle(angle);
        this.m_angleChecker.setCorreAngle(expAngle);
        rank = this.m_angleChecker.checkAngle();
        switch (rank) {
            case 0:
                break;
            case 1:
                this.m_curScore += 10;
                break;
            case 2:
                this.m_curScore += 20;
                break;
            case 3:
                this.m_curScore += 30;
                break;
        }
        this.m_angleInputted = true;
        this.m2_lastLenRank = (this.getCurScore() - this.m2_lastLenScore) / 10;
        this.m2_lastLenScore = this.getCurScore();
    };
    CPraMachine_Eyeangle2.prototype.nextAngle = function () {
        this.m_angleInputted = false;
        if (this.m_curAngleTag < this.m_angleArr.length) {
            ++this.m_curAngleTag;
            if (this.m_curAngleTag >= this.m_angleArr.length) {
                this.m_finished = true;
            }
        }
    };
    CPraMachine_Eyeangle2.prototype.startPra = function () {
        this.rePra();
    };
    CPraMachine_Eyeangle2.prototype.rePra = function () {
        this.m_curAngleTag = 0;
        this.m_curScore = 0;
        this.m_angleInputted = false;
        this.m_finished = false;
        this.m2_lastLenScore = 0;
    };
    CPraMachine_Eyeangle2.prototype.clearPra = function () {
        this.m_angleArr = [];
        this.m_imgPathList = [];
        this.rePra();
        this.m_curAngleTag = -1;
    };
    CPraMachine_Eyeangle2.prototype.getCurAngle = function () {
        if (this.m_angleArr.length <= 0) {
            return null;
        }
        else {
            return this.m_angleArr[this.m_curAngleTag];
        }
    };
    CPraMachine_Eyeangle2.prototype.getCurScore = function () {
        return this.m_curScore;
    };
    CPraMachine_Eyeangle2.prototype.getCurElemTag = function () {
        return this.m_curAngleTag;
    };
    CPraMachine_Eyeangle2.prototype.getCmplProgress = function () {
        var ret = 0;
        if (this.m_angleInputted) {
            return this.m_curAngleTag + 1;
        }
        else {
            return this.m_curAngleTag;
        }
    };
    CPraMachine_Eyeangle2.prototype.getCurImgTag = function () {
        var i;
        if (this.m_finished) {
            return -1;
        }
        if (this.m_curAngleTag < 0) {
            return -1;
        }
        for (i = 0; i < this.m_imgPathList.length; ++i) {
            if (gdeint.tailContain(this.m_imgPathList[i], this.m_angleArr[this.m_curAngleTag].m_imgPath)) {
                return i;
            }
        }
        return -1;
    };
    CPraMachine_Eyeangle2.prototype.getLastLenRank = function () {
        return this.m2_lastLenRank;
    };
    return CPraMachine_Eyeangle2;
}());
//# sourceMappingURL=CPraMachine_Eyeangle2.js.map