/**
 *
 * @author 
 *
 */
interface IEyeanglePraMachine extends IPraMachine {
    setAngleArr(angleArr: Array<CAngle>): void;
    getAngleChecker():CAngleChecker; //界面有时需要提取PM的检查器自行检查。
    getCurAngle(): CAngle;
    inpAngle(angle:CAngle):void; //输入角度。角度输入后机器会进行检验和计分。无需submit。自动next。
}
