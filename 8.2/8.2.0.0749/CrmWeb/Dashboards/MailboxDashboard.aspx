<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.MailboxDashboard" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization" Assembly="Microsoft.Crm.Application.Components.Application" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader id="crmHeader" runat="server"/>
    <style type="text/css">
        .crm-DashboardPadding {
            <% if (Microsoft.Crm.Application.Utility.CrmCultureInfo.CurrentUICulture.TextInfo.IsRightToLeft)
               { %>
            padding-right: 25px;
            <% }
               else
               { %>
            padding-left: 25px;
            <% } %>
        }

        .crm-DashboardAnchor {
            color: blue !important;
            width: 50px
        }

        .crm-DashboardAnchor-status-td {
            color: #444444;
            font-family: Segoe UI, Arial, Sans-Serif
        }

        .crm-Dashboard-waring-status { color: #EC9047 }

        .crm-Dashboard-healthy-status { color: #85B664 }

        .crm-Dashboard-error-status { color: #DC143C }
    </style>
</head>
<script type="text/javascript" language="JavaScript">

    if (window.parent.$get("ssshealthwall_d") != null)
        window.parent.$get("ssshealthwall_d").style.height = "378px";

    function openGrid(viewtype) {
        var crmUri = Mscrm.CrmUri.create("/Dashboards/MailboxDashboardGrid.aspx");
        crmUri.get_query()["viewtype"] = viewtype;
        openStdDlg(crmUri, null, 800, 640, true, false, 'scroll:1')
    }

</script>
<body style="background-color: #FFF">
<div id="offlineControl" runat="server" style="height: 100%; width: 100%;">
    <span>
        <loc:Text ResourceId="EmailConnector.MailboxDashboard.NotAvailableOffline" runat="server"/>
    </span>
</div>
<div id="perMailboxHealthControl" runat="server" style="height: 100%; width: 100%">
    <table cellpadding="0" cellspacing="5" width="100%">
        <tr>
            <td colspan="2">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <b>
                    <span style="font-size: 12px; font-family: Segoe UI, Tahoma, Arial; color: #000000">
                        <loc:Text ResourceId="EmailConnector.MailboxDashboard.MailboxStatusReportTitle" runat="server"/>
                    </span>
                </b>
            </td>
        </tr>
        <tr>
            <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalMailboxesConfiguredToolTip' runat='server'/>">
                <a href="#" id="countLink1" class="crm-DashboardAnchor" onclick="openGrid(1)" runat="server"/>
            </td>
            <td id="TotalMailboxesConfigured" runat="server">
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <table class="crm-DashboardPadding">
                    <tr>
                        <td style="width: 10px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalHealthyMailboxesToolTip' runat='server'/>">
                            <a href="#" id="countLink2" class="crm-DashboardAnchor" onclick="openGrid(2)" runat="server"/>
                        </td>
                        <td class="crm-Dashboard-healthy-status" id="TotalHealthyMailboxes" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td style="width: 10px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalPoorMailboxesToolTip' runat='server'/>">
                            <a href="#" id="countLink5" class="crm-DashboardAnchor" onclick="openGrid(4)" runat="server"/>
                        </td>
                        <td class="crm-Dashboard-error-status" id="TotalPoorMailboxes" runat="server">
                        </td>
                    </tr>
                </table>
                <table class="crm-DashboardPadding">
                    <tr>
                        <td style="width: 10px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalAttentionMailboxesToolTip' runat='server'/>">
                            <a href="#" id="countLink3" class="crm-DashboardAnchor" onclick="openGrid(3)" runat="server"/>
                        </td>
                        <td class="crm-Dashboard-waring-status" id="TotalAttentionMailboxes" runat="server">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table class="crm-DashboardPadding">
                                <tr>
                                    <td style="width: 10px;" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalAverageMailboxesToolTip' runat='server'/>">
                                        <a href="#" id="countLink4" class="crm-DashboardAnchor" onclick="openGrid(5)" runat="server"/>
                                    </td>
                                    <td class="crm-DashboardAnchor-status-td" id="TotalAverageMailboxes" runat="server">
                                    </td>
                                </tr>
                                <tr>
                                    <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalMailboxesDisabledToolTip' runat='server'/>">
                                        <a href="#" id="countLink6" class="crm-DashboardAnchor" onclick="openGrid(6)" runat="server"/>
                                    </td>
                                    <td class="crm-DashboardAnchor-status-td" id="TotalMailboxesDisabled" runat="server">
                                    </td>
                                </tr>
                                <tr>
                                    <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalMailboxesTestEnableToolTip' runat='server'/>">
                                        <a href="#" id="countLink7" class="crm-DashboardAnchor" onclick="openGrid(7)" runat="server"/>
                                    </td>
                                    <td class="crm-DashboardAnchor-status-td" id="TotalMailboxesTestEnable" runat="server">
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <table class="crm-DashboardPadding">
                                            <tr>
                                                <td title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.TotalMailboxesLargeTestEnableTimeToolTip' runat='server'/>">
                                                    <a href="#" id="countLink8" class="crm-DashboardAnchor" onclick="openGrid(8)" runat="server"/>
                                                </td>
                                                <td class="crm-DashboardAnchor-status-td" id="TotalMailboxesLargeTestEnableTime" runat="server">
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td colspan="2" style="padding-top: 20px; text-decoration: underline" title="<loc:Text Encoding='HtmlAttribute' ResourceId='EmailConnector.MailboxDashboard.LearnMore' runat='server'/>">
                <a href="http://go.microsoft.com/fwlink/?LinkID=534985" target="_blank" runat="server">
                    <loc:Text ResourceId="EmailConnector.MailboxDashboard.LearnMore" runat="server"/>
                </a>
            </td>
        </tr>
    </table>
</div>
</body>
</html>