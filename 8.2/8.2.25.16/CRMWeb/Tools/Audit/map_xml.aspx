<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>

<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">
<title><loc:Text ResourceId="Audit.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>

<%
bool emptyPage = true;
%>



<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
emptyPage = false;
%>
<page id="01">
<title><loc:Text ResourceId="Audit.GlobalSettings.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="Audit.GlobalSettings.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_systemSettings.gif</icon>
<help><loc:Text ResourceId="Audit.GlobalSettings.Help" runat="server"/></help>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = <%= Microsoft.Crm.Application.Utility.DialogUtility.GetDialogWidth() %>;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx?selectedTab=8").toString(), dialogOptions, {}, null, null);</link>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckSolutionPrivileges() && SystemCustomizationSecurity.IsBaseLanguage())
{
emptyPage = false;
%>
<page id="02">
<title><loc:Text ResourceId="Audit.EntitySettings.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="Audit.EntitySettings.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/solution/CustomizeSystem.png</icon>
<link inline="0">openObj(7100, '<%=SolutionConstants.DefaultSolutionId.ToString("B") %>', 'def_category=<%=Microsoft.Crm.Application.Utility.Util.Entity%>', null, true, null);</link>
<help><loc:Text ResourceId="Audit.EntitySettings.Help" runat="server"/></help>
</page>
<%
}

%>





<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadAuditSummary, Microsoft.Crm.Application.Security.UserInformation.Current))
{
emptyPage = false;
%>
<page id="03">
<title><loc:Text ResourceId="Audit.SummaryView.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Audit.SummaryView.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/AuditingSummaryView_48.png</icon>
<help><loc:Text ResourceId="Audit.SummaryView.Help" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Audit%>">/_static/loading.htm</link>
<url>../audit/audit_summary.aspx</url>
</page>

<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadAuditPartitions, Microsoft.Crm.Application.Security.UserInformation.Current))
{
emptyPage = false;
%>
<page id="04">
<title><loc:Text ResourceId="Audit.LogManagement.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Audit.LogManagement.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/AuditLogManagement_48.png</icon>
<help><loc:Text ResourceId="Audit.LogManagement.Help" runat="server"/></help>
<link inline="1">/_static/loading.htm</link>
<url>../audit/audit_partitions.aspx</url>
</page>
<%
}
%>

<%
if (emptyPage == true)
{
%>
<subtitle><loc:Text ResourceId="Audit.AuditTab.NoLinksVisible" runat="server"/></subtitle>
<%
}
else
{
%>
<subtitle><loc:Text ResourceId="Audit.RootPage.Subtitle" runat="server"/></subtitle>
<%
}
%>

</page>

