var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
* @license Copyright (c) Microsoft Corporation. All rights reserved.
*/
define("interfaces/IOdataErrorResponse", ["require", "exports"], function (require, exports) {
    "use strict";
});
// Prototype of basic CRM SDK
define("lib/crmInterface", ["require", "exports", 'bluebird'], function (require, exports, Promise) {
    "use strict";
    var crmNamespace = '{00020329-0000-0000-c000-000000000046}';
    var XhrWrapper = (function () {
        function XhrWrapper(_method, _url, _extraHeaders) {
            if (_extraHeaders === void 0) { _extraHeaders = {}; }
            this._method = _method;
            this._url = _url;
            this._extraHeaders = _extraHeaders;
            this._xhr = new XMLHttpRequest();
        }
        XhrWrapper.prototype._setHeaders = function () {
            this._xhr.setRequestHeader("Accept", "application/json");
            this._xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            this._xhr.setRequestHeader("OData-MaxVersion", "4.0");
            this._xhr.setRequestHeader("OData-Version", "4.0");
            this._xhr.setRequestHeader("Authorization", this._state.app.crmAccessKey);
            this._xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (this._extraHeaders) {
                for (var key in this._extraHeaders) {
                    var value = this._extraHeaders[key];
                    if (value !== null && value !== undefined && value !== "") {
                        this._xhr.setRequestHeader(key, value);
                    }
                }
            }
        };
        XhrWrapper.prototype._send = function (body, isSuccessFn, resolve, reject) {
            var _this = this;
            this._state = XhrWrapper.GET_STATE();
            if (!this._state.app.crmAccessKeyAquiring) {
                var callback = function (callbackType) {
                    if (callbackType === void 0) { callbackType = null; }
                    return function () {
                        var success = isSuccessFn(_this._xhr.status);
                        var error = {
                            message: ""
                        };
                        if (callbackType === "error") {
                            error.message = "Error happened during CrmXHR Request execution. ";
                        }
                        else if (callbackType === "timeout") {
                            error.message = "CrmXHR Request timed out. ";
                        }
                        else {
                            var response = null;
                            if (_this._xhr.response) {
                                try {
                                    response = JSON.parse(_this._xhr.response);
                                }
                                catch (e) {
                                    reject(e);
                                    return;
                                }
                            }
                            if (!!success) {
                                resolve(response);
                                return;
                            }
                            else {
                                reject(response && response.error);
                                return;
                            }
                        }
                        reject(error);
                    };
                };
                this._xhr.onload = callback();
                this._xhr.onerror = callback("error");
                this._xhr.ontimeout = callback("timeout");
                this._xhr.open(this._method, this._url);
                this._setHeaders();
                this._xhr.responseType = "json";
                this._xhr.send(body);
            }
            else {
                setTimeout(function () {
                    _this._send(body, isSuccessFn, resolve, reject);
                }, XhrWrapper.SEND_RETRY_TIMEOUT);
            }
        };
        XhrWrapper.prototype.getResponseHeader = function (name) {
            return this._xhr.getResponseHeader(name);
        };
        XhrWrapper.prototype.send = function (body, isSuccessFn) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this._send(body, isSuccessFn, resolve, reject);
            });
        };
        XhrWrapper.SEND_RETRY_TIMEOUT = 200;
        return XhrWrapper;
    }());
    exports.XhrWrapper = XhrWrapper;
    function crmCreate(entitySetName, entity) {
        return new Promise(function (resolve, reject) {
            var url = encodeURI(getWebAPIPath() + entitySetName);
            var request = new XhrWrapper("POST", url);
            request.send(JSON.stringify(entity), function (status) { return status === 204; }).then(function (response) {
                resolve(request.getResponseHeader("OData-EntityId"));
            }, reject);
        });
    }
    exports.crmCreate = crmCreate;
    function crmDetectDuplicates(entitySetName, entity) {
        return new Promise(function (resolve, reject) {
            var businessEntity = Object.assign({}, (_a = {},
                _a['@odata.context'] = getWebAPIPath() + '$metadata#contacts/$entity',
                _a['@odata.type'] = 'Microsoft.Dynamics.CRM.contact',
                _a
            ), entity);
            var url = getWebAPIPath() + 'RetrieveDuplicates(BusinessEntity=@p1,MatchingEntityName=@p2,PagingInfo=@p3)?' +
                '@p1=' + encodeURIComponent(JSON.stringify(businessEntity)) +
                '&@p2=\'contact\'' +
                '&@p3=' + encodeURIComponent(JSON.stringify({ PageNumber: 1, Count: 10 }));
            var request = new XhrWrapper("GET", url);
            request.send(null, function (status) { return status === 200; }).then(function (response) {
                resolve(response && response.value || []);
            }, reject);
            var _a;
        });
    }
    exports.crmDetectDuplicates = crmDetectDuplicates;
    function crmGet(entitySetName, parameters) {
        return new Promise(function (resolve, reject) {
            var queryParams = parameters ? '?' + Object.keys(parameters).map(function (k) { return (k + "=" + parameters[k]); }).join('&') : '';
            var url = encodeURI(getWebAPIPath() + entitySetName + '/' + queryParams);
            var request = new XhrWrapper("GET", url);
            request.send(null, function (status) { return status === 200; }).then(resolve, reject);
        });
    }
    exports.crmGet = crmGet;
    function crmDelete(entitySetName, id) {
        return new Promise(function (resolve, reject) {
            var url = encodeURI(getWebAPIPath() + entitySetName + ("(" + id + ")"));
            var request = new XhrWrapper("DELETE", url);
            request.send(null, function (status) { return status === 204; }).then(resolve, reject);
        });
    }
    exports.crmDelete = crmDelete;
    function crmAssociate(parentEntityType, parentEntityId, childEntityType, childEntityId, relationship) {
        return new Promise(function (resolve, reject) {
            var url = encodeURI(getWebAPIPath() + parentEntityType + ("(" + parentEntityId + ")/" + relationship + "/$ref"));
            var data = (_a = {},
                _a['@odata.id'] = encodeURI(getWebAPIPath() + childEntityType + ("(" + childEntityId + ")")),
                _a
            );
            var request = new XhrWrapper("POST", url);
            request.send(JSON.stringify(data), function (status) { return status === 204; }).then(resolve, reject);
            var _a;
        });
    }
    exports.crmAssociate = crmAssociate;
    function crmDisassociate(parentEntityType, parentEntityId, childEntityType, childEntityId, relationship) {
        return new Promise(function (resolve, reject) {
            var url = encodeURI(getWebAPIPath() + parentEntityType + ("(" + parentEntityId + ")/" + relationship + "/$ref"));
            var data = (_a = {},
                _a['@odata.id'] = encodeURI(getWebAPIPath() + childEntityType + ("(" + childEntityId + ")")),
                _a
            );
            var request = new XhrWrapper("POST", url);
            request.send(JSON.stringify(data), function (status) { return status === 204; }).then(resolve, reject);
            var _a;
        });
    }
    exports.crmDisassociate = crmDisassociate;
    function crmGetNextActivity(crmId) {
        return crmOrganizationData({
            $select: '',
            $top: '1',
            $orderby: 'ScheduledStart asc',
            $filter: "RegardingObjectId/Id eq guid'" + crmId + "' and ScheduledStart gt datetime'" + new Date().toISOString() + "'",
        });
    }
    exports.crmGetNextActivity = crmGetNextActivity;
    function crmGetPrevActivity(crmId) {
        return crmOrganizationData({
            $select: '',
            $top: '1',
            $orderby: 'ScheduledStart desc',
            $filter: "RegardingObjectId/Id eq guid'" + crmId + "' and ScheduledStart lt datetime'" + new Date().toISOString() + "'",
        });
    }
    exports.crmGetPrevActivity = crmGetPrevActivity;
    function crmOrganizationData(parameters) {
        return new Promise(function (resolve, reject) {
            var queryParams = parameters ? '?' + Object.keys(parameters).map(function (k) { return (k + "=" + encodeURIComponent(parameters[k])); }).join('&') : '';
            var query = encodeURI("/XRMServices/2011/OrganizationData.svc/ActivityPointerSet/") + queryParams;
            var request = new XhrWrapper("GET", query);
            request.send(null, function (status) { return status === 200; }).then(function (response) {
                resolve(response.d);
            }, reject);
        });
    }
    exports.crmOrganizationData = crmOrganizationData;
    function whoAmI() {
        return new Promise(function (resolve, reject) {
            var query = encodeURI(getWebAPIPath() + "WhoAmI()");
            var request = new XhrWrapper("GET", query);
            request.send(null, function (status) { return status === 200; }).then(resolve, reject);
        });
    }
    exports.whoAmI = whoAmI;
    function retrievePrincipalSyncAttributesMapping(userId) {
        return new Promise(function (resolve, reject) {
            var query = encodeURI(getWebAPIPath() + "systemusers(" + userId + ")/Microsoft.Dynamics.CRM.RetrievePrincipalSyncAttributeMappings()");
            var request = new XhrWrapper("GET", query);
            request.send(null, function (status) { return status === 200; }).then(resolve, reject);
        });
    }
    exports.retrievePrincipalSyncAttributesMapping = retrievePrincipalSyncAttributesMapping;
    function retrieveContactEntityAttributesMetadata() {
        var params = {
            $select: "LogicalName,RequiredLevel,DisplayName,MaxLength",
        };
        return crmGet("EntityDefinitions(LogicalName='contact')/Attributes/Microsoft.Dynamics.CRM.StringAttributeMetadata", params);
    }
    exports.retrieveContactEntityAttributesMetadata = retrieveContactEntityAttributesMetadata;
    function transformExchangeToCrm(exchangeEntity, mapping) {
        var entity = {};
        Object.keys(mapping).forEach(function (key) {
            if (exchangeEntity.hasOwnProperty(key)) {
                // Check if its a possible date field
                if (key == 'Birthday' || key == 'WeddingAnniversary') {
                }
                else {
                    entity[mapping[key]['AttributeCrmName']] = exchangeEntity[key];
                }
            }
        });
        return entity;
    }
    exports.transformExchangeToCrm = transformExchangeToCrm;
    function getSingleValueExtendedProperty(type, name, properties) {
        var propertyId = type + " " + crmNamespace + " Name " + name;
        if (properties === undefined || !(properties instanceof Array)) {
            return undefined;
        }
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].PropertyId === propertyId) {
                return properties[i].Value;
            }
        }
        return undefined;
    }
    exports.getSingleValueExtendedProperty = getSingleValueExtendedProperty;
    function getWebAPIPath() {
        var port = window.location.port ? ":" + window.location.port : '';
        return window.location.protocol + "//" + window.location.hostname + port + "/api/data/v8.1/";
    }
});
// Prototyping of a dispatch handler.
define("lib/dispatcherHandler", ["require", "exports", 'bluebird'], function (require, exports, Promise) {
    "use strict";
    var dispatchKey = '';
    var callbacks = {};
    function buildDispatchMessage(n, m, a, v, c) {
        return '?k=' + dispatchKey +
            '&n=' + encodeURIComponent(n) +
            '&m=' + encodeURIComponent(m) +
            '&a=' + encodeURIComponent(a) +
            '&v=' + encodeURIComponent(v) +
            '&c=' + encodeURIComponent(c);
    }
    exports.buildDispatchMessage = buildDispatchMessage;
    function getCrmAccessKey(refreshToken, callback) {
        if (refreshToken === void 0) { refreshToken = false; }
        sendDispatchRequest('Account', 'requestSecurityToken', { refreshToken: refreshToken }, '1', { 'onRequestSecurityTokenResponse': 'crmtoken' }, callback);
    }
    exports.getCrmAccessKey = getCrmAccessKey;
    function getCallbackTokenAsync(callback) {
        sendDispatchRequest('Account', 'requestCallbackTokenAsync', {}, '1', { 'onRequestCallbackTokenAsyncResponse': 'token' }, callback);
    }
    exports.getCallbackTokenAsync = getCallbackTokenAsync;
    function displayFormForNewAppointment(parameters) {
        sendDispatchRequest('OfficeMail', 'DisplayFormForNewAppointment', { 'AppointmentParameters': parameters }, '1', {});
    }
    exports.displayFormForNewAppointment = displayFormForNewAppointment;
    function getContacts(parameters, callback) {
        sendDispatchRequest('OfficeMail', 'GetContacts', { 'Parameters': parameters }, '1', { 'onGetContacts': 'contacts' }, callback);
    }
    exports.getContacts = getContacts;
    function getContactsCount(callback) {
        sendDispatchRequest('OfficeMail', 'GetContactsCount', {}, '1', { 'onGetContactsCount': 'contactsCount' }, callback);
    }
    exports.getContactsCount = getContactsCount;
    function updateContactProperties(parameters, callback) {
        sendDispatchRequest('OfficeMail', 'UpdateContactProperties', { 'Parameters': parameters }, '1', { 'onUpdateContactProperties': 'update' }, callback, newGuid());
    }
    exports.updateContactProperties = updateContactProperties;
    function setRoamingSettingsItem(key, value, callback) {
        sendDispatchRequest('OfficeMail', 'SetRoamingSettingsItem', { 'key': key, 'value': JSON.stringify(value) }, '1', { 'onSetRoamingSettingsItem': 'srsivalue' }, callback);
    }
    exports.setRoamingSettingsItem = setRoamingSettingsItem;
    function getRoamingSettingsItem(key, callback) {
        sendDispatchRequest('OfficeMail', 'GetRoamingSettingsItem', { 'key': key }, '1', { 'onGetRoamingSettingsItem': 'grsivalue' }, callback);
    }
    exports.getRoamingSettingsItem = getRoamingSettingsItem;
    function saveRoamingSettings(callback) {
        sendDispatchRequest('OfficeMail', 'SaveRoamingSettingsAsync', {}, '1', { 'onSaveRoamingSettingsAsync': 'srsvalue' }, callback);
    }
    exports.saveRoamingSettings = saveRoamingSettings;
    function getResourceStrings(ids, callback) {
        sendDispatchRequest('Application', 'getStringValueBundle', { 'valueNames': ids }, '1', { 'onStringsResult': 'values' }, callback);
    }
    exports.getResourceStrings = getResourceStrings;
    function showAppError(code, message) {
        sendDispatchRequest('Application', 'showAppError', { code: code, message: message }, '1', {});
    }
    exports.showAppError = showAppError;
    function sendTelemetryEvent(data) {
        sendDispatchRequest('Logging', 'sendEvent', { 'data': data }, '1', {});
    }
    exports.sendTelemetryEvent = sendTelemetryEvent;
    // This is going to map methods (m) to callbacks, when we get back the same method we will call its callback in that same order.
    // This will need to be updated to support the keying that the shim supports on response. As of right now 2 calls to the shim
    // with the same method name could resolve eachothers callbacks.
    function sendDispatchRequest(n, m, a, v, c, callback, uniqueDispatchKey) {
        if (callback === void 0) { callback = undefined; }
        if (uniqueDispatchKey === void 0) { uniqueDispatchKey = undefined; }
        // Here we are going to add each of the callbacks values as a key to our callback object.
        // Since the shim will only identify the response with the value passed in our callbacks argument we must use each of these to 
        // key our callback storage.
        if (callback) {
            if (uniqueDispatchKey == undefined) {
                var keys = Object.keys(c);
                for (var i = 0; i < keys.length; i++) {
                    var val = c[keys[i]];
                    callbacks[val] = callback;
                }
            }
            else {
                callbacks[uniqueDispatchKey] = callback;
                if (a['Parameters']) {
                    a['Parameters']['uniqueDispatchKey'] = uniqueDispatchKey;
                }
            }
        }
        var message = buildDispatchMessage(n, m, JSON.stringify(a), v, JSON.stringify(c));
        window.parent.postMessage(message, '*');
    }
    exports.sendDispatchRequest = sendDispatchRequest;
    function messageEvent(resolve) {
        return function (event) {
            if (!event || !event.data) {
                return;
            }
            try {
                var data = JSON.parse(event.data);
                if (data.functionName === "deviceReady") {
                    if (!window.ShimMessageKey) {
                        dispatchKey = data.functionArguments[0];
                        window.ShimMessageKey = dispatchKey;
                        var readyMessage = buildDispatchMessage("Application", "clientInitialized", "{}", "1", "{}");
                        event.source.postMessage(readyMessage, event.origin);
                    }
                    resolve();
                }
                else {
                    var args = JSON.parse(data.functionArguments[1]);
                    var uniqueDispatchKey = args.uniqueDispatchKey;
                    // Should probably be clearing callback functions as they are used.
                    if (uniqueDispatchKey) {
                        callbacks[uniqueDispatchKey](data);
                        delete callbacks[uniqueDispatchKey];
                    }
                    else {
                        callbacks[data.functionArguments[0]](data);
                    }
                }
            }
            catch (e) {
            }
        };
    }
    function waitForDeviceReadyEvent() {
        return new Promise(function (resolve, reject) {
            dispatchKey = window.ShimMessageKey;
            window.addEventListener("message", messageEvent(resolve));
            if (dispatchKey) {
                resolve();
            }
        });
    }
    exports.waitForDeviceReadyEvent = waitForDeviceReadyEvent;
    function newGuid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
});
define("lib/resources", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.resourceStrings = [
        "MailApp_Module_Track",
        "MailApp_Module_Track_Tooltip",
        "MailApp_Module_Untrack",
        "MailApp_Module_Untrack_Tooltip",
        "MailApp_Module_Link",
        "MailApp_Module_Link_Tooltip",
        "MailApp_Module_Email",
        "MailApp_Module_Email_Tooltip",
        "MailApp_Module_Appointment",
        "MailApp_Module_Dymamics_365_Track_Alert",
        "MailApp_Module_Dymamics_365_Untrack_Alert",
        "MailApp_Module_Dymamics_365_Link_Alert",
        "MailApp_Module_Select_Track_Alert",
        "MailApp_Module_Select_Untrack_Alert",
        "MailApp_Module_Select_Link_Alert",
        "MailApp_Module_Select_Email_Alert",
        "MailApp_Module_Select_Appointment_Alert",
        "MailApp_Module_Column_Title",
        "MailApp_Module_Column_Show_Tooltip",
        "MailApp_Module_Column_Hide_Tooltip",
        "MailApp_Module_Filter_Show_Tooltip",
        "MailApp_Module_Filter_Hide_Tooltip",
        "MailApp_Module_Refresh_Tooltip",
        "MailApp_Module_No_Contacts",
        "MailApp_Module_Outlook_Contacts",
        "MailApp_Module_Dymamics_365_Contacts",
        "MailApp_Module_Tracking_Filter_All",
        "MailApp_Module_Tracking_Filter_Tracked",
        "MailApp_Module_Tracking_Filter_Untracked",
        "MailApp_Module_Not_Tracked",
        "MailApp_Module_Pending_Track",
        "MailApp_Module_Tracked",
        "MailApp_Module_Pending_Untrack",
        "MailApp_Module_Link_Title",
        "MailApp_Module_Link_Table_Title",
        "MailApp_Module_Link_Button_New",
        "MailApp_Module_Link_Button_New_Tooltip",
        "MailApp_Module_Link_Button_Link",
        "MailApp_Module_Link_Button_Link_Tooltip",
        "MailApp_Module_Link_Button_Cancel",
        "MailApp_Module_Link_Button_Cancel_Tooltip",
        "MailApp_Module_Link_Refresh_Title",
        "MailApp_Module_Link_Refresh_Message",
        "MailApp_Module_Link_Refresh_Button_Refresh",
        "MailApp_Module_Link_Refresh_Button_Cancel",
        "MailApp_Module_Alert_Button_OK",
        "MailApp_Module_Alert_Button_Cancel",
        "MailApp_Module_Alert_Track_Single_Error_If_Tracked",
        "MailApp_Module_Alert_Track_Single_Error_If_Pending_Tracked",
        "MailApp_Module_Alert_Track_Single_Error_If_Pending_Untracked",
        "MailApp_Module_Alert_Track_Batch_Error_If_Tracked",
        "MailApp_Module_Alert_Track_Batch_Error_If_Pending_Tracked",
        "MailApp_Module_Alert_Track_Batch_Error_If_Pending_Untracked",
        "MailApp_Module_Alert_Untrack_Single_Error_If_Not_Tracked",
        "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Tracked",
        "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Untracked",
        "MailApp_Module_Alert_Untrack_Batch_Error_If_Not_Tracked",
        "MailApp_Module_Alert_Untrack_Batch_Error_If_Pending_Tracked",
        "MailApp_Module_Alert_Untrack_Batch_Error_If_Pending_Untracked",
        "MailApp_Module_Alert_Untrack_Batch_Warning_If_Not_Tracked",
        "MailApp_Module_Alert_Track_Single_Required_Validation_Error",
        "MailApp_Module_Alert_Track_Single_MaxLength_Validation_Error",
        "MailApp_Module_Alert_Track_Batch_Client_Validation_Error",
        "MailApp_Module_Alert_Track_Single_Client_Validation_Error_Header",
        "MailApp_Module_Alert_Track_Single_Client_Validation_Error_Header_Plural",
        "MailApp_Module_Alert_Track_Single_Client_Validation_Error_Footer",
        "MailApp_Module_Alert_Link_Batch_Warning",
        "MailApp_Module_Alert_Link_Batch_Message",
        "MailApp_Module_Alert_Link_Batch_Dont_Show",
        "MailApp_Module_Notification_Update_In_Progress",
        "MailApp_Module_Alert_Transaction_Track_Error",
        "MailApp_Module_Alert_Transaction_Unrack_Error",
        "MailApp_Module_Alert_Link_Error_If_Pending_Untrack",
        "MailApp_Module_Alert_Link_Batch_Error_If_Pending_Untrack",
        "MailApp_Module_Alert_Single_Untrack_Title",
        "MailApp_Module_Alert_Single_Untrack_Message",
        "MailApp_Module_Alert_Batch_Untrack_Title",
        "MailApp_Module_Alert_Batch_Untrack_Message",
        "MailApp_Module_Alert_Untrack_Button_Keep",
        "MailApp_Module_Alert_Untrack_Button_Delete",
        "MailApp_Module_Alert_Untrack_Failure_Message",
        "MailApp_Module_Alert_Task_Error",
        "MailApp_Module_Alert_Previously_Tracked",
        "MailApp_Module_Alert_Previously_Tracked_Button_Link",
        "MailApp_Module_Alert_Previously_Tracked_Button_Create",
        "DelveActionHub.TrackingStatus",
        "MailApp_Module_Column_Tracking_Status",
        "MailApp_Module_Column_Full_Name",
        "MailApp_Module_Column_Title",
        "MailApp_Module_Column_Department",
        "MailApp_Module_Column_Company",
        "MailApp_Module_Column_Business_Phone",
        "MailApp_Module_Column_Email",
        "MailApp_Module_Column_Given_Name",
        "MailApp_Module_Column_Office_Location",
        "MailApp_Module_Selected_Contacts_Label",
        "MailApp_Module_Paging_First",
        "MailApp_Module_Paging_Last",
        "MoCA_OWA_Next_Activity_Label",
        "MoCA_OWA_Last_Activity_Label",
        "MoCA_OWA_No_Upcoming_Activities",
        "MoCA_OWA_No_Past_Activities",
        "MoCA_OWA_Details_Header",
        "MailApp_Module_First_Page",
        "MailApp_Module_Previous",
        "MailApp_Module_Next",
        "MailApp_Module_Search",
        "MailApp_Module_Unlink",
        "MailApp_Module_Rows_To_Show",
        "Brand_CRM",
        "MoCA_OWA_Assets_Loading_Message",
        "Brand_Microsoft",
        "PickList_KBTemplateEditor_Selector_Style_Title",
        "MailApp_Module_Alert_Track_Single_Validation_Error",
        "MailApp_Module_Alert_Track_Batch_Validation_Error",
        "MailApp_Module_Alert_Track_Some_Validation_Error",
        "MailApp_Module_Alert_Track_Single_Generic_Error",
        "MailApp_Module_Alert_Track_Batch_Generic_Error",
        "MailApp_Module_Alert_Track_Some_Generic_Error",
        "MailApp_Module_Alert_Untrack_Batch_Error_Mixed_States",
        "MailApp_Module_Alert_Untrack_Batch_Warning_Mixed_States",
        "MailApp_Module_Alert_Track_Batch_Error_Mixed_States",
        "MailApp_Module_Alert_Track_Batch_Warning_Mixed_States"
    ];
    var ResourceManager = (function () {
        function ResourceManager() {
            /**
             * Whether or not the ResourceManager has completed initialization
             */
            this.initialized = false;
        }
        ResourceManager.prototype.initialize = function (resources) {
            // Get strings from shim
            this.resources = resources;
            this.initialized = true;
        };
        /**
         * Get the localized value for a string ID
         *
         * @param {string} resourceId The resource ID specified in the resx file
         * @returns {string} The localized string value if it exists, otherwise the returns the resourceId
         */
        ResourceManager.prototype.getString = function (resourceId) {
            return this.resources[resourceId] || resourceId;
        };
        return ResourceManager;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = new ResourceManager();
});
define("modules/data/contacts/actionTypes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        INITIALIZE: 'INITIALIZE',
        // Contact load states
        OUTLOOK_LOAD_REQUEST: 'OUTLOOK_LOAD_REQUEST',
        OUTLOOK_LOAD_SUCCESS: 'OUTLOOK_LOAD_SUCCESS',
        OUTLOOK_LOAD_FAIL: 'OUTLOOK_LOAD_FAIL',
        UPDATE_COUNT: 'UPDATE_COUNT',
        // CRM Contact load states
        CRM_LOAD_REQUEST: 'CRM_LOAD_REQUEST',
        CRM_LOAD_SUCCESS: 'CRM_LOAD_SUCCESS',
        CRM_LOAD_FAIL: 'CRM_LOAD_FAIL',
        // Contact photo states
        PHOTO_LOAD_REQUEST: 'LOAD_REQUEST',
        PHOTO_LOAD_SUCCESS: 'LOAD_SUCCESS',
        PHOTO_LOAD_FAIL: 'LOAD_FAIL',
        // Paging states
        CHANGE_PAGE: 'CHANGE_PAGE',
        CHANGE_PAGE_SIZE: 'CHANGE_PAGE_SIZE',
        CHANGE_ORDER: 'CHANGE_ORDER',
        SEARCH: 'SEARCH',
        TOGGLE_COLUMN: 'TOGGLE_COLUMN',
        // Focus context states
        FOCUS_CONTACT: 'FOCUS_CONTACT',
        CLOSE_CONTEXT: 'CLOSE_CONTEXT',
        SELECT_FOCUSED_CONTACT: 'SELECT_FOCUSED_CONTACT',
        // Link account context states  
        SHOW_LINK_CONTEXT: 'SHOW_LINK_CONTEXT',
        HIDE_LINK_CONTEXT: 'HIDE_LINK_CONTEXT',
        SELECT_ACCOUNT: 'SELECT_ACCOUNT',
        ACCOUNT_LOAD_SUCCESS: 'ACCOUNT_LOAD_SUCCESS',
        CHANGE_ACCOUNT_PAGE: "CHANGE_ACCOUNT_PAGE",
        UPDATE_ACCOUNT: 'UPDATE_ACCOUNT',
        SHOW_REFRESH_PANE: 'SHOW_REFRESH_PANE',
        HIDE_REFRESH_PANE: 'HIDE_REFRESH_PANE',
        // Filter states
        TOGGLE_FILTER: 'TOGGLE_FILTER',
        CHANGE_FILTER: 'CHANGE_FILTER',
        SUBMIT_FILTER: 'SUBMIT_FILTER',
        CHANGE_TRACKED_FILTER: 'CHANGE_TRACKED_FILTER',
        // Select states
        TOGGLE_SELECT: 'TOGGLE_SELECT',
        TOGGLE_PAGE_SELECT: 'TOGGLE_PAGE_SELECT',
        TOGGLE_SETTINGS: 'TOGGLE_SETTINGS',
        // Track contacts states
        TRACK_FOCUSED_CONTACT: 'TRACK_FOCUSED_CONTACT',
        UPDATED_CONTACT_STATUS: 'UPDATED_CONTACT_STATUS',
        UPDATE_CONTACT_CRMID: 'UPDATE_CONTACT_CRMID',
        UPDATE_CONTACT_ACTIVITY: 'UPDATE_CONTACT_ACTIVITY',
        UPDATE_CONTACT: 'UPDATE_CONTACT',
        // Loading screen reducer states
        TRANSACTION_START: 'TRANSACTION_START',
        TRANSACTION_SUCCESS: 'TRANSACTION_SUCCESS',
        UPDATE_TRANSACTION: 'UPDATE_TRANSACTION',
        // Track contacts data
        SET_TRACK_DATA: "SET_TRACK_DATA",
        UPDATE_TRACK_DATA_DUPLICATES: "UPDATE_TRACK_DATA_DUPLICATES",
        CLEAR_TRACK_DATA: "CLEAR_TRACK_DATA",
        // Notifications
        SET_NOTIFICATION: 'SET_NOTIFICATION',
        CLEAR_NOTIFICATION: 'CLEAR_NOTIFICATION',
        // Alerts
        SHOW_ALERT: 'SHOW_ALERT',
        CLOSE_ALERT: 'CLOSE_ALERT',
        // Confirm Dialog
        SHOW_CONFIRM: 'SHOW_CONFIRM',
        CLOSE_CONFIRM: 'CLOSE_CONFIRM',
        // Untrack Alert
        SHOW_UNTRACK_ALERT: 'SHOW_UNTRACK_ALERT',
        CLOSE_UNTRACK_ALERT: 'CLOSE_UNTRACK_ALERT',
        // Retrack Alert
        SHOW_RETRACK_ALERT: 'SHOW_RETRACK_ALERT',
        CLOSE_RETRACK_ALERT: 'CLOSE_RETRACK_ALERT',
        REFRESH: 'REFRESH',
        CHANGE_VIEW: 'CHANGE_VIEW'
    };
});
define("modules/data/contacts/model", ["require", "exports"], function (require, exports) {
    "use strict";
    var MultipleContactsActionErrors = (function () {
        function MultipleContactsActionErrors(stateCorrespondingToResultMsg, pendingTrackMsg, pendingUntrackMsg, mixedStatesErrorMsg, mixedStatesWarningMsg) {
            this._allAreInStateCorrespondingToActionResult = stateCorrespondingToResultMsg;
            this._allArePendingTrack = pendingTrackMsg;
            this._allArePendingUntrack = pendingUntrackMsg;
            this._noOneContactIsInSuitableStateMixed = mixedStatesErrorMsg;
            this._atLeastOneContactIsInSuitableState = mixedStatesWarningMsg;
        }
        Object.defineProperty(MultipleContactsActionErrors.prototype, "allAreInStateCorrespondingToActionResult", {
            get: function () {
                return this._allAreInStateCorrespondingToActionResult;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultipleContactsActionErrors.prototype, "allArePendingTrack", {
            get: function () {
                return this._allArePendingTrack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultipleContactsActionErrors.prototype, "allArePendingUntrack", {
            get: function () {
                return this._allArePendingUntrack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultipleContactsActionErrors.prototype, "noOneContactIsInSuitableStateMixed", {
            get: function () {
                return this._noOneContactIsInSuitableStateMixed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MultipleContactsActionErrors.prototype, "atLeastOneContactIsInSuitableState", {
            get: function () {
                return this._atLeastOneContactIsInSuitableState;
            },
            enumerable: true,
            configurable: true
        });
        return MultipleContactsActionErrors;
    }());
    exports.MultipleContactsActionErrors = MultipleContactsActionErrors;
    var SingleContactActionErrors = (function () {
        function SingleContactActionErrors(correspondingStateMsg, pendingTrackMsg, pendingUntrackMsg) {
            this._contactIsInStateCorrespondingToActionResult = correspondingStateMsg;
            this._contactIsPendingTrack = pendingTrackMsg;
            this._contactIsPendingUntrack = pendingUntrackMsg;
        }
        Object.defineProperty(SingleContactActionErrors.prototype, "contactIsInStateCorrespondingToActionResult", {
            get: function () {
                return this._contactIsInStateCorrespondingToActionResult;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleContactActionErrors.prototype, "contactIsPendingTrack", {
            get: function () {
                return this._contactIsPendingTrack;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SingleContactActionErrors.prototype, "contactIsPendingUntrack", {
            get: function () {
                return this._contactIsPendingUntrack;
            },
            enumerable: true,
            configurable: true
        });
        return SingleContactActionErrors;
    }());
    exports.SingleContactActionErrors = SingleContactActionErrors;
    var OutlookMetadata = [
        {
            column: 'MailApp_Module_Column_Full_Name',
            key: 'DisplayName',
            active: true,
            sortable: true,
            filterable: true
        },
        {
            column: 'PickList_KBTemplateEditor_Selector_Style_Title',
            key: 'JobTitle',
            active: true,
            sortable: true,
            filterable: false
        },
        {
            column: 'MailApp_Module_Column_Company',
            key: 'CompanyName',
            active: true,
            sortable: true,
            filterable: true
        },
        {
            column: 'MailApp_Module_Column_Business_Phone',
            key: 'BusinessPhone',
            active: true,
            sortable: false,
            filterable: false
        },
        {
            column: 'MailApp_Module_Column_Email',
            key: 'EmailAddress1',
            active: true,
            sortable: false,
            filterable: false
        },
        {
            column: 'MailApp_Module_Column_Department',
            key: 'Department',
            active: false,
            sortable: true,
            filterable: true
        },
        {
            column: 'MailApp_Module_Column_Given_Name',
            key: 'GivenName',
            active: false,
            sortable: true,
            filterable: true
        },
        {
            column: 'MailApp_Module_Column_Office_Location',
            key: 'OfficeLocation',
            active: false,
            sortable: true,
            filterable: true
        }
    ];
    exports.OutlookMetadata = OutlookMetadata;
    var ContactViewMode;
    (function (ContactViewMode) {
        ContactViewMode[ContactViewMode["Exchange"] = 0] = "Exchange";
        ContactViewMode[ContactViewMode["CRM"] = 1] = "CRM";
    })(ContactViewMode || (ContactViewMode = {}));
    exports.ContactViewMode = ContactViewMode;
    ;
    var SelectedViewMode;
    (function (SelectedViewMode) {
        SelectedViewMode[SelectedViewMode["All"] = 0] = "All";
        SelectedViewMode[SelectedViewMode["Tracked"] = 1] = "Tracked";
        SelectedViewMode[SelectedViewMode["Untracked"] = 2] = "Untracked";
    })(SelectedViewMode || (SelectedViewMode = {}));
    exports.SelectedViewMode = SelectedViewMode;
    ;
    var CrmExtendedProperty = {
        CRM_ID: 'crmid',
        CRM_PARENT_ACCOUNT_ID: 'crmParentAccountId',
        CRM_LINK_STATE: 'crmLinkState',
        CRM_SSS_PROMOTE_TRACKER: "crmSssPromoteTracker",
        CRM_SSS_PROMOTE_TRACKER_TRACKED: "1",
        CRM_LINK_STATE_NOT_LINKED: '0',
        CRM_LINK_STATE_TO_LINK: '1',
        CRM_LINK_STATE_LINKED: '2',
        CRM_LINK_STATE_TO_UNLINK: '3',
        CRM_LINK_STATE_TO_UNLINK_AND_DELETE: '4',
        CRM_NAMESPACE: '00020329-0000-0000-c000-000000000046'
    };
    exports.CrmExtendedProperty = CrmExtendedProperty;
    var SyncDirection = {
        None: 0,
        FromCrm: 1,
        ToCrm: 2,
        Both: 3
    };
    exports.SyncDirection = SyncDirection;
    var MULTIPLE_CONTACTS_TRACKING_ERRORS = new MultipleContactsActionErrors("MailApp_Module_Alert_Track_Batch_Error_If_Tracked", "MailApp_Module_Alert_Track_Batch_Error_If_Pending_Tracked", "MailApp_Module_Alert_Track_Batch_Error_If_Pending_Untracked", "MailApp_Module_Alert_Track_Batch_Error_Mixed_States", "MailApp_Module_Alert_Track_Batch_Warning_Mixed_States");
    exports.MULTIPLE_CONTACTS_TRACKING_ERRORS = MULTIPLE_CONTACTS_TRACKING_ERRORS;
    var MULTIPLE_CONTACTS_UNTRACKING_ERRORS = new MultipleContactsActionErrors("MailApp_Module_Alert_Untrack_Batch_Error_If_Not_Tracked", "MailApp_Module_Alert_Untrack_Batch_Error_If_Pending_Tracked", "MailApp_Module_Alert_Untrack_Batch_Error_If_Pending_Untracked", "MailApp_Module_Alert_Untrack_Batch_Error_Mixed_States", "MailApp_Module_Alert_Untrack_Batch_Warning_Mixed_States");
    exports.MULTIPLE_CONTACTS_UNTRACKING_ERRORS = MULTIPLE_CONTACTS_UNTRACKING_ERRORS;
    var SINGLE_CONTACT_TRACKING_ERRORS = new SingleContactActionErrors("MailApp_Module_Alert_Track_Single_Error_If_Tracked", "MailApp_Module_Alert_Track_Single_Error_If_Pending_Tracked", "MailApp_Module_Alert_Track_Single_Error_If_Pending_Untracked");
    exports.SINGLE_CONTACT_TRACKING_ERRORS = SINGLE_CONTACT_TRACKING_ERRORS;
    var SINGLE_CONTACT_UNTRACKING_ERRORS = new SingleContactActionErrors("MailApp_Module_Alert_Untrack_Single_Error_If_Not_Tracked", "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Tracked", "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Untracked");
    exports.SINGLE_CONTACT_UNTRACKING_ERRORS = SINGLE_CONTACT_UNTRACKING_ERRORS;
});
define("modules/data/contacts/actions", ["require", "exports", 'bluebird', "modules/data/contacts/actionTypes", "modules/data/contacts/model", "lib/crmInterface", "lib/dispatcherHandler", "lib/resources"], function (require, exports, Promise, actionTypes_1, model_1, crmInterface_1, dispatcherHandler_1, resources_1) {
    "use strict";
    function initialize() {
        return loadContacts();
    }
    function loadContacts() {
        return function (dispatch, getState) {
            var state = getState();
            // Close the context to prevent errors.
            dispatch(closeContext());
            switch (state.outlook.contactView) {
                case model_1.ContactViewMode.Exchange:
                    dispatch(loadOutlookContacts());
                    break;
                case model_1.ContactViewMode.CRM:
                    dispatch(loadCrmContacts());
                    break;
            }
        };
    }
    /** Action creator to load contacts from outlook server with current state for options. */
    function loadOutlookContacts() {
        return function (dispatch, getState) {
            var state = getState();
            dispatch({ type: actionTypes_1.default.OUTLOOK_LOAD_REQUEST });
            // If this page is already loaded, do nothing.
            if (typeof state.outlook.pages[getState().outlook.page] !== 'undefined')
                return;
            var fields = state.outlook.metadata.map(function (metadata) { return metadata.key; });
            var orderByField = state.outlook.orderBy.column;
            var orderByStage = state.outlook.orderBy.stage;
            var order = (orderByStage !== 2 ? 'Ascending' : 'Descending');
            var extendedFilters = [];
            switch (state.outlook.selectedView) {
                case model_1.SelectedViewMode.Tracked.toString():
                    extendedFilters = [{
                            id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                            type: 'Double',
                            name: model_1.CrmExtendedProperty.CRM_LINK_STATE,
                            value: model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                        }];
                    break;
                case model_1.SelectedViewMode.Untracked.toString():
                    extendedFilters = [{
                            id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                            type: 'Double',
                            name: model_1.CrmExtendedProperty.CRM_LINK_STATE,
                            value: model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED
                        }];
                    break;
            }
            // Searching and Filtering
            var filterArray = [];
            if (state.outlook.search) {
                state.outlook.metadata.forEach(function (field) {
                    if (field.filterable) {
                        filterArray.push({
                            field: field.key,
                            value: state.outlook.search
                        });
                    }
                });
            }
            else if (state.outlook.showFilter) {
                Object.keys(state.outlook.filters).forEach(function (key) {
                    if (state.outlook.filters[key] !== '') {
                        filterArray.push({
                            field: key,
                            value: state.outlook.filters[key]
                        });
                    }
                });
            }
            var parameters = {
                count: state.outlook.pageSize,
                skip: state.outlook.pageSize * state.outlook.page,
                sortBy: {
                    order: order,
                    field: orderByField
                },
                filters: filterArray,
                extendedFilters: extendedFilters
            };
            dispatcherHandler_1.getContacts(parameters, function (response) {
                var parsedResponse = JSON.parse(response.functionArguments[1]);
                dispatch(loadContactsSuccess(parsedResponse));
            });
        };
    }
    function loadCrmContacts() {
        return function (dispatch, getState) {
            var state = getState();
            var orderByColumn = state.outlook.orderBy.column;
            var orderByStage = state.outlook.orderBy.stage;
            var order = orderByStage !== 2 ? 'asc' : 'desc';
            var columnToCrmField = {
                DisplayName: "fullname",
                Department: "department",
                GivenName: "fullname",
                CompanyName: "_parentcustomerid_value",
                BusinessPhone: "telephone1",
                EmailAddress1: "emailaddress1",
                JobTitle: "jobtitle"
            };
            var orderByField = columnToCrmField[orderByColumn];
            var selectFieldsArr = [
                "fullname",
                "firstname",
                "lastname",
                "department",
                "telephone1",
                "emailaddress1",
                "jobtitle",
                "entityimage",
                "entityimage_url",
                "contactid",
                "_parentcustomerid_value"
            ];
            var params = {
                $orderby: orderByField + " " + order,
                $expand: "parentcustomerid_account($select=name)",
                $select: selectFieldsArr.join(",")
            };
            var companyFilter;
            if (state.outlook.showFilter && state.outlook.filters) {
                var filterArray_1 = [];
                Object.keys(state.outlook.filters).forEach(function (field) {
                    var value = state.outlook.filters[field], crmField = columnToCrmField[field];
                    if (value !== '' && crmField) {
                        if (field == "CompanyName") {
                            companyFilter = value.toLowerCase();
                        }
                        else {
                            filterArray_1.push({
                                field: crmField,
                                value: encodeURIComponent(value)
                            });
                        }
                    }
                });
                var filterStr = filterArray_1.map(function (el) {
                    return "contains(" + el.field + ",'" + el.value + "')";
                }).join(" and ");
                if (filterStr !== '') {
                    params["$filter"] = filterStr;
                }
            }
            dispatch({ type: actionTypes_1.default.CRM_LOAD_REQUEST });
            crmInterface_1.crmGet('contacts', params).then(function (data) {
                var contacts = data.value;
                // preprocess
                for (var i = 0; i < contacts.length; i++) {
                    // Ensure we are using the same keys
                    contacts[i][model_1.CrmExtendedProperty.CRM_ID] = contacts[i].contactid;
                    contacts[i][model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = contacts[i]['_parentcustomerid_value'];
                    contacts[i][model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED;
                    contacts[i]["company"] = contacts[i].parentcustomerid_account ? contacts[i].parentcustomerid_account.name : "";
                }
                ;
                var currentPage = [];
                var page = 0;
                var total = 0;
                if (companyFilter) {
                    // filter by Company on client side due to server does not support filtering Contacts by Account name
                    contacts = contacts.filter(function (contact) {
                        var account = contact["parentcustomerid_account"];
                        var accountName = account && account.name && account.name.toLowerCase();
                        return accountName && (accountName.indexOf(companyFilter) != -1);
                    });
                }
                contacts.forEach(function (contact, index) {
                    currentPage.push(contact);
                    total++;
                    if (currentPage.length >= state.outlook.pageSize || total >= contacts.length) {
                        dispatch({ type: actionTypes_1.default.CRM_LOAD_SUCCESS, payload: { contacts: currentPage, page: page, totalCount: contacts.length } });
                        currentPage = [];
                        page++;
                    }
                });
                if (contacts.length === 0) {
                    dispatch({ type: actionTypes_1.default.CRM_LOAD_SUCCESS, payload: { contacts: contacts, page: page, totalCount: contacts.length } });
                }
            }, function (error) {
                console.error(error);
                dispatch({ type: actionTypes_1.default.CRM_LOAD_FAIL });
            });
        };
    }
    /**
     * Action creator to fire the action of a contacts load success
     */
    function loadContactsSuccess(response) {
        return function (dispatch, getState) {
            var state = getState();
            var contacts = response.contacts;
            var count = response.count;
            // preprocess
            var _loop_1 = function() {
                var extendedProperties = {};
                if (contacts[i].ExtendedProperties instanceof Array) {
                    contacts[i].ExtendedProperties.forEach(function (property) {
                        // Workaround for x500 email Address Extended Property 0x8084 should hold smtp email address
                        var propId = property['t:ExtendedFieldURI']['@attributes'].PropertyId;
                        var propName = property['t:ExtendedFieldURI']['@attributes'].PropertyName;
                        var propValue = property['t:Value']['#text'];
                        if (propId) {
                            // if contacts[i].EmailAddress1 hold x500 email address, means there is either exist '/'
                            // or doesn't exist '@' symbol we will replace it with value from property 32900. because it will hold real email address.
                            if (propId == "32900" &&
                                contacts[i].EmailAddress1 &&
                                (contacts[i].EmailAddress1.indexOf("/") != -1 ||
                                    contacts[i].EmailAddress1.indexOf("@") == -1)) {
                                contacts[i].EmailAddress1 = propValue;
                            }
                        }
                        if (propName) {
                            extendedProperties[propName] = propValue;
                        }
                    });
                }
                // Parse name
                if (contacts[i]['CompleteName']) {
                    contacts[i]['FirstName'] = contacts[i]['CompleteName']['t:FirstName'] ? contacts[i]['CompleteName']['t:FirstName']['#text'] : '';
                    contacts[i]['LastName'] = contacts[i]['CompleteName']['t:LastName'] ? contacts[i]['CompleteName']['t:LastName']['#text'] : '';
                }
                contacts[i][model_1.CrmExtendedProperty.CRM_ID] = extendedProperties[model_1.CrmExtendedProperty.CRM_ID] ? extendedProperties[model_1.CrmExtendedProperty.CRM_ID] : model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED;
                contacts[i][model_1.CrmExtendedProperty.CRM_LINK_STATE] = extendedProperties[model_1.CrmExtendedProperty.CRM_LINK_STATE];
                contacts[i][model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = extendedProperties[model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID];
            };
            for (var i = 0; i < contacts.length; i++) {
                _loop_1();
            }
            ;
            // Update the contacts tracked count number.
            dispatch(updateContactsCount());
            dispatch({
                type: actionTypes_1.default.OUTLOOK_LOAD_SUCCESS,
                payload: {
                    contacts: contacts,
                    count: count
                }
            });
        };
    }
    /**
     * Action creator to fire the action of a contacts load fail..
     * @param {number} status - Status number of the failed request.
     */
    function loadContactsFail(status) {
        return { type: actionTypes_1.default.OUTLOOK_LOAD_FAIL };
    }
    function updateContactsCount() {
        return function (dispatch, getState) {
            var state = getState();
            dispatcherHandler_1.getContactsCount(function (response) {
                var data = JSON.parse(response.functionArguments[1]);
                var totalCountNumber = data.contactsCount;
                var trackedCountNumber = data.trackedContactsCount;
                dispatch({
                    type: actionTypes_1.default.UPDATE_COUNT,
                    payload: {
                        outlookTotalContactsCount: totalCountNumber,
                        outlookTotalTrackedContactsCount: trackedCountNumber,
                        outlookTotalUntrackedContactsCount: (totalCountNumber - trackedCountNumber)
                    }
                });
            });
        };
    }
    /** Action creator for changing page in state. Reloads contacts after. */
    function changePage(page) {
        return function (dispatch, getState) {
            var state = getState();
            if (page < 0 || page > Math.floor(state.outlook.totalCount / state.outlook.pageSize))
                return;
            dispatch({ type: actionTypes_1.default.CHANGE_PAGE, payload: page });
            dispatch(loadContacts());
        };
    }
    /** Action creator for changing page size in state. Reloads contacts after. */
    function changePageSize(limit) {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.CHANGE_PAGE_SIZE, payload: limit });
            dispatch(saveSettings());
            dispatch(loadContacts());
        };
    }
    /** Action creator for changing order value in state. Reloads contacts after. */
    function changeOrder(orderBy) {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.CHANGE_ORDER, payload: orderBy });
            dispatch(saveSettings());
            dispatch(loadContacts());
        };
    }
    /** Action creator for changing search value in state. Reloads contacts after. */
    function search(value) {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.SEARCH, payload: value });
            dispatch(refresh());
        };
    }
    /** Action creator for toggling column visibility. */
    function toggleColumn(key) {
        return { type: actionTypes_1.default.TOGGLE_COLUMN, payload: key };
    }
    function saveSettings() {
        return function (dispatch, getState) {
            var state = getState();
            var updateState = {
                orderBy: state.outlook.orderBy,
                filters: state.outlook.filters,
                showFilter: state.outlook.showFilter,
                pageSize: state.outlook.pageSize
            };
            dispatcherHandler_1.setRoamingSettingsItem('mscrm_module_settings', updateState, function (response) {
                dispatcherHandler_1.saveRoamingSettings(null);
            });
        };
    }
    /** Action creator for setting focused contact. */
    function focusContact(index) {
        return function (dispatch, getState) {
            var state = getState();
            var contact = state.outlook.pages[state.outlook.page][index];
            dispatch({
                type: actionTypes_1.default.UPDATE_CONTACT,
                payload: {
                    index: index,
                    values: {
                        Initials: state.outlook.contactView === model_1.ContactViewMode.CRM
                            ? "" + (contact.firstname ? contact.firstname.charAt(0) + '.' : '') + (contact.lastname ? contact.lastname.charAt(0) + '.' : '')
                            : "" + (contact.GivenName ? contact.GivenName.charAt(0) + '.' : '') + (contact.Surname ? contact.Surname.charAt(0) + '.' : '')
                    }
                }
            });
            if (contact[model_1.CrmExtendedProperty.CRM_ID]) {
                var crmId = contact[model_1.CrmExtendedProperty.CRM_ID];
                var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                crmInterface_1.crmGet("contacts(" + strippedId + ")").then(function (data) {
                    var imageUrl = data['entityimage_url'];
                    var image = data['entityimage'];
                    if (image) {
                        imageUrl = "data:image;base64," + image.toString();
                    }
                    if (imageUrl) {
                        dispatch({
                            type: actionTypes_1.default.UPDATE_CONTACT,
                            payload: {
                                index: index,
                                values: {
                                    imageUrl: imageUrl
                                }
                            }
                        });
                    }
                }, function (error) {
                    console.error(error);
                });
            }
            if (contact[model_1.CrmExtendedProperty.CRM_ID] && contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] == model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED) {
                crmInterface_1.crmGetNextActivity(contact[model_1.CrmExtendedProperty.CRM_ID]).then(function (success) {
                    if (success.results[0]) {
                        var activity = success.results[0];
                        activity.date = activity.ScheduledStart.substring(activity.ScheduledStart.indexOf('(') + 1, activity.ScheduledStart.indexOf(')'));
                        if (Date.now() < activity.date) {
                            dispatch({
                                type: actionTypes_1.default.UPDATE_CONTACT_ACTIVITY,
                                payload: {
                                    index: index,
                                    activityKey: 'nextActivity',
                                    activity: activity
                                }
                            });
                        }
                    }
                }, function (error) {
                    console.error(error);
                });
                crmInterface_1.crmGetPrevActivity(contact[model_1.CrmExtendedProperty.CRM_ID]).then(function (success) {
                    if (success.results[0]) {
                        var activity = success.results[0];
                        activity.date = activity.ScheduledStart.substring(activity.ScheduledStart.indexOf('(') + 1, activity.ScheduledStart.indexOf(')'));
                        if (Date.now() > activity.date) {
                            dispatch({
                                type: actionTypes_1.default.UPDATE_CONTACT_ACTIVITY,
                                payload: {
                                    index: index,
                                    activityKey: 'prevActivity',
                                    activity: activity
                                }
                            });
                        }
                    }
                }, function (error) {
                    console.error(error);
                });
            }
            dispatch({
                type: actionTypes_1.default.FOCUS_CONTACT, payload: index
            });
        };
    }
    /** Action creator closing context flyout. */
    function closeContext() {
        return { type: actionTypes_1.default.CLOSE_CONTEXT };
    }
    /** Action creator for showing link context. */
    function showLinkContext(target) {
        return function (dispatch, getState) {
            var state = getState();
            var selectedContacts = getTargetedContacts(target, state);
            if (selectedContacts.length === 0) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Link_Alert')));
                return;
            }
            dispatch({ type: actionTypes_1.default.SHOW_LINK_CONTEXT, payload: target });
            dispatch(loadAccounts());
        };
    }
    /** Action creator for hiding link context. */
    function hideLinkContext() {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.HIDE_LINK_CONTEXT });
        };
    }
    /** Action creator for selecing the current focused contact and showing the link context. */
    function linkFocusedContact(e) {
        return function (dispatch, getState) {
            var state = getState();
            dispatch(showLinkContext(ContactTarget.FOCUSED));
        };
    }
    /** Action creator for selecting an account. */
    function selectAccount(e, account) {
        return function (dispatch, getState) {
            e.stopPropagation();
            dispatch({ type: actionTypes_1.default.SELECT_ACCOUNT, payload: account });
        };
    }
    function linkSelectedAccounts() {
        return function (dispatch, getState) {
            var state = getState();
            if (state.outlook.contactView === model_1.ContactViewMode.CRM) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Dymamics_365_Link_Alert')));
                return;
            }
            var target = state.outlook.linkContextTarget;
            // Do some preprocessing to determing contact index in the current page state
            var selectedContacts = getTargetedContacts(target, state);
            if (selectedContacts.length === 0) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Link_Alert')));
                return;
            }
            var doLink = function () {
                var _a = validateSelectedContacts(selectedContacts, state, dispatch), validSelectedContacts = _a[0], clientValidationErrors = _a[1];
                if (validSelectedContacts.length === 0) {
                    return;
                }
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START, payload: {
                        type: '',
                        progressMax: validSelectedContacts.length
                    }
                });
                var count = 0;
                var countFailed = 0;
                var fieldsFailed = [];
                validSelectedContacts.forEach(function (contact) {
                    trackContact(contact, state.outlook.syncMapping).then(function (crmId) {
                        var properties = [
                            {
                                field: 'CompanyName',
                                value: state.outlook.selectedAccount.name
                            }
                        ];
                        var extendedProperties = [
                            {
                                id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                                type: 'String',
                                name: 'crmParentAccountId',
                                value: state.outlook.selectedAccountId
                            }
                        ];
                        var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                        crmInterface_1.crmAssociate('accounts', state.outlook.selectedAccountId, 'contacts', strippedId, 'contact_customer_accounts');
                        dispatcherHandler_1.updateContactProperties({ id: contact.Id, changeKey: contact.ChangeKey, properties: properties, extendedProperties: extendedProperties }, function (result) {
                            count = count + 1;
                            dispatch({
                                type: actionTypes_1.default.UPDATE_CONTACT,
                                payload: {
                                    index: contact.index,
                                    values: (_a = {},
                                        _a[model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                                        _a[model_1.CrmExtendedProperty.CRM_ID] = crmId,
                                        _a[model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = state.outlook.selectedAccountId,
                                        _a.CompanyName = state.outlook.selectedAccount.name,
                                        _a
                                    )
                                }
                            });
                            dispatch({
                                type: actionTypes_1.default.UPDATE_TRANSACTION,
                                payload: count
                            });
                            if (count >= validSelectedContacts.length) {
                                dispatch(closeContext());
                                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                                showAlertIfRequired(false, countFailed, validSelectedContacts, fieldsFailed, clientValidationErrors, dispatch);
                                dispatcherHandler_1.sendTelemetryEvent({
                                    name: 'mailapp_module_link',
                                    data: {
                                        count: count
                                    }
                                });
                            }
                            var _a;
                        });
                    }, function (error) {
                        count = count + 1;
                        countFailed = countFailed + 1;
                        var fieldName = getFailedTrackContactsFieldName(error);
                        if (fieldName) {
                            fieldsFailed.push(fieldName);
                        }
                        dispatch({
                            type: actionTypes_1.default.UPDATE_TRANSACTION,
                            payload: count
                        });
                        if (count >= validSelectedContacts.length) {
                            dispatch(closeContext());
                            dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                            showAlertIfRequired(true, countFailed, validSelectedContacts, fieldsFailed, clientValidationErrors, dispatch);
                        }
                    });
                });
            };
            // If there are multiple selected and a mix of tracked/pending and untracked, show confirmation.
            var trackSummary = selectedContacts.reduce(function (summary, contact) {
                var linkState = contact[model_1.CrmExtendedProperty.CRM_LINK_STATE];
                summary[linkState] = summary[linkState] ? summary[linkState] + 1 : 1;
                return summary;
            }, {});
            if (selectedContacts.length > 1 &&
                trackSummary[model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED] &&
                (trackSummary[model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED] ||
                    trackSummary[model_1.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK])) {
                dispatch(showConfirm([resources_1.default.getString('MailApp_Module_Alert_Link_Batch_Warning')], function () { return doLink(); }, function () { return null; }, // no-op
                resources_1.default.getString('MailApp_Module_Alert_Button_OK'), resources_1.default.getString('MailApp_Module_Alert_Button_Cancel')));
            }
            else {
                doLink();
            }
        };
    }
    function unlinkFocusedContact() {
        return function (dispatch, getState) {
            var state = getState();
            var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
            dispatch({
                type: actionTypes_1.default.TRANSACTION_START, payload: {
                    type: '',
                    progressMax: 1
                }
            });
            // Update crmParentAccountId on the exchange entity
            var extendedProperties = [
                {
                    id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                    type: 'String',
                    name: model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID,
                    value: ''
                }
            ];
            dispatcherHandler_1.sendTelemetryEvent({
                name: 'mailapp_module_unlink',
                data: {
                    count: 1
                }
            });
            dispatcherHandler_1.updateContactProperties({ id: contact.Id, changeKey: contact.ChangeKey, properties: [], extendedProperties: extendedProperties }, function (result) {
                dispatch({
                    type: actionTypes_1.default.UPDATE_ACCOUNT, payload: {
                        index: state.outlook.focused.index,
                        id: '',
                        companyName: contact.CompanyName
                    }
                });
                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
            });
        };
    }
    function loadAccounts() {
        return function (dispatch, getState) {
            var state = getState();
            crmInterface_1.crmGet('accounts', { "$orderby": "name" }).then(function (result) {
                dispatch(loadAccountsSuccess(result));
            }, function (error) {
                console.error(error);
            });
        };
    }
    function loadAccountsSuccess(response) {
        return function (dispatch, getState) {
            var state = getState();
            var accounts = response.value;
            var currentPage = [];
            var page = 0;
            var total = 0;
            accounts.forEach(function (account, index) {
                currentPage.push(account);
                total++;
                if (currentPage.length >= state.outlook.linkAccounts.pageSize || total >= accounts.length) {
                    dispatch({ type: actionTypes_1.default.ACCOUNT_LOAD_SUCCESS, payload: { accounts: currentPage, page: page, totalCount: accounts.length } });
                    currentPage = [];
                    page++;
                }
            });
        };
    }
    function changeAccountPage(page) {
        return function (dispatch, getState) {
            var state = getState();
            if (page < 0 || page > Math.floor(state.outlook.linkAccounts.totalCount / state.outlook.linkAccounts.pageSize))
                return;
            dispatch({ type: actionTypes_1.default.CHANGE_ACCOUNT_PAGE, payload: page });
        };
    }
    function openNewAccount() {
        window.open('/main.aspx?etn=account&pagetype=entityrecord');
        return { type: actionTypes_1.default.SHOW_REFRESH_PANE };
    }
    function refreshAccounts() {
        return function (dispatch) {
            dispatch(loadAccounts());
            dispatch({ type: actionTypes_1.default.HIDE_REFRESH_PANE });
        };
    }
    /** Action creator for toggling visibility of column options box. */
    function toggleFilter() {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.TOGGLE_FILTER });
            dispatch(saveSettings());
        };
    }
    /** Action creator changing the internal value of a filter input in the state. */
    function changeFilter(filter, value) {
        return {
            type: actionTypes_1.default.CHANGE_FILTER, payload: {
                filter: filter,
                value: value
            }
        };
    }
    /** Action creator for activating a filter. */
    function activateFilter(filter, value) {
        return function (dispatch, getState) {
            var state = getState();
            dispatch(saveSettings());
            dispatch(refresh());
        };
    }
    /** Action creator toggling the select input for a contact row. */
    function toggleSelect(e, index) {
        e.stopPropagation();
        return { type: actionTypes_1.default.TOGGLE_SELECT, payload: index };
    }
    /** Action creator toggling the select input for an entire page. */
    function togglePageSelect(e, page) {
        e.stopPropagation();
        return { type: actionTypes_1.default.TOGGLE_PAGE_SELECT, payload: page };
    }
    function toggleSettings() {
        return function (dispatch, getState) {
            dispatch(saveSettings());
            dispatch({ type: actionTypes_1.default.TOGGLE_SETTINGS });
        };
    }
    // Move these to interface
    function trackContact(contact, mapping) {
        return new Promise(function (resolve, reject) {
            // If the contact has a link state and crmid just return the id.
            if (contact[model_1.CrmExtendedProperty.CRM_ID] && contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] == model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED) {
                resolve(contact[model_1.CrmExtendedProperty.CRM_ID]);
                return;
            }
            crmInterface_1.crmCreate('contacts', crmInterface_1.transformExchangeToCrm(contact, mapping)).then(function (success) {
                var crmId = "{" + success.substring(success.indexOf('(') + 1, success.indexOf(')')) + "}";
                // Update linkstate and contactId on exchange entity
                var extendedProperties = [
                    {
                        id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'Double',
                        name: model_1.CrmExtendedProperty.CRM_LINK_STATE,
                        value: model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                    },
                    {
                        id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'String',
                        name: model_1.CrmExtendedProperty.CRM_ID,
                        value: crmId
                    },
                    {
                        id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'Integer',
                        name: model_1.CrmExtendedProperty.CRM_SSS_PROMOTE_TRACKER,
                        value: model_1.CrmExtendedProperty.CRM_SSS_PROMOTE_TRACKER_TRACKED
                    }
                ];
                dispatcherHandler_1.updateContactProperties({ id: contact.Id, changeKey: contact.ChangeKey, properties: [], extendedProperties: extendedProperties }, function (result) {
                    resolve(crmId);
                });
            }, function (error) {
                reject(error);
            });
        });
    }
    function untrackContact(contact, callbackToken, key) {
        return new Promise(function (resolve, reject) {
            // Update linkstate and contactId on exchange entity
            var extendedProperties = [
                {
                    id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                    type: 'Double',
                    name: model_1.CrmExtendedProperty.CRM_LINK_STATE,
                    value: model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED
                },
                {
                    id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                    type: 'String',
                    name: model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID,
                    value: ''
                }
            ];
            dispatcherHandler_1.updateContactProperties({ id: contact.Id, changeKey: contact.ChangeKey, properties: [], extendedProperties: extendedProperties }, function (result) {
                resolve(result);
            });
        });
    }
    function untrackFocusedContact(e, alsoDelete) {
        return function (dispatch, getState) {
            var state = getState();
            var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
            var crmId = contact[model_1.CrmExtendedProperty.CRM_ID];
            dispatch(closeUntrackAlert());
            dispatch({
                type: actionTypes_1.default.TRANSACTION_START, payload: {
                    type: '',
                    progressMax: 1
                }
            });
            untrackContact(contact, state.app.callbackToken, 1).then(function () {
                dispatch({
                    type: actionTypes_1.default.UPDATE_CONTACT, payload: {
                        index: state.outlook.focused.index,
                        values: (_a = {},
                            _a[model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED,
                            _a[model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = '',
                            _a
                        )
                    }
                });
                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                dispatch(updateContactsCount());
                dispatcherHandler_1.sendTelemetryEvent({
                    name: 'mailapp_module_untrack',
                    data: {
                        focused: true,
                        count: 1
                    }
                });
                if (alsoDelete && crmId) {
                    var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                    crmInterface_1.crmDelete('contacts', strippedId).then(function (success) {
                        console.log(success);
                    }, function (error) {
                        console.error(error);
                    });
                }
                var _a;
            }, function (error) {
                console.error(error);
            });
        };
    }
    var ContactTarget;
    (function (ContactTarget) {
        ContactTarget[ContactTarget["SELECTED"] = 0] = "SELECTED";
        ContactTarget[ContactTarget["FOCUSED"] = 1] = "FOCUSED";
    })(ContactTarget || (ContactTarget = {}));
    exports.ContactTarget = ContactTarget;
    ;
    function getTargetedContacts(target, state) {
        switch (target) {
            case ContactTarget.FOCUSED:
                var contact = state.outlook.pages[state.outlook.focused.page][state.outlook.focused.index];
                contact.index = state.outlook.focused.index;
                return [contact];
            case ContactTarget.SELECTED:
                return state.outlook.pages[state.outlook.page].filter(function (item, index) {
                    item.index = index;
                    return item.selected;
                });
        }
    }
    function validateContactTrackStatus(contact, isTrackAction, errors) {
        var msg = null;
        var crmLinkState = contact[model_1.CrmExtendedProperty.CRM_LINK_STATE];
        var isContactTracked = crmLinkState === model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED;
        var isContactUntracked = !crmLinkState || crmLinkState === model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED;
        var allowedCrmLinkState;
        var areStatesEqual;
        if (isTrackAction) {
            allowedCrmLinkState = isContactUntracked;
            areStatesEqual = isContactTracked;
        }
        else {
            allowedCrmLinkState = isContactTracked;
            areStatesEqual = isContactUntracked;
        }
        if (!allowedCrmLinkState) {
            if (areStatesEqual) {
                msg = errors.contactIsInStateCorrespondingToActionResult;
            }
            else {
                msg = (crmLinkState === model_1.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK)
                    ? errors.contactIsPendingTrack
                    : errors.contactIsPendingUntrack;
            }
        }
        return msg;
    }
    function validateMultipleContactsTrackStatus(contacts, isTrackAction, errors) {
        var msg = null;
        var equalStateContactCount = (isTrackAction)
            ? contacts.reduce(function (count, contact) { return count + (contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED ? 1 : 0); }, 0)
            : contacts.reduce(function (count, contact) { return count + (!contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] || contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED ? 1 : 0); }, 0);
        var pendingTrackContactCount = contacts.reduce(function (count, contact) { return count + (contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK ? 1 : 0); }, 0);
        var pendingUntrackContactCount = contacts.reduce(function (count, contact) {
            return count + (contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_TO_UNLINK ||
                contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_TO_UNLINK_AND_DELETE ? 1 : 0);
        }, 0);
        if (equalStateContactCount || pendingTrackContactCount || pendingUntrackContactCount) {
            if (contacts.length === equalStateContactCount) {
                msg = errors.allAreInStateCorrespondingToActionResult;
            }
            else {
                if (contacts.length === pendingTrackContactCount) {
                    msg = errors.allArePendingTrack;
                }
                else {
                    if (contacts.length === pendingUntrackContactCount) {
                        msg = errors.allArePendingUntrack;
                    }
                    else {
                        var errorStateContactCount = equalStateContactCount + pendingTrackContactCount + pendingUntrackContactCount;
                        msg = (errorStateContactCount === contacts.length)
                            ? errors.noOneContactIsInSuitableStateMixed
                            : errors.atLeastOneContactIsInSuitableState;
                    }
                }
            }
        }
        return msg;
    }
    function attemptTrack(target, detectDuplicates) {
        return function (dispatch, getState) {
            var state = getState();
            if (state.outlook.contactView === model_1.ContactViewMode.CRM) {
                dispatch(showAlert(resources_1.default.getString("MailApp_Module_Dymamics_365_Track_Alert")));
                return;
            }
            var contacts = getTargetedContacts(target, state);
            var trackedContactCount = contacts.filter(function (contact) { return contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED; }).length;
            if (trackedContactCount === 1 && contacts.length === 1 && detectDuplicates) {
                return dispatch(showAlert(resources_1.default.getString("MailApp_Module_Alert_Track_Single_Error_If_Tracked")));
            }
            if (contacts.length === 0) {
                // If there are no selected contacts, show an alert and abort.
                return dispatch(showAlert(resources_1.default.getString("MailApp_Module_Select_Track_Alert")));
            }
            else if (contacts.length === trackedContactCount) {
                return dispatch(showAlert(resources_1.default.getString("MailApp_Module_Alert_Track_Batch_Error_If_Tracked")));
            }
            else if (trackedContactCount > 0) {
                return dispatch(showConfirm([resources_1.default.getString("MailApp_Module_Alert_Track_Batch_Warning_Mixed_States")], function () { return dispatch(processContacts(target, detectDuplicates)); }, null, resources_1.default.getString("MailApp_Module_Alert_Button_OK"), resources_1.default.getString("MailApp_Module_Alert_Button_Cancel")));
            }
            else {
                return dispatch(processContacts(target, detectDuplicates));
            }
            ;
        };
    }
    function showDuplicateDialog(dupes, confirmHandler, denyHandler) {
        return {
            type: actionTypes_1.default.SHOW_CONFIRM,
            payload: {
                messages: ['We found one or more matching contacts in Dynamics 365 that are already tracked. Do you still want to track this contact?'].concat(dupes),
                confirmButtonText: resources_1.default.getString("MailApp_Module_Track"),
                denyButtonText: resources_1.default.getString("MailApp_Module_Alert_Button_Cancel"),
                confirmHandler: confirmHandler,
                denyHandler: denyHandler,
            },
        };
    }
    function processContacts(target, detectDuplicates) {
        if (target === void 0) { target = ContactTarget.SELECTED; }
        if (detectDuplicates === void 0) { detectDuplicates = true; }
        return function (dispatch, getState) {
            var state = getState();
            // Get all of the selected contacts that untracked.
            var targetedContacts = getTargetedContacts(target, state).filter(function (contact) { return contact[model_1.CrmExtendedProperty.CRM_LINK_STATE] !== model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED; });
            var contactsWithCrmId = [];
            var crmContacts = [];
            var newContacts = [];
            targetedContacts.forEach(function (contact) { return contact[model_1.CrmExtendedProperty.CRM_ID] && contact[model_1.CrmExtendedProperty.CRM_ID] !== "0" ? contactsWithCrmId.push(contact) : newContacts.push(contact); });
            Promise.map(contactsWithCrmId, function (contact) {
                var strippedId = contact[model_1.CrmExtendedProperty.CRM_ID].substring(contact[model_1.CrmExtendedProperty.CRM_ID].indexOf("{") + 1, contact[model_1.CrmExtendedProperty.CRM_ID].indexOf("}"));
                return crmInterface_1.crmGet("contacts", { $filter: "contactid eq " + strippedId })
                    .then(function (success) {
                    var possibleContacts;
                    try {
                        possibleContacts = success.value;
                    }
                    catch (error) {
                        dispatcherHandler_1.sendTelemetryEvent({
                            name: "mailapp_module_track",
                            logLevel: 4,
                            data: {
                                error: error,
                                response: success,
                            },
                        });
                        return;
                    }
                    possibleContacts.length > 0 ? crmContacts.push(contact) : newContacts.push(contact);
                }, function (error) {
                    dispatcherHandler_1.sendTelemetryEvent({
                        name: "mailapp_module_track",
                        logLevel: 4,
                        data: error,
                    });
                });
            }).then(function () {
                dispatch({
                    type: actionTypes_1.default.SET_TRACK_DATA,
                    payload: {
                        target: target,
                        detectDuplicates: detectDuplicates,
                        crmContacts: crmContacts,
                        newContacts: newContacts,
                    },
                });
                if (crmContacts.length > 0) {
                    dispatch(showRetrackAlert());
                }
                else {
                    dispatch(trackContacts());
                }
            });
        };
    }
    function showRetrackAlert() {
        return function (dispatch, getState) {
            dispatch({ type: actionTypes_1.default.SHOW_RETRACK_ALERT });
        };
    }
    function closeRetrackAlert() {
        return function (dispatch, getState) {
            dispatch({ type: actionTypes_1.default.CLEAR_TRACK_DATA });
            dispatch({ type: actionTypes_1.default.CLOSE_RETRACK_ALERT });
        };
    }
    function closeAlertAndTrack(linkCrmContacts) {
        return function (dispatch, getState) {
            dispatch({ type: actionTypes_1.default.CLOSE_RETRACK_ALERT });
            dispatch(trackContacts(linkCrmContacts));
        };
    }
    function trackContacts(linkCrmContacts) {
        if (linkCrmContacts === void 0) { linkCrmContacts = true; }
        return function (dispatch, getState) {
            var state = getState();
            var newContacts = state.outlook.trackingData.newContacts;
            var crmContacts = state.outlook.trackingData.crmContacts;
            dispatch({
                type: actionTypes_1.default.TRANSACTION_START,
                payload: {
                    type: "",
                    progressMax: newContacts.length + crmContacts.length,
                },
            });
            if (linkCrmContacts) {
                var extendedProperties_1 = [
                    {
                        id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'Double',
                        name: model_1.CrmExtendedProperty.CRM_LINK_STATE,
                        value: model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                    },
                    {
                        id: model_1.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'Integer',
                        name: model_1.CrmExtendedProperty.CRM_SSS_PROMOTE_TRACKER,
                        value: model_1.CrmExtendedProperty.CRM_SSS_PROMOTE_TRACKER_TRACKED,
                    },
                ];
                crmContacts.forEach(function (contact) {
                    dispatcherHandler_1.updateContactProperties({ id: contact.Id, changeKey: contact.ChangeKey, properties: [], extendedProperties: extendedProperties_1 }, function (result) {
                        dispatch({
                            type: actionTypes_1.default.UPDATE_CONTACT,
                            payload: {
                                index: state.outlook.trackingData.target === ContactTarget.FOCUSED ? state.outlook.focused.index : contact.index,
                                values: (_a = {},
                                    _a[model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                                    _a
                                ),
                            },
                        });
                        dispatch({
                            type: actionTypes_1.default.UPDATE_TRANSACTION,
                            payload: getState().outlook.transaction.progressCurrent + 1,
                        });
                        dispatch(updateTransactionState());
                        var _a;
                    });
                });
            }
            else {
                crmContacts.forEach(function (contact) {
                    dispatch(performTrack(contact));
                });
            }
            newContacts.forEach(function (contact) {
                state.outlook.trackingData.detectDuplicates ? dispatch(checkDuplicatesAndTrack(contact)) : dispatch(performTrack(contact));
            });
        };
    }
    function performTrack(contact) {
        return function (dispatch, getState) {
            var state = getState();
            trackContact(contact, state.outlook.syncMapping).then(function (crmId) {
                // Dispatch state update to refresh tracked status of affected rows
                dispatch({
                    type: actionTypes_1.default.UPDATE_CONTACT,
                    payload: {
                        index: state.outlook.trackingData.target === ContactTarget.FOCUSED ? state.outlook.focused.index : contact.index,
                        values: (_a = {},
                            _a[model_1.CrmExtendedProperty.CRM_ID] = crmId,
                            _a[model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                            _a
                        ),
                    },
                });
                // Update our transaction state
                dispatch({
                    type: actionTypes_1.default.UPDATE_TRANSACTION,
                    payload: getState().outlook.transaction.progressCurrent + 1,
                });
                // After transaction is completed update state
                dispatch(updateTransactionState());
                var _a;
            }, function (error) {
                dispatcherHandler_1.sendTelemetryEvent({
                    name: "mailapp_module_track",
                    logLevel: 4,
                    data: error,
                });
            });
        };
    }
    ;
    function checkDuplicatesAndTrack(contact) {
        return function (dispatch, getState) {
            var state = getState();
            crmInterface_1.crmDetectDuplicates("contacts", crmInterface_1.transformExchangeToCrm(contact, state.outlook.syncMapping)).then(function (duplicates) {
                if (!duplicates || duplicates.length === 0) {
                    dispatch(performTrack(contact));
                }
                else {
                    dispatch({
                        type: actionTypes_1.default.UPDATE_TRACK_DATA_DUPLICATES,
                        payload: duplicates,
                    });
                    dispatch({
                        type: actionTypes_1.default.UPDATE_TRANSACTION,
                        payload: getState().outlook.transaction.progressCurrent + 1,
                    });
                    dispatch(updateTransactionState());
                }
            }, function (error) {
                // Fail gracefully and go ahead with the track
                dispatch(performTrack(contact));
            });
        };
    }
    ;
    function updateTransactionState() {
        return function (dispatch, getState) {
            var state = getState();
            var count = state.outlook.transaction.progressCurrent;
            if (count >= state.outlook.transaction.progressMax && state.outlook.transaction.showLoading) {
                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                dispatch(updateContactsCount());
                var contactsDuplicates = state.outlook.trackingData.duplicates;
                var target_1 = state.outlook.trackingData.target;
                dispatch({ type: actionTypes_1.default.CLEAR_TRACK_DATA });
                if (contactsDuplicates.length) {
                    return dispatch(showDuplicateDialog(contactsDuplicates.map(function (dup) { return dup.fullname; }), function () { return dispatch(attemptTrack(target_1, false)); }, function () { return null; } // no-op
                     // no-op
                    ));
                }
            }
        };
    }
    ;
    function validateSelectedContacts(selectedContacts, state, dispatch) {
        var clientValidationFailedMessage = resources_1.default.getString("MailApp_Module_Alert_Track_Batch_Client_Validation_Error");
        var clientValidationFailedMessageHeader = resources_1.default.getString("MailApp_Module_Alert_Track_Single_Client_Validation_Error_Header");
        var clientValidationFailedMessageHeaderPlural = resources_1.default.getString("MailApp_Module_Alert_Track_Single_Client_Validation_Error_Header_Plural");
        var validSelectedContacts = [];
        var clientValidationErrors = [];
        selectedContacts.forEach(function (contact) {
            var validationError = validateCRMContact(contact, state.outlook.syncMapping, state.outlook.contactsAttributes);
            if (validationError) {
                clientValidationErrors.push(validationError);
            }
            else {
                validSelectedContacts.push(contact);
            }
        });
        if (validSelectedContacts.length === 0) {
            var clientValidationFailedMessageText = selectedContacts.length === 1 ? clientValidationErrors[0] : clientValidationFailedMessage;
            var header = selectedContacts.length === 1 ? clientValidationFailedMessageHeader : clientValidationFailedMessageHeaderPlural;
            dispatch(showAlert(clientValidationFailedMessageText, header));
        }
        return [validSelectedContacts, clientValidationErrors];
    }
    function showAlertIfRequired(isCallRejected, countFailed, validSelectedContacts, fieldsFailed, clientValidationErrors, dispatch) {
        var clientValidationFailedMessage = resources_1.default.getString("MailApp_Module_Alert_Track_Batch_Client_Validation_Error");
        var clientValidationFailedMessageHeaderPlural = resources_1.default.getString("MailApp_Module_Alert_Track_Single_Client_Validation_Error_Header_Plural");
        var showFailedMessageIfRequired = function () {
            if (isCallRejected || countFailed !== 0) {
                dispatch(showAlert(getFailedTrackContactsMessage(validSelectedContacts.length, countFailed, fieldsFailed)));
            }
        };
        if (clientValidationErrors.length > 0) {
            dispatch(showAlert(clientValidationFailedMessage, clientValidationFailedMessageHeaderPlural, showFailedMessageIfRequired));
        }
        else {
            showFailedMessageIfRequired();
        }
    }
    function getFailedTrackContactsFieldName(error) {
        var fieldName;
        if (error && error.message) {
            var regexp = /validation\serror.*'(.*)'\sattribute/;
            var result = error.message.match(regexp);
            fieldName = result && result.length > 1 ? result[1] : null;
        }
        return fieldName;
    }
    function getFailedTrackContactsMessage(total, countFailed, validationFailedFields) {
        if (validationFailedFields.length) {
            var resourceId = 'MailApp_Module_Alert_Track_Some_Validation_Error';
            if (total === 1) {
                resourceId = 'MailApp_Module_Alert_Track_Single_Validation_Error';
            }
            else if (total === validationFailedFields.length) {
                resourceId = 'MailApp_Module_Alert_Track_Batch_Validation_Error';
            }
            var validationUniqFields = validationFailedFields.filter(function (elem, pos, arr) { return arr.indexOf(elem) === pos; }).join(', ');
            return resources_1.default.getString(resourceId).replace(/\{0\}/g, validationUniqFields);
        }
        if (total === 1) {
            return resources_1.default.getString('MailApp_Module_Alert_Track_Single_Generic_Error');
        }
        if (total === countFailed) {
            return resources_1.default.getString('MailApp_Module_Alert_Track_Batch_Generic_Error');
        }
        return resources_1.default.getString('MailApp_Module_Alert_Track_Some_Generic_Error');
    }
    function untrackSelectedContacts(alsoDelete) {
        return function (dispatch, getState) {
            var state = getState();
            dispatch(closeUntrackAlert());
            var selectedContacts = state.outlook.pages[state.outlook.page].filter(function (e, index) {
                e.index = index;
                var tracked = e[model_1.CrmExtendedProperty.CRM_LINK_STATE] && (e[model_1.CrmExtendedProperty.CRM_LINK_STATE] === model_1.CrmExtendedProperty.CRM_LINK_STATE_LINKED);
                return e.selected && tracked;
            });
            dispatch({
                type: actionTypes_1.default.TRANSACTION_START, payload: {
                    type: '',
                    progressMax: selectedContacts.length
                }
            });
            var count = 0;
            selectedContacts.forEach(function (contact) {
                var crmId = contact[model_1.CrmExtendedProperty.CRM_ID];
                untrackContact(contact, state.app.callbackToken, contact.index + 1).then(function (success) {
                    // Dispatch state update to refresh tracked status of affected rows
                    dispatch({
                        type: actionTypes_1.default.UPDATE_CONTACT, payload: {
                            index: contact.index,
                            values: (_a = {},
                                _a[model_1.CrmExtendedProperty.CRM_LINK_STATE] = model_1.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED,
                                _a[model_1.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = '',
                                _a
                            )
                        }
                    });
                    // Update our transaction state
                    count = count + 1;
                    dispatch({
                        type: actionTypes_1.default.UPDATE_TRANSACTION,
                        payload: count
                    });
                    if (alsoDelete && crmId) {
                        var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                        crmInterface_1.crmDelete('contacts', strippedId).then(function (success) {
                            console.log(success);
                        }, function (error) {
                            console.error(error);
                        });
                    }
                    if (count >= selectedContacts.length) {
                        dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                        dispatch(updateContactsCount());
                        dispatcherHandler_1.sendTelemetryEvent({
                            name: 'mailapp_module_untrack',
                            data: {
                                focused: false,
                                count: count
                            }
                        });
                    }
                    var _a;
                }, function (error) {
                    console.error(error);
                });
            });
        };
    }
    function emailSelectedContacts() {
        return function (dispatch, getState) {
            var state = getState();
            var emails = state.outlook.pages[state.outlook.page].filter(function (e) {
                return e.selected;
            }).reduce(function (emails, contact) {
                if (emails == '') {
                    return contact.EmailAddress1;
                }
                else {
                    return emails + ';' + contact.EmailAddress1;
                }
            }, '');
            // If there are no selected contacts, show an alert and abort.
            if (emails == '') {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Email_Alert')));
                return;
            }
            //TODO switch to office.js
            window.open("mailto:" + emails);
        };
    }
    function sendAppointment() {
        return function (dispatch, getState) {
            var state = getState();
            var selectedContacts = state.outlook.pages[state.outlook.page].filter(function (e) {
                return e.selected && e.EmailAddress1;
            }).map(function (contact) {
                return contact.EmailAddress1;
            });
            if (selectedContacts.length == 0) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Appointment_Alert')));
                return;
            }
            dispatcherHandler_1.displayFormForNewAppointment({ 'requiredAttendees': selectedContacts });
        };
    }
    function setAppointmentSelectedContacts() {
        return function (dispatch, getState) {
            var state = getState();
            var selectedContacts = state.outlook.pages[state.outlook.page].filter(function (e, index) {
                e.index = index;
                return e.selected;
            });
            // If there are no selected contacts, show an alert and abort.
            if (selectedContacts.length == 0) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Appointment_Alert')));
                return;
            }
        };
    }
    function showAlert(data, header, closeHandler) {
        return { type: actionTypes_1.default.SHOW_ALERT, payload: { data: data, header: header, closeHandler: closeHandler } };
    }
    function closeAlert() {
        return { type: actionTypes_1.default.CLOSE_ALERT };
    }
    function showConfirm(messages, confirmHandler, denyHandler, confirmButtonText, denyButtonText) {
        return {
            type: actionTypes_1.default.SHOW_CONFIRM,
            payload: {
                messages: messages,
                confirmHandler: confirmHandler,
                denyHandler: denyHandler,
                confirmButtonText: confirmButtonText,
                denyButtonText: denyButtonText
            }
        };
    }
    function closeConfirm() {
        return { type: actionTypes_1.default.CLOSE_CONFIRM };
    }
    function showFocusedUntrackAlert() {
        return function (dispatch, getState) {
            dispatch({
                type: actionTypes_1.default.SHOW_UNTRACK_ALERT, payload: {
                    focused: true
                }
            });
        };
    }
    function showSelectedUntrackAlert() {
        return function (dispatch, getState) {
            var state = getState();
            if (state.outlook.contactView === model_1.ContactViewMode.CRM) {
                dispatch(showAlert(resources_1.default.getString('MailApp_Module_Dymamics_365_Untrack_Alert')));
                return;
            }
            var selectedContacts = state.outlook.pages[state.outlook.page].filter(function (e, index) {
                e.index = index;
                return e.selected;
            });
            var err;
            if (selectedContacts.length === 0) {
                err = "MailApp_Module_Select_Untrack_Alert";
            }
            else {
                err = (selectedContacts.length === 1)
                    ? validateContactTrackStatus(selectedContacts[0], false, model_1.SINGLE_CONTACT_UNTRACKING_ERRORS)
                    : validateMultipleContactsTrackStatus(selectedContacts, false, model_1.MULTIPLE_CONTACTS_UNTRACKING_ERRORS);
            }
            var closeHandler = (err === "MailApp_Module_Alert_Untrack_Batch_Warning_Mixed_States")
                ? function () { return dispatch({ type: actionTypes_1.default.SHOW_UNTRACK_ALERT, payload: { focused: false } }); }
                : null;
            if (err) {
                dispatch(showAlert(resources_1.default.getString(err), null, closeHandler));
                return;
            }
            dispatch({ type: actionTypes_1.default.SHOW_UNTRACK_ALERT, payload: { focused: false } });
        };
    }
    function closeUntrackAlert() {
        return { type: actionTypes_1.default.CLOSE_UNTRACK_ALERT };
    }
    function refresh() {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.REFRESH });
            dispatch(loadContacts());
        };
    }
    // Abrubtly end transaction
    function endTransaction() {
        return { type: actionTypes_1.default.TRANSACTION_SUCCESS };
    }
    function changeView(value) {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.CHANGE_VIEW, payload: value });
            dispatch(refresh());
        };
    }
    function changeTrackedFilter(value) {
        return function (dispatch) {
            dispatch({ type: actionTypes_1.default.CHANGE_TRACKED_FILTER, payload: value });
            dispatch(refresh());
        };
    }
    // Options alert
    function showOptionsAlert() {
        return function (dispatch) {
        };
    }
    // Run passed function when OK is clicked on options alert
    function acceptOptionsAlert() {
        return function (dispatch) {
        };
    }
    function closeOptionsAlert() {
        return function (dispatch) {
        };
    }
    function validateCRMContact(exchangeEntity, mapping, rules) {
        var requiredSingle = resources_1.default.getString("MailApp_Module_Alert_Track_Single_Required_Validation_Error");
        var maxLengthSingle = resources_1.default.getString("MailApp_Module_Alert_Track_Single_MaxLength_Validation_Error");
        var footer = resources_1.default.getString("MailApp_Module_Alert_Track_Single_Client_Validation_Error_Footer");
        var result;
        var crmEntity = crmInterface_1.transformExchangeToCrm(exchangeEntity, mapping);
        var failedByRequired = [];
        var failedByMaxLength = [];
        Object.keys(rules).forEach(function (fieldName) {
            var attribute = rules[fieldName];
            var attributeLabel = attribute.LocalizedLabels[0] && attribute.LocalizedLabels[0].Label || fieldName;
            if (crmEntity.hasOwnProperty(fieldName)) {
                var fieldValue = crmEntity[fieldName];
                if (attribute.isRequired && !fieldValue) {
                    failedByRequired.push(requiredSingle.replace(/\{0\}/g, attributeLabel));
                }
                if (attribute.MaxLength && fieldValue && fieldValue.length > attribute.MaxLength) {
                    failedByMaxLength.push(maxLengthSingle.replace(/\{0\}/g, attributeLabel));
                }
            }
            else if (attribute.isRequired) {
                // crmEntity may have no property if property's value is empty due to EWS does not return empty attributes
                failedByRequired.push(requiredSingle.replace(/\{0\}/g, attributeLabel));
            }
        });
        if (failedByRequired.length || failedByMaxLength.length) {
            result = failedByRequired.concat(failedByMaxLength).concat(footer).join("\r\n");
        }
        return result;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        initialize: initialize,
        loadContacts: loadContacts,
        loadOutlookContacts: loadOutlookContacts,
        loadContactsSuccess: loadContactsSuccess,
        loadContactsFail: loadContactsFail,
        changePage: changePage,
        changePageSize: changePageSize,
        changeOrder: changeOrder,
        search: search,
        toggleColumn: toggleColumn,
        focusContact: focusContact,
        closeContext: closeContext,
        showLinkContext: showLinkContext,
        hideLinkContext: hideLinkContext,
        linkFocusedContact: linkFocusedContact,
        selectAccount: selectAccount,
        linkSelectedAccounts: linkSelectedAccounts,
        unlinkFocusedContact: unlinkFocusedContact,
        changeAccountPage: changeAccountPage,
        openNewAccount: openNewAccount,
        refreshAccounts: refreshAccounts,
        toggleFilter: toggleFilter,
        changeFilter: changeFilter,
        toggleSelect: toggleSelect,
        togglePageSelect: togglePageSelect,
        toggleSettings: toggleSettings,
        untrackFocusedContact: untrackFocusedContact,
        untrackSelectedContacts: untrackSelectedContacts,
        emailSelectedContacts: emailSelectedContacts,
        sendAppointment: sendAppointment,
        showAlert: showAlert,
        closeAlert: closeAlert,
        showConfirm: showConfirm,
        closeConfirm: closeConfirm,
        showFocusedUntrackAlert: showFocusedUntrackAlert,
        showSelectedUntrackAlert: showSelectedUntrackAlert,
        closeUntrackAlert: closeUntrackAlert,
        activateFilter: activateFilter,
        refresh: refresh,
        endTransaction: endTransaction,
        changeView: changeView,
        changeTrackedFilter: changeTrackedFilter,
        attemptTrack: attemptTrack,
        trackContacts: trackContacts,
        closeRetrackAlert: closeRetrackAlert,
        closeAlertAndTrack: closeAlertAndTrack
    };
});
define("modules/data/contacts/reducer", ["require", "exports", "modules/data/contacts/actionTypes", "modules/data/contacts/model", "modules/data/contacts/model", "modules/data/contacts/actions"], function (require, exports, actionTypes_2, model_2, model_3, actions_1) {
    "use strict";
    var initialState = {
        metadata: model_2.OutlookMetadata,
        syncMapping: undefined,
        contactsAttributes: undefined,
        loaded: false,
        outlookTotalContactsCount: 0,
        outlookTotalTrackedContactsCount: 0,
        outlookTotalUntrackedContactsCount: 0,
        contactView: model_3.ContactViewMode.Exchange,
        selectedView: model_3.SelectedViewMode.All,
        // Paging
        pages: {},
        page: 0,
        pageSize: 10,
        totalCount: 0,
        // Order and search
        orderBy: { column: 'DisplayName', stage: 1 },
        search: '',
        // Filters
        showFilter: false,
        filters: {},
        // Settings
        showSettings: false,
        // Focused contact
        focused: {
            active: false,
            page: null,
            index: null
        },
        // Account linking
        showLinkContext: false,
        linkContextTarget: null,
        linkAccounts: {
            pages: [],
            page: 0,
            pageSize: 15,
            totalCount: 0,
            loaded: false,
        },
        selectedAccountId: null,
        selectedAccount: null,
        showRefreshPane: false,
        // Transaction loading screen state
        transaction: {
            type: '',
            showLoading: false,
            progressCurrent: 0,
            progressMax: 0,
        },
        // Tracking data
        trackingData: {
            target: null,
            detectDuplicates: null,
            duplicates: [],
            crmContacts: [],
            newContacts: [],
        },
        // Notification
        notification: {
            lastUpdated: null,
            message: '',
            type: ''
        },
        // Alerts
        alert: {
            data: null,
            header: null,
            active: false
        },
        confirm: {
            active: false
        },
        untrackAlert: {
            focused: false,
            active: false
        },
        retrackAlert: {
            active: false
        },
        optionsAlert: {
            data: null,
            function: null,
            active: false
        }
    };
    /** State reducer for outlook-contacts. */
    function default_1(state, action) {
        if (state === void 0) { state = initialState; }
        var actionType = action.type;
        var payload = action.payload;
        switch (actionType) {
            case actionTypes_2.default.INITIALIZE:
                return Object.assign({}, state, {
                    orderBy: payload.orderBy ? payload.orderBy : state.orderBy,
                    filters: payload.filters ? payload.filters : state.filters,
                    showFilter: payload.showFilter ? payload.showFilter : state.showFilter,
                    pageSize: payload.pageSize ? payload.pageSize : state.pageSize,
                    syncMapping: payload.syncMapping,
                    contactsAttributes: payload.contactsAttributes,
                });
            case actionTypes_2.default.CRM_LOAD_REQUEST:
            case actionTypes_2.default.OUTLOOK_LOAD_REQUEST:
                return Object.assign({}, state, {
                    loaded: false
                });
            // TODO: Refactor
            case actionTypes_2.default.OUTLOOK_LOAD_SUCCESS:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_a = {},
                        _a[state.page] = payload.contacts.map(function (val) { return (Object.assign({}, val, {
                            selected: false
                        })); }),
                        _a
                    )),
                    loaded: true,
                    totalCount: payload.count
                });
            case actionTypes_2.default.OUTLOOK_LOAD_FAIL:
                return Object.assign({}, state, {
                    error: true
                });
            case actionTypes_2.default.CRM_LOAD_SUCCESS:
                console.log(payload);
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_b = {},
                        _b[payload.page] = payload.contacts.map(function (val) { return ((_a = {
                                DisplayName: val.fullname,
                                Department: val.department,
                                GivenName: val.fullname,
                                CompanyName: val.company,
                                BusinessPhone: val.telephone1,
                                EmailAddress1: val.emailaddress1,
                                JobTitle: val.jobtitle,
                                imageUrl: val.entityimage ? "data:image;base64," + val.entityimage.toString() : val.entityimage_url,
                                selected: false
                            },
                            _a[model_2.CrmExtendedProperty.CRM_ID] = "{" + val.contactid + "}",
                            _a[model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = val[model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID],
                            _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                            // Some crm specific fields
                            _a.firstname = val.firstname ? val.firstname : '',
                            _a.lastname = val.lastname ? val.lastname : '',
                            _a
                        )); var _a; }),
                        _b
                    )),
                    loaded: true,
                    totalCount: payload.totalCount
                });
            case actionTypes_2.default.CRM_LOAD_FAIL: {
                return Object.assign({}, state, {
                    error: true
                });
            }
            case actionTypes_2.default.UPDATE_COUNT:
                return Object.assign({}, state, {
                    outlookTotalContactsCount: payload.outlookTotalContactsCount,
                    outlookTotalTrackedContactsCount: payload.outlookTotalTrackedContactsCount,
                    outlookTotalUntrackedContactsCount: payload.outlookTotalUntrackedContactsCount
                });
            case actionTypes_2.default.PHOTO_LOAD_REQUEST:
                return Object.assign({}, state);
            case actionTypes_2.default.PHOTO_LOAD_SUCCESS:
                return Object.assign({}, state);
            case actionTypes_2.default.PHOTO_LOAD_FAIL:
                return Object.assign({}, state);
            case actionTypes_2.default.CHANGE_PAGE:
                return Object.assign({}, state, {
                    page: payload
                });
            case actionTypes_2.default.CHANGE_PAGE_SIZE:
                return Object.assign({}, state, {
                    pageSize: payload,
                    pages: {},
                    page: 0
                });
            case actionTypes_2.default.CHANGE_ORDER:
                return Object.assign({}, state, {
                    orderBy: state.orderBy.column === payload ? {
                        column: payload,
                        stage: state.orderBy.stage == 1 ? 2 : 1
                    } : { column: payload, stage: 1 },
                    pages: {},
                    search: ''
                });
            case actionTypes_2.default.SEARCH:
                return Object.assign({}, state, {
                    search: payload,
                    pages: {},
                    page: 0
                });
            case actionTypes_2.default.TOGGLE_COLUMN:
                var columnIndex = -1;
                for (var index = 0; index < state.metadata.length; index++) {
                    if (state.metadata[index].key === payload) {
                        columnIndex = index;
                        break;
                    }
                }
                if (columnIndex === -1) {
                    return Object.assign({}, state);
                }
                else {
                    return Object.assign({}, state, {
                        metadata: state.metadata.slice(0, columnIndex).concat([{
                                column: state.metadata[columnIndex].column,
                                key: state.metadata[columnIndex].key,
                                active: !state.metadata[columnIndex].active,
                                filterable: state.metadata[columnIndex].filterable
                            }]).concat(state.metadata.slice(columnIndex + 1))
                    });
                }
            case actionTypes_2.default.FOCUS_CONTACT:
                return Object.assign({}, state, {
                    focused: {
                        active: true,
                        index: payload,
                        page: state.page
                    }
                });
            case actionTypes_2.default.CLOSE_CONTEXT:
                return Object.assign({}, state, {
                    focused: {
                        active: false,
                        index: null,
                        page: null
                    },
                    showLinkContext: false,
                });
            // Account linking
            case actionTypes_2.default.SHOW_LINK_CONTEXT:
                var stateModification = {
                    showLinkContext: true,
                    linkContextTarget: payload
                };
                if (payload !== actions_1.ContactTarget.FOCUSED) {
                    // remove focus
                    stateModification.focused = {
                        active: false,
                        index: null,
                        page: null
                    };
                }
                return Object.assign({}, state, stateModification);
            case actionTypes_2.default.HIDE_LINK_CONTEXT:
                return Object.assign({}, state, {
                    focused: {
                        active: false,
                        index: null,
                        page: null
                    },
                    showLinkContext: false,
                });
            case actionTypes_2.default.ACCOUNT_LOAD_SUCCESS:
                return Object.assign({}, state, {
                    linkAccounts: Object.assign({}, state.linkAccounts, {
                        pages: Object.assign({}, state.linkAccounts.pages, (_c = {},
                            _c[payload.page] = payload.accounts,
                            _c
                        )),
                        loaded: true,
                        totalCount: payload.totalCount,
                    }),
                });
            case actionTypes_2.default.CHANGE_ACCOUNT_PAGE:
                return Object.assign({}, state, {
                    linkAccounts: Object.assign({}, state.linkAccounts, {
                        page: payload
                    })
                });
            case actionTypes_2.default.SELECT_ACCOUNT:
                return Object.assign({}, state, {
                    selectedAccount: payload,
                    selectedAccountId: payload.accountid
                });
            // This looping through every contact in the table needs to be updated to only update the selected index. This is ineffecient.
            case actionTypes_2.default.UPDATE_ACCOUNT:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_d = {},
                        _d[state.page] = state.pages[state.page].map(function (val, index) { return (Object.assign({}, val, {
                            crmParentAccountId: payload.index == index ? payload.id : val.crmParentAccountId,
                            CompanyName: payload.index == index ? payload.companyName : val.CompanyName,
                        })); }),
                        _d
                    ))
                });
            case actionTypes_2.default.UPDATE_CONTACT_CRMID:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_e = {},
                        _e[state.page] = state.pages[state.page].map(function (val, index) { return (Object.assign({}, val, (_a = {},
                            _a[model_2.CrmExtendedProperty.CRM_ID] = payload.index == index ? payload.id : val.crmId,
                            _a
                        ))); var _a; }),
                        _e
                    ))
                });
            case actionTypes_2.default.UPDATE_CONTACT_ACTIVITY:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_f = {},
                        _f[state.page] = state.pages[state.page].map(function (val, index) { return (Object.assign({}, val, (_a = {},
                            _a[payload.activityKey] = payload.index == index ? payload.activity : null,
                            _a
                        ))); var _a; }),
                        _f
                    ))
                });
            case actionTypes_2.default.UPDATE_CONTACT:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_g = {},
                        _g[state.page] = state.pages[state.page].map(function (val, index) { return (Object.assign({}, val, payload.index == index ? payload.values : {})); }),
                        _g
                    ))
                });
            case actionTypes_2.default.SHOW_REFRESH_PANE:
                return Object.assign({}, state, {
                    showRefreshPane: true,
                });
            case actionTypes_2.default.HIDE_REFRESH_PANE:
                return Object.assign({}, state, {
                    showRefreshPane: false,
                });
            // Filters
            case actionTypes_2.default.TOGGLE_FILTER:
                return Object.assign({}, state, {
                    showFilter: !state.showFilter,
                    filters: !state.showFilter ? state.filters : {}
                });
            case actionTypes_2.default.CHANGE_FILTER:
                return Object.assign({}, state, {
                    filters: Object.assign({}, state.filters, (_h = {},
                        _h[payload.filter] = payload.value,
                        _h
                    ))
                });
            case actionTypes_2.default.TOGGLE_SELECT:
                var page = state.page;
                var target = payload;
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_j = {},
                        _j[page] = state.pages[page].slice(0, target).concat([
                            Object.assign({}, state.pages[page][target], {
                                selected: !state.pages[page][target].selected
                            })]).concat(state.pages[page].slice(target + 1)),
                        _j
                    ))
                });
            case actionTypes_2.default.TOGGLE_PAGE_SELECT:
                var selected_1 = state.pages[state.page].filter(function (x) { return x.selected === false; }).length === 0;
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_k = {},
                        _k[state.page] = state.pages[state.page].map(function (val) { return (Object.assign({}, val, {
                            selected: !selected_1
                        })); }),
                        _k
                    ))
                });
            case actionTypes_2.default.TOGGLE_SETTINGS:
                return Object.assign({}, state, {
                    showSettings: !state.showSettings
                });
            case actionTypes_2.default.UPDATED_CONTACT_STATUS:
                return Object.assign({}, state, {
                    pages: Object.assign({}, state.pages, (_l = {},
                        _l[state.page] = state.pages[state.page].map(function (val, index) { return (Object.assign({}, val, {
                            crmLinkState: payload.index == index ? payload.value : val.crmLinkState
                        })); }),
                        _l
                    ))
                });
            case actionTypes_2.default.TRANSACTION_START:
                return Object.assign({}, state, {
                    transaction: {
                        showLoading: true,
                        progressCurrent: 0,
                        progressMax: payload.progressMax,
                        type: payload.type
                    }
                });
            case actionTypes_2.default.TRANSACTION_SUCCESS:
                return Object.assign({}, state, {
                    transaction: {
                        showLoading: false
                    }
                });
            case actionTypes_2.default.UPDATE_TRANSACTION:
                return Object.assign({}, state, {
                    transaction: Object.assign({}, state.transaction, {
                        progressCurrent: payload,
                    })
                });
            case actionTypes_2.default.SET_TRACK_DATA:
                return Object.assign({}, state, {
                    trackingData: Object.assign({}, state.trackingData, {
                        target: payload.target,
                        detectDuplicates: payload.detectDuplicates,
                        duplicates: [],
                        crmContacts: payload.crmContacts,
                        newContacts: payload.newContacts,
                    }),
                });
            case actionTypes_2.default.UPDATE_TRACK_DATA_DUPLICATES:
                return Object.assign({}, state, {
                    trackingData: Object.assign({}, state.trackingData, {
                        duplicates: state.trackingData.duplicates.concat(payload),
                    }),
                });
            case actionTypes_2.default.CLEAR_TRACK_DATA:
                return Object.assign({}, state, {
                    trackingData: Object.assign({}, state.trackingData, {
                        target: null,
                        detectDuplicates: null,
                        duplicates: [],
                        crmContacts: [],
                        newContacts: [],
                    }),
                });
            // Alerts
            case actionTypes_2.default.SHOW_ALERT:
                return Object.assign({}, state, {
                    alert: {
                        active: true,
                        data: payload.data,
                        header: payload.header,
                        closeHandler: payload.closeHandler
                    }
                });
            case actionTypes_2.default.CLOSE_ALERT:
                return Object.assign({}, state, {
                    alert: {
                        active: false,
                        data: null
                    }
                });
            // Confirm Dialogs
            case actionTypes_2.default.SHOW_CONFIRM:
                return Object.assign({}, state, {
                    confirm: {
                        active: true,
                        messages: payload.messages,
                        confirmHandler: payload.confirmHandler,
                        denyHandler: payload.denyHandler,
                        confirmButtonText: payload.confirmButtonText,
                        denyButtonText: payload.denyButtonText
                    }
                });
            case actionTypes_2.default.CLOSE_CONFIRM:
                return Object.assign({}, state, {
                    confirm: {
                        active: false
                    }
                });
            case actionTypes_2.default.REFRESH:
                return Object.assign({}, state, {
                    pages: {},
                    page: 0
                });
            case actionTypes_2.default.CHANGE_VIEW:
                return Object.assign({}, state, {
                    contactView: payload
                });
            case actionTypes_2.default.CHANGE_TRACKED_FILTER:
                return Object.assign({}, state, {
                    selectedView: payload
                });
            case actionTypes_2.default.SHOW_UNTRACK_ALERT:
                return Object.assign({}, state, {
                    untrackAlert: {
                        active: true,
                        focused: payload.focused
                    }
                });
            case actionTypes_2.default.CLOSE_UNTRACK_ALERT:
                return Object.assign({}, state, {
                    untrackAlert: {
                        active: false,
                        focused: null
                    }
                });
            case actionTypes_2.default.SHOW_RETRACK_ALERT:
                return Object.assign({}, state, {
                    retrackAlert: {
                        active: true
                    }
                });
            case actionTypes_2.default.CLOSE_RETRACK_ALERT:
                return Object.assign({}, state, {
                    retrackAlert: {
                        active: false
                    }
                });
            default:
                return state;
        }
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = default_1;
});
define("modules/data/contacts/index", ["require", "exports", "modules/data/contacts/actions", "modules/data/contacts/actionTypes", "modules/data/contacts/reducer"], function (require, exports, actions_2, actionTypes_3, reducer_1) {
    "use strict";
    exports.actions = actions_2.default;
    exports.actionTypes = actionTypes_3.default;
    // export { default as model } from './model';
    exports.reducer = reducer_1.default;
});
define("modules/client/app/actionTypes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        INITIALIZE_APP: 'INITIALIZE_APP',
        CRM_ACCESS_KEY_ACQUIRED: 'CRM_ACCESS_KEY_ACQUIRED',
        CRM_ACCESS_KEY_ACQUIRING: 'CRM_ACCESS_KEY_ACQUIRING',
        CALLBACK_TOKEN_ACQUIRED: 'CALLBACK_TOKEN_ACQUIRED'
    };
});
define("modules/client/app/model", ["require", "exports"], function (require, exports) {
    "use strict";
    var OUTLOOK_PATH = 'OUTLOOK_PATH';
    var CRM_PATH = 'CRM_PATH';
    exports.ROUTE_PATHS = {
        OUTLOOK_PATH: OUTLOOK_PATH,
        CRM_PATH: CRM_PATH
    };
});
define("modules/client/app/reducer", ["require", "exports", "modules/client/app/actionTypes", "modules/client/app/model"], function (require, exports, actionTypes_4, model_4) {
    "use strict";
    var initialState = {
        page: model_4.ROUTE_PATHS.OUTLOOK_PATH,
        loaded: false,
        crmAccessKeyAquiring: false
    };
    /** State reducer for app. */
    function reducer(state, action) {
        if (state === void 0) { state = initialState; }
        var actionType = action.type;
        var payload = action.payload;
        switch (actionType) {
            case actionTypes_4.default.INITIALIZE_APP:
                return Object.assign({}, state, payload, {
                    loaded: true
                });
            case actionTypes_4.default.CRM_ACCESS_KEY_ACQUIRED:
                return Object.assign({}, state, {
                    crmAccessKey: payload,
                    crmAccessKeyAquiring: false
                });
            case actionTypes_4.default.CRM_ACCESS_KEY_ACQUIRING:
                return Object.assign({}, state, {
                    crmAccessKeyAquiring: true
                });
            case actionTypes_4.default.CALLBACK_TOKEN_ACQUIRED:
                return Object.assign({}, state, {
                    callbackToken: payload
                });
            default:
                return state;
        }
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = reducer;
    ;
});
define("modules/client/app/index", ["require", "exports", "modules/client/app/reducer"], function (require, exports, reducer_2) {
    "use strict";
    exports.reducer = reducer_2.default;
});
define("reducers/rootReducer", ["require", "exports", "modules/data/contacts/index", "modules/client/app/index"], function (require, exports, contacts_1, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        outlook: contacts_1.reducer,
        app: app_1.reducer
    };
});
define("modules/client/app/actions", ["require", "exports", 'bluebird', "modules/client/app/actionTypes", "lib/dispatcherHandler", "modules/data/contacts/actions", "modules/data/contacts/actionTypes", "lib/crmInterface", "lib/resources", "modules/data/contacts/model"], function (require, exports, Promise, actionTypes_5, dispatcherHandler_2, actions_3, actionTypes_6, crmInterface_2, resources_2, model_5) {
    "use strict";
    var idKey = 'id_token';
    var outlookAccessKey = 'access_token';
    var expiryKey = 'epiry';
    /**
     * Gets the hash parameter out of a string
     * @param {string} str - The string.
     */
    function getHashParam(str) {
        var split = window.location.hash.substring(1).split('&');
        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf(str) === 0) {
                return split[i].split('=')[1];
            }
        }
        return null;
    }
    function scheduleCrmTokenRetrieval(dispatch, refreshToken) {
        if (refreshToken === void 0) { refreshToken = false; }
        return new Promise(function (resolve, reject) {
            dispatch({ type: actionTypes_5.default.CRM_ACCESS_KEY_ACQUIRING, payload: null });
            dispatcherHandler_2.getCrmAccessKey(refreshToken, function (response) {
                var crmAccessKeyResponse = JSON.parse(response.functionArguments[1]).requestSecurityTokenResponse;
                if (crmAccessKeyResponse === "AuthError") {
                    var signInErrorCode = 0x8005f215;
                    dispatcherHandler_2.showAppError(signInErrorCode, "Auth error - failed to retrieve CRM access token");
                    reject();
                }
                else {
                    var result = crmAccessKeyResponse.replace(/[\s\S]*<AccessToken>([\s\S]*)<\/AccessToken>[\s\S]*<ExpiresOn>([\s\S]*)<\/ExpiresOn>[\s\S]*/i, "$1;;;$2");
                    var data = result.split(";;;");
                    var expiresOn = (new Date(data[1])).getTime();
                    dispatch({ type: actionTypes_5.default.CRM_ACCESS_KEY_ACQUIRED, payload: data[0] });
                    // re-auth 2 seconds before token expired to avoid requests being sent with expired token
                    window.setTimeout(function () {
                        scheduleCrmTokenRetrieval(dispatch, true);
                    }, (expiresOn - Date.now() - 2000));
                    resolve();
                }
            });
        });
    }
    /** Action creator entry point to initialize the entire application. */
    function initializeApp() {
        return function (dispatch, getState) {
            crmInterface_2.XhrWrapper.GET_STATE = getState;
            dispatch(registerRibbonFunctions());
            dispatcherHandler_2.waitForDeviceReadyEvent().then(function () {
                var getResourceStringsPromise = new Promise(function (resolve) {
                    dispatcherHandler_2.getResourceStrings(resources_2.resourceStrings, function (response) {
                        var values = JSON.parse(response.functionArguments[1]).values;
                        resources_2.default.initialize(values);
                        resolve();
                    });
                });
                var promises = [getResourceStringsPromise, scheduleCrmTokenRetrieval(dispatch)];
                Promise.all(promises).then(function () {
                    var state = getState();
                    dispatcherHandler_2.getRoamingSettingsItem("mscrm_module_settings", function (response) {
                        crmInterface_2.whoAmI().then(function (whoAmISuccess) {
                            return Promise.all([
                                crmInterface_2.retrievePrincipalSyncAttributesMapping(whoAmISuccess.UserId),
                                crmInterface_2.retrieveContactEntityAttributesMetadata(),
                            ]);
                        }).then(function (allResults) {
                            var syncAttributesMapping = allResults[0], contactAttributesResponse = allResults[1];
                            var ContactEntityTypeCode = 2;
                            var contactsMappings = syncAttributesMapping.AttributeMappings.filter(function (mapping) { return mapping.EntityTypeCode === ContactEntityTypeCode; });
                            var contactsMappingsFiltered = {};
                            var contactsAttributesFiltered = {};
                            var contactsAttributesMapped = [];
                            contactsMappings.forEach(function (mapping) {
                                var isSyncable = mapping.SyncDirection === model_5.SyncDirection.ToCrm || mapping.SyncDirection === model_5.SyncDirection.Both;
                                if (mapping.AttributeExchangeName && mapping.AttributeCrmName && isSyncable) {
                                    contactsMappingsFiltered[mapping.AttributeExchangeName] = mapping;
                                    contactsAttributesMapped.push(mapping.AttributeCrmName);
                                }
                            });
                            var contactEntityAttributes = contactAttributesResponse.value;
                            contactEntityAttributes.forEach(function (attribute) {
                                if (contactsAttributesMapped.indexOf(attribute.LogicalName) !== -1) {
                                    var requiredLevel = attribute.RequiredLevel && attribute.RequiredLevel.Value;
                                    contactsAttributesFiltered[attribute.LogicalName] = {
                                        LocalizedLabels: attribute.DisplayName.LocalizedLabels,
                                        isRequired: requiredLevel == "ApplicationRequired" || requiredLevel == "SystemRequired",
                                        MaxLength: attribute.MaxLength,
                                    };
                                }
                            });
                            var data = JSON.parse(response.functionArguments[1]);
                            if (data.result) {
                                dispatch({
                                    type: actionTypes_6.default.INITIALIZE, payload: {
                                        orderBy: data.result.orderBy,
                                        filters: data.result.filters,
                                        showFilter: data.result.showFilter,
                                        pageSize: data.result.pageSize,
                                        contactView: data.result.contactView,
                                        selectedView: data.result.selectedView,
                                        columns: data.result.columns,
                                        syncMapping: contactsMappingsFiltered,
                                        linkAccounts: {
                                            pageSize: data.result.linkAccounts && data.result.linkAccounts.pageSize,
                                        },
                                        contactsAttributes: contactsAttributesFiltered,
                                    },
                                });
                            }
                            else {
                                dispatch({
                                    type: actionTypes_6.default.INITIALIZE, payload: {
                                        syncMapping: contactsMappingsFiltered,
                                        contactsAttributes: contactsAttributesFiltered,
                                    },
                                });
                            }
                            dispatcherHandler_2.sendTelemetryEvent({
                                name: "mailapp_module_init",
                                data: {
                                    type: "mailapp_module_init",
                                },
                            });
                            dispatch({
                                type: actionTypes_5.default.INITIALIZE_APP,
                                payload: {},
                            });
                        }).catch(function (error) {
                            console.error(error);
                        });
                    });
                }, function (error) {
                    console.error(error);
                });
            });
        };
    }
    exports.initializeApp = initializeApp;
    function registerRibbonFunctions() {
        var _this = this;
        return function (dispatch, getState) {
            var buildRibbonHandler = function (actionCreator) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return function (event) {
                    var state = getState();
                    // Don't allow any actions if we are in the middle of a transaction and blocking the app
                    if (!state.outlook.transaction.showLoading) {
                        dispatch(actionCreator.apply(_this, args));
                    }
                    if (event) {
                        event.completed(true);
                    }
                };
            };
            parent.trackContacts = buildRibbonHandler(actions_3.default.attemptTrack, actions_3.ContactTarget.SELECTED, true);
            parent.untrackContacts = buildRibbonHandler(actions_3.default.showSelectedUntrackAlert);
            parent.setAccount = buildRibbonHandler(actions_3.default.showLinkContext, actions_3.ContactTarget.SELECTED);
            parent.sendEmail = buildRibbonHandler(actions_3.default.emailSelectedContacts);
            parent.sendAppointment = buildRibbonHandler(actions_3.default.sendAppointment);
        };
    }
    function refreshCallbackToken() {
        return function (dispatch) {
            dispatcherHandler_2.getCallbackTokenAsync(function (response) {
                var value = JSON.parse(response.functionArguments[1]).onRequestCallbackTokenAsyncResponse;
                // Since the dispatcher doesn't actually let us know if it succeeds or not, we must test its type.
                if (typeof value == 'string') {
                    dispatch(acquiredCallbackToken(value));
                }
            });
        };
    }
    function acquiredCallbackToken(token) {
        return { type: actionTypes_5.default.CALLBACK_TOKEN_ACQUIRED, payload: token };
    }
});
define("components/Alert", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_1, redux_1, resources_3, actions_4) {
    "use strict";
    /**
     * Class representing an alert.
     * @extends React.Component
    */
    var Alert = (function (_super) {
        __extends(Alert, _super);
        function Alert() {
            _super.apply(this, arguments);
        }
        Alert.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {className: "alertContainer"}, React.createElement("div", {style: { display: 'flex', flexDirection: 'column', border: '2px solid #eee', backgroundColor: '#fff' }}, React.createElement("div", {style: { boxSizing: 'border-box', height: '40px', padding: '8px 14px', fontSize: 14, fontWeight: 600, color: '#131304', borderBottom: '1px solid #ccc' }}, React.createElement("span", {className: 'icn alert', style: { marginRight: 6, position: 'relative', top: 2 }}), React.createElement("span", null, this.props.header || resources_3.default.getString('Brand_CRM'))), React.createElement("div", {style: { padding: '18px 14px 10px 14px', fontSize: 14, color: '#131304', lineHeight: 1.2 }}, this._getSplittedMessage()), React.createElement("div", {style: { padding: '8px 14px 18px 8px' }}, React.createElement("div", {style: { display: 'flex', justifyContent: 'flex-end' }}, React.createElement("button", {className: 'btn primary', onClick: function () { return _this.props.closeAlert() && _this.props.closeHandler && _this.props.closeHandler(); }}, resources_3.default.getString('MailApp_Module_Alert_Button_OK')))))));
        };
        Alert.prototype._getSplittedMessage = function () {
            var messages = this.props.data && this.props.data.split ? this.props.data.split(/\r?\n/) : [];
            return messages.map(function (item, key) {
                return React.createElement("p", {key: key}, item);
            });
        };
        return Alert;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            active: state.outlook.alert.active,
            data: state.outlook.alert.data,
            header: state.outlook.alert.header,
            closeHandler: state.outlook.alert.closeHandler
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            closeAlert: redux_1.bindActionCreators(actions_4.default.closeAlert, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Alert);
});
define("components/Confirm", ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_2, resources_4, actions_5) {
    "use strict";
    /**
     * Class representing a confirm dialog.
     * @extends React.Component
    */
    var Confirm = (function (_super) {
        __extends(Confirm, _super);
        function Confirm() {
            _super.apply(this, arguments);
        }
        Confirm.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {className: "alertContainer"}, React.createElement("div", {style: { width: '500px', height: '300px', display: 'flex', flexDirection: 'column', border: '2px solid #eee' }}, React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("span", null, resources_4.default.getString('Brand_CRM'))), React.createElement("div", {style: { height: '100%', backgroundColor: 'white', padding: '8px' }}, React.createElement("div", null, this.props.messages && this.props.messages.length && this.props.messages.map(function (message, i) { return React.createElement("p", {key: i}, message); }))), React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("div", {style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' }}, React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.close() && _this.props.confirmHandler && _this.props.confirmHandler(); }}, this.props.confirmButtonText), React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.close() && _this.props.denyHandler && _this.props.denyHandler(); }}, this.props.denyButtonText))))));
        };
        return Confirm;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            messages: state.outlook.confirm.messages,
            confirmHandler: state.outlook.confirm.confirmHandler,
            denyHandler: state.outlook.confirm.denyHandler,
            confirmButtonText: state.outlook.confirm.confirmButtonText,
            denyButtonText: state.outlook.confirm.denyButtonText
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            close: function () { return (dispatch(actions_5.default.closeConfirm()) || true); } // make close() return true so we can chain it above
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_2.connect(mapStateToProps, mapDispatchToProps)(Confirm);
});
define("components/UntrackAlert", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_3, redux_2, resources_5, actions_6) {
    "use strict";
    /**
     * Class representing an alert.
     * @extends React.Component
    */
    var UntrackAlert = (function (_super) {
        __extends(UntrackAlert, _super);
        function UntrackAlert() {
            _super.apply(this, arguments);
        }
        UntrackAlert.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {className: "alertContainer"}, React.createElement("div", {style: { width: '500px', height: '300px', display: 'flex', flexDirection: 'column', border: '2px solid #eee' }}, React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("span", null, resources_5.default.getString('Brand_CRM'))), React.createElement("div", {style: { height: '100%', backgroundColor: 'white', padding: '8px' }}, React.createElement("div", null, resources_5.default.getString('MailApp_Module_Alert_Single_Untrack_Title')), React.createElement("div", null, resources_5.default.getString('MailApp_Module_Alert_Single_Untrack_Message'))), React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("div", {style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' }}, React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.focused ? _this.props.untrackFocusedContact(e, true) : _this.props.untrackSelectedContacts(true); }}, resources_5.default.getString('MailApp_Module_Alert_Untrack_Button_Delete')), React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.focused ? _this.props.untrackFocusedContact(e, false) : _this.props.untrackSelectedContacts(false); }}, resources_5.default.getString('MailApp_Module_Alert_Untrack_Button_Keep')), React.createElement("button", {onClick: function () { return _this.props.closeUntrackAlert(); }}, resources_5.default.getString('MailApp_Module_Alert_Button_Cancel')))))));
        };
        return UntrackAlert;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            active: state.outlook.untrackAlert.active,
            focused: state.outlook.untrackAlert.focused
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            untrackFocusedContact: redux_2.bindActionCreators(actions_6.default.untrackFocusedContact, dispatch),
            untrackSelectedContacts: redux_2.bindActionCreators(actions_6.default.untrackSelectedContacts, dispatch),
            closeUntrackAlert: redux_2.bindActionCreators(actions_6.default.closeUntrackAlert, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_3.connect(mapStateToProps, mapDispatchToProps)(UntrackAlert);
});
define("components/RetrackAlert", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_4, redux_3, resources_6, actions_7) {
    "use strict";
    /**
     * Class representing an alert.
     * @extends React.Component
    */
    var RetrackAlert = (function (_super) {
        __extends(RetrackAlert, _super);
        function RetrackAlert() {
            _super.apply(this, arguments);
        }
        RetrackAlert.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {className: "alertContainer"}, React.createElement("div", {style: { width: '500px', height: '300px', display: 'flex', flexDirection: 'column', border: '2px solid #eee' }}, React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("span", null, resources_6.default.getString('Brand_CRM'))), React.createElement("div", {style: { height: '100%', backgroundColor: 'white', padding: '8px' }}, React.createElement("div", null, resources_6.default.getString('MailApp_Module_Alert_Previously_Tracked'))), React.createElement("div", {style: { height: '40px', backgroundColor: '#eee', padding: '8px' }}, React.createElement("div", {style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' }}, React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.trackContacts(true); }}, resources_6.default.getString('MailApp_Module_Alert_Previously_Tracked_Button_Link')), React.createElement("button", {style: { marginRight: '8px' }, onClick: function (e) { return _this.props.trackContacts(false); }}, resources_6.default.getString('MailApp_Module_Alert_Previously_Tracked_Button_Create')), React.createElement("button", {onClick: function () { return _this.props.closeRetrackAlert(); }}, resources_6.default.getString('MailApp_Module_Alert_Button_Cancel')))))));
        };
        return RetrackAlert;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            active: state.outlook.retrackAlert.active
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            trackContacts: redux_3.bindActionCreators(actions_7.default.closeAlertAndTrack, dispatch),
            closeRetrackAlert: redux_3.bindActionCreators(actions_7.default.closeRetrackAlert, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_4.connect(mapStateToProps, mapDispatchToProps)(RetrackAlert);
});
define("components/TabControl", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions", "modules/data/contacts/model"], function (require, exports, React, react_redux_5, redux_4, resources_7, actions_8, model_6) {
    "use strict";
    /**
     * Class representing the bottom control of the contacts table.
     * @extends React.Component
    */
    var TabControl = (function (_super) {
        __extends(TabControl, _super);
        function TabControl() {
            _super.apply(this, arguments);
        }
        TabControl.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {style: { fontSize: '18px', lineHeight: 1.2, fontWeight: 400, paddingBottom: '5px' }}, React.createElement("a", {onClick: function () { return _this.props.changeView(model_6.ContactViewMode.Exchange); }, style: { color: this.props.contactView == model_6.ContactViewMode.Exchange ? '#0072c6' : '#666', marginRight: '20px' }}, resources_7.default.getString('MailApp_Module_Outlook_Contacts')), React.createElement("a", {onClick: function () { return _this.props.changeView(model_6.ContactViewMode.CRM); }, style: { color: this.props.contactView == model_6.ContactViewMode.CRM ? '#0072c6' : '#666' }}, resources_7.default.getString('MailApp_Module_Dymamics_365_Contacts'))));
        };
        return TabControl;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            contactView: state.outlook.contactView
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            changeView: redux_4.bindActionCreators(actions_8.default.changeView, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_5.connect(mapStateToProps, mapDispatchToProps)(TabControl);
});
define("components/ContactTableSearch", ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_6, resources_8, actions_9) {
    "use strict";
    /**
     * Class representing the search input of the top control.
     * @extends React.Component
    */
    var ContactTableSearch = (function (_super) {
        __extends(ContactTableSearch, _super);
        function ContactTableSearch(props) {
            _super.call(this, props);
            this.state = {
                inputText: this.props.searchValue
            };
        }
        ContactTableSearch.prototype.submit = function (e) {
            this.props.search(this.state.inputText);
            e.preventDefault();
            return false;
        };
        ContactTableSearch.prototype.handleChange = function (e) {
            this.setState({ inputText: e.target.value });
        };
        ContactTableSearch.prototype.render = function () {
            var _this = this;
            return (React.createElement("form", {onSubmit: function (e) { return _this.submit(e); }, style: { display: 'inline' }}, React.createElement("input", {style: { border: '1px solid #ccc', padding: '2px 24px 2px 5px', fontSize: 14, color: '#000', fontWeight: 400 }, placeholder: resources_8.default.getString('MailApp_Module_Search'), onChange: this.handleChange.bind(this), value: this.state.inputText}), React.createElement("span", {className: 'icn search', style: { position: 'relative', right: 19, top: 2 }})));
        };
        return ContactTableSearch;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            searchValue: state.outlook.search
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            search: function (value) {
                return dispatch(actions_9.default.search(value));
            }
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_6.connect(mapStateToProps, mapDispatchToProps)(ContactTableSearch);
});
define("components/ContactTableFieldCustomizer", ["require", "exports", 'react', 'react-dom', 'react-redux', 'redux', "modules/data/contacts/actions", "lib/resources"], function (require, exports, React, ReactDOM, react_redux_7, redux_5, actions_10, resources_9) {
    "use strict";
    /**
     * Class representing the column visibility customizer.
     * @extends React.Component
    */
    var ContactTableFieldCustomizer = (function (_super) {
        __extends(ContactTableFieldCustomizer, _super);
        function ContactTableFieldCustomizer(props) {
            _super.call(this, props);
            this._onDocumentClick = this._onDocumentClick.bind(this);
        }
        ContactTableFieldCustomizer.prototype.componentWillUnmount = function () {
            document.removeEventListener('click', this._onDocumentClick);
        };
        ContactTableFieldCustomizer.prototype.componentWillReceiveProps = function (nextProps) {
            if (this.props.showSettings && !nextProps.showSettings) {
                document.removeEventListener('click', this._onDocumentClick);
            }
            else if (!this.props.showSettings && nextProps.showSettings) {
                document.addEventListener('click', this._onDocumentClick);
            }
        };
        ContactTableFieldCustomizer.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {ref: 'wrapper', id: "fieldCustomizer", className: "fieldCustomizer", style: { display: this.props.showSettings ? 'inline-block' : 'none', tabIndex: 0, zIndex: 1 }}, React.createElement("div", {style: { fontSize: 12, color: '#666' }}, resources_9.default.getString('MailApp_Module_Column_Title')), this.props.metadata.map(function (item, i) {
                return React.createElement("div", {key: i}, React.createElement("label", null, React.createElement("input", {type: "checkbox", checked: item.active, onChange: function () { return _this.props.toggleColumn(item.key); }}), React.createElement("span", {style: { fontSize: 14, color: '#000', lineHeight: '2' }}, resources_9.default.getString(item.column))), React.createElement("br", null));
            })));
        };
        ContactTableFieldCustomizer.prototype._onDocumentClick = function (e) {
            var wrapper = ReactDOM.findDOMNode(this.refs['wrapper']);
            for (var currentNode = e.target;; currentNode = currentNode.parentNode) {
                if (currentNode == wrapper) {
                    break;
                }
                else if (!currentNode) {
                    this.props.toggleSettings();
                    break;
                }
            }
        };
        return ContactTableFieldCustomizer;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            showSettings: state.outlook.showSettings,
            metadata: state.outlook.metadata
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            toggleColumn: function (key) {
                return dispatch(actions_10.default.toggleColumn(key));
            },
            toggleSettings: redux_5.bindActionCreators(actions_10.default.toggleSettings, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_7.connect(mapStateToProps, mapDispatchToProps)(ContactTableFieldCustomizer);
});
define("components/ContactTableTopControl", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions", "modules/data/contacts/model", "components/ContactTableSearch", "components/ContactTableFieldCustomizer"], function (require, exports, React, react_redux_8, redux_6, resources_10, actions_11, model_7, ContactTableSearch_1, ContactTableFieldCustomizer_1) {
    "use strict";
    /**
     * Class representing the top control of the contacts table.
     * @extends React.Component
    */
    var ContactTableTopControl = (function (_super) {
        __extends(ContactTableTopControl, _super);
        function ContactTableTopControl() {
            _super.apply(this, arguments);
        }
        ContactTableTopControl.prototype.selectControl = function () {
            var _this = this;
            return (React.createElement("select", {value: this.props.selectedView, onChange: function (e) { return _this.props.changeTrackedFilter(e.target.value); }, style: { border: 0, fontWeight: 'bold', lineHeight: '1.2', fontSize: '14px' }}, React.createElement("option", {value: model_7.SelectedViewMode.All.toString()}, resources_10.default.getString('MailApp_Module_Tracking_Filter_All')), React.createElement("option", {value: model_7.SelectedViewMode.Tracked.toString()}, resources_10.default.getString('MailApp_Module_Tracking_Filter_Tracked')), React.createElement("option", {value: model_7.SelectedViewMode.Untracked.toString()}, resources_10.default.getString('MailApp_Module_Tracking_Filter_Untracked'))));
        };
        ContactTableTopControl.prototype.specialControls = function () {
            var _this = this;
            return (React.createElement("span", null, React.createElement(ContactTableSearch_1.default, null), React.createElement("span", {style: { color: '#ccc' }}, " | "), React.createElement("a", {className: this.props.showFilter ? 'icn filterCancel tooltip' : 'icn filter tooltip', onClick: function (e) { return _this.props.toggleFilter(e); }}, React.createElement("span", {className: "tooltiptext"}, this.props.showFilter ? resources_10.default.getString('MailApp_Module_Filter_Hide_Tooltip') : resources_10.default.getString('MailApp_Module_Filter_Show_Tooltip'))), React.createElement("span", {style: { color: '#ccc' }}, " | "), React.createElement("span", {style: { position: 'relative' }}, React.createElement("a", {className: "icn settings tooltip " + (this.props.showSettings ? 'on' : ''), onClick: this._onSettingsClick.bind(this)}, React.createElement("span", {className: "tooltiptext"}, this.props.showSettings ? resources_10.default.getString('MailApp_Module_Column_Hide_Tooltip') : resources_10.default.getString('MailApp_Module_Column_Show_Tooltip'))), React.createElement(ContactTableFieldCustomizer_1.default, null)), React.createElement("span", {style: { color: '#ccc' }}, " | ")));
        };
        ContactTableTopControl.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {style: { display: 'flex', justifyContent: 'space-between', padding: '10px 10px 10px 0px', height: 24 }}, React.createElement("span", null, this.props.contactView === model_7.ContactViewMode.Exchange ? this.selectControl() : null), React.createElement("span", null, this.props.contactView === model_7.ContactViewMode.Exchange ? this.specialControls() : null, React.createElement("a", {className: "icn refresh tooltip", onClick: function (e) { return _this.props.refresh(e); }}, React.createElement("span", {className: "tooltiptext"}, resources_10.default.getString('MailApp_Module_Refresh_Tooltip'))))));
        };
        ContactTableTopControl.prototype._onSettingsClick = function () {
            if (!this.props.showSettings) {
                this.props.toggleSettings();
            }
        };
        return ContactTableTopControl;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            showSettings: state.outlook.showSettings,
            showFilter: state.outlook.showFilter,
            count: state.outlook.outlookTotalContactsCount,
            untrackedCount: state.outlook.outlookTotalUntrackedContactsCount,
            trackedCount: state.outlook.outlookTotalTrackedContactsCount,
            selectedView: state.outlook.selectedView,
            contactView: state.outlook.contactView
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            changeTrackedFilter: redux_6.bindActionCreators(actions_11.default.changeTrackedFilter, dispatch),
            toggleFilter: redux_6.bindActionCreators(actions_11.default.toggleFilter, dispatch),
            toggleSettings: redux_6.bindActionCreators(actions_11.default.toggleSettings, dispatch),
            refresh: redux_6.bindActionCreators(actions_11.default.refresh, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_8.connect(mapStateToProps, mapDispatchToProps)(ContactTableTopControl);
});
define("components/ContactTableLimitControl", ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_9, resources_11, actions_12) {
    "use strict";
    /**
     * Class representing the page limit control dropdown.
     * @extends React.Component
    */
    var ContactTableLimitControl = (function (_super) {
        __extends(ContactTableLimitControl, _super);
        function ContactTableLimitControl(props) {
            _super.call(this, props);
        }
        ContactTableLimitControl.prototype.change = function (e) {
            this.props.changePageSize(e.target.value);
        };
        ContactTableLimitControl.prototype.render = function () {
            return (React.createElement("span", {style: { paddingLeft: '8px' }}, React.createElement("span", null, resources_11.default.getString('MailApp_Module_Rows_To_Show'), " "), React.createElement("select", {value: this.props.pageSize, onChange: this.change.bind(this)}, React.createElement("option", {value: "10"}, "10"), React.createElement("option", {value: "15"}, "15"), React.createElement("option", {value: "20"}, "20"), React.createElement("option", {value: "25"}, "25")), React.createElement("span", null, ' ', (this.props.pageSize * this.props.page) + 1, ' - ', Math.min((this.props.pageSize * this.props.page) + this.props.pageSize, this.props.count), ' | ', this.props.count)));
        };
        return ContactTableLimitControl;
    }(React.Component));
    var mapState = function (state) {
        return {
            pageSize: state.outlook.pageSize,
            page: state.outlook.page,
            count: state.outlook.totalCount
        };
    };
    var mapDispatch = function (dispatch) {
        return {
            changePageSize: function (value) {
                return dispatch(actions_12.default.changePageSize(value));
            }
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_9.connect(mapState, mapDispatch)(ContactTableLimitControl);
});
define("components/ContactTablePagingControl", ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_10, resources_12, actions_13) {
    "use strict";
    /**
     * Class representing the paging control.
     * @extends React.Component
    */
    var ContactTablePagingControl = (function (_super) {
        __extends(ContactTablePagingControl, _super);
        function ContactTablePagingControl() {
            _super.apply(this, arguments);
        }
        ContactTablePagingControl.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", null, React.createElement("a", {style: { paddingRight: '15px', color: this.props.page == 0 ? '#999' : '#444', cursor: this.props.page == 0 ? 'default' : 'pointer' }, onClick: function () { return _this.props.changePage(0); }}, resources_12.default.getString('MailApp_Module_First_Page')), React.createElement("a", {style: { paddingRight: '15px', color: this.props.page == 0 ? '#999' : '#444', cursor: this.props.page == 0 ? 'default' : 'pointer' }, onClick: function () { return _this.props.changePage(_this.props.page - 1); }}, resources_12.default.getString('MailApp_Module_Previous')), React.createElement("a", {style: { paddingRight: '15px', color: ((this.props.page + 1) * this.props.pageSize) >= this.props.totalCount ? '#999' : '#444', cursor: ((this.props.page + 1) * this.props.pageSize) >= this.props.totalCount ? 'default' : 'pointer' }, onClick: function () { return _this.props.changePage(_this.props.page + 1); }}, resources_12.default.getString('MailApp_Module_Next')), React.createElement("a", {style: { paddingRight: '15px', color: this.props.page == (Math.floor(this.props.totalCount / this.props.pageSize)) ? '#999' : '#444', cursor: this.props.page == (Math.floor(this.props.totalCount / this.props.pageSize)) ? 'default' : 'pointer' }, onClick: function () { return _this.props.changePage(Math.floor(_this.props.totalCount / _this.props.pageSize)); }}, resources_12.default.getString('MailApp_Module_Paging_Last'))));
        };
        return ContactTablePagingControl;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            page: state.outlook.page,
            pageSize: state.outlook.pageSize,
            totalCount: state.outlook.totalCount
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            changePage: function (value) { return dispatch(actions_13.default.changePage(value)); }
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_10.connect(mapStateToProps, mapDispatchToProps)(ContactTablePagingControl);
});
define("components/ContactTableBottomControl", ["require", "exports", 'react', 'react-redux', "components/ContactTableLimitControl", "components/ContactTablePagingControl"], function (require, exports, React, react_redux_11, ContactTableLimitControl_1, ContactTablePagingControl_1) {
    "use strict";
    /**
     * Class representing the bottom control of the contacts table.
     * @extends React.Component
    */
    var ContactTableBottomControl = (function (_super) {
        __extends(ContactTableBottomControl, _super);
        function ContactTableBottomControl() {
            _super.apply(this, arguments);
        }
        ContactTableBottomControl.prototype.render = function () {
            return (React.createElement("div", {className: "bottomControl", style: { display: 'flex', 'justifyContent': 'space-between', alignItems: 'center', backgroundColor: '#eee', height: '40px' }}, React.createElement(ContactTableLimitControl_1.default, null), React.createElement(ContactTablePagingControl_1.default, null)));
        };
        return ContactTableBottomControl;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {};
    };
    var mapDispatchToProps = function (dispatch) {
        return {};
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_11.connect(mapStateToProps, mapDispatchToProps)(ContactTableBottomControl);
});
define("components/ContactTableFilter", ["require", "exports", 'react', 'react-redux', 'redux', "modules/data/contacts/actions", "modules/data/contacts/model"], function (require, exports, React, react_redux_12, redux_7, actions_14, model_8) {
    "use strict";
    var filterStyle = {
        width: '250px',
        height: '250px',
        backgroundColor: 'black'
    };
    /**
     * Class representing the filter row that appears at the top of the contacts table.
     * @extends React.Component
    */
    var ContactTableFilter = (function (_super) {
        __extends(ContactTableFilter, _super);
        function ContactTableFilter() {
            _super.apply(this, arguments);
        }
        ContactTableFilter.prototype.activateFilter = function (e) {
            e.preventDefault();
            this.props.activateFilter();
            return false;
        };
        ContactTableFilter.prototype.onChange = function (e, filter) {
            this.props.changeFilter(filter, e.target.value);
        };
        ContactTableFilter.prototype.render = function () {
            var _this = this;
            var emptyCell = this.props.contactView != model_8.ContactViewMode.CRM ? React.createElement("td", null) : null;
            return (React.createElement("tr", {style: { display: this.props.showFilter ? 'table-row' : 'none', backgroundColor: '#CBE2F5', pointer: 'default' }}, React.createElement("td", null), emptyCell, this.props.metadata.filter(function (e) { return e.active; }).map(function (meta, k) {
                if (meta.filterable === true) {
                    return (React.createElement("td", {key: k}, React.createElement("form", {onSubmit: function (e) { return _this.activateFilter(e); }}, React.createElement("input", {value: _this.props.filters[meta.key], style: { width: '120px' }, onChange: function (e) { return _this.onChange(e, meta.key); }, type: "text"}))));
                }
                else {
                    return (React.createElement("td", {key: k, style: { whiteSpace: 'nowrap' }}));
                }
            })));
        };
        return ContactTableFilter;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            filters: state.outlook.filters,
            showFilter: state.outlook.showFilter,
            metadata: state.outlook.metadata,
            contactView: state.outlook.contactView
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            activateFilter: redux_7.bindActionCreators(actions_14.default.activateFilter, dispatch),
            changeFilter: redux_7.bindActionCreators(actions_14.default.changeFilter, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_12.connect(mapStateToProps, mapDispatchToProps)(ContactTableFilter);
});
define("components/BaseContactTable", ["require", "exports", 'react', 'react-dom', 'react-redux', 'redux', "modules/data/contacts/index", "lib/resources"], function (require, exports, React, ReactDOM, react_redux_13, redux_8, contacts_2, resources_13) {
    "use strict";
    var BaseContactTable = (function (_super) {
        __extends(BaseContactTable, _super);
        function BaseContactTable(props) {
            _super.call(this, props);
            this.state = {
                columnWidths: []
            };
        }
        BaseContactTable.prototype.componentWillMount = function () {
            this.props.actions.initialize();
        };
        BaseContactTable.prototype.componentDidMount = function () {
            var _this = this;
            var bodyWrapper = ReactDOM.findDOMNode(this.refs['bodyWrapper']);
            bodyWrapper.addEventListener('scroll', function () {
                ReactDOM.findDOMNode(_this.refs['header']).scrollLeft = bodyWrapper.scrollLeft;
            });
            this._recalculateColumns();
            window.addEventListener('resize', function () {
                clearTimeout(_this._columnUpdateTimeoutId);
                _this._columnUpdateTimeoutId = setTimeout(function () {
                    _this._recalculateColumns();
                }, 256);
            });
        };
        BaseContactTable.prototype.componentDidUpdate = function (prevProps, prevState) {
            this._recalculateColumns();
        };
        BaseContactTable.prototype.render = function () {
            var body;
            var _a = this.props, contacts = _a.contacts, pages = _a.pages, page = _a.page, actions = _a.actions, focused = _a.focused, metadata = _a.metadata, filter = _a.filter, bodyColumnRenderer = _a.bodyColumnRenderer, rowRenderer = _a.rowRenderer;
            if (contacts.loaded || contacts.pages[contacts.page]) {
                var activeColumns_1 = metadata.filter(function (e) { return e.active; });
                var cellStyle_1 = { borderRight: '1px solid transparent' };
                body = (React.createElement("table", null, bodyColumnRenderer(activeColumns_1, 'bodyColumns'), React.createElement("tbody", null, filter, (function () {
                    if (pages[page].length > 0) {
                        return pages[page].map(function (col, i) {
                            var rowStyle = { backgroundColor: i === focused.index ? '#cbe2f3' : '#fff' };
                            return rowRenderer(actions, activeColumns_1, focused, col, i, rowStyle, cellStyle_1);
                        });
                    }
                    else {
                        return (React.createElement("tr", {style: { border: 'none' }}, React.createElement("td", null, resources_13.default.getString('MailApp_Module_No_Contacts'))));
                    }
                })())));
            }
            else {
                body = (React.createElement("div", {style: { height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}, React.createElement("div", {className: "progressLoader"})));
            }
            return (React.createElement("div", {style: { flex: '1', display: 'flex', flexDirection: 'column', position: 'relative' }}, React.createElement("div", {style: { left: 0, top: 0, width: '100%', height: 40, position: 'absolute', backgroundColor: '#eee' }}), this._renderHeader(), React.createElement("div", {ref: 'bodyWrapper', style: { overflowY: 'auto', flex: '1' }}, body)));
        };
        BaseContactTable.prototype._renderHeader = function () {
            var _a = this.props, headerRenderer = _a.headerRenderer, metadata = _a.metadata, actions = _a.actions, pages = _a.pages, page = _a.page, contacts = _a.contacts;
            var _b = this.state, columnWidths = _b.columnWidths, bodyWrapperWidth = _b.bodyWrapperWidth;
            var width = columnWidths.reduce(function (a, b) { return a + b; }, 0);
            var wrapper = ReactDOM.findDOMNode(this.refs['header']);
            var verticalScrollWidth = 17;
            var activeColumns = metadata.filter(function (e) { return e.active; });
            var style = {
                display: 'flex',
                overflow: 'hidden',
                fontSize: '14px',
                lineHeight: '40px',
                color: '#444',
                width: bodyWrapperWidth ? bodyWrapperWidth - verticalScrollWidth : undefined,
                position: 'relative'
            };
            return (React.createElement("div", {ref: 'header', style: style}, headerRenderer(actions, activeColumns, pages, page, contacts.orderBy, wrapper, width, columnWidths, verticalScrollWidth)));
        };
        BaseContactTable.prototype._getColumnWidths = function () {
            var widths = [];
            var columnContainer = ReactDOM.findDOMNode(this.refs['bodyColumns']);
            if (!columnContainer) {
                return widths;
            }
            var columns = columnContainer.children;
            for (var i = 0; i < columns.length; ++i) {
                var column = columns[i];
                widths.push(column.offsetWidth);
            }
            return widths;
        };
        BaseContactTable.prototype._recalculateColumns = function () {
            var newWitdths = this._getColumnWidths();
            var bodyWrapper = ReactDOM.findDOMNode(this.refs['bodyWrapper']);
            if (this.state.columnWidths.length != 0 && newWitdths.length == 0) {
                return;
            }
            if (newWitdths.join(",") != this.state.columnWidths.join(",")
                || (bodyWrapper != null && bodyWrapper.offsetWidth != this.state.bodyWrapperWidth)) {
                this.setState({
                    columnWidths: newWitdths,
                    bodyWrapperWidth: bodyWrapper.offsetWidth
                });
            }
        };
        return BaseContactTable;
    }(React.Component));
    function mapStateToProps(state) {
        return {
            contacts: state.outlook,
            metadata: state.outlook.metadata,
            page: state.outlook.page,
            pages: state.outlook.pages,
            focused: state.outlook.focused
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            actions: redux_8.bindActionCreators(contacts_2.actions, dispatch)
        };
    }
    function renderHeaderColumn(actions, column, orderBy, i, staticColumnCount, dynamicColumnCount, headerWrapper, columnWidths, verticalScrollWidth) {
        var width = headerWrapper ? headerWrapper.clientWidth / dynamicColumnCount : undefined;
        var isLastColumn = i + 1 == dynamicColumnCount;
        if (columnWidths.length > 0) {
            width = columnWidths[i + staticColumnCount];
        }
        return (React.createElement("div", {key: column.key, style: getHeaderColumnStyle(column.sortable, isLastColumn, width, verticalScrollWidth), onClick: column.sortable ? function () { return actions.changeOrder(column.key); } : function () { }}, React.createElement("span", {style: { fontWeight: column.key === orderBy.column ? 'bold' : 'normal', display: 'flex', justifyContent: 'space-between' }}, React.createElement("span", null, resources_13.default.getString(column.column)), (function () {
            if (column.key === orderBy.column) {
                if (orderBy.stage == 1) {
                    return React.createElement("span", {className: "icn uparrow"});
                }
                else if (orderBy.stage == 2) {
                    return React.createElement("span", {className: "icn downarrow"});
                }
            }
        })())));
    }
    exports.renderHeaderColumn = renderHeaderColumn;
    function getHeaderColumnStyle(isSortable, isLast, width, verticalScrollWidth) {
        return {
            height: '40px',
            boxSizing: 'border-box',
            width: width,
            textAlign: 'left',
            borderRight: isLast ? 'none' : '1px solid #ccc',
            cursor: isSortable ? 'pointer' : 'default',
            padding: isLast ? "0 " + verticalScrollWidth + "px 0 10px" : '0 10px'
        };
    }
    exports.getHeaderColumnStyle = getHeaderColumnStyle;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_13.connect(mapStateToProps, mapDispatchToProps)(BaseContactTable);
});
define("components/ContactTable", ["require", "exports", 'react', "components/ContactTableFilter", "components/BaseContactTable", "modules/data/contacts/model", "lib/resources"], function (require, exports, React, ContactTableFilter_1, BaseContactTable_1, model_9, resources_14) {
    "use strict";
    /**
     * Class representing the contacts table.
     * @extends React.Component
    */
    var ContactTable = (function (_super) {
        __extends(ContactTable, _super);
        function ContactTable() {
            _super.apply(this, arguments);
        }
        ContactTable.prototype.render = function () {
            return React.createElement(BaseContactTable_1.default, {filter: React.createElement(ContactTableFilter_1.default, null), bodyColumnRenderer: this._bodyColumnRenderer, headerRenderer: this._headerRenderer, rowRenderer: this._rowRenderer});
        };
        ContactTable.prototype._rowRenderer = function (actions, columns, focused, col, i, rowStyle, cellStyle) {
            return (React.createElement("tr", {key: i, onClick: function () { return actions.focusContact(i); }, style: rowStyle}, React.createElement("td", {key: 'IsChecked', style: cellStyle}, React.createElement("input", {checked: col.selected, onClick: function (e) { return actions.toggleSelect(e, i); }, type: "checkbox"})), React.createElement("td", {key: 'IsTracked', style: cellStyle}, React.createElement("div", {style: { whiteSpace: 'nowrap' }}, (function () {
                switch (col.crmLinkState) {
                    case model_9.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK: return React.createElement("span", {style: { color: '#e36625' }}, resources_14.default.getString('MailApp_Module_Pending_Track'));
                    case model_9.CrmExtendedProperty.CRM_LINK_STATE_LINKED: return React.createElement("span", {style: { color: '#1a994c' }}, React.createElement("span", {className: "icn tracked"}), resources_14.default.getString('MailApp_Module_Tracked'));
                    case model_9.CrmExtendedProperty.CRM_LINK_STATE_TO_UNLINK: return React.createElement("span", {style: { color: '#e36625' }}, resources_14.default.getString('MailApp_Module_Pending_Untrack'));
                    case model_9.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED:
                    default: return React.createElement("span", {style: { color: '#999' }}, React.createElement("span", {className: "icn notTracked"}), resources_14.default.getString('MailApp_Module_Not_Tracked'));
                }
            })())), columns.map(function (meta, j) {
                switch (meta.key) {
                    case 'CompanyName':
                        if (col[model_9.CrmExtendedProperty.CRM_LINK_STATE] === model_9.CrmExtendedProperty.CRM_LINK_STATE_LINKED && col[model_9.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID]) {
                            return (React.createElement("td", {key: meta.key, style: cellStyle}, React.createElement("a", {href: "#", onClick: function () {
                                window.open("/main.aspx?etn=account&pagetype=entityrecord&id=" + encodeURIComponent(col.crmParentAccountId));
                            }}, col[meta.key])));
                        }
                        else {
                            return (React.createElement("td", {key: meta.key, style: cellStyle}, col[meta.key]));
                        }
                    case 'BusinessPhone':
                        return (React.createElement("td", {key: meta.key, style: cellStyle}, React.createElement("a", {href: "tel:" + col[meta.key]}, col[meta.key])));
                    case 'EmailAddress1':
                        return (React.createElement("td", {key: meta.key, style: cellStyle}, React.createElement("a", {href: "mailto:" + col[meta.key]}, col[meta.key])));
                    default:
                        return React.createElement("td", {key: meta.key, style: cellStyle}, col[meta.key]);
                }
            })));
        };
        ContactTable.prototype._bodyColumnRenderer = function (columns, wrapperRef) {
            return (React.createElement("thead", null, React.createElement("tr", {ref: wrapperRef, style: { height: 0 }}, React.createElement("th", {style: { width: 20, minWidth: 20 }}), React.createElement("th", {style: { width: 80, minWidth: 80 }}), columns.map(function (meta, i) {
                return React.createElement("th", null);
            }))));
        };
        ContactTable.prototype._headerRenderer = function (actions, columns, pages, page, orderBy, wrapper, width, columnWidths, verticalScrollWidth) {
            var staticColumnCount = 2;
            return (React.createElement("div", {style: { minWidth: width, display: 'flex' }}, React.createElement("div", {key: 'IsChecked', style: BaseContactTable_1.getHeaderColumnStyle(false, false, columnWidths[0], verticalScrollWidth)}, React.createElement("input", {checked: pages && pages.length && pages[page].filter(function (x) { return x.selected === false; }).length === 0, onChange: function (e) { return actions.togglePageSelect(e, page); }, type: "checkbox"})), React.createElement("div", {key: 'IsTracked', style: BaseContactTable_1.getHeaderColumnStyle(false, false, columnWidths[1], verticalScrollWidth)}, React.createElement("span", {style: { fontWeight: 400 }}, resources_14.default.getString('MailApp_Module_Tracked'))), columns.map(function (column, i) {
                return BaseContactTable_1.renderHeaderColumn(actions, column, orderBy, i, staticColumnCount, columns.length, wrapper, columnWidths, verticalScrollWidth);
            })));
        };
        return ContactTable;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ContactTable;
});
define("components/CrmContactTable", ["require", "exports", 'react', "components/ContactTableFilter", "components/BaseContactTable"], function (require, exports, React, ContactTableFilter_2, BaseContactTable_2) {
    "use strict";
    /**
     * Class representing the contacts table.
     * @extends React.Component
    */
    var CrmContactTable = (function (_super) {
        __extends(CrmContactTable, _super);
        function CrmContactTable() {
            _super.apply(this, arguments);
        }
        CrmContactTable.prototype.render = function () {
            return React.createElement(BaseContactTable_2.default, {filter: React.createElement(ContactTableFilter_2.default, null), bodyColumnRenderer: this._bodyColumnRenderer, headerRenderer: this._headerRenderer, rowRenderer: this._rowRenderer});
        };
        CrmContactTable.prototype._rowRenderer = function (actions, columns, focused, col, i, rowStyle, cellStyle) {
            return (React.createElement("tr", {key: i, onClick: function () { return actions.focusContact(i); }, style: rowStyle}, React.createElement("td", {key: 'IsChecked', style: cellStyle}, React.createElement("input", {checked: col.selected, onClick: function (e) { return actions.toggleSelect(e, i); }, type: "checkbox"})), columns.map(function (meta, j) {
                switch (meta.key) {
                    case 'BusinessPhone':
                        return (React.createElement("td", {key: meta.key, style: cellStyle}, React.createElement("a", {href: "tel:" + col[meta.key]}, col[meta.key])));
                    case 'EmailAddress1':
                        return (React.createElement("td", {key: meta.key, style: cellStyle}, React.createElement("a", {href: "mailto:" + col[meta.key]}, col[meta.key])));
                    default:
                        return React.createElement("td", {key: meta.key, style: cellStyle}, col[meta.key]);
                }
            })));
        };
        CrmContactTable.prototype._bodyColumnRenderer = function (columns, wrapperRef) {
            return (React.createElement("thead", null, React.createElement("tr", {ref: wrapperRef, style: { height: 0 }}, React.createElement("th", {style: { width: 20, minWidth: 20 }}), columns.map(function (meta, i) {
                return React.createElement("th", null);
            }))));
        };
        CrmContactTable.prototype._headerRenderer = function (actions, columns, pages, page, orderBy, wrapper, width, columnWidths, verticalScrollWidth) {
            var staticColumnCount = 1;
            return (React.createElement("div", {style: { minWidth: width, display: 'flex' }}, React.createElement("div", {key: 'IsChecked', style: BaseContactTable_2.getHeaderColumnStyle(false, false, columnWidths[0], verticalScrollWidth)}, React.createElement("input", {checked: pages && pages.length && pages[page].filter(function (x) { return x.selected === false; }).length === 0, onChange: function (e) { return actions.togglePageSelect(e, page); }, type: "checkbox"})), columns.map(function (column, i) {
                return BaseContactTable_2.renderHeaderColumn(actions, column, orderBy, i, staticColumnCount, columns.length, wrapper, columnWidths, verticalScrollWidth);
            })));
        };
        return CrmContactTable;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CrmContactTable;
});
define("components/FocusContext", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions", "modules/data/contacts/model"], function (require, exports, React, react_redux_14, redux_9, resources_15, actions_15, model_10) {
    "use strict";
    /**
     * Class representing the flyout focus context.
     * @extends React.Component
    */
    var FocusContext = (function (_super) {
        __extends(FocusContext, _super);
        function FocusContext() {
            _super.apply(this, arguments);
        }
        FocusContext.prototype.render = function () {
            var _this = this;
            var contact = this.props.focused;
            return (React.createElement("div", {style: { display: 'flex', flex: 1, maxWidth: '30%' }}, React.createElement("div", {style: { display: 'flex', flexDirection: 'column', flex: 1, padding: '8px 8px 0 8px' }}, React.createElement("div", {className: "flex-space-between", style: { alignItems: 'center', height: 24 }}, React.createElement("b", null, resources_15.default.getString('MoCA_OWA_Details_Header')), React.createElement("a", {className: "icn x", onClick: function (e) { return _this.props.closeContext(); }})), React.createElement("div", {style: { border: '1px solid #ccc', marginTop: '12px', flex: 1, overflowY: 'auto' }}, React.createElement("div", {style: { padding: '16px' }}, (function () {
                if (_this.props.contactView === model_10.ContactViewMode.Exchange) {
                    switch (contact.crmLinkState) {
                        case model_10.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK: return (React.createElement("div", {className: "flex-space-between"}, React.createElement("span", {style: { color: '#e36625' }}, resources_15.default.getString('MailApp_Module_Pending_Track')), React.createElement("span", null)));
                        case model_10.CrmExtendedProperty.CRM_LINK_STATE_LINKED: return (React.createElement("div", {className: "flex-space-between"}, React.createElement("span", {style: { color: '#1a994c' }}, React.createElement("span", {className: "icn tracked"}), " ", resources_15.default.getString('MailApp_Module_Tracked')), React.createElement("a", {className: "icn notTracked tooltip", onClick: function () { return _this.props.showFocusedUntrackAlert(); }}, React.createElement("span", {className: "tooltiptext"}, resources_15.default.getString('MailApp_Module_Untrack')))));
                        case model_10.CrmExtendedProperty.CRM_LINK_STATE_TO_UNLINK: return (React.createElement("div", {className: "flex-space-between"}, React.createElement("span", {style: { color: '#e36625' }}, resources_15.default.getString('MailApp_Module_Pending_Untrack')), React.createElement("span", null)));
                        case model_10.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED:
                        default: return (React.createElement("div", {className: "flex-space-between"}, React.createElement("span", {style: { color: '#999' }}, React.createElement("span", {className: "icn notTracked"}), " ", resources_15.default.getString('MailApp_Module_Not_Tracked')), React.createElement("a", {className: "icn tracked tooltip", onClick: function () { return _this.props.trackFocusedContact(); }}, React.createElement("span", {className: "tooltiptext"}, resources_15.default.getString('MailApp_Module_Track')))));
                    }
                }
            })(), React.createElement("div", {style: { display: 'flex', alignItems: 'center', paddingTop: '16px' }}, React.createElement("div", {style: { fontSize: '30px', minWidth: '100px', minHeight: '100px', maxWidth: '100px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: '100px', overflow: 'hidden' }}, contact.imageUrl ? React.createElement("img", {style: { width: '100px', height: '100px', borderRadius: '50%' }, src: contact.imageUrl}) : contact.Initials), React.createElement("div", {style: { display: 'flex', flexDirection: 'column', paddingLeft: '8px', overflow: 'hidden' }}, (function () {
                if (contact[model_10.CrmExtendedProperty.CRM_LINK_STATE] == model_10.CrmExtendedProperty.CRM_LINK_STATE_LINKED && contact[model_10.CrmExtendedProperty.CRM_ID]) {
                    var url_1 = "/main.aspx?etn=contact&pagetype=entityrecord&id=" + encodeURIComponent(contact[model_10.CrmExtendedProperty.CRM_ID]);
                    return React.createElement("a", {href: "#", onClick: function () { return window.open(url_1); }, style: { fontSize: '24px', display: 'inline-flex' }}, contact.DisplayName);
                }
                else {
                    return React.createElement("span", {style: { fontSize: '24px', display: 'inline-flex', overflow: 'hidden' }}, contact.DisplayName);
                }
            })(), React.createElement("span", null, contact.CompanyName))), React.createElement("hr", null), React.createElement("div", {style: { display: (contact.EmailAddress1 || contact.BusinessPhone) ? 'flex' : 'none', flexDirection: 'column' }}, React.createElement("div", {style: { display: contact.EmailAddress1 ? 'flex' : 'none', alignItems: 'center', paddingBottom: '8px' }}, React.createElement("span", {className: "icn email"}), React.createElement("a", {style: { paddingLeft: '8px' }, href: 'mailto:' + contact.EmailAddress1}, contact.EmailAddress1)), React.createElement("div", {style: { display: contact.BusinessPhone ? 'flex' : 'none', alignItems: 'center', paddingBottom: '8px' }}, React.createElement("span", {className: "icn phone"}), React.createElement("a", {style: { paddingLeft: '8px' }, href: 'tel:' + contact.BusinessPhone}, contact.BusinessPhone)), React.createElement("hr", null)), (function () {
                if (contact.crmParentAccountId) {
                    return (React.createElement("div", {className: "flex-space-between"}, React.createElement("div", null, resources_15.default.getString('MailApp_Module_Link_Title')), React.createElement("a", {style: { display: _this.props.contactView === model_10.ContactViewMode.CRM ? 'none' : 'inline' }, className: "icn unlink tooltip", onClick: function (e) { return _this.props.unlinkFocusedContact(e); }}, React.createElement("span", {className: "tooltiptext"}, resources_15.default.getString('MailApp_Module_Unlink')))));
                }
                else {
                    return (React.createElement("div", {className: "flex-space-between"}, React.createElement("div", null, resources_15.default.getString('MailApp_Module_Link_Title')), React.createElement("a", {style: { display: _this.props.contactView === model_10.ContactViewMode.CRM ? 'none' : 'inline' }, className: "icn link tooltip", onClick: function (e) { return _this.props.linkFocusedContact(e); }}, React.createElement("span", {className: "tooltiptext"}, resources_15.default.getString('MailApp_Module_Link')))));
                }
            })(), React.createElement("div", null, (function () {
                var link = "/main.aspx?etn=account&pagetype=entityrecord&id=" + encodeURIComponent(contact[model_10.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID]);
                if (contact[model_10.CrmExtendedProperty.CRM_LINK_STATE] === model_10.CrmExtendedProperty.CRM_LINK_STATE_LINKED && contact[model_10.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID]) {
                    return (React.createElement("a", {href: "#", onClick: function () { return window.open(link); }}, contact.CompanyName));
                }
                else {
                    return (React.createElement("span", null, resources_15.default.getString('MailApp_Module_Link_Table_Title')));
                }
            })()), React.createElement("div", {style: { display: contact[model_10.CrmExtendedProperty.CRM_LINK_STATE] === model_10.CrmExtendedProperty.CRM_LINK_STATE_LINKED ? 'block' : 'none' }}, React.createElement("hr", null), (function () {
                if (contact.nextActivity) {
                    var icon = '';
                    switch (contact.nextActivity.ActivityTypeCode) {
                        case 'phonecall':
                            icon = 'icn phoneactivity';
                            break;
                        case 'task':
                            icon = 'icn taskactivity';
                            break;
                        case 'email':
                            icon = 'icn emailactivity';
                            break;
                        case 'appointment':
                        default:
                            icon = 'icn calendar';
                            break;
                    }
                    var url_2 = "/main.aspx?etn=" + contact.nextActivity.ActivityTypeCode + "&pagetype=entityrecord&id=" + encodeURIComponent(contact[model_10.CrmExtendedProperty.CRM_ID]);
                    return (React.createElement("div", null, React.createElement("div", {style: { display: 'flex', alignItems: 'center', paddingBottom: '8px' }}, React.createElement("span", {className: icon}), React.createElement("span", {style: { color: '#999', paddingLeft: '8px' }}, resources_15.default.getString('MoCA_OWA_Next_Activity_Label'))), React.createElement("div", null, React.createElement("a", {href: "#", onClick: function () { return window.open(url_2); }}, contact.nextActivity.Subject))));
                }
                else {
                    return (React.createElement("div", null, React.createElement("div", {style: { display: 'flex', alignItems: 'center', paddingBottom: '8px' }}, React.createElement("span", {className: "icn calendar"}), React.createElement("span", {style: { color: '#999', paddingLeft: '8px' }}, resources_15.default.getString('MoCA_OWA_Next_Activity_Label'))), React.createElement("div", null, React.createElement("span", null, resources_15.default.getString('MoCA_OWA_No_Upcoming_Activities')))));
                }
            })(), (function () {
                if (contact.prevActivity) {
                    var icon = '';
                    switch (contact.prevActivity.ActivityTypeCode) {
                        case 'phonecall':
                            icon = 'icn phoneactivity';
                            break;
                        case 'task':
                            icon = 'icn taskactivity';
                            break;
                        case 'email':
                            icon = 'icn emailactivity';
                            break;
                        case 'appointment':
                        default:
                            icon = 'icn calendar';
                            break;
                    }
                    var url_3 = "/main.aspx?etn=" + contact.prevActivity.ActivityTypeCode + "&pagetype=entityrecord&id=" + encodeURIComponent(contact[model_10.CrmExtendedProperty.CRM_ID]);
                    return (React.createElement("div", null, React.createElement("div", {style: { display: 'flex', alignItems: 'center', paddingBottom: '8px', paddingTop: '8px' }}, React.createElement("span", {className: icon}), React.createElement("span", {style: { color: '#999', paddingLeft: '8px' }}, resources_15.default.getString('MoCA_OWA_Last_Activity_Label'))), React.createElement("div", null, React.createElement("a", {href: "#", onClick: function () { return window.open(url_3); }}, contact.prevActivity.Subject))));
                }
                else {
                    return (React.createElement("div", null, React.createElement("div", {style: { display: 'flex', alignItems: 'center', paddingBottom: '8px', paddingTop: '8px' }}, React.createElement("span", {className: "icn calendar"}), React.createElement("span", {style: { color: '#999', paddingLeft: '8px' }}, resources_15.default.getString('MoCA_OWA_Last_Activity_Label'))), React.createElement("div", null, React.createElement("span", null, resources_15.default.getString('MoCA_OWA_No_Past_Activities')))));
                }
            })()))))));
        };
        return FocusContext;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            focused: state.outlook.pages[state.outlook.focused.page][state.outlook.focused.index],
            contactView: state.outlook.contactView
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            trackFocusedContact: function () { return dispatch(actions_15.default.attemptTrack(actions_15.ContactTarget.FOCUSED, true)); },
            showFocusedUntrackAlert: redux_9.bindActionCreators(actions_15.default.showFocusedUntrackAlert, dispatch),
            linkFocusedContact: redux_9.bindActionCreators(actions_15.default.linkFocusedContact, dispatch),
            unlinkFocusedContact: redux_9.bindActionCreators(actions_15.default.unlinkFocusedContact, dispatch),
            closeContext: redux_9.bindActionCreators(actions_15.default.closeContext, dispatch),
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_14.connect(mapStateToProps, mapDispatchToProps)(FocusContext);
});
define("components/LinkContext", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_15, redux_10, resources_16, actions_16) {
    "use strict";
    /**
     * Class representing the flyout link context.
     * @extends React.Component
    */
    var LinkContext = (function (_super) {
        __extends(LinkContext, _super);
        function LinkContext() {
            _super.apply(this, arguments);
        }
        LinkContext.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {style: { display: 'flex', flexDirection: 'column', flex: 1, maxWidth: '30%', padding: '8px 8px 0 8px' }}, React.createElement("div", {style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 24 }}, React.createElement("b", null, resources_16.default.getString('MailApp_Module_Link_Title')), React.createElement("span", {style: { color: '#666', fontSize: '14px', display: 'flex', alignItems: 'center', marginLeft: 20 }}, this.props.linkContextTarget === actions_16.ContactTarget.SELECTED ? React.createElement("span", null, resources_16.default.getString('MailApp_Module_Selected_Contacts_Label'), " ", this._getSelectedContactsCount()) : null, this.props.linkContextTarget === actions_16.ContactTarget.SELECTED ? React.createElement("span", {style: { padding: '0 7px' }}, ' | ', " ") : null, React.createElement("a", {className: "icn x", onClick: function (e) { return _this.props.hideLinkContext(); }}))), (function () {
                if (_this.props.showRefreshPane) {
                    return _this.renderRefreshPane();
                }
                else {
                    return _this.renderAccountView();
                }
            })()));
        };
        LinkContext.prototype.renderRefreshPane = function () {
            var _this = this;
            return (React.createElement("div", {style: { border: '1px solid #ccc', marginTop: '12px', padding: '16px', backgroundColor: '#cbe2f3' }}, React.createElement("b", null, resources_16.default.getString('MailApp_Module_Link_Refresh_Title')), React.createElement("p", null, resources_16.default.getString('MailApp_Module_Link_Refresh_Message')), React.createElement("button", {onClick: function () { return _this.props.refreshAccounts(); }}, resources_16.default.getString('MailApp_Module_Link_Refresh_Button_Refresh'))));
        };
        LinkContext.prototype.renderAccountView = function () {
            var _this = this;
            return (React.createElement("div", {style: { display: 'flex', flexDirection: 'column', flex: '1', border: '1px solid #ccc', marginTop: '12px' }}, React.createElement("div", {style: { flex: '1', overflowY: 'auto', padding: '16px', paddingBottom: '10px' }}, React.createElement("b", null, resources_16.default.getString('MailApp_Module_Link_Table_Title')), React.createElement("div", null, (function () {
                if (_this.props.linkAccounts.loaded) {
                    React.createElement("div", {style: { display: "flex", justifyContent: "space-between", backgroundColor: "#eee", padding: 5, height: 30 }}, React.createElement("div", null, "Name"));
                    return (React.createElement("table", {style: { marginBottom: 20 }}, React.createElement("tbody", null, _this.props.linkAccounts.pages[_this.props.linkAccounts.page].map(function (account, i) {
                        return React.createElement("tr", {key: i, style: { backgroundColor: account.accountid == _this.props.selectedAccountId ? '#cbe2f3' : '#fff' }, onClick: function (e) { return _this.props.selectAccount(e, account); }}, React.createElement("td", null, account.name));
                    }))));
                }
                else {
                    return (React.createElement("div", {style: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}, React.createElement("div", {className: "progressLoader"})));
                }
            })())), React.createElement("div", {style: { display: 'flex', justifyContent: 'space-between', backgroundColor: "#eee", padding: 5, height: 30 }}, React.createElement("div", null, React.createElement("a", {onClick: function () { return _this.props.changeAccountPage(_this.props.linkAccounts.page - 1); }}, resources_16.default.getString("MailApp_Module_Previous"))), React.createElement("div", null, this.props.linkAccounts.page + 1), React.createElement("div", null, React.createElement("a", {onClick: function () { return _this.props.changeAccountPage(_this.props.linkAccounts.page + 1); }}, resources_16.default.getString("MailApp_Module_Next")))), React.createElement("div", {style: { display: "flex", justifyContent: "space-between", backgroundColor: "#eee", padding: 5, height: 30 }}, React.createElement("div", {style: { marginRight: 10 }}, React.createElement("button", {className: 'btn', onClick: function () { return _this.props.openNewAccount(); }}, resources_16.default.getString('MailApp_Module_Link_Button_New'))), React.createElement("div", {style: { justifyContent: 'flex-end' }}, React.createElement("button", {className: 'btn', onClick: function (e) { return _this.props.linkSelectedAccounts(); }}, resources_16.default.getString('MailApp_Module_Link_Button_Link')), React.createElement("button", {className: 'btn', style: { marginLeft: 5 }, onClick: function (e) { return _this.props.hideLinkContext(); }}, resources_16.default.getString('MailApp_Module_Link_Button_Cancel'))))));
        };
        LinkContext.prototype._getSelectedContactsCount = function () {
            return this.props.pages[this.props.page].filter(function (item) { return item.selected; }).length;
        };
        return LinkContext;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            linkAccounts: state.outlook.linkAccounts,
            pages: state.outlook.pages,
            page: state.outlook.page,
            selectedAccountId: state.outlook.selectedAccountId,
            showRefreshPane: state.outlook.showRefreshPane,
            linkContextTarget: state.outlook.linkContextTarget,
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            hideLinkContext: redux_10.bindActionCreators(actions_16.default.hideLinkContext, dispatch),
            selectAccount: redux_10.bindActionCreators(actions_16.default.selectAccount, dispatch),
            linkSelectedAccounts: redux_10.bindActionCreators(actions_16.default.linkSelectedAccounts, dispatch),
            openNewAccount: redux_10.bindActionCreators(actions_16.default.openNewAccount, dispatch),
            refreshAccounts: redux_10.bindActionCreators(actions_16.default.refreshAccounts, dispatch),
            changeAccountPage: redux_10.bindActionCreators(actions_16.default.changeAccountPage, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_15.connect(mapStateToProps, mapDispatchToProps)(LinkContext);
});
define("components/ContactTableContainer", ["require", "exports", 'react', "components/ContactTableTopControl", "components/ContactTableBottomControl", "components/ContactTable", "components/CrmContactTable", "components/FocusContext", "components/LinkContext", 'react-redux', 'redux', "modules/data/contacts/actions", "modules/data/contacts/model"], function (require, exports, React, ContactTableTopControl_1, ContactTableBottomControl_1, ContactTable_1, CrmContactTable_1, FocusContext_1, LinkContext_1, react_redux_16, redux_11, actions_17, model_11) {
    "use strict";
    /**
     * Class representing the contacts table container.
     * @extends React.Component
    */
    var ContactTableContainer = (function (_super) {
        __extends(ContactTableContainer, _super);
        function ContactTableContainer() {
            _super.apply(this, arguments);
        }
        ContactTableContainer.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {style: { display: 'flex', minWidth: '80%', flexGrow: 1, overflow: 'hidden' }}, React.createElement("div", {style: { flex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}, React.createElement(ContactTableTopControl_1.default, null), (function () {
                switch (_this.props.contactView) {
                    case model_11.ContactViewMode.Exchange:
                        return React.createElement(ContactTable_1.default, null);
                    case model_11.ContactViewMode.CRM:
                        return React.createElement(CrmContactTable_1.default, null);
                }
            })(), React.createElement(ContactTableBottomControl_1.default, null)), this.props.focusActive && this.props.showLinkContext === false ? React.createElement(FocusContext_1.default, null) : null, this.props.showLinkContext ? React.createElement(LinkContext_1.default, null) : null));
        };
        return ContactTableContainer;
    }(React.Component));
    function mapStateToProps(state) {
        return {
            showLinkContext: state.outlook.showLinkContext,
            focusActive: state.outlook.focused.active,
            contactView: state.outlook.contactView
        };
    }
    function mapDispatchToProps(dispatch) {
        return {
            trackSelectedContacts: redux_11.bindActionCreators(actions_17.default.trackContacts, dispatch)
        };
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_16.connect(mapStateToProps, mapDispatchToProps)(ContactTableContainer);
});
define("components/TransactionModal", ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"], function (require, exports, React, react_redux_17, redux_12, resources_17, actions_18) {
    "use strict";
    /**
     * Class representing the transactionModal.
     * @extends React.Component
    */
    var TransactionModal = (function (_super) {
        __extends(TransactionModal, _super);
        function TransactionModal() {
            _super.apply(this, arguments);
        }
        TransactionModal.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", {className: "alertContainer", style: { backgroundColor: 'rgba(50, 50, 50, 0.7)' }}, React.createElement("div", {style: { width: '500px', height: '300px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}, React.createElement("div", {className: "progressLoader"}), React.createElement("div", {style: { color: 'white', fontSize: '18px' }}, resources_17.default.getString('MailApp_Module_Notification_Update_In_Progress')), React.createElement("div", {style: { color: 'white', fontSize: '14px' }}, this.props.transaction.progressCurrent, " out of ", this.props.transaction.progressMax), React.createElement("div", null, React.createElement("button", {style: { width: '300px', maxWidth: '100%', marginTop: '20px' }, onClick: function () { return _this.props.endTransaction(); }}, "Contact Dynamics 365 Administrator")))));
        };
        return TransactionModal;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            transaction: state.outlook.transaction
        };
    };
    var mapDispatchToProps = function (dispatch) {
        return {
            endTransaction: redux_12.bindActionCreators(actions_18.default.endTransaction, dispatch)
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_17.connect(mapStateToProps, mapDispatchToProps)(TransactionModal);
});
define("components/App", ["require", "exports", 'react', 'react-redux', "modules/client/app/actions", "components/Alert", "components/Confirm", "components/UntrackAlert", "components/RetrackAlert", "components/TabControl", "components/ContactTableContainer", "components/TransactionModal"], function (require, exports, React, react_redux_18, actions_19, Alert_1, Confirm_1, UntrackAlert_1, RetrackAlert_1, TabControl_1, ContactTableContainer_1, TransactionModal_1) {
    "use strict";
    /**
     * Class representing the entire application.
     * @extends React.Component
    */
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        /** Initialize app on 'willMount'. */
        App.prototype.componentWillMount = function () {
            this.props.initializeApp();
        };
        /** React.Component render function. */
        App.prototype.render = function () {
            if (this.props.loaded) {
                return (React.createElement("div", {style: { padding: '12px', boxSizing: 'border-box', height: '100%' }}, this.props.active ? React.createElement(Alert_1.default, null) : null, this.props.showConfirm ? React.createElement(Confirm_1.default, null) : null, this.props.showUntrackAlert ? React.createElement(UntrackAlert_1.default, null) : null, this.props.showRetrackAlert ? React.createElement(RetrackAlert_1.default, null) : null, this.props.showLoading ? React.createElement(TransactionModal_1.default, null) : null, React.createElement("div", {style: { display: 'flex', flexDirection: 'column', height: '100%' }}, React.createElement(TabControl_1.default, null), React.createElement(ContactTableContainer_1.default, null))));
            }
            else {
                return (React.createElement("div", {style: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '95vh' }}, React.createElement("div", {className: "progressLoader"})));
            }
        };
        return App;
    }(React.Component));
    var mapStateToProps = function (state) {
        return {
            loaded: state.app.loaded,
            active: state.outlook.alert.active,
            showConfirm: state.outlook.confirm.active,
            showUntrackAlert: state.outlook.untrackAlert.active,
            showRetrackAlert: state.outlook.retrackAlert.active,
            showLoading: state.outlook.transaction.showLoading
        };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = react_redux_18.connect(mapStateToProps, { initializeApp: actions_19.initializeApp })(App);
});
define("index", ["require", "exports", 'react', 'react-dom', 'react-redux', 'redux', "reducers/rootReducer", "components/App"], function (require, exports, React, react_dom_1, react_redux_19, redux_13, rootReducer_1, App_1) {
    "use strict";
    function functionMiddleware(ref) {
        var dispatch = ref.dispatch;
        var getState = ref.getState;
        return function (next) {
            return function (action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState);
                }
                else {
                    return next(action);
                }
            };
        };
    }
    ;
    // Combine all reducers
    var reducer = redux_13.combineReducers(rootReducer_1.default);
    // Create store
    var store = redux_13.createStore(reducer, redux_13.applyMiddleware(functionMiddleware));
    // Render entry point
    react_dom_1.render(React.createElement(react_redux_19.Provider, {store: store}, React.createElement(App_1.default, null)), document.getElementById('app'));
});
