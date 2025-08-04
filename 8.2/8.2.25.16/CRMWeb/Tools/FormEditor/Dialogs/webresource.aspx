<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.WebResource" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="formeditor" TagName="FieldLayout" Src="FieldLayout.ascx" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html style="overflow: hidden;">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
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
}
.ms-crm-IE7-td-Texarea-Container,
.ms-crm-IE7-Texarea
{
position: static;
}

.ms-crm-DialogStrict-Main
{
overflow-x: hidden !important;
}
</style>
<script type="text/javascript" language="javascript">

var _mode = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(mode) %>;
var _oWebResource;
var _secCols = 1;
var _typeCode;
var _iHeight,_iWidth;
var _sAltText,_sSizeType;
var _labelDirty = false;
var NOTSET = 'NotSet';
var LEFT = 'Left';
var RIGHT = 'Right';
var CENTER = 'Center';
var TOP = 'Top';
var MIDDLE = 'Middle';
var BOTTOM = 'Bottom';
var oArgs ;
var _showLabel;
var _passParams;
var _showOnMobileClient;
var _isEnabledForMobileClient;
var _border;
var scrollControl = null;
var _webResourcesControl = null;
var _fieldName = null;
var _alternativeText = null
var _alternativeTextLabel = null;
var _label = null;

Sys.Application.add_load(OnLoad);
function OnLoad()
{

_showLabel = $get('ShowLabel');
_passParams = $get('PassParams');
_showOnMobileClient = $get('ShowOnMobileClient');
_border = $get('Border');
_fieldName = $get('FieldName');
_alternativeText = $get('alternativeText');
_alternativeTextLabel = $get('alternativeTextLabel');
_label = $get('Label');

oArgs = getDialogArguments();
_oFieldsXml		= oArgs.FieldsXml;
_oPropertiesXml	= oArgs.FieldPropertiesXml;
_oFormXml		= oArgs.FormXml;
_secCols		= oArgs.SecCols;
var oWebResource = oArgs.Field;
_oWebResource = oWebResource;
$get('chkVisible').checked = _oWebResource.Visible;
scrollControl = Mscrm.FormControlInputBehavior.GetBehavior("selScrolling");

if(IsNull(_oWebResource.TabName))
{
$get('chkAutoExpanding').style.display = "none";
$get('chkAutoExpandingLabel').style.display = "none";
$get('tab2Tab').style.display = "none";
}

_webResourcesControl = Mscrm.FormControlInputBehavior.GetBehavior('webResources');
_webResourcesControl.add_afterSelect(LookupValueChanged);

_webResourcesControl.set_bindingColumns('isenabledformobileclient');

_fieldName.value = _fieldName.defaultValue = oWebResource.Id;
_passParams.checked= oWebResource.PassParams;
_showOnMobileClient.checked = oWebResource.ShowOnMobileClient;
$get('chkAutoExpanding').checked = oWebResource.Auto;
$get('Restricted').checked	= oWebResource.Secure;
Mscrm.FormControlInputBehavior.GetBehavior('ImageWidth').set_dataValue(oWebResource.Width ? parseInt(oWebResource.Width, 10) : null);
Mscrm.FormControlInputBehavior.GetBehavior('ImageHeight').set_dataValue(oWebResource.Height ? parseInt(oWebResource.Height,10) : null);
_alternativeText.value = oWebResource.AltText?oWebResource.AltText:"";
$get('customParameter').value = oWebResource.CustomParameter?oWebResource.CustomParameter:"";
_oDependencies = oWebResource.Dependencies;

_border.checked = oWebResource.Border;

var oLabels = oWebResource.Labels;

if (!IsNull(oLabels) && !IsNull(oLabels[0]) && !IsNull(oLabels[0].Description))
{
_label.value	= oLabels[0].Description;
}
_showLabel.checked = oWebResource.ShowLabel;

_fieldName.disabled = (_mode != "add");
_labelDirty = _mode === "add"? false: true;
if(_mode === "add" && (TrimSpaces(_fieldName.value) != ''))
{
_label.value = _fieldName.value;
}


_iFieldSelectWidth		= 175;
_iFieldSelectHeight		= 370;
_bFieldSelectShowUp		= false;
_bFieldSelectShowDown	= false;
_sFieldSelectLeftTitle	= LOCID_AVAILABLE_FIELDS;
_sFieldSelectRightTitle	= LOCID_DEPENDENT_FIELDS;

DrawDependencyFieldSelect();
populateColumnLayout(_oWebResource.ColSpan,_secCols);


var rowCountControl = Mscrm.FormControlInputBehavior.GetBehavior('RowCount');
if(_oWebResource.RowSpan != null)
rowCountControl.set_dataValue(_oWebResource.RowSpan);
else
rowCountControl.set_dataValue(4);

if (_fieldName.disabled)
{

}
else
{
$get('webResources').focus();
}

if(_webResourcesControl.get_dataValue() != null)
{
var id = _webResourcesControl.get_dataValue()[0].id;
_typeCode = GetTypeCode(id);

var keyValues = _webResourcesControl.get_dataValue()[0].keyValues;
var length = keyValues.length;
if (length > 0)
{
_isEnabledForMobileClient = keyValues.isenabledformobileclient.value;
}
else
{
_isEnabledForMobileClient = window._isEnabledForMobileClient;
}
}

EnableDisableDialogParts();
populateLayoutCombo();
}

function populateLayoutCombo()
{
if(_typeCode != null)
{
var SelectLayout = new Select();
SelectLayout.ID = "layoutCombo";
SelectLayout.OnChange = "onLayoutChanged()";
switch(_typeCode)
{

case 5:
case 6:
case 7:
case 10:
SelectLayout.AddOption(LOCID_LAYOUT_STRETCH, 'StretchToFit');
SelectLayout.AddOption(LOCID_MAINTAIN_ASPECT_RATIO, 'StretchMaintainAspectRatio');
SelectLayout.AddOption(LOCID_LAYOUT_ORIGINAL, 'Original');
SelectLayout.AddOption(LOCID_LAYOUT_SPECIFIC, 'Specific');
SelectLayout.AddToControl($get('imageLayout'));
$get('layoutCombo').options[1].selected = true;
$get('tab2Tab').style.display = "none";
populateImageAlignmentLists();
break;

case 8:
SelectLayout.AddOption(LOCID_LAYOUT_STRETCH, 'StretchToFit');
SelectLayout.AddOption(LOCID_LAYOUT_SPECIFIC, 'Specific');
SelectLayout.AddToControl($get('imageLayout'));
$get('layoutCombo').options[0].selected = true;
$get('tab2Tab').style.display = "inline";
break;
default:
$get('tab2Tab').style.display = "inline";
break;
}

if(IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap)
{
if (_typeCode == WebResourceTypes.xap && (_oWebResource.SizeType == 'StretchMaintainAspectRatio' || _oWebResource.SizeType == 'Original'))
{
_oWebResource.SizeType = 'StrechToFit';
}
SelectComboValue($get('layoutCombo'),_oWebResource.SizeType);
onLayoutChanged();
}
}

if(IsNull(_oWebResource.TabName))
$get('tab2Tab').style.display = "none";
}

function populateImageAlignmentLists()
{
var SelectHorAlignment = new Select();
SelectHorAlignment.ID = "horAlignmentCombo";
SelectHorAlignment.AddOption(LOCID_IMAGE_LEFT, LEFT );
SelectHorAlignment.AddOption(LOCID_IMAGE_CENTER, CENTER );
SelectHorAlignment.AddOption(LOCID_IMAGE_RIGHT, RIGHT );
SelectHorAlignment.AddToControl($get('horizontalAlignment'));

var horAlignmentCombo = $get('horAlignmentCombo');
horAlignmentCombo.options[1].selected = true;
SelectComboValue(horAlignmentCombo,_oWebResource.HorizontalAlignment);

var SelectVerAlignment = new Select();
SelectVerAlignment.ID = "verAlignmentCombo";
SelectVerAlignment.AddOption(LOCID_IMAGE_TOP, TOP );
SelectVerAlignment.AddOption(LOCID_IMAGE_MIDDLE, MIDDLE);
SelectVerAlignment.AddOption(LOCID_IMAGE_BOTTOM, BOTTOM );
SelectVerAlignment.AddToControl($get('verticalAlignment'));

var verAlignmentCombo = $get('verAlignmentCombo');
verAlignmentCombo.options[1].selected = true;
SelectComboValue(verAlignmentCombo,_oWebResource.VerticalAlignment);

}

function SelectComboValue(combo,value)
{
for (var i = 0; i < combo.options.length; i++) {
var val = combo.options[i].value;
if (val == value) {
combo.options[i].selected = true;
break;
}
}
}

function onLayoutChanged()
{
var layoutCombo = $get('layoutCombo');
if(!IsNull(layoutCombo))
{
$get('ImageWidth').disabled = layoutCombo.value != 'Specific';
$get('ImageHeight').disabled = layoutCombo.value != 'Specific';
$get('ImageWidthLabel').disabled = layoutCombo.value != 'Specific';
$get('ImageHeightLabel').disabled = layoutCombo.value != 'Specific';
$get('ImageWidthPixelLabel').disabled = layoutCombo.value != 'Specific';
$get('ImageHeightPixelLabel').disabled = layoutCombo.value != 'Specific';
}
}

function DoesWRNameExists(oNodes,tempId)
{
var iLen = oNodes.length;
for (var i = 0; i < iLen; i++)
{
if ( oNodes[i].getAttribute("id").toLowerCase() == tempId.toLowerCase())
{
return true;
}
}
return false;
}

function applychanges()
{
_label.value = TrimSpaces(_label.value);
_fieldName.value = TrimSpaces(_fieldName.value);

if(_label.value.length == 0)
{
alert(LOCID_ENTER_LABEL);
_label.select();
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
if(_webResourcesControl.get_dataValue() == null)
{
alert(LOCID_ENTER_WR);

$get('webResources').focus();

return;
}

var tempId = "WebResource_" + _fieldName.value;


if (Mscrm.FormControlInputBehavior.GetElementBehavior(_fieldName).get_isDirty())
{
var sId = _fieldName.value.toLowerCase();
var oNodesHtmlWR = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column/sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.webResourceHtml + "']", null);
var oNodesImageWR = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column//sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.webResourceImage + "']", null);
var oNodesSilverlightWR = XUI.Xml.SelectNodes(_oFormXml, "/entity/form/tabs/tab/columns/column//sections/section/rows/row/cell/control[@classid = '" + _ControlClassIds.webResourceSilverlight + "']", null);
if(DoesWRNameExists(oNodesHtmlWR,tempId) || DoesWRNameExists(oNodesImageWR,tempId)|| DoesWRNameExists(oNodesSilverlightWR,tempId) )
{
alert(LOCID_ID_IN_USE);
_fieldName.select();
return;
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
alert(LOCID_FORMED_WR_COLSPAN);
return;
}

_typeCode = GetTypeCode(_webResourcesControl.get_dataValue()[0].id);

var horAlignment = null;
var verAlignment = null;
if(_typeCode == WebResourceTypes.html || IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap)
{
var height = null,width = null,sizeType = null,altText = null, layoutComboElement = $get('layoutCombo');
if(!$get('ImageHeight').disabled && $get('ImageHeight').value.length > 0 && (IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap))
height = Mscrm.FormControlInputBehavior.GetBehavior('ImageHeight').get_dataValue().toString();
if(!$get('ImageWidth').disabled && $get('ImageWidth').value.length > 0 && (IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap))
width = Mscrm.FormControlInputBehavior.GetBehavior('ImageWidth').get_dataValue().toString();
if(_alternativeText.value.length > 0 && IsImageWebResourceType(_typeCode))
altText = _alternativeText.value;
if((IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap) && layoutComboElement.value.length > 0 )
sizeType = layoutComboElement.value;

var passParam = _passParams.checked;
var showOnMobileClient = _showOnMobileClient.checked;
var restricted = $get('Restricted').checked;
var scrolling = scrollControl.get_dataValue();
var border = _border.checked;

if(IsImageWebResourceType(_typeCode) || _typeCode == WebResourceTypes.xap)
{
restricted = null;
scrolling = null;
border = null;
showOnMobileClient = null;
if(IsImageWebResourceType(_typeCode))
{
passParam = null;

sDependsAry = new Array();

horAlignment = $get('horAlignmentCombo').value;
verAlignment = $get('verAlignmentCombo').value;
}
}

var bAutoExpanding = $get('chkAutoExpanding').checked;
if (!IsNull(_oWebResource.TabName) && bAutoExpanding)
bAutoExpanding = AutoExpandingRequired(_oWebResource.TabName, _fieldName.value, _oFormXml);

var ret	= new WebResourceObj(
_fieldName.value,
_webResourcesControl.get_dataValue()[0].name,
passParam,
Mscrm.FormControlInputBehavior.GetBehavior('RowCount').get_dataValue(),
numCols,
bAutoExpanding,
restricted,
null,
_oWebResource.SectionName,
new Array(new LocalizedObj(_label.value, oArgs.LangCode)),
_showLabel.checked,
sDependsAry,
scrolling,
border,
_typeCode,
height,
width,
sizeType,
altText,
$get('customParameter').value,
horAlignment,
verAlignment,
$get('chkVisible').checked,
showOnMobileClient,
_webResourcesControl.get_dataValue()[0].id
);
Mscrm.Utilities.setReturnValue(ret);
closeWindow();
}
else
{
alert(LOCID_TYPE_NOT_VALID);
return;
}
}

function EnableDisableDialogParts()
{
if(_typeCode != null)
{
switch(_typeCode)
{
case WebResourceTypes.html:

$get('webResourceProperties').style.display = "block";
$get('Restricted').style.display = "inline";
$get('RestrictedLabel').style.display = "block";
$get('PassParamsLabel').style.display = "inline";
_passParams.style.display = "inline";

$get('ShowOnMobileClientLabel').style.display = "inline";
_showOnMobileClient.style.display = "inline";

if (_isEnabledForMobileClient == 0)
{
_showOnMobileClient.checked = false;
_showOnMobileClient.disabled = true;
}
else if (_isEnabledForMobileClient == 1)
{
_showOnMobileClient.disabled = false;
}

_alternativeText.style.display = "none";
_alternativeTextLabel.style.display = "none";


$get('ImageAppearance').style.display = "none";
$get('Scrolling').style.display = "block";
$get('BorderWR').style.display = "block";
$get('horizontalAlignment').style.display = "none";
$get('verticalAlignment').style.display = "none";
$get('horizontalAlignmentLabel').style.display = "none";
$get('verticalAlignmentLabel').style.display = "none";
break;

case WebResourceTypes.png:
case WebResourceTypes.jpg:
case WebResourceTypes.gif:
case WebResourceTypes.ico:

$get('webResourceProperties').style.display = "block";
$get('Restricted').style.display = "none";
$get('RestrictedLabel').style.display = "none";
$get('PassParamsLabel').style.display = "none";
_passParams.style.display = "none";

$get('ShowOnMobileClientLabel').style.display = "none";
_showOnMobileClient.style.display = "none";

_alternativeText.style.display = "inline";
_alternativeTextLabel.style.display = "inline";


$get('ImageAppearance').style.display = "block";
$get('Scrolling').style.display = "none";
$get('BorderWR').style.display = "none";
$get('horizontalAlignment').style.display = "";
$get('verticalAlignment').style.display = "";
$get('horizontalAlignmentLabel').style.display = "inline";
$get('verticalAlignmentLabel').style.display = "inline";
$get('typeLegend').innerHTML = LOCID_IMAGE_LEGEND;
break;

case WebResourceTypes.xap:

$get('webResourceProperties').style.display = "block";
$get('Restricted').style.display = "none";
$get('RestrictedLabel').style.display = "none";
$get('PassParamsLabel').style.display = "inline";
_passParams.style.display = "inline";

$get('ShowOnMobileClientLabel').style.display = "none";
_showOnMobileClient.style.display = "none";

_alternativeText.style.display = "none";
_alternativeTextLabel.style.display = "none";


$get('ImageAppearance').style.display = "block";
$get('Scrolling').style.display = "none";
$get('BorderWR').style.display = "none";
$get('horizontalAlignment').style.display = "none";
$get('verticalAlignment').style.display = "none";
$get('horizontalAlignmentLabel').style.display = "none";
$get('verticalAlignmentLabel').style.display = "none";
$get('typeLegend').innerHTML = LOCID_SILVERLIGHT_LEGEND;
break;
}
}
else
{
$get('webResourceProperties').style.display = "none";
$get('ImageAppearance').style.display = "none";
}
}

function LookupValueChanged()
{
window.returnValue = null;
if(_webResourcesControl.get_dataValue() != null)
{
_typeCode = GetTypeCode(_webResourcesControl.get_dataValue()[0].id);
_isEnabledForMobileClient = _webResourcesControl.get_dataValue()[0].keyValues.isenabledformobileclient.value;
}
EnableDisableDialogParts();
populateLayoutCombo();


$get('customParameter').value = "";
}
</script>
</head>
<body>
<div class="ms-crm-DialogStrict-Main-Container" style="width:100%;">
<frm:DialogForm id="crmForm" runat="server">
<div class="formEditor-TabBar">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab" style="display: block;width:auto">
<fieldset>
<legend><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Name_Label" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30%" /><col width="70%" />
<tr>
<td class="ms-crm-Field-Required" id="resource_c"><label><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Name_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:LookupControl id="webResources"  DefaultViewId="5A8587CE-D536-46f9-BB89-0F96CAC9B1A0" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>
</table>
</fieldset>
<br />
<fieldset>
<legend><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Field_And_Label_Legend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col width="60" /><col />
<tr>
<td colspan="2" class="ms-crm-Field-Required" id="name_c"><label for="FieldName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_153" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<% if(mode.Equals("add"))
{
%>
<td>
<table cellpadding="0" cellspacing="1" width="100%" style="table-layout: fixed;" dir="ltr">
<col width="80"><col>
<tr>
<td class="rofield">WebResource_</td>
<td><input id="FieldName" onchange="if(!_labelDirty){$get('Label').value=$get('FieldName').value;}" name="FieldName" type="text" class="ms-crm-Text" maxlength="100" style="background-color:<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(AppResourceManager.Default.GetString("Required_Fields_Background_Color"))%>"/></td>
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
<td class="ms-crm-Field-Required" colspan="2" id="label_c"><label for="Label"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_180" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><input id="Label" onkeypress="_labelDirty = true;" name="Label" type="text" class="ms-crm-Text" maxlength="100"/></td>
</tr>
<tr>
<td><ui:CheckBox id="ShowLabel" name="ShowLabel" runat="server"/></td>
<td colspan="2"><label id="ShowFieldLabel" for="ShowLabel" runat="server"></label></td>
</tr>
</table>
</fieldset>
<br>


<div id="divVisibilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px" /><col />
<tr>
<td><ui:CheckBox id="chkVisible" runat="server"/></td>
<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
<br>
<fieldset id ="webResourceProperties">
<legend><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Properties_Legend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="10%" /><col width="20%" /><col width="70%" />
<tr>
<td colspan="2"><label for="customParameter" id ="customParameterLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_CustomParameter_Text" runat="server"/></label></td>
<td><ui:TextArea id="customParameter" height="50px" maxlength="1500" runat="server" /></td>
</tr>
<tr>
<td><ui:CheckBox id="Restricted" name="Restricted" class="checkbox" runat="server"/></td>
<td colspan="2"><label for="Restricted" id="RestrictedLabel"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_175" runat="server"/></label></td>
</tr>
<tr>
<td><ui:CheckBox id="PassParams" name="PassParams" class="checkbox" runat="server"/></td>
<td colspan="2"><label id="PassParamsLabel" for="PassParams"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.pass_params" runat="server"/></label></td>
</tr>




<tr>
<td><ui:CheckBox id="ShowOnMobileClient" name="ShowOnMobileClient" class="checkbox" runat="server" /></td>
<td colspan="2"><label id="ShowOnMobileClientLabel" for="ShowOnMobileClient"><loc:Text ResourceId="SystemCustomization.ManageEntityPage.OptionsSection.EnableDisable.Labels.TabletClient" runat="server"/></label></td>
</tr>
<tr>
<td colspan="2"><label for="alternativeText" id ="alternativeTextLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_AlterNative_Text" runat="server"/></label></td>
<td><input id="alternativeText" name="AlternativeText" type="text" class="ms-crm-Text" maxlength="100"/></td>
</tr>
</table>
</fieldset>
<br>
</div>
<div id="tab1" class="ms-crm-Tab" style="width:auto">
<fieldset>

<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_197" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15" /><col /><col width="85" class="fieldprops_col_3" />

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
<col width="15" /><col width="105" /><col />

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
<fieldset id="Scrolling">
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
<fieldset id="BorderWR">
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

<fieldset id="ImageAppearance">
<legend id="typeLegend"></legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="20%" /><col width="15%"/><col width="15%" /><col width="30%" /><col width="20%" />
<tr>
<td colspan="2" ><label for="verticalAlignment" id="verticalAlignmentLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Image_VerticalAlignment_Text" runat="server"/></label></td>
<td colspan="3" id="verticalAlignment"></td>
</tr>
<tr>
<td colspan="2" ><label for="horizontalAlignment" id="horizontalAlignmentLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Image_HorizontalAlignment_Text" runat="server"/></label></td>
<td colspan="3" id="horizontalAlignment"></td>
</tr>
<tr>
<td colspan="2" ><label for="imageLayout" id="imageLayoutLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Size_Label" runat="server"/></label></td>
<td colspan="3" id="imageLayout"></td>
</tr>
<tr>
<td/>
<td/>
<td ><label for="ImageWidth" id="ImageWidthLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Image_Width" runat="server"/></label></td>
<td><ui:Number id="ImageWidth" runat="server"/></td>
<td ><label id='ImageWidthPixelLabel'><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Size_Pixels" runat="server"/></label></td>
</tr>
<tr>
<td/>
<td/>
<td ><label for="ImageHeight" id="ImageHeightLabel"><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Image_Height" runat="server"/></label></td>
<td><ui:Number id="ImageHeight" runat="server"/></td>
<td ><label id='ImageHeightPixelLabel'><loc:Text ResourceId="Formeditor_Dialogs_WebResource_Size_Pixels" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
<div id="tab2" class="ms-crm-Tab" style="width:auto">
<div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.WebResource.Dependencies.Description" runat="server"/>
</div>
<span>&nbsp;</span>
<div id="divFieldSelect" width="100%">
</div>
</div>
</div>
</frm:DialogForm>
</div>
</body>
</html>
