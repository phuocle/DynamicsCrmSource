<!DOCTYPE html />
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.SM.WorkPlans.WorkPlanDetailPage" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web" Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm"%>
<%@ Import Namespace="Microsoft.Crm.Application.Types"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title><loc:Text ResourceId="SM_Weekly_Schedule" runat="server"/></title>
<cnt:AppHeader id="crmHeader" runat="server" />
<script language="javascript">
var _isClickHandlerAddedForDay = new Array();
var _originalHeight;
var _originalWidth;
var _windowSizeChanged = false;
var _bypassReload = false;
var _start = null;
var _windowOpener = null;
var _crmCalendarLookup = null;
var lookupRow = null;

Sys.Application.add_load(function ()
{
if ($get("calendarType").value == "<%=CustomerService%>")
{
_crmCalendarLookup = Mscrm.FormControlInputBehavior.GetBehavior('crmCalendarLookup');
}
window.IsFromCSSPage = true;
lookupRow = document.getElementById('calendarLookup_row8');



if ((!IsNull("<%=ClosureMode%>")) && "<%=ClosureMode%>" == "observe") {
$get("rad3").checked = "checked";
$get("closurelinkmode").value = "observe";
if ($get("calendarType").value == "<%=CustomerService%>")
lookupRow.style.visibility = 'visible';
}
else if ((!IsNull("<%=ClosureMode%>")) && "<%=ClosureMode%>" == "donotobserve") {
$get("rad4").checked = "checked";
$get("closurelinkmode").value = "donotobserve";
if ($get("calendarType").value == "<%=CustomerService%>")
lookupRow.style.visibility = 'hidden';
}

$addHandler(document, 'keydown', document_onkeydown);
_start = Mscrm.FormControlInputBehavior.GetBehavior("start");
_originalHeight = window.document.body.offsetHeight;
_originalWidth = window.document.body.offsetWidth;
$find("crmForm").add_onSave(Save);
if ($get("calendarType").value != "<%=CustomerService%>")
{
$get("customerServiceTable").style.display = "none";
}
else if ($get("calendarType").value == "<%=CustomerService%>")
{
$get("dateTimeTr").style.display = "none";
}
_start.add_change(onChangeEndDate);
onChangeEndDate(null, true);

var notificationWrapper = $get("notificationWrapper");
var crmTabBarWrapper = $get("crmTabBarWrapper");
var tab0 = $get("tab0");
crmTabBarWrapper.style.top = (IsNull(notificationWrapper) ? 0 : notificationWrapper.offsetHeight).toString() + "px";
tab0.style.top = ((IsNull(notificationWrapper) ? 0 : notificationWrapper.offsetHeight) + crmTabBarWrapper.offsetHeight).toString() + "px";

onUpdateUI();
try
{
_windowOpener = window.opener;
}
catch (e) {



}
refreshOpener();
attachWindowOnUnload(OnPageUnload);
});

function refreshOpener()
{
try
{
if (!IsNull(_windowOpener))
_windowOpener.auto($get("calendarType").value == "<%=CustomerService%>" ? Mscrm.EntityTypeCode.Calendar : Mscrm.EntityTypeCode.CalendarRule);

}
catch(e)
{



}
}
function OnPageUnload() {
$removeHandler(document, 'keydown', document_onkeydown);
}

function IsAtleastOneDaySelected(idBase) {
var dayCnt;
for (dayCnt = 0; dayCnt < 7; dayCnt++) {
oCheckMark = $get(idBase + dayCnt.toString());
if (oCheckMark.checked == true) {
return true;
}
}
return false;
}

function Save(sender, args) {


if ($get("calendarType").value == "<%=CustomerService%>" && $get("rad1").checked && !IsAtleastOneDaySelected("xchk")) {
alert(LOCID_ATLEAST_WORKINGDAY_CHK);
if (args) {

args.preventDefault();
}
}
else if ($get("calendarType").value == "<%=CustomerService%>" && $get("closurelinkmode").value == "observe" && _crmCalendarLookup.get_dataValue() == null) {
alert(LOCID_DEFINE_HOLIDAY_CALENDAR);
if (args) {

args.preventDefault();
}
}
else {

SaveCalendar(sender, args);
}
}





function SaveCalendar(sender, args) {

if (($get("rad2").checked) || ($get("submitEnable").value == "true")) {

var checkMarks = new Array();
checkMarks.push($get("chk0").checked);
checkMarks.push($get("chk1").checked);
checkMarks.push($get("chk2").checked);
checkMarks.push($get("chk3").checked);
checkMarks.push($get("chk4").checked);
checkMarks.push($get("chk5").checked);
checkMarks.push($get("chk6").checked);
checkMarks.type = "boolean";

$get("currentStart").value = Mscrm.DateTimeUtility.formatDate(_start.get_dataValue());
$get("eventmode").value = args ? args.getSaveMode() : null;

if ($get("calendarType").value == "<%=CustomerService%>") {
var dataValue = _crmCalendarLookup.get_dataValue();
}
var command = new RemoteCommand("SchedulePlanning", "SaveWeeklySchedule");
command.SetParameter("resourceIdString", $get("resourceid").value);
command.SetParameter("calendarIdString", $get("calendarid").value);
command.SetParameter("innerCalendarIdString", $get("innercalendarid").value);
command.SetParameter("workRuleMode", $get("workrulemode").value);
command.SetParameter("observeClosuresString", $get("closurelinkmode").value);
command.SetParameter("currentStartString", $get("currentStart").value);
command.SetParameter("currentEndString", $get("currentEnd").value);
command.SetParameter("checkMarks", checkMarks);
command.SetParameter("timeZoneCode", $get("timeZone").value);
command.SetParameter("name", $get("name").value);
command.SetParameter("oType", $get("otype").value);

if (dataValue != null) {
command.SetParameter("holidayCalendarId", dataValue[0].id);
} else { command.SetParameter("holidayCalendarId", ""); }
command.SetParameter("description", $get("description").value);

var result = command.Execute();
Mscrm.Utilities.setReturnValue(result.Success);
if (result.Success) {

$find("crmForm").set_saving(true);
refreshOpener();
if (!_bypassReload) {
if ($get("eventmode").value == 1) {
var url = Mscrm.CrmUri.create(window.location.href);
url.get_query()["mode"] = "edit";
url.get_query()["closuremode"] = $get("closurelinkmode").value;
window.location.href = url.toString();
}
else {
closeWindow();
}
}
}
}
else {
alert(LOCID_DEFINE_WORKING_HOURS);
}
if (args) {

args.preventDefault();
}
}

function editVariedRule(eventObj)
{
var param = eventObj.target.id.charAt(eventObj.target.id.length - 1);
param = parseInt(param, 10);
switch (param)
{
case 0:
editworkinghours("<%=RenderRuleParameters(0)%>");
break;
case 1:
editworkinghours("<%=RenderRuleParameters(1)%>");
break;
case 2:
editworkinghours("<%=RenderRuleParameters(2)%>");
break;
case 3:
editworkinghours("<%=RenderRuleParameters(3)%>");
break;
case 4:
editworkinghours("<%=RenderRuleParameters(4)%>");
break;
case 5:
editworkinghours("<%=RenderRuleParameters(5)%>");
break;
case 6:
editworkinghours("<%=RenderRuleParameters(6)%>");
break;
}
}

function editworkinghours(params)
{
var url = Mscrm.CrmUri.create('/SM/workplans/Dialogs/TimeSheet.aspx?id=' + (!IsNull(params) ? params : "") + "&resourceid=<%=Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ResourceId)%>&oType=<%=Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(ParentType)%>&calendarid=<%=Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(CalendarId)%>&calendarType=<%=Microsoft.Crm.CrmEncodeDecode.CrmUrlEncode(CalendarType)%>");

var callbackFunc = Mscrm.Utilities.createCallbackFunctionObject("editworkinghourscallback", this, null, false);
var workshiftid = openStdDlgWithCallback(url, null, 640, 460, callbackFunc, true, false, "maximize:yes;minimize:yes");

if (isOutlookHostedWindow())
{
editworkinghourscallback(workshiftid);
}

}


function editworkinghourscallback(workshiftid)
{
if (workshiftid != null) {
$get("innercalendarid").value = workshiftid;
$get("submitEnable").value = "true";
_bypassReload = true;
var calendarruleid = SaveCalendar();

var url = Mscrm.CrmUri.create(window.location.href);
url.get_query()["id"] = workshiftid;


if ($get("closurelinkmode").value == "observe") {
url.get_query()["closuremode"] = "observe";
}
else if ($get("closurelinkmode").value == "donotobserve") {
url.get_query()["closuremode"] = "donotobserve";
}
window.location.href = url.toString();
}
}

function document_onkeydown(eventObj)
{
if (eventObj.keyCode == KEY_ENTER)
{
if (eventObj.target.id == "workinghourslink")
{
eventObj.preventDefault();
eventObj.stopPropagation();

editworkinghours("<%=RenderRuleParameters()%>");
}

if (eventObj.target.id.startsWith("workinghourslink"))
{
eventObj.preventDefault();
eventObj.stopPropagation();

editVariedRule(eventObj);
}

if (eventObj.target.tagName.toUpperCase() == "INPUT" &&
eventObj.target.getAttribute("type").toUpperCase() == "TEXT")
{
eventObj.preventDefault();
}
}
}


function onChangeEndDate(eventObject, writeOriginalEnd)
{
var i;
var oEndDates = new Array();
var oEndDate;
oEndDates = _endDates.split("|");
var currentEndDate = new Date(_start.get_dataValue());
for (i = 0; i < oEndDates.length - 1; i++)
{
oEndDate = ParseUtcDate(oEndDates[i]);
if (oEndDate > currentEndDate)
{
$get("endDateDescription").innerHTML = formatString(LOCID_UNTIL_DATE, Mscrm.DateTimeUtility.formatDate(oEndDate));
if (!IsNull(writeOriginalEnd))
{
$get("originalEnd").value = oEndDates[i];
$get("currentEnd").value = oEndDates[i];
}
else
{
$get("currentEnd").value = oEndDates[i];
}
return;
}
}
$get("endDateDescription").innerHTML = oEndDates[oEndDates.length - 1];
$get("currentEnd").value = "";
}


function onUpdateUI()
{
if ($get("rad0").checked)
{
$get("sameworkplanlinks").style.display	= "inline";
ChangeDisplay("sameworkplandays", "");
ChangeDisplay("notsameworkplandays", "none");
disableChks(false);
$get("workrulemode").value = "AllTheSameRules";
if (_windowSizeChanged)
{
resizeWindow(_originalWidth, _originalHeight);
_windowSizeChanged = false;
}
}
else if ($get("rad1").checked)
{
$get("sameworkplanlinks").style.display	= "none";
ChangeDisplay("sameworkplandays", "none");
ChangeDisplay("notsameworkplandays", "");
disableChks(false);
$get("workrulemode").value = "VaryByDayRules";
for (i = 0; i < 7; i++)
{
dayCheckStyle(i);
}
if (!_windowSizeChanged)
{
if (_originalHeight < 560)
{
resizeWindow(_originalWidth, _originalHeight + 80);
}
_windowSizeChanged = true;
}
}
else if ($get("rad2").checked)
{
$get("sameworkplanlinks").style.display	= "none";
ChangeDisplay("sameworkplandays", "");
ChangeDisplay("notsameworkplandays", "none");
disableChks(true);
if ($get("calendarType").value != "<%=CustomerService%>")
{
$get("workrulemode").value = "NotWorking";
}
else
{
$get("workrulemode").value = "24*7Support";
}
if (_windowSizeChanged)
{
resizeWindow(_originalWidth, _originalHeight);
_windowSizeChanged = false;
}
}
}


function onUpdateClosureLink()
{
if ($get("rad3").checked)
{
$get("closurelinkmode").value = "observe";
if ($get("calendarType").value == "<%=CustomerService%>") {
lookupRow.style.visibility = 'visible';
}
}
else
{
$get("closurelinkmode").value = "donotobserve";
if ($get("calendarType").value == "<%=CustomerService%>") {
_crmCalendarLookup.set_dataValue(null);
lookupRow.style.visibility = 'hidden';
}
}
}


function onSingleDayCheck(checkIndex)
{
var oCheckMark = document.getElementById("chk" + checkIndex.toString());
var oXCheckMark = document.getElementById("xchk" + checkIndex.toString());
if (verifyCheckNotLast("chk"))
{
oXCheckMark.checked = oCheckMark.checked;
dayCheck(checkIndex);
}
else
{
oCheckMark.checked = true;
}
}


function onVaryByDayCheck(checkIndex)
{
var oCheckMark = document.getElementById("chk" + checkIndex.toString());
var oXCheckMark = document.getElementById("xchk" + checkIndex.toString());
if (verifyCheckNotLast("xchk"))
{
oCheckMark.checked = oXCheckMark.checked;
dayCheck(checkIndex);
dayCheckStyle(checkIndex);
}
else
{
oXCheckMark.checked = true;
}
}

function dayCheck(checkIndex)
{
var oCheckMark = document.getElementById("xchk" + checkIndex.toString());
var oAltSpan = document.getElementById("workinghourslinkalt" + checkIndex.toString());
var oSpan = document.getElementById("workinghourslink" + checkIndex.toString());
if ((XUI.Html.GetText(oSpan) == LOCID_NOT_WORKING) == oCheckMark.checked)
{
var altText = XUI.Html.GetText(oSpan);
XUI.Html.SetText(oSpan, oAltSpan.value);
oAltSpan.value = altText;
}
}

function dayCheckStyle(checkIndex)
{
var oSpan = document.getElementById("workinghourslink" + checkIndex.toString());
if (XUI.Html.GetText(oSpan) == LOCID_NOT_WORKING)
{
oSpan.className = "nolink";
if(!IsNull(_isClickHandlerAddedForDay[checkIndex]) && _isClickHandlerAddedForDay[checkIndex])
{
$removeHandler(oSpan, "click", editVariedRule);
_isClickHandlerAddedForDay[checkIndex] = false;
}
}
else
{
oSpan.className = "link";
if(IsNull(_isClickHandlerAddedForDay[checkIndex]) || !_isClickHandlerAddedForDay[checkIndex])
{
$addHandler(oSpan, "click", editVariedRule);
_isClickHandlerAddedForDay[checkIndex] = true;
}
}
}

function verifyCheckNotLast(idBase) {
var oCheckMark;
var i;
for (i = 0; i < 7; i++) {
oCheckMark = document.getElementById(idBase + i.toString());
if (oCheckMark.checked == true) {
return true;
}
}
if ($get("calendarType").value == "<%=CustomerService%>") {
alert(LOCID_ATLEAST_WORKINGDAY_CHK);
}
else {
alert(LOCID_LAST_CHECK_NOT_ALLOWED);
}
return false;
}

function disableChks(bDisable)
{
if (bDisable == true)
{
$get("chk0").checked = false;
$get("chk1").checked = false;
$get("chk2").checked = false;
$get("chk3").checked = false;
$get("chk4").checked = false;
$get("chk5").checked = false;
$get("chk6").checked = false;
if ($get("calendarType").value == "<%=CustomerService%>")
{
$get("chk0").checked = true;
$get("chk1").checked = true;
$get("chk2").checked = true;
$get("chk3").checked = true;
$get("chk4").checked = true;
$get("chk5").checked = true;
$get("chk6").checked = true;
}
}
else
{
$get("chk0").checked = $get("xchk0").checked;
$get("chk1").checked = $get("xchk1").checked;
$get("chk2").checked = $get("xchk2").checked;
$get("chk3").checked = $get("xchk3").checked;
$get("chk4").checked = $get("xchk4").checked;
$get("chk5").checked = $get("xchk5").checked;
$get("chk6").checked = $get("xchk6").checked;
}

$get("chk0").disabled = bDisable;
$get("chk1").disabled = bDisable;
$get("chk2").disabled = bDisable;
$get("chk3").disabled = bDisable;
$get("chk4").disabled = bDisable;
$get("chk5").disabled = bDisable;
$get("chk6").disabled = bDisable;
}

function ChangeDisplay(id, newDisplay)
{

for (var i = 1, row = null; !IsNull(row = $get(id + "_row" + i)); i++)
{
row.style.display = newDisplay;
}
}

</script>
</head>
<body>
<frm:HardcodedForm id="crmForm" runat="server" class="ms-crm-absolutePosition">
<input type="hidden" id="resourceid" name="resourceid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ResourceId)%>">
<input type="hidden" id="otype" name="otype" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(ParentType)%>">
<input type="hidden" id="calendarid" name="calendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarId)%>">
<input type="hidden" id="calendarType" name="calendarType" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(CalendarType)%>">
<input type="hidden" id="innercalendarid" name="innercalendarid" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(InnerCalendarId)%>">
<input type="hidden" id="originalStart" name="originalStart" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(OriginalStart)%>">
<input type="hidden" id="originalEnd" name="originalEnd" value="">
<input type="hidden" id="currentEnd" name="currentEnd" value="">
<input type="hidden" id="currentStart" name="currentStart" value="">
<input type="hidden" id="workrulemode" name="workrulemode" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderWorkRuleMode())%>">
<input type="hidden" id="closurelinkmode" name="closurelinkmode" value="<%=(IsClosureLink() ? "observe" : "donotobserve") %>">
<input type="hidden" id="workinghourslinkalt0" name="workinghourslinkalt0" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(0))%>">
<input type="hidden" id="workinghourslinkalt1" name="workinghourslinkalt1" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(1))%>">
<input type="hidden" id="workinghourslinkalt2" name="workinghourslinkalt2" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(2))%>">
<input type="hidden" id="workinghourslinkalt3" name="workinghourslinkalt3" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(3))%>">
<input type="hidden" id="workinghourslinkalt4" name="workinghourslinkalt4" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(4))%>">
<input type="hidden" id="workinghourslinkalt5" name="workinghourslinkalt5" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(5))%>">
<input type="hidden" id="workinghourslinkalt6" name="workinghourslinkalt6" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderAltWorkingHoursText(6))%>">
<input type="hidden" id="recurrencedescription" name="recurrencedescription" value="">
<input type="hidden" id="eventmode" name="eventmode" value="">
<input type="hidden" id="submitEnable" name="submitEnable" value="<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderWorkRuleAreDefined())%>">
<div class="ms-crm-absolutePosition">
<div style="height:34px; position:absolute; top:0px; left:0px; right:0px;"">
<div>

<mnu:AppGenericMenuBar id="crmMenuBar" HasNavigation="false" runat="server" />
</div>
</div>
<div style="position:absolute; top:34px; left:0px; bottom:25px; right:0px;">
<div style="padding:10px;" class="ms-crm-absolutePosition">
<div id="notificationWrapper">
<cnt:AppNotifications id="Notifications" runat="server"/>
</div>

<table id="customerServiceTable" width="70%" cellspacing="0" cellpadding="0">
<tr height="28">
<td id="nameLabel" class="ms-crm-Field-Required" width="30%">
<label for="name"><loc:text resourceid="SM_Name" runat="server" />
<img src="/_imgs/frm_required.gif" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Forms.Required.AltTag' runat='server'/>" /></label>
</td>
<td width="70%"><ui:textbox id="name" runat="server" /></td>
</tr>
<tr height="28">
<td id="descriptionLabel">
<label for="description"><loc:text resourceid="SM_Description" runat="server" /></label>
</td>
<td><ui:textarea id="description" runat="server" /></td>
</tr>
</table>

<div id="crmTabBarWrapper" class="ms-crm-TabBar-Cell" style="margin-top:15px;">
<cnt:AppTabBar id="crmTabBar" runat="server"/>
</div>
<div id="tab0" class="ms-crm-Tab" style="display: inline; left:0px; bottom:0px; right:0px; height:auto;">
<table id="weeklyScheduleTable" width="100%"  cellspacing="0" cellpadding="2">
<colgroup>
<col width="15%" />
<col width="26px" />
<col width="80px" />
<col width="100%" />
</colgroup>
<tr height="24">
<td class="ms-crm-Form-Section ms-crm-Form-SectionBar" colspan="4" valign="bottom"><loc:Text ResourceId="SM_Edit_Weekly_Recurring_Schedule" runat="server" /></td>
</tr>
<tr>
<td nowrap valign="center"><loc:Text ResourceId="Web.SM.WorkPlans.edit.aspx_86" runat="server" /></td>
<td nowrap>
<input type="radio" onclick="onUpdateUI();" style="border:0px; width:20px" name="crmFormEnddate" id="rad0" <%=(IsAllTheSameRules() ? "checked" : "") %>>
</td>
<td nowrap class="workplan_edit_td_same" colspan="2">
<label for="rad0"><loc:Text ResourceId="SM_Are_The_Same" runat="server" /></label>
<div id="sameworkplanlinks" style="display: <%=(IsAllTheSameRules() ? "inline" : "none")%>">
<span id="workinghourslink" tabindex="3" class="link" onclick="javascript:editworkinghours('<%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(RenderRuleParameters())%>');"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderWorkingHoursText())%></span>
</div>
</td>
</tr>
<tr>
<td>&nbsp;</td>
<td nowrap>
<input type="radio" onclick="onUpdateUI();" style="border:0px; width:20px" name="crmFormEnddate" id="rad1" <%=(IsVaryByDayRules() ? "checked" : "") %>>
</td>
<td nowrap class="workplan_edit_td_caption" colspan="2"><label for="rad1"><loc:Text ResourceId="SM_Vary_By_Day" runat="server" /></label></td>
</tr>
<tr>
<td>&nbsp;</td>
<td nowrap>
<input type="radio" onclick="onUpdateUI();" style="border:0px; width:20px" name="crmFormEnddate" id="rad2" <%=(Is247OrNotWorkingRules() ? "checked" : "") %>>
</td>
<td nowrap class="workplan_edit_td_caption" colspan="2"><label for="resourceNotWorking">
<% if(CalendarType==CustomerService){ %><loc:Text ResourceId="Label_24x7Support" runat="server" /></label>
<%} else{ %>
<loc:Text ResourceId="SM_Not_Working" runat="server" />
<% }%>
</td>
</tr>
<tr id="sameworkplandays_row1" style="<%=((IsAllTheSameRules() || Is247OrNotWorkingRules()) ? "" : "display:none")%>">
<td nowrap valign="center" colspan="2">
<loc:Text ResourceId="SM_Working_Days" runat="server" />
</td>
<td nowrap colspan="2">
<input type="checkbox" id="chk0" onclick="onSingleDayCheck(0)" name="crmFormDayCheck0" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(0) ? "checked" : "") %>/>&nbsp;<label for="chk0"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(0))%></label>&nbsp;
<input type="checkbox" id="chk1" onclick="onSingleDayCheck(1)" name="crmFormDayCheck1" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(1) ? "checked" : "") %>/>&nbsp;<label for="chk1"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(1))%></label>&nbsp;
<input type="checkbox" id="chk2" onclick="onSingleDayCheck(2)" name="crmFormDayCheck2" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(2) ? "checked" : "") %>/>&nbsp;<label for="chk2"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(2))%></label>&nbsp;
<input type="checkbox" id="chk3" onclick="onSingleDayCheck(3)" name="crmFormDayCheck3" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(3) ? "checked" : "") %>/>&nbsp;<label for="chk3"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(3))%></label>&nbsp;
</td>
</tr>
<tr id="sameworkplandays_row2" style="<%=((IsAllTheSameRules() || Is247OrNotWorkingRules()) ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap colspan="2"><img alt="" src="/_imgs/clear.gif" class="changeschedule_img_clear" width="20px">
<input type="checkbox" id="chk4" onclick="onSingleDayCheck(4)" name="crmFormDayCheck4" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(4) ? "checked" : "") %>/>&nbsp;<label for="chk4"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(4))%></label>&nbsp;
<input type="checkbox" id="chk5" onclick="onSingleDayCheck(5)" name="crmFormDayCheck5" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(5) ? "checked" : "") %>/>&nbsp;<label for="chk5"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(5))%></label>&nbsp;
<input type="checkbox" id="chk6" onclick="onSingleDayCheck(6)" name="crmFormDayCheck6" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(6) ? "checked" : "") %>/>&nbsp;<label for="chk6"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(6))%></label>
</td>
</tr>
<tr id="notsameworkplandays_row1" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td nowrap valign="center" colspan="2"><loc:Text ResourceId="SM_Working_Days" runat="server" /></td>
<td nowrap>
<input type="checkbox" id="xchk0" onclick="onVaryByDayCheck(0)" name="crmFormDayXCheck0" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(0) ? "checked" : "") %>/>&nbsp;<label for="xchk0"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(0))%></label>
</td>
<td nowrap>
<span id="workinghourslink0" tabindex="0" class="link"><%=RenderWorkingHoursText(0)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row2" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk1" onclick="onVaryByDayCheck(1)" name="crmFormDayXCheck1" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(1) ? "checked" : "") %>/>&nbsp;<label for="xchk1"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(1))%></label>
</td>
<td nowrap>
<span id="workinghourslink1" tabindex="0" class="link"><%=RenderWorkingHoursText(1)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row3" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk2" onclick="onVaryByDayCheck(2)" name="crmFormDayXCheck2" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(2) ? "checked" : "") %>/>&nbsp;<label for="xchk2"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(2))%></label>
</td>
<td nowrap>
<span id="workinghourslink2" tabindex="0" class="link"><%=RenderWorkingHoursText(2)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row4" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk3" onclick="onVaryByDayCheck(3)" name="crmFormDayXCheck3" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(3) ? "checked" : "") %>/>&nbsp;<label for="xchk3"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(3))%></label>
</td>
<td nowrap>
<span id="workinghourslink3" tabindex="0" class="link"><%=RenderWorkingHoursText(3)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row5" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk4" onclick="onVaryByDayCheck(4)" name="crmFormDayXCheck4" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(4) ? "checked" : "") %>/>&nbsp;<label for="xchk4"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(4))%></label>
</td>
<td nowrap>
<span id="workinghourslink4" tabindex="0" class="link"><%=RenderWorkingHoursText(4)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row6" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk5" onclick="onVaryByDayCheck(5)" name="crmFormDayXCheck5" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(5) ? "checked" : "") %>/>&nbsp;<label for="xchk5"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(5))%></label>
</td>
<td nowrap>
<span id="workinghourslink5" tabindex="0" class="link"><%=RenderWorkingHoursText(5)%></span>
</td>
</tr>
<tr id="notsameworkplandays_row7" style="<%=(IsVaryByDayRules() ? "" : "display:none")%>">
<td colspan="2">&nbsp;</td>
<td nowrap>
<input type="checkbox" id="xchk6" onclick="onVaryByDayCheck(6)" name="crmFormDayXCheck6" tabindex="0" style="border:0px; width:20px" <%=( IsDayInRule(6) ? "checked" : "") %>/>&nbsp;<label for="xchk6"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(NameDay(6))%></label>
</td>
<td nowrap>
<span id="workinghourslink6" tabindex="0" class="link"><%=Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderWorkingHoursText(6))%></span>
</td>
</tr>
<tr>
<td nowrap valign="center">
<label for="businessClosure">
<% if(CalendarType==CustomerService){ %><loc:Text ResourceId="SM_Holiday_Schedule_Label" runat="server" />
<%} else{ %>
<loc:Text ResourceId="SM_Business_Closures_Label" runat="server" />
<% }%>
</label>
<td nowrap>
<input type="radio" onclick="onUpdateClosureLink();" style="border:0px; width:20px" name="crmFormClosureLink" id="rad3" <%=(IsClosureLink() ? "checked" : "") %>/>
</td>
<td nowrap class="workplan_edit_td_caption"><label for="rad3"><loc:Text ResourceId="SM_Closure_Observe" runat="server" /></label></td>
<td>&nbsp;</td>
</tr>
<tr>
<td>&nbsp;</td>
<td nowrap>
<input type="radio" onclick="onUpdateClosureLink();" style="border:0px; width:20px" name="crmFormClosureLink" id="rad4" <%=(IsClosureLink() ? "" : "checked") %>/>
</td>
<td nowrap class="workplan_edit_td_caption"><label for="rad4"><loc:Text ResourceId="SM_Closure_Do_Not_Observe" runat="server" /></label></td>
<td>&nbsp;</td>
</tr>
<% if(CalendarType==CustomerService){ %>
<tr id="calendarLookup_row8" style="<%=(IsClosureLink() ? "visibility:visible" : "visibility:hidden")%>">
<td>&nbsp;</td>
<td>&nbsp;</td>
<td  colspan="2">
<sdk:LookupControl tabindex="0" id="crmCalendarLookup" Lookupbrowse="false" LookupStyle="single" runat="server"/>
</td>
<td  colspan="2">&nbsp;</td>
</tr>
<% }%>
<tr height="24">
<td colspan="4" class="ms-crm-Form-Section ms-crm-Form-SectionBar" valign="bottom">
<label for="dateTimeField">
<% if(CalendarType==CustomerService){ %><loc:Text ResourceId="SM_Select_The_Timezone" runat="server" />
<%} else{ %>
<loc:Text ResourceId="SM_Date_Range" runat="server" />
<% }%>
</label>
</td>
</tr>
</table>
<table width="100%" cellspacing="0" cellpadding="2">
<colgroup>
<col width="20%" />
<col width="30%" />
<col width="30%" />
<col width="20%" />
</colgroup>
<tr id="dateTimeTr">
<td><label for="start"><loc:Text ResourceId="SM_Starting_On" runat="server" /></label></td>
<td><ui:DateTimeUI id="start" runat="server" AllowBlankDate="False" /></td>
<td>&nbsp;&nbsp;<span id="endDateDescription"></span></td>
<td>&nbsp;</td>
</tr>
<tr>
<td><label for="timeZone"><loc:Text ResourceId="SM_Timezone_Label" runat="server" /></label></td>
<td colspan="2"><cnt:AppTimeZoneControl id="timeZone" AutoBinding="false" runat="server" /></td>
<td>&nbsp;</td>
</tr>
</table>
</div>
</div>
</div>
<div style="height:25px; position:absolute; left:0px; bottom:0px; right:0px;">
<div class="ms-crm-Form-StatusBar">
<sdk:RenderStatusControl id="crmRenderStatus" runat="server" />
</div>
</div>
</div>
</frm:HardcodedForm>
</body>
</html>
