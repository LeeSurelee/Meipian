Framer.Defaults.Animation =
	time: 0.35
	curve: Spring(damping: 0.9)

mask.states =
	a:
		opacity: 0
	b: 
		opacity: 1
		
popup.states =
	a:
		y: Screen.height
	b:
		y: 122
mask.stateSwitch('a')
popup.stateSwitch('a')

mask.onClick ->
	popup.stateCycle('a','b')
	mask.stateCycle('a','b')