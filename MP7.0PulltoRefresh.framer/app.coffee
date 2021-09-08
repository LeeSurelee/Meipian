{LottieLayer} = require 'LottieLayer'

headerHeight = 67 + 68
refreshThreshold = 140 + 68
startpoint = 50 + 68
endpoint = 140 + 68
Framer.Defaults.Animation =
# 	time: 0.3
	curve: Spring(damping:0.8)
# customAnim = new LottieLayer
# 	name: "customAnim"
# 	path: "images/loading2.json"

X.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

soundTab = new Audio("sounds/Tab1.m4a")
soundRefresh = new Audio("sounds/Refresh.wav")

customAnim = new LottieLayer
	name: "customAnim"
	path: "images/loading2.json"
	autoplay: true
	parent: X
	y: 50
	loop: true
	x: Align.center
	width: 90
	speed: 1
	direction: 1
customAnim.sendToBack()

customAnim2 = new LottieLayer
	name: "customAnim2"
	path: "images/pull.json"
	autoplay: false
	parent: X
	y: 86
	loop: true
	x: Align.center
	width: 90
	speed: 1
	direction: 1
customAnim2.sendToBack()

Restart.animate
	y: 542
	options:
		curve: Spring(damping:.8)
		
Utils.delay 8, ->
	Restart.animate
		y: 667
scroll_1.draggable.enabled = true
scroll_1.draggable.horizontal = false
scroll_1.draggable.overdrag = false

scroll_1.draggable.onDragMove ->
	scroll_1.draggable.speedY = Utils.modulate(scroll_1.y, [0, refreshThreshold], [1, 0.1], true)
	if scroll_1.y < headerHeight
		scroll_1.y = headerHeight
scroll_1.draggable.onDragEnd ->
	if scroll_1.draggable.offset.y < 0
		return
	scroll_1.draggable.speedY = 1
	if scroll_1.y >= refreshThreshold
		scroll_1.animate
			y: refreshThreshold
		customAnim.play()
		Utils.delay Utils.randomNumber(2.5,4), ->
			scroll_1.animate
				y: headerHeight
			soundRefresh.play()
			Utils.delay 1, ->
				customAnim.goToAndStop(0)
	else
		scroll_1.animate
				y: headerHeight
distance = 0
frame = 0
scroll_1.on "change:y" ,->
	distance = scroll_1.y
# 	print distance
	frame = (distance-135)/((208-135)/25)
	customAnim2.goToAndStop(frame)
	customAnim2.y = Utils.modulate(distance, [startpoint, endpoint], [70, 140], true)
	customAnim2.opacity = Utils.modulate(distance, [endpoint-1, endpoint], [1,0], true)
	customAnim.opacity = Utils.modulate(distance, [endpoint-1, endpoint], [0,1], true)
# 	customAnim.scale = Utils.modulate(distance, [startpoint, endpoint], [.6,1], true)
	customAnim.y = Utils.modulate(distance, [startpoint, endpoint], [-50 + 60, 80 + 60], true)

tabbar3.onClick ->
	soundTab.play()
	
