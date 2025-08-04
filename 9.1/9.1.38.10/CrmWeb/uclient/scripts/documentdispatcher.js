(window.bundleExecutionMarkers=window.bundleExecutionMarkers||{})["scripts/documentdispatcher.js?v=1.4.9962-v91onpremise"]={begin:performance.now()},(window.__wpJsonpUci=window.__wpJsonpUci||[]).push([[59],{"4ell":function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentDispatcher",(function(){return h}));var r=n("EbwQ"),o=n("sJUk"),a=n("ZhaJ"),s=n("8uvO"),i=n("6SEs");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class l extends a.a{constructor(e){super(),this._onOpenDocumentComplete=null,this._onOpenDocumentComplete=e}_get_ErrorCode(){return this.getValue(l._ErrorCodeProperty)}call(){this._onOpenDocumentComplete(this._get_ErrorCode())}}l._ErrorCodeProperty=new s.a("errorCode",i.a,l);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class c extends o.a{constructor(e,t,n,r){super(),this.setValue(c._DataIDProperty,e),this.setValue(c._FileNameProperty,t),this.setValue(c._MimeTypeProperty,n),this.setValue(c._OnOpenDocumentCompleteProperty,new l(r))}get_methodName(){return"openDocument"}}c._DataIDProperty=new s.a("dataID",String,c),c._FileNameProperty=new s.a("fileName",String,c),c._MimeTypeProperty=new s.a("mimeType",String,c),c._OnOpenDocumentCompleteProperty=new s.a("onOpenDocumentComplete",l,c);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class p extends o.a{constructor(e,t,n){super(),this.setValue(p._UrlProperty,e),this.setValue(p._FilenameProperty,t),this.setValue(p._OnOpenDocumentCompleteProperty,new l(n))}get_methodName(){return"openDocumentWithUrl"}}p._UrlProperty=new s.a("url",String,p),p._FilenameProperty=new s.a("filename",String,p),p._OnOpenDocumentCompleteProperty=new s.a("onOpenDocumentComplete",l,p);
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class u extends o.a{constructor(e){super(),this.setValue(u._ValueProperty,e)}get_methodName(){return"launchURL"}}u._ValueProperty=new s.a("url",String,u);var m=n("Yb4o");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class d extends m.a{get_hasMapsUrlProtocolSupport(){return this.getValue(d._hasMapsUrlProtocolSupportProperty)}}d._hasMapsUrlProtocolSupportProperty=new s.a("HasMapsUrlProtocolSupport",Boolean,d,!1);var _=n("NMtn");class h extends r.a{constructor(e){super(e),this._documentState=new d}get_namespaceName(){return"Document"}get_documentState(){return this.get_state()}get_state(){return this._documentState}openDocumentWithDataID(e,t,n,r){Object(_.c)(e,"dataID"),Object(_.b)(r,"callback");const o=new c(e,t,n,r);this.callNativeMethod(this.get_version().get_currentVersion(),o)}openExternalUrl(e){Object(_.c)(e,"url");const t=new u(e);this.callNativeMethod(this.get_version().get_currentVersion(),t)}openDocumentWithUrl(e,t,n){Object(_.c)(e,"url"),Object(_.b)(n,"callback");const r=new p(e,t,n);this.callNativeMethod(this.get_version().get_currentVersion(),r)}}},"6SEs":function(e,t,n){"use strict";
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
var r;n.d(t,"a",(function(){return r})),function(e){e[e.None=0]="None",e[e.UnableToFindAnActivity=1]="UnableToFindAnActivity",e[e.UnableToFindTheDataID=2]="UnableToFindTheDataID",e[e.UnableToFindUIActivity=3]="UnableToFindUIActivity",e[e.EmptyUrl=4]="EmptyUrl",e[e.UnknownMimeType=5]="UnknownMimeType",e[e.InvalidLocalUrl=6]="InvalidLocalUrl",e[e.UnsupportedPlatform=7]="UnsupportedPlatform",e[e.UnableToOpenDocumentInteractionController=8]="UnableToOpenDocumentInteractionController"}(r||(r={}))}}]),window.bundleExecutionMarkers["scripts/documentdispatcher.js?v=1.4.9962-v91onpremise"].end=window.performance.now(),window.reportBundleExecutionTimes&&window.reportBundleExecutionTimes();