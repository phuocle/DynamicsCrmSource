<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Web.Workplace.HomeCalendar" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>

    <script type="text/javascript">

        var _dCurrentDate = LocalDateTimeNow();
        var miniCalendar;

        $addHandler(window, "load", FixCalendarFrameHeightForIE7);
        $addHandler(window, "resize", FixCalendarFrameHeightForIE7);

        Sys.Application.add_load(function() {
            InitCalendar(USER_DATE_FORMATSTRING, USER_DATE_SEPARATOR, ORG_DATE_START_DAY);
            var imgNames = new Array("/_imgs/ico_16_calmonth.gif",
                "/_imgs/ico_16_calweek.gif",
                "/_imgs/ico_16_calday.gif");
            var ctlNames = new Array("calrMonth", "calrWeek", "calrDay");
            for (i in imgNames) {
                getImageStripImage(imgNames[i], ctlNames[i]);
            }


            miniCalendar = $get('MiniCalendar');
            miniCalendar.style.height = iCalHeight + 'px';
            miniCalendar.style.width = (USER_SHOW_WEEK_NUMBER ? iShowWeekCalWidth : iNoWeekCalWidth) + 'px';


            miniCalendar.style.backgroundColor = "#ffffff";

            <% if (Microsoft.Crm.Security.User.GetPrivilege(Microsoft.Crm.Privileges.CreateActivity, Microsoft.Crm.Application.Security.UserInformation.Current))
               {
            %>

            window.setTimeout("OnResize()", 10);
            <%
               }
            %>
        });

        function CreateNewAppointment(oType, bLoadDialog) {
            CreateNewAppointmentHelper(oType, _dCurrentDate, bLoadDialog);
        }

        function getImageStripImage(imgName, ctlName) {

            var imagestripInfo = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(imgName));
            var ctl = $get(ctlName);
            if (ctl != null) {
                ctl.src = imagestripInfo.source;
                ctl.className = imagestripInfo.cssClass;
            }
        }


        function GoToDate(o) {
            var D = new Date(parseInt(o.getAttribute("d"), 10));

            if (o.getAttribute("nav")) {


                D.setDate(1);

                switch (parseInt(o.getAttribute("nav"), 10)) {

                case 1:

                    if (o.id == "tdPrv") {
                        D.setMonth(D.getMonth() - 1);
                    } else if (o.id == "tdNxt") {
                        D.setMonth(D.getMonth() + 1);
                    }


                    switch (_sViewMode.toLowerCase()) {
                    case "month":
                        miniCalendar.innerHTML = DrawMonth(D, "GoToDate(this);", HILITE_NONE, null);
                        break;

                    case "week":
                        miniCalendar.innerHTML = DrawMonth(D, "GoToDate(this);", HILITE_WEEK, _dCurrentDate);
                        break;

                    case "day":
                        miniCalendar.innerHTML = DrawMonth(D, "GoToDate(this);", HILITE_DAY, _dCurrentDate);
                        break;
                    }


                    break;


                case 2:

                    if (o.id == "tdPrv") {
                        D.setYear(D.getFullYear() - 1);
                    } else if (o.id == "tdNxt") {
                        D.setYear(D.getFullYear() + 1);
                    }

                    miniCalendar.innerHTML = DrawYear(D, "GoToDate(this);");

                    break;
                }
            } else {

                _dCurrentDate = D;

                LoadView();
            }
        }


        function LoadView() {
            var D = new Date(_dCurrentDate.valueOf());

            $get('DateCalendar').contentWindow.location.href = Mscrm.CrmUri
                .create("/calendar/" +
                    CrmEncodeDecode.CrmUrlEncode(_sViewMode) +
                    ".aspx?date=" +
                    CrmEncodeDecode.CrmUrlEncode(FormatUtcDate(D))).toString();
        }

        function SwapView(sNewMode) {
            _sViewMode = sNewMode;

            LoadView();
        }
        <% if (Microsoft.Crm.Security.User.GetPrivilege(Microsoft.Crm.Privileges.CreateActivity, Microsoft.Crm.Application.Security.UserInformation.Current))
           {
        %>
        $addHandler(window, "resize", OnResize);

        function OnResize() {


            var clientHeight = $get('topTR').clientHeight;
            $get('CreateNewArea').style.display = (clientHeight > 0 && clientHeight < 370) ? "none" : "block";
        }
        <%
           }
        %>

    </script>
</head>

<body class="stage">
<div class="ms-crm-Home-Cal-Content">
    <div id="topTR">
        <div class="ms-crm-Home-Cal-Body">
            <div class="ms-crm-Home-Cal-Header-Row">
                <div class="ms-crm-Home-Cal-Header ms-crm-Bold-Header">
                    <span id="CalendarTitle"></span>
                </div>
                <div class="ms-crm-Home-Cal-Refresh">
                    <img alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Tooltip_Refresh_Calendar' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Tooltip_Refresh_Calendar' runat='server'/>" src="/_imgs/ico/16_L_refresh.gif" onclick="var oFrame = $get('DateCalendar');oFrame.contentWindow.document.location.href = oFrame.contentWindow.document.location.href;"/>
                </div>
            </div>
            <div class="ms-crm-Home-Cal-Content-Row">
                <div id="frameWrapper" class="ms-crm-Home-Cal-View">
                    <iframe id="DateCalendar" scrolling="no" frameborder="0" class="ms-crm-Home-Cal-Workplace" src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(url.ToString()) %>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Workplace.Calendar.Frametitle' runat='server'/>"></iframe>
                </div>
                <div class="ms-crm-Home-Cal-Right-Panel">
                    <div id="MiniCalendar" class="ms-crm-Home-Cal-MiniCal"></div>
                    <div class="ms-crm-Home-Cal-Views-Title ms-crm-Bold-Header">
                        <loc:Text ResourceId="Web.Workplace.home_calendar.aspx_189" runat="server"/>
                    </div>
                    <ul id="CalendarViews" class="ms-crm-Home-Cal-Views-Items">
                        <li id="MonthView" onclick="SwapView('Month');">
                            <a href="#" onclick="new Sys.UI.DomEvent(event).preventDefault();">
                                <img class="ms-crm-AlignToSpan" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_MonthAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_MonthAction' runat='server'/>" id="calrMonth"/>
                            </a>
                            <span class="ms-crm-AlignTo16Image">
                                <loc:Text ResourceId="Web.Workplace.home_calendar.aspx_193" runat="server"/>
                            </span>
                        </li>
                        <li id="WeekView" onclick="SwapView('Week');">
                            <a href="#" onclick="new Sys.UI.DomEvent(event).preventDefault();">
                                <img class="ms-crm-AlignToSpan" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_WeekAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_WeekAction' runat='server'/>" id="calrWeek"/>
                            </a>
                            <span class="ms-crm-AlignTo16Image">
                                <loc:Text ResourceId="Web.Workplace.home_calendar.aspx_196" runat="server"/>
                            </span>
                        </li>
                        <li id="DayView" onclick="SwapView('Day');">
                            <a href="#" onclick="new Sys.UI.DomEvent(event).preventDefault();">
                                <img class="ms-crm-AlignToSpan" alt="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_DayAction' runat='server'/>" title="<loc:Text Encoding='HtmlAttribute' ResourceId='Web.Workplace.home_calendar.aspx_DayAction' runat='server'/>" id="calrDay"/>
                            </a>
                            <span class="ms-crm-AlignTo16Image">
                                <loc:Text ResourceId="Web.Workplace.home_calendar.aspx_199" runat="server"/>
                            </span>
                        </li>
                    </ul>
                    <%
                        if (Microsoft.Crm.Security.User.GetPrivilege(Microsoft.Crm.Privileges.CreateActivity, Microsoft.Crm.Application.Security.UserInformation.Current))
                        {
                    %>
                        <div id="CreateNewArea" class="ms-crm-Home-Cal-CreateNew-Title ms-crm-Bold-Header">
                            <loc:Text ResourceId="Web.Workplace.home_calendar.aspx_206" runat="server"/>
                            <ul class="ms-crm-Home-Cal-CreateNew-Items">
                                <li id="CreateAppointmentRow" onclick="CreateNewAppointment(Appointment)">
                                    <a href="#" onclick="new Sys.UI.DomEvent(event).preventDefault();">
                                        <img class="ms-crm-AlignToSpan" alt="" src="/_imgs/ico_16_<%= Microsoft.Crm.Util.Appointment %>.gif"><span class="ms-crm-AlignTo16Image">
                                            <loc:EntityNameArgument runat="server" EntityNameFormatStyle="Singular" EntityType="appointment"/>
                                        </span>
                                    </a>
                                </li>
                                <li runat="server" id="CreateServiceActivityRow" onclick="CreateNewAppointment(ServiceAppointment)">
                                    <a href="#" onclick="new Sys.UI.DomEvent(event).preventDefault();">
                                        <img class="ms-crm-AlignToSpan" alt="" src="/_imgs/ico_16_<%= Microsoft.Crm.Util.ServiceAppointment %>.gif"><span class="ms-crm-AlignTo16Image">
                                            <loc:EntityNameArgument runat="server" EntityNameFormatStyle="Singular" EntityType="serviceappointment"/>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    <%
                        }
                    %>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>