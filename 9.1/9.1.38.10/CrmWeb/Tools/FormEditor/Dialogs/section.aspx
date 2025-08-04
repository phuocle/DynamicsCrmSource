<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.Section" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!Doctype html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title) %></title>
<script type="text/javascript" language="javascript">

var _oFormXml;
var _oSection;
var _type = -1;
var txtNameControl;
var descriptionControl;
var _showBar;
var _showBarRow;
var _showLabel;
var _lockSection;
var _txtName = null;
var _description = null;
var _divAvailabilitySection = null;
var _fieldLabelWidthSection = null;
var _fieldLabelPositionFieldSet = null;
var _fieldLabelAlignmentFieldSet = null;
var _layoutColumnsFieldSet = null;
var _chkAutoExpanding = null;
var _sectionHeightFieldSet = null;
var oArgs;
function OnLoad()
{
_showBar = $get('ShowBar');
_showBarRow = $get('showBarRow');
_showLabel = $get('ShowLabel');
_lockSection = $get('LockSection');
_txtName = $get('txtName');
_description = $get('Description');
_divAvailabilitySection = $get('divAvailabilitySection');
_fieldLabelWidthSection = $get('fieldLabelWidthSection');
_fieldLabelPositionFieldSet = $get('fieldLabelPositionFieldSet');
_fieldLabelAlignmentFieldSet = $get('fieldLabelAlignmentFieldSet');
_layoutColumnsFieldSet = $get('layoutColumnsFieldSet');
_sectionHeightFieldSet = $get('sectionHeightFieldSet');
_chkAutoExpanding = $get('chkAutoExpanding');
oArgs = getDialogArguments();
_oFormXml = oArgs.FormXml;

_oSection = oArgs.Section;
_type = oArgs.Type;

var bDisabled = (_oSection.SectionName.length > 0 );
if(oArgs.EditorType !== "formEditor")
{
$get("sectionNameRow").style.display = "none";
$get("sectionNameDesc").style.display = "none";
}

populateSecCols();
SetFieldJustificationAndPosition();

_showLabel.checked	= _oSection.ShowLabel;
_showBar.checked	= _oSection.ShowBar;
$get('chkVisible').checked = _oSection.Visible;


if (oArgs.AvailableForPhoneDisabled === true) {
$get('chkAvailable').disabled = true;
}
$get('chkAvailable').checked = _oSection.AvailableForPhone;
_txtName.value = _oSection.SectionName;
_lockSection.checked	= _oSection.LockSection;
if(_oSection.LabelWidth != null)
{
$get('labelWidth').value = Math.ceil(_oSection.LabelWidth);
}
else
{
$get('labelWidth').value = LOCID_CELL_LABELWIDTH_DEFAULT;
}

var oLabels	= _oSection.Labels;

if (oLabels && oLabels[0] != null)
{
_description.value			= oLabels[0].Description;
}
else
{
_description.value = oArgs.SecName;
_description.disabled = true;

_showLabel.checked = false;
_showLabel.disabled = true;
_showBar.checked = false;
_showBar.disabled = true;
$get('nameSection').style.display = 'none';
$get('divVisibilitySection').style.display = 'none';
_lockSection.checked	= true;
_lockSection.disabled = true;
}

SetLockSectionState();


if (_oSection.IsReferencePanelSection) {
_txtName.disabled = true;
Mscrm.FormControlInputBehavior.GetBehavior('rowHeight').set_dataValue(_oSection.RowHeight);
_chkAutoExpanding.checked = _oSection.AutoExpand;
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.ReferencePanelControl.Name, Microsoft.Crm.Application.Security.UserInformation.Current)) { %>
_chkAutoExpanding.disabled = true;
<% } %>
_layoutColumnsFieldSet.style.display = "none";

_showBarRow.style.display = "none";
_divAvailabilitySection.style.display = "none";
_fieldLabelWidthSection.style.display = "none";
_fieldLabelAlignmentFieldSet.style.display = "none";
_fieldLabelPositionFieldSet.style.display = "none";
}
else {
_sectionHeightFieldSet.style.display = "none";
}
}
function populateSecCols()
{
if(!IsNull(_oSection.Columns))
{
switch(_oSection.Columns.length)
{
case 1:
$get('rdColumnSpan1').checked = true;
break;
case 2:
$get('rdColumnSpan2').checked = true;
break;
case 3:
$get('rdColumnSpan3').checked = true;
break;
case 4:
$get('rdColumnSpan4').checked = true;
break;
}

enableDisableColumnControls();
}
}

function enableDisableColumnControls() {
if (FORM_TYPE == "quickCreate") {
$get('rdColumnSpan1').disabled = true;
$get('rdColumnSpan2').disabled = true;
$get('rdColumnSpan3').disabled = true;
$get('rdColumnSpan4').disabled = true;
}
}

function SetFieldJustificationAndPosition()
{

switch(_oSection.FieldJustification)
{
case "Left":
$get('Radio_Just_Left').checked = true;
break;
case "Right":
$get('Radio_Just_Right').checked = true;
break;
case "Center":
$get('Radio_Just_Center').checked = true;
break;
default:
LOCID_UI_DIR=="RTL" ? $get('Radio_Just_Right').checked = true : $get('Radio_Just_Left').checked = true;
break;
}
switch(_oSection.FieldAlignment)
{
case "Left":
$get('Radio_Pos_Left').checked = true;
break;
case "Top":
$get('Radio_Pos_Top').checked = true;
break;
default:
$get('Radio_Pos_Left').checked = true;
break;
}

}


function BuildSectionType(sLayout,bDisabled)
{
var SectionLayout		= new Select();
SectionLayout.ID		= "SectionLayout";
SectionLayout.Selected	= sLayout;
SectionLayout.OnChange	= "UpdateColumnFormat();";
SectionLayout.AddOption(LOCID_VARIABLE_FIELD_WIDTH, "varwidth");
SectionLayout.AddOption(LOCID_VARIABLE_FIELD_HEIGHT, "varheight");
SectionLayout.Disabled = bDisabled;
$get('tdSectionType').innerHTML = SectionLayout.Render();
}

function UpdateColumnFormat(sColumns,bDisabled)
{
if ($get('SectionLayout').value == "varwidth")
{
Span[2].checked	= true;
Span[2].defaultChecked	= true;
for(var i = 0 ; i < Span.length ; i++)
{
Span[i].disabled = true;
}
}
else
{
for(var i = 0 ; i < Span.length ; i++)
{
Span[i].disabled = false;
}

if(sColumns)
{
$get("Col_" + sColumns).checked = true;
$get("Col_" + sColumns).defaultChecked = true;
}
}
}

function applychanges()
{
descriptionControl = Mscrm.FormControlInputBehavior.GetBehavior("Description");
descriptionControl.set_dataValue(TrimSpaces(descriptionControl.get_dataValue()));
if (isNullOrEmptyString(descriptionControl.get_dataValue()))
{
alert(LOCID_ID_EMPTY_SECTION_LABEL);
descriptionControl.get_element().select();
return;
}

txtNameControl = Mscrm.FormControlInputBehavior.GetBehavior("txtName");

if (isNullOrEmptyString(txtNameControl.get_dataValue())) {
alert(LOCID_ENTER_SECTION_NAME);
txtNameControl.get_element().select();
return;
}

var sSectionId = _oSection.SectionId;
if (sSectionId == null || sSectionId.length == 0)
{
sSectionId = GetGuid();
}

if(!IsNull(_oSection.Labels) && !IsNull(_oSection.Labels[0]))
{
if (!IsSectionNameUnique(txtNameControl.get_dataValue(),sSectionId,_oFormXml)) {
alert(LOCID_ID_IN_USE);
txtNameControl.get_element().select();
return;
}
}

var columns = getSelectedSecCols();


var sFieldLabJust = "Left";
if($get('Radio_Just_Left').checked)
sFieldLabJust = "Left";
if($get('Radio_Just_Right').checked)
sFieldLabJust = "Right";
if($get('Radio_Just_Center').checked)
sFieldLabJust = "Center";


var sFieldLabPos = "Left";
if($get('Radio_Pos_Left').checked)
sFieldLabPos = "Left";
if($get('Radio_Pos_Top').checked)
sFieldLabPos = "Top";

if ($get('labelWidth').value.length == 0)
{
alert( "<%=AppResourceManager.Default.GetString("Error_FormEditor.Dialogs.section_NoLabelWidth")%>" );
$get('labelWidth').select();
return;
}


var rowHeight = null;
var autoExpand = false;
if (_oSection.IsReferencePanelSection) {
if (IsNull(Mscrm.FormControlInputBehavior.GetBehavior('rowHeight').get_dataValue())) {
alert(LOCID_INVALID_ROWHEIGHT);
Mscrm.FormControlInputBehavior.GetBehavior('rowHeight').get_element().select();
return;
}
rowHeight = Mscrm.FormControlInputBehavior.GetBehavior('rowHeight').get_dataValue();
autoExpand = _chkAutoExpanding.checked;
}

var secObj	= new SectionObj(
null,
sSectionId,
_showLabel.checked,
_showBar.checked,
_lockSection.checked,
new Array(new LocalizedObj(descriptionControl.get_dataValue(), oArgs.LangCode)),
null,
columns,
$get('labelWidth').value,
sFieldLabJust,
sFieldLabPos,
_oSection.TabColumn,$get('chkVisible').checked,
$get('chkAvailable').checked,
txtNameControl.get_dataValue(),
_oSection.IsReferencePanelSection,
rowHeight,
autoExpand
);
Mscrm.Utilities.setReturnValue(secObj);
closeWindow();
}


function getSelectedSecCols()
{
var secCols = 2,i;
var columns = "";
if($get('rdColumnSpan1').checked)
secCols = 1;
if($get('rdColumnSpan2').checked)
secCols = 2;
if($get('rdColumnSpan3').checked)
secCols = 3;
if($get('rdColumnSpan4').checked)
secCols = 4;

for(i=0;i<secCols; i++)
{
columns += "1";
}
return columns;

}
function SetLockSectionState()
{
if (_lockSection.checked)
{
$get('tblLockSectionMessage').style.display	= "inline";
}
else
{
$get('tblLockSectionMessage').style.display	= "none";
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
<frm:DialogForm id="crmForm" runat="server" DialogTab="true">
<div style="width:83%;height:100%;position:relative;min-width:270px;margin-left:30px;margin-right:30px">
<div class="formEditor-TabBar" style="padding-top:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="display: inline;">
<fieldset id="nameSection" >
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_169" runat="server"/>&nbsp;</legend>
<div id="sectionNameDesc" class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_195" runat="server"/>
</div>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30" /><col width="70" />
<tr id="sectionNameRow">
<td class="ms-crm-Field-Required"><label for="txtName"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_200" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:TextBoxControl id="txtName" runat="server"/></td>
</tr>
<tr>
<td class="ms-crm-Field-Required"><label for="Description"><loc:Text ResourceId="Formeditor_Dialogs_Tab_Label_Caption" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:TextBoxControl id="Description" runat="server"/></td>
</tr>
</table>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="5"><col width="95"/>
<tr>
<td><ui:CheckBox id="ShowLabel" name="ShowLabel" class="checkbox" runat="server"/></td>
<td ><label id="showLabelID" for="ShowLabel"  runat="server"></label></td>
</tr>
<tr id ="showBarRow">
<td><ui:CheckBox id="ShowBar" name="ShowBar" runat="server"/></td>
<td><label id="ShowBarLabel" for="ShowBar"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_show_divider" runat="server"/></label></td>
</tr>
</table>
</fieldset>
<div id="fieldLabelWidthSection">
<br>
<fieldset>
<legend><loc:Text ResourceId="FormEditor.Dialogs.section.LabelWidth.Title" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc ms-crm-informationIcon">
<loc:Text ResourceId="FormEditor.Dialogs.section.LabelWidth.Description" runat="server"/>
</div>
<span class = "ms-crm-informationIcon">
<a href = "#" title = "<loc:Text ResourceId='FormEditor.Dialogs.section.LabelWidth.InformationIcon' runat='server'/>" >
<img src="/_imgs/relationshipintelligenceconfig/information.png" alt="Help on This Page"/>
</a>
</span>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="30" /><col width="70" />
<tr>
<td class="ms-crm-Field-Required"><label for="labelWidth"><loc:Text ResourceId="FormEditor.Dialogs.section.LabelWidth.Width" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><ui:Number id="labelWidth" runat="server"/></td>
</tr>
</table>
</fieldset>
</div>


<div id="divVisibilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col>

<tr>
<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Section_Visible_Section_Heading" runat="server"/></td>
</tr>

<tr>
<td><ui:CheckBox id="chkVisible" runat="server"/></td>
<td><label id="chkVisibleLabel" for="chkVisible"><loc:Text ResourceId="FormEditor_Dialogs_Visible_Section_CheckBox_Label" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>


<div id="divAvailabilitySection">
<br>
<fieldset>

<legend><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_Heading" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col>

<tr>
<td colspan="2"><loc:Text ResourceId="FormEditor_Dialogs_Section_Available_Section_Heading" runat="server"/></td>
</tr>

<tr >
<td><ui:CheckBox id="chkAvailable" runat="server"/></td>
<td><label id="chkAvailableLabel" for="chkAvailable"><loc:Text ResourceId="FormEditor_Dialogs_Available_Section_CheckBox_Label" runat="server"/></label></td>
</tr>

</table>
</fieldset>
</div>
<br>
<asp:PlaceHolder id="phCrmCheckBox" runat="server"/>
<label id="lockSectionLabel" for="LockSection" runat="server"></label>
<br>
<table id ="tblLockSectionMessage" style="display:none" cellpadding="0" width="100%" style="table-layout: fixed;">
<col width="25"><col>
<tr>
<td valign="top"><img alt="" src="/_imgs/ico_18_debug.gif"></td>
<td><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_236" runat="server"/></td>
</tr>
</table>
</div>
<div id="tab1" class="ms-crm-Tab ms-crm-TabContainer">
<fieldset id="layoutColumnsFieldSet">
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_273" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.section.aspx_275" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col/><col width="85" class="fieldprops_col_3"/>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan1" type="radio" class="radio"></td>
<td><label for="rdColumnSpan1"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_227" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr><td class="example">&nbsp;</tr>
<tr><td class="example">&nbsp;</tr>
<tr><td class="example">&nbsp;</tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan2" type="radio" class="radio"></td>
<td><label for="rdColumnSpan2"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_205" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" width="75" class="example">
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example" >&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan3" type="radio" class="radio"></td>
<td><label for="rdColumnSpan3"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_206" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" style="width:75px" class="example">
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example" >&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
</table></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>

<tr>

<td><input name="rdColumnSpan" id="rdColumnSpan4" type="radio" class="radio"></td>
<td><label for="rdColumnSpan4"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_207" runat="server"/></label></td>

<td><table cellpadding="0" cellspacing="4" style="width:75px" class="example">
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example" >&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
<tr><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td><td class="example">&nbsp;</td></tr>
</table></td>
</tr>
</table>
</fieldset>
<fieldset id="fieldLabelAlignmentFieldSet">
<legend><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.FieldJustification" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.FieldJustification.Select" runat="server"/>
</div>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col/><col width="110" class="formedit_section_col_3"/>
<tr>
<td><input id="Radio_Just_Left" type="radio" name="LabJust" class="radio"/></td>
<td><label for="Radio_Just_Left"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.Left.Caption" runat="server"/></label></td>
<td><IMG alt="" src="/_imgs/tools/label_leftalign.gif" /></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
<tr>
<td><input id="Radio_Just_Right" type="radio" name="LabJust" class="radio"/></td>
<td><label for="Radio_Just_Right"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.Right.Caption" runat="server"/></label></td>
<td><IMG alt="" src="/_imgs/tools/label_rtalign.gif" /></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
<tr>
<td><input id="Radio_Just_Center"  type="radio" name="LabJust" class="radio"/></td>
<td><label for="Radio_Just_Center"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.Center.Caption" runat="server"/></label></td>
<td><IMG alt="" src="/_imgs/tools/label_centeralign.gif" /></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
</table>
</fieldset>
<fieldset id="fieldLabelPositionFieldSet">
<legend><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.FieldPosition" runat="server"/>&nbsp;</legend>
<div class="ms-crm-Dialog-Desc">
<loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.FieldPosition.Select" runat="server"/>
</div>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"/><col/><col width="110" class="formedit_section_col_3"/>
<tr>
<td><input id="Radio_Pos_Left"  type="radio" name="LabPos" class="radio"/></td>
<td><label for="Radio_Pos_Left"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.Side.Caption" runat="server"/></label></td>
<td><IMG alt="" src="/_imgs/tools/field_positionleft.gif" /></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
<tr>
<td><input id="Radio_Pos_Top"  type="radio"  name="LabPos" class="radio"/></td>
<td><label for="Radio_Pos_Top"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.Top.Caption" runat="server"/></label></td>
<td><IMG alt="" src="/_imgs/tools/field_positiontop.gif" /></td>
</tr>
<tr>
<td colspan="3" style="height:10px"></td>
</tr>
</table>
</fieldset>
<fieldset id="sectionHeightFieldSet">

<legend><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.LayoutHeight" runat="server"/>&nbsp;</legend>

<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15"><col width="105"><col>
<tr>
<td colspan="3"><loc:Text ResourceId="Tools.FormEditor.Dialogs.SecPropDialog.RowHeightDesc" runat="server"/></td>
</tr>

<tr>
<td colspan="2"><label for="rowHeight"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_242" runat="server"/></label></td>
<td><ui:Number id="rowHeight" runat="server"/></td>
</tr>

<tr id="trAutoExpanding" >
<td><ui:CheckBox id="chkAutoExpanding" runat="server"/></td>
<td colspan="2"><label id="chkAutoExpandingLabel" for="chkAutoExpanding"><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.iframe.aspx_245" runat="server"/></label></td>
</tr>
</table>
</fieldset>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
