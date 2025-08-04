<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.BingMap" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="formeditor" TagName="FieldLayout" Src="FieldLayout.ascx" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html style="overflow: hidden;">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<style type="text/css">
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
width:auto;
}

.framefooter
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
text-align:left;
padding-left:15px;
<% } else { %>
text-align:right;
padding-right:15px;
<% } %>
height:100%;
padding-top:10px;
}
</style>

<script type="text/javascript" language="javascript">

var _mode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mode) %>;
var _langCode;
var _oIframe;
var _labelText = null;
var _showLabel;
var _secCols = 1;
var _addressFieldSelector = null;
var _chkVisible = null;
var _chkAutoExpanding = null;

Sys.Application.add_load(function () {
var oArgs = getDialogArguments();
_langCode = oArgs.LangCode;
_oIframe = oArgs.Field;

_showLabel = $get('ShowLabel');
_showLabel.checked = _oIframe.ShowLabel;

_labelText = $get('Label');
var oLabels = _oIframe.Labels;

if (!IsNull(oLabels) && !IsNull(oLabels[0]) && !IsNull(oLabels[0].Description))
{
_labelText.value = oLabels[0].Description;
}

_chkVisible = $get('chkVisible');
_chkVisible.checked = _oIframe.Visible;

_chkAutoExpanding = $get('chkAutoExpanding');

if(IsNull(_oIframe.TabName))
{
_chkAutoExpanding.style.display = "none";
}
_chkAutoExpanding.checked = _oIframe.Auto;

_secCols = oArgs.SecCols;
populateColumnLayout(_oIframe.ColSpan,_secCols);


if(_oIframe.RowSpan != null)
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(_oIframe.RowSpan);
else
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(8);

_addressFieldSelector = Mscrm.FormControlInputBehavior.GetBehavior('addressFieldSelector');

_labelText.focus();
});

function applychanges()
{
_labelText.value = TrimSpaces(_labelText.value);
if(_labelText.value.length == 0)
{
alert(LOCID_ENTER_LABEL);

_labelText.select();

return;
}

var numCols = 2;
if($get('rdColumnSpan1').checked)
numCols = 1;
if($get('rdColumnSpan2').checked)
numCols = 2;
if($get('rdColumnSpan3').checked)
numCols = 3;
if($get('rdColumnSpan4').checked)
numCols = 4;
if(numCols > _secCols)
{
alert(LOCID_FORMED_IFRAME_COLSPAN);
return;
}
var bAutoExpanding = _chkAutoExpanding.checked;
if (!IsNull(_oIframe.TabName) && bAutoExpanding)
bAutoExpanding =  AutoExpandingRequired(_oIframe.TabName, _oIframe.Id, _oIframe.FormXml);

Mscrm.Utilities.setReturnValue(new BingMapObj(
_oIframe.Id,
_addressFieldSelector.get_dataValue(),
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue(),
numCols,
bAutoExpanding,
null,
_oIframe.SectionName,
new Array(new LocalizedObj(_labelText.value, _langCode)),
_showLabel.checked,
_oIframe.FormXml,
_chkVisible.checked
));

closeWindow();
}

function cancel()
{
closeWindow();
}

</script>

</head>
<body>
<frm:DialogForm id="crmForm" runat="server" style="height:100%">
<input type="hidden" name="DataType" value="iframe">
<div style="width:100%;height:100%;position:relative">
<div class="ms-crm-Dialog-Main" style="position:absolute;top:0px;left:0px;right:0px;bottom:42px;overflow-x:hidden;overflow-y:auto;height:auto">
<div style="width:100%;margin-top:10px">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab" style="display: block;">
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_173" runat="server"/>&nbsp;</legend>
<div id="labelDescription" class="ms-crm-Dialog-Desc" runat="server">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_175" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="60"><col>
<tr>
<td class="ms-crm-Field-Required" colspan="2"><label for="Label"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td ><input id="Label" name="Label" type="text" class="ms-crm-Text" maxlength="100"/></td>
</tr>
<tr>
<td><ui:CheckBox id="ShowLabel" name="ShowLabel" runat="server"/></td>
<td colspan="2"><label id="ShowFieldLabel" for="ShowLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.BingMap.AddressFieldSection.Label" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.BingMap.AddressFieldSection.Description" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="120"><col>
<tr>
<td><label for="addressFieldSelector"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.BingMap.AddressFieldSection.AddressSelectorLabel" runat="server"/></label></td>
<td><ui:Select id="addressFieldSelector" runat="server"/></td>
</tr>
</table>
</fieldset>
<br>


<div id="divVisibilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col>

<tr>
<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Control_Visible_Section_Heading" runat="server"/></td>
</tr>

<tr>
<td><ui:CheckBox id="chkVisible" runat="server"/></td>
<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
<br>
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

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_238" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="105"><col>

<tr>
<td colspan="3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FormProperties.RowLayoutSection.Description" runat="server"/></td>
</tr>

<tr>
<td colspan="2"><label for="RowCount"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
<td><ui:Number id="RowCount" runat="server"/></td>
</tr>

<tr id="trAutoExpanding" >
<td><ui:CheckBox id="chkAutoExpanding" runat="server"/></td>
<td colspan="2"><label id="chkAutoExpandingLabel" for="chkAutoExpanding"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server"/></label></td>
</tr>
</table>
</fieldset>
<br>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
