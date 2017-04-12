<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.DashboardEditor.OrgInsightsComponentGallery" %>

<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="frm" Namespace="Microsoft.Crm.Application.Forms" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="sdk" Namespace="Microsoft.Crm.Application.Components.Sdk.FormControls.Web"
Assembly="Microsoft.Crm.Application.Components.Sdk.FormControls" %>
<%@ Register TagPrefix="ui" Namespace="Microsoft.Crm.Application.Components.UI" Assembly="Microsoft.Crm.Application.Components.UI" %>
<%@ Import Namespace="Microsoft.Crm.Utility" %>
<%@ Import Namespace="Microsoft.Crm" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!Doctype html>
<html>
<head>
    <title>
        <loc:text resourceid="Web.DashboardEditor.OrgInsightsComponentGallery.DialogTitle" runat="server"/>
    </title>
    <cnt:appheader id="crmHeader" runat="server"/>
    <script type="text/javascript">

        function OnLoad() {
            <% if (!HasError)
               { %>
            $get("Container").style.display = "block";
            Mscrm.OrgInsightsComponentGallery.onLoad();
            <% } %>
        }

        function applychanges() {
            Mscrm.OrgInsightsComponentGallery.applyChanges();
        }

        function cancel() {
            closeWindow();
        }

        window.self[Mscrm.RefreshFormMarker.OrgInsightsComponentGalleryDashboardType] = '<%= DashboardTypeParam %>';

        var startTime = LoadStartTime;
        if (window.performance && window.performance.timing) {
            startTime = window.performance.timing.navigationStart;
        }

        window.self[Mscrm.RefreshFormMarker.StartOrgInsightsComponentGallery] = startTime;

        function CollectAndReportMetrics() {
            window.self[Mscrm.RefreshFormMarker.FinishOrgInsightsComponentGallery] = new Date().getTime();
            if (Mscrm && Mscrm.MetricsCollector && Mscrm.MetricsCollector.collectAndReportClientMetrics) {
                Mscrm.MetricsCollector.collectAndReportClientMetrics(Mscrm.MetricsPageType.orgInsightsComponentGallery);
            }
        }

        registerEvents(window, "load", CollectAndReportMetrics);

        Sys.Application.add_load(OnLoad);
    </script>
</head>
<body>
<input type="hidden" id='componentId' name='componentId' value=""/>
<frm:DialogForm id="crmForm" runat="server">
    <% if (!HasError)
       { %>
        <div id="Container" style="width: 100%; height: 100%;">
            <div style="position: relative; width: 100%; height: 100%">
                <div class="CGSelectorTD">
                    <table class="stdTable CGSelectorTable" cellpadding="0" cellspacing="0">
                        <tr class="CGSelectorTR">
                            <td nowrap="nowrap" id="tdOrgInsightsConfigurationSelectorLabel">
                                <label for="crmOrgInsightsConfigurationSelector" class="ms-crm-Bold-Header">
                                    <loc:text resourceid="Web.DashboardEditor.OrgInsightsComponentGallery.ChartLabel" runat="server"/>
                                </label>
                            </td>
                        </tr>
                        <tr class="CGSelectorTR">
                            <td id="tdOrgInsightsConfigurationSelector" class="ms-crm-Dialog-Selector">
                                <cnt:OrgInsightsConfigurationSelector runat="server" id="crmOrgInsightsConfigurationSelector"/>
                            </td>
                        </tr>
                        <tr style="height: 100%">
                            <td>
                                &nbsp;
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="CGChartPreviewTD ms-crm-WhiteBackground" style="margin-top: 10px;">
                    <iframe name="previewFrame" id="previewFrame" class="CGChartPreviewFrame"
                            scrolling="no" frameborder=0
                            src="<%= Microsoft.Crm.CrmEncodeDecode.CrmHtmlAttributeEncode(Microsoft.Crm.Application.Utility.CrmUri.Create("/_static/blank.htm", Microsoft.Crm.Application.Security.UserInformation.Current).ToString()) %>">
                    </iframe>
                    <div id="previewLoadingDiv" style="display: none; position: absolute; top: 48%; left: 48%">
                        <img alt='' src='/_imgs/AdvFind/progress.gif'/><br/>
                        <loc:text resourceid="PageLoadingMessage" runat="server"/>
                    </div>
                    <div id="contentDiv" style="display: none;" class="ms-crm-absolutePosition">
                    </div>
                </div>
            </div>
        </div>
    <% } %>
</frm:DialogForm>
<form name="vizForm" id="vizForm" method="post" target="previewFrame" action="">
    <input type="hidden" id='vizXml' name='vizXml' value=""/>
</form>
</body>
</html>