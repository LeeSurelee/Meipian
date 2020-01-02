screenA.props =
	width: 375
	height: 667
	x: Align.center
	y: Align.center

Framer.Defaults.Animation =
	time: 0.3
	curve: Spring(damping: 0.8)

# InputLayer Settings / Default animation
{InputLayer} = require "input"
# Wrap input layer
input = InputLayer.wrap(bg, text, multiLine: true)


# Keyboard Simulator
# Variables
lettersActive = true 
numbersActive = false
showLeftKey = false 
showRightKey = false
showLargeKey = false
# input.readonly = true

# Methods 		
## Show active key
showActiveKey = (key, showLeftKey, showRightKey) ->

	offsetX = 2 
	offsetY = 3
	
	currentActiveKey = activeKey
	currentActiveLetter = activeLetter
	
	if showLeftKey
		currentActiveKey = activeKeyLeft
		currentActiveLetter = activeLetterLeft
		offsetX = -19
		
	else if showRightKey
		currentActiveKey = activeKeyRight
		currentActiveLetter = activeLetterRight
		offsetX = 11
		
	else if showLargeKey
		currentActiveKey = activeKeyLarge
		currentActiveLetter = activeLetterLarge
		offsetX = -8
		
	currentActiveKey.opacity = 1
	currentActiveKey.point = 
		x: key.x - (key.width / 2) - 5 - offsetX
		y: key.y - currentActiveKey.height + key.height + offsetY
		
	if lettersActive
		currentActiveKey.parent = keyboard
		currentActiveLetter.text = key.name
	
	if numbersActive
		currentActiveKey.parent = numeric 
		currentActiveLetter.text = key.name
		currentActiveLetter.x = Align.center
	
	if shiftIconActive.visible
		currentActiveLetter.textTransform = "uppercase"			
	else
		currentActiveLetter.textTransform = "lowercase"
	ValueLength = input.value.length
	ListsRelocation = Math.round(ValueLength/70)


input.onValueChange ->
	FakeTitle.opacity=0
	title.opacity=1
	title.template = 
		t: input.value.length

	if input.value.length > 3
		fakeContent.opacity = 1
		text.opacity = 0
		title.text = "演示文字"
## Map all keys
mapLetterKeys = (e) ->	
	for key in letters.children
		name = String.fromCharCode(e.which) 
		
		if key.name is name
		
			if name is "q"
				showLeftKey = true
				showRightKey = false
			if name is "p"
				showLeftKey = false 
				showRightKey = true 
			
			showActiveKey(key, showLeftKey, showRightKey, showLargeKey)			

mapNumberKeys = (e) ->	
	for key in numbers.children
		name = String.fromCharCode(e.which) 
		
		if key.name is name
					
			if name is "1" or name is "-"
				showLeftKey = true
				showRightKey = false
				showLargeKey = false
			if name is "0" or name is "“"
				showLeftKey = false
				showRightKey = true
				showLargeKey = false
			if name is "."
				showLeftKey = false
				showRightKey = false 
				showLargeKey = true 
		
			showActiveKey(key, showLeftKey, showRightKey, showLargeKey)		
								
## Uppercase & Lowercase
setUppercase = ->
	for key in letters.children
		key.children[0].textTransform = "uppercase"
		key.children[0].x = Align.center()
		key.children[0].y = Align.center(1)
		shiftIconActive.visible = true
		shiftIcon.visible = false
		
setLowercase = ->
	for key in letters.children
		key.children[0].textTransform = "lowercase"
		key.children[0].x = Align.center()
		key.children[0].y = Align.center(-1)
		shiftIconActive.visible = false
		shiftIcon.visible = true
		
checkValue = ->
	if input.value == ""
		setUppercase()
	else
		setLowercase()
# Tap interactions for letters
for key in letters.children
		
	key.onTapStart ->
		return if numbersActive
		
		showLeftKey = false 
		showRightKey = false
		showLargeKey = false
		
		if @name is "q"
			showLeftKey = true 
			showRightKey = false
			showLargeKey = false
		if @name is "p"
			showLeftKey = false 
			showRightKey = true
			showLargeKey = false
				
		showActiveKey(this, showLeftKey, showRightKey, showLargeKey)
					
	key.onTapEnd ->
		return if numbersActive

		currentActiveKey = activeKey
		currentActiveLetter = activeLetter

		if showLeftKey
			currentActiveKey = activeKeyLeft
			currentActiveLetter = activeLetterLeft
			
		else if showRightKey
			currentActiveKey = activeKeyRight
			currentActiveLetter = activeLetterRight
			
		currentActiveKey.opacity = 0
# 		input._inputElement.focus()
		
		if shiftIconActive.visible
			input.value += currentActiveLetter.text.toUpperCase()		
		else
			input.value += currentActiveLetter.text
			
		checkValue()
		input.emit(Events. ValueChange, input.value)

	
# Tap interactions for numbers
for key in numbers.children
		
	key.onTapStart ->
		return if lettersActive
		
		showLeftKey = false 
		showRightKey = false
		showLargeKey = false
		
		if @name is "1" or @name is "-"
			showLeftKey = true 
			showRightKey = false
			showLargeKey = false
		if @name is "0" or @name is "“"
			showLeftKey = false 
			showRightKey = true 
			showLargeKey = false
		if @name is "." or @name is "," or @name is "?" or @name is "!" or @name is "‘"
			showLeftKey = false 
			showRightKey = false 
			showLargeKey = true
				
		showActiveKey(this, showLeftKey, showRightKey, showLargeKey)
					
	key.onTapEnd ->
		return if lettersActive
		
		currentActiveKey = activeKey
		currentActiveLetter = activeLetter
		
		if showLeftKey
			currentActiveKey = activeKeyLeft
			currentActiveLetter = activeLetterLeft
			
		else if showRightKey
			currentActiveKey = activeKeyRight
			currentActiveLetter = activeLetterRight
		
		else if showLargeKey
			currentActiveKey = activeKeyLarge
			currentActiveLetter = activeLetterLarge
			
		currentActiveKey.opacity = 0
# 		input._inputElement.focus()
		input.value += currentActiveLetter.text
		input.emit(Events.InputValueChange, input.value)	


# Keyboard methods	
document.onkeydown = (e) ->
	# Shift down
	if e.which == 16
		if shiftIconActive.visible
			return 
		else
			setUppercase()	
								
document.onkeypress = (e) ->
	
	if lettersActive
		mapLetterKeys(e)
		
	if numbersActive
		mapNumberKeys(e)
		
	# Space down
	if e.which == 32
		space.backgroundColor = "#ACB4BC"
	
					
document.onkeyup = (e) ->
	
	currentActiveKey = activeKey
	
	if showLeftKey
		currentActiveKey = activeKeyLeft
		
	else if showRightKey
		currentActiveKey = activeKeyRight
		
	currentActiveKey.opacity = 0
	
	# Space up
	if e.which == 32
		space.backgroundColor = "#FFFFFF"
	
	# Shift up 
	if e.which == 16
		setLowercase()
	
	checkValue()
		
# Extras
# Space
space.onTap -> input.value += " "	
space.onTapStart -> @backgroundColor = "#ACB4BC"	
space.onTapEnd -> @backgroundColor = "#FFFFFF"
input.onSpaceKey -> space.backgroundColor = "#ACB4BC"

# Return
returnKey.onTapStart -> @backgroundColor = "#FFFFFF"	
returnKey.onTapEnd -> @backgroundColor = "#ACB4BC"
returnKey.onTap ->
	if input.multiLine
		input.value += "\n"
		
icon5On.onTap ->
# 	if icon5On.opacity == 1

# 		input.value +="\t"
			
# Shift			
shift.onTap ->
	if shiftIconActive.visible
		setLowercase()					
	else
		setUppercase()
		
# Caps lock
input.onCapsLockKey ->
	if shiftIconActive.visible
		setLowercase()
	else 
		setUppercase()

# Backspace
backspace.onTapStart ->
	backSpaceIcon.visible = false
	backSpaceIconActive.visible = true
	input.value = input.value.slice(0, -1)
	
backspace.onTapEnd ->
	backSpaceIcon.visible = true
	backSpaceIconActive.visible = false
	checkValue()
	
# Clear all
backspace.onLongPress ->
	input.value = ""
	
# Numbers
numbersKey.onTap (event) ->
	lettersActive = false 
	numbersActive = true

	numeric.x = 0
	numeric.y = 667 - numeric.height
	numeric.parent = screenA
	
lettersKey.onTap (event) ->
	Resetkeyboard()
# Reset Keyboard
Resetkeyboard = ->
	lettersActive = true 
	numbersActive = false
	numeric.x = Screen.width
# Hide on mobile
unless Utils.isDesktop()
	keyboard.opacity = 0
	numeric.opacity = 0
	

keyboard.onClick ->
numeric.onClick ->
keyboardExtra.onClick ->

# Keyboard Controler

JustHideKeyboard = ->
	keyboard.animate
		y: 667
		opacity: 0
	numeric.animate
		opacity: 0
		y: 667
JustShowKeyboard = ->
	keyboard.animate
		y: 451 + 1
		opacity: 1
	numeric.animate
		opacity: 1
		y: 451 + 1


JustShowKeyboard()

hideKeyboard = ->
	JustHideKeyboard()
	toolBar.animate
		opacity: 0
		y: 667

showKeyboard = ->
	JustShowKeyboard()
	toolBar.animate
		opacity: 1
		y: toolBar.originalYPosition

hideAll = ->
	hideKeyboard()
	locationRange.animate
		opacity: 0
		y: 667
		
showAll = ->
	showKeyboard()
	locationRange.animate
		opacity: 1
		y: locationRange.originalYPosition
	

keyboard.bringToFront()
keyboard.y = toolBar.y + 42
# Toolbar
icons = [icon1On, icon2On, icon3On, icon4On]
SW = [icon1SW, icon2SW, icon3SW, icon4SW]
fakecontent = [ fakeLeft, fakeCenter, fakeRight, fakeFull]
fakeintent = [ fakeLeftIntent, fakeCenterIntent, fakeRightIntent, fakeIntent]
lineout.states =
	hide:
		y: toolBar.y - 43
		opacity: 0
		
	show:
		y: toolBar.y - 53
		opacity: 1
lineout.stateSwitch('hide')

notice.states =
	hide: 
		y: 327
		opacity: 0 
	show:
		y: 317
		opacity: 1
notice.stateSwitch("hide")
notice.sendToBack()

tips.states =
	hide: 
		y: 327
		opacity: 0 
	show:
		y: 317
		opacity: 1
tips.stateSwitch("hide")
tips.sendToBack()


icon1SW.onClick ->
	lineout.stateCycle('hide', 'show')
	
for layer, i in icons
	layer.onClick ->
		for layer in icons
			layer.opacity=0
		this.opacity=1
		m = this.index - 7
# 		print m
		for layer in SW
			layer.opacity=0
		SW[m].opacity=1
		for layer in fakecontent
			layer.opacity=0
		fakecontent[m].opacity=1
		for layer in fakeintent
			layer.opacity=0
		fakeintent[m].opacity=1

icon5On.onClick ->
	if icon5On.opacity == 0
		icon5On.opacity=1
		FakeIntent.opacity=1
		FakeContent.opacity=0
	else
		icon5On.opacity=0
		FakeIntent.opacity=0
		FakeContent.opacity=1
		
bg.onClick ->
	lineout.stateCycle('hide')

space.onDoubleTap -> 
	notice.stateCycle("show")
	notice.bringToFront()
	Utils.delay 5, ->
		notice.sendToBack()
		notice.stateCycle("hide")
add.onClick ->
	if icon5On.opacity == 0
		icon5On.opacity=1
		FakeIntent.opacity=1
		FakeContent.opacity=0
	else
		icon5On.opacity=0
		FakeIntent.opacity=0
		FakeContent.opacity=1
	Utils.delay 0.1,->
		notice.sendToBack()
		notice.stateCycle("hide")
		Utils.delay 0.2,->
			tips.bringToFront()
			tips.stateCycle("show")
			Utils.delay 3,->
				tips.stateCycle("hide")
				Utils.delay 0.3,->
					tips.sendToBack()
		
cancel.onClick ->
	notice.sendToBack()
	notice.stateCycle("hide")
	
keyboard.onClick ->
	lineout.stateCycle('hide')
	
tipsCancel.onClick ->
	tips.sendToBack()
	tips.stateCycle("hide")
