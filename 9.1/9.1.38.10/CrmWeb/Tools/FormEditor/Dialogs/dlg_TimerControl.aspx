<!DOCTYPE html >

<%@ Page Language="c#" Inherits=" Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.TimerControl" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
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

var _oFormXml;
var _oFieldsXml;
var _oField;
var _timerCtrl;
var _objectCode;

var _allEntities;
var _allEntitiesObjectCode;
var _allEntitiesData;
var _allEntityHTML;

var _secCols = 1;
var _sTabName = null;
var _sSectionName = null;
var _labelDirty = false;
var _sEditorType = 'formEditor';
var oArgs;
var _txtLabel = null;
var _txtDesc = null;
var _successConditionName;
var _successConditionValue = null;
var _failureConditionName = null;
var _failureConditionValue = null;
var _warningConditionName = null;
var _warningConditionValue = null;
var _cancelConditionName = null;
var _cancelConditionValue = null;
var _pauseConditionName = null;
var _pauseConditionValue = null;
var _failureTimeField = null;
var _timerCtrldId = null;
var _mode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mode) %> ;

Sys.Application.add_load(OnTimerCtrlWindowLoad);

function OnTimerCtrlWindowLoad() {
oArgs = getDialogArguments();
_oField = oArgs.Field;
_oFormXml = _oField.FormXml;
_oFieldXml = oArgs.FieldsXml;
_allEntities = oArgs.AllEntityData;
_secCols = _oField.ColSpan;
_sSectionName = _oField.SectionName;
_sTabName = _oField.TabName;
_objectCode = parseInt(oArgs.ObjectTypeCode, 10);
_sEditorType = oArgs.EditorType;

_successConditionName = _oField.SuccessConditionName;
_successConditionValue = _oField.SuccessConditionValue;
_failureConditionName = _oField.FailureConditionName;
_failureConditionValue = _oField.FailureConditionValue;
_warningConditionName = _oField.WarningConditionName;
_warningConditionValue = _oField.WarningConditionValue;
_cancelConditionName = _oField.CancelConditionName;
_cancelConditionValue = _oField.CancelConditionValue;
_pauseConditionName = _oField.PauseConditionName;
_pauseConditionValue = _oField.PauseConditionValue;
_failureTimeField = _oField.FailureTimeField;

var oLabels = _oField.Labels;
_timerCtrldId = _oField.Id;

_txtLabel = $get('txtDisplayLabel');
_txtDesc = $get('txtDisplayName');

setPickListValues(_successConditionName, _successConditionValue, 'selSuccessCondition', 'selSuccessConditionValues');

setPickListValues(_warningConditionName, _warningConditionValue, 'selWarningCondition', 'selWarningConditionValues');

setPickListValues(_cancelConditionName, _cancelConditionValue, 'selCancelCondition', 'selCancelConditionValues');

setPickListValues(_failureConditionName, _failureConditionValue, 'selFailureCondition', 'selFailureConditionValues');

setPickListValues(_pauseConditionName, _pauseConditionValue, 'selPauseCondition', 'selPauseConditionValues');

setPickListValues(_failureTimeField, null, 'selFailureTimeField', null);

_txtDesc.value = _timerCtrldId;


if (!IsNull(oLabels) && !IsNull(oLabels.length) && oLabels.length > 0) {
for (var i = 0; i < oLabels.length; i++) {
if (!IsNull(oLabels[i]) && !IsNull(oLabels[i].LanguageCode) && !IsNull(USER_LANGUAGE_CODE) && oLabels[i].LanguageCode == USER_LANGUAGE_CODE && !IsNull(oLabels[i].Description)) {
_txtLabel.value = oLabels[i].Description;
}
}
}
_txtDesc.focus();
}

function setPickListValues(conditionName, conditionValue, parentpicklistname, childpicklistname) {
var temp;
temp = conditionName ? conditionName.childNodes : null;
Mscrm.FormControlInputBehavior.GetBehavior(parentpicklistname).set_dataValue((temp && temp.length > 0 && temp[0].nodeValue != null) ? temp[0].nodeValue : null);
onSelectOptionChange(parentpicklistname);
if (childpicklistname != null){
temp = conditionValue ? conditionValue.childNodes : null;
temp && temp[0].nodeValue != null && temp.length > 0 ? selectValue($get(childpicklistname), temp[0].nodeValue) : $get(childpicklistname).selectedIndex = -1;
}

}

function selectValue(combo, ofield) {
for (var i = 0; i < combo.options.length; i++) {
if (combo.options[i].title == ofield) {
combo.options[i].selected = true;
break;
}
}
}

function applychanges() {
if (_txtDesc.value.length == 0) {
alert(LOCID_ENTER_TIMERCONTROL_NAME);
_txtDesc.select();
return;
}
if (_txtLabel.value.length == 0) {
alert(LOCID_ENTER_TIMERCONTROL_LABEL);
_txtLabel.select();
return;
}

if (!IsIdValid(_txtDesc.value) || _txtDesc.value.startsWith("_") || !isNaN(_txtDesc.value.substring(0, 1))) {
alert(LOCID_ALPHANUMERIC_ONLY);
_txtDesc.select();
return;
}

if (_timerCtrldId != _txtDesc.value) {
var oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.timercontrol + "']", null);
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++) {
if (oNodes[i].getAttribute("id") === _txtDesc.value) {
alert(LOCID_TIMERCONTROL_EXISTS);
_txtDesc.select();
return;
}
}
}

var timerCtrlId = _txtDesc.value;

var _sSuccessConditionName, _sSuccessConditionValue, _sWarningConditionName, _sWarningConditionValue;
var _sCancelConditionName, _sCancelConditionValue, _sFailureTimeField, _sFailureConditionName, _sFailureConditionValue, _sPauseConditionName, _sPauseConditionValue;

_sFailureTimeField = Mscrm.FormControlInputBehavior.GetBehavior('selFailureTimeField').get_dataValue();
if ($get('selFailureTimeField').selectedIndex == 0 || _sFailureTimeField == null) {
alert(LOCID_ENTER_FAILURETIMEFIELD);
return false;
}
_sSuccessConditionName = Mscrm.FormControlInputBehavior.GetBehavior('selSuccessCondition').get_dataValue();
if ($get('selSuccessCondition').selectedIndex == 0 || _sSuccessConditionName == null) {
alert(LOCID_ENTER_SUCCESSCONDITION);
return false;
}
_sCancelConditionName = Mscrm.FormControlInputBehavior.GetBehavior('selCancelCondition').get_dataValue();
_sPauseConditionName = Mscrm.FormControlInputBehavior.GetBehavior('selPauseCondition').get_dataValue();
_sWarningConditionName = Mscrm.FormControlInputBehavior.GetBehavior('selWarningCondition').get_dataValue();
_sFailureConditionName = Mscrm.FormControlInputBehavior.GetBehavior('selFailureCondition').get_dataValue();
_sSuccessConditionValue = $get('selSuccessConditionValues').selectedIndex != -1 ? $get('selSuccessConditionValues').options[$get('selSuccessConditionValues').selectedIndex].title : null;
if ($get('selSuccessConditionValues').selectedIndex == -1) {
alert(LOCID_ENTER_SUCCESSVALUE);
return false;
}
_sWarningConditionValue = $get('selWarningConditionValues').selectedIndex != -1 ? $get('selWarningConditionValues').options[$get('selWarningConditionValues').selectedIndex].title : null;
_sCancelConditionValue = $get('selCancelConditionValues').selectedIndex != -1 ? $get('selCancelConditionValues').options[$get('selCancelConditionValues').selectedIndex].title : null;
_sFailureConditionValue = $get('selFailureConditionValues').selectedIndex != -1 ? $get('selFailureConditionValues').options[$get('selFailureConditionValues').selectedIndex].title : null;
_sPauseConditionValue = $get('selPauseConditionValues').selectedIndex != -1 ? $get('selPauseConditionValues').options[$get('selPauseConditionValues').selectedIndex].title : null;

var rowSpan = 2;
var bVisible = true;
var timerCtrl = new TimerControlObj(
timerCtrlId,
_sSuccessConditionName,
_sSuccessConditionValue,
_sFailureConditionName,
_sFailureConditionValue,
_sWarningConditionName,
_sWarningConditionValue,
_sCancelConditionName,
_sCancelConditionValue,
_sPauseConditionName,
_sPauseConditionValue,
_sFailureTimeField,
rowSpan,
_secCols,
_sTabName,
_sSectionName,
new Array(new LocalizedObj(_txtLabel.value, oArgs.LangCode)),
bVisible,
_oFormXml,
bVisible
);
Mscrm.Utilities.setReturnValue(timerCtrl);
closeWindow();
}

function onSelectOptionChange(e) {

var onchangeSelect;
var parenttd;
switch (e) {
case 'selSuccessCondition':
onchangeSelect = "selSuccessConditionValues";
parenttd = "tdselSuccessConditionValues";
break;
case 'selWarningCondition':
onchangeSelect = "selWarningConditionValues";
parenttd = "tdselWarningConditionValues";
break;
case 'selCancelCondition':
onchangeSelect = "selCancelConditionValues";
parenttd = "tdselCancelConditionValues";
break;
case 'selFailureCondition':
onchangeSelect = "selFailureConditionValues";
parenttd = "tdselFailureConditionValues";
break;
case 'selPauseCondition':
onchangeSelect = "selPauseConditionValues";
parenttd = "tdselPauseConditionValues";
break;
default:
return;
}
var getSelectedControl = Mscrm.FormControlInputBehavior.GetBehavior(e);
var getSelectedValue = getSelectedControl.get_dataValue();
var SelectRecs = new Select();
SelectRecs.ID = onchangeSelect;
var lineItems = getOptionValue(getSelectedValue);
if (lineItems != null) {
SelectRecs.AddOptionHtml(lineItems)
SelectRecs.AddToControl($get(parenttd));
}
}

function getOptionValue(e) {
try {
var command = new RemoteCommand("FormEditorWebService", "RetrieveAttributeList");
command.SetParameter("fieldName", e);
command.SetParameter("entityObjCode", _objectCode);
var result = command.Execute();
if (result.Success) {
var retVal = result.ReturnValue;
return retVal;
}
} catch (e) {
return null;
}
}

</script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
<table width="100%">
<col width="100" />
<col />
<tr>
<td>
<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize ms-crm-absolutePosition">
<div id="divInformation" class="page manageAttribute_div_Info">
<div class="ms-crm-TabBar-Cell" id="tabBarContainer">
<cnt:AppTabBar id="crmTabBar" runat="server" />
</div>
<div id="tabsContent">
<div id="tabGeneral" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">
<col />
<tr>
<td style="vertical-align: top">
<fieldset>
<legend>
<loc:text resourceid="Timer_Control_Dlg_Section_Name" runat="server" /></legend>
<table width="100%" cellspacing="5" cellpadding="0" style="table-layout: fixed;">
<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" colspan="2">
<loc:text resourceid="Timer_Control_Dlg_SectionName_Description" runat="server" />
</td>
</tr>
<tr>
<td id="tdDisplayNameLabel" class="ms-crm-Field-Required" style="width: 150px">
<label for="txtDisplayName">
<loc:text resourceid="Timer_Control_Dlg_DisplayName" runat="server" /><img src="/_imgs/frm_required.gif"
alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td>
<ui:textbox id="txtDisplayName" runat="server" />
</td>
</tr>
<tr>
<td id="tdDisplayLabelLabel" class="ms-crm-Field-Required" style="width: 150px">
<label for="txtDisplayLabel">
<loc:text resourceid="Timer_Control_Dlg_Label" runat="server" /><img src="/_imgs/frm_required.gif"
alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td>
<ui:textbox id="txtDisplayLabel" runat="server" />
</td>
</tr>
</table>
</fieldset>
</td>
</tr>
<col />
<col />
<tr>
<td style="vertical-align: top; padding-top: 20px">
<fieldset>
<legend>
<loc:text resourceid="Timer_Control_Dlg_Section_DataSource" runat="server" /></legend>
<table width="100%" cellspacing="5" cellpadding="0" style="table-layout: fixed;">
<tr>

<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom" colspan="3">
<loc:text resourceid="Timer_Control_Dlg_DataSource_Description" runat="server" />
</td>
</tr>
<tr>
<td id="tdFailureTimeFieldLabel" class="ms-crm-Field-Required" style="width: 20%">
<label for="selFailureTimeField">
<loc:text resourceid="Timer_Control_Dlg_FailureTimeField" runat="server" /><img src="/_imgs/frm_required.gif"
alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td colspan="2">
<ui:select id="selFailureTimeField" runat="server" />
</td>
</tr>
<tr>
<td id="tdSuccessConditionLabel" class="ms-crm-Field-Required">
<label for="selSuccessCondition">
<loc:text resourceid="Timer_Control_Dlg_SuccessCondition" runat="server" /><img src="/_imgs/frm_required.gif"
alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td style="width: 40%;">
<ui:select id="selSuccessCondition" runat="server" onchange="onSelectOptionChange(this.id)" />
</td>
<td style="width: 40%;" id="tdselSuccessConditionValues">
<ui:select id="selSuccessConditionValues" runat="server" />
</td>
</tr>
<tr>
<tr>
<td id="tdFailureConditionLabel" class="ms-crm-Field-Normal">
<label for="selFailureCondition">
<loc:text resourceid="Timer_Control_Dlg_FailureCondition" runat="server" />
</label>
</td>
<td style="width: 40%;">
<ui:select id="selFailureCondition" runat="server" onchange="onSelectOptionChange(this.id)" />
</td>
<td style="width: 40%;" id="tdselFailureConditionValues">
<ui:select id="selFailureConditionValues" runat="server" />
</td>
</tr>
<tr>
<td id="tdWarningConditionLabel" class="ms-crm-Field-Normal">
<label for="selWarningCondition">
<loc:text resourceid="Timer_Control_Dlg_WarningCondition" runat="server" />
</label>
</td>
<td style="width: 40%;">
<ui:select id="selWarningCondition" runat="server" onchange="onSelectOptionChange(this.id)" />
</td>
<td style="width: 40%;" id="tdselWarningConditionValues">
<ui:select id="selWarningConditionValues" runat="server" />
</td>
</tr>
<tr>
<td id="tdCancelConditionLabel" class="ms-crm-Field-Normal">
<label for="selCancelCondition">
<loc:text resourceid="Timer_Control_Dlg_CancelCondition" runat="server" />
</label>
</td>
<td style="width: 40%;">
<ui:select id="selCancelCondition" runat="server" onchange="onSelectOptionChange(this.id)" />
</td>
<td style="width: 40%;" id="tdselCancelConditionValues">
<ui:select id="selCancelConditionValues" runat="server" />
</td>
</tr>
<tr>
<td id="tdPauseConditionLabel" class="ms-crm-Field-Normal">
<label for="selPauseCondition">
<loc:text resourceid="Timer_Control_Dlg_PauseCondition" runat="server" />
</label>
</td>
<td style="width: 40%;">
<ui:select id="selPauseCondition" runat="server" onchange="onSelectOptionChange(this.id)" />
</td>
<td style="width: 40%;" id="tdselPauseConditionValues">
<ui:select id="selPauseConditionValues" runat="server" />
</td>
</tr>
<row />
<row />
<row />
<row />
<row />
<row />
</table>
</fieldset>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
</td>
</tr>
</table>
</frm:dialogform>
</body>
</html>
