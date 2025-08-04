<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>

<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Web.Tools.AdminSecurity" %>
<%@ Import Namespace="Microsoft.Crm.BusinessEntities" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Import Namespace="Microsoft.Crm.Caching" %>
<%@ Import Namespace="Microsoft.Crm.Application.Security" %>
<%@ Import Namespace="Microsoft.Crm.Metadata" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">
<title><loc:Text ResourceId="Security.RootPage.Title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Web.Tools.map_xml.aspx_6" runat="server"/></subtitle>

<%

if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadUser, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="06">
<title><loc:Text ResourceId="NamePlural_User" runat="server"/></title>
<icon>/_imgs/tools/ico_user.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.SystemUser%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="systemuser" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_46" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadTeam, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="07">
<title><loc:Text ResourceId="NamePlural_Team" runat="server"/></title>
<icon>/_imgs/tools/ico_team.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.Team%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="team" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_69" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadNewsArticle, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="01">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_79" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_security_role.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.Role%>">/_static/loading.htm</link>
<url>../business/home_role.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_82" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadBusinessUnit, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="02">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_29" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_business.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.BusinessUnit%>">/_static/loading.htm</link>
<url>../business/home_biz.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_32" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadFieldSecurityProfile, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="05">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_83" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_fieldSecurityProfile.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.FieldSecurityProfile%>">/_static/loading.htm</link>
<url>../business/home_fieldSecurityProfile.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_84" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadPosition, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="08">
<title><loc:Text ResourceId="Web.Tools.HSMConfiguration.Config.Title" runat="server" /></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/HierarchyModelingConfig_48.fw.png</icon>
<link inline="1">/_static/loading.htm</link>
<url>home_hsmconfiguration.aspx</url>
<help><loc:Text ResourceId="Web.Tools.HSMConfiguration.Config.Title.Help" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadPosition, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>

<page id="04">
<title><loc:Text ResourceId="NamePlural_Position" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/position_48.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.Position%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="position" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_50" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadCustomization, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="03">
<title><loc:Text ResourceId="NamePlural_TeamTemplate" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_team.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Extensibility.EntityNames.TeamTemplate%>">/_static/loading.htm</link>
<url>../business/home_teamtemplate.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_85" runat="server"/></help>
</page>
<%
}
%>
</page>