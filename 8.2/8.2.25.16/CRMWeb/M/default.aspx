<%@ Page Language="c#" Inherits="Microsoft.Crm.Mobile.Application.Pages.ClientHomepage" CodeBehind="Microsoft.Crm.Mobile.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Mobile.Application.Controls" Assembly="Microsoft.Crm.Mobile.Application.Components" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>
<% =HtmlToSetupNativeBridge %>
<cnt:MobileHeader runat="server" id="MobileHeader" />
</head>
<body class="main">
<div id="LogoArea" runat="server"></div>
<div id="Content" class = "defaultContent" runat="server" />
<% =HtmlToSetupCookieWhenHostedInNativeApp %>
<script>
window.FinishPerceivedPageLoad = new Date().getTime();
Sys.Application.add_init(function () {
window.FinishCompletePageLoad = new Date().getTime();
});
</script>
</body>
</html>


