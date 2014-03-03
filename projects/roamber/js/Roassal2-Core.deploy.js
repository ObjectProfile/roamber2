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
fn: function (anEdge) {
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(anEdge)._class()).__eq_eq($RTEdge());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._assert();
_st(self._connectedEdges())._add_(anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"addConnectedEdge:",{anEdge:anEdge},smalltalk.RTElement)});},
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


