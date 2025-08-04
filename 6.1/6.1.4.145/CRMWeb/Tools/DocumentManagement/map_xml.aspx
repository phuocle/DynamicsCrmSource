<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">
<title><loc:Text ID="Text1" ResourceId="DocumentManagement.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DocumentManagement.RootPage.Subtitle" runat="server"/></subtitle>


<%
if (SystemCustomizationSecurity.CheckEnableDocumentPrivileges() && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="01">
<title><loc:Text ID="DocumentMgmtSetting" ResourceId="DocumentManagement.RootPage.SettingsOption.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DocumentManagement.RootPage.SettingsOption.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/DocumentManagementSettings_48.png</icon>
<help><loc:Text ResourceId="DocumentManagement.RootPage.SettingsOption.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=2164dd44-6f89-430c-9c7b-abfa44320cf0"), null, 520, 530, null);</link>
</page>
<%
if (!FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current))
{
%>
<page id="02">
<title><loc:Text ID="InstallGridComponent" ResourceId="Ribbon.sharepointsite.MainTab.Actions.InstallGrid" runat="server"/></title>
<icon>/_imgs/tools/InstallCRMGrid_48.png</icon>
<help><loc:Text ResourceId="Ribbon.sharepointsite.MainTab.Actions.InstallGrid" runat="server"/></help>
<link inline="0">safeWindowOpen("http://go.microsoft.com/fwlink/?LinkId=390020", 'InstallGrid', 'width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1, location=1', true);</link>
</page>
<%
}
%>
<%
}
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSharePointSite, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="03">
<title><loc:Text ID="SharePointSites" ResourceId="DocumentManagement.SettingsArea.Sites.Title" runat="server"/></title>
<icon>/_imgs/tools/SharepointSites_48.png</icon>
<help><loc:Text ResourceId="DocumentManagement.SettingsArea.Sites.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.SharePointSite%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="sharepointsite" XmlEncode="true" runat="server" /></url>
</page>
<%
}
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSharePointDocumentLocation, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="04">
<title><loc:Text ID="SharePointDocumentLibraries" ResourceId="DocumentManagement.SettingsArea.DocumentLocations.Title" runat="server"/></title>
<icon>/_imgs/tools/SharepointLocations_48.png</icon>
<help><loc:Text ResourceId="DocumentManagement.SettingsArea.DocumentLocations.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.SharePointDocumentLocation%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="sharepointdocumentlocation" XmlEncode="true" runat="server" /></url>
</page>
<%
}
%>
<%
#if DEBUG
if (!FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && SystemCustomizationSecurity.CheckS2SEnableDocumentPrivileges() && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
#else
/* Show this option
* 1. S2S feature is available (check on db-version)
* 2. FCB for S2S is not enabled (once FCB gets enabled, message shouldn't come)
* 3. Org is OSDP enabled - no message for CTP orgs
* 4. User has sufficient privliges
* 5. Not on IOS device (all the document mangement settings are not available for IOS)
*/
if (FeatureEnabledHelper.IsFeatureAvailable(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && !FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && SystemCustomizationSecurity.CheckS2SEnableDocumentPrivileges() && !Microsoft.Crm.Util.IsIosDevice(Page.Request) && Microsoft.Crm.Application.Utility.Util.IsOsdpOrganization())
{
#endif
%>
<page id="05">
<title><loc:Text ID="S2SUpgrade" ResourceId="Web.Tools.S2SUpgrade.SettingsPage.Wizard.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="S2SUpgrade.RootPage.SettingsOption.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/InstallCRMGrid_48.png</icon>
<help><loc:Text ResourceId="S2SUpgrade.RootPage.SettingsOption.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=2164dd44-6f89-430c-9c7b-abfa44320df0"), null, 520, 530, null);</link>
</page>
<%
}
%>
</page>
