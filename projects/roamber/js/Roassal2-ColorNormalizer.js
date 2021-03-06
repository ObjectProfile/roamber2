smalltalk.addPackage('Roassal2-ColorNormalizer');
smalltalk.addClass('RTNAbstractNormalizer', smalltalk.RTObject, ['command'], 'Roassal2-ColorNormalizer');
smalltalk.RTNAbstractNormalizer.comment="A RONAbstractNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09command:\x09\x09<Object>\x0a\x0acommand\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "command",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@command"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"command",{},smalltalk.RTNAbstractNormalizer)})},
args: [],
source: "command\x0a\x09\x0a\x09^command",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "command:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RTNAbstractNormalizer)})},
args: ["aBlock"],
source: "command: aBlock\x0a\x09\x0a\x09command := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNAbstractNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity},smalltalk.RTNAbstractNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTNAbstractNormalizer);



smalltalk.addClass('RTMultipleColorLinearNormalizer', smalltalk.RTNAbstractNormalizer, ['normalizers'], 'Roassal2-ColorNormalizer');
smalltalk.RTMultipleColorLinearNormalizer.comment="A ROMultipleColorLinearNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09normalizers:\x09\x09<Object>\x0a\x0anormalizers\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "detectNormalizerFor:",
category: 'private-accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
var $early={};
try {
_st(self["@normalizers"])._keysAndValuesDo_((function(range,norm){
return smalltalk.withContext(function($ctx2) {
$1=_st(range)._rangeIncludes_(aValue);
if(smalltalk.assert($1)){
$2=norm;
throw $early=[$2];
};
}, function($ctx2) {$ctx2.fillBlock({range:range,norm:norm},$ctx1)})}));
self._error_(_st(_st(aValue)._asString()).__comma(" not in declared ranges"));
return self}
catch(e) {if(e===$early)return e[0]; throw e}
}, function($ctx1) {$ctx1.fill(self,"detectNormalizerFor:",{aValue:aValue},smalltalk.RTMultipleColorLinearNormalizer)})},
args: ["aValue"],
source: "detectNormalizerFor: aValue\x0a\x0a\x09normalizers keysAndValuesDo: [:range :norm |\x0a\x09\x09(range rangeIncludes: aValue)\x0a\x09\x09\x09ifTrue: [^ norm] ].\x0a\x09self error: aValue asString, ' not in declared ranges'",
messageSends: ["keysAndValuesDo:", "ifTrue:", "rangeIncludes:", "error:", ",", "asString"],
referencedClasses: []
}),
smalltalk.RTMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTMultipleColorLinearNormalizer)})},
args: [],
source: "initialize\x0a\x0a\x09command := #yourself",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._rtValue_(anEntity);
$1=_st(self._detectNormalizerFor_(value))._rtValue_(value);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity,value:value},smalltalk.RTMultipleColorLinearNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x0a\x09| value |\x0a\x09value := self command rtValue: anEntity.\x0a\x09\x22detect range for the value, retrieve and call corresponding normalizers\x22\x0a\x09^ (self detectNormalizerFor: value) rtValue: value",
messageSends: ["rtValue:", "command", "detectNormalizerFor:"],
referencedClasses: []
}),
smalltalk.RTMultipleColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
category: 'initialize-release',
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
var size,start,end;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $RTNColorLinearNormalizer(){return smalltalk.RTNColorLinearNormalizer||(typeof RTNColorLinearNormalizer=="undefined"?nil:RTNColorLinearNormalizer)}
return smalltalk.withContext(function($ctx1) { 
self["@normalizers"]=_st($Dictionary())._new();
self._assert_(_st(_st(anArrayOfNumbers)._size()).__eq(_st(anArrayOfColors)._size()));
size=_st(anArrayOfNumbers)._size();
(1)._to_do_(_st(size).__minus((1)),(function(i){
return smalltalk.withContext(function($ctx2) {
start=_st(anArrayOfNumbers)._at_(i);
start;
end=_st(anArrayOfNumbers)._at_(_st(i).__plus((1)));
end;
return _st(self["@normalizers"])._at_put_(_st(start)._to_(end),_st($RTNColorLinearNormalizer())._inContext_lowColor_highColor_(_st($Array())._with_with_(start,end),_st(anArrayOfColors)._at_(i),_st(anArrayOfColors)._at_(_st(i).__plus((1)))));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors,size:size,start:start,end:end},smalltalk.RTMultipleColorLinearNormalizer)})},
args: ["anArrayOfNumbers", "anArrayOfColors"],
source: "valueRange: anArrayOfNumbers colorRange: anArrayOfColors\x0a\x09\x22 {1. 2. 3} {Color red. Color yellow. Color green}\x22\x0a\x09\x0a\x09| size start end |\x0a\x09normalizers := Dictionary new.\x0a\x09self assert: anArrayOfNumbers size = anArrayOfColors size.\x0a\x09size := anArrayOfNumbers size.\x0a\x091 to: size - 1 do: [ :i |\x0a\x09\x09start := anArrayOfNumbers at: i.\x0a\x09\x09end :=  anArrayOfNumbers at: i + 1.\x0a\x09\x09normalizers\x0a\x09\x09\x09at: (start to: end)\x0a\x09\x09\x09put: (RTNColorLinearNormalizer\x0a\x09\x09\x09\x09\x09\x09inContext: (Array with: start with: end)\x0a\x09\x09\x09\x09\x09\x09lowColor: (anArrayOfColors at: i)\x0a\x09\x09\x09\x09\x09\x09highColor: (anArrayOfColors at: i + 1))\x0a\x09].",
messageSends: ["new", "assert:", "=", "size", "to:do:", "-", "at:", "+", "at:put:", "to:", "inContext:lowColor:highColor:", "with:with:"],
referencedClasses: ["Dictionary", "Array", "RTNColorLinearNormalizer"]
}),
smalltalk.RTMultipleColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "valueRange:colorRange:",
category: 'instance creation',
fn: function (anArrayOfNumbers,anArrayOfColors){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._valueRange_colorRange_(anArrayOfNumbers,anArrayOfColors);
return $1;
}, function($ctx1) {$ctx1.fill(self,"valueRange:colorRange:",{anArrayOfNumbers:anArrayOfNumbers,anArrayOfColors:anArrayOfColors},smalltalk.RTMultipleColorLinearNormalizer.klass)})},
args: ["anArrayOfNumbers", "anArrayOfColors"],
source: "valueRange: anArrayOfNumbers colorRange: anArrayOfColors\x0a\x0a\x09^ self new valueRange: anArrayOfNumbers colorRange: anArrayOfColors",
messageSends: ["valueRange:colorRange:", "new"],
referencedClasses: []
}),
smalltalk.RTMultipleColorLinearNormalizer.klass);


smalltalk.addClass('RTNIdentityNormalizer', smalltalk.RTNAbstractNormalizer, ['dictionary', 'colorIndex'], 'Roassal2-ColorNormalizer');
smalltalk.RTNIdentityNormalizer.comment="A RONIdentityNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09colorIndex:\x09\x09<Object>\x0a\x09dictionary:\x09\x09<Object>\x0a\x0acolorIndex\x0a\x09- xxxxx\x0a\x0adictionary\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "colorNames",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["black", "veryVeryDarkGray", "veryDarkGray", "darkGray", "gray", "lightGray", "veryLightGray", "veryVeryLightGray", "white", "red", "yellow", "green", "cyan", "blue", "magenta", "brown", "orange", "lightRed", "lightYellow", "lightGreen", "lightCyan", "lightBlue", "lightMagenta", "lightBrown", "lightOrange", "transparent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colorNames",{},smalltalk.RTNIdentityNormalizer)})},
args: [],
source: "colorNames\x0a\x09^ #(#black #veryVeryDarkGray #veryDarkGray #darkGray #gray #lightGray #veryLightGray #veryVeryLightGray #white #red #yellow #green #cyan #blue #magenta #brown #orange #lightRed #lightYellow #lightGreen #lightCyan #lightBlue #lightMagenta #lightBrown #lightOrange #transparent)",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $IdentityDictionary(){return smalltalk.IdentityDictionary||(typeof IdentityDictionary=="undefined"?nil:IdentityDictionary)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTNIdentityNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@colorIndex"]=(0);
self["@dictionary"]=_st($IdentityDictionary())._new();
self["@command"]="yourself";
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTNIdentityNormalizer)})},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09colorIndex := 0.\x0a\x09dictionary := IdentityDictionary new.\x0a\x09command := #yourself",
messageSends: ["initialize", "new"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.RTNIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
category: 'private',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@colorIndex"]=_st(_st(self["@colorIndex"]).__backslash_backslash(_st(self._colorNames())._size())).__plus((1));
$1=_st($Color())._perform_(_st(self._colorNames())._at_(self["@colorIndex"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RTNIdentityNormalizer)})},
args: [],
source: "nextColor\x0a\x09\x0a\x09colorIndex := colorIndex \x5c\x5c self colorNames size + 1.\x0a\x09^Color perform: (self colorNames at: colorIndex)",
messageSends: ["+", "\x5c\x5c", "size", "colorNames", "perform:", "at:"],
referencedClasses: ["Color"]
}),
smalltalk.RTNIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@dictionary"])._at_ifAbsentPut_(_st(self["@command"])._rtValue_(anEntity),(function(){
return smalltalk.withContext(function($ctx2) {
return self._nextColor();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity},smalltalk.RTNIdentityNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x0a\x09^dictionary\x0a\x09\x09at: (command rtValue: anEntity)\x0a\x09\x09ifAbsentPut: [ self nextColor ]",
messageSends: ["at:ifAbsentPut:", "rtValue:", "nextColor"],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "setIndexTo:",
category: 'private',
fn: function (colorAsSymbol){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colorIndex"]=_st(_st(self._colorNames())._indexOf_(colorAsSymbol)).__minus((1));
return self}, function($ctx1) {$ctx1.fill(self,"setIndexTo:",{colorAsSymbol:colorAsSymbol},smalltalk.RTNIdentityNormalizer)})},
args: ["colorAsSymbol"],
source: "setIndexTo: colorAsSymbol\x0a\x09\x22colorAsSymbol has to be one of Color colorNames. \x0a\x09The method set the current index to the color given in parameter\x22\x0a\x09\x0a\x09colorIndex := (self colorNames indexOf: colorAsSymbol) - 1",
messageSends: ["-", "indexOf:", "colorNames"],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtBlue",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setIndexTo_("blue");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"beginingAtBlue",{},smalltalk.RTNIdentityNormalizer.klass)})},
args: [],
source: "beginingAtBlue\x0a\x09^ self new\x0a\x09\x09\x09setIndexTo: #blue;\x0a\x09\x09\x09yourself",
messageSends: ["setIndexTo:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "beginingAtRed",
category: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._setIndexTo_("red");
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"beginingAtRed",{},smalltalk.RTNIdentityNormalizer.klass)})},
args: [],
source: "beginingAtRed\x0a\x09^ self new\x0a\x09\x09\x09setIndexTo: #red;\x0a\x09\x09\x09yourself",
messageSends: ["setIndexTo:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:",
category: 'instance creation',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._command_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withCommand:",{aBlock:aBlock},smalltalk.RTNIdentityNormalizer.klass)})},
args: ["aBlock"],
source: "withCommand: aBlock\x0a\x09\x0a\x09^(self new)\x0a\x09\x09command: aBlock;\x0a\x09\x09yourself",
messageSends: ["command:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTNIdentityNormalizer.klass);


smalltalk.addClass('RTNExplicitIdentityNormalizer', smalltalk.RTNIdentityNormalizer, ['colors', 'defaultColor'], 'Roassal2-ColorNormalizer');
smalltalk.RTNExplicitIdentityNormalizer.comment="A RONExplicitIdentityNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09colors:\x09\x09<Object>\x0a\x09defaultColor:\x09\x09<Object>\x0a\x0acolors\x0a\x09- xxxxx\x0a\x0adefaultColor\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "colors",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@colors"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"colors",{},smalltalk.RTNExplicitIdentityNormalizer)})},
args: [],
source: "colors\x0a\x09\x0a\x09^colors",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "colors:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@colors"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"colors:",{anObject:anObject},smalltalk.RTNExplicitIdentityNormalizer)})},
args: ["anObject"],
source: "colors: anObject\x0a\x09\x0a\x09colors := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@defaultColor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultColor",{},smalltalk.RTNExplicitIdentityNormalizer)})},
args: [],
source: "defaultColor\x0a\x09\x0a\x09^defaultColor",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultColor:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@defaultColor"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"defaultColor:",{anObject:anObject},smalltalk.RTNExplicitIdentityNormalizer)})},
args: ["anObject"],
source: "defaultColor: anObject\x0a\x09\x0a\x09defaultColor := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "nextColor",
category: 'private',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
self["@colorIndex"]=_st(self["@colorIndex"]).__plus((1));
$2=_st(self["@colorIndex"]).__gt(_st(self._colors())._size());
if(smalltalk.assert($2)){
$1=self._defaultColor();
} else {
$1=_st(self._colors())._at_(self["@colorIndex"]);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"nextColor",{},smalltalk.RTNExplicitIdentityNormalizer)})},
args: [],
source: "nextColor\x0a\x09\x0a\x09colorIndex := colorIndex + 1.\x0a\x09^colorIndex > self colors size\x0a\x09\x09ifTrue: [ self defaultColor ]\x0a\x09\x09ifFalse: [ self colors at: colorIndex ]",
messageSends: ["+", "ifTrue:ifFalse:", "defaultColor", "at:", "colors", ">", "size"],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "withCommand:withColors:withDefaultColor:",
category: 'instance creation',
fn: function (aBlock,aCollection,aColor){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._withCommand_(aBlock);
_st($2)._colors_(aCollection);
_st($2)._defaultColor_(aColor);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"withCommand:withColors:withDefaultColor:",{aBlock:aBlock,aCollection:aCollection,aColor:aColor},smalltalk.RTNExplicitIdentityNormalizer.klass)})},
args: ["aBlock", "aCollection", "aColor"],
source: "withCommand: aBlock withColors: aCollection withDefaultColor: aColor\x0a\x09\x0a\x09^(self withCommand: aBlock)\x0a\x09\x09colors: aCollection;\x0a\x09\x09defaultColor: aColor;\x0a\x09\x09yourself",
messageSends: ["colors:", "withCommand:", "defaultColor:", "yourself"],
referencedClasses: []
}),
smalltalk.RTNExplicitIdentityNormalizer.klass);


smalltalk.addClass('RTNLinearNormalizer', smalltalk.RTNAbstractNormalizer, ['maximumValue', 'context', 'minimumValue'], 'Roassal2-ColorNormalizer');
smalltalk.RTNLinearNormalizer.comment="A RONLinearNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09context:\x09\x09<Object>\x0a\x09maximumValue:\x09\x09<Object>\x0a\x09minimumValue:\x09\x09<Object>\x0a\x0acontext\x0a\x09- xxxxx\x0a\x0amaximumValue\x0a\x09- xxxxx\x0a\x0aminimumValue\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "command:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTNLinearNormalizer.superclass.fn.prototype._command_.apply(_st(self), [aBlock]);
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"command:",{aBlock:aBlock},smalltalk.RTNLinearNormalizer)})},
args: ["aBlock"],
source: "command: aBlock\x0a\x09\x0a\x09super command: aBlock.\x0a\x09self flushCache",
messageSends: ["command:", "flushCache"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@context"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"context",{},smalltalk.RTNLinearNormalizer)})},
args: [],
source: "context\x0a\x09\x0a\x09^context",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "context:",
category: 'accessing',
fn: function (aContext){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@context"]=aContext;
self._flushCache();
return self}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},smalltalk.RTNLinearNormalizer)})},
args: ["aContext"],
source: "context: aContext\x0a\x09\x0a\x09context := aContext.\x0a\x09self flushCache",
messageSends: ["flushCache"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "flushCache",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"flushCache",{},smalltalk.RTNLinearNormalizer)})},
args: [],
source: "flushCache\x0a\x09\x0a\x09maximumValue := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTNLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@maximumValue"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTNLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09\x22Initialize a newly created instance. This method must answer the receiver.\x22\x0a\x09\x0a\x09super initialize.\x0a\x09maximumValue := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumValue:",
category: 'private',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@maximumValue"])._isNil();
if(smalltalk.assert($1)){
self["@maximumValue"]=_st(_st(self._context())._rtValue_(anEntity))._inject_into_((1),(function(maximum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(maximum)._max_(_st(self._command())._rtValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({maximum:maximum,entity:entity},$ctx1)})}));
self["@maximumValue"];
};
$2=self["@maximumValue"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"maximumValue:",{anEntity:anEntity},smalltalk.RTNLinearNormalizer)})},
args: ["anEntity"],
source: "maximumValue: anEntity\x0a\x09\x22Returns the largest value that the color metric provides\x22\x0a\x09\x0a\x09maximumValue isNil\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[maximumValue := (self context rtValue: anEntity)\x0a\x09\x09\x09\x09inject: 1\x0a\x09\x09\x09\x09into:\x0a\x09\x09\x09\x09\x09[:maximum :entity | maximum max: (self command rtValue: entity)]].\x0a\x09^maximumValue",
messageSends: ["ifTrue:", "inject:into:", "max:", "rtValue:", "command", "context", "isNil"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minimumValue:",
category: 'private',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@minimumValue"])._isNil();
if(smalltalk.assert($1)){
self["@minimumValue"]=_st(_st(self._context())._rtValue_(anEntity))._inject_into_((100000000000),(function(minimum,entity){
return smalltalk.withContext(function($ctx2) {
return _st(minimum)._min_(_st(self._command())._rtValue_(entity));
}, function($ctx2) {$ctx2.fillBlock({minimum:minimum,entity:entity},$ctx1)})}));
self["@minimumValue"];
};
$2=self["@minimumValue"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"minimumValue:",{anEntity:anEntity},smalltalk.RTNLinearNormalizer)})},
args: ["anEntity"],
source: "minimumValue: anEntity\x0a\x09\x22Returns the smallest value that the color metric provides\x22\x0a\x09\x0a\x09minimumValue isNil\x0a\x09\x09ifTrue:\x0a\x09\x09\x09[minimumValue := (self context rtValue: anEntity)\x0a\x09\x09\x09\x09inject: 100000000000 \x0a\x09\x09\x09\x09into:\x0a\x09\x09\x09\x09\x09[:minimum :entity | minimum min: (self command rtValue: entity)]].\x0a\x09^minimumValue",
messageSends: ["ifTrue:", "inject:into:", "min:", "rtValue:", "command", "context", "isNil"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:",
category: 'instance creation',
fn: function (aCollection){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._inContext_withCommand_(aCollection,"yourself");
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:",{aCollection:aCollection},smalltalk.RTNLinearNormalizer.klass)})},
args: ["aCollection"],
source: "inContext: aCollection\x0a\x09\x0a\x09^self inContext: aCollection withCommand: #yourself",
messageSends: ["inContext:withCommand:"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:",
category: 'instance creation',
fn: function (aCollection,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._context_(aCollection);
_st($2)._command_(aBlock);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:",{aCollection:aCollection,aBlock:aBlock},smalltalk.RTNLinearNormalizer.klass)})},
args: ["aCollection", "aBlock"],
source: "inContext: aCollection withCommand: aBlock\x0a\x09\x0a\x09^(self new)\x0a\x09\x09context: aCollection;\x0a\x09\x09command: aBlock;\x0a\x09\x09yourself",
messageSends: ["context:", "new", "command:", "yourself"],
referencedClasses: []
}),
smalltalk.RTNLinearNormalizer.klass);


smalltalk.addClass('RTNColorLinearNormalizer', smalltalk.RTNLinearNormalizer, ['minBrightness', 'maxBrightness', 'lowColor', 'highColor'], 'Roassal2-ColorNormalizer');
smalltalk.RTNColorLinearNormalizer.comment="A RONColorLinearNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09highColor:\x09\x09<Object>\x0a\x09lowColor:\x09\x09<Object>\x0a\x09maxBrightness:\x09\x09<Object>\x0a\x09minBrightness:\x09\x09<Object>\x0a\x0ahighColor\x0a\x09- xxxxx\x0a\x0alowColor\x0a\x09- xxxxx\x0a\x0amaxBrightness\x0a\x09- xxxxx\x0a\x0aminBrightness\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "blend:with:weight:",
category: 'private',
fn: function (aColor,aColorValue,wt){
var self=this;
var rv,gv,bv,invWt,av;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1;
invWt=(1).__minus(wt);
rv=_st(_st(_st(aColor)._red()).__star(invWt)).__plus(_st(_st(aColorValue)._red()).__star(wt));
gv=_st(_st(_st(aColor)._green()).__star(invWt)).__plus(_st(_st(aColorValue)._green()).__star(wt));
bv=_st(_st(_st(aColor)._blue()).__star(invWt)).__plus(_st(_st(aColorValue)._blue()).__star(wt));
av=_st(_st(_st(aColor)._alpha()).__star(invWt)).__plus(_st(_st(aColorValue)._alpha()).__star(wt));
$1=_st($Color())._r_g_b_alpha_(rv,gv,bv,av);
return $1;
}, function($ctx1) {$ctx1.fill(self,"blend:with:weight:",{aColor:aColor,aColorValue:aColorValue,wt:wt,rv:rv,gv:gv,bv:bv,invWt:invWt,av:av},smalltalk.RTNColorLinearNormalizer)})},
args: ["aColor", "aColorValue", "wt"],
source: "blend: aColor with: aColorValue weight: wt\x0a\x09\x22Answer a new ColorValue which is a weighted blend of the receiver and the\x0a\x09supplied ColorValue.\x22\x0a\x09\x22Simply interpolates in RGB space.\x22\x0a\x0a\x09| rv gv bv invWt av |\x0a\x09\x0a\x09invWt := 1-wt.\x0a\x09rv := ((aColor red * invWt) + ((aColorValue red)*wt)) \x22rounded\x22.\x0a\x09gv := ((aColor green  * invWt) + ((aColorValue green)*wt)) \x22rounded\x22.\x0a\x09bv := ((aColor blue * invWt) + ((aColorValue blue)*wt)) \x22rounded\x22.\x0a\x09av := ((aColor alpha * invWt) + ((aColorValue alpha)*wt)).\x0a\x09^Color r: rv g: gv b: bv alpha: av",
messageSends: ["-", "+", "*", "red", "green", "blue", "alpha", "r:g:b:alpha:"],
referencedClasses: ["Color"]
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColor:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@highColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"highColor:",{aBlock:aBlock},smalltalk.RTNColorLinearNormalizer)})},
args: ["aBlock"],
source: "highColor: aBlock\x0a\x09\x0a\x09highColor := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "highColorFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@highColor"])._rtValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"highColorFor:",{anEntity:anEntity},smalltalk.RTNColorLinearNormalizer)})},
args: ["anEntity"],
source: "highColorFor: anEntity\x0a\x09\x0a\x09^highColor rtValue: anEntity",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTNColorLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@lowColor"]=_st($Color())._white();
self["@highColor"]=_st($Color())._black();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTNColorLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09lowColor := Color white.\x0a\x09highColor := Color black",
messageSends: ["initialize", "white", "black"],
referencedClasses: ["Color"]
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColor:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lowColor"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lowColor:",{aBlock:aBlock},smalltalk.RTNColorLinearNormalizer)})},
args: ["aBlock"],
source: "lowColor: aBlock\x0a\x09\x0a\x09lowColor := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "lowColorFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@lowColor"])._rtValue_(anEntity);
return $1;
}, function($ctx1) {$ctx1.fill(self,"lowColorFor:",{anEntity:anEntity},smalltalk.RTNColorLinearNormalizer)})},
args: ["anEntity"],
source: "lowColorFor: anEntity\x0a\x09\x0a\x09^lowColor rtValue: anEntity",
messageSends: ["rtValue:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightness:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"maxBrightness:",{aBlock:aBlock},smalltalk.RTNColorLinearNormalizer)})},
args: ["aBlock"],
source: "maxBrightness: aBlock\x0a\x09\x0a\x09maxBrightness := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxBrightnessFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@maxBrightness"])._isNil();
if(smalltalk.assert($2)){
$1=(1);
} else {
$1=_st(self["@maxBrightness"])._rtValue_(anEntity);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxBrightnessFor:",{anEntity:anEntity},smalltalk.RTNColorLinearNormalizer)})},
args: ["anEntity"],
source: "maxBrightnessFor: anEntity\x0a\x09\x0a\x09^maxBrightness isNil\x0a\x09\x09ifTrue: [1.0]\x0a\x09\x09ifFalse: [maxBrightness rtValue: anEntity]",
messageSends: ["ifTrue:ifFalse:", "rtValue:", "isNil"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightness:",
category: 'accessing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minBrightness"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"minBrightness:",{aBlock:aBlock},smalltalk.RTNColorLinearNormalizer)})},
args: ["aBlock"],
source: "minBrightness: aBlock\x0a\x09\x0a\x09minBrightness := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minBrightnessFor:",
category: 'translator protocol',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(self["@minBrightness"])._isNil();
if(smalltalk.assert($2)){
$1=(0);
} else {
$1=_st(self["@minBrightness"])._rtValue_(anEntity);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"minBrightnessFor:",{anEntity:anEntity},smalltalk.RTNColorLinearNormalizer)})},
args: ["anEntity"],
source: "minBrightnessFor: anEntity\x0a\x09\x0a\x09^minBrightness isNil\x0a\x09\x09ifTrue: [0.0]\x0a\x09\x09ifFalse: [minBrightness rtValue: anEntity]",
messageSends: ["ifTrue:ifFalse:", "rtValue:", "isNil"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var myValue,myHighColor,myLowColor,myMinBrightness,myMaxBrightness,weight,minValue,maxValue;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
minValue=self._minimumValue_(anEntity);
maxValue=self._maximumValue_(anEntity);
myMinBrightness=self._minBrightnessFor_(anEntity);
myMaxBrightness=self._maxBrightnessFor_(anEntity);
myHighColor=self._highColorFor_(anEntity);
myLowColor=self._lowColorFor_(anEntity);
$1=_st(minValue).__eq(maxValue);
if(smalltalk.assert($1)){
weight=_st(_st(myMinBrightness).__plus(myMaxBrightness)).__slash((2));
} else {
myValue=_st(_st(self._command())._rtValue_(anEntity)).__minus(self._minimumValue_(anEntity));
myValue;
weight=_st(myMinBrightness).__plus(_st(_st(_st(myValue)._abs()).__slash(_st(maxValue).__minus(minValue))).__star(_st(myMaxBrightness).__minus(myMinBrightness)));
};
$2=self._blend_with_weight_(myLowColor,myHighColor,weight);
return $2;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity,myValue:myValue,myHighColor:myHighColor,myLowColor:myLowColor,myMinBrightness:myMinBrightness,myMaxBrightness:myMaxBrightness,weight:weight,minValue:minValue,maxValue:maxValue},smalltalk.RTNColorLinearNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x22Calculates the color of the entity based on the context.\x22\x0a\x09\x0a\x09| myValue myHighColor myLowColor myMinBrightness myMaxBrightness weight minValue maxValue |\x0a\x09\x22Get color specific data\x22\x0a\x09minValue :=  self minimumValue: anEntity.\x0a\x09maxValue :=  self maximumValue: anEntity.\x0a\x09myMinBrightness := self minBrightnessFor: anEntity.\x0a\x09myMaxBrightness := self maxBrightnessFor: anEntity.\x0a\x09myHighColor := self highColorFor: anEntity.\x0a\x09myLowColor := self lowColorFor: anEntity.\x09\x22Get data\x22\x0a\x09weight := minValue = maxValue \x0a\x09\x09ifTrue: [(myMinBrightness + myMaxBrightness) / 2]\x0a\x09\x09ifFalse: [\x09\x0a\x09\x09\x09myValue := (self command rtValue: anEntity) - (self minimumValue: anEntity).\x0a\x09\x09\x09myMinBrightness + (myValue abs / (maxValue - minValue) * (myMaxBrightness - myMinBrightness)) ].\x0a\x09^self blend: myLowColor with: myHighColor weight: weight",
messageSends: ["minimumValue:", "maximumValue:", "minBrightnessFor:", "maxBrightnessFor:", "highColorFor:", "lowColorFor:", "ifTrue:ifFalse:", "/", "+", "-", "rtValue:", "command", "*", "abs", "=", "blend:with:weight:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer);


smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:highColor:",
category: 'instance creation',
fn: function (aCollection,lowColor,highColor){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_(aCollection);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:lowColor:highColor:",{aCollection:aCollection,lowColor:lowColor,highColor:highColor,normalizer:normalizer},smalltalk.RTNColorLinearNormalizer.klass)})},
args: ["aCollection", "lowColor", "highColor"],
source: "inContext: aCollection lowColor: lowColor highColor: highColor\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09^normalizer",
messageSends: ["inContext:", "lowColor:", "highColor:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:lowColor:lowThreshold:highColor:highThreshold:",
category: 'instance creation',
fn: function (aCollection,lowColor,lowThreshold,highColor,highThreshold){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_(aCollection);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
_st(normalizer)._minBrightness_(lowThreshold);
_st(normalizer)._maxBrightness_(highThreshold);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:lowColor:lowThreshold:highColor:highThreshold:",{aCollection:aCollection,lowColor:lowColor,lowThreshold:lowThreshold,highColor:highColor,highThreshold:highThreshold,normalizer:normalizer},smalltalk.RTNColorLinearNormalizer.klass)})},
args: ["aCollection", "lowColor", "lowThreshold", "highColor", "highThreshold"],
source: "inContext: aCollection lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09normalizer minBrightness: lowThreshold.\x0a\x09normalizer maxBrightness: highThreshold.\x0a\x09^normalizer",
messageSends: ["inContext:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:highColor:",
category: 'instance creation',
fn: function (aCollection,aBlock,lowColor,highColor){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_withCommand_(aCollection,aBlock);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:lowColor:highColor:",{aCollection:aCollection,aBlock:aBlock,lowColor:lowColor,highColor:highColor,normalizer:normalizer},smalltalk.RTNColorLinearNormalizer.klass)})},
args: ["aCollection", "aBlock", "lowColor", "highColor"],
source: "inContext: aCollection withCommand: aBlock lowColor: lowColor highColor: highColor\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection withCommand: aBlock.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09^normalizer",
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "inContext:withCommand:lowColor:lowThreshold:highColor:highThreshold:",
category: 'instance creation',
fn: function (aCollection,aBlock,lowColor,lowThreshold,highColor,highThreshold){
var self=this;
var normalizer;
return smalltalk.withContext(function($ctx1) { 
var $1;
normalizer=self._inContext_withCommand_(aCollection,aBlock);
_st(normalizer)._lowColor_(lowColor);
_st(normalizer)._highColor_(highColor);
_st(normalizer)._minBrightness_(lowThreshold);
_st(normalizer)._maxBrightness_(highThreshold);
$1=normalizer;
return $1;
}, function($ctx1) {$ctx1.fill(self,"inContext:withCommand:lowColor:lowThreshold:highColor:highThreshold:",{aCollection:aCollection,aBlock:aBlock,lowColor:lowColor,lowThreshold:lowThreshold,highColor:highColor,highThreshold:highThreshold,normalizer:normalizer},smalltalk.RTNColorLinearNormalizer.klass)})},
args: ["aCollection", "aBlock", "lowColor", "lowThreshold", "highColor", "highThreshold"],
source: "inContext: aCollection withCommand: aBlock lowColor: lowColor lowThreshold: lowThreshold highColor: highColor highThreshold: highThreshold\x0a\x09\x0a\x09| normalizer |\x0a\x09normalizer := self inContext: aCollection withCommand: aBlock.\x0a\x09normalizer lowColor: lowColor.\x0a\x09normalizer highColor: highColor.\x0a\x09normalizer minBrightness: lowThreshold.\x0a\x09normalizer maxBrightness: highThreshold.\x0a\x09^normalizer",
messageSends: ["inContext:withCommand:", "lowColor:", "highColor:", "minBrightness:", "maxBrightness:"],
referencedClasses: []
}),
smalltalk.RTNColorLinearNormalizer.klass);


smalltalk.addClass('RTNFontLinearNormalizer', smalltalk.RTNLinearNormalizer, [], 'Roassal2-ColorNormalizer');
smalltalk.RTNFontLinearNormalizer.comment="A RONFontLinearNormalizer is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._rtValue_(anEntity);
$1=(5).__plus(_st((38).__star(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity))))._asInteger());
return $1;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity,value:value},smalltalk.RTNFontLinearNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x22Calculates the color of the entity based on the context.\x22\x0a\x09\x0a\x09| value |\x0a\x09value := self command rtValue: anEntity.\x0a\x09^5 + (38 * (value abs / (self maximumValue: anEntity))) asInteger",
messageSends: ["rtValue:", "command", "+", "asInteger", "*", "/", "maximumValue:", "abs"],
referencedClasses: []
}),
smalltalk.RTNFontLinearNormalizer);



smalltalk.addClass('RTNumberLinearNormalizer', smalltalk.RTNLinearNormalizer, ['scale'], 'Roassal2-ColorNormalizer');
smalltalk.RTNumberLinearNormalizer.comment="A RONumberLinearNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09scale:\x09\x09<Object>\x0a\x0ascale\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTNumberLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@scale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTNumberLinearNormalizer)})},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09scale := 1",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTNumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._rtValue_(anEntity);
$1=_st(_st(_st(_st(_st(value)._abs()).__slash(self._maximumValue_(anEntity)))._asFloat()).__star(self._scale()))._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity,value:value},smalltalk.RTNumberLinearNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x22Normalize value based on maximum value.\x22\x0a\x09\x0a\x09| value |\x0a\x09value := self command rtValue: anEntity.\x0a\x09^ ((value abs / (self maximumValue: anEntity)) asFloat * self scale) asInteger",
messageSends: ["rtValue:", "command", "asInteger", "*", "scale", "asFloat", "/", "maximumValue:", "abs"],
referencedClasses: []
}),
smalltalk.RTNumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@scale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scale",{},smalltalk.RTNumberLinearNormalizer)})},
args: [],
source: "scale\x0a\x09^ scale",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNumberLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "scale:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@scale"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"scale:",{anObject:anObject},smalltalk.RTNumberLinearNormalizer)})},
args: ["anObject"],
source: "scale: anObject\x0a\x09scale := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTNumberLinearNormalizer);



smalltalk.addClass('RTValueLinearNormalizer', smalltalk.RTNLinearNormalizer, ['minScale', 'maxScale'], 'Roassal2-ColorNormalizer');
smalltalk.RTValueLinearNormalizer.comment="A ROValueLinearNormalizer is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09maxScale:\x09\x09<Object>\x0a\x09minScale:\x09\x09<Object>\x0a\x0amaxScale\x0a\x09- xxxxx\x0a\x0aminScale\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTValueLinearNormalizer.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@minScale"]=(0);
self["@maxScale"]=(1);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTValueLinearNormalizer)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09minScale := 0.\x0a\x09maxScale := 1.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale",{},smalltalk.RTValueLinearNormalizer)})},
args: [],
source: "maxScale\x0a\x0a\x09^maxScale.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "maxScale:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@maxScale"]=aValue;
$1=self["@maxScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"maxScale:",{aValue:aValue},smalltalk.RTValueLinearNormalizer)})},
args: ["aValue"],
source: "maxScale: aValue\x0a\x0a\x09^maxScale := aValue.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@minScale"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"minScale",{},smalltalk.RTValueLinearNormalizer)})},
args: [],
source: "minScale\x0a\x0a\x09^minScale.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "minScale:",
category: 'accessing',
fn: function (aValue){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@minScale"]=aValue;
return self}, function($ctx1) {$ctx1.fill(self,"minScale:",{aValue:aValue},smalltalk.RTValueLinearNormalizer)})},
args: ["aValue"],
source: "minScale: aValue\x0a\x0a\x09minScale := aValue.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "rtValue:",
category: 'accessing',
fn: function (anEntity){
var self=this;
var value,slope;
return smalltalk.withContext(function($ctx1) { 
var $1;
value=_st(self._command())._rtValue_(anEntity);
slope=self._slope_(anEntity);
$1=_st(_st(_st(_st(_st(value)._abs()).__star(slope)).__plus(self._maxScale())).__minus(_st(_st(self._maximumValue_(anEntity))._asFloat()).__star(slope)))._asInteger();
return $1;
}, function($ctx1) {$ctx1.fill(self,"rtValue:",{anEntity:anEntity,value:value,slope:slope},smalltalk.RTValueLinearNormalizer)})},
args: ["anEntity"],
source: "rtValue: anEntity\x0a\x09\x0a\x09\x22Normalize value based on minimum and maximum value.\x22\x0a\x09| value slope |\x0a\x09value := self command rtValue: anEntity.\x0a\x09slope := self slope: anEntity.\x0a\x09^ ((value abs * slope) + self maxScale - ((self maximumValue: anEntity) asFloat * slope)) asInteger",
messageSends: ["rtValue:", "command", "slope:", "asInteger", "-", "*", "asFloat", "maximumValue:", "+", "maxScale", "abs"],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);

smalltalk.addMethod(
smalltalk.method({
selector: "slope:",
category: 'as yet unclassified',
fn: function (anEntity){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self["@maxScale"]).__minus(self["@minScale"])).__slash(_st(_st(self._maximumValue_(anEntity))._asFloat()).__minus(_st(self._minimumValue_(anEntity))._asFloat()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"slope:",{anEntity:anEntity},smalltalk.RTValueLinearNormalizer)})},
args: ["anEntity"],
source: "slope: anEntity\x0a\x09\x0a\x09^ (maxScale - minScale) / ((self maximumValue: anEntity) asFloat - (self minimumValue: anEntity )asFloat).",
messageSends: ["/", "-", "asFloat", "minimumValue:", "maximumValue:"],
referencedClasses: []
}),
smalltalk.RTValueLinearNormalizer);



