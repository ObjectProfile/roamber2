smalltalk.addPackage('Trachel-Core');
smalltalk.addClass('TREvent', smalltalk.nil, ['canvas', 'position', 'morph'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "morph",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@morph"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"morph",{},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "morph:",
fn: function (aMorph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@morph"]=aMorph;
return self}, function($ctx1) {$ctx1.fill(self,"morph:",{aMorph:aMorph},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPoint:aPoint},smalltalk.TREvent)});},
messageSends: []}),
smalltalk.TREvent);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@morph"])._notNil();
if(smalltalk.assert($1)){
_st(self["@morph"])._changed();
};
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TREvent)});},
messageSends: ["ifTrue:", "changed", "notNil"]}),
smalltalk.TREvent);



smalltalk.addClass('TRResizeCanvasEvent', smalltalk.TREvent, [], 'Trachel-Core');


smalltalk.addClass('TRShapeEvent', smalltalk.TREvent, ['shape'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shape())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRShapeEvent)});},
messageSends: ["element", "shape"]}),
smalltalk.TRShapeEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.TRShapeEvent)});},
messageSends: []}),
smalltalk.TRShapeEvent);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
fn: function (aTrachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aTrachelShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aTrachelShape:aTrachelShape},smalltalk.TRShapeEvent)});},
messageSends: []}),
smalltalk.TRShapeEvent);


smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
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
messageSends: ["shape:", "new", "yourself"]}),
smalltalk.TRShapeEvent.klass);


smalltalk.addClass('TRMouseClick', smalltalk.TRShapeEvent, ['commandKeyPressed', 'controlKeyPressed', 'shiftKeyPressed'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@commandKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed",{},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "commandKeyPressed:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@commandKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"commandKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controlKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed",{},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "controlKeyPressed:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controlKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"controlKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRMouseClick.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@commandKeyPressed"]=false;
self["@controlKeyPressed"]=false;
self["@shiftKeyPressed"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRMouseClick)});},
messageSends: ["initialize"]}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shiftKeyPressed"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed",{},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftKeyPressed:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shiftKeyPressed"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"shiftKeyPressed:",{anObject:anObject},smalltalk.TRMouseClick)});},
messageSends: []}),
smalltalk.TRMouseClick);



smalltalk.addClass('TRMouseLeftClick', smalltalk.TRMouseClick, [], 'Trachel-Core');


smalltalk.addClass('TRMouseRightClick', smalltalk.TRMouseClick, [], 'Trachel-Core');


smalltalk.addClass('TRMouseDragging', smalltalk.TRShapeEvent, ['step'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRMouseDragging.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@step"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRMouseDragging)});},
messageSends: ["initialize", "@"]}),
smalltalk.TRMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@step"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.TRMouseDragging)});},
messageSends: []}),
smalltalk.TRMouseDragging);

smalltalk.addMethod(
smalltalk.method({
selector: "step:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@step"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"step:",{aPoint:aPoint},smalltalk.TRMouseDragging)});},
messageSends: []}),
smalltalk.TRMouseDragging);


smalltalk.addMethod(
smalltalk.method({
selector: "step:",
fn: function (aStepAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._step_(aStepAsPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"step:",{aStepAsPoint:aStepAsPoint},smalltalk.TRMouseDragging.klass)});},
messageSends: ["step:", "new"]}),
smalltalk.TRMouseDragging.klass);


smalltalk.addClass('TRMouseEnter', smalltalk.TRShapeEvent, [], 'Trachel-Core');


smalltalk.addClass('TRMouseLeave', smalltalk.TRShapeEvent, [], 'Trachel-Core');


smalltalk.addClass('TRMouseMove', smalltalk.TRShapeEvent, [], 'Trachel-Core');


smalltalk.addClass('TRObject', smalltalk.Object, [], 'Trachel-Core');


smalltalk.addClass('TRCamera', smalltalk.TRObject, ['position', 'canvas', 'scale'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._encompassingRectangleOf_(_st(self["@canvas"])._shapes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRCamera)});},
messageSends: ["encompassingRectangleOf:", "shapes"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
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
messageSends: ["encompassingRectangle", "anyOne", "do:", "merge:"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
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
messageSends: ["ifTrue:", "=", "numberOfShapes", "translateTo:", "center", "encompassingRectangle"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPixelToSpace:",
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
messageSends: ["negated", "-", "position", "/", "extent", "translation:", "new", "transform:"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSpaceToPixel:",
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
messageSends: ["-", "position", "/", "extent", "translation:", "new", "transform:"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCamera.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCamera)});},
messageSends: ["initialize", "@"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (aNewScale) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNewScale;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNewScale:aNewScale},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRCamera)});},
messageSends: ["+"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=newPosition;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{newPosition:newPosition},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);


smalltalk.addMethod(
smalltalk.method({
selector: "forCanvas:",
fn: function (aTrachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TRCamera.klass.superclass.fn.prototype._new.apply(_st(self), []))._canvas_(aTrachelCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCanvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera.klass)});},
messageSends: ["canvas:", "new"]}),
smalltalk.TRCamera.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Instance of this class have to be created with #forCanvas:");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TRCamera.klass)});},
messageSends: ["error:"]}),
smalltalk.TRCamera.klass);


smalltalk.addClass('TRCanvasExample', smalltalk.TRObject, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "animatedArc",
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
messageSends: ["new", "cycleLength:", "repeat", "evaluator:", "interpolateTo:at:", "timer:", "yourself", "alphaAngle:betaAngle:innerRadius:externalRadius:", "+", "addShape:", "start", "addAnimation:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc0",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc2",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc3",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc4",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc5",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "green", "yellow", "red", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "arc6",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "color:", "blue", "rectangle:", "corner:", "bottomRight", "topLeft", "red", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "bezier",
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
messageSends: ["new", "add:", "@", "addShape:", "from:to:", "points:", "strokePaint:", "purple", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
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
messageSends: ["new", "buildRectangle:color:", "corner:", "@", "alpha:", "blue", "to:by:do:", "buildCircleFrom:to:color:", "red", "openTitled:"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "circle2",
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
messageSends: ["new", "from:to:", "@", "color:", "alpha:", "purple", "blue", "addShape:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "fiveLabelFlowers",
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
messageSends: ["new", "color:", "white", "add:", "@", "do:", "to:by:do:", "from:to:", "-", "+", "alpha:", "blue", "addShape:", "text:", "black", "position:", "angleInDegree:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "fixedRec",
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
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "lightGreen", "buildLineFrom:to:color:", "with:with:with:", "blue", "white", "when:do:", "color:", "atRandom", "shape", "signalUpdate", "setAsFixed", "translateBy:", "negated", "step", "camera", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
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
messageSends: ["new", "addShape:", "fontSize:", "position:", "@", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "menu1",
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
messageSends: ["new", "addMenu:callback:", "addShape:", "color:", "alpha:", "purple", "from:extent:", "@", "atRandom", "signalUpdate", "blue", "translateTo:", "camera", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "rec1",
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
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "lightGreen", "buildLineFrom:to:color:", "open"]}),
smalltalk.TRCanvasExample);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
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
messageSends: ["new", "color:", "white", "fromRectangle:", "encompassingRectangle", "addShape:", "open"]}),
smalltalk.TRCanvasExample);



smalltalk.addClass('TRConstraint', smalltalk.TRObject, [], 'Trachel-Core');

smalltalk.addMethod(
smalltalk.method({
selector: "move:above:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__minus((0).__at(_st(_st(_st(anotherShape)._height()).__plus(_st(aShape)._height())).__slash((2)))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:above:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "-", "@", "/", "+", "height", "center"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:below:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__plus((0).__at(_st(_st(_st(anotherShape)._height()).__plus(_st(aShape)._height())).__slash((2)))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:below:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "+", "@", "/", "height", "center"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:between:and:",
fn: function (aShape, s1, s2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(_st(s1)._position()).__plus(_st(s2)._position())).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:between:and:",{aShape:aShape,s1:s1,s2:s2},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "/", "+", "position"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheCenterOf:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(anotherShape)._center());
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheCenterOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "center"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheLeftOf:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__minus(_st(_st(_st(_st(_st(anotherShape)._width()).__slash((2)))._rounded()).__plus(_st(_st(aShape)._width()).__slash((2)._rounded()))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheLeftOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "-", "@", "+", "/", "rounded", "width", "center"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "move:onTheRightOf:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aShape)._translateTo_(_st(_st(anotherShape)._center()).__plus(_st(_st(_st(_st(_st(anotherShape)._width()).__slash((2)))._rounded()).__plus(_st(_st(aShape)._width()).__slash((2)._rounded()))).__at((0))));
return $1;
}, function($ctx1) {$ctx1.fill(self,"move:onTheRightOf:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "+", "@", "/", "rounded", "width", "center"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAtTheBottomOfTheWindow:",
fn: function (trachelShape) {
var self=this;
var windowSize;
return smalltalk.withContext(function($ctx1) { 
windowSize=_st(_st(trachelShape)._canvas())._extent();
_st(trachelShape)._translateTo_(_st(_st(_st(trachelShape)._width()).__slash((2))).__at(_st(_st(windowSize)._y()).__minus(_st(_st(trachelShape)._height()).__slash((2)))));
return self}, function($ctx1) {$ctx1.fill(self,"moveAtTheBottomOfTheWindow:",{trachelShape:trachelShape,windowSize:windowSize},smalltalk.TRConstraint.klass)});},
messageSends: ["extent", "canvas", "translateTo:", "@", "-", "/", "height", "y", "width"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "moveCameraToTheRightIn:",
fn: function (trachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(trachelCanvas)._camera())._translateTo_(_st(_st(_st(_st(trachelCanvas)._extent())._x()).__slash((-2))).__at(_st(_st(_st(trachelCanvas)._camera())._position())._y()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"moveCameraToTheRightIn:",{trachelCanvas:trachelCanvas},smalltalk.TRConstraint.klass)});},
messageSends: ["translateTo:", "@", "y", "position", "camera", "/", "x", "extent"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:above:",
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
messageSends: ["move:above:", "addCallback:", "block:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:below:",
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
messageSends: ["move:below:", "addCallback:", "block:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:between:and:",
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
messageSends: ["move:between:and:", "block:", "addCallback:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheCenterOf:",
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
messageSends: ["move:onTheCenterOf:", "addCallback:", "block:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheLeftOf:",
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
messageSends: ["move:onTheLeftOf:", "addCallback:", "block:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stick:onTheRightOf:",
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
messageSends: ["move:onTheRightOf:", "addCallback:", "block:"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickAtTheBottomOfTheWindow:",
fn: function (trachelShape) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(trachelShape)._canvas())._when_do_($TRResizeCanvasEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveAtTheBottomOfTheWindow_(trachelShape);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickAtTheBottomOfTheWindow:",{trachelShape:trachelShape},smalltalk.TRConstraint.klass)});},
messageSends: ["when:do:", "moveAtTheBottomOfTheWindow:", "canvas"]}),
smalltalk.TRConstraint.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "stickCameraToTheRightIn:",
fn: function (trachelCanvas) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
_st(trachelCanvas)._when_do_($TRResizeCanvasEvent(),(function(event){
return smalltalk.withContext(function($ctx2) {
return self._moveCameraToTheRightIn_(trachelCanvas);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"stickCameraToTheRightIn:",{trachelCanvas:trachelCanvas},smalltalk.TRConstraint.klass)});},
messageSends: ["when:do:", "moveCameraToTheRightIn:"]}),
smalltalk.TRConstraint.klass);


smalltalk.addClass('TRFocusing', smalltalk.TRObject, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
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
messageSends: ["encompassingRectangle", "anyOne", "do:", "merge:"]}),
smalltalk.TRFocusing);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas},smalltalk.TRFocusing)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.TRFocusing);


smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (canvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._on_(canvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas},smalltalk.TRFocusing.klass)});},
messageSends: ["on:", "new"]}),
smalltalk.TRFocusing.klass);


smalltalk.addClass('TRFocusCenter', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._center());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusCenter)});},
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "center", "camera"]}),
smalltalk.TRFocusCenter);



smalltalk.addClass('TRFocusTopLeft', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._topLeft());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusTopLeft)});},
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "topLeft", "camera"]}),
smalltalk.TRFocusTopLeft);



smalltalk.addClass('TRFocusTopRight', smalltalk.TRFocusing, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (canvas) {
var self=this;
var encompassingRectangle;
return smalltalk.withContext(function($ctx1) { 
encompassingRectangle=self._encompassingRectangleOf_(_st(canvas)._shapes());
_st(_st(canvas)._camera())._translateTo_(_st(encompassingRectangle)._topRight());
return self}, function($ctx1) {$ctx1.fill(self,"on:",{canvas:canvas,encompassingRectangle:encompassingRectangle},smalltalk.TRFocusTopRight)});},
messageSends: ["encompassingRectangleOf:", "shapes", "translateTo:", "topRight", "camera"]}),
smalltalk.TRFocusTopRight);



smalltalk.addClass('TRShape', smalltalk.TRObject, ['canvas', 'color', 'path', 'strokePaint', 'announcer', 'element', 'callbacks', 'position'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
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
messageSends: ["ifNil:", "new", "add:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._privateAdd_(self);
self._canvas_(aCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRShape)});},
messageSends: ["privateAdd:", "canvas:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRShape)});},
messageSends: ["announce:", "announcer"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
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
messageSends: ["ifTrue:", "new", "isNil"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcer"]=anAnnouncer;
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "athensCanvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._canvas())._athensCanvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"athensCanvas",{},smalltalk.TRShape)});},
messageSends: ["athensCanvas", "canvas"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aSurface) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aSurface;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRShape)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRShape)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawEncompassingRectangleOn:",
fn: function (athensCanvas) {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._drawEncompassingRectangleOn_color_(athensCanvas,_st(_st($Color())._blue())._alpha_((0.2)));
return self}, function($ctx1) {$ctx1.fill(self,"drawEncompassingRectangleOn:",{athensCanvas:athensCanvas},smalltalk.TRShape)});},
messageSends: ["drawEncompassingRectangleOn:color:", "alpha:", "blue"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawEncompassingRectangleOn:color:",
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
messageSends: ["encompassingRectangle", "createPath:", "absolute", "moveTo:", "topLeft", "lineTo:", "topRight", "bottomRight", "bottomLeft", "restoreAfter:", "setPaint:", "drawShape:", "pathTransform"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["restoreAfter:", "setPaint:", "drawShape:", "path", "setStrokePaint:", "pathTransform"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRShape)});},
messageSends: ["subclassReponsibility"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (anExtent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "hasCallback",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@callbacks"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasCallback",{},smalltalk.TRShape)});},
messageSends: ["notNil"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=_st($Color())._gray();
self["@strokePaint"]=_st($Color())._black();
self["@position"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)});},
messageSends: ["initialize", "gray", "black", "@"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._canvas())._fixedShapes())._includes_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixed",{},smalltalk.TRShape)});},
messageSends: ["includes:", "fixedShapes", "canvas"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isInACanvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@canvas"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isInACanvas",{},smalltalk.TRShape)});},
messageSends: ["notNil"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isMovable",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._canvas())._isMovableShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMovable",{},smalltalk.TRShape)});},
messageSends: ["isMovableShape:", "canvas"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotFixed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._isMovable();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotFixed",{},smalltalk.TRShape)});},
messageSends: ["isMovable"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "path",
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
messageSends: ["ifNil:", "computePath"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBack",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._pushBack_(self);
return self}, function($ctx1) {$ctx1.fill(self,"pushBack",{},smalltalk.TRShape)});},
messageSends: ["pushBack:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBehind:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._push_behind_(self,aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushBehind:",{aShape:aShape},smalltalk.TRShape)});},
messageSends: ["push:behind:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBehindAll:",
fn: function (manyShapes) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._push_behindAll_(self,manyShapes);
return self}, function($ctx1) {$ctx1.fill(self,"pushBehindAll:",{manyShapes:manyShapes},smalltalk.TRShape)});},
messageSends: ["push:behindAll:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "pushFront",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._pushFront_(self);
return self}, function($ctx1) {$ctx1.fill(self,"pushFront",{},smalltalk.TRShape)});},
messageSends: ["pushFront:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
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
messageSends: ["ifFalse:", "isInACanvas", "removeShape:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPath",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"resetPath",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsFixed",
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
messageSends: ["ifNil:", "error:", "setAsFixed:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsNotFixed",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._removeFixedShape_(self);
_st(self["@canvas"])._addShape_(self);
return self}, function($ctx1) {$ctx1.fill(self,"setAsNotFixed",{},smalltalk.TRShape)});},
messageSends: ["removeFixedShape:", "addShape:"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeDrawn",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"shouldBeDrawn",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
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
messageSends: ["ifNil:", "signalUpdate"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@strokePaint"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"strokePaint",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRShape)});},
messageSends: ["+"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRShape)});},
messageSends: ["when:do:", "announcer"]}),
smalltalk.TRShape);



smalltalk.addClass('TRAbstractBoxShape', smalltalk.TRShape, ['rectangle'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["position"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["ifNil:", "createPath:", "absolute", "moveTo:", "topLeft", "lineTo:", "topRight", "bottomRight", "bottomLeft", "athensCanvas"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:", "pathTransform"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessaryOn:",
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
messageSends: ["scale", "camera", "canvas", "ifNotNil:", "width:", "asInteger", "/", "setStrokePaint:", "drawShape:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rectangle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["rectangle"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._rectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["extent", "rectangle"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
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
messageSends: ["ifTrue:", "=", "extent", "center", "extent:", "-", "/", "resetPath"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:extent:",
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(_st(aPoint)._corner_(_st(aPoint).__plus(anotherPoint)));
return self}, function($ctx1) {$ctx1.fill(self,"from:extent:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRAbstractBoxShape)});},
messageSends: ["fromRectangle:", "corner:", "+"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(_st(aPoint)._corner_(anotherPoint));
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRAbstractBoxShape)});},
messageSends: ["fromRectangle:", "corner:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRAbstractBoxShape)});},
messageSends: ["from:to:", "color:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangle:",
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
messageSends: ["topLeft", "center", "triggerCallbacksForStep:", "-", "resetPath"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fromRectangle:color:",
fn: function (r, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(r);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"fromRectangle:color:",{r:r,aColor:aColor},smalltalk.TRAbstractBoxShape)});},
messageSends: ["fromRectangle:", "color:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["height"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (newHeight) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(_st(self["@position"]).__minus((0).__at(_st(newHeight).__slash((2)))))._extent_(_st(_st(self._extent())._x()).__at(newHeight));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{newHeight:newHeight},smalltalk.TRAbstractBoxShape)});},
messageSends: ["extent:", "@", "x", "extent", "-", "/"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRAbstractBoxShape)});},
messageSends: ["containsPoint:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@rectangle"]=_st(self._class())._nullRectangle();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["initialize", "nullRectangle", "class"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "leftPosition:",
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(aPosition).__minus(_st(_st(self._width()).__slash((-2))).__at((0))))._asIntegerPoint());
return self}, function($ctx1) {$ctx1.fill(self,"leftPosition:",{aPosition:aPosition},smalltalk.TRAbstractBoxShape)});},
messageSends: ["position:", "asIntegerPoint", "-", "@", "/", "width"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rectangle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.TRAbstractBoxShape)});},
messageSends: []}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle:",
fn: function (r) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._fromRectangle_(r);
return self}, function($ctx1) {$ctx1.fill(self,"rectangle:",{r:r},smalltalk.TRAbstractBoxShape)});},
messageSends: ["fromRectangle:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldBeDrawn",
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
messageSends: ["and:", ">", "height", "width"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (v) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._extent_(_st(v).__at(v));
return $1;
}, function($ctx1) {$ctx1.fill(self,"size:",{v:v},smalltalk.TRAbstractBoxShape)});},
messageSends: ["extent:", "@"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._translateBy_.apply(_st(self), [aPoint]);
self["@rectangle"]=_st(_st(_st(self["@rectangle"])._topLeft()).__plus(aPoint))._extent_(_st(self["@rectangle"])._extent());
self._triggerCallbacksForStep_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRAbstractBoxShape)});},
messageSends: ["translateBy:", "extent:", "extent", "+", "topLeft", "triggerCallbacksForStep:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
var oldTopLeft;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRAbstractBoxShape.superclass.fn.prototype._translateTo_.apply(_st(self), [aPoint]);
oldTopLeft=_st(self["@rectangle"])._topLeft();
self["@rectangle"]=_st(_st(aPoint).__minus(_st(self._extent()).__slash((2))))._extent_(self._extent());
self._triggerCallbacksForStep_(_st(_st(self["@rectangle"])._topLeft()).__minus(oldTopLeft));
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint,oldTopLeft:oldTopLeft},smalltalk.TRAbstractBoxShape)});},
messageSends: ["translateTo:", "topLeft", "extent:", "extent", "-", "/", "triggerCallbacksForStep:"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "triggerCallbacksForStep:",
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
messageSends: ["ifNil:", "do:", "value:value:", "block"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRAbstractBoxShape)});},
messageSends: ["width"]}),
smalltalk.TRAbstractBoxShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (newWidth) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(_st(self["@position"]).__minus(_st(_st(newWidth).__slash((2))).__at((0))))._extent_(_st(newWidth).__at(_st(self._extent())._y()));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{newWidth:newWidth},smalltalk.TRAbstractBoxShape)});},
messageSends: ["extent:", "@", "y", "extent", "-", "/"]}),
smalltalk.TRAbstractBoxShape);


smalltalk.TRAbstractBoxShape.klass.iVarNames = ['nullRectangle'];
smalltalk.addMethod(
smalltalk.method({
selector: "nullRectangle",
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
messageSends: ["ifNotNil:", "extent:", "@"]}),
smalltalk.TRAbstractBoxShape.klass);


smalltalk.addClass('TRBoxShape', smalltalk.TRAbstractBoxShape, [], 'Trachel-Core');


smalltalk.addClass('TREllipseShape', smalltalk.TRAbstractBoxShape, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["ifNil:", "createPath:", "absolute", "moveTo:", "@", "ccwArcTo:angle:", "degreesToRadians", "athensCanvas"]}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "translateBy:", "center", "pathTransform", "scaleBy:", "/", "extent", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:"]}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rectangle"]=_st(aPoint)._corner_(anotherPoint);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TREllipseShape)});},
messageSends: ["corner:", "strokePaint:", "color:"]}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TREllipseShape)});},
messageSends: ["containsPoint:"]}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRArcShape', smalltalk.TRShape, ['alphaAngle', 'betaAngle', 'innerRadius', 'externalRadius', 'center', 'origin', 'height', 'width', 'topLeft', 'bottomRight'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle:betaAngle:innerRadius:externalRadius:",
fn: function (stAngle, ndAngle, iR, eR) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alphaAngle"]=stAngle;
self["@betaAngle"]=ndAngle;
self["@innerRadius"]=iR;
self["@externalRadius"]=eR;
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngle:betaAngle:innerRadius:externalRadius:",{stAngle:stAngle,ndAngle:ndAngle,iR:iR,eR:eR},smalltalk.TRArcShape)});},
messageSends: []}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "bottomRight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeBottomRight();
$1=self["@bottomRight"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"bottomRight",{},smalltalk.TRArcShape)});},
messageSends: ["computeBottomRight"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRArcShape)});},
messageSends: []}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.TRArcShape)});},
messageSends: []}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeBottomRight",
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
messageSends: ["new", "degreesToRadians", "\x5c\x5c", "value", "@", "*", "sin", "cos", "/", "pi", "add:", "ifTrue:", "includesPoint:", "y", "min", "x", "max"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeHeight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=_st(_st(_st(self._topLeft())._y()).__minus(_st(self._bottomRight())._y()))._abs();
return self}, function($ctx1) {$ctx1.fill(self,"computeHeight",{},smalltalk.TRArcShape)});},
messageSends: ["abs", "-", "y", "bottomRight", "topLeft"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["ifNil:", "degreesToRadians", "value", "createPath:", "absolute", "moveTo:", "@", "*", "sin", "cos", "arcTo:angle:cw:", "-", "ccwArcTo:angle:", "athensCanvas"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeTopLeft",
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
messageSends: ["new", "degreesToRadians", "\x5c\x5c", "value", "@", "*", "sin", "cos", "/", "pi", "add:", "ifTrue:", "includesPoint:", "y", "max", "x", "min"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computeWidth",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=_st(_st(_st(self._topLeft())._x()).__minus(_st(self._bottomRight())._x()))._abs();
return self}, function($ctx1) {$ctx1.fill(self,"computeWidth",{},smalltalk.TRArcShape)});},
messageSends: ["abs", "-", "x", "bottomRight", "topLeft"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["ifFalse:", "shouldBeDrawn", "restoreAfter:", "setPaint:", "drawShape:", "path", "drawStrokeIfNecessaryOn:", "pathTransform"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessaryOn:",
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawStrokeIfNecessaryOn:",{athensCanvas:athensCanvas},smalltalk.TRArcShape)});},
messageSends: []}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._topLeft())._corner_(self._bottomRight());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRArcShape)});},
messageSends: ["corner:", "bottomRight", "topLeft"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeHeight();
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRArcShape)});},
messageSends: ["computeHeight"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
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
messageSends: ["ifTrue:", "=", "value", "ifFalse:ifTrue:", "\x5c\x5c", "%", "radiansToDegrees", "angleWith:", "center", "@", "negated", "y", "x", "sqrt", "squaredDistanceTo:", "or:", ">", "<", "ifTrue:ifFalse:", "not", ">=", "<="]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "@"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRArcShape)});},
messageSends: ["@"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeTopLeft();
$1=self["@topLeft"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeft",{},smalltalk.TRArcShape)});},
messageSends: ["computeTopLeft"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._computeWidth();
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRArcShape)});},
messageSends: ["computeWidth"]}),
smalltalk.TRArcShape);



smalltalk.addClass('TRBezierShape', smalltalk.TRShape, ['listOfPoints'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["createPath:", "absolute", "moveTo:", "first", "do:", "curveVia:to:", "at:", "asFloatPoint", "/", "+", "to:", "-", "size", "lineTo:", "last", "athensCanvas"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["restoreAfter:", "setStrokePaint:", "drawShape:", "path", "pathTransform"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._encompassing_(self["@listOfPoints"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRBezierShape)});},
messageSends: ["encompassing:"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBezierShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@listOfPoints"]=_st($Array())._with_with_((0).__at((0)),(0).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRBezierShape)});},
messageSends: ["initialize", "with:with:", "@"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@listOfPoints"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"points",{},smalltalk.TRBezierShape)});},
messageSends: ["copy"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:",
fn: function (points) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=points;
return self}, function($ctx1) {$ctx1.fill(self,"points:",{points:points},smalltalk.TRBezierShape)});},
messageSends: []}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:color:",
fn: function (aListOfPoints, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._points_(aListOfPoints);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"points:color:",{aListOfPoints:aListOfPoints,aColor:aColor},smalltalk.TRBezierShape)});},
messageSends: ["points:", "strokePaint:", "color:"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRBezierShape)});},
messageSends: ["center", "encompassingRectangle"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=_st(self["@listOfPoints"])._collect_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(p).__plus(aPoint);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRBezierShape)});},
messageSends: ["collect:", "+"]}),
smalltalk.TRBezierShape);



smalltalk.addClass('TRComposedShape', smalltalk.TRShape, ['shape1', 'shape2'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
fn: function (aCallback) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._addCallback_(aCallback);
_st(self["@shape2"])._addCallback_(aCallback);
return self}, function($ctx1) {$ctx1.fill(self,"addCallback:",{aCallback:aCallback},smalltalk.TRComposedShape)});},
messageSends: ["addCallback:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._addShape_(self["@shape1"]);
_st(aCanvas)._addShape_(self["@shape2"]);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRComposedShape)});},
messageSends: ["addShape:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announce_(anEvent);
_st(self["@shape2"])._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRComposedShape)});},
messageSends: ["announce:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("should not be called");
return self}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRComposedShape)});},
messageSends: ["error:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announcer_(anAnnouncer);
_st(self["@shape2"])._announcer_(anAnnouncer);
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRComposedShape)});},
messageSends: ["announcer:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aSurface) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._canvas_(aSurface);
_st(self["@shape2"])._canvas_(aSurface);
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRComposedShape)});},
messageSends: ["canvas:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._computePath();
_st(self["@shape2"])._computePath();
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRComposedShape)});},
messageSends: ["computePath"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._drawOn_(athensCanvas);
_st(self["@shape2"])._drawOn_(athensCanvas);
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRComposedShape)});},
messageSends: ["drawOn:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape1"])._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRComposedShape)});},
messageSends: ["element"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._element_(anObject);
_st(self["@shape2"])._element_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRComposedShape)});},
messageSends: ["element:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._merging_(_st($Array())._with_with_(_st(self["@shape1"])._encompassingRectangle(),_st(self["@shape2"])._encompassingRectangle()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRComposedShape)});},
messageSends: ["merging:", "with:with:", "encompassingRectangle"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRComposedShape)});},
messageSends: ["height", "encompassingRectangle"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
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
messageSends: ["or:", "includesPoint:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRComposedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape1"]=_st($TRNoShape())._instance();
self["@shape2"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRComposedShape)});},
messageSends: ["initialize", "instance"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@shape1"])._position()).__plus(_st(self["@shape2"])._position())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRComposedShape)});},
messageSends: ["/", "+", "position"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._remove();
_st(self["@shape2"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TRComposedShape)});},
messageSends: ["remove"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape1",{},smalltalk.TRComposedShape)});},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1:",
fn: function (aTRShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape1"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape1:",{aTRShape:aTRShape},smalltalk.TRComposedShape)});},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape2",{},smalltalk.TRComposedShape)});},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2:",
fn: function (aTRShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape2"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape2:",{aTRShape:aTRShape},smalltalk.TRComposedShape)});},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TRComposedShape)});},
messageSends: ["signalUpdate"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._translateTo_(aPoint);
_st(self["@shape2"])._translateTo_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRComposedShape)});},
messageSends: ["translateTo:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@shape1"])._announcer())._when_do_(event,aBlock);
_st(_st(self["@shape2"])._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRComposedShape)});},
messageSends: ["when:do:", "announcer"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRComposedShape)});},
messageSends: ["width", "encompassingRectangle"]}),
smalltalk.TRComposedShape);


smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["shape1:", "new", "shape2:", "yourself"]}),
smalltalk.TRComposedShape.klass);


smalltalk.addClass('TRLabelShape', smalltalk.TRShape, ['text', 'font', 'fontSize'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "ascent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._ascent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ascent",{},smalltalk.TRLabelShape)});},
messageSends: ["ascent"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultFontSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape)});},
messageSends: ["defaultFontSize", "class"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "descent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._descent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"descent",{},smalltalk.TRLabelShape)});},
messageSends: ["descent"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["restoreAfter:", "translateBy:", "asIntegerPoint", "pathTransform", "@", "/", "height", "width", "negated", "descent", "setFont:", "setPaint:", "drawString:"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
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
messageSends: ["width", "height", "extent:", "@", "+", "/"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "font",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@font"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"font",{},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fontSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fontSize",{},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@font"]=_st(self._class())._getFontForSize_(aNumber);
self["@fontSize"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aNumber:aNumber},smalltalk.TRLabelShape)});},
messageSends: ["getFontForSize:", "class"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRLabelShape)});},
messageSends: ["height"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._containsPoint_(aPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRLabelShape)});},
messageSends: ["containsPoint:", "encompassingRectangle"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRLabelShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]="Trachel label";
self._fontSize_(self._defaultFontSize());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRLabelShape)});},
messageSends: ["initialize", "fontSize:", "defaultFontSize"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "leftPosition:",
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._position_(_st(_st(aPosition).__minus(_st(_st(self._width()).__slash((-2))).__at((0))))._asIntegerPoint());
return self}, function($ctx1) {$ctx1.fill(self,"leftPosition:",{aPosition:aPosition},smalltalk.TRLabelShape)});},
messageSends: ["position:", "asIntegerPoint", "-", "@", "/", "width"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aText) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:on:",
fn: function (aText, aPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._text_(aText);
self._position_(aPosition);
return self}, function($ctx1) {$ctx1.fill(self,"text:on:",{aText:aText,aPosition:aPosition},smalltalk.TRLabelShape)});},
messageSends: ["text:", "position:"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (step) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=_st(self["@position"]).__plus(step);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{step:step},smalltalk.TRLabelShape)});},
messageSends: ["+"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRLabelShape)});},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._widthOfString_(self["@text"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRLabelShape)});},
messageSends: ["widthOfString:"]}),
smalltalk.TRLabelShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (12);
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape.klass)});},
messageSends: []}),
smalltalk.TRLabelShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "getFontForSize:",
fn: function (aNumber) {
var self=this;
function $LogicalFont(){return smalltalk.LogicalFont||(typeof LogicalFont=="undefined"?nil:LogicalFont)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($LogicalFont())._familyName_pointSize_("Arial",aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getFontForSize:",{aNumber:aNumber},smalltalk.TRLabelShape.klass)});},
messageSends: ["familyName:pointSize:"]}),
smalltalk.TRLabelShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "widthOfText:fontSize:",
fn: function (aString, aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._getFontForSize_(aNumber))._widthOfString_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthOfText:fontSize:",{aString:aString,aNumber:aNumber},smalltalk.TRLabelShape.klass)});},
messageSends: ["widthOfString:", "getFontForSize:"]}),
smalltalk.TRLabelShape.klass);


smalltalk.addClass('TRRotatedLabelShape', smalltalk.TRLabelShape, ['angle'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "angleInDegree:",
fn: function (anAngle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@angle"]=anAngle;
return self}, function($ctx1) {$ctx1.fill(self,"angleInDegree:",{anAngle:anAngle},smalltalk.TRRotatedLabelShape)});},
messageSends: []}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["restoreAfter:", "translateBy:", "asIntegerPoint", "pathTransform", "rotateByDegrees:", "value", "@", "/", "notRotatedHeight", "notRotatedWidth", "negated", "descent", "setFont:", "setPaint:", "drawString:"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
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
messageSends: ["notRotatedWidth", "notRotatedHeight", "rotateByDegrees:", "value", "new", "translateBy:", "asIntegerPoint", "@", "/", "corner:", "negated", "transform:", "topLeft", "topRight", "bottomRight", "bottomLeft", "add:", "x", "yourself", "y", "max", "min"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRRotatedLabelShape)});},
messageSends: ["height", "encompassingRectangle"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRRotatedLabelShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@angle"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRRotatedLabelShape)});},
messageSends: ["initialize"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "notRotatedHeight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notRotatedHeight",{},smalltalk.TRRotatedLabelShape)});},
messageSends: ["height"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "notRotatedWidth",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@font"])._widthOfString_(self["@text"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"notRotatedWidth",{},smalltalk.TRRotatedLabelShape)});},
messageSends: ["widthOfString:"]}),
smalltalk.TRRotatedLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRRotatedLabelShape)});},
messageSends: ["width", "encompassingRectangle"]}),
smalltalk.TRRotatedLabelShape);



smalltalk.addClass('TRLineShape', smalltalk.TRShape, ['from', 'to'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["createPath:", "absolute", "moveTo:", "lineTo:", "athensCanvas"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["restoreAfter:", "setStrokePaint:", "drawShape:", "path", "pathTransform"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._encompassing_(_st($Array())._with_with_(self["@from"],self["@to"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRLineShape)});},
messageSends: ["encompassing:", "with:with:"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.TRLineShape)});},
messageSends: []}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{aPoint:aPoint},smalltalk.TRLineShape)});},
messageSends: []}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (aPoint, anotherPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
self["@to"]=anotherPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRLineShape)});},
messageSends: []}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRLineShape)});},
messageSends: ["from:to:", "strokePaint:", "color:"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aPoint)._onLineFrom_to_within_(self["@from"],self["@to"],(3));
return $1;
}, function($ctx1) {$ctx1.fill(self,"includesPoint:",{aPoint:aPoint},smalltalk.TRLineShape)});},
messageSends: ["onLineFrom:to:within:"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRLineShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@from"]=(0).__at((0));
self["@to"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRLineShape)});},
messageSends: ["initialize", "@"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@from"]).__plus(self["@to"])).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRLineShape)});},
messageSends: ["/", "+"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.TRLineShape)});},
messageSends: []}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{aPoint:aPoint},smalltalk.TRLineShape)});},
messageSends: []}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@from"]).__plus(aPoint);
self["@to"]=_st(self["@to"]).__plus(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRLineShape)});},
messageSends: ["+"]}),
smalltalk.TRLineShape);



smalltalk.addClass('TRNoShape', smalltalk.TRShape, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRNoShape)});},
messageSends: ["@"]}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"computePath",{},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (athensCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{athensCanvas:athensCanvas},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__at((0)))._corner_((0).__at((0)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRNoShape)});},
messageSends: ["corner:", "@"]}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRNoShape)});},
messageSends: ["@"]}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRNoShape)});},
messageSends: []}),
smalltalk.TRNoShape);


smalltalk.TRNoShape.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "instance",
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
messageSends: ["ifNil:", "new"]}),
smalltalk.TRNoShape.klass);


smalltalk.addClass('TRSVGPath', smalltalk.TRShape, ['borderWidth', 'fillColor', 'scale', 'paths', 'pathPoints', 'points', 'curves', 'rotationAngle', 'rectangle'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "angle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@rotationAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"angle",{},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._strokeColor_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.TRSVGPath)});},
messageSends: ["strokeColor:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (width) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=width;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{width:width},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rectangle"])._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRSVGPath)});},
messageSends: ["center"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fillColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fillColor_(aColor);
return $1;
}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRSVGPath)});},
messageSends: ["fillColor:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "computePath",
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
messageSends: ["createPath:", "absolute", "do:", "ifTrue:", "moveTo:", "at:", "value", "=", "key", "lineTo:", "curveVia:and:to:", "curveVia:to:", "athensCanvas"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curves",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@curves"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"curves",{},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "curves:",
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
messageSends: ["separateSubPaths:", "new", "do:", "ifFalse:", "add:", "*", "at:", "value", "=", "key", "inject:into:", ",", "center", "encompassingRectangle"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["pathTransform", "restoreAfter:", "scaleBy:", "setShape:", "path", "ifTrue:", "setPaint:", "draw", "isNotNil", "width:", "setStrokePaint:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@rectangle"]=_st($Rectangle())._encompassing_(self["@points"]);
$1=self["@rectangle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRSVGPath)});},
messageSends: ["encompassing:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "figure:",
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
messageSends: ["createPath:", "absolute", "moveTo:", "@", "curveVia:and:to:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
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
messageSends: ["new", "inject:into:", "or:", "includesPoint:", "polygon:"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "origin:corner:", "@"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateBy:",
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
messageSends: ["/", "center", "curves:", "collect:", "->", "-", "cos", "sin", "+", "@", "*", "y", "x", "value", "key", "curves"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateTo:",
fn: function (anAngle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rotateBy_(_st(anAngle).__minus(self["@rotationAngle"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rotateTo:",{anAngle:anAngle},smalltalk.TRSVGPath)});},
messageSends: ["rotateBy:", "-"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNumber:aNumber},smalltalk.TRSVGPath)});},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "separateSubPaths:",
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
messageSends: ["new", "do:", "ifTrue:", "add:", "=", "key"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
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
messageSends: ["/", "-", "translateTo:", "curves:", "collect:", "->", "+", "value", "key", "curves", "translateBy:"]}),
smalltalk.TRSVGPath);



smalltalk.addClass('TRTranslationCallback', smalltalk.TRObject, ['block'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "block",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@block"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"block",{},smalltalk.TRTranslationCallback)});},
messageSends: []}),
smalltalk.TRTranslationCallback);

smalltalk.addMethod(
smalltalk.method({
selector: "block:",
fn: function (aOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@block"]=aOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"block:",{aOneArgBlock:aOneArgBlock},smalltalk.TRTranslationCallback)});},
messageSends: []}),
smalltalk.TRTranslationCallback);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRTranslationCallback.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@block"]=(function(shape,step){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({shape:shape,step:step},$ctx1)})});
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRTranslationCallback)});},
messageSends: ["initialize"]}),
smalltalk.TRTranslationCallback);


smalltalk.addMethod(
smalltalk.method({
selector: "block:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._block_(aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"block:",{aBlock:aBlock},smalltalk.TRTranslationCallback.klass)});},
messageSends: ["block:", "new"]}),
smalltalk.TRTranslationCallback.klass);


smalltalk.addClass('TRTest', smalltalk.TestCase, [], 'Trachel-Core');


smalltalk.addClass('TRArcShapeTest', smalltalk.TRTest, ['arc1', 'arc2', 'arc3', 'arc4', 'arc5', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p1n', 'p2n', 'p3n', 'p4n', 'p5n', 'p6n', 'p7n', 'p8n', 'arcQ1', 'arcQ2', 'arcQ3', 'arcQ4', 'pR', 'pB', 'pL', 'pT', 'pQ1', 'pQ2', 'pQ3', 'pQ4'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "sqrt", "@", "negated"]}),
smalltalk.TRArcShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testEncompassingRectangle",
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
messageSends: ["assert:", "=", "corner:", "@", "encompassingRectangle", "abs", "width", "<", "height", "sqrt", "roundDownTo:"]}),
smalltalk.TRArcShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testIncludesPoint",
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
messageSends: ["assert:", "includesPoint:", "deny:"]}),
smalltalk.TRArcShapeTest);



smalltalk.addClass('TRCallbackTest', smalltalk.TRTest, ['canvas', 'circle1', 'circle2'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st($TRCanvas())._new();
self["@circle1"]=_st(self["@canvas"])._buildCircleFrom_to_color_((20).__at((20)),(150).__at((100)),_st(_st($Color())._green())._alpha_((0.1)));
self["@circle2"]=_st(self["@canvas"])._buildCircleFrom_to_color_((200).__at((200)),(240).__at((230)),_st(_st($Color())._blue())._alpha_((0.1)));
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCallbackTest)});},
messageSends: ["new", "buildCircleFrom:to:color:", "@", "alpha:", "green", "blue"]}),
smalltalk.TRCallbackTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCallback",
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
messageSends: ["block:", "addCallback:", "translateTo:", "@", "assert:", "==", "=", "center", "translateBy:"]}),
smalltalk.TRCallbackTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testHasCallBack",
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $TRTranslationCallback(){return smalltalk.TRTranslationCallback||(typeof TRTranslationCallback=="undefined"?nil:TRTranslationCallback)}
return smalltalk.withContext(function($ctx1) { 
self._deny_(_st(_st($TREllipseShape())._new())._hasCallback());
self._assert_(_st(_st(_st($TREllipseShape())._new())._addCallback_(_st($TRTranslationCallback())._new()))._hasCallback());
return self}, function($ctx1) {$ctx1.fill(self,"testHasCallBack",{},smalltalk.TRCallbackTest)});},
messageSends: ["deny:", "hasCallback", "new", "assert:", "addCallback:"]}),
smalltalk.TRCallbackTest);



smalltalk.addClass('TRCameraTest', smalltalk.TRTest, ['camera', 'canvas'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCameraTest.superclass.fn.prototype._setUp.apply(_st(self), []);
self["@canvas"]=_st($TRCanvas())._new();
self["@camera"]=_st(self["@canvas"])._camera();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCameraTest)});},
messageSends: ["setUp", "new", "camera"]}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testConversion",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@camera"])._fromSpaceToPixel_((0).__at((0)))).__eq(_st(_st(self["@canvas"])._extent()).__slash((2))));
self._assert_(_st(_st(self["@camera"])._fromSpaceToPixel_((10).__at((10)))).__eq(_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__plus((10).__at((10)))));
self._assert_(_st(_st(self["@camera"])._fromPixelToSpace_(_st(_st(self["@canvas"])._extent()).__slash((2)))).__eq((0).__at((0))));
self._assert_(_st(_st(self["@camera"])._fromPixelToSpace_(_st(_st(_st(self["@canvas"])._extent()).__slash((2))).__plus((10).__at((10))))).__eq((10).__at((10))));
return self}, function($ctx1) {$ctx1.fill(self,"testConversion",{},smalltalk.TRCameraTest)});},
messageSends: ["assert:", "=", "/", "extent", "fromSpaceToPixel:", "@", "+", "fromPixelToSpace:"]}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFocusingCenter",
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._addShape_(_st(_st($TREllipseShape())._new())._from_to_((50).__at((50)),(100).__at((80))));
_st(_st(self["@canvas"])._camera())._focusOnCenter();
self._assert_(_st(_st(_st(self["@canvas"])._camera())._position()).__eq((75).__at((65))));
return self}, function($ctx1) {$ctx1.fill(self,"testFocusingCenter",{},smalltalk.TRCameraTest)});},
messageSends: ["addShape:", "from:to:", "@", "new", "focusOnCenter", "camera", "assert:", "=", "position"]}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitialization",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@camera"])._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testInitialization",{},smalltalk.TRCameraTest)});},
messageSends: ["assert:", "=", "@", "position"]}),
smalltalk.TRCameraTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testTranslation",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@camera"])._translateTo_((5).__at((3)));
self._assert_(_st(_st(self["@camera"])._position()).__eq((5).__at((3))));
_st(self["@camera"])._translateBy_((2).__at((4)));
self._assert_(_st(_st(self["@camera"])._position()).__eq((7).__at((7))));
return self}, function($ctx1) {$ctx1.fill(self,"testTranslation",{},smalltalk.TRCameraTest)});},
messageSends: ["translateTo:", "@", "assert:", "=", "position", "translateBy:"]}),
smalltalk.TRCameraTest);



smalltalk.addClass('TRCanvasTest', smalltalk.TRTest, ['canvas'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function () {
var self=this;
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=_st($TRCanvas())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.TRCanvasTest)});},
messageSends: ["new"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAccessing",
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
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "setAsFixed", "lightGreen", "assert:", "=", "shapeForPositionInPixels:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testAddingAndRemoving",
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
messageSends: ["from:to:", "@", "new", "addShape:", "assert:", "=", "numberOfShapes", "remove"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBack",
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
messageSends: ["size:", "new", "addShape:", "pushBack", "assert:", "=", "with:with:with:", "shapes"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBezierShape",
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
messageSends: ["points:", "with:with:with:", "@", "new", "addShape:", "translateBy:", "assert:", "=", "points"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBox",
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
messageSends: ["extent:", "@", "buildRectangle:color:", "purple", "assert:", "=", "center", "rectangle"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCamera",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self["@canvas"])._camera())._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testCamera",{},smalltalk.TRCanvasTest)});},
messageSends: ["assert:", "=", "@", "position", "camera"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanvas",
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
messageSends: ["buildRectangle:color:", "extent:", "@", "red", "assert:", "==", "canvas", "athensCanvas", "~~"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCanvasAndEvent",
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
messageSends: ["new", "when:do:", "deny:", "announce:", "assert:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCapturingEvents2",
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
messageSends: ["size:", "new", "addShape:", "assert:", "==", "shapeForPosition:", "@"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCenteredLabelShapes",
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
messageSends: ["new", "text:", "position:", "@", "leftPosition:", "leftCenter", "encompassingRectangle", "assert:", "="]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testChangingBoxHeight",
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
messageSends: ["new", "assert:", "=", "height", "height:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testChangingBoxWidth",
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
messageSends: ["new", "assert:", "=", "width", "width:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testCircle",
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
messageSends: ["new", "to:by:do:", "buildCircleFrom:to:color:", "@", "alpha:", "red", "assert:", "=", "size", "to:by:", "numberOfShapes"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testComposing",
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
messageSends: ["new", "with:with:", "addShape:", "assert:", "=", "numberOfShapes", "remove"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPoint1",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@canvas"])._shapeForPosition_((20).__at((20)))).__eq_eq(self["@canvas"]));
return self}, function($ctx1) {$ctx1.fill(self,"testContainsPoint1",{},smalltalk.TRCanvasTest)});},
messageSends: ["assert:", "==", "shapeForPosition:", "@"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPoint2",
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
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "==", "shapeForPosition:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testContainsPointAfterTranslation",
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
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "translateBy:", "assert:", "==", "shapeForPosition:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefault",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(self["@canvas"])._shapes())._isEmpty());
return self}, function($ctx1) {$ctx1.fill(self,"testDefault",{},smalltalk.TRCanvasTest)});},
messageSends: ["assert:", "isEmpty", "shapes"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefaultAnimation",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._deny_(_st(self["@canvas"])._hasAnimation());
self._assert_(_st(_st(self["@canvas"])._numberOfAnimations()).__eq((0)));
return self}, function($ctx1) {$ctx1.fill(self,"testDefaultAnimation",{},smalltalk.TRCanvasTest)});},
messageSends: ["deny:", "hasAnimation", "assert:", "=", "numberOfAnimations"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testDefaultFontSize",
fn: function () {
var self=this;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st($TRLabelShape())._new())._fontSize()).__eq(_st(_st($TRLabelShape())._new())._defaultFontSize()));
return self}, function($ctx1) {$ctx1.fill(self,"testDefaultFontSize",{},smalltalk.TRCanvasTest)});},
messageSends: ["assert:", "=", "defaultFontSize", "new", "fontSize"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFixedShapes",
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
messageSends: ["from:extent:", "@", "new", "addShape:", "assert:", "isNotFixed", "setAsFixed", "deny:", "setAsNotFixed"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testFront",
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
messageSends: ["size:", "new", "addShape:", "assert:", "=", "with:with:with:", "shapes", "pushFront"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testInitialization",
fn: function () {
var self=this;
var circle;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
function $TRAbstractBoxShape(){return smalltalk.TRAbstractBoxShape||(typeof TRAbstractBoxShape=="undefined"?nil:TRAbstractBoxShape)}
return smalltalk.withContext(function($ctx1) { 
circle=_st($TREllipseShape())._new();
self._assert_(_st(_st(circle)._rectangle()).__eq(_st($TRAbstractBoxShape())._nullRectangle()));
return self}, function($ctx1) {$ctx1.fill(self,"testInitialization",{circle:circle},smalltalk.TRCanvasTest)});},
messageSends: ["new", "assert:", "=", "nullRectangle", "rectangle"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapes",
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
messageSends: ["new", "text:", "assert:", ">", "width", "encompassingRectangle", "=", "@", "center"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesAndColor",
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
messageSends: ["new", "color:", "blue", "assert:", "=", "color"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesAndIncludesPoint",
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
messageSends: ["new", "text:", "encompassingRectangle", "assert:", "includesPoint:", "topLeft", "-", "@", "bottomLeft", "topRight", "bottomRight"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLabelShapesHeight",
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
messageSends: ["new", "text:", "assert:", "=", "height"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLine",
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
messageSends: ["buildLineFrom:to:color:", "@", "blue", "assert:", "=", "from", "to", "translateBy:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionWithShapes",
fn: function () {
var self=this;
function $TRShape(){return smalltalk.TRShape||(typeof TRShape=="undefined"?nil:TRShape)}
return smalltalk.withContext(function($ctx1) { 
_st(_st($TRShape())._allSubclasses())._do_((function(c){
return smalltalk.withContext(function($ctx2) {
return self._assert_(_st(_st(_st(c)._new())._position()).__eq((0).__at((0))));
}, function($ctx2) {$ctx2.fillBlock({c:c},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionWithShapes",{},smalltalk.TRCanvasTest)});},
messageSends: ["do:", "assert:", "=", "@", "position", "new", "allSubclasses"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushAllBehindWithGroup",
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
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "with:with:", "pushAll:behindAll:", "with:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushBehind",
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
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "push:behind:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPushBehindWithGroup",
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
messageSends: ["new", "addShape:", "assert:", "=", "with:with:with:", "asArray", "shapes", "with:with:", "push:behindAll:", "indexOf:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemovingFixedElement",
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
messageSends: ["new", "buildRectangle:color:", "extent:", "@", "red", "setAsFixed", "assert:", "=", "numberOfFixedShapes", "numberOfShapes", "remove"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testRemovingLine",
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
messageSends: ["from:to:", "@", "new", "deny:", "isInACanvas", "addShape:", "assert:", "remove"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testResizing",
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
messageSends: ["when:do:", "extent:", "@", "assert:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape",
fn: function () {
var self=this;
var shape;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
shape=_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
self._assert_(_st(shape)._notNil());
return self}, function($ctx1) {$ctx1.fill(self,"testShape",{shape:shape},smalltalk.TRCanvasTest)});},
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "notNil"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeAndEvent",
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
messageSends: ["new", "when:do:", "deny:", "announce:", "assert:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapeAndSharedAnnouncer",
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
messageSends: ["new", "announcer:", "announcer", "when:do:", "+", "announce:", "assert:", "="]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapes",
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
_st(self["@canvas"])._buildRectangle_color_(_st((5).__at((5)))._extent_((20).__at((20))),_st($Color())._gray());
self._assert_(_st(_st(_st(self["@canvas"])._shapes())._size()).__eq((2)));
return self}, function($ctx1) {$ctx1.fill(self,"testShapes",{},smalltalk.TRCanvasTest)});},
messageSends: ["buildRectangle:color:", "extent:", "@", "gray", "assert:", "=", "size", "shapes"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShapingElement",
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
messageSends: ["buildCircleFrom:to:color:", "@", "red", "assert:", "=", "corner:", "rectangle", "translateBy:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShouldBeDrawn",
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
messageSends: ["assert:", "shouldBeDrawn", "from:to:", "@", "new", "deny:"]}),
smalltalk.TRCanvasTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testSizeAndLabels",
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
messageSends: ["new", "fontSize:", "position:", "@", "addShape:", "assert:", "~~", "font"]}),
smalltalk.TRCanvasTest);



smalltalk.addClass('TRConstraintTest', smalltalk.TRTest, ['element1', 'element2', 'view', 'canvas', 'shape1', 'shape2'], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
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
messageSends: ["setUp", "new", "size:", "addShape:"]}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickAbove",
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
messageSends: ["stick:above:", "assert:", "=", "@", "center", "translateBy:"]}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickBelow",
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
messageSends: ["stick:below:", "assert:", "=", "@", "center", "translateBy:"]}),
smalltalk.TRConstraintTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testStickToTheCenter",
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
messageSends: ["stick:onTheCenterOf:", "assert:", "=", "@", "center", "translateBy:"]}),
smalltalk.TRConstraintTest);



smalltalk.addClass('TRShapeTest', smalltalk.TRTest, [], 'Trachel-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "testPosition",
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
_st(box)._translateTo_((10).__at((20)));
self._assert_(_st(_st(box)._position()).__eq((10).__at((20))));
return self}, function($ctx1) {$ctx1.fill(self,"testPosition",{box:box},smalltalk.TRShapeTest)});},
messageSends: ["new", "translateTo:", "@", "assert:", "=", "position"]}),
smalltalk.TRShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionDefault",
fn: function () {
var self=this;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st($TRBoxShape())._new())._position()).__eq((0).__at((0))));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionDefault",{},smalltalk.TRShapeTest)});},
messageSends: ["assert:", "=", "@", "position", "new"]}),
smalltalk.TRShapeTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testPositionWithFloats",
fn: function () {
var self=this;
var box;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
box=_st($TRBoxShape())._new();
_st(box)._translateTo_((1.1234).__at((1.1234)));
self._assert_(_st(_st(box)._position()).__eq((1.1234).__at((1.1234))));
return self}, function($ctx1) {$ctx1.fill(self,"testPositionWithFloats",{box:box},smalltalk.TRShapeTest)});},
messageSends: ["new", "translateTo:", "@", "assert:", "=", "position"]}),
smalltalk.TRShapeTest);



