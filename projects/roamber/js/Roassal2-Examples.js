smalltalk.addPackage('Roassal2-Examples');
smalltalk.addClass('RTExamplesAmber', smalltalk.Object, [], 'Roassal2-Examples');
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
$3=_st($2)._size_((20));
_st($1)._add_(_st($3)._element());
$4=_st($1)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example01",{},smalltalk.RTExamplesAmber)});},
args: [],
source: "example01\x0a\x09\x22\x0a\x09RTExamplesAmber new example01\x0a\x09\x22\x0a\x09RTView new add: (RTBox new color: Color red; size: 20) element; open\x0a\x09",
messageSends: ["add:", "element", "color:", "red", "new", "size:", "open"],
referencedClasses: ["Color", "RTBox", "RTView"]
}),
smalltalk.RTExamplesAmber);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
category: 'not yet classified',
fn: function () {
var self=this;
var v,box,e;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTBox(){return smalltalk.RTBox||(typeof RTBox=="undefined"?nil:RTBox)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
(10)._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
$1=_st($RTBox())._new();
_st($1)._color_(_st($Color())._red());
$2=_st($1)._size_((30));
box=$2;
box;
e=_st(box)._element();
e;
_st(e)._translateBy_(_st((100)._atRandom()).__at((100)._atRandom()));
return _st(v)._add_(e);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example02",{v:v,box:box,e:e},smalltalk.RTExamplesAmber)});},
args: [],
source: "example02\x0a\x09\x22\x0a\x09RTExamplesAmber new example02\x0a\x09\x22\x0a\x09| v box e |\x0a\x09v := RTView new.\x0a\x0910 timesRepeat: [\x0a\x09\x09box := RTBox new color: Color red; size: 30.\x0a\x09\x09e := box element.\x0a\x09\x09e translateBy: (100 atRandom @ 100 atRandom).\x0a\x09\x09v add: e ].\x0a\x09v open",
messageSends: ["new", "timesRepeat:", "color:", "red", "size:", "element", "translateBy:", "@", "atRandom", "add:", "open"],
referencedClasses: ["RTView", "Color", "RTBox"]
}),
smalltalk.RTExamplesAmber);



