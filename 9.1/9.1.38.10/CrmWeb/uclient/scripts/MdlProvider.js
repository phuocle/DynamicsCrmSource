(window.bundleExecutionMarkers=window.bundleExecutionMarkers||{})["scripts/MdlProvider.js?v=1.4.9962-v91onpremise"]={begin:performance.now()},(window.__wpJsonpUci=window.__wpJsonpUci||[]).push([[36],{vUNb:function(t,e,r){"use strict";r.r(e),r.d(e,"MdlProvider",(function(){return h}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class n{constructor(t){this._store=t}getStore(){return this._store}}var i=r("4N6w");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class o{constructor(t,e){this._context=e,this._store=t}getAuthToken(){const t=this._context.TraceManager.getTracer("AuthenticationProvider");try{return Promise.resolve(Object(i.a)(this._store.getState()))}catch(e){throw t.error(e.message),e}}}var s=r("FZDd"),a=r("3c7c"),c=r("K7RF"),u=r("iJGp"),l=r("g0tL"),d=r("/oKV");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
class w{constructor(t){this._store=t}retrieveEntities(t){const e=t&&Object.keys(t).sort(),r=Object(a.a)(JSON.stringify(t,e));return this._store.dispatch(Object(c.b)(s.a,r,null,null,!1,u.a.OnDemandWithoutContext,null,[],[],l.b.Entity,d.a.LocalAndRemote,null,null))}}var g=r("c5ne");
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */class h{constructor(t,e){this._baseUri=t.getOrgUrl(),this._applicationContext=e;const r=new n(t.getStore()),i=new o(t.getStore(),this._applicationContext),s=new w(t.getStore());e.DataLayerConfiguration={baseUri:this._baseUri,MetadataProvider:s,AuthenticationProvider:i,StateProvider:r,useConsistencyStrong:!0,useAbsolutePaths:!0,GarbageCollectionProvider:null}}static getInstance(t,e){const r=t.getOrgUrl();let n=h._instances[r];return n||(n=new h(t,e),h._instances[r]=n),n}static getDefaultInstance(){return h._defaultInstance}static setDefaultInstance(t){h._defaultInstance=t}async retrieveGridData(t,e=!1){try{return await this._applicationContext.DataLayerConfiguration.StateProvider.getStore().dispatch(Object(g.retrieveGridData)(t,!1))}catch(t){throw this._applicationContext.TraceManager.getTracer("MdlProvider").error(t.message),t}}}h._instances={}}}]),window.bundleExecutionMarkers["scripts/MdlProvider.js?v=1.4.9962-v91onpremise"].end=window.performance.now(),window.reportBundleExecutionTimes&&window.reportBundleExecutionTimes();