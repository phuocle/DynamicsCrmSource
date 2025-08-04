<!DOCTYPE html>

<%@ Page Language="C#" Inherits="Microsoft.Crm.Application.Pages.Common.TemplateTour" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html lang='<% = Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TwoLetterISOLanguageName %>'>
<head>
<cnt:appheader id="crmHeader" runat="server" />
</head>
<script>
function setPersistentTemplateTourCookie() {
Mscrm.Utilities.setCookie("persistentTemplateTourCookie", "HideTemplateTour", 60 * 24 * 365 * 100);
}
function close() {
closeWindow();
}
function initializeEvents() {
document.getElementById("imgTemplateTour").onkeypress = function () { if (event.which === 9) return; close() };
document.getElementById("imgTemplateTour").onkeydown = focusOnTab;
document.getElementById("buttonClose").onkeydown = focusOnTab;
setPersistentTemplateTourCookie();
}
function initializeStyles() {
if (IsOutlookClient()) {
document.getElementById("buttonClose").className = "hideCloseButton";
}
}
function focusOnTab(event) {

if(event.which !== 9) return;

if (event.target.id === "buttonClose" && event.shiftKey) {
event.preventDefault();
event.stopPropagation();
document.getElementById("imgTemplateTour").focus();
} else if (event.target.id === "imgTemplateTour" && !event.shiftKey) {
event.preventDefault();
event.stopPropagation();
document.getElementById("buttonClose").focus();
}
}
</script>
<body class="templateTour">
<frm:DialogForm id="crmForm" runat="server">
<div id="templateTourPage" class="templateTourPage">
<div id="templateTourPageHeader" class="templateTourPageHeader">
<a class="templateTourCloseButton" href="javascript:close();" id="buttonClose">
<img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" class="templateTourButtonImage" src="/_imgs/Office/close-icon_12x12.png" unselectable="on">
</a>
</div>
<div id="templateTourPageView" class="templateTourPageView">
<div class="templateTourPageContentHead">
<div class="templateTourPageContentHeadText" title="<loc:Text ResourceId='Web.TemplateTourPage.PageHeader' runat='server'/>" tabindex="0">
<loc:Text ResourceId="Web.TemplateTourPage.PageHeader" runat="server" />
</div>
</div>
<div class="templateTourPageContent">
<div class="templateTourImg">
<img id="TemplateTourImage" class="imgTemplateTour" src="/_imgs/Office/Template_Tour_411x304.png" alt="<loc:Text ResourceId='Web.TemplateTourPage.Alt_Text' runat='server'/>" runat="server" />
</div>
</div>
<div class="templateTourPageText">
<div id="templateTourPageContentText" class="templateTourPageContentText templateTourContentTextCommon" tabindex="0">
<label for="templateTourPageContentText">
<loc:Text ResourceId="Web.TemplateTourPage.PageContentText" Encoding="none" runat="server" />
</label>
</div>
</div>
</div>
<div id="templateTourPageTryGetIt" class="templateTourPageTryGetIt">
<a href="javascript:close();">
<span class="templateTourTryItOutSpan"><loc:Text ResourceId="Web.TemplateTourPage.TryItOut" runat="server" /></span>
<span class="templateTourArrowSpan"><img id="imgTemplateTour" class="imgTemplateTour" alt="<loc:Text ResourceId='Web.TemplateTourPage.TryItOut' runat='server'/>" src="<%= NextButtonArrowImage%>" unselectable="on" tabindex="0"></span>
</a>
</div>
</div>
</frm:DialogForm>
</body>
</html>
