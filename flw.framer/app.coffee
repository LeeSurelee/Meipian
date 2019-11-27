home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeIn
layers = []
pp.scale = 0

flww = ->
	n = Utils.randomNumber(50,100)
	for i in [0..n]
		layer = flw1.copy()
		layer.x = Utils.randomNumber(-28,400)
		layer.y = -flw.height - 10
		layer.rotationZ = Utils.randomNumber(-90,90)
		layer.parent = home
	# 	layer.y = Utils.randomNumber(0,)
		layer.animate
			y: 750 + flw.height
# 			x: Utils.randomNumber(-28,400)
			rotationZ:  Utils.randomNumber(-180,180)
			options: 
				time: Utils.randomNumber(4,8)
				delay: Utils.randomNumber(0,8)
		layers.push layer
		for layer in layers
			layer.placeBehind(mask)
		Utils.delay 4,->
			mask.animate
				opacity: 1
				options: 
					curve: Spring(damping: .8)
					time: 0.3
			pp.animate
				opacity: 1
				scale: 1
				options: 
					time: 0.3
					curve: Spring(damping: .8)

		Utils.delay 16,->
			for layer in layers
				layer.destroy()
		
# 	content.animate
# 		y: -500
# 		options: 
# 			time: 5
# 			delay: 2
# 			curve: Bezier.linear
pp.onClick ->
	pp.animate
		opacity: 0
		scale: 0.1
		options: 
			time: 0.3
			curve: Bezier.easeInOut
	mask.animate
		opacity: 0
		options: 
			curve: Spring(damping: .8)
			time: 0.3
flww()
Utils.interval 18, ->
	flww()
	pp.animate
		opacity: 0
		scale: 0
		options: 
			time: 0.3
			curve: Bezier.easeInOut
	mask.animate
		opacity: 0

