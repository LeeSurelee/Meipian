home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
	
Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

popup.states =
	off:
		y: bottomNavi.y + 20
	on:
		y: 22
popup.stateSwitch('off')

bg.states =
	off:
		opacity: 0
	on:
		opacity: 1
bg.stateSwitch('off')
bg.sendToBack()

comment.states = 
	off:
		opacity: 1
	on:
		opacity: 0

typein.states =
	off:
		width: 188
	on:
		width: 240

contentScroll = ScrollComponent.wrap(content)
contentScroll.scrollHorizontal = false
contentScroll.height = 553
contentScroll.y = 65
contentScroll.mouseWheelEnabled = true

commentScroll = ScrollComponent.wrap(commentContent)
commentScroll.scrollHorizontal = false
commentScroll.height = 538
commentScroll.y = 58

popupstate = 0
comment.onClick ->
	if popupstate == 0
		popup.stateCycle('on')
		bg.placeBehind(popup)
		bg.stateCycle('on')
		popupstate = 1
		comment.stateCycle('on')
		typein.stateCycle('on')
	else if popupstate == 1
		popup.stateCycle('off')
		bg.sendToBack()
		bg.stateCycle('off')
		popupstate = 0
		comment.stateCycle('off')
		typein.stateCycle('off')

close_1.onClick ->
		popup.stateCycle('off')
		bg.sendToBack()
		bg.stateCycle('off')
		popupstate = 0
		comment.stateCycle('off')
		typein.stateCycle('off')

scrollstate = 0
contentScroll.onMove ->
	yscroll = contentScroll.scrollY
# 	print yscroll
	if yscroll > 333
		scrollstate = 1
	else if yscroll <= 333
		scrollstate = 0
	if scrollstate == 0
		comment.stateCycle('off')
		typein.stateCycle('off')
	else if scrollstate == 1
		comment.stateCycle('on')
		typein.stateCycle('on')

# 	comment.opacity = Utils.modulate(yscroll,[323,333],[1,0],true)
# 	typein.width = Utils.modulate(yscroll,[323,333],[188,240],true)

popup.onSwipeDown ->
	popup.stateCycle('off')
	bg.sendToBack()
	bg.stateCycle('off')
	popupstate = 0
	comment.stateCycle('off')
	typein.stateCycle('off')

