!function(e){function n(){}function t(e,n){return function(){e.apply(n,arguments)}}function o(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function i(e,n){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(n):(e._handled=!0,void o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null===t)return void(1===e._state?r:u)(n.promise,e._value);var o;try{o=t(e._value)}catch(i){return void u(n.promise,i)}r(n.promise,o)}))}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var i=n.then;if(n instanceof o)return e._state=3,e._value=n,void f(e);if("function"==typeof i)return void s(t(i,n),e)}e._state=1,e._value=n,f(e)}catch(r){u(e,r)}}function u(e,n){e._state=2,e._value=n,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)i(e,e._deferreds[n]);e._deferreds=null}function c(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function s(e,n){var t=!1;try{e(function(e){t||(t=!0,r(n,e))},function(e){t||(t=!0,u(n,e))})}catch(o){if(t)return;t=!0,u(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var o=new this.constructor(n);return i(this,new c(e,t,o)),o},o.all=function(e){var n=Array.prototype.slice.call(e);return new o(function(e,t){function o(r,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(e){o(r,e)},t)}n[r]=u,0===--i&&e(n)}catch(c){t(c)}}if(0===n.length)return e([]);for(var i=n.length,r=0;r<n.length;r++)o(r,n[r])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(n,t){for(var o=0,i=e.length;o<i;o++)e[o].then(n,t)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=o:e.Promise||(e.Promise=o)}(this);
(function webpackUniversalModuleDefinition(root, factory) {
if(typeof exports === 'object' && typeof module === 'object')
module.exports = factory();
else if(typeof define === 'function' && define.amd)
define([], factory);
else if(typeof exports === 'object')
exports["UniversalRemote"] = factory();
else
root["UniversalRemote"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_events_1 = __webpack_require__(8);
var Event = /** @class */ (function (_super) {
__extends(Event, _super);
function Event() {
return _super !== null && _super.apply(this, arguments) || this;
}
Event.prototype.has = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i] = arguments[_i];
}
var events = this._events;
if (!events || events.length === 0) {
return false;
}
var boundTo;
var handler;
var event;
if (args.length >= 1) {
if (typeof (args[0]) === "function") {
handler = args[0];
}
else if (args.length === 1 && typeof args[0].post === "function") {
event = args[0];
}
else {
boundTo = args[0];
}
}
if (args.length >= 2) {
handler = args[1];
}
for (var _a = 0, events_1 = events; _a < events_1.length; _a++) {
var e = events_1[_a];
var listeners = (e._listeners);
if (!listeners || listeners.length === 0) {
continue;
}
for (var _b = 0, listeners_1 = listeners; _b < listeners_1.length; _b++) {
var l = listeners_1[_b];
if ((typeof handler === "undefined" || l.handler === handler)
&& (typeof event === "undefined" || l.event === event)
&& (typeof boundTo === "undefined" || l.boundTo === boundTo)
&& !l.deleted) {
return true;
}
}
}
return false;
};
return Event;
}(ts_events_1.AnyEvent));
exports.Event = Event;
/**
* Represents the base class for classes that contain event data.
*/
var EventArgs = /** @class */ (function () {
/**
* Initializes a new instance of the EventArgs<TSender> class with the provided sender.
* @param {TSender} sender - Object that fired the event.
*/
function EventArgs(sender) {
this.sender = sender;
}
return EventArgs;
}());
exports.EventArgs = EventArgs;
/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
/**
* Base class for events.
* Handles attaching and detaching listeners
*/
var BaseEvent = (function () {
function BaseEvent() {
}
/**
* Attach an event handler
* @param boundTo (Optional) The this argument of the handler
* @param handler The function to call.
*/
BaseEvent.prototype.attach = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
var boundTo;
var handler;
var event;
if (typeof args[0] === 'function') {
handler = args[0];
}
else if (args.length === 1 && typeof args[0].post === 'function') {
event = args[0];
}
else {
if (typeof args[0] !== 'object') {
throw new Error('Expect a function or object as first argument');
}
;
if (typeof args[1] !== 'function') {
throw new Error('Expect a function as second argument');
}
boundTo = args[0];
handler = args[1];
}
if (!this._listeners) {
this._listeners = [];
}
else {
// make a copy of the array so events that are underway have a stable local copy
// of the listeners array at the time of post()
this._listeners = this._listeners.map(function (listener) {
return listener;
});
}
this._listeners.push({
deleted: false,
boundTo: boundTo,
handler: handler,
event: event
});
};
/**
* Detach implementation. See the overloads for description.
*/
BaseEvent.prototype.detach = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
if (!this._listeners || this._listeners.length === 0) {
return;
}
var boundTo;
var handler;
var event;
if (args.length >= 1) {
if (typeof (args[0]) === 'function') {
handler = args[0];
}
else if (args.length === 1 && typeof args[0].post === 'function') {
event = args[0];
}
else {
boundTo = args[0];
}
}
if (args.length >= 2) {
handler = args[1];
}
// remove listeners AND mark them as deleted so subclasses don't send any more events to them
this._listeners = this._listeners.filter(function (listener) {
if ((typeof handler === 'undefined' || listener.handler === handler)
&& (typeof event === 'undefined' || listener.event === event)
&& (typeof boundTo === 'undefined' || listener.boundTo === boundTo)) {
listener.deleted = true;
return false;
}
return true;
});
if (this._listeners.length === 0) {
delete this._listeners;
}
};
/**
* Abstract post() method to be able to connect any type of event to any other directly
* @abstract
*/
BaseEvent.prototype.post = function (data) {
throw new Error('abstract');
};
/**
* The number of attached listeners
*/
BaseEvent.prototype.listenerCount = function () {
return (this._listeners ? this._listeners.length : 0);
};
/**
* Call the given listener, if it is not marked as 'deleted'
* @param listener The listener to call
* @param args The arguments to the handler
*/
BaseEvent.prototype._call = function (listener, args) {
if (!listener.deleted) {
if (listener.event) {
listener.event.post.apply(listener.event, args);
}
else {
listener.handler.apply((typeof listener.boundTo === 'object' ? listener.boundTo : this), args);
}
}
};
return BaseEvent;
}());
exports.BaseEvent = BaseEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvYmFzZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsZUFBZTtBQUVmLFlBQVksQ0FBQztBQTRCYjs7O0dBR0c7QUFDSDtJQUFBO0lBMEpBLENBQUM7SUFqSUc7Ozs7T0FJRztJQUNJLDBCQUFNLEdBQWI7UUFBYyxjQUFjO2FBQWQsV0FBYyxDQUFkLHNCQUFjLENBQWQsSUFBYztZQUFkLDZCQUFjOztRQUN4QixJQUFJLE9BQWUsQ0FBQztRQUNwQixJQUFJLE9BQTBCLENBQUM7UUFDL0IsSUFBSSxLQUFrQixDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3JFLENBQUM7WUFBQSxDQUFDO1lBQ0YsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFD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
/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
var __extends = (this && this.__extends) || function (d, b) {
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = __webpack_require__(1);
/**
* This is a true EventEmitter replacement: the handlers are called synchronously when
* you post the event.
* - Allows better error handling by aggregating any errors thrown by handlers.
* - Prevents livelock by throwing an error when recursion depth is above a maximum.
* - Handlers are called only for events posted after they were attached.
* - Handlers are not called anymore when they are detached, even if a post() is in progress
*/
var SyncEvent = (function (_super) {
__extends(SyncEvent, _super);
function SyncEvent() {
_super.apply(this, arguments);
/**
* Recursive post() invocations
*/
this._recursion = 0;
}
SyncEvent.prototype.post = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
if (!this._listeners || this._listeners.length === 0) {
return;
}
this._recursion++;
if (SyncEvent.MAX_RECURSION_DEPTH > 0 &&
this._recursion > SyncEvent.MAX_RECURSION_DEPTH) {
throw new Error('event fired recursively');
}
// copy a reference to the array because this._listeners might be replaced during
// the handler calls
var listeners = this._listeners;
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
this._call(listener, args);
}
this._recursion--;
};
/**
* Maximum number of times that an event handler may cause the same event
* recursively.
*/
SyncEvent.MAX_RECURSION_DEPTH = 10;
return SyncEvent;
}(base_event_1.BaseEvent));
exports.SyncEvent = SyncEvent;
/**
* Convenience class for events without data
*/
var VoidSyncEvent = (function (_super) {
__extends(VoidSyncEvent, _super);
function VoidSyncEvent() {
_super.apply(this, arguments);
}
/**
* Send the event.
*/
VoidSyncEvent.prototype.post = function () {
_super.prototype.post.call(this, undefined);
};
return VoidSyncEvent;
}(SyncEvent));
exports.VoidSyncEvent = VoidSyncEvent;
/**
* Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
*/
var ErrorSyncEvent = (function (_super) {
__extends(ErrorSyncEvent, _super);
function ErrorSyncEvent() {
_super.apply(this, arguments);
}
ErrorSyncEvent.prototype.post = function (data) {
if (this.listenerCount() === 0) {
throw new Error("error event posted while no listeners attached. Error: " + data.message);
}
_super.prototype.post.call(this, data);
};
return ErrorSyncEvent;
}(SyncEvent));
exports.ErrorSyncEvent = ErrorSyncEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYy1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvc3luYy1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsZUFBZTtBQUVmLFlBQVksQ0FBQzs7Ozs7O0FBRWIsMkJBQWtDLGNBQWMsQ0FBQyxDQUFBO0FBRWpEOzs7Ozs7O0dBT0c7QUFDSDtJQUFrQyw2QkFBWTtJQUE5QztRQUFrQyw4QkFBWTtRQVExQzs7V0FFRztRQUNLLGVBQVUsR0FBVyxDQUFDLENBQUM7SUEwQm5DLENBQUM7SUFsQlUsd0JBQUksR0FBWDtRQUFZLGNBQWM7YUFBZCxXQUFjLENBQWQsc0JBQWMsQ0FBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsaUZBQWlGO1FBQ2pGLG9CQUFvQjtRQUNwQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFsQ0Q7OztPQUdHO0lBQ1csNkJBQW1CLEdBQVcsRUFBRSxDQUFDO0lBK0JuRCxnQkFBQztBQUFELENBQUMsQUFyQ0QsQ0FBa0Msc0JBQVMsR0FxQzFDO0FBckNZLGlCQUFTLFlBcUNyQixDQUFBO0FBRUQ7O0dBRUc7QUFDSDtJQUFtQyxpQ0FBZTtJQUFsRDtRQUFtQyw4QkFBZTtJQVFsRCxDQUFDO0lBTkc7O09BRUc7SUFDSSw0QkFBSSxHQUFYO1FBQ0ksZ0JBQUssQ0FBQyxJQUFJLFlBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQVJELENBQW1DLFNBQVMsR0FRM0M7QUFSWSxxQkFBYSxnQkFRekIsQ0FBQTtBQUVEOztHQUVHO0FBQ0g7SUFBb0Msa0NBQWdCO0lBQXBEO1FBQW9DLDhCQUFnQjtJQVFwRCxDQUFDO0lBTlUsNkJBQUksR0FBWCxVQUFZLElBQVc7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyw0REFBMEQsSUFBSSxDQUFDLE9BQVMsQ0FBQyxDQUFDO1FBQzlGLENBQUM7UUFDRCxnQkFBSyxDQUFDLElBQUksWUFBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBb0MsU0FBUyxHQVE1QztBQVJZLHNCQUFjLGlCQVExQixDQUFBIn0=
/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
var sync_event_1 = __webpack_require__(2);
/**
* Simple synchronous event queue that needs to be drained manually.
*/
var EventQueue = (function () {
function EventQueue() {
/**
* SyncEvent triggered after an event is added outside of a flush operation.
* @param queue The event queue itself
*/
this.evtFilled = new sync_event_1.SyncEvent();
/**
* SyncEvent triggered after the queue is flushed empty
* @param queue The event queue itself
*/
this.evtDrained = new sync_event_1.SyncEvent();
/**
* Queued elements
*/
this._queue = [];
/**
* True while flush() or flushOnce() is running
*/
this._flushing = false;
}
/**
* The module-global event queue
*/
EventQueue.global = function () {
if (!EventQueue._instance) {
EventQueue.resetGlobal();
}
return EventQueue._instance;
};
/**
* Testing purposes
*/
EventQueue.resetGlobal = function () {
EventQueue._instance = new EventQueue();
};
/**
* Returns true iff the queue is empty
*/
EventQueue.prototype.empty = function () {
return this._queue.length === 0;
};
/**
* Add an element to the queue. The handler is called when one of the flush
* methods is called.
*/
EventQueue.prototype.add = function (handler) {
this._queue.push(handler);
if (this._queue.length === 1 && !this._flushing) {
this.evtFilled.post(this);
}
};
/**
* Calls all handlers currently in the queue. Does not call any handlers added
* as a result of the flush
*/
EventQueue.prototype.flushOnce = function () {
var empty = (this._queue.length === 0);
var flushing = this._flushing;
this._flushing = true;
try {
var queue = this._queue;
this._queue = [];
for (var i = 0; i < queue.length; ++i) {
queue[i]();
}
}
finally {
this._flushing = flushing;
if (!empty && !flushing && this._queue.length === 0) {
this.evtDrained.post(this);
}
}
};
/**
* Flushes the QueuedEvents, calling all events currently in the queue and those
* put into the queue as a result of the flush.
* @param maxRounds Optional, default 10. Number of iterations after which to throw an error because
*                  the queue keeps filling up. Set to null to disable this.
*/
EventQueue.prototype.flush = function (maxRounds) {
if (maxRounds === void 0) { maxRounds = 10; }
var empty = (this._queue.length === 0);
var flushing = this._flushing;
this._flushing = true;
try {
var i = 0;
while (this._queue.length > 0) {
if (typeof maxRounds === 'number' && i >= maxRounds) {
this._queue = [];
throw new Error('unable to flush the queue due to recursively added event. Clearing queue now');
}
this.flushOnce();
++i;
}
}
finally {
this._flushing = flushing;
if (!empty && !flushing && this._queue.length === 0) {
this.evtDrained.post(this);
}
}
};
return EventQueue;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EventQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRRdWV1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvRXZlbnRRdWV1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsZUFBZTtBQUVmLFlBQVksQ0FBQztBQUViLDJCQUF3QixjQUFjLENBQUMsQ0FBQTtBQUV2Qzs7R0FFRztBQUNIO0lBQUE7UUFFSTs7O1dBR0c7UUFDSSxjQUFTLEdBQTBCLElBQUksc0JBQVMsRUFBYyxDQUFDO1FBQ3RFOzs7V0FHRztRQUNJLGVBQVUsR0FBMEIsSUFBSSxzQkFBUyxFQUFjLENBQUM7UUF3QnZFOztXQUVHO1FBQ0ssV0FBTSxHQUFtQixFQUFFLENBQUM7UUFFcEM7O1dBRUc7UUFDSyxjQUFTLEdBQVksS0FBSyxDQUFDO0lBcUV2QyxDQUFDO0lBOUZHOztPQUVHO0lBQ1csaUJBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ1csc0JBQVcsR0FBekI7UUFDSSxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQVlEOztPQUVHO0lBQ0ksMEJBQUssR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHdCQUFHLEdBQVYsVUFBVyxPQUFtQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDhCQUFTLEdBQWhCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQztZQUNELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDakIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUNMLENBQUM7Z0JBQVMsQ0FBQztZQUNQLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMEJBQUssR0FBWixVQUFhLFNBQXNCO1FBQXRCLHlCQUFzQixHQUF0QixjQUFzQjtRQUMvQixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsT0FBTyxTQUFTLEtBQUssUUFBUSxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO2dCQUNwRyxDQUFDO2dCQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxDQUFDLENBQUM7WUFDUixDQUFDO1FBQ0wsQ0FBQztnQkFBUyxDQUFDO1lBQ1AsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQUFDLEFBaEhELElBZ0hDO0FBRUQ7a0JBQWUsVUFBVSxDQUFDIn0=
/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(0);
/**
* Provides data for the IMessagingChannel.MessageReceived event.
*/
var MessageReceivedEventsArgs = /** @class */ (function (_super) {
__extends(MessageReceivedEventsArgs, _super);
/**
* Initializes a new instance of the MessageReceivedEventsArgs class with the provided sender and message.
* @param {IMessagingChannel} sender - Object that fired the event.
* @param {IMessage} message - Message that was received.
*/
function MessageReceivedEventsArgs(sender, message) {
var _this = _super.call(this, sender) || this;
_this.message = message;
return _this;
}
return MessageReceivedEventsArgs;
}(Event_1.EventArgs));
exports.MessageReceivedEventsArgs = MessageReceivedEventsArgs;
/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
var __extends = (this && this.__extends) || function (d, b) {
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = __webpack_require__(1);
var EventQueue_1 = __webpack_require__(3);
/**
* Event that stays in a queue until you process the queue. Allows fine-grained
* control over when events happen.
* - Optionally condenses multiple post() calls into one.
* - Handlers are called only for events posted after they were attached.
* - Handlers are not called anymore when they are detached, even if a post() is in progress
*/
var QueuedEvent = (function (_super) {
__extends(QueuedEvent, _super);
/**
* Constructor
* @param opts Optional, an object with the following members:
*             - condensed: a Boolean indicating whether to condense multiple calls to post() into one (default false)
*             - queue: a specific event queue to use. The global EventQueue instance is used if not given.
*/
function QueuedEvent(opts) {
_super.call(this);
this._queued = false;
this.options = opts;
var options = opts || {};
if (typeof options.condensed === 'boolean') {
this._condensed = options.condensed;
}
else {
this._condensed = false;
}
if (typeof options.queue === 'object' && options.queue !== null) {
this._queue = options.queue;
}
}
QueuedEvent.prototype.post = function () {
var _this = this;
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
if (!this._listeners || this._listeners.length === 0) {
return;
}
var queue = (this._queue ? this._queue : EventQueue_1.default.global());
if (this._condensed) {
this._queuedData = args;
this._queuedListeners = this._listeners;
if (this._queued) {
return;
}
else {
this._queued = true;
queue.add(function () {
// immediately mark non-queued to allow new AsyncEvent to happen as result
// of calling handlers
_this._queued = false;
// cache listeners and data because they might change while calling event handlers
var data = _this._queuedData;
var listeners = _this._queuedListeners;
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
_this._call(listener, data);
}
});
}
}
else {
var listeners = this._listeners;
queue.add(function () {
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
_this._call(listener, args);
}
});
}
};
return QueuedEvent;
}(base_event_1.BaseEvent));
exports.QueuedEvent = QueuedEvent;
/**
* Convenience class for events without data
*/
var VoidQueuedEvent = (function (_super) {
__extends(VoidQueuedEvent, _super);
function VoidQueuedEvent() {
_super.apply(this, arguments);
}
/**
* Send the event.
*/
VoidQueuedEvent.prototype.post = function () {
_super.prototype.post.call(this, undefined);
};
return VoidQueuedEvent;
}(QueuedEvent));
exports.VoidQueuedEvent = VoidQueuedEvent;
/**
* Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
*/
var ErrorQueuedEvent = (function (_super) {
__extends(ErrorQueuedEvent, _super);
function ErrorQueuedEvent() {
_super.apply(this, arguments);
}
ErrorQueuedEvent.prototype.post = function (data) {
if (!this._listeners || this._listeners.length === 0) {
throw new Error("error event posted while no listeners attached. Error: " + data.message);
}
_super.prototype.post.call(this, data);
};
return ErrorQueuedEvent;
}(QueuedEvent));
exports.ErrorQueuedEvent = ErrorQueuedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVldWVkLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9xdWV1ZWQtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9ELGVBQWU7QUFFZixZQUFZLENBQUM7Ozs7OztBQUViLDJCQUE0QyxjQUFjLENBQUMsQ0FBQTtBQUMzRCwyQkFBb0MsY0FBYyxDQUFDLENBQUE7QUFnQm5EOzs7Ozs7R0FNRztBQUNIO0lBQW9DLCtCQUFZO0lBYTVDOzs7OztPQUtHO0lBQ0gscUJBQVksSUFBc0I7UUFDOUIsaUJBQU8sQ0FBQztRQVhKLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFZN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxPQUFPLEdBQW9CLElBQUksSUFBSSxFQUFFLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxLQUFLLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDaEMsQ0FBQztJQUNMLENBQUM7SUFTTSwwQkFBSSxHQUFYO1FBQUEsaUJBa0NDO1FBbENXLGNBQWM7YUFBZCxXQUFjLENBQWQsc0JBQWMsQ0FBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxD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
/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
var __extends = (this && this.__extends) || function (d, b) {
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = __webpack_require__(1);
/**
* A-synchronous event. Handlers are called in the next Node.JS cycle.
* - Optionally condenses multiple post() calls into one (the last post() gets through)
* - Handlers are called only for events posted after they were attached.
* - Handlers are not called anymore when they are detached, even if a post() is in progress
*/
var AsyncEvent = (function (_super) {
__extends(AsyncEvent, _super);
/**
* Constructor
* @param opts Optional. Various settings:
*             - condensed: a Boolean indicating whether to condense multiple post() calls within the same cycle.
*/
function AsyncEvent(opts) {
_super.call(this);
this._queued = false;
this.options = opts;
var options = opts || {};
if (typeof options.condensed === 'boolean') {
this._condensed = options.condensed;
}
else {
this._condensed = false;
}
}
/**
* The default scheduler uses setImmediate() or setTimeout(..., 0) if setImmediate is not available.
*/
AsyncEvent.defaultScheduler = function (callback) {
/* istanbul ignore else  */
if (typeof window !== 'undefined') {
// browsers don't always support setImmediate()
setTimeout(callback, 0);
}
else {
// node.js
setImmediate(callback);
}
};
/**
* By default, AsyncEvent uses setImmediate() to schedule event handler invocation.
* You can change this for e.g. setTimeout(..., 0) by calling this static method once.
* @param scheduler A function that takes a callback and executes it in the next Node.JS cycle.
*/
AsyncEvent.setScheduler = function (scheduler) {
AsyncEvent._scheduler = scheduler;
};
AsyncEvent.prototype.post = function () {
var _this = this;
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
if (!this._listeners || this._listeners.length === 0) {
return;
}
if (this._condensed) {
this._queuedData = args;
this._queuedListeners = this._listeners;
if (this._queued) {
return;
}
else {
this._queued = true;
AsyncEvent._scheduler(function () {
// immediately mark non-queued to allow new AsyncEvent to happen as result
// of calling handlers
_this._queued = false;
// cache listeners and data because they might change while calling event handlers
var data = _this._queuedData;
var listeners = _this._queuedListeners;
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
_this._call(listener, data);
}
});
}
}
else {
var listeners = this._listeners;
AsyncEvent._scheduler(function () {
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
_this._call(listener, args);
}
});
}
};
// inherited
AsyncEvent.prototype._call = function (listener, args) {
// performance optimization: don't use consecutive nodejs cycles
// for asyncevents attached to asyncevents
if (listener.event && listener.event instanceof AsyncEvent) {
listener.event._postDirect(args);
}
else {
_super.prototype._call.call(this, listener, args);
}
};
/**
* Performance optimization: if this async signal is attached to another
* async signal, we're already a the next cycle and we can call listeners
* directly
*/
AsyncEvent.prototype._postDirect = function (args) {
if (!this._listeners || this._listeners.length === 0) {
return;
}
// copy a reference to the array because this._listeners might be replaced during
// the handler calls
var listeners = this._listeners;
for (var i = 0; i < listeners.length; ++i) {
var listener = listeners[i];
this._call(listener, args);
}
};
/**
* The current scheduler
*/
AsyncEvent._scheduler = AsyncEvent.defaultScheduler;
return AsyncEvent;
}(base_event_1.BaseEvent));
exports.AsyncEvent = AsyncEvent;
/**
* Convenience class for AsyncEvents without data
*/
var VoidAsyncEvent = (function (_super) {
__extends(VoidAsyncEvent, _super);
function VoidAsyncEvent() {
_super.apply(this, arguments);
}
/**
* Send the AsyncEvent.
*/
VoidAsyncEvent.prototype.post = function () {
_super.prototype.post.call(this, undefined);
};
return VoidAsyncEvent;
}(AsyncEvent));
exports.VoidAsyncEvent = VoidAsyncEvent;
/**
* Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
*/
var ErrorAsyncEvent = (function (_super) {
__extends(ErrorAsyncEvent, _super);
function ErrorAsyncEvent() {
_super.apply(this, arguments);
}
ErrorAsyncEvent.prototype.post = function (data) {
if (this.listenerCount() === 0) {
throw new Error("error event posted while no listeners attached. Error: " + data.message);
}
_super.prototype.post.call(this, data);
};
return ErrorAsyncEvent;
}(AsyncEvent));
exports.ErrorAsyncEvent = ErrorAsyncEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXN5bmMtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2FzeW5jLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUMvRCxlQUFlO0FBRWYsWUFBWSxDQUFDOzs7Ozs7QUFFYiwyQkFBNEMsY0FBYyxDQUFDLENBQUE7QUFhM0Q7Ozs7O0dBS0c7QUFDSDtJQUFtQyw4QkFBWTtJQXdDM0M7Ozs7T0FJRztJQUNILG9CQUFZLElBQXFCO1FBQzdCLGlCQUFPLENBQUM7UUF0Q0osWUFBTyxHQUFZLEtBQUssQ0FBQztRQXVDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxPQUFPLEdBQW1CLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekMsRUFBRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBMUNEOztPQUVHO0lBQ1csMkJBQWdCLEdBQTlCLFVBQStCLFFBQW9CO1FBQy9DLDJCQUEyQjtRQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLCtDQUErQztZQUMvQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLFVBQVU7WUFDVixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNMLENBQUM7SUFPRDs7OztPQUlHO0lBQ1csdUJBQVksR0FBMUIsVUFBMkIsU0FBeUM7UUFDaEUsVUFBVSxDQUFDLFVBQVUsR0FBRyxT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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).setImmediate))
/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
function __export(m) {
for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(4));
__export(__webpack_require__(15));
__export(__webpack_require__(16));
__export(__webpack_require__(0));
__export(__webpack_require__(17));
__export(__webpack_require__(18));
/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
function __export(m) {
for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(5));
__export(__webpack_require__(6));
__export(__webpack_require__(13));
var EventQueue_1 = __webpack_require__(3);
var EventQueue_2 = __webpack_require__(3);
exports.EventQueue = EventQueue_2.default;
/**
* The global event queue for QueuedEvents
*/
function queue() {
return EventQueue_1.default.global();
}
exports.queue = queue;
/**
* Convenience function, same as EventQueue.global().flushOnce().
* Flushes the QueuedEvents, calling all events currently in the queue but not
* any events put into the queue as a result of the flush.
*/
function flushOnce() {
EventQueue_1.default.global().flushOnce();
}
exports.flushOnce = flushOnce;
/**
* Convenience function, same as EventQueue.global().flush().
* Flushes the QueuedEvents, calling all handlers currently in the queue and those
* put into the queue as a result of the flush.
* @param maxRounds Optional, default 10. Number of iterations after which to throw an error because
*                  the queue keeps filling up. Set to undefined or null to disable this.
*/
function flush(maxRounds) {
if (maxRounds === void 0) { maxRounds = 10; }
EventQueue_1.default.global().flush(maxRounds);
}
exports.flush = flush;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUErRDtBQUMvRCxlQUFlO0FBRWYsWUFBWSxDQUFDOzs7O0FBRWIsaUJBQWMsY0FBYyxDQUFDLEVBQUE7QUFDN0IsaUJBQWMsY0FBYyxDQUFDLEVBQUE7QUFDN0IsaUJBQWMsZ0JBQWdCLENBQUMsRUFBQTtBQUMvQixpQkFBYyxlQUFlLENBQUMsRUFBQTtBQUM5QixpQkFBYyxhQUFhLENBQUMsRUFBQTtBQUU1QiwyQkFBb0MsY0FBYyxDQUFDLENBQUE7QUFDbkQsMkJBQW9DLGNBQWMsQ0FBQztBQUEzQywwQ0FBMkM7QUFFbkQ7O0dBRUc7QUFDSDtJQUNJLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFGZSxhQUFLLFFBRXBCLENBQUE7QUFFRDs7OztHQUlHO0FBQ0g7SUFDSSxvQkFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3BDLENBQUM7QUFGZSxpQkFBUyxZQUV4QixDQUFBO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsZUFBc0IsU0FBc0I7SUFBdEIseUJBQXNCLEdBQXRCLGNBQXNCO0lBQ3hDLG9CQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGZSxhQUFLLFFBRXBCLENBQUEifQ==
/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {
var apply = Function.prototype.apply;
// DOM APIs, for completeness
exports.setTimeout = function() {
return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
if (timeout) {
timeout.close();
}
};
function Timeout(id, clearFn) {
this._id = id;
this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
this._clearFn.call(window, this._id);
};
// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
clearTimeout(item._idleTimeoutId);
item._idleTimeout = msecs;
};
exports.unenroll = function(item) {
clearTimeout(item._idleTimeoutId);
item._idleTimeout = -1;
};
exports._unrefActive = exports.active = function(item) {
clearTimeout(item._idleTimeoutId);
var msecs = item._idleTimeout;
if (msecs >= 0) {
item._idleTimeoutId = setTimeout(function onTimeout() {
if (item._onTimeout)
item._onTimeout();
}, msecs);
}
};
// setimmediate attaches itself to the global object
__webpack_require__(10);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;
/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {
/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
"use strict";
if (global.setImmediate) {
return;
}
var nextHandle = 1; // Spec says greater than zero
var tasksByHandle = {};
var currentlyRunningATask = false;
var doc = global.document;
var registerImmediate;
function setImmediate(callback) {
// Callback can either be a function or a string
if (typeof callback !== "function") {
callback = new Function("" + callback);
}
// Copy function arguments
var args = new Array(arguments.length - 1);
for (var i = 0; i < args.length; i++) {
args[i] = arguments[i + 1];
}
// Store and register the task
var task = { callback: callback, args: args };
tasksByHandle[nextHandle] = task;
registerImmediate(nextHandle);
return nextHandle++;
}
function clearImmediate(handle) {
delete tasksByHandle[handle];
}
function run(task) {
var callback = task.callback;
var args = task.args;
switch (args.length) {
case 0:
callback();
break;
case 1:
callback(args[0]);
break;
case 2:
callback(args[0], args[1]);
break;
case 3:
callback(args[0], args[1], args[2]);
break;
default:
callback.apply(undefined, args);
break;
}
}
function runIfPresent(handle) {
// From the spec: "Wait until any invocations of this algorithm started before this one have completed."
// So if we're currently running a task, we'll need to delay this invocation.
if (currentlyRunningATask) {
// Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
// "too much recursion" error.
setTimeout(runIfPresent, 0, handle);
} else {
var task = tasksByHandle[handle];
if (task) {
currentlyRunningATask = true;
try {
run(task);
} finally {
clearImmediate(handle);
currentlyRunningATask = false;
}
}
}
}
function installNextTickImplementation() {
registerImmediate = function(handle) {
process.nextTick(function () { runIfPresent(handle); });
};
}
function canUsePostMessage() {
// The test against `importScripts` prevents this implementation from being installed inside a web worker,
// where `global.postMessage` means something completely different and can't be used for this purpose.
if (global.postMessage && !global.importScripts) {
var postMessageIsAsynchronous = true;
var oldOnMessage = global.onmessage;
global.onmessage = function() {
postMessageIsAsynchronous = false;
};
global.postMessage("", "*");
global.onmessage = oldOnMessage;
return postMessageIsAsynchronous;
}
}
function installPostMessageImplementation() {
// Installs an event handler on `global` for the `message` event: see
// * https://developer.mozilla.org/en/DOM/window.postMessage
// * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
var messagePrefix = "setImmediate$" + Math.random() + "$";
var onGlobalMessage = function(event) {
if (event.source === global &&
typeof event.data === "string" &&
event.data.indexOf(messagePrefix) === 0) {
runIfPresent(+event.data.slice(messagePrefix.length));
}
};
if (global.addEventListener) {
global.addEventListener("message", onGlobalMessage, false);
} else {
global.attachEvent("onmessage", onGlobalMessage);
}
registerImmediate = function(handle) {
global.postMessage(messagePrefix + handle, "*");
};
}
function installMessageChannelImplementation() {
var channel = new MessageChannel();
channel.port1.onmessage = function(event) {
var handle = event.data;
runIfPresent(handle);
};
registerImmediate = function(handle) {
channel.port2.postMessage(handle);
};
}
function installReadyStateChangeImplementation() {
var html = doc.documentElement;
registerImmediate = function(handle) {
// Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
// into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
var script = doc.createElement("script");
script.onreadystatechange = function () {
runIfPresent(handle);
script.onreadystatechange = null;
html.removeChild(script);
script = null;
};
html.appendChild(script);
};
}
function installSetTimeoutImplementation() {
registerImmediate = function(handle) {
setTimeout(runIfPresent, 0, handle);
};
}
// If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
// Don't get fooled by e.g. browserify environments.
if ({}.toString.call(global.process) === "[object process]") {
// For Node.js before 0.9
installNextTickImplementation();
} else if (canUsePostMessage()) {
// For non-IE10 modern browsers
installPostMessageImplementation();
} else if (global.MessageChannel) {
// For web workers, where supported
installMessageChannelImplementation();
} else if (doc && "onreadystatechange" in doc.createElement("script")) {
// For IE 6–8
installReadyStateChangeImplementation();
} else {
// For older browsers
installSetTimeoutImplementation();
}
attachTo.setImmediate = setImmediate;
attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(12)))
/***/ }),
/* 11 */
/***/ (function(module, exports) {
var g;
// This works in non-strict mode
g = (function() {
return this;
})();
try {
// This works if eval is allowed (see CSP)
g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
// This works if the window reference is available
if(typeof window === "object")
g = window;
}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
module.exports = g;
/***/ }),
/* 12 */
/***/ (function(module, exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
throw new Error('clearTimeout has not been defined');
}
(function () {
try {
if (typeof setTimeout === 'function') {
cachedSetTimeout = setTimeout;
} else {
cachedSetTimeout = defaultSetTimout;
}
} catch (e) {
cachedSetTimeout = defaultSetTimout;
}
try {
if (typeof clearTimeout === 'function') {
cachedClearTimeout = clearTimeout;
} else {
cachedClearTimeout = defaultClearTimeout;
}
} catch (e) {
cachedClearTimeout = defaultClearTimeout;
}
} ())
function runTimeout(fun) {
if (cachedSetTimeout === setTimeout) {
//normal enviroments in sane situations
return setTimeout(fun, 0);
}
// if setTimeout wasn't available but was latter defined
if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
cachedSetTimeout = setTimeout;
return setTimeout(fun, 0);
}
try {
// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedSetTimeout(fun, 0);
} catch(e){
try {
// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return cachedSetTimeout.call(null, fun, 0);
} catch(e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return cachedSetTimeout.call(this, fun, 0);
}
}
}
function runClearTimeout(marker) {
if (cachedClearTimeout === clearTimeout) {
//normal enviroments in sane situations
return clearTimeout(marker);
}
// if clearTimeout wasn't available but was latter defined
if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
cachedClearTimeout = clearTimeout;
return clearTimeout(marker);
}
try {
// when when somebody has screwed with setTimeout but no I.E. maddness
return cachedClearTimeout(marker);
} catch (e){
try {
// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return cachedClearTimeout.call(null, marker);
} catch (e){
// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return cachedClearTimeout.call(this, marker);
}
}
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
if (!draining || !currentQueue) {
return;
}
draining = false;
if (currentQueue.length) {
queue = currentQueue.concat(queue);
} else {
queueIndex = -1;
}
if (queue.length) {
drainQueue();
}
}
function drainQueue() {
if (draining) {
return;
}
var timeout = runTimeout(cleanUpNextTick);
draining = true;
var len = queue.length;
while(len) {
currentQueue = queue;
queue = [];
while (++queueIndex < len) {
if (currentQueue) {
currentQueue[queueIndex].run();
}
}
queueIndex = -1;
len = queue.length;
}
currentQueue = null;
draining = false;
runClearTimeout(timeout);
}
process.nextTick = function (fun) {
var args = new Array(arguments.length - 1);
if (arguments.length > 1) {
for (var i = 1; i < arguments.length; i++) {
args[i - 1] = arguments[i];
}
}
queue.push(new Item(fun, args));
if (queue.length === 1 && !draining) {
runTimeout(drainQueue);
}
};
// v8 likes predictible objects
function Item(fun, array) {
this.fun = fun;
this.array = array;
}
Item.prototype.run = function () {
this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) { return [] }
process.binding = function (name) {
throw new Error('process.binding is not supported');
};
process.cwd = function () { return '/' };
process.chdir = function (dir) {
throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };
/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
var __extends = (this && this.__extends) || function (d, b) {
for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects_1 = __webpack_require__(14);
var sync_event_1 = __webpack_require__(2);
var async_event_1 = __webpack_require__(6);
var queued_event_1 = __webpack_require__(5);
(function (EventType) {
EventType[EventType["Sync"] = 0] = "Sync";
EventType[EventType["Async"] = 1] = "Async";
EventType[EventType["Queued"] = 2] = "Queued";
})(exports.EventType || (exports.EventType = {}));
var EventType = exports.EventType;
;
/**
* An event that behaves like a Sync/Async/Queued event depending on how
* you subscribe.
*/
var AnyEvent = (function () {
function AnyEvent(opts) {
/**
* Underlying event implementations; one for every attach type + opts combination
*/
this._events = [];
if (opts && opts.monitorAttach) {
this.evtFirstAttached = new VoidAnyEvent();
this.evtLastDetached = new VoidAnyEvent();
}
}
/**
* same as attachSync/attachAsync/attachQueued; based on the given enum
* @param mode determines whether to attach sync/async/queued
*/
AnyEvent.prototype.attach = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
var prevCount = (!!this.evtFirstAttached ? this.listenerCount() : 0);
var mode = EventType.Sync;
if (args.length > 0 && typeof args[0] === 'number') {
mode = args.shift();
}
switch (mode) {
case EventType.Sync:
{
// add ourselves as default 'boundTo' argument
if (args.length > 0 && typeof args[0] === 'function') {
args.unshift(this);
}
var event_1;
for (var i = 0; i < this._events.length; ++i) {
if (this._events[i] instanceof sync_event_1.SyncEvent) {
event_1 = this._events[i];
}
}
if (!event_1) {
event_1 = new sync_event_1.SyncEvent();
this._events.push(event_1);
}
event_1.attach.apply(event_1, args);
}
break;
case EventType.Async:
{
var opts = void 0;
if (args.length > 1 && typeof args[args.length - 1] === 'object') {
opts = args[args.length - 1];
}
// add ourselves as default 'boundTo' argument
if (args.length > 0 && typeof args[0] === 'function') {
args.unshift(this);
}
var event_2;
for (var i = 0; i < this._events.length; ++i) {
if (this._events[i] instanceof async_event_1.AsyncEvent
&& objects_1.shallowEquals(this._events[i].options, opts)) {
event_2 = this._events[i];
}
}
if (!event_2) {
event_2 = new async_event_1.AsyncEvent(opts);
this._events.push(event_2);
}
event_2.attach.apply(event_2, args);
}
break;
case EventType.Queued:
{
var opts = void 0;
if (args.length > 1 && typeof args[args.length - 1] === 'object') {
opts = args[args.length - 1];
}
// add ourselves as default 'boundTo' argument
if (args.length > 0 && typeof args[0] === 'function') {
args.unshift(this);
}
var event_3;
for (var i = 0; i < this._events.length; ++i) {
if (this._events[i] instanceof queued_event_1.QueuedEvent
&& objects_1.shallowEquals(this._events[i].options, opts)) {
event_3 = this._events[i];
}
}
if (!event_3) {
event_3 = new queued_event_1.QueuedEvent(opts);
this._events.push(event_3);
}
event_3.attach.apply(event_3, args);
}
break;
default:
throw new Error('unknown EventType');
}
if (this.evtFirstAttached && prevCount === 0) {
this.evtFirstAttached.post();
}
};
/**
* Attach event handlers as if it were a sync event. It is simply called 'attach'
* so that this class adheres to the BaseEvent<T> signature.
*/
AnyEvent.prototype.attachSync = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
args.unshift(EventType.Sync);
this.attach.apply(this, args);
};
/**
* Attach event handlers as if it were a a-sync event
*/
AnyEvent.prototype.attachAsync = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
args.unshift(EventType.Async);
this.attach.apply(this, args);
};
/**
* Attach event handlers as if it were a queued event
*/
AnyEvent.prototype.attachQueued = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
args.unshift(EventType.Queued);
this.attach.apply(this, args);
};
/**
* Detach event handlers regardless of type
*/
AnyEvent.prototype.detach = function () {
var args = [];
for (var _i = 0; _i < arguments.length; _i++) {
args[_i - 0] = arguments[_i];
}
var prevCount = (!!this.evtLastDetached ? this.listenerCount() : 0);
for (var i = 0; i < this._events.length; ++i) {
this._events[i].detach.apply(this._events[i], args);
}
if (!!this.evtLastDetached && prevCount > 0 && this.listenerCount() === 0) {
this.evtLastDetached.post();
}
};
/**
* Post an event to all current listeners
*/
AnyEvent.prototype.post = function (data) {
// make a copy of the array first to cover the case where event handlers
// are attached during the post
var events = [];
for (var i = 0; i < this._events.length; ++i) {
events.push(this._events[i]);
}
;
for (var i = 0; i < events.length; ++i) {
events[i].post(data);
}
};
/**
* The number of attached listeners
*/
AnyEvent.prototype.listenerCount = function () {
var result = 0;
for (var i = 0; i < this._events.length; ++i) {
result += this._events[i].listenerCount();
}
return result;
};
return AnyEvent;
}());
exports.AnyEvent = AnyEvent;
/**
* Convenience class for AnyEvents without data
*/
var VoidAnyEvent = (function (_super) {
__extends(VoidAnyEvent, _super);
function VoidAnyEvent() {
_super.apply(this, arguments);
}
/**
* Send the AsyncEvent.
*/
VoidAnyEvent.prototype.post = function () {
_super.prototype.post.call(this, undefined);
};
return VoidAnyEvent;
}(AnyEvent));
exports.VoidAnyEvent = VoidAnyEvent;
/**
* Similar to 'error' event on EventEmitter: throws when a post() occurs while no handlers set.
*/
var ErrorAnyEvent = (function (_super) {
__extends(ErrorAnyEvent, _super);
function ErrorAnyEvent() {
_super.apply(this, arguments);
}
ErrorAnyEvent.prototype.post = function (data) {
if (this.listenerCount() === 0) {
throw new Error("error event posted while no listeners attached. Error: " + data.message);
}
_super.prototype.post.call(this, data);
};
return ErrorAnyEvent;
}(AnyEvent));
exports.ErrorAnyEvent = ErrorAnyEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55LWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi9hbnktZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQStEO0FBQy9ELGVBQWU7QUFFZixZQUFZLENBQUM7Ozs7OztBQUViLHdCQUE0QixXQUFXLENBQUMsQ0FBQTtBQUd4QywyQkFBd0IsY0FBYyxDQUFDLENBQUE7QUFDdkMsNEJBQXlDLGVBQWUsQ0FBQyxDQUFBO0FBQ3pELDZCQUEyQyxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVELFdBQVksU0FBUztJQUNqQix5Q0FBSSxDQUFBO0lBQ0osMkNBQUssQ0FBQTtJQUNMLDZDQUFNLENBQUE7QUFDVixDQUFDLEVBSlcsaUJBQVMsS0FBVCxpQkFBUyxRQUlwQjtBQUpELElBQVksU0FBUyxHQUFULGlCQUlYLENBQUE7QUFBQSxDQUFDO0FBU0Y7OztHQUdHO0FBQ0g7SUFrQkksa0JBQVksSUFBbUI7UUFML0I7O1dBRUc7UUFDSyxZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUdqQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7WUFDM0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBUUQ7OztPQUdHO0lBQ0kseUJBQU0sR0FBYjtRQUFjLGNBQWM7YUFBZCxXQUFjLENBQWQsc0JBQWMsQ0FBZCxJQUFjO1lBQWQsNkJBQWM7O1FBQ3hCLElBQU0sU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMxQixFQUFFLENBQUMs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
/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
// Copyright (c) 2015 Rogier Schouten<github@workingcode.ninja>
// License: ISC
function shallowEquals(a, b) {
if (a === b) {
return true;
}
if (typeof a !== typeof b) {
return false;
}
switch (typeof a) {
case 'boolean':
case 'number':
case 'string':
case 'function':
case 'symbol':
case 'undefined':
// already did === compare
return false;
case 'object':
if (a === null || b === null) {
return false; // already compared ===
}
if (Array.isArray(a) || Array.isArray(b)) {
if (!Array.isArray(a) || !Array.isArray(b)) {
return false;
}
if (a.length !== b.length) {
return false;
}
for (var i = 0; i < a.length; ++i) {
if (a[i] !== b[i]) {
return false;
}
}
return true;
}
var name;
var namesA = [];
var namesB = [];
for (name in a) {
if (a.hasOwnProperty(name)) {
namesA.push(name);
}
}
for (name in b) {
if (b.hasOwnProperty(name)) {
namesB.push(name);
}
}
namesA.sort();
namesB.sort();
if (namesA.join(',') !== namesB.join(',')) {
return false;
}
for (i = 0; i < namesA.length; ++i) {
if (a[namesA[i]] !== b[namesA[i]]) {
return false;
}
}
return true;
default:
return false;
}
}
exports.shallowEquals = shallowEquals;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvb2JqZWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsZUFBZTtBQUVmLFlBQVksQ0FBQztBQUViLHVCQUE4QixDQUFNLEVBQUUsQ0FBTTtJQUN4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZixLQUFLLFNBQVMsQ0FBQztRQUNmLEtBQUssUUFBUSxDQUFDO1FBQ2QsS0FBSyxRQUFRLENBQUM7UUFDZCxLQUFLLFVBQVUsQ0FBQztRQUNoQixLQUFLLFFBQVEsQ0FBQztRQUNkLEtBQUssV0FBVztZQUNaLDBCQUEwQjtZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLEtBQUssUUFBUTtZQUNULEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyx1QkFBdUI7WUFDekMsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ2hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoQixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBQ0QsSUFBSSxJQUFZLENBQUM7WUFDakIsSUFBSSxNQUFNLEdBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUM7WUFDRCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsQ0FBQztZQUNMLENBQUM7WUFDRCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7WUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEI7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3JCLENBQUM7QUFDTCxDQUFDO0FBN0RlLHFCQUFhLGdCQTZENUIsQ0FBQSJ9
/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (_) try {
if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [0, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(0);
/**
* Sends commands, queries and receives events from an automation server.
*/
var AutomationClient = /** @class */ (function () {
/**
* Initializes a new instance of the AutomationClient class with the provided communication channel.
* @param {IMessagingChannel} channel - Channel used to exchange messages with the automation server.
*/
function AutomationClient(channel) {
/**
* Holds a reference to the dispatcher of the ServerEventReceived event.
*/
this._onServerEventReceived = new Event_1.Event();
/**
* Holds a value indicating whether the object has already been disposed.
*/
this._isDisposed = false;
if (channel == null) {
throw new Error("channel");
}
this._channel = channel; // consider cloning the channel.
this.channelMessageReceived = this.channelMessageReceived.bind(this);
}
Object.defineProperty(AutomationClient.prototype, "isConnected", {
/**
* Gets a value indicating whether the connection to the automation server has been established.
*/
get: function () {
return this._channel.isOpen && this._channel.onMessageReceived().has(this.channelMessageReceived);
},
enumerable: true,
configurable: true
});
/**
* Opens the communication channel -if it is not open- and therefore starts listening for server events.
*/
AutomationClient.prototype.connectAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (this.isConnected) {
throw new Error("Client is already connected.");
}
if (!this._channel.onMessageReceived().has(this.channelMessageReceived)) {
this._channel.onMessageReceived().attach(this.channelMessageReceived);
}
if (!!this._channel.isOpen) return [3 /*break*/, 2];
return [4 /*yield*/, this._channel.openAsync()];
case 1:
_a.sent();
_a.label = 2;
case 2: return [2 /*return*/];
}
});
});
};
/**
* Closes the communication channel and therefore stops listening for server events.
*/
AutomationClient.prototype.disconnectAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.isConnected) {
throw new Error("Client is not connected.");
}
if (this._channel.onMessageReceived().has(this.channelMessageReceived)) {
this._channel.onMessageReceived().detach(this.channelMessageReceived);
}
if (!this._channel.isOpen) return [3 /*break*/, 2];
return [4 /*yield*/, this._channel.closeAsync()];
case 1:
_a.sent();
_a.label = 2;
case 2: return [2 /*return*/];
}
});
});
};
/**
* Asynchronously sends a command to the automation server.
* @param {ICommand} command - Command to send.
* @param {number} [timeout] - Number of milliseconds to wait before timing out. The default value is infinite.
*/
AutomationClient.prototype.sendCommandAsync = function (command, timeout) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.isConnected) {
throw new Error("Client is not connected.");
}
if (command == null) {
throw new Error("command");
}
if (timeout != null && !(timeout % 1 === 0)) {
throw new Error("timeout");
}
if (timeout != null && timeout <= 0) {
throw new Error("timeout");
}
return [4 /*yield*/, this._channel.sendMessageAsync(command, timeout)];
case 1:
_a.sent();
return [2 /*return*/];
}
});
});
};
/**
* Asynchronously sends a query to the automation server.
* @template {TResponse} - Type of the response to the query.
* @param {IQuery<TResponse>} query - Query to send.
* @param {number} [timeout] - Number of milliseconds to wait before timing out. The default value is infinite.
*/
AutomationClient.prototype.sendQueryAsync = function (query, timeout) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.isConnected) {
throw new Error("Client is not connected.");
}
if (query == null) {
throw new Error("query");
}
if (timeout != null && !(timeout % 1 === 0)) {
throw new Error("timeout");
}
if (timeout != null && timeout <= 0) {
throw new Error("timeout");
}
throw new Error("Not implemented");
});
});
};
Object.defineProperty(AutomationClient.prototype, "onServerEventReceived", {
/**
* Occurs when an event is received from the automation server.
*/
get: function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return this._onServerEventReceived;
},
enumerable: true,
configurable: true
});
/**
* Handles the Channel.MessageReceived event.
*/
AutomationClient.prototype.channelMessageReceived = function (args) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (args.sender == null) {
throw new Error("sender");
}
if (args == null) {
throw new Error("args");
}
if (args.message == null) {
throw new Error("args");
}
if (args.message.type == null) {
throw new Error("args");
}
if (args.message.type === "") {
throw new Error("args");
}
if (args.message.type.lastIndexOf("Event") === args.message.type.length - "Event".length) {
if (args.message == null) {
throw new Error("args");
}
var event_1 = args.message;
var eventArgs = new ServerEventReceivedEventArgs(this, event_1);
this._onServerEventReceived.post(eventArgs);
}
};
/**
* Releases resources.
* @param {boolean} disposeChannel - A value indicating whether to dispose the communication channel used to
* exchange messages with the automation server.
*/
AutomationClient.prototype.dispose = function (disposeChannel) {
if (disposeChannel === void 0) { disposeChannel = false; }
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
try {
this._onServerEventReceived.detach();
}
catch (e) {
// dispose shouldn't throw.
}
if (disposeChannel) {
this._channel.dispose();
}
this._isDisposed = true;
};
return AutomationClient;
}());
exports.AutomationClient = AutomationClient;
/**
* Provides data for the AutomationClient.ServerEventReceived event.
*/
var ServerEventReceivedEventArgs = /** @class */ (function (_super) {
__extends(ServerEventReceivedEventArgs, _super);
/**
* Initializes a new instance of the ServerEventReceivedEventArgs with the provided automation client and server event.
* @param {AutomationClient} sender - Object that fired the event.
* @param {IEvent} serverEvent - Server event that was received.
*/
function ServerEventReceivedEventArgs(sender, serverEvent) {
var _this = _super.call(this, sender) || this;
_this.serverEvent = serverEvent;
return _this;
}
return ServerEventReceivedEventArgs;
}(Event_1.EventArgs));
exports.ServerEventReceivedEventArgs = ServerEventReceivedEventArgs;
/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (_) try {
if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [0, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(0);
/**
* Processes commands, queries and sends events to one or more automation clients.
*/
var AutomationServer = /** @class */ (function () {
/**
* Initializes a new instance of the AutomationServer class with the provided list of communication channels.
* @param {IMessagingChannel[]} clientChannels - List of channels used to exchange messages with automation clients.
*/
function AutomationServer() {
var clientChannels = [];
for (var _i = 0; _i < arguments.length; _i++) {
clientChannels[_i] = arguments[_i];
}
var _this = this;
/**
* Holds the list of references to the channels used to exchange messages with automation clients.
*/
this._channels = [];
/**
* Holds a reference to the dispatcher of the CommandReceived event.
*/
this._onCommandReceived = new Event_1.Event();
/**
* Holds a reference to the dispatcher of the QueryReceived event.
*/
this._onQueryReceived = new Event_1.Event();
/**
* Holds a value indicating whether the object has already been disposed.
*/
this._isDisposed = false;
if (clientChannels.length === 0) {
throw new Error("clientChannels");
}
if (clientChannels.indexOf(null) >= 0) {
throw new Error("clientChannels");
}
clientChannels.forEach(function (x) { return _this._channels.push(x); }); // consider cloning the channels in addition to the array.
this.channelMessageReceived = this.channelMessageReceived.bind(this);
}
Object.defineProperty(AutomationServer.prototype, "hasStarted", {
/**
* Gets a value indicating whether the automation server has been started.
*/
get: function () {
var _this = this;
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return (this._channels.filter(function (x) {
return x.isOpen && x.onMessageReceived().has(_this.channelMessageReceived);
}).length === this._channels.length);
},
enumerable: true,
configurable: true
});
/**
* Asynchronously starts the server.
*/
AutomationServer.prototype.startAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var _this = this;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (this.hasStarted) {
throw new Error("Server has already started.");
}
return [4 /*yield*/, this._channels.forEach(function (x) { return __awaiter(_this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!x.onMessageReceived().has(this.channelMessageReceived)) {
x.onMessageReceived().attach(this.channelMessageReceived);
}
if (!!x.isOpen) return [3 /*break*/, 2];
return [4 /*yield*/, x.openAsync()];
case 1:
_a.sent();
_a.label = 2;
case 2: return [2 /*return*/];
}
});
}); })];
case 1:
_a.sent();
return [2 /*return*/];
}
});
});
};
/**
* Asynchronously stops the server.
*/
AutomationServer.prototype.stopAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var _this = this;
return __generator(this, function (_a) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.hasStarted) {
throw new Error("Sever has not started.");
}
this._channels.forEach(function (x) { return __awaiter(_this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (x.onMessageReceived().has(this.channelMessageReceived)) {
x.onMessageReceived().detach(this.channelMessageReceived);
}
if (!x.isOpen) return [3 /*break*/, 2];
return [4 /*yield*/, x.closeAsync()];
case 1:
_a.sent();
_a.label = 2;
case 2: return [2 /*return*/];
}
});
}); });
return [2 /*return*/];
});
});
};
/**
* Asynchronously broadcasts an event to all automation clients.
* @param {IEvent} event - Event to broadcast.
* @param {number} [timeout] - Number of milliseconds to wait before timing out. The default value is infinite.
*/
AutomationServer.prototype.broadcastEventAsync = function (event, timeout) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.hasStarted) {
throw new Error("Server has not started.");
}
if (event == null) {
throw new Error("event");
}
if (timeout != null && !(timeout % 1 === 0)) {
throw new Error("timeout");
}
if (timeout != null && timeout <= 0) {
throw new Error("timeout");
}
return [4 /*yield*/, Promise.all(this._channels.map(function (x) {
if (!x.isOpen) {
return Promise.resolve();
}
return x.sendMessageAsync(event, timeout)
.catch(function () { return Promise.resolve(); });
}))];
case 1:
_a.sent();
return [2 /*return*/];
}
});
});
};
Object.defineProperty(AutomationServer.prototype, "onCommandReceived", {
/**
* Occurs when a command is received from one of the automation clients.
*/
get: function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return this._onCommandReceived;
},
enumerable: true,
configurable: true
});
Object.defineProperty(AutomationServer.prototype, "onQueryReceived", {
/**
* Occurs when a query is received from one of the automation clients.
*/
get: function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return this._onQueryReceived;
},
enumerable: true,
configurable: true
});
/**
* Handles the Channel.MessageReceived event.
*/
AutomationServer.prototype.channelMessageReceived = function (args) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (args.sender == null) {
throw new Error("sender");
}
if (args == null) {
throw new Error("args");
}
if (args.message == null) {
throw new Error("args");
}
if (args.message.type == null) {
throw new Error("args");
}
if (args.message.type === "") {
throw new Error("args");
}
if (args.message.type.lastIndexOf("Command") === args.message.type.length - "Command".length) {
if (args.message == null) {
throw new Error("args");
}
var command = args.message;
var eventArgs = new CommandReceivedEventArgs(this, command);
this._onCommandReceived.post(eventArgs);
}
else if (args.message.type.lastIndexOf("Query") === args.message.type.length - "Query".length) {
if (args.message == null) {
throw new Error("args");
}
var query = args.message;
var eventArgs = new QueryReceivedEventArgs(this, query);
this._onQueryReceived.post(eventArgs);
}
};
/**
* Releases resources.
* @param {boolean} disposeChannels - A value indicating whether to dispose the communication channels used to
* exchange messages with automation clients.
*/
AutomationServer.prototype.dispose = function (disposeChannels) {
if (disposeChannels === void 0) { disposeChannels = false; }
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
try {
this._onCommandReceived.detach();
this._onQueryReceived.detach();
}
catch (e) {
// dispose shouldn't throw.
}
if (disposeChannels) {
this._channels.forEach(function (x) { return x.dispose(); });
}
this._isDisposed = true;
};
return AutomationServer;
}());
exports.AutomationServer = AutomationServer;
/**
* Provides data for the AutomationServer.CommandReceived event.
*/
var CommandReceivedEventArgs = /** @class */ (function (_super) {
__extends(CommandReceivedEventArgs, _super);
/**
* Initializes a new instance of the CommandReceivedEventArgs class with the provided automation server and command.
*/
function CommandReceivedEventArgs(sender, command) {
var _this = _super.call(this, sender) || this;
_this.command = command;
return _this;
}
return CommandReceivedEventArgs;
}(Event_1.EventArgs));
exports.CommandReceivedEventArgs = CommandReceivedEventArgs;
/**
* Provides data for the AutomationServer.QueryReceived event.
*/
var QueryReceivedEventArgs = /** @class */ (function (_super) {
__extends(QueryReceivedEventArgs, _super);
/**
* Initializes a new instance of the QueryReceivedEventArgs class with the provided automation server and query.
*/
function QueryReceivedEventArgs(sender, query) {
var _this = _super.call(this, sender) || this;
_this.query = query;
return _this;
}
return QueryReceivedEventArgs;
}(Event_1.EventArgs));
exports.QueryReceivedEventArgs = QueryReceivedEventArgs;
/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (_) try {
if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [0, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* Forwards messages between two channels.
*/
var MessagingChannelProxy = /** @class */ (function () {
/**
* Initializes a new instance of the MessagingChannelProxy class with the provided channels.
* @param {IMessagingChannel} channelA - First channel.
* @param {IMessagingChannel} channelB - Second channel.
*/
function MessagingChannelProxy(channelA, channelB) {
/*
* Holds a value indicating whether the object has already been disposed.
*/
this._isDisposed = false;
if (channelA == null) {
throw new Error("channelA");
}
if (channelB == null) {
throw new Error("channelB");
}
if (channelA === channelB) {
throw new Error("Channels must be different");
}
this._channelA = channelA;
this._channelB = channelB;
this.channelMessageReceived = this.channelMessageReceived.bind(this);
}
Object.defineProperty(MessagingChannelProxy.prototype, "hasStarted", {
/**
* Gets a value indicating whether the proxy has started forwarding messages.
*/
get: function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return this._channelA.isOpen && this._channelB.isOpen
&& this._channelA.onMessageReceived().has(this.channelMessageReceived)
&& this._channelB.onMessageReceived().has(this.channelMessageReceived);
},
enumerable: true,
configurable: true
});
/**
* Asynchronously starts forwarding messages between the two channels.
*/
MessagingChannelProxy.prototype.startAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (this.hasStarted) {
throw new Error("Proxy has already started.");
}
if (!!this._channelA.isOpen) return [3 /*break*/, 2];
return [4 /*yield*/, this._channelA.openAsync()];
case 1:
_a.sent();
_a.label = 2;
case 2:
if (!!this._channelB.isOpen) return [3 /*break*/, 4];
return [4 /*yield*/, this._channelB.openAsync()];
case 3:
_a.sent();
_a.label = 4;
case 4:
this._channelA.onMessageReceived().attach(this.channelMessageReceived);
this._channelB.onMessageReceived().attach(this.channelMessageReceived);
return [2 /*return*/];
}
});
});
};
/**
* Asynchronously stops forwarding messages between the two channels.
*/
MessagingChannelProxy.prototype.stopAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.hasStarted) {
throw new Error("Proxy has not started.");
}
this._channelA.onMessageReceived().detach(this.channelMessageReceived);
this._channelB.onMessageReceived().detach(this.channelMessageReceived);
return [4 /*yield*/, this._channelA.closeAsync()];
case 1:
_a.sent();
return [4 /*yield*/, this._channelB.closeAsync()];
case 2:
_a.sent();
return [2 /*return*/];
}
});
});
};
/**
* Handles the Channel.MessageReceived event.
*/
MessagingChannelProxy.prototype.channelMessageReceived = function (args) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (args.sender == null) {
throw new Error("sender");
}
if (args == null) {
throw new Error("args");
}
if (args.message == null) {
throw new Error("args");
}
if (args.message.type == null) {
throw new Error("args");
}
if (args.message.type === "") {
throw new Error("args");
}
var sourceChannel = args.sender;
var destinationChannel = sourceChannel === this._channelA ? this._channelB : this._channelA;
destinationChannel.sendMessageAsync(args.message);
};
/**
* Releases resources.
* @param {boolean} disposeChannels - A value indicating whether to dispose the communication channels.
*/
MessagingChannelProxy.prototype.dispose = function (disposeChannels) {
var _this = this;
if (disposeChannels === void 0) { disposeChannels = false; }
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
this.stopAsync().then(function () {
if (disposeChannels) {
_this._channelA.dispose();
_this._channelB.dispose();
}
});
this._isDisposed = true;
};
return MessagingChannelProxy;
}());
exports.MessagingChannelProxy = MessagingChannelProxy;
/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (_) try {
if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [0, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
Object.defineProperty(exports, "__esModule", { value: true });
var Event_1 = __webpack_require__(0);
var IMessagingChannel_1 = __webpack_require__(4);
var post_robot_1 = __webpack_require__(19);
post_robot_1.default.CONFIG.LOG_LEVEL = "error";
var PostRobot;
(function (PostRobot) {
/**
* Represents a messaging channel between the current browser window and another window. Messages are sent using the post-robot library.
*/
var PostRobotMessagingChannel = /** @class */ (function () {
/**
* Initializes a new instance of the PostRobotMessagingChannel class with the provided remote window.
* @param {Window} remoteWindow - Window with which the current browser window will exchange messages with.
* @param {string} remoteWindowAuthority - Authority portion of the URL in which the remote window
* has to be in for communication to succeed.
*/
function PostRobotMessagingChannel(remoteWindow, remoteWindowAuthority) {
/**
* Holds the authority portion of the URL in which the remote window has to be in for communication to succeed.
*/
this._remoteWindowAuthority = null;
this._isOpen = false;
/**
* Holds a reference to the dispatcher of the MessageReceived event.
*/
this._onMessageReceivedEvent = new Event_1.Event();
/*
* Holds a value indicating whether the object has already been disposed.
*/
this._isDisposed = false;
if (remoteWindow == null) {
throw new Error("remoteWindow");
}
if (remoteWindow === window) {
throw new Error("The remote window and the current window cannot be the same.");
}
this._remoteWindow = remoteWindow;
if (remoteWindowAuthority != null && remoteWindowAuthority !== "") {
this._remoteWindowAuthority = remoteWindowAuthority;
}
}
Object.defineProperty(PostRobotMessagingChannel.prototype, "remoteWindow", {
/**
* Gets a reference to the window with which the current browser window exchanges messages with.
*/
get: function () {
return this._remoteWindow;
},
enumerable: true,
configurable: true
});
Object.defineProperty(PostRobotMessagingChannel.prototype, "isOpen", {
/**
* Gets a value indicating whether the channel is open.
*/
get: function () {
return this._isOpen;
},
enumerable: true,
configurable: true
});
/**
* Asynchronously opens the channel.
*/
PostRobotMessagingChannel.prototype.openAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (this.isOpen) {
throw new Error("Channel is already open");
}
this._client = post_robot_1.default.client({
domain: this._remoteWindowAuthority != null ? this._remoteWindowAuthority : "*",
window: this._remoteWindow
});
this._listener = post_robot_1.default.on("*", {
domain: this._remoteWindowAuthority != null ? this._remoteWindowAuthority : "*",
window: this._remoteWindow
}, this.listenerMessageReceived.bind(this));
this._isOpen = true;
return [2 /*return*/];
});
});
};
/**
* Asynchronously closes the channel.
*/
PostRobotMessagingChannel.prototype.closeAsync = function () {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
if (!this.isOpen) {
throw new Error("Channel is already closed");
}
this._client = null;
this._listener.cancel();
this._listener = null;
this._isOpen = false;
return [2 /*return*/];
});
});
};
/**
* Asynchronously sends a message to the remote window.
* @param {IMessage} message - Message to send.
* @param {number} timeout - Number of milliseconds to wait before timing out. The default value is infinite.
*/
PostRobotMessagingChannel.prototype.sendMessageAsync = function (message, timeout) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (message == null) {
throw new Error("message");
}
if (timeout != null && !(timeout % 1 === 0)) {
throw new Error("timeout");
}
if (timeout != null && timeout <= 0) {
throw new Error("timeout");
}
if (!this.isOpen) {
throw new Error("Channel is not open.");
}
return [4 /*yield*/, this._client.send("*", message, { timeout: timeout })];
case 1:
_a.sent();
return [2 /*return*/];
}
});
});
};
/**
* Occurs when a message is received from the remote window.
*/
PostRobotMessagingChannel.prototype.onMessageReceived = function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
return this._onMessageReceivedEvent;
};
PostRobotMessagingChannel.prototype.listenerMessageReceived = function (e) {
if (e == null) {
throw new Error("e");
}
if (e.origin == null) {
throw new Error("e");
}
if (e.origin === "") {
throw new Error("e");
}
if (e.data == null) {
throw new Error("e");
}
if (e.data == null) {
throw new Error("e");
}
var source = e.source;
var origin = e.origin;
var message = e.data;
var eventArgs = new IMessagingChannel_1.MessageReceivedEventsArgs(this, message);
this._onMessageReceivedEvent.post(eventArgs);
};
/**
* Releases resources.
*/
PostRobotMessagingChannel.prototype.dispose = function () {
if (this._isDisposed) {
throw new Error("Object has already been disposed.");
}
try {
this._onMessageReceivedEvent.detach();
if (this.isOpen) {
this.closeAsync().catch();
}
}
catch (e) {
// dispose shouldn't throw.
}
this._isDisposed = true;
};
return PostRobotMessagingChannel;
}());
PostRobot.PostRobotMessagingChannel = PostRobotMessagingChannel;
/**
* Represents a messaging channel between the current Internet Explorer window and another window.
* Messages are sent using the post-robot library.
* PostRobotIEMessagingChannel uses an iframe bridge to overcome Internet Explorer limitations.
* See: https://github.com/krakenjs/post-robot
*/
var PostRobotIEMessagingChannel = /** @class */ (function (_super) {
__extends(PostRobotIEMessagingChannel, _super);
/**
* Initializes a new instance of the PostRobotIEMessagingChannel class with the provided remote window.
* @param {Window} remoteWindow - Window with which the current browser window will exchange messages with.
* @param {string} remoteWindowAuthority - Authority portion of the URL in which the remote window
* has to be in for communication to succeed.
* @param {string} bridgeUrl - Url of the iframe used to workaround Internet Explorer's messaging limitations.
*/
function PostRobotIEMessagingChannel(remoteWindow, remoteWindowAuthority, bridgeUrl) {
var _this = _super.call(this, remoteWindow, remoteWindowAuthority) || this;
if (remoteWindow == null) {
throw new Error("remoteWindow");
}
if (remoteWindow === window) {
throw new Error("The remote window and the current window cannot be the same.");
}
if (bridgeUrl == null || bridgeUrl === "") {
throw new Error("bridgeUrl");
}
post_robot_1.default.bridge.openBridge(bridgeUrl);
return _this;
}
return PostRobotIEMessagingChannel;
}(PostRobotMessagingChannel));
PostRobot.PostRobotIEMessagingChannel = PostRobotIEMessagingChannel;
})(PostRobot = exports.PostRobot || (exports.PostRobot = {}));
/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {
!function(root, factory) {
true ? module.exports = factory() : "function" == typeof define && define.amd ? define("postRobot", [], factory) : "object" == typeof exports ? exports.postRobot = factory() : root.postRobot = factory();
}(this, function() {
return function(modules) {
function __webpack_require__(moduleId) {
if (installedModules[moduleId]) return installedModules[moduleId].exports;
var module = installedModules[moduleId] = {
i: moduleId,
l: !1,
exports: {}
};
return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
module.l = !0, module.exports;
}
var installedModules = {};
return __webpack_require__.m = modules, __webpack_require__.c = installedModules,
__webpack_require__.i = function(value) {
return value;
}, __webpack_require__.d = function(exports, name, getter) {
__webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
configurable: !1,
enumerable: !0,
get: getter
});
}, __webpack_require__.n = function(module) {
var getter = module && module.__esModule ? function() {
return module.default;
} : function() {
return module;
};
return __webpack_require__.d(getter, "a", getter), getter;
}, __webpack_require__.o = function(object, property) {
return Object.prototype.hasOwnProperty.call(object, property);
}, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 33);
}([ function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _config = __webpack_require__(29);
Object.keys(_config).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _config[key];
}
});
});
var _constants = __webpack_require__(13);
Object.keys(_constants).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _constants[key];
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
function getActualDomain(win) {
var location = win.location;
if (!location) throw new Error("Can not read window location");
var protocol = location.protocol;
if (!protocol) throw new Error("Can not read window protocol");
if (protocol === CONSTANTS.FILE_PROTOCOL) return "file://";
var host = location.host;
if (!host) throw new Error("Can not read window host");
return protocol + "//" + host;
}
function getDomain(win) {
win = win || window;
var domain = getActualDomain(win);
return domain && win.mockDomain && 0 === win.mockDomain.indexOf(CONSTANTS.MOCK_PROTOCOL) ? win.mockDomain : domain;
}
function isBlankDomain(win) {
try {
if (!win.location.href) return !0;
if ("about:blank" === win.location.href) return !0;
} catch (err) {}
return !1;
}
function isActuallySameDomain(win) {
try {
var desc = Object.getOwnPropertyDescriptor(win, "location");
if (desc && !1 === desc.enumerable) return !1;
} catch (err) {}
try {
if (isBlankDomain(win)) return !0;
if (getActualDomain(win) === getActualDomain(window)) return !0;
} catch (err) {}
return !1;
}
function isSameDomain(win) {
if (!isActuallySameDomain(win)) return !1;
try {
if (isBlankDomain(win)) return !0;
if (getDomain(window) === getDomain(win)) return !0;
} catch (err) {}
return !1;
}
function getParent(win) {
if (win) try {
if (win.parent && win.parent !== win) return win.parent;
} catch (err) {
return;
}
}
function getOpener(win) {
if (win && !getParent(win)) try {
return win.opener;
} catch (err) {
return;
}
}
function getParents(win) {
var result = [];
try {
for (;win.parent !== win; ) result.push(win.parent), win = win.parent;
} catch (err) {}
return result;
}
function isAncestorParent(parent, child) {
if (!parent || !child) return !1;
var childParent = getParent(child);
return childParent ? childParent === parent : -1 !== getParents(child).indexOf(parent);
}
function getFrames(win) {
var result = [], frames = void 0;
try {
frames = win.frames;
} catch (err) {
frames = win;
}
var len = void 0;
try {
len = frames.length;
} catch (err) {}
if (0 === len) return result;
if (len) {
for (var i = 0; i < len; i++) {
var frame = void 0;
try {
frame = frames[i];
} catch (err) {
continue;
}
result.push(frame);
}
return result;
}
for (var _i = 0; _i < 100; _i++) {
var _frame = void 0;
try {
_frame = frames[_i];
} catch (err) {
return result;
}
if (!_frame) return result;
result.push(_frame);
}
return result;
}
function getAllChildFrames(win) {
for (var result = [], _iterator = getFrames(win), _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref;
if (_isArray) {
if (_i2 >= _iterator.length) break;
_ref = _iterator[_i2++];
} else {
if (_i2 = _iterator.next(), _i2.done) break;
_ref = _i2.value;
}
var frame = _ref;
result.push(frame);
for (var _iterator2 = getAllChildFrames(frame), _isArray2 = Array.isArray(_iterator2), _i3 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
var _ref2;
if (_isArray2) {
if (_i3 >= _iterator2.length) break;
_ref2 = _iterator2[_i3++];
} else {
if (_i3 = _iterator2.next(), _i3.done) break;
_ref2 = _i3.value;
}
var childFrame = _ref2;
result.push(childFrame);
}
}
return result;
}
function getTop(win) {
if (win) {
try {
if (win.top) return win.top;
} catch (err) {}
if (getParent(win) === win) return win;
try {
if (isAncestorParent(window, win) && window.top) return window.top;
} catch (err) {}
try {
if (isAncestorParent(win, window) && window.top) return window.top;
} catch (err) {}
for (var _iterator3 = getAllChildFrames(win), _isArray3 = Array.isArray(_iterator3), _i4 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
var _ref3;
if (_isArray3) {
if (_i4 >= _iterator3.length) break;
_ref3 = _iterator3[_i4++];
} else {
if (_i4 = _iterator3.next(), _i4.done) break;
_ref3 = _i4.value;
}
var frame = _ref3;
try {
if (frame.top) return frame.top;
} catch (err) {}
if (getParent(frame) === frame) return frame;
}
}
}
function getAllFramesInWindow(win) {
var top = getTop(win);
return getAllChildFrames(top).concat(top);
}
function isTop(win) {
return win === getTop(win);
}
function isFrameWindowClosed(frame) {
if (!frame.contentWindow) return !0;
if (!frame.parentNode) return !0;
var doc = frame.ownerDocument;
return !(!doc || !doc.body || doc.body.contains(frame));
}
function isWindowClosed(win) {
var allowMock = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
try {
if (win === window) return !1;
} catch (err) {
return !0;
}
try {
if (!win) return !0;
} catch (err) {
return !0;
}
try {
if (win.closed) return !0;
} catch (err) {
return !err || "Call was rejected by callee.\r\n" !== err.message;
}
if (allowMock && isSameDomain(win)) try {
if (win.mockclosed) return !0;
} catch (err) {}
try {
if (!win.parent || !win.top) return !0;
} catch (err) {}
try {
var index = iframeWindows.indexOf(win);
if (-1 !== index) {
var frame = iframeFrames[index];
if (frame && isFrameWindowClosed(frame)) return !0;
}
} catch (err) {}
return !1;
}
function cleanIframes() {
for (var i = 0; i < iframeFrames.length; i++) isFrameWindowClosed(iframeFrames[i]) && (iframeFrames.splice(i, 1),
iframeWindows.splice(i, 1));
for (var _i5 = 0; _i5 < iframeWindows.length; _i5++) isWindowClosed(iframeWindows[_i5]) && (iframeFrames.splice(_i5, 1),
iframeWindows.splice(_i5, 1));
}
function linkFrameWindow(frame) {
if (cleanIframes(), frame && frame.contentWindow) try {
iframeWindows.push(frame.contentWindow), iframeFrames.push(frame);
} catch (err) {}
}
function getUserAgent(win) {
return win = win || window, win.navigator.mockUserAgent || win.navigator.userAgent;
}
function getFrameByName(win, name) {
for (var winFrames = getFrames(win), _iterator4 = winFrames, _isArray4 = Array.isArray(_iterator4), _i6 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
var _ref4;
if (_isArray4) {
if (_i6 >= _iterator4.length) break;
_ref4 = _iterator4[_i6++];
} else {
if (_i6 = _iterator4.next(), _i6.done) break;
_ref4 = _i6.value;
}
var childFrame = _ref4;
try {
if (isSameDomain(childFrame) && childFrame.name === name && -1 !== winFrames.indexOf(childFrame)) return childFrame;
} catch (err) {}
}
try {
if (-1 !== winFrames.indexOf(win.frames[name])) return win.frames[name];
} catch (err) {}
try {
if (-1 !== winFrames.indexOf(win[name])) return win[name];
} catch (err) {}
}
function findChildFrameByName(win, name) {
var frame = getFrameByName(win, name);
if (frame) return frame;
for (var _iterator5 = getFrames(win), _isArray5 = Array.isArray(_iterator5), _i7 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
var _ref5;
if (_isArray5) {
if (_i7 >= _iterator5.length) break;
_ref5 = _iterator5[_i7++];
} else {
if (_i7 = _iterator5.next(), _i7.done) break;
_ref5 = _i7.value;
}
var childFrame = _ref5, namedFrame = findChildFrameByName(childFrame, name);
if (namedFrame) return namedFrame;
}
}
function findFrameByName(win, name) {
return getFrameByName(win, name) || findChildFrameByName(getTop(win), name);
}
function isParent(win, frame) {
var frameParent = getParent(frame);
if (frameParent) return frameParent === win;
for (var _iterator6 = getFrames(win), _isArray6 = Array.isArray(_iterator6), _i8 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator](); ;) {
var _ref6;
if (_isArray6) {
if (_i8 >= _iterator6.length) break;
_ref6 = _iterator6[_i8++];
} else {
if (_i8 = _iterator6.next(), _i8.done) break;
_ref6 = _i8.value;
}
if (_ref6 === frame) return !0;
}
return !1;
}
function isOpener(parent, child) {
return parent === getOpener(child);
}
function getAncestor(win) {
win = win || window;
var opener = getOpener(win);
if (opener) return opener;
var parent = getParent(win);
return parent || void 0;
}
function getAncestors(win) {
for (var results = [], ancestor = win; ancestor; ) (ancestor = getAncestor(ancestor)) && results.push(ancestor);
return results;
}
function isAncestor(parent, child) {
var actualParent = getAncestor(child);
if (actualParent) return actualParent === parent;
if (child === parent) return !1;
if (getTop(child) === child) return !1;
for (var _iterator7 = getFrames(parent), _isArray7 = Array.isArray(_iterator7), _i9 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator](); ;) {
var _ref7;
if (_isArray7) {
if (_i9 >= _iterator7.length) break;
_ref7 = _iterator7[_i9++];
} else {
if (_i9 = _iterator7.next(), _i9.done) break;
_ref7 = _i9.value;
}
if (_ref7 === child) return !0;
}
return !1;
}
function isPopup() {
return Boolean(getOpener(window));
}
function isIframe() {
return Boolean(getParent(window));
}
function isFullpage() {
return Boolean(!isIframe() && !isPopup());
}
function anyMatch(collection1, collection2) {
for (var _iterator8 = collection1, _isArray8 = Array.isArray(_iterator8), _i10 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator](); ;) {
var _ref8;
if (_isArray8) {
if (_i10 >= _iterator8.length) break;
_ref8 = _iterator8[_i10++];
} else {
if (_i10 = _iterator8.next(), _i10.done) break;
_ref8 = _i10.value;
}
for (var item1 = _ref8, _iterator9 = collection2, _isArray9 = Array.isArray(_iterator9), _i11 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator](); ;) {
var _ref9;
if (_isArray9) {
if (_i11 >= _iterator9.length) break;
_ref9 = _iterator9[_i11++];
} else {
if (_i11 = _iterator9.next(), _i11.done) break;
_ref9 = _i11.value;
}
if (item1 === _ref9) return !0;
}
}
}
function getDistanceFromTop() {
for (var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, distance = 0; win; ) (win = getParent(win)) && (distance += 1);
return distance;
}
function getNthParent(win) {
for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = 0; i < n; i++) win = getParent(win);
return win;
}
function getNthParentFromTop(win) {
var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
return getNthParent(win, getDistanceFromTop(win) - n);
}
function isSameTopWindow(win1, win2) {
var top1 = getTop(win1), top2 = getTop(win2);
try {
if (top1 && top2) return top1 === top2;
} catch (err) {}
var allFrames1 = getAllFramesInWindow(win1), allFrames2 = getAllFramesInWindow(win2);
if (anyMatch(allFrames1, allFrames2)) return !0;
var opener1 = getOpener(top1), opener2 = getOpener(top2);
return (!opener1 || !anyMatch(getAllFramesInWindow(opener1), allFrames2)) && ((!opener2 || !anyMatch(getAllFramesInWindow(opener2), allFrames1)) && void 0);
}
function matchDomain(pattern, origin) {
if ("string" == typeof pattern) {
if ("string" == typeof origin) return pattern === CONSTANTS.WILDCARD || origin === pattern;
if ((0, _util.isRegex)(origin)) return !1;
if (Array.isArray(origin)) return !1;
}
return (0, _util.isRegex)(pattern) ? (0, _util.isRegex)(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !(0,
_util.isRegex)(origin) && pattern.some(function(subpattern) {
return matchDomain(subpattern, origin);
}));
}
function getDomainFromUrl(url) {
var domain = void 0;
return url.match(/^(https?|mock|file):\/\//) ? (domain = url, domain = domain.split("/").slice(0, 3).join("/")) : getDomain();
}
function onCloseWindow(win, callback) {
var delay = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, maxtime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0, timeout = void 0;
return function check() {
if (isWindowClosed(win)) return timeout && clearTimeout(timeout), callback();
maxtime <= 0 ? clearTimeout(timeout) : (maxtime -= delay, timeout = setTimeout(check, delay));
}(), {
cancel: function() {
timeout && clearTimeout(timeout);
}
};
}
function isWindow(obj) {
try {
if (obj && obj.self === obj) return !0;
} catch (err) {}
return !1;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.getActualDomain = getActualDomain, exports.getDomain = getDomain, exports.isBlankDomain = isBlankDomain,
exports.isActuallySameDomain = isActuallySameDomain, exports.isSameDomain = isSameDomain,
exports.getParent = getParent, exports.getOpener = getOpener, exports.getParents = getParents,
exports.isAncestorParent = isAncestorParent, exports.getFrames = getFrames, exports.getAllChildFrames = getAllChildFrames,
exports.getTop = getTop, exports.getAllFramesInWindow = getAllFramesInWindow, exports.isTop = isTop,
exports.isFrameWindowClosed = isFrameWindowClosed, exports.isWindowClosed = isWindowClosed,
exports.linkFrameWindow = linkFrameWindow, exports.getUserAgent = getUserAgent,
exports.getFrameByName = getFrameByName, exports.findChildFrameByName = findChildFrameByName,
exports.findFrameByName = findFrameByName, exports.isParent = isParent, exports.isOpener = isOpener,
exports.getAncestor = getAncestor, exports.getAncestors = getAncestors, exports.isAncestor = isAncestor,
exports.isPopup = isPopup, exports.isIframe = isIframe, exports.isFullpage = isFullpage,
exports.getDistanceFromTop = getDistanceFromTop, exports.getNthParent = getNthParent,
exports.getNthParentFromTop = getNthParentFromTop, exports.isSameTopWindow = isSameTopWindow,
exports.matchDomain = matchDomain, exports.getDomainFromUrl = getDomainFromUrl,
exports.onCloseWindow = onCloseWindow, exports.isWindow = isWindow;
var _util = __webpack_require__(19), CONSTANTS = {
MOCK_PROTOCOL: "mock:",
FILE_PROTOCOL: "file:",
WILDCARD: "*"
}, iframeWindows = [], iframeFrames = [];
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _promise = __webpack_require__(21);
Object.defineProperty(exports, "ZalgoPromise", {
enumerable: !0,
get: function() {
return _promise.ZalgoPromise;
}
});
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.global = void 0;
var _conf = __webpack_require__(0);
(exports.global = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] = window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] || {}).registerSelf = function() {};
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _util = __webpack_require__(8);
Object.keys(_util).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _util[key];
}
});
});
var _log = __webpack_require__(11);
Object.keys(_log).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _log[key];
}
});
});
var _serialize = __webpack_require__(35);
Object.keys(_serialize).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _serialize[key];
}
});
});
var _ready = __webpack_require__(34);
Object.keys(_ready).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _ready[key];
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _interface = __webpack_require__(16);
Object.keys(_interface).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _interface[key];
}
});
});
var INTERFACE = function(obj) {
if (obj && obj.__esModule) return obj;
var newObj = {};
if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
return newObj.default = obj, newObj;
}(_interface);
exports.default = INTERFACE;
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _receive = __webpack_require__(30);
Object.keys(_receive).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _receive[key];
}
});
});
var _send = __webpack_require__(15);
Object.keys(_send).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _send[key];
}
});
});
var _listeners = __webpack_require__(14);
Object.keys(_listeners).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _listeners[key];
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
function init() {
_global.global.initialized || ((0, _drivers.listenForMessages)(), __webpack_require__(10).openTunnelToOpener(),
(0, _lib.initOnReady)(), (0, _lib.listenForMethods)()), _global.global.initialized = !0;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.Promise = exports.cleanUpWindow = void 0;
var _clean = __webpack_require__(27);
Object.defineProperty(exports, "cleanUpWindow", {
enumerable: !0,
get: function() {
return _clean.cleanUpWindow;
}
}), exports.init = init;
var _public = __webpack_require__(38);
Object.keys(_public).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _public[key];
}
});
});
var _src = __webpack_require__(2);
Object.defineProperty(exports, "Promise", {
enumerable: !0,
get: function() {
return _src.ZalgoPromise;
}
});
var _lib = __webpack_require__(4), _drivers = __webpack_require__(6), _global = __webpack_require__(3);
init();
}, function(module, exports, __webpack_require__) {
"use strict";
function stringifyError(err) {
if (!err) return "<unknown error: " + Object.prototype.toString.call(err) + ">";
if ("string" == typeof err) return err;
if (err instanceof Error) {
var stack = err && err.stack, message = err && err.message;
if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
if (stack) return stack;
if (message) return message;
}
return "function" == typeof err.toString ? err.toString() : Object.prototype.toString.call(err);
}
function noop() {}
function addEventListener(obj, event, handler) {
return obj.addEventListener ? obj.addEventListener(event, handler) : obj.attachEvent("on" + event, handler),
{
cancel: function() {
obj.removeEventListener ? obj.removeEventListener(event, handler) : obj.detachEvent("on" + event, handler);
}
};
}
function uniqueID() {
var chars = "0123456789abcdef";
return "xxxxxxxxxx".replace(/./g, function() {
return chars.charAt(Math.floor(Math.random() * chars.length));
});
}
function eachArray(item, callback) {
for (var i = 0; i < item.length; i++) callback(item[i], i);
}
function eachObject(item, callback) {
for (var _key in item) item.hasOwnProperty(_key) && callback(item[_key], _key);
}
function each(item, callback) {
Array.isArray(item) ? eachArray(item, callback) : "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item && eachObject(item, callback);
}
function replaceObject(item, callback) {
var depth = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
if (depth >= 100) throw new Error("Self-referential object passed, or object contained too many layers");
var newobj = void 0;
if ("object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item || Array.isArray(item)) {
if (!Array.isArray(item)) throw new Error("Invalid type: " + (void 0 === item ? "undefined" : _typeof(item)));
newobj = [];
} else newobj = {};
return each(item, function(childItem, key) {
var result = callback(childItem, key);
void 0 !== result ? newobj[key] = result : "object" === (void 0 === childItem ? "undefined" : _typeof(childItem)) && null !== childItem ? newobj[key] = replaceObject(childItem, callback, depth + 1) : newobj[key] = childItem;
}), newobj;
}
function safeInterval(method, time) {
function runInterval() {
timeout = setTimeout(runInterval, time), method.call();
}
var timeout = void 0;
return timeout = setTimeout(runInterval, time), {
cancel: function() {
clearTimeout(timeout);
}
};
}
function isRegex(item) {
return "[object RegExp]" === Object.prototype.toString.call(item);
}
function getWindowType() {
return (0, _src2.isPopup)() ? _conf.CONSTANTS.WINDOW_TYPES.POPUP : (0, _src2.isIframe)() ? _conf.CONSTANTS.WINDOW_TYPES.IFRAME : _conf.CONSTANTS.WINDOW_TYPES.FULLPAGE;
}
function jsonStringify(obj, replacer, indent) {
var objectToJSON = void 0, arrayToJSON = void 0;
try {
if ("{}" !== JSON.stringify({}) && (objectToJSON = Object.prototype.toJSON, delete Object.prototype.toJSON),
"{}" !== JSON.stringify({})) throw new Error("Can not correctly serialize JSON objects");
if ("[]" !== JSON.stringify([]) && (arrayToJSON = Array.prototype.toJSON, delete Array.prototype.toJSON),
"[]" !== JSON.stringify([])) throw new Error("Can not correctly serialize JSON objects");
} catch (err) {
throw new Error("Can not repair JSON.stringify: " + err.message);
}
var result = JSON.stringify.call(this, obj, replacer, indent);
try {
objectToJSON && (Object.prototype.toJSON = objectToJSON), arrayToJSON && (Array.prototype.toJSON = arrayToJSON);
} catch (err) {
throw new Error("Can not repair JSON.stringify: " + err.message);
}
return result;
}
function jsonParse(item) {
return JSON.parse(item);
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.weakMapMemoize = exports.once = void 0;
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
return typeof obj;
} : function(obj) {
return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports.stringifyError = stringifyError, exports.noop = noop, exports.addEventListener = addEventListener,
exports.uniqueID = uniqueID, exports.eachArray = eachArray, exports.eachObject = eachObject,
exports.each = each, exports.replaceObject = replaceObject, exports.safeInterval = safeInterval,
exports.isRegex = isRegex, exports.getWindowType = getWindowType, exports.jsonStringify = jsonStringify,
exports.jsonParse = jsonParse;
var _src = __webpack_require__(5), _src2 = __webpack_require__(1), _conf = __webpack_require__(0);
exports.once = function(method) {
if (!method) return method;
var called = !1;
return function() {
if (!called) return called = !0, method.apply(this, arguments);
};
}, exports.weakMapMemoize = function(method) {
var weakmap = new _src.WeakMap();
return function(arg) {
var result = weakmap.get(arg);
return void 0 !== result ? result : (result = method.call(this, arg), void 0 !== result && weakmap.set(arg, result),
result);
};
};
}, function(module, exports, __webpack_require__) {
"use strict";
function needsBridgeForBrowser() {
return !!(0, _src3.getUserAgent)(window).match(/MSIE|trident|edge/i) || !_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP;
}
function needsBridgeForWin(win) {
return !(0, _src3.isSameTopWindow)(window, win);
}
function needsBridgeForDomain(domain, win) {
if (domain) {
if ((0, _src3.getDomain)() !== (0, _src3.getDomainFromUrl)(domain)) return !0;
} else if (win && !(0, _src3.isSameDomain)(win)) return !0;
return !1;
}
function needsBridge(_ref) {
var win = _ref.win, domain = _ref.domain;
return !!needsBridgeForBrowser() && (!(domain && !needsBridgeForDomain(domain, win)) && !(win && !needsBridgeForWin(win)));
}
function getBridgeName(domain) {
domain = domain || (0, _src3.getDomainFromUrl)(domain);
var sanitizedDomain = domain.replace(/[^a-zA-Z0-9]+/g, "_");
return _conf.CONSTANTS.BRIDGE_NAME_PREFIX + "_" + sanitizedDomain;
}
function isBridge() {
return Boolean(window.name && window.name === getBridgeName((0, _src3.getDomain)()));
}
function registerRemoteWindow(win) {
arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _conf.CONFIG.BRIDGE_TIMEOUT;
_global.global.remoteWindows.set(win, {
sendMessagePromise: new _src2.ZalgoPromise()
});
}
function findRemoteWindow(win) {
return _global.global.remoteWindows.get(win);
}
function registerRemoteSendMessage(win, domain, sendMessage) {
var remoteWindow = findRemoteWindow(win);
if (!remoteWindow) throw new Error("Window not found to register sendMessage to");
var sendMessageWrapper = function(remoteWin, message, remoteDomain) {
if (remoteWin !== win) throw new Error("Remote window does not match window");
if (!(0, _src3.matchDomain)(remoteDomain, domain)) throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
sendMessage(message);
};
remoteWindow.sendMessagePromise.resolve(sendMessageWrapper), remoteWindow.sendMessagePromise = _src2.ZalgoPromise.resolve(sendMessageWrapper);
}
function rejectRemoteSendMessage(win, err) {
var remoteWindow = findRemoteWindow(win);
if (!remoteWindow) throw new Error("Window not found on which to reject sendMessage");
remoteWindow.sendMessagePromise.asyncReject(err);
}
function sendBridgeMessage(win, message, domain) {
var messagingChild = (0, _src3.isOpener)(window, win), messagingParent = (0, _src3.isOpener)(win, window);
if (!messagingChild && !messagingParent) throw new Error("Can only send messages to and from parent and popup windows");
var remoteWindow = findRemoteWindow(win);
if (!remoteWindow) throw new Error("Window not found to send message to");
return remoteWindow.sendMessagePromise.then(function(sendMessage) {
return sendMessage(win, message, domain);
});
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.documentBodyReady = void 0, exports.needsBridgeForBrowser = needsBridgeForBrowser,
exports.needsBridgeForWin = needsBridgeForWin, exports.needsBridgeForDomain = needsBridgeForDomain,
exports.needsBridge = needsBridge, exports.getBridgeName = getBridgeName, exports.isBridge = isBridge,
exports.registerRemoteWindow = registerRemoteWindow, exports.findRemoteWindow = findRemoteWindow,
exports.registerRemoteSendMessage = registerRemoteSendMessage, exports.rejectRemoteSendMessage = rejectRemoteSendMessage,
exports.sendBridgeMessage = sendBridgeMessage;
var _src = __webpack_require__(5), _src2 = __webpack_require__(2), _src3 = __webpack_require__(1), _conf = __webpack_require__(0), _global = __webpack_require__(3), _drivers = __webpack_require__(6);
exports.documentBodyReady = new _src2.ZalgoPromise(function(resolve) {
if (window.document && window.document.body) return resolve(window.document.body);
var interval = setInterval(function() {
if (window.document && window.document.body) return clearInterval(interval), resolve(window.document.body);
}, 10);
});
_global.global.remoteWindows = _global.global.remoteWindows || new _src.WeakMap(),
_global.global.receiveMessage = function(event) {
(0, _drivers.receiveMessage)(event);
};
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _bridge = __webpack_require__(23);
Object.keys(_bridge).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _bridge[key];
}
});
});
var _child = __webpack_require__(24);
Object.keys(_child).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _child[key];
}
});
});
var _common = __webpack_require__(9);
Object.keys(_common).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _common[key];
}
});
});
var _parent = __webpack_require__(26);
Object.keys(_parent).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _parent[key];
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.log = void 0;
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
return typeof obj;
} : function(obj) {
return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
}, _util = __webpack_require__(8), _conf = __webpack_require__(0), LOG_LEVELS = [ "debug", "info", "warn", "error" ];
Function.prototype.bind && window.console && "object" === _typeof(console.log) && [ "log", "info", "warn", "error" ].forEach(function(method) {
console[method] = this.bind(console[method], console);
}, Function.prototype.call);
var log = exports.log = {
clearLogs: function() {
if (window.console && window.console.clear && window.console.clear(), _conf.CONFIG.LOG_TO_PAGE) {
var container = document.getElementById("postRobotLogs");
container && container.parentNode && container.parentNode.removeChild(container);
}
},
writeToPage: function(level, args) {
setTimeout(function() {
var container = document.getElementById("postRobotLogs");
container || (container = document.createElement("div"), container.id = "postRobotLogs",
container.style.cssText = "width: 800px; font-family: monospace; white-space: pre-wrap;",
document.body && document.body.appendChild(container));
var el = document.createElement("div"), date = new Date().toString().split(" ")[4], payload = Array.prototype.slice.call(args).map(function(item) {
if ("string" == typeof item) return item;
if (!item) return Object.prototype.toString.call(item);
var json = void 0;
try {
json = (0, _util.jsonStringify)(item, null, 2);
} catch (e) {
json = "[object]";
}
return "\n\n" + json + "\n\n";
}).join(" "), msg = date + " " + level + " " + payload;
el.innerHTML = msg;
var color = {
log: "#ddd",
warn: "orange",
error: "red",
info: "blue",
debug: "#aaa"
}[level];
el.style.cssText = "margin-top: 10px; color: " + color + ";", container.childNodes.length ? container.insertBefore(el, container.childNodes[0]) : container.appendChild(el);
});
},
logLevel: function(level, args) {
setTimeout(function() {
try {
var logLevel = window.LOG_LEVEL || _conf.CONFIG.LOG_LEVEL;
if (LOG_LEVELS.indexOf(level) < LOG_LEVELS.indexOf(logLevel)) return;
if (args = Array.prototype.slice.call(args), args.unshift("" + window.location.host + window.location.pathname),
args.unshift("::"), args.unshift("" + (0, _util.getWindowType)().toLowerCase()),
args.unshift("[post-robot]"), _conf.CONFIG.LOG_TO_PAGE && log.writeToPage(level, args),
!window.console) return;
if (window.console[level] || (level = "log"), !window.console[level]) return;
window.console[level].apply(window.console, args);
} catch (err) {}
}, 1);
},
debug: function() {
for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
log.logLevel("debug", args);
},
info: function() {
for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
log.logLevel("info", args);
},
warn: function() {
for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
log.logLevel("warn", args);
},
error: function() {
for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
log.logLevel("error", args);
}
};
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _ie = __webpack_require__(28);
Object.keys(_ie).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _ie[key];
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var CONSTANTS = exports.CONSTANTS = {
POST_MESSAGE_TYPE: {
REQUEST: "postrobot_message_request",
RESPONSE: "postrobot_message_response",
ACK: "postrobot_message_ack"
},
POST_MESSAGE_ACK: {
SUCCESS: "success",
ERROR: "error"
},
POST_MESSAGE_NAMES: {
METHOD: "postrobot_method",
READY: "postrobot_ready",
OPEN_TUNNEL: "postrobot_open_tunnel"
},
WINDOW_TYPES: {
FULLPAGE: "fullpage",
POPUP: "popup",
IFRAME: "iframe"
},
WINDOW_PROPS: {
POSTROBOT: "__postRobot__"
},
SERIALIZATION_TYPES: {
METHOD: "postrobot_method",
ERROR: "postrobot_error",
PROMISE: "postrobot_promise",
ZALGO_PROMISE: "postrobot_zalgo_promise",
REGEX: "regex"
},
SEND_STRATEGIES: {
POST_MESSAGE: "postrobot_post_message",
BRIDGE: "postrobot_bridge",
GLOBAL: "postrobot_global"
},
MOCK_PROTOCOL: "mock:",
FILE_PROTOCOL: "file:",
BRIDGE_NAME_PREFIX: "__postrobot_bridge__",
POSTROBOT_PROXY: "__postrobot_proxy__",
WILDCARD: "*"
};
exports.POST_MESSAGE_NAMES_LIST = Object.keys(CONSTANTS.POST_MESSAGE_NAMES).map(function(key) {
return CONSTANTS.POST_MESSAGE_NAMES[key];
});
}, function(module, exports, __webpack_require__) {
"use strict";
function resetListeners() {
_global.global.responseListeners = {}, _global.global.requestListeners = {};
}
function addResponseListener(hash, listener) {
_global.global.responseListeners[hash] = listener;
}
function getResponseListener(hash) {
return _global.global.responseListeners[hash];
}
function deleteResponseListener(hash) {
delete _global.global.responseListeners[hash];
}
function getRequestListener(_ref) {
var name = _ref.name, win = _ref.win, domain = _ref.domain;
if (win === _conf.CONSTANTS.WILDCARD && (win = null), domain === _conf.CONSTANTS.WILDCARD && (domain = null),
!name) throw new Error("Name required to get request listener");
var nameListeners = _global.global.requestListeners[name];
if (nameListeners) for (var _arr = [ win, _global.global.WINDOW_WILDCARD ], _i = 0; _i < _arr.length; _i++) {
var winQualifier = _arr[_i], winListeners = winQualifier && nameListeners.get(winQualifier);
if (winListeners) {
for (var _arr2 = [ domain, _conf.CONSTANTS.WILDCARD ], _i2 = 0; _i2 < _arr2.length; _i2++) {
var domainQualifier = _arr2[_i2];
if (domainQualifier && (domainQualifier = domainQualifier.toString(), winListeners[domainQualifier])) return winListeners[domainQualifier];
}
if (winListeners[__DOMAIN_REGEX__]) for (var _iterator = winListeners[__DOMAIN_REGEX__], _isArray = Array.isArray(_iterator), _i3 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref3;
if (_isArray) {
if (_i3 >= _iterator.length) break;
_ref3 = _iterator[_i3++];
} else {
if (_i3 = _iterator.next(), _i3.done) break;
_ref3 = _i3.value;
}
var _ref4 = _ref3, regex = _ref4.regex, listener = _ref4.listener;
if ((0, _src2.matchDomain)(regex, domain)) return listener;
}
}
}
}
function addRequestListener(_ref5, listener) {
var name = _ref5.name, win = _ref5.win, domain = _ref5.domain;
if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
if (Array.isArray(win)) {
for (var listenersCollection = [], _iterator2 = win, _isArray2 = Array.isArray(_iterator2), _i4 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator](); ;) {
var _ref6;
if (_isArray2) {
if (_i4 >= _iterator2.length) break;
_ref6 = _iterator2[_i4++];
} else {
if (_i4 = _iterator2.next(), _i4.done) break;
_ref6 = _i4.value;
}
var item = _ref6;
listenersCollection.push(addRequestListener({
name: name,
domain: domain,
win: item
}, listener));
}
return {
cancel: function() {
for (var _iterator3 = listenersCollection, _isArray3 = Array.isArray(_iterator3), _i5 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator](); ;) {
var _ref7;
if (_isArray3) {
if (_i5 >= _iterator3.length) break;
_ref7 = _iterator3[_i5++];
} else {
if (_i5 = _iterator3.next(), _i5.done) break;
_ref7 = _i5.value;
}
_ref7.cancel();
}
}
};
}
if (Array.isArray(domain)) {
for (var _listenersCollection = [], _iterator4 = domain, _isArray4 = Array.isArray(_iterator4), _i6 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator](); ;) {
var _ref8;
if (_isArray4) {
if (_i6 >= _iterator4.length) break;
_ref8 = _iterator4[_i6++];
} else {
if (_i6 = _iterator4.next(), _i6.done) break;
_ref8 = _i6.value;
}
var _item = _ref8;
_listenersCollection.push(addRequestListener({
name: name,
win: win,
domain: _item
}, listener));
}
return {
cancel: function() {
for (var _iterator5 = _listenersCollection, _isArray5 = Array.isArray(_iterator5), _i7 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator](); ;) {
var _ref9;
if (_isArray5) {
if (_i7 >= _iterator5.length) break;
_ref9 = _iterator5[_i7++];
} else {
if (_i7 = _iterator5.next(), _i7.done) break;
_ref9 = _i7.value;
}
_ref9.cancel();
}
}
};
}
var existingListener = getRequestListener({
name: name,
win: win,
domain: domain
});
if (win && win !== _conf.CONSTANTS.WILDCARD || (win = _global.global.WINDOW_WILDCARD),
domain = domain || _conf.CONSTANTS.WILDCARD, existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for specified window") : win ? new Error("Request listener already exists for " + name + " for specified window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
var requestListeners = _global.global.requestListeners, nameListeners = requestListeners[name];
nameListeners || (nameListeners = new _src.WeakMap(), requestListeners[name] = nameListeners);
var winListeners = nameListeners.get(win);
winListeners || (winListeners = {}, nameListeners.set(win, winListeners));
var strDomain = domain.toString();
winListeners[strDomain] = listener;
var regexListeners = winListeners[__DOMAIN_REGEX__], regexListener = void 0;
return (0, _lib.isRegex)(domain) && (regexListeners || (regexListeners = [], winListeners[__DOMAIN_REGEX__] = regexListeners),
regexListener = {
regex: domain,
listener: listener
}, regexListeners.push(regexListener)), {
cancel: function() {
winListeners && (delete winListeners[strDomain], win && 0 === Object.keys(winListeners).length && nameListeners.delete(win),
regexListener && regexListeners.splice(regexListeners.indexOf(regexListener, 1)));
}
};
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.resetListeners = resetListeners, exports.addResponseListener = addResponseListener,
exports.getResponseListener = getResponseListener, exports.deleteResponseListener = deleteResponseListener,
exports.getRequestListener = getRequestListener, exports.addRequestListener = addRequestListener,
__webpack_require__(2);
var _src = __webpack_require__(5), _src2 = __webpack_require__(1), _global = __webpack_require__(3), _lib = __webpack_require__(4), _conf = __webpack_require__(0);
_global.global.responseListeners = _global.global.responseListeners || {}, _global.global.requestListeners = _global.global.requestListeners || {},
_global.global.WINDOW_WILDCARD = _global.global.WINDOW_WILDCARD || new function() {}();
var __DOMAIN_REGEX__ = "__domain_regex__";
}, function(module, exports, __webpack_require__) {
"use strict";
function _defineProperty(obj, key, value) {
return key in obj ? Object.defineProperty(obj, key, {
value: value,
enumerable: !0,
configurable: !0,
writable: !0
}) : obj[key] = value, obj;
}
function buildMessage(win, message) {
var options = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, id = (0,
_lib.uniqueID)(), type = (0, _lib.getWindowType)(), sourceDomain = (0, _src.getDomain)(window);
return _extends({}, message, options, {
sourceDomain: sourceDomain,
id: message.id || id,
windowType: type
});
}
function sendMessage(win, message, domain) {
return _src2.ZalgoPromise.try(function() {
message = buildMessage(win, message, {
data: (0, _lib.serializeMethods)(win, domain, message.data),
domain: domain
});
var level = void 0;
if (level = -1 !== _conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK ? "debug" : "error" === message.ack ? "error" : "info",
_lib.log.logLevel(level, [ "\n\n\t", "#send", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", domain || _conf.CONSTANTS.WILDCARD, "\n\n", message ]),
win === window) throw new Error("Attemping to send message to self");
if ((0, _src.isWindowClosed)(win)) throw new Error("Window is closed");
_lib.log.debug("Running send message strategies", message);
var messages = [], serializedMessage = (0, _lib.jsonStringify)(_defineProperty({}, _conf.CONSTANTS.WINDOW_PROPS.POSTROBOT, message), null, 2);
return _src2.ZalgoPromise.map(Object.keys(_strategies.SEND_MESSAGE_STRATEGIES), function(strategyName) {
return _src2.ZalgoPromise.try(function() {
if (!_conf.CONFIG.ALLOWED_POST_MESSAGE_METHODS[strategyName]) throw new Error("Strategy disallowed: " + strategyName);
return _strategies.SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
}).then(function() {
return messages.push(strategyName + ": success"), !0;
}, function(err) {
return messages.push(strategyName + ": " + (0, _lib.stringifyError)(err) + "\n"),
!1;
});
}).then(function(results) {
var success = results.some(Boolean), status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
if (_lib.log.debug(status), !success) throw new Error(status);
});
});
}
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _extends = Object.assign || function(target) {
for (var i = 1; i < arguments.length; i++) {
var source = arguments[i];
for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
}
return target;
};
exports.sendMessage = sendMessage;
var _src = __webpack_require__(1), _src2 = __webpack_require__(2), _conf = __webpack_require__(0), _lib = __webpack_require__(4), _strategies = __webpack_require__(32);
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _weakmap = __webpack_require__(18);
Object.defineProperty(exports, "WeakMap", {
enumerable: !0,
get: function() {
return _weakmap.CrossDomainSafeWeakMap;
}
});
}, function(module, exports, __webpack_require__) {
"use strict";
function hasNativeWeakMap() {
if (!window.WeakMap) return !1;
if (!window.Object.freeze) return !1;
try {
var testWeakMap = new window.WeakMap(), testKey = {};
return window.Object.freeze(testKey), testWeakMap.set(testKey, "__testvalue__"),
"__testvalue__" === testWeakMap.get(testKey);
} catch (err) {
return !1;
}
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.hasNativeWeakMap = hasNativeWeakMap;
}, function(module, exports, __webpack_require__) {
"use strict";
function _classCallCheck(instance, Constructor) {
if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.CrossDomainSafeWeakMap = void 0;
var _createClass = function() {
function defineProperties(target, props) {
for (var i = 0; i < props.length; i++) {
var descriptor = props[i];
descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0,
"value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
}
}
return function(Constructor, protoProps, staticProps) {
return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps),
Constructor;
};
}(), _src = __webpack_require__(1), _native = __webpack_require__(17), defineProperty = Object.defineProperty, counter = Date.now() % 1e9;
exports.CrossDomainSafeWeakMap = function() {
function CrossDomainSafeWeakMap() {
if (_classCallCheck(this, CrossDomainSafeWeakMap), counter += 1, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + counter,
(0, _native.hasNativeWeakMap)()) try {
this.weakmap = new window.WeakMap();
} catch (err) {}
this.keys = [], this.values = [];
}
return _createClass(CrossDomainSafeWeakMap, [ {
key: "_cleanupClosedWindows",
value: function() {
for (var weakmap = this.weakmap, keys = this.keys, i = 0; i < keys.length; i++) {
var value = keys[i];
if ((0, _src.isWindowClosed)(value)) {
if (weakmap) try {
weakmap.delete(value);
} catch (err) {}
keys.splice(i, 1), this.values.splice(i, 1), i -= 1;
}
}
}
}, {
key: "isSafeToReadWrite",
value: function(key) {
if ((0, _src.isWindow)(key)) return !1;
try {
key && key.self, key && key[this.name];
} catch (err) {
return !1;
}
return !0;
}
}, {
key: "set",
value: function(key, value) {
if (!key) throw new Error("WeakMap expected key");
var weakmap = this.weakmap;
if (weakmap) try {
weakmap.set(key, value);
} catch (err) {
delete this.weakmap;
}
if (this.isSafeToReadWrite(key)) {
var name = this.name, entry = key[name];
entry && entry[0] === key ? entry[1] = value : defineProperty(key, name, {
value: [ key, value ],
writable: !0
});
} else {
this._cleanupClosedWindows();
var keys = this.keys, values = this.values, index = keys.indexOf(key);
-1 === index ? (keys.push(key), values.push(value)) : values[index] = value;
}
}
}, {
key: "get",
value: function(key) {
if (!key) throw new Error("WeakMap expected key");
var weakmap = this.weakmap;
if (weakmap) try {
if (weakmap.has(key)) return weakmap.get(key);
} catch (err) {
delete this.weakmap;
}
if (!this.isSafeToReadWrite(key)) {
this._cleanupClosedWindows();
var keys = this.keys, index = keys.indexOf(key);
if (-1 === index) return;
return this.values[index];
}
var entry = key[this.name];
if (entry && entry[0] === key) return entry[1];
}
}, {
key: "delete",
value: function(key) {
if (!key) throw new Error("WeakMap expected key");
var weakmap = this.weakmap;
if (weakmap) try {
weakmap.delete(key);
} catch (err) {
delete this.weakmap;
}
if (this.isSafeToReadWrite(key)) {
var entry = key[this.name];
entry && entry[0] === key && (entry[0] = entry[1] = void 0);
} else {
this._cleanupClosedWindows();
var keys = this.keys, index = keys.indexOf(key);
-1 !== index && (keys.splice(index, 1), this.values.splice(index, 1));
}
}
}, {
key: "has",
value: function(key) {
if (!key) throw new Error("WeakMap expected key");
var weakmap = this.weakmap;
if (weakmap) try {
return weakmap.has(key);
} catch (err) {
delete this.weakmap;
}
if (this.isSafeToReadWrite(key)) {
var entry = key[this.name];
return !(!entry || entry[0] !== key);
}
return this._cleanupClosedWindows(), -1 !== this.keys.indexOf(key);
}
} ]), CrossDomainSafeWeakMap;
}();
}, function(module, exports, __webpack_require__) {
"use strict";
function isRegex(item) {
return "[object RegExp]" === Object.prototype.toString.call(item);
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.isRegex = isRegex;
}, function(module, exports, __webpack_require__) {
"use strict";
function dispatchPossiblyUnhandledError(err) {
if (-1 === dispatchedErrors.indexOf(err)) {
dispatchedErrors.push(err), setTimeout(function() {
throw err;
}, 1);
for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err);
}
}
function onPossiblyUnhandledException(handler) {
return possiblyUnhandledPromiseHandlers.push(handler), {
cancel: function() {
possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
}
};
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.dispatchPossiblyUnhandledError = dispatchPossiblyUnhandledError, exports.onPossiblyUnhandledException = onPossiblyUnhandledException;
var possiblyUnhandledPromiseHandlers = [], dispatchedErrors = [];
}, function(module, exports, __webpack_require__) {
"use strict";
function _classCallCheck(instance, Constructor) {
if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.ZalgoPromise = void 0;
var _createClass = function() {
function defineProperties(target, props) {
for (var i = 0; i < props.length; i++) {
var descriptor = props[i];
descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0,
"value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
}
}
return function(Constructor, protoProps, staticProps) {
return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps),
Constructor;
};
}(), _utils = __webpack_require__(22), _exceptions = __webpack_require__(20), ZalgoPromise = function() {
function ZalgoPromise(handler) {
var _this = this;
if (_classCallCheck(this, ZalgoPromise), this.resolved = !1, this.rejected = !1,
this.errorHandled = !1, this.handlers = [], handler) {
var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
try {
handler(function(res) {
isAsync ? _this.resolve(res) : (resolved = !0, _result = res);
}, function(err) {
isAsync ? _this.reject(err) : (rejected = !0, _error = err);
});
} catch (err) {
return void this.reject(err);
}
isAsync = !0, resolved ? this.resolve(_result) : rejected && this.reject(_error);
}
}
return _createClass(ZalgoPromise, [ {
key: "resolve",
value: function(result) {
if (this.resolved || this.rejected) return this;
if ((0, _utils.isPromise)(result)) throw new Error("Can not resolve promise with another promise");
return this.resolved = !0, this.value = result, this.dispatch(), this;
}
}, {
key: "reject",
value: function(error) {
var _this2 = this;
if (this.resolved || this.rejected) return this;
if ((0, _utils.isPromise)(error)) throw new Error("Can not reject promise with another promise");
if (!error) {
var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
error = new Error("Expected reject to be called with Error, got " + _err);
}
return this.rejected = !0, this.error = error, this.errorHandled || setTimeout(function() {
_this2.errorHandled || (0, _exceptions.dispatchPossiblyUnhandledError)(error);
}, 1), this.dispatch(), this;
}
}, {
key: "asyncReject",
value: function(error) {
this.errorHandled = !0, this.reject(error);
}
}, {
key: "dispatch",
value: function() {
var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
if (!dispatching && (resolved || rejected)) {
this.dispatching = !0;
for (var i = 0; i < handlers.length; i++) {
(function(i) {
var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
if (resolved) try {
result = onSuccess ? onSuccess(_this3.value) : _this3.value;
} catch (err) {
return promise.reject(err), "continue";
} else if (rejected) {
if (!onError) return promise.reject(_this3.error), "continue";
try {
result = onError(_this3.error);
} catch (err) {
return promise.reject(err), "continue";
}
}
result instanceof ZalgoPromise && (result.resolved || result.rejected) ? (result.resolved ? promise.resolve(result.value) : promise.reject(result.error),
result.errorHandled = !0) : (0, _utils.isPromise)(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
promise.resolve(res);
}, function(err) {
promise.reject(err);
}) : promise.resolve(result);
})(i);
}
handlers.length = 0, this.dispatching = !1;
}
}
}, {
key: "then",
value: function(onSuccess, onError) {
if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
var promise = new ZalgoPromise();
return this.handlers.push({
promise: promise,
onSuccess: onSuccess,
onError: onError
}), this.errorHandled = !0, this.dispatch(), promise;
}
}, {
key: "catch",
value: function(onError) {
return this.then(void 0, onError);
}
}, {
key: "finally",
value: function(handler) {
return this.then(function(result) {
return ZalgoPromise.try(handler).then(function() {
return result;
});
}, function(err) {
return ZalgoPromise.try(handler).then(function() {
throw err;
});
});
}
}, {
key: "timeout",
value: function(time, err) {
var _this4 = this;
if (this.resolved || this.rejected) return this;
var timeout = setTimeout(function() {
_this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
}, time);
return this.then(function(result) {
return clearTimeout(timeout), result;
});
}
}, {
key: "toPromise",
value: function() {
if (!window.Promise) throw new Error("Could not find window.Promise");
return window.Promise.resolve(this);
}
} ], [ {
key: "resolve",
value: function(value) {
return value instanceof ZalgoPromise ? value : (0, _utils.isPromise)(value) ? new ZalgoPromise(function(resolve, reject) {
return value.then(resolve, reject);
}) : new ZalgoPromise().resolve(value);
}
}, {
key: "reject",
value: function(error) {
return new ZalgoPromise().reject(error);
}
}, {
key: "all",
value: function(promises) {
var promise = new ZalgoPromise(), count = promises.length, results = [];
if (!count) return promise.resolve(results), promise;
for (var i = 0; i < promises.length; i++) !function(i) {
ZalgoPromise.resolve(promises[i]).then(function(result) {
results[i] = result, 0 === (count -= 1) && promise.resolve(results);
}, function(err) {
promise.reject(err);
});
}(i);
return promise;
}
}, {
key: "map",
value: function(promises, method) {
var promise = new ZalgoPromise(), count = promises.length, results = [];
if (!count) return promise.resolve(results), promise;
for (var i = 0; i < promises.length; i++) !function(i) {
ZalgoPromise.try(function() {
return method(promises[i]);
}).then(function(result) {
results[i] = result, 0 === (count -= 1) && promise.resolve(results);
}, function(err) {
promise.reject(err);
});
}(i);
return promise;
}
}, {
key: "onPossiblyUnhandledException",
value: function(handler) {
return (0, _exceptions.onPossiblyUnhandledException)(handler);
}
}, {
key: "try",
value: function(method, context, args) {
var result = void 0;
try {
result = method.apply(context, args || []);
} catch (err) {
return ZalgoPromise.reject(err);
}
return ZalgoPromise.resolve(result);
}
}, {
key: "delay",
value: function(_delay) {
return new ZalgoPromise(function(resolve) {
setTimeout(resolve, _delay);
});
}
}, {
key: "hash",
value: function(obj) {
var results = {}, promises = [];
for (var key in obj) !function(key) {
obj.hasOwnProperty(key) && promises.push(ZalgoPromise.resolve(obj[key]).then(function(result) {
results[key] = result;
}));
}(key);
return ZalgoPromise.all(promises).then(function() {
return results;
});
}
}, {
key: "isPromise",
value: function(value) {
return !!(value && value instanceof ZalgoPromise) || (0, _utils.isPromise)(value);
}
} ]), ZalgoPromise;
}();
exports.ZalgoPromise = ZalgoPromise;
}, function(module, exports, __webpack_require__) {
"use strict";
function isPromise(item) {
try {
if (!item) return !1;
if (window.Promise && item instanceof window.Promise) return !0;
if (window.Window && item instanceof window.Window) return !1;
if (window.constructor && item instanceof window.constructor) return !1;
if (toString) {
var name = toString.call(item);
if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
}
if ("function" == typeof item.then) return !0;
} catch (err) {
return !1;
}
return !1;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.isPromise = isPromise;
var toString = {}.toString;
}, function(module, exports, __webpack_require__) {
"use strict";
function deleteTunnelWindow(id) {
try {
_global.global.tunnelWindows[id] && delete _global.global.tunnelWindows[id].source;
} catch (err) {}
delete _global.global.tunnelWindows[id];
}
function cleanTunnelWindows() {
for (var tunnelWindows = _global.global.tunnelWindows, _iterator = Object.keys(tunnelWindows), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref;
if (_isArray) {
if (_i >= _iterator.length) break;
_ref = _iterator[_i++];
} else {
if (_i = _iterator.next(), _i.done) break;
_ref = _i.value;
}
var key = _ref, tunnelWindow = tunnelWindows[key];
try {
(0, _lib.noop)(tunnelWindow.source);
} catch (err) {
deleteTunnelWindow(key);
continue;
}
(0, _src.isWindowClosed)(tunnelWindow.source) && deleteTunnelWindow(key);
}
}
function addTunnelWindow(_ref2) {
var name = _ref2.name, source = _ref2.source, canary = _ref2.canary, sendMessage = _ref2.sendMessage;
return cleanTunnelWindows(), _global.global.tunnelWindowId += 1, _global.global.tunnelWindows[_global.global.tunnelWindowId] = {
name: name,
source: source,
canary: canary,
sendMessage: sendMessage
}, _global.global.tunnelWindowId;
}
function getTunnelWindow(id) {
return _global.global.tunnelWindows[id];
}
__webpack_require__(2);
var _conf = __webpack_require__(0), _src = __webpack_require__(1), _lib = __webpack_require__(4), _global = __webpack_require__(3), _interface = __webpack_require__(7);
_global.global.tunnelWindows = _global.global.tunnelWindows || {}, _global.global.tunnelWindowId = 0,
_global.global.openTunnelToParent = function(_ref3) {
var name = _ref3.name, source = _ref3.source, canary = _ref3.canary, sendMessage = _ref3.sendMessage, parentWindow = (0,
_src.getParent)(window);
if (!parentWindow) throw new Error("No parent window found to open tunnel to");
var id = addTunnelWindow({
name: name,
source: source,
canary: canary,
sendMessage: sendMessage
});
return (0, _interface.send)(parentWindow, _conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
name: name,
sendMessage: function() {
var tunnelWindow = getTunnelWindow(id);
try {
(0, _lib.noop)(tunnelWindow && tunnelWindow.source);
} catch (err) {
return void deleteTunnelWindow(id);
}
if (tunnelWindow && tunnelWindow.source && !(0, _src.isWindowClosed)(tunnelWindow.source)) {
try {
tunnelWindow.canary();
} catch (err) {
return;
}
tunnelWindow.sendMessage.apply(this, arguments);
}
}
}, {
domain: _conf.CONSTANTS.WILDCARD
});
};
}, function(module, exports, __webpack_require__) {
"use strict";
function openTunnelToOpener() {
return _src.ZalgoPromise.try(function() {
var opener = (0, _src2.getOpener)(window);
if (opener && (0, _common.needsBridge)({
win: opener
})) return (0, _common.registerRemoteWindow)(opener), awaitRemoteBridgeForWindow(opener).then(function(bridge) {
return bridge ? window.name ? bridge[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT].openTunnelToParent({
name: window.name,
source: window,
canary: function() {},
sendMessage: function(message) {
try {
(0, _lib.noop)(window);
} catch (err) {
return;
}
window && !window.closed && (0, _drivers.receiveMessage)({
data: message,
origin: this.origin,
source: this.source
});
}
}).then(function(_ref2) {
var source = _ref2.source, origin = _ref2.origin, data = _ref2.data;
if (source !== opener) throw new Error("Source does not match opener");
(0, _common.registerRemoteSendMessage)(source, origin, data.sendMessage);
}).catch(function(err) {
throw (0, _common.rejectRemoteSendMessage)(opener, err), err;
}) : (0, _common.rejectRemoteSendMessage)(opener, new Error("Can not register with opener: window does not have a name")) : (0,
_common.rejectRemoteSendMessage)(opener, new Error("Can not register with opener: no bridge found in opener"));
});
});
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.openTunnelToOpener = openTunnelToOpener;
var _src = __webpack_require__(2), _src2 = __webpack_require__(1), _conf = __webpack_require__(0), _lib = __webpack_require__(4), _drivers = __webpack_require__(6), _common = __webpack_require__(9), awaitRemoteBridgeForWindow = (0,
_lib.weakMapMemoize)(function(win) {
return _src.ZalgoPromise.try(function() {
for (var _iterator = (0, _src2.getFrames)(win), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref;
if (_isArray) {
if (_i >= _iterator.length) break;
_ref = _iterator[_i++];
} else {
if (_i = _iterator.next(), _i.done) break;
_ref = _i.value;
}
var _frame = _ref;
try {
if (_frame && _frame !== window && (0, _src2.isSameDomain)(_frame) && _frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) return _frame;
} catch (err) {
continue;
}
}
try {
var frame = (0, _src2.getFrameByName)(win, (0, _common.getBridgeName)((0, _src2.getDomain)()));
if (!frame) return;
return (0, _src2.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT] ? frame : new _src.ZalgoPromise(function(resolve) {
var interval = void 0, timeout = void 0;
interval = setInterval(function() {
if (frame && (0, _src2.isSameDomain)(frame) && frame[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) return clearInterval(interval),
clearTimeout(timeout), resolve(frame);
}, 100), timeout = setTimeout(function() {
return clearInterval(interval), resolve();
}, 2e3);
});
} catch (err) {
return;
}
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var bridge = (exports.openBridge = void 0, exports.linkUrl = void 0, exports.isBridge = void 0,
exports.needsBridge = void 0, exports.needsBridgeForBrowser = void 0, exports.needsBridgeForWin = void 0,
exports.needsBridgeForDomain = void 0, exports.openTunnelToOpener = void 0, __webpack_require__(10));
exports.openBridge = bridge.openBridge, exports.linkUrl = bridge.linkUrl, exports.isBridge = bridge.isBridge,
exports.needsBridge = bridge.needsBridge, exports.needsBridgeForBrowser = bridge.needsBridgeForBrowser,
exports.needsBridgeForWin = bridge.needsBridgeForWin, exports.needsBridgeForDomain = bridge.needsBridgeForDomain,
exports.openTunnelToOpener = bridge.openTunnelToOpener;
}, function(module, exports, __webpack_require__) {
"use strict";
function listenForRegister(source, domain) {
(0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.OPEN_TUNNEL, {
source: source,
domain: domain
}, function(_ref) {
var origin = _ref.origin, data = _ref.data;
if (origin !== domain) throw new Error("Domain " + domain + " does not match origin " + origin);
if (!data.name) throw new Error("Register window expected to be passed window name");
if (!data.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
if (!_global.global.popupWindowsByName[data.name]) throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
if (!_global.global.popupWindowsByName[data.name].domain) throw new Error("We do not have a registered domain for window " + data.name);
if (_global.global.popupWindowsByName[data.name].domain !== origin) throw new Error("Message origin " + origin + " does not matched registered window origin " + _global.global.popupWindowsByName[data.name].domain);
return (0, _common.registerRemoteSendMessage)(_global.global.popupWindowsByName[data.name].win, domain, data.sendMessage),
{
sendMessage: function(message) {
if (window && !window.closed) {
var winDetails = _global.global.popupWindowsByName[data.name];
winDetails && (0, _drivers.receiveMessage)({
data: message,
origin: winDetails.domain,
source: winDetails.win
});
}
}
};
});
}
function openBridgeFrame(name, url) {
_lib.log.debug("Opening bridge:", name, url);
var iframe = document.createElement("iframe");
return iframe.setAttribute("name", name), iframe.setAttribute("id", name), iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;"),
iframe.setAttribute("frameborder", "0"), iframe.setAttribute("border", "0"), iframe.setAttribute("scrolling", "no"),
iframe.setAttribute("allowTransparency", "true"), iframe.setAttribute("tabindex", "-1"),
iframe.setAttribute("hidden", "true"), iframe.setAttribute("title", ""), iframe.setAttribute("role", "presentation"),
iframe.src = url, iframe;
}
function openBridge(url, domain) {
return domain = domain || (0, _src3.getDomainFromUrl)(url), _global.global.bridges[domain] ? _global.global.bridges[domain] : (_global.global.bridges[domain] = _src2.ZalgoPromise.try(function() {
if ((0, _src3.getDomain)() === domain) throw new Error("Can not open bridge on the same domain as current domain: " + domain);
var name = (0, _common.getBridgeName)(domain);
if ((0, _src3.getFrameByName)(window, name)) throw new Error("Frame with name " + name + " already exists on page");
var iframe = openBridgeFrame(name, url);
return _common.documentBodyReady.then(function(body) {
return new _src2.ZalgoPromise(function(resolve, reject) {
setTimeout(resolve, 1);
}).then(function() {
body.appendChild(iframe);
var bridge = iframe.contentWindow;
return listenForRegister(bridge, domain), new _src2.ZalgoPromise(function(resolve, reject) {
iframe.onload = resolve, iframe.onerror = reject;
}).then(function() {
return (0, _lib.onWindowReady)(bridge, _conf.CONFIG.BRIDGE_TIMEOUT, "Bridge " + url);
}).then(function() {
return bridge;
});
});
});
}), _global.global.bridges[domain]);
}
function linkUrl(win, url) {
var winOptions = _global.global.popupWindowsByWin.get(win);
winOptions && (winOptions.domain = (0, _src3.getDomainFromUrl)(url), (0, _common.registerRemoteWindow)(win));
}
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _slicedToArray = function() {
function sliceIterator(arr, i) {
var _arr = [], _n = !0, _d = !1, _e = void 0;
try {
for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value),
!i || _arr.length !== i); _n = !0) ;
} catch (err) {
_d = !0, _e = err;
} finally {
try {
!_n && _i.return && _i.return();
} finally {
if (_d) throw _e;
}
}
return _arr;
}
return function(arr, i) {
if (Array.isArray(arr)) return arr;
if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
throw new TypeError("Invalid attempt to destructure non-iterable instance");
};
}();
exports.openBridge = openBridge, exports.linkUrl = linkUrl;
var _src = __webpack_require__(5), _src2 = __webpack_require__(2), _src3 = __webpack_require__(1), _conf = __webpack_require__(0), _lib = __webpack_require__(4), _global = __webpack_require__(3), _interface = __webpack_require__(7), _drivers = __webpack_require__(6), _common = __webpack_require__(9);
_global.global.bridges = _global.global.bridges || {}, _global.global.popupWindowsByWin = _global.global.popupWindowsByWin || new _src.WeakMap(),
_global.global.popupWindowsByName = _global.global.popupWindowsByName || {};
var windowOpen = window.open;
window.open = function(url, name, options, last) {
var domain = url;
if (url && 0 === url.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL)) {
var _url$split = url.split("|"), _url$split2 = _slicedToArray(_url$split, 2);
domain = _url$split2[0], url = _url$split2[1];
}
domain && (domain = (0, _src3.getDomainFromUrl)(domain));
var win = windowOpen.call(this, url, name, options, last);
if (!win) return win;
url && (0, _common.registerRemoteWindow)(win);
for (var _iterator = Object.keys(_global.global.popupWindowsByName), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref2;
if (_isArray) {
if (_i >= _iterator.length) break;
_ref2 = _iterator[_i++];
} else {
if (_i = _iterator.next(), _i.done) break;
_ref2 = _i.value;
}
var winName = _ref2;
(0, _src3.isWindowClosed)(_global.global.popupWindowsByName[winName].win) && delete _global.global.popupWindowsByName[winName];
}
if (name && win) {
var winOptions = _global.global.popupWindowsByWin.get(win) || _global.global.popupWindowsByName[name] || {};
winOptions.name = winOptions.name || name, winOptions.win = winOptions.win || win,
winOptions.domain = winOptions.domain || domain, _global.global.popupWindowsByWin.set(win, winOptions),
_global.global.popupWindowsByName[name] = winOptions;
}
return win;
};
}, function(module, exports, __webpack_require__) {
"use strict";
function cleanUpWindow(win) {
var requestPromises = _global.global.requestPromises.get(win);
if (requestPromises) for (var _iterator = requestPromises, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator](); ;) {
var _ref;
if (_isArray) {
if (_i >= _iterator.length) break;
_ref = _iterator[_i++];
} else {
if (_i = _iterator.next(), _i.done) break;
_ref = _i.value;
}
var promise = _ref;
promise.reject(new Error("No response from window - cleaned up"));
}
_global.global.popupWindowsByWin && _global.global.popupWindowsByWin.delete(win),
_global.global.remoteWindows && _global.global.remoteWindows.delete(win), _global.global.requestPromises.delete(win),
_global.global.methods.delete(win), _global.global.readyPromises.delete(win);
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.cleanUpWindow = cleanUpWindow;
var _global = __webpack_require__(3);
}, function(module, exports, __webpack_require__) {
"use strict";
function emulateIERestrictions(sourceWindow, targetWindow) {
if (!_conf.CONFIG.ALLOW_POSTMESSAGE_POPUP && !1 === (0, _src.isSameTopWindow)(sourceWindow, targetWindow)) throw new Error("Can not send and receive post messages between two different windows (disabled to emulate IE)");
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.emulateIERestrictions = emulateIERestrictions;
var _src = __webpack_require__(1), _conf = __webpack_require__(0);
}, function(module, exports, __webpack_require__) {
"use strict";
function _defineProperty(obj, key, value) {
return key in obj ? Object.defineProperty(obj, key, {
value: value,
enumerable: !0,
configurable: !0,
writable: !0
}) : obj[key] = value, obj;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.CONFIG = void 0;
var _ALLOWED_POST_MESSAGE, _constants = __webpack_require__(13), CONFIG = exports.CONFIG = {
ALLOW_POSTMESSAGE_POPUP: !0,
LOG_LEVEL: "info",
BRIDGE_TIMEOUT: 5e3,
ACK_TIMEOUT: 1e3,
RES_TIMEOUT: 1 / 0,
LOG_TO_PAGE: !1,
ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE, !0),
_defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.BRIDGE, !0),
_defineProperty(_ALLOWED_POST_MESSAGE, _constants.CONSTANTS.SEND_STRATEGIES.GLOBAL, !0),
_ALLOWED_POST_MESSAGE)
};
0 === window.location.href.indexOf(_constants.CONSTANTS.FILE_PROTOCOL) && (CONFIG.ALLOW_POSTMESSAGE_POPUP = !0);
}, function(module, exports, __webpack_require__) {
"use strict";
function parseMessage(message) {
var parsedMessage = void 0;
try {
parsedMessage = (0, _lib.jsonParse)(message);
} catch (err) {
return;
}
if (parsedMessage && "object" === (void 0 === parsedMessage ? "undefined" : _typeof(parsedMessage)) && null !== parsedMessage && (parsedMessage = parsedMessage[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT]) && "object" === (void 0 === parsedMessage ? "undefined" : _typeof(parsedMessage)) && null !== parsedMessage && parsedMessage.type && "string" == typeof parsedMessage.type && _types.RECEIVE_MESSAGE_TYPES[parsedMessage.type]) return parsedMessage;
}
function receiveMessage(event) {
if (!window || window.closed) throw new Error("Message recieved in closed window");
try {
if (!event.source) return;
} catch (err) {
return;
}
var source = event.source, origin = event.origin, data = event.data, message = parseMessage(data);
if (message) {
if (!message.sourceDomain || "string" != typeof message.sourceDomain) throw new Error("Expected message to have sourceDomain");
if (0 !== message.sourceDomain.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL) && 0 !== message.sourceDomain.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) || (origin = message.sourceDomain),
-1 === _global.global.receivedMessages.indexOf(message.id)) {
_global.global.receivedMessages.push(message.id);
var level = void 0;
if (level = -1 !== _conf.POST_MESSAGE_NAMES_LIST.indexOf(message.name) || message.type === _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK ? "debug" : "error" === message.ack ? "error" : "info",
_lib.log.logLevel(level, [ "\n\n\t", "#receive", message.type.replace(/^postrobot_message_/, ""), "::", message.name, "::", origin, "\n\n", message ]),
(0, _src.isWindowClosed)(source)) return void _lib.log.debug("Source window is closed - can not send " + message.type + " " + message.name);
message.data && (message.data = (0, _lib.deserializeMethods)(source, origin, message.data)),
_types.RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
}
}
}
function messageListener(event) {
try {
event.source;
} catch (err) {
return;
}
var messageEvent = {
source: event.source || event.sourceElement,
origin: event.origin || event.originalEvent && event.originalEvent.origin,
data: event.data
};
try {
__webpack_require__(12).emulateIERestrictions(messageEvent.source, window);
} catch (err) {
return;
}
receiveMessage(messageEvent);
}
function listenForMessages() {
(0, _lib.addEventListener)(window, "message", messageListener);
}
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
return typeof obj;
} : function(obj) {
return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports.receiveMessage = receiveMessage, exports.messageListener = messageListener,
exports.listenForMessages = listenForMessages;
var _src = __webpack_require__(1), _conf = __webpack_require__(0), _lib = __webpack_require__(4), _global = __webpack_require__(3), _types = __webpack_require__(31);
_global.global.receivedMessages = _global.global.receivedMessages || [];
}, function(module, exports, __webpack_require__) {
"use strict";
function _defineProperty(obj, key, value) {
return key in obj ? Object.defineProperty(obj, key, {
value: value,
enumerable: !0,
configurable: !0,
writable: !0
}) : obj[key] = value, obj;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.RECEIVE_MESSAGE_TYPES = void 0;
var _RECEIVE_MESSAGE_TYPE, _extends = Object.assign || function(target) {
for (var i = 1; i < arguments.length; i++) {
var source = arguments[i];
for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
}
return target;
}, _src = __webpack_require__(2), _src2 = __webpack_require__(1), _conf = __webpack_require__(0), _lib = __webpack_require__(4), _send = __webpack_require__(15), _listeners = __webpack_require__(14);
exports.RECEIVE_MESSAGE_TYPES = (_RECEIVE_MESSAGE_TYPE = {}, _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK, function(source, origin, message) {
var options = (0, _listeners.getResponseListener)(message.hash);
if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
if (!(0, _src2.matchDomain)(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
options.ack = !0;
}), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST, function(source, origin, message) {
function respond(data) {
return message.fireAndForget || (0, _src2.isWindowClosed)(source) ? _src.ZalgoPromise.resolve() : (0,
_send.sendMessage)(source, _extends({
target: message.originalSource,
hash: message.hash,
name: message.name
}, data), origin);
}
var options = (0, _listeners.getRequestListener)({
name: message.name,
win: source,
domain: origin
});
return _src.ZalgoPromise.all([ respond({
type: _conf.CONSTANTS.POST_MESSAGE_TYPE.ACK
}), _src.ZalgoPromise.try(function() {
if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
if (!(0, _src2.matchDomain)(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
var data = message.data;
return options.handler({
source: source,
origin: origin,
data: data
});
}).then(function(data) {
return respond({
type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
ack: _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS,
data: data
});
}, function(err) {
var error = (0, _lib.stringifyError)(err).replace(/^Error: /, "");
return respond({
type: _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE,
ack: _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR,
error: error
});
}) ]).then(_lib.noop).catch(function(err) {
if (options && options.handleError) return options.handleError(err);
_lib.log.error((0, _lib.stringifyError)(err));
});
}), _defineProperty(_RECEIVE_MESSAGE_TYPE, _conf.CONSTANTS.POST_MESSAGE_TYPE.RESPONSE, function(source, origin, message) {
var options = (0, _listeners.getResponseListener)(message.hash);
if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
if (!(0, _src2.matchDomain)(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + options.domain);
if ((0, _listeners.deleteResponseListener)(message.hash), message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.ERROR) return options.respond(new Error(message.error), null);
if (message.ack === _conf.CONSTANTS.POST_MESSAGE_ACK.SUCCESS) {
var data = message.data || message.response;
return options.respond(null, {
source: source,
origin: origin,
data: data
});
}
}), _RECEIVE_MESSAGE_TYPE);
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.SEND_MESSAGE_STRATEGIES = void 0;
var _src = __webpack_require__(1), _conf = __webpack_require__(0), SEND_MESSAGE_STRATEGIES = exports.SEND_MESSAGE_STRATEGIES = {};
SEND_MESSAGE_STRATEGIES[_conf.CONSTANTS.SEND_STRATEGIES.POST_MESSAGE] = function(win, serializedMessage, domain) {
try {
__webpack_require__(12).emulateIERestrictions(window, win);
} catch (err) {
return;
}
var domains = void 0;
domains = Array.isArray(domain) ? domain : domain ? [ domain ] : [ _conf.CONSTANTS.WILDCARD ],
domains = domains.map(function(dom) {
if (0 === dom.indexOf(_conf.CONSTANTS.MOCK_PROTOCOL)) {
if (window.location.protocol === _conf.CONSTANTS.FILE_PROTOCOL) return _conf.CONSTANTS.WILDCARD;
if (!(0, _src.isActuallySameDomain)(win)) throw new Error("Attempting to send messsage to mock domain " + dom + ", but window is actually cross-domain");
return (0, _src.getActualDomain)(win);
}
return 0 === dom.indexOf(_conf.CONSTANTS.FILE_PROTOCOL) ? _conf.CONSTANTS.WILDCARD : dom;
}), domains.forEach(function(dom) {
return win.postMessage(serializedMessage, dom);
});
};
var sendBridgeMessage = __webpack_require__(10).sendBridgeMessage;
SEND_MESSAGE_STRATEGIES[_conf.CONSTANTS.SEND_STRATEGIES.BRIDGE] = function(win, serializedMessage, domain) {
if ((0, _src.isSameDomain)(win)) throw new Error("Post message through bridge disabled between same domain windows");
if (!1 !== (0, _src.isSameTopWindow)(window, win)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
return sendBridgeMessage(win, serializedMessage, domain);
}, SEND_MESSAGE_STRATEGIES[_conf.CONSTANTS.SEND_STRATEGIES.GLOBAL] = function(win, serializedMessage, domain) {
if (!(0, _src.isSameDomain)(win)) throw new Error("Post message through global disabled between different domain windows");
if (!1 !== (0, _src.isSameTopWindow)(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
var foreignGlobal = win[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT];
if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
return foreignGlobal.receiveMessage({
source: window,
origin: (0, _src.getDomain)(),
data: serializedMessage
});
};
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
});
var _interface = __webpack_require__(7);
Object.keys(_interface).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _interface[key];
}
});
});
var INTERFACE = function(obj) {
if (obj && obj.__esModule) return obj;
var newObj = {};
if (null != obj) for (var key in obj) Object.prototype.hasOwnProperty.call(obj, key) && (newObj[key] = obj[key]);
return newObj.default = obj, newObj;
}(_interface);
exports.default = INTERFACE;
}, function(module, exports, __webpack_require__) {
"use strict";
function initOnReady() {
(0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {
window: _conf.CONSTANTS.WILDCARD,
domain: _conf.CONSTANTS.WILDCARD
}, function(event) {
var win = event.source, promise = _global.global.readyPromises.get(win);
promise ? promise.resolve(event) : (promise = new _src3.ZalgoPromise().resolve(event),
_global.global.readyPromises.set(win, promise));
});
var parent = (0, _src2.getAncestor)();
parent && (0, _interface.send)(parent, _conf.CONSTANTS.POST_MESSAGE_NAMES.READY, {}, {
domain: _conf.CONSTANTS.WILDCARD,
timeout: 1 / 0
}).catch(function(err) {
_log.log.debug((0, _util.stringifyError)(err));
});
}
function onWindowReady(win) {
var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3, name = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Window", promise = _global.global.readyPromises.get(win);
return promise || (promise = new _src3.ZalgoPromise(), _global.global.readyPromises.set(win, promise),
setTimeout(function() {
return promise.reject(new Error(name + " did not load after " + timeout + "ms"));
}, timeout), promise);
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.initOnReady = initOnReady, exports.onWindowReady = onWindowReady;
var _src = __webpack_require__(5), _src2 = __webpack_require__(1), _src3 = __webpack_require__(2), _conf = __webpack_require__(0), _interface = __webpack_require__(7), _log = __webpack_require__(11), _global = __webpack_require__(3), _util = __webpack_require__(8);
_global.global.readyPromises = _global.global.readyPromises || new _src.WeakMap();
}, function(module, exports, __webpack_require__) {
"use strict";
function isSerialized(item, type) {
return "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item && item.__type__ === type;
}
function serializeMethod(destination, domain, method, name) {
var id = (0, _util.uniqueID)(), methods = _global.global.methods.get(destination);
return methods || (methods = {}, _global.global.methods.set(destination, methods)),
methods[id] = {
domain: domain,
method: method
}, {
__type__: _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD,
__id__: id,
__name__: name
};
}
function serializeError(err) {
return {
__type__: _conf.CONSTANTS.SERIALIZATION_TYPES.ERROR,
__message__: (0, _util.stringifyError)(err)
};
}
function serializePromise(destination, domain, promise, name) {
return {
__type__: _conf.CONSTANTS.SERIALIZATION_TYPES.PROMISE,
__then__: serializeMethod(destination, domain, function(resolve, reject) {
return promise.then(resolve, reject);
}, name + ".then")
};
}
function serializeZalgoPromise(destination, domain, promise, name) {
return {
__type__: _conf.CONSTANTS.SERIALIZATION_TYPES.ZALGO_PROMISE,
__then__: serializeMethod(destination, domain, function(resolve, reject) {
return promise.then(resolve, reject);
}, name + ".then")
};
}
function serializeRegex(regex) {
return {
__type__: _conf.CONSTANTS.SERIALIZATION_TYPES.REGEX,
__source__: regex.source
};
}
function serializeMethods(destination, domain, obj) {
return (0, _util.replaceObject)({
obj: obj
}, function(item, key) {
return "function" == typeof item ? serializeMethod(destination, domain, item, key.toString()) : item instanceof Error ? serializeError(item) : window.Promise && item instanceof window.Promise ? serializePromise(destination, domain, item, key.toString()) : _src3.ZalgoPromise.isPromise(item) ? serializeZalgoPromise(destination, domain, item, key.toString()) : (0,
_util.isRegex)(item) ? serializeRegex(item) : void 0;
}).obj;
}
function deserializeMethod(source, origin, obj) {
function wrapper() {
var args = Array.prototype.slice.call(arguments);
return _log.log.debug("Call foreign method", obj.__name__, args), (0, _interface.send)(source, _conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
id: obj.__id__,
name: obj.__name__,
args: args
}, {
domain: origin,
timeout: 1 / 0
}).then(function(_ref2) {
var data = _ref2.data;
return _log.log.debug("Got foreign method result", obj.__name__, data.result), data.result;
}, function(err) {
throw _log.log.debug("Got foreign method error", (0, _util.stringifyError)(err)),
err;
});
}
return wrapper.__name__ = obj.__name__, wrapper.__xdomain__ = !0, wrapper.source = source,
wrapper.origin = origin, wrapper;
}
function deserializeError(source, origin, obj) {
return new Error(obj.__message__);
}
function deserializeZalgoPromise(source, origin, prom) {
return new _src3.ZalgoPromise(function(resolve, reject) {
return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
});
}
function deserializePromise(source, origin, prom) {
return window.Promise ? new window.Promise(function(resolve, reject) {
return deserializeMethod(source, origin, prom.__then__)(resolve, reject);
}) : deserializeZalgoPromise(source, origin, prom);
}
function deserializeRegex(source, origin, item) {
return new RegExp(item.__source__);
}
function deserializeMethods(source, origin, obj) {
return (0, _util.replaceObject)({
obj: obj
}, function(item, key) {
if ("object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item) return isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.METHOD) ? deserializeMethod(source, origin, item) : isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.ERROR) ? deserializeError(source, origin, item) : isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.PROMISE) ? deserializePromise(source, origin, item) : isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.ZALGO_PROMISE) ? deserializeZalgoPromise(source, origin, item) : isSerialized(item, _conf.CONSTANTS.SERIALIZATION_TYPES.REGEX) ? deserializeRegex(source, origin, item) : void 0;
}).obj;
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.listenForMethods = void 0;
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
return typeof obj;
} : function(obj) {
return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
exports.serializeMethod = serializeMethod, exports.serializeMethods = serializeMethods,
exports.deserializeMethod = deserializeMethod, exports.deserializeError = deserializeError,
exports.deserializeZalgoPromise = deserializeZalgoPromise, exports.deserializePromise = deserializePromise,
exports.deserializeRegex = deserializeRegex, exports.deserializeMethods = deserializeMethods;
var _src = __webpack_require__(5), _src2 = __webpack_require__(1), _src3 = __webpack_require__(2), _conf = __webpack_require__(0), _util = __webpack_require__(8), _interface = __webpack_require__(7), _log = __webpack_require__(11), _global = __webpack_require__(3);
_global.global.methods = _global.global.methods || new _src.WeakMap();
exports.listenForMethods = (0, _util.once)(function() {
(0, _interface.on)(_conf.CONSTANTS.POST_MESSAGE_NAMES.METHOD, {
window: _conf.CONSTANTS.WILDCARD,
origin: _conf.CONSTANTS.WILDCARD
}, function(_ref) {
var source = _ref.source, origin = _ref.origin, data = _ref.data, methods = _global.global.methods.get(source);
if (!methods) throw new Error("Could not find any methods this window has privileges to call");
var meth = methods[data.id];
if (!meth) throw new Error("Could not find method with id: " + data.id);
if (!(0, _src2.matchDomain)(meth.domain, origin)) throw new Error("Method domain " + meth.domain + " does not match origin " + origin);
return _log.log.debug("Call local method", data.name, data.args), _src3.ZalgoPromise.try(function() {
return meth.method.apply({
source: source,
origin: origin,
data: data
}, data.args);
}).then(function(result) {
return {
result: result,
id: data.id,
name: data.name
};
});
});
});
}, function(module, exports, __webpack_require__) {
"use strict";
function request(options) {
return _src2.ZalgoPromise.try(function() {
if (!options.name) throw new Error("Expected options.name");
var name = options.name, win = options.window, domain = void 0;
if ("string" == typeof win) {
var el = document.getElementById(win);
if (!el) throw new Error("Expected options.window " + Object.prototype.toString.call(win) + " to be a valid element id");
if ("iframe" !== el.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(win) + " to be an iframe");
if (!el.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
win = el.contentWindow;
} else if (win instanceof HTMLElement) {
if ("iframe" !== win.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(win) + " to be an iframe");
if (win && !win.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
win && win.contentWindow && (win = win.contentWindow);
}
if (!win) throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
domain = options.domain || _conf.CONSTANTS.WILDCARD;
var hash = options.name + "_" + (0, _lib.uniqueID)();
if ((0, _src3.isWindowClosed)(win)) throw new Error("Target window is closed");
var hasResult = !1, requestPromises = _global.global.requestPromises.get(win);
requestPromises || (requestPromises = [], _global.global.requestPromises.set(win, requestPromises));
var requestPromise = _src2.ZalgoPromise.try(function() {
if ((0, _src3.isAncestor)(window, win)) return _src2.ZalgoPromise.resolve((0, _lib.onWindowReady)(win));
}).then(function() {
return new _src2.ZalgoPromise(function(resolve, reject) {
var responseListener = {
name: name,
window: win,
domain: domain,
respond: function(err, result) {
err || (hasResult = !0, requestPromises.splice(requestPromises.indexOf(requestPromise, 1))),
err ? reject(err) : resolve(result);
}
};
if ((0, _drivers.addResponseListener)(hash, responseListener), (0, _drivers.sendMessage)(win, {
type: _conf.CONSTANTS.POST_MESSAGE_TYPE.REQUEST,
hash: hash,
name: name,
data: options.data,
fireAndForget: options.fireAndForget
}, domain).catch(reject), options.fireAndForget) return resolve();
var ackTimeout = _conf.CONFIG.ACK_TIMEOUT, resTimeout = options.timeout || _conf.CONFIG.RES_TIMEOUT, cycleTime = 100, cycle = function cycle() {
if (!hasResult) {
if ((0, _src3.isWindowClosed)(win)) return reject(responseListener.ack ? new Error("Window closed for " + name + " before response") : new Error("Window closed for " + name + " before ack"));
ackTimeout -= cycleTime, resTimeout -= cycleTime;
if (responseListener.ack) {
if (resTimeout === 1 / 0) return;
cycleTime = Math.min(resTimeout, 2e3);
} else {
if (ackTimeout <= 0) return reject(new Error("No ack for postMessage " + name + " in " + _conf.CONFIG.ACK_TIMEOUT + "ms"));
if (resTimeout <= 0) return reject(new Error("No response for postMessage " + name + " in " + (options.timeout || _conf.CONFIG.RES_TIMEOUT) + "ms"));
}
setTimeout(cycle, cycleTime);
}
};
setTimeout(cycle, cycleTime);
});
});
return requestPromise.catch(function() {
(0, _drivers.deleteResponseListener)(hash);
}), requestPromises.push(requestPromise), requestPromise;
});
}
function _send(window, name, data, options) {
return options = options || {}, options.window = window, options.name = name, options.data = data,
request(options);
}
function sendToParent(name, data, options) {
var win = (0, _src3.getAncestor)();
return win ? _send(win, name, data, options) : new _src2.ZalgoPromise(function(resolve, reject) {
return reject(new Error("Window does not have a parent"));
});
}
function client() {
var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
if (!options.window) throw new Error("Expected options.window");
return {
send: function(name, data) {
return _send(options.window, name, data, options);
}
};
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.send = void 0, exports.request = request, exports.sendToParent = sendToParent,
exports.client = client;
var _src = __webpack_require__(5), _src2 = __webpack_require__(2), _src3 = __webpack_require__(1), _conf = __webpack_require__(0), _drivers = __webpack_require__(6), _lib = __webpack_require__(4), _global = __webpack_require__(3);
_global.global.requestPromises = _global.global.requestPromises || new _src.WeakMap(),
exports.send = _send;
}, function(module, exports, __webpack_require__) {
"use strict";
function disable() {
delete window[_conf.CONSTANTS.WINDOW_PROPS.POSTROBOT], window.removeEventListener("message", _drivers.messageListener);
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.CONSTANTS = exports.CONFIG = void 0;
var _conf = __webpack_require__(0);
Object.defineProperty(exports, "CONFIG", {
enumerable: !0,
get: function() {
return _conf.CONFIG;
}
}), Object.defineProperty(exports, "CONSTANTS", {
enumerable: !0,
get: function() {
return _conf.CONSTANTS;
}
}), exports.disable = disable;
var _drivers = __webpack_require__(6);
}, function(module, exports, __webpack_require__) {
"use strict";
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.bridge = exports.parent = void 0;
var _client = __webpack_require__(36);
Object.keys(_client).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _client[key];
}
});
});
var _server = __webpack_require__(39);
Object.keys(_server).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _server[key];
}
});
});
var _config = __webpack_require__(37);
Object.keys(_config).forEach(function(key) {
"default" !== key && "__esModule" !== key && Object.defineProperty(exports, key, {
enumerable: !0,
get: function() {
return _config[key];
}
});
});
var _src = __webpack_require__(1);
exports.parent = (0, _src.getAncestor)(), exports.bridge = void 0;
exports.bridge = __webpack_require__(25);
}, function(module, exports, __webpack_require__) {
"use strict";
function listen(options) {
if (!options.name) throw new Error("Expected options.name");
if (!options.handler) throw new Error("Expected options.handler");
var listenerOptions = {
handler: options.handler,
handleError: options.errorHandler || function(err) {
throw err;
},
window: options.window,
domain: options.domain || _conf.CONSTANTS.WILDCARD,
name: options.name
}, requestListener = (0, _drivers.addRequestListener)({
name: listenerOptions.name,
win: listenerOptions.window,
domain: listenerOptions.domain
}, listenerOptions);
if (options.once) {
var _handler = listenerOptions.handler;
listenerOptions.handler = (0, _lib.once)(function() {
return requestListener.cancel(), _handler.apply(this, arguments);
});
}
if (listenerOptions.window && options.errorOnClose) var interval = (0, _lib.safeInterval)(function() {
(0, _src.isWindowClosed)(listenerOptions.window) && (interval.cancel(), listenerOptions.handleError(new Error("Post message target window is closed")));
}, 50);
return {
cancel: function() {
requestListener.cancel();
}
};
}
function _on(name, options, handler) {
return "function" == typeof options && (handler = options, options = {}), options = options || {},
options.name = name, options.handler = handler || options.handler, listen(options);
}
function once(name) {
var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, handler = arguments[2];
"function" == typeof options && (handler = options, options = {}), options = options || {},
handler = handler || options.handler;
var errorHandler = options.errorHandler, promise = new _src2.ZalgoPromise(function(resolve, reject) {
options = options || {}, options.name = name, options.once = !0, options.handler = function(event) {
if (resolve(event), handler) return handler(event);
}, options.errorHandler = function(err) {
if (reject(err), errorHandler) return errorHandler(err);
};
}), onceListener = listen(options);
return promise.cancel = onceListener.cancel, promise;
}
function listener() {
var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
return {
on: function(name, handler) {
return _on(name, options, handler);
}
};
}
Object.defineProperty(exports, "__esModule", {
value: !0
}), exports.on = void 0, exports.listen = listen, exports.once = once, exports.listener = listener;
var _src = __webpack_require__(1), _src2 = __webpack_require__(2), _lib = __webpack_require__(4), _drivers = __webpack_require__(6), _conf = __webpack_require__(0);
exports.on = _on;
} ]);
});
//# sourceMappingURL=post-robot.ie.js.map
/***/ })
/******/ ]);
});
//# sourceMappingURL=universal-remote.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
var extendStatics = function (d, b) {
extendStatics = Object.setPrototypeOf ||
({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
return extendStatics(d, b);
};
return function (d, b) {
extendStatics(d, b);
function __() { this.constructor = d; }
d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
return new (P || (P = Promise))(function (resolve, reject) {
function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
step((generator = generator.apply(thisArg, _arguments || [])).next());
});
};
var __generator = (this && this.__generator) || function (thisArg, body) {
var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
function verb(n) { return function (v) { return step([n, v]); }; }
function step(op) {
if (f) throw new TypeError("Generator is already executing.");
while (_) try {
if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
if (y = 0, t) op = [op[0] & 2, t.value];
switch (op[0]) {
case 0: case 1: t = op; break;
case 4: _.label++; return { value: op[1], done: false };
case 5: _.label++; y = op[1]; op = [0]; continue;
case 7: op = _.ops.pop(); _.trys.pop(); continue;
default:
if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
if (t[2]) _.ops.pop();
_.trys.pop(); continue;
}
op = body.call(thisArg, _);
} catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
}
};
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Core;
(function (Core) {
var Embedding;
(function (Embedding) {
var CoreEmbedding = /** @class */ (function () {
function CoreEmbedding(embeddingOptions, hostWindow) {
this.embeddingOptions = embeddingOptions;
this.hostWindow = hostWindow;
if (!embeddingOptions) {
throw new Embedding.EmbeddingError("Options cannot be empty");
}
this.embeddingOptions.hostName = this.embeddingOptions.hostName ? this.ensureTrailingSlash(embeddingOptions.hostName) : this._getHostName();
// TODO: this  if/else can be deleted when SF conversion is completed.
if (this.embeddingOptions.endpoint && this.embeddingOptions.endpoint === "INT") {
this.webplayerPathSegmentToUse = CoreEmbedding.WebplayerCommonPathSegmentForInt;
}
else {
this.webplayerPathSegmentToUse = CoreEmbedding.WebplayerCommonPathSegment;
}
if (this.embeddingOptions.getAccessToken) {
if (!hostWindow) {
throw new Embedding.EmbeddingError("Host window must be specified when using delegated token authentication");
}
this._authHandler = this._accessTokenRequestHandler.bind(this);
this.hostWindow.addEventListener("message", this._authHandler);
}
// extract the domain of the host name
var match = embeddingOptions.hostName.match(/https:\/\/([a-z0-9\-\.]*[:0-9]*)/i);
if (!match || match.length < 2) {
throw new Embedding.EmbeddingError("Host name is not of the correct format");
}
var domain = match[1]; // The domain is the 2nd item in the array of the match
var subDomainRegExpString = "https:\/\/(?:([^\s\\\/]*)\.)?" + domain; // matches the domain + sub domains
this.subDomainRegex = new RegExp(subDomainRegExpString, "i"); // ignore case
}
// Disposes the object, and thus releases any resource being used
CoreEmbedding.prototype.dispose = function () {
if (this._authHandler) {
this.hostWindow.removeEventListener("message", this._authHandler);
this._authHandler = undefined;
}
};
CoreEmbedding.prototype._getAccessToken = function (getAccessTokenInput, event) {
var _this = this;
var response = {
id: getAccessTokenInput.id,
api: getAccessTokenInput.api,
success: false,
accessToken: null,
errorMessage: null,
parentRequestId: ""
};
var successCallback = function (token, parentRequestId) {
if (parentRequestId === void 0) { parentRequestId = ""; }
response.success = true;
response.accessToken = token;
response.parentRequestId = parentRequestId;
// The token-in-a-hash will only be used for the OBO resource.
// hence, checking if the sent request was for that resource
// otherwise, ignore it.
// This can be particularly important so a second request for a different resource
// does not overwrites the actual access_token.
if (_this.embeddingOptions.sendAccessTokenAsHashParam && _this.validateDomain(getAccessTokenInput.audience)) {
// Using the hash hack only for the OBO token
_this.setTokenAsHashParam(token, parentRequestId, event.origin);
}
_this._sendMessageBackToFrame(event, response);
};
var errorCallback = function (errorMessage, parentRequestId) {
if (parentRequestId === void 0) { parentRequestId = ""; }
response.success = false;
response.errorMessage = errorMessage;
response.parentRequestId = parentRequestId;
_this._sendMessageBackToFrame(event, response);
};
this.embeddingOptions.getAccessToken(getAccessTokenInput.audience, successCallback, errorCallback, getAccessTokenInput.clientRequestId);
};
// Handles access token request
CoreEmbedding.prototype._accessTokenRequestHandler = function (event) {
if (!this.validateMessageOrigin(event)) {
return;
}
var input = event.data;
if (input && input.api !== undefined) {
switch (input.api) {
case Embedding.RuntimeToSdkApi.GetAccessToken:
var getAccessTokenInput = event.data;
this._getAccessToken(getAccessTokenInput, event);
break;
default:
// Invalid API.
break;
}
}
};
CoreEmbedding.prototype._sendMessageBackToFrame = function (event, response) {
var _a;
(_a = event.source) === null || _a === void 0 ? void 0 : _a.postMessage(response, event.origin);
};
CoreEmbedding.prototype.ensureTrailingSlash = function (url) {
if (url.charAt(url.length - 1) !== "/") {
return url + "/";
}
return url;
};
CoreEmbedding.prototype.validateDomain = function (domainToValidate) {
return CoreEmbedding.HostNameAllowList.some(function (domain) { return domain === domainToValidate; });
};
CoreEmbedding.prototype.validateMessageOrigin = function (event) {
return this.validateDomain(event.origin) || !!this.subDomainRegex.exec(event.origin);
};
CoreEmbedding.prototype._getHostName = function () {
var hostName;
switch (this.embeddingOptions.endpoint) {
case Embedding.Endpoint.PROD:
hostName = Embedding.PlayAppUrl.PROD;
break;
case Embedding.Endpoint.GCCMODERATE:
hostName = Embedding.PlayAppUrl.GCCMODERATE;
break;
case Embedding.Endpoint.GCCHIGH:
hostName = Embedding.PlayAppUrl.GCCHIGH;
break;
case Embedding.Endpoint.MOONCAKE:
hostName = Embedding.PlayAppUrl.MOONCAKE;
break;
case Embedding.Endpoint.DOD:
hostName = Embedding.PlayAppUrl.DOD;
break;
case Embedding.Endpoint.INT:
hostName = Embedding.PlayAppUrl.INT;
break;
case Embedding.Endpoint.TEST:
hostName = Embedding.PlayAppUrl.TEST;
break;
case Embedding.Endpoint.DEV:
hostName = Embedding.PlayAppUrl.DEV;
break;
default:
hostName = Embedding.PlayAppUrl.PROD;
break;
}
return hostName;
};
// Constructs the base Url for both ServiceFabric and legacy clients
CoreEmbedding.prototype.constructBaseUrl = function (isServiceFabric, pathSegment) {
if (pathSegment === void 0) { pathSegment = ""; }
var url = this.embeddingOptions.hostName;
if (isServiceFabric) {
url += CoreEmbedding.BaseUrlSdkPathSegment;
}
else {
url += this.webplayerPathSegmentToUse + "/" + pathSegment;
}
return this.appendCoreEmbeddingParams(url);
};
// TODO: test this, and the above
CoreEmbedding.prototype.appendCoreEmbeddingParams = function (url) {
var params = [];
if (this.embeddingOptions.source) {
params.push("source=" + this.embeddingOptions.source);
}
if (this.embeddingOptions.locale) {
params.push("locale=" + this.embeddingOptions.locale);
}
if (this.embeddingOptions.externalCorrelationId) {
params.push("correlationId=" + encodeURIComponent(this.embeddingOptions.externalCorrelationId));
}
if (this.embeddingOptions.enableOnBehalfOf) {
params.push("enableOnBehalfOf=true");
}
var queryString = params.join("&");
if (!!queryString) {
// only add an & if there is an existing query
if (url.indexOf("?") !== -1) {
return url + "&" + queryString;
}
else {
return url + "?" + queryString;
}
}
else {
return url;
}
};
// this to be overriden
CoreEmbedding.prototype.setTokenAsHashParam = function (token, parentRequestId, frameOrigin) {
};
CoreEmbedding.WebplayerCommonPathSegment = "webplayer";
CoreEmbedding.WebplayerCommonPathSegmentForInt = "webplayer-int";
CoreEmbedding.HostNameAllowList = [
"https://apps.powerapps.com",
"https://apps.high.powerapps.us",
"https://apps.gov.powerapps.us",
"https://apps.powerapps.cn",
"https://play.apps.appsplatform.us",
"https://apps.preview.powerapps.com",
"https://apps.preprod.powerapps.com",
"https://apps.int.powerapps.com",
"https://apps.test.powerapps.com",
"https://apps.dev.powerapps.com",
"https://apps.local.powerapps.com:44329",
"https://apps.local.powerapps.com:44328",
];
CoreEmbedding.BaseUrlSdkPathSegment = "sdk/authoringmetadata";
return CoreEmbedding;
}());
Embedding.CoreEmbedding = CoreEmbedding;
})(Embedding = Core.Embedding || (Core.Embedding = {}));
})(Core || (Core = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Core;
(function (Core) {
var Embedding;
(function (Embedding) {
// Different endpoint switches to configure the hostname
var Endpoint;
(function (Endpoint) {
Endpoint["DEV"] = "DEV";
Endpoint["TEST"] = "TEST";
Endpoint["PROD"] = "PROD";
Endpoint["GCCMODERATE"] = "GCCMODERATE";
Endpoint["GCCHIGH"] = "GCCHIGH";
Endpoint["MOONCAKE"] = "MOONCAKE";
Endpoint["DOD"] = "DOD";
Endpoint["INT"] = "INT";
})(Endpoint = Embedding.Endpoint || (Embedding.Endpoint = {}));
var PlayAppUrl;
(function (PlayAppUrl) {
PlayAppUrl["DEV"] = "https://apps.local.powerapps.com:44329/";
PlayAppUrl["TEST"] = "https://apps.test.powerapps.com/";
PlayAppUrl["PROD"] = "https://apps.powerapps.com/";
PlayAppUrl["GCCMODERATE"] = "https://apps.gov.powerapps.us/";
PlayAppUrl["GCCHIGH"] = "https://apps.high.powerapps.us/";
PlayAppUrl["MOONCAKE"] = "https://apps.powerapps.cn/";
PlayAppUrl["DOD"] = "https://play.apps.appsplatform.us/";
PlayAppUrl["INT"] = "https://apps.int.powerapps.com/";
})(PlayAppUrl = Embedding.PlayAppUrl || (Embedding.PlayAppUrl = {}));
var CreateAppUrl;
(function (CreateAppUrl) {
CreateAppUrl["DEV"] = "https://local.create.powerapps.com:44300";
CreateAppUrl["TEST"] = "https://test.create.powerapps.com";
CreateAppUrl["PROD"] = "https://create.powerapps.com";
CreateAppUrl["GCCMODERATE"] = "https://gov.create.powerapps.us";
CreateAppUrl["GCCHIGH"] = "https://high.create.powerapps.us";
CreateAppUrl["MOONCAKE"] = "https://create.powerapps.cn";
CreateAppUrl["DOD"] = "https://create.apps.appsplatform.us";
CreateAppUrl["INT"] = "https://int.create.powerapps.com";
})(CreateAppUrl = Embedding.CreateAppUrl || (Embedding.CreateAppUrl = {}));
// DO NOT CHANGE
// Changing these values will cause a breaking change.
// If you need to add values, add them at end and be sure to
// set a fixed numerical value.
/** @internal */
var RuntimeToSdkApi;
(function (RuntimeToSdkApi) {
RuntimeToSdkApi[RuntimeToSdkApi["GetAccessToken"] = 0] = "GetAccessToken";
// Don't allocate any number without making sure that it doesn't conflict in derived SDKs
})(RuntimeToSdkApi = Embedding.RuntimeToSdkApi || (Embedding.RuntimeToSdkApi = {}));
/** @internal */
function isRuntimeToSdkRequest(request) {
return typeof request === "object" &&
typeof request.api === "number" &&
(typeof request.id === "string" || typeof request.id === "undefined");
}
Embedding.isRuntimeToSdkRequest = isRuntimeToSdkRequest;
/** @internal */
/// <summary>
/// Sends an XHR (XMLHttpRequest) according to the specified parameters
/// </summary>
/// <param name='method' type='string' />HTTP request method</param>
/// <param name='url' type='string' />HTTP request URL</param>
/// <param name='headers' type='{ [key: string]: string; }' />mapping of HTTP request header names and values</param>
/// <param name='body' type='string' />string representing the JSON of the body information to be passed</param>
function sendXhr(method, url, headers, body) {
// Create the XHR request and return it as a Promise
var xhr = new XMLHttpRequest();
return new Promise(function (resolve, reject) {
// Listen for completed requests
xhr.onreadystatechange = function () {
// Return if the request has not completed
if (xhr.readyState !== 4) {
return;
}
// Process the response
if (xhr.status >= 200 && xhr.status < 300) {
// If successful, yield the XHR
resolve(xhr);
}
else {
// If failed, yield failure info
reject({ status: xhr.status, statusText: xhr.statusText });
}
};
// Setup our HTTP request: open it and add headers
xhr.open(method, url, true);
if (headers) {
Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
}
// Send the request
if (method === "POST" && body) {
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(body);
}
else {
xhr.send();
}
});
}
Embedding.sendXhr = sendXhr;
var EmbeddingError = /** @class */ (function (_super) {
__extends(EmbeddingError, _super);
function EmbeddingError(message) {
return _super.call(this, message) || this;
}
return EmbeddingError;
}(Error));
Embedding.EmbeddingError = EmbeddingError;
// Represents different uber kinds of data that can be supplied from an embedded context
var DataKind;
(function (DataKind) {
DataKind["Table"] = "Table";
DataKind["Record"] = "Record";
})(DataKind = Embedding.DataKind || (Embedding.DataKind = {}));
var DataType;
(function (DataType) {
DataType["String"] = "s";
DataType["Number"] = "n";
DataType["Boolean"] = "b";
DataType["Date"] = "d";
DataType["DateTime"] = "D";
})(DataType = Embedding.DataType || (Embedding.DataType = {}));
})(Embedding = Core.Embedding || (Core.Embedding = {}));
})(Core || (Core = {}));
var Core;
(function (Core) {
var Embedding;
(function (Embedding) {
var EventHook = /** @class */ (function () {
function EventHook(sender) {
this.sender = sender;
this.listeners = [];
}
EventHook.prototype.subscribe = function (listener) {
if (listener) {
this.listeners.push(listener);
}
};
EventHook.prototype.unsubscribe = function (listener) {
var index = this.listeners.indexOf(listener);
if (index >= 0) {
this.listeners.splice(index, 1);
}
};
EventHook.prototype.unsubscribeAll = function () {
this.listeners = [];
};
EventHook.prototype.dispatch = function (data) {
for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
var listener = _a[_i];
listener.call(this.sender, data);
}
};
return EventHook;
}());
Embedding.EventHook = EventHook;
})(Embedding = Core.Embedding || (Core.Embedding = {}));
})(Core || (Core = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
/* Embed a power app authoring */
var AuthoringSession = /** @class */ (function () {
function AuthoringSession(options, hostWindow) {
this.options = options;
this.hostWindow = hostWindow;
if (!this.options) {
this.options = {};
}
if (!this.options.hostDataKind) {
this.options.hostDataKind = Core.Embedding.DataKind.Table;
}
if (!this.options.endpoint) {
this.options.endpoint = Core.Embedding.Endpoint.PROD;
}
if (!this.options.source) {
this.options.source = "Host";
}
}
/**
* Use this method to launch PowerApps studio and thus create a Studio Session.
* Returns an instance of StudioSession (wrapped in a Promise), which can be used to
* subscribe to useful events like studioLaunched and appSaved and manipulate bound app data.
*
* @param {IStudioSessionOptions} [studioOptions]
* @returns {Promise<StudioSession>}
* @memberof AuthoringSession
*/
AuthoringSession.prototype.initStudio = function (studioOptions) {
return Embedding.StudioSession.init(this.options, studioOptions);
};
/**
* Returns the list of apps (wrapped in a Promise)
* (optionally filtered by environment) that the user has access to.
*
* @param {*} [environmentName]
* @returns {Promise<IAppInfo[]>}
* @memberof AuthoringSession
*/
AuthoringSession.prototype.getAppList = function (environmentName) {
return this.getSdkSession().getAppList(environmentName);
};
/**
* Returns the list of environments (wrapped in a Promise)
* that the user has access to.
* @returns {Promise<any[]>}
* @memberof AuthoringSession
*/
AuthoringSession.prototype.getEnvironmentList = function () {
return this.getSdkSession().getEnvironmentList();
};
/**
* Used to dispose the Authoring Session.
* Runs crucial cleaning-up methods.
*
* @memberof AuthoringSession
*/
AuthoringSession.prototype.dispose = function () {
if (this.sdkSession) {
this.sdkSession.dispose();
this.sdkSession = null;
}
};
AuthoringSession.prototype.getSdkSession = function () {
if (!this.sdkSession) {
this.sdkSession = new Embedding.SdkSession(this.options, this.hostWindow);
}
return this.sdkSession;
};
return AuthoringSession;
}());
Embedding.AuthoringSession = AuthoringSession;
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
var AuthoringStrings;
(function (AuthoringStrings) {
// GetAccessToken Audiences
AuthoringStrings.getAccessTokenAudience = "https://web.powerapps.com/";
// RP Endpoints
AuthoringStrings.powerAppsRpBaseUrlTest = "https://tip1.api.powerapps.com";
AuthoringStrings.powerAppsRpBaseUrlProd = "https://api.powerapps.com";
})(AuthoringStrings = Embedding.AuthoringStrings || (Embedding.AuthoringStrings = {}));
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
// This namespace has all the constants associated with HTTP calls.
var HeaderName;
(function (HeaderName) {
// See: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html
// Per the HTTP/1.1 spec, these names are in the case they are defined. And therefore not guaranteed to be case-insensitive.
// Take this into account when using these constants for checking the name of a header.
HeaderName.Accept = "Accept";
HeaderName.AcceptLanguage = "Accept-Language";
HeaderName.Authorization = "Authorization";
HeaderName.ContentDisposition = "Content-Disposition";
HeaderName.ContentType = "Content-Type";
HeaderName.ContentLength = "Content-Length";
HeaderName.IfMatch = "If-Match";
HeaderName.IfNoneMatch = "If-None-Match";
HeaderName.SoapAction = "SOAPAction";
HeaderName.ETag = "ETag";
HeaderName.Location = "Location";
HeaderName.CacheControl = "Cache-Control";
HeaderName.Date = "Date";
HeaderName.RetryAfter = "Retry-After";
//
// Microsoft-specific Headers
//
// RP Request headers
HeaderName.MsClientRequestId = "x-ms-client-request-id";
HeaderName.MsClientSessionId = "x-ms-client-session-id";
HeaderName.MsDocServerEndpoint = "x-ms-docserver-endpoint";
HeaderName.MsDocServerEnvironment = "x-ms-docserver-environment";
HeaderName.PowerAppsConnectorProtocolSemantics = "x-ms-protocol-semantics";
// RP Response headers
HeaderName.MsRequestId = "x-ms-request-id";
HeaderName.MsCorrelationRequestId = "x-ms-correlation-request-id";
HeaderName.MsRoutingRequestId = "x-ms-routing-request-id";
HeaderName.MsFailureCause = "x-ms-failure-cause";
// Extended webdav error (like SharePoint).
HeaderName.MsDavExtendedError = "X-MSDAVEXT_Error";
// SharePoint Service request id
HeaderName.SharePointRequestId = "SPRequestGuid";
// Request header to support cross region
HeaderName.MsDomainName = "x-ms-domain-name";
// Connector Request headers
HeaderName.MsUserAgent = "x-ms-user-agent";
// Custom Debug Header for SAS key duration on webPackageUrl
HeaderName.MsSasDuration = "x-ms-app-sas-duration";
// PA Client headers prefix
HeaderName.PAClientHeaderPrefix = "x-ms-pa-client-";
HeaderName.TelemetryOptions = HeaderName.PAClientHeaderPrefix + "telemetry-options";
HeaderName.TelemetryAdditionalData = HeaderName.PAClientHeaderPrefix + "telemetry-additional-data";
HeaderName.ServiceErrorOptions = HeaderName.PAClientHeaderPrefix + "service-error-options";
HeaderName.CustomHeadersOptions = HeaderName.PAClientHeaderPrefix + "custom-headers-options";
// TASK 570605: Remove this special casing and have EntityFormControl use the existing authentication pipeline.
// Entity Form app request headers
HeaderName.MsRtsAuthorizationRequestId = "x-ms-rts-authorization-request-id";
HeaderName.Consistency = "Consistency";
// CDS-specific headers
HeaderName.CdsAutoDisassociate = "AutoDisassociate";
HeaderName.CdsNativeRequestId = "Request-Id";
HeaderName.CdsNativeClientSessionId = "Client-Session-Id";
HeaderName.CdsNativeAppId = "FormLoadId";
// Diagnostics headers
HeaderName.DiagnosticContext = "x-ms-diagnostics-context";
})(HeaderName = Embedding.HeaderName || (Embedding.HeaderName = {}));
var HeaderValue;
(function (HeaderValue) {
HeaderValue.MatchAll = "*";
HeaderValue.NoCache = "no-cache";
HeaderValue.NoStore = "no-store";
HeaderValue.NoCacheNoStore = "no-cache, no-store";
HeaderValue.PowerAppsConnectorProtocolSemanticsValue = "cdp";
HeaderValue.ConsistencyStrong = "Strong";
})(HeaderValue = Embedding.HeaderValue || (Embedding.HeaderValue = {}));
var HttpStatusCode;
(function (HttpStatusCode) {
// http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6.1.1
//
// The request was canceled before it was made. Relevant only to XHR request.
//
HttpStatusCode.XhrRequestIncomplete = 0;
//
// Informational 1xx
//
HttpStatusCode.Continue = 100;
HttpStatusCode.SwitchingProtocols = 101;
//
// Successful 2xx
//
HttpStatusCode.Ok = 200;
HttpStatusCode.ContentAdded = 201;
HttpStatusCode.Accepted = 202;
HttpStatusCode.NonAuthoritativeInformation = 203;
HttpStatusCode.NoContent = 204;
HttpStatusCode.ResetContent = 205;
HttpStatusCode.PartialContent = 206;
//
// Redirection 3xx
//
HttpStatusCode.MultipleChoices = 300;
HttpStatusCode.Ambiguous = 300;
HttpStatusCode.MovedPermanently = 301;
HttpStatusCode.Moved = 301;
HttpStatusCode.Found = 302;
HttpStatusCode.Redirect = 302;
HttpStatusCode.SeeOther = 303;
HttpStatusCode.RedirectMethod = 303;
HttpStatusCode.NotModified = 304;
HttpStatusCode.UseProxy = 305;
HttpStatusCode.Unused = 306;
HttpStatusCode.TemporaryRedirect = 307;
HttpStatusCode.RedirectKeepVerb = 307;
//
// Client Error 4xx
//
HttpStatusCode.BadRequest = 400;
HttpStatusCode.Unauthorized = 401;
HttpStatusCode.PaymentRequired = 402;
HttpStatusCode.Forbidden = 403;
HttpStatusCode.NotFound = 404;
HttpStatusCode.MethodNotAllowed = 405;
HttpStatusCode.NotAcceptable = 406;
HttpStatusCode.ProxyAuthenticationRequired = 407;
HttpStatusCode.RequestTimeout = 408;
HttpStatusCode.Conflict = 409;
HttpStatusCode.Gone = 410;
HttpStatusCode.LengthRequired = 411;
HttpStatusCode.PreconditionFailed = 412;
HttpStatusCode.RequestEntityTooLarge = 413;
HttpStatusCode.RequestUriTooLong = 414;
HttpStatusCode.UnsupportedMediaType = 415;
HttpStatusCode.RequestedRangeNotSatisfiable = 416;
HttpStatusCode.ExpectationFailed = 417;
HttpStatusCode.Locked = 423;
HttpStatusCode.UpgradeRequired = 426;
HttpStatusCode.TooManyRequests = 429;
/**
* Client Error Codes
*/
var ClientErrorCodes = [
HttpStatusCode.BadRequest,
HttpStatusCode.Unauthorized,
HttpStatusCode.PaymentRequired,
HttpStatusCode.Forbidden,
HttpStatusCode.NotFound,
HttpStatusCode.MethodNotAllowed,
HttpStatusCode.NotAcceptable,
HttpStatusCode.ProxyAuthenticationRequired,
HttpStatusCode.RequestTimeout,
HttpStatusCode.Conflict,
HttpStatusCode.Gone,
HttpStatusCode.LengthRequired,
HttpStatusCode.PreconditionFailed,
HttpStatusCode.RequestEntityTooLarge,
HttpStatusCode.RequestUriTooLong,
HttpStatusCode.UnsupportedMediaType,
HttpStatusCode.RequestedRangeNotSatisfiable,
HttpStatusCode.ExpectationFailed,
HttpStatusCode.Locked,
HttpStatusCode.UpgradeRequired
];
//
// Server Error 5xx
//
HttpStatusCode.InternalServerError = 500;
HttpStatusCode.NotImplemented = 501;
HttpStatusCode.BadGateway = 502;
HttpStatusCode.ServiceUnavailable = 503;
HttpStatusCode.GatewayTimeout = 504;
HttpStatusCode.HttpVersionNotSupported = 505;
var ServerErrorCodes = [
HttpStatusCode.InternalServerError,
HttpStatusCode.NotImplemented,
HttpStatusCode.BadGateway,
HttpStatusCode.ServiceUnavailable,
HttpStatusCode.GatewayTimeout,
HttpStatusCode.HttpVersionNotSupported
];
HttpStatusCode.CommonRetryableErrorCodes = [
HttpStatusCode.RequestTimeout,
HttpStatusCode.Conflict,
HttpStatusCode.InternalServerError,
HttpStatusCode.BadGateway,
HttpStatusCode.ServiceUnavailable,
HttpStatusCode.GatewayTimeout
];
/**
* Returns whether the specified error code is a client error code or not.
*/
function isClientErrorCode(errorCode) {
return (ClientErrorCodes.indexOf(errorCode) > -1);
}
HttpStatusCode.isClientErrorCode = isClientErrorCode;
/**
* Returns whether the specified error code is a server error code or not.
*/
function isServerErrorCode(errorCode) {
return (ServerErrorCodes.indexOf(errorCode) > -1);
}
HttpStatusCode.isServerErrorCode = isServerErrorCode;
})(HttpStatusCode = Embedding.HttpStatusCode || (Embedding.HttpStatusCode = {}));
// Some of the known HTTP method names.
var Method;
(function (Method) {
Method.GET = "GET";
Method.HEAD = "HEAD";
Method.POST = "POST";
Method.PUT = "PUT";
Method.PATCH = "PATCH";
Method.DELETE = "DELETE";
})(Method = Embedding.Method || (Embedding.Method = {}));
Embedding.KnownMethods = [
Method.GET,
Method.HEAD,
Method.POST,
Method.PUT,
Method.PATCH,
Method.DELETE,
];
// Also known as MIME types. Used to define the 'content-type' header values in HTTP.
// For some standard examples, see: http://www.freeformatter.com/mime-types-list.html
// Note: these constants should be all lower-case.
var MediaType;
(function (MediaType) {
MediaType.All = "*/*";
MediaType.Text = "text";
MediaType.TextHtml = "text/html";
MediaType.TextJavascript = "text/javascript";
MediaType.TextPlain = "text/plain";
MediaType.TextXml = "text/xml";
MediaType.ApplicationXHtml = "application/xhtml+xml";
MediaType.ApplicationXml = "application/xml";
MediaType.ApplicationJson = "application/json";
MediaType.ApplicationFormUrlEncoded = "application/x-www-form-urlencoded";
MediaType.ApplicationOctetStream = "application/octet-stream";
MediaType.MultipartFormData = "multipart/form-data";
MediaType.Image = "image";
MediaType.Audio = "audio";
MediaType.Video = "video";
})(MediaType = Embedding.MediaType || (Embedding.MediaType = {}));
// Known Content-Disposition type values.
// See: http://www.ietf.org/rfc/rfc1806.txt and http://www.iana.org/assignments/cont-disp/cont-disp.xhtml
var ContentDispositionType;
(function (ContentDispositionType) {
ContentDispositionType.Attachment = "attachment";
/** Used in multipart/form-data parts. */
ContentDispositionType.FormData = "form-data";
ContentDispositionType.Inline = "inline";
})(ContentDispositionType = Embedding.ContentDispositionType || (Embedding.ContentDispositionType = {}));
// See: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
var XhrReadyState;
(function (XhrReadyState) {
XhrReadyState[XhrReadyState["Unsent"] = 0] = "Unsent";
XhrReadyState[XhrReadyState["Opened"] = 1] = "Opened";
XhrReadyState[XhrReadyState["HeadersReceived"] = 2] = "HeadersReceived";
XhrReadyState[XhrReadyState["Loading"] = 3] = "Loading";
XhrReadyState[XhrReadyState["Done"] = 4] = "Done";
})(XhrReadyState = Embedding.XhrReadyState || (Embedding.XhrReadyState = {}));
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
var SdkSessionErrors;
(function (SdkSessionErrors) {
SdkSessionErrors["SERVER_NOT_RESPONDING"] = "Server not responding";
SdkSessionErrors["SERVER_ERROR"] = "Server Error";
})(SdkSessionErrors = Embedding.SdkSessionErrors || (Embedding.SdkSessionErrors = {}));
var SdkConstants;
(function (SdkConstants) {
SdkConstants["SdkMessageType"] = "PowerAppsSdkMessage";
})(SdkConstants || (SdkConstants = {}));
var SdkSession = /** @class */ (function (_super) {
__extends(SdkSession, _super);
function SdkSession(options, hostWindow) {
var _this = _super.call(this, options, hostWindow || window) || this;
_this.options = options;
return _this;
}
SdkSession.prototype.getAppList = function (environmentName) {
return this._getSdkChannel()
.then(function (channel) {
return channel.invoke("getAppList", { environmentName: environmentName });
});
};
SdkSession.prototype.getEnvironmentList = function () {
return this._getSdkChannel()
.then(function (channel) {
return channel.invoke("getEnvironmentList");
});
};
// Gets a promise to the Sdk channel instance which is resolved when the channel is ready
SdkSession.prototype._getSdkChannel = function () {
var _this = this;
if (this._sdkChannel) {
return this._sdkChannel;
}
return this._sdkChannel = new Promise(function (resolve, reject) {
// wait for 10 seconds for runtime sdk to respond
var channelLoadedTimeout = setTimeout(function () {
channelLoadedTimeout = null;
reject(SdkSessionErrors.SERVER_NOT_RESPONDING);
_this._sdkChannel = null;
_this._sdkIframe.parentNode.removeChild(_this._sdkIframe);
}, 10000);
var outboundId = 1;
var outboundMessageHandlers = {};
var channel = {
invoke: function (actionName, actionData) {
if (_this._sdkIframe) {
var actionMessageId_1 = "sdk-message-" + (outboundId++);
var responsePromise = new Promise(function (resolve, reject) {
outboundMessageHandlers[actionMessageId_1] = {
resolve: resolve,
reject: reject
};
});
var message = {
actionName: actionName,
actionData: actionData,
id: actionMessageId_1,
type: "PowerAppsSdkMessage" /* SdkMessageType */
};
_this._sdkIframe.contentWindow.postMessage(message, _this.options.hostName);
return responsePromise;
}
}
};
var isServiceFabric = _this.options.hostName !== "https://web.powerapps.com/";
var sdkIframeUrl = _this.constructBaseUrl(isServiceFabric, "embedsdk");
// Add message listeners
window.addEventListener("message", function (event) {
if (!_this.validateMessageOrigin(event) || (event.data && event.data.type !== "PowerAppsSdkMessage" /* SdkMessageType */)) {
return;
}
var message = event.data;
switch (message.actionName) {
case "loaded": {
clearTimeout(channelLoadedTimeout);
resolve(channel);
break;
}
case "apiResponse": {
if (outboundMessageHandlers[message.sourceId]) {
if (message.success) {
outboundMessageHandlers[message.sourceId].resolve(message.actionData);
}
else {
outboundMessageHandlers[message.sourceId].reject(SdkSessionErrors.SERVER_ERROR);
}
delete outboundMessageHandlers[message.sourceId];
}
break;
}
default: break;
}
});
_this._sdkIframe = document.createElement("iframe");
_this._sdkIframe.src = sdkIframeUrl;
_this._sdkIframe.scrolling = "no";
_this._sdkIframe.height = "1px";
_this._sdkIframe.width = "1px";
// so it is right outside the screen
_this._sdkIframe.style.cssText = "position: fixed; top:-2px; left: -2px;";
window.document.body.appendChild(_this._sdkIframe);
});
};
return SdkSession;
}(Core.Embedding.CoreEmbedding));
Embedding.SdkSession = SdkSession;
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
/**
* Helper class to get authorization for shared sessions.
*/
var SharedAuthoringSessionAuthorizer = /** @class */ (function () {
function SharedAuthoringSessionAuthorizer() {
}
SharedAuthoringSessionAuthorizer.getAuthorizationAsync = function (armToken, authorizationEndpoint) {
return SharedAuthoringSessionAuthorizer.getSessionTokenAsync(armToken, authorizationEndpoint, null);
};
SharedAuthoringSessionAuthorizer.refreshAuthorizationAsync = function (armToken, authorizationToken, refreshSessionEndpoint) {
var body = { sessionToken: authorizationToken };
return SharedAuthoringSessionAuthorizer.getSessionTokenAsync(armToken, refreshSessionEndpoint, JSON.stringify(body));
};
SharedAuthoringSessionAuthorizer.getSessionTokenAsync = function (armToken, endpoint, body) {
var _this = this;
if (SharedAuthoringSessionAuthorizer._lastEndpoint !== endpoint) {
SharedAuthoringSessionAuthorizer._getAuthorizationOperation = null;
SharedAuthoringSessionAuthorizer._lastEndpoint = endpoint;
}
if (!SharedAuthoringSessionAuthorizer._getAuthorizationOperation) {
SharedAuthoringSessionAuthorizer._getAuthorizationOperation = function () { return __awaiter(_this, void 0, void 0, function () {
var headers, response, errorMessage, val, errorMessage, authoringSessionToken, errorMessage, e_1, errorMessage;
var _a;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
_b.trys.push([0, 2, , 3]);
headers = (_a = {
"Content-Type": "application/json; charset=utf-8",
"Authorization": "Bearer " + armToken,
"x-ms-client-request-id": Embedding.SharedAuthoringSessionManager.generateRequestId(),
"x-ms-correlation-request-id": Embedding.SharedAuthoringSessionManager.getCorrelationId()
},
// 'no-store' is required to avoid request stalls in the Chrome browser.
// See: https://stackoverflow.com/questions/27513994/chrome-stalls-when-making-multiple-requests-to-same-resource
_a[Embedding.HeaderName.CacheControl] = Embedding.HeaderValue.NoCacheNoStore,
_a);
return [4 /*yield*/, Core.Embedding.sendXhr("POST", endpoint, headers, body)];
case 1:
response = _b.sent();
if (response.status !== 200) {
errorMessage = "Non-200 response received. Status: " + response.status + ", content: " + response.responseText;
throw new Error(errorMessage);
}
val = JSON.parse(response.responseText);
if (!val) {
errorMessage = "Response status " + response.status + " with empty response text.";
errorMessage += " Request id " + headers["x-ms-client-request-id"] + " correlation request id " + headers["x-ms-correlation-request-id"];
throw new Error(errorMessage);
}
authoringSessionToken = val.sessionToken;
if (!authoringSessionToken) {
errorMessage = "Response status " + response.status + " returned with invalid response text.";
errorMessage += " Request id " + headers["x-ms-client-request-id"] + " correlation request id " + headers["x-ms-correlation-request-id"];
throw new Error(errorMessage);
}
return [2 /*return*/, authoringSessionToken];
case 2:
e_1 = _b.sent();
errorMessage = void 0;
if (e_1 instanceof XMLHttpRequest) {
errorMessage = "xhr error. Status: " + e_1.status + ", response: " + e_1.responseText;
}
else {
errorMessage = "Error: " + (errorMessage || "n/a");
}
errorMessage = "Failed to get Authorized. " + errorMessage;
console.error("SharedAuthoringSessionAuthorizer.getSessionTokenAsync", errorMessage);
throw new Error(errorMessage);
case 3: return [2 /*return*/];
}
});
}); }, { startOnWait: true };
}
return SharedAuthoringSessionAuthorizer._getAuthorizationOperation();
};
SharedAuthoringSessionAuthorizer._lastEndpoint = "";
SharedAuthoringSessionAuthorizer._getAuthorizationOperation = null;
return SharedAuthoringSessionAuthorizer;
}());
Embedding.SharedAuthoringSessionAuthorizer = SharedAuthoringSessionAuthorizer;
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
// Singleton manager of remote authoring session. Singleton model is chosen here since if in the future more parts of the SDK rely on this component,
// it will be clear if there is already an authoring session in progress, and thus new code wouldn't want to start another separate session.
var SharedAuthoringSessionManager = /** @class */ (function () {
function SharedAuthoringSessionManager(getAccessToken, endpoint) {
// AuthoringSession newInstance endpoint (endpoint strings should start with slash)
this._newInstance = "/api/authoringsession/newinstance";
this._authoringSessionTokenObject = { accessToken: "", authoringToken: "" };
this._authoringSessionEstablishedState = 0 /* Idle */;
this._initCreateServerInstanceActivity(getAccessToken, endpoint);
}
SharedAuthoringSessionManager.instance = function (getAccessToken, endpoint) {
var instance = SharedAuthoringSessionManager._instance;
if (!instance) {
instance = SharedAuthoringSessionManager._instance = new SharedAuthoringSessionManager(getAccessToken, endpoint);
}
return instance;
};
SharedAuthoringSessionManager.generateRequestId = function () {
return this._generate128BitUUID();
};
SharedAuthoringSessionManager.getCorrelationId = function () {
return this._generate128BitUUID();
};
/**
* Generates a hex character to replace another given character
* If the given character is x, any hex character will do
* Otherwise, the hex character must be greater than 7 (ie. 8,9,a,b,c,d,e,f)
*/
SharedAuthoringSessionManager._hexGenerator = function (seed, patternCharacter) {
var rnd = (seed + Math.random() * 16) % 16 | 0;
return (patternCharacter === 'x' ? rnd : (rnd & 0x3 | 0x8)).toString(16);
};
/**
* Returns an RFC 4122 Compliant UUID; i.e. a GUID.
*/
SharedAuthoringSessionManager._generate128BitUUID = function () {
var _this = this;
var seed = new Date().getTime();
var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (replacer) { return _this._hexGenerator(seed, replacer); });
return uuid;
};
Object.defineProperty(SharedAuthoringSessionManager.prototype, "authoringSessionToken", {
get: function () {
return this._authoringSessionTokenObject.authoringToken;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "authoringSessionVersion", {
get: function () {
return this._authoringSessionVersion;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "isAuthoringSessionEstablished", {
get: function () {
return this._authoringSessionEstablishedState === 1 /* Established */;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "isAuthoringSessionIdle", {
get: function () {
return this._authoringSessionEstablishedState === 0 /* Idle */;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "isAuthoringSessionDisposed", {
get: function () {
return this._authoringSessionEstablishedState === 2 /* Disposed */;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "joinToken", {
get: function () {
return this._joinToken;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "regionSpecificDomainName", {
get: function () {
return this._regionSpecificDomain;
},
enumerable: true,
configurable: true
});
Object.defineProperty(SharedAuthoringSessionManager.prototype, "sessionStateOpaqueString", {
get: function () {
return this._sessionStateOpaqueString;
},
enumerable: true,
configurable: true
});
SharedAuthoringSessionManager.prototype._initCreateServerInstanceActivity = function (getAccessToken, endpoint) {
var _this = this;
this._createServerInstanceOp = function () { return _this._createServerInstanceAsync(getAccessToken, endpoint); };
};
/**
* Ensures that we have an authoring session and starts a new one otherwise.
*/
SharedAuthoringSessionManager.prototype.establishAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var error, error_1;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (this._authoringSessionEstablishedState === 2 /* Disposed */) {
DebugContracts.assert(false, SharedAuthoringSessionManager._attemptedToReestablishDisposedSessionErrorMessage);
error = new Error(SharedAuthoringSessionManager._attemptedToReestablishDisposedSessionErrorMessage);
console.error("SharedAuthoringSessionManager.establishAsync", error);
return [2 /*return*/, Promise.reject(error)];
}
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4 /*yield*/, this._createServerInstanceOp()];
case 2:
_a.sent();
this.ensureEstablished();
return [3 /*break*/, 4];
case 3:
error_1 = _a.sent();
// Show an error and reject
console.error("SharedAuthoringSessionManager.establishAsync", error_1);
return [2 /*return*/, Promise.reject(error_1)];
case 4: return [2 /*return*/];
}
});
});
};
/**
* Verifies that there is a WebAuth session currently established
* and throws an error otherwise.
*/
SharedAuthoringSessionManager.prototype.ensureEstablished = function () {
if (this._authoringSessionEstablishedState === 2 /* Disposed */) {
DebugContracts.assert(false, SharedAuthoringSessionManager._attemptedToReestablishDisposedSessionErrorMessage);
// Show an error and throw
console.error("SharedAuthoringSessionManager.ensureEstablished", SharedAuthoringSessionManager._attemptedToReestablishDisposedSessionErrorMessage);
// And throw a canceled error so that user doesn't see abnormal termination dialog
// (this is known to happen when the use is already seeing the session expiration dialog).
throw new Error("_createServerInstanceOp cancelled");
}
else if (this._authoringSessionEstablishedState !== 1 /* Established */) {
var errorMessage = "SharedAuthoringSessionManager session is not established yet.";
errorMessage += " Correlation id: " + SharedAuthoringSessionManager.getCorrelationId();
console.error("SharedAuthoringSessionManager.ensureEstablished", errorMessage);
throw new Error(errorMessage);
}
};
/**
* Closes a session. The host will have to start a new session to continue using authoring,
* thus it is advisable to also notify the host of the closing user session if calling this method.
*/
SharedAuthoringSessionManager.prototype.closeAuthoringSession = function () {
// Mark session as disposed and reset info specific to previous session
this._authoringSessionVersion = "";
this._authoringSessionEstablishedState = 2 /* Disposed */;
this._authoringSessionTokenObject.authoringToken = "";
this._regionSpecificDomain = null;
};
/**
* Builds the newinstance request and parses the response.
*/
SharedAuthoringSessionManager.prototype._createServerInstanceAsync = function (getAccessToken, endpoint) {
return __awaiter(this, void 0, void 0, function () {
var sessionTokenProvider, _a, requestUrl, requestHeaders, response, e_2, errorMessage, errorMessage, jsonObject;
return __generator(this, function (_b) {
switch (_b.label) {
case 0:
this._endpoint = endpoint;
sessionTokenProvider = new Embedding.SharedAuthoringSessionTokenProvider(getAccessToken, this._endpoint);
_a = this;
return [4 /*yield*/, sessionTokenProvider.getAuthoringSessionTokenAsync()];
case 1:
_a._authoringSessionTokenObject = _b.sent();
requestUrl = this._buildInstanceRequestUrl();
requestHeaders = this._buildInstanceRequestHeaders();
_b.label = 2;
case 2:
_b.trys.push([2, 4, , 5]);
return [4 /*yield*/, Core.Embedding.sendXhr("POST", requestUrl, requestHeaders, null)];
case 3:
// Make the request and get the response
response = _b.sent();
return [3 /*break*/, 5];
case 4:
e_2 = _b.sent();
if (e_2 instanceof XMLHttpRequest && e_2.status === 0) {
// Some network failures surface as http status 0.
// A common cause for this is if the CORS preflight request fails
// (this could be due to a corporate network policy that prevents access to our direct DC endpoints).
// In the SDK we do not retry against the global endpoint in this case.
console.error("SharedAuthoringSessionManager._createServerInstanceAsync", {
message: "Call to newinstance failed with HTTP status 0.",
eventData: {
requestedUrl: requestUrl
}
});
console.warn("Call to newinstance failed with HTTP status 0.");
}
else if (e_2 instanceof XMLHttpRequest) {
if (e_2.status === Embedding.HttpStatusCode.PreconditionFailed) {
console.warn("SharedAuthoringSessionManager._createServerInstanceAsync");
console.warn(e_2);
console.warn("Will not redirect");
}
else if (e_2.status === Embedding.HttpStatusCode.TooManyRequests) {
console.warn("SharedAuthoringSessionManager._createServerInstanceAsync");
console.warn(e_2);
console.warn("NewInstance API is throttled");
}
else {
console.error("SharedAuthoringSessionManager._createServerInstanceAsync", "Call to newinstance failed with HTTP status " + e_2.status);
}
}
else {
console.error("SharedAuthoringSessionManager._createServerInstanceAsync", "Call to newinstance failed " + e_2);
}
errorMessage = "Failed to create new session (newinstance)." + e_2.toString();
console.error("SharedAuthoringSessionManager._createServerInstanceAsync", errorMessage);
throw new Error(errorMessage);
case 5:
if (!response) {
errorMessage = "Creation of new session returned an empty response (newinstance).";
console.error("SharedAuthoringSessionManager._createServerInstanceAsync", errorMessage);
throw new Error(errorMessage);
}
jsonObject = JSON.parse(response.responseText);
this._authoringSessionVersion = jsonObject.authoringHostVersion;
this._joinToken = jsonObject.joinToken;
this._sessionStateOpaqueString = jsonObject.sessionState;
this._regionSpecificDomain = jsonObject.domainName;
// Mark session as established
this._authoringSessionEstablishedState = 1 /* Established */;
return [2 /*return*/];
}
});
});
};
/*
* Constructs the URL which provides a new instance of document sever (and also
* requests a join token via query string parameter provideJoinToken = true) and returns it
*/
SharedAuthoringSessionManager.prototype._buildInstanceRequestUrl = function () {
var baseStudioUrl = Embedding.StudioUtilities.getBaseStudioUrlFromEndpoint(this._endpoint);
var joinTokenRequestParam = "?provideJoinToken=true";
var newInstanceRequestUrl = baseStudioUrl + this._newInstance + joinTokenRequestParam;
return newInstanceRequestUrl;
};
SharedAuthoringSessionManager.prototype._buildInstanceRequestHeaders = function () {
// 'no-store' is required to avoid request stalls in the Chrome browser.
// See: https://stackoverflow.com/questions/27513994/chrome-stalls-when-making-multiple-requests-to-same-resource
var headers = this.buildGeneralRequestHeaders();
headers[Embedding.HeaderName.CacheControl] = Embedding.HeaderValue.NoCacheNoStore;
return headers;
};
/*
* Populates a request with authorization and authentication headers, session information, and content type (all apis use JSON serialization).
*/
SharedAuthoringSessionManager.prototype.buildGeneralRequestHeaders = function () {
var headers = {
"Content-Type": "application/json; charset=utf-8",
AuthoringSessionToken: this._authoringSessionTokenObject.authoringToken,
"x-ms-client-request-id": SharedAuthoringSessionManager.generateRequestId(),
"x-ms-correlation-request-id": SharedAuthoringSessionManager.getCorrelationId()
};
if (this._regionSpecificDomain) {
headers["x-ms-domain-name"] = this._regionSpecificDomain;
}
if (this._sessionStateOpaqueString) {
headers["x-ms-session-state"] = this._sessionStateOpaqueString;
}
return headers;
};
SharedAuthoringSessionManager._attemptedToReestablishDisposedSessionErrorMessage = "Attempted to establish a WebAuth session after a previous session had been disposed.";
SharedAuthoringSessionManager._instance = null;
return SharedAuthoringSessionManager;
}());
Embedding.SharedAuthoringSessionManager = SharedAuthoringSessionManager;
// Note: Once a Session has been disposed it cannot be re-established. The host must start a new AuthoringSession which can
// then create a new instance of SharedAuthoringSessionManager
var SessionEstablishedState;
(function (SessionEstablishedState) {
SessionEstablishedState[SessionEstablishedState["Idle"] = 0] = "Idle";
SessionEstablishedState[SessionEstablishedState["Established"] = 1] = "Established";
SessionEstablishedState[SessionEstablishedState["Disposed"] = 2] = "Disposed"; // Session has ended and is no longer accepting communications
})(SessionEstablishedState || (SessionEstablishedState = {}));
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
/*!
* Copyright (C) Microsoft Corporation. All rights reserved.
*/
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
// Class that provides access to the token which may later be presented to WebAuth in order to create a new session
var SharedAuthoringSessionTokenProvider = /** @class */ (function () {
function SharedAuthoringSessionTokenProvider(getAccessToken, endpoint) {
if (getAccessToken === null || getAccessToken === undefined) {
throw new Error("SharedAuthoringSessionTokenProvider requires an AccessTokenProvider");
}
this._getAccessToken = getAccessToken;
this._endpoint = endpoint;
}
SharedAuthoringSessionTokenProvider.constructAuthorizationEndpoint = function (token, api, endpoint) {
// Parse the JSON Web Token
var jsonWebToken = SharedAuthoringSessionTokenProvider.parseJwt(token);
// Build the url for the RP Authorization Endpoint
var powerAppsRpBaseUrl = "";
switch (endpoint) {
case Core.Embedding.Endpoint.DEV:
case Core.Embedding.Endpoint.INT:
case Core.Embedding.Endpoint.TEST:
powerAppsRpBaseUrl = Embedding.AuthoringStrings.powerAppsRpBaseUrlTest;
break;
case Core.Embedding.Endpoint.PROD:
powerAppsRpBaseUrl = Embedding.AuthoringStrings.powerAppsRpBaseUrlProd;
break;
default:
powerAppsRpBaseUrl = Embedding.AuthoringStrings.powerAppsRpBaseUrlProd;
break;
}
var providersPath = "/" + Authoring.Embedding.PowerAppEndpoints.providers;
var objectIdsValuePath = "/" + Authoring.Embedding.PowerAppEndpoints.objectIdsValue;
var oidPath = "/" + jsonWebToken.oid;
var apiPath = "/" + api;
var apiVersionQueryParam = "?api-version=" + Authoring.Embedding.PowerAppEndpoints.getApiVersion();
var url = powerAppsRpBaseUrl + providersPath + objectIdsValuePath + oidPath + apiPath + apiVersionQueryParam;
return url;
};
SharedAuthoringSessionTokenProvider.parseJwt = function (token) {
var base64Url = token.split('.')[1];
var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
return JSON.parse(window.atob(base64));
};
;
SharedAuthoringSessionTokenProvider.prototype.getAuthoringSessionTokenAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var accessToken, authoringSessionTokenApiEndpoint, authoringSessionToken, authoringTokenObject, e_3, errorMessage;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
_a.trys.push([0, 3, , 4]);
return [4 /*yield*/, this.acquireTokenAsync()];
case 1:
accessToken = _a.sent();
authoringSessionTokenApiEndpoint = SharedAuthoringSessionTokenProvider.constructAuthorizationEndpoint(accessToken, Authoring.Embedding.PowerAppEndpoints.serverSession, this._endpoint);
return [4 /*yield*/, Embedding.SharedAuthoringSessionAuthorizer.getAuthorizationAsync(accessToken, authoringSessionTokenApiEndpoint)];
case 2:
authoringSessionToken = _a.sent();
authoringTokenObject = {
accessToken: accessToken,
authoringToken: authoringSessionToken
};
return [2 /*return*/, authoringTokenObject];
case 3:
e_3 = _a.sent();
errorMessage = "Failed to obtain authoring session token from Parent. " + e_3;
console.error("SharedAuthoringSessionTokenProvider.getAuthoringSessionTokenAsync", errorMessage);
throw new Error(errorMessage);
case 4: return [2 /*return*/];
}
});
});
};
SharedAuthoringSessionTokenProvider.prototype.acquireTokenAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var _this = this;
return __generator(this, function (_a) {
return [2 /*return*/, new Promise(function (resolve, reject) {
try {
var getAccessTokenInput = {
api: Core.Embedding.RuntimeToSdkApi.GetAccessToken,
id: Date.now().toString(),
clientRequestId: Embedding.SharedAuthoringSessionManager.generateRequestId(),
audience: Embedding.AuthoringStrings.getAccessTokenAudience
};
var response_1 = {
id: getAccessTokenInput.id,
api: getAccessTokenInput.api,
success: false,
accessToken: null,
errorMessage: null,
parentRequestId: ""
};
var successCallback = function (token, parentRequestId) {
if (parentRequestId === void 0) { parentRequestId = ""; }
response_1.success = true;
response_1.accessToken = token;
response_1.parentRequestId = parentRequestId;
resolve(response_1.accessToken);
};
var errorCallback = function (errorMessage, parentRequestId) {
if (parentRequestId === void 0) { parentRequestId = ""; }
response_1.success = false;
response_1.errorMessage = errorMessage;
response_1.parentRequestId = parentRequestId;
reject(errorMessage);
};
// Get the accesstoken from the parent, which is hosted by the application intiating the session to be shared
_this._getAccessToken(getAccessTokenInput.audience, successCallback, errorCallback, getAccessTokenInput.clientRequestId);
}
catch (e) {
var errorMessage = "Failed to obtain token. " + e;
console.error("SharedAuthoringSessionTokenProvider.acquireTokenAsync", errorMessage);
reject(errorMessage);
}
})];
});
});
};
return SharedAuthoringSessionTokenProvider;
}());
Embedding.SharedAuthoringSessionTokenProvider = SharedAuthoringSessionTokenProvider;
var PowerAppEndpoints;
(function (PowerAppEndpoints) {
function getApiVersion() {
return "2018-10-01";
}
PowerAppEndpoints.getApiVersion = getApiVersion;
PowerAppEndpoints.providers = "providers/Microsoft.PowerApps";
PowerAppEndpoints.objectIdsValue = "objectIds";
PowerAppEndpoints.serverSession = "initiateDocumentServerSession";
})(PowerAppEndpoints = Embedding.PowerAppEndpoints || (Embedding.PowerAppEndpoints = {}));
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
var StudioSessionError;
(function (StudioSessionError) {
StudioSessionError["STUDIO_WINDOW_OPENING_ERROR"] = "Studio window couldn't be opened.";
StudioSessionError["STUDIO_SESSION_ESTABLISH_ERROR"] = "Studio authoring session couldn't be established.";
})(StudioSessionError = Embedding.StudioSessionError || (Embedding.StudioSessionError = {}));
/**
* Class to handle a launched/embedded studio view.<br/>
*
* @export
* @class StudioView
* @extends {EventManager}
*/
var StudioSession = /** @class */ (function () {
function StudioSession(_launchedStudioResolver, _launchedStudioRejector, _hostName, _authoringOptions, options) {
this._launchedStudioResolver = _launchedStudioResolver;
this._launchedStudioRejector = _launchedStudioRejector;
this._hostName = _hostName;
this._authoringOptions = _authoringOptions;
this._sessionManagerInstance = null;
/**
* Triggered when an studio is ready to receive updates
*
* @type {EventHook<void>}
* @memberof AuthoringView
*/
this.studioLaunched = new Core.Embedding.EventHook(this);
/**
* Triggered when the user saves the app
*
* @type {EventHook<IAppInfo>}
* @memberof AuthoringView
*/
this.appSaved = new Core.Embedding.EventHook(this);
/**
* Triggered when the user publishes the app
*
* @type {EventHook<IAppInfo>}
* @memberof AuthoringView
*/
this.appPublished = new Core.Embedding.EventHook(this);
/**
* Triggered when the app issues a signal
*
* @type {EventHook<ISendHttpRequestParameters>}
* @memberof AuthoringView
*/
this.appSignal = new Core.Embedding.EventHook(this);
this._options = options || {};
if (!this._options.appId && !this._options.appTemplate) {
// Default a template
if (this._authoringOptions.hostDataKind === Core.Embedding.DataKind.Table) {
// For table we use default list templates
this._options.appTemplate = Embedding.TemplatePatterns.list;
}
}
this._currentAppId = this._options.appId;
this._studioWindowName = "studio-window-" + (options.appId ? options.appId : Date.now());
this._sourceName = this._authoringOptions.source || StudioSession.DEFAULT_SOURCE_NAME;
this._handleAutomationServerEvent = this._handleAutomationServerEvent.bind(this);
this._checkStudioWindowClosed = this._checkStudioWindowClosed.bind(this);
}
/**
* Spawn a new instance of Studio Session.
* The returned StudioSession instance can be used to subscribe to events and manipulate bound app data.
*
* @static
* @param {string} [endpoint]
* @param {IAuthoringEmbeddingOptions} [authoringOptions]
* @param {IStudioSessionOptions} [options]
* @returns {Promise<StudioSession>}
* @memberof StudioSession
*/
StudioSession.init = function (authoringOptions, options) {
var _this = this;
return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
var session, e_4;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
session = new StudioSession(resolve, reject, Embedding.StudioUtilities.getBaseStudioUrlFromEndpoint(authoringOptions.endpoint) + "/api/start/", authoringOptions, options);
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4 /*yield*/, session._launchStudioAsync()];
case 2:
_a.sent();
return [3 /*break*/, 4];
case 3:
e_4 = _a.sent();
reject();
return [2 /*return*/];
case 4: return [2 /*return*/];
}
});
}); });
};
/**
* Update the data (replaces previous data)
* that the current app being edited is bound to.
*
* @param {PowerAppsData} data
* @returns
* @memberof StudioSession
*/
StudioSession.prototype.updateData = function (data) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4 /*yield*/, this._automationClient.sendCommandAsync({
type: "SetHostDataCommand",
propertyName: "Data",
propertyValue: data
})];
case 1: return [2 /*return*/, _a.sent()];
}
});
});
};
/**
*
* Update the schema of the data (replaces previous schema)
* that the current app being edited is bound to.
*
* @param {PowerAppsSchema} schema
* @returns
* @memberof StudioSession
*/
StudioSession.prototype.updateSchema = function (schema) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4 /*yield*/, this._automationClient.sendCommandAsync({
type: "SetHostSchemaCommand",
propertyName: "Data",
propertySchema: schema
})];
case 1: return [2 /*return*/, _a.sent()];
}
});
});
};
/**
*
* Set the schema of a particular message, specified by WADL XML.
*
* @param {string} hostDefWadl
* @returns
* @memberof StudioSession
*/
StudioSession.prototype.setHostDefinition = function (hostDefWadl) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4 /*yield*/, this._automationClient.sendCommandAsync({
type: "SetHostDefinitionCommand",
hostDefWadl: hostDefWadl
})];
case 1: return [2 /*return*/, _a.sent()];
}
});
});
};
/**
*
* Passes host telemetry information.
*
* @param {string} hostTelemetry
* @returns
* @memberof StudioSession
*/
StudioSession.prototype.logHostTelemetry = function (hostTelemetry) {
return __awaiter(this, void 0, void 0, function () {
return __generator(this, function (_a) {
switch (_a.label) {
case 0: return [4 /*yield*/, this._automationClient.sendCommandAsync({
type: "LogHostTelemetryCommand",
hostTelemetry: hostTelemetry,
source: this._sourceName
})];
case 1: return [2 /*return*/, _a.sent()];
}
});
});
};
/**
* Relaunch the studio window with the last-saved app (if available)
* or a new blank app.
*
* Returns a promise, which when resolved indicates that the studio session
* is ready to receive updates.
* @memberof StudioSession
*/
StudioSession.prototype.relaunchStudio = function () {
var _this = this;
if (this._studioWindow && !this._studioWindow.closed) {
// this will reopen in a new window
this._studioWindow = this._launchUrl(this._studioWindowURLBuilder());
return Promise.resolve(this);
}
return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
var e_5;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
this._launchedStudioResolver = resolve;
this._launchedStudioRejector = reject;
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4 /*yield*/, this._launchStudioAsync()];
case 2:
_a.sent();
return [3 /*break*/, 4];
case 3:
e_5 = _a.sent();
reject();
return [2 /*return*/];
case 4: return [2 /*return*/];
}
});
}); });
};
/**
* Dispose the Studio Session. <br/>
* Runs crucial cleaning-up methods,
* including disconnecting any open PowerApps Studio Session.
*
* @memberof StudioSession
*/
StudioSession.prototype.dispose = function () {
if (this._isDisposed) {
return;
}
this._disposeAutomationClient();
};
StudioSession.prototype._disposeAutomationClient = function () {
var _this = this;
if (this._automationClient && this._automationClient.isConnected) {
this._automationClient.disconnectAsync().then(function () {
_this._automationClient.dispose(true);
_this._isDisposed = true;
});
}
};
StudioSession.prototype._handleLaunchErrors = function () {
var _this = this;
if (this._studioWindow === null) {
this._launchedStudioRejector(StudioSessionError.STUDIO_WINDOW_OPENING_ERROR);
return;
}
this._checkStudioWindowClosedInterval = setInterval(function () { _this._checkStudioWindowClosed(); }, 2000);
};
StudioSession.prototype._checkStudioWindowClosed = function () {
if (this._studioWindow && this._studioWindow.closed) {
this._launchedStudioRejector(StudioSessionError.STUDIO_WINDOW_OPENING_ERROR);
clearInterval(this._checkStudioWindowClosedInterval);
this._checkStudioWindowClosedInterval = undefined;
}
};
StudioSession.prototype._launchStudioAsync = function () {
return __awaiter(this, void 0, void 0, function () {
var error_2, baseStudioUrl, versionPath, signalRHubUrl;
return __generator(this, function (_a) {
switch (_a.label) {
case 0:
if (!(this._isSourceSessionAllowed(this._authoringOptions.source) &&
this._authoringOptions.endpoint &&
this._authoringOptions.hostIsDesktopApp &&
this._authoringOptions.getAccessToken)) return [3 /*break*/, 5];
if (!!this._sessionManagerInstance) return [3 /*break*/, 4];
// Create new DocumentServer Session and obtain a session key
this._sessionManagerInstance = this.__buildNewDocumentServerInstanceRequest(this._authoringOptions.getAccessToken);
_a.label = 1;
case 1:
_a.trys.push([1, 3, , 4]);
return [4 /*yield*/, this._sessionManagerInstance.establishAsync()];
case 2:
_a.sent();
return [3 /*break*/, 4];
case 3:
error_2 = _a.sent();
this._launchedStudioRejector(StudioSessionError.STUDIO_SESSION_ESTABLISH_ERROR);
return [2 /*return*/];
case 4:
// Automation Cleanup and Pre-Setup
this._appCreated = false;
this._handleLaunchErrors();
this._disposeAutomationClient();
baseStudioUrl = this._sessionManagerInstance.regionSpecificDomainName;
versionPath = this._sessionManagerInstance.authoringSessionVersion;
signalRHubUrl = baseStudioUrl + "/" + versionPath + "/api/signalr/automationhub";
// Automation Setup
this._setupAutomationClient(signalRHubUrl);
// When Setup is complete, prompt the host to launch studio url
this._launchUrlViaHost(this._studioWindowURLBuilder());
return [3 /*break*/, 6];
case 5:
// Web Host Case
// First launch studio url and retain window reference (later steps rely on studio window object)
this._studioWindow = this._launchUrl(this._studioWindowURLBuilder());
// Automation Cleanup and Pre-Setup
this._appCreated = false;
this._handleLaunchErrors();
this._disposeAutomationClient();
// Automation Setup
this._setupAutomationClient();
_a.label = 6;
case 6: return [2 /*return*/];
}
});
});
};
// Allow list of sources that we permit to request their own WebAuth sessions
StudioSession.prototype._isSourceSessionAllowed = function (source) {
return source === "PowerBIIntegration" || source === "Embed SDK Test Page";
};
StudioSession.prototype.__buildNewDocumentServerInstanceRequest = function (getAccessToken) {
// Create a NewInstance of DocumentServer
var sessionManagerInstance = Embedding.SharedAuthoringSessionManager.instance(getAccessToken, this._authoringOptions.endpoint);
return sessionManagerInstance;
};
StudioSession.prototype._launchUrl = function (url, target) {
return window.open(url, target ? target : undefined);
};
StudioSession.prototype._launchUrlViaHost = function (url, target) {
if (this._authoringOptions.hostUrlLauncher) {
this._authoringOptions.hostUrlLauncher(url);
}
};
StudioSession.prototype._setupAutomationClient = function (signalRHubUrl) {
var ua = window.navigator.userAgent;
var isIE = ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
// If the host is a desktop application, then automation should use a SignalR channel
// Else, automation should use some form of PostRobot channel
if (this._authoringOptions.hostIsDesktopApp && this._isSourceSessionAllowed(this._authoringOptions.source) && signalRHubUrl) {
// If present, pass the sessionState string (which is necessary for signalr in non-local environments: TEST/INT/PROD)
var headers = {};
if (this._sessionManagerInstance.sessionStateOpaqueString) {
headers["x-ms-session-state"] = this._sessionManagerInstance.sessionStateOpaqueString;
}
// AutomationClient sends messages via "SendCommandToStudio" queue and receives messages via "BroadcastEventToSdk" queue
this._automationChannel = new UniversalRemote.SignalR.SignalRMessagingChannel(signalRHubUrl, "SendCommandToStudio", "BroadcastEventToSdk", UniversalRemote.HttpTransportType.LongPolling, headers);
}
else if (isIE) {
this._automationChannel = new UniversalRemote.PostRobot.PostRobotIEMessagingChannel(this._studioWindow, null, Embedding.StudioUtilities.getBaseStudioUrlFromEndpoint(this._authoringOptions.endpoint)
+ "/global/postMessageBridge?origin=" + window.location.protocol + "//" + window.location.host);
}
else {
this._automationChannel = new UniversalRemote.PostRobot.PostRobotMessagingChannel(this._studioWindow);
}
this._automationClient = new UniversalRemote.AutomationClient(this._automationChannel);
this._automationClient.onServerEventReceived.attach(this._handleAutomationServerEvent);
this._automationClient.connectAsync();
};
StudioSession.prototype._handleAutomationServerEvent = function (eventArgs) {
switch (eventArgs.serverEvent.type) {
case "ApplicationCreatedEvent":
this._onAppCreated();
break;
case "ApplicationSavedEvent":
this._onAppSaved(eventArgs.serverEvent.applicationId);
break;
case "ApplicationPublishedEvent":
this._onAppPublished(eventArgs.serverEvent.applicationId);
break;
case "ApplicationTriggerEvent":
this._onAppSignal(eventArgs.serverEvent.requestParameters);
break;
default:
break;
}
};
StudioSession.prototype._studioWindowURLBuilder = function () {
var queryParamsSection = this._queryParamsBuilder();
return "" + this._hostName + queryParamsSection;
};
// Subroutine of _studioWindowURLBuilder for query parameter construction.
// If there are any query parameters in the studio URL, returns them in a string following "#" and joined by "&" thereafter.
// If there are none, returns empty string.
StudioSession.prototype._queryParamsBuilder = function () {
var _this = this;
/// 1. INITIALIZE
var queryParamsExtension = "";
/// 2. APPEND QUERY PARAMETERS AS NECESSARY
// add app-id if available, otherwise open a blank app
var appId = this._currentAppId ? this._currentAppId : this._options.appId;
var newAppAction = this._options.newAppAction ? this._options.newAppAction : "new-blank";
var editAppAction = this._options.editAppAction ? this._options.editAppAction : "edit";
var actionIsNewApp;
if (appId) {
queryParamsExtension = "action=" + editAppAction + "&app-id=" + encodeURIComponent(appId);
actionIsNewApp = false;
}
else {
queryParamsExtension = "action=" + newAppAction;
actionIsNewApp = true;
}
// add environment name if available, otherwise allow it to default to current environment
if (this._options.environmentName) {
queryParamsExtension += "&environment-name=" + encodeURIComponent(this._options.environmentName);
}
// add source and hosting information
queryParamsExtension += "&source=" + encodeURIComponent(this._sourceName);
queryParamsExtension += "&is-hosted=true";
if (this._options.solutionId) {
queryParamsExtension += "&solution-id=" + encodeURIComponent(this._options.solutionId);
}
// add canvas app query parameters
if (this._options.authoringQueryParm) {
queryParamsExtension += Object.keys(this._options.authoringQueryParm).map(function (paramKey) { return "&" + encodeURIComponent(paramKey) + "=" + encodeURIComponent(_this._options.authoringQueryParm[paramKey]); }).join('');
}
// add desktop hosting/join session information
var desktopJoinInstanceScenario = this._isSourceSessionAllowed(this._authoringOptions.source) &&
this._authoringOptions.hostIsDesktopApp &&
this._sessionManagerInstance &&
this._sessionManagerInstance.joinToken;
if (desktopJoinInstanceScenario) {
var domainNameQueryParam = this._sessionManagerInstance.regionSpecificDomainName;
// Does domain name start with "https://" ? If so, remove it.
if (domainNameQueryParam.lastIndexOf("https://", 0) === 0) {
domainNameQueryParam = domainNameQueryParam.substring(8);
}
queryParamsExtension += "&domainName=" + domainNameQueryParam;
queryParamsExtension += "&host-is-desktop-app=true";
// Only provide the join-token when we are creating a new app.
// Join-token is not expected on any other actions (e.g. edit app).
if (actionIsNewApp) {
queryParamsExtension += "&join-token=" + this._sessionManagerInstance.joinToken;
}
}
return queryParamsExtension ? "?" + queryParamsExtension : "";
};
StudioSession.prototype._onAppCreated = function () {
var _this = this;
// stop interval-checking if the studio window was closed
if (this._checkStudioWindowClosedInterval) {
clearInterval(this._checkStudioWindowClosedInterval);
this._checkStudioWindowClosedInterval = undefined;
}
// return if app was already created
if (this._appCreated) {
return;
}
this._appCreated = true;
// If we have an app template to apply
// and if the app is new (i.e., no current app_id)
if (this._options.appTemplate && !this._currentAppId) {
this._automationClient
.sendCommandAsync({
type: "ApplyTemplateCommand",
template: this._options.appTemplate
})
.then(function () {
_this.studioLaunched.dispatch();
_this._launchedStudioResolver(_this);
});
}
else {
this.studioLaunched.dispatch();
this._launchedStudioResolver(this);
}
};
StudioSession.prototype._onAppSaved = function (appId) {
if (this._currentAppId && this._currentAppId !== appId) {
// return if a different app than the one previously saved is saved
return;
}
this._currentAppId = appId;
this.appSaved.dispatch(appId);
};
StudioSession.prototype._onAppPublished = function (appId) {
if (this._currentAppId && this._currentAppId !== appId) {
// return if a different app than the one previously saved is published
return;
}
this._currentAppId = appId;
this.appPublished.dispatch(appId);
};
StudioSession.prototype._onAppSignal = function (requestParameters) {
this.appSignal.dispatch(requestParameters);
};
StudioSession.DEFAULT_SOURCE_NAME = "Host";
return StudioSession;
}());
Embedding.StudioSession = StudioSession;
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
var StudioUtilities;
(function (StudioUtilities) {
function getBaseStudioUrlFromEndpoint(endpoint) {
var baseUrl;
switch (endpoint) {
case Core.Embedding.Endpoint.PROD:
baseUrl = Core.Embedding.CreateAppUrl.PROD;
break;
case Core.Embedding.Endpoint.GCCMODERATE:
baseUrl = Core.Embedding.CreateAppUrl.GCCMODERATE;
break;
case Core.Embedding.Endpoint.GCCHIGH:
baseUrl = Core.Embedding.CreateAppUrl.GCCHIGH;
break;
case Core.Embedding.Endpoint.MOONCAKE:
baseUrl = Core.Embedding.CreateAppUrl.MOONCAKE;
break;
case Core.Embedding.Endpoint.DOD:
baseUrl = Core.Embedding.CreateAppUrl.DOD;
break;
case Core.Embedding.Endpoint.INT:
baseUrl = Core.Embedding.CreateAppUrl.INT;
break;
case Core.Embedding.Endpoint.TEST:
baseUrl = Core.Embedding.CreateAppUrl.TEST;
break;
case Core.Embedding.Endpoint.DEV:
baseUrl = Core.Embedding.CreateAppUrl.DEV;
break;
default:
baseUrl = Core.Embedding.CreateAppUrl.PROD;
break;
}
return baseUrl;
}
StudioUtilities.getBaseStudioUrlFromEndpoint = getBaseStudioUrlFromEndpoint;
})(StudioUtilities = Embedding.StudioUtilities || (Embedding.StudioUtilities = {}));
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
//!
//! Copyright (C) Microsoft Corporation.  All rights reserved.
//!
var Authoring;
(function (Authoring) {
var Embedding;
(function (Embedding) {
var TemplatePatterns = /** @class */ (function () {
function TemplatePatterns() {
}
Object.defineProperty(TemplatePatterns, "list", {
// Gets the standard list template pattern
get: function () {
return {
name: "Gallery",
type: "Gallery",
variant: "BrowseLayout_Vertical_OneTextVariant_ver4.0",
properties: {
"Layout": "Layout.Vertical",
"Height": "%Screen%.Height",
"Y": "0",
"Width": "%Screen%.Width",
"X": "0",
"Items": "%Host%.Data"
}
};
},
enumerable: true,
configurable: true
});
return TemplatePatterns;
}());
Embedding.TemplatePatterns = TemplatePatterns;
})(Embedding = Authoring.Embedding || (Authoring.Embedding = {}));
})(Authoring || (Authoring = {}));
//# sourceMappingURL=../../../../../obj/Assets/js/AppMagic.Authoring.Sdk.Embedding/index.js.map
var MscrmControls;
(function (MscrmControls) {
var CanvasControl;
(function (CanvasControl) {
'use strict';
/**
* This class is responsible for fetching schema and data for an XRM entity
*
* @export
* @class CanvasControlDataHelper
*/
var CanvasControlDataHelper = (function () {
function CanvasControlDataHelper(customControlInfo) {
this.customControlInfo = customControlInfo;
this.appName = "";
this.appNamePromise = Promise.resolve("");
this.latestAppId = "";
this.latestAppIdPromise = Promise.resolve("");
}
Object.defineProperty(CanvasControlDataHelper.prototype, "EntityCCFSchema", {
get: function () {
return this.entityCCFSchema;
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlDataHelper.prototype, "EntityCanvasSchema", {
get: function () {
return this.entityCanvasSchema;
},
enumerable: true,
configurable: true
});
/**
* Gets the schema for an entity
*
* @param {string} entityName The entity name
* @returns Promise<StringMap<string>>
* @memberof CanvasControlDataHelper
*/
CanvasControlDataHelper.prototype.getSchemaForEntity = function (entityName) {
var _this = this;
this.entityXRMSchema = {};
this.entityCanvasSchema = {};
this.entityCCFSchema = {};
if (this.isNewCanvasControl) {
this.entityCanvasSchema = { ItemId: "s", RefreshedOn: "d" };
return Promise.resolve(this.entityCanvasSchema);
}
else {
var endpoint = "EntityDefinitions(LogicalName='" + entityName + "')/Attributes";
var queryString = "$select=AttributeTypeName,LogicalName, SchemaName";
var entitySchemaPromise = this.retrieveMultipleRecords(endpoint, queryString);
var primaryIdAttributePromise = this.getPrimaryIdAttribute(entityName);
return Promise.all([entitySchemaPromise, primaryIdAttributePromise])
.then(function (result) {
if (result && result[0] && result[0].entities && result[0].entities.length > 0) {
result[0].entities.forEach(function (item) {
if (item != undefined && item.AttributeTypeName != undefined && item.AttributeTypeName.Value != undefined) {
item.AttributeTypeName = item.AttributeTypeName.Value;
}
var fieldSchema = item;
if (fieldSchema) {
if (fieldSchema.AttributeTypeName) {
/* Truncate the "Type" tail at the end of AttributeTypeName, in this way, we don't touch the data schema*/
fieldSchema.AttributeTypeName = _this.truncateStringTail("type", fieldSchema.AttributeTypeName.toLowerCase());
}
if (fieldSchema.LogicalName && result[1] && fieldSchema.LogicalName.toLowerCase() === result[1].toLowerCase()) {
fieldSchema.AttributeTypeName = "primarykey";
}
_this.entityXRMSchema[fieldSchema.LogicalName] = fieldSchema;
_this.entityCCFSchema[fieldSchema.LogicalName] = _this.populateCCFSchemaFromField(fieldSchema);
_this.entityCanvasSchema[fieldSchema.SchemaName] = _this.populateCanvasSchemaFromField(fieldSchema);
}
});
return _this.entityCanvasSchema;
}
}, function (error) {
CanvasControl.CanvasControlAuthoringController.logError("getSchema", error);
return Promise.reject(error);
});
}
};
Object.defineProperty(CanvasControlDataHelper.prototype, "isNewCanvasControl", {
get: function () {
return this.customControlInfo && this.customControlInfo.FullName() === "MscrmControls.Canvas.CanvasControl";
},
enumerable: true,
configurable: true
});
CanvasControlDataHelper.prototype.truncateStringTail = function (tail, initialString) {
var tailIndex = initialString.lastIndexOf(tail);
if ((tailIndex > 0) && (tailIndex + tail.length === initialString.length)) {
initialString = initialString.substring(0, initialString.length - tail.length);
}
return initialString;
};
/**
* Gets primaryId Attribute name for an entity.
*
* @param {string} entityName
* @returns {Promise<string>}
* @memberof CanvasControlDataHelper
*/
CanvasControlDataHelper.prototype.getPrimaryIdAttribute = function (entityName) {
var endpoint = "EntityDefinitions";
var queryString = "$select=PrimaryIdAttribute&$filter=LogicalName eq '" + entityName + "'";
return this.retrieveMultipleRecords(endpoint, queryString).then(function (result) {
return (result && result.entities && result.entities.length > 0) ? result.entities[0].PrimaryIdAttribute : "";
}, function (error) {
CanvasControl.CanvasControlAuthoringController.logError("getPrimaryIdAttribute", error);
return Promise.resolve("");
});
};
/**
* Gets data for an entity. Based on the supplied parameter IsListData, it can return 1 or 20 records
*
* @returns {Promise<Core.Embedding.TableData>}
* @memberof CanvasControlDataHelper
*/
CanvasControlDataHelper.prototype.getDataForEntity = function (entityName) {
var _this = this;
if (entityName && entityName !== this.entityName) {
this.entityName = entityName;
this.entityDataPromise = this.getSchemaForEntity(entityName)
.then(function (schema) {
if (_this.isNewCanvasControl) {
//We don't fetch data for new canvas control
return null;
}
else {
return _this.retrieveMultipleRecords(entityName, (_this.customControlInfo.IsListControl() === true ? "$top=20" : "$top=1"))
.then(function (data) {
return _this.onRetrieveDataSuccess(data);
}, function (error) {
CanvasControl.CanvasControlAuthoringController.logError("getData", error);
return Promise.reject(error);
});
}
});
}
return this.entityDataPromise;
};
CanvasControlDataHelper.prototype.getAppId = function (appName) {
if (appName && appName != "" && appName != this.appName) {
this.appName = appName;
var endpoint = "canvasapps";
var queryString = "$select=canvasappid&$filter=name eq '" + appName + "'";
this.latestAppIdPromise = this.retrieveMultipleRecords(endpoint, queryString)
.then(function (result) {
return (result && result.entities && result.entities.length > 0) ? result.entities[0].canvasappid : "";
}, function (error) {
CanvasControl.CanvasControlAuthoringController.logError("getAppId", error);
return Promise.resolve("");
});
}
return this.latestAppIdPromise;
};
CanvasControlDataHelper.prototype.getAppName = function (appId) {
if (appId && appId != "" && appId != this.latestAppId) {
this.latestAppId = appId;
var entity = "canvasapps";
var queryString = "$select=name";
this.appNamePromise = this.retrieveSingleRecord(entity, appId, queryString)
.then(function (result) {
return (result && result.name) ? result.name : "";
}, function (error) {
CanvasControl.CanvasControlAuthoringController.logError("getAppName", error);
return Promise.resolve("");
});
}
return this.appNamePromise;
};
/**
* Retrieves resource values using metadata service
*
* @param {string[]} resourceStrings
* @returns StringMap
* @memberof CanvasControlDataHelper
*/
CanvasControlDataHelper.prototype.getResourceStrings = function (resourceStrings) {
if (resourceStrings) {
resourceStrings["type"] = "string";
try {
var command = new RemoteCommand("MetadataService", "GetResourceStrings");
command.SetParameter("resourceIds", resourceStrings);
var result = command.Execute();
if (result && result.Success) {
var resourceInfo = JSON.parse(result.ReturnValue);
if (resourceInfo) {
var resourceValues_1 = {};
resourceInfo.forEach(function (resource) {
resourceValues_1[resource.Key] = resource.Value;
});
return resourceValues_1;
}
}
}
catch (error) {
CanvasControl.CanvasControlAuthoringController.logError("getResourceString", error);
}
}
};
CanvasControlDataHelper.prototype.retrieveSingleRecord = function (endPoint, identifierId, queryString) {
return new Promise(function (resolve, reject) {
Xrm.WebApi.retrieveRecord(endPoint, identifierId, queryString)
.then(function (result) { return resolve(result); }, function (error) { return reject(error); });
});
};
CanvasControlDataHelper.prototype.retrieveMultipleRecords = function (endPoint, queryString) {
return new Promise(function (resolve, reject) {
Xrm.WebApi.retrieveMultipleRecords(endPoint, queryString)
.then(function (result) { return resolve(result); }, function (error) { return reject(error); });
});
};
CanvasControlDataHelper.prototype.onRetrieveDataSuccess = function (xrmData) {
var _this = this;
var canvasData = [];
if (xrmData && xrmData.entities && xrmData.entities.length > 0) {
xrmData.entities.forEach(function (xrmDataRow) {
var canvasDataRow = {};
//Iterate in columns in schema and get data for different types
for (var columnName in _this.entityCCFSchema) {
var ccfSchemaField = _this.entityCCFSchema[columnName];
switch (ccfSchemaField.Type) {
case "lookup":
case "owner":
canvasDataRow[ccfSchemaField.DisplayName] = xrmDataRow["_" + ccfSchemaField.FieldName + "_value@OData.Community.Display.V1.FormattedValue"];
canvasDataRow[ccfSchemaField.DisplayName + "Name"] = xrmDataRow["_" + ccfSchemaField.FieldName + "_value"];
break;
case "boolean":
canvasDataRow[ccfSchemaField.DisplayName] = xrmDataRow[ccfSchemaField.FieldName];
canvasDataRow[ccfSchemaField.DisplayName + "Name"] = xrmDataRow[ccfSchemaField.FieldName];
break;
case "multiselectpicklist":
case "picklist":
case "status":
case "state":
canvasDataRow[ccfSchemaField.DisplayName] = xrmDataRow[ccfSchemaField.FieldName + "@OData.Community.Display.V1.FormattedValue"];
canvasDataRow[ccfSchemaField.DisplayName + "Name"] = xrmDataRow[ccfSchemaField.FieldName];
break;
case "virtual":
//Do nothing for virtual fields as they are already taken care of by other types
break;
default:
canvasDataRow[ccfSchemaField.DisplayName] = xrmDataRow[ccfSchemaField.FieldName];
break;
}
}
canvasData.push(canvasDataRow);
});
}
return canvasData;
};
CanvasControlDataHelper.prototype.populateCCFSchemaFromField = function (field) {
return {
DisplayName: field.SchemaName,
FieldName: field.LogicalName,
Type: field.AttributeTypeName
};
};
CanvasControlDataHelper.prototype.populateCanvasSchemaFromField = function (field) {
switch (field.AttributeTypeName.toLowerCase()) {
case "datetime":
return "d";
case "boolean":
return "b";
case "integer":
case "double":
case "decimal":
case "bigint":
case "money":
return "n";
default:
return "s";
}
};
return CanvasControlDataHelper;
}());
CanvasControl.CanvasControlDataHelper = CanvasControlDataHelper;
})(CanvasControl = MscrmControls.CanvasControl || (MscrmControls.CanvasControl = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
var CanvasControl;
(function (CanvasControl) {
'use strict';
/**
* This class is responsible for fetching wadl for App to Host Form communication
*
* @export
* @class AppToHostWadlProvider
*/
var AppToHostWadlProvider = (function () {
function AppToHostWadlProvider() {
this.wadl = "<application xmlns:xml=\"http://www.w3.org/XML/1998/namespace\" xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" xmlns:service=\"https://tip1-shared.azure-apim.net/apim/logicflows\" xmlns:siena=\"http://schemas.microsoft.com/MicrosoftProjectSiena/WADL/2014/11\" siena:serviceId=\"Embeddingcanvas\" xmlns=\"http://wadl.dev.java.net/2009/02\">\n        <doc title=\"PowerApps to host form basic WADL communication\" />\n        <resources base=\"http://hostform/\">\n        <resource path=\"/embeddingcanvas/saveForm\">\n        <method siena:requiresAuthentication=\"false\" name=\"POST\" id=\"SaveForm\" siena:isHostFunction=\"true\">\n        <doc title=\"Save the data on the host model-driven form.\" />\n        <request>\n        <param style=\"header\" name=\"Function\" required=\"true\" fixed=\"SaveForm\" />\n        <representation mediaType=\"application/json\" />\n        </request>\n        </method>\n        </resource>\n        <resource path=\"/embeddingcanvas/refreshForm\">\n        <method siena:requiresAuthentication=\"false\" name=\"POST\" id=\"RefreshForm\" siena:isHostFunction=\"true\">\n        <doc title=\"Refresh the host model-driven form.\" />\n        <request>\n        <param style=\"header\" name=\"Function\" required=\"true\" fixed=\"RefreshForm\" />\n        <param style=\"header\" name=\"showPrompt\" required=\"true\" type=\"xs:string\">\n        <doc title=\"Show or hide a confirmation prompt to the user before saving changes.\" />\n        </param>\n        <representation mediaType=\"application/json\" />\n        </request>\n        </method>\n        </resource>\n        <resource path=\"/embeddingcanvas/navigateToMainForm\">\n        <method siena:requiresAuthentication=\"false\" name=\"POST\" id=\"NavigateToMainForm\" siena:isHostFunction=\"true\">\n        <doc title=\"Navigate the host window to a model-driven main form\" />\n        <request>\n        <param style=\"header\" name=\"Function\" required=\"true\" fixed=\"NavigateToMainForm\" />\n        <param style=\"header\" name=\"entityName\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The parent entity of the form\" />\n        </param>\n        <param style=\"header\" name=\"mainFormName\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The name of the main form to display.\" />\n        </param>\n        <param style=\"header\" name=\"recordId\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The ID of the record to display in the form.\" />\n        </param>\n        <representation mediaType=\"application/json\" />\n        </request>\n        </method>\n        </resource>\n        <resource path=\"/embeddingcanvas/openQuickCreateForm\">\n        <method siena:requiresAuthentication=\"false\" name=\"POST\" id=\"OpenQuickCreateForm\" siena:isHostFunction=\"true\">\n        <doc title=\" Opens a quick create form in the host window\" />\n        <request>\n        <param style=\"header\" name=\"Function\" required=\"true\" fixed=\"OpenQuickCreateForm\" />\n        <param style=\"header\" name=\"entityName\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The parent entity of the form.\" />\n        </param>\n        <representation mediaType=\"application/json\" />\n        </request>\n        </method>\n        </resource>\n        <resource path=\"/embeddingcanvas/navigateToView\">\n        <method siena:requiresAuthentication=\"false\" name=\"POST\" id=\"NavigateToView\" siena:isHostFunction=\"true\">\n        <doc title=\"Navigate the host window to a view.\" />\n        <request>\n        <param style=\"header\" name=\"Function\" required=\"true\" fixed=\"NavigateToView\" />\n        <param style=\"header\" name=\"entityName\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The parent entity of the view.\" />\n        </param>\n        <param style=\"header\" name=\"viewName\" type=\"xs:string\" required=\"true\">\n        <doc title=\"The name of the view to display.\" />\n        </param>\n        </request>\n        </method>\n        </resource>\n        </resources>\n        </application>";
}
Object.defineProperty(AppToHostWadlProvider.prototype, "appToHostWadl", {
get: function () {
return this.wadl;
},
enumerable: true,
configurable: true
});
return AppToHostWadlProvider;
}());
CanvasControl.AppToHostWadlProvider = AppToHostWadlProvider;
})(CanvasControl = MscrmControls.CanvasControl || (MscrmControls.CanvasControl = {}));
})(MscrmControls || (MscrmControls = {}));
var MscrmControls;
(function (MscrmControls) {
var CanvasControl;
(function (CanvasControl) {
'use strict';
/**
* This class is responsible for interacting with Canvas studio and passing schema and data from XRM form designer.
*
* @export
* @class CanvasControlAuthoringController
*/
var CanvasControlAuthoringController = (function () {
function CanvasControlAuthoringController(customControlInfo, customControlSystemInfo) {
this.appToHostWadlProvider = new CanvasControl.AppToHostWadlProvider();
this.appIdPropertyName = "appId";
this.appNamePropertyName = "appName";
if (customControlInfo !== undefined && customControlSystemInfo !== undefined) {
this.customControlInfo = customControlInfo;
this.customControlSystemInfo = customControlSystemInfo;
this.canvasControlDataHelper = new CanvasControl.CanvasControlDataHelper(this.customControlInfo);
this.addCustomizeButtonToControlPropertyTable();
this.populateEntityNameProperty();
this.geoName = this.customControlSystemInfo.GeoName();
}
}
Object.defineProperty(CanvasControlAuthoringController.prototype, "endpoint", {
get: function () {
//Endpoint can be changed to DEV or TEST using local storage
if (window && window.localStorage && window.localStorage.getItem("canvasDebugEndpoint")) {
return window.localStorage.getItem("canvasDebugEndpoint");
}
var endpoint;
switch (this.geoName) {
case "TIP":
endpoint = "TEST";
break;
case "GCC":
endpoint = "GCCMODERATE";
break;
case "USG":
endpoint = "GCCHIGH";
break;
case "CHN":
endpoint = "MOONCAKE";
break;
case "DOD":
endpoint = "DOD";
break;
default:
endpoint = "PROD";
break;
}
return endpoint;
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "authoringSessionOptions", {
get: function () {
var endpoint = this.endpoint;
var authoringSessionOptions = {
endpoint: endpoint,
source: "ModelDrivenFormIntegration"
};
return authoringSessionOptions;
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "customizeButtonDescription", {
get: function () {
var customizeButtonDesc = "";
if (this.resourceStrings) {
if (this.isInDebugMode) {
//For debug mode enabled, we always enable Customize button so setting customize button description
customizeButtonDesc = this.resourceStrings["CanvasControl.Customize.Description"];
}
else if (this.customControlSystemInfo.IsOnPremise()) {
customizeButtonDesc = this.resourceStrings["CanvasControl.Customize.OnPremiseAlert"];
}
else if (!this.customControlInfo.IsControlEnabled()) {
customizeButtonDesc = this.resourceStrings["CanvasControl.Customize.DisabledAlert"];
}
else if (this.isSovereignCloud && !this.isNewCanvasControl) {
customizeButtonDesc = this.resourceStrings["CanvasControl.Customize.ControlNotSupportedAlert"];
}
else {
customizeButtonDesc = this.resourceStrings["CanvasControl.Customize.Description"];
}
}
return customizeButtonDesc;
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "customizeButtonDisabled", {
get: function () {
var isOnPremise = this.customControlSystemInfo.IsOnPremise();
var isControlEnabled = this.customControlInfo.IsControlEnabled();
if (this.isInDebugMode) {
//For debug mode enabled we always enable the customize button
return false;
}
else {
return isOnPremise || !isControlEnabled || (this.isSovereignCloud && !this.isNewCanvasControl);
}
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isInDebugMode", {
get: function () {
if (window && window.localStorage) {
var value = window.localStorage.getItem("canvasDebug");
if (value && value.toLowerCase() === "true") {
return true;
}
}
return false;
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isNewCanvasControl", {
get: function () {
return this.customControlInfo && this.customControlInfo.FullName() === "MscrmControls.Canvas.CanvasControl";
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isHostDefinitionEnabled", {
get: function () {
return this.isAppToHostDebugMode() || this.isFeatureEnabled("AppToHostCommunication");
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isGCC", {
get: function () {
return this.geoName && (this.geoName === "GCC" || this.geoName === "USG");
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isMooncake", {
get: function () {
return this.geoName && (this.geoName === "CHN");
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isDoD", {
get: function () {
return this.geoName && this.geoName === "DOD";
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "isSovereignCloud", {
get: function () {
return this.isGCC || this.isMooncake || this.isDoD;
},
enumerable: true,
configurable: true
});
CanvasControlAuthoringController.prototype.isAppToHostDebugMode = function () {
if (window && window.localStorage) {
var value = window.localStorage.getItem("canvas.hostDefinition");
if (value && value.toLowerCase() === "true") {
return true;
}
}
return false;
};
CanvasControlAuthoringController.prototype.isFeatureEnabled = function (feature) {
var featureControl = this.customControlInfo.CustomControlFeatureControl();
if (featureControl[feature] !== undefined) {
return featureControl[feature];
}
return false;
};
Object.defineProperty(CanvasControlAuthoringController.prototype, "recordTemplate", {
get: function () {
return {
name: "Form",
type: "FormViewer",
variant: "",
properties: {
"Layout": "Layout.Vertical",
"Height": "%Screen%.Height",
"Y": "0",
"Width": "%Screen%.Width",
"X": "0",
"DataSource": "%Host%.Data",
"Item": "First(%Host%.Data)"
}
};
},
enumerable: true,
configurable: true
});
Object.defineProperty(CanvasControlAuthoringController.prototype, "blankTemplate", {
get: function () {
return {
controls: []
};
},
enumerable: true,
configurable: true
});
CanvasControlAuthoringController.prototype.initStudioSessionOptions = function () {
var _this = this;
var currentAppName = this.customControlInfo.GetPropertyValue(this.appNamePropertyName);
return this.canvasControlDataHelper.getAppId(currentAppName).then(function (latestAppId) {
var appId = (latestAppId && latestAppId != "") ? latestAppId : _this.customControlInfo.GetPropertyValue(_this.appIdPropertyName);
var solutionId = _this.customControlSystemInfo.SolutionId();
var environmentId = _this.customControlSystemInfo.EnvironmentId();
var studioSessionOptions = {};
if (appId && appId !== "") {
studioSessionOptions.appId = "/providers/Microsoft.PowerApps/apps/" + appId;
}
else {
if (_this.isNewCanvasControl) {
//Only send these params when appId is not available (New app scenario)
studioSessionOptions.newAppAction = "model-driven-form-new-data";
studioSessionOptions.authoringQueryParm = {
"entity-set-name": _this.customControlInfo.GetPropertyValue("EntitySetName"),
"entity-logical-name": _this.customControlInfo.GetPropertyValue("TargetEntity")
};
studioSessionOptions.appTemplate = _this.blankTemplate;
}
}
if (environmentId && environmentId != "" && solutionId && solutionId != "") {
studioSessionOptions.environmentName = environmentId;
studioSessionOptions.solutionId = solutionId;
}
if (_this.isFeatureEnabled("EnableCanvasAppRecordTemplate") && !_this.customControlInfo.IsListControl()) {
studioSessionOptions.appTemplate = _this.recordTemplate;
}
return studioSessionOptions;
});
};
CanvasControlAuthoringController.prototype.initResourceStrings = function () {
var resourceIds = [
"CanvasControl.Customize.Message",
"CanvasControl.Customize.Description",
"CanvasControl.Customize.DisabledAlert",
"CanvasControl.Customize.OnPremiseAlert",
"CanvasControl.Customize.ControlNotSupportedAlert",
"common.scripts.global.js.PopupBlockerError",];
this.resourceStrings = this.canvasControlDataHelper.getResourceStrings(resourceIds);
};
CanvasControlAuthoringController.prototype.addCustomizeButtonToControlPropertyTable = function () {
this.initResourceStrings();
if (this.resourceStrings) {
var customizeText = this.resourceStrings["CanvasControl.Customize.Message"];
var customizationView = $("\n                <div style=\"position: absolute;bottom: 40px; background-color: #fff;\">\n                    <span class=\"customize-msg\" style=\"display: block;overflow: auto;max-height: 60px;margin-bottom: 5px;font-size: 11px;\"></span>\n                    <button class=\"ms-crm-Button customize-action\" onmouseover=\"Mscrm.ButtonUtils.hoverOn(this);\" onmouseout=\"Mscrm.ButtonUtils.hoverOff(this);\">Customize</button>\n                </div>");
$(".customize-action", customizationView).prop('disabled', this.customizeButtonDisabled);
$(".customize-action", customizationView).on("click", this.onCustomizeClick.bind(this));
$(".customize-msg", customizationView).text(this.customizeButtonDescription);
$(".customize-action", customizationView).text(customizeText);
this.customControlInfo.SetCustomizationView(customizationView[0]);
}
};
CanvasControlAuthoringController.prototype.populateEntityNameProperty = function () {
this.customControlInfo.SetPropertyValue("entityName", this.customControlInfo.GetPropertyValue("EntityDisplayName"));
};
CanvasControlAuthoringController.prototype.onCustomizeClick = function () {
var _this = this;
try {
this.disposeExistingSessions();
this.authoringSession = new Authoring.Embedding.AuthoringSession(this.authoringSessionOptions);
var currentEntity = this.customControlInfo.GetPropertyValue("TargetEntity");
if (currentEntity && currentEntity !== "") {
var studioPromise = this.initStudioSessionOptions().then(function (options) {
return _this.authoringSession.initStudio(options)
.catch(function (error) {
//Error during opening studio popup blocker or window closes before app was created
alert(_this.resourceStrings["common.scripts.global.js.PopupBlockerError"] + window.location.hostname);
});
});
var dataPromise = this.canvasControlDataHelper.getDataForEntity(currentEntity);
Promise.all([studioPromise, dataPromise])
.then(function (result) {
try {
if (result && result[0]) {
_this.studioSession = result[0];
var data = result[1];
_this.subscribeToEvents();
if (_this.isHostDefinitionEnabled) {
_this.studioSession.setHostDefinition(_this.appToHostWadlProvider.appToHostWadl);
}
_this.studioSession.updateSchema(_this.canvasControlDataHelper.EntityCanvasSchema);
if (data) {
_this.studioSession.updateData(data);
}
}
}
catch (error) {
CanvasControlAuthoringController.logError("OnSendingSchema/Data/WADL", error);
}
}), function (error) {
CanvasControlAuthoringController.logError("StudioPromise/DataPromise", error);
};
}
}
catch (error) {
CanvasControlAuthoringController.logError("OnCustomizeClick", error);
}
};
CanvasControlAuthoringController.prototype.subscribeToEvents = function () {
var _this = this;
this.studioSession.appPublished.subscribe(function (appId) {
try {
if (appId && appId !== "") {
var appIdValue = appId.split("/");
var canvasAppId = appIdValue[appIdValue.length - 1];
_this.customControlInfo.SetPropertyValue(_this.appIdPropertyName, canvasAppId);
_this.canvasControlDataHelper.getAppName(canvasAppId).then(function (appName) {
_this.customControlInfo.SetPropertyValue(_this.appNamePropertyName, appName);
});
if (_this.canvasControlDataHelper.EntityCCFSchema) {
//When the app is published, update entity schema
_this.customControlInfo.SetPropertyValue("schema", JSON.stringify(_this.canvasControlDataHelper.EntityCCFSchema));
}
}
}
catch (error) {
CanvasControlAuthoringController.logError("OnAppPublished", error);
}
});
};
CanvasControlAuthoringController.prototype.disposeExistingSessions = function () {
if (this.authoringSession) {
this.authoringSession.dispose();
this.authoringSession = undefined;
}
if (this.studioSession) {
this.studioSession.dispose();
this.studioSession = undefined;
}
};
CanvasControlAuthoringController.logError = function (source, error) {
console.log("Canvas customization error. Source: " + source + " Error: " + error);
};
return CanvasControlAuthoringController;
}());
CanvasControl.CanvasControlAuthoringController = CanvasControlAuthoringController;
})(CanvasControl = MscrmControls.CanvasControl || (MscrmControls.CanvasControl = {}));
})(MscrmControls || (MscrmControls = {}));
//# sourceURL=CanvasControl.js
//# sourceMappingURL=CanvasControl.js.map
