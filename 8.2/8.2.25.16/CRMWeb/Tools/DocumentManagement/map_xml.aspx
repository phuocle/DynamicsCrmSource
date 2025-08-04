<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DocumentManagement.MapXml" %>

<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>



<page id="0">
<title><loc:Text ID="Text1" ResourceId="DocumentManagement.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<sections>

<section>
<title><loc:Text ResourceId="DocumentManagement.RootPage.section.map_xml.aspx_title1" runat="server"/></title>

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
<link inline="0">safeWindowOpen("http://go.microsoft.com/fwlink/?LinkId=529447", 'InstallGrid', 'width=790, height=500, menubar=1, toolbar=1, status=1, scrollbars=1, resizable=1, location=1', true);</link>
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
/* Show this option
* 1. S2S feature is available (check on db-version)
* 2. FCB for S2S is not enabled (once FCB gets enabled, message shouldn't come)
* 3. Org is OSDP enabled - no message for CTP orgs
* 4. User has sufficient privliges
* 5. Not on IOS device (all the document mangement settings are not available for IOS)
*/
if (FeatureEnabledHelper.IsFeatureAvailable(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && !FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && SystemCustomizationSecurity.CheckS2SEnableDocumentPrivilegesForMenuItem())
{
%>
<page id="05">
<title><loc:Text ID="S2SUpgrade" ResourceId="Web.Tools.S2SUpgrade.SettingsPage.Wizard.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="S2SUpgrade.RootPage.SettingsOption.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/InstallCRMGrid_48.png</icon>
<help><loc:Text ResourceId="S2SUpgrade.RootPage.SettingsOption.Help" runat="server"/></help>
<link inline="0">Mscrm.S2SUpgradePageHelper.openS2SConfigurationSettings('2164dd44-6f89-430c-9c7b-abfa44320df0');</link>
</page>
<%
}
%>
<%
/* Show this option
* 1. S2S feature is available (check on db-version)
* 2. FCB for S2S is enabled
* 3. Org is OSDP enabled - no message for CTP orgs
* 4. User has sufficient privliges
* 5. Not on IOS device (all the document mangement settings are not available for IOS)
* 6. There are no active SharePoint Sites present
*/
IOrganizationSettings orgSettings = OrganizationCache.Instance().LookupEntry(UserInformation.Current.OrganizationId, UserInformation.Current);

if (FeatureEnabledHelper.IsFeatureAvailable(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && SystemCustomizationSecurity.CheckS2SEnableDocumentPrivilegesForMenuItem() && !IsActiveSitePresent() && !orgSettings.IsOneDriveEnabled)
{
%>
<page id="05">
<title><loc:Text ID="S2SConfiguration" ResourceId="Web.Tools.S2SConfigure.SettingsPage.Wizard.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="S2SUpgrade.RootPage.SettingsOption.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/InstallCRMGrid_48.png</icon>
<help><loc:Text ResourceId="S2SConfigure.RootPage.SettingsOption.Help" runat="server"/></help>
<link inline="0"> Mscrm.S2SUpgradePageHelper.openS2SConfigurationSettings('896d4b4e-1321-4ad9-aa60-f2d3dd7c6388');</link>
</page>
<%
}
%>
<%
/* Show this option
* 1. FCB for S2S is enabled
* 2. Crm and Sharepoint is online
* 3. Outlook online
*/
if (Microsoft.Crm.Util.IsOneNoteIntegrationEnabled(UserInformation.Current))
{
%>
<page id="06">
<title><loc:Text ID="OneNoteIntegration" ResourceId="Web.Tools.OneNoteIntegration.SettingsPage.Wizard.Title" runat="server"/></title>
<icon>/_imgs/tools/OneNoteIntegration_48.png</icon>
<help><loc:Text ResourceId="OneNoteIntegration.RootPage.SettingsOption.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=9a435f76-7718-4f4d-9d4c-4391438b3451"), null, 520, 640, null);</link>
</page>
<%
}
%>
<%
/* Show this option
* 1. FCB for OneDrive for Business is enabled
*/
if (FeatureEnabledHelper.IsFeatureEnabled(FeatureControl.Current.Features.OneDriveIntegration.Name, UserInformation.Current) && FeatureEnabledHelper.IsFeatureAvailable(FeatureControl.Current.Features.SharePointS2S, UserInformation.Current) && SystemCustomizationSecurity.CheckS2SEnableDocumentPrivilegesForMenuItem())
{
%>
<page id="07">
<title><loc:Text ID="Text6" ResourceId="DocumentManagement.SettingsOption.EnableOneDriveforBusiness.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DocumentManagement.SettingsOption.EnableOneDriveforBusiness.SubTitle" runat="server"/></subtitle>
<icon>/_imgs/tools/OneDrive_Enable_48.png</icon>
<help><loc:Text ResourceId="DocumentManagement.SettingsOption.EnableOneDriveforBusiness.Help" runat="server"/></help>
<link inline="0">var options = new Xrm.DialogOptions();options.height = 270; options.width = Xrm.Page.context.client.getClient() === Xrm.ClientName.mobile ? 500 : 600;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/documentmanagement/onedrive/enableonedriveforbusinesssettings.aspx").toString(), options, null, null, null);</link>
</page>
<%
}


if (Microsoft.Crm.OfficeGraphUtil.IsOfficeGraphIntegrationFeatureEnabled(UserInformation.Current) || Microsoft.Crm.OfficeGraphUtil.IsOfficeGraphIntegrationUsingGraphApiFeatureEnabled(UserInformation.Current))
{
%>
<page id="08">
<title><loc:Text ID="Text4" ResourceId="DocumentManagement.SettingsArea.OfficeGraphIntegrationSettings.Title" runat="server"/></title>
<%
if (!Microsoft.Crm.Security.User.Current.UseImageStrips)
{
%>
<icon>/_imgs/tools/OfficeGraphIntegration_HC_48.png</icon>
<%
}
else {
%>
<icon>/_imgs/tools/OfficeGraphIntegration_48.png</icon>
<%
}
%>
<help><loc:Text ResourceId="DocumentManagement.SettingsArea.OfficeGraphIntegrationSettings.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=5e74afb2-ed6d-41d3-8700-b98365841732"), null, 520, 530, null);</link>
</page>
<%
}
%>
<%
/* Show this option if FCB for Recommended document feature is enabled
* TODO
*1. Icon
*/
if (Microsoft.Crm.DocumentRecommendationUtil.ShouldDocumentRecommendationsBeVisible(UserInformation.Current) && SystemCustomizationSecurity.CheckEnableDocumentRecommendationPrivileges())
{
%>
<page id="09">
<title><loc:Text ID="Text3" ResourceId="DocumentManagement.SettingsOption.EnableDocumentRecommendations.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DocumentManagement.SettingsOption.EnableDocumentRecommendations.SubTitle" runat="server"/></subtitle>
<%
if (!Microsoft.Crm.Security.User.Current.UseImageStrips)
{
%>
<icon>/_imgs/tools/RecommendedDocuments_HC_48.png</icon>
<%
}
else {
%>
<icon>/_imgs/tools/RecommendedDocuments_48.png</icon>
<%
}
%>
<help><loc:Text ResourceId="DocumentManagement.SettingsOption.EnableDocumentRecommendations.Help" runat="server"/></help>
<link inline="1">/_static/loading.htm</link>
<url>../documentmanagement/DocumentRecommendation/DocumentRecommendationConfiguration.aspx</url>
</page>
<%
}
%>
</section>

<%
/* Show this option
* 1. FCB for OneDrive for Business is enabled
*/
if (Microsoft.Crm.Util.IsOneDriveIntegrationEnabled(UserInformation.Current))
{
%>
<section>
<title><loc:Text ResourceId="DocumentManagement.RootPage.section.map_xml.aspx_title2" runat="server"/></title>
<page id="10">
<title><loc:Text ID="Text2" ResourceId="DocumentManagement.SettingsOption.OneDriveforBusiness.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DocumentManagement.SettingsOption.OneDriveforBusiness.SubTitle" runat="server"/></subtitle>
<icon>/_imgs/tools/OneDriveforBusiness_48.png</icon>
<help><loc:Text ResourceId="DocumentManagement.SettingsOption.OneDriveforBusiness.Help" runat="server"/></help>
<link inline="0">var options = new Xrm.DialogOptions();options.height = 230; options.width = Xrm.Page.context.client.getClient() === Xrm.ClientName.mobile ? 500 : 660;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/documentmanagement/onedrive/OneDriveforBusinessSettings.aspx").toString(), options, null, null, null);</link>
</page>
</section>
<%
}
%>
</sections>
</page>

