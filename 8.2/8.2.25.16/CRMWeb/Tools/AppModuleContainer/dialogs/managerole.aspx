<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.AppModuleContainer.ManageRole" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader" />

<script type="text/javascript" language="javascript">

Mscrm.AppModuleRoleAssignment.orgName = "<%= orgName %>";
Mscrm.AppModuleRoleAssignment.isOnlineOrIfd = <%= isOnlineOrIfd.ToString().ToLower() %>;

Sys.Application.add_load(OnLoad);

function OnLoad() {
Mscrm.AppModuleRoleAssignment.onLoadDialog();
}

function handleView(o) {

var crmGrid = $find("crmGrid");
crmGrid.SetParameter("oId", o.value);
crmGrid.Refresh();
}


function applychanges() {
Mscrm.AppModuleRoleAssignment.showHideAppUrlWarning(false);
var appUrl = $P_CRM("#" + Mscrm.AppModuleRoleAssignmentHelper.appUrlTextBoxId).val();


if(!Mscrm.AppModuleRoleAssignment.validateAppUrl(appUrl))
{
Mscrm.AppModuleRoleAssignment.showHideAppUrlWarning(true);
}
else{

Mscrm.Utilities.setReturnValue(Mscrm.AppModuleRoleAssignment.onOkPress())
}
}
function cancel() {
closeWindow();
}

</script>
<style type="text/css">
DIV.ms-crm-RefreshDialog-Header-Title, TD.ms-crm-RefreshDialog-Error-Title {
font-size: 36px;
font-family: 'Segoe UI';
color: #262626;
font-weight: 400;
}

.ms-crm-RefreshDialog-Header {
padding-top: 20px;
}

.ms-crm-RefreshDialog-Header-Desc {
padding-top: 10px;
font-family: 'Segoe UI';
color: #666666;
line-height: 15px;
}

.ms-crm-RefreshDialog-Main {
top: 128px;
}

.ms-crm-RefreshDialog-Button {
height: 23px;
width: 70px;
}
</style>
</head>
<body>
<pre id="preDisplayConditionsXml" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(displayConditionsXml.ToString()) %></pre>
<pre id="preAppIdentifierId" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(appId.ToString()) %></pre>
<pre id="preAppUrlIdentifierId" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(appUrl.ToString())  %></pre>
<pre id="preAppComponentStateIdentifierId" style="display: none;"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(appComponentState.ToString())  %></pre>
<frm:DialogForm id="crmForm" runat="server">
<div style="height: 120px; top: 0px; position: absolute; width: 100%;">
<table cellpadding="1" cellspacing="0" height="100%" width="100%" style="table-layout: fixed;">
<col style="width: 5%" />
<col style="width: 44%" />
<col style="width: 50%" />
<tr style="height: 25px">
<td colspan="3";>
<table onwaiting="100%" role="tree">
<tr>
<td colspan="2">
<div id="appUrlText" class="managerole-appUrlLabel managerole-fontStyle">
<loc:Text ResourceId="AppDesigner.ApplicationURL" runat="server" />
</div>
</td>
<td>
<input name="appUrlTextBoxName" id="appUrlTextBox" type="text" class="textbox managerole-fontStyle managerole-appNameTextBox" maxlength="20">
<span id="appUrlWarningNode" style="display: none;">
<img src="/_imgs/imagestrips/transparent_spacer.gif" class="ms-crm-ImageStrip-inlineedit_warning" alt="Error" id="appUrl_warning">
</span>
</td>
</tr>
<tr>
<td colspan="2"></td>
<td>
<div id="appUrlLabel" for="appUrlTextBoxName" class="managerole-URLText managerole-fontStyle managerole-AppURLTextWrap" aria-readonly="true">
</div>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="3">
<div id="roleslbl" class="managerole-rolelabel">
<loc:Text ResourceId="AppModuleLandingPage.ManageAppDialogRolesLbl" runat="server" />
</div>
</td>
</tr>
<tr>
<td>
<input name="visibleToEveryone" id="visibleToEveryone" type="radio" onclick="Mscrm.AppModuleRoleAssignment.onClickVisibleToEveryone();" class="radio" tabindex="0"></td>
<td>
<label for="visibleToEveryone">
<loc:Text ResourceId="AppModuleLandingPage.ManageAppDialogAccessToAllRolesLabel" runat="server" />
</label>
</td>
</tr>
<tr>
<td>
<input name="visibleToSelectedRoles" id="visibleToSelectedRoles" type="radio" onclick="Mscrm.AppModuleRoleAssignment.onClickVisibleToSelectedRoles();" class="radio" tabindex="0"></td>
<td>
<label for="visibleToSelectedRoles">
<loc:Text ResourceId="AppModuleLandingPage.ManageAppDialogAccessToSelectedRolesLabel" runat="server" />
</label>
</td>
<td>
<table class="stdTable" cellpadding="0" cellspacing="0" id="filterSection" style="display: none">
<tr>
<td style="width: 55%">
<ui:Select id="selBusinessUnit" runat="server" onchange="handleView(this);" />
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<div class="managerole-Grid">
<![if IE 7]>
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<![endif]>
<cnt:AppGrid runat="server" id="crmGrid" IsGridFilteringEnabled="false" />
<![if IE 7]>
</div>
<![endif]>
</div>

</frm:DialogForm>
</body>
</html>