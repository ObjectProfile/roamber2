smalltalk.addPackage('Roassal2-Core');
smalltalk.addClass('RTGroup', smalltalk.Array, [], 'Roassal2-Core');
smalltalk.RTGroup.comment="A RTGroup is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'public',
fn: function (aShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e).__plus(aShape);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"+",{aShape:aShape},smalltalk.RTGroup)});},
args: ["aShape"],
source: "+ aShape\x0a\x09self do: [ :e | e + aShape ]",
messageSends: ["do:", "+"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: 'public',
fn: function (interaction) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e).__at(interaction);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"@",{interaction:interaction},smalltalk.RTGroup)});},
args: ["interaction"],
source: "@ interaction\x0a\x09self do: [ :e | e @ interaction ]",
messageSends: ["do:", "@"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'public',
fn: function (view) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(view)._add_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{view:view},smalltalk.RTGroup)});},
args: ["view"],
source: "addedIn: view\x0a\x09self do: [ :e | view add: e ]",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
category: 'public',
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
args: ["anObject"],
source: "elementFromModel: anObject\x0a\x09\x22Return an element that corresponds to the object provided as parameter. If none is found, then return nil\x22\x0a\x09^ self detect: [ :el | el model = anObject ] ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "model"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'public',
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
args: [],
source: "encompassingRectangle\x0a\x09^ self \x0a\x09\x09ifEmpty: [ (0 @ 0) corner: (0 @ 0) ]\x0a\x09\x09ifNotEmpty: [ Rectangle merging: (self collect: #encompassingRectangle) ]",
messageSends: ["ifEmpty:ifNotEmpty:", "corner:", "@", "merging:", "collect:"],
referencedClasses: ["Rectangle"]
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.RTGroup)});},
args: [],
source: "extent\x0a\x09^ self encompassingRectangle extent",
messageSends: ["extent", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTGroup)});},
args: [],
source: "height\x0a\x09^ self encompassingRectangle height",
messageSends: ["height", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTGroup);

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
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.RTGroup)});},
args: [],
source: "position\x0a\x09^ self encompassingRectangle center",
messageSends: ["center", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_("remove");
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},smalltalk.RTGroup)});},
args: [],
source: "remove\x0a\x09self do: #remove",
messageSends: ["do:"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'public',
fn: function (trCanvas) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._renderOn_(trCanvas);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{trCanvas:trCanvas},smalltalk.RTGroup)});},
args: ["trCanvas"],
source: "renderOn: trCanvas \x0a\x09\x22Not sure whether this method is necessary...\x22\x0a\x09self do: [ :e | e renderOn: trCanvas ]",
messageSends: ["do:", "renderOn:"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'public',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(aPoint);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{aPoint:aPoint},smalltalk.RTGroup)});},
args: ["aPoint"],
source: "translateBy: aPoint\x0a\x09self do: [ :e | e translateBy: aPoint ]",
messageSends: ["do:", "translateBy:"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'public',
fn: function (aPosition) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
center=_st(self._encompassingRectangle())._center();
self._translateBy_(_st(aPosition).__minus(center));
return self}, function($ctx1) {$ctx1.fill(self,"translateTo:",{aPosition:aPosition,center:center},smalltalk.RTGroup)});},
args: ["aPosition"],
source: "translateTo: aPosition\x0a\x09| center |\x0a\x09center := self encompassingRectangle center.\x0a\x09self translateBy: (aPosition - center)",
messageSends: ["center", "encompassingRectangle", "translateBy:", "-"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTopLeftTo:",
category: 'public',
fn: function (aPosition) {
var self=this;
var center;
return smalltalk.withContext(function($ctx1) { 
center=_st(self._encompassingRectangle())._topLeft();
self._translateBy_(_st(aPosition).__minus(center));
return self}, function($ctx1) {$ctx1.fill(self,"translateTopLeftTo:",{aPosition:aPosition,center:center},smalltalk.RTGroup)});},
args: ["aPosition"],
source: "translateTopLeftTo: aPosition\x0a\x09| center |\x0a\x09center := self encompassingRectangle topLeft.\x0a\x09self translateBy: (aPosition - center)",
messageSends: ["topLeft", "encompassingRectangle", "translateBy:", "-"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'public',
fn: function (evt, callback) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._when_do_(evt,callback);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{evt:evt,callback:callback},smalltalk.RTGroup)});},
args: ["evt", "callback"],
source: "when: evt do: callback\x0a\x09self do: [ :e | e when: evt do: callback ]",
messageSends: ["do:", "when:do:"],
referencedClasses: []
}),
smalltalk.RTGroup);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTGroup)});},
args: [],
source: "width\x0a\x09^ self encompassingRectangle width",
messageSends: ["width", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTGroup);



smalltalk.addClass('RTObject', smalltalk.Object, [], 'Roassal2-Core');
smalltalk.RTObject.comment="A RTObject is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTObject)});},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTObject);



smalltalk.addClass('RTAnnounceableObject', smalltalk.RTObject, ['announcer'], 'Roassal2-Core');
smalltalk.RTAnnounceableObject.comment="A RTAnnounceableObject is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09announcer:\x09\x09<Object>\x0a\x0aannouncer\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "@",
category: 'adding',
fn: function (anInteractionClassOrInstance) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addInteraction_(anInteractionClassOrInstance);
return self}, function($ctx1) {$ctx1.fill(self,"@",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.RTAnnounceableObject)});},
args: ["anInteractionClassOrInstance"],
source: "@ anInteractionClassOrInstance\x0a\x09\x22Add an interaction to the node\x22\x0a\x09\x0a\x09self addInteraction: anInteractionClassOrInstance",
messageSends: ["addInteraction:"],
referencedClasses: []
}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addInteraction:",
category: 'adding',
fn: function (anInteractionClassOrInstance) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anInteractionClassOrInstance)._initializeElement_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addInteraction:",{anInteractionClassOrInstance:anInteractionClassOrInstance},smalltalk.RTAnnounceableObject)});},
args: ["anInteractionClassOrInstance"],
source: "addInteraction: anInteractionClassOrInstance\x0a \x09anInteractionClassOrInstance initializeElement: self",
messageSends: ["initializeElement:"],
referencedClasses: []
}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'announce',
fn: function (evt) {
var self=this;
var t;
return smalltalk.withContext(function($ctx1) { 
t=_st(evt)._asAnnouncement();
_st(t)._shape_(self._trachelShape());
_st(self._announcer())._announce_(evt);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{evt:evt,t:t},smalltalk.RTAnnounceableObject)});},
args: ["evt"],
source: "announce: evt\x0a\x09| t |\x0a\x09t := evt asAnnouncement.\x0a\x09t shape: self trachelShape.\x0a\x09self announcer announce: evt",
messageSends: ["asAnnouncement", "shape:", "trachelShape", "announce:", "announcer"],
referencedClasses: []
}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "announcer",
category: 'accessing',
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
args: [],
source: "announcer\x0a\x09announcer ifNil: [ announcer := Announcer new ].\x0a\x09^ announcer",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Announcer"]
}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "on:do:",
category: 'interaction',
fn: function (evt, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(evt,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"on:do:",{evt:evt,aBlock:aBlock},smalltalk.RTAnnounceableObject)});},
args: ["evt", "aBlock"],
source: "on: evt do: aBlock\x0a\x09self announcer when: evt do: aBlock",
messageSends: ["when:do:", "announcer"],
referencedClasses: []
}),
smalltalk.RTAnnounceableObject);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'interaction',
fn: function (evt, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._announcer())._when_do_(evt,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{evt:evt,aBlock:aBlock},smalltalk.RTAnnounceableObject)});},
args: ["evt", "aBlock"],
source: "when: evt do: aBlock\x0a\x09self announcer when: evt do: aBlock",
messageSends: ["when:do:", "announcer"],
referencedClasses: []
}),
smalltalk.RTAnnounceableObject);



smalltalk.addClass('RTShapedObject', smalltalk.RTAnnounceableObject, ['shape', 'trachelShape', 'attributes', 'view', 'model'], 'Roassal2-Core');
smalltalk.RTShapedObject.comment="A RTShapedObject is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09attributes:\x09\x09<Object>\x0a\x09model:\x09\x09<Object>\x0a\x09shape:\x09\x09<Object>\x0a\x09trachelShape:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x0aattributes\x0a\x09- xxxxx\x0a\x0amodel\x0a\x09- xxxxx\x0a\x0ashape\x0a\x09- xxxxx\x0a\x0atrachelShape\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'adding',
fn: function (aRTShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._addShape_(_st(aRTShape)._instance());
return self}, function($ctx1) {$ctx1.fill(self,"+",{aRTShape:aRTShape},smalltalk.RTShapedObject)});},
args: ["aRTShape"],
source: "+ aRTShape\x0a\x09\x22Add a Roassal shape, class or instance of it. Not that a Trachel cannot be given as argument\x22\x0a\x09self addShape: aRTShape instance",
messageSends: ["addShape:", "instance"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addShape:",
category: 'adding',
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
args: ["aRTShape"],
source: "addShape: aRTShape\x0a\x09(shape class == RTNoShape)  \x0a\x09\x09ifTrue: [\x09shape := aRTShape instance ]\x0a\x09\x09ifFalse: [ shape := RTCompositeShape with: shape with: aRTShape ].\x0a\x09trachelShape := shape trachelShapeFor: self",
messageSends: ["ifTrue:ifFalse:", "instance", "with:with:", "==", "class", "trachelShapeFor:"],
referencedClasses: ["RTCompositeShape", "RTNoShape"]
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'adding',
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassReponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTShapedObject)});},
args: ["aView"],
source: "addedIn: aView\x0a\x09self subclassReponsibility",
messageSends: ["subclassReponsibility"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:",
category: 'attributes',
fn: function (aKey) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_(aKey);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:",{aKey:aKey},smalltalk.RTShapedObject)});},
args: ["aKey"],
source: "attributeAt: aKey\x0a\x09^ self attributes at: aKey",
messageSends: ["at:", "attributes"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:ifAbsent:",
category: 'attributes',
fn: function (aKey, aBlockClosure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_ifAbsent_(aKey,aBlockClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:ifAbsent:",{aKey:aKey,aBlockClosure:aBlockClosure},smalltalk.RTShapedObject)});},
args: ["aKey", "aBlockClosure"],
source: "attributeAt: aKey ifAbsent: aBlockClosure \x0a\x09\x0a\x09^ self attributes at: aKey ifAbsent: aBlockClosure",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:ifAbsentPut:",
category: 'attributes',
fn: function (aKey, aBlockClosure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_ifAbsentPut_(aKey,aBlockClosure);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:ifAbsentPut:",{aKey:aKey,aBlockClosure:aBlockClosure},smalltalk.RTShapedObject)});},
args: ["aKey", "aBlockClosure"],
source: "attributeAt: aKey ifAbsentPut: aBlockClosure \x0a\x09\x0a\x09^ self attributes at: aKey ifAbsentPut: aBlockClosure",
messageSends: ["at:ifAbsentPut:", "attributes"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributeAt:put:",
category: 'attributes',
fn: function (aKey, value) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._attributes())._at_put_(aKey,value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"attributeAt:put:",{aKey:aKey,value:value},smalltalk.RTShapedObject)});},
args: ["aKey", "value"],
source: "attributeAt: aKey put: value\x0a\x09^ self attributes at: aKey put: value",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "attributes",
category: 'attributes',
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
args: [],
source: "attributes\x0a\x09\x22Return the list of attributes associated to the element. Attributes are useful for caching values\x22\x0a\x0a\x09^ attributes ifNil: [ attributes := Dictionary new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAttribute:",
category: 'attributes',
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
args: ["aKey"],
source: "hasAttribute: aKey \x0a\x09\x22Return true if attributes includes aKey\x22\x0a\x09\x0a\x09^ attributes notNil and: [ attributes includesKey: aKey ]",
messageSends: ["and:", "includesKey:", "notNil"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "hasAttributes",
category: 'attributes',
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
args: [],
source: "hasAttributes \x0a\x09\x22Return true if at least one attributes is present\x22\x0a\x09\x0a\x09^ attributes notNil and: [ attributes notEmpty ]",
messageSends: ["and:", "notEmpty", "notNil"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShapedObject.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@shape"]=_st($RTNoShape())._new();
self["@trachelShape"]=_st($TRNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShapedObject)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09shape := RTNoShape new.\x0a\x09trachelShape := TRNoShape instance",
messageSends: ["initialize", "new", "instance"],
referencedClasses: ["RTNoShape", "TRNoShape"]
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@model"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"model",{},smalltalk.RTShapedObject)});},
args: [],
source: "model\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@model"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"model:",{anObject:anObject},smalltalk.RTShapedObject)});},
args: ["anObject"],
source: "model: anObject\x0a\x09\x22anObject could be any Smalltalk object. Shapes are computed based on that object\x22\x0a\x09model := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
category: 'rendering',
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
args: ["trachelCanvas"],
source: "renderOn: trachelCanvas\x0a\x09trachelShape isNil ifTrue: [ self error: 'Cannot add an element without a shape. Add a shape to myself, using + or addShape:' . ^ self ].\x0a\x09trachelCanvas addShape: trachelShape.\x0a\x09trachelShape announcer: self announcer.\x0a\x09trachelShape element: self",
messageSends: ["ifTrue:", "error:", "isNil", "addShape:", "announcer:", "announcer", "element:"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

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
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTShapedObject)});},
args: [],
source: "shape\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "testCaseAnnounce:",
category: 'announce',
fn: function (evt) {
var self=this;
var evtInstance;
return smalltalk.withContext(function($ctx1) { 
evtInstance=_st(evt)._shape_(self._trachelShape());
self._announce_(evtInstance);
return self}, function($ctx1) {$ctx1.fill(self,"testCaseAnnounce:",{evt:evt,evtInstance:evtInstance},smalltalk.RTShapedObject)});},
args: ["evt"],
source: "testCaseAnnounce: evt\x0a\x09\x22It is used for Test Cases because in that case evt does not know where it has been announced.\x22\x0a\x09| evtInstance |\x0a\x09evtInstance := evt shape: self trachelShape.\x0a\x09self announce: evtInstance",
messageSends: ["shape:", "trachelShape", "announce:"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@trachelShape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{},smalltalk.RTShapedObject)});},
args: [],
source: "trachelShape\x0a\x09^ trachelShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "update",
category: 'updating',
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
args: [],
source: "update\x0a\x09\x22Update the trachel shape and reset the path. This has the effect of moving the visual widget\x22\x0a\x09shape updateFor: self.\x0a\x09trachelShape ifNotNil: [ trachelShape resetPath ]",
messageSends: ["updateFor:", "ifNotNil:", "resetPath"],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RTShapedObject)});},
args: [],
source: "view\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aRoassalView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aRoassalView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aRoassalView:aRoassalView},smalltalk.RTShapedObject)});},
args: ["aRoassalView"],
source: "view: aRoassalView\x0a\x09view := aRoassalView",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapedObject);



smalltalk.addClass('RTEdge', smalltalk.RTShapedObject, ['from', 'to'], 'Roassal2-Core');
smalltalk.RTEdge.comment="A RTEdge is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09from:\x09\x09<Object>\x0a\x09to:\x09\x09<Object>\x0a\x0afrom\x0a\x09- xxxxx\x0a\x0ato\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'accessing',
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
_st(self["@view"])._addEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTEdge)});},
args: ["aView"],
source: "addedIn: aView\x0a\x09view := aView.\x0a\x09view addEdge: self",
messageSends: ["addEdge:"],
referencedClasses: []
}),
smalltalk.RTEdge);

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
}, function($ctx1) {$ctx1.fill(self,"from",{},smalltalk.RTEdge)});},
args: [],
source: "from\x0a\x09\x0a\x09^ from",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "from:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@from"]=anElement;
_st(anElement)._addConnectedEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"from:",{anElement:anElement},smalltalk.RTEdge)});},
args: ["anElement"],
source: "from: anElement\x0a\x09\x0a\x09from := anElement.\x0a\x09anElement addConnectedEdge: self",
messageSends: ["addConnectedEdge:"],
referencedClasses: []
}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "moveBehindItsExtremities",
category: 'actions',
fn: function () {
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
_st(self._trachelShape())._pushBehindAll_(_st($Array())._with_with_(_st(self._from())._trachelShape(),_st(self._to())._trachelShape()));
return self}, function($ctx1) {$ctx1.fill(self,"moveBehindItsExtremities",{},smalltalk.RTEdge)});},
args: [],
source: "moveBehindItsExtremities\x0a\x09\x22Make the edge be displayed before its extremities are displayed. This is useful to not have the edge over the extremity nodes\x22\x0a\x09self trachelShape pushBehindAll: (Array with: self from trachelShape with: self to trachelShape)",
messageSends: ["pushBehindAll:", "with:with:", "trachelShape", "from", "to"],
referencedClasses: ["Array"]
}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09(to connectedEdges includes: self) \x0a\x09\x09ifTrue: [to connectedEdges remove: self].\x0a\x09(from connectedEdges includes: self)\x0a\x09\x09ifTrue: [from connectedEdges remove: self].\x0a\x09(view isNil)\x0a\x09\x09ifFalse: [  \x0a\x09\x09\x09view removeEdge: self.\x0a\x09\x09\x09view := nil]",
messageSends: ["ifTrue:", "remove:", "connectedEdges", "includes:", "ifFalse:", "removeEdge:", "isNil"],
referencedClasses: []
}),
smalltalk.RTEdge);

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
}, function($ctx1) {$ctx1.fill(self,"to",{},smalltalk.RTEdge)});},
args: [],
source: "to\x0a\x09\x0a\x09^ to",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdge);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@to"]=anElement;
_st(anElement)._addConnectedEdge_(self);
return self}, function($ctx1) {$ctx1.fill(self,"to:",{anElement:anElement},smalltalk.RTEdge)});},
args: ["anElement"],
source: "to: anElement\x0a\x09\x0a\x09to := anElement.\x0a\x09anElement addConnectedEdge: self",
messageSends: ["addConnectedEdge:"],
referencedClasses: []
}),
smalltalk.RTEdge);


smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:inView:",
category: 'public - edge construction',
fn: function (associations, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromAssociations_using_inView_(associations,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:inView:",{associations:associations,view:view},smalltalk.RTEdge.klass)});},
args: ["associations", "view"],
source: "buildEdgesFromAssociations: associations inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromAssociations: associations using: RTLine inView: view",
messageSends: ["buildEdgesFromAssociations:using:inView:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:",
category: 'public - edge construction',
fn: function (associations, aLineShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(associations,"key","value",aLineShape);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromAssociations:using:",{associations:associations,aLineShape:aLineShape},smalltalk.RTEdge.klass)});},
args: ["associations", "aLineShape"],
source: "buildEdgesFromAssociations: associations using: aLineShape\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09^ self buildEdgesFromElements: associations from: #key to: #value using: aLineShape",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: []
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromAssociations:using:inView:",
category: 'public - edge construction',
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
args: ["associations", "aLineShape", "view"],
source: "buildEdgesFromAssociations: associations using: aLineShape inView: view\x0a\x09\x22associations could be {2 -> 5 . 1 -> 5 }.\x0a\x09 Takes the model of element into account\x22\x0a\x09\x0a\x09| edges associationsOfElements |\x0a\x09associationsOfElements := associations collect: [ :assoc | (view elementFromModel: assoc key) -> (view elementFromModel: assoc value) ].\x0a\x09associationsOfElements isEmpty ifTrue: [ ^ #() ].\x0a\x09\x0a\x09edges := OrderedCollection new.\x0a\x09associationsOfElements do: [ :associationOfTwoElements |\x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := RTEdge from: associationOfTwoElements key to: associationOfTwoElements value. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge ].\x0a\x09view addAll: edges.\x0a\x09^ edges",
messageSends: ["collect:", "->", "elementFromModel:", "value", "key", "ifTrue:", "isEmpty", "new", "do:", "from:to:", "+", "add:", "addAll:"],
referencedClasses: ["OrderedCollection", "RTEdge"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:",
category: 'public - edge construction',
fn: function (elements, fromBlock, toBlock) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,$RTLine());
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock},smalltalk.RTEdge.klass)});},
args: ["elements", "fromBlock", "toBlock"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x0a\x09^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine",
messageSends: ["buildEdgesFromElements:from:to:using:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:in:",
category: 'public - edge construction',
fn: function (elements, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_in_(elements,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:in:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
args: ["elements", "fromBlock", "toBlock", "view"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock in: view\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x0a\x09^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine in: view",
messageSends: ["buildEdgesFromElements:from:to:using:in:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:inView:",
category: 'public - edge construction',
fn: function (elements, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromElements_from_to_using_inView_(elements,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:inView:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
args: ["elements", "fromBlock", "toBlock", "view"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock inView: view\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x0a\x09^ self buildEdgesFromElements: elements from: fromBlock to: toBlock using: RTLine inView: view",
messageSends: ["buildEdgesFromElements:from:to:using:inView:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:",
category: 'public - edge construction',
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
args: ["elements", "fromBlock", "toBlock", "aLineShape"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09| edges container fromElement toElement elementsWithModels |\x0a\x09elements isEmpty ifTrue: [ ^ #() ].\x0a\x09edges := OrderedCollection new.\x0a\x09elementsWithModels := elements select: [ :el | el model notNil ].\x0a\x09elementsWithModels do: [ :element |\x0a\x09\x09container := element parent.\x0a\x09\x09fromElement := container elementFromModel: (fromBlock rtValue: element model).\x0a\x09\x09toElement := container elementFromModel: (toBlock rtValue: element model).\x0a\x09\x09(fromElement notNil and: [ toElement notNil ])\x0a\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := RTEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09container add: edge ] ].\x0a\x09^ edges",
messageSends: ["ifTrue:", "isEmpty", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "and:"],
referencedClasses: ["OrderedCollection", "RTEdge"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:to:using:inView:",
category: 'public - edge construction',
fn: function (elements, fromBlock, toBlock, aLineShape, view) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(view)._addAll_(self._buildEdgesFromElements_from_to_using_(elements,fromBlock,toBlock,aLineShape));
return self}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromElements:from:to:using:inView:",{elements:elements,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,view:view},smalltalk.RTEdge.klass)});},
args: ["elements", "fromBlock", "toBlock", "aLineShape", "view"],
source: "buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape inView: view\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09view addAll: (self buildEdgesFromElements: elements from: fromBlock to: toBlock using: aLineShape)",
messageSends: ["addAll:", "buildEdgesFromElements:from:to:using:"],
referencedClasses: []
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromElements:from:toAll:using:",
category: 'public - edge construction',
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
args: ["elements", "fromBlock", "toBlock", "aLineShape"],
source: "buildEdgesFromElements: elements from: fromBlock toAll: toBlock using: aLineShape\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x09\x22toBlock should return a collection of models\x22\x0a\x0a\x09| edges container fromElement toElements elementsWithModels |\x0a\x09elements isEmpty ifTrue: [ ^ #() ].\x0a\x09edges := OrderedCollection new.\x0a\x09elementsWithModels := elements select: [ :el | el model notNil ].\x0a\x09\x0a\x09elementsWithModels do: [ :element |\x0a\x09\x09container := element parent.\x0a\x09\x09fromElement := container elementFromModel: (fromBlock rtValue: element model).\x0a\x09\x09\x0a\x09\x09\x22We get the list of elements that corresponds to (toBlock roValues: element model)\x22\x0a\x09\x09toElements := OrderedCollection new.\x0a\x09\x09(toBlock rtValue: element model) do: [ :model | \x0a\x09\x09\x09| v |\x0a\x09\x09\x09v := container elementFromModel: model.\x0a\x09\x09\x09v notNil ifTrue: [ toElements add: v ] ].\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09(fromElement notNil and: [ toElements notEmpty ])\x0a\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09toElements do: [ :toElement |\x0a\x09\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09\x09edge := RTEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09\x09container add: edge ] ]  ].\x0a\x09^ edges",
messageSends: ["ifTrue:", "isEmpty", "new", "select:", "notNil", "model", "do:", "parent", "elementFromModel:", "rtValue:", "add:", "from:to:", "+", "and:", "notEmpty"],
referencedClasses: ["OrderedCollection", "RTEdge"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:inView:",
category: 'public - edge construction',
fn: function (objects, fromBlock, toBlock, view) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_(objects,fromBlock,toBlock,$RTLine(),view);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:inView:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,view:view},smalltalk.RTEdge.klass)});},
args: ["objects", "fromBlock", "toBlock", "view"],
source: "buildEdgesFromObjects: objects from: fromBlock to: toBlock inView: view\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: RTLine inView: view",
messageSends: ["buildEdgesFromObjects:from:to:using:inView:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:inView:scope:",
category: 'public - edge construction',
fn: function (objects, fromBlock, toBlock, view, aGroup) {
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_scope_(objects,fromBlock,toBlock,$RTLine(),view,aGroup);
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:inView:scope:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,view:view,aGroup:aGroup},smalltalk.RTEdge.klass)});},
args: ["objects", "fromBlock", "toBlock", "view", "aGroup"],
source: "buildEdgesFromObjects: objects from: fromBlock to: toBlock inView: view scope: aGroup\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: RTLine inView: view scope: aGroup",
messageSends: ["buildEdgesFromObjects:from:to:using:inView:scope:"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:using:inView:",
category: 'public - edge construction',
fn: function (objects, fromBlock, toBlock, aLineShape, view) {
var self=this;
function $RTGroup(){return smalltalk.RTGroup||(typeof RTGroup=="undefined"?nil:RTGroup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._buildEdgesFromObjects_from_to_using_inView_scope_(objects,fromBlock,toBlock,aLineShape,view,_st($RTGroup())._withAll_(_st(view)._elements()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"buildEdgesFromObjects:from:to:using:inView:",{objects:objects,fromBlock:fromBlock,toBlock:toBlock,aLineShape:aLineShape,view:view},smalltalk.RTEdge.klass)});},
args: ["objects", "fromBlock", "toBlock", "aLineShape", "view"],
source: "buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09^ self buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view scope: (RTGroup withAll: view elements)",
messageSends: ["buildEdgesFromObjects:from:to:using:inView:scope:", "withAll:", "elements"],
referencedClasses: ["RTGroup"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:to:using:inView:scope:",
category: 'public - edge construction',
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
args: ["objects", "fromBlock", "toBlock", "aLineShape", "view", "aGroup"],
source: "buildEdgesFromObjects: objects from: fromBlock to: toBlock using: aLineShape inView: view scope: aGroup\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toBlock operate on the model of the elements\x22\x0a\x0a\x09| edges fromElement toElement |\x0a\x09objects isEmpty ifTrue: [ ^ #() ].\x0a\x09edges := RTGroup new.\x0a\x09objects do: [ :object |\x0a\x09\x09fromElement := aGroup elementFromModel: (fromBlock rtValue: object).\x0a\x09\x09toElement := aGroup elementFromModel: (toBlock rtValue: object).\x0a\x09\x09(fromElement notNil and: [ toElement notNil ])\x0a\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09| edge |\x0a\x09\x09\x09\x09edge := RTEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09view add: edge ] ].\x0a\x09^ edges",
messageSends: ["ifTrue:", "isEmpty", "new", "do:", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "and:", "notNil"],
referencedClasses: ["RTGroup", "RTEdge"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "buildEdgesFromObjects:from:toAll:using:inView:scope:",
category: 'public - edge construction',
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
args: ["objects", "fromBlock", "toAllBlock", "aLineShape", "view", "aGroup"],
source: "buildEdgesFromObjects: objects from: fromBlock toAll: toAllBlock using: aLineShape inView: view scope: aGroup\x0a\x09\x22Handy method to easily build edges. Return a list of edges\x22\x0a\x09\x22fromBlock and toAllBlock operate on the model of the elements\x22\x0a\x0a\x09| edges fromElement toElement |\x0a\x09objects isEmpty ifTrue: [ ^ #() ].\x0a\x09edges := RTGroup new.\x0a\x09objects do: [ :object |\x0a\x09\x09fromElement := aGroup elementFromModel: (fromBlock rtValue: object).\x0a\x09\x09(toAllBlock rtValue: object) do: [ :toObject |\x0a\x09\x09\x09toElement := aGroup elementFromModel: toObject.\x0a\x09\x09\x09(fromElement notNil and: [ toElement notNil ])\x0a\x09\x09\x09\x09ifTrue: [  \x0a\x09\x09\x09\x09\x09(fromElement ~~ toElement) ifTrue: \x0a\x09\x09\x09\x09\x09\x09[ | edge |\x0a\x09\x09\x09\x09\x09\x09edge := RTEdge from: fromElement to: toElement. \x0a\x09\x09\x09\x09\x09\x09edge + aLineShape.\x0a\x09\x09\x09\x09\x09\x09edges add: edge.\x0a\x09\x09\x09\x09\x09\x09view add: edge ] ] ] ].\x0a\x09^ edges",
messageSends: ["ifTrue:", "isEmpty", "new", "do:", "elementFromModel:", "rtValue:", "from:to:", "+", "add:", "~~", "and:", "notNil"],
referencedClasses: ["RTGroup", "RTEdge"]
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "from:to:",
category: 'public',
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
args: ["fromEl", "toEl"],
source: "from: fromEl to: toEl\x0a\x09^ self new from: fromEl; to: toEl; yourself",
messageSends: ["from:", "new", "to:", "yourself"],
referencedClasses: []
}),
smalltalk.RTEdge.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:from:to:",
category: 'public',
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
args: ["aModel", "fromElement", "toElement"],
source: "on: aModel from: fromElement to: toElement\x0a\x09^ (self on: aModel) from: fromElement to: toElement; yourself",
messageSends: ["from:to:", "on:", "yourself"],
referencedClasses: []
}),
smalltalk.RTEdge.klass);


smalltalk.addClass('RTElement', smalltalk.RTShapedObject, ['position', 'connectedEdges'], 'Roassal2-Core');
smalltalk.RTElement.comment="A RTElement is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09connectedEdges:\x09\x09<Object>\x0a\x09position:\x09\x09<Object>\x0a\x0aconnectedEdges\x0a\x09- xxxxx\x0a\x0aposition\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addConnectedEdge:",
category: 'initialization',
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
args: ["anEdge"],
source: "addConnectedEdge: anEdge\x0a\x09[  anEdge class == RTEdge ] assert.\x0a\x09self connectedEdges add: anEdge",
messageSends: ["assert", "==", "class", "add:", "connectedEdges"],
referencedClasses: ["RTEdge"]
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "addedIn:",
category: 'adding',
fn: function (aView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aView;
_st(self["@view"])._addElement_(self);
return self}, function($ctx1) {$ctx1.fill(self,"addedIn:",{aView:aView},smalltalk.RTElement)});},
args: ["aView"],
source: "addedIn: aView\x0a\x09view := aView.\x0a\x09view addElement: self",
messageSends: ["addElement:"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "connectedEdges",
category: 'initialization',
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
args: [],
source: "connectedEdges\x0a\x09connectedEdges ifNil: [ connectedEdges := OrderedCollection new ].\x0a\x09^ connectedEdges",
messageSends: ["ifNil:", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "encompassingRectangle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._encompassingRectangle();
return $1;
}, function($ctx1) {$ctx1.fill(self,"encompassingRectangle",{},smalltalk.RTElement)});},
args: [],
source: "encompassingRectangle\x0a\x09\x22Return the encompassing rectangle of the element\x22\x0a\x09^ trachelShape encompassingRectangle",
messageSends: ["encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._encompassingRectangle())._extent();
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.RTElement)});},
args: [],
source: "extent\x0a\x09\x22Returns a point, describing the extent of the encompassing rectangle of myself\x22\x0a\x09^ self encompassingRectangle extent",
messageSends: ["extent", "encompassingRectangle"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._height();
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTElement)});},
args: [],
source: "height\x0a\x09^ trachelShape height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "incomingEdges",
category: 'accessing',
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
args: [],
source: "incomingEdges\x0a\x09connectedEdges ifNil: [ ^ #() ].\x0a\x09^ self connectedEdges select: [ :e | e to == self ]",
messageSends: ["ifNil:", "select:", "==", "to", "connectedEdges"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTElement.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTElement)});},
args: [],
source: "initialize\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "isConnectedTo:",
category: 'testing',
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
args: ["anEdge"],
source: "isConnectedTo: anEdge\x0a\x09connectedEdges ifNil: [ ^ false ].\x0a\x09^ connectedEdges anySatisfy: [ :edge | edge == anEdge ]",
messageSends: ["ifNil:", "anySatisfy:", "=="],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "outgoingEdges",
category: 'accessing',
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
args: [],
source: "outgoingEdges\x0a\x09connectedEdges ifNil: [ ^ #() ].\x0a\x09^ self connectedEdges select: [ :e | e from == self ]",
messageSends: ["ifNil:", "select:", "==", "from", "connectedEdges"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "position",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._position();
return $1;
}, function($ctx1) {$ctx1.fill(self,"position",{},smalltalk.RTElement)});},
args: [],
source: "position\x0a\x09^ trachelShape position",
messageSends: ["position"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
category: 'actions',
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
args: [],
source: "remove\x0a\x09view ifNil: [ self error: 'cannot remove an element that is not part of a view' ].\x0a\x09view removeElement: self.\x0a\x09view := nil",
messageSends: ["ifNil:", "error:", "removeElement:"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
category: 'actions',
fn: function (delta) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translateTo_(_st(self._position()).__plus(delta));
return self}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.RTElement)});},
args: ["delta"],
source: "translateBy: delta\x0a\x09\x22Translate the element by an incremental step. If I am connected to some edges, the edges are also updated.\x22\x0a\x09self translateTo: self position + delta",
messageSends: ["translateTo:", "+", "position"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTo:",
category: 'actions',
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
args: ["newPosition"],
source: "translateTo: newPosition\x0a\x09\x22Translate the element to a new position. If I am connected to some edges, the edges are also updated.\x22\x0a\x09trachelShape translateTo: newPosition.\x0a\x09\x0a\x09self connectedEdges do: [ :edge | edge update ].\x0a\x09trachelShape resetPath",
messageSends: ["translateTo:", "do:", "update", "connectedEdges", "resetPath"],
referencedClasses: []
}),
smalltalk.RTElement);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@trachelShape"])._width();
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTElement)});},
args: [],
source: "width\x0a\x09^ trachelShape width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.RTElement);


smalltalk.addMethod(
smalltalk.method({
selector: "forCollection:",
category: 'public',
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
args: ["aCollection"],
source: "forCollection: aCollection \x0a\x09^ (aCollection collect: [ :v | self on: v ]) asArray",
messageSends: ["asArray", "collect:", "on:"],
referencedClasses: []
}),
smalltalk.RTElement.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
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
args: ["anObject"],
source: "on: anObject\x0a\x0a\x09^ self new model: anObject; yourself",
messageSends: ["model:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTElement.klass);


smalltalk.addClass('RTView', smalltalk.RTAnnounceableObject, ['elements', 'edges', 'animations', 'trCanvas'], 'Roassal2-Core');
smalltalk.RTView.comment="A RTView is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09animations:\x09\x09<Object>\x0a\x09edges:\x09\x09<Object>\x0a\x09elements:\x09\x09<Object>\x0a\x09trCanvas:\x09\x09<Object>\x0a\x0aanimations\x0a\x09- xxxxx\x0a\x0aedges\x0a\x09- xxxxx\x0a\x0aelements\x0a\x09- xxxxx\x0a\x0atrCanvas\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "add:",
category: 'adding',
fn: function (anElementOrAnEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(anElementOrAnEdge)._addedIn_(self);
_st(anElementOrAnEdge)._renderOn_(self["@trCanvas"]);
return self}, function($ctx1) {$ctx1.fill(self,"add:",{anElementOrAnEdge:anElementOrAnEdge},smalltalk.RTView)});},
args: ["anElementOrAnEdge"],
source: "add: anElementOrAnEdge\x0a\x09anElementOrAnEdge addedIn: self.\x0a\x09anElementOrAnEdge renderOn: trCanvas",
messageSends: ["addedIn:", "renderOn:"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAll:",
category: 'adding',
fn: function (someElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(someElements)._do_((function(el){
return smalltalk.withContext(function($ctx2) {
return self._add_(el);
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"addAll:",{someElements:someElements},smalltalk.RTView)});},
args: ["someElements"],
source: "addAll: someElements\x0a\x09someElements do: [ :el | self add: el ]",
messageSends: ["do:", "add:"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addAnimation:",
category: 'adding',
fn: function (animation) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@trCanvas"])._addAnimation_(animation);
return self}, function($ctx1) {$ctx1.fill(self,"addAnimation:",{animation:animation},smalltalk.RTView)});},
args: ["animation"],
source: "addAnimation: animation\x0a\x09trCanvas addAnimation: animation",
messageSends: ["addAnimation:"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addEdge:",
category: 'adding',
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@edges"])._add_(anEdge);
return self}, function($ctx1) {$ctx1.fill(self,"addEdge:",{anEdge:anEdge},smalltalk.RTView)});},
args: ["anEdge"],
source: "addEdge: anEdge\x0a\x09edges add: anEdge",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addElement:",
category: 'adding',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._add_(anElement);
return self}, function($ctx1) {$ctx1.fill(self,"addElement:",{anElement:anElement},smalltalk.RTView)});},
args: ["anElement"],
source: "addElement: anElement\x0a\x09elements add: anElement",
messageSends: ["add:"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "addMenu:callback:",
category: 'menu',
fn: function (aTitle, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._canvas())._addMenu_callback_(aTitle,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"addMenu:callback:",{aTitle:aTitle,aBlock:aBlock},smalltalk.RTView)});},
args: ["aTitle", "aBlock"],
source: "addMenu: aTitle callback: aBlock\x0a\x09self canvas addMenu: aTitle callback: aBlock\x0a\x09\x22| el |\x0a\x09el := RTLabel elementOn: aTitle.\x0a\x09el on: TRMouseClick do: [ :event | aBlock value ].\x0a\x09self add: el.\x0a\x09el trachelShape setAsFixed\x22",
messageSends: ["addMenu:callback:", "canvas"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "canvas",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@trCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.RTView)});},
args: [],
source: "canvas\x0a\x09\x22Return the trachel canvas on which everything is drawn\x22\x0a\x09^ trCanvas",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@edges"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.RTView)});},
args: [],
source: "edges\x0a\x09^ edges copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "elementFromModel:",
category: 'actions',
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
args: ["anObject"],
source: "elementFromModel: anObject\x0a\x09\x22Return an element that corresponds to the object provided as parameter. If none is found, then return nil\x22\x0a\x09^ elements detect: [ :el | el model = anObject ] ifNone: [ nil ]",
messageSends: ["detect:ifNone:", "=", "model"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "elements",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements",{},smalltalk.RTView)});},
args: [],
source: "elements\x0a\x09^ elements copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
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
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09elements := OrderedCollection new.\x0a\x09animations := OrderedCollection new.\x0a\x09edges := OrderedCollection new.\x0a\x09trCanvas := TRCanvas new.\x0a\x09\x0a\x09\x22Share my announcer with the one of the Trachel Canvas\x22\x0a\x09announcer := trCanvas announcer.",
messageSends: ["initialize", "new", "announcer"],
referencedClasses: ["OrderedCollection", "TRCanvas"]
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfEdges",
category: 'accessing-computed',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@edges"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfEdges",{},smalltalk.RTView)});},
args: [],
source: "numberOfEdges\x0a\x09^ edges size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "numberOfElements",
category: 'accessing-computed',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@elements"])._size();
return $1;
}, function($ctx1) {$ctx1.fill(self,"numberOfElements",{},smalltalk.RTView)});},
args: [],
source: "numberOfElements\x0a\x09^ elements size",
messageSends: ["size"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'instance creation',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.RTView)});},
args: [],
source: "open\x0a\x09^ self setUpCanvas open",
messageSends: ["open", "setUpCanvas"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:",
category: 'opening',
fn: function (anExtentAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._openInWindowSized_(anExtentAsPoint);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:",{anExtentAsPoint:anExtentAsPoint},smalltalk.RTView)});},
args: ["anExtentAsPoint"],
source: "openInWindowSized: anExtentAsPoint\x0a\x09^ self setUpCanvas openInWindowSized: anExtentAsPoint",
messageSends: ["openInWindowSized:", "setUpCanvas"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openInWindowSized:titled:",
category: 'opening',
fn: function (anExtentAsPoint, aTitle) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._setUpCanvas())._openInWindowSized_titled_(anExtentAsPoint,aTitle);
return $1;
}, function($ctx1) {$ctx1.fill(self,"openInWindowSized:titled:",{anExtentAsPoint:anExtentAsPoint,aTitle:aTitle},smalltalk.RTView)});},
args: ["anExtentAsPoint", "aTitle"],
source: "openInWindowSized: anExtentAsPoint titled: aTitle\x0a\x09^ self setUpCanvas openInWindowSized: anExtentAsPoint titled: aTitle",
messageSends: ["openInWindowSized:titled:", "setUpCanvas"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "openWithMenu",
category: 'instance creation',
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
args: [],
source: "openWithMenu\x0a\x09self canvas addMenu: 'In' callback: [ RTZoomInMove on: self ].\x0a\x09self canvas addMenu: 'Out' callback: [ RTZoomOutMove on: self ].\x0a\x0a\x09^ self setUpCanvas open",
messageSends: ["addMenu:callback:", "on:", "canvas", "open", "setUpCanvas"],
referencedClasses: ["RTZoomInMove", "RTZoomOutMove"]
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeEdge:",
category: 'actions',
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@edges"])._remove_ifAbsent_(anEdge,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(anEdge)._trachelShape())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeEdge:",{anEdge:anEdge},smalltalk.RTView)});},
args: ["anEdge"],
source: "removeEdge: anEdge\x0a\x09edges remove: anEdge ifAbsent: [ ].\x0a\x09anEdge trachelShape remove.",
messageSends: ["remove:ifAbsent:", "remove", "trachelShape"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "removeElement:",
category: 'adding',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@elements"])._remove_ifAbsent_(anElement,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(anElement)._trachelShape())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"removeElement:",{anElement:anElement},smalltalk.RTView)});},
args: ["anElement"],
source: "removeElement: anElement\x0a\x09elements remove: anElement ifAbsent: [ ].\x0a\x09anElement trachelShape remove.",
messageSends: ["remove:ifAbsent:", "remove", "trachelShape"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpCanvas",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(_st(self["@trCanvas"])._camera())._focusOnCenter();
$1=self["@trCanvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"setUpCanvas",{},smalltalk.RTView)});},
args: [],
source: "setUpCanvas\x0a\x09trCanvas camera focusOnCenter.\x0a\x09^ trCanvas",
messageSends: ["focusOnCenter", "camera"],
referencedClasses: []
}),
smalltalk.RTView);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
category: 'accessing-computed',
fn: function () {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRNoShape())._instance();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShape",{},smalltalk.RTView)});},
args: [],
source: "trachelShape\x0a\x0a\x09^ TRNoShape instance",
messageSends: ["instance"],
referencedClasses: ["TRNoShape"]
}),
smalltalk.RTView);



smalltalk.addClass('RTShape', smalltalk.RTObject, ['color'], 'Roassal2-Core');
smalltalk.RTShape.comment="A RTShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09color:\x09\x09<Object>\x0a\x0acolor\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "+",
category: 'public',
fn: function (anotherShape) {
var self=this;
function $RTCompositeShape(){return smalltalk.RTCompositeShape||(typeof RTCompositeShape=="undefined"?nil:RTCompositeShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($RTCompositeShape())._with_with_(self,_st(anotherShape)._instance());
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{anotherShape:anotherShape},smalltalk.RTShape)});},
args: ["anotherShape"],
source: "+ anotherShape\x0a\x09^ RTCompositeShape with: self with: anotherShape instance",
messageSends: ["with:with:", "instance"],
referencedClasses: ["RTCompositeShape"]
}),
smalltalk.RTShape);

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
}, function($ctx1) {$ctx1.fill(self,"color",{},smalltalk.RTShape)});},
args: [],
source: "color\x0a\x09^ color",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "color:",
category: 'accessing',
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._colorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"color:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTShape)});},
args: ["aValueOrAOneArgBlock"],
source: "color: aValueOrAOneArgBlock\x0a\x09\x22aValueOrAOneArgBlock is applied on the object model\x22\x0a\x09self colorElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]",
messageSends: ["colorElement:", "rtValue:", "model"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorElement:",
category: 'accessing',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@color"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"colorElement:",{aBlock:aBlock},smalltalk.RTShape)});},
args: ["aBlock"],
source: "colorElement: aBlock\x0a\x09color := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "colorFor:",
category: 'rendering',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@color"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorFor:",{anElement:anElement},smalltalk.RTShape)});},
args: ["anElement"],
source: "colorFor: anElement\x0a\x09^ color rtValue: anElement",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'configuration',
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Color())._veryVeryLightGray();
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RTShape)});},
args: [],
source: "defaultColor\x0a\x0a\x09^ Color veryVeryLightGray",
messageSends: ["veryVeryLightGray"],
referencedClasses: ["Color"]
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'public',
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
args: [],
source: "element\x0a\x0a\x09^ RTElement new addShape: self; yourself",
messageSends: ["addShape:", "new", "yourself"],
referencedClasses: ["RTElement"]
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'public',
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
args: ["aModel"],
source: "elementOn: aModel\x0a\x0a\x09^ RTElement new model: aModel; addShape: self; yourself",
messageSends: ["model:", "new", "addShape:", "yourself"],
referencedClasses: ["RTElement"]
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'public',
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
args: ["models"],
source: "elementsOn: models\x0a\x09| group |\x0a\x09group := RTGroup new.\x0a\x09models do: [ :m | group add: (self elementOn: m) ].\x0a\x09^ group",
messageSends: ["new", "do:", "add:", "elementOn:"],
referencedClasses: ["RTGroup"]
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._color();
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColor",{},smalltalk.RTShape)});},
args: [],
source: "fillColor\x0a\x09^ self color",
messageSends: ["color"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColor:",
category: 'accessing',
fn: function (arg) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._color_(arg);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColor:",{arg:arg},smalltalk.RTShape)});},
args: ["arg"],
source: "fillColor: arg\x0a\x09^ self color: arg",
messageSends: ["color:"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "fillColorElement:",
category: 'accessing',
fn: function (arg) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._colorElement_(arg);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fillColorElement:",{arg:arg},smalltalk.RTShape)});},
args: ["arg"],
source: "fillColorElement: arg\x0a\x09^ self colorElement: arg",
messageSends: ["colorElement:"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=self._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09color := self defaultColor",
messageSends: ["initialize", "defaultColor"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self;
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.RTShape)});},
args: [],
source: "instance\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
category: 'hooks',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTShape)});},
args: [],
source: "trachelShapeClass\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
category: 'public',
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
args: ["anElement"],
source: "trachelShapeFor: anElement\x0a\x09| trachelShape |\x0a\x09trachelShape := self trachelShapeClass new.\x0a\x09self updateFor: anElement trachelShape: trachelShape.\x0a\x09^ trachelShape",
messageSends: ["new", "trachelShapeClass", "updateFor:trachelShape:"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:",
category: 'hooks',
fn: function (edgeOrElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._updateFor_trachelShape_(edgeOrElement,_st(edgeOrElement)._trachelShape());
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:",{edgeOrElement:edgeOrElement},smalltalk.RTShape)});},
args: ["edgeOrElement"],
source: "updateFor: edgeOrElement\x0a\x09self updateFor: edgeOrElement trachelShape: edgeOrElement trachelShape",
messageSends: ["updateFor:trachelShape:", "trachelShape"],
referencedClasses: []
}),
smalltalk.RTShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
category: 'hooks',
fn: function (edgeOrElement, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{edgeOrElement:edgeOrElement,trachelShape:trachelShape},smalltalk.RTShape)});},
args: ["edgeOrElement", "trachelShape"],
source: "updateFor: edgeOrElement trachelShape: trachelShape\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTShape);


smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._element();
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.RTShape.klass)});},
args: [],
source: "element\x0a\x0a\x09^ self instance element",
messageSends: ["element", "instance"],
referencedClasses: []
}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'as yet unclassified',
fn: function (aModel) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._instance())._elementOn_(aModel);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{aModel:aModel},smalltalk.RTShape.klass)});},
args: ["aModel"],
source: "elementOn: aModel\x0a\x0a\x09^ self instance elementOn: aModel",
messageSends: ["elementOn:", "instance"],
referencedClasses: []
}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'as yet unclassified',
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
args: ["models"],
source: "elementsOn: models\x0a\x09\x22Return a group of elements, which is a kind of ordered collection\x22\x0a\x09| group |\x0a\x09group := RTGroup new.\x0a\x09models do: [ :m | \x0a\x09\x09group add: (self instance elementOn: m) ].\x0a\x09^ group",
messageSends: ["new", "do:", "add:", "elementOn:", "instance"],
referencedClasses: ["RTGroup"]
}),
smalltalk.RTShape.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "instance",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"instance",{},smalltalk.RTShape.klass)});},
args: [],
source: "instance\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.RTShape.klass);


smalltalk.addClass('RTAbstractElementShape', smalltalk.RTShape, ['height', 'width', 'borderColor'], 'Roassal2-Core');
smalltalk.RTAbstractElementShape.comment="A RTAbstractElementShape is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09borderColor:\x09\x09<Object>\x0a\x09height:\x09\x09<Object>\x0a\x09width:\x09\x09<Object>\x0a\x0aborderColor\x0a\x09- xxxxx\x0a\x0aheight\x0a\x09- xxxxx\x0a\x0awidth\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "borderColor",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@borderColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColor",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "borderColor\x0a\x09^ borderColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColor:",
category: 'accessing',
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._borderColorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"borderColor:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrAOneArgBlock"],
source: "borderColor: aValueOrAOneArgBlock\x0a\x09\x22aValueOrAOneArgBlock is applied on the object model\x22\x0a\x09self borderColorElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]",
messageSends: ["borderColorElement:", "rtValue:", "model"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorElement:",
category: 'accessing',
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@borderColor"]=aValueOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"borderColorElement:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrAOneArgBlock"],
source: "borderColorElement: aValueOrAOneArgBlock\x0a\x09borderColor := aValueOrAOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "borderColorFor:",
category: 'accessing',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@borderColor"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"borderColorFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
args: ["anElement"],
source: "borderColorFor: anElement\x0a\x09^ borderColor rtValue: anElement",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultHeight",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultHeight",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "defaultHeight\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultWidth",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultWidth",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "defaultWidth\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "extent:",
category: 'accessing',
fn: function (extentAsPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._widthElement_(_st(extentAsPoint)._x());
self._heightElement_(_st(extentAsPoint)._y());
return self}, function($ctx1) {$ctx1.fill(self,"extent:",{extentAsPoint:extentAsPoint},smalltalk.RTAbstractElementShape)});},
args: ["extentAsPoint"],
source: "extent: extentAsPoint\x0a\x09self widthElement: extentAsPoint x.\x0a\x09self heightElement: extentAsPoint y.",
messageSends: ["widthElement:", "x", "heightElement:", "y"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@height"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "height\x0a\x09^ height",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
category: 'accessing',
fn: function (aValueOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._heightElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"height:",{aValueOrAOneArgBlock:aValueOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrAOneArgBlock"],
source: "height: aValueOrAOneArgBlock\x0a\x09\x22aValueOrAOneArgBlock is applied on the object model\x22\x0a\x09self heightElement: [ :anElement | aValueOrAOneArgBlock rtValue: anElement model ]",
messageSends: ["heightElement:", "rtValue:", "model"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightElement:",
category: 'accessing',
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@height"]=aValueOrASymbolOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"heightElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrASymbolOrAOneArgBlock"],
source: "heightElement: aValueOrASymbolOrAOneArgBlock\x0a\x09height := aValueOrASymbolOrAOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
category: 'rendering',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@height"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
args: ["anElement"],
source: "heightFor: anElement\x0a\x09^ height rtValue: anElement",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractElementShape.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@width"]=self._defaultWidth();
self["@height"]=self._defaultHeight();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09width := self defaultWidth.\x0a\x09height := self defaultHeight.",
messageSends: ["initialize", "defaultWidth", "defaultHeight"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "size:",
category: 'accessing',
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._height_(aValueOrASymbolOrAOneArgBlock);
self._width_(aValueOrASymbolOrAOneArgBlock);
return self}, function($ctx1) {$ctx1.fill(self,"size:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrASymbolOrAOneArgBlock"],
source: "size: aValueOrASymbolOrAOneArgBlock\x0a\x09self height: aValueOrASymbolOrAOneArgBlock.\x0a\x09self width: aValueOrASymbolOrAOneArgBlock",
messageSends: ["height:", "width:"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "sizeElement:",
category: 'accessing',
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._heightElement_(aValueOrASymbolOrAOneArgBlock);
self._widthElement_(aValueOrASymbolOrAOneArgBlock);
return self}, function($ctx1) {$ctx1.fill(self,"sizeElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrASymbolOrAOneArgBlock"],
source: "sizeElement: aValueOrASymbolOrAOneArgBlock\x0a\x09\x22Argument evaluated against the element\x22\x0a\x09self heightElement: aValueOrASymbolOrAOneArgBlock.\x0a\x09self widthElement: aValueOrASymbolOrAOneArgBlock",
messageSends: ["heightElement:", "widthElement:"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@width"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTAbstractElementShape)});},
args: [],
source: "width\x0a\x09^ width",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
category: 'accessing',
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._widthElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
return _st(aValueOrASymbolOrAOneArgBlock)._rtValue_(_st(anElement)._model());
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"width:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrASymbolOrAOneArgBlock"],
source: "width: aValueOrASymbolOrAOneArgBlock\x0a\x09\x22aValueOrASymbolOrAOneArgBlock is applied on the object model\x22\x0a\x09self widthElement: [ :anElement | aValueOrASymbolOrAOneArgBlock rtValue: anElement model ]",
messageSends: ["widthElement:", "rtValue:", "model"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthElement:",
category: 'accessing',
fn: function (aValueOrASymbolOrAOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@width"]=aValueOrASymbolOrAOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"widthElement:",{aValueOrASymbolOrAOneArgBlock:aValueOrASymbolOrAOneArgBlock},smalltalk.RTAbstractElementShape)});},
args: ["aValueOrASymbolOrAOneArgBlock"],
source: "widthElement: aValueOrASymbolOrAOneArgBlock\x0a\x09width := aValueOrASymbolOrAOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
category: 'rendering',
fn: function (anElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@width"])._rtValue_(anElement);
return $1;
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{anElement:anElement},smalltalk.RTAbstractElementShape)});},
args: ["anElement"],
source: "widthFor: anElement\x0a\x09^ width rtValue: anElement",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTAbstractElementShape);



smalltalk.addClass('RTBox', smalltalk.RTAbstractElementShape, [], 'Roassal2-Core');
smalltalk.RTBox.comment="A RTBox is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
category: 'hooks',
fn: function () {
var self=this;
function $TRBoxShape(){return smalltalk.TRBoxShape||(typeof TRBoxShape=="undefined"?nil:TRBoxShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TRBoxShape();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTBox)});},
args: [],
source: "trachelShapeClass\x0a\x09^ TRBoxShape",
messageSends: [],
referencedClasses: ["TRBoxShape"]
}),
smalltalk.RTBox);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
category: 'rendering',
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
args: ["anElement", "trachelShape"],
source: "updateFor: anElement trachelShape: trachelShape\x0a\x09| ex |\x0a\x09trachelShape isNil ifTrue: [ ^ self ].\x0a\x09ex := (self widthFor: anElement) @ (self heightFor: anElement).\x0a\x09trachelShape extent: ex.\x0a\x09trachelShape color: (self colorFor: anElement).\x0a\x09trachelShape strokePaint: (self borderColorFor: anElement).",
messageSends: ["ifTrue:", "isNil", "@", "heightFor:", "widthFor:", "extent:", "color:", "colorFor:", "strokePaint:", "borderColorFor:"],
referencedClasses: []
}),
smalltalk.RTBox);



smalltalk.addClass('RTEllipse', smalltalk.RTAbstractElementShape, [], 'Roassal2-Core');
smalltalk.RTEllipse.comment="A RTEllipse is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTEllipse.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@color"]=self._defaultColor();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTEllipse)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09color := self defaultColor",
messageSends: ["initialize", "defaultColor"],
referencedClasses: []
}),
smalltalk.RTEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeClass",
category: 'hooks',
fn: function () {
var self=this;
function $TREllipseShape(){return smalltalk.TREllipseShape||(typeof TREllipseShape=="undefined"?nil:TREllipseShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=$TREllipseShape();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeClass",{},smalltalk.RTEllipse)});},
args: [],
source: "trachelShapeClass\x0a\x09^ TREllipseShape",
messageSends: [],
referencedClasses: ["TREllipseShape"]
}),
smalltalk.RTEllipse);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
category: 'rendering',
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
args: ["anElement", "trachelShape"],
source: "updateFor: anElement trachelShape: trachelShape\x0a\x09| ex rec |\x0a\x09trachelShape isNil ifTrue: [ ^ self ].\x0a\x09ex := (self widthFor: anElement) @ (self heightFor: anElement).\x0a\x09rec := (anElement position - (ex / 2)) extent: ex.\x0a\x09\x0a\x09trachelShape from: rec origin to: rec corner color: (self colorFor: anElement).\x0a\x09trachelShape strokePaint: (self borderColorFor: anElement).\x0a\x09^ trachelShape",
messageSends: ["ifTrue:", "isNil", "@", "heightFor:", "widthFor:", "extent:", "-", "/", "position", "from:to:color:", "origin", "corner", "colorFor:", "strokePaint:", "borderColorFor:"],
referencedClasses: []
}),
smalltalk.RTEllipse);



smalltalk.addClass('RTAbstractLine', smalltalk.RTShape, ['width', 'attachPoint'], 'Roassal2-Core');
smalltalk.RTAbstractLine.comment="A RTAbstractLine is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09attachPoint:\x09\x09<Object>\x0a\x09width:\x09\x09<Object>\x0a\x0aattachPoint\x0a\x09- xxxxx\x0a\x0awidth\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "attachPoint:",
category: 'attach point',
fn: function (aRTAttachPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@attachPoint"]=aRTAttachPoint;
return self}, function($ctx1) {$ctx1.fill(self,"attachPoint:",{aRTAttachPoint:aRTAttachPoint},smalltalk.RTAbstractLine)});},
args: ["aRTAttachPoint"],
source: "attachPoint: aRTAttachPoint\x0a\x09attachPoint := aRTAttachPoint.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'public',
fn: function (el1, el2) {
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($RTEdge())._from_to_(el1,el2))._addShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.RTAbstractLine)});},
args: ["el1", "el2"],
source: "edgeFrom: el1 to: el2\x0a\x09^ (RTEdge from: el1 to: el2) addShape: self",
messageSends: ["addShape:", "from:to:"],
referencedClasses: ["RTEdge"]
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "endingPointOf:",
category: 'attach point',
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._endingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"endingPointOf:",{anEdge:anEdge},smalltalk.RTAbstractLine)});},
args: ["anEdge"],
source: "endingPointOf: anEdge\x0a\x09^ attachPoint endingPointOf: anEdge",
messageSends: ["endingPointOf:"],
referencedClasses: []
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
var self=this;
function $RTCenteredAttachPoint(){return smalltalk.RTCenteredAttachPoint||(typeof RTCenteredAttachPoint=="undefined"?nil:RTCenteredAttachPoint)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractLine.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@attachPoint"]=_st($RTCenteredAttachPoint())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractLine)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09attachPoint := RTCenteredAttachPoint new.",
messageSends: ["initialize", "new"],
referencedClasses: ["RTCenteredAttachPoint"]
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "startingPointOf:",
category: 'attach point',
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@attachPoint"])._startingPointOf_(anEdge);
return $1;
}, function($ctx1) {$ctx1.fill(self,"startingPointOf:",{anEdge:anEdge},smalltalk.RTAbstractLine)});},
args: ["anEdge"],
source: "startingPointOf: anEdge\x0a\x09^ attachPoint startingPointOf: anEdge",
messageSends: ["startingPointOf:"],
referencedClasses: []
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
category: 'rendering',
fn: function (edge, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(trachelShape)._from_(_st(self["@attachPoint"])._startingPointOf_(edge));
_st(trachelShape)._to_(_st(self["@attachPoint"])._endingPointOf_(edge));
_st(trachelShape)._resetPath();
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{edge:edge,trachelShape:trachelShape},smalltalk.RTAbstractLine)});},
args: ["edge", "trachelShape"],
source: "updateFor: edge trachelShape: trachelShape\x0a\x09trachelShape from: (attachPoint startingPointOf: edge).\x0a\x09trachelShape to: (attachPoint endingPointOf: edge).\x0a\x09trachelShape resetPath",
messageSends: ["from:", "startingPointOf:", "to:", "endingPointOf:", "resetPath"],
referencedClasses: []
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withHorizontalAttachPoint",
category: 'attach point',
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
args: [],
source: "withHorizontalAttachPoint\x0a\x09| ap |\x0a\x09ap := RTHorizontalAttachPoint new.\x0a\x09self attachPoint: ap.\x0a\x09^ ap",
messageSends: ["new", "attachPoint:"],
referencedClasses: ["RTHorizontalAttachPoint"]
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withShorterDistanceAttachPoint",
category: 'attach point',
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
args: [],
source: "withShorterDistanceAttachPoint\x0a\x09| ap |\x0a\x09ap := RTShorterDistanceAttachPoint new.\x0a\x09self attachPoint: ap.\x0a\x09^ ap.",
messageSends: ["new", "attachPoint:"],
referencedClasses: ["RTShorterDistanceAttachPoint"]
}),
smalltalk.RTAbstractLine);

smalltalk.addMethod(
smalltalk.method({
selector: "withVerticallAttachPoint",
category: 'attach point',
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
args: [],
source: "withVerticallAttachPoint\x0a\x09| ap |\x0a\x09ap := RTVerticalAttachPoint new.\x0a\x09self attachPoint: ap.\x0a\x09^ ap",
messageSends: ["new", "attachPoint:"],
referencedClasses: ["RTVerticalAttachPoint"]
}),
smalltalk.RTAbstractLine);


smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'as yet unclassified',
fn: function (el1, el2) {
var self=this;
function $RTEdge(){return smalltalk.RTEdge||(typeof RTEdge=="undefined"?nil:RTEdge)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($RTEdge())._from_to_(el1,el2))._addShape_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{el1:el1,el2:el2},smalltalk.RTAbstractLine.klass)});},
args: ["el1", "el2"],
source: "edgeFrom: el1 to: el2\x0a\x09^ (RTEdge from: el1 to: el2) addShape: self",
messageSends: ["addShape:", "from:to:"],
referencedClasses: ["RTEdge"]
}),
smalltalk.RTAbstractLine.klass);


smalltalk.addClass('RTLine', smalltalk.RTAbstractLine, [], 'Roassal2-Core');
smalltalk.RTLine.comment="A RTLine is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "trachelShape",
category: 'accessing',
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
args: [],
source: "trachelShape\x0a\x09|  shape aPoint anotherPoint aColor |\x0a\x09shape := TRLineShape new.\x0a\x09shape from: aPoint to: anotherPoint color: aColor.\x0a\x09^ shape",
messageSends: ["new", "from:to:color:"],
referencedClasses: ["TRLineShape"]
}),
smalltalk.RTLine);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
category: 'hooks',
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
args: ["anEdge"],
source: "trachelShapeFor: anEdge\x0a\x09| shape |\x0a\x09shape := TRLineShape new.\x0a\x09shape from: anEdge from position to: anEdge to position color: (self colorFor: anEdge).\x0a\x09^ shape",
messageSends: ["new", "from:to:color:", "position", "from", "to", "colorFor:"],
referencedClasses: ["TRLineShape"]
}),
smalltalk.RTLine);



smalltalk.addClass('RTNoShape', smalltalk.RTShape, [], 'Roassal2-Core');
smalltalk.RTNoShape.comment="This implements the Null pattern for a Roassal shape. It is typically used for defaults.";
smalltalk.addMethod(
smalltalk.method({
selector: "heightFor:",
category: 'rendering',
fn: function (element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"heightFor:",{element:element},smalltalk.RTNoShape)});},
args: ["element"],
source: "heightFor: element\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "trachelShapeFor:",
category: 'hooks',
fn: function (element) {
var self=this;
function $TRNoShape(){return smalltalk.TRNoShape||(typeof TRNoShape=="undefined"?nil:TRNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($TRNoShape())._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"trachelShapeFor:",{element:element},smalltalk.RTNoShape)});},
args: ["element"],
source: "trachelShapeFor: element\x0a\x09\x22We return a Trachel null shape because shapedObjects play directly with the low level shape\x22\x0a\x0a\x09^ TRNoShape new",
messageSends: ["new"],
referencedClasses: ["TRNoShape"]
}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "updateFor:trachelShape:",
category: 'rendering',
fn: function (anElement, trachelShape) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"updateFor:trachelShape:",{anElement:anElement,trachelShape:trachelShape},smalltalk.RTNoShape)});},
args: ["anElement", "trachelShape"],
source: "updateFor: anElement trachelShape: trachelShape\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNoShape);

smalltalk.addMethod(
smalltalk.method({
selector: "widthFor:",
category: 'rendering',
fn: function (element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (0);
}, function($ctx1) {$ctx1.fill(self,"widthFor:",{element:element},smalltalk.RTNoShape)});},
args: ["element"],
source: "widthFor: element\x0a\x09^ 0",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNoShape);


smalltalk.RTNoShape.klass.iVarNames = ['instance'];
smalltalk.addMethod(
smalltalk.method({
selector: "new",
category: 'as yet unclassified',
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
args: [],
source: "new\x0a\x09instance ifNil: [ instance := super new ].\x0a\x09^ instance",
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.RTNoShape.klass);


