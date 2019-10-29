Framer.Defaults.Animation =
	time: 0.6
	curve: Bezier.easeInOut
animation =->
	sc.animate
		x: -150
	Utils.delay 1.2,->
		sc.animate
			x: 0
animation()

home.onClick ->
	animation()