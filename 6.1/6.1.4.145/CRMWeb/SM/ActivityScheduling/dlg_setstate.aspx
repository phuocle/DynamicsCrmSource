<%@ Page language="c#" Inherits="Microsoft.Crm.Dialogs.SetStateDialogPage" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>

<script type="text/javascript" language="JavaScript">
var _bAllowScheduling = false;

Sys.Application.add_load(function() {
if (iObjType == ServiceAppointment) {
_bAllowScheduling = true;
}
});

function applychanges()
{

var statusCodeControl = Mscrm.FormControlInputBehavior.GetBehavior("statusCode");
var iNewStatus = statusCodeControl.get_dataValue();
var iNewState = StatusToState(iNewStatus);
if (iNewState != iCurrentState && iNewState == iScheduledState && _bAllowScheduling && IsOnline())
{



var sXml = "<serviceappointment><statuscode>" + iNewStatus + "</statuscode></serviceappointment>";


command = new RemoteCommand("ActivitiesWebService", "Reschedule");
command.SetParameter("id", sId);
command.SetXmlParameter("content", sXml);
command.SetParameter("typeCode", iObjType);
var oResult = command.Execute();

if (oResult.Success)
{
if(oResult.ReturnValue.OperationSuccess)
{

Mscrm.Utilities.setReturnValue(1);
closeWindow();
}
else
{


var notification = oResult.ReturnValue.Notifications.Notification;
var aNotifications = new Array();
var oNotification;
var args;
if (!isArray(notification))
{
aNotifications.push( notification );
}
else
{
aNotifications = notification;
}

var oUrl = Mscrm.CrmUri.create("/SM/ActivityScheduling/SchedulingNotificationsDialog.aspx?AllowSchedule=true");

var parameters = new Array(iNewState, iNewStatus);
var crmDialog = new Mscrm.CrmDialog(oUrl, aNotifications, 600, 300, null)
crmDialog.setCallBackInfo("performActionAfterNotifications", this, parameters);
crmDialog.show();
}
}
}
else
{
ChangeState(iNewState, iNewStatus);
}
}

function performActionAfterNotifications(sResult, iNewState, iNewStatus) {

if (!JsTypes.IsNull(sResult)) {
sResult = "Save";
}

switch (sResult) {
case "Save":
ChangeState(iNewState, iNewStatus);
break;
case "Cancel":
cancel();
break;
case "Schedule":
Mscrm.Utilities.setReturnValue(2);
closeWindow();
break;

}
}

function ChangeState(iState, iStatus)
{
command = new RemoteCommand("ActivitiesWebService", "ChangeState");
command.SetParameter("id", sId);
command.SetParameter("state", iState);
command.SetParameter("status", iStatus);
command.SetParameter("typeCode", iObjType);
var oResult = command.Execute();

if (oResult.Success)
{
Mscrm.Utilities.setReturnValue(1);
closeWindow();
}
}



function StatusToState(status)
{
var iState;
var statusCode = $get('statusCode');


XUI.Html.DomUtils.ForEachChild(statusCode, function (optionGroup) {


XUI.Html.DomUtils.ForEachChild(optionGroup, function (option) {
if (option.getAttribute("value") == status) {
iState = optionGroup.getAttribute("state");
return true;
}
});


return !isNullOrEmptyString(iState) ? true : false;
});

return iState;
}

function cancel()
{
Mscrm.Utilities.setReturnValue(0);
closeWindow();
}

</script>

<table cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;margin-top:5px;">
<col width="80"><col>
<tr>
<td class="dlg_setstate_td_LblStatus"><label for="statusCode"><loc:Text ResourceId="Dialog_Label_Status" runat="server"/></label></td>
<td>
<sdk:PicklistStatusControl runat="server" id="statusCode"/>
</td>
</tr>
</table>
