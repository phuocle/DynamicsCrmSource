<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.NavigationLink" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="System.Globalization"%>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript">

var _linkName;
var _originalColor;
Sys.Application.add_load(OnLoad);
function OnLoad() {
var oArgs = getDialogArguments();
_linkName = $get('linkName');
populateNavLinkData(oArgs);
}

function applychanges() {
if (_linkName.value.length == 0) {
alert(LOCID_EMPTY_LINK_NAME);
_linkName.select();
_linkName.focus();
return;
}
var url = "";
if ($get('rdWebResource').checked) {
var webResourcesCtrl = Mscrm.FormControlInputBehavior.GetBehavior("webResources");
var webResourcesDataValue = webResourcesCtrl.get_dataValue();
if (!IsNull(webResourcesDataValue))
url = Mscrm.FormXmlUtils.webResourcePrefix + webResourcesDataValue[0].name;
}
else {
url = $get('externalUrl').value;
}
var icon = "";
var iconWebResourceCtrl = Mscrm.FormControlInputBehavior.GetBehavior("iconWebResource");
var iconWebResourceDataValue = iconWebResourceCtrl.get_dataValue();
if (iconWebResourceDataValue != null)
icon = Mscrm.FormXmlUtils.webResourcePrefix + iconWebResourceDataValue[0].name;
Mscrm.Utilities.setReturnValue(new Mscrm.NavigationLink(icon, url, _linkName.value));
closeWindow();
}
function cancel() {
closeWindow();
}
function populateNavLinkData(oArgs) {
_linkName.value = oArgs.displayName;


_linkName.focus();

_originalColor = $get('rdIconLabel').style.color;
var url = oArgs.url;
if (url.length > 0) {

if (Mscrm.FormControlInputBehavior.GetBehavior("webResources").get_dataValue() != null) {
$get('rdWebResource').checked = true;
onWrRadioClick();
}
else {
$get('rdExternalUrl').checked = true;
onExtUrlRadioClick();
$get('externalUrl').value = url;
}
}
else {
$get('rdWebResource').checked = true;
onWrRadioClick();
}
}
function onWrRadioClick() {
$get('rdExternalUrl').checked = false;
$get('externalUrl').disabled = true;
$get('labelExtUrl').disabled = true;
$get('labelExtUrl').style.color = "gray";
$get('webResources').disabled = false;
$get('labelwebResource').disabled = false;
$get('labelwebResource').style.color = _originalColor;
}

function onExtUrlRadioClick() {
$get('rdWebResource').checked = false;
$get('webResources').disabled = true;
$get('labelwebResource').disabled = true;
$get('labelwebResource').style.color = "gray";
$get('externalUrl').disabled = false;
$get('labelExtUrl').disabled = false;
$get('labelExtUrl').style.color = _originalColor;
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div style="width:100%;height:100%;position:relative;min-width:370px">
<div>
<fieldset>
<legend><loc:Text ResourceId="Web.Tools.FormEditor.Dialogs.field-text.aspx_173" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" height="100%" width="100%" style="table-layout: fixed;">
<col width="15%"></col>

<tr >
<td><label id="linkNameLabel for="linkName"><loc:Text ResourceId="Dlg_Update_Nav_Link_Name" runat="server"/><img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>"/></label></td>
<td colspan="2"><ui:TextBox id="linkName" MaxLength="255" runat="server"/></td>
</td>
</tr>


<tr >
<td><label for="rdIcon" id="rdIconLabel"><loc:Text ResourceId="Dlg_Update_Nav_Icon_Label" runat="server"/></label></td>
<td colspan="2"><sdk:LookupControl id="iconWebResource" DisableViewPicker="true" DefaultViewId="DCAC5DFC-2EFF-42b3-9A0D-AFF1577533EB" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</td>
</tr>
</table>
</fieldset>
</div>
<div>
<fieldset>
<legend><loc:Text ResourceId="Dlg_Update_Nav_Link_Url_Section_Label" runat="server"/>&nbsp;</legend>
<table cellpadding="0" cellspacing="5" height="100%" width="100%" style="table-layout: fixed;">
<col width="4%"/><col width="30%"/><col />

<tr >
<td><input name="rdWebResource" id="rdWebResource" type="radio" onclick="onWrRadioClick();" class="radio"></td>
<td><label for="rdWebResource" id="labelwebResource"><loc:Text ResourceId="Dlg_Add_Item_WebResource_Label" runat="server"/></label></td>
<td><sdk:LookupControl id="webResources" LookupBrowse="false" LookupStyle="single" runat="server" /></td>
</tr>


<tr >
<td><input name="rdExternalUrl" id="rdExternalUrl" type="radio" onclick="onExtUrlRadioClick();" class="radio"></td>
<td><label for="rdExternalUrl" id="labelExtUrl"><loc:Text ResourceId="Dlg_Add_Item_ExternalURL_Label" runat="server"/></label></td>
<td><ui:TextBox id="externalUrl" MaxLength="255" runat="server"/></td>
</tr>

</table>
</fieldset>
</div>
</div>
</frm:DialogForm>
</body>
</html>
