Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut
	
home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
	

cscroll = ScrollComponent.wrap(content)
cscroll.y = 63
cscroll.scrollHorizontal = false
cscroll.mouseWheelEnabled = true
cscroll.parent = home
cscroll.sendToBack()

subnavi.states =
	a:
		y: 63
	b: 
		y: 20

subnavi.stateSwitch('a')

search.states =
	a:
		y: 20
	b: 
		y: -24
search.stateSwitch('a')

start = 0
distance = -1
temp=0
cscroll.on Events.ScrollStart, ->
	start = cscroll.content.y

cscroll.on Events.ScrollEnd, ->
	end = cscroll.content.y

cscroll.content.on "change:y",->
	distance = cscroll.content.y - start
# 	print distance 
	temp = cscroll.scrollY
# 	print temp
	if distance < 0 && subnavi.states.current.name == "a"
		subnavi.y = Utils.modulate(distance,[-43,0],[20,63],true)
		search.y = Utils.modulate(distance,[-43,0],[-24,20],true)
	else if distance > 0 && subnavi.states.current.name == "b"
		subnavi.y = Utils.modulate(distance,[43,0],[63,20],true)
		search.y = Utils.modulate(distance,[43,0],[20,-24],true)

subdistance = 0
subnavi.on "change:y", ->
	subdistance = subnavi.y
# 	print subdistance

cscroll.on Events.ScrollEnd, -> 

	if distance < 0 && distance > -43
		subnavi.states.switch('b')
		search.states.switch('b')
		cscroll.scrollToPoint(y: temp + 43 + distance)
	
	if distance > 0 && distance < 43
		subnavi.states.switch('a')
		search.states.switch('a')
		cscroll.scrollToPoint(y: temp - 43 - distance)
				