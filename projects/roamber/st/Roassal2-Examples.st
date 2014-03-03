Smalltalk current createPackage: 'Roassal2-Examples'!
Object subclass: #RTExamplesAmber
	instanceVariableNames: ''
	package: 'Roassal2-Examples'!

!RTExamplesAmber methodsFor: 'not yet classified'!

example01
	"
	RTExamplesAmber new example01
	"
	RTView new add: (RTBox new color: Color red; size: 20) element; open
!

example02
	"
	RTExamplesAmber new example02
	"
	| v box e |
	v := RTView new.
	10 timesRepeat: [
		box := RTBox new color: Color red; size: 30.
		e := box element.
		e translateBy: (100 atRandom @ 100 atRandom).
		v add: e ].
	v open
! !

