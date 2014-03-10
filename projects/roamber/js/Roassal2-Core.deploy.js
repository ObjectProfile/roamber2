smalltalk.addPackage('Roassal2-Core');
smalltalk.addClass('RTGroup', smalltalk.Array, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e).__plus(aShape);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"+",{aShape:aShape},smalltalk.RTGroup)});},
messageSends: ["do:", "+"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
fn: function (interaction) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e).__at(interaction);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"@",{interaction:interaction},smalltalk.RTGroup)});},
messageSends: ["do:", "@"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (view) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{view:view},smalltalk.RTGroup)});},
messageSends: ["do:", "add:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._detect_ifNone_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model()).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFromModel:",{anObject:anObject},smalltalk.RTGroup)});},
messageSends: ["detect:ifNone:", "=", "model"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
function $Rectangle(){return smalltalk.Rectangle||(typeof Rectangle=="undefined"?nil:Rectangle)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ifEmpty_ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st((0).__at((0)))._corner_((0).__at((0)));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return _st($Rectangle())._merging_(self._collect_("encompassingRectangle"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.RTGroup)});},
messageSends: ["ifEmpty:ifNotEmpty:", "corner:", "@", "merging:", "collect:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.RTGroup)});},
messageSends: ["extent", "encompassingRectangle"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTGroup)});},
messageSends: ["height", "encompassingRectangle"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._center();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.RTGroup)});},
messageSends: ["center", "encompassingRectangle"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_("remove");
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.RTGroup)});},
messageSends: ["do:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (trCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._renderOn_(trCanvas);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{trCanvas:trCanvas},smalltalk.RTGroup)});},
messageSends: ["do:", "renderOn:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.RTGroup)});},
messageSends: ["do:", "translateBy:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (aPosition) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
center=_st(self._encompassingRectangle())._center();
self._translateBy_(_st(aPosition).__minus(center));
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPosition:aPosition,center:center},smalltalk.RTGroup)});},
messageSends: ["center", "encompassingRectangle", "translateBy:", "-"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTopLeftTo:",
fn: function (aPosition) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
center=_st(self._encompassingRectangle())._topLeft();
self._translateBy_(_st(aPosition).__minus(center));
return self}, function($ctx1) {$ctx1.fill(self,"translateTopLeftTo:",{aPosition:aPosition,center:center},smalltalk.RTGroup)});},
messageSends: ["topLeft", "encompassingRectangle", "translateBy:", "-"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (evt, callback) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._when_do_(evt,callback);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{evt:evt,callback:callback},smalltalk.RTGroup)});},
messageSends: ["do:", "when:do:"]}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTGroup)});},
messageSends: ["width", "encompassingRectangle"]}),
smalltalk.RTGroup);



smalltalk.addClass('RTObject', smalltalk.Object, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTObject)});},
messageSends: []}),
smalltalk.RTObject);



smalltalk.addClass('RTAnnounceableObject', smalltalk.RTObject, ['announcer'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "@",
fn: function (anInteractionClassOrInstance) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addInteraction_(anInteractionClassOrInstance);
return self}, function($ctx1) {$ctx1.fill(self,"@",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.RTAnnounceableObject)});},
messageSends: ["addInteraction:"]}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
fn: function (anInteractionClassOrInstance) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anInteractionClassOrInstance)._initializeElement_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.RTAnnounceableObject)});},
messageSends: ["initializeElement:"]}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (evt) {
var self=this;
var t;
return smalltalk.withContext(function($ctx1) { 
t=_st(evt)._asAnnouncement();
_st(t)._shape_(self._trachelShape());
_st(self._announcer())._announce_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{evt:evt,t:t},smalltalk.RTAnnounceableObject)});},
messageSends: ["asAnnouncement", "shape:", "trachelShape", "announce:", "announcer"]}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
fn: function () {
var self=this;
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@announcer"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@announcer"]=_st($Announcer())._new();
self["@announcer"];
} else {
$1;
};
$2=self["@announcer"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"announcer",{},smalltalk.RTAnnounceableObject)});},
messageSends: ["ifNil:", "new"]}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
fn: function (evt, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(evt,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{evt:evt,aBlock:aBlock},smalltalk.RTAnnounceableObject)});},
messageSends: ["when:do:", "announcer"]}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (evt, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(evt,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{evt:evt,aBlock:aBlock},smalltalk.RTAnnounceableObject)});},
messageSends: ["when:do:", "announcer"]}),
smalltalk.RTAnnounceableObject);



smalltalk.addClass('RTShapedObject', smalltalk.RTAnnounceableObject, ['shape', 'trachelShape', 'attributes', 'view', 'model'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (aRTShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addShape_(_st(aRTShape)._instance());
return self}, function($ctx1) {$ctx1.fill(self,"+",{aRTShape:aRTShape},smalltalk.RTShapedObject)});},
messageSends: ["addShape:", "instance"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
fn: function (aRTShape) {
var self=this;
function $RTCompositeShape(){return smalltalk.RTCompositeShape||(typeof RTCompositeShape=="undefined"?nil:RTCompositeShape)}
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape"])._class()).__eq_eq($RTNoShape());
if(smalltalk.assert($1)){
self["@shape"]=_st(aRTShape)._instance();
self["@shape"];
} else {
self["@shape"]=_st($RTCompositeShape())._with_with_(self["@shape"],aRTShape);
self["@shape"];
};
self["@trachelShape"]=_st(self["@shape"])._trachelShapeFor_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addShape:",{aRTShape:aRTShape},smalltalk.RTShapedObject)});},
messageSends: ["ifTrue:ifFalse:", "instance", "with:with:", "==", "class", "trachelShapeFor:"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTShapedObject)});},
messageSends: ["subclassReponsibility"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:",{aKey:aKey},smalltalk.RTShapedObject)});},
messageSends: ["at:", "attributes"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:ifAbsent:",
fn: function (aKey, aBlockClosure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_ifAbsent_(aKey,aBlockClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:ifAbsent:",{aKey:aKey,aBlockClosure:aBlockClosure},smalltalk.RTShapedObject)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:ifAbsentPut:",
fn: function (aKey, aBlockClosure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_ifAbsentPut_(aKey,aBlockClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:ifAbsentPut:",{aKey:aKey,aBlockClosure:aBlockClosure},smalltalk.RTShapedObject)});},
messageSends: ["at:ifAbsentPut:", "attributes"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:put:",
fn: function (aKey, value) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_put_(aKey,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:put:",{aKey:aKey,value:value},smalltalk.RTShapedObject)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributes",
fn: function () {
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@attributes"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@attributes"]=_st($Dictionary())._new();
$1=self["@attributes"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributes",{},smalltalk.RTShapedObject)});},
messageSends: ["ifNil:", "new"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAttribute:",
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@attributes"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@attributes"])._includesKey_(aKey);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasAttribute:",{aKey:aKey},smalltalk.RTShapedObject)});},
messageSends: ["and:", "includesKey:", "notNil"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAttributes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@attributes"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@attributes"])._notEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasAttributes",{},smalltalk.RTShapedObject)});},
messageSends: ["and:", "notEmpty", "notNil"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShapedObject.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape"]=_st($RTNoShape())._new();
self["@trachelShape"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShapedObject)});},
messageSends: ["initialize", "new", "instance"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
fn: function (trachelCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@trachelShape"])._isNil();
if(smalltalk.assert($1)){
self._error_("Cannot add an element without a shape. Add a shape to myself, using + or addShape:");
$2=self;
return $2;
};
_st(trachelCanvas)._addShape_(self["@trachelShape"]);
_st(self["@trachelShape"])._announcer_(self._announcer());
_st(self["@trachelShape"])._element_(self);
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{trachelCanvas:trachelCanvas},smalltalk.RTShapedObject)});},
messageSends: ["ifTrue:", "error:", "isNil", "addShape:", "announcer:", "announcer", "element:"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "testCaseAnnounce:",
fn: function (evt) {
var self=this;
var evtInstance;
return smalltalk.withContext(function($ctx1) { 
evtInstance=_st(evt)._shape_(self._trachelShape());
self._announce_(evtInstance);
return self}, function($ctx1) {$ctx1.fill(self,"testCaseAnnounce:",{evt:evt,evtInstance:evtInstance},smalltalk.RTShapedObject)});},
messageSends: ["shape:", "trachelShape", "announce:"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@trachelShape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@shape"])._updateFor_(self);
$1=self["@trachelShape"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self["@trachelShape"])._resetPath();
};
return self}, function($ctx1) {$ctx1.fill(self,"update",{},smalltalk.RTShapedObject)});},
messageSends: ["updateFor:", "ifNotNil:", "resetPath"]}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aRoassalView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aRoassalView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aRoassalView:aRoassalView},smalltalk.RTShapedObject)});},
messageSends: []}),
smalltalk.RTShapedObject);



smalltalk.addClass('RTEdge', smalltalk.RTShapedObject, ['from', 'to'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
_st(self["@view"])._addEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTEdge)});},
messageSends: ["addEdge:"]}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@from"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.RTEdge)});},
messageSends: []}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=anElement;
_st(anElement)._addConnectedEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.RTEdge)});},
messageSends: ["addConnectedEdge:"]}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBehindItsExtremities",
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self._trachelShape())._pushBehindAll_(_st($Array())._with_with_(_st(self._from())._trachelShape(),_st(self._to())._trachelShape()));
return self}, function($ctx1) {$ctx1.fill(self,"moveBehindItsExtremities",{},smalltalk.RTEdge)});},
messageSends: ["pushBehindAll:", "with:with:", "trachelShape", "from", "to"]}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(self["@to"])._connectedEdges())._includes_(self);
if(smalltalk.assert($1)){
_st(_st(self["@to"])._connectedEdges())._remove_(self);
};
$2=_st(_st(self["@from"])._connectedEdges())._includes_(self);
if(smalltalk.assert($2)){
_st(_st(self["@from"])._connectedEdges())._remove_(self);
};
$3=_st(self["@view"])._isNil();
if(! smalltalk.assert($3)){
_st(self["@view"])._removeEdge_(self);
self["@view"]=nil;
self["@view"];
};
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.RTEdge)});},
messageSends: ["ifTrue:", "remove:", "connectedEdges", "includes:", "ifFalse:", "removeEdge:", "isNil"]}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@to"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.RTEdge)});},
messageSends: []}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=anElement;
_st(anElement)._addConnectedEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.RTEdge)});},
messageSends: ["addConnectedEdge:"]}),
smalltalk.RTEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:inView:",
fn: function (associations, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromAssociations_using_inView_(associations,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:inView:",{associations:associations,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromAssociations:using:inView:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:",
fn: function (associations, aLineShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(associations,"key","value",aLineShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:",{associations:associations,aLineShape:aLineShape},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromElements:from:to:using:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:inView:",
fn: function (associations, aLineShape, view) {
var self=this;
var edges,associationsOfElements;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
associationsOfElements=_st(associations)._collect_((function(assoc){
return smalltalk.withContext(function($ctx2) {
return _st(_st(view)._elementFromModel_(_st(assoc)._key())).__minus_gt(_st(view)._elementFromModel_(_st(assoc)._value()));
}, function($ctx2) {$ctx2.fillBlock({assoc:assoc},$ctx1)})}));
$1=_st(associationsOfElements)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
edges=_st($OrderedCollection())._new();
_st(associationsOfElements)._do_((function(associationOfTwoElements){
var edge;
return smalltalk.withContext(function($ctx2) {
edge=_st($RTEdge())._from_to_(_st(associationOfTwoElements)._key(),_st(associationOfTwoElements)._value());
edge;
_st(edge).__plus(aLineShape);
return _st(edges)._add_(edge);
}, function($ctx2) {$ctx2.fillBlock({associationOfTwoElements:associationOfTwoElements,edge:edge},$ctx1)})}));
_st(view)._addAll_(edges);
$3=edges;
return $3;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:inView:",{associations:associations,aLineShape:aLineShape,view:view,edges:edges,associationsOfElements:associationsOfElements},smalltalk.RTEdge.klass)});},
messageSends: ["collect:", "->", "elementFromModel:", "value", "key", "ifTrue:", "isEmpty", "new", "do:", "from:to:", "+", "add:", "addAll:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:",
fn: function (elements, fromBlock, toBlock) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,$RTLine());
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromElements:from:to:using:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:in:",
fn: function (elements, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_in_(elements,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:in:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromElements:from:to:using:in:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:inView:",
fn: function (elements, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_inView_(elements,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:inView:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromElements:from:to:using:inView:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:",
fn: function (elements, fromBlock, toBlock, aLineShape) {
var self=this;
var edges,container,fromElement,toElement,elementsWithModels;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
edges=_st($OrderedCollection())._new();
elementsWithModels=_st(elements)._select_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model())._notNil();
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(elementsWithModels)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
container=_st(element)._parent();
container;
fromElement=_st(container)._elementFromModel_(_st(fromBlock)._rtValue_(_st(element)._model()));
fromElement;
toElement=_st(container)._elementFromModel_(_st(toBlock)._rtValue_(_st(element)._model()));
toElement;
$3=_st(_st(fromElement)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(toElement)._notNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($3)){
var edge;
edge=_st($RTEdge())._from_to_(fromElement,toElement);
edge;
_st(edge).__plus(aLineShape);
_st(edges)._add_(edge);
return _st(container)._add_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
$4=edges;
return $4;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:using:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,edges:edges,container:container,fromElement:fromElement,toElement:toElement,elementsWithModels:elementsWithModels},smalltalk.RTEdge.klass)});},
messageSends: ["ifTrue:", "isEmpty", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "and:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:inView:",
fn: function (elements, fromBlock, toBlock, aLineShape, view) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(view)._addAll_(self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,aLineShape));
return self}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:using:inView:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["addAll:", "buildEdgesFromElements:from:to:using:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:toAll:using:",
fn: function (elements, fromBlock, toBlock, aLineShape) {
var self=this;
var edges,container,fromElement,toElements,elementsWithModels;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
edges=_st($OrderedCollection())._new();
elementsWithModels=_st(elements)._select_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model())._notNil();
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
_st(elementsWithModels)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
container=_st(element)._parent();
container;
fromElement=_st(container)._elementFromModel_(_st(fromBlock)._rtValue_(_st(element)._model()));
fromElement;
toElements=_st($OrderedCollection())._new();
toElements;
_st(_st(toBlock)._rtValue_(_st(element)._model()))._do_((function(model){
var v;
return smalltalk.withContext(function($ctx3) {
v=_st(container)._elementFromModel_(model);
v;
$3=_st(v)._notNil();
if(smalltalk.assert($3)){
return _st(toElements)._add_(v);
};
}, function($ctx3) {$ctx3.fillBlock({model:model,v:v},$ctx2)})}));
$4=_st(_st(fromElement)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(toElements)._notEmpty();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($4)){
return _st(toElements)._do_((function(toElement){
var edge;
return smalltalk.withContext(function($ctx3) {
edge=_st($RTEdge())._from_to_(fromElement,toElement);
edge;
_st(edge).__plus(aLineShape);
_st(edges)._add_(edge);
return _st(container)._add_(edge);
}, function($ctx3) {$ctx3.fillBlock({toElement:toElement,edge:edge},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
$5=edges;
return $5;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:toAll:using:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,edges:edges,container:container,fromElement:fromElement,toElements:toElements,elementsWithModels:elementsWithModels},smalltalk.RTEdge.klass)});},
messageSends: ["ifTrue:", "isEmpty", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "rtValue:", "add:", "from:to:", "+", "and:", "notEmpty"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:inView:",
fn: function (objects, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_(objects,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:inView:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromObjects:from:to:using:inView:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:inView:scope:",
fn: function (objects, fromBlock, toBlock, view, aGroup) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_scope_(objects,fromBlock,toBlock,$RTLine(),view,aGroup);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:inView:scope:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,view:view,aGroup:aGroup},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromObjects:from:to:using:inView:scope:"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:using:inView:",
fn: function (objects, fromBlock, toBlock, aLineShape, view) {
var self=this;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_scope_(objects,fromBlock,toBlock,aLineShape,view,_st($RTGroup())._withAll_(_st(view)._elements()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:using:inView:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,view:view},smalltalk.RTEdge.klass)});},
messageSends: ["buildEdgesFromObjects:from:to:using:inView:scope:", "withAll:", "elements"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:using:inView:scope:",
fn: function (objects, fromBlock, toBlock, aLineShape, view, aGroup) {
var self=this;
var edges,fromElement,toElement;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(objects)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
edges=_st($RTGroup())._new();
_st(objects)._do_((function(object){
return smalltalk.withContext(function($ctx2) {
fromElement=_st(aGroup)._elementFromModel_(_st(fromBlock)._rtValue_(object));
fromElement;
toElement=_st(aGroup)._elementFromModel_(_st(toBlock)._rtValue_(object));
toElement;
$3=_st(_st(fromElement)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(toElement)._notNil();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
if(smalltalk.assert($3)){
var edge;
edge=_st($RTEdge())._from_to_(fromElement,toElement);
edge;
_st(edge).__plus(aLineShape);
_st(edges)._add_(edge);
return _st(view)._add_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1)})}));
$4=edges;
return $4;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:using:inView:scope:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,view:view,aGroup:aGroup,edges:edges,fromElement:fromElement,toElement:toElement},smalltalk.RTEdge.klass)});},
messageSends: ["ifTrue:", "isEmpty", "new", "do:", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "and:", "notNil"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:toAll:using:inView:scope:",
fn: function (objects, fromBlock, toAllBlock, aLineShape, view, aGroup) {
var self=this;
var edges,fromElement,toElement;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(objects)._isEmpty();
if(smalltalk.assert($1)){
$2=[];
return $2;
};
edges=_st($RTGroup())._new();
_st(objects)._do_((function(object){
return smalltalk.withContext(function($ctx2) {
fromElement=_st(aGroup)._elementFromModel_(_st(fromBlock)._rtValue_(object));
fromElement;
return _st(_st(toAllBlock)._rtValue_(object))._do_((function(toObject){
return smalltalk.withContext(function($ctx3) {
toElement=_st(aGroup)._elementFromModel_(toObject);
toElement;
$3=_st(_st(fromElement)._notNil())._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(toElement)._notNil();
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($3)){
$4=_st(fromElement).__tild_tild(toElement);
if(smalltalk.assert($4)){
var edge;
edge=_st($RTEdge())._from_to_(fromElement,toElement);
edge;
_st(edge).__plus(aLineShape);
_st(edges)._add_(edge);
return _st(view)._add_(edge);
};
};
}, function($ctx3) {$ctx3.fillBlock({toObject:toObject},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({object:object},$ctx1)})}));
$5=edges;
return $5;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:toAll:using:inView:scope:",{objects:objects,fromBlock:fromBlock,toAllBlock:toAllBlock,aLineShape:aLineShape,view:view,aGroup:aGroup,edges:edges,fromElement:fromElement,toElement:toElement},smalltalk.RTEdge.klass)});},
messageSends: ["ifTrue:", "isEmpty", "new", "do:", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "~~", "and:", "notNil"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
fn: function (fromEl, toEl) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._from_(fromEl);
_st($2)._to_(toEl);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"from:to:",{fromEl:fromEl,toEl:toEl},smalltalk.RTEdge.klass)});},
messageSends: ["from:", "new", "to:", "yourself"]}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:from:to:",
fn: function (aModel, fromElement, toElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._on_(aModel);
_st($2)._from_to_(fromElement,toElement);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:from:to:",{aModel:aModel,fromElement:fromElement,toElement:toElement},smalltalk.RTEdge.klass)});},
messageSends: ["from:to:", "on:", "yourself"]}),
smalltalk.RTEdge.klass);


smalltalk.addClass('RTElement', smalltalk.RTShapedObject, ['position', 'connectedEdges'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "addConnectedEdge:",
fn: function (anEdge){
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anEdge)._class()).__eq_eq($RTEdge());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._assert();
_st(self._connectedEdges())._add_(anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"addConnectedEdge:",{anEdge:anEdge},smalltalk.RTElement)})},
messageSends: ["assert", "==", "class", "add:", "connectedEdges"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
_st(self["@view"])._addElement_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTElement)});},
messageSends: ["addElement:"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "connectedEdges",
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@connectedEdges"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@connectedEdges"]=_st($OrderedCollection())._new();
self["@connectedEdges"];
} else {
$1;
};
$2=self["@connectedEdges"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"connectedEdges",{},smalltalk.RTElement)});},
messageSends: ["ifNil:", "new"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._encompassingRectangle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.RTElement)});},
messageSends: ["encompassingRectangle"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.RTElement)});},
messageSends: ["extent", "encompassingRectangle"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTElement)});},
messageSends: ["height"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "incomingEdges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@connectedEdges"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$3=_st(self._connectedEdges())._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._to()).__eq_eq(self);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return $3;
}, function($ctx1) {$ctx1.fill(self,"incomingEdges",{},smalltalk.RTElement)});},
messageSends: ["ifNil:", "select:", "==", "to", "connectedEdges"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTElement.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTElement)});},
messageSends: ["initialize"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnectedTo:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@connectedEdges"];
if(($receiver = $1) == nil || $receiver == undefined){
return false;
} else {
$1;
};
$2=_st(self["@connectedEdges"])._anySatisfy_((function(edge){
return smalltalk.withContext(function($ctx2) {
return _st(edge).__eq_eq(anEdge);
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
return $2;
}, function($ctx1) {$ctx1.fill(self,"isConnectedTo:",{anEdge:anEdge},smalltalk.RTElement)});},
messageSends: ["ifNil:", "anySatisfy:", "=="]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "outgoingEdges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@connectedEdges"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=[];
return $2;
} else {
$1;
};
$3=_st(self._connectedEdges())._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._from()).__eq_eq(self);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return $3;
}, function($ctx1) {$ctx1.fill(self,"outgoingEdges",{},smalltalk.RTElement)});},
messageSends: ["ifNil:", "select:", "==", "from", "connectedEdges"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.RTElement)});},
messageSends: ["position"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
if(($receiver = $1) == nil || $receiver == undefined){
self._error_("cannot remove an element that is not part of a view");
} else {
$1;
};
_st(self["@view"])._removeElement_(self);
self["@view"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.RTElement)});},
messageSends: ["ifNil:", "error:", "removeElement:"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
fn: function (delta) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateTo_(_st(self._position()).__plus(delta));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.RTElement)});},
messageSends: ["translateTo:", "+", "position"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
fn: function (newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@trachelShape"])._translateTo_(newPosition);
_st(self._connectedEdges())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {
return _st(edge)._update();
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
_st(self["@trachelShape"])._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{newPosition:newPosition},smalltalk.RTElement)});},
messageSends: ["translateTo:", "do:", "update", "connectedEdges", "resetPath"]}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTElement)});},
messageSends: ["width"]}),
smalltalk.RTElement);


smalltalk.addMethod(
smalltalk.method({
selector: "forCollection:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aCollection)._collect_((function(v){
return smalltalk.withContext(function($ctx2) {
return self._on_(v);
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})})))._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"forCollection:",{aCollection:aCollection},smalltalk.RTElement.klass)});},
messageSends: ["asArray", "collect:", "on:"]}),
smalltalk.RTElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(anObject);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:",{anObject:anObject},smalltalk.RTElement.klass)});},
messageSends: ["model:", "new", "yourself"]}),
smalltalk.RTElement.klass);


smalltalk.addClass('RTView', smalltalk.RTAnnounceableObject, ['elements', 'edges', 'animations', 'trCanvas'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
fn: function (anElementOrAnEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElementOrAnEdge)._addedIn_(self);
_st(anElementOrAnEdge)._renderOn_(self["@trCanvas"]);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElementOrAnEdge:anElementOrAnEdge},smalltalk.RTView)});},
messageSends: ["addedIn:", "renderOn:"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
fn: function (someElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(someElements)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return self._add_(el);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{someElements:someElements},smalltalk.RTView)});},
messageSends: ["do:", "add:"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAnimation:",
fn: function (animation) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@trCanvas"])._addAnimation_(animation);
return self}, function($ctx1) {$ctx1.fill(self,"addAnimation:",{animation:animation},smalltalk.RTView)});},
messageSends: ["addAnimation:"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addEdge:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@edges"])._add_(anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"addEdge:",{anEdge:anEdge},smalltalk.RTView)});},
messageSends: ["add:"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anElement:anElement},smalltalk.RTView)});},
messageSends: ["add:"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addMenu:callback:",
fn: function (aTitle, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._canvas())._addMenu_callback_(aTitle,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"addMenu:callback:",{aTitle:aTitle,aBlock:aBlock},smalltalk.RTView)});},
messageSends: ["addMenu:callback:", "canvas"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@trCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.RTView)});},
messageSends: []}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@edges"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.RTView)});},
messageSends: ["copy"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._detect_ifNone_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model()).__eq(anObject);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}),(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementFromModel:",{anObject:anObject},smalltalk.RTView)});},
messageSends: ["detect:ifNone:", "=", "model"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.RTView)});},
messageSends: ["copy"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $TRCanvas(){return smalltalk.TRCanvas||(typeof TRCanvas=="undefined"?nil:TRCanvas)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTView.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@elements"]=_st($OrderedCollection())._new();
self["@animations"]=_st($OrderedCollection())._new();
self["@edges"]=_st($OrderedCollection())._new();
self["@trCanvas"]=_st($TRCanvas())._new();
self["@announcer"]=_st(self["@trCanvas"])._announcer();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTView)});},
messageSends: ["initialize", "new", "announcer"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfEdges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@edges"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfEdges",{},smalltalk.RTView)});},
messageSends: ["size"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfElements",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.RTView)});},
messageSends: ["size"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.RTView)});},
messageSends: ["open", "setUpCanvas"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:",
fn: function (anExtentAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._openInWindowSized_(anExtentAsPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:",{anExtentAsPoint:anExtentAsPoint},smalltalk.RTView)});},
messageSends: ["openInWindowSized:", "setUpCanvas"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:titled:",
fn: function (anExtentAsPoint, aTitle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._openInWindowSized_titled_(anExtentAsPoint,aTitle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:titled:",{anExtentAsPoint:anExtentAsPoint,aTitle:aTitle},smalltalk.RTView)});},
messageSends: ["openInWindowSized:titled:", "setUpCanvas"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openWithMenu",
fn: function () {
var self=this;
function $RTZoomInMove(){return smalltalk.RTZoomInMove||(typeof RTZoomInMove=="undefined"?nil:RTZoomInMove)}
function $RTZoomOutMove(){return smalltalk.RTZoomOutMove||(typeof RTZoomOutMove=="undefined"?nil:RTZoomOutMove)}
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self._canvas())._addMenu_callback_("In",(function(){
return smalltalk.withContext(function($ctx2) {
return _st($RTZoomInMove())._on_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self._canvas())._addMenu_callback_("Out",(function(){
return smalltalk.withContext(function($ctx2) {
return _st($RTZoomOutMove())._on_(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(self._setUpCanvas())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"openWithMenu",{},smalltalk.RTView)});},
messageSends: ["addMenu:callback:", "on:", "canvas", "open", "setUpCanvas"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeEdge:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@edges"])._remove_ifAbsent_(anEdge,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(anEdge)._trachelShape())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeEdge:",{anEdge:anEdge},smalltalk.RTView)});},
messageSends: ["remove:ifAbsent:", "remove", "trachelShape"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anElement,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(anElement)._trachelShape())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anElement:anElement},smalltalk.RTView)});},
messageSends: ["remove:ifAbsent:", "remove", "trachelShape"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpCanvas",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@trCanvas"])._camera())._focusOnCenter();
$1=self["@trCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"setUpCanvas",{},smalltalk.RTView)});},
messageSends: ["focusOnCenter", "camera"]}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
fn: function () {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRNoShape())._instance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{},smalltalk.RTView)});},
messageSends: ["instance"]}),
smalltalk.RTView);



smalltalk.addClass('RTAttachPoint', smalltalk.RTObject, [], 'Roassal2-Core');


smalltalk.addClass('RTCenteredAttachPoint', smalltalk.RTAttachPoint, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._to())._position())._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.RTCenteredAttachPoint)})},
messageSends: ["asIntegerPoint", "position", "to"]}),
smalltalk.RTCenteredAttachPoint);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(anEdge)._from())._position())._asIntegerPoint();
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.RTCenteredAttachPoint)})},
messageSends: ["asIntegerPoint", "position", "from"]}),
smalltalk.RTCenteredAttachPoint);



smalltalk.addClass('RTShape', smalltalk.RTObject, ['color'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "+",
fn: function (anotherShape) {
var self=this;
function $RTCompositeShape(){return smalltalk.RTCompositeShape||(typeof RTCompositeShape=="undefined"?nil:RTCompositeShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RTCompositeShape())._with_with_(self,_st(anotherShape)._instance());
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{anotherShape:anotherShape},smalltalk.RTShape)});},
messageSends: ["with:with:", "instance"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@color"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.RTShape)});},
messageSends: []}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._colorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTShape)});},
messageSends: ["colorElement:", "rtValue:", "model"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorElement:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"colorElement:",{aBlock:aBlock},smalltalk.RTShape)});},
messageSends: []}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@color"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorFor:",{anElement:anElement},smalltalk.RTShape)});},
messageSends: ["rtValue:"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._veryVeryLightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RTShape)});},
messageSends: ["veryVeryLightGray"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($RTElement())._new();
_st($2)._addShape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.RTShape)});},
messageSends: ["addShape:", "new", "yourself"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (aModel) {
var self=this;
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=_st($RTElement())._new();
_st($2)._model_(aModel);
_st($2)._addShape_(self);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{aModel:aModel},smalltalk.RTShape)});},
messageSends: ["model:", "new", "addShape:", "yourself"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
fn: function (models) {
var self=this;
var group;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
group=_st($RTGroup())._new();
_st(models)._do_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(group)._add_(self._elementOn_(m));
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
$1=group;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{models:models,group:group},smalltalk.RTShape)});},
messageSends: ["new", "do:", "add:", "elementOn:"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._color();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColor",{},smalltalk.RTShape)});},
messageSends: ["color"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
fn: function (arg) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._color_(arg);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColor:",{arg:arg},smalltalk.RTShape)});},
messageSends: ["color:"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColorElement:",
fn: function (arg) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._colorElement_(arg);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColorElement:",{arg:arg},smalltalk.RTShape)});},
messageSends: ["colorElement:"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=self._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShape)});},
messageSends: ["initialize", "defaultColor"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.RTShape)});},
messageSends: []}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTShape)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anElement) {
var self=this;
var trachelShape;
return smalltalk.withContext(function($ctx1) { 
var $1;
trachelShape=_st(self._trachelShapeClass())._new();
self._updateFor_trachelShape_(anElement,trachelShape);
$1=trachelShape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anElement:anElement,trachelShape:trachelShape},smalltalk.RTShape)});},
messageSends: ["new", "trachelShapeClass", "updateFor:trachelShape:"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:",
fn: function (edgeOrElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateFor_trachelShape_(edgeOrElement,_st(edgeOrElement)._trachelShape());
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:",{edgeOrElement:edgeOrElement},smalltalk.RTShape)});},
messageSends: ["updateFor:trachelShape:", "trachelShape"]}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (edgeOrElement, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{edgeOrElement:edgeOrElement,trachelShape:trachelShape},smalltalk.RTShape)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTShape);


smalltalk.addMethod(
smalltalk.method({
selector: "element",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.RTShape.klass)});},
messageSends: ["element", "instance"]}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (aModel) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._elementOn_(aModel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{aModel:aModel},smalltalk.RTShape.klass)});},
messageSends: ["elementOn:", "instance"]}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
fn: function (models) {
var self=this;
var group;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
group=_st($RTGroup())._new();
_st(models)._do_((function(m){
return smalltalk.withContext(function($ctx2) {
return _st(group)._add_(_st(self._instance())._elementOn_(m));
}, function($ctx2) {$ctx2.fillBlock({m:m},$ctx1)})}));
$1=group;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{models:models,group:group},smalltalk.RTShape.klass)});},
messageSends: ["new", "do:", "add:", "elementOn:", "instance"]}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.RTShape.klass)});},
messageSends: ["new"]}),
smalltalk.RTShape.klass);


smalltalk.addClass('RTAbstractElementShape', smalltalk.RTShape, ['height', 'width', 'borderColor'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._borderColorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: ["borderColorElement:", "rtValue:", "model"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorElement:",
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aValueOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"borderColorElement:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderColor"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColorFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
messageSends: ["rtValue:"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHeight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultHeight",{},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
fn: function (extentAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._widthElement_(_st(extentAsPoint)._x());
self._heightElement_(_st(extentAsPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{extentAsPoint:extentAsPoint},smalltalk.RTAbstractElementShape)});},
messageSends: ["widthElement:", "x", "heightElement:", "y"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._heightElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: ["heightElement:", "rtValue:", "model"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightElement:",
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aValueOrASymbolOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"heightElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@height"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
messageSends: ["rtValue:"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractElementShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=self._defaultWidth();
self["@height"]=self._defaultHeight();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractElementShape)});},
messageSends: ["initialize", "defaultWidth", "defaultHeight"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._height_(aValueOrASymbolOrAOneArgBlock);
self._width_(aValueOrASymbolOrAOneArgBlock);
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: ["height:", "width:"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeElement:",
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._heightElement_(aValueOrASymbolOrAOneArgBlock);
self._widthElement_(aValueOrASymbolOrAOneArgBlock);
return self}, function($ctx1) {$ctx1.fill(self,"sizeElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: ["heightElement:", "widthElement:"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._widthElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrASymbolOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: ["widthElement:", "rtValue:", "model"]}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthElement:",
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aValueOrASymbolOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"widthElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
messageSends: []}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
messageSends: ["rtValue:"]}),
smalltalk.RTAbstractElementShape);



smalltalk.addClass('RTBox', smalltalk.RTAbstractElementShape, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
fn: function () {
var self=this;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TRBoxShape();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTBox)});},
messageSends: []}),
smalltalk.RTBox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement, trachelShape) {
var self=this;
var ex;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(trachelShape)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
ex=_st(self._widthFor_(anElement)).__at(self._heightFor_(anElement));
_st(trachelShape)._extent_(ex);
_st(trachelShape)._color_(self._colorFor_(anElement));
_st(trachelShape)._strokePaint_(self._borderColorFor_(anElement));
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape,ex:ex},smalltalk.RTBox)});},
messageSends: ["ifTrue:", "isNil", "@", "heightFor:", "widthFor:", "extent:", "color:", "colorFor:", "strokePaint:", "borderColorFor:"]}),
smalltalk.RTBox);



smalltalk.addClass('RTEllipse', smalltalk.RTAbstractElementShape, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTEllipse.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=self._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTEllipse)});},
messageSends: ["initialize", "defaultColor"]}),
smalltalk.RTEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TREllipseShape();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTEllipse)});},
messageSends: []}),
smalltalk.RTEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement, trachelShape) {
var self=this;
var ex,rec;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(trachelShape)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
ex=_st(self._widthFor_(anElement)).__at(self._heightFor_(anElement));
rec=_st(_st(_st(anElement)._position()).__minus(_st(ex).__slash((2))))._extent_(ex);
_st(trachelShape)._from_to_color_(_st(rec)._origin(),_st(rec)._corner(),self._colorFor_(anElement));
_st(trachelShape)._strokePaint_(self._borderColorFor_(anElement));
$3=trachelShape;
return $3;
}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape,ex:ex,rec:rec},smalltalk.RTEllipse)});},
messageSends: ["ifTrue:", "isNil", "@", "heightFor:", "widthFor:", "extent:", "-", "/", "position", "from:to:color:", "origin", "corner", "colorFor:", "strokePaint:", "borderColorFor:"]}),
smalltalk.RTEllipse);



smalltalk.addClass('RTAbstractLine', smalltalk.RTShape, ['width', 'attachPoint'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint:",
fn: function (aRTAttachPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachPoint"]=aRTAttachPoint;
return self}, function($ctx1) {$ctx1.fill(self,"attachPoint:",{aRTAttachPoint:aRTAttachPoint},smalltalk.RTAbstractLine)});},
messageSends: []}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
fn: function (el1, el2) {
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($RTEdge())._from_to_(el1,el2))._addShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.RTAbstractLine)});},
messageSends: ["addShape:", "from:to:"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._endingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.RTAbstractLine)});},
messageSends: ["endingPointOf:"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $RTCenteredAttachPoint(){return smalltalk.RTCenteredAttachPoint||(typeof RTCenteredAttachPoint=="undefined"?nil:RTCenteredAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractLine.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@attachPoint"]=_st($RTCenteredAttachPoint())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractLine)});},
messageSends: ["initialize", "new"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._startingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.RTAbstractLine)});},
messageSends: ["startingPointOf:"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (edge, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(trachelShape)._from_(_st(self["@attachPoint"])._startingPointOf_(edge));
_st(trachelShape)._to_(_st(self["@attachPoint"])._endingPointOf_(edge));
_st(trachelShape)._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{edge:edge,trachelShape:trachelShape},smalltalk.RTAbstractLine)});},
messageSends: ["from:", "startingPointOf:", "to:", "endingPointOf:", "resetPath"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withHorizontalAttachPoint",
fn: function () {
var self=this;
var ap;
function $RTHorizontalAttachPoint(){return smalltalk.RTHorizontalAttachPoint||(typeof RTHorizontalAttachPoint=="undefined"?nil:RTHorizontalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ap=_st($RTHorizontalAttachPoint())._new();
self._attachPoint_(ap);
$1=ap;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withHorizontalAttachPoint",{ap:ap},smalltalk.RTAbstractLine)});},
messageSends: ["new", "attachPoint:"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withShorterDistanceAttachPoint",
fn: function () {
var self=this;
var ap;
function $RTShorterDistanceAttachPoint(){return smalltalk.RTShorterDistanceAttachPoint||(typeof RTShorterDistanceAttachPoint=="undefined"?nil:RTShorterDistanceAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ap=_st($RTShorterDistanceAttachPoint())._new();
self._attachPoint_(ap);
$1=ap;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withShorterDistanceAttachPoint",{ap:ap},smalltalk.RTAbstractLine)});},
messageSends: ["new", "attachPoint:"]}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withVerticallAttachPoint",
fn: function () {
var self=this;
var ap;
function $RTVerticalAttachPoint(){return smalltalk.RTVerticalAttachPoint||(typeof RTVerticalAttachPoint=="undefined"?nil:RTVerticalAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
var $1;
ap=_st($RTVerticalAttachPoint())._new();
self._attachPoint_(ap);
$1=ap;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withVerticallAttachPoint",{ap:ap},smalltalk.RTAbstractLine)});},
messageSends: ["new", "attachPoint:"]}),
smalltalk.RTAbstractLine);


smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
fn: function (el1, el2) {
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($RTEdge())._from_to_(el1,el2))._addShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.RTAbstractLine.klass)});},
messageSends: ["addShape:", "from:to:"]}),
smalltalk.RTAbstractLine.klass);


smalltalk.addClass('RTBezierLine', smalltalk.RTAbstractLine, ['controllingElements', 'follow'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "controllingElements",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@controllingElements"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllingElements",{},smalltalk.RTBezierLine)})},
messageSends: []}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "controllingElements:",
fn: function (listofElements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controllingElements"]=listofElements;
return self}, function($ctx1) {$ctx1.fill(self,"controllingElements:",{listofElements:listofElements},smalltalk.RTBezierLine)})},
messageSends: []}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "follow:",
fn: function (aBlockOrASymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@follow"]=aBlockOrASymbol;
return self}, function($ctx1) {$ctx1.fill(self,"follow:",{aBlockOrASymbol:aBlockOrASymbol},smalltalk.RTBezierLine)})},
messageSends: []}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "getControllingElementsFromFollowFor:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._getControllingElementsFromFollowFor_using_(anEdge,self["@follow"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"getControllingElementsFromFollowFor:",{anEdge:anEdge},smalltalk.RTBezierLine)})},
messageSends: ["getControllingElementsFromFollowFor:using:"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "getControllingElementsFromFollowFor:using:",
fn: function (anEdge,followBlock){
var self=this;
var l1,l2;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
var $early={};
try {
l1=self._getFollowersOf_using_(_st(anEdge)._from(),followBlock);
l2=self._getFollowersOf_using_(_st(anEdge)._to(),followBlock);
_st(l2)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$1=l1;
throw $early=[$1];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(l1)._ifEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
$2=l2;
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$3=_st(l1).__comma(_st(_st(l2)._reversed())._allButFirst());
return $3;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"getControllingElementsFromFollowFor:using:",{anEdge:anEdge,followBlock:followBlock,l1:l1,l2:l2},smalltalk.RTBezierLine)})},
messageSends: ["getFollowersOf:using:", "from", "to", "ifEmpty:", ",", "allButFirst", "reversed"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "getFollowersOf:using:",
fn: function (aNode,followBlock){
var self=this;
var answer,view,t;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
answer=_st($OrderedCollection())._new();
view=_st(aNode)._view();
t=_st(view)._elementFromModel_(_st(followBlock)._rtValue_(_st(aNode)._model()));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(t)._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(answer)._add_(t);
t=_st(view)._elementFromModel_(_st(followBlock)._rtValue_(_st(t)._model()));
return t;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$1=_st(answer)._asArray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"getFollowersOf:using:",{aNode:aNode,followBlock:followBlock,answer:answer,view:view,t:t},smalltalk.RTBezierLine)})},
messageSends: ["new", "view", "elementFromModel:", "rtValue:", "model", "whileTrue:", "add:", "notNil", "asArray"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "getListOfPointsForTrachel:",
fn: function (anEdge){
var self=this;
var listOfPoints;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
listOfPoints=_st($OrderedCollection())._new();
_st(listOfPoints)._add_(_st(_st(anEdge)._from())._position());
$1=self["@follow"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
self._setControllingElementsFromFollowFor_(anEdge);
};
_st(self["@controllingElements"])._ifNotEmpty_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(listOfPoints)._addAll_(_st(self["@controllingElements"])._collect_("position"));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(listOfPoints)._add_(_st(_st(anEdge)._to())._position());
$2=listOfPoints;
return $2;
}, function($ctx1) {$ctx1.fill(self,"getListOfPointsForTrachel:",{anEdge:anEdge,listOfPoints:listOfPoints},smalltalk.RTBezierLine)})},
messageSends: ["new", "add:", "position", "from", "ifNotNil:", "setControllingElementsFromFollowFor:", "ifNotEmpty:", "addAll:", "collect:", "to"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTBezierLine.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@controllingElements"]=[];
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTBezierLine)})},
messageSends: ["initialize"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "setControllingElementsFromFollowFor:",
fn: function (anEdge){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@controllingElements"]=self._getControllingElementsFromFollowFor_(anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"setControllingElementsFromFollowFor:",{anEdge:anEdge},smalltalk.RTBezierLine)})},
messageSends: ["getControllingElementsFromFollowFor:"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
fn: function (){
var self=this;
var shape,aPoint,anotherPoint,aColor;
function $TRBezierShape(){return smalltalk.TRBezierShape||(typeof TRBezierShape=="undefined"?nil:TRBezierShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRBezierShape())._new();
_st(shape)._from_to_color_(aPoint,anotherPoint,aColor);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{shape:shape,aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.RTBezierLine)})},
messageSends: ["new", "from:to:color:"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anEdge){
var self=this;
var shape;
function $TRBezierShape(){return smalltalk.TRBezierShape||(typeof TRBezierShape=="undefined"?nil:TRBezierShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRBezierShape())._new();
_st(shape)._points_(self._getListOfPointsForTrachel_(anEdge));
_st(shape)._strokePaint_(self._colorFor_(anEdge));
_st(self["@controllingElements"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._addConnectedEdge_(anEdge);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anEdge:anEdge,shape:shape},smalltalk.RTBezierLine)})},
messageSends: ["new", "points:", "getListOfPointsForTrachel:", "strokePaint:", "colorFor:", "do:", "addConnectedEdge:"]}),
smalltalk.RTBezierLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (edge,trachelShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(trachelShape)._resetPath();
_st(trachelShape)._points_(self._getListOfPointsForTrachel_(edge));
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{edge:edge,trachelShape:trachelShape},smalltalk.RTBezierLine)})},
messageSends: ["resetPath", "points:", "getListOfPointsForTrachel:"]}),
smalltalk.RTBezierLine);



smalltalk.addClass('RTLine', smalltalk.RTAbstractLine, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
fn: function () {
var self=this;
var shape,aPoint,anotherPoint,aColor;
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRLineShape())._new();
_st(shape)._from_to_color_(aPoint,anotherPoint,aColor);
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{shape:shape,aPoint:aPoint,anotherPoint:anotherPoint,aColor:aColor},smalltalk.RTLine)});},
messageSends: ["new", "from:to:color:"]}),
smalltalk.RTLine);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anEdge) {
var self=this;
var shape;
function $TRLineShape(){return smalltalk.TRLineShape||(typeof TRLineShape=="undefined"?nil:TRLineShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
shape=_st($TRLineShape())._new();
_st(shape)._from_to_color_(_st(_st(anEdge)._from())._position(),_st(_st(anEdge)._to())._position(),self._colorFor_(anEdge));
$1=shape;
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anEdge:anEdge,shape:shape},smalltalk.RTLine)});},
messageSends: ["new", "from:to:color:", "position", "from", "to", "colorFor:"]}),
smalltalk.RTLine);



smalltalk.addClass('RTArc', smalltalk.RTShape, ['alphaAngle', 'betaAngle', 'innerRadius', 'externalRadius'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@alphaAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alphaAngle",{},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngle:",
fn: function (aValueOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alphaAngleElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngle:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTArc)})},
messageSends: ["alphaAngleElement:", "rtValue:", "model"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngleElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alphaAngle"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alphaAngleElement:",{anObject:anObject},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "alphaAngleFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@alphaAngle"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"alphaAngleFor:",{anElement:anElement},smalltalk.RTArc)})},
messageSends: ["rtValue:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "betaAngle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@betaAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"betaAngle",{},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "betaAngle:",
fn: function (aValueOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._betaAngleElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"betaAngle:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTArc)})},
messageSends: ["betaAngleElement:", "rtValue:", "model"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "betaAngleElement:",
fn: function (angleInRadian){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@betaAngle"]=angleInRadian;
return self}, function($ctx1) {$ctx1.fill(self,"betaAngleElement:",{angleInRadian:angleInRadian},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "betaAngleFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@betaAngle"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"betaAngleFor:",{anElement:anElement},smalltalk.RTArc)})},
messageSends: ["rtValue:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((0).__at((0)))._extent_((40).__at((50)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.RTArc)})},
messageSends: ["extent:", "@"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@externalRadius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRadius",{},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRadius:",
fn: function (aValueOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._externalRadiusElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"externalRadius:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTArc)})},
messageSends: ["externalRadiusElement:", "rtValue:", "model"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRadiusElement:",
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@externalRadius"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"externalRadiusElement:",{aValue:aValue},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "externalRadiusFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@externalRadius"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"externalRadiusFor:",{anElement:anElement},smalltalk.RTArc)})},
messageSends: ["rtValue:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTArc.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alphaAngle_((0));
self._betaAngle_((35));
self._innerRadius_((30));
self._externalRadius_((50));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTArc)})},
messageSends: ["initialize", "alphaAngle:", "betaAngle:", "innerRadius:", "externalRadius:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadius",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@innerRadius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerRadius",{},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadius:",
fn: function (aValueOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._innerRadiusElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"innerRadius:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTArc)})},
messageSends: ["innerRadiusElement:", "rtValue:", "model"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadiusElement:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@innerRadius"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"innerRadiusElement:",{anObject:anObject},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "innerRadiusFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@innerRadius"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"innerRadiusFor:",{anElement:anElement},smalltalk.RTArc)})},
messageSends: ["rtValue:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "outerAngle:innerAngle:",
fn: function (o,i){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alphaAngle_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(o)._rtValue_(obj);
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})}));
self._betaAngle_((function(obj){
return smalltalk.withContext(function($ctx2) {
return _st(_st(o)._rtValue_(obj)).__plus(_st(i)._rtValue_(obj));
}, function($ctx2) {$ctx2.fillBlock({obj:obj},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"outerAngle:innerAngle:",{o:o,i:i},smalltalk.RTArc)})},
messageSends: ["alphaAngle:", "rtValue:", "betaAngle:", "+"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "thickness:",
fn: function (aBlockOrAValue){
var self=this;
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
self._externalRadius_((function(o){
return smalltalk.withContext(function($ctx2) {
return _st(self._innerRadiusFor_(_st($RTElement())._on_(o))).__plus(_st(aBlockOrAValue)._rtValue_(o));
}, function($ctx2) {$ctx2.fillBlock({o:o},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"thickness:",{aBlockOrAValue:aBlockOrAValue},smalltalk.RTArc)})},
messageSends: ["externalRadius:", "+", "rtValue:", "innerRadiusFor:", "on:"]}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
fn: function (){
var self=this;
function $TRArcShape(){return smalltalk.TRArcShape||(typeof TRArcShape=="undefined"?nil:TRArcShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TRArcShape();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTArc)})},
messageSends: []}),
smalltalk.RTArc);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement,trachelShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(trachelShape)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(trachelShape)._alphaAngle_betaAngle_innerRadius_externalRadius_(self._alphaAngleFor_(anElement),self._betaAngleFor_(anElement),self._innerRadiusFor_(anElement),self._externalRadiusFor_(anElement));
_st(trachelShape)._color_(self._colorFor_(anElement));
$3=trachelShape;
return $3;
}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape},smalltalk.RTArc)})},
messageSends: ["ifTrue:", "isNil", "alphaAngle:betaAngle:innerRadius:externalRadius:", "alphaAngleFor:", "betaAngleFor:", "innerRadiusFor:", "externalRadiusFor:", "color:", "colorFor:"]}),
smalltalk.RTArc);



smalltalk.addClass('RTCompositeShape', smalltalk.RTShape, ['shape1', 'shape2'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape1"])._heightFor_(anElement))._max_(_st(self["@shape2"])._heightFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.RTCompositeShape)})},
messageSends: ["max:", "heightFor:"]}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTCompositeShape.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@shape1"]=_st(self["@shape1"])._copy();
self["@shape2"]=_st(self["@shape2"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTCompositeShape)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape1"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape1",{},smalltalk.RTCompositeShape)})},
messageSends: []}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape1:",
fn: function (anRTShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape1"]=anRTShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape1:",{anRTShape:anRTShape},smalltalk.RTCompositeShape)})},
messageSends: []}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape2"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape2",{},smalltalk.RTCompositeShape)})},
messageSends: []}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "shape2:",
fn: function (aRTShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape2"]=aRTShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape2:",{aRTShape:aRTShape},smalltalk.RTCompositeShape)})},
messageSends: []}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anElement){
var self=this;
function $TRComposedShape(){return smalltalk.TRComposedShape||(typeof TRComposedShape=="undefined"?nil:TRComposedShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRComposedShape())._with_with_(_st(self["@shape1"])._trachelShapeFor_(anElement),_st(self["@shape2"])._trachelShapeFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anElement:anElement},smalltalk.RTCompositeShape)})},
messageSends: ["with:with:", "trachelShapeFor:"]}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@shape1"])._updateFor_trachelShape_(anElement,_st(_st(anElement)._trachelShape())._shape1());
_st(self["@shape2"])._updateFor_trachelShape_(anElement,_st(_st(anElement)._trachelShape())._shape2());
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:",{anElement:anElement},smalltalk.RTCompositeShape)})},
messageSends: ["updateFor:trachelShape:", "shape1", "trachelShape", "shape2"]}),
smalltalk.RTCompositeShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (anElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape1"])._widthFor_(anElement))._max_(_st(self["@shape2"])._widthFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.RTCompositeShape)})},
messageSends: ["max:", "widthFor:"]}),
smalltalk.RTCompositeShape);


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
}, function($ctx1) {$ctx1.fill(self,"with:with:",{s1:s1,s2:s2},smalltalk.RTCompositeShape.klass)})},
messageSends: ["shape1:", "new", "shape2:", "yourself"]}),
smalltalk.RTCompositeShape.klass);


smalltalk.addClass('RTLabel', smalltalk.RTShape, ['text', 'font', 'height'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._black();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RTLabel)})},
messageSends: ["black"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultText",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._model())._asString();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultText",{},smalltalk.RTLabel)})},
messageSends: ["asString", "model"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
fn: function (aValueOrABlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aValueOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValueOrABlock:aValueOrABlock},smalltalk.RTLabel)})},
messageSends: []}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@height"])._rtValue_(element);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{element:element},smalltalk.RTLabel)})},
messageSends: ["rtValue:"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTLabel.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@text"]=self._defaultText();
self["@height"]=_st($TRLabelShape())._defaultFontSize();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTLabel)})},
messageSends: ["initialize", "defaultText", "defaultFontSize"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "text:",
fn: function (aValueOrAOneArgBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._textElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"text:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTLabel)})},
messageSends: ["textElement:", "rtValue:", "model"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textElement:",
fn: function (aStringOrABlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@text"]=aStringOrABlock;
return self}, function($ctx1) {$ctx1.fill(self,"textElement:",{aStringOrABlock:aStringOrABlock},smalltalk.RTLabel)})},
messageSends: []}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "textFor:",
fn: function (element){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@text"])._rtValue_(element))._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"textFor:",{element:element},smalltalk.RTLabel)})},
messageSends: ["asString", "rtValue:"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anElement){
var self=this;
var shape;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
shape=_st($TRLabelShape())._new();
$1=shape;
_st($1)._text_(self._textFor_(anElement));
_st($1)._color_(self._colorFor_(anElement));
_st($1)._position_(_st(anElement)._position());
$2=_st($1)._fontSize_(self._heightFor_(anElement));
$3=shape;
return $3;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anElement:anElement,shape:shape},smalltalk.RTLabel)})},
messageSends: ["new", "text:", "textFor:", "color:", "colorFor:", "position:", "position", "fontSize:", "heightFor:"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement,trachelShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(trachelShape)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
$3=trachelShape;
_st($3)._color_(self._colorFor_(anElement));
$4=_st($3)._text_on_(self._textFor_(anElement),_st(anElement)._position());
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape},smalltalk.RTLabel)})},
messageSends: ["ifTrue:", "isNil", "color:", "colorFor:", "text:on:", "textFor:", "position"]}),
smalltalk.RTLabel);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (anElement){
var self=this;
function $TRLabelShape(){return smalltalk.TRLabelShape||(typeof TRLabelShape=="undefined"?nil:TRLabelShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRLabelShape())._widthOfText_fontSize_(self._textFor_(anElement),self._heightFor_(anElement));
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.RTLabel)})},
messageSends: ["widthOfText:fontSize:", "textFor:", "heightFor:"]}),
smalltalk.RTLabel);



smalltalk.addClass('RTNoShape', smalltalk.RTShape, [], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
fn: function (element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{element:element},smalltalk.RTNoShape)});},
messageSends: []}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (element) {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRNoShape())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{element:element},smalltalk.RTNoShape)});},
messageSends: ["new"]}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape},smalltalk.RTNoShape)});},
messageSends: []}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
fn: function (element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{element:element},smalltalk.RTNoShape)});},
messageSends: []}),
smalltalk.RTNoShape);


smalltalk.RTNoShape.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "new",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@instance"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@instance"]=smalltalk.RTNoShape.klass.superclass.fn.prototype._new.apply(_st(self), []);
self["@instance"];
} else {
$1;
};
$2=self["@instance"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.RTNoShape.klass)});},
messageSends: ["ifNil:", "new"]}),
smalltalk.RTNoShape.klass);


smalltalk.addClass('RTSVGPath', smalltalk.RTShape, ['path', 'borderWidth', 'borderColor', 'curves', 'scale', 'rotation'], 'Roassal2-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
fn: function (aValueOrBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aValueOrBlock;
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aValueOrBlock:aValueOrBlock},smalltalk.RTSVGPath)})},
messageSends: []}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "borderWidth:",
fn: function (aValueOrBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderWidth"]=aValueOrBlock;
return self}, function($ctx1) {$ctx1.fill(self,"borderWidth:",{aValueOrBlock:aValueOrBlock},smalltalk.RTSVGPath)})},
messageSends: []}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTSVGPath.superclass.fn.prototype._initialize.apply(_st(self), []);
self._path_("");
self["@scale"]=(1);
self["@borderWidth"]=(1);
self["@borderColor"]=_st($Color())._black();
self._fillColor_(nil);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTSVGPath)})},
messageSends: ["initialize", "path:", "black", "fillColor:"]}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "path:",
fn: function (aPathAsString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@path"]=aPathAsString;
return self}, function($ctx1) {$ctx1.fill(self,"path:",{aPathAsString:aPathAsString},smalltalk.RTSVGPath)})},
messageSends: []}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "rotate:",
fn: function (anAngle){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@rotation"]=anAngle;
return self}, function($ctx1) {$ctx1.fill(self,"rotate:",{anAngle:anAngle},smalltalk.RTSVGPath)})},
messageSends: []}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
fn: function (aNumberOrBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=aNumberOrBlock;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{aNumberOrBlock:aNumberOrBlock},smalltalk.RTSVGPath)})},
messageSends: []}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
fn: function (anElement){
var self=this;
var shape;
function $TRSVGPath(){return smalltalk.TRSVGPath||(typeof TRSVGPath=="undefined"?nil:TRSVGPath)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
shape=_st($TRSVGPath())._new();
_st(shape)._strokePaint_(_st(self["@borderColor"])._rtValue_(anElement));
_st(shape)._borderWidth_(_st(self["@borderWidth"])._rtValue_(anElement));
_st(shape)._fillColor_(_st(self._fillColor())._rtValue_(anElement));
_st(shape)._scale_(_st(self["@scale"])._rtValue_(anElement));
_st(shape)._path_(self["@path"]);
$1=_st(self["@rotation"])._isNil();
if(! smalltalk.assert($1)){
_st(shape)._rotateBy_(self["@rotation"]);
};
$2=shape;
return $2;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{anElement:anElement,shape:shape},smalltalk.RTSVGPath)})},
messageSends: ["new", "strokePaint:", "rtValue:", "borderWidth:", "fillColor:", "fillColor", "scale:", "path:", "ifFalse:", "rotateBy:", "isNil"]}),
smalltalk.RTSVGPath);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
fn: function (anElement,trShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(trShape)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
_st(trShape)._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trShape:trShape},smalltalk.RTSVGPath)})},
messageSends: ["ifTrue:", "isNil", "resetPath"]}),
smalltalk.RTSVGPath);


smalltalk.addMethod(
smalltalk.method({
selector: "Afghanistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l2.832,1.030l2.059,-0.257l0.517,-1.288l2.058,-0.386l1.546,-0.772l0.515,-2.188l2.317,-0.516l0.387,-1.030l1.285,0.774l0.902,0.128l1.416,0l2.059,0.515l0.773,0.385l2.059,-0.900l0.901,0.515l0.773,-1.287l1.674,0.128l0.386,-0.387l0.256,-1.157l1.160,-0.903l1.543,0.645l-0.384,0.772l0.901,0.129l-0.259,2.317l1.030,0.900l0.904,-0.643l1.285,-0.257l1.674,-1.159l1.802,0.129l2.832,0l0.387,0.773l-1.545,0.385l-1.416,0.516l-3.090,0.256l-2.833,0.517l-1.545,1.287l0.645,1.029l0.257,1.416l-1.287,1.159l0.129,1.029l-0.773,0.902l-2.575,0l1.030,1.673l-1.673,0.772l-1.158,1.545l0.129,1.674l-1.031,0.772l-1.029,-0.257l-2.061,0.386l-0.257,0.644l-2.058,0l-1.417,1.544l-0.129,2.317l-3.476,1.159l-1.931,-0.257l-0.514,0.643l-1.674,-0.386l-2.704,0.386l-4.504,-1.415l2.445,-2.447l-0.129,-1.673l-2.060,-0.515l-0.256,-1.674l-0.902,-2.188l1.158,-1.416l-1.158,-0.386l0.773,-1.930l-1.029,3.477z";
}, function($ctx1) {$ctx1.fill(self,"Afghanistan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Albania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l-0.257,0.900l0.385,1.160l1.029,0.643l0,0.644l-0.901,0.386l-0.128,0.901l-1.288,1.287l-0.386,-0.128l-0.127,-0.644l-1.417,-0.900l-0.259,-1.288l0.259,-1.803l0.256,-0.901l-0.384,-0.386l-0.258,-0.901l1.287,-1.288l0.129,0.516l0.771,-0.258l0.516,0.773l0.643,0.257l-0.130,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Albania",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Algeria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.608,163.703l-9.269,5.150l-7.852,5.276l-3.734,1.288l-2.961,0.257l-0.128,-1.801l-1.159,-0.387l-1.672,-0.772l-0.645,-1.288l-9.139,-5.792l-9.140,-5.922l-10.040,-6.566l0,-0.514l0,-3.347l4.377,-1.931l2.703,-0.514l2.188,-0.644l1.030,-1.417l3.090,-1.029l0.128,-2.061l1.545,-0.128l1.287,-1.030l3.476,-0.515l0.515,-1.030l-0.772,-0.514l-0.902,-2.832l-0.128,-1.674l-1.030,-1.674l2.574,-1.545l2.962,-0.515l1.673,-1.029l2.574,-0.902l4.633,-0.385l4.377,-0.258l1.416,0.385l2.575,-1.028l2.833,0l1.029,0.643l1.930,-0.258l-0.642,1.416l0.514,2.575l-0.642,2.189l-1.674,1.545l0.257,2.059l2.187,1.545l0,0.643l1.674,1.159l1.159,4.763l0.903,2.446l0.126,1.158l-0.513,2.318l0.256,1.158l-0.387,1.546l0.259,1.673l-1.030,1.030l1.546,2.059l0.127,1.159l0.902,1.415l1.286,-0.385l2.060,1.158l-1.288,-1.674z";
}, function($ctx1) {$ctx1.fill(self,"Algeria",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "America",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466zM19.158,23.269c-0.079,0.064-0.183,0.13-0.105,0.207c0.078,0.078-0.09,0.131-0.09,0.17s0.104,0.246,0.052,0.336c-0.052,0.092-0.091,0.223-0.13,0.301c-0.039,0.077-0.131,0.155-0.104,0.272c0.025,0.116-0.104,0.077-0.104,0.194c0,0.116,0.116,0.065,0.09,0.208c-0.025,0.144-0.09,0.183-0.09,0.285c0,0.104,0.064,0.247,0.064,0.286s-0.064,0.17-0.155,0.272c-0.092,0.104-0.155,0.17-0.144,0.233c0.014,0.065,0.104,0.144,0.091,0.184c-0.013,0.037-0.129,0.168-0.116,0.259c0.014,0.09,0.129,0.053,0.155,0.116c0.026,0.065-0.155,0.118-0.078,0.183c0.078,0.064,0.183,0.051,0.156,0.208c-0.019,0.112,0.064,0.163,0.126,0.198c-0.891,0.221-1.818,0.352-2.777,0.352C9.639,27.533,4.466,22.36,4.466,16c0-2.073,0.557-4.015,1.518-5.697c0.079-0.042,0.137-0.069,0.171-0.062c0.065,0.013,0.079,0.104,0.183,0.13c0.104,0.026,0.195-0.078,0.26-0.117c0.064-0.039,0.116-0.195,0.051-0.182c-0.065,0.013-0.234,0-0.234,0s0.183-0.104,0.183-0.169s0.025-0.169,0.129-0.208C6.83,9.655,6.83,9.681,6.765,9.837C6.7,9.993,6.896,9.928,6.973,9.863s0.13-0.013,0.272-0.104c0.143-0.091,0.143-0.143,0.221-0.143c0.078,0,0.221,0.143,0.299,0.091c0.077-0.052,0.299,0.065,0.429,0.065c0.129,0,0.545,0.169,0.624,0.169c0.078,0,0.312,0.09,0.325,0.259c0.013,0.169,0.09,0.156,0.168,0.156s0.26,0.065,0.26,0.13c0,0.065-0.052,0.325,0.078,0.39c0.129,0.064,0.247,0.169,0.299,0.143c0.052-0.026,0-0.233-0.064-0.26c-0.065-0.026-0.027-0.117-0.052-0.169c-0.026-0.051,0.078-0.051,0.117,0.039c0.039,0.091,0.143,0.26,0.208,0.26c0.064,0,0.208,0.156,0.168,0.247c-0.039,0.091,0.039,0.221,0.156,0.221c0.116,0,0.26,0.182,0.312,0.195c0.052,0.013,0.117,0.078,0.117,0.117c0,0.04,0.065,0.26,0.065,0.351c0,0.09-0.04,0.454-0.053,0.597s0.104,0.39,0.234,0.52c0.129,0.13,0.246,0.377,0.324,0.429c0.079,0.052,0.13,0.195,0.247,0.182c0.117-0.013,0.195,0.078,0.299,0.26c0.104,0.182,0.208,0.48,0.286,0.506c0.078,0.026,0.208,0.117,0.142,0.182c-0.064,0.064-0.168,0.208-0.051,0.208c0.117,0,0.156-0.065,0.247,0.053c0.09,0.116,0.208,0.181,0.194,0.26c-0.013,0.077,0.104,0.103,0.156,0.116c0.052,0.013,0.169,0.247,0.286,0.143c0.117-0.104-0.155-0.259-0.234-0.326c-0.078-0.064,0-0.207-0.182-0.35c-0.182-0.143-0.156-0.247-0.286-0.351c-0.13-0.104-0.233-0.195-0.104-0.286c0.13-0.091,0.143,0.091,0.195,0.208c0.052,0.116,0.324,0.351,0.441,0.454c0.117,0.104,0.326,0.468,0.39,0.468s0.247,0.208,0.247,0.208s0.103,0.168,0.064,0.22c-0.039,0.052,0.053,0.247,0.144,0.299c0.09,0.052,0.455,0.22,0.507,0.247c0.052,0.027,0.155,0.221,0.299,0.221c0.142,0,0.247,0.014,0.286,0.053c0.039,0.038,0.155,0.194,0.234,0.104c0.078-0.092,0.09-0.131,0.208-0.131c0.117,0,0.168,0.091,0.233,0.156c0.065,0.065,0.247,0.235,0.338,0.222c0.091-0.013,0.208,0.104,0.273,0.064s0.169,0.025,0.22,0.052c0.054,0.026,0.234,0.118,0.222,0.272c-0.013,0.157,0.103,0.195,0.182,0.234c0.078,0.039,0.182,0.13,0.248,0.195c0.064,0.063,0.206,0.077,0.246,0.116c0.039,0.039,0.065,0.117,0.182,0.052c0.116-0.064,0.092-0.181,0.092-0.181s0.129-0.026,0.194,0.026c0.064,0.05,0.104,0.22,0.144,0.246c0.038,0.026,0.115,0.221,0.063,0.362c-0.051,0.145-0.038,0.286-0.091,0.286c-0.052,0-0.116,0.17-0.195,0.209c-0.076,0.039-0.285,0.221-0.272,0.286c0.013,0.063,0.131,0.258,0.104,0.35c-0.025,0.091-0.194,0.195-0.154,0.338c0.038,0.144,0.312,0.183,0.323,0.312c0.014,0.131,0.209,0.417,0.235,0.546c0.025,0.13,0.246,0.272,0.246,0.453c0,0.184,0.312,0.3,0.377,0.312c0.063,0.013,0.182,0.131,0.272,0.17s0.169,0.116,0.233,0.221s0.053,0.261,0.053,0.299c0,0.039-0.039,0.44-0.078,0.674C19.145,23.021,19.235,23.203,19.158,23.269zM10.766,11.188c0.039,0.013,0.117,0.091,0.156,0.091c0.04,0,0.234,0.156,0.286,0.208c0.053,0.052,0.053,0.195-0.013,0.208s-0.104-0.143-0.117-0.208c-0.013-0.065-0.143-0.065-0.208-0.104C10.805,11.344,10.66,11.152,10.766,11.188zM27.51,16.41c-0.144,0.182-0.13,0.272-0.195,0.286c-0.064,0.013,0.065,0.065,0.09,0.194c0.022,0.112-0.065,0.224,0.063,0.327c-0.486,4.619-3.71,8.434-8.016,9.787c-0.007-0.011-0.019-0.025-0.021-0.034c-0.027-0.078-0.027-0.233,0.064-0.285c0.091-0.053,0.312-0.233,0.363-0.272c0.052-0.04,0.13-0.221,0.091-0.247c-0.038-0.026-0.232,0-0.26-0.039c-0.026-0.039-0.026-0.092,0.104-0.182c0.13-0.091,0.195-0.222,0.247-0.26c0.052-0.039,0.155-0.117,0.195-0.209c0.038-0.09-0.041-0.039-0.118-0.039s-0.117-0.142-0.117-0.207s0.195,0.026,0.339,0.052c0.143,0.024,0.077-0.065,0.064-0.142c-0.013-0.078,0.026-0.209,0.105-0.17c0.076,0.039,0.479-0.013,0.531-0.026c0.052-0.013,0.194-0.246,0.246-0.312c0.053-0.065,0.064-0.129,0-0.168c-0.065-0.04-0.143-0.184-0.168-0.221c-0.026-0.041-0.039-0.274-0.013-0.34c0.025-0.063,0,0.377,0.181,0.43c0.183,0.052,0.286,0.078,0.455-0.078c0.169-0.155,0.298-0.26,0.312-0.363c0.013-0.104,0.052-0.209,0.117-0.246c0.065-0.039,0.104,0.103,0.182-0.065c0.078-0.17,0.156-0.157,0.234-0.299c0.077-0.144-0.13-0.325,0.024-0.43c0.157-0.103,0.43-0.233,0.43-0.233s0.078-0.039,0.234-0.078c0.155-0.038,0.324-0.014,0.376-0.09c0.052-0.079,0.104-0.247,0.182-0.338c0.079-0.092,0.169-0.234,0.13-0.299c-0.039-0.065,0.104-0.352,0.091-0.429c-0.013-0.078-0.13-0.261,0.065-0.416s0.402-0.391,0.416-0.454c0.012-0.065,0.169-0.338,0.154-0.469c-0.012-0.129-0.154-0.285-0.245-0.325c-0.092-0.037-0.286-0.05-0.364-0.154s-0.299-0.208-0.377-0.182c-0.077,0.026-0.208,0.051-0.312-0.015c-0.104-0.063-0.272-0.143-0.337-0.194c-0.066-0.051-0.234-0.09-0.312-0.09s-0.065-0.053-0.182,0.103c-0.117,0.157,0,0.209-0.208,0.182c-0.209-0.024,0.025-0.038,0.144-0.194c0.115-0.155-0.014-0.247-0.144-0.207c-0.13,0.039-0.039,0.117-0.247,0.156c-0.207,0.038-0.207-0.092-0.077-0.117c0.13-0.026,0.363-0.143,0.363-0.194c0-0.053-0.026-0.196-0.13-0.196s-0.078-0.129-0.233-0.297c-0.156-0.17-0.351-0.274-0.508-0.249c-0.154,0.026-0.272,0.065-0.35-0.076c-0.078-0.144-0.169-0.17-0.222-0.247c-0.051-0.078-0.182,0-0.221-0.039s-0.039-0.039-0.039-0.039s-0.169,0.039-0.077-0.078c0.09-0.117,0.129-0.338,0.09-0.325c-0.038,0.013-0.104,0.196-0.168,0.183c-0.064-0.013-0.014-0.04-0.144-0.117c-0.13-0.078-0.337-0.013-0.337,0.052c0,0.065-0.065,0.117-0.065,0.117s-0.039-0.038-0.078-0.117c-0.039-0.078-0.221-0.091-0.312-0.013c-0.09,0.078-0.142-0.196-0.207-0.196s-0.194,0.065-0.26,0.184c-0.064,0.116-0.038,0.285-0.092,0.272c-0.05-0.013-0.063-0.233-0.05-0.312c0.012-0.079,0.155-0.208,0.05-0.234c-0.103-0.026-0.259,0.13-0.323,0.143c-0.065,0.013-0.195,0.104-0.273,0.209c-0.077,0.103-0.116,0.168-0.195,0.207c-0.077,0.039-0.193,0-0.167-0.039c0.025-0.039-0.222-0.181-0.261-0.13c-0.04,0.052-0.155,0.091-0.272,0.144c-0.117,0.052-0.222-0.065-0.247-0.117s-0.079-0.064-0.091-0.234c-0.013-0.168,0.027-0.351,0.065-0.454c0.038-0.104-0.195-0.312-0.286-0.3c-0.091,0.015-0.182,0.105-0.272,0.091c-0.092-0.012-0.052-0.038-0.195-0.038c-0.143,0-0.026-0.025,0-0.143c0.025-0.116-0.052-0.273,0.092-0.377c0.142-0.104,0.091-0.351,0-0.363c-0.092-0.014-0.261,0.039-0.377,0.026c-0.116-0.014-0.208,0.091-0.169,0.207c0.039,0.117-0.065,0.195-0.104,0.183c-0.039-0.013-0.09-0.078-0.234,0.026c-0.142,0.103-0.194,0.064-0.337-0.052c-0.143-0.118-0.299-0.234-0.325-0.416c-0.026-0.182-0.04-0.364,0.013-0.468c0.051-0.104,0.051-0.285-0.026-0.312c-0.078-0.025,0.09-0.155,0.181-0.181c0.092-0.026,0.234-0.143,0.26-0.195c0.026-0.052,0.156-0.04,0.298-0.04c0.143,0,0.169,0,0.312,0.078c0.143,0.078,0.169-0.039,0.169-0.078c0-0.039,0.052-0.117,0.208-0.104c0.156,0.013,0.376-0.052,0.416-0.013s0.116,0.195,0.194,0.143c0.079-0.051,0.104-0.143,0.131,0.014c0.025,0.155,0.09,0.39,0.208,0.429c0.116,0.039,0.052,0.194,0.168,0.207c0.115,0.013,0.17-0.246,0.131-0.337c-0.04-0.09-0.118-0.363-0.183-0.428c-0.064-0.065-0.064-0.234,0.064-0.286c0.13-0.052,0.442-0.312,0.532-0.389c0.092-0.079,0.338-0.144,0.261-0.248c-0.078-0.104-0.104-0.168-0.104-0.247s0.078-0.052,0.117,0s0.194-0.078,0.155-0.143c-0.038-0.064-0.026-0.155,0.065-0.143c0.091,0.013,0.116-0.065,0.078-0.117c-0.039-0.052,0.091-0.117,0.182-0.091c0.092,0.026,0.325-0.013,0.364-0.065c0.038-0.052-0.078-0.104-0.078-0.208c0-0.104,0.155-0.195,0.247-0.208c0.091-0.013,0.207,0,0.221-0.039c0.012-0.039,0.143-0.143,0.155-0.052c0.014,0.091,0,0.247,0.104,0.247c0.104,0,0.232-0.117,0.272-0.129c0.038-0.013,0.286-0.065,0.338-0.078c0.052-0.013,0.363-0.039,0.325-0.13c-0.039-0.09-0.078-0.181-0.118-0.22c-0.039-0.039-0.077,0.013-0.13,0.078c-0.051,0.065-0.143,0.065-0.168,0.013c-0.026-0.051,0.012-0.207-0.078-0.156c-0.092,0.052-0.104,0.104-0.157,0.078c-0.052-0.026-0.103-0.117-0.103-0.117s0.129-0.064,0.038-0.182c-0.09-0.117-0.221-0.091-0.35-0.025c-0.13,0.064-0.118,0.051-0.273,0.09s-0.234,0.078-0.234,0.078s0.209-0.129,0.299-0.208c0.091-0.078,0.209-0.117,0.286-0.195c0.078-0.078,0.285,0.039,0.285,0.039s0.105-0.104,0.105-0.039s-0.027,0.234,0.051,0.234c0.079,0,0.299-0.104,0.21-0.131c-0.093-0.026,0.129,0,0.219-0.065c0.092-0.065,0.194-0.065,0.247-0.09c0.052-0.026,0.092-0.143,0.182-0.143c0.092,0,0.13,0.117,0,0.195s-0.143,0.273-0.208,0.325c-0.064,0.052-0.026,0.117,0.078,0.104c0.104-0.013,0.194,0.013,0.286-0.013s0.143,0.026,0.168,0.065c0.026,0.039,0.104-0.039,0.104-0.039s0.169-0.039,0.221,0.026c0.053,0.064,0.092-0.039,0.053-0.104c-0.039-0.064-0.092-0.129-0.13-0.208c-0.039-0.078-0.091-0.104-0.194-0.078c-0.104,0.026-0.13-0.026-0.195-0.064c-0.065-0.04-0.118,0.052-0.065-0.04c0.053-0.09,0.078-0.117,0.117-0.195c0.039-0.078,0.209-0.221,0.039-0.259c-0.169-0.04-0.222-0.065-0.247-0.143c-0.026-0.078-0.221-0.221-0.272-0.221c-0.053,0-0.233,0-0.247-0.065c-0.013-0.065-0.143-0.208-0.208-0.273c-0.064-0.065-0.312-0.351-0.351-0.377c-0.039-0.026-0.091-0.013-0.208,0.143c-0.116,0.157-0.22,0.183-0.312,0.144c-0.091-0.039-0.104-0.026-0.193-0.13c-0.093-0.104,0.09-0.117,0.051-0.182c-0.04-0.064-0.247-0.091-0.377-0.104c-0.13-0.013-0.221-0.156-0.416-0.169c-0.194-0.013-0.428,0.026-0.493,0.026c-0.064,0-0.064,0.091-0.09,0.234c-0.027,0.143,0.09,0.182-0.027,0.208c-0.116,0.026-0.169,0.039-0.052,0.091c0.117,0.052,0.273,0.26,0.273,0.26s0,0.117-0.092,0.182c-0.09,0.065-0.182,0.13-0.233,0.053c-0.053-0.079-0.195-0.065-0.155,0.013c0.038,0.078,0.116,0.117,0.116,0.195c0,0.077,0.117,0.272,0.039,0.337c-0.078,0.065-0.168,0.014-0.233,0.026s-0.131-0.104-0.078-0.13c0.051-0.026-0.014-0.221-0.014-0.221s-0.155,0.221-0.143,0.104c0.014-0.117-0.064-0.13-0.064-0.221c0-0.091-0.079-0.13-0.194-0.104c-0.118,0.026-0.26-0.04-0.482-0.079c-0.22-0.039-0.311-0.064-0.493-0.156c-0.182-0.091-0.247-0.026-0.338-0.013c-0.091,0.013-0.052-0.182-0.169-0.207c-0.116-0.027-0.181,0.025-0.207-0.144c-0.026-0.168,0.039-0.208,0.324-0.39c0.286-0.182,0.247-0.26,0.468-0.286c0.22-0.026,0.325,0.026,0.325-0.039s0.052-0.325,0.052-0.195S16.95,9.109,16.832,9.2c-0.116,0.091-0.052,0.104,0.04,0.104c0.091,0,0.259-0.091,0.259-0.091s0.208-0.091,0.26-0.013c0.053,0.078,0.053,0.156,0.144,0.156s0.285-0.104,0.116-0.195c-0.168-0.091-0.272-0.078-0.376-0.182s-0.078-0.065-0.195-0.039c-0.116,0.026-0.116-0.039-0.156-0.039s-0.104,0.026-0.13-0.026c-0.025-0.052,0.014-0.065,0.145-0.065c0.129,0,0.285,0.039,0.285,0.039s0.155-0.052,0.194-0.065c0.039-0.013,0.247-0.039,0.208-0.155c-0.04-0.117-0.169-0.117-0.208-0.156s0.078-0.09,0.143-0.117c0.065-0.026,0.247,0,0.247,0s0.117,0.013,0.117-0.039S17.897,8.2,17.976,8.239s0,0.156,0.117,0.13c0.116-0.026,0.143,0,0.207,0.039c0.065,0.039-0.013,0.195-0.077,0.221c-0.065,0.025-0.169,0.077-0.026,0.09c0.144,0.014,0.246,0.014,0.246,0.014s0.092-0.091,0.131-0.169c0.038-0.078,0.104-0.026,0.155,0c0.052,0.025,0.247,0.065,0.065,0.117c-0.183,0.052-0.221,0.117-0.26,0.182c-0.038,0.065-0.053,0.104-0.221,0.065c-0.17-0.039-0.26-0.026-0.299,0.039c-0.039,0.064-0.013,0.273,0.053,0.247c0.063-0.026,0.129-0.026,0.207-0.052c0.078-0.026,0.39,0.026,0.467,0.013c0.078-0.013,0.209,0.13,0.248,0.104c0.039-0.026,0.117,0.052,0.194,0.104c0.078,0.052,0.052-0.117,0.194-0.013c0.144,0.104,0.065,0.104,0.144,0.104c0.076,0,0.246,0.013,0.246,0.013s0.014-0.129,0.144-0.104c0.13,0.026,0.245,0.169,0.232,0.064c-0.012-0.103,0.013-0.181-0.09-0.259c-0.104-0.078-0.272-0.13-0.299-0.169c-0.026-0.039-0.052-0.091-0.013-0.117c0.039-0.025,0.221,0.013,0.324,0.079c0.104,0.065,0.195,0.13,0.273,0.078c0.077-0.052,0.17-0.078,0.208-0.117c0.038-0.04,0.13-0.156,0.13-0.156s-0.391-0.051-0.441-0.117c-0.053-0.065-0.235-0.156-0.287-0.156s-0.194,0.091-0.246-0.039s-0.052-0.286-0.105-0.299c-0.05-0.013-0.597-0.091-0.674-0.13c-0.078-0.039-0.39-0.13-0.507-0.195s-0.286-0.156-0.389-0.156c-0.104,0-0.533,0.052-0.611,0.039c-0.078-0.013-0.312,0.026-0.403,0.039c-0.091,0.013,0.117,0.182-0.077,0.221c-0.195,0.039-0.169,0.065-0.13-0.13c0.038-0.195-0.131-0.247-0.299-0.169c-0.169,0.078-0.442,0.13-0.377,0.221c0.065,0.091-0.012,0.157,0.117,0.247c0.13,0.091,0.183,0.117,0.35,0.104c0.17-0.013,0.339,0.025,0.339,0.025s0,0.157-0.064,0.182c-0.065,0.026-0.169,0.026-0.196,0.104c-0.025,0.078-0.155,0.117-0.155,0.078s0.065-0.169-0.026-0.234c-0.09-0.065-0.117-0.078-0.221-0.013c-0.104,0.065-0.116,0.091-0.169-0.013C16.053,8.291,15.897,8.2,15.897,8.2s-0.104-0.129-0.182-0.194c-0.077-0.065-0.22-0.052-0.234,0.013c-0.013,0.064,0.026,0.129,0.078,0.247c0.052,0.117,0.104,0.337,0.013,0.351c-0.091,0.013-0.104,0.026-0.195,0.052c-0.091,0.026-0.13-0.039-0.13-0.143s-0.04-0.195-0.013-0.234c0.026-0.039-0.104,0.027-0.234,0c-0.13-0.025-0.233,0.052-0.104,0.092c0.13,0.039,0.157,0.194,0.039,0.233c-0.117,0.039-0.559,0-0.702,0s-0.35,0.039-0.39-0.039c-0.039-0.078,0.118-0.129,0.208-0.129c0.091,0,0.363,0.012,0.467-0.13c0.104-0.143-0.13-0.169-0.233-0.169c-0.104,0-0.183-0.039-0.299-0.155c-0.118-0.117,0.078-0.195,0.052-0.247c-0.026-0.052-0.156-0.014-0.272-0.014c-0.117,0-0.299-0.09-0.299,0.014c0,0.104,0.143,0.402,0.052,0.337c-0.091-0.064-0.078-0.156-0.143-0.234c-0.065-0.078-0.168-0.065-0.299-0.052c-0.129,0.013-0.35,0.052-0.415,0.039c-0.064-0.013-0.013-0.013-0.156-0.078c-0.142-0.065-0.208-0.052-0.312-0.117C12.091,7.576,12.182,7.551,12,7.538c-0.181-0.013-0.168,0.09-0.35,0.065c-0.182-0.026-0.234,0.013-0.416,0c-0.182-0.013-0.272-0.026-0.299,0.065c-0.025,0.091-0.078,0.247-0.156,0.247c-0.077,0-0.169,0.091,0.078,0.104c0.247,0.013,0.105,0.129,0.325,0.117c0.221-0.013,0.416-0.013,0.468-0.117c0.052-0.104,0.091-0.104,0.117-0.065c0.025,0.039,0.22,0.272,0.22,0.272s0.131,0.104,0.183,0.13c0.051,0.026-0.052,0.143-0.156,0.078c-0.104-0.065-0.299-0.051-0.377-0.116c-0.078-0.065-0.429-0.065-0.52-0.052c-0.09,0.013-0.247-0.039-0.299-0.039c-0.051,0-0.221,0.13-0.221,0.13S10.532,8.252,10.494,8.2c-0.039-0.052-0.104,0.052-0.156,0.065c-0.052,0.013-0.208-0.104-0.364-0.052C9.818,8.265,9.87,8.317,9.649,8.304s-0.272-0.052-0.35-0.039C9.22,8.278,9.22,8.278,9.22,8.278S9.233,8.33,9.143,8.382C9.052,8.434,8.986,8.499,8.921,8.421C8.857,8.343,8.818,8.343,8.779,8.33c-0.04-0.013-0.118-0.078-0.286-0.04C8.324,8.33,8.064,8.239,8.013,8.239c-0.04,0-0.313-0.015-0.491-0.033c2.109-2.292,5.124-3.74,8.478-3.74c2.128,0,4.117,0.589,5.83,1.598c-0.117,0.072-0.319,0.06-0.388,0.023c-0.078-0.043-0.158-0.078-0.475-0.061c-0.317,0.018-0.665,0.122-0.595,0.226c0.072,0.104-0.142,0.165-0.197,0.113c-0.055-0.052-0.309,0.06-0.293,0.165c0.016,0.104-0.039,0.225-0.175,0.199c-0.134-0.027-0.229,0.06-0.237,0.146c-0.007,0.087-0.309,0.147-0.332,0.147c-0.024,0-0.412-0.008-0.27,0.095c0.097,0.069,0.15,0.027,0.27,0.052c0.119,0.026,0.214,0.217,0.277,0.243c0.062,0.026,0.15,0,0.189-0.052c0.04-0.052,0.095-0.234,0.095-0.234s0,0.173,0.097,0.208c0.095,0.035,0.331-0.026,0.395-0.017c0.064,0.008,0.437,0.061,0.538,0.112c0.104,0.052,0.356,0.087,0.428,0.199c0.071,0.113,0.08,0.503,0.119,0.546c0.04,0.043,0.174-0.139,0.205-0.182c0.031-0.044,0.198-0.018,0.254,0.042c0.056,0.061,0.182,0.208,0.175,0.269C21.9,8.365,21.877,8.459,21.83,8.425c-0.048-0.034-0.127-0.025-0.096-0.095c0.032-0.069,0.048-0.217-0.015-0.217c-0.064,0-0.119,0-0.119,0s-0.12-0.035-0.199,0.095s-0.015,0.26,0.04,0.26s0.184,0,0.184,0.034c0,0.035-0.136,0.139-0.128,0.2c0.009,0.061,0.11,0.268,0.144,0.312c0.031,0.043,0.197,0.086,0.244,0.096c0.049,0.008-0.111,0.017-0.07,0.077c0.04,0.061,0.102,0.208,0.189,0.243c0.087,0.035,0.333,0.19,0.363,0.26c0.032,0.069,0.222-0.052,0.262-0.061c0.04-0.008,0.032,0.182,0.143,0.191c0.11,0.008,0.15-0.018,0.245-0.096s0.072-0.182,0.079-0.26c0.009-0.078,0-0.138,0.104-0.113c0.104,0.026,0.158-0.018,0.15-0.104c-0.008-0.087-0.095-0.191,0.07-0.217c0.167-0.026,0.254-0.138,0.357-0.138c0.103,0,0.389,0.043,0.419,0c0.032-0.043,0.167-0.243,0.254-0.251c0.067-0.007,0.224-0.021,0.385-0.042c1.582,1.885,2.561,4.284,2.673,6.905c-0.118,0.159-0.012,0.305,0.021,0.408c0.001,0.03,0.005,0.058,0.005,0.088c0,0.136-0.016,0.269-0.021,0.404C27.512,16.406,27.512,16.408,27.51,16.41zM17.794,12.084c-0.064,0.013-0.169-0.052-0.169-0.143s-0.091,0.169-0.04,0.247c0.053,0.078-0.104,0.169-0.155,0.169s-0.091-0.116-0.078-0.233c0.014-0.117-0.077-0.221-0.221-0.208c-0.143,0.014-0.208,0.13-0.259,0.169c-0.053,0.039-0.053,0.259-0.04,0.312s0.013,0.235-0.116,0.221c-0.118-0.013-0.092-0.233-0.079-0.312c0.014-0.078-0.039-0.273,0.014-0.376c0.053-0.104,0.207-0.143,0.312-0.156s0.324,0.065,0.363,0.052c0.04-0.014,0.222-0.014,0.312,0C17.729,11.837,17.858,12.071,17.794,12.084zM18.027,12.123c0.04,0.026,0.311-0.039,0.364,0.026c0.051,0.065-0.054,0.078-0.183,0.13c-0.129,0.052-0.169,0.039-0.221,0.104s-0.221,0.09-0.299,0.168c-0.078,0.079-0.217,0.125-0.246,0.065c-0.04-0.078,0.013-0.039,0.025-0.078c0.013-0.039,0.245-0.129,0.245-0.129S17.988,12.097,18.027,12.123zM16.988,11.668c-0.038,0.013-0.182-0.026-0.3-0.026c-0.116,0-0.091-0.078-0.143-0.064c-0.051,0.013-0.168,0.039-0.247,0.078c-0.078,0.039-0.208,0.03-0.208-0.04c0-0.104,0.052-0.078,0.221-0.143c0.169-0.065,0.352-0.247,0.429-0.169c0.078,0.078,0.221,0.169,0.312,0.182C17.144,11.5,17.026,11.655,16.988,11.668zM15.659,7.637c-0.079,0.026-0.347,0.139-0.321,0.199c0.01,0.023,0.078,0.069,0.19,0.052c0.113-0.018,0.276-0.035,0.355-0.043c0.078-0.009,0.095-0.139,0.009-0.147C15.805,7.689,15.736,7.611,15.659,7.637zM14.698,7.741c-0.061,0.026-0.243-0.043-0.338,0.018c-0.061,0.038-0.026,0.164,0.07,0.172c0.095,0.009,0.259-0.06,0.276-0.008c0.018,0.052,0.078,0.286,0.234,0.208c0.156-0.078,0.147-0.147,0.19-0.156c0.043-0.009-0.008-0.199-0.078-0.243C14.983,7.689,14.758,7.715,14.698,7.741zM14.385,7.005c0.017,0.044-0.008,0.078,0.113,0.095c0.121,0.018,0.173,0.035,0.243,0.035c0.069,0,0.042-0.113-0.018-0.19c-0.061-0.078-0.043-0.069-0.199-0.113c-0.156-0.043-0.312-0.043-0.416-0.035c-0.104,0.009-0.217-0.017-0.243,0.104c-0.013,0.062,0.07,0.112,0.174,0.112S14.368,6.962,14.385,7.005zM14.611,7.481c0.043,0.095,0.043,0.051,0.165,0.061C14.896,7.551,14.991,7.421,15,7.378c0.009-0.044-0.061-0.13-0.225-0.113c-0.165,0.017-0.667-0.026-0.736,0.034c-0.066,0.058,0,0.233-0.026,0.251c-0.026,0.017,0.009,0.095,0.077,0.078c0.069-0.017,0.104-0.182,0.157-0.182C14.299,7.447,14.568,7.386,14.611,7.481zM12.982,7.126c0.052,0.043,0.183,0.008,0.173-0.035c-0.008-0.043,0.053-0.217-0.051-0.225C13,6.858,12.854,6.962,12.697,7.014c-0.101,0.033-0.078,0.13-0.009,0.13S12.931,7.083,12.982,7.126zM13.72,7.282c-0.087,0.043-0.114,0.069-0.191,0.052c-0.078-0.017-0.078-0.156-0.217-0.13c-0.138,0.026-0.164,0.104-0.207,0.139s-0.139,0.061-0.173,0.043c-0.034-0.017-0.234-0.129-0.234-0.129s-0.416-0.018-0.433-0.07c-0.017-0.052-0.086-0.138-0.277-0.121s-0.52,0.13-0.572,0.13c-0.052,0,0.062,0.104-0.009,0.104c-0.069,0-0.155-0.008-0.181,0.069c-0.018,0.053,0.078,0.052,0.189,0.052c0.112,0,0.295,0,0.347-0.026c0.052-0.026,0.312-0.087,0.303-0.009c-0.009,0.079,0.104,0.199,0.164,0.182c0.061-0.017,0.183-0.13,0.243-0.086c0.061,0.043,0.07,0.146,0.13,0.173c0.061,0.025,0.226,0.025,0.304,0c0.077-0.027,0.294-0.027,0.389-0.009c0.095,0.018,0.373,0.069,0.399,0.018c0.026-0.053,0.104-0.061,0.112-0.113s0.051-0.216,0.051-0.216S13.806,7.239,13.72,7.282zM18.105,16.239c-0.119,0.021-0.091,0.252,0.052,0.21C18.3,16.407,18.223,16.217,18.105,16.239zM19.235,15.929c-0.104-0.026-0.221,0-0.299,0.013c-0.078,0.013-0.299,0.208-0.299,0.208s0.143,0.026,0.233,0.026c0.092,0,0.144,0.051,0.221,0.09c0.078,0.04,0.221-0.052,0.272-0.052c0.053,0,0.118,0.156,0.131-0.013C19.508,16.032,19.339,15.955,19.235,15.929zM15.616,7.507c-0.043-0.104-0.259-0.139-0.304-0.035C15.274,7.563,15.659,7.611,15.616,7.507zM18.093,15.292c0.143-0.026,0.064-0.144-0.053-0.13C17.922,15.175,17.949,15.318,18.093,15.292zM19.82,16.095c-0.119,0.022-0.092,0.253,0.051,0.211C20.015,16.264,19.937,16.074,19.82,16.095zM18.247,15.708c-0.09,0.013-0.285-0.09-0.389-0.182c-0.104-0.091-0.299-0.091-0.377-0.091c-0.077,0-0.39,0.091-0.39,0.091c-0.013,0.13,0.117,0.091,0.273,0.091s0.429-0.026,0.479,0.039c0.053,0.064,0.286,0.168,0.352,0.221c0.064,0.052,0.272,0.065,0.285,0.013S18.338,15.695,18.247,15.708zM16.698,7.412c-0.13-0.009-0.295-0.009-0.399,0c-0.104,0.008-0.182-0.069-0.26-0.113c-0.077-0.043-0.251-0.182-0.354-0.199c-0.104-0.017-0.086-0.017-0.303-0.069c-0.11-0.027-0.294-0.061-0.294-0.086c0-0.026-0.052,0.121,0.043,0.165c0.095,0.043,0.251,0.121,0.363,0.164c0.114,0.043,0.329,0.052,0.399,0.139c0.069,0.086,0.303,0.156,0.303,0.156l0.277,0.026c0,0,0.191-0.043,0.39-0.026c0.199,0.017,0.493,0.043,0.659,0.035c0.163-0.008,0.189-0.061,0.208-0.095c0.016-0.035-0.304-0.104-0.383-0.095C17.271,7.42,16.827,7.42,16.698,7.412zM17.182,9.404c-0.034,0.039,0.157,0.095,0.191,0.043C17.407,9.396,17.271,9.309,17.182,9.404zM17.764,9.585c0.086-0.035,0.043-0.139-0.079-0.104C17.547,9.521,17.676,9.62,17.764,9.585z";
}, function($ctx1) {$ctx1.fill(self,"America",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Angola",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M497.994,242.615l-0.643,-2.060l1.030,-1.159l0.900,-0.515l0.902,1.031l-0.902,0.516l-0.514,0.642l0,1.159l0.773,-0.386zM496.836,273.64l-0.257,-1.804l0.385,-2.317l0.900,-2.445l0.130,-1.158l0.901,-2.447l0.643,-1.157l1.545,-1.674l0.902,-1.288l0.257,-1.931l-0.129,-1.544l-0.771,-0.902l-0.775,-1.673l-0.642,-1.674l0.129,-0.515l0.772,-1.029l-0.772,-2.704l-0.516,-1.802l-1.414,-1.674l0.257,-0.515l1.157,-0.387l0.774,0.131l0.900,-0.389l7.982,0.131l0.643,1.930l0.771,1.674l0.645,0.773l1.031,1.415l1.801,-0.128l0.900,-0.387l1.418,0.387l0.514,-0.772l0.644,-1.545l1.673,-0.128l0.128,-0.388l1.417,0l-0.258,0.902l3.219,0l0.128,1.672l0.514,1.031l-0.385,1.673l0.129,1.674l0.900,1.030l-0.129,3.091l0.645,-0.131l1.158,0l1.674,-0.385l1.287,0.128l0.257,0.902l-0.257,1.286l0.387,1.287l-0.387,0.903l0.257,1.028l-5.536,-0.127l-0.128,8.625l1.804,2.187l1.673,1.674l-4.892,1.158l-6.566,-0.385l-1.801,-1.287l-10.944,0.128l-0.384,0.128l-1.674,-1.159l-1.672,-0.128l-1.674,0.515l1.288,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Angola",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Argentina",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.448,295.781l1.288,1.544l0,2.189l-2.319,1.416l-1.801,1.158l-2.961,2.576l-3.605,3.732l-0.772,2.189l-0.644,2.702l0,2.705l-0.643,0.643l-0.129,1.674l-0.257,1.417l3.475,2.317l-0.387,1.802l1.675,1.287l-0.129,1.288l-2.574,3.475l-3.991,1.417l-5.406,0.513l-2.961,-0.257l0.514,1.674l-0.514,1.931l0.514,1.415l-1.673,0.902l-2.703,0.385l-2.575,-1.028l-1.029,0.770l0.386,2.705l1.801,0.772l1.417,-0.901l0.901,1.416l-2.575,0.902l-2.188,1.673l-0.386,2.705l-0.643,1.414l-2.448,0l-2.188,1.416l-0.772,1.932l2.704,2.059l2.574,0.516l-0.901,2.445l-3.218,1.545l-1.803,3.090l-2.445,1.030l-1.031,1.287l0.774,2.832l1.802,1.543l-1.030,-0.127l-2.574,-0.387l-6.436,-0.385l-1.160,-1.545l0,-2.060l-1.801,0.129l-0.902,-0.902l-0.258,-2.831l2.060,-1.288l0.901,-1.674l-0.386,-1.288l1.546,-2.316l0.900,-3.605l-0.257,-1.545l1.158,-0.515l-0.258,-1.030l-1.287,-0.514l0.901,-1.158l-1.157,-1.030l-0.645,-3.089l1.030,-0.516l-0.385,-3.347l0.513,-2.703l0.773,-2.447l1.673,-1.030l-0.900,-2.574l0,-2.446l2.060,-1.802l0,-2.189l1.415,-2.702l0.129,-2.447l-0.772,-0.514l-1.287,-4.636l1.672,-2.831l-0.257,-2.575l1.030,-2.446l1.802,-2.574l1.802,-1.673l-0.772,-1.031l0.515,-0.900l0,-4.378l2.960,-1.415l0.902,-2.704l-0.386,-0.772l2.316,-2.447l3.477,0.644l1.544,2.060l1.030,-2.187l3.089,0.127l0.515,0.515l4.892,4.377l2.188,0.387l3.348,2.059l2.703,1.030l0.386,1.157l-2.574,4.121l2.702,0.772l2.961,0.387l2.189,-0.387l2.446,-2.059l0.386,-2.445l-1.416,0.516zM282.761,371.99l3.475,1.674l3.733,0.642l-1.159,1.417l-2.574,0.130l-1.416,-1.031l-1.546,0l-2.960,0l0.129,-5.923l0.901,1.160l-1.417,-1.931z";
}, function($ctx1) {$ctx1.fill(self,"Argentina",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Armenia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M582.697,116.33l3.605,-0.515l0.642,0.772l1.032,0.386l-0.516,0.773l1.416,0.900l-0.772,0.902l1.159,0.643l1.158,0.516l0.129,1.801l-1.029,0.129l-1.032,-1.544l0,-0.515l-1.287,0.129l-0.771,-0.772l-0.516,0l-1.029,-0.773l-2.059,-0.643l0.256,-1.288l0.386,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Armenia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Australia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M863.067,336.975l1.674,0.129l0.129,3.218l-0.900,0.901l-0.258,2.188l-0.900,-0.772l-1.934,1.931l-0.514,-0.129l-1.672,-0.129l-1.675,-2.316l-0.385,-1.803l-1.545,-2.318l0.127,-1.287l1.674,0.259l2.576,0.901l1.545,-0.258l-2.058,0.515zM805.011,313.803l-2.832,1.288l-2.317,0.643l-0.513,1.416l-1.034,1.159l-2.185,0l-1.803,0.256l-2.318,-0.513l-1.930,0.386l-1.930,0.127l-1.546,1.417l-0.772,-0.128l-1.416,0.772l-1.287,0.772l-1.932,-0.128l-1.800,0l-2.834,-1.674l-1.416,-0.514l0,-1.545l1.289,-0.387l0.515,-0.515l-0.131,-1.029l0.387,-1.932l-0.256,-1.545l-1.547,-2.702l-0.386,-1.546l0.129,-1.545l-1.030,-1.801l-0.127,-0.773l-1.160,-1.030l-0.387,-2.058l-1.545,-2.189l-0.384,-1.160l1.287,1.160l-1.029,-2.447l1.416,0.774l0.771,1.030l0,-1.417l-1.416,-2.061l-0.258,-0.900l-0.644,-0.773l0.386,-1.545l0.516,-0.644l0.387,-1.415l-0.258,-1.546l1.029,-1.930l0.258,2.060l1.158,-1.932l2.188,-0.900l1.287,-1.160l2.060,-0.901l1.159,-0.257l0.773,0.387l2.188,-1.029l1.544,-0.258l0.516,-0.644l0.643,-0.257l1.545,0.128l2.832,-0.901l1.418,-1.160l0.640,-1.414l1.676,-1.416l0.129,-1.030l0,-1.417l1.930,-2.318l1.158,2.318l1.031,-0.514l-0.902,-1.287l0.902,-1.287l1.156,0.516l0.260,-2.061l1.545,-1.289l0.643,-1.028l1.289,-0.516l0.127,-0.773l1.158,0.386l0,-0.643l1.158,-0.387l1.416,-0.385l1.930,1.157l1.547,1.675l1.671,0l1.676,0.258l-0.515,-1.545l1.287,-2.060l1.158,-0.772l-0.385,-0.643l1.158,-1.545l1.672,-1.031l1.289,0.385l2.317,-0.514l-0.129,-1.416l-1.932,-0.900l1.418,-0.388l1.801,0.775l1.416,1.029l2.316,0.772l0.774,-0.387l1.674,0.902l1.544,-0.773l1.030,0.258l0.644,-0.516l1.158,1.289l-0.644,1.416l-1.029,1.157l-0.903,0l0.260,1.160l-0.773,1.286l-0.901,1.289l0.127,0.772l2.190,1.545l2.058,0.900l1.418,0.902l1.930,1.544l0.771,0l1.418,0.773l0.387,0.772l2.574,0.900l1.801,-0.900l0.516,-1.416l0.513,-1.289l0.387,-1.415l0.772,-2.188l-0.385,-1.286l0.127,-0.775l-0.256,-1.542l0.387,-2.062l0.513,-0.514l-0.386,-0.901l0.644,-1.417l0.516,-1.414l0,-0.772l1.029,-1.032l0.772,1.288l0.130,1.674l0.641,0.385l0.131,1.029l1.029,1.417l0.258,1.544l-0.129,1.031l0.902,2.061l1.801,-1.031l0.903,1.158l1.285,1.031l-0.256,1.158l0.515,2.317l0.387,1.416l0.641,0.257l0.773,2.319l-0.256,1.414l0.901,1.805l2.961,1.414l1.800,1.288l1.803,1.159l-0.258,0.642l1.545,1.674l1.030,2.961l1.031,-0.642l1.158,1.286l0.643,-0.516l0.386,2.961l1.932,1.544l1.287,1.030l2.061,2.189l0.771,2.189l0.129,1.545l-0.260,1.674l1.289,2.316l-0.129,2.317l-0.515,1.287l-0.645,2.447l0,1.545l-0.513,1.930l-1.159,2.446l-2.058,1.288l-0.903,2.060l-0.900,1.415l-0.902,2.317l-1.030,1.288l-0.642,2.060l-0.387,1.802l0.129,0.900l-1.545,0.902l-2.961,0.128l-2.445,1.031l-1.287,1.030l-1.674,1.157l-2.188,-1.157l-1.675,-0.515l0.517,-1.287l-1.547,0.516l-2.316,1.929l-2.316,-0.773l-1.547,-0.385l-1.545,-0.258l-2.572,-0.772l-1.803,-1.674l-0.516,-2.060l-0.644,-1.288l-1.287,-1.157l-2.575,-0.258l0.903,-1.287l-0.645,-2.060l-1.287,1.931l-2.445,0.387l1.416,-1.416l0.386,-1.545l1.030,-1.288l-0.258,-2.059l-2.188,2.316l-1.673,0.902l-1.032,2.189l-2.058,-1.159l0.129,-1.416l-1.674,-1.932l-1.545,-1.029l0.516,-0.643l-3.348,-1.675l-1.932,0l-2.574,-1.286l-4.893,0.256l-3.474,0.902l-3.090,0.902l2.574,0.130z";
}, function($ctx1) {$ctx1.fill(self,"Australia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Austria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.996,97.278l-0.257,1.158l-1.545,0l0.643,0.643l-0.900,1.674l-0.515,0.515l-2.446,0l-1.289,0.644l-2.315,-0.258l-3.734,-0.644l-0.644,-0.900l-2.703,0.386l-0.258,0.514l-1.672,-0.386l-1.416,0l-1.160,-0.514l0.385,-0.644l-0.128,-0.515l0.903,-0.128l1.285,0.772l0.387,-0.772l2.446,0.128l1.931,-0.515l1.287,0.128l0.773,0.515l0.258,-0.386l-0.387,-1.802l1.030,-0.386l0.901,-1.158l2.058,0.772l1.417,-1.030l1.030,-0.258l2.061,0.901l1.286,-0.129l1.158,0.516l-0.127,0.256l-0.257,-0.903z";
}, function($ctx1) {$ctx1.fill(self,"Austria",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Azerbaijan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M590.292,114.27l0.643,0l1.931,1.673l1.158,0.129l0.516,-0.644l1.545,-1.030l1.416,1.417l1.417,1.802l1.286,0.129l0.774,0.773l-2.190,0.257l-0.514,2.059l-0.386,0.901l-1.031,0.644l0,1.416l-0.643,0.129l-1.674,-1.417l0.902,-1.415l-0.773,-0.773l-1.030,0.258l-3.089,1.930l-0.129,-1.801l-1.158,-0.516l-1.159,-0.643l0.772,-0.902l-1.416,-0.900l0.516,-0.773l-1.032,-0.386l-0.642,-0.772l0.129,0l0.644,-0.387l1.930,0.772l1.545,0.130l0.258,-0.258l-1.287,-1.545l-0.771,0.257zM589.521,122.637l-1.804,-0.386l-1.415,-1.288l-0.387,-1.028l0.516,0l0.771,0.772l1.287,-0.129l0,0.515l-1.032,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Azerbaijan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bangladesh",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M714.901,167.564l-0.129,1.932l-0.900,-0.387l0.127,2.189l-0.771,-1.417l-0.129,-1.415l-0.514,-1.287l-1.031,-1.545l-2.575,-0.129l0.258,1.159l-0.771,1.544l-1.158,-0.644l-0.389,0.516l-0.772,-0.258l-1.029,-0.258l-0.515,-2.188l-0.901,-2.059l0.514,-1.674l-1.672,-0.643l0.514,-1.031l1.802,-1.030l-2.060,-1.415l1.031,-1.803l2.061,1.159l1.285,0.128l0.260,1.931l2.574,0.386l2.574,-0.128l1.545,0.515l-1.289,2.317l-1.158,0.129l-0.901,1.545l1.545,1.416l0.387,-1.802l0.771,0l-1.416,-4.247z";
}, function($ctx1) {$ctx1.fill(self,"Bangladesh",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belarus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M528.503,81.701l2.574,0l2.961,-0.901l0.643,-1.545l2.189,-0.901l-0.258,-1.159l1.674,-0.514l2.831,-1.031l2.833,0.644l0.387,0.772l1.416,-0.385l2.703,0.643l0.258,1.287l-0.645,0.644l1.672,1.802l1.160,0.515l-0.129,0.515l1.803,0.387l0.772,0.772l-1.030,0.643l-2.187,-0.128l-0.516,0.257l0.644,0.901l0.643,1.674l-2.318,0.129l-0.900,0.643l-0.128,1.416l-1.031,-0.258l-2.446,0.129l-0.772,-0.643l-1.030,0.386l-0.900,-0.386l-2.189,0l-2.959,-0.644l-2.706,-0.258l-2.187,0.129l-1.417,0.644l-1.286,0.129l-0.129,-1.159l-0.772,-1.287l1.672,-0.516l0,-1.029l-0.771,-1.029l0.129,1.288z";
}, function($ctx1) {$ctx1.fill(self,"Belarus",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belgium",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M474.179,88.652l1.932,0.258l2.574,-0.643l1.673,1.158l1.416,0.644l-0.258,1.930l-0.644,0l-0.385,1.544l-2.318,-1.286l-1.416,0.257l-1.801,-1.287l-1.288,-1.029l-1.287,0l-0.385,-1.031l-2.187,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Belgium",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Belize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M225.09,179.022l0,-0.387l0.257,-0.129l0.515,0.258l1.030,-1.544l0.515,-0.130l0,0.387l0.515,0.128l-0.129,0.645l-0.386,1.159l0.258,0.513l-0.258,0.902l0.128,0.258l-0.256,1.416l-0.644,0.643l-0.387,0.129l-0.643,0.901l-0.772,0l0.257,-3.089l0,2.060z";
}, function($ctx1) {$ctx1.fill(self,"Belize",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Benin",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M472.505,210.174l-2.188,0.258l-0.773,-1.803l0.131,-6.307l-0.516,-0.515l-0.129,-1.287l-0.900,-0.902l-0.775,-0.900l0.259,-1.417l1.030,-0.256l0.515,-1.159l1.287,-0.257l0.645,-0.774l0.901,-0.773l0.901,-0.127l2.059,1.674l-0.129,0.771l0.643,1.673l-0.514,1.031l0.258,0.773l-1.288,1.672l-0.901,0.773l-0.386,1.674l0,1.802l0.130,-4.376z";
}, function($ctx1) {$ctx1.fill(self,"Benin",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bhutan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M712.198,152.117l1.158,0.901l-0.257,1.674l-2.188,0l-2.189,-0.129l-1.672,0.386l-2.447,-1.029l-0.129,-0.516l1.804,-1.931l1.414,-0.773l1.930,0.645l1.416,0.128l-1.160,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bhutan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bolivia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M295.89,286.383l-3.089,-0.127l-1.030,2.187l-1.544,-2.060l-3.477,-0.644l-2.316,2.447l-1.932,0.386l-1.028,-3.733l-1.417,-2.960l0.773,-2.576l-1.417,-1.157l-0.387,-1.933l-1.286,-1.932l1.673,-2.830l-1.158,-2.318l0.643,-0.901l-0.515,-1.029l1.159,-1.287l0,-2.317l0.128,-1.931l0.644,-0.901l-2.445,-4.248l2.060,0.127l1.415,0l0.515,-0.771l2.446,-1.160l1.416,-1.029l3.476,-0.386l-0.258,1.930l0.387,1.159l-0.258,1.802l2.960,2.317l2.962,0.515l1.030,1.030l1.801,0.515l1.159,0.772l1.673,0l1.545,0.773l0.128,1.544l0.516,0.773l0.128,1.158l-0.772,0l1.031,3.219l5.148,0.131l-0.386,1.542l0.258,1.030l1.416,0.771l0.643,1.676l-0.386,2.061l-0.772,1.158l0.257,1.544l-0.901,0.643l0,-0.902l-2.575,-1.285l-2.446,-0.130l-4.634,0.772l-1.416,2.447l0,1.414l-1.030,3.219l0.515,0.515z";
}, function($ctx1) {$ctx1.fill(self,"Bolivia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BosniaandHerzegovina",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.403,106.159l1.030,0l-0.645,1.159l1.289,1.030l-0.389,1.287l-1.158,0.387l-0.900,0.515l-0.387,1.545l-2.445,-1.030l-1.031,-1.159l-0.901,-0.514l-1.286,-1.031l-0.643,-0.901l-1.290,-1.158l0.516,-1.159l1.031,0.643l0.643,-0.643l1.159,0l2.316,0.386l1.931,0l-1.160,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"BosniaandHerzegovina",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Botswana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M534.296,276.857l0.516,0.516l0.900,1.544l3.089,2.962l1.158,0.256l0,1.030l0.772,1.674l2.061,0.385l1.673,1.290l-3.734,1.929l-2.445,2.059l-0.901,1.804l-0.773,1.030l-1.545,0.128l-0.386,1.287l-0.258,0.901l-1.801,0.645l-2.188,-0.129l-1.288,-0.773l-1.159,-0.387l-1.287,0.644l-0.642,1.286l-1.287,0.775l-1.290,1.287l-1.929,0.256l-0.645,-0.901l0.258,-1.673l-1.544,-2.575l-0.772,-0.386l0,-7.852l2.574,-0.130l0.129,-9.654l2.060,0l4.119,-1.030l1.029,1.158l1.674,-1.028l0.901,0l1.416,-0.645l0.515,0.259l-1.030,-2.058z";
}, function($ctx1) {$ctx1.fill(self,"Botswana",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Brazil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l3.605,-3.732l2.961,-2.576l1.801,-1.158l2.319,-1.416l0,-2.189l-1.288,-1.544l-1.416,0.516l0.515,-1.546l0.386,-1.545l0,-1.544l-0.901,-0.516l-1.031,0.516l-1.028,-0.129l-0.259,-1.031l-0.256,-2.443l-0.516,-0.903l-1.801,-0.642l-1.160,0.513l-2.831,-0.513l0.128,-3.736l-0.772,-1.415l0.901,-0.643l-0.257,-1.544l0.772,-1.158l0.386,-2.061l-0.643,-1.676l-1.416,-0.771l-0.258,-1.030l0.386,-1.542l-5.148,-0.131l-1.031,-3.219l0.772,0l-0.128,-1.158l-0.516,-0.773l-0.128,-1.544l-1.545,-0.773l-1.673,0l-1.159,-0.772l-1.801,-0.515l-1.030,-1.030l-2.962,-0.515l-2.960,-2.317l0.258,-1.802l-0.387,-1.159l0.258,-1.930l-3.476,0.386l-1.416,1.029l-2.446,1.160l-0.515,0.771l-1.415,0l-2.060,-0.127l-1.416,0.384l-1.287,-0.257l0.256,-4.119l-2.317,1.545l-2.317,0l-1.030,-1.416l-1.801,-0.129l0.644,-1.158l-1.546,-1.674l-1.158,-2.445l0.772,-0.516l0,-1.158l1.545,-0.773l-0.257,-1.416l0.772,-0.901l0.129,-1.288l3.089,-1.802l2.188,-0.515l0.386,-0.514l2.446,0.129l1.159,-7.338l0.129,-1.159l-0.515,-1.544l-1.159,-1.030l0,-1.931l1.545,-0.387l0.515,0.258l0.129,-1.029l-1.545,-0.258l-0.129,-1.674l5.278,0l0.900,-0.902l0.773,0.902l0.515,1.545l0.516,-0.387l1.544,1.417l2.060,-0.129l0.515,-0.772l1.930,-0.644l1.159,-0.515l0.257,-1.159l1.931,-0.772l-0.128,-0.514l-2.188,-0.259l-0.387,-1.672l0,-1.804l-1.158,-0.643l0.514,-0.257l2.060,0.257l2.059,0.773l0.774,-0.643l1.930,-0.515l3.090,-0.902l0.900,-1.030l-0.257,-0.772l1.287,-0.129l0.644,0.643l-0.257,1.159l0.900,0.386l0.644,1.288l-0.772,0.902l-0.515,2.316l0.773,1.287l0.128,1.287l1.674,1.288l1.287,0.128l0.386,-0.515l0.772,-0.128l1.288,-0.515l0.901,-0.644l1.416,0.259l0.643,-0.130l1.546,0.130l0.257,-0.517l-0.516,-0.514l0.259,-0.773l1.158,0.259l1.159,-0.259l1.545,0.515l1.287,0.516l0.772,-0.644l0.643,0.128l0.387,0.772l1.287,-0.256l1.030,-1.031l0.772,-1.930l1.545,-2.446l1.029,-0.128l0.645,1.415l1.544,4.763l1.416,0.386l0,1.931l-1.931,2.189l0.773,0.772l4.763,0.387l0.128,2.702l2.059,-1.674l3.348,0.902l4.505,1.674l1.288,1.545l-0.387,1.545l3.090,-0.901l5.278,1.415l3.991,0l3.990,2.189l3.476,2.961l2.059,0.772l2.318,0.128l0.900,0.902l0.901,3.475l0.516,1.545l-1.159,4.505l-1.287,1.675l-3.862,3.863l-1.674,2.959l-2.059,2.317l-0.643,0.129l-0.773,1.931l0.257,5.020l-0.773,4.250l-0.256,1.672l-0.902,1.158l-0.515,3.605l-2.703,3.475l-0.387,2.833l-2.187,1.158l-0.644,1.546l-2.960,0l-4.249,1.028l-1.931,1.288l-2.960,0.773l-3.219,2.060l-2.188,2.703l-0.386,2.060l0.386,1.416l-0.515,2.703l-0.644,1.416l-1.803,1.416l-2.960,4.764l-2.446,2.189l-1.802,1.157l-1.287,2.574l-1.673,1.545l-0.772,-1.545l1.158,-1.286l-1.545,-1.804l-2.189,-1.414l-2.702,-1.805l-1.030,0.130l-2.704,-2.059l1.674,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Brazil",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BruneiDarussalam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M772.829,214.809l1.160,-1.030l2.315,-1.416l-0.127,1.287l-0.260,1.674l-1.285,0l-0.516,0.902l1.287,1.417z";
}, function($ctx1) {$ctx1.fill(self,"BruneiDarussalam",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Bulgaria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.314,107.833l0.773,1.030l1.031,-0.129l2.059,0.386l3.990,0.130l1.287,-0.644l3.219,-0.644l1.930,1.030l1.544,0.258l-1.416,1.158l-0.900,1.931l0.772,1.416l-2.317,-0.257l-2.705,0.772l0,1.417l-2.445,0.256l-1.930,-1.029l-2.187,0.773l-1.932,-0.130l-0.258,-1.674l-1.287,-0.900l0.385,-0.387l-0.256,-0.386l0.515,-0.772l1.030,-0.901l-1.415,-1.158l-0.259,-0.902l-0.772,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Bulgaria",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "BurkinaFaso",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,201.035l-1.802,-0.773l-1.287,0.129l-0.902,0.644l-1.286,-0.515l-0.387,-0.902l-1.287,-0.643l-0.128,-1.545l0.771,-1.159l-0.128,-0.900l2.189,-2.189l0.385,-1.802l0.773,-0.644l1.287,0.257l1.159,-0.514l0.257,-0.645l2.189,-1.285l0.514,-0.774l2.446,-1.158l1.545,-0.387l0.644,0.516l1.673,0l-0.129,1.287l0.258,1.287l1.545,1.673l0.128,1.417l3.091,0.515l0,1.930l-0.645,0.774l-1.287,0.257l-0.515,1.159l-1.030,0.256l-2.317,0l-1.288,-0.256l-0.770,0.514l-1.289,-0.258l-4.634,0.129l-0.129,1.545l-0.386,-2.060z";
}, function($ctx1) {$ctx1.fill(self,"BurkinaFaso",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Burundi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M544.208,239.14l-0.130,-3.347l-0.643,-1.159l1.673,0.258l0.773,-1.545l1.415,0.128l0.131,1.030l0.642,0.643l0,0.903l-0.642,0.513l-1.030,1.416l-1.031,1.032l1.158,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Burundi",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cambodia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M743.995,198.331l-1.031,-1.415l-1.416,-2.834l-0.643,-3.217l1.801,-2.189l3.475,-0.514l2.447,0.387l2.316,1.029l1.160,-1.803l2.446,0.901l0.644,1.803l-0.386,3.218l-4.506,2.059l1.160,1.674l-2.834,0.258l-2.316,1.030l2.317,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cambodia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cameroon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.439,220.859l-0.256,-0.129l-1.674,0.387l-1.673,-0.387l-1.288,0.129l-4.378,0l0.387,-2.188l-1.029,-1.802l-1.158,-0.387l-0.516,-1.287l-0.772,-0.386l0,-0.643l0.772,-1.932l1.289,-2.575l0.771,-0.128l1.544,-1.545l1.029,0l1.546,1.030l1.803,-0.901l0.257,-1.029l0.644,-1.159l0.387,-1.288l1.414,-1.159l0.645,-1.931l0.513,-0.514l0.387,-1.417l0.773,-1.673l2.188,-2.189l0.129,-0.901l0.387,-0.386l-1.160,-1.158l0.128,-0.773l0.774,-0.257l1.029,1.801l0.258,1.804l-0.128,1.802l1.415,2.446l-1.415,-0.129l-0.774,0.257l-1.287,-0.257l-0.514,1.287l1.545,1.546l1.158,0.385l0.387,1.160l0.900,1.930l-0.515,0.644l-1.287,2.702l-0.643,0.515l-0.258,2.060l0.258,1.160l-0.258,0.772l1.288,1.416l0.257,1.029l1.031,1.416l1.157,0.773l0.129,1.287l0.387,0.772l-0.259,1.416l-2.187,-0.643l-2.062,-0.644l3.475,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Cameroon",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Canada",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M212.989,24.93l-1.416,1.159l-3.862,-0.257l-3.347,-0.644l1.417,-1.288l3.990,-0.772l2.317,1.030l-0.901,-0.772zM212.474,18.107l-1.287,0.130l-5.020,-0.130l-0.772,-0.772l5.535,0l1.802,0.515l0.258,-0.257zM204.622,14.761l3.218,0.901l-0.772,1.030l-3.991,0.515l-2.188,-0.644l-1.159,-0.901l-0.257,-1.159l3.604,0.129l-1.545,-0.129zM227.793,26.604l-4.377,-0.387l-7.208,-0.900l-0.901,-1.417l-0.258,-1.287l-2.703,-1.287l-5.664,-0.257l-3.090,-0.901l1.030,-1.031l5.535,0.130l2.962,0.901l5.406,0l2.317,0.901l-0.643,1.029l3.089,0.515l1.673,0.643l3.605,0.130l3.990,0.257l4.248,-0.643l5.535,-0.129l4.377,0.129l2.832,1.029l0.644,1.159l-1.674,0.644l-3.991,0.644l-3.475,-0.387l-7.724,0.387l5.535,-0.128zM165.489,16.434l3.862,0.386l-0.902,0.901l-5.020,0.772l-3.991,-0.900l2.188,-0.901l-3.863,0.258zM166.261,14.632l3.604,0.644l-3.347,0.515l-4.505,0l0.128,-0.387l2.704,-0.901l-1.416,-0.129zM205.137,40.636l2.703,1.158l-1.673,0.902l-3.605,-1.031l-2.188,0.516l-3.090,-0.387l1.803,-1.673l1.931,-1.159l2.059,0.643l-2.060,-1.031zM315.458,88.781l-1.417,1.673l-1.802,2.317l1.802,-0.900l1.802,0.643l-1.030,0.902l2.447,0.772l1.287,-0.772l2.574,0.901l-0.772,1.930l1.931,-0.386l0.257,1.417l0.901,1.673l-1.158,2.317l-1.288,0.129l-1.673,-0.515l0.515,-2.189l-0.772,-0.386l-3.089,2.317l-1.545,0l1.801,-1.287l-2.574,-0.644l-2.832,0.130l-5.278,-0.130l-0.386,-0.772l1.674,-0.901l-1.159,-0.773l2.317,-1.673l2.702,-4.248l1.675,-1.545l2.317,-0.901l1.288,0.129l0.515,-0.772zM239.25,51.578l2.960,0.901l3.090,0.901l0.258,1.287l1.930,-0.257l1.931,0.900l-2.316,0.903l-4.249,-0.774l-1.544,-1.158l-2.575,1.416l-3.861,1.416l-0.902,-1.544l-3.733,0.257l2.317,-1.416l0.386,-2.060l0.901,-2.445l1.931,0.257l0.515,1.158l1.417,-0.514l-1.544,-0.772zM218.525,6.393l7.080,-0.643l5.278,-0.386l5.921,-0.130l3.604,-1.415l11.199,-0.773l9.656,0.129l7.723,-0.386l18.924,0.514l10.555,1.802l-6.565,1.159l-6.437,0.515l-2.445,0.644l5.792,0l-10.684,2.317l-10.169,2.704l-9.913,0.900l3.734,0.258l-1.931,0.515l2.317,1.287l-6.694,1.674l-1.287,1.159l-3.863,0.772l0.387,0.643l3.604,0.258l0,0.644l-6.049,1.158l-7.081,-0.643l-7.981,0.386l-9.012,-0.515l-0.385,-1.288l5.020,-0.643l-1.158,-0.902l2.187,-0.900l6.437,0.900l-7.981,-2.316l2.188,-1.030l4.763,-0.644l0.773,-0.901l-3.862,-1.030l-1.159,-1.416l7.338,0.129l6.437,-0.644l-15.577,-0.128l-4.762,-1.031l-5.407,-1.802l0.515,0.901zM253.024,32.01l2.574,-1.030l5.922,1.417l3.734,1.287l0.385,1.158l5.020,-0.643l2.833,1.674l6.437,1.158l2.317,1.030l2.574,2.575l-4.891,1.158l6.307,1.803l4.248,0.643l3.862,2.446l4.248,0.128l-0.773,1.932l-4.763,3.089l-3.347,-1.158l-4.248,-2.575l-3.476,0.386l-0.257,1.545l2.832,1.545l3.605,1.287l1.159,0.644l1.673,2.704l-0.902,1.930l-3.347,-0.772l-6.821,-2.061l3.862,2.318l2.702,1.545l0.516,1.030l-7.339,-1.159l-5.793,-1.545l-3.218,-1.286l0.903,-0.774l-3.991,-1.415l-3.992,-1.287l0.129,0.772l-7.853,0.386l-2.188,-0.901l1.675,-1.931l5.149,-0.129l5.535,-0.257l-0.901,-1.031l0.901,-1.287l3.475,-2.702l-0.772,-1.159l-1.030,-0.901l-4.120,-1.288l-5.406,-0.901l1.674,-0.772l-2.832,-1.674l-2.317,-0.129l-2.189,-0.900l-1.416,0.772l-4.891,0.385l-9.784,-0.643l-5.664,-0.772l-4.377,-0.386l-2.317,-0.901l2.832,-1.287l-3.862,0l-0.772,-2.704l2.059,-2.446l2.704,-1.030l6.951,-0.772l-1.931,1.802l2.188,1.674l2.447,-2.189l6.823,-1.159l4.633,2.832l-0.386,1.675l-5.278,0.774zM210.672,27.248l5.536,0.128l5.148,0.645l-3.989,2.445l-3.219,0.514l-2.833,1.932l-3.088,-0.128l-1.675,-2.318l0,-1.287l1.417,-1.158l-2.703,0.773zM206.552,9.869l1.931,-0.901l2.704,-0.128l-1.159,-0.644l6.308,-0.129l3.348,1.416l8.753,1.673l5.664,2.060l-3.733,0.772l-5.021,2.060l-4.763,0.258l-5.535,-0.386l-2.961,-1.031l0.129,-1.030l2.059,-0.772l-4.891,0.129l-2.961,-0.902l-1.673,-1.287l-1.801,1.158zM194.71,31.109l-2.832,-2.574l2.961,-0.514l3.218,0.643l4.119,-0.258l0.515,1.030l-1.544,0.901l3.604,1.803l-0.644,1.416l-3.862,1.415l-2.574,-0.257l-1.803,-1.030l-5.535,-1.544l-1.673,-1.160l-6.050,-0.129zM178.233,30.08l3.089,1.158l1.674,2.574l0.772,1.932l4.634,1.287l4.764,1.287l-0.258,1.159l-4.377,0.257l1.673,1.030l-0.900,1.030l-6.436,0l-1.804,-0.644l-4.376,-0.386l-5.278,1.545l-6.565,0.644l-3.604,0.128l-2.704,-2.059l-6.050,-0.386l-4.505,-1.674l2.960,-0.772l4.119,-0.386l3.863,0.129l3.475,-0.516l-5.149,-0.644l-5.793,0.258l-3.862,-0.129l-1.416,-0.901l6.308,-1.159l-4.249,0.129l-4.634,-0.772l2.189,-2.059l1.932,-1.031l7.208,-1.673l2.703,0.515l-1.287,1.287l5.922,-0.772l3.861,1.287l2.961,-1.287l2.446,0.901l2.189,2.574l1.416,-1.157l-1.932,-2.704l2.446,-0.387l-2.575,-0.387zM174.757,22.613l2.446,-0.385l2.832,0.128l0.385,1.287l-1.543,1.287l-9.141,0.387l-6.822,1.159l-4.120,0.128l-0.257,-0.901l5.535,-1.159l-12.228,0.257l-3.734,-0.514l3.734,-2.575l2.445,-0.772l7.596,0.901l4.891,1.673l4.634,0.129l-3.862,-2.574l2.446,-1.030l1.803,0.643l0.900,1.287l-2.060,-0.644zM134.336,21.969l4.506,-2.059l5.535,-1.803l4.120,0.130l3.732,-0.387l-0.385,2.060l-2.060,0.901l-2.575,0.129l-5.020,1.158l-4.248,0.386l3.605,0.515zM137.812,26.476l3.862,0.514l6.823,0.129l2.703,0.772l2.832,1.158l-3.347,0.644l-6.694,1.674l-3.991,2.060l-0.643,1.287l-5.664,1.287l-1.802,-1.030l-5.922,-1.544l0.129,-0.902l2.188,-2.317l2.060,-1.159l-1.673,-2.188l-9.139,0.385zM107.69,81.443l2.574,-0.256l-0.773,3.088l2.318,2.188l-1.030,0l-1.674,-1.287l-0.900,-1.287l-1.416,-0.772l-0.516,-1.158l0.130,-0.902l-1.287,-0.386zM199.73,20.682l1.288,0.901l0,1.417l-1.416,1.801l-3.218,0.387l-2.961,-0.387l0.129,-1.545l-4.507,0.130l-0.128,-2.060l2.961,0.129l3.990,-0.901l-3.862,-0.128zM181.064,13.344l5.279,0.387l7.337,0.901l2.060,1.288l1.030,1.158l-4.377,-0.258l-4.506,-0.900l-5.922,-0.129l2.576,-0.773l-3.348,-0.644l0.129,1.030zM127.385,92.386l1.288,1.287l2.702,1.158l1.160,1.416l-1.417,0.387l-4.376,-1.159l-0.773,-1.029l-2.446,-0.903l-0.515,-0.772l-2.703,-0.514l-1.030,-1.416l0.129,-0.643l2.832,0.643l1.673,0.386l2.575,0.257l-0.901,-0.902zM315.071,83.502l0.129,2.961l-1.931,1.031l-1.932,0.901l-4.376,1.030l-3.476,2.188l-4.505,0.386l-5.793,-0.515l-3.990,0l-2.832,0.129l-2.318,1.930l-3.346,1.288l-3.863,3.476l-3.089,2.575l2.189,-0.515l4.376,-3.476l5.664,-2.317l3.991,-0.257l2.445,1.286l-2.573,1.932l0.772,2.832l0.901,2.060l3.476,1.287l4.504,-0.387l2.704,-2.960l0.258,1.931l1.673,1.029l-3.347,1.674l-5.921,1.674l-2.703,1.029l-2.961,1.931l-2.060,-0.128l-0.128,-2.317l4.633,-2.189l-4.247,0l-2.961,0.387l-1.803,-1.545l0,-3.605l-1.157,-0.772l-1.804,0.386l-0.900,-0.644l-2.060,1.932l-0.901,2.187l-0.902,1.159l-1.158,0.515l-0.901,0l-0.258,0.772l-4.891,0l-4.120,0l-1.287,0.516l-2.703,1.801l-0.387,0.258l-0.256,0.258l-0.387,0.386l-0.257,0.515l-0.643,0l-0.516,0l-0.901,0l-0.772,-0.128l-0.902,0l-0.643,0l-0.772,0.128l-0.258,0l-0.515,0.257l-0.386,0.129l0.257,0.386l0,0.129l0.387,0.772l0,0.258l0,0.128l-0.258,0.130l-0.386,0.128l-0.772,0.258l-0.902,0.257l-0.643,0.257l-0.643,0.258l-0.644,0.129l-0.128,0l-0.387,0l-0.900,0.128l-0.645,0.129l-0.644,0.258l-0.643,0.385l-0.644,0.258l-0.644,0.257l-0.643,0.258l-0.644,0l-0.514,-0.129l-0.387,-0.257l-0.257,-0.257l0,-0.130l0,-0.257l0.644,-0.900l1.286,-1.546l0,-0.128l0,-0.129l0.259,-0.515l0.385,-0.515l0.129,-0.258l-0.258,-0.772l-0.129,-0.515l0,-0.386l-0.127,-0.515l-0.130,-0.515l-0.129,-0.515l-0.128,-0.386l-0.130,-0.515l0,-0.257l-0.128,-0.387l-0.515,-0.386l-0.514,-0.128l-0.644,-0.258l-0.643,-0.257l-0.516,-0.257l0.386,-0.515l0,-0.129l-0.128,0l-0.258,-0.258l-0.128,0l-0.258,0.128l-0.386,-0.128l-0.258,-0.129l-0.128,0l-0.129,-0.257l-0.129,0l0,-0.258l0,-0.128l0,-0.129l0,-0.129l-0.257,0l-0.258,0.258l-0.772,0l0.128,-0.258l-0.257,0l-0.386,-0.257l-0.128,-0.387l-0.130,-0.386l-0.514,-0.257l-0.515,-0.129l-0.515,-0.258l-0.515,-0.257l-0.515,-0.128l-0.515,-0.258l-0.515,-0.258l-0.514,-0.128l-0.258,-0.128l-0.387,-0.130l-0.643,-0.257l-0.772,-0.386l-0.772,-0.258l-0.773,-0.257l-0.386,-0.257l-0.258,0l-0.386,-0.258l-0.644,-0.129l-0.643,0.129l-0.772,0.258l-0.387,0.128l-0.386,0.129l-0.258,0.129l-0.515,0l-0.385,0l-3.219,-0.773l-2.188,0.387l-2.703,-0.773l-2.704,-0.515l-1.930,-0.129l-0.772,-0.514l-0.516,-1.417l-0.901,0l0,1.030l-5.536,0l-9.139,0l-9.397,0l-32.182,0l-2.704,0l-15.962,0l-5.149,-2.574l-1.931,-1.287l-4.891,-1.030l-1.545,-2.446l0.385,-1.673l-3.474,-1.031l-0.387,-2.188l-3.348,-2.061l0,-1.287l1.417,-1.287l0,-1.802l-4.634,-1.673l-2.703,-3.090l-1.674,-1.930l-2.446,-1.159l-1.802,-1.159l-1.545,-1.417l-2.703,0.902l-2.575,1.545l-2.445,-1.803l-1.802,-1.157l-2.704,-0.774l-2.574,0l0,-15.446l0,-9.913l5.019,0.644l4.249,1.286l2.832,0.258l2.317,-1.158l3.347,-0.901l3.990,0.385l3.992,-1.157l4.376,-0.644l1.931,1.029l1.931,-0.644l0.643,-1.158l1.803,0.257l4.634,2.447l3.604,-1.931l0.387,2.059l3.218,-0.387l1.029,-0.772l3.219,0.129l4.120,1.159l6.307,0.901l3.733,0.515l2.704,-0.129l3.604,1.288l-3.734,1.415l4.763,0.515l7.338,-0.257l2.317,-0.515l2.832,1.544l2.960,-1.287l-2.832,-1.158l1.803,-0.901l3.218,-0.129l2.189,-0.258l2.188,0.644l2.703,1.417l2.961,-0.258l4.763,1.287l4.248,-0.386l3.862,0l-0.258,-1.673l2.446,-0.515l4.120,0.900l0,2.576l1.673,-2.060l2.188,0l1.288,-2.704l-2.962,-1.673l-3.088,-1.030l0.128,-2.961l3.218,-2.060l3.605,0.515l2.703,1.158l3.604,3.091l-2.317,1.287l5.020,0.514l0,2.832l3.605,-2.189l3.218,1.804l-0.900,1.930l2.702,1.802l2.704,-1.931l2.060,-2.317l0.129,-2.960l3.861,0.257l3.862,0.387l3.733,1.287l0.128,1.416l-2.059,1.416l1.931,1.416l-0.386,1.286l-5.277,1.932l-3.734,0.386l-2.704,-0.772l-0.901,1.287l-2.574,2.317l-0.773,1.159l-3.089,1.802l-3.862,0.257l-2.188,1.031l-0.130,1.802l-3.089,0.386l-3.347,2.188l-2.961,2.961l-1.028,2.188l-0.130,3.090l3.991,0.386l1.159,2.576l1.287,2.059l3.733,-0.515l5.020,1.159l2.704,1.029l1.930,1.288l3.347,0.643l2.832,1.158l4.507,0.129l2.959,0.258l-0.514,2.446l0.901,2.702l1.931,2.961l3.991,2.576l2.059,-0.902l1.545,-2.703l-1.416,-4.247l-1.931,-1.545l4.247,-1.159l3.090,-1.931l1.545,-1.931l-0.257,-1.803l-1.802,-2.188l-3.348,-2.060l3.219,-2.832l-1.158,-2.445l-0.902,-4.249l1.931,-0.514l4.506,0.643l2.832,0.257l2.188,-0.644l2.575,0.902l3.347,1.545l0.772,1.029l4.763,0.259l0,2.187l0.901,3.476l2.446,0.386l1.931,1.545l3.862,-1.416l2.574,-2.961l1.802,-1.287l2.060,2.446l3.605,3.347l2.960,3.218l-1.159,1.802l3.604,1.417l2.446,1.545l4.249,0.772l1.802,0.772l1.030,2.317l2.060,0.387l-1.158,-1.028z";
}, function($ctx1) {$ctx1.fill(self,"Canada",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CentralAfricanRepublic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M506.361,206.957l2.318,-0.129l0.384,-0.773l0.517,0.129l0.642,0.515l3.349,-1.029l1.157,-1.031l1.416,-0.901l-0.256,-0.900l0.772,-0.259l2.574,0.130l2.574,-1.287l1.932,-2.962l1.417,-1.030l1.672,-0.514l0.258,1.157l1.545,1.674l0,1.159l-0.387,1.159l0.129,0.773l1.029,0.771l2.059,1.159l1.419,1.159l0,0.901l1.800,1.287l1.159,1.287l0.643,1.544l2.059,1.031l0.389,0.901l-0.903,0.257l-1.674,0l-2.058,-0.257l-0.901,0.129l-0.514,0.643l-0.775,0.129l-1.158,-0.514l-2.961,1.287l-1.287,-0.258l-0.258,0.258l-0.900,1.544l-1.930,-0.514l-2.060,-0.258l-1.674,-1.030l-2.190,-0.900l-1.415,0.900l-1.030,1.417l-0.258,1.802l-1.800,-0.130l-1.803,-0.514l-1.545,1.544l-1.415,2.446l-0.387,-0.772l-0.129,-1.287l-1.157,-0.773l-1.031,-1.416l-0.257,-1.029l-1.288,-1.416l0.258,-0.772l-0.258,-1.160l0.258,-2.060l0.643,-0.515l-1.287,2.702z";
}, function($ctx1) {$ctx1.fill(self,"CentralAfricanRepublic",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chad",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M504.302,192.281l0.258,-1.158l-1.674,-0.130l0,-1.673l-1.158,-1.029l1.158,-3.605l3.475,-2.446l0.130,-3.605l1.030,-5.406l0.514,-1.159l-1.030,-0.901l-0.129,-0.901l-1.029,-0.643l-0.643,-4.249l2.702,-1.416l10.815,5.149l11.069,5.407l-0.258,10.427l-2.316,-0.257l-1.158,2.060l-0.774,1.673l0.643,0.643l-0.901,0.772l0.258,1.159l-0.643,1.030l-0.259,1.031l0.902,-0.129l0.517,1.030l0.126,1.544l0.902,0.772l0,0.645l-1.672,0.514l-1.417,1.030l-1.932,2.962l-2.574,1.287l-2.574,-0.130l-0.772,0.259l0.256,0.900l-1.416,0.901l-1.157,1.031l-3.349,1.029l-0.642,-0.515l-0.517,-0.129l-0.384,0.773l-2.318,0.129l0.515,-0.644l-0.900,-1.930l-0.387,-1.160l-1.158,-0.385l-1.545,-1.546l0.514,-1.287l1.287,0.257l0.774,-0.257l1.415,0.129l-1.415,-2.446l0.128,-1.802l-0.258,-1.804l1.029,1.801z";
}, function($ctx1) {$ctx1.fill(self,"Chad",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Chile",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M266.669,369.286l-3.347,-1.544l-0.772,-1.675l0.644,-1.544l-1.288,-1.802l-0.386,-4.634l1.158,-2.574l2.832,-2.061l-3.990,-0.772l2.445,-2.446l1.030,-4.505l2.962,1.031l1.416,-5.666l-1.802,-0.642l-0.902,3.345l-1.674,-0.386l0.902,-3.862l0.901,-5.020l1.159,-1.801l-0.773,-2.576l-0.129,-3.090l1.030,-0.128l1.673,-4.249l1.932,-4.376l1.158,-3.991l-0.643,-3.990l0.772,-2.317l-0.387,-3.347l1.674,-3.218l0.386,-5.278l0.901,-5.535l0.902,-6.051l-0.259,-4.378l-0.513,-3.862l1.415,-0.644l0.644,-1.417l1.286,1.932l0.387,1.933l1.417,1.157l-0.773,2.576l1.417,2.960l1.028,3.733l1.932,-0.386l0.386,0.772l-0.902,2.704l-2.960,1.415l0,4.378l-0.515,0.900l0.772,1.031l-1.802,1.673l-1.802,2.574l-1.030,2.446l0.257,2.575l-1.672,2.831l1.287,4.636l0.772,0.514l-0.129,2.447l-1.415,2.702l0,2.189l-2.060,1.802l0,2.446l0.900,2.574l-1.673,1.030l-0.773,2.447l-0.513,2.703l0.385,3.347l-1.030,0.516l0.645,3.089l1.157,1.030l-0.901,1.158l1.287,0.514l0.258,1.030l-1.158,0.515l0.257,1.545l-0.900,3.605l-1.546,2.316l0.386,1.288l-0.901,1.674l-2.060,1.288l0.258,2.831l0.902,0.902l1.801,-0.129l0,2.060l1.160,1.545l6.436,0.385l2.574,0.387l-2.446,0l-1.288,0.643l-2.444,1.029l-0.387,2.447l-1.159,0.129l-3.090,-0.902l3.089,1.931zM283.274,374.822l1.546,0l-0.902,1.157l-2.316,0.774l-1.288,0l-1.544,-0.256l-1.932,-0.774l-2.831,-0.386l-3.476,-1.545l-2.704,-1.416l-3.732,-3.090l2.188,0.645l3.862,1.802l3.476,0.901l1.416,-1.159l0.901,-1.932l2.445,-1.029l1.931,0.258l0.129,0.127l-0.129,5.923l-2.960,0z";
}, function($ctx1) {$ctx1.fill(self,"Chile",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "China",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M760.085,177.992l-2.188,-0.902l0,-2.317l1.288,-1.158l2.961,-0.773l1.544,0l0.645,1.031l-1.289,1.287l-0.514,1.545l2.447,-1.287zM712.198,152.117l-1.160,-0.644l-1.416,-0.128l-1.930,-0.645l-1.414,0.773l-1.804,1.931l-0.258,-2.059l-1.543,0.514l-3.221,-0.257l-2.959,-0.644l-2.189,-1.158l-2.188,-0.515l-0.900,-1.288l-1.545,-0.386l-2.703,-1.802l-2.061,-0.772l-1.158,0.643l-3.732,-1.930l-2.704,-1.674l-0.773,-2.960l1.932,0.385l0.129,-1.416l-1.030,-1.416l0.256,-2.189l-2.961,-3.089l-4.375,-1.159l-0.773,-2.059l-2.059,-1.287l-0.387,-0.773l-0.515,-1.416l0.129,-1.158l-1.674,-0.515l-0.772,0.256l-0.773,-2.573l0.773,-0.516l-0.386,-0.643l2.574,-1.288l1.930,-0.514l2.834,0.257l1.029,-1.673l3.476,-0.258l0.901,-1.158l4.248,-1.416l0.387,-0.644l-0.260,-1.545l1.931,-0.643l-2.445,-4.635l5.279,-1.159l1.415,-0.514l1.931,-4.892l5.408,0.901l1.416,-1.288l0.127,-2.704l2.317,-0.128l2.060,-1.801l1.030,-0.258l0.644,1.802l2.317,1.545l3.863,0.901l1.803,2.188l-1.032,3.219l1.032,1.158l3.216,0.387l3.606,0.385l3.217,1.674l1.673,0.386l1.159,2.446l1.672,1.545l2.962,0l5.536,0.644l3.605,-0.386l2.701,0.386l3.862,1.673l3.347,0l1.160,0.773l3.090,-1.416l4.375,-0.902l4.121,-0.128l3.088,-1.030l1.932,-1.416l1.931,-0.902l-0.515,-0.900l-0.774,-1.030l1.416,-1.674l1.416,0.257l2.832,0.516l2.704,-1.417l4.119,-1.029l1.931,-1.803l1.932,-0.772l3.861,-0.386l2.190,0.258l0.258,-0.902l-2.448,-1.931l-2.189,-0.772l-2.059,0.901l-2.701,-0.386l-1.420,0.386l-0.771,-1.158l1.931,-2.704l1.287,-1.931l3.219,0.900l3.862,-1.672l0,-1.159l2.447,-2.832l1.414,-0.901l0,-1.416l-1.545,-0.644l2.316,-1.417l3.350,-0.513l3.475,0l4.119,0.772l2.316,1.030l1.674,2.703l1.031,1.158l0.901,1.674l1.029,2.574l4.635,0.902l3.218,1.930l1.159,2.447l3.990,0l2.447,-1.030l4.375,-0.774l-1.414,2.448l-1.031,1.029l-0.901,2.832l-1.802,2.704l-3.346,-0.516l-2.318,0.901l0.771,2.317l-0.385,3.219l-1.416,0.129l0,1.288l-1.674,-1.546l-1.029,1.546l-4.248,1.157l0.387,1.417l-2.319,-0.130l-1.287,-0.900l-1.802,1.930l-2.961,1.546l-2.190,1.673l-3.732,0.772l-2.059,1.288l-2.832,0.772l1.416,-1.288l-0.513,-1.028l2.058,-1.803l-1.418,-1.417l-2.314,0.902l-3.090,1.931l-1.674,1.673l-2.576,0.129l-1.414,1.287l1.414,1.802l2.189,0.387l0.129,1.287l2.061,0.773l3.088,-1.931l2.447,1.029l1.672,0.129l0.387,1.416l-3.733,0.772l-1.287,1.416l-2.574,1.288l-1.418,1.931l2.834,1.417l1.158,2.702l1.545,2.446l1.930,2.060l-0.129,2.059l-1.674,0.773l0.644,1.416l1.545,0.773l-0.386,2.187l-0.643,2.189l-1.545,0.258l-1.932,2.832l-2.189,3.604l-2.443,3.219l-3.735,2.446l-3.732,2.317l-3.090,0.258l-1.674,1.157l-0.900,-0.772l-1.545,1.287l-3.733,1.416l-2.832,0.386l-0.900,2.833l-1.547,0.129l-0.642,-1.931l0.642,-1.031l-3.605,-0.900l-1.285,0.387l-2.704,-0.645l-1.289,-1.029l0.387,-1.545l-2.445,-0.515l-1.287,-1.030l-2.317,1.416l-2.576,0.257l-2.187,0l-1.416,0.644l-1.416,0.386l0.386,3.089l-1.418,0l-0.256,-0.643l-0.128,-1.158l-1.930,0.773l-1.160,-0.387l-2.059,-1.030l0.772,-2.317l-1.674,-0.515l-0.645,-2.446l-2.832,0.386l0.387,-3.089l2.445,-2.318l0.131,-2.188l0,-2.060l-1.289,-0.644l-0.900,-1.545l-1.545,0.130l-2.832,-0.386l0.900,-1.159l-1.285,-1.674l-1.934,1.158l-2.314,-0.643l-3.092,1.674l-2.445,2.059l2.188,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"China",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Colombia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M262.164,227.425l-1.159,-0.644l-1.287,-0.901l-0.772,0.386l-2.318,-0.386l-0.643,-1.157l-0.515,0.127l-2.704,-1.544l-0.386,-0.902l1.031,-0.129l-0.130,-1.416l0.644,-1.029l1.417,-0.129l1.029,-1.674l1.030,-1.416l-0.901,-0.644l0.515,-1.545l-0.644,-2.445l0.515,-0.772l-0.386,-2.318l-1.030,-1.416l0.258,-1.287l0.900,0.257l0.515,-0.901l-0.643,-1.544l0.386,-0.387l1.416,0.129l1.931,-1.931l1.158,-0.258l0,-0.901l0.515,-2.317l1.545,-1.158l1.674,-0.128l0.257,-0.516l2.059,0.257l2.189,-1.415l1.029,-0.644l1.288,-1.288l0.901,0.258l0.773,0.644l-0.516,0.901l-1.802,0.514l-0.644,1.289l-1.029,0.771l-0.772,1.030l-0.387,1.931l-0.772,1.545l1.415,0.129l0.387,1.287l0.644,0.645l0.128,1.028l-0.257,1.030l0,0.516l0.772,0.257l0.644,0.901l3.475,-0.258l1.546,0.387l1.802,2.317l1.158,-0.258l1.931,0.129l1.545,-0.386l0.902,0.515l-0.517,1.416l-0.513,0.901l-0.259,1.931l0.516,1.802l0.773,0.772l0.127,0.644l-1.416,1.287l1.031,0.644l0.772,0.901l0.773,2.703l-0.516,0.387l-0.515,-1.545l-0.773,-0.902l-0.900,0.902l-5.278,0l0.129,1.674l1.545,0.258l-0.129,1.029l-0.515,-0.258l-1.545,0.387l0,1.931l1.159,1.030l0.515,1.544l-0.129,1.159l-1.159,7.338l-1.416,-1.417l-0.772,0l1.802,-2.704l-2.060,-1.287l-1.673,0.259l-1.030,-0.516l-1.416,0.644l-2.060,-0.257l-1.544,-2.832l-1.288,-0.644l-0.772,-1.287l-1.802,-1.288l0.772,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Colombia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Congo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M500.183,239.912l-0.902,-1.031l-0.900,0.515l-1.030,1.159l-2.189,-2.832l2.059,-1.544l-1.029,-1.804l0.901,-0.643l1.802,-0.257l0.256,-1.287l1.416,1.287l2.319,0.129l0.900,-1.288l0.258,-1.802l-0.258,-2.059l-1.286,-1.545l1.157,-3.219l-0.642,-0.515l-2.060,0.258l-0.643,-1.415l0.127,-1.160l3.475,0.129l2.062,0.644l2.187,0.643l0.259,-1.416l1.415,-2.446l1.545,-1.544l1.803,0.514l1.800,0.130l-0.257,1.673l-0.770,1.416l-0.517,1.673l-0.386,2.448l0.257,1.414l-0.514,1.030l0,0.901l-0.385,0.901l-1.805,1.287l-1.156,1.417l-1.160,2.575l0,2.190l-0.645,0.898l-1.543,1.288l-1.544,1.804l-1.032,-0.516l-0.128,-0.772l-1.544,0l-0.901,1.030l0.772,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Congo",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CostaRica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M241.695,204.768l-1.415,-0.515l-0.515,-0.644l0.257,-0.386l-0.128,-0.644l-0.644,-0.643l-1.159,-0.514l-0.901,-0.387l-0.128,-0.773l-0.773,-0.515l0.257,0.901l-0.643,0.644l-0.515,-0.772l-0.901,-0.258l-0.386,-0.644l0,-0.772l0.386,-0.901l-0.772,-0.257l0.644,-0.643l0.386,-0.259l1.801,0.644l0.644,-0.257l0.773,0.128l0.515,0.644l0.772,0.128l0.644,-0.514l0.644,1.416l1.029,1.030l1.287,1.157l-1.029,0.260l0,1.157l0.514,0.387l-0.385,0.257l0.128,0.515l-0.257,0.515l0.130,-0.515z";
}, function($ctx1) {$ctx1.fill(self,"CostaRica",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Croatia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,103.327l0.643,1.031l0.773,0.772l-1.030,1.029l-1.160,-0.643l-1.931,0l-2.316,-0.386l-1.159,0l-0.643,0.643l-1.031,-0.643l-0.516,1.159l1.290,1.158l0.643,0.901l1.286,1.031l0.901,0.514l1.031,1.159l2.445,1.030l-0.258,0.514l-2.572,-1.030l-1.547,-1.029l-2.444,-0.773l-2.318,-1.931l0.514,-0.257l-1.157,-1.159l-0.130,-0.901l-1.674,-0.386l-0.898,1.159l-0.774,-0.901l0.128,-0.902l0.129,-0.128l1.802,0.128l0.516,-0.386l0.901,0.386l1.030,0l0,-0.772l0.901,-0.257l0.255,-1.030l2.190,-0.773l0.902,0.386l1.930,1.159l2.316,0.515l-1.032,0.387zM502.372,101.654l2.315,0.258l1.289,-0.644l2.446,0l0.515,-0.515l0.385,0l0.515,0.901l-2.190,0.773l-0.255,1.030l-0.901,0.257l0,0.772l-1.030,0l-0.901,-0.386l-0.516,0.386l-1.802,-0.128l0.517,-0.258l-0.646,-1.029l-0.259,1.417z";
}, function($ctx1) {$ctx1.fill(self,"Croatia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cuba",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M243.626,164.475l2.318,0.257l2.059,0l2.576,0.902l1.028,1.030l2.576,-0.387l0.900,0.644l2.318,1.673l1.673,1.287l0.901,-0.128l1.545,0.644l-0.129,0.772l1.931,0l2.060,1.159l-0.257,0.644l-1.803,0.385l-1.802,0.129l-1.931,-0.257l-3.861,0.257l1.801,-1.544l-1.029,-0.644l-1.802,-0.258l-0.902,-0.772l-0.643,-1.415l-1.546,0l-2.445,-0.645l-0.772,-0.644l-3.604,-0.385l-0.902,-0.515l1.030,-0.644l-2.704,-0.128l-1.930,1.416l-1.030,0l-0.386,0.643l-1.417,0.257l-1.158,-0.257l1.417,-0.772l0.643,-1.030l1.159,-0.515l1.415,-0.515l2.059,-0.257l-0.644,0.387z";
}, function($ctx1) {$ctx1.fill(self,"Cuba",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Cyprus",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.694,132.549l0.129,0.259l-2.704,1.028l-1.417,-0.385l-0.514,-1.030l1.159,-0.129l0.258,0.129l0.127,0l0.130,0l0.257,0l0.257,-0.129l0.260,-0.128l0.127,0.128l0.258,0l0.128,0l0.128,0l0.130,0.129l0,0.258l0.129,-0.130l0.257,0.130l0.128,0l0.131,-0.130l0.128,0l0.128,0l0.129,-0.128l0.128,0l-0.129,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Cyprus",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "CzechRepublic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M510.866,96.119l-1.158,-0.516l-1.286,0.129l-2.061,-0.901l-1.030,0.258l-1.417,1.030l-2.058,-0.772l-1.544,-1.159l-1.288,-0.645l-0.386,-1.157l-0.387,-0.773l1.932,-0.643l1.029,-0.644l1.932,-0.515l0.642,-0.516l0.645,0.259l1.287,-0.259l1.287,0.903l1.932,0.256l-0.129,0.645l1.414,0.644l0.517,-0.773l1.802,0.386l0.257,0.772l1.930,0.129l1.289,1.416l-0.774,0l-0.385,0.515l-0.644,0l-0.256,0.643l-0.517,0.129l0,0.257l-0.900,0.258l-1.288,0l0.387,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"CzechRepublic",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DemocraticRepublicCongo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M548.327,217.513l-0.258,3.217l1.159,0.258l-0.901,1.031l-1.031,0.643l-1.029,1.416l-0.514,1.287l-0.131,2.189l-0.643,1.028l0,2.061l-0.901,0.643l0,1.674l-0.386,0.128l-0.257,1.546l0.643,1.159l0.130,3.347l0.514,2.445l-0.257,1.415l0.514,1.546l1.545,1.546l1.545,3.346l-1.030,-0.258l-3.733,0.386l-0.643,0.387l-0.771,1.673l0.642,1.288l-0.514,3.088l-0.387,2.705l0.772,0.514l1.932,1.031l0.642,-0.516l0.258,2.961l-2.058,0l-1.159,-1.545l-0.903,-1.158l-2.058,-0.387l-0.644,-1.416l-1.674,0.901l-2.187,-0.385l-0.903,-1.158l-1.672,-0.258l-1.289,0l-0.128,-0.772l-0.901,-0.130l-1.287,-0.128l-1.674,0.385l-1.158,0l-0.645,0.131l0.129,-3.091l-0.900,-1.030l-0.129,-1.674l0.385,-1.673l-0.514,-1.031l-0.128,-1.672l-3.219,0l0.258,-0.902l-1.417,0l-0.128,0.388l-1.673,0.128l-0.644,1.545l-0.514,0.772l-1.418,-0.387l-0.900,0.387l-1.801,0.128l-1.031,-1.415l-0.645,-0.773l-0.771,-1.674l-0.643,-1.930l-7.982,-0.131l-0.900,0.389l-0.774,-0.131l-1.157,0.387l-0.387,-0.772l0.773,-0.386l0,-1.159l0.514,-0.642l0.902,-0.516l0.772,0.258l0.901,-1.030l1.544,0l0.128,0.772l1.032,0.516l1.544,-1.804l1.543,-1.288l0.645,-0.898l0,-2.190l1.160,-2.575l1.156,-1.417l1.805,-1.287l0.385,-0.901l0,-0.901l0.514,-1.030l-0.257,-1.414l0.386,-2.448l0.517,-1.673l0.770,-1.416l0.257,-1.673l0.258,-1.802l1.030,-1.417l1.415,-0.900l2.190,0.900l1.674,1.030l2.060,0.258l1.930,0.514l0.900,-1.544l0.258,-0.258l1.287,0.258l2.961,-1.287l1.158,0.514l0.775,-0.129l0.514,-0.643l0.901,-0.129l2.058,0.257l1.674,0l0.903,-0.257l1.672,2.188l1.158,0.387l0.773,-0.515l1.287,0.257l1.416,-0.643l0.644,1.159l-2.446,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"DemocraticRepublicCongo",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Denmark",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.21,78.87l-1.159,-1.417l0,-2.832l0.387,-0.644l0.772,-0.901l2.447,-0.130l0.900,-0.772l2.188,-0.771l-0.128,1.415l-0.772,0.902l0.385,0.772l1.417,0.386l-0.644,1.029l-0.773,-0.257l-2.060,1.932l0.775,1.288l-1.675,0.385l2.060,0.385zM498.509,75.779l0.900,1.416l-1.545,2.188l-2.831,-1.544l-0.386,-1.158l-3.862,0.902z";
}, function($ctx1) {$ctx1.fill(self,"Denmark",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Djibouti",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M581.28,192.797l0.645,0.771l-0.129,1.159l-1.545,0.644l1.158,0.772l-0.900,1.416l-0.645,-0.514l-0.642,0.256l-1.545,-0.128l0,-0.773l-0.257,-0.771l0.901,-1.288l1.030,-1.159l1.158,0.257l-0.771,0.642z";
}, function($ctx1) {$ctx1.fill(self,"Djibouti",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "DominicanRepublic",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M272.075,173.873l0.259,-0.516l2.187,0l1.545,0.772l0.772,-0.128l0.387,1.030l1.545,-0.129l-0.129,0.901l1.288,0l1.286,1.030l-1.030,1.159l-1.287,-0.644l-1.287,0.129l-0.773,-0.129l-0.514,0.515l-1.030,0.129l-0.387,-0.644l-0.900,0.386l-1.159,1.803l-0.643,-0.387l-0.130,-0.772l0,-0.773l-0.643,-0.772l0.643,-0.515l0.259,-1.029l0.259,1.416z";
}, function($ctx1) {$ctx1.fill(self,"DominicanRepublic",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ecuador",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M248.905,236.179l1.415,-2.060l-0.514,-1.159l-1.031,1.288l-1.672,-1.160l0.515,-0.772l-0.387,-2.445l0.901,-0.516l0.515,-1.673l1.030,-1.674l-0.258,-1.158l1.545,-0.514l1.802,-1.030l2.704,1.544l0.515,-0.127l0.643,1.157l2.318,0.386l0.772,-0.386l1.287,0.901l1.159,0.644l0.386,2.059l-0.772,1.674l-2.961,2.832l-3.219,1.030l-1.673,2.446l-0.514,1.802l-1.545,1.030l-1.159,-1.286l-1.030,-0.388l-1.159,0.257l0,-1.029l0.773,-0.643l0.386,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Ecuador",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Egypt",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M559.269,147.483l-0.774,1.158l-0.514,1.931l-0.771,1.417l-0.645,0.514l-0.901,-0.901l-1.159,-1.158l-1.930,-3.862l-0.258,0.258l1.159,2.831l1.545,2.703l2.059,4.119l1.030,1.545l0.903,1.545l2.316,2.961l-0.517,0.386l0.130,1.802l3.089,2.447l0.259,0.514l-10.299,0l-10.556,0l-10.813,0l0,-9.912l0,-9.526l-0.901,-2.189l0.772,-1.673l-0.387,-1.159l0.903,-1.287l3.603,0l2.575,0.644l2.705,0.773l1.287,0.514l2.058,-0.901l1.030,-0.772l2.447,-0.258l1.930,0.386l0.642,1.287l0.647,-0.900l2.186,0.644l2.061,0.128l1.415,-0.644l-1.674,-4.635z";
}, function($ctx1) {$ctx1.fill(self,"Egypt",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "ElSalvador",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M228.694,190.865l-0.257,0.645l-1.545,0l-1.030,-0.259l-1.029,-0.515l-1.545,-0.129l-0.772,-0.644l0.128,-0.385l0.901,-0.644l0.515,-0.385l-0.129,-0.258l0.644,-0.129l0.772,0.129l0.515,0.643l0.902,0.386l0,0.386l1.287,-0.386l0.515,0.258l0.386,0.256l0.258,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"ElSalvador",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "EquatorialGuinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,224.206l-0.515,-0.387l0.900,-2.960l4.378,0l0.128,3.219l-3.988,0l0.903,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"EquatorialGuinea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Eritrea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-0.901,-0.901l-1.160,-1.545l-1.158,-0.902l-0.773,-0.900l-2.317,-1.030l-1.801,-0.129l-0.644,-0.514l-1.674,0.643l-1.544,-1.287l-0.900,2.059l-3.091,-0.514l-0.258,-1.160l1.160,-3.861l0.258,-1.802l0.770,-0.901l2.061,-0.386l1.288,-1.546l1.543,3.090l0.773,2.446l1.545,1.288l3.604,2.574l1.545,1.545l1.415,1.544l0.903,0.902l1.285,0.902l-0.771,0.642l1.158,0.257z";
}, function($ctx1) {$ctx1.fill(self,"Eritrea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Estonia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M530.69,71.273l0.387,-1.544l-1.029,0.257l-1.674,-0.900l-0.256,-1.545l3.344,-0.773l3.477,-0.386l2.833,0.515l2.831,-0.129l0.386,0.515l-1.930,1.544l0.900,2.446l-1.158,0.901l-2.318,0l-2.316,-1.028l-1.158,-0.387l2.319,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Estonia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ethiopia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M579.351,193.182l-1.030,1.159l-0.901,1.288l0.257,0.771l0,0.773l1.545,0.128l0.642,-0.256l0.645,0.514l-0.645,0.901l1.032,1.545l1.029,1.287l1.029,0.901l8.754,3.218l2.316,0l-7.722,8.110l-3.475,0.129l-2.318,1.932l-1.803,0l-1.029,0.644l-1.030,0.256l-1.931,-1.158l-2.445,1.287l-1.030,1.159l-1.031,-0.387l-0.900,0.258l-1.159,-0.385l-0.772,-0.130l-3.089,-2.574l-2.318,0l-0.129,-0.644l-0.772,-1.288l-1.159,-0.515l-1.158,-2.832l-1.286,-0.644l-0.388,-1.158l-1.416,-1.287l-1.673,-0.129l0.901,-1.545l1.416,-0.127l0.386,-0.774l0,-2.447l0.774,-2.831l1.286,-0.772l0.259,-1.030l1.158,-2.060l1.672,-1.415l1.158,-2.575l0.387,-2.317l3.091,0.514l0.900,-2.059l1.544,1.287l1.674,-0.643l0.644,0.514l1.801,0.129l2.317,1.030l0.773,0.900l1.158,0.902l1.160,1.545l-0.901,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Ethiopia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FalklandIslandsMalvinas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M302.584,365.296l-0.129,1.159l-1.03,1.416l2.188-1.031l1.158-1.286L302.584,365.296zM307.733,365.037l1.159,0.388l-0.902,1.415l-2.188,0.772l-0.257-0.9l1.288-1.416L307.733,365.037z";
}, function($ctx1) {$ctx1.fill(self,"FalklandIslandsMalvinas",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Fiji",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M946.097,274.154l0.773,-0.514l0.901,0.772l-0.516,1.416l-1.672,0.385l-1.418,-0.256l-0.256,-1.289l1.029,-0.900l-1.159,-0.386zM950.089,271.579l-1.160,0.773l-1.545,0.644l-0.385,-1.287l1.031,-1.030l0.899,-0.130l1.160,-0.256l-0.001,0l0.515,-0.129l-0.387,1.287l-0.128,0.128l-0.001,0z";
}, function($ctx1) {$ctx1.fill(self,"Fiji",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Finland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M542.276,40.893l-0.384,1.932l4.119,1.801l-2.448,2.060l3.089,2.960l-1.801,2.318l2.445,2.060l-1.157,1.802l3.991,1.802l-1.030,1.416l-2.448,1.545l-5.792,3.347l-4.890,0.257l-4.764,1.030l-4.377,0.515l-1.545,-1.416l-2.574,-0.901l0.514,-2.704l-1.286,-2.445l1.286,-1.545l2.447,-1.673l6.180,-2.961l1.800,-0.515l-0.256,-1.159l-3.734,-1.286l-0.901,-1.031l-0.128,-4.120l-4.250,-1.801l-3.475,-1.417l1.545,-0.643l2.961,1.416l3.606,-0.129l2.832,0.644l2.572,-1.159l1.289,-2.060l4.247,-0.900l3.476,1.157l1.159,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Finland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "France",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.903,93.673l1.287,0.773l3.861,0.514l-1.416,1.802l-0.257,1.931l-0.772,0.515l-1.288,-0.257l0.130,0.644l-1.932,1.545l0,1.158l1.288,-0.386l0.901,1.159l-0.128,0.772l0.772,1.029l-0.901,0.774l0.642,2.058l1.418,0.386l-0.258,1.160l-2.446,1.544l-5.277,-0.772l-3.992,0.901l-0.257,1.673l-3.090,0.258l-3.089,-1.158l-0.901,0.514l-5.021,-1.158l-1.029,-1.030l1.416,-1.674l0.515,-5.277l-2.832,-2.833l-2.060,-1.415l-3.991,-1.031l-0.386,-1.931l3.604,-0.644l4.506,0.773l-0.901,-3.090l2.575,1.159l6.306,-2.060l0.775,-2.317l2.317,-0.515l0.385,1.031l1.287,0l1.288,1.029l1.801,1.287l1.416,-0.257l2.318,1.286l0.643,0.259l-0.773,0.129zM488.854,112.082l1.674,-1.030l0.514,2.317l-0.899,2.188l-1.289,-0.643l-0.644,-1.803l-0.644,1.029z";
}, function($ctx1) {$ctx1.fill(self,"France",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "FrenchGuyana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M319.834,211.463l0.902,0.256l2.058,0.644l2.833,2.317l0.386,1.159l-1.545,2.446l-0.772,1.930l-1.030,1.031l-1.287,0.256l-0.387,-0.772l-0.643,-0.128l-0.772,0.644l-1.287,-0.516l0.772,-1.158l0.257,-1.159l0.386,-1.157l-1.029,-1.674l-0.259,-1.803l-1.417,2.316z";
}, function($ctx1) {$ctx1.fill(self,"FrenchGuyana",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GM",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M419.855,191.51l0.387,-1.160l2.961,-0.129l0.515,-0.643l0.901,0l1.030,0.643l0.901,0l0.900,-0.387l0.516,0.773l-1.159,0.644l-1.158,-0.128l-1.159,-0.516l-1.030,0.644l-0.514,0l-0.644,0.386l2.447,0.127z";
}, function($ctx1) {$ctx1.fill(self,"GM",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Gabon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M495.162,237.723l-2.833,-2.703l-1.801,-2.317l-1.544,-2.704l0,-0.900l0.642,-0.902l0.644,-1.931l0.515,-2.060l0.903,-0.128l3.988,0l-0.128,-3.219l1.288,-0.129l1.673,0.387l1.674,-0.387l0.256,0.129l-0.127,1.160l0.643,1.415l2.060,-0.258l0.642,0.515l-1.157,3.219l1.286,1.545l0.258,2.059l-0.258,1.802l-0.900,1.288l-2.319,-0.129l-1.416,-1.287l-0.256,1.287l-1.802,0.257l-0.901,0.643l1.029,1.804l2.059,-1.544z";
}, function($ctx1) {$ctx1.fill(self,"Gabon",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Georgia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M577.161,115.042l0.387,-1.159l-0.643,-1.801l-1.546,-1.030l-1.544,-0.258l-0.900,-0.772l0.256,-0.387l2.318,0.516l3.990,0.386l3.604,1.287l0.517,0.515l1.671,-0.387l2.446,0.516l0.772,1.158l1.803,0.644l-0.771,0.257l1.287,1.545l-0.258,0.258l-1.545,-0.130l-1.930,-0.772l-0.644,0.387l-3.734,0.515l-2.702,-1.416l2.834,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Georgia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Germany",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.945,78.87l0.127,1.028l2.703,0.644l-0.128,0.901l2.831,-0.514l1.417,-0.644l3.090,1.029l1.287,0.901l0.642,1.287l-0.770,0.773l1.029,0.901l0.644,1.417l-0.257,1.030l1.158,1.672l-1.287,0.259l-0.645,-0.259l-0.642,0.516l-1.932,0.515l-1.029,0.644l-1.932,0.643l0.387,0.773l0.386,1.157l1.288,0.645l1.544,1.159l-0.901,1.158l-1.030,0.386l0.387,1.802l-0.258,0.386l-0.773,-0.515l-1.287,-0.128l-1.931,0.515l-2.446,-0.128l-0.387,0.772l-1.285,-0.772l-0.903,0.128l-2.832,-0.772l-0.515,0.514l-2.317,0l0.257,-1.931l1.416,-1.802l-3.861,-0.514l-1.287,-0.773l0.129,-1.159l-0.516,-0.515l0.258,-1.930l-0.386,-2.833l1.544,0l0.773,-0.901l0.644,-2.574l-0.515,-0.902l0.515,-0.515l2.317,-0.129l0.385,0.516l1.933,-1.288l-0.645,-1.029l-0.129,-1.544l2.060,0.385l-1.675,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Germany",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ghana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M468.13,210.946l-4.249,1.674l-1.545,0.901l-2.446,0.773l-2.317,-0.773l0.129,-1.030l-1.159,-2.317l0.644,-3.088l1.158,-2.190l-0.772,-3.861l-0.386,-2.060l0.129,-1.545l4.634,-0.129l1.289,0.258l0.770,-0.514l1.288,0.256l-0.258,0.772l1.159,1.417l0,1.932l0.258,2.187l0.643,1.030l-0.514,2.318l0.128,1.416l0.773,1.673l-0.644,-0.900z";
}, function($ctx1) {$ctx1.fill(self,"Ghana",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GreatBritian",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.829,78.483l2.317,-0.129l2.832,1.673l-1.416,1.803l-2.060,-0.516l-1.673,0l0.515,-1.416l0.515,1.415zM453.84,69.214l3.347,-0.257l-2.961,2.960l2.832,-0.386l2.832,0l-0.643,2.189l-2.446,2.446l2.832,0.256l2.575,3.348l1.801,0.515l1.674,3.089l0.773,1.030l3.347,0.515l-0.387,1.674l-1.416,0.772l1.159,1.416l-2.446,1.417l-3.605,0l-4.633,0.772l-1.159,-0.516l-1.803,1.159l-2.574,-0.257l-1.802,1.030l-1.415,-0.515l3.860,-2.832l2.446,-0.644l-4.247,-0.386l-0.772,-1.030l2.831,-0.901l-1.416,-1.416l0.515,-1.803l3.991,0.258l0.386,-1.545l-1.803,-1.674l-3.346,-0.515l-0.645,-0.772l1.031,-1.158l-0.901,-0.772l-1.416,1.286l-0.258,-2.573l-1.287,-1.417l0.901,-2.704l2.189,-2.187l-2.059,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"GreatBritian",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greece",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.099,131.906l-0.387,0.773l-3.861,0.257l0,-0.515l-3.219,-0.515l0.387,-1.159l1.543,0.902l2.060,-0.129l2.059,0.257l-0.127,0.387l-1.545,0.258zM521.808,116.973l1.804,-0.258l1.029,-0.643l1.417,0.128l0.515,-0.513l0.514,-0.130l1.932,0.130l2.187,-0.773l1.930,1.029l2.445,-0.256l0,-1.417l1.289,0.772l-0.771,1.673l-0.645,0.258l-1.674,0l-1.416,-0.258l-3.218,0.644l1.802,1.545l-1.287,0.387l-1.543,0l-1.418,-1.417l-0.514,0.645l0.643,1.672l1.289,1.159l-1.031,0.644l1.545,1.286l1.286,0.774l0.130,1.545l-2.575,-0.773l0.772,1.417l-1.672,0.256l1.028,2.317l-1.800,0.129l-2.189,-1.287l-1.030,-2.059l-0.516,-1.803l-1.030,-1.288l-1.287,-1.545l-0.258,-0.772l1.288,-1.287l0.128,-0.901l0.901,-0.386l0,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Greece",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Greenland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M339.272,4.333l9.011,-1.544l9.525,0.128l3.348,-1.029l9.526,-0.258l21.497,0.386l16.864,2.060l-4.892,1.029l-10.298,0.129l-14.546,0.258l1.287,0.515l9.654,-0.257l8.110,0.901l5.149,-0.773l2.317,0.901l-2.961,1.545l6.824,-1.030l13.130,-1.030l7.981,0.515l1.545,1.159l-10.942,1.931l-1.546,0.644l-8.625,0.514l6.180,0.129l-3.089,1.931l-2.189,1.802l0.129,2.961l3.218,1.674l-4.249,0.128l-4.376,0.902l4.893,1.415l0.643,2.318l-2.832,0.257l3.476,2.317l-5.923,0.129l3.091,1.159l-0.902,0.900l-3.733,0.387l-3.862,0l3.476,1.931l0,1.158l-5.407,-1.158l-1.287,0.773l3.604,0.644l3.476,1.673l1.030,2.188l-4.763,0.515l-2.060,-1.031l-3.347,-1.544l0.901,1.803l-3.090,1.416l7.081,0.129l3.733,0.128l-7.208,2.316l-7.338,2.189l-7.852,0.902l-2.962,0l-2.831,1.030l-3.734,2.832l-5.793,1.931l-1.930,0.128l-3.604,0.644l-3.862,0.644l-2.317,1.673l0,1.802l-1.288,1.802l-4.505,2.189l1.158,2.060l-1.287,2.188l-1.287,2.703l-3.863,0.129l-3.989,-2.188l-5.278,0l-2.704,-1.545l-1.802,-2.574l-4.635,-3.347l-1.415,-1.803l-0.258,-2.316l-3.732,-2.576l0.900,-1.930l-1.802,-1.031l2.703,-3.088l3.991,-1.031l1.159,-1.158l0.515,-2.059l-3.476,-0.259l-6.179,-1.416l2.189,0l6.049,0l-4.634,-1.801l-2.446,-0.902l-4.892,-0.258l2.960,-2.445l-1.544,-1.030l-2.188,-1.931l-3.218,-2.832l-3.475,-1.030l0.128,-1.159l-7.338,-1.545l-5.664,-0.257l-7.208,0.129l-6.565,0.257l-3.090,-0.901l-4.763,-1.673l7.081,-0.901l5.405,-0.130l-11.457,-0.643l-6.050,-1.158l0.387,-1.030l10.169,-1.288l9.784,-1.287l1.030,-1.030l-7.210,-0.901l2.318,-1.029l9.397,-1.931l3.862,-0.258l-1.159,-1.287l6.437,-0.644l8.238,-0.387l8.368,-0.128l2.832,0.901l7.209,-1.545l6.436,1.030l3.347,1.159l6.050,0l-6.436,-1.545l-0.386,1.159z";
}, function($ctx1) {$ctx1.fill(self,"Greenland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guatemala",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M222.516,189.963l-1.417,-0.514l-1.673,0l-1.159,-0.515l-1.544,-1.159l0.128,-0.773l0.257,-0.643l-0.385,-0.514l1.416,-2.188l3.347,0l0.128,-0.903l-0.385,-0.128l-0.387,-0.644l-1.030,-0.643l-0.901,-0.901l1.158,0l0,-1.416l2.575,0l2.446,0l0,2.060l-0.257,3.089l0.772,0l0.901,0.515l0.258,-0.386l0.771,0.257l-1.158,1.030l-1.287,0.772l-0.257,0.516l0.257,0.514l-0.515,0.773l-0.644,0.129l0.129,0.258l-0.515,0.385l-0.901,0.644l0.128,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Guatemala",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M442.512,206.313l-0.772,-0.129l-0.515,1.158l-0.772,-0.128l-0.515,-0.515l0.128,-1.029l-1.158,-1.674l-0.644,0.257l-0.643,0.130l-0.644,0.127l0,-1.030l-0.387,-0.642l0,-0.773l-0.515,-1.159l-0.772,-1.029l-2.188,0l-0.644,0.514l-0.772,0.129l-0.386,0.515l-0.387,0.772l-1.415,1.159l-1.159,-1.544l-1.030,-1.031l-0.644,-0.386l-0.772,-0.515l-0.257,-1.159l-0.386,-0.643l-0.773,-0.515l1.159,-1.287l0.901,0.128l0.644,-0.515l0.643,0l0.386,-0.386l-0.257,-0.901l0.257,-0.257l0.129,-0.901l1.287,0l1.931,0.643l0.643,0l0.130,-0.258l1.544,0.129l0.387,-0.129l0.128,1.030l0.387,0l0.772,-0.387l0.386,0.130l0.772,0.643l1.159,0.258l0.772,-0.644l0.773,-0.387l0.643,-0.385l0.515,0.129l0.644,0.643l0.386,0.644l1.030,1.158l-0.516,0.645l-0.128,0.900l0.644,-0.257l0.257,0.386l-0.128,0.773l0.772,0.772l-0.515,0.257l-0.129,0.901l0.516,1.031l0.772,2.187l-1.030,0.387l-0.258,0.257l0.129,0.644l-0.129,1.159l0.386,0z";
}, function($ctx1) {$ctx1.fill(self,"Guinea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "GuineaBissau",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M424.49,197.173l-1.416,-1.030l-1.159,-0.257l-0.643,-0.773l0,-0.386l-0.772,-0.515l-0.258,-0.644l1.545,-0.386l0.901,0.129l0.644,-0.386l5.020,0.129l-0.129,0.901l-0.257,0.257l0.257,0.901l-0.386,0.386l-0.643,0l-0.644,0.515l-0.901,-0.128l1.159,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"GuineaBissau",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Guyana",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M304.257,204.383l1.804,1.028l1.672,1.803l0,1.415l1.030,0l1.417,1.289l1.157,1.028l-0.514,2.319l-1.545,0.772l0.129,0.643l-0.514,1.416l1.157,1.931l0.902,0l0.385,1.545l1.545,2.317l-0.643,0.130l-1.416,-0.259l-0.901,0.644l-1.288,0.515l-0.772,0.128l-0.386,0.515l-1.287,-0.128l-1.674,-1.288l-0.128,-1.287l-0.773,-1.287l0.515,-2.316l0.772,-0.902l-0.644,-1.288l-0.900,-0.386l0.257,-1.159l-0.644,-0.643l-1.287,0.129l-1.930,-2.061l0.772,-0.772l0,-1.287l1.673,-0.385l0.644,-0.516l-0.902,-1.029l0.130,-0.902l-2.187,1.672z";
}, function($ctx1) {$ctx1.fill(self,"Guyana",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Haiti",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M268.085,173.357l1.673,0.129l2.317,0.387l0.259,1.416l-0.259,1.029l-0.643,0.515l0.643,0.772l0,0.773l-1.802,-0.515l-1.287,0.257l-1.673,-0.257l-1.159,0.515l-1.545,-0.773l0.258,-0.900l2.446,0.385l2.060,0.258l1.029,-0.643l-1.288,-1.159l0,-1.030l-1.673,-0.387l-0.644,0.772z";
}, function($ctx1) {$ctx1.fill(self,"Haiti",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Honduras",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M229.981,192.023l-0.385,-0.900l-0.902,-0.258l0.258,-1.031l-0.386,-0.256l-0.515,-0.258l-1.287,0.386l0,-0.386l-0.902,-0.386l-0.515,-0.643l-0.772,-0.129l0.515,-0.773l-0.257,-0.514l0.257,-0.516l1.287,-0.772l1.158,-1.030l0.258,0.129l0.644,-0.386l0.772,-0.129l0.257,0.258l0.386,-0.129l1.288,0.257l1.288,-0.128l0.772,-0.258l0.386,-0.258l0.773,0.129l0.643,0.129l0.772,0l0.515,-0.258l1.287,0.387l0.387,0l0.772,0.515l0.773,0.643l1.030,0.387l0.643,0.772l-0.901,-0.128l-0.386,0.386l-0.902,0.386l-0.643,0l-0.643,0.385l-0.516,-0.127l-0.514,-0.517l-0.258,0.130l-0.258,0.643l-0.257,0l-0.129,0.516l-0.900,0.771l-0.515,0.258l-0.258,0.386l-0.773,-0.515l-0.643,0.643l-0.515,0l-0.643,0.129l0,1.288l-0.387,0l-0.257,0.644l0.902,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Honduras",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Hungary",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M508.937,100.753l0.900,-1.674l-0.643,-0.643l1.545,0l0.257,-1.158l1.288,0.772l1.028,0.257l2.318,-0.257l0.129,-0.644l1.158,0l1.287,-0.515l0.258,0.258l1.287,-0.387l0.645,-0.643l0.900,-0.129l2.832,0.772l0.645,-0.257l1.415,0.773l0.256,0.643l-1.671,0.643l-1.290,1.803l-1.673,1.802l-2.059,0.515l-1.672,-0.129l-2.060,0.772l-1.032,0.387l-2.316,-0.515l-1.930,-1.159l-0.902,-0.386l-0.515,-0.901l0.385,0z";
}, function($ctx1) {$ctx1.fill(self,"Hungary",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iceland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M426.163,47.974l-0.643,1.672l3.089,1.932l-3.604,2.059l-7.723,1.802l-2.318,0.515l-3.475,-0.385l-7.595,-0.902l2.703,-1.158l-5.922,-1.287l4.763,-0.516l-0.128,-0.900l-5.664,-0.644l1.930,-1.674l3.991,-0.386l4.248,1.803l4.119,-1.417l3.348,0.645l4.376,-1.417l-4.505,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iceland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "India",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M674.866,131.391l2.961,3.089l-0.256,2.189l1.030,1.416l-0.129,1.416l-1.932,-0.385l0.773,2.960l2.704,1.674l3.732,1.930l-1.672,1.160l-1.160,2.573l2.703,1.031l2.447,1.287l3.604,1.545l3.603,0.386l1.674,1.287l2.059,0.257l3.219,0.644l2.189,0l0.385,-1.158l-0.385,-1.674l0.258,-1.159l1.543,-0.514l0.258,2.059l0.129,0.516l2.447,1.029l1.672,-0.386l2.189,0.129l2.188,0l0.257,-1.674l-1.158,-0.901l2.188,-0.258l2.445,-2.059l3.092,-1.674l2.314,0.643l1.934,-1.158l1.285,1.674l-0.900,1.159l2.832,0.386l0.258,1.029l-1.030,0.515l0.256,1.674l-1.930,-0.515l-3.474,1.802l0.127,1.545l-1.545,2.317l-0.127,1.287l-1.160,2.189l-2.188,-0.515l0,2.704l-0.642,0.900l0.255,1.159l-1.287,0.643l-1.416,-4.247l-0.771,0l-0.387,1.802l-1.545,-1.416l0.901,-1.545l1.158,-0.129l1.289,-2.317l-1.545,-0.515l-2.574,0.128l-2.574,-0.386l-0.260,-1.931l-1.285,-0.128l-2.061,-1.159l-1.031,1.803l2.060,1.415l-1.802,1.030l-0.514,1.031l1.672,0.643l-0.514,1.674l0.901,2.059l0.515,2.188l-0.387,1.030l-1.931,-0.128l-3.217,0.643l0.129,1.931l-1.416,1.674l-3.861,1.802l-3.092,3.218l-2.059,1.675l-2.574,1.673l-0.129,1.287l-1.287,0.644l-2.447,1.029l-1.287,0.129l-0.772,2.059l0.645,3.476l0.127,2.189l-1.159,2.574l0,4.635l-1.414,0.128l-1.289,2.060l0.903,0.901l-2.448,0.773l-0.900,1.802l-1.158,0.772l-2.576,-2.574l-1.159,-3.734l-1.027,-2.703l-1.031,-1.287l-1.416,-2.575l-0.645,-3.347l-0.513,-1.674l-2.448,-3.733l-1.029,-5.278l-0.900,-3.346l0,-3.347l-0.516,-2.446l-3.861,1.544l-1.931,-0.257l-3.476,-3.347l1.287,-0.901l-0.772,-1.159l-3.218,-2.188l1.801,-1.802l5.922,0l-0.514,-2.317l-1.545,-1.417l-0.258,-2.059l-1.802,-1.159l2.961,-2.832l3.218,0.129l2.704,-2.833l1.802,-2.702l2.575,-2.704l0,-1.931l2.187,-1.545l-2.059,-1.287l-1.031,-1.802l-0.900,-2.447l1.287,-1.157l4.121,0.643l2.961,-0.386l-2.572,2.189z";
}, function($ctx1) {$ctx1.fill(self,"India",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Indonesia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,0.515l0,0.773l-1.674,2.060l-2.317,0.515l-0.386,-0.257l0.258,-0.902l1.158,-1.674l-2.703,1.030zM826.767,245.576l-0.258,-2.058l0.515,-0.903l0.516,-1.030l0.643,0.901l0,1.286l1.416,-1.804zM845.175,242.742l0,8.755l-2.447,-2.188l-2.702,-0.514l-0.644,0.771l-3.475,0.129l1.156,-2.189l1.676,-0.772l-0.644,-2.962l-1.287,-2.317l-5.280,-2.187l-2.187,-0.256l-3.992,-2.448l-0.899,1.288l-1.031,0.257l-0.516,-1.030l0,-1.157l-2.058,-1.288l2.832,-1.030l1.931,0l-0.259,-0.644l-3.860,0l-1.160,-1.674l-2.314,-0.515l-1.161,-1.287l3.606,-0.643l1.414,-0.902l4.248,1.160l0.516,1.028l0.771,4.248l2.705,1.676l2.317,-2.833l3.090,-1.674l2.316,0l2.318,0.901l2.059,1.030l2.832,0.515l-0.129,-8.752zM761.116,223.434l1.801,1.416l1.803,-0.514l1.672,0.257l1.545,-1.417l1.289,-0.257l2.574,0.772l2.189,-0.515l1.414,-3.862l1.032,-0.901l0.900,-3.089l3.090,0l2.316,0.515l-1.545,2.446l2.059,2.574l-0.514,1.160l3.090,2.574l-3.217,0.257l-0.902,1.802l0.129,2.447l-2.576,1.930l-0.129,2.575l-1.030,4.119l-0.386,-0.901l-3.088,1.158l-1.031,-1.542l-1.930,-0.259l-1.287,-0.773l-3.219,0.901l-1.029,-1.287l-1.801,0.128l-2.189,-0.256l-0.387,-3.606l-1.416,-0.772l-1.287,-2.317l-0.260,-2.317l0.260,-2.574l1.545,-1.674l-0.515,-1.802zM813.765,234.505l2.961,0.772l0.902,2.059l-2.190,-1.029l-2.318,-0.256l-1.545,0.128l-1.801,0l0.643,-1.545l-3.348,0.129zM807.069,237.209l-1.929,-0.516l-0.516,-1.158l2.705,-0.129l0.643,0.901l0.903,-0.902zM809.903,221.117l0.129,1.416l1.674,0.258l0.256,1.158l-0.256,2.317l-1.289,-0.258l-0.514,1.674l1.159,1.417l-0.774,0.256l-1.029,-1.673l-0.772,-3.476l0.514,-2.060l-0.902,1.029zM796.386,224.593l3.090,-0.130l2.703,-1.930l0.386,0.643l-2.060,2.704l-2.059,0.515l-2.574,-0.644l-4.506,0.257l-2.316,0.387l-0.387,1.931l2.316,2.445l1.545,-1.158l5.022,-1.031l-0.258,1.289l-1.158,-0.387l-1.160,1.545l-2.446,1.030l2.575,3.476l-0.514,0.903l2.445,3.216l0,1.674l-1.416,0.771l-1.029,-0.901l1.287,-2.186l-2.703,1.028l-0.645,-0.772l0.385,-1.031l-1.930,-1.544l0.131,-2.574l-1.804,0.773l0.257,3.088l0.129,3.862l-1.800,0.387l-1.161,-0.774l0.774,-2.443l-0.389,-2.574l-1.156,-0.131l-0.772,-1.802l1.159,-1.802l0.384,-2.060l1.288,-4.120l0.515,-1.029l2.317,-2.060l2.189,0.772l-3.346,-0.387zM789.306,254.588l-3.604,-1.804l2.574,-0.643l1.416,0.902l0.903,0.771l-0.131,0.774l1.158,0zM792.138,249.953l1.802,-0.129l2.317,-1.029l-0.385,1.544l-3.992,0.643l-3.604,-0.257l0,-1.030l2.188,-0.515l-1.674,-0.773zM783.771,249.566l1.673,-0.257l0.645,1.158l-3.090,0.515l-1.803,0.387l-1.545,0l1.030,-1.674l1.416,0l0.773,-0.900l-0.901,-0.771zM757.511,244.287l0.386,0.902l5.149,0.258l0.514,-1.031l5.021,1.288l1.029,1.674l3.991,0.515l3.349,1.673l-3.092,1.032l-2.961,-1.160l-2.445,0.128l-2.832,-0.257l-2.445,-0.514l-3.219,-0.902l-1.932,-0.387l-1.158,0.387l-4.890,-1.159l-0.387,-1.158l-2.574,-0.129l1.929,-2.574l3.219,0.127l2.190,1.031l-1.158,-0.256zM746.438,229.871l0.387,1.932l0.903,1.415l2.058,0.257l1.289,1.802l-0.644,3.347l-0.129,4.118l-2.961,0l-2.317,-2.187l-3.476,-2.188l-1.158,-1.674l-2.059,-2.188l-1.289,-2.060l-2.061,-3.733l-2.314,-2.189l-0.775,-2.317l-1.028,-2.187l-2.447,-1.674l-1.416,-2.318l-2.059,-1.416l-2.705,-3.090l-0.256,-1.287l1.674,0.129l4.248,0.515l2.317,2.575l2.058,1.803l1.547,1.157l2.572,2.962l2.706,0l2.187,1.801l1.674,2.318l2.060,1.158l-1.158,2.189l1.545,1.030l-1.027,0z";
}, function($ctx1) {$ctx1.fill(self,"Indonesia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iran",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M610.502,126.756l2.317,-0.513l1.932,-1.546l1.803,0.129l1.157,-0.515l1.932,0.257l2.961,1.288l2.188,0.387l3.088,2.317l2.060,0.128l0.129,2.188l-1.029,3.477l-0.773,1.930l1.158,0.386l-1.158,1.416l0.902,2.188l0.256,1.674l2.060,0.515l0.129,1.673l-2.445,2.447l1.414,1.415l1.031,1.674l2.574,1.159l0.128,2.446l1.288,0.386l0.259,1.287l-3.992,1.288l-1.030,3.218l-5.020,-0.902l-2.961,-0.515l-2.961,-0.386l-1.160,-3.346l-1.285,-0.515l-2.058,0.515l-2.706,1.287l-3.345,-0.901l-2.705,-2.060l-2.575,-0.773l-1.800,-2.446l-2.061,-3.604l-1.416,0.387l-1.674,-0.902l-1.029,1.030l-1.545,-1.416l0,-1.416l-0.901,0l0.514,-1.931l-1.415,-2.060l-3.347,-1.416l-1.802,-2.575l0.643,-2.187l1.289,-0.902l-0.130,-1.545l-1.802,-0.772l-1.803,-3.476l-0.128,0l-1.288,-1.931l0.516,-0.901l-0.773,-3.089l1.802,-0.772l0.387,1.028l1.415,1.288l1.804,0.386l1.029,-0.129l3.089,-1.930l1.030,-0.258l0.773,0.773l-0.902,1.415l1.674,1.417l0.643,-0.129l0.901,1.931l2.575,0.516l1.803,1.415l3.862,0.385l4.247,-0.643l-0.257,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Iran",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Iraq",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M585.658,126.628l0.128,0l1.803,3.476l1.802,0.772l0.130,1.545l-1.289,0.902l-0.643,2.187l1.802,2.575l3.347,1.416l1.415,2.060l-0.514,1.931l0.901,0l0,1.416l1.545,1.416l-1.674,-0.128l-1.803,-0.258l-1.930,2.703l-5.020,-0.258l-7.596,-5.406l-3.990,-1.931l-3.218,-0.773l-1.158,-3.218l6.051,-2.832l1.029,-3.218l-0.258,-1.931l1.417,-0.773l1.416,-1.673l1.158,-0.385l3.091,0.385l0.899,0.643l1.287,-0.385l0.128,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Iraq",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ireland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M448.562,81.83l0.387,1.931l-2.060,2.445l-4.764,1.544l-3.732,-0.385l2.188,-2.832l-1.415,-2.703l3.604,-2.060l2.059,-1.287l0.515,1.415l-0.515,1.416l1.673,0l-2.060,-0.516z";
}, function($ctx1) {$ctx1.fill(self,"Ireland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Israel",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.458,138.857l-0.516,0.902l-0.900,-0.387l-0.645,1.803l0.774,0.258l-0.774,0.385l-0.128,0.644l1.287,-0.257l0.130,1.029l-1.417,4.249l-1.674,-4.635l0.773,-0.901l-0.258,-0.129l0.772,-1.287l0.515,-1.931l0.385,-0.773l0.130,0l0.900,0l0.259,-0.515l0.643,0l0,1.160l0.256,-0.385z";
}, function($ctx1) {$ctx1.fill(self,"Israel",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Italy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M493.361,100.624l1.672,0.386l0.258,-0.514l2.703,-0.386l0.644,0.900l3.734,0.644l-0.259,1.417l0.646,1.029l-2.063,-0.386l-2.315,1.030l0.257,1.287l-0.387,0.772l0.900,1.417l2.577,1.287l1.287,2.317l2.961,2.189l2.187,-0.130l0.645,0.644l-0.773,0.515l2.445,1.030l1.933,0.772l2.315,1.416l0.257,0.516l-0.513,0.900l-1.417,-1.157l-2.316,-0.516l-1.159,1.803l1.931,0.901l-0.387,1.416l-1.030,0.257l-1.544,2.317l-1.029,0.129l0,-0.772l0.514,-1.417l0.644,-0.643l-1.158,-1.545l-0.772,-1.417l-1.160,-0.256l-0.772,-1.159l-1.673,-0.515l-1.159,-1.030l-2.060,-0.257l-2.061,-1.159l-2.444,-1.802l-1.933,-1.545l-0.772,-2.703l-1.286,-0.258l-2.189,-0.901l-1.288,0.386l-1.545,1.287l-1.157,0.130l0.258,-1.160l-1.418,-0.386l-0.642,-2.058l0.901,-0.774l-0.772,-1.029l0.128,-0.772l1.160,0.643l1.287,-0.128l1.543,-1.031l0.387,0.516l1.288,-0.129l0.643,-1.030l1.932,0.257l1.158,-0.386l-0.258,1.159zM504.944,124.183l2.061,-0.258l-0.901,2.188l0.387,0.773l-0.644,1.415l-2.061,-1.030l-1.286,-0.256l-3.733,-1.416l0.384,-1.288l3.091,0.257l-2.702,0.385zM488.726,116.844l1.287,-0.901l1.675,1.931l-0.387,3.605l-1.288,-0.258l-1.029,0.902l-1.032,-0.644l-0.128,-3.219l-0.642,-1.545l-1.544,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Italy",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "IvoryCoast",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M457.573,213.521l-1.287,0l-1.802,-0.514l-1.802,0l-3.219,0.514l-1.802,0.773l-2.703,1.030l-0.516,-0.129l0.259,-2.188l0.257,-0.387l-0.129,-1.030l-1.159,-1.158l-0.772,-0.129l-0.901,-0.772l0.644,-1.158l-0.258,-1.287l0.129,-0.773l0.386,0l0.129,-1.159l-0.129,-0.644l0.258,-0.257l1.030,-0.387l-0.772,-2.187l-0.516,-1.031l0.129,-0.901l0.515,-0.257l0.387,-0.258l0.772,0.386l2.059,0l0.514,-0.772l0.516,0.129l0.772,-0.385l0.387,1.157l0.643,-0.257l1.030,-0.515l1.287,0.643l0.387,0.902l1.286,0.515l0.902,-0.644l1.287,-0.129l1.802,0.773l0.772,3.861l-1.158,2.190l-0.644,3.088l1.159,2.317l0.129,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"IvoryCoast",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jamaica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M256.242,177.22l1.802,0.128l1.416,0.644l0.515,0.772l-1.931,0.129l-0.772,0.386l-1.544,-0.386l-1.545,-1.030l0.385,-0.643l1.030,-0.130l-0.644,-0.130z";
}, function($ctx1) {$ctx1.fill(self,"Jamaica",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Japan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M847.491,121.479l-2.574,2.704l0.129,2.703l-1.031,2.188l0.386,1.287l-1.287,1.931l-3.476,1.288l-4.762,0.128l-3.861,3.090l-1.801,-1.030l-0.129,-1.932l-4.635,0.517l-3.219,1.287l-3.089,0l2.703,2.059l-1.803,4.506l-1.801,1.159l-1.287,-1.031l0.643,-2.445l-1.672,-0.772l-1.031,-1.804l2.445,-0.900l1.416,-1.674l2.705,-1.415l2.059,-1.803l5.277,-0.773l2.961,0.516l2.832,-4.764l1.803,1.288l3.861,-2.704l1.545,-1.029l1.674,-3.347l-0.387,-2.961l1.158,-1.803l2.832,-0.386l1.416,3.734l0,-2.188zM854.829,108.606l1.930,-1.159l0.515,2.961l-3.990,0.772l-2.316,2.703l-4.250,-1.931l-1.414,2.962l-3.090,0.128l-0.387,-2.703l1.416,-2.060l2.832,-0.128l0.774,-3.734l0.771,-2.188l3.219,2.832l2.060,0.901l-1.930,-0.644zM821.874,136.798l1.416,-1.545l1.545,0.257l1.160,-1.157l1.930,0.643l0.387,0.900l-1.545,1.674l-1.159,-0.901l-1.287,0.643l-0.773,1.545l-1.801,-0.772l-0.127,1.287z";
}, function($ctx1) {$ctx1.fill(self,"Japan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Jordan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0.516,-0.902l2.960,1.031l5.278,-2.833l1.158,3.218l-0.514,0.516l-5.407,1.287l2.703,2.703l-0.901,0.515l-0.515,0.902l-2.060,0.386l-0.643,0.901l-1.160,0.900l-2.960,-0.514l-0.128,-0.386l1.417,-4.249l-0.130,-1.029l0.386,-0.902l0,1.544z";
}, function($ctx1) {$ctx1.fill(self,"Jordan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kazakhstan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l-1.547,0.515l-3.603,1.802l-1.160,1.931l-1.030,0.129l-0.771,-1.288l-3.347,-0.128l-0.644,-2.189l-1.287,0l0.258,-2.703l-3.219,-2.060l-4.633,0.259l-3.219,0.385l-2.574,-2.446l-2.189,-1.029l-4.120,-1.931l-0.515,-0.129l-6.951,1.544l0.130,9.914l-1.419,0.128l-1.930,-2.060l-1.800,-0.772l-3.090,0.515l-1.160,0.900l-0.127,-0.643l0.642,-1.159l-0.515,-0.900l-3.089,-0.902l-1.286,-2.446l-1.416,-0.644l-0.130,-0.901l2.702,0.258l0,-1.931l2.320,-0.514l2.316,0.385l0.515,-2.574l-0.387,-1.674l-2.704,0.129l-2.316,-0.644l-3.090,1.159l-2.574,0.643l-1.416,-0.514l0.387,-1.416l-1.803,-1.803l-1.931,0.129l-2.317,-1.802l1.545,-2.060l-0.772,-0.515l2.186,-2.960l2.705,1.544l0.387,-1.931l5.535,-2.962l4.248,-0.127l5.922,1.931l3.088,1.029l2.961,-1.158l4.250,0l3.474,1.416l0.773,-0.772l3.732,0l0.644,-1.159l-4.376,-1.931l2.702,-1.288l-0.515,-0.772l2.575,-0.644l-1.929,-1.931l1.158,-0.901l10.039,-0.901l1.418,-0.644l6.693,-1.028l2.446,-1.160l4.763,0.644l0.901,2.833l2.832,-0.645l3.474,0.901l-0.258,1.416l2.577,-0.128l6.822,-2.575l-1.029,0.901l3.474,2.060l5.922,6.822l1.545,-1.416l3.605,1.546l3.860,-0.644l1.545,0.514l1.289,1.545l1.930,0.515l1.158,1.159l3.478,-0.387l1.414,1.675l-2.060,1.801l-2.317,0.128l-0.127,2.704l-1.416,1.288l-5.408,-0.901l-1.931,4.892l-1.415,0.514l-5.279,1.159l2.445,4.635l-1.931,0.643l0.260,1.545l-1.674,-0.386l-1.287,-0.902l-3.993,-0.386l-4.505,0l-1.030,0.258l-3.732,-1.159l-1.545,0.644l-0.514,1.545l-4.378,-0.902l-1.801,0.386l0.514,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Kazakhstan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kenya",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.972,214.552l2.318,0l3.089,2.574l0.772,0.130l1.159,0.385l0.900,-0.258l1.031,0.387l1.030,-1.159l2.445,-1.287l1.931,1.158l1.030,-0.256l-2.188,2.960l-0.130,10.169l1.931,2.189l-1.931,1.030l-0.514,1.416l-1.030,0.258l-0.515,1.545l-0.902,1.158l-0.513,1.673l-1.031,1.157l-4.119,-2.445l-0.256,-2.059l-10.042,-5.793l0,-2.832l0,-0.772l1.931,-1.674l1.029,-1.931l-0.771,-1.930l-1.031,-2.704l-1.287,-1.930l1.416,-1.159l2.188,-2.447l1.159,0.515l0.772,1.288l-0.129,-0.644z";
}, function($ctx1) {$ctx1.fill(self,"Kenya",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kuwait",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M594.411,146.196l0.645,1.158l-0.257,0.643l0.900,2.060l-1.930,0.129l-0.644,-1.288l-2.447,-0.257l1.930,-2.703l-1.803,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kuwait",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Kyrgyzstan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.46,113.111l0.514,-1.159l1.801,-0.386l4.378,0.902l0.514,-1.545l1.545,-0.644l3.732,1.159l1.030,-0.258l4.505,0l3.993,0.386l1.287,0.902l1.674,0.386l-0.387,0.644l-4.248,1.416l-0.901,1.158l-3.476,0.258l-1.029,1.673l-2.834,-0.257l-1.930,0.514l-2.574,1.288l0.386,0.643l-0.773,0.516l-5.020,0.514l-3.347,-0.901l-2.961,0.129l0.257,-1.545l2.961,0.515l1.030,-0.900l2.060,0.257l3.346,-1.932l-3.090,-1.416l-1.929,0.772l-2.061,-1.030l2.317,-1.801l0.770,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Kyrgyzstan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Laos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M748.628,188.549l0.902,-1.288l0.127,-2.189l-2.187,-2.446l-0.129,-2.574l-2.059,-2.189l-2.060,-0.258l-0.516,1.030l-1.545,0l-0.900,-0.385l-2.832,1.544l0,-2.446l0.642,-2.832l-1.800,-0.128l-0.129,-1.546l-1.161,-0.900l0.516,-0.902l2.318,-1.802l0.256,0.643l1.418,0l-0.386,-3.089l1.416,-0.386l1.544,2.188l1.159,2.446l3.347,0l1.028,2.317l-1.672,0.772l-0.774,0.902l3.219,1.674l2.188,3.217l1.673,2.318l2.061,1.931l0.645,1.803l-0.387,2.702l-2.446,-0.901l-1.160,1.803l2.316,1.029z";
}, function($ctx1) {$ctx1.fill(self,"Laos",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Latvia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M521.938,76.037l0.128,-2.060l1.288,-1.674l2.573,-0.900l2.060,2.059l2.190,-0.128l0.513,-2.061l2.319,-0.514l1.158,0.387l2.316,1.028l2.318,0l1.286,0.644l0.129,1.287l0.901,1.545l-2.831,1.031l-1.674,0.514l-2.574,-1.288l-1.416,-0.257l-0.385,-0.515l-2.705,0.259l-4.506,-0.130l3.088,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Latvia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lebanon",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M561.714,137.312l-0.643,0l-0.259,0.515l-0.900,0l0.900,-2.187l1.289,-1.932l0.128,0l1.159,0.128l0.515,1.031l-1.546,1.029l-0.514,1.416l0.129,0z";
}, function($ctx1) {$ctx1.fill(self,"Lebanon",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lesotho",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M543.306,304.922l0.902,0.900l-0.773,1.287l-0.515,0.902l-1.417,0.385l-0.514,0.901l-1.030,0.258l-1.931,-2.059l1.416,-1.803l1.416,-1.029l1.287,-0.516l-1.159,-0.774z";
}, function($ctx1) {$ctx1.fill(self,"Lesotho",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Liberia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M444.442,215.195l-0.643,0l-2.832,-1.287l-2.446,-2.060l-2.317,-1.416l-1.802,-1.673l0.644,-0.902l0.129,-0.771l1.287,-1.546l1.159,-1.157l0.643,-0.130l0.644,-0.257l1.158,1.674l-0.128,1.029l0.515,0.515l0.772,0.128l0.515,-1.158l0.772,0.129l-0.129,0.773l0.258,1.287l-0.644,1.158l0.901,0.772l0.772,0.129l1.159,1.158l0.129,1.030l-0.257,0.387l0.259,-2.188z";
}, function($ctx1) {$ctx1.fill(self,"Liberia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Libya",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.204,165.376l-1.932,1.030l-1.416,-1.544l-4.248,-1.159l-1.288,-1.674l-2.060,-1.158l-1.286,0.385l-0.902,-1.415l-0.127,-1.159l-1.546,-2.059l1.030,-1.030l-0.259,-1.673l0.387,-1.546l-0.256,-1.158l0.513,-2.318l-0.126,-1.158l-0.903,-2.446l1.287,-0.643l0.257,-1.031l-0.257,-1.158l1.803,-1.029l0.900,-0.902l1.288,-0.772l0.129,-2.060l3.217,0.901l1.030,-0.257l2.320,0.514l3.602,1.159l1.160,2.446l2.446,0.515l3.860,1.158l2.833,1.288l1.286,-0.644l1.288,-1.287l-0.643,-2.059l0.900,-1.288l1.932,-1.288l1.801,-0.385l3.734,0.514l0.901,1.287l1.029,0l0.773,0.516l2.703,0.257l0.645,0.901l-0.903,1.287l0.387,1.159l-0.772,1.673l0.901,2.189l0,9.526l0,9.912l0,5.408l-2.832,0l0,1.415l-11.069,-5.407l-10.815,-5.149l2.702,-1.416z";
}, function($ctx1) {$ctx1.fill(self,"Libya",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Lithuania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,80.67l-0.128,-0.772l0.259,-0.643l-1.289,-0.515l-2.702,-0.386l-0.644,-2.317l3.088,-0.773l4.506,0.130l2.705,-0.259l0.385,0.515l1.416,0.257l2.574,1.288l0.258,1.159l-2.189,0.901l-0.643,1.545l-2.961,0.901l-2.574,0l-0.644,-0.772l1.417,0.259z";
}, function($ctx1) {$ctx1.fill(self,"Lithuania",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Luxembourg",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.516,91.999l0.516,0.515l-0.129,1.159l-0.773,0.129l-0.643,-0.259l0.385,-1.544l-0.644,0z";
}, function($ctx1) {$ctx1.fill(self,"Luxembourg",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Madagascar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M598.66,260.508l0.772,1.160l0.643,1.801l0.385,3.219l0.775,1.287l-0.257,1.287l-0.518,0.773l-0.898,-1.545l-0.516,0.772l0.516,2.060l-0.258,1.158l-0.774,0.516l-0.129,2.316l-1.028,3.219l-1.417,3.604l-1.545,5.149l-1.031,3.734l-1.285,3.089l-2.188,0.644l-2.318,1.157l-1.544,-0.641l-2.189,-1.031l-0.773,-1.417l-0.129,-2.317l-0.900,-2.188l-0.258,-1.931l0.387,-1.930l1.287,-0.515l0,-0.901l1.288,-1.932l0.257,-1.802l-0.645,-1.285l-0.514,-1.676l-0.128,-2.446l0.900,-1.544l0.387,-1.673l1.287,-0.130l1.544,-0.514l0.901,-0.516l1.289,0l1.544,-1.544l2.189,-1.674l0.771,-1.415l-0.387,-1.159l1.159,0.386l1.545,-1.931l0,-1.544l0.901,-1.288l-0.902,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Madagascar",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malawi",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l-0.773,1.932l0.773,3.605l0.901,-0.130l1.030,0.902l1.030,1.930l0.258,3.476l-1.160,0.645l-0.772,1.801l-1.802,-1.674l-0.258,-1.931l0.645,-1.158l-0.130,-1.159l-1.159,-0.644l-0.643,0.259l-1.545,-1.289l-1.416,-0.770l0.772,-2.447l0.773,-0.902l-0.516,-2.317l0.645,-2.189l0.386,-0.644l-0.644,-2.315l-1.287,-1.160l2.704,0.514l1.415,1.933l-0.773,-3.732z";
}, function($ctx1) {$ctx1.fill(self,"Malawi",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Malaysia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M740.39,210.174l0.642,0.258l1.545,1.673l1.160,1.803l0.129,1.803l-0.258,1.287l0.258,0.900l0.129,1.545l1.029,0.772l1.030,2.318l0,0.901l-1.932,0.257l-2.574,-2.059l-3.217,-2.060l-0.260,-1.416l-1.543,-1.802l-0.386,-2.188l-1.032,-1.546l0.387,-1.931l-0.643,-1.158l0.516,-0.385l2.188,1.157l0.129,1.287l1.802,-0.257l-0.901,1.159zM760.601,221.632l2.058,0.901l2.061,-0.514l0.513,-2.318l1.159,-0.515l3.218,-0.515l1.932,-2.189l1.287,-1.673l1.287,1.417l0.516,-0.902l1.285,0l0.260,-1.674l0.127,-1.287l2.060,-1.931l1.287,-2.059l1.159,0l1.287,1.286l0.129,1.159l1.802,0.772l2.319,0.773l-0.258,1.158l-1.803,0.129l0.514,1.288l-2.059,0.901l-2.316,-0.515l-3.090,0l-0.900,3.089l-1.032,0.901l-1.414,3.862l-2.189,0.515l-2.574,-0.772l-1.289,0.257l-1.545,1.417l-1.672,-0.257l-1.803,0.514l-1.801,-1.416l0.515,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Malaysia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mali",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l0.902,-0.514l0.385,-1.674l0.902,0l1.930,0.772l1.416,-0.514l1.160,0.129l0.385,-0.644l10.814,0l0.514,-1.931l-0.385,-0.257l-1.288,-11.587l-1.416,-11.714l4.119,0l9.140,5.922l9.139,5.792l0.645,1.288l1.672,0.772l1.159,0.387l0.128,1.801l2.961,-0.257l0,6.179l-1.543,1.802l-0.130,1.674l-2.445,0.386l-3.735,0.258l-0.900,0.901l-1.802,0.129l-1.673,0l-0.644,-0.516l-1.545,0.387l-2.446,1.158l-0.514,0.774l-2.189,1.285l-0.257,0.645l-1.159,0.514l-1.287,-0.257l-0.773,0.644l-0.385,1.802l-2.189,2.189l0.128,0.900l-0.771,1.159l0.128,1.545l-1.030,0.515l-0.643,0.257l-0.387,-1.157l-0.772,0.385l-0.516,-0.129l-0.514,0.772l-2.059,0l-0.772,-0.386l-0.387,0.258l-0.772,-0.772l0.128,-0.773l-0.257,-0.386l-0.644,0.257l0.128,-0.900l0.516,-0.645l-1.030,-1.158l-0.386,-0.644l-0.644,-0.643l-0.515,-0.129l-0.643,0.385l-0.773,0.387l-0.772,0.644l-1.159,-0.258l-0.772,-0.643l-0.386,-0.130l-0.772,0.387l-0.387,0l-0.128,-1.030l0.128,-0.772l-0.257,-1.030l-1.030,-0.772l-0.515,-1.545l0.129,1.674z";
}, function($ctx1) {$ctx1.fill(self,"Mali",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mauritania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M432.471,187.646l-1.802,-1.930l-1.674,-1.931l-1.801,-0.772l-1.288,-0.773l-1.416,0l-1.287,0.643l-1.416,-0.257l-0.901,0.901l-0.258,-1.416l0.773,-1.416l0.386,-2.445l-0.386,-2.704l-0.258,-1.417l0.258,-1.287l-0.773,-1.287l-1.416,-1.158l0.643,-0.901l10.557,0l-0.515,-3.862l0.644,-1.417l2.574,-0.257l-0.129,-6.823l8.883,0.129l0,-4.120l10.040,6.566l-4.119,0l1.416,11.714l1.288,11.587l0.385,0.257l-0.514,1.931l-10.814,0l-0.385,0.644l-1.160,-0.129l-1.416,0.514l-1.930,-0.772l-0.902,0l-0.385,1.674l0.902,-0.514z";
}, function($ctx1) {$ctx1.fill(self,"Mauritania",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mexico",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M203.592,157.266l-1.030,2.446l-0.515,1.931l-0.257,3.605l-0.257,1.287l0.514,1.416l0.773,1.287l0.644,2.188l1.802,1.931l0.515,1.545l1.158,1.416l2.832,0.643l1.029,1.159l2.447,-0.772l2.060,-0.258l1.930,-0.513l1.803,-0.388l1.672,-1.158l0.644,-1.545l0.258,-2.317l0.386,-0.772l1.803,-0.644l2.961,-0.644l2.316,0l1.674,-0.129l0.644,0.516l-0.129,1.287l-1.417,1.674l-0.643,1.544l0.515,0.515l-0.386,1.158l-0.772,2.060l-0.644,-0.644l-0.515,0l-0.515,0.130l-1.030,1.544l-0.515,-0.258l-0.257,0.129l0,0.387l-2.446,0l-2.575,0l0,1.416l-1.158,0l0.901,0.901l1.030,0.643l0.387,0.644l0.385,0.128l-0.128,0.903l-3.347,0l-1.416,2.188l0.385,0.514l-0.257,0.643l-0.128,0.773l-2.961,-2.832l-1.416,-0.901l-2.189,-0.772l-1.544,0.257l-2.189,1.030l-1.287,0.258l-1.930,-0.773l-2.060,-0.515l-2.446,-1.158l-2.061,-0.387l-3.088,-1.287l-2.189,-1.286l-0.644,-0.645l-1.545,-0.258l-2.702,-0.772l-1.159,-1.287l-2.961,-1.545l-1.288,-1.673l-0.644,-1.287l0.902,-0.258l-0.258,-0.772l0.644,-0.772l0,-0.902l-0.901,-1.158l-0.257,-1.159l-0.902,-1.287l-2.445,-2.704l-2.703,-2.059l-1.288,-1.674l-2.317,-1.159l-0.515,-0.643l0.386,-1.674l-1.287,-0.643l-1.673,-1.287l-0.644,-1.802l-1.416,-0.258l-1.545,-1.416l-1.287,-1.288l-0.129,-0.901l-1.416,-2.060l-1.029,-2.059l0.128,-1.030l-1.931,-1.030l-0.901,0.129l-1.544,-0.773l-0.515,1.159l0.515,1.288l0.257,1.930l0.901,1.160l1.931,1.801l0.515,0.644l0.386,0.257l0.386,0.902l0.515,0l0.515,1.673l0.773,0.644l0.643,1.030l1.673,1.415l0.902,2.446l0.772,1.159l0.773,1.287l0.128,1.416l1.287,0.129l1.030,1.158l1.029,1.288l-0.128,0.386l-1.029,1.030l-0.516,0l-0.772,-1.673l-1.673,-1.546l-1.931,-1.286l-1.416,-0.644l0.129,-1.931l-0.515,-1.545l-1.288,-0.773l-1.802,-1.287l-0.386,0.386l-0.644,-0.643l-1.673,-0.643l-1.545,-1.675l0.129,-0.128l1.158,0.128l1.030,-1.029l0,-1.159l-2.059,-1.931l-1.545,-0.772l-1.031,-1.674l-0.900,-1.802l-1.287,-2.189l-1.159,-2.317l3.090,-0.256l3.475,-0.259l-0.258,0.515l3.992,1.288l6.178,1.931l5.407,0l2.060,0l0.129,-1.158l4.633,0l0.902,0.900l1.416,0.901l1.545,1.159l0.900,1.416l0.772,1.545l1.288,0.772l2.316,0.772l1.674,-2.058l2.189,-0.130l1.930,1.159l1.288,1.802l1.030,1.545l1.545,1.545l0.515,1.931l0.772,1.287l2.188,0.773l1.931,0.643l-1.030,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Mexico",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Moldova",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M536.998,97.02l0.644,-0.386l1.675,-0.259l2.059,0.903l1.029,0.128l1.287,0.644l-0.257,0.901l1.030,0.515l0.386,1.030l0.902,0.772l-0.131,0.386l0.517,0.258l-0.773,0.257l-1.545,-0.129l-0.258,-0.386l-0.513,0.258l0.129,0.386l-0.774,0.901l-0.385,0.901l-0.773,0.386l-0.387,-1.287l0.257,-1.159l-0.128,-1.158l-1.545,-1.674l-0.902,-1.029l-0.770,-0.901l0.774,0.258z";
}, function($ctx1) {$ctx1.fill(self,"Moldova",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mongolia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M701.642,94.188l2.832,-0.515l5.148,-2.317l4.121,-1.287l2.317,0.901l2.832,0l1.802,1.287l2.703,0.129l3.862,0.644l2.574,-1.931l-1.029,-1.545l2.703,-2.832l3.090,1.158l2.445,0.257l3.090,0.773l0.515,1.931l3.862,1.158l2.574,-0.515l3.348,-0.257l2.705,0.257l2.701,1.287l1.674,1.417l2.445,0l3.348,0.386l2.574,-0.644l3.476,-0.387l3.991,-1.930l1.545,0.258l1.414,0.900l3.218,-0.128l-1.287,1.931l-1.931,2.704l0.771,1.158l1.420,-0.386l2.701,0.386l2.059,-0.901l2.189,0.772l2.448,1.931l-0.258,0.902l-2.190,-0.258l-3.861,0.386l-1.932,0.772l-1.931,1.803l-4.119,1.029l-2.704,1.417l-2.832,-0.516l-1.416,-0.257l-1.416,1.674l0.774,1.030l0.515,0.900l-1.931,0.902l-1.932,1.416l-3.088,1.030l-4.121,0.128l-4.375,0.902l-3.090,1.416l-1.160,-0.773l-3.347,0l-3.862,-1.673l-2.701,-0.386l-3.605,0.386l-5.536,-0.644l-2.962,0l-1.672,-1.545l-1.159,-2.446l-1.673,-0.386l-3.217,-1.674l-3.606,-0.385l-3.216,-0.387l-1.032,-1.158l1.032,-3.219l-1.803,-2.188l-3.863,-0.901l-2.317,-1.545l0.644,1.802z";
}, function($ctx1) {$ctx1.fill(self,"Mongolia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Morocco",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M461.436,138.472l0.772,0.514l-0.515,1.030l-3.476,0.515l-1.287,1.030l-1.545,0.128l-0.128,2.061l-3.090,1.029l-1.030,1.417l-2.188,0.644l-2.703,0.514l-4.377,1.931l0,3.218l-0.387,0l0,1.417l-1.544,0.128l-0.901,0.515l-1.288,0l-0.900,-0.257l-2.319,0.257l-0.900,2.060l-0.773,0.257l-1.287,3.347l-3.733,2.961l-0.901,3.733l-1.159,1.159l-0.257,1.029l-6.050,0.129l-0.129,0l0.129,-1.158l1.030,-0.772l0.901,-1.416l-0.129,-0.902l0.901,-1.930l1.545,-1.674l0.901,-0.515l0.644,-1.546l0.128,-1.415l0.901,-1.673l1.802,-1.031l1.803,-2.703l1.287,-1.030l2.574,-0.386l2.060,-1.802l1.416,-0.644l2.189,-2.317l-0.644,-3.347l1.031,-2.317l0.384,-1.416l1.675,-1.803l2.703,-1.287l2.059,-1.029l1.802,-2.833l0.773,-1.673l2.059,0l1.545,1.158l2.575,-0.128l2.832,0.515l1.159,0.128l1.030,1.674l0.128,1.674l-0.902,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Morocco",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Mozambique",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M558.368,258.062l1.931,-0.256l3.347,0.771l0.644,-0.386l1.930,0l0.902,-0.900l1.672,0.128l2.961,-1.030l2.060,-1.674l0.516,1.287l-0.129,2.705l0.257,2.316l0.128,4.248l0.516,1.289l-0.772,1.930l-1.160,1.803l-1.673,1.673l-2.446,1.030l-3.090,1.416l-2.961,2.830l-1.029,0.517l-1.930,1.930l-1.160,0.643l-0.128,1.803l1.288,2.060l0.514,1.674l-0.129,1.415l0.644,-0.770l-0.129,2.573l-0.386,1.288l0.643,0.514l-0.387,1.030l-1.157,1.030l-2.187,0.901l-3.349,1.417l-1.159,1.030l0.259,1.158l0.643,0.127l-0.130,1.418l-2.058,0l-0.259,-1.158l-0.385,-1.289l-0.258,-0.901l0.514,-3.090l-0.771,-1.801l-1.287,-3.863l2.832,-3.089l0.773,-1.930l0.386,-0.258l0.257,-1.545l-0.385,-0.773l0.128,-2.061l0.513,-1.801l0,-3.475l-1.415,-0.774l-1.287,-0.254l-0.515,-0.645l-1.287,-0.645l-2.317,0.129l-0.129,-1.029l-0.258,-1.932l8.239,-2.189l1.545,1.289l0.643,-0.259l1.159,0.644l0.130,1.159l-0.645,1.158l0.258,1.931l1.802,1.674l0.772,-1.801l1.160,-0.645l-0.258,-3.476l-1.030,-1.930l-1.030,-0.902l-0.901,0.130l-0.773,-3.605l-0.773,1.932z";
}, function($ctx1) {$ctx1.fill(self,"Mozambique",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "MyanmarBurma",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M733.437,172.585l-1.672,1.159l-1.803,0.129l-1.287,2.960l-1.158,0.515l1.287,2.317l1.802,1.931l1.030,1.802l-0.901,2.318l-1.029,0.514l0.643,1.416l1.802,2.060l0.387,1.545l-0.129,1.287l1.158,2.447l-1.545,2.445l-1.287,2.832l-0.257,-2.059l0.773,-2.060l-0.902,-1.544l0.257,-2.962l-1.158,-1.416l-0.773,-3.219l-0.516,-3.345l-1.158,-2.318l-1.803,1.415l-3.088,1.932l-1.416,-0.257l-1.673,-0.644l0.902,-3.347l-0.647,-2.575l-2.058,-3.090l0.386,-0.900l-1.671,-0.387l-1.934,-2.188l-0.127,-2.189l0.900,0.387l0.129,-1.932l1.287,-0.643l-0.255,-1.159l0.642,-0.900l0,-2.704l2.188,0.515l1.160,-2.189l0.127,-1.287l1.545,-2.317l-0.127,-1.545l3.474,-1.802l1.930,0.515l-0.256,-1.674l1.030,-0.515l-0.258,-1.029l1.545,-0.130l0.900,1.545l1.289,0.644l0,2.060l-0.131,2.188l-2.445,2.318l-0.387,3.089l2.832,-0.386l0.645,2.446l1.674,0.515l-0.772,2.317l2.059,1.030l1.160,0.387l1.930,-0.773l0.128,1.158l-2.318,1.802l-0.516,0.902l1.544,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"MyanmarBurma",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Namibia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M509.322,304.019l-2.059,-2.059l-1.030,-2.060l-0.644,-2.575l-0.645,-1.930l-0.900,-4.120l0,-3.216l-0.387,-1.545l-1.029,-1.032l-1.416,-2.317l-1.414,-3.218l-0.647,-1.674l-2.187,-2.575l-0.128,-2.058l1.288,-0.516l1.674,-0.515l1.672,0.128l1.674,1.159l0.384,-0.128l10.944,-0.128l1.801,1.287l6.566,0.385l4.892,-1.158l2.187,-0.644l1.803,0.258l1.030,0.513l0,0.259l-1.416,0.645l-0.901,0l-1.674,1.028l-1.029,-1.158l-4.119,1.030l-2.060,0l-0.129,9.654l-2.574,0.130l0,7.852l0,9.912l-2.446,1.416l-1.418,0.129l-1.673,-0.514l-1.288,-0.129l-0.383,-1.158l-1.033,-0.773l1.286,-1.415z";
}, function($ctx1) {$ctx1.fill(self,"Namibia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nepal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M702.673,151.859l-0.258,1.159l0.385,1.674l-0.385,1.158l-2.189,0l-3.219,-0.644l-2.059,-0.257l-1.674,-1.287l-3.603,-0.386l-3.604,-1.545l-2.447,-1.287l-2.703,-1.031l1.160,-2.573l1.672,-1.160l1.158,-0.643l2.061,0.772l2.703,1.802l1.545,0.386l0.900,1.288l2.188,0.515l2.189,1.158l2.959,0.644l-3.221,-0.257z";
}, function($ctx1) {$ctx1.fill(self,"Nepal",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Netherlands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M481.646,82.859l2.188,0l0.515,0.902l-0.644,2.574l-0.773,0.901l-1.544,0l0.386,2.833l-1.416,-0.644l-1.673,-1.158l-2.574,0.643l-1.932,-0.258l1.417,-0.772l2.317,-3.991l-3.733,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Netherlands",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NewCaledonia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M911.856,283.809l2.188,1.673l1.416,1.159l-1.029,0.643l-1.545,-0.643l-1.932,-1.287l-1.672,-1.416l-1.803,-1.932l-0.386,-0.901l1.158,0.129l1.545,0.901l1.158,0.902l-0.902,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"NewCaledonia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NewZealand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M941.72,334.914l-1.030,1.417l-1.287,1.931l-2.058,1.030l-0.514,-0.772l-1.160,-0.386l1.545,-2.189l-0.774,-1.416l-2.961,-1.159l0.131,-0.901l1.930,-1.030l0.387,-2.059l-0.129,-1.674l-1.029,-1.803l0,-0.514l-1.290,-1.158l-2.058,-2.317l-1.158,-1.932l1.027,-0.256l1.418,1.544l2.187,0.773l0.774,2.315l1.930,2.834l0,-1.803l1.289,0.773l0.384,1.931l2.190,0.901l1.803,0.257l1.545,-1.030l1.285,0.258l-0.645,2.446l-0.771,1.544l-2.059,0l-0.771,0.773l0.255,1.158l0.386,-0.514zM922.282,344.312l2.319,-1.416l1.671,-1.416l1.161,-1.931l1.029,-0.772l0.387,-1.416l1.929,-1.287l0.514,1.158l0.645,1.030l1.933,-1.030l0.770,1.160l0,1.157l-1.028,1.160l-1.802,2.059l-1.289,1.029l1.029,1.288l-2.188,0l-2.316,1.030l-0.645,1.803l-1.545,2.703l-2.060,1.286l-1.414,0.773l-2.445,-0.128l-1.805,-0.901l-2.830,-0.130l-0.516,-1.030l1.416,-1.930l3.477,-2.704l1.672,-0.515l-1.931,1.030z";
}, function($ctx1) {$ctx1.fill(self,"NewZealand",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nicaragua",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M234.359,197.045l-0.902,-0.774l-1.287,-1.158l-0.643,-0.901l-1.159,-0.773l-1.288,-1.287l0.258,-0.386l0.514,0.386l0.129,-0.129l0.902,-0.128l0.257,-0.644l0.387,0l0,-1.288l0.643,-0.129l0.515,0l0.643,-0.643l0.773,0.515l0.258,-0.386l0.515,-0.258l0.900,-0.771l0.129,-0.516l0.257,0l0.258,-0.643l0.258,-0.130l0.514,0.517l0.516,0.127l0.643,-0.385l0.643,0l0.902,-0.386l0.386,-0.386l0.901,0.128l-0.129,0.258l-0.129,0.514l0.258,1.030l-0.643,0.901l-0.258,1.159l-0.129,1.158l0.129,0.644l0.128,1.287l-0.514,0.258l-0.129,1.159l0.129,0.644l-0.516,0.771l0.130,0.645l0.386,0.514l-0.644,0.514l-0.772,-0.128l-0.515,-0.644l-0.773,-0.128l-0.644,0.257l-1.801,-0.644l0.386,-0.259z";
}, function($ctx1) {$ctx1.fill(self,"Nicaragua",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Niger",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M471.091,194.855l0,-1.930l-3.091,-0.515l-0.128,-1.417l-1.545,-1.673l-0.258,-1.287l0.129,-1.287l1.802,-0.129l0.900,-0.901l3.735,-0.258l2.445,-0.386l0.130,-1.674l1.543,-1.802l0,-6.179l3.734,-1.288l7.852,-5.276l9.269,-5.150l4.248,1.159l1.416,1.544l1.932,-1.030l0.643,4.249l1.029,0.643l0.129,0.901l1.030,0.901l-0.514,1.159l-1.030,5.406l-0.130,3.605l-3.475,2.446l-1.158,3.605l1.158,1.029l0,1.673l1.674,0.130l-0.258,1.158l-0.774,0.257l-0.128,0.773l-0.514,0.128l-1.803,-2.960l-0.644,-0.129l-2.058,1.545l-2.061,-0.772l-1.545,-0.258l-0.772,0.386l-1.545,0l-1.544,1.159l-1.416,0l-3.219,-1.417l-1.286,0.644l-1.416,0l-1.030,-1.030l-2.704,-1.029l-2.832,0.385l-0.772,0.516l-0.259,1.544l-0.770,1.159l-0.258,2.447l-2.059,-1.674l-0.901,0.127l0.901,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"Niger",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Nigeria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M488.082,214.166l-2.704,0.900l-1.029,-0.128l-1.031,0.644l-2.188,-0.129l-1.415,-1.674l-0.902,-1.931l-1.931,-1.802l-2.059,0.128l-2.318,0l0.130,-4.376l0,-1.802l0.386,-1.674l0.901,-0.773l1.288,-1.672l-0.258,-0.773l0.514,-1.031l-0.643,-1.673l0.129,-0.771l0.258,-2.447l0.770,-1.159l0.259,-1.544l0.772,-0.516l2.832,-0.385l2.704,1.029l1.030,1.030l1.416,0l1.286,-0.644l3.219,1.417l1.416,0l1.544,-1.159l1.545,0l0.772,-0.386l1.545,0.258l2.061,0.772l2.058,-1.545l0.644,0.129l1.803,2.960l0.514,-0.128l1.160,1.158l-0.387,0.386l-0.129,0.901l-2.188,2.189l-0.773,1.673l-0.387,1.417l-0.513,0.514l-0.645,1.931l-1.414,1.159l-0.387,1.288l-0.644,1.159l-0.257,1.029l-1.803,0.901l-1.546,-1.030l-1.029,0l-1.544,1.545l-0.771,0.128l-1.289,2.575l0.772,-1.932z";
}, function($ctx1) {$ctx1.fill(self,"Nigeria",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "NorthKorea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M817.112,112.726l0.385,0.514l-1.029,-0.129l-1.158,0.902l-0.774,0.901l0.131,1.930l-1.418,0.644l-0.516,0.386l-1.027,0.772l-1.803,0.516l-1.158,0.773l0,1.158l-0.387,0.257l1.157,0.386l1.418,1.159l-0.385,0.772l-1.033,0.129l-1.930,0.129l-1.029,1.158l-1.285,0l-0.131,0.257l-1.287,-0.514l-0.385,0.386l-0.774,0.257l-0.129,-0.514l-0.644,-0.258l-0.772,-0.386l0.772,-1.159l0.644,-0.385l-0.255,-0.387l0.640,-1.545l-0.127,-0.386l-1.545,-0.258l-1.289,-0.772l2.190,-1.673l2.961,-1.546l1.802,-1.930l1.287,0.900l2.319,0.130l-0.387,-1.417l4.248,-1.157l1.029,-1.546l-1.674,-1.546z";
}, function($ctx1) {$ctx1.fill(self,"NorthKorea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Norway",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M494.905,68.442l-1.802,-1.674l-5.279,3.090l-3.603,0.643l-3.734,-1.415l-0.902,-2.833l-0.900,-6.179l2.445,-1.802l7.080,-2.189l5.407,-2.832l4.892,-3.733l6.435,-5.278l4.508,-1.931l7.465,-3.476l5.922,-1.158l4.377,0.129l4.119,-2.188l4.893,0.128l4.889,-0.515l8.368,1.931l-3.474,0.773l2.961,1.672l-4.507,1.031l-2.189,0.257l1.159,-1.803l-3.476,-1.157l-4.247,0.900l-1.289,2.060l-2.572,1.159l-2.832,-0.644l-3.606,0.129l-2.961,-1.416l-1.545,0.643l-1.673,0.129l-0.513,1.803l-5.022,-0.387l-0.644,1.417l-2.702,0l-1.674,1.931l-2.703,2.960l-4.248,3.862l1.031,0.901l-0.903,1.030l-2.705,0l-1.800,2.446l0.127,3.605l1.803,1.415l-0.900,3.090l-2.318,1.931l1.158,-1.545z";
}, function($ctx1) {$ctx1.fill(self,"Norway",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Oman",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M617.197,159.841l1.157,1.802l1.545,1.030l1.932,0.387l1.674,0.385l1.158,1.545l0.772,0.902l0.902,0.385l0,0.644l-1.031,1.545l-0.387,0.772l-1.158,0.902l-1.029,1.802l-1.157,-0.130l-0.517,0.645l-0.514,1.416l0.385,1.673l-0.257,0.387l-1.286,0l-1.675,1.028l-0.257,1.289l-0.642,0.514l-1.675,0l-1.031,0.773l0,1.029l-1.287,0.773l-1.416,-0.257l-1.802,0.900l-1.286,0.129l-0.900,-1.930l-2.061,-4.378l7.981,-2.702l1.802,-5.408l-1.159,-1.931l0,-1.030l0.773,-1.159l0.129,-1.029l1.159,-0.515l-0.517,-0.386l0.258,-1.802l-1.417,0zM616.294,156.752l0.773,-0.902l0.387,0.257l-0.257,1.159l-0.385,0.386l0.518,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Oman",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Pakistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M667.659,126.886l2.059,1.287l0.773,2.059l4.375,1.159l-2.572,2.189l-2.961,0.386l-4.121,-0.643l-1.287,1.157l0.900,2.447l1.031,1.802l2.059,1.287l-2.187,1.545l0,1.931l-2.575,2.704l-1.802,2.702l-2.704,2.833l-3.218,-0.129l-2.961,2.832l1.802,1.159l0.258,2.059l1.545,1.417l0.514,2.317l-5.922,0l-1.801,1.802l-1.931,-0.772l-0.774,-1.932l-2.187,-2.059l-4.891,0.514l-4.377,0.130l-3.863,0.386l1.030,-3.218l3.992,-1.288l-0.259,-1.287l-1.288,-0.386l-0.128,-2.446l-2.574,-1.159l-1.031,-1.674l-1.414,-1.415l4.504,1.415l2.704,-0.386l1.674,0.386l0.514,-0.643l1.931,0.257l3.476,-1.159l0.129,-2.317l1.417,-1.544l2.058,0l0.257,-0.644l2.061,-0.386l1.029,0.257l1.031,-0.772l-0.129,-1.674l1.158,-1.545l1.673,-0.772l-1.030,-1.673l2.575,0l0.773,-0.902l-0.129,-1.029l1.287,-1.159l-0.257,-1.416l-0.645,-1.029l1.545,-1.287l2.833,-0.517l3.090,-0.256l1.416,-0.516l-1.545,0.385z";
}, function($ctx1) {$ctx1.fill(self,"Pakistan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Palestine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M560.942,139.759l0,1.544l-0.386,0.902l-1.287,0.257l0.128,-0.644l0.774,-0.385l-0.774,-0.258l0.645,-1.803l-0.900,-0.387z";
}, function($ctx1) {$ctx1.fill(self,"Palestine",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Panama",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M255.47,207.471l-0.902,-0.772l-0.643,-1.416l0.643,-0.773l-0.643,-0.127l-0.514,-0.903l-1.288,-0.771l-1.159,0.257l-0.644,0.900l-1.029,0.644l-0.644,0.129l-0.257,0.515l1.287,1.545l-0.643,0.258l-0.387,0.385l-1.287,0.129l-0.515,-1.544l-0.387,0.386l-0.772,-0.129l-0.643,-1.030l-1.030,-0.258l-0.773,-0.257l-1.158,0l0,0.644l-0.387,-0.515l0.130,-0.515l0.257,-0.515l-0.128,-0.515l0.385,-0.257l-0.514,-0.387l0,-1.157l1.029,-0.260l1.030,1.031l-0.129,0.516l1.159,0.129l0.129,-0.129l0.772,0.643l1.416,-0.258l1.031,-0.643l1.673,-0.515l0.900,-0.901l1.545,0.257l-0.129,0.257l1.545,0l1.159,0.516l0.900,0.773l1.031,0.771l-0.386,0.387l0.643,1.544l-0.515,0.901l-0.900,-0.257l0.258,-1.287z";
}, function($ctx1) {$ctx1.fill(self,"Panama",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PapuaNewGuinea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M845.175,242.742l-0.129,-8.752l4.635,1.803l5.019,1.543l1.932,1.417l1.416,1.417l0.385,1.544l4.505,1.673l0.645,1.416l-2.445,0.258l0.642,1.802l2.317,1.802l1.802,2.832l1.545,-0.128l-0.129,1.287l2.059,0.387l-0.771,0.514l2.832,1.158l-0.258,0.773l-1.803,0.129l-0.641,-0.644l-2.320,-0.258l-2.701,-0.385l-2.061,-1.803l-1.545,-1.416l-1.414,-2.446l-3.478,-1.159l-2.315,0.772l-1.673,0.902l0.386,2.059l-2.189,0.902l-1.416,-0.515l-2.832,-0.129l0,8.755zM876.454,236.822l1.031,0.901l0.258,1.417l-0.771,0.641l-0.518,-1.544l-0.642,-1.028l-1.288,-0.902l-1.545,-1.159l-1.931,-0.773l0.773,-0.643l1.416,0.773l1.030,0.515l1.031,0.642l-1.156,-1.160zM872.851,242.742l-1.545,0.645l-1.287,0.644l-1.545,0l-2.188,-0.772l-1.545,-0.773l0.256,-0.901l2.447,0.388l1.416,-0.131l0.387,-1.287l0.385,-0.127l0.260,1.414l1.543,-0.128l0.773,-0.902l1.543,-1.031l-0.256,-1.544l1.543,-0.128l0.516,0.515l0,1.416l-0.901,1.674l-1.416,0.259l0.386,-0.769zM882.118,241.328l0.776,0.645l1.414,1.673l1.158,0.900l-0.258,0.771l-0.771,0.259l-1.159,-1.030l-1.287,-1.673l-0.515,-2.061l0.386,-0.257l-0.256,-0.773z";
}, function($ctx1) {$ctx1.fill(self,"PapuaNewGuinea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Paraguay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M296.405,286.898l1.030,-3.219l0,-1.414l1.416,-2.447l4.634,-0.772l2.446,0.130l2.575,1.285l0,0.902l0.772,1.415l-0.128,3.736l2.831,0.513l1.160,-0.513l1.801,0.642l0.516,0.903l0.256,2.443l0.259,1.031l1.028,0.129l1.031,-0.516l0.901,0.516l0,1.544l-0.386,1.545l-0.515,1.546l-0.386,2.445l-2.446,2.059l-2.189,0.387l-2.961,-0.387l-2.702,-0.772l2.574,-4.121l-0.386,-1.157l-2.703,-1.030l-3.348,-2.059l-2.188,-0.387l4.892,4.377z";
}, function($ctx1) {$ctx1.fill(self,"Paraguay",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Peru",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M277.74,274.281l-0.644,1.417l-1.415,0.644l-2.704,-1.543l-0.258,-1.031l-5.278,-2.705l-4.891,-2.959l-2.059,-1.674l-1.159,-2.188l0.515,-0.773l-2.318,-3.605l-2.703,-4.891l-2.446,-5.407l-1.158,-1.288l-0.902,-1.930l-2.058,-1.802l-1.932,-1.028l0.901,-1.161l-1.287,-2.576l0.772,-1.929l2.189,-1.673l0.386,1.030l-0.773,0.643l0,1.029l1.159,-0.257l1.030,0.388l1.159,1.286l1.545,-1.030l0.514,-1.802l1.673,-2.446l3.219,-1.030l2.961,-2.832l0.772,-1.674l-0.386,-2.059l0.772,-0.258l1.802,1.288l0.772,1.287l1.288,0.644l1.544,2.832l2.060,0.257l1.416,-0.644l1.030,0.516l1.673,-0.259l2.060,1.287l-1.802,2.704l0.772,0l1.416,1.417l-2.446,-0.129l-0.386,0.514l-2.188,0.515l-3.089,1.802l-0.129,1.288l-0.772,0.901l0.257,1.416l-1.545,0.773l0,1.158l-0.772,0.516l1.158,2.445l1.546,1.674l-0.644,1.158l1.801,0.129l1.030,1.416l2.317,0l2.317,-1.545l-0.256,4.119l1.287,0.257l1.416,-0.384l2.445,4.248l-0.644,0.901l-0.128,1.931l0,2.317l-1.159,1.287l0.515,1.029l-0.643,0.901l1.158,2.318l1.673,-2.830z";
}, function($ctx1) {$ctx1.fill(self,"Peru",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Philippines",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M790.722,192.797l-1.416,-2.061l2.318,0l1.031,1.030l-0.775,2.316l1.158,1.285zM795.485,200.134l0.645,-0.773l0.256,-1.673l1.545,-0.129l-0.385,1.802l1.930,-2.703l-0.258,2.574l-0.903,0.902l-0.900,1.802l-0.900,0.773l-1.545,-1.932l-0.515,0.643zM805.655,204.253l0.258,1.802l0.256,1.545l-1.029,2.446l-0.901,-2.704l-1.289,1.287l0.903,2.060l-0.774,1.288l-3.217,-1.545l-0.771,-2.059l0.898,-1.287l-1.801,-1.159l-0.773,1.030l-1.285,-0.129l-2.061,1.545l-0.386,-0.773l1.031,-2.317l1.672,-0.773l1.545,-0.901l0.902,1.159l2.061,-0.772l0.384,-1.158l1.930,-0.129l-0.129,-2.061l2.192,1.288l0.255,1.416l-0.129,-0.901zM784.415,201.936l-3.477,2.447l1.288,-1.804l1.929,-1.673l1.676,-1.931l1.285,-2.575l0.518,2.190l-1.803,1.415l1.416,-1.931zM794.841,177.863l-0.514,1.159l0.901,1.931l-0.643,2.188l-1.545,0.901l-0.516,2.188l0.645,2.189l1.416,0.257l1.158,-0.257l3.348,1.415l-0.258,1.417l0.900,0.772l-0.257,1.159l-2.061,-1.287l-1.029,-1.416l-0.643,1.031l-1.803,-1.676l-2.445,0.387l-1.287,-0.515l0.127,-1.157l0.775,-0.645l-0.775,-0.643l-0.256,0.901l-1.416,-1.545l-0.387,-1.159l-0.127,-2.575l1.157,0.902l0.257,-4.248l0.901,-2.447l1.545,0l1.674,0.773l0.902,-0.643l-0.256,-0.643zM793.94,196.271l-0.386,-1.286l1.674,0.771l1.673,0l0,1.160l-1.287,1.157l-1.674,0.773l-0.128,-1.287l-0.128,1.288zM803.337,194.212l0.773,2.961l-2.060,-0.644l0,0.901l0.644,1.674l-1.287,0.514l-0.129,-1.802l-0.773,-0.128l-0.385,-1.674l1.545,0.257l0,-1.029l-1.676,-2.060l2.576,0l-0.772,-1.030z";
}, function($ctx1) {$ctx1.fill(self,"Philippines",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Poland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M505.718,89.295l-1.158,-1.672l0.257,-1.030l-0.644,-1.417l-1.029,-0.901l0.770,-0.773l-0.642,-1.287l1.802,-0.901l4.248,-1.158l3.347,-0.901l2.703,0.387l0.258,0.643l2.574,0.129l3.348,0.256l4.890,0l1.417,0.259l0.644,0.772l0.129,1.288l0.771,1.029l0,1.029l-1.672,0.516l0.772,1.287l0.129,1.159l1.286,2.317l-0.257,0.773l-1.287,0.385l-2.447,2.189l0.646,1.287l-0.515,-0.257l-2.577,-1.030l-1.929,0.386l-1.289,-0.257l-1.672,0.644l-1.289,-1.030l-1.158,0.386l-0.127,-0.129l-1.289,-1.416l-1.930,-0.129l-0.257,-0.772l-1.802,-0.386l-0.517,0.773l-1.414,-0.644l0.129,-0.645l-1.932,-0.256l1.287,0.903z";
}, function($ctx1) {$ctx1.fill(self,"Poland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Portugal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l1.031,-0.643l1.158,-0.387l0.643,1.287l1.545,0l0.514,-0.385l1.545,0.128l0.773,1.416l-1.287,0.643l0,2.189l-0.514,0.387l0,1.159l-1.160,0.256l1.030,1.674l-0.772,1.674l0.902,0.900l-0.258,0.644l-1.030,1.030l0.257,0.902l-1.158,0.772l-1.416,-0.387l-1.416,0.258l0.386,-2.059l-0.129,-1.674l-1.288,-0.258l-0.643,-1.030l0.259,-1.802l1.028,-0.900l0.259,-1.159l0.514,-1.545l0,-1.159l-0.644,-1.030l0.129,0.901z";
}, function($ctx1) {$ctx1.fill(self,"Portugal",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "PuertoRico",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M286.622,177.09l1.416,0.258l0.516,0.515l-0.644,0.643l-2.060,0l-1.545,0.129l-0.258,-1.158l0.387,-0.387l-2.188,0z";
}, function($ctx1) {$ctx1.fill(self,"PuertoRico",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Qatar",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M602.136,160.227l-0.257,-1.931l0.770,-1.416l0.772,-0.257l0.775,0.901l0,1.545l-0.517,1.544l-0.772,0.258l0.771,0.644z";
}, function($ctx1) {$ctx1.fill(self,"Qatar",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofMacedonia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M520.651,114.27l0.385,0l0.129,-0.515l1.545,-0.515l1.544,-0.257l1.288,0l1.287,0.900l0.258,1.674l-0.514,0.130l-0.515,0.513l-1.417,-0.128l-1.029,0.643l-1.804,0.258l-1.029,-0.643l-0.385,-1.160l-0.257,0.900z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofMacedonia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "RepublicofTurkey",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M535.712,120.707l2.961,-2.575l4.247,-0.129l1.030,-2.060l5.150,0.387l3.217,-1.803l3.219,-0.772l4.376,0l4.765,1.932l3.860,1.028l3.089,-0.515l2.317,0.259l3.218,-1.417l2.834,-0.128l2.702,1.416l0.386,0.901l-0.256,1.288l2.059,0.643l1.029,0.773l-1.802,0.772l0.773,3.089l-0.516,0.901l1.416,2.189l-1.287,0.385l-0.899,-0.643l-3.091,-0.385l-1.158,0.385l-3.090,0.515l-1.416,-0.128l-3.090,1.028l-2.317,0l-1.416,-0.514l-2.960,0.772l-0.902,-0.514l-0.129,1.545l-0.643,0.515l-0.772,0.643l-1.029,-1.287l1.029,-0.902l-1.674,0.129l-2.188,-0.514l-1.803,1.544l-4.118,0.257l-2.189,-1.416l-2.961,-0.128l-0.644,1.159l-1.802,0.256l-2.574,-1.415l-2.961,0l-1.545,-2.574l-2.058,-1.545l1.286,-2.060l1.673,1.287zM535.581,114.27l2.705,-0.772l2.317,0.257l0.386,1.030l2.317,0.902l-0.514,0.643l-3.219,0.257l-1.031,0.772l-2.314,1.417l-0.774,-1.159l0,-0.644l0.645,-0.258l0.771,-1.673l1.289,0.772z";
}, function($ctx1) {$ctx1.fill(self,"RepublicofTurkey",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Romania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M526.442,97.921l1.159,-0.515l1.674,0.258l1.673,0l1.289,0.772l0.899,-0.515l1.931,-0.257l0.773,-0.644l1.158,0l0.774,0.258l0.770,0.901l0.902,1.029l1.545,1.674l0.128,1.158l-0.257,1.159l0.387,1.287l1.287,0.386l1.287,-0.386l1.158,0.515l0,0.645l-1.287,0.643l-0.772,-0.258l-0.773,3.219l-1.544,-0.258l-1.930,-1.030l-3.219,0.644l-1.287,0.644l-3.990,-0.130l-2.059,-0.386l-1.031,0.129l-0.773,-1.030l-0.513,-0.515l0.641,-0.386l-0.771,-0.386l-0.774,0.644l-1.543,-0.773l-0.257,-1.158l-1.674,-0.643l-0.258,-0.902l-1.416,-1.030l2.059,-0.515l1.673,-1.802l1.290,-1.803l-1.671,0.643z";
}, function($ctx1) {$ctx1.fill(self,"Romania",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Russia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M950.089,36.129l-0.258,0l-0.516,-1.801l0.774,-0.772l0.127,-0.129l6.308,1.158l6.435,-1.544zM586.045,9.869l5.276,-0.515l4.121,0l0.514,0.773l1.545,-0.644l2.574,-0.515l3.990,0.644l-1.028,0.386l-3.605,0.385l-2.447,0.130l-0.384,0.514l-3.221,0.386l-2.830,-0.643l1.545,-0.772l6.050,0.129zM950.089,51.964l-3.992,1.802l2.574,3.219l-0.641,2.188l-5.539,-0.773l-7.336,1.674l-6.177,2.703l-4.764,2.703l-3.990,-1.673l-7.725,1.803l-6.693,0.128l-4.377,4.506l3.088,0.772l0,4.634l-3.475,1.545l0.645,1.803l-4.506,1.544l-1.159,3.219l-4.250,1.158l-0.513,1.931l-4.119,3.089l-1.674,-6.178l-1.545,-5.922l1.545,-4.249l2.060,-1.157l0.127,-1.287l3.864,-0.773l5.148,-3.219l4.506,-2.832l5.019,-2.060l2.061,-3.732l-3.219,0.128l-1.672,2.317l-6.695,2.446l-2.187,-3.089l-7.081,0.901l-6.693,4.247l1.803,1.288l-6.309,1.416l-10.041,-1.416l-11.715,0l-6.564,1.159l-8.369,5.278l-9.781,5.665l3.861,0.643l0.771,2.317l3.092,0.385l1.672,-1.545l2.961,0.387l3.475,2.060l0.515,3.089l-1.543,2.189l-0.902,2.575l-1.031,5.535l-4.120,3.862l-0.900,1.802l-3.603,3.219l-3.735,3.089l-1.674,1.545l-3.603,1.674l-1.674,0l-1.674,-1.288l-3.601,1.931l-0.518,0.901l-0.385,-0.514l0,-1.288l1.416,-0.129l0.385,-3.219l-0.771,-2.317l2.318,-0.901l3.346,0.516l1.802,-2.704l0.901,-2.832l1.031,-1.029l1.414,-2.448l-4.375,0.774l-2.447,1.030l-3.990,0l-1.159,-2.447l-3.218,-1.930l-4.635,-0.902l-1.029,-2.574l-0.901,-1.674l-1.031,-1.158l-1.674,-2.703l-2.316,-1.030l-4.119,-0.772l-3.475,0l-3.350,0.513l-2.316,1.417l1.545,0.644l0,1.416l-1.414,0.901l-2.447,2.832l0,1.159l-3.862,1.672l-3.219,-0.900l-3.218,0.128l-1.414,-0.900l-1.545,-0.258l-3.991,1.930l-3.476,0.387l-2.574,0.644l-3.348,-0.386l-2.445,0l-1.674,-1.417l-2.701,-1.287l-2.705,-0.257l-3.348,0.257l-2.574,0.515l-3.862,-1.158l-0.515,-1.931l-3.090,-0.773l-2.445,-0.257l-3.090,-1.158l-2.703,2.832l1.029,1.545l-2.574,1.931l-3.862,-0.644l-2.703,-0.129l-1.802,-1.287l-2.832,0l-2.317,-0.901l-4.121,1.287l-5.148,2.317l-2.832,0.515l-1.030,0.258l-1.414,-1.675l-3.478,0.387l-1.158,-1.159l-1.930,-0.515l-1.289,-1.545l-1.545,-0.514l-3.860,0.644l-3.605,-1.546l-1.545,1.416l-5.922,-6.822l-3.474,-2.060l1.029,-0.901l-6.822,2.575l-2.577,0.128l0.258,-1.416l-3.474,-0.901l-2.832,0.645l-0.901,-2.833l-4.763,-0.644l-2.446,1.160l-6.693,1.028l-1.418,0.644l-10.039,0.901l-1.158,0.901l1.929,1.931l-2.575,0.644l0.515,0.772l-2.702,1.288l4.376,1.931l-0.644,1.159l-3.732,0l-0.773,0.772l-3.474,-1.416l-4.250,0l-2.961,1.158l-3.088,-1.029l-5.922,-1.931l-4.248,0.127l-5.535,2.962l-0.387,1.931l-2.705,-1.544l-2.186,2.960l0.772,0.515l-1.545,2.060l2.317,1.802l1.931,-0.129l1.803,1.803l-0.387,1.416l1.416,0.514l-1.287,1.546l-2.575,0.386l-2.704,2.831l2.445,2.576l-0.255,1.801l2.960,3.218l-1.545,1.030l-0.516,0.644l-1.158,-0.129l-1.931,-1.673l-0.643,0l-1.803,-0.644l-0.772,-1.158l-2.446,-0.516l-1.671,0.387l-0.517,-0.515l-3.604,-1.287l-3.990,-0.386l-2.318,-0.516l-0.256,0.387l-3.477,-2.318l-3.089,-1.029l-2.318,-1.545l1.931,-0.514l2.317,-2.189l-1.544,-1.030l3.991,-1.159l-0.129,-0.643l-2.446,0.515l0.128,-1.159l1.417,-0.772l2.575,-0.258l0.384,-0.901l-0.513,-1.417l1.029,-1.415l0,-0.772l-3.990,-0.902l-1.545,0l-1.674,-1.287l-2.059,0.386l-3.476,-0.901l0.129,-0.514l-1.030,-1.159l-2.058,-0.129l-0.258,-0.901l0.643,-0.515l-1.673,-1.544l-2.833,0.256l-0.772,-0.128l-0.773,0.644l-0.901,-0.129l-0.643,-1.674l-0.644,-0.901l0.516,-0.257l2.187,0.128l1.030,-0.643l-0.772,-0.772l-1.803,-0.387l0.129,-0.515l-1.160,-0.515l-1.672,-1.802l0.645,-0.644l-0.258,-1.287l-2.703,-0.643l-1.416,0.385l-0.387,-0.772l-2.833,-0.644l-0.901,-1.545l-0.129,-1.287l-1.286,-0.644l1.158,-0.901l-0.900,-2.446l1.930,-1.544l-0.386,-0.515l3.089,-1.545l-2.832,-1.287l5.792,-3.347l2.448,-1.545l1.030,-1.416l-3.991,-1.802l1.157,-1.802l-2.445,-2.060l1.801,-2.318l-3.089,-2.960l2.448,-2.060l-4.119,-1.801l0.384,-1.932l2.189,-0.257l4.507,-1.031l2.830,-0.900l4.378,1.545l7.466,0.643l10.169,3.089l2.059,1.288l0.129,1.802l-7.336,2.061l-12.102,-2.061l-1.929,0.386l4.504,3.219l0.772,2.060l2.961,1.544l3.218,-2.703l7.596,1.287l0,-2.960l7.465,-1.803l3.992,-0.901l-2.190,-1.674l-0.643,-3.218l7.466,0.772l-1.801,3.348l4.632,-0.129l7.210,-2.703l9.783,-2.318l2.060,1.417l9.397,-1.546l6.695,0.902l0.643,-3.219l7.853,0.772l10.684,2.832l1.673,-1.801l-3.991,-4.507l4.505,-2.702l2.190,-3.090l8.369,0.386l0.769,4.763l0.260,5.536l1.672,1.674l-0.516,1.802l-4.119,2.832l2.832,0.386l5.151,-2.961l1.029,-3.991l-2.832,-1.159l-1.029,-5.664l3.345,-3.346l2.190,1.802l0.644,2.060l1.672,-1.288l3.477,-0.901l5.535,-0.128l5.019,1.544l-2.445,-2.575l-0.256,-2.574l4.760,-0.514l6.437,0.128l5.793,-0.387l-2.189,-1.415l3.219,-1.674l3.090,-0.129l5.150,-1.288l0.385,-0.128l1.029,0l1.418,0l1.545,-0.128l1.416,-0.129l1.027,0l0.389,0l0.900,-0.773l7.080,-0.257l2.190,0.643l6.049,-1.415l4.890,0l0.774,-1.159l2.574,-1.159l6.309,-1.030l4.632,0.772l-3.603,0.644l6.051,0.515l0.771,1.288l2.447,-0.644l9.782,-0.257l5.023,1.673l-2.318,3.089l-7.082,1.546l1.031,1.544l6.180,-0.257l2.961,1.030l11.968,0l2.705,1.544l10.299,0.129l0.387,-1.673l16.603,1.673l0.518,4.892l4.246,1.030l8.111,-1.545l15.834,-0.515l1.930,-3.476l23.170,1.802l2.320,1.545l7.078,2.059l14.416,-0.385l6.438,3.733l10.170,-0.128l9.269,-0.259l6.178,2.447l0.774,-3.219l13.257,0.515l8.496,1.159l3.735,1.158l6.564,2.059l7.209,2.448l8.110,1.029l5.277,2.575l-6.178,1.416l-0.386,2.703l-4.506,0.129l-5.278,-2.317l-5.150,-0.644l-3.475,-1.674l-1.802,2.961l0.385,-0.129zM518.204,80.414l0.645,-1.288l3.733,-0.772l2.702,0.386l1.289,0.515l-0.259,0.643l0.128,0.772l-4.890,0l3.348,0.256zM861.522,24.158l5.666,0.515l-0.128,1.416l-7.725,-1.416l-2.187,0.515zM836.034,22.871l5.279,-0.387l10.426,0.772l1.803,2.189l-9.527,-0.128l-3.989,1.030l-5.021,-1.931l-1.029,1.545zM742.835,13.473l0.516,0.772l5.019,2.575l-14.287,0.387l3.604,-3.090l-5.148,0.644zM718.763,9.226l10.556,0.386l5.922,3.346l-7.853,1.674l-11.328,-1.030l-0.127,-2.446l-2.830,1.930zM609.345,28.277l6.435,-2.317l-0.643,-1.287l6.050,-1.417l8.882,-1.673l8.882,-0.514l4.634,-1.030l5.279,-0.387l1.801,1.159l-1.801,0.772l-9.526,1.417l-8.239,1.287l-8.367,2.445l-3.993,2.704l-4.246,2.574l0.644,2.189l5.149,2.317l-1.672,0.129l-8.756,-0.257l-0.771,-1.287l-4.891,-0.644l-0.386,-1.545l2.830,-0.515l-0.127,-1.417l5.277,-2.316l2.445,0.387zM850.194,82.344l0.901,2.575l0,2.575l1.158,2.832l2.705,4.763l-3.990,-0.901l-1.674,3.862l2.574,2.703l0,1.931l-2.058,-1.674l-1.803,2.189l-0.516,-2.317l0.258,-2.575l-0.258,-2.960l0.645,-2.061l0.127,-3.604l-1.545,-2.575l0.131,-3.733l2.574,-1.287l-1.160,-1.158l1.289,-0.387l-0.642,-1.802z";
}, function($ctx1) {$ctx1.fill(self,"Russia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Rwanda",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M547.169,229.999l1.028,1.545l-0.128,1.544l-0.773,0.387l-1.415,-0.128l-0.773,1.545l-1.673,-0.258l0.257,-1.546l0.386,-0.128l0,-1.674l0.901,-0.643l0.643,0.256l-1.547,0.900z";
}, function($ctx1) {$ctx1.fill(self,"Rwanda",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SaudiArabia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M580.509,182.883l-0.387,-1.157l-0.771,-0.773l-0.259,-1.031l-1.415,-1.029l-1.416,-2.188l-0.772,-2.189l-1.802,-1.931l-1.289,-0.386l-1.672,-2.574l-0.386,-1.932l0.128,-1.544l-1.545,-2.961l-1.287,-1.030l-1.416,-0.644l-0.902,-1.545l0.130,-0.514l-0.771,-1.417l-0.774,-0.643l-1.030,-2.060l-1.674,-2.059l-1.287,-1.931l-1.417,0l0.387,-1.417l0.131,-0.901l0.384,-1.158l2.960,0.514l1.160,-0.900l0.643,-0.901l2.060,-0.386l0.515,-0.902l0.901,-0.515l-2.703,-2.703l5.407,-1.287l0.514,-0.516l3.218,0.773l3.990,1.931l7.596,5.406l5.020,0.258l2.447,0.257l0.644,1.288l1.930,-0.129l1.030,2.317l1.288,0.644l0.513,0.902l1.803,1.158l0.127,1.159l-0.256,0.900l0.387,0.901l0.772,0.644l0.386,0.901l0.387,0.644l0.771,0.644l0.772,-0.258l0.517,1.030l0.127,0.643l1.031,2.704l8.110,1.416l0.514,-0.644l1.159,1.931l-1.802,5.408l-7.981,2.702l-7.853,1.030l-2.445,1.159l-1.931,2.832l-1.287,0.515l-0.644,-0.901l-1.031,0.128l-2.574,-0.257l-0.514,-0.257l-3.090,0l-0.773,0.257l-1.158,-0.644l-0.645,1.288l0.258,1.158l1.158,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"SaudiArabia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Senegal",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M420.242,190.35l-1.159,-2.059l-1.287,-1.030l1.159,-0.515l1.287,-1.803l0.644,-1.416l0.901,-0.901l1.416,0.257l1.287,-0.643l1.416,0l1.288,0.773l1.801,0.772l1.674,1.931l1.802,1.930l0.129,1.674l0.515,1.545l1.030,0.772l0.257,1.030l-0.128,0.772l-0.387,0.129l-1.544,-0.129l-0.130,0.258l-0.643,0l-1.931,-0.643l-1.287,0l-5.020,-0.129l-0.644,0.386l-0.901,-0.129l-1.545,0.386l-0.387,-2.058l2.447,0.127l0.644,-0.386l0.514,0l1.030,-0.644l1.159,0.516l1.158,0.128l1.159,-0.644l-0.516,-0.773l-0.900,0.387l-0.901,0l-1.030,-0.643l-0.901,0l-0.515,0.643l2.961,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Senegal",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Serbia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M519.749,102.684l1.416,1.030l0.258,0.902l1.674,0.643l0.257,1.158l1.543,0.773l0.774,-0.644l0.771,0.386l-0.641,0.386l0.513,0.515l-0.772,0.644l0.259,0.902l1.415,1.158l-1.030,0.901l-0.515,0.772l0.256,0.386l-0.385,0.387l-1.288,0l-1.544,0.257l-1.545,0.515l-0.129,0.515l-0.385,0l-0.130,-1.030l-0.643,-0.257l-0.516,-0.773l-0.771,0.258l-0.129,-0.516l-1.287,1.288l0.258,0.901l-0.516,-0.128l-0.773,-0.902l-1.159,-0.515l0.258,-0.514l0.387,-1.545l0.900,-0.515l1.158,-0.387l0.389,-1.287l-1.289,-1.030l0.645,-1.159l-1.030,0l1.030,-1.029l-0.773,-0.772l-0.643,-1.031l2.060,-0.772l-1.672,-0.129z";
}, function($ctx1) {$ctx1.fill(self,"Serbia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SierraLeone",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M434.402,208.759l-0.772,-0.257l-1.931,-1.031l-1.287,-1.544l-0.515,-0.902l-0.386,-2.059l1.415,-1.159l0.387,-0.772l0.386,-0.515l0.772,-0.129l0.644,-0.514l2.188,0l0.772,1.029l0.515,1.159l0,0.773l0.387,0.642l0,1.030l0.644,-0.127l-1.159,1.157l-1.287,1.546l-0.129,0.771l0.644,-0.902z";
}, function($ctx1) {$ctx1.fill(self,"SierraLeone",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Slovakia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M516.017,93.673l0.127,0.129l1.158,-0.386l1.289,1.030l1.672,-0.644l1.289,0.257l1.929,-0.386l2.577,1.030l-0.774,0.772l-0.513,1.030l-0.645,0.257l-2.832,-0.772l-0.900,0.129l-0.645,0.643l-1.287,0.387l-0.258,-0.258l-1.287,0.515l-1.158,0l-0.129,0.644l-2.318,0.257l-1.028,-0.257l-1.288,-0.772l-0.257,-0.903l0.127,-0.256l0.387,-0.644l1.288,0l0.900,-0.258l0,-0.257l0.517,-0.129l0.256,-0.643l0.644,0l0.385,-0.515l-0.774,0z";
}, function($ctx1) {$ctx1.fill(self,"Slovakia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SolomonIslands",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M901.944,255.23l0.772,0.903l-1.930,0l-1.031,-1.674l1.674,0.643l-0.515,-0.128zM900.786,252.784l-0.387,0.516l-2.060,-2.318l-0.514,-1.544l0.901,0l1.029,2.059l-1.031,-1.287zM898.597,253.557l-1.159,0.129l-1.544,-0.386l-0.643,-0.386l0.256,-1.031l1.674,0.387l0.900,0.644l-0.516,-0.643zM895.251,248.537l0.643,0.901l0.128,0.515l-2.060,-1.158l-1.543,-0.902l-1.031,-0.901l0.384,-0.258l1.290,0.644l-2.189,-1.159zM888.556,245.834l1.031,0.900l-0.516,0.129l-1.160,-0.515l-1.158,-1.159l0.129,-0.386l-1.674,-1.031z";
}, function($ctx1) {$ctx1.fill(self,"SolomonIslands",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Somalia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M597.114,201.549l-1.287,1.674l-1.803,2.188l-2.316,0l-8.754,-3.218l-1.029,-0.901l-1.029,-1.287l-1.032,-1.545l0.645,-0.901l0.900,-1.416l0.902,0.515l0.516,1.030l1.286,1.158l1.288,0l2.575,-0.643l2.959,-0.387l2.319,-0.771l1.286,-0.259l1.029,-0.515l1.545,0l0,1.159l0,2.704l0,-1.415zM603.037,195.371l-0.258,1.545l0,1.415l-0.643,0.901l-0.773,2.961l-1.288,2.961l-1.674,3.475l-2.316,3.991l-2.189,2.962l-3.218,3.732l-2.702,2.188l-3.991,2.576l-2.576,2.059l-2.959,3.347l-0.644,1.415l-0.516,0.645l-1.931,-2.189l0.130,-10.169l2.188,-2.960l1.029,-0.644l1.803,0l2.318,-1.932l3.475,-0.129l7.722,-8.110l1.803,-2.188l1.287,-1.674l0,-1.415l0,-2.704l0,-1.159l0.903,-0.128l1.158,-0.387l1.416,-0.257l1.288,-0.900l1.028,0l-0.130,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Somalia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthAfrica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.13,305.822l-0.516,0.387l-1.158,1.287l-0.773,1.416l-1.544,1.93l-2.96,2.832l-1.932,1.545l-2.061,1.287l-2.832,1.031l-1.287,0.128l-0.387,0.772l-1.672-0.386l-1.288,0.514l-2.961-0.514l-1.544,0.257l-1.158-0.128l-2.834,1.028l-2.316,0.517l-1.545,1.028h-1.285l-1.16-0.9l-0.9-0.128l-1.158-1.16l-0.131,0.388l-0.385-0.772v-1.546l-0.771-1.801l0.771-0.516v-2.061l-1.802-2.445l-1.288-2.316l-1.931-3.478l1.286-1.415l1.032,0.773l0.384,1.158l1.288,0.129l1.673,0.514l1.418-0.129l2.445-1.416v-9.912l0.772,0.387l1.544,2.574l-0.258,1.674l0.645,0.9l1.93-0.256l1.289-1.287l1.287-0.774l0.643-1.286l1.287-0.645l1.158,0.387l1.288,0.773l2.188,0.129l1.801-0.645l0.258-0.901l0.387-1.287l1.545-0.128l0.772-1.03l0.901-1.804l2.445-2.059l3.733-1.93h1.157l1.289,0.514l0.9-0.387l1.416,0.258l1.287,3.862l0.771,1.802l-0.514,3.09l0.258,0.9l-1.416-0.385l-0.773,0.129l-0.258,0.771l-0.771,1.029L547.94,299l1.545,1.544l1.545-0.386l0.644-1.158h2.059l-0.772,1.93l-0.258,2.318l-0.77,1.157L550.13,305.822zM543.306,304.922l-1.158-0.773l-1.287,0.516l-1.416,1.029l-1.416,1.803l1.931,2.059l1.03-0.258l0.514-0.9l1.417-0.386l0.515-0.901l0.773-1.287L543.306,304.922z";
}, function($ctx1) {$ctx1.fill(self,"SouthAfrica",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SouthKorea",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M810.933,122.895l2.447,3.218l0.642,1.803l0,3.089l-1.029,1.416l-2.445,0.515l-2.190,1.159l-2.445,0.258l-0.258,-1.545l0.514,-1.932l-1.158,-2.833l1.931,-0.514l-1.802,-2.189l0.131,-0.257l1.285,0l1.029,-1.158l1.930,-0.129l1.033,-0.129l-0.385,0.772z";
}, function($ctx1) {$ctx1.fill(self,"SouthKorea",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Spain",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M440.838,114.141l0.129,-1.931l-1.029,-1.158l3.861,-1.932l3.219,0.515l3.604,0l2.960,0.387l2.189,-0.129l4.377,0.129l1.029,1.030l5.021,1.158l0.901,-0.514l3.089,1.158l3.090,-0.258l0.129,1.545l-2.574,1.802l-3.478,0.516l-0.127,0.900l-1.672,1.545l-1.031,2.189l1.031,1.544l-1.547,1.159l-0.642,1.803l-2.061,0.514l-1.802,2.060l-3.476,0l-2.574,0l-1.673,0.901l-1.031,1.030l-1.287,-0.129l-1.030,-1.030l-0.772,-1.545l-2.446,-0.385l-0.257,-0.902l1.030,-1.030l0.258,-0.644l-0.902,-0.900l0.772,-1.674l-1.030,-1.674l1.160,-0.256l0,-1.159l0.514,-0.387l0,-2.189l1.287,-0.643l-0.773,-1.416l-1.545,-0.128l-0.514,0.385l-1.545,0l-0.643,-1.287l-1.158,0.387l1.031,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Spain",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SriLanka",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M685.552,206.699l-0.387,2.832l-1.158,0.772l-2.317,0.643l-1.289,-2.187l-0.513,-3.863l1.285,-4.376l1.805,1.545l1.285,1.801l-1.289,-2.833z";
}, function($ctx1) {$ctx1.fill(self,"SriLanka",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sudan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M556.308,215.711l-1.416,1.028l-1.545,0l-2.189,0.644l-1.802,-0.644l-1.029,0.774l-2.446,-1.802l-0.644,-1.159l-1.416,0.643l-1.287,-0.257l-0.773,0.515l-1.158,-0.387l-1.672,-2.188l-0.389,-0.901l-2.059,-1.031l-0.643,-1.544l-1.159,-1.287l-1.800,-1.287l0,-0.901l-1.419,-1.159l-2.059,-1.159l-1.029,-0.771l-0.129,-0.773l0.387,-1.159l0,-1.159l-1.545,-1.674l-0.258,-1.157l0,-0.645l-0.902,-0.772l-0.126,-1.544l-0.517,-1.030l-0.902,0.129l0.259,-1.031l0.643,-1.030l-0.258,-1.159l0.901,-0.772l-0.643,-0.643l0.774,-1.673l1.158,-2.060l2.316,0.257l0.258,-10.427l0,-1.415l2.832,0l0,-5.408l10.813,0l10.556,0l10.299,0l1.158,2.704l-0.643,0.386l0.385,2.832l1.030,3.218l1.029,0.644l1.418,1.029l-1.288,1.546l-2.061,0.386l-0.770,0.901l-0.258,1.802l-1.160,3.861l0.258,1.160l-0.387,2.317l-1.158,2.575l-1.672,1.415l-1.158,2.060l-0.259,1.030l-1.286,0.772l-0.774,2.831l0,2.447l-0.386,0.774l-1.416,0.127l-0.901,1.545l1.673,0.129l1.416,1.287l0.388,1.158l1.286,0.644l1.158,2.832l-2.188,2.447l1.416,-1.159z";
}, function($ctx1) {$ctx1.fill(self,"Sudan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Suriname",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M311.337,210.946l3.219,0.517l0.257,-0.517l2.188,-0.257l2.833,0.774l-1.417,2.316l0.259,1.803l1.029,1.674l-0.386,1.157l-0.257,1.159l-0.772,1.158l-1.545,-0.515l-1.159,0.259l-1.158,-0.259l-0.259,0.773l0.516,0.514l-0.257,0.517l-1.546,-0.130l-1.545,-2.317l-0.385,-1.545l-0.902,0l-1.157,-1.931l0.514,-1.416l-0.129,-0.643l1.545,-0.772l-0.514,2.319z";
}, function($ctx1) {$ctx1.fill(self,"Suriname",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "SvalbardJanMayen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M539.059,11.285l-3.991,1.416l-7.852,0.387l-7.854-0.515l-0.514-0.644l-3.863-0.128l-2.961-1.159l8.369-0.772l3.86,0.644l2.704-0.772l6.822,0.643L539.059,11.285zM505.976,12.314h-3.733l-1.546-0.901l-7.335,1.031l2.059,2.06l5.276,2.317l3.99,0.772l-2.314,0.9l5.791,1.675l3.219-0.129l1.287-2.189l2.316-0.515l1.545-2.06l6.693-1.031l-8.881-1.931l-3.347-1.03l-3.991,0.128L505.976,12.314zM531.851,17.207l-3.863-0.515l-1.158-1.03l-5.535,0.515l1.674,0.901l-1.932,0.643l4.765,0.645L531.851,17.207z";
}, function($ctx1) {$ctx1.fill(self,"SvalbardJanMayen",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Swaziland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.674,299l-0.644,1.158l-1.545,0.386l-1.545,-1.544l-0.128,-0.902l0.771,-1.030l0.258,-0.771l0.773,-0.129l1.416,0.385l0.385,1.289l-0.259,-1.158z";
}, function($ctx1) {$ctx1.fill(self,"Swaziland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Sweden",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M525.026,49.905l-2.703,1.930l0.516,1.674l-4.377,2.060l-5.150,2.317l-1.930,3.861l1.930,1.932l2.576,1.415l-2.576,3.090l-2.704,0.643l-1.028,4.507l-1.545,2.445l-3.348,-0.257l-1.415,2.188l-3.218,0.129l-0.773,-2.575l-2.317,-3.090l-2.059,-3.732l1.158,-1.545l2.318,-1.931l0.900,-3.090l-1.803,-1.415l-0.127,-3.605l1.800,-2.446l2.705,0l0.903,-1.030l-1.031,-0.901l4.248,-3.862l2.703,-2.960l1.674,-1.931l2.702,0l0.644,-1.417l5.022,0.387l0.513,-1.803l1.673,-0.129l3.475,1.417l4.250,1.801l0.128,4.120l0.901,1.031l4.635,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Sweden",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Switzerland",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M491.042,98.951l0.128,0.515l-0.385,0.644l1.160,0.514l1.416,0l-0.258,1.159l-1.158,0.386l-1.932,-0.257l-0.643,1.030l-1.288,0.129l-0.387,-0.516l-1.543,1.031l-1.287,0.128l-1.160,-0.643l-0.901,-1.159l-1.288,0.386l0,-1.158l1.932,-1.545l-0.130,-0.644l1.288,0.257l0.772,-0.515l2.317,0l0.515,-0.514l-2.832,-0.772z";
}, function($ctx1) {$ctx1.fill(self,"Switzerland",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Syria",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M569.696,137.055l-5.278,2.833l-2.960,-1.031l0.256,-0.385l0,-1.160l0.643,-1.416l1.546,-1.029l-0.515,-1.031l-1.159,-0.128l-0.257,-2.059l0.644,-1.159l0.772,-0.643l0.643,-0.515l0.129,-1.545l0.902,0.514l2.960,-0.772l1.416,0.514l2.317,0l3.090,-1.028l1.416,0.128l3.090,-0.515l-1.416,1.673l-1.417,0.773l0.258,1.931l-1.029,3.218l6.051,-2.832z";
}, function($ctx1) {$ctx1.fill(self,"Syria",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Taiwan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M793.296,161.256l-1.672,4.378l-1.160,2.188l-1.414,-2.317l-0.260,-1.932l1.545,-2.702l2.189,-2.060l1.288,0.772l0.516,-1.673z";
}, function($ctx1) {$ctx1.fill(self,"Taiwan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tajikistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M656.587,118.519l-1.030,0.900l-2.961,-0.515l-0.257,1.545l2.961,-0.129l3.347,0.901l5.020,-0.514l0.773,2.573l0.772,-0.256l1.674,0.515l-0.129,1.158l0.515,1.416l-2.832,0l-1.802,-0.129l-1.674,1.159l-1.285,0.257l-0.904,0.643l-1.030,-0.900l0.259,-2.317l-0.901,-0.129l0.384,-0.772l-1.543,-0.645l-1.160,0.903l-0.256,1.157l-0.386,0.387l-1.674,-0.128l-0.773,1.287l-0.901,-0.515l-2.059,0.900l-0.773,-0.385l1.547,-2.703l-0.645,-2.060l-1.931,-0.644l0.643,-1.159l2.318,0.129l1.285,-1.417l0.775,-1.801l3.603,-0.644l-0.514,1.287l0.386,0.772l-1.158,0.127z";
}, function($ctx1) {$ctx1.fill(self,"Tajikistan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tanzania",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l5.407,-0.258l10.042,5.793l0.256,2.059l4.119,2.445l-1.289,3.092l0.131,1.543l1.802,1.031l0,0.645l-0.644,1.673l0.129,0.772l-0.129,1.287l0.901,1.673l1.160,2.704l0.900,0.514l-2.060,1.674l-2.961,1.030l-1.672,-0.128l-0.902,0.900l-1.930,0l-0.644,0.386l-3.347,-0.771l-1.931,0.256l-0.773,-3.732l-1.415,-1.933l-2.704,-0.514l-1.543,-0.901l-1.675,-0.384l-1.030,-0.387l-1.159,-0.773l-1.545,-3.346l-1.545,-1.546l-0.514,-1.546l0.257,-1.415l-0.514,-2.445l1.158,-0.128l1.031,-1.032l1.030,-1.416l0.642,-0.513l0,-0.903l-0.642,-0.643l-0.131,-1.030l0.773,-0.387l0.128,-1.544l-1.028,-1.545l0.900,-0.257l-2.961,0z";
}, function($ctx1) {$ctx1.fill(self,"Tanzania",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Thailand",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M741.548,194.082l-2.445,-1.157l-2.188,0l0.385,-2.060l-2.446,0l-0.128,2.961l-1.545,3.990l-0.903,2.318l0.260,1.931l1.801,0.128l1.031,2.446l0.514,2.318l1.416,1.545l1.674,0.257l1.416,1.415l-0.901,1.159l-1.802,0.257l-0.129,-1.287l-2.188,-1.157l-0.516,0.385l-1.029,-1.029l-0.515,-1.288l-1.418,-1.544l-1.286,-1.287l-0.515,1.544l-0.514,-1.417l0.385,-1.672l0.773,-2.576l1.287,-2.832l1.545,-2.445l-1.158,-2.447l0.129,-1.287l-0.387,-1.545l-1.802,-2.060l-0.643,-1.416l1.029,-0.514l0.901,-2.318l-1.030,-1.802l-1.802,-1.931l-1.287,-2.317l1.158,-0.515l1.287,-2.960l1.803,-0.129l1.672,-1.159l1.544,-0.643l1.161,0.900l0.129,1.546l1.800,0.128l-0.642,2.832l0,2.446l2.832,-1.544l0.900,0.385l1.545,0l0.516,-1.030l2.060,0.258l2.059,2.189l0.129,2.574l2.187,2.446l-0.127,2.189l-0.902,1.288l-2.447,-0.387l-3.475,0.514l-1.801,2.189l-0.643,-3.217z";
}, function($ctx1) {$ctx1.fill(self,"Thailand",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "TimorLeste",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M801.921,250.982l0.258,-0.643l2.316,-0.644l1.934,-0.129l0.771,-0.257l1.029,0.257l-0.900,0.773l-2.834,1.158l-2.316,0.773l0,-0.773l0.258,0.515z";
}, function($ctx1) {$ctx1.fill(self,"TimorLeste",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Togo",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M470.317,210.432l-2.187,0.514l-0.644,-0.900l-0.773,-1.673l-0.128,-1.416l0.514,-2.318l-0.643,-1.030l-0.258,-2.187l0,-1.932l-1.159,-1.417l0.258,-0.772l2.317,0l-0.259,1.417l0.775,0.900l0.900,0.902l0.129,1.287l0.516,0.515l-0.131,6.307l-0.773,-1.803z";
}, function($ctx1) {$ctx1.fill(self,"Togo",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Tunisia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M490.785,145.294l-1.159,-4.763l-1.674,-1.159l0,-0.643l-2.187,-1.545l-0.257,-2.059l1.674,-1.545l0.642,-2.189l-0.514,-2.575l0.642,-1.416l2.962,-1.029l1.801,0.257l0,1.415l2.190,-1.028l0.257,0.514l-1.417,1.416l0,1.159l0.902,0.643l-0.258,2.446l-1.801,1.287l0.515,1.416l1.415,0.129l0.644,1.287l1.030,0.387l-0.129,2.060l-1.288,0.772l-0.900,0.902l-1.803,1.029l0.257,1.158l-0.257,1.031l1.287,-0.643z";
}, function($ctx1) {$ctx1.fill(self,"Tunisia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Turkmenistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M630.069,130.876l-0.129,-2.188l-2.060,-0.128l-3.088,-2.317l-2.188,-0.387l-2.961,-1.288l-1.932,-0.257l-1.157,0.515l-1.803,-0.129l-1.932,1.546l-2.317,0.513l-0.515,-1.930l0.387,-2.832l-2.059,-0.901l0.644,-1.802l-1.804,-0.129l0.645,-2.318l2.574,0.644l2.316,-0.773l-1.931,-1.673l-0.772,-1.544l-2.187,0.643l-0.260,2.059l-0.900,-1.802l1.160,-0.900l3.090,-0.515l1.800,0.772l1.930,2.060l1.419,-0.128l2.959,0l-0.384,-1.417l2.315,-0.901l2.188,-1.545l3.735,1.416l0.256,2.188l1.030,0.515l2.832,-0.128l1.029,0.515l1.289,2.702l3.089,1.931l1.674,1.288l2.832,1.288l3.604,1.158l0,1.674l-0.902,-0.128l-1.285,-0.774l-0.387,1.030l-2.317,0.516l-0.515,2.188l-1.546,0.772l-2.058,0.386l-0.517,1.288l-2.059,0.257l2.832,1.030z";
}, function($ctx1) {$ctx1.fill(self,"Turkmenistan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uganda",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M551.03,229.742l-2.961,0l-0.900,0.257l-1.547,0.900l-0.643,-0.256l0,-2.061l0.643,-1.028l0.131,-2.189l0.514,-1.287l1.029,-1.416l1.031,-0.643l0.901,-1.031l-1.159,-0.258l0.258,-3.217l1.029,-0.774l1.802,0.644l2.189,-0.644l1.545,0l1.416,-1.028l1.287,1.930l1.031,2.704l0.771,1.930l-1.029,1.931l-1.931,1.674l0,0.772l0,2.832l5.407,-0.258z";
}, function($ctx1) {$ctx1.fill(self,"Uganda",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Ukraine",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M550.901,86.593l0.901,0.129l0.773,-0.644l0.772,0.128l2.833,-0.256l1.673,1.544l-0.643,0.515l0.258,0.901l2.058,0.129l1.030,1.159l-0.129,0.514l3.476,0.901l2.059,-0.386l1.674,1.287l1.545,0l3.990,0.902l0,0.772l-1.029,1.415l0.513,1.417l-0.384,0.901l-2.575,0.258l-1.417,0.772l-0.128,1.159l-2.060,0.128l-1.801,0.902l-2.576,0.128l-2.317,1.030l0.129,1.674l1.416,0.644l2.704,-0.130l-0.516,0.902l-2.959,0.515l-3.606,1.544l-1.544,-0.515l0.643,-1.286l-2.962,-0.774l0.389,-0.514l2.573,-0.901l-0.772,-0.645l-4.120,-0.643l-0.257,-1.029l-2.446,0.386l-1.030,1.416l-2.060,2.059l-1.158,-0.515l-1.287,0.386l-1.287,-0.386l0.773,-0.386l0.385,-0.901l0.774,-0.901l-0.129,-0.386l0.513,-0.258l0.258,0.386l1.545,0.129l0.773,-0.257l-0.517,-0.258l0.131,-0.386l-0.902,-0.772l-0.386,-1.030l-1.030,-0.515l0.257,-0.901l-1.287,-0.644l-1.029,-0.128l-2.059,-0.903l-1.675,0.259l-0.644,0.386l-1.158,0l-0.773,0.644l-1.931,0.257l-0.899,0.515l-1.289,-0.772l-1.673,0l-1.674,-0.258l-1.159,0.515l-0.256,-0.643l-1.415,-0.773l0.513,-1.030l0.774,-0.772l0.515,0.257l-0.646,-1.287l2.447,-2.189l1.287,-0.385l0.257,-0.773l-1.286,-2.317l1.286,-0.129l1.417,-0.644l2.187,-0.129l2.706,0.258l2.959,0.644l2.189,0l0.900,0.386l1.030,-0.386l0.772,0.643l2.446,-0.129l1.031,0.258l0.128,-1.416l0.900,-0.643l-2.318,0.129z";
}, function($ctx1) {$ctx1.fill(self,"Ukraine",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedArabEmirates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M604.196,161.643l0.514,-0.129l0,0.772l2.188,-0.386l2.189,0l1.672,0.129l1.803,-1.802l2.058,-1.802l1.674,-1.673l0.518,0.900l0.385,2.189l-1.417,0l-0.258,1.802l0.517,0.386l-1.159,0.515l-0.129,1.029l-0.773,1.159l0,1.030l-0.514,0.644l-8.110,-1.416l-1.031,-2.704l0.127,0.643z";
}, function($ctx1) {$ctx1.fill(self,"UnitedArabEmirates",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "UnitedStates",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M284.434,106.546l-2.704,0.772l-2.575,0.644l-3.089,1.673l-1.287,1.417l-0.258,0.386l-0.127,1.545l0.900,1.415l1.159,0l-0.259,-0.900l0.773,0.515l-0.257,0.772l-1.803,0.515l-1.286,-0.130l-1.931,0.517l-1.159,0.128l-1.673,0.128l-2.060,0.644l3.733,-0.387l0.128,0l0.773,0.515l-3.733,0.773l-1.802,0l0.129,-0.257l0.128,-0.644l-0.900,1.416l0.643,0l-0.515,2.060l-1.931,2.060l-0.257,-0.773l-0.516,-0.129l-0.643,-0.643l-0.129,0l-0.128,0l0.514,1.416l0.773,1.416l0.129,0.257l-1.030,0.901l-1.545,2.188l-0.258,-0.128l1.030,-1.802l-1.416,-1.287l-0.128,-2.060l-0.387,0.901l0,2.446l-1.673,-0.901l1.802,1.544l0.515,1.417l0.772,1.674l0.387,2.703l-1.803,1.930l-2.574,1.030l-2.318,1.417l-0.901,0.128l-1.158,1.931l-2.317,1.673l-2.832,1.288l-1.158,2.060l-0.516,1.415l0.387,2.061l1.030,2.187l1.159,2.061l0,1.029l1.157,2.703l0.129,2.447l-0.514,2.316l-1.159,0.516l-1.287,-0.386l-0.386,-1.159l-1.031,-0.644l-1.545,-2.317l-1.287,-1.931l-0.257,-1.287l0.515,-1.674l-0.643,-1.544l-1.803,-1.545l-1.416,-1.030l-3.089,1.158l-0.644,-0.772l-2.574,-1.287l-2.962,0.386l-2.445,-0.258l-1.674,0.515l-1.544,0l-0.258,1.160l0.772,1.543l-3.605,0.130l-2.316,-0.516l-1.545,-0.514l-2.059,-0.387l-2.318,-0.128l-2.317,0.643l-2.446,1.931l-2.702,1.158l-1.417,1.289l-0.644,1.287l0,1.802l0.129,1.287l0.515,0.901l-1.030,0.129l-1.931,-0.643l-2.188,-0.773l-0.772,-1.287l-0.515,-1.931l-1.545,-1.545l-1.030,-1.545l-1.288,-1.802l-1.930,-1.159l-2.189,0.130l-1.674,2.058l-2.316,-0.772l-1.288,-0.772l-0.772,-1.545l-0.900,-1.416l-1.545,-1.159l-1.416,-0.901l-0.902,-0.900l-4.633,0l-0.129,1.158l-2.060,0l-5.407,0l-6.178,-1.931l-3.992,-1.288l0.258,-0.515l-3.475,0.259l-3.090,0.256l-0.258,-1.029l-1.159,-1.416l-2.831,-1.545l-1.158,-0.129l-1.160,-0.900l-2.059,-0.130l-0.772,-0.515l-0.258,-1.416l-2.702,-2.704l-2.189,-3.732l0.128,-0.644l-1.287,-0.901l-2.059,-2.317l-0.386,-2.188l-1.417,-1.417l0.644,-2.189l-0.129,-2.317l-0.901,-1.544l0.901,-2.960l0.129,-2.962l0.514,-4.119l-0.771,-2.188l-0.387,-2.575l3.734,0.515l1.158,2.060l0.644,-0.773l-0.387,-2.188l-1.287,-2.189l15.962,0l2.704,0l32.182,0l18.536,0l5.536,0l0,-1.030l0.901,0l0.516,1.417l0.772,0.514l1.930,0.129l2.704,0.515l2.703,0.773l2.188,-0.387l3.219,0.773l0.385,0l0.515,0l0.258,-0.129l0.386,-0.129l0.387,-0.128l0.772,-0.258l0.643,-0.129l0.644,0.129l0.386,0.258l0.258,0l0.386,0.257l0.773,0.257l0.772,0.258l0.772,0.386l0.643,0.257l0.387,0.130l0.258,0.128l0.514,0.128l0.515,0.258l0.515,0.258l0.515,0.128l0.515,0.257l0.515,0.258l0.515,0.129l0.514,0.257l0.130,0.386l0.128,0.387l0.386,0.257l0.257,0l0.902,0l0.257,0l0,0.129l0,0.129l0,0.128l0,0.258l0.129,0l0.129,0.257l0.128,0l0.258,0.129l0.386,0.128l0.258,-0.128l0.128,0l0.258,0.258l0.128,0l0,0.129l-0.386,0.515l0.516,0.257l0.643,0.257l0.644,0.258l0.514,0.128l0.515,0.386l0.128,0.387l0,0.257l0.130,0.515l0.128,0.386l0.129,0.515l0.130,0.515l0.127,0.515l0,0.386l0.129,0.515l0.258,0.772l-0.129,0.258l-0.385,0.515l-0.259,0.515l0,0.129l0,0.128l-0.514,0.516l-0.772,1.030l-0.387,0.385l-0.257,0.515l0,0.257l0,0.130l0.257,0.257l0.387,0.257l0.514,0.129l0.644,0l0.643,-0.258l0.644,-0.257l0.644,-0.258l0.643,-0.385l0.644,-0.258l0.645,-0.129l0.900,-0.128l0.387,0l0.128,0l0.644,-0.129l0.643,-0.258l0.643,-0.257l0.902,-0.257l0.772,-0.258l0.386,-0.128l0.258,-0.130l0,-0.128l0,-0.258l-0.387,-0.772l0,-0.129l-0.257,-0.386l0.386,-0.129l0.515,-0.257l0.258,0l0.772,-0.128l0.643,0l0.902,0l0.772,0.128l0.901,0l0.516,0l0.643,0l0.257,-0.515l0.387,-0.386l0.256,-0.258l0.387,-0.258l2.703,-1.801l1.287,-0.516l4.120,0l4.891,0l0.258,-0.772l0.901,0l1.158,-0.515l0.902,-1.159l0.901,-2.187l2.060,-1.932l0.900,0.644l1.804,-0.386l1.157,0.772l0,3.605l1.803,1.545l0,-1.158zM16.808,64.322l2.059,0.257l0.258,1.031l-1.545,0.386l-1.802,-0.516l-1.673,-0.772l-2.703,0.386zM52.465,70.759l1.803,0.257l1.157,0.774l-2.317,1.286l-2.703,1.029l-1.416,-0.643l-0.385,-1.288l2.445,-0.901l-1.416,0.514zM85.42,39.22l0,9.913l0,15.446l2.574,0l2.704,0.774l1.802,1.157l2.445,1.803l2.575,-1.545l2.703,-0.902l1.545,1.417l1.802,1.159l2.446,1.159l1.674,1.930l2.703,3.090l4.634,1.673l0,1.802l-1.417,1.287l-1.544,-1.029l-2.316,-0.901l-0.773,-2.318l-3.476,-2.189l-1.415,-2.573l-2.576,-0.129l-4.376,-0.129l-3.090,-0.773l-5.535,-2.703l-2.702,-0.514l-4.636,-1.031l-3.733,0.259l-5.278,-1.288l-3.217,-1.159l-2.962,0.643l0.515,1.804l-1.544,0.257l-3.090,0.515l-2.318,0.900l-2.961,0.644l-0.385,-1.673l1.159,-2.575l2.831,-0.900l-0.771,-0.645l-3.347,1.545l-1.802,1.802l-3.991,1.931l2.059,1.288l-2.574,1.931l-2.961,1.030l-2.704,0.900l-0.643,1.159l-4.119,1.416l-0.901,1.288l-3.090,1.158l-1.931,-0.258l-2.445,0.773l-2.832,0.901l-2.189,0.902l-4.634,0.772l-0.387,-0.516l2.962,-1.158l2.574,-0.901l2.832,-1.417l3.347,-0.385l1.416,-1.030l3.734,-1.673l0.514,-0.516l2.059,-0.901l0.386,-2.059l1.418,-1.545l-3.091,0.773l-0.901,-0.516l-1.415,1.031l-1.803,-1.417l-0.644,1.030l-1.029,-1.417l-2.704,1.160l-1.673,0l-0.257,-1.674l0.514,-0.901l-1.673,-1.029l-3.604,0.513l-2.189,-1.287l-1.931,-0.643l0,-1.545l-2.059,-1.030l1.029,-1.673l2.188,-1.416l1.030,-1.416l2.189,-0.129l1.802,0.386l2.189,-1.287l1.930,0.257l2.059,-0.901l-0.513,-1.158l-1.546,-0.515l2.059,-1.030l-1.673,0l-2.832,0.515l-0.772,0.643l-2.188,-0.514l-3.863,0.257l-3.861,-0.643l-1.158,-1.159l-3.476,-1.545l3.862,-1.030l6.050,-1.416l2.188,0l-0.386,1.416l5.665,-0.129l-2.189,-1.673l-3.347,-1.031l-1.931,-1.286l-2.574,-1.158l-3.605,-0.901l1.417,-1.417l4.762,-0.129l3.475,-1.158l0.644,-1.288l2.703,-1.287l2.704,-0.386l5.021,-1.159l2.574,0.128l4.119,-1.415l3.990,0.643l2.060,1.159l1.159,-0.515l4.505,0.128l-0.128,0.644l4.119,0.516l2.703,-0.258l5.664,0.773l5.278,0.257l2.060,0.386l3.604,-0.514l3.991,0.900l-2.961,-0.387zM2.647,55.182l1.673,0.515l1.674,-0.258l2.189,0.644l2.574,0.386l-0.128,0.258l-2.061,0.644l-2.059,-0.644l-1.030,-0.514l-2.446,0.128l-0.643,-0.128l-0.257,1.031zM45.256,175.546l0,-0.773l-0.385,-1.029l0.643,-0.643l-0.258,-0.516l0.129,-0.128l0,-0.129l1.803,0.773l0.256,0.385l0,0.258l0.258,0.129l0.129,0.128l0.385,0.387l-0.643,0.514l-0.772,0.129l-0.515,0.515l-0.258,0.387l0.772,0.387zM43.067,170.01l-0.385,0.258l-1.158,-0.128l0.128,-0.387l-1.415,-0.257zM44.999,170.912l0,0.257l-0.258,0.129l-0.900,0.128l-0.130,-0.514l-0.386,0l-0.258,-0.387l0.130,-0.128l0.257,-0.129l0.257,0.385l0.516,-0.128l-0.772,-0.387zM39.335,169.496l-0.515,-0.643l0.386,-0.130l0.515,-0.257l0.386,0.643l0.257,0l0.258,0.516l-0.515,0l-0.257,-0.129l-0.129,0l0.386,0zM34.829,167.564l0.129,-0.256l0.386,-0.259l0.643,0.130l0.130,0.129l-0.130,0.514l-0.256,0.258l-0.516,-0.129l0.386,0.387z";
}, function($ctx1) {$ctx1.fill(self,"UnitedStates",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uruguay",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M310.05,308.396l1.674,-0.257l2.704,2.059l1.030,-0.130l2.702,1.805l2.189,1.414l1.545,1.804l-1.158,1.286l0.772,1.545l-1.159,1.674l-3.089,1.545l-2.060,-0.515l-1.416,0.257l-2.447,-1.157l-1.801,0.128l-1.674,-1.545l0.129,-1.674l0.643,-0.643l0,-2.705l0.644,-2.702l-0.772,2.189z";
}, function($ctx1) {$ctx1.fill(self,"Uruguay",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Uzbekistan",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M644.487,126.371l0,-1.674l-3.604,-1.158l-2.832,-1.288l-1.674,-1.288l-3.089,-1.931l-1.289,-2.702l-1.029,-0.515l-2.832,0.128l-1.030,-0.515l-0.256,-2.188l-3.735,-1.416l-2.188,1.545l-2.315,0.901l0.384,1.417l-2.959,0l-0.130,-9.914l6.951,-1.544l0.515,0.129l0.644,0.386l1.159,0.515l2.317,1.030l2.189,1.029l2.574,2.446l3.219,-0.385l4.633,-0.259l3.219,2.060l-0.258,2.703l1.287,0l0.644,2.189l3.347,0.128l0.771,1.288l1.030,-0.129l1.160,-1.931l3.603,-1.802l1.547,-0.515l0.770,0.258l-2.317,1.801l2.061,1.030l1.929,-0.772l3.090,1.416l-3.346,1.932l-2.060,-0.257l-1.158,0.127l-0.386,-0.772l0.514,-1.287l-3.603,0.644l-0.775,1.801l-1.285,1.417l-2.318,-0.129l-0.643,1.159l1.931,0.644l0.645,2.060l-1.547,2.703l-2.059,-0.515l1.416,0z";
}, function($ctx1) {$ctx1.fill(self,"Uzbekistan",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vanuatu",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M915.718,269.777l1.674,1.545l-0.901,0.387l-0.902,-1.160l-0.129,0.772zM914.56,269.133l-0.387,-0.643l0,-2.060l1.287,0.773l0.387,2.189l-0.774,-0.387l0.513,-0.128z";
}, function($ctx1) {$ctx1.fill(self,"Vanuatu",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Venezuela",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M273.105,195.242l-0.128,0.644l-1.545,0.257l0.902,1.287l-0.129,1.416l-1.160,1.545l1.030,2.188l1.159,-0.257l0.643,-1.931l-0.900,-0.901l-0.129,-2.060l3.346,-1.159l-0.385,-1.158l1.029,-0.901l0.902,1.931l1.930,0l1.804,1.545l0,0.902l2.444,0l2.962,-0.259l1.544,1.159l2.060,0.387l1.416,-0.902l0.128,-0.644l3.218,-0.128l3.348,-0.130l-2.317,0.773l0.900,1.288l2.189,0.257l2.060,1.288l0.386,2.187l1.417,-0.128l1.028,0.645l-2.187,1.672l-0.130,0.902l0.902,1.029l-0.644,0.516l-1.673,0.385l0,1.287l-0.772,0.772l1.930,2.061l0.257,0.772l-0.900,1.030l-3.090,0.902l-1.930,0.515l-0.774,0.643l-2.059,-0.773l-2.060,-0.257l-0.514,0.257l1.158,0.643l0,1.804l0.387,1.672l2.188,0.259l0.128,0.514l-1.931,0.772l-0.257,1.159l-1.159,0.515l-1.930,0.644l-0.515,0.772l-2.060,0.129l-1.544,-1.417l-0.773,-2.703l-0.772,-0.901l-1.031,-0.644l1.416,-1.287l-0.127,-0.644l-0.773,-0.772l-0.516,-1.802l0.259,-1.931l0.513,-0.901l0.517,-1.416l-0.902,-0.515l-1.545,0.386l-1.931,-0.129l-1.158,0.258l-1.802,-2.317l-1.546,-0.387l-3.475,0.258l-0.644,-0.901l-0.772,-0.257l0,-0.516l0.257,-1.030l-0.128,-1.028l-0.644,-0.645l-0.387,-1.287l-1.415,-0.129l0.772,-1.545l0.387,-1.931l0.772,-1.030l1.029,-0.771l0.644,-1.289l-1.802,0.514z";
}, function($ctx1) {$ctx1.fill(self,"Venezuela",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Vietnam",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M756.353,168.853l-3.606,2.316l-2.316,2.575l-0.514,1.930l2.059,2.832l2.445,3.476l2.445,1.675l1.674,2.188l1.287,5.020l-0.385,4.634l-2.318,1.802l-3.090,1.803l-2.187,2.188l-3.348,2.574l-0.902,-1.801l0.644,-1.803l-1.929,-1.544l2.316,-1.030l2.834,-0.258l-1.160,-1.674l4.506,-2.059l0.386,-3.218l-0.644,-1.803l0.387,-2.702l-0.645,-1.803l-2.061,-1.931l-1.673,-2.318l-2.188,-3.217l-3.219,-1.674l0.774,-0.902l1.672,-0.772l-1.028,-2.317l-3.347,0l-1.159,-2.446l-1.544,-2.188l1.416,-0.644l2.187,0l2.576,-0.257l2.317,-1.416l1.287,1.030l2.445,0.515l-0.387,1.545l1.289,1.029l-2.704,-0.645z";
}, function($ctx1) {$ctx1.fill(self,"Vietnam",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "WesternSahara",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M441.482,153.92l0,-1.417l0.387,0l0,0.129l0,0.514l0,4.120l-8.883,-0.129l0.129,6.823l-2.574,0.257l-0.644,1.417l0.515,3.862l-10.557,0l-0.643,0.901l0.129,-1.159l0.129,0l6.050,-0.129l0.257,-1.029l1.159,-1.159l0.901,-3.733l3.733,-2.961l1.287,-3.347l0.773,-0.257l0.900,-2.060l2.319,-0.257l0.900,0.257l1.288,0l0.901,-0.515l-1.544,0.128z";
}, function($ctx1) {$ctx1.fill(self,"WesternSahara",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Yemen",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M608.315,182.111l-1.931,0.772l-0.516,1.159l-0.127,0.901l-2.704,1.159l-4.249,1.287l-2.445,1.802l-1.158,0.258l-0.774,-0.258l-1.673,1.159l-1.673,0.515l-2.189,0.128l-0.772,0.130l-0.515,0.772l-0.772,0.128l-0.386,0.774l-1.287,-0.130l-0.903,0.387l-1.930,-0.129l-0.644,-1.545l0.129,-1.546l-0.516,-0.772l-0.513,-1.930l-0.772,-1.158l0.514,-0.129l-0.258,-1.159l0.388,-0.515l-0.130,-1.288l1.158,-0.772l-0.258,-1.158l0.645,-1.288l1.158,0.644l0.773,-0.257l3.090,0l0.514,0.257l2.574,0.257l1.031,-0.128l0.644,0.901l1.287,-0.515l1.931,-2.832l2.445,-1.159l7.853,-1.030l2.061,4.378l-0.900,-1.930z";
}, function($ctx1) {$ctx1.fill(self,"Yemen",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zambia",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M553.476,251.883l1.287,1.160l0.644,2.315l-0.386,0.644l-0.645,2.189l0.516,2.317l-0.773,0.902l-0.772,2.447l1.416,0.770l-8.239,2.189l0.258,1.932l-2.060,0.385l-1.543,1.031l-0.259,1.028l-1.028,0.130l-2.319,2.188l-1.545,1.802l-0.902,0l-0.772,-0.257l-3.088,-0.256l-0.515,-0.259l0,-0.259l-1.030,-0.513l-1.803,-0.258l-2.187,0.644l-1.673,-1.674l-1.804,-2.187l0.128,-8.625l5.536,0.127l-0.257,-1.028l0.387,-0.903l-0.387,-1.287l0.257,-1.286l-0.257,-0.902l0.901,0.130l0.128,0.772l1.289,0l1.672,0.258l0.903,1.158l2.187,0.385l1.674,-0.901l0.644,1.416l2.058,0.387l0.903,1.158l1.159,1.545l2.058,0l-0.258,-2.961l-0.642,0.516l-1.932,-1.031l-0.772,-0.514l0.387,-2.705l0.514,-3.088l-0.642,-1.288l0.771,-1.673l0.643,-0.387l3.733,-0.386l1.030,0.258l1.159,0.773l1.030,0.387l1.675,0.384l-1.543,-0.901z";
}, function($ctx1) {$ctx1.fill(self,"Zambia",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "Zimbabwe",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M549.228,286.898l-1.416,-0.257l-0.901,0.386l-1.289,-0.513l-1.157,0l-1.673,-1.290l-2.061,-0.385l-0.772,-1.674l0,-1.030l-1.158,-0.256l-3.089,-2.962l-0.900,-1.544l-0.516,-0.516l-1.030,-2.058l3.088,0.256l0.772,0.257l0.902,0l1.545,-1.802l2.319,-2.188l1.028,-0.130l0.259,-1.028l1.543,-1.031l2.060,-0.385l0.129,1.029l2.317,-0.129l1.287,0.645l0.515,0.645l1.287,0.254l1.415,0.774l0,3.475l-0.513,1.801l-0.128,2.061l0.385,0.773l-0.257,1.545l-0.386,0.258l-0.773,1.930l2.832,-3.";
}, function($ctx1) {$ctx1.fill(self,"Zimbabwe",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "arrowLeft",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M20.834,8.037L9.641,14.5c-1.43,0.824-1.43,2.175,0,3l11.193,6.463c1.429,0.826,2.598,0.15,2.598-1.5V9.537C23.432,7.887,22.263,7.211,20.834,8.037z";
}, function($ctx1) {$ctx1.fill(self,"arrowLeft",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "arrowRight",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M11.166,23.963L22.359,17.5c1.43-0.824,1.43-2.175,0-3L11.166,8.037c-1.429-0.826-2.598-0.15-2.598,1.5v12.926C8.568,24.113,9.737,24.789,11.166,23.963z";
}, function($ctx1) {$ctx1.fill(self,"arrowRight",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "countries",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "BosniaandHerzegovina", "Botswana", "Brazil", "BruneiDarussalam", "Bulgaria", "BurkinaFaso", "Burundi", "Cambodia", "Cameroon", "Canada", "CentralAfricanRepublic", "Chad", "Chile", "China", "Colombia", "Congo", "CostaRica", "Croatia", "Cuba", "Cyprus", "CzechRepublic", "DemocraticRepublicCongo", "Denmark", "Djibouti", "DominicanRepublic", "Ecuador", "Egypt", "ElSalvador", "EquatorialGuinea", "Eritrea", "Estonia", "Ethiopia", "FalklandIslandsMalvinas", "Fiji", "Finland", "France", "FrenchGuyana", "GM", "Gabon", "Georgia", "Germany", "Ghana", "GreatBritian", "Greece", "Greenland", "Guatemala", "Guinea", "GuineaBissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "IvoryCoast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldova", "Mongolia", "Morocco", "Mozambique", "MyanmarBurma", "Namibia", "Nepal", "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "NorthKorea", "Norway", "NewCaledonia", "Oman", "Pakistan", "Palestine", "Panama", "PapuaNewGuinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "PuertoRico", "Qatar", "RepublicofMacedonia", "RepublicofTurkey", "Romania", "Russia", "Rwanda", "SaudiArabia", "Senegal", "Serbia", "SierraLeone", "Slovakia", "SolomonIslands", "Somalia", "SouthAfrica", "Lesotho", "SouthKorea", "Spain", "SriLanka", "Sudan", "Suriname", "SvalbardJanMayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "TimorLeste", "Togo", "Tunisia", "Turkmenistan", "Uganda", "Ukraine", "UnitedArabEmirates", "UnitedStates", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "WesternSahara", "Yemen", "Zambia", "Zimbabwe"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"countries",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "icons",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["supermarketCart", "America", "puzzlePiece"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"icons",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "puzzlePiece",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M3.739,13.619c0,0,3.516-4.669,5.592-3.642c2.077,1.027-0.414,2.795,1.598,3.719c2.011,0.924,5.048-0.229,4.376-2.899c-0.672-2.67-1.866-0.776-2.798-2.208c-0.934-1.432,4.586-4.59,4.586-4.59s3.361,6.651,4.316,4.911c1.157-2.105,3.193-4.265,5.305-1.025c0,0,1.814,2.412,0.246,3.434s-2.917,0.443-3.506,1.553c-0.586,1.112,3.784,4.093,3.784,4.093s-2.987,4.81-4.926,3.548c-1.939-1.262,0.356-3.364-2.599-3.989c-1.288-0.23-3.438,0.538-3.818,2.34c-0.13,2.709,1.604,2.016,2.797,3.475c1.191,1.457-4.484,4.522-4.484,4.522s-1.584-3.923-3.811-4.657c-2.227-0.735-0.893,2.135-2.917,2.531c-2.024,0.396-4.816-2.399-3.46-4.789c1.358-2.391,3.275-0.044,3.441-1.951C7.629,16.087,3.739,13.619,3.739,13.619z";
}, function($ctx1) {$ctx1.fill(self,"puzzlePiece",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "southAmerica",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["Argentina", "Brazil", "Bolivia", "Chile", "Colombia", "Ecuador", "Guyana", "FrenchGuyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"southAmerica",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "supermarketCart",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return "M29.02,11.754L8.416,9.473L7.16,4.716C7.071,4.389,6.772,4.158,6.433,4.158H3.341C3.114,3.866,2.775,3.667,2.377,3.667c-0.686,0-1.242,0.556-1.242,1.242c0,0.686,0.556,1.242,1.242,1.242c0.399,0,0.738-0.201,0.965-0.493h2.512l5.23,19.8c-0.548,0.589-0.891,1.373-0.891,2.242c0,1.821,1.473,3.293,3.293,3.293c1.82,0,3.294-1.472,3.297-3.293c0-0.257-0.036-0.504-0.093-0.743h5.533c-0.056,0.239-0.092,0.486-0.092,0.743c0,1.821,1.475,3.293,3.295,3.293s3.295-1.472,3.295-3.293c0-1.82-1.473-3.295-3.295-3.297c-0.951,0.001-1.801,0.409-2.402,1.053h-7.136c-0.601-0.644-1.451-1.052-2.402-1.053c-0.379,0-0.738,0.078-1.077,0.196l-0.181-0.685H26.81c1.157-0.027,2.138-0.83,2.391-1.959l1.574-7.799c0.028-0.145,0.041-0.282,0.039-0.414C30.823,12.733,30.051,11.86,29.02,11.754zM25.428,27.994c-0.163,0-0.295-0.132-0.297-0.295c0.002-0.165,0.134-0.297,0.297-0.297s0.295,0.132,0.297,0.297C25.723,27.862,25.591,27.994,25.428,27.994zM27.208,20.499l0.948-0.948l-0.318,1.578L27.208,20.499zM12.755,11.463l1.036,1.036l-1.292,1.292l-1.292-1.292l1.087-1.087L12.755,11.463zM17.253,11.961l0.538,0.538l-1.292,1.292l-1.292-1.292l0.688-0.688L17.253,11.961zM9.631,14.075l0.868-0.868l1.292,1.292l-1.292,1.292l-0.564-0.564L9.631,14.075zM9.335,12.956l-0.328-1.24L9.792,12.5L9.335,12.956zM21.791,16.499l-1.292,1.292l-1.292-1.292l1.292-1.292L21.791,16.499zM21.207,14.5l1.292-1.292l1.292,1.292l-1.292,1.292L21.207,14.5zM18.5,15.791l-1.293-1.292l1.292-1.292l1.292,1.292L18.5,15.791zM17.791,16.499L16.5,17.791l-1.292-1.292l1.292-1.292L17.791,16.499zM14.499,15.791l-1.292-1.292l1.292-1.292l1.292,1.292L14.499,15.791zM13.791,16.499l-1.292,1.291l-1.292-1.291l1.292-1.292L13.791,16.499zM10.499,17.207l1.292,1.292l-0.785,0.784l-0.54-2.044L10.499,17.207zM11.302,20.404l1.197-1.197l1.292,1.292L12.5,21.791l-1.131-1.13L11.302,20.404zM13.208,18.499l1.291-1.292l1.292,1.292L14.5,19.791L13.208,18.499zM16.5,19.207l1.292,1.292L16.5,21.79l-1.292-1.291L16.5,19.207zM17.208,18.499l1.292-1.292l1.291,1.292L18.5,19.79L17.208,18.499zM20.499,19.207l1.292,1.292L20.5,21.79l-1.292-1.292L20.499,19.207zM21.207,18.499l1.292-1.292l1.292,1.292l-1.292,1.292L21.207,18.499zM23.207,16.499l1.292-1.292l1.292,1.292l-1.292,1.292L23.207,16.499zM25.207,14.499l1.292-1.292L27.79,14.5l-1.291,1.292L25.207,14.499zM24.499,13.792l-1.156-1.156l2.082,0.23L24.499,13.792zM21.791,12.5l-1.292,1.292L19.207,12.5l0.29-0.29l2.253,0.25L21.791,12.5zM14.5,11.791l-0.152-0.152l0.273,0.03L14.5,11.791zM10.5,11.792l-0.65-0.65l1.171,0.129L10.5,11.792zM14.5,21.207l1.205,1.205h-2.409L14.5,21.207zM18.499,21.207l1.206,1.206h-2.412L18.499,21.207zM22.499,21.207l1.208,1.207l-2.414-0.001L22.499,21.207zM23.207,20.499l1.292-1.292l1.292,1.292l-1.292,1.292L23.207,20.499zM25.207,18.499l1.292-1.291l1.291,1.291l-1.291,1.292L25.207,18.499zM28.499,17.791l-1.291-1.292l1.291-1.291l0.444,0.444l-0.429,2.124L28.499,17.791zM29.001,13.289l-0.502,0.502l-0.658-0.658l1.016,0.112C28.911,13.253,28.956,13.271,29.001,13.289zM13.487,27.994c-0.161,0-0.295-0.132-0.295-0.295c0-0.165,0.134-0.297,0.295-0.297c0.163,0,0.296,0.132,0.296,0.297C13.783,27.862,13.651,27.994,13.487,27.994zM26.81,22.414h-1.517l1.207-1.207l0.93,0.93C27.243,22.306,27.007,22.428,26.81,22.414z";
}, function($ctx1) {$ctx1.fill(self,"supermarketCart",{},smalltalk.RTSVGPath.klass)})},
messageSends: []}),
smalltalk.RTSVGPath.klass);


smalltalk.addClass('RTTest', smalltalk.TestCase, [], 'Roassal2-Core');


