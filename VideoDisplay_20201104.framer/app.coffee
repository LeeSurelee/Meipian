w = 1
h = 1
ratio = 0
imaw2 = (Screen.width-40)*9/7
imaw25 = (Screen.width - 40)
ima.image = Utils.randomImage()
# ima.width = imaw2*1.1
# # 		ima.width = imaw2/2.5
# ima.height = imaw2*1.45
ima.width = imaw2*.5
# 		ima.width = imaw2/2.5
ima.height = imaw2*7/9

slider1 = new SliderComponent
	y: 600
	x: Align.center

slider2 = new SliderComponent
	y: 600
	x: Align.center
	opacity: 0
slider2.sendToBack()
h = 40
displayIma = ->
	wid1.template =
		w: Utils.round(ima.width)
		h: Utils.round(ima.height)
		
changepic = ->
	ratio = w/h
	rate.template =
		r: Math.round(ratio*1000)/1000
	betaValue.template = 
# 		b: Utils.round(event.beta)
	wid.template =
		w: Utils.round(ratio * 222)
		h: Utils.round(222/ratio)
	gammaValue.template = 
# 		g: Utils.round(event.gamma)

	# Move ball around.
	ball.rotation = Utils.round(-alpha.rotation)
	if ratio >= 1 && ratio <= 16/9
		ima.height = (-9/42*ratio+37/42)*imaw2
		ima.width = (1/7*ratio + 11/21)*imaw2
		displayIma()
		
	else if ratio > 16/9
		ima.height = imaw2*.5
		ima.width = imaw2*7/9
		displayIma()

	else if ratio >= 9/16 && ratio < 1
		ima.height = (-16/63*ratio + 58/63)*imaw2 
		ima.width =  (8/21*ratio + 6/21)*imaw2 
		displayIma()
		
	else if ratio < 9/16 
		ima.height = imaw2*7/9
		ima.width = imaw2*.5

		displayIma()
slider1num = 0
slider2num = 0

slider1.on Events.SliderValueChange, ->
	slider1num = slider1.value
	w = Math.round(slider1num * 100)
# 	print w
	changepic()
# slider2.on Events.SliderValueChange, ->
# 	slider2num = slider2.value
# 	h = Math.round(slider2num * 100)
# 	changepic()
window.addEventListener "deviceorientation", (event) ->
	# Alpha values define rotation around the z-axis. Ranging from 0 to 360. 	
	alpha.rotation = Utils.round(event.alpha)
	alphaValue.template = 
		a: Utils.round(event.alpha)
	
	# Beta values define rotation around the y-axis. Ranging from -180 and 180.
	beta.y = Utils.modulate(event.beta, [-90, 90], [0, 80], true)


# 	print slider.value
# 	w = Utils.modulate(beta.y,[35,45],[10,1000],true)
# 	h = Utils.modulate(gamma.x,[35,45],[10,1000],true)
