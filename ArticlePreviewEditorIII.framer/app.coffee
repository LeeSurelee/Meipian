#presettings
pics = [ContentPic1,ContentPic2,PopupPic,MusicPic]
BtmNavi = [BtmNavi1,BtmNavi2,BtmNavi3,BtmNavi4]
# BtmNavi.push()
home.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

Framer.Defaults.Animation =
	time: 0.6
	curve: Spring(damping: 1)
	
Gap = 8
MusicGap = 16
PopupY = 30
CollapsePosition = 49
BtmNaviState = 1
open_1.opacity = 0
collectIcon2.opacity = 0

#折叠状态设置
CollapseIcon.states =
	fold:
		rotation: 180
	unfold:
		rotation: 0
Collapse.states = 
	fold:
		y: 612 - CollapsePosition
	unfold1:
		y: 667 - PopupBtmNavi1.height - CollapsePosition
	unfold2:
		y: 667 - PopupBtmNavi2.height - CollapsePosition
	unfold3:
		y: 667 - PopupBtmNavi3.height - CollapsePosition
	unfold4:
		y: 667 - PopupBtmNavi4.height - CollapsePosition
Collapse.stateSwitch('unfold1')

open_1.states =
	fold:
		opacity: 1
	unfold:
		opacity: 0
close_1.states =
	fold:
		opacity: 0
	unfold:
		opacity: 1

#底导点击状态设置
for layer in pics
	layer.image = Utils.randomImage()
	
for layer,i in BtmNavi
	layer.onClick ->
# 		print this.name
		BtmNaviIndicator.animate
			x: this.x + 24
			options: 
				time: 0.3

		if this.name == "BtmNavi1"# || PopupBtmNavi1.state == 'close'
			PopupBtmNavi1.stateCycle('close','open')
			PopupBtmNavi2.stateCycle('close')
			PopupBtmNavi3.stateCycle('close')
			PopupBtmNavi4.stateCycle('close')
			if PopupBtmNavi1.states.current.name == 'close'
				BtmNaviState = 1
				Collapse.stateCycle('fold')
				CollapseIcon.stateCycle('fold')
				open_1.stateCycle('fold')
				close_1.stateCycle('fold')
			else if PopupBtmNavi1.states.current.name == 'open'
				BtmNaviState = 1
				Collapse.stateCycle('unfold1')
				CollapseIcon.stateCycle('unfold')
				open_1.stateCycle('unfold')
				close_1.stateCycle('unfold')
		if this.name == "BtmNavi2"# || PopupBtmNavi1.state == 'close'
			PopupBtmNavi1.stateCycle('close')
			PopupBtmNavi2.stateCycle('open','close')
			PopupBtmNavi3.stateCycle('close')
			PopupBtmNavi4.stateCycle('close')
			if PopupBtmNavi2.states.current.name == 'close'
				BtmNaviState = 2
				Collapse.stateCycle('fold')
				CollapseIcon.stateCycle('fold')
				open_1.stateCycle('fold')
				close_1.stateCycle('fold')
			else if PopupBtmNavi2.states.current.name == 'open'
				BtmNaviState = 2
				Collapse.stateCycle('unfold2')
				CollapseIcon.stateCycle('unfold')
				open_1.stateCycle('unfold')
				close_1.stateCycle('unfold')
		if this.name == "BtmNavi3"# || PopupBtmNavi1.state == 'close'
			PopupBtmNavi1.stateCycle('close')
			PopupBtmNavi2.stateCycle('close')
			PopupBtmNavi3.stateCycle('open','close')
			PopupBtmNavi4.stateCycle('close')
			if PopupBtmNavi3.states.current.name == 'close'
				BtmNaviState = 3
				Collapse.stateCycle('fold')
				CollapseIcon.stateCycle('fold')
				open_1.stateCycle('fold')
				close_1.stateCycle('fold')
			else if PopupBtmNavi3.states.current.name == 'open'
				BtmNaviState = 3
				Collapse.stateCycle('unfold3')
				CollapseIcon.stateCycle('unfold')
				open_1.stateCycle('unfold')
				close_1.stateCycle('unfold')
		if this.name == "BtmNavi4"# || PopupBtmNavi1.state == 'close'
			PopupBtmNavi1.stateCycle('close')
			PopupBtmNavi2.stateCycle('close')
			PopupBtmNavi3.stateCycle('close')
			PopupBtmNavi4.stateCycle('open','close')
			if PopupBtmNavi4.states.current.name == 'close'
				BtmNaviState = 4
				Collapse.stateCycle('fold')
				CollapseIcon.stateCycle('fold')
				open_1.stateCycle('fold')
				close_1.stateCycle('fold')
			else if PopupBtmNavi4.states.current.name == 'open'
				BtmNaviState = 4
				Collapse.stateCycle('unfold4')
				CollapseIcon.stateCycle('unfold')
				open_1.stateCycle('unfold')
				close_1.stateCycle('unfold')

#内容滑动收起
ContentScroll = ScrollComponent.wrap(Content)
ContentScroll.scrollHorizontal = false
ContentScroll.contentInset =
	bottom: 300
ContentScroll.on Events.SwipeUpEnd, (event,layer) ->
	PopupBtmNavi1.stateCycle('close')
	PopupBtmNavi2.stateCycle('close')
	PopupBtmNavi3.stateCycle('close')
	PopupBtmNavi4.stateCycle('close')
	Collapse.stateCycle('fold')
	CollapseIcon.stateCycle('fold')
	open_1.stateCycle('fold')
	close_1.stateCycle('fold')
	
ContentScroll.on Events.SwipeDownEnd, (event,layer) ->
	if BtmNaviState == 1
		PopupBtmNavi1.stateCycle('open')
		Collapse.stateCycle('unfold1')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 2
		PopupBtmNavi2.stateCycle('open')
		Collapse.stateCycle('unfold2')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 3
		PopupBtmNavi3.stateCycle('open')
		Collapse.stateCycle('unfold3')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 4
		PopupBtmNavi4.stateCycle('open')
		Collapse.stateCycle('unfold4')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')

#收起按钮点击状态设置
Collapse.onClick ->
# 	print Collapse.states.current.name
# 	print nammy
	if Collapse.states.current.name == 'unfold1' or Collapse.states.current.name == 'unfold2'or Collapse.states.current.name == 'unfold3'or Collapse.states.current.name == 'unfold4'
		PopupBtmNavi1.stateCycle('close')
		PopupBtmNavi2.stateCycle('close')
		PopupBtmNavi3.stateCycle('close')
		PopupBtmNavi4.stateCycle('close')
		Collapse.stateCycle('fold')
		CollapseIcon.stateCycle('fold')
		open_1.stateCycle('fold')
		close_1.stateCycle('fold')
	if BtmNaviState == 1
		PopupBtmNavi1.stateCycle('open')
		Collapse.stateCycle('unfold1')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 2
		PopupBtmNavi2.stateCycle('open')
		Collapse.stateCycle('unfold2')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 3
		PopupBtmNavi3.stateCycle('open')
		Collapse.stateCycle('unfold3')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')
	if BtmNaviState == 4
		PopupBtmNavi4.stateCycle('open')
		Collapse.stateCycle('unfold4')
		CollapseIcon.stateCycle('unfold')
		open_1.stateCycle('unfold')
		close_1.stateCycle('unfold')

#收藏按钮设置
for i in [0..6]
	layer = Master.copy()
	PopupPic.image = Utils.randomImage()
	layer.parent = MasterScroll
	layer.y = 0 
	layer.x = Master.width * i + Gap * i + 158 
	star = collect.copy()
	star.parent = layer
	star.x = 42
	star.y = 4
	star.subLayersByName("collectIcon2")[0].states =
		yes:
			opacity: 1
			scale: 1.05
		no:
			opacity: 0
			scale: 1
	star.onClick ->
		@.subLayersByName("collectIcon2")[0].stateCycle('yes','no')

#音乐层滚动设置
for i in [0..6]
	layer = MasterMusic.copy()
	MusicPic.image = Utils.randomImage()
	layer.parent = MusicScroll
	layer.y = 9
	layer.x = MasterMusic.width * i + MusicGap * i + 184 

#所有弹层状态
PopupScroll = ScrollComponent.wrap(MasterScroll)
PopupScroll.scrollVertical = false
PopupScroll.contentInset =
	right: Gap
	
PopupBtmNavi1.states =
	open:
		y: 439
	close:
		y: 667 - PopupY
# PopupBtmNavi1.stateSwitch('close')

PopupMusicScroll = ScrollComponent.wrap(MusicScroll)
PopupMusicScroll.scrollVertical = false
PopupMusicScroll.contentInset =
	right: MusicGap
	
PopupBtmNavi2.states =
	open:
		y: 446
	close:
		y: 667 - PopupY
PopupBtmNavi2.stateSwitch('close')

PopupFontScroll = ScrollComponent.wrap(FontScroll)
PopupFontScroll.scrollVertical = false
PopupFontScroll.contentInset = 
	right: Gap
	
PopupBtmNavi3.states =
	open:
		y: 521
	close:
		y: 667 - PopupY
PopupBtmNavi3.stateSwitch('close')

PopupBtmNavi4.states =
	open:
		y: 419
	close:
		y: 667 - PopupY
PopupBtmNavi4.stateSwitch('close')

TypeScroll = ScrollComponent.wrap(typeScroll)
TypeScroll.scrollHorizontal = false
TypeScroll.height = PopupBtmNavi4.height
TypeScroll.parent = PopupBtmNavi4
TypeScroll.contentInset = 
	bottom: 20 + BtmNavi4.height

typeScroll.onClick ->
	Content.animate
		opacity: 0
	Utils.delay 0.3,->
		Content.animate
			opacity: 1
