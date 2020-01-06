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

# scroll_1.draggable.enabled = true
# scroll_1.draggable.horizontal = false
# scroll_1.draggable.overdrag = false
# 
# scroll_1.draggable.onDragMove ->
# 	scroll_1.draggable.speedY = Utils.modulate(scroll_1.y, [0, refreshThreshold], [1, 0.1], true)
# 	if scroll_1.y < headerHeight
# 		scroll_1.y = headerHeight
# scroll_1.draggable.onDragEnd ->
# 	if scroll_1.draggable.offset.y < 0
# 		return
# 	scroll_1.draggable.speedY = 1
# 	if scroll_1.y >= refreshThreshold
# 		scroll_1.animate
# 			y: refreshThreshold
# 		customAnim.play()
# 		Utils.delay Utils.randomNumber(1,3), ->
# 			scroll_1.animate
# 				y: headerHeight
# 			soundRefresh.play()
# 			Utils.delay 1, ->
# 				customAnim.goToAndStop(0)
# 	else
# 		scroll_1.animate
# 				y: headerHeight
distance = 0
# scroll_1.on "change:y" ,->
# 	distance = scroll_1.y
# # 	print distance
# 	customAnim.opacity = Utils.modulate(distance, [startpoint, endpoint], [0,1], true)
# 	customAnim.scale = Utils.modulate(distance, [startpoint, endpoint], [.6,1], true)
# 	customAnim.y = Utils.modulate(distance, [startpoint, endpoint], [-85, 150], true)
