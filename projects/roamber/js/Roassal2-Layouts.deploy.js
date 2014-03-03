smalltalk.addPackage('Roassal2-Layouts');
smalltalk.addClass('RTLayout', smalltalk.RTObject, ['affectedNodes', 'translator', 'eventHandler', 'currentIteraction', 'maxInterations', 'iterationsToSendEvent'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
fn: function (anEvent) {
var self=this;
var eventToBeSent;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anEvent)._isBehavior();
if(smalltalk.assert($1)){
eventToBeSent=_st(anEvent)._new();
} else {
eventToBeSent=anEvent;
};
_st(eventToBeSent)._layout_(self);
_st(self["@eventHandler"])._announce_(eventToBeSent);
return self}, function($ctx1) {$ctx1.fill(self,"announce:",{anEvent:anEvent,eventToBeSent:eventToBeSent},smalltalk.RTLayout)});},
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "layout:", "announce:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
self._executeOnElements_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"applyOn:",{elements:elements},smalltalk.RTLayout)});},
messageSends: ["ifTrue:", "isEmpty", "executeOnElements:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultIterationsToSendEvent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (100);
}, function($ctx1) {$ctx1.fill(self,"defaultIterationsToSendEvent",{},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements},smalltalk.RTLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doPost:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doPost:",{elements:elements},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxInterations"]=_st(elements)._size();
self._doInitialize_(elements);
self._doExecute_(_st(elements)._asOrderedCollection());
self._doPost_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.RTLayout)});},
messageSends: ["size", "doInitialize:", "doExecute:", "asOrderedCollection", "doPost:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fatherOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("father",(function(){
return smalltalk.withContext(function($ctx2) {
return nil;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fatherOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fatherOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("father",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"fatherOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $RTLayoutTranslator(){return smalltalk.RTLayoutTranslator||(typeof RTLayoutTranslator=="undefined"?nil:RTLayoutTranslator)}
function $Announcer(){return smalltalk.Announcer||(typeof Announcer=="undefined"?nil:Announcer)}
return smalltalk.withContext(function($ctx1) { 
self["@translator"]=_st($RTLayoutTranslator())._default();
self["@eventHandler"]=_st($Announcer())._new();
self["@currentIteraction"]=(0);
self["@maxInterations"]=(0);
self["@iterationsToSendEvent"]=self._defaultIterationsToSendEvent();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTLayout)});},
messageSends: ["default", "new", "defaultIterationsToSendEvent"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@iterationsToSendEvent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent",{},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@iterationsToSendEvent"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent:",{anInteger:anInteger},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layerOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_("layout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"layerOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layerOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("layout",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"layerOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftContourOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("leftContour",(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"leftContourOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftContourOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("leftContour",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"leftContourOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "modOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("mod",(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[(0)];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"modOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "modOf:put:",
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("mod",aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"modOf:put:",{aNode:aNode,aFloat:aFloat},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{elements:elements},smalltalk.RTLayout)});},
messageSends: ["applyOn:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
fn: function (elements, edges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.RTLayout)});},
messageSends: ["applyOn:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("pointer",(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"pointerOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("pointer",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointerOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("r",(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("r",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rightContourOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("rightContour",(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[nil];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"rightContourOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rightContourOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("rightContour",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"rightContourOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "thetaOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
var $early={};
try {
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("theta",(function(){
return smalltalk.withContext(function($ctx2) {
throw $early=[(0)];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"thetaOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "thetaOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("theta",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"thetaOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@translator"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "translator:",
fn: function (t) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@translator"]=t;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{t:t},smalltalk.RTLayout)});},
messageSends: []}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
fn: function (eventClass, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._when_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.RTLayout)});},
messageSends: ["when:do:"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "xOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_ifAbsent_("x",(function(){
return smalltalk.withContext(function($ctx2) {
return (0);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"xOf:",{aNode:aNode},smalltalk.RTLayout)});},
messageSends: ["at:ifAbsent:", "attributes"]}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "xOf:put:",
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("x",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"xOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
messageSends: ["at:put:", "attributes"]}),
smalltalk.RTLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isAbstract())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotAbstract",{},smalltalk.RTLayout.klass)});},
messageSends: ["not", "isAbstract"]}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(aCollection)._isEmpty();
if(smalltalk.assert($1)){
$2=aCollection;
return $2;
};
_st(self._new())._applyOn_(aCollection);
$3=aCollection;
return $3;
}, function($ctx1) {$ctx1.fill(self,"on:",{aCollection:aCollection},smalltalk.RTLayout.klass)});},
messageSends: ["ifTrue:", "isEmpty", "applyOn:", "new"]}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
fn: function (elements, edges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(elements);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.RTLayout.klass)});},
messageSends: ["on:"]}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onElement:",
fn: function (aRoassalViewOrRoassalElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(_st(aRoassalViewOrRoassalElement)._elements());
return $1;
}, function($ctx1) {$ctx1.fill(self,"onElement:",{aRoassalViewOrRoassalElement:aRoassalViewOrRoassalElement},smalltalk.RTLayout.klass)});},
messageSends: ["on:", "elements"]}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onView:",
fn: function (aRoassalView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(_st(aRoassalView)._elements());
return $1;
}, function($ctx1) {$ctx1.fill(self,"onView:",{aRoassalView:aRoassalView},smalltalk.RTLayout.klass)});},
messageSends: ["on:", "elements"]}),
smalltalk.RTLayout.klass);


smalltalk.addClass('RTAbstractCircleLayout', smalltalk.RTLayout, ['initialAngle', 'initialIncrementalAngle', 'initialRadius', 'factor'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "initialAngle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialAngle",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngle:",
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialAngle"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"initialAngle:",{aFloat:aFloat},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngleInDegree",
fn: function () {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._initialAngle()).__star((180))).__slash(_st($Float())._pi());
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialAngleInDegree",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: ["/", "pi", "*", "initialAngle"]}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngleInDegree:",
fn: function (aNumber) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
self._initialAngle_(_st(_st(aNumber).__star(_st($Float())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"initialAngleInDegree:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
messageSends: ["initialAngle:", "/", "*", "pi"]}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngle",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialIncrementalAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngle",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngle:",
fn: function (aNumberInRadian) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialIncrementalAngle"]=aNumberInRadian;
return self}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngle:",{aNumberInRadian:aNumberInRadian},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngleInDegree:",
fn: function (aNumberInDegree) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
self._initialIncrementalAngle_(_st(_st(aNumberInDegree).__star(_st($Float())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngleInDegree:",{aNumberInDegree:aNumberInDegree},smalltalk.RTAbstractCircleLayout)});},
messageSends: ["initialIncrementalAngle:", "/", "*", "pi"]}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialRadius",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialRadius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialRadius",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialRadius:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"initialRadius:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractCircleLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._scaleBy_((11));
self["@initialAngle"]=(0);
self["@initialRadius"]=(0);
self["@initialIncrementalAngle"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: ["initialize", "scaleBy:"]}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@factor"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@factor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.RTAbstractCircleLayout)});},
messageSends: []}),
smalltalk.RTAbstractCircleLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCircleLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractCircleLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractCircleLayout.klass);


smalltalk.addClass('RTCenteredCircleLayout', smalltalk.RTAbstractCircleLayout, ['center'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RTCenteredCircleLayout)});},
messageSends: []}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.RTCenteredCircleLayout)});},
messageSends: []}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeIncrementalAngleFor:",
fn: function (elements) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@initialIncrementalAngle"]).__eq((0));
if(smalltalk.assert($2)){
$1=_st((2).__star(_st($Float())._pi())).__slash(_st(elements)._size());
} else {
$1=self["@initialIncrementalAngle"];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeIncrementalAngleFor:",{elements:elements},smalltalk.RTCenteredCircleLayout)});},
messageSends: ["ifTrue:ifFalse:", "/", "size", "*", "pi", "="]}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRadiusFor:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@initialRadius"]).__eq((0));
if(smalltalk.assert($2)){
$1=_st(_st(elements)._size()).__star(self._scaleFactor());
} else {
$1=self["@initialRadius"];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeRadiusFor:",{elements:elements},smalltalk.RTCenteredCircleLayout)});},
messageSends: ["ifTrue:ifFalse:", "*", "scaleFactor", "size", "="]}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var angleIncrement,angle,rad,centerPoint;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
rad=self._computeRadiusFor_(elements);
centerPoint=self["@center"];
angleIncrement=self._computeIncrementalAngleFor_(elements);
angle=self._initialAngle();
_st(elements)._do_((function(each){
var point;
return smalltalk.withContext(function($ctx2) {
point=_st(centerPoint).__plus(_st($Point())._r_theta_(rad,angle));
point;
angle=_st(angle).__plus(angleIncrement);
angle;
_st(self["@translator"])._translateTopLeftOf_to_(each,point);
return self._step();
}, function($ctx2) {$ctx2.fillBlock({each:each,point:point},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,angleIncrement:angleIncrement,angle:angle,rad:rad,centerPoint:centerPoint},smalltalk.RTCenteredCircleLayout)});},
messageSends: ["computeRadiusFor:", "computeIncrementalAngleFor:", "initialAngle", "do:", "+", "r:theta:", "translateTopLeftOf:to:", "step"]}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTCenteredCircleLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@center"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTCenteredCircleLayout)});},
messageSends: ["initialize", "@"]}),
smalltalk.RTCenteredCircleLayout);



smalltalk.addClass('RTCircleLayout', smalltalk.RTAbstractCircleLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computeIncrementalAngleFor:",
fn: function (elements) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@initialIncrementalAngle"]).__eq((0));
if(smalltalk.assert($2)){
$1=_st((2).__star(_st($Float())._pi())).__slash(_st(elements)._size());
} else {
$1=self["@initialIncrementalAngle"];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeIncrementalAngleFor:",{elements:elements},smalltalk.RTCircleLayout)});},
messageSends: ["ifTrue:ifFalse:", "/", "size", "*", "pi", "="]}),
smalltalk.RTCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRadiusFor:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@initialRadius"]).__eq((0));
if(smalltalk.assert($2)){
$1=_st(_st(elements)._size()).__star(self._scaleFactor());
} else {
$1=self["@initialRadius"];
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeRadiusFor:",{elements:elements},smalltalk.RTCircleLayout)});},
messageSends: ["ifTrue:ifFalse:", "*", "scaleFactor", "size", "="]}),
smalltalk.RTCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var angleIncrement,angle,rad,center;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
rad=self._computeRadiusFor_(elements);
center=_st($Point())._x_y_(rad,rad);
angleIncrement=self._computeIncrementalAngleFor_(elements);
angle=self._initialAngle();
_st(elements)._do_((function(each){
var point;
return smalltalk.withContext(function($ctx2) {
point=_st(center).__plus(_st($Point())._r_theta_(rad,angle));
point;
angle=_st(angle).__plus(angleIncrement);
angle;
_st(self["@translator"])._translateTopLeftOf_to_(each,point);
return self._step();
}, function($ctx2) {$ctx2.fillBlock({each:each,point:point},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,angleIncrement:angleIncrement,angle:angle,rad:rad,center:center},smalltalk.RTCircleLayout)});},
messageSends: ["computeRadiusFor:", "x:y:", "computeIncrementalAngleFor:", "initialAngle", "do:", "+", "r:theta:", "translateTopLeftOf:to:", "step"]}),
smalltalk.RTCircleLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._scaleBy_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aNumber:aNumber},smalltalk.RTCircleLayout.klass)});},
messageSends: ["scaleBy:", "new"]}),
smalltalk.RTCircleLayout.klass);


smalltalk.addClass('RTAbstractGridLayout', smalltalk.RTLayout, ['gapSize', 'lineItemsCountBlock'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGapSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultGapSize",{},smalltalk.RTAbstractGridLayout)});},
messageSends: []}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineItemsCount",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$1;
$1=(function(elements){
var height,width;
return smalltalk.withContext(function($ctx2) {
$3=_st(_st(elements)._size()).__lt((3));
if(smalltalk.assert($3)){
$2=_st(_st(_st(elements)._size())._max_((1))).__at((1));
} else {
height=_st(_st(_st(_st(_st(elements)._size()).__star((0.618034)))._sqrt())._ceiling())._truncated();
height;
width=_st(_st(_st(_st(elements)._size()).__slash(height))._ceiling())._truncated();
width;
$2=_st(width).__at(height);
};
return _st($2)._x();
}, function($ctx2) {$ctx2.fillBlock({elements:elements,height:height,width:width},$ctx1)})});
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultLineItemsCount",{},smalltalk.RTAbstractGridLayout)});},
messageSends: ["x", "ifTrue:ifFalse:", "@", "max:", "size", "truncated", "ceiling", "sqrt", "*", "/", "<"]}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.RTAbstractGridLayout)});},
messageSends: []}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{anInteger:anInteger},smalltalk.RTAbstractGridLayout)});},
messageSends: []}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractGridLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@gapSize"]=self._defaultGapSize();
self["@lineItemsCountBlock"]=self._defaultLineItemsCount();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractGridLayout)});},
messageSends: ["initialize", "defaultGapSize", "defaultLineItemsCount"]}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCount:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lineItemsCountBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lineItemsCount:",{aBlock:aBlock},smalltalk.RTAbstractGridLayout)});},
messageSends: []}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCountBlock",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineItemsCountBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineItemsCountBlock",{},smalltalk.RTAbstractGridLayout)});},
messageSends: []}),
smalltalk.RTAbstractGridLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGridLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withGap:withLineItemsCount:",
fn: function (aCollectionOfElements, anInteger, aBlock) {
var self=this;
var myLayout;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._new();
_st($1)._gapSize_(anInteger);
_st($1)._lineItemsCount_(aBlock);
$2=_st($1)._yourself();
myLayout=$2;
_st(myLayout)._applyOn_(aCollectionOfElements);
$3=aCollectionOfElements;
return $3;
}, function($ctx1) {$ctx1.fill(self,"on:withGap:withLineItemsCount:",{aCollectionOfElements:aCollectionOfElements,anInteger:anInteger,aBlock:aBlock,myLayout:myLayout},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself", "applyOn:"]}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withLineItemsCount:",
fn: function (aCollectionOfElements, aBlock) {
var self=this;
var myLayout;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._new();
_st($1)._lineItemsCount_(aBlock);
$2=_st($1)._yourself();
myLayout=$2;
_st(myLayout)._applyOn_(aCollectionOfElements);
$3=aCollectionOfElements;
return $3;
}, function($ctx1) {$ctx1.fill(self,"on:withLineItemsCount:",{aCollectionOfElements:aCollectionOfElements,aBlock:aBlock,myLayout:myLayout},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["lineItemsCount:", "new", "yourself", "applyOn:"]}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._gapSize_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withGap:",{anInteger:anInteger},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["gapSize:", "new", "yourself"]}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:withLineItemsCount:",
fn: function (anInteger, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._gapSize_(anInteger);
_st($2)._lineItemsCount_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withGap:withLineItemsCount:",{anInteger:anInteger,aBlock:aBlock},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself"]}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withLineItemsCount:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._lineItemsCount_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withLineItemsCount:",{aBlock:aBlock},smalltalk.RTAbstractGridLayout.klass)});},
messageSends: ["lineItemsCount:", "new", "yourself"]}),
smalltalk.RTAbstractGridLayout.klass);


smalltalk.addClass('RTCellLayout', smalltalk.RTAbstractGridLayout, ['inCellPosition'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var pointer,lineItemCount,lineItemSize,cell;
function $RTCell(){return smalltalk.RTCell||(typeof RTCell=="undefined"?nil:RTCell)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
lineItemSize=_st(self._lineItemsCountBlock())._rtValue_(elements);
cell=_st($RTCell())._elements_columns_(elements,lineItemSize);
pointer=_st(self._gapSize()).__at(self._gapSize());
lineItemCount=(0);
_st(elements)._withIndexDo_((function(element,index){
return smalltalk.withContext(function($ctx2) {
$1=cell;
_st($1)._element_(element);
$2=_st($1)._number_(index);
$2;
_st(self["@translator"])._translateTopLeftOf_to_(element,pointer);
pointer=_st(_st(_st(_st(pointer)._x()).__plus(_st(_st(cell)._extent())._x())).__plus(_st(self._gapSize()).__star((2)))).__at(_st(pointer)._y());
pointer;
lineItemCount=_st(lineItemCount).__plus((1));
lineItemCount;
$3=_st(lineItemCount).__gt_eq(lineItemSize);
if(smalltalk.assert($3)){
pointer=_st(self._gapSize()).__at(_st(_st(_st(pointer)._y()).__plus(_st(self._gapSize()).__star((2)))).__plus(_st(_st(cell)._extent())._y()));
pointer;
lineItemCount=(0);
lineItemCount;
};
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element,index:index},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,lineItemCount:lineItemCount,lineItemSize:lineItemSize,cell:cell},smalltalk.RTCellLayout)});},
messageSends: ["rtValue:", "lineItemsCountBlock", "elements:columns:", "@", "gapSize", "withIndexDo:", "element:", "number:", "translateTopLeftOf:to:", "y", "+", "*", "x", "extent", "ifTrue:", ">=", "step"]}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "inCellPosition:",
fn: function (anObjectOrOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inCellPosition"]=anObjectOrOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"inCellPosition:",{anObjectOrOneArgBlock:anObjectOrOneArgBlock},smalltalk.RTCellLayout)});},
messageSends: []}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTCellLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTCellLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCentred",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inCellPosition_((function(cell){
return smalltalk.withContext(function($ctx2) {
return (0).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"leftCentred",{},smalltalk.RTCellLayout)});},
messageSends: ["inCellPosition:", "@", "/", "-", "height", "element", "y", "extent"]}),
smalltalk.RTCellLayout);



smalltalk.addClass('RTGridLayout', smalltalk.RTAbstractGridLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var pointer,lineItemCount,lineItemSize,maxLastLineHeight,originalGapLeft,originalGapTop;
return smalltalk.withContext(function($ctx1) { 
var $1;
originalGapLeft=(0);
originalGapTop=(0);
pointer=_st(originalGapLeft).__at(originalGapTop);
lineItemSize=_st(self._lineItemsCountBlock())._rtValue_(elements);
lineItemCount=(0);
maxLastLineHeight=(0);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
_st(self["@translator"])._translateTopLeftOf_to_(element,pointer);
pointer=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(self._gapSize())).__at(_st(pointer)._y());
pointer;
lineItemCount=_st(lineItemCount).__plus((1));
lineItemCount;
maxLastLineHeight=_st(maxLastLineHeight)._max_(_st(element)._height());
maxLastLineHeight;
$1=_st(lineItemCount).__gt_eq(lineItemSize);
if(smalltalk.assert($1)){
pointer=_st(originalGapLeft).__at(_st(_st(_st(pointer)._y()).__plus(_st(self._gapSize()).__star((2)))).__plus(maxLastLineHeight));
pointer;
maxLastLineHeight=(0);
maxLastLineHeight;
lineItemCount=(0);
lineItemCount;
};
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,lineItemCount:lineItemCount,lineItemSize:lineItemSize,maxLastLineHeight:maxLastLineHeight,originalGapLeft:originalGapLeft,originalGapTop:originalGapTop},smalltalk.RTGridLayout)});},
messageSends: ["@", "rtValue:", "lineItemsCountBlock", "do:", "translateTopLeftOf:to:", "y", "+", "gapSize", "width", "x", "max:", "height", "ifTrue:", "*", ">=", "step"]}),
smalltalk.RTGridLayout);



smalltalk.addClass('RTAbstractLineLayout', smalltalk.RTLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "alignBottom",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="bottom";
return self}, function($ctx1) {$ctx1.fill(self,"alignBottom",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignCenter",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="center";
return self}, function($ctx1) {$ctx1.fill(self,"alignCenter",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignLeft",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="left";
return self}, function($ctx1) {$ctx1.fill(self,"alignLeft",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignRight",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="right";
return self}, function($ctx1) {$ctx1.fill(self,"alignRight",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="top";
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alignment_("center");
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RTAbstractLineLayout)});},
messageSends: ["alignment:"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
fn: function (aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doCenter:",{aGraph:aGraph},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var pointer,delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@horizontallyStretchable"];
if(smalltalk.assert($1)){
self._doStretchHorizontal_(elements);
};
$2=self["@verticallyStretchable"];
if(smalltalk.assert($2)){
self._doStretchVertical_(elements);
};
pointer=self._positionOriginalPointer_(elements);
_st(elements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
delta=self._deltaFor_(element);
delta;
_st(self["@translator"])._translateTopLeftOf_to_(element,_st(pointer).__minus(delta));
pointer=self._movePointer_accordingToFigure_(pointer,element);
pointer;
return self._step();
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,pointer:pointer,delta:delta},smalltalk.RTAbstractLineLayout)});},
messageSends: ["ifTrue:", "doStretchHorizontal:", "doStretchVertical:", "positionOriginalPointer:", "do:", "deltaFor:", "translateTopLeftOf:to:", "-", "movePointer:accordingToFigure:", "step"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
fn: function (aCollectionOfElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doStretchHorizontal:",{aCollectionOfElements:aCollectionOfElements},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
fn: function (aCollectionOfElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doStretchVertical:",{aCollectionOfElements:aCollectionOfElements},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=aNumber;
self["@verticalGap"]=(2).__star(aNumber);
self["@horizontalGap"]=(2).__star(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{aNumber:aNumber},smalltalk.RTAbstractLineLayout)});},
messageSends: ["*"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontallyStretchable",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@horizontallyStretchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontallyStretchable",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(10);
self["@horizontalGap"]=(10);
self["@horizontallyStretchable"]=false;
self["@verticallyStretchable"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractLineLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer, aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,aNodeFigure:aNodeFigure},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{aGraph:aGraph},smalltalk.RTAbstractLineLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretch",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticallyStretchable"]=true;
self["@horizontallyStretchable"]=self["@verticallyStretchable"];
return self}, function($ctx1) {$ctx1.fill(self,"stretch",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretchHorizontally",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontallyStretchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"stretchHorizontally",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretchVertically",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticallyStretchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"stretchVertically",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@verticalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticallyStretchable",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@verticallyStretchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticallyStretchable",{},smalltalk.RTAbstractLineLayout)});},
messageSends: []}),
smalltalk.RTAbstractLineLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractLineLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractLineLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractLineLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._gapSize_(anInteger);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withGap:",{anInteger:anInteger},smalltalk.RTAbstractLineLayout.klass)});},
messageSends: ["gapSize:", "new", "yourself"]}),
smalltalk.RTAbstractLineLayout.klass);


smalltalk.addClass('RTHorizontalLineLayout', smalltalk.RTAbstractLineLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
fn: function (aNodeFigure) {
var self=this;
var delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("bottom");
if(smalltalk.assert($1)){
delta=_st(aNodeFigure)._height();
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
delta=_st(_st(aNodeFigure)._height()).__slash((2));
delta;
};
$3=(0).__at(delta);
return $3;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
fn: function (elements) {
var self=this;
var midTallest,step;
return smalltalk.withContext(function($ctx1) { 
midTallest=(0);
midTallest=_st(_st(elements)._nodes())._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m)._max_(_st(_st(el)._bounds())._height());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
midTallest=_st(midTallest).__slash((2));
_st(_st(elements)._nodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
step=(0).__at(_st(_st(midTallest).__minus(_st(_st(_st(node)._bounds())._height()).__slash((2))))._asInteger());
step;
_st(_st(node)._bounds())._origin_(_st(_st(_st(node)._bounds())._origin()).__plus(step));
return _st(_st(node)._bounds())._corner_(_st(_st(_st(node)._bounds())._corner()).__plus(step));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doCenter:",{elements:elements,midTallest:midTallest,step:step},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["inject:into:", "max:", "height", "bounds", "nodes", "/", "do:", "@", "asInteger", "-", "origin:", "+", "origin", "corner:", "corner"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
fn: function (aCollectionOfElements) {
var self=this;
var parent,parentBounds,addedWidth,parentBoundsWidth,runningIndex,newWidth;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(aCollectionOfElements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
addedWidth=_st(aCollectionOfElements)._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m).__plus(_st(el)._width());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
parentBoundsWidth=_st(parentBounds)._width();
runningIndex=(0);
$5=_st(_st(parentBounds)._width()).__gt(addedWidth);
if(smalltalk.assert($5)){
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
newWidth=_st(_st(_st(_st(element)._width()).__star(parentBoundsWidth)).__slash(addedWidth))._asInteger();
newWidth;
_st(element)._width_(newWidth);
runningIndex=_st(_st(runningIndex).__plus(newWidth)).__plus(self["@horizontalGap"]);
return runningIndex;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"doStretchHorizontal:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds,addedWidth:addedWidth,parentBoundsWidth:parentBoundsWidth,runningIndex:runningIndex,newWidth:newWidth},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "inject:into:", "+", "width", "do:", "asInteger", "/", "*", "width:", ">"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
fn: function (aCollectionOfElements) {
var self=this;
var parent,parentBounds;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(aCollectionOfElements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._height_(_st(parentBounds)._height());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doStretchVertical:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "do:", "height:", "height"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTHorizontalLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["initialize", "alignTop"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(self._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"]}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
fn: function (elements) {
var self=this;
var maxHeight,delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("bottom");
if(smalltalk.assert($1)){
maxHeight=_st(elements)._maxValue_("height");
maxHeight;
delta=maxHeight;
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
maxHeight=_st(elements)._maxValue_("height");
maxHeight;
delta=_st(maxHeight).__slash((2));
delta;
};
$3=(0).__at((0).__plus(delta));
return $3;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{elements:elements,maxHeight:maxHeight,delta:delta},smalltalk.RTHorizontalLineLayout)});},
messageSends: ["ifTrue:", "maxValue:", "==", "alignment", "/", "@", "+"]}),
smalltalk.RTHorizontalLineLayout);



smalltalk.addClass('RTVerticalLineLayout', smalltalk.RTAbstractLineLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
fn: function (aNodeFigure) {
var self=this;
var delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("right");
if(smalltalk.assert($1)){
delta=_st(aNodeFigure)._width();
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
delta=_st(_st(aNodeFigure)._width()).__slash((2));
delta;
};
$3=_st(delta).__at((0));
return $3;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure,delta:delta},smalltalk.RTVerticalLineLayout)});},
messageSends: ["ifTrue:", "width", "==", "alignment", "/", "@"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
fn: function (aGraph) {
var self=this;
var midWidest,step;
return smalltalk.withContext(function($ctx1) { 
midWidest=_st(_st(aGraph)._nodes())._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m)._max_(_st(_st(el)._bounds())._width());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
midWidest=_st(midWidest).__slash((2));
_st(_st(aGraph)._nodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
step=_st(_st(_st(midWidest).__minus(_st(_st(_st(node)._bounds())._width()).__slash((2))))._asInteger()).__at((0));
step;
_st(_st(node)._bounds())._origin_(_st(_st(_st(node)._bounds())._origin()).__plus(step));
return _st(_st(node)._bounds())._corner_(_st(_st(_st(node)._bounds())._corner()).__plus(step));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doCenter:",{aGraph:aGraph,midWidest:midWidest,step:step},smalltalk.RTVerticalLineLayout)});},
messageSends: ["inject:into:", "max:", "width", "bounds", "nodes", "/", "do:", "@", "asInteger", "-", "origin:", "+", "origin", "corner:", "corner"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
fn: function (aCollectionOfElements) {
var self=this;
var parent,parentBounds;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st(aCollectionOfElements)._isNil();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
return _st(element)._width_(_st(parentBounds)._width());
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doStretchHorizontal:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds},smalltalk.RTVerticalLineLayout)});},
messageSends: ["ifTrue:", "isNil", "parent", "anyOne", "isView", "bounds", "do:", "width:", "width"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
fn: function (aCollectionOfElements) {
var self=this;
var parent,parentBounds,addedHeight,parentBoundsHeight,runningIndex,newHeight;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5;
$1=_st(aCollectionOfElements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
parent=_st(_st(aCollectionOfElements)._anyOne())._parent();
$3=_st(parent)._isView();
if(smalltalk.assert($3)){
$4=self;
return $4;
};
parentBounds=_st(parent)._bounds();
addedHeight=_st(aCollectionOfElements)._inject_into_((0),(function(m,el){
return smalltalk.withContext(function($ctx2) {
return _st(m).__plus(_st(el)._height());
}, function($ctx2) {$ctx2.fillBlock({m:m,el:el},$ctx1)})}));
parentBoundsHeight=_st(parentBounds)._height();
runningIndex=(0);
$5=_st(_st(parentBounds)._height()).__gt(addedHeight);
if(smalltalk.assert($5)){
_st(aCollectionOfElements)._do_((function(element){
return smalltalk.withContext(function($ctx2) {
newHeight=_st(_st(_st(_st(element)._height()).__star(parentBoundsHeight)).__slash(addedHeight))._asInteger();
newHeight;
_st(element)._height_(newHeight);
runningIndex=_st(_st(runningIndex).__plus(newHeight)).__plus(self["@verticalGap"]);
return runningIndex;
}, function($ctx2) {$ctx2.fillBlock({element:element},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"doStretchVertical:",{aCollectionOfElements:aCollectionOfElements,parent:parent,parentBounds:parentBounds,addedHeight:addedHeight,parentBoundsHeight:parentBoundsHeight,runningIndex:runningIndex,newHeight:newHeight},smalltalk.RTVerticalLineLayout)});},
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "inject:into:", "+", "height", "do:", "asInteger", "/", "*", "height:", ">"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTVerticalLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alignLeft();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTVerticalLineLayout)});},
messageSends: ["initialize", "alignLeft"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
fn: function (pointer, aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(pointer)._x()).__at(_st(_st(_st(pointer)._y()).__plus(_st(aNodeFigure)._height())).__plus(self._verticalGap()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,aNodeFigure:aNodeFigure},smalltalk.RTVerticalLineLayout)});},
messageSends: ["@", "+", "verticalGap", "height", "y", "x"]}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
fn: function (elements) {
var self=this;
var maxWidth,delta;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
delta=(0);
$1=_st(self._alignment()).__eq_eq("right");
if(smalltalk.assert($1)){
maxWidth=_st(elements)._maxValue_("width");
maxWidth;
delta=maxWidth;
delta;
};
$2=_st(self._alignment()).__eq_eq("center");
if(smalltalk.assert($2)){
maxWidth=_st(elements)._maxValue_("width");
maxWidth;
delta=_st(maxWidth).__slash((2));
delta;
};
$3=_st((0).__plus(delta)).__at((0));
return $3;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{elements:elements,maxWidth:maxWidth,delta:delta},smalltalk.RTVerticalLineLayout)});},
messageSends: ["ifTrue:", "maxValue:", "==", "alignment", "/", "@", "+"]}),
smalltalk.RTVerticalLineLayout);



smalltalk.addClass('RTEdgeDrivenLayout', smalltalk.RTLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@affectedNodes"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(aNode)._nodes();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodesOf:",{aNode:aNode},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifNil:", "nodes"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (aGraphElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
fn: function (anElementNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["doExecute:"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@edges"];
if(($receiver = $1) == nil || $receiver == undefined){
$2=self;
return $2;
} else {
$1;
};
_st(self["@edges"])._do_(aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"edgesDo:",{aBlock:aBlock},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifNil:", "do:"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
fn: function (elements) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self._userDefinedEdges())._isNil();
if(smalltalk.assert($1)){
self._setEdgesFromElements_(elements);
} else {
var flat;
flat=_st($OrderedCollection())._new();
flat;
_st(self._userDefinedEdges())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
$2=_st(each)._isCollection();
if(smalltalk.assert($2)){
return _st(flat)._addAll_(each);
} else {
return _st(flat)._add_(each);
};
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
self._edges_(flat);
};
smalltalk.RTEdgeDrivenLayout.superclass.fn.prototype._executeOnElements_.apply(_st(self), [elements]);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@fromPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@fromPositions"]=self._defaultFromPositions();
$1=self["@fromPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromPositions",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifNil:", "defaultFromPositions"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
fn: function (anArray) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
fn: function (elements) {
var self=this;
var view;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(elements)._isEmpty();
if(smalltalk.assert($1)){
$2=self;
return $2;
};
view=_st(_st(elements)._anyOne())._view();
self._edges_(_st(_st(view)._edges())._select_((function(el){
return smalltalk.withContext(function($ctx2) {
return _st(_st(elements)._includes_(_st(el)._from()))._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(elements)._includes_(_st(el)._to());
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({el:el},$ctx1)})})));
return self}, function($ctx1) {$ctx1.fill(self,"setEdgesFromElements:",{elements:elements,view:view},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "select:", "and:", "includes:", "to", "from", "edges"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@toPositions"];
if(($receiver = $2) == nil || $receiver == undefined){
self["@toPositions"]=self._defaultToPositions();
$1=self["@toPositions"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"toPositions",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: ["ifNil:", "defaultToPositions"]}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
fn: function (anArray) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
fn: function (aCollectionOfEdges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.RTEdgeDrivenLayout)});},
messageSends: []}),
smalltalk.RTEdgeDrivenLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROEdgeDrivenLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTEdgeDrivenLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTEdgeDrivenLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withEdges:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._new())._initialize())._userDefinedEdges_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"withEdges:",{aCollection:aCollection},smalltalk.RTEdgeDrivenLayout.klass)});},
messageSends: ["userDefinedEdges:", "initialize", "new"]}),
smalltalk.RTEdgeDrivenLayout.klass);


smalltalk.addClass('RTAbstractGraphLayout', smalltalk.RTEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
fn: function () {
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedChildren"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedChildren"]=_st($IdentityDictionary())._new_((1000));
self["@cachedChildren"];
} else {
$1;
};
$2=self["@cachedChildren"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedChildren",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "new:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
fn: function () {
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParents"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParents"]=_st($IdentityDictionary())._new_((1000));
self["@cachedParents"];
} else {
$1;
};
$2=self["@cachedParents"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParents",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "new:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
fn: function () {
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self["@cachedParentsWithHighestNestings"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@cachedParentsWithHighestNestings"]=_st($IdentityDictionary())._new_((1000));
self["@cachedParentsWithHighestNestings"];
} else {
$1;
};
$2=self["@cachedParentsWithHighestNestings"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"cachedParentsWithHighestNestings",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "new:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
fn: function (aNode) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$1=_st(self._cachedChildren())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(_st(edge)._from()).__eq_eq(aNode))._and_((function(){
return smalltalk.withContext(function($ctx4) {
return _st(_st(edge)._to()).__tild_eq(aNode);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3)})}));
if(smalltalk.assert($2)){
$3=_st(nodes)._includes_(_st(edge)._from());
if(! smalltalk.assert($3)){
return _st(nodes)._add_(_st(edge)._to());
};
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:",{aNode:aNode},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
fn: function (aNode, aNodeCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._reject_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(aNodeCollection)._includes_(each);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenFor:except:",{aNode:aNode,aNodeCollection:aNodeCollection},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["reject:", "includes:", "childrenFor:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._childrenFor_(aNode))._select_((function(eachChild){
return smalltalk.withContext(function($ctx2) {
return _st(self._highestNestingParentFor_(eachChild)).__eq_eq(aNode);
}, function($ctx2) {$ctx2.fillBlock({eachChild:eachChild},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"childrenWithHighestNestingLevelFor:",{aNode:aNode},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
fn: function (aCollection) {
var self=this;
var g,sl,sr,s,indeg,outdeg,degrees,vertex;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
g=_st(_st(aCollection)._copy())._asOrderedCollection();
sl=_st($OrderedCollection())._new();
sr=_st($OrderedCollection())._new();
_st(_st(g)._copy())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$1=_st(self._childrenFor_(node))._isEmpty();
if(smalltalk.assert($1)){
_st(sr)._addFirst_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
_st(_st(g)._copy())._do_((function(node){
return smalltalk.withContext(function($ctx2) {
$2=_st(self._parentsFor_(node))._isEmpty();
if(smalltalk.assert($2)){
_st(sl)._addLast_(node);
return _st(g)._remove_(node);
};
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
degrees=_st($IdentityDictionary())._new();
_st(g)._do_((function(node){
return smalltalk.withContext(function($ctx2) {
indeg=_st(self._parentsFor_(node))._size();
indeg;
outdeg=_st(self._childrenFor_(node))._size();
outdeg;
return _st(degrees)._at_put_(node,_st(outdeg).__minus(indeg));
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
g=_st(g)._asSortedCollection_((function(a,b){
return smalltalk.withContext(function($ctx2) {
return _st(_st(degrees)._at_(a)).__gt_eq(_st(degrees)._at_(b));
}, function($ctx2) {$ctx2.fillBlock({a:a,b:b},$ctx1)})}));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(g)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
vertex=_st(g)._detect_ifNone_((function(v){
return smalltalk.withContext(function($ctx3) {
return _st(self._parentsFor_(v))._anySatisfy_((function(w){
return smalltalk.withContext(function($ctx4) {
return _st(sl)._includes_(w);
}, function($ctx4) {$ctx4.fillBlock({w:w},$ctx3)})}));
}, function($ctx3) {$ctx3.fillBlock({v:v},$ctx2)})}),(function(){
return smalltalk.withContext(function($ctx3) {
return _st(g)._first();
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
vertex;
_st(sl)._addLast_(vertex);
return _st(g)._remove_(vertex);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
s=_st(sl).__comma(sr);
$3=_st(self._edges())._notNil();
if(smalltalk.assert($3)){
_st(_st(self._edges())._copy())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {
$4=_st(_st(s)._indexOf_(_st(edge)._from())).__gt(_st(s)._indexOf_(_st(edge)._to()));
if(smalltalk.assert($4)){
return _st(self._edges())._remove_(edge);
};
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
};
self._clear();
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aCollection:aCollection,g:g,sl:sl,sr:sr,s:s,indeg:indeg,outdeg:outdeg,degrees:degrees,vertex:vertex},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["asOrderedCollection", "copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "to", "from", "notNil", "clear"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
fn: function (aNodeFigure) {
var self=this;
var parents;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParentsWithHighestNestings())._at_ifAbsentPut_(aNodeFigure,(function(){
return smalltalk.withContext(function($ctx2) {
parents=self._parentsFor_(aNodeFigure);
parents;
$2=_st(parents)._isEmpty();
if(smalltalk.assert($2)){
return (0);
} else {
return _st(parents)._detectMax_((function(eachParent){
return smalltalk.withContext(function($ctx3) {
return self._nestingLevelFor_(eachParent);
}, function($ctx3) {$ctx3.fillBlock({eachParent:eachParent},$ctx2)})}));
};
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"highestNestingParentFor:",{aNodeFigure:aNodeFigure,parents:parents},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@horizontalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._horizontalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "horizontalGap", "class"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.RTAbstractGraphLayout)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumDiameter:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._inject_into_((0),(function(max,node){
return smalltalk.withContext(function($ctx2) {
return _st(max)._max_(_st(_st(node)._radius()).__star((2)));
}, function($ctx2) {$ctx2.fillBlock({max:max,node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"maximumDiameter:",{aCollection:aCollection},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["inject:into:", "max:", "*", "radius"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumRadius:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._inject_into_((0),(function(max,node){
return smalltalk.withContext(function($ctx2) {
return _st(max)._max_(_st(node)._radius());
}, function($ctx2) {$ctx2.fillBlock({max:max,node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"maximumRadius:",{aCollection:aCollection},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["inject:into:", "max:", "radius"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
fn: function (aNodeFigure) {
var self=this;
var parents,parentsNesting;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
parents=self._parentsFor_(aNodeFigure);
parentsNesting=_st(parents)._collect_((function(eachParent){
return smalltalk.withContext(function($ctx2) {
return self._nestingLevelFor_(eachParent);
}, function($ctx2) {$ctx2.fillBlock({eachParent:eachParent},$ctx1)})}));
$2=_st(parentsNesting)._isEmpty();
if(smalltalk.assert($2)){
$1=(0);
} else {
$1=_st(_st(parentsNesting)._max()).__plus((1));
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nestingLevelFor:",{aNodeFigure:aNodeFigure,parents:parents,parentsNesting:parentsNesting},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
fn: function (el, edgs) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._userDefinedEdges();
if(($receiver = $1) == nil || $receiver == undefined){
self._userDefinedEdges_(edgs);
} else {
$1;
};
$2=self._applyOn_(el);
return $2;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{el:el,edgs:edgs},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
fn: function (aNode) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$1=_st(self._cachedParents())._at_ifAbsentPut_(aNode,(function(){
var nodes;
return smalltalk.withContext(function($ctx2) {
nodes=_st($OrderedCollection())._new();
nodes;
self._edgesDo_((function(edge){
return smalltalk.withContext(function($ctx3) {
$2=_st(_st(edge)._to()).__eq_eq(aNode);
if(smalltalk.assert($2)){
return _st(nodes)._add_(_st(edge)._from());
};
}, function($ctx3) {$ctx3.fillBlock({edge:edge},$ctx2)})}));
return nodes;
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"parentsFor:",{aNode:aNode},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aCollection)._select_((function(node){
return smalltalk.withContext(function($ctx2) {
return _st(self._parentsFor_(node))._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rootNodesFor:",{aCollection:aCollection},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["select:", "isEmpty", "parentsFor:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftTree:by:",
fn: function (aNode, aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._translateBy_(aPoint);
_st(self._childrenFor_(aNode))._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return self._shiftTree_by_(child,aPoint);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shiftTree:by:",{aNode:aNode,aPoint:aPoint},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["translateBy:", "do:", "shiftTree:by:", "childrenFor:"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self["@verticalGap"];
if(($receiver = $2) == nil || $receiver == undefined){
$1=_st(self._class())._verticalGap();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.RTAbstractGraphLayout)});},
messageSends: ["ifNil:", "verticalGap", "class"]}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.RTAbstractGraphLayout)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.RTAbstractGraphLayout.klass)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGraphLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractGraphLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
fn: function (elements, edges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._userDefinedEdges_(edges);
$3=_st($2)._applyOn_(elements);
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.RTAbstractGraphLayout.klass)});},
messageSends: ["userDefinedEdges:", "new", "applyOn:"]}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.RTAbstractGraphLayout.klass)});},
messageSends: []}),
smalltalk.RTAbstractGraphLayout.klass);


smalltalk.addClass('RTAbstractCompactTree', smalltalk.RTAbstractGraphLayout, ['sonsDictionary', 'root', 'initialLayout', 'margin'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
fn: function (aNode) {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$4,$3;
var $early={};
try {
$1=_st(self["@sonsDictionary"])._isEmpty();
if(smalltalk.assert($1)){
$2=smalltalk.RTAbstractCompactTree.superclass.fn.prototype._childrenFor_.apply(_st(self), [aNode]);
return $2;
} else {
$3=_st(self["@sonsDictionary"])._at_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx2) {
$4=_st($OrderedCollection())._new();
throw $early=[$4];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $3;
};
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"childrenFor:",{aNode:aNode},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "at:ifAbsent:", "new", "isEmpty"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
fn: function (aNode, another) {
var self=this;
var difference,max,nodeA,nodeB;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
nodeB=aNode;
nodeA=another;
$1=_st(aNode).__eq(another);
if(smalltalk.assert($1)){
max=(0);
} else {
max=_st(_st(self["@horizontalGap"]).__slash((2))).__minus(_st(_st(nodeB)._x()).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
};
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(nodeB)._isNil())._not()).__and(_st(_st(nodeA)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
difference=_st(self["@horizontalGap"]).__minus(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeB,_st(_st(aNode)._layer()).__minus((1)))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(_st(aNode)._layer()).__minus((1)))));
difference;
max=_st(max)._max_(difference);
max;
nodeB=self._followLeftContour_toLayer_(nodeB,_st(_st(nodeB)._layer()).__plus((1)));
nodeB;
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=max;
return $2;
}, function($ctx1) {$ctx1.fill(self,"compareContourOf:with:",{aNode:aNode,another:another,difference:difference,max:max,nodeA:nodeA,nodeB:nodeB},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
fn: function (aNode) {
var self=this;
var children,neighbor,nodeA;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11;
children=self._childrenFor_(aNode);
neighbor=self._leftSiblingOf_(aNode);
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
$2=_st(neighbor)._isNil();
if(smalltalk.assert($2)){
$3=aNode;
_st($3)._x_((0));
$4=_st($3)._mod_((0));
$4;
} else {
$5=aNode;
_st($5)._x_(_st(_st(neighbor)._x()).__plus(_st(self["@horizontalGap"]).__slash((2))));
_st($5)._mod_(_st(neighbor)._mod());
$6=_st($5)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(aNode)._layer()).__plus((1))));
$6;
};
} else {
$7=aNode;
_st($7)._leftContour_(_st(children)._first());
$8=_st($7)._rightContour_(_st(children)._last());
$8;
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$9=aNode;
_st($9)._x_(_st(_st(_st(_st(_st(aNode)._leftContour())._x()).__plus(_st(_st(aNode)._rightContour())._x())).__plus(_st(_st(aNode)._rightContour())._mod())).__slash((2)));
$10=_st($9)._mod_((0));
$10;
$11=_st(neighbor)._isNil();
if(! smalltalk.assert($11)){
_st(aNode)._mod_(self._compareContourOf_with_(aNode,neighbor));
nodeA=self._followLeftContour_toLayer_(_st(aNode)._father(),_st(aNode)._layer());
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followLeftContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followLeftContour_toLayer_(aNode,_st(_st(nodeA)._layer()).__plus((1))));
nodeA=self._followRightContour_toLayer_(aNode,_st(_st(aNode)._layer()).__plus((1)));
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followRightContour_toLayer_(nodeA,_st(_st(nodeA)._layer()).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(nodeA)._pointer_(self._followRightContour_toLayer_(neighbor,_st(_st(nodeA)._layer()).__plus((1))));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"computePosition:",{aNode:aNode,children:children,neighbor:neighbor,nodeA:nodeA},smalltalk.RTAbstractCompactTree)});},
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "x", "mod", "pointer:", "followRightContour:toLayer:", "layer", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "coordinate:withMod:",
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"coordinate:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.RTAbstractCompactTree)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (nodeElements) {
var self=this;
var rootNodes;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@initialLayout"])._isNil();
if(! smalltalk.assert($1)){
_st(_st(self["@initialLayout"])._new())._executeOnElements_(nodeElements);
};
rootNodes=self._rootNodesFor_(nodeElements);
$2=rootNodes;
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,nil);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$3=_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(rootNodes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._draw_withMod_(e,(0));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements,rootNodes:rootNodes},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "draw:withMod:"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:withMod:",
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.RTAbstractCompactTree)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followLeftContour:toLayer:",
fn: function (aNode, anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(self._layerOf_(aNode)).__eq(anInteger);
if(smalltalk.assert($1)){
$2=aNode;
return $2;
};
$3=_st(self._layerOf_(aNode)).__gt(anInteger);
if(smalltalk.assert($3)){
return nil;
};
$4=_st(self._leftContourOf_(aNode))._isNil();
if(smalltalk.assert($4)){
$5=_st(self._pointerOf_(aNode))._isNil();
if(smalltalk.assert($5)){
return nil;
} else {
$6=self._followLeftContour_toLayer_(self._pointerOf_(aNode),anInteger);
return $6;
};
} else {
$7=self._followLeftContour_toLayer_(self._leftContourOf_(aNode),anInteger);
return $7;
};
return self}, function($ctx1) {$ctx1.fill(self,"followLeftContour:toLayer:",{aNode:aNode,anInteger:anInteger},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:", "=", "layerOf:", ">", "ifTrue:ifFalse:", "followLeftContour:toLayer:", "pointerOf:", "isNil", "leftContourOf:"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followRightContour:toLayer:",
fn: function (aNode, anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=_st(self._layerOf_(aNode)).__eq(anInteger);
if(smalltalk.assert($1)){
$2=aNode;
return $2;
};
$3=_st(self._layerOf_(aNode)).__gt(anInteger);
if(smalltalk.assert($3)){
return nil;
};
$4=_st(self._rightContourOf_(aNode))._isNil();
if(smalltalk.assert($4)){
$5=_st(self._pointerOf_(aNode))._isNil();
if(smalltalk.assert($5)){
return nil;
} else {
$6=self._followRightContour_toLayer_(self._pointerOf_(aNode),anInteger);
return $6;
};
} else {
$7=self._followRightContour_toLayer_(self._rightContourOf_(aNode),anInteger);
return $7;
};
return self}, function($ctx1) {$ctx1.fill(self,"followRightContour:toLayer:",{aNode:aNode,anInteger:anInteger},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:", "=", "layerOf:", ">", "ifTrue:ifFalse:", "followRightContour:toLayer:", "pointerOf:", "isNil", "rightContourOf:"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "getAbcissaOf:inSubtreeFromLayer:",
fn: function (aNode, anInteger) {
var self=this;
var node,x;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6;
$1=_st(anInteger).__lt((0));
if(smalltalk.assert($1)){
$2=self._getAbcissaOf_inSubtreeFromLayer_(aNode,(0));
return $2;
};
$3=_st(self._layerOf_(aNode)).__eq(anInteger);
if(smalltalk.assert($3)){
$4=self._xOf_(aNode);
return $4;
};
$5=_st(self._layerOf_(aNode)).__lt(anInteger);
if(smalltalk.assert($5)){
return nil;
};
x=_st(self._xOf_(aNode)).__plus(self._modOf_(aNode));
node=self._fatherOf_(aNode);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._layerOf_(node)).__eq(anInteger);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
x=_st(x).__plus(self._modOf_(node));
x;
node=self._fatherOf_(node);
return node;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$6=x;
return $6;
}, function($ctx1) {$ctx1.fill(self,"getAbcissaOf:inSubtreeFromLayer:",{aNode:aNode,anInteger:anInteger,node:node,x:x},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:", "getAbcissaOf:inSubtreeFromLayer:", "<", "xOf:", "=", "layerOf:", "+", "modOf:", "fatherOf:", "whileFalse:"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aGraph:aGraph},smalltalk.RTAbstractCompactTree)});},
messageSends: []}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialLayout:",
fn: function (aLayout) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialLayout"]=aLayout;
return self}, function($ctx1) {$ctx1.fill(self,"initialLayout:",{aLayout:aLayout},smalltalk.RTAbstractCompactTree)});},
messageSends: []}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractCompactTree.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(30);
self["@margin"]=(40);
self["@sonsDictionary"]=_st($Dictionary())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractCompactTree)});},
messageSends: ["initialize", "new"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:whoseFatherIs:",
fn: function (aNode, another) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._fatherOf_put_(aNode,another);
$1=_st(another)._isNil();
if(smalltalk.assert($1)){
self._layerOf_put_(aNode,(0));
} else {
self._layerOf_put_(aNode,_st(self._layerOf_(another)).__plus((1)));
};
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,aNode);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"initialize:whoseFatherIs:",{aNode:aNode,another:another},smalltalk.RTAbstractCompactTree)});},
messageSends: ["fatherOf:put:", "ifTrue:ifFalse:", "layerOf:put:", "+", "layerOf:", "isNil", "do:", "initialize:whoseFatherIs:", "childrenFor:"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "leftSiblingOf:",
fn: function (aNode) {
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self._fatherOf_(aNode))._isNil();
if(smalltalk.assert($1)){
return nil;
} else {
children=self._childrenFor_(self._fatherOf_(aNode));
children;
$2=_st(_st(children)._first()).__eq(aNode);
if(smalltalk.assert($2)){
return nil;
} else {
$3=_st(children)._at_(_st(_st(children)._indexOf_(aNode)).__minus((1)));
return $3;
};
};
return self}, function($ctx1) {$ctx1.fill(self,"leftSiblingOf:",{aNode:aNode,children:children},smalltalk.RTAbstractCompactTree)});},
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "fatherOf:", "at:", "-", "indexOf:", "=", "first", "isNil"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RTAbstractCompactTree)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{aNode:aNode},smalltalk.RTAbstractCompactTree)});},
messageSends: []}),
smalltalk.RTAbstractCompactTree);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
fn: function (anInt) {
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._horizontalGap_(anInt);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInt:anInt,new_:new_},smalltalk.RTAbstractCompactTree.klass)});},
messageSends: ["new", "horizontalGap:"]}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:verticalGap:",
fn: function (anInt, another) {
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._horizontalGap_(anInt);
_st(new_)._verticalGap_(another);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap:verticalGap:",{anInt:anInt,another:another,new_:new_},smalltalk.RTAbstractCompactTree.klass)});},
messageSends: ["new", "horizontalGap:", "verticalGap:"]}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCompactTree");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractCompactTree.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
fn: function (anInt) {
var self=this;
var new_;
return smalltalk.withContext(function($ctx1) { 
var $1;
new_=self._new();
_st(new_)._verticalGap_(anInt);
$1=new_;
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInt:anInt,new_:new_},smalltalk.RTAbstractCompactTree.klass)});},
messageSends: ["new", "verticalGap:"]}),
smalltalk.RTAbstractCompactTree.klass);


smalltalk.addClass('RTRadialTreeLayout', smalltalk.RTAbstractCompactTree, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
fn: function (aNode, another) {
var self=this;
var difference,max,nodeA,nodeB;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
nodeB=aNode;
nodeA=another;
$1=_st(aNode).__eq(another);
if(smalltalk.assert($1)){
max=(0);
} else {
max=_st(_st(_st(self["@horizontalGap"]).__slash(self._layerOf_(nodeB))).__slash((2))).__minus(_st(self._xOf_(nodeB)).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(self._layerOf_(aNode)).__minus((1)))));
};
nodeB=self._followLeftContour_toLayer_(nodeB,_st(self._layerOf_(nodeB)).__plus((1)));
nodeA=self._followRightContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1)));
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(_st(nodeB)._isNil())._not()).__and(_st(_st(nodeA)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
difference=_st(_st(self["@horizontalGap"]).__slash(self._layerOf_(nodeA))).__minus(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeB,_st(self._layerOf_(aNode)).__minus((1)))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeA,_st(self._layerOf_(aNode)).__minus((1)))));
difference;
max=_st(max)._max_(difference);
max;
nodeB=self._followLeftContour_toLayer_(nodeB,_st(self._layerOf_(nodeB)).__plus((1)));
nodeB;
nodeA=self._followRightContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
$2=max;
return $2;
}, function($ctx1) {$ctx1.fill(self,"compareContourOf:with:",{aNode:aNode,another:another,difference:difference,max:max,nodeA:nodeA,nodeB:nodeB},smalltalk.RTRadialTreeLayout)});},
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layerOf:", "xOf:", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeGap:",
fn: function (aNode) {
var self=this;
var gap,maxAbcissa,i,abc,nodeL,nodeR,layer;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
gap=(0);
maxAbcissa=(0);
layer=(1);
i=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
nodeL=self._followLeftContour_toLayer_(aNode,i);
nodeL;
nodeR=self._followRightContour_toLayer_(aNode,i);
nodeR;
return _st(_st(_st(nodeL)._isNil())._not()).__and(_st(_st(nodeR)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
abc=_st(_st(_st(self._getAbcissaOf_inSubtreeFromLayer_(nodeR,(0))).__minus(self._getAbcissaOf_inSubtreeFromLayer_(nodeL,(0)))).__plus(_st(_st(self["@horizontalGap"]).__slash(layer)).__slash((2)))).__slash(layer);
abc;
$1=_st(abc).__gt(maxAbcissa);
if(smalltalk.assert($1)){
maxAbcissa=abc;
maxAbcissa;
layer=layer;
layer;
};
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
gap=_st(_st(_st(_st(maxAbcissa).__slash((2))).__slash(_st($Float())._pi()))._floor()).__plus((1));
$2=_st(_st(self["@verticalGap"])._isNil())._or_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(gap).__gt(self["@verticalGap"]);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
self._verticalGap_(gap);
};
return self}, function($ctx1) {$ctx1.fill(self,"computeGap:",{aNode:aNode,gap:gap,maxAbcissa:maxAbcissa,i:i,abc:abc,nodeL:nodeL,nodeR:nodeR,layer:layer},smalltalk.RTRadialTreeLayout)});},
messageSends: ["whileTrue:", "/", "+", "-", "getAbcissaOf:inSubtreeFromLayer:", "ifTrue:", ">", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "floor", "pi", "verticalGap:", "or:"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
fn: function (aNode) {
var self=this;
var children,neighbor,nodeA;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
children=self._childrenFor_(aNode);
neighbor=self._leftSiblingOf_(aNode);
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
$2=_st(neighbor)._isNil();
if(smalltalk.assert($2)){
self._xOf_put_(aNode,(0));
self._modOf_put_(aNode,(0));
} else {
self._xOf_put_(aNode,_st(self._xOf_(neighbor)).__plus(_st(_st(self["@horizontalGap"]).__slash(self._layerOf_(aNode))).__slash((2))));
self._modOf_put_(aNode,self._modOf_(neighbor));
self._pointerOf_put_(aNode,self._followRightContour_toLayer_(neighbor,_st(self._layerOf_(aNode)).__plus((1))));
};
} else {
self._leftContourOf_put_(aNode,_st(children)._first());
self._rightContourOf_put_(aNode,_st(children)._last());
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
self._xOf_put_(aNode,_st(_st(_st(self._xOf_(self._leftContourOf_(aNode))).__plus(self._xOf_(self._rightContourOf_(aNode)))).__plus(self._modOf_(self._rightContourOf_(aNode)))).__slash((2)));
self._modOf_put_(aNode,(0));
$3=_st(neighbor)._isNil();
if(! smalltalk.assert($3)){
self._modOf_put_(aNode,self._compareContourOf_with_(aNode,neighbor));
nodeA=self._followLeftContour_toLayer_(self._fatherOf_(aNode),self._layerOf_(aNode));
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followLeftContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followLeftContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._pointerOf_put_(nodeA,self._followLeftContour_toLayer_(aNode,_st(self._layerOf_(nodeA)).__plus((1))));
nodeA=self._followRightContour_toLayer_(aNode,_st(self._layerOf_(aNode)).__plus((1)));
nodeA;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self._followRightContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1))))._isNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
nodeA=self._followRightContour_toLayer_(nodeA,_st(self._layerOf_(nodeA)).__plus((1)));
return nodeA;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self._pointerOf_put_(nodeA,self._followRightContour_toLayer_(neighbor,_st(self._layerOf_(nodeA)).__plus((1))));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"computePosition:",{aNode:aNode,children:children,neighbor:neighbor,nodeA:nodeA},smalltalk.RTRadialTreeLayout)});},
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "xOf:put:", "modOf:put:", "+", "/", "layerOf:", "xOf:", "modOf:", "pointerOf:put:", "followRightContour:toLayer:", "isNil", "leftContourOf:put:", "first", "rightContourOf:put:", "last", "do:", "computePosition:", "rightContourOf:", "leftContourOf:", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "fatherOf:", "whileFalse:", "isEmpty"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "diameterOf:",
fn: function (aNode) {
var self=this;
var diam;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aNode)._shapes())._first())._isKindOf_($RTEllipse());
if(smalltalk.assert($1)){
diam=_st(_st(aNode)._width())._max_(_st(aNode)._height());
diam;
} else {
diam=_st(_st(_st(_st(_st(aNode)._width()).__star(_st(aNode)._width())).__plus(_st(_st(aNode)._height()).__star(_st(aNode)._height())))._sqrt())._floor();
diam;
};
$2=diam;
return $2;
}, function($ctx1) {$ctx1.fill(self,"diameterOf:",{aNode:aNode,diam:diam},smalltalk.RTRadialTreeLayout)});},
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (nodeElements) {
var self=this;
var rootNodes,xOffset,maximumRadius;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(self["@initialLayout"])._isNil();
if(! smalltalk.assert($1)){
_st(_st(self["@initialLayout"])._new())._executeOnElements_(nodeElements);
};
rootNodes=self._rootNodesFor_(nodeElements);
$2=rootNodes;
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initialize_whoseFatherIs_(e,nil);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
self._computePosition_(e);
return self._step();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computeGap_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$3=_st($2)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._toRadialTree_withMod_(e,(0));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
xOffset=(0);
_st(rootNodes)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
maximumRadius=self._radialDraw_(e);
maximumRadius;
self._shiftTree_by_(e,_st(_st(maximumRadius).__plus(xOffset)).__at(maximumRadius));
xOffset=_st(_st(xOffset).__plus((2).__star(maximumRadius))).__plus((10));
return xOffset;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements,rootNodes:rootNodes,xOffset:xOffset,maximumRadius:maximumRadius},smalltalk.RTRadialTreeLayout)});},
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "step", "computeGap:", "toRadialTree:withMod:", "radialDraw:", "shiftTree:by:", "@", "+", "*"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._verticalGap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gap",{},smalltalk.RTRadialTreeLayout)});},
messageSends: ["verticalGap"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "halfDiameterOf:",
fn: function (aNode) {
var self=this;
var diam;
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(_st(_st(aNode)._shapes())._first())._isKindOf_($RTEllipse());
if(smalltalk.assert($1)){
diam=_st(_st(aNode)._width())._max_(_st(aNode)._height());
diam;
} else {
diam=_st(_st(_st(_st(_st(aNode)._width()).__star(_st(aNode)._width())).__plus(_st(_st(aNode)._height()).__star(_st(aNode)._height())))._sqrt())._floor();
diam;
};
$2=_st(diam).__slash((2));
return $2;
}, function($ctx1) {$ctx1.fill(self,"halfDiameterOf:",{aNode:aNode,diam:diam},smalltalk.RTRadialTreeLayout)});},
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes", "/"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutLayer:radius:from:to:",
fn: function (aCollection, oldRadius, aFromAngle, aToAngle) {
var self=this;
var delta,childRadius,maximumRadius,myRadius,fromAngle,toAngle;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
maximumRadius=oldRadius;
$1=_st(aCollection)._isEmpty();
if(! smalltalk.assert($1)){
myRadius=_st(_st(oldRadius).__plus(self._gap())).__plus(self._maximumRadius_(aCollection));
myRadius;
childRadius=_st(_st(oldRadius).__plus(self._gap())).__plus(self._maximumDiameter_(aCollection));
childRadius;
$2=_st(_st(_st(aCollection)._size()).__eq((1)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(aToAngle).__minus(aFromAngle)).__eq((2).__star(_st($Float())._pi()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($2)){
delta=(0.4).__star(_st($Float())._pi());
delta;
fromAngle=(0.8).__star(_st($Float())._pi());
fromAngle;
toAngle=_st(fromAngle).__plus(delta);
toAngle;
} else {
delta=_st(_st(aToAngle).__minus(aFromAngle)).__slash(_st(aCollection)._size());
delta;
fromAngle=aFromAngle;
fromAngle;
toAngle=_st(aFromAngle).__plus(delta);
toAngle;
};
_st(aCollection)._do_((function(child){
return smalltalk.withContext(function($ctx2) {
_st(self["@translator"])._translateTopLeftOf_to_(child,_st($Point())._r_theta_(myRadius,_st(toAngle).__minus(_st(delta).__slash((2)))));
maximumRadius=_st(maximumRadius)._max_(self._layoutLayer_radius_from_to_(self._childrenFor_(child),childRadius,fromAngle,toAngle));
maximumRadius;
fromAngle=toAngle;
fromAngle;
toAngle=_st(toAngle).__plus(delta);
return toAngle;
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
};
$3=maximumRadius;
return $3;
}, function($ctx1) {$ctx1.fill(self,"layoutLayer:radius:from:to:",{aCollection:aCollection,oldRadius:oldRadius,aFromAngle:aFromAngle,aToAngle:aToAngle,delta:delta,childRadius:childRadius,maximumRadius:maximumRadius,myRadius:myRadius,fromAngle:fromAngle,toAngle:toAngle},smalltalk.RTRadialTreeLayout)});},
messageSends: ["ifFalse:", "+", "maximumRadius:", "gap", "maximumDiameter:", "ifTrue:ifFalse:", "*", "pi", "/", "size", "-", "and:", "=", "do:", "translateTopLeftOf:to:", "r:theta:", "max:", "layoutLayer:radius:from:to:", "childrenFor:", "isEmpty"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAllElementsToTopLeft:",
fn: function (elements) {
var self=this;
var pos,min;
return smalltalk.withContext(function($ctx1) { 
pos=_st(elements)._collect_("position");
min=_st(pos)._inject_into_((0).__at((0)),(function(minimum,p){
return smalltalk.withContext(function($ctx2) {
return _st(minimum)._min_(p);
}, function($ctx2) {$ctx2.fillBlock({minimum:minimum,p:p},$ctx1)})}));
_st(elements)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(e)._translateBy_(_st(min)._negated());
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"moveAllElementsToTopLeft:",{elements:elements,pos:pos,min:min},smalltalk.RTRadialTreeLayout)});},
messageSends: ["collect:", "inject:into:", "@", "min:", "do:", "translateBy:", "negated"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aNode)._x()).__plus(_st(_st(self["@horizontalGap"]).__slash(_st(aNode)._layer())).__slash((2)))).__plus(_st(self._halfDiameterOf_(aNode)).__slash(_st(aNode)._layer()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RTRadialTreeLayout)});},
messageSends: ["+", "/", "layer", "halfDiameterOf:", "x"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "radialDraw:",
fn: function (aNode) {
var self=this;
var children,r,max;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
r=self._rOf_(aNode);
_st(self["@translator"])._translateTopLeftOf_to_(aNode,_st($Point())._r_theta_(r,self._thetaOf_(aNode)));
children=self._childrenFor_(aNode);
max=(0);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
max=_st(max)._max_(self._radialDraw_(e));
return max;
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=_st(r).__plus(max);
return $1;
}, function($ctx1) {$ctx1.fill(self,"radialDraw:",{aNode:aNode,children:children,r:r,max:max},smalltalk.RTRadialTreeLayout)});},
messageSends: ["rOf:", "translateTopLeftOf:to:", "r:theta:", "thetaOf:", "childrenFor:", "do:", "max:", "radialDraw:", "+"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateSubtreeFrom:by:",
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._theta_(_st(_st(aNode)._theta()).__plus(aFloat));
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,aFloat);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rotateSubtreeFrom:by:",{aNode:aNode,aFloat:aFloat},smalltalk.RTRadialTreeLayout)});},
messageSends: ["theta:", "+", "theta", "do:", "rotateSubtreeFrom:by:", "childrenFor:"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "spreadNodes:around:",
fn: function (nodeElements, aNode) {
var self=this;
var nodeL,nodeR,i,angle,beta,lay1;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
i=(1);
angle=(0);
_st((function(){
return smalltalk.withContext(function($ctx2) {
nodeL=self._followLeftContour_toLayer_(aNode,i);
nodeL;
nodeR=self._followRightContour_toLayer_(aNode,i);
nodeR;
return _st(_st(_st(nodeL)._isNil())._not()).__and(_st(_st(nodeR)._isNil())._not());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
angle=_st(angle)._max_(_st(_st(_st(nodeR)._theta()).__minus(_st(nodeL)._theta())).__plus(_st(_st(_st(_st(self._halfDiameterOf_(nodeR)).__plus(self._halfDiameterOf_(nodeL))).__plus(self["@horizontalGap"])).__slash(i)).__slash(self["@verticalGap"])));
angle;
i=_st(i).__plus((1));
return i;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
lay1=_st(nodeElements)._select_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(_st(e)._layer()).__eq((1));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
beta=_st(_st(_st(_st($Float())._pi()).__star((2))).__minus(angle)).__slash(_st(lay1)._size());
_st(lay1)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,_st(_st(_st(lay1)._indexOf_(e)).__minus((1))).__star(beta));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"spreadNodes:around:",{nodeElements:nodeElements,aNode:aNode,nodeL:nodeL,nodeR:nodeR,i:i,angle:angle,beta:beta,lay1:lay1},smalltalk.RTRadialTreeLayout)});},
messageSends: ["whileTrue:", "max:", "+", "/", "halfDiameterOf:", "-", "theta", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "select:", "=", "layer", "size", "*", "pi", "do:", "rotateSubtreeFrom:by:", "indexOf:"]}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toRadialTree:withMod:",
fn: function (aNode, aFloat) {
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._rOf_put_(aNode,_st(self._layerOf_(aNode)).__star(self["@verticalGap"]));
$1=_st(self._rOf_(aNode)).__eq((0));
if(smalltalk.assert($1)){
self._thetaOf_put_(aNode,(0));
} else {
self._thetaOf_put_(aNode,_st(_st(_st(self._xOf_(aNode)).__plus(aFloat)).__plus(self._modOf_(aNode))).__slash(self["@verticalGap"]));
};
children=self._childrenFor_(aNode);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._toRadialTree_withMod_(e,_st(self._modOf_(aNode)).__plus(aFloat));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"toRadialTree:withMod:",{aNode:aNode,aFloat:aFloat,children:children},smalltalk.RTRadialTreeLayout)});},
messageSends: ["rOf:put:", "*", "layerOf:", "ifTrue:ifFalse:", "thetaOf:put:", "/", "+", "modOf:", "xOf:", "=", "rOf:", "childrenFor:", "do:", "toRadialTree:withMod:"]}),
smalltalk.RTRadialTreeLayout);



smalltalk.addClass('RTAbstractRegularTreeLayout', smalltalk.RTAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
fn: function (aNumber, aNodeCollection) {
var self=this;
var collection;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
collection=_st(self["@nodesByLayer"])._at_ifAbsentPut_(aNumber,(function(){
return smalltalk.withContext(function($ctx2) {
return _st($OrderedCollection())._new();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(collection)._addAll_(aNodeCollection);
return self}, function($ctx1) {$ctx1.fill(self,"atLayer:add:",{aNumber:aNumber,aNodeCollection:aNodeCollection,collection:collection},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["at:ifAbsentPut:", "new", "addAll:"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (elements) {
var self=this;
var rootNodes;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@alreadyLayoutedNodes"]=_st($OrderedCollection())._new();
rootNodes=self._rootNodesFor_(elements);
self["@nodesByLayer"]=_st($OrderedCollection())._new();
self._layout_atPoint_atLayer_(rootNodes,_st(self._leftGap()).__at(self._topGap()),(1));
$1=self._isLayered();
if(smalltalk.assert($1)){
self._rearrangeByLayers_(elements);
};
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements,rootNodes:rootNodes},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
fn: function (boolean) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["isLayered:"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
fn: function (aNodeCollection, aPoint, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.RTAbstractRegularTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractRegularTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractRegularTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractRegularTreeLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractRegularTreeLayout.klass);


smalltalk.addClass('RTAbstractHorizontalTreeLayout', smalltalk.RTAbstractRegularTreeLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["rightCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["leftCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: []}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractHorizontalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(3);
self["@horizontalGap"]=(20);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
fn: function (aNodeCollection, aPoint, aNumber) {
var self=this;
var treeSize,childrenPosition,x,y,middleOfTree;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNodeCollection)._isEmpty();
if(smalltalk.assert($1)){
return (0);
};
x=_st(aPoint)._x();
y=_st(aPoint)._y();
_st(self["@alreadyLayoutedNodes"])._addAll_(aNodeCollection);
self._atLayer_add_(aNumber,aNodeCollection);
_st(aNodeCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
childrenPosition=_st(_st(x).__plus(_st(each)._width())).__plus(self._horizontalGap());
childrenPosition;
treeSize=_st(_st(each)._height())._max_(self._layout_atPoint_atLayer_(self._computeChildrenFor_(each),_st(childrenPosition).__at(y),_st(aNumber).__plus((1))));
treeSize;
middleOfTree=_st(_st(y).__plus(_st(treeSize).__slash((2)))).__minus(_st(_st(each)._height()).__slash((2)));
middleOfTree;
_st(self["@translator"])._translateTopLeftOf_to_(each,_st(x).__at(middleOfTree));
y=_st(_st(y).__plus(treeSize)).__plus(self._verticalGap());
y;
return self._step();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(y).__minus(_st(aPoint)._y())).__minus(self._verticalGap());
return $2;
}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,aNumber:aNumber,treeSize:treeSize,childrenPosition:childrenPosition,x:x,y:y,middleOfTree:middleOfTree},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "horizontalGap", "width", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "height", "-", "/", "translateTopLeftOf:to:", "verticalGap", "step"]}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
fn: function (aGraph) {
var self=this;
var cursor,layerDepthSize;
return smalltalk.withContext(function($ctx1) { 
cursor=self._leftGap();
_st(self["@nodesByLayer"])._do_((function(eachSetOfNodes){
return smalltalk.withContext(function($ctx2) {
layerDepthSize=_st(eachSetOfNodes)._inject_into_((0),(function(max,eachNode){
return smalltalk.withContext(function($ctx3) {
_st(self["@translator"])._translateTopLeftOf_to_(eachNode,_st(cursor).__at(_st(_st(eachNode)._encompassingRectangle())._top()));
return _st(max)._max_(_st(eachNode)._width());
}, function($ctx3) {$ctx3.fillBlock({max:max,eachNode:eachNode},$ctx2)})}));
layerDepthSize;
cursor=_st(_st(cursor).__plus(layerDepthSize)).__plus(self._horizontalGap());
return cursor;
}, function($ctx2) {$ctx2.fillBlock({eachSetOfNodes:eachSetOfNodes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph,cursor:cursor,layerDepthSize:layerDepthSize},smalltalk.RTAbstractHorizontalTreeLayout)});},
messageSends: ["leftGap", "do:", "inject:into:", "translateTopLeftOf:to:", "@", "top", "encompassingRectangle", "max:", "width", "+", "horizontalGap"]}),
smalltalk.RTAbstractHorizontalTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractHorizontalTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractHorizontalTreeLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractHorizontalTreeLayout.klass);


smalltalk.addClass('RTHorizontalTreeLayout', smalltalk.RTAbstractHorizontalTreeLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTHorizontalTreeLayout)});},
messageSends: ["childrenFor:except:"]}),
smalltalk.RTHorizontalTreeLayout);



smalltalk.addClass('RTAbstractVerticalTreeLayout', smalltalk.RTAbstractRegularTreeLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTAbstractVerticalTreeLayout)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractVerticalTreeLayout)});},
messageSends: ["initialize"]}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
fn: function (aNodeCollection, aPoint, aNumber) {
var self=this;
var treeSize,childrenPosition,x,y,middleOfTree;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(aNodeCollection)._isEmpty();
if(smalltalk.assert($1)){
return (0);
};
x=_st(aPoint)._x();
y=_st(aPoint)._y();
_st(self["@alreadyLayoutedNodes"])._addAll_(aNodeCollection);
self._atLayer_add_(aNumber,aNodeCollection);
_st(aNodeCollection)._do_((function(each){
return smalltalk.withContext(function($ctx2) {
childrenPosition=_st(_st(y).__plus(_st(each)._height())).__plus(self._verticalGap());
childrenPosition;
treeSize=_st(_st(each)._width())._max_(self._layout_atPoint_atLayer_(self._computeChildrenFor_(each),_st(x).__at(childrenPosition),_st(aNumber).__plus((1))));
treeSize;
middleOfTree=_st(_st(x).__plus(_st(treeSize).__slash((2)))).__minus(_st(_st(each)._width()).__slash((2)));
middleOfTree;
_st(self["@translator"])._translateTopLeftOf_to_(each,_st(middleOfTree).__at(y));
x=_st(_st(x).__plus(treeSize)).__plus(self._horizontalGap());
x;
return self._step();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
$2=_st(_st(x).__minus(_st(aPoint)._x())).__minus(self._horizontalGap());
return $2;
}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,aNumber:aNumber,treeSize:treeSize,childrenPosition:childrenPosition,x:x,y:y,middleOfTree:middleOfTree},smalltalk.RTAbstractVerticalTreeLayout)});},
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translateTopLeftOf:to:", "horizontalGap", "step"]}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
fn: function (aGraph) {
var self=this;
var cursor,layerDepthSize;
return smalltalk.withContext(function($ctx1) { 
cursor=self._topGap();
_st(self["@nodesByLayer"])._do_((function(eachSetOfNodes){
return smalltalk.withContext(function($ctx2) {
layerDepthSize=_st(eachSetOfNodes)._inject_into_((0),(function(max,eachNode){
return smalltalk.withContext(function($ctx3) {
_st(eachNode)._translateTo_(_st(_st(_st(eachNode)._bounds())._left()).__at(cursor));
return _st(max)._max_(_st(eachNode)._height());
}, function($ctx3) {$ctx3.fillBlock({max:max,eachNode:eachNode},$ctx2)})}));
layerDepthSize;
cursor=_st(_st(cursor).__plus(layerDepthSize)).__plus(self._verticalGap());
return cursor;
}, function($ctx2) {$ctx2.fillBlock({eachSetOfNodes:eachSetOfNodes},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph,cursor:cursor,layerDepthSize:layerDepthSize},smalltalk.RTAbstractVerticalTreeLayout)});},
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"]}),
smalltalk.RTAbstractVerticalTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractVerticalTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractVerticalTreeLayout.klass)});},
messageSends: ["=", "name"]}),
smalltalk.RTAbstractVerticalTreeLayout.klass);


smalltalk.addClass('RTTreeLayout', smalltalk.RTAbstractVerticalTreeLayout, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTTreeLayout)});},
messageSends: ["childrenFor:except:"]}),
smalltalk.RTTreeLayout);



smalltalk.addClass('RTClusterLayout', smalltalk.RTAbstractGraphLayout, ['externalLayer', 'maxLayer', 'maxAbcissa'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
fn: function (aNode) {
var self=this;
var children,previous;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
children=self._childrenFor_(aNode);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
$2=_st(_st(self["@externalLayer"])._first()).__eq(aNode);
if(! smalltalk.assert($2)){
previous=_st(self["@externalLayer"])._at_(_st(_st(self["@externalLayer"])._indexOf_(aNode)).__minus((1)));
previous;
$3=_st(self._fatherOf_(previous)).__eq(self._fatherOf_(aNode));
if(smalltalk.assert($3)){
self._xOf_put_(aNode,_st(self._xOf_(previous)).__plus(_st(self["@horizontalGap"]).__slash((2))));
} else {
self._xOf_put_(aNode,_st(self._xOf_(previous)).__plus(self["@horizontalGap"]));
};
};
} else {
self._xOf_put_(aNode,_st(_st(self._xOf_(self._leftContourOf_(aNode))).__plus(self._xOf_(self._rightContourOf_(aNode)))).__slash((2)));
};
return self}, function($ctx1) {$ctx1.fill(self,"computePosition:",{aNode:aNode,children:children,previous:previous},smalltalk.RTClusterLayout)});},
messageSends: ["childrenFor:", "do:", "computePosition:", "ifTrue:ifFalse:", "ifFalse:", "at:", "-", "indexOf:", "xOf:put:", "+", "/", "xOf:", "=", "fatherOf:", "first", "rightContourOf:", "leftContourOf:", "isEmpty"]}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (nodeElements) {
var self=this;
var root,gap;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(_st(nodeElements)._size()).__eq((1));
if(smalltalk.assert($1)){
$2=self;
return $2;
};
root=self._rootNodesFor_(nodeElements);
_st(root)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._initializeNode_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(root)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._computePosition_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
self["@maxLayer"]=_st(_st(root)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._layerOf_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})))._max();
$3=_st(_st(root)._size()).__gt((1));
if(smalltalk.assert($3)){
self["@maxLayer"]=_st(self["@maxLayer"]).__plus((1));
self["@maxLayer"];
};
self["@maxAbcissa"]=_st(self._xOf_(_st(self["@externalLayer"])._last())).__plus(self["@horizontalGap"]);
gap=_st(_st(_st(self["@maxAbcissa"]).__slash((2))).__slash(_st($Float())._pi())).__slash(self["@maxLayer"]);
self["@verticalGap"]=_st(self["@verticalGap"])._max_(gap);
_st(root)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
self._draw_(e);
return self._step();
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements,root:root,gap:gap},smalltalk.RTClusterLayout)});},
messageSends: ["ifTrue:", "=", "size", "rootNodesFor:", "do:", "initializeNode:", "computePosition:", "max", "collect:", "layerOf:", "+", ">", "xOf:", "last", "/", "pi", "max:", "draw:", "step"]}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
fn: function (aNode) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._draw_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@translator"])._translateTopLeftOf_to_(aNode,_st($Point())._r_theta_(_st(_st(self["@maxLayer"]).__minus(self._layerOf_(aNode))).__star(self["@verticalGap"]),_st(_st(_st(_st(self["@maxAbcissa"]).__minus(self._xOf_(aNode))).__slash(self["@maxAbcissa"])).__star((2))).__star(_st($Float())._pi())));
return self}, function($ctx1) {$ctx1.fill(self,"draw:",{aNode:aNode},smalltalk.RTClusterLayout)});},
messageSends: ["do:", "draw:", "childrenFor:", "translateTopLeftOf:to:", "r:theta:", "*", "-", "layerOf:", "pi", "/", "xOf:"]}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTClusterLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(30);
self["@horizontalGap"]=(20);
self["@externalLayer"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTClusterLayout)});},
messageSends: ["initialize", "new"]}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeNode:",
fn: function (aNode) {
var self=this;
var children;
return smalltalk.withContext(function($ctx1) { 
var $1;
children=self._childrenFor_(aNode);
_st(children)._do_((function(e){
return smalltalk.withContext(function($ctx2) {
self._initializeNode_(e);
return self._fatherOf_put_(e,aNode);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
$1=_st(children)._isEmpty();
if(smalltalk.assert($1)){
self._layerOf_put_(aNode,(0));
_st(self["@externalLayer"])._add_(aNode);
} else {
self._layerOf_put_(aNode,_st(_st(_st(children)._collect_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._layerOf_(e);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})})))._max()).__plus((1)));
self._leftContourOf_put_(aNode,_st(children)._first());
self._rightContourOf_put_(aNode,_st(children)._last());
};
return self}, function($ctx1) {$ctx1.fill(self,"initializeNode:",{aNode:aNode,children:children},smalltalk.RTClusterLayout)});},
messageSends: ["childrenFor:", "do:", "initializeNode:", "fatherOf:put:", "ifTrue:ifFalse:", "layerOf:put:", "add:", "+", "max", "collect:", "layerOf:", "leftContourOf:put:", "first", "rightContourOf:put:", "last", "isEmpty"]}),
smalltalk.RTClusterLayout);



smalltalk.addClass('RTForceBasedLayout', smalltalk.RTEdgeDrivenLayout, ['layoutInitial', 'oldPositions', 'nodes', 'weights', 'strengths', 'lengths', 'gravity', 'friction', 'theta', 'charge', 'alpha', 'charges', 'strength', 'length', 'fixedNodes', 'center'], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "accumulate:",
fn: function (aQuad) {
var self=this;
var cx,cy,k,random;
function $Random(){return smalltalk.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7,$8;
cx=(0);
cy=(0);
$1=aQuad;
_st($1)._charge_((0));
_st($1)._cx_((0));
$2=_st($1)._cy_((0));
random=_st($Random())._new();
$3=_st(aQuad)._leaf();
if(! smalltalk.assert($3)){
_st(_st(aQuad)._nodes())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$4=_st(e)._isNil();
if(! smalltalk.assert($4)){
self._accumulate_(e);
_st(aQuad)._charge_(_st(_st(aQuad)._charge()).__plus(_st(e)._charge()));
cx=_st(cx).__plus(_st(_st(e)._charge()).__star(_st(e)._cx()));
cx;
cy=_st(cy).__plus(_st(_st(e)._charge()).__star(_st(e)._cy()));
return cy;
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
};
$5=_st(_st(aQuad)._node())._isNil();
if(! smalltalk.assert($5)){
$6=_st(aQuad)._leaf();
if(! smalltalk.assert($6)){
_st(_st(aQuad)._node())._translateTo_(_st(_st(_st(aQuad)._node())._position()).__plus(_st(_st(_st(random)._next()).__minus((0.5))).__at(_st(_st(random)._next()).__minus((0.5)))));
};
k=_st(self["@alpha"]).__star(self._chargeOf_(_st(aQuad)._node()));
k;
_st(aQuad)._charge_(_st(_st(aQuad)._charge()).__plus(k));
cx=_st(cx).__plus(_st(k).__star(_st(_st(_st(aQuad)._node())._position())._x()));
cx;
cy=_st(cy).__plus(_st(k).__star(_st(_st(_st(aQuad)._node())._position())._y()));
cy;
};
$7=_st(_st(aQuad)._charge()).__eq((0));
if(smalltalk.assert($7)){
$8=self;
return $8;
};
_st(aQuad)._cx_(_st(cx).__slash(_st(aQuad)._charge()));
_st(aQuad)._cy_(_st(cy).__slash(_st(aQuad)._charge()));
return self}, function($ctx1) {$ctx1.fill(self,"accumulate:",{aQuad:aQuad,cx:cx,cy:cy,k:k,random:random},smalltalk.RTForceBasedLayout)});},
messageSends: ["charge:", "cx:", "cy:", "new", "ifFalse:", "do:", "accumulate:", "+", "charge", "*", "cx", "cy", "isNil", "nodes", "leaf", "translateTo:", "@", "-", "next", "position", "node", "chargeOf:", "x", "y", "ifTrue:", "=", "/"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "charge:",
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@charge"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"charge:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "chargeOf:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
var $early={};
try {
$1=_st(self["@charges"])._at_ifAbsent_(aNode,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self["@charge"];
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"chargeOf:",{aNode:aNode},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:ifAbsent:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
fn: function (nodeElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._start_(nodeElements);
_st((function(){
return smalltalk.withContext(function($ctx2) {
self["@alpha"]=_st(self["@alpha"]).__star((0.99));
self["@alpha"];
return _st(self["@alpha"]).__gt((0.005));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
return self._step();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
self["@alpha"]=(0);
_st(self["@nodes"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return _st(self["@translator"])._translateTopLeftOf_to_(e,_st(e)._position());
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{nodeElements:nodeElements},smalltalk.RTForceBasedLayout)});},
messageSends: ["start:", "whileTrue:", "step", "*", ">", "do:", "translateTopLeftOf:to:", "position"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fix:at:",
fn: function (aNode, aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@fixedNodes"])._at_put_(aNode,aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"fix:at:",{aNode:aNode,aPoint:aPoint},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gravityAt:",
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"gravityAt:",{aPoint:aPoint},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialPositionOfNodes:",
fn: function (nodeElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@layoutInitial"])._new())._executeOnElements_(nodeElements);
return self}, function($ctx1) {$ctx1.fill(self,"initialPositionOfNodes:",{nodeElements:nodeElements},smalltalk.RTForceBasedLayout)});},
messageSends: ["executeOnElements:", "new"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
fn: function () {
var self=this;
function $RTGridLayout(){return smalltalk.RTGridLayout||(typeof RTGridLayout=="undefined"?nil:RTGridLayout)}
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTForceBasedLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@layoutInitial"]=$RTGridLayout();
self["@fixedNodes"]=_st($Dictionary())._new();
self["@strengths"]=_st($Dictionary())._new();
self["@lengths"]=_st($Dictionary())._new();
self["@charges"]=_st($Dictionary())._new();
self["@strength"]=(1);
self["@length"]=(20);
self["@charge"]=(-30);
self["@gravity"]=(0.1);
self["@friction"]=(0.9);
self["@theta"]=(0.8);
self["@center"]=(200).__at((200));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTForceBasedLayout)});},
messageSends: ["initialize", "new", "@"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixed:",
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedNodes"])._includesKey_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixed:",{aNode:aNode},smalltalk.RTForceBasedLayout)});},
messageSends: ["includesKey:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentIteraction"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent:",{anInteger:anInteger},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "length:",
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@length"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"length:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthOf:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
var $early={};
try {
$1=_st(self["@lengths"])._at_ifAbsent_(anEdge,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self["@length"];
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"lengthOf:",{anEdge:anEdge},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:ifAbsent:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes:",
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=elements;
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{elements:elements},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
fn: function (elements, edgesCol) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nodes_(elements);
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edgesCol:edgesCol},smalltalk.RTForceBasedLayout)});},
messageSends: ["nodes:", "applyOn:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "repulse:from:",
fn: function (aNode, aQuad) {
var self=this;
var dx,dy,dn,k,p;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
dx=_st(_st(aQuad)._cx()).__minus(_st(_st(aNode)._position())._x());
dy=_st(_st(aQuad)._cy()).__minus(_st(_st(aNode)._position())._y());
$1=_st(_st(dx)._closeTo_((0)))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(dy)._closeTo_((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
dn=(1).__slash(_st(_st(_st(dx).__star(dx)).__plus(_st(dy).__star(dy)))._sqrt());
dn;
p=_st(self["@oldPositions"])._at_(aNode);
p;
$2=_st(_st(aQuad)._node()).__tild_eq(aNode);
if(smalltalk.assert($2)){
$3=_st(_st(_st(_st(_st(aQuad)._corner())._x()).__minus(_st(_st(aQuad)._origin())._x())).__star(dn)).__lt(self["@theta"]);
if(smalltalk.assert($3)){
k=_st(_st(_st(aQuad)._charge()).__star(dn)).__star(dn);
k;
_st(self["@oldPositions"])._at_put_(aNode,_st(_st(_st(p)._x()).__minus(_st(dx).__star(k))).__at(_st(_st(p)._y()).__minus(_st(dy).__star(k))));
$4=self;
return $4;
};
$5=_st(_st(_st(_st(aQuad)._node())._isNil())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(dn).__lt((1)._e9());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(smalltalk.assert($5)){
k=_st(_st(_st(self._chargeOf_(_st(aQuad)._node())).__star(dn)).__star(dn)).__star(self["@alpha"]);
k;
_st(self["@oldPositions"])._at_put_(aNode,_st(_st(_st(p)._x()).__minus(_st(dx).__star(k))).__at(_st(_st(p)._y()).__minus(_st(dy).__star(k))));
};
};
};
$6=_st(_st(_st(aQuad)._charge())._closeTo_((0)))._not();
if(smalltalk.assert($6)){
_st(_st(aQuad)._nodes())._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$7=_st(e)._isNil();
if(! smalltalk.assert($7)){
return self._repulse_from_(aNode,e);
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"repulse:from:",{aNode:aNode,aQuad:aQuad,dx:dx,dy:dy,dn:dn,k:k,p:p},smalltalk.RTForceBasedLayout)});},
messageSends: ["-", "x", "position", "cx", "y", "cy", "ifFalse:", "/", "sqrt", "+", "*", "at:", "ifTrue:", "charge", "at:put:", "@", "<", "origin", "corner", "chargeOf:", "node", "and:", "e9", "not", "isNil", "~=", "closeTo:", "do:", "repulse:from:", "nodes"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:charge:",
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@charges"])._at_put_(aNode,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:charge:",{aNode:aNode,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:length:",
fn: function (anEdge, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lengths"])._at_put_(anEdge,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:length:",{anEdge:anEdge,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:length:strength:",
fn: function (anEdge, aFloat, another) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lengths"])._at_put_(anEdge,aFloat);
_st(self["@strengths"])._at_put_(anEdge,another);
return self}, function($ctx1) {$ctx1.fill(self,"set:length:strength:",{anEdge:anEdge,aFloat:aFloat,another:another},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:strength:",
fn: function (anEdge, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@strengths"])._at_put_(anEdge,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:strength:",{anEdge:anEdge,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
fn: function (nodeElements) {
var self=this;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
self._initialPositionOfNodes_(nodeElements);
self["@weights"]=_st($Dictionary())._new();
self["@oldPositions"]=_st($Dictionary())._new();
self["@nodes"]=nodeElements;
_st(self["@nodes"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
_st(self["@weights"])._add_(_st($Association())._key_value_(e,(0)));
return _st(self["@oldPositions"])._add_(_st($Association())._key_value_(e,_st(e)._position()));
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@edges"])._do_((function(e){
var from,to;
return smalltalk.withContext(function($ctx2) {
from=_st(e)._from();
from;
to=_st(e)._to();
to;
_st(self["@weights"])._at_put_(from,_st(_st(self["@weights"])._at_(from)).__plus((1)));
return _st(self["@weights"])._at_put_(to,_st(_st(self["@weights"])._at_(to)).__plus((1)));
}, function($ctx2) {$ctx2.fillBlock({e:e,from:from,to:to},$ctx1)})}));
self["@alpha"]=(0.1);
return self}, function($ctx1) {$ctx1.fill(self,"start:",{nodeElements:nodeElements},smalltalk.RTForceBasedLayout)});},
messageSends: ["initialPositionOfNodes:", "new", "do:", "add:", "key:value:", "position", "from", "to", "at:put:", "+", "at:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
fn: function () {
var self=this;
var from,to,fp,tp,x,y,len,k,quad,old;
function $RTQuadTree(){return smalltalk.RTQuadTree||(typeof RTQuadTree=="undefined"?nil:RTQuadTree)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
smalltalk.RTForceBasedLayout.superclass.fn.prototype._step.apply(_st(self), []);
_st(self["@edges"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
from=_st(e)._from();
from;
fp=_st(from)._position();
fp;
to=_st(e)._to();
to;
tp=_st(to)._position();
tp;
x=_st(_st(tp)._x()).__minus(_st(fp)._x());
x;
y=_st(_st(tp)._y()).__minus(_st(fp)._y());
y;
len=_st(_st(_st(x).__star(x)).__plus(_st(y).__star(y)))._sqrt();
len;
$1=_st(_st(len)._closeTo_((0)))._not();
if(smalltalk.assert($1)){
len=_st(_st(_st(self["@alpha"]).__star(self._strengthOf_(e))).__star(_st(len).__minus(self._lengthOf_(e)))).__slash(len);
len;
x=_st(x).__star(len);
x;
y=_st(y).__star(len);
y;
k=_st(_st(self["@weights"])._at_(from)).__slash(_st(_st(self["@weights"])._at_(from)).__plus(_st(self["@weights"])._at_(to)));
k;
_st(to)._translateTo_(_st(_st(_st(tp)._x()).__minus(_st(x).__star(k))).__at(_st(_st(tp)._y()).__minus(_st(y).__star(k))));
k=(1).__minus(k);
k;
return _st(from)._translateTo_(_st(_st(_st(fp)._x()).__plus(_st(x).__star(k))).__at(_st(_st(fp)._y()).__plus(_st(y).__star(k))));
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
k=_st(self["@alpha"]).__star(self["@gravity"]);
$2=_st(_st(k)._closeTo_((0)))._not();
if(smalltalk.assert($2)){
x=_st(self["@center"])._x();
x;
y=_st(self["@center"])._y();
y;
_st(self["@nodes"])._do_((function(ea){
var pos;
return smalltalk.withContext(function($ctx2) {
pos=_st(ea)._position();
pos;
return _st(ea)._translateTo_(_st(_st(_st(pos)._x()).__plus(_st(_st(x).__minus(_st(pos)._x())).__star(k))).__at(_st(_st(pos)._y()).__plus(_st(_st(y).__minus(_st(pos)._y())).__star(k))));
}, function($ctx2) {$ctx2.fillBlock({ea:ea,pos:pos},$ctx1)})}));
};
quad=_st($RTQuadTree())._withAll_(self["@nodes"]);
self._accumulate_(quad);
_st(self["@nodes"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
$3=self._isFixed_(e);
if(smalltalk.assert($3)){
return _st(self["@translator"])._translateTopLeftOf_to_(e,_st(self["@fixedNodes"])._at_(e));
} else {
return self._repulse_from_(e,quad);
};
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
_st(self["@nodes"])._do_((function(e){
return smalltalk.withContext(function($ctx2) {
old=_st(e)._position();
old;
_st(e)._translateTo_(_st(_st(_st(old)._x()).__minus(_st(_st(_st(_st(self["@oldPositions"])._at_(e))._x()).__minus(_st(old)._x())).__star(self["@friction"]))).__at(_st(_st(old)._y()).__minus(_st(_st(_st(_st(self["@oldPositions"])._at_(e))._y()).__minus(_st(old)._y())).__star(self["@friction"]))));
return _st(self["@oldPositions"])._at_put_(e,old);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"step",{from:from,to:to,fp:fp,tp:tp,x:x,y:y,len:len,k:k,quad:quad,old:old},smalltalk.RTForceBasedLayout)});},
messageSends: ["step", "do:", "from", "position", "to", "-", "x", "y", "sqrt", "+", "*", "ifTrue:", "/", "lengthOf:", "strengthOf:", "at:", "translateTo:", "@", "not", "closeTo:", "withAll:", "accumulate:", "ifFalse:ifTrue:", "repulse:from:", "translateTopLeftOf:to:", "isFixed:", "at:put:"]}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "strength:",
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strength"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"strength:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
messageSends: []}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "strengthOf:",
fn: function (anEdge) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
var $early={};
try {
$1=_st(self["@strengths"])._at_ifAbsent_(anEdge,(function(){
return smalltalk.withContext(function($ctx2) {
$2=self["@strength"];
throw $early=[$2];
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"strengthOf:",{anEdge:anEdge},smalltalk.RTForceBasedLayout)});},
messageSends: ["at:ifAbsent:"]}),
smalltalk.RTForceBasedLayout);



smalltalk.addClass('RTLayoutTranslator', smalltalk.RTObject, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "nbCycles:",
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"nbCycles:",{anInteger:anInteger},smalltalk.RTLayoutTranslator)});},
messageSends: []}),
smalltalk.RTLayoutTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RTLayoutTranslator)});},
messageSends: ["subclassResponsibility"]}),
smalltalk.RTLayoutTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTopLeftOf:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translate_to_(element,_st(newPosition).__plus(_st(_st(element)._extent()).__slash((2))));
return self}, function($ctx1) {$ctx1.fill(self,"translateTopLeftOf:to:",{element:element,newPosition:newPosition},smalltalk.RTLayoutTranslator)});},
messageSends: ["translate:to:", "+", "/", "extent"]}),
smalltalk.RTLayoutTranslator);


smalltalk.RTLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self["@defaultTranslator"];
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=self["@defaultTranslator"];
return $2;
};
self["@defaultTranslator"]=_st(self._defaultClass())._new();
$3=self["@defaultTranslator"];
return $3;
}, function($ctx1) {$ctx1.fill(self,"default",{},smalltalk.RTLayoutTranslator.klass)});},
messageSends: ["ifNotNil:", "new", "defaultClass"]}),
smalltalk.RTLayoutTranslator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultClass",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allSubclasses())._detect_("isDefault");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.RTLayoutTranslator.klass)});},
messageSends: ["detect:", "allSubclasses"]}),
smalltalk.RTLayoutTranslator.klass);


smalltalk.addClass('RTDirectLayoutTranslator', smalltalk.RTLayoutTranslator, [], 'Roassal2-Layouts');
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RTDirectLayoutTranslator)});},
messageSends: ["translateTo:"]}),
smalltalk.RTDirectLayoutTranslator);


smalltalk.addMethod(
smalltalk.method({
selector: "isDefault",
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isDefault",{},smalltalk.RTDirectLayoutTranslator.klass)});},
messageSends: []}),
smalltalk.RTDirectLayoutTranslator.klass);


