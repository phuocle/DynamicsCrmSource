<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.IFrame" %>
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
TD.rofield
{
background:		#eaf3ff;
color:			#000000;
border:			1px solid #c5c5c5;
padding-top:	0px;
padding-bottom:	0px;

}
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
width:auto;
}
</style>
<script type="text/javascript" language="javascript">

var _mode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mode) %>;
var _oIframe;
var _secCols = 1;
var _labelDirty = false;
var _cellId = null;
var _sFormAccessType = '';
var _PassParams;
var _ShowLabel;
var _Restricted;
var _Border;
var _ShowOnMobileClient;
var oArgs;
var scrollControl = null;
var _url = null;
var _fieldName = null;
var _chkVisible = null;
var _tab2tab = null;
var _chkAutoExpanding = null;
var _dialogLabel = null;

Sys.Application.add_load(function () {

oArgs = getDialogArguments();
_cellId = oArgs.CellId;
_PassParams = $get('PassParams');
_ShowLabel = $get('ShowLabel');
_Restricted = $get('Restricted');
_Border = $get('Border');
_ShowOnMobileClient = $get('ShowOnMobileClient');
_url = $get('Url');
_fieldName = $get('FieldName');
_chkVisible = $get('chkVisible');
_tab2tab = $get('tab2Tab');
_chkAutoExpanding = $get('chkAutoExpanding');
_dialogLabel = $get('Label');

var oIframe = oArgs.Field;
_chkVisible.checked = oIframe.Visible;

_oFieldsXml		= oArgs.FieldsXml;
_oPropertiesXml	= oArgs.FieldPropertiesXml;
_sFormAccessType = oArgs.FormAccessType;
_oFormXml		= oIframe.FormXml;
_secCols        = oArgs.SecCols;
_oIframe = oIframe;
$addHandler(_fieldName, "change", UpdateLabel);
Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(oIframe.FormXml));
Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = _oFieldsXml;
Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = _oPropertiesXml;
scrollControl = Mscrm.FormControlInputBehavior.GetBehavior("selScrolling");


if(IsNull(_oIframe.TabName))
{
_chkAutoExpanding.style.display = "none";
$get('chkAutoExpandingLabel').style.display = "none";
_tab2tab.style.display = "none";
}
_fieldName.value   = _fieldName.defaultValue = oIframe.Id;
_url.value			= oIframe.Url;
_PassParams.checked= oIframe.PassParams;
_chkAutoExpanding.checked      = oIframe.Auto;
_Restricted.checked	= oIframe.Secure;
if(_sFormAccessType == Mscrm.EntityTypeCode.UserForm)
{
_Restricted.checked = true;
_Restricted.disabled = true;
}
_oDependencies = oIframe.Dependencies;

_Border.checked = oIframe.Border;
_ShowOnMobileClient.checked = oIframe.ShowOnMobileClient;

var oLabels = oIframe.Labels;

if (!IsNull(oLabels) && !IsNull(oLabels[0]) && !IsNull(oLabels[0].Description))
{
$get('Label').value	= oLabels[0].Description;
}
_ShowLabel.checked = oIframe.ShowLabel;

_fieldName.disabled = (_mode != "add");
_labelDirty = _mode === "add" ? false: true;
if(_mode === "add" && (TrimSpaces(_fieldName.value) != ''))
{
$get('Label').value = _fieldName.value;
}


_iFieldSelectWidth		= 175;
_iFieldSelectHeight		= 370;
_bFieldSelectShowUp		= false;
_bFieldSelectShowDown	= false;
_sFieldSelectLeftTitle	= LOCID_AVAILABLE_FIELDS;
_sFieldSelectRightTitle	= LOCID_DEPENDENT_FIELDS;

DrawDependencyFieldSelect();
populateColumnLayout(_oIframe.ColSpan,_secCols);


if(_oIframe.RowSpan != null)
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(_oIframe.RowSpan);
else
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').set_dataValue(4);

if (_fieldName.disabled)
{
_url.focus();
}
else
{
_fieldName.focus();
}


if(!IsNull(_cellId) && !IsNull(_oIframe.TabName))
$addHandler($get('tab3Tab'),"click",loadLibraryControl);
else
$get('tab3Tab').style.display = 'none';
EnableDisableDialogParts();

});
function EnableDisableDialogParts()
{
$get('chkShowOnMobileClientLabel').style.display = "inline";
_ShowOnMobileClient.style.display = "inline";
}
function loadLibraryControl()
{
Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(true, Mscrm.FormControlTypes.iframe,_cellId,oArgs.ObjectTypeCode);
}
function GetUserFriendlyRowSpan(iFormXmlRowSpan, bAutoExpanding)
{
return iFormXmlRowSpan - (bAutoExpanding ? 1 : 0);
}
function applychanges()
{
_dialogLabel.value = TrimSpaces(_dialogLabel.value);
_fieldName.value = TrimSpaces(_fieldName.value);
_url.value = TrimSpaces(_url.value);


if (_url.value.length == 0)
{
alert(LOCID_THE_URL);

_url.select();

return;
}

if(_sFormAccessType == Mscrm.EntityTypeCode.UserForm)
{
switch(validateUrlProtocol(_url.value))
{
case 0:
case 2:
default:
alert(LOCID_URLCTRL_INVALID_PROTOCOL);
_url.select();
return;

case 1:
break;
}
}

if(_dialogLabel.value.length == 0)
{
alert(LOCID_ENTER_LABEL);

_dialogLabel.select();

return;

}
if(_mode=="add")
{
if (!IsIdValid(_fieldName.value))
{
alert(LOCID_ALPHANUMERIC_ONLY);

_fieldName.select();

return;
}

if (_fieldName.value.length == 0)
{
alert(LOCID_ENTER_ID);

_fieldName.select();

return;
}

var tempId = "IFRAME_" + _fieldName.value;


if (Mscrm.FormControlInputBehavior.GetElementBehavior(_fieldName).get_isDirty())
{
{
var sId = _fieldName.value.toLowerCase();
var oNodes = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.iframe + "']", null);
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++)
{
if ( oNodes[i].getAttribute("id").toLowerCase() == tempId.toLowerCase())
{
alert(LOCID_ID_IN_USE);

_fieldName.select();

return;
}
}
}
}
_fieldName.value = tempId;
}



var sDependsAry	= new Array();
sDependsAry		= GetReturnList();

var numCols =2;
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
bAutoExpanding =  AutoExpandingRequired(_oIframe.TabName, _fieldName.value, _oFormXml);

Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();
Mscrm.Utilities.setReturnValue(new IframeObj(
_fieldName.value,
_url.value,
_PassParams.checked,
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue(),
numCols,
bAutoExpanding,
_Restricted.checked,
null,
_oIframe.SectionName,
new Array(new LocalizedObj(_dialogLabel.value, oArgs.LangCode)),
_ShowLabel.checked,
sDependsAry,
scrollControl.get_dataValue(),
_Border.checked,
Mscrm.FormLibraryAndEventHandlerUtils.formXml,_chkVisible.checked,
_ShowOnMobileClient.checked
));

closeWindow();
}

function cancel()
{
closeWindow();
}

function UpdateLabel()
{
if(!_labelDirty)
$get('Label').value=$get('FieldName').value;
}
</script>
<style>
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
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" style="height:100%;width:100%">
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
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_142" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_144" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="60"><col>
<tr>
<td colspan="2" class="ms-crm-Field-Required"><label for="FieldName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_153" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<% if(mode.Equals("add"))
{
%>
<td>
<table cellpadding="0" cellspacing="1" width="100%" style="table-layout: fixed;" dir="ltr">
<col width="50"><col>
<tr>
<td class="rofield">IFRAME_</td>
<td>
<sdk:TextBoxControl Required="true" id="FieldName" MaxLength="100" runat="server"/>
</td>
</tr>
</table>
</td>
<%
}
else
{
%>
<td><input id="FieldName" name="FieldName" type="text" class="ms-crm-Text" maxlength="100" /></td>
<%
}
%>
</tr>
<tr>
<td colspan="2" class="ms-crm-Field-Required"><label for="Url"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_157" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:UrlControl id="Url" name="Url" class="ms-crm-Text" maxlength="2048" runat="server"/></td>
</tr>
<tr>
<td><ui:CheckBox id="PassParams" name="PassParams" runat="server"/></td>
<td colspan="2"><label id="PassParamsLabel" for="PassParams"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.pass_params" runat="server"/></label></td>
</tr>
</table>
</fieldset>
<br>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_173" runat="server"/>&nbsp;</legend>
<div id="labelDescription" class="ms-crm-Dialog-Desc" runat="server">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_175" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="60"><col>
<tr>
<td class="ms-crm-Field-Required" colspan="2"><label for="Label"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td ><input id="Label" onkeypress="_labelDirty = true;" name="Label" type="text" class="ms-crm-Text" maxlength="100"/></td>
</tr>
<tr>
<td><ui:CheckBox id="ShowLabel" name="ShowLabel" runat="server"/></td>
<td colspan="2"><label id="ShowFieldLabel" for="ShowLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_164" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_166" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col>
<tr>
<td vAlign="top"><ui:CheckBox id="Restricted" name="Restricted" runat="server" style="margin-top:0px"/></td>
<td colspan="2">
<label for="Restricted"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_175" runat="server"/></label>
<br />
<a href="http://go.microsoft.com/fwlink/?LinkId=249177" class="ms-crm-FormEditor-Iframe-GlobalColor" target="_blank"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_176" runat="server"/></a>
</td>
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
<tr>
<td><ui:CheckBox id="ShowOnMobileClient" name="ShowOnMobileClient" runat="server"/></td>
<td><label id="chkShowOnMobileClientLabel" for="ShowOnMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.TabletClient" runat="server"/></label></td>
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
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Label" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Description" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="120"><col>
<tr>
<td><label for="selScrolling"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.ScrollingSection.Labels.Scrolling" runat="server"/></label></td>
<td><ui:Select id="selScrolling" runat="server"/></td>
</tr>
</table>
</fieldset>
<br>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Label" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Description" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col>
<tr>
<td><ui:CheckBox id="Border" name="Border" runat="server"/></td>
<td colspan="2"><label for="Border"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.BorderSection.Labels.Border" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
<div id="tab2" class="ms-crm-Tab">
<div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.IFrame.Dependencies.Description" runat="server"/>
</div>
<span>&nbsp;</span>
<div id="divFieldSelect" width="100%">
</div>
</div>
<div id="tab3" class="ms-crm-Tab" style="overflow-y:auto;">
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
</div>
</div>
</frm:DialogForm>
</body>
</html>
