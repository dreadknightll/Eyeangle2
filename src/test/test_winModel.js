/*
 * /src/test/test_winModel.js
 */ 
test("CAngle2_winModel" , function() {
	var ww , wh , th , my , mh , by;

	var wm = new CEyeangle2_winModel();

	wm.s_topY = 5;
	wm.s_topHeight1 = 105;
	wm.s_topHeight2 = 305;
	wm.m_topHeight = wm.s_topHeight2;
    wm.s_bottomHeight = 250;

	wm.setWinWidth(680);
	wm.setWinHeight(950);

	ww = wm.getWinWidth();
	wh = wm.getWinHeight();
	th = wm.getTopHeight();
	my = wm.getMidY();
	mh = wm.getMidHeight();
	by = wm.getBottomY();

	equal(ww , 680);
	equal(wh , 950);
	equal(th , 305);
	equal(my , 310);
	equal(mh , 390); //950 - 5 - 305 - 250 = 390;
	equal(by , 700); //950 - 250 = 700;

	wm.hideTop();
	
	ww = wm.getWinWidth();
	wh = wm.getWinHeight();
	th = wm.getTopHeight();
	my = wm.getMidY();
	mh = wm.getMidHeight();
	by = wm.getBottomY();

	equal(ww , 680);
	equal(wh , 950);
	equal(th , 105);
	equal(my , 110);
	equal(mh , 590); //950 - 5 - 105 - 250 = 590;
	equal(by , 700); //950 - 250 = 700;

	wm.showTop();

	ww = wm.getWinWidth();
	wh = wm.getWinHeight();
	th = wm.getTopHeight();
	my = wm.getMidY();
	mh = wm.getMidHeight();
	by = wm.getBottomY();

	equal(ww , 680);
	equal(wh , 950);
	equal(th , 305);
	equal(my , 310);
	equal(mh , 390); //950 - 5 - 305 - 250 = 390;
	equal(by , 700); //950 - 250 = 700;

});

