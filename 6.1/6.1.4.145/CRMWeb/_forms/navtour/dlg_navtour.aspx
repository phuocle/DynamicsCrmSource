<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Common.NavTour" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>

<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-1.11.3.min.js"></script>
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
var pageWidth;
var pageHeight;
var inAnimation;
var isRtl = (window.LOCID_UI_DIR === "RTL");
var currentPage = 1;

function init() {
pageWidth = $("#navTourPages").outerWidth();
pageHeight = $("#navTourPages").outerHeight();
$('.navTourPage').css({ width: pageWidth + "px", height: pageHeight + "px" });
$('.navTourPageMain').css({ height: (pageHeight - 85) + "px" });
$('.navTourPageFooter').css({ height: 85 + "px" });


$("#navTourPage2 .navTourPageContainer").hide();
$("#navTourPage3 .navTourPageContainer").hide();
$("#navTourPage4 .navTourPageContainer").hide();
$("#navTourPage5 .navTourPageContainer").hide();
$("#navTourPage6 .navTourPageContainer").hide();
$("#navTourPage7 .navTourPageContainer").hide();


if (isRtl)
{
$('.navTourButtonRightArrow').attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowLeft.png'));
$('.navTourButtonLeftArrow').attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowRight.png'));

$('.navTourButtonWhiteRightArrow').attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowLeft.png'));
$('.navTourButtonWhiteLeftArrow').attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowRight.png'));


$('.navTourRightButton a').hover(function () {
$('.navTourButtonRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowLeftHot.png'));
$('.navTourButtonWhiteRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowLeftHot.png'));
}, function () {
$('.navTourButtonRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowLeft.png'));
$('.navTourButtonWhiteRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowLeft.png'));
});

$('.navTourLeftButton a').hover(function () {
$('.navTourButtonLeftArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowRightHot.png'));
$('.navTourButtonWhiteLeftArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowRightHot.png'));
}, function () {
$('.navTourButtonLeftArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowRight.png'));
$('.navTourButtonWhiteLeftArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowRight.png'));
});
}
else
{
$('.navTourRightButton a').hover(function () {
$('.navTourButtonRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowRightHot.png'));
$('.navTourButtonWhiteRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowRightHot.png'));
}, function () {
$('.navTourButtonRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourArrowRight.png'));
$('.navTourButtonWhiteRightArrow', this).attr('src', Mscrm.CrmUri.create('/_imgs/NavTour/NavTourWhiteArrowRight.png'));
});

$('.navTourLeftButton a').hover(function () {
$('.navTourButtonLeftArrow', this).attr('src', '/_imgs/NavTour/NavTourArrowLeftHot.png');
$('.navTourButtonWhiteLeftArrow', this).attr('src', '/_imgs/NavTour/NavTourWhiteArrowLeftHot.png');
}, function () {
$('.navTourButtonLeftArrow', this).attr('src', '/_imgs/NavTour/NavTourArrowLeft.png');
$('.navTourButtonWhiteLeftArrow', this).attr('src', '/_imgs/NavTour/NavTourWhiteArrowLeft.png');
});
}
}

function goToPage(i) {
if (inAnimation) {
return;
}

inAnimation = true;
disableLinks();
var newMargin = "-" + (pageWidth * (i - 1)) + "px";
$("#navTourPage" + i + " .navTourPageContainer").show();
loadAnimation(i);

$("#navTourPagesView").animate(
getAnimatedProperty(newMargin),
500,
function () {
unloadAnimation(i - 1);
unloadAnimation(i + 1);
$("#navTourPage" + (i - 1) + " .navTourPageContainer").hide();
$("#navTourPage" + (i + 1) + " .navTourPageContainer").hide();
enableLinks(i);
currentPage = i;
inAnimation = false;
});
}

function getAnimatedProperty(newValue) {
if (isRtl) {
return { marginRight: newValue };
}
return { marginLeft: newValue };
}

function disableLinks() {
$("#navTourPagesView a").attr("disabled", "disabled");
}

function enableLinks(i) {
$("#navTourPagesView #navTourPage" + i + " a").removeAttr("disabled");
}

function loadAnimation(i)
{
var animationImg = $("#navTourPage" + i + " .navTourPageContentImage img");
if (animationImg) {
var imageName = "NavTourPage" + i + ".gif";
var animationImgSrc = Mscrm.CrmUri.create("/_imgs/NavTour/NavTourContent/" + window.LanguageName + "/" + imageName);
animationImg.attr('src', animationImgSrc);
animationImg.error(function () {
animationImg.attr('src',  Mscrm.CrmUri.create("/_imgs/NavTour/NavTourContent/en-US/" + imageName));
});
}
}

function unloadAnimation(i) {
var animationImg = $("#navTourPage" + i + " .navTourPageContentImage img");
if (animationImg) {
animationImg.attr('src', '');
}
}

function setSessionTourCookie() {
Mscrm.Utilities.setCookie("sessionNavTourCookie", "HideNavTour", null);
}

function setPersistentTourCookie() {
Mscrm.Utilities.setCookie("persistentNavTourCookie", "HideNavTour", 60 * 24 * 365 * 100);
}

function close() {
setSessionTourCookie();

if (currentPage == 1 && $("#dontShowAgainFirst").is(':checked')) {
setPersistentTourCookie();
}

if (currentPage == 7 && $("#dontShowAgainLast").is(':checked')) {
setPersistentTourCookie();
}

closeWindow();
}

function doneFirst() {
setSessionTourCookie();

if ($("#dontShowAgainFirst").is(':checked')) {
setPersistentTourCookie();
}

closeWindow();
}

function doneLast() {
setSessionTourCookie();

if ($("#dontShowAgainLast").is(':checked')) {
setPersistentTourCookie();
}

closeWindow();
}
</script>
<body class="navTour">
<frm:DialogForm id="crmForm" runat="server">
<div id="navTourPages">
<div id="navTourHeader">
<div class="navTourCrmLogo">
<div class="navTourCrmLogoImg" unselectable="on"><img src="/_imgs/NavBar/NavBarLogo.png" unselectable="on"></div>
<div class="navTourCrmLogoText"><loc:Text ResourceId="Web.NavTour.Window_Title" runat="server" /></div>
</div>
<div class="navTourClose">
<a class="navTourCloseButton" href="javascript:close();" id="buttonClose">
<div class="navTourButtonImage"><img src="/_imgs/NavTour/NavTourClose.png" unselectable="on"></div>
</a>
</div>
</div>
<div id="navTourPagesView">
<div id="navTourPage1" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header1" runat="server" />
</div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message1" encoding="none" runat="server" />
</div>
<div class="navTourPageContentText navTourSmallText">
<span style="vertical-align: top;"><input type="checkbox" id="dontShowAgainFirst" class="ms-crm-CheckBox"/></span>
<label for="dontShowAgainFirst"><loc:Text ResourceId="Web.NavTour.DontShowAgain" encoding="none" runat="server" /></label>
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
</div><div class="navTourPageIndicator">
</div><div class="navTourRightButton">
<div>
<a href="javascript:goToPage(2);" id="goToPage12">
<div class="navTourButtonText navTourWhiteText"><loc:Text ResourceId="Web.NavTour.GoButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonWhiteRightArrow" src="/_imgs/NavTour/NavTourWhiteArrowRight.png" unselectable="on"></div>
</a>
<a href="javascript:doneFirst();" id="buttonCancel">
<div class="navTourButtonText navTourSmallText navTourWhiteText"><loc:Text ResourceId="Web.NavTour.CancelButton" encoding="none" runat="server" /></div>
</a>
</div>
</div>
</div>
</div>
</div>
<div id="navTourPage2" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header2" runat="server" />
</div>
<div class="navTourPageContentImage"><img src="" unselectable="on"></div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message2" encoding="none" runat="server" />
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(1);" id="goToPage21">
<div class="navTourButtonImage"><img class="navTourButtonLeftArrow" src="/_imgs/NavTour/NavTourArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
<img src="/_imgs/NavTour/NavTourPageOn.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
</div><div class="navTourRightButton">
<a href="javascript:goToPage(3);" id="goToPage23">
<div class="navTourButtonText"><loc:Text ResourceId="Web.NavTour.NextButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonRightArrow" src="/_imgs/NavTour/NavTourArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
<div id="navTourPage3" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header3" runat="server" />
</div>
<div class="navTourPageContentImage"><img src="" unselectable="on"></div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message3" encoding="none" runat="server" />
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(2);" id="goToPage32">
<div class="navTourButtonImage"><img class="navTourButtonLeftArrow" src="/_imgs/NavTour/NavTourArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOn.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
</div><div class="navTourRightButton">
<a href="javascript:goToPage(4);" id="goToPage34">
<div class="navTourButtonText"><loc:Text ResourceId="Web.NavTour.NextButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonRightArrow" src="/_imgs/NavTour/NavTourArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
<div id="navTourPage4" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header4" runat="server" />
</div>
<div class="navTourPageContentImage"><img src="" unselectable="on"></div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message4" encoding="none" runat="server" />
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(3);" id="goToPage43">
<div class="navTourButtonImage"><img class="navTourButtonLeftArrow" src="/_imgs/NavTour/NavTourArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOn.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
</div><div class="navTourRightButton">
<a href="javascript:goToPage(5);" id="goToPage45">
<div class="navTourButtonText"><loc:Text ResourceId="Web.NavTour.NextButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonRightArrow" src="/_imgs/NavTour/NavTourArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
<div id="navTourPage5" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header5" runat="server" />
</div>
<div class="navTourPageContentImage"><img src="" unselectable="on"></div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message5" encoding="none" runat="server" />
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(4);" id="goToPage54">
<div class="navTourButtonImage"><img class="navTourButtonLeftArrow" src="/_imgs/NavTour/NavTourArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOn.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
</div><div class="navTourRightButton">
<a href="javascript:goToPage(6);" id="goToPage56">
<div class="navTourButtonText"><loc:Text ResourceId="Web.NavTour.NextButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonRightArrow" src="/_imgs/NavTour/NavTourArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
<div id="navTourPage6" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header6" runat="server" />
</div>
<div class="navTourPageContentImage"><img src="" unselectable="on"></div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message6" encoding="none" runat="server" />
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(5);" id="goToPage65">
<div class="navTourButtonImage"><img class="navTourButtonLeftArrow" src="/_imgs/NavTour/NavTourArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOn.png" unselectable="on">
<img src="/_imgs/NavTour/NavTourPageOff.png" unselectable="on">
</div><div class="navTourRightButton">
<a href="javascript:goToPage(7);" id="goToPage67">
<div class="navTourButtonText"><loc:Text ResourceId="Web.NavTour.NextButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonRightArrow" src="/_imgs/NavTour/NavTourArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
<div id="navTourPage7" class="navTourPage">
<div class="navTourPageContainer">
<div class="navTourPageMain">
<div class="navTourPageContent">
<div class="navTourPageContentHead">
<loc:Text ResourceId="Web.NavTour.Header7" runat="server" />
</div>
<div class="navTourPageContentText">
<loc:Text ResourceId="Web.NavTour.Message7" encoding="none" runat="server" />
</div>
<div class="navTourPageContentText navTourSmallText">
<span style="vertical-align: top;"><input type="checkbox" id="dontShowAgainLast" class="ms-crm-CheckBox" checked="checked"/></span>
<label for="dontShowAgainLast"><loc:Text ResourceId="Web.NavTour.DontShowAgain" encoding="none" runat="server" /></label>
</div>
</div>
<div class="navTourPageContentRightColumn">
<div class="navTourSmallHead navTourWhiteText"><loc:Text ResourceId="Web.NavTour.LinksGetStarted" encoding="none" runat="server" /></div>
<div class="navTourSmallText navTourWhiteText">
<a target="_blank" style="text-decoration:underline" href="http://go.microsoft.com/fwlink/?LinkID=311828">
<loc:text resourceid="Web.NavTour.LinkImportDataText" runat="server" />
</a>
</div>
<div class="navTourSmallText navTourWhiteText">
<a target="_blank" style="text-decoration:underline" href="http://go.microsoft.com/fwlink/?LinkID=311829">
<loc:text resourceid="Web.NavTour.LinkSetupOutlookText" runat="server" />
</a>
</div>
<div class="navTourSmallText navTourWhiteText">
<a target="_blank" style="text-decoration:underline" href="http://go.microsoft.com/fwlink/?LinkID=311832">
<loc:text resourceid="Web.NavTour.LinkCRMAdminGuideText" runat="server" />
</a>
</div>
<br />
<div class="navTourSmallHead navTourWhiteText"><loc:Text ResourceId="Web.NavTour.LinksHeader" encoding="none" runat="server" /></div>
<div class="navTourSmallText navTourWhiteText">
<a target="_blank" style="text-decoration:underline" href="http://go.microsoft.com/fwlink/?LinkID=311833">
<loc:text resourceid="Web.NavTour.CustomerCenterText" runat="server" />
</a>
</div>
</div>
</div>
<div class="navTourPageFooter">
<div class="navTourLeftButton">
<a href="javascript:goToPage(6);" id="goToPage76">
<div class="navTourButtonImage"><img class="navTourButtonWhiteLeftArrow" src="/_imgs/NavTour/NavTourWhiteArrowLeft.png" unselectable="on"></div>
</a>
</div><div class="navTourPageIndicator">
</div><div class="navTourRightButton">
<a href="javascript:doneLast();" id="buttonDone">
<div class="navTourButtonText navTourWhiteText"><loc:Text ResourceId="Web.NavTour.DoneButton" encoding="none" runat="server" /></div>
<div class="navTourButtonImage"><img class="navTourButtonWhiteRightArrow" src="/_imgs/NavTour/NavTourWhiteArrowRight.png" unselectable="on"></div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</frm:DialogForm>
</body>
</html>
