<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">
<title><loc:Text ResourceId="DataManagement.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.RootPage.Subtitle" runat="server"/></subtitle>


<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="01">
<title><loc:Text ResourceId="DataManagement.DeDupePreferencesPage.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DataManagement.DeDupePreferencesPage.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/dedupe_settings.gif</icon>
<help><loc:Text ResourceId="DataManagement.DeDupePreferencesPage.Help" runat="server"/></help>
<link inline="0">openStdDlg(Mscrm.CrmUri.create('/tools/duplicatedetection/duplicatedetectionsettings/duplicatedetectionsettings.aspx'),null,540,450,true,true);</link>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadDuplicateRule, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="02">
<title><loc:Text ResourceId="DataManagement.ManageRulesPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.ManageRulesPage.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/dedupe_rules.gif</icon>
<help><loc:Text ResourceId="DataManagement.ManageRulesPage.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.DuplicateRule%>">/_static/loading.htm</link>
<url>../duplicatedetection/duplicatedetectionrules/home_rules.aspx</url>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadAsyncOperation, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="03">
<title><loc:Text ResourceId="DataManagement.DuplicateDetectionJobs.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.DuplicateDetectionJobs.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/dup_detect.gif</icon>
<help><loc:Text ResourceId="DataManagement.DuplicateDetectionJobs.Help" runat="server"/></help>
<link inline="1">/_static/loading.htm</link>
<url>../DuplicateDetection/SystemWideDuplicateDetection/home_duplicatedetectionjobs.aspx</url>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadAsyncOperation, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="05">
<title><loc:Text ResourceId="DataManagement.BulkDeletion.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.BulkDeletion.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_48_dmdelete.gif</icon>
<%
if (!Microsoft.Crm.Application.Utility.Util.IsLive())
{

%>
<help><loc:Text ResourceId="DataManagement.BulkDeletion.Help" runat="server"/></help>
<%
}
else
{
%>
<help><loc:Text ResourceId="Live.DataManagement.BulkDeletion.Help" runat="server"/></help>
<%
}
%>
<link inline="1">/_static/loading.htm</link>
<url>../bulkdelete/home_bulkDeletionJobs.aspx</url>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadImportMap, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="04">
<title><loc:Text ResourceId="DataManagement.ImportMaps.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.ImportMaps.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_48_dmimportmaps.gif</icon>
<help><loc:Text ResourceId="DataManagement.ImportMaps.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ImportMap%>">/_static/loading.htm</link>
<url>../managemaps/home_managemaps.aspx</url>
</page>

<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadImport, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="06">
<title><loc:Text ResourceId="DataManagement.Imports.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DataManagement.Imports.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/import_dm.gif</icon>
<help><loc:Text ResourceId="DataManagement.Imports.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ImportFile%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="importfile" XmlEncode="true" runat="server" /></url>
</page>

<%
if (!Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="07">
<title><loc:Text ResourceId="DataManagement.DownloadTemplate.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DataManagement.DownloadTemplate.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/template_data_import48.gif</icon>
<help><loc:Text ResourceId="DataManagement.DownloadTemplate.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create('/tools/importwizard/landingpage.aspx'),null,500,300,true);</link>
</page>
<%
}
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadOrganization, Microsoft.Crm.Application.Security.UserInformation.Current) && Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadImport, Microsoft.Crm.Sdk.PrivilegeDepth.Global, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="08">
<title><loc:Text ResourceId="DataManagement.SampleData.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DataManagement.SampleData.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/SampleData48.gif</icon>
<help><loc:Text ResourceId="DataManagement.SampleData.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create('/tools/importwizard/sampledata.aspx'),null,500,210,true);</link>
</page>
<%
}
%>

<%
if ((Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadOrganization, Microsoft.Crm.Application.Security.UserInformation.Current) &&
(Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadImport, Microsoft.Crm.Sdk.PrivilegeDepth.Global, Microsoft.Crm.Application.Security.UserInformation.Current))) &&
(Microsoft.Crm.Security.User.GetPrivilege(Privileges.ImportCustomization, Microsoft.Crm.Application.Security.UserInformation.Current)) &&
(Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateSolution, Microsoft.Crm.Application.Security.UserInformation.Current)) &&
((Microsoft.Crm.Security.Organization.GetSettings(Microsoft.Crm.Application.Security.UserInformation.Current).LanguageCode == 1033)))
{
%>
<page id="10">
<title><loc:Text ResourceId="DataManagement.InstallBusinessProcess.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="DataManagement.InstallBusinessProcess.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/Config_Workflow_48.png</icon>
<help><loc:Text ResourceId="DataManagement.InstallBusinessProcess.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create("/tools/importwizard/sampledata.aspx?installsoln=1"),null,500,210,true);</link>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadSqlEncryptionKey, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="09">
<title><loc:Text ResourceId="DataManagement.SqlEncryption.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="DataManagement.SqlEncryption.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/Encryption_48x48.png</icon>
<help><loc:Text ResourceId="DataManagement.SqlEncryption.Help" runat="server"/></help>
<link inline="0">openStdWin(Mscrm.CrmUri.create('/tools/sqlencryption/sqlencryption.aspx'),null,625,475,true);</link>
</page>
<%
}
%>

</page>
