Framer.Defaults.Animation =
	time: 0.2
	curve: Bezier(.42,0,.58,1)
# 	curve: Bezier.easeInOut

home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

universal.states =
	a:
		y: 33
	b:
		y: -81
universal.stateSwitch('b')

animation.onClick ->
	universal.stateCycle('a',curve:Spring(damping: 0.8),time: 0.3)
	Utils.delay 10,->
		universal.stateCycle('b',curve:Spring(damping: 0.8),time: 0.3)

vippackage = [one, two, three, four]
pic = [portrait]

wording.template =
	m: 10

description.template = 
	w: "连续自动包月，每月15元，可随时取消。"
	
for layer in pic
	layer.image = Utils.randomImage()

Mask.sendToBack()

Mask.states =
	on:
		opacity: 1
	off:
		opacity: 0
Mask.stateSwitch('off')

popuping.states =
	on:
		y: 667 - popuping.height
	off:
		y: 667
popuping.stateSwitch('off')

popup.states =
	on:
		opacity: 1
	off:
		opacity: 0
popup.stateSwitch('off')

precontent.states =
	on:
		opacity: 1
	off:
		opacity: 0
precontent.stateSwitch('on')

more.states =
	on:
		opacity: 1
	off:
		opacity: 0
more.stateSwitch('off')

vip.states =
	on:
		height: 217 - 30
	off:
		height: 110
vip.stateSwitch('off')

vipdscrpt.states =
	on:
		y: 204
	off:
		y: 142
vipdscrpt.stateSwitch('off')

clickmore.states =
	on:
		rotation: 90
	off:
		rotation: 0
clickmore.stateSwitch('off')

help.states =
	on:
		x: 0
	off:
		x: 375
help.stateSwitch('off')


content.onClick ->
	Mask.placeBehind(popuping)
	Mask.stateCycle('on')
	popuping.stateCycle('on')
	Utils.delay 1.3,->
		popup.stateCycle('on')
		precontent.stateCycle('off')
		
Mask.onClick ->
	Mask.stateCycle('off')
	popuping.stateCycle('off')
	Utils.delay 0.3, ->
		Mask.sendToBack()
		
cttScroll = ScrollComponent.wrap(contentScroll)
cttScroll.scrollHorizontal = false
cttScroll.contentInset = bottom: 100
cttScroll.mouseWheelEnabled = true

pkgScroll = ScrollComponent.wrap(packageScroll)
pkgScroll.scrollVertical = false
pkgScroll.contentInset = left: 16, right: 16
pkgScroll.mouseWheelEnabled = true

cttScroll.directionLock = true
pkgScroll.directionLock = true

for layer in vippackage
	layer.onClick ->
		for layer in vippackage
			layer.backgroundColor = '#fff'
			layer.borderColor = '#E9EBEF'
			@backgroundColor = '#FFF8EE'
			@borderColor = '#F1C992'
		if @name == 'four'
			pkgScroll.animate
				scrollX: 95
			wording.template =
				m: 20
			monthly.opacity = 0
			description.template = 
				w: "原价25元/月，限时20元/月，开通1个月会员。"
		else if @name == 'one'
			pkgScroll.animate
				scrollX: 0
			wording.template =
				m: 10
			monthly.opacity = 1
			description.template = 
				w: "连续自动包月，每月15元，可随时取消。"
		else if @name == 'two'
			wording.template =
				m: 55
			monthly.opacity = 0
			description.template = 
				w: "原价75元/月，限时55元/月，开通3个月会员。"
		else if @name == 'three'
			wording.template =
				m: 199
			monthly.opacity = 0
			description.template = 
				w: "原价300元/年，限时199元/年，开通1年会员。"

vip.onClick ->
	vip.stateCycle('on','off')
	more.stateCycle('on','off')
	vipdscrpt.stateCycle('on','off')
	clickmore.stateCycle('on','off')
helpclick.onClick ->
	popuping.animate
		x: -667/4
	help.stateCycle('on')
help.onClick ->
	popuping.animate
		x: 0
	help.stateCycle('off')


