Smalltalk current createPackage: 'AATrachel'!
Object subclass: #TRCamera
	instanceVariableNames: 'position canvas scale'
	package: 'AATrachel'!

!TRCamera methodsFor: 'not yet classified'!

canvas: aTrachelCanvas
	"Set the canvas to observe"
	canvas := aTrachelCanvas
!

encompassingRectangle

	"Maybe a method encompassingRectangle has to be defined in TRCanvas?"
	^ self encompassingRectangleOf: canvas shapes
!

encompassingRectangleOf: shapes
	| encompassingRectangle |
	encompassingRectangle := shapes first encompassingRectangle.
	shapes do: [ :e | encompassingRectangle := encompassingRectangle merge: e encompassingRectangle ].
	^ encompassingRectangle
!

focusOnCenter
	"Do nothing if there aren't any shapes present"
	canvas numberOfShapes = 0 ifTrue: [ ^ self ]. 
	canvas drawShapes.
	self translateTo: self encompassingRectangle center
!

initialize
	super initialize.
	position := 0 @ 0.
	scale := 1.0
!

position
	^ position
!

translateTo: newPosition
	position := newPosition
! !

!TRCamera class methodsFor: 'not yet classified'!

forCanvas: aTrachelCanvas

	^ super new canvas: aTrachelCanvas
!

new
	self error: 'Instance of this class have to be created with #forCanvas:'
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

drawShapes
	shapes do: [ :s | s drawOrRedrawOn: svgCanvas ]
!

initialize
	svgCanvas := self paper.
	shapes := OrderedCollection new.
	camera := TRCamera forCanvas: self.
!

numberOfShapes
	"Return the number of displayed nonfixed shapes"
	^ shapes size
!

open
	| canvasExtent disp |
	"shapes do: [ :s | s drawOn: svgCanvas ]"
	canvasExtent := (svgCanvas width) @ (svgCanvas height).
	disp := canvasExtent / 2 - (camera position).
	shapes do: [ :s | s applyTransformAfter: 't', disp x, ' ', disp y ].
!

paper
	< var paper = Raphael("roassal-canvas", 640 , 480); return paper;>
!

shapes
	"Return the list of shapes"
	^ shapes asArray
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
	instanceVariableNames: 'canvas color svgElement strokePaint announcer element position rectangle'
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

applyTransformAfter: firstTransform
	svgElement transform: firstTransform, (self transforms)
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

drawOrRedrawOn: svgCanvas
	svgElement ifNotNil: [ svgElement remove ].
	self drawOn: svgCanvas.
!

element
	^ element
!

element: anElement
	element := anElement
!

encompassingRectangle
	| bbox |
	rectangle ifNotNil: [ ^rectangle ].
	self drawOrRedrawOn: canvas svgCanvas.
	bbox := svgElement getBBox.
	rectangle := Rectangle left: bbox x right: bbox x2 top: bbox y bottom: bbox y2.
	^ rectangle
!

extent: anExtent
	"do nothing here. This method may be overriden for particular behavior"
!

initialize
	color := Color gray.
	position := 0 @ 0.
	transform := ''.
!

resetPath
	"Compatibility -- Maybe we  will exploit this later on"
!

strokePaint: aColor
	strokePaint := aColor
!

svgElement
	^ svgElement
!

transforms
	^ ''
!

translateBy: aPoint
	position := position + aPoint
!

translateTo: aPoint
	position := aPoint
!

update
! !

TRShape subclass: #TRArcShape
	instanceVariableNames: 'alphaAngle betaAngle innerRadius externalRadius center origin height width topLeft bottomRight'
	package: 'AATrachel'!

!TRArcShape methodsFor: 'not yet classified'!

alphaAngle: stAngle betaAngle: ndAngle innerRadius: iR externalRadius: eR
	alphaAngle := stAngle.
	betaAngle := ndAngle.
	innerRadius := iR.
	externalRadius := eR
!

drawOn: svgCanvas
	| path aAngle bAngle i e arcSweep firstP secondP |
	
	aAngle := alphaAngle value degreesToRadians.
	bAngle := betaAngle value degreesToRadians.
	i := innerRadius value.
	e := externalRadius value.
	
	firstP := (i * (aAngle cos)) @ (i * (aAngle sin)).
	secondP := (i * (aAngle + bAngle cos)) @ (i * (aAngle + bAngle sin)).
	
	
	path := 'M', firstP x, ',', firstP y.
	path := path, 'A', i, ',', i, ' 0 0 1 ', (secondP x), ',', (secondP y).
	Transcript show: path.
	
	svgElement := svgCanvas  path: path.
	svgElement attr:'stroke' with: color asHTMLRGBA.
!

initialize
	super initialize.
	center := 0 @ 0.
	height := 0.
	width := 0.
	externalRadius := 0.
	innerRadius := 0.
	alphaAngle := 0.
	betaAngle := 0
! !

TRShape subclass: #TRBezierShape
	instanceVariableNames: 'listOfPoints'
	package: 'AATrachel'!

!TRBezierShape methodsFor: 'not yet classified'!

drawOn: svgCanvas
	| path firstP lastP |
	firstP := listOfPoints first.
	
	path := 'M', firstP x, ',', firstP y.
	
	(2 to: (listOfPoints size - 1)) do: [ :index |
		| controlP destP |
		controlP := listOfPoints at: index.
		destP := ((listOfPoints at: index) + (listOfPoints at: (index + 1))) / 2.
		path := path, 'Q', controlP x, ',', controlP y, ' ', destP x, ',', destP y.
	].
	
	svgElement := svgCanvas  path: path.
	svgElement attr:'stroke' with: strokePaint asHTMLRGBA.
!

points
	^ listOfPoints copy
!

points: points
	listOfPoints := points
!

points: aListOfPoints color: aColor

	self points: aListOfPoints.
	self strokePaint: aColor.
	self color: aColor
!

translateBy: aPoint
	listOfPoints := listOfPoints collect: [ :p | p + aPoint ]
! !

TRShape subclass: #TRBoundedShape
	instanceVariableNames: 'from to'
	package: 'AATrachel'!

!TRBoundedShape methodsFor: 'not yet classified'!

center
	^  from + (self extent / 2)
!

drawStrokeIfNecessary
	strokePaint isNil
		ifTrue: [ svgElement attr: 'stroke-width' with: 0 ]
		ifFalse: [ svgElement attr: 'stroke' with: strokePaint asHTMLRGBA ].
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
	self drawStrokeIfNecessary.
! !

TRBoundedShape subclass: #TREllipseShape
	instanceVariableNames: 'from to'
	package: 'AATrachel'!

!TREllipseShape methodsFor: 'not yet classified'!

drawOn: svgCanvas
	svgElement := svgCanvas ellipse: self center x y: self center y hradius: self width / 2 vradius: self height / 2.
	svgElement attr:'fill' with: color asHTMLRGBA.
	self drawStrokeIfNecessary.
!

from: aPoint to: anotherPoint color: aColor
	self from: aPoint to: anotherPoint.
	self color: aColor.
! !

TRShape subclass: #TRComposedShape
	instanceVariableNames: 'shape1 shape2'
	package: 'AATrachel'!
!TRComposedShape commentStamp!
A TRComposedShape is xxxxxxxxx.

Instance Variables
	shape1:		<Object>
	shape2:		<Object>

shape1
	- xxxxx

shape2
	- xxxxx!

!TRComposedShape methodsFor: 'accessing'!

announcer
	self error: 'should not be called'
!

announcer: anAnnouncer
	shape1 announcer: anAnnouncer.
	shape2 announcer: anAnnouncer.
!

canvas: aSurface
	shape1 canvas: aSurface.
	shape2 canvas: aSurface
!

element
	^ shape1 element
!

element: anObject
	"anObject could be any kind of object. A shape has a reference to an object, typically the object odel that the trachel shape represents"
	shape1 element: anObject.
	shape2 element: anObject.
!

encompassingRectangle
	^ Rectangle merging: (Array with: shape1 encompassingRectangle with: shape2 encompassingRectangle)
!

height
	^ self encompassingRectangle height
!

position
	^ (shape1 position + shape2 position) / 2
!

shape1
	^ shape1
!

shape1: aTRShape
	shape1 := aTRShape
!

shape2
	^ shape2
!

shape2: aTRShape
	shape2 := aTRShape
!

width
	^ self encompassingRectangle width
! !

!TRComposedShape methodsFor: 'actions'!

addCallback: aCallback
	shape1 addCallback: aCallback.
	shape2 addCallback: aCallback
!

addedIn: aCanvas
	aCanvas addShape: shape1.
	aCanvas addShape: shape2.
!

remove
	shape1 remove.
	shape2 remove
! !

!TRComposedShape methodsFor: 'as yet unclassified'!

applyTransformAfter: firstTransform
	shape1 applyTransformAfter: firstTransform.
	shape2 applyTransformAfter: firstTransform.
!

translateTo: aPoint
	shape1 translateTo: aPoint.
	shape2 translateTo: aPoint.
! !

!TRComposedShape methodsFor: 'drawing'!

drawOn: svgCanvas
	| max |
	max := shape1 encompassingRectangle extent max: shape2 encompassingRectangle extent.
	shape1 extent: max.
	shape2 extent: max.

	shape1 drawOrRedrawOn: svgCanvas.
	shape2 drawOrRedrawOn: svgCanvas
! !

!TRComposedShape methodsFor: 'events'!

announce: anEvent
	shape1 announce: anEvent.
	shape2 announce: anEvent.
!

when: event do: aBlock
	shape1 announcer when: event do: aBlock.
	shape2 announcer when: event do: aBlock
! !

!TRComposedShape methodsFor: 'initialization'!

initialize
	super initialize.
	shape1 := TRNoShape instance.
	shape2 := TRNoShape instance.
! !

!TRComposedShape methodsFor: 'testing'!

includesPoint: aPoint
	^ (shape1 includesPoint: aPoint) or: [ shape2 includesPoint: aPoint ]
! !

!TRComposedShape class methodsFor: 'as yet unclassified'!

with: s1 with: s2
	^ self new shape1: s1; shape2: s2; yourself
! !

TRShape subclass: #TRLabelShape
	instanceVariableNames: 'text fontSize'
	package: 'AATrachel'!

!TRLabelShape methodsFor: 'not yet classified'!

defaultFontSize
	^ self class defaultFontSize
!

drawOn: svgCanvas

	svgElement := svgCanvas text: position x y: position y text: text.
	svgElement attr: 'font-family' with: 'Verdana'.
	svgElement attr: 'font-size' with: fontSize.
	svgElement attr: 'fill' with: color asHTMLRGBA.
!

fontSize: aSize
	fontSize := aSize.
!

height
	^ self encompassingRectangle height
!

position: aPosition
	position := aPosition
!

text
	^ text
!

text: aText
	text := aText.
!

width
	^ self encompassingRectangle width
! !

!TRLabelShape class methodsFor: 'not yet classified'!

defaultFontSize
	^ 12
! !

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

position
	^ 0 @ 0
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

TRShape subclass: #TRSVGPath
	instanceVariableNames: 'borderWidth fillColor scale pathStr'
	package: 'AATrachel'!

!TRSVGPath methodsFor: 'not yet classified'!

borderWidth: aWidth
	borderWidth := aWidth
!

drawOn: svgCanvas
	" "
	svgElement := svgCanvas  path: pathStr.
	svgElement attr:'stroke' with: strokePaint asHTMLRGBA.
	svgElement attr: 'stroke-width' with: borderWidth.
	svgElement attr:'fill' with: fillColor asHTMLRGBA.
!

fillColor: aColor
	fillColor := aColor
!

path: aPathString
	pathStr := aPathString
!

scale: aNumber
	scale := aNumber
!

transforms
	| center |
	center := canvas camera position.
	^ 's', scale, ',', scale, ',', center x, ',', center y.
! !

