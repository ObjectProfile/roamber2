smalltalk.addPackage('ARoassal-Interaction-Test');
smalltalk.addClass('ROPopupTest', smalltalk.ROTest, ['text'], 'ARoassal-Interaction-Test');
smalltalk.addMethod(
smalltalk.method({
selector: "test1",
fn: function (){
var self=this;
var view,element;
function $ROView(){return smalltalk.ROView||(typeof ROView=="undefined"?nil:ROView)}
function $ROElement(){return smalltalk.ROElement||(typeof ROElement=="undefined"?nil:ROElement)}
function $ROBox(){return smalltalk.ROBox||(typeof ROBox=="undefined"?nil:ROBox)}
function $ROPopup(){return smalltalk.ROPopup||(typeof ROPopup=="undefined"?nil:ROPopup)}
return smalltalk.withContext(function($ctx1) { 
view=_st($ROView())._new();
element=_st(_st($ROElement())._new())._size_((100));
_st(element).__plus($ROBox());
_st(element).__at($ROPopup());
_st(view)._add_(element);
self._deny_(_st(_st($ROPopup())._popup())._isNil());
self._assert_(_st(_st(_st($ROPopup())._popup())._size()).__eq((1)));
return self}, function($ctx1) {$ctx1.fill(self,"test1",{view:view,element:element},smalltalk.ROPopupTest)})},
messageSends: ["new", "size:", "+", "@", "add:", "deny:", "isNil", "popup", "assert:", "=", "size"]}),
smalltalk.ROPopupTest);



