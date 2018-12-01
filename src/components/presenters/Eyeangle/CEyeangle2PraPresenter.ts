/**
 *
 * /src/components/presenters/CAnglePresenter.ts
 * 
 * 练习界面的Presenter。包含待显示元素的坐标计算等。可单元测试。
 *
 */
class CEyeangle2PraPresenter implements IEyeangle2PraPresenter {
	public constructor() {
        this.m_pm = new CPraMachine_Eyeangle2();
        
        this.m_itm = new ImgThumbModelAdapter();
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);

        this.m_imgSelRect = new gdeint.CRect();
        this.m_imgSelPtOri = new gdeint.CPoint();
        
        this.m_renderFilter = new CNoChangeRenderFilter();
        
        this.m_angleVertexPt = new gdeint.CPoint();
        this.m_angleVertexDispPt = new gdeint.CPoint();
        this.m_angleEdge1DispPt = new gdeint.CPoint();
        this.m_angleEdge2DispPt = new gdeint.CPoint();
	}

	//顶部区域相关常量：
    public s_thumbAreax: number = 25; //缩略图区域X坐标。
    public s_thumbAreay: number = 0; //缩略图区域Y坐标。
    public s_thumbAreaWidth: number = 428 - 250; //缩略图区域宽度。
    public s_thumbAreaHeight: number = 160; //缩略图区域高度。
    public s_thMaxWidth:number = 150; // 缩略图最大宽度。
    public s_thMaxHeight:number = 120; // 缩略图最大高度。
    
	//状态和数据处理子对象：
    public m_state: number; // 当前状态。0:等待输入 1:比较 2:结果 。
//    private m_angleChecker: CAngleChecker; // 角度比较器。
    private m_pm: CPraMachine_Eyeangle2; // 练习机器。
    public m_renderFilter: IEyeangle2RenderFilter; // 渲染过滤器。用于应用校准系数。
    
    // 第一层：需要填入并参与计算的基本变量。
    public m_winWidth:number; // 窗口宽度。
    public m_winHeight:number; // 窗口高度。
    private m_imgWidth:number; // 图片的原始（即横竖校准前）宽度。
    private m_imgHeight:number; // 图片的原始高度。
    public m_imgSelRect:gdeint.CRect; // 图片选区(校准后)。
    public m_imgSelPtOri:gdeint.CPoint; // 记录图片选区的起点（使用校准前尺寸规格）坐标以便进行计算。
    public m_thAreaWidth: number; // 缩略图区域宽度。
    public m_thAreaHeight: number; // 缩略图区域高度。
    public m_score:number; // 得分。
    public m_progress:number; // 进度。
    public m_angle:CAngle; // 待显示角度。用 showAngle() 临时填入，用 syncWithPM() 根据练习机器的内容刷新。
    private m_angleVertexPt: gdeint.CPoint; // 角度顶点原始坐标。
    private m_angleVertexDispPt:gdeint.CPoint; // 角度顶点显示（即横竖校准后）坐标。
    private m_angleEdge1DispPt: gdeint.CPoint; // 第1边样点显示坐标。
    private m_angleEdge2DispPt: gdeint.CPoint; // 第2边样点显示坐标。

    public m_userAngle: number = 0; // 用户输入的角度值。

    //第二层：供上层读取的更多变量。
    private m_imgDispWidth:number; // 图片显示宽度。
    public m_thMaxWidth:number; // 缩略图最大宽度。
    public m_thMaxHeight:number; // 缩略图最大高度。
    public m_thRect:gdeint.CRect; // 缩略图区域。
    public m_thSelRect:gdeint.CRect; // 缩略图选区。
    public m_curRank:number; // 上次输入的准确度评定。

    private m_itm: ImgThumbModelAdapter; // 图片与缩略图转换器。传给 itm的宽度均为dispWidth。

    public bindPM(pm:CPraMachine_Eyeangle2):void {
        this.m_pm = pm;
    }

    public unbindPM():void {
        this.m_pm = null;
    }

    public setITM(itm:ImgThumbModelAdapter) {
        this.m_itm = itm;
    }

    /*
     * 检验是否所有待填变量都已填好。并不完善，慎用。
     */ 
    public allFieldsFilled():boolean {
        if(isNaN(this.m_winWidth))
        {
            return false;
        }

        if(isNaN(this.m_winHeight)) {
            return false;
        }

        if(isNaN(this.m_imgWidth)) {
            return false;
        }

        if(isNaN(this.m_imgHeight)) {
            return false;
        }

        if(null == this.m_imgSelRect) {
            return false;
        }
        else {
            if(isNaN(this.m_imgSelRect.m_left)) {
                return false;
            }
            if(isNaN(this.m_imgSelRect.m_top)) {
                return false;
            }
            if(isNaN(this.m_imgSelRect.m_width)) {
                return false;
            }
            if(isNaN(this.m_imgSelRect.m_height)) {
                return false;
            }
        }

        if(isNaN(this.m_thAreaWidth)) {
            return false;
        }

        if(isNaN(this.m_thAreaHeight)) {
            return false;
        }

        if(isNaN(this.m_score)) {
            return false;
        }

        if(isNaN(this.m_progress)) {
            return false;
        }

        if(null == this.m_angle) {
            return false;
        }
        else {
            if(null == this.m_angle.m_vertex) {
                return false;
            }
            else {
                if(isNaN(this.m_angle.m_vertex.m_x)) {
                    return false;
                }

                if(isNaN(this.m_angle.m_vertex.m_y)) {
                    return false;
                }
            }

            if(isNaN(this.m_angle.m_edge1Len)) {
                return false;
            }

            if(isNaN(this.m_angle.m_edge1Angle)) {
                return false;
            }

            if(isNaN(this.m_angle.m_angleValue)) {
                return false;
            }

            if(null == this.m_angle.m_imgPath) {
                return false;
            }

            if(null == this.m_angle.m2_imgResName) {
                return false;
            }
        }

        if(isNaN(this.m_userAngle)) {
            return false;
        }

        return true;
    }

    /*
     * 强行修改缩略图区域X坐标。
     */ 
    public s_setThumbAreaX(x: number): void {
        this.s_thumbAreax = x;
    }

    /*
     * 强行修改缩略图区域Y坐标。
     */ 
    public s_setThumbAreaY(y: number): void {
        this.s_thumbAreay = y;
    }

    /*
     * 强行修改缩略图区域宽度。
     */ 
    public s_setThumbAreaWidth(wid:number):void {
        this.s_thumbAreaWidth = wid;
    }

    /*
     * 强行修改缩略图区域高度。
     */ 
    public s_setThumbAreaHeight(hei: number): void {
        this.s_thumbAreaHeight = hei;
    }

    /*
     * 强行修改缩略图最大宽度。
     */ 
    public s_setThMaxWidth(wid: number): void {
        this.s_thMaxWidth = wid;
        this.m_itm.setThMaxWidth(this.s_thMaxWidth);
    }

    /*
     * 强行修改缩略图最大高度。
     */ 
    public s_setThMaxHeight(hei: number): void {
        this.s_thMaxHeight = hei;
        this.m_itm.setThMaxHeight(this.s_thMaxHeight);
    }

    /*
     * 设置所使用的渲染过滤器。
     */ 
    public setRenderFilter(rf: IEyeangle2RenderFilter): void {
        this.m_renderFilter = rf;
    }

    public getRenderFilter(): IEyeangle2RenderFilter {
        return this.m_renderFilter;
    }

    /*
     * 根据 m_angle 刷新当前角度相关的几个坐标变量。
     */ 
    private refreshAnglePts() {
        if(!this.m_angle) {
            //角度未定义，直接返回。
            return;
        }
        //……Keep the original angle value as in json even if calibrates.
        this.m_angleVertexPt.m_x = this.m_angle.m_vertex.m_x;
        this.m_angleVertexPt.m_y = this.m_angle.m_vertex.m_y;
        
        this.m_angleVertexDispPt = this.m_renderFilter.ptOConv(this.m_angleVertexPt);

        this.m_angleEdge1DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos(this.m_angle.m_edge1Angle * Math.PI / 180);
        this.m_angleEdge1DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin(this.m_angle.m_edge1Angle * Math.PI / 180);

        this.m_angleEdge2DispPt.m_x = this.m_angleVertexDispPt.m_x + this.m_angle.m_edge1Len * Math.cos((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180);
        this.m_angleEdge2DispPt.m_y = this.m_angleVertexDispPt.m_y - this.m_angle.m_edge1Len * Math.sin((this.m_angle.m_edge1Angle + this.m_angle.m_angleValue) * Math.PI / 180)
  
    }

    /*
     * 与练习机器同步，获取最新数据。
     */
    public updateFromPM():void {
        this.m_score = this.m_pm.getCurScore();
        this.m_angle = this.m_pm.getCurAngle();
        this.refreshAnglePts();
    }

    public clearTempData():void {
    }

    public submitToPM():void {
    }

	/*
	 * 进入下一角度。需要进一步传达给练习机器。
	 */ 
	public nextAngle(): void {

        this.m_pm.nextAngle();
        if(this.getProgress()>=10)
        {
            this.setState(2);
        }
        else {
            this.setState(0);
        }
	}
	
    public fillScore(s:number):void {
        this.m_score = s;
	}

	/*
	 * 获取当前得分。
	 */ 
	public getScore():number {
        return this.m_score;
	}
	
    public fillProgress(p:number):void {
        this.m_progress = p;
    }
	/*
	 * 获取当前进度。
	 */ 
	public getProgress():number {
//        return this.m_pm.getCurAngleTag() + 1;
//        return this.m_pm.getCmplProgress();
        return this.m_progress;
	}

	/*
	 * 获取当前角度。
	 */ 
    public getAngle(): CAngle {
	    return this.m_angle;
	}

	public fillCurRank(r:number):void {
	    this.m_curRank = r;
	}

	/*
	 * 获取最近一次目测准确度评定。
	 */ 
	public getCurRank():number {
	    return this.m_curRank;
	}

	/*
	 * 设置窗口宽度。
	 */ 
	public setWinWidth(ww: number): void {
	    this.m_winWidth = ww;
	    this.m_imgSelRect.m_width = ww;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
	}

	public setWinHeight(wh: number): void {
	    this.m_winHeight = wh;
	}

	/*
	 * 设置图片宽度。参数填原始宽度。
	 */ 
    public setImgWidth(w: number): void {
        this.m_imgWidth = w;
        this.m_imgDispWidth = this.m_renderFilter.xOConv(w);
        this.m_itm.setImgWidth(this.m_imgDispWidth);
    }

    /*
     * 获取图片原始宽度。
     */ 
    public getImgWidth():number {
        return this.m_imgWidth;
    }

    public setImgHeight(h: number): void {
        this.m_imgHeight = h;
        this.m_itm.setImgHeight(h);
    }

    public getImgHeight():number {
        return this.m_imgHeight;
    }

    /*
     * 输入图片选区位置。
     */ 
    public inpImgSelPt(imgSelPt: gdeint.CPoint): void {

        var rect:gdeint.CRect = new gdeint.CRect();
        rect.m_left = imgSelPt.m_x;
        rect.m_top = imgSelPt.m_y;
        rect.m_width = this.m_imgSelRect.m_width;
        rect.m_height = this.m_imgSelRect.m_height;
        this.m_imgSelRect = rect;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
        //记录起点坐标（校准前尺寸规格）
        this.m_imgSelPtOri.m_x = imgSelPt.m_x/this.m_renderFilter._getCaRat();
        this.m_imgSelPtOri.m_y = imgSelPt.m_y;
    }

    /*
     * 输入缩略图选区位置。同时影响图片选区位置。
     */ 
    public inpThSelPt(thSelPt:gdeint.CPoint): void {
        var imgSelPt:gdeint.CPoint;
        imgSelPt = this.m_itm.tp2Ip(thSelPt);
        this.inpImgSelPt(imgSelPt);
    }

    /*
     * 输入图片选区宽度（参数填原始宽度）。
     */ 
    public inpImgSelWidth(w: number): void {
        this.m_imgSelRect.m_width = w;
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    }

    public inpImgSelHeight(h: number): void {
        this.m_imgSelRect.m_height = h;
        this.m_itm.setImgSelRect(this.m_imgSelRect);

    }

    /*
     * 填入用户输入的角度值。
     */ 
    public inpUserAngle(angle: number): void {
        this.m_userAngle = angle;
    }

    /*
     * 提交用户输入的角度给练习机器。
     */ 
    public submitUserAngle(): void {
        this.m_pm.inpAngle(this.m_userAngle);
        var angleChecker:CAngleChecker;
        angleChecker = this.m_pm.getAngleChecker();
        angleChecker.setCorreAngle(this.m_angle.m_angleValue);
        angleChecker.setInputAngle(this.m_userAngle);
        this.m_curRank = angleChecker.checkAngle();
        this.fillProgress(this.m_pm.getCmplProgress());
    }


    public syncFromRenderFilter() {
        //renderFilter有改动后（例如caRat变更）调用本函数进行同步。
        var caRat = this.m_renderFilter._getCaRat();
        this.m_imgDispWidth = this.m_renderFilter.xOConv(this.m_imgWidth);
        //Update imgThumbModel:
        this.m_itm.setImgWidth(this.m_imgDispWidth);
        //Update selPt:
        var selPt:gdeint.CPoint = new gdeint.CPoint();
        selPt.m_x = this.m_imgSelPtOri.m_x * caRat;
        selPt.m_y = this.m_imgSelRect.m_top;
        this.inpImgSelPt(selPt);
        this.refreshAnglePts();

    }

    /*
     * 设置横竖校准系数。
     */
    public setCaRat(caRat: number): void {

        this.m_renderFilter.setCaRat(caRat);
        this.syncFromRenderFilter();
    }

    /*
     * 临时显示一个角度，不影响练习机器里的数据。
     */
    public showAngle(angle: CAngle): void {
        this.m_angle = angle;

        this.refreshAnglePts();

//        Update itm
        this.m_itm.setImgSelRect(this.m_imgSelRect);
    }

    /*
     * 设置练习所用到的角度集合。
     */ 
/*    public setAngleArr(angle: Array<CAngle>) :void {
        this.m_pm.setAngleArr(angle);
    }*/

    /*
     * 设置当前状态。
     */ 
    public setState(s:number) {
        //0:To input 1:checking 2:final

        this.m_state = s;
    }

    /*
     * 重新开始练习。
     */ 
    public rePra(): void {
        // Start a new pra.
        this.m_curRank = 0;
        this.m_pm.rePra();
    }

    public clearPra():void {
        // Clear angles,progress and score.
        this.m_pm.clearPra(); 
        this.rePra();
    }


    /*
     * 获取经渲染过滤器输出后的图片区域。
     */ 
    public getImgRect(): gdeint.CRect {
        var oriRect:gdeint.CRect , ret:gdeint.CRect;
        oriRect = new gdeint.CRect();
        oriRect.m_left = -this.m_imgSelRect.m_left / this.m_renderFilter._getCaRat();
        oriRect.m_top = -this.m_imgSelRect.m_top;
        oriRect.m_width = this.m_imgWidth;
        oriRect.m_height = this.m_imgHeight;

        ret = this.m_renderFilter.rectOConv(oriRect);

        return ret;
    }

    /*
     * 获取经渲染过滤器输出后的缩略图区域。
     */ 
    public getThumbRect(): gdeint.CRect {
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));
        var ret:gdeint.CRect;
        ret = new gdeint.CRect();
        ret.m_width = this.m_itm.getThWidth();
        ret.m_height = this.m_itm.getThHeight();
        ret.m_left = this.s_thumbAreax + (this.s_thumbAreaWidth - ret.m_width) / 2;
        ret.m_top = this.s_thumbAreay + (this.s_thumbAreaHeight - ret.m_height) / 2;
        return ret;
    }

    /*
     * 获得经渲染过滤器输出后的缩略图选区。
     */ 
    public rfgetScrThumbSelRect(): gdeint.CRect {
        var ret:gdeint.CRect;
        this.m_itm.setImgWidth(this.m_renderFilter.xOConv(this.m_imgWidth));

        var thRect:gdeint.CRect;
        thRect = this.getThumbRect();

        var tsr = this.m_itm.getThSelRect();

        ret = new gdeint.CRect();
        ret.m_left = /*thRect.m_left + */tsr.m_left;
        ret.m_top = /*thRect.m_top + */tsr.m_top;
        ret.m_width = tsr.m_width;
        ret.m_height = tsr.m_height;

        return ret;
    }
    
    /*
     * 获得经渲染过滤器输出的角度顶点坐标。
     */ 
    public rfgetScrAngleVertexPt(): gdeint.CPoint {
        var ret:gdeint.CPoint;
        ret = this.m_angleVertexDispPt;
        return ret;
    }

    /*
     * 获得经渲染过滤器输出的第一条边样点坐标。
     */ 
    public rfgetScrAngleEdge1Pt(): gdeint.CPoint {
        var ret:gdeint.CPoint;
        ret = this.m_angleEdge1DispPt;
        return ret;
    }

    /*
     * 获得经渲染过滤器输出的第二条边样点坐标。
     */ 
    public rfgetScrAngleEdge2Pt(): gdeint.CPoint {
        var ret:gdeint.CPoint;
        ret = this.m_angleEdge2DispPt;
        return ret;
    }

    /*
     * 获得经渲染过滤器输出的缩略图问号坐标。
     */ 
    public rfgetScrThQuestionerPt(): gdeint.CPoint {
//        var thRect:CRect;
//        thRect = this.getThumbRect();

        var ret:gdeint.CPoint;
        var tVertex: gdeint.CPoint,tEdge1Pt: gdeint.CPoint,tEdge2Pt: gdeint.CPoint;
        tVertex = this.m_itm.ip2Tp(this.m_renderFilter.ptOConv(this.m_angleVertexPt));

        ret = new gdeint.CPoint();
        ret.m_x = /*thRect.m_left + */tVertex.m_x - 8;
        ret.m_y = /*thRect.m_top + */tVertex.m_y - 12;

        return ret;
    }
}
