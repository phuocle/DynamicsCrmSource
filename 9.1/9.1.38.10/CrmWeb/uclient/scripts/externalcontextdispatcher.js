(window.bundleExecutionMarkers=window.bundleExecutionMarkers||{})["scripts/externalcontextdispatcher.js?v=1.4.9962-v91onpremise"]={begin:performance.now()},(window.__wpJsonpUci=window.__wpJsonpUci||[]).push([[62],{U9za:function(e,t,r){"use strict";r.r(t),r.d(t,"ExternalContextDispatcher",(function(){return C}));var n=r("EbwQ"),o=r("sJUk"),a=r("7Gx7"),s=r("ZhaJ"),l=r("NMtn"),c=r("8uvO");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class i extends s.a{constructor(e){super(),this._onErrorCallback=null,Object(l.d)(e,"onErrorCallback"),this._onErrorCallback=e}get_error(){return this.getValue(i._errorProperty)}call(){this._onErrorCallback(this.get_error())}}i._errorProperty=new c.a("error",Object,i,null);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class u extends s.a{constructor(e){super(),this._onSuccessCallback=null,Object(l.d)(e,"onSuccessCallback"),this._onSuccessCallback=e}get_value(){return this.getValue(u._valueProperty)}call(){this._onSuccessCallback(this.get_value())}}u._valueProperty=new c.a("value",Object,u,null);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class x extends o.a{constructor(e,t,r,n){super(),this.setValue(x._ExternalContextIdProperty,e),this.setValue(x._ArgsProperty,new a.a(t)),this.setValue(x._OnSuccessCallbackProperty,new u(r)),this.setValue(x._OnErrorCallbackProperty,new i(n))}}x._ExternalContextIdProperty=new c.a("externalContextId",String,x),x._ArgsProperty=new c.a("args",a.a,x),x._OnSuccessCallbackProperty=new c.a("onSuccessCallback",u,x),x._OnErrorCallbackProperty=new c.a("onErrorCallback",i,x);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class p extends x{constructor(e,t,r,n,o){super(e,r,n,o),this.setValue(p._ExternalContextPropertyIdProperty,t)}get_methodName(){return"getExternalContextProperty"}}p._ExternalContextPropertyIdProperty=new c.a("externalContextPropertyId",String,p);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class _ extends x{constructor(e,t,r,n,o){super(e,r,n,o),this.setValue(_._ExternalContextActionIdProperty,t)}get_methodName(){return"invokeExternalContextAction"}}_._ExternalContextActionIdProperty=new c.a("externalContextActionId",String,_);var w=r("Yb4o");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class d extends w.a{get_availableExternalContexts(){return this.getValue(d._availableExternalContextsProperty)}get_knownProperties(){return this.getValue(d._knownPropertiesProperty)}get_knownProperty(){return this.getValue(d._knownPropertyUpdateProperty)}}d._availableExternalContextsProperty=new c.a("AvailableExternalContexts",Array,d,null),d._knownPropertiesProperty=new c.a("KnownProperties",Object,d,null),d._knownPropertyUpdateProperty=new c.a("KnownPropertyUpdate",Object,d,null);class C extends n.a{constructor(e){super(e),this._externalContextState=new d}get_ExternalContextState(){return this.get_state()}get_state(){return this._externalContextState}get_namespaceName(){return"ExternalContext"}GetExternalContextProperty(e,t,r,n,o){const a=new p(e,t,r,n,o);this.callNativeMethod(this.get_version().get_currentVersion(),a)}InvokeExternalContextAction(e,t,r,n,o){const a=new _(e,t,r,n,o);this.callNativeMethod(this.get_version().get_currentVersion(),a)}getAvailableExternalContexts(){return this._externalContextState}}}}]),window.bundleExecutionMarkers["scripts/externalcontextdispatcher.js?v=1.4.9962-v91onpremise"].end=window.performance.now(),window.reportBundleExecutionTimes&&window.reportBundleExecutionTimes();