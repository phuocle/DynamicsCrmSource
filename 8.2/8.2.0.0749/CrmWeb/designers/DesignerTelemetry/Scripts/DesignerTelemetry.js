var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Telemetry;
        (function(Telemetry) {
            "use strict";
            var JsonRequestManager = function() {
                function JsonRequestManager(targetServiceUri, onSuccessHandler, onErrorHandler, beforeSendHandler) {
                    this.serviceUri = targetServiceUri;
                    this.beforeSend = beforeSendHandler;
                    this.onSuccess = onSuccessHandler;
                    this.onError = onErrorHandler
                }

                JsonRequestManager.prototype
                    .BeginRequest = function(requestType, serviceOperation, jsonDataObject, timeOutInMilliseconds) {
                        var jsonData = "";
                        if (jsonDataObject != null) jsonData = JSON.stringify(jsonDataObject);
                        return jQuery.ajax({
                            type: requestType,
                            url: this.serviceUri + serviceOperation,
                            data: jsonData,
                            contentType: JsonRequestManager.JsonContentType,
                            dataType: JsonRequestManager.JsonDataType,
                            timeout: timeOutInMilliseconds,
                            success: this.onSuccess,
                            error: this.onError
                        })
                    };
                JsonRequestManager.JsonContentType = "application/json; charset=utf-8";
                JsonRequestManager.JsonDataType = "json";
                return JsonRequestManager
            }();
            Telemetry.JsonRequestManager = JsonRequestManager
        })(Telemetry = Designers.Telemetry || (Designers.Telemetry = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Telemetry;
        (function(Telemetry) {
            "use strict";
            Telemetry.currentInstance;
            Telemetry.telemetryReporter;
            Telemetry.xhrResponseFunction;
            Telemetry.xhrObj;
            var ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                TelemetryInit = function() {
                    function TelemetryInit(traceUtility, telemetryService) {
                        this.traceUtility = traceUtility;
                        this.telemetryService = telemetryService;
                        Telemetry.currentInstance = this
                    }

                    TelemetryInit.prototype.TryReportInitEvent = function() {
                        this.traceUtility.Scenario = Designers.Common.Constants.TracingScenarios.TelemetryInit;
                        try {
                            var reportingEndpointUrl;
                            reportingEndpointUrl = this.DiscoverEndpointAndReportInitEvent()
                        } catch (e) {
                            this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.Telemetry,
                                Designers.Common.Constants.TracingScenarios.TelemetryInit,
                                new Mscrm.Designers.Common.Tracing
                                .StringTraceData(Designers.Common.Constants.EventStatus.Fail +
                                    ": Error when trying to report init event"));
                            this.traceUtility.Scenario = ""
                        }
                    };
                    TelemetryInit.prototype.DiscoverEndpointAndReportInitEvent = function() {
                        var port = window.location.port,
                            host = window.location.hostname,
                            orgUrl = window.location.protocol + "//" + host;
                        if (port) orgUrl += ":" + port;
                        var discoveryUrl;
                        if (host.match(/contoso/gi) != null ||
                            host.match(/msmecrm/gi) != null ||
                            host.match(/crmlivetoday/gi) != null ||
                            host.match(/mocaifd/gi) != null ||
                            host.match(/crmifd/gi) != null)
                            discoveryUrl = "https://crminsightsdev.cloudapp.net/api/Discovery/?originUrl=" + orgUrl;
                        else if (host
                            .match(/crmlivetie/gi) !=
                            null)
                            discoveryUrl = "https://crminsights.crm.crmlivetie.com/api/Discovery/?originUrl=" + orgUrl;
                        else if (host
                            .match(/dynamics-int/gi) !=
                            null)
                            discoveryUrl =
                                "https://crminsights.crm.dynamics-int.com/api/Discovery/?originUrl=" + orgUrl;
                        else discoveryUrl = "https://crminsights.crm.dynamics.com/api/Discovery/?originUrl=" + orgUrl;
                        this.MakeCorsRequest(discoveryUrl, "GET", null, this.ProcessResponse.bind(this))
                    };
                    TelemetryInit.prototype.ProcessResponse = function(xhr) {
                        var telemetryReportingEndpointUrl = xhr.responseText;
                        if (!telemetryReportingEndpointUrl) {
                            console.log("Reporting Endpoint not found.");
                            Telemetry.telemetryReporter.InitializeRequestManager("");
                            return
                        }
                        telemetryReportingEndpointUrl = telemetryReportingEndpointUrl.replace(/"/g, "");
                        telemetryReportingEndpointUrl = "https://" +
                            telemetryReportingEndpointUrl +
                            "/api/crminsightseventdata";
                        this.telemetryService.InitializeRequestManager(telemetryReportingEndpointUrl)
                    };
                    TelemetryInit.prototype
                        .MakeCorsRequest = function(reportingEndpointUrl, method, data, onResponseAvailable) {
                            this.traceUtility.Scenario = Designers.Common.Constants.TracingScenarios.MakeCorsRequest;
                            try {
                                Telemetry.xhrObj = new XMLHttpRequest;
                                Telemetry.xhrObj.open(method, reportingEndpointUrl);
                                method === "POST" &&
                                    Telemetry.xhrObj
                                    .setRequestHeader("Content-Type", "application/json; charset=utf-8");
                                Telemetry.xhrObj.setRequestHeader("accept", "application/json");
                                Telemetry.xhrResponseFunction = onResponseAvailable;
                                Telemetry.xhrObj.onload = this.XhrResponse;
                                Telemetry.xhrObj.send(JSON.stringify(data))
                            } catch (e) {
                                this.traceUtility.LogError(Designers.Common.Tracing.TraceComponent.Telemetry,
                                    "MakeCorsRequest",
                                    new Mscrm.Designers.Common.Tracing
                                    .StringTraceData(Designers.Common.Constants.EventStatus.Fail +
                                        ": An unexpected error occurred while reporting init event"));
                                this.traceUtility.Scenario = ""
                            }
                        };
                    TelemetryInit.prototype.XhrResponse = function() {
                        if (Telemetry.xhrResponseFunction) Telemetry.xhrResponseFunction(Telemetry.xhrObj);
                        else
                            this.traceUtility.LogInfo(Designers.Common.Tracing.TraceComponent.Telemetry,
                                Telemetry.xhrObj.status.toString(),
                                new Mscrm.Designers.Common.Tracing.StringTraceData(Telemetry.xhrObj.statusText))
                    };
                    TelemetryInit.$inject = [ServiceNames.TraceUtilityService, ServiceNames.TelemetryService];
                    return TelemetryInit
                }();
            Telemetry.TelemetryInit = TelemetryInit;
            angular.module("mscrmTelemetry").service("mscrmInitTelemetryService", TelemetryInit)
        })(Telemetry = Designers.Telemetry || (Designers.Telemetry = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Telemetry;
        (function(Telemetry) {
            "use strict";
            var TelemetryReporter = function() {
                function TelemetryReporter() {
                    this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                    TelemetryReporter.pendingEvents = new Mscrm.Designers.Common.Models.Queue;
                    this.hasActiveEndpoint = true;
                    this.discoveryComplete = false
                }

                TelemetryReporter.prototype.InitializeRequestManager = function(reportingEndpointUrl) {
                    this.discoveryComplete = true;
                    var self = this;
                    if (reportingEndpointUrl !== "") {
                        TelemetryReporter.requestManager = new Telemetry
                            .JsonRequestManager(reportingEndpointUrl,
                                this.OnSuccess.bind(this),
                                this.OnError.bind(this),
                                this.OnBeforeSend.bind(this));
                        this.ReportEvents()
                    } else {
                        this.hasActiveEndpoint = false;
                        TelemetryReporter.pendingEvents.clear()
                    }
                };
                TelemetryReporter.prototype.AddTelemetryEvent = function(designerEvent) {
                    if (this.hasActiveEndpoint) {
                        TelemetryReporter.pendingEvents.enqueue(designerEvent);
                        this.ConfigureReportingTimer(false)
                    }
                };
                TelemetryReporter.prototype.ReportEvents = function() {
                    var pendingEventsCount = TelemetryReporter.pendingEvents.count, countOfEventsToReport;
                    if (pendingEventsCount < TelemetryReporter.MaxEventsPerReport
                    ) countOfEventsToReport = pendingEventsCount;
                    else countOfEventsToReport = TelemetryReporter.MaxEventsPerReport;
                    for (var eventsToReport = [], i = 0; i < countOfEventsToReport; i++) {
                        var designerEvent = TelemetryReporter.pendingEvents.dequeue();
                        eventsToReport[i] = designerEvent.ToJson()
                    }
                    TelemetryReporter.requestManager
                        .BeginRequest("POST", "", eventsToReport, TelemetryReporter.RequestTimeout);
                    var resetTimer = true;
                    if (TelemetryReporter.pendingEvents.count > 0) {
                        this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                        resetTimer = false
                    }
                    this.ConfigureReportingTimer(resetTimer)
                };
                TelemetryReporter.prototype.ConfigureReportingTimer = function(resetTimer) {
                    if (!this.discoveryComplete) return;
                    if (resetTimer) this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                    else if (this.timeoutTimerId === TelemetryReporter.DefaultTimerId) {
                        this.timeoutTimerId = 1;
                        setTimeout(this.ReportEvents, TelemetryReporter.ReportingInterval)
                    }
                };
                TelemetryReporter.prototype.OnBeforeSend = function(request) {
                    console.log("[{%s}]: (%s): %s: %s",
                        Designers.Common.Tracing.TraceComponent.Telemetry,
                        (new Date).toISOString(),
                        Designers.Common.Constants.TracingScenarios.Telemetry,
                        "OnBeforeSend")
                };
                TelemetryReporter.prototype.OnError = function(request, textStatus, error) {
                    console.log("[{%s}]: (%s): %s: %s",
                        Designers.Common.Tracing.TraceComponent.Telemetry,
                        (new Date).toISOString(),
                        Designers.Common.Constants.TracingScenarios.Telemetry,
                        Designers.Common.Constants.EventStatus.Fail + ": " + error)
                };
                TelemetryReporter.prototype.OnSuccess = function(data, textStatus, request) {
                    console.log("[{%s}]: (%s): %s: %s",
                        Designers.Common.Tracing.TraceComponent.Telemetry,
                        (new Date).toISOString(),
                        Designers.Common.Constants.TracingScenarios.Telemetry,
                        Designers.Common.Constants.EventStatus.Success + ": " + textStatus)
                };
                TelemetryReporter.MaxEventsPerReport = 200;
                TelemetryReporter.ReportingInterval = 5 * 60 * 1e3;
                TelemetryReporter.RequestTimeout = 3e4;
                TelemetryReporter.DefaultTimerId = -1;
                return TelemetryReporter
            }();
            Telemetry.TelemetryReporter = TelemetryReporter;
            angular.module("mscrmTelemetry").service("mscrmTelemetryService", TelemetryReporter)
        })(Telemetry = Designers.Telemetry || (Designers.Telemetry = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))