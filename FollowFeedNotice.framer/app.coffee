Framer.Defaults.Animation =
	time: 0.8
	curve: Spring(damping: 0.7)
	

home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center


pop.states=
	hide: 
		y: 59
	show:
		y: 118
		
pop.stateSwitch('hide')

Scroll = ScrollComponent.wrap(content)
Scroll.scrollHorizontal = false
Scroll.parent = home
Scroll.sendToBack()
Scroll.height = 511

Utils.delay 2,->
	pop.stateCycle("show")
# 	Utils.delay 6,->
# 		if pop.states.current.name == "show"
# 			pop.stateCycle('hide')
Utils.interval 6,->
	if pop.states.current.name == "hide"
		pop.stateCycle("show")
	else if pop.states.current.name == "show"
		pop.stateCycle('hide')

# Scroll.content.on "change:y", ->
Scroll.onTouchStart ->
	if pop.states.current.name == "show"
# 		print Utils.randomNumber(1,100)
		Utils.delay 2,->
			pop.stateCycle('hide')
			
pop.onClick ->
	Scroll.animate
		scrollY: 0
	pop.stateCycle('hide')
		