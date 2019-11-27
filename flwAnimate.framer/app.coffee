
Framer.Defaults.Animation =
	time: 0.3
	curve: Spring(damping: 0.9)
	
portraits = []
m = 0

for i in [0..13]
	layer = portrait1.copy()
	layer.x = 33*(i%7)
	layer.y = 33*(i//7)
	layer.parent = portraitsGroup
	portraits.push layer
	
for layer in portraits
	layer.image = Utils.randomImage()
portraitsGroup.clip = true

chose.states =
	hide:
		y: Screen.height
	show:
		y: Screen.height - chose.height
payment.states =
	hide:
		y: Screen.height
	show:
		y: Screen.height - payment.height
		
mask1.states =
	hide:
		opacity: 0
	show:
		opacity: 1
		
mask2.states =
	hide:
		opacity: 0
	show:
		opacity: 1

flowerclick.onClick ->
	mask1.placeBehind(chose)
	mask1.stateCycle('show')
	chose.stateCycle('show')
	
confirm_1.onClick ->
	mask2.placeBehind(payment)
	mask2.stateCycle('show')
	payment.stateCycle('show')

pay.onClick ->
	mask1.sendToBack()
	mask2.sendToBack()
	mask1.stateCycle('hide')
	mask2.stateCycle('hide')
	chose.stateCycle('hide')
	payment.stateCycle('hide')
	flws()

choseclose.onClick ->
	mask1.sendToBack()
	mask1.stateCycle('hide')
	chose.stateCycle('hide')
	
mask1.onClick ->
	mask1.sendToBack()
	mask1.stateCycle('hide')
	chose.stateCycle('hide')

payment.onClick ->
	mask2.sendToBack()
	mask2.stateCycle('hide')
	payment.stateCycle('hide')
mask2.onClick ->


flwAnimate.states =
	hide:
		x: Screen.width
		opacity: 1
	show:
		x:191
	dismiss:
		y:48
		opacity: 0

flwAnimate.stateSwitch('hide')
flws =->
	Utils.delay 0.5,->
		flwAnimate.stateCycle('show',options:curve:Spring(damping: 0.8))
		Utils.delay 3,->
			num0.animate
				opacity: 0
				options:  
					time: 0.6
			Utils.delay 0.1,->
				num1.animate
					opacity: 1
					options:  
						time: 0.6
				flwAnimate.stateCycle('dismiss',time:1)
				for layer,i in portraits
					m = i + 1
					layer.x = 33*(m%7)
					layer.y = 33*(m//7)
				layer = portrait1.copy()
				layer.parent = portraitsGroup
				layer.image = Utils.randomImage()
				layer.borderWidth = 1
				layer.borderColor = "#E49C28"
				layer.x = 0
				layer.y = 0


	
