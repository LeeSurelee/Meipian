Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut
	

popup.states =
	a:
		y: 667
	b:
		y: 600
	
home.onClick ->
	popup.stateCycle('a','b')
	
scroll = ScrollComponent.wrap(scroll_1)

scroll.parent = home
scroll.sendToBack()
scroll.scrollHorizontal = false

scroll_1.on "change:y" ,->
	num = scroll.scrollY
# 	print num
	popup.y = Utils.modulate(num,[100,167],[667,600],true)