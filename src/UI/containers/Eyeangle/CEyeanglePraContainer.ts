/**
 *
 * @author 
 *
 */
class CEyeanglePraContainer extends CUIContainer implements IEyeanglePraContainer,INotiParent{
	public constructor() {
        super();
        this.m_resNameFinder = new CEyeangle2ResNameFinder();
        this.m_renderFilter = new CEyeangle2RenderFilter();
        this.m_renderFilter.setCaRat(1);
	}

    private m_resNameFinder:IEyeangle2ResNameFinder;
    public setResNameFinder(rnf:IEyeangle2ResNameFinder) {
        this.m_resNameFinder = rnf;
    }
    public getResNameFinder():IEyeangle2ResNameFinder {
        return this.m_resNameFinder;
    }

    public setPraScene(s:IEyeanglePraScene): void {
        this.m_praScene = s;
        this.m_praScene._setParentContainer(this);
    }

    public setCaliDlg(d:ICaliDlgPlugin): void {
        this.m_caliDlg = d;
        this.m_caliDlg._setParentContainer(this);
    }

    public setRenderFilter(rf: IEyeangle2RenderFilter): void {
        this.m_renderFilter = rf;
//        this._getPraScene()._setRenderFilter(rf);
    }

    public _getPraScene(): IEyeanglePraScene {
        return this.m_praScene;
    }

    public _getCaliDlg(): ICaliDlg {
        return this.m_caliDlg;
    }

    public _getRenderFilter(): IEyeangle2RenderFilter {
        return this.m_renderFilter;
    }

    public getDlgLayer():egret.DisplayObjectContainer {
        return this._getPraScene().getDlgLayer();
    }

    public getNotiLayer():egret.DisplayObjectContainer {
        return this._getPraScene().getNotiLayer();
    }

    public disableForNoti():void {
        this._getPraScene().disableForNoti();
    }

    public resumeAfterNoti():void {
        this._getPraScene().resumeAfterNoti();
    }

    private getAllPlugins2():Array<IContainerPlugin> {
        //Reflection of this class. Not including scene.
        var ret:Array<IContainerPlugin> = new Array<IContainerPlugin>();
        ret[0] = this.m_caliDlg;
        return ret;
    }

    public saveVisibleStates():void //Call it before switching out.
    {
        super.saveVisibleStates();
        this.m_visibilityTempArr2 = new Array<boolean>();
        var plugins:Array<IContainerPlugin> = this.getAllPlugins2();
        var i:number;
        for(i=0;i<plugins.length;++i) {
            this.m_visibilityTempArr2[i] = plugins[i].isVisible();
        }
        this.m_visibilityTempScene = this.m_praScene.isVisible();
    }

    public getVisibleStates():Array<boolean> {
    //不返回scene的状态。
        var superPart:Array<boolean> = super.getVisibleStates();
        var ret:Array<boolean> = new Array<boolean>();

        ret[0] = this.m_visibilityTempScene;
        var i;
        var s:number = 1;
        for(i=0;i<superPart.length;++i) {
            ret[s+i] = superPart[i];
        }
        s = 1 + superPart.length;
        for(i=0;i<this.m_visibilityTempArr2.length;++i) {
            ret[s+i] = this.m_visibilityTempArr2[i];
        }

        return ret;
    }

    public show():void {
        super.show();
        if(this.m_visibilityTempScene) {
            this.m_praScene.show();
        }
        else {
            this.m_praScene.hide();
        }
        var parr:Array<IContainerPlugin> = this.getAllPlugins2();
        var i;
        for(i=0;i<parr.length;++i) {
            if(this.m_visibilityTempArr2 && this.m_visibilityTempArr2[i]) {
                parr[i].show();
            }
            else {
                parr[i].hide();
            }
        }
    }

    public hide():void {
        this.saveVisibleStates();

        super.hide();
// 注：super.saveVisibleStates执行了两次！！

        this.m_praScene.hide();

        var parr:Array<IContainerPlugin> = this.getAllPlugins2();
        var i;
        for(i=0;i<parr.length;++i) {
            parr[i].hide();
        }
    }

    public startNewPra(): void {
        this._getPraScene().hide();

        //Then sync with the presenter

        var preloaderUI:IPreloaderUI = this._getPreloaderUI();

        preloaderUI.show();
        preloaderUI.setCompleteListener(this.onPicXMLLoadComplete,this);

        var picXMLTask:gdeint.CPreloadTask = new gdeint.CPreloadTask();
        var resListPicXML:Array<gdeint.ResStruct> = new Array<gdeint.ResStruct>();

        this.m_seledPicTagArr = gdeint.randomNums_ts(13,4); //13张图片中随机选4张。

        var i:number;
        for(i=0;i<this.m_seledPicTagArr.length;++i) {
            resListPicXML[i] = new gdeint.ResStruct();
            resListPicXML[i].m_resName = tag2PicResName(this.m_seledPicTagArr[i]);
            resListPicXML[i].m_givenSize = 500;
        }

        picXMLTask.m_resList = resListPicXML;
        picXMLTask.m_proportion = 30;
        picXMLTask.m_taskName = "picXMLs";

        preloaderUI.addTask(picXMLTask);

        preloaderUI.setNoTaskLeft(true);
        //New: Clear old pra in the presenter
        preloaderUI.startPreload();

    }

    /*
     * 练习所需资源加载完成时触发。
     */ 
    private onPicXMLLoadComplete(/*evt: CPIPreloaderEvent*/): void {
        var tmpAngles:Array<CAngle> = new Array<CAngle>();

            var curTag;
            for(curTag = 0;curTag < this.m_seledPicTagArr.length;++curTag)
            {
                var strResName: string;
                var n = this.m_seledPicTagArr[curTag];
                if(n < 10) {
                    strResName = "pic00" + n;
                }
                else if(n < 100) {
                    strResName = "pic0" + n;
                }
                else {
                    strResName = "pic" + n;
                }
                strResName += "_json";

                var picJsn = RES.getRes(strResName);

                var len:number = picJsn.pics.pic.angles.angle.length;// Error occur on the second round. Maybe resource not loaded.
                var i:number;
                
                for(i = 0;i < len;++i) {

                    var tmpAngle:CAngle = new CAngle();

                    tmpAngle.m_className = "CAngle";

                    tmpAngle.m_vertex = new gdeint.CPoint();
                    tmpAngle.m_vertex.m_x = parseFloat(picJsn.pics.pic.angles.angle[i].vertex.x);
                    tmpAngle.m_vertex.m_y = parseFloat(picJsn.pics.pic.angles.angle[i].vertex.y);
                    
                    tmpAngle.m_edge1Len = parseFloat(picJsn.pics.pic.angles.angle[i].edge1Len);
                    tmpAngle.m_edge1Angle = parseFloat(picJsn.pics.pic.angles.angle[i].edge1Angle);
                    tmpAngle.m_angleValue = parseFloat(picJsn.pics.pic.angles.angle[i].angleValue);
                    tmpAngle.m_imgPath = picJsn.pics.pic.imgPath;

                    var tmpResName;


                    /*
                    var temp = this.m_seledPicTagArr[curTag];
                    if(temp < 10) {
                        tmpResName = "img_00" + temp.toString();
                    }
                    else if(temp < 100) {
                        tmpResName = "img_0" + temp.toString();
                    }
                    else {
                        tmpResName = "img_" + temp.toString();
                    }
                    tmpResName += "_gif";*/

                    var strImgPath:string;
                    strImgPath = picJsn.pics.pic.imgPath.toString();
                    this.m_resNameFinder.setInp(strImgPath);
                    tmpResName = this.m_resNameFinder.getResult();

                    tmpAngle.m2_imgResName = tmpResName;

                    tmpAngles.push(tmpAngle);

                }
            }

        this._getPraScene().setAngleArr(tmpAngles);

        var preloaderUI:IPreloaderUI = this.m_praScene._getParentContainer()._getPreloaderUI();
        preloaderUI.setNoTaskLeft(false);
        preloaderUI.setCompleteListener(this.onPicImgLoadComplete,this);

        var picImgTask:gdeint.CPreloadTask = new gdeint.CPreloadTask();

        var resListPicImg:Array<gdeint.ResStruct> = new Array<gdeint.ResStruct>();

        var i:number;
        for(i=0;i<this.m_seledPicTagArr.length;++i) {
            var tmpImgFileName:string = "" , tmpImgResName:string = "";
            resListPicImg[i] = new gdeint.ResStruct();

            var resName = tag2PicResName(this.m_seledPicTagArr[i]);
            var picJsn = RES.getRes(resName);
            tmpImgFileName = picJsn.pics.pic.imgPath;
            var strArr:Array<string> = tmpImgFileName.split(".");
            var j:number;
            tmpImgResName = strArr[0];
            for(j=1;j<strArr.length;++j) {
                tmpImgResName += "_";
                tmpImgResName += strArr[j];
            }

            resListPicImg[i].m_resName = tmpImgResName;
            resListPicImg[i].m_givenSize = 500;
        }

        picImgTask.m_resList = resListPicImg;
        picImgTask.m_proportion = 72;
        picImgTask.m_taskName = "picImgs";

        preloaderUI.addTask(picImgTask);

        preloaderUI.setNoTaskLeft(true);
        preloaderUI.startPreload();

    }

    private onPicImgLoadComplete(/*evt: CPIPreloaderEvent*/): void {
        this.m_preloaderUI.setNextActListener(this.startRunPra , this); //this.startRunPra will be called when scrTouched or * seconds collapse.
    }

    private startRunPra():void {
        this.m_preloaderUI.clearProgress();
        this._getPreloaderUI().hide();
        this._getPraScene().startNewPra();
        this._getPraScene().show();
    }

    public _quitPra(): void {
    }

    setQuitHandler(func: Function):void {
    }

    public showCaliDlg(listener: (boolean)=>void): void {
        var caliDlg = this._getCaliDlg();
        caliDlg._setCloseListener(listener);
        caliDlg.show();
    }

    private m_seledPicTagArr: Array<number>; //练习用到的角度。
    private m_praScene: IEyeanglePraScene;
    private m_renderFilter: IEyeangle2RenderFilter;
    private m_caliDlg: ICaliDlgPlugin;
    private m_visibilityTempArr2:Array<boolean>;
    private m_visibilityTempScene:boolean = false;


    public applyFunc(func:any , argArr:Array<any>):void {
        if(null != func) {
            func.apply(this._getPraScene() , argArr);
        }
    }

    public setCaRat(cr: number): void {
        this.m_renderFilter.setCaRat(cr);
    }

    public getCaRat(): number {
        return this.m_renderFilter._getCaRat();
    }

}
