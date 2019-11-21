Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeIn
layers = []
flww = ->
	n = Utils.randomNumber(20,100)
	for i in [0..n]
		layer = flw.copy()
		layer.x = Utils.randomNumber(-28,400)
		layer.y = -flw.height - 10
	# 	layer.y = Utils.randomNumber(0,)
		layer.animate
			y: 750 + flw.height
			options: 
				time: Utils.randomNumber(2,4)
				delay: Utils.randomNumber(0,2)
		layers.push layer
		Utils.delay 7,->
			for layer in layers
				layer.destroy()
flww()
Utils.interval 9, ->
	flww()
