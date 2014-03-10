smalltalk.addPackage('AATrachel');
smalltalk.addClass('TRCamera', smalltalk.Object, ['position', 'canvas', 'scale'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'not yet classified',
fn: function (aTrachelCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera)})},
args: ["aTrachelCanvas"],
source: "canvas: aTrachelCanvas\x0a\x09\x22Set the canvas to observe\x22\x0a\x09canvas := aTrachelCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._encompassingRectangleOf_(_st(self["@canvas"])._shapes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRCamera)})},
args: [],
source: "encompassingRectangle\x0a\x0a\x09\x22Maybe a method encompassingRectangle has to be defined in TRCanvas?\x22\x0a\x09^ self encompassingRectangleOf: canvas shapes",
messageSends: ["encompassingRectangleOf:", "shapes"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
category: 'not yet classified',
fn: function (shapes){
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
var $1;
encompassingRectangle=_st(_st(shapes)._first())._encompassingRectangle();
_st(shapes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
encompassingRectangle=_st(encompassingRectangle)._merge_(_st(e)._encompassingRectangle());
return encompassingRectangle;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=encompassingRectangle;
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangleOf:",{shapes:shapes,encompassingRectangle:encompassingRectangle},smalltalk.TRCamera)})},
args: ["shapes"],
source: "encompassingRectangleOf: shapes\x0a\x09| encompassingRectangle |\x0a\x09encompassingRectangle := shapes first encompassingRectangle.\x0a\x09shapes do: [ :e | encompassingRectangle := encompassingRectangle merge: e encompassingRectangle ].\x0a\x09^ encompassingRectangle ",
messageSends: ["encompassingRectangle", "first", "do:", "merge:"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self["@canvas"])._numberOfShapes()).__eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self["@canvas"])._drawShapes();
self._translateTo_(_st(self._encompassingRectangle())._center());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnCenter",{},smalltalk.TRCamera)})},
args: [],
source: "focusOnCenter\x0a\x09\x22Do nothing if there aren't any shapes present\x22\x0a\x09canvas numberOfShapes = 0 ifTrue: [ ^ self ]. \x0a\x09canvas drawShapes.\x0a\x09self translateTo: self encompassingRectangle center",
messageSends: ["ifTrue:", "=", "numberOfShapes", "drawShapes", "translateTo:", "center", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCamera.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCamera)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09scale := 1.0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRCamera)})},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'not yet classified',
fn: function (newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=newPosition;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{newPosition:newPosition},smalltalk.TRCamera)})},
args: ["newPosition"],
source: "translateTo: newPosition\x0a\x09position := newPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);


smalltalk.addMethod(
smalltalk.method({
selector: "forCanvas:",
category: 'not yet classified',
fn: function (aTrachelCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TRCamera.klass.superclass.fn.prototype._new.apply(_st(self), []))._canvas_(aTrachelCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCanvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera.klass)})},
args: ["aTrachelCanvas"],
source: "forCanvas: aTrachelCanvas\x0a\x0a\x09^ super new canvas: aTrachelCanvas",
messageSends: ["canvas:", "new"],
referencedClasses: []
}),
smalltalk.TRCamera.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Instance of this class have to be created with #forCanvas:");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TRCamera.klass)})},
args: [],
source: "new\x0a\x09self error: 'Instance of this class have to be created with #forCanvas:'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.TRCamera.klass);


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
selector: "drawShapes",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._do_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._drawOrRedrawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawShapes",{},smalltalk.TRCanvas)})},
args: [],
source: "drawShapes\x0a\x09shapes do: [ :s | s drawOrRedrawOn: svgCanvas ]",
messageSends: ["do:", "drawOrRedrawOn:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCamera(){return smalltalk.TRCamera||(typeof TRCamera=="undefined"?nil:TRCamera)}
return smalltalk.withContext(function($ctx1) { 
self["@svgCanvas"]=self._paper();
self["@shapes"]=_st($OrderedCollection())._new();
self["@camera"]=_st($TRCamera())._forCanvas_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCanvas)})},
args: [],
source: "initialize\x0a\x09svgCanvas := self paper.\x0a\x09shapes := OrderedCollection new.\x0a\x09camera := TRCamera forCanvas: self.",
messageSends: ["paper", "new", "forCanvas:"],
referencedClasses: ["OrderedCollection", "TRCamera"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfShapes",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfShapes",{},smalltalk.TRCanvas)})},
args: [],
source: "numberOfShapes\x0a\x09\x22Return the number of displayed nonfixed shapes\x22\x0a\x09^ shapes size ",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'not yet classified',
fn: function (){
var self=this;
var canvasExtent,disp;
return smalltalk.withContext(function($ctx1) { 
canvasExtent=_st(_st(self["@svgCanvas"])._width()).__at(_st(self["@svgCanvas"])._height());
disp=_st(_st(canvasExtent).__slash((2))).__minus(_st(self["@camera"])._position());
_st(self["@shapes"])._do_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._applyTransformAfter_(_st(_st("t".__comma(_st(disp)._x())).__comma(" ")).__comma(_st(disp)._y()));
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{canvasExtent:canvasExtent,disp:disp},smalltalk.TRCanvas)})},
args: [],
source: "open\x0a\x09| canvasExtent disp |\x0a\x09\x22shapes do: [ :s | s drawOn: svgCanvas ]\x22\x0a\x09canvasExtent := (svgCanvas width) @ (svgCanvas height).\x0a\x09disp := canvasExtent / 2 - (camera position).\x0a\x09shapes do: [ :s | s applyTransformAfter: 't', disp x, ' ', disp y ].",
messageSends: ["@", "height", "width", "-", "position", "/", "do:", "applyTransformAfter:", ",", "y", "x"],
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
selector: "shapes",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapes",{},smalltalk.TRCanvas)})},
args: [],
source: "shapes\x0a\x09\x22Return the list of shapes\x22\x0a\x09^ shapes asArray",
messageSends: ["asArray"],
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



smalltalk.addClass('TRShape', smalltalk.Object, ['canvas', 'color', 'svgElement', 'strokePaint', 'announcer', 'element', 'position', 'rectangle'], 'AATrachel');
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
selector: "applyTransformAfter:",
category: 'not yet classified',
fn: function (firstTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._transform_(_st(firstTransform).__comma(self._transforms()));
return self}, function($ctx1) {$ctx1.fill(self,"applyTransformAfter:",{firstTransform:firstTransform},smalltalk.TRShape)})},
args: ["firstTransform"],
source: "applyTransformAfter: firstTransform\x0a\x09svgElement transform: firstTransform, (self transforms)",
messageSends: ["transform:", ",", "transforms"],
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
selector: "drawOrRedrawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@svgElement"])._remove();
};
self._drawOn_(svgCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"drawOrRedrawOn:",{svgCanvas:svgCanvas},smalltalk.TRShape)})},
args: ["svgCanvas"],
source: "drawOrRedrawOn: svgCanvas\x0a\x09svgElement ifNotNil: [ svgElement remove ].\x0a\x09self drawOn: svgCanvas.",
messageSends: ["ifNotNil:", "remove", "drawOn:"],
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
selector: "encompassingRectangle",
category: 'not yet classified',
fn: function (){
var self=this;
var bbox;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@rectangle"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@rectangle"];
return $2;
};
self._drawOrRedrawOn_(_st(self["@canvas"])._svgCanvas());
bbox=_st(self["@svgElement"])._getBBox();
self["@rectangle"]=_st($Rectangle())._left_right_top_bottom_(_st(bbox)._x(),_st(bbox)._x2(),_st(bbox)._y(),_st(bbox)._y2());
$3=self["@rectangle"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{bbox:bbox},smalltalk.TRShape)})},
args: [],
source: "encompassingRectangle\x0a\x09| bbox |\x0a\x09rectangle ifNotNil: [ ^rectangle ].\x0a\x09self drawOrRedrawOn: canvas svgCanvas.\x0a\x09bbox := svgElement getBBox.\x0a\x09rectangle := Rectangle left: bbox x right: bbox x2 top: bbox y bottom: bbox y2.\x0a\x09^ rectangle",
messageSends: ["ifNotNil:", "drawOrRedrawOn:", "svgCanvas", "getBBox", "left:right:top:bottom:", "x", "x2", "y", "y2"],
referencedClasses: ["Rectangle"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'not yet classified',
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.TRShape)})},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09\x22do nothing here. This method may be overriden for particular behavior\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._gray();
self["@position"]=(0).__at((0));
self["@transform"]="";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)})},
args: [],
source: "initialize\x0a\x09color := Color gray.\x0a\x09position := 0 @ 0.\x0a\x09transform := ''.",
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
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.TRShape)})},
args: ["aColor"],
source: "strokePaint: aColor\x0a\x09strokePaint := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.TRShape)})},
args: [],
source: "svgElement\x0a\x09^ svgElement",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "transforms",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"transforms",{},smalltalk.TRShape)})},
args: [],
source: "transforms\x0a\x09^ ''",
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



smalltalk.addClass('TRArcShape', smalltalk.TRShape, ['alphaAngle', 'betaAngle', 'innerRadius', 'externalRadius', 'center', 'origin', 'height', 'width', 'topLeft', 'bottomRight'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle:betaAngle:innerRadius:externalRadius:",
category: 'not yet classified',
fn: function (stAngle,ndAngle,iR,eR){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alphaAngle"]=stAngle;
self["@betaAngle"]=ndAngle;
self["@innerRadius"]=iR;
self["@externalRadius"]=eR;
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngle:betaAngle:innerRadius:externalRadius:",{stAngle:stAngle,ndAngle:ndAngle,iR:iR,eR:eR},smalltalk.TRArcShape)})},
args: ["stAngle", "ndAngle", "iR", "eR"],
source: "alphaAngle: stAngle betaAngle: ndAngle innerRadius: iR externalRadius: eR\x0a\x09alphaAngle := stAngle.\x0a\x09betaAngle := ndAngle.\x0a\x09innerRadius := iR.\x0a\x09externalRadius := eR",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
var path,aAngle,bAngle,i,e,arcSweep,firstP,secondP;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
aAngle=_st(_st(self["@alphaAngle"])._value())._degreesToRadians();
bAngle=_st(_st(self["@betaAngle"])._value())._degreesToRadians();
i=_st(self["@innerRadius"])._value();
e=_st(self["@externalRadius"])._value();
firstP=_st(_st(i).__star(_st(aAngle)._cos())).__at(_st(i).__star(_st(aAngle)._sin()));
secondP=_st(_st(i).__star(_st(aAngle).__plus(_st(bAngle)._cos()))).__at(_st(i).__star(_st(aAngle).__plus(_st(bAngle)._sin())));
path=_st(_st("M".__comma(_st(firstP)._x())).__comma(",")).__comma(_st(firstP)._y());
path=_st(_st(_st(_st(_st(_st(_st(_st(path).__comma("A")).__comma(i)).__comma(",")).__comma(i)).__comma(" 0 0 1 ")).__comma(_st(secondP)._x())).__comma(",")).__comma(_st(secondP)._y());
_st($Transcript())._show_(path);
self["@svgElement"]=_st(svgCanvas)._path_(path);
_st(self["@svgElement"])._attr_with_("stroke",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas,path:path,aAngle:aAngle,bAngle:bAngle,i:i,e:e,arcSweep:arcSweep,firstP:firstP,secondP:secondP},smalltalk.TRArcShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09| path aAngle bAngle i e arcSweep firstP secondP |\x0a\x09\x0a\x09aAngle := alphaAngle value degreesToRadians.\x0a\x09bAngle := betaAngle value degreesToRadians.\x0a\x09i := innerRadius value.\x0a\x09e := externalRadius value.\x0a\x09\x0a\x09firstP := (i * (aAngle cos)) @ (i * (aAngle sin)).\x0a\x09secondP := (i * (aAngle + bAngle cos)) @ (i * (aAngle + bAngle sin)).\x0a\x09\x0a\x09\x0a\x09path := 'M', firstP x, ',', firstP y.\x0a\x09path := path, 'A', i, ',', i, ' 0 0 1 ', (secondP x), ',', (secondP y).\x0a\x09Transcript show: path.\x0a\x09\x0a\x09svgElement := svgCanvas  path: path.\x0a\x09svgElement attr:'stroke' with: color asHTMLRGBA.",
messageSends: ["degreesToRadians", "value", "@", "*", "sin", "cos", "+", ",", "y", "x", "show:", "path:", "attr:with:", "asHTMLRGBA"],
referencedClasses: ["Transcript"]
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRArcShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@center"]=(0).__at((0));
self["@height"]=(0);
self["@width"]=(0);
self["@externalRadius"]=(0);
self["@innerRadius"]=(0);
self["@alphaAngle"]=(0);
self["@betaAngle"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRArcShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09center := 0 @ 0.\x0a\x09height := 0.\x0a\x09width := 0.\x0a\x09externalRadius := 0.\x0a\x09innerRadius := 0.\x0a\x09alphaAngle := 0.\x0a\x09betaAngle := 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRArcShape);



smalltalk.addClass('TRBezierShape', smalltalk.TRShape, ['listOfPoints'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
var path,firstP,lastP;
return smalltalk.withContext(function($ctx1) { 
firstP=_st(self["@listOfPoints"])._first();
path=_st(_st("M".__comma(_st(firstP)._x())).__comma(",")).__comma(_st(firstP)._y());
_st((2)._to_(_st(_st(self["@listOfPoints"])._size()).__minus((1))))._do_((function(index){
var controlP,destP;
return smalltalk.withContext(function($ctx2) {
controlP=_st(self["@listOfPoints"])._at_(index);
controlP;
destP=_st(_st(_st(self["@listOfPoints"])._at_(index)).__plus(_st(self["@listOfPoints"])._at_(_st(index).__plus((1))))).__slash((2));
destP;
path=_st(_st(_st(_st(_st(_st(_st(_st(path).__comma("Q")).__comma(_st(controlP)._x())).__comma(",")).__comma(_st(controlP)._y())).__comma(" ")).__comma(_st(destP)._x())).__comma(",")).__comma(_st(destP)._y());
return path;
}, function($ctx2) {$ctx2.fillBlock({index:index,controlP:controlP,destP:destP},$ctx1)})}));
self["@svgElement"]=_st(svgCanvas)._path_(path);
_st(self["@svgElement"])._attr_with_("stroke",_st(self["@strokePaint"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas,path:path,firstP:firstP,lastP:lastP},smalltalk.TRBezierShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09| path firstP lastP |\x0a\x09firstP := listOfPoints first.\x0a\x09\x0a\x09path := 'M', firstP x, ',', firstP y.\x0a\x09\x0a\x09(2 to: (listOfPoints size - 1)) do: [ :index |\x0a\x09\x09| controlP destP |\x0a\x09\x09controlP := listOfPoints at: index.\x0a\x09\x09destP := ((listOfPoints at: index) + (listOfPoints at: (index + 1))) / 2.\x0a\x09\x09path := path, 'Q', controlP x, ',', controlP y, ' ', destP x, ',', destP y.\x0a\x09].\x0a\x09\x0a\x09svgElement := svgCanvas  path: path.\x0a\x09svgElement attr:'stroke' with: strokePaint asHTMLRGBA.",
messageSends: ["first", ",", "y", "x", "do:", "at:", "/", "+", "to:", "-", "size", "path:", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@listOfPoints"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"points",{},smalltalk.TRBezierShape)})},
args: [],
source: "points\x0a\x09^ listOfPoints copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:",
category: 'not yet classified',
fn: function (points){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=points;
return self}, function($ctx1) {$ctx1.fill(self,"points:",{points:points},smalltalk.TRBezierShape)})},
args: ["points"],
source: "points: points\x0a\x09listOfPoints := points",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:color:",
category: 'not yet classified',
fn: function (aListOfPoints,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._points_(aListOfPoints);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"points:color:",{aListOfPoints:aListOfPoints,aColor:aColor},smalltalk.TRBezierShape)})},
args: ["aListOfPoints", "aColor"],
source: "points: aListOfPoints color: aColor\x0a\x0a\x09self points: aListOfPoints.\x0a\x09self strokePaint: aColor.\x0a\x09self color: aColor",
messageSends: ["points:", "strokePaint:", "color:"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'not yet classified',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=_st(self["@listOfPoints"])._collect_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(p).__plus(aPoint);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRBezierShape)})},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09listOfPoints := listOfPoints collect: [ :p | p + aPoint ]",
messageSends: ["collect:", "+"],
referencedClasses: []
}),
smalltalk.TRBezierShape);



smalltalk.addClass('TRBoundedShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@from"]).__plus(_st(self._extent()).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRBoundedShape)})},
args: [],
source: "center\x0a\x09^  from + (self extent / 2)",
messageSends: ["+", "/", "extent"],
referencedClasses: []
}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessary",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@strokePaint"])._isNil();
if(smalltalk.assert($1)){
_st(self["@svgElement"])._attr_with_("stroke-width",(0));
} else {
_st(self["@svgElement"])._attr_with_("stroke",_st(self["@strokePaint"])._asHTMLRGBA());
};
return self}, function($ctx1) {$ctx1.fill(self,"drawStrokeIfNecessary",{},smalltalk.TRBoundedShape)})},
args: [],
source: "drawStrokeIfNecessary\x0a\x09strokePaint isNil\x0a\x09\x09ifTrue: [ svgElement attr: 'stroke-width' with: 0 ]\x0a\x09\x09ifFalse: [ svgElement attr: 'stroke' with: strokePaint asHTMLRGBA ].",
messageSends: ["ifTrue:ifFalse:", "attr:with:", "asHTMLRGBA", "isNil"],
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
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._rect_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
self._drawStrokeIfNecessary();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRBoxShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x0a\x09svgElement := svgCanvas  rect: from x y: from y width: self width height: self height.\x0a\x09svgElement attr:'fill' with: color asHTMLRGBA.\x0a\x09self drawStrokeIfNecessary.",
messageSends: ["rect:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA", "drawStrokeIfNecessary"],
referencedClasses: []
}),
smalltalk.TRBoxShape);



smalltalk.addClass('TREllipseShape', smalltalk.TRBoundedShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._ellipse_y_hradius_vradius_(_st(self._center())._x(),_st(self._center())._y(),_st(self._width()).__slash((2)),_st(self._height()).__slash((2)));
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
self._drawStrokeIfNecessary();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TREllipseShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09svgElement := svgCanvas ellipse: self center x y: self center y hradius: self width / 2 vradius: self height / 2.\x0a\x09svgElement attr:'fill' with: color asHTMLRGBA.\x0a\x09self drawStrokeIfNecessary.",
messageSends: ["ellipse:y:hradius:vradius:", "x", "center", "y", "/", "width", "height", "attr:with:", "asHTMLRGBA", "drawStrokeIfNecessary"],
referencedClasses: []
}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
category: 'not yet classified',
fn: function (aPoint,anotherPoint,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TREllipseShape)})},
args: ["aPoint", "anotherPoint", "aColor"],
source: "from: aPoint to: anotherPoint color: aColor\x0a\x09self from: aPoint to: anotherPoint.\x0a\x09self color: aColor.",
messageSends: ["from:to:", "color:"],
referencedClasses: []
}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRComposedShape', smalltalk.TRShape, ['shape1', 'shape2'], 'AATrachel');
smalltalk.TRComposedShape.comment="A TRComposedShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09shape1:\x09\x09<Object>\x0a\x09shape2:\x09\x09<Object>\x0a\x0ashape1\x0a\x09- xxxxx\x0a\x0ashape2\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
category: 'actions',
fn: function (aCallback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._addCallback_(aCallback);
_st(self["@shape2"])._addCallback_(aCallback);
return self}, function($ctx1) {$ctx1.fill(self,"addCallback:",{aCallback:aCallback},smalltalk.TRComposedShape)})},
args: ["aCallback"],
source: "addCallback: aCallback\x0a\x09shape1 addCallback: aCallback.\x0a\x09shape2 addCallback: aCallback",
messageSends: ["addCallback:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'actions',
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._addShape_(self["@shape1"]);
_st(aCanvas)._addShape_(self["@shape2"]);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRComposedShape)})},
args: ["aCanvas"],
source: "addedIn: aCanvas\x0a\x09aCanvas addShape: shape1.\x0a\x09aCanvas addShape: shape2.",
messageSends: ["addShape:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announce_(anEvent);
_st(self["@shape2"])._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRComposedShape)})},
args: ["anEvent"],
source: "announce: anEvent\x0a\x09shape1 announce: anEvent.\x0a\x09shape2 announce: anEvent.",
messageSends: ["announce:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("should not be called");
return self}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRComposedShape)})},
args: [],
source: "announcer\x0a\x09self error: 'should not be called'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
category: 'accessing',
fn: function (anAnnouncer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announcer_(anAnnouncer);
_st(self["@shape2"])._announcer_(anAnnouncer);
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRComposedShape)})},
args: ["anAnnouncer"],
source: "announcer: anAnnouncer\x0a\x09shape1 announcer: anAnnouncer.\x0a\x09shape2 announcer: anAnnouncer.",
messageSends: ["announcer:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "applyTransformAfter:",
category: 'as yet unclassified',
fn: function (firstTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._applyTransformAfter_(firstTransform);
_st(self["@shape2"])._applyTransformAfter_(firstTransform);
return self}, function($ctx1) {$ctx1.fill(self,"applyTransformAfter:",{firstTransform:firstTransform},smalltalk.TRComposedShape)})},
args: ["firstTransform"],
source: "applyTransformAfter: firstTransform\x0a\x09shape1 applyTransformAfter: firstTransform.\x0a\x09shape2 applyTransformAfter: firstTransform.",
messageSends: ["applyTransformAfter:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._canvas_(aSurface);
_st(self["@shape2"])._canvas_(aSurface);
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRComposedShape)})},
args: ["aSurface"],
source: "canvas: aSurface\x0a\x09shape1 canvas: aSurface.\x0a\x09shape2 canvas: aSurface",
messageSends: ["canvas:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (svgCanvas){
var self=this;
var max;
return smalltalk.withContext(function($ctx1) { 
max=_st(_st(_st(self["@shape1"])._encompassingRectangle())._extent())._max_(_st(_st(self["@shape2"])._encompassingRectangle())._extent());
_st(self["@shape1"])._extent_(max);
_st(self["@shape2"])._extent_(max);
_st(self["@shape1"])._drawOrRedrawOn_(svgCanvas);
_st(self["@shape2"])._drawOrRedrawOn_(svgCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas,max:max},smalltalk.TRComposedShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09| max |\x0a\x09max := shape1 encompassingRectangle extent max: shape2 encompassingRectangle extent.\x0a\x09shape1 extent: max.\x0a\x09shape2 extent: max.\x0a\x0a\x09shape1 drawOrRedrawOn: svgCanvas.\x0a\x09shape2 drawOrRedrawOn: svgCanvas",
messageSends: ["max:", "extent", "encompassingRectangle", "extent:", "drawOrRedrawOn:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape1"])._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRComposedShape)})},
args: [],
source: "element\x0a\x09^ shape1 element",
messageSends: ["element"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._element_(anObject);
_st(self["@shape2"])._element_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRComposedShape)})},
args: ["anObject"],
source: "element: anObject\x0a\x09\x22anObject could be any kind of object. A shape has a reference to an object, typically the object odel that the trachel shape represents\x22\x0a\x09shape1 element: anObject.\x0a\x09shape2 element: anObject.",
messageSends: ["element:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._merging_(_st($Array())._with_with_(_st(self["@shape1"])._encompassingRectangle(),_st(self["@shape2"])._encompassingRectangle()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRComposedShape)})},
args: [],
source: "encompassingRectangle\x0a\x09^ Rectangle merging: (Array with: shape1 encompassingRectangle with: shape2 encompassingRectangle)",
messageSends: ["merging:", "with:with:", "encompassingRectangle"],
referencedClasses: ["Array", "Rectangle"]
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRComposedShape)})},
args: [],
source: "height\x0a\x09^ self encompassingRectangle height",
messageSends: ["height", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape1"])._includesPoint_(aPoint))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@shape2"])._includesPoint_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRComposedShape)})},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09^ (shape1 includesPoint: aPoint) or: [ shape2 includesPoint: aPoint ]",
messageSends: ["or:", "includesPoint:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRComposedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape1"]=_st($TRNoShape())._instance();
self["@shape2"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRComposedShape)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09shape1 := TRNoShape instance.\x0a\x09shape2 := TRNoShape instance.",
messageSends: ["initialize", "instance"],
referencedClasses: ["TRNoShape"]
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@shape1"])._position()).__plus(_st(self["@shape2"])._position())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRComposedShape)})},
args: [],
source: "position\x0a\x09^ (shape1 position + shape2 position) / 2",
messageSends: ["/", "+", "position"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._remove();
_st(self["@shape2"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TRComposedShape)})},
args: [],
source: "remove\x0a\x09shape1 remove.\x0a\x09shape2 remove",
messageSends: ["remove"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape1",{},smalltalk.TRComposedShape)})},
args: [],
source: "shape1\x0a\x09^ shape1",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1:",
category: 'accessing',
fn: function (aTRShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape1"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape1:",{aTRShape:aTRShape},smalltalk.TRComposedShape)})},
args: ["aTRShape"],
source: "shape1: aTRShape\x0a\x09shape1 := aTRShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape2",{},smalltalk.TRComposedShape)})},
args: [],
source: "shape2\x0a\x09^ shape2",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2:",
category: 'accessing',
fn: function (aTRShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape2"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape2:",{aTRShape:aTRShape},smalltalk.TRComposedShape)})},
args: ["aTRShape"],
source: "shape2: aTRShape\x0a\x09shape2 := aTRShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'as yet unclassified',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._translateTo_(aPoint);
_st(self["@shape2"])._translateTo_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRComposedShape)})},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09shape1 translateTo: aPoint.\x0a\x09shape2 translateTo: aPoint.",
messageSends: ["translateTo:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'events',
fn: function (event,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@shape1"])._announcer())._when_do_(event,aBlock);
_st(_st(self["@shape2"])._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRComposedShape)})},
args: ["event", "aBlock"],
source: "when: event do: aBlock\x0a\x09shape1 announcer when: event do: aBlock.\x0a\x09shape2 announcer when: event do: aBlock",
messageSends: ["when:do:", "announcer"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRComposedShape)})},
args: [],
source: "width\x0a\x09^ self encompassingRectangle width",
messageSends: ["width", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRComposedShape);


smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
category: 'as yet unclassified',
fn: function (s1,s2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._shape1_(s1);
_st($2)._shape2_(s2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{s1:s1,s2:s2},smalltalk.TRComposedShape.klass)})},
args: ["s1", "s2"],
source: "with: s1 with: s2\x0a\x09^ self new shape1: s1; shape2: s2; yourself",
messageSends: ["shape1:", "new", "shape2:", "yourself"],
referencedClasses: []
}),
smalltalk.TRComposedShape.klass);


smalltalk.addClass('TRLabelShape', smalltalk.TRShape, ['text', 'fontSize'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultFontSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape)})},
args: [],
source: "defaultFontSize\x0a\x09^ self class defaultFontSize",
messageSends: ["defaultFontSize", "class"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._text_y_text_(_st(self["@position"])._x(),_st(self["@position"])._y(),self["@text"]);
_st(self["@svgElement"])._attr_with_("font-family","Verdana");
_st(self["@svgElement"])._attr_with_("font-size",self["@fontSize"]);
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRLabelShape)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x0a\x09svgElement := svgCanvas text: position x y: position y text: text.\x0a\x09svgElement attr: 'font-family' with: 'Verdana'.\x0a\x09svgElement attr: 'font-size' with: fontSize.\x0a\x09svgElement attr: 'fill' with: color asHTMLRGBA.",
messageSends: ["text:y:text:", "x", "y", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
category: 'not yet classified',
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fontSize"]=aSize;
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aSize:aSize},smalltalk.TRLabelShape)})},
args: ["aSize"],
source: "fontSize: aSize\x0a\x09fontSize := aSize.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRLabelShape)})},
args: [],
source: "height\x0a\x09^ self encompassingRectangle height",
messageSends: ["height", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'not yet classified',
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.TRLabelShape)})},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.TRLabelShape)})},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'not yet classified',
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText},smalltalk.TRLabelShape)})},
args: ["aText"],
source: "text: aText\x0a\x09text := aText.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRLabelShape)})},
args: [],
source: "width\x0a\x09^ self encompassingRectangle width",
messageSends: ["width", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRLabelShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (12);
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape.klass)})},
args: [],
source: "defaultFontSize\x0a\x09^ 12",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape.klass);


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
selector: "position",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRNoShape)})},
args: [],
source: "position\x0a\x09^ 0 @ 0",
messageSends: ["@"],
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


smalltalk.addClass('TRSVGPath', smalltalk.TRShape, ['borderWidth', 'fillColor', 'scale', 'pathStr'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'not yet classified',
fn: function (aWidth){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=aWidth;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{aWidth:aWidth},smalltalk.TRSVGPath)})},
args: ["aWidth"],
source: "borderWidth: aWidth\x0a\x09borderWidth := aWidth",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'not yet classified',
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._path_(self["@pathStr"]);
_st(self["@svgElement"])._attr_with_("stroke",_st(self["@strokePaint"])._asHTMLRGBA());
_st(self["@svgElement"])._attr_with_("stroke-width",self["@borderWidth"]);
_st(self["@svgElement"])._attr_with_("fill",_st(self["@fillColor"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRSVGPath)})},
args: ["svgCanvas"],
source: "drawOn: svgCanvas\x0a\x09\x22 \x22\x0a\x09svgElement := svgCanvas  path: pathStr.\x0a\x09svgElement attr:'stroke' with: strokePaint asHTMLRGBA.\x0a\x09svgElement attr: 'stroke-width' with: borderWidth.\x0a\x09svgElement attr:'fill' with: fillColor asHTMLRGBA.",
messageSends: ["path:", "attr:with:", "asHTMLRGBA"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
category: 'not yet classified',
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.TRSVGPath)})},
args: ["aColor"],
source: "fillColor: aColor\x0a\x09fillColor := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
category: 'not yet classified',
fn: function (aPathString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathStr"]=aPathString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aPathString:aPathString},smalltalk.TRSVGPath)})},
args: ["aPathString"],
source: "path: aPathString\x0a\x09pathStr := aPathString",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'not yet classified',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNumber:aNumber},smalltalk.TRSVGPath)})},
args: ["aNumber"],
source: "scale: aNumber\x0a\x09scale := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "transforms",
category: 'not yet classified',
fn: function (){
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
var $1;
center=_st(_st(self["@canvas"])._camera())._position();
$1=_st(_st(_st(_st(_st(_st("s".__comma(self["@scale"])).__comma(",")).__comma(self["@scale"])).__comma(",")).__comma(_st(center)._x())).__comma(",")).__comma(_st(center)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"transforms",{center:center},smalltalk.TRSVGPath)})},
args: [],
source: "transforms\x0a\x09| center |\x0a\x09center := canvas camera position.\x0a\x09^ 's', scale, ',', scale, ',', center x, ',', center y.",
messageSends: ["position", "camera", ",", "y", "x"],
referencedClasses: []
}),
smalltalk.TRSVGPath);



