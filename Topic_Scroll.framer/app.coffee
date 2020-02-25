home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

topwords.clip = true
bgimg.image = Utils.randomImage()
full2.opacity = 0

topwords.states =
	a:
		height: 75
	b:
		height: 230
		
full.states =
	a:
		y: 244
	b: 
		y: 244 + 155

navi.states =
	a:
		opacity: 0
	b:
		opacity: 1

full1.states =
	a:
		opacity: 1
	b: 
		opacity: 0
full2.states =
	a: 
		opacity: 0
	b:
		opacity: 1
states = [topwords, full, full1, full2, bgimg,content]
navi.stateSwitch('a')
scroll = new ScrollComponent
	parent: home
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
# 	contentInset: top: 155
scroll.placeBehind(navi)
content.parent = scroll.content
content.y = 273
content.x = 0
# scroll.scrollY -= -155

content.states = 
	a:
		y: 273
	b:
		y: 273 + 155
		
bgimg.states = 
	a:
		height: 290
	b:
		height: 290 + 155

Fstate = 0
contentHeight = 0
fullclick.onClick ->
	if full1.opacity == 1
		for layer in states
			layer.stateCycle("b")
		Fstate = 1
		scroll.scrollToPoint(y:-155)
		contentHeight = 155
	if full2.opacity == 1
		for layer in states
			layer.stateCycle("a")
		Fstate = 0
		scroll.scrollToPoint(y:0)
		contentHeight = 0

scroll.onMove (event) ->
	num = scroll.scrollY
# 	print num
# 	topwords.height = Utils.modulate(num,[155,0],[75,230],true)
	bgimg.height = Utils.modulate(num,[0,-255],[290+contentHeight,290+255+contentHeight],true)
# 	full.y = Utils.modulate(num,[155,0],[244,399],true)
# 	full1.opacity = Utils.modulate(num,[155,77],[1,0],true)
# 	full2.opacity = Utils.modulate(num,[77,0],[0,1],true)
	navi.opacity = Utils.modulate(num,[15,30],[0,1],true)
	tabbg.opacity = Utils.modulate(num,[363,364],[0,1],true)
	if num >= 364
		tabs.y = num - 364
	else
		tabs.y = 0
	if num >= 0 && num <= 364
		wording.y = 91 - num
		full.y = 244 - num + contentHeight

tabs.onClick ->
	scroll.scrollToPoint(y:364)
	

