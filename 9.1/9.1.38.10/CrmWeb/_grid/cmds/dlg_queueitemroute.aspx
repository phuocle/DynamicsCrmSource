<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.QueueItemRouteDialogForm" CodeBehind="Microsoft.Crm.Application.Pages.dll" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
div.Desc
{
padding-top:5px;
color: #444444;
}
</style>

<script type="text/javascript">


var _sAction = "queueitemroute";
var _crmQueueLookup = null;
var _crmUserLookup = null;

function userOptionRadioClick(eventObj) {
_crmUserLookup.set_disabled((eventObj.target.id == "rdExistingUser"));
}

function DisableOkButton() {
$get("butBegin").disabled = IsNull(_crmQueueLookup.get_dataValue());
}

function applychanges() {
var queueLookupDataValue = _crmQueueLookup.get_dataValue();
if (IsNull(queueLookupDataValue)) {
alert(LOCID_NOONE_SELECTED);
}
else if (0 != queueLookupDataValue.length) {
_custParams = "&queueId=" + CrmEncodeDecode.CrmUrlEncode(queueLookupDataValue[0].id);
var userLookupDataValue = _crmUserLookup.get_dataValue();
if (!IsNull(userLookupDataValue) && 0 != userLookupDataValue.length) {
_custParams = _custParams + "&workerid=" + CrmEncodeDecode.CrmUrlEncode(userLookupDataValue[0].id);

if ("8" == userLookupDataValue[0].type) {
_custParams += "&workertype=8";
}
else {
_custParams += "&workertype=9";
}
}


_custParams = _custParams + "&keepexistinguser=" + CrmEncodeDecode.CrmUrlEncode(document.getElementsByName("rdUserOptions")[0].checked);


go();
}
}

Sys.Application.add_load(queueItemRouteOnLoad);
function queueItemRouteOnLoad() {
_crmQueueLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmQueueLookup');
_crmUserLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmUserLookup');
_crmQueueLookup.add_afterSelect(DisableOkButton);
_crmQueueLookup.Focus();
}
</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<table width="100%" height="100%" cellspacing="0" cellpadding="0">
<col width="26"><col>
<tr>
<td>&nbsp;</td>
<td colspan="2">
<div class="Desc" style="padding-bottom:10px;">
<label for="crmQueueLookup">
<loc:Text ResourceId="Dialog_AddToQueue_LabelDetails" runat="server"/>
</label>
</div>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td colspan="2">

<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<sdk:LookupControl id="crmQueueLookup" AccessibilityLabelResourceId="Dialog_AddToQueue_LabelDetails" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td colspan="3">
<div class="Desc" style="padding-bottom:10px;">
<label>
<loc:Text ResourceId="Dialog_QueueItemRoute_RouteLaterInfo" runat="server"/>
</label>
</div>
</td></tr>
<tr>
<td>&nbsp;</td>
<td style="width:8.4%">
<input type="radio" class="radio" id="rdExistingUser" name="rdUserOptions" value="0" runat="server" onclick="userOptionRadioClick(new Sys.UI.DomEvent(event))"/>
</td>
<td style="width:85.7%">
<div class="Desc" style="padding-bottom:8px;">
<label for="rdExistingUser">
<loc:Text ResourceId="Dialog_QueueItemRoute_ExistingUserAssignment" runat="server"/>
</label>
</div>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td style="width:8.4%">
<input type="radio" class="radio" id="rdSelectedUser" name="rdUserOptions" checked value="1" runat="server" onclick="userOptionRadioClick(new Sys.UI.DomEvent(event))"/>
</td>
<td style="width:85.7%">
<div class="Desc" style="padding-bottom:8px;">
<label for="rdSelectedUser">
<loc:Text ResourceId="Dialog_QueueItemRoute_LabelDetails" runat="server"/>
</label>
</div>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>

<table cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<sdk:LookupControl id="crmUserLookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
</table>
</frm:DialogForm>
</body>
</html>
