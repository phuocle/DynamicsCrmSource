<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Calendar.Day" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="crmApp" Namespace="Microsoft.Crm" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="System.Globalization" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
<cnt:AppHeader id="crmHeader" runat="server" />
<script type="text/javascript">

Sys.Application.add_load(function ()
{

InitCalendar( USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY );

var initDate = new Date(<%=Microsoft.Crm.Utility.DateTimeUtility.DateTimeToJavaScriptConstructorStringScript(_initDate) %>);


var oHomeCalendarElements = getHomeCalendarElements();
oHomeCalendarElements.oMiniCalendar.innerHTML = DrawMonth(initDate, "GoToDate(this);", HILITE_DAY, initDate);


UpdateCalendarMenu(oHomeCalendarElements.oDayMenuItem);

XUI.Html.SetText(oHomeCalendarElements.oTitle, <%=Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_calendarTitle) %>);


setTimeout(SetWorkHour, 1);



if (Sys.Browser.agent == Sys.Browser.InternetExplorer && Sys.Browser.version < 8)
{
var hoursArea = $get("hoursArea");
if (hoursArea)
{
if (!Mscrm.Utilities.get_isLeftToRight())
{
hoursArea.style.marginLeft = "16px";
}
else
{
hoursArea.style.marginRight = "16px";
}
}
}
});

function SetWorkHour()
{


var iFirstWorkingHour =
<% if(_workdayStartTime >= _workdayStopTime)
{ %>
0;
<% }
else
{ %>
<%= _startHour.ToString("D", CultureInfo.InvariantCulture) %>;
<% } %>


var hoursAreaElem = $get("hoursArea");
var dayContent = $get("Day-Content");

var hoursAreaFirstChild = XUI.Html.DomUtils.GetFirstChild(hoursAreaElem);
for(iRow = 0; iRow <= hoursAreaFirstChild.rows.length; ++iRow)
{


if(parseInt(hoursAreaFirstChild.rows[ iRow ].getAttribute("tag"),10) == iFirstWorkingHour)
{

dayContent.scrollTop = hoursAreaFirstChild.rows[ iRow ].offsetTop;
break;
}
}
}

</script>
</head>
<body class="ms-crm-Cal-Day-Body ms-crm-Cal-Body">
<div id="Day-Content" class="ms-crm-Cal-Day-Content">
<input runat="server" type="hidden" name="oId" id="oId">
<input runat="server" type="hidden" name="calendarId" id="calendarId">
<crm:DayCalendar id="crmDayCalendar" runat="server" />
</div>
</body>
</html>
