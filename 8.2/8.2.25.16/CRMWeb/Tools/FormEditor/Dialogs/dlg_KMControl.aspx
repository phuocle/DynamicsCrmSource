<!DOCTYPE html >

<%@ Page Language="c#" Inherits=" Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.KMControl" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<style type="text/css">
.ms-crm-IE7-td-Texarea-Container, .ms-crm-IE7-Texarea
{
position: static;
}
</style>

<script type="text/javascript" language="javascript">
var _oArgs;
var _oFieldsXml;
var _oFormXml;
var _oField;
var _secCols = 1;
var _sTabName = null;
var _sSectionName = null;

var _txtLabel = null;
var _txtDesc = null;
var _txtRowsPerPage = null;
var _chkEnableAutomaticSuggestion = null;
var _chkEnableRating = null;
var _isReferencePanelSearchWidget = false;
var _webResourcesControl = null;

Sys.Application.add_load(OnWindowLoad);

function OnWindowLoad() {
var rowCountControl = $get("RowCount");
if (rowCountControl != null) {
$addHandler(rowCountControl, "keyup", handleRowCountChange);
}
_oArgs = getDialogArguments();
_oFieldXml = _oArgs.FieldsXml;
_oField = _oArgs.Field;
_oFormXml = _oField.FormXml;
_secCols = _oArgs.SecCols;
_sSectionName = _oField.SectionName;
_sTabName = _oField.TabName;
var oLabels = _oField.Labels;


_isReferencePanelSearchWidget = _oField.IsReferencePanelSearchWidget;

_txtLabel = $get('txtControlLabel');
_txtDesc = $get('txtControlName');
_txtRowsPerPage = $get('RowsPerPage');
_chkEnableAutomaticSuggestion = $get('chkEnableAutomaticSuggestions');
_chkEnableRating = $get('chkEnableRating');
$get('chkAllowChangeFilters').checked = true;

$get("autosuggestion").selectedIndex = 0;
$get("showRating").selectedIndex = 0;
$get("autosuggestionSource").selectedIndex = 0;
$get("searchFilter").selectedIndex = 0;
$get("primaryCustomer").selectedIndex = -1;
$get("defaultLanguage").selectedIndex = 0;
$get('txtControlName').focus();


if (_isReferencePanelSearchWidget) {
$get('divRefPanDetails').style.display = "inline";
_webResourcesControl = Mscrm.FormControlInputBehavior.GetBehavior('iconResources');
}
else {
$get('divRefPanDetails').style.display = "none";
}

filterColumnLayoutOptions();
if (!IsNull(_oField.Id) && !IsNull(_oField.Id.length) && _oField.Id.length > 0) {
$get('txtControlName').value = _oField.Id;
}

if (!IsNull(oLabels) && !IsNull(oLabels.length) && oLabels.length > 0) {
for (var i = 0; i < oLabels.length; i++) {
if (!IsNull(oLabels[i]) && !IsNull(oLabels[i].LanguageCode) && !IsNull(USER_LANGUAGE_CODE) && oLabels[i].LanguageCode == USER_LANGUAGE_CODE && !IsNull(oLabels[i].Description)) {
$get('txtControlLabel').value = oLabels[i].Description;
}
}
}

setSelectValue('autosuggestion', _oField.SearchForAutoSuggestionsUsing);
setSelectValue('showRating', _oField.ShowRatingUsing);
setSelectValue('autosuggestionSource', _oField.AutoSuggestionSource);
setSelectValue('searchFilter', _oField.FilterResults);
setSelectValue('primaryCustomer', _oField.SelectPrimaryCustomer);
setSelectValue('defaultLanguage', _oField.SelectDefaultLanguage);

if (_oField.NumberOfResults != null && _oField.NumberOfResults > 0) {
Mscrm.FormControlInputBehavior.GetBehavior('RowsPerPage').set_dataValue(_oField.NumberOfResults);
}

if (_oField.RowSpan != null && _oField.RowSpan > 0) {
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(_oField.RowSpan);
}
setCheckBoxValue('chkAllowChangeFilters', _oField.AllowChangingFiltersOnUI);
setCheckBoxValue('chkEnableAutomaticSuggestions', _oField.EnableAutoSuggestions);
setCheckBoxValue('chkEnableRating', _oField.EnableRating);
setCheckBoxValue('chkShowLanguageFilter', _oField.ShowLanguageFilter);
setCheckBoxValue('chkShowDepartmentFilter', _oField.ShowDepartmentFilter);
CreateActionsSelector(handleActionSelectionClick);


setSelectValue('actionSelection', _oField.ShowContextualActions);

enableDisableKnowledgeSuggestion();
enableDisableRating();


populateActionList();
if (!IsNull(_oField.Id) && !isNullOrEmptyString(_oField.ActionList)) {
SetViewListValue(XUI.Xml.GetText(_oField.ActionList), $get('ActionListSelector'));
}
setGridColSpan(_oArgs.SecCols);
$get('chkDisplayLabel').checked = _oField.ShowLabel;
}
function setCheckBoxValue(id, val)
{

if (val == null) {
return;
}
var firstChild = XUI.Xml.DomUtils.GetFirstChild(val);
if (firstChild == null) {
return;
}

$get(id).checked = (XUI.Xml.GetText(firstChild) == "true");
}

function setSelectValue(id,val)
{
if (val == null) {
return;
}

var firstChild = XUI.Xml.DomUtils.GetFirstChild(val);
if (firstChild == null) {
return;
}

selectValue($get(id), XUI.Xml.GetText(firstChild));
}

function selectValue(combo, ofield) {
for (var i = 0; i < combo.options.length; i++) {
if (combo.options[i].value == ofield || combo.options[i].title == ofield) {
combo.options[i].selected = true;
break;
}
}
}

function populateActionList() {

var retVal = '<select id="ActionListSelector" name="ActionListSelector" class="ms-crm-SelectBox&#32;">'
+'<option value="0" title="' + (LOCID_ACTIONS_ASSOCIATE) +'">'+ CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_ASSOCIATE) + '</option>'
+'<option value="1" title="' + (LOCID_ACTIONS_DISASSOCIATE) +'">'+ CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_DISASSOCIATE) + '</option>'
+'<option value="2" title="' + (LOCID_ACTIONS_COPY) +'">'+ CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_COPY) + '</option>'
+ '<option value="3" title="'+ (LOCID_ACTIONS_EMAIL) + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_EMAIL) + '</option>'
+ '<option value="5" title="'+ (LOCID_ACTIONS_EMAILCONTENT) + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_EMAILCONTENT) + '</option>'
+ '<option value="4" title="'+ (LOCID_ACTIONS_POPOUT) + '">' + CrmEncodeDecode.CrmHtmlEncode(LOCID_ACTIONS_POPOUT) + '</option>'
+'</select>';


ConstructActionList(retVal, 'ActionListSelector', $get('actionSelection'), $get('ActionsAvailable'), handleViewListChange);
}

function ConstructActionList(htmlViewPicker, viewListId, actionSelection, tdViewList, onChangeHandler) {


htmlViewPicker = htmlViewPicker.replace('<select', '<select MULTIPLE SIZE=4 ');

tdViewList.innerHTML = htmlViewPicker;
crmCreate(Mscrm.FormInputControl.SelectInputBehavior, {}, null, null, $get(viewListId));

var selViewList = $get(viewListId);

if (actionSelection.selectedIndex)
$get(viewListId).disabled = false;
else
$get(viewListId).disabled = true;

selViewList.onchange = null;
$addHandler(selViewList, "change", onChangeHandler);
selViewList.ViewCombo = selViewList;
actionSelection.ViewList = selViewList;
}

function CreateActionsSelector(onchangeHandler) {
var ActionSelector = new Select();
ActionSelector.ID = "actionSelection";

var optGrpViewSel = new OptionGroup("", false, true, false);
optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_ALL, "ShowAll");
optGrpViewSel.AddOption(LOCID_VIEWS_SHOW_SELECTED, "ShowSelectedActions");

ActionSelector.AddOptionGroup(optGrpViewSel);
ActionSelector.AddToControl($get('tdActionsSelector'));
$get('actionSelection').onchange = onchangeHandler;
}

function handleActionSelectionClick() {
ToggleActionSelection($get('actionSelection'));
}

function ToggleActionSelection() {
var actionSelection = $get('actionSelection');
var ActionListSelector = $get('ActionListSelector');
switch (actionSelection.selectedIndex) {
case 0:
actionSelection.ViewList.disabled = true;
SelectAllViews(actionSelection.ViewList);
$removeHandler(ActionListSelector, "change", handleViewListChange);
$addHandler(ActionListSelector, "change", EnableAllViews);
break;
case 1:
actionSelection.ViewList.disabled = false;
SelectNoViews(actionSelection.ViewList);
SelectViewListOption(actionSelection.ViewList, actionSelection.ViewList.ViewCombo.value);
$removeHandler(ActionListSelector, "change", EnableAllViews);
$addHandler(ActionListSelector, "change", handleViewListChange);
break;
}
}


function filterColumnLayoutOptions() {
for (var i = _secCols + 1; i <= 4; i++) {
$get('rdColumnSpan' + i).disabled = true;
}
}

function getGridColSpan() {
var colSpan = 1;
if ($get('rdColumnSpan2').checked)
colSpan = 2;
if ($get('rdColumnSpan3').checked)
colSpan = 3;
if ($get('rdColumnSpan4').checked)
colSpan = 4;

return colSpan;
}

function setGridColSpan(colSpan) {
if (colSpan == 1) {
$get('rdColumnSpan1').checked = true;
}
if (colSpan == 2) {
$get('rdColumnSpan2').checked = true;
}
if (colSpan == 3) {
$get('rdColumnSpan3').checked = true;
}
if (colSpan == 4) {
$get('rdColumnSpan4').checked = true;
}
}

function enableDisableKnowledgeSuggestion() {


$get('autosuggestion').disabled = !_chkEnableAutomaticSuggestion.checked || $get('autosuggestionSource').options[$get('autosuggestionSource').selectedIndex].value == "1";
$get('autosuggestionSource').disabled = !_chkEnableAutomaticSuggestion.checked;
}

function enableDisableRating() {

$get('showRating').disabled = !_chkEnableRating.checked;
}

function handleRowCountChange() {
var btnOk = $get('butBegin');
if (!IsNull(btnOk)) {
btnOk.disabled = false;
if (!IsNull(Mscrm.FormControlInputBehavior.GetBehavior('RowCount'))
&& IsNull(Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue())) {
btnOk.disabled = true;
}
}
}

function applychanges() {

var _sSearchFilter, _sAutomaticSuggestionSearchField, _sAutoSuggestionSource, _sRatingField, _sPrimaryCustomer, actionsSel, actionsSelected, _sDefaultLanguage;
var iconResourceUrl = null;

if (_isReferencePanelSearchWidget) {
if (_webResourcesControl.get_dataValue() == null) {
alert(LOCID_ENTER_ICON);
$get('iconResources').focus();
return;
}

iconResourceUrl = _webResourcesControl.get_dataValue()[0].name;
}

if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(_txtDesc.value)) {
alert(LOCID_ENTER_SEARCHWIDGET_NAME);
_txtDesc.select();
return;
}
if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(_txtLabel.value)) {
alert(LOCID_ENTER_SEARCHWIDGET_LABEL);
_txtLabel.select();
return;
}

if (!IsIdValid(_txtDesc.value) || _txtDesc.value.startsWith("_") || !isNaN(_txtDesc.value.substring(0, 1))) {
alert(LOCID_ALPHANUMERIC_ONLY);
_txtDesc.select();
return;
}

if (_txtRowsPerPage.value.length < 1 || _txtRowsPerPage.value < 1 && _txtRowsPerPage > 20 || isNaN(_txtRowsPerPage.value)) {
alert(LOCID_VALID_ROWSPERPAGE);
_txtRowsPerPage.select();
return;
}

_sDefaultLanguage = $get('defaultLanguage').options[$get('defaultLanguage').selectedIndex];

if (!_sDefaultLanguage) {
alert(LOCID_DEFAULTLANGUAGE_NOTACTIVE);
return;
}

var kmCtrlId = $get('txtControlName').value;
_sSearchFilter = $get('searchFilter').selectedIndex != -1 ? $get('searchFilter').options[$get('searchFilter').selectedIndex].value : null;
_sAutomaticSuggestionSearchField = $get('autosuggestion').selectedIndex != -1 ? $get('autosuggestion').options[$get('autosuggestion').selectedIndex].value : null;
_sRatingField = $get('showRating').selectedIndex != -1 ? $get('showRating').options[$get('showRating').selectedIndex].value : null;
_sAutoSuggestionSource = $get('autosuggestionSource').selectedIndex != -1 ? $get('autosuggestionSource').options[$get('autosuggestionSource').selectedIndex].value : null;
_sPrimaryCustomer = $get('primaryCustomer').selectedIndex != -1 ? $get('primaryCustomer').options[$get('primaryCustomer').selectedIndex].value : null;
_sDefaultLanguage = _sDefaultLanguage.value != 0 ? _sDefaultLanguage.value : Mscrm.Utilities.emptyGuid();
var rowSpan = Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue();
var bVisible = true;

var gridColSpan = getGridColSpan();
if (gridColSpan > _secCols) {
alert(LOCID_FORMED_SUBGRID_COLSPAN);
return;
}

actionsSel = $get('actionSelection').selectedIndex != -1 ? $get('actionSelection').options[$get('actionSelection').selectedIndex].value : null;
actionsSelected = getViewsSelected($get('ActionListSelector'));

var kmCtrl = new SearchWidgetObj(kmCtrlId,
_sSearchFilter,
$get('chkAllowChangeFilters').checked,
$get('chkShowLanguageFilter').checked,
$get('chkShowDepartmentFilter').checked,
$get('chkEnableAutomaticSuggestions').checked,
_sAutomaticSuggestionSearchField,
_sAutoSuggestionSource,
$get('RowsPerPage').value,
actionsSel,
actionsSelected,
_sPrimaryCustomer,
rowSpan,
gridColSpan,
_sTabName,
_sSectionName,
new Array(new LocalizedObj($get('txtControlLabel').value, _oArgs.LangCode)),
$get('chkDisplayLabel').checked,
_oFormXml,
bVisible,
_sDefaultLanguage,
_isReferencePanelSearchWidget,
iconResourceUrl,
$get('chkEnableRating').checked,
_sRatingField);
Mscrm.Utilities.setReturnValue(kmCtrl);
closeWindow();
}

</script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
<div style="width:100%; min-width:390px;">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
</div>

<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab" style="display: inline;">

<div id="divRefPanDetails" style="display: none;">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_348" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_349" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required" id="iconresource_c"><label><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_350" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:LookupControl id="iconResources" DefaultViewId="DCAC5DFC-2EFF-42b3-9A0D-AFF1577533EB" DisableViewPicker="true" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>
</table>
</fieldset>
<br />
</div>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="25%" /><col width="75%" />
<tr>
<td class="ms-crm-Field-Required" id="tdName">
<label for="txtDescription"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Name.TooltipTag' runat='server'/>"><ui:TextBox id="txtControlName" MaxLength="100" runat="server"/></td>
</tr>
<tr>
<td class="ms-crm-Field-Required" id="Td1"><label for="txtLabel">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><input  type="text" id="txtControlLabel" onkeypress="_labelDirty = true;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Label.TooltipTag' runat='server'/>" maxlength="100" class="ms-crm-Text" /></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="chkDisplayLabel" runat="server"/></td>
<td ><label for="chkDisplayLabel" id="displayLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br />

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.FilterSection1" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="50%" /><col width="50%" />
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.FilterSection2" runat="server"/></label></td>
<td id="tdSearchFilter" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Tools.FormEditor.Dialogs.section.Article.ToolTip' runat='server'/>"><ui:select id="searchFilter" runat="server" /></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="20%" /><col width="5%" /><col width="75%" />
<tr>
<td></td>
<td><ui:CheckBox id="chkAllowChangeFilters" runat="server"/></td>
<td ><label for="chkAllowChangeFilters" id="allowChangeFiltersLabel" runat="server"></label></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="50%" /><col width="50%" />
<tr>
<td ><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.DefaultLanguage" runat="server"/></label></td>
<td id="tdDefaultLanguage" title=""><ui:select id="defaultLanguage" runat="server" /></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="20%" /><col width="5%" /><col width="75%" />
<tr>
<td></td>
<td><ui:CheckBox id="chkShowLanguageFilter" runat="server"/></td>
<td ><label for="chkShowLanguageFilter" id="showLanguageFilterLabel" runat="server"></label></td>
</tr>
</table>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed; display: none;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="chkShowDepartmentFilter" runat="server"/></td>
<td ><label for="chkShowDepartmentFilter" id="showDepartmentFilterLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br />
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.AdditionalOptionLegend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%" /><col width="45%" /><col width="50%" />
<tr>
<td><ui:CheckBox id="chkEnableAutomaticSuggestions" onclick="enableDisableKnowledgeSuggestion();" runat="server"/></td>
<td colspan='2'><label for="chkEnableAutomaticSuggestions" id="enableAutomaticSuggestionsLabel" runat="server">
</label></td>
</tr>
<tr>
<td></td>
<td><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.AutoSuggestion1" runat="server"/></label></td>
<td id="tdautosuggestionsource" title=""><ui:select id="autosuggestionSource" runat="server" onchange="enableDisableKnowledgeSuggestion();" /></td>
</tr>
<tr>
<td colspan='2'></td>
<td id="tdautosuggestion" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.AutoSuggestion.TooltipTag' runat='server'/>"><ui:select id="autosuggestion" runat="server" /></td>
</tr>
<tr
<%if (!Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.Feedback, Microsoft.Crm.Application.Security.UserInformation.Current)) { %>
style="display:none"
<% } %>
>
<td><ui:CheckBox id="chkEnableRating" onclick="enableDisableRating();" runat="server"/></td>
<td><label for="chkEnableRating" id="enableRatingLabel" runat="server"></label></td>
<td id="tdrating" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Article.Rating.Field' runat='server'/>"><ui:select id="showRating" runat="server" /></td>
</tr>
<tr>
<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.Customer" runat="server"/></label></td>
<td id="tdPrimaryCustomer" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.PrimaryCustomer.TooltipTag' runat='server'/>"><ui:select id="primaryCustomer" runat="server" /></td>
</tr>
<tr>
<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.Rows" runat="server"/></label></td>
<td><ui:Number id="RowsPerPage" runat="server"/></td>
</tr>
<tr>
<td colspan='2'><label ><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.Article.ActionsFilter" runat="server"/></label></td>
<td id="tdActionsSelector" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Article.ActionsFilter.TooltipTag' runat='server'/>">
</tr>
<tr>
<td colspan='3' id="ActionsAvailable"></td>
</tr>

</table>
</fieldset>
</div>

<div id="tab1" class="ms-crm-Tab">
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col/><col width="85" class="fieldprops_col_3"/>

<tr>
<td colspan="3"><loc:Text ResourceId="FormEditor_Dialogs_ColSpan_Label" runat="server"/></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" class="radio"></td>
<td><label id="rdColumnSpan1Label" for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" class="radio"></td>
<td><label id="rdColumnSpan2Label" for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example" colspan="2">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" class="radio"></td>
<td><label id="rdColumnSpan3Label" for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="3">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
</table></td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan4" type="radio" class="radio"></td>
<td><label id="rdColumnSpan4Label" for="rdColumnSpan4"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_207" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="2">&nbsp;</td>
<td class="example">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="3">&nbsp;</td>
<td class="example">&nbsp;</td>
</tr>
<tr>
<td class="example" colspan="4">&nbsp;</td>
</tr>
</table></td>
</tr>
</table>
</fieldset>

<br>
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.RowLegend" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="105"><col>

<tr>
<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.RowsLegend.Description" runat="server"/></td>
</tr>

<tr>
<td colspan="2"><label for="RowCount"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
<td><ui:Number id="RowCount" runat="server"/></td>
</tr>
</table>
</fieldset>
</div>
</div>
</frm:dialogform>
</body>
</html>
