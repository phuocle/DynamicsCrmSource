<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Calendar.Month" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="crmApp" Namespace="Microsoft.Crm" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>

<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript">

        Sys.Application.add_load(function() {


            InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY);

            var initDate = new
                Date(<%= Microsoft.Crm.Utility.DateTimeUtility.DateTimeToJavaScriptConstructorStringScript(initDate) %>);


            var oHomeCalendarElements = getHomeCalendarElements();
            oHomeCalendarElements.oMiniCalendar
                .innerHTML = DrawMonth(initDate, "GoToDate(this);", HILITE_MONTH, initDate);


            UpdateCalendarMenu(oHomeCalendarElements.oMonthMenuItem);

            XUI.Html.SetText(oHomeCalendarElements.oTitle,
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(calendarTitle) %>);
        });

        function OnDay(sDate) {
            document.location.href = "day.aspx?date=" + sDate;
        }

    </script>
</head>
<body>
<div class="ms-crm-Cal-Month-Frame-Wrapper">
    <iframe id="MonthCalendar" name="MonthCalendar" class="ms-crm-Home-Cal-Month" scrolling="no" frameborder="0" src="monthlycalendardata.aspx?<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString.ToString()) %>"></iframe>
</div>
</body>
</html>