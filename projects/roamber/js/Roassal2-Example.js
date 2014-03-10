smalltalk.addPackage('Roassal2-Example');
smalltalk.addClass('Roassal2Examples', smalltalk.Object, [], 'Roassal2-Example');
smalltalk.addMethod(
smalltalk.method({
selector: "bezierExample",
category: 'not yet classified',
fn: function (){
var self=this;
var v,shape,edge,els;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTEllipse(){return smalltalk.RTEllipse||(typeof RTEllipse=="undefined"?nil:RTEllipse)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
function $RTHorizontalLineLayout(){return smalltalk.RTHorizontalLineLayout||(typeof RTHorizontalLineLayout=="undefined"?nil:RTHorizontalLineLayout)}
function $RTBezierLine(){return smalltalk.RTBezierLine||(typeof RTBezierLine=="undefined"?nil:RTBezierLine)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
v=_st($RTView())._new();
$1=_st($RTEllipse())._new();
_st($1)._size_((10));
$2=_st($1)._color_(_st(_st($Color())._red())._alpha_((0.3)));
shape=$2;
els=_st(shape)._elementsOn_((1)._to_((4)));
_st(v)._addAll_(els);
_st($RTHorizontalLineLayout())._on_(_st(v)._elements());
_st(_st(els)._at_((1)))._translateBy_((0).__at((100)));
_st(_st(els)._at_((2)))._translateBy_((100).__at((0)));
_st(_st(els)._at_((3)))._translateBy_((200).__at((100)));
_st(_st(els)._at_((4)))._translateBy_((300).__at((0)));
edge=_st(_st(_st($RTBezierLine())._new())._controllingElements_(_st(v)._elements()))._edgeFrom_to_(_st(els)._first(),_st(els)._last());
_st(v)._add_(edge);
_st(v)._open();
return self}, function($ctx1) {$ctx1.fill(self,"bezierExample",{v:v,shape:shape,edge:edge,els:els},smalltalk.Roassal2Examples)})},
args: [],
source: "bezierExample\x0a\x09| v shape  edge els |\x0a\x09\x0a\x09v := RTView new.\x0a\x09shape := RTEllipse new size: 10; color: (Color red alpha: 0.3).\x0a\x09els := (shape elementsOn: (1 to: 4)).\x0a\x09v addAll: els .\x0a\x09RTHorizontalLineLayout on: v elements.\x0a\x09(els at: 1) translateBy: 0 @ 100.\x0a\x09(els at: 2) translateBy: 100 @ 0.\x0a\x09(els at: 3) translateBy: 200 @ 100.\x0a\x09(els at: 4) translateBy: 300 @ 0.\x0a\x0a\x09edge := (RTBezierLine new controllingElements: v elements) edgeFrom: els first to: els last.\x0a\x09v add: edge.\x0a\x0a\x09v open",
messageSends: ["new", "size:", "color:", "alpha:", "red", "elementsOn:", "to:", "addAll:", "on:", "elements", "translateBy:", "@", "at:", "edgeFrom:to:", "first", "last", "controllingElements:", "add:", "open"],
referencedClasses: ["RTView", "RTEllipse", "Color", "RTHorizontalLineLayout", "RTBezierLine"]
}),
smalltalk.Roassal2Examples);

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
selector: "iconExample",
category: 'not yet classified',
fn: function (){
var self=this;
var view,element;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTSVGPath(){return smalltalk.RTSVGPath||(typeof RTSVGPath=="undefined"?nil:RTSVGPath)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($RTView())._new();
$1=_st($RTSVGPath())._new();
_st($1)._path_("M22.121,24.438l-3.362-7.847c-0.329-0.769-0.599-2.081-0.599-2.917s0.513-1.521,1.14-1.521s1.141-0.513,1.141-1.14s-0.685-1.14-1.521-1.14h-6.84c-0.836,0-1.52,0.513-1.52,1.14s0.513,1.14,1.14,1.14s1.14,0.685,1.14,1.521s-0.269,2.148-0.599,2.917l-3.362,7.847C8.55,25.206,8.28,26.177,8.28,26.595s0.342,1.103,0.76,1.521s1.444,0.76,2.28,0.76h8.359c0.836,0,1.862-0.342,2.28-0.76s0.76-1.103,0.76-1.521S22.45,25.206,22.121,24.438zM16.582,7.625c0,0.599,0.484,1.083,1.083,1.083s1.083-0.484,1.083-1.083s-0.484-1.084-1.083-1.084S16.582,7.026,16.582,7.625zM13.667,7.792c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5S13.391,7.792,13.667,7.792zM15.584,5.292c0.874,0,1.583-0.709,1.583-1.583c0-0.875-0.709-1.584-1.583-1.584C14.709,2.125,14,2.834,14,3.709C14,4.583,14.709,5.292,15.584,5.292z");
_st($1)._borderWidth_((0));
_st($1)._scale_((8));
$2=_st($1)._fillColor_(_st($Color())._black());
element=_st($2)._element();
_st(view)._add_(element);
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"iconExample",{view:view,element:element},smalltalk.Roassal2Examples)})},
args: [],
source: "iconExample\x0a\x09| view element |\x0a\x09view := RTView new.\x0a\x09element := (RTSVGPath new\x0a\x09\x09path: 'M22.121,24.438l-3.362-7.847c-0.329-0.769-0.599-2.081-0.599-2.917s0.513-1.521,1.14-1.521s1.141-0.513,1.141-1.14s-0.685-1.14-1.521-1.14h-6.84c-0.836,0-1.52,0.513-1.52,1.14s0.513,1.14,1.14,1.14s1.14,0.685,1.14,1.521s-0.269,2.148-0.599,2.917l-3.362,7.847C8.55,25.206,8.28,26.177,8.28,26.595s0.342,1.103,0.76,1.521s1.444,0.76,2.28,0.76h8.359c0.836,0,1.862-0.342,2.28-0.76s0.76-1.103,0.76-1.521S22.45,25.206,22.121,24.438zM16.582,7.625c0,0.599,0.484,1.083,1.083,1.083s1.083-0.484,1.083-1.083s-0.484-1.084-1.083-1.084S16.582,7.026,16.582,7.625zM13.667,7.792c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5s-0.5,0.224-0.5,0.5S13.391,7.792,13.667,7.792zM15.584,5.292c0.874,0,1.583-0.709,1.583-1.583c0-0.875-0.709-1.584-1.583-1.584C14.709,2.125,14,2.834,14,3.709C14,4.583,14.709,5.292,15.584,5.292z';\x0a\x09\x09borderWidth: 0;\x0a\x09\x09scale: 8;\x0a\x09\x09fillColor: Color black) element.\x0a\x09view add: element.\x0a\x09view open",
messageSends: ["new", "element", "path:", "borderWidth:", "scale:", "fillColor:", "black", "add:", "open"],
referencedClasses: ["RTView", "RTSVGPath", "Color"]
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

smalltalk.addMethod(
smalltalk.method({
selector: "southAmericaExample",
category: 'not yet classified',
fn: function (){
var self=this;
var view;
function $RTView(){return smalltalk.RTView||(typeof RTView=="undefined"?nil:RTView)}
function $RTSVGPath(){return smalltalk.RTSVGPath||(typeof RTSVGPath=="undefined"?nil:RTSVGPath)}
function $Color(){return smalltalk.Color||(typeof Color=="undefined"?nil:Color)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
view=_st($RTView())._new();
_st(_st($RTSVGPath())._southAmerica())._do_((function(country){
var elem;
return smalltalk.withContext(function($ctx2) {
$1=_st($RTSVGPath())._new();
_st($1)._path_(_st($RTSVGPath())._perform_(country));
_st($1)._fillColor_(_st($Color())._green());
_st($1)._scale_((2));
$2=_st($1)._borderWidth_((0.5));
elem=_st(_st($2)._element())._model_(_st(country)._asString());
elem;
return _st(view)._add_(elem);
}, function($ctx2) {$ctx2.fillBlock({country:country,elem:elem},$ctx1)})}));
_st(view)._open();
return self}, function($ctx1) {$ctx1.fill(self,"southAmericaExample",{view:view},smalltalk.Roassal2Examples)})},
args: [],
source: "southAmericaExample\x0a\x09| view |\x0a\x09view := RTView new.\x0a\x09RTSVGPath southAmerica do: [ :country |\x0a\x09\x09|elem|\x0a\x09\x09elem := (RTSVGPath new\x0a\x09\x09\x09path: (RTSVGPath perform: country);\x0a\x09\x09\x09fillColor: Color green;\x0a\x09\x09\x09scale: 2;\x0a\x09\x09\x09borderWidth: 0.5) element model: (country asString).\x0a\x09\x09view add: elem.\x0a\x09].\x0a\x09view open",
messageSends: ["new", "do:", "model:", "asString", "element", "path:", "perform:", "fillColor:", "green", "scale:", "borderWidth:", "add:", "southAmerica", "open"],
referencedClasses: ["RTView", "RTSVGPath", "Color"]
}),
smalltalk.Roassal2Examples);



