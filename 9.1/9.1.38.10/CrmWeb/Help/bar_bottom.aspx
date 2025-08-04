<!DOCTYPE HTML>
<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.HelpSystemBottomBar" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AnonymousHeader id="crmHeader" runat="server" />
</head>
<body>
<table style="width:100%;height:100%" cellspacing="0" cellpadding="0" style="table-layout:fixed;">
<col>
<tr style="height:26px">
<td onclick="top.document.getElementById('helpContents').src='<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncodeNoQuotes(copyrightFile))%>';" class="ms-crm-StatusBar-Copyright"><loc:Text ResourceId="Web.About.default.aspx_98" runat="server"/></td>
</tr>
</table>
</body>
</html>
