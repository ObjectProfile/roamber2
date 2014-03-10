smalltalk.addPackage('Roassal2-Builder-Common');
smalltalk.addClass('RTBuilder', smalltalk.RTObject, ['view', 'interactionBuilder', 'shapeBuilder'], 'Roassal2-Builder-Common');
smalltalk.RTBuilder.comment="A RTBuilder is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09interactionBuilder:\x09\x09<Object>\x0a\x09shapeBuilder:\x09\x09<Object>\x0a\x09view:\x09\x09<Object>\x0a\x0ainteractionBuilder\x0a\x09- xxxxx\x0a\x0ashapeBuilder\x0a\x09- xxxxx\x0a\x0aview\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "addElementOn:",
category: 'public',
fn: function (anObject){
var self=this;
var element;
return smalltalk.withContext(function($ctx1) { 
var $1;
element=self._elementOn_(anObject);
_st(self["@interactionBuilder"])._setUpElements_(element);
_st(self["@view"])._add_(element);
$1=element;
return $1;
}, function($ctx1) {$ctx1.fill(self,"addElementOn:",{anObject:anObject,element:element},smalltalk.RTBuilder)})},
args: ["anObject"],
source: "addElementOn: anObject\x0a\x09| element |\x0a\x09element := self elementOn: anObject.\x0a\x09interactionBuilder setUpElements: element.\x0a\x09view add: element.\x0a\x09^ element",
messageSends: ["elementOn:", "setUpElements:", "add:"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'public',
fn: function (source,target){
var self=this;
var newEdge;
return smalltalk.withContext(function($ctx1) { 
var $1;
newEdge=_st(self["@shapeBuilder"])._edgeFrom_to_(source,target);
_st(self["@view"])._add_(newEdge);
$1=newEdge;
return $1;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{source:source,target:target,newEdge:newEdge},smalltalk.RTBuilder)})},
args: ["source", "target"],
source: "edgeFrom: source to: target \x0a\x09| newEdge |\x0a\x09newEdge := shapeBuilder edgeFrom: source to: target.\x0a\x09view add: newEdge.\x0a\x09^ newEdge",
messageSends: ["edgeFrom:to:", "add:"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'protected',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapeBuilder"])._elementOn_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.RTBuilder)})},
args: ["anObject"],
source: "elementOn: anObject\x0a\x09^ shapeBuilder elementOn: anObject",
messageSends: ["elementOn:"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'protected',
fn: function (collectionOfObjects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapeBuilder"])._elementsOn_(collectionOfObjects);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{collectionOfObjects:collectionOfObjects},smalltalk.RTBuilder)})},
args: ["collectionOfObjects"],
source: "elementsOn: collectionOfObjects\x0a\x09^ shapeBuilder elementsOn: collectionOfObjects",
messageSends: ["elementsOn:"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $RTInteractionBuilder(){return smalltalk.RTInteractionBuilder||(typeof RTInteractionBuilder=="undefined"?nil:RTInteractionBuilder)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@view"]=_st($RTView())._new();
self["@shapeBuilder"]=_st($RTShapeBuilder())._new();
self["@interactionBuilder"]=_st($RTInteractionBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09view := RTView new.\x0a\x09shapeBuilder := RTShapeBuilder new.\x0a\x09interactionBuilder := RTInteractionBuilder new.",
messageSends: ["initialize", "new"],
referencedClasses: ["RTView", "RTShapeBuilder", "RTInteractionBuilder"]
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactionBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.RTBuilder)})},
args: [],
source: "interaction\x0a\x09^ interactionBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interactionBuilder:",
category: 'accessing',
fn: function (anRTInteractionBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interactionBuilder"]=anRTInteractionBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"interactionBuilder:",{anRTInteractionBuilder:anRTInteractionBuilder},smalltalk.RTBuilder)})},
args: ["anRTInteractionBuilder"],
source: "interactionBuilder: anRTInteractionBuilder\x0a\x09interactionBuilder := anRTInteractionBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
category: 'public-ui',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openIn_(self["@view"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.RTBuilder)})},
args: [],
source: "open\x0a\x09^ self openIn: view",
messageSends: ["openIn:"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openIn:",
category: 'public-ui',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._renderIn_(aView);
$1=_st(aView)._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"openIn:",{aView:aView},smalltalk.RTBuilder)})},
args: ["aView"],
source: "openIn: aView\x0a\x09self renderIn: aView.\x0a\x09^ aView open",
messageSends: ["renderIn:", "open"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@shapeBuilder"]=_st(self["@shapeBuilder"])._copy();
self["@interactionBuilder"]=_st(self["@interactionBuilder"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTBuilder)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09shapeBuilder := shapeBuilder copy.\x0a\x09interactionBuilder := interactionBuilder copy.",
messageSends: ["postCopy", "copy"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
category: 'public-ui',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderIn_(self._view());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.RTBuilder)})},
args: [],
source: "render\x0a\x09self renderIn: self view",
messageSends: ["renderIn:", "view"],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIn:",
category: 'hooks',
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderIn:",{aView:aView},smalltalk.RTBuilder)})},
args: ["aView"],
source: "renderIn: aView\x0a\x09\x22You may want to override this method to fill the view\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shapeBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTBuilder)})},
args: [],
source: "shape\x0a\x09^ shapeBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeBuilder:",
category: 'accessing',
fn: function (anRTShapeBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shapeBuilder"]=anRTShapeBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"shapeBuilder:",{anRTShapeBuilder:anRTShapeBuilder},smalltalk.RTBuilder)})},
args: ["anRTShapeBuilder"],
source: "shapeBuilder: anRTShapeBuilder\x0a\x0a\x09shapeBuilder := anRTShapeBuilder",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RTBuilder)})},
args: [],
source: "view\x0a\x09^ view",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
category: 'accessing',
fn: function (aRTView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aRTView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aRTView:aRTView},smalltalk.RTBuilder)})},
args: ["aRTView"],
source: "view: aRTView\x0a\x09view := aRTView",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTBuilder);



smalltalk.addClass('RTInteractionBuilder', smalltalk.RTObject, ['interactions'], 'Roassal2-Builder-Common');
smalltalk.RTInteractionBuilder.comment="A RTInteractionBuilder is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09interactions:\x09\x09<Object>\x0a\x0ainteractions\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "draggable",
category: 'public',
fn: function (){
var self=this;
var i;
function $RTDraggable(){return smalltalk.RTDraggable||(typeof RTDraggable=="undefined"?nil:RTDraggable)}
return smalltalk.withContext(function($ctx1) { 
var $1;
i=_st($RTDraggable())._new();
_st(self["@interactions"])._add_(i);
$1=i;
return $1;
}, function($ctx1) {$ctx1.fill(self,"draggable",{i:i},smalltalk.RTInteractionBuilder)})},
args: [],
source: "draggable\x0a\x09| i |\x0a\x09i := RTDraggable new.\x0a\x09interactions add: i. \x0a\x09^ i",
messageSends: ["new", "add:"],
referencedClasses: ["RTDraggable"]
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlight",
category: 'public',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._highlightColored_(_st($Color())._blue());
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{},smalltalk.RTInteractionBuilder)})},
args: [],
source: "highlight\x0a\x09self highlightColored: Color blue",
messageSends: ["highlightColored:", "blue"],
referencedClasses: ["Color"]
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColored:",
category: 'public',
fn: function (aColorOrAOneArgBlockOrSymbol){
var self=this;
function $TRMouseEnter(){return smalltalk.TRMouseEnter||(typeof TRMouseEnter=="undefined"?nil:TRMouseEnter)}
function $RTBlink(){return smalltalk.RTBlink||(typeof RTBlink=="undefined"?nil:RTBlink)}
function $TRMouseLeave(){return smalltalk.TRMouseLeave||(typeof TRMouseLeave=="undefined"?nil:TRMouseLeave)}
return smalltalk.withContext(function($ctx1) { 
self._when_do_($TRMouseEnter(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($RTBlink())._highlight_color_(_st(event)._element(),_st(aColorOrAOneArgBlockOrSymbol)._rtValue_(_st(_st(event)._element())._model()));
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
self._when_do_($TRMouseLeave(),(function(event){
return smalltalk.withContext(function($ctx2) {
return _st($RTBlink())._unhighlight_(_st(event)._element());
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"highlightColored:",{aColorOrAOneArgBlockOrSymbol:aColorOrAOneArgBlockOrSymbol},smalltalk.RTInteractionBuilder)})},
args: ["aColorOrAOneArgBlockOrSymbol"],
source: "highlightColored: aColorOrAOneArgBlockOrSymbol\x0a\x09\x0a\x09self when: TRMouseEnter do: [ :event | \x0a\x09\x09RTBlink \x0a\x09\x09\x09highlight: event element\x0a\x09\x09\x09color: (aColorOrAOneArgBlockOrSymbol rtValue: event element model) ].\x0a\x0a\x09self when: TRMouseLeave do: [ :event | \x0a\x09\x09RTBlink\x0a\x09\x09\x09unhighlight: event element ].",
messageSends: ["when:do:", "highlight:color:", "element", "rtValue:", "model", "unhighlight:"],
referencedClasses: ["TRMouseEnter", "RTBlink", "TRMouseLeave"]
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTInteractionBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self._initializeInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTInteractionBuilder)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self initializeInteractions.",
messageSends: ["initialize", "initializeInteractions"],
referencedClasses: []
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInteractions",
category: 'initialization',
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@interactions"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initializeInteractions",{},smalltalk.RTInteractionBuilder)})},
args: [],
source: "initializeInteractions\x0a\x09interactions := OrderedCollection new",
messageSends: ["new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "noInteractions",
category: 'public',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"noInteractions",{},smalltalk.RTInteractionBuilder)})},
args: [],
source: "noInteractions\x0a\x09self initializeInteractions.",
messageSends: ["initializeInteractions"],
referencedClasses: []
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
category: 'public',
fn: function (){
var self=this;
var i;
function $RTPopup(){return smalltalk.RTPopup||(typeof RTPopup=="undefined"?nil:RTPopup)}
return smalltalk.withContext(function($ctx1) { 
var $1;
i=_st($RTPopup())._new();
_st(self["@interactions"])._add_(i);
$1=i;
return $1;
}, function($ctx1) {$ctx1.fill(self,"popup",{i:i},smalltalk.RTInteractionBuilder)})},
args: [],
source: "popup\x0a\x09| i |\x0a\x09i := RTPopup new.\x0a\x09interactions add: i. \x0a\x09^ i",
messageSends: ["new", "add:"],
referencedClasses: ["RTPopup"]
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTInteractionBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@interactions"]=_st(self["@interactions"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTInteractionBuilder)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09interactions := interactions copy.",
messageSends: ["postCopy", "copy"],
referencedClasses: []
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpElements:",
category: 'building',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._do_((function(int){
return smalltalk.withContext(function($ctx2) {
return _st(elements).__at(int);
}, function($ctx2) {$ctx2.fillBlock({int:int},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUpElements:",{elements:elements},smalltalk.RTInteractionBuilder)})},
args: ["elements"],
source: "setUpElements: elements\x0a\x09\x22elements is an RTGroup, that contains RTElement or RTEdges\x22\x0a\x09\x0a\x09interactions do: [ :int | elements @ int ]",
messageSends: ["do:", "@"],
referencedClasses: []
}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'events-registering',
fn: function (event,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._when_do_(event,block);
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,block:block},smalltalk.RTInteractionBuilder)})},
args: ["event", "block"],
source: "when: event do: block\x0a\x09interactions add: [ :element | element when: event do: block ]",
messageSends: ["add:", "when:do:"],
referencedClasses: []
}),
smalltalk.RTInteractionBuilder);



smalltalk.addClass('RTShapeBuilder', smalltalk.RTObject, ['shape'], 'Roassal2-Builder-Common');
smalltalk.RTShapeBuilder.comment="A RTShapeBuilder is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09shape:\x09\x09<Object>\x0a\x0ashape\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "arc",
category: 'shapes',
fn: function (){
var self=this;
function $RTArc(){return smalltalk.RTArc||(typeof RTArc=="undefined"?nil:RTArc)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTArc())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"arc",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "arc\x0a\x09^ self shape: RTArc new",
messageSends: ["shape:", "new"],
referencedClasses: ["RTArc"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
category: 'shapes',
fn: function (){
var self=this;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTEllipse())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"circle",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "circle\x0a\x09^ self shape: RTEllipse new",
messageSends: ["shape:", "new"],
referencedClasses: ["RTEllipse"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "current\x0a\x09\x22Return the shape currently built\x22\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
category: 'reflective operations',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shape())._perform_withArguments_(_st(aMessage)._selector(),_st(aMessage)._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.RTShapeBuilder)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09\x22we simply forward the messages we do not understand\x0a\x09to the actual shape implementation\x22\x0a\x09^ self shape \x0a\x09\x09perform: aMessage selector \x0a\x09\x09withArguments: aMessage arguments",
messageSends: ["perform:withArguments:", "selector", "arguments", "shape"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
category: 'building',
fn: function (element1,element2){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasSetShape();
if(! smalltalk.assert($1)){
self._line();
};
$2=_st(self["@shape"])._edgeFrom_to_(element1,element2);
return $2;
}, function($ctx1) {$ctx1.fill(self,"edgeFrom:to:",{element1:element1,element2:element2},smalltalk.RTShapeBuilder)})},
args: ["element1", "element2"],
source: "edgeFrom: element1 to: element2\x0a\x09self hasSetShape ifFalse: [ self line ].\x0a\x09^ shape edgeFrom: element1 to: element2",
messageSends: ["ifFalse:", "line", "hasSetShape", "edgeFrom:to:"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
category: 'building',
fn: function (object){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasSetShape();
if(! smalltalk.assert($1)){
self._rectangle();
};
$2=_st(self["@shape"])._elementOn_(object);
return $2;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{object:object},smalltalk.RTShapeBuilder)})},
args: ["object"],
source: "elementOn: object\x0a\x09self hasSetShape ifFalse: [ self rectangle ].\x0a\x09^ shape elementOn: object",
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "elementOn:"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
category: 'building',
fn: function (objects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasSetShape();
if(! smalltalk.assert($1)){
self._rectangle();
};
$2=_st(self["@shape"])._elementsOn_(objects);
return $2;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{objects:objects},smalltalk.RTShapeBuilder)})},
args: ["objects"],
source: "elementsOn: objects\x0a\x09self hasSetShape ifFalse: [ self rectangle ].\x0a\x09^ shape elementsOn: objects",
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "elementsOn:"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ellipse",
category: 'shapes',
fn: function (){
var self=this;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTEllipse())._new();
return self}, function($ctx1) {$ctx1.fill(self,"ellipse",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "ellipse\x0a\x09shape := RTEllipse new",
messageSends: ["new"],
referencedClasses: ["RTEllipse"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSetShape",
category: 'testing',
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape"])._class()).__tild_tild($RTNoShape());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSetShape",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "hasSetShape\x0a\x09^ shape class ~~ RTNoShape",
messageSends: ["~~", "class"],
referencedClasses: ["RTNoShape"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "if:borderColor:",
category: 'shapes',
fn: function (conditionBlock,colorBlock){
var self=this;
var oldBlockOrValue;
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
oldBlockOrValue=self._borderColor();
$1=self._borderColor_((function(aModel){
return smalltalk.withContext(function($ctx2) {
$2=_st(conditionBlock)._rtValue_(aModel);
if(smalltalk.assert($2)){
return _st(colorBlock)._rtValue_(aModel);
} else {
return _st(oldBlockOrValue)._rtValue_(_st($RTElement())._on_(aModel));
};
}, function($ctx2) {$ctx2.fillBlock({aModel:aModel},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"if:borderColor:",{conditionBlock:conditionBlock,colorBlock:colorBlock,oldBlockOrValue:oldBlockOrValue},smalltalk.RTShapeBuilder)})},
args: ["conditionBlock", "colorBlock"],
source: "if: conditionBlock borderColor: colorBlock\x0a\x09\x22If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node.\x22\x0a\x09| oldBlockOrValue |\x0a\x09oldBlockOrValue := self borderColor.\x0a\x09^self borderColor: [ :aModel | (conditionBlock rtValue: aModel)\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ colorBlock rtValue: aModel ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x22Having to create a new element is rather ugly. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09oldBlockOrValue rtValue: (RTElement on: aModel) ]].",
messageSends: ["borderColor", "borderColor:", "ifTrue:ifFalse:", "rtValue:", "on:"],
referencedClasses: ["RTElement"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "if:fillColor:",
category: 'shapes',
fn: function (conditionBlock,colorBlock){
var self=this;
var oldBlockOrValue;
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
oldBlockOrValue=self._fillColor();
$1=self._fillColor_((function(aModel){
return smalltalk.withContext(function($ctx2) {
$2=_st(conditionBlock)._rtValue_(aModel);
if(smalltalk.assert($2)){
return _st(colorBlock)._rtValue_(aModel);
} else {
return _st(oldBlockOrValue)._rtValue_(_st($RTElement())._on_(aModel));
};
}, function($ctx2) {$ctx2.fillBlock({aModel:aModel},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"if:fillColor:",{conditionBlock:conditionBlock,colorBlock:colorBlock,oldBlockOrValue:oldBlockOrValue},smalltalk.RTShapeBuilder)})},
args: ["conditionBlock", "colorBlock"],
source: "if: conditionBlock fillColor: colorBlock\x0a\x09\x22If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node.\x22\x0a\x09| oldBlockOrValue |\x0a\x09oldBlockOrValue := self fillColor.\x0a\x09^self fillColor: [ :aModel | (conditionBlock rtValue: aModel)\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ colorBlock rtValue: aModel ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x22Having to create a new element is rather ugly. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09oldBlockOrValue rtValue: (RTElement on: aModel) ]].",
messageSends: ["fillColor", "fillColor:", "ifTrue:ifFalse:", "rtValue:", "on:"],
referencedClasses: ["RTElement"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ifElement:borderColor:",
category: 'shapes',
fn: function (conditionBlock,colorBlock){
var self=this;
var oldBlockOrValue;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
oldBlockOrValue=self._borderColor();
$1=self._borderColorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
$2=_st(conditionBlock)._rtValue_(anElement);
if(smalltalk.assert($2)){
return _st(colorBlock)._rtValue_(anElement);
} else {
return _st(oldBlockOrValue)._rtValue_(anElement);
};
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifElement:borderColor:",{conditionBlock:conditionBlock,colorBlock:colorBlock,oldBlockOrValue:oldBlockOrValue},smalltalk.RTShapeBuilder)})},
args: ["conditionBlock", "colorBlock"],
source: "ifElement: conditionBlock borderColor: colorBlock\x0a\x09\x22If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node.\x22\x0a\x09| oldBlockOrValue |\x0a\x09oldBlockOrValue := self borderColor.\x0a\x09^self borderColorElement: [ :anElement | (conditionBlock rtValue: anElement)\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ colorBlock rtValue: anElement ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x22Having to create a new element is rather ugly. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09oldBlockOrValue rtValue: anElement ]].",
messageSends: ["borderColor", "borderColorElement:", "ifTrue:ifFalse:", "rtValue:"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ifElement:fillColor:",
category: 'shapes',
fn: function (conditionBlock,colorBlock){
var self=this;
var oldBlockOrValue;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
oldBlockOrValue=self._fillColor();
$1=self._fillColorElement_((function(anElement){
return smalltalk.withContext(function($ctx2) {
$2=_st(conditionBlock)._rtValue_(anElement);
if(smalltalk.assert($2)){
return _st(colorBlock)._rtValue_(anElement);
} else {
return _st(oldBlockOrValue)._rtValue_(anElement);
};
}, function($ctx2) {$ctx2.fillBlock({anElement:anElement},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifElement:fillColor:",{conditionBlock:conditionBlock,colorBlock:colorBlock,oldBlockOrValue:oldBlockOrValue},smalltalk.RTShapeBuilder)})},
args: ["conditionBlock", "colorBlock"],
source: "ifElement: conditionBlock fillColor: colorBlock\x0a\x09\x22If conditionBlock is evaluated at true, then colorBlock is used to set the color of the node. Both conditionBlock and colorBlock are evaluated with the model value of the node.\x22\x0a\x09| oldBlockOrValue |\x0a\x09oldBlockOrValue := self fillColor.\x0a\x09^self fillColorElement: [ :anElement | (conditionBlock rtValue: anElement)\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifTrue: [ colorBlock rtValue: anElement ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x22Having to create a new element is rather ugly. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09Ideally, the oldBlockOrValue has to be 'unwrapped' for the translation\x22\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09oldBlockOrValue rtValue: anElement ]].",
messageSends: ["fillColor", "fillColorElement:", "ifTrue:ifFalse:", "rtValue:"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._reset();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "initialize\x0a\x09self reset",
messageSends: ["reset"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
category: 'shapes',
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTLabel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "label\x0a\x09shape := RTLabel new",
messageSends: ["new"],
referencedClasses: ["RTLabel"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
category: 'shapes',
fn: function (){
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTLine())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "line\x0a\x09^ self shape: RTLine new",
messageSends: ["shape:", "new"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
category: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShapeBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@shape"]=_st(self["@shape"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "postCopy\x0a\x09super postCopy.\x0a\x09shape := shape copy.",
messageSends: ["postCopy", "copy"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
category: 'shapes',
fn: function (){
var self=this;
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTBox())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "rectangle\x0a\x09^ self shape: RTBox new",
messageSends: ["shape:", "new"],
referencedClasses: ["RTBox"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
category: 'accessing',
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "reset\x0a\x09shape := RTNoShape instance",
messageSends: ["instance"],
referencedClasses: ["RTNoShape"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpElements:",
category: 'building',
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._hasSetShape();
if(! smalltalk.assert($1)){
self._rectangle();
};
$2=_st(elements).__plus(self["@shape"]);
return $2;
}, function($ctx1) {$ctx1.fill(self,"setUpElements:",{elements:elements},smalltalk.RTShapeBuilder)})},
args: ["elements"],
source: "setUpElements: elements\x0a\x09self hasSetShape ifFalse: [ self rectangle ].\x0a\x09^ elements + shape",
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "+"],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "shape\x0a\x09\x22Return the shape currently built\x22\x0a\x09^ shape",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
category: 'accessing',
fn: function (aRoassalShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aRoassalShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aRoassalShape:aRoassalShape},smalltalk.RTShapeBuilder)})},
args: ["aRoassalShape"],
source: "shape: aRoassalShape\x0a\x09shape := aRoassalShape.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
category: 'shapes',
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTLabel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "text\x0a\x09shape := RTLabel new",
messageSends: ["new"],
referencedClasses: ["RTLabel"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withBorder",
category: 'shapes',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._borderColor_(_st($Color())._black());
return self}, function($ctx1) {$ctx1.fill(self,"withBorder",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "withBorder\x0a\x09self borderColor: Color black",
messageSends: ["borderColor:", "black"],
referencedClasses: ["Color"]
}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withText",
category: 'shapes',
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st(self["@shape"]).__plus(_st($RTLabel())._new());
return self}, function($ctx1) {$ctx1.fill(self,"withText",{},smalltalk.RTShapeBuilder)})},
args: [],
source: "withText\x0a\x09shape := shape + RTLabel new",
messageSends: ["+", "new"],
referencedClasses: ["RTLabel"]
}),
smalltalk.RTShapeBuilder);



smalltalk.addClass('RTShapeBuilderExample', smalltalk.RTObject, [], 'Roassal2-Builder-Common');
smalltalk.RTShapeBuilderExample.comment="A RTShapeBuilderExample is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "example01",
category: 'as yet unclassified',
fn: function (){
var self=this;
var builder,v;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $RTNColorLinearNormalizer(){return smalltalk.RTNColorLinearNormalizer||(typeof RTNColorLinearNormalizer=="undefined"?nil:RTNColorLinearNormalizer)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTCellLayout(){return smalltalk.RTCellLayout||(typeof RTCellLayout=="undefined"?nil:RTCellLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
v=_st($RTView())._new();
builder=_st($RTShapeBuilder())._new();
$1=_st(builder)._circle();
_st($1)._size_((20));
$2=_st($RTNColorLinearNormalizer())._new();
_st($2)._context_(_st($Collection())._withAllSubclasses());
_st($2)._command_("numberOfMethods");
_st($2)._lowColor_(_st($Color())._green());
$3=_st($2)._highColor_(_st($Color())._red());
_st($1)._fillColor_($3);
$4=_st($1)._withText();
_st(v)._addAll_(_st(builder)._elementsOn_(_st($Collection())._withAllSubclasses()));
$5=_st($RTCellLayout())._new();
_st($5)._gapSize_((1));
$6=_st($5)._on_(_st(v)._elements());
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example01",{builder:builder,v:v},smalltalk.RTShapeBuilderExample)})},
args: [],
source: "example01\x0a\x09\x22\x0a\x09self new example01\x0a\x09\x22\x0a\x09| builder v |\x0a\x09v := RTView new.\x0a\x09builder := RTShapeBuilder new.\x0a\x09builder circle \x0a\x09\x09\x09\x09size: 20; \x0a\x09\x09\x09\x09fillColor: (RTNColorLinearNormalizer new\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09context: (Collection withAllSubclasses);\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09command: #numberOfMethods;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09lowColor: Color green;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09highColor: Color red);\x0a\x09\x09\x09\x09withText.\x0a\x09\x09\x09\x09\x0a\x09v addAll: (builder elementsOn: Collection withAllSubclasses).\x0a\x09RTCellLayout new gapSize: 1; on: v elements.\x0a\x09v open",
messageSends: ["new", "size:", "circle", "fillColor:", "context:", "withAllSubclasses", "command:", "lowColor:", "green", "highColor:", "red", "withText", "addAll:", "elementsOn:", "gapSize:", "on:", "elements", "open"],
referencedClasses: ["RTView", "RTShapeBuilder", "Collection", "RTNColorLinearNormalizer", "Color", "RTCellLayout"]
}),
smalltalk.RTShapeBuilderExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
category: 'as yet unclassified',
fn: function (){
var self=this;
var builder,v;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTCellLayout(){return smalltalk.RTCellLayout||(typeof RTCellLayout=="undefined"?nil:RTCellLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
builder=_st($RTShapeBuilder())._new();
$1=_st(builder)._rectangle();
_st($1)._size_((50));
_st($1)._fillColor_(_st(_st($Color())._red())._alpha_((0.3)));
$2=_st($1)._withText();
_st(v)._addAll_(_st(builder)._elementsOn_((1)._to_((50))));
_st($RTCellLayout())._on_(_st(v)._elements());
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example02",{builder:builder,v:v},smalltalk.RTShapeBuilderExample)})},
args: [],
source: "example02\x0a\x09\x22\x0a\x09self new example02\x0a\x09\x22\x0a\x09| builder v |\x0a\x09v := RTView new.\x0a\x09builder := RTShapeBuilder new.\x0a\x09builder rectangle \x0a\x09\x09\x09\x09size: 50; \x0a\x09\x09\x09\x09fillColor: (Color red alpha: 0.3);\x0a\x09\x09\x09\x09withText.\x0a\x09v addAll: (builder elementsOn: (1 to: 50)).\x0a\x09RTCellLayout on: v elements.\x0a\x09v open",
messageSends: ["new", "size:", "rectangle", "fillColor:", "alpha:", "red", "withText", "addAll:", "elementsOn:", "to:", "on:", "elements", "open"],
referencedClasses: ["RTView", "RTShapeBuilder", "Color", "RTCellLayout"]
}),
smalltalk.RTShapeBuilderExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example03",
category: 'as yet unclassified',
fn: function (){
var self=this;
var builder,v,els;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTDraggable(){return smalltalk.RTDraggable||(typeof RTDraggable=="undefined"?nil:RTDraggable)}
function $RTCellLayout(){return smalltalk.RTCellLayout||(typeof RTCellLayout=="undefined"?nil:RTCellLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
builder=_st($RTShapeBuilder())._new();
$1=_st(builder)._rectangle();
_st($1)._width_((50));
_st($1)._fillColor_(_st(_st($Color())._red())._alpha_((0.3)));
$2=_st($1)._withText();
els=_st(builder)._elementsOn_((1)._to_((50)));
_st(els).__at($RTDraggable());
_st(v)._addAll_(els);
_st($RTCellLayout())._on_(_st(v)._elements());
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example03",{builder:builder,v:v,els:els},smalltalk.RTShapeBuilderExample)})},
args: [],
source: "example03\x0a\x09\x22\x0a\x09self new example03\x0a\x09\x22\x0a\x09| builder v els |\x0a\x09v := RTView new.\x0a\x09builder := RTShapeBuilder new.\x0a\x09builder rectangle \x0a\x09\x09\x09\x09width: 50;\x0a\x09\x09\x09\x09fillColor: (Color red alpha: 0.3);\x0a\x09\x09\x09\x09withText.\x0a\x09els := builder elementsOn: (1 to: 50).\x0a\x09els @ RTDraggable.\x0a\x09v addAll: els.\x0a\x09RTCellLayout on: v elements.\x0a\x09v open",
messageSends: ["new", "width:", "rectangle", "fillColor:", "alpha:", "red", "withText", "elementsOn:", "to:", "@", "addAll:", "on:", "elements", "open"],
referencedClasses: ["RTView", "RTShapeBuilder", "Color", "RTDraggable", "RTCellLayout"]
}),
smalltalk.RTShapeBuilderExample);



smalltalk.addClass('RTShapeBuilderTest', smalltalk.RTTest, ['builder'], 'Roassal2-Builder-Common');
smalltalk.RTShapeBuilderTest.comment="A RTShapeBuilderTest is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09builder:\x09\x09<Object>\x0a\x0abuilder\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
category: 'running',
fn: function (){
var self=this;
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($RTShapeBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "setUp\x0a\x0a\x09builder := RTShapeBuilder new",
messageSends: ["new"],
referencedClasses: ["RTShapeBuilder"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic",
category: 'tests',
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTNoShape()));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic",{},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testBasic\x0a\x0a\x09self assert: builder shape class == RTNoShape",
messageSends: ["assert:", "==", "class", "shape"],
referencedClasses: ["RTNoShape"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBox",
category: 'tests',
fn: function (){
var self=this;
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._rectangle();
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTBox()));
return self}, function($ctx1) {$ctx1.fill(self,"testBox",{},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testBox\x0a\x09builder rectangle.\x0a\x09self assert: builder shape class == RTBox",
messageSends: ["rectangle", "assert:", "==", "class", "shape"],
referencedClasses: ["RTBox"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBoxWithDimensions",
category: 'tests',
fn: function (){
var self=this;
var shape;
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
function $RTElement(){return smalltalk.RTElement||(typeof RTElement=="undefined"?nil:RTElement)}
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@builder"])._rectangle())._width_((function(v){
return smalltalk.withContext(function($ctx2) {
return _st(v).__plus((3));
}, function($ctx2) {$ctx2.fillBlock({v:v},$ctx1)})}));
shape=_st(self["@builder"])._shape();
self._assert_(_st(_st(shape)._class()).__eq_eq($RTBox()));
self._assert_(_st(_st(shape)._widthFor_(_st($RTElement())._on_((5)))).__eq((8)));
return self}, function($ctx1) {$ctx1.fill(self,"testBoxWithDimensions",{shape:shape},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testBoxWithDimensions\x0a\x09| shape |\x0a\x09builder rectangle width: [ :v | v + 3 ].\x0a\x09shape := builder shape.\x0a\x09self assert: shape class == RTBox.\x0a\x09self assert: (shape widthFor: (RTElement on: 5)) = 8",
messageSends: ["width:", "+", "rectangle", "shape", "assert:", "==", "class", "=", "widthFor:", "on:"],
referencedClasses: ["RTBox", "RTElement"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLine",
category: 'tests',
fn: function (){
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._line();
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTLine()));
return self}, function($ctx1) {$ctx1.fill(self,"testLine",{},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testLine\x0a\x09builder line.\x0a\x09self assert: builder shape class == RTLine",
messageSends: ["line", "assert:", "==", "class", "shape"],
referencedClasses: ["RTLine"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape",
category: 'tests',
fn: function (){
var self=this;
var e1,e2,e3;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@builder"])._rectangle();
_st($1)._if_fillColor_((function(o){
return smalltalk.withContext(function($ctx2) {
return _st(o).__eq((3));
}, function($ctx2) {$ctx2.fillBlock({o:o},$ctx1)})}),_st($Color())._blue());
$2=_st($1)._if_fillColor_((function(o){
return smalltalk.withContext(function($ctx2) {
return _st(o).__eq((4));
}, function($ctx2) {$ctx2.fillBlock({o:o},$ctx1)})}),_st($Color())._red());
e1=_st(self["@builder"])._elementOn_((3));
e2=_st(self["@builder"])._elementOn_((4));
e3=_st(self["@builder"])._elementOn_((5));
self._assert_(_st(_st(_st(e1)._shape())._colorFor_(e1)).__eq(_st($Color())._blue()));
self._assert_(_st(_st(_st(e1)._trachelShape())._color()).__eq(_st($Color())._blue()));
self._assert_(_st(_st(_st(e2)._trachelShape())._color()).__eq(_st($Color())._red()));
self._assert_(_st(_st(_st(e3)._trachelShape())._color()).__eq(_st($Color())._veryVeryLightGray()));
return self}, function($ctx1) {$ctx1.fill(self,"testShape",{e1:e1,e2:e2,e3:e3},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testShape\x0a\x09| e1 e2 e3 |\x0a\x09builder rectangle\x0a\x09\x09if: [ :o | o = 3 ] fillColor: Color blue;\x0a\x09\x09if: [ :o | o = 4 ] fillColor: Color red.\x0a\x09e1 := builder elementOn: 3.\x0a\x09e2 := builder elementOn: 4.\x0a\x09e3 := builder elementOn: 5.\x0a\x09\x0a\x09self assert: (e1 shape colorFor: e1) = Color blue.\x0a\x09self assert: e1 trachelShape color = Color blue.\x0a\x09self assert: e2 trachelShape color = Color red.\x0a\x09self assert: e3 trachelShape color = Color veryVeryLightGray.",
messageSends: ["if:fillColor:", "=", "blue", "rectangle", "red", "elementOn:", "assert:", "colorFor:", "shape", "color", "trachelShape", "veryVeryLightGray"],
referencedClasses: ["Color"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape2",
category: 'tests',
fn: function (){
var self=this;
var e1,e2,e3;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@builder"])._rectangle();
_st($1)._ifElement_fillColor_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model()).__eq((3));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}),_st($Color())._blue());
$2=_st($1)._ifElement_fillColor_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(el)._model()).__eq((4));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})}),_st($Color())._red());
e1=_st(self["@builder"])._elementOn_((3));
e2=_st(self["@builder"])._elementOn_((4));
e3=_st(self["@builder"])._elementOn_((5));
self._assert_(_st(_st(_st(e1)._shape())._colorFor_(e1)).__eq(_st($Color())._blue()));
self._assert_(_st(_st(_st(e1)._trachelShape())._color()).__eq(_st($Color())._blue()));
self._assert_(_st(_st(_st(e2)._trachelShape())._color()).__eq(_st($Color())._red()));
self._assert_(_st(_st(_st(e3)._trachelShape())._color()).__eq(_st($Color())._veryVeryLightGray()));
return self}, function($ctx1) {$ctx1.fill(self,"testShape2",{e1:e1,e2:e2,e3:e3},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testShape2\x0a\x09| e1 e2 e3 |\x0a\x09builder rectangle\x0a\x09\x09ifElement: [ :el | el model = 3 ] fillColor: Color blue;\x0a\x09\x09ifElement: [ :el | el model = 4 ] fillColor: Color red.\x0a\x09e1 := builder elementOn: 3.\x0a\x09e2 := builder elementOn: 4.\x0a\x09e3 := builder elementOn: 5.\x0a\x09\x0a\x09self assert: (e1 shape colorFor: e1) = Color blue.\x0a\x09self assert: e1 trachelShape color = Color blue.\x0a\x09self assert: e2 trachelShape color = Color red.\x0a\x09self assert: e3 trachelShape color = Color veryVeryLightGray.",
messageSends: ["ifElement:fillColor:", "=", "model", "blue", "rectangle", "red", "elementOn:", "assert:", "colorFor:", "shape", "color", "trachelShape", "veryVeryLightGray"],
referencedClasses: ["Color"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithText",
category: 'withText',
fn: function (){
var self=this;
var v,el;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTCompositeShape(){return smalltalk.RTCompositeShape||(typeof RTCompositeShape=="undefined"?nil:RTCompositeShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
self["@builder"]=_st($RTShapeBuilder())._new();
$1=_st(self["@builder"])._circle();
_st($1)._size_((50));
_st($1)._fillColor_(_st(_st($Color())._purple())._alpha_((0.3)));
$2=_st($1)._withText();
el=_st(self["@builder"])._elementOn_("hello");
_st(v)._add_(el);
self._assert_(_st(_st(_st(el)._shape())._class()).__eq_eq($RTCompositeShape()));
return self}, function($ctx1) {$ctx1.fill(self,"testWithText",{v:v,el:el},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testWithText\x0a\x0a\x09| v el |\x0a\x09v := RTView new.\x0a\x09builder := RTShapeBuilder new.\x0a\x09builder circle \x0a\x09\x09\x09\x09size: 50; \x0a\x09\x09\x09\x09fillColor: (Color purple alpha: 0.3);\x0a\x09\x09\x09\x09withText.\x0a\x09el := builder elementOn: 'hello'.\x0a\x09v add: el.\x0a\x09\x0a\x09self assert: el shape class == RTCompositeShape.",
messageSends: ["new", "size:", "circle", "fillColor:", "alpha:", "purple", "withText", "elementOn:", "add:", "assert:", "==", "class", "shape"],
referencedClasses: ["RTView", "RTShapeBuilder", "Color", "RTCompositeShape"]
}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithTextAndTranslation",
category: 'withText',
fn: function (){
var self=this;
var v,el;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTCompositeShape(){return smalltalk.RTCompositeShape||(typeof RTCompositeShape=="undefined"?nil:RTCompositeShape)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
self["@builder"]=_st($RTShapeBuilder())._new();
$1=_st(self["@builder"])._circle();
_st($1)._size_((50));
_st($1)._fillColor_(_st(_st($Color())._purple())._alpha_((0.3)));
$2=_st($1)._withText();
el=_st(self["@builder"])._elementOn_("hello");
_st(el)._translateTo_((20).__at((20)));
_st(v)._add_(el);
self._assert_(_st(_st(_st(el)._shape())._class()).__eq_eq($RTCompositeShape()));
return self}, function($ctx1) {$ctx1.fill(self,"testWithTextAndTranslation",{v:v,el:el},smalltalk.RTShapeBuilderTest)})},
args: [],
source: "testWithTextAndTranslation\x0a\x0a\x09| v el |\x0a\x09v := RTView new.\x0a\x09builder := RTShapeBuilder new.\x0a\x09builder circle \x0a\x09\x09\x09\x09size: 50; \x0a\x09\x09\x09\x09fillColor: (Color purple alpha: 0.3);\x0a\x09\x09\x09\x09withText.\x0a\x09el := builder elementOn: 'hello'.\x0a\x09el translateTo: 20 @ 20.\x0a\x09v add: el.\x0a\x09\x0a\x09self assert: el shape class == RTCompositeShape.",
messageSends: ["new", "size:", "circle", "fillColor:", "alpha:", "purple", "withText", "elementOn:", "translateTo:", "@", "add:", "assert:", "==", "class", "shape"],
referencedClasses: ["RTView", "RTShapeBuilder", "Color", "RTCompositeShape"]
}),
smalltalk.RTShapeBuilderTest);



