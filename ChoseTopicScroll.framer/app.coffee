scroll1 = ScrollComponent.wrap($1)
scroll1.contentInset=
	left: 15
	right: 15
scroll1.scrollVertical = false
scroll1.content.draggable.overdrag = no

inset = 0
scroll1.onMove (event,layer) ->
	inset = event.x
	$2.x = Utils.modulate(inset,[15,-92],[15,-172],true)