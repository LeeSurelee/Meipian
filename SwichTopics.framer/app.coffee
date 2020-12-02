Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut
	
home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center
	
overdrag = 50
refreshThreshold = 140
over = 100

# scroll = ScrollComponent.wrap(content)
# scroll.scrollHorizontal = false
# scroll.contentInset = bottom: 15

# scroll.on "change:y" ,->
# 	distance = scroll.y
# 	print distance
content.states =
	a:
		y: 30
	b: 
		y: 667
	c:
		y: -667
	d: 
		y: 5

content.draggable.enabled = true
content.draggable.horizontal = false

distance = 0
content.on "change:y" ,->
	distance = content.y
# 	print distance
content.onDragEnd ->
	if distance < 100
		content.animate
			y: 5
	else if distance >= 100
		content.animate
			y: 30
			
content.draggable.onDragMove ->
	if content.y > 0
		content.draggable.speedY = Utils.modulate(content.y, [0, refreshThreshold], [1, 0.1], true)
	else if content.y < 0
		content.draggable.speedY = Utils.modulate(content.y, [0, -refreshThreshold], [1, 0.1], true)


content.draggable.onDragEnd ->
	if content.y > over
		content.stateCycle("b")
		subtab2.sendToBack()
		Utils.delay 1,->
			content.stateCycle("a")
	else if content.y < -over
		content.stateCycle("c")
		subtab2.placeBefore(subtab)
		Utils.delay 1,->
			content.stateCycle("d")
			subtab2.sendToBack()
	else if content.y < over && content.y > 0
		content.stateCycle('a')
	else if content.y > -over && content.y < 0
		content.stateCycle('d')