<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Application.Pages.SM.AppointmentBook.AppointmentHome" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
<cnt:AppHeader runat="server" id="crmHeader"/>
<script language="javascript" type="text/javascript">

Sys.Application.add_load(apptBookPage_onload);
function apptBookPage_onload() {
var imageNames = new Array("/_imgs/ico_16_calmonth.gif", "/_imgs/ico_16_calweek.gif", "/_imgs/ico_16_calday.gif", "/_imgs/ico_24_caltoday_menu.gif", "/_imgs/ico_16_caltoday.gif", "/_imgs/ico_24_cal_expand.gif", "/_imgs/ico_24_cal_collapse.gif", "/_imgs/ApptBook/up.gif");
var controlNames = new Array("calMonth", "calWeek", "calDay", "cal24Today", "cal16Today", "calExpand", "calCollapse", "sizeChanger");
var i;
for (i in imageNames) {
applyImagestrip(imageNames[i], controlNames[i]);
}
}

function applyImagestrip(imgName, ctlName) {

var imagestripInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(imgName));
if (document.getElementById(ctlName) != null) {
document.getElementById(ctlName).src = imagestripInfo.source;
document.getElementById(ctlName).className = imagestripInfo.cssClass;
}
}

function quickFind(oGrid)
{
try
{
var findCriteria = document.getElementById(oGrid.get_id() + "_findCriteria");
var sFindCriteria = Trim(findCriteria.value.replace(/[\*]+/, "*"));
findCriteria.value = sFindCriteria;
if (sFindCriteria == "")
{
alert(LOCID_SEARCH_ALERT_NO_CRITERIA);
return false;
}

sQuickFind = sFindCriteria;

var SavedQuerySelector = Mscrm.FormControlInputBehavior.GetBehavior("crmGrid_SavedQuerySelector");
if (SavedQuerySelector.get_dataValue() != _sSearchResults)
{

var o = SavedQuerySelector.AddOption(_sSearchResults, _sSearchResults);
o.Search = true;
o.Type = SavedQuery;


SavedQuerySelector.set_dataValue(_sSearchResults);
}

oGrid.SetParameter("filter", "");
oGrid.SetParameter("filterDisplay", "");

ReloadGantt();

}
catch (e)
{
alert(LOCID_SEARCH_LIST_NOT_OPEN);
return false;
}
return true;
}
</script>

</head>
<body class="stage">

<div id="ganttPageBodyTable" style="width:100%;height:100%">

<div style="height: 58px; padding-top: 7px;">
<table width="100%" cellpadding="1" cellspacing="0">
<col width="70%" /><col width="30%" />
<tr>
<td><label class="ms-crm-Setting-ContextHeader-Title"><loc:Text ResourceId="Homepage_AppointmentBook" runat="server"/></label></td>
<td><cnt:AppQuickFind id="crmQuickFind" runat="server"/></td>
</tr>
</table>
<table width="100%" cellpadding="1" cellspacing="0">
<col /><col width="20%" /><col /><col width="20%" /><col width="60%" />
<tr>
<td nowrap class="ms-crm-Emphasis-Strong"><label for="crmTypeSelector"><loc:Text ResourceId="Web.View_Label_ViewByType" runat="server"/></label></td>

<td><ui:Select id="crmTypeSelector" runat="server" onchange="OnViewTypeChange(this);"/></td>
<td nowrap class="ms-crm-Emphasis-Strong"><asp:Label runat="server" ID="ViewLabel" CssClass="home_apptbook_label_View" /></td>
<td id="tdViewSelector"><crm:ViewSelector runat="server" id="crmGrid_SavedQuerySelector"/></td>
<td align="center"><span class="home_apptbook_span_QuickFindSpacer">&nbsp;</span></td>
</tr>
</table>
</div>
<div style="height:26px">
<mnu:MenuBar id="ToolBar" runat="server"/>
</div>
<div id="primary" class="primaryPane">
<div id="frmGanttFrameTr" class="ganttPane">
<iframe id="frmGanttFrame" name="frmGanttFrame" style="width:100%; height:100%; border:none;" frameborder="0" runat="server"></iframe>
</div>
<div id="CalendarPane" class="calendarPane">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.Expand' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.Expand' runat='server'/>" id="calExpand" class="calExpand" style="display:none"  onclick="ExpandCalendar(true);"/>
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.Collapse' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.Collapse' runat='server'/>" id="calCollapse" class="calCollapse"  onclick="ExpandCalendar(false);"/>
<span id="calendarTitle" class="calendarTitle"><loc:Text ResourceId="Appointment_Book_Calendar_Title" runat="server"/></span>
<hr class="separator" id="hrtop" width="100px"/>
<div id="monthCalendar"></div>
<table id="CalendarViews" cellspacing="0" cellpadding="0">
<col width="30"/>
<tr id="popupCalendar" onmouseover="On(this);" onmouseout="Off(this);" onclick="PopupCalendar(this);" style="cursor:pointer;display:none;">
<td><img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.ShowCalendar' runat='server'/>" id="cal24Today"  class="home_appbook_img_ico24caltodaymenu"/></td>
</tr>
<tr id="today" onmouseover="On(this);" onmouseout="Off(this);" onclick="Today();" style="cursor:pointer;display:none;">
<td><img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.CalendarPane.ShowToday' runat='server'/>" id="cal16Today" /></td>
</tr>
</table>
<hr class="separator" id="hrbottom" width="100px"/>
<table id="CalendarViews" cellspacing="0" cellpadding="3">
<col width="30"/><col width="95%"/>
<tr id="MonthView" onmouseover="On(this);" onmouseout="Off(this);" onclick="SelectCalendarRange(HILITE_NONE);" style="cursor:pointer;">
<td><a onclick="return false;" href="javascript:onclick();" target="_self"><img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_MonthAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_MonthAction' runat='server'/>" id="calMonth" /></a></td><td id="MonthViewLabel"><loc:Text ResourceId="Web.Workplace.home_calendar.aspx_193" runat="server"/><br></td>
</tr>
<tr id="WeekView" onmouseover="On(this);" onmouseout="Off(this);" onclick="SelectCalendarRange(HILITE_WEEK);" style="cursor:pointer;">
<td><a onclick="return false;" href="javascript:onclick();" target="_self"><img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_WeekAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_WeekAction' runat='server'/>" id="calWeek" /></a></td><td id="WeekViewLabel"><loc:Text ResourceId="Web.Workplace.home_calendar.aspx_196" runat="server"/><br></td>
</tr>
<tr id="DayView" onmouseover="On(this);" onmouseout="Off(this);" onclick="SelectCalendarRange(HILITE_DAY);" style="cursor:pointer;">
<td><a onclick="return false;" href="javascript:onclick();" target="_self"><img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_DayAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_DayAction' runat='server'/>" id="calDay" /></a></td><td id="DayViewLabel"><loc:Text ResourceId="Web.Workplace.home_calendar.aspx_199" runat="server"/><br></td>
</tr>
</table>
</div>
</div>
<div id="separator" class="abHSep" onmousedown="MouseDownApptbook(new Sys.UI.DomEvent(event))" onmouseup="MouseUpApptbook(new Sys.UI.DomEvent(event))">
<div style="width:100%"><hr class="separator" /></div>
<div style="height:8px; width:1%;position:absolute; left:49%;top:0px;">
<img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.Apptbook.Show.Resourcedetails' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='SM.Apptbook.Show.Resourcedetails' runat='server'/>" id="sizeChanger" onmousedown="MouseDownBlock(new Sys.UI.DomEvent(event))" onclick="ToggleExpansion()" style="cursor: pointer; width:13px; height:8px" align="absmiddle" />
</div>
</div>
<div id="frmDetailedPaneTr" class="detailedPane">
<iframe id="detailPane" name="detailPane" style="width: 100%; height: 100%;border: none;" frameborder="0" runat="server"></iframe>
</div>
</div>

<input value="" type="hidden" id="StartDate" name="StartDate" returnValue="" />
<input value="" type="hidden" id="EndDate" name="EndDate" returnValue="" onchange="CalendarChanged()" />
</body>
</html>
