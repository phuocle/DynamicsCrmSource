<!DOCTYPE html >
<%@ Page language="c#" Inherits="Microsoft.Crm.Application.Pages.Business.Users.MonthlyCalendar" AutoEventWireup="false" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Controls" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Register TagPrefix="mnu" Namespace="Microsoft.Crm.Application.Menus" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="System.Web" %>

<html>
<head>
    <cnt:AppHeader runat="server" id="crmHeader"/>
    <script type="text/javascript">
        $addHandler(window, "resize", FixCalendarFrameHeightForIE7);

        $addHandler(window,
            'load',
            function() {
                attachWindowOnBeforeUnload(RefreshParent);
                FixCalendarFrameHeightForIE7();
            });

        function RefreshParent(oEvent) {

            if (window.parent.opener) {
                try {
                    window.parent.opener.auto();
                } catch (e) {
                }
            }
        }

        function OnDay(sDate) {

            $find('crmTabBar').down($get('tab2Tab'), true);
        }
    </script>
</head>
<body>
<div class="ms-crm-Cal-Month-Biz-Body">
    <div class="ms-crm-Cal-Month-TabBar-Row ms-crm-TabBar-Cell">
        <cnt:AppTabBar id="crmTabBar" runat="server"/>
    </div>
    <div id="tab1" class="ms-crm-Tab">
        <div class="ms-crm-Cal-Month-MenuBar-Row">
            <ui:MenuBar id="crmMenuBar1" runat="server"/>
        </div>
        <div class="ms-crm-Cal-Month-Content-Row" id="frameWrapper">
            <iframe id="MonthCalendar" name="MonthCalendar" class="ms-crm-Home-Cal-Month" scrolling="no" frameborder="0" src="monthlycalendardata.aspx?<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Request.QueryString.ToString()) %>"></iframe>
        </div>
    </div>
    <div id="timezonetext"><%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlEncode(RenderTimeZoneName()) %></div>
</div>
</body>
</html>