<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Tools.MicrosoftFlow.ManageFlowsPage" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!doctype html>
<html>
<head>

<style>

.modal-content {
background-color: #fefefe;
margin: auto;
padding: 2px;
width: 100%;
}
</style>
<script src="/_static/_common/scripts/jquery-3.6.0.min.js"></script>

<script>

function getUrlVars(str) {
var vars = [], hash;
var hashes = str.slice(str.indexOf('?') + 1).split('&');
for (var i = 0; i < hashes.length; i++) {
hash = hashes[i].split('=');
vars.push(hash[0]);
vars[hash[0]] = hash[1];
}
return vars;
}
$(function () {
var url = "<% = Microsoft.Crm.Application.Utility.MicrosoftFlowUtils.CreateMicrosoftFlowRuntimeUrl() %>";
var startTime = performance.now();
if (destinationOrigin == "")
{
return;
}

function LogFlowErrorTelemetryEvent(tenantId, env, errorSource, response, methodName, isFailure, errMsg) {
var metricProperties = {
TenantId: tenantId,
FlowEnvironmentId: env,
Response: response,
ErrorSource: errorSource,
MethodName: methodName,
IsFailure: isFailure,
ErrorMessage: errMsg
};

var xrm = window.Xrm;
if (!xrm && window.parent)
{
xrm = window.parent.Xrm;
}

if (xrm)
{
xrm.Internal.addMetric("MsFlowError", metricProperties);
}
}

$("#flowIframe").attr('src', url);
var destinationOrigin = "<%= Microsoft.Crm.ObjectModel.PowerBIUtility.FirstPartyIntegrationSiteUrl%>";
$('#flowIframe').on('load', function (event) {
window.responseIdsProcessed = {};
$(window).on("message", function (e) {
var data = e.originalEvent.data;
var endTime = 0;
var bSilentAuthentication = true;
var result = "Success";
var queryString = getUrlVars(url)
var tenantId = queryString["tenantId"];
var environmentId = localStorage.getItem("flowEnvironmentId");
var crmOrgUniqueName = null;
if (window.parent != null) {
crmOrgUniqueName = window.parent['ORG_UNIQUE_NAME'];
}
else {
crmOrgUniqueName = window['ORG_UNIQUE_NAME'];
}

var crmOrganizationId = null;
if (window.parent != null) {
crmOrganizationId = window.parent['ORG_ID'];
}
else {
crmOrganizationId = window['ORG_ID'];
}

if (data.requestId) {
if (window.responseIdsProcessed[data.requestId]) {
return;
}
window.responseIdsProcessed[data.requestId] = true;
}
if (data.isResponse) {
if (data.method == "MicrosoftFlowAppLoaded") {
var iframeWindow = $('#flowIframe')[0].contentWindow;
startTime = performance.now();
iframeWindow.postMessage({ method: "AttemptToSilentlyAuthenticate" }, destinationOrigin);
}
else if (data.method == "UserLoginCompleted") {
bSilentAuthentication = false;
result = "Success";
endTime = performance.now();
$("#flowIframe").attr('src', url);
}

if (data.method == "AttemptToSilentlyAuthenticate") {
endTime = performance.now();
if (data.response.success) {
result = "Success";
var iframeWindow = $('#flowIframe')[0].contentWindow;

var params = {
dynamics365OrganizationUniqueName: crmOrgUniqueName,
dynamics365OrganizationId: crmOrganizationId
};

if (environmentId)
{
params.environmentId = environmentId;
}

iframeWindow.postMessage(
{
method: "EmbedFlowUI",
params: params
}, destinationOrigin);
}
else if (data.response.failed) {
var errMsg = data.errorMessage.replace(/'/g, "\\'");
var methodName = data.method;
var errorSource = data.errorSource;
var response = '';
LogFlowErrorTelemetryEvent(tenantId, environmentId, errorSource, response, methodName, data.response.failed, errMsg);

result = "Failure";
$("#flowIframe").css('display', 'block');
$("#loginButton").css('display', 'none');
var uiChangeRequest = {
id: 'loginButton', labelValue: 'Login', styles: {
"width": "150px",
"height": "36px",
"font-family": 'Segoe UI',
"font-size": "20px",
"border-color": "rgb(0, 120, 215)",
"position": "absolute",
"top": "50%",
"left": "47%",
"margin-left": "-50px",
"margin-top": "-100px"
}
}
var uiChangeRequestForTitle = {
id: 'title', labelValue: 'We need you to login first..', styles: {
"font-family": 'Segoe\000020UI,Tahoma,Arial',
"font-size": "40px",
"color": "rgb(0, 0, 0)",
"position": "absolute",
"top": "50%",
"left": "50%",
"margin-left": "-250px",
"margin-top": "-200px"
}
}
var controlLabels = new Array(uiChangeRequest, uiChangeRequestForTitle);
document.getElementById('flowIframe').contentWindow.postMessage({ method: 'SetUIStrings', data: controlLabels }, destinationOrigin);
var addUIStylesRequest = ["#loginButton {background-color: white; color:blue; }",
"#loginButton:hover {background-color: rgba(0, 120, 215, 0.6); color:white; cursor:pointer;}"
];
document.getElementById('flowIframe').contentWindow.postMessage({ method: 'AddUIStyles', data: addUIStylesRequest }, destinationOrigin);
}
}
else if (data.method == "EmbedFlowUI") {
if (data.response.failed) {
var errMsg = data.errorMessage.replace(/'/g, "\\'");
var methodName = data.method;
var errorSource = data.errorSource;

var response = '';
if (data.isResponse)
{
response = JSON.stringify(data.response);
}
LogFlowErrorTelemetryEvent(tenantId, environmentId, errorSource, response, methodName, data.response.failed, errMsg);
}
else if (data.response.success)
{
var returnedEnvironmentId = data.response.environmentId;
if (returnedEnvironmentId)
{
environmentId = returnedEnvironmentId;
localStorage.setItem("flowEnvironmentId", environmentId);
}

$(".modal-content").css("border", "0");
}
}
var timeTaken = Math.floor(endTime - startTime);
if (timeTaken > 0) {
$.ajax({
type: "POST",
url: "ManageFlowsPage.aspx/LogMsFlowUserAuthentication",
data: "{result: '" + result + "',timeTaken:" + timeTaken + ",isSilent:" + bSilentAuthentication + ", tenantId:'" + tenantId + "'}",
contentType: "application/json; charset=utf-8",
dataType: "json",
success: function (response) {
console.log(response.d);
}
});
}
}
});
});
});
</script>
</head>
<body>
<div class="modal-content">
<iframe id='flowIframe' width="100%" height="900" style="display:block" frameborder="0" scrolling="no"></iframe>
</div>
</body>
</html>