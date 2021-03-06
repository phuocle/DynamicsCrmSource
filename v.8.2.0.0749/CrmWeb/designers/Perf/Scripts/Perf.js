var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                var Controllers;
                (function(Controllers) {
                    "use strict";
                    var common = Mscrm.Designers.Perf.Common,
                        PersistentLoggerController = function() {
                            function PersistentLoggerController(perfService) {
                                this.perfService = perfService;
                                this.logger = this.perfService.getLogger(common.LoggerTypes.persistentLogger)
                            }

                            PersistentLoggerController.prototype.getKpiLogs = function() { return this.logger.KpiLogs };
                            PersistentLoggerController.prototype
                                .getSceanarioKpiLogs = function() { return this.logger.ScenarioKpiLogs };
                            PersistentLoggerController.$inject = ["mscrmPerfService"];
                            return PersistentLoggerController
                        }();
                    Controllers.PersistentLoggerController = PersistentLoggerController;
                    angular.module("mscrmPerformance")
                        .controller("mscrmPersistentLoggerController", PersistentLoggerController)
                })(Controllers = OnDemand.Controllers || (OnDemand.Controllers = {}))
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                var Models;
                (function(Models) {
                    "use strict";
                    var PerfKpi = function() {
                        function PerfKpi(name, kpiType, goal, component) {
                            this.name = name;
                            this.kpiType = kpiType;
                            this.goal = goal;
                            this.component = component
                        }

                        return PerfKpi
                    }();
                    Models.PerfKpi = PerfKpi
                })(Models = OnDemand.Models || (OnDemand.Models = {}))
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                var Models;
                (function(Models) {
                    "use strict";
                    var PerfMarker = function() {
                        function PerfMarker(id, parameters, name) {
                            this.id = id;
                            this.parameters = parameters;
                            this.name = name;
                            this.timestamp = window.performance.now()
                        }

                        return PerfMarker
                    }();
                    Models.PerfMarker = PerfMarker
                })(Models = OnDemand.Models || (OnDemand.Models = {}))
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                var Models;
                (function(Models) {
                    "use strict";
                    var common = Perf.Common,
                        ConsoleLogger = function() {
                            function ConsoleLogger() {}

                            ConsoleLogger.prototype.log = function(msg, kpi) { window.console.log(msg) };
                            return ConsoleLogger
                        }();
                    Models.ConsoleLogger = ConsoleLogger;
                    var PersistentLogger = function() {
                        function PersistentLogger() {
                            this.scenarioKpiLogs = [];
                            this.kpiLogs = []
                        }

                        Object.defineProperty(PersistentLogger.prototype,
                            "KpiLogs",
                            { "get": function() { return this.kpiLogs }, enumerable: true, configurable: true });
                        Object.defineProperty(PersistentLogger.prototype,
                            "ScenarioKpiLogs",
                            {
                                "get": function() { return this.scenarioKpiLogs },
                                enumerable: true,
                                configurable:
                                    true
                            });
                        PersistentLogger.prototype.log = function(msg, kpi) {
                            kpi.kpiType == common.PerfKpiTypes.scenario && this.scenarioKpiLogs.push(msg);
                            this.kpiLogs.push(msg)
                        };
                        return PersistentLogger
                    }();
                    Models.PersistentLogger = PersistentLogger
                })(Models = OnDemand.Models || (OnDemand.Models = {}))
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                var Models;
                (function(Models) {
                    "use strict";
                    var scriptUtil = Mscrm.Designers.Common.Utility.ScriptUtilities,
                        stringUtil = Mscrm.Designers.Common.Utility.StringUtilities,
                        TelemetryEvents = Mscrm.Designers.Common.Telemetry,
                        PerfStopWatch = function() {
                            function PerfStopWatch(perfService,
                                perfMarkerService,
                                kpi,
                                telemetryService,
                                urlHelperService,
                                sessionInfo) {
                                this.perfService = perfService;
                                this.perfMarkerService = perfMarkerService;
                                this.kpi = kpi;
                                this.telemetryService = telemetryService;
                                this.urlHelperService = urlHelperService;
                                this.sessionInfo = sessionInfo;
                                this.totalTimeTaken = -1
                            }

                            PerfStopWatch.prototype.start = function(alternateDisplayName) {
                                if (!stringUtil
                                    .IsNullOrEmpty(alternateDisplayName)) this.displayName = alternateDisplayName;
                                this.startMarker = this.perfMarkerService
                                    .addMarker(this.kpi.name, this.markerType, this.parameters)
                            };
                            PerfStopWatch.prototype.stop = function() {
                                this.stopMarker = this.perfMarkerService
                                    .addMarker(this.kpi.name, this.markerType, this.parameters);
                                this.perfService.log(this.toString(), this.kpi);
                                this.kpi.goal < this.duration() &&
                                    window.console.warn("Kpi " +
                                        this.kpi.name +
                                        " is not meeting the goal by " +
                                        (this.kpi.goal - this.duration()).toString());
                                this.perfService.clearStopwatchByName(this.kpi.name);
                                var perfTelemetryEvent = new TelemetryEvents
                                    .DesignerPerfMarkersEvent(this.sessionInfo.designerName,
                                        this.urlHelperService.GetUserAgent(),
                                        this.kpi.name,
                                        this.kpi.kpiType,
                                        this.totalTimeTaken,
                                        this.getParametersRepresentation());
                                this.telemetryService.AddTelemetryEvent(perfTelemetryEvent)
                            };
                            PerfStopWatch.prototype.duration = function() {
                                if (this.totalTimeTaken > 0) return Math.round(this.totalTimeTaken);
                                if (!scriptUtil.IsNullOrUndefined(this.startMarker) &&
                                    !scriptUtil
                                    .IsNullOrUndefined(this
                                        .stopMarker))
                                    return Math.round(this.stopMarker.timestamp - this.startMarker.timestamp);
                                else return -1
                            };
                            PerfStopWatch.prototype.toString = function() {
                                var separator = ", ",
                                    stopwatchDuration = this.duration() !== -1
                                        ? this.duration().toString()
                                        : "Invalid Duration",
                                    kpiLogName = this.kpi.name;
                                if (!stringUtil.IsNullOrEmpty(this.displayName)) kpiLogName = this.displayName;
                                var result = this.kpi.component +
                                    separator +
                                    this.kpi.kpiType +
                                    separator +
                                    kpiLogName +
                                    separator +
                                    stopwatchDuration +
                                    separator +
                                    this.getParametersRepresentation();
                                result = result.trim();
                                if (result.charAt(result
                                    .length -
                                    1) ==
                                ",") result = result.slice(0, result.length - 1);
                                return result
                            };
                            PerfStopWatch.prototype.getParametersRepresentation = function() {
                                if (!this.parameters || this.parameters.length == 0) return "";
                                for (var result = "", _i = 0, _a = this.parameters; _i < _a.length; _i++) {
                                    var param = _a[_i];
                                    result += param + ","
                                }
                                return result
                            };
                            return PerfStopWatch
                        }();
                    Models.PerfStopWatch = PerfStopWatch
                })(Models = OnDemand.Models || (OnDemand.Models = {}))
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                "use strict";
                var PerfMarkerService = function() {
                    function PerfMarkerService() { this.markerCount = 0 }

                    PerfMarkerService.prototype.addMarker = function(name, perfMarkerType, parameters) {
                        this.markerCount++;
                        return new OnDemand.Models.PerfMarker(this.markerCount, parameters, name)
                    };
                    return PerfMarkerService
                }();
                angular.module("mscrmPerformance").service("mscrmPerfMarkerService", PerfMarkerService)
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                "use strict";
                var common = Perf.Common,
                    PerfLoggerService = function() {
                        function PerfLoggerService() {}

                        PerfLoggerService.prototype.getLoggerById = function(id) {
                            switch (id) {
                            case common.LoggerTypes.consoleLogger:
                                return new OnDemand.Models.ConsoleLogger;
                            case common.LoggerTypes.persistentLogger:
                                return new OnDemand.Models.PersistentLogger
                            }
                        };
                        return PerfLoggerService
                    }();
                angular.module("mscrmPerformance").service("mscrmPerfLoggerService", PerfLoggerService)
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}));
var Mscrm;
(function(Mscrm) {
    var Designers;
    (function(Designers) {
        var Perf;
        (function(Perf) {
            var OnDemand;
            (function(OnDemand) {
                "use strict";
                var common = Perf.Common,
                    models = OnDemand.Models,
                    Dictionary = Mscrm.Designers.Common.Models.Dictionary,
                    ServiceNames = Mscrm.Designers.Common.Constants.ServiceNames,
                    PerfServiceOnDemand = function() {
                        function PerfServiceOnDemand(loggerService,
                            markerService,
                            telemetryService,
                            urlHelperService,
                            sessionInfo) {
                            this.loggerService = loggerService;
                            this.markerService = markerService;
                            this.telemetryService = telemetryService;
                            this.urlHelperService = urlHelperService;
                            this.sessionInfo = sessionInfo;
                            this._loggers = new Dictionary;
                            this._fullLoadComplete = false;
                            this.stopwatches = {};
                            this.navigatedViaBrowser = true;
                            if (this._loggers.getKeys().length == 0) {
                                this._loggers.add(common.LoggerTypes.consoleLogger,
                                    this.loggerService.getLoggerById(common.LoggerTypes.consoleLogger));
                                this._loggers.add(common.LoggerTypes.persistentLogger,
                                    this.loggerService.getLoggerById(common.LoggerTypes.persistentLogger))
                            }
                        }

                        PerfServiceOnDemand.prototype.getStopWatch = function(kpi) {
                            if (!this.stopwatches[kpi.name])
                                this.stopwatches[kpi.name] = new models
                                    .PerfStopWatch(this,
                                        this.markerService,
                                        kpi,
                                        this.telemetryService,
                                        this.urlHelperService,
                                        this.sessionInfo);
                            return this.stopwatches[kpi.name]
                        };
                        PerfServiceOnDemand.prototype
                            .getStopwatchByName = function(name) { return this.stopwatches[name] };
                        PerfServiceOnDemand.prototype
                            .getLogger = function(loggerType) { return this._loggers.getValue(loggerType) };
                        PerfServiceOnDemand.prototype.log = function(msg, kpi) {
                            for (var _i = 0, _a = this._loggers.getKeys(); _i < _a.length; _i++) {
                                var key = _a[_i], logger = this._loggers.getValue(key);
                                logger.log(msg, kpi)
                            }
                        };
                        PerfServiceOnDemand.prototype.checkForFullLoad = function(condition, fullLoadKpi) {
                            if (condition() === true) {
                                var stopwatch = this.getStopwatchByName(fullLoadKpi.name);
                                if (!stopwatch.parameters) stopwatch.parameters = [];
                                if (this.navigatedViaBrowser === true) {
                                    this.navigatedViaBrowser = false;
                                    stopwatch.parameters.push("Navigation via browser");
                                    stopwatch
                                        .totalTimeTaken = (new Date).getTime() - window.performance.timing.requestStart
                                } else stopwatch.parameters.push("In app navigation");
                                this.getStopwatchByName(fullLoadKpi.name).stop()
                            }
                        };
                        PerfServiceOnDemand.prototype
                            .clearStopwatchByName = function(name) { this.stopwatches[name] = undefined };
                        PerfServiceOnDemand.prototype
                            .createPerfKpi = function(component, name, type, goal) {
                                return new models.PerfKpi(name, type, goal, component)
                            };
                        PerfServiceOnDemand.$inject = [
                            "mscrmPerfLoggerService", "mscrmPerfMarkerService", ServiceNames.TelemetryService,
                            ServiceNames
                            .UrlHelperService, "sessionInfo"
                        ];
                        return PerfServiceOnDemand
                    }();
                angular.module("mscrmPerformance").service("mscrmPerfService", PerfServiceOnDemand)
            })(OnDemand = Perf.OnDemand || (Perf.OnDemand = {}))
        })(Perf = Designers.Perf || (Designers.Perf = {}))
    })(Designers = Mscrm.Designers || (Mscrm.Designers = {}))
})(Mscrm || (Mscrm = {}))