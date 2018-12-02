/**
 *  /src/components/EintParsers.ts
 * 聚集了自己写的解析器。
 */
module EintParsers {
    export class CaRatParser { // OK without declaring module
        static parseFloat(str: string): number {
            //  Least result: 0.001
            var ret: number;
            ret = parseFloat(str);

            if(isNaN(ret) || ret < 0.001) {
                ret = 0.001;
            }

            return ret;
        }
    }
}