/**
 *
 * @author 
 *
 */
class CPreloader implements IPreloader{
	public constructor() {
	}

	private m_resList:Array<string>;
	private m_completeListener:Function;
    private m_completeThisObj:any;
    private m_progressListener:(cur:number,total:number)=>void;
    private m_progressThisObj:any;
    public setResList(l: Array<string>): void {
        this.m_resList = l;
    }

    public setCompleteListener(lsner: Function , thisObj:any): void {
        this.m_completeListener = lsner;
        this.m_completeThisObj = thisObj;
    }

    public setProgressListener(lsner: (cur:number,tot:number)=>void , thisObj:any): void {
        this.m_progressListener = lsner;
        this.m_progressThisObj = thisObj;
    }

    private genGroupName():string {
        var ret:string;

        var tmpTag:number = Math.round(1 + ((9999 - 1) * Math.random()));
        var tagStr = "";
        if(tmpTag<10)
        {
            tagStr = "000"+tmpTag;
        }
        else if(tmpTag < 100) {
            tagStr = "00" + tmpTag;
        }
        else if(tmpTag < 1000) {
            tagStr = "0" + tmpTag;
        }
        else {
            tagStr = "" + tmpTag;
        }

        ret = "RandomGroup" + (<any>(new Date())).Format("yyyyMMddhhmmss") + tagStr;
        return ret;
    }

    public preload(): void {

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceLoadProgress,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
        
        var tmpGroup:string[] = this.m_resList;
        var groupName: string = this.genGroupName();

        RES.createGroup(groupName,tmpGroup);
        RES.loadGroup(groupName);
    }

    private onResourceLoadProgress(event:RES.ResourceEvent):void {
        var argArr:Array<number> = new Array<number>();
        argArr[0] = event.itemsLoaded;
        argArr[1] = event.itemsTotal;

        this.m_progressListener.apply(this.m_progressThisObj , argArr);
    }

    private onResourceLoadComplete(evt: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceLoadProgress,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
        this.m_completeListener.apply(this.m_completeThisObj);
    }

    private onResourceLoadError(evt: RES.ResourceEvent): void {
        //TODO
        console.warn("Group:" + evt.groupName + " has failed to load");
        RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.onResourceLoadProgress,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onResourceLoadComplete,this);
        RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR,this.onResourceLoadError,this);
    }
}
