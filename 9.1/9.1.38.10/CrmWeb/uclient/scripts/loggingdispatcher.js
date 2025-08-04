(window.bundleExecutionMarkers=window.bundleExecutionMarkers||{})["scripts/loggingdispatcher.js?v=1.4.9962-v91onpremise"]={begin:performance.now()},(window.__wpJsonpUci=window.__wpJsonpUci||[]).push([[75],{USS4:function(e,t,r){"use strict";r.r(t),r.d(t,"LoggingDispatcher",(function(){return g}));var s=r("EbwQ"),a=r("sJUk"),n=r("8uvO");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class o extends a.a{constructor(e,t){super(),this.setValue(o._LevelProperty,e),this.setValue(o._MessageProperty,t)}get_methodName(){return"logMessage"}}o._MessageProperty=new n.a("message",String,o),o._LevelProperty=new n.a("level",Number,o);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class i extends a.a{constructor(e,t){super(),this.setValue(i._NamespaceProperty,e),this.setValue(i._DataProperty,t)}get_methodName(){return"logPerformanceData"}}i._NamespaceProperty=new n.a("namespace",String,i),i._DataProperty=new n.a("data",String,i);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class c extends a.a{constructor(e){super(),this.setValue(c._TelemetryDataProperty,e)}get_methodName(){return"logTelemetryData"}}c._TelemetryDataProperty=new n.a("telemetryData",String,c);var l=r("NMtn");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class g extends s.a{get_namespaceName(){return"Logging"}logMessage(e,t){Object(l.b)(e,"level"),Object(l.c)(t,"message");const r=new o(e,t);this.callNativeMethod(this.get_version().get_currentVersion(),r)}logPerformanceData(e,t){Object(l.c)(e,"namespace"),Object(l.c)(t,"data");const r=new i(e,t);this.callNativeMethod(this.get_version().get_currentVersion(),r)}logTelemetryData(e){Object(l.c)(e,"telemetryData");const t=new c(e);this.callNativeMethod(this.get_version().get_currentVersion(),t)}}}}]),window.bundleExecutionMarkers["scripts/loggingdispatcher.js?v=1.4.9962-v91onpremise"].end=window.performance.now(),window.reportBundleExecutionTimes&&window.reportBundleExecutionTimes();