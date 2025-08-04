<%@ Page Language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialog.DialogPage" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<html>
<head>

<meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
<script type='text/javascript'>var LoadStartTime = new Date().getTime();</script>
<cnt:AppHeader id="crmHeader" runat="server" />
<script>
window.parent.IS_ESCAPE_KEY_HANDLED = true;
function loadForm() {
var dialogBodyId = "dialogContainer";
Mscrm.TurboForm.Control.DialogBootstrapper.loadDialog(dialogBodyId);

if (isOutlookHostedWindow()) {
document.getElementById("btnCross").style.display = "none";
}

$P_CRM(":button").click(function (e) { applychanges(e); });

$P_CRM(document).keydown(function (e) {
if (e.keyCode == Mscrm.KeyCode.KEY_ESC) {
cancel();
}
});


if (isOutlookHostedWindow()) {
setFocusOnElement();
}
}

function setFocusOnElement() {




document.body.focus();
}


function unloadForm() {
return true;
}

window.addEventListener("hashchange", loadForm, false);

function applychanges(e) {
var paramToken = Xrm.Page.data.attributes.get("param_crmwrpctoken"), paramTokenTimeStamp = Xrm.Page.data.attributes.get("param_crmwrpctokentimestamp");
if (paramToken && paramTokenTimeStamp) {
paramToken.setValue($('input:hidden[name = "CRMWRPCToken"]').val());
paramTokenTimeStamp.setValue($('input:hidden[name = "CRMWRPCTokenTimeStamp"]').val());
}

var buttonId = e.currentTarget.id;
Mscrm.Utilities.executeButtonEventHandler(buttonId, null);
}

function cancel() {

if (isOutlookHostedWindow()) {
Mscrm.Utilities.setReturnValue(false);
} else {
executeDialogCancelCallback();
}

closeWindow();
}
</script>
</head>
<body scroll="no" class="read-optimised-form refresh-form">
<div id="crmDialogForm">
<div tabindex="0" id="AccessibilityTitleDiv" role="dialog">
<div class="ms-crm-div-NotVisible"></div>
</div>
<div id="dialogContainer" style="height: 100%"></div>
<% =CurrentWrpcContext.GetWrpcTokenAsHiddenInputString(Microsoft.Crm.Application.Utility.CrmUri.Create("/userdefined/edit.aspx", Microsoft.Crm.Application.Security.UserInformation.Current)) %>
</div>
<span id="__Page_crmEventManager"></span>
</body>
<script>
var createPageManager = "crmCreate(Mscrm.PageManager, { \"id\": \"crmPageManager\", \"mode\": \"iframe\", \"executeDeferredActionsOnDemand\": false, \"deferredActionList\": [], \"deferredActionParameters\": [], \"pageOnLoadScriptList\": [], \"rootElement\": \"\" }, null, { \"eventManager\": \"__Page_crmEventManager\" }, null)";
var createEventManager = "crmCreate(Mscrm.EventManager, { \"eventSubscribers\": [], \"childEventManagerIds\": null, \"parentEventManagerId\": \"\", \"id\": \"__Page_crmEventManager\" }, null, {}, null)";
loadForm();
</script>
</html>
