{LottieLayer} = require 'LottieLayer'

X.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
	
headerHeight = 115
refreshThreshold = 160
startpoint = 30 + 40
endpoint = 140 + 40
Framer.Defaults.Animation =
# 	time: 0.3
	curve: Spring(damping:1)
# customAnim = new LottieLayer
# 	name: "customAnim"
# 	path: "images/loading.json"

Register = new LottieLayer
	name: "Register"
	path: "images/register2.json"
	autoplay: false
	parent: Navi
	y: 12
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
Register.bringToFront()

date = new TextLayer
	text: Utils.randomChoice([29,28,31])
	parent: Navi
	fontSize: 12
	x: 18
	y: 35
	fontFamily: "Pingfang SC"
	color: "black"
	fontWeight: 450

Award = new LottieLayer
	name: "Award"
	path: "images/award.json"
	autoplay: false
	parent: Navi
	y: 12
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
Award.bringToFront()

Award.opacity = 0

Utils.delay .3,->
	Register.play()
	Utils.delay 7.9, ->
		Register.pause()
		Utils.delay 3, ->
			Register.opacity = 0
			Award.opacity = 1
			Utils.delay 1, ->
				date.animate
					opacity: 0
				Utils.delay .3, ->
					Award.play()
					Utils.delay 7.9, ->
			Award.pause()
customAnim = new LottieLayer
	name: "customAnim"
	path: "images/loading.json"
	autoplay: true
	parent: content
	y: Align.center
	loop: true
	scale: 1
	x: Align.center
	width: 120
	height: 55
	speed: 1
	direction: 1
customAnim.bringToFront()

Reset.onClick ->
	content.height = Utils.randomNumber(55,551)
	customAnim.y = Align.center

Allcompleted = new LottieLayer
	name: "Allcompleted"
	path: "images/allcompleted.json"
	autoplay: true
	parent: X
	y: 80
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1


award = new LottieLayer
	name: "award"
	path: "images/award.json"
	autoplay: false
	autoplay: true
	parent: X
	y: 145
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
	
register = new LottieLayer
	name: "register"
	path: "images/register.json"
	autoplay: false
	autoplay: true
	parent: X
	y: 205
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
	
dot = new LottieLayer
	name: "dot"
	path: "images/dot.json"
	autoplay: false
	autoplay: true
	parent: X
	y: 265
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
	
award-withdot = new LottieLayer
	name: "award-withdot"
	path: "images/award-withdot.json"
	autoplay: false
	autoplay: true
	parent: X
	y: 335
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1
	
register-withdot = new LottieLayer
	name: "register-withdot"
	path: "images/register-withdot.json"
	autoplay: false
	autoplay: true
	parent: X
	y: 395
	x: 12
	loop: true
	scale: 1
	width: 70
	speed: 1
	direction: 1