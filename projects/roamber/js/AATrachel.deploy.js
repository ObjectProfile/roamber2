smalltalk.addPackage('AATrachel');
smalltalk.addClass('TRCamera', smalltalk.Object, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"focusOnCenter",{},smalltalk.TRCamera)});},
messageSends: []}),
smalltalk.TRCamera);



smalltalk.addClass('TRCanvas', smalltalk.Object, ['shapes', 'svgCanvas', 'announcer', 'camera'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._add_(aShape);
_st(aShape)._addedIn_(self);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["add:", "addedIn:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._add_(aShape);
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aShape:aShape},smalltalk.TRCanvas)});},
messageSends: ["add:"]}),
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
selector: "initialize",
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCamera(){return smalltalk.TRCamera||(typeof TRCamera=="undefined"?nil:TRCamera)}
return smalltalk.withContext(function($ctx1) { 
self["@svgCanvas"]=self._paper();
self["@shapes"]=_st($OrderedCollection())._new();
self["@camera"]=_st($TRCamera())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCanvas)});},
messageSends: ["paper", "new"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._do_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._drawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.TRCanvas)});},
messageSends: ["do:", "drawOn:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "paper",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
 var paper = Raphael("roassal-canvas", 640 , 480); return paper;;
return self}, function($ctx1) {$ctx1.fill(self,"paper",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "svgCanvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgCanvas",{},smalltalk.TRCanvas)});},
messageSends: []}),
smalltalk.TRCanvas);



smalltalk.addClass('TRExamples', smalltalk.Object, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "example1",
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
messageSends: ["new", "from:to:", "@", "color:", "red", "green", "blue", "add:", "open"]}),
smalltalk.TRExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "example2",
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
messageSends: ["new", "from:to:", "@", "color:", "red", "green", "blue", "add:", "open"]}),
smalltalk.TRExamples);

smalltalk.addMethod(
smalltalk.method({
selector: "example3",
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
messageSends: ["new", "to:do:", "from:to:", "@", "color:", "red", "translateTo:", "*", "add:", "open"]}),
smalltalk.TRExamples);



smalltalk.addClass('TRShape', smalltalk.Object, ['canvas', 'color', 'svgElement', 'borderColor', 'announcer', 'element', 'position'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRShape)});},
messageSends: []}),
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
selector: "borderColor",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aColor:aColor},smalltalk.TRShape)});},
messageSends: []}),
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
selector: "drawOn:",
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRShape)});},
messageSends: []}),
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
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anElement;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anElement:anElement},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._gray();
self["@position"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)});},
messageSends: ["gray", "@"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "resetPath",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"resetPath",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "strokePaint:",
fn: function (aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
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
selector: "update",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.TRShape)});},
messageSends: []}),
smalltalk.TRShape);



smalltalk.addClass('TRBoundedShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@from"]).__plus(self._extent());
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRBoundedShape)});},
messageSends: ["+", "extent"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._origin_corner_(self["@from"],self["@to"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRBoundedShape)});},
messageSends: ["origin:corner:"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__at(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.TRBoundedShape)});},
messageSends: ["@", "height", "width"]}),
smalltalk.TRBoundedShape);

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
center=_st(self["@from"]).__plus(_st(self._extent()).__slash((2)));
self["@from"]=_st(center).__minus(_st(anExtent).__slash((2)));
self["@to"]=_st(center).__plus(_st(anExtent).__slash((2)));
self._update();
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent,center:center},smalltalk.TRBoundedShape)});},
messageSends: ["ifTrue:", "=", "extent", "+", "/", "-", "update"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"from:",{aPoint:aPoint},smalltalk.TRBoundedShape)});},
messageSends: []}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (p1, p2) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_(p1);
self._to_(p2);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{p1:p1,p2:p2},smalltalk.TRBoundedShape)});},
messageSends: ["from:", "to:"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@to"]).__minus(self["@from"]))._y();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRBoundedShape)});},
messageSends: ["y", "-"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (newHeight) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@position"]).__minus((0).__at(_st(newHeight).__slash((2))));
self["@to"]=_st(self["@position"]).__plus((0).__at(_st(newHeight).__slash((2))));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{newHeight:newHeight},smalltalk.TRBoundedShape)});},
messageSends: ["-", "@", "/", "+"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBoundedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@from"]=(-5).__at((-5));
self["@to"]=(5).__at((5));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRBoundedShape)});},
messageSends: ["initialize", "@"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRBoundedShape)});},
messageSends: ["center"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"to:",{aPoint:aPoint},smalltalk.TRBoundedShape)});},
messageSends: []}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint) {
var self=this;
var e;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRBoundedShape.superclass.fn.prototype._translateTo_.apply(_st(self), [aPoint]);
e=_st(self._extent()).__slash((2));
self["@from"]=_st(self["@position"]).__minus(e);
self["@to"]=_st(self["@position"]).__plus(e);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint,e:e},smalltalk.TRBoundedShape)});},
messageSends: ["translateTo:", "/", "extent", "-", "+"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@to"]).__minus(self["@from"]))._x();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRBoundedShape)});},
messageSends: ["x", "-"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (newWidth) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=_st(self["@position"]).__minus(_st(_st(newWidth).__slash((2))).__at((0)));
self["@to"]=_st(self["@position"]).__plus(_st(_st(newWidth).__slash((2))).__at((0)));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{newWidth:newWidth},smalltalk.TRBoundedShape)});},
messageSends: ["-", "@", "/", "+"]}),
smalltalk.TRBoundedShape);



smalltalk.addClass('TRBoxShape', smalltalk.TRBoundedShape, [], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._rect_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRBoxShape)});},
messageSends: ["rect:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TRBoxShape);



smalltalk.addClass('TREllipseShape', smalltalk.TRBoundedShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._ellipse_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TREllipseShape)});},
messageSends: ["ellipse:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRCircleShape', smalltalk.TRShape, [], 'AATrachel');


smalltalk.addClass('TRLineShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._path_(_st(_st(_st(_st(_st(_st("M".__comma(_st(self["@from"])._x())).__comma(",")).__comma(_st(self["@from"])._y())).__comma("L")).__comma(_st(self["@to"])._x())).__comma(",")).__comma(_st(self["@to"])._y()));
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRLineShape)});},
messageSends: ["path:", ",", "y", "x", "attr:with:", "asHTMLRGBA"]}),
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
self._from_(aPoint);
self._to_(anotherPoint);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:",{aPoint:aPoint,anotherPoint:anotherPoint},smalltalk.TRLineShape)});},
messageSends: ["from:", "to:"]}),
smalltalk.TRLineShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
fn: function (aPoint, anotherPoint, aColor) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TRLineShape)});},
messageSends: ["from:to:", "color:"]}),
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



smalltalk.addClass('TRNoShape', smalltalk.TRShape, [], 'AATrachel');
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


