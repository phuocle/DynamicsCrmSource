<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Partner" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="app" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<page id="0">
<title><loc:Text ResourceId="Web.Tools.ExternAppManagement.map_xml.aspx.title" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<sections>
<section>
<%	if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadChannelAccessProfile, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="01">
<title><loc:Text ResourceId="Web.Tools.ExternAppManagement.Profiles" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_44_channelaccessprofile.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ChannelAccessProfile %>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="channelaccessprofile" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ExternAppManagement.Profiles.Description" runat="server"/></help>
</page>
<%
}
%>

<%	if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadChannelAccessProfileRule, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="02">
<title><loc:Text ResourceId="Web.Tools.ExternAppManagement.ProfileRules" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_44_channelaccessprofilerule.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ChannelAccessProfileRule%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="channelaccessprofilerule" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ExternAppManagement.ProfileRules.Description" runat="server"/></help>
</page>
<%
}
%>

<%	if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadExternalParty, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="03">
<title><loc:Text ResourceId="Web.Tools.ExternAppManagement.ExternUsers" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_44_externalparty.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ExternalParty%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="externalparty" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ExternAppManagement.ExternUsers.Description" runat="server"/></help>
</page>
<%
}
%>

<%	if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadExternalParty, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<page id="04">
<title><loc:Text ResourceId="Web.Tools.ExternAppManagement.ExternalPartyItems" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_44_externalpartyitem.png</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ExternalPartyItem%>">/_static/loading.htm</link>
<url><app:FlatHomepageUrlControl EntityLogicalName="externalpartyitem" XmlEncode="true" runat="server" /></url>
<help><loc:Text ResourceId="Web.Tools.ExternAppManagement.ExternalPartyItem.Description" runat="server"/></help>
</page>
<%
}
%>
</section>
</sections>
</page>

