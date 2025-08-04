<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Tools.FormEditor.Dialogs.QueueDialog" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="formeditor" TagName="FieldLayout" Src="FieldLayout.ascx" %>
<%@ Import Namespace="System.Web" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<!Doctype html>
<html style="overflow: hidden;">
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
TD.rofield
{
background:		#eaf3ff;
color:			#000000;
border:			1px solid #c5c5c5;
padding-top:	0px;
padding-bottom:	0px;
}
div.ms-crm-Tab
{
border-top-style:solid;
border-top-width:1px;
}
.ms-crm-DialogStrict-Main
{
overflow-x: hidden !important;
}
</style>

<script src="/_static/_common/scripts/jquery-2.1.1.min.js"></script>
<script src="/_static/_common/scripts/jsrender.min.js"></script>
<script type="text/javascript" language="javascript">
Sys.Application.add_load(OnLoad);

var InteractionCentricDashboardCategory = {
CSR1: "1_0",
CSR2: "2_0",
ENTITYDASHBOARD: "1_1"
};

var editModeEntityViewId = "";
var streamObjectId;

function OnLoad()
{
_queueView = $get('queueViewRadio');
_entityView = $get('entityViewRadio');
_queueView.checked = false;
_entityView.checked = true;

oArgs = getDialogArguments();
if (_isEditMode === true) {
streamObjectId = oArgs.streamObjectId;
if (oArgs.isQueue) {
_queueView.checked = true;
_entityView.checked = false;

if (!isNullOrEmptyString(oArgs.queueId)) {
setSelectedIndex($get('queueName'), oArgs.queueId);
}

if (!isNullOrEmptyString(oArgs.queueViewId)) {
setSelectedIndex($get('queueItemView'), oArgs.queueViewId);
}

if (!isNullOrEmptyString(oArgs.entityCode)) {
setSelectedIndex($get('queueEntity'), oArgs.entityCode);
}
} else {
_queueView.checked = false;
_entityView.checked = true;

if (!isNullOrEmptyString(oArgs.entityCode)) {
setSelectedIndex($get('entityPicker'), oArgs.entityCode);
}

if (!isNullOrEmptyString(oArgs.entityViewId)) {
editModeEntityViewId = oArgs.entityViewId;
}

populateViewsForSelectedEntity();

}
}

if(_queueView.checked == true)
{
$get("tab1").style.display = "none";
}

if(_entityView.checked == true)
{
$get("tab0").style.display = "none";
}



if (window._showQueueView == false && _calledFromStreams) {
_queueView.checked = false;
_entityView.checked = true;

$get("tab0").style.display = "none";
$get("tab1").style.display = "block";
$get("tab2").style.display = "none";
}

_oFormXml = oArgs.FormXml;
_secCols = oArgs.SecCols;
}

function deParenthesizeGuid(guid) {
if (guid[0] == "{") {
return guid.substring(1, guid.length - 1).toLowerCase();;
}

return guid.toLowerCase();
}

function setSelectedIndex(picker, id) {

for (var i = 0; i < picker.childElementCount; i++) {
if (!IsNull(picker.childNodes[i])) {

if (deParenthesizeGuid(picker.childNodes[i].getAttribute('value')) === deParenthesizeGuid(id)) {
picker.selectedIndex = i;
}

}
}

}

function applychanges()
{
var ret, queueName = "", queueItemView = "", queueEntity = "", entityName = "", entityViewName = "", queueEntityTypeCode = "";
if (typeof $get("queueName")[$get("queueName").selectedIndex].title !== undefined) {
queueName = $get("queueName")[$get("queueName").selectedIndex].title;
}
if (typeof $get("queueItemView")[$get("queueItemView").selectedIndex].title !== undefined) {
queueItemView = $get("queueItemView")[$get("queueItemView").selectedIndex].title;
}
if ($get("queueEntity").selectedIndex >= 0 && typeof $get("queueEntity")[$get("queueEntity").selectedIndex].title !== undefined) {
queueEntity = $get("queueEntity")[$get("queueEntity").selectedIndex].title;
queueEntityTypeCode = $get("queueEntity")[$get("queueEntity").selectedIndex].value;
}
if (typeof $get("entityPicker")[$get("entityPicker").selectedIndex].title !== undefined) {
entityName = $get("entityPicker")[$get("entityPicker").selectedIndex].title;
}
if (typeof $get("viewPicker")[$get("viewPicker").selectedIndex].title !== undefined) {
entityViewName = $get("viewPicker")[$get("viewPicker").selectedIndex].title;
if (entityViewName == "") {
entityViewName = $get("viewPicker")[$get("viewPicker").selectedIndex].innerHTML;
}
}

var editStreamObjectId = null;
if (_isEditMode === true) {
editStreamObjectId = streamObjectId;
}

if ($get("queueName").value == PUBLIC_QUEUES || $get("queueName").value == PRIVATE_QUEUES || $get("queueName").value == ALL_QUEUES)
ret = new QueueObj("Component" + Mscrm.Utilities.createGuid(), $get("queueName").value, $get("queueItemView").value, $get("entityPicker").value, $get("viewPicker").value, $get("queueViewRadio").checked, $get("entityViewRadio").checked, false, false, "true", queueName, queueItemView, queueEntity, entityName, entityViewName, queueEntityTypeCode, editStreamObjectId);
else
ret = new QueueObj("Component" + Mscrm.Utilities.createGuid(), $get("queueName").value, $get("queueItemView").value, $get("entityPicker").value, $get("viewPicker").value, $get("queueViewRadio").checked, $get("entityViewRadio").checked, false, false, "false", queueName, queueItemView, queueEntity, entityName, entityViewName, queueEntityTypeCode, editStreamObjectId);
Mscrm.Utilities.setReturnValue(ret);
closeWindow();
}

function showQueueViewTable()
{
$get("tab0").style.display = "block";
$get("tab1").style.display = "none";
}

function showEntityViewTable()
{
$get("tab1").style.display = "block";
$get("tab0").style.display = "none";
}

function removeOptions(selectbox)
{
var i;
for(i=selectbox.options.length-1;i>=0;i--)
{
selectbox.remove(i);
}
}

function showErrorMessage(msg)
{
alert(msg);
}

function populateViewsForSelectedEntity()
{
var selectedEntity = $get("entityPicker").value;
var savedQueryFetchXml = "<fetch mapping='logical'><entity name='savedquery'><attribute name='savedqueryid'/><attribute name='name'/><order attribute='name' descending='false'/> <filter type='and'><condition attribute='returnedtypecode' operator='eq' value='" + selectedEntity + "' /></filter><filter type='and'><condition attribute='querytype' operator='eq' value='0' /></filter></entity></fetch>";
Xrm.Internal.messages.retrieveMultiple(savedQueryFetchXml).then(
function(result){
var entityCollection = result.entityCollection;
var entities = entityCollection.get_entities();
removeOptions($get("viewPicker"));
$.each(entities, function (i, entity) {
$('#viewPicker').append($('<option>', {
value: entity.getValue("savedqueryid").toString(),
text : entity.getValue("name")
}));
});

if (!isNullOrEmptyString(editModeEntityViewId)) {
setSelectedIndex($get('viewPicker'), editModeEntityViewId);
editModeEntityViewId = "";
}
},
function(error){
showErrorMessage(LOCID_ENTITY_VIEWS_FAILURE_MSG);
}
);
}
</script>
</head>
<body>
<div class="ms-crm-DialogStrict-Main-Container" style="width:100%;">
<frm:DialogForm id="crmForm" runat="server">
<div style="vertical-align:top">
<div id="tab2" class="ms-crm-Tab" style="display: block;width:auto;position:fixed;top:80px;bottom:0px;">
<table width="100%" style="table-layout: fixed;">
<tr>
<td title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.DisplayEntityViewLabel.Tooltip' runat='server'/>"><input name="rdColumnSpan" id="entityViewRadio" type="radio" class="radio" onclick="showEntityViewTable()">
<label id="rdColumnSpan2Label" for="entityViewRadio">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.DisplayEntityViewLabel" runat="server"/>
</label></td>
<td title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.DisplayQueueLabel.Tooltip' runat='server'/>"><input name="rdColumnSpan" id="queueViewRadio" type="radio" class="radio" onclick="showQueueViewTable()">
<label id="rdColumnSpan1Label" for="queueViewRadio">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.DisplayQueueLabel" runat="server"/>
</label></td>
</tr>
</table>
<br />
</div>
<div id="tab0" class="ms-crm-Tab" style="display: block;width:auto;position:fixed;top:135px;bottom:0px;">
<table width="100%" style="table-layout: fixed;" cellspacing="10">
<tr title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueNameLabel.Tooltip' runat='server'/>">
<td>
<label id="queueNameLabel"  for="queueName">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueNameLabel" runat="server"/>
</label>
</td>
<td>
<ui:select id="queueName" runat="server" /></td>
</tr>
<tr title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueItemViewLabel.Tooltip' runat='server'/>">
<td>
<label id="queueItemViewLabel" for="queueItemView">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueItemViewLabel" runat="server"/>
</label>
</td>
<td>
<ui:select id="queueItemView" runat="server" /></td>
</tr>
<tr title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueEntityLabel.Tooltip' runat='server'/>">
<td>
<label id="queueEntityLabel" for="queueEntity">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.QueueEntityLabel" runat="server"/>
</label></td>
<td>
<ui:select id="queueEntity" runat="server" /></td>
</tr>
</table>
<br />
</div>
<div id="tab1" class="ms-crm-Tab" style="display: block;width:auto;position:fixed;top:135px;bottom:0px;">
<table width="100%" style="table-layout: fixed;" cellspacing="10">
<tr title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.EntityLabel.Tooltip' runat='server'/>">
<td>
<label id="entityNameLabel" for="entityPicker">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.EntityLabel" runat="server"/>
</label></td>
<td>
<ui:select id="entityPicker" onchange="populateViewsForSelectedEntity()" runat="server" /></td>
</tr>
<tr title="<loc:Text ResourceId='SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.ViewNameLabel.Tooltip' runat='server'/>">
<td>
<label id="viewNameLabel" for="viewPicker">
<loc:Text ResourceId="SystemCustomization.InteractionCentricDashboardPage.Dialogs.AddQueueDialog.Labels.ViewNameLabel" runat="server"/>
</label></td>
<td>
<ui:select id="viewPicker" runat="server" /></td>
</tr>
</table>
<br />
</div>
</div>
</frm:DialogForm>
</div>
</body>
</html>
