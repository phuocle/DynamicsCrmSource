<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Tools.ContractCalendarPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="System.Globalization" %>
<!Doctype html>
<html>
<head>
<script language="javascript">

function applychanges() {
var calendarElement = $get("effectivitycalendar");
var calendarControl = $find("effectivitycalendarowner");
if (calendarControl.validateMask()) {

var s = calendarElement.value;



if (s != calendarElement.setAttribute('defaultValue', calendarElement.getAttribute('defaultValue') != null ? calendarElement.getAttribute('defaultValue').replace(/ /g, "+") : "" )) {

var sXml = "<" + _sObjectName + "><effectivitycalendar>" + s + "</effectivitycalendar></" + _sObjectName + ">";

var command = new RemoteCommand("CustomerService", "SaveContractCalendar");

command.SetParameter("entityId", _guidEntityId);
command.SetParameter("objectType", _iObjectType);
command.SetXmlParameter("content", sXml);

var result = command.Execute();

if (!result.Success) {
return;
}

$find("crmForm").set_saving(true);
}

closeWindow();
}
}

function cancel() {
closeWindow();
}

</script>
</head>
<body>
<frm:HardCodedForm id="crmForm" runat="server">
<cnt:AppContractCalendar id="effectivitycalendar" runat="server"/>
</frm:HardCodedForm>
</body>
</html>

