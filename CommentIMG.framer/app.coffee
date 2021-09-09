w = 1
h = 1
ratio = 0
imaw2 = (Screen.width - 42)/1.8
imaw25 = (Screen.width - 40)*5/6
ima.image = Utils.randomImage()
ima.width = imaw2
# 		ima.width = imaw2/2.5
ima.height = imaw2

slider1 = new SliderComponent
	y: 600
	x: Align.center

slider2 = new SliderComponent
	y: 600
	x: Align.center
	opacity: 0
slider2.sendToBack()
h = 12
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

	ball.rotation = Utils.round(-alpha.rotation)

	if ratio >= 1 && ratio <= 2.5
		ima.width = imaw2
		ima.height = ima.width * h/w
		displayIma()

	else if ratio > 2.5
		ima.height = ima.width / 2.5
		ima.width = imaw2
		displayIma()
		
	else if ratio >= .4 && ratio < 1
		ima.height = imaw2
		ima.width = ima.height * w/h
		displayIma()
		
	else if ratio <.4 && ratio >=1/3
		ima.height = imaw2
		ima.width = imaw2*ratio
		displayIma()
		
	else if ratio < 1/3 
		ima.height = imaw2
		ima.width = imaw2/3
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
