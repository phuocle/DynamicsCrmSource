<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Controls.AppNavMapXmlPage"    %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.SystemCustomization" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<page id="0">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_139" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<subtitle><loc:Text ResourceId="Web.Tools.map_xml.aspx_140" runat="server"/></subtitle>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadArticleTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="01">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_144" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_kb_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.KbArticleTemplate%>">/_static/loading.htm</link>
<url>../KBTemplateManager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_147" runat="server"/></help>
</page>
<%
}
%>

<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadContractTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="02">
<title><loc:Text ResourceId="NamePlural_ContractTempl" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_contract_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.ContractTemplate%>">/_static/loading.htm</link>
<url>../ContractTypeManager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_135" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadEmailTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="03">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_170" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_email_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.Template%>">/_static/loading.htm</link>
<url>../emailtemplatemanager/home.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_173" runat="server"/></help>
</page>
<%
}
%>


<%
if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadMailMergeTemplate, Microsoft.Crm.Application.Security.UserInformation.Current) && !Microsoft.Crm.Util.IsIosDevice(Page.Request))
{
%>
<page id="04">
<title><loc:Text ResourceId="Web.Tools.map_xml.aspx_171" runat="server"/></title>
<showstagetitle>1</showstagetitle>
<icon>/_imgs/tools/ico_mailmerge_template.gif</icon>
<link inline="1" entitytype="<%=Microsoft.Crm.Application.Utility.EntityNames.MailMergeTemplate%>">/_static/loading.htm</link>
<url>../mailmerge/home_mailmergetemplate.aspx</url>
<help><loc:Text ResourceId="Web.Tools.map_xml.aspx_175" runat="server"/></help>
</page>
<%
}
%>

</page>
