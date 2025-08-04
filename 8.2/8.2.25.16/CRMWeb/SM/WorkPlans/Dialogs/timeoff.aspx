<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.TimeOffRulePage" %>

<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">
var cType;
var holidaySchedule;

var _scheduledend = null;
var _scheduledstart = null;
Sys.Application.add_load(function()
{
cType=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CalendarType)%>;
holidaySchedule="<%=Util.HolidaySchedule%>";
initDates();
_scheduledend = Mscrm.FormControlInputBehavior.GetBehavior("scheduledend");
_scheduledstart = Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart");
attachTimeControlEvents();
<% =RenderInitCalendar() %>
if ("<%=AllDayEvent%>" == "True")
{
setWorkday();
}
});




function setWorkday( )
{
<% =RenderSetWorkday() %>

_workdayStartPlusHalfHour = new Date( _workdayStart );
_workdayStartPlusHalfHour.setMinutes( _workdayStartPlusHalfHour.getMinutes( ) + 30 );


setAllDay()
}

function cancel()
{
closeWindow();
}

function ValidateName(name_to_validate)
{
if (name_to_validate.length > 50)
{
alert(LOCID_NAME_TOO_LONG);
return false;
}

return true;
}

function applychanges()
{
var oName = $get("name");
if (!ValidateName(oName.value))
{
oName.focus();
oName.select();
return false;
}

var command = new RemoteCommand("SchedulePlanning", "SaveTimeOff");
command.SetParameter("resourceIdString", $get("resourceid").value);
command.SetParameter("calendarIdString", $get("calendarid").value);
command.SetParameter("calendarRuleIdString", $get("calendarruleid").value);
command.SetParameter("name", Trim(oName.value));
command.SetParameter("scheduledStart", FormatUtcDate(_scheduledstart.get_dataValue()));
command.SetParameter("scheduledEnd", FormatUtcDate(_scheduledend.get_dataValue()));
command.SetParameter("timeZone", $get("timeZone").value);
var oType=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(ObjectTypeCode.ToString())%>;
command.SetParameter("oType", oType);
var result = command.Execute();
Mscrm.Utilities.setReturnValue(result.Success);

if (result.Success)
{
if ($get("mode").value == "True")
{

var oArgs = getDialogArguments();
if (oArgs.parent.auto)
{

oArgs.parent.auto(CalendarRule);
}
}
}
closeWindow();
}

</script>
</head>

<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="main ms-crm-absolutePosition">
<div class="ms-crm-TabBar-Cell" style="height:20px;">
<crm:apptabbar id="crmTabBar" runat="server" />
</div>
<div id="tab0" class="ms-crm-Tab" style="position:absolute; top:20px; bottom:0px; left:0px; right:0px; height:auto;">
<table width="100%">
<colgroup>
<col width="20%" />
<col width="50%" />
<col width="30%" />
</colgroup>
<tr height="24">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__130" runat="server" />
</td>
</tr>
<tr height="28">
<td>
<label for="name">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__136" runat="server" />
</label>
</td>
<td>
<ui:textbox id="name" runat="server" />
</td>
<td />
</tr>
<tr height="28">
<td>
<label for="scheduledstart">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__149" runat="server" />
</label>
</td>
<td>
<ui:datetimeui id="scheduledstart" runat="server" allowblankdate="False" />
</td>
<td nowrap valign="center">
<input type="checkbox" id="isalldayevent" tabindex="5" name="crmFormChkAllDay" style="border: 0px; width: 20px" <%=( AllDayEvent ? "checked" : "") %> />
<label for="isalldayevent">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__155" runat="server" />
</label>
</td>
</tr>
<tr height="28">
<td>
<label for="scheduledend">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__164" runat="server" />
</label>
</td>
<td>
<ui:datetimeui id="scheduledend" runat="server" allowblankdate="False" />
</td>
<td />
</tr>
<tr height="24">
<td>
<label for="scheduleddurationminutes">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__173" runat="server" />
</label>
</td>
<td>
<ui:duration id="scheduleddurationminutes" runat="server" />
</td>
<td />
</tr>
<tr height="24">
<td>
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__186" runat="server" />
</td>
<td colspan="2">
<crm:apptimezonecontrol id="timeZone" autobinding="false" runat="server" />
</td>
</tr>
</table>
</div>
</div>
<input type="hidden" id="resourceid" name="resourceid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ResourceId)%>">
<input type="hidden" id="calendarid" name="calendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId)%>">
<input type="hidden" id="innercalendarid" name="innercalendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(InnerCalendarId)%>">
<input type="hidden" id="calendarruleid" name="calendarruleid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarRuleId)%>">
<input type="hidden" id="typename" name="typename" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(TypeName)%>">
<input type="hidden" id="mode" name="mode" value="<%=(EditMode ? "True" : "False")%>">
</frm:DialogForm>
</body>

