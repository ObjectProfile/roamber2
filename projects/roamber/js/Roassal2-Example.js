smalltalk.addPackage('Roassal2-Example');
smalltalk.addClass('Roassal2Examples', smalltalk.Object, [], 'Roassal2-Example');
smalltalk.addMethod(
smalltalk.method({
selector: "example01",
category: 'not yet classified',
fn: function () {
var self=this;
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4;
$1=_st($RTView())._new();
$2=_st($RTBox())._new();
_st($2)._color_(_st($Color())._red());
$3=_st($2)._size_((10));
_st($1)._add_(_st($3)._element());
$4=_st($1)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example01",{},smalltalk.Roassal2Examples)});},
args: [],
source: "example01\x0a\x09\x22\x0a\x09Roassal2Examples new example01\x0a\x09\x22\x0a\x09RTView new add: (RTBox new color: Color red; size: 10) element; open",
messageSends: ["add:", "element", "color:", "red", "new", "size:", "open"],
referencedClasses: ["Color", "RTBox", "RTView"]
}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
category: 'not yet classified',
fn: function () {
var self=this;
var v,box,e;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
(10)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($RTBox())._new();
_st($1)._size_((40));
$2=_st($1)._color_(_st($Color())._blue());
box=$2;
box;
e=_st(box)._element();
e;
_st(e)._translateTo_(_st((300)._atRandom()).__at((300)._atRandom()));
return _st(v)._add_(e);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example02",{v:v,box:box,e:e},smalltalk.Roassal2Examples)});},
args: [],
source: "example02\x0a\x09\x22\x0a\x09Roassal2Examples new example02\x0a\x09\x22\x0a\x09| v box e |\x0a\x09v := RTView new.\x0a\x0910 timesRepeat: [\x0a\x09\x09box := RTBox  new size: 40; color: Color blue.\x0a\x09\x09e := box element.\x0a\x09\x09e translateTo: (300 atRandom @ 300 atRandom).\x0a\x09\x09v add: e.\x0a\x09].\x0a\x09v open",
messageSends: ["new", "timesRepeat:", "size:", "color:", "blue", "element", "translateTo:", "@", "atRandom", "add:", "open"],
referencedClasses: ["RTView", "RTBox", "Color"]
}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example03",
category: 'not yet classified',
fn: function () {
var self=this;
var e,v;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
$1=_st($RTBox())._new();
_st($1)._color_(_st($Color())._red());
$2=_st($1)._size_((30));
e=_st($2)._element();
_st(e)._translateBy_(_st((100)._atRandom()).__at((100)._atRandom()));
_st(v)._add_(e);
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example03",{e:e,v:v},smalltalk.Roassal2Examples)});},
args: [],
source: "example03\x0a\x09\x22\x0a\x09Roassal2Examples new example03\x0a\x09\x22\x0a\x09| e v |\x0a\x09v := RTView new.\x0a\x09e :=  (RTBox new color: Color red; size: 30) element.\x0a\x09e translateBy: 100 atRandom @ 100 atRandom.\x0a\x09v add: e.\x0a\x09v open",
messageSends: ["new", "element", "color:", "red", "size:", "translateBy:", "@", "atRandom", "add:", "open"],
referencedClasses: ["RTView", "Color", "RTBox"]
}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example04",
category: 'not yet classified',
fn: function () {
var self=this;
var v,box,e;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
$1=_st($RTBox())._new();
_st($1)._size_((40));
$2=_st($1)._color_(_st($Color())._blue());
box=$2;
(1)._to_do_((10),(function(i){
return smalltalk.withContext(function($ctx2) {
e=_st(box)._element();
e;
_st(e)._translateTo_(_st(_st(_st(i).__star((10))).__plus((30))).__at(_st(_st(i).__star((10))).__plus((30))));
return _st(v)._add_(e);
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example04",{v:v,box:box,e:e},smalltalk.Roassal2Examples)});},
args: [],
source: "example04\x0a\x09\x22\x0a\x09Roassal2Examples new example04\x0a\x09\x22\x0a\x09| v box e |\x0a\x09v := RTView new.\x0a\x09box := RTBox  new size: 40; color: Color blue.\x0a\x091 to: 10 do: [ :i |\x0a\x09\x09e := box element.\x0a\x09\x09e translateTo: (((i * 10) + 30 )@ ((i * 10) + 30)).\x0a\x09\x09v add: e.\x0a\x09].\x0a\x09v open",
messageSends: ["new", "size:", "color:", "blue", "to:do:", "element", "translateTo:", "@", "+", "*", "add:", "open"],
referencedClasses: ["RTView", "RTBox", "Color"]
}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutGridLayout",
category: 'layouts',
fn: function () {
var self=this;
var v;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
function $Collection(){return smalltalk.Collection||(typeof Collection=="undefined"?nil:Collection)}
function $RTGridLayout(){return smalltalk.RTGridLayout||(typeof RTGridLayout=="undefined"?nil:RTGridLayout)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
$1=_st($RTBox())._new();
_st($1)._size_((30));
$2=_st($1)._elementsOn_(_st($Collection())._withAllSubclasses());
_st(v)._addAll_($2);
_st($RTGridLayout())._on_(_st(v)._elements());
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"layoutGridLayout",{v:v},smalltalk.Roassal2Examples)});},
args: [],
source: "layoutGridLayout\x0a\x0a| v |\x0av := RTView new.\x0av addAll: (RTBox new size: 30; elementsOn: (Collection withAllSubclasses)).\x0a\x22RTHorizontalLineLayout on: v elements.\x22\x0aRTGridLayout on: v elements.\x0av open",
messageSends: ["new", "addAll:", "size:", "elementsOn:", "withAllSubclasses", "on:", "elements", "open"],
referencedClasses: ["RTView", "RTBox", "Collection", "RTGridLayout"]
}),
smalltalk.Roassal2Examples);



