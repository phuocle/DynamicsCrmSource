<%@ Page Language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.HolidayRulePage" %>

<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<style type="text/css">
#Notifications
{
height: auto !important;
margin-bottom:5px;
}
</style>
</head>
<script language="javascript">
var cType;
var holidaySchedule;
Sys.Application.add_load(function()
{
cType=<%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(CalendarType)%>;
holidaySchedule="<%=Util.HolidaySchedule%>";
if (cType == holidaySchedule)
{
$get("scheduledendTime").style.display="none";
$get("scheduledstartTime").style.display="none";
$get("tdCrmFormChkAllDay").style.display="none";
}
initDates();
<% =RenderInitCalendar() %>
if ("<%=AllDayEvent%>" == "True")
{
setWorkday();
}
$get("name").focus();
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
if (name_to_validate.length == 0)
{
alert(LOCID_NAME_TOO_SHORT);
return false;
}

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
if (!ValidateName(Trim(oName.value)))
{
oName.focus();
oName.select();
return false;
}

var command = new RemoteCommand("SchedulePlanning", "SaveHoliday");
command.SetParameter("calendarIdString", $get("calendarid").value);
command.SetParameter("calendarRuleIdString", $get("calendarruleid").value);
command.SetParameter("name", Trim(oName.value));

command.SetParameter("scheduledStart", FormatUtcDate(Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart").get_dataValue()));
command.SetParameter("scheduledEnd", FormatUtcDate(Mscrm.FormControlInputBehavior.GetBehavior("scheduledend").get_dataValue()));

var result = command.Execute();
if (!result.Success) {
return false;
}
else{
Mscrm.Utilities.setReturnValue(result.Success);
if (!Mscrm.Utilities.isModalDialogSupported()) RefreshParentGrid(CalendarRule);
closeWindow();
}
}
function RefreshParentGrid(EType)
{
try
{
var win = window.opener;
if (!win)
{
win = window.parent.opener;
}
win.auto(EType);
}
catch (e)
{ }
}

</script>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="main ms-crm-absolutePosition">
<div>
<crm:appnotifications id="Notifications" runat="server" />
</div>
<div class="ms-crm-TabBar-Cell" style="position: relative; top: 0px; left: 0px; right: 0px;
height: 20px;">
<crm:apptabbar id="crmTabBar" runat="server" />
</div>
<div id="tab0" class="ms-crm-Tab" style="position: relative; top: 0px; bottom: 0px;
left: 0px; right: 0px; height: auto;">
<table width="100%">
<tr height="24">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" valign="bottom">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__130" runat="server" />
</td>
</tr>
<tr height="28">
<td width="70%" nowrap valign="center">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td id="nameLabel" class="ms-crm-Field-Required" width="40%">
<label for="name">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.holiday.aspx__136" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td width="60%">
<ui:textbox id="name" tabindex="1" runat="server" />
</td>
</tr>
</table>
</td>
<td width="30%" nowrap valign="center">
</td>
</tr>
</table>
<table width="100%">
<tr height="28">
<td width="70%" nowrap valign="center">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td width="40%">
<label for="scheduledstart">
<% if(CalendarType==Util.HolidaySchedule){ %><loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__220"
runat="server" />
<%} else{ %>
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__149" runat="server" />
<% }%>
</label>
</td>
<td width="60%">
<ui:datetimeui id="scheduledstart" tabindex="2" runat="server" allowblankdate="False" />
</td>
</tr>
</table>
</td>
<td width="30%" nowrap valign="center" id="tdCrmFormChkAllDay">
<input type="checkbox" id="isalldayevent" tabindex="5" name="crmFormChkAllDay" style="border: 0px;
width: 20px" <%=( AllDayEvent ? "checked" : "") %> />
<label for="isalldayevent">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__155" runat="server" />
</label>
</td>
</tr>
<tr height="28">
<td width="70%" nowrap valign="center">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td width="40%">
<label for="scheduledend">
<% if(CalendarType==Util.HolidaySchedule){ %><loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__221"
runat="server" />
<%} else{ %>
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__164" runat="server" />
<% }%>
</label>
</td>
<td width="60%">
<ui:datetimeui id="scheduledend" tabindex="3" runat="server" allowblankdate="False" />
</td>
</tr>
</table>
</td>
<td width="30%" nowrap valign="center">
</td>
</tr>
<tr height="24">
<td width="70%" nowrap valign="center">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td width="40%">
<label for="scheduleddurationminutes">
<loc:text resourceid="Web.SM.WorkPlans.Dialogs.timeoff.aspx__173" runat="server" />
</label>
</td>
<td width="60%">
<ui:duration id="scheduleddurationminutes" tabindex="4" runat="server" />
</td>
</tr>
</table>
</td>
<td width="30%" nowrap valign="center">
</td>
</tr>
</table>
</div>
</div>
<input type="hidden" id="calendarid" name="calendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId)%>">
<input type="hidden" id="innercalendarid" name="innercalendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(InnerCalendarId)%>">
<input type="hidden" id="calendarruleid" name="calendarruleid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarRuleId)%>">
<input type="hidden" id="mode" name="mode" value="<%=(EditMode ? "True" : "False")%>">
<input type="hidden" id="calendartype" name="calendartype" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarType)%>" />
</frm:DialogForm>
</body>
