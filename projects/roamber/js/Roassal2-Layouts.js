smalltalk.addPackage('Roassal2-Layouts');
smalltalk.addClass('RTCell', smalltalk.RTObject, ['elements', 'columns', 'element', 'number', 'rowHeights', 'columnWidths'], 'Roassal2-Layouts');
smalltalk.RTCell.comment="A RTCell is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09columnWidths:\x09\x09<Object>\x0a\x09columns:\x09\x09<Object>\x0a\x09element:\x09\x09<Object>\x0a\x09elements:\x09\x09<Object>\x0a\x09number:\x09\x09<Object>\x0a\x09rowHeights:\x09\x09<Object>\x0a\x0acolumnWidths\x0a\x09- xxxxx\x0a\x0acolumns\x0a\x09- xxxxx\x0a\x0aelement\x0a\x09- xxxxx\x0a\x0aelements\x0a\x09- xxxxx\x0a\x0anumber\x0a\x09- xxxxx\x0a\x0arowHeights\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "column",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._rem_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"column",{},smalltalk.RTCell)})},
args: [],
source: "column\x0a\x0a\x09^((number - 1) rem: columns) + 1",
messageSends: ["+", "rem:", "-"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columnWidthAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@columnWidths"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnWidthAt:",{index:index},smalltalk.RTCell)})},
args: ["index"],
source: "columnWidthAt: index\x0a\x09\x22private\x22\x0a\x0a\x09^ columnWidths at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@columns"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columns",{},smalltalk.RTCell)})},
args: [],
source: "columns\x0a\x09^ columns",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "columns:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@columns"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"columns:",{anObject:anObject},smalltalk.RTCell)})},
args: ["anObject"],
source: "columns: anObject\x0a\x09columns := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeColumnWidths",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@columnWidths"]=_st($Array())._new_(_st(self["@elements"])._columnCount());
(1)._to_do_(_st(self["@elements"])._columnCount(),(function(columnIndex){
return smalltalk.withContext(function($ctx2) {
return _st(self["@columnWidths"])._at_put_(columnIndex,_st(_st(_st(self["@elements"])._atColumn_(columnIndex))._select_thenCollect_("notNil","width"))._max());
}, function($ctx2) {$ctx2.fillBlock({columnIndex:columnIndex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computeColumnWidths",{},smalltalk.RTCell)})},
args: [],
source: "computeColumnWidths\x0a\x0a\x09columnWidths := Array new: elements columnCount.\x0a\x091 to: elements columnCount do: [ :columnIndex |\x0a\x09\x09columnWidths at: columnIndex put: ((elements atColumn: columnIndex) select: #notNil thenCollect: #width) max\x0a\x09 ].",
messageSends: ["new:", "columnCount", "to:do:", "at:put:", "max", "select:thenCollect:", "atColumn:"],
referencedClasses: ["Array"]
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRowHeights",
category: 'accessing',
fn: function (){
var self=this;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
self["@rowHeights"]=_st($Array())._new_(_st(self["@elements"])._rowCount());
(1)._to_do_(_st(self["@elements"])._rowCount(),(function(rowIndex){
return smalltalk.withContext(function($ctx2) {
return _st(self["@rowHeights"])._at_put_(rowIndex,_st(_st(_st(self["@elements"])._atRow_(rowIndex))._select_thenCollect_("notNil","height"))._max());
}, function($ctx2) {$ctx2.fillBlock({rowIndex:rowIndex},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"computeRowHeights",{},smalltalk.RTCell)})},
args: [],
source: "computeRowHeights\x0a\x0a\x09rowHeights := Array new: elements rowCount.\x0a\x091 to: elements rowCount do: [ :rowIndex |\x0a\x09\x09rowHeights at: rowIndex put: ((elements atRow: rowIndex) select: #notNil thenCollect: #height) max\x0a\x09 ].",
messageSends: ["new:", "rowCount", "to:do:", "at:put:", "max", "select:thenCollect:", "atRow:"],
referencedClasses: ["Array"]
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@element"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"element",{},smalltalk.RTCell)})},
args: [],
source: "element\x0a\x09^ element",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "element:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@element"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"element:",{anObject:anObject},smalltalk.RTCell)})},
args: ["anObject"],
source: "element: anObject\x0a\x09element := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "elements:",
category: 'accessing',
fn: function (aCollection){
var self=this;
var rows,col;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
function $RTCellMatrix(){return smalltalk.RTCellMatrix||(typeof RTCellMatrix=="undefined"?nil:RTCellMatrix)}
return smalltalk.withContext(function($ctx1) { 
rows=_st(_st(_st(_st(aCollection)._size()).__slash(self["@columns"]))._ceiling())._rounded();
col=_st($Array())._new_(_st(rows).__star(self["@columns"]));
(1)._to_do_(_st(aCollection)._size(),(function(i){
return smalltalk.withContext(function($ctx2) {
return _st(col)._at_put_(i,_st(aCollection)._at_(i));
}, function($ctx2) {$ctx2.fillBlock({i:i},$ctx1)})}));
self["@elements"]=_st($RTCellMatrix())._rows_columns_contents_(rows,self["@columns"],col);
self._computeColumnWidths();
self._computeRowHeights();
return self}, function($ctx1) {$ctx1.fill(self,"elements:",{aCollection:aCollection,rows:rows,col:col},smalltalk.RTCell)})},
args: ["aCollection"],
source: "elements: aCollection \x0a\x0a\x09| rows  col |\x0a\x09rows := (aCollection size / columns) ceiling rounded.\x0a\x09col := Array new: rows * columns.\x0a\x091 to: aCollection size do: [ :i | col at: i put: (aCollection at: i)].\x0a\x09elements := RTCellMatrix \x0a\x09\x09\x09\x09\x09\x09rows: rows\x0a\x09\x09\x09\x09\x09\x09columns: columns \x0a\x09\x09\x09\x09\x09\x09contents: col.\x0a\x09self computeColumnWidths.\x0a\x09self computeRowHeights.",
messageSends: ["rounded", "ceiling", "/", "size", "new:", "*", "to:do:", "at:put:", "at:", "rows:columns:contents:", "computeColumnWidths", "computeRowHeights"],
referencedClasses: ["Array", "RTCellMatrix"]
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "extent",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._width()).__at(self._height());
return $1;
}, function($ctx1) {$ctx1.fill(self,"extent",{},smalltalk.RTCell)})},
args: [],
source: "extent\x0a\x0a\x09^ self width @ self height",
messageSends: ["@", "height", "width"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._rowHeightAt_(self._row());
return $1;
}, function($ctx1) {$ctx1.fill(self,"height",{},smalltalk.RTCell)})},
args: [],
source: "height\x0a\x0a\x09^ self rowHeightAt: self row",
messageSends: ["rowHeightAt:", "row"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@number"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"number",{},smalltalk.RTCell)})},
args: [],
source: "number\x0a\x09^ number",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "number:",
category: 'accessing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@number"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"number:",{anObject:anObject},smalltalk.RTCell)})},
args: ["anObject"],
source: "number: anObject\x0a\x09number := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "row",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self["@number"]).__minus((1)))._quo_(self["@columns"])).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"row",{},smalltalk.RTCell)})},
args: [],
source: "row\x0a\x0a\x09^((number - 1) quo: columns) + 1",
messageSends: ["+", "quo:", "-"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "rowHeightAt:",
category: 'accessing',
fn: function (index){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@rowHeights"])._at_(index);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowHeightAt:",{index:index},smalltalk.RTCell)})},
args: ["index"],
source: "rowHeightAt: index\x0a\x09\x22private\x22\x0a\x0a\x09^ rowHeights at: index",
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.RTCell);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._columnWidthAt_(self._column());
return $1;
}, function($ctx1) {$ctx1.fill(self,"width",{},smalltalk.RTCell)})},
args: [],
source: "width\x0a\x0a\x09^ self columnWidthAt: self column",
messageSends: ["columnWidthAt:", "column"],
referencedClasses: []
}),
smalltalk.RTCell);


smalltalk.addMethod(
smalltalk.method({
selector: "elements:columns:",
category: 'public',
fn: function (aCollection,anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._columns_(anInteger);
_st($2)._elements_(aCollection);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"elements:columns:",{aCollection:aCollection,anInteger:anInteger},smalltalk.RTCell.klass)})},
args: ["aCollection", "anInteger"],
source: "elements: aCollection columns: anInteger \x0a\x09\x0a\x09^ self new columns: anInteger; elements: aCollection; yourself",
messageSends: ["columns:", "new", "elements:", "yourself"],
referencedClasses: []
}),
smalltalk.RTCell.klass);


smalltalk.addClass('RTCellMatrix', smalltalk.RTObject, ['nrows', 'ncols', 'contents'], 'Roassal2-Layouts');
smalltalk.RTCellMatrix.comment="A ROCellMatrix is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09contents:\x09\x09<Object>\x0a\x09ncols:\x09\x09<Object>\x0a\x09nrows:\x09\x09<Object>\x0a\x0acontents\x0a\x09- xxxxx\x0a\x0ancols\x0a\x09- xxxxx\x0a\x0anrows\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "atColumn:",
category: 'accessing rows/columns',
fn: function (column){
var self=this;
var p;
return smalltalk.withContext(function($ctx1) { 
var $1;
p=_st(self._indexForRow_andColumn_((1),column)).__minus(self["@ncols"]);
$1=_st((1)._to_(self["@nrows"]))._collect_((function(row){
return smalltalk.withContext(function($ctx2) {
p=_st(p).__plus(self["@ncols"]);
return _st(self["@contents"])._at_(p);
}, function($ctx2) {$ctx2.fillBlock({row:row},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atColumn:",{column:column,p:p},smalltalk.RTCellMatrix)})},
args: ["column"],
source: "atColumn: column\x0a\x09| p |\x0a\x09p := (self indexForRow: 1 andColumn: column) - ncols.\x0a\x09^ (1 to: nrows) collect: [ :row | contents at: (p := p+ncols) ]",
messageSends: ["-", "indexForRow:andColumn:", "collect:", "at:", "+", "to:"],
referencedClasses: []
}),
smalltalk.RTCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "atRow:",
category: 'accessing rows/columns',
fn: function (row){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(row)._between_and_((1),self["@nrows"]);
if(! smalltalk.assert($1)){
self._error_("1st subscript out of range");
};
$2=_st(self["@contents"])._copyFrom_to_(_st(_st(_st(row).__minus((1))).__star(self["@ncols"])).__plus((1)),_st(row).__star(self["@ncols"]));
return $2;
}, function($ctx1) {$ctx1.fill(self,"atRow:",{row:row},smalltalk.RTCellMatrix)})},
args: ["row"],
source: "atRow: row\x0a\x09(row between: 1 and: nrows)\x0a\x09\x09ifFalse: [ self error: '1st subscript out of range' ].\x0a\x09^ contents copyFrom: (row - 1) * ncols + 1 to: row * ncols",
messageSends: ["ifFalse:", "error:", "between:and:", "copyFrom:to:", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.RTCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "columnCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@ncols"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"columnCount",{},smalltalk.RTCellMatrix)})},
args: [],
source: "columnCount\x0a\x09^ ncols",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "indexForRow:andColumn:",
category: 'private',
fn: function (row,column){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=_st(row)._between_and_((1),self["@nrows"]);
if(! smalltalk.assert($1)){
self._error_("1st subscript out of range");
};
$2=_st(column)._between_and_((1),self["@ncols"]);
if(! smalltalk.assert($2)){
self._error_("2nd subscript out of range");
};
$3=_st(_st(_st(row).__minus((1))).__star(self["@ncols"])).__plus(column);
return $3;
}, function($ctx1) {$ctx1.fill(self,"indexForRow:andColumn:",{row:row,column:column},smalltalk.RTCellMatrix)})},
args: ["row", "column"],
source: "indexForRow: row andColumn: column\x0a\x09(row between: 1 and: nrows)\x0a\x09\x09ifFalse: [self error: '1st subscript out of range'].\x0a\x09(column between: 1 and: ncols)\x0a\x09\x09ifFalse: [self error: '2nd subscript out of range'].\x0a\x09^ (row - 1) * ncols + column",
messageSends: ["ifFalse:", "error:", "between:and:", "+", "*", "-"],
referencedClasses: []
}),
smalltalk.RTCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rowCount",
category: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@nrows"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"rowCount",{},smalltalk.RTCellMatrix)})},
args: [],
source: "rowCount\x0a\x09^ nrows",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCellMatrix);

smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
category: 'private',
fn: function (rows,columns,anArray){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(rows)._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(rows).__gt_eq((0));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(columns)._isInteger())._and_((function(){
return smalltalk.withContext(function($ctx3) {
return _st(columns).__gt_eq((0));
}, function($ctx3) {$ctx3.fillBlock({},$ctx2)})}));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})))._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(_st(rows).__star(columns)).__eq(_st(anArray)._size());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
if(! smalltalk.assert($1)){
self._error_("Wrong parameters");
};
self["@nrows"]=rows;
self["@ncols"]=columns;
self["@contents"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"rows:columns:contents:",{rows:rows,columns:columns,anArray:anArray},smalltalk.RTCellMatrix)})},
args: ["rows", "columns", "anArray"],
source: "rows: rows columns: columns contents: anArray\x0a\x09(((rows isInteger and: [rows >= 0]) and: \x0a\x09\x09[columns isInteger and: [columns >= 0]]) and:\x0a\x09\x09\x09[ rows * columns = anArray size ]) ifFalse: [ self error: 'Wrong parameters' ].\x0a\x09nrows := rows.\x0a\x09ncols := columns.\x0a\x09contents := anArray",
messageSends: ["ifFalse:", "error:", "and:", "=", "size", "*", ">=", "isInteger"],
referencedClasses: []
}),
smalltalk.RTCellMatrix);


smalltalk.addMethod(
smalltalk.method({
selector: "rows:columns:contents:",
category: 'as yet unclassified',
fn: function (rows,columns,contents){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._rows_columns_contents_(rows,columns,contents);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rows:columns:contents:",{rows:rows,columns:columns,contents:contents},smalltalk.RTCellMatrix.klass)})},
args: ["rows", "columns", "contents"],
source: "rows: rows columns: columns contents: contents\x0a\x09^self new rows: rows columns: columns contents: contents",
messageSends: ["rows:columns:contents:", "new"],
referencedClasses: []
}),
smalltalk.RTCellMatrix.klass);


smalltalk.addClass('RTLayout', smalltalk.RTObject, ['affectedNodes', 'translator', 'eventHandler', 'currentIteraction', 'maxInterations', 'iterationsToSendEvent'], 'Roassal2-Layouts');
smalltalk.RTLayout.comment="A ROLayout is the superclass of all.\x0a\x0aInstance Variables\x0a\x09affectedNodes:\x09\x09<Object>\x0a\x09currentIteraction:\x09\x09<Object>\x0a\x09eventHandler:\x09\x09<Object>\x0a\x09maxInterations:\x09\x09<Object>\x0a\x09translator:\x09\x09<Object>\x0a\x0aaffectedNodes\x0a\x09- xxxxx\x0a\x0acurrentIteraction\x0a\x09- xxxxx\x0a\x0aeventHandler\x0a\x09- xxxxx\x0a\x0amaxInterations\x0a\x09- xxxxx\x0a\x0atranslator\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "announce:",
category: 'events',
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
args: ["anEvent"],
source: "announce: anEvent\x0a\x09\x22trigger an event. Objects who registered to me will get notified\x22\x0a\x0a\x09| eventToBeSent |\x0a\x09eventToBeSent := anEvent isBehavior \x0a\x09\x09\x09\x09\x09\x09ifTrue: [ anEvent new ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ anEvent ]. \x0a\x09\x0a\x09eventToBeSent layout: self.\x0a\x09eventHandler announce: eventToBeSent",
messageSends: ["ifTrue:ifFalse:", "new", "isBehavior", "layout:", "announce:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "applyOn:",
category: 'hook',
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
args: ["elements"],
source: "applyOn: elements\x0a\x09\x22Return quickly if there is nothing to do\x22\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x09self executeOnElements: elements",
messageSends: ["ifTrue:", "isEmpty", "executeOnElements:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultIterationsToSendEvent",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (100);
}, function($ctx1) {$ctx1.fill(self,"defaultIterationsToSendEvent",{},smalltalk.RTLayout)});},
args: [],
source: "defaultIterationsToSendEvent\x0a\x09\x22Every 100 steps an event ROLayoutStep is sent\x22\x0a\x0a\x09^ 100",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{elements:elements},smalltalk.RTLayout)});},
args: ["elements"],
source: "doExecute: elements\x0a\x09\x22Performs the layout\x22\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
category: 'hook',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.RTLayout)});},
args: ["elements"],
source: "doInitialize: elements\x0a\x09\x22Method executed before beginning the layout. Useful when the graph to be ordered need to be prepared\x22\x0a\x09\x22self announce: (ROLayoutBegin new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doPost:",
category: 'hook',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"doPost:",{elements:elements},smalltalk.RTLayout)});},
args: ["elements"],
source: "doPost: elements\x0a\x09\x22Method executed after performing the layout\x22\x0a\x09\x22self announce: (ROLayoutEnd new elements: elements).\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'accessing',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@maxInterations"]=_st(elements)._size();
self._doInitialize_(elements);
self._doExecute_(_st(elements)._asOrderedCollection());
self._doPost_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"executeOnElements:",{elements:elements},smalltalk.RTLayout)});},
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x09\x09\x0a\x09maxInterations := elements size.\x0a\x09self doInitialize: elements.\x0a\x09self doExecute: elements asOrderedCollection.\x0a\x09self doPost: elements.",
messageSends: ["size", "doInitialize:", "doExecute:", "asOrderedCollection", "doPost:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fatherOf:",
category: 'utils',
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
args: ["aNode"],
source: "fatherOf: aNode\x0a\x09^ aNode attributes at: #father ifAbsent: [ nil ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fatherOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("father",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"fatherOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "fatherOf: aNode put: aValue\x0a\x09aNode attributes at: #father put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
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
args: [],
source: "initialize\x0a\x09translator := RTLayoutTranslator default.\x0a\x09eventHandler := Announcer new.\x0a\x09currentIteraction := 0.\x0a\x09maxInterations := 0.\x0a\x09iterationsToSendEvent := self defaultIterationsToSendEvent.",
messageSends: ["default", "new", "defaultIterationsToSendEvent"],
referencedClasses: ["RTLayoutTranslator", "Announcer"]
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@iterationsToSendEvent"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent",{},smalltalk.RTLayout)});},
args: [],
source: "iterationsToSendEvent\x0a\x09\x22This method return the amount of iterations before sending ROLayoutStep\x22\x0a\x09^ iterationsToSendEvent",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@iterationsToSendEvent"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent:",{anInteger:anInteger},smalltalk.RTLayout)});},
args: ["anInteger"],
source: "iterationsToSendEvent: anInteger\x0a\x09iterationsToSendEvent := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layerOf:",
category: 'utils',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_("layout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"layerOf:",{aNode:aNode},smalltalk.RTLayout)});},
args: ["aNode"],
source: "layerOf: aNode\x0a\x09^ aNode attributes at: #layout",
messageSends: ["at:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layerOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("layout",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"layerOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "layerOf: aNode put: aValue\x0a\x09aNode attributes at: #layout put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftContourOf:",
category: 'utils',
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
args: ["aNode"],
source: "leftContourOf: aNode\x0a\x09^ aNode attributes at: #leftContour ifAbsent: [ ^ nil ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftContourOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("leftContour",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"leftContourOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "leftContourOf: aNode put: aValue\x0a\x09aNode attributes at: #leftContour put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "modOf:",
category: 'utils',
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
args: ["aNode"],
source: "modOf: aNode\x0a\x09^ aNode attributes at: #mod ifAbsent: [ ^ 0 ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "modOf:put:",
category: 'utils',
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("mod",aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"modOf:put:",{aNode:aNode,aFloat:aFloat},smalltalk.RTLayout)});},
args: ["aNode", "aFloat"],
source: "modOf: aNode put: aFloat\x0a\x09aNode attributes at: #mod put: aFloat",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'hook',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:",{elements:elements},smalltalk.RTLayout)});},
args: ["elements"],
source: "on: elements\x0a\x09self applyOn: elements",
messageSends: ["applyOn:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'hook',
fn: function (elements, edges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.RTLayout)});},
args: ["elements", "edges"],
source: "on: elements edges: edges\x0a\x09self applyOn: elements",
messageSends: ["applyOn:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOf:",
category: 'utils',
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
args: ["aNode"],
source: "pointerOf: aNode\x0a\x0a\x09^ aNode attributes at: #pointer ifAbsent: [ ^ nil ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "pointerOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("pointer",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"pointerOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "pointerOf: aNode put: aValue\x0a\x0a\x09^ aNode attributes at: #pointer put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rOf:",
category: 'utils',
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
args: ["aNode"],
source: "rOf: aNode \x0a\x09^ aNode attributes at: #r ifAbsent: [ 0 ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("r",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"rOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "rOf: aNode put: aValue\x0a\x09^ aNode attributes at: #r put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rightContourOf:",
category: 'utils',
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
args: ["aNode"],
source: "rightContourOf: aNode\x0a\x09^ aNode attributes at: #rightContour ifAbsent: [ ^ nil ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rightContourOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("rightContour",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"rightContourOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "rightContourOf: aNode put: aValue\x0a\x09aNode attributes at: #rightContour put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'events',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"step",{},smalltalk.RTLayout)});},
args: [],
source: "step\x0a\x22\x09currentIteraction := currentIteraction + 1.\x0a\x09(currentIteraction \x5c\x5c self iterationsToSendEvent) = 0 \x0a\x09\x09ifTrue: [ self announce: (ROLayoutStep new \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09currentIteration: currentIteraction;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09maxInterations: maxInterations) ].\x0a\x09\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "thetaOf:",
category: 'utils',
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
args: ["aNode"],
source: "thetaOf: aNode\x0a\x09^ aNode attributes at: #theta ifAbsent: [ ^ 0 ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "thetaOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(aNode)._attributes())._at_put_("theta",aValue);
return $1;
}, function($ctx1) {$ctx1.fill(self,"thetaOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "thetaOf: aNode put: aValue\x0a\x09^ aNode attributes at: #theta put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "translator",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@translator"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"translator",{},smalltalk.RTLayout)});},
args: [],
source: "translator\x0a\x09^ translator",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "translator:",
category: 'accessing',
fn: function (t) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@translator"]=t;
return self}, function($ctx1) {$ctx1.fill(self,"translator:",{t:t},smalltalk.RTLayout)});},
args: ["t"],
source: "translator: t\x0a\x09translator := t",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "when:do:",
category: 'events',
fn: function (eventClass, aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@eventHandler"])._when_do_(eventClass,aBlock);
return self}, function($ctx1) {$ctx1.fill(self,"when:do:",{eventClass:eventClass,aBlock:aBlock},smalltalk.RTLayout)});},
args: ["eventClass", "aBlock"],
source: "when: eventClass do: aBlock\x0a\x09\x22Register a block as an handler for eventClass\x22\x0a\x09\x0a\x09eventHandler when: eventClass do: aBlock.",
messageSends: ["when:do:"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "xOf:",
category: 'utils',
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
args: ["aNode"],
source: "xOf: aNode \x0a\x09^ aNode attributes at: #x ifAbsent: [ 0 ]",
messageSends: ["at:ifAbsent:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "xOf:put:",
category: 'utils',
fn: function (aNode, aValue) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(aNode)._attributes())._at_put_("x",aValue);
return self}, function($ctx1) {$ctx1.fill(self,"xOf:put:",{aNode:aNode,aValue:aValue},smalltalk.RTLayout)});},
args: ["aNode", "aValue"],
source: "xOf: aNode put: aValue\x0a\x09aNode attributes at: #x put: aValue",
messageSends: ["at:put:", "attributes"],
referencedClasses: []
}),
smalltalk.RTLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name =  #ROLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isNotAbstract",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isAbstract())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"isNotAbstract",{},smalltalk.RTLayout.klass)});},
args: [],
source: "isNotAbstract\x0a\x09^ self isAbstract not",
messageSends: ["not", "isAbstract"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:",
category: 'public',
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
args: ["aCollection"],
source: "on: aCollection\x0a\x09\x22main entry point of the class\x22\x0a\x09\x0a\x09\x22If aCollection is empty, then there is not much to do\x22\x0a\x09aCollection isEmpty ifTrue: [ ^ aCollection ].\x0a\x09self new applyOn: aCollection.\x0a\x09^ aCollection",
messageSends: ["ifTrue:", "isEmpty", "applyOn:", "new"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'public',
fn: function (elements, edges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(elements);
return $1;
}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edges:edges},smalltalk.RTLayout.klass)});},
args: ["elements", "edges"],
source: "on: elements edges: edges\x0a\x09\x22To make all the layout polymorphic\x22\x0a\x09\x0a\x09^ self on: elements",
messageSends: ["on:"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onElement:",
category: 'public',
fn: function (aRoassalViewOrRoassalElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(_st(aRoassalViewOrRoassalElement)._elements());
return $1;
}, function($ctx1) {$ctx1.fill(self,"onElement:",{aRoassalViewOrRoassalElement:aRoassalViewOrRoassalElement},smalltalk.RTLayout.klass)});},
args: ["aRoassalViewOrRoassalElement"],
source: "onElement: aRoassalViewOrRoassalElement\x0a\x0a\x09^ self on: aRoassalViewOrRoassalElement elements",
messageSends: ["on:", "elements"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onView:",
category: 'public',
fn: function (aRoassalView) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._on_(_st(aRoassalView)._elements());
return $1;
}, function($ctx1) {$ctx1.fill(self,"onView:",{aRoassalView:aRoassalView},smalltalk.RTLayout.klass)});},
args: ["aRoassalView"],
source: "onView: aRoassalView\x0a\x0a\x09^ self on: aRoassalView elements",
messageSends: ["on:", "elements"],
referencedClasses: []
}),
smalltalk.RTLayout.klass);


smalltalk.addClass('RTAbstractCircleLayout', smalltalk.RTLayout, ['initialAngle', 'initialIncrementalAngle', 'initialRadius', 'factor'], 'Roassal2-Layouts');
smalltalk.RTAbstractCircleLayout.comment="A ROAbstractCircleLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09factor:\x09\x09<Object>\x0a\x09initialAngle:\x09\x09<Object>\x0a\x09initialIncrementalAngle:\x09\x09<Object>\x0a\x09initialRadius:\x09\x09<Object>\x0a\x0afactor\x0a\x09- xxxxx\x0a\x0ainitialAngle\x0a\x09- xxxxx\x0a\x0ainitialIncrementalAngle\x0a\x09- xxxxx\x0a\x0ainitialRadius\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "initialAngle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialAngle",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "initialAngle\x0a\x09\x22Return the initial angle, in radian\x22\x0a\x09^ initialAngle",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngle:",
category: 'accessing',
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialAngle"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"initialAngle:",{aFloat:aFloat},smalltalk.RTAbstractCircleLayout)});},
args: ["aFloat"],
source: "initialAngle: aFloat\x0a\x09\x22aFloat is an angle in Radian.\x22\x0a\x09initialAngle := aFloat",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngleInDegree",
category: 'accessing',
fn: function () {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._initialAngle()).__star((180))).__slash(_st($Float())._pi());
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialAngleInDegree",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "initialAngleInDegree \x0a\x09\x22Return the initial angle in degree\x22\x0a\x09^ self initialAngle * 180 / Float pi",
messageSends: ["/", "pi", "*", "initialAngle"],
referencedClasses: ["Float"]
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialAngleInDegree:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
self._initialAngle_(_st(_st(aNumber).__star(_st($Float())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"initialAngleInDegree:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
args: ["aNumber"],
source: "initialAngleInDegree: aNumber\x0a\x09\x22Set the initial angle in radian\x22\x0a\x09self initialAngle: aNumber * Float pi / 180",
messageSends: ["initialAngle:", "/", "*", "pi"],
referencedClasses: ["Float"]
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngle",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialIncrementalAngle"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngle",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "initialIncrementalAngle\x0a\x09\x22Return the initial incremental angle\x22\x0a\x09^ initialIncrementalAngle",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngle:",
category: 'accessing',
fn: function (aNumberInRadian) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialIncrementalAngle"]=aNumberInRadian;
return self}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngle:",{aNumberInRadian:aNumberInRadian},smalltalk.RTAbstractCircleLayout)});},
args: ["aNumberInRadian"],
source: "initialIncrementalAngle: aNumberInRadian\x0a\x09initialIncrementalAngle := aNumberInRadian",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialIncrementalAngleInDegree:",
category: 'accessing',
fn: function (aNumberInDegree) {
var self=this;
function $Float(){return smalltalk.Float||(typeof Float=="undefined"?nil:Float)}
return smalltalk.withContext(function($ctx1) { 
self._initialIncrementalAngle_(_st(_st(aNumberInDegree).__star(_st($Float())._pi())).__slash((180)));
return self}, function($ctx1) {$ctx1.fill(self,"initialIncrementalAngleInDegree:",{aNumberInDegree:aNumberInDegree},smalltalk.RTAbstractCircleLayout)});},
args: ["aNumberInDegree"],
source: "initialIncrementalAngleInDegree: aNumberInDegree\x0a\x09self initialIncrementalAngle: aNumberInDegree * Float pi / 180",
messageSends: ["initialIncrementalAngle:", "/", "*", "pi"],
referencedClasses: ["Float"]
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialRadius",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@initialRadius"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initialRadius",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "initialRadius\x0a\x09\x22Return the radius in pixels of the circle\x22\x0a\x09^ initialRadius",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialRadius:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialRadius"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"initialRadius:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
args: ["aNumber"],
source: "initialRadius: aNumber\x0a\x09\x22Set the radius of the circle\x22\x0a\x09initialRadius := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractCircleLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._scaleBy_((11));
self["@initialAngle"]=(0);
self["@initialRadius"]=(0);
self["@initialIncrementalAngle"]=(0);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "initialize\x0a\x09\x22Initialize a newly created instance. This method must answer the receiver.\x22\x0a\x09\x0a\x09super initialize.\x0a\x09self scaleBy: 11.\x0a\x09\x0a\x09\x22Represent the initial angle to place the elements\x22\x0a\x09initialAngle := 0.\x0a\x09\x0a\x09\x22Distance of the circle. If it is 0 when entering doExecute, then it is computed\x22\x0a\x09initialRadius := 0.\x0a\x09\x0a\x09\x220 means that it is computed, and not set by the user\x22\x0a\x09initialIncrementalAngle := 0.",
messageSends: ["initialize", "scaleBy:"],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@factor"]=aNumber;
return self}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aNumber:aNumber},smalltalk.RTAbstractCircleLayout)});},
args: ["aNumber"],
source: "scaleBy: aNumber\x0a\x09\x0a\x09factor := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "scaleFactor",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@factor"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleFactor",{},smalltalk.RTAbstractCircleLayout)});},
args: [],
source: "scaleFactor\x0a\x09^ factor",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCircleLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractCircleLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractCircleLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractCircleLayout.klass);


smalltalk.addClass('RTCenteredCircleLayout', smalltalk.RTAbstractCircleLayout, ['center'], 'Roassal2-Layouts');
smalltalk.RTCenteredCircleLayout.comment="A ROCenteredCircleLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09center:\x09\x09<Object>\x0a\x0acenter\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@center"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RTCenteredCircleLayout)});},
args: [],
source: "center\x0a\x09\x22Return the point around which the layout will place nodes\x22\x0a\x09^ center",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "center:",
category: 'accessing',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"center:",{aPoint:aPoint},smalltalk.RTCenteredCircleLayout)});},
args: ["aPoint"],
source: "center: aPoint\x0a\x09\x22Set the point around which the layout will place nodes\x22\x0a\x09center := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeIncrementalAngleFor:",
category: 'as yet unclassified',
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
args: ["elements"],
source: "computeIncrementalAngleFor: elements\x0a\x09\x22Return the value _in radian_ of the incremental angle\x22\x0a\x09\x0a\x09^ initialIncrementalAngle = 0\x0a\x09\x09ifTrue: [ 2 * Float pi / elements size ]\x0a\x09\x09ifFalse: [ initialIncrementalAngle ]",
messageSends: ["ifTrue:ifFalse:", "/", "size", "*", "pi", "="],
referencedClasses: ["Float"]
}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRadiusFor:",
category: 'as yet unclassified',
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
args: ["elements"],
source: "computeRadiusFor: elements\x0a\x09\x22Return the radius of the circle. If none has been set (i.e., initialRadius = 0), then it is computed as the scale factor times the number of elements\x22\x0a\x09^ initialRadius = 0 \x0a\x09\x09ifTrue: [ elements size * self scaleFactor ]\x0a\x09\x09ifFalse: [ initialRadius ]",
messageSends: ["ifTrue:ifFalse:", "*", "scaleFactor", "size", "="],
referencedClasses: []
}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'as yet unclassified',
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
args: ["elements"],
source: "doExecute: elements\x0a\x09| angleIncrement angle rad centerPoint |\x0a\x09rad := self computeRadiusFor: elements.\x0a\x09centerPoint := center.\x0a\x09angleIncrement := self computeIncrementalAngleFor: elements.\x0a\x09angle := self initialAngle.\x0a\x09elements\x0a\x09\x09do: [ :each | \x0a\x09\x09\x09| point |\x0a\x09\x09\x09point := centerPoint + (Point r: rad theta: angle).\x0a\x09\x09\x09angle := angle + angleIncrement.\x0a\x09\x09\x09translator translateTopLeftOf: each to: point.\x0a\x09\x09\x09self step ]",
messageSends: ["computeRadiusFor:", "computeIncrementalAngleFor:", "initialAngle", "do:", "+", "r:theta:", "translateTopLeftOf:to:", "step"],
referencedClasses: ["Point"]
}),
smalltalk.RTCenteredCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTCenteredCircleLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@center"]=(0).__at((0));
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTCenteredCircleLayout)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09center := 0 @ 0",
messageSends: ["initialize", "@"],
referencedClasses: []
}),
smalltalk.RTCenteredCircleLayout);



smalltalk.addClass('RTCircleLayout', smalltalk.RTAbstractCircleLayout, [], 'Roassal2-Layouts');
smalltalk.RTCircleLayout.comment="A ROCircleLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computeIncrementalAngleFor:",
category: 'hook',
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
args: ["elements"],
source: "computeIncrementalAngleFor: elements\x0a\x09\x22Return the value _in radian_ of the incremental angle\x22\x0a\x09\x0a\x09^ initialIncrementalAngle = 0\x0a\x09\x09ifTrue: [ 2 * Float pi / elements size ]\x0a\x09\x09ifFalse: [ initialIncrementalAngle ]",
messageSends: ["ifTrue:ifFalse:", "/", "size", "*", "pi", "="],
referencedClasses: ["Float"]
}),
smalltalk.RTCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeRadiusFor:",
category: 'hook',
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
args: ["elements"],
source: "computeRadiusFor: elements\x0a\x09\x22Return the radius of the circle. If none has been set (i.e., initialRadius = 0), then it is computed as the scale factor times the number of elements\x22\x0a\x09^ initialRadius = 0 \x0a\x09\x09ifTrue: [ elements size * self scaleFactor ]\x0a\x09\x09ifFalse: [ initialRadius ]",
messageSends: ["ifTrue:ifFalse:", "*", "scaleFactor", "size", "="],
referencedClasses: []
}),
smalltalk.RTCircleLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["elements"],
source: "doExecute: elements\x0a\x09| angleIncrement angle rad center |\x0a\x09rad := self computeRadiusFor: elements.\x0a\x09center := Point x: rad y: rad.\x0a\x09angleIncrement := self computeIncrementalAngleFor: elements.\x0a\x09angle := self initialAngle.\x0a\x09elements\x0a\x09\x09do: [ :each | \x0a\x09\x09\x09| point |\x0a\x09\x09\x09point := center + (Point r: rad theta: angle).\x0a\x09\x09\x09angle := angle + angleIncrement.\x0a\x09\x09\x09translator translateTopLeftOf: each to: point.\x0a\x09\x09\x09self step ]",
messageSends: ["computeRadiusFor:", "x:y:", "computeIncrementalAngleFor:", "initialAngle", "do:", "+", "r:theta:", "translateTopLeftOf:to:", "step"],
referencedClasses: ["Point"]
}),
smalltalk.RTCircleLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "scaleBy:",
category: 'instance creation',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._new())._scaleBy_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"scaleBy:",{aNumber:aNumber},smalltalk.RTCircleLayout.klass)});},
args: ["aNumber"],
source: "scaleBy: aNumber\x0a\x09\x0a\x09^self new scaleBy: aNumber",
messageSends: ["scaleBy:", "new"],
referencedClasses: []
}),
smalltalk.RTCircleLayout.klass);


smalltalk.addClass('RTAbstractGridLayout', smalltalk.RTLayout, ['gapSize', 'lineItemsCountBlock'], 'Roassal2-Layouts');
smalltalk.RTAbstractGridLayout.comment="A ROAbstractGridLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09gapSize:\x09\x09<Object>\x0a\x09lineItemsCountBlock:\x09\x09<Object>\x0a\x0agapSize\x0a\x09- xxxxx\x0a\x0alineItemsCountBlock\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "defaultGapSize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (5);
}, function($ctx1) {$ctx1.fill(self,"defaultGapSize",{},smalltalk.RTAbstractGridLayout)});},
args: [],
source: "defaultGapSize\x0a\x09^ 5",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultLineItemsCount",
category: 'accessing',
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
args: [],
source: "defaultLineItemsCount\x0a\x09\x0a\x09^ [ :elements | \x0a\x09\x09\x09| height width |\x0a\x09\x09\x09(elements size < 3 \x0a\x09\x09\x09\x09ifTrue: [ (elements size max: 1) @ 1 ]\x0a\x09\x09\x09\x09ifFalse: \x0a\x09\x09\x09\x09\x09[ height := (elements size * 0.618034) sqrt ceiling truncated.\x0a\x09\x09\x09\x09\x09width := (elements size / height) ceiling truncated.\x0a\x09\x09\x09\x09\x09width @ height ]) x ]",
messageSends: ["x", "ifTrue:ifFalse:", "@", "max:", "size", "truncated", "ceiling", "sqrt", "*", "/", "<"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.RTAbstractGridLayout)});},
args: [],
source: "gapSize\x0a\x09\x0a\x09^ gapSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{anInteger:anInteger},smalltalk.RTAbstractGridLayout)});},
args: ["anInteger"],
source: "gapSize: anInteger\x0a\x09gapSize := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractGridLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@gapSize"]=self._defaultGapSize();
self["@lineItemsCountBlock"]=self._defaultLineItemsCount();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractGridLayout)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09gapSize := self defaultGapSize.\x0a\x09lineItemsCountBlock := self defaultLineItemsCount.",
messageSends: ["initialize", "defaultGapSize", "defaultLineItemsCount"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCount:",
category: 'accessing',
fn: function (aBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@lineItemsCountBlock"]=aBlock;
return self}, function($ctx1) {$ctx1.fill(self,"lineItemsCount:",{aBlock:aBlock},smalltalk.RTAbstractGridLayout)});},
args: ["aBlock"],
source: "lineItemsCount: aBlock\x0a\x09\x0a\x09lineItemsCountBlock := aBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lineItemsCountBlock",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@lineItemsCountBlock"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"lineItemsCountBlock",{},smalltalk.RTAbstractGridLayout)});},
args: [],
source: "lineItemsCountBlock\x0a\x09\x0a\x09^ lineItemsCountBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'public',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGridLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractGridLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name =  #ROAbstractGridLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withGap:withLineItemsCount:",
category: 'public',
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
args: ["aCollectionOfElements", "anInteger", "aBlock"],
source: "on: aCollectionOfElements withGap: anInteger withLineItemsCount: aBlock\x0a\x09\x22place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally\x22\x0a\x09\x0a\x09| myLayout |\x0a\x09myLayout := self new gapSize: anInteger;  lineItemsCount: aBlock; yourself.\x0a\x09myLayout applyOn: aCollectionOfElements.\x0a\x09^ aCollectionOfElements",
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself", "applyOn:"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:withLineItemsCount:",
category: 'public',
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
args: ["aCollectionOfElements", "aBlock"],
source: "on: aCollectionOfElements withLineItemsCount: aBlock\x0a\x09\x22place the elements in a grid with (aBlock roValue: aCollectionOfElements) as the amount of elements horizontally\x0a\x0a\x09For example:\x0a\x09self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: 5\x0a\x09=> place the 20 elements on a grid 5 x 4\x0a\x09\x0a\x09self on: (ROElement forCollection: (1 to: 20)) withLineItemsCount: [ :elements | elements size // 3 ]\x0a\x09=> place the 20 elements on a grid 3 x 7\x0a\x09\x22\x0a\x09\x0a\x09\x0a\x09| myLayout |\x0a\x09myLayout := self new lineItemsCount: aBlock; yourself.\x0a\x09myLayout applyOn: aCollectionOfElements.\x0a\x09^ aCollectionOfElements",
messageSends: ["lineItemsCount:", "new", "yourself", "applyOn:"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
category: 'instance creation',
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
args: ["anInteger"],
source: "withGap: anInteger \x0a\x0a\x09^ self new \x0a\x09\x09\x09gapSize: anInteger; \x0a\x09\x09\x09yourself",
messageSends: ["gapSize:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:withLineItemsCount:",
category: 'instance creation',
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
args: ["anInteger", "aBlock"],
source: "withGap: anInteger withLineItemsCount: aBlock\x0a\x09\x0a\x09^self new\x0a\x09\x09gapSize: anInteger;\x0a\x09\x09lineItemsCount: aBlock;\x0a\x09\x09yourself",
messageSends: ["gapSize:", "new", "lineItemsCount:", "yourself"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withLineItemsCount:",
category: 'instance creation',
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
args: ["aBlock"],
source: "withLineItemsCount: aBlock\x0a\x09\x0a\x09^self new\x0a\x09\x09lineItemsCount: aBlock;\x0a\x09\x09yourself",
messageSends: ["lineItemsCount:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTAbstractGridLayout.klass);


smalltalk.addClass('RTCellLayout', smalltalk.RTAbstractGridLayout, ['inCellPosition'], 'Roassal2-Layouts');
smalltalk.RTCellLayout.comment="A ROCellLayout is like ROGridLayout. Elements of each column are centered along the same vertical line. And elements of each row are centered along the same horizontal line.\x0a\x0aInstance Variables\x0a\x09inCellPosition:\x09\x09<Object | Block>\x0a\x0ainCellPosition\x0a\x09- Object which computes position of each element inside a cell. The cell is the space allocated for an element. Its height is maximum of heights of elements on the row. Its width is maximum of widths of elements on the column. By default elements are in the middle of their cell.";
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer lineItemCount lineItemSize cell |\x0a\x09lineItemSize := self lineItemsCountBlock rtValue: elements.\x0a\x09cell := RTCell elements: elements columns: lineItemSize.\x0a\x09pointer := self gapSize @ self gapSize.\x0a\x09lineItemCount := 0.\x0a\x09elements withIndexDo: \x0a\x09\x09[ :element :index | \x0a\x09\x09cell element: element; number: index.\x0a\x09\x09translator translateTopLeftOf: element to: pointer.\x0a\x09\x09pointer := (pointer x + cell extent x + (self gapSize * 2)) @ pointer y.\x0a\x09\x09lineItemCount := lineItemCount + 1.\x0a\x09\x09lineItemCount >= lineItemSize ifTrue: \x0a\x09\x09\x09[ pointer := self gapSize @ (pointer y + (self gapSize * 2) + cell extent y).\x0a\x09\x09\x09lineItemCount := 0 ].\x0a\x09\x09self step ]",
messageSends: ["rtValue:", "lineItemsCountBlock", "elements:columns:", "@", "gapSize", "withIndexDo:", "element:", "number:", "translateTopLeftOf:to:", "y", "+", "*", "x", "extent", "ifTrue:", ">=", "step"],
referencedClasses: ["RTCell"]
}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "inCellPosition:",
category: 'accessing',
fn: function (anObjectOrOneArgBlock) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@inCellPosition"]=anObjectOrOneArgBlock;
return self}, function($ctx1) {$ctx1.fill(self,"inCellPosition:",{anObjectOrOneArgBlock:anObjectOrOneArgBlock},smalltalk.RTCellLayout)});},
args: ["anObjectOrOneArgBlock"],
source: "inCellPosition: anObjectOrOneArgBlock\x0a\x0a\x09inCellPosition := anObjectOrOneArgBlock",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTCellLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTCellLayout)});},
args: [],
source: "initialize\x0a\x0a\x09super initialize.",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTCellLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftCentred",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._inCellPosition_((function(cell){
return smalltalk.withContext(function($ctx2) {
return (0).__at(_st(_st(_st(_st(cell)._extent())._y()).__minus(_st(_st(cell)._element())._height())).__slash((2)));
}, function($ctx2) {$ctx2.fillBlock({cell:cell},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"leftCentred",{},smalltalk.RTCellLayout)});},
args: [],
source: "leftCentred\x0a\x0a\x09self inCellPosition: [ :cell | 0 @ ((cell extent y - cell element height) / 2) ]",
messageSends: ["inCellPosition:", "@", "/", "-", "height", "element", "y", "extent"],
referencedClasses: []
}),
smalltalk.RTCellLayout);



smalltalk.addClass('RTGridLayout', smalltalk.RTAbstractGridLayout, [], 'Roassal2-Layouts');
smalltalk.RTGridLayout.comment="A ROGridLayout places elements as a grid.\x0a\x0aInstance Variables\x0a\x09gapSize:\x09\x09<SmallInteger>\x0a\x09lineItemsCountBlock:\x09\x09<BlockContext>\x0a\x0agapSize\x0a\x09- number of pixels between each elements, horizontally and vertically\x0a\x0alineItemsCountBlock\x0a\x09- tells the amount of item per line should be used";
smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["elements"],
source: "doExecute: elements\x0a\x09| pointer lineItemCount lineItemSize maxLastLineHeight originalGapLeft originalGapTop |\x0a\x09originalGapLeft := 0.\x0a\x09originalGapTop := 0.\x0a\x09\x0a\x09pointer := originalGapLeft @ originalGapTop.\x0a\x09lineItemSize := self lineItemsCountBlock rtValue: elements.\x0a\x09lineItemCount := 0.\x0a\x09maxLastLineHeight := 0.\x0a\x0a\x09elements\x0a\x09\x09do: [ :element | \x0a\x09\x09\x09translator translateTopLeftOf: element to: pointer.\x0a\x09\x09\x09pointer := (pointer x + element width + self gapSize) @ pointer y.\x0a\x09\x09\x09lineItemCount := lineItemCount + 1.\x0a\x09\x09\x09maxLastLineHeight := maxLastLineHeight max: element height.\x0a\x09\x09\x09lineItemCount >= lineItemSize\x0a\x09\x09\x09\x09ifTrue: [ \x0a\x09\x09\x09\x09\x09pointer := originalGapLeft @ (pointer y + (self gapSize * 2) + maxLastLineHeight).\x0a\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09maxLastLineHeight := 0.\x0a\x09\x09\x09\x09\x09lineItemCount := 0 ].\x0a\x09\x09\x09self step ].",
messageSends: ["@", "rtValue:", "lineItemsCountBlock", "do:", "translateTopLeftOf:to:", "y", "+", "gapSize", "width", "x", "max:", "height", "ifTrue:", "*", ">=", "step"],
referencedClasses: []
}),
smalltalk.RTGridLayout);



smalltalk.addClass('RTAbstractLineLayout', smalltalk.RTLayout, ['gapSize', 'horizontalGap', 'verticalGap', 'horizontalOutGap', 'verticalOutGap', 'alignment', 'horizontallyStretchable', 'verticallyStretchable'], 'Roassal2-Layouts');
smalltalk.RTAbstractLineLayout.comment="A ROAbstractLineLayout is the abstract superclass of the line layout.\x0a\x0aInstance Variables\x0a\x09alignment:\x09\x09<Object>\x0a\x09gapSize:\x09\x09<Object>\x0a\x09horizontalGap:\x09\x09<Object>\x0a\x09horizontalOutGap:\x09\x09<Object>\x0a\x09horizontallyStretchable:\x09\x09<Object>\x0a\x09verticalGap:\x09\x09<Object>\x0a\x09verticalOutGap:\x09\x09<Object>\x0a\x09verticallyStretchable:\x09\x09<Object>\x0a\x0aalignment\x0a\x09- xxxxx\x0a\x0agapSize\x0a\x09- xxxxx\x0a\x0ahorizontalGap\x0a\x09- xxxxx\x0a\x0ahorizontalOutGap\x0a\x09- xxxxx\x0a\x0ahorizontallyStretchable\x0a\x09- xxxxx\x0a\x0averticalGap\x0a\x09- xxxxx\x0a\x0averticalOutGap\x0a\x09- xxxxx\x0a\x0averticallyStretchable\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "alignBottom",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="bottom";
return self}, function($ctx1) {$ctx1.fill(self,"alignBottom",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignBottom\x0a\x09\x0a\x09alignment := #bottom",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignCenter",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="center";
return self}, function($ctx1) {$ctx1.fill(self,"alignCenter",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignCenter\x0a\x09\x0a\x09alignment := #center",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignLeft",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="left";
return self}, function($ctx1) {$ctx1.fill(self,"alignLeft",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignLeft\x0a\x09\x0a\x09alignment := #left",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignRight",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="right";
return self}, function($ctx1) {$ctx1.fill(self,"alignRight",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignRight\x0a\x09\x0a\x09alignment := #right",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignTop",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]="top";
return self}, function($ctx1) {$ctx1.fill(self,"alignTop",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignTop\x0a\x09\x0a\x09alignment := #top",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@alignment"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"alignment",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "alignment\x0a\x09\x0a\x09^alignment",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "alignment:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@alignment"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"alignment:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
args: ["anObject"],
source: "alignment: anObject\x0a\x09\x0a\x09alignment := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "center",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._alignment_("center");
return self}, function($ctx1) {$ctx1.fill(self,"center",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "center\x0a\x09self alignment: #center",
messageSends: ["alignment:"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
category: 'hook',
fn: function (aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deltaFor:",{aNodeFigure:aNodeFigure},smalltalk.RTAbstractLineLayout)});},
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
category: 'hook',
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doCenter:",{aGraph:aGraph},smalltalk.RTAbstractLineLayout)});},
args: ["aGraph"],
source: "doCenter: aGraph\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["elements"],
source: "doExecute: elements \x0a\x09| pointer delta |\x0a\x09horizontallyStretchable ifTrue: \x0a\x09\x09[ self doStretchHorizontal: elements ].\x0a\x09verticallyStretchable ifTrue: \x0a\x09\x09[ self doStretchVertical: elements ].\x0a\x09pointer := self positionOriginalPointer: elements.\x0a\x0a\x09elements do: \x0a\x09\x09[ :element |\x0a\x09\x09delta := self deltaFor: element.\x0a\x09\x09translator translateTopLeftOf: element to: pointer - delta.\x0a\x09\x09pointer := self \x0a\x09\x09\x09\x09\x09movePointer: pointer\x0a\x09\x09\x09\x09\x09accordingToFigure: element.\x0a\x09\x09self step ].",
messageSends: ["ifTrue:", "doStretchHorizontal:", "doStretchVertical:", "positionOriginalPointer:", "do:", "deltaFor:", "translateTopLeftOf:to:", "-", "movePointer:accordingToFigure:", "step"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
category: 'hook',
fn: function (aCollectionOfElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doStretchHorizontal:",{aCollectionOfElements:aCollectionOfElements},smalltalk.RTAbstractLineLayout)});},
args: ["aCollectionOfElements"],
source: "doStretchHorizontal: aCollectionOfElements \x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
category: 'hook',
fn: function (aCollectionOfElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doStretchVertical:",{aCollectionOfElements:aCollectionOfElements},smalltalk.RTAbstractLineLayout)});},
args: ["aCollectionOfElements"],
source: "doStretchVertical: aCollectionOfElements \x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@gapSize"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"gapSize",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "gapSize\x0a\x09\x0a\x09^gapSize",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gapSize:",
category: 'accessing',
fn: function (aNumber) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@gapSize"]=aNumber;
self["@verticalGap"]=(2).__star(aNumber);
self["@horizontalGap"]=(2).__star(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"gapSize:",{aNumber:aNumber},smalltalk.RTAbstractLineLayout)});},
args: ["aNumber"],
source: "gapSize: aNumber\x0a\x09gapSize := aNumber. \x22 This value is never used actually \x22\x0a\x09\x0a\x09verticalGap := 2 * aNumber.\x0a\x09horizontalGap := 2 * aNumber",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@horizontalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
args: ["anObject"],
source: "horizontalGap: anObject\x0a\x09\x0a\x09horizontalGap := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontallyStretchable",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@horizontallyStretchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"horizontallyStretchable",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "horizontallyStretchable\x0a\x09^ horizontallyStretchable",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(10);
self["@horizontalGap"]=(10);
self["@horizontallyStretchable"]=false;
self["@verticallyStretchable"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09verticalGap := 10.\x0a\x09horizontalGap := 10.\x0a\x09horizontallyStretchable := false.\x0a\x09verticallyStretchable := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "isLineLayout\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'hook',
fn: function (pointer, aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,aNodeFigure:aNodeFigure},smalltalk.RTAbstractLineLayout)});},
args: ["pointer", "aNodeFigure"],
source: "movePointer: pointer accordingToFigure: aNodeFigure\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'hook',
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclassResponsibility();
return $1;
}, function($ctx1) {$ctx1.fill(self,"positionOriginalPointer:",{aGraph:aGraph},smalltalk.RTAbstractLineLayout)});},
args: ["aGraph"],
source: "positionOriginalPointer: aGraph\x0a\x09\x0a\x09^self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretch",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticallyStretchable"]=true;
self["@horizontallyStretchable"]=self["@verticallyStretchable"];
return self}, function($ctx1) {$ctx1.fill(self,"stretch",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "stretch\x0a\x09horizontallyStretchable := verticallyStretchable := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretchHorizontally",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontallyStretchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"stretchHorizontally",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "stretchHorizontally\x0a\x09horizontallyStretchable := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "stretchVertically",
category: 'configuration',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticallyStretchable"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"stretchVertically",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "stretchVertically\x0a\x09verticallyStretchable := true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@verticalGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^verticalGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anObject:anObject},smalltalk.RTAbstractLineLayout)});},
args: ["anObject"],
source: "verticalGap: anObject\x0a\x09\x0a\x09verticalGap := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticallyStretchable",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@verticallyStretchable"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"verticallyStretchable",{},smalltalk.RTAbstractLineLayout)});},
args: [],
source: "verticallyStretchable\x0a\x09^ verticallyStretchable",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractLineLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractLineLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name =  #ROAbstractLineLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withGap:",
category: 'instance creation',
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
args: ["anInteger"],
source: "withGap: anInteger\x0a\x09\x0a\x09^(self new)\x0a\x09\x09gapSize: anInteger;\x0a\x09\x09yourself",
messageSends: ["gapSize:", "new", "yourself"],
referencedClasses: []
}),
smalltalk.RTAbstractLineLayout.klass);


smalltalk.addClass('RTHorizontalLineLayout', smalltalk.RTAbstractLineLayout, [], 'Roassal2-Layouts');
smalltalk.RTHorizontalLineLayout.comment="A RTHorizontalLineLayout locates all the elements horizontally";
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
category: 'hook',
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
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09| delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: [delta := aNodeFigure height].\x0a\x09self alignment == #center ifTrue: [delta := aNodeFigure height / 2.0].\x0a\x09^0 @ delta",
messageSends: ["ifTrue:", "height", "==", "alignment", "/", "@"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
category: 'hook',
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
args: ["elements"],
source: "doCenter: elements \x0a\x0a \x09| midTallest step |\x0a\x09midTallest := 0.\x0a\x09midTallest := elements nodes \x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m max: (el bounds height )].\x0a\x09midTallest := midTallest / 2.\x0a\x09elements nodes do: [ :node | \x0a\x09\x09step := 0 @ (midTallest - (node bounds height / 2)) asInteger.\x0a\x09\x09node bounds origin: (node bounds origin + step).\x0a\x09\x09node bounds corner: (node bounds corner + step).\x0a\x09]",
messageSends: ["inject:into:", "max:", "height", "bounds", "nodes", "/", "do:", "@", "asInteger", "-", "origin:", "+", "origin", "corner:", "corner"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
category: 'hook',
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
args: ["aCollectionOfElements"],
source: "doStretchHorizontal: aCollectionOfElements \x0a\x0a \x09| parent parentBounds addedWidth parentBoundsWidth runningIndex newWidth |\x0a\x0a\x09aCollectionOfElements isEmpty ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09addedWidth := aCollectionOfElements\x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m + el width ].\x0a\x0a\x09parentBoundsWidth := parentBounds width.\x0a\x22\x09parentBoundsWidth := parentBoundsWidth - ((aCollectionOfElements size - 1) * horizontalGap) - (2 * horizontalOutGap).\x22\x0a\x09\x0a\x09\x0a\x09runningIndex := 0.\x0a\x09parentBounds width > addedWidth\x0a\x09\x09ifTrue: [ aCollectionOfElements do: [ :element | \x0a\x09\x09\x09\x09\x09\x09newWidth := (element width * parentBoundsWidth / addedWidth) asInteger.\x0a\x09\x09\x09\x09\x09\x09element width: newWidth.\x0a\x09\x09\x09\x09\x09\x09runningIndex := runningIndex + newWidth + horizontalGap ] ]",
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "inject:into:", "+", "width", "do:", "asInteger", "/", "*", "width:", ">"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
category: 'hook',
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
args: ["aCollectionOfElements"],
source: "doStretchVertical: aCollectionOfElements \x0a\x0a \x09| parent parentBounds |\x0a\x09aCollectionOfElements isEmpty ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09aCollectionOfElements do: [ :element | \x0a\x09\x09element height: (parentBounds height) ]",
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "do:", "height:", "height"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTHorizontalLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alignTop();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTHorizontalLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09self alignTop",
messageSends: ["initialize", "alignTop"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'hook',
fn: function (pointer, element) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(pointer)._x()).__plus(_st(element)._width())).__plus(self._horizontalGap())).__at(_st(pointer)._y());
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,element:element},smalltalk.RTHorizontalLineLayout)});},
args: ["pointer", "element"],
source: "movePointer: pointer accordingToFigure: element\x0a\x09\x0a\x09^ (pointer x + element width + self horizontalGap) @ pointer y",
messageSends: ["@", "y", "+", "horizontalGap", "width", "x"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'hook',
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
args: ["elements"],
source: "positionOriginalPointer: elements \x0a\x09| maxHeight delta |\x0a\x09delta := 0.\x0a\x09self alignment == #bottom ifTrue: \x0a\x09\x09[ maxHeight := elements maxValue: #height.\x0a\x09\x09delta := maxHeight ].\x0a\x09self alignment == #center ifTrue: \x0a\x09\x09[ maxHeight := elements maxValue: #height.\x0a\x09\x09delta := maxHeight / 2.0 ].\x0a\x09^ (0) @ ((0) + delta)",
messageSends: ["ifTrue:", "maxValue:", "==", "alignment", "/", "@", "+"],
referencedClasses: []
}),
smalltalk.RTHorizontalLineLayout);



smalltalk.addClass('RTVerticalLineLayout', smalltalk.RTAbstractLineLayout, [], 'Roassal2-Layouts');
smalltalk.RTVerticalLineLayout.comment="A RTVerticalLineLayout locates all the elements vertically";
smalltalk.addMethod(
smalltalk.method({
selector: "deltaFor:",
category: 'hook',
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
args: ["aNodeFigure"],
source: "deltaFor: aNodeFigure\x0a\x09\x0a\x09| delta |\x0a\x09delta := 0.\x0a\x09self alignment == #right ifTrue: [delta := aNodeFigure width].\x0a\x09self alignment == #center ifTrue: [delta := aNodeFigure width / 2.0].\x0a\x09^delta @ 0",
messageSends: ["ifTrue:", "width", "==", "alignment", "/", "@"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doCenter:",
category: 'hook',
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
args: ["aGraph"],
source: "doCenter: aGraph \x0a\x0a \x09| midWidest step |\x0a\x09midWidest := aGraph nodes \x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m max: (el bounds width )].\x0a\x09midWidest := midWidest / 2.\x0a\x09aGraph nodes do: [ :node | \x0a\x09\x09step := (midWidest - (node bounds width /2)) asInteger @ 0.\x0a\x09\x09node bounds origin: (node bounds origin + step).\x0a\x09\x09node bounds corner: (node bounds corner + step).\x0a\x09]",
messageSends: ["inject:into:", "max:", "width", "bounds", "nodes", "/", "do:", "@", "asInteger", "-", "origin:", "+", "origin", "corner:", "corner"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchHorizontal:",
category: 'hook',
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
args: ["aCollectionOfElements"],
source: "doStretchHorizontal: aCollectionOfElements \x0a\x09\x0a \x09| parent parentBounds |\x0a\x09aCollectionOfElements isNil ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09aCollectionOfElements do: [ :element | \x0a\x09\x09element width: parentBounds width ]",
messageSends: ["ifTrue:", "isNil", "parent", "anyOne", "isView", "bounds", "do:", "width:", "width"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doStretchVertical:",
category: 'hook',
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
args: ["aCollectionOfElements"],
source: "doStretchVertical: aCollectionOfElements \x0a\x0a \x09| parent parentBounds addedHeight parentBoundsHeight runningIndex newHeight |\x0a\x0a\x09aCollectionOfElements isEmpty ifTrue: [ ^ self \x22nothing to do\x22 ].\x0a\x09parent := aCollectionOfElements anyOne parent.\x0a\x09parent isView ifTrue: [ ^ self \x22ROView does not have bounds\x22 ].\x0a\x09parentBounds := parent bounds.\x0a\x0a\x09addedHeight := aCollectionOfElements \x0a\x09\x09inject: 0\x0a\x09\x09into: [ :m :el | m + el height ].\x0a\x0a\x09parentBoundsHeight := parentBounds height.\x0a\x09\x22parentBoundsHeight := parentBoundsHeight - ((aCollectionOfElements size - 1) * verticalGap) - (2 * verticalOutGap).\x22\x0a\x09\x0a\x09runningIndex := 0.\x0a\x09parentBounds height > addedHeight\x0a\x09\x09ifTrue: [ aCollectionOfElements do: [ :element | \x0a\x09\x09\x09\x09\x09\x09newHeight := (element height * parentBoundsHeight / addedHeight) asInteger.\x0a\x09\x09\x09\x09\x09\x09element height: newHeight.\x0a\x09\x09\x09\x09\x09\x09runningIndex := runningIndex + newHeight + verticalGap ] ]",
messageSends: ["ifTrue:", "isEmpty", "parent", "anyOne", "isView", "bounds", "inject:into:", "+", "height", "do:", "asInteger", "/", "*", "height:", ">"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTVerticalLineLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self._alignLeft();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTVerticalLineLayout)});},
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09self alignLeft",
messageSends: ["initialize", "alignLeft"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "movePointer:accordingToFigure:",
category: 'hook',
fn: function (pointer, aNodeFigure) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(pointer)._x()).__at(_st(_st(_st(pointer)._y()).__plus(_st(aNodeFigure)._height())).__plus(self._verticalGap()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"movePointer:accordingToFigure:",{pointer:pointer,aNodeFigure:aNodeFigure},smalltalk.RTVerticalLineLayout)});},
args: ["pointer", "aNodeFigure"],
source: "movePointer: pointer accordingToFigure: aNodeFigure\x0a\x09\x0a\x09^ pointer x @ (pointer y + aNodeFigure height + self verticalGap)",
messageSends: ["@", "+", "verticalGap", "height", "y", "x"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "positionOriginalPointer:",
category: 'hook',
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
args: ["elements"],
source: "positionOriginalPointer: elements \x0a\x09| maxWidth delta |\x0a\x09delta := 0.\x0a\x09self alignment == #right ifTrue: \x0a\x09\x09[ maxWidth := elements maxValue: #width.\x0a\x09\x09delta := maxWidth ].\x0a\x09self alignment == #center ifTrue: \x0a\x09\x09[ maxWidth := elements maxValue: #width.\x0a\x09\x09delta := maxWidth / 2.0 ].\x0a\x09^ ((0) + delta) @ (0)",
messageSends: ["ifTrue:", "maxValue:", "==", "alignment", "/", "@", "+"],
referencedClasses: []
}),
smalltalk.RTVerticalLineLayout);



smalltalk.addClass('RTEdgeDrivenLayout', smalltalk.RTLayout, ['edges', 'userDefinedEdges', 'fromPositions', 'toPositions'], 'Roassal2-Layouts');
smalltalk.RTEdgeDrivenLayout.comment="A ROEdgeDrivenLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09edges:\x09\x09<Object>\x0a\x09fromPositions:\x09\x09<Object>\x0a\x09toPositions:\x09\x09<Object>\x0a\x09userDefinedEdges:\x09\x09<Object>\x0a\x0aedges\x0a\x09- xxxxx\x0a\x0afromPositions\x0a\x09- xxxxx\x0a\x0atoPositions\x0a\x09- xxxxx\x0a\x0auserDefinedEdges\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@affectedNodes"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"affectedNodes",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "affectedNodes\x0a\x09\x0a\x09^affectedNodes",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodes:",
category: 'accessing',
fn: function (anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@affectedNodes"]=anObject;
return self}, function($ctx1) {$ctx1.fill(self,"affectedNodes:",{anObject:anObject},smalltalk.RTEdgeDrivenLayout)});},
args: ["anObject"],
source: "affectedNodes: anObject\x0a\x09\x0a\x09affectedNodes := anObject",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "affectedNodesOf:",
category: 'accessing',
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
args: ["aNode"],
source: "affectedNodesOf:  aNode \x0a\x09^ affectedNodes ifNil: [ aNode nodes ]",
messageSends: ["ifNil:", "nodes"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "defaultFromPositions\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=[];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "defaultToPositions\x0a\x09^ #()",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
fn: function (aGraphElement) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"doExecute:",{aGraphElement:aGraphElement},smalltalk.RTEdgeDrivenLayout)});},
args: ["aGraphElement"],
source: "doExecute: aGraphElement\x0a\x09\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doIncrementallyExecute:",
category: 'hook',
fn: function (anElementNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._doExecute_(anElementNode);
return self}, function($ctx1) {$ctx1.fill(self,"doIncrementallyExecute:",{anElementNode:anElementNode},smalltalk.RTEdgeDrivenLayout)});},
args: ["anElementNode"],
source: "doIncrementallyExecute: anElementNode\x0a\x09\x22called by refreshLayoutEvery: ms. It is used to convey a feeling of incremental execution.\x22\x0a\x09\x0a\x09self doExecute: anElementNode",
messageSends: ["doExecute:"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges",
category: 'private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@edges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"edges",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "edges\x0a\x09\x0a\x09^edges",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edges:",
category: 'accessing',
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@edges"]=aCollection;
return self}, function($ctx1) {$ctx1.fill(self,"edges:",{aCollection:aCollection},smalltalk.RTEdgeDrivenLayout)});},
args: ["aCollection"],
source: "edges: aCollection\x0a\x09\x0a\x09edges := aCollection",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "edgesDo:",
category: 'iterator',
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
args: ["aBlock"],
source: "edgesDo: aBlock\x0a\x09\x22Iterates over all the edges of the receiver.\x22\x0a\x09\x0a\x09edges ifNil: [ ^ self ].\x0a\x09edges do: aBlock",
messageSends: ["ifNil:", "do:"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "executeOnElements:",
category: 'hook',
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
args: ["elements"],
source: "executeOnElements: elements \x0a\x09\x22Execute the layout, myself, on the elements\x22\x0a\x0a\x09self userDefinedEdges isNil \x0a\x09\x09ifTrue: [ self setEdgesFromElements: elements ]\x0a\x09\x09ifFalse: \x0a\x09\x09\x09[ | flat |\x0a\x09\x09\x09flat := OrderedCollection new.\x0a\x09\x09\x09self userDefinedEdges do: \x0a\x09\x09\x09\x09[ :each | \x0a\x09\x09\x09\x09each isCollection \x0a\x09\x09\x09\x09\x09ifTrue: [ flat addAll: each ]\x0a\x09\x09\x09\x09\x09ifFalse: [ flat add: each ] ].\x0a\x09\x09\x09self edges: flat ].\x0a\x09\x09\x0a\x09super executeOnElements: elements",
messageSends: ["ifTrue:ifFalse:", "setEdgesFromElements:", "new", "do:", "addAll:", "add:", "isCollection", "userDefinedEdges", "edges:", "isNil", "executeOnElements:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions",
category: 'private',
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
args: [],
source: "fromPositions\x0a\x09\x0a\x09^fromPositions ifNil: [fromPositions := self defaultFromPositions]",
messageSends: ["ifNil:", "defaultFromPositions"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fromPositions:",
category: 'accessing',
fn: function (anArray) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@fromPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"fromPositions:",{anArray:anArray},smalltalk.RTEdgeDrivenLayout)});},
args: ["anArray"],
source: "fromPositions: anArray\x0a\x09\x0a\x09fromPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTEdgeDrivenLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@edges"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "initialize\x0a\x09\x22Initialization\x22\x0a\x09super initialize.\x0a\x09edges := nil",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLineLayout",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return false;
}, function($ctx1) {$ctx1.fill(self,"isLineLayout",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "isLineLayout\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "setEdgesFromElements:",
category: 'accessing',
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
args: ["elements"],
source: "setEdgesFromElements: elements \x0a\x09| view |\x0a\x09elements isEmpty ifTrue: [ ^ self ].\x0a\x09\x0a\x09view := elements anyOne view.\x0a\x09self edges: (view edges select: [ :el | (elements includes: el from) and: [ elements includes: el to ] ]).",
messageSends: ["ifTrue:", "isEmpty", "view", "anyOne", "edges:", "select:", "and:", "includes:", "to", "from", "edges"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions",
category: 'private',
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
args: [],
source: "toPositions\x0a\x09\x0a\x09^toPositions ifNil: [toPositions := self defaultToPositions]",
messageSends: ["ifNil:", "defaultToPositions"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toPositions:",
category: 'accessing',
fn: function (anArray) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@toPositions"]=anArray;
return self}, function($ctx1) {$ctx1.fill(self,"toPositions:",{anArray:anArray},smalltalk.RTEdgeDrivenLayout)});},
args: ["anArray"],
source: "toPositions: anArray\x0a\x09\x0a\x09toPositions := anArray",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges",
category: 'private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@userDefinedEdges"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges",{},smalltalk.RTEdgeDrivenLayout)});},
args: [],
source: "userDefinedEdges\x0a\x09\x0a\x09^userDefinedEdges",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "userDefinedEdges:",
category: 'initialize-release',
fn: function (aCollectionOfEdges) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@userDefinedEdges"]=aCollectionOfEdges;
return self}, function($ctx1) {$ctx1.fill(self,"userDefinedEdges:",{aCollectionOfEdges:aCollectionOfEdges},smalltalk.RTEdgeDrivenLayout)});},
args: ["aCollectionOfEdges"],
source: "userDefinedEdges: aCollectionOfEdges\x0a\x09\x22useful to tell to the layout which edges have to be used for the layout\x22\x0a\x0a\x09userDefinedEdges := aCollectionOfEdges.",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROEdgeDrivenLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTEdgeDrivenLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROEdgeDrivenLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "withEdges:",
category: 'instance creation',
fn: function (aCollection) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._new())._initialize())._userDefinedEdges_(aCollection);
return $1;
}, function($ctx1) {$ctx1.fill(self,"withEdges:",{aCollection:aCollection},smalltalk.RTEdgeDrivenLayout.klass)});},
args: ["aCollection"],
source: "withEdges: aCollection\x0a\x09\x0a\x09^self new initialize userDefinedEdges: aCollection",
messageSends: ["userDefinedEdges:", "initialize", "new"],
referencedClasses: []
}),
smalltalk.RTEdgeDrivenLayout.klass);


smalltalk.addClass('RTAbstractGraphLayout', smalltalk.RTEdgeDrivenLayout, ['verticalGap', 'horizontalGap', 'cachedChildren', 'cachedParents', 'cachedParentsWithHighestNestings'], 'Roassal2-Layouts');
smalltalk.RTAbstractGraphLayout.comment="A ROAbstractGraphLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09cachedChildren:\x09\x09<Object>\x0a\x09cachedParents:\x09\x09<Object>\x0a\x09cachedParentsWithHighestNestings:\x09\x09<Object>\x0a\x09horizontalGap:\x09\x09<Object>\x0a\x09verticalGap:\x09\x09<Object>\x0a\x0acachedChildren\x0a\x09- xxxxx\x0a\x0acachedParents\x0a\x09- xxxxx\x0a\x0acachedParentsWithHighestNestings\x0a\x09- xxxxx\x0a\x0ahorizontalGap\x0a\x09- xxxxx\x0a\x0averticalGap\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "cachedChildren",
category: 'private',
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
args: [],
source: "cachedChildren\x0a\x09\x0a\x09cachedChildren ifNil: [cachedChildren := IdentityDictionary new: 1000].\x0a\x09^cachedChildren",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParents",
category: 'private',
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
args: [],
source: "cachedParents\x0a\x09\x0a\x09cachedParents ifNil: [cachedParents := IdentityDictionary new: 1000].\x0a\x09^cachedParents",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "cachedParentsWithHighestNestings",
category: 'private',
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
args: [],
source: "cachedParentsWithHighestNestings\x0a\x09\x0a\x09cachedParentsWithHighestNestings\x0a\x09\x09ifNil: [cachedParentsWithHighestNestings := IdentityDictionary new: 1000].\x0a\x09^cachedParentsWithHighestNestings",
messageSends: ["ifNil:", "new:"],
referencedClasses: ["IdentityDictionary"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
category: 'private',
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
args: ["aNode"],
source: "childrenFor: aNode\x0a\x09\x0a\x09^self cachedChildren\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[| nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | \x0a\x09\x09\x09\x09\x09(edge from == aNode and: [edge to ~= aNode])\x0a\x09\x09\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09\x09\x09[(nodes includes: edge from) ifFalse: [nodes add: edge to]]].\x0a\x09\x09\x09nodes]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "ifFalse:", "add:", "to", "includes:", "from", "and:", "~=", "==", "cachedChildren"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:except:",
category: 'private',
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
args: ["aNode", "aNodeCollection"],
source: "childrenFor: aNode except: aNodeCollection\x0a\x09\x0a\x09^(self childrenFor: aNode) \x0a\x09\x09reject: [:each | aNodeCollection includes: each]\x0a\x09\x0a\x09\x22we are explicitly not using the default Collection>>difference: behavior here because we want to preserve the order of the collection\x22",
messageSends: ["reject:", "includes:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "childrenWithHighestNestingLevelFor:",
category: 'private',
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
args: ["aNode"],
source: "childrenWithHighestNestingLevelFor: aNode\x0a\x09\x0a\x09^(self childrenFor: aNode)\x0a\x09\x09select: [:eachChild | (self highestNestingParentFor: eachChild) == aNode]",
messageSends: ["select:", "==", "highestNestingParentFor:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "clear",
category: 'private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@cachedParents"]=nil;
self["@cachedChildren"]=nil;
self["@cachedParentsWithHighestNestings"]=nil;
return self}, function($ctx1) {$ctx1.fill(self,"clear",{},smalltalk.RTAbstractGraphLayout)});},
args: [],
source: "clear\x0a\x09\x0a\x09cachedParents := nil.\x0a\x09cachedChildren := nil.\x0a\x09cachedParentsWithHighestNestings := nil",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'default values',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["bottomCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTAbstractGraphLayout)});},
args: [],
source: "defaultFromPositions\x0a\x09\x0a\x09^#(#bottomCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'default values',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["topCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTAbstractGraphLayout)});},
args: [],
source: "defaultToPositions\x0a\x09\x0a\x09^#(#topCenter)",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doInitialize:",
category: 'hook',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractGraphLayout.superclass.fn.prototype._doInitialize_.apply(_st(self), [elements]);
self._clear();
self._greedyCycleRemoval_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"doInitialize:",{elements:elements},smalltalk.RTAbstractGraphLayout)});},
args: ["elements"],
source: "doInitialize: elements \x0a\x09super doInitialize: elements.\x0a\x09self clear.\x0a\x09self greedyCycleRemoval: elements",
messageSends: ["doInitialize:", "clear", "greedyCycleRemoval:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
category: 'battista',
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
args: ["aCollection"],
source: "greedyCycleRemoval: aCollection\x0a\x09\x22Di Battista Greedy-Cycle-Removal algorithm. Chapter 9.4, page 297. The last part is not like in the book. The original algorithm only takes\x0a\x09 local optimas into account. This will break ordinary trees sometimes. This version also takes global optimas into account.\x22\x0a\x09\x0a\x09| g sl sr s indeg outdeg degrees vertex | \x0a\x09g := aCollection copy asOrderedCollection.\x0a\x09sl := OrderedCollection new.\x0a\x09sr := OrderedCollection new.\x09\x22While g contains a sink (aka leaf)\x22\x0a\x09g copy\x0a\x09\x09do:\x0a\x09\x09\x09[:node | \x0a\x09\x09\x09(self childrenFor: node) isEmpty\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[sr addFirst: node.\x0a\x09\x09\x09\x09\x09g remove: node]\x09\x22self edges detect: [:edge | edge fromFigure == node] ifNone: [sr addFirst: node. g remove: node]\x22].\x09\x22While g contains a source (aka root)\x22\x0a\x09g copy\x0a\x09\x09do:\x0a\x09\x09\x09[:node | \x0a\x09\x09\x09(self parentsFor: node) isEmpty\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[sl addLast: node.\x0a\x09\x09\x09\x09\x09g remove: node]\x09\x22self edges detect: [:edge | edge toFigure == node] ifNone: [sl addLast: node. g remove: node]\x22].\x09\x22Calculate deg for all remaining vertices\x22\x0a\x09degrees := IdentityDictionary new.\x0a\x09g\x0a\x09\x09do:\x0a\x09\x09\x09[:node | \x0a\x09\x09\x09indeg := (self parentsFor: node) size.\x0a\x09\x09\x09outdeg := (self childrenFor: node) size.\x09\x22indeg := self edges inject: 0 into: [:sum :edge | (edge toFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x0a\x09\x09outdeg := self edges inject: 0 into: [:sum :edge | (edge fromFigure == node) ifTrue: [sum + 1] ifFalse: [sum]].\x22\x0a\x09\x09\x09degrees\x0a\x09\x09\x09\x09at: node\x0a\x09\x09\x09\x09put: outdeg - indeg].\x09\x22While g not empty\x22\x0a\x09g := g asSortedCollection: [:a :b | (degrees at: a) >= (degrees at: b)].\x0a\x09[g isEmpty]\x0a\x09\x09whileFalse:\x0a\x09\x09\x09[vertex := g\x0a\x09\x09\x09\x09detect: [:v | (self parentsFor: v) anySatisfy: [:w | sl includes: w]]\x0a\x09\x09\x09\x09ifNone: [g first].\x09\x22Corner case: Closed cycle with not root at all. Eg 1 -> 2 -> 3 -> 1\x22\x0a\x09\x09\x09sl addLast: vertex.\x0a\x09\x09\x09g remove: vertex].\x09\x22Remove all leftward edges\x22\x0a\x09s := sl , sr.\x0a\x09self edges notNil\x0a\x09\x09ifTrue: \x0a\x09\x09\x09[ self edges copy\x0a\x09\x09\x09\x09do:\x0a\x09\x09\x09\x09\x09[:edge | \x0a\x09\x09\x09\x09\x09(s indexOf: edge from) > (s indexOf: edge to)\x0a\x09\x09\x09\x09\x09\x09ifTrue: [self edges remove: edge ] ] ].\x09\x0a\x09\x22Reset the cache\x22\x0a\x09self clear",
messageSends: ["asOrderedCollection", "copy", "new", "do:", "ifTrue:", "addFirst:", "remove:", "isEmpty", "childrenFor:", "addLast:", "parentsFor:", "size", "at:put:", "-", "asSortedCollection:", ">=", "at:", "whileFalse:", "detect:ifNone:", "anySatisfy:", "includes:", "first", ",", "edges", ">", "indexOf:", "to", "from", "notNil", "clear"],
referencedClasses: ["OrderedCollection", "IdentityDictionary"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "highestNestingParentFor:",
category: 'private',
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
args: ["aNodeFigure"],
source: "highestNestingParentFor: aNodeFigure\x0a\x09\x0a\x09| parents |\x0a\x09^self cachedParentsWithHighestNestings\x0a\x09\x09at: aNodeFigure\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[parents := self parentsFor: aNodeFigure.\x0a\x09\x09\x09parents isEmpty\x0a\x09\x09\x09\x09ifTrue: [0]\x0a\x09\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09\x09[parents detectMax: [:eachParent | self nestingLevelFor: eachParent]]]",
messageSends: ["at:ifAbsentPut:", "parentsFor:", "ifTrue:ifFalse:", "detectMax:", "nestingLevelFor:", "isEmpty", "cachedParentsWithHighestNestings"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'accessing',
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
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^horizontalGap ifNil: [ self class horizontalGap ]",
messageSends: ["ifNil:", "horizontalGap", "class"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@horizontalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"horizontalGap:",{anInteger:anInteger},smalltalk.RTAbstractGraphLayout)});},
args: ["anInteger"],
source: "horizontalGap: anInteger\x0a\x09\x0a\x09horizontalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumDiameter:",
category: 'private',
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
args: ["aCollection"],
source: "maximumDiameter: aCollection\x0a\x09\x0a\x09^aCollection\x0a\x09\x09inject: 0\x0a\x09\x09into: [:max :node | max max: (node radius * 2) ]",
messageSends: ["inject:into:", "max:", "*", "radius"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "maximumRadius:",
category: 'private',
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
args: ["aCollection"],
source: "maximumRadius: aCollection\x0a\x09\x0a\x09^aCollection\x0a\x09\x09inject: 0\x0a\x09\x09into: [:max :node | max max: node radius]",
messageSends: ["inject:into:", "max:", "radius"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nestingLevelFor:",
category: 'private',
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
args: ["aNodeFigure"],
source: "nestingLevelFor: aNodeFigure\x0a\x09\x0a\x09| parents parentsNesting |\x0a\x09parents := self parentsFor: aNodeFigure.\x0a\x09parentsNesting := parents\x0a\x09\x09collect: [:eachParent | self nestingLevelFor: eachParent].\x0a\x09^parentsNesting isEmpty\x0a\x09\x09ifTrue: [0]\x0a\x09\x09ifFalse: [parentsNesting max + 1]",
messageSends: ["parentsFor:", "collect:", "nestingLevelFor:", "ifTrue:ifFalse:", "+", "max", "isEmpty"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'actions',
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
args: ["el", "edgs"],
source: "on: el edges: edgs\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09self userDefinedEdges ifNil: [ self userDefinedEdges: edgs ].\x0a\x0a\x09^ self applyOn: el.",
messageSends: ["ifNil:", "userDefinedEdges:", "userDefinedEdges", "applyOn:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "parentsFor:",
category: 'private',
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
args: ["aNode"],
source: "parentsFor: aNode\x0a\x09^ self cachedParents\x0a\x09\x09at: aNode\x0a\x09\x09ifAbsentPut:\x0a\x09\x09\x09[ | nodes |\x0a\x09\x09\x09nodes := OrderedCollection new.\x0a\x09\x09\x09self edgesDo:\x0a\x09\x09\x09\x09\x09[:edge | edge to == aNode ifTrue: [ nodes add: edge from ] ].\x0a\x09\x09\x09nodes ]",
messageSends: ["at:ifAbsentPut:", "new", "edgesDo:", "ifTrue:", "add:", "from", "==", "to", "cachedParents"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rootNodesFor:",
category: 'private',
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
args: ["aCollection"],
source: "rootNodesFor: aCollection\x0a\x09^ aCollection select: [:node | \x0a\x09\x09(self parentsFor: node) isEmpty ].",
messageSends: ["select:", "isEmpty", "parentsFor:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "shiftTree:by:",
category: 'private',
fn: function (aNode, aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._translateBy_(aPoint);
_st(self._childrenFor_(aNode))._do_((function(child){
return smalltalk.withContext(function($ctx2) {
return self._shiftTree_by_(child,aPoint);
}, function($ctx2) {$ctx2.fillBlock({child:child},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"shiftTree:by:",{aNode:aNode,aPoint:aPoint},smalltalk.RTAbstractGraphLayout)});},
args: ["aNode", "aPoint"],
source: "shiftTree: aNode by: aPoint\x0a\x09\x0a\x09aNode translateBy: aPoint.\x0a\x09(self childrenFor: aNode) do: [:child | self shiftTree: child by: aPoint]",
messageSends: ["translateBy:", "do:", "shiftTree:by:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'accessing',
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
args: [],
source: "verticalGap\x0a\x09\x0a\x09^verticalGap ifNil: [self class verticalGap]",
messageSends: ["ifNil:", "verticalGap", "class"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@verticalGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"verticalGap:",{anInteger:anInteger},smalltalk.RTAbstractGraphLayout)});},
args: ["anInteger"],
source: "verticalGap: anInteger\x0a\x09\x0a\x09verticalGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap",
category: 'constants',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (3);
}, function($ctx1) {$ctx1.fill(self,"horizontalGap",{},smalltalk.RTAbstractGraphLayout.klass)});},
args: [],
source: "horizontalGap\x0a\x09\x0a\x09^3.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractGraphLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractGraphLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractGraphLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'public',
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
args: ["elements", "edges"],
source: "on: elements edges: edges\x0a\x09\x22Do the layout of the elements tacking into account the provided edges\x22\x0a\x0a\x09^ self new \x0a\x09\x09userDefinedEdges: edges;\x0a\x09\x09applyOn: elements.",
messageSends: ["userDefinedEdges:", "new", "applyOn:"],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap",
category: 'constants',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return (20);
}, function($ctx1) {$ctx1.fill(self,"verticalGap",{},smalltalk.RTAbstractGraphLayout.klass)});},
args: [],
source: "verticalGap\x0a\x09\x0a\x09^20.0",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractGraphLayout.klass);


smalltalk.addClass('RTAbstractCompactTree', smalltalk.RTAbstractGraphLayout, ['sonsDictionary', 'root', 'initialLayout', 'margin'], 'Roassal2-Layouts');
smalltalk.RTAbstractCompactTree.comment="A ROAbstractCompactTree is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09initialLayout:\x09\x09<Object>\x0a\x09margin:\x09\x09<Object>\x0a\x09root:\x09\x09<Object>\x0a\x09sonsDictionary:\x09\x09<Object>\x0a\x0ainitialLayout\x0a\x09- xxxxx\x0a\x0amargin\x0a\x09- xxxxx\x0a\x0aroot\x0a\x09- xxxxx\x0a\x0asonsDictionary\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "childrenFor:",
category: 'private',
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
args: ["aNode"],
source: "childrenFor: aNode \x0a\x0a\x09sonsDictionary isEmpty ifTrue: [ ^ super childrenFor: aNode ] \x0a\x09\x09\x09\x09\x09\x09\x09ifFalse: [ ^sonsDictionary at: aNode ifAbsent: [ ^ OrderedCollection new ] ]",
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "at:ifAbsent:", "new", "isEmpty"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
category: 'algorithm',
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
args: ["aNode", "another"],
source: "compareContourOf: aNode with: another\x0a\x09\x22return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode\x22\x0a\x0a\x09| difference max nodeA nodeB |\x0a\x09nodeB := aNode.\x09\x22the right one\x22\x0a\x09nodeA := another.\x09\x22the left one\x22\x0a\x09max := aNode = another\x0a\x09\x09ifTrue: [ 0 ]\x0a\x09\x09ifFalse: [ horizontalGap / 2 - (nodeB x - (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)) ].\x0a\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1.\x0a\x09[ nodeB isNil not & nodeA isNil not ]\x0a\x09\x09whileTrue: [ \x0a\x09\x09\x09difference := horizontalGap\x0a\x09\x09\x09\x09-\x0a\x09\x09\x09\x09\x09((self getAbcissaOf: nodeB inSubtreeFromLayer: aNode layer - 1)\x0a\x09\x09\x09\x09\x09\x09- (self getAbcissaOf: nodeA inSubtreeFromLayer: aNode layer - 1)).\x0a\x09\x09\x09max := max max: difference.\x0a\x09\x09\x09nodeB := self followLeftContour: nodeB toLayer: nodeB layer + 1.\x0a\x09\x09\x09nodeA := self followRightContour: nodeA toLayer: nodeA layer + 1 ].\x0a\x09^ max",
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layer", "x", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
category: 'algorithm',
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
args: ["aNode"],
source: "computePosition: aNode\x0a\x22compute the position of the given node and of his sons recursively\x22\x0a\x0a\x09| children neighbor nodeA |\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09neighbor := self leftSiblingOf: aNode.\x0a\x09\x0a\x09children isEmpty ifTrue: [ neighbor isNil ifTrue: [ aNode x: 0; mod: 0.]  \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ aNode x: (neighbor x + (horizontalGap /2)); mod: (neighbor mod);\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  pointer: (self followRightContour: neighbor toLayer: (aNode layer + 1)) ] ]\x0a\x09\x09\x09\x09\x09 \x0a\x09\x09\x09\x09\x09 ifFalse: [aNode leftContour: children first;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09rightContour: children last.\x0a\x09\x09\x09\x09\x09\x09\x09  children do: [:e | self computePosition: e ].\x0a\x09\x09\x09\x09\x09\x09\x09      aNode x: (aNode leftContour x + aNode rightContour x + aNode rightContour mod ) /2;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09mod: 0. \x0a\x09\x09\x09\x09\x09\x09\x09\x09neighbor isNil ifFalse: [ aNode mod: (self compareContourOf: aNode with: neighbor).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  nodeA := (self followLeftContour: (aNode father) toLayer: (aNode layer)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  [(self followLeftContour: nodeA toLayer: (nodeA layer + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: (nodeA layer + 1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA pointer: (self followLeftContour: aNode toLayer: (nodeA layer + 1)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA := self followRightContour: aNode toLayer: (aNode layer + 1).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 [(self followRightContour: nodeA toLayer: (nodeA layer +1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: (nodeA layer +1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09nodeA pointer: (self followRightContour: neighbor toLayer: (nodeA layer +1) ) ] ]",
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "x:", "mod:", "+", "/", "x", "mod", "pointer:", "followRightContour:toLayer:", "layer", "isNil", "leftContour:", "first", "rightContour:", "last", "do:", "computePosition:", "rightContour", "leftContour", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "father", "whileFalse:", "isEmpty"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "coordinate:withMod:",
category: 'hook',
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"coordinate:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.RTAbstractCompactTree)});},
args: ["aNode", "aFloat"],
source: "coordinate: aNode withMod: aFloat\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["nodeElements"],
source: "doExecute: nodeElements \x0a\x09| rootNodes |\x0a\x09\x0a\x09initialLayout isNil  ifFalse: [ initialLayout new executeOnElements: nodeElements. ].\x0a\x09\x0a\x09rootNodes := self rootNodesFor: nodeElements.\x0a\x0a\x22\x09root isNil ifTrue: [ rootNodes := self rootNodesFor: nodeElements. ]\x0a\x09\x09\x09 ifFalse: [ rootNodes := Array with: root.\x0a\x09\x09\x09\x09\x09\x09self coveringTreeFor: nodeElements from: root ].\x0a\x22\x09\x0a\x09rootNodes do: [:e | self initialize: e whoseFatherIs: nil ];\x0a\x09\x09do: [:e | self computePosition:e].\x0a\x09\x0a\x09rootNodes  do: [:e |\x0a\x09\x09\x09\x09\x09self draw:e withMod: 0  ]",
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "draw:withMod:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:withMod:",
category: 'hook',
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"draw:withMod:",{aNode:aNode,aFloat:aFloat},smalltalk.RTAbstractCompactTree)});},
args: ["aNode", "aFloat"],
source: "draw: aNode withMod: aFloat\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followLeftContour:toLayer:",
category: 'algorithm',
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
args: ["aNode", "anInteger"],
source: "followLeftContour: aNode toLayer: anInteger\x0a\x09\x22return the last node in the left contour begining at anode\x22\x0a\x09\x0a\x09((self layerOf: aNode) = anInteger ) ifTrue: [^ aNode  ].\x0a\x09((self layerOf: aNode) > anInteger ) ifTrue: [^ nil  ].\x0a\x09\x0a\x09(self leftContourOf: aNode) isNil ifTrue: [ (self pointerOf: aNode)  isNil ifTrue: [ ^ nil ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ ^ ( self followLeftContour: (self pointerOf: aNode) toLayer: anInteger ) ] ]\x0a\x09\x0a\x09\x09\x09  \x09\x09\x09\x09ifFalse: [ ^ (self followLeftContour: (self leftContourOf: aNode) toLayer: anInteger ) ]",
messageSends: ["ifTrue:", "=", "layerOf:", ">", "ifTrue:ifFalse:", "followLeftContour:toLayer:", "pointerOf:", "isNil", "leftContourOf:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "followRightContour:toLayer:",
category: 'algorithm',
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
args: ["aNode", "anInteger"],
source: "followRightContour: aNode toLayer: anInteger\x0a\x09\x22return the node in the right contour begining at anode in layer anInteger\x22\x0a\x0a\x09((self layerOf: aNode) = anInteger ) ifTrue: [^ aNode  ].\x0a\x09((self layerOf: aNode) > anInteger ) ifTrue: [^ nil  ].\x0a\x0a\x09(self rightContourOf: aNode) isNil ifTrue: [ (self pointerOf: aNode) isNil ifTrue: [ ^ nil ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ ^ ( self followRightContour: (self pointerOf: aNode) toLayer: anInteger ) ] ]\x0a\x09\x0a\x09\x09\x09  \x09\x09\x09\x09ifFalse: [ ^ (self followRightContour: (self rightContourOf: aNode) toLayer: anInteger ) ]",
messageSends: ["ifTrue:", "=", "layerOf:", ">", "ifTrue:ifFalse:", "followRightContour:toLayer:", "pointerOf:", "isNil", "rightContourOf:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "getAbcissaOf:inSubtreeFromLayer:",
category: 'algorithm',
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
args: ["aNode", "anInteger"],
source: "getAbcissaOf: aNode inSubtreeFromLayer: anInteger\x0a\x0a\x09| node x |\x0a\x09\x0a\x09(anInteger < 0) ifTrue: [^ self getAbcissaOf: aNode inSubtreeFromLayer: 0 ].\x0a\x09\x0a\x09((self layerOf: aNode) = anInteger ) ifTrue: [ ^ self xOf: aNode ].\x0a\x09((self layerOf: aNode) < anInteger ) ifTrue: [ ^ nil ].\x0a\x09\x0a\x09x := (self xOf: aNode) + (self modOf: aNode).\x0a\x09\x0a\x09node := self fatherOf: aNode.\x0a\x09\x0a\x09[(self layerOf: node) = anInteger  ] whileFalse: [ x := x + (self modOf: node).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09node := self fatherOf: node ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09^ x",
messageSends: ["ifTrue:", "getAbcissaOf:inSubtreeFromLayer:", "<", "xOf:", "=", "layerOf:", "+", "modOf:", "fatherOf:", "whileFalse:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "greedyCycleRemoval:",
category: 'initialize-release',
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"greedyCycleRemoval:",{aGraph:aGraph},smalltalk.RTAbstractCompactTree)});},
args: ["aGraph"],
source: "greedyCycleRemoval: aGraph",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialLayout:",
category: 'initialize-release',
fn: function (aLayout) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@initialLayout"]=aLayout;
return self}, function($ctx1) {$ctx1.fill(self,"initialLayout:",{aLayout:aLayout},smalltalk.RTAbstractCompactTree)});},
args: ["aLayout"],
source: "initialLayout: aLayout\x0a\x0a\x09initialLayout := aLayout",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
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
args: [],
source: "initialize \x0a\x0a\x09super initialize.\x0a\x09verticalGap := 20.\x0a\x09horizontalGap := 30.\x0a\x09margin := 40. \x0a\x09sonsDictionary := Dictionary new",
messageSends: ["initialize", "new"],
referencedClasses: ["Dictionary"]
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize:whoseFatherIs:",
category: 'initialize-release',
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
args: ["aNode", "another"],
source: "initialize: aNode whoseFatherIs: another \x0a\x0a\x09self fatherOf: aNode put: another.\x0a\x09\x0a\x09another isNil ifTrue: [ self layerOf: aNode put: 0 ] ifFalse: [ self layerOf: aNode put: (self layerOf: another) + 1 ] .\x0a\x09\x0a\x09( self childrenFor: aNode ) do: [ :e | self initialize: e whoseFatherIs: aNode ]",
messageSends: ["fatherOf:put:", "ifTrue:ifFalse:", "layerOf:put:", "+", "layerOf:", "isNil", "do:", "initialize:whoseFatherIs:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "leftSiblingOf:",
category: 'algorithm',
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
args: ["aNode"],
source: "leftSiblingOf: aNode\x0a\x22return the left sibling of the given node \x22\x0a\x0a\x09| children |\x0a\x0a\x09(self fatherOf: aNode) isNil ifTrue: [\x22has no sibling\x22 ^ nil]\x0a\x09\x09\x09\x09\x09    ifFalse: [ children := self childrenFor: (self fatherOf: aNode).\x0a\x09\x09\x09\x09\x09\x09\x09\x09(children first) = aNode ifTrue: [\x22as no left sibling\x22 ^ nil ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09    ifFalse: [^ children at: ((children indexOf: aNode) - 1) ] ]",
messageSends: ["ifTrue:ifFalse:", "childrenFor:", "fatherOf:", "at:", "-", "indexOf:", "=", "first", "isNil"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
category: 'algorithm',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RTAbstractCompactTree)});},
args: ["aNode"],
source: "nodeAbcissaWithNeighbor: aNode\x0a\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);

smalltalk.addMethod(
smalltalk.method({
selector: "root:",
category: 'initialize-release',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@root"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"root:",{aNode:aNode},smalltalk.RTAbstractCompactTree)});},
args: ["aNode"],
source: "root: aNode \x0a\x0a\x09root := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree);


smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:",
category: 'testing',
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
args: ["anInt"],
source: "horizontalGap: anInt\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new horizontalGap: anInt.\x0a\x09\x0a\x09^ new",
messageSends: ["new", "horizontalGap:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "horizontalGap:verticalGap:",
category: 'testing',
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
args: ["anInt", "another"],
source: "horizontalGap: anInt verticalGap: another\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new horizontalGap: anInt.\x0a\x09new verticalGap: another.\x0a\x09\x0a\x09\x0a\x09^ new",
messageSends: ["new", "horizontalGap:", "verticalGap:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractCompactTree");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractCompactTree.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractCompactTree",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "verticalGap:",
category: 'testing',
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
args: ["anInt"],
source: "verticalGap: anInt\x0a\x0a\x09| new |\x0a\x09\x0a\x09new := self new.\x0a\x09new verticalGap: anInt.\x0a\x09\x0a\x09^ new",
messageSends: ["new", "verticalGap:"],
referencedClasses: []
}),
smalltalk.RTAbstractCompactTree.klass);


smalltalk.addClass('RTRadialTreeLayout', smalltalk.RTAbstractCompactTree, [], 'Roassal2-Layouts');
smalltalk.RTRadialTreeLayout.comment="A RORadialTreeLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "compareContourOf:with:",
category: 'algorithm',
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
args: ["aNode", "another"],
source: "compareContourOf: aNode with: another\x0a\x09\x22return the number of radians the subtree induced by aNode must be displaced to be separated by a predefined distance (horizontalGap) from the one induced by anotherNode\x22\x0a\x0a\x09| difference max nodeA nodeB |\x0a\x09nodeB := aNode.\x09\x22the right one\x22\x0a\x09nodeA := another.\x09\x22the left one\x22\x0a\x09max := aNode = another\x0a\x09\x09ifTrue: [ 0 ]\x0a\x09\x09ifFalse: [ horizontalGap / (self layerOf: nodeB) / 2 - ((self xOf: nodeB) - (self getAbcissaOf: nodeA inSubtreeFromLayer: (self layerOf: aNode) - 1)) ].\x0a\x09nodeB := self followLeftContour: nodeB toLayer: (self layerOf: nodeB) + 1.\x0a\x09nodeA := self followRightContour: nodeA toLayer: (self layerOf: nodeA) + 1.\x0a\x09[ nodeB isNil not & nodeA isNil not ]\x0a\x09\x09whileTrue: [ \x0a\x09\x09\x09difference := horizontalGap / (self layerOf: nodeA)\x0a\x09\x09\x09\x09-\x0a\x09\x09\x09\x09\x09((self getAbcissaOf: nodeB inSubtreeFromLayer: (self layerOf: aNode) - 1)\x0a\x09\x09\x09\x09\x09\x09- (self getAbcissaOf: nodeA inSubtreeFromLayer: (self layerOf: aNode) - 1)).\x0a\x09\x09\x09max := max max: difference.\x0a\x09\x09\x09nodeB := self followLeftContour: nodeB toLayer: (self layerOf: nodeB) + 1.\x0a\x09\x09\x09nodeA := self followRightContour: nodeA toLayer: (self layerOf: nodeA) + 1 ].\x0a\x09^ max",
messageSends: ["ifTrue:ifFalse:", "-", "getAbcissaOf:inSubtreeFromLayer:", "layerOf:", "xOf:", "/", "=", "followLeftContour:toLayer:", "+", "followRightContour:toLayer:", "whileTrue:", "max:", "&", "not", "isNil"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computeGap:",
category: 'hook',
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
args: ["aNode"],
source: "computeGap: aNode\x0a\x09\x22 compute the vertical gap needed for drawing the radial tree \x22\x0a\x09| gap maxAbcissa i abc nodeL nodeR layer |\x09\x0a\x09gap := 0.\x0a\x09maxAbcissa := 0.\x0a\x09layer := 1.\x0a\x09\x0a\x09i := 1.\x0a\x09[ nodeL :=(self followLeftContour: aNode toLayer: i).\x0a\x09nodeR := (self followRightContour: aNode toLayer: i).\x0a\x09nodeL isNil not & nodeR isNil not ] whileTrue: [ abc := (((self getAbcissaOf: nodeR inSubtreeFromLayer: 0) - (self getAbcissaOf: nodeL inSubtreeFromLayer: 0 ) + (horizontalGap / layer/2)) / layer).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09(abc > maxAbcissa) ifTrue: [ maxAbcissa := abc. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09layer := layer ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09i := i + 1 ].\x0a\x0a\x09\x0a\x09gap:= (maxAbcissa / 2 /Float pi ) floor +1.\x0a\x09\x0a\x09((verticalGap isNil) or: [gap > verticalGap])  ifTrue: [ self verticalGap: gap ]",
messageSends: ["whileTrue:", "/", "+", "-", "getAbcissaOf:inSubtreeFromLayer:", "ifTrue:", ">", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "floor", "pi", "verticalGap:", "or:"],
referencedClasses: ["Float"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
category: 'algorithm',
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
args: ["aNode"],
source: "computePosition: aNode\x0a\x22compute the position of the given node and of his sons recursively\x22\x0a\x0a\x09| children neighbor nodeA |\x0a\x09\x0a\x09children :=self childrenFor: aNode.\x0a\x09neighbor := self leftSiblingOf: aNode.\x0a\x09\x0a\x09children isEmpty ifTrue: [ neighbor isNil ifTrue: [ self xOf: aNode put: 0. self modOf: aNode put: 0. ]  \x0a\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifFalse: [ self xOf: aNode put: ((self xOf: neighbor) + (horizontalGap /(self layerOf: aNode) /2)). self modOf: aNode put: ((self modOf: neighbor)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 self pointerOf: aNode put: (self followRightContour: neighbor toLayer: ((self layerOf: aNode) + 1)) ] ]\x0a\x09\x09\x09\x09\x09 \x0a\x09\x09\x09\x09\x09 ifFalse: [ self leftContourOf: aNode put: children first.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self rightContourOf: aNode put: children last.\x0a\x09\x09\x09\x09\x09\x09\x09  children do: [:e | self computePosition: e ].\x0a\x09\x09\x09\x09\x09\x09\x09      self xOf: aNode put: ((self xOf: ( self leftContourOf: aNode ) ) + ( self xOf: ( self rightContourOf: aNode ) ) + (self modOf: ( self rightContourOf: aNode ) ) ) / 2. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self modOf: aNode put: 0. \x0a\x09\x09\x09\x09\x09\x09\x09\x09neighbor isNil ifFalse: [ self modOf: aNode put: (self compareContourOf: aNode with: neighbor).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  nodeA := (self followLeftContour: (self fatherOf: aNode) toLayer: (self layerOf: aNode)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  [(self followLeftContour: nodeA toLayer: ((self layerOf: nodeA) + 1)) isNil ] whileFalse: [ nodeA := self followLeftContour: nodeA toLayer: ((self layerOf: nodeA) + 1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 self pointerOf: nodeA put: (self followLeftContour: aNode toLayer: ((self layerOf: nodeA) + 1)).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 nodeA := self followRightContour: aNode toLayer: ((self layerOf: aNode) + 1).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 [(self followRightContour: nodeA toLayer: ((self layerOf: nodeA) + 1)) isNil ] whileFalse: [ nodeA := self followRightContour: nodeA toLayer: ((self layerOf: nodeA) +1) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09self pointerOf: nodeA put: (self followRightContour: neighbor toLayer: ((self layerOf: nodeA) + 1) ) ] ].",
messageSends: ["childrenFor:", "leftSiblingOf:", "ifTrue:ifFalse:", "xOf:put:", "modOf:put:", "+", "/", "layerOf:", "xOf:", "modOf:", "pointerOf:put:", "followRightContour:toLayer:", "isNil", "leftContourOf:put:", "first", "rightContourOf:put:", "last", "do:", "computePosition:", "rightContourOf:", "leftContourOf:", "ifFalse:", "compareContourOf:with:", "followLeftContour:toLayer:", "fatherOf:", "whileFalse:", "isEmpty"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "diameterOf:",
category: 'algorithm',
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
args: ["aNode"],
source: "diameterOf: aNode\x0a\x0a\x09|diam|\x0a\x09\x0a\x09(aNode shapes first isKindOf: RTEllipse) ifTrue: [ diam := aNode width max: aNode height ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].\x0a\x09\x0a\x09^ diam",
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes"],
referencedClasses: ["RTEllipse"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["nodeElements"],
source: "doExecute: nodeElements\x0a\x0a\x09| rootNodes xOffset maximumRadius | \x0a\x09initialLayout isNil\x0a\x09\x09ifFalse: [ initialLayout new executeOnElements: nodeElements ].\x0a\x09rootNodes := self rootNodesFor: nodeElements.\x0a\x09rootNodes\x0a\x09\x09do: [ :e | self initialize: e whoseFatherIs: nil ];\x0a\x09\x09do: [ :e | self computePosition: e. self step];\x0a\x09\x09do: [ :e | self computeGap: e ];\x0a\x09\x09do: [ :e | self toRadialTree: e withMod: 0 ].\x0a\x09xOffset := 0.\x0a\x09rootNodes\x0a\x09\x09do: [ :e | \x0a\x09\x09\x09maximumRadius := self radialDraw: e.\x0a\x09\x09\x09\x22Shifting all the subgroups\x22\x0a\x09\x09\x09self shiftTree: e by:  (maximumRadius+xOffset)@maximumRadius.\x0a\x09\x09\x09xOffset := xOffset + (2 * maximumRadius) + 10.  ].",
messageSends: ["ifFalse:", "executeOnElements:", "new", "isNil", "rootNodesFor:", "do:", "initialize:whoseFatherIs:", "computePosition:", "step", "computeGap:", "toRadialTree:withMod:", "radialDraw:", "shiftTree:by:", "@", "+", "*"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gap",
category: 'private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._verticalGap();
return $1;
}, function($ctx1) {$ctx1.fill(self,"gap",{},smalltalk.RTRadialTreeLayout)});},
args: [],
source: "gap\x0a\x09\x0a\x09^ self verticalGap",
messageSends: ["verticalGap"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "halfDiameterOf:",
category: 'algorithm',
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
args: ["aNode"],
source: "halfDiameterOf: aNode\x0a\x0a\x09|diam|\x0a\x09\x0a\x09(aNode shapes first isKindOf: RTEllipse) ifTrue: [ diam := aNode width max: aNode height ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ diam := (aNode width * aNode width + (aNode height * aNode height)) sqrt floor ].\x0a\x09\x0a\x09^ diam / 2",
messageSends: ["ifTrue:ifFalse:", "max:", "height", "width", "floor", "sqrt", "+", "*", "isKindOf:", "first", "shapes", "/"],
referencedClasses: ["RTEllipse"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layoutLayer:radius:from:to:",
category: 'private',
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
args: ["aCollection", "oldRadius", "aFromAngle", "aToAngle"],
source: "layoutLayer: aCollection radius: oldRadius from: aFromAngle to: aToAngle\x0a\x09\x0a\x09| delta childRadius maximumRadius myRadius fromAngle toAngle |\x0a\x09\x22Initialize with default value\x22\x0a\x09maximumRadius := oldRadius.\x0a\x09aCollection isEmpty\x0a\x09\x09ifFalse:\x0a\x09\x09\x09[myRadius := oldRadius + self gap + (self maximumRadius: aCollection).\x0a\x09\x09\x09childRadius := oldRadius + self gap + (self maximumDiameter: aCollection).\x09\x22This is a purely optical tweak\x22\x0a\x09\x09\x09(aCollection size = 1 and: [aToAngle - aFromAngle = (2 * Float pi)])\x0a\x09\x09\x09\x09ifTrue:\x0a\x09\x09\x09\x09\x09[delta := 0.4 * Float pi.\x0a\x09\x09\x09\x09\x09fromAngle := 0.8 * Float pi.\x0a\x09\x09\x09\x09\x09toAngle := fromAngle + delta]\x0a\x09\x09\x09\x09ifFalse:\x0a\x09\x09\x09\x09\x09[delta := (aToAngle - aFromAngle) / aCollection size.\x0a\x09\x09\x09\x09\x09fromAngle := aFromAngle.\x0a\x09\x09\x09\x09\x09toAngle := aFromAngle + delta].\x0a\x09\x09\x09aCollection\x0a\x09\x09\x09\x09do:\x0a\x09\x09\x09\x09\x09[:child | \x0a\x09\x09\x09\x09\x09translator translateTopLeftOf: child to: (Point\x0a\x09\x09\x09\x09\x09\x09\x09\x09r: myRadius\x0a\x09\x09\x09\x09\x09\x09\x09\x09theta: toAngle - (delta / 2.0)).\x0a\x09\x09\x09\x09\x09\x22child\x0a\x09\x09\x09\x09\x09\x09translateTo:\x0a\x09\x09\x09\x09\x09\x09\x09(Point\x0a\x09\x09\x09\x09\x09\x09\x09\x09radius: myRadius\x0a\x09\x09\x09\x09\x09\x09\x09\x09theta: toAngle - (delta / 2.0)).\x22\x0a\x09\x09\x09\x09\x09maximumRadius := maximumRadius\x0a\x09\x09\x09\x09\x09\x09max:\x0a\x09\x09\x09\x09\x09\x09\x09(self\x0a\x09\x09\x09\x09\x09\x09\x09\x09layoutLayer: (self childrenFor: child)\x0a\x09\x09\x09\x09\x09\x09\x09\x09radius: childRadius\x0a\x09\x09\x09\x09\x09\x09\x09\x09from: fromAngle\x0a\x09\x09\x09\x09\x09\x09\x09\x09to: toAngle).\x0a\x09\x09\x09\x09\x09fromAngle := toAngle.\x0a\x09\x09\x09\x09\x09toAngle := toAngle + delta]].\x0a\x09^maximumRadius",
messageSends: ["ifFalse:", "+", "maximumRadius:", "gap", "maximumDiameter:", "ifTrue:ifFalse:", "*", "pi", "/", "size", "-", "and:", "=", "do:", "translateTopLeftOf:to:", "r:theta:", "max:", "layoutLayer:radius:from:to:", "childrenFor:", "isEmpty"],
referencedClasses: ["Float", "Point"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "moveAllElementsToTopLeft:",
category: 'private',
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
args: ["elements"],
source: "moveAllElementsToTopLeft: elements\x0a\x0a\x09| pos min |\x0a\x09pos := elements collect: #position.\x0a\x09min := pos inject: 0 @ 0 into: [ :minimum :p | minimum min: p ].\x0a\x09elements do: [ :e | e translateBy: min negated ]",
messageSends: ["collect:", "inject:into:", "@", "min:", "do:", "translateBy:", "negated"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodeAbcissaWithNeighbor:",
category: 'algorithm',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(aNode)._x()).__plus(_st(_st(self["@horizontalGap"]).__slash(_st(aNode)._layer())).__slash((2)))).__plus(_st(self._halfDiameterOf_(aNode)).__slash(_st(aNode)._layer()));
return $1;
}, function($ctx1) {$ctx1.fill(self,"nodeAbcissaWithNeighbor:",{aNode:aNode},smalltalk.RTRadialTreeLayout)});},
args: ["aNode"],
source: "nodeAbcissaWithNeighbor: aNode\x0a\x0a\x09^ aNode x + (horizontalGap / aNode layer /2) + ((self halfDiameterOf: aNode) / aNode layer)",
messageSends: ["+", "/", "layer", "halfDiameterOf:", "x"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "radialDraw:",
category: 'algorithm',
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
args: ["aNode"],
source: "radialDraw: aNode\x0a\x09\x22draw the subtree induced by the given node\x22\x0a\x0a\x09| children r max |\x0a\x09r := (self rOf: aNode).\x0a\x09translator translateTopLeftOf: aNode to: (Point r: r theta: (self thetaOf: aNode)).\x0a\x09\x22aNode translateTo: (Point radius: (aNode r) theta: (aNode theta)).\x22\x0a\x09children := self childrenFor: aNode.\x0a\x09max := 0.\x0a\x09children do: [ :e | max := max max: (self radialDraw: e) ].\x0a\x09^ r + max.",
messageSends: ["rOf:", "translateTopLeftOf:to:", "r:theta:", "thetaOf:", "childrenFor:", "do:", "max:", "radialDraw:", "+"],
referencedClasses: ["Point"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rotateSubtreeFrom:by:",
category: 'hook',
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aNode)._theta_(_st(_st(aNode)._theta()).__plus(aFloat));
_st(self._childrenFor_(aNode))._do_((function(e){
return smalltalk.withContext(function($ctx2) {
return self._rotateSubtreeFrom_by_(e,aFloat);
}, function($ctx2) {$ctx2.fillBlock({e:e},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"rotateSubtreeFrom:by:",{aNode:aNode,aFloat:aFloat},smalltalk.RTRadialTreeLayout)});},
args: ["aNode", "aFloat"],
source: "rotateSubtreeFrom: aNode by: aFloat\x0a\x09\x0a\x09aNode theta: aNode theta + aFloat.\x0a\x09\x0a\x09(self childrenFor: aNode) do: [ :e | self rotateSubtreeFrom: e by: aFloat ]",
messageSends: ["theta:", "+", "theta", "do:", "rotateSubtreeFrom:by:", "childrenFor:"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "spreadNodes:around:",
category: 'hook',
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
args: ["nodeElements", "aNode"],
source: "spreadNodes: nodeElements around: aNode\x0a\x0a\x09|nodeL nodeR i angle beta lay1 |\x0a\x09\x0a\x09i := 1.\x0a\x09angle := 0.\x0a\x09\x0a\x09[ nodeL :=(self followLeftContour: aNode toLayer: i).\x0a\x09nodeR := (self followRightContour: aNode toLayer: i).\x0a\x09nodeL isNil not & nodeR isNil not ] whileTrue: [ angle := angle max: ((nodeR theta - nodeL theta) + ((self halfDiameterOf: nodeR) + (self halfDiameterOf: nodeL) + horizontalGap  /i /verticalGap )).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09i := i+1. ].\x0a\x0a\x09lay1 := nodeElements select: [ :e | e layer = 1 ].\x0a\x0a\x09beta := Float pi * 2 - angle / lay1 size.\x0a\x09\x0a\x09lay1 do: [ :e | self rotateSubtreeFrom: e by: (lay1 indexOf: e) - 1 * beta ].",
messageSends: ["whileTrue:", "max:", "+", "/", "halfDiameterOf:", "-", "theta", "followLeftContour:toLayer:", "followRightContour:toLayer:", "&", "not", "isNil", "select:", "=", "layer", "size", "*", "pi", "do:", "rotateSubtreeFrom:by:", "indexOf:"],
referencedClasses: ["Float"]
}),
smalltalk.RTRadialTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "toRadialTree:withMod:",
category: 'algorithm',
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
args: ["aNode", "aFloat"],
source: "toRadialTree: aNode withMod: aFloat\x0a\x09\x22compute polar coordinates of the subtree induced by anode from its cartesian coordinates \x22\x0a\x09| children |\x0a\x09self rOf: aNode put: ((self layerOf: aNode) * verticalGap ).\x0a\x09((self rOf: aNode) = 0) ifTrue: [ self thetaOf: aNode put: 0 ] \x0a\x09\x09\x09\x09\x09ifFalse: [ self thetaOf: aNode put: ((self xOf: aNode)  + aFloat + (self modOf: aNode)) / verticalGap ].\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09\x0a\x09children do: [ :e | self toRadialTree: e withMod: ( (self modOf: aNode) + aFloat) ]",
messageSends: ["rOf:put:", "*", "layerOf:", "ifTrue:ifFalse:", "thetaOf:put:", "/", "+", "modOf:", "xOf:", "=", "rOf:", "childrenFor:", "do:", "toRadialTree:withMod:"],
referencedClasses: []
}),
smalltalk.RTRadialTreeLayout);



smalltalk.addClass('RTAbstractRegularTreeLayout', smalltalk.RTAbstractGraphLayout, ['alreadyLayoutedNodes', 'topGap', 'leftGap', 'nodesByLayer', 'isLayered'], 'Roassal2-Layouts');
smalltalk.RTAbstractRegularTreeLayout.comment="A ROAbstractRegularTreeLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09alreadyLayoutedNodes:\x09\x09<Object>\x0a\x09isLayered:\x09\x09<Object>\x0a\x09leftGap:\x09\x09<Object>\x0a\x09nodesByLayer:\x09\x09<Object>\x0a\x09topGap:\x09\x09<Object>\x0a\x0aalreadyLayoutedNodes\x0a\x09- xxxxx\x0a\x0aisLayered\x0a\x09- xxxxx\x0a\x0aleftGap\x0a\x09- xxxxx\x0a\x0anodesByLayer\x0a\x09- xxxxx\x0a\x0atopGap\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "atLayer:add:",
category: 'private',
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
args: ["aNumber", "aNodeCollection"],
source: "atLayer: aNumber add: aNodeCollection\x0a\x09| collection |\x0a\x09collection := nodesByLayer at: aNumber ifAbsentPut: [OrderedCollection new].\x0a\x09collection addAll: aNodeCollection",
messageSends: ["at:ifAbsentPut:", "new", "addAll:"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["elements"],
source: "doExecute: elements\x0a\x09| rootNodes |\x0a\x09alreadyLayoutedNodes := OrderedCollection new.\x0a\x09rootNodes := self rootNodesFor: elements.\x0a\x09nodesByLayer := OrderedCollection new.\x0a\x09self\x0a\x09\x09layout: rootNodes\x0a\x09\x09atPoint: self leftGap @ self topGap\x0a\x09\x09atLayer: 1.\x0a\x09self isLayered ifTrue: [\x0a\x09\x09self rearrangeByLayers: elements ]",
messageSends: ["new", "rootNodesFor:", "layout:atPoint:atLayer:", "@", "topGap", "leftGap", "ifTrue:", "rearrangeByLayers:", "isLayered"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractRegularTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@topGap"]=(5);
self["@leftGap"]=(5);
self["@isLayered"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractRegularTreeLayout)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09topGap := 5.\x0a\x09leftGap := 5.\x0a\x09isLayered := false",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@isLayered"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"isLayered",{},smalltalk.RTAbstractRegularTreeLayout)});},
args: [],
source: "isLayered\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09^ isLayered",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isLayered:",
category: 'accessing',
fn: function (boolean) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@isLayered"]=boolean;
return self}, function($ctx1) {$ctx1.fill(self,"isLayered:",{boolean:boolean},smalltalk.RTAbstractRegularTreeLayout)});},
args: ["boolean"],
source: "isLayered: boolean\x0a\x09\x22Is the layout layered\x22\x0a\x09\x0a\x09isLayered := boolean",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layered",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._isLayered_(true);
return self}, function($ctx1) {$ctx1.fill(self,"layered",{},smalltalk.RTAbstractRegularTreeLayout)});},
args: [],
source: "layered\x0a\x09self isLayered: true",
messageSends: ["isLayered:"],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
fn: function (aNodeCollection, aPoint, anObject) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"layout:atPoint:atLayer:",{aNodeCollection:aNodeCollection,aPoint:aPoint,anObject:anObject},smalltalk.RTAbstractRegularTreeLayout)});},
args: ["aNodeCollection", "aPoint", "anObject"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: anObject\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@leftGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"leftGap",{},smalltalk.RTAbstractRegularTreeLayout)});},
args: [],
source: "leftGap\x0a\x09^ leftGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "leftGap:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@leftGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"leftGap:",{anInteger:anInteger},smalltalk.RTAbstractRegularTreeLayout)});},
args: ["anInteger"],
source: "leftGap: anInteger\x0a\x09leftGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
fn: function (aGraph) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"rearrangeByLayers:",{aGraph:aGraph},smalltalk.RTAbstractRegularTreeLayout)});},
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap",
category: 'accessing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self["@topGap"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"topGap",{},smalltalk.RTAbstractRegularTreeLayout)});},
args: [],
source: "topGap\x0a\x09^ topGap",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "topGap:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@topGap"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"topGap:",{anInteger:anInteger},smalltalk.RTAbstractRegularTreeLayout)});},
args: ["anInteger"],
source: "topGap: anInteger\x0a\x09topGap := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractRegularTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractRegularTreeLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractRegularTreeLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractRegularTreeLayout.klass);


smalltalk.addClass('RTAbstractHorizontalTreeLayout', smalltalk.RTAbstractRegularTreeLayout, [], 'Roassal2-Layouts');
smalltalk.RTAbstractHorizontalTreeLayout.comment="A ROAbstractHorizontalTreeLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTAbstractHorizontalTreeLayout)});},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultFromPositions",
category: 'hook-private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["rightCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultFromPositions",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
args: [],
source: "defaultFromPositions\x0a\x09\x0a\x09^#(#rightCenter)\x0a\x09\x0a\x22BTC-2012-08-05 Not sure what effect this has or if this is a valid symbol - its just pattern matching.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultToPositions",
category: 'hook-private',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=["leftCenter"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultToPositions",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
args: [],
source: "defaultToPositions\x0a\x0a\x09^#(#leftCenter)\x0a\x09\x0a\x22BTC-2012-08-05 Not sure what effect this has or if this is a valid symbol - its just pattern matching.\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractHorizontalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(3);
self["@horizontalGap"]=(20);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractHorizontalTreeLayout)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09verticalGap := 3.\x0a\x09horizontalGap := 20",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
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
args: ["aNodeCollection", "aPoint", "aNumber"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: aNumber\x0a\x09| treeSize childrenPosition x y middleOfTree |\x0a\x09aNodeCollection isEmpty ifTrue: [ ^ 0 ].\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.\x0a\x09alreadyLayoutedNodes addAll: aNodeCollection.\x0a\x09self atLayer: aNumber add: aNodeCollection.\x0a\x09aNodeCollection do: [ :each | \x0a\x09\x09childrenPosition := x + each width + self horizontalGap.\x0a\x09\x09treeSize := each height\x0a\x09\x09\x09max: (self layout: (self computeChildrenFor: each) atPoint: childrenPosition @ y atLayer: aNumber + 1).\x0a\x09\x09middleOfTree := y + (treeSize / 2.0) - (each height / 2.0).\x0a\x09\x09translator translateTopLeftOf: each to: (x @ middleOfTree).\x0a\x09\x09y := y + treeSize + self verticalGap.\x0a\x09\x09self step ].\x0a\x09^ y - aPoint y - self verticalGap",
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "horizontalGap", "width", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "height", "-", "/", "translateTopLeftOf:to:", "verticalGap", "step"],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
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
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09| cursor layerDepthSize |\x0a\x09cursor := self leftGap.\x0a\x09nodesByLayer do: [ :eachSetOfNodes |\x0a\x09\x09layerDepthSize := eachSetOfNodes inject: 0 into: [ :max :eachNode | \x0a\x09\x09\x09translator translateTopLeftOf: eachNode to: (cursor @ eachNode encompassingRectangle top).\x0a\x09\x09\x09max max: eachNode width ].\x0a\x09\x09cursor := cursor + layerDepthSize + self horizontalGap ]",
messageSends: ["leftGap", "do:", "inject:into:", "translateTopLeftOf:to:", "@", "top", "encompassingRectangle", "max:", "width", "+", "horizontalGap"],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractHorizontalTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractHorizontalTreeLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractHorizontalTreeLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractHorizontalTreeLayout.klass);


smalltalk.addClass('RTHorizontalTreeLayout', smalltalk.RTAbstractHorizontalTreeLayout, [], 'Roassal2-Layouts');
smalltalk.RTHorizontalTreeLayout.comment="A ROHorizontalTreeLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTHorizontalTreeLayout)});},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenFor: aNode except: alreadyLayoutedNodes",
messageSends: ["childrenFor:except:"],
referencedClasses: []
}),
smalltalk.RTHorizontalTreeLayout);



smalltalk.addClass('RTAbstractVerticalTreeLayout', smalltalk.RTAbstractRegularTreeLayout, [], 'Roassal2-Layouts');
smalltalk.RTAbstractVerticalTreeLayout.comment="A ROAbstractVerticalTreeLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTAbstractVerticalTreeLayout)});},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTAbstractVerticalTreeLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(20);
self["@horizontalGap"]=(3);
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTAbstractVerticalTreeLayout)});},
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09verticalGap := 20.\x0a\x09horizontalGap := 3",
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "layout:atPoint:atLayer:",
category: 'hook-private',
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
args: ["aNodeCollection", "aPoint", "aNumber"],
source: "layout: aNodeCollection atPoint: aPoint atLayer: aNumber\x0a\x09| treeSize childrenPosition x y middleOfTree |\x0a\x09aNodeCollection isEmpty ifTrue: [ ^ 0 ].\x0a\x09x := aPoint x.\x0a\x09y := aPoint y.\x0a\x09alreadyLayoutedNodes addAll: aNodeCollection.\x0a\x09self atLayer: aNumber add: aNodeCollection.\x0a\x09aNodeCollection do: [ :each | \x0a\x09\x09childrenPosition := y + each height + self verticalGap.\x0a\x09\x09treeSize := each width\x0a\x09\x09\x09max: (self layout: (self computeChildrenFor: each) atPoint: x @ childrenPosition atLayer: aNumber + 1).\x0a\x09\x09middleOfTree := x + (treeSize / 2.0) - (each width / 2.0).\x0a\x09\x09translator translateTopLeftOf: each to: middleOfTree @ y.\x0a\x09\x09x := x + treeSize + self horizontalGap.\x0a\x09\x09self step ].\x0a\x09^ x - aPoint x - self horizontalGap",
messageSends: ["ifTrue:", "isEmpty", "x", "y", "addAll:", "atLayer:add:", "do:", "+", "verticalGap", "height", "max:", "layout:atPoint:atLayer:", "computeChildrenFor:", "@", "width", "-", "/", "translateTopLeftOf:to:", "horizontalGap", "step"],
referencedClasses: []
}),
smalltalk.RTAbstractVerticalTreeLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "rearrangeByLayers:",
category: 'private',
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
args: ["aGraph"],
source: "rearrangeByLayers: aGraph\x0a\x09| cursor layerDepthSize |\x0a\x09cursor := self topGap.\x0a\x09nodesByLayer do: [:eachSetOfNodes |\x0a\x09\x09layerDepthSize := eachSetOfNodes inject: 0 into: [:max :eachNode | \x0a\x09\x09\x09eachNode translateTo: (eachNode bounds left @ cursor ).\x0a\x09\x09\x09max max: eachNode height ].\x0a\x09\x09cursor := cursor + layerDepthSize + self verticalGap ]",
messageSends: ["topGap", "do:", "inject:into:", "translateTo:", "@", "left", "bounds", "max:", "height", "+", "verticalGap"],
referencedClasses: []
}),
smalltalk.RTAbstractVerticalTreeLayout);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
category: 'testing',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._name()).__eq("ROAbstractVerticalTreeLayout");
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},smalltalk.RTAbstractVerticalTreeLayout.klass)});},
args: [],
source: "isAbstract\x0a\x09^ self name = #ROAbstractVerticalTreeLayout",
messageSends: ["=", "name"],
referencedClasses: []
}),
smalltalk.RTAbstractVerticalTreeLayout.klass);


smalltalk.addClass('RTTreeLayout', smalltalk.RTAbstractVerticalTreeLayout, [], 'Roassal2-Layouts');
smalltalk.RTTreeLayout.comment="A ROTreeLayout is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "computeChildrenFor:",
category: 'hook-private',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._childrenFor_except_(aNode,self["@alreadyLayoutedNodes"]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"computeChildrenFor:",{aNode:aNode},smalltalk.RTTreeLayout)});},
args: ["aNode"],
source: "computeChildrenFor: aNode\x0a\x09^ self childrenFor: aNode except: alreadyLayoutedNodes",
messageSends: ["childrenFor:except:"],
referencedClasses: []
}),
smalltalk.RTTreeLayout);



smalltalk.addClass('RTClusterLayout', smalltalk.RTAbstractGraphLayout, ['externalLayer', 'maxLayer', 'maxAbcissa'], 'Roassal2-Layouts');
smalltalk.RTClusterLayout.comment="A ROClusterLayout is xxxxxxxxx.\x0a\x0aInstance Variables\x0a\x09externalLayer:\x09\x09<Object>\x0a\x09maxAbcissa:\x09\x09<Object>\x0a\x09maxLayer:\x09\x09<Object>\x0a\x0aexternalLayer\x0a\x09- xxxxx\x0a\x0amaxAbcissa\x0a\x09- xxxxx\x0a\x0amaxLayer\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "computePosition:",
category: 'algorithm',
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
args: ["aNode"],
source: "computePosition: aNode\x0a\x0a\x09|children previous|\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09\x0a\x09children do: [ :e | self computePosition: e ].\x0a\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09children isEmpty ifTrue: [ externalLayer first = aNode ifFalse: [ previous := externalLayer at: ( externalLayer indexOf: aNode) - 1.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09((self fatherOf: previous) = (self fatherOf: aNode)) ifTrue: [ self xOf: aNode put: (self xOf: previous) + (horizontalGap / 2) ] \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ self xOf: aNode put: (self xOf: previous) + horizontalGap] ] ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ifFalse: [ self xOf: aNode put: ((self xOf: (self leftContourOf: aNode)) + (self xOf: (self rightContourOf: aNode)) / 2 )]",
messageSends: ["childrenFor:", "do:", "computePosition:", "ifTrue:ifFalse:", "ifFalse:", "at:", "-", "indexOf:", "xOf:put:", "+", "/", "xOf:", "=", "fatherOf:", "first", "rightContourOf:", "leftContourOf:", "isEmpty"],
referencedClasses: []
}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["nodeElements"],
source: "doExecute: nodeElements \x0a\x0a\x09| root gap |\x0a\x09\x22Not much to do if there is only one element\x22\x0a\x09nodeElements size = 1 ifTrue: [ ^ self ].\x0a\x09\x0a\x09root := self rootNodesFor: nodeElements .\x0a\x09root do: [ :e | self initializeNode: e ].\x0a\x09root do: [ :e | self computePosition: e ].\x0a\x09\x0a\x09maxLayer := (root collect: [ :e | self layerOf: e ]) max.\x0a\x09\x0a\x09(root size > 1) ifTrue: [ maxLayer := maxLayer + 1 ].\x0a\x09\x0a\x09maxAbcissa := (self xOf: externalLayer last) + horizontalGap .\x0a\x09\x0a\x09gap := maxAbcissa \x22+ horizontalGap \x22/ 2 / Float pi / maxLayer.\x0a\x09\x0a\x09verticalGap := verticalGap max: gap.\x0a\x09\x0a\x09root do: [ :e | self draw: e. self step ].",
messageSends: ["ifTrue:", "=", "size", "rootNodesFor:", "do:", "initializeNode:", "computePosition:", "max", "collect:", "layerOf:", "+", ">", "xOf:", "last", "/", "pi", "max:", "draw:", "step"],
referencedClasses: ["Float"]
}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "draw:",
category: 'drawing-general',
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
args: ["aNode"],
source: "draw: aNode\x0a\x0a\x09(self childrenFor: aNode) do: [ :e | self draw: e ].\x0a\x09translator translateTopLeftOf: aNode to: (Point r: maxLayer - (self layerOf: aNode) * verticalGap theta: (maxAbcissa - (self xOf: aNode) / maxAbcissa) * 2 * Float pi )",
messageSends: ["do:", "draw:", "childrenFor:", "translateTopLeftOf:to:", "r:theta:", "*", "-", "layerOf:", "pi", "/", "xOf:"],
referencedClasses: ["Float", "Point"]
}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
fn: function () {
var self=this;
function $OrderedCollection(){return smalltalk.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
return smalltalk.withContext(function($ctx1) { 
smalltalk.RTClusterLayout.superclass.fn.prototype._initialize.apply(_st(self), []);
self["@verticalGap"]=(30);
self["@horizontalGap"]=(20);
self["@externalLayer"]=_st($OrderedCollection())._new();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.RTClusterLayout)});},
args: [],
source: "initialize \x0a\x0a\x09super initialize.\x0a\x09verticalGap := 30.\x0a\x09horizontalGap := 20.\x0a\x09externalLayer := OrderedCollection new",
messageSends: ["initialize", "new"],
referencedClasses: ["OrderedCollection"]
}),
smalltalk.RTClusterLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeNode:",
category: 'initialize-release',
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
args: ["aNode"],
source: "initializeNode: aNode\x0a\x0a\x09|children|\x0a\x09\x0a\x09children := self childrenFor: aNode.\x0a\x09\x0a\x09children do: [ :e | self initializeNode: e.\x0a\x09\x09\x09\x09\x09\x09self fatherOf: e put: aNode ].\x0a\x09\x0a\x09children isEmpty ifTrue: [ self layerOf: aNode put: 0.\x0a\x09\x09\x09\x09\x09\x09\x09externalLayer add: aNode ] \x0a\x09\x09\x09\x09\x09ifFalse: [ self layerOf: aNode put: ((children collect: [ :e | (self layerOf: e) ]) max + 1).\x0a\x09\x09\x09\x09\x09\x09\x09self leftContourOf: aNode put: children first.\x0a\x09\x09\x09\x09\x09\x09\x09self rightContourOf: aNode put: children last ].",
messageSends: ["childrenFor:", "do:", "initializeNode:", "fatherOf:put:", "ifTrue:ifFalse:", "layerOf:put:", "add:", "+", "max", "collect:", "layerOf:", "leftContourOf:put:", "first", "rightContourOf:put:", "last", "isEmpty"],
referencedClasses: []
}),
smalltalk.RTClusterLayout);



smalltalk.addClass('RTForceBasedLayout', smalltalk.RTEdgeDrivenLayout, ['layoutInitial', 'oldPositions', 'nodes', 'weights', 'strengths', 'lengths', 'gravity', 'friction', 'theta', 'charge', 'alpha', 'charges', 'strength', 'length', 'fixedNodes', 'center'], 'Roassal2-Layouts');
smalltalk.RTForceBasedLayout.comment="A ROForceBasedLayout is inspired from the Code of D3. The original d3 version may be found on: http://bl.ocks.org/mbostock/4062045\x0a\x0aLayout algorithm inspired by Tim Dwyer and Thomas Jakobsen.\x0a\x0aInstance Variables\x0a\x09alpha:\x09\x09<Object>\x0a\x09center:\x09\x09<Object>\x0a\x09charge:\x09\x09<Object>\x0a\x09charges:\x09\x09<Object>\x0a\x09fixedNodes:\x09\x09<Object>\x0a\x09friction:\x09\x09<Object>\x0a\x09gravity:\x09\x09<Object>\x0a\x09layoutInitial:\x09\x09<Object>\x0a\x09length:\x09\x09<Object>\x0a\x09lengths:\x09\x09<Object>\x0a\x09nodes:\x09\x09<Object>\x0a\x09oldPositions:\x09\x09<Object>\x0a\x09strength:\x09\x09<Object>\x0a\x09strengths:\x09\x09<Object>\x0a\x09theta:\x09\x09<Object>\x0a\x09weights:\x09\x09<Object>\x0a\x0aalpha\x0a\x09- xxxxx\x0a\x0acenter\x0a\x09- xxxxx\x0a\x0acharge\x0a\x09- xxxxx\x0a\x0acharges\x0a\x09- xxxxx\x0a\x0afixedNodes\x0a\x09- xxxxx\x0a\x0afriction\x0a\x09- xxxxx\x0a\x0agravity\x0a\x09- xxxxx\x0a\x0alayoutInitial\x0a\x09- xxxxx\x0a\x0alength\x0a\x09- xxxxx\x0a\x0alengths\x0a\x09- xxxxx\x0a\x0anodes\x0a\x09- xxxxx\x0a\x0aoldPositions\x0a\x09- xxxxx\x0a\x0astrength\x0a\x09- xxxxx\x0a\x0astrengths\x0a\x09- xxxxx\x0a\x0atheta\x0a\x09- xxxxx\x0a\x0aweights\x0a\x09- xxxxx";
smalltalk.addMethod(
smalltalk.method({
selector: "accumulate:",
category: 'algorithm',
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
args: ["aQuad"],
source: "accumulate: aQuad \x0a\x0a\x09| cx cy k random |\x0a\x09\x0a\x09cx := 0.\x0a\x09cy := 0.\x0a\x09\x0a\x09aQuad charge: 0; cx: 0; cy: 0.\x0a\x09\x0a\x09random := Random new.\x0a\x09\x0a\x09aQuad leaf ifFalse: [ aQuad nodes do: [ :e | e isNil ifFalse: [ self accumulate: e.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09aQuad charge: aQuad charge + e charge.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09cx := cx + (e charge * e cx).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09cy := cy + (e charge * e cy) ] ] ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09aQuad node isNil ifFalse: [ aQuad leaf ifFalse: [ aQuad node translateTo: aQuad node position + (random next - 0.5 @ ( random next - 0.5)) ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09k := alpha * (self chargeOf: aQuad node).\x0a\x09\x09\x09\x09\x09\x09\x09\x09aQuad charge: aQuad charge + k.\x0a\x09\x09\x09\x09\x09\x09\x09\x09cx := cx + (k * aQuad node position x). \x0a\x09\x09\x09\x09\x09\x09\x09\x09cy := cy + (k * aQuad node position y).].\x0a\x09\x09\x09\x09\x09\x09\x09\x0a\x09aQuad charge = 0 ifTrue: [ ^ self ].\x09\x09\x09\x09\x0a\x09aQuad cx: cx / aQuad charge.\x0a\x09aQuad cy: cy / aQuad charge.",
messageSends: ["charge:", "cx:", "cy:", "new", "ifFalse:", "do:", "accumulate:", "+", "charge", "*", "cx", "cy", "isNil", "nodes", "leaf", "translateTo:", "@", "-", "next", "position", "node", "chargeOf:", "x", "y", "ifTrue:", "=", "/"],
referencedClasses: ["Random"]
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "charge:",
category: 'accessing',
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@charge"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"charge:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["aFloat"],
source: "charge: aFloat\x0a\x0a\x09charge := aFloat",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "chargeOf:",
category: 'algorithm',
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
args: ["aNode"],
source: "chargeOf: aNode \x0a\x0a\x09^ charges at: aNode ifAbsent: [ ^ charge ]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "doExecute:",
category: 'hook',
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
args: ["nodeElements"],
source: "doExecute: nodeElements\x0a\x0a\x09\x0a\x09self start: nodeElements.\x0a\x09\x0a\x09[ alpha := alpha * 0.99 .  alpha > 0.005 ] whileTrue: [ self step ].\x0a\x09\x0a\x09alpha := 0.\x0a\x09\x0a\x09nodes do: [ :e | translator translateTopLeftOf: e to: e position ].",
messageSends: ["start:", "whileTrue:", "step", "*", ">", "do:", "translateTopLeftOf:to:", "position"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "fix:at:",
category: 'algorithm',
fn: function (aNode, aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@fixedNodes"])._at_put_(aNode,aPoint);
return self}, function($ctx1) {$ctx1.fill(self,"fix:at:",{aNode:aNode,aPoint:aPoint},smalltalk.RTForceBasedLayout)});},
args: ["aNode", "aPoint"],
source: "fix: aNode at: aPoint\x0a\x0a\x09fixedNodes at: aNode put: aPoint",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "gravityAt:",
category: 'algorithm',
fn: function (aPoint) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@center"]=aPoint;
return self}, function($ctx1) {$ctx1.fill(self,"gravityAt:",{aPoint:aPoint},smalltalk.RTForceBasedLayout)});},
args: ["aPoint"],
source: "gravityAt: aPoint\x0a\x0a\x09center := aPoint",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialPositionOfNodes:",
category: 'hook',
fn: function (nodeElements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(_st(self["@layoutInitial"])._new())._executeOnElements_(nodeElements);
return self}, function($ctx1) {$ctx1.fill(self,"initialPositionOfNodes:",{nodeElements:nodeElements},smalltalk.RTForceBasedLayout)});},
args: ["nodeElements"],
source: "initialPositionOfNodes: nodeElements\x0a\x0a\x09layoutInitial new executeOnElements: nodeElements",
messageSends: ["executeOnElements:", "new"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
category: 'initialize-release',
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
args: [],
source: "initialize\x0a\x09\x0a\x09super initialize.\x0a\x09layoutInitial := RTGridLayout.\x0a\x09\x0a\x09fixedNodes := Dictionary new.\x0a\x09\x0a\x09strengths := Dictionary new.\x0a\x09lengths := Dictionary new.\x0a\x09charges := Dictionary new.\x0a\x09\x0a\x09strength := 1.\x0a\x09length := 20.\x0a\x09charge := -30.\x09\x0a\x09\x0a\x09gravity := 0.1.\x0a\x09friction := 0.9.\x0a\x09theta := 0.8.\x0a\x09\x0a\x09center := 200@200.",
messageSends: ["initialize", "new", "@"],
referencedClasses: ["RTGridLayout", "Dictionary"]
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "isFixed:",
category: 'testing',
fn: function (aNode) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@fixedNodes"])._includesKey_(aNode);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isFixed:",{aNode:aNode},smalltalk.RTForceBasedLayout)});},
args: ["aNode"],
source: "isFixed: aNode\x0a\x0a\x09^ fixedNodes includesKey: aNode",
messageSends: ["includesKey:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "iterationsToSendEvent:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@currentIteraction"]=anInteger;
return self}, function($ctx1) {$ctx1.fill(self,"iterationsToSendEvent:",{anInteger:anInteger},smalltalk.RTForceBasedLayout)});},
args: ["anInteger"],
source: "iterationsToSendEvent: anInteger\x0a\x0a\x09currentIteraction := anInteger",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "length:",
category: 'accessing',
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@length"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"length:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["aFloat"],
source: "length: aFloat\x0a\x0a\x09length := aFloat",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "lengthOf:",
category: 'algorithm',
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
args: ["anEdge"],
source: "lengthOf: anEdge\x0a\x0a\x09^ lengths at: anEdge ifAbsent: [ ^ length ]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "nodes:",
category: 'accessing',
fn: function (elements) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@nodes"]=elements;
return self}, function($ctx1) {$ctx1.fill(self,"nodes:",{elements:elements},smalltalk.RTForceBasedLayout)});},
args: ["elements"],
source: "nodes: elements\x0a\x09nodes := elements",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "on:edges:",
category: 'hook',
fn: function (elements, edgesCol) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._nodes_(elements);
self._applyOn_(elements);
return self}, function($ctx1) {$ctx1.fill(self,"on:edges:",{elements:elements,edgesCol:edgesCol},smalltalk.RTForceBasedLayout)});},
args: ["elements", "edgesCol"],
source: "on: elements edges: edgesCol\x0a\x09self nodes: elements.\x0a\x09self applyOn: elements",
messageSends: ["nodes:", "applyOn:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "repulse:from:",
category: 'algorithm',
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
args: ["aNode", "aQuad"],
source: "repulse: aNode from: aQuad\x0a\x0a\x09| dx dy dn k p |\x0a\x09\x0a\x09dx := aQuad cx - aNode position x.\x0a\x09dy := aQuad cy - aNode position y.\x0a\x09\x0a\x09((dx closeTo: 0) and: [ dy closeTo: 0 ] ) ifFalse: [ \x0a\x09\x0a\x09dn := 1 / ((dx * dx) + (dy * dy)) sqrt.\x0a\x09\x0a\x09p := oldPositions at: aNode.\x0a\x09aQuad node ~= aNode ifTrue: [ aQuad corner x - aQuad origin x * dn < theta ifTrue: [ k := aQuad charge * dn * dn.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09oldPositions at: aNode put: p x - (dx * k) @ (p y - (dy * k) ).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09^ self].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09(aQuad node isNil not and: [ dn < 1e9 ]) ifTrue: [ k := (self chargeOf: aQuad node) * dn * dn * alpha.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09  oldPositions at: aNode put: p x - (dx * k) @ (p y - (dy * k) ) ] ]. ].\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x0a\x09(aQuad charge closeTo: 0) not ifTrue: [ aQuad nodes do: [ :e | e isNil ifFalse: [ self repulse: aNode from: e ] ] ]",
messageSends: ["-", "x", "position", "cx", "y", "cy", "ifFalse:", "/", "sqrt", "+", "*", "at:", "ifTrue:", "charge", "at:put:", "@", "<", "origin", "corner", "chargeOf:", "node", "and:", "e9", "not", "isNil", "~=", "closeTo:", "do:", "repulse:from:", "nodes"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:charge:",
category: 'algorithm',
fn: function (aNode, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@charges"])._at_put_(aNode,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:charge:",{aNode:aNode,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["aNode", "aFloat"],
source: "set: aNode charge: aFloat \x0a\x0a\x09charges at: aNode put: aFloat",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:length:",
category: 'algorithm',
fn: function (anEdge, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lengths"])._at_put_(anEdge,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:length:",{anEdge:anEdge,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["anEdge", "aFloat"],
source: "set: anEdge length: aFloat \x0a\x0a\x09lengths at: anEdge put: aFloat",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:length:strength:",
category: 'algorithm',
fn: function (anEdge, aFloat, another) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@lengths"])._at_put_(anEdge,aFloat);
_st(self["@strengths"])._at_put_(anEdge,another);
return self}, function($ctx1) {$ctx1.fill(self,"set:length:strength:",{anEdge:anEdge,aFloat:aFloat,another:another},smalltalk.RTForceBasedLayout)});},
args: ["anEdge", "aFloat", "another"],
source: "set: anEdge length: aFloat strength: another\x0a\x0a\x09lengths at: anEdge put: aFloat.\x0a\x09strengths at: anEdge put: another",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "set:strength:",
category: 'algorithm',
fn: function (anEdge, aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self["@strengths"])._at_put_(anEdge,aFloat);
return self}, function($ctx1) {$ctx1.fill(self,"set:strength:",{anEdge:anEdge,aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["anEdge", "aFloat"],
source: "set: anEdge strength: aFloat \x0a\x0a\x09strengths at: anEdge put: aFloat",
messageSends: ["at:put:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "start:",
category: 'accessing',
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
args: ["nodeElements"],
source: "start: nodeElements \x0a\x0a\x09self initialPositionOfNodes: nodeElements.\x0a\x0a\x09weights := Dictionary new.\x0a\x09oldPositions := Dictionary new.\x0a\x09\x0a\x09nodes := nodeElements.\x0a\x09\x0a\x09nodes do: [ :e | weights add: (Association key: e value: 0).\x0a\x09\x09\x09\x09\x09oldPositions add:(Association key: e value: e position) ].\x0a\x09\x0a\x09edges do: [ :e | | from to | \x0a\x09\x09\x09\x09from := e from.\x0a\x09\x09\x09\x09to := e to.\x0a\x09\x09\x09\x09weights at: from put: ((weights at: from) + 1).\x0a\x09\x09\x09\x09weights at: to put: ((weights at: to) + 1)].\x0a\x09\x0a\x09alpha := 0.1.",
messageSends: ["initialPositionOfNodes:", "new", "do:", "add:", "key:value:", "position", "from", "to", "at:put:", "+", "at:"],
referencedClasses: ["Dictionary", "Association"]
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "step",
category: 'events',
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
args: [],
source: "step \x0a\x09\x22run a step of the force layout algorithm\x22\x0a\x09| from to fp tp x y len k quad old |\x09\x0a\x09super step.\x0a\x09edges do: [ :e | \x0a\x09\x09\x09\x09\x09from := e from. fp := from position.\x0a\x09\x09\x09\x09\x09to := e to. tp := to position.\x0a\x09\x09\x09\x09\x09x := tp x - fp x.\x0a\x09\x09\x09\x09\x09y := tp y - fp y.\x0a\x09\x09\x09\x09\x09len := ((x * x) + (y * y)) sqrt.\x0a\x09\x09\x09\x09\x09((len closeTo: 0) not) ifTrue: [ len :=  alpha * (self strengthOf: e) * ( len - (self lengthOf: e) ) / len.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09x := x * len.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09y := y * len.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09k := (weights at: from) / (( weights at: from) +( weights at: to )).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09to translateTo: ( tp x - (x * k) )@( tp y - (y * k) ).\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09k := 1 -  k.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09from translateTo: ( fp x + (x * k) )@( fp y + (y * k) ) ] ].\x0a\x09\x09\x09\x0a\x09\x09k := alpha * gravity.\x0a\x09\x09((k closeTo: 0) not) ifTrue: [ x := center x.\x0a\x09\x09\x09\x09\x09\x09\x09y := center y.\x0a\x09\x09\x09\x09\x09\x09\x09nodes do: [ :ea | |pos|\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09pos := ea position.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09ea translateTo: (pos x + (( x - pos x )* k ) )@(pos y + (( y - pos y )* k ) ) ] ].\x0a\x09\x09\x09\x09\x09\x0a\x09\x09quad := RTQuadTree withAll: nodes.\x0a\x09\x09self accumulate: quad.\x0a\x09\x09nodes do: [ :e | (self isFixed: e) ifFalse: [ self repulse: e from: quad ]\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 ifTrue: [ translator translateTopLeftOf: e to: (fixedNodes at: e) ] ].\x0a\x0a\x09\x09nodes do: [ :e | old := e position .\x0a\x09\x09\x09\x09\x09\x09e translateTo: (old x - (( (oldPositions at: e) x - old x ) * friction)) @ (old y - (( (oldPositions at: e) y - old y ) * friction)).\x0a\x09\x09\x09\x09\x09\x09oldPositions at: e put: old.].",
messageSends: ["step", "do:", "from", "position", "to", "-", "x", "y", "sqrt", "+", "*", "ifTrue:", "/", "lengthOf:", "strengthOf:", "at:", "translateTo:", "@", "not", "closeTo:", "withAll:", "accumulate:", "ifFalse:ifTrue:", "repulse:from:", "translateTopLeftOf:to:", "isFixed:", "at:put:"],
referencedClasses: ["RTQuadTree"]
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "strength:",
category: 'accessing',
fn: function (aFloat) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@strength"]=aFloat;
return self}, function($ctx1) {$ctx1.fill(self,"strength:",{aFloat:aFloat},smalltalk.RTForceBasedLayout)});},
args: ["aFloat"],
source: "strength: aFloat\x0a\x09\x22Set the force of attraction for the edges. A high value results in having nodes together.\x0a\x09The default value is 1.0\x22\x0a\x09strength := aFloat",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);

smalltalk.addMethod(
smalltalk.method({
selector: "strengthOf:",
category: 'algorithm',
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
args: ["anEdge"],
source: "strengthOf: anEdge\x0a\x0a\x09^ strengths at: anEdge ifAbsent: [ ^ strength ]",
messageSends: ["at:ifAbsent:"],
referencedClasses: []
}),
smalltalk.RTForceBasedLayout);



smalltalk.addClass('RTLayoutTranslator', smalltalk.RTObject, [], 'Roassal2-Layouts');
smalltalk.RTLayoutTranslator.comment="A RTLayoutTranslator is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "nbCycles:",
category: 'accessing',
fn: function (anInteger) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return self}, function($ctx1) {$ctx1.fill(self,"nbCycles:",{anInteger:anInteger},smalltalk.RTLayoutTranslator)});},
args: ["anInteger"],
source: "nbCycles: anInteger\x0a\x09\x22Do nothing\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTLayoutTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
category: 'hook',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._subclassResponsibility();
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RTLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.RTLayoutTranslator);

smalltalk.addMethod(
smalltalk.method({
selector: "translateTopLeftOf:to:",
category: 'hook',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._translate_to_(element,_st(newPosition).__plus(_st(_st(element)._extent()).__slash((2))));
return self}, function($ctx1) {$ctx1.fill(self,"translateTopLeftOf:to:",{element:element,newPosition:newPosition},smalltalk.RTLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translateTopLeftOf: element to: newPosition\x0a\x09self translate: element to: (newPosition + (element extent / 2))",
messageSends: ["translate:to:", "+", "/", "extent"],
referencedClasses: []
}),
smalltalk.RTLayoutTranslator);


smalltalk.RTLayoutTranslator.klass.iVarNames = ['defaultTranslator'];
smalltalk.addMethod(
smalltalk.method({
selector: "default",
category: 'as yet unclassified',
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
args: [],
source: "default\x0a\x09\x22Return the default translator, the one used in the layouts\x22\x0a\x0a\x09defaultTranslator ifNotNil: [ ^ defaultTranslator ].\x0a\x09^ defaultTranslator := self defaultClass new",
messageSends: ["ifNotNil:", "new", "defaultClass"],
referencedClasses: []
}),
smalltalk.RTLayoutTranslator.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "defaultClass",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allSubclasses())._detect_("isDefault");
return $1;
}, function($ctx1) {$ctx1.fill(self,"defaultClass",{},smalltalk.RTLayoutTranslator.klass)});},
args: [],
source: "defaultClass\x0a\x09^ self allSubclasses detect: #isDefault",
messageSends: ["detect:", "allSubclasses"],
referencedClasses: []
}),
smalltalk.RTLayoutTranslator.klass);


smalltalk.addClass('RTDirectLayoutTranslator', smalltalk.RTLayoutTranslator, [], 'Roassal2-Layouts');
smalltalk.RTDirectLayoutTranslator.comment="A RTDirectLayoutTranslator is xxxxxxxxx.";
smalltalk.addMethod(
smalltalk.method({
selector: "translate:to:",
category: 'as yet unclassified',
fn: function (element, newPosition) {
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(element)._translateTo_(newPosition);
return self}, function($ctx1) {$ctx1.fill(self,"translate:to:",{element:element,newPosition:newPosition},smalltalk.RTDirectLayoutTranslator)});},
args: ["element", "newPosition"],
source: "translate: element to: newPosition\x0a\x09element translateTo: newPosition",
messageSends: ["translateTo:"],
referencedClasses: []
}),
smalltalk.RTDirectLayoutTranslator);


smalltalk.addMethod(
smalltalk.method({
selector: "isDefault",
category: 'as yet unclassified',
fn: function () {
var self=this;
return smalltalk.withContext(function($ctx1) { 
return true;
}, function($ctx1) {$ctx1.fill(self,"isDefault",{},smalltalk.RTDirectLayoutTranslator.klass)});},
args: [],
source: "isDefault\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.RTDirectLayoutTranslator.klass);


