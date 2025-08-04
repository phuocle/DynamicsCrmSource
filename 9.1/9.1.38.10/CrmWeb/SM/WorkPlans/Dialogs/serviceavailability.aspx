<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Dialogs.SM.WorkPlans.ServiceAvailabilityRulePage" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Security" %>
<%@ Import Namespace="Microsoft.Crm" %>

<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">

var _scheduledend = null;
var _scheduledstart = null;
var _serviceid = null;

Sys.Application.add_load(function()
{
_scheduledend = Mscrm.FormControlInputBehavior.GetBehavior("scheduledend");
_scheduledstart = Mscrm.FormControlInputBehavior.GetBehavior("scheduledstart");
initDates();
_serviceid =  Mscrm.FormControlInputBehavior.GetBehavior("serviceid");
attachTimeControlEvents();
<% =RenderInitCalendar() %>
_bSupressEndMidnightWarning = true;
suppressEvents(true);
setupDefaultTimes();
});

function setupDefaultTimes()
{
var oRet = getDialogArguments()($get("calendarruleid").value);
if ($get("calendarruleid").value != "")
{
oLookupItem = new LookupControlItem(XUI.Xml.GetText(oRet.serviceId), Service, XUI.Xml.GetText(oRet.serviceName));
aoItems = new Array();
aoItems.push(oLookupItem);
_serviceid.set_dataValue(aoItems);

_scheduledstart.set_dataValue(oRet.ScheduledStart);
_scheduledend.set_dataValue(oRet.ScheduledEnd);


endTimeChanged();
}
else
{
_scheduledstart.set_dataValue(oRet.whScheduledStart);
_scheduledend.set_dataValue(oRet.whScheduledEnd);


endTimeChanged();
}
}

function cancel()
{
closeWindow();
}

function validateTimeControls()
{
var scheduledEndValue = _scheduledend.get_dataValue();
var scheduledStartValue = _scheduledstart.get_dataValue();

if (EndCrossesMidnight() && GetScheduledEndValue().getHours() != 12)
{

var endDateTime = new Date(scheduledStartValue.valueOf());
endDateTime.setHours(scheduledEndValue.getHours(),
scheduledEndValue.getMinutes(), 0, 0);
_scheduledend.set_dataValue(new Date(endDateTime.valueOf()));
}

if (GetScheduledEndValue() <= scheduledStartValue)
{
alert(LOCID_SPECIFY_END_TIME);

setupDefaultTimes();
return false;
}

return true;
}

function applychanges()
{
var aoItems = _serviceid.get_dataValue();
if (IsNull(aoItems))
{
alert(LOCID_SELECT_SERVICE_TO_RESTRICT);
return false;
}

if (!validateTimeControls())
{
return false;
}

var callbackParams = {};

var scheduledStart = _scheduledstart.get_dataValue();
var scheduledEnd = GetScheduledEndValue();

callbackParams.calRuleId = $get("calendarruleid").value;
callbackParams.serviceId = aoItems[0].id;
callbackParams.serviceName = aoItems[0].name;
callbackParams.duration = scheduledEnd - scheduledStart;
callbackParams.scheduledStartOffset = scheduledStart.getHours() * 60 + scheduledStart.getMinutes();

Mscrm.Utilities.setReturnValue(callbackParams);

closeWindow();
}
</script>
</head>
<body>
<frm:DialogForm id="crmForm" runat="server">
<div class="main ms-crm-absolutePosition">
<div class="ms-crm-TabBar-Cell" style="height:20px;">
<crm:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tab0" class="ms-crm-Tab" style="position:absolute; top:20px; bottom:0px; left:0px; right:0px; height:auto;">
<table width="100%">
<tr height="24">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" valign="bottom"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__118" runat="server"/></td>
</tr>
<tr height="28">
<td colspan="2" nowrap valign="center">
<table width="100%">
<tr>
<td width="15%"><label for="serviceid"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__124" runat="server"/></label></td>
<td id="crmServiceLookupTd" width="85%">
<sdk:LookupControl id="serviceid" AccessibilityLabelResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__124" LookupStyle="single" tabindex="0" runat="server"/>
</td>
</tr>
</table>
</td>
</tr>
<tr height="24">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="2" valign="bottom"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__131" runat="server"/></td>
</tr>
<tr>
<td colspan="2" nowrap valign="center">
<div id="ondaydiv" style="display: <%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(OnDayDisplay)%>">
<table width="100%">
<tr>
<td width="15%"><label for="onday"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__138" runat="server"/></label></td>
<td width="20%"><ui:Select id="onday" runat="server" tabindex="0" /></td>
<td width="65%"></td>
</tr>
</table>
</div>
</td>
</tr>
<tr height="28">
<td width="50%" nowrap valign="center">
<table width="100%">
<tr>
<td width="30%"><label for="scheduledstart"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__150" runat="server"/></label></td>
<td width="70%"><ui:DateTimeUI id="scheduledstart" tabindex="0" runat="server" AllowBlankDate="False" /></td>
</tr>
</table>
</td>
<td width="50%" nowrap valign="center">
<div id="allday0" style="display: none">
<label for="isalldayevent"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__157" runat="server"/></label>
<input type="checkbox" id="isalldayevent" tabindex="0" name="crmFormChkAllDay" style="border:0px; width:20px" <%=(AllDayEvent ? "checked" : "")%>/>
</div>
</td>
</tr>
<tr height="28">
<td width="50%" nowrap valign="center">
<table width="100%">
<tr>
<td width="30%"><label for="scheduledend"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__167" runat="server"/></label></td>
<td width="70%"><ui:DateTimeUI id="scheduledend" tabindex="0" runat="server" AllowBlankDate="False" /></td>
</tr>
</table>
</td>
<td width="50%" nowrap valign="center">
<div id="allday0" style="display: none">
<table width="100%">
<tr>
<td width="30%"><label for="scheduleddurationminutes"><loc:Text ResourceId="Web.SM.WorkPlans.Dialogs.serviceavailability.aspx__175" runat="server"/></label></td>
<td width="70%"><ui:Duration id="scheduleddurationminutes" tabindex="0" runat="server" /></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
</div>
</div>
<input type="hidden" id="calendarruleid" name="calendarruleid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarRuleId)%>">
</frm:DialogForm>
</body>
