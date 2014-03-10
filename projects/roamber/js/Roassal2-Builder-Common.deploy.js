smalltalk.addPackage('Roassal2-Builder-Common');
smalltalk.addClass('RTBuilder', smalltalk.RTObject, ['view', 'interactionBuilder', 'shapeBuilder'], 'Roassal2-Builder-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "addElementOn:",
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
messageSends: ["elementOn:", "setUpElements:", "add:"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
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
messageSends: ["edgeFrom:to:", "add:"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapeBuilder"])._elementOn_(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementOn:",{anObject:anObject},smalltalk.RTBuilder)})},
messageSends: ["elementOn:"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
fn: function (collectionOfObjects){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@shapeBuilder"])._elementsOn_(collectionOfObjects);
return $1;
}, function($ctx1) {$ctx1.fill(self,"elementsOn:",{collectionOfObjects:collectionOfObjects},smalltalk.RTBuilder)})},
messageSends: ["elementsOn:"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
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
messageSends: ["initialize", "new"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interaction",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@interactionBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"interaction",{},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "interactionBuilder:",
fn: function (anRTInteractionBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@interactionBuilder"]=anRTInteractionBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"interactionBuilder:",{anRTInteractionBuilder:anRTInteractionBuilder},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._openIn_(self["@view"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},smalltalk.RTBuilder)})},
messageSends: ["openIn:"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "openIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._renderIn_(aView);
$1=_st(aView)._open();
return $1;
}, function($ctx1) {$ctx1.fill(self,"openIn:",{aView:aView},smalltalk.RTBuilder)})},
messageSends: ["renderIn:", "open"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@shapeBuilder"]=_st(self["@shapeBuilder"])._copy();
self["@interactionBuilder"]=_st(self["@interactionBuilder"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTBuilder)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._renderIn_(self._view());
return self}, function($ctx1) {$ctx1.fill(self,"render",{},smalltalk.RTBuilder)})},
messageSends: ["renderIn:", "view"]}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "renderIn:",
fn: function (aView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"renderIn:",{aView:aView},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shapeBuilder"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shapeBuilder:",
fn: function (anRTShapeBuilder){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shapeBuilder"]=anRTShapeBuilder;
return self}, function($ctx1) {$ctx1.fill(self,"shapeBuilder:",{anRTShapeBuilder:anRTShapeBuilder},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@view"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"view",{},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
fn: function (aRTView){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=aRTView;
return self}, function($ctx1) {$ctx1.fill(self,"view:",{aRTView:aRTView},smalltalk.RTBuilder)})},
messageSends: []}),
smalltalk.RTBuilder);



smalltalk.addClass('RTInteractionBuilder', smalltalk.RTObject, ['interactions'], 'Roassal2-Builder-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "draggable",
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
messageSends: ["new", "add:"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlight",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._highlightColored_(_st($Color())._blue());
return self}, function($ctx1) {$ctx1.fill(self,"highlight",{},smalltalk.RTInteractionBuilder)})},
messageSends: ["highlightColored:", "blue"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "highlightColored:",
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
messageSends: ["when:do:", "highlight:color:", "element", "rtValue:", "model", "unhighlight:"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTInteractionBuilder.superclass.fn.prototype._initialize.apply(_st(self), []);
self._initializeInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTInteractionBuilder)})},
messageSends: ["initialize", "initializeInteractions"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeInteractions",
fn: function (){
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
self["@interactions"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initializeInteractions",{},smalltalk.RTInteractionBuilder)})},
messageSends: ["new"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "noInteractions",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._initializeInteractions();
return self}, function($ctx1) {$ctx1.fill(self,"noInteractions",{},smalltalk.RTInteractionBuilder)})},
messageSends: ["initializeInteractions"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "popup",
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
messageSends: ["new", "add:"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTInteractionBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@interactions"]=_st(self["@interactions"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTInteractionBuilder)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpElements:",
fn: function (elements){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._do_((function(int){
return smalltalk.withContext(function($ctx2) {
return _st(elements).__at(int);
}, function($ctx2) {$ctx2.fillBlock({int:int},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"setUpElements:",{elements:elements},smalltalk.RTInteractionBuilder)})},
messageSends: ["do:", "@"]}),
smalltalk.RTInteractionBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (event,block){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@interactions"])._add_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._when_do_(event,block);
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{event:event,block:block},smalltalk.RTInteractionBuilder)})},
messageSends: ["add:", "when:do:"]}),
smalltalk.RTInteractionBuilder);



smalltalk.addClass('RTShapeBuilder', smalltalk.RTObject, ['shape'], 'Roassal2-Builder-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "arc",
fn: function (){
var self=this;
function $RTArc(){return smalltalk.RTArc||(typeof RTArc=="undefined"?nil:RTArc)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTArc())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"arc",{},smalltalk.RTShapeBuilder)})},
messageSends: ["shape:", "new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "circle",
fn: function (){
var self=this;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTEllipse())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"circle",{},smalltalk.RTShapeBuilder)})},
messageSends: ["shape:", "new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "current",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"current",{},smalltalk.RTShapeBuilder)})},
messageSends: []}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shape())._perform_withArguments_(_st(aMessage)._selector(),_st(aMessage)._arguments());
return $1;
}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.RTShapeBuilder)})},
messageSends: ["perform:withArguments:", "selector", "arguments", "shape"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "edgeFrom:to:",
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
messageSends: ["ifFalse:", "line", "hasSetShape", "edgeFrom:to:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementOn:",
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
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "elementOn:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "elementsOn:",
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
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "elementsOn:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ellipse",
fn: function (){
var self=this;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTEllipse())._new();
return self}, function($ctx1) {$ctx1.fill(self,"ellipse",{},smalltalk.RTShapeBuilder)})},
messageSends: ["new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "hasSetShape",
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@shape"])._class()).__tild_tild($RTNoShape());
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasSetShape",{},smalltalk.RTShapeBuilder)})},
messageSends: ["~~", "class"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "if:borderColor:",
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
messageSends: ["borderColor", "borderColor:", "ifTrue:ifFalse:", "rtValue:", "on:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "if:fillColor:",
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
messageSends: ["fillColor", "fillColor:", "ifTrue:ifFalse:", "rtValue:", "on:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ifElement:borderColor:",
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
messageSends: ["borderColor", "borderColorElement:", "ifTrue:ifFalse:", "rtValue:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "ifElement:fillColor:",
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
messageSends: ["fillColor", "fillColorElement:", "ifTrue:ifFalse:", "rtValue:"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._reset();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTShapeBuilder)})},
messageSends: ["reset"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "label",
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTLabel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"label",{},smalltalk.RTShapeBuilder)})},
messageSends: ["new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "line",
fn: function (){
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTLine())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"line",{},smalltalk.RTShapeBuilder)})},
messageSends: ["shape:", "new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTShapeBuilder.superclass.fn.prototype._postCopy.apply(_st(self), []);
self["@shape"]=_st(self["@shape"])._copy();
return self}, function($ctx1) {$ctx1.fill(self,"postCopy",{},smalltalk.RTShapeBuilder)})},
messageSends: ["postCopy", "copy"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "rectangle",
fn: function (){
var self=this;
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._shape_(_st($RTBox())._new());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rectangle",{},smalltalk.RTShapeBuilder)})},
messageSends: ["shape:", "new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "reset",
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTNoShape())._instance();
return self}, function($ctx1) {$ctx1.fill(self,"reset",{},smalltalk.RTShapeBuilder)})},
messageSends: ["instance"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "setUpElements:",
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
messageSends: ["ifFalse:", "rectangle", "hasSetShape", "+"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@shape"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"shape",{},smalltalk.RTShapeBuilder)})},
messageSends: []}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "shape:",
fn: function (aRoassalShape){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=aRoassalShape;
return self}, function($ctx1) {$ctx1.fill(self,"shape:",{aRoassalShape:aRoassalShape},smalltalk.RTShapeBuilder)})},
messageSends: []}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "text",
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st($RTLabel())._new();
return self}, function($ctx1) {$ctx1.fill(self,"text",{},smalltalk.RTShapeBuilder)})},
messageSends: ["new"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withBorder",
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
self._borderColor_(_st($Color())._black());
return self}, function($ctx1) {$ctx1.fill(self,"withBorder",{},smalltalk.RTShapeBuilder)})},
messageSends: ["borderColor:", "black"]}),
smalltalk.RTShapeBuilder);

smalltalk.addMethod(
smalltalk.method({
selector: "withText",
fn: function (){
var self=this;
function $RTLabel(){return smalltalk.RTLabel||(typeof RTLabel=="undefined"?nil:RTLabel)}
return smalltalk.withContext(function($ctx1) { 
self["@shape"]=_st(self["@shape"]).__plus(_st($RTLabel())._new());
return self}, function($ctx1) {$ctx1.fill(self,"withText",{},smalltalk.RTShapeBuilder)})},
messageSends: ["+", "new"]}),
smalltalk.RTShapeBuilder);



smalltalk.addClass('RTShapeBuilderExample', smalltalk.RTObject, [], 'Roassal2-Builder-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "example01",
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
messageSends: ["new", "size:", "circle", "fillColor:", "context:", "withAllSubclasses", "command:", "lowColor:", "green", "highColor:", "red", "withText", "addAll:", "elementsOn:", "gapSize:", "on:", "elements", "open"]}),
smalltalk.RTShapeBuilderExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
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
messageSends: ["new", "size:", "rectangle", "fillColor:", "alpha:", "red", "withText", "addAll:", "elementsOn:", "to:", "on:", "elements", "open"]}),
smalltalk.RTShapeBuilderExample);

smalltalk.addMethod(
smalltalk.method({
selector: "example03",
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
messageSends: ["new", "width:", "rectangle", "fillColor:", "alpha:", "red", "withText", "elementsOn:", "to:", "@", "addAll:", "on:", "elements", "open"]}),
smalltalk.RTShapeBuilderExample);



smalltalk.addClass('RTShapeBuilderTest', smalltalk.RTTest, ['builder'], 'Roassal2-Builder-Common');
smalltalk.addMethod(
smalltalk.method({
selector: "setUp",
fn: function (){
var self=this;
function $RTShapeBuilder(){return smalltalk.RTShapeBuilder||(typeof RTShapeBuilder=="undefined"?nil:RTShapeBuilder)}
return smalltalk.withContext(function($ctx1) { 
self["@builder"]=_st($RTShapeBuilder())._new();
return self}, function($ctx1) {$ctx1.fill(self,"setUp",{},smalltalk.RTShapeBuilderTest)})},
messageSends: ["new"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBasic",
fn: function (){
var self=this;
function $RTNoShape(){return smalltalk.RTNoShape||(typeof RTNoShape=="undefined"?nil:RTNoShape)}
return smalltalk.withContext(function($ctx1) { 
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTNoShape()));
return self}, function($ctx1) {$ctx1.fill(self,"testBasic",{},smalltalk.RTShapeBuilderTest)})},
messageSends: ["assert:", "==", "class", "shape"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBox",
fn: function (){
var self=this;
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._rectangle();
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTBox()));
return self}, function($ctx1) {$ctx1.fill(self,"testBox",{},smalltalk.RTShapeBuilderTest)})},
messageSends: ["rectangle", "assert:", "==", "class", "shape"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testBoxWithDimensions",
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
messageSends: ["width:", "+", "rectangle", "shape", "assert:", "==", "class", "=", "widthFor:", "on:"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testLine",
fn: function (){
var self=this;
function $RTLine(){return smalltalk.RTLine||(typeof RTLine=="undefined"?nil:RTLine)}
return smalltalk.withContext(function($ctx1) { 
_st(self["@builder"])._line();
self._assert_(_st(_st(_st(self["@builder"])._shape())._class()).__eq_eq($RTLine()));
return self}, function($ctx1) {$ctx1.fill(self,"testLine",{},smalltalk.RTShapeBuilderTest)})},
messageSends: ["line", "assert:", "==", "class", "shape"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape",
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
messageSends: ["if:fillColor:", "=", "blue", "rectangle", "red", "elementOn:", "assert:", "colorFor:", "shape", "color", "trachelShape", "veryVeryLightGray"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testShape2",
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
messageSends: ["ifElement:fillColor:", "=", "model", "blue", "rectangle", "red", "elementOn:", "assert:", "colorFor:", "shape", "color", "trachelShape", "veryVeryLightGray"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithText",
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
messageSends: ["new", "size:", "circle", "fillColor:", "alpha:", "purple", "withText", "elementOn:", "add:", "assert:", "==", "class", "shape"]}),
smalltalk.RTShapeBuilderTest);

smalltalk.addMethod(
smalltalk.method({
selector: "testWithTextAndTranslation",
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
messageSends: ["new", "size:", "circle", "fillColor:", "alpha:", "purple", "withText", "elementOn:", "translateTo:", "@", "add:", "assert:", "==", "class", "shape"]}),
smalltalk.RTShapeBuilderTest);



