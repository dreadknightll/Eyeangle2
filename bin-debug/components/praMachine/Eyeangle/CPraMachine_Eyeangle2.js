var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * /src/components/praMachine/Eyeangle/CPraMachine_Eyeangle2.ts
 *
 * 练习机器模型。是整个程序的中心。用来处理练习相关的数据和逻辑。计分、进入下一角度、练习结束判断等的内部数据处理都在这里进行。
 * setAngleArr -> startPra -> ......
 *
 */
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
    /*
     * 设置练习所使用的角度集合。
     */
    CPraMachine_Eyeangle2.prototype.setAngleArr = function (angleArr) {
        this.m_angleArr = angleArr;
        this.refreshImgPathList();
        this.m_curAngleTag = -1; //Reset it because the whole len array has been changed.
    };
    CPraMachine_Eyeangle2.prototype.getAngleChecker = function () {
        return this.m_angleChecker;
    };
    /*
     * 根据角度集合刷新图片路径列表。
     */
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
    /*
     * 输入角度。角度输入后机器会进行检验和计分。
     */
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
            case 0:// 评定为 0星，不加分。
                break;
            case 1:// 评定为 1星，加 10分。
                this.m_curScore += 10;
                break;
            case 2:// 评定为 2星，加 20分。
                this.m_curScore += 20;
                break;
            case 3:// 评定为 3星，加 30分。
                this.m_curScore += 30;
                break;
        }
        this.m_angleInputted = true;
        this.m2_lastLenRank = (this.getCurScore() - this.m2_lastLenScore) / 10;
        this.m2_lastLenScore = this.getCurScore();
    };
    /*
     * 进入下一角度。
     */
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
    /*
     * 清空练习进度和得分，保留角度数据。
     */
    CPraMachine_Eyeangle2.prototype.rePra = function () {
        this.m_curAngleTag = 0;
        this.m_curScore = 0;
        this.m_angleInputted = false;
        this.m_finished = false;
        this.m2_lastLenScore = 0;
    };
    /*
     * 清空角度数据、进度和得分。
     */
    CPraMachine_Eyeangle2.prototype.clearPra = function () {
        this.m_angleArr = [];
        this.m_imgPathList = [];
        this.rePra();
        this.m_curAngleTag = -1;
    };
    /*
     * 获取当前角度的下标。未开始练习则返回-1。
     */
    /*    public getCurAngleTag(): number {
            return this.m_curAngleTag;
        }*/
    /*
     * 获取当前角度。
     */
    CPraMachine_Eyeangle2.prototype.getCurAngle = function () {
        if (this.m_angleArr.length <= 0) {
            return null;
        }
        else {
            return this.m_angleArr[this.m_curAngleTag];
        }
    };
    /*
     * 获取当前得分。
     */
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
    /*
     * 获取当前图片的下标。
     */
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
    /*
     * 获取最近一次输入的准确度评定。
     */
    CPraMachine_Eyeangle2.prototype.getLastLenRank = function () {
        return this.m2_lastLenRank;
    };
    return CPraMachine_Eyeangle2;
}());
__reflect(CPraMachine_Eyeangle2.prototype, "CPraMachine_Eyeangle2", ["IEyeanglePraMachine", "IPraMachine"]);
