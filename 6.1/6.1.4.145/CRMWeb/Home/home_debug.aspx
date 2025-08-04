<%@ Page Inherits="Microsoft.Crm.Web.DebugInfo" Language="c#" %>

<%@ Import Namespace="Microsoft.Crm" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<!DOCTYPE HTML>
<html>
<cnt:appheader id="crmHeader" runat="server" />
<script language="JavaScript" type="text/javascript">

$addHandler(window, "load", PageOnLoad);
function PageOnLoad() {
try {
top.setNav("debug");
}
catch (e) { }

XUI.Html.SetText(document.getElementById("cpuClass"), window.navigator.cpuClass);
XUI.Html.SetText(document.getElementById("cookiesOn"), window.navigator.cookieEnabled);
XUI.Html.SetText(document.getElementById("platformInfo"), window.navigator.platform);
XUI.Html.SetText(document.getElementById("screenRes"), window.screen.width + "x" + window.screen.height);
XUI.Html.SetText(document.getElementById("screenColor"), window.screen.colorDepth + "-bit");

document.onselectstart = "";
_UI_TEXT_SELECTABLE = "1";
}

</script>
<style type="text/css">
div.SectionHeader
{
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
margin-bottom: 10px;
color: #992222;
}
table.info
{
background-color: #ffffff;
table-layout: fixed;
color: #000055;
border: 1px solid black;
width: 100%;
}

td.header
{
color: #ffffff;
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr=#9F9F9F, EndColorStr=#777777);
}

tr.header
{
font-weight: <%= WebUtility.GetFontResourceForStyle("General.Bold.font_weight") %>;
background-color: #ccccdf;
}
.divContent
{
padding-top: 16px;
border: #999999 1px solid;
position: absolute;
top: 50px;
bottom: 0px;
left: 0px;
right: 0px;
overflow: hidden;
}
.divInnerContent
{
position: absolute;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
padding-left: 10px;
left: 0px;
right: 10px;
<% } else { %>
padding-right: 10px;
left: 10px;
right: 0px;
<% } %>
top: 0px;
bottom: 0px;
}
div.debugHeader
{
height: 50px;
width: 100%;
}
div.headerLeft
{
font-family: arial black;
font-size: <%= WebUtility.GetFontResourceAttribute("General.20px.font_size") %>;
color: #666699;
border-bottom: 1px solid #999999;
position:absolute;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
left:60px;
right:0px;
float:right;
<% } else { %>
left:0px;
right:60px;
float:left;
<% } %>
}
.divMain
{
position: absolute;
top: 15px;
bottom: 15px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
left: 0px;
right: 15px;
<% } else { %>
left: 15px;
right: 0px;
<% } %>
}
.home_debug_div_AdminPriv
{
position: absolute;
width: 100%;
}
.home_debug_td_ImgDebugInfo
{
width: 60px;
<% if ( Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft ){ %>
float: left;
<% } else { %>
float: right;
<% } %>
}
</style>
<body style="overflow: hidden" scroll="no">
<div class="divMain">
<div class="debugHeader">
<div class="headerLeft">
Microsoft<sup style="font-size: <%= WebUtility.GetFontResourceAttribute("General.11pt.font_size") %>;">&reg;</sup>
CRM -
<loc:text resourceid="Web.Home.home_debug.aspx_129" runat="server" />
</div>
<div class="home_debug_td_ImgDebugInfo">
<img alt="" src="/_imgs/debugInfo.gif" />
</div>
</div>
<div class="divContent">
<div class="divInnerContent">
<div class="home_debug_div_AdminPriv" style="padding: 0px;">
<%


if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.CreateBusinessUnit, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<div class="SectionHeader">
<loc:text resourceid="Web.Home.home_debug.aspx_126" runat="server" />
</div>
<table cellspacing="0" cellpadding="4" class="info">
<col width="200" style="background-color: #dddddd;">
<col class="home_debug_col_2">
<tr>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_131" runat="server" />
</td>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_132" runat="server" />
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_135" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(System.Environment.OSVersion.Version.ToString())%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_139" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(System.Environment.Version.ToString())%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_143" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(System.Environment.MachineName.ToString())%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_107" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Context.Server.MapPath("/").ToString())%>
</td>
</tr>
<%
if (ConfigDatabaseInfo.Length > 0)
{
%>
<tr class="header">
<td colspan="2">
<loc:text resourceid="DebugInformation.ConfigurationDatabase" runat="server" />
</td>
</tr>
<%
int i = 0;
while (i < ConfigDatabaseInfo.Length)
{
%>
<tr>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ConfigDatabaseInfo[i++])%>:
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(ConfigDatabaseInfo[i++])%>
</td>
</tr>
<%
}
}

if (DatabaseInfo.Length > 0)
{
%>
<tr class="header">
<td colspan="2">
<loc:text resourceid="Web.Home.home_debug.aspx_147" runat="server" />
</td>
</tr>
<%
int i = 0;
while (i < DatabaseInfo.Length)
{
%>
<tr>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DatabaseInfo[i++])%>:
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(DatabaseInfo[i++])%>
</td>
</tr>
<%
}
}
%>
<tr class="header">
<td colspan="2">
<loc:text resourceid="Web.Home.home_debug.aspx_156" runat="server" />
</td>
</tr>
<%
=RenderWebConfigSettings()
%>
<tr class="header">
<td colspan="2">
<loc:text resourceid="Web.Home.home_debug.aspx_157" runat="server" />
</td>
</tr>
<%
=RenderVersionNumbers()
%>
</table>
<%
}
%>
<br>
<br>
<div class="SectionHeader">
<loc:text resourceid="Web.Home.home_debug.aspx_210" runat="server" />
</div>
<table cellspacing="0" cellpadding="4" class="info">
<col width="200" style="background-color: #dddddd;">
<col class="home_debug_col_Header">
<tr>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_215" runat="server" />
</td>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_216" runat="server" />
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_219" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Request.Browser.Browser + " " + Request.Browser.Version)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_223" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Request.ServerVariables.Get("HTTP_USER_AGENT"))%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_227" runat="server" />
</td>
<td id="cpuClass">
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_231" runat="server" />
</td>
<td id="cookiesOn">
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_235" runat="server" />
</td>
<td id="platformInfo">
</td>
</tr>
<tr>
<td nowrap>
<loc:text resourceid="Web.Home.home_debug.aspx_239" runat="server" />
</td>
<td id="screenRes">
</td>
</tr>
<tr>
<td nowrap>
<loc:text resourceid="Web.Home.home_debug.aspx_243" runat="server" />
</td>
<td id="screenColor">
</td>
</tr>
</table>
<%


if (Microsoft.Crm.Security.User.GetPrivilege(Privileges.ReadUser, Microsoft.Crm.Application.Security.UserInformation.Current))
{
%>
<br>
<br>
<div class="SectionHeader">
<loc:text resourceid="Web.Home.home_debug.aspx_250" runat="server" />
</div>
<table cellspacing="0" cellpadding="4" class="info">
<col width="200" style="background-color: #dddddd;">
<col class="home_debug_col_SectionHeader">
<tr>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_255" runat="server" />
</td>
<td class="header">
<loc:text resourceid="Web.Home.home_debug.aspx_256" runat="server" />
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_259" runat="server" />
</td>
<td>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(Request.ServerVariables.Get("AUTH_USER"))%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_263" runat="server" />
</td>
<td id="businessName">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(businessName)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_267" runat="server" />
</td>
<td id="domainName">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(domainName)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_271" runat="server" />
</td>
<td id="userName">
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(userName)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_275" runat="server" />
</td>
<td id="orgId" style='font-family: Courier New'>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(orgId)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_279" runat="server" />
</td>
<td id="businessUnitId" style='font-family: Courier New'>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(businessUnitId)%>
</td>
</tr>
<tr>
<td>
<loc:text resourceid="Web.Home.home_debug.aspx_283" runat="server" />
</td>
<td id="userId" style='font-family: Courier New'>
<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(userId)%>
</td>
</tr>
</table>
<%
}
%>
</div>
</div>
</div>
</div>
</body>
</html>
