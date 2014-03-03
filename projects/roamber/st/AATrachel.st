Smalltalk current createPackage: 'AATrachel'!
Object subclass: #TRCamera
	instanceVariableNames: ''
	package: 'AATrachel'!

!TRCamera methodsFor: 'not yet classified'!

focusOnCenter
	"TODO"
! !

Object subclass: #TRCanvas
	instanceVariableNames: 'shapes svgCanvas announcer camera'
	package: 'AATrachel'!

!TRCanvas methodsFor: 'not yet classified'!

add: aShape
	shapes add: aShape.
	aShape addedIn: self
!

addShape: aShape
	self add: aShape
!

announce: anEvent
	self announcer announce: anEvent
!

announcer
	announcer isNil ifTrue: [ announcer := Announcer new ].
	^ announcer
!

announcer: anAnnouncer
	announcer := anAnnouncer
!

camera
	 ^ camera
!

initialize
	svgCanvas := self paper.
	shapes := OrderedCollection new.
	camera := TRCamera new.
!

open
	shapes do: [ :s | s drawOn: svgCanvas ]
!

paper
	< var paper = Raphael("roassal-canvas", 640 , 480); return paper;>
!

svgCanvas
	^ svgCanvas
! !

Object subclass: #TRExamples
	instanceVariableNames: ''
	package: 'AATrachel'!

!TRExamples methodsFor: 'not yet classified'!

example1
	"
	TRExamples new example1
	"
	| c box1 box2 line circle |
	c := TRCanvas new.
	box1 := TRBoxShape new.
	box1 from: 10 @ 10 to: 200 @ 50.
	box1 color: Color red.
	
	box2 := TRBoxShape new.
	box2 from: 55 @ 60 to: 80 @ 75.
	box2 color: Color green.
	
	circle := TREllipseShape new.
	circle from: 155 @ 160 to: 180 @ 175.
	circle color: Color blue.

	line := TRLineShape new.
	line from: 10 @ 10 to: 55 @ 80.

	c add: box1; add: box2; add: line; add: circle.
	c open
!

example2
	"
	TRExamples new example2
	"
	| c box1 box2 box3 |
	c := TRCanvas new.
	box1 := TRBoxShape new.
	box1 from: 10 @ 10 to: 200 @ 50.
	box1 color: Color red.
	
	box2 := TRBoxShape new.
	box2 from: 20 @ 20 to: 200 @ 50.
	box2 color: Color green.

	box3 := TRBoxShape new.
	box3 from: 30 @ 30 to: 200 @ 50.
	box3 color: Color blue.

	c add: box1; add: box2; add: box3.
	c open
!

example3
	"
	TRExamples new example3
	"
	| c box |
	c := TRCanvas new.
	1 to: 10 do: [ :i | 
		box := TRBoxShape new.
		box from: 0 @ 0 to: 30 @ 20.
		box color: Color red.
		box translateTo: ((i * 10) @ (i * 10)).
		c add: box ].
	c open
! !

Object subclass: #TRShape
	instanceVariableNames: 'canvas color svgElement borderColor announcer element position'
	package: 'AATrachel'!

!TRShape methodsFor: 'not yet classified'!

addedIn: aCanvas
	"Trachel Canvas as argument"
	canvas := aCanvas
!

announce: anEvent
	self announcer announce: anEvent
!

announcer
	announcer isNil ifTrue: [ announcer := Announcer new ].
	^ announcer
!

announcer: anAnnouncer
	announcer := anAnnouncer
!

borderColor
	^ borderColor
!

borderColor: aColor
	borderColor := aColor
!

color
	^ color
!

color: aColor
	color := aColor
!

drawOn: svgCanvas
!

element
	^ element
!

element: anElement
	element := anElement
!

initialize
	color := Color gray.
	position := 0 @ 0
!

resetPath
	"Compatibility -- Maybe we  will exploit this later on"
!

strokePaint: aColor
	"TODO"
!

translateBy: aPoint
	position := position + aPoint
!

translateTo: aPoint
	position := aPoint
!

update
! !

TRShape subclass: #TRBoundedShape
	instanceVariableNames: 'from to'
	package: 'AATrachel'!

!TRBoundedShape methodsFor: 'not yet classified'!

center
	^  from + self extent
!

encompassingRectangle
	^ Rectangle origin: from corner: to
!

extent
	^ self width @ self height
!

extent: anExtent
	| center |
	anExtent = self extent ifTrue: [ ^ self ].
	center := from + (self extent / 2).
	from := center - (anExtent / 2).
	to := center + (anExtent / 2).
	self update
!

from: aPoint
	from := aPoint
!

from: p1 to: p2
	self from: p1.
	self to: p2.
!

height
	^ (to - from) y
!

height: newHeight
	from := (position - (0 @ (newHeight / 2))).
	to := (position + (0 @ (newHeight / 2))).
!

initialize
	super initialize.
	from := -5 @ -5.
	to := 5 @ 5.
!

position
	^ self center
!

to: aPoint
	to := aPoint
!

translateTo: aPoint
	| e |
	super translateTo: aPoint.
	e := self extent / 2.
	from := position - e.
	to := position + e.
	"self triggerCallbacksForStep: (rectangle topLeft - oldTopLeft)"
!

width
	^ (to - from) x
!

width: newWidth
	from := (position - (newWidth / 2 @ 0)).
	to :=  (position + (newWidth / 2 @ 0)).
! !

TRBoundedShape subclass: #TRBoxShape
	instanceVariableNames: ''
	package: 'AATrachel'!

!TRBoxShape methodsFor: 'not yet classified'!

drawOn: svgCanvas

	svgElement := svgCanvas  rect: from x y: from y width: self width height: self height.
	svgElement attr:'fill' with: color asHTMLRGBA.
! !

TRBoundedShape subclass: #TREllipseShape
	instanceVariableNames: 'from to'
	package: 'AATrachel'!

!TREllipseShape methodsFor: 'not yet classified'!

drawOn: svgCanvas
	svgElement := svgCanvas  ellipse: from x y: from y width: self width height: self height.
	svgElement attr:'fill' with: color asHTMLRGBA.
! !

TRShape subclass: #TRCircleShape
	instanceVariableNames: ''
	package: 'AATrachel'!

TRShape subclass: #TRLineShape
	instanceVariableNames: 'from to'
	package: 'AATrachel'!

!TRLineShape methodsFor: 'not yet classified'!

drawOn: svgCanvas
	svgElement := svgCanvas  path: 'M', from x, ',', from y, 'L', to x, ',', to y.
	svgElement attr:'fill' with: color asHTMLRGBA.
!

from
	^ from
!

from: aPoint
	from := aPoint
!

from: aPoint to: anotherPoint
	self from: aPoint.
	self to: anotherPoint.
!

from: aPoint to: anotherPoint color: aColor
	self from: aPoint to: anotherPoint.
	self color: aColor
!

to
	^ to
!

to: aPoint
	to := aPoint
! !

TRShape subclass: #TRNoShape
	instanceVariableNames: ''
	package: 'AATrachel'!

!TRNoShape methodsFor: 'not yet classified'!

height
	^ 0
!

width
	^ 0
! !

TRNoShape class instanceVariableNames: 'instance'!

!TRNoShape class methodsFor: 'not yet classified'!

instance
	instance ifNil: [ instance := self new ].
	^ instance
! !

