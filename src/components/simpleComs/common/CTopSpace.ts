/**
 *
 * /src/components/CTopSpace.ts
 * 顶部空白。可设置高度、颜色。
 *
 * 使用方法：设置width—>设置height—>setColor()—>draw() 。
 * 
 */
class CTopSpace extends egret.DisplayObjectContainer{
	public constructor() {
    	super();
    	this.m_space = new egret.Shape();
    	this.m_space.x = 0;
    	this.m_space.y = 0;
    	this.addChild(this.m_space);
	}
	private m_space:egret.Shape;
	private m_color:number;

	public setColor(clr:number):void
	{
    	this.m_color = clr;
	}

	public draw():void
	{
      this.m_space.graphics.clear();
    	this.m_space.graphics.beginFill(this.m_color);
    	this.m_space.graphics.drawRect(0,0,this.width,this.height);
    	this.m_space.graphics.endFill();
	}

	public redraw():void
	{
	    this.draw();
	}
}
