<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.FormProperties" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<title><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(title)%></title>
<script type="text/javascript" language="JavaScript">

var _objectTypeCode = "-1";
var parameterEditValues_listEditComponent;
var _maxWidthBehavior;
var _chkEnableImage;

function OnLoad()
{
if (IS_MOBILE == true) {
OnLoadMobile();
} else if (FORM_TYPE == 'quick' || FORM_TYPE == 'quickCreate' || FORM_TYPE == 'card') {
OnLoadQuick();
} else {
OnLoadDesktop();
}

var libraryLookup = Mscrm.FormControlInputBehavior.GetBehavior('libraryLookup');


if(libraryLookup != null)
{
libraryLookup.set_disableInlineLookup(true);
}
}

function OnLoadMobile() {
var oArgs = getDialogArguments();
txtFormName.value = oArgs.Name;
txtDescription.value = oArgs.Description;
}

function OnLoadQuick() {
var oArgs = getDialogArguments();
var oFormObj = oArgs.FormProperties;
Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(oFormObj.FormXml));
Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = oArgs.FieldsXml;
Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = oArgs.PropertiesXml;
_oFormXml = oFormObj.FormXml;
_oPropertiesXml = oArgs.PropertiesXml;
_oFieldsXml = oArgs.FieldsXml;
_objectTypeCode = oArgs.objectTypeCode;
_oDependencies = oFormObj.Dependencies;
txtFormName.value = oFormObj.Name;
txtDescription.value = oFormObj.Description;


_iFieldSelectWidth = 165;
_iFieldSelectHeight = 235;
_sFieldSelectLeftTitle = LOCID_AVAILABLE_FIELDS;
_sFieldSelectRightTitle = LOCID_DEPENDENT_FIELDS;
_bFieldSelectShowUp = false;
_bFieldSelectShowDown = false;

if (FORM_TYPE == "quickCreate") {
_maxWidthBehavior = Mscrm.FormControlInputBehavior.GetBehavior('maxWidthInPixel');
oFormObj.MaxWidth && _maxWidthBehavior.set_dataValue(parseInt(oFormObj.MaxWidth, 10));

chkEnableLeftNavItems.disabled = true;

DrawDependencyFieldSelect();

parameterEditValues_listEditComponent = $find('parameterEditValues');

Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(false, Mscrm.FormControlTypes.form, 'form', _objectTypeCode);
populateParameterList(XUI.Xml.SelectSingleNode(_oFormXml, "/entity/form/formparameters", null));
}
}

function OnLoadDesktop() {

var oArgs = getDialogArguments();
var oFormObj = oArgs.FormProperties;
parameterEditValues_listEditComponent = $find('parameterEditValues');
Mscrm.FormLibraryAndEventHandlerUtils.formXml = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString(oFormObj.FormXml));
Mscrm.FormLibraryAndEventHandlerUtils.fieldsXml = oArgs.FieldsXml;
Mscrm.FormLibraryAndEventHandlerUtils.propertiesXml = oArgs.PropertiesXml;
_oFormXml = oFormObj.FormXml;
_oPropertiesXml = oArgs.PropertiesXml;
_oFieldsXml = oArgs.FieldsXml;
_objectTypeCode = oArgs.objectTypeCode;
_oDependencies = oFormObj.Dependencies;
txtFormName.value = oFormObj.Name;
txtDescription.value = oFormObj.Description;
EnableDisableFormAssitantArea(oFormObj.FormAssistantExpanded, oFormObj.EnableFormAssistant);
chkEnableLeftNavItems.checked = oFormObj.FormLeftNavBar;
_maxWidthBehavior = Mscrm.FormControlInputBehavior.GetBehavior('maxWidthInPixel');
chkEnableImage.checked = oFormObj.ShowImage;
oFormObj.MaxWidth && _maxWidthBehavior.set_dataValue(parseInt(oFormObj.MaxWidth, 10));


_iFieldSelectWidth		= 165;
_iFieldSelectHeight		= 235;
_sFieldSelectLeftTitle	= LOCID_AVAILABLE_FIELDS;
_sFieldSelectRightTitle	= LOCID_DEPENDENT_FIELDS;
_bFieldSelectShowUp		= false;
_bFieldSelectShowDown	= false;
DrawDependencyFieldSelect();
Mscrm.FormLibraryAndEventHandlerUtils.onLoadControl(false, Mscrm.FormControlTypes.form, 'form', _objectTypeCode);
populateParameterList(XUI.Xml.SelectSingleNode(_oFormXml, "/entity/form/formparameters", null));


if (FORM_TYPE == "mainInteractionCentric") {
formAssistantAreaDiv.style.display = "none";
}
}

function EnableDisableFormAssitantArea(formAssistantExpanded,formAssistantEnabled)
{
switch (_objectTypeCode)
{
case Mscrm.EntityTypeCode.Workflow.toString():
case Mscrm.EntityTypeCode.Incident.toString():
case Mscrm.EntityTypeCode.ServiceAppointment.toString():
case Mscrm.EntityTypeCode.Product.toString():
$get("formAssistantArea").style.display = "";
chkExpandedByDefault.checked = formAssistantExpanded;
chkEnableFormAssistant.checked = formAssistantEnabled;
chkExpandedByDefault.disabled = (!chkEnableFormAssistant.checked);
break;
}

}

function EnableFormAssistantChecked()
{
if (!chkEnableFormAssistant.checked)
{
chkExpandedByDefault.setAttribute("disabled", "true");
}
else
{
chkExpandedByDefault.removeAttribute("disabled");
}
}


function applychanges()
{
if (txtFormName.value.length == 0) {
showErrorMessage(LOCID_FORM_NAME_EMPTY_MESSAGE, txtFormName);
return;
}
if (IS_MOBILE == true) {
OkForMobile();
} else if (FORM_TYPE == 'quick' || FORM_TYPE == 'quickCreate' || FORM_TYPE == 'card') {
OkForQuick();
} else {
if (IsNull(_maxWidthBehavior.get_dataValue())) {
showErrorMessage(LOCID_MAX_WIDTH_EMPTY_MESSAGE, maxWidthInPixel);
return;
}
OkForDesktop();
}

function showErrorMessage(msg, field) {
alert(msg);
field.select();
field.focus();
}
}

function OkForMobile() {

Mscrm.Utilities.setReturnValue(new FormObj(null, null, null, null, txtFormName.value, txtDescription.value, null));

closeWindow();
}

function OkForQuick() {
var sMaxWidth = 400;
var sDependsAry = new Array();

if (FORM_TYPE == "quickCreate") {
sMaxWidth = _maxWidthBehavior.get_dataValue().toString();


sDependsAry = GetReturnList();


Mscrm.FormPropertiesUtils.setUpdatedParameterXml(parameterEditValues_listEditComponent.get_xmlData(), Mscrm.FormLibraryAndEventHandlerUtils.formXml);
}

Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();


Mscrm.Utilities.setReturnValue(new FormObj(Mscrm.FormLibraryAndEventHandlerUtils.formXml, sDependsAry, null, null, txtFormName.value, txtDescription.value, null, sMaxWidth));
closeWindow();
}

function OkForDesktop() {

var sDependsAry	= new Array();
sDependsAry = GetReturnList();


Mscrm.FormPropertiesUtils.setUpdatedParameterXml(parameterEditValues_listEditComponent.get_xmlData(), Mscrm.FormLibraryAndEventHandlerUtils.formXml);
Mscrm.FormLibraryAndEventHandlerUtils.processLibraryXmlBeforeSave();

var expandedByDefault = null;
if (!IsNull(chkExpandedByDefault) && $get("formAssistantArea").style.display !== "none")
expandedByDefault = chkExpandedByDefault.checked;

var enabledByDefault = null;
if (!IsNull(chkEnableFormAssistant) && $get("formAssistantArea").style.display !== "none")
enabledByDefault = chkEnableFormAssistant.checked;

var sMaxWidth = _maxWidthBehavior.get_dataValue().toString();
Mscrm.Utilities.setReturnValue(new FormObj(
Mscrm.FormLibraryAndEventHandlerUtils.formXml,
sDependsAry,
expandedByDefault,
chkEnableLeftNavItems.checked,
txtFormName.value,
txtDescription.value,
enabledByDefault,
sMaxWidth,
chkEnableImage.checked
));
closeWindow();
}

function cancel()
{
closeWindow();
}

Sys.Application.add_load(OnLoad);
</script>
<style>
div.ms-crm-Tab
{
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






td.ms-crm-Picklist-Values
{
<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
text-align: right !important;
<% } else { %>
text-align: left !important;
<% } %>
}
</style>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server" style="height:100%">
<div style="width:100%;height:100%;position:relative">
<div  style="position:absolute;top:0px;left:0px;right:0px;bottom:42px;overflow-y:auto;">
<div id="dummyDiv" class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div style="width:100%;height:100%;position:relative;min-width:400px">
<div class="ms-crm-TabBar-Cell" style="padding-top:10px">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div style="vertical-align:top">
<div id="tab0" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto;" runat="server" >
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-picklist.aspx_315" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<tr>
<td >
<cnt:FormLibraryAndEventHandlerControl id="formLibraryControl" runat="server"/>
</td>
</tr>
<tr>
<td style="display:none"><sdk:LookupControl id="libraryLookup" DisableViewPicker="true" DefaultViewId="125A31CE-0F5E-4957-8AA3-7A10C0713886" LookupBrowse="false" LookupStyle="single" runat="server" />
</td>
</tr>
</table>
</fieldset>
</div>
<div id="tab1" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto" >
<fieldset>
<legend><loc:Text ResourceId="Dlg_Form_Properties_Name_Legend" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="110"/><col />

<tr>
<td><label for="txtFormName"><loc:Text ResourceId="Dlg_Form_Properties_Form_Name_Label" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:TextBoxControl id="txtFormName" runat="server"/></td>
</tr>
<tr>
<td style="height:105px;vertical-align:top"><label for="txtDescription"><loc:Text ResourceId="Dlg_Form_Properties_Form_Description" runat="server"/></label></td>
<td style="height:105px;"><sdk:TextAreaControl id="txtDescription" Height="100px" runat="server"/></td>
</tr>
</table>
</fieldset>
<div id="formAssistantAreaDiv" runat="server">
<fieldset id="formAssistantArea" style="display:none">
<legend><loc:Text ResourceId="RelatedInformation_Title" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px"><col width="65px"><col>

<tr>
<td><ui:CheckBox id="chkEnableFormAssistant" OnClick="EnableFormAssistantChecked()" runat="server"/></td>
<td colspan="2"><label id="chkEnableFormAssistantLabel" for="chkEnableFormAssistant"><loc:Text ResourceId="LabelFormEditorFormPropertiesEnableFormAssistant" runat="server"/></label></td>
</tr>

<tr>
<td><ui:CheckBox id="chkExpandedByDefault" runat="server"/></td>
<td colspan="2"><label id="chkExpandedByDefaultLabel" for="chkExpandedByDefault"><loc:Text ResourceId="LabelFormEditorFormPropertiesExpandFormAssistantByDefault" runat="server"/></label></td>
</tr>
</table>
</fieldset>


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.FormProperties.PageNavigation" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px" /><col/><col />

<tr>
<td><ui:CheckBox id="chkEnableLeftNavItems" runat="server"/></td>
<td colspan="2"><label id="chkEnableLeftNavLabel" for="chkEnableLeftNavItems"><loc:Text ResourceId="Web.Tools.FormEditor.FormProperties.NavItems" runat="server"/></label></td>
</tr>
</table>
</fieldset>


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.FormProperties.Image" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout: fixed;">
<col width="15px" /><col/><col />

<tr>
<td><ui:CheckBox id="chkEnableImage" runat="server"/></td>
<td colspan="2"><label id="chkEnableImageLabel" for="chkEnableImage"><loc:Text ResourceId="Web.Tools.FormEditor.FormProperties.ImageTitle" runat="server"/></label></td>
</tr>
</table>
</fieldset>


<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.FormProperties.Display" runat="server" />&nbsp;</legend>
<table cellpadding="0" cellspacing="5" width="100%" style="table-layout:fixed;">
<col width="110px" /><col />
<tr>
<td><label for="maxWidthInPixel"><loc:Text ResourceId="maxWidthInPixel" runat="server" /><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td><sdk:IntegerControl MinValue="400" Precision="0" id="maxWidthInPixel" runat="server" /></td>
</tr>
</table>
</fieldset>
</div>
</div>
<div id="tab2" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto" runat="server" >
<div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Dlg_Form_Properties_Parameters_Tab_Description" runat="server"/>
</div>
<span>&nbsp;</span>
<table cellpadding="0" cellspacing="5" width="60%" style="table-layout: fixed;">
<col />
<tr>
<td>
<div id="Parameters" style="background: #ffffff; height: 100%; width: 100%; border: 1px solid #6699cc; overflow-y: auto; overflow-x: auto;">
<table width="100%" cellspacing="0" cellpadding="0">
<col width="135px" />
<col />
<tr class="param">
<td colspan="2">
<app:ParameterListEdit id="parameterEditValues" runat="server" />
</td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</div>
<div id="tab3" class="ms-crm-Tab ms-crm-TabContainer" style="overflow-y:auto" runat="server">
<div class="ms-crm-Dialog-Desc" style="padding-bottom: 5px;">
<loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.FormProperties.Dependencies.Description" runat="server"/>
</div>
<span>&nbsp;</span>
<div id="divFieldSelect" width="100%">
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
