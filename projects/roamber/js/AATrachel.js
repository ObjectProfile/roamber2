smalltalk.addPackage('AATrachel');
smalltalk.addClass('TRCamera', smalltalk.Object, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"focusOnCenter",{},smalltalk.TRCamera)});},
args: [],
source: "focusOnCenter\x0a\x09\x22TODO\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);



smalltalk.addClass('TRCanvas', smalltalk.Object, ['shapes', 'svgCanvas', 'announcer', 'camera'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'not yet classified',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._add_(aShape);
_st(aShape)._addedIn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "add: aShape\x0a\x09shapes add: aShape.\x0a\x09aShape addedIn: self",
messageSends: ["add:", "addedIn:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
category: 'not yet classified',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "addShape: aShape\x0a\x09self add: aShape",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'not yet classified',
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRCanvas)});},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'not yet classified',
fn: function () {
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@announcer"])._isNil();
if(smalltalk.assert($1)){
self["@announcer"]=_st($Announcer())._new();
self["@announcer"];
};
$2=self["@announcer"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRCanvas)});},
args: [],
source: "announcer\x0a\x09announcer isNil ifTrue: [ announcer := Announcer new ].\x0a\x09^ announcer",
messageSends: ["ifTrue:", "new", "isNil"],
referencedClasses: ["Announcer"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
category: 'not yet classified',
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcer"]=anAnnouncer;
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRCanvas)});},
args: ["anAnnouncer"],
source: "announcer: anAnnouncer\x0a\x09announcer := anAnnouncer",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "camera",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@camera"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"camera",{},smalltalk.TRCanvas)});},
args: [],
source: "camera\x0a\x09 ^ camera",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCamera(){return smalltalk.TRCamera||(typeof TRCamera=="undefined"?nil:TRCamera)}
return smalltalk.withContext(function($ctx1) { 
self["@svgCanvas"]=self._paper();
self["@shapes"]=_st($OrderedCollection())._new();
self["@camera"]=_st($TRCamera())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCanvas)});},
args: [],
source: "initialize\x0a\x09svgCanvas := self paper.\x0a\x09shapes := OrderedCollection new.\x0a\x09camera := TRCamera new.",
messageSends: ["paper", "new"],
referencedClasses: ["OrderedCollection", "TRCamera"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._do_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TRCanvas)});},
args: [],
source: "open\x0a\x09shapes do: [ :s | s drawOn: svgCanvas ]",
messageSends: ["do:", "drawOn:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var paper = Raphael("roassal-canvas", 640 , 480); return paper;;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.TRCanvas)});},
args: [],
source: "paper\x0a\x09< var paper = Raphael(\x22roassal-canvas\x22, 640 , 480); return paper;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "svgCanvas",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgCanvas",{},smalltalk.TRCanvas)});},
args: [],
source: "svgCanvas\x0a\x09^ svgCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);



smalltalk.addClass('TRExamples', smalltalk.Object, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "example1",
category: 'not yet classified',
fn: function () {
var self=this;
var c,box1,box2,line,circle;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
c=_st($TRCanvas())._new();
box1=_st($TRBoxShape())._new();
_st(box1)._from_to_((10).__at((10)),(200).__at((50)));
_st(box1)._color_(_st($Color())._red());
box2=_st($TRBoxShape())._new();
_st(box2)._from_to_((55).__at((60)),(80).__at((75)));
_st(box2)._color_(_st($Color())._green());
circle=_st($TREllipseShape())._new();
_st(circle)._from_to_((155).__at((160)),(180).__at((175)));
_st(circle)._color_(_st($Color())._blue());
line=_st($TRLineShape())._new();
_st(line)._from_to_((10).__at((10)),(55).__at((80)));
$1=c;
_st($1)._add_(box1);
_st($1)._add_(box2);
_st($1)._add_(line);
$2=_st($1)._add_(circle);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example1",{c:c,box1:box1,box2:box2,line:line,circle:circle},smalltalk.TRExamples)});},
args: [],
source: "example1\x0a\x09\x22\x0a\x09TRExamples new example1\x0a\x09\x22\x0a\x09| c box1 box2 line circle |\x0a\x09c := TRCanvas new.\x0a\x09box1 := TRBoxShape new.\x0a\x09box1 from: 10 @ 10 to: 200 @ 50.\x0a\x09box1 color: Color red.\x0a\x09\x0a\x09box2 := TRBoxShape new.\x0a\x09box2 from: 55 @ 60 to: 80 @ 75.\x0a\x09box2 color: Color green.\x0a\x09\x0a\x09circle := TREllipseShape new.\x0a\x09circle from: 155 @ 160 to: 180 @ 175.\x0a\x09circle color: Color blue.\x0a\x0a\x09line := TRLineShape new.\x0a\x09line from: 10 @ 10 to: 55 @ 80.\x0a\x0a\x09c add: box1; add: box2; add: line; add: circle.\x0a\x09c open",
messageSends: ["new", "from:to:", "@", "color:", "red", "green", "blue", "add:", "open"],
referencedClasses: ["TRCanvas", "TRBoxShape", "Color", "TREllipseShape", "TRLineShape"]
}),
smalltalk.TRExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
category: 'not yet classified',
fn: function () {
var self=this;
var c,box1,box2,box3;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
c=_st($TRCanvas())._new();
box1=_st($TRBoxShape())._new();
_st(box1)._from_to_((10).__at((10)),(200).__at((50)));
_st(box1)._color_(_st($Color())._red());
box2=_st($TRBoxShape())._new();
_st(box2)._from_to_((20).__at((20)),(200).__at((50)));
_st(box2)._color_(_st($Color())._green());
box3=_st($TRBoxShape())._new();
_st(box3)._from_to_((30).__at((30)),(200).__at((50)));
_st(box3)._color_(_st($Color())._blue());
$1=c;
_st($1)._add_(box1);
_st($1)._add_(box2);
$2=_st($1)._add_(box3);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example2",{c:c,box1:box1,box2:box2,box3:box3},smalltalk.TRExamples)});},
args: [],
source: "example2\x0a\x09\x22\x0a\x09TRExamples new example2\x0a\x09\x22\x0a\x09| c box1 box2 box3 |\x0a\x09c := TRCanvas new.\x0a\x09box1 := TRBoxShape new.\x0a\x09box1 from: 10 @ 10 to: 200 @ 50.\x0a\x09box1 color: Color red.\x0a\x09\x0a\x09box2 := TRBoxShape new.\x0a\x09box2 from: 20 @ 20 to: 200 @ 50.\x0a\x09box2 color: Color green.\x0a\x0a\x09box3 := TRBoxShape new.\x0a\x09box3 from: 30 @ 30 to: 200 @ 50.\x0a\x09box3 color: Color blue.\x0a\x0a\x09c add: box1; add: box2; add: box3.\x0a\x09c open",
messageSends: ["new", "from:to:", "@", "color:", "red", "green", "blue", "add:", "open"],
referencedClasses: ["TRCanvas", "TRBoxShape", "Color"]
}),
smalltalk.TRExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
category: 'not yet classified',
fn: function () {
var self=this;
var c,box;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
(1)._to_do_((10),(function(i){
return smalltalk.withContext(function($ctx2) {
box=_st($TRBoxShape())._new();
box;
_st(box)._from_to_((0).__at((0)),(30).__at((20)));
_st(box)._color_(_st($Color())._red());
_st(box)._translateTo_(_st(_st(i).__star((10))).__at(_st(i).__star((10))));
return _st(c)._add_(box);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example3",{c:c,box:box},smalltalk.TRExamples)});},
args: [],
source: "example3\x0a\x09\x22\x0a\x09TRExamples new example3\x0a\x09\x22\x0a\x09| c box |\x0a\x09c := TRCanvas new.\x0a\x091 to: 10 do: [ :i | \x0a\x09\x09box := TRBoxShape new.\x0a\x09\x09box from: 0 @ 0 to: 30 @ 20.\x0a\x09\x09box color: Color red.\x0a\x09\x09box translateTo: ((i * 10) @ (i * 10)).\x0a\x09\x09c add: box ].\x0a\x09c open",
messageSends: ["new", "to:do:", "from:to:", "@", "color:", "red", "translateTo:", "*", "add:", "open"],
referencedClasses: ["TRCanvas", "TRBoxShape", "Color"]
}),
smalltalk.TRExamples);



smalltalk.addClass('TRShape', smalltalk.Object, ['canvas', 'color', 'svgElement', 'borderColor', 'announcer', 'element', 'position'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'not yet classified',
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRShape)});},
args: ["aCanvas"],
source: "addedIn: aCanvas\x0a\x09\x22Trachel Canvas as argument\x22\x0a\x09canvas := aCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'not yet classified',
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRShape)});},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09self announcer announce: anEvent",
messageSends: ["announce:", "announcer"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'not yet classified',
fn: function () {
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@announcer"])._isNil();
if(smalltalk.assert($1)){
self["@announcer"]=_st($Announcer())._new();
self["@announcer"];
};
$2=self["@announcer"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRShape)});},
args: [],
source: "announcer\x0a\x09announcer isNil ifTrue: [ announcer := Announcer new ].\x0a\x09^ announcer",
messageSends: ["ifTrue:", "new", "isNil"],
referencedClasses: ["Announcer"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
category: 'not yet classified',
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcer"]=anAnnouncer;
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRShape)});},
args: ["anAnnouncer"],
source: "announcer: anAnnouncer\x0a\x09announcer := anAnnouncer",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.TRShape)});},
args: [],
source: "borderColor\x0a\x09^ borderColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'not yet classified',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.TRShape)});},
args: ["aColor"],
source: "borderColor: aColor\x0a\x09borderColor := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRShape)});},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'not yet classified',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRShape)});},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRShape)});},
args: ["svgCanvas"],
source: "drawOn: svgCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRShape)});},
args: [],
source: "element\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'not yet classified',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anElement:anElement},smalltalk.TRShape)});},
args: ["anElement"],
source: "element: anElement\x0a\x09element := anElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._gray();
self["@position"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)});},
args: [],
source: "initialize\x0a\x09color := Color gray.\x0a\x09position := 0 @ 0",
messageSends: ["gray", "@"],
referencedClasses: ["Color"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPath",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"resetPath",{},smalltalk.TRShape)});},
args: [],
source: "resetPath\x0a\x09\x22Compatibility -- Maybe we  will exploit this later on\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
category: 'not yet classified',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.TRShape)});},
args: ["aColor"],
source: "strokePaint: aColor\x0a\x09\x22TODO\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRShape)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09position := position + aPoint",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRShape)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TRShape)});},
args: [],
source: "update",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);



smalltalk.addClass('TRBoundedShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@from"]).__plus(self._extent());
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRBoundedShape)});},
args: [],
source: "center\x0a\x09^  from + self extent",
messageSends: ["+", "extent"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'not yet classified',
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self["@from"],self["@to"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRBoundedShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^ Rectangle origin: from corner: to",
messageSends: ["origin:corner:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__at(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRBoundedShape)});},
args: [],
source: "extent\x0a\x09^ self width @ self height",
messageSends: ["@", "height", "width"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'not yet classified',
fn: function (anExtent) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(anExtent).__eq(self._extent());
if(smalltalk.assert($1)){
$2=self;
return $2;
};
center=_st(self["@from"]).__plus(_st(self._extent()).__slash((2)));
self["@from"]=_st(center).__minus(_st(anExtent).__slash((2)));
self["@to"]=_st(center).__plus(_st(anExtent).__slash((2)));
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent,center:center},smalltalk.TRBoundedShape)});},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09| center |\x0a\x09anExtent = self extent ifTrue: [ ^ self ].\x0a\x09center := from + (self extent / 2).\x0a\x09from := center - (anExtent / 2).\x0a\x09to := center + (anExtent / 2).\x0a\x09self update",
messageSends: ["ifTrue:", "=", "extent", "+", "/", "-", "update"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{aPoint:aPoint},smalltalk.TRBoundedShape)});},
args: ["aPoint"],
source: "from: aPoint\x0a\x09from := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'not yet classified',
fn: function (p1, p2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_(p1);
self._to_(p2);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{p1:p1,p2:p2},smalltalk.TRBoundedShape)});},
args: ["p1", "p2"],
source: "from: p1 to: p2\x0a\x09self from: p1.\x0a\x09self to: p2.",
messageSends: ["from:", "to:"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@to"]).__minus(self["@from"]))._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRBoundedShape)});},
args: [],
source: "height\x0a\x09^ (to - from) y",
messageSends: ["y", "-"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'not yet classified',
fn: function (newHeight) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@position"]).__minus((0).__at(_st(newHeight).__slash((2))));
self["@to"]=_st(self["@position"]).__plus((0).__at(_st(newHeight).__slash((2))));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{newHeight:newHeight},smalltalk.TRBoundedShape)});},
args: ["newHeight"],
source: "height: newHeight\x0a\x09from := (position - (0 @ (newHeight / 2))).\x0a\x09to := (position + (0 @ (newHeight / 2))).",
messageSends: ["-", "@", "/", "+"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBoundedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@from"]=(-5).__at((-5));
self["@to"]=(5).__at((5));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRBoundedShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09from := -5 @ -5.\x0a\x09to := 5 @ 5.",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRBoundedShape)});},
args: [],
source: "position\x0a\x09^ self center",
messageSends: ["center"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{aPoint:aPoint},smalltalk.TRBoundedShape)});},
args: ["aPoint"],
source: "to: aPoint\x0a\x09to := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
var e;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBoundedShape.superclass.fn.prototype._translateTo_.apply(_st(self), [aPoint]);
e=_st(self._extent()).__slash((2));
self["@from"]=_st(self["@position"]).__minus(e);
self["@to"]=_st(self["@position"]).__plus(e);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint,e:e},smalltalk.TRBoundedShape)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09| e |\x0a\x09super translateTo: aPoint.\x0a\x09e := self extent / 2.\x0a\x09from := position - e.\x0a\x09to := position + e.\x0a\x09\x22self triggerCallbacksForStep: (rectangle topLeft - oldTopLeft)\x22",
messageSends: ["translateTo:", "/", "extent", "-", "+"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@to"]).__minus(self["@from"]))._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRBoundedShape)});},
args: [],
source: "width\x0a\x09^ (to - from) x",
messageSends: ["x", "-"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'not yet classified',
fn: function (newWidth) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@position"]).__minus(_st(_st(newWidth).__slash((2))).__at((0)));
self["@to"]=_st(self["@position"]).__plus(_st(_st(newWidth).__slash((2))).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{newWidth:newWidth},smalltalk.TRBoundedShape)});},
args: ["newWidth"],
source: "width: newWidth\x0a\x09from := (position - (newWidth / 2 @ 0)).\x0a\x09to :=  (position + (newWidth / 2 @ 0)).",
messageSends: ["-", "@", "/", "+"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);



smalltalk.addClass('TRBoxShape', smalltalk.TRBoundedShape, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._rect_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRBoxShape)});},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x0a\x09svgElement := svgCanvas  rect: from x y: from y width: self width height: self height.\x0a\x09svgElement attr:'fill' with: color asHTMLRGBA.",
messageSends: ["rect:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TRBoxShape);



smalltalk.addClass('TREllipseShape', smalltalk.TRBoundedShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._ellipse_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TREllipseShape)});},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09svgElement := svgCanvas  ellipse: from x y: from y width: self width height: self height.\x0a\x09svgElement attr:'fill' with: color asHTMLRGBA.",
messageSends: ["ellipse:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRCircleShape', smalltalk.TRShape, [], 'AATrachel');


smalltalk.addClass('TRLineShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._path_(_st(_st(_st(_st(_st(_st("M".__comma(_st(self["@from"])._x())).__comma(",")).__comma(_st(self["@from"])._y())).__comma("L")).__comma(_st(self["@to"])._x())).__comma(",")).__comma(_st(self["@to"])._y()));
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRLineShape)});},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09svgElement := svgCanvas  path: 'M', from x, ',', from y, 'L', to x, ',', to y.\x0a\x09svgElement attr:'fill' with: color asHTMLRGBA.",
messageSends: ["path:", ",", "y", "x", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.TRLineShape)});},
args: [],
source: "from\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{aPoint:aPoint},smalltalk.TRLineShape)});},
args: ["aPoint"],
source: "from: aPoint\x0a\x09from := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'not yet classified',
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_(aPoint);
self._to_(anotherPoint);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRLineShape)});},
args: ["aPoint", "anotherPoint"],
source: "from: aPoint to: anotherPoint\x0a\x09self from: aPoint.\x0a\x09self to: anotherPoint.",
messageSends: ["from:", "to:"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
category: 'not yet classified',
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRLineShape)});},
args: ["aPoint", "anotherPoint", "aColor"],
source: "from: aPoint to: anotherPoint color: aColor\x0a\x09self from: aPoint to: anotherPoint.\x0a\x09self color: aColor",
messageSends: ["from:to:", "color:"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.TRLineShape)});},
args: [],
source: "to\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'not yet classified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{aPoint:aPoint},smalltalk.TRLineShape)});},
args: ["aPoint"],
source: "to: aPoint\x0a\x09to := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);



smalltalk.addClass('TRNoShape', smalltalk.TRShape, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRNoShape)});},
args: [],
source: "height\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRNoShape)});},
args: [],
source: "width\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);


smalltalk.TRNoShape.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=self._new();
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.TRNoShape.klass)});},
args: [],
source: "instance\x0a\x09instance ifNil: [ instance := self new ].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.TRNoShape.klass);


