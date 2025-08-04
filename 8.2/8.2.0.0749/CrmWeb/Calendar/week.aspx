<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Service.Web.Calendar.Week" %>
<%@ Register TagPrefix="crm" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="crmApp" Namespace="Microsoft.Crm" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>

<html>
<head>
    <cnt:AppHeader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        Sys.Application.add_load(function() {


            InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY);

            var initDate = new
                Date(<%= Microsoft.Crm.Utility.DateTimeUtility.DateTimeToJavaScriptConstructorStringScript(_initDate) %>);


            var oHomeCalendarElements = getHomeCalendarElements();
            oHomeCalendarElements.oMiniCalendar
                .innerHTML = DrawMonth(initDate, "GoToDate(this);", HILITE_WEEK, initDate);


            UpdateCalendarMenu(oHomeCalendarElements.oWeekMenuItem);

            XUI.Html.SetText(oHomeCalendarElements.oTitle,
                <%= Microsoft.Crm.CrmEncodeDecode.CrmJavaScriptEncode(_calendarTitle) %>);
        });

    </script>
    <style type="text/css">

        DIV {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-right: 15px;
            <% }
               else
               { %>
            padding-left: 15px;
            <% } %>
        }
    </style>
</head>
<body class="ms-crm-Cal-Week-Body ms-crm-Cal-Body">
<div class="ms-crm-Cal-Week-Content">
    <input runat="server" type="hidden" name="oId" id="oId">
    <input runat="server" type="hidden" name="calendarId" id="calendarId">
    <crm:WeekCalendar id="crmWeekCalendar" runat="server"/>
</div>
</body>
</html>