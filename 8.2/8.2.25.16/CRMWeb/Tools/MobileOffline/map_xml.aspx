<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.ObjectModel" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<%
if (ConverterUtilities.IsMocaOfflineFeatureAvailable())
{
%>
<page id="0">
<title><loc:Text ResourceId="Homepage_MobileOffline" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="MobileOffline_SubArea_Description" runat="server"/></subtitle>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadMobileOfflineProfile, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="01">
<title><loc:Text ResourceId="MO_MobileOfflineProfile_Link_Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/MobileOfflineProfile_48.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.MobileOfflineProfile%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="mobileofflineprofile" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="MO_MobileOfflineProfile_Link_Description" runat="server"/></help>
</page>
<%
}
%>


<%

if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="02">
<title><loc:Text ResourceId="MobileOfflineProfile.SettingsPage.MobileOfflineSettings.Title" runat="server"/> </title>
<icon>/_imgs/MobileOfflineConfigurationSetting_48.png</icon>
<help><loc:Text ResourceId="MobileOfflineProfile.SettingsPage.MobileOfflineSettings.Title.Help" runat="server"/></help>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = <%= Microsoft.Crm.Application.Utility.DialogUtility.GetDialogWidth() %>;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx?selectedTab=15").toString(), dialogOptions, {}, null, null);</link>
</page>
<%
}
%>

<%
if (ShouldMobileOfflineProvisioningBeVisible())
{
%>		<page id="03">
<title><loc:Text ResourceId="Web.Tools.MobileOfflineProvisioning.Config.Title" runat="server"/></title>
<icon>/_imgs/mobileofflineconfiguration_48.png</icon>
<link inline="1">/_static/loading.htm</link>
<%
if (ShowUpdatedMobileOfflineProvisioningPage())
{
%>
<url> MobileOfflineProvisioningv1.aspx</url>
<%
}
else
{
%>
<url> MobileOfflineProvisioning.aspx</url>
<%
}
%>
<help><loc:Text ResourceId="Web.Tools.MobileOfflineProvisioning.Config.Title.Help" runat="server"/></help>
</page>
<%
}
else
{
%>
<page>
<title><loc:Text ResourceId="Web.Tools.MobileOfflineProvisioning.Config.Title" runat="server"/></title>
<icon>/_imgs/mobileofflineconfiguration_48.png</icon>
<donotshowlink>1</donotshowlink>
<help><%= GetMobileOfflineProvisioningMenuDescription()%></help>
</page>
<%
}
%>

</page>
<%
}
%>
