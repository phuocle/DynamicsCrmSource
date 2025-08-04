<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.Tab" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<script type="text/javascript" language="javascript">

var _oFormXml;
var _oTab;
var _SelectColumns = new Select();
var oArgs;
var _col1Width;
var _col1WidthControl;
var _col2Width;
var _col2WidthControl;
var _col3Width;
var _col3WidthControl;
var _txtName = null;
var _chkVisible = null;
var _lockTab = null;
var _chkExpandByDefault = null;
var _chkDispOption = null;
var _selectedTemplate = "" ;

function OnLoad() {
_col1Width = $get('col1Width');
_col2Width = $get('col2Width');
_col3Width = $get('col3Width');
_txtName = $get('txtName');
_chkVisible = $get('chkVisible');
_lockTab = $get('LockTab');
_chkExpandByDefault = $get('chkExpandByDefault');
_chkDispOption = $get('chkDispOption');

_col1WidthControl = Mscrm.FormControlInputBehavior.GetBehavior('col1Width');
_col2WidthControl = Mscrm.FormControlInputBehavior.GetBehavior('col2Width');
_col3WidthControl = Mscrm.FormControlInputBehavior.GetBehavior('col3Width');

oArgs = getDialogArguments();
_oTab = oArgs.Tab;
_oFormXml = _oTab.FormXml;
Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(_oTab.FormXml));
Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = oArgs.oFieldsXml;
Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = oArgs.oPropertiesXml;

if (oArgs.EditorType !== "formEditor")
{
$get("tabNameRow").style.display = "none";
$get("tabNameDesc").style.display ="none";
}

_lockTab.checked = _oTab.LockTab;
_chkVisible.checked = _oTab.Visible;
_txtName.value = _oTab.TabName;

_chkExpandByDefault.checked = _oTab.ExpandByDefault;
_chkDispOption.checked = _oTab.ShowLabel;
if (FORM_TYPE == "quick" || FORM_TYPE == "quickCreate") {
_chkDispOption.checked = false;
_chkDispOption.disabled = true;
_chkExpandByDefault.checked = true; ;
_chkExpandByDefault.disabled = true;
}

var oLabels = _oTab.Labels;

if (oLabels) {
Mscrm.FormControlInputBehavior.GetBehavior("txtDescription").set_dataValue(oLabels[0].Description);
}

populateTabColumns();
populateColWidthControls();
highlightTemplate();

SetLockTabState();


if (_txtName.value.length > 0)
$addHandler($get('tab2Tab'), "click", loadLibraryControl);
else
$get('tab2Tab').style.display = 'none';
}

function loadLibraryControl()
{
Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(true, Mscrm.FormControlTypes.tab, _oTab.TabId, oArgs.ObjectTypeCode);
}

function onChangeCol1Width() {
if (!isNullOrEmptyString(_selectedTemplate)) {
document.getElementById(_selectedTemplate).setAttribute("class", "example");
}
_selectedTemplate = "";
if(_col3WidthControl.get_disabled())
_col2WidthControl.set_dataValue(100 - _col1WidthControl.get_dataValue());
else {


var remainingWidth = 100 - _col1WidthControl.get_dataValue();
_col2WidthControl.set_dataValue(remainingWidth/2);
_col3WidthControl.set_dataValue(remainingWidth - _col2WidthControl.get_dataValue());
}
}

function onChangeCol2Width() {
if (!isNullOrEmptyString(_selectedTemplate)) {
document.getElementById(_selectedTemplate).setAttribute("class", "example");
}
_selectedTemplate = "";
if(_col3WidthControl.get_disabled())
_col1WidthControl.set_dataValue(100 - _col2WidthControl.get_dataValue());
else {



if (_col1WidthControl.get_dataValue() + _col2WidthControl.get_dataValue() < 100) {
var remainingWidth = 100 - _col1WidthControl.get_dataValue();
_col3WidthControl.set_dataValue(remainingWidth - _col2WidthControl.get_dataValue());
}
else {
var remainingWidth = 100 - _col2WidthControl.get_dataValue();
_col1WidthControl.set_dataValue(remainingWidth/2);
_col3WidthControl.set_dataValue(remainingWidth - remainingWidth/2);
}
}
}

function onChangeCol3Width() {
if (!isNullOrEmptyString(_selectedTemplate)) {
document.getElementById(_selectedTemplate).setAttribute("class", "example");
}
_selectedTemplate = "";
var remainingWidth = 100 - _col3WidthControl.get_dataValue();
_col1WidthControl.set_dataValue(remainingWidth / 2);
_col2WidthControl.set_dataValue(remainingWidth - _col1WidthControl.get_dataValue());
}

function populateColWidthControls() {
_col1WidthControl.set_dataValue(_oTab.ColWidths[0]);
_col2WidthControl.set_dataValue(_oTab.ColWidths[1]);
_col3WidthControl.set_dataValue(_oTab.ColWidths[2]);
}

function populateTabColumns() {
var selValue = 1;
if (_oTab.Columns != null)
selValue = _oTab.Columns;
if (selValue === 1)
$get('rdColumnSpan1').checked = true;
else if (selValue === 2)
$get('rdColumnSpan2').checked = true;
else
$get('rdColumnSpan3').checked = true;

enableDisableColumnControls();

enableDisableColWidthControls();
}

function enableDisableColumnControls() {
if (FORM_TYPE == "quickCreate") {
$get('rdColumnSpan1').disabled = true;
$get('rdColumnSpan2').disabled = true;
$get('rdColumnSpan3').disabled = true;
}
}

function enableDisableColWidthControls() {
if ($get('rdColumnSpan1').checked) {
enableOneColumnWidthControl();
highlightSelectedTemplate(0);
setColWidthDataValue(_templates[0]);
}
else if ($get('rdColumnSpan2').checked) {
enableTwoColumnWidthControl();

highlightSelectedTemplate(1);
setColWidthDataValue(_templates[1]);
}
else {
enableThreeColumnWidthControl();

highlightSelectedTemplate(4);
setColWidthDataValue(_templates[4]);
}
}

function setColWidthDataValue(tabTemplate) {
_col1WidthControl.set_dataValue(tabTemplate.ColWidths[0]);
_col2WidthControl.set_dataValue(tabTemplate.ColWidths[1]);
_col3WidthControl.set_dataValue(tabTemplate.ColWidths[2]);
}

function onColChange() {
enableDisableColWidthControls();
}

function enableOneColumnWidthControl() {
_col1WidthControl.set_disabled(true);
$get('col1WidthLabel').disabled = true;
$get('perCol1').disabled = true;

_col2WidthControl.set_disabled(true);
$get('col2WidthLabel').disabled = true;
$get('perCol2').disabled = true;

_col3WidthControl.set_disabled(true);
$get('col3WidthLabel').disabled = true;
$get('perCol3').disabled = true;
}

function enableTwoColumnWidthControl() {
_col1WidthControl.set_disabled(false);
$get('col1WidthLabel').disabled = false;
$get('perCol1').disabled = false;

_col2WidthControl.set_disabled(false);
$get('col2WidthLabel').disabled = false;
$get('perCol2').disabled = false;

_col3WidthControl.set_disabled(true);
$get('col3WidthLabel').disabled = true;
$get('perCol3').disabled = true;
}

function enableThreeColumnWidthControl() {
_col1WidthControl.set_disabled(false);
$get('col1WidthLabel').disabled = false;
$get('perCol1').disabled = false;

_col2WidthControl.set_disabled(false);
$get('col2WidthLabel').disabled = false;
$get('perCol2').disabled = false;

_col3WidthControl.set_disabled(false);
$get('col3WidthLabel').disabled = false;
$get('perCol3').disabled = false;
}

function applyTemplate(templateNumber) {
var template = _templates[templateNumber];

if (FORM_TYPE == "quickCreate" && template.Columns != 3) {
return;
}

highlightSelectedTemplate(templateNumber);
setColWidthDataValue(template);

switch (template.Columns) {
case 1:
$get('rdColumnSpan1').checked = true;
enableOneColumnWidthControl();
break;
case 2:
$get('rdColumnSpan2').checked = true;
enableTwoColumnWidthControl();
break;
case 3:
default:
$get('rdColumnSpan3').checked = true;
enableThreeColumnWidthControl();
break;
}
}

function highlightSelectedTemplate(templateNumber) {
if(!isNullOrEmptyString(_selectedTemplate)) {
document.getElementById(_selectedTemplate).setAttribute("class","example");
}
_selectedTemplate = "tabTemplate"+templateNumber;
document.getElementById(_selectedTemplate).setAttribute("class","selected");
}

function highlightTemplate() {
var correctTemplate = -1;
for (var i = 0; i < _templates.length; i++) {
document.getElementById("tabTemplate" + i).setAttribute("class", "example");
if((_templates[i].ColWidths[0] == _col1Width.value) && (_templates[i].ColWidths[1] == _col2Width.value))
correctTemplate = i;
}
if(correctTemplate > -1) {
_selectedTemplate = "tabTemplate"+correctTemplate;
document.getElementById(_selectedTemplate).setAttribute("class", "selected");
}
}

function applychanges() {
var oldTabCols = parseInt(_oTab.Columns, 10);
var newTabCols = oldTabCols;
if ($get('rdColumnSpan1').checked)
newTabCols = 1;
else if ($get('rdColumnSpan2').checked)
newTabCols = 2;
else
newTabCols = 3;

if (newTabCols < oldTabCols) {
if (!confirm(LOCID_TAB_COLUMN_DELETED)) {
return;
}
}


if ((parseInt(_col1Width.value) + parseInt(_col2Width.value) + parseInt(_col3Width.value)) != 100) {
if (_oTab.ColWidths[0] != _col1WidthControl.get_dataValue())
onChangeCol1Width();
else if (_oTab.ColWidths[1] != _col2WidthControl.get_dataValue())
onChangeCol2Width();
else if (_oTab.ColWidths[2] != _col3WidthControl.get_dataValue())
onChangeCol3Width();
}

var txtDescriptionControl = Mscrm.FormControlInputBehavior.GetBehavior("txtDescription");
txtDescriptionControl.set_dataValue(TrimSpaces(txtDescriptionControl.get_dataValue()));

if (txtDescriptionControl.get_dataValue() == null || txtDescriptionControl.get_dataValue().length == 0) {
alert(LOCID_ID_EMPTY_TAB_LABEL);
txtDescriptionControl.get_element().select();
return;
}

var txtNameControl = Mscrm.FormControlInputBehavior.GetBehavior("txtName");
if (IsNull(txtNameControl.get_dataValue()) || txtNameControl.get_dataValue().length === 0) {
alert(LOCID_ENTER_TAB_NAME);
txtNameControl.get_element().select();
return;
}

var sTabId = _oTab.TabId;
if (sTabId == null || sTabId.length == 0) {
sTabId = GetGuid();
}

if (!IsTabNameUnique(txtNameControl.get_dataValue(),sTabId, _oFormXml)) {
alert(LOCID_ID_IN_USE);
txtNameControl.get_element().select();
return;
}

Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();
var colWidths = [];
colWidths.push(_col1Width.value);
colWidths.push(_col2Width.value);
colWidths.push(_col3Width.value);

var ret = new TabObj(
sTabId,
new Array(new LocalizedObj(txtDescriptionControl.get_dataValue(), oArgs.LangCode)),
_lockTab.checked, _chkExpandByDefault.checked, newTabCols,
colWidths, _chkDispOption.checked,
Mscrm.FormLibraryAndEventHandlerUtils.formXml, _chkVisible.checked,
txtNameControl.get_dataValue()
);

Mscrm.Utilities.setReturnValue(ret);

closeWindow();
}

function SetLockTabState() {
if (document.getElementById('tblLockTabMessage') != null) {
if (_lockTab.checked) {
$get('tblLockTabMessage').style.display = "inline";
}
else {
$get('tblLockTabMessage').style.display = "none";
}
}
}

function OnDispOptionClick() {
if (!_chkDispOption.checked) {
_chkExpandByDefault.disabled = true;
_chkExpandByDefault.checked = true;
}
else {
_chkExpandByDefault.disabled = false;
}
}

Sys.Application.add_load(OnLoad);
</script>
<style>
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
width:auto;
height:auto;
}
.ms-crm-TabContainer
{
top:30px;
bottom:0px;
left:0px;
right:0px;
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="width:100%;height:100%;position:relative;min-width:330px">
<div class="formEditor-TabBar" style="padding-top:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">

<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="display: inline;">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div id="tabNameDesc" class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30" /><col width="70" />
<tr id="tabNameRow" >
<td class="ms-crm-Field-Required" id="name_c"><label for="txtName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtName" MaxLength="255" runat="server"/></td>
</tr>
<tr>
<td class="ms-crm-Field-Required" id="description_c"><label for="txtDescription"><loc:Text ResourceId="Formeditor_Dialogs_Tab_Label_Caption" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtDescription" MaxLength="255" runat="server"/></td>
</tr>
</table>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="10" /><col width="90" />
<tr>
<td><ui:CheckBox id="chkDispOption" onclick="OnDispOptionClick();" runat="server"/></td>
<td ><label id="showLabelID" for="chkDispOption"  runat="server"></label></td>
</tr>
<tr>
<td><ui:CheckBox id="chkExpandByDefault" runat="server"/></td>
<td ><label for="chkExpandByDefault" ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.tab.aspx.Expand" runat="server"/></label></td>
</tr>
</table>
</fieldset>


<div id="divVisibilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col>

<tr>
<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Tab_Visible_Section_Heading" runat="server"/></td>
</tr>

<tr >
<td><ui:CheckBox id="chkVisible" runat="server"/></td>
<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server"/></label></td>
</tr>

</table>
</fieldset>
</div>

<% if(isDebug) {%>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5"/><col width="95"/>
<tr>
<td><ui:CheckBox id="LockTab" onclick="SetLockTabState();" runat="server"/></td>
<td ><label id="lockTabLabel" for="LockTab"  runat="server"></label></td>
</tr>
</table>


<table id ="tblLockTabMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
<col width="25"><col>
<tr>
<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
<td><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.tab.aspx_236" runat="server"/></td>
</tr>
</table>
<% } else{%>

<br /><input style="display:none" id="LockTab" type="checkbox" class="checkbox"/>
<% } %>


</div>

<div id="tab1" class="ms-crm-Tab ms-crm-TabContainer">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_273" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.tab.aspx.Formatting" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col width="85" class="fieldprops_col_3"/><col width="85" class="fieldprops_col_3"/><col width="85" class="fieldprops_col_3"/>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" onclick="onColChange();" class="radio"></td>
<td><label for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>
</tr>
<tr>

<td></td>
<td><table id="tabTemplate0" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(0);" class="example">
<tr>
<td style="height:25px" class="example active">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" onclick="onColChange();" class="radio"></td>
<td><label for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>
</tr>
<tr>

<td></td>
<td><table id="tabTemplate1" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(1);" class="example">
<tr>
<td style="height:25px" class="example active">&nbsp;</td>
<td style="height:25px" class="example active">&nbsp;</td>
</tr>
</table></td>

<td><table id="tabTemplate2" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(2);" class="example">
<tr>
<td style="height:25px; width:34%" class="example active">&nbsp;</td>
<td style="height:25px" class="example active">&nbsp;</td>
</tr>
</table></td>

<td><table id="tabTemplate3" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(3);" class="example">
<tr>
<td style="height:25px; width:67%" class="example active">&nbsp;</td>
<td style="height:25px" class="example active">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" onclick="onColChange();" class="radio"></td>
<td><label for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server"/></label></td>
</tr>
<tr>

<td></td>
<td><table id="tabTemplate4" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(4);" class="example">
<tr>
<td style="height:25px" class="example active">&nbsp;</td>
<td style="height:25px" class="example active">&nbsp;</td>
<td style="height:25px" class="example active">&nbsp;</td>
</tr>
</table></td>

<td><table id="tabTemplate5" cellpadding="0" cellspacing="4" style="width:75px" onclick="applyTemplate(5);" class="example">
<tr>
<td style="height:25px; width:28%" class="example active">&nbsp;</td>
<td style="height:25px; width:44%" class="example active">&nbsp;</td>
<td style="height:25px; width:28%" class="example active">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
</table>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<tr>
<td colspan="4">
<label id="col1WidthLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.tab.aspx.Col1" runat="server"/>
</td>
</tr>
<td><ui:Number id="col1Width" onchange="onChangeCol1Width();" runat="server"/></td>
<td id="perCol1">%</td>
<tr>
</tr>
</table>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<tr>
<td colspan="4">
<label id="col2WidthLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.tab.aspx.Col2" runat="server"/>
</td>
</tr>
<tr>
<td><ui:Number id="col2Width" onchange="onChangeCol2Width();" runat="server"/></td>
<td id="perCol2">%</td>
</tr>
</table>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<tr>
<td colspan="4">
<label id="col3WidthLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.tab.aspx.Col3" runat="server"/>
</td>
</tr>
<td><ui:Number id="col3Width" onchange="onChangeCol3Width();" runat="server"/></td>
<td id="perCol3">%</td>
<tr>
</tr>
</table>
</fieldset>
</div>

<div id="tab2" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto;">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-picklist.aspx_315" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<tr>
<td >
<cnt:FormLibraryAndEventHandlerControl CollapseFormLibrarySection="true" id="formLibraryControl" runat="server"/>
</td>
</tr>
<tr>
<td style="display:none"><sdk:LookupControl id="libraryLookup" DisableViewPicker="true" DefaultViewId="125A31CE-0F5E-4957-8AA3-7A10C0713886" LookupBrowse="false" LookupStyle="single" runat="server" />
</td>
</tr>
</table>
</fieldset>
</div>

</div>
</div>
</frm:DialogForm>
</body>
</html>
