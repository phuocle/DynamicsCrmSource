






<%@ Page Language="c#" Inherits="Microsoft.Crm.Dialogs.ErrorDialogPage" %>

<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Reporting" %>
<!DOCTYPE html>
<html>
<head>
<title>
<loc:text resourceid="web._common.error.errorHandler.aspx_title" runat="server" />
</title>
<cnt:appheader id="crmHeader" runat="server" />

<style type="text/css">
.ms-crm-Error-Header
{
font-family: Segoe UI Light, Segoe UI, Tahoma, Arial !important;
font-weight: lighter !important;
font-size: 27px !important;
}
#ErrorDetailsContainerToggleContainer, #ErrorDetailsContainer
{
padding-top: 10px;
}
#ErrorDetailsContainer
{
padding-bottom: 44px;
}
#ErrorDetailsContainerToggle:hover
{
text-decoration: underline;
}
#ErrorDetailsContainerToggle
{
color: #0000FF;
text-decoration: none;
cursor: pointer;
}
.ms-crm-Error-Details-Label
{
font-weight: bold;
}
.ms-crm-Error-Details-Value
{
<% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
padding-left: 2px;
<% } else { %>
padding-right: 2px;
<% } %>
}
.ms-crm-Error-Details-Hide-Element
{
display: none;
}
</style>

<script type="text/javascript">

var errInfo;
Sys.Application.add_load(Pageload);

function applychanges()
{
var Url = Mscrm.CrmUri.create(window.location.href);
var errorCode = Url.get_query()["hresult"];
if (errorCode == "0x80043e08")
{

window.inlineDialogId = "InlineDialog";
window.isInlined = true;
}
executeDialogCloseCallback();
closeWindow();
}

function openErrorDetails() {
document.getElementById("reloadform").submit();
}

function resetProfileTenantId()
{
if(window.isOutlookHostedWindow())
{
var openerWindow = window.getDialogArguments();
if (openerWindow != null && openerWindow.document.getElementById("rad_usedefaulttenantid1").checked)
{
openerWindow.Mscrm.resettenantidvalue();
}
}
else
{
if (window.opener.document.getElementById("rad_usedefaulttenantid1").checked)
{
window.opener.Mscrm.resettenantidvalue();
}
}

closeWindow();
}

function cancel() {
closeWindow();
}

function Pageload() {
var oArgs;
oArgs = getDialogArguments();

var errorMsg;
if (!IsNull(oArgs)) {
errorMsg = oArgs["errMessage"];
errInfo = oArgs["errInfo"];
}

if (window.opener != null && window.opener.self != null) {
if (window.opener.self.FormLoadId && errInfo.get_code() == "0x80040217") {
if (Mscrm && Mscrm.MetricsCollector && Mscrm.MetricsCollector.collectAndReportClientMetrics) {
Mscrm.MetricsCollector.collectAndReportClientMetrics(7);
}
}
}

var Url = Mscrm.CrmUri.create(window.location.href);
var errorCode = Url.get_query()["hresult"];
if (!window.parent.UseTabletExperience && (IsNull(errInfo) || isNullOrEmptyString(errInfo.get_serializedException())) && errorCode != "0x8005E25C") {
document.getElementById("butDialogCopy").disabled = true;
}


document.cookie = "excelDownloadToken=-2; path=/";

if (!IsNull(oArgs))
{
if (ErrorCodeSupportsCustomMessage)
{
if (!IsNull(errorMsg) && errorMsg != "") {
errorMsg = CrmEncodeDecode.CrmHtmlEncode(CrmEncodeDecode.CrmHtmlDecode(errorMsg));
document.getElementById("ErrorMessage").innerHTML = errorMsg;
}
}
else if (ErrorCodeSupportsParameters && !isNullOrEmptyString(localizedMessage) && (!IsNull(errInfo)) && errInfo != "")
{
var parameters = errInfo.get_parameters();
if (errInfo.get_code() == "0x80061680" || errInfo.get_code() == "0x80044291" || errInfo.get_code() == "0x80044281" || errInfo.get_code() == "0x80044289"
|| errInfo.get_code() == "0x80044282" || errInfo.get_code() == "0x80044283" || errInfo.get_code() == "0x80044284" || errInfo.get_code() == "0x80044285"
|| errInfo.get_code() == "0x80044290" || errInfo.get_code() == "0x80044286") {

parameters = getParameters(errInfo.get_serializedException());
}

if (!IsNull(parameters))
{


var i = 0;
var paramArray = [ localizedMessage ];
while (!IsNull(parameters[i]))
{
paramArray.push(parameters[i]);
i++;
}



var finalMessage = String.format.apply(null, paramArray);
XUI.Html.SetText(document.getElementById("ErrorMessage"), finalMessage);
}
}


if (!IsNull(errInfo)) {
var msg = Mscrm.ErrorInformation.formatMessageWithParameters(document.getElementById("ErrorMessage").innerHTML,errInfo.get_parameters());
if (errInfo.get_code() == "0x80061007")
{

msg = Mscrm.ErrorInformation.formatMessageWithParameters(document.getElementById("ErrorMessage").innerHTML, getParameters(errInfo.get_serializedException()));
}
msg = msg.replace(/(\r)?\n/g, "<br/>");
msg = msg.replace(/(\\r)?\\n/g, "<br/>");



if (((errInfo.get_code() == "0x8004832B"))
&& !IsNull(errInfo.get_description())) {
var errorDetails = "";
<%
if (SRSReportUtility.IsSafeToShowSrsErrors())
{
%>
errorDetails = "<br/>" + CrmEncodeDecode.CrmHtmlEncode(
"<%=AppResourceManager.Default.GetString("Error_Details")%>") + "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + errInfo.get_description();
<%
}
%>



msg = formatString(msg, errorDetails, "");
}
else if ((errInfo.get_code() == "0x80040231") && !IsNull(errInfo.get_description())) {

var errorInfoDecoded = CrmEncodeDecode.CrmHtmlDecode(errInfo.get_description());
var principalTeam = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("SecurityPrincipal.Team")%>");
var principalUser = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("SecurityPrincipal.User")%>");

if(errorInfoDecoded.indexOf("type="+Mscrm.EntityTypeCode.Team) != -1)
{
msg = formatString(msg,principalTeam);
}
else
{
msg = formatString(msg,principalUser);
}
}
else if(!IsNull(errInfo.get_code()) && !IsNull(errInfo.get_description()))
{
if (useErrorDescription(errInfo.get_code().toUpperCase()))
{
msg =errInfo.get_description();
}
}


if ((errInfo.get_code() == "0x80046203") && !IsNull(errInfo.get_description()))
{
msg = msg.replace(/\n/g, "<br/>");
}


var technicalDetailsAvailable = false;


var activityId = retrieveNodeValueFromSerializedException("ActivityId", errInfo);
if (!isNullOrEmptyString(activityId) && activityId != "00000000-0000-0000-0000-000000000000")
{
document.getElementById("ErrorActivityIdLabel").innerHTML = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("ErrorDialog.TelemetryActivityIdLabel")%>");
document.getElementById("ErrorActivityIdValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(activityId);
technicalDetailsAvailable = true;
}
else
{

document.getElementById("ErrorActivityIdContainer").className = "ms-crm-Error-Details-Hide-Element";
}


var timeStamp = retrieveNodeValueFromSerializedException("Timestamp", errInfo);
var timeStampDateObject = null;
if (!isNullOrEmptyString(timeStamp))
{
timeStampDateObject = new Date(timeStamp)
}
if (!isNullOrEmptyString(timeStampDateObject) && !isNaN(timeStampDateObject) && timeStampDateObject.getTime() != 0)
{
document.getElementById("ErrorTimestampLabel").innerHTML = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("ErrorDialog.TelemetryTimestampLabel")%>");
document.getElementById("ErrorTimestampValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(new Date(timeStamp));
technicalDetailsAvailable = true;
}
else
{

document.getElementById("ErrorTimestampContainer").className = "ms-crm-Error-Details-Hide-Element";
}

<%
#if DEBUG
%>


if (!isNullOrEmptyString(errorCode))
{

document.getElementById("ErrorCodeLabel").innerHTML = CrmEncodeDecode.CrmHtmlEncode("Error Code:");
document.getElementById("ErrorCodeValue").innerHTML = CrmEncodeDecode.CrmHtmlEncode(errorCode);
technicalDetailsAvailable = true;
}
else
{

document.getElementById("ErrorCodeContainer").className = "ms-crm-Error-Details-Hide-Element";
}

<%
#endif
%>

if (technicalDetailsAvailable)
{


var provideTechnicalDetailsString = CrmEncodeDecode.CrmHtmlEncode("<%=AppResourceManager.Default.GetString("ErrorDialog.ProvideTechnicalDetails")%>");
msg += " " + provideTechnicalDetailsString;
}
else
{

hideDisplayTechnicalDetailsLink();
}

document.getElementById("ErrorMessage").innerHTML = msg;
document.getElementById("serializedException").value = "<Exception>" + CrmEncodeDecode.CrmXmlEncode(errInfo.get_serializedException()) + "</Exception>";
}
}
}


function errorDetailsContainerToggleOnKeyDownHandler(event)
{

if (event.keyCode == 13 || event.keyCode == 32)
{

transitionToTechnicalDetailsVisable();
}
}


function transitionToTechnicalDetailsVisable()
{
hideDisplayTechnicalDetailsLink();
expandErrorDetailsContainer();
}


function expandErrorDetailsContainer()
{
var errorDetailsContainer = document.getElementById("ErrorDetailsContainer");

if (!IsNull(errorDetailsContainer))
{

errorDetailsContainer.className = "";
}
}


function hideDisplayTechnicalDetailsLink()
{
var errorDetailsContainerToggleContainer = document.getElementById("ErrorDetailsContainerToggleContainer");

if (!IsNull(errorDetailsContainerToggleContainer))
{

errorDetailsContainerToggleContainer.className = "ms-crm-Error-Details-Hide-Element";
}
}
























function retrieveNodeValueFromSerializedException(nodeName, errInfo)
{
if (isNullOrEmptyString(nodeName) || isNullOrEmptyString(errInfo) || isNullOrEmptyString(errInfo.get_serializedException()))
{

return null;
}

var openNodeName = "<" + nodeName + ">";
var closeNodeName = "</" + nodeName + ">";

var serializedException = errInfo.get_serializedException();
var startPos = serializedException.indexOf(openNodeName);
var endPos = serializedException.indexOf(closeNodeName);

if (startPos < 0 || endPos < 0)
{

return null;
}

return serializedException.substring(startPos + openNodeName.length, endPos);
}


function useErrorDescription(errorCode)
{
if (errorCode == "0X8004F976" || errorCode == "0X8003F452" || errorCode == "0X8003F451" || errorCode == "0X80044331" || errorCode == "0X8008100D" || errorCode == "0X8008100F" || errorCode == "0X8008100E" || errorCode == "0X8004F985" || errorCode == "0X80060861" || errorCode == "0X80060892" || errorCode == "0X80060893" || errorCode == "0X80060897" || errorCode == "0X800609A0" || errorCode == "0X8006098E" ||
errorCode == "0X80071123" || errorCode == "0X80071121" || errorCode == "0X80071119")
{
return true;
}
return false;
}

function getParameters(serializedException)
{
var parameters = {};
xml=XUI.Xml.LoadXml("<Exception>" + serializedException + "</Exception>");
node=XUI.Xml.SelectSingleNode(xml, "descendant::*[local-name()='ErrorDetails']");
appendToArray = function(childNode)
{
val=XUI.Xml.GetText(XUI.Xml.SelectSingleNode(childNode, "descendant::*[local-name()='key']"))
if (val == "CallStack")
{
return false;
}
parameters[val] = XUI.Xml.GetText(XUI.Xml.SelectSingleNode(childNode, "descendant::*[local-name()='value']"));
}
XUI.Xml.DomUtils.ForEachChild(node, appendToArray);
return parameters;
}

function keyDownHandler(eventObj)
{
if(eventObj.keyCode == 13 && !IsNull(eventObj.target))
{
eventObj.preventDefault();
XUI.Html.DispatchDomEvent(eventObj.target, XUI.Html.CreateDomEvent('click'));
}
}

function dialogBodyTouchMoveHandler(eventObj)
{

eventObj.preventDefault();
}
function scrollableContentTouchMoveHandler(eventObj)
{

eventObj.stopPropagation();
}

</script>
</head>
<body>
<frm:DialogForm id="crmForm" showheader="false" runat="server">

<table cellpadding="8" cellspacing="0" style="table-layout:fixed;width:100%;height:100%" id="errorInformation">
<col style="width:75px" /><col />
<tr class="ms-crm-ErrorMessage-row">
<td>
<img alt=" " id="ErrorImage" runat="server" />
</td>
<td>
<div runat="server" id="ErrorTitle" class="ms-crm-Error-Header"></div>
<span runat="server" id="ErrorMessage" class="ms-crm-Error-Message" style="word-wrap:break-word;" onkeydown="keyDownHandler(new Sys.UI.DomEvent(event))"></span>
<% if (!string.IsNullOrEmpty(this.AdditionalMessage.InnerText)) { %>
<br /><br />
<span runat="server" id="AdditionalMessage" class="ms-crm-Error-Message" style="word-wrap:break-word;" onkeydown="keyDownHandler(new Sys.UI.DomEvent(event))" tabindex="0"></span>
<% } %>
<div id="ErrorDetailsContainerToggleContainer" onclick="transitionToTechnicalDetailsVisable();">
<span id="ErrorDetailsContainerToggle" tabindex="0" onkeydown="errorDetailsContainerToggleOnKeyDownHandler(new Sys.UI.DomEvent(event))">
<%=AppResourceManager.Default.GetString("ErrorDialog.ShowTechnicalDetails")%>
</span>
</div>
<div id="ErrorDetailsContainer" class="ms-crm-Error-Details-Hide-Element">
<div id="ErrorActivityIdContainer" class="ms-crm-Error-Details-Item">
<% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorActivityIdLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>

<span id="ErrorActivityIdValue" class="ms-crm-Error-Details-Value"></span>

<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorActivityIdLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>
</div>
<div id="ErrorTimestampContainer" class="ms-crm-Error-Details-Item">
<% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorTimestampLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>

<span id="ErrorTimestampValue" class="ms-crm-Error-Details-Value"></span>

<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorTimestampLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>
</div>
<%
#if DEBUG
%>
<div id="ErrorCodeContainer" class="ms-crm-Error-Details-Item">
<% if (!Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorCodeLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>

<span id="ErrorCodeValue" class="ms-crm-Error-Details-Value"></span>

<% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft) { %>
<span id="ErrorCodeLabel" class="ms-crm-Error-Details-Label"></span>
<% } %>
</div>
<%
#endif
%>
</div>
</td>
</tr>
</table>

</frm:DialogForm>
<form name='reloadform' id='reloadform' enctype='multipart/form-data' method='post'	action='dlg_errorLog.aspx'>
<input type="hidden" id="serializedException" name="serializedException" value="" />
</form>
</body>
</html>
