Framer.Defaults.Animation =
	time: 0.8
	curve: Bezier.easeInOut
# layers = []
# flww = ->
# 	n = Utils.randomNumber(20,80)
# 	for i in [0..n]
# 		layer = flw2.copy()
# 		layer.x = Utils.randomNumber(-28,400)
# 		layer.y = -flw.height - 10
# 	# 	layer.y = Utils.randomNumber(0,)
# 		layer.animate
# 			y: 750 + flw.height
# 			options: 
# 				time: Utils.randomNumber(2,4)
# 				delay: Utils.randomNumber(0,2)
# 		layers.push layer
# 		Utils.delay 7,->
# 			for layer in layers
# 				layer.destroy()
# flww()
# Utils.interval 9, ->
# 	flww()
flws.opacity = 0

flws.animate
	opacity: 1
	options: 
		time: 0
Utils.delay 0.01,->
	flws.animate
		opacity: 0
		y: 98