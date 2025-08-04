(window.bundleExecutionMarkers=window.bundleExecutionMarkers||{})["scripts/networkdispatcher.js?v=1.4.9962-v91onpremise"]={begin:performance.now()},(window.__wpJsonpUci=window.__wpJsonpUci||[]).push([[88],{"5b7D":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("ZhaJ"),o=r("504W"),s=r("NMtn"),a=r("8uvO");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class l extends n.a{constructor(e){super(),this._callback=null,Object(s.b)(e,"callback"),this._callback=e}get_exception(){return this.getValue(l._exceptionProperty)}call(){Object(o.a)(this.get_exception())||this._callback(this.get_exception())}}l._exceptionProperty=new a.a("errorInformation",Error,l,null)},N39u:function(e,t,r){"use strict";r.r(t),r.d(t,"NetworkDispatcher",(function(){return m}));var n=r("NMtn"),o=r("EbwQ"),s=r("sJUk"),a=r("ZhaJ"),l=r("8uvO");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class u extends a.a{constructor(e){super(),this._onMethodReturn=null,this._onMethodReturn=e}get_returnValue(){return this.getValue(u._returnValueProperty)}call(){this._onMethodReturn(this.get_returnValue())}}u._returnValueProperty=new l.a("returnValue",Boolean,u,null);var p=r("5b7D");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class i extends s.a{constructor(e,t,r){super(),this.setValue(i._UrlProperty,e),this.setValue(i._OnMethodReturnProperty,new u(t)),this.setValue(i._OnMethodExceptionProperty,new p.a(r))}get_methodName(){return i._Name}}i._Name="canOpenUrl",i._OnMethodExceptionProperty=new l.a("onMethodException",p.a,i,null),i._OnMethodReturnProperty=new l.a("onMethodReturn",u,i,null),i._UrlProperty=new l.a("url",String,i,null);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class c extends a.a{constructor(e){super(),this._onOpenAuthPopupResult=e}get_OpenAuthPopupResult(){return this.getValue(c._OpenAuthPopupResult)}call(){this._onOpenAuthPopupResult(this.get_OpenAuthPopupResult())}}c._OpenAuthPopupResult=new l.a("result",Object,c);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class h extends s.a{constructor(e,t){super(),this.setValue(h._url,e),this.setValue(h._onOpenAuthPopupResult,new c(t))}get_methodName(){return h._Name}}h._Name="openAuthPopup",h._url=new l.a("url",String,h),h._onOpenAuthPopupResult=new l.a("onOpenAuthPopupResult",c,h);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class _ extends a.a{constructor(e){super(),this._onMethodReturn=null,this._onMethodReturn=e}call(){this._onMethodReturn()}}
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class w extends s.a{constructor(e,t,r){super(),this.setValue(w._UrlProperty,e),this.setValue(w._OnMethodReturnProperty,new _(t)),this.setValue(w._OnMethodExceptionProperty,new p.a(r))}get_methodName(){return w._Name}}w._Name="openUrl",w._OnMethodExceptionProperty=new l.a("onMethodException",p.a,w,null),w._OnMethodReturnProperty=new l.a("onMethodReturn",_,w,null),w._UrlProperty=new l.a("url",String,w,null);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class d extends a.a{constructor(e){super(),this._onLookupComplete=e}_get_CacheItems(){return this.getValue(d._CacheItemsProperty)}call(){this._onLookupComplete(this._get_CacheItems())}}d._CacheItemsProperty=new l.a("cacheItems",Object,d);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class b extends s.a{constructor(e,t,r,n,o,s){super(),this.setValue(b._Urls,e),this.setValue(b._ExtraQueryParameters,t),this.setValue(b._DownloadOnMiss,r),this.setValue(b._OnLookupCompleteProperty,new d(n)),this.setValue(b._OnDownloadCompleteProperty,new d(o)),this.setValue(b._OnErrorProperty,new p.a(s))}get_methodName(){return b._Name}}b._Name="resolveCachedUrls",b._OnLookupCompleteProperty=new l.a("onLookupComplete",d,b,null),b._OnDownloadCompleteProperty=new l.a("onDownloadComplete",d,b,null),b._OnErrorProperty=new l.a("onError",p.a,b),b._Urls=new l.a("urls",Array,b,null),b._ExtraQueryParameters=new l.a("extraQueryParameters",String,b,null),b._DownloadOnMiss=new l.a("downloadOnMiss",Boolean,b,null);var g=r("Yb4o");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class P extends g.a{get_connectionAvailable(){return this.getValue(P._connectionAvailableProperty)}get_connectionIsWifi(){return this.getValue(P._connectionIsWifiProperty)}get_hasUrlProtocolSupport(){return this.getValue(P._hasUrlProtocolSupportProperty)}get_baseUrlForTemporaryData(){return this.getValue(P._baseUrlForTemporaryData)}get_baseUrlForEntityData(){return this.getValue(P._baseUrlForEntityData)}get_baseUrlForAppHost(){return this.getValue(P._baseUrlForAppHost)}}P._connectionAvailableProperty=new l.a("ConnectionAvailable",Boolean,P,!0),P._connectionIsWifiProperty=new l.a("ConnectionIsWifi",Boolean,P,!1),P._hasUrlProtocolSupportProperty=new l.a("HasUrlProtocolSupport",Boolean,P,!1),P._baseUrlForTemporaryData=new l.a("BaseUrlForTemporaryData",String,P,null),P._baseUrlForEntityData=new l.a("BaseUrlForEntityData",String,P,null),P._baseUrlForAppHost=new l.a("BaseUrlForAppHost",String,P,null);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class m extends o.a{constructor(e){super(e),this._networkState=new P}get_namespaceName(){return"Network"}get_networkState(){return this.get_state()}get_state(){return this._networkState}canOpenUrl(e,t,r){Object(n.b)(e,"url"),Object(n.b)(t,"onMethodReturn"),Object(n.b)(r,"onMethodException");const o=new i(e,t,r);this.callNativeMethod(this.get_version().get_currentVersion(),o)}openUrl(e,t,r){Object(n.b)(e,"url"),Object(n.b)(t,"onMethodReturn"),Object(n.b)(r,"onMethodException");const o=new w(e,t,r);this.callNativeMethod(this.get_version().get_currentVersion(),o)}openAuthPopup(e,t){Object(n.b)(e,"url"),Object(n.b)(t,"onOpenAuthPopupResult");const r=new h(e,t);this.callNativeMethod(this.get_version().get_currentVersion(),r)}resolveCachedUrls(e,t,r,o,s,a){Object(n.b)(e,"urls"),Object(n.b)(o,"onLookupComplete"),Object(n.b)(a,"onError");const l=new b(e,t,r,o,s,a);this.callNativeMethod(this.get_version().get_currentVersion(),l)}}}}]),window.bundleExecutionMarkers["scripts/networkdispatcher.js?v=1.4.9962-v91onpremise"].end=window.performance.now(),window.reportBundleExecutionTimes&&window.reportBundleExecutionTimes();