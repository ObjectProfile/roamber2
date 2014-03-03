Smalltalk current createPackage: 'Roassal2-Core'!
Array subclass: #RTGroup
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTGroup commentStamp!
A RTGroup is xxxxxxxxx.!

!RTGroup methodsFor: 'accessing'!

position
	^ self encompassingRectangle center
! !

!RTGroup methodsFor: 'public'!

+ aShape
	self do: [ :e | e + aShape ]
!

@ interaction
	self do: [ :e | e @ interaction ]
!

addedIn: view
	self do: [ :e | view add: e ]
!

elementFromModel: anObject
	"Return an element that corresponds to the object provided as parameter. If none is found, then return nil"
	^ self detect: [ :el | el model = anObject ] ifNone: [ nil ]
!

encompassingRectangle
	^ self 
		ifEmpty: [ (0 @ 0) corner: (0 @ 0) ]
		ifNotEmpty: [ Rectangle merging: (self collect: #encompassingRectangle) ]
!

extent
	^ self encompassingRectangle extent
!

height
	^ self encompassingRectangle height
!

remove
	self do: #remove
!

renderOn: trCanvas 
	"Not sure whether this method is necessary..."
	self do: [ :e | e renderOn: trCanvas ]
!

translateBy: aPoint
	self do: [ :e | e translateBy: aPoint ]
!

translateTo: aPosition
	| center |
	center := self encompassingRectangle center.
	self translateBy: (aPosition - center)
!

translateTopLeftTo: aPosition
	| center |
	center := self encompassingRectangle topLeft.
	self translateBy: (aPosition - center)
!

when: evt do: callback
	self do: [ :e | e when: evt do: callback ]
!

width
	^ self encompassingRectangle width
! !

Object subclass: #RTObject
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTObject commentStamp!
A RTObject is xxxxxxxxx.!

!RTObject methodsFor: 'not yet classified'!

initialize
! !

RTObject subclass: #RTAnnounceableObject
	instanceVariableNames: 'announcer'
	package: 'Roassal2-Core'!
!RTAnnounceableObject commentStamp!
A RTAnnounceableObject is xxxxxxxxx.

Instance Variables
	announcer:		<Object>

announcer
	- xxxxx!

!RTAnnounceableObject methodsFor: 'accessing'!

announcer
	announcer ifNil: [ announcer := Announcer new ].
	^ announcer
! !

!RTAnnounceableObject methodsFor: 'adding'!

@ anInteractionClassOrInstance
	"Add an interaction to the node"
	
	self addInteraction: anInteractionClassOrInstance
!

addInteraction: anInteractionClassOrInstance
 	anInteractionClassOrInstance initializeElement: self
! !

!RTAnnounceableObject methodsFor: 'announce'!

announce: evt
	| t |
	t := evt asAnnouncement.
	t shape: self trachelShape.
	self announcer announce: evt
! !

!RTAnnounceableObject methodsFor: 'interaction'!

on: evt do: aBlock
	self announcer when: evt do: aBlock
!

when: evt do: aBlock
	self announcer when: evt do: aBlock
! !

RTAnnounceableObject subclass: #RTShapedObject
	instanceVariableNames: 'shape trachelShape attributes view model'
	package: 'Roassal2-Core'!
!RTShapedObject commentStamp!
A RTShapedObject is xxxxxxxxx.

Instance Variables
	attributes:		<Object>
	model:		<Object>
	shape:		<Object>
	trachelShape:		<Object>
	view:		<Object>

attributes
	- xxxxx

model
	- xxxxx

shape
	- xxxxx

trachelShape
	- xxxxx

view
	- xxxxx!

!RTShapedObject methodsFor: 'accessing'!

model
	^ model
!

model: anObject
	"anObject could be any Smalltalk object. Shapes are computed based on that object"
	model := anObject
!

shape
	^ shape
!

trachelShape
	^ trachelShape
!

view
	^ view
!

view: aRoassalView
	view := aRoassalView
! !

!RTShapedObject methodsFor: 'adding'!

+ aRTShape
	"Add a Roassal shape, class or instance of it. Not that a Trachel cannot be given as argument"
	self addShape: aRTShape instance
!

addShape: aRTShape
	(shape class == RTNoShape)  
		ifTrue: [	shape := aRTShape instance ]
		ifFalse: [ shape := RTCompositeShape with: shape with: aRTShape ].
	trachelShape := shape trachelShapeFor: self
!

addedIn: aView
	self subclassReponsibility
! !

!RTShapedObject methodsFor: 'announce'!

testCaseAnnounce: evt
	"It is used for Test Cases because in that case evt does not know where it has been announced."
	| evtInstance |
	evtInstance := evt shape: self trachelShape.
	self announce: evtInstance
! !

!RTShapedObject methodsFor: 'attributes'!

attributeAt: aKey
	^ self attributes at: aKey
!

attributeAt: aKey ifAbsent: aBlockClosure 
	
	^ self attributes at: aKey ifAbsent: aBlockClosure
!

attributeAt: aKey ifAbsentPut: aBlockClosure 
	
	^ self attributes at: aKey ifAbsentPut: aBlockClosure
!

attributeAt: aKey put: value
	^ self attributes at: aKey put: value
!

attributes
	"Return the list of attributes associated to the element. Attributes are useful for caching values"

	^ attributes ifNil: [ attributes := Dictionary new ]
!

hasAttribute: aKey 
	"Return true if attributes includes aKey"
	
	^ attributes notNil and: [ attributes includesKey: aKey ]
!

hasAttributes 
	"Return true if at least one attributes is present"
	
	^ attributes notNil and: [ attributes notEmpty ]
! !

!RTShapedObject methodsFor: 'initialization'!

initialize
	super initialize.
	shape := RTNoShape new.
	trachelShape := TRNoShape instance
! !

!RTShapedObject methodsFor: 'rendering'!

renderOn: trachelCanvas
	trachelShape isNil ifTrue: [ self error: 'Cannot add an element without a shape. Add a shape to myself, using + or addShape:' . ^ self ].
	trachelCanvas addShape: trachelShape.
	trachelShape announcer: self announcer.
	trachelShape element: self
! !

!RTShapedObject methodsFor: 'updating'!

update
	"Update the trachel shape and reset the path. This has the effect of moving the visual widget"
	shape updateFor: self.
	trachelShape ifNotNil: [ trachelShape resetPath ]
! !

RTShapedObject subclass: #RTEdge
	instanceVariableNames: 'from to'
	package: 'Roassal2-Core'!
!RTEdge commentStamp!
A RTEdge is xxxxxxxxx.

Instance Variables
	from:		<Object>
	to:		<Object>

from
	- xxxxx

to
	- xxxxx!

!RTEdge methodsFor: 'accessing'!

addedIn: aView
	view := aView.
	view addEdge: self
!

from
	
	^ from
!

from: anElement
	
	from := anElement.
	anElement addConnectedEdge: self
!

to
	
	^ to
!

to: anElement
	
	to := anElement.
	anElement addConnectedEdge: self
! !

!RTEdge methodsFor: 'actions'!

moveBehindItsExtremities
	"Make the edge be displayed before its extremities are displayed. This is useful to not have the edge over the extremity nodes"
	self trachelShape pushBehindAll: (Array with: self from trachelShape with: self to trachelShape)
!

remove
	(to connectedEdges includes: self) 
		ifTrue: [to connectedEdges remove: self].
	(from connectedEdges includes: self)
		ifTrue: [from connectedEdges remove: self].
	(view isNil)
		ifFalse: [  
			view removeEdge: self.
			view := nil]
! !

!RTEdge class methodsFor: 'public'!

from: fromEl to: toEl
	^ self new from: fromEl; to: toEl; yourself
!

on: aModel from: fromElement to: toElement
	^ (self on: aModel) from: fromElement to: toElement; yourself
! !

!RTEdge class methodsFor: 'public - edge construction'!

buildEdgesFromAssociations: associations inView: view
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	^ self buildEdgesFromAssociations: associations using: RTLine inView: view
!

buildEdgesFromAssociations: associations using: aLineShape
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	^ self buildEdgesFromElements: associations from: #key to: #value using: aLineShape
!

buildEdgesFromAssociations: associations using: aLineShape inView: view
	"associations could be {2 -> 5 . 1 -> 5 }.
	 Takes the model of element into account"
	
	| edges associationsOfElements |
	associationsOfElements := associations collect: [ :assoc | (view elementFromModel: assoc key) -> (view elementFromModel: assoc value) ].
	associationsOfElements isEmpty ifTrue: [ ^ #() ].
	
	edges := OrderedCollection new.
	associationsOfElements do: [ :associationOfTwoElements |
				| edge |
				edge := RTEdge from: associationOfTwoElements key to: associationOfTwoElements value. 
				edge + aLineShape.
				edges add: edge ].
	view addAll: edges.
	^ edges
!

buildEdgesFromElements: elements from: fromBlock to: toBlock
	"Handy method to easily build edges. Return a list of edges"

	^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine
!

buildEdgesFromElements: elements from: fromBlock to: toBlock in: view
	"Handy method to easily build edges. Return a list of edges"

	^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine in: view
!

buildEdgesFromElements: elements from: fromBlock to: toBlock inView: view
	"Handy method to easily build edges. Return a list of edges"

	^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine inView: view
!

buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	| edges container fromElement toElement elementsWithModels |
	elements isEmpty ifTrue: [ ^ #() ].
	edges := OrderedCollection new.
	elementsWithModels := elements select: [ :el | el model notNil ].
	elementsWithModels do: [ :element |
		container := element parent.
		fromElement := container elementFromModel: (fromBlock rtValue: element model).
		toElement := container elementFromModel: (toBlock rtValue: element model).
		(fromElement notNil and: [ toElement notNil ])
			ifTrue: [  
				| edge |
				edge := RTEdge from: fromElement to: toElement. 
				edge + aLineShape.
				edges add: edge.
				container add: edge ] ].
	^ edges
!

buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape inView: view
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	view addAll: (self buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape)
!

buildEdgesFromElements: elements from: fromBlock toAll: toBlock using: aLineShape
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"
	"toBlock should return a collection of models"

	| edges container fromElement toElements elementsWithModels |
	elements isEmpty ifTrue: [ ^ #() ].
	edges := OrderedCollection new.
	elementsWithModels := elements select: [ :el | el model notNil ].
	
	elementsWithModels do: [ :element |
		container := element parent.
		fromElement := container elementFromModel: (fromBlock rtValue: element model).
		
		"We get the list of elements that corresponds to (toBlock roValues: element model)"
		toElements := OrderedCollection new.
		(toBlock rtValue: element model) do: [ :model | 
			| v |
			v := container elementFromModel: model.
			v notNil ifTrue: [ toElements add: v ] ].
		
		
		(fromElement notNil and: [ toElements notEmpty ])
			ifTrue: [  
				toElements do: [ :toElement |
					| edge |
					edge := RTEdge from: fromElement to: toElement. 
					edge + aLineShape.
					edges add: edge.
					container add: edge ] ]  ].
	^ edges
!

buildEdgesFromObjects: objects from: fromBlock to: toBlock inView: view
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: RTLine inView: view
!

buildEdgesFromObjects: objects from: fromBlock to: toBlock inView: view scope: aGroup
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: RTLine inView: view scope: aGroup
!

buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view scope: (RTGroup withAll: view elements)
!

buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view scope: aGroup
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toBlock operate on the model of the elements"

	| edges fromElement toElement |
	objects isEmpty ifTrue: [ ^ #() ].
	edges := RTGroup new.
	objects do: [ :object |
		fromElement := aGroup elementFromModel: (fromBlock rtValue: object).
		toElement := aGroup elementFromModel: (toBlock rtValue: object).
		(fromElement notNil and: [ toElement notNil ])
			ifTrue: [  
				| edge |
				edge := RTEdge from: fromElement to: toElement. 
				edge + aLineShape.
				edges add: edge.
				view add: edge ] ].
	^ edges
!

buildEdgesFromObjects: objects from: fromBlock toAll: toAllBlock using: aLineShape inView: view scope: aGroup
	"Handy method to easily build edges. Return a list of edges"
	"fromBlock and toAllBlock operate on the model of the elements"

	| edges fromElement toElement |
	objects isEmpty ifTrue: [ ^ #() ].
	edges := RTGroup new.
	objects do: [ :object |
		fromElement := aGroup elementFromModel: (fromBlock rtValue: object).
		(toAllBlock rtValue: object) do: [ :toObject |
			toElement := aGroup elementFromModel: toObject.
			(fromElement notNil and: [ toElement notNil ])
				ifTrue: [  
					(fromElement ~~ toElement) ifTrue: 
						[ | edge |
						edge := RTEdge from: fromElement to: toElement. 
						edge + aLineShape.
						edges add: edge.
						view add: edge ] ] ] ].
	^ edges
! !

RTShapedObject subclass: #RTElement
	instanceVariableNames: 'position connectedEdges'
	package: 'Roassal2-Core'!
!RTElement commentStamp!
A RTElement is xxxxxxxxx.

Instance Variables
	connectedEdges:		<Object>
	position:		<Object>

connectedEdges
	- xxxxx

position
	- xxxxx!

!RTElement methodsFor: 'accessing'!

encompassingRectangle
	"Return the encompassing rectangle of the element"
	^ trachelShape encompassingRectangle
!

extent
	"Returns a point, describing the extent of the encompassing rectangle of myself"
	^ self encompassingRectangle extent
!

height
	^ trachelShape height
!

incomingEdges
	connectedEdges ifNil: [ ^ #() ].
	^ self connectedEdges select: [ :e | e to == self ]
!

outgoingEdges
	connectedEdges ifNil: [ ^ #() ].
	^ self connectedEdges select: [ :e | e from == self ]
!

position
	^ trachelShape position
!

width
	^ trachelShape width
! !

!RTElement methodsFor: 'actions'!

remove
	view ifNil: [ self error: 'cannot remove an element that is not part of a view' ].
	view removeElement: self.
	view := nil
!

translateBy: delta
	"Translate the element by an incremental step. If I am connected to some edges, the edges are also updated."
	self translateTo: self position + delta
!

translateTo: newPosition
	"Translate the element to a new position. If I am connected to some edges, the edges are also updated."
	trachelShape translateTo: newPosition.
	
	self connectedEdges do: [ :edge | edge update ].
	trachelShape resetPath
! !

!RTElement methodsFor: 'adding'!

addedIn: aView
	view := aView.
	view addElement: self
! !

!RTElement methodsFor: 'initialization'!

addConnectedEdge: anEdge
	[  anEdge class == RTEdge ] assert.
	self connectedEdges add: anEdge
!

connectedEdges
	connectedEdges ifNil: [ connectedEdges := OrderedCollection new ].
	^ connectedEdges
!

initialize
	super initialize.
! !

!RTElement methodsFor: 'testing'!

isConnectedTo: anEdge
	connectedEdges ifNil: [ ^ false ].
	^ connectedEdges anySatisfy: [ :edge | edge == anEdge ]
! !

!RTElement class methodsFor: 'public'!

forCollection: aCollection 
	^ (aCollection collect: [ :v | self on: v ]) asArray
!

on: anObject

	^ self new model: anObject; yourself
! !

RTAnnounceableObject subclass: #RTView
	instanceVariableNames: 'elements edges animations trCanvas'
	package: 'Roassal2-Core'!
!RTView commentStamp!
A RTView is xxxxxxxxx.

Instance Variables
	animations:		<Object>
	edges:		<Object>
	elements:		<Object>
	trCanvas:		<Object>

animations
	- xxxxx

edges
	- xxxxx

elements
	- xxxxx

trCanvas
	- xxxxx!

!RTView methodsFor: 'accessing'!

canvas
	"Return the trachel canvas on which everything is drawn"
	^ trCanvas
!

edges
	^ edges copy
!

elements
	^ elements copy
! !

!RTView methodsFor: 'accessing-computed'!

numberOfEdges
	^ edges size
!

numberOfElements
	^ elements size
!

trachelShape

	^ TRNoShape instance
! !

!RTView methodsFor: 'actions'!

elementFromModel: anObject
	"Return an element that corresponds to the object provided as parameter. If none is found, then return nil"
	^ elements detect: [ :el | el model = anObject ] ifNone: [ nil ]
!

removeEdge: anEdge
	edges remove: anEdge ifAbsent: [ ].
	anEdge trachelShape remove.
! !

!RTView methodsFor: 'adding'!

add: anElementOrAnEdge
	anElementOrAnEdge addedIn: self.
	anElementOrAnEdge renderOn: trCanvas
!

addAll: someElements
	someElements do: [ :el | self add: el ]
!

addAnimation: animation
	trCanvas addAnimation: animation
!

addEdge: anEdge
	edges add: anEdge
!

addElement: anElement
	elements add: anElement
!

removeElement: anElement
	elements remove: anElement ifAbsent: [ ].
	anElement trachelShape remove.
! !

!RTView methodsFor: 'initialization'!

initialize
	super initialize.
	elements := OrderedCollection new.
	animations := OrderedCollection new.
	edges := OrderedCollection new.
	trCanvas := TRCanvas new.
	
	"Share my announcer with the one of the Trachel Canvas"
	announcer := trCanvas announcer.
!

setUpCanvas
	trCanvas camera focusOnCenter.
	^ trCanvas
! !

!RTView methodsFor: 'instance creation'!

open
	^ self setUpCanvas open
!

openWithMenu
	self canvas addMenu: 'In' callback: [ RTZoomInMove on: self ].
	self canvas addMenu: 'Out' callback: [ RTZoomOutMove on: self ].

	^ self setUpCanvas open
! !

!RTView methodsFor: 'menu'!

addMenu: aTitle callback: aBlock
	self canvas addMenu: aTitle callback: aBlock
	"| el |
	el := RTLabel elementOn: aTitle.
	el on: TRMouseClick do: [ :event | aBlock value ].
	self add: el.
	el trachelShape setAsFixed"
! !

!RTView methodsFor: 'opening'!

openInWindowSized: anExtentAsPoint
	^ self setUpCanvas openInWindowSized: anExtentAsPoint
!

openInWindowSized: anExtentAsPoint titled: aTitle
	^ self setUpCanvas openInWindowSized: anExtentAsPoint titled: aTitle
! !

RTObject subclass: #RTShape
	instanceVariableNames: 'color'
	package: 'Roassal2-Core'!
!RTShape commentStamp!
A RTShape is xxxxxxxxx.

Instance Variables
	color:		<Object>

color
	- xxxxx!

!RTShape methodsFor: 'accessing'!

color
	^ color
!

color: aValueOrAOneArgBlock
	"aValueOrAOneArgBlock is applied on the object model"
	self colorElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]
!

colorElement: aBlock
	color := aBlock
!

fillColor
	^ self color
!

fillColor: arg
	^ self color: arg
!

fillColorElement: arg
	^ self colorElement: arg
!

instance
	^ self
! !

!RTShape methodsFor: 'configuration'!

defaultColor

	^ Color veryVeryLightGray
! !

!RTShape methodsFor: 'hooks'!

trachelShapeClass
	self subclassResponsibility
!

updateFor: edgeOrElement
	self updateFor: edgeOrElement trachelShape: edgeOrElement trachelShape
!

updateFor: edgeOrElement trachelShape: trachelShape

	self subclassResponsibility
! !

!RTShape methodsFor: 'initialization'!

initialize
	super initialize.
	color := self defaultColor
! !

!RTShape methodsFor: 'public'!

+ anotherShape
	^ RTCompositeShape with: self with: anotherShape instance
!

element

	^ RTElement new addShape: self; yourself
!

elementOn: aModel

	^ RTElement new model: aModel; addShape: self; yourself
!

elementsOn: models
	| group |
	group := RTGroup new.
	models do: [ :m | group add: (self elementOn: m) ].
	^ group
!

trachelShapeFor: anElement
	| trachelShape |
	trachelShape := self trachelShapeClass new.
	self updateFor: anElement trachelShape: trachelShape.
	^ trachelShape
! !

!RTShape methodsFor: 'rendering'!

colorFor: anElement
	^ color rtValue: anElement
! !

!RTShape class methodsFor: 'as yet unclassified'!

element

	^ self instance element
!

elementOn: aModel

	^ self instance elementOn: aModel
!

elementsOn: models
	"Return a group of elements, which is a kind of ordered collection"
	| group |
	group := RTGroup new.
	models do: [ :m | 
		group add: (self instance elementOn: m) ].
	^ group
!

instance
	^ self new
! !

RTShape subclass: #RTAbstractElementShape
	instanceVariableNames: 'height width borderColor'
	package: 'Roassal2-Core'!
!RTAbstractElementShape commentStamp!
A RTAbstractElementShape is xxxxxxxxx.

Instance Variables
	borderColor:		<Object>
	height:		<Object>
	width:		<Object>

borderColor
	- xxxxx

height
	- xxxxx

width
	- xxxxx!

!RTAbstractElementShape methodsFor: 'accessing'!

borderColor
	^ borderColor
!

borderColor: aValueOrAOneArgBlock
	"aValueOrAOneArgBlock is applied on the object model"
	self borderColorElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]
!

borderColorElement: aValueOrAOneArgBlock
	borderColor := aValueOrAOneArgBlock
!

borderColorFor: anElement
	^ borderColor rtValue: anElement
!

extent: extentAsPoint
	self widthElement: extentAsPoint x.
	self heightElement: extentAsPoint y.
!

height
	^ height
!

height: aValueOrAOneArgBlock
	"aValueOrAOneArgBlock is applied on the object model"
	self heightElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]
!

heightElement: aValueOrASymbolOrAOneArgBlock
	height := aValueOrASymbolOrAOneArgBlock
!

size: aValueOrASymbolOrAOneArgBlock
	self height: aValueOrASymbolOrAOneArgBlock.
	self width: aValueOrASymbolOrAOneArgBlock
!

sizeElement: aValueOrASymbolOrAOneArgBlock
	"Argument evaluated against the element"
	self heightElement: aValueOrASymbolOrAOneArgBlock.
	self widthElement: aValueOrASymbolOrAOneArgBlock
!

width
	^ width
!

width: aValueOrASymbolOrAOneArgBlock
	"aValueOrASymbolOrAOneArgBlock is applied on the object model"
	self widthElement: [ :anElement | aValueOrASymbolOrAOneArgBlock rtValue: anElement model ]
!

widthElement: aValueOrASymbolOrAOneArgBlock
	width := aValueOrASymbolOrAOneArgBlock
! !

!RTAbstractElementShape methodsFor: 'configuration'!

defaultHeight
	^ 5
!

defaultWidth
	^ 5
! !

!RTAbstractElementShape methodsFor: 'initialization'!

initialize
	super initialize.
	width := self defaultWidth.
	height := self defaultHeight.
! !

!RTAbstractElementShape methodsFor: 'rendering'!

heightFor: anElement
	^ height rtValue: anElement
!

widthFor: anElement
	^ width rtValue: anElement
! !

RTAbstractElementShape subclass: #RTBox
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTBox commentStamp!
A RTBox is xxxxxxxxx.!

!RTBox methodsFor: 'hooks'!

trachelShapeClass
	^ TRBoxShape
! !

!RTBox methodsFor: 'rendering'!

updateFor: anElement trachelShape: trachelShape
	| ex |
	trachelShape isNil ifTrue: [ ^ self ].
	ex := (self widthFor: anElement) @ (self heightFor: anElement).
	trachelShape extent: ex.
	trachelShape color: (self colorFor: anElement).
	trachelShape strokePaint: (self borderColorFor: anElement).
! !

RTAbstractElementShape subclass: #RTEllipse
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTEllipse commentStamp!
A RTEllipse is xxxxxxxxx.!

!RTEllipse methodsFor: 'hooks'!

trachelShapeClass
	^ TREllipseShape
! !

!RTEllipse methodsFor: 'initialization'!

initialize
	super initialize.
	color := self defaultColor
! !

!RTEllipse methodsFor: 'rendering'!

updateFor: anElement trachelShape: trachelShape
	| ex rec |
	trachelShape isNil ifTrue: [ ^ self ].
	ex := (self widthFor: anElement) @ (self heightFor: anElement).
	rec := (anElement position - (ex / 2)) extent: ex.
	
	trachelShape from: rec origin to: rec corner color: (self colorFor: anElement).
	trachelShape strokePaint: (self borderColorFor: anElement).
	^ trachelShape
! !

RTShape subclass: #RTAbstractLine
	instanceVariableNames: 'width attachPoint'
	package: 'Roassal2-Core'!
!RTAbstractLine commentStamp!
A RTAbstractLine is xxxxxxxxx.

Instance Variables
	attachPoint:		<Object>
	width:		<Object>

attachPoint
	- xxxxx

width
	- xxxxx!

!RTAbstractLine methodsFor: 'attach point'!

attachPoint: aRTAttachPoint
	attachPoint := aRTAttachPoint.
!

endingPointOf: anEdge
	^ attachPoint endingPointOf: anEdge
!

startingPointOf: anEdge
	^ attachPoint startingPointOf: anEdge
!

withHorizontalAttachPoint
	| ap |
	ap := RTHorizontalAttachPoint new.
	self attachPoint: ap.
	^ ap
!

withShorterDistanceAttachPoint
	| ap |
	ap := RTShorterDistanceAttachPoint new.
	self attachPoint: ap.
	^ ap.
!

withVerticallAttachPoint
	| ap |
	ap := RTVerticalAttachPoint new.
	self attachPoint: ap.
	^ ap
! !

!RTAbstractLine methodsFor: 'initialization'!

initialize
	super initialize.
	attachPoint := RTCenteredAttachPoint new.
! !

!RTAbstractLine methodsFor: 'public'!

edgeFrom: el1 to: el2
	^ (RTEdge from: el1 to: el2) addShape: self
! !

!RTAbstractLine methodsFor: 'rendering'!

updateFor: edge trachelShape: trachelShape
	trachelShape from: (attachPoint startingPointOf: edge).
	trachelShape to: (attachPoint endingPointOf: edge).
	trachelShape resetPath
! !

!RTAbstractLine class methodsFor: 'as yet unclassified'!

edgeFrom: el1 to: el2
	^ (RTEdge from: el1 to: el2) addShape: self
! !

RTAbstractLine subclass: #RTLine
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTLine commentStamp!
A RTLine is xxxxxxxxx.!

!RTLine methodsFor: 'accessing'!

trachelShape
	|  shape aPoint anotherPoint aColor |
	shape := TRLineShape new.
	shape from: aPoint to: anotherPoint color: aColor.
	^ shape
! !

!RTLine methodsFor: 'hooks'!

trachelShapeFor: anEdge
	| shape |
	shape := TRLineShape new.
	shape from: anEdge from position to: anEdge to position color: (self colorFor: anEdge).
	^ shape
! !

RTShape subclass: #RTNoShape
	instanceVariableNames: ''
	package: 'Roassal2-Core'!
!RTNoShape commentStamp!
This implements the Null pattern for a Roassal shape. It is typically used for defaults.!

!RTNoShape methodsFor: 'hooks'!

trachelShapeFor: element
	"We return a Trachel null shape because shapedObjects play directly with the low level shape"

	^ TRNoShape new
! !

!RTNoShape methodsFor: 'rendering'!

heightFor: element
	^ 0
!

updateFor: anElement trachelShape: trachelShape
	"Do nothing"
!

widthFor: element
	^ 0
! !

RTNoShape class instanceVariableNames: 'instance'!

!RTNoShape class methodsFor: 'as yet unclassified'!

new
	instance ifNil: [ instance := super new ].
	^ instance
! !

