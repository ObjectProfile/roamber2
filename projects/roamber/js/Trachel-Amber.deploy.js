smalltalk.addPackage('Trachel-Amber');
smalltalk.addClass('TRCanvas', smalltalk.TRObject, ['svgCanvas', 'shapes', 'fixedShapes', 'extent', 'animations', 'morph', 'camera', 'announcer', 'color'], 'Trachel-Amber');
smalltalk.addMethod(
smalltalk.method({
selector: "addAnimation:",
fn: function (anAnimation) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@animations"])._add_(anAnimation);
_st(anAnimation)._addedIn_(self);
_st(anAnimation)._start();
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"addAnimation:",{anAnimation:anAnimation},smalltalk.TRCanvas)});},
messageSends: ["add:", "addedIn:", "start", "signalUpdate"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addFixedShape:",
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@fixedShapes"])._add_(shape);
_st(shape)._canvas_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addFixedShape:",{shape:shape},smalltalk.TRCanvas)});},
messageSends: ["add:", "canvas:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addMenu:callback:",
fn: function (aTitle, aBlock) {
var self=this;
var lbl,index;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $TRMouseClick(){return smalltalk.TRMouseClick||(typeof TRMouseClick=="undefined"?nil:TRMouseClick)}
function $TRMouseEnter(){return smalltalk.TRMouseEnter||(typeof TRMouseEnter=="undefined"?nil:TRMouseEnter)}
function $TRMouseLeave(){return smalltalk.TRMouseLeave||(typeof TRMouseLeave=="undefined"?nil:TRMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
index=_st(self["@fixedShapes"])._inject_into_((0),(function(s,e){
return smalltalk.withContext(function($ctx2) {
return _st(s)._max_(_st(_st(_st(_st(e)._encompassingRectangle())._topRight())._x()).__plus((10)));
}, function($ctx2) {$ctx2.fillBlock({s:s,e:e},$ctx1)})}));
$1=_st($TRLabelShape())._new();
_st($1)._text_(aTitle);
$2=_st($1)._leftPosition_(_st(index).__at((20)));
lbl=$2;
_st(lbl)._color_(_st($Color())._black());
_st(lbl)._when_do_($TRMouseClick(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st(aBlock)._value();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(lbl)._when_do_($TRMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(lbl)._color_(_st($Color())._blue());
return self._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
_st(lbl)._when_do_($TRMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
_st(lbl)._color_(_st($Color())._black());
return self._signalUpdate();
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
self._addFixedShape_(lbl);
return self}, function($ctx1) {$ctx1.fill(self,"addMenu:callback:",{aTitle:aTitle,aBlock:aBlock,lbl:lbl,index:index},smalltalk.TRCanvas)});},
messageSends: ["inject:into:", "max:", "+", "x", "topRight", "encompassingRectangle", "text:", "new", "leftPosition:", "@", "color:", "black", "when:do:", "value", "blue", "signalUpdate", "addFixedShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(shape)._addedIn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{shape:shape},smalltalk.TRCanvas)});},
messageSends: ["addedIn:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRCanvas)});},
messageSends: ["announce:", "announcer"]}),
smalltalk.TRCanvas);

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
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRCanvas)});},
messageSends: ["ifTrue:", "new", "isNil"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
fn: function (anAnnouncer) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@announcer"]=anAnnouncer;
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "athensCanvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"athensCanvas",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildArcAlphaAngle:betaAngle:innerRadius:externalRadius:",
fn: function (stAngle, ndAngle, iR, eR) {
var self=this;
var shape;
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRArcShape())._new();
_st(shape)._alphaAngle_betaAngle_innerRadius_externalRadius_(stAngle,ndAngle,iR,eR);
self._addShape_(shape);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildArcAlphaAngle:betaAngle:innerRadius:externalRadius:",{stAngle:stAngle,ndAngle:ndAngle,iR:iR,eR:eR,shape:shape},smalltalk.TRCanvas)});},
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "addShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildCircleFrom:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
var shape;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TREllipseShape())._new();
_st(shape)._from_to_color_(aPoint,anotherPoint,aColor);
self._addShape_(shape);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildCircleFrom:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor,shape:shape},smalltalk.TRCanvas)});},
messageSends: ["new", "from:to:color:", "addShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildLineFrom:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
var shape;
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRLineShape())._new();
_st(shape)._from_to_color_(aPoint,anotherPoint,aColor);
self._addShape_(shape);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildLineFrom:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor,shape:shape},smalltalk.TRCanvas)});},
messageSends: ["new", "from:to:color:", "addShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildMorph",
fn: function () {
var self=this;
function $TRMorph(){return smalltalk.TRMorph||(typeof TRMorph=="undefined"?nil:TRMorph)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st($TRMorph())._new();
_st($1)._canvas_(self);
$2=_st($1)._extent_(_st(self["@canvas"])._extent());
self["@morph"]=$2;
$3=self["@morph"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"buildMorph",{},smalltalk.TRCanvas)});},
messageSends: ["canvas:", "new", "extent:", "extent"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildRectangle:color:",
fn: function (aRectangle, aColor) {
var self=this;
var shape;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRBoxShape())._new();
_st(shape)._fromRectangle_color_(aRectangle,aColor);
self._addShape_(shape);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildRectangle:color:",{aRectangle:aRectangle,aColor:aColor,shape:shape},smalltalk.TRCanvas)});},
messageSends: ["new", "fromRectangle:color:", "addShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "camera",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@camera"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"camera",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRCanvas)});},
messageSends: ["signalUpdate"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (aPoint) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=aPoint;
self._announce_($TRResizeCanvasEvent());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.TRCanvas)});},
messageSends: ["announce:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "firstElementOf:",
fn: function (aCollection) {
var self=this;
var lastElement,lastIndex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
lastElement=_st(aCollection)._first();
lastIndex=_st(self["@shapes"])._indexOf_(lastElement);
_st(aCollection)._do_((function(e){
var v;
return smalltalk.withContext(function($ctx2) {
v=_st(self["@shapes"])._indexOf_(e);
v;
$1=_st(v).__lt(lastIndex);
if(smalltalk.assert($1)){
lastElement=e;
lastElement;
lastIndex=v;
return lastIndex;
};
}, function($ctx2) {$ctx2.fillBlock({e:e,v:v},$ctx1)})}));
$2=lastElement;
return $2;
}, function($ctx1) {$ctx1.fill(self,"firstElementOf:",{aCollection:aCollection,lastElement:lastElement,lastIndex:lastIndex},smalltalk.TRCanvas)});},
messageSends: ["first", "indexOf:", "do:", "ifTrue:", "<"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fixedShapes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fixedShapes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fixedShapes",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAnimation",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animations"])._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasAnimation",{},smalltalk.TRCanvas)});},
messageSends: ["notEmpty"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCamera(){return smalltalk.TRCamera||(typeof TRCamera=="undefined"?nil:TRCamera)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCanvas.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@extent"]=(500).__at((500));
self["@svgCanvas"]=self._paper();
self["@shapes"]=_st($OrderedCollection())._new();
self["@fixedShapes"]=_st($OrderedCollection())._new();
self["@animations"]=_st($OrderedCollection())._new();
self["@camera"]=_st($TRCamera())._forCanvas_(self);
self["@color"]=_st($Color())._lightGray();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCanvas)});},
messageSends: ["initialize", "@", "paper", "new", "forCanvas:", "lightGray"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixedShape:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedShapes"])._includes_(aShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixedShape:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["includes:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isMovableShape:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._includes_(aShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMovableShape:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["includes:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfAnimations",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animations"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfAnimations",{},smalltalk.TRCanvas)});},
messageSends: ["size"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfFixedShapes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedShapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfFixedShapes",{},smalltalk.TRCanvas)});},
messageSends: ["size"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfShapes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfShapes",{},smalltalk.TRCanvas)});},
messageSends: ["size"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowSized_((500).__at((500)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TRCanvas)});},
messageSends: ["openInWindowSized:", "@"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:",
fn: function (anExtentAsPoint) {
var self=this;
var window;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._buildMorph();
window=_st(self["@morph"])._openInWindow();
_st(window)._extent_(anExtentAsPoint);
$1=window;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:",{anExtentAsPoint:anExtentAsPoint,window:window},smalltalk.TRCanvas)});},
messageSends: ["buildMorph", "openInWindow", "extent:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:titled:",
fn: function (anExtentAsPoint, aTitle) {
var self=this;
var window;
return smalltalk.withContext(function($ctx1) { 
var $1;
window=self._openInWindowSized_(anExtentAsPoint);
_st(window)._setLabel_(aTitle);
$1=window;
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:titled:",{anExtentAsPoint:anExtentAsPoint,aTitle:aTitle,window:window},smalltalk.TRCanvas)});},
messageSends: ["openInWindowSized:", "setLabel:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openTitled:",
fn: function (aTitle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowSized_titled_((500).__at((500)),aTitle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openTitled:",{aTitle:aTitle},smalltalk.TRCanvas)});},
messageSends: ["openInWindowSized:titled:", "@"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
fn: function () {
var self=this;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RORaphaelCanvas())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.TRCanvas)});},
messageSends: ["canvas"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "playAnimations",
fn: function () {
var self=this;
var shouldClean;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
shouldClean=false;
_st(self["@animations"])._do_((function(animation){
return smalltalk.withContext(function($ctx2) {
_st(animation)._refresh();
$1=_st(animation)._hasCompleted();
if(smalltalk.assert($1)){
shouldClean=true;
return shouldClean;
};
}, function($ctx2) {$ctx2.fillBlock({animation:animation},$ctx1)})}));
$2=shouldClean;
if(smalltalk.assert($2)){
self["@animations"]=_st(self["@animations"])._reject_((function(animation){
return smalltalk.withContext(function($ctx2) {
return _st(animation)._hasCompleted();
}, function($ctx2) {$ctx2.fillBlock({animation:animation},$ctx1)})}));
self["@animations"];
};
return self}, function($ctx1) {$ctx1.fill(self,"playAnimations",{shouldClean:shouldClean},smalltalk.TRCanvas)});},
messageSends: ["do:", "refresh", "ifTrue:", "hasCompleted", "reject:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "privateAdd:",
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._add_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"privateAdd:",{shape:shape},smalltalk.TRCanvas)});},
messageSends: ["add:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "push:behind:",
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._add_before_(aShape,anotherShape);
return self}, function($ctx1) {$ctx1.fill(self,"push:behind:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRCanvas)});},
messageSends: ["remove:", "add:before:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "push:behindAll:",
fn: function (aTRBoxShape, aCollection) {
var self=this;
var firstElement;
return smalltalk.withContext(function($ctx1) { 
firstElement=self._firstElementOf_(aCollection);
self._push_behind_(aTRBoxShape,firstElement);
return self}, function($ctx1) {$ctx1.fill(self,"push:behindAll:",{aTRBoxShape:aTRBoxShape,aCollection:aCollection,firstElement:firstElement},smalltalk.TRCanvas)});},
messageSends: ["firstElementOf:", "push:behind:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushAll:behindAll:",
fn: function (elements1, elements2) {
var self=this;
var firstElement;
return smalltalk.withContext(function($ctx1) { 
firstElement=self._firstElementOf_(elements2);
_st(elements1)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._push_behind_(e,firstElement);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"pushAll:behindAll:",{elements1:elements1,elements2:elements2,firstElement:firstElement},smalltalk.TRCanvas)});},
messageSends: ["firstElementOf:", "do:", "push:behind:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBack:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._addFirst_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushBack:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["remove:", "addFirst:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushFront:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._addLast_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushFront:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["remove:", "addLast:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFixedShape:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fixedShapes"]=_st(self["@fixedShapes"])._copyWithout_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"removeFixedShape:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["copyWithout:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "removeShape:",
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_ifAbsent_(shape,(function(){
return smalltalk.withContext(function($ctx2) {
return self._removeFixedShape_(shape);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(shape)._canvas_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"removeShape:",{shape:shape},smalltalk.TRCanvas)});},
messageSends: ["remove:ifAbsent:", "removeFixedShape:", "canvas:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsFixed:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeShape_(aShape);
self._addFixedShape_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"setAsFixed:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["removeShape:", "addFixedShape:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeForPosition:",
fn: function (position) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
_st(self["@fixedShapes"])._reverseDo_((function(s){
return smalltalk.withContext(function($ctx2) {
$1=_st(s)._includesPoint_(position);
if(smalltalk.assert($1)){
$2=s;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
_st(self["@shapes"])._reverseDo_((function(s){
return smalltalk.withContext(function($ctx2) {
$3=_st(s)._includesPoint_(position);
if(smalltalk.assert($3)){
$4=s;
throw $early=[$4];
};
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
$5=self;
return $5;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shapeForPosition:",{position:position},smalltalk.TRCanvas)});},
messageSends: ["reverseDo:", "ifTrue:", "includesPoint:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeForPositionInPixels:",
fn: function (position) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
var $early={};
try {
_st(_st(self["@fixedShapes"])._reverse())._do_((function(s){
return smalltalk.withContext(function($ctx2) {
$1=_st(s)._includesPoint_(position);
if(smalltalk.assert($1)){
$2=s;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
_st(_st(self["@shapes"])._reverse())._do_((function(s){
return smalltalk.withContext(function($ctx2) {
$3=_st(s)._includesPoint_(_st(self._camera())._fromPixelToSpace_(position));
if(smalltalk.assert($3)){
$4=s;
throw $early=[$4];
};
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
$5=self;
return $5;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"shapeForPositionInPixels:",{position:position},smalltalk.TRCanvas)});},
messageSends: ["do:", "ifTrue:", "includesPoint:", "reverse", "fromPixelToSpace:", "camera"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapes",{},smalltalk.TRCanvas)});},
messageSends: ["asArray"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@morph"])._changed();
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TRCanvas)});},
messageSends: ["changed"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@morph"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=(0).__at((0));
} else {
$1=_st(self["@morph"])._topLeft();
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"topLeft",{},smalltalk.TRCanvas)});},
messageSends: ["ifNil:ifNotNil:", "@", "topLeft"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRCanvas)});},
messageSends: ["when:do:", "announcer"]}),
smalltalk.TRCanvas);



