<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Sfa.AssignArgumentPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Web.Sfa" Assembly="Microsoft.Crm.Application.Pages" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html xmlns:crm>
<head>
<title>
<loc:text resourceid="Title_AssignValue" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />
<script language="Javascript" type="text/javascript">
var saveAndClose = false;
var initialXml = "";
var lookupControls;
var _currentLookupId = "";
var _divSuffix = "_div";
Sys.Application.add_load(function() {
PageOnLoad();
attachWindowOnBeforeUnload(Window_OnBeforeUnload);

window.focus();

$get("crmForm").style.height = "100%";
var crmFormCtrl = $find("crmForm");
crmFormCtrl.detachCloseAlert();
crmFormCtrl.add_onSave(save);
crmFormCtrl.set_bypassValidation(true);
});

function Window_OnBeforeUnload(oEvent) {
oEvent = oEvent.rawEvent;

if (!saveAndClose && GetValueForTag('readonlymode=') != "true") {
var currentXml = GenerateXml()
if (initialXml != currentXml) {
oEvent.returnValue = (LOCID_FORMS_SAVE_CONFIRM_TITLE);
return (LOCID_FORMS_SAVE_CONFIRM_TITLE);
}
}
}
function save(sender, args)
{
if (args)
{

args.preventDefault();
}
var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");

if (stepLabel.get_dataValue() == null || IsValueEmpty()) {
alert(LOCID_REQUIRED_FIELD);
return;
}

Mscrm.Utilities.setReturnValue(GenerateXml());
saveAndClose = true;
closeWindow();
}

function IsValueEmpty() {
var selector = Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector");
var selectorValue = selector.get_dataValue();
if (IsNull(selectorValue)) {
return true;
}

var valueType = GetArgumentArgumentType();
switch (valueType) {
case "Integer":
return IsFieldEmpty("argumentValueInteger");
case "Float":
return IsFieldEmpty("argumentValueFloat");
case "Boolean":
return IsFieldEmpty("argumentValueBoolean");
case "Decimal":
return IsFieldEmpty("argumentValueDecimal");
case "Money":
return IsFieldEmpty("argumentValueMoney");
case "DateTime":
return IsFieldEmpty("argumentValueDateTime");
case "Lookup":
return IsLookupFieldEmpty();
case "Picklist":
return IsFieldEmpty("argumentValuePicklist");
default:
return IsFieldEmpty("argumentValueText");
}
}

function IsFieldEmpty(controlId) {
var control = $get(controlId);
var ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);

if (IsDataSlugSpecified(control)) {
return false;
}
else {

var value = IsNull(ajaxControl) ? control.DataValue : ajaxControl.get_dataValue();
return isNullOrEmptyString(value);
}
}

function IsLookupFieldEmpty() {

var currentLookup = $get(_currentLookupId);
if (IsDataSlugSpecified(currentLookup)) {
return false;
}
else {
var lookupitems = Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Items();
return (lookupitems.length == 0);
}
}

function PageOnLoad() {
formulateLookupCollection();
argumentSelector.style.display = "inline";

GenerateAssignArgumentTypeMapping();
AttachAttribute("argumentValueDateTime");
AttachAttribute("argumentValueText");
AttachAttribute("argumentValueInteger");
AttachAttribute("argumentValueFloat");
AttachRadioAttribute("argumentValueBoolean");
AttachAttribute("argumentValueDecimal");
AttachAttribute("argumentValueMoney");
AttachAttribute("argumentValuePicklist");
showValueBox(false);

var slugValue = $get("hidSlugInfo").value;
if ($get("isReplacementRequired").value) {
slugValue = slugValue.replace($get("oldSlugSubstring").value, $get("newSlugSubstring").value);
}
var readOnlyForm = GetValueForTag('readonlymode=');
if (readOnlyForm == 'true') {
disableAllFields();
}
PopulateSlugControls(slugValue);
initialXml = GenerateXml("Initial");
if (readOnlyForm != 'true') {
$get("entityDescription").focus();
}
}

function AttachAttribute(attribute) {
var attrControl = $get(attribute);
$addHandler(attrControl, "focus", OnAttributeFocus);
}

function AttachRadioAttribute(attribute) {
var attrControl = $get(attribute);
var radio = Mscrm.FormControlInputBehavior.GetElementBehavior(attrControl);
Mscrm.CrmDebug.assert(!IsNull(radio), "Can't get RadioGroupBehavior.");
radio.add_focus(CustomAttributeFocusHandler);



if (Mscrm.Utilities.isChrome() || Sys.Browser.agent == Sys.Browser.Safari) {
radio.add_change(CustomAttributeFocusHandler);
}
}


function disableAllFields() {
SetReadOnlyForm(true);
$get("valueDescription").disabled = true;
$get("argumentSelector").disabled = true;
$get("argumentValueText").disabled = true;
$get("argumentValueInteger").disabled = true;
$get("argumentValueFloat").disabled = true;
$get("argumentValueBoolean").disabled = true;
$get("argumentValueDecimal").disabled = true;
$get("argumentValueMoney").disabled = true;
$get("argumentValuePicklist").disabled = true;
$get("entityDescription").disabled = true;
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDateTime").set_disabled(true);
if (GetArgumentArgumentType() == "Lookup") {
Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).setDisabled(true)
}
}

function GenerateXml(sVal) {
var sXml = "";
sXml += "<AssignStep>";
sXml += GenerateStepLabelXml();

var aSelector = $get("argumentSelector");
if (aSelector.length != 0) {
sXml += GenerateArgumentXml(sVal);
}
sXml += "</AssignStep>";
return sXml;
}

function GenerateStepLabelXml() {
var stepLabel = Mscrm.FormControlInputBehavior.GetBehavior("entityDescription");
var sXml = "<steplabel>" + CrmEncodeDecode.CrmXmlEncode(stepLabel.get_dataValue()) + "</steplabel>";
return sXml;
}

function GenerateArgumentXml(sVal) {
var sXml = "";
sXml += "<Argument>";
sXml += GenerateArgumentNameXml();
sXml += GenerateArgumentDataTypeXml();
sXml += GenerateValueXml(sVal);
sXml += "</Argument>";
return sXml;
}

function GenerateArgumentNameXml() {
var sXml = "";
var aSelector = $get("argumentSelector");
sXml += "<ArgumentName>" + (CrmEncodeDecode.CrmXmlEncode(aSelector[aSelector.selectedIndex].text)) + "</ArgumentName>";
return sXml;
}

function GenerateArgumentDataTypeXml() {
var sXml = "";
sXml += "<ArgumentDataType>" + CrmEncodeDecode.CrmXmlEncode(GetArgumentArgumentType()) + "</ArgumentDataType>";
return sXml;
}

function GenerateValueXml(sVal) {
var sXml = "<ArgumentValue>";
var value = GetArgumentArgumentType();
switch (value) {
case "Lookup":
sXml += GetLookupValueControlXml(sVal);
break;
case "DateTime":
sXml += GetValueControlXml("argumentValueDateTime", sVal);
break;
case "Integer":
sXml += GetValueControlXml("argumentValueInteger", sVal);
break;
case "Float":
sXml += GetValueControlXml("argumentValueFloat", sVal);
break;
case "Boolean":
sXml += GetValueControlXml("argumentValueBoolean", sVal);
break;
case "Decimal":
sXml += GetValueControlXml("argumentValueDecimal", sVal);
break;
case "Money":
sXml += GetValueControlXml("argumentValueMoney", sVal);
break;
case "Picklist":
sXml += GetValueControlXml("argumentValuePicklist", sVal);
break;
default:
sXml += GetValueControlXml("argumentValueText", sVal);
break;
}
sXml += "</ArgumentValue>";
return sXml;
}

function GetValueControlXml(controlId, sVal) {
control = $get(controlId);
ajaxControl = Mscrm.FormControlInputBehavior.GetBehavior(controlId);

if (IsDataSlugSpecified(control)) {
return GetModifiedSlug(control, GetArgumentArgumentType(), controlId, sVal);
}
else {

var value = IsNull(ajaxControl) ? control.DataValue : ajaxControl.get_dataValue();
return (value == null) ? "" : (CrmEncodeDecode.CrmXmlEncode(IsDateControl(control) ? FormatDateTime(value) : value));
}
}

function GetArgumentArgumentType() {
var selector = Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector");
var value = selector.get_dataValue();
if (IsNull(value)) {
value = "";
}
var typeInfo = value.split(';');
var type = typeInfo[1];
if (IsNull(type)) {

return "String";
}
else if (type == "EntityNameReference") {
return "Lookup";
}
return type;
}

function GetLookupValueControlXml(sVal) {
var currentLookup = $get(_currentLookupId);
if (IsDataSlugSpecified(currentLookup)) {
return GetModifiedSlug(currentLookup, GetArgumentArgumentType(), _currentLookupId, sVal);
}
else if (!IsLookupFieldEmpty()) {


var items = Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Items();

var type = items[0].type;
var oid = items[0].id;
return CrmEncodeDecode.CrmXmlEncode(oid + ";" + type);
}
else {
return "";
}
}

function GetModifiedSlug(control, currentVariableType, controlId, sVal) {
var slugXml = "";
if (sVal != "Initial") {
var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control));
slugXml = slugBehavior.get_slugValue();
}
else {
slugXml = "<" + controlId + ">" + CrmEncodeDecode.CrmXmlEncode(GetDefaultSlugValue(controlId)) + "</" + controlId + ">";
}
slugXml = replaceSlugXmlBindingsForLookup(slugXml, currentVariableType);
var replacmentXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\"" + GetCurrentKeySlugValue() + "\"/>");
var oldXml;
switch (currentVariableType) {
case "Lookup":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueLookup\"/>");
break;
case "DateTime":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueDateTime\"/>");
break;
case "Integer":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueInteger\"/>");
break;
case "Float":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueFloat\"/>");
break;
case "Boolean":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueBoolean\"/>");
break;
case "Decimal":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueDecimal\"/>");
break;
case "Money":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueMoney\"/>");
break;
case "Picklist":
var oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValuePicklist\"/>");
break;
default:
oldXml = CrmEncodeDecode.CrmXmlEncode("<slug type=\"dynamic\" value=\".argumentValueText\"/>");
break;
}
return slugXml.replace(oldXml, replacmentXml);
}

function GetCurrentKeySlugValue() {
return argumentSelector[("argumentSlug" + argumentSelector.selectedIndex)];
}

function GetCurrentArgumentType() {
var selector = Mscrm.FormControlInputBehavior.GetBehavior("argumentSelector");
var value = selector.get_dataValue();
if (value == null) {

return "String";
}
return value;;
}

function showValueBox(clearData) {
if (clearData) {
clearAllValueBoxes();
}
var value = GetArgumentArgumentType();
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueText").setDisplay(false);
labelValueText.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueInteger").setDisplay(false);
labelValueInteger.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueFloat").setDisplay(false);
labelValueFloat.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueBoolean").setDisplay(false);
labelValueBoolean.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDecimal").setDisplay(false);
labelValueDecimal.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueMoney").setDisplay(false);
$get("argumentValueMoney_table").style.display = "none";
labelValueMoney.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDateTime").setDisplay(false);
labelValueDateTime.style.display = "none";
Mscrm.FormControlInputBehavior.GetBehavior("argumentValuePicklist").setDisplay(false);
labelValuePicklist.style.display = "none";
labelValueLookup.style.display = argumentValueLookup_d.style.display = "none";

showHideLookupControls();

switch (value) {
case "Lookup":
labelValueLookup.style.display = argumentValueLookup_d.style.display = "inline";

showHideLookupControls();
break;
case "DateTime":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDateTime").setDisplay(true);
labelValueDateTime.style.display = "inline";
break;
case "Integer":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueInteger").setDisplay(true);
labelValueInteger.style.display = "inline";
break;
case "Float":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueFloat").setDisplay(true);
labelValueFloat.style.display = "inline";
break;
case "Boolean":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueBoolean").setDisplay(true);
labelValueBoolean.style.display = "inline";
break;
case "Decimal":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDecimal").setDisplay(true);
labelValueDecimal.style.display = "inline";
break;
case "Money":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueMoney").setDisplay(true);
$get("argumentValueMoney_table").style.display = "block";
labelValueMoney.style.display = "inline";
break;
case "Picklist":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValuePicklist").setDisplay(true);
labelValuePicklist.style.display = "inline";
break;
default:
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueText").setDisplay(true);
labelValueText.style.display = "inline";
break;
}



if (GetValueForTag('readonlymode=') != "true") {
try {
switch (value) {
case "DateTime":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDateTime").setFocus();
break;
case "Integer":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueInteger").setFocus();
break;
case "Float":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueFloat").setFocus();
break;
case "Boolean":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueBoolean").setFocus();
break;
case "Decimal":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueDecimal").setFocus();
break;
case "Money":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueMoney").setFocus();
break;
case "Picklist":
Mscrm.FormControlInputBehavior.GetBehavior("argumentValuePicklist").setFocus();
break;
default:
Mscrm.FormControlInputBehavior.GetBehavior("argumentValueText").setFocus();
break;
}
}
catch (e) { }
}
}

function clearAllValueBoxes() {
var vDateTime = $get("argumentValueDateTime");
var vText = $get("argumentValueText");
var vInteger = $get("argumentValueInteger");
var vFloat = $get("argumentValueFloat");
var vBoolean = $get("argumentValueBoolean");
var vDecimal = $get("argumentValueDecimal");
var vMoney = $get("argumentValueMoney");
var vPicklist = $get("argumentValuePicklist");
clearControl(vDateTime);
clearControl(vText);
clearControl(vInteger);
clearControl(vFloat);
clearControl(vBoolean);
clearControl(vDecimal);
clearControl(vMoney);
clearControl(vPicklist);
clearLookupControl();
}

function clearControl(control) {
if (IsDataSlugSpecified(control)) {
var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(control));
slugBehavior.DeleteDataSlug();
}

if (control.DataValue) {
control.DataValue = null;
}
else {
Mscrm.FormControlInputBehavior.GetBehavior(control.id).set_dataValue(null);
}
}

function formulateLookupCollection() {

var str = LOCID_LOOKUPS_CONTROL;
lookupControls = str.split(";");
}

function showHideLookupControls() {

var aSelector = $get("argumentSelector");
for (var i = 0; i < lookupControls.length - 1; i++) {
if ((aSelector[aSelector.selectedIndex].text + "Lookup" == lookupControls[i])) {
_currentLookupId = lookupControls[i];
var lookUpDivElement = $get("argumentValueLookup_d");
lookUpDivElement.appendChild($get(lookupControls[i] + _divSuffix));
setLookupAttributeMappings();
break;
}
}
}

function clearLookupControl() {


if (!isNullOrEmptyString(_currentLookupId)) {
var vLookup = $get(_currentLookupId);
if (IsDataSlugSpecified(vLookup)) {
var slugBehavior = Mscrm.FormUtility.getSlugBehavior(GetValueControlWithSlug(vLookup));
slugBehavior.DeleteDataSlug();
}
else {


Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Clear(false);
}
}

var lookUpDivElement = $get("argumentValueLookup_d");
if (lookUpDivElement.childNodes.length != 0) {
$get("hiddenDiv").appendChild(lookUpDivElement.firstChild);
}
argumentValueLookup_d.innerHTML = "";
}

function setLookupAttributeMappings() {


AddAttributeTypeMapping(_currentLookupId, "Lookup");
AttachAttribute(_currentLookupId);
if (GetValueForTag('readonlymode=') != "true") {
try {
Mscrm.FormControlInputBehavior.GetBehavior(_currentLookupId).Focus();
} catch (e) { }
}

}

function replaceSlugXmlBindingsForLookup(slugXml, currentVariableType) {

if (currentVariableType == "Lookup") {
slugXml = slugXml.replace("<" + _currentLookupId + ">", "<argumentValueLookup>");
slugXml = slugXml.replace("</" + _currentLookupId + ">", "</argumentValueLookup>");
slugXml = slugXml.replace(CrmEncodeDecode.CrmXmlEncode("<" + _currentLookupId + "DefaultValueControl"), CrmEncodeDecode.CrmXmlEncode("<argumentValueLookupDefaultValueControl"));
slugXml = slugXml.replace(CrmEncodeDecode.CrmXmlEncode("</" + _currentLookupId + "DefaultValueControl>"), CrmEncodeDecode.CrmXmlEncode("</argumentValueLookupDefaultValueControl>"));

}
return slugXml;
}
</script>

</head>
<body scroll="no">
<form id="resultRender" action="" method="post" target="resultFrame">
<input type="hidden" name="variableXml" value="">
</form>
<table cellspacing="0" width="100%" cellpadding="0">
<tr>
<td style="padding-bottom: 5px" colspan="2">
<mnu:appgenericmenubar id="menuBar" runat="server" />
</td>
</tr>
</table>
<table class="outerTable" cellspacing="0" cellpadding="5">
<tr>
<td colspan="2">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<h4 class="ms-crm-Form">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.GeneralSection" runat="server" />
</h4>
</td>
</tr>
</table>
</td>
</tr>
<tr id="valueDescription">
<td colspan="2">
<table width="100%" cellspacing="0" cellpadding="0">
<col width="100px">
<col>
<tr class="param">
<td id="Td2" class="ms-crm-Field-Required">
<label for="entityDescription">
<loc:text resourceid="Web.SFA.Workflow.PromptResponseDialog.StatementLabel" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td>
<ui:textbox id="entityDescription" tabindex="10" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr id="rowDesign">
<td valign="top">
<table width="99%" cellpadding="0" cellspacing="5">
<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<h4 class="ms-crm-Form">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.ValueDetailSection" runat="server" />
</h4>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
<col width="80px">
<col>
<tr class="param">
<td id="Td7" valign="top">
<label for="argumentSelector" id="labelArgSelector">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Name" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
</td>
<td>
<ui:select id="argumentSelector" tabindex="30" onchange="showValueBox(true);" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="5">
<col width="80px">
<col>
<tr class="param">
<td id="Td3" valign="top">
<label for="argumentValueLookup_d" id="labelValueLookup" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueDateTime" id="labelValueDateTime" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueText" id="labelValueText" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueInteger" id="labelValueInteger" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueFloat" id="labelValueFloat" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueBoolean" id="labelValueBoolean" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueDecimal" id="labelValueDecimal" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValueMoney" id="labelValueMoney" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
<label for="argumentValuePicklist" id="labelValuePicklist" style="display:none">
<loc:text resourceid="Web.SFA.Workflow.AssignValueDialog.Value" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
</td>
<td>
<div id="argumentValueLookup_d" tabindex="50" runat="server" />
<ui:DateTimeUI id="argumentValueDateTime" TabIndex="50" runat="server" />
<ui:TextBox id="argumentValueText" tabindex="50" runat="server" />
<ui:Number id="argumentValueInteger" tabindex="50" runat="server" />
<ui:Number id="argumentValueFloat" TabIndex="50" runat="server" />
<ui:Radio id="argumentValueBoolean" TabIndex="50" runat="server" />
<ui:Number id="argumentValueDecimal" TabIndex="50" runat="server" />
<ui:Money id="argumentValueMoney" TabIndex="50" runat="server" />
<ui:Number id="argumentValuePicklist" tabindex="50" runat="server" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
<td valign="top">
<table width="100%" height="480px" cellpadding="0" cellspacing="5">
<tr>
<td>
<div id="areaForm" style="height: 99%; width: 90%;">
<frm:argumentform id="crmForm" runat="server">
</frm:argumentform>
</div>
</td>
</tr>
</table>
</td>
</tr>
</table>
<input type="hidden" id="hidSlugInfo" value="<%=SlugInfo%>" />
<input type="hidden" id="oldSlugSubstring" value="<%=OldSlugSubstring%>" />
<input type="hidden" id="newSlugSubstring" value="<%=NewSlugSubstring%>" />
<input type="hidden" id="isReplacementRequired" value="<%=IsReplacementRequired%>" />
<div id="hiddenDiv" style="display: none" runat="server">
</div>
</body>
</html>
