smalltalk.addPackage('Trachel-Amber');
smalltalk.addClass('TRCanvas', smalltalk.TRObject, ['svgCanvas', 'shapes', 'fixedShapes', 'extent', 'animations', 'morph', 'camera', 'announcer', 'color'], 'Trachel-Amber');
smalltalk.TRCanvas.comment="A TRCanvas is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09animations:\x09\x09<Object>\x0a\x09announcer:\x09\x09<Object>\x0a\x09camera:\x09\x09<Object>\x0a\x09canvas:\x09\x09<Object>\x0a\x09color:\x09\x09<Object>\x0a\x09extent:\x09\x09<Object>\x0a\x09fixedShapes:\x09\x09<Object>\x0a\x09morph:\x09\x09<Object>\x0a\x09shapes:\x09\x09<Object>\x0a\x0aanimations\x0a\x09- xxxxx\x0a\x0aannouncer\x0a\x09- xxxxx\x0a\x0acamera\x0a\x09- xxxxx\x0a\x0acanvas\x0a\x09- xxxxx\x0a\x0acolor\x0a\x09- xxxxx\x0a\x0aextent\x0a\x09- xxxxx\x0a\x0afixedShapes\x0a\x09- xxxxx\x0a\x0amorph\x0a\x09- xxxxx\x0a\x0ashapes\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addAnimation:",
category: 'animations',
fn: function (anAnimation) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@animations"])._add_(anAnimation);
_st(anAnimation)._addedIn_(self);
_st(anAnimation)._start();
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"addAnimation:",{anAnimation:anAnimation},smalltalk.TRCanvas)});},
args: ["anAnimation"],
source: "addAnimation: anAnimation\x0a\x09animations add: anAnimation.\x0a\x09anAnimation addedIn: self.\x0a\x09anAnimation start.\x0a\x09self signalUpdate",
messageSends: ["add:", "addedIn:", "start", "signalUpdate"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addFixedShape:",
category: 'building',
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@fixedShapes"])._add_(shape);
_st(shape)._canvas_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addFixedShape:",{shape:shape},smalltalk.TRCanvas)});},
args: ["shape"],
source: "addFixedShape: shape\x0a\x09fixedShapes add: shape.\x0a\x09shape canvas: self",
messageSends: ["add:", "canvas:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addMenu:callback:",
category: 'menu',
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
args: ["aTitle", "aBlock"],
source: "addMenu: aTitle callback: aBlock\x0a\x09| lbl index |\x0a\x09index := fixedShapes inject: 0 into: [ :s :e | s max: (e encompassingRectangle topRight x + 10) ].\x0a\x09lbl := TRLabelShape new text: aTitle; leftPosition: index @ 20.\x0a\x09lbl color: Color black.\x0a\x09lbl when: TRMouseClick do: [ :event | aBlock value ].\x0a\x09lbl when: TRMouseEnter do: [ :event | lbl color: Color blue. self signalUpdate ].\x0a\x09lbl when: TRMouseLeave do: [ :event | lbl color: Color black. self signalUpdate ].\x0a\x09self addFixedShape: lbl",
messageSends: ["inject:into:", "max:", "+", "x", "topRight", "encompassingRectangle", "text:", "new", "leftPosition:", "@", "color:", "black", "when:do:", "value", "blue", "signalUpdate", "addFixedShape:"],
referencedClasses: ["TRLabelShape", "Color", "TRMouseClick", "TRMouseEnter", "TRMouseLeave"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
category: 'building',
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(shape)._addedIn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{shape:shape},smalltalk.TRCanvas)});},
args: ["shape"],
source: "addShape: shape\x0a\x09shape addedIn: self",
messageSends: ["addedIn:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
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
category: 'events',
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
selector: "athensCanvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"athensCanvas",{},smalltalk.TRCanvas)});},
args: [],
source: "athensCanvas\x0a\x09^ canvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildArcAlphaAngle:betaAngle:innerRadius:externalRadius:",
category: 'building',
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
args: ["stAngle", "ndAngle", "iR", "eR"],
source: "buildArcAlphaAngle: stAngle betaAngle: ndAngle innerRadius: iR externalRadius: eR\x0a\x09| shape |\x0a\x09shape := TRArcShape new.\x0a\x09shape alphaAngle: stAngle betaAngle: ndAngle innerRadius: iR externalRadius: eR.\x0a\x09self addShape: shape.\x0a\x09^ shape",
messageSends: ["new", "alphaAngle:betaAngle:innerRadius:externalRadius:", "addShape:"],
referencedClasses: ["TRArcShape"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildCircleFrom:to:color:",
category: 'building',
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
args: ["aPoint", "anotherPoint", "aColor"],
source: "buildCircleFrom: aPoint to: anotherPoint color: aColor\x0a\x09| shape |\x0a\x09shape := TREllipseShape new.\x0a\x09shape from: aPoint to: anotherPoint color: aColor.\x0a\x09self addShape: shape.\x0a\x09^ shape",
messageSends: ["new", "from:to:color:", "addShape:"],
referencedClasses: ["TREllipseShape"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildLineFrom:to:color:",
category: 'building',
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
args: ["aPoint", "anotherPoint", "aColor"],
source: "buildLineFrom: aPoint to: anotherPoint color: aColor\x0a\x09|  shape |\x0a\x09shape := TRLineShape new.\x0a\x09shape from: aPoint to: anotherPoint color: aColor.\x0a\x09self addShape: shape.\x0a\x09^ shape",
messageSends: ["new", "from:to:color:", "addShape:"],
referencedClasses: ["TRLineShape"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildMorph",
category: 'instance creation',
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
args: [],
source: "buildMorph\x0a\x09morph := TRMorph new\x0a\x09\x09canvas: self;\x0a\x09\x09extent: canvas extent.\x0a\x09^ morph",
messageSends: ["canvas:", "new", "extent:", "extent"],
referencedClasses: ["TRMorph"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "buildRectangle:color:",
category: 'building',
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
args: ["aRectangle", "aColor"],
source: "buildRectangle: aRectangle color: aColor\x0a\x09| shape |\x0a\x09shape := TRBoxShape new.\x0a\x09shape fromRectangle: aRectangle color: aColor.\x0a\x09self addShape: shape.\x0a\x09^ shape",
messageSends: ["new", "fromRectangle:color:", "addShape:"],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "camera",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@camera"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"camera",{},smalltalk.TRCanvas)});},
args: [],
source: "camera\x0a\x09^ camera",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

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
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.TRCanvas)});},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aColor;
self._signalUpdate();
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aColor:aColor},smalltalk.TRCanvas)});},
args: ["aColor"],
source: "color: aColor\x0a\x09color := aColor.\x0a\x09self signalUpdate",
messageSends: ["signalUpdate"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@extent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRCanvas)});},
args: [],
source: "extent\x0a\x09\x22size of the canvas\x22\x0a\x09^ extent",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
function $TRResizeCanvasEvent(){return smalltalk.TRResizeCanvasEvent||(typeof TRResizeCanvasEvent=="undefined"?nil:TRResizeCanvasEvent)}
return smalltalk.withContext(function($ctx1) { 
self["@extent"]=aPoint;
self._announce_($TRResizeCanvasEvent());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{aPoint:aPoint},smalltalk.TRCanvas)});},
args: ["aPoint"],
source: "extent: aPoint\x0a\x09\x22Set of the size of the canvas. Useful, for example, when the window is resized\x22\x0a\x09extent := aPoint.\x0a\x09self announce: TRResizeCanvasEvent",
messageSends: ["announce:"],
referencedClasses: ["TRResizeCanvasEvent"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "firstElementOf:",
category: 'action',
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
args: ["aCollection"],
source: "firstElementOf: aCollection \x0a\x09\x22Return the first element of aCollection that will be displayed. This method assume that all elements contained in aCollection belong to shapes. It also assumes that aCollection is not empty\x22\x0a\x09| lastElement lastIndex |\x0a\x09lastElement := aCollection first.\x0a\x09lastIndex := shapes indexOf: lastElement.\x0a\x09aCollection do: [ :e |\x0a\x09\x09| v |\x0a\x09\x09v := shapes indexOf: e.\x0a\x09\x09(v < lastIndex) ifTrue: [ \x0a\x09\x09\x09lastElement := e.\x0a\x09\x09\x09lastIndex := v ]\x0a\x09\x09 ].\x0a\x09^ lastElement",
messageSends: ["first", "indexOf:", "do:", "ifTrue:", "<"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "fixedShapes",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@fixedShapes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"fixedShapes",{},smalltalk.TRCanvas)});},
args: [],
source: "fixedShapes\x0a\x09^ fixedShapes",
messageSends: [],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAnimation",
category: 'animations',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animations"])._notEmpty();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasAnimation",{},smalltalk.TRCanvas)});},
args: [],
source: "hasAnimation\x0a\x09\x22True is at least one animation is running\x22\x0a\x09^ animations notEmpty",
messageSends: ["notEmpty"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09extent := 500 @ 500.\x0a\x09svgCanvas := self paper.\x0a\x09shapes := OrderedCollection new.\x0a\x09fixedShapes := OrderedCollection new.\x0a\x09animations := OrderedCollection new.\x0a\x09camera := TRCamera forCanvas: self.\x0a\x09color := Color lightGray.",
messageSends: ["initialize", "@", "paper", "new", "forCanvas:", "lightGray"],
referencedClasses: ["OrderedCollection", "TRCamera", "Color"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixedShape:",
category: 'testing',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedShapes"])._includes_(aShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixedShape:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "isFixedShape: aShape\x0a\x09^ fixedShapes includes: aShape",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "isMovableShape:",
category: 'testing',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._includes_(aShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMovableShape:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "isMovableShape: aShape\x0a\x09^ shapes includes: aShape",
messageSends: ["includes:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfAnimations",
category: 'animations',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@animations"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfAnimations",{},smalltalk.TRCanvas)});},
args: [],
source: "numberOfAnimations\x0a\x09\x22Return the number of animations contained in the canvas\x22\x0a\x09^ animations size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfFixedShapes",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedShapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfFixedShapes",{},smalltalk.TRCanvas)});},
args: [],
source: "numberOfFixedShapes\x0a\x09\x22Return the number of displayed shapes\x22\x0a\x09^ fixedShapes size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfShapes",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfShapes",{},smalltalk.TRCanvas)});},
args: [],
source: "numberOfShapes\x0a\x09\x22Return the number of displayed nonfixed shapes\x22\x0a\x09^ shapes size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowSized_((500).__at((500)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TRCanvas)});},
args: [],
source: "open\x0a\x09^ self openInWindowSized: 500 @ 500",
messageSends: ["openInWindowSized:", "@"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:",
category: 'instance creation',
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
args: ["anExtentAsPoint"],
source: "openInWindowSized: anExtentAsPoint\x0a\x09| window |\x0a\x09self buildMorph.\x0a\x09window := morph openInWindow.\x0a\x09window extent: anExtentAsPoint.\x0a\x09^ window",
messageSends: ["buildMorph", "openInWindow", "extent:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:titled:",
category: 'instance creation',
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
args: ["anExtentAsPoint", "aTitle"],
source: "openInWindowSized: anExtentAsPoint titled: aTitle\x0a\x09| window |\x0a\x09window := self openInWindowSized: anExtentAsPoint.\x0a\x09window setLabel: aTitle.\x0a\x09^ window",
messageSends: ["openInWindowSized:", "setLabel:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "openTitled:",
category: 'instance creation',
fn: function (aTitle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openInWindowSized_titled_((500).__at((500)),aTitle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openTitled:",{aTitle:aTitle},smalltalk.TRCanvas)});},
args: ["aTitle"],
source: "openTitled: aTitle\x0a\x09^ self openInWindowSized: 500 @ 500 titled: aTitle",
messageSends: ["openInWindowSized:titled:", "@"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
category: 'initialization',
fn: function () {
var self=this;
function $RORaphaelCanvas(){return smalltalk.RORaphaelCanvas||(typeof RORaphaelCanvas=="undefined"?nil:RORaphaelCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RORaphaelCanvas())._canvas();
return $1;
}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.TRCanvas)});},
args: [],
source: "paper\x0a\x09^ RORaphaelCanvas canvas",
messageSends: ["canvas"],
referencedClasses: ["RORaphaelCanvas"]
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "playAnimations",
category: 'animations',
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
args: [],
source: "playAnimations\x0a\x09| shouldClean |\x0a\x09shouldClean := false.\x0a\x09animations do: [ :animation | \x0a\x09\x09animation refresh. \x0a\x09\x09animation hasCompleted ifTrue: [ shouldClean := true ] ].\x0a\x09\x0a\x09shouldClean ifTrue: [ \x0a\x09\x09animations := animations reject: [ :animation | animation hasCompleted ] ].",
messageSends: ["do:", "refresh", "ifTrue:", "hasCompleted", "reject:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "privateAdd:",
category: 'building',
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._add_(shape);
return self}, function($ctx1) {$ctx1.fill(self,"privateAdd:",{shape:shape},smalltalk.TRCanvas)});},
args: ["shape"],
source: "privateAdd: shape\x0a\x09shapes add: shape",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "push:behind:",
category: 'actions',
fn: function (aShape, anotherShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._add_before_(aShape,anotherShape);
return self}, function($ctx1) {$ctx1.fill(self,"push:behind:",{aShape:aShape,anotherShape:anotherShape},smalltalk.TRCanvas)});},
args: ["aShape", "anotherShape"],
source: "push: aShape behind: anotherShape\x0a\x09shapes remove: aShape.\x0a\x09shapes add: aShape before: anotherShape",
messageSends: ["remove:", "add:before:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "push:behindAll:",
category: 'action',
fn: function (aTRBoxShape, aCollection) {
var self=this;
var firstElement;
return smalltalk.withContext(function($ctx1) { 
firstElement=self._firstElementOf_(aCollection);
self._push_behind_(aTRBoxShape,firstElement);
return self}, function($ctx1) {$ctx1.fill(self,"push:behindAll:",{aTRBoxShape:aTRBoxShape,aCollection:aCollection,firstElement:firstElement},smalltalk.TRCanvas)});},
args: ["aTRBoxShape", "aCollection"],
source: "push: aTRBoxShape behindAll: aCollection \x0a\x09\x22Move the first argument, which is supposely be contained in the shapes variable, before all elements contained in aCollection\x22\x0a\x09| firstElement |\x0a\x09firstElement := self firstElementOf: aCollection.\x0a\x09self push: aTRBoxShape behind: firstElement",
messageSends: ["firstElementOf:", "push:behind:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushAll:behindAll:",
category: 'action',
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
args: ["elements1", "elements2"],
source: "pushAll: elements1 behindAll: elements2 \x0a\x09\x22Move all elements in elements1, which are supposely contained in the shapes variable, before all elements contained in elements2\x22\x0a\x09| firstElement |\x0a\x09firstElement := self firstElementOf: elements2.\x0a\x09elements1 do: [ :e |\x0a\x09\x09self push: e behind: firstElement ]",
messageSends: ["firstElementOf:", "do:", "push:behind:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushBack:",
category: 'actions',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._addFirst_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushBack:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "pushBack: aShape\x0a\x09shapes remove: aShape.\x0a\x09shapes addFirst: aShape",
messageSends: ["remove:", "addFirst:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "pushFront:",
category: 'actions',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_(aShape);
_st(self["@shapes"])._addLast_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"pushFront:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "pushFront: aShape\x0a\x09shapes remove: aShape.\x0a\x09shapes addLast: aShape",
messageSends: ["remove:", "addLast:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "removeFixedShape:",
category: 'actions',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fixedShapes"]=_st(self["@fixedShapes"])._copyWithout_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"removeFixedShape:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "removeFixedShape: aShape\x0a\x09fixedShapes := fixedShapes copyWithout: aShape",
messageSends: ["copyWithout:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "removeShape:",
category: 'building',
fn: function (shape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._remove_ifAbsent_(shape,(function(){
return smalltalk.withContext(function($ctx2) {
return self._removeFixedShape_(shape);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(shape)._canvas_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"removeShape:",{shape:shape},smalltalk.TRCanvas)});},
args: ["shape"],
source: "removeShape: shape\x0a\x09shapes remove: shape ifAbsent: [ self removeFixedShape: shape ].\x0a\x09shape canvas: nil",
messageSends: ["remove:ifAbsent:", "removeFixedShape:", "canvas:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "setAsFixed:",
category: 'actions',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._removeShape_(aShape);
self._addFixedShape_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"setAsFixed:",{aShape:aShape},smalltalk.TRCanvas)});},
args: ["aShape"],
source: "setAsFixed: aShape\x0a\x0a\x09self removeShape: aShape.\x0a\x09self addFixedShape: aShape.",
messageSends: ["removeShape:", "addFixedShape:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeForPosition:",
category: 'accessing',
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
args: ["position"],
source: "shapeForPosition: position\x0a\x0a\x0a\x09fixedShapes reverseDo: [ :s | \x0a\x09\x09(s includesPoint: position) ifTrue: [ ^ s ] ].\x0a\x0a\x09shapes reverseDo: [ :s | \x0a\x09\x09(s includesPoint: position) ifTrue: [ ^ s ] ].\x0a\x09^ self",
messageSends: ["reverseDo:", "ifTrue:", "includesPoint:"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeForPositionInPixels:",
category: 'accessing',
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
args: ["position"],
source: "shapeForPositionInPixels: position\x0a\x09\x22position is in pixel, it corresponds to the physical location in the window.\x0a\x09e.g., 0 @ 0 is top left of the window\x22\x0a\x09fixedShapes reverse do: [ :s | \x0a\x09\x09(s includesPoint: position) ifTrue: [ ^ s ] ].\x0a\x0a\x09shapes reverse do: [ :s | \x0a\x09\x09(s includesPoint: (self camera fromPixelToSpace: position)) ifTrue: [ ^ s ] ].\x0a\x09^ self",
messageSends: ["do:", "ifTrue:", "includesPoint:", "reverse", "fromPixelToSpace:", "camera"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "shapes",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapes",{},smalltalk.TRCanvas)});},
args: [],
source: "shapes\x0a\x09\x22Return the list of shapes\x22\x0a\x09^ shapes asArray",
messageSends: ["asArray"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "signalUpdate",
category: 'updating',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@morph"])._changed();
return self}, function($ctx1) {$ctx1.fill(self,"signalUpdate",{},smalltalk.TRCanvas)});},
args: [],
source: "signalUpdate\x0a\x09morph changed",
messageSends: ["changed"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "topLeft",
category: 'accessing',
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
args: [],
source: "topLeft\x0a\x0a\x09^ morph\x0a\x09\x09ifNil:[ 0@0 ]\x0a\x09\x09ifNotNil: [ morph topLeft ]",
messageSends: ["ifNil:ifNotNil:", "@", "topLeft"],
referencedClasses: []
}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'events',
fn: function (event, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRCanvas)});},
args: ["event", "aBlock"],
source: "when: event do: aBlock\x0a\x09self announcer when: event do: aBlock",
messageSends: ["when:do:", "announcer"],
referencedClasses: []
}),
smalltalk.TRCanvas);



