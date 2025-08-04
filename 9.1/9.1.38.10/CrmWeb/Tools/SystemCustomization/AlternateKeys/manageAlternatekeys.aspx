<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.SystemCustomization.AlternateKeys.ManageAlternateKeyPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!DOCTYPE html>
<html>



<head>

<link rel="shortcut icon" href="/pa_favicon.ico" />


<cnt:appheader id="crmHeader" runat="server" />
<script src="/_static/_common/scripts/jquery1.7.2.min.js"></script>
<script src="/_static/_common/scripts/jquery_ui_1.13.1.js"></script>
<script src="/_static/_common/scripts/CrmInternalUtility.js"></script>
<script type="text/javascript">
window.name = "alternateKeySettingspage";

Sys.Application.add_load(SettingsOnLoad);
function SettingsOnLoad() {
ConfigAlternateKeys();

<%
if (_mode == Mode.View)
{
%>
$get("txtKeyDisplayName").disabled = true;
$get("txtKeyName").disabled = true;
$get("btnOk").disabled = true;
<% } %>
}

function ConfigAlternateKeys() {
if (Mscrm.InternalUtilities.JSTypes.isNull(window.dialogArguments)) {
window.dialogArguments = {};
}
window.dialogArguments["valuesXml"] = Mscrm.SelectAlternateKey.createKeysAvailableFieldsXml(XUI.Xml.LoadXml(ATTRIBUTES_XML), 1);
window.dialogArguments["sSelectedValues"] = PAUSE_STATES;
window.dialogArguments["keyAttributesXml"] = Mscrm.SelectAlternateKey.createKeysSelectedFieldsXml(XUI.Xml.LoadXml(KEYS_XML), 1);
}

</script>
<style type="text/css">
#navBarContainer
{
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
float: right;
<% } else { %>
float: left;
<% } %>
width: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
}
#tdAreas
{
position: absolute;
top: 96px;
bottom: 24px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
left: 0px;
<% } else { %>
right: 0px;
left: <%= Microsoft.Crm.CrmEncodeDecode.CrmCssEncode(AppResourceManager.Default.GetString("DetailForm_Left_Navigation_Width")) + "px" %>;
<% } %>
}
#tabBarContainer
{
position: absolute;
top: 0px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 10px;
left: 7px;
<% } else { %>
right: 7px;
left: 10px;
<% } %>
height: 21px;
}
#tabsContent
{
position: absolute;
top: 21px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
right: 10px;
left: 7px;
<% } else { %>
right: 7px;
left: 10px;
<% } %>
bottom: 24px;
}
</style>
</head>



<body scroll="no">
<form name="frmReload" id="frmReloadId" action="" method="post" target="alternateKeySettingspage"></form>
<cnt:PowerAppsNavBar id="powerAppsNavBar" runat="server"/>
<div class="ms-crm-Form-Layout" style="position:fixed;top:48px;height:calc(100% - 48px);">
<div style="height:96px;">
<mnu:AppGenericMenuBar id="crmMenuBar" runat="server"/>
</div>
<div class="ms-crm-Form-Background">
<div id="navBarContainer" class="ms-crm-Form-LeftBar">
<cnt:AppNavigationBar id="crmNavBar" runat="server"/>
</div>
<div id="tdAreas">
<div id="areaForm" class="ms-crm-Form-Area-Customize ms-crm-absolutePosition">
<div id="divInformation" class="page ">
<div class="ms-crm-TabBar-Cell" id="tabBarContainer">



<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tabsContent">
<div class="ms-crm-IE7-Height-Fix-Dummy-Container">
<div id="tabGeneral" class="ms-crm-Tab">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td style="vertical-align: top" class="">
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="0">
<tr>
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<loc:text resourceid="SystemCustomization.AlternateKeys.General.Title" runat="server" />
</td>
</tr>
<tr>
<td>
<table width="100%" style="table-layout: fixed;" cellspacing="0" cellpadding="3">
<col style="width:100%" />
<col class="FormSection_WriteColumnHeaders_col" />
<tr class="param">
<td>
<table width="100%" border ="0">
<tr>
<td id="txtKeyDisplayNameLabel" class="ms-crm-Field-Required" nowrap valign="center" style="text-align:left;width:20%;padding:10px;">
<label for="txtKeyDisplayName">
<loc:Text ResourceId="SystemCustomization.AlternateKeys.General.Label.DisplayName" runat="server"/>
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
</td>
<td valign="center"  style="text-align:left;width:30%;padding:10px;">
<ui:textbox id="txtKeyDisplayName" onchange="onDisplayNameChange();" runat="server"/>
</td>
<td id="txtKeyNameLabel" class="ms-crm-Field-Required" nowrap valign="center" style="text-align:left;width:20%;padding:10px;">
<label for="txtKeyName">
<loc:Text ResourceId="SystemCustomization.AlternateKeys.General.Label.Name" runat="server"/>
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" />
</label>
</td>
<td valign="center"  style="text-align:left;width:30%;padding:10px;">
<table width="100%" cellspacing="0" cellpadding="0" dir="ltr">
<tr>
<td>
<%
if (_mode == Mode.Create)
{
%>
<div class="alternateKey_div_NamePrefix"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(CurrentSolutionContext.Prefix.ToLowerInvariant())%></div>
<%
}
%>
</td>
<td width="100%"><ui:textbox id="txtKeyName" runat="server"/></td>
</tr>
</table>
</td>
</tr>
<tr>
<td colspan="4">
<div id="divAlternateKeysFieldSelect" width="100%"></div>
</td>
</tr>
<tr>
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ) { %>
<td colspan="4" align="left">
<% } else { %>
<td colspan="4" align="right">
<% } %>
<ui:Button id="btnOk" runat="server" onclick="saveAlternateKeysAction(true)"/>
</td>
</tr>
<% if (Microsoft.Crm.Caching.FeatureEnabledHelper.IsFeatureEnabled(Microsoft.Crm.FeatureControl.Current.Features.SolutionSimplificationCheckbox, Microsoft.Crm.Application.Security.UserInformation.Current) == true && _isSolutionAware) { %>
<tr>
<td id="selectExportKeyEnabledLabel" class="ms-crm-Field-Normal" valign="center"  style="text-align:left;width:30%;padding:10px;"><label for="selectExportKeyEnabled">Export Key</label></td>
<td>
<ui:CheckBox id="selectExportKeyEnabled" runat="server" />
</td>
</tr>
<% } %>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>