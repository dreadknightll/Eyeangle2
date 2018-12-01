// JavaScript Document
/*
 * 
 * 练习画面布局模型。只计算和传递相关的位置坐标，不负责显示工作。
 * 
 * 使用方法：创建对象—>setWinWidth/setWinHeight—>其它操作。
 * 
*/

class CEyeangle2_winModel implements IEyeangle2WinModel
{
	public s_topY:number = 20; // 顶部区域的纵坐标，也即顶部空白的高度。
	public s_topHeight1:number = 30; // 顶部区域收起来时的高度。
    private s_topHeight2: number = 180; // 顶部区域展开时的高度。

	private s_bottomHeight:number = 210; // 底部区域的高度。

	private m_winWidth:number = 0; // 窗口宽度。
	private m_winHeight:number = 0; // 窗口高度。
	public m_topHeight:number = this.s_topHeight2; //顶部区域当前高度。
	private m_topOpen:boolean = true;

	public setTopSpaceHeight(h:number): void {
		this.s_topY = h;
	}

	public getTopSpaceHeight():number {
		return this.s_topY;
	}

	public getTopY():number {
		return this.s_topY;
	}

	public setTopHeight1(h:number):void {
		this.s_topHeight1 = h;
		this.rearrange();
	}
    getTopHeight1():number {
		return this.s_topHeight1;
	}

	public setTopHeight2(h:number):void {
		this.s_topHeight2 = h;
		this.rearrange();
	}

    getTopHeight2():number {
		return this.s_topHeight2;
	}

	public setBottomHeight(h:number):void {
		this.s_bottomHeight = h;
	}

	public getBottomHeight():number {
		return this.s_bottomHeight;
	}

	public rearrange():void {

	}


//--------------------------------------------------------------------------------
	/*
	 * 强行修改顶部打开状态下的高度。
	 */ 
	public s_setTopHeight2(h:number) {
    	this.s_topHeight2 = h;
	    if(this.m_topOpen) {
	        this.m_topHeight = this.s_topHeight2;
	    }
	}

	/*
	 * 获取顶部打开状态下的高度。
	 */ 
	public s_getTopHeight2():number {
	    return this.s_topHeight2;
	}

	public setWinWidth(ww:number)
	{
		this.m_winWidth = ww;
	}

	public setWinHeight(wh:number)
	{
		this.m_winHeight = wh;
	}

	/*
	 * 展开顶部区域。
	 */ 
	public showTop()
	{
    	this.m_topOpen = true;
		this.m_topHeight = this.s_topHeight2;
	}

	/*
	 * 收起顶部区域。
	 */ 
	public hideTop()
	{
    	this.m_topOpen = false;
		this.m_topHeight = this.s_topHeight1;
	}

	public getTopHeight()
	{
		return this.m_topHeight;
	}

	/*
	 * 获取中部区域Y坐标。
	 */ 
	public getMidY()
	{
		return this.s_topY + this.m_topHeight;
	}

	/*
	 * 计算获取中部区域高度。
	 */ 
	public getMidHeight()
	{
		return this.getBottomY() - this.getMidY();
	}

	/*
	 * 计算获取底部区域Y坐标。
	 */ 
	public getBottomY()
	{
		return this.m_winHeight - this.s_bottomHeight;
	}

	public getWinHeight()
	{
		return this.m_winHeight;
	}

	public getWinWidth()
	{
		return this.m_winWidth;
	}
}