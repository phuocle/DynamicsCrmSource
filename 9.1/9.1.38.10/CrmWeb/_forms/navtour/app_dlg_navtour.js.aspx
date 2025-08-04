<%@ Page Language="c#" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<% Response.ContentType = "text/javascript"; %>
$addHandler(window, "load", init);
var isRtl = (window.LOCID_UI_DIR === "RTL");
var appId = window.APP_MODULE_APPID;
var sessionNavTourCookieName = "sessionNavTourCookie_"+appId;
var persistentNavTourCookieName = "persistentNavTourCookie_"+appId;

function init() {
renderDoNotShow();
renderAppWelcomePage();
}

function postLoadwelcomePage(){
setSessionTourCookie();
addAriaHiddenAttributes();

controlTabKey();
isKeyPressed = true;
$("#dontShowAgainFirst").focus();
}

function controlTabKey(){
var firstTopInput = $("#dontShowAgainFirst");
var lastTopInput = $("#cmdClose");

$(":tabbable").blur(
function(e){
var curElem = this;
setTimeout(
function(){
if(!document.hasFocus()){
isKeyPressed = true;
curElem.focus();
}
}
, 10);
});


lastTopInput.on('keydown',
function (e) {
if ((e.which === 9 && !e.shiftKey)) {
isKeyPressed=true;
e.preventDefault();
var subInputs =$("#navTourMainContentIFrame").contents().find(":tabbable");
if( subInputs.size()<=0){
firstTopInput.focus();
}else{
subInputs.first().focus();
}
}
});


firstTopInput.on('keydown', function (e) {
if ((e.which === 9 && e.shiftKey)) {
isKeyPressed=true;
e.preventDefault();
var subInputs =$("#navTourMainContentIFrame").contents().find(":tabbable");
if( subInputs.size()<=0){
lastTopInput.focus();
}else{
subInputs.last().focus();
}
}
});

firstTopInput.on('focusin', function(e){
isKeyPressed=true;
});

$("#navTourHeaders").on('focus', function(e){
e.preventDefault();
isKeyPressed=true;
lastTopInput.focus();
});
}

function addAriaHiddenAttributes()
{
$("#crmMasthead", window.parent.document).attr("aria-hidden", "true");
$("#crmTopBar", window.parent.document).attr("aria-hidden", "true");
$("#crmContentPanel", window.parent.document).attr("aria-hidden", "true");
$("#DlgHdBodyContainer").attr("aria-hidden", "false");
}

function removeAriaHiddenAttributes()
{
$("#crmMasthead", window.parent.document).removeAttr("aria-hidden");
$("#crmTopBar", window.parent.document).removeAttr("aria-hidden");
$("#crmContentPanel", window.parent.document).removeAttr("aria-hidden");
$("#DlgHdBodyContainer").removeAttr("aria-hidden");
}

function renderAppWelcomePage(){
var welcomeFrame = $("#navTourMainContentIFrame");
var welcomePageWebResourceName = window.APP_MODULE_WELCOME_NAME;
var welcomePageURL = welcomePageWebResourceName;
var welcomePageParameters = "";
if( typeof appId != undefined && appId != null && appId != ""){
welcomePageParameters +="appid="+appId;
}
welcomeFrame.attr('src', Mscrm.CrmUri.create("$webresource:"+welcomePageURL+"?"+welcomePageParameters));
welcomeFrame.load(function() {
$('#navTourMainContentLoading').hide();
$('#navTourMainContentIFrame').show();
postLoadwelcomePage();
});
}

function renderDoNotShow() {
var doNotShowAgainSpan = $("#navTourFooterLabel");
if(innerWidth < 500){
doNotShowAgainSpan.html("<loc:Text ResourceId="Web.AppNavTour.DontShowAgainShort" runat="server"/>");
}else{
doNotShowAgainSpan.html("<loc:Text ResourceId="Web.AppNavTour.DontShowAgain" runat="server"/>");
}
updateDoNotShowCheckbox();
}

function updateDoNotShowCheckbox(){
var persistentNavTourCookie = Mscrm.Utilities.getCookie(persistentNavTourCookieName);
if(typeof persistentNavTourCookie != undefined && persistentNavTourCookie != null && persistentNavTourCookie == "HideNavTour"){
$("#dontShowAgainFirst").prop('checked', true);
}
}

function setSessionTourCookie() {
Mscrm.Utilities.setCookie(sessionNavTourCookieName, "HideNavTour", null);
}

function setPersistentTourCookie() {
Mscrm.Utilities.setCookie(persistentNavTourCookieName, "HideNavTour", 60 * 24 * 365 * 100);
}

function clearPersistentTourCookie() {
Mscrm.Utilities.deleteCookie(persistentNavTourCookieName);
}

function closeDialog() {
manageTourCookie();
removeAriaHiddenAttributes();
closeWindow();
}

function manageTourCookie()
{
setSessionTourCookie();

if ($("#dontShowAgainFirst").is(':checked')) {
setPersistentTourCookie();
}else{
clearPersistentTourCookie();
}
}