<%@ Page Language="c#" Inherits="Microsoft.Crm.Mobile.Application.Pages.ClientEntityDeletePage" CodeBehind="Microsoft.Crm.Mobile.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Mobile.Application.Controls" Assembly="Microsoft.Crm.Mobile.Application.Components" %>
<html>
<head>
<% =HtmlToSetupNativeBridge %>
<cnt:MobileHeader runat="server" id="MobileHeader" />
</head>
<body class="main">
<form id="mobileform" class="mobileform" method="post" action="<% =Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(actionUrl) %>">
<div id="Content" runat="server" />
</form>
<% =HtmlToSetupCookieWhenHostedInNativeApp %>
</body>
</html>