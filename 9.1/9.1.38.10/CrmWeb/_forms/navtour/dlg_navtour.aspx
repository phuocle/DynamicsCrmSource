<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.NavTour" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-3.6.0.min.js"></script>
<style type="text/css">
.navTour .ms-crm-RefreshDialog-Warning {
top: 0 !important;
bottom: 0 !important;
right: 0 !important;
left: 0 !important;
}
.navTour .ms-crm-RefreshDialog-Main-HeaderLess {
bottom: 0px !important;
}
</style>
</head>
<script>
$addHandler(window, "load", init);
var isRtl = (window.LOCID_UI_DIR === "RTL");

function init() {
var mainImg = $("#navTourImg img");
mainImg.attr('src', Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navtournew/fre_art/" + window.LanguageName.toLowerCase() + "/fre-replacement_diagram-layers_640x344.png"));
mainImg.error(function () {
mainImg.attr('src', Mscrm.CrmUri.create("/_imgs/navtournew/fre_art/en-us/fre-replacement_diagram-layers_640x344.png"));
});
var closeImg = $("#navTourCloseButtonImage img");
closeImg.attr('src', Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navtournew/icon_x-close_13x13.png"));

if (isRtl) {
$(".navTourArrowIcon img").attr('src', Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navtournew/icon_open-new-window_rtl_27x27.png"));
}
else {
$(".navTourArrowIcon img").attr('src', Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navtournew/icon_open-new-window_27x27.png"));
}

$("#crmMasthead", window.parent.document).attr("aria-hidden", "true");
$("#crmTopBar", window.parent.document).attr("aria-hidden", "true");
$("#crmContentPanel", window.parent.document).attr("aria-hidden", "true");
$("#DlgHdBodyContainer").attr("aria-hidden", "false");

var firstInput = $("#buttonClose");
var lastInput = $("#dontShowAgainFirst");

$(".navTour").focus();


lastInput.on('keydown', function (e) {
if ((e.which === 9 && !e.shiftKey)) {
e.preventDefault();
firstInput.focus();
}
});


firstInput.on('keydown', function (e) {
if ((e.which === 9 && e.shiftKey)) {
e.preventDefault();
lastInput.focus();
}
});
}

function setSessionTourCookie() {
Mscrm.Utilities.setCookie("sessionNavTourCookie", "HideNavTour", null);
}

function setPersistentTourCookie() {
Mscrm.Utilities.setCookie("persistentNavTourCookie", "HideNavTour", 60 * 24 * 365 * 100);
}

function close() {
manageTourCookie();
closeWindow();
}

function manageTourCookie()
{
removeAriaHiddenAttributes();
setSessionTourCookie();

if ($("#dontShowAgainFirst").is(':checked')) {
setPersistentTourCookie();
}
}

function removeAriaHiddenAttributes()
{
$("#crmMasthead", window.parent.document).removeAttr("aria-hidden");
$("#crmTopBar", window.parent.document).removeAttr("aria-hidden");
$("#crmContentPanel", window.parent.document).removeAttr("aria-hidden");
$("#DlgHdBodyContainer").removeAttr("aria-hidden");
}
</script>

<body class="navTour" role="dialog" aria-labelledby="navTourPages" onkeydown="if((new Sys.UI.DomEvent(event)).keyCode == 27){manageTourCookie();}">
<frm:DialogForm id="crmForm" runat="server">
<div id="navTourPages">
<div id="navTourHeader">
<div class="navTourTitle">
<div class="navTourTitleText"><loc:Text ResourceId="Web.NavTour.Window_Title_Carina" runat="server" /></div>
</div>
<div class="navTourClose">
<a class="navTourCloseButton" href="javascript:close();" id="buttonClose">
<div class="navTourButtonImage" id="navTourCloseButtonImage"><img alt="<loc:Text ResourceId='Button_Label_Close' runat='server'/>" src="/_imgs/NavTourNew/icon_x-close_13x13.png" unselectable="on"/></div>
</a>
</div>
</div>
<div id="navTourMainContent">
<div id="navTourImg"><img></div>
</div>
<div id="navTourLinks">
<div class="navTourLearningLinks">
<div class="navTourLearningLinksContainer">
<a class="navTourLearningLink" href="https://go.microsoft.com/fwlink/p/?LinkID=524443" target="_blank" rel="noopener noreferrer">
<div class="navTourArrowIcon displayInline" unselectable="on"><img></div>
<div class="navTourLearningLinkText navTourSmallText"><loc:Text ResourceId="Web.NavTour.Learning_Link" runat="server" /></div>
</a>
</div>
</div>
</div>
<div id="navTourFooter">
<div id="navTourFooterText" class="navTourSmallText">
<span><input type="checkbox" id="dontShowAgainFirst" class="ms-crm-CheckBox"/></span>
<label for="dontShowAgainFirst" id="navTourFooterLabel"><loc:Text ResourceId="Web.NavTour.DontShowAgain" encoding="none" runat="server" /></label>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
