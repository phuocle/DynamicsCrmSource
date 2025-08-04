<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.CustomControl" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>

<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">
var _mode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mode) %>;
var _iHeight, _iWidth;
var _fieldName = null;
var dialogArgs = getDialogArguments();
var _showLabel;
var _typeCode;
var _showOnMobileClient;
var _label = null;
var _border;
var _labelDirty = false;
var scrollControl = null;
var _secCols = 1;
var _unboundCustomControlObj;
window.onload = function () {
_fieldName = $get('FieldName');
_label = $get('Label');
_showLabel = $get('ShowLabel');
_border = $get('Border');

oArgs = getDialogArguments();
_oFieldsXml = oArgs.FieldsXml;
_oPropertiesXml = oArgs.FieldPropertiesXml;
_oFormXml = oArgs.FormXml;
_secCols = oArgs.SecCols;
var unboundCustomControlObj = oArgs.Field;
_unboundCustomControlObj = unboundCustomControlObj;
$get('chkVisible').checked = _unboundCustomControlObj.Visible;
scrollControl = Mscrm.FormControlInputBehavior.GetBehavior("selScrolling");

var oLabels = unboundCustomControlObj.Labels;
_border.checked = unboundCustomControlObj.Border;


if (!IsNull(unboundCustomControlObj.Id) || unboundCustomControlObj.Id != "") {
var tempName = unboundCustomControlObj.Id;
tempName = tempName.substring(21, tempName.length);
_fieldName.value = _fieldName.defaultValue = tempName;
}
else {
_fieldName.value = _fieldName.defaultValue = unboundCustomControlObj.Id;
}


if (IsNull(_unboundCustomControlObj.TabName)) {
$get('chkAutoExpanding').style.display = "none";
$get('chkAutoExpandingLabel').style.display = "none";
$get('tab2Tab').style.display = "none";
}


var rowCountControl = Mscrm.FormControlInputBehavior.GetBehavior('RowCount');
if (_unboundCustomControlObj.RowSpan != null)
rowCountControl.set_dataValue(_unboundCustomControlObj.RowSpan);
else
rowCountControl.set_dataValue(4);

_fieldName.disabled = (_mode != "add");
if (!IsNull(oLabels) && !IsNull(oLabels[0]) && !IsNull(oLabels[0].Description)) {
_label.value = oLabels[0].Description;
}
_showLabel.checked = unboundCustomControlObj.ShowLabel;
$get('chkAutoExpanding').checked = unboundCustomControlObj.Auto;
populateColumnLayout(_unboundCustomControlObj.ColSpan, _secCols);

Mscrm.CustomControls.CustomControlManager.get_instance().initiateFromRibbon(dialogArgs.FieldsXml , dialogArgs.ObjectTypeCode);
}

function applychanges() {

_label.value = TrimSpaces(_label.value);
if (_label.value.length == 0) {
alert(LOCID_ENTER_LABEL);
_label.select();
return;
}

var fieldName = _fieldName.value;
_fieldName.value = TrimSpaces(_fieldName.value);
if (_fieldName.value.length == 0) {
alert(LOCID_ENTER_ID);

_fieldName.select();

return;
}

var unboundCustomControlCountValidation = Mscrm.CustomControls.CustomControlManager.get_instance().validateUnboundCustomControlsCount();
if (!unboundCustomControlCountValidation) {
return;
}

var border = _border.checked;
var validationCheck = Mscrm.CustomControls.CustomControlManager.get_instance().validateFieldCustomControls();
if (!validationCheck) {
return;
}

var sCustomControlUniqueId = Mscrm.CustomControls.CustomControlManager.get_instance().getSubgridUniqueId();
var numCols = 1;
if ($get('rdColumnSpan1').checked)
numCols = 1;
if ($get('rdColumnSpan2').checked)
numCols = 2;
if ($get('rdColumnSpan3').checked)
numCols = 3;
if ($get('rdColumnSpan4').checked)
numCols = 4;
if (numCols > _secCols) {
alert(LOCID_FORMED_WR_COLSPAN);
return;
}

var _oCustomControlSnippet = Mscrm.CustomControls.CustomControlManager.get_instance().generateGridSnippet();
var scrolling = scrollControl.get_dataValue();
var bAutoExpanding = $get('chkAutoExpanding').checked;
if (!IsNull(_unboundCustomControlObj.TabName) && bAutoExpanding)
bAutoExpanding = AutoExpandingRequired(_unboundCustomControlObj.TabName, _fieldName.value, _oFormXml);

var ret = new UnboundCustomControlObj(
"UnboundCustomControl_" + _fieldName.value,
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue(),
numCols,
null,
null,
_unboundCustomControlObj.SectionName,
new Array(new LocalizedObj(_label.value, oArgs.LangCode)),
_showLabel.checked,
scrolling,
border,
null,
null,
$get('chkVisible').checked,
sCustomControlUniqueId,
_oCustomControlSnippet,
_oFormXml
);

Mscrm.Utilities.setReturnValue(ret);
closeWindow();
}
function cancel() {
Mscrm.Utilities.setReturnValue(null);
closeWindow();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="ms-crm-TabBar-Cell formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server" />
</div>
<div style="vertical-align: top">
<div id="tab0" class="ms-crm-Tab" style="display: block; width: auto">
<fieldset>
<legend><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Field_And_Label_Legend" runat="server" />&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="60" /><col />
<tr>
<td colspan="2" class="ms-crm-Field-Required" id="name_c"><label for="FieldName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_153" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<% if (true)
{
%>
<td>
<table cellpadding="0" cellspacing="1" width="100%" style="table-layout: fixed;" dir="ltr">
<col width="80"><col>
<tr>
<td class="rofield">CustomControl_</td>
<td><input id="FieldName" onchange="if(!_labelDirty){$get('Label').value=$get('FieldName').value;}" name="FieldName" type="text" class="ms-crm-Text" maxlength="100" style="background-color: <%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color"))%>" /></td>
</tr>
</table>
</td>
<%
}
else
{
%>
<td><ui:TextBox ID="FieldName" name="FieldName" MaxLength="100" runat="server" /></td>
<%
}
%>
</tr>
<tr>
<td class="ms-crm-Field-Required" colspan="2" id="label_c"><label for="Label"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label></td>
<td><input id="Label" onkeypress="_labelDirty = true;" name="Label" type="text" class="ms-crm-Text" maxlength="100" /></td>
</tr>
<tr>
<td><ui:CheckBox id="ShowLabel" name="ShowLabel" runat="server" /></td>
<td colspan="2"><label id="ShowFieldLabel" for="ShowLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br>


<div id="divVisibilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server" />&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px" /><col />
<tr>
<td><ui:CheckBox id="chkVisible" runat="server" /></td>
<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server" /></label></td>
</tr>
</table>
</fieldset>
</div>
<br>
</div>
<div id="tab1" class="ms-crm-Tab" style="width: auto">
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server" />&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col /><col width="85" class="fieldprops_col_3" />

<tr>
<td colspan="3"><loc:Text ResourceId="FormEditor_Dialogs_ColSpan_Label" runat="server" /></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" class="radio"></td>
<td><label id="rdColumnSpan1Label" for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server" /></label></td>

<td>
<table cellpadding="0" cellspacing="4" width="75" class="example">
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
</table>
</td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" class="radio"></td>
<td><label id="rdColumnSpan2Label" for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server" /></label></td>

<td>
<table cellpadding="0" cellspacing="4" width="75" class="example">
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
</table>
</td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" class="radio"></td>
<td><label id="rdColumnSpan3Label" for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server" /></label></td>

<td>
<table cellpadding="0" cellspacing="4" width="75" class="example">
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
</table>
</td>
</tr>
<tr>
<td colspan="3" height="10"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan4" type="radio" class="radio"></td>
<td><label id="rdColumnSpan4Label" for="rdColumnSpan4"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_207" runat="server" /></label></td>

<td>
<table cellpadding="0" cellspacing="4" width="75" class="example">
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
</table>
</td>
</tr>
</table>
</fieldset>

<br>
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_238" runat="server" />&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="105" /><col />

<tr>
<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FormProperties.RowLayoutSection.Description" runat="server" /></td>
</tr>

<tr>
<td colspan="2"><label for="RowCount"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server" /></label></td>
<td><ui:Number id="RowCount" runat="server" /></td>
</tr>

<tr id="trAutoExpanding">
<td><ui:CheckBox id="chkAutoExpanding" runat="server" /></td>
<td colspan="2"><label id="chkAutoExpandingLabel" for="chkAutoExpanding"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server" /></label></td>
</tr>
</table>
</fieldset>

<br>
<fieldset id="Scrolling">
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Label" runat="server" />&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Description" runat="server" />
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="120"><col>
<tr>
<td><label for="selScrolling"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Labels.Scrolling" runat="server" /></label></td>
<td><ui:Select id="selScrolling" runat="server" /></td>
</tr>
</table>
</fieldset>
<br>
<fieldset id="BorderWR">
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Label" runat="server" />&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Description" runat="server" />
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col>
<tr>
<td><ui:CheckBox id="Border" name="Border" runat="server" /></td>
<td colspan="2"><label for="Border"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Labels.Border" runat="server" /></label></td>
</tr>
</table>
</fieldset>
</div>
<div id="tab2" class="ms-crm-Tab" style="height: 450px">
<div>
<div id="unboundCustomcontrols">
<div id="secCustomcontrol">

<fieldset style="height: 140px; border: thin; border-style: none; border-collapse: collapse">

<div id="subgridTopDiv" style="margin-bottom: 10px; width: 100%; align: center; overflow-y: auto; height: 138px">
<table class="customcontrol-tablestyle" id="tblCustomControl" rtl="false">

<tr class="customcontrol-bottomline" style="height: 28px">
<th class="customcontrol-text-ellipses customcontrols_configuration_control_name" rtl="false" title="<loc:Text ResourceId='CustomControls_Configuration_Control' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Control" runat="server" /></b></th>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.DataSetControl.Name, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Web' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Web" runat="server" /></b></th>
<%
}
%>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Phone' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Phone" runat="server" /></b></th>
<th style="text-align: center; width: 15%" class="customcontrol-text-ellipses" title="<loc:Text ResourceId='CustomControls_Configuration_Tablet' runat='server'/>"><b><loc:Text ResourceId="CustomControls_Configuration_Tablet" runat="server" /></b></th>
<th style="width: 15%"></th>
</tr>
</table>
<div style="padding-top: 5px;" id="addControlDiv">
<a href="#" id="addcontrolid"><span class="customcontrol-subject customcontrol-fontfamily" style="cursor: pointer"><u><loc:Text ResourceId="CustomControls_Configuration_AddControl" runat="server" /></u></span></a>
</div>
</div>
</fieldset>
</div>

<div id="divPropertyTableContainer" width="100%" style="border: 1px solid #DDDDDD; height: 356px">
<div id="selectionRemindBoxId" class="selectionremindbox">
<span><loc:Text ResourceId="CustomControls_Configuration_PlaceHolderText1" runat="server" /></span>
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
