smalltalk.addPackage('Trachel-Core');
smalltalk.addClass('TREvent', smalltalk.nil, ['canvas', 'position', 'morph'], 'Trachel-Core');
smalltalk.TREvent.comment="A TREvent is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09canvas:\x09\x09<Object>\x0a\x09morph:\x09\x09<Object>\x0a\x09position:\x09\x09<Object>\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0amorph\x0a\x09- xxxxx\x0a\x0aposition\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TREvent)});},
args: [],
source: "canvas\x0a\x09\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TREvent)});},
args: ["aTrachelCanvas"],
source: "canvas: aTrachelCanvas\x0a\x09\x0a\x09canvas := aTrachelCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "morph",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@morph"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"morph",{},smalltalk.TREvent)});},
args: [],
source: "morph\x0a\x09^ morph",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "morph:",
category: 'accessing',
fn: function (aMorph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@morph"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"morph:",{aMorph:aMorph},smalltalk.TREvent)});},
args: ["aMorph"],
source: "morph: aMorph\x0a\x09morph := aMorph",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TREvent)});},
args: [],
source: "position\x0a\x09\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPoint:aPoint},smalltalk.TREvent)});},
args: ["aPoint"],
source: "position: aPoint\x0a\x09\x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@morph"])._notNil();
if(smalltalk.assert($1)){
_st(self["@morph"])._changed();
};
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TREvent)});},
args: [],
source: "signalUpdate\x0a\x09morph notNil ifTrue: [ morph changed ]",
messageSends: ["ifTrue:", "changed", "notNil"],
referencedClasses: []
}),
smalltalk.TREvent);



smalltalk.addClass('TRResizeCanvasEvent', smalltalk.TREvent, [], 'Trachel-Core');
smalltalk.TRResizeCanvasEvent.comment="A TRResizeCanvasEvent is xxxxxxxxx.";


smalltalk.addClass('TRShapeEvent', smalltalk.TREvent, ['shape'], 'Trachel-Core');
smalltalk.TRShapeEvent.comment="A TRShapeEvent is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09shape:\x09\x09<Object>\x0a\x0ashape\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shape())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRShapeEvent)});},
args: [],
source: "element\x0a\x09\x22Could be any object\x22\x0a\x09^ self shape element",
messageSends: ["element", "shape"],
referencedClasses: []
}),
smalltalk.TRShapeEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.TRShapeEvent)});},
args: [],
source: "shape\x0a\x09\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShapeEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aTrachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aTrachelShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aTrachelShape:aTrachelShape},smalltalk.TRShapeEvent)});},
args: ["aTrachelShape"],
source: "shape: aTrachelShape\x0a\x09\x0a\x09shape := aTrachelShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShapeEvent);


smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'instance creation',
fn: function (aTrachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._shape_(aTrachelShape);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape:",{aTrachelShape:aTrachelShape},smalltalk.TRShapeEvent.klass)});},
args: ["aTrachelShape"],
source: "shape: aTrachelShape\x0a\x09^ self new shape: aTrachelShape; yourself",
messageSends: ["shape:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.TRShapeEvent.klass);


smalltalk.addClass('TRMouseClick', smalltalk.TRShapeEvent, ['commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed'], 'Trachel-Core');
smalltalk.TRMouseClick.comment="A ROMouseClick is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09commandKeyPressed:\x09\x09<Object>\x0a\x09controlKeyPressed:\x09\x09<Object>\x0a\x09shiftKeyPressed:\x09\x09<Object>\x0a\x0acommandKeyPressed\x0a\x09- xxxxx\x0a\x0acontrolKeyPressed\x0a\x09- xxxxx\x0a\x0ashiftKeyPressed\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.TRMouseClick)});},
args: [],
source: "commandKeyPressed\x0a\x09^ commandKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
args: ["anObject"],
source: "commandKeyPressed: anObject\x0a\x09commandKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.TRMouseClick)});},
args: [],
source: "controlKeyPressed\x0a\x09^ controlKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
args: ["anObject"],
source: "controlKeyPressed: anObject\x0a\x09controlKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRMouseClick.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@commandKeyPressed"]=false;
self["@controlKeyPressed"]=false;
self["@shiftKeyPressed"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRMouseClick)});},
args: [],
source: "initialize \x0a\x09super initialize.\x0a\x09commandKeyPressed := false.\x0a\x09controlKeyPressed := false.\x0a\x09shiftKeyPressed := false.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.TRMouseClick)});},
args: [],
source: "shiftKeyPressed\x0a\x09^ shiftKeyPressed",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
args: ["anObject"],
source: "shiftKeyPressed: anObject\x0a\x09shiftKeyPressed := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseClick);



smalltalk.addClass('TRMouseLeftClick', smalltalk.TRMouseClick, [], 'Trachel-Core');
smalltalk.TRMouseLeftClick.comment="A TRMouseLeftClick is xxxxxxxxx.";


smalltalk.addClass('TRMouseRightClick', smalltalk.TRMouseClick, [], 'Trachel-Core');
smalltalk.TRMouseRightClick.comment="A TRMouseRightClick is xxxxxxxxx.";


smalltalk.addClass('TRMouseDragging', smalltalk.TRShapeEvent, ['step'], 'Trachel-Core');
smalltalk.TRMouseDragging.comment="A TRMouseDragging is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09step:\x09\x09<Object>\x0a\x0astep\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRMouseDragging.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@step"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRMouseDragging)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09step := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.TRMouseDragging)});},
args: [],
source: "step\x0a\x09^ step",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{aPoint:aPoint},smalltalk.TRMouseDragging)});},
args: ["aPoint"],
source: "step: aPoint\x0a\x09step := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRMouseDragging);


smalltalk.addMethod(
smalltalk.method({
selector: "step:",
category: 'public',
fn: function (aStepAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._step_(aStepAsPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"step:",{aStepAsPoint:aStepAsPoint},smalltalk.TRMouseDragging.klass)});},
args: ["aStepAsPoint"],
source: "step: aStepAsPoint\x0a\x09^ self new step: aStepAsPoint",
messageSends: ["step:", "new"],
referencedClasses: []
}),
smalltalk.TRMouseDragging.klass);


smalltalk.addClass('TRMouseEnter', smalltalk.TRShapeEvent, [], 'Trachel-Core');
smalltalk.TRMouseEnter.comment="A TRMouseEnter is xxxxxxxxx.";


smalltalk.addClass('TRMouseLeave', smalltalk.TRShapeEvent, [], 'Trachel-Core');
smalltalk.TRMouseLeave.comment="A TRMouseLeave is xxxxxxxxx.";


smalltalk.addClass('TRMouseMove', smalltalk.TRShapeEvent, [], 'Trachel-Core');
smalltalk.TRMouseMove.comment="A TRMouseMove is xxxxxxxxx.";


smalltalk.addClass('TRObject', smalltalk.Object, [], 'Trachel-Core');
smalltalk.TRObject.comment="A TRObject is xxxxxxxxx.";


smalltalk.addClass('TRCamera', smalltalk.TRObject, ['position', 'canvas', 'scale'], 'Trachel-Core');
smalltalk.TRCamera.comment="A TRCamera is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09canvas:\x09\x09<Object>\x0a\x09position:\x09\x09<Object>\x0a\x09scale:\x09\x09<Object>\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0aposition\x0a\x09- xxxxx\x0a\x0ascale\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TRCamera)});},
args: [],
source: "canvas\x0a\x09\x22Return the trachel canvas I am observing\x22\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera)});},
args: ["aTrachelCanvas"],
source: "canvas: aTrachelCanvas\x0a\x09\x22Set the canvas to observe\x22\x0a\x09canvas := aTrachelCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'utility',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._encompassingRectangleOf_(_st(self["@canvas"])._shapes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRCamera)});},
args: [],
source: "encompassingRectangle\x0a\x0a\x09\x22Maybe a method encompassingRectangle has to be defined in TRCanvas?\x22\x0a\x09^ self encompassingRectangleOf: canvas shapes",
messageSends: ["encompassingRectangleOf:", "shapes"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
category: 'utility',
fn: function (shapes) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
var $1;
encompassingRectangle=_st(_st(shapes)._anyOne())._encompassingRectangle();
_st(shapes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
encompassingRectangle=_st(encompassingRectangle)._merge_(_st(e)._encompassingRectangle());
return encompassingRectangle;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=encompassingRectangle;
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangleOf:",{shapes:shapes,encompassingRectangle:encompassingRectangle},smalltalk.TRCamera)});},
args: ["shapes"],
source: "encompassingRectangleOf: shapes\x0a\x09| encompassingRectangle |\x0a\x09encompassingRectangle := shapes anyOne encompassingRectangle.\x0a\x09shapes do: [ :e | encompassingRectangle := encompassingRectangle merge: e encompassingRectangle ].\x0a\x09^ encompassingRectangle",
messageSends: ["encompassingRectangle", "anyOne", "do:", "merge:"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(self["@canvas"])._numberOfShapes()).__eq((0));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._translateTo_(_st(self._encompassingRectangle())._center());
return self}, function($ctx1) {$ctx1.fill(self,"focusOnCenter",{},smalltalk.TRCamera)});},
args: [],
source: "focusOnCenter\x0a\x09\x22Do nothing if no shape are present\x22\x0a\x09canvas numberOfShapes = 0 ifTrue: [ ^ self ]. \x0a\x09self translateTo: self encompassingRectangle center",
messageSends: ["ifTrue:", "=", "numberOfShapes", "translateTo:", "center", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPixelToSpace:",
category: 'convertion',
fn: function (aPoint) {
var self=this;
var tr;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
tr=_st(_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__minus(self._position()))._negated();
$2=_st($AthensAffineTransform())._new();
_st($2)._translation_(tr);
$3=_st($2)._transform_(aPoint);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPixelToSpace:",{aPoint:aPoint,tr:tr},smalltalk.TRCamera)});},
args: ["aPoint"],
source: "fromPixelToSpace: aPoint\x0a\x09| tr |\x0a\x09tr := ((canvas extent / 2) - self position) negated.\x0a\x09^ AthensAffineTransform new translation: tr; transform: aPoint",
messageSends: ["negated", "-", "position", "/", "extent", "translation:", "new", "transform:"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSpaceToPixel:",
category: 'convertion',
fn: function (aPoint) {
var self=this;
var tr;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
tr=_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__minus(self._position());
$2=_st($AthensAffineTransform())._new();
_st($2)._translation_(tr);
$3=_st($2)._transform_(aPoint);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSpaceToPixel:",{aPoint:aPoint,tr:tr},smalltalk.TRCamera)});},
args: ["aPoint"],
source: "fromSpaceToPixel: aPoint\x0a\x09| tr |\x0a\x09tr := (canvas extent / 2) - self position.\x0a\x09^ AthensAffineTransform new translation: tr; transform: aPoint",
messageSends: ["-", "position", "/", "extent", "translation:", "new", "transform:"],
referencedClasses: ["AthensAffineTransform"]
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCamera.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCamera)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09position := 0 @ 0.\x0a\x09scale := 1.0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRCamera)});},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.TRCamera)});},
args: [],
source: "scale\x0a\x09^ scale",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (aNewScale) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNewScale;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNewScale:aNewScale},smalltalk.TRCamera)});},
args: ["aNewScale"],
source: "scale: aNewScale\x0a\x09scale := aNewScale",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRCamera)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09position := position + aPoint",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'actions',
fn: function (newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=newPosition;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{newPosition:newPosition},smalltalk.TRCamera)});},
args: ["newPosition"],
source: "translateTo: newPosition\x0a\x09position := newPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCamera);


smalltalk.addMethod(
smalltalk.method({
selector: "forCanvas:",
category: 'public',
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TRCamera.klass.superclass.fn.prototype._new.apply(_st(self), []))._canvas_(aTrachelCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCanvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera.klass)});},
args: ["aTrachelCanvas"],
source: "forCanvas: aTrachelCanvas\x0a\x0a\x09^ super new canvas: aTrachelCanvas",
messageSends: ["canvas:", "new"],
referencedClasses: []
}),
smalltalk.TRCamera.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Instance of this class have to be created with #forCanvas:");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TRCamera.klass)});},
args: [],
source: "new\x0a\x09self error: 'Instance of this class have to be created with #forCanvas:'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.TRCamera.klass);


smalltalk.addClass('TRCanvasExample', smalltalk.TRObject, [], 'Trachel-Core');
smalltalk.TRCanvasExample.comment="A TRCanvasExample is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "animatedArc",
category: 'animation',
fn: function () {
var self=this;
var v,e,angle,timer;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $VITimer(){return smalltalk.VITimer||(typeof VITimer=="undefined"?nil:VITimer)}
function $VIAnimatedValue(){return smalltalk.VIAnimatedValue||(typeof VIAnimatedValue=="undefined"?nil:VIAnimatedValue)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $TRResetAllShapes(){return smalltalk.TRResetAllShapes||(typeof TRResetAllShapes=="undefined"?nil:TRResetAllShapes)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($TRCanvas())._new();
timer=_st(_st($VITimer())._new())._cycleLength_((2));
_st(timer)._repeat();
$1=_st($VIAnimatedValue())._new();
_st($1)._evaluator_((function(t){
return smalltalk.withContext(function($ctx2) {
return (0)._interpolateTo_at_((360),t);
}, function($ctx2) {$ctx2.fillBlock({t:t},$ctx1)})}));
_st($1)._timer_(timer);
$2=_st($1)._yourself();
angle=$2;
e=_st(_st($TRArcShape())._new())._alphaAngle_betaAngle_innerRadius_externalRadius_(angle,_st(angle).__plus((30)),(50),(80));
_st(v)._addShape_(e);
_st(angle)._start();
_st(v)._addAnimation_(_st($TRResetAllShapes())._new());
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"animatedArc",{v:v,e:e,angle:angle,timer:timer},smalltalk.TRCanvasExample)});},
args: [],
source: "animatedArc\x0a\x09\x22\x0a\x09self new animatedArc\x0a\x09\x22\x0a\x0a\x09| v e angle timer |\x0a\x09v := TRCanvas new.\x0a\x09timer := VITimer new cycleLength: 2.\x0a\x09timer repeat.\x0a\x09angle := VIAnimatedValue new\x0a\x09\x09\x09\x09\x09evaluator: [ :t | 0 interpolateTo: 360 at: t ];\x0a\x09\x09\x09\x09\x09timer: timer;\x0a\x09\x09\x09\x09\x09yourself.\x0a\x09\x09\x09\x09\x09\x0a\x09e := (TRArcShape new \x0a\x09\x09\x09alphaAngle: angle betaAngle: (angle + 30) innerRadius: 50 externalRadius: 80).\x0a\x09v addShape: e.\x0a\x09angle start.\x0a\x0a\x09v addAnimation: (TRResetAllShapes new).\x0a\x09v open",
messageSends: ["new", "cycleLength:", "repeat", "evaluator:", "interpolateTo:at:", "timer:", "yourself", "alphaAngle:betaAngle:innerRadius:externalRadius:", "+", "addShape:", "start", "addAnimation:", "open"],
referencedClasses: ["TRCanvas", "VITimer", "VIAnimatedValue", "TRArcShape", "TRResetAllShapes"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc",
category: 'arcs',
fn: function () {
var self=this;
var c,shape;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape=_st($TRArcShape())._new();
_st(shape)._alphaAngle_betaAngle_innerRadius_externalRadius_((10),(80),(30),(150));
_st(shape)._color_(_st($Color())._blue());
_st(c)._addShape_(shape);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc",{c:c,shape:shape},smalltalk.TRCanvasExample)});},
args: [],
source: "arc\x0a\x09\x22\x0a\x09self new arc\x0a\x09\x22\x0a\x09| c  shape|\x0a\x09c := TRCanvas new.\x0a\x09shape:= TRArcShape new.\x0a\x09shape alphaAngle:10  betaAngle: 80  innerRadius: 30 externalRadius: 150. \x0a\x09shape color: Color blue.\x0a\x09c addShape: shape.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc0",
category: 'arcs',
fn: function () {
var self=this;
var c,shape;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape=_st($TRArcShape())._new();
_st(shape)._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(360),(0),(100));
_st(shape)._color_(_st($Color())._blue());
_st(c)._addShape_(shape);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc0",{c:c,shape:shape},smalltalk.TRCanvasExample)});},
args: [],
source: "arc0\x0a\x09\x22\x0a\x09self new arc0\x0a\x09\x22\x0a\x09| c shape |\x0a\x09c := TRCanvas new.\x0a\x09shape:= TRArcShape new.\x0a\x09shape alphaAngle:0  betaAngle: 360  innerRadius: 0 externalRadius: 100. \x0a\x09shape color: Color blue.\x0a\x09c addShape: shape.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc2",
category: 'arcs',
fn: function () {
var self=this;
var c,shape1,shape2,shape3,shape4;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape1=_st($TRArcShape())._new();
shape2=_st($TRArcShape())._new();
shape3=_st($TRArcShape())._new();
shape4=_st($TRArcShape())._new();
_st(shape1)._alphaAngle_betaAngle_innerRadius_externalRadius_((10),(80),(30),(150));
_st(shape1)._color_(_st($Color())._blue());
_st(shape2)._alphaAngle_betaAngle_innerRadius_externalRadius_((100),(170),(30),(150));
_st(shape2)._color_(_st($Color())._green());
_st(shape3)._alphaAngle_betaAngle_innerRadius_externalRadius_((190),(260),(30),(150));
_st(shape3)._color_(_st($Color())._yellow());
_st(shape4)._alphaAngle_betaAngle_innerRadius_externalRadius_((280),(350),(30),(150));
_st(shape4)._color_(_st($Color())._red());
_st(c)._addShape_(shape1);
_st(c)._addShape_(shape2);
_st(c)._addShape_(shape3);
_st(c)._addShape_(shape4);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc2",{c:c,shape1:shape1,shape2:shape2,shape3:shape3,shape4:shape4},smalltalk.TRCanvasExample)});},
args: [],
source: "arc2\x0a\x09\x22\x0a\x09self new arc\x0a\x09\x22\x0a\x09| c  shape1 shape2 shape3 shape4|\x0a\x09c := TRCanvas new.\x0a\x09shape1:= TRArcShape new.\x0a\x09shape2:= TRArcShape new.\x0a\x09shape3:= TRArcShape new.\x0a\x09shape4:= TRArcShape new.\x0a\x09shape1 alphaAngle:10  betaAngle: 80 innerRadius: 30 externalRadius: 150. \x0a\x09shape1 color: Color blue.\x0a\x09shape2 alphaAngle:100  betaAngle: 170 innerRadius: 30 externalRadius: 150. \x0a\x09shape2 color: Color green.\x0a\x09shape3 alphaAngle:190  betaAngle: 260 innerRadius: 30 externalRadius: 150. \x0a\x09shape3 color: Color yellow.\x0a\x09shape4 alphaAngle:280  betaAngle: 350 innerRadius: 30 externalRadius: 150. \x0a\x09shape4 color: Color red.\x0a\x09c addShape: shape1.c addShape: shape2. c addShape: shape3. c addShape: shape4.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc3",
category: 'arcs',
fn: function () {
var self=this;
var c,shape1,shape2,shape3,shape4;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape1=_st($TRArcShape())._new();
shape2=_st($TRArcShape())._new();
shape3=_st($TRArcShape())._new();
shape4=_st($TRArcShape())._new();
_st(shape1)._alphaAngle_betaAngle_innerRadius_externalRadius_((5),(85),(30),(150));
_st(shape1)._color_(_st($Color())._blue());
_st(shape2)._alphaAngle_betaAngle_innerRadius_externalRadius_((95),(175),(30),(150));
_st(shape2)._color_(_st($Color())._green());
_st(shape3)._alphaAngle_betaAngle_innerRadius_externalRadius_((185),(265),(30),(150));
_st(shape3)._color_(_st($Color())._yellow());
_st(shape4)._alphaAngle_betaAngle_innerRadius_externalRadius_((275),(355),(30),(150));
_st(shape4)._color_(_st($Color())._red());
_st(c)._addShape_(shape1);
_st(c)._addShape_(shape2);
_st(c)._addShape_(shape3);
_st(c)._addShape_(shape4);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc3",{c:c,shape1:shape1,shape2:shape2,shape3:shape3,shape4:shape4},smalltalk.TRCanvasExample)});},
args: [],
source: "arc3\x0a\x09\x22\x0a\x09self new arc3\x0a\x09\x22\x0a\x09| c  shape1 shape2 shape3 shape4|\x0a\x09c := TRCanvas new.\x0a\x09shape1:= TRArcShape new.\x0a\x09shape2:= TRArcShape new.\x0a\x09shape3:= TRArcShape new.\x0a\x09shape4:= TRArcShape new.\x0a\x09shape1 alphaAngle:5  betaAngle: 85 innerRadius: 30 externalRadius: 150. \x0a\x09shape1 color: Color blue.\x0a\x09shape2 alphaAngle:95  betaAngle: 175 innerRadius: 30 externalRadius: 150. \x0a\x09shape2 color: Color green.\x0a\x09shape3 alphaAngle:185  betaAngle: 265 innerRadius: 30 externalRadius: 150. \x0a\x09shape3 color: Color yellow.\x0a\x09shape4 alphaAngle:275  betaAngle: 355 innerRadius: 30 externalRadius: 150. \x0a\x09shape4 color: Color red.\x0a\x09c addShape: shape1.c addShape: shape2. c addShape: shape3. c addShape: shape4.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc4",
category: 'arcs',
fn: function () {
var self=this;
var c,shape1,shape2,shape3,shape4;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape1=_st($TRArcShape())._new();
shape2=_st($TRArcShape())._new();
shape3=_st($TRArcShape())._new();
shape4=_st($TRArcShape())._new();
_st(shape1)._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(90),(130),(150));
_st(shape1)._color_(_st($Color())._blue());
_st(shape2)._alphaAngle_betaAngle_innerRadius_externalRadius_((90),(180),(130),(150));
_st(shape2)._color_(_st($Color())._green());
_st(shape3)._alphaAngle_betaAngle_innerRadius_externalRadius_((180),(270),(130),(150));
_st(shape3)._color_(_st($Color())._yellow());
_st(shape4)._alphaAngle_betaAngle_innerRadius_externalRadius_((270),(360),(130),(150));
_st(shape4)._color_(_st($Color())._red());
_st(c)._addShape_(shape1);
_st(c)._addShape_(shape2);
_st(c)._addShape_(shape3);
_st(c)._addShape_(shape4);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc4",{c:c,shape1:shape1,shape2:shape2,shape3:shape3,shape4:shape4},smalltalk.TRCanvasExample)});},
args: [],
source: "arc4\x0a\x09\x22\x0a\x09self new arc4\x0a\x09\x22\x0a\x09| c  shape1 shape2 shape3 shape4|\x0a\x09c := TRCanvas new.\x0a\x09shape1:= TRArcShape new.\x0a\x09shape2:= TRArcShape new.\x0a\x09shape3:= TRArcShape new.\x0a\x09shape4:= TRArcShape new.\x0a\x09shape1 alphaAngle:0  betaAngle: 90 innerRadius: 130 externalRadius: 150. \x0a\x09shape1 color: Color blue.\x0a\x09shape2 alphaAngle:90  betaAngle: 180 innerRadius: 130 externalRadius: 150. \x0a\x09shape2 color: Color green.\x0a\x09shape3 alphaAngle:180  betaAngle: 270 innerRadius: 130 externalRadius: 150. \x0a\x09shape3 color: Color yellow.\x0a\x09shape4 alphaAngle:270  betaAngle: 360 innerRadius: 130 externalRadius: 150. \x0a\x09shape4 color: Color red.\x0a\x09c addShape: shape1.c addShape: shape2. c addShape: shape3. c addShape: shape4.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc5",
category: 'arcs',
fn: function () {
var self=this;
var c,shape1,shape2,shape3,shape4;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape1=_st($TRArcShape())._new();
shape2=_st($TRArcShape())._new();
shape3=_st($TRArcShape())._new();
shape4=_st($TRArcShape())._new();
_st(shape1)._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(90),(0),(150));
_st(shape1)._color_(_st($Color())._blue());
_st(shape2)._alphaAngle_betaAngle_innerRadius_externalRadius_((90),(180),(0),(150));
_st(shape2)._color_(_st($Color())._green());
_st(shape3)._alphaAngle_betaAngle_innerRadius_externalRadius_((180),(270),(0),(150));
_st(shape3)._color_(_st($Color())._yellow());
_st(shape4)._alphaAngle_betaAngle_innerRadius_externalRadius_((270),(360),(0),(150));
_st(shape4)._color_(_st($Color())._red());
_st(c)._addShape_(shape1);
_st(c)._addShape_(shape2);
_st(c)._addShape_(shape3);
_st(c)._addShape_(shape4);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc5",{c:c,shape1:shape1,shape2:shape2,shape3:shape3,shape4:shape4},smalltalk.TRCanvasExample)});},
args: [],
source: "arc5\x0a\x09\x22\x0a\x09self new arc5\x0a\x09\x22\x0a\x09| c  shape1 shape2 shape3 shape4|\x0a\x09c := TRCanvas new.\x0a\x09shape1:= TRArcShape new.\x0a\x09shape2:= TRArcShape new.\x0a\x09shape3:= TRArcShape new.\x0a\x09shape4:= TRArcShape new.\x0a\x09shape1 alphaAngle:0  betaAngle: 90 innerRadius: 0 externalRadius: 150. \x0a\x09shape1 color: Color blue.\x0a\x09shape2 alphaAngle:90  betaAngle: 180 innerRadius: 0 externalRadius: 150. \x0a\x09shape2 color: Color green.\x0a\x09shape3 alphaAngle:180  betaAngle: 270 innerRadius: 0 externalRadius: 150. \x0a\x09shape3 color: Color yellow.\x0a\x09shape4 alphaAngle:270  betaAngle: 360 innerRadius: 0 externalRadius: 150. \x0a\x09shape4 color: Color red.\x0a\x09c addShape: shape1.c addShape: shape2. c addShape: shape3. c addShape: shape4.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc6",
category: 'arcs',
fn: function () {
var self=this;
var c,shape,shape2;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
shape=_st($TRArcShape())._new();
_st(shape)._alphaAngle_betaAngle_innerRadius_externalRadius_((10),(80),(30),(150));
_st(shape)._color_(_st($Color())._blue());
shape2=_st($TRBoxShape())._new();
_st(shape2)._rectangle_(_st(_st(shape)._topLeft())._corner_(_st(shape)._bottomRight()));
_st(shape2)._color_(_st($Color())._red());
_st(c)._addShape_(shape);
_st(c)._addShape_(shape2);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"arc6",{c:c,shape:shape,shape2:shape2},smalltalk.TRCanvasExample)});},
args: [],
source: "arc6\x0a\x09\x22\x0a\x09self new arc6\x0a\x09\x22\x0a\x09| c  shape shape2|\x0a\x09c := TRCanvas new.\x0a\x09shape:= TRArcShape new.\x0a\x09shape alphaAngle:10  betaAngle: 80  innerRadius: 30 externalRadius: 150. \x0a\x09shape color: Color blue.\x0a\x09shape2:=TRBoxShape new.\x0a\x09shape2 rectangle: (shape topLeft corner: shape bottomRight).\x0a\x09shape2 color: Color red.\x0a\x09c addShape: shape.\x0a\x09c addShape: shape2.\x0a\x09c open.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "rectangle:", "corner:", "bottomRight", "topLeft", "red", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRArcShape", "Color", "TRBoxShape"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "bezier",
category: 'examples',
fn: function () {
var self=this;
var t,points;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
function $TRBezierShape(){return smalltalk.TRBezierShape||(typeof TRBezierShape=="undefined"?nil:TRBezierShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
points=_st($OrderedCollection())._new();
_st(points)._add_((50).__at((50)));
_st(points)._add_((150).__at((20)));
_st(points)._add_((120).__at((130)));
_st(points)._add_((50).__at((150)));
_st(points)._add_((80).__at((80)));
t=_st($TRCanvas())._new();
_st(t)._addShape_(_st(_st($TRLineShape())._new())._from_to_((50).__at((50)),(130).__at((20))));
$1=_st($TRBezierShape())._new();
_st($1)._points_(points);
$2=_st($1)._strokePaint_(_st($Color())._purple());
_st(t)._addShape_($2);
_st(t)._open();
return self}, function($ctx1) {$ctx1.fill(self,"bezier",{t:t,points:points},smalltalk.TRCanvasExample)});},
args: [],
source: "bezier\x0a\x09| t points |\x0a\x09points := OrderedCollection new.\x0a\x09points add: 50 @ 50.\x0a\x09points add: 150 @ 20.\x0a\x09points add: 120 @ 130.\x0a\x09points add: 50 @ 150.\x0a\x09points add: 80 @ 80.\x0a\x09t := TRCanvas new.\x0a\x09t addShape: (TRLineShape  new from: 50 @ 50 to: 130 @ 20).\x0a\x09t addShape: (TRBezierShape new \x0a\x09\x09points: points; \x0a\x09\x09\x09strokePaint: Color purple).\x0a\x09t open",
messageSends: ["new", "add:", "@", "addShape:", "from:to:", "points:", "strokePaint:", "purple", "open"],
referencedClasses: ["OrderedCollection", "TRCanvas", "TRLineShape", "TRBezierShape", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
category: 'examples',
fn: function () {
var self=this;
var c;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
_st(c)._buildRectangle_color_(_st((50).__at((50)))._corner_((80).__at((80))),_st(_st($Color())._blue())._alpha_((0.2)));
(100)._to_by_do_((200),(20),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(c)._buildCircleFrom_to_color_((50).__at((50)),_st(i).__at((100)),_st(_st($Color())._red())._alpha_((0.1)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st(c)._openTitled_("Example with transparent circles");
return self}, function($ctx1) {$ctx1.fill(self,"circle",{c:c},smalltalk.TRCanvasExample)});},
args: [],
source: "circle\x0a\x09\x22\x0a\x09self new circle\x0a\x09\x22\x0a\x09| c  |\x0a\x09c := TRCanvas new.\x0a\x09c buildRectangle: (50 @ 50 corner: 80 @ 80) color: (Color blue alpha: 0.2).\x0a\x0a\x09100 to: 200 by: 20 do: [ :i |\x0a\x09\x09 c buildCircleFrom: 50 @ 50 to: i @ 100 color: (Color red alpha: 0.1).\x0a\x09].\x0a\x09c openTitled: 'Example with transparent circles'.",
messageSends: ["new", "buildRectangle:color:", "corner:", "@", "alpha:", "blue", "to:by:do:", "buildCircleFrom:to:color:", "red", "openTitled:"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle2",
category: 'examples',
fn: function () {
var self=this;
var c,circle,line1,line2;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
circle=_st(_st($TREllipseShape())._new())._from_to_((-50).__at((-50)),(50).__at((50)));
_st(circle)._color_(_st(_st($Color())._purple())._alpha_((0.3)));
line1=_st(_st($TRLineShape())._new())._from_to_((-50).__at((0)),(50).__at((0)));
line2=_st(_st($TRLineShape())._new())._from_to_((0).__at((-50)),(0).__at((50)));
_st(line1)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(line2)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(c)._addShape_(circle);
_st(c)._addShape_(line1);
_st(c)._addShape_(line2);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"circle2",{c:c,circle:circle,line1:line1,line2:line2},smalltalk.TRCanvasExample)});},
args: [],
source: "circle2\x0a\x09\x22\x0a\x09self new circle2\x0a\x09\x22\x0a\x0a\x09| c circle line1 line2 |\x0a\x09c := TRCanvas new.\x0a\x09circle := TREllipseShape new from: -50 @ -50 to: 50 @ 50.\x0a\x09circle color: (Color purple alpha: 0.3).\x0a\x09line1 := TRLineShape new from: -50 @ 0 to: 50 @ 0.\x0a\x09line2 := TRLineShape new from: 0 @ -50 to: 0 @ 50.\x0a\x09line1 color: (Color blue alpha: 0.5).\x0a\x09line2 color: (Color blue alpha: 0.5).\x0a\x09\x0a\x09c addShape: circle.\x0a\x09c addShape: line1.\x0a\x09c addShape: line2.\x0a\x09c open",
messageSends: ["new", "from:to:", "@", "color:", "alpha:", "purple", "blue", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TREllipseShape", "Color", "TRLineShape"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "fiveLabelFlowers",
category: 'rotating labels',
fn: function () {
var self=this;
var t,label,box,points;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TRRotatedLabelShape(){return smalltalk.TRRotatedLabelShape||(typeof TRRotatedLabelShape=="undefined"?nil:TRRotatedLabelShape)}
return smalltalk.withContext(function($ctx1) { 
t=_st($TRCanvas())._new();
_st(t)._color_(_st($Color())._white());
points=_st($OrderedCollection())._new();
_st(points)._add_((0).__at((0)));
_st(points)._add_((150).__at((150)));
_st(points)._add_((-150).__at((-150)));
_st(points)._add_((150).__at((-150)));
_st(points)._add_((-150).__at((150)));
_st(points)._do_((function(position){
return smalltalk.withContext(function($ctx2) {
return (1)._to_by_do_((180),(25),(function(angle){
return smalltalk.withContext(function($ctx3) {
box=_st($TRBoxShape())._new();
box;
_st(box)._from_to_(_st(position).__minus((1)),_st(position).__plus((1)));
_st(box)._color_(_st(_st($Color())._blue())._alpha_((0.5)));
_st(t)._addShape_(box);
label=_st($TRRotatedLabelShape())._new();
label;
_st(label)._text_("Hello World Bonjour Monde");
_st(label)._color_(_st($Color())._black());
_st(label)._position_(position);
_st(label)._angleInDegree_(angle);
return _st(t)._addShape_(label);
}, function($ctx3) {$ctx3.fillBlock({angle:angle},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({position:position},$ctx1)})}));
_st(t)._open();
return self}, function($ctx1) {$ctx1.fill(self,"fiveLabelFlowers",{t:t,label:label,box:box,points:points},smalltalk.TRCanvasExample)});},
args: [],
source: "fiveLabelFlowers\x0a\x09\x22\x0a\x09self new fiveLabelFlowers.\x0a\x09\x22\x0a\x09| t label box points |\x0a\x09t := TRCanvas new.\x0a\x09t color: Color white.\x0a\x0a\x09points := OrderedCollection new.\x0a\x09points add: 0 @ 0.\x0a\x09points add: 150 @ 150.\x0a\x09points add: -150 @ -150.\x0a\x09points add: 150 @ -150.\x0a\x09points add: -150 @ 150.\x0a\x09points do: [ :position |\x0a\x09\x091 to: 180 by: 25 do: [ :angle |\x0a\x09\x09\x09box := TRBoxShape new.\x0a\x09\x09\x09box from: position -1 to: position + 1.\x0a\x09\x09\x09box color: (Color blue alpha: 0.5).\x0a\x09\x09\x09t addShape: box.\x0a\x09\x09\x09\x0a\x09\x09\x09label := TRRotatedLabelShape new.\x0a\x09\x09\x09label text: 'Hello World Bonjour Monde'.\x0a\x09\x09\x09label color: Color black.\x0a\x09\x09\x09label position: position.\x0a\x09\x09\x09label angleInDegree: angle.\x0a\x09\x09\x09t addShape: label ] ].\x0a\x09\x0a\x09t open",
messageSends: ["new", "color:", "white", "add:", "@", "do:", "to:by:do:", "from:to:", "-", "+", "alpha:", "blue", "addShape:", "text:", "black", "position:", "angleInDegree:", "open"],
referencedClasses: ["TRCanvas", "Color", "OrderedCollection", "TRBoxShape", "TRRotatedLabelShape"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "fixedRec",
category: 'examples',
fn: function () {
var self=this;
var c,r1,r2,colors;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $TRMouseClick(){return smalltalk.TRMouseClick||(typeof TRMouseClick=="undefined"?nil:TRMouseClick)}
function $TRMouseDragging(){return smalltalk.TRMouseDragging||(typeof TRMouseDragging=="undefined"?nil:TRMouseDragging)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
r1=_st(c)._buildRectangle_color_(_st((0).__at((0)))._extent_((150).__at((75))),_st($Color())._red());
r2=_st(c)._buildRectangle_color_(_st((0).__at((0)))._extent_((130).__at((50))),_st($Color())._lightGreen());
_st(c)._buildLineFrom_to_color_((50).__at((50)),(80).__at((80)),_st($Color())._lightGreen());
colors=_st($Array())._with_with_with_(_st($Color())._red(),_st($Color())._blue(),_st($Color())._white());
_st(r1)._when_do_($TRMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(event)._shape())._color_(_st(colors)._atRandom());
return _st(c)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(r2)._when_do_($TRMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(r2)._color_(_st(colors)._atRandom());
return _st(c)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(r2)._setAsFixed();
_st(c)._when_do_($TRMouseDragging(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(_st(c)._camera())._translateBy_(_st(_st(event)._step())._negated());
return _st(c)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"fixedRec",{c:c,r1:r1,r2:r2,colors:colors},smalltalk.TRCanvasExample)});},
args: [],
source: "fixedRec\x0a\x09\x22\x0a\x09self new fixedRec\x0a\x09\x22\x0a\x0a\x09| c r1 r2 colors |\x0a\x09c := TRCanvas new.\x0a\x09r1 := c buildRectangle: ((0 @ 0) extent: (150 @ 75)) color: Color red.\x0a\x09r2 := c buildRectangle: ((0 @ 0) extent: (130 @ 50)) color: Color lightGreen.\x0a\x09c buildLineFrom: 50 @ 50 to: 80 @ 80 color: Color lightGreen.\x0a\x09\x0a\x09colors := Array with: Color red with: Color blue with: Color white.\x0a\x09r1 when: TRMouseClick do: [ :event | event shape color: colors atRandom. c signalUpdate ].\x0a\x09r2 when: TRMouseClick do: [ :event | r2 color: colors atRandom. c signalUpdate ].\x09\x0a\x09\x09\x0a\x09r2 setAsFixed.\x0a\x09\x0a\x09c when: TRMouseDragging do: [ :event | c camera translateBy: event step negated. c signalUpdate ].\x0a\x09c open",
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "lightGreen", "buildLineFrom:to:color:", "with:with:with:", "blue", "white", "when:do:", "color:", "atRandom", "shape", "signalUpdate", "setAsFixed", "translateBy:", "negated", "step", "camera", "open"],
referencedClasses: ["TRCanvas", "Color", "Array", "TRMouseClick", "TRMouseDragging"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'examples',
fn: function () {
var self=this;
var c;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
c=_st($TRCanvas())._new();
_st(c)._addShape_(_st(_st($TRLabelShape())._new())._fontSize_((5)));
$1=_st($TRLabelShape())._new();
_st($1)._fontSize_((25));
$2=_st($1)._position_((20).__at((20)));
_st(c)._addShape_($2);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"label",{c:c},smalltalk.TRCanvasExample)});},
args: [],
source: "label\x0a\x09\x22\x0a\x09self new label\x0a\x09\x22\x0a\x09| c |\x0a\x09c := TRCanvas new.\x0a\x09c addShape: (TRLabelShape new fontSize: 5).\x0a\x09c addShape: (TRLabelShape new fontSize: 25; position: 20 @ 20).\x0a\x09c open",
messageSends: ["new", "addShape:", "fontSize:", "position:", "@", "open"],
referencedClasses: ["TRCanvas", "TRLabelShape"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "menu1",
category: 'menu',
fn: function () {
var self=this;
var canvas;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
canvas=_st($TRCanvas())._new();
_st(canvas)._addMenu_callback_("+ box",(function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($TRBoxShape())._new();
_st($1)._color_(_st(_st($Color())._purple())._alpha_((0.1)));
$2=_st($1)._from_extent_(_st((400)._atRandom()).__at((400)._atRandom()),_st((100)._atRandom()).__at((100)._atRandom()));
_st(canvas)._addShape_($2);
return _st(canvas)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(canvas)._addMenu_callback_("+ circle",(function(){
return smalltalk.withContext(function($ctx2) {
$3=_st($TREllipseShape())._new();
_st($3)._color_(_st(_st($Color())._blue())._alpha_((0.1)));
$4=_st($3)._from_extent_(_st((400)._atRandom()).__at((400)._atRandom()),_st((100)._atRandom()).__at((100)._atRandom()));
_st(canvas)._addShape_($4);
return _st(canvas)._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(canvas)._camera())._translateTo_((250).__at((250)));
_st(canvas)._open();
return self}, function($ctx1) {$ctx1.fill(self,"menu1",{canvas:canvas},smalltalk.TRCanvasExample)});},
args: [],
source: "menu1\x0a\x09\x22\x0a\x09self new menu1\x0a\x09\x22\x0a\x09| canvas |\x0a\x09canvas := TRCanvas new.\x0a\x09canvas addMenu: '+ box' callback: [ canvas addShape: (TRBoxShape new color: (Color purple alpha: 0.1); from: (400 atRandom @ 400 atRandom) extent: (100 atRandom @ 100 atRandom)). canvas signalUpdate ].\x0a\x0a\x09canvas addMenu: '+ circle' callback: [ canvas addShape: (TREllipseShape new color: (Color blue alpha: 0.1); from: (400 atRandom @ 400 atRandom) extent: (100 atRandom @ 100 atRandom)). canvas signalUpdate ].\x09\x0a\x09canvas camera translateTo: 250 @ 250.\x0a\x09canvas open",
messageSends: ["new", "addMenu:callback:", "addShape:", "color:", "alpha:", "purple", "from:extent:", "@", "atRandom", "signalUpdate", "blue", "translateTo:", "camera", "open"],
referencedClasses: ["TRCanvas", "Color", "TRBoxShape", "TREllipseShape"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "rec1",
category: 'examples',
fn: function () {
var self=this;
var c;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
_st(c)._buildRectangle_color_(_st((50).__at((50)))._extent_((150).__at((75))),_st($Color())._red());
_st(c)._buildRectangle_color_(_st((80).__at((80)))._extent_((150).__at((75))),_st($Color())._lightGreen());
_st(c)._buildLineFrom_to_color_((50).__at((50)),(80).__at((80)),_st($Color())._lightGreen());
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"rec1",{c:c},smalltalk.TRCanvasExample)});},
args: [],
source: "rec1\x0a\x09\x22\x0a\x09self new rec1\x0a\x09\x22\x0a\x0a\x09| c |\x0a\x09c := TRCanvas new.\x0a\x09c buildRectangle: ((50 @ 50) extent: (150 @ 75)) color: Color red.\x0a\x09c buildRectangle: ((80 @ 80) extent: (150 @ 75)) color: Color lightGreen.\x0a\x09c buildLineFrom: 50 @ 50 to: 80 @ 80 color: Color lightGreen.\x0a\x09c open",
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "lightGreen", "buildLineFrom:to:color:", "open"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'examples',
fn: function () {
var self=this;
var c,label,rec;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
label=_st($TRLabelShape())._new();
rec=_st(_st($TRBoxShape())._new())._color_(_st($Color())._white());
_st(rec)._fromRectangle_(_st(label)._encompassingRectangle());
_st(c)._addShape_(rec);
_st(c)._addShape_(label);
_st(c)._open();
return self}, function($ctx1) {$ctx1.fill(self,"text",{c:c,label:label,rec:rec},smalltalk.TRCanvasExample)});},
args: [],
source: "text\x0a\x09\x22\x0a\x09self new text\x0a\x09\x22\x0a\x09| c label rec |\x0a\x09c := TRCanvas new.\x0a\x09label := TRLabelShape new.\x0a\x09rec := TRBoxShape new color: Color white.\x0a\x09rec fromRectangle: label encompassingRectangle.\x0a\x09c addShape: rec.\x0a\x09c addShape: label.\x0a\x09c open",
messageSends: ["new", "color:", "white", "fromRectangle:", "encompassingRectangle", "addShape:", "open"],
referencedClasses: ["TRCanvas", "TRLabelShape", "Color", "TRBoxShape"]
}),
smalltalk.TRCanvasExample);



smalltalk.addClass('TRConstraint', smalltalk.TRObject, [], 'Trachel-Core');
smalltalk.TRConstraint.comment="A ROConstraint is a utility class that contains methods to position elements against others.";

smalltalk.addMethod(
smalltalk.method({
selector: "move:above:",
category: 'util',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__minus((0).__at(_st(_st(_st(anotherShape)._height()).__plus(_st(aShape)._height())).__slash((2)))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:above:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "move: aShape above: anotherShape\x0a\x09^ aShape translateTo: anotherShape center - (0 @ ((anotherShape height + aShape height) / 2))",
messageSends: ["translateTo:", "-", "@", "/", "+", "height", "center"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:below:",
category: 'util',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__plus((0).__at(_st(_st(_st(anotherShape)._height()).__plus(_st(aShape)._height())).__slash((2)))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:below:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "move: aShape below: anotherShape\x0a\x09^ aShape translateTo: anotherShape center + (0 @ ((anotherShape height + aShape height) / 2))",
messageSends: ["translateTo:", "+", "@", "/", "height", "center"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:between:and:",
category: 'util',
fn: function (aShape, s1, s2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(_st(s1)._position()).__plus(_st(s2)._position())).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:between:and:",{aShape:aShape,s1:s1,s2:s2},smalltalk.TRConstraint.klass)});},
args: ["aShape", "s1", "s2"],
source: "move: aShape between: s1 and: s2\x0a\x09^ aShape translateTo: (s1 position + s2 position) /2",
messageSends: ["translateTo:", "/", "+", "position"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheCenterOf:",
category: 'util',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(anotherShape)._center());
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheCenterOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "move: aShape onTheCenterOf: anotherShape\x0a\x09^ aShape translateTo: anotherShape center",
messageSends: ["translateTo:", "center"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftOf:",
category: 'util',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__minus(_st(_st(_st(_st(_st(anotherShape)._width()).__slash((2)))._rounded()).__plus(_st(_st(aShape)._width()).__slash((2)._rounded()))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "move: aShape onTheLeftOf: anotherShape\x0a\x09^ aShape translateTo: anotherShape center - ((((anotherShape width/2) rounded) + (aShape width/2 rounded)) @ 0)",
messageSends: ["translateTo:", "-", "@", "+", "/", "rounded", "width", "center"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightOf:",
category: 'util',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__plus(_st(_st(_st(_st(_st(anotherShape)._width()).__slash((2)))._rounded()).__plus(_st(_st(aShape)._width()).__slash((2)._rounded()))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "move: aShape onTheRightOf: anotherShape\x0a\x09^ aShape translateTo: anotherShape center + ((((anotherShape width/2) rounded) + (aShape width/2 rounded)) @ 0)",
messageSends: ["translateTo:", "+", "@", "/", "rounded", "width", "center"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheBottomOfTheWindow:",
category: 'util',
fn: function (trachelShape) {
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(trachelShape)._canvas())._extent();
_st(trachelShape)._translateTo_(_st(_st(_st(trachelShape)._width()).__slash((2))).__at(_st(_st(windowSize)._y()).__minus(_st(_st(trachelShape)._height()).__slash((2)))));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheBottomOfTheWindow:",{trachelShape:trachelShape,windowSize:windowSize},smalltalk.TRConstraint.klass)});},
args: ["trachelShape"],
source: "moveAtTheBottomOfTheWindow: trachelShape\x0a\x0a\x09| windowSize |\x0a\x09windowSize := trachelShape canvas extent.\x0a\x09trachelShape translateTo: ((trachelShape width / 2) @ (windowSize y - (trachelShape height / 2)))",
messageSends: ["extent", "canvas", "translateTo:", "@", "-", "/", "height", "y", "width"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveCameraToTheRightIn:",
category: 'camera',
fn: function (trachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(trachelCanvas)._camera())._translateTo_(_st(_st(_st(_st(trachelCanvas)._extent())._x()).__slash((-2))).__at(_st(_st(_st(trachelCanvas)._camera())._position())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveCameraToTheRightIn:",{trachelCanvas:trachelCanvas},smalltalk.TRConstraint.klass)});},
args: ["trachelCanvas"],
source: "moveCameraToTheRightIn: trachelCanvas\x0a\x09^ trachelCanvas camera translateTo: (trachelCanvas extent x / -2) @ trachelCanvas camera position y",
messageSends: ["translateTo:", "@", "y", "position", "camera", "/", "x", "extent"],
referencedClasses: []
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:above:",
category: 'public',
fn: function (aShape, anotherShape) {
var self=this;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_above_(aShape,anotherShape);
_st(anotherShape)._addCallback_(_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_above_(aShape,anotherShape);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"stick:above:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "stick: aShape above: anotherShape\x0a\x09self move: aShape above: anotherShape. \x0a\x09anotherShape addCallback: \x0a\x09\x09(TRTranslationCallback block: [ :shape :step | self move: aShape above: anotherShape ])",
messageSends: ["move:above:", "addCallback:", "block:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:below:",
category: 'public',
fn: function (aShape, anotherShape) {
var self=this;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_below_(aShape,anotherShape);
_st(anotherShape)._addCallback_(_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_below_(aShape,anotherShape);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"stick:below:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "stick: aShape below: anotherShape\x0a\x09self move: aShape below: anotherShape. \x0a\x09anotherShape addCallback: \x0a\x09\x09(TRTranslationCallback block: [ :shape :step | self move: aShape below: anotherShape ])",
messageSends: ["move:below:", "addCallback:", "block:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:between:and:",
category: 'public',
fn: function (aShape, s1, s2) {
var self=this;
var callback;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_between_and_(aShape,s1,s2);
callback=_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_between_and_(aShape,s1,s2);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})}));
_st(s1)._addCallback_(callback);
_st(s2)._addCallback_(callback);
return self}, function($ctx1) {$ctx1.fill(self,"stick:between:and:",{aShape:aShape,s1:s1,s2:s2,callback:callback},smalltalk.TRConstraint.klass)});},
args: ["aShape", "s1", "s2"],
source: "stick: aShape between: s1 and: s2\x0a\x09| callback |\x0a\x09self move: aShape between: s1 and: s2.\x0a\x09\x0a\x09callback := TRTranslationCallback block: [ :shape :step | self move: aShape between: s1 and: s2 ].\x0a\x09s1 addCallback: callback.\x0a\x09s2 addCallback: callback",
messageSends: ["move:between:and:", "block:", "addCallback:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheCenterOf:",
category: 'public',
fn: function (aShape, anotherShape) {
var self=this;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheCenterOf_(aShape,anotherShape);
_st(anotherShape)._addCallback_(_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheCenterOf_(aShape,anotherShape);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheCenterOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "stick: aShape onTheCenterOf: anotherShape\x0a\x09self move: aShape onTheCenterOf: anotherShape. \x0a\x09anotherShape addCallback: \x0a\x09\x09(TRTranslationCallback block: [ :shape :step | self move: aShape onTheCenterOf: anotherShape ])",
messageSends: ["move:onTheCenterOf:", "addCallback:", "block:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftOf:",
category: 'public',
fn: function (aShape, anotherShape) {
var self=this;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheLeftOf_(aShape,anotherShape);
_st(anotherShape)._addCallback_(_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheLeftOf_(aShape,anotherShape);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheLeftOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "stick: aShape onTheLeftOf: anotherShape\x0a\x09self move: aShape onTheLeftOf: anotherShape. \x0a\x09anotherShape addCallback: \x0a\x09\x09(TRTranslationCallback block: [ :shape :step | self move: aShape onTheLeftOf: anotherShape ])",
messageSends: ["move:onTheLeftOf:", "addCallback:", "block:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightOf:",
category: 'public',
fn: function (aShape, anotherShape) {
var self=this;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._move_onTheRightOf_(aShape,anotherShape);
_st(anotherShape)._addCallback_(_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
return self._move_onTheRightOf_(aShape,anotherShape);
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"stick:onTheRightOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
args: ["aShape", "anotherShape"],
source: "stick: aShape onTheRightOf: anotherShape\x0a\x09self move: aShape onTheRightOf: anotherShape. \x0a\x09anotherShape addCallback: \x0a\x09\x09(TRTranslationCallback block: [ :shape :step | self move: aShape onTheRightOf: anotherShape ])",
messageSends: ["move:onTheRightOf:", "addCallback:", "block:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheBottomOfTheWindow:",
category: 'public',
fn: function (trachelShape) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(trachelShape)._canvas())._when_do_($TRResizeCanvasEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtTheBottomOfTheWindow_(trachelShape);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtTheBottomOfTheWindow:",{trachelShape:trachelShape},smalltalk.TRConstraint.klass)});},
args: ["trachelShape"],
source: "stickAtTheBottomOfTheWindow: trachelShape\x0a\x09trachelShape canvas\x0a\x09\x09when: TRResizeCanvasEvent\x0a\x09\x09do: [ :event | self moveAtTheBottomOfTheWindow: trachelShape ]",
messageSends: ["when:do:", "moveAtTheBottomOfTheWindow:", "canvas"],
referencedClasses: ["TRResizeCanvasEvent"]
}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickCameraToTheRightIn:",
category: 'camera',
fn: function (trachelCanvas) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(trachelCanvas)._when_do_($TRResizeCanvasEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveCameraToTheRightIn_(trachelCanvas);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickCameraToTheRightIn:",{trachelCanvas:trachelCanvas},smalltalk.TRConstraint.klass)});},
args: ["trachelCanvas"],
source: "stickCameraToTheRightIn: trachelCanvas\x0a\x09trachelCanvas\x0a\x09\x09when: TRResizeCanvasEvent\x0a\x09\x09do: [ :event | self moveCameraToTheRightIn: trachelCanvas ]",
messageSends: ["when:do:", "moveCameraToTheRightIn:"],
referencedClasses: ["TRResizeCanvasEvent"]
}),
smalltalk.TRConstraint.klass);


smalltalk.addClass('TRFocusing', smalltalk.TRObject, [], 'Trachel-Core');
smalltalk.TRFocusing.comment="A TRFocusing is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
category: 'utility',
fn: function (shapes) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
var $1;
encompassingRectangle=_st(_st(shapes)._anyOne())._encompassingRectangle();
_st(shapes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
encompassingRectangle=_st(encompassingRectangle)._merge_(_st(e)._encompassingRectangle());
return encompassingRectangle;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=encompassingRectangle;
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangleOf:",{shapes:shapes,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusing)});},
args: ["shapes"],
source: "encompassingRectangleOf: shapes\x0a\x09| encompassingRectangle |\x0a\x09encompassingRectangle := shapes anyOne encompassingRectangle.\x0a\x09shapes do: [ :e | encompassingRectangle := encompassingRectangle merge: e encompassingRectangle ].\x0a\x09^ encompassingRectangle",
messageSends: ["encompassingRectangle", "anyOne", "do:", "merge:"],
referencedClasses: []
}),
smalltalk.TRFocusing);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'hooks',
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas},smalltalk.TRFocusing)});},
args: ["canvas"],
source: "on: canvas\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TRFocusing);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._on_(canvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas},smalltalk.TRFocusing.klass)});},
args: ["canvas"],
source: "on: canvas\x0a\x09^ self new on: canvas",
messageSends: ["on:", "new"],
referencedClasses: []
}),
smalltalk.TRFocusing.klass);


smalltalk.addClass('TRFocusCenter', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.TRFocusCenter.comment="A TRFocusCenter is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'hooks',
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._center());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusCenter)});},
args: ["canvas"],
source: "on: canvas\x0a\x09| encompassingRectangle  |\x0a\x09encompassingRectangle := self encompassingRectangleOf: canvas shapes.\x0a\x09canvas camera translateTo: encompassingRectangle center.",
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "center", "camera"],
referencedClasses: []
}),
smalltalk.TRFocusCenter);



smalltalk.addClass('TRFocusTopLeft', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.TRFocusTopLeft.comment="A TRFocusTopLeft is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'hooks',
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._topLeft());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusTopLeft)});},
args: ["canvas"],
source: "on: canvas\x0a\x09| encompassingRectangle |\x0a\x09encompassingRectangle := self encompassingRectangleOf: canvas shapes.\x0a\x09canvas camera translateTo: encompassingRectangle topLeft",
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "topLeft", "camera"],
referencedClasses: []
}),
smalltalk.TRFocusTopLeft);



smalltalk.addClass('TRFocusTopRight', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.TRFocusTopRight.comment="A TRFocusTopRight is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'hooks',
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._topRight());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusTopRight)});},
args: ["canvas"],
source: "on: canvas\x0a\x09| encompassingRectangle |\x0a\x09encompassingRectangle := self encompassingRectangleOf: canvas shapes. \x0a\x09canvas camera translateTo: encompassingRectangle topRight",
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "topRight", "camera"],
referencedClasses: []
}),
smalltalk.TRFocusTopRight);



smalltalk.addClass('TRShape', smalltalk.TRObject, ['canvas', 'color', 'path', 'strokePaint', 'announcer', 'element', 'callbacks', 'position'], 'Trachel-Core');
smalltalk.TRShape.comment="A TRShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09announcer:\x09\x09<Object>\x0a\x09callbacks:\x09\x09<Object>\x0a\x09canvas:\x09\x09<Object>\x0a\x09color:\x09\x09<Object>\x0a\x09element:\x09\x09<Object>\x0a\x09path:\x09\x09<Object>\x0a\x09position:\x09\x09<Object>\x0a\x09strokePaint:\x09\x09<Object>\x0a\x0aannouncer\x0a\x09- xxxxx\x0a\x0acallbacks\x0a\x09- xxxxx\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0acolor\x0a\x09- xxxxx\x0a\x0aelement\x0a\x09- xxxxx\x0a\x0apath\x0a\x09- xxxxx\x0a\x0aposition\x0a\x09- xxxxx\x0a\x0astrokePaint\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
category: 'actions',
fn: function (aCallback) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@callbacks"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@callbacks"]=_st($OrderedCollection())._new();
self["@callbacks"];
} else {
$1;
};
_st(self["@callbacks"])._add_(aCallback);
return self}, function($ctx1) {$ctx1.fill(self,"addCallback:",{aCallback:aCallback},smalltalk.TRShape)});},
args: ["aCallback"],
source: "addCallback: aCallback\x0a\x09callbacks ifNil: [ callbacks := OrderedCollection new ].\x0a\x09callbacks add: aCallback",
messageSends: ["ifNil:", "new", "add:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'actions',
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._privateAdd_(self);
self._canvas_(aCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRShape)});},
args: ["aCanvas"],
source: "addedIn: aCanvas\x0a\x09aCanvas privateAdd: self.\x0a\x09self canvas: aCanvas",
messageSends: ["privateAdd:", "canvas:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
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
category: 'events',
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
category: 'events',
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
selector: "athensCanvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._canvas())._athensCanvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"athensCanvas",{},smalltalk.TRShape)});},
args: [],
source: "athensCanvas\x0a\x09^ self canvas athensCanvas",
messageSends: ["athensCanvas", "canvas"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TRShape)});},
args: [],
source: "canvas\x0a\x09\x22Return a Trachel Canvas\x22\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aSurface) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRShape)});},
args: ["aSurface"],
source: "canvas: aSurface\x0a\x09\x22aCanvas is a AthensCairoSurface\x22\x0a\x09canvas := aSurface",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRShape)});},
args: [],
source: "center\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRShape)});},
args: [],
source: "color\x0a\x09\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRShape)});},
args: ["aColor"],
source: "color: aColor\x0a\x09\x0a\x09color := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRShape)});},
args: [],
source: "computePath\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawEncompassingRectangleOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._drawEncompassingRectangleOn_color_(athensCanvas,_st(_st($Color())._blue())._alpha_((0.2)));
return self}, function($ctx1) {$ctx1.fill(self,"drawEncompassingRectangleOn:",{athensCanvas:athensCanvas},smalltalk.TRShape)});},
args: ["athensCanvas"],
source: "drawEncompassingRectangleOn: athensCanvas\x0a\x09\x22debugging purpose\x22\x0a\x09self drawEncompassingRectangleOn: athensCanvas color: (Color blue alpha: 0.2)",
messageSends: ["drawEncompassingRectangleOn:color:", "alpha:", "blue"],
referencedClasses: ["Color"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawEncompassingRectangleOn:color:",
category: 'drawing',
fn: function (athensCanvas, aColor) {
var self=this;
var r,tpath;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
r=self._encompassingRectangle();
tpath=_st(athensCanvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_(_st(r)._topLeft());
_st($1)._lineTo_(_st(r)._topRight());
_st($1)._lineTo_(_st(r)._bottomRight());
_st($1)._lineTo_(_st(r)._bottomLeft());
$2=_st($1)._lineTo_(_st(r)._topLeft());
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$3=athensCanvas;
_st($3)._setPaint_(aColor);
$4=_st($3)._drawShape_(tpath);
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawEncompassingRectangleOn:color:",{athensCanvas:athensCanvas,aColor:aColor,r:r,tpath:tpath},smalltalk.TRShape)});},
args: ["athensCanvas", "aColor"],
source: "drawEncompassingRectangleOn: athensCanvas color: aColor\x0a\x09\x22debugging purpose\x22\x0a \x09| r tpath |\x0a\x09r := self encompassingRectangle.\x0a\x09tpath := athensCanvas\x0a\x09\x09\x09\x09createPath: [ :builder | \x0a\x09\x09\x09\x09\x09builder absolute; moveTo: r topLeft; lineTo: r topRight; \x0a\x09\x09\x09\x09\x09\x09\x09lineTo: r bottomRight; lineTo: r bottomLeft; lineTo: r topLeft ].\x0a\x09athensCanvas pathTransform\x0a\x09\x09restoreAfter: [ \x0a\x09\x09\x09athensCanvas\x0a\x09\x09\x09\x09setPaint: aColor;\x0a\x09\x09\x09\x09drawShape: tpath ].",
messageSends: ["encompassingRectangle", "createPath:", "absolute", "moveTo:", "topLeft", "lineTo:", "topRight", "bottomRight", "bottomLeft", "restoreAfter:", "setPaint:", "drawShape:", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$1=athensCanvas;
_st($1)._setPaint_(self["@color"]);
$2=_st($1)._drawShape_(self._path());
$2;
$3=athensCanvas;
_st($3)._setStrokePaint_(self["@strokePaint"]);
$4=_st($3)._drawShape_(self._path());
return $4;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setPaint: color;\x0a\x09\x09\x09drawShape: self path.\x0a\x09\x09\x09\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setStrokePaint: strokePaint;\x0a\x09\x09\x09drawShape: self path  ]",
messageSends: ["restoreAfter:", "setPaint:", "drawShape:", "path", "setStrokePaint:", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRShape)});},
args: [],
source: "element\x0a\x09\x22A shape has a reference to an object, typically the object odel that the trachel shape represents\x22\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRShape)});},
args: ["anObject"],
source: "element: anObject\x0a\x09\x22anObject could be any kind of object. A shape has a reference to an object, typically the object odel that the trachel shape represents\x22\x0a\x09element := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRShape)});},
args: [],
source: "encompassingRectangle\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'actions',
fn: function (anExtent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.TRShape)});},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09\x22do nothing here. This method may be overriden for particular behavior\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "hasCallback",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@callbacks"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasCallback",{},smalltalk.TRShape)});},
args: [],
source: "hasCallback\x0a\x09^ callbacks notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st($Color())._gray();
self["@strokePaint"]=_st($Color())._black();
self["@position"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09color := Color gray.\x0a\x09strokePaint := Color black.\x09 \x0a\x09position := 0 @ 0.",
messageSends: ["initialize", "gray", "black", "@"],
referencedClasses: ["Color"]
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixed",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._canvas())._fixedShapes())._includes_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixed",{},smalltalk.TRShape)});},
args: [],
source: "isFixed\x0a\x0a\x09^ self canvas fixedShapes includes: self",
messageSends: ["includes:", "fixedShapes", "canvas"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isInACanvas",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@canvas"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInACanvas",{},smalltalk.TRShape)});},
args: [],
source: "isInACanvas\x0a\x09^ canvas notNil",
messageSends: ["notNil"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isMovable",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._canvas())._isMovableShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMovable",{},smalltalk.TRShape)});},
args: [],
source: "isMovable\x0a\x0a\x09^ self canvas isMovableShape: self",
messageSends: ["isMovableShape:", "canvas"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotFixed",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isMovable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotFixed",{},smalltalk.TRShape)});},
args: [],
source: "isNotFixed\x0a\x0a\x09^ self isMovable",
messageSends: ["isMovable"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@path"];
if(($receiver = $1) == nil || $receiver == undefined){
self._computePath();
} else {
$1;
};
$2=self["@path"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"path",{},smalltalk.TRShape)});},
args: [],
source: "path\x0a\x09path ifNil: [ self computePath ].\x0a\x09^ path",
messageSends: ["ifNil:", "computePath"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRShape)});},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBack",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._pushBack_(self);
return self}, function($ctx1) {$ctx1.fill(self,"pushBack",{},smalltalk.TRShape)});},
args: [],
source: "pushBack\x0a\x09canvas pushBack: self",
messageSends: ["pushBack:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBehind:",
category: 'actions',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._push_behind_(self,aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushBehind:",{aShape:aShape},smalltalk.TRShape)});},
args: ["aShape"],
source: "pushBehind: aShape\x0a\x09canvas push: self behind: aShape",
messageSends: ["push:behind:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBehindAll:",
category: 'actions',
fn: function (manyShapes) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._push_behindAll_(self,manyShapes);
return self}, function($ctx1) {$ctx1.fill(self,"pushBehindAll:",{manyShapes:manyShapes},smalltalk.TRShape)});},
args: ["manyShapes"],
source: "pushBehindAll: manyShapes\x0a\x09canvas push: self behindAll: manyShapes",
messageSends: ["push:behindAll:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushFront",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._pushFront_(self);
return self}, function($ctx1) {$ctx1.fill(self,"pushFront",{},smalltalk.TRShape)});},
args: [],
source: "pushFront\x0a\x09canvas pushFront: self",
messageSends: ["pushFront:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._isInACanvas();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(self["@canvas"])._removeShape_(self);
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TRShape)});},
args: [],
source: "remove\x0a\x09\x22Return true if I am in a canvas\x22\x0a\x09\x0a\x09\x22Do nothing if the line is not already in a canvas\x22\x0a\x09self isInACanvas ifFalse: [ ^ self ]. \x0a\x09canvas removeShape: self",
messageSends: ["ifFalse:", "isInACanvas", "removeShape:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPath",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetPath",{},smalltalk.TRShape)});},
args: [],
source: "resetPath\x0a\x09path := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsFixed",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("You should first insert the shape in the canvas before setting it as fixed");
} else {
$1;
};
_st(self["@canvas"])._setAsFixed_(self);
return self}, function($ctx1) {$ctx1.fill(self,"setAsFixed",{},smalltalk.TRShape)});},
args: [],
source: "setAsFixed\x0a\x09canvas ifNil: [ self error: 'You should first insert the shape in the canvas before setting it as fixed'. ].\x0a\x09canvas setAsFixed: self.",
messageSends: ["ifNil:", "error:", "setAsFixed:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsNotFixed",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._removeFixedShape_(self);
_st(self["@canvas"])._addShape_(self);
return self}, function($ctx1) {$ctx1.fill(self,"setAsNotFixed",{},smalltalk.TRShape)});},
args: [],
source: "setAsNotFixed\x0a\x09canvas removeFixedShape: self.\x0a\x09canvas addShape: self.",
messageSends: ["removeFixedShape:", "addShape:"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeDrawn",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"shouldBeDrawn",{},smalltalk.TRShape)});},
args: [],
source: "shouldBeDrawn\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@canvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@canvas"])._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TRShape)});},
args: [],
source: "signalUpdate\x0a\x09\x22Refresh the canvas\x22\x0a\x09canvas ifNil: [ ^ self ].\x0a\x09canvas signalUpdate",
messageSends: ["ifNil:", "signalUpdate"],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strokePaint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"strokePaint",{},smalltalk.TRShape)});},
args: [],
source: "strokePaint\x0a\x09\x22Return the color of the border line\x22\x0a\x09^ strokePaint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.TRShape)});},
args: ["aColor"],
source: "strokePaint: aColor\x0a\x09\x22set the color of the border line\x22\x0a\x09strokePaint := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
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
category: 'actions',
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
selector: "when:do:",
category: 'events',
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRShape)});},
args: ["event", "aBlock"],
source: "when: event do: aBlock\x0a\x09self announcer when: event do: aBlock",
messageSends: ["when:do:", "announcer"],
referencedClasses: []
}),
smalltalk.TRShape);



smalltalk.addClass('TRAbstractBoxShape', smalltalk.TRShape, ['rectangle'], 'Trachel-Core');
smalltalk.TRAbstractBoxShape.comment="A TRAbstractBoxShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09rectangle:\x09\x09<Object>\x0a\x0arectangle\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "center\x0a\x09^ self position",
messageSends: ["position"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@canvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$3=builder;
_st($3)._absolute();
_st($3)._moveTo_(_st(self["@rectangle"])._topLeft());
_st($3)._lineTo_(_st(self["@rectangle"])._topRight());
_st($3)._lineTo_(_st(self["@rectangle"])._bottomRight());
_st($3)._lineTo_(_st(self["@rectangle"])._bottomLeft());
$4=_st($3)._lineTo_(_st(self["@rectangle"])._topLeft());
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "computePath\x0a\x09canvas ifNil: [ ^ self ].\x0a\x09path := self athensCanvas\x0a\x09\x09createPath: [ :builder | \x0a\x09\x09\x09builder\x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: rectangle topLeft;\x0a\x09\x09\x09\x09lineTo: rectangle topRight;\x0a\x09\x09\x09\x09lineTo: rectangle bottomRight;\x0a\x09\x09\x09\x09lineTo: rectangle bottomLeft;\x0a\x09\x09\x09\x09lineTo: rectangle topLeft.\x0a\x09\x09\x09\x09\x22moveTo: -1 @ -1;\x0a\x09\x09\x09\x09lineTo: 1 @ -1;\x0a\x09\x09\x09\x09lineTo: 1 @ 1;\x0a\x09\x09\x09\x09lineTo: -1 @ 1;\x0a\x09\x09\x09\x09lineTo: -1 @ -1\x22 ]",
messageSends: ["ifNil:", "createPath:", "absolute", "moveTo:", "topLeft", "lineTo:", "topRight", "bottomRight", "bottomLeft", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._shouldBeDrawn();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$3=athensCanvas;
_st($3)._setPaint_(self["@color"]);
$4=_st($3)._drawShape_(self._path());
$4;
return self._drawStrokeIfNecessaryOn_(athensCanvas);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRAbstractBoxShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09self shouldBeDrawn\x0a\x09\x09ifFalse: [ ^ self ].\x0a\x09athensCanvas pathTransform\x0a\x09\x09restoreAfter: [ \x0a\x09\x09\x09\x22athensCanvas pathTransform\x0a\x09\x09\x09\x09translateBy: rectangle center;\x0a\x09\x09\x09\x09scaleBy: rectangle extent / 2.\x22\x0a\x09\x09\x09athensCanvas\x0a\x09\x09\x09\x09setPaint: color;\x0a\x09\x09\x09\x09drawShape: self path.\x0a\x09\x09\x09self drawStrokeIfNecessaryOn: athensCanvas ]",
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessaryOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
var scale;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
scale=_st(_st(self._canvas())._camera())._scale();
$2=self["@strokePaint"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=$2;
} else {
_st(_st(athensCanvas)._setStrokePaint_(self["@strokePaint"]))._width_(_st((1.5).__slash(scale))._asInteger());
$1=_st(athensCanvas)._drawShape_(self["@path"]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"drawStrokeIfNecessaryOn:",{athensCanvas:athensCanvas,scale:scale},smalltalk.TRAbstractBoxShape)});},
args: ["athensCanvas"],
source: "drawStrokeIfNecessaryOn: athensCanvas\x0a\x09| scale |\x0a\x09scale := self canvas camera scale.\x0a\x09^ strokePaint\x0a\x09\x09ifNotNil: [ \x0a\x09\x09\x09\x224 / (rectangle extent x + 10)\x22\x0a\x09\x09\x09(athensCanvas setStrokePaint: strokePaint) width: (1.5 / (scale )) asInteger.\x0a\x09\x09\x09athensCanvas drawShape: path ]",
messageSends: ["scale", "camera", "canvas", "ifNotNil:", "width:", "asInteger", "/", "setStrokePaint:", "drawShape:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rectangle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^ self rectangle",
messageSends: ["rectangle"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._rectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "extent\x0a\x09^ self rectangle extent",
messageSends: ["extent", "rectangle"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'geometry',
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
center=_st(self["@rectangle"])._center();
self["@rectangle"]=_st(_st(center).__minus(_st(anExtent).__slash((2))))._extent_(anExtent);
self._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent,center:center},smalltalk.TRAbstractBoxShape)});},
args: ["anExtent"],
source: "extent: anExtent\x0a\x09| center |\x0a\x09anExtent = self extent ifTrue: [ ^ self ].\x0a\x09center := rectangle center.\x0a\x09rectangle := (center - (anExtent / 2)) extent: anExtent.\x0a\x09self resetPath",
messageSends: ["ifTrue:", "=", "extent", "center", "extent:", "-", "/", "resetPath"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:extent:",
category: 'public',
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(_st(aPoint)._corner_(_st(aPoint).__plus(anotherPoint)));
return self}, function($ctx1) {$ctx1.fill(self,"from:extent:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint", "anotherPoint"],
source: "from: aPoint extent: anotherPoint \x0a\x09\x0a\x09self fromRectangle: (aPoint corner: (aPoint + anotherPoint))",
messageSends: ["fromRectangle:", "corner:", "+"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'public',
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(_st(aPoint)._corner_(anotherPoint));
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint", "anotherPoint"],
source: "from: aPoint to: anotherPoint \x0a\x09\x0a\x09self fromRectangle: (aPoint corner: anotherPoint)",
messageSends: ["fromRectangle:", "corner:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
category: 'public',
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint", "anotherPoint", "aColor"],
source: "from: aPoint to: anotherPoint color: aColor\x0a\x09self from: aPoint to: anotherPoint.\x0a\x09self color: aColor.",
messageSends: ["from:to:", "color:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangle:",
category: 'public',
fn: function (r) {
var self=this;
var oldTopLeft;
return smalltalk.withContext(function($ctx1) { 
oldTopLeft=_st(self["@rectangle"])._topLeft();
self["@rectangle"]=r;
self["@position"]=_st(self["@rectangle"])._center();
self._triggerCallbacksForStep_(_st(_st(r)._topLeft()).__minus(oldTopLeft));
self._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"fromRectangle:",{r:r,oldTopLeft:oldTopLeft},smalltalk.TRAbstractBoxShape)});},
args: ["r"],
source: "fromRectangle: r\x0a\x09| oldTopLeft |\x0a\x09oldTopLeft := rectangle topLeft.\x0a\x09rectangle := r.\x0a\x09position := rectangle center.\x0a\x09self triggerCallbacksForStep: (r topLeft - oldTopLeft).\x0a\x09self resetPath",
messageSends: ["topLeft", "center", "triggerCallbacksForStep:", "-", "resetPath"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangle:color:",
category: 'public',
fn: function (r, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(r);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"fromRectangle:color:",{r:r,aColor:aColor},smalltalk.TRAbstractBoxShape)});},
args: ["r", "aColor"],
source: "fromRectangle: r color: aColor\x0a\x09self fromRectangle: r.\x0a\x09self color: aColor",
messageSends: ["fromRectangle:", "color:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "height\x0a\x09^ rectangle height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (newHeight) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(_st(self["@position"]).__minus((0).__at(_st(newHeight).__slash((2)))))._extent_(_st(_st(self._extent())._x()).__at(newHeight));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{newHeight:newHeight},smalltalk.TRAbstractBoxShape)});},
args: ["newHeight"],
source: "height: newHeight\x0a\x09rectangle := (position - (0 @ (newHeight / 2))) extent: (self extent x @ newHeight)",
messageSends: ["extent:", "@", "x", "extent", "-", "/"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09^ rectangle containsPoint: aPoint",
messageSends: ["containsPoint:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@rectangle"]=_st(self._class())._nullRectangle();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09rectangle := self class nullRectangle",
messageSends: ["initialize", "nullRectangle", "class"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "leftPosition:",
category: 'public',
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(aPosition).__minus(_st(_st(self._width()).__slash((-2))).__at((0))))._asIntegerPoint());
return self}, function($ctx1) {$ctx1.fill(self,"leftPosition:",{aPosition:aPosition},smalltalk.TRAbstractBoxShape)});},
args: ["aPosition"],
source: "leftPosition: aPosition\x0a\x09self position: (aPosition - ((self width / -2) @ 0) ) asIntegerPoint",
messageSends: ["position:", "asIntegerPoint", "-", "@", "/", "width"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rectangle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "rectangle\x0a\x09^ rectangle",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle:",
category: 'accessing',
fn: function (r) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(r);
return self}, function($ctx1) {$ctx1.fill(self,"rectangle:",{r:r},smalltalk.TRAbstractBoxShape)});},
args: ["r"],
source: "rectangle: r\x0a\x09self fromRectangle: r",
messageSends: ["fromRectangle:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeDrawn",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@rectangle"])._width()).__gt((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(self["@rectangle"])._height()).__gt((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"shouldBeDrawn",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "shouldBeDrawn\x0a\x09^ rectangle width > 0 and: [ rectangle height > 0 ]",
messageSends: ["and:", ">", "height", "width"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (v) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._extent_(_st(v).__at(v));
return $1;
}, function($ctx1) {$ctx1.fill(self,"size:",{v:v},smalltalk.TRAbstractBoxShape)});},
args: ["v"],
source: "size: v\x0a\x09^ self extent: v @ v",
messageSends: ["extent:", "@"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._translateBy_.apply(_st(self), [aPoint]);
self["@rectangle"]=_st(_st(_st(self["@rectangle"])._topLeft()).__plus(aPoint))._extent_(_st(self["@rectangle"])._extent());
self._triggerCallbacksForStep_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09super translateBy: aPoint.\x0a\x09rectangle := (rectangle topLeft + aPoint) extent: rectangle extent.\x0a\x09self triggerCallbacksForStep: aPoint",
messageSends: ["translateBy:", "extent:", "extent", "+", "topLeft", "triggerCallbacksForStep:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'actions',
fn: function (aPoint) {
var self=this;
var oldTopLeft;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._translateTo_.apply(_st(self), [aPoint]);
oldTopLeft=_st(self["@rectangle"])._topLeft();
self["@rectangle"]=_st(_st(aPoint).__minus(_st(self._extent()).__slash((2))))._extent_(self._extent());
self._triggerCallbacksForStep_(_st(_st(self["@rectangle"])._topLeft()).__minus(oldTopLeft));
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint,oldTopLeft:oldTopLeft},smalltalk.TRAbstractBoxShape)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09| oldTopLeft |\x0a\x09super translateTo: aPoint.\x0a\x09oldTopLeft := rectangle topLeft.\x0a\x09rectangle := (aPoint - (self extent / 2)) extent: self extent.\x0a\x09self triggerCallbacksForStep: (rectangle topLeft - oldTopLeft)",
messageSends: ["translateTo:", "topLeft", "extent:", "extent", "-", "/", "triggerCallbacksForStep:"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerCallbacksForStep:",
category: 'actions',
fn: function (aStep) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@callbacks"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@callbacks"])._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._block())._value_value_(self,aStep);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"triggerCallbacksForStep:",{aStep:aStep},smalltalk.TRAbstractBoxShape)});},
args: ["aStep"],
source: "triggerCallbacksForStep: aStep\x0a\x09\x22aStep is a point that represents a translation step\x22\x0a\x09callbacks ifNil: [ ^ self ].\x0a\x09callbacks do: [ :c | c block value: self value: aStep ]",
messageSends: ["ifNil:", "do:", "value:value:", "block"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRAbstractBoxShape)});},
args: [],
source: "width\x0a\x09^ rectangle width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (newWidth) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(_st(self["@position"]).__minus(_st(_st(newWidth).__slash((2))).__at((0))))._extent_(_st(newWidth).__at(_st(self._extent())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{newWidth:newWidth},smalltalk.TRAbstractBoxShape)});},
args: ["newWidth"],
source: "width: newWidth\x0a\x09rectangle := (position - ((newWidth / 2) @ 0)) extent: (newWidth @ self extent y)",
messageSends: ["extent:", "@", "y", "extent", "-", "/"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape);


smalltalk.TRAbstractBoxShape.klass.iVarNames = ['nullRectangle'];
smalltalk.addMethod(
smalltalk.method({
selector: "nullRectangle",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@nullRectangle"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@nullRectangle"];
return $2;
};
self["@nullRectangle"]=_st((0).__at((0)))._extent_((0).__at((0)));
$3=self["@nullRectangle"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"nullRectangle",{},smalltalk.TRAbstractBoxShape.klass)});},
args: [],
source: "nullRectangle\x0a\x09nullRectangle ifNotNil: [ ^ nullRectangle ].\x0a\x09nullRectangle := (0 @ 0) extent: (0 @ 0).\x0a\x09^ nullRectangle",
messageSends: ["ifNotNil:", "extent:", "@"],
referencedClasses: []
}),
smalltalk.TRAbstractBoxShape.klass);


smalltalk.addClass('TRBoxShape', smalltalk.TRAbstractBoxShape, [], 'Trachel-Core');
smalltalk.TRBoxShape.comment="A TRBoxShape is xxxxxxxxx.";


smalltalk.addClass('TREllipseShape', smalltalk.TRAbstractBoxShape, [], 'Trachel-Core');
smalltalk.TREllipseShape.comment="A TREllipseShape is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@canvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$3=builder;
_st($3)._absolute();
_st($3)._moveTo_((0).__at((1)));
_st($3)._ccwArcTo_angle_((1).__at((0)),(90)._degreesToRadians());
_st($3)._ccwArcTo_angle_((0).__at((-1)),(90)._degreesToRadians());
_st($3)._ccwArcTo_angle_((-1).__at((0)),(90)._degreesToRadians());
$4=_st($3)._ccwArcTo_angle_((0).__at((1)),(90)._degreesToRadians());
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TREllipseShape)});},
args: [],
source: "computePath\x0a\x09canvas ifNil: [ ^ self ].\x0a\x09path := self athensCanvas\x0a\x09\x09\x09\x09createPath: [ :builder | \x0a\x09\x09\x09\x09\x09builder\x0a\x09\x09\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x09\x09moveTo: 0 @ 1;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 1.0 @ 0.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 0.0 @ -1.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: -1.0 @ 0.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 0 @ 1.0 angle: 90 degreesToRadians ]\x0a\x22\x09path := canvas\x0a\x09\x09cacheAt: self\x0a\x09\x09ifAbsentPut: [ \x0a\x09\x09\x09canvas\x0a\x09\x09\x09\x09createPath: [ :builder | \x0a\x09\x09\x09\x09\x09builder\x0a\x09\x09\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09\x09\x09moveTo: 0 @ 1;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 1.0 @ 0.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 0.0 @ -1.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: -1.0 @ 0.0 angle: 90 degreesToRadians;\x0a\x09\x09\x09\x09\x09\x09ccwArcTo: 0 @ 1.0 angle: 90 degreesToRadians ] ]\x22",
messageSends: ["ifNil:", "createPath:", "absolute", "moveTo:", "@", "ccwArcTo:angle:", "degreesToRadians", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=self._shouldBeDrawn();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$3=_st(athensCanvas)._pathTransform();
_st($3)._translateBy_(_st(self["@rectangle"])._center());
$4=_st($3)._scaleBy_(_st(_st(self["@rectangle"])._extent()).__slash((2)));
$4;
$5=athensCanvas;
_st($5)._setPaint_(self["@color"]);
$6=_st($5)._drawShape_(self._path());
$6;
return self._drawStrokeIfNecessaryOn_(athensCanvas);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TREllipseShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09self shouldBeDrawn ifFalse: [ ^ self ].\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09athensCanvas pathTransform \x0a\x09\x09\x09translateBy: rectangle center;\x0a\x09\x09\x09scaleBy: rectangle extent / 2.\x0a\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setPaint: color;\x0a\x09\x09\x09drawShape: self path.\x0a\x0a\x09\x09self drawStrokeIfNecessaryOn: athensCanvas\x0a\x09\x09]",
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "translateBy:", "center", "pathTransform", "scaleBy:", "/", "extent", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:"],
referencedClasses: []
}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
category: 'public',
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(aPoint)._corner_(anotherPoint);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TREllipseShape)});},
args: ["aPoint", "anotherPoint", "aColor"],
source: "from: aPoint to: anotherPoint color: aColor\x0a\x09rectangle := aPoint corner: anotherPoint.\x0a\x09self strokePaint: aColor.\x0a\x09self color: aColor",
messageSends: ["corner:", "strokePaint:", "color:"],
referencedClasses: []
}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TREllipseShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09\x22We could aternatively translate rectangle by position\x22\x0a\x09^ rectangle containsPoint: (aPoint)",
messageSends: ["containsPoint:"],
referencedClasses: []
}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRArcShape', smalltalk.TRShape, ['alphaAngle', 'betaAngle', 'innerRadius', 'externalRadius', 'center', 'origin', 'height', 'width', 'topLeft', 'bottomRight'], 'Trachel-Core');
smalltalk.TRArcShape.comment="A TRArc is an class that makes all the drawing of arcs";
smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle:betaAngle:innerRadius:externalRadius:",
category: 'initialization',
fn: function (stAngle, ndAngle, iR, eR) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alphaAngle"]=stAngle;
self["@betaAngle"]=ndAngle;
self["@innerRadius"]=iR;
self["@externalRadius"]=eR;
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngle:betaAngle:innerRadius:externalRadius:",{stAngle:stAngle,ndAngle:ndAngle,iR:iR,eR:eR},smalltalk.TRArcShape)});},
args: ["stAngle", "ndAngle", "iR", "eR"],
source: "alphaAngle: stAngle betaAngle: ndAngle innerRadius: iR externalRadius: eR\x0a\x09alphaAngle := stAngle.\x0a\x09betaAngle := ndAngle.\x0a\x09innerRadius := iR.\x0a\x09externalRadius := eR",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRight",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeBottomRight();
$1=self["@bottomRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRight",{},smalltalk.TRArcShape)});},
args: [],
source: "bottomRight\x0a\x09self computeBottomRight.\x0a\x09^ bottomRight",
messageSends: ["computeBottomRight"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRArcShape)});},
args: [],
source: "center\x0a\x09^center",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.TRArcShape)});},
args: ["aPoint"],
source: "center: aPoint\x0a\x09center:=aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeBottomRight",
category: 'computing',
fn: function () {
var self=this;
var aA,bA,iR,eR,p1,p2,p3,p4,pR,pQ1,pB,pQ2,pL,pQ3,pT,pQ4,pCollection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
pCollection=_st($OrderedCollection())._new();
aA=_st(_st(_st(self["@alphaAngle"])._value()).__backslash_backslash((360)))._degreesToRadians();
bA=_st(_st(_st(self["@betaAngle"])._value()).__backslash_backslash((360)))._degreesToRadians();
iR=_st(self["@innerRadius"])._value();
eR=_st(self["@externalRadius"])._value();
p1=_st(_st(iR).__star(_st(aA)._cos())).__at(_st(iR).__star(_st(aA)._sin()));
p2=_st(_st(iR).__star(_st(bA)._cos())).__at(_st(iR).__star(_st(bA)._sin()));
p3=_st(_st(eR).__star(_st(aA)._cos())).__at(_st(eR).__star(_st(aA)._sin()));
p4=_st(_st(eR).__star(_st(bA)._cos())).__at(_st(eR).__star(_st(bA)._sin()));
pR=_st(_st(eR).__star((0)._cos())).__at(_st(eR).__star((0)._sin()));
pQ1=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((4)))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((4)))._sin()));
pB=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((2)))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((2)))._sin()));
pQ2=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((4))))._sin()));
pL=_st(_st(eR).__star(_st(_st($Float())._pi())._cos())).__at(_st(eR).__star(_st(_st($Float())._pi())._sin()));
pQ3=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((5).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((5).__slash((4))))._sin()));
pT=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((2))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((2))))._sin()));
pQ4=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((7).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((7).__slash((4))))._sin()));
$1=pCollection;
_st($1)._add_(p1);
_st($1)._add_(p2);
_st($1)._add_(p3);
$2=_st($1)._add_(p4);
$3=self._includesPoint_(pQ1);
if(smalltalk.assert($3)){
_st(pCollection)._add_(pQ1);
};
$4=self._includesPoint_(pQ2);
if(smalltalk.assert($4)){
_st(pCollection)._add_(pQ2);
};
$5=self._includesPoint_(pQ3);
if(smalltalk.assert($5)){
_st(pCollection)._add_(pQ3);
};
$6=self._includesPoint_(pQ4);
if(smalltalk.assert($6)){
_st(pCollection)._add_(pQ4);
};
$7=self._includesPoint_(pL);
if(smalltalk.assert($7)){
_st(pCollection)._add_(pL);
};
$8=self._includesPoint_(pR);
if(smalltalk.assert($8)){
_st(pCollection)._add_(pR);
};
$9=self._includesPoint_(pB);
if(smalltalk.assert($9)){
_st(pCollection)._add_(pB);
};
$10=self._includesPoint_(pT);
if(smalltalk.assert($10)){
_st(pCollection)._add_(pT);
};
self["@bottomRight"]=_st(_st(_st(pCollection)._max())._x()).__at(_st(_st(pCollection)._min())._y());
return self}, function($ctx1) {$ctx1.fill(self,"computeBottomRight",{aA:aA,bA:bA,iR:iR,eR:eR,p1:p1,p2:p2,p3:p3,p4:p4,pR:pR,pQ1:pQ1,pB:pB,pQ2:pQ2,pL:pL,pQ3:pQ3,pT:pT,pQ4:pQ4,pCollection:pCollection},smalltalk.TRArcShape)});},
args: [],
source: "computeBottomRight\x0a\x09|aA bA iR eR p1 p2 p3 p4 pR pQ1 pB pQ2 pL pQ3 pT pQ4 pCollection|\x0a\x09pCollection:= OrderedCollection new.\x0a\x09aA:=(alphaAngle value \x5c\x5c 360) degreesToRadians .\x0a\x09bA:=(betaAngle value \x5c\x5c 360) degreesToRadians .\x0a\x09iR:= innerRadius value.\x0a\x09eR:= externalRadius value.\x0a\x09p1:= (iR*aA cos)@(iR*aA sin) .\x0a\x09p2:= (iR*bA cos)@(iR*bA sin) .\x0a\x09p3:= (eR*aA cos)@(eR*aA sin).\x0a\x09p4:=(eR*bA cos)@(eR*bA sin) .\x0a\x09pR:=(eR*0 cos) @ (eR*0 sin).\x0a\x09pQ1:=(eR*(Float pi /4) cos)@(eR*(Float pi /4) sin).\x0a\x09pB:=(eR*(Float pi /2) cos)@(eR*(Float pi /2) sin).\x0a\x09pQ2:=(eR*(Float pi * (3/4)) cos)@(eR*(Float pi * (3/4)) sin).\x0a\x09pL:=(eR*Float pi cos)@(eR*Float pi sin).\x0a\x09pQ3:=(eR*(Float pi * (5/4)) cos)@(eR*(Float pi * (5/4)) sin).\x0a\x09pT:=(eR*(Float pi * (3/2)) cos)@(eR*(Float pi * (3/2)) sin).\x0a\x09pQ4:=(eR*(Float pi * (7/4)) cos)@(eR*(Float pi * (7/4)) sin).\x0a\x09pCollection add:p1; add: p2; add: p3; add: p4.\x0a\x09(self includesPoint: pQ1)ifTrue:[pCollection add: pQ1].\x0a\x09(self includesPoint: pQ2)ifTrue:[pCollection add: pQ2].\x0a\x09(self includesPoint: pQ3)ifTrue:[pCollection add: pQ3].\x0a\x09(self includesPoint: pQ4)ifTrue:[pCollection add: pQ4].\x0a\x09(self includesPoint: pL)ifTrue:[pCollection add: pL].\x0a\x09(self includesPoint: pR)ifTrue:[pCollection add: pR].\x0a\x09(self includesPoint: pB)ifTrue:[pCollection add: pB].\x0a\x09(self includesPoint: pT)ifTrue:[pCollection add: pT].\x0a\x09bottomRight:=pCollection max x @ pCollection min y",
messageSends: ["new", "degreesToRadians", "\x5c\x5c", "value", "@", "*", "sin", "cos", "/", "pi", "add:", "ifTrue:", "includesPoint:", "y", "min", "x", "max"],
referencedClasses: ["OrderedCollection", "Float"]
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeHeight",
category: 'computing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=_st(_st(_st(self._topLeft())._y()).__minus(_st(self._bottomRight())._y()))._abs();
return self}, function($ctx1) {$ctx1.fill(self,"computeHeight",{},smalltalk.TRArcShape)});},
args: [],
source: "computeHeight\x0a\x09height := (self topLeft y - self bottomRight y) abs",
messageSends: ["abs", "-", "y", "bottomRight", "topLeft"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
var i,e,aAngle,bAngle;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self["@canvas"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
aAngle=_st(_st(self["@alphaAngle"])._value())._degreesToRadians();
bAngle=_st(_st(self["@betaAngle"])._value())._degreesToRadians();
i=_st(self["@innerRadius"])._value();
e=_st(self["@externalRadius"])._value();
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$3=builder;
_st($3)._absolute();
_st($3)._moveTo_(_st(_st(i).__star(_st(aAngle)._cos())).__at(_st(i).__star(_st(aAngle)._sin())));
_st($3)._arcTo_angle_cw_(_st(_st(i).__star(_st(bAngle)._cos())).__at(_st(i).__star(_st(bAngle)._sin())),_st(bAngle).__minus(aAngle),true);
_st($3)._ccwArcTo_angle_(_st(_st(e).__star(_st(bAngle)._cos())).__at(_st(e).__star(_st(bAngle)._sin())),(0));
_st($3)._ccwArcTo_angle_(_st(_st(e).__star(_st(aAngle)._cos())).__at(_st(e).__star(_st(aAngle)._sin())),_st(bAngle).__minus(aAngle));
$4=_st($3)._ccwArcTo_angle_(_st(_st(i).__star(_st(aAngle)._cos())).__at(_st(i).__star(_st(aAngle)._sin())),(0));
return $4;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{i:i,e:e,aAngle:aAngle,bAngle:bAngle},smalltalk.TRArcShape)});},
args: [],
source: "computePath\x0a\x09| i e aAngle bAngle |\x0a\x09canvas ifNil: [ ^ self ].\x0a\x09aAngle:=alphaAngle value degreesToRadians.\x0a\x09bAngle:=betaAngle value degreesToRadians.\x0a\x09i := innerRadius value.\x0a\x09e := externalRadius value.\x0a\x09path := \x0aself athensCanvas\x0a\x09createPath: [ :builder | \x0a\x09\x09builder\x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: ((i * (aAngle cos)) @ (i * (aAngle sin)));\x0a\x09\x09\x09arcTo: ((i * (bAngle cos)) @ (i * (bAngle sin))) angle: bAngle - aAngle cw: true;\x0a\x09\x09\x09ccwArcTo: ((e * (bAngle cos)) @ (e * (bAngle  sin))) angle: 0;\x0a\x09\x09\x09ccwArcTo: ((e * (aAngle  cos)) @ (e * (aAngle  sin))) angle: bAngle  - aAngle  ;\x0a\x09\x09\x09ccwArcTo: ((i * (aAngle  cos)) @ (i * (aAngle  sin))) angle: 0 ]",
messageSends: ["ifNil:", "degreesToRadians", "value", "createPath:", "absolute", "moveTo:", "@", "*", "sin", "cos", "arcTo:angle:cw:", "-", "ccwArcTo:angle:", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeTopLeft",
category: 'computing',
fn: function () {
var self=this;
var aA,bA,iR,eR,p1,p2,p3,p4,pR,pQ1,pB,pQ2,pL,pQ3,pT,pQ4,pCollection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10;
pCollection=_st($OrderedCollection())._new();
aA=_st(_st(_st(self["@alphaAngle"])._value()).__backslash_backslash((360)))._degreesToRadians();
bA=_st(_st(_st(self["@betaAngle"])._value()).__backslash_backslash((360)))._degreesToRadians();
iR=_st(self["@innerRadius"])._value();
eR=_st(self["@externalRadius"])._value();
p1=_st(_st(iR).__star(_st(aA)._cos())).__at(_st(iR).__star(_st(aA)._sin()));
p2=_st(_st(iR).__star(_st(bA)._cos())).__at(_st(iR).__star(_st(bA)._sin()));
p3=_st(_st(eR).__star(_st(aA)._cos())).__at(_st(eR).__star(_st(aA)._sin()));
p4=_st(_st(eR).__star(_st(bA)._cos())).__at(_st(eR).__star(_st(bA)._sin()));
pR=_st(_st(eR).__star((0)._cos())).__at(_st(eR).__star((0)._sin()));
pQ1=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((4)))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((4)))._sin()));
pB=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((2)))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__slash((2)))._sin()));
pQ2=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((4))))._sin()));
pL=_st(_st(eR).__star(_st(_st($Float())._pi())._cos())).__at(_st(eR).__star(_st(_st($Float())._pi())._sin()));
pQ3=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((5).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((5).__slash((4))))._sin()));
pT=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((2))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((3).__slash((2))))._sin()));
pQ4=_st(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((7).__slash((4))))._cos())).__at(_st(eR).__star(_st(_st(_st($Float())._pi()).__star((7).__slash((4))))._sin()));
$1=pCollection;
_st($1)._add_(p1);
_st($1)._add_(p2);
_st($1)._add_(p3);
$2=_st($1)._add_(p4);
$3=self._includesPoint_(pQ1);
if(smalltalk.assert($3)){
_st(pCollection)._add_(pQ1);
};
$4=self._includesPoint_(pQ2);
if(smalltalk.assert($4)){
_st(pCollection)._add_(pQ2);
};
$5=self._includesPoint_(pQ3);
if(smalltalk.assert($5)){
_st(pCollection)._add_(pQ3);
};
$6=self._includesPoint_(pQ4);
if(smalltalk.assert($6)){
_st(pCollection)._add_(pQ4);
};
$7=self._includesPoint_(pL);
if(smalltalk.assert($7)){
_st(pCollection)._add_(pL);
};
$8=self._includesPoint_(pR);
if(smalltalk.assert($8)){
_st(pCollection)._add_(pR);
};
$9=self._includesPoint_(pB);
if(smalltalk.assert($9)){
_st(pCollection)._add_(pB);
};
$10=self._includesPoint_(pT);
if(smalltalk.assert($10)){
_st(pCollection)._add_(pT);
};
self["@topLeft"]=_st(_st(_st(pCollection)._min())._x()).__at(_st(_st(pCollection)._max())._y());
return self}, function($ctx1) {$ctx1.fill(self,"computeTopLeft",{aA:aA,bA:bA,iR:iR,eR:eR,p1:p1,p2:p2,p3:p3,p4:p4,pR:pR,pQ1:pQ1,pB:pB,pQ2:pQ2,pL:pL,pQ3:pQ3,pT:pT,pQ4:pQ4,pCollection:pCollection},smalltalk.TRArcShape)});},
args: [],
source: "computeTopLeft\x0a\x09|aA bA iR eR p1 p2 p3 p4 pR pQ1 pB pQ2 pL pQ3 pT pQ4 pCollection|\x0a\x09pCollection:= OrderedCollection new.\x0a\x09aA:=(alphaAngle value \x5c\x5c 360) degreesToRadians.\x0a\x09bA:=(betaAngle value \x5c\x5c 360) degreesToRadians.\x0a\x09iR:= innerRadius value.\x0a\x09eR:= externalRadius value.\x0a\x09p1:= (iR*aA cos)@(iR*aA sin).\x0a\x09p2:= (iR*bA cos)@(iR*bA sin).\x0a\x09p3:= (eR*aA cos)@(eR*aA sin).\x0a\x09p4:=(eR*bA cos)@(eR*bA sin).\x0a\x09pR:=(eR*0 cos) @ (eR*0 sin).\x0a\x09pQ1:=(eR*(Float pi /4) cos)@(eR*(Float pi /4) sin).\x0a\x09pB:=(eR*(Float pi /2) cos)@(eR*(Float pi /2) sin).\x0a\x09pQ2:=(eR*(Float pi * (3/4)) cos)@(eR*(Float pi * (3/4)) sin).\x0a\x09pL:=(eR*Float pi cos)@(eR*Float pi sin).\x0a\x09pQ3:=(eR*(Float pi * (5/4)) cos)@(eR*(Float pi * (5/4)) sin).\x0a\x09pT:=(eR*(Float pi * (3/2)) cos)@(eR*(Float pi * (3/2)) sin).\x0a\x09pQ4:=(eR*(Float pi * (7/4)) cos)@(eR*(Float pi * (7/4)) sin).\x0a\x09pCollection add:p1; add: p2; add: p3; add: p4.\x0a\x09(self includesPoint: pQ1)ifTrue:[pCollection add: pQ1].\x0a\x09(self includesPoint: pQ2)ifTrue:[pCollection add: pQ2].\x0a\x09(self includesPoint: pQ3)ifTrue:[pCollection add: pQ3].\x0a\x09(self includesPoint: pQ4)ifTrue:[pCollection add: pQ4].\x0a\x09(self includesPoint: pL)ifTrue:[pCollection add: pL].\x0a\x09(self includesPoint: pR)ifTrue:[pCollection add: pR].\x0a\x09(self includesPoint: pB)ifTrue:[pCollection add: pB].\x0a\x09(self includesPoint: pT)ifTrue:[pCollection add: pT].\x0a\x09topLeft:=pCollection min x @ pCollection max y",
messageSends: ["new", "degreesToRadians", "\x5c\x5c", "value", "@", "*", "sin", "cos", "/", "pi", "add:", "ifTrue:", "includesPoint:", "y", "max", "x", "min"],
referencedClasses: ["OrderedCollection", "Float"]
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeWidth",
category: 'computing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(_st(_st(self._topLeft())._x()).__minus(_st(self._bottomRight())._x()))._abs();
return self}, function($ctx1) {$ctx1.fill(self,"computeWidth",{},smalltalk.TRArcShape)});},
args: [],
source: "computeWidth\x0a\x09width:=(self topLeft x - self bottomRight x) abs",
messageSends: ["abs", "-", "x", "bottomRight", "topLeft"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=self._shouldBeDrawn();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$3=athensCanvas;
_st($3)._setPaint_(self["@color"]);
$4=_st($3)._drawShape_(self._path());
$4;
return self._drawStrokeIfNecessaryOn_(athensCanvas);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRArcShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09self shouldBeDrawn ifFalse: [ ^ self ].\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setPaint: color;\x0a\x09\x09\x09drawShape: self path.\x0a\x0a\x09\x09self drawStrokeIfNecessaryOn: athensCanvas\x0a\x09\x09]",
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessaryOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawStrokeIfNecessaryOn:",{athensCanvas:athensCanvas},smalltalk.TRArcShape)});},
args: ["athensCanvas"],
source: "drawStrokeIfNecessaryOn: athensCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._topLeft())._corner_(self._bottomRight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRArcShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^self topLeft corner: self bottomRight",
messageSends: ["corner:", "bottomRight", "topLeft"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeHeight();
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRArcShape)});},
args: [],
source: "height\x0a\x09self computeHeight.\x0a\x09^ height",
messageSends: ["computeHeight"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
var pDistanceOrigin,pointAngle,inside,aAngle,bAngle;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14;
$1=_st(_st(self["@alphaAngle"])._value()).__eq(_st(self["@betaAngle"])._value());
if(smalltalk.assert($1)){
return false;
};
inside=true;
$2=_st(_st(_st(self["@alphaAngle"])._value())._%((360))).__eq((0));
if(smalltalk.assert($2)){
aAngle=_st(self["@alphaAngle"])._value();
aAngle;
} else {
aAngle=_st(_st(self["@alphaAngle"])._value()).__backslash_backslash((360));
aAngle;
};
$3=_st(_st(_st(self["@betaAngle"])._value())._%((360))).__eq((0));
if(smalltalk.assert($3)){
bAngle=_st(self["@betaAngle"])._value();
bAngle;
} else {
bAngle=_st(_st(self["@betaAngle"])._value()).__backslash_backslash((360));
bAngle;
};
pointAngle=_st(_st(_st(_st(_st(aPoint)._x()).__at(_st(_st(aPoint)._y())._negated()))._angleWith_(self._center()))._radiansToDegrees()).__backslash_backslash((360));
pDistanceOrigin=_st(_st(aPoint)._squaredDistanceTo_(self._center()))._sqrt();
$4=_st(_st(pDistanceOrigin).__lt(_st(self["@innerRadius"])._value()))._or_(_st(pDistanceOrigin).__gt(_st(self["@externalRadius"])._value()));
if(smalltalk.assert($4)){
return false;
};
$5=_st(_st(pointAngle)._%((360))).__eq((0));
if(smalltalk.assert($5)){
$6=_st(_st(aAngle)._%((360))).__eq((0));
if(smalltalk.assert($6)){
return true;
};
$7=_st(_st(bAngle)._%((360))).__eq((0));
if(smalltalk.assert($7)){
return true;
};
};
$8=_st(aAngle).__lt(bAngle);
if(smalltalk.assert($8)){
$9=_st(pointAngle).__gt_eq(aAngle);
if(smalltalk.assert($9)){
inside=_st(inside)._not();
inside;
};
$10=_st(pointAngle).__lt_eq(bAngle);
if(smalltalk.assert($10)){
inside=_st(inside)._not();
inside;
};
} else {
$11=_st(bAngle).__eq((0));
if(smalltalk.assert($11)){
bAngle=(360);
bAngle;
};
$12=_st(pointAngle).__lt_eq(aAngle);
if(smalltalk.assert($12)){
inside=_st(inside)._not();
inside;
};
$13=_st(pointAngle).__lt_eq(bAngle);
if(smalltalk.assert($13)){
inside=_st(inside)._not();
inside;
};
};
$14=inside;
return $14;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint,pDistanceOrigin:pDistanceOrigin,pointAngle:pointAngle,inside:inside,aAngle:aAngle,bAngle:bAngle},smalltalk.TRArcShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09| pDistanceOrigin pointAngle inside aAngle bAngle |\x0a\x09(alphaAngle value = betaAngle value) ifTrue: [ ^ false ].\x0a\x09inside:=true.\x0a\x09(alphaAngle value % 360 = 0 ) \x0a\x09\x09ifFalse: [ aAngle := alphaAngle value \x5c\x5c  360 ]\x0a\x09\x09ifTrue: [ aAngle := alphaAngle value ].\x0a\x09(betaAngle value % 360 = 0 )\x0a\x09\x09ifFalse: [ bAngle := betaAngle value \x5c\x5c  360 ]\x0a\x09\x09ifTrue: [ bAngle := betaAngle value ].\x0a\x09pointAngle:= ((aPoint x @ aPoint y negated) angleWith: self center) radiansToDegrees \x5c\x5c  360.\x0a\x09pDistanceOrigin := (aPoint squaredDistanceTo: self center) sqrt.\x0a\x09((pDistanceOrigin < innerRadius value) or: (pDistanceOrigin > externalRadius value))\x0a\x09\x09ifTrue: [ ^ false ].\x0a\x09(pointAngle % 360 = 0 )\x0a\x09\x09ifTrue:[\x0a\x09\x09\x09(aAngle % 360 = 0) ifTrue: [^ true ].\x0a\x09\x09\x09(bAngle % 360 = 0) ifTrue: [ ^ true ] ].\x0a\x09(aAngle < bAngle)\x0a\x09ifTrue:[\x0a\x09\x09(pointAngle >= aAngle) ifTrue:[ inside:=inside not ].\x0a\x09\x09(pointAngle <= bAngle) ifTrue:[ inside:=inside not ] ]\x0a\x09ifFalse:[\x0a\x09\x09(bAngle = 0) ifTrue:[bAngle:=360].\x0a\x09\x09(pointAngle <= aAngle) ifTrue:[ inside:=inside not ].\x0a\x09\x09(pointAngle <= bAngle) ifTrue:[ inside:=inside not ] ].\x0a\x09^ inside",
messageSends: ["ifTrue:", "=", "value", "ifFalse:ifTrue:", "\x5c\x5c", "%", "radiansToDegrees", "angleWith:", "center", "@", "negated", "y", "x", "sqrt", "squaredDistanceTo:", "or:", ">", "<", "ifTrue:ifFalse:", "not", ">=", "<="],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
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
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRArcShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09center := 0 @ 0.\x0a\x09height := 0.\x0a\x09width := 0.\x0a\x09externalRadius := 0.\x0a\x09innerRadius := 0.\x0a\x09alphaAngle := 0.\x0a\x09betaAngle := 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRArcShape)});},
args: [],
source: "position\x0a\x09^ 0 @ 0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeTopLeft();
$1=self["@topLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeft",{},smalltalk.TRArcShape)});},
args: [],
source: "topLeft\x0a\x09self computeTopLeft.\x0a\x09^ topLeft",
messageSends: ["computeTopLeft"],
referencedClasses: []
}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeWidth();
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRArcShape)});},
args: [],
source: "width\x0a\x09self computeWidth.\x0a\x09^ width",
messageSends: ["computeWidth"],
referencedClasses: []
}),
smalltalk.TRArcShape);



smalltalk.addClass('TRBezierShape', smalltalk.TRShape, ['listOfPoints'], 'Trachel-Core');
smalltalk.TRBezierShape.comment="A TRBezierShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09listOfPoints:\x09\x09<Object>\x0a\x0alistOfPoints\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
$2=_st($1)._moveTo_(_st(self["@listOfPoints"])._first());
$2;
_st((2)._to_(_st(_st(self["@listOfPoints"])._size()).__minus((1))))._do_((function(index){
return smalltalk.withContext(function($ctx3) {
return _st(builder)._curveVia_to_(_st(self["@listOfPoints"])._at_(index),_st(_st(_st(_st(self["@listOfPoints"])._at_(index)).__plus(_st(self["@listOfPoints"])._at_(_st(index).__plus((1))))).__slash((2)))._asFloatPoint());
}, function($ctx3) {$ctx3.fillBlock({index:index},$ctx2)})}));
return _st(builder)._lineTo_(_st(self["@listOfPoints"])._last());
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRBezierShape)});},
args: [],
source: "computePath\x0a\x09path := self athensCanvas\x0a\x09\x09createPath: [ :builder | \x0a\x09\x09\x09builder\x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: listOfPoints first.\x0a\x09\x09\x09\x0a\x09\x09\x09(2 to: (listOfPoints size -1)) do: [ :index |\x0a\x09\x09\x09\x09builder \x0a\x09\x09\x09\x09\x09curveVia: (listOfPoints at: index) \x0a\x09\x09\x09\x09\x09to: (((listOfPoints at: index) + (listOfPoints at: (index + 1))) / 2) asFloatPoint.\x0a\x09\x09\x09].\x0a\x09\x09\x09builder lineTo: listOfPoints last.\x0a\x09\x09]",
messageSends: ["createPath:", "absolute", "moveTo:", "first", "do:", "curveVia:to:", "at:", "asFloatPoint", "/", "+", "to:", "-", "size", "lineTo:", "last", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$1=athensCanvas;
_st($1)._setStrokePaint_(self["@strokePaint"]);
$2=_st($1)._drawShape_(self._path());
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRBezierShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09\x09\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setStrokePaint: strokePaint;\x0a\x09\x09\x09drawShape: self path  ]",
messageSends: ["restoreAfter:", "setStrokePaint:", "drawShape:", "path", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._encompassing_(self["@listOfPoints"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRBezierShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^ Rectangle encompassing: listOfPoints",
messageSends: ["encompassing:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBezierShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@listOfPoints"]=_st($Array())._with_with_((0).__at((0)),(0).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRBezierShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09listOfPoints := Array with: 0 @ 0 with: 0 @ 0",
messageSends: ["initialize", "with:with:", "@"],
referencedClasses: ["Array"]
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@listOfPoints"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"points",{},smalltalk.TRBezierShape)});},
args: [],
source: "points\x0a\x09^ listOfPoints copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:",
category: 'public',
fn: function (points) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=points;
return self}, function($ctx1) {$ctx1.fill(self,"points:",{points:points},smalltalk.TRBezierShape)});},
args: ["points"],
source: "points: points\x0a\x09listOfPoints := points",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:color:",
category: 'public',
fn: function (aListOfPoints, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._points_(aListOfPoints);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"points:color:",{aListOfPoints:aListOfPoints,aColor:aColor},smalltalk.TRBezierShape)});},
args: ["aListOfPoints", "aColor"],
source: "points: aListOfPoints color: aColor\x0a\x0a\x09self points: aListOfPoints.\x0a\x09self strokePaint: aColor.\x0a\x09self color: aColor",
messageSends: ["points:", "strokePaint:", "color:"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRBezierShape)});},
args: [],
source: "position\x0a\x09^ self encompassingRectangle center",
messageSends: ["center", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=_st(self["@listOfPoints"])._collect_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(p).__plus(aPoint);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRBezierShape)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09listOfPoints := listOfPoints collect: [ :p | p + aPoint ]",
messageSends: ["collect:", "+"],
referencedClasses: []
}),
smalltalk.TRBezierShape);



smalltalk.addClass('TRComposedShape', smalltalk.TRShape, ['shape1', 'shape2'], 'Trachel-Core');
smalltalk.TRComposedShape.comment="A TRComposedShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09shape1:\x09\x09<Object>\x0a\x09shape2:\x09\x09<Object>\x0a\x0ashape1\x0a\x09- xxxxx\x0a\x0ashape2\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
category: 'actions',
fn: function (aCallback) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._addCallback_(aCallback);
_st(self["@shape2"])._addCallback_(aCallback);
return self}, function($ctx1) {$ctx1.fill(self,"addCallback:",{aCallback:aCallback},smalltalk.TRComposedShape)});},
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
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._addShape_(self["@shape1"]);
_st(aCanvas)._addShape_(self["@shape2"]);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRComposedShape)});},
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
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announce_(anEvent);
_st(self["@shape2"])._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("should not be called");
return self}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRComposedShape)});},
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
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announcer_(anAnnouncer);
_st(self["@shape2"])._announcer_(anAnnouncer);
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRComposedShape)});},
args: ["anAnnouncer"],
source: "announcer: anAnnouncer\x0a\x09shape1 announcer: anAnnouncer.\x0a\x09shape2 announcer: anAnnouncer.",
messageSends: ["announcer:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
category: 'accessing',
fn: function (aSurface) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._canvas_(aSurface);
_st(self["@shape2"])._canvas_(aSurface);
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRComposedShape)});},
args: ["aSurface"],
source: "canvas: aSurface\x0a\x09\x22aCanvas is a AthensCairoSurface\x22\x0a\x09shape1 canvas: aSurface.\x0a\x09shape2 canvas: aSurface",
messageSends: ["canvas:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._computePath();
_st(self["@shape2"])._computePath();
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRComposedShape)});},
args: [],
source: "computePath\x0a\x09shape1 computePath.\x0a\x09shape2 computePath",
messageSends: ["computePath"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._drawOn_(athensCanvas);
_st(self["@shape2"])._drawOn_(athensCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRComposedShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x0a\x09shape1 drawOn: athensCanvas.\x0a\x09shape2 drawOn: athensCanvas",
messageSends: ["drawOn:"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape1"])._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRComposedShape)});},
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
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._element_(anObject);
_st(self["@shape2"])._element_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._merging_(_st($Array())._with_with_(_st(self["@shape1"])._encompassingRectangle(),_st(self["@shape2"])._encompassingRectangle()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRComposedShape)});},
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
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape1"])._includesPoint_(aPoint))._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@shape2"])._includesPoint_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRComposedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape1"]=_st($TRNoShape())._instance();
self["@shape2"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@shape1"])._position()).__plus(_st(self["@shape2"])._position())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._remove();
_st(self["@shape2"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape1",{},smalltalk.TRComposedShape)});},
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
fn: function (aTRShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape1"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape1:",{aTRShape:aTRShape},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape2",{},smalltalk.TRComposedShape)});},
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
fn: function (aTRShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape2"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape2:",{aTRShape:aTRShape},smalltalk.TRComposedShape)});},
args: ["aTRShape"],
source: "shape2: aTRShape\x0a\x09shape2 := aTRShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'actions',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TRComposedShape)});},
args: [],
source: "signalUpdate\x0a\x09shape1 signalUpdate",
messageSends: ["signalUpdate"],
referencedClasses: []
}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'as yet unclassified',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._translateTo_(aPoint);
_st(self["@shape2"])._translateTo_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRComposedShape)});},
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
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@shape1"])._announcer())._when_do_(event,aBlock);
_st(_st(self["@shape2"])._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRComposedShape)});},
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
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRComposedShape)});},
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
fn: function (s1, s2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._shape1_(s1);
_st($2)._shape2_(s2);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"with:with:",{s1:s1,s2:s2},smalltalk.TRComposedShape.klass)});},
args: ["s1", "s2"],
source: "with: s1 with: s2\x0a\x09^ self new shape1: s1; shape2: s2; yourself",
messageSends: ["shape1:", "new", "shape2:", "yourself"],
referencedClasses: []
}),
smalltalk.TRComposedShape.klass);


smalltalk.addClass('TRLabelShape', smalltalk.TRShape, ['text', 'font', 'fontSize'], 'Trachel-Core');
smalltalk.TRLabelShape.comment="A TRLabelShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09font:\x09\x09<Object>\x0a\x09fontSize:\x09\x09<Object>\x0a\x09text:\x09\x09<Object>\x0a\x0afont\x0a\x09- xxxxx\x0a\x0afontSize\x0a\x09- xxxxx\x0a\x0atext\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "ascent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._ascent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ascent",{},smalltalk.TRLabelShape)});},
args: [],
source: "ascent\x0a\x09^ font ascent",
messageSends: ["ascent"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultFontSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape)});},
args: [],
source: "defaultFontSize\x0a\x09^ self class defaultFontSize",
messageSends: ["defaultFontSize", "class"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "descent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._descent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"descent",{},smalltalk.TRLabelShape)});},
args: [],
source: "descent\x0a\x09^ font descent",
messageSends: ["descent"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(athensCanvas)._pathTransform();
_st($1)._translateBy_(_st(self["@position"])._asIntegerPoint());
_st($1)._translateBy_(_st(_st(_st(self._width()).__slash((-2))).__at(_st(self._height()).__slash((2))))._asIntegerPoint());
$2=_st($1)._translateBy_(_st((0).__at(_st(self._descent())._negated()))._asIntegerPoint());
$2;
_st(athensCanvas)._setFont_(self["@font"]);
_st(athensCanvas)._setPaint_(self["@color"]);
return _st(athensCanvas)._drawString_(self["@text"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRLabelShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09\x22self drawEncompassingRectangleOn: athensCanvas color: (Color gray alpha: 0.1).\x22\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09\x22Draw the label centered on the position\x22\x0a\x09\x09athensCanvas pathTransform\x0a\x09\x09\x09translateBy: position asIntegerPoint;\x0a\x09\x09\x09translateBy: ((self width / -2) @ (self height / 2)) asIntegerPoint;\x0a\x09\x09\x09translateBy: (0 @ self descent negated) asIntegerPoint.\x0a\x09\x09\x09\x22scaleBy: (fontSize / 10).\x22\x0a\x09\x09athensCanvas setFont: font.\x0a\x09\x09athensCanvas setPaint: color.\x0a\x09\x09athensCanvas drawString: text\x0a\x09\x09]",
messageSends: ["restoreAfter:", "translateBy:", "asIntegerPoint", "pathTransform", "@", "/", "height", "width", "negated", "descent", "setFont:", "setPaint:", "drawString:"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
var w,h;
return smalltalk.withContext(function($ctx1) { 
var $1;
w=self._width();
h=self._height();
$1=_st(_st(self["@position"]).__plus(_st(_st(w).__slash((-2))).__at(_st(h).__slash((-2)))))._extent_(_st(w).__at(h));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{w:w,h:h},smalltalk.TRLabelShape)});},
args: [],
source: "encompassingRectangle\x0a\x09| w h |\x0a\x09w := self width.\x0a\x09h := self height.\x0a\x09^ position + ((w / -2) @ (h / -2)) extent: (w @ h)",
messageSends: ["width", "height", "extent:", "@", "+", "/"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "font",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@font"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"font",{},smalltalk.TRLabelShape)});},
args: [],
source: "font\x0a\x09^ font",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fontSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontSize",{},smalltalk.TRLabelShape)});},
args: [],
source: "fontSize\x0a\x09^ fontSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st(self._class())._getFontForSize_(aNumber);
self["@fontSize"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aNumber:aNumber},smalltalk.TRLabelShape)});},
args: ["aNumber"],
source: "fontSize: aNumber\x0a\x09font := self class getFontForSize: aNumber.\x0a\x09fontSize := aNumber",
messageSends: ["getFontForSize:", "class"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRLabelShape)});},
args: [],
source: "height\x0a\x09^ font height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRLabelShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09^ self encompassingRectangle containsPoint: aPoint",
messageSends: ["containsPoint:", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRLabelShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="Trachel label";
self._fontSize_(self._defaultFontSize());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRLabelShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09text := 'Trachel label'.\x0a\x09self fontSize: self defaultFontSize",
messageSends: ["initialize", "fontSize:", "defaultFontSize"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "leftPosition:",
category: 'public',
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(aPosition).__minus(_st(_st(self._width()).__slash((-2))).__at((0))))._asIntegerPoint());
return self}, function($ctx1) {$ctx1.fill(self,"leftPosition:",{aPosition:aPosition},smalltalk.TRLabelShape)});},
args: ["aPosition"],
source: "leftPosition: aPosition\x0a\x09self position: (aPosition - ((self width / -2) @ 0) ) asIntegerPoint",
messageSends: ["position:", "asIntegerPoint", "-", "@", "/", "width"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRLabelShape)});},
args: [],
source: "position\x0a\x09^ position",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
category: 'accessing',
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.TRLabelShape)});},
args: ["aPosition"],
source: "position: aPosition\x0a\x09position := aPosition",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.TRLabelShape)});},
args: [],
source: "text\x0a\x09^ text",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
category: 'accessing',
fn: function (aText) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText},smalltalk.TRLabelShape)});},
args: ["aText"],
source: "text: aText\x0a\x09text := aText",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:on:",
category: 'public',
fn: function (aText, aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._text_(aText);
self._position_(aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"text:on:",{aText:aText,aPosition:aPosition},smalltalk.TRLabelShape)});},
args: ["aText", "aPosition"],
source: "text: aText on: aPosition\x0a\x09self text: aText.\x0a\x09self position: aPosition",
messageSends: ["text:", "position:"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'public',
fn: function (step) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(step);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{step:step},smalltalk.TRLabelShape)});},
args: ["step"],
source: "translateBy: step\x0a\x09position := position + step.",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'public',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRLabelShape)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09position := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._widthOfString_(self["@text"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRLabelShape)});},
args: [],
source: "width\x0a\x09^ (font widthOfString: text)",
messageSends: ["widthOfString:"],
referencedClasses: []
}),
smalltalk.TRLabelShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (12);
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape.klass)});},
args: [],
source: "defaultFontSize\x0a\x09^ 12",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLabelShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getFontForSize:",
category: 'configuration',
fn: function (aNumber) {
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($LogicalFont())._familyName_pointSize_("Arial",aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getFontForSize:",{aNumber:aNumber},smalltalk.TRLabelShape.klass)});},
args: ["aNumber"],
source: "getFontForSize: aNumber\x0a\x0a\x09^ LogicalFont familyName: 'Arial' pointSize: aNumber",
messageSends: ["familyName:pointSize:"],
referencedClasses: ["LogicalFont"]
}),
smalltalk.TRLabelShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfText:fontSize:",
category: 'configuration',
fn: function (aString, aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._getFontForSize_(aNumber))._widthOfString_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfText:fontSize:",{aString:aString,aNumber:aNumber},smalltalk.TRLabelShape.klass)});},
args: ["aString", "aNumber"],
source: "widthOfText: aString fontSize: aNumber\x0a\x09^ (self getFontForSize: aNumber) widthOfString: aString",
messageSends: ["widthOfString:", "getFontForSize:"],
referencedClasses: []
}),
smalltalk.TRLabelShape.klass);


smalltalk.addClass('TRRotatedLabelShape', smalltalk.TRLabelShape, ['angle'], 'Trachel-Core');
smalltalk.TRRotatedLabelShape.comment="A TRRotatedLabelShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09angle:\x09\x09<Object>\x0a\x0aangle\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "angleInDegree:",
category: 'accessing',
fn: function (anAngle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@angle"]=anAngle;
return self}, function($ctx1) {$ctx1.fill(self,"angleInDegree:",{anAngle:anAngle},smalltalk.TRRotatedLabelShape)});},
args: ["anAngle"],
source: "angleInDegree: anAngle\x0a\x09angle := anAngle",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st(athensCanvas)._pathTransform();
_st($1)._translateBy_(_st(self["@position"])._asIntegerPoint());
_st($1)._rotateByDegrees_(_st(self["@angle"])._value());
_st($1)._translateBy_(_st(_st(_st(_st(self._notRotatedWidth())._value()).__slash((-2))).__at(_st(_st(self._notRotatedHeight())._value()).__slash((2))))._asIntegerPoint());
$2=_st($1)._translateBy_(_st((0).__at(_st(_st(self["@font"])._descent())._negated()))._asIntegerPoint());
$2;
_st(athensCanvas)._setFont_(self["@font"]);
_st(athensCanvas)._setPaint_(self["@color"]);
return _st(athensCanvas)._drawString_(self["@text"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRRotatedLabelShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09\x22self drawEncompassingRectangleOn: athensCanvas color: (Color green alpha: 0.1).\x22\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09\x22Draw the label centered on the position\x22\x0a\x09\x09athensCanvas pathTransform \x0a\x09\x09\x09translateBy: position asIntegerPoint;\x0a\x09\x09\x09rotateByDegrees: angle value;\x0a\x09\x09\x09translateBy: ((self notRotatedWidth value / -2) @ (self notRotatedHeight value / 2)) asIntegerPoint;\x0a\x09\x09\x09translateBy: (0 @ font descent negated) asIntegerPoint.\x0a\x09\x09athensCanvas setFont: font.\x0a\x09\x09athensCanvas setPaint: color.\x0a\x09\x09athensCanvas drawString: text\x0a\x09].",
messageSends: ["restoreAfter:", "translateBy:", "asIntegerPoint", "pathTransform", "rotateByDegrees:", "value", "@", "/", "notRotatedHeight", "notRotatedWidth", "negated", "descent", "setFont:", "setPaint:", "drawString:"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
var w,h,transformation,translation,notRotatedRectangle,rotatedRectangle,topLeft,topRight,bottomRight,bottomLeft,p1,p2,p3,p4;
function $AthensAffineTransform(){return smalltalk.AthensAffineTransform||(typeof AthensAffineTransform=="undefined"?nil:AthensAffineTransform)}
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
w=self._notRotatedWidth();
h=self._notRotatedHeight();
$1=_st($AthensAffineTransform())._new();
_st($1)._rotateByDegrees_(_st(self["@angle"])._value());
$2=_st($1)._translateBy_(_st(_st(_st(w).__slash((-2))).__at(_st(h).__slash((2))))._asIntegerPoint());
transformation=$2;
notRotatedRectangle=_st((0).__at(_st(h)._negated()))._corner_(_st(w).__at((0)));
topLeft=_st(transformation)._transform_(_st(notRotatedRectangle)._topLeft());
topRight=_st(transformation)._transform_(_st(notRotatedRectangle)._topRight());
bottomRight=_st(transformation)._transform_(_st(notRotatedRectangle)._bottomRight());
bottomLeft=_st(transformation)._transform_(_st(notRotatedRectangle)._bottomLeft());
$3=_st($OrderedCollection())._new();
_st($3)._add_(_st(topLeft)._x());
_st($3)._add_(_st(topRight)._x());
_st($3)._add_(_st(bottomRight)._x());
_st($3)._add_(_st(bottomLeft)._x());
$4=_st($3)._yourself();
p1=$4;
$5=_st($OrderedCollection())._new();
_st($5)._add_(_st(topLeft)._y());
_st($5)._add_(_st(topRight)._y());
_st($5)._add_(_st(bottomRight)._y());
_st($5)._add_(_st(bottomLeft)._y());
$6=_st($5)._yourself();
p2=$6;
$7=_st($OrderedCollection())._new();
_st($7)._add_(_st(topLeft)._x());
_st($7)._add_(_st(topRight)._x());
_st($7)._add_(_st(bottomRight)._x());
_st($7)._add_(_st(bottomLeft)._x());
$8=_st($7)._yourself();
p3=$8;
$9=_st($OrderedCollection())._new();
_st($9)._add_(_st(topLeft)._y());
_st($9)._add_(_st(topRight)._y());
_st($9)._add_(_st(bottomRight)._y());
_st($9)._add_(_st(bottomLeft)._y());
$10=_st($9)._yourself();
p4=$10;
rotatedRectangle=_st(_st(_st(p1)._min()).__at(_st(p2)._min()))._corner_(_st(_st(p3)._max()).__at(_st(p4)._max()));
translation=_st(_st($AthensAffineTransform())._new())._translateBy_(_st(self["@position"])._asIntegerPoint());
$11=_st(_st(translation)._transform_(_st(rotatedRectangle)._topLeft()))._corner_(_st(translation)._transform_(_st(rotatedRectangle)._bottomRight()));
return $11;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{w:w,h:h,transformation:transformation,translation:translation,notRotatedRectangle:notRotatedRectangle,rotatedRectangle:rotatedRectangle,topLeft:topLeft,topRight:topRight,bottomRight:bottomRight,bottomLeft:bottomLeft,p1:p1,p2:p2,p3:p3,p4:p4},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "encompassingRectangle\x0a\x0a\x09| w h transformation translation notRotatedRectangle rotatedRectangle topLeft topRight bottomRight bottomLeft p1 p2 p3 p4 |\x0a\x09w := self notRotatedWidth.\x0a\x09h := self notRotatedHeight.\x0a\x09transformation := AthensAffineTransform new \x0a\x09\x09\x09\x09\x09\x09rotateByDegrees: angle value;\x0a\x09\x09\x09\x09\x09\x09translateBy: ((w / -2) @ (h / 2)) asIntegerPoint.\x0a\x09notRotatedRectangle  := 0 @ h negated corner: (w @ 0).\x0a\x09topLeft := transformation transform: notRotatedRectangle topLeft.\x0a\x09topRight := transformation transform: notRotatedRectangle topRight.\x0a\x09bottomRight := transformation transform: notRotatedRectangle bottomRight.\x0a\x09bottomLeft := transformation transform: notRotatedRectangle bottomLeft.\x0a\x09\x0a\x09p1 := OrderedCollection new add: topLeft x; add: topRight x; add: bottomRight x; add: bottomLeft x; yourself.\x0a\x09p2 := OrderedCollection new add: topLeft y; add: topRight y; add: bottomRight y; add: bottomLeft y; yourself.\x0a\x09p3 := OrderedCollection new add: topLeft x; add: topRight x; add: bottomRight x; add: bottomLeft x; yourself.\x0a\x09p4 := OrderedCollection new add: topLeft y; add: topRight y; add: bottomRight y; add: bottomLeft y; yourself.\x0a\x09\x0a\x09rotatedRectangle := \x0a\x09\x09(p1 min @ p2 min) corner:\x0a\x09\x09(p3 max @ p4 max).\x0a\x09translation := AthensAffineTransform new\x0a\x09\x09\x09\x09\x09translateBy: position asIntegerPoint.\x0a\x09^ (translation transform: rotatedRectangle topLeft)\x0a\x09 \x09corner: (translation transform: rotatedRectangle bottomRight)",
messageSends: ["notRotatedWidth", "notRotatedHeight", "rotateByDegrees:", "value", "new", "translateBy:", "asIntegerPoint", "@", "/", "corner:", "negated", "transform:", "topLeft", "topRight", "bottomRight", "bottomLeft", "add:", "x", "yourself", "y", "max", "min"],
referencedClasses: ["AthensAffineTransform", "OrderedCollection"]
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "height\x0a\x0a\x09^ self encompassingRectangle height",
messageSends: ["height", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRRotatedLabelShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@angle"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09angle := 0.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "notRotatedHeight",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notRotatedHeight",{},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "notRotatedHeight\x0a\x09^ font height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "notRotatedWidth",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._widthOfString_(self["@text"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"notRotatedWidth",{},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "notRotatedWidth\x0a\x09^ (font widthOfString: text)",
messageSends: ["widthOfString:"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRRotatedLabelShape)});},
args: [],
source: "width\x0a\x0a\x09^ self encompassingRectangle width",
messageSends: ["width", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.TRRotatedLabelShape);



smalltalk.addClass('TRLineShape', smalltalk.TRShape, ['from', 'to'], 'Trachel-Core');
smalltalk.TRLineShape.comment="A TRLineShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09from:\x09\x09<Object>\x0a\x09to:\x09\x09<Object>\x0a\x0afrom\x0a\x09- xxxxx\x0a\x0ato\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$1=builder;
_st($1)._absolute();
_st($1)._moveTo_(self["@from"]);
$2=_st($1)._lineTo_(self["@to"]);
return $2;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRLineShape)});},
args: [],
source: "computePath\x0a\x09path := self athensCanvas\x0a\x09\x09createPath: [ :builder | \x0a\x09\x09\x09builder\x0a\x09\x09\x09\x09absolute;\x0a\x09\x09\x09\x09moveTo: from;\x0a\x09\x09\x09\x09lineTo: to ]",
messageSends: ["createPath:", "absolute", "moveTo:", "lineTo:", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
_st(_st(athensCanvas)._pathTransform())._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
$1=athensCanvas;
_st($1)._setStrokePaint_(self["@strokePaint"]);
$2=_st($1)._drawShape_(self._path());
return $2;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRLineShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x0a\x09athensCanvas pathTransform restoreAfter: [\x0a\x09\x09athensCanvas\x0a\x09\x09\x09setStrokePaint: strokePaint;\x0a\x09\x09\x09drawShape: self path  ]\x0a\x09\x09\x22(athensCanvas setStrokePaint: strokePaint) width: (1.5 / (scale )) asInteger.\x22",
messageSends: ["restoreAfter:", "setStrokePaint:", "drawShape:", "path", "pathTransform"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._encompassing_(_st($Array())._with_with_(self["@from"],self["@to"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRLineShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^ Rectangle encompassing: (Array with: from with: to)",
messageSends: ["encompassing:", "with:with:"],
referencedClasses: ["Array", "Rectangle"]
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.TRLineShape)});},
args: [],
source: "from\x0a\x09\x22Return a point\x22\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'accessing',
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
category: 'public',
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
self["@to"]=anotherPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRLineShape)});},
args: ["aPoint", "anotherPoint"],
source: "from: aPoint to: anotherPoint\x0a\x09from := aPoint.\x0a\x09to := anotherPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
category: 'public',
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRLineShape)});},
args: ["aPoint", "anotherPoint", "aColor"],
source: "from: aPoint to: anotherPoint color: aColor\x0a\x0a\x09self from: aPoint to: anotherPoint.\x0a\x09self strokePaint: aColor.\x0a\x09self color: aColor",
messageSends: ["from:to:", "strokePaint:", "color:"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPoint)._onLineFrom_to_within_(self["@from"],self["@to"],(3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRLineShape)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09^ aPoint onLineFrom: from to: to within: 3",
messageSends: ["onLineFrom:to:within:"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRLineShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@from"]=(0).__at((0));
self["@to"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRLineShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09from := 0 @ 0.\x0a\x09to := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@from"]).__plus(self["@to"])).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRLineShape)});},
args: [],
source: "position\x0a\x09^ ((from + to) / 2)",
messageSends: ["/", "+"],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.TRLineShape)});},
args: [],
source: "to\x0a\x09\x22Return a point\x22\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'accessing',
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

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@from"]).__plus(aPoint);
self["@to"]=_st(self["@to"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRLineShape)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09from := from + aPoint.\x0a\x09to := to + aPoint",
messageSends: ["+"],
referencedClasses: []
}),
smalltalk.TRLineShape);



smalltalk.addClass('TRNoShape', smalltalk.TRShape, [], 'Trachel-Core');
smalltalk.TRNoShape.comment="This implements the Null Pattern for a Trachel shape.";
smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRNoShape)});},
args: [],
source: "center\x0a\x090@0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRNoShape)});},
args: [],
source: "computePath\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRNoShape)});},
args: ["athensCanvas"],
source: "drawOn: athensCanvas\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__at((0)))._corner_((0).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRNoShape)});},
args: [],
source: "encompassingRectangle\x0a\x09^ 0@0 corner: 0@0",
messageSends: ["corner:", "@"],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
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
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRNoShape)});},
args: [],
source: "position\x0a\x09^ 0 @ 0",
messageSends: ["@"],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRNoShape)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'actions',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRNoShape)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09\x22do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
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
category: 'as yet unclassified',
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


smalltalk.addClass('TRSVGPath', smalltalk.TRShape, ['borderWidth', 'fillColor', 'scale', 'paths', 'pathPoints', 'points', 'curves', 'rotationAngle', 'rectangle'], 'Trachel-Core');
smalltalk.TRSVGPath.comment="A TRSVGPath is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09borderWidth:\x09\x09<Object>\x0a\x09curves:\x09\x09<Object>\x0a\x09fillColor:\x09\x09<Object>\x0a\x09pathPoints:\x09\x09<Object>\x0a\x09paths:\x09\x09<Object>\x0a\x09points:\x09\x09<Object>\x0a\x09rectangle:\x09\x09<Object>\x0a\x09rotationAngle:\x09\x09<Object>\x0a\x09scale:\x09\x09<Object>\x0a\x0aborderWidth\x0a\x09- xxxxx\x0a\x0acurves\x0a\x09- xxxxx\x0a\x0afillColor\x0a\x09- xxxxx\x0a\x0apathPoints\x0a\x09- xxxxx\x0a\x0apaths\x0a\x09- xxxxx\x0a\x0apoints\x0a\x09- xxxxx\x0a\x0arectangle\x0a\x09- xxxxx\x0a\x0arotationAngle\x0a\x09- xxxxx\x0a\x0ascale\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "angle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rotationAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"angle",{},smalltalk.TRSVGPath)});},
args: [],
source: "angle\x0a\x09^ rotationAngle",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._strokeColor_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.TRSVGPath)});},
args: ["aColor"],
source: "borderColor: aColor\x0a\x09self strokeColor: aColor",
messageSends: ["strokeColor:"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
category: 'accessing',
fn: function (width) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=width;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{width:width},smalltalk.TRSVGPath)});},
args: ["width"],
source: "borderWidth: width\x0a\x09borderWidth := width.",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRSVGPath)});},
args: [],
source: "center\x0a\x09^ rectangle center",
messageSends: ["center"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRSVGPath)});},
args: [],
source: "color\x0a\x09^ fillColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fillColor_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRSVGPath)});},
args: ["aColor"],
source: "color: aColor\x0a\x09^ self fillColor: aColor",
messageSends: ["fillColor:"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
self["@path"]=_st(self._athensCanvas())._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
_st(builder)._absolute();
return _st(self["@curves"])._do_((function(c){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(c)._key()).__eq("m");
if(smalltalk.assert($1)){
_st(builder)._moveTo_(_st(_st(c)._value())._at_((1)));
};
$2=_st(_st(c)._key()).__eq("l");
if(smalltalk.assert($2)){
_st(builder)._lineTo_(_st(_st(c)._value())._at_((1)));
};
$3=_st(_st(c)._key()).__eq("c");
if(smalltalk.assert($3)){
_st(builder)._curveVia_and_to_(_st(_st(c)._value())._at_((2)),_st(_st(c)._value())._at_((3)),_st(_st(c)._value())._at_((1)));
};
$4=_st(_st(c)._key()).__eq("q");
if(smalltalk.assert($4)){
return _st(builder)._curveVia_to_(_st(_st(c)._value())._at_((2)),_st(_st(c)._value())._at_((1)));
};
}, function($ctx3) {$ctx3.fillBlock({c:c},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRSVGPath)});},
args: [],
source: "computePath\x0a\x09path := (self athensCanvas createPath: [ :builder |\x0a\x09\x09\x09builder absolute.\x0a\x09\x09\x09curves do: [ :c |\x0a\x09\x09\x09\x09c key = 'm' ifTrue: [ builder moveTo: (c value at: 1) ].\x0a\x09\x09\x09\x09c key = 'l' ifTrue: [ builder lineTo: (c value at: 1) ].\x0a\x09\x09\x09\x09c key = 'c' ifTrue: [ builder curveVia: (c value at: 2) and: (c value at: 3) to: (c value at: 1) ].\x0a\x09\x09\x09\x09c key = 'q' ifTrue: [ builder curveVia: (c value at: 2) to: (c value at: 1) ]. ]\x0a\x09\x09])",
messageSends: ["createPath:", "absolute", "do:", "ifTrue:", "moveTo:", "at:", "value", "=", "key", "lineTo:", "curveVia:and:to:", "curveVia:to:", "athensCanvas"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curves",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@curves"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"curves",{},smalltalk.TRSVGPath)});},
args: [],
source: "curves\x0a\x09^ curves",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curves:",
category: 'accessing',
fn: function (someCurves) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@curves"]=someCurves;
self["@paths"]=self._separateSubPaths_(someCurves);
self["@pathPoints"]=_st($OrderedCollection())._new();
_st(self["@paths"])._do_((function(p){
var pts;
return smalltalk.withContext(function($ctx2) {
pts=_st($OrderedCollection())._new();
pts;
_st(p)._do_((function(curve){
return smalltalk.withContext(function($ctx3) {
$1=_st(_st(curve)._key()).__eq("m");
if(! smalltalk.assert($1)){
return _st(pts)._add_(_st(_st(_st(curve)._value())._at_((1))).__star(self["@scale"]));
};
}, function($ctx3) {$ctx3.fillBlock({curve:curve},$ctx2)})}));
return _st(self["@pathPoints"])._add_(pts);
}, function($ctx2) {$ctx2.fillBlock({p:p,pts:pts},$ctx1)})}));
self["@points"]=_st(self["@pathPoints"])._inject_into_([],(function(acc,next){
return smalltalk.withContext(function($ctx2) {
return _st(acc).__comma(next);
}, function($ctx2) {$ctx2.fillBlock({acc:acc,next:next},$ctx1)})}));
self["@position"]=_st(self._encompassingRectangle())._center();
return self}, function($ctx1) {$ctx1.fill(self,"curves:",{someCurves:someCurves},smalltalk.TRSVGPath)});},
args: ["someCurves"],
source: "curves: someCurves\x0a\x09curves := someCurves.\x0a\x09paths := self separateSubPaths: someCurves.\x0a\x09pathPoints := OrderedCollection new.\x0a\x09paths do: [ :p |\x0a\x09\x09|pts|\x0a\x09\x09pts := OrderedCollection new.\x0a\x09\x09p do: [ :curve |\x0a\x09\x09\x09curve key = 'm' ifFalse: [pts add: (curve value at: 1) * scale]\x0a\x09\x09].\x0a\x09\x09pathPoints add: pts.\x0a\x09].\x0a\x09points := pathPoints inject: #() into: [ :acc :next | acc, next ].\x0a\x09position := self encompassingRectangle center.",
messageSends: ["separateSubPaths:", "new", "do:", "ifFalse:", "add:", "*", "at:", "value", "=", "key", "inject:into:", ",", "center", "encompassingRectangle"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
category: 'drawing',
fn: function (aCanvas) {
var self=this;
var pt;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
pt=_st(aCanvas)._pathTransform();
_st(pt)._restoreAfter_((function(){
return smalltalk.withContext(function($ctx2) {
_st(pt)._scaleBy_(self["@scale"]);
_st(aCanvas)._setShape_(self._path());
$1=_st(self["@fillColor"])._isNotNil();
if(smalltalk.assert($1)){
$2=aCanvas;
_st($2)._setPaint_(self["@fillColor"]);
$3=_st($2)._draw();
$3;
};
_st(_st(aCanvas)._setStrokePaint_(self["@strokePaint"]))._width_(self["@borderWidth"]);
return _st(aCanvas)._draw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{aCanvas:aCanvas,pt:pt},smalltalk.TRSVGPath)});},
args: ["aCanvas"],
source: "drawOn: aCanvas\x0a\x09| pt |\x0a\x09pt := aCanvas pathTransform.\x0a\x09pt restoreAfter: [\x0a\x09\x09pt scaleBy: scale.\x0a\x09\x09aCanvas setShape: self path.\x0a\x09\x09fillColor isNotNil ifTrue: [ aCanvas setPaint: fillColor; draw ].\x0a\x09\x09(aCanvas setStrokePaint: strokePaint) width: borderWidth.\x0a\x09\x09aCanvas draw\x0a\x09]",
messageSends: ["pathTransform", "restoreAfter:", "scaleBy:", "setShape:", "path", "ifTrue:", "setPaint:", "draw", "isNotNil", "width:", "setStrokePaint:"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@rectangle"]=_st($Rectangle())._encompassing_(self["@points"]);
$1=self["@rectangle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRSVGPath)});},
args: [],
source: "encompassingRectangle\x0a\x09rectangle := Rectangle encompassing: points.\x0a\x09^ rectangle",
messageSends: ["encompassing:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "figure:",
category: 'drawing',
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(aCanvas)._createPath_((function(builder){
return smalltalk.withContext(function($ctx2) {
$2=builder;
_st($2)._absolute();
_st($2)._moveTo_((100).__at((200)));
_st($2)._curveVia_and_to_((100).__at((100)),(250).__at((100)),(250).__at((200)));
$3=_st($2)._curveVia_and_to_((250).__at((300)),(400).__at((300)),(400).__at((200)));
return $3;
}, function($ctx2) {$ctx2.fillBlock({builder:builder},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"figure:",{aCanvas:aCanvas},smalltalk.TRSVGPath)});},
args: ["aCanvas"],
source: "figure: aCanvas\x0a\x09^ aCanvas createPath: [:builder |\x0a\x09\x09builder\x0a\x09\x09\x09absolute;\x0a\x09\x09\x09moveTo: 100@200 ;\x0a\x09\x09\x09curveVia: 100@100 and: 250@100 to: 250@ 200;\x0a\x09\x09\x09curveVia: 250@300 and: 400@300 to: 400@200 ]",
messageSends: ["createPath:", "absolute", "moveTo:", "@", "curveVia:and:to:"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.TRSVGPath)});},
args: ["aColor"],
source: "fillColor: aColor\x0a\x09fillColor := aColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
category: 'testing',
fn: function (aPoint) {
var self=this;
var apt;
function $AthensPolygonTester(){return smalltalk.AthensPolygonTester||(typeof AthensPolygonTester=="undefined"?nil:AthensPolygonTester)}
return smalltalk.withContext(function($ctx1) { 
var $1;
apt=_st($AthensPolygonTester())._new();
$1=_st(self["@pathPoints"])._inject_into_(false,(function(res,p){
return smalltalk.withContext(function($ctx2) {
return _st(res)._or_(_st(_st(apt)._polygon_(p))._includesPoint_(aPoint));
}, function($ctx2) {$ctx2.fillBlock({res:res,p:p},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint,apt:apt},smalltalk.TRSVGPath)});},
args: ["aPoint"],
source: "includesPoint: aPoint\x0a\x09|apt|\x0a\x09apt := AthensPolygonTester new.\x0a\x09^ pathPoints inject: false into: [ :res :p |\x0a\x09\x09res or: ((apt polygon: p) includesPoint: aPoint)\x0a\x09]",
messageSends: ["new", "inject:into:", "or:", "includesPoint:", "polygon:"],
referencedClasses: ["AthensPolygonTester"]
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRSVGPath.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@curves"]=[];
self["@paths"]=[];
self["@pathPoints"]=[];
self["@points"]=[];
self["@rotationAngle"]=(0);
self["@rectangle"]=_st($Rectangle())._origin_corner_((0).__at((0)),(0).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRSVGPath)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09curves := #().\x0a\x09paths := #().\x0a\x09pathPoints := #().\x0a\x09points := #().\x0a\x09rotationAngle := 0.\x0a\x09rectangle := Rectangle origin: 0@0 corner: 0@0.",
messageSends: ["initialize", "origin:corner:", "@"],
referencedClasses: ["Rectangle"]
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:",
category: 'actions',
fn: function (anAngle) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
var $1;
center=_st(self._center()).__slash(self["@scale"]);
self._curves_(_st(self._curves())._collect_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._key()).__minus_gt(_st(_st(c)._value())._collect_((function(p){
var pp,cosTheta,sinTheta;
return smalltalk.withContext(function($ctx3) {
pp=_st(p).__minus(center);
pp;
cosTheta=_st(anAngle)._cos();
cosTheta;
sinTheta=_st(anAngle)._sin();
sinTheta;
return _st(_st(_st(_st(_st(pp)._x()).__star(cosTheta)).__minus(_st(_st(pp)._y()).__star(sinTheta))).__at(_st(_st(_st(pp)._x()).__star(sinTheta)).__plus(_st(_st(pp)._y()).__star(cosTheta)))).__plus(center);
}, function($ctx3) {$ctx3.fillBlock({p:p,pp:pp,cosTheta:cosTheta,sinTheta:sinTheta},$ctx2)})})));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})})));
self["@rotationAngle"]=_st(self["@rotationAngle"]).__plus(anAngle);
$1=self["@rotationAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateBy:",{anAngle:anAngle,center:center},smalltalk.TRSVGPath)});},
args: ["anAngle"],
source: "rotateBy: anAngle\x0a\x09|center|\x0a\x09center := self center / scale.\x0a\x09\x0a\x09self curves: (self curves collect: [ :c |\x0a\x09\x09c key -> (c value collect: [ :p |\x0a\x09\x09\x09| pp cosTheta sinTheta |\x0a\x09\x09\x09pp := p - center.\x0a\x09\x09\x09cosTheta := anAngle cos.\x0a\x09\x09\x09sinTheta := anAngle sin.\x0a\x09\x09\x09(pp x * cosTheta - (pp y * sinTheta)) @ (pp x * sinTheta + (pp y * cosTheta))\x0a\x09\x09\x09+ center.\x0a\x09\x09])]).\x0a\x09\x0a\x09rotationAngle := rotationAngle + anAngle.\x0a\x09^ rotationAngle.",
messageSends: ["/", "center", "curves:", "collect:", "->", "-", "cos", "sin", "+", "@", "*", "y", "x", "value", "key", "curves"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:",
category: 'actions',
fn: function (anAngle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rotateBy_(_st(anAngle).__minus(self["@rotationAngle"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:",{anAngle:anAngle},smalltalk.TRSVGPath)});},
args: ["anAngle"],
source: "rotateTo: anAngle\x0a\x09^ self rotateBy: anAngle - rotationAngle.",
messageSends: ["rotateBy:", "-"],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.TRSVGPath)});},
args: [],
source: "scale\x0a\x09^ scale",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNumber:aNumber},smalltalk.TRSVGPath)});},
args: ["aNumber"],
source: "scale: aNumber\x0a\x09scale := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "separateSubPaths:",
category: 'hooks',
fn: function (someCurves) {
var self=this;
var subPath;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
self["@paths"]=_st($OrderedCollection())._new();
subPath=_st($OrderedCollection())._new();
_st(someCurves)._do_((function(c){
return smalltalk.withContext(function($ctx2) {
$1=_st(_st(c)._key()).__eq("m");
if(smalltalk.assert($1)){
_st(self["@paths"])._add_(subPath);
subPath=_st($OrderedCollection())._new();
subPath;
};
return _st(subPath)._add_(c);
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
_st(self["@paths"])._add_(subPath);
$2=self["@paths"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"separateSubPaths:",{someCurves:someCurves,subPath:subPath},smalltalk.TRSVGPath)});},
args: ["someCurves"],
source: "separateSubPaths: someCurves\x0a\x09| subPath |\x0a\x09paths := OrderedCollection new.\x0a\x09subPath := OrderedCollection new.\x0a\x09\x0a\x09someCurves do: [ :c |\x0a\x09\x09c key = 'm' ifTrue: [ paths add: subPath. subPath:= OrderedCollection new ].\x0a\x09\x09subPath add: c.\x0a\x09].\x0a\x09paths add: subPath.\x0a\x09^ paths",
messageSends: ["new", "do:", "ifTrue:", "add:", "=", "key"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'actions',
fn: function (aPoint) {
var self=this;
var disp;
return smalltalk.withContext(function($ctx1) { 
disp=_st(_st(aPoint).__minus(self["@position"])).__slash(self["@scale"]);
smalltalk.TRSVGPath.superclass.fn.prototype._translateTo_.apply(_st(self), [aPoint]);
self._curves_(_st(self._curves())._collect_((function(c){
return smalltalk.withContext(function($ctx2) {
return _st(_st(c)._key()).__minus_gt(_st(_st(c)._value())._collect_((function(p){
return smalltalk.withContext(function($ctx3) {
return _st(p).__plus(disp);
}, function($ctx3) {$ctx3.fillBlock({p:p},$ctx2)})})));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})})));
self["@rectangle"]=_st(self["@rectangle"])._translateBy_(disp);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint,disp:disp},smalltalk.TRSVGPath)});},
args: ["aPoint"],
source: "translateTo: aPoint\x0a\x09| disp |\x0a\x09disp := (aPoint - position) / scale.\x0a\x09super translateTo: aPoint.\x0a\x09self curves: (self curves collect: [ :c |\x0a\x09\x09c key -> (c value collect: [ :p | p + disp ])]).\x0a\x09rectangle := rectangle translateBy: disp.",
messageSends: ["/", "-", "translateTo:", "curves:", "collect:", "->", "+", "value", "key", "curves", "translateBy:"],
referencedClasses: []
}),
smalltalk.TRSVGPath);



smalltalk.addClass('TRTranslationCallback', smalltalk.TRObject, ['block'], 'Trachel-Core');
smalltalk.TRTranslationCallback.comment="A TRTranslationCallback is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09block:\x09\x09<Object>\x0a\x0ablock\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "block",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@block"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.TRTranslationCallback)});},
args: [],
source: "block\x0a\x09^ block",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRTranslationCallback);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
category: 'accessing',
fn: function (aOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@block"]=aOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aOneArgBlock:aOneArgBlock},smalltalk.TRTranslationCallback)});},
args: ["aOneArgBlock"],
source: "block: aOneArgBlock\x0a\x09\x22aThreeArgBlock follows the pattern [ :shape | ... ]\x22\x0a\x09block := aOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRTranslationCallback);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRTranslationCallback.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@block"]=(function(shape,step){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRTranslationCallback)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09block := [ :shape :step | ]",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.TRTranslationCallback);


smalltalk.addMethod(
smalltalk.method({
selector: "block:",
category: 'public',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._block_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"block:",{aBlock:aBlock},smalltalk.TRTranslationCallback.klass)});},
args: ["aBlock"],
source: "block: aBlock\x0a\x09^ self new block: aBlock",
messageSends: ["block:", "new"],
referencedClasses: []
}),
smalltalk.TRTranslationCallback.klass);


smalltalk.addClass('TRTest', smalltalk.TestCase, [], 'Trachel-Core');
smalltalk.TRTest.comment="A TRTest is xxxxxxxxx.";


smalltalk.addClass('TRArcShapeTest', smalltalk.TRTest, ['arc1', 'arc2', 'arc3', 'arc4', 'arc5', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p1n', 'p2n', 'p3n', 'p4n', 'p5n', 'p6n', 'p7n', 'p8n', 'arcQ1', 'arcQ2', 'arcQ3', 'arcQ4', 'pR', 'pB', 'pL', 'pT', 'pQ1', 'pQ2', 'pQ3', 'pQ4'], 'Trachel-Core');
smalltalk.TRArcShapeTest.comment="A TRArcShapeTest is a test class for testing the behavior of TRArcShape";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'basic tests',
fn: function () {
var self=this;
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
return smalltalk.withContext(function($ctx1) { 
self["@arc1"]=_st($TRArcShape())._new();
self["@arc2"]=_st($TRArcShape())._new();
self["@arc3"]=_st($TRArcShape())._new();
self["@arc4"]=_st($TRArcShape())._new();
self["@arc5"]=_st($TRArcShape())._new();
self["@arcQ1"]=_st($TRArcShape())._new();
self["@arcQ2"]=_st($TRArcShape())._new();
self["@arcQ3"]=_st($TRArcShape())._new();
self["@arcQ4"]=_st($TRArcShape())._new();
_st(self["@arc1"])._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(360),(0),(100));
_st(self["@arc2"])._alphaAngle_betaAngle_innerRadius_externalRadius_((30),(60),(50),(50));
_st(self["@arc3"])._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(90),(2)._sqrt(),(2)._sqrt());
_st(self["@arc4"])._alphaAngle_betaAngle_innerRadius_externalRadius_((180),(270),(50),(150));
_st(self["@arc5"])._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(270),(50),(150));
_st(self["@arcQ1"])._alphaAngle_betaAngle_innerRadius_externalRadius_((0),(90),(0),(100));
_st(self["@arcQ2"])._alphaAngle_betaAngle_innerRadius_externalRadius_((90),(180),(0),(100));
_st(self["@arcQ3"])._alphaAngle_betaAngle_innerRadius_externalRadius_((180),(270),(0),(100));
_st(self["@arcQ4"])._alphaAngle_betaAngle_innerRadius_externalRadius_((270),(360),(0),(100));
self["@pR"]=(100).__at((0));
self["@pB"]=(0).__at((100));
self["@pL"]=(-100).__at((0));
self["@pT"]=(0).__at((-100));
self["@pQ1"]=(50).__at((50));
self["@pQ2"]=(-50).__at((50));
self["@pQ3"]=(-50).__at((-50));
self["@pQ4"]=(50).__at((-50));
self["@p1"]=(0).__at((0));
self["@p2"]=(100).__at((100));
self["@p3"]=(50).__at((50));
self["@p4"]=(0).__at((150));
self["@p5"]=(1).__at((1));
self["@p6"]=(0).__at((-100));
self["@p7"]=(-100).__at((0));
self["@p8"]=(-100).__at((-100));
self["@p1n"]=_st(self["@p1"])._negated();
self["@p2n"]=_st(self["@p2"])._negated();
self["@p3n"]=_st(self["@p3"])._negated();
self["@p4n"]=_st(self["@p4"])._negated();
self["@p5n"]=_st(self["@p5"])._negated();
self["@p6n"]=_st(self["@p6"])._negated();
self["@p7n"]=_st(self["@p7"])._negated();
self["@p8n"]=_st(self["@p8"])._negated();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRArcShapeTest)});},
args: [],
source: "setUp\x0a\x09arc1:=TRArcShape new.\x0a\x09arc2:=TRArcShape new.\x0a\x09arc3:=TRArcShape new.\x0a\x09arc4:=TRArcShape new.\x0a\x09arc5:=TRArcShape new.\x0a\x09arcQ1:=TRArcShape new.\x0a\x09arcQ2:=TRArcShape new.\x0a\x09arcQ3:=TRArcShape new.\x0a\x09arcQ4:=TRArcShape new.\x0a\x09arc1 alphaAngle: 0 betaAngle: 360 innerRadius:  0 externalRadius:  100.\x0a\x09arc2 alphaAngle: 30 betaAngle: 60 innerRadius:  50 externalRadius:  50.\x0a\x09arc3 alphaAngle: 0 betaAngle:  90 innerRadius:  2 sqrt externalRadius: 2 sqrt.\x0a\x09arc4 alphaAngle:180 betaAngle: 270 innerRadius: 50 externalRadius:150.\x0a\x09arc5 alphaAngle:0 betaAngle: 270 innerRadius: 50 externalRadius:150.\x0a\x09arcQ1 alphaAngle: 0 betaAngle: 90 innerRadius:  0 externalRadius:  100.\x0a\x09arcQ2 alphaAngle: 90 betaAngle: 180 innerRadius:  0 externalRadius:  100.\x0a\x09arcQ3 alphaAngle: 180 betaAngle: 270 innerRadius:  0 externalRadius:  100.\x0a\x09arcQ4 alphaAngle: 270 betaAngle: 360 innerRadius:  0 externalRadius:  100.\x0a\x09pR:=100 @ 0.\x0a\x09pB:=0 @ 100.\x0a\x09pL:=-100 @ 0.\x0a\x09pT:=0 @ -100.\x0a\x09pQ1:=50 @ 50.\x0a\x09pQ2:=-50 @ 50.\x0a\x09pQ3:=-50 @ -50.\x0a\x09pQ4:=50 @ -50.\x0a\x09p1:= 0 @ 0.\x0a\x09p2:=100 @ 100.\x0a\x09p3:=50 @ 50.\x0a\x09p4:= 0 @ 150.\x0a\x09p5:=1 @ 1.\x0a\x09p6:=0 @ -100.\x0a\x09p7:=-100 @ 0.\x0a\x09p8:=-100 @ -100.\x0a\x09p1n:=p1 negated.\x0a\x09p2n:=p2 negated.\x0a\x09p3n:=p3 negated.\x0a\x09p4n:= p4 negated.\x0a\x09p5n:=p5 negated.\x0a\x09p6n:=p6 negated.\x0a\x09p7n:=p7 negated.\x0a\x09p8n:=p8 negated.",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "sqrt", "@", "negated"],
referencedClasses: ["TRArcShape"]
}),
smalltalk.TRArcShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEncompassingRectangle",
category: 'basic tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@arc1"])._encompassingRectangle()).__eq(_st((-100).__at((100)))._corner_((100).__at((-100)))));
self._assert_(_st(_st(_st(_st(self["@arc1"])._encompassingRectangle())._width())._abs()).__eq((200)));
self._assert_(_st(_st(_st(_st(self["@arc2"])._encompassingRectangle())._width())._abs()).__lt((50)));
self._assert_(_st(_st(_st(_st(self["@arc2"])._encompassingRectangle())._height())._abs()).__lt((50)));
self._assert_(_st(_st(_st(_st(self["@arc3"])._encompassingRectangle())._height())._abs()).__eq((2)._sqrt()));
self._assert_(_st(_st(_st(_st(_st(self["@arc4"])._encompassingRectangle())._height())._abs())._roundDownTo_((1))).__eq((150)));
self._assert_(_st(_st(_st(_st(_st(self["@arc4"])._encompassingRectangle())._width())._abs())._roundDownTo_((1))).__eq((150)));
self._assert_(_st(_st(_st(_st(self["@arc5"])._encompassingRectangle())._width())._abs()).__eq((300)));
self._assert_(_st(_st(_st(_st(self["@arc5"])._encompassingRectangle())._height())._abs()).__eq((300)));
return self}, function($ctx1) {$ctx1.fill(self,"testEncompassingRectangle",{},smalltalk.TRArcShapeTest)});},
args: [],
source: "testEncompassingRectangle\x0a\x09self assert: (arc1 encompassingRectangle = ((-100.0@100.0) corner: (100.0@ -100.0))).\x0a\x09self assert: (arc1 encompassingRectangle width abs = 200).\x0a\x09self assert:(arc2 encompassingRectangle width abs < 50).  \x0a\x09self assert:(arc2 encompassingRectangle height abs < 50).\x0a\x09self assert: (arc3 encompassingRectangle height abs= 2 sqrt).\x0a\x09self assert: (((arc4 encompassingRectangle height abs) roundDownTo: 1 )= 150). \x0a\x09self assert: (((arc4 encompassingRectangle width abs) roundDownTo: 1 )= 150). \x0a\x09self assert: (arc5 encompassingRectangle width abs= 300).\x0a\x09self assert: (arc5 encompassingRectangle height abs= 300).",
messageSends: ["assert:", "=", "corner:", "@", "encompassingRectangle", "abs", "width", "<", "height", "sqrt", "roundDownTo:"],
referencedClasses: []
}),
smalltalk.TRArcShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludesPoint",
category: 'basic tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p1"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p2"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p3"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p4"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p5"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p6"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p7"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p8"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p1n"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p2n"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p3n"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p4n"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p5n"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p6n"]));
self._assert_(_st(self["@arc1"])._includesPoint_(self["@p7n"]));
self._deny_(_st(self["@arc1"])._includesPoint_(self["@p8n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p1"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p2"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p3"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p4"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p5"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p6"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p7"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p8"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p1n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p2n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p3n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p4n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p5n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p6n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p7n"]));
self._deny_(_st(self["@arc2"])._includesPoint_(self["@p8n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p1"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p2"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p3"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p4"]));
self._assert_(_st(self["@arc3"])._includesPoint_(self["@p5"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p6"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p7"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p8"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p1n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p2n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p3n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p4n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p5n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p6n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p7n"]));
self._deny_(_st(self["@arc3"])._includesPoint_(self["@p8n"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p1"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p2"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p3"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p4"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p5"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p6"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p7"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p8"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p1n"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p2n"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p3n"]));
self._assert_(_st(self["@arc4"])._includesPoint_(self["@p4n"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p5n"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p6n"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p7n"]));
self._deny_(_st(self["@arc4"])._includesPoint_(self["@p8n"]));
self._deny_(_st(self["@arc5"])._includesPoint_(self["@p1"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p2"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p3"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p4"]));
self._deny_(_st(self["@arc5"])._includesPoint_(self["@p5"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p6"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p7"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p8"]));
self._deny_(_st(self["@arc5"])._includesPoint_(self["@p1n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p2n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p3n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p4n"]));
self._deny_(_st(self["@arc5"])._includesPoint_(self["@p5n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p6n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p7n"]));
self._assert_(_st(self["@arc5"])._includesPoint_(self["@p8n"]));
self._assert_(_st(self["@arcQ1"])._includesPoint_(self["@pR"]));
self._assert_(_st(self["@arcQ1"])._includesPoint_(self["@pQ1"]));
self._assert_(_st(self["@arcQ1"])._includesPoint_(self["@pB"]));
self._deny_(_st(self["@arcQ1"])._includesPoint_(self["@pQ2"]));
self._deny_(_st(self["@arcQ1"])._includesPoint_(self["@pL"]));
self._deny_(_st(self["@arcQ1"])._includesPoint_(self["@pQ3"]));
self._deny_(_st(self["@arcQ1"])._includesPoint_(self["@pT"]));
self._deny_(_st(self["@arcQ1"])._includesPoint_(self["@pQ4"]));
self._deny_(_st(self["@arcQ2"])._includesPoint_(self["@pR"]));
self._deny_(_st(self["@arcQ2"])._includesPoint_(self["@pQ1"]));
self._assert_(_st(self["@arcQ2"])._includesPoint_(self["@pB"]));
self._assert_(_st(self["@arcQ2"])._includesPoint_(self["@pQ2"]));
self._assert_(_st(self["@arcQ2"])._includesPoint_(self["@pL"]));
self._deny_(_st(self["@arcQ2"])._includesPoint_(self["@pQ3"]));
self._deny_(_st(self["@arcQ2"])._includesPoint_(self["@pT"]));
self._deny_(_st(self["@arcQ2"])._includesPoint_(self["@pQ4"]));
self._deny_(_st(self["@arcQ3"])._includesPoint_(self["@pR"]));
self._deny_(_st(self["@arcQ3"])._includesPoint_(self["@pQ1"]));
self._deny_(_st(self["@arcQ3"])._includesPoint_(self["@pB"]));
self._deny_(_st(self["@arcQ3"])._includesPoint_(self["@pQ2"]));
self._assert_(_st(self["@arcQ3"])._includesPoint_(self["@pL"]));
self._assert_(_st(self["@arcQ3"])._includesPoint_(self["@pQ3"]));
self._assert_(_st(self["@arcQ3"])._includesPoint_(self["@pT"]));
self._deny_(_st(self["@arcQ3"])._includesPoint_(self["@pQ4"]));
self._assert_(_st(self["@arcQ4"])._includesPoint_(self["@pR"]));
self._deny_(_st(self["@arcQ4"])._includesPoint_(self["@pQ1"]));
self._deny_(_st(self["@arcQ4"])._includesPoint_(self["@pB"]));
self._deny_(_st(self["@arcQ4"])._includesPoint_(self["@pQ2"]));
self._deny_(_st(self["@arcQ4"])._includesPoint_(self["@pL"]));
self._deny_(_st(self["@arcQ4"])._includesPoint_(self["@pQ3"]));
self._assert_(_st(self["@arcQ4"])._includesPoint_(self["@pT"]));
self._assert_(_st(self["@arcQ4"])._includesPoint_(self["@pQ4"]));
return self}, function($ctx1) {$ctx1.fill(self,"testIncludesPoint",{},smalltalk.TRArcShapeTest)});},
args: [],
source: "testIncludesPoint\x09\x0a\x09self assert: (arc1 includesPoint: p1).\x0a\x09self deny: (arc1 includesPoint: p2).\x0a\x09self assert: (arc1 includesPoint: p3).\x0a\x09self deny: (arc1 includesPoint: p4).\x0a\x09self assert: (arc1 includesPoint: p5).\x09\x0a\x09self assert: (arc1 includesPoint: p6).\x0a\x09self assert: (arc1 includesPoint: p7).\x0a\x09self deny: (arc1 includesPoint: p8).\x0a\x09self assert: (arc1 includesPoint: p1n).\x0a\x09self deny: (arc1 includesPoint: p2n).\x0a\x09self assert: (arc1 includesPoint: p3n).\x0a\x09self deny: (arc1 includesPoint: p4n).\x0a\x09self assert: (arc1 includesPoint: p5n).\x09\x0a\x09self assert: (arc1 includesPoint: p6n).\x0a\x09self assert: (arc1 includesPoint: p7n).\x0a\x09self deny: (arc1 includesPoint: p8n).\x0a\x09\x0a\x09self deny: (arc2 includesPoint: p1).\x0a\x09self deny: (arc2 includesPoint: p2).\x0a\x09self deny: (arc2 includesPoint: p3).\x0a\x09self deny: (arc2 includesPoint: p4).\x0a\x09self deny: (arc2 includesPoint: p5).\x09\x0a\x09self deny: (arc2 includesPoint: p6).\x0a\x09self deny: (arc2 includesPoint: p7).\x0a\x09self deny: (arc2 includesPoint: p8).\x0a\x09self deny: (arc2 includesPoint: p1n).\x0a\x09self deny: (arc2 includesPoint: p2n).\x0a\x09self deny: (arc2 includesPoint: p3n).\x0a\x09self deny: (arc2 includesPoint: p4n).\x0a\x09self deny: (arc2 includesPoint: p5n).\x09\x0a\x09self deny: (arc2 includesPoint: p6n).\x0a\x09self deny: (arc2 includesPoint: p7n).\x0a\x09self deny: (arc2 includesPoint: p8n).\x0a\x09\x0a\x09self deny: (arc3 includesPoint: p1).\x0a\x09self deny: (arc3 includesPoint: p2).\x0a\x09self deny: (arc3 includesPoint: p3).\x0a\x09self deny: (arc3 includesPoint: p4).\x0a\x09self assert: (arc3 includesPoint: p5).\x0a\x09self deny: (arc3 includesPoint: p6).\x0a\x09self deny: (arc3 includesPoint: p7).\x0a\x09self deny: (arc3 includesPoint: p8).\x0a\x09self deny: (arc3 includesPoint: p1n).\x0a\x09self deny: (arc3 includesPoint: p2n).\x0a\x09self deny: (arc3 includesPoint: p3n).\x0a\x09self deny: (arc3 includesPoint: p4n).\x0a\x09self deny: (arc3 includesPoint: p5n).\x0a\x09self deny: (arc3 includesPoint: p6n).\x0a\x09self deny: (arc3 includesPoint: p7n).\x0a\x09self deny: (arc3 includesPoint: p8n).\x0a\x09\x0a\x09self deny: (arc4 includesPoint: p1).\x0a\x09self deny: (arc4 includesPoint: p2).\x0a\x09self deny: (arc4 includesPoint: p3).\x0a\x09self deny: (arc4 includesPoint: p4).\x0a\x09self deny: (arc4 includesPoint: p5).\x09\x0a\x09self assert:(arc4 includesPoint: p6).\x0a\x09self assert:(arc4 includesPoint: p7).\x0a\x09self assert:(arc4 includesPoint: p8).\x0a\x09self deny: (arc4 includesPoint: p1n).\x0a\x09self assert: (arc4 includesPoint: p2n).\x0a\x09self assert: (arc4 includesPoint: p3n).\x0a\x09self assert: (arc4 includesPoint: p4n).\x0a\x09self deny: (arc4 includesPoint: p5n).\x09\x0a\x09self deny: (arc4 includesPoint: p6n).\x0a\x09self deny: (arc4 includesPoint: p7n).\x0a\x09self deny: (arc4 includesPoint: p8n).\x0a\x09\x0a\x09self deny: (arc5 includesPoint: p1).\x0a\x09self assert: (arc5 includesPoint: p2).\x0a\x09self assert: (arc5 includesPoint: p3).\x0a\x09self assert: (arc5 includesPoint: p4).\x0a\x09self deny: (arc5 includesPoint: p5).\x09\x0a\x09self assert:(arc5 includesPoint: p6).\x0a\x09self assert:(arc5 includesPoint: p7).\x0a\x09self assert:(arc5 includesPoint: p8).\x0a\x09self deny: (arc5 includesPoint: p1n).\x0a\x09self assert: (arc5 includesPoint: p2n).\x0a\x09self assert: (arc5 includesPoint: p3n).\x0a\x09self assert: (arc5 includesPoint: p4n).\x0a\x09self deny: (arc5 includesPoint: p5n).\x09\x0a\x09self assert: (arc5 includesPoint: p6n).\x0a\x09self assert: (arc5 includesPoint: p7n).\x0a\x09self assert: (arc5 includesPoint: p8n).\x0a\x09\x0a\x09self assert:(arcQ1 includesPoint: pR).\x0a\x09self assert:(arcQ1 includesPoint: pQ1).\x0a\x09self assert:(arcQ1 includesPoint: pB).\x0a\x09self deny:(arcQ1 includesPoint: pQ2).\x0a\x09self deny:(arcQ1 includesPoint: pL).\x0a\x09self deny:(arcQ1 includesPoint: pQ3).\x0a\x09self deny:(arcQ1 includesPoint: pT).\x0a\x09self deny:(arcQ1 includesPoint: pQ4).\x0a\x09\x0a\x09self deny:(arcQ2 includesPoint: pR).\x0a\x09self deny:(arcQ2 includesPoint: pQ1).\x0a\x09self assert:(arcQ2 includesPoint: pB).\x0a\x09self assert:(arcQ2 includesPoint: pQ2).\x0a\x09self assert:(arcQ2 includesPoint: pL).\x0a\x09self deny:(arcQ2 includesPoint: pQ3).\x0a\x09self deny:(arcQ2 includesPoint: pT).\x0a\x09self deny:(arcQ2 includesPoint: pQ4).\x0a\x09\x0a\x09self deny:(arcQ3 includesPoint: pR).\x0a\x09self deny:(arcQ3 includesPoint: pQ1).\x0a\x09self deny:(arcQ3 includesPoint: pB).\x0a\x09self deny:(arcQ3 includesPoint: pQ2).\x0a\x09self assert:(arcQ3 includesPoint: pL).\x0a\x09self assert:(arcQ3 includesPoint: pQ3).\x0a\x09self assert:(arcQ3 includesPoint: pT).\x0a\x09self deny:(arcQ3 includesPoint: pQ4).\x0a\x09\x0a\x09self assert:(arcQ4 includesPoint: pR).\x0a\x09self deny:(arcQ4 includesPoint: pQ1).\x0a\x09self deny:(arcQ4 includesPoint: pB).\x0a\x09self deny:(arcQ4 includesPoint: pQ2).\x0a\x09self deny:(arcQ4 includesPoint: pL).\x0a\x09self deny:(arcQ4 includesPoint: pQ3).\x0a\x09self assert:(arcQ4 includesPoint: pT).\x0a\x09self assert:(arcQ4 includesPoint: pQ4).",
messageSends: ["assert:", "includesPoint:", "deny:"],
referencedClasses: []
}),
smalltalk.TRArcShapeTest);



smalltalk.addClass('TRCallbackTest', smalltalk.TRTest, ['canvas', 'circle1', 'circle2'], 'Trachel-Core');
smalltalk.TRCallbackTest.comment="A TRCallbackTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09canvas:\x09\x09<Object>\x0a\x09circle1:\x09\x09<Object>\x0a\x09circle2:\x09\x09<Object>\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0acircle1\x0a\x09- xxxxx\x0a\x0acircle2\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'as yet unclassified',
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st($TRCanvas())._new();
self["@circle1"]=_st(self["@canvas"])._buildCircleFrom_to_color_((20).__at((20)),(150).__at((100)),_st(_st($Color())._green())._alpha_((0.1)));
self["@circle2"]=_st(self["@canvas"])._buildCircleFrom_to_color_((200).__at((200)),(240).__at((230)),_st(_st($Color())._blue())._alpha_((0.1)));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCallbackTest)});},
args: [],
source: "setUp\x0a\x0a\x09canvas := TRCanvas new.\x0a\x09circle1 := canvas buildCircleFrom: 20 @ 20 to: 150 @ 100 color: (Color green alpha: 0.1).\x0a\x09circle2 := canvas buildCircleFrom: 200 @ 200 to: 240 @ 230 color: (Color blue alpha: 0.1).",
messageSends: ["new", "buildCircleFrom:to:color:", "@", "alpha:", "green", "blue"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCallbackTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCallback",
category: 'as yet unclassified',
fn: function () {
var self=this;
var callback,v,s;
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
callback=_st($TRTranslationCallback())._block_((function(shape,step){
return smalltalk.withContext(function($ctx2) {
v=shape;
v;
s=step;
return s;
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})}));
_st(self["@circle1"])._addCallback_(callback);
_st(self["@circle1"])._translateTo_((20).__at((30)));
self._assert_(_st(v).__eq_eq(self["@circle1"]));
self._assert_(_st(_st(v)._center()).__eq((20).__at((30))));
self._assert_(_st(s).__eq((-65).__at((-30))));
v=nil;
_st(self["@circle1"])._translateBy_((5).__at((3)));
self._assert_(_st(v).__eq_eq(self["@circle1"]));
self._assert_(_st(_st(v)._center()).__eq((25).__at((33))));
self._assert_(_st(s).__eq((5).__at((3))));
return self}, function($ctx1) {$ctx1.fill(self,"testCallback",{callback:callback,v:v,s:s},smalltalk.TRCallbackTest)});},
args: [],
source: "testCallback\x0a\x09| callback v s  |\x0a\x09callback := TRTranslationCallback \x0a\x09\x09\x09\x09\x09\x09block: [ :shape :step | \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09v := shape. s := step ].\x0a\x09circle1 addCallback: callback.\x0a\x0a\x09circle1 translateTo: 20 @ 30.\x0a\x09self assert: v == circle1.\x0a\x09self assert: v center = (20 @ 30).\x0a\x09self assert: s = (-65 @ -30).\x0a\x0a\x09v := nil.\x0a\x09circle1 translateBy: 5 @ 3.\x0a\x09self assert: v == circle1.\x0a\x09self assert: v center = (25 @ 33).\x0a\x09self assert: s = (5 @ 3).",
messageSends: ["block:", "addCallback:", "translateTo:", "@", "assert:", "==", "=", "center", "translateBy:"],
referencedClasses: ["TRTranslationCallback"]
}),
smalltalk.TRCallbackTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHasCallBack",
category: 'as yet unclassified',
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._deny_(_st(_st($TREllipseShape())._new())._hasCallback());
self._assert_(_st(_st(_st($TREllipseShape())._new())._addCallback_(_st($TRTranslationCallback())._new()))._hasCallback());
return self}, function($ctx1) {$ctx1.fill(self,"testHasCallBack",{},smalltalk.TRCallbackTest)});},
args: [],
source: "testHasCallBack\x0a\x0a\x09self deny: TREllipseShape new hasCallback.\x0a\x09self assert: (TREllipseShape new addCallback: TRTranslationCallback new) hasCallback",
messageSends: ["deny:", "hasCallback", "new", "assert:", "addCallback:"],
referencedClasses: ["TREllipseShape", "TRTranslationCallback"]
}),
smalltalk.TRCallbackTest);



smalltalk.addClass('TRCameraTest', smalltalk.TRTest, ['camera', 'canvas'], 'Trachel-Core');
smalltalk.TRCameraTest.comment="A TRCameraTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09camera:\x09\x09<Object>\x0a\x09canvas:\x09\x09<Object>\x0a\x0acamera\x0a\x09- xxxxx\x0a\x0acanvas\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCameraTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@canvas"]=_st($TRCanvas())._new();
self["@camera"]=_st(self["@canvas"])._camera();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCameraTest)});},
args: [],
source: "setUp\x0a\x09super setUp. \x0a\x09canvas := TRCanvas new.\x0a\x09camera := canvas camera",
messageSends: ["setUp", "new", "camera"],
referencedClasses: ["TRCanvas"]
}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testConversion",
category: 'conversion',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@camera"])._fromSpaceToPixel_((0).__at((0)))).__eq(_st(_st(self["@canvas"])._extent()).__slash((2))));
self._assert_(_st(_st(self["@camera"])._fromSpaceToPixel_((10).__at((10)))).__eq(_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__plus((10).__at((10)))));
self._assert_(_st(_st(self["@camera"])._fromPixelToSpace_(_st(_st(self["@canvas"])._extent()).__slash((2)))).__eq((0).__at((0))));
self._assert_(_st(_st(self["@camera"])._fromPixelToSpace_(_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__plus((10).__at((10))))).__eq((10).__at((10))));
return self}, function($ctx1) {$ctx1.fill(self,"testConversion",{},smalltalk.TRCameraTest)});},
args: [],
source: "testConversion\x0a\x09self assert: (camera fromSpaceToPixel: 0 @ 0) = (canvas extent / 2).\x0a\x09self assert: (camera fromSpaceToPixel: 10 @ 10) = ((canvas extent / 2) + (10 @ 10)).\x0a\x0a\x09self assert: (camera fromPixelToSpace: (canvas extent / 2)) = (0 @ 0).\x0a\x09self assert: (camera fromPixelToSpace: ((canvas extent / 2) + (10 @ 10))) = (10 @ 10)",
messageSends: ["assert:", "=", "/", "extent", "fromSpaceToPixel:", "@", "+", "fromPixelToSpace:"],
referencedClasses: []
}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFocusingCenter",
category: 'focusing',
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._addShape_(_st(_st($TREllipseShape())._new())._from_to_((50).__at((50)),(100).__at((80))));
_st(_st(self["@canvas"])._camera())._focusOnCenter();
self._assert_(_st(_st(_st(self["@canvas"])._camera())._position()).__eq((75).__at((65))));
return self}, function($ctx1) {$ctx1.fill(self,"testFocusingCenter",{},smalltalk.TRCameraTest)});},
args: [],
source: "testFocusingCenter\x0a\x09canvas addShape: (TREllipseShape new from: 50 @ 50 to: 100 @ 80).\x0a\x09canvas camera focusOnCenter.\x0a\x09self assert: canvas camera position = (75 @ 65)",
messageSends: ["addShape:", "from:to:", "@", "new", "focusOnCenter", "camera", "assert:", "=", "position"],
referencedClasses: ["TREllipseShape"]
}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitialization",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@camera"])._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testInitialization",{},smalltalk.TRCameraTest)});},
args: [],
source: "testInitialization\x0a\x09self assert: camera position = (0 @ 0)",
messageSends: ["assert:", "=", "@", "position"],
referencedClasses: []
}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslation",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@camera"])._translateTo_((5).__at((3)));
self._assert_(_st(_st(self["@camera"])._position()).__eq((5).__at((3))));
_st(self["@camera"])._translateBy_((2).__at((4)));
self._assert_(_st(_st(self["@camera"])._position()).__eq((7).__at((7))));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslation",{},smalltalk.TRCameraTest)});},
args: [],
source: "testTranslation\x0a\x09camera translateTo: 5 @ 3.\x0a\x09self assert: camera position = (5 @ 3).\x0a\x09\x0a\x09camera translateBy: 2 @ 4.\x0a\x09self assert: camera position = (7 @ 7).",
messageSends: ["translateTo:", "@", "assert:", "=", "position", "translateBy:"],
referencedClasses: []
}),
smalltalk.TRCameraTest);



smalltalk.addClass('TRCanvasTest', smalltalk.TRTest, ['canvas'], 'Trachel-Core');
smalltalk.TRCanvasTest.comment="A TRCanvasTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09canvas:\x09\x09<Object>\x0a\x0acanvas\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st($TRCanvas())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCanvasTest)});},
args: [],
source: "setUp\x0a\x0a\x09canvas := TRCanvas new",
messageSends: ["new"],
referencedClasses: ["TRCanvas"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
category: 'fixed shape',
fn: function () {
var self=this;
var c,r1,r2;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
r1=_st(c)._buildRectangle_color_(_st((0).__at((0)))._extent_((150).__at((75))),_st($Color())._red());
_st(r1)._setAsFixed();
r2=_st(c)._buildRectangle_color_(_st((0).__at((0)))._extent_((130).__at((50))),_st($Color())._lightGreen());
self._assert_(_st(_st(c)._shapeForPositionInPixels_((0).__at((0)))).__eq(r1));
self._assert_(_st(_st(c)._shapeForPositionInPixels_((250).__at((250)))).__eq(r2));
return self}, function($ctx1) {$ctx1.fill(self,"testAccessing",{c:c,r1:r1,r2:r2},smalltalk.TRCanvasTest)});},
args: [],
source: "testAccessing\x0a\x09| c r1 r2 |\x0a\x09c := TRCanvas new.\x0a\x09r1 := c buildRectangle: ((0 @ 0) extent: (150 @ 75)) color: Color red.\x0a\x09r1 setAsFixed.\x0a\x09\x0a\x09r2 := c buildRectangle: ((0 @ 0) extent: (130 @ 50)) color: Color lightGreen.\x0a\x0a\x09self assert: (c shapeForPositionInPixels: (0 @ 0)) = r1.\x0a\x09self assert: (c shapeForPositionInPixels: (250 @ 250)) = r2.",
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "setAsFixed", "lightGreen", "assert:", "=", "shapeForPositionInPixels:"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddingAndRemoving",
category: 'tests',
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st(_st($TRBoxShape())._new())._from_to_((10).__at((10)),(20).__at((20)));
_st(self["@canvas"])._addShape_(box);
self._assert_(_st(_st(self["@canvas"])._numberOfShapes()).__eq((1)));
_st(box)._remove();
self._assert_(_st(_st(self["@canvas"])._numberOfShapes()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testAddingAndRemoving",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testAddingAndRemoving\x0a\x0a\x09| box |\x0a\x09box := TRBoxShape new from: 10 @ 10 to: 20 @ 20.\x0a\x09canvas addShape: box.\x0a\x09self assert: canvas numberOfShapes = 1.\x0a\x09box remove.\x0a\x09self assert: canvas numberOfShapes = 0.",
messageSends: ["from:to:", "@", "new", "addShape:", "assert:", "=", "numberOfShapes", "remove"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBack",
category: 'back and front',
fn: function () {
var self=this;
var s1,s2,s3;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
s1=_st(_st($TRBoxShape())._new())._size_((10));
s2=_st(_st($TRBoxShape())._new())._size_((10));
s3=_st(_st($TRBoxShape())._new())._size_((10));
$1=self["@canvas"];
_st($1)._addShape_(s1);
_st($1)._addShape_(s2);
$2=_st($1)._addShape_(s3);
_st(s1)._pushBack();
self._assert_(_st(_st(self["@canvas"])._shapes()).__eq(_st($Array())._with_with_with_(s1,s2,s3)));
_st(s3)._pushBack();
self._assert_(_st(_st(self["@canvas"])._shapes()).__eq(_st($Array())._with_with_with_(s3,s1,s2)));
return self}, function($ctx1) {$ctx1.fill(self,"testBack",{s1:s1,s2:s2,s3:s3},smalltalk.TRCanvasTest)});},
args: [],
source: "testBack\x0a\x0a\x09| s1 s2 s3 |\x0a\x09s1 := TRBoxShape new size: 10.\x0a\x09s2 := TRBoxShape new size: 10.\x0a\x09s3 := TRBoxShape new size: 10.\x0a\x09canvas addShape: s1; addShape: s2; addShape: s3.\x0a\x09\x0a\x09s1 pushBack.\x0a\x09self assert: canvas shapes = (Array with: s1 with: s2 with: s3).\x0a\x09\x0a\x09s3 pushBack.\x0a\x09self assert: canvas shapes = (Array with: s3 with: s1 with: s2).",
messageSends: ["size:", "new", "addShape:", "pushBack", "assert:", "=", "with:with:with:", "shapes"],
referencedClasses: ["TRBoxShape", "Array"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBezierShape",
category: 'tests',
fn: function () {
var self=this;
var b;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $TRBezierShape(){return smalltalk.TRBezierShape||(typeof TRBezierShape=="undefined"?nil:TRBezierShape)}
return smalltalk.withContext(function($ctx1) { 
b=_st(_st($TRBezierShape())._new())._points_(_st($Array())._with_with_with_((10).__at((10)),(-20).__at((30)),(50).__at((-180))));
_st(self["@canvas"])._addShape_(b);
_st(b)._translateBy_((5).__at((6)));
self._assert_(_st(_st(b)._points()).__eq(_st($Array())._with_with_with_((15).__at((16)),(-15).__at((36)),(55).__at((-174)))));
return self}, function($ctx1) {$ctx1.fill(self,"testBezierShape",{b:b},smalltalk.TRCanvasTest)});},
args: [],
source: "testBezierShape\x0a\x09| b |\x0a\x09b := TRBezierShape new points: (Array with: 10 @ 10 with: -20 @ 30 with: 50 @ -180).\x0a\x09canvas addShape: b.\x0a\x09b translateBy: 5 @ 6.\x0a\x09self assert: b points = (Array with: 15 @ 16 with: -15 @ 36 with: 55 @ -174).",
messageSends: ["points:", "with:with:with:", "@", "new", "addShape:", "translateBy:", "assert:", "=", "points"],
referencedClasses: ["Array", "TRBezierShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBox",
category: 'tests',
fn: function () {
var self=this;
var rec,box;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
rec=_st((50).__at((50)))._extent_((100).__at((50)));
box=_st(self["@canvas"])._buildRectangle_color_(rec,_st($Color())._purple());
self._assert_(_st(_st(_st(box)._rectangle())._center()).__eq(_st(rec)._center()));
_st(box)._extent_((20).__at((20)));
self._assert_(_st(_st(_st(box)._rectangle())._center()).__eq(_st(rec)._center()));
return self}, function($ctx1) {$ctx1.fill(self,"testBox",{rec:rec,box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testBox\x0a\x09| rec box |\x0a\x09rec := (50 @ 50 extent: 100 @ 50).\x0a\x09box := canvas buildRectangle: rec color: Color purple.\x0a\x09self assert: box rectangle center = rec center.\x0a\x0a\x09box extent: 20 @ 20.\x0a\x09self assert: box rectangle center = rec center.",
messageSends: ["extent:", "@", "buildRectangle:color:", "purple", "assert:", "=", "center", "rectangle"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCamera",
category: 'camera',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self["@canvas"])._camera())._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCamera",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testCamera\x0a\x0a\x09self assert: canvas camera position = (0 @ 0)",
messageSends: ["assert:", "=", "@", "position", "camera"],
referencedClasses: []
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanvas",
category: 'tests',
fn: function () {
var self=this;
var box;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
box=_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((5).__at((5))),_st($Color())._red());
self._assert_(_st(_st(box)._canvas()).__eq_eq(self["@canvas"]));
self._assert_(_st(_st(box)._athensCanvas()).__eq_eq(_st(self["@canvas"])._athensCanvas()));
self._assert_(_st(self["@canvas"]).__tild_tild(_st(self["@canvas"])._athensCanvas()));
return self}, function($ctx1) {$ctx1.fill(self,"testCanvas",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testCanvas\x0a\x09| box |\x0a\x09box := canvas buildRectangle: ( (5 @ 5) extent: (5 @ 5) ) color: Color red.\x0a\x09self assert: box canvas == canvas.\x0a\x09self assert: box athensCanvas == canvas athensCanvas.\x0a\x09self assert: canvas ~~ canvas athensCanvas.",
messageSends: ["buildRectangle:color:", "extent:", "@", "red", "assert:", "==", "canvas", "athensCanvas", "~~"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanvasAndEvent",
category: 'events',
fn: function () {
var self=this;
var c,f;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRMouseClick(){return smalltalk.TRMouseClick||(typeof TRMouseClick=="undefined"?nil:TRMouseClick)}
function $TRMouseMove(){return smalltalk.TRMouseMove||(typeof TRMouseMove=="undefined"?nil:TRMouseMove)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
f=false;
_st(c)._when_do_($TRMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
f=true;
return f;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
self._deny_(f);
_st(c)._announce_($TRMouseMove());
self._deny_(f);
_st(c)._announce_($TRMouseClick());
self._assert_(f);
return self}, function($ctx1) {$ctx1.fill(self,"testCanvasAndEvent",{c:c,f:f},smalltalk.TRCanvasTest)});},
args: [],
source: "testCanvasAndEvent\x0a\x0a\x09| c f |\x0a\x09c := TRCanvas new.\x0a\x09f := false.\x0a\x09c when: TRMouseClick do: [ :event | f := true ].\x0a\x09self deny: f.\x0a\x09c announce: TRMouseMove.\x0a\x09self deny: f.\x0a\x09c announce: TRMouseClick.\x0a\x09self assert: f",
messageSends: ["new", "when:do:", "deny:", "announce:", "assert:"],
referencedClasses: ["TRCanvas", "TRMouseClick", "TRMouseMove"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCapturingEvents2",
category: 'events',
fn: function () {
var self=this;
var s1,s2;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
s1=_st(_st($TRBoxShape())._new())._size_((10));
s2=_st(_st($TRBoxShape())._new())._size_((10));
_st(self["@canvas"])._addShape_(s1);
_st(self["@canvas"])._addShape_(s2);
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((0).__at((0)))).__eq_eq(s2));
return self}, function($ctx1) {$ctx1.fill(self,"testCapturingEvents2",{s1:s1,s2:s2},smalltalk.TRCanvasTest)});},
args: [],
source: "testCapturingEvents2\x0a\x09| s1 s2 |\x0a\x09 \x0a\x09s1 := (TRBoxShape new size: 10).\x0a\x09s2 := (TRBoxShape new size: 10).\x0a\x09canvas addShape: s1.\x0a\x09canvas addShape: s2. \x0a\x09self assert: (canvas shapeForPosition: 0 @ 0) == s2",
messageSends: ["size:", "new", "addShape:", "assert:", "==", "shapeForPosition:", "@"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCenteredLabelShapes",
category: 'label',
fn: function () {
var self=this;
var label1,label2;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
label1=_st($TRLabelShape())._new();
_st(label1)._text_("hello");
_st(label1)._position_((10).__at((10)));
label2=_st($TRLabelShape())._new();
_st(label2)._text_("hello");
_st(label2)._leftPosition_(_st(_st(label1)._encompassingRectangle())._leftCenter());
self._assert_(_st(_st(label1)._encompassingRectangle()).__eq(_st(label2)._encompassingRectangle()));
return self}, function($ctx1) {$ctx1.fill(self,"testCenteredLabelShapes",{label1:label1,label2:label2},smalltalk.TRCanvasTest)});},
args: [],
source: "testCenteredLabelShapes\x0a\x0a\x09| label1 label2  |\x0a\x09label1 := TRLabelShape new.\x0a\x09label1 text: 'hello'.\x0a\x09label1 position: 10 @ 10.\x0a\x0a\x09label2 := TRLabelShape new.\x0a\x09label2 text: 'hello'.\x0a\x09label2 leftPosition: label1 encompassingRectangle leftCenter.\x0a\x09\x0a\x09\x22\x0a\x09TRCanvas new addShape: label1; addShape: label2; open\x0a\x09\x22\x0a\x0a\x09self assert: label1 encompassingRectangle = label2 encompassingRectangle",
messageSends: ["new", "text:", "position:", "@", "leftPosition:", "leftCenter", "encompassingRectangle", "assert:", "="],
referencedClasses: ["TRLabelShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testChangingBoxHeight",
category: 'shapes',
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
self._assert_(_st(_st(box)._height()).__eq((0)));
_st(box)._height_((15));
self._assert_(_st(_st(box)._height()).__eq((15)));
_st(box)._height_((20));
self._assert_(_st(_st(box)._height()).__eq((20)));
return self}, function($ctx1) {$ctx1.fill(self,"testChangingBoxHeight",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testChangingBoxHeight\x0a\x09| box |\x0a\x09box := TRBoxShape new.\x0a\x09self assert: box height = 0.\x0a\x09box height: 15.\x0a\x09self assert: box height = 15.\x0a\x09box height: 20.\x0a\x09self assert: box height = 20",
messageSends: ["new", "assert:", "=", "height", "height:"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testChangingBoxWidth",
category: 'shapes',
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
self._assert_(_st(_st(box)._width()).__eq((0)));
_st(box)._width_((15));
self._assert_(_st(_st(box)._width()).__eq((15)));
_st(box)._width_((20));
self._assert_(_st(_st(box)._width()).__eq((20)));
return self}, function($ctx1) {$ctx1.fill(self,"testChangingBoxWidth",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testChangingBoxWidth\x0a\x09| box |\x0a\x09box := TRBoxShape new.\x0a\x09self assert: box width = 0.\x0a\x09box width: 15.\x0a\x09self assert: box width = 15.\x0a\x09box width: 20.\x0a\x09self assert: box width = 20",
messageSends: ["new", "assert:", "=", "width", "width:"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCircle",
category: 'tests',
fn: function () {
var self=this;
var c;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
(100)._to_by_do_((200),(20),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(c)._buildCircleFrom_to_color_((50).__at((50)),_st(i).__at((100)),_st(_st($Color())._red())._alpha_((0.2)));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
self._assert_(_st(_st(c)._numberOfShapes()).__eq(_st((100)._to_by_((200),(20)))._size()));
return self}, function($ctx1) {$ctx1.fill(self,"testCircle",{c:c},smalltalk.TRCanvasTest)});},
args: [],
source: "testCircle\x0a\x0a\x09| c  |\x0a\x09c := TRCanvas new.\x0a\x09100 to: 200 by: 20 do: [ :i |\x0a\x09\x09 c buildCircleFrom: 50 @ 50 to: i @ 100 color: (Color red alpha: 0.2).\x0a\x09].\x0a\x09self assert: c numberOfShapes = (100 to: 200 by: 20) size",
messageSends: ["new", "to:by:do:", "buildCircleFrom:to:color:", "@", "alpha:", "red", "assert:", "=", "size", "to:by:", "numberOfShapes"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComposing",
category: 'composing',
fn: function () {
var self=this;
var s1,s2,c,trCanvas;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TRComposedShape(){return smalltalk.TRComposedShape||(typeof TRComposedShape=="undefined"?nil:TRComposedShape)}
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
s1=_st($TRBoxShape())._new();
s2=_st($TRBoxShape())._new();
c=_st($TRComposedShape())._with_with_(s1,s2);
trCanvas=_st($TRCanvas())._new();
_st(trCanvas)._addShape_(c);
self._assert_(_st(_st(trCanvas)._numberOfShapes()).__eq((2)));
_st(c)._remove();
self._assert_(_st(_st(trCanvas)._numberOfShapes()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testComposing",{s1:s1,s2:s2,c:c,trCanvas:trCanvas},smalltalk.TRCanvasTest)});},
args: [],
source: "testComposing\x0a\x0a\x09| s1 s2 c trCanvas |\x0a\x09s1 := TRBoxShape new.\x0a\x09s2 := TRBoxShape new.\x0a\x09c := TRComposedShape with: s1 with: s2.\x0a\x09trCanvas := TRCanvas new.\x0a\x09trCanvas addShape: c.\x0a\x09self assert: trCanvas numberOfShapes = 2.\x0a\x09\x0a\x09c remove.\x0a\x09self assert: trCanvas numberOfShapes = 0.",
messageSends: ["new", "with:with:", "addShape:", "assert:", "=", "numberOfShapes", "remove"],
referencedClasses: ["TRBoxShape", "TRComposedShape", "TRCanvas"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPoint1",
category: 'contains',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((20).__at((20)))).__eq_eq(self["@canvas"]));
return self}, function($ctx1) {$ctx1.fill(self,"testContainsPoint1",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testContainsPoint1\x0a\x09self assert: (canvas shapeForPosition: 20 @ 20) == canvas",
messageSends: ["assert:", "==", "shapeForPosition:", "@"],
referencedClasses: []
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPoint2",
category: 'contains',
fn: function () {
var self=this;
var box;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
box=_st(self["@canvas"])._buildRectangle_color_(_st((15).__at((15)))._extent_((20).__at((20))),_st($Color())._gray());
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((20).__at((20)))).__eq_eq(box));
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((35).__at((35)))).__eq_eq(self["@canvas"]));
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((15).__at((15)))).__eq_eq(box));
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((200).__at((200)))).__eq_eq(self["@canvas"]));
return self}, function($ctx1) {$ctx1.fill(self,"testContainsPoint2",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testContainsPoint2\x0a\x09| box |\x0a\x09box := canvas buildRectangle: (15 @ 15 extent: 20 @ 20) color: Color gray.\x0a\x09self assert: (canvas shapeForPosition: 20 @ 20) == box.\x0a\x09self assert: (canvas shapeForPosition: 35 @ 35) == canvas.\x0a\x09self assert: (canvas shapeForPosition: 15 @ 15) == box.\x0a\x09self assert: (canvas shapeForPosition: 200 @ 200) == canvas.",
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "==", "shapeForPosition:"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPointAfterTranslation",
category: 'contains',
fn: function () {
var self=this;
var box;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
box=_st(self["@canvas"])._buildRectangle_color_(_st((0).__at((0)))._extent_((20).__at((20))),_st($Color())._gray());
_st(box)._translateBy_((10).__at((10)));
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((10).__at((10)))).__eq_eq(box));
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((5).__at((5)))).__eq_eq(self["@canvas"]));
return self}, function($ctx1) {$ctx1.fill(self,"testContainsPointAfterTranslation",{box:box},smalltalk.TRCanvasTest)});},
args: [],
source: "testContainsPointAfterTranslation\x0a\x09| box |\x0a\x09box := canvas buildRectangle: (0 @ 0 extent: 20 @ 20) color: Color gray.\x0a\x0a\x09box translateBy: 10 @ 10.\x0a\x09\x0a\x09self assert: (canvas shapeForPosition: 10 @ 10) == box.\x0a\x09self assert: (canvas shapeForPosition: 5 @ 5) == canvas.",
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "translateBy:", "assert:", "==", "shapeForPosition:"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefault",
category: 'tests',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@canvas"])._shapes())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testDefault",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testDefault\x0a\x0a\x09self assert: canvas shapes isEmpty",
messageSends: ["assert:", "isEmpty", "shapes"],
referencedClasses: []
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefaultAnimation",
category: 'animations',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_(_st(self["@canvas"])._hasAnimation());
self._assert_(_st(_st(self["@canvas"])._numberOfAnimations()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testDefaultAnimation",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testDefaultAnimation\x0a\x09self deny: canvas hasAnimation.\x0a\x09self assert: canvas numberOfAnimations = 0",
messageSends: ["deny:", "hasAnimation", "assert:", "=", "numberOfAnimations"],
referencedClasses: []
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefaultFontSize",
category: 'label',
fn: function () {
var self=this;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st($TRLabelShape())._new())._fontSize()).__eq(_st(_st($TRLabelShape())._new())._defaultFontSize()));
return self}, function($ctx1) {$ctx1.fill(self,"testDefaultFontSize",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testDefaultFontSize\x0a\x09self assert: (TRLabelShape new fontSize = TRLabelShape new defaultFontSize)",
messageSends: ["assert:", "=", "defaultFontSize", "new", "fontSize"],
referencedClasses: ["TRLabelShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFixedShapes",
category: 'fixed shape',
fn: function () {
var self=this;
var s1,s2;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
s1=_st(_st($TRBoxShape())._new())._from_extent_((10).__at((20)),(50).__at((40)));
s2=_st(_st($TRBoxShape())._new())._from_extent_((10).__at((20)),(50).__at((40)));
$1=self["@canvas"];
_st($1)._addShape_(s1);
$2=_st($1)._addShape_(s2);
self._assert_(_st(s1)._isNotFixed());
self._assert_(_st(s2)._isNotFixed());
_st(s2)._setAsFixed();
self._assert_(_st(s1)._isNotFixed());
self._deny_(_st(s2)._isNotFixed());
_st(s2)._setAsNotFixed();
self._assert_(_st(s1)._isNotFixed());
self._assert_(_st(s2)._isNotFixed());
return self}, function($ctx1) {$ctx1.fill(self,"testFixedShapes",{s1:s1,s2:s2},smalltalk.TRCanvasTest)});},
args: [],
source: "testFixedShapes\x0a\x0a\x09| s1 s2 |\x0a\x09s1 := TRBoxShape new from: 10 @ 20 extent: 50 @ 40.\x0a\x09s2 := TRBoxShape new from: 10 @ 20 extent: 50 @ 40.\x0a\x09canvas addShape: s1; addShape: s2.\x0a\x09\x0a\x09self assert: s1 isNotFixed.\x0a\x09self assert: s2 isNotFixed.\x0a\x09\x0a\x09s2 setAsFixed.\x0a\x09self assert: s1 isNotFixed.\x0a\x09self deny: s2 isNotFixed.\x0a\x09\x0a\x09s2 setAsNotFixed.\x0a\x09self assert: s1 isNotFixed.\x0a\x09self assert: s2 isNotFixed.",
messageSends: ["from:extent:", "@", "new", "addShape:", "assert:", "isNotFixed", "setAsFixed", "deny:", "setAsNotFixed"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFront",
category: 'back and front',
fn: function () {
var self=this;
var s1,s2,s3;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
s1=_st(_st($TRBoxShape())._new())._size_((10));
s2=_st(_st($TRBoxShape())._new())._size_((10));
s3=_st(_st($TRBoxShape())._new())._size_((10));
$1=self["@canvas"];
_st($1)._addShape_(s1);
_st($1)._addShape_(s2);
$2=_st($1)._addShape_(s3);
self._assert_(_st(_st(self["@canvas"])._shapes()).__eq(_st($Array())._with_with_with_(s1,s2,s3)));
_st(s1)._pushFront();
self._assert_(_st(_st(self["@canvas"])._shapes()).__eq(_st($Array())._with_with_with_(s2,s3,s1)));
_st(s3)._pushFront();
self._assert_(_st(_st(self["@canvas"])._shapes()).__eq(_st($Array())._with_with_with_(s2,s1,s3)));
return self}, function($ctx1) {$ctx1.fill(self,"testFront",{s1:s1,s2:s2,s3:s3},smalltalk.TRCanvasTest)});},
args: [],
source: "testFront\x0a\x0a\x09| s1 s2 s3 |\x0a\x09s1 := TRBoxShape new size: 10.\x0a\x09s2 := TRBoxShape new size: 10.\x0a\x09s3 := TRBoxShape new size: 10.\x0a\x09canvas addShape: s1; addShape: s2; addShape: s3.\x0a\x09\x0a\x09self assert: canvas shapes = (Array with: s1 with: s2 with: s3).\x0a\x09\x0a\x09s1 pushFront.\x0a\x09self assert: canvas shapes = (Array with: s2 with: s3 with: s1).\x0a\x09\x0a\x09s3 pushFront.\x0a\x09self assert: canvas shapes = (Array with: s2 with: s1 with: s3).",
messageSends: ["size:", "new", "addShape:", "assert:", "=", "with:with:with:", "shapes", "pushFront"],
referencedClasses: ["TRBoxShape", "Array"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitialization",
category: 'tests',
fn: function () {
var self=this;
var circle;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $TRAbstractBoxShape(){return smalltalk.TRAbstractBoxShape||(typeof TRAbstractBoxShape=="undefined"?nil:TRAbstractBoxShape)}
return smalltalk.withContext(function($ctx1) { 
circle=_st($TREllipseShape())._new();
self._assert_(_st(_st(circle)._rectangle()).__eq(_st($TRAbstractBoxShape())._nullRectangle()));
return self}, function($ctx1) {$ctx1.fill(self,"testInitialization",{circle:circle},smalltalk.TRCanvasTest)});},
args: [],
source: "testInitialization\x0a\x0a\x09| circle |\x0a\x09circle := TREllipseShape new.\x0a\x09self assert: circle rectangle = TRAbstractBoxShape nullRectangle",
messageSends: ["new", "assert:", "=", "nullRectangle", "rectangle"],
referencedClasses: ["TREllipseShape", "TRAbstractBoxShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapes",
category: 'label',
fn: function () {
var self=this;
var label1,label2,rec;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
label1=_st($TRLabelShape())._new();
_st(label1)._text_("hello");
label2=_st($TRLabelShape())._new();
_st(label2)._text_("hello world");
self._assert_(_st(_st(label2)._width()).__gt(_st(label1)._width()));
rec=_st(label1)._encompassingRectangle();
self._assert_(_st(_st(rec)._center()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testLabelShapes",{label1:label1,label2:label2,rec:rec},smalltalk.TRCanvasTest)});},
args: [],
source: "testLabelShapes\x0a\x0a\x09| label1 label2 rec |\x0a\x09label1 := TRLabelShape new.\x0a\x09label1 text: 'hello'.\x0a\x09label2 := TRLabelShape new.\x0a\x09label2 text: 'hello world'.\x0a\x09self assert: label2 width > label1 width.\x0a\x09\x0a\x09rec := label1 encompassingRectangle.\x0a\x09self assert: rec center = (0 @ 0).",
messageSends: ["new", "text:", "assert:", ">", "width", "encompassingRectangle", "=", "@", "center"],
referencedClasses: ["TRLabelShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesAndColor",
category: 'label',
fn: function () {
var self=this;
var label;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
label=_st($TRLabelShape())._new();
_st(label)._color_(_st($Color())._blue());
self._assert_(_st(_st(label)._color()).__eq(_st($Color())._blue()));
return self}, function($ctx1) {$ctx1.fill(self,"testLabelShapesAndColor",{label:label},smalltalk.TRCanvasTest)});},
args: [],
source: "testLabelShapesAndColor\x0a\x0a\x09| label  |\x0a\x09label := TRLabelShape new.\x0a\x09label color: Color blue.\x0a\x09self assert: label color = Color blue",
messageSends: ["new", "color:", "blue", "assert:", "=", "color"],
referencedClasses: ["TRLabelShape", "Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesAndIncludesPoint",
category: 'label',
fn: function () {
var self=this;
var label,rec;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
label=_st($TRLabelShape())._new();
_st(label)._text_("hello");
rec=_st(label)._encompassingRectangle();
self._assert_(_st(label)._includesPoint_(_st(rec)._topLeft()));
self._assert_(_st(label)._includesPoint_(_st(_st(rec)._bottomLeft()).__minus((0).__at((1)))));
self._assert_(_st(label)._includesPoint_(_st(_st(rec)._topRight()).__minus((1).__at((0)))));
self._assert_(_st(label)._includesPoint_(_st(_st(rec)._bottomRight()).__minus((1).__at((1)))));
return self}, function($ctx1) {$ctx1.fill(self,"testLabelShapesAndIncludesPoint",{label:label,rec:rec},smalltalk.TRCanvasTest)});},
args: [],
source: "testLabelShapesAndIncludesPoint\x0a\x0a\x09| label rec |\x0a\x09label := TRLabelShape new.\x0a\x09label text: 'hello'.\x0a\x09\x0a\x09rec := label encompassingRectangle.\x0a\x09self assert: (label includesPoint: rec topLeft).\x0a\x09self assert: (label includesPoint: (rec bottomLeft - (0 @ 1))).\x0a\x09self assert: (label includesPoint: rec topRight - (1 @ 0)).\x0a\x09self assert: (label includesPoint: rec bottomRight - (1 @ 1)).",
messageSends: ["new", "text:", "encompassingRectangle", "assert:", "includesPoint:", "topLeft", "-", "@", "bottomLeft", "topRight", "bottomRight"],
referencedClasses: ["TRLabelShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesHeight",
category: 'label',
fn: function () {
var self=this;
var label1,label2;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
label1=_st($TRLabelShape())._new();
_st(label1)._text_("hello");
label2=_st($TRLabelShape())._new();
_st(label2)._text_("hello world");
self._assert_(_st(_st(label2)._height()).__eq(_st(label1)._height()));
return self}, function($ctx1) {$ctx1.fill(self,"testLabelShapesHeight",{label1:label1,label2:label2},smalltalk.TRCanvasTest)});},
args: [],
source: "testLabelShapesHeight\x0a\x0a\x09| label1 label2 |\x0a\x09label1 := TRLabelShape new.\x0a\x09label1 text: 'hello'.\x0a\x09label2 := TRLabelShape new.\x0a\x09label2 text: 'hello world'.\x0a\x09self assert: label2 height = label1 height",
messageSends: ["new", "text:", "assert:", "=", "height"],
referencedClasses: ["TRLabelShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLine",
category: 'tests',
fn: function () {
var self=this;
var line;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
line=_st(self["@canvas"])._buildLineFrom_to_color_((2).__at((3)),(13).__at((15)),_st($Color())._blue());
self._assert_(_st(_st(line)._from()).__eq((2).__at((3))));
self._assert_(_st(_st(line)._to()).__eq((13).__at((15))));
_st(line)._translateBy_((3).__at((4)));
self._assert_(_st(_st(line)._from()).__eq((5).__at((7))));
self._assert_(_st(_st(line)._to()).__eq((16).__at((19))));
return self}, function($ctx1) {$ctx1.fill(self,"testLine",{line:line},smalltalk.TRCanvasTest)});},
args: [],
source: "testLine\x0a\x09| line |\x0a\x09line := canvas buildLineFrom: 2 @ 3 to: 13 @ 15 color: Color blue.\x0a\x09self assert: line from = (2 @ 3).\x0a\x09self assert: line to = (13 @ 15).\x0a\x09\x0a\x09line translateBy: 3 @ 4.\x0a\x09self assert: line from = (5 @ 7).\x0a\x09self assert: line to = (16 @ 19).",
messageSends: ["buildLineFrom:to:color:", "@", "blue", "assert:", "=", "from", "to", "translateBy:"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionWithShapes",
category: 'shapes',
fn: function () {
var self=this;
function $TRShape(){return smalltalk.TRShape||(typeof TRShape=="undefined"?nil:TRShape)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TRShape())._allSubclasses())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(c)._new())._position()).__eq((0).__at((0))));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionWithShapes",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testPositionWithShapes\x0a\x0a\x09TRShape allSubclasses do: [ :c |\x0a\x09\x09self assert: c new position = (0 @ 0) ]",
messageSends: ["do:", "assert:", "=", "@", "position", "new", "allSubclasses"],
referencedClasses: ["TRShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushAllBehindWithGroup",
category: 'rendering list',
fn: function () {
var self=this;
var box1,box2,box3,g;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
box1=_st($TRBoxShape())._new();
box2=_st($TRBoxShape())._new();
box3=_st($TRBoxShape())._new();
$1=self["@canvas"];
_st($1)._addShape_(box1);
_st($1)._addShape_(box2);
$2=_st($1)._addShape_(box3);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
g=_st($Array())._with_with_(box2,box3);
_st(self["@canvas"])._pushAll_behindAll_(_st($Array())._with_(box1),g);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
g=_st($Array())._with_with_(box2,box3);
_st(self["@canvas"])._pushAll_behindAll_(_st($Array())._with_(box1),g);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
g=_st($Array())._with_(box1);
_st(self["@canvas"])._pushAll_behindAll_(_st($Array())._with_with_(box3,box2),g);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box3,box2,box1)));
return self}, function($ctx1) {$ctx1.fill(self,"testPushAllBehindWithGroup",{box1:box1,box2:box2,box3:box3,g:g},smalltalk.TRCanvasTest)});},
args: [],
source: "testPushAllBehindWithGroup\x0a\x09| box1 box2 box3 g |\x0a\x09box1 := TRBoxShape new.\x0a\x09box2 := TRBoxShape new.\x0a\x09box3 := TRBoxShape new.\x0a\x09canvas addShape: box1; addShape: box2; addShape: box3.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x0a\x09g := Array with: box2 with: box3.\x0a\x09canvas pushAll: (Array with: box1) behindAll: g.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x09\x0a\x09g := Array with: box2 with: box3.\x0a\x09canvas pushAll: (Array with: box1) behindAll: g.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x0a\x09g := Array with: box1.\x0a\x09canvas pushAll: (Array with: box3 with: box2) behindAll: g.\x0a\x09self assert: canvas shapes asArray = (Array with: box3 with: box2 with: box1).",
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "with:with:", "pushAll:behindAll:", "with:"],
referencedClasses: ["TRBoxShape", "Array"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushBehind",
category: 'rendering list',
fn: function () {
var self=this;
var box1,box2,box3;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
box1=_st($TRBoxShape())._new();
box2=_st($TRBoxShape())._new();
box3=_st($TRBoxShape())._new();
$1=self["@canvas"];
_st($1)._addShape_(box1);
_st($1)._addShape_(box2);
$2=_st($1)._addShape_(box3);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
_st(self["@canvas"])._push_behind_(box1,box2);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
_st(self["@canvas"])._push_behind_(box3,box2);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box3,box2)));
return self}, function($ctx1) {$ctx1.fill(self,"testPushBehind",{box1:box1,box2:box2,box3:box3},smalltalk.TRCanvasTest)});},
args: [],
source: "testPushBehind\x0a\x09| box1 box2 box3 |\x0a\x09box1 := TRBoxShape new.\x0a\x09box2 := TRBoxShape new.\x0a\x09box3 := TRBoxShape new.\x0a\x09canvas addShape: box1; addShape: box2; addShape: box3.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x0a\x09canvas push: box1 behind: box2.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x09\x0a\x09canvas push: box3 behind: box2.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box3 with: box2).",
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "push:behind:"],
referencedClasses: ["TRBoxShape", "Array"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushBehindWithGroup",
category: 'rendering list',
fn: function () {
var self=this;
var box1,box2,box3,g;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
box1=_st($TRBoxShape())._new();
box2=_st($TRBoxShape())._new();
box3=_st($TRBoxShape())._new();
$1=self["@canvas"];
_st($1)._addShape_(box1);
_st($1)._addShape_(box2);
$2=_st($1)._addShape_(box3);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
g=_st($Array())._with_with_(box2,box3);
_st(self["@canvas"])._push_behindAll_(box1,g);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
g=_st($Array())._with_with_(box2,box3);
_st(self["@canvas"])._push_behindAll_(box1,g);
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._asArray()).__eq(_st($Array())._with_with_with_(box1,box2,box3)));
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._indexOf_(box1)).__eq((1)));
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._indexOf_(box2)).__eq((2)));
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._indexOf_(box3)).__eq((3)));
return self}, function($ctx1) {$ctx1.fill(self,"testPushBehindWithGroup",{box1:box1,box2:box2,box3:box3,g:g},smalltalk.TRCanvasTest)});},
args: [],
source: "testPushBehindWithGroup\x0a\x09| box1 box2 box3 g |\x0a\x09box1 := TRBoxShape new.\x0a\x09box2 := TRBoxShape new.\x0a\x09box3 := TRBoxShape new.\x0a\x09canvas addShape: box1; addShape: box2; addShape: box3.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x0a\x09g := Array with: box2 with: box3.\x0a\x09canvas push: box1 behindAll: g.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x09\x0a\x09g := Array with: box2 with: box3.\x0a\x09canvas push: box1 behindAll: g.\x0a\x09self assert: canvas shapes asArray = (Array with: box1 with: box2 with: box3).\x0a\x09self assert: (canvas shapes indexOf: box1) = 1.\x0a\x09self assert: (canvas shapes indexOf: box2) = 2.\x0a\x09self assert: (canvas shapes indexOf: box3) = 3.",
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "with:with:", "push:behindAll:", "indexOf:"],
referencedClasses: ["TRBoxShape", "Array"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemovingFixedElement",
category: 'fixed shape',
fn: function () {
var self=this;
var c,r;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
c=_st($TRCanvas())._new();
r=_st(c)._buildRectangle_color_(_st((0).__at((0)))._extent_((150).__at((75))),_st($Color())._red());
_st(r)._setAsFixed();
self._assert_(_st(_st(c)._numberOfFixedShapes()).__eq((1)));
self._assert_(_st(_st(c)._numberOfShapes()).__eq((0)));
_st(r)._remove();
self._assert_(_st(_st(c)._numberOfShapes()).__eq((0)));
self._assert_(_st(_st(c)._numberOfFixedShapes()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testRemovingFixedElement",{c:c,r:r},smalltalk.TRCanvasTest)});},
args: [],
source: "testRemovingFixedElement\x0a\x09| c r |\x0a\x09c := TRCanvas new.\x0a\x09r := c buildRectangle: ((0 @ 0) extent: (150 @ 75)) color: Color red.\x0a\x09r setAsFixed.\x0a\x0a\x09self assert: c numberOfFixedShapes = 1.\x0a\x09self assert: c numberOfShapes = 0.\x0a\x09r remove.\x0a\x09self assert: c numberOfShapes = 0.\x0a\x09self assert: c numberOfFixedShapes = 0.",
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "setAsFixed", "assert:", "=", "numberOfFixedShapes", "numberOfShapes", "remove"],
referencedClasses: ["TRCanvas", "Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemovingLine",
category: 'tests',
fn: function () {
var self=this;
var line;
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
line=_st(_st($TRLineShape())._new())._from_to_((50).__at((50)),(100).__at((80)));
self._deny_(_st(line)._isInACanvas());
_st(self["@canvas"])._addShape_(line);
self._assert_(_st(line)._isInACanvas());
_st(line)._remove();
self._deny_(_st(line)._isInACanvas());
_st(line)._remove();
self._deny_(_st(line)._isInACanvas());
return self}, function($ctx1) {$ctx1.fill(self,"testRemovingLine",{line:line},smalltalk.TRCanvasTest)});},
args: [],
source: "testRemovingLine\x0a\x0a\x09| line |\x0a\x09line := TRLineShape new from: 50 @ 50 to: 100 @ 80.\x0a\x09self deny: line isInACanvas.\x0a\x09canvas addShape: line.\x0a\x09self assert: line isInACanvas.\x0a\x09\x0a\x09line remove.\x0a\x09self deny: line isInACanvas.\x0a\x09\x0a\x09line remove.\x0a\x09self deny: line isInACanvas.",
messageSends: ["from:to:", "@", "new", "deny:", "isInACanvas", "addShape:", "assert:", "remove"],
referencedClasses: ["TRLineShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testResizing",
category: 'resizing',
fn: function () {
var self=this;
var t;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
t=false;
_st(self["@canvas"])._when_do_($TRResizeCanvasEvent(),(function(evt){
return smalltalk.withContext(function($ctx2) {
t=true;
return t;
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})}));
_st(self["@canvas"])._extent_((12).__at((12)));
self._assert_(t);
return self}, function($ctx1) {$ctx1.fill(self,"testResizing",{t:t},smalltalk.TRCanvasTest)});},
args: [],
source: "testResizing\x0a\x0a\x09| t |\x0a\x09t := false.\x0a\x09canvas when: TRResizeCanvasEvent do: [ :evt | t := true ].\x0a\x09canvas extent:  12 @ 12.\x0a\x09self assert: t",
messageSends: ["when:do:", "extent:", "@", "assert:"],
referencedClasses: ["TRResizeCanvasEvent"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape",
category: 'tests',
fn: function () {
var self=this;
var shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
shape=_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
self._assert_(_st(shape)._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testShape",{shape:shape},smalltalk.TRCanvasTest)});},
args: [],
source: "testShape\x0a\x09| shape |\x0a\x09shape := canvas buildRectangle: (5 @ 5 extent: 20 @ 20) color: Color gray.\x0a\x09self assert: shape notNil.",
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "notNil"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeAndEvent",
category: 'events',
fn: function () {
var self=this;
var shape,t;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TRMouseEnter(){return smalltalk.TRMouseEnter||(typeof TRMouseEnter=="undefined"?nil:TRMouseEnter)}
return smalltalk.withContext(function($ctx1) { 
shape=_st($TRBoxShape())._new();
t=false;
_st(shape)._when_do_($TRMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
t=true;
return t;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
self._deny_(t);
_st(shape)._announce_(_st($TRMouseEnter())._new());
self._assert_(t);
return self}, function($ctx1) {$ctx1.fill(self,"testShapeAndEvent",{shape:shape,t:t},smalltalk.TRCanvasTest)});},
args: [],
source: "testShapeAndEvent\x0a\x09| shape t |\x0a\x09shape := TRBoxShape new.\x0a\x09t := false.\x0a\x09shape when: TRMouseEnter do: [ :event | t := true ].\x0a\x09self deny: t.\x0a\x09shape announce: TRMouseEnter new.\x0a\x09self assert: t",
messageSends: ["new", "when:do:", "deny:", "announce:", "assert:"],
referencedClasses: ["TRBoxShape", "TRMouseEnter"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeAndSharedAnnouncer",
category: 'events',
fn: function () {
var self=this;
var shape1,shape2,t;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
function $TRMouseLeave(){return smalltalk.TRMouseLeave||(typeof TRMouseLeave=="undefined"?nil:TRMouseLeave)}
function $TRMouseEnter(){return smalltalk.TRMouseEnter||(typeof TRMouseEnter=="undefined"?nil:TRMouseEnter)}
return smalltalk.withContext(function($ctx1) { 
shape1=_st($TRBoxShape())._new();
shape2=_st($TRLineShape())._new();
_st(shape1)._announcer_(_st(shape2)._announcer());
t=(0);
_st(shape1)._when_do_($TRMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
t=_st(t).__plus((1));
return t;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(shape2)._when_do_($TRMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
t=_st(t).__plus((10));
return t;
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(shape1)._announce_(_st($TRMouseEnter())._new());
_st(shape2)._announce_(_st($TRMouseLeave())._new());
self._assert_(_st(t).__eq((11)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapeAndSharedAnnouncer",{shape1:shape1,shape2:shape2,t:t},smalltalk.TRCanvasTest)});},
args: [],
source: "testShapeAndSharedAnnouncer\x0a\x09| shape1 shape2 t |\x0a\x09shape1 := TRBoxShape new.\x0a\x09shape2 := TRLineShape new.\x0a\x09shape1 announcer: shape2 announcer.\x0a\x09\x0a\x09t := 0.\x0a\x09shape1 when: TRMouseLeave do: [ :event | t := t + 1 ].\x0a\x09shape2 when: TRMouseEnter do: [ :event | t := t + 10 ].\x0a\x0a\x09shape1 announce: TRMouseEnter new.\x0a\x09shape2 announce: TRMouseLeave new.\x0a\x09self assert: t = 11",
messageSends: ["new", "announcer:", "announcer", "when:do:", "+", "announce:", "assert:", "="],
referencedClasses: ["TRBoxShape", "TRLineShape", "TRMouseLeave", "TRMouseEnter"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapes",
category: 'tests',
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._size()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapes",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testShapes\x0a\x0a\x09canvas buildRectangle: (5 @ 5 extent: 20 @ 20) color: Color gray.\x0a\x09canvas buildRectangle: (5 @ 5 extent: 20 @ 20) color: Color gray.\x0a\x09self assert: canvas shapes size = 2",
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "=", "size", "shapes"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapingElement",
category: 'tests',
fn: function () {
var self=this;
var circle;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
circle=_st(self["@canvas"])._buildCircleFrom_to_color_((20).__at((20)),(100).__at((80)),_st($Color())._red());
self._assert_(_st(_st(circle)._rectangle()).__eq(_st((20).__at((20)))._corner_((100).__at((80)))));
_st(circle)._translateBy_((-20).__at((-20)));
self._assert_(_st(_st(circle)._rectangle()).__eq(_st((0).__at((0)))._corner_((80).__at((60)))));
return self}, function($ctx1) {$ctx1.fill(self,"testShapingElement",{circle:circle},smalltalk.TRCanvasTest)});},
args: [],
source: "testShapingElement\x0a\x0a\x09| circle |\x0a\x09circle := canvas buildCircleFrom: 20 @ 20 to: 100 @ 80 color: Color red.\x0a\x0a\x09self assert: circle rectangle = ((20 @ 20) corner: (100 @ 80)).\x0a\x09\x0a\x09circle translateBy: -20 @ -20.\x0a\x09self assert: circle rectangle = ((0 @ 0) corner: (80 @ 60)).",
messageSends: ["buildCircleFrom:to:color:", "@", "red", "assert:", "=", "corner:", "rectangle", "translateBy:"],
referencedClasses: ["Color"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShouldBeDrawn",
category: 'should be drawn',
fn: function () {
var self=this;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st($TRBoxShape())._new())._from_to_((0).__at((0)),(10).__at((20))))._shouldBeDrawn());
self._deny_(_st(_st(_st($TRBoxShape())._new())._from_to_((200).__at((0)),(10).__at((0))))._shouldBeDrawn());
self._deny_(_st(_st(_st($TRBoxShape())._new())._from_to_((200).__at((0)),(200).__at((0))))._shouldBeDrawn());
self._deny_(_st(_st(_st($TREllipseShape())._new())._from_to_((0).__at((0)),(0).__at((0))))._shouldBeDrawn());
self._assert_(_st(_st(_st($TREllipseShape())._new())._from_to_((10).__at((0)),(50).__at((50))))._shouldBeDrawn());
return self}, function($ctx1) {$ctx1.fill(self,"testShouldBeDrawn",{},smalltalk.TRCanvasTest)});},
args: [],
source: "testShouldBeDrawn\x0a\x0a\x09self assert: (TRBoxShape new from: 0 @ 0 to: 10 @ 20) shouldBeDrawn.\x0a\x09self deny: (TRBoxShape new from: 200 @ 0 to: 10 @ 0) shouldBeDrawn.\x0a\x09self deny: (TRBoxShape new from: 200 @ 0 to: 200 @ 0) shouldBeDrawn.\x0a\x09self deny: (TREllipseShape new from: 0 @ 0 to: 0 @ 0) shouldBeDrawn.\x0a\x09self assert: (TREllipseShape new from: 10 @ 0 to: 50 @ 50) shouldBeDrawn",
messageSends: ["assert:", "shouldBeDrawn", "from:to:", "@", "new", "deny:"],
referencedClasses: ["TRBoxShape", "TREllipseShape"]
}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSizeAndLabels",
category: 'label',
fn: function () {
var self=this;
var c,l1,l2;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
c=_st($TRCanvas())._new();
l1=_st(_st($TRLabelShape())._new())._fontSize_((10));
$1=_st($TRLabelShape())._new();
_st($1)._fontSize_((15));
$2=_st($1)._position_((20).__at((20)));
l2=$2;
_st(c)._addShape_(l1);
_st(c)._addShape_(l2);
self._assert_(_st(_st(l1)._font()).__tild_tild(_st(l2)._font()));
return self}, function($ctx1) {$ctx1.fill(self,"testSizeAndLabels",{c:c,l1:l1,l2:l2},smalltalk.TRCanvasTest)});},
args: [],
source: "testSizeAndLabels\x0a\x0a\x09| c l1 l2 |\x0a\x09c := TRCanvas new.\x0a\x09l1 := TRLabelShape new fontSize: 10.\x0a\x09l2 := TRLabelShape new fontSize: 15; position: 20 @ 20.\x0a\x09c addShape: l1.\x0a\x09c addShape: l2.\x0a\x09\x0a\x09self assert: l1 font ~~ l2 font",
messageSends: ["new", "fontSize:", "position:", "@", "addShape:", "assert:", "~~", "font"],
referencedClasses: ["TRCanvas", "TRLabelShape"]
}),
smalltalk.TRCanvasTest);



smalltalk.addClass('TRConstraintTest', smalltalk.TRTest, ['element1', 'element2', 'view', 'canvas', 'shape1', 'shape2'], 'Trachel-Core');
smalltalk.TRConstraintTest.comment="A ROConstraintTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09element1:\x09\x09<Object>\x0a\x09element2:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x0aelement1\x0a\x09- xxxxx\x0a\x0aelement2\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRConstraintTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@canvas"]=_st($TRCanvas())._new();
self["@shape1"]=_st(_st($TRBoxShape())._new())._size_((50));
self["@shape2"]=_st(_st($TRBoxShape())._new())._size_((10));
_st(self["@canvas"])._addShape_(self["@shape1"]);
_st(self["@canvas"])._addShape_(self["@shape2"]);
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRConstraintTest)});},
args: [],
source: "setUp\x0a\x09super setUp.\x0a\x09canvas := TRCanvas new.\x0a\x09shape1 := TRBoxShape new size: 50.\x0a\x09shape2 := TRBoxShape new size: 10.\x0a\x09canvas addShape: shape1.\x0a\x09canvas addShape: shape2.",
messageSends: ["setUp", "new", "size:", "addShape:"],
referencedClasses: ["TRCanvas", "TRBoxShape"]
}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickAbove",
category: 'sticking',
fn: function () {
var self=this;
function $TRConstraint(){return smalltalk.TRConstraint||(typeof TRConstraint=="undefined"?nil:TRConstraint)}
return smalltalk.withContext(function($ctx1) { 
_st($TRConstraint())._stick_above_(self["@shape2"],self["@shape1"]);
self._assert_(_st(_st(self["@shape1"])._center()).__eq((0).__at((0))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((0).__at((-30))));
_st(self["@shape1"])._translateBy_((10).__at((10)));
self._assert_(_st(_st(self["@shape1"])._center()).__eq((10).__at((10))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((10).__at((-20))));
return self}, function($ctx1) {$ctx1.fill(self,"testStickAbove",{},smalltalk.TRConstraintTest)});},
args: [],
source: "testStickAbove\x0a\x0a\x09TRConstraint stick: shape2 above: shape1.\x0a\x09self assert: shape1 center = (0 @ 0).\x0a\x09self assert: shape2 center = (0 @ -30).\x0a\x09\x0a\x09shape1 translateBy: 10 @ 10.\x0a\x09self assert: shape1 center = (10 @ 10).\x0a\x09self assert: shape2 center = (10 @ -20).",
messageSends: ["stick:above:", "assert:", "=", "@", "center", "translateBy:"],
referencedClasses: ["TRConstraint"]
}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickBelow",
category: 'sticking',
fn: function () {
var self=this;
function $TRConstraint(){return smalltalk.TRConstraint||(typeof TRConstraint=="undefined"?nil:TRConstraint)}
return smalltalk.withContext(function($ctx1) { 
_st($TRConstraint())._stick_below_(self["@shape2"],self["@shape1"]);
self._assert_(_st(_st(self["@shape1"])._center()).__eq((0).__at((0))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((0).__at((30))));
_st(self["@shape1"])._translateBy_((10).__at((10)));
self._assert_(_st(_st(self["@shape1"])._center()).__eq((10).__at((10))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((10).__at((40))));
return self}, function($ctx1) {$ctx1.fill(self,"testStickBelow",{},smalltalk.TRConstraintTest)});},
args: [],
source: "testStickBelow\x0a\x0a\x09TRConstraint stick: shape2 below: shape1.\x0a\x09self assert: shape1 center = (0 @ 0).\x0a\x09self assert: shape2 center = (0 @ 30).\x0a\x0a\x09shape1 translateBy: 10 @ 10.\x0a\x09self assert: shape1 center = (10 @ 10).\x0a\x09self assert: shape2 center = (10 @ 40).",
messageSends: ["stick:below:", "assert:", "=", "@", "center", "translateBy:"],
referencedClasses: ["TRConstraint"]
}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickToTheCenter",
category: 'sticking',
fn: function () {
var self=this;
function $TRConstraint(){return smalltalk.TRConstraint||(typeof TRConstraint=="undefined"?nil:TRConstraint)}
return smalltalk.withContext(function($ctx1) { 
_st($TRConstraint())._stick_onTheCenterOf_(self["@shape1"],self["@shape2"]);
self._assert_(_st(_st(self["@shape1"])._center()).__eq((0).__at((0))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((0).__at((0))));
_st(self["@shape2"])._translateBy_((10).__at((15)));
self._assert_(_st(_st(self["@shape1"])._center()).__eq((10).__at((15))));
self._assert_(_st(_st(self["@shape2"])._center()).__eq((10).__at((15))));
return self}, function($ctx1) {$ctx1.fill(self,"testStickToTheCenter",{},smalltalk.TRConstraintTest)});},
args: [],
source: "testStickToTheCenter\x0a\x0a\x09TRConstraint \x0a\x09\x09stick: shape1 onTheCenterOf: shape2.\x0a\x09\x09\x0a\x09self assert: shape1 center = (0 @ 0).\x0a\x09self assert: shape2 center = (0 @ 0).\x0a\x0a\x09shape2 translateBy: 10 @ 15.\x0a\x09self assert: shape1 center = (10 @ 15).\x0a\x09self assert: shape2 center = (10 @ 15).",
messageSends: ["stick:onTheCenterOf:", "assert:", "=", "@", "center", "translateBy:"],
referencedClasses: ["TRConstraint"]
}),
smalltalk.TRConstraintTest);



smalltalk.addClass('TRShapeTest', smalltalk.TRTest, [], 'Trachel-Core');
smalltalk.TRShapeTest.comment="A TRShapeTest is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "testPosition",
category: 'position',
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
_st(box)._translateTo_((10).__at((20)));
self._assert_(_st(_st(box)._position()).__eq((10).__at((20))));
return self}, function($ctx1) {$ctx1.fill(self,"testPosition",{box:box},smalltalk.TRShapeTest)});},
args: [],
source: "testPosition\x0a\x0a\x09| box |\x0a\x09box := TRBoxShape new.\x0a\x09box translateTo: 10 @ 20.\x0a\x09self assert: box position = (10 @ 20)",
messageSends: ["new", "translateTo:", "@", "assert:", "=", "position"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionDefault",
category: 'position',
fn: function () {
var self=this;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st($TRBoxShape())._new())._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionDefault",{},smalltalk.TRShapeTest)});},
args: [],
source: "testPositionDefault\x0a\x0a\x09self assert: TRBoxShape new position = (0 @ 0)",
messageSends: ["assert:", "=", "@", "position", "new"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionWithFloats",
category: 'position',
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
_st(box)._translateTo_((1.1234).__at((1.1234)));
self._assert_(_st(_st(box)._position()).__eq((1.1234).__at((1.1234))));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionWithFloats",{box:box},smalltalk.TRShapeTest)});},
args: [],
source: "testPositionWithFloats\x0a\x0a\x09| box |\x0a\x09box := TRBoxShape new.\x0a\x09box translateTo: 1.1234 @ 1.1234.\x0a\x09self assert: box position = (1.1234 @ 1.1234)",
messageSends: ["new", "translateTo:", "@", "assert:", "=", "position"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRShapeTest);



