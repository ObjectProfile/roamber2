smalltalk.addPackage('Roassal2-Examples');
smalltalk.addClass('RTExamplesAmber', smalltalk.Object, [], 'Roassal2-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "example01",
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
messageSends: ["add:", "element", "color:", "red", "new", "size:", "open"]}),
smalltalk.RTExamplesAmber);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
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
messageSends: ["new", "timesRepeat:", "color:", "red", "size:", "element", "translateBy:", "@", "atRandom", "add:", "open"]}),
smalltalk.RTExamplesAmber);



