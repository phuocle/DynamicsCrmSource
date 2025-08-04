<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">
<title><loc:Text ResourceId="SocialMedia.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="SocialMedia.RootPage.SubTitle" runat="server"/></subtitle>


<%
if (SystemCustomizationSecurity.CheckEmailServerProfilePrivileges())
{
%>
<page id="01">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailServerProfile.Title" runat="server"/> </title>
<icon>/_imgs/ico_48_9605.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.EmailServerProfile%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="emailserverprofile" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailServerProfile.Detail" runat="server"/></help>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckMailboxPrivileges())
{
%>
<page id="02">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.Mailbox.Title" runat="server"/> </title>
<icon>/_imgs/ico_48_9606.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Mailbox%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="mailbox" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.Mailbox.Detail" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Application.Utility.Util.IsOnline() && SystemCustomizationSecurity.CheckEmailRouterMigrationPrivileges())
{
%>
<page id="03">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailMigration.Title" runat="server"/> </title>
<icon>/_imgs/ico_48_email_migration.gif</icon>
<%
if (Microsoft.Crm.Application.Utility.Util.IsIosDevice(System.Web.HttpContext.Current.Request))
{
%>
<link inline="0">alert("<%=Microsoft.Crm.Utility.AppResourceManager.Default.GetString("Web._common.error.unsupported.action")%>");</link>
<%
} else {
%>
<%
if (Microsoft.Crm.Application.Utility.Util.AllowCredentialsEntry(Microsoft.Crm.CrmHttpContext.Request.IsSecureConnection))
{
%>
<link inline="0">openStdDlg(Mscrm.CrmUri.create('/WebWizard/WizardContainer.aspx?WizardId=0BDF7230-A39C-4BA4-A5AF-9FE99F3EAC2F'),null,600,560,true, true,'maximize:no;minimize:yes');</link>
<%
} else {
%>
<link inline="0">alert("<%=Microsoft.Crm.Utility.AppResourceManager.Default.GetString("MigrationWizard.Migration.NotSupported.OnChannel")%>");</link>
<%
}
%>
<%
}
%>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailMigration.Detail" runat="server"/></help>
</page>
<%
}
%>


<%

if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="04">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailSettings.Title" runat="server"/> </title>
<icon>/_imgs/tools/ico_emailSettings.gif</icon>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.EmailSettings.Detail" runat="server"/></help>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = <%= Microsoft.Crm.Application.Utility.DialogUtility.GetDialogWidth() %>;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx?selectedTab=2").toString(), dialogOptions, {}, null, null);</link>
</page>
<%
}
%>


<%

if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="05">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.ServerSideSyncPerformance.Title" runat="server"/> </title>
<icon>/_imgs/tools/ServerSideSyncPerformance_48.png</icon>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.ServerSideSyncPerformance.Detail" runat="server"/></help>
<link inline="1">/_static/loading.htm</link>
<url><%=Microsoft.Crm.Application.Utility.CrmUri.Create("/workplace/home_dashboards.aspx?dashboardId=c378c42a-ed4d-4f60-9d17-f71b8bfb91df&amp;dashboardType=0&amp;sitemappath=SFA%7cMyWork%7cnav_dashboards", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()%></url>
</page>
<%
}
%>
</page>
