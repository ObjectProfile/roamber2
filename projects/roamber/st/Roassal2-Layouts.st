Smalltalk current createPackage: 'Roassal2-Layouts'!
RTObject subclass: #RTLayout
	instanceVariableNames: 'affectedNodes translator eventHandler currentIteraction maxInterations iterationsToSendEvent'
	package: 'Roassal2-Layouts'!
!RTLayout commentStamp!
A ROLayout is the superclass of all.

Instance Variables
	affectedNodes:		<Object>
	currentIteraction:		<Object>
	eventHandler:		<Object>
	maxInterations:		<Object>
	translator:		<Object>

affectedNodes
	- xxxxx

currentIteraction
	- xxxxx

eventHandler
	- xxxxx

maxInterations
	- xxxxx

translator
	- xxxxx!

!RTLayout methodsFor: 'accessing'!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"
		
	maxInterations := elements size.
	self doInitialize: elements.
	self doExecute: elements asOrderedCollection.
	self doPost: elements.
!

iterationsToSendEvent
	"This method return the amount of iterations before sending ROLayoutStep"
	^ iterationsToSendEvent
!

iterationsToSendEvent: anInteger
	iterationsToSendEvent := anInteger
!

translator
	^ translator
!

translator: t
	translator := t
! !

!RTLayout methodsFor: 'configuration'!

defaultIterationsToSendEvent
	"Every 100 steps an event ROLayoutStep is sent"

	^ 100
! !

!RTLayout methodsFor: 'events'!

announce: anEvent
	"trigger an event. Objects who registered to me will get notified"

	| eventToBeSent |
	eventToBeSent := anEvent isBehavior 
						ifTrue: [ anEvent new ]
						ifFalse: [ anEvent ]. 
	
	eventToBeSent layout: self.
	eventHandler announce: eventToBeSent
!

step
"	currentIteraction := currentIteraction + 1.
	(currentIteraction \\ self iterationsToSendEvent) = 0 
		ifTrue: [ self announce: (ROLayoutStep new 
											currentIteration: currentIteraction;
											maxInterations: maxInterations) ].
	"
!

when: eventClass do: aBlock
	"Register a block as an handler for eventClass"
	
	eventHandler when: eventClass do: aBlock.
! !

!RTLayout methodsFor: 'hook'!

applyOn: elements
	"Return quickly if there is nothing to do"
	elements isEmpty ifTrue: [ ^ self ].
	self executeOnElements: elements
!

doExecute: elements
	"Performs the layout"

	self subclassResponsibility
!

doInitialize: elements
	"Method executed before beginning the layout. Useful when the graph to be ordered need to be prepared"
	"self announce: (ROLayoutBegin new elements: elements)."
!

doPost: elements
	"Method executed after performing the layout"
	"self announce: (ROLayoutEnd new elements: elements)."
!

on: elements
	self applyOn: elements
!

on: elements edges: edges
	self applyOn: elements
! !

!RTLayout methodsFor: 'initialize-release'!

initialize
	translator := RTLayoutTranslator default.
	eventHandler := Announcer new.
	currentIteraction := 0.
	maxInterations := 0.
	iterationsToSendEvent := self defaultIterationsToSendEvent.
! !

!RTLayout methodsFor: 'utils'!

fatherOf: aNode
	^ aNode attributes at: #father ifAbsent: [ nil ]
!

fatherOf: aNode put: aValue
	aNode attributes at: #father put: aValue
!

layerOf: aNode
	^ aNode attributes at: #layout
!

layerOf: aNode put: aValue
	aNode attributes at: #layout put: aValue
!

leftContourOf: aNode
	^ aNode attributes at: #leftContour ifAbsent: [ ^ nil ]
!

leftContourOf: aNode put: aValue
	aNode attributes at: #leftContour put: aValue
!

modOf: aNode
	^ aNode attributes at: #mod ifAbsent: [ ^ 0 ]
!

modOf: aNode put: aFloat
	aNode attributes at: #mod put: aFloat
!

pointerOf: aNode

	^ aNode attributes at: #pointer ifAbsent: [ ^ nil ]
!

pointerOf: aNode put: aValue

	^ aNode attributes at: #pointer put: aValue
!

rOf: aNode 
	^ aNode attributes at: #r ifAbsent: [ 0 ]
!

rOf: aNode put: aValue
	^ aNode attributes at: #r put: aValue
!

rightContourOf: aNode
	^ aNode attributes at: #rightContour ifAbsent: [ ^ nil ]
!

rightContourOf: aNode put: aValue
	aNode attributes at: #rightContour put: aValue
!

thetaOf: aNode
	^ aNode attributes at: #theta ifAbsent: [ ^ 0 ]
!

thetaOf: aNode put: aValue
	^ aNode attributes at: #theta put: aValue
!

xOf: aNode 
	^ aNode attributes at: #x ifAbsent: [ 0 ]
!

xOf: aNode put: aValue
	aNode attributes at: #x put: aValue
! !

!RTLayout class methodsFor: 'public'!

isAbstract
	^ self name =  #ROLayout
!

isNotAbstract
	^ self isAbstract not
!

on: aCollection
	"main entry point of the class"
	
	"If aCollection is empty, then there is not much to do"
	aCollection isEmpty ifTrue: [ ^ aCollection ].
	self new applyOn: aCollection.
	^ aCollection
!

on: elements edges: edges
	"To make all the layout polymorphic"
	
	^ self on: elements
!

onElement: aRoassalViewOrRoassalElement

	^ self on: aRoassalViewOrRoassalElement elements
!

onView: aRoassalView

	^ self on: aRoassalView elements
! !

RTLayout subclass: #RTAbstractCircleLayout
	instanceVariableNames: 'initialAngle initialIncrementalAngle initialRadius factor'
	package: 'Roassal2-Layouts'!
!RTAbstractCircleLayout commentStamp!
A ROAbstractCircleLayout is xxxxxxxxx.

Instance Variables
	factor:		<Object>
	initialAngle:		<Object>
	initialIncrementalAngle:		<Object>
	initialRadius:		<Object>

factor
	- xxxxx

initialAngle
	- xxxxx

initialIncrementalAngle
	- xxxxx

initialRadius
	- xxxxx!

!RTAbstractCircleLayout methodsFor: 'accessing'!

initialAngle
	"Return the initial angle, in radian"
	^ initialAngle
!

initialAngle: aFloat
	"aFloat is an angle in Radian."
	initialAngle := aFloat
!

initialAngleInDegree 
	"Return the initial angle in degree"
	^ self initialAngle * 180 / Float pi
!

initialAngleInDegree: aNumber
	"Set the initial angle in radian"
	self initialAngle: aNumber * Float pi / 180
!

initialIncrementalAngle
	"Return the initial incremental angle"
	^ initialIncrementalAngle
!

initialIncrementalAngle: aNumberInRadian
	initialIncrementalAngle := aNumberInRadian
!

initialIncrementalAngleInDegree: aNumberInDegree
	self initialIncrementalAngle: aNumberInDegree * Float pi / 180
!

initialRadius
	"Return the radius in pixels of the circle"
	^ initialRadius
!

initialRadius: aNumber
	"Set the radius of the circle"
	initialRadius := aNumber
!

scaleBy: aNumber
	
	factor := aNumber
!

scaleFactor
	^ factor
! !

!RTAbstractCircleLayout methodsFor: 'initialize-release'!

initialize
	"Initialize a newly created instance. This method must answer the receiver."
	
	super initialize.
	self scaleBy: 11.
	
	"Represent the initial angle to place the elements"
	initialAngle := 0.
	
	"Distance of the circle. If it is 0 when entering doExecute, then it is computed"
	initialRadius := 0.
	
	"0 means that it is computed, and not set by the user"
	initialIncrementalAngle := 0.
! !

!RTAbstractCircleLayout class methodsFor: 'as yet unclassified'!

isAbstract
	^ self name = #ROAbstractCircleLayout
! !

RTAbstractCircleLayout subclass: #RTCenteredCircleLayout
	instanceVariableNames: 'center'
	package: 'Roassal2-Layouts'!
!RTCenteredCircleLayout commentStamp!
A ROCenteredCircleLayout is xxxxxxxxx.

Instance Variables
	center:		<Object>

center
	- xxxxx!

!RTCenteredCircleLayout methodsFor: 'accessing'!

center
	"Return the point around which the layout will place nodes"
	^ center
!

center: aPoint
	"Set the point around which the layout will place nodes"
	center := aPoint
! !

!RTCenteredCircleLayout methodsFor: 'as yet unclassified'!

computeIncrementalAngleFor: elements
	"Return the value _in radian_ of the incremental angle"
	
	^ initialIncrementalAngle = 0
		ifTrue: [ 2 * Float pi / elements size ]
		ifFalse: [ initialIncrementalAngle ]
!

computeRadiusFor: elements
	"Return the radius of the circle. If none has been set (i.e., initialRadius = 0), then it is computed as the scale factor times the number of elements"
	^ initialRadius = 0 
		ifTrue: [ elements size * self scaleFactor ]
		ifFalse: [ initialRadius ]
!

doExecute: elements
	| angleIncrement angle rad centerPoint |
	rad := self computeRadiusFor: elements.
	centerPoint := center.
	angleIncrement := self computeIncrementalAngleFor: elements.
	angle := self initialAngle.
	elements
		do: [ :each | 
			| point |
			point := centerPoint + (Point r: rad theta: angle).
			angle := angle + angleIncrement.
			translator translateTopLeftOf: each to: point.
			self step ]
!

initialize
	super initialize.
	center := 0 @ 0
! !

RTAbstractCircleLayout subclass: #RTCircleLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTCircleLayout commentStamp!
A ROCircleLayout is xxxxxxxxx.!

!RTCircleLayout methodsFor: 'hook'!

computeIncrementalAngleFor: elements
	"Return the value _in radian_ of the incremental angle"
	
	^ initialIncrementalAngle = 0
		ifTrue: [ 2 * Float pi / elements size ]
		ifFalse: [ initialIncrementalAngle ]
!

computeRadiusFor: elements
	"Return the radius of the circle. If none has been set (i.e., initialRadius = 0), then it is computed as the scale factor times the number of elements"
	^ initialRadius = 0 
		ifTrue: [ elements size * self scaleFactor ]
		ifFalse: [ initialRadius ]
!

doExecute: elements
	| angleIncrement angle rad center |
	rad := self computeRadiusFor: elements.
	center := Point x: rad y: rad.
	angleIncrement := self computeIncrementalAngleFor: elements.
	angle := self initialAngle.
	elements
		do: [ :each | 
			| point |
			point := center + (Point r: rad theta: angle).
			angle := angle + angleIncrement.
			translator translateTopLeftOf: each to: point.
			self step ]
! !

!RTCircleLayout class methodsFor: 'instance creation'!

scaleBy: aNumber
	
	^self new scaleBy: aNumber
! !

RTLayout subclass: #RTAbstractGridLayout
	instanceVariableNames: 'gapSize lineItemsCountBlock'
	package: 'Roassal2-Layouts'!
!RTAbstractGridLayout commentStamp!
A ROAbstractGridLayout is xxxxxxxxx.

Instance Variables
	gapSize:		<Object>
	lineItemsCountBlock:		<Object>

gapSize
	- xxxxx

lineItemsCountBlock
	- xxxxx!

!RTAbstractGridLayout methodsFor: 'accessing'!

defaultLineItemsCount
	
	^ [ :elements | 
			| height width |
			(elements size < 3 
				ifTrue: [ (elements size max: 1) @ 1 ]
				ifFalse: 
					[ height := (elements size * 0.618034) sqrt ceiling truncated.
					width := (elements size / height) ceiling truncated.
					width @ height ]) x ]
!

gapSize
	
	^ gapSize
!

gapSize: anInteger
	gapSize := anInteger
!

lineItemsCount: aBlock
	
	lineItemsCountBlock := aBlock
!

lineItemsCountBlock
	
	^ lineItemsCountBlock
! !

!RTAbstractGridLayout methodsFor: 'initialize-release'!

defaultGapSize
	^ 5
!

initialize
	super initialize.
	gapSize := self defaultGapSize.
	lineItemsCountBlock := self defaultLineItemsCount.
! !

!RTAbstractGridLayout class methodsFor: 'instance creation'!

withGap: anInteger 

	^ self new 
			gapSize: anInteger; 
			yourself
!

withGap: anInteger withLineItemsCount: aBlock
	
	^self new
		gapSize: anInteger;
		lineItemsCount: aBlock;
		yourself
!

withLineItemsCount: aBlock
	
	^self new
		lineItemsCount: aBlock;
		yourself
! !

!RTAbstractGridLayout class methodsFor: 'public'!

isAbstract
	^ self name =  #ROAbstractGridLayout
!

on: aCollectionOfElements withGap: anInteger withLineItemsCount: aBlock
	"place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally"
	
	| myLayout |
	myLayout := self new gapSize: anInteger;  lineItemsCount: aBlock; yourself.
	myLayout applyOn: aCollectionOfElements.
	^ aCollectionOfElements
!

on: aCollectionOfElements withLineItemsCount: aBlock
	"place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally

	For example:
	self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: 5
	=> place the 20 elements on a grid 5 x 4
	
	self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: [ :elements | elements size // 3 ]
	=> place the 20 elements on a grid 3 x 7
	"
	
	
	| myLayout |
	myLayout := self new lineItemsCount: aBlock; yourself.
	myLayout applyOn: aCollectionOfElements.
	^ aCollectionOfElements
! !

RTAbstractGridLayout subclass: #RTCellLayout
	instanceVariableNames: 'inCellPosition'
	package: 'Roassal2-Layouts'!
!RTCellLayout commentStamp!
A ROCellLayout is like ROGridLayout. Elements of each column are centered along the same vertical line. And elements of each row are centered along the same horizontal line.

Instance Variables
	inCellPosition:		<Object | Block>

inCellPosition
	- Object which computes position of each element inside a cell. The cell is the space allocated for an element. Its height is maximum of heights of elements on the row. Its width is maximum of widths of elements on the column. By default elements are in the middle of their cell.!

!RTCellLayout methodsFor: 'accessing'!

inCellPosition: anObjectOrOneArgBlock

	inCellPosition := anObjectOrOneArgBlock
!

leftCentred

	self inCellPosition: [ :cell | 0 @ ((cell extent y - cell element height) / 2) ]
! !

!RTCellLayout methodsFor: 'hook'!

doExecute: elements 
	| pointer lineItemCount lineItemSize cell |
	lineItemSize := self lineItemsCountBlock rtValue: elements.
	cell := RTCell elements: elements columns: lineItemSize.
	pointer := self gapSize @ self gapSize.
	lineItemCount := 0.
	elements withIndexDo: 
		[ :element :index | 
		cell element: element; number: index.
		translator translateTopLeftOf: element to: pointer.
		pointer := (pointer x + cell extent x + (self gapSize * 2)) @ pointer y.
		lineItemCount := lineItemCount + 1.
		lineItemCount >= lineItemSize ifTrue: 
			[ pointer := self gapSize @ (pointer y + (self gapSize * 2) + cell extent y).
			lineItemCount := 0 ].
		self step ]
! !

!RTCellLayout methodsFor: 'initialize-release'!

initialize

	super initialize.
! !

RTAbstractGridLayout subclass: #RTGridLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTGridLayout commentStamp!
A ROGridLayout places elements as a grid.

Instance Variables
	gapSize:		<SmallInteger>
	lineItemsCountBlock:		<BlockContext>

gapSize
	- number of pixels between each elements, horizontally and vertically

lineItemsCountBlock
	- tells the amount of item per line should be used!

!RTGridLayout methodsFor: 'hook'!

doExecute: elements
	| pointer lineItemCount lineItemSize maxLastLineHeight originalGapLeft originalGapTop |
	originalGapLeft := 0.
	originalGapTop := 0.
	
	pointer := originalGapLeft @ originalGapTop.
	lineItemSize := self lineItemsCountBlock rtValue: elements.
	lineItemCount := 0.
	maxLastLineHeight := 0.

	elements
		do: [ :element | 
			translator translateTopLeftOf: element to: pointer.
			pointer := (pointer x + element width + self gapSize) @ pointer y.
			lineItemCount := lineItemCount + 1.
			maxLastLineHeight := maxLastLineHeight max: element height.
			lineItemCount >= lineItemSize
				ifTrue: [ 
					pointer := originalGapLeft @ (pointer y + (self gapSize * 2) + maxLastLineHeight).
					
					maxLastLineHeight := 0.
					lineItemCount := 0 ].
			self step ].
! !

RTLayout subclass: #RTAbstractLineLayout
	instanceVariableNames: 'gapSize horizontalGap verticalGap horizontalOutGap verticalOutGap alignment horizontallyStretchable verticallyStretchable'
	package: 'Roassal2-Layouts'!
!RTAbstractLineLayout commentStamp!
A ROAbstractLineLayout is the abstract superclass of the line layout.

Instance Variables
	alignment:		<Object>
	gapSize:		<Object>
	horizontalGap:		<Object>
	horizontalOutGap:		<Object>
	horizontallyStretchable:		<Object>
	verticalGap:		<Object>
	verticalOutGap:		<Object>
	verticallyStretchable:		<Object>

alignment
	- xxxxx

gapSize
	- xxxxx

horizontalGap
	- xxxxx

horizontalOutGap
	- xxxxx

horizontallyStretchable
	- xxxxx

verticalGap
	- xxxxx

verticalOutGap
	- xxxxx

verticallyStretchable
	- xxxxx!

!RTAbstractLineLayout methodsFor: 'accessing'!

alignBottom
	
	alignment := #bottom
!

alignCenter
	
	alignment := #center
!

alignLeft
	
	alignment := #left
!

alignRight
	
	alignment := #right
!

alignTop
	
	alignment := #top
!

alignment
	
	^alignment
!

alignment: anObject
	
	alignment := anObject
!

gapSize
	
	^gapSize
!

gapSize: aNumber
	gapSize := aNumber. " This value is never used actually "
	
	verticalGap := 2 * aNumber.
	horizontalGap := 2 * aNumber
!

horizontalGap
	
	^horizontalGap
!

horizontalGap: anObject
	
	horizontalGap := anObject
!

verticalGap
	
	^verticalGap
!

verticalGap: anObject
	
	verticalGap := anObject
! !

!RTAbstractLineLayout methodsFor: 'configuration'!

center
	self alignment: #center
!

stretch
	horizontallyStretchable := verticallyStretchable := true
!

stretchHorizontally
	horizontallyStretchable := true
!

stretchVertically
	verticallyStretchable := true
! !

!RTAbstractLineLayout methodsFor: 'hook'!

deltaFor: aNodeFigure
	
	^self subclassResponsibility
!

doCenter: aGraph
	self subclassResponsibility
!

doExecute: elements 
	| pointer delta |
	horizontallyStretchable ifTrue: 
		[ self doStretchHorizontal: elements ].
	verticallyStretchable ifTrue: 
		[ self doStretchVertical: elements ].
	pointer := self positionOriginalPointer: elements.

	elements do: 
		[ :element |
		delta := self deltaFor: element.
		translator translateTopLeftOf: element to: pointer - delta.
		pointer := self 
					movePointer: pointer
					accordingToFigure: element.
		self step ].
!

doStretchHorizontal: aCollectionOfElements 

	self subclassResponsibility
!

doStretchVertical: aCollectionOfElements 

	self subclassResponsibility
!

movePointer: pointer accordingToFigure: aNodeFigure
	
	self subclassResponsibility
!

positionOriginalPointer: aGraph
	
	^self subclassResponsibility
! !

!RTAbstractLineLayout methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	verticalGap := 10.
	horizontalGap := 10.
	horizontallyStretchable := false.
	verticallyStretchable := false
! !

!RTAbstractLineLayout methodsFor: 'testing'!

horizontallyStretchable
	^ horizontallyStretchable
!

isLineLayout
	^ true
!

verticallyStretchable
	^ verticallyStretchable
! !

!RTAbstractLineLayout class methodsFor: 'instance creation'!

withGap: anInteger
	
	^(self new)
		gapSize: anInteger;
		yourself
! !

!RTAbstractLineLayout class methodsFor: 'testing'!

isAbstract
	^ self name =  #ROAbstractLineLayout
! !

RTAbstractLineLayout subclass: #RTHorizontalLineLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTHorizontalLineLayout commentStamp!
A RTHorizontalLineLayout locates all the elements horizontally!

!RTHorizontalLineLayout methodsFor: 'hook'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #bottom ifTrue: [delta := aNodeFigure height].
	self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].
	^0 @ delta
!

doCenter: elements 

 	| midTallest step |
	midTallest := 0.
	midTallest := elements nodes 
		inject: 0
		into: [ :m :el | m max: (el bounds height )].
	midTallest := midTallest / 2.
	elements nodes do: [ :node | 
		step := 0 @ (midTallest - (node bounds height / 2)) asInteger.
		node bounds origin: (node bounds origin + step).
		node bounds corner: (node bounds corner + step).
	]
!

doStretchHorizontal: aCollectionOfElements 

 	| parent parentBounds addedWidth parentBoundsWidth runningIndex newWidth |

	aCollectionOfElements isEmpty ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	addedWidth := aCollectionOfElements
		inject: 0
		into: [ :m :el | m + el width ].

	parentBoundsWidth := parentBounds width.
"	parentBoundsWidth := parentBoundsWidth - ((aCollectionOfElements size - 1) * horizontalGap) - (2 * horizontalOutGap)."
	
	
	runningIndex := 0.
	parentBounds width > addedWidth
		ifTrue: [ aCollectionOfElements do: [ :element | 
						newWidth := (element width * parentBoundsWidth / addedWidth) asInteger.
						element width: newWidth.
						runningIndex := runningIndex + newWidth + horizontalGap ] ]
!

doStretchVertical: aCollectionOfElements 

 	| parent parentBounds |
	aCollectionOfElements isEmpty ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	aCollectionOfElements do: [ :element | 
		element height: (parentBounds height) ]
!

movePointer: pointer accordingToFigure: element
	
	^ (pointer x + element width + self horizontalGap) @ pointer y
!

positionOriginalPointer: elements 
	| maxHeight delta |
	delta := 0.
	self alignment == #bottom ifTrue: 
		[ maxHeight := elements maxValue: #height.
		delta := maxHeight ].
	self alignment == #center ifTrue: 
		[ maxHeight := elements maxValue: #height.
		delta := maxHeight / 2.0 ].
	^ (0) @ ((0) + delta)
! !

!RTHorizontalLineLayout methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	self alignTop
! !

RTAbstractLineLayout subclass: #RTVerticalLineLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTVerticalLineLayout commentStamp!
A RTVerticalLineLayout locates all the elements vertically!

!RTVerticalLineLayout methodsFor: 'hook'!

deltaFor: aNodeFigure
	
	| delta |
	delta := 0.
	self alignment == #right ifTrue: [delta := aNodeFigure width].
	self alignment == #center ifTrue: [delta := aNodeFigure width / 2.0].
	^delta @ 0
!

doCenter: aGraph 

 	| midWidest step |
	midWidest := aGraph nodes 
		inject: 0
		into: [ :m :el | m max: (el bounds width )].
	midWidest := midWidest / 2.
	aGraph nodes do: [ :node | 
		step := (midWidest - (node bounds width /2)) asInteger @ 0.
		node bounds origin: (node bounds origin + step).
		node bounds corner: (node bounds corner + step).
	]
!

doStretchHorizontal: aCollectionOfElements 
	
 	| parent parentBounds |
	aCollectionOfElements isNil ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	aCollectionOfElements do: [ :element | 
		element width: parentBounds width ]
!

doStretchVertical: aCollectionOfElements 

 	| parent parentBounds addedHeight parentBoundsHeight runningIndex newHeight |

	aCollectionOfElements isEmpty ifTrue: [ ^ self "nothing to do" ].
	parent := aCollectionOfElements anyOne parent.
	parent isView ifTrue: [ ^ self "ROView does not have bounds" ].
	parentBounds := parent bounds.

	addedHeight := aCollectionOfElements 
		inject: 0
		into: [ :m :el | m + el height ].

	parentBoundsHeight := parentBounds height.
	"parentBoundsHeight := parentBoundsHeight - ((aCollectionOfElements size - 1) * verticalGap) - (2 * verticalOutGap)."
	
	runningIndex := 0.
	parentBounds height > addedHeight
		ifTrue: [ aCollectionOfElements do: [ :element | 
						newHeight := (element height * parentBoundsHeight / addedHeight) asInteger.
						element height: newHeight.
						runningIndex := runningIndex + newHeight + verticalGap ] ]
!

movePointer: pointer accordingToFigure: aNodeFigure
	
	^ pointer x @ (pointer y + aNodeFigure height + self verticalGap)
!

positionOriginalPointer: elements 
	| maxWidth delta |
	delta := 0.
	self alignment == #right ifTrue: 
		[ maxWidth := elements maxValue: #width.
		delta := maxWidth ].
	self alignment == #center ifTrue: 
		[ maxWidth := elements maxValue: #width.
		delta := maxWidth / 2.0 ].
	^ ((0) + delta) @ (0)
! !

!RTVerticalLineLayout methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	self alignLeft
! !

RTLayout subclass: #RTEdgeDrivenLayout
	instanceVariableNames: 'edges userDefinedEdges fromPositions toPositions'
	package: 'Roassal2-Layouts'!
!RTEdgeDrivenLayout commentStamp!
A ROEdgeDrivenLayout is xxxxxxxxx.

Instance Variables
	edges:		<Object>
	fromPositions:		<Object>
	toPositions:		<Object>
	userDefinedEdges:		<Object>

edges
	- xxxxx

fromPositions
	- xxxxx

toPositions
	- xxxxx

userDefinedEdges
	- xxxxx!

!RTEdgeDrivenLayout methodsFor: 'accessing'!

affectedNodes
	
	^affectedNodes
!

affectedNodes: anObject
	
	affectedNodes := anObject
!

affectedNodesOf:  aNode 
	^ affectedNodes ifNil: [ aNode nodes ]
!

edges: aCollection
	
	edges := aCollection
!

fromPositions: anArray
	
	fromPositions := anArray
!

setEdgesFromElements: elements 
	| view |
	elements isEmpty ifTrue: [ ^ self ].
	
	view := elements anyOne view.
	self edges: (view edges select: [ :el | (elements includes: el from) and: [ elements includes: el to ] ]).
!

toPositions: anArray
	
	toPositions := anArray
! !

!RTEdgeDrivenLayout methodsFor: 'default values'!

defaultFromPositions
	^ #()
!

defaultToPositions
	^ #()
! !

!RTEdgeDrivenLayout methodsFor: 'hook'!

doExecute: aGraphElement
	
	self subclassResponsibility
!

doIncrementallyExecute: anElementNode
	"called by refreshLayoutEvery: ms. It is used to convey a feeling of incremental execution."
	
	self doExecute: anElementNode
!

executeOnElements: elements 
	"Execute the layout, myself, on the elements"

	self userDefinedEdges isNil 
		ifTrue: [ self setEdgesFromElements: elements ]
		ifFalse: 
			[ | flat |
			flat := OrderedCollection new.
			self userDefinedEdges do: 
				[ :each | 
				each isCollection 
					ifTrue: [ flat addAll: each ]
					ifFalse: [ flat add: each ] ].
			self edges: flat ].
		
	super executeOnElements: elements
! !

!RTEdgeDrivenLayout methodsFor: 'initialize-release'!

initialize
	"Initialization"
	super initialize.
	edges := nil
!

userDefinedEdges: aCollectionOfEdges
	"useful to tell to the layout which edges have to be used for the layout"

	userDefinedEdges := aCollectionOfEdges.
! !

!RTEdgeDrivenLayout methodsFor: 'iterator'!

edgesDo: aBlock
	"Iterates over all the edges of the receiver."
	
	edges ifNil: [ ^ self ].
	edges do: aBlock
! !

!RTEdgeDrivenLayout methodsFor: 'private'!

edges
	
	^edges
!

fromPositions
	
	^fromPositions ifNil: [fromPositions := self defaultFromPositions]
!

toPositions
	
	^toPositions ifNil: [toPositions := self defaultToPositions]
!

userDefinedEdges
	
	^userDefinedEdges
! !

!RTEdgeDrivenLayout methodsFor: 'testing'!

isLineLayout
	^ false
! !

!RTEdgeDrivenLayout class methodsFor: 'as yet unclassified'!

isAbstract
	^ self name = #ROEdgeDrivenLayout
! !

!RTEdgeDrivenLayout class methodsFor: 'instance creation'!

withEdges: aCollection
	
	^self new initialize userDefinedEdges: aCollection
! !

RTEdgeDrivenLayout subclass: #RTAbstractGraphLayout
	instanceVariableNames: 'verticalGap horizontalGap cachedChildren cachedParents cachedParentsWithHighestNestings'
	package: 'Roassal2-Layouts'!
!RTAbstractGraphLayout commentStamp!
A ROAbstractGraphLayout is xxxxxxxxx.

Instance Variables
	cachedChildren:		<Object>
	cachedParents:		<Object>
	cachedParentsWithHighestNestings:		<Object>
	horizontalGap:		<Object>
	verticalGap:		<Object>

cachedChildren
	- xxxxx

cachedParents
	- xxxxx

cachedParentsWithHighestNestings
	- xxxxx

horizontalGap
	- xxxxx

verticalGap
	- xxxxx!

!RTAbstractGraphLayout methodsFor: 'accessing'!

horizontalGap
	
	^horizontalGap ifNil: [ self class horizontalGap ]
!

horizontalGap: anInteger
	
	horizontalGap := anInteger
!

verticalGap
	
	^verticalGap ifNil: [self class verticalGap]
!

verticalGap: anInteger
	
	verticalGap := anInteger
! !

!RTAbstractGraphLayout methodsFor: 'actions'!

on: el edges: edgs
	"Do the layout of the elements tacking into account the provided edges"

	self userDefinedEdges ifNil: [ self userDefinedEdges: edgs ].

	^ self applyOn: el.
! !

!RTAbstractGraphLayout methodsFor: 'battista'!

greedyCycleRemoval: aCollection
	"Di Battista Greedy-Cycle-Removal algorithm. Chapter 9.4, page 297. The last part is not like in the book. The original algorithm only takes
	 local optimas into account. This will break ordinary trees sometimes. This version also takes global optimas into account."
	
	| g sl sr s indeg outdeg degrees vertex | 
	g := aCollection copy asOrderedCollection.
	sl := OrderedCollection new.
	sr := OrderedCollection new.	"While g contains a sink (aka leaf)"
	g copy
		do:
			[:node | 
			(self childrenFor: node) isEmpty
				ifTrue:
					[sr addFirst: node.
					g remove: node]	"self edges detect: [:edge | edge fromFigure == node] ifNone: [sr addFirst: node. g remove: node]"].	"While g contains a source (aka root)"
	g copy
		do:
			[:node | 
			(self parentsFor: node) isEmpty
				ifTrue:
					[sl addLast: node.
					g remove: node]	"self edges detect: [:edge | edge toFigure == node] ifNone: [sl addLast: node. g remove: node]"].	"Calculate deg for all remaining vertices"
	degrees := IdentityDictionary new.
	g
		do:
			[:node | 
			indeg := (self parentsFor: node) size.
			outdeg := (self childrenFor: node) size.	"indeg := self edges inject: 0 into: [:sum :edge | (edge toFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].
		outdeg := self edges inject: 0 into: [:sum :edge | (edge fromFigure == node) ifTrue: [sum + 1] ifFalse: [sum]]."
			degrees
				at: node
				put: outdeg - indeg].	"While g not empty"
	g := g asSortedCollection: [:a :b | (degrees at: a) >= (degrees at: b)].
	[g isEmpty]
		whileFalse:
			[vertex := g
				detect: [:v | (self parentsFor: v) anySatisfy: [:w | sl includes: w]]
				ifNone: [g first].	"Corner case: Closed cycle with not root at all. Eg 1 -> 2 -> 3 -> 1"
			sl addLast: vertex.
			g remove: vertex].	"Remove all leftward edges"
	s := sl , sr.
	self edges notNil
		ifTrue: 
			[ self edges copy
				do:
					[:edge | 
					(s indexOf: edge from) > (s indexOf: edge to)
						ifTrue: [self edges remove: edge ] ] ].	
	"Reset the cache"
	self clear
! !

!RTAbstractGraphLayout methodsFor: 'default values'!

defaultFromPositions
	
	^#(#bottomCenter)
!

defaultToPositions
	
	^#(#topCenter)
! !

!RTAbstractGraphLayout methodsFor: 'hook'!

doInitialize: elements 
	super doInitialize: elements.
	self clear.
	self greedyCycleRemoval: elements
! !

!RTAbstractGraphLayout methodsFor: 'private'!

cachedChildren
	
	cachedChildren ifNil: [cachedChildren := IdentityDictionary new: 1000].
	^cachedChildren
!

cachedParents
	
	cachedParents ifNil: [cachedParents := IdentityDictionary new: 1000].
	^cachedParents
!

cachedParentsWithHighestNestings
	
	cachedParentsWithHighestNestings
		ifNil: [cachedParentsWithHighestNestings := IdentityDictionary new: 1000].
	^cachedParentsWithHighestNestings
!

childrenFor: aNode
	
	^self cachedChildren
		at: aNode
		ifAbsentPut:
			[| nodes |
			nodes := OrderedCollection new.
			self edgesDo:
					[:edge | 
					(edge from == aNode and: [edge to ~= aNode])
						ifTrue:
							[(nodes includes: edge from) ifFalse: [nodes add: edge to]]].
			nodes]
!

childrenFor: aNode except: aNodeCollection
	
	^(self childrenFor: aNode) 
		reject: [:each | aNodeCollection includes: each]
	
	"we are explicitly not using the default Collection>>difference: behavior here because we want to preserve the order of the collection"
!

childrenWithHighestNestingLevelFor: aNode
	
	^(self childrenFor: aNode)
		select: [:eachChild | (self highestNestingParentFor: eachChild) == aNode]
!

clear
	
	cachedParents := nil.
	cachedChildren := nil.
	cachedParentsWithHighestNestings := nil
!

highestNestingParentFor: aNodeFigure
	
	| parents |
	^self cachedParentsWithHighestNestings
		at: aNodeFigure
		ifAbsentPut:
			[parents := self parentsFor: aNodeFigure.
			parents isEmpty
				ifTrue: [0]
				ifFalse:
					[parents detectMax: [:eachParent | self nestingLevelFor: eachParent]]]
!

maximumDiameter: aCollection
	
	^aCollection
		inject: 0
		into: [:max :node | max max: (node radius * 2) ]
!

maximumRadius: aCollection
	
	^aCollection
		inject: 0
		into: [:max :node | max max: node radius]
!

nestingLevelFor: aNodeFigure
	
	| parents parentsNesting |
	parents := self parentsFor: aNodeFigure.
	parentsNesting := parents
		collect: [:eachParent | self nestingLevelFor: eachParent].
	^parentsNesting isEmpty
		ifTrue: [0]
		ifFalse: [parentsNesting max + 1]
!

parentsFor: aNode
	^ self cachedParents
		at: aNode
		ifAbsentPut:
			[ | nodes |
			nodes := OrderedCollection new.
			self edgesDo:
					[:edge | edge to == aNode ifTrue: [ nodes add: edge from ] ].
			nodes ]
!

rootNodesFor: aCollection
	^ aCollection select: [:node | 
		(self parentsFor: node) isEmpty ].
!

shiftTree: aNode by: aPoint
	
	aNode translateBy: aPoint.
	(self childrenFor: aNode) do: [:child | self shiftTree: child by: aPoint]
! !

!RTAbstractGraphLayout class methodsFor: 'constants'!

horizontalGap
	
	^3.0
!

verticalGap
	
	^20.0
! !

!RTAbstractGraphLayout class methodsFor: 'public'!

on: elements edges: edges
	"Do the layout of the elements tacking into account the provided edges"

	^ self new 
		userDefinedEdges: edges;
		applyOn: elements.
! !

!RTAbstractGraphLayout class methodsFor: 'testing'!

isAbstract
	^ self name = #ROAbstractGraphLayout
! !

RTAbstractGraphLayout subclass: #RTAbstractCompactTree
	instanceVariableNames: 'sonsDictionary root initialLayout margin'
	package: 'Roassal2-Layouts'!
!RTAbstractCompactTree commentStamp!
A ROAbstractCompactTree is xxxxxxxxx.

Instance Variables
	initialLayout:		<Object>
	margin:		<Object>
	root:		<Object>
	sonsDictionary:		<Object>

initialLayout
	- xxxxx

margin
	- xxxxx

root
	- xxxxx

sonsDictionary
	- xxxxx!

!RTAbstractCompactTree methodsFor: 'algorithm'!

compareContourOf: aNode with: another
	"return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode"

	| difference max nodeA nodeB |
	nodeB := aNode.	"the right one"
	nodeA := another.	"the left one"
	max := aNode = another
		ifTrue: [ 0 ]
		ifFalse: [ horizontalGap / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].
	nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
	nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.
	[ nodeB isNil not & nodeA isNil not ]
		whileTrue: [ 
			difference := horizontalGap
				-
					((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)
						- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).
			max := max max: difference.
			nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.
			nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].
	^ max
!

computePosition: aNode
"compute the position of the given node and of his sons recursively"

	| children neighbor nodeA |
	
	children := self childrenFor: aNode.
	neighbor := self leftSiblingOf: aNode.
	
	children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0.]  
											 ifFalse: [ aNode x: (neighbor x + (horizontalGap /2)); mod: (neighbor mod);
													  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]
					 
					 ifFalse: [aNode leftContour: children first;
									rightContour: children last.
							  children do: [:e | self computePosition: e ].
							      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;
										mod: 0. 
								neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).
									
													  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).
													  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].
													 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).
													
													 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).
													 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].
													nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ]
!

followLeftContour: aNode toLayer: anInteger
	"return the last node in the left contour begining at anode"
	
	((self layerOf: aNode) = anInteger ) ifTrue: [^ aNode  ].
	((self layerOf: aNode) > anInteger ) ifTrue: [^ nil  ].
	
	(self leftContourOf: aNode) isNil ifTrue: [ (self pointerOf: aNode)  isNil ifTrue: [ ^ nil ] 
														 ifFalse: [ ^ ( self followLeftContour: (self pointerOf: aNode) toLayer: anInteger ) ] ]
	
			  				ifFalse: [ ^ (self followLeftContour: (self leftContourOf: aNode) toLayer: anInteger ) ]
!

followRightContour: aNode toLayer: anInteger
	"return the node in the right contour begining at anode in layer anInteger"

	((self layerOf: aNode) = anInteger ) ifTrue: [^ aNode  ].
	((self layerOf: aNode) > anInteger ) ifTrue: [^ nil  ].

	(self rightContourOf: aNode) isNil ifTrue: [ (self pointerOf: aNode) isNil ifTrue: [ ^ nil ] 
														 ifFalse: [ ^ ( self followRightContour: (self pointerOf: aNode) toLayer: anInteger ) ] ]
	
			  				ifFalse: [ ^ (self followRightContour: (self rightContourOf: aNode) toLayer: anInteger ) ]
!

getAbcissaOf: aNode inSubtreeFromLayer: anInteger

	| node x |
	
	(anInteger < 0) ifTrue: [^ self getAbcissaOf: aNode inSubtreeFromLayer: 0 ].
	
	((self layerOf: aNode) = anInteger ) ifTrue: [ ^ self xOf: aNode ].
	((self layerOf: aNode) < anInteger ) ifTrue: [ ^ nil ].
	
	x := (self xOf: aNode) + (self modOf: aNode).
	
	node := self fatherOf: aNode.
	
	[(self layerOf: node) = anInteger  ] whileFalse: [ x := x + (self modOf: node).
									node := self fatherOf: node ].
								
	^ x
!

leftSiblingOf: aNode
"return the left sibling of the given node "

	| children |

	(self fatherOf: aNode) isNil ifTrue: ["has no sibling" ^ nil]
					    ifFalse: [ children := self childrenFor: (self fatherOf: aNode).
								(children first) = aNode ifTrue: ["as no left sibling" ^ nil ]
																    ifFalse: [^ children at: ((children indexOf: aNode) - 1) ] ]
!

nodeAbcissaWithNeighbor: aNode

	self subclassResponsibility
! !

!RTAbstractCompactTree methodsFor: 'hook'!

coordinate: aNode withMod: aFloat
	self subclassResponsibility
!

doExecute: nodeElements 
	| rootNodes |
	
	initialLayout isNil  ifFalse: [ initialLayout new executeOnElements: nodeElements. ].
	
	rootNodes := self rootNodesFor: nodeElements.

"	root isNil ifTrue: [ rootNodes := self rootNodesFor: nodeElements. ]
			 ifFalse: [ rootNodes := Array with: root.
						self coveringTreeFor: nodeElements from: root ].
"	
	rootNodes do: [:e | self initialize: e whoseFatherIs: nil ];
		do: [:e | self computePosition:e].
	
	rootNodes  do: [:e |
					self draw:e withMod: 0  ]
!

draw: aNode withMod: aFloat
	self subclassResponsibility
! !

!RTAbstractCompactTree methodsFor: 'initialize-release'!

greedyCycleRemoval: aGraph
!

initialLayout: aLayout

	initialLayout := aLayout
!

initialize 

	super initialize.
	verticalGap := 20.
	horizontalGap := 30.
	margin := 40. 
	sonsDictionary := Dictionary new
!

initialize: aNode whoseFatherIs: another 

	self fatherOf: aNode put: another.
	
	another isNil ifTrue: [ self layerOf: aNode put: 0 ] ifFalse: [ self layerOf: aNode put: (self layerOf: another) + 1 ] .
	
	( self childrenFor: aNode ) do: [ :e | self initialize: e whoseFatherIs: aNode ]
!

root: aNode 

	root := aNode
! !

!RTAbstractCompactTree methodsFor: 'private'!

childrenFor: aNode 

	sonsDictionary isEmpty ifTrue: [ ^ super childrenFor: aNode ] 
							ifFalse: [ ^sonsDictionary at: aNode ifAbsent: [ ^ OrderedCollection new ] ]
! !

!RTAbstractCompactTree class methodsFor: 'testing'!

horizontalGap: anInt

	| new |
	
	new := self new.
	new horizontalGap: anInt.
	
	^ new
!

horizontalGap: anInt verticalGap: another

	| new |
	
	new := self new.
	new horizontalGap: anInt.
	new verticalGap: another.
	
	
	^ new
!

isAbstract
	^ self name = #ROAbstractCompactTree
!

verticalGap: anInt

	| new |
	
	new := self new.
	new verticalGap: anInt.
	
	^ new
! !

RTAbstractCompactTree subclass: #RTRadialTreeLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTRadialTreeLayout commentStamp!
A RORadialTreeLayout is xxxxxxxxx.!

!RTRadialTreeLayout methodsFor: 'algorithm'!

compareContourOf: aNode with: another
	"return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode"

	| difference max nodeA nodeB |
	nodeB := aNode.	"the right one"
	nodeA := another.	"the left one"
	max := aNode = another
		ifTrue: [ 0 ]
		ifFalse: [ horizontalGap / (self layerOf: nodeB) / 2 - ((self xOf: nodeB) - (self getAbcissaOf: nodeA inSubtreeFromLayer: (self layerOf: aNode) - 1)) ].
	nodeB := self followLeftContour: nodeB toLayer: (self layerOf: nodeB) + 1.
	nodeA := self followRightContour: nodeA toLayer: (self layerOf: nodeA) + 1.
	[ nodeB isNil not & nodeA isNil not ]
		whileTrue: [ 
			difference := horizontalGap / (self layerOf: nodeA)
				-
					((self getAbcissaOf: nodeB inSubtreeFromLayer: (self layerOf: aNode) - 1)
						- (self getAbcissaOf: nodeA inSubtreeFromLayer: (self layerOf: aNode) - 1)).
			max := max max: difference.
			nodeB := self followLeftContour: nodeB toLayer: (self layerOf: nodeB) + 1.
			nodeA := self followRightContour: nodeA toLayer: (self layerOf: nodeA) + 1 ].
	^ max
!

computePosition: aNode
"compute the position of the given node and of his sons recursively"

	| children neighbor nodeA |
	
	children :=self childrenFor: aNode.
	neighbor := self leftSiblingOf: aNode.
	
	children isEmpty ifTrue: [ neighbor isNil ifTrue: [ self xOf: aNode put: 0. self modOf: aNode put: 0. ]  
		
											 ifFalse: [ self xOf: aNode put: ((self xOf: neighbor) + (horizontalGap /(self layerOf: aNode) /2)). self modOf: aNode put: ((self modOf: neighbor)).
													 self pointerOf: aNode put: (self followRightContour: neighbor toLayer: ((self layerOf: aNode) + 1)) ] ]
					 
					 ifFalse: [ self leftContourOf: aNode put: children first.
									self rightContourOf: aNode put: children last.
							  children do: [:e | self computePosition: e ].
							      self xOf: aNode put: ((self xOf: ( self leftContourOf: aNode ) ) + ( self xOf: ( self rightContourOf: aNode ) ) + (self modOf: ( self rightContourOf: aNode ) ) ) / 2. 
										self modOf: aNode put: 0. 
								neighbor isNil ifFalse: [ self modOf: aNode put: (self compareContourOf: aNode with: neighbor).
									
													  nodeA := (self followLeftContour: (self fatherOf: aNode) toLayer: (self layerOf: aNode)).
													  [(self followLeftContour: nodeA toLayer: ((self layerOf: nodeA) + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: ((self layerOf: nodeA) + 1) ].
													 self pointerOf: nodeA put: (self followLeftContour: aNode toLayer: ((self layerOf: nodeA) + 1)).
													
													 nodeA := self followRightContour: aNode toLayer: ((self layerOf: aNode) + 1).
													 [(self followRightContour: nodeA toLayer: ((self layerOf: nodeA) + 1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: ((self layerOf: nodeA) +1) ].
													self pointerOf: nodeA put: (self followRightContour: neighbor toLayer: ((self layerOf: nodeA) + 1) ) ] ].
!

diameterOf: aNode

	|diam|
	
	(aNode shapes first isKindOf: RTEllipse) ifTrue: [ diam := aNode width max: aNode height ]
										ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].
	
	^ diam
!

halfDiameterOf: aNode

	|diam|
	
	(aNode shapes first isKindOf: RTEllipse) ifTrue: [ diam := aNode width max: aNode height ]
										ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].
	
	^ diam / 2
!

nodeAbcissaWithNeighbor: aNode

	^ aNode x + (horizontalGap / aNode layer /2) + ((self halfDiameterOf: aNode) / aNode layer)
!

radialDraw: aNode
	"draw the subtree induced by the given node"

	| children r max |
	r := (self rOf: aNode).
	translator translateTopLeftOf: aNode to: (Point r: r theta: (self thetaOf: aNode)).
	"aNode translateTo: (Point radius: (aNode r) theta: (aNode theta))."
	children := self childrenFor: aNode.
	max := 0.
	children do: [ :e | max := max max: (self radialDraw: e) ].
	^ r + max.
!

toRadialTree: aNode withMod: aFloat
	"compute polar coordinates of the subtree induced by anode from its cartesian coordinates "
	| children |
	self rOf: aNode put: ((self layerOf: aNode) * verticalGap ).
	((self rOf: aNode) = 0) ifTrue: [ self thetaOf: aNode put: 0 ] 
					ifFalse: [ self thetaOf: aNode put: ((self xOf: aNode)  + aFloat + (self modOf: aNode)) / verticalGap ].
	
	children := self childrenFor: aNode.
	
	children do: [ :e | self toRadialTree: e withMod: ( (self modOf: aNode) + aFloat) ]
! !

!RTRadialTreeLayout methodsFor: 'hook'!

computeGap: aNode
	" compute the vertical gap needed for drawing the radial tree "
	| gap maxAbcissa i abc nodeL nodeR layer |	
	gap := 0.
	maxAbcissa := 0.
	layer := 1.
	
	i := 1.
	[ nodeL :=(self followLeftContour: aNode toLayer: i).
	nodeR := (self followRightContour: aNode toLayer: i).
	nodeL isNil not & nodeR isNil not ] whileTrue: [ abc := (((self getAbcissaOf: nodeR inSubtreeFromLayer: 0) - (self getAbcissaOf: nodeL inSubtreeFromLayer: 0 ) + (horizontalGap / layer/2)) / layer).
																	(abc > maxAbcissa) ifTrue: [ maxAbcissa := abc. 
																								layer := layer ].
																	i := i + 1 ].

	
	gap:= (maxAbcissa / 2 /Float pi ) floor +1.
	
	((verticalGap isNil) or: [gap > verticalGap])  ifTrue: [ self verticalGap: gap ]
!

doExecute: nodeElements

	| rootNodes xOffset maximumRadius | 
	initialLayout isNil
		ifFalse: [ initialLayout new executeOnElements: nodeElements ].
	rootNodes := self rootNodesFor: nodeElements.
	rootNodes
		do: [ :e | self initialize: e whoseFatherIs: nil ];
		do: [ :e | self computePosition: e. self step];
		do: [ :e | self computeGap: e ];
		do: [ :e | self toRadialTree: e withMod: 0 ].
	xOffset := 0.
	rootNodes
		do: [ :e | 
			maximumRadius := self radialDraw: e.
			"Shifting all the subgroups"
			self shiftTree: e by:  (maximumRadius+xOffset)@maximumRadius.
			xOffset := xOffset + (2 * maximumRadius) + 10.  ].
!

rotateSubtreeFrom: aNode by: aFloat
	
	aNode theta: aNode theta + aFloat.
	
	(self childrenFor: aNode) do: [ :e | self rotateSubtreeFrom: e by: aFloat ]
!

spreadNodes: nodeElements around: aNode

	|nodeL nodeR i angle beta lay1 |
	
	i := 1.
	angle := 0.
	
	[ nodeL :=(self followLeftContour: aNode toLayer: i).
	nodeR := (self followRightContour: aNode toLayer: i).
	nodeL isNil not & nodeR isNil not ] whileTrue: [ angle := angle max: ((nodeR theta - nodeL theta) + ((self halfDiameterOf: nodeR) + (self halfDiameterOf: nodeL) + horizontalGap  /i /verticalGap )).
													i := i+1. ].

	lay1 := nodeElements select: [ :e | e layer = 1 ].

	beta := Float pi * 2 - angle / lay1 size.
	
	lay1 do: [ :e | self rotateSubtreeFrom: e by: (lay1 indexOf: e) - 1 * beta ].
! !

!RTRadialTreeLayout methodsFor: 'private'!

gap
	
	^ self verticalGap
!

layoutLayer: aCollection radius: oldRadius from: aFromAngle to: aToAngle
	
	| delta childRadius maximumRadius myRadius fromAngle toAngle |
	"Initialize with default value"
	maximumRadius := oldRadius.
	aCollection isEmpty
		ifFalse:
			[myRadius := oldRadius + self gap + (self maximumRadius: aCollection).
			childRadius := oldRadius + self gap + (self maximumDiameter: aCollection).	"This is a purely optical tweak"
			(aCollection size = 1 and: [aToAngle - aFromAngle = (2 * Float pi)])
				ifTrue:
					[delta := 0.4 * Float pi.
					fromAngle := 0.8 * Float pi.
					toAngle := fromAngle + delta]
				ifFalse:
					[delta := (aToAngle - aFromAngle) / aCollection size.
					fromAngle := aFromAngle.
					toAngle := aFromAngle + delta].
			aCollection
				do:
					[:child | 
					translator translateTopLeftOf: child to: (Point
								r: myRadius
								theta: toAngle - (delta / 2.0)).
					"child
						translateTo:
							(Point
								radius: myRadius
								theta: toAngle - (delta / 2.0))."
					maximumRadius := maximumRadius
						max:
							(self
								layoutLayer: (self childrenFor: child)
								radius: childRadius
								from: fromAngle
								to: toAngle).
					fromAngle := toAngle.
					toAngle := toAngle + delta]].
	^maximumRadius
!

moveAllElementsToTopLeft: elements

	| pos min |
	pos := elements collect: #position.
	min := pos inject: 0 @ 0 into: [ :minimum :p | minimum min: p ].
	elements do: [ :e | e translateBy: min negated ]
! !

RTAbstractGraphLayout subclass: #RTAbstractRegularTreeLayout
	instanceVariableNames: 'alreadyLayoutedNodes topGap leftGap nodesByLayer isLayered'
	package: 'Roassal2-Layouts'!
!RTAbstractRegularTreeLayout commentStamp!
A ROAbstractRegularTreeLayout is xxxxxxxxx.

Instance Variables
	alreadyLayoutedNodes:		<Object>
	isLayered:		<Object>
	leftGap:		<Object>
	nodesByLayer:		<Object>
	topGap:		<Object>

alreadyLayoutedNodes
	- xxxxx

isLayered
	- xxxxx

leftGap
	- xxxxx

nodesByLayer
	- xxxxx

topGap
	- xxxxx!

!RTAbstractRegularTreeLayout methodsFor: 'accessing'!

isLayered
	"Is the layout layered"
	
	^ isLayered
!

isLayered: boolean
	"Is the layout layered"
	
	isLayered := boolean
!

layered
	self isLayered: true
!

leftGap
	^ leftGap
!

leftGap: anInteger
	leftGap := anInteger
!

topGap
	^ topGap
!

topGap: anInteger
	topGap := anInteger
! !

!RTAbstractRegularTreeLayout methodsFor: 'hook'!

doExecute: elements
	| rootNodes |
	alreadyLayoutedNodes := OrderedCollection new.
	rootNodes := self rootNodesFor: elements.
	nodesByLayer := OrderedCollection new.
	self
		layout: rootNodes
		atPoint: self leftGap @ self topGap
		atLayer: 1.
	self isLayered ifTrue: [
		self rearrangeByLayers: elements ]
! !

!RTAbstractRegularTreeLayout methodsFor: 'hook-private'!

layout: aNodeCollection atPoint: aPoint atLayer: anObject
	self subclassResponsibility
! !

!RTAbstractRegularTreeLayout methodsFor: 'initialize-release'!

initialize
	super initialize.
	topGap := 5.
	leftGap := 5.
	isLayered := false
! !

!RTAbstractRegularTreeLayout methodsFor: 'private'!

atLayer: aNumber add: aNodeCollection
	| collection |
	collection := nodesByLayer at: aNumber ifAbsentPut: [OrderedCollection new].
	collection addAll: aNodeCollection
!

rearrangeByLayers: aGraph
	self subclassResponsibility
! !

!RTAbstractRegularTreeLayout class methodsFor: 'testing'!

isAbstract
	^ self name = #ROAbstractRegularTreeLayout
! !

RTAbstractRegularTreeLayout subclass: #RTAbstractHorizontalTreeLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTAbstractHorizontalTreeLayout commentStamp!
A ROAbstractHorizontalTreeLayout is xxxxxxxxx.!

!RTAbstractHorizontalTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	self subclassResponsibility
!

defaultFromPositions
	
	^#(#rightCenter)
	
"BTC-2012-08-05 Not sure what effect this has or if this is a valid symbol - its just pattern matching."
!

defaultToPositions

	^#(#leftCenter)
	
"BTC-2012-08-05 Not sure what effect this has or if this is a valid symbol - its just pattern matching."
!

layout: aNodeCollection atPoint: aPoint atLayer: aNumber
	| treeSize childrenPosition x y middleOfTree |
	aNodeCollection isEmpty ifTrue: [ ^ 0 ].
	x := aPoint x.
	y := aPoint y.
	alreadyLayoutedNodes addAll: aNodeCollection.
	self atLayer: aNumber add: aNodeCollection.
	aNodeCollection do: [ :each | 
		childrenPosition := x + each width + self horizontalGap.
		treeSize := each height
			max: (self layout: (self computeChildrenFor: each) atPoint: childrenPosition @ y atLayer: aNumber + 1).
		middleOfTree := y + (treeSize / 2.0) - (each height / 2.0).
		translator translateTopLeftOf: each to: (x @ middleOfTree).
		y := y + treeSize + self verticalGap.
		self step ].
	^ y - aPoint y - self verticalGap
! !

!RTAbstractHorizontalTreeLayout methodsFor: 'initialize-release'!

initialize
	super initialize.
	verticalGap := 3.
	horizontalGap := 20
! !

!RTAbstractHorizontalTreeLayout methodsFor: 'private'!

rearrangeByLayers: aGraph
	| cursor layerDepthSize |
	cursor := self leftGap.
	nodesByLayer do: [ :eachSetOfNodes |
		layerDepthSize := eachSetOfNodes inject: 0 into: [ :max :eachNode | 
			translator translateTopLeftOf: eachNode to: (cursor @ eachNode encompassingRectangle top).
			max max: eachNode width ].
		cursor := cursor + layerDepthSize + self horizontalGap ]
! !

!RTAbstractHorizontalTreeLayout class methodsFor: 'testing'!

isAbstract
	^ self name = #ROAbstractHorizontalTreeLayout
! !

RTAbstractHorizontalTreeLayout subclass: #RTHorizontalTreeLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTHorizontalTreeLayout commentStamp!
A ROHorizontalTreeLayout is xxxxxxxxx.!

!RTHorizontalTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	^ self childrenFor: aNode except: alreadyLayoutedNodes
! !

RTAbstractRegularTreeLayout subclass: #RTAbstractVerticalTreeLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTAbstractVerticalTreeLayout commentStamp!
A ROAbstractVerticalTreeLayout is xxxxxxxxx.!

!RTAbstractVerticalTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	self subclassResponsibility
!

layout: aNodeCollection atPoint: aPoint atLayer: aNumber
	| treeSize childrenPosition x y middleOfTree |
	aNodeCollection isEmpty ifTrue: [ ^ 0 ].
	x := aPoint x.
	y := aPoint y.
	alreadyLayoutedNodes addAll: aNodeCollection.
	self atLayer: aNumber add: aNodeCollection.
	aNodeCollection do: [ :each | 
		childrenPosition := y + each height + self verticalGap.
		treeSize := each width
			max: (self layout: (self computeChildrenFor: each) atPoint: x @ childrenPosition atLayer: aNumber + 1).
		middleOfTree := x + (treeSize / 2.0) - (each width / 2.0).
		translator translateTopLeftOf: each to: middleOfTree @ y.
		x := x + treeSize + self horizontalGap.
		self step ].
	^ x - aPoint x - self horizontalGap
! !

!RTAbstractVerticalTreeLayout methodsFor: 'initialize-release'!

initialize
	super initialize.
	verticalGap := 20.
	horizontalGap := 3
! !

!RTAbstractVerticalTreeLayout methodsFor: 'private'!

rearrangeByLayers: aGraph
	| cursor layerDepthSize |
	cursor := self topGap.
	nodesByLayer do: [:eachSetOfNodes |
		layerDepthSize := eachSetOfNodes inject: 0 into: [:max :eachNode | 
			eachNode translateTo: (eachNode bounds left @ cursor ).
			max max: eachNode height ].
		cursor := cursor + layerDepthSize + self verticalGap ]
! !

!RTAbstractVerticalTreeLayout class methodsFor: 'testing'!

isAbstract
	^ self name = #ROAbstractVerticalTreeLayout
! !

RTAbstractVerticalTreeLayout subclass: #RTTreeLayout
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTTreeLayout commentStamp!
A ROTreeLayout is xxxxxxxxx.!

!RTTreeLayout methodsFor: 'hook-private'!

computeChildrenFor: aNode
	^ self childrenFor: aNode except: alreadyLayoutedNodes
! !

RTAbstractGraphLayout subclass: #RTClusterLayout
	instanceVariableNames: 'externalLayer maxLayer maxAbcissa'
	package: 'Roassal2-Layouts'!
!RTClusterLayout commentStamp!
A ROClusterLayout is xxxxxxxxx.

Instance Variables
	externalLayer:		<Object>
	maxAbcissa:		<Object>
	maxLayer:		<Object>

externalLayer
	- xxxxx

maxAbcissa
	- xxxxx

maxLayer
	- xxxxx!

!RTClusterLayout methodsFor: 'algorithm'!

computePosition: aNode

	|children previous|
	
	children := self childrenFor: aNode.
	
	children do: [ :e | self computePosition: e ].
		
											children isEmpty ifTrue: [ externalLayer first = aNode ifFalse: [ previous := externalLayer at: ( externalLayer indexOf: aNode) - 1.
																											((self fatherOf: previous) = (self fatherOf: aNode)) ifTrue: [ self xOf: aNode put: (self xOf: previous) + (horizontalGap / 2) ] 
																																			ifFalse: [ self xOf: aNode put: (self xOf: previous) + horizontalGap] ] ]
																																	
															ifFalse: [ self xOf: aNode put: ((self xOf: (self leftContourOf: aNode)) + (self xOf: (self rightContourOf: aNode)) / 2 )]
! !

!RTClusterLayout methodsFor: 'drawing-general'!

draw: aNode

	(self childrenFor: aNode) do: [ :e | self draw: e ].
	translator translateTopLeftOf: aNode to: (Point r: maxLayer - (self layerOf: aNode) * verticalGap theta: (maxAbcissa - (self xOf: aNode) / maxAbcissa) * 2 * Float pi )
! !

!RTClusterLayout methodsFor: 'hook'!

doExecute: nodeElements 

	| root gap |
	"Not much to do if there is only one element"
	nodeElements size = 1 ifTrue: [ ^ self ].
	
	root := self rootNodesFor: nodeElements .
	root do: [ :e | self initializeNode: e ].
	root do: [ :e | self computePosition: e ].
	
	maxLayer := (root collect: [ :e | self layerOf: e ]) max.
	
	(root size > 1) ifTrue: [ maxLayer := maxLayer + 1 ].
	
	maxAbcissa := (self xOf: externalLayer last) + horizontalGap .
	
	gap := maxAbcissa "+ horizontalGap "/ 2 / Float pi / maxLayer.
	
	verticalGap := verticalGap max: gap.
	
	root do: [ :e | self draw: e. self step ].
! !

!RTClusterLayout methodsFor: 'initialize-release'!

initialize 

	super initialize.
	verticalGap := 30.
	horizontalGap := 20.
	externalLayer := OrderedCollection new
!

initializeNode: aNode

	|children|
	
	children := self childrenFor: aNode.
	
	children do: [ :e | self initializeNode: e.
						self fatherOf: e put: aNode ].
	
	children isEmpty ifTrue: [ self layerOf: aNode put: 0.
							externalLayer add: aNode ] 
					ifFalse: [ self layerOf: aNode put: ((children collect: [ :e | (self layerOf: e) ]) max + 1).
							self leftContourOf: aNode put: children first.
							self rightContourOf: aNode put: children last ].
! !

RTEdgeDrivenLayout subclass: #RTForceBasedLayout
	instanceVariableNames: 'layoutInitial oldPositions nodes weights strengths lengths gravity friction theta charge alpha charges strength length fixedNodes center'
	package: 'Roassal2-Layouts'!
!RTForceBasedLayout commentStamp!
A ROForceBasedLayout is inspired from the Code of D3. The original d3 version may be found on: http://bl.ocks.org/mbostock/4062045

Layout algorithm inspired by Tim Dwyer and Thomas Jakobsen.

Instance Variables
	alpha:		<Object>
	center:		<Object>
	charge:		<Object>
	charges:		<Object>
	fixedNodes:		<Object>
	friction:		<Object>
	gravity:		<Object>
	layoutInitial:		<Object>
	length:		<Object>
	lengths:		<Object>
	nodes:		<Object>
	oldPositions:		<Object>
	strength:		<Object>
	strengths:		<Object>
	theta:		<Object>
	weights:		<Object>

alpha
	- xxxxx

center
	- xxxxx

charge
	- xxxxx

charges
	- xxxxx

fixedNodes
	- xxxxx

friction
	- xxxxx

gravity
	- xxxxx

layoutInitial
	- xxxxx

length
	- xxxxx

lengths
	- xxxxx

nodes
	- xxxxx

oldPositions
	- xxxxx

strength
	- xxxxx

strengths
	- xxxxx

theta
	- xxxxx

weights
	- xxxxx!

!RTForceBasedLayout methodsFor: 'accessing'!

charge: aFloat

	charge := aFloat
!

iterationsToSendEvent: anInteger

	currentIteraction := anInteger
!

length: aFloat

	length := aFloat
!

nodes: elements
	nodes := elements
!

start: nodeElements 

	self initialPositionOfNodes: nodeElements.

	weights := Dictionary new.
	oldPositions := Dictionary new.
	
	nodes := nodeElements.
	
	nodes do: [ :e | weights add: (Association key: e value: 0).
					oldPositions add:(Association key: e value: e position) ].
	
	edges do: [ :e | | from to | 
				from := e from.
				to := e to.
				weights at: from put: ((weights at: from) + 1).
				weights at: to put: ((weights at: to) + 1)].
	
	alpha := 0.1.
!

strength: aFloat
	"Set the force of attraction for the edges. A high value results in having nodes together.
	The default value is 1.0"
	strength := aFloat
! !

!RTForceBasedLayout methodsFor: 'algorithm'!

accumulate: aQuad 

	| cx cy k random |
	
	cx := 0.
	cy := 0.
	
	aQuad charge: 0; cx: 0; cy: 0.
	
	random := Random new.
	
	aQuad leaf ifFalse: [ aQuad nodes do: [ :e | e isNil ifFalse: [ self accumulate: e.
																aQuad charge: aQuad charge + e charge.
																cx := cx + (e charge * e cx).
																cy := cy + (e charge * e cy) ] ] ].
												
	aQuad node isNil ifFalse: [ aQuad leaf ifFalse: [ aQuad node translateTo: aQuad node position + (random next - 0.5 @ ( random next - 0.5)) ].
								k := alpha * (self chargeOf: aQuad node).
								aQuad charge: aQuad charge + k.
								cx := cx + (k * aQuad node position x). 
								cy := cy + (k * aQuad node position y).].
							
	aQuad charge = 0 ifTrue: [ ^ self ].				
	aQuad cx: cx / aQuad charge.
	aQuad cy: cy / aQuad charge.
!

chargeOf: aNode 

	^ charges at: aNode ifAbsent: [ ^ charge ]
!

fix: aNode at: aPoint

	fixedNodes at: aNode put: aPoint
!

gravityAt: aPoint

	center := aPoint
!

lengthOf: anEdge

	^ lengths at: anEdge ifAbsent: [ ^ length ]
!

repulse: aNode from: aQuad

	| dx dy dn k p |
	
	dx := aQuad cx - aNode position x.
	dy := aQuad cy - aNode position y.
	
	((dx closeTo: 0) and: [ dy closeTo: 0 ] ) ifFalse: [ 
	
	dn := 1 / ((dx * dx) + (dy * dy)) sqrt.
	
	p := oldPositions at: aNode.
	aQuad node ~= aNode ifTrue: [ aQuad corner x - aQuad origin x * dn < theta ifTrue: [ k := aQuad charge * dn * dn.
																							oldPositions at: aNode put: p x - (dx * k) @ (p y - (dy * k) ).
																							^ self].
												
									(aQuad node isNil not and: [ dn < 1e9 ]) ifTrue: [ k := (self chargeOf: aQuad node) * dn * dn * alpha.
																					  oldPositions at: aNode put: p x - (dx * k) @ (p y - (dy * k) ) ] ]. ].
																			
	(aQuad charge closeTo: 0) not ifTrue: [ aQuad nodes do: [ :e | e isNil ifFalse: [ self repulse: aNode from: e ] ] ]
!

set: aNode charge: aFloat 

	charges at: aNode put: aFloat
!

set: anEdge length: aFloat 

	lengths at: anEdge put: aFloat
!

set: anEdge length: aFloat strength: another

	lengths at: anEdge put: aFloat.
	strengths at: anEdge put: another
!

set: anEdge strength: aFloat 

	strengths at: anEdge put: aFloat
!

strengthOf: anEdge

	^ strengths at: anEdge ifAbsent: [ ^ strength ]
! !

!RTForceBasedLayout methodsFor: 'events'!

step 
	"run a step of the force layout algorithm"
	| from to fp tp x y len k quad old |	
	super step.
	edges do: [ :e | 
					from := e from. fp := from position.
					to := e to. tp := to position.
					x := tp x - fp x.
					y := tp y - fp y.
					len := ((x * x) + (y * y)) sqrt.
					((len closeTo: 0) not) ifTrue: [ len :=  alpha * (self strengthOf: e) * ( len - (self lengthOf: e) ) / len.
										x := x * len.
										y := y * len.
										k := (weights at: from) / (( weights at: from) +( weights at: to )).
										to translateTo: ( tp x - (x * k) )@( tp y - (y * k) ).
										k := 1 -  k.
										from translateTo: ( fp x + (x * k) )@( fp y + (y * k) ) ] ].
			
		k := alpha * gravity.
		((k closeTo: 0) not) ifTrue: [ x := center x.
							y := center y.
							nodes do: [ :ea | |pos|
										pos := ea position.
										ea translateTo: (pos x + (( x - pos x )* k ) )@(pos y + (( y - pos y )* k ) ) ] ].
					
		quad := RTQuadTree withAll: nodes.
		self accumulate: quad.
		nodes do: [ :e | (self isFixed: e) ifFalse: [ self repulse: e from: quad ]
										 ifTrue: [ translator translateTopLeftOf: e to: (fixedNodes at: e) ] ].

		nodes do: [ :e | old := e position .
						e translateTo: (old x - (( (oldPositions at: e) x - old x ) * friction)) @ (old y - (( (oldPositions at: e) y - old y ) * friction)).
						oldPositions at: e put: old.].
! !

!RTForceBasedLayout methodsFor: 'hook'!

doExecute: nodeElements

	
	self start: nodeElements.
	
	[ alpha := alpha * 0.99 .  alpha > 0.005 ] whileTrue: [ self step ].
	
	alpha := 0.
	
	nodes do: [ :e | translator translateTopLeftOf: e to: e position ].
!

initialPositionOfNodes: nodeElements

	layoutInitial new executeOnElements: nodeElements
!

on: elements edges: edgesCol
	self nodes: elements.
	self applyOn: elements
! !

!RTForceBasedLayout methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	layoutInitial := RTGridLayout.
	
	fixedNodes := Dictionary new.
	
	strengths := Dictionary new.
	lengths := Dictionary new.
	charges := Dictionary new.
	
	strength := 1.
	length := 20.
	charge := -30.	
	
	gravity := 0.1.
	friction := 0.9.
	theta := 0.8.
	
	center := 200@200.
! !

!RTForceBasedLayout methodsFor: 'testing'!

isFixed: aNode

	^ fixedNodes includesKey: aNode
! !

RTObject subclass: #RTLayoutTranslator
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTLayoutTranslator commentStamp!
A RTLayoutTranslator is xxxxxxxxx.!

!RTLayoutTranslator methodsFor: 'accessing'!

nbCycles: anInteger
	"Do nothing"
! !

!RTLayoutTranslator methodsFor: 'hook'!

translate: element to: newPosition
	self subclassResponsibility
!

translateTopLeftOf: element to: newPosition
	self translate: element to: (newPosition + (element extent / 2))
! !

RTLayoutTranslator class instanceVariableNames: 'defaultTranslator'!

!RTLayoutTranslator class methodsFor: 'as yet unclassified'!

default
	"Return the default translator, the one used in the layouts"

	defaultTranslator ifNotNil: [ ^ defaultTranslator ].
	^ defaultTranslator := self defaultClass new
!

defaultClass
	^ self allSubclasses detect: #isDefault
! !

RTLayoutTranslator subclass: #RTDirectLayoutTranslator
	instanceVariableNames: ''
	package: 'Roassal2-Layouts'!
!RTDirectLayoutTranslator commentStamp!
A RTDirectLayoutTranslator is xxxxxxxxx.!

!RTDirectLayoutTranslator methodsFor: 'as yet unclassified'!

translate: element to: newPosition
	element translateTo: newPosition
! !

!RTDirectLayoutTranslator class methodsFor: 'as yet unclassified'!

isDefault
	^ true
! !

