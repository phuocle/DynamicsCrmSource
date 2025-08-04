<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.CustomControlPropertyPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script>
var _xmlDocRels = null;
var sep = '.';
function populateRelFiltersSection(entityTypeCode, attributeId, filterRelationshipName, dependentAttributeName, dependentAttributeType, allowFilterOff) {
try {
var relName = null,
dependentAttrName = null,
dependentAttrType = null;

relName = filterRelationshipName;
dependentAttrName = dependentAttributeName;
dependentAttrType = dependentAttributeType;

CreateCurRelFilters(entityTypeCode, attributeId);
dependentAttrName != null && dependentAttrName.length > 0 &&
setSelectedValue($get("selCurRels"), GetRelKey(dependentAttrName, dependentAttrType, relName, true));
CreateTarRelFilters();
relName != null && relName.length > 0 &&
setSelectedValue($get("selTarRels"), GetRelKey(dependentAttrName, dependentAttrType, relName, false));
_chkEnableRelFilterControl = document.getElementById('chkEnableRelFilter');
_chkAllowFilterOffControl = document.getElementById('chkAllowFilterOff');
_chkAllowFilterOffControl.checked = allowFilterOff;
_chkEnableRelFilterControl.checked = !isNullOrEmptyString(dependentAttrName) && !IsNull(relName);
ToggleRelFilter()
}
catch (e) {
$get("divViewLookup").style.display = "none"
}
}

function populateDisplaySection(entityTypeCode, attributeId, viewId, viewDivId, viewLabelDivId, viewComboDivId) {
try {


CreateViewFilters(entityTypeCode, attributeId, viewDivId, viewLabelDivId, viewComboDivId);

viewId != null && viewId.length > 0 &&
setSelectedValue($get(viewComboDivId), viewId);
}
catch (e) {
$get("divViewLookup").style.display = "none"
}
}

function populateDisplaySectionForLookupProperty(entityTypeCode, attributeId, viewId, disableQuickFind, disableViewPicker, viewDivId, viewLabelDivId, viewComboDivId, viewSelectionDom, viewListSelectorDom, availableIds) {
try {

var _chkShowQuickFindControl = Mscrm.FormControlInputBehavior.GetBehavior('chkShowQuickFind');
if (IsNull(disableQuickFind))
{
disableQuickFind = true;
}
_chkShowQuickFindControl.set_dataValue(!disableQuickFind);


CreateViewSelector(ToggleViewSelection);


CreateViewFiltersForLookupProperty(entityTypeCode, attributeId, viewDivId, viewLabelDivId, viewComboDivId, viewSelectionDom, viewListSelectorDom);

var viewSelection = $get(viewSelectionDom);

viewSelection.selectedIndex = !IsNull(disableViewPicker) && disableViewPicker ? 0 : 1;

if (viewSelection.selectedIndex && !isNullOrEmptyString(availableIds))
viewSelection.selectedIndex = 2;


ToggleViewSelection();

viewId != null && viewId.length > 0 &&
setSelectedValue($get(viewComboDivId), viewId);

if (viewSelection.selectedIndex)
SetViewListValue(availableIds, $get(viewListSelectorDom));
}
catch (e) {
$get("divViewLookup").style.display = "none"
}
}

function CreateViewFiltersForLookupProperty(entityTypeCode, attributeId, viewDivId, viewLabelDivId, viewComboDivId, viewSelectionDom, viewListSelectorDom) {
if (attributeId != null) {
var command = new RemoteCommand("FormEditorWebService", "GetViewsHtmlOfAttributeEntity");
command.SetParameter("parentEntityCode", parseInt(entityTypeCode));
command.SetParameter("attributeName", attributeId);
}
else {
var command = new RemoteCommand("FormEditorWebService", "GetViewsHtml");
command.SetParameter("entityCode", parseInt(entityTypeCode));
}
var result = command.Execute();
if (result.Success) {
var retVal = result.ReturnValue;
ConstructViewCombo(retVal, viewComboDivId, $get(viewDivId), function () { });
ConstructViewList(retVal, viewListSelectorDom,  $get(viewSelectionDom), $get('ViewsAvailable'), handleViewListChange, $get(viewComboDivId));
Mscrm.FormXmlUtils.setDomAttribute($get(viewListSelectorDom), 'title', LOCID_MULTISELECT_VIEW_TITLE);
$get(viewComboDivId).style.width = "94.5%";
$get(viewSelectionDom).style.width = "94.5%";
$get(viewListSelectorDom).style.width = "95.5%";
Mscrm.FormXmlUtils.setDomAttribute($get(viewComboDivId), "title", XUI.Html.GetText($get(viewLabelDivId)))
}
}

function CreateViewFilters(entityTypeCode, attributeId, viewDivId, viewLabelDivId, viewComboDivId) {
if (attributeId != null) {
var command = new RemoteCommand("FormEditorWebService", "GetViewsHtmlOfAttributeEntity");
command.SetParameter("parentEntityCode", parseInt(entityTypeCode));
command.SetParameter("attributeName", attributeId);
}
else {
var command = new RemoteCommand("FormEditorWebService", "GetViewsHtml");
command.SetParameter("entityCode", parseInt(entityTypeCode));
}
var result = command.Execute();
if (result.Success) {
var retVal = result.ReturnValue;
ConstructViewCombo(retVal, viewComboDivId, $get(viewDivId), function () { });
$get(viewComboDivId).style.width = "94.5%";
Mscrm.FormXmlUtils.setDomAttribute($get(viewComboDivId), "title", XUI.Html.GetText($get(viewLabelDivId)))
}
}

function CreateCurRelFilters(entityTypeCode, attributeId) {
var command = new RemoteCommand("FormEditorWebService", "GetRelatedViewsFilters");
command.SetParameter("currentEntityCode", parseInt(entityTypeCode));
command.SetParameter("attributeName", attributeId);
result = command.Execute();

if (result.Success) {
_xmlDocRels = XUI.Xml.LoadXml(result.ReturnValue);
var parRelNodes = XUI.Xml.SelectNodes(_xmlDocRels.documentElement, "RelationInfo", null);


var SelCurRel = new Select();
SelCurRel.ID = "selCurRels";

var optGrpParRel = new OptionGroup("", true, true, false);
optGrpParRel.Sorted = true;
optGrpParRel.Ascend = true;

for (var i = 0; i < parRelNodes.length; i++) {
optGrpParRel.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(parRelNodes[i], "DisplayName", null)), XUI.Xml.GetText(XUI.Xml.SelectSingleNode(parRelNodes[i], "RelationKey", null)));
}

SelCurRel.AddOptionGroup(optGrpParRel);
SelCurRel.AddToControl($get('tdParRels'));
$get('selCurRels').onchange = CreateTarRelFilters;
$get('selCurRels').style.width = "96.5%";
Mscrm.FormXmlUtils.setDomAttribute($get('selCurRels'), 'title', XUI.Html.GetText($get('chkEnableRelFilterLabel')));
}
}

function getViewsSelected(selViewList)
{
for(var views = "",
isAllViewsSelected = true,
i = 0; i < selViewList.options.length; i++)
if(selViewList.options[i].selected)
views += selViewList.options[i].value + ",";
else
isAllViewsSelected = false;
views = views.substring(0,views.length - 1);
if(isAllViewsSelected)
views = "";
return views
}

function CreateTarRelFilters() {
var SelTarRel = new Select();
SelTarRel.ID = "selTarRels";

var tarRelNodes = XUI.Xml.SelectNodes(_xmlDocRels.documentElement, "RelationInfo[RelationKey='" + $get('selCurRels').value + "']/RelationInfoCollection/RelationInfo", null);

var optGrpLkupRel = new OptionGroup("", true, true, false);
optGrpLkupRel.Sorted = true;
optGrpLkupRel.Ascend = true;

for (var i = 0; i < tarRelNodes.length; i++) {
optGrpLkupRel.AddOption(XUI.Xml.GetText(XUI.Xml.SelectSingleNode(tarRelNodes[i], "DisplayName", null)), XUI.Xml.GetText(XUI.Xml.SelectSingleNode(tarRelNodes[i], "RelationKey", null)));
}

SelTarRel.AddOptionGroup(optGrpLkupRel);
SelTarRel.AddToControl($get('tdLkupRels'));
$get('selTarRels').style.width = "96.5%";
Mscrm.FormXmlUtils.setDomAttribute($get('selTarRels'), 'title', XUI.Html.GetText($get('selTraRelsLabelId')));
}

function ToggleRelFilter() {
_chkEnableRelFilterControl = document.getElementById('chkEnableRelFilter');
var chkEnableRelFilterDataValue = _chkEnableRelFilterControl.checked;
Mscrm.FormControlInputBehavior.GetBehavior("selCurRels").set_disabled(!chkEnableRelFilterDataValue);
Mscrm.FormControlInputBehavior.GetBehavior("selTarRels").set_disabled(!chkEnableRelFilterDataValue);
_chkAllowFilterOffControl = document.getElementById('chkAllowFilterOff');
_chkAllowFilterOffControl.disabled = !chkEnableRelFilterDataValue;
}

function setSelectedValue(control, value) {
for (var i = 0; i < control.options.length; i++) {
var val = control.options[i].value;
if (val === value) {
control.options[i].selected = true;
break;
}
}
}

function GetRelKey(depAttr, depAttrTyp, relName, isCurPl) {


var curNode = XUI.Xml.SelectSingleNode(_xmlDocRels.documentElement, "RelationInfo[RelationKey='" + relName + "']", null);
if (curNode != null) {
return isCurPl ? relName : (depAttr + sep + depAttrTyp);
}
else {
return isCurPl ? (depAttr + sep + depAttrTyp) : relName;
}
}
</script>
<script lang="javascript" type="text/javascript">
window.onload = function () {
Mscrm.CustomControls.PropertyDialogManager.get_instance().initiate();
}
</script>
</head>
<body>
<div id="tabCustomControls" class="ms-crm-Tab ms-crm-TabContainer customcontrolproperty-tabcustomcontrols" rtl="<%=rtlValue%>">
<div id="propertyControlDiv">
<div>
<div overridedefaultfocus="True" class="customcontrolproperty-headerdiv">
<span class="customcontrolproperty-btncross">
<a href="#" class="ms-crm-RefreshDialog-FirstTopButton customcontrol-CrossButtonAnchorTag" id="btnCross" title="<loc:Text ResourceId='Button_Label_Cancel' runat='server'/>" tabindex="2">
<img src="/_imgs/CloseDialog.png?ver=1915502822" alt="" style="height: 16px; width: 16px;" onclick="javascript:closeWindow();">
</a>
</span>
<br />
<div class="ms-crm-RefreshDialog-Header-Title ms-crm-TextAutoEllipsis" id="DlgHdTitle" style="width: 85%;">
<label id="lblHeader"></label>
</div>
</div>
<div>
<div id="divoptions" class="customcontrolproperty-divoptions">
<div id="divStaticProperty" style="padding-bottom: 15px">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnStaticProperty" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="rdStaticProperty" for="rdbtnStaticProperty" style="font-size: 14px;">
<b>
<loc:Text ResourceId="CustomControls_Configuration_BindStaticValue" runat="server" />
</b>
</label>
</span>
</div>
<div class="customcontrolproperty-standardspace" style="<%= (rtlValue == "true" ? "padding-right: 30px": "padding-left: 30px") %>">
<div style="display: inline-block; vertical-align: top;">
<select id="bindStaticTypeOption" name="eventTypeCombo" class="ms-crm-SelectBox customcontrolproperty-setselectwidth" style="height: 21px">
</select>
</div>
<div style="display: inline-block; vertical-align: top;">
<input id="txtStaticValue" name="txtValue" class="customcontrolproperty-setselectwidth" maxlength="160">
<textarea id="txtAreaStaticValue" name="txtAreaValue" class="customcontrolproperty-setselectwidth" maxlength="100" style="display: none"></textarea>
</div>
<div id="divBoundPropertyValidation" style="display: none;"></div>
<div style="padding-top: 10px">
<img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error" id="StaticValue_warn">
<div id="customControlPropertyErrorDiv" style="<%= (rtlValue == "true" ? "position: absolute; padding-right: 6px;": "position: absolute; padding-left: 6px;") %>"></div>
</div>
</div>
</div>
<div id="divBoundProperty" style="display: block;">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnEntityProperty" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="rdEntityProperty" for="rdbtnEntityProperty" style="font-size: 14px;">
<b>
<loc:Text ResourceId="CustomControls_Configuration_BindValueOnField" runat="server" />
</b>
</label>
</span>
</div>
<div class="customcontrolproperty-standardspace" style="<%= (rtlValue == "true" ? "padding-right: 30px": "padding-left: 30px") %>">
<div style="display: inline-block">
<select id="bindEntityOption" name="eventTypeCombo" class="ms-crm-SelectBox customcontrolproperty-setboundselectwidth">

<option id="emptyOption"></option>
</select>
</div>
</div>
</div>
<div id="divBoundPropertyValidation" style="display: none;">
</div>
<div id="divViewPicker" style="display: none;">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnViewPicker" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="lblViewPicker" for="rdbtnViewPicker" style="font-size: 14px;">
<b><loc:Text ResourceId="CustomControls_Configuration_ViewPicker" runat="server" /></b>
</label>
</span>
</div>
<div class="customcontrolproperty-standardspace">
<table id="tblViewPicker" cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; padding-left: 25px;">
<col width="15%" />
<col width="85%" />
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_Configuration_Entity" runat="server" />
</label>
</td>
<td id="viewPickerEntity">
<select id="ccDataSourceCombo" style="width: 94%;" class="ms-crm-SelectBox"></select></td>
</tr>
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_ViewStart" runat="server" />
</label>
</td>
<td id="viewPickerDefaultView"></td>
</tr>
</table>
</div>
</div>
<div id="divViewLookup" style="display: none;">
<div id="divViewLookupSelect" style="display: none;" class="customcontrolproperty-standardspace">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="100%"><col>
<tr>
<td colspan="1" id="selectLookupInstruction"><loc:Text ResourceId="CustomControls_SelectLookupFieldInstructions" runat="server"/></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="25px">
<col width="65px"><col>
<tr>
<td colspan="2" id="entityViewLabelId"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.Views" runat="server"/></td>
<td id="entityViews"></td>
</tr>
<tr>
<td colspan="2" id="entityViewFieldLabelId"><loc:Text ResourceId="CustomControls_AvailableColumns" runat="server"/></td>
<td id="entityViewFields"><div>
<select id="entityViewFieldCombo" name="eventTypeCombo" style="width: 94.5%">

<option id ="entityViewFieldComboEmptyOption"></option>
</select>
</div>
</td>
</tr>
</table>
</div>
<div id="divViewLookupConfigure" />
<div class="customcontrolproperty-standardspace">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="100%"><col>
<tr>
<td colspan="1" id="configureInstruction"><loc:Text ResourceId="CustomControls_ConfigureLookupInstructions" runat="server"/></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="25px">
<col width="65px">
<col>
<tr>
<td><ui:CheckBox id="chkShowQuickFind" runat="server"/></td>
<td colspan="2"><label id="chkShowQuickFindLabel" for="chkShowQuickFind"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_ShowQuickFind_label" runat="server"/></label></td>
</tr>
<tr>
<td colspan="2" id="defaultViewLabelId"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.DefaultView" runat="server"/></td>
<td id="DefaultView"></td>
</tr>
<tr>
<td colspan="2"><label id="chkShowViewPickerLabel"><loc:Text ResourceId="Web.DashboardEditor.ViewSelectorLabel" runat="server"/></label></td>
<td id="tdViewSelector"></td>
</tr>
<tr>
<td></td>
<td colspan="2" id="ViewsAvailable"></td>
</tr>
</table>
</div>
<div class="customcontrolproperty-standardspace">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px">
<col width="65px">
<col>
<tr>
<td>
<ui:CheckBox id="chkEnableRelFilter" runat="server" />
</td>
<td colspan="2">
<label id="chkEnableRelFilterLabel" for="chkEnableRelFilter">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_EnableRelFilter_label" runat="server" />
</label>
</td>
</tr>
<tr>
<td></td>
<td colspan="2">
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px">
<col>
<tr>
<td colspan="2" id="tdParRels"></td>
</tr>
<tr>
<td colspan="2" id="selTraRelsLabelId">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.Fields.aspx.RelatedRecords.FilterLabel" runat="server" />
</td>
</tr>
<tr>
<td colspan="2" id="tdLkupRels"></td>
</tr>
<tr>
<td>
<ui:CheckBox id="chkAllowFilterOff" runat="server" />
</td>
<td>
<label id="chkAllowFilterOffLabel" for="chkAllowFilterOff">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field.aspx_chkAllowFilterOff_label" runat="server" />
</label>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</div>
</div>

<div id="divCardFormPicker" style="display: none;">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnCardFormPicker" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="lblCardFormPicker" for="rdbtnCardFormPicker" style="font-size: 14px;">
<b><loc:Text ResourceId="CustomControls_Configuration_CardFormPicker" runat="server" /></b>
</label>
</span>
</div>
<div class="customcontrolproperty-standardspace">
<table id="tblCardFormPicker" cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; padding-left: 25px;">
<col width="15%" />
<col width="85%" />
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_Configuration_Entity" runat="server" />
</label>
</td>
<td id="cardFormPickerEntity">
<select id="ccDataSourceComboForCardForm" style="width: 94%;" class="ms-crm-SelectBox"></select></td>
</tr>
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_Configuration_CardFormPicker" runat="server" />
</label>
</td>
<td id="cardFormPickerDefaultView">
<select id="ccCardFormComboId" style="width: 94%;" class="ms-crm-SelectBox"></select>
</td>
</tr>
</table>
</div>
</div>

<div id="divMainFormPicker" style="display: none;">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnMainFormPicker" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="lblMainFormPicker" for="rdbtnMainFormPicker" style="font-size: 14px;">
<b><loc:Text ResourceId="CustomControls_Configuration_MainFormPicker" runat="server" /></b>
</label>
</span>
</div>
<div class="customcontrolproperty-standardspace">
<table id="tblMainFormPicker" cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; padding-left: 25px;">
<col width="15%" />
<col width="85%" />
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_Configuration_Entity" runat="server" />
</label>
</td>
<td id="mainFormPickerEntity">
<select id="ccDataSourceComboForMainForm" style="width: 94%;" class="ms-crm-SelectBox"></select></td>
</tr>
<tr>
<td>
<label>
<loc:Text ResourceId="CustomControls_Configuration_MainFormPicker" runat="server" />
</label>
</td>
<td id="mainFormPickerDefaultView">
<select id="ccMainFormComboId" style="width: 94%;" class="ms-crm-SelectBox"></select>
</td>
</tr>
</table>
</div>
</div>
</div>
<div id="divOptionSet" style="display: none; margin-top: -5px;">
<div class="customcontrolproperty-standardspace">
<span style="vertical-align: middle">
<input id="rdbtnStaticOptions" type="radio" name="radioprop" class="radio" style="width: 13px; height: 13px">
</span>
<span class="customcontrolproperty-label">
<label id="lblStaticOptions" for="rdbtnStaticOptions" style="font-size: 14px;">
<b><loc:Text ResourceId="CustomControl_StaticOptions_Label" runat="server" /></b>
</label>
</span>
</div>
<select id="bindSelectedOption" name="eventTypeCombo" class="ms-crm-SelectBox" style="width: 402px; height: 21px">
</select>
</div>
<div id="DlgHdOptionDesc" class="ms-crm-RefreshDialog-Header-Desc" style="display: none; margin-top: 20px; margin-bottom: 10px; height: 50px; overflow-y: auto; word-wrap: break-word">
<label id="lblHeaderOptionDescription"></label>
</div>
<div id="DlgHdDesc" class="ms-crm-RefreshDialog-Header-Desc customcontrolproperty-dlgheaderdesc">
<label id="lblHeaderDescription"></label>
</div>
</div>
<div id="customControlPropertyErrorDiv" rtl="<%=rtlValue%>" class="customcontrolproperty-divoptions-errordiv"></div>
</div>
</div>
</div>
<div>
<div id="customControlPropertyInfoDIV" class="customcontrolproperty-informationdiv" rtl="<%=rtlValue%>"></div>
</div>
</div>
<div class="customcontrol-dialogfooter" rtl="<%=rtlValue%>">
<div id="btnsubmit" class="customcontrolproperty-buttondiv">
<button id="butBegin" onkeydown="" type="button" class="ms-crm-RefreshDialog-Button">
<loc:Text ResourceId="Button_Label_OK" runat="server" />
</button>
<button id="butReset" onkeydown="" type="button" class="ms-crm-RefreshDialog-Button">
<loc:Text ResourceId="Button_Label_Reset" runat="server" />
</button>
<button id="btnDelete" onkeydown="" type="button" class="ms-crm-RefreshDialog-Button" style="display: none">
<loc:Text ResourceId="Button_Label_Delete" runat="server" />
</button>
</div>
</div>
</body>
</html>
