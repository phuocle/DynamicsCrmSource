<%@ Page Language="C#" Inherits="Microsoft.Crm.Common.Web.Tools.Yammer.YammerEmbed" %>
<%@ Import Namespace="Microsoft.Crm.Application.Utility" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE HTML>
<html>
<head>
<cnt:appheader id="crmHeader" runat="server" />
<title></title>
<script type="text/javascript" language="javascript" src="/_static/_common/scripts/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(YammerEmbedScriptURL)  %>"></script>
<style type="text/css">
body
{
margin: 0px;
padding: 0px;
overflow: hidden;
}

a, a:hover, a:visited, a:link, a:active
{
color: #115fb7;
}

div#resetYammer
{
position: absolute;
right: 0;
bottom: 0;
text-align: right;
}

a.resetYammerCredentials
{
color: #115fb7;
font-family: 'Segoe UI', Tahoma, Arial;
font-size: 11px;
}

a.disabled {
color: #5b626c;
cursor: default;
text-decoration: none;
}

.yammerBox
{
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: 0px;
padding: 0px;
}

.message
{
font-family: <%= WebUtility.GetFontResourceForStyle("Microsoft_Crm_Web_Fonts") %>;
font-size: <%= WebUtility.GetFontResourceForStyle("General.12px.font_size") %>;
color: #8b8b8b;
padding: 10px 0px 10px 0px;
}

.warningImage
{
width: 16px;
height: 22px;
background: url("/_imgs/ProcessControl/process_control_warning.png") no-repeat;
position: absolute;
}
.warningText
{
position: relative;
margin-left: 24px;
margin-right: 24px;
}

#yammerLoadingMask
{
z-index: 1005;
height: 100%;
width: 100%;
top: 0px;
left: 0px;
position: fixed;
background-color: #ffffff;
margin: 0px;
border: 0px;
padding: 0px;
}

#yammerLoadingMask #loading
{
position: absolute;
top: 50%;
left: 50%;
}

</style>
</head>
<body>
<div id="noFollowNoPermission" class="message" style="display: none;">
<img class="warningImage" src="/_imgs/imagestrips/transparent_spacer.gif" />
<div class="warningText" tabindex="0"><loc:text resourceid="Web.Tools.Yammer.NoFollowNoPermission" runat="server" /></div>
</div>
<div id="followNotInYammer" class="message" style="display: none;">
<img class="warningImage" src="/_imgs/imagestrips/transparent_spacer.gif" />
<div class="warningText" tabindex="0"><loc:text resourceid="Web.Tools.Yammer.FollowNotInYammer" runat="server" /></div>
</div>
<div id="singleError" class="message" tabindex="0">
<% if (UserNeverConfigured) { %>
<loc:text resourceid="Web.Tools.Yammer.Embed.UserHasNotConfigured" runat="server" />
<% } else if (NoConversations) { %>
<loc:text resourceid="Web.Tools.Yammer.Embed.EntityCreate" runat="server" />
<% } %>
</div>
<div id="yammerEmbed" class="yammerBox">
<div id="yammerLoadingMask" style="position:absolute;">
<img alt='' src='/_imgs/AdvFind/progress.gif' />
</div>
</div>
<div id="yammerMessage" class="message" style="display: none;" tabindex="0">
</div>
<div id="loginBox">
<% if (IsOnPremise) { %>
<p tabindex="0"><loc:text resourceid="Web.Tools.Yammer.Embed.OnPremiseVerificationInvite" runat="server" /></p>
<p>
<a id="yammerRelogin" href="#">
<loc:text resourceid="Web.Tools.Yammer.Embed.OnPremiseVerifyLink" runat="server" />
</a>
</p>
<% } else { %>
<a id="yammerRelogin" href="#">
<loc:text resourceid="Web.Tools.Yammer.Embed.OnlineLoginLink" runat="server" />
</a>
<% } %>
</div>
<div id="insecureChannel" class="message" tabindex="0" style="display: none;">
<loc:text resourceid="Web.Tools.Yammer.InsecureChannel" runat="server" />
</div>
<% if (IsSystemUser && !String.IsNullOrEmpty(YammerUserId)) { %>
<div id="resetYammer">
<a href="#" class="resetYammerCredentials" data-userID='<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CurrentEntityId) %>' >
<loc:text resourceid="Web.Tools.Yammer.Embed.OnPremiseResetEmail" runat="server" />
</a>
</div>
<% } %>
<div id="verificationSuccessful" style="display: none;" tabindex="0">
<%= VerificationSuccessfulText %>
</div>

<script type="text/javascript" language="javascript">


var yammerUserUrl = <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(YammerUsersApiURL) %>;
var yammerLoadingMaskSelector = "#yammerLoadingMask";
var yammerEmbedSelector = "#yammerEmbed";
var yammerMessageSelector = "#yammerMessage";
var noFollowNoPermissionSelector = "#noFollowNoPermission";
var followNotInYammerSelector = "#followNotInYammer";
var pageState = "notloggedin";
var yammerReloginSelector = "#yammerRelogin";

var userIdPresent = <%= (Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(YammerUserId)) %> != '';
var onPremise = "<%= IsOnPremise %>" == "True";

$P_CRM('.resetYammerCredentials').click(Mscrm.YammerConfigHandler.onResetYammerCredentials);

function showYammerEmbed()
{
showYammerDiv(yammerEmbedSelector);
}

function showYammerDiv(selectorString)
{
$P_CRM(yammerLoadingMaskSelector).hide();
$P_CRM(yammerEmbedSelector).hide();
$P_CRM(yammerMessageSelector).hide();
$P_CRM(noFollowNoPermissionSelector).hide();
$P_CRM(followNotInYammerSelector).hide();
$P_CRM("#loginBox").hide();
$P_CRM("#verificationSuccessful").hide();
$P_CRM("#singleError").hide();

$P_CRM(selectorString).show();
}


function noFollowPermission() {
showYammerDiv('#noFollowNoPermission');
}

function handleError(message) {
$P_CRM(yammerMessageSelector).text(message);
showYammerDiv(yammerMessageSelector);
}

function checkYammerSecurity() {
var noSecurityCheckRequired = IsNull(window.parent) ||
IsNull(window.parent._activityFeedsStateDictionary) ||
window.parent.YAMMER_POST_METHOD != 1;

if (!noSecurityCheckRequired) {
var isFollowed = window.parent._activityFeedsStateDictionary["IsFollowed"].toLowerCase() == "true";
var isFollowedInYammer = window.parent._activityFeedsStateDictionary["IsFollowedInYammer"].toLowerCase() == "true";

if (!isFollowed && !isFollowedInYammer)
{
showYammerDiv(noFollowNoPermissionSelector);
return false;
}
else if (isFollowed && !isFollowedInYammer)
{
showYammerDiv(followNotInYammerSelector);
return false;
}
}

return true;
}

function updatePageOnFollowUnfollow() {
if(checkYammerSecurity()) {
switch (pageState) {
case "notloggedin":
window.location.reload();
break;
case "embedded":
showYammerEmbed();
break;
default:
throw "Invalid pageState";
}
}
}

function relogin(e) {
e.preventDefault();
if ($P_CRM(e.target).hasClass("disabled")) {
return;
}

if (onPremise) {
Mscrm.YammerConfigHandler.verifyUserEmail()
.done(function(success) {
if (success){
showYammerDiv("#verificationSuccessful");
var navigation = setTimeout(embed, 10000);
$P_CRM("#showEmbedNow").click(function(e) {
e.preventDefault();
clearTimeout(navigation);
embed();
});
}
});
} else {
var oauth = Mscrm.YammerOAuthDialogHandler.startOAuth(true);
oauth.waitForCompletion().done(function(success) {
if (success)
embed();
}).fail(function(error) {
if (error) {
$P_CRM(yammerMessageSelector).text(error).show();
$P_CRM("#loginBox").hide();
}
});
}
}

function embed(e) {
if (e && e.preventDefault) {
e.preventDefault();
}

if(checkYammerSecurity())
{
showYammerEmbed();
var embdedElement = $P_CRM("#yammerEmbed");

var w = embdedElement.width(), h = embdedElement.height();
embdedElement.css("width", w + "px").css("height", h + "px");
yam.connect.embedFeed(<%= FeedOptionsString %>);
pageState = "embedded";
}
}

function start() {
$P_CRM('.resetYammerCredentials').toggle(userIdPresent);
var bottomPadding = ($P_CRM('.resetYammerCredentials').length && userIdPresent) ? "28px" : "0";
$P_CRM(yammerEmbedSelector).css("bottom", bottomPadding);

if (userIdPresent) {
embed();
} else {
if (DISABLE_AUTHORIZATION) {
showYammerDiv("#insecureChannel");
} else {
showYammerDiv("#loginBox");
$P_CRM("#yammerRelogin").click(relogin);
}
}
}

<% if (UserNeverConfigured || NoConversations) { %>
showYammerDiv("#singleError");
<% } else { %>
start();
<% } %>
</script>
</body>
</html>