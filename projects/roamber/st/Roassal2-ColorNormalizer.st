Smalltalk current createPackage: 'Roassal2-ColorNormalizer'!
RTObject subclass: #RTNAbstractNormalizer
	instanceVariableNames: 'command'
	package: 'Roassal2-ColorNormalizer'!
!RTNAbstractNormalizer commentStamp!
A RONAbstractNormalizer is xxxxxxxxx.

Instance Variables
	command:		<Object>

command
	- xxxxx!

!RTNAbstractNormalizer methodsFor: 'accessing'!

command
	
	^command
!

command: aBlock
	
	command := aBlock
!

rtValue: anEntity
	
	self subclassResponsibility
! !

RTNAbstractNormalizer subclass: #RTMultipleColorLinearNormalizer
	instanceVariableNames: 'normalizers'
	package: 'Roassal2-ColorNormalizer'!
!RTMultipleColorLinearNormalizer commentStamp!
A ROMultipleColorLinearNormalizer is xxxxxxxxx.

Instance Variables
	normalizers:		<Object>

normalizers
	- xxxxx!

!RTMultipleColorLinearNormalizer methodsFor: 'accessing'!

rtValue: anEntity

	| value |
	value := self command rtValue: anEntity.
	"detect range for the value, retrieve and call corresponding normalizers"
	^ (self detectNormalizerFor: value) rtValue: value
! !

!RTMultipleColorLinearNormalizer methodsFor: 'initialize-release'!

initialize

	command := #yourself
!

valueRange: anArrayOfNumbers colorRange: anArrayOfColors
	" {1. 2. 3} {Color red. Color yellow. Color green}"
	
	| size start end |
	normalizers := Dictionary new.
	self assert: anArrayOfNumbers size = anArrayOfColors size.
	size := anArrayOfNumbers size.
	1 to: size - 1 do: [ :i |
		start := anArrayOfNumbers at: i.
		end :=  anArrayOfNumbers at: i + 1.
		normalizers
			at: (start to: end)
			put: (RTNColorLinearNormalizer
						inContext: (Array with: start with: end)
						lowColor: (anArrayOfColors at: i)
						highColor: (anArrayOfColors at: i + 1))
	].
! !

!RTMultipleColorLinearNormalizer methodsFor: 'private-accessing'!

detectNormalizerFor: aValue

	normalizers keysAndValuesDo: [:range :norm |
		(range rangeIncludes: aValue)
			ifTrue: [^ norm] ].
	self error: aValue asString, ' not in declared ranges'
! !

!RTMultipleColorLinearNormalizer class methodsFor: 'instance creation'!

valueRange: anArrayOfNumbers colorRange: anArrayOfColors

	^ self new valueRange: anArrayOfNumbers colorRange: anArrayOfColors
! !

RTNAbstractNormalizer subclass: #RTNIdentityNormalizer
	instanceVariableNames: 'dictionary colorIndex'
	package: 'Roassal2-ColorNormalizer'!
!RTNIdentityNormalizer commentStamp!
A RONIdentityNormalizer is xxxxxxxxx.

Instance Variables
	colorIndex:		<Object>
	dictionary:		<Object>

colorIndex
	- xxxxx

dictionary
	- xxxxx!

!RTNIdentityNormalizer methodsFor: 'accessing'!

rtValue: anEntity
	
	^dictionary
		at: (command rtValue: anEntity)
		ifAbsentPut: [ self nextColor ]
! !

!RTNIdentityNormalizer methodsFor: 'initialize-release'!

colorNames
	^ #(#black #veryVeryDarkGray #veryDarkGray #darkGray #gray #lightGray #veryLightGray #veryVeryLightGray #white #red #yellow #green #cyan #blue #magenta #brown #orange #lightRed #lightYellow #lightGreen #lightCyan #lightBlue #lightMagenta #lightBrown #lightOrange #transparent)
!

initialize
	
	super initialize.
	colorIndex := 0.
	dictionary := IdentityDictionary new.
	command := #yourself
! !

!RTNIdentityNormalizer methodsFor: 'private'!

nextColor
	
	colorIndex := colorIndex \\ self colorNames size + 1.
	^Color perform: (self colorNames at: colorIndex)
!

setIndexTo: colorAsSymbol
	"colorAsSymbol has to be one of Color colorNames. 
	The method set the current index to the color given in parameter"
	
	colorIndex := (self colorNames indexOf: colorAsSymbol) - 1
! !

!RTNIdentityNormalizer class methodsFor: 'instance creation'!

beginingAtBlue
	^ self new
			setIndexTo: #blue;
			yourself
!

beginingAtRed
	^ self new
			setIndexTo: #red;
			yourself
!

withCommand: aBlock
	
	^(self new)
		command: aBlock;
		yourself
! !

RTNIdentityNormalizer subclass: #RTNExplicitIdentityNormalizer
	instanceVariableNames: 'colors defaultColor'
	package: 'Roassal2-ColorNormalizer'!
!RTNExplicitIdentityNormalizer commentStamp!
A RONExplicitIdentityNormalizer is xxxxxxxxx.

Instance Variables
	colors:		<Object>
	defaultColor:		<Object>

colors
	- xxxxx

defaultColor
	- xxxxx!

!RTNExplicitIdentityNormalizer methodsFor: 'accessing'!

colors
	
	^colors
!

colors: anObject
	
	colors := anObject
!

defaultColor
	
	^defaultColor
!

defaultColor: anObject
	
	defaultColor := anObject
! !

!RTNExplicitIdentityNormalizer methodsFor: 'private'!

nextColor
	
	colorIndex := colorIndex + 1.
	^colorIndex > self colors size
		ifTrue: [ self defaultColor ]
		ifFalse: [ self colors at: colorIndex ]
! !

!RTNExplicitIdentityNormalizer class methodsFor: 'instance creation'!

withCommand: aBlock withColors: aCollection withDefaultColor: aColor
	
	^(self withCommand: aBlock)
		colors: aCollection;
		defaultColor: aColor;
		yourself
! !

RTNAbstractNormalizer subclass: #RTNLinearNormalizer
	instanceVariableNames: 'maximumValue context minimumValue'
	package: 'Roassal2-ColorNormalizer'!
!RTNLinearNormalizer commentStamp!
A RONLinearNormalizer is xxxxxxxxx.

Instance Variables
	context:		<Object>
	maximumValue:		<Object>
	minimumValue:		<Object>

context
	- xxxxx

maximumValue
	- xxxxx

minimumValue
	- xxxxx!

!RTNLinearNormalizer methodsFor: 'accessing'!

command: aBlock
	
	super command: aBlock.
	self flushCache
!

context
	
	^context
!

context: aContext
	
	context := aContext.
	self flushCache
!

flushCache
	
	maximumValue := nil
! !

!RTNLinearNormalizer methodsFor: 'initialize-release'!

initialize
	"Initialize a newly created instance. This method must answer the receiver."
	
	super initialize.
	maximumValue := nil
! !

!RTNLinearNormalizer methodsFor: 'private'!

maximumValue: anEntity
	"Returns the largest value that the color metric provides"
	
	maximumValue isNil
		ifTrue:
			[maximumValue := (self context rtValue: anEntity)
				inject: 1
				into:
					[:maximum :entity | maximum max: (self command rtValue: entity)]].
	^maximumValue
!

minimumValue: anEntity
	"Returns the smallest value that the color metric provides"
	
	minimumValue isNil
		ifTrue:
			[minimumValue := (self context rtValue: anEntity)
				inject: 100000000000 
				into:
					[:minimum :entity | minimum min: (self command rtValue: entity)]].
	^minimumValue
! !

!RTNLinearNormalizer class methodsFor: 'instance creation'!

inContext: aCollection
	
	^self inContext: aCollection withCommand: #yourself
!

inContext: aCollection withCommand: aBlock
	
	^(self new)
		context: aCollection;
		command: aBlock;
		yourself
! !

RTNLinearNormalizer subclass: #RTNColorLinearNormalizer
	instanceVariableNames: 'minBrightness maxBrightness lowColor highColor'
	package: 'Roassal2-ColorNormalizer'!
!RTNColorLinearNormalizer commentStamp!
A RONColorLinearNormalizer is xxxxxxxxx.

Instance Variables
	highColor:		<Object>
	lowColor:		<Object>
	maxBrightness:		<Object>
	minBrightness:		<Object>

highColor
	- xxxxx

lowColor
	- xxxxx

maxBrightness
	- xxxxx

minBrightness
	- xxxxx!

!RTNColorLinearNormalizer methodsFor: 'accessing'!

highColor: aBlock
	
	highColor := aBlock
!

lowColor: aBlock
	
	lowColor := aBlock
!

maxBrightness: aBlock
	
	maxBrightness := aBlock
!

minBrightness: aBlock
	
	minBrightness := aBlock
!

rtValue: anEntity
	"Calculates the color of the entity based on the context."
	
	| myValue myHighColor myLowColor myMinBrightness myMaxBrightness weight minValue maxValue |
	"Get color specific data"
	minValue :=  self minimumValue: anEntity.
	maxValue :=  self maximumValue: anEntity.
	myMinBrightness := self minBrightnessFor: anEntity.
	myMaxBrightness := self maxBrightnessFor: anEntity.
	myHighColor := self highColorFor: anEntity.
	myLowColor := self lowColorFor: anEntity.	"Get data"
	weight := minValue = maxValue 
		ifTrue: [(myMinBrightness + myMaxBrightness) / 2]
		ifFalse: [	
			myValue := (self command rtValue: anEntity) - (self minimumValue: anEntity).
			myMinBrightness + (myValue abs / (maxValue - minValue) * (myMaxBrightness - myMinBrightness)) ].
	^self blend: myLowColor with: myHighColor weight: weight
! !

!RTNColorLinearNormalizer methodsFor: 'initialize-release'!

initialize
	
	super initialize.
	lowColor := Color white.
	highColor := Color black
! !

!RTNColorLinearNormalizer methodsFor: 'private'!

blend: aColor with: aColorValue weight: wt
	"Answer a new ColorValue which is a weighted blend of the receiver and the
	supplied ColorValue."
	"Simply interpolates in RGB space."

	| rv gv bv invWt av |
	
	invWt := 1-wt.
	rv := ((aColor red * invWt) + ((aColorValue red)*wt)) "rounded".
	gv := ((aColor green  * invWt) + ((aColorValue green)*wt)) "rounded".
	bv := ((aColor blue * invWt) + ((aColorValue blue)*wt)) "rounded".
	av := ((aColor alpha * invWt) + ((aColorValue alpha)*wt)).
	^Color r: rv g: gv b: bv alpha: av
! !

!RTNColorLinearNormalizer methodsFor: 'translator protocol'!

highColorFor: anEntity
	
	^highColor rtValue: anEntity
!

lowColorFor: anEntity
	
	^lowColor rtValue: anEntity
!

maxBrightnessFor: anEntity
	
	^maxBrightness isNil
		ifTrue: [1.0]
		ifFalse: [maxBrightness rtValue: anEntity]
!

minBrightnessFor: anEntity
	
	^minBrightness isNil
		ifTrue: [0.0]
		ifFalse: [minBrightness rtValue: anEntity]
! !

!RTNColorLinearNormalizer class methodsFor: 'instance creation'!

inContext: aCollection lowColor: lowColor highColor: highColor
	
	| normalizer |
	normalizer := self inContext: aCollection.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	^normalizer
!

inContext: aCollection lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold
	
	| normalizer |
	normalizer := self inContext: aCollection.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	normalizer minBrightness: lowThreshold.
	normalizer maxBrightness: highThreshold.
	^normalizer
!

inContext: aCollection withCommand: aBlock lowColor: lowColor highColor: highColor
	
	| normalizer |
	normalizer := self inContext: aCollection withCommand: aBlock.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	^normalizer
!

inContext: aCollection withCommand: aBlock lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold
	
	| normalizer |
	normalizer := self inContext: aCollection withCommand: aBlock.
	normalizer lowColor: lowColor.
	normalizer highColor: highColor.
	normalizer minBrightness: lowThreshold.
	normalizer maxBrightness: highThreshold.
	^normalizer
! !

RTNLinearNormalizer subclass: #RTNFontLinearNormalizer
	instanceVariableNames: ''
	package: 'Roassal2-ColorNormalizer'!
!RTNFontLinearNormalizer commentStamp!
A RONFontLinearNormalizer is xxxxxxxxx.!

!RTNFontLinearNormalizer methodsFor: 'accessing'!

rtValue: anEntity
	"Calculates the color of the entity based on the context."
	
	| value |
	value := self command rtValue: anEntity.
	^5 + (38 * (value abs / (self maximumValue: anEntity))) asInteger
! !

RTNLinearNormalizer subclass: #RTNumberLinearNormalizer
	instanceVariableNames: 'scale'
	package: 'Roassal2-ColorNormalizer'!
!RTNumberLinearNormalizer commentStamp!
A RONumberLinearNormalizer is xxxxxxxxx.

Instance Variables
	scale:		<Object>

scale
	- xxxxx!

!RTNumberLinearNormalizer methodsFor: 'accessing'!

rtValue: anEntity
	"Normalize value based on maximum value."
	
	| value |
	value := self command rtValue: anEntity.
	^ ((value abs / (self maximumValue: anEntity)) asFloat * self scale) asInteger
!

scale
	^ scale
!

scale: anObject
	scale := anObject
! !

!RTNumberLinearNormalizer methodsFor: 'initialization'!

initialize
	super initialize.
	scale := 1
! !

RTNLinearNormalizer subclass: #RTValueLinearNormalizer
	instanceVariableNames: 'minScale maxScale'
	package: 'Roassal2-ColorNormalizer'!
!RTValueLinearNormalizer commentStamp!
A ROValueLinearNormalizer is xxxxxxxxx.

Instance Variables
	maxScale:		<Object>
	minScale:		<Object>

maxScale
	- xxxxx

minScale
	- xxxxx!

!RTValueLinearNormalizer methodsFor: 'accessing'!

maxScale

	^maxScale.
!

maxScale: aValue

	^maxScale := aValue.
!

minScale

	^minScale.
!

minScale: aValue

	minScale := aValue.
!

rtValue: anEntity
	
	"Normalize value based on minimum and maximum value."
	| value slope |
	value := self command rtValue: anEntity.
	slope := self slope: anEntity.
	^ ((value abs * slope) + self maxScale - ((self maximumValue: anEntity) asFloat * slope)) asInteger
! !

!RTValueLinearNormalizer methodsFor: 'as yet unclassified'!

slope: anEntity
	
	^ (maxScale - minScale) / ((self maximumValue: anEntity) asFloat - (self minimumValue: anEntity )asFloat).
! !

!RTValueLinearNormalizer methodsFor: 'initialize-release'!

initialize

	super initialize.
	minScale := 0.
	maxScale := 1.
! !

