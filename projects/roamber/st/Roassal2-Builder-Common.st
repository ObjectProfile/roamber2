Smalltalk current createPackage: 'Roassal2-Builder-Common'!
RTObject subclass: #RTBuilder
	instanceVariableNames: 'view interactionBuilder shapeBuilder'
	package: 'Roassal2-Builder-Common'!
!RTBuilder commentStamp!
A RTBuilder is xxxxxxxxx.

Instance Variables
	interactionBuilder:		<Object>
	shapeBuilder:		<Object>
	view:		<Object>

interactionBuilder
	- xxxxx

shapeBuilder
	- xxxxx

view
	- xxxxx!

!RTBuilder methodsFor: 'accessing'!

interaction
	^ interactionBuilder
!

interactionBuilder: anRTInteractionBuilder
	interactionBuilder := anRTInteractionBuilder
!

shape
	^ shapeBuilder
!

shapeBuilder: anRTShapeBuilder

	shapeBuilder := anRTShapeBuilder
!

view
	^ view
!

view: aRTView
	view := aRTView
! !

!RTBuilder methodsFor: 'copying'!

postCopy
	super postCopy.
	shapeBuilder := shapeBuilder copy.
	interactionBuilder := interactionBuilder copy.
! !

!RTBuilder methodsFor: 'hooks'!

renderIn: aView
	"You may want to override this method to fill the view"
! !

!RTBuilder methodsFor: 'initialization'!

initialize
	super initialize.
	view := RTView new.
	shapeBuilder := RTShapeBuilder new.
	interactionBuilder := RTInteractionBuilder new.
! !

!RTBuilder methodsFor: 'protected'!

elementOn: anObject
	^ shapeBuilder elementOn: anObject
!

elementsOn: collectionOfObjects
	^ shapeBuilder elementsOn: collectionOfObjects
! !

!RTBuilder methodsFor: 'public'!

addElementOn: anObject
	| element |
	element := self elementOn: anObject.
	interactionBuilder setUpElements: element.
	view add: element.
	^ element
!

edgeFrom: source to: target 
	| newEdge |
	newEdge := shapeBuilder edgeFrom: source to: target.
	view add: newEdge.
	^ newEdge
! !

!RTBuilder methodsFor: 'public-ui'!

open
	^ self openIn: view
!

openIn: aView
	self renderIn: aView.
	^ aView open
!

render
	self renderIn: self view
! !

RTObject subclass: #RTInteractionBuilder
	instanceVariableNames: 'interactions'
	package: 'Roassal2-Builder-Common'!
!RTInteractionBuilder commentStamp!
A RTInteractionBuilder is xxxxxxxxx.

Instance Variables
	interactions:		<Object>

interactions
	- xxxxx!

!RTInteractionBuilder methodsFor: 'building'!

setUpElements: elements
	"elements is an RTGroup, that contains RTElement or RTEdges"
	
	interactions do: [ :int | elements @ int ]
! !

!RTInteractionBuilder methodsFor: 'copying'!

postCopy
	super postCopy.
	interactions := interactions copy.
! !

!RTInteractionBuilder methodsFor: 'events-registering'!

when: event do: block
	interactions add: [ :element | element when: event do: block ]
! !

!RTInteractionBuilder methodsFor: 'initialization'!

initialize
	super initialize.
	self initializeInteractions.
!

initializeInteractions
	interactions := OrderedCollection new
! !

!RTInteractionBuilder methodsFor: 'public'!

draggable
	| i |
	i := RTDraggable new.
	interactions add: i. 
	^ i
!

highlight
	self highlightColored: Color blue
!

highlightColored: aColorOrAOneArgBlockOrSymbol
	
	self when: TRMouseEnter do: [ :event | 
		RTBlink 
			highlight: event element
			color: (aColorOrAOneArgBlockOrSymbol rtValue: event element model) ].

	self when: TRMouseLeave do: [ :event | 
		RTBlink
			unhighlight: event element ].
!

noInteractions
	self initializeInteractions.
!

popup
	| i |
	i := RTPopup new.
	interactions add: i. 
	^ i
! !

RTObject subclass: #RTShapeBuilder
	instanceVariableNames: 'shape'
	package: 'Roassal2-Builder-Common'!
!RTShapeBuilder commentStamp!
A RTShapeBuilder is xxxxxxxxx.

Instance Variables
	shape:		<Object>

shape
	- xxxxx!

!RTShapeBuilder methodsFor: 'accessing'!

current
	"Return the shape currently built"
	^ shape
!

reset
	shape := RTNoShape instance
!

shape
	"Return the shape currently built"
	^ shape
!

shape: aRoassalShape
	shape := aRoassalShape.
! !

!RTShapeBuilder methodsFor: 'building'!

edgeFrom: element1 to: element2
	self hasSetShape ifFalse: [ self line ].
	^ shape edgeFrom: element1 to: element2
!

elementOn: object
	self hasSetShape ifFalse: [ self rectangle ].
	^ shape elementOn: object
!

elementsOn: objects
	self hasSetShape ifFalse: [ self rectangle ].
	^ shape elementsOn: objects
!

setUpElements: elements
	self hasSetShape ifFalse: [ self rectangle ].
	^ elements + shape
! !

!RTShapeBuilder methodsFor: 'copying'!

postCopy
	super postCopy.
	shape := shape copy.
! !

!RTShapeBuilder methodsFor: 'initialization'!

initialize
	self reset
! !

!RTShapeBuilder methodsFor: 'reflective operations'!

doesNotUnderstand: aMessage
	"we simply forward the messages we do not understand
	to the actual shape implementation"
	^ self shape 
		perform: aMessage selector 
		withArguments: aMessage arguments
! !

!RTShapeBuilder methodsFor: 'shapes'!

arc
	^ self shape: RTArc new
!

circle
	^ self shape: RTEllipse new
!

ellipse
	shape := RTEllipse new
!

if: conditionBlock borderColor: colorBlock
	"If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node."
	| oldBlockOrValue |
	oldBlockOrValue := self borderColor.
	^self borderColor: [ :aModel | (conditionBlock rtValue: aModel)
									ifTrue: [ colorBlock rtValue: aModel ] 
									ifFalse: [ 
										"Having to create a new element is rather ugly. 
										Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation"
										oldBlockOrValue rtValue: (RTElement on: aModel) ]].
!

if: conditionBlock fillColor: colorBlock
	"If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node."
	| oldBlockOrValue |
	oldBlockOrValue := self fillColor.
	^self fillColor: [ :aModel | (conditionBlock rtValue: aModel)
									ifTrue: [ colorBlock rtValue: aModel ] 
									ifFalse: [ 
										"Having to create a new element is rather ugly. 
										Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation"
										oldBlockOrValue rtValue: (RTElement on: aModel) ]].
!

ifElement: conditionBlock borderColor: colorBlock
	"If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node."
	| oldBlockOrValue |
	oldBlockOrValue := self borderColor.
	^self borderColorElement: [ :anElement | (conditionBlock rtValue: anElement)
									ifTrue: [ colorBlock rtValue: anElement ] 
									ifFalse: [ 
										"Having to create a new element is rather ugly. 
										Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation"
										oldBlockOrValue rtValue: anElement ]].
!

ifElement: conditionBlock fillColor: colorBlock
	"If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node."
	| oldBlockOrValue |
	oldBlockOrValue := self fillColor.
	^self fillColorElement: [ :anElement | (conditionBlock rtValue: anElement)
									ifTrue: [ colorBlock rtValue: anElement ] 
									ifFalse: [ 
										"Having to create a new element is rather ugly. 
										Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation"
										oldBlockOrValue rtValue: anElement ]].
!

label
	shape := RTLabel new
!

line
	^ self shape: RTLine new
!

rectangle
	^ self shape: RTBox new
!

text
	shape := RTLabel new
!

withBorder
	self borderColor: Color black
!

withText
	shape := shape + RTLabel new
! !

!RTShapeBuilder methodsFor: 'testing'!

hasSetShape
	^ shape class ~~ RTNoShape
! !

RTObject subclass: #RTShapeBuilderExample
	instanceVariableNames: ''
	package: 'Roassal2-Builder-Common'!
!RTShapeBuilderExample commentStamp!
A RTShapeBuilderExample is xxxxxxxxx.!

!RTShapeBuilderExample methodsFor: 'as yet unclassified'!

example01
	"
	self new example01
	"
	| builder v |
	v := RTView new.
	builder := RTShapeBuilder new.
	builder circle 
				size: 20; 
				fillColor: (RTNColorLinearNormalizer new
									context: (Collection withAllSubclasses);
									command: #numberOfMethods;
									lowColor: Color green;
									highColor: Color red);
				withText.
				
	v addAll: (builder elementsOn: Collection withAllSubclasses).
	RTCellLayout new gapSize: 1; on: v elements.
	v open
!

example02
	"
	self new example02
	"
	| builder v |
	v := RTView new.
	builder := RTShapeBuilder new.
	builder rectangle 
				size: 50; 
				fillColor: (Color red alpha: 0.3);
				withText.
	v addAll: (builder elementsOn: (1 to: 50)).
	RTCellLayout on: v elements.
	v open
!

example03
	"
	self new example03
	"
	| builder v els |
	v := RTView new.
	builder := RTShapeBuilder new.
	builder rectangle 
				width: 50;
				fillColor: (Color red alpha: 0.3);
				withText.
	els := builder elementsOn: (1 to: 50).
	els @ RTDraggable.
	v addAll: els.
	RTCellLayout on: v elements.
	v open
! !

RTTest subclass: #RTShapeBuilderTest
	instanceVariableNames: 'builder'
	package: 'Roassal2-Builder-Common'!
!RTShapeBuilderTest commentStamp!
A RTShapeBuilderTest is xxxxxxxxx.

Instance Variables
	builder:		<Object>

builder
	- xxxxx!

!RTShapeBuilderTest methodsFor: 'running'!

setUp

	builder := RTShapeBuilder new
! !

!RTShapeBuilderTest methodsFor: 'tests'!

testBasic

	self assert: builder shape class == RTNoShape
!

testBox
	builder rectangle.
	self assert: builder shape class == RTBox
!

testBoxWithDimensions
	| shape |
	builder rectangle width: [ :v | v + 3 ].
	shape := builder shape.
	self assert: shape class == RTBox.
	self assert: (shape widthFor: (RTElement on: 5)) = 8
!

testLine
	builder line.
	self assert: builder shape class == RTLine
!

testShape
	| e1 e2 e3 |
	builder rectangle
		if: [ :o | o = 3 ] fillColor: Color blue;
		if: [ :o | o = 4 ] fillColor: Color red.
	e1 := builder elementOn: 3.
	e2 := builder elementOn: 4.
	e3 := builder elementOn: 5.
	
	self assert: (e1 shape colorFor: e1) = Color blue.
	self assert: e1 trachelShape color = Color blue.
	self assert: e2 trachelShape color = Color red.
	self assert: e3 trachelShape color = Color veryVeryLightGray.
!

testShape2
	| e1 e2 e3 |
	builder rectangle
		ifElement: [ :el | el model = 3 ] fillColor: Color blue;
		ifElement: [ :el | el model = 4 ] fillColor: Color red.
	e1 := builder elementOn: 3.
	e2 := builder elementOn: 4.
	e3 := builder elementOn: 5.
	
	self assert: (e1 shape colorFor: e1) = Color blue.
	self assert: e1 trachelShape color = Color blue.
	self assert: e2 trachelShape color = Color red.
	self assert: e3 trachelShape color = Color veryVeryLightGray.
! !

!RTShapeBuilderTest methodsFor: 'withText'!

testWithText

	| v el |
	v := RTView new.
	builder := RTShapeBuilder new.
	builder circle 
				size: 50; 
				fillColor: (Color purple alpha: 0.3);
				withText.
	el := builder elementOn: 'hello'.
	v add: el.
	
	self assert: el shape class == RTCompositeShape.
!

testWithTextAndTranslation

	| v el |
	v := RTView new.
	builder := RTShapeBuilder new.
	builder circle 
				size: 50; 
				fillColor: (Color purple alpha: 0.3);
				withText.
	el := builder elementOn: 'hello'.
	el translateTo: 20 @ 20.
	v add: el.
	
	self assert: el shape class == RTCompositeShape.
! !

