<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Dialogs.BulkDeleteRecurrenceSettingsDialog"   %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>

<cnt:AppHeader id="crmHeader" runat="server" />
<title><loc:Text ResourceId="Web.Tools.Bulkdelete.BulkDeleteSettings.aspx_title" runat="server"/></title>

<script type="text/javascript" language="javascript">

function cancel() {
Mscrm.Utilities.setReturnValue(false);
closeWindow();
}

function onChangeNumberOfDays() {
var numberOfDaysInputControl = document.getElementById("numberOfDaysInput");

var numDaysValue = parseInt(numberOfDaysInputControl.value, 10);

if (!(numDaysValue > 0 && numDaysValue <= 365)) {

if ($get("rdSchedule").checked == true) {
alert(LOCID_DD_ENTERINTEGER);
numberOfDaysInputControl.value = parseInt(numberOfDaysInputControl.lastValue, 10);
return false;
}
else {
numberOfDaysInputControl.value = parseInt(numberOfDaysInputControl.lastValue, 10);
return true;
}
}
return true;
}
function applychanges() {
var todayStartTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("todayStartTime");
var startTimeCtrl = Mscrm.FormControlInputBehavior.GetBehavior("startTime");
if (onChangeNumberOfDays() == false) {
return;
}
if ($get("rdNever").checked) {
_custParams = "&recStartTime=" + "&recPattern=";
}
else if ($get("rdToday").checked) {
if (todayStartTimeCtrl.get_dataValue() < LocalDateTimeNow()) {
alert(LOCID_DD_INVALID_TIME);
return;
}
else {
_custParams = "&recStartTime=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(todayStartTimeCtrl.get_dataValue())) + "&recPattern=";
}
}
else if ($get("rdSchedule").checked) {
var interval = $find("numberOfDays").get_returnValueProperty();
_custParams = "&recStartTime=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(startTimeCtrl.get_dataValue())) + "&recPattern=" + "FREQ=DAILY;INTERVAL=" + interval + ";";
}
else {
alert(LOCID_DD_CHOOSE_OPTION);
return;
}

go();

Mscrm.Utilities.setReturnValue(true);
}
</script>

</head>

<body>

<frm:DialogForm id="crmForm" runat="server" DialogTab="false">
<table width="100%">
<col width=2%><col width=3%><col width=5%><col width=55%><col width=20%><col>
<tr>
<td></td>
<td colspan="5"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(runJobLabel) %></td>
</tr>
<tr>
<td></td>
<td><input type="radio" class="radio" id="rdNever" name="rdRecurrenceOptions" value="0" runat="server"></td>
<td colspan="4"><label class="radioLabel" for="rdNever"><loc:Text ResourceId="BulkDeleteSettings.aspx_NeverOptionLabel" runat="server"/></label></td>
</tr>
<tr>
<td></td>
<td><input type="radio" class="radio" id="rdToday" name="rdRecurrenceOptions" value="1" runat="server"></td>
<td colspan="2"><label class="radioLabel" for="rdToday"><loc:Text ResourceId="BulkDeleteSettings.aspx_TodayOptionLabel" runat="server"/></label></td>
<td><ui:DateTimeUI id="todayStartTime" runat="server" AllowBlankDate="False" DisplayFormat="time"  /></td>
<td></td>
</tr>
<tr>
<td></td>
<td><input type="radio" class="radio" id="rdSchedule" name="rdRecurrenceOptions" value="2" runat="server"></td>
<td colspan="4"><label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_ScheduleOptionLabel" runat="server"/></label></td>
</tr>
<tr>
<td colspan="3"></td>
<td><label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionLabel" runat="server"/></td>
<td><ui:EditableSelect id="numberOfDays" onchange="onChangeNumberOfDays();" onfocusout="onChangeNumberOfDays();" runat="server"/></td>
<td><label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_ReRunOptionDaysLabel" runat="server"/></td>
</tr>
<tr>
<td colspan="3"></td>
<td><label class="radioLabel" for="rdSchedule"><loc:Text ResourceId="BulkDeleteSettings.aspx_StartTimeOptionLabel" runat="server"/></td>
<td><ui:DateTimeUI id="startTime" runat="server" AllowBlankDate="False" DisplayFormat="time"  /></td>
<td></td>
</tr>
</table>
</frm:DialogForm>

</body>
</html>
