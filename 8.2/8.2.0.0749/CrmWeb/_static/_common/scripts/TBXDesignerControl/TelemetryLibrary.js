// ---------------------------------------------------------------------------
// <copyright file="JsonRequestManager.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var _Microsoft;
(function (_Microsoft) {
    var Client;
    (function (Client) {
        var Telemetry;
        (function (Telemetry) {
            var JsonRequestManager = (function () {
                function JsonRequestManager(targetServiceUri, onSuccessHandler, onErrorHandler, beforeSendHandler) {
                    this.serviceUri = targetServiceUri;
                    this.beforeSend = beforeSendHandler;
                    this.onSuccess = onSuccessHandler;
                    this.onError = onErrorHandler;
                }
                JsonRequestManager.prototype.BeginRequest = function (requestType, serviceOperation, jsonDataObject, timeOutInMilliseconds) {
                    var jsonData = "";
                    if (jsonDataObject != null) {
                        jsonData = JSON.stringify(jsonDataObject);
                    }
                    return jQuery.ajax({
                        type: requestType,
                        url: this.serviceUri + serviceOperation,
                        data: jsonData,
                        contentType: JsonRequestManager.JsonContentType,
                        dataType: JsonRequestManager.JsonDataType,
                        timeout: timeOutInMilliseconds,
                        success: this.onSuccess,
                        error: this.onError
                    });
                };
                JsonRequestManager.JsonContentType = "application/json; charset=utf-8";
                JsonRequestManager.JsonDataType = "json";
                return JsonRequestManager;
            }());
            Telemetry.JsonRequestManager = JsonRequestManager;
        })(Telemetry = Client.Telemetry || (Client.Telemetry = {}));
    })(Client = _Microsoft.Client || (_Microsoft.Client = {}));
})(_Microsoft || (_Microsoft = {}));
// ---------------------------------------------------------------------------
// <copyright file="Queue.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
/**
 * Represents a first-in, first-out collection of objects.
 */
var Queue = (function () {
    /**
     * 	Initializes a new instance of the Queue<T> class that is empty.
     */
    function Queue() {
        this._arr = new Array();
    }
    Object.defineProperty(Queue.prototype, "canDequeue", {
        get: function () {
            return this._arr.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "count", {
        /**
         * Gets the number of elements contained in the Queue<T>.
         * @return The number of elements contained in the Queue<T>.
         */
        get: function () {
            return this._arr.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds an object to the end of the Queue<T>.
     * @param item The object to add to the Queue<T>.
     */
    Queue.prototype.enqueue = function (item) {
        this._arr.push(item);
    };
    /**
     * Removes and returns the object at the beginning of the Queue<T>.
     * @return The object that is removed from the beginning of the Queue<T>.
     */
    Queue.prototype.dequeue = function () {
        return this._arr.shift();
    };
    /**
     * Returns the object at the beginning of the Queue<T> without removing it.
     * @return The object at the beginning of the Queue<T>.
     */
    Queue.prototype.peek = function () {
        if (this._arr.length == 0)
            return undefined; // or throw exception?
        return this._arr[0];
    };
    /**
     * Removes all objects from the Queue<T>.
     */
    Queue.prototype.clear = function () {
        delete this._arr;
        this._arr = new Array();
    };
    return Queue;
}());
// ---------------------------------------------------------------------------
// <copyright file="TelemetryInterfaces.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var _Microsoft;
(function (_Microsoft) {
    var Client;
    (function (Client) {
        var Telemetry;
        (function (Telemetry) {
            /** Class definition for event parameter */
            var EventParameter = (function () {
                function EventParameter(parameterName, value) {
                    this.parameterName = parameterName;
                    this.value = value;
                }
                EventParameter.prototype.ParameterName = function () {
                    return this.parameterName;
                };
                EventParameter.prototype.Value = function () {
                    return this.value;
                };
                return EventParameter;
            }());
            Telemetry.EventParameter = EventParameter;
        })(Telemetry = Client.Telemetry || (Client.Telemetry = {}));
    })(Client = _Microsoft.Client || (_Microsoft.Client = {}));
})(_Microsoft || (_Microsoft = {}));
// ---------------------------------------------------------------------------
// <copyright file="Utility.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
var _Microsoft;
(function (_Microsoft) {
    var Client;
    (function (Client) {
        var Telemetry;
        (function (Telemetry) {
            var Utility = (function () {
                function Utility() {
                }
                // Generate new GUID
                Utility.newGuid = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                        return v.toString(16);
                    });
                };
                // Get current timestamp
                Utility.GetTimeStamp = function () {
                    var date = new Date();
                    return date.getUTCFullYear() + '-' +
                        ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' +
                        ('00' + date.getUTCDate()).slice(-2) + ' ' +
                        ('00' + date.getUTCHours()).slice(-2) + ':' +
                        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                        ('00' + date.getUTCSeconds()).slice(-2);
                };
                return Utility;
            }());
            Telemetry.Utility = Utility;
        })(Telemetry = Client.Telemetry || (Client.Telemetry = {}));
    })(Client = _Microsoft.Client || (_Microsoft.Client = {}));
})(_Microsoft || (_Microsoft = {}));
// ---------------------------------------------------------------------------
// <copyright file="TelemetryEvent.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
/// <reference path="TelemetryInterfaces.ts" />
/// <reference path="Utility.ts" />
var _Microsoft;
(function (_Microsoft) {
    var Client;
    (function (Client) {
        var Telemetry;
        (function (Telemetry) {
            var TelemetryEvent = (function () {
                function TelemetryEvent(activityId, eventName) {
                    this.activityId = activityId;
                    if (this.activityId == null || this.activityId == "") {
                        this.activityId = this.ActiveSessionId();
                    }
                    this.eventName = eventName;
                    this.eventParameters = [];
                }
                TelemetryEvent.prototype.AddEventParameter = function (name, value) {
                    this.eventParameters.push(new Telemetry.EventParameter(name, value));
                };
                TelemetryEvent.prototype.ToJson = function () {
                    var jsonObject = {};
                    jsonObject["ActivityId"] = this.activityId;
                    jsonObject["EventName"] = this.eventName;
                    var eventValues = {};
                    for (var param = 0; param < this.eventParameters.length; param++) {
                        eventValues[this.eventParameters[param].ParameterName()] = this.eventParameters[param].Value();
                    }
                    jsonObject["EventValues"] = eventValues;
                    return jsonObject;
                };
                TelemetryEvent.prototype.ActiveSessionId = function () {
                    return TelemetryEvent.activeSessionId;
                };
                TelemetryEvent.prototype.ActivityId = function () { return this.activityId; };
                TelemetryEvent.prototype.EventName = function () { return this.eventName; };
                TelemetryEvent.prototype.EventParameters = function () { return this.eventParameters; };
                /*
                FinishActivity() method gives call to AddTelemetryEvent(...) which will add the event in event queue.
                Then based on TelemetryReporter.postImmediately flag, event will be posted.
                */
                TelemetryEvent.prototype.FinishActivity = function () {
                    Telemetry.TelemetryReporter.Instance().AddTelemetryEvent(this);
                };
                /*
                FinishActivityImmediately() method gives call to PostEventImmediately(...) which will post the single
                event immediately instead of adding to event queue; no matter TelemetryReporter.postImmediately flag
                is set to true or false
                */
                TelemetryEvent.prototype.FinishActivityImmediately = function () {
                    Telemetry.TelemetryReporter.Instance().PostEventImmediately(this);
                };
                TelemetryEvent.activeSessionId = Telemetry.Utility.newGuid();
                return TelemetryEvent;
            }());
            Telemetry.TelemetryEvent = TelemetryEvent;
        })(Telemetry = Client.Telemetry || (Client.Telemetry = {}));
    })(Client = _Microsoft.Client || (_Microsoft.Client = {}));
})(_Microsoft || (_Microsoft = {}));
// ---------------------------------------------------------------------------
// <copyright file="TelemetryReporter.ts" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------
/// <reference path="Queue.ts" />
/// <reference path="JsonRequestManager.ts" />
/// <reference path="TelemetryEvent.ts" />
var _Microsoft;
(function (_Microsoft) {
    var Client;
    (function (Client) {
        var Telemetry;
        (function (Telemetry) {
            var TelemetryReporter = (function () {
                function TelemetryReporter() {
                    this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                    TelemetryReporter.pendingEvents = new Queue();
                    this.hasActiveEndpoint = true;
                    this.discoveryComplete = false;
                }
                /// <summary>
                /// Initialize request manager and set initial properties.
                /// </summary>
                /// <param name="reportingEndpointUrl">Reporting endpoint URL</param>
                /// <param name="postImmediately">Post event immediately or put in a queue and will be posted periodically as per timer configuration</param>
                TelemetryReporter.prototype.InitializeRequestManager = function (reportingEndpointUrl, postImmediately) {
                    this.discoveryComplete = true;
                    TelemetryReporter.postImmediately = postImmediately;
                    var self = this;
                    if (reportingEndpointUrl != "") {
                        TelemetryReporter.requestManager = new Telemetry.JsonRequestManager(reportingEndpointUrl, this.OnSuccess, this.OnError, this.OnBeforeSend);
                        this.ReportEvents();
                    }
                    else {
                        this.hasActiveEndpoint = false;
                        TelemetryReporter.pendingEvents.clear();
                    }
                };
                /// <summary>
                /// Post event batch in queue to reporting endpoint.
                /// </summary>
                TelemetryReporter.prototype.ReportEvents = function () {
                    //Debug.Assert(this.discoveryComplete, "Trying to report events before the telemetry endpoint is discovered.");
                    var pendingEventsCount = TelemetryReporter.pendingEvents.count;
                    if (pendingEventsCount > 0) {
                        var countOfEventsToReport;
                        if (pendingEventsCount < TelemetryReporter.MaxEventsPerReport) {
                            countOfEventsToReport = pendingEventsCount;
                        }
                        else {
                            countOfEventsToReport = TelemetryReporter.MaxEventsPerReport;
                        }
                        // Collect a batch of events to report.
                        var eventsToReport = [];
                        for (var i = 0; i < countOfEventsToReport; i++) {
                            var Event = TelemetryReporter.pendingEvents.dequeue();
                            eventsToReport[i] = Event.ToJson();
                        }
                        // Start the request to the telemetry endpoint to post a batch of events
                        if (typeof (TelemetryReporter.requestManager) != "undefined" && TelemetryReporter.requestManager != null) {
                            TelemetryReporter.requestManager.BeginRequest("POST", "", eventsToReport, TelemetryReporter.RequestTimeout);
                        }
                    }
                    // Recreate the timer, if there are more events to process.
                    if (!TelemetryReporter.postImmediately) {
                        var resetTimer = true;
                        if (TelemetryReporter.pendingEvents.count > 0) {
                            this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                            resetTimer = false;
                        }
                        TelemetryReporter.Instance().ConfigureReportingTimer(resetTimer);
                    }
                };
                /// <summary>
                /// Configures the timer that triggers periodic reporting of telemetry events.
                /// </summary>
                /// <param name="resetTimer">Flag to disable the timer</param>
                TelemetryReporter.prototype.ConfigureReportingTimer = function (resetTimer) {
                    // Delay timer configuration till discovery completes
                    if (!this.discoveryComplete) {
                        return;
                    }
                    if (resetTimer) {
                        // We dont cancel the timer, so just reset the timer id.
                        this.timeoutTimerId = TelemetryReporter.DefaultTimerId;
                    }
                    else if (this.timeoutTimerId == TelemetryReporter.DefaultTimerId) {
                        // Start a new timer to report events.
                        this.timeoutTimerId = 1;
                        setTimeout(this.ReportEvents, TelemetryReporter.ReportingInterval);
                    }
                };
                /// <summary>
                /// Add telemetry event to queue. Post event immediately if configured accordingly.
                /// </summary>
                /// <param name="event">Event data</param>
                TelemetryReporter.prototype.AddTelemetryEvent = function (event) {
                    // NOP if there is no telemetry endpoint for the current org.
                    if (this.hasActiveEndpoint) {
                        if (TelemetryReporter.postImmediately) {
                            this.PostEventImmediately(event);
                        }
                        else {
                            TelemetryReporter.pendingEvents.enqueue(event);
                            this.ConfigureReportingTimer(false);
                        }
                    }
                };
                /// <summary>
                /// Post event immediately.
                /// </summary>
                /// <param name="event">Event data</param>
                TelemetryReporter.prototype.PostEventImmediately = function (event) {
                    var eventsToReport = [];
                    eventsToReport[0] = event.ToJson();
                    if (typeof (TelemetryReporter.requestManager) != "undefined" && TelemetryReporter.requestManager != null) {
                        TelemetryReporter.requestManager.BeginRequest("POST", "", eventsToReport, TelemetryReporter.RequestTimeout);
                    }
                    else {
                        TelemetryReporter.pendingEvents.enqueue(event);
                    }
                };
                /// <summary>
                /// Return TelemetryReporter instance.
                /// </summary>
                TelemetryReporter.Instance = function () {
                    if (TelemetryReporter.instance == null) {
                        TelemetryReporter.instance = new TelemetryReporter();
                    }
                    return TelemetryReporter.instance;
                };
                /// <summary>
                /// Set TelemetryReporter properties related to maximum event to send per batch and timer related properties.
                /// </summary>
                TelemetryReporter.ConfigureTelemetryReporterProperties = function (MaxEventsPerReport, ReportingInterval, RequestTimeout, DefaultTimerId) {
                    TelemetryReporter.MaxEventsPerReport = MaxEventsPerReport;
                    TelemetryReporter.ReportingInterval = ReportingInterval;
                    TelemetryReporter.RequestTimeout = RequestTimeout;
                    TelemetryReporter.DefaultTimerId = DefaultTimerId;
                };
                /// <summary>
                /// Get the count of pending events in queue
                ///</summary>
                TelemetryReporter.PendingEventsCount = function () {
                    return TelemetryReporter.pendingEvents.count;
                };
                /// <summary>
                /// Clear all the pending events from the queue
                ///</summary>
                TelemetryReporter.ClearPendingEventsQueue = function () {
                    TelemetryReporter.pendingEvents.clear();
                };
                /// <summary>
                /// Method called before sending request
                /// </summary>
                /// <param name="request"> The http request</param>
                TelemetryReporter.prototype.OnBeforeSend = function (request) {
                    console.log("OnBeforeSend - Before event post request start");
                };
                /// <summary>
                /// Method called when the requests fails
                /// </summary>
                /// <param name="request"> The http request.</param>
                /// <param name="textStatus"> The status of the request</param>
                /// <param name="error"> The error exception</param>
                TelemetryReporter.prototype.OnError = function (request, textStatus, error) {
                    console.log("OnError: Error occurred while posting the event data");
                };
                /// <summary>
                /// Method called when the request succeeds
                /// </summary>
                /// <param name="data"> The data object.</param>
                /// <param name="textStatus"> The status of the request.</param>
                /// <param name="request"> The http request.</param>
                TelemetryReporter.prototype.OnSuccess = function (data, textStatus, request) {
                    console.log("OnSuccess: Event posted successfully. Status - {0} ", request.status);
                };
                TelemetryReporter.MaxEventsPerReport = 200;
                TelemetryReporter.ReportingInterval = 5 * 60 * 1000;
                TelemetryReporter.RequestTimeout = 30000;
                TelemetryReporter.DefaultTimerId = -1;
                TelemetryReporter.postImmediately = false;
                return TelemetryReporter;
            }());
            Telemetry.TelemetryReporter = TelemetryReporter;
        })(Telemetry = Client.Telemetry || (Client.Telemetry = {}));
    })(Client = _Microsoft.Client || (_Microsoft.Client = {}));
})(_Microsoft || (_Microsoft = {}));
//# sourceMappingURL=TelemetryLibrary.js.map