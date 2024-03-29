{LottieLayer} = require 'LottieLayer'

Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

X.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

portrait.image = Utils.randomImage()
portrait2.image = Utils.randomImage()
likea = new LottieLayer
	name: "Register"
	path: "images/like1.json"
	parent: like
	autoplay: false
	y: -52.5
	x: -25
	loop: false
	scale: .56
	width: 70
	speed: 1
	direction: 1

likea.sendToBack()
likea.opacity = 0
unlike.onClick ->
	likea.bringToFront()
	unlike.animate 
		opacity: 0
# 	Utils.delay 0.1,->
	likea.opacity = 1
	likea.goToAndPlay( 0 )
		
likea.onClick ->
	likea.sendToBack()
	likea.opacity = 0
	unlike.animate
		opacity: 1
		
bg.onClick ->
	
likea3 = new LottieLayer
	name: "likea3"
	path: "images/like1.json"
	autoplay: false
	y: Align.center
	x: Align.center
	loop: false
	width: 70
	height: 70
	scale: 1.2
	speed: 1
	direction: 1
	
	
likea2 = new LottieLayer
	name: "Register2"
	path: "images/like-2.json"
	parent: like2
	autoplay: false
	y: -52.5
	x: -25
	loop: false
	scale: .56
	width: 70
	speed: 1
	direction: 1

likea2.sendToBack()
# likea2.opacity = 0
unlike2.onClick ->
	likea2.bringToFront()
# 	Utils.delay 0.1,->
	likea2.opacity = 1
	likea2.goToAndPlay( 0 )
		
likea2.onClick ->
	likea2.sendToBack()
	likea2.goToAndStop(0)
	unlike2.animate
		opacity: 1


likea4 = new LottieLayer
	name: "Register4"
	path: "images/like-2.json"
	parent: btm
	autoplay: false
	y: -11
	x: 131
	loop: false
	scale: .56
	width: 70
	height:70
	speed: 1
	direction: 1
	
state = 0
btm.onClick ->
	if state == 0
		likea4.goToAndPlay(0)
		Utils.delay 0.1,->
			likea3.goToAndPlay( 0 )
		state = 1
	else if state == 1
		likea4.goToAndStop(0)
		state = 0
	
