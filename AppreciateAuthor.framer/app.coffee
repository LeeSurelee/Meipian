# Framer.Device.customize
# 	screenWidth: 750*2
# 	screenHeight: 1334*2

Device.width = 375 *2 
Device.height = 667 *2
if Screen.height >= 667 || Screen.width == 375
	Device.scale = 375/Screen.width/2
else if Screen.height >= 667 || Screen.width > 375
	Device.scale = Screen.width/375/2
else
	Device.scale = Screen.height/667/2

Device.y = 
Device.x = Align.center
Framer.Defaults.Animation =
	time: 0.4
	curve: 'Spring(damping:1)'
	
Device.center()

b2.states =
	a:
		x: 202 + 750
	b:
		x: 202
b1.states =
	a:
		x: 41-750
	b: 
		x: 41

bg.states =
	a:
		height: 658
	b:
		height: 461 +30

like.states =
	a:
		y: 500
		opacity: 1
	b:
		y: 303+30
		opacity: .3
group.clip = true

b2.stateSwitch('a')

group.onClick ->
	b1.stateCycle('a','b')
	b2.stateCycle('b','a')
	bg.stateCycle('b','a')
	like.stateCycle('b','a')
