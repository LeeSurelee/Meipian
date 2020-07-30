{LottieLayer} = require 'LottieLayer'

home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

Framer.Defaults.Animation =
	time: 2
	curve: Spring(damping: 0.6)
	
badge = new LottieLayer
	name: "badge"
	path: "images/badge.json"
	autoplay: false
	y: 0
	parent: content
	x: Align.center
	loop: false
	width: 380
	speed: 1
	direction: 1

badge.placeBehind(light)

icon.states =
	show: 
		opacity: 1
		rotationY: 0 

	hide:
		opacity: 0
		rotationY: -200

icon.stateSwitch('hide')
	
icon2.states =
	show: 
		opacity: 1
		rotationY: 0 


	hide:
		opacity: 0
		rotationY: 200

icon2.stateSwitch('hide')

light.states =
	show: 
		opacity: 1
	hide:
		opacity: 0
		
light.stateSwitch('hide')

state = 0

icon.stateCycle('show')
icon2.stateCycle('show')
Utils.delay .3,->
	badge.play()
	light.stateCycle('show',time: 0.3)
	Utils.delay .1,->
		light.stateCycle('hide',time: 0.3)
		Utils.delay .2,->
			light.stateCycle('show',time: 1.2)
			state = 1
			Utils.delay 3,->
				light.stateSwitch('hide')
				icon2.stateSwitch('hide')
				icon.stateSwitch('hide')

Utils.interval 5,->
	icon.stateCycle('show')
	icon2.stateCycle('show')
	Utils.delay .2,->
		badge.goToAndPlay(0)
		light.stateCycle('show',time: 0.3)
		Utils.delay .1,->
			light.stateCycle('hide',time: 0.3)
			Utils.delay .2,->
				light.stateCycle('show',time: 1.2)
				state = 1
				Utils.delay 3,->
					light.stateSwitch('hide')
					icon2.stateSwitch('hide')
					icon.stateSwitch('hide')
					
