<%@ Page language="c#" Inherits="Microsoft.Crm.Common.Web.Tools.EmailTemplateEditor.EmailTemplateEditorPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Xml" %>
<%@ Import Namespace="System.Xml.Xsl" %>
<%@ Import Namespace="System.Xml.XPath" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<style type="text/css">
/*------------------------------------------------------------------------------------------------------
* CRM SE 34734: CRM 2011: Rich text editor issues when creating mail merge templates in CRM 2011 online
* jebernar 04/12/2013
*------------------------------------------------------------------------------------------------------
* CRM SE 36991: CRM 2011: Post UR12 style tags are not stripped from e-mail template Subject
* ancha 08/28/2013
*------------------------------------------------------------------------------------------------------
*/

ul
{
margin-top:0px;
margin-left:28px;
padding-top:0px;
padding-left:10px;
list-style:disc;
}

div.editPage
{
background-color: #FFFFFF;
height: 100%;
border: 0px;
min-height:30px;
display:block;
overflow-x:	auto;
overflow-y: auto;
cursor: text;
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Msgbody_Default_fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
border: 1px solid #808080;
}



div.editPage[contentEditable=true] P, td.ms-crm-Email-Body[contentEditable=true] P, div.editor[contentEditable=true] P,
div.editPage[contentEditable=true] DIV, td.ms-crm-Email-Body[contentEditable=true] DIV, div.editor[contentEditable=true] DIV
{
margin:12px 0px;
}

span.dataslug
{
background-color: #ffff33!important;
border: 1px solid black;
tab-index: -1;
}

span.dataslug.selected
{
border-width:2px;
}

div.editSubject
{
background-color: #ffffff;
height: 19px;
vertical-align: middle;
display: block;
overflow-x:	hidden;
overflow-y: auto;
cursor: text;
padding: 1px;
border:	1px solid #6699cc;
}

div.ms-crm-ReadOnly
{
border:	1px solid;
width: 100%;
height: 19px;
overflow-y: auto;
}

div.subjectro
{
vertical-align: middle;
padding: 1px;
overflow-x:	hidden;
}

div.bodyro
{
padding: 10px;
height: 100%;
width: 100%;
overflow-x:auto;
}

.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}

#TemplateEditor a,
#TemplateEditor a:link,
#TemplateEditor a:visited,
#TemplateEditor a:active,
#TemplateEditor a:hover
{
color:#00008B;
text-decoration: underline;
}
</style>

<script type="text/javascript">

var ThinSpace = "\u2009";

var oObjectsXml;
var _activeSlug;
var _clipboard = new XUI.ClipboardManager();
var _serializedObjectsXml;
var _nonIEMode = Sys.Browser.name != 'Microsoft Internet Explorer';
var _htmlBarComponent = null;
var _savedRange = null;
var _formSaved = false;




function ResizeTemplateEditorAndAttacmentsGrid()
{
var contentWrapper = $get('contentWrapper');
var templatePropertiesTable = $get('templatePropertiesTable');
var templateEditor = $get('TemplateEditor');
var gridWrapper = $get('gridWrapper');
var htmlBarWrapper = $get('htmlBarWrapper');

if (!IsNull(contentWrapper) && !IsNull(templatePropertiesTable) && !IsNull(templateEditor) && !IsNull(gridWrapper))
{


var templateEditorHeight = (contentWrapper.clientHeight - templatePropertiesTable.clientHeight - (!IsNull(htmlBarWrapper) ? htmlBarWrapper.clientHeight : 0));
if (templateEditorHeight > 0)
{
templateEditor.style.height = templateEditorHeight + 'px';
}


gridWrapper.style.height = (contentWrapper.clientHeight * 0.4) + 'px';
}
}

function CleanUpHandlers()
{
$removeHandler(window, "resize", ResizeTemplateEditorAndAttacmentsGrid);
$removeHandler($get('title'), "focus", HandleFocus);
$removeHandler($get('description'), "focus", HandleFocus);
LoadSlugs(false);
}

function loadXmls()
{
_serializedObjectsXml = XUI.Xml.LoadXml(XUI.Html.GetText($get('preObjectsXml')));
}

Sys.Application.add_load(EmailTemplateEditorOnLoad);

function LoadSlugs(initialize)
{
var slugs = document.getElementsByTagName("SPAN");
for(var i=0;i<slugs.length;i++)
{
var slug = slugs[i];
if(slug.className.indexOf("dataSlug")>=0)
{
if(initialize === true)
{
AttachSlugEvents(slug);
}
else if(initialize===false)
{
RemoveSlugEvents(slug)
}
}
}
}

function EmailTemplateEditorOnLoad()
{
ResizeTemplateEditorAndAttacmentsGrid();
$addHandler(window, "resize", ResizeTemplateEditorAndAttacmentsGrid);
$addHandler($get('title'), "focus", HandleFocus);
$addHandler($get('description'), "focus", HandleFocus);
LoadSlugs(true);
attachWindowOnUnload(CleanUpHandlers);

attachWindowOnBeforeUnload(window_onbeforeunload);

var templateEditor = $get("TemplateEditor");
var subjectEditor = $get("SubjectEditor");

loadXmls();
var htmlControl = Mscrm.FormControlInputBehavior.GetBehavior("html");
var subjectHtmlControl = Mscrm.FormControlInputBehavior.GetBehavior("subjecthtml");


var crmForm = $find("crmForm");
crmForm.add_onSave(Save);


htmlControl.set_doNotSubmit(false);
subjectHtmlControl.set_doNotSubmit(false);
Mscrm.FormControlInputBehavior.GetBehavior("templatetypecode").set_forceSubmit(true);

ExtendAreaForDataSlugs(templateEditor);
ExtendAreaForDataSlugs(subjectEditor);

checkForSubjectDataSlugs();

GenHtml();
htmlControl.set_defaultValue(htmlControl.get_dataValue());
subjectHtmlControl.set_defaultValue(subjectHtmlControl.get_dataValue());

<% if (crmForm.Disabled || crmForm.ReadOnly) { %>
Sys.UI.DomElement.toggleCssClass(templateEditor, "ms-crm-ReadOnly subjectro");
Sys.UI.DomElement.toggleCssClass(subjectEditor, "ms-crm-ReadOnly bodyro");
<% } else { %>
$get('title').focus();
<% } %>
<% if(crmForm.State == FormState.New){ %>
$get('templateAttachments').Disabled = true;
<%} %>
_htmlBarComponent = $find("HTMLBAR");
_htmlBarComponent.set_editableControl($get('TemplateEditor'));
}



function SelectActiveDataSlug(newSlug) {
if (_activeSlug == newSlug) {
return;
}

if (!IsNull(_activeSlug)) {
_activeSlug.blur();
Sys.UI.DomElement.toggleCssClass(_activeSlug, "selected");
}

_activeSlug = newSlug;

if (!IsNull(newSlug)) {
_activeSlug.focus();
Sys.UI.DomElement.toggleCssClass(_activeSlug, "selected");
}
}



function RestoreDataSlugs(element)
{
var areaSpanId = element.id;
var spans = element.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++)
{
var slugParent = spans[i];


if (!IsNull(slugParent.className) && IsDataSlug(slugParent))
{

var dataSlug = slugParent.children["DataSlug"];
if (!IsNull(dataSlug))
{
InitDataSlugElement(slugParent, areaSpanId + i.toString(), XUI.Html.GetText(dataSlug));


slugParent.removeChild(dataSlug);
}
}
}
}


function Save(sender, args)
{
var subjectEditor = $get("SubjectEditor");
if(isNullOrEmptyString(XUI.Html.GetText(subjectEditor)))
{
alert(LOCID_ETMPL_SUBJECT_REQUIRED);

subjectEditor.focus();
args.preventDefault();

return false;
}


GenHtml();

if(Mscrm.FormControlInputBehavior.GetBehavior("subjecthtml").get_isDirty())
{

var MAX_SUBJECT_LENGTH = 200;
if(XUI.Html.GetText(subjectEditor).replace(/{!.[^}]*}/g, "").length > MAX_SUBJECT_LENGTH)
{
alert(LOCID_ETMPL_SUBJECT_TOO_LONG);

subjectEditor.focus();
args.preventDefault();
return false;
}
}
_formSaved = true;
}


function ExtendAreaForDataSlugs(target)
{
RestoreDataSlugs(target);

var clickHandler = function (e) {
if (IsDataSlug(e.target)) {
SelectActiveDataSlug(e.target);
}
else {
SelectActiveDataSlug(null);
}

return true;
};

var IEControlSelectHandler = function (e) {
if (IsDataSlug(e.target)) {
SelectActiveDataSlug(e.target);
return false;
}
return true;
};

var handleEditorCopy = function (e) {


SelectActiveDataSlug(null);
};


var handleEditorCut = function (e) {
handleEditorCopy(e);
};

var keyUpHandler = function(e){
onKeyUp(e);
};
var keyDownHandler = function(e){
onKeyDown(e);
};



$addHandler(target, "click", clickHandler);


if (Sys.Browser.name == 'Microsoft Internet Explorer') {
$addHandler(target, "controlselect", IEControlSelectHandler);
}


$addHandler(target, "copy", handleEditorCopy);
$addHandler(target, "cut", handleEditorCut);

$addHandler(target, "keyup", keyUpHandler);
$addHandler(target, "keydown", keyDownHandler);


$addHandler(document, "unload",
function () {
$removeHandler(target, "cut", handleEditorCut);
$removeHandler(target, "copy", handleEditorCopy);
$removeHandler(target, "controlselect", IEControlSelectHandler);
$removeHandler(target, "click", clickHandler);

$removeHandler(target, "keyup", keyUpHandler);
$removeHandler(target, "keydown", keyDownHandler);

}
);
}

function hasDataSlugs(sText)
{
var oSlugs = sText.match(/{!.[^}]*}/, "");
return (!IsNull(oSlugs) && oSlugs.length > 0);
}
function showSubjectNotification()
{
var oNotification = $find("notifications");


var oaNot = new Array(oNotification.CreateNotification("SubjectDataSlugs", 3, "SubjectEditor", LOCID_ETMPLSUBJECTDATAFIELDWARN));
oNotification.SetNotifications(oaNot, "SubjectEditor");
}

function checkForSubjectDataSlugs()
{

var notifications = $find("notifications");
if(hasDataSlugs(XUI.Html.GetText($get("SubjectEditor"))))
{
showSubjectNotification();
notifications.SetVisible(true);
}
else
{

notifications.SetNotifications(new Array(), "SubjectEditor");
}
}




function window_onbeforeunload(oEvent)
{
GenHtml();
oEvent = oEvent.rawEvent;
if (!_formSaved)
{
if ($find("crmForm").get_isDirty())
{
oEvent.returnValue = LOCID_FORMS_SAVE_CONFIRM_TITLE;
return LOCID_FORMS_SAVE_CONFIRM_TITLE;
}
}
}

function removeSpanTags(fromHtml)
{
var templateEditor = $get("TemplateEditorHtml");
templateEditor.innerHTML = fromHtml;
var o, oPrev;

var allChildren = templateEditor.getElementsByTagName("span");

for (i = 0; i < allChildren.length; i++)
{
o = allChildren[i];

if (IsDataSlug(o))
{

if(XUI.Html.DomUtils.HasChildElements(o))
{
var childClone = XUI.Html.DomUtils.GetFirstChild(o).cloneNode(true);
o.parentNode.insertBefore(childClone, o);



oPrev = childClone;
while(XUI.DomUtilities.HasChildElements(oPrev))
{
oPrev = XUI.Html.DomUtils.GetFirstChild(oPrev);
}
oPrev.data =  GetDataSlugValue(o);
}

o.parentNode.removeChild(o);

i--;
}
}

return templateEditor.innerHTML;
}

function GenHtml()
{
Mscrm.FormControlInputBehavior.GetBehavior("html").set_dataValue(removeSpanTags($get("TemplateEditor").innerHTML));
Mscrm.FormControlInputBehavior.GetBehavior("subjecthtml").set_dataValue(removeSpanTags($get("SubjectEditor").innerHTML));
}

function MakeOrgAvailable()
{
$find("crmForm").SubmitCrmForm(<%= FormEventId.TemplateMakeOrgAvailable.ToString("D") %>, true, true, false);
}

function MakeOrgUnavailable()
{
$find("crmForm").SubmitCrmForm(<%= FormEventId.TemplateMakeOrgUnavailable.ToString("D") %>, true, true, false);
}

function stripFormatting(evt)
{
var o = evt.target;

var arrElements = o.getElementsByTagName("span");

for( var i = 0; !IsNull(arrElements) && i < arrElements.length; i++ )
{
var elSpan = arrElements[i];
if(!IsDataSlug(elSpan))
{

var elDiv = document.createElement("div");
XUI.Html.SetText(elDiv, XUI.Html.GetText(elSpan));
elSpan.parentNode.replaceChild( elDiv, elSpan);

i--;
}
}


var s = o.innerHTML;



if (Sys.Browser.agent == Sys.Browser.Firefox)
{
s = s.replace("<br>", "").replace("</br", "");
}



var reComment = new RegExp("<!-" + "-[\\s\\S]*?-->", "g");

var re = /<(?!\/?span).*?>/ig;

var sStripped = s.replace(/\n/g, "").replace(/\r/g, "");
sStripped = sStripped.replace(reComment, "").replace(re, "");


if(s.length != sStripped.length || s != sStripped )
{
alert(LOCID_ETMPLSUBJECTNOFORMAT);
o.innerHTML = sStripped;
}
}

function handleKey(evt)
{
switch(evt.rawEvent.keyCode)
{

case KEY_ENTER:
evt.stopPropagation();
evt.preventDefault();
break;


case KEY_DEL:
case KEY_DELETE:
case KEY_BACKSPACE:
default:
checkForSubjectDataSlugs();
break;
}
}

function getCurrentRange()
{
var range;

if(window.getSelection)
{
if(window.getSelection().rangeCount > 0)
{
range = window.getSelection().getRangeAt(0);
}
}
else if(document.selection)
{
range = document.selection.createRange();
}

return range;
}

function handlePaste(evt)
{
var sText = _clipboard.GetData();
if(!IsNull(sText) && hasDataSlugs(sText))
{
showSubjectNotification();
}
}

function handleCut(evt)
{
fixSelectionInsideDataSlug(getCurrentRange());
}



function saveEditorSelection()
{
if(window.getSelection)
{
if(window.getSelection().rangeCount > 0)
{
_savedRange = window.getSelection().getRangeAt(0);
}
}
else if(document.selection)
{
_savedRange = document.selection.createRange();
}
}

function findParentByCondition(node, conditionDelegate)
{
for(var candidate=node; !IsNull(candidate); candidate=candidate.parentNode)
{
if(conditionDelegate(candidate))
{
return candidate;
}
}

return null;
}

function isAncestorOf(node, parentNode)
{
return !IsNull(findParentByCondition(node, function(candidate){return candidate == parentNode;}));
}

function fixSelectionInsideDataSlug(range)
{
if(IsNull(range) || range.collapsed || !window.getSelection)
{
return;
}

var startContainer = range.startContainer;
var startSlug = findParentByCondition(startContainer, IsDataSlug)
if(!IsNull(startSlug))
{




if (startContainer.nodeType == 3 && range.startOffset < startContainer.nodeValue.length - 2)
range.setStartBefore(startSlug);
}

var endContainer = range.endContainer;
var endSlug = findParentByCondition(endContainer, IsDataSlug)
if(!IsNull(endSlug))
{




if (endContainer.nodeType == 3 && range.endOffset > 1)
range.setEndAfter(endSlug);
}

var s = window.getSelection();
if (s.rangeCount > 0)
s.removeAllRanges();
s.addRange(range);
}

function crmExecuteCommand(command, commandValue)
{
var templateEditor = $get('TemplateEditor');

if(window.getSelection)
{
var s = window.getSelection();
if(s.rangeCount > 0)
{
if(!isAncestorOf(s.getRangeAt(0).startContainer, templateEditor))
{
return true;
}
}
}


var isFocused = !IsNull(document.activeElement) && document.activeElement==templateEditor;

if(!isFocused)
{
templateEditor.focus();


if (_savedRange != null)
{
if (window.getSelection)
{
var s = window.getSelection();
if (s.rangeCount > 0)
s.removeAllRanges();
s.addRange(_savedRange);
}
else
if (document.createRange)
{
window.getSelection().addRange(_savedRange);
}
else
if (document.selection)
{
_savedRange.select();
}
}
}

fixSelectionInsideDataSlug(_savedRange);


if(!IsNull(_savedRange) && navigator.appName != 'Microsoft Internet Explorer')
{

switch(command)
{
case "cut":
_clipboard.SetData(_savedRange.extractContents());
_savedRange.collapse(true);
return true;
break;
case "copy":
_clipboard.SetData(_savedRange.cloneContents());
return true;
break;
case "paste":
var fragment = _clipboard.GetData();
if(!IsNull(fragment))
{
_savedRange.deleteContents();
var insertedFragment = fragment.cloneNode(true);


var slugNodes = new Array();
for(var j = 0, len = !IsNull(insertedFragment.childNodes)? insertedFragment.childNodes.length : 0; j < len; j++ )
{
var current=insertedFragment.childNodes[j];
if(IsDataSlug(current))
{
slugNodes.push(current);
}
else
{
if(!IsNull(current.getElementsByTagName))
{
var arrElements = current.getElementsByTagName("span");
for( var i = 0; !IsNull(arrElements) && i < arrElements.length; i++ )
{
var o = allChildren[i];
if (IsDataSlug(o))
{
slugNodes.push(o);
}
}
}
}
}

_savedRange.insertNode(insertedFragment);
_savedRange.collapse(true);


for(var index in slugNodes)
{
var o = slugNodes[index];
InitDataSlugElement(o, o.id, o.getAttribute('dataValue'));
}
}

return true;
break;

case "insertUnorderedList":
_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
return true;
break;

case "insertOrderedList":
_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);
return true;
break;

case "indent":
case "outdent":

return false;
default:
}
}

_htmlBarComponent.executeCommandAndHandleAlignmentIssue(window.document, command, false, commandValue);

return true;
}


function onKeyUp(domEvent)
{
var key = Mscrm.Utilities.getDomEventKeyCode(domEvent);
if(key === 46 || key === Sys.UI.Key.backspace || key ===127)
{
if(IsDataSlug(domEvent.target))
{
_activeSlug = domEvent.target;
DeleteDataField();
}
}
}

function onKeyDown(eventData)
{



var elem = getCaretsParentNode(eventData),
isDelKey = false;

switch(Mscrm.Utilities.getDomEventKeyCode(eventData))
{
case 46:
case 127:
case Sys.UI.Key.backspace:
if(IsDataSlug(elem))
{
_activeSlug = elem
DeleteDataField();
}
isDelKey = true;
break;
case 9:
case 38:
case 40:
return;
case 37:
moveCursor(elem,true,eventData);
return;
case 39:
moveCursor(elem,false,eventData);
return;
default:
moveCursor(elem,false,eventData);
break
}

if(IsDataSlug(elem))
{
eventData.stopPropagation();
eventData.preventDefault()
}
}


function getCaretsParentNode(eventData) {
var node = null;
if (Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
if (document.selection.type.toUpperCase() != "CONTROL")
node = document.selection.createRange().parentElement();
else
node = document.selection.createRange().commonParentElement();
else
if (!IsNull(window.getSelection()))
try {
node = window.getSelection().getRangeAt(0).commonAncestorContainer;
if (((node.nodeType == 3 && !IsDataSlug(node.parentNode)) && !IsDataSlug(node)) && !IsNull(eventData))
node = getElementAtCursor(node, eventData);
else
if (node.nodeType !== 1)
node = node.parentNode
}
catch (e) {
node = null
}
return node
}



function getElementAtCursor(node, eventData) {
var prev = node.previousSibling,
next = node.nextSibling,
position = window.getSelection().getRangeAt(0).startOffset,
length = window.getSelection().getRangeAt(0).commonAncestorContainer.length;
switch (Mscrm.Utilities.getDomEventKeyCode(eventData)) {
case 46:
case 127:
if (!IsNull(next))
if (next.nodeType === 3 && !XUI.Html.GetText(next).length) {
next.parentNode.removeChild(next);
next = node.nextSibling
}
if (!IsNull(next) && !IsNull(next.className))
if (position === length && IsDataSlug(next))
return next;
break;
case Sys.UI.Key.backspace:
if (!IsNull(prev))
if (prev.nodeType === 3 && !XUI.Html.GetText(prev).length) {
prev.parentNode.removeChild(prev);
prev = node.previousSibling
}
if (!IsNull(prev) && !IsNull(prev.className))
if (!position && IsDataSlug(prev))
return prev;
break;
default:
node = node.parentNode;
break
}
if(!IsNull(node) && IsDataSlug(node.parentNode))
{
return node.parentNode;
}
return node
}




function setCaret(text,isLeft, eventData)
{
var keyCode = Mscrm.Utilities.getDomEventKeyCode(eventData);
var isArrowKey = (keyCode===37 || keyCode===39) ? true : false ;
var range = null;
if(Mscrm.Utilities.get_ieBrowserVersion() > 0 && Mscrm.Utilities.get_ieBrowserVersion() < 9)
range = document.selection.createRange();
else
if(!IsNull(window.getSelection()))
range = window.getSelection();
if(!IsNull(range))
if(!IsNull(text) && text.nodeType === 3)
{
!IsNull(text.parentNode) &&
text.parentNode.focus();
var offset = isArrowKey ? 0 : isLeft ? 0 : 1;


if(!text.nodeValue.match(new RegExp("^[\\s"+escape(ThinSpace).replace(/%/,"\\")+"]+")))
{
text.nodeValue = isLeft ? text.nodeValue + " " : " " + text.nodeValue;;
}
range.collapse(text, isLeft ? text.nodeValue.length - offset : offset)
}
}



function moveCursor(slug, isLeft , eventData) {
var isSlug = false;
while(!IsNull(slug)){
if(IsDataSlug(slug))
{
isSlug = true;
break;
}
slug = slug.parentNode;
}

if (isSlug) {
var prev = slug.previousSibling,
next = slug.nextSibling,
textNode = null;
if (isLeft) {
if (IsNull(prev) || prev.nodeType !== 3) {

textNode = window.document.createTextNode(ThinSpace);
slug.parentNode.insertBefore(textNode, slug)
}
else
if (prev.nodeType === 3)
textNode = prev
}
else
if (IsNull(next)) {
textNode = window.document.createTextNode(ThinSpace);
slug.parentNode.appendChild(textNode)
}
else
if (next.nodeType !== 3 || (next.nodeType === 3 && !next.nodeValue.length)) {
textNode = window.document.createTextNode(ThinSpace);
slug.parentNode.insertBefore(textNode, next)
}
else
textNode = next;
setCaret(textNode, isLeft, eventData)
}
}





<%= RefreshParentGridScript %>
</script>
</head>
<body>
<pre id="preObjectsXml" style="display:none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(EntitiesXml) %></pre>
<div class="ms-crm-Form-Layout">
<frm:HardcodedForm id="crmForm" runat="server">
<span style="display:none"><sdk:LookupControl id="ownerid" runat="server"/></span>
<sdk:HiddenInputControl id="templatetypecode" runat="server"/>
<sdk:HiddenInputControl id="html" runat="server"/>
<sdk:HiddenInputControl id="subjecthtml" runat="server"/>
<div id="TemplateEditorHtml" style="display:none;"></div>
<div style="top: 0px; position: absolute; width:100%; bottom:0px;">
<div style="top: 0px; position: absolute; width:100%; height:98px">
<mnu:AppFormMenuBar id="crmMenuBar" HasNavigation="false" runat="server"/>
</div>
<div style="top: 98px; bottom: 24px; position: absolute; width: 100%;">
<div class="ms-crm-TabBar-Cell" style="padding-top:10px;margin-left:10px;margin-right:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="position: absolute; top: 31px; bottom: 0px; width: 100%;">

<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="top:0px;bottom:0px;left:10px;right:10px;height:auto;width:auto" >
<div id="contentWrapper" style="position:absolute;top:10px;left:10px;right:10px;bottom:10px;min-width:550px">
<table id="templatePropertiesTable" width="100%" cellspacing="4" cellpadding="0" style="table-layout: fixed;">
<col width="80" /><col /><col width="10" /><col width="80" /><col />
<tr>
<td class="ms-crm-Field-Required" id="type_c"><loc:Text  ResourceId="Web.Tools.FormEditor.Dialogs.addfields.aspx_269" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td id="TemplateType"><%= _templateTypeHtml %></td>
<td></td>
<td id="languagecode_c"><label for="languagecode"><loc:MetadataText EntityType="template" AttributeName="languagecode" runat="server"/></label></td>
<td><sdk:LanguagePicker id="languagecode" runat="server" /></td>
</tr>
<tr>
<td class="ms-crm-Field-Required" id="title_c"><label for="title"><loc:Text ResourceId="Web.Tools.SubjectEditor.Dialogs.Edit.aspx_77" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td colspan="4"><sdk:TextBoxControl id="title" runat="server" /></td>
</tr>
<tr>
<td valign="top"><label for="description"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_289" runat="server"/></label></td>
<td colspan="4"><sdk:TextAreaControl id="description" runat="server" Height="70px" /></td>
</tr>
<tr>
<td colspan="5">
<cnt:AppNotifications id="notifications" runat="server" AutoRegister="true" />
</td>
</tr>
<tr>
<td class="ms-crm-Field-Required" id="subject_c"><loc:Text ResourceId="Web.CS.cases.closecase.aspx_40" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></td>
<td colspan="4"><nobr><div id="SubjectEditor" class="editSubject" applyformat=false contenteditable="<%=(crmForm.Disabled || crmForm.ReadOnly) ? "false" : "true"%>" style="background-color:<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color"))%>" onselectstart="new Sys.UI.DomEvent(event).stopPropagation();return true;" onfocus="HandleFocus(new Sys.UI.DomEvent(event))" onblur="stripFormatting(new Sys.UI.DomEvent(event)); checkForSubjectDataSlugs();" onkeyup="handleKey(new Sys.UI.DomEvent(event))" onkeypress="handleKey(new Sys.UI.DomEvent(event))" onpaste="handlePaste(new Sys.UI.DomEvent(event))"><%= _subjectHtml %></div></nobr></td>
</tr>
</table>



<div style="padding-right:4px">
<%
if(!(crmForm.Disabled || crmForm.ReadOnly))
{
%>						<div id="htmlBarWrapper" style="max-height:26px">
<cnt:AppHtmlBarControl id="crmHtmlBar" type="TemplateEditor" runat="server"/>
</div>
<%
}
%>

<div id="TemplateEditor" applyformat="true" class="editPage" contenteditable="<%=(crmForm.Disabled || crmForm.ReadOnly) ? "false" : "true"%>" onfocus="HandleFocus(new Sys.UI.DomEvent(event))" onselectstart="new Sys.UI.DomEvent(event).stopPropagation();return true;"  onblur="saveEditorSelection();"><%= _presentationHtml %></div>

</div>

<div id="tab1">
<table cellspacing="0" cellpadding="0" class="ms-crm-InlineTabHeader ms-crm-InlineTabBorder" id="attachmentId_header">

<tr>
<td class="ms-crm-InlineTabHeaderText" name="attachmentId" tabindex="1281"><loc:Text ResourceId="Web.Attachments.SectionHeader" runat="server"/>
</td>
</tr>
</table>
</div>
<div id="templateAttachments" style="padding-bottom:10px">
<div style="height:26px">
<mnu:AppGridMenuBar id="crmMenuBarAttachments" runat="server"/>
</div>
<div id="gridWrapper">
<cnt:AppGrid id="attachmentGrid" runat="server"/>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="ms-crm-FSBContainer ms-crm-Form-StatusBar"></div>
</div>
</frm:HardcodedForm>
</div>
</body>
</html>
