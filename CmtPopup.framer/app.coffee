Framer.Defaults.Animation =
	time: 0.2
	curve: Bezier.easeOut
# 	curve: Spring(damping:.8)
popup.states =
	hide:
		y: 410
		opacity: 0
	appear:
		y: 400
		opacity:1
popup.stateSwitch('hide')

bg.onClick ->
	popup.stateCycle('hide','appear')