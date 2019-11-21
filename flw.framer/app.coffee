Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeIn

n = Utils.randomNumber(50,100)
for i in [0..n]
	layer = flw.copy()
	layer.x = Utils.randomNumber(0,375)
	layer.y = -flw.height - 10
# 	layer.y = Utils.randomNumber(0,)
	layer.animate
		y: 750 + flw.height
		options: 
			time: Utils.randomNumber(2,4)
			delay: Utils.randomNumber(0,2)
			
			