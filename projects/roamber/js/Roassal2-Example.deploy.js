smalltalk.addPackage('Roassal2-Example');
smalltalk.addClass('Roassal2Examples', smalltalk.Object, [], 'Roassal2-Example');
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
$3=_st($2)._size_((10));
_st($1)._add_(_st($3)._element());
$4=_st($1)._open();
return self}, function($ctx1) {$ctx1.fill(self,"example01",{},smalltalk.Roassal2Examples)});},
messageSends: ["add:", "element", "color:", "red", "new", "size:", "open"]}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example02",
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
messageSends: ["new", "timesRepeat:", "size:", "color:", "blue", "element", "translateTo:", "@", "atRandom", "add:", "open"]}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example03",
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
messageSends: ["new", "element", "color:", "red", "size:", "translateBy:", "@", "atRandom", "add:", "open"]}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "example04",
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
messageSends: ["new", "size:", "color:", "blue", "to:do:", "element", "translateTo:", "@", "+", "*", "add:", "open"]}),
smalltalk.Roassal2Examples);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutGridLayout",
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
messageSends: ["new", "addAll:", "size:", "elementsOn:", "withAllSubclasses", "on:", "elements", "open"]}),
smalltalk.Roassal2Examples);



