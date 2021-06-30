home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
	
Framer.Defaults.Animation =
	time: 0.22
	curve: Spring(damping: 0.8)
	
	
Scroll = ScrollComponent.wrap(content)

Scroll.scrollHorizontal = false

Scroll.parent = home

head2.bringToFront()

head2.states =
	show:
		opacity:1
	hide:
		opacity:0
	
head2.stateSwitch('hide')

follow.states = 
	show:
		opacity:1
# 		x:30
		y: 595
	hide:
		opacity: 0
# 		x: 20
		y: 667
follow.stateSwitch('hide')

Join.states = 
	show:
		x:122
		width: 130
	hide:
		x:230+58
		width: 72
		
Join.stateSwitch('hide')

join.states =
	show:
		x:29
	hide:
		x: 18
		
join.stateSwitch('hide')

topic.states =
	show:
		opacity:1
	hide:
		opacity:0
topic.stateSwitch('hide')

distance = 0
state = 3

Scroll.onMove ->
	distance = Scroll.scrollY
	if distance > 140
		state = 1
	else
		state = 0
	if state == 1
# 		Join.stateCycle('hide')
# 		join.stateCycle('hide')
# 		topic.stateCycle('hide')
# 		Utils.delay 0.1, ->
		follow.stateCycle('show')
	else
		follow.stateCycle('hide')
# # 		Utils.delay 0.1, ->
# 		Join.stateCycle('show')
# 		join.stateCycle('show')
# 		topic.stateCycle('show')
# 	print distance
	
Scroll.on Events.Scroll, ->
	head2.opacity = Utils.modulate(distance,[140,150],[0,1],true)
	head2.opacity = Utils.modulate(distance,[140,150],[0,1],true)