<%@ Page Language="c#" Inherits="Microsoft.Crm.Mobile.Application.Pages.ClientEntityHomepage" CodeBehind="Microsoft.Crm.Mobile.Application.Pages.dll" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Mobile.Application.Controls" Assembly="Microsoft.Crm.Mobile.Application.Components" %>
<html>
<head>
<% =HtmlToSetupNativeBridge %>
<cnt:MobileHeader runat="server" id="MobileHeader" />
</head>
<body class="main">
<div id="LogoArea" runat="server"></div>
<div id="Content" runat="server" />
<cnt:CommandBar runat="server" id="MobileCommandBar" />
<div id="MobileNavigationContainer" runat="server" class="mobileNavigationContainer hideContainer">
<button id="MobileNavigationBackButton" runat="server" class="mobileNavigationButton"/>
</div>
<% =HtmlToSetupCookieWhenHostedInNativeApp %>
<script type="text/javascript">
attachWindowOnBeforeUnload(function () { });
attachWindowOnUnload(function () { });
window.FinishPerceivedPageLoad = new Date().getTime();
Sys.Application.add_init(function () {
window.FinishCompletePageLoad = new Date().getTime();
});
$("#MobileNavigationBackButton").on("click", backButtonClicked);
function backButtonClicked() {
if ($(".mobileNavigationContainer.clicked").size() > 0) {
window.history.back();
} else {
Mscrm.CommandFactory.get_instance().toggleSeachPane();
}
}
</script>
</body>
</html>