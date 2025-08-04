<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Form.FormPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<!DOCTYPE html>
<html>
<head>

<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
<script type='text/javascript'>var LoadStartTime = new Date().getTime();</script>
<%
#if DEBUG
%>
<style media="screen" type="text/css">
.TurboNotifier {
position: fixed;
background-color: green;
height: 25px;
line-height: 25px;
right: 0px;
top: 0px;
color: white;
padding-left: 10px;
padding-right: 10px;
}
</style>
<%
#endif
%>
</head>
<body scroll="no" class="read-optimised-form refresh-form">
<div id="containerLoadingProgress" style="display: block; text-align: center; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; z-index: 101; background-color: White;">
<div style="position: absolute; top: 50%; width: 100%">
<div>
<img id="loading" alt="<loc:Text ResourceId='PageLoadingMessage' runat='server'/>"
src="/_imgs/AdvFind/progress.gif" />
<br />
</div>
<div id="loadingtext">
<loc:Text ResourceId="PageLoadingMessage" runat="server" />
</div>
</div>
</div>
<div id="crmForm">
<div id="rofContainer" style="display: none"></div>
</div>
<div id="processingDialog" class="ms-crm-dialog-processing" style="display: none;">
<div class="ms-crm-processing-title ms-crm-TextAutoEllipsis">
<span>
<loc:Text ResourceId="InlineEditForm_Processing" runat="server" />
</span>
</div>
<div>
<img src="/_imgs/processing_loader.gif" class="ms-crm-inline-processing">
</div>
</div>
<span id="__Page_crmEventManager"></span>
<cnt:AppFooter id="crmFooter" runat="server" />
<div id="controlHeaderContainer" style="display: none"></div>
<%
#if DEBUG
%>
<span id="TurboNotifier" class="TurboNotifier">TurboForm
</span>
<%
#endif
%>
</body>
<cnt:AppHeader id="crmHeader" runat="server" />
<script>

function loadForm() {
Mscrm.TurboForm.Control.PageBootstrapper.pageHash = Mscrm.CrmCrossBrowser.getHash(window.location);

window.top.notificationContext = "Global";


var navigatingAway = GetHashValue("deactivate");
var entityTypeCode = GetHashValue("etc");
var formBodyId = "rofContainer";

if (IsNullOrEmptyString(navigatingAway) && IsNullOrEmptyString(entityTypeCode)) {
Xrm.Internal.trace.warning("Form\\Page.aspx", "ignoring hash change: hash not recognized in {0}", window.location);
return;
}


document.getElementById('containerLoadingProgress').style.display = "block";
document.getElementById(formBodyId).style.display = "none";

if (!IsNullOrEmptyString(navigatingAway) || entityTypeCode == "-1") {
Xrm.Internal.trace.log("Form\\Page.aspx", "navigating away");
unloadForm();
return;
}

var showGlobalQuickCreate = GetHashValue("showglobalquickcreate");

if (IsNullOrEmptyString(showGlobalQuickCreate) || showGlobalQuickCreate == "false") {
showGlobalQuickCreate = false;
}
else {
showGlobalQuickCreate = true;
document.getElementById(formBodyId).style.display = "block";
}

Mscrm.TurboForm.Control.PageBootstrapper.loadForm(formBodyId, showGlobalQuickCreate);
}


function unloadForm() {
Mscrm.TurboForm.Control.PageBootstrapper.unloadForm("rofContainer");
}

window.addEventListener("hashchange", loadForm, false);
</script>
<script>


var createFormControlLite = "crmCreate(Mscrm.FormControlLite, { \"entityPermissions\": 255, \"subscribedEvents\": [102, 46, 98] }, null, { \"eventManager\": \"__Page_crmEventManager\" }, $get('crmForm'))";
var createPageManager = "crmCreate(Mscrm.PageManager, { \"id\": \"crmPageManager\", \"mode\": \"iframe\", \"executeDeferredActionsOnDemand\": false, \"deferredActionList\": [], \"deferredActionParameters\": [], \"pageOnLoadScriptList\": [], \"rootElement\": \"\" }, null, { \"eventManager\": \"__Page_crmEventManager\" }, null)";
var createEventManager = "crmCreate(Mscrm.EventManager, { \"eventSubscribers\": [], \"childEventManagerIds\": null, \"parentEventManagerId\": \"\", \"id\": \"__Page_crmEventManager\" }, null, {}, null)";
window.isRichClient = window.parent.isRichClient;
window.getOutlookHostedWindow = window.parent.getOutlookHostedWindow;
window.isOutlookHostedWindow = window.parent.isOutlookHostedWindow;
window.IsTurboForm = true;
window._IsRefreshForm = "1";
if (window.localStorage['IsActualColdLoad'] != undefined) {
window.IsActualColdLoad = false;
}
else {
window.localStorage['IsActualColdLoad'] = window.IsActualColdLoad = true;
}
loadForm();
</script>
<script>
window.addEventListener("resize", Mscrm.TurboForm.Control.Form.RecalculateColumnWidth, false);
</script>
</html>
