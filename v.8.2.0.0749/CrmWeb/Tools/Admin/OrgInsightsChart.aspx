<%@ Page Language="c#" Inherits="Microsoft.Crm.Web.Tools.Admin.OrgInsightsChartPage" %>

<%@ Register TagPrefix="cnt" Namespace="Microsoft.Crm.Application.Controls" Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Register TagPrefix="loc" Namespace="Microsoft.Crm.Application.Controls.Localization"
Assembly="Microsoft.Crm.Application.Components.Application" %>
<%@ Import Namespace="Microsoft.Crm.Application.Pages.Common" %>
<!DOCTYPE html>
<html>
<head>
    <cnt:appheader runat="server" id="crmHeader"/>
</head>
<% RenderHighChart(); %>
<% if (!ShowErrorMessage)
   { %>
    <body style="background-color: #FFFFFF; margin-left: 10px; margin-right: 10px;">
    <div id="framecontainer" style="height: 100%; width: 100%; overflow: auto">
        <div id="container"> </div >
    </div>

    </body>
    <style>
        .selectedrollup {
            background-color: #E0E0E0;
            font-weight: bold;
        }

        .selectedrollup:hover { cursor: pointer; }

        .unselectedrollup:hover { cursor: pointer; }

        .label { z-index: 1 !important; }

        .highcharts-tooltip span {
            background-color: white;
            opacity: 1;
            z-index: 9999 !important;
        }

        .tooltip { padding: 1px; }
    </style>
    <script type="text/javascript">

        var chartData = <%= ChartData %>;

        function UpdateSeries(rollupname) {
            var IsTimeSeries = "<%= IsTimeSeries %>";
            var chart = $('#container').highcharts();
            var spans = [];
            if (IsTimeSeries == "True") {
                chart.xAxis[0].update({ minTickInterval: 10 }, false);
            } else {
                chart.xAxis[0].update({ minTickInterval: 0 }, false);
            }


            for (i = 0; i < chartData.length; i++) {
                var spanElement = document.createElement("span");
                spanElement.setAttribute("onclick", "UpdateSeries(\'" + chartData[i].LocalizedName + "\')");
                spanElement.innerText = chartData[i].LocalizedName;

                if (chartData[i].LocalizedName == rollupname) {

                    chart.xAxis[0].update({ categories: chartData[i].xAxis }, false);

                    for (j = 0; j < chartData[i].Series.length; j++) {
                        var seriesdata = chart.get(chartData[i].Series[j].id);
                        if (seriesdata == null) {
                            chart.addSeries(chartData[i].Series[j], false);
                        }

                    }

                    spanElement.className = "selectedrollup";
                } else {

                    for (j = 0; j < chartData[i].Series.length; j++) {
                        var seriesdata = chart.get(chartData[i].Series[j].id);
                        if (seriesdata != null) {
                            seriesdata.remove(false);
                        }
                    }

                    spanElement.className = "unselectedrollup";
                }
                spans[i] = spanElement.outerHTML;
            }

            chart.setTitle(null, { text: "<%= Subtitle %> : &nbsp;" + spans.join("&nbsp;&nbsp;") });

            chart.redraw();
        }

        $(function() {

            Highcharts.setOptions({
                colors: <%= Colors %>,
                lang: {
                    helpButtonTooltip: "",
                    numericSymbols: null,
                    thousandsSep: "<%= LocalizedThousandSeperator %>",
                    decimalPoint: "<%= LocalizedDecimalPoint %>",
                    noData: "<%= NoDataMessage %>"
                }
            });

            var stackingOption = "";
            if ("<%= ChartType %>" == "bar") {
                stackingOption = "normal";
            }

            $('#container').highcharts({
                title: {
                    text: '<%= ChartTitle %>',
                    useHTML: true
                },
                subtitle: {
                    text: '',
                    useHTML: true,
                    align: 'right'
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        autoRotation: false,
                        staggerLines: 1
                    },
                    categories: [],
                    tickmarkPlacement: 'on',
                    allowDecimals: false,
                    useHTML: true
                },
                yAxis: {
                    title: {
                        text: '<%= YAxis %>'
                    },
                    floor: 0,
                    allowDecimals: false,
                    labels: {
                        useHTML: true
                    }
                },
                tooltip: {
                    crosshairs: true,
                    useHTML: true,
                    borderWidth: 1,
                    backgroundColor: "rgba(255,255,255,0)",
                    borderRadius: 0,
                    valueDecimals: 0,
                    shadow: false,
                    backgroundColor: "rgba(255,255,255,1)",
                    formatter: function() {
                        return '<div class="tooltop">' +
                            this.x +
                            '<br />' +
                            this.series.name +
                            ': ' +
                            '<b>' +
                            this.y +
                            '</b></div>';
                    }
                },
                plotOptions: {
                    series: {
                        stacking: stackingOption,
                        marker: {
                            radius: 2
                        }
                    }
                },
                legend: {
                    useHTML: true
                },
                chart: {
                    height: $P_CRM("#framecontainer").outerHeight() - 10,
                    width: $P_CRM("#framecontainer").outerWidth() - 10,
                    type: '<%= ChartType %>'
                },
                exporting: {
                    buttons: {
                        helpButton: {
                            symbol: 'url(/_imgs/ico/17_help.png)',
                            _titleKey: 'helpButtonTooltip',
                            onclick: function() {
                                window.open('<%= OrgInsightsHelpLink %>', '_blank');
                            }
                        },
                        contextButton: {
                            enabled: false
                        }
                    }
                },
                series: []

            });

            UpdateSeries(chartData[0].LocalizedName);


        });
        window.self[Mscrm.RefreshFormMarker.OrgInsightsChartId] = '<%= OrgInsightsConfigurationId.ToString() %>';
        window.self[Mscrm.RefreshFormMarker
            .IsUserOrgInsightsChart] = '<%= IsUserOrgInsightsConfiguration.ToString() %>';

        var startTime = LoadStartTime;
        if (window.performance && window.performance.timing) {
            startTime = window.performance.timing.navigationStart;
        }

        window.self[Mscrm.RefreshFormMarker.StartOrgInsightsChart] = startTime;

        function CollectAndReportMetrics() {
            window.self[Mscrm.RefreshFormMarker.FinishOrgInsightsChart] = new Date().getTime();
            if (Mscrm && Mscrm.MetricsCollector && Mscrm.MetricsCollector.collectAndReportClientMetrics) {
                Mscrm.MetricsCollector.collectAndReportClientMetrics(Mscrm.MetricsPageType.orgInsightsChart);
            }
        }

        registerEvents(window, "load", CollectAndReportMetrics);


    </script>
<% }
   else
   { %>
    <%= ErrorMessageBody %>
<% } %>
</html>