<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.BusinessEntities" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Metadata" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">

<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_5" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Web.Tools.map_xml.aspx_6" runat="server"/></subtitle>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadNewsArticle, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="01">
<title><loc:Text ResourceId="NamePlural_NewsArticle" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_annoucement.gif</icon>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_190" runat="server"/></help>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.BusinessUnitNewsArticle%>">/_static/loading.htm</link>
<url>../NewsEditor/home.aspx</url>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>



<page id="02">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.AutoNumbering.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="SystemCustomization.SettingsPage.AutoNumbering.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_autoNumbering.gif</icon>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.AutoNumbering.Help" runat="server"/></help>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 380;dialogOptions.width = 700;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/autonumbering/dialogs/autonumbering.aspx").toString(), dialogOptions, null, null, null);</link>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadBusinessUnit, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="03">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_29" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_business.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.BusinessUnit%>">/_static/loading.htm</link>
<url>../business/home_biz.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_32" runat="server"/></help>
</page>
<%
}
%>


<%

if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="05">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.SystemSettings.Title" runat="server"/></title>
<subtitle><loc:Text ResourceId="SystemCustomization.SettingsPage.SystemSettings.Subtitle" runat="server"/></subtitle>
<icon>/_imgs/tools/ico_systemSettings.gif</icon>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.SystemSettings.Help" runat="server"/></help>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 600;dialogOptions.width = 900;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/systemsettings/dialogs/systemsettings.aspx").toString(), dialogOptions, {}, null, null);</link>

</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadRole, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="04">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_79" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_security_role.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Role%>">/_static/loading.htm</link>
<url>../business/home_role.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_82" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadFieldSecurityProfile, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="14">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_83" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_fieldSecurityProfile.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.FieldSecurityProfile%>">/_static/loading.htm</link>
<url>../business/home_fieldSecurityProfile.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_84" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadTeam, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="06">
<title><loc:Text ResourceId="NamePlural_Team" runat="server"/></title>
<icon>/_imgs/tools/ico_team.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Team%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="team" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_69" runat="server"/></help>
</page>
<%
}
%>


<%

if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadUser, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="07">
<title><loc:Text ResourceId="NamePlural_User" runat="server"/></title>
<icon>/_imgs/tools/ico_user.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.SystemUser%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="systemuser" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_46" runat="server"/></help>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckLanguageSettingsPrivileges())
{
%>
<page id="08">
<title><loc:Text ResourceId="NamePlural_Language" runat="server"/></title>
<icon>/_imgs/tools/ico_48_languages.gif</icon>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 380;dialogOptions.width = 700;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/MuiProvisioning/Dialogs/LangSelection.aspx").toString(), dialogOptions, null, null, null);</link>
<help><loc:Text ResourceId="Web.Tools.admin.map_xml.aspx_1" runat="server"/></help>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges())
{
%>
<page id="09">
<title><loc:Text ResourceId="SystemCustomization.SettingsPage.OrganizationSqmSetting.Title" runat="server"/></title>
<icon>/_imgs/tools/ico_PrivacyPreferences.gif</icon>
<link inline="0">var dialogOptions = new Xrm.DialogOptions();dialogOptions.height = 450;dialogOptions.width = 700;Xrm.Internal.openDialog(Mscrm.CrmUri.create("/tools/OrganizationSqmSetting/dialogs/sqmsettings.aspx").toString(), dialogOptions, null, null, null);</link>
<help><loc:Text ResourceId="SystemCustomization.SettingsPage.OrganizationSqmSetting.Help" runat="server"/></help>
</page>
<%
}
%>






<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges() &&
Microsoft.Crm.Application.Utility.Util.IsLive() && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="10">
<icon>/_imgs/tools/ico_48_billing.gif</icon>
<%
if (!Microsoft.Crm.Application.Utility.Util.IsOsdpOrganization())
{
%>
<title><loc:Text ResourceId="Web.Tools.admin.map_xml.aspx_4" runat="server"/></title>
<link inline="0">openStdDlg(Mscrm.CrmUri.create('https://billing.microsoft.com'),null,800,600,true);</link>
<help><loc:Text ResourceId="Web.Tools.admin.map_xml.aspx_5" runat="server"/></help>
<%
}
else
{
%>
<title><loc:Text ResourceId="System.AddOn.Title" runat="server"/></title>

<link inline="0">openStdWin(Mscrm.CrmUri.create(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(MSOnlineSubscriptionManagementUrl.ToString())%>),null,800,600,"scrollbars=1");</link>
<help><loc:Text ResourceId="System.BillingOsdp.Help" runat="server"/></help>
<%
}
%>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges() &&
Microsoft.Crm.Application.Utility.Util.IsOnPremise())
{
%>
<page id="11">
<title><loc:Text ResourceId="Web.Tools.admin.map_xml.aspx_6" runat="server"/></title>
<icon>/_imgs/tools/ico_48_produpdate.gif</icon>
<link inline="0">openStdDlg(Mscrm.CrmUri.create(<%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ProductUpdateUrl.ToString()) %>),null,800,600,true);</link>
<help><loc:Text ResourceId="Web.Tools.admin.map_xml.aspx_7" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Application.Utility.Util.IsLive() && (Microsoft.Crm.Security.User.Current.IsSupportUser || SystemCustomizationSecurity.CheckSystemSettingsPrivileges()))
{
%>
<page id="12">
<title><loc:Text ResourceId="System.Health.Title" runat="server"/></title>
<icon>/_imgs/tools/ico_syshealth.gif</icon>
<link inline="1">/_static/loading.htm</link>
<url>home_systemhealth.aspx</url>
<help><loc:Text ResourceId="System.Health.Help" runat="server"/></help>
</page>
<%
}
%>



<%
if (Microsoft.Crm.Application.Utility.Util.IsLive() && (Microsoft.Crm.Security.User.Current.IsSupportUser || SystemCustomizationSecurity.CheckSystemSettingsPrivileges()))
{
%>
<page id="13">
<icon>/_imgs/tools/ico_sysaddon.png</icon>
<link inline="1">/_static/loading.htm</link>
<%
if (!Microsoft.Crm.Application.Utility.Util.IsOsdpOrganization())
{
%>
<title><loc:Text ResourceId="System.AddOn.Title" runat="server"/></title>
<url>addon/systemaddons.aspx</url>
<help><loc:Text ResourceId="System.AddOn.Help" runat="server"/></help>
<%
}
else
{
%>
<title><loc:Text ResourceId="System.ResourceUsage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<url>resourceusage.aspx</url>
<help><loc:Text ResourceId="System.ResourceUsage.Help" runat="server"/></help>
<%
}
%>
</page>
<%
}
%>

<%
var yammerState = Microsoft.Crm.Common.Yammer.YammerState.Read(UserInformation.Current);

if (yammerState.IsYammerFeatureAvailable
&& ! Microsoft.Crm.Util.IsForOutlookClient()
&& yammerState.CanConfigureYammer)
{
%>
<page id="16">
<title><loc:Text ResourceId="Web.Tools.Yammer.Config.Title" runat="server" /></title>
<showstagetitle>0</showstagetitle>
<icon>/_imgs/tools/ico_45_yammer.png</icon>
<link inline="1">/_static/loading.htm</link>
<url>../Yammer/YammerConfiguration.aspx</url>
<help><loc:Text ResourceId="Web.Tools.Yammer.Config.Title.Help" runat="server"/></help>
</page>
<%
}
%>


<%
if (SystemCustomizationSecurity.CheckSystemSettingsPrivileges() &&
Microsoft.Crm.Application.Utility.Util.IsNetBreezeAvailable(Microsoft.Crm.Application.Security.UserInformation.Current) &&
UserUtility.IsSystemAdministrator)
{
%>
<page id="23">
<title><loc:Text ResourceId="Web.Tools.NetBreeze.Config.Title" runat="server"/></title>
<icon>/_imgs/tools/MS_Social_Listening_Icon_48.png</icon>
<link inline="1">/_static/loading.htm</link>
<url>../NetBreeze/NetBreezeConfiguration.aspx</url>
<help><loc:Text ResourceId="Web.Tools.NetBreeze.Config.Title.Help" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadCustomization, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="92">
<title><loc:Text ResourceId="NamePlural_TeamTemplate" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_team.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.TeamTemplate%>">/_static/loading.htm</link>
<url>../business/home_teamtemplate.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_85" runat="server"/></help>
</page>
<%
}
%>


<%
if (UserUtility.IsSystemAdministrator && !Microsoft.Crm.Application.Utility.Util.IsForOutlookClient()
&& FeatureControl.Current.Features.LeoServiceFeatures.IsAvailable(
OrganizationBuildVersionCache.Instance().LookupEntry(UserInformation.Current.OrganizationId, UserInformation.Current).CrmVersion))
{
%>
<page id="15">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_291" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_optionalfeatures.gif</icon>
<link inline="1">/_static/loading.htm</link>
<url>OptionalFeatures.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_292" runat="server"/></help>
</page>
<%
}
%>


</page>
