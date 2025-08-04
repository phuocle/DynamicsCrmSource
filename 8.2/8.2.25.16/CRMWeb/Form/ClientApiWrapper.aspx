<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Form.ClientApiWrapper" %>
<%@ Import Namespace="Microsoft.Crm.Application.ContentDelivery" %>
<!DOCTYPE html>
<html>
<head>
<script language="javascript">
Xrm = parent.Xrm;
var Mscrm = {};
Mscrm.CrmUri = parent.Mscrm.CrmUri;
Mscrm.GlobalImported = {};
Mscrm.GlobalImported.CrmUri = Mscrm.CrmUri;
Mscrm.InternalUtilities = parent.Mscrm.InternalUtilities;
Mscrm.CommandBarActions = parent.Mscrm.CommandBarActions;
Mscrm.GridCommandActions = parent.Mscrm.GridCommandActions;
Mscrm.EntitlementCommandBarAction = parent.Mscrm.EntitlementCommandBarAction;
Mscrm.EntityPageHandlerFactory = parent.Mscrm.EntityPageHandlerFactory;
Mscrm.FeatureNames = parent.Mscrm.FeatureNames;
Mscrm.ListCommands = parent.Mscrm.ListCommands;
Mscrm.OpportunityQOIControl = parent.Mscrm.OpportunityQOIControl;
Mscrm.QOIDetail = parent.Mscrm.QOIDetail;
Mscrm.BusinessRules = parent.Mscrm.BusinessRules;
Mscrm.SdkSerializationHelper = parent.Mscrm.SdkSerializationHelper;
var Microsoft = {};
Microsoft.Crm = {};
Microsoft.Crm.Client = {};
Microsoft.Crm.Client.Core = {};
Microsoft.Crm.Client.Core.Storage = parent.Microsoft.Crm.Client.Core.Storage;
Microsoft.Crm.Client.Core.Framework = parent.Microsoft.Crm.Client.Core.Framework;
CrmEncodeDecode = parent.CrmEncodeDecode;
XUI = parent.XUI;

jQueryApi = parent.jQueryApi;

IsNull = parent.IsNull;
IsArray = parent.IsArray;
IsInstanceOfTypeAcrossFrames = parent.IsInstanceOfTypeAcrossFrames;
IsNullOrEmptyString = parent.IsNullOrEmptyString;
GetClass = parent.GetClass;
IsOfClass = parent.IsOfClass;

var currentHandlerIndex = 0;
var handlerQueue = [];
var pendingScriptLoadCounts = 0;
var loadedScripts = {};
var currentTopHandler = null;

window.onerror = parent.onerror;
window.isRichClient = parent.isRichClient;
window.getOutlookHostedWindow = parent.getOutlookHostedWindow;
window.isOutlookHostedWindow = parent.isOutlookHostedWindow;

window.alert = function (message) {
Xrm.Utility.alertDialog(message);
};

function ExecuteHandler(parameters)
{
var method = parameters[0];
var functionParameters = parameters[1];
var executionContext = parameters[2];
var executeIfAvailableOnly = parameters[3]
var handlerInfo = {
method: method,
parameters: functionParameters,
executionContext: executionContext,
executeIfAvailableOnly: executeIfAvailableOnly
}



if (currentTopHandler)
{
handlerQueue.splice(currentHandlerIndex, 0, handlerInfo);
}
else
{
handlerQueue[handlerQueue.length] = handlerInfo;
}

RunHandlers();
}

function CreateTurboFormPreOnLoadPerfMarker() {
parent.Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker('TurboFormPreOnloadTimestamp', 1);
parent.window['TurboFormPreOnloadTimestamp'] = (new Date()).getTime();
}

function HasPageLoaded() {

if (window.parent.location.pathname.indexOf("DialogPage.aspx") > -1) {
return true;
}
return window.parent.Mscrm.TurboForm.Control.PageBootstrapper.hasPageLoaded;
}

function RunHandlers()
{

if (!HasPageLoaded())
{
window.setTimeout(Function.createDelegate(this, function () { RunHandlers(); }), 15);
return;
}

if (pendingScriptLoadCounts == 0)
{
while (handlerQueue != undefined && currentHandlerIndex < handlerQueue.length)
{
var handlerInfo = handlerQueue[currentHandlerIndex];
currentHandlerIndex++;

if (!currentTopHandler)
{
currentTopHandler = handlerInfo;
}

RunHandlerInternal(handlerInfo.method, handlerInfo.parameters, handlerInfo.executionContext, handlerInfo.executeIfAvailableOnly);


if (currentTopHandler == handlerInfo)
{
currentTopHandler = null;
}
}
}
}

function RunHandlerInternal(method, parameters, executionContext, executeIfAvailableOnly)
{
var perfMetric = Xrm.Internal.startMetricsStopwatch("Run form Onload method: " + method);
perfMetric.start();

try
{
if (executionContext != null)
{
if (parameters != null && parameters != "")
{
parameters = "executionContext, " + parameters;
}
else
{
parameters = "executionContext";
}
}

var isFunctionAvailable = false;
if (executeIfAvailableOnly == true)
{
if (method.indexOf(".") < 0)
{
isFunctionAvailable = method in window;
}
}

if (isFunctionAvailable || !executeIfAvailableOnly)
{
eval(method + "(" + parameters + ");");
}
}
catch (e)
{
window.parent.Mscrm.TurboForm.Control.CustomScriptsManager.handleCustomScriptException(e);
}

perfMetric.stop();
};

function AppendScriptTag(parameters)
{
var url = parameters[0];
var async = parameters[1];
if (loadedScripts[url] == null)
{
var perfMetric = Xrm.Internal.startMetricsStopwatch("Append Script: " + url);
if (!async)
{
perfMetric.start();
}

loadedScripts[url] = false;

var container = document.getElementsByTagName('head')[0];
var scriptTag = document.createElement('script');
container.appendChild(scriptTag);

scriptTag.type = "text/javascript";

pendingScriptLoadCounts++;

if (async)
{
scriptTag.onerror = scriptTag.onreadystatechange = scriptTag.onload = function ()
{
if (!loadedScripts[url] && (!scriptTag.readyState || scriptTag.readyState === "loaded" || scriptTag.readyState === "complete"))
{
scriptTag.onerror = scriptTag.onreadystatechange = scriptTag.onload = null;
loadedScripts[url] = true;
window.setTimeout(function()
{
OnScriptTagLoaded(url);
}, 0);
}
}

scriptTag.src = url;
}
else
{
var request = new XMLHttpRequest();
request.open("GET", url, async);
request.onreadystatechange = function()
{
if (!loadedScripts[url] && request.readyState == 4)
{
request.onreadystatechange = null;
scriptTag.text = request.responseText;
loadedScripts[url] = true;
OnScriptTagLoaded(url);
perfMetric.stop();
}
};

request.send();
}
}
}

function OnScriptTagLoaded(url)
{
pendingScriptLoadCounts--;
RunHandlers();
}

function SendMessageToPageManager(message)
{
try
{
window.parent.Mscrm.TurboForm.Control.CustomScriptsManager.processMessage(message);
}
catch(e)
{
parent.Mscrm.CrmDebug.fail("Exception encountered processing message: " + message);
parent.catchError(e.message, parent.window.location.href, 0, true);
}
}

function FireDataLoad()
{

window.parent.Mscrm.TurboForm.Control.PageManager.get_instance().get_primaryForm().getPageData().invokeDataOnLoadHandlers(1);
Mscrm.CommandBarActions.mapAttributesToRegardingForm();
}

(function(){
var parameters = [
'<%= Microsoft.Crm.Application.Utility.CrmUri.Create(Microsoft.Crm.Application.ContentDelivery.HostBasedContentDeliveryService.GetCDNUrl().TrimEnd('/') + "/_static/_common/scripts/MicrosoftAjax.js")%>',
true
];
AppendScriptTag(parameters);
})();
</script>
</head>
<body>
</body>
</html>
