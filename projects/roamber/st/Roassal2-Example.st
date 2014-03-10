Smalltalk current createPackage: 'Roassal2-Example'!
Object subclass: #Roassal2Examples
	instanceVariableNames: ''
	package: 'Roassal2-Example'!

!Roassal2Examples methodsFor: 'layouts'!

layoutGridLayout

| v |
v := RTView new.
v addAll: (RTBox new size: 30; elementsOn: (Collection withAllSubclasses)).
"RTHorizontalLineLayout on: v elements."
RTGridLayout on: v elements.
v open
! !

!Roassal2Examples methodsFor: 'not yet classified'!

bezierExample
	| v shape  edge els |
	
	v := RTView new.
	shape := RTEllipse new size: 10; color: (Color red alpha: 0.3).
	els := (shape elementsOn: (1 to: 4)).
	v addAll: els .
	RTHorizontalLineLayout on: v elements.
	(els at: 1) translateBy: 0 @ 100.
	(els at: 2) translateBy: 100 @ 0.
	(els at: 3) translateBy: 200 @ 100.
	(els at: 4) translateBy: 300 @ 0.

	edge := (RTBezierLine new controllingElements: v elements) edgeFrom: els first to: els last.
	v add: edge.

	v open
!

example01
	"
	Roassal2Examples new example01
	"
	RTView new add: (RTBox new color: Color red; size: 10) element; open
!

example02
	"
	Roassal2Examples new example02
	"
	| v box e |
	v := RTView new.
	10 timesRepeat: [
		box := RTBox  new size: 40; color: Color blue.
		e := box element.
		e translateTo: (300 atRandom @ 300 atRandom).
		v add: e.
	].
	v open
!

example03
	"
	Roassal2Examples new example03
	"
	| e v |
	v := RTView new.
	e :=  (RTBox new color: Color red; size: 30) element.
	e translateBy: 100 atRandom @ 100 atRandom.
	v add: e.
	v open
!

example04
	"
	Roassal2Examples new example04
	"
	| v box e |
	v := RTView new.
	box := RTBox  new size: 40; color: Color blue.
	1 to: 10 do: [ :i |
		e := box element.
		e translateTo: (((i * 10) + 30 )@ ((i * 10) + 30)).
		v add: e.
	].
	v open
!

iconExample
	| view element |
	view := RTView new.
	element := (RTSVGPath new
		path: 'M22.121,24.438l-3.362-7.847c-0.329-0.769-0.599-2.081-0.599-2.917s0.513-1.521,1.14-1.521s1.141-0.513,1.141-1.14s-0.685-1.14-1.521-1.14h-6.84c-0.836,0-1.52,0.513-1.52,1.14s0.513,1.14,1.14,1.14s1.14,0.685,1.14,1.521s-0.269,2.148-0.599,2.917l-3.362,7.847C8.55,25.206,8.28,26.177,8.28,26.595s0.342,1.103,0.76,1.521s1.444,0.76,2.28,0.76h8.359c0.836,0,1.862-0.342,2.28-0.76s0.76-1.103,0.76-1.521S22.45,25.206,22.121,24.438zM16.582,7.625c0,0.599,0.484,1.083,1.083,1.083s1.083-0.484,1.083-1.083s-0.484-1.084-1.083-1.084S16.582,7.026,16.582,7.625zM13.667,7.792c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5S13.391,7.792,13.667,7.792zM15.584,5.292c0.874,0,1.583-0.709,1.583-1.583c0-0.875-0.709-1.584-1.583-1.584C14.709,2.125,14,2.834,14,3.709C14,4.583,14.709,5.292,15.584,5.292z';
		borderWidth: 0;
		scale: 8;
		fillColor: Color black) element.
	view add: element.
	view open
!

southAmericaExample
	| view |
	view := RTView new.
	RTSVGPath southAmerica do: [ :country |
		|elem|
		elem := (RTSVGPath new
			path: (RTSVGPath perform: country);
			fillColor: Color green;
			scale: 2;
			borderWidth: 0.5) element model: (country asString).
		view add: elem.
	].
	view open
! !

