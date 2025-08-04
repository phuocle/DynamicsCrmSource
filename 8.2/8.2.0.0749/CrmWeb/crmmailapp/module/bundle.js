var __extends = (this && this.__extends) ||
    function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];

        function __() { this.constructor = d; }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
define("modules/data/contacts/actionTypes",
    ["require", "exports"],
    function(require, exports) {
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
            REFRESH: 'REFRESH',
            CHANGE_VIEW: 'CHANGE_VIEW'
        };
    });
define("modules/data/contacts/model",
    ["require", "exports"],
    function(require, exports) {
        "use strict";
        exports.OutlookMetadata = [
            {
                column: 'Name',
                key: 'DisplayName',
                active: true,
                sortable: true,
                filterable: true
            },
            {
                column: 'Title',
                key: 'JobTitle',
                active: true,
                sortable: true,
                filterable: false
            },
            {
                column: 'Company',
                key: 'CompanyName',
                active: true,
                sortable: true,
                filterable: true
            },
            {
                column: 'Business Phone',
                key: 'BusinessPhone',
                active: true,
                sortable: false,
                filterable: false
            },
            {
                column: 'Email',
                key: 'EmailAddress1',
                active: true,
                sortable: false,
                filterable: false
            },
            {
                column: 'Department',
                key: 'Department',
                active: false,
                sortable: true,
                filterable: true
            },
            {
                column: 'Given Name',
                key: 'GivenName',
                active: false,
                sortable: true,
                filterable: true
            },
            {
                column: 'Office Location',
                key: 'OfficeLocation',
                active: false,
                sortable: true,
                filterable: true
            }
        ];
        (function(ContactViewMode) {
            ContactViewMode[ContactViewMode["Exchange"] = 0] = "Exchange";
            ContactViewMode[ContactViewMode["CRM"] = 1] = "CRM";
        })(exports.ContactViewMode || (exports.ContactViewMode = {}));
        var ContactViewMode = exports.ContactViewMode;;
        (function(SelectedViewMode) {
            SelectedViewMode[SelectedViewMode["All"] = 0] = "All";
            SelectedViewMode[SelectedViewMode["Tracked"] = 1] = "Tracked";
            SelectedViewMode[SelectedViewMode["Untracked"] = 2] = "Untracked";
        })(exports.SelectedViewMode || (exports.SelectedViewMode = {}));
        var SelectedViewMode = exports.SelectedViewMode;;
        exports.CrmExtendedProperty = {
            CRM_ID: 'crmid',
            CRM_PARENT_ACCOUNT_ID: 'crmParentAccountId',
            CRM_LINK_STATE: 'crmLinkState',
            CRM_LINK_STATE_NOT_LINKED: '0',
            CRM_LINK_STATE_TO_LINK: '1',
            CRM_LINK_STATE_LINKED: '2',
            CRM_LINK_STATE_TO_UNLINK: '3',
            CRM_LINK_STATE_TO_UNLINK_AND_DELETE: '4',
            CRM_LINK_STATE_TRACKER: 'crmLinkStateTracker',
            CRM_LINK_STATE_TRACKER_NOT_TRACKED: '0',
            CRM_LINK_STATE_TRACKER_TRACKED: '1',
            CRM_NAMESPACE: '00020329-0000-0000-c000-000000000046'
        };
        exports.SyncDirection = {
            None: 0,
            FromCrm: 1,
            ToCrm: 2,
            Both: 3
        };
    });
// Prototype of basic CRM SDK
define("lib/crmInterface",
    ["require", "exports", 'bluebird', "modules/data/contacts/model"],
    function(require, exports, Promise, model_1) {
        "use strict";
        var crmNamespace = '{00020329-0000-0000-c000-000000000046}';

        function crmCreate(entitySetName, entity, key) {
            return new Promise(function(resolve, reject) {
                var req = new XMLHttpRequest();
                req.open("POST", encodeURI(getWebAPIPath() + entitySetName), true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader('Authorization', key);
                req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                req.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        req.onreadystatechange = null;
                        if (this.status == 204) {
                            resolve(req.getResponseHeader("OData-EntityId"));
                        } else {
                            reject(req.response);
                        }
                    }
                };
                req.send(JSON.stringify(entity));
            });
        }

        exports.crmCreate = crmCreate;

        function crmDetectDuplicates(entitySetName, entity, key) {
            return new Promise(function(resolve, reject) {
                var req = new XMLHttpRequest();
                var businessEntity = Object.assign({},
                    (_a = {},
                        _a['@odata.context'] = getWebAPIPath() + '$metadata#contacts/$entity',
                        _a['@odata.type'] = 'Microsoft.Dynamics.CRM.contact',
                        _a
                    ),
                    entity);
                var url = getWebAPIPath() +
                    'RetrieveDuplicates(BusinessEntity=@p1,MatchingEntityName=@p2,PagingInfo=@p3)?' +
                    '@p1=' +
                    encodeURIComponent(JSON.stringify(businessEntity)) +
                    '&@p2=\'contact\'' +
                    '&@p3=' +
                    encodeURIComponent(JSON.stringify({ PageNumber: 1, Count: 10 }));
                req.open("GET", url, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader('Authorization', key);
                req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
                req.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        req.onreadystatechange = null;
                        if (this.status == 200) {
                            try {
                                var res = JSON.parse(req.response);
                                if (res && res.value) {
                                    resolve(res.value);
                                } else {
                                    resolve([]);
                                }
                            } catch (e) {
                                resolve([]);
                            }
                        } else {
                            reject(req.response);
                        }
                    }
                };
                req.send();
                var _a;
            });
        }

        exports.crmDetectDuplicates = crmDetectDuplicates;

        function crmGet(entitySetName, token, parameters) {
            if (parameters === void 0) {
                parameters = undefined;
            }
            return new Promise(function(resolve, reject) {
                var p = parameters
                    ? '?' + Object.keys(parameters).map(function(k) { return (k + "=" + parameters[k]); }).join('&')
                    : '';
                var url = encodeURI(getWebAPIPath() + entitySetName + '/' + p);
                var req = new XMLHttpRequest();
                req.open("GET", url, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        req.onreadystatechange = null;
                        if (this.status == 200) {
                            resolve(req.response);
                        } else {
                            reject(req.response);
                        }
                    }
                };
                req.send();
            });
        }

        exports.crmGet = crmGet;

        function crmDelete(entitySetName, token, id) {
            return new Promise(function(resolve, reject) {
                var url = encodeURI(getWebAPIPath() + entitySetName + ("(" + id + ")"));
                var req = new XMLHttpRequest();
                req.open("DELETE", url, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        req.onreadystatechange = null;
                        if (this.status == 204) {
                            resolve(req.response);
                        } else {
                            reject(req.response);
                        }
                    }
                };
                req.send();
            });
        }

        exports.crmDelete = crmDelete;

        function crmAssociate(parentEntityType, parentEntityId, childEntityType, childEntityId, relationship, token) {
            return new Promise(function(resolve, reject) {
                var url = encodeURI(getWebAPIPath() +
                    parentEntityType +
                    ("(" + parentEntityId + ")/" + relationship + "/$ref"));
                var req = new XMLHttpRequest();
                req.open("POST", url, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader("OData-MaxVersion", "4.0");
                req.setRequestHeader("OData-Version", "4.0");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        req.onreadystatechange = null;
                        if (this.status == 204) {
                            resolve(req.response);
                        } else {
                            reject(req.response);
                        }
                    }
                };
                var data = (_a = {},
                    _a['@odata.id'] = encodeURI(getWebAPIPath() + childEntityType + ("(" + childEntityId + ")")),
                    _a
                );
                req.send(JSON.stringify(data));
                var _a;
            });
        }

        exports.crmAssociate = crmAssociate;

        function
            crmDisassociate(parentEntityType, parentEntityId, childEntityType, childEntityId, relationship, token) {
                return new Promise(function(resolve, reject) {
                    var url = encodeURI(getWebAPIPath() +
                        parentEntityType +
                        ("(" + parentEntityId + ")/" + relationship + "/$ref"));
                    var req = new XMLHttpRequest();
                    req.open("POST", url, true);
                    req.setRequestHeader("Accept", "application/json");
                    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    req.setRequestHeader("OData-MaxVersion", "4.0");
                    req.setRequestHeader("OData-Version", "4.0");
                    req.setRequestHeader('Authorization', token);
                    req.onreadystatechange = function() {
                        if (this.readyState == 4) {
                            req.onreadystatechange = null;
                            if (this.status == 204) {
                                resolve(req.response);
                            } else {
                                reject(req.response);
                            }
                        }
                    };
                    var data = (_a = {},
                        _a['@odata.id'] = encodeURI(getWebAPIPath() + childEntityType + ("(" + childEntityId + ")")),
                        _a
                    );
                    req.send(JSON.stringify(data));
                    var _a;
                });
            }

        exports.crmDisassociate = crmDisassociate;

        function crmGetNextActivity(crmId, token) {
            return crmOrganizationData('ActivityPointerSet',
                token,
                {
                    $select: '',
                    $top: '1',
                    $orderby: 'ScheduledStart asc',
                    $filter: "RegardingObjectId/Id eq guid'" +
                        crmId +
                        "' and ScheduledStart gt datetime'" +
                        new Date().toISOString() +
                        "'",
                });
        }

        exports.crmGetNextActivity = crmGetNextActivity;

        function crmGetPrevActivity(crmId, token) {
            return crmOrganizationData('ActivityPointerSet',
                token,
                {
                    $select: '',
                    $top: '1',
                    $orderby: 'ScheduledStart desc',
                    $filter: "RegardingObjectId/Id eq guid'" +
                        crmId +
                        "' and ScheduledStart lt datetime'" +
                        new Date().toISOString() +
                        "'",
                });
        }

        exports.crmGetPrevActivity = crmGetPrevActivity;

        function crmOrganizationData(entitySetName, token, parameters) {
            if (parameters === void 0) {
                parameters = undefined;
            }
            return new Promise(function(resolve, reject) {
                var p = parameters
                    ? '?' +
                    Object.keys(parameters).map(function(k) { return (k + "=" + encodeURIComponent(parameters[k])); })
                    .join('&')
                    : '';
                var query = encodeURI("/XRMServices/2011/OrganizationData.svc/ActivityPointerSet/") + p;
                var req = new XMLHttpRequest();
                req.open("GET", query, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var returned = JSON.parse(req.responseText);
                            resolve(returned.d);
                        } else {
                            reject(req.responseText);
                        }
                    }
                };
                req.send();
            });
        }

        exports.crmOrganizationData = crmOrganizationData;

        function whoAmI(token) {
            return new Promise(function(resolve, reject) {
                var query = encodeURI(getWebAPIPath() + "WhoAmI()");
                var req = new XMLHttpRequest();
                req.open("GET", query, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var returned = JSON.parse(req.responseText);
                            resolve(returned);
                        } else {
                            reject(req.responseText);
                        }
                    }
                };
                req.send();
            });
        }

        exports.whoAmI = whoAmI;

        function retrievePricipalSyncAttributeMappingsRequest(userId, token) {
            return new Promise(function(resolve, reject) {
                var query = encodeURI(getWebAPIPath() +
                    "systemusers(" +
                    userId +
                    ")/Microsoft.Dynamics.CRM.RetrievePrincipalSyncAttributeMappings()");
                var req = new XMLHttpRequest();
                req.open("GET", query, true);
                req.setRequestHeader("Accept", "application/json");
                req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                req.setRequestHeader('Authorization', token);
                req.onreadystatechange = function() {
                    if (this.readyState === 4) {
                        req.onreadystatechange = null;
                        if (this.status === 200) {
                            var returned = JSON.parse(req.responseText);
                            resolve(returned);
                        } else {
                            reject(req.responseText);
                        }
                    }
                };
                req.send();
            });
        }

        exports.retrievePricipalSyncAttributeMappingsRequest = retrievePricipalSyncAttributeMappingsRequest;

        function transformExchangeToCrm(exchangeEntity, mapping) {
            var entity = {};
            Object.keys(mapping).forEach(function(key) {
                if (exchangeEntity.hasOwnProperty(key)) {
                    if (mapping[key]['AttributeCrmName']) {
                        var syncDirection = mapping[key]['SyncDirection'];
                        if (syncDirection == model_1.SyncDirection.ToCrm || syncDirection == model_1.SyncDirection.Both
                        ) {
                            // Check if its a possible date field
                            if (key == 'Birthday' || key == 'WeddingAnniversary') {
                            } else {
                                entity[mapping[key]['AttributeCrmName']] = exchangeEntity[key];
                            }
                        }
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
define("lib/dispatcherHandler",
    ["require", "exports"],
    function(require, exports) {
        "use strict";
        var dispatchKey = '';
        var callbacks = {};

        function buildDispatchMessage(k, n, m, a, v, c) {
            return '?k=' +
                k +
                '&n=' +
                n +
                '&m=' +
                m +
                '&a=' +
                a +
                '&v=' +
                v +
                '&c=' +
                c;
        }

        exports.buildDispatchMessage = buildDispatchMessage;

        function getCrmAccessKey(callback) {
            sendDispatchRequest('Account',
                'requestSecurityToken',
                { 'refreshToken': false },
                '1',
                { 'onRequestSecurityTokenResponse': 'crmtoken' },
                callback);
        }

        exports.getCrmAccessKey = getCrmAccessKey;

        function getCallbackTokenAsync(callback) {
            sendDispatchRequest('Account',
                'requestCallbackTokenAsync',
                {},
                '1',
                { 'onRequestCallbackTokenAsyncResponse': 'token' },
                callback);
        }

        exports.getCallbackTokenAsync = getCallbackTokenAsync;

        function displayFormForNewAppointment(parameters) {
            sendDispatchRequest('OfficeMail',
                'DisplayFormForNewAppointment',
                { 'AppointmentParameters': parameters },
                '1',
                {},
                null);
        }

        exports.displayFormForNewAppointment = displayFormForNewAppointment;

        function getContacts(parameters, callback) {
            sendDispatchRequest('OfficeMail',
                'GetContacts',
                { 'Parameters': parameters },
                '1',
                { 'onGetContacts': 'contacts' },
                callback);
        }

        exports.getContacts = getContacts;

        function getContactsCount(callback) {
            sendDispatchRequest('OfficeMail',
                'GetContactsCount',
                {},
                '1',
                { 'onGetContactsCount': 'contactsCount' },
                callback);
        }

        exports.getContactsCount = getContactsCount;

        function updateContactProperties(parameters, uniqueDispatchKey, callback) {
            sendDispatchRequest('OfficeMail',
                'UpdateContactProperties',
                { 'Parameters': parameters },
                '1',
                { 'onUpdateContactProperties': 'update' },
                callback,
                uniqueDispatchKey);
        }

        exports.updateContactProperties = updateContactProperties;

        function setRoamingSettingsItem(key, value, callback) {
            sendDispatchRequest('OfficeMail',
                'SetRoamingSettingsItem',
                { 'key': key, 'value': JSON.stringify(value) },
                '1',
                { 'onSetRoamingSettingsItem': 'value' },
                callback);
        }

        exports.setRoamingSettingsItem = setRoamingSettingsItem;

        function getRoamingSettingsItem(key, callback) {
            sendDispatchRequest('OfficeMail',
                'GetRoamingSettingsItem',
                { 'key': key },
                '1',
                { 'onGetRoamingSettingsItem': 'value' },
                callback);
        }

        exports.getRoamingSettingsItem = getRoamingSettingsItem;

        function saveRoamingSettings(callback) {
            sendDispatchRequest('OfficeMail',
                'SaveRoamingSettingsAsync',
                {},
                '1',
                { 'onSaveRoamingSettingsAsync': 'value' },
                callback);
        }

        exports.saveRoamingSettings = saveRoamingSettings;

        function getResourceStrings(ids, callback) {
            sendDispatchRequest('Application',
                'getStringValueBundle',
                { 'valueNames': ids },
                '1',
                { 'onStringsResult': 'values' },
                callback);
        }

        exports.getResourceStrings = getResourceStrings;

        function sendTelemetryEvent(data) {
            sendDispatchRequest('Logging', 'sendEvent', { 'data': data }, '1', {}, null);
        }

        exports.sendTelemetryEvent = sendTelemetryEvent;

        // This is going to map methods (m) to callbacks, when we get back the same method we will call its callback in that same order.
        // This will need to be updated to support the keying that the shim supports on response. As of right now 2 calls to the shim
        // with the same method name could resolve eachothers callbacks.
        function sendDispatchRequest(n, m, a, v, c, callback, uniqueDispatchKey) {
            if (uniqueDispatchKey === void 0) {
                uniqueDispatchKey = undefined;
            }
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
                } else {
                    callbacks[uniqueDispatchKey.toString()] = callback;
                    if (a['Parameters']) {
                        a['Parameters']['uniqueDispatchKey'] = uniqueDispatchKey;
                    }
                }
            }
            var message = buildDispatchMessage(dispatchKey, n, m, JSON.stringify(a), v, JSON.stringify(c));
            window.parent.postMessage(message, '*');
        }

        exports.sendDispatchRequest = sendDispatchRequest;

        function messageEvent(event) {
            var data = JSON.parse(event.data);
            var uniqueDispatchKey = JSON.parse(data.functionArguments[1])['uniqueDispatchKey'];
            // Should probably be clearing callback functions as they are used.
            if (uniqueDispatchKey) {
                callbacks[uniqueDispatchKey](data);
            } else {
                callbacks[data.functionArguments[0]](data);
            }
        }

        function registerListener() {
            dispatchKey = (window.ShimMessageKey);
            window.removeEventListener('message', (window.InitialListener));
            window.addEventListener('message', messageEvent);
        }

        exports.registerListener = registerListener;
    });
define("lib/resources",
    ["require", "exports"],
    function(require, exports) {
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
            "MailApp_Module_Alert_Untrack_Single_Error_If_Not_Tracked",
            "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Tracked",
            "MailApp_Module_Alert_Untrack_Single_Error_If_Pending_Untracked",
            "MailApp_Module_Alert_Track_Batch_Error_If_Tracked",
            "MailApp_Module_Alert_Untrack_Batch_Warning_If_Not_Tracked",
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
            "Brand_Microsoft"
        ];
        var ResourceManager = (function() {
            function ResourceManager() {
                /**
                 * Whether or not the ResourceManager has completed initialization
                 */
                this.initialized = false;
            }

            ResourceManager.prototype.initialize = function(resources) {
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
            ResourceManager.prototype.getString = function(resourceId) {
                return this.resources[resourceId] || resourceId;
            };
            return ResourceManager;
        }());
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = new ResourceManager();
    });
define("modules/data/contacts/actions",
    [
        "require", "exports", 'bluebird', "modules/data/contacts/actionTypes", "modules/data/contacts/model",
        "lib/crmInterface", "lib/dispatcherHandler", "lib/resources"
    ],
    function(require, exports, Promise, actionTypes_1, model_2, crmInterface_1, dispatcherHandler_1, resources_1) {
        "use strict";

        function initialize() {
            return function(dispatch, getState) {
                var state = getState();
                dispatcherHandler_1.getRoamingSettingsItem('mscrm_module_settings',
                    function(response) {
                        crmInterface_1.whoAmI(state.app.crmAccessKey).then(function(success) {
                                crmInterface_1
                                    .retrievePricipalSyncAttributeMappingsRequest(success.UserId,
                                        state.app.crmAccessKey)
                                    .then(function(success) {
                                            var contactsMappings = success.AttributeMappings.filter(function(mapping) {
                                                return mapping.EntityTypeCode == 2;
                                            });
                                            var contactsMappingTable = {};
                                            contactsMappings.forEach(function(mapping) {
                                                if (mapping.AttributeExchangeName) {
                                                    contactsMappingTable[mapping.AttributeExchangeName] = mapping;
                                                }
                                            });
                                            var data = JSON.parse(response.functionArguments[1]);
                                            if (data.result) {
                                                dispatch({
                                                    type: actionTypes_1.default.INITIALIZE,
                                                    payload: {
                                                        orderBy: data.result.orderBy,
                                                        filters: data.result.filters,
                                                        showFilter: data.result.showFilter,
                                                        pageSize: data.result.pageSize,
                                                        syncMapping: contactsMappingTable
                                                    }
                                                });
                                            } else {
                                                dispatch({
                                                    type: actionTypes_1.default.INITIALIZE,
                                                    payload: {
                                                        syncMapping: contactsMappingTable
                                                    }
                                                });
                                            }
                                            dispatch(loadContacts());
                                        },
                                        function(error) {
                                            console.error(error);
                                        });
                            },
                            function(error) {
                                console.error(error);
                            });
                    });
            };
        }

        function loadContacts() {
            return function(dispatch, getState) {
                var state = getState();
                // Close the context to prevent errors.
                dispatch(closeContext());
                switch (state.outlook.contactView) {
                case model_2.ContactViewMode.Exchange:
                    dispatch(loadOutlookContacts());
                    break;
                case model_2.ContactViewMode.CRM:
                    dispatch(loadCrmContacts());
                    break;
                }
            };
        }

        /** Action creator to load contacts from outlook server with current state for options. */
        function loadOutlookContacts() {
            return function(dispatch, getState) {
                var state = getState();
                dispatch({ type: actionTypes_1.default.OUTLOOK_LOAD_REQUEST });
                // If this page is already loaded, do nothing.
                if (typeof state.outlook.pages[getState().outlook.page] !== 'undefined')
                    return;
                var fields = state.outlook.metadata.map(function(metadata) { return metadata.key; });
                var orderByField = state.outlook.orderBy.column;
                var orderByStage = state.outlook.orderBy.stage;
                var order = (orderByStage !== 2 ? 'Ascending' : 'Descending');
                var extendedFilters = [];
                switch (state.outlook.selectedView) {
                case model_2.SelectedViewMode.Tracked.toString():
                    extendedFilters = [
                        {
                            id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                            type: 'Double',
                            name: model_2.CrmExtendedProperty.CRM_LINK_STATE,
                            value: model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                        }
                    ];
                    break;
                case model_2.SelectedViewMode.Untracked.toString():
                    extendedFilters = [
                        {
                            id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                            type: 'Double',
                            name: model_2.CrmExtendedProperty.CRM_LINK_STATE,
                            value: model_2.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED
                        }
                    ];
                    break;
                }
                // Searching and Filtering
                var filterArray = [];
                if (state.outlook.search) {
                    state.outlook.metadata.forEach(function(field) {
                        if (field.filterable) {
                            filterArray.push({
                                field: field.key,
                                value: state.outlook.search
                            });
                        }
                    });
                } else if (state.outlook.showFilter) {
                    Object.keys(state.outlook.filters).forEach(function(key) {
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
                dispatcherHandler_1.getContacts(parameters,
                    function(response) {
                        var parsedResponse = JSON.parse(response.functionArguments[1]);
                        dispatch(loadContactsSuccess(parsedResponse));
                    });
            };
        }

        function loadCrmContacts() {
            return function(dispatch, getState) {
                var state = getState();
                dispatch({ type: actionTypes_1.default.CRM_LOAD_REQUEST });
                crmInterface_1.crmGet('contacts', state.app.crmAccessKey).then(function(success) {
                        var contacts = JSON.parse(success).value;
                        // preprocess
                        for (var i = 0; i < contacts.length; i++) {
                            // Ensure we are using the same keys
                            contacts[i][model_2.CrmExtendedProperty.CRM_ID] = contacts[i].crmid;
                            contacts[i][model_2.CrmExtendedProperty
                                .CRM_PARENT_ACCOUNT_ID] = contacts[i]['_parentcustomerid_value'];
                            contacts[i][model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty
                                .CRM_LINK_STATE_LINKED;
                        };
                        var currentPage = [];
                        var page = 0;
                        var total = 0;
                        contacts.forEach(function(contact, index) {
                            currentPage.push(contact);
                            total++;
                            if (currentPage.length >= state.outlook.pageSize || total >= contacts.length) {
                                dispatch({
                                    type: actionTypes_1.default.CRM_LOAD_SUCCESS,
                                    payload: { contacts: currentPage, page: page, totalCount: contacts.length }
                                });
                                currentPage = [];
                                page++;
                            }
                        });
                        // postprocess
                        var _loop_1 = function() {
                            var index = i;
                            if (contacts[i]['_parentcustomerid_value']) {
                                crmInterface_1.crmGet('accounts',
                                        state.app.crmAccessKey,
                                        { $filter: "accountid eq " + contacts[i]['_parentcustomerid_value'] })
                                    .then(function(accountResponse) {
                                            var account = JSON.parse(accountResponse)
                                                .value[0]; // Just take the first account
                                            dispatch({
                                                type: actionTypes_1.default.UPDATE_CONTACT,
                                                payload: {
                                                    index: index,
                                                    values: {
                                                        CompanyName: account.name
                                                    }
                                                }
                                            });
                                        },
                                        function(error) {
                                            console.error(error);
                                        });
                            }
                        };
                        for (var i = 0; i < contacts.length; i++) {
                            _loop_1();
                        };
                    },
                    function(error) {
                        console.error(error);
                        dispatch({ type: actionTypes_1.default.CRM_LOAD_FAIL });
                    });
            };
        }

        /**
         * Action creator to fire the action of a contacts load success
         */
        function loadContactsSuccess(response) {
            return function(dispatch, getState) {
                var state = getState();
                var contacts = response.contacts;
                var count = response.count;
                // preprocess
                var _loop_2 = function() {
                    var extendedProperties = {};
                    if (contacts[i].ExtendedProperties instanceof Array) {
                        contacts[i].ExtendedProperties.forEach(function(property) {
                            extendedProperties[property['t:ExtendedFieldURI']['@attributes']
                                .PropertyName] = property['t:Value']['#text'];
                        });
                    }
                    // Parse name
                    if (contacts[i]['CompleteName']) {
                        contacts[i]['FirstName'] = contacts[i]['CompleteName']['t:FirstName']
                            ? contacts[i]['CompleteName']['t:FirstName']['#text']
                            : '';
                        contacts[i]['LastName'] = contacts[i]['CompleteName']['t:LastName']
                            ? contacts[i]['CompleteName']['t:LastName']['#text']
                            : '';
                    }
                    contacts[i][model_2.CrmExtendedProperty
                            .CRM_ID] = extendedProperties[model_2.CrmExtendedProperty.CRM_ID]
                        ? extendedProperties[model_2.CrmExtendedProperty.CRM_ID]
                        : model_2.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED;
                    contacts[i][model_2.CrmExtendedProperty.CRM_LINK_STATE] = extendedProperties[model_2
                        .CrmExtendedProperty
                        .CRM_LINK_STATE];
                    contacts[i][model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = extendedProperties[model_2
                        .CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID];
                };
                for (var i = 0; i < contacts.length; i++) {
                    _loop_2();
                };
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
            return function(dispatch, getState) {
                var state = getState();
                dispatcherHandler_1.getContactsCount(function(response) {
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
            return function(dispatch, getState) {
                var state = getState();
                if (page < 0 || page > Math.floor(state.outlook.totalCount / state.outlook.pageSize))
                    return;
                dispatch({ type: actionTypes_1.default.CHANGE_PAGE, payload: page });
                dispatch(loadContacts());
            };
        }

        /** Action creator for changing page size in state. Reloads contacts after. */
        function changePageSize(limit) {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.CHANGE_PAGE_SIZE, payload: limit });
                dispatch(saveSettings());
                dispatch(loadContacts());
            };
        }

        /** Action creator for changing order value in state. Reloads contacts after. */
        function changeOrder(orderBy) {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.CHANGE_ORDER, payload: orderBy });
                dispatch(saveSettings());
                dispatch(loadContacts());
            };
        }

        /** Action creator for changing search value in state. Reloads contacts after. */
        function search(value) {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.SEARCH, payload: value });
                dispatch(refresh());
            };
        }

        /** Action creator for toggling column visibility. */
        function toggleColumn(key) {
            return { type: actionTypes_1.default.TOGGLE_COLUMN, payload: key };
        }

        function saveSettings() {
            return function(dispatch, getState) {
                var state = getState();
                var updateState = {
                    orderBy: state.outlook.orderBy,
                    filters: state.outlook.filters,
                    showFilter: state.outlook.showFilter,
                    pageSize: state.outlook.pageSize
                };
                dispatcherHandler_1.setRoamingSettingsItem('mscrm_module_settings',
                    updateState,
                    function(response) {
                        dispatcherHandler_1.saveRoamingSettings(null);
                    });
            };
        }

        /** Action creator for setting focused contact. */
        function focusContact(index) {
            return function(dispatch, getState) {
                var state = getState();
                var contact = state.outlook.pages[state.outlook.page][index];
                // If it's a CRM contact update initials
                if (state.outlook.contactView === model_2.ContactViewMode.CRM) {
                    dispatch({
                        type: actionTypes_1.default.UPDATE_CONTACT,
                        payload: {
                            index: index,
                            values: {
                                Initials: "" +
                                    (contact.firstname ? contact.firstname.charAt(0) + '.' : '') +
                                    (contact.lastname ? contact.lastname.charAt(0) + '.' : '')
                            }
                        }
                    });
                }
                if (contact[model_2.CrmExtendedProperty.CRM_ID]) {
                    var crmId = contact[model_2.CrmExtendedProperty.CRM_ID];
                    var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                    crmInterface_1.crmGet("contacts(" + strippedId + ")", state.app.crmAccessKey, {})
                        .then(function(success) {
                                var data = JSON.parse(success);
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
                            },
                            function(error) {
                                console.error(error);
                            });
                }
                if (contact[model_2.CrmExtendedProperty.CRM_ID] &&
                    contact[model_2.CrmExtendedProperty
                        .CRM_LINK_STATE] ==
                    model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED) {
                    crmInterface_1.crmGetNextActivity(contact[model_2.CrmExtendedProperty.CRM_ID],
                            state.app.crmAccessKey)
                        .then(function(success) {
                                if (success.results[0]) {
                                    var activity = success.results[0];
                                    activity.date = activity.ScheduledStart
                                        .substring(activity.ScheduledStart.indexOf('(') + 1,
                                            activity.ScheduledStart.indexOf(')'));
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
                            },
                            function(error) {
                                console.error(error);
                            });
                    crmInterface_1.crmGetPrevActivity(contact[model_2.CrmExtendedProperty.CRM_ID],
                            state.app.crmAccessKey)
                        .then(function(success) {
                                if (success.results[0]) {
                                    var activity = success.results[0];
                                    activity.date = activity.ScheduledStart
                                        .substring(activity.ScheduledStart.indexOf('(') + 1,
                                            activity.ScheduledStart.indexOf(')'));
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
                            },
                            function(error) {
                                console.error(error);
                            });
                }
                dispatch({
                    type: actionTypes_1.default.FOCUS_CONTACT,
                    payload: index
                });
            };
        }

        /** Action creator closing context flyout. */
        function closeContext() {
            return { type: actionTypes_1.default.CLOSE_CONTEXT };
        }

        /** Action creator for showing link context. */
        function showLinkContext() {
            return function(dispatch, getState) {
                var state = getState();
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e) {
                    return e.selected;
                });
                if (selectedContacts.length === 0) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Link_Alert')));
                    return;
                }
                dispatch({ type: actionTypes_1.default.SHOW_LINK_CONTEXT });
                dispatch(loadAccounts());
            };
        }

        /** Action creator for hiding link context. */
        function hideLinkContext() {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.HIDE_LINK_CONTEXT });
            };
        }

        /** Action creator for selecing the current focused contact and showing the link context. */
        function linkFocusedContact(e) {
            return function(dispatch, getState) {
                var state = getState();
                // Select current focused contact and open link context.
                var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
                var targetIndex = -1;
                state.outlook.pages[state.outlook.page].forEach(function(e, index) {
                    if (contact.Id == e.Id) {
                        targetIndex = index;
                    }
                });
                if (targetIndex !== -1) {
                    dispatch(toggleSelect(e, targetIndex));
                }
                dispatch(showLinkContext());
            };
        }

        /** Action creator for selecting an account. */
        function selectAccount(e, account) {
            return function(dispatch, getState) {
                e.stopPropagation();
                dispatch({ type: actionTypes_1.default.SELECT_ACCOUNT, payload: account });
            };
        }

        function linkSelectedAccounts() {
            return function(dispatch, getState) {
                var state = getState();
                if (state.outlook.contactView === model_2.ContactViewMode.CRM) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Dymamics_365_Link_Alert')));
                    return;
                }
                // Do some preprocessing to determing contact index in the current page state
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e, index) {
                    e.index = index;
                    return e.selected;
                });
                if (selectedContacts.length === 0) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Link_Alert')));
                    return;
                }
                var doLink = function() {
                    dispatch({
                        type: actionTypes_1.default.TRANSACTION_START,
                        payload: {
                            type: '',
                            progressMax: selectedContacts.length
                        }
                    });
                    var count = 0;
                    selectedContacts.forEach(function(contact) {
                        trackContact(contact,
                            state.app.crmAccessKey,
                            state.app.callbackToken,
                            contact.index,
                            state.outlook.syncMapping).then(function(crmId) {
                                var properties = [
                                    {
                                        field: 'CompanyName',
                                        value: state.outlook.selectedAccount.name
                                    }
                                ];
                                var extendedProperties = [
                                    {
                                        id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                        type: 'String',
                                        name: 'crmParentAccountId',
                                        value: state.outlook.selectedAccountId
                                    }
                                ];
                                var strippedId = crmId.substring(crmId.indexOf('{') + 1, crmId.indexOf('}'));
                                crmInterface_1.crmAssociate('accounts',
                                    state.outlook.selectedAccountId,
                                    'contacts',
                                    strippedId,
                                    'contact_customer_accounts',
                                    state.app.crmAccessKey);
                                dispatcherHandler_1
                                    .updateContactProperties({
                                            id: contact.Id,
                                            changeKey: contact.ChangeKey,
                                            key: contact.index + 1,
                                            properties: properties,
                                            extendedProperties: extendedProperties
                                        },
                                        contact.index + 1,
                                        function(result) {
                                            count = count + 1;
                                            dispatch({
                                                type: actionTypes_1.default.UPDATE_CONTACT,
                                                payload: {
                                                    index: contact.index,
                                                    values: (_a = {},
                                                        _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2
                                                            .CrmExtendedProperty
                                                            .CRM_LINK_STATE_LINKED,
                                                        _a[model_2.CrmExtendedProperty.CRM_ID] = crmId,
                                                        _a[model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = state
                                                            .outlook
                                                            .selectedAccountId,
                                                        _a.CompanyName = state.outlook.selectedAccount.name,
                                                        _a
                                                    )
                                                }
                                            });
                                            dispatch({
                                                type: actionTypes_1.default.UPDATE_TRANSACTION,
                                                payload: count
                                            });
                                            if (count >= selectedContacts.length) {
                                                dispatch(closeContext());
                                                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                                                dispatcherHandler_1.sendTelemetryEvent({
                                                    name: 'mailapp_module_link',
                                                    data: {
                                                        count: count
                                                    }
                                                });
                                            }
                                            var _a;
                                        });
                            },
                            function(error) {
                                console.error(error);
                            });
                    });
                };
                // If there are multiple selected and a mix of tracked/pending and untracked, show confirmation.
                var trackSummary = selectedContacts.reduce(function(summary, contact) {
                        var linkState = contact[model_2.CrmExtendedProperty.CRM_LINK_STATE];
                        summary[linkState] = summary[linkState] ? summary[linkState] + 1 : 1;
                        return summary;
                    },
                    {});
                if (selectedContacts.length > 1 &&
                    trackSummary[model_2.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED] &&
                    (trackSummary[model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED] ||
                        trackSummary[model_2.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK])) {
                    dispatch(showConfirm([resources_1.default.getString('MailApp_Module_Alert_Link_Batch_Warning')],
                        function() { return doLink(); },
                        function() { return null; }, // no-op
                        resources_1.default.getString('MailApp_Module_Alert_Button_OK'),
                        resources_1.default.getString('MailApp_Module_Alert_Button_Cancel')));
                } else {
                    doLink();
                }
            };
        }

        function unlinkFocusedContact() {
            return function(dispatch, getState) {
                var state = getState();
                var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START,
                    payload: {
                        type: '',
                        progressMax: 1
                    }
                });
                // Update crmParentAccountId on the exchange entity
                var extendedProperties = [
                    {
                        id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'String',
                        name: model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID,
                        value: ''
                    }
                ];
                dispatcherHandler_1.sendTelemetryEvent({
                    name: 'mailapp_module_unlink',
                    data: {
                        count: 1
                    }
                });
                dispatcherHandler_1.updateContactProperties({
                        id: contact.Id,
                        changeKey: contact.ChangeKey,
                        key: contact.index + 1,
                        properties: [],
                        extendedProperties: extendedProperties
                    },
                    1,
                    function(result) {
                        dispatch({
                            type: actionTypes_1.default.UPDATE_ACCOUNT,
                            payload: {
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
            return function(dispatch, getState) {
                var state = getState();
                crmInterface_1.crmGet('accounts', state.app.crmAccessKey, {}).then(function(result) {
                        dispatch(loadAccountsSuccess(result));
                    },
                    function(error) {
                        console.error(error);
                    });
            };
        }

        function loadAccountsSuccess(response) {
            return function(dispatch, getState) {
                var state = getState();
                var accounts = JSON.parse(response);
                dispatch({ type: actionTypes_1.default.ACCOUNT_LOAD_SUCCESS, payload: accounts.value });
            };
        }

        function openNewAccount() {
            window.open('/main.aspx?etn=account&pagetype=entityrecord');
            return { type: actionTypes_1.default.SHOW_REFRESH_PANE };
        }

        function refreshAccounts() {
            return function(dispatch) {
                dispatch(loadAccounts());
                dispatch({ type: actionTypes_1.default.HIDE_REFRESH_PANE });
            };
        }

        /** Action creator for toggling visibility of column options box. */
        function toggleFilter() {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.TOGGLE_FILTER });
                dispatch(saveSettings());
            };
        }

        /** Action creator changing the internal value of a filter input in the state. */
        function changeFilter(filter, value) {
            return {
                type: actionTypes_1.default.CHANGE_FILTER,
                payload: {
                    filter: filter,
                    value: value
                }
            };
        }

        /** Action creator for activating a filter. */
        function activateFilter(filter, value) {
            return function(dispatch, getState) {
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

        function toggleSettings(e) {
            return function(dispatch, getState) {
                var state = getState();
                if (state.outlook.showSettings == false) {
                    document.getElementById('fieldCustomizer').focus();
                }
                dispatch(saveSettings());
                dispatch({ type: actionTypes_1.default.TOGGLE_SETTINGS });
            };
        }

        // Move these to interface
        function trackContact(contact, crmAccessKey, callbackToken, key, mapping) {
            return new Promise(function(resolve, reject) {
                // If the contact has a link state and crmid just return the id.
                if (contact[model_2.CrmExtendedProperty.CRM_ID] &&
                    contact[model_2.CrmExtendedProperty
                        .CRM_LINK_STATE] ==
                    model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED) {
                    resolve(contact[model_2.CrmExtendedProperty.CRM_ID]);
                    return;
                }
                crmInterface_1.crmCreate('contacts',
                        crmInterface_1.transformExchangeToCrm(contact, mapping),
                        crmAccessKey)
                    .then(function(success) {
                            var crmId = "{" + success.substring(success.indexOf('(') + 1, success.indexOf(')')) + "}";
                            // Update linkstate and contactId on exchange entity
                            var extendedProperties = [
                                {
                                    id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                    type: 'Double',
                                    name: model_2.CrmExtendedProperty.CRM_LINK_STATE,
                                    value: model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                                },
                                {
                                    id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                    type: 'String',
                                    name: model_2.CrmExtendedProperty.CRM_ID,
                                    value: crmId
                                },
                                {
                                    id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                    type: 'Integer',
                                    name: model_2.CrmExtendedProperty.CRM_LINK_STATE_TRACKER,
                                    value: model_2.CrmExtendedProperty.CRM_LINK_STATE_TRACKER_TRACKED
                                }
                            ];
                            dispatcherHandler_1
                                .updateContactProperties({
                                        id: contact.Id,
                                        changeKey: contact.ChangeKey,
                                        key: key,
                                        properties: [],
                                        extendedProperties: extendedProperties
                                    },
                                    key,
                                    function(result) {
                                        resolve(crmId);
                                    });
                        },
                        function(error) {
                            reject(error);
                        });
            });
        }

        function untrackContact(contact, crmAccessKey, callbackToken, key) {
            return new Promise(function(resolve, reject) {
                // Update linkstate and contactId on exchange entity
                var extendedProperties = [
                    {
                        id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'Double',
                        name: model_2.CrmExtendedProperty.CRM_LINK_STATE,
                        value: model_2.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED
                    },
                    {
                        id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                        type: 'String',
                        name: model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID,
                        value: ''
                    }
                ];
                dispatcherHandler_1.updateContactProperties({
                        id: contact.Id,
                        changeKey: contact.ChangeKey,
                        properties: [],
                        extendedProperties: extendedProperties
                    },
                    key,
                    function(result) {
                        resolve(result);
                    });
            });
        }

        // TODO: Refactor state changes, this is repeated 4 times and is only needed once.
        function trackFocusedContact(e) {
            return function(dispatch, getState) {
                var state = getState();
                var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START,
                    payload: {
                        type: '',
                        progressMax: 1
                    }
                });
                trackContact(contact, state.app.crmAccessKey, state.app.callbackToken, 1, state.outlook.syncMapping)
                    .then(function(crmId) {
                            dispatch({
                                type: actionTypes_1.default.UPDATE_CONTACT,
                                payload: {
                                    index: state.outlook.focused.index,
                                    values: (_a = {},
                                        _a[model_2.CrmExtendedProperty.CRM_ID] = crmId,
                                        _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty
                                            .CRM_LINK_STATE_LINKED,
                                        _a
                                    )
                                }
                            });
                            dispatch(updateContactsCount());
                            dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                            dispatcherHandler_1.sendTelemetryEvent({
                                name: 'mailapp_module_track',
                                data: {
                                    focused: true,
                                    count: 1
                                }
                            });
                            var _a;
                        },
                        function(error) {
                            console.error(error);
                        });
            };
        }

        function untrackFocusedContact(e, alsoDelete) {
            return function(dispatch, getState) {
                var state = getState();
                var contact = getTargetedContacts(ContactTarget.FOCUSED, state)[0];
                var crmId = contact[model_2.CrmExtendedProperty.CRM_ID];
                dispatch(closeUntrackAlert());
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START,
                    payload: {
                        type: '',
                        progressMax: 1
                    }
                });
                untrackContact(contact, state.app.crmAccessKey, state.app.callbackToken, 1).then(function(success) {
                        dispatch({
                            type: actionTypes_1.default.UPDATE_CONTACT,
                            payload: {
                                index: state.outlook.focused.index,
                                values: (_a = {},
                                    _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty
                                        .CRM_LINK_STATE_NOT_LINKED,
                                    _a[model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = '',
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
                            crmInterface_1.crmDelete('contacts', state.app.crmAccessKey, strippedId)
                                .then(function(success) {
                                        console.log(success);
                                    },
                                    function(error) {
                                        console.error(error);
                                    });
                        }
                        var _a;
                    },
                    function(error) {
                        console.error(error);
                    });
            };
        }

        var ContactTarget;
        (function(ContactTarget) {
            ContactTarget[ContactTarget["SELECTED"] = 0] = "SELECTED";
            ContactTarget[ContactTarget["FOCUSED"] = 1] = "FOCUSED";
        })(ContactTarget || (ContactTarget = {}));
        exports.ContactTarget = ContactTarget;;

        function getTargetedContacts(target, state) {
            switch (target) {
            case ContactTarget.FOCUSED:
                return [state.outlook.pages[state.outlook.focused.page][state.outlook.focused.index]];
            case ContactTarget.SELECTED:
                return state.outlook.pages[state.outlook.page].filter(function(item, index) {
                    item.index = index;
                    return item.selected;
                });
            }
        }

        function attemptTrack(target, options) {
            if (options === void 0) {
                options = {};
            }
            return function(dispatch, getState) {
                var state = getState();
                if (state.outlook.contactView === model_2.ContactViewMode.CRM) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Dymamics_365_Track_Alert')));
                    return;
                }
                var contacts = getTargetedContacts(target, state);
                var performTrack = function() {
                    return target === ContactTarget.FOCUSED
                        ? dispatch(trackFocusedContact(null))
                        : dispatch(trackSelectedContacts());
                };
                if (contacts.length == 0) {
                    // If there are no selected contacts, show an alert and abort.
                    return dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Track_Alert')));
                } else if (contacts.length === 1 && options.detectDuplicates) {
                    if (contacts[0][model_2.CrmExtendedProperty.CRM_LINK_STATE] ==
                        model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED) {
                        return dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Track_Alert')));
                    }
                    var strippedId = contacts[0][model_2.CrmExtendedProperty.CRM_ID]
                        .substring(contacts[0][model_2.CrmExtendedProperty.CRM_ID].indexOf('{') + 1,
                            contacts[0][model_2.CrmExtendedProperty.CRM_ID].indexOf('}'));
                    // If the contact already has a crm id, isn't linked, and there exists in CRM a contact with the same ID. Just set to linked.
                    if (contacts[0][model_2.CrmExtendedProperty.CRM_ID] &&
                        contacts[0][model_2.CrmExtendedProperty.CRM_ID] != '0') {
                        crmInterface_1.crmGet('contacts',
                                state.app.crmAccessKey,
                                { $filter: "contactid eq " + strippedId })
                            .then(function(success) {
                                    var possibleContacts = JSON.parse(success).value;
                                    if (possibleContacts.length > 0) {
                                        var extendedProperties = [
                                            {
                                                id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                                type: 'Double',
                                                name: model_2.CrmExtendedProperty.CRM_LINK_STATE,
                                                value: model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                                            },
                                            {
                                                id: model_2.CrmExtendedProperty.CRM_NAMESPACE,
                                                type: 'Integer',
                                                name: model_2.CrmExtendedProperty.CRM_LINK_STATE_TRACKER,
                                                value: model_2.CrmExtendedProperty.CRM_LINK_STATE_TRACKER_TRACKED
                                            }
                                        ];
                                        dispatcherHandler_1
                                            .updateContactProperties({
                                                    id: contacts[0].Id,
                                                    changeKey: contacts[0].ChangeKey,
                                                    key: 1,
                                                    properties: [],
                                                    extendedProperties: extendedProperties
                                                },
                                                1,
                                                function(result) {
                                                    dispatch({
                                                        type: actionTypes_1.default.UPDATE_CONTACT,
                                                        payload: {
                                                            index: state.outlook.focused.index,
                                                            values: (_a = {},
                                                                _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2
                                                                    .CrmExtendedProperty.CRM_LINK_STATE_LINKED,
                                                                _a
                                                            )
                                                        }
                                                    });
                                                    dispatch(updateContactsCount());
                                                    var _a;
                                                });
                                    } else {
                                        // Perform duplicate detection if there is only a single contact
                                        crmInterface_1
                                            .crmDetectDuplicates('contacts',
                                                crmInterface_1
                                                .transformExchangeToCrm(contacts[0], state.outlook.syncMapping),
                                                state.app.crmAccessKey).then(function(duplicates) {
                                                    if (!duplicates || duplicates.length === 0) {
                                                        return performTrack();
                                                    } else {
                                                        // Need to confirm duplicate creation with the user
                                                        return dispatch(showDuplicateDialog(duplicates
                                                            .map(function(dup) { return dup.fullname; }),
                                                            function() {
                                                                return dispatch(attemptTrack(target,
                                                                    Object
                                                                    .assign({}, options, { detectDuplicates: false })));
                                                            },
                                                            function() { return null; } // no-op
                                                            // no-op
                                                        ));
                                                    }
                                                },
                                                function(error) {
                                                    // Fail gracefully and go ahead with the track
                                                    return performTrack();
                                                });
                                    }
                                },
                                function(error) {
                                    console.error(error);
                                });
                    } else {
                        // Perform duplicate detection if there is only a single contact
                        crmInterface_1.crmDetectDuplicates('contacts',
                            crmInterface_1.transformExchangeToCrm(contacts[0], state.outlook.syncMapping),
                            state.app.crmAccessKey).then(function(duplicates) {
                                if (!duplicates || duplicates.length === 0) {
                                    return performTrack();
                                } else {
                                    // Need to confirm duplicate creation with the user
                                    return dispatch(showDuplicateDialog(duplicates
                                        .map(function(dup) { return dup.fullname; }),
                                        function() {
                                            return dispatch(attemptTrack(target,
                                                Object.assign({}, options, { detectDuplicates: false })));
                                        },
                                        function() { return null; } // no-op
                                        // no-op
                                    ));
                                }
                            },
                            function(error) {
                                // Fail gracefully and go ahead with the track
                                return performTrack();
                            });
                    }
                } else {
                    // Go ahead with track
                    return performTrack();
                }
            };
        }

        function showDuplicateDialog(dupes, confirmHandler, denyHandler) {
            return {
                type: actionTypes_1.default.SHOW_CONFIRM,
                payload: {
                    messages: [
                        'We found one or more matching contacts in Dynamics 365 that are already tracked. Do you still want to track this contact?'
                    ].concat(dupes),
                    confirmButtonText: resources_1.default.getString('MailApp_Module_Track'),
                    denyButtonText: resources_1.default.getString('MailApp_Module_Alert_Button_Cancel'),
                    confirmHandler: confirmHandler,
                    denyHandler: denyHandler
                }
            };
        }

        /** Action creator that tracks all selected contacts. */
        function trackSelectedContacts() {
            return function(dispatch, getState) {
                var state = getState();
                // Get all of the selected contacts that untracked.
                var selectedContacts = getTargetedContacts(ContactTarget.SELECTED, state)
                    .filter(function(contact) {
                        return contact[model_2.CrmExtendedProperty.CRM_LINK_STATE] !==
                            model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED;
                    });
                if (selectedContacts.length == 0) {
                    return dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Track_Alert')));
                }
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START,
                    payload: {
                        type: '',
                        progressMax: selectedContacts.length
                    }
                });
                var count = 0;
                selectedContacts.forEach(function(contact) {
                    trackContact(contact,
                        state.app.crmAccessKey,
                        state.app.callbackToken,
                        contact.index + 1,
                        state.outlook.syncMapping).then(function(crmId) {
                            count = count + 1;
                            // Dispatch state update to refresh tracked status of affected rows
                            dispatch({
                                type: actionTypes_1.default.UPDATE_CONTACT,
                                payload: {
                                    index: contact.index,
                                    values: (_a = {},
                                        _a[model_2.CrmExtendedProperty.CRM_ID] = crmId,
                                        _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty
                                            .CRM_LINK_STATE_LINKED,
                                        _a
                                    )
                                }
                            });
                            // Update our transaction state
                            dispatch({
                                type: actionTypes_1.default.UPDATE_TRANSACTION,
                                payload: count
                            });
                            if (count >= selectedContacts.length) {
                                // After transaction is completed update state
                                dispatch({ type: actionTypes_1.default.TRANSACTION_SUCCESS });
                                dispatch(updateContactsCount());
                                dispatcherHandler_1.sendTelemetryEvent({
                                    name: 'mailapp_module_track',
                                    data: {
                                        focused: false,
                                        count: count
                                    }
                                });
                            }
                            var _a;
                        },
                        function(error) {
                            console.error(error);
                        });
                });
            };
        }

        function untrackSelectedContacts(alsoDelete) {
            return function(dispatch, getState) {
                var state = getState();
                dispatch(closeUntrackAlert());
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e, index) {
                    e.index = index;
                    var tracked = e[model_2.CrmExtendedProperty.CRM_LINK_STATE] &&
                    (e[model_2.CrmExtendedProperty
                            .CRM_LINK_STATE] ===
                        model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED);
                    return e.selected && tracked;
                });
                dispatch({
                    type: actionTypes_1.default.TRANSACTION_START,
                    payload: {
                        type: '',
                        progressMax: selectedContacts.length
                    }
                });
                var count = 0;
                selectedContacts.forEach(function(contact) {
                    var crmId = contact[model_2.CrmExtendedProperty.CRM_ID];
                    untrackContact(contact, state.app.crmAccessKey, state.app.callbackToken, contact.index + 1)
                        .then(function(success) {
                                // Dispatch state update to refresh tracked status of affected rows
                                dispatch({
                                    type: actionTypes_1.default.UPDATE_CONTACT,
                                    payload: {
                                        index: contact.index,
                                        values: (_a = {},
                                            _a[model_2.CrmExtendedProperty.CRM_LINK_STATE] = model_2.CrmExtendedProperty
                                                .CRM_LINK_STATE_NOT_LINKED,
                                            _a[model_2.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = '',
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
                                    crmInterface_1.crmDelete('contacts', state.app.crmAccessKey, strippedId)
                                        .then(function(success) {
                                                console.log(success);
                                            },
                                            function(error) {
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
                            },
                            function(error) {
                                console.error(error);
                            });
                });
            };
        }

        function emailSelectedContacts() {
            return function(dispatch, getState) {
                var state = getState();
                var emails = state.outlook.pages[state.outlook.page].filter(function(e) {
                    return e.selected;
                }).reduce(function(emails, contact) {
                        if (emails == '') {
                            return contact.EmailAddress1;
                        } else {
                            return emails + ';' + contact.EmailAddress1;
                        }
                    },
                    '');
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
            return function(dispatch, getState) {
                var state = getState();
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e) {
                    return e.selected && e.EmailAddress1;
                }).map(function(contact) {
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
            return function(dispatch, getState) {
                var state = getState();
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e, index) {
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

        function showAlert(data) {
            return { type: actionTypes_1.default.SHOW_ALERT, payload: data };
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
            return function(dispatch, getState) {
                dispatch({
                    type: actionTypes_1.default.SHOW_UNTRACK_ALERT,
                    payload: {
                        focused: true
                    }
                });
            };
        }

        function showSelectedUntrackAlert() {
            return function(dispatch, getState) {
                var state = getState();
                if (state.outlook.contactView === model_2.ContactViewMode.CRM) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Dymamics_365_Track_Alert')));
                    return;
                }
                var selectedContacts = state.outlook.pages[state.outlook.page].filter(function(e, index) {
                    e.index = index;
                    var tracked = e[model_2.CrmExtendedProperty.CRM_LINK_STATE] &&
                    (e[model_2.CrmExtendedProperty
                            .CRM_LINK_STATE] ===
                        model_2.CrmExtendedProperty.CRM_LINK_STATE_LINKED);
                    return e.selected && tracked;
                });
                // If there are no selected contacts, show an alert and abort.
                if (selectedContacts.length == 0) {
                    dispatch(showAlert(resources_1.default.getString('MailApp_Module_Select_Untrack_Alert')));
                    return;
                }
                dispatch({
                    type: actionTypes_1.default.SHOW_UNTRACK_ALERT,
                    payload: {
                        focused: false
                    }
                });
            };
        }

        function closeUntrackAlert() {
            return { type: actionTypes_1.default.CLOSE_UNTRACK_ALERT };
        }

        function refresh() {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.REFRESH });
                dispatch(loadContacts());
            };
        }

        // Abrubtly end transaction
        function endTransaction() {
            return { type: actionTypes_1.default.TRANSACTION_SUCCESS };
        }

        function changeView(value) {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.CHANGE_VIEW, payload: value });
                dispatch(refresh());
            };
        }

        function changeTrackedFilter(value) {
            return function(dispatch) {
                dispatch({ type: actionTypes_1.default.CHANGE_TRACKED_FILTER, payload: value });
                dispatch(refresh());
            };
        }

        // Options alert
        function showOptionsAlert() {
            return function(dispatch) {
            };
        }

        // Run passed function when OK is clicked on options alert
        function acceptOptionsAlert() {
            return function(dispatch) {
            };
        }

        function closeOptionsAlert() {
            return function(dispatch) {
            };
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
            openNewAccount: openNewAccount,
            refreshAccounts: refreshAccounts,
            toggleFilter: toggleFilter,
            changeFilter: changeFilter,
            toggleSelect: toggleSelect,
            togglePageSelect: togglePageSelect,
            toggleSettings: toggleSettings,
            trackFocusedContact: trackFocusedContact,
            untrackFocusedContact: untrackFocusedContact,
            trackSelectedContacts: trackSelectedContacts,
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
            attemptTrack: attemptTrack
        };
    });
define("modules/data/contacts/reducer",
    [
        "require", "exports", "modules/data/contacts/actionTypes", "modules/data/contacts/model",
        "modules/data/contacts/model"
    ],
    function(require, exports, actionTypes_2, model_3, model_4) {
        "use strict";
        var initialState = {
            metadata: model_3.OutlookMetadata,
            syncMapping: undefined,
            loaded: false,
            outlookTotalContactsCount: 0,
            outlookTotalTrackedContactsCount: 0,
            outlookTotalUntrackedContactsCount: 0,
            contactView: model_4.ContactViewMode.Exchange,
            selectedView: model_4.SelectedViewMode.All,
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
            linkAccounts: [],
            linkAccountsLoaded: false,
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
            // Notification
            notification: {
                lastUpdated: null,
                message: '',
                type: ''
            },
            // Alerts
            alert: {
                data: null,
                active: false
            },
            confirm: {
                active: false
            },
            untrackAlert: {
                focused: false,
                active: false
            },
            optionsAlert: {
                data: null,
                function: null,
                active: false
            }
        };

        /** State reducer for outlook-contacts. */
        function default_1(state, _a) {
            if (state === void 0) {
                state = initialState;
            }
            var type = _a.type, payload = _a.payload;
            switch (type) {
            case actionTypes_2.default.INITIALIZE:
                return Object.assign({},
                    state,
                    {
                        orderBy: payload.orderBy ? payload.orderBy : state.orderBy,
                        filters: payload.filters ? payload.filters : state.filters,
                        showFilter: payload.showFilter ? payload.showFilter : state.showFilter,
                        pageSize: payload.pageSize ? payload.pageSize : state.pageSize,
                        syncMapping: payload.syncMapping
                    });
            case actionTypes_2.default.CRM_LOAD_REQUEST:
            case actionTypes_2.default.OUTLOOK_LOAD_REQUEST:
                return Object.assign({},
                    state,
                    {
                        loaded: false
                    });
            // TODO: Refactor
            case actionTypes_2.default.OUTLOOK_LOAD_SUCCESS:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_b = {},
                                _b[state.page] = payload.contacts.map(function(val) {
                                    return (Object.assign({},
                                        val,
                                        {
                                            selected: false
                                        }));
                                }),
                                _b
                            )),
                        loaded: true,
                        totalCount: payload.count
                    });
            case actionTypes_2.default.OUTLOOK_LOAD_FAIL:
                return Object.assign({},
                    state,
                    {
                        error: true
                    });
            case actionTypes_2.default.CRM_LOAD_SUCCESS:
                console.log(payload);
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_c = {},
                                _c[payload.page] = payload.contacts.map(function(val) {
                                    return ((_a = {
                                            DisplayName: val.fullname,
                                            Department: val.department,
                                            GivenName: val.fullname,
                                            CompanyName: val.company,
                                            BusinessPhone: val.telephone1,
                                            EmailAddress1: val.emailaddress1,
                                            JobTitle: val.jobtitle,
                                            imageUrl: val.entityimage
                                                ? "data:image;base64," + val.entityimage.toString()
                                                : val.entityimage_url,
                                            selected: false
                                        },
                                        _a[model_3.CrmExtendedProperty.CRM_ID] = "{" + val.contactid + "}",
                                        _a[model_3.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] = val[model_3
                                            .CrmExtendedProperty
                                            .CRM_PARENT_ACCOUNT_ID],
                                        _a[model_3.CrmExtendedProperty.CRM_LINK_STATE] = model_3.CrmExtendedProperty
                                            .CRM_LINK_STATE_LINKED,
                                        // Some crm specific fields
                                        _a.firstname = val.firstname ? val.firstname : '',
                                        _a.lastname = val.lastname ? val.lastname : '',
                                        _a
                                    ));
                                    var _a;
                                }),
                                _c
                            )),
                        loaded: true,
                        totalCount: payload.totalCount
                    });
            case actionTypes_2.default.CRM_LOAD_FAIL:
            {
                return Object.assign({},
                    state,
                    {
                        error: true
                    });
            }
            case actionTypes_2.default.UPDATE_COUNT:
                return Object.assign({},
                    state,
                    {
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
                return Object.assign({},
                    state,
                    {
                        page: payload
                    });
            case actionTypes_2.default.CHANGE_PAGE_SIZE:
                return Object.assign({},
                    state,
                    {
                        pageSize: payload,
                        pages: {},
                        page: 0
                    });
            case actionTypes_2.default.CHANGE_ORDER:
                return Object.assign({},
                    state,
                    {
                        orderBy: state.orderBy.column === payload
                            ? {
                                column: payload,
                                stage: state.orderBy.stage == 1 ? 2 : 1
                            }
                            : { column: payload, stage: 1 },
                        pages: {},
                        search: ''
                    });
            case actionTypes_2.default.SEARCH:
                return Object.assign({},
                    state,
                    {
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
                } else {
                    return Object.assign({},
                        state,
                        {
                            metadata: state.metadata.slice(0, columnIndex).concat([
                                {
                                    column: state.metadata[columnIndex].column,
                                    key: state.metadata[columnIndex].key,
                                    active: !state.metadata[columnIndex].active,
                                    filterable: state.metadata[columnIndex].filterable
                                }
                            ]).concat(state.metadata.slice(columnIndex + 1))
                        });
                }
            case actionTypes_2.default.FOCUS_CONTACT:
                return Object.assign({},
                    state,
                    {
                        focused: {
                            active: true,
                            index: payload,
                            page: state.page
                        }
                    });
            case actionTypes_2.default.CLOSE_CONTEXT:
                return Object.assign({},
                    state,
                    {
                        focused: {
                            active: false,
                            index: null,
                            page: null
                        },
                        showLinkContext: false,
                    });
            // Account linking
            case actionTypes_2.default.SHOW_LINK_CONTEXT:
                return Object.assign({},
                    state,
                    {
                        // Set out focusedContactId to null so it will hide that context
                        focused: {
                            active: false,
                            index: null,
                            page: null
                        },
                        showLinkContext: true
                    });
            case actionTypes_2.default.HIDE_LINK_CONTEXT:
                return Object.assign({},
                    state,
                    {
                        focused: {
                            active: false,
                            index: null,
                            page: null
                        },
                        showLinkContext: false,
                    });
            case actionTypes_2.default.ACCOUNT_LOAD_SUCCESS:
                return Object.assign({},
                    state,
                    {
                        linkAccounts: payload,
                        linkAccountsLoaded: true
                    });
            case actionTypes_2.default.SELECT_ACCOUNT:
                return Object.assign({},
                    state,
                    {
                        selectedAccount: payload,
                        selectedAccountId: payload.accountid
                    });
            // This looping through every contact in the table needs to be updated to only update the selected index. This is ineffecient.
            case actionTypes_2.default.UPDATE_ACCOUNT:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_d = {},
                                _d[state.page] = state.pages[state.page].map(function(val, index) {
                                    return (Object.assign({},
                                        val,
                                        {
                                            crmParentAccountId:
                                                payload.index == index ? payload.id : val.crmParentAccountId,
                                            CompanyName: payload.index == index ? payload.companyName : val.CompanyName,
                                        }));
                                }),
                                _d
                            ))
                    });
            case actionTypes_2.default.UPDATE_CONTACT_CRMID:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_e = {},
                                _e[state.page] = state.pages[state.page].map(function(val, index) {
                                    return (Object.assign({},
                                        val,
                                        (_a = {},
                                            _a[model_3.CrmExtendedProperty
                                                .CRM_ID] = payload.index == index ? payload.id : val.crmId,
                                            _a
                                        )));
                                    var _a;
                                }),
                                _e
                            ))
                    });
            case actionTypes_2.default.UPDATE_CONTACT_ACTIVITY:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_f = {},
                                _f[state.page] = state.pages[state.page].map(function(val, index) {
                                    return (Object.assign({},
                                        val,
                                        (_a = {},
                                            _a[payload.activityKey] = payload.index == index ? payload.activity : null,
                                            _a
                                        )));
                                    var _a;
                                }),
                                _f
                            ))
                    });
            case actionTypes_2.default.UPDATE_CONTACT:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_g = {},
                                _g[state.page] = state.pages[state.page]
                                    .map(function(val, index) {
                                        return (Object.assign({}, val, payload.index == index ? payload.values : {}));
                                    }),
                                _g
                            ))
                    });
            case actionTypes_2.default.SHOW_REFRESH_PANE:
                return Object.assign({},
                    state,
                    {
                        showRefreshPane: true,
                    });
            case actionTypes_2.default.HIDE_REFRESH_PANE:
                return Object.assign({},
                    state,
                    {
                        showRefreshPane: false,
                    });
            // Filters
            case actionTypes_2.default.TOGGLE_FILTER:
                return Object.assign({},
                    state,
                    {
                        showFilter: !state.showFilter,
                        filters: !state.showFilter ? state.filters : {}
                    });
            case actionTypes_2.default.CHANGE_FILTER:
                return Object.assign({},
                    state,
                    {
                        filters: Object.assign({},
                            state.filters,
                            (_h = {},
                                _h[payload.filter] = payload.value,
                                _h
                            ))
                    });
            case actionTypes_2.default.TOGGLE_SELECT:
                var page = state.page;
                var target = payload;
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_j = {},
                                _j[page] = state.pages[page].slice(0, target).concat([
                                    Object.assign({},
                                        state.pages[page][target],
                                        {
                                            selected: !state.pages[page][target].selected
                                        })
                                ]).concat(state.pages[page].slice(target + 1)),
                                _j
                            ))
                    });
            case actionTypes_2.default.TOGGLE_PAGE_SELECT:
                var selected_1 = state.pages[state.page].filter(function(x) { return x.selected === false; }).length ===
                    0;
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_k = {},
                                _k[state.page] = state.pages[state.page].map(function(val) {
                                    return (Object.assign({},
                                        val,
                                        {
                                            selected: !selected_1
                                        }));
                                }),
                                _k
                            ))
                    });
            case actionTypes_2.default.TOGGLE_SETTINGS:
                return Object.assign({},
                    state,
                    {
                        showSettings: !state.showSettings
                    });
            case actionTypes_2.default.UPDATED_CONTACT_STATUS:
                return Object.assign({},
                    state,
                    {
                        pages: Object.assign({},
                            state.pages,
                            (_l = {},
                                _l[state.page] = state.pages[state.page].map(function(val, index) {
                                    return (Object.assign({},
                                        val,
                                        {
                                            crmLinkState: payload.index == index ? payload.value : val.crmLinkState
                                        }));
                                }),
                                _l
                            ))
                    });
            case actionTypes_2.default.TRANSACTION_START:
                return Object.assign({},
                    state,
                    {
                        transaction: {
                            showLoading: true,
                            progressCurrent: 0,
                            progressMax: payload.progressMax,
                            type: payload.type
                        }
                    });
            case actionTypes_2.default.TRANSACTION_SUCCESS:
                return Object.assign({},
                    state,
                    {
                        transaction: {
                            showLoading: false
                        }
                    });
            case actionTypes_2.default.UPDATE_TRANSACTION:
                return Object.assign({},
                    state,
                    {
                        transaction: Object.assign({},
                            state.transaction,
                            {
                                progressCurrent: payload,
                            })
                    });
            // Alerts
            case actionTypes_2.default.SHOW_ALERT:
                return Object.assign({},
                    state,
                    {
                        alert: {
                            active: true,
                            data: payload
                        }
                    });
            case actionTypes_2.default.CLOSE_ALERT:
                return Object.assign({},
                    state,
                    {
                        alert: {
                            active: false,
                            data: null
                        }
                    });
            // Confirm Dialogs
            case actionTypes_2.default.SHOW_CONFIRM:
                return Object.assign({},
                    state,
                    {
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
                return Object.assign({},
                    state,
                    {
                        confirm: {
                            active: false
                        }
                    });
            case actionTypes_2.default.REFRESH:
                return Object.assign({},
                    state,
                    {
                        pages: {},
                        page: 0
                    });
            case actionTypes_2.default.CHANGE_VIEW:
                return Object.assign({},
                    state,
                    {
                        contactView: payload
                    });
            case actionTypes_2.default.CHANGE_TRACKED_FILTER:
                return Object.assign({},
                    state,
                    {
                        selectedView: payload
                    });
            case actionTypes_2.default.SHOW_UNTRACK_ALERT:
                return Object.assign({},
                    state,
                    {
                        untrackAlert: {
                            active: true,
                            focused: payload.focused
                        }
                    });
            case actionTypes_2.default.CLOSE_UNTRACK_ALERT:
                return Object.assign({},
                    state,
                    {
                        untrackAlert: {
                            active: false,
                            focused: null
                        }
                    });
            default:
                return state;
            }
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        }

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = default_1;
    });
define("modules/data/contacts/index",
    [
        "require", "exports", "modules/data/contacts/actions", "modules/data/contacts/actionTypes",
        "modules/data/contacts/reducer"
    ],
    function(require, exports, actions_1, actionTypes_3, reducer_1) {
        "use strict";
        exports.actions = actions_1.default;
        exports.actionTypes = actionTypes_3.default;
        // export { default as model } from './model';
        exports.reducer = reducer_1.default;
    });
define("modules/client/app/actionTypes",
    ["require", "exports"],
    function(require, exports) {
        "use strict";
        exports.INITIALIZE_APP = 'INITIALIZE_APP';
        exports.CRM_ACCESS_KEY_ACQUIRED = 'CRM_ACCESS_KEY_ACQUIRED';
        exports.CALLBACK_TOKEN_ACQUIRED = 'CALLBACK_TOKEN_ACQUIRED';
        exports.SWITCH_PAGE = 'SWITCH_PAGE';
    });
define("modules/client/app/model",
    ["require", "exports"],
    function(require, exports) {
        "use strict";
        var OUTLOOK_PATH = 'OUTLOOK_PATH';
        var CRM_PATH = 'CRM_PATH';
        exports.ROUTE_PATHS = {
            OUTLOOK_PATH: OUTLOOK_PATH,
            CRM_PATH: CRM_PATH
        };
    });
define("modules/client/app/reducer",
    ["require", "exports", "modules/client/app/actionTypes", "modules/client/app/model"],
    function(require, exports, actionTypes, model_5) {
        "use strict";
        var initialState = {
            page: model_5.ROUTE_PATHS.OUTLOOK_PATH,
            loaded: false
        };

        /** State reducer for app. */
        function reducer(state, _a) {
            if (state === void 0) {
                state = initialState;
            }
            var type = _a.type, payload = _a.payload;
            switch (type) {
            case actionTypes.INITIALIZE_APP:
                return Object.assign({},
                    state,
                    payload,
                    {
                        loaded: true
                    });
            case actionTypes.CRM_ACCESS_KEY_ACQUIRED:
                return Object.assign({},
                    state,
                    {
                        crmAccessKey: payload
                    });
            case actionTypes.CALLBACK_TOKEN_ACQUIRED:
                return Object.assign({},
                    state,
                    {
                        callbackToken: payload
                    });
            case actionTypes.SWITCH_PAGE:
                return Object.assign({},
                    state,
                    {
                        page: payload
                    });
            default:
                return state;
            }
        }

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = reducer;;
    });
define("modules/client/app/index",
    ["require", "exports", "modules/client/app/reducer"],
    function(require, exports, reducer_2) {
        "use strict";
        exports.reducer = reducer_2.default;
    });
define("reducers/rootReducer",
    ["require", "exports", "modules/data/contacts/index", "modules/client/app/index"],
    function(require, exports, contacts_1, app_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = {
            outlook: contacts_1.reducer,
            app: app_1.reducer
        };
    });
define("modules/client/app/actions",
    [
        "require", "exports", "modules/client/app/actionTypes", "lib/dispatcherHandler",
        "modules/data/contacts/actions",
        "lib/resources"
    ],
    function(require, exports, actionTypes, dispatcherHandler_2, actions_2, resources_2) {
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

        /** Action creator entry point to initialize the entire application. */
        function initializeApp() {
            return function(dispatch, getState) {
                dispatcherHandler_2.registerListener();
                dispatch(registerRibbonFunctions());
                dispatcherHandler_2.getResourceStrings(resources_2.resourceStrings,
                    function(response) {
                        var values = JSON.parse(response.functionArguments[1]).values;
                        resources_2.default.initialize(values);
                    });
                dispatcherHandler_2.getCrmAccessKey(function(response) {
                    var crmAccessKey = JSON.parse(response.functionArguments[1]).requestSecurityTokenResponse;
                    var result = crmAccessKey.replace('<RequestOAuthSecurityTokenResponse><AccessToken>', '');
                    result = result.substring(0, result.indexOf('</AccessToken><EncodedAccessToken>'));
                    dispatch(acquiredCrmAccessKey(result));
                });
                dispatcherHandler_2.getCallbackTokenAsync(function(response) {
                    var value = JSON.parse(response.functionArguments[1]).onRequestCallbackTokenAsyncResponse;
                    // Since the dispatcher doesn't actually let us know if it succeeds or not, we must test its type.
                    if (typeof value == 'string') {
                        dispatch(acquiredCallbackToken(value));
                    }
                    dispatcherHandler_2.sendTelemetryEvent({
                        name: 'mailapp_module_init',
                        data: {
                            type: 'mailapp_module_init'
                        }
                    });
                    // If it's some error object. This is unsupported, try old auth?
                    dispatch({
                        type: actionTypes.INITIALIZE_APP,
                        payload: {}
                    });
                });
            };
        }

        exports.initializeApp = initializeApp;

        function registerRibbonFunctions() {
            var _this = this;
            return function(dispatch, getState) {
                var buildRibbonHandler = function(actionCreator) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return function(event) {
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
                parent.trackContacts = buildRibbonHandler(actions_2.default.attemptTrack,
                    actions_2.ContactTarget.SELECTED,
                    { detectDuplicates: true });
                parent.untrackContacts = buildRibbonHandler(actions_2.default.showSelectedUntrackAlert);
                parent.setAccount = buildRibbonHandler(actions_2.default.showLinkContext);
                parent.sendEmail = buildRibbonHandler(actions_2.default.emailSelectedContacts);
                parent.sendAppointment = buildRibbonHandler(actions_2.default.sendAppointment);
            };
        }

        function refreshCallbackToken() {
            return function(dispatch) {
                dispatcherHandler_2.getCallbackTokenAsync(function(response) {
                    var value = JSON.parse(response.functionArguments[1]).onRequestCallbackTokenAsyncResponse;
                    // Since the dispatcher doesn't actually let us know if it succeeds or not, we must test its type.
                    if (typeof value == 'string') {
                        dispatch(acquiredCallbackToken(value));
                    }
                });
            };
        }

        function acquiredCrmAccessKey(key) {
            return { type: actionTypes.CRM_ACCESS_KEY_ACQUIRED, payload: key };
        }

        function acquiredCallbackToken(token) {
            return { type: actionTypes.CALLBACK_TOKEN_ACQUIRED, payload: token };
        }

        function switchPage(key) {
            return { type: actionTypes.SWITCH_PAGE, payload: key };
        }

        exports.switchPage = switchPage;
    });
define("components/Alert",
    ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_1, redux_1, resources_3, actions_3) {
        "use strict";
        /**
         * Class representing an alert.
         * @extends React.Component
        */
        var Alert = (function(_super) {
            __extends(Alert, _super);

            function Alert() {
                _super.apply(this, arguments);
            }

            Alert.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { className: "alertContainer" },
                    React.createElement("div",
                        {
                            style: {
                                width: '500px',
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '2px solid #eee'
                            }
                        },
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("span", null, resources_3.default.getString('Brand_CRM'))),
                        React.createElement("div",
                            { style: { height: '100%', backgroundColor: 'white', padding: '8px' } },
                            this.props.data),
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("div",
                                { style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' } },
                                React.createElement("button",
                                    { onClick: function() { return _this.props.closeAlert(); } },
                                    resources_3.default.getString('MailApp_Module_Alert_Button_OK')))))));
            };
            return Alert;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                active: state.outlook.alert.active,
                data: state.outlook.alert.data
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                closeAlert: redux_1.bindActionCreators(actions_3.default.closeAlert, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Alert);
    });
define("components/Confirm",
    ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_2, resources_4, actions_4) {
        "use strict";
        /**
         * Class representing a confirm dialog.
         * @extends React.Component
        */
        var Confirm = (function(_super) {
            __extends(Confirm, _super);

            function Confirm() {
                _super.apply(this, arguments);
            }

            Confirm.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { className: "alertContainer" },
                    React.createElement("div",
                        {
                            style: {
                                width: '500px',
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '2px solid #eee'
                            }
                        },
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("span", null, resources_4.default.getString('Brand_CRM'))),
                        React.createElement("div",
                            { style: { height: '100%', backgroundColor: 'white', padding: '8px' } },
                            React.createElement("div",
                                null,
                                this.props.messages &&
                                this.props.messages.length &&
                                this.props.messages.map(function(message, i) {
                                    return React.createElement("p", { key: i }, message);
                                }))),
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("div",
                                { style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' } },
                                React.createElement("button",
                                    {
                                        style: { marginRight: '8px' },
                                        onClick: function(e) {
                                            return _this.props.close() &&
                                                _this.props.confirmHandler &&
                                                _this.props.confirmHandler();
                                        }
                                    },
                                    this.props.confirmButtonText),
                                React.createElement("button",
                                    {
                                        style: { marginRight: '8px' },
                                        onClick: function(e) {
                                            return _this.props.close() &&
                                                _this.props.denyHandler &&
                                                _this.props.denyHandler();
                                        }
                                    },
                                    this.props.denyButtonText))))));
            };
            return Confirm;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                messages: state.outlook.confirm.messages,
                confirmHandler: state.outlook.confirm.confirmHandler,
                denyHandler: state.outlook.confirm.denyHandler,
                confirmButtonText: state.outlook.confirm.confirmButtonText,
                denyButtonText: state.outlook.confirm.denyButtonText
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                close: function() { return (dispatch(actions_4.default.closeConfirm()) || true); }
// make close() return true so we can chain it above
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_2.connect(mapStateToProps, mapDispatchToProps)(Confirm);
    });
define("components/UntrackAlert",
    ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_3, redux_2, resources_5, actions_5) {
        "use strict";
        /**
         * Class representing an alert.
         * @extends React.Component
        */
        var UntrackAlert = (function(_super) {
            __extends(UntrackAlert, _super);

            function UntrackAlert() {
                _super.apply(this, arguments);
            }

            UntrackAlert.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { className: "alertContainer" },
                    React.createElement("div",
                        {
                            style: {
                                width: '500px',
                                height: '300px',
                                display: 'flex',
                                flexDirection: 'column',
                                border: '2px solid #eee'
                            }
                        },
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("span", null, resources_5.default.getString('Brand_CRM'))),
                        React.createElement("div",
                            { style: { height: '100%', backgroundColor: 'white', padding: '8px' } },
                            React.createElement("div",
                                null,
                                resources_5.default.getString('MailApp_Module_Alert_Single_Untrack_Title')),
                            React.createElement("div",
                                null,
                                resources_5.default.getString('MailApp_Module_Alert_Single_Untrack_Message'))),
                        React.createElement("div",
                            { style: { height: '40px', backgroundColor: '#eee', padding: '8px' } },
                            React.createElement("div",
                                { style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: '#eee' } },
                                React.createElement("button",
                                    {
                                        style: { marginRight: '8px' },
                                        onClick: function(e) {
                                            return _this.props.focused
                                                ? _this.props.untrackFocusedContact(e, true)
                                                : _this.props.untrackSelectedContacts(true);
                                        }
                                    },
                                    resources_5.default.getString('MailApp_Module_Alert_Untrack_Button_Delete')),
                                React.createElement("button",
                                    {
                                        style: { marginRight: '8px' },
                                        onClick: function(e) {
                                            return _this.props.focused
                                                ? _this.props.untrackFocusedContact(e, false)
                                                : _this.props.untrackSelectedContacts(false);
                                        }
                                    },
                                    resources_5.default.getString('MailApp_Module_Alert_Untrack_Button_Keep')),
                                React.createElement("button",
                                    { onClick: function() { return _this.props.closeUntrackAlert(); } },
                                    resources_5.default.getString('MailApp_Module_Alert_Button_Cancel')))))));
            };
            return UntrackAlert;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                active: state.outlook.untrackAlert.active,
                focused: state.outlook.untrackAlert.focused
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                untrackFocusedContact: redux_2.bindActionCreators(actions_5.default.untrackFocusedContact, dispatch),
                untrackSelectedContacts: redux_2
                    .bindActionCreators(actions_5.default.untrackSelectedContacts, dispatch),
                closeUntrackAlert: redux_2.bindActionCreators(actions_5.default.closeUntrackAlert, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_3.connect(mapStateToProps, mapDispatchToProps)(UntrackAlert);
    });
define("components/TabControl",
    [
        "require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions",
        "modules/data/contacts/model"
    ],
    function(require, exports, React, react_redux_4, redux_3, resources_6, actions_6, model_6) {
        "use strict";
        /**
         * Class representing the bottom control of the contacts table.
         * @extends React.Component
        */
        var TabControl = (function(_super) {
            __extends(TabControl, _super);

            function TabControl() {
                _super.apply(this, arguments);
            }

            TabControl.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { style: { fontSize: '18px', lineHeight: 1.2, fontWeight: 400, paddingBottom: '5px' } },
                    React.createElement("a",
                        {
                            onClick: function() { return _this.props.changeView(model_6.ContactViewMode.Exchange); },
                            style: {
                                color: this.props.contactView == model_6.ContactViewMode.Exchange ? '#0072c6' : '#666',
                                marginRight: '20px'
                            }
                        },
                        resources_6.default.getString('MailApp_Module_Outlook_Contacts')),
                    React.createElement("a",
                        {
                            onClick: function() { return _this.props.changeView(model_6.ContactViewMode.CRM); },
                            style: { color: this.props.contactView == model_6.ContactViewMode.CRM ? '#0072c6' : '#666' }
                        },
                        resources_6.default.getString('MailApp_Module_Dymamics_365_Contacts'))));
            };
            return TabControl;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                contactView: state.outlook.contactView
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                changeView: redux_3.bindActionCreators(actions_6.default.changeView, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_4.connect(mapStateToProps, mapDispatchToProps)(TabControl);
    });
define("components/ContactTableSearch",
    ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_5, resources_7, actions_7) {
        "use strict";
        /**
         * Class representing the search input of the top control.
         * @extends React.Component
        */
        var ContactTableSearch = (function(_super) {
            __extends(ContactTableSearch, _super);

            function ContactTableSearch(props) {
                _super.call(this, props);
                this.state = {
                    inputText: this.props.searchValue
                };
            }

            ContactTableSearch.prototype.submit = function(e) {
                this.props.search(this.state.inputText);
                e.preventDefault();
                return false;
            };
            ContactTableSearch.prototype.handleChange = function(e) {
                this.setState({ inputText: e.target.value });
            };
            ContactTableSearch.prototype.render = function() {
                var _this = this;
                return (React.createElement("form",
                    { onSubmit: function(e) { return _this.submit(e); }, style: { display: 'inline' } },
                    React.createElement("input",
                    {
                        style: { border: '1px solid #ccc' },
                        placeholder: resources_7.default.getString('MailApp_Module_Search'),
                        onChange: this.handleChange.bind(this),
                        value: this.state.inputText
                    })));
            };
            return ContactTableSearch;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                searchValue: state.outlook.search
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                search: function(value) {
                    return dispatch(actions_7.default.search(value));
                }
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_5.connect(mapStateToProps, mapDispatchToProps)(ContactTableSearch);
    });
define("components/ContactTableFieldCustomizer",
    ["require", "exports", 'react', 'react-redux', 'redux', "modules/data/contacts/actions", "lib/resources"],
    function(require, exports, React, react_redux_6, redux_4, actions_8, resources_8) {
        "use strict";
        /**
         * Class representing the column visibility customizer.
         * @extends React.Component
        */
        var ContactTableFieldCustomizer = (function(_super) {
            __extends(ContactTableFieldCustomizer, _super);

            function ContactTableFieldCustomizer() {
                _super.apply(this, arguments);
            }

            ContactTableFieldCustomizer.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    {
                        id: "fieldCustomizer",
                        className: "fieldCustomizer",
                        style: { display: this.props.showSettings ? 'inline-block' : 'none', tabIndex: 0 },
                        onBlur: function(e) { return _this.props.toggleSettings(e); }
                    },
                    React.createElement("div", null, resources_8.default.getString('MailApp_Module_Column_Title')),
                    this.props.metadata.map(function(item, i) {
                        return React.createElement("div",
                            { key: i },
                            React.createElement("label",
                                null,
                                React.createElement("input",
                                {
                                    type: "checkbox",
                                    checked: item.active,
                                    onChange: function() { return _this.props.toggleColumn(item.key); }
                                }),
                                React.createElement("span", null, item.column)),
                            React.createElement("br", null));
                    })));
            };
            return ContactTableFieldCustomizer;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                showSettings: state.outlook.showSettings,
                metadata: state.outlook.metadata
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                toggleColumn: function(key) {
                    return dispatch(actions_8.default.toggleColumn(key));
                },
                toggleSettings: redux_4.bindActionCreators(actions_8.default.toggleSettings, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_6.connect(mapStateToProps, mapDispatchToProps)(ContactTableFieldCustomizer);
    });
define("components/ContactTableTopControl",
    [
        "require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions",
        "modules/data/contacts/model", "components/ContactTableSearch", "components/ContactTableFieldCustomizer"
    ],
    function(require,
        exports,
        React,
        react_redux_7,
        redux_5,
        resources_9,
        actions_9,
        model_7,
        ContactTableSearch_1,
        ContactTableFieldCustomizer_1) {
        "use strict";
        /**
         * Class representing the top control of the contacts table.
         * @extends React.Component
        */
        var ContactTableTopControl = (function(_super) {
            __extends(ContactTableTopControl, _super);

            function ContactTableTopControl() {
                _super.apply(this, arguments);
            }

            ContactTableTopControl.prototype.selectControl = function() {
                var _this = this;
                return (React.createElement("select",
                    {
                        value: this.props.selectedView,
                        onChange: function(e) { return _this.props.changeTrackedFilter(e.target.value); },
                        style: { border: 0, fontWeight: 'bold', lineHeight: '1.2', fontSize: '14px' }
                    },
                    React.createElement("option",
                        { value: model_7.SelectedViewMode.All },
                        resources_9.default.getString('MailApp_Module_Tracking_Filter_All')),
                    React.createElement("option",
                        { value: model_7.SelectedViewMode.Tracked },
                        resources_9.default.getString('MailApp_Module_Tracking_Filter_Tracked')),
                    React.createElement("option",
                        { value: model_7.SelectedViewMode.Untracked },
                        resources_9.default.getString('MailApp_Module_Tracking_Filter_Untracked'))));
            };
            ContactTableTopControl.prototype.specialControls = function() {
                var _this = this;
                return (React.createElement("span",
                    null,
                    React.createElement(ContactTableSearch_1.default, null),
                    React.createElement("span", { style: { color: '#ccc' } }, " | "),
                    React.createElement("a",
                        {
                            className: this.props.showFilter ? 'icn filterCancel tooltip' : 'icn filter tooltip',
                            onClick: function(e) { return _this.props.toggleFilter(e); }
                        },
                        React.createElement("span",
                            { className: "tooltiptext" },
                            this.props.showFilter
                            ? resources_9.default.getString('MailApp_Module_Filter_Hide_Tooltip')
                            : resources_9.default.getString('MailApp_Module_Filter_Show_Tooltip'))),
                    React.createElement("span", { style: { color: '#ccc' } }, " | "),
                    React.createElement("span",
                        { style: { position: 'relative' } },
                        React.createElement("a",
                            {
                                className: "icn settings tooltip",
                                onClick: function(e) { return _this.props.toggleSettings(e); }
                            },
                            React.createElement("span",
                                { className: "tooltiptext" },
                                this.props.showSettings
                                ? resources_9.default.getString('MailApp_Module_Column_Hide_Tooltip')
                                : resources_9.default.getString('MailApp_Module_Column_Show_Tooltip'))),
                        React.createElement(ContactTableFieldCustomizer_1.default, null)),
                    React.createElement("span", { style: { color: '#ccc' } }, " | ")));
            };
            ContactTableTopControl.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { style: { display: 'flex', justifyContent: 'space-between', padding: '8px' } },
                    React.createElement("span",
                        null,
                        this.props.contactView === model_7.ContactViewMode.Exchange ? this.selectControl() : null),
                    React.createElement("span",
                        null,
                        this.props.contactView === model_7.ContactViewMode.Exchange ? this.specialControls() : null,
                        React.createElement("a",
                            {
                                className: "icn refresh tooltip",
                                onClick: function(e) { return _this.props.refresh(e); }
                            },
                            React.createElement("span",
                                { className: "tooltiptext" },
                                resources_9.default.getString('MailApp_Module_Refresh_Tooltip'))))));
            };
            return ContactTableTopControl;
        }(React.Component));
        var mapStateToProps = function(state) {
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
        var mapDispatchToProps = function(dispatch) {
            return {
                changeTrackedFilter: redux_5.bindActionCreators(actions_9.default.changeTrackedFilter, dispatch),
                toggleFilter: redux_5.bindActionCreators(actions_9.default.toggleFilter, dispatch),
                toggleSettings: redux_5.bindActionCreators(actions_9.default.toggleSettings, dispatch),
                refresh: redux_5.bindActionCreators(actions_9.default.refresh, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_7.connect(mapStateToProps, mapDispatchToProps)(ContactTableTopControl);
    });
define("components/ContactTableLimitControl",
    ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_8, resources_10, actions_10) {
        "use strict";
        /**
         * Class representing the page limit control dropdown.
         * @extends React.Component
        */
        var ContactTableLimitControl = (function(_super) {
            __extends(ContactTableLimitControl, _super);

            function ContactTableLimitControl(props) {
                _super.call(this, props);
            }

            ContactTableLimitControl.prototype.change = function(e) {
                this.props.changePageSize(e.target.value);
            };
            ContactTableLimitControl.prototype.render = function() {
                return (React.createElement("span",
                    { style: { paddingLeft: '8px' } },
                    React.createElement("span",
                        null,
                        resources_10.default.getString('MailApp_Module_Rows_To_Show'),
                        " "),
                    React.createElement("select",
                        { value: this.props.pageSize, onChange: this.change.bind(this) },
                        React.createElement("option", { value: "10" }, "10"),
                        React.createElement("option", { value: "15" }, "15"),
                        React.createElement("option", { value: "20" }, "20"),
                        React.createElement("option", { value: "25" }, "25")),
                    React.createElement("span",
                        null,
                        ' ',
                        (this.props.pageSize * this.props.page) + 1,
                        ' - ',
                        Math.min((this.props.pageSize * this.props.page) + this.props.pageSize, this.props.count),
                        ' | ',
                        this.props.count)));
            };
            return ContactTableLimitControl;
        }(React.Component));
        var mapState = function(state) {
            return {
                pageSize: state.outlook.pageSize,
                page: state.outlook.page,
                count: state.outlook.totalCount
            };
        };
        var mapDispatch = function(dispatch) {
            return {
                changePageSize: function(value) {
                    return dispatch(actions_10.default.changePageSize(value));
                }
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_8.connect(mapState, mapDispatch)(ContactTableLimitControl);
    });
define("components/ContactTablePagingControl",
    ["require", "exports", 'react', 'react-redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_9, resources_11, actions_ts_1) {
        "use strict";
        /**
         * Class representing the paging control.
         * @extends React.Component
        */
        var ContactTablePagingControl = (function(_super) {
            __extends(ContactTablePagingControl, _super);

            function ContactTablePagingControl() {
                _super.apply(this, arguments);
            }

            ContactTablePagingControl.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    null,
                    React.createElement("a",
                        {
                            style: {
                                paddingRight: '15px',
                                color: this.props.page == 0 ? '#999' : '#444',
                                cursor: this.props.page == 0 ? 'default' : 'pointer'
                            },
                            onClick: function() { return _this.props.changePage(0); }
                        },
                        resources_11.default.getString('MailApp_Module_First_Page')),
                    React.createElement("a",
                        {
                            style: {
                                paddingRight: '15px',
                                color: this.props.page == 0 ? '#999' : '#444',
                                cursor: this.props.page == 0 ? 'default' : 'pointer'
                            },
                            onClick: function() { return _this.props.changePage(_this.props.page - 1); }
                        },
                        resources_11.default.getString('MailApp_Module_Previous')),
                    React.createElement("a",
                        {
                            style: {
                                paddingRight: '15px',
                                color: ((this.props.page + 1) * this.props.pageSize) >= this.props.totalCount
                                    ? '#999'
                                    : '#444',
                                cursor: ((this.props.page + 1) * this.props.pageSize) >= this.props.totalCount
                                    ? 'default'
                                    : 'pointer'
                            },
                            onClick: function() { return _this.props.changePage(_this.props.page + 1); }
                        },
                        resources_11.default.getString('MailApp_Module_Next')),
                    React.createElement("a",
                        {
                            style: {
                                paddingRight: '15px',
                                color: this.props.page == (Math.floor(this.props.totalCount / this.props.pageSize))
                                    ? '#999'
                                    : '#444',
                                cursor: this.props.page == (Math.floor(this.props.totalCount / this.props.pageSize))
                                    ? 'default'
                                    : 'pointer'
                            },
                            onClick: function() {
                                return _this.props
                                    .changePage(Math.floor(_this.props.totalCount / _this.props.pageSize));
                            }
                        },
                        "Last")));
            };
            return ContactTablePagingControl;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                page: state.outlook.page,
                pageSize: state.outlook.pageSize,
                totalCount: state.outlook.totalCount
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                changePage: function(value) { return dispatch(actions_ts_1.default.changePage(value)); }
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_9.connect(mapStateToProps, mapDispatchToProps)(ContactTablePagingControl);
    });
define("components/ContactTableBottomControl",
    [
        "require", "exports", 'react', 'react-redux', "components/ContactTableLimitControl",
        "components/ContactTablePagingControl"
    ],
    function(require, exports, React, react_redux_10, ContactTableLimitControl_1, ContactTablePagingControl_1) {
        "use strict";
        /**
         * Class representing the bottom control of the contacts table.
         * @extends React.Component
        */
        var ContactTableBottomControl = (function(_super) {
            __extends(ContactTableBottomControl, _super);

            function ContactTableBottomControl() {
                _super.apply(this, arguments);
            }

            ContactTableBottomControl.prototype.render = function() {
                return (React.createElement("div",
                    {
                        className: "bottomControl",
                        style: {
                            display: 'flex',
                            'justifyContent': 'space-between',
                            alignItems: 'center',
                            backgroundColor: '#eee',
                            height: '40px'
                        }
                    },
                    React.createElement(ContactTableLimitControl_1.default, null),
                    React.createElement(ContactTablePagingControl_1.default, null)));
            };
            return ContactTableBottomControl;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {};
        };
        var mapDispatchToProps = function(dispatch) {
            return {};
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_10.connect(mapStateToProps, mapDispatchToProps)(ContactTableBottomControl);
    });
define("components/ContactTableFilter",
    ["require", "exports", 'react', 'react-redux', 'redux', "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_11, redux_6, actions_11) {
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
        var ContactTableFilter = (function(_super) {
            __extends(ContactTableFilter, _super);

            function ContactTableFilter() {
                _super.apply(this, arguments);
            }

            ContactTableFilter.prototype.activateFilter = function(e) {
                e.preventDefault();
                this.props.activateFilter();
                return false;
            };
            ContactTableFilter.prototype.onChange = function(e, filter) {
                this.props.changeFilter(filter, e.target.value);
            };
            ContactTableFilter.prototype.render = function() {
                var _this = this;
                return (React.createElement("tr",
                    {
                        style: {
                            display: this.props.showFilter ? 'table-row' : 'none',
                            backgroundColor: '#CBE2F5',
                            pointer: 'default'
                        }
                    },
                    React.createElement("td", null),
                    React.createElement("td", null),
                    this.props.metadata.filter(function(e) { return e.active; }).map(function(meta, k) {
                        if (meta.filterable === true) {
                            return (React.createElement("td",
                                { key: k },
                                React.createElement("form",
                                    { onSubmit: function(e) { return _this.activateFilter(e); } },
                                    React.createElement("input",
                                    {
                                        value: _this.props.filters[meta.key],
                                        style: { width: '120px' },
                                        onChange: function(e) { return _this.onChange(e, meta.key); },
                                        type: "text"
                                    }))));
                        } else {
                            return (React.createElement("td", { key: k, style: { whiteSpace: 'nowrap' } }));
                        }
                    })));
            };
            return ContactTableFilter;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                filters: state.outlook.filters,
                showFilter: state.outlook.showFilter,
                metadata: state.outlook.metadata
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                activateFilter: redux_6.bindActionCreators(actions_11.default.activateFilter, dispatch),
                changeFilter: redux_6.bindActionCreators(actions_11.default.changeFilter, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_11.connect(mapStateToProps, mapDispatchToProps)(ContactTableFilter);
    });
define("components/ContactTable",
    [
        "require", "exports", 'react', 'react-redux', 'redux', "modules/data/contacts/index",
        "components/ContactTableFilter", "modules/data/contacts/model", "lib/resources"
    ],
    function(require,
        exports,
        React,
        react_redux_12,
        redux_7,
        contacts_2,
        ContactTableFilter_1,
        model_8,
        resources_12) {
        "use strict";
        /**
         * Class representing the contacts table.
         * @extends React.Component
        */
        var ContactTable = (function(_super) {
            __extends(ContactTable, _super);

            function ContactTable() {
                _super.apply(this, arguments);
            }

            ContactTable.prototype.componentWillMount = function() {
                this.props.actions.initialize();
            };
            ContactTable.prototype.render = function() {
                var _this = this;
                if (this.props.contacts.loaded || this.props.contacts.pages[this.props.contacts.page]) {
                    return (React.createElement("div",
                        { style: { overflow: 'auto', flexGrow: '1' } },
                        React.createElement("table",
                            null,
                            React.createElement("thead",
                                {
                                    style: {
                                        backgroundColor: '#eee',
                                        fontSize: '14px',
                                        lineHeight: 1.2,
                                        color:
                                            '#444'
                                    }
                                },
                                React.createElement("tr",
                                    null,
                                    React.createElement("th",
                                        {
                                            style: {
                                                textAlign: 'left',
                                                borderRight: '1px solid #ccc',
                                                minWidth: '20px'
                                            }
                                        },
                                        React.createElement("input",
                                        {
                                            checked: this.props.pages[this.props.page]
                                                .filter(function(x) { return x.selected === false; }).length ===
                                                0,
                                            onChange: function(e) {
                                                return _this.props.actions.togglePageSelect(e, _this.props.page);
                                            },
                                            type: "checkbox"
                                        })),
                                    React.createElement("th",
                                        { style: { textAlign: 'left', borderRight: '1px solid #ccc' } },
                                        React.createElement("span",
                                            { style: { fontWeight: 400 } },
                                            resources_12.default.getString('MailApp_Module_Tracked'))),
                                    this.props.metadata.filter(function(e) { return e.active; }).map(function(e, i) {
                                            return (React.createElement("th",
                                                {
                                                    key: i,
                                                    style: {
                                                        textAlign: 'left',
                                                        borderRight: '1px solid #ccc',
                                                        cursor: e.sortable ? 'pointer' : 'default'
                                                    },
                                                    onClick: e.sortable
                                                        ? function() { return _this.props.actions.changeOrder(e.key); }
                                                        : function() {}
                                                },
                                                React.createElement("span",
                                                    {
                                                        style: {
                                                            fontWeight: e.key === _this.props.contacts.orderBy.column
                                                                ? 'bold'
                                                                : 'normal',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    React.createElement("span", null, e.column),
                                                    (function() {
                                                        if (e.key === _this.props.contacts.orderBy.column) {
                                                            if (_this.props.contacts.orderBy.stage == 1) {
                                                                return React
                                                                    .createElement("span",
                                                                        { className: "icn uparrow" });
                                                            } else if (_this.props.contacts.orderBy.stage == 2) {
                                                                return React
                                                                    .createElement("span",
                                                                        { className: "icn downarrow" });
                                                            }
                                                        }
                                                    })())));
                                        },
                                        this))),
                            React.createElement("tbody",
                                null,
                                React.createElement(ContactTableFilter_1.default, null),
                                (function() {
                                    if (_this.props.pages[_this.props.page].length > 0) {
                                        return _this.props.pages[_this.props.page].map(function(col, i) {
                                                return (React.createElement("tr",
                                                    {
                                                        key: i,
                                                        onClick:
                                                            function() { return _this.props.actions.focusContact(i); },
                                                        style: {
                                                            backgroundColor:
                                                                i === _this.props.focused.index ? '#cbe2f3' : '#fff'
                                                        }
                                                    },
                                                    React.createElement("td",
                                                        null,
                                                        React
                                                        .createElement("input",
                                                        {
                                                            checked: col.selected,
                                                            onClick:
                                                                function(e) {
                                                                    return _this.props.actions.toggleSelect(e, i);
                                                                },
                                                            type: "checkbox"
                                                        })),
                                                    React.createElement("td",
                                                        null,
                                                        React.createElement("div",
                                                            { style: { minWidth: '80px', whiteSpace: 'nowrap' } },
                                                            (function() {
                                                                switch (col.crmLinkState) {
                                                                case model_8.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK:
                                                                    return React
                                                                        .createElement("span",
                                                                            { style: { color: '#e36625' } },
                                                                            " ",
                                                                            resources_12.default
                                                                            .getString('MailApp_Module_Pending_Track'));
                                                                case model_8.CrmExtendedProperty.CRM_LINK_STATE_LINKED:
                                                                    return React
                                                                        .createElement("span",
                                                                            { style: { color: '#1a994c' } },
                                                                            React
                                                                            .createElement("span",
                                                                                { className: "icn tracked" }),
                                                                            " ",
                                                                            resources_12.default
                                                                            .getString('MailApp_Module_Tracked'));
                                                                case model_8.CrmExtendedProperty
                                                                        .CRM_LINK_STATE_TO_UNLINK:
                                                                    return React
                                                                        .createElement("span",
                                                                            { style: { color: '#e36625' } },
                                                                            " ",
                                                                            resources_12.default
                                                                            .getString('MailApp_Module_Pending_Untrack'));
                                                                case model_8.CrmExtendedProperty
                                                                    .CRM_LINK_STATE_NOT_LINKED:
                                                                default:
                                                                    return React
                                                                        .createElement("span",
                                                                            { style: { color: '#999' } },
                                                                            React
                                                                            .createElement("span",
                                                                                { className: "icn notTracked" }),
                                                                            " ",
                                                                            resources_12.default
                                                                            .getString('MailApp_Module_Not_Tracked'));
                                                                }
                                                            })())),
                                                    _this.props.metadata.filter(function(e) { return e.active; })
                                                    .map(function(meta, j) {
                                                        switch (meta.key) {
                                                        case 'CompanyName':
                                                            if (col[model_8.CrmExtendedProperty.CRM_LINK_STATE] ===
                                                                model_8.CrmExtendedProperty.CRM_LINK_STATE_LINKED &&
                                                                col[model_8.CrmExtendedProperty
                                                                    .CRM_PARENT_ACCOUNT_ID]) {
                                                                return (React.createElement("td",
                                                                    { key: j },
                                                                    React.createElement("a",
                                                                        {
                                                                            href: "#",
                                                                            onClick: function() {
                                                                                window
                                                                                    .open("/main.aspx?etn=account&pagetype=entityrecord&id=%7B" + col.crmParentAccountId + "%7D");
                                                                            }
                                                                        },
                                                                        col[meta.key])));
                                                            } else {
                                                                return (React
                                                                    .createElement("td", { key: j }, col[meta.key]));
                                                            }
                                                        case 'BusinessPhone':
                                                            return (React
                                                                .createElement("td",
                                                                    { key: j },
                                                                    React
                                                                    .createElement("a",
                                                                        { href: "tel:" + col[meta.key] },
                                                                        col[meta.key])));
                                                        case 'EmailAddress1':
                                                            return (React
                                                                .createElement("td",
                                                                    { key: j },
                                                                    React
                                                                    .createElement("a",
                                                                        { href: "mailto:" + col[meta.key] },
                                                                        col[meta.key])));
                                                        default:
                                                            return React.createElement("td", { key: j }, col[meta.key]);
                                                        }
                                                    })));
                                            },
                                            _this);
                                    } else {
                                        return React
                                            .createElement("span",
                                                null,
                                                resources_12.default.getString('MailApp_Module_No_Contacts'));
                                    }
                                })()))));
                } else {
                    return (React.createElement("div",
                        { style: { overflow: 'auto', flexGrow: '1' } },
                        React.createElement("table",
                            null,
                            React.createElement("thead",
                                {
                                    style: {
                                        backgroundColor: '#eee',
                                        fontSize: '14px',
                                        lineHeight: 1.2,
                                        color:
                                            '#444'
                                    }
                                },
                                React.createElement("tr",
                                    null,
                                    React.createElement("th",
                                        {
                                            style: {
                                                textAlign: 'left',
                                                borderRight: '1px solid #ccc',
                                                minWidth: '20px'
                                            }
                                        },
                                        React.createElement("input", { type: "checkbox" })),
                                    React.createElement("th",
                                        { style: { textAlign: 'left', borderRight: '1px solid #ccc' } },
                                        React.createElement("span",
                                            { style: { fontWeight: 400 } },
                                            resources_12.default.getString('MailApp_Module_Tracked'))),
                                    this.props.metadata.filter(function(e) { return e.active; }).map(function(e, i) {
                                            return (React
                                                .createElement("th",
                                                    {
                                                        key: i,
                                                        style: {
                                                            textAlign: 'left',
                                                            borderRight: '1px solid #ccc',
                                                            cursor: e.sortable ? 'pointer' : 'default'
                                                        }
                                                    },
                                                    React.createElement("span",
                                                        {
                                                            style: {
                                                                fontWeight:
                                                                    e.key === _this.props.contacts.orderBy.column
                                                                        ? 'bold'
                                                                        : 'normal',
                                                                display: 'flex',
                                                                justifyContent: 'space-between'
                                                            }
                                                        },
                                                        e.column)));
                                        },
                                        this)))),
                        React.createElement("div",
                            {
                                style: {
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            },
                            React.createElement("div", { className: "progressLoader" }))));
                }
            };
            return ContactTable;
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
                actions: redux_7.bindActionCreators(contacts_2.actions, dispatch)
            };
        }

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_12.connect(mapStateToProps, mapDispatchToProps)(ContactTable);
    });
define("components/CrmContactTable",
    ["require", "exports", 'react', 'react-redux', 'redux', "modules/data/contacts/index"],
    function(require, exports, React, react_redux_13, redux_8, contacts_3) {
        "use strict";
        /**
         * Class representing the contacts table.
         * @extends React.Component
        */
        var CrmContactTable = (function(_super) {
            __extends(CrmContactTable, _super);

            function CrmContactTable() {
                _super.apply(this, arguments);
            }

            CrmContactTable.prototype.componentWillMount = function() {
                this.props.actions.loadContacts();
            };
            CrmContactTable.prototype.render = function() {
                var _this = this;
                if (this.props.contacts.loaded || this.props.contacts.pages[this.props.contacts.page]) {
                    return (React.createElement("div",
                        { style: { overflowX: 'auto', flexGrow: '1' } },
                        React.createElement("table",
                            null,
                            React.createElement("thead",
                                {
                                    style: {
                                        backgroundColor: '#eee',
                                        fontSize: '14px',
                                        lineHeight: 1.2,
                                        color:
                                            '#444'
                                    }
                                },
                                React.createElement("tr",
                                    null,
                                    React.createElement("th",
                                        {
                                            style: {
                                                textAlign: 'left',
                                                borderRight: '1px solid #ccc',
                                                minWidth: '20px'
                                            }
                                        },
                                        React.createElement("input",
                                        {
                                            checked: this.props.pages[this.props.page]
                                                .filter(function(x) { return x.selected === false; }).length ===
                                                0,
                                            onChange: function(e) {
                                                return _this.props.actions.togglePageSelect(e, _this.props.page);
                                            },
                                            type: "checkbox"
                                        })),
                                    this.props.metadata.filter(function(e) { return e.active; }).map(function(e, i) {
                                            return (React.createElement("th",
                                                {
                                                    key: i,
                                                    style: {
                                                        textAlign: 'left',
                                                        borderRight: '1px solid #ccc',
                                                        cursor: e.sortable ? 'pointer' : 'default'
                                                    },
                                                    onClick: e.sortable
                                                        ? function() { return _this.props.actions.changeOrder(e.key); }
                                                        : function() {}
                                                },
                                                React.createElement("span",
                                                    {
                                                        style: {
                                                            fontWeight: e.key === _this.props.contacts.orderBy.column
                                                                ? 'bold'
                                                                : 'normal',
                                                            display: 'flex',
                                                            justifyContent: 'space-between'
                                                        }
                                                    },
                                                    React.createElement("span", null, e.column),
                                                    (function() {
                                                        if (e.key === _this.props.contacts.orderBy.column) {
                                                            if (_this.props.contacts.orderBy.stage == 1) {
                                                                return React
                                                                    .createElement("span",
                                                                        { className: "icn downarrow" });
                                                            } else if (_this.props.contacts.orderBy.stage == 2) {
                                                                return React
                                                                    .createElement("span",
                                                                        { className: "icn uparrow" });
                                                            }
                                                        }
                                                    })())));
                                        },
                                        this))),
                            React.createElement("tbody",
                                null,
                                (function() {
                                    if (_this.props.pages[_this.props.page].length > 0) {
                                        return _this.props.pages[_this.props.page].map(function(col, i) {
                                                return (React.createElement("tr",
                                                    {
                                                        key: i,
                                                        onClick:
                                                            function() { return _this.props.actions.focusContact(i); },
                                                        style: {
                                                            backgroundColor:
                                                                i === _this.props.focused.index ? '#cbe2f3' : '#fff'
                                                        }
                                                    },
                                                    React
                                                    .createElement("td",
                                                        null,
                                                        React
                                                        .createElement("input",
                                                        {
                                                            checked: col.selected,
                                                            onClick:
                                                                function(e) {
                                                                    return _this.props.actions.toggleSelect(e, i);
                                                                },
                                                            type: "checkbox"
                                                        })),
                                                    _this.props.metadata.filter(function(e) { return e.active; })
                                                    .map(function(meta, j) {
                                                        switch (meta.key) {
                                                        case 'BusinessPhone':
                                                            return (React
                                                                .createElement("td",
                                                                    { key: j },
                                                                    React
                                                                    .createElement("a",
                                                                        { href: "tel:" + col[meta.key] },
                                                                        col[meta.key])));
                                                        case 'EmailAddress1':
                                                            return (React
                                                                .createElement("td",
                                                                    { key: j },
                                                                    React
                                                                    .createElement("a",
                                                                        { href: "mailto:" + col[meta.key] },
                                                                        col[meta.key])));
                                                        default:
                                                            return React.createElement("td", { key: j }, col[meta.key]);
                                                        }
                                                    })));
                                            },
                                            _this);
                                    } else {
                                        return React.createElement("span", null, "No contacts found.");
                                    }
                                })()))));
                } else {
                    return (React.createElement("div",
                        { style: { overflow: 'scroll', flexGrow: '1' } },
                        React.createElement("table",
                            null,
                            React.createElement("thead",
                                {
                                    style: {
                                        backgroundColor: '#eee',
                                        fontSize: '14px',
                                        lineHeight: 1.2,
                                        color:
                                            '#444'
                                    }
                                },
                                React.createElement("tr",
                                    null,
                                    React.createElement("th",
                                        { style: { textAlign: 'left', borderRight: '1px solid #ccc' } },
                                        React.createElement("input", { type: "checkbox" })),
                                    this.props.metadata.filter(function(e) { return e.active; }).map(function(e, i) {
                                            return (React
                                                .createElement("th",
                                                    {
                                                        key: i,
                                                        style: {
                                                            textAlign: 'left',
                                                            borderRight: '1px solid #ccc',
                                                            cursor: e.sortable ? 'pointer' : 'default'
                                                        }
                                                    },
                                                    React.createElement("span",
                                                        {
                                                            style: {
                                                                fontWeight:
                                                                    e.key === _this.props.contacts.orderBy.column
                                                                        ? 'bold'
                                                                        : 'normal',
                                                                display: 'flex',
                                                                justifyContent: 'space-between'
                                                            }
                                                        },
                                                        e.column)));
                                        },
                                        this)))),
                        React.createElement("div",
                            {
                                style: {
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }
                            },
                            React.createElement("div", { className: "progressLoader" }))));
                }
            };
            return CrmContactTable;
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
                outlook: redux_8.bindActionCreators(contacts_3.actions, dispatch)
            };
        }

        function mergeProps(stateProps, dispatchProps, ownProps) {
            return Object.assign({},
                ownProps,
                stateProps,
                {
                    actions: dispatchProps.outlook
                });
        }

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_13.connect(mapStateToProps, mapDispatchToProps, mergeProps)(CrmContactTable);
    });
define("components/FocusContext",
    [
        "require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions",
        "modules/data/contacts/model"
    ],
    function(require, exports, React, react_redux_14, redux_9, resources_13, actions_12, model_9) {
        "use strict";
        /**
         * Class representing the flyout focus context.
         * @extends React.Component
        */
        var FocusContext = (function(_super) {
            __extends(FocusContext, _super);

            function FocusContext() {
                _super.apply(this, arguments);
            }

            FocusContext.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { style: { flex: 1, maxWidth: '30%' } },
                    React.createElement("div",
                        { style: { padding: '8px' } },
                        React.createElement("div",
                            { className: "flex-space-between" },
                            React.createElement("b", null, resources_13.default.getString('MoCA_OWA_Details_Header')),
                            React.createElement("a",
                                { className: "icn x", onClick: function(e) { return _this.props.closeContext(); } })),
                        React.createElement("div",
                            { style: { border: '1px solid #ccc', marginTop: '12px' } },
                            React.createElement("div",
                                { style: { padding: '16px' } },
                                (function() {
                                    if (_this.props.contactView === model_9.ContactViewMode.Exchange) {
                                        switch (_this.props.focused.crmLinkState) {
                                        case model_9.CrmExtendedProperty.CRM_LINK_STATE_TO_LINK:
                                            return (React
                                                .createElement("div",
                                                    { className: "flex-space-between" },
                                                    React
                                                    .createElement("span",
                                                        { style: { color: '#e36625' } },
                                                        resources_13.default.getString('MailApp_Module_Pending_Track')),
                                                    React.createElement("span", null)));
                                        case model_9.CrmExtendedProperty.CRM_LINK_STATE_LINKED:
                                            return (React
                                                .createElement("div",
                                                    { className: "flex-space-between" },
                                                    React
                                                    .createElement("span",
                                                        { style: { color: '#1a994c' } },
                                                        React.createElement("span", { className: "icn tracked" }),
                                                        " ",
                                                        resources_13.default.getString('MailApp_Module_Tracked')),
                                                    React
                                                    .createElement("a",
                                                        {
                                                            className: "icn notTracked tooltip",
                                                            onClick:
                                                                function() {
                                                                    return _this.props.showFocusedUntrackAlert();
                                                                }
                                                        },
                                                        React
                                                        .createElement("span",
                                                            { className: "tooltiptext" },
                                                            resources_13.default
                                                            .getString('MailApp_Module_Untrack')))));
                                        case model_9.CrmExtendedProperty.CRM_LINK_STATE_TO_UNLINK:
                                            return (React
                                                .createElement("div",
                                                    { className: "flex-space-between" },
                                                    React
                                                    .createElement("span",
                                                        { style: { color: '#e36625' } },
                                                        resources_13.default
                                                        .getString('MailApp_Module_Pending_Untrack')),
                                                    React.createElement("span", null)));
                                        case model_9.CrmExtendedProperty.CRM_LINK_STATE_NOT_LINKED:
                                        default:
                                            return (React
                                                .createElement("div",
                                                    { className: "flex-space-between" },
                                                    React
                                                    .createElement("span",
                                                        { style: { color: '#999' } },
                                                        React.createElement("span", { className: "icn notTracked" }),
                                                        " ",
                                                        resources_13.default.getString('MailApp_Module_Not_Tracked')),
                                                    React
                                                    .createElement("a",
                                                        {
                                                            className: "icn tracked tooltip",
                                                            onClick:
                                                                function() { return _this.props.trackFocusedContact(); }
                                                        },
                                                        React
                                                        .createElement("span",
                                                            { className: "tooltiptext" },
                                                            resources_13.default.getString('MailApp_Module_Track')))));
                                        }
                                    }
                                })(),
                                React.createElement("div",
                                    { style: { display: 'flex', alignItems: 'center', paddingTop: '16px' } },
                                    React.createElement("div",
                                        {
                                            style: {
                                                fontSize: '30px',
                                                minWidth: '100px',
                                                minHeight: '100px',
                                                maxWidth: '100px',
                                                borderRadius: '50%',
                                                backgroundColor: '#eee',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                lineHeight: '100px',
                                                overflow: 'hidden'
                                            }
                                        },
                                        this.props.focused.imageUrl
                                        ? React.createElement("img",
                                        {
                                            style: { width: '100px', height: '100px', borderRadius: '50%' },
                                            src: this.props.focused.imageUrl
                                        })
                                        : this.props.focused.Initials),
                                    React.createElement("div",
                                        {
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                paddingLeft: '8px',
                                                overflow: 'hidden'
                                            }
                                        },
                                        (function() {
                                            var contact = _this.props.focused;
                                            if (contact[model_9.CrmExtendedProperty.CRM_LINK_STATE] ==
                                                model_9.CrmExtendedProperty.CRM_LINK_STATE_LINKED &&
                                                contact[model_9.CrmExtendedProperty.CRM_ID]) {
                                                var rawId = contact[model_9.CrmExtendedProperty.CRM_ID]
                                                    .substring(contact[model_9.CrmExtendedProperty.CRM_ID]
                                                        .indexOf('{') +
                                                        1,
                                                        contact[model_9.CrmExtendedProperty.CRM_ID].indexOf('}'));
                                                var url_1 = "/main.aspx?etn=contact&pagetype=entityrecord&id=%7B" +
                                                    rawId +
                                                    "%7D";
                                                return React
                                                    .createElement("a",
                                                        {
                                                            href: "#",
                                                            onClick: function() { return window.open(url_1); },
                                                            style: { fontSize: '24px', display: 'inline-flex' }
                                                        },
                                                        _this.props.focused.DisplayName);
                                            } else {
                                                return React
                                                    .createElement("span",
                                                        {
                                                            style:
                                                            {
                                                                fontSize: '24px',
                                                                display: 'inline-flex',
                                                                overflow: 'hidden'
                                                            }
                                                        },
                                                        _this.props.focused.DisplayName);
                                            }
                                        })(),
                                        React.createElement("span", null, this.props.focused.CompanyName))),
                                React.createElement("hr", null),
                                React.createElement("div",
                                    {
                                        style: {
                                            display: (this.props.focused.EmailAddress1 ||
                                                    this.props.focused.BusinessPhone)
                                                ? 'flex'
                                                : 'none',
                                            flexDirection: 'column'
                                        }
                                    },
                                    React.createElement("div",
                                        {
                                            style: {
                                                display: this.props.focused.EmailAddress1 ? 'flex' : 'none',
                                                alignItems: 'center',
                                                paddingBottom: '8px'
                                            }
                                        },
                                        React.createElement("span", { className: "icn email" }),
                                        React.createElement("a",
                                            {
                                                style: { paddingLeft: '8px' },
                                                href: 'mailto:' + this.props.focused.EmailAddress1
                                            },
                                            this.props.focused.EmailAddress1)),
                                    React.createElement("div",
                                        {
                                            style: {
                                                display: this.props.focused.BusinessPhone ? 'flex' : 'none',
                                                alignItems: 'center',
                                                paddingBottom: '8px'
                                            }
                                        },
                                        React.createElement("span", { className: "icn phone" }),
                                        React.createElement("a",
                                            {
                                                style: { paddingLeft: '8px' },
                                                href: 'tel:' + this.props.focused.BusinessPhone
                                            },
                                            this.props.focused.BusinessPhone)),
                                    React.createElement("hr", null)),
                                (function() {
                                    var contact = _this.props.focused;
                                    if (contact.crmParentAccountId) {
                                        return (React
                                            .createElement("div",
                                                { className: "flex-space-between" },
                                                React
                                                .createElement("div",
                                                    null,
                                                    resources_13.default.getString('MailApp_Module_Link_Title')),
                                                React
                                                .createElement("a",
                                                    {
                                                        style: {
                                                            display:
                                                                _this.props.contactView === model_9.ContactViewMode.CRM
                                                                    ? 'none'
                                                                    : 'inline'
                                                        },
                                                        className: "icn unlink tooltip",
                                                        onClick:
                                                            function(e) { return _this.props.unlinkFocusedContact(e); }
                                                    },
                                                    React
                                                    .createElement("span",
                                                        { className: "tooltiptext" },
                                                        resources_13.default.getString('MailApp_Module_Unlink')))));
                                    } else {
                                        return (React
                                            .createElement("div",
                                                { className: "flex-space-between" },
                                                React
                                                .createElement("div",
                                                    null,
                                                    resources_13.default.getString('MailApp_Module_Link_Title')),
                                                React
                                                .createElement("a",
                                                    {
                                                        style: {
                                                            display:
                                                                _this.props.contactView === model_9.ContactViewMode.CRM
                                                                    ? 'none'
                                                                    : 'inline'
                                                        },
                                                        className: "icn link tooltip",
                                                        onClick:
                                                            function(e) { return _this.props.linkFocusedContact(e); }
                                                    },
                                                    React
                                                    .createElement("span",
                                                        { className: "tooltiptext" },
                                                        resources_13.default.getString('MailApp_Module_Link')))));
                                    }
                                })(),
                                React.createElement("div",
                                    null,
                                    (function() {
                                        var contact = _this.props.focused;
                                        var link = "/main.aspx?etn=account&pagetype=entityrecord&id=%7B" +
                                            _this.props.focused[model_9.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID] +
                                            "%7D";
                                        if (contact[model_9.CrmExtendedProperty.CRM_PARENT_ACCOUNT_ID]) {
                                            return (React
                                                .createElement("a",
                                                    { href: "#", onClick: function() { return window.open(link); } },
                                                    _this.props.focused.CompanyName));
                                        } else {
                                            return (React
                                                .createElement("span",
                                                    null,
                                                    resources_13.default.getString('MailApp_Module_Link_Table_Title')));
                                        }
                                    })()),
                                React.createElement("div",
                                    {
                                        style: {
                                            display: this.props.focused[model_9.CrmExtendedProperty.CRM_LINK_STATE] ===
                                                model_9.CrmExtendedProperty.CRM_LINK_STATE_LINKED
                                                ? 'block'
                                                : 'none'
                                        }
                                    },
                                    React.createElement("hr", null),
                                    (function() {
                                        var contact = _this.props.focused;
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
                                            var rawId = contact[model_9.CrmExtendedProperty.CRM_ID]
                                                .substring(contact[model_9.CrmExtendedProperty.CRM_ID].indexOf('{') + 1,
                                                    contact[model_9.CrmExtendedProperty.CRM_ID].indexOf('}'));
                                            var url_2 = "/main.aspx?etn=" +
                                                contact.nextActivity.ActivityTypeCode +
                                                "&pagetype=entityrecord&id=%7B" +
                                                rawId +
                                                "%7D";
                                            return (React
                                                .createElement("div",
                                                    null,
                                                    React
                                                    .createElement("div",
                                                        {
                                                            style:
                                                            {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingBottom: '8px'
                                                            }
                                                        },
                                                        React.createElement("span", { className: icon }),
                                                        React
                                                        .createElement("span",
                                                            { style: { color: '#999', paddingLeft: '8px' } },
                                                            resources_13.default
                                                            .getString('MoCA_OWA_Next_Activity_Label'))),
                                                    React
                                                    .createElement("div",
                                                        null,
                                                        React
                                                        .createElement("a",
                                                            {
                                                                href: "#",
                                                                onClick: function() { return window.open(url_2); }
                                                            },
                                                            contact.nextActivity.Subject))));
                                        } else {
                                            return (React
                                                .createElement("div",
                                                    null,
                                                    React
                                                    .createElement("div",
                                                        {
                                                            style:
                                                            {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingBottom: '8px'
                                                            }
                                                        },
                                                        React.createElement("span", { className: "icn calendar" }),
                                                        React
                                                        .createElement("span",
                                                            { style: { color: '#999', paddingLeft: '8px' } },
                                                            resources_13.default
                                                            .getString('MoCA_OWA_Next_Activity_Label'))),
                                                    React
                                                    .createElement("div",
                                                        null,
                                                        React
                                                        .createElement("span",
                                                            null,
                                                            resources_13.default
                                                            .getString('MoCA_OWA_No_Upcoming_Activities')))));
                                        }
                                    })(),
                                    (function() {
                                        var contact = _this.props.focused;
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
                                            var rawId = contact[model_9.CrmExtendedProperty.CRM_ID]
                                                .substring(contact[model_9.CrmExtendedProperty.CRM_ID].indexOf('{') + 1,
                                                    contact[model_9.CrmExtendedProperty.CRM_ID].indexOf('}'));
                                            var url_3 = "/main.aspx?etn=" +
                                                contact.prevActivity.ActivityTypeCode +
                                                "&pagetype=entityrecord&id=%7B" +
                                                rawId +
                                                "%7D";
                                            return (React
                                                .createElement("div",
                                                    null,
                                                    React
                                                    .createElement("div",
                                                        {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingBottom: '8px',
                                                                paddingTop: '8px'
                                                            }
                                                        },
                                                        React.createElement("span", { className: icon }),
                                                        React
                                                        .createElement("span",
                                                            { style: { color: '#999', paddingLeft: '8px' } },
                                                            resources_13.default
                                                            .getString('MoCA_OWA_Last_Activity_Label'))),
                                                    React
                                                    .createElement("div",
                                                        null,
                                                        React
                                                        .createElement("a",
                                                            {
                                                                href: "#",
                                                                onClick: function() { return window.open(url_3); }
                                                            },
                                                            contact.prevActivity.Subject))));
                                        } else {
                                            return (React
                                                .createElement("div",
                                                    null,
                                                    React
                                                    .createElement("div",
                                                        {
                                                            style: {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                paddingBottom: '8px',
                                                                paddingTop: '8px'
                                                            }
                                                        },
                                                        React.createElement("span", { className: "icn calendar" }),
                                                        React
                                                        .createElement("span",
                                                            { style: { color: '#999', paddingLeft: '8px' } },
                                                            resources_13.default
                                                            .getString('MoCA_OWA_Last_Activity_Label'))),
                                                    React
                                                    .createElement("div",
                                                        null,
                                                        React
                                                        .createElement("span",
                                                            null,
                                                            resources_13.default
                                                            .getString('MoCA_OWA_No_Past_Activities')))));
                                        }
                                    })()))))));
            };
            return FocusContext;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                focused: state.outlook.pages[state.outlook.focused.page][state.outlook.focused.index],
                contactView: state.outlook.contactView
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                trackFocusedContact: function() {
                    return dispatch(actions_12.default
                        .attemptTrack(actions_12.ContactTarget.FOCUSED, { detectDuplicates: true }));
                },
                showFocusedUntrackAlert: redux_9
                    .bindActionCreators(actions_12.default.showFocusedUntrackAlert, dispatch),
                linkFocusedContact: redux_9.bindActionCreators(actions_12.default.linkFocusedContact, dispatch),
                unlinkFocusedContact: redux_9.bindActionCreators(actions_12.default.unlinkFocusedContact, dispatch),
                closeContext: redux_9.bindActionCreators(actions_12.default.closeContext, dispatch),
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_14.connect(mapStateToProps, mapDispatchToProps)(FocusContext);
    });
define("components/LinkContext",
    ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_15, redux_10, resources_14, actions_13) {
        "use strict";
        /**
         * Class representing the flyout focus context.
         * @extends React.Component
        */
        var LinkContext = (function(_super) {
            __extends(LinkContext, _super);

            function LinkContext() {
                _super.apply(this, arguments);
            }

            LinkContext.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { style: { flex: 1, maxWidth: '30%', maxHeight: '600px', padding: '8px' } },
                    React.createElement("div",
                        { style: { display: 'flex', justifyContent: 'space-between' } },
                        React.createElement("b", null, resources_14.default.getString('MailApp_Module_Link_Title')),
                        React.createElement("span",
                            { style: { color: '#666', fontSize: '14px' } },
                            React.createElement("span",
                                null,
                                "Selected Contact(s): ",
                                this.props.pages[this.props.page].filter(function(x) { return x.selected === true; })
                                .length),
                            React.createElement("span", null, ' | ', " "),
                            React.createElement("a",
                            {
                                className: "icn x",
                                onClick: function(e) {
                                    return _this.props
                                        .hideLinkContext();
                                }
                            }))),
                    (function() {
                        if (_this.props.showRefreshPane) {
                            return (React.createElement("div",
                                {
                                    style: {
                                        border: '1px solid #ccc',
                                        marginTop: '12px',
                                        padding: '16px',
                                        backgroundColor: '#cbe2f3'
                                    }
                                },
                                React.createElement("b",
                                    null,
                                    resources_14.default.getString('MailApp_Module_Link_Refresh_Title')),
                                React.createElement("p",
                                    null,
                                    resources_14.default.getString('MailApp_Module_Link_Refresh_Message')),
                                React.createElement("button",
                                    { onClick: function() { return _this.props.refreshAccounts(); } },
                                    resources_14.default.getString('MailApp_Module_Link_Refresh_Button_Refresh'))));
                        } else {
                            return (React.createElement("div",
                                { style: { border: '1px solid #ccc', marginTop: '12px' } },
                                React.createElement("div",
                                    { style: { padding: '16px', paddingBottom: '10px' } },
                                    React.createElement("b",
                                        null,
                                        resources_14.default.getString('MailApp_Module_Link_Table_Title')),
                                    React.createElement("div",
                                        null,
                                        (function() {
                                            if (_this.props.linkAccountsLoaded) {
                                                return (React.createElement("table",
                                                    { style: { overflowY: 'auto', maxHeight: '600px' } },
                                                    React.createElement("tbody",
                                                        null,
                                                        _this.props.linkAccounts.map(function(account, i) {
                                                            return React
                                                                .createElement("tr",
                                                                    {
                                                                        key: i,
                                                                        style:
                                                                        {
                                                                            backgroundColor:
                                                                                account.accountid ==
                                                                                    _this.props.selectedAccountId
                                                                                    ? '#cbe2f3'
                                                                                    : '#fff'
                                                                        },
                                                                        onClick:
                                                                            function(e) {
                                                                                return _this.props
                                                                                    .selectAccount(e, account);
                                                                            }
                                                                    },
                                                                    React.createElement("td", null, account.name));
                                                        }))));
                                            } else {
                                                return (React
                                                    .createElement("div",
                                                        {
                                                            style:
                                                            {
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                width: '100%',
                                                                height: '100%'
                                                            }
                                                        },
                                                        React.createElement("div", { className: "progressLoader" })));
                                            }
                                        })())),
                                React.createElement("div",
                                    {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            backgroundColor: "#eee",
                                            padding: '8px'
                                        }
                                    },
                                    React.createElement("div",
                                        null,
                                        React.createElement("button",
                                            { onClick: function() { return _this.props.openNewAccount(); } },
                                            resources_14.default.getString('MailApp_Module_Link_Button_New'))),
                                    React.createElement("div",
                                        { style: { justifyContent: 'flex-end' } },
                                        React.createElement("button",
                                            { onClick: function(e) { return _this.props.linkSelectedAccounts(); } },
                                            resources_14.default.getString('MailApp_Module_Link_Button_Link')),
                                        React.createElement("button",
                                            { onClick: function(e) { return _this.props.hideLinkContext(); } },
                                            resources_14.default.getString('MailApp_Module_Link_Button_Cancel'))))));
                        }
                    })()));
            };
            return LinkContext;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                linkAccounts: state.outlook.linkAccounts,
                pages: state.outlook.pages,
                page: state.outlook.page,
                selectedAccountId: state.outlook.selectedAccountId,
                showRefreshPane: state.outlook.showRefreshPane,
                linkAccountsLoaded: state.outlook.linkAccountsLoaded
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                hideLinkContext: redux_10.bindActionCreators(actions_13.default.hideLinkContext, dispatch),
                selectAccount: redux_10.bindActionCreators(actions_13.default.selectAccount, dispatch),
                linkSelectedAccounts: redux_10.bindActionCreators(actions_13.default.linkSelectedAccounts, dispatch),
                openNewAccount: redux_10.bindActionCreators(actions_13.default.openNewAccount, dispatch),
                refreshAccounts: redux_10.bindActionCreators(actions_13.default.refreshAccounts, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_15.connect(mapStateToProps, mapDispatchToProps)(LinkContext);
    });
define("components/ContactTableContainer",
    [
        "require", "exports", 'react', "components/ContactTableTopControl", "components/ContactTableBottomControl",
        "components/ContactTable", "components/CrmContactTable", "components/FocusContext", "components/LinkContext",
        'react-redux', 'redux', "modules/data/contacts/actions", "modules/data/contacts/model"
    ],
    function(require,
        exports,
        React,
        ContactTableTopControl_1,
        ContactTableBottomControl_1,
        ContactTable_1,
        CrmContactTable_1,
        FocusContext_1,
        LinkContext_1,
        react_redux_16,
        redux_11,
        actions_14,
        model_10) {
        "use strict";
        /**
         * Class representing the contacts table container.
         * @extends React.Component
        */
        var ContactTableContainer = (function(_super) {
            __extends(ContactTableContainer, _super);

            function ContactTableContainer() {
                _super.apply(this, arguments);
            }

            ContactTableContainer.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { style: { display: 'flex', minWidth: '80%', flexGrow: '1' } },
                    React.createElement("div",
                        { style: { flex: 1, display: 'flex', flexDirection: 'column', flexGrow: '1' } },
                        React.createElement(ContactTableTopControl_1.default, null),
                        (function() {
                            switch (_this.props.contactView) {
                            case model_10.ContactViewMode.Exchange:
                                return React.createElement(ContactTable_1.default, null);
                            case model_10.ContactViewMode.CRM:
                                return React.createElement(CrmContactTable_1.default, null);
                            }
                        })(),
                        React.createElement(ContactTableBottomControl_1.default, null)),
                    this.props.focusActive && this.props.showLinkContext === false
                    ? React.createElement(FocusContext_1.default, null)
                    : null,
                    this.props.showLinkContext ? React.createElement(LinkContext_1.default, null) : null));
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
                trackSelectedContacts: redux_11.bindActionCreators(actions_14.default.trackSelectedContacts, dispatch)
            };
        }

        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_16.connect(mapStateToProps, mapDispatchToProps)(ContactTableContainer);
    });
define("components/TransactionModal",
    ["require", "exports", 'react', 'react-redux', 'redux', "lib/resources", "modules/data/contacts/actions"],
    function(require, exports, React, react_redux_17, redux_12, resources_15, actions_15) {
        "use strict";
        /**
         * Class representing the transactionModal.
         * @extends React.Component
        */
        var TransactionModal = (function(_super) {
            __extends(TransactionModal, _super);

            function TransactionModal() {
                _super.apply(this, arguments);
            }

            TransactionModal.prototype.render = function() {
                var _this = this;
                return (React.createElement("div",
                    { className: "alertContainer", style: { backgroundColor: 'rgba(50, 50, 50, 0.7)' } },
                    React.createElement("div",
                        {
                            style: {
                                width: '500px',
                                height: '300px',
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }
                        },
                        React.createElement("div", { className: "progressLoader" }),
                        React.createElement("div",
                            { style: { color: 'white', fontSize: '18px' } },
                            resources_15.default.getString('MailApp_Module_Notification_Update_In_Progress')),
                        React.createElement("div",
                            { style: { color: 'white', fontSize: '14px' } },
                            this.props.transaction.progressCurrent,
                            " out of ",
                            this.props.transaction.progressMax),
                        React.createElement("div",
                            null,
                            React.createElement("button",
                                {
                                    style: { width: '300px', maxWidth: '100%', marginTop: '20px' },
                                    onClick: function() { return _this.props.endTransaction(); }
                                },
                                "Contact Dynamics 365 Administrator")))));
            };
            return TransactionModal;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                transaction: state.outlook.transaction
            };
        };
        var mapDispatchToProps = function(dispatch) {
            return {
                endTransaction: redux_12.bindActionCreators(actions_15.default.endTransaction, dispatch)
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_17.connect(mapStateToProps, mapDispatchToProps)(TransactionModal);
    });
define("components/App",
    [
        "require", "exports", 'react', 'react-redux', "modules/client/app/actions", "components/Alert",
        "components/Confirm", "components/UntrackAlert", "components/TabControl", "components/ContactTableContainer",
        "components/TransactionModal"
    ],
    function(require,
        exports,
        React,
        react_redux_18,
        actions_16,
        Alert_1,
        Confirm_1,
        UntrackAlert_1,
        TabControl_1,
        ContactTableContainer_1,
        TransactionModal_1) {
        "use strict";
        /**
         * Class representing the entire application.
         * @extends React.Component
        */
        var App = (function(_super) {
            __extends(App, _super);

            function App() {
                _super.apply(this, arguments);
            }

            /** Initialize app on 'willMount'. */
            App.prototype.componentWillMount = function() {
                this.props.initializeApp();
            };
            /** React.Component render function. */
            App.prototype.render = function() {
                if (this.props.loaded) {
                    return (React.createElement("div",
                        { style: { padding: '12px', boxSizing: 'border-box', height: '100%' } },
                        this.props.active ? React.createElement(Alert_1.default, null) : null,
                        this.props.showConfirm ? React.createElement(Confirm_1.default, null) : null,
                        this.props.showUntrackAlert ? React.createElement(UntrackAlert_1.default, null) : null,
                        this.props.showLoading ? React.createElement(TransactionModal_1.default, null) : null,
                        React.createElement("div",
                            { style: { display: 'flex', flexDirection: 'column', height: '100%' } },
                            React.createElement(TabControl_1.default, null),
                            React.createElement(ContactTableContainer_1.default, null))));
                } else {
                    return (React.createElement("div",
                        {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '95vh'
                            }
                        },
                        React.createElement("div", { className: "progressLoader" })));
                }
            };
            return App;
        }(React.Component));
        var mapStateToProps = function(state) {
            return {
                loaded: state.app.loaded,
                active: state.outlook.alert.active,
                showConfirm: state.outlook.confirm.active,
                showUntrackAlert: state.outlook.untrackAlert.active,
                showLoading: state.outlook.transaction.showLoading
            };
        };
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = react_redux_18.connect(mapStateToProps, { initializeApp: actions_16.initializeApp })(App);
    });
define("index",
    ["require", "exports", 'react', 'react-dom', 'react-redux', 'redux', "reducers/rootReducer", "components/App"],
    function(require, exports, React, react_dom_1, react_redux_19, redux_13, rootReducer_1, App_1) {
        "use strict";

        function functionMiddleware(ref) {
            var dispatch = ref.dispatch;
            var getState = ref.getState;
            return function(next) {
                return function(action) {
                    if (typeof action === 'function') {
                        return action(dispatch, getState);
                    } else {
                        return next(action);
                    }
                };
            };
        };

        // Combine all reducers
        var reducer = redux_13.combineReducers(rootReducer_1.default);
        // Create store
        var store = redux_13.createStore(reducer, redux_13.applyMiddleware(functionMiddleware));
        // Render entry point
        react_dom_1.render(React.createElement(react_redux_19.Provider,
                { store: store },
                React.createElement(App_1.default, null)),
            document.getElementById('app'));
    });