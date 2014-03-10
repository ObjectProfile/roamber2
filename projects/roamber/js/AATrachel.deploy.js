smalltalk.addPackage('AATrachel');
smalltalk.addClass('TRCamera', smalltalk.Object, ['position', 'canvas', 'scale'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aTrachelCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@canvas"]=aTrachelCanvas;
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera)})},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._encompassingRectangleOf_(_st(self["@canvas"])._shapes());
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRCamera)})},
messageSends: ["encompassingRectangleOf:", "shapes"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangleOf:",
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
messageSends: ["encompassingRectangle", "first", "do:", "merge:"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "focusOnCenter",
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
messageSends: ["ifTrue:", "=", "numberOfShapes", "drawShapes", "translateTo:", "center", "encompassingRectangle"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRCamera.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@position"]=(0).__at((0));
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCamera)})},
messageSends: ["initialize", "@"]}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@position"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRCamera)})},
messageSends: []}),
smalltalk.TRCamera);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (newPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=newPosition;
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{newPosition:newPosition},smalltalk.TRCamera)})},
messageSends: []}),
smalltalk.TRCamera);


smalltalk.addMethod(
smalltalk.method({
selector: "forCanvas:",
fn: function (aTrachelCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(smalltalk.TRCamera.klass.superclass.fn.prototype._new.apply(_st(self), []))._canvas_(aTrachelCanvas);
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCanvas:",{aTrachelCanvas:aTrachelCanvas},smalltalk.TRCamera.klass)})},
messageSends: ["canvas:", "new"]}),
smalltalk.TRCamera.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Instance of this class have to be created with #forCanvas:");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.TRCamera.klass)})},
messageSends: ["error:"]}),
smalltalk.TRCamera.klass);


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
selector: "drawShapes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shapes"])._do_((function(s){
return smalltalk.withContext(function($ctx2) {
return _st(s)._drawOrRedrawOn_(self["@svgCanvas"]);
}, function($ctx2) {$ctx2.fillBlock({s:s},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"drawShapes",{},smalltalk.TRCanvas)})},
messageSends: ["do:", "drawOrRedrawOn:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCamera(){return smalltalk.TRCamera||(typeof TRCamera=="undefined"?nil:TRCamera)}
return smalltalk.withContext(function($ctx1) { 
self["@svgCanvas"]=self._paper();
self["@shapes"]=_st($OrderedCollection())._new();
self["@camera"]=_st($TRCamera())._forCanvas_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRCanvas)})},
messageSends: ["paper", "new", "forCanvas:"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfShapes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfShapes",{},smalltalk.TRCanvas)})},
messageSends: ["size"]}),
smalltalk.TRCanvas);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
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
messageSends: ["@", "height", "width", "-", "position", "/", "do:", "applyTransformAfter:", ",", "y", "x"]}),
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
selector: "shapes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapes"])._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"shapes",{},smalltalk.TRCanvas)})},
messageSends: ["asArray"]}),
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



smalltalk.addClass('TRShape', smalltalk.Object, ['canvas', 'color', 'svgElement', 'strokePaint', 'announcer', 'element', 'position', 'rectangle'], 'AATrachel');
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
selector: "applyTransformAfter:",
fn: function (firstTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@svgElement"])._transform_(_st(firstTransform).__comma(self._transforms()));
return self}, function($ctx1) {$ctx1.fill(self,"applyTransformAfter:",{firstTransform:firstTransform},smalltalk.TRShape)})},
messageSends: ["transform:", ",", "transforms"]}),
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
selector: "drawOrRedrawOn:",
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
messageSends: ["ifNotNil:", "remove", "drawOn:"]}),
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
selector: "encompassingRectangle",
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
messageSends: ["ifNotNil:", "drawOrRedrawOn:", "svgCanvas", "getBBox", "left:right:top:bottom:", "x", "x2", "y", "y2"]}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (anExtent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{anExtent:anExtent},smalltalk.TRShape)})},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self["@color"]=_st($Color())._gray();
self["@position"]=(0).__at((0));
self["@transform"]="";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRShape)})},
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
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strokePaint"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"strokePaint:",{aColor:aColor},smalltalk.TRShape)})},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "svgElement",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@svgElement"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"svgElement",{},smalltalk.TRShape)})},
messageSends: []}),
smalltalk.TRShape);

smalltalk.addMethod(
smalltalk.method({
selector: "transforms",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "";
}, function($ctx1) {$ctx1.fill(self,"transforms",{},smalltalk.TRShape)})},
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



smalltalk.addClass('TRArcShape', smalltalk.TRShape, ['alphaAngle', 'betaAngle', 'innerRadius', 'externalRadius', 'center', 'origin', 'height', 'width', 'topLeft', 'bottomRight'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle:betaAngle:innerRadius:externalRadius:",
fn: function (stAngle,ndAngle,iR,eR){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alphaAngle"]=stAngle;
self["@betaAngle"]=ndAngle;
self["@innerRadius"]=iR;
self["@externalRadius"]=eR;
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngle:betaAngle:innerRadius:externalRadius:",{stAngle:stAngle,ndAngle:ndAngle,iR:iR,eR:eR},smalltalk.TRArcShape)})},
messageSends: []}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["degreesToRadians", "value", "@", "*", "sin", "cos", "+", ",", "y", "x", "show:", "path:", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TRArcShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "@"]}),
smalltalk.TRArcShape);



smalltalk.addClass('TRBezierShape', smalltalk.TRShape, ['listOfPoints'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["first", ",", "y", "x", "do:", "at:", "/", "+", "to:", "-", "size", "path:", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@listOfPoints"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"points",{},smalltalk.TRBezierShape)})},
messageSends: ["copy"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:",
fn: function (points){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=points;
return self}, function($ctx1) {$ctx1.fill(self,"points:",{points:points},smalltalk.TRBezierShape)})},
messageSends: []}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "points:color:",
fn: function (aListOfPoints,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._points_(aListOfPoints);
self._strokePaint_(aColor);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"points:color:",{aListOfPoints:aListOfPoints,aColor:aColor},smalltalk.TRBezierShape)})},
messageSends: ["points:", "strokePaint:", "color:"]}),
smalltalk.TRBezierShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@listOfPoints"]=_st(self["@listOfPoints"])._collect_((function(p){
return smalltalk.withContext(function($ctx2) {
return _st(p).__plus(aPoint);
}, function($ctx2) {$ctx2.fillBlock({p:p},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.TRBezierShape)})},
messageSends: ["collect:", "+"]}),
smalltalk.TRBezierShape);



smalltalk.addClass('TRBoundedShape', smalltalk.TRShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@from"]).__plus(_st(self._extent()).__slash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.TRBoundedShape)})},
messageSends: ["+", "/", "extent"]}),
smalltalk.TRBoundedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawStrokeIfNecessary",
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
messageSends: ["ifTrue:ifFalse:", "attr:with:", "asHTMLRGBA", "isNil"]}),
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
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._rect_y_width_height_(_st(self["@from"])._x(),_st(self["@from"])._y(),self._width(),self._height());
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
self._drawStrokeIfNecessary();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRBoxShape)})},
messageSends: ["rect:y:width:height:", "x", "y", "width", "height", "attr:with:", "asHTMLRGBA", "drawStrokeIfNecessary"]}),
smalltalk.TRBoxShape);



smalltalk.addClass('TREllipseShape', smalltalk.TRBoundedShape, ['from', 'to'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._ellipse_y_hradius_vradius_(_st(self._center())._x(),_st(self._center())._y(),_st(self._width()).__slash((2)),_st(self._height()).__slash((2)));
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
self._drawStrokeIfNecessary();
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TREllipseShape)})},
messageSends: ["ellipse:y:hradius:vradius:", "x", "center", "y", "/", "width", "height", "attr:with:", "asHTMLRGBA", "drawStrokeIfNecessary"]}),
smalltalk.TREllipseShape);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:color:",
fn: function (aPoint,anotherPoint,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._from_to_(aPoint,anotherPoint);
self._color_(aColor);
return self}, function($ctx1) {$ctx1.fill(self,"from:to:color:",{aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.TREllipseShape)})},
messageSends: ["from:to:", "color:"]}),
smalltalk.TREllipseShape);



smalltalk.addClass('TRComposedShape', smalltalk.TRShape, ['shape1', 'shape2'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "addCallback:",
fn: function (aCallback){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._addCallback_(aCallback);
_st(self["@shape2"])._addCallback_(aCallback);
return self}, function($ctx1) {$ctx1.fill(self,"addCallback:",{aCallback:aCallback},smalltalk.TRComposedShape)})},
messageSends: ["addCallback:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aCanvas)._addShape_(self["@shape1"]);
_st(aCanvas)._addShape_(self["@shape2"]);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aCanvas:aCanvas},smalltalk.TRComposedShape)})},
messageSends: ["addShape:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announce_(anEvent);
_st(self["@shape2"])._announce_(anEvent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent},smalltalk.TRComposedShape)})},
messageSends: ["announce:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("should not be called");
return self}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.TRComposedShape)})},
messageSends: ["error:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer:",
fn: function (anAnnouncer){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._announcer_(anAnnouncer);
_st(self["@shape2"])._announcer_(anAnnouncer);
return self}, function($ctx1) {$ctx1.fill(self,"announcer:",{anAnnouncer:anAnnouncer},smalltalk.TRComposedShape)})},
messageSends: ["announcer:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "applyTransformAfter:",
fn: function (firstTransform){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._applyTransformAfter_(firstTransform);
_st(self["@shape2"])._applyTransformAfter_(firstTransform);
return self}, function($ctx1) {$ctx1.fill(self,"applyTransformAfter:",{firstTransform:firstTransform},smalltalk.TRComposedShape)})},
messageSends: ["applyTransformAfter:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas:",
fn: function (aSurface){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._canvas_(aSurface);
_st(self["@shape2"])._canvas_(aSurface);
return self}, function($ctx1) {$ctx1.fill(self,"canvas:",{aSurface:aSurface},smalltalk.TRComposedShape)})},
messageSends: ["canvas:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
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
messageSends: ["max:", "extent", "encompassingRectangle", "extent:", "drawOrRedrawOn:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shape1"])._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.TRComposedShape)})},
messageSends: ["element"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._element_(anObject);
_st(self["@shape2"])._element_(anObject);
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.TRComposedShape)})},
messageSends: ["element:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Rectangle())._merging_(_st($Array())._with_with_(_st(self["@shape1"])._encompassingRectangle(),_st(self["@shape2"])._encompassingRectangle()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.TRComposedShape)})},
messageSends: ["merging:", "with:with:", "encompassingRectangle"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRComposedShape)})},
messageSends: ["height", "encompassingRectangle"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "includesPoint:",
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
messageSends: ["or:", "includesPoint:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.TRComposedShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape1"]=_st($TRNoShape())._instance();
self["@shape2"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.TRComposedShape)})},
messageSends: ["initialize", "instance"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@shape1"])._position()).__plus(_st(self["@shape2"])._position())).__slash((2));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRComposedShape)})},
messageSends: ["/", "+", "position"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._remove();
_st(self["@shape2"])._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.TRComposedShape)})},
messageSends: ["remove"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape1",{},smalltalk.TRComposedShape)})},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1:",
fn: function (aTRShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape1"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape1:",{aTRShape:aTRShape},smalltalk.TRComposedShape)})},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape2",{},smalltalk.TRComposedShape)})},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2:",
fn: function (aTRShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape2"]=aTRShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape2:",{aTRShape:aTRShape},smalltalk.TRComposedShape)})},
messageSends: []}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._translateTo_(aPoint);
_st(self["@shape2"])._translateTo_(aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPoint:aPoint},smalltalk.TRComposedShape)})},
messageSends: ["translateTo:"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (event,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@shape1"])._announcer())._when_do_(event,aBlock);
_st(_st(self["@shape2"])._announcer())._when_do_(event,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,aBlock:aBlock},smalltalk.TRComposedShape)})},
messageSends: ["when:do:", "announcer"]}),
smalltalk.TRComposedShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRComposedShape)})},
messageSends: ["width", "encompassingRectangle"]}),
smalltalk.TRComposedShape);


smalltalk.addMethod(
smalltalk.method({
selector: "with:with:",
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
messageSends: ["shape1:", "new", "shape2:", "yourself"]}),
smalltalk.TRComposedShape.klass);


smalltalk.addClass('TRLabelShape', smalltalk.TRShape, ['text', 'fontSize'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._defaultFontSize();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape)})},
messageSends: ["defaultFontSize", "class"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._text_y_text_(_st(self["@position"])._x(),_st(self["@position"])._y(),self["@text"]);
_st(self["@svgElement"])._attr_with_("font-family","Verdana");
_st(self["@svgElement"])._attr_with_("font-size",self["@fontSize"]);
_st(self["@svgElement"])._attr_with_("fill",_st(self["@color"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRLabelShape)})},
messageSends: ["text:y:text:", "x", "y", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fontSize:",
fn: function (aSize){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fontSize"]=aSize;
return self}, function($ctx1) {$ctx1.fill(self,"fontSize:",{aSize:aSize},smalltalk.TRLabelShape)})},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.TRLabelShape)})},
messageSends: ["height", "encompassingRectangle"]}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "position:",
fn: function (aPosition){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@position"]=aPosition;
return self}, function($ctx1) {$ctx1.fill(self,"position:",{aPosition:aPosition},smalltalk.TRLabelShape)})},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@text"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.TRLabelShape)})},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aText){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aText;
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aText:aText},smalltalk.TRLabelShape)})},
messageSends: []}),
smalltalk.TRLabelShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.TRLabelShape)})},
messageSends: ["width", "encompassingRectangle"]}),
smalltalk.TRLabelShape);


smalltalk.addMethod(
smalltalk.method({
selector: "defaultFontSize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (12);
}, function($ctx1) {$ctx1.fill(self,"defaultFontSize",{},smalltalk.TRLabelShape.klass)})},
messageSends: []}),
smalltalk.TRLabelShape.klass);


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
selector: "position",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__at((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.TRNoShape)})},
messageSends: ["@"]}),
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


smalltalk.addClass('TRSVGPath', smalltalk.TRShape, ['borderWidth', 'fillColor', 'scale', 'pathStr'], 'AATrachel');
smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (aWidth){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=aWidth;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{aWidth:aWidth},smalltalk.TRSVGPath)})},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "drawOn:",
fn: function (svgCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@svgElement"]=_st(svgCanvas)._path_(self["@pathStr"]);
_st(self["@svgElement"])._attr_with_("stroke",_st(self["@strokePaint"])._asHTMLRGBA());
_st(self["@svgElement"])._attr_with_("stroke-width",self["@borderWidth"]);
_st(self["@svgElement"])._attr_with_("fill",_st(self["@fillColor"])._asHTMLRGBA());
return self}, function($ctx1) {$ctx1.fill(self,"drawOn:",{svgCanvas:svgCanvas},smalltalk.TRSVGPath)})},
messageSends: ["path:", "attr:with:", "asHTMLRGBA"]}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
fn: function (aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fillColor"]=aColor;
return self}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},smalltalk.TRSVGPath)})},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aPathString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@pathStr"]=aPathString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aPathString:aPathString},smalltalk.TRSVGPath)})},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNumber:aNumber},smalltalk.TRSVGPath)})},
messageSends: []}),
smalltalk.TRSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "transforms",
fn: function (){
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
var $1;
center=_st(_st(self["@canvas"])._camera())._position();
$1=_st(_st(_st(_st(_st(_st("s".__comma(self["@scale"])).__comma(",")).__comma(self["@scale"])).__comma(",")).__comma(_st(center)._x())).__comma(",")).__comma(_st(center)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"transforms",{center:center},smalltalk.TRSVGPath)})},
messageSends: ["position", "camera", ",", "y", "x"]}),
smalltalk.TRSVGPath);



