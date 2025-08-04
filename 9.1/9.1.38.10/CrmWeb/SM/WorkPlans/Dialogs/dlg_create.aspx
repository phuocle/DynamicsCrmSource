<!DOCTYPE html >

<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Web.CreateCalendarDialogPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>
<html>
<head>
<cnt:appheader runat="server" id="crmHeader" />
<script language="JavaScript">
var _windowOpener = null;
Sys.Application.add_load(function () {
if (getDialogArguments() != null) {
_windowOpener = getDialogArguments().opener;
}
});
function applychanges() {
if (!$get('txtName').value.trim().length == 0) {
var command = new RemoteCommand("SchedulePlanning", "SaveCustomerServiceCalendar");
command.SetParameter("calendarName", $get("txtName").value);
command.SetParameter("calendarDescription", $get("txtdescription").value);
command.SetParameter("serviceCalendarType", $get("serviceCalendarType").value);
var result = command.Execute();
if (result.Success) {
if ((result.ReturnValue.length != undefined)) {
if ($get("serviceCalendarType").value == "1") {
var dialogUrl = Mscrm.CrmUri.create("/SM/WorkPlans/edit.aspx");
dialogUrl.get_query()["calendarId"] = result.ReturnValue;
dialogUrl.get_query()["oType"] = Mscrm.EntityTypeCode.SystemUser;
dialogUrl.get_query()["resourceId"] = Xrm.Page.context.getUserId();
dialogUrl.get_query()["calendarType"] = "<%=CustomerService%>";
if (!isOutlookHostedWindow()) {
window.parent.$get("InlineDialog_Background").style.display = "none";
window.parent.$get("InlineDialog").style.display = "none";
}
openStdWin(dialogUrl, "Calendar", 550, 700, null);
}
if (_windowOpener != null) {
_windowOpener.auto(Mscrm.EntityTypeCode.Calendar);
}
closeWindow();
}
else {

if ($get("serviceCalendarType").value != "1") {
alert(LOCID_SELECT_DIFF_CAL_NAME);
}
else {
alert(LOCID_SELECT_DIFF_SCH_NAME);
}
}
}
else {
if ($get("serviceCalendarType").value != "1") {
alert(LOCID_ERROR_HOLIDAY_CAL_CREATE);
}
else {
alert(LOCID_ERROR_CAL_CREATE);
}
}
}
else {

if ($get("serviceCalendarType").value != "1") {
alert(LOCID_SELECT_HOLIDAY_CAL_NAME);
}
else {
alert(LOCID_SELECT_CAL_NAME);
}

}
}
function cancel() { closeWindow(); }
</script>
</head>
<body>
<frm:dialogform id="crmForm" runat="server">
<input type="hidden" id="serviceCalendarType" name="serviceCalendarType" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(_serviceCalendarType)%>">
<div id="notificationWrapper">
<cnt:AppNotifications id="Notifications" runat="server"/>
</div>
<table id="customerServiceTable" width="70%" cellspacing="0" cellpadding="0">
<tr height="25">
<td id="nameLabel" class="ms-crm-Field-Required" width="30%">
<label for="name"><loc:text resourceid="SM_Customer_Service_Schedule_Dialog_Title_01" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td width="70%"><ui:textbox id="txtName" tabindex="1" runat="server" /></td>
</tr>
<tr height="35">
<td id="description" width="30%">
<label for="description"><loc:text resourceid="SM_Customer_Service_Schedule_Dialog_Title_02" runat="server" /></label>
</td>
<td width="70%"><ui:textarea id="txtdescription" tabindex="2" runat="server" rows="3" /></td>
</tr>
</table>
</frm:dialogform>
</body>
</html>
