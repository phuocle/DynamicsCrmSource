<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.Delve" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<script language="javascript">

var _oFormXml;
var _oFieldsXml;
var _oField;
var _subGridId;
var _objectCode;
var _secCols = 1;
var _sTabName = null, _sSectionName = null;
var _sEditorType = 'formEditor';
var _sDashboardType = '';
var _bIsUserView = false;
var _bIsUserChart = false;
var oArgs;
var _bIsValid = true;
var _txtLabel = null;
var _txtDesc = null;
var _chkDispOption = null;
var _chkAvailable = null;

Sys.Application.add_load(OnSubGridWindowLoad);

function OnSubGridWindowLoad() {
oArgs = getDialogArguments();
_oFormXml = oArgs.FormXml;
_oFieldXml = oArgs.FieldsXml;
_oField = oArgs.Field;
_secCols = oArgs.SecCols;
_sSectionName = oArgs.sSectionName;
_sTabName = oArgs.sTabName;
_objectCode = parseInt(oArgs.ObjectTypeCode, 10);
_sEditorType = oArgs.EditorType;
_sDashboardType = oArgs.FormAccessType;
var oLabels = _oField.Labels;
_subGridId = _oField.Id;
_txtLabel = $get('txtLabel');
_txtDesc = $get('txtDescription');
_chkDispOption = $get('chkDispOption');
_chkAvailable = $get('chkAvailable');

_txtDesc.value = _subGridId;

if (!IsNull(oLabels) && !IsNull(oLabels.length) && oLabels.length > 0) {
for (var i = 0; i < oLabels.length; i++) {
if (!IsNull(oLabels[i]) && !IsNull(oLabels[i].LanguageCode)
&& !IsNull(USER_LANGUAGE_CODE) && oLabels[i].LanguageCode == USER_LANGUAGE_CODE && !IsNull(oLabels[i].Description)) {
_txtLabel.value = oLabels[i].Description;
}
}
}

_chkDispOption.checked = _oField.ShowLabel;
_chkAvailable.checked = _oField.AvailableForPhone;
_bIsUserChart = _oField.IsUserChart;
_bIsUserView = _oField.IsUserView;
}

function applychanges() {

if (_txtDesc.value.length == 0) {
alert(LOCID_ENTER_SUBGRID_NAME);
_txtDesc.select();
return;
}

if (_txtLabel.value.length == 0) {
alert(LOCID_ENTER_SUBGRID_LABEL);
_txtLabel.select();
return;
}

if (!IsIdValid(_txtDesc.value) || _txtDesc.value.startsWith("_") || !isNaN(_txtDesc.value.substring(0, 1))) {
alert(LOCID_ALPHANUMERIC_ONLY);
_txtDesc.select();
return;
}

if (_subGridId != _txtDesc.value) {
var oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.subgrid + "']", null);
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++) {
if (oNodes[i].getAttribute("id") === _txtDesc.value) {
alert(LOCID_SUBGRID_EXISTS);
_txtDesc.select();
return;
}
}
}

var subGridId = _txtDesc.value;

var sRelationShipName, sTargetEntityName, sAssociationRoleOrdinal = "", viewID, viewIds, viewSel;
var sVisualizationId = "", searchSel, indexSel, visSel;
var viewIds;

sTargetEntityName = _oField.TargetEntity;
sRelationShipName = _oField.RelationshipName;
sAssociationRoleOrdinal = _oField.AssociationRoleOrdinal;
viewIds = _oField.Views;
viewID = _oField.DefaultView;
sVisualizationId = _oField.VisualizationId;
viewSel = _oField.EnableViewPicker;
searchSel = _oField.EnableSearchBox;
indexSel = _oField.EnableIndex;
visSel = _oField.EnableChartPicker;

var rowSpan, recordsPerPage, colSpan;
rowSpan = _oField.RowSpan;
recordsPerPage = _oField.RowsPerPage;
colSpan = _oField.ColSpan;

var gridMode = _oField.ChartGridMode;
var gridUIMode = _oField.GridUIMode;

var subGrid = new SubGridObj(
subGridId,
sRelationShipName,
sTargetEntityName,
rowSpan,
recordsPerPage,
colSpan,
false,
_chkDispOption.checked,
viewID,
viewSel,
viewIds,
searchSel,
indexSel,
gridMode,
sVisualizationId,
visSel,
new Array(new LocalizedObj(_txtLabel.value, oArgs.LangCode)),
sAssociationRoleOrdinal,
_bIsUserView,
_bIsUserChart,
_chkAvailable.checked,
gridUIMode
);

Mscrm.Utilities.setReturnValue(subGrid);
closeWindow();
}

</script>

<style>
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
width:auto;
}
</style>
</head>
<body >
<frm:DialogForm id="crmForm" runat="server">

<div style="width:100%; min-width:390px;">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">

<div id="tab0" class="ms-crm-Tab" style="display: inline;">

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>


<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required" id="name_c"><label for="txtDescription"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:TextBox id="txtDescription" MaxLength="255" runat="server"/></td>
</tr>
</table>
</fieldset>
<br />


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col width="70"/>
<tr>
<td class="ms-crm-Field-Required" id="label_c"><label for="txtLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.subgrid.aspx.Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><input  type="text" id="txtLabel" onkeypress="_labelDirty = true;" maxlength="255" class="ms-crm-Text" /></td>
</tr>
</table>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5%"/><col width="95%"/>
<tr>
<td><ui:CheckBox id="chkDispOption" runat="server"/></td>
<td ><label for="chkDispOption" id="chkDispOptionLabel" runat="server"></label></td>
</tr>

</table>
</fieldset>

<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.SubGrid.aspx.DataSourceLegend" runat="server"/>&nbsp;</legend>
<% if(delveLink != null && delveLink != "") {%>
<a id="DelveLink" href="<%= delveLink%>" target="_blank" class="delveLink" title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("Web.Dashboard.OpenOfficeDelve.HoverText"))%> Office Delve">
Office Delve
</a>
<% }%>
<% else {%>
<a id="DelveLink" href="http://go.microsoft.com/fwlink/?LinkID=620878" target="_blank" class="delveLink" title="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(AppResourceManager.Default.GetString("Web.Dashboard.OpenOfficeDelve.HoverText"))%> Office Delve">
Office Delve
</a>
<% }%>
</fieldset>
<div id="divAvailabilitySection">
<br>
<fieldset>
<legend><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col>

<tr>
<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Chart_Available_Section_Heading" runat="server"/></td>
</tr>

<tr >
<td><ui:CheckBox id="chkAvailable" runat="server"/></td>
<td><label id="chkAvailableLabel" for="chkAvailable"><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_CheckBox_Label" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
