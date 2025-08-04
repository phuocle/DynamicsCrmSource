var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TelemetryLogger;
(function (TelemetryLogger) {
    var TelemetryConstants = (function () {
        function TelemetryConstants() {
        }
        return TelemetryConstants;
    }());
    TelemetryConstants.EventName = "EventName";
    TelemetryConstants.StartTime = "StartTime";
    TelemetryConstants.EndTime = "EndTime";
    TelemetryConstants.ExecutionTime = "ExecutionTime";
    TelemetryConstants.FeatureUsage = "Feature Usage";
    var TelemetryItem = (function () {
        function TelemetryItem(componentName, eventName) {
            this._componentName = componentName;
            this._eventName = eventName;
            this._traceInformation = ["Start"];
            this._traceWarning = [];
            this._traceError = [];
            this._traceCustom = {};
            this._event = this.createEvent();
        }
        TelemetryItem.prototype.traceEventInformation = function (message) {
            this._traceInformation.push(message);
        };
        TelemetryItem.prototype.traceEventWarning = function (message) {
            this._traceWarning.push(message);
        };
        TelemetryItem.prototype.traceEventError = function (name, exception) {
            this._traceError.push({ name: name, message: exception });
        };
        TelemetryItem.prototype.traceEventCustom = function (name, value) {
            if (this._traceCustom[name]) {
                this._traceCustom[name].push(value);
            }
            else {
                this._traceCustom[name] = [value];
            }
        };
        TelemetryItem.prototype.traceFeatureUsage = function (name, value) {
            this.traceEventCustom(TelemetryConstants.FeatureUsage, { name: name, value: value });
        };
        TelemetryItem.prototype.report = function () {
            if (!this._event) {
                return;
            }
            this.traceEventInformation("End");
            this.addEventParameter({ name: "Information", value: this._traceInformation });
            this.addEventParameter({ name: "Warnings", value: this._traceWarning });
            this.addEventParameter({ name: "Errors", value: this._traceError });
            for (var key in this._traceCustom) {
                this.addEventParameter({ name: key, value: this._traceCustom[key] });
            }
            this.updateEventExecutionTime();
            if (Xrm && Xrm.Reporting) {
                if (!this._traceError || this._traceError.length == 0) {
                    Xrm.Reporting.reportSuccess(this._componentName, this._event);
                }
                else {
                    Xrm.Reporting.reportFailure(this._componentName, Error(this._eventName), "Review the stacktrace and event context.", this._event);
                }
            }
        };
        TelemetryItem.prototype.createEvent = function () {
            var parameters = [];
            parameters.push({ name: TelemetryConstants.EventName, value: this._eventName });
            parameters.push({ name: TelemetryConstants.StartTime, value: new Date() });
            return parameters;
        };
        TelemetryItem.prototype.addEventParameter = function (parameter) {
            if (this._event != null && parameter.name != null && parameter.value != null) {
                this._event.push(parameter);
            }
        };
        TelemetryItem.prototype.updateEventExecutionTime = function () {
            if (!this._event || this._event.length < 2) {
                return;
            }
            var eventName = this._event[0].value;
            var start = this._event[1].value;
            if (!eventName || !start) {
                return;
            }
            var end = new Date();
            this.addEventParameter({ name: TelemetryConstants.EndTime, value: end });
            this.addEventParameter({ name: TelemetryConstants.ExecutionTime, value: (end.valueOf() - start.valueOf()) });
        };
        return TelemetryItem;
    }());
    TelemetryLogger.TelemetryItem = TelemetryItem;
})(TelemetryLogger || (TelemetryLogger = {}));
var Activities;
(function (Activities) {
    var Common;
    (function (Common) {
        var Util;
        (function (Util) {
            function createCallBackFunction(func, parameters) {
                return function (retValue) {
                    parameters.unshift(retValue);
                    return func.apply(null, parameters);
                };
            }
            Util.createCallBackFunction = createCallBackFunction;
            function convertGuidToString(guid) {
                if (guid != null) {
                    guid = guid.replace("{", "").replace("}", "");
                }
                return guid;
            }
            Util.convertGuidToString = convertGuidToString;
            function isExecutionContextMissingAndReport(executionContext, telemetryItem) {
                if (IsNullOrUndefined(executionContext)) {
                    telemetryItem.traceEventError(Activities.Constants.TelemetryConstant.ExecutionContextMissing);
                    telemetryItem.report();
                }
            }
            Util.isExecutionContextMissingAndReport = isExecutionContextMissingAndReport;
            function IsNull(value) {
                return typeof (value) === 'undefined' || typeof (value) === 'unknown' || value == null;
            }
            Util.IsNull = IsNull;
            function IsNotNull(value) {
                return !IsNull(value);
            }
            Util.IsNotNull = IsNotNull;
            function IsNullOrEmptyString(str) {
                return Util.IsNull(str) || (str == '');
            }
            Util.IsNullOrEmptyString = IsNullOrEmptyString;
            function IsNullOrUndefined(value) {
                return null == value || typeof (value) == 'undefined';
            }
            Util.IsNullOrUndefined = IsNullOrUndefined;
            function IsNullOrWhiteSpace(value) {
                return Util.IsNullOrEmptyString(value) || value.trim() == '';
            }
            Util.IsNullOrWhiteSpace = IsNullOrWhiteSpace;
            function ShowMoCAOfflineError() {
                Activities.ClientApi.openAlertDialog(Activities.ClientApi.getResourceString("Error_Message_Generic_Mobile_Client_Offline"));
            }
            Util.ShowMoCAOfflineError = ShowMoCAOfflineError;
            function IsNullOrEmptyGuid(guid) {
                return IsNullOrEmptyString(guid) ||
                    convertGuidToString(guid) === Activities.Constants.EmptyGuidFormatted;
            }
            Util.IsNullOrEmptyGuid = IsNullOrEmptyGuid;
            function IsNewEntityForm(formContext) {
                return formContext.ui.getFormType() == 1 /* Create */;
            }
            Util.IsNewEntityForm = IsNewEntityForm;
            function GetEntityNames(records) {
                var activityEntityNames = {};
                for (var i = 0; i < records.length; i++) {
                    if (activityEntityNames[records[i].TypeName] == undefined)
                        activityEntityNames[records[i].TypeName] = [];
                }
                return activityEntityNames;
            }
            Util.GetEntityNames = GetEntityNames;
            function CheckIfIsReadOnlyInMobileClient(values) {
                var returnValue = false;
                for (var index = 0; index < values.length; index++) {
                    var value = values[index];
                    if (value["IsReadOnlyInMobileClient"] == true) {
                        returnValue = true;
                        break;
                    }
                }
                if (returnValue) {
                    var errorStrings = {
                        text: Activities.ClientApi.getResourceString("ReadOnlyEntity"),
                        confirmButtonLabel: Activities.ClientApi.getResourceString("Button_Ok")
                    };
                    Xrm.Navigation.openAlertDialog(errorStrings);
                }
                return returnValue;
            }
            Util.CheckIfIsReadOnlyInMobileClient = CheckIfIsReadOnlyInMobileClient;
            function isOneDriveFCBEnabled(isUci) {
                if (isUci) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.OneDriveIntegrationFCB) || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_OneDriveIntegration);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.OneDriveIntegrationFCB);
                }
            }
            Util.isOneDriveFCBEnabled = isOneDriveFCBEnabled;
            function isEmailEnhancementsFeatureEnabled(featureFCBName) {
                if (Xrm.Internal.isUci()) {
                    return Xrm.Internal.isDisruptiveFeatureEnabled(featureFCBName, Activities.Constants.FCBConstant.April2020UpdateFCB);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(featureFCBName) && Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.April2020UpdateFCB);
                }
            }
            Util.isEmailEnhancementsFeatureEnabled = isEmailEnhancementsFeatureEnabled;
            function isEmailEngagementFCBEnabled(isUci) {
                if (isUci) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.EmailEngagementFCB) || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_EmailEngagement);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.EmailEngagementFCB);
                }
            }
            Util.isEmailEngagementFCBEnabled = isEmailEngagementFCBEnabled;
            function isAllDayEventMidnightFCBEnabled(isUci) {
                if (isUci) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_AllDayEventInUTCMidnight) || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.AllDayEventInUTCMidnight);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_AllDayEventInUTCMidnight);
                }
            }
            Util.isAllDayEventMidnightFCBEnabled = isAllDayEventMidnightFCBEnabled;
            function isSharePointFCBEnabled(isUci) {
                if (isUci) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.SharePointS2SFCB) || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_SharePointS2S);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.SharePointS2SFCB);
                }
            }
            Util.isSharePointFCBEnabled = isSharePointFCBEnabled;
            function isEmailEngagementAndOneDriveEnabledAtOrgLevel() {
                return Xrm.Utility.getGlobalContext().organizationSettings.attributes["isonedriveenabled"] && Xrm.Utility.getGlobalContext().organizationSettings.attributes["isemailmonitoringallowed"];
            }
            Util.isEmailEngagementAndOneDriveEnabledAtOrgLevel = isEmailEngagementAndOneDriveEnabledAtOrgLevel;
            function isSendBulkEmailInUciEnabledAtOrgLevel() {
                var attrs = Xrm.Utility.getGlobalContext().organizationSettings.attributes;
                if (IsNullOrUndefined(attrs) || IsNullOrUndefined(attrs["sendbulkemailinuci"])) {
                    return false;
                }
                return attrs["sendbulkemailinuci"] == "1";
            }
            Util.isSendBulkEmailInUciEnabledAtOrgLevel = isSendBulkEmailInUciEnabledAtOrgLevel;
            function resolveSimilarUnresolvedAddresses() {
                var attrs = Xrm.Utility.getGlobalContext().organizationSettings.attributes;
                if (IsNullOrUndefined(attrs) || IsNullOrUndefined(attrs["resolvesimilarunresolvedemailaddress"])) {
                    return true; //the default value of this setting is 1.
                }
                return attrs["resolvesimilarunresolvedemailaddress"] == "1";
            }
            Util.resolveSimilarUnresolvedAddresses = resolveSimilarUnresolvedAddresses;
            function allowUnresolvedPartiesOnEmailSend() {
                var attrs = Xrm.Utility.getGlobalContext().organizationSettings.attributes;
                if (IsNullOrUndefined(attrs) || IsNullOrUndefined(attrs["allowunresolvedpartiesonemailsend"])) {
                    return false; //the default value of this setting is 0.
                }
                return attrs["allowunresolvedpartiesonemailsend"] == "1";
            }
            Util.allowUnresolvedPartiesOnEmailSend = allowUnresolvedPartiesOnEmailSend;
            function orgEmailConnectionChannel() {
                var attrs = Xrm.Utility.getGlobalContext().organizationSettings.attributes;
                if (IsNullOrUndefined(attrs) || IsNullOrUndefined(attrs["emailconnectionchannel"])) {
                    return 0; //the default value of this setting is 0.
                }
                return attrs["emailconnectionchannel"] == "0" ? 0 : 1;
            }
            Util.orgEmailConnectionChannel = orgEmailConnectionChannel;
            function isDocumentManagementEnabled() {
                return Xrm.Utility.getEntityMetadata("email").then(function (res) {
                    return res.IsDocumentManagementEnabled;
                }, function (err) {
                    return false;
                });
            }
            Util.isDocumentManagementEnabled = isDocumentManagementEnabled;
            function isEmailEngagementActionsFCBEnabled(isUci) {
                if (isUci) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.EmailEngagementActionFCB) || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_EmailEngagementAction);
                }
                else {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.EmailEngagementActionFCB);
                }
            }
            Util.isEmailEngagementActionsFCBEnabled = isEmailEngagementActionsFCBEnabled;
            function isMailboxDialogFCBEnabled() {
                return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.MailboxEnabledDialogFCB)
                    || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_MailboxEnabledDialog);
            }
            Util.isMailboxDialogFCBEnabled = isMailboxDialogFCBEnabled;
            function isSafeDescriptionInEmailUCIEnabled() {
                return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.SafeDescriptionInEmailUCIFCB)
                    || Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_SafeDescriptionInEmailUCI);
            }
            Util.isSafeDescriptionInEmailUCIEnabled = isSafeDescriptionInEmailUCIEnabled;
            function isResolveUnknownEmailsFCBEnabled() {
                if (Xrm.Internal.isUci()) {
                    return !Activities.ClientApi.IsMocaOffline() && Xrm.Internal.isDisruptiveFeatureEnabled(Activities.Constants.FCBConstant.UnresolvedEmailAddressFeatureFCB, Activities.Constants.FCBConstant.April2020UpdateFCB);
                }
                return false;
            }
            Util.isResolveUnknownEmailsFCBEnabled = isResolveUnknownEmailsFCBEnabled;
            function enableActivitiesTimeLinePerfImprovement(stage) {
                // The perf improvement will retrun false in case of webclient and will return value based on bitmask value set in case of UCI
                if (Xrm.Internal.isUci()) {
                    var perfOrgDbOrgSettings = +this.getOrgDbOrgSettingValue(Activities.Constants.PerfConstants.PerfOrgDbOrgSettings, "0");
                    return (perfOrgDbOrgSettings & stage) == stage;
                }
                else {
                    return false;
                }
            }
            Util.enableActivitiesTimeLinePerfImprovement = enableActivitiesTimeLinePerfImprovement;
            function isFCBEnabled(FCBName, ReleaseWaveFCB) {
                if (Xrm.Internal.isUci()) {
                    if (ReleaseWaveFCB != null) {
                        return Xrm.Internal.isDisruptiveFeatureEnabled(FCBName, ReleaseWaveFCB);
                    }
                    return Xrm.Internal.isFeatureEnabled(FCBName);
                }
                return false;
            }
            Util.isFCBEnabled = isFCBEnabled;
            function EnableEmailEditInMoca() {
                if (Xrm.Internal.isUci()) {
                    return !Activities.ClientApi.IsMocaOffline() && Xrm.Internal.isDisruptiveFeatureEnabled(Activities.Constants.FCBConstant.EnableEmailEditInMocaFCB, Activities.Constants.FCBConstant.October2020UpdateFCB);
                }
                return false;
            }
            Util.EnableEmailEditInMoca = EnableEmailEditInMoca;
            function isEmailTemplatePreviewFeatureOn(xrmPage) {
                var limitedHeight = 400;
                var limitedWidth = 650;
                // Bug1645736 : The new dialog doesn't render above 110% defaults to older dialog.
                // viewport corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page
                // So adding offset value
                var offset = 225;
                var pageHeight = xrmPage.ui.getViewPortHeight() + offset;
                var pageWidth = xrmPage.ui.getViewPortWidth() + offset;
                if (Xrm.Internal.isUci()) {
                    return Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_April2020Update)
                        && Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.FCB_EmailTemplatePreviewEnhancementsEnabled)
                        && pageHeight > limitedHeight && pageWidth > limitedWidth;
                }
                return false;
            }
            Util.isEmailTemplatePreviewFeatureOn = isEmailTemplatePreviewFeatureOn;
            function isActivitiesFeatureEnable(featureName, defaultValue) {
                var activitiesFeatureEnableSettings = +this.getOrgDbOrgSettingValue(Activities.Constants.ActivitiesFeature.ActivitiesFeatureOrgDbOrgSettings, defaultValue);
                return (activitiesFeatureEnableSettings & featureName) == featureName;
            }
            Util.isActivitiesFeatureEnable = isActivitiesFeatureEnable;
            function enableInsertSignatureInUCI() {
                // This function will return true in case the insert signature feature is enabled in UCI and false in all other scenarios
                if (Xrm.Internal.isUci()) {
                    return this.isActivitiesFeatureEnable(Activities.Constants.ActivitiesFeature.ActivitiesFeatureList.EnableInsertSignatureInUCI, Activities.Constants.OrgSettingsConstant.InsertSignatureFeatureBitValue);
                }
                else {
                    return false;
                }
            }
            Util.enableInsertSignatureInUCI = enableInsertSignatureInUCI;
            function disableAllControls(executionContext) {
                var formContext = executionContext.getFormContext();
                var controls = formContext && formContext.ui.controls;
                controls && controls.forEach(function (control) {
                    control.setDisabled(true);
                });
                var allTabs = formContext && formContext.ui.tabs;
                allTabs && allTabs.forEach(function (tab) {
                    var allSections = executionContext.getFormContext().ui.tabs.get(tab.getName()).sections;
                    allSections.forEach(function (section) {
                        var allControlsForSection = section.controls;
                        for (var i = 0; i < allControlsForSection.getLength(); i++) {
                            var control = allControlsForSection.getByIndex(i);
                            control.setDisabled(true);
                        }
                    });
                });
            }
            Util.disableAllControls = disableAllControls;
            function showSpecificSectionOnly(executionContext, tabName, sectionName) {
                var allTabs = executionContext.getFormContext().ui.tabs;
                var BasicTabSections = allTabs.getByName(tabName).sections;
                BasicTabSections.forEach(function (section) {
                    if (section._controlName != sectionName) {
                        section.setVisible(false);
                    }
                });
            }
            Util.showSpecificSectionOnly = showSpecificSectionOnly;
            /**
             * get the orgDbOrgSetting value if it exists. Required a dependency on the organization entity's orgDbOrgSetting attribute
             * returns false if offline as it can't be assumed that organization entity is available for offline
             * @param orgDbOrgSettingName the orgDbOrgSetting name
             * @param defaultValue the default value to return if the setting is not available
             */
            function getOrgDbOrgSettingValue(orgDbOrgSettingName, defaultValue) {
                if (IsNullOrEmptyString(orgDbOrgSettingName) || Activities.ClientApi.IsMocaOffline()) {
                    return defaultValue;
                }
                var xmlParser = new DOMParser();
                if (ActivityHelper.orgDbOrgSettingsXml === undefined) {
                    try {
                        var attrs = Xrm.Utility.getGlobalContext().organizationSettings.attributes;
                        if (Xrm.Internal.isUci()) {
                            // Check if the attrs is populated or not
                            if (!IsNullOrUndefined(attrs)) {
                                ActivityHelper.orgDbOrgSettingsXml = attrs["orgdborgsettings"] ? xmlParser.parseFromString(attrs["orgdborgsettings"], "text/xml") : null;
                            }
                            else {
                                // if for some reason we are not getting the organizationSettings attributes, then return the default value.
                                return defaultValue;
                            }
                        }
                        else {
                            if (!IsNullOrUndefined(attrs)) {
                                ActivityHelper.orgDbOrgSettingsXml = attrs.orgDBOrgSettings ? xmlParser.parseFromString(attrs.orgDBOrgSettings, "text/xml") : null;
                            }
                        }
                    }
                    catch (Exception) {
                        return defaultValue;
                    }
                }
                var orgDbOrgSettingsXml = ActivityHelper.orgDbOrgSettingsXml;
                if (Common.Util.IsNullOrUndefined(orgDbOrgSettingsXml) || orgDbOrgSettingsXml.documentElement == null) {
                    return defaultValue;
                }
                var orgDbOrgSettingNode = orgDbOrgSettingsXml.documentElement.getElementsByTagName(orgDbOrgSettingName);
                return orgDbOrgSettingNode == null || orgDbOrgSettingNode.length <= 0 ? null : (orgDbOrgSettingNode[0].textContent == null ? null : orgDbOrgSettingNode[0].textContent.toLowerCase());
            }
            Util.getOrgDbOrgSettingValue = getOrgDbOrgSettingValue;
            // XHR wrapped in a promise
            function sendRequest(url, addOdataHeaders, telemetryItem) {
                return new Promise(function (resolve, reject) {
                    var request = new XMLHttpRequest();
                    request.open("GET", url); //change it to POST or get?
                    if (addOdataHeaders) {
                        request.setRequestHeader("odata-maxversion", "4.0");
                        request.setRequestHeader("odata-version", "4.0");
                        request.setRequestHeader("prefer", 'odata.include-annotations="*"');
                    }
                    request.onreadystatechange = function () {
                        // Mimic Fetch Response object when ready state is 4.
                        if (request.readyState === 4) {
                            var responseBodyInAPromise = function () {
                                return Promise.resolve(JSON.parse(request.responseText));
                            };
                            var isSuccess = request.status === 200;
                            resolve({
                                ok: isSuccess,
                                status: request.status,
                                statusText: request.statusText,
                                json: responseBodyInAPromise,
                                text: responseBodyInAPromise,
                                url: url,
                            });
                            reject = function (error) {
                                telemetryItem.traceEventError("Exception occured while executing XHR request: " + error);
                                reject(error);
                            };
                        }
                    };
                    request.send();
                });
            }
            Util.sendRequest = sendRequest;
            // function to parse json response.
            function parseJsonResponse(response, telemetryItem) {
                return Promise.resolve().then(function () {
                    if (!response) {
                        telemetryItem.traceEventError("Null response from server for request : " + response.url);
                    }
                    else {
                        var contentTypeHeader = getHttpHeader(response.headers, "Content-Type");
                        if (contentTypeHeader && contentTypeHeader.indexOf("text/html") > -1) {
                            return response.text().then(function (text) {
                                telemetryItem.traceEventError("Server returned an HTML error response: " + text);
                            });
                        }
                        else {
                            return response.json();
                        }
                    }
                });
            }
            Util.parseJsonResponse = parseJsonResponse;
            function getHttpHeader(headers, headerName) {
                if (!headers) {
                    return null;
                }
                var headerValue = headers.get(headerName);
                if (!headerValue) {
                    headerValue = headers.get(headerName.toLowerCase());
                }
                return headerValue;
            }
            /**
         * Prepares an XHR request to retrieve relationships metadata for list of lookup attributes.
         * Note: Even though this method generically handles for ownerid attribute as well, but currently we are not passing fetching the relationship metadata for ownerid attribute.
         * @param attributeNames the list of lookup attributes.
         * @param telemetryItem telemetry item.
         * @param addOwnerFilter adds the owner attribute filter in the url.
         * @param isActivity true if the referencing entity is an activity otherwise false.
         */
            function getRelationshipsMetadataForLookups(referencingEntityName, attributeNameValuePairs, telemetryItem, addOwnerFilter, isActivity) {
                if (addOwnerFilter === void 0) { addOwnerFilter = false; }
                if (isActivity === void 0) { isActivity = true; }
                var filterStart = "&$filter=(";
                var filterEnd = ")";
                var referencingEntityFilter = "ReferencingEntity eq '" + referencingEntityName + "'";
                var attributeFilters;
                var filter;
                var url = Xrm.Utility.getGlobalContext().getClientUrl()
                    + "/api/data/v9.0/RelationshipDefinitions/Microsoft.Dynamics.CRM.OneToManyRelationshipMetadata?$select=ReferencingEntityNavigationPropertyName,ReferencingAttribute,ReferencingEntity,ReferencedEntity";
                // Create attribute filters
                for (var attributeName in attributeNameValuePairs) {
                    if (IsNullOrUndefined(attributeNameValuePairs[attributeName]) || attributeName === "ownerid") {
                        continue;
                    }
                    var attributeFilter = "(ReferencedEntity eq '" + attributeNameValuePairs[attributeName][0].entityType + "'"
                        + " and ReferencingAttribute eq '" + attributeName + "')";
                    if (IsNullOrUndefined(attributeFilters)) {
                        attributeFilters = attributeFilter;
                    }
                    else {
                        attributeFilters += " or " + attributeFilter;
                    }
                }
                filter = filterStart;
                if (!IsNullOrUndefined(attributeFilters)) {
                    filter += "(" + referencingEntityFilter + " and (" + attributeFilters + "))";
                }
                // for ownerid attribute the refereced entity is "owner" and not systemuser or team, hence the hardcoding for referenced entity.
                // also for activities to owner relationship the referenceing entity is the activitypointer entity.
                if (addOwnerFilter) {
                    var referencingEntity = isActivity ? "activitypointer" : referencingEntityName;
                    if (!IsNullOrUndefined(attributeFilters)) {
                        filter += "or ";
                    }
                    filter += "(ReferencingEntity eq '" + referencingEntity + "' and ReferencedEntity eq 'owner' and ReferencingAttribute eq 'ownerid')";
                }
                filter += filterEnd;
                if (filter.length === "&$filter=()".length) {
                }
                else {
                    var url = url + filter;
                }
                telemetryItem.traceEventInformation("Url for relationship metadata query: " + url);
                return Activities.Common.Util.sendRequest(url, true, telemetryItem);
            }
            Util.getRelationshipsMetadataForLookups = getRelationshipsMetadataForLookups;
            /**
             * returns the error or inner error message
         * @param error the error.
         */
            function tryGetErrorMessage(error) {
                if (!IsNullOrUndefined(error.innerror) && !IsNullOrUndefined(error.innerror.message)) {
                    return error.innerror.message;
                }
                else if (!IsNullOrUndefined(error.message)) {
                    return error.message;
                }
                return error;
            }
            Util.tryGetErrorMessage = tryGetErrorMessage;
            /**
            * Gets AttachmentId from email body
            * @param body email body which would be html with image tags
            */
            function getAttachmentIdsFromEmailBody(body) {
                var mimeAttachmentIds = [];
                if (body) {
                    // get id's from download.aspx uri's && data-attachment-id attributes
                    var downloadUriRegex = /img[^>]+src=[^>]+&attachmentid=(.+?)("|')/gi;
                    var dataAttachmentIdRegex = /img[^>]+data-attachment-id[^>]+?("|')([^'"]+?)("|')/gi;
                    var match = void 0;
                    while ((match = downloadUriRegex.exec(body)) != null) {
                        mimeAttachmentIds.push(match[1]);
                    }
                    while ((match = dataAttachmentIdRegex.exec(body)) != null) {
                        mimeAttachmentIds.push(match[2]);
                    }
                }
                return mimeAttachmentIds;
            }
            Util.getAttachmentIdsFromEmailBody = getAttachmentIdsFromEmailBody;
        })(Util = Common.Util || (Common.Util = {}));
        var ActivityHelper = (function () {
            function ActivityHelper() {
            }
            ActivityHelper.setFocusToSubject = function (form, telemetryItem) {
                try {
                    var subjectControl = form.ui.controls.get("subject");
                    subjectControl.setFocus();
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error setting focus to subject control.", exception.message);
                }
            };
            ActivityHelper.setOwner = function (formContext, telemetryItem) {
                var ownerId = formContext.getAttribute("ownerid");
                try {
                    if (Common.Util.IsNotNull(ownerId) && (Common.Util.IsNullOrUndefined(ownerId.getValue()) || ownerId.getValue().length == 0)
                        && formContext.ui.getFormType() !== 2 /* Update */) {
                        ownerId.setValue(ActivityHelper.getCurrentUser());
                    }
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error setting owner value.", exception.message);
                }
            };
            ActivityHelper.setOrganizer = function (formContext, telemetryItem) {
                try {
                    var organizer = formContext.getAttribute("organizer");
                    if ((organizer) && (Common.Util.IsNullOrUndefined(organizer.getValue()) || organizer.getValue().length == 0)
                        && formContext.ui.getFormType() !== 2 /* Update */) {
                        var ownerId = formContext.getAttribute("ownerid");
                        if ((ownerId) && (ownerId.getValue())) {
                            telemetryItem.traceEventInformation("Organizer value is set as obtained from the FORM");
                            organizer.setValue(ownerId.getValue());
                        }
                        else {
                            telemetryItem.traceEventInformation("Organizer value is set as current user, since not obtained from the FORM");
                            organizer.setValue(ActivityHelper.getCurrentUser());
                        }
                    }
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error setting organizer value.", exception.message);
                }
            };
            ActivityHelper.getCurrentUser = function () {
                var owner = [];
                owner.push({
                    id: Xrm.Utility.getGlobalContext().userSettings.userId,
                    name: Xrm.Utility.getGlobalContext().userSettings.userName,
                    entityType: "systemuser"
                });
                return owner;
            };
            ActivityHelper.getParticipationTypeMask = function (entityName, columnName) {
                var participationTypeMask = {
                    "appointment": { "optionalattendees": 6, "organizer": 7, "requiredattendees": 5 },
                    "campaignactivity": { "partners": 1, "from": 1 },
                    "campaignresponse": { "customer": 11, "partner": 11, "from": 11 },
                    "email": { "bcc": 4, "cc": 3, "from": 1, "to": 2 },
                    "fax": { "from": 1, "to": 2 },
                    "letter": { "bcc": 4, "from": 1, "to": 2 },
                    "phonecall": { "from": 1, "to": 2 },
                    "recurringappointmentmaster": { "optionalattendees": 6, "organizer": 7, "requiredattendees": 5 },
                    "serviceappointment": { "customers": 11, "resources": 10 }
                };
                var entityMasksTypes = participationTypeMask[entityName];
                if (!entityMasksTypes) {
                    return null;
                }
                return entityMasksTypes[columnName];
            };
            ActivityHelper.convertServerTimeToUserLocalTime = function (datetime) {
                datetime = new Date(datetime);
                if (Xrm.Internal.isUci())
                    datetime.setMinutes(datetime.getMinutes() + datetime.getTimezoneOffset() + Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes());
                return datetime;
            };
            ActivityHelper.convertUserLocalTimeToServerTime = function (datetime) {
                datetime = new Date(datetime);
                if (Xrm.Internal.isUci())
                    datetime.setMinutes(datetime.getMinutes() - datetime.getTimezoneOffset() - Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes());
                return datetime;
            };
            ActivityHelper.setAttributeValue = function (eventContext, attributeId, value) {
                var attribute = eventContext.getFormContext().data.attributes.get(attributeId);
                if (attribute != null) {
                    attribute.setValue(value);
                }
            };
            ;
            ActivityHelper.closeDialog = function (eventContext) {
                var lastButtonClicked = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked);
                if (lastButtonClicked != null) {
                    lastButtonClicked.setValue(Activities.Constants.MetadataDrivenDialogConstants.DialogCancelId);
                }
                eventContext.getFormContext().ui.close();
            };
            ;
            return ActivityHelper;
        }());
        Common.ActivityHelper = ActivityHelper;
    })(Common = Activities.Common || (Activities.Common = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var Constants;
    (function (Constants) {
        /// <summary>
        /// Empty Guid String
        /// </summary>
        Constants.EmptyGuid = "{00000000-0000-0000-0000-000000000000}";
        /// <summary>
        /// Empty Guid in String format
        /// </summary>
        Constants.EmptyGuidFormatted = "00000000-0000-0000-0000-000000000000";
        var ViewGuids;
        (function (ViewGuids) {
            //Guid reference values here : src/AppCommon/Data/Database/Metadata/Template/savedqueries.xml
            ViewGuids.MyEmailTemplateView = "{4C7BE207-CC89-4BB7-BB61-BBD5076D05C0}";
            ViewGuids.GlobalEmailTemplateView = "{4D5BE2E9-6828-482b-99AA-2387AFED7B37}";
            ViewGuids.AllLanguageEmailTemplateView = "{DAF88706-1DAD-4810-ADC4-1517ED39F575}";
        })(ViewGuids = Constants.ViewGuids || (Constants.ViewGuids = {}));
        var EntityNames;
        (function (EntityNames) {
            EntityNames.Appointment = "appointment";
            EntityNames.ServiceAppointment = "serviceappointment";
            EntityNames.RecurringAppointmentMaster = "recurringappointmentmaster";
            EntityNames.Email = "email";
            EntityNames.Fax = "fax";
            EntityNames.Letter = "letter";
            EntityNames.ActivityMimeAttachment = "activitymimeattachment";
            EntityNames.ActivityPointer = "activitypointer";
            EntityNames.PhoneCall = "phonecall";
            EntityNames.Task = "task";
            EntityNames.Template = "template";
            EntityNames.EmailSignature = "emailsignature";
            EntityNames.SystemUser = "systemuser";
            EntityNames.Contact = "contact";
            EntityNames.Annotation = "annotation";
        })(EntityNames = Constants.EntityNames || (Constants.EntityNames = {}));
        var OrgSettingsConstant;
        (function (OrgSettingsConstant) {
            OrgSettingsConstant.EnableInsertSignatureInUCI = "EnableInsertSignatureInUCI";
            OrgSettingsConstant.SaveAsDraftOrgSettingName = "AllowSaveAsDraftAppointment";
            // EnableActivitiesFeatures values for different features. the values are in the powers of 2 starting with 1 (2 power 0)
            OrgSettingsConstant.InsertSignatureFeatureBitValue = "1";
        })(OrgSettingsConstant = Constants.OrgSettingsConstant || (Constants.OrgSettingsConstant = {}));
        //PLEASE TAKE CARE TO FOLLOW THE CONVENTION ON NAMING FOR THE BELOW FCB CONSTANTS
        /*if the fcb string has "FCB." prefix, the constant should have FCB as its suffix
          if the fcb string does not have the FCB. prefix, the constant should have "FCB_" as its prefix
          Xrm.Internal.IsFeatureEnabled behaves differently between web and UCI
          For web it honors "FCB." prefix, In UCI it expects without "FCB." prefix.
          Xrm.Internal.isDisruptiveFeatureEnabled is only for UCI and works with "FCB." prefix*/
        var FCBConstant;
        (function (FCBConstant) {
            FCBConstant.EmailEngagementFCB = "FCB.EmailEngagement";
            FCBConstant.FCB_EmailEngagement = "EmailEngagement";
            FCBConstant.SharePointS2SFCB = "FCB.SharePointS2S";
            FCBConstant.FCB_SharePointS2S = "SharePointS2S";
            FCBConstant.OneDriveIntegrationFCB = "FCB.OneDriveIntegration";
            FCBConstant.FCB_OneDriveIntegration = "OneDriveIntegration";
            FCBConstant.EmailEngagementActionFCB = "FCB.EmailEngagementComposeForUCI";
            FCBConstant.FCB_EmailEngagementAction = "EmailEngagementComposeForUCI";
            FCBConstant.EditorToolbarApril2020UpdateFCB = "FCB.EditorToolbar2020Update";
            FCBConstant.TemplatePreviewApril2020UpdateFCB = "FCB.TemplatePreview2020Update";
            FCBConstant.InlineImagesData2020UpdateFCB = "FCB.InlineImagesData2020Update";
            FCBConstant.EmailUx2020UpdateFCB = "FCB.EmailUx2020Update";
            FCBConstant.AppointmentSchedulingInUCIFCB = "FCB.AppointmentSchedulingInUCI";
            FCBConstant.FCB_AllDayEventInUTCMidnight = "FCB.IgnoreTimeInAllDayEventStartAndEnd";
            FCBConstant.AllDayEventInUTCMidnight = "IgnoreTimeInAllDayEventStartAndEnd";
            FCBConstant.April2020UpdateFCB = "FCB.April2020Update";
            FCBConstant.FCB_April2020Update = "April2020Update";
            FCBConstant.FCB_EmailTemplatePreviewEnhancementsEnabled = "EmailTemplatePreviewEnhancementsEnabled";
            FCBConstant.UnresolvedEmailAddressFeatureFCB = "FCB.UnresolvedEmailAddressFeature";
            FCBConstant.SendBulkEmailInUci = "SendBulkEmailInUci";
            FCBConstant.FCB_ConvertDeletedPartiesToUnresolvedEmails = "ConvertDeletedPartiesToUnresolvedEmails";
            FCBConstant.October2020UpdateFCB = "FCB.October2020Update";
            FCBConstant.AttachmentPreviewFCB = "FCB.AttachmentPreviewOctober2020Update";
            FCBConstant.MultiAttachmentUploadOctober2020UpdateFCB = "FCB.MultiAttachmentUploadOctober2020Update";
            FCBConstant.SubGridThumbnailOctober2020UpdateFCB = "FCB.SubGridThumbnailOctober2020Update";
            FCBConstant.FCB_SubGridThumbnailOctober2020Update = "SubGridThumbnailOctober2020Update";
            FCBConstant.TemplateUCIDataOctober2020UpdateFCB = "FCB.TemplateUCIDataOctober2020Update";
            FCBConstant.MailboxEnabledDialogFCB = "FCB.MailboxEnabledDialog";
            FCBConstant.FCB_MailboxEnabledDialog = "MailboxEnabledDialog";
            FCBConstant.EnableEmailEditInMocaFCB = "FCB.EnableEmailEditInMoca";
            FCBConstant.AttachFileAutoSaveOctober2020UpdateFCB = "FCB.AttachFileAutoSaveOctober2020Update";
            FCBConstant.EmailCommandsToSupportActivityPointerGridsFCB = "FCB.EmailCommandsToSupportActivityPointerGrids";
            FCBConstant.FCB_ActivityEditorConfig2020Update = "ActivityEditorConfig2020Update";
            FCBConstant.SafeDescriptionInEmailUCIFCB = "FCB.SafeDescriptionInEmailUCI";
            FCBConstant.FCB_SafeDescriptionInEmailUCI = "SafeDescriptionInEmailUCI";
        })(FCBConstant = Constants.FCBConstant || (Constants.FCBConstant = {}));
        var PerfConstants;
        (function (PerfConstants) {
            PerfConstants.PerfOrgDbOrgSettings = "EnableActivitiesTimeLinePerfImprovement";
            var PerfImprovements;
            (function (PerfImprovements) {
                PerfImprovements[PerfImprovements["FirstStage"] = 1] = "FirstStage";
            })(PerfImprovements = PerfConstants.PerfImprovements || (PerfConstants.PerfImprovements = {}));
        })(PerfConstants = Constants.PerfConstants || (Constants.PerfConstants = {}));
        var AnnotationFields;
        (function (AnnotationFields) {
            AnnotationFields.MimeType = "mimetype";
            AnnotationFields.FileName = "filename";
            AnnotationFields.IsDocument = "isdocument";
            AnnotationFields.DocumentBody = "documentbody";
        })(AnnotationFields = Constants.AnnotationFields || (Constants.AnnotationFields = {}));
        var TelemetryConstant;
        (function (TelemetryConstant) {
            TelemetryConstant.EventName = "EventName";
            TelemetryConstant.StartTime = "StartTime";
            TelemetryConstant.EndTime = "EndTime";
            TelemetryConstant.ExecutionTime = "ExecutionTime";
            TelemetryConstant.BulkEmail = "bulkemail";
            TelemetryConstant.EventSend = "Send";
            TelemetryConstant.EventReply = "Reply";
            TelemetryConstant.EventReplyAll = "ReplyAll";
            TelemetryConstant.EventForward = "Forward";
            TelemetryConstant.EventAddAttachment = "AddAttachment";
            TelemetryConstant.EventAddAttachmentOctober2020 = "AddAttachmentOctober2020";
            TelemetryConstant.EventPreviewAttachmentOctober2020 = "PreviewAttachmentOctober2020";
            TelemetryConstant.EventDownloadAttachmentOctober2020 = "DownloadAttachmentOctober2020";
            TelemetryConstant.EventLoadAttachmentThumbnail = "LoadAttachmentThumbnailOctober2020";
            TelemetryConstant.EventInsertEmailTemplate = "InsertEmailTemplate";
            TelemetryConstant.EventInsertTemplate = "InsertTemplate";
            TelemetryConstant.EventPreviewTemplate = "PreviewTemplate";
            TelemetryConstant.EventTemplatePreviewInit = "TemplatePreviewInit";
            TelemetryConstant.EventTemplatePreviewUpdateView = "TemplatePreviewUpdateView";
            TelemetryConstant.EventTemplatePreviewDestroy = "TemplatePreviewDestroy";
            TelemetryConstant.EventAppointmentOnLoad = "AppointmentOnLoad";
            TelemetryConstant.EventRecurringAppointmentMasterOnLoad = "RecurringAppointmentMasterOnLoad";
            TelemetryConstant.EventEmailOnLoad = "EmailOnLoad";
            TelemetryConstant.EventFaxOnLoad = "FaxOnLoad";
            TelemetryConstant.EventLetterOnLoad = "LetterOnLoad";
            TelemetryConstant.EventPhoneCallOnLoad = "PhoneCallOnLoad";
            TelemetryConstant.EventTaskOnLoad = "TaskOnLoad";
            TelemetryConstant.EventErrorMessage = "ErrorMessage";
            TelemetryConstant.EventWarningMessage = "WarningMessage";
            TelemetryConstant.EventSeriesActionDialogOnLoad = "SeriesActionDialogOnLoad";
            TelemetryConstant.EventAppointmentDeletion = "AppointmentDeletion";
            TelemetryConstant.EventGridAppointmentDeletion = "GridAppointmentDeletion";
            TelemetryConstant.EventUploadFile = "UploadFile";
            TelemetryConstant.EventRemoveAttachment = "RemoveAttachment";
            TelemetryConstant.EventFollowAttachment = "FollowAttachment";
            TelemetryConstant.EventUnFollowAttachment = "UnFollowAttachment";
            TelemetryConstant.EventSelectTemplateRecipientDialogOnLoad = "SelectTemplateRecipientDialog";
            TelemetryConstant.EventApplyEmailTemplateDialogOnLoad = "ApplyEmailTemplateDialogOnLoad";
            TelemetryConstant.EventAttachmentDialogOnLoad = "AttachmentDialogOnLoad";
            TelemetryConstant.EventCommandExceuted = "CommandExceuted";
            TelemetryConstant.EventEntityType = "EntityType";
            TelemetryConstant.EventSourceEntityType = "SourceEntityType";
            TelemetryConstant.EventErrorCount = "ErrorCount";
            TelemetryConstant.EventBulkEmailDialogOnLoad = "BulkEmailDialogOnLoad";
            TelemetryConstant.EventSendBulkEmail = "SendBulkEmail";
            TelemetryConstant.EventBulkEmailLanguageChange = "BulkEmailOnLanguageChange";
            TelemetryConstant.EventBulkEmailTemplateChange = "BulkEmailOnTemplateChange";
            TelemetryConstant.EventBulkEmailSenderChange = "BulkEmailOnSenderChange";
            TelemetryConstant.EventInsertEmailSignatureDialogOnLoad = "InsertEmailSignatureDialogOnLoad";
            TelemetryConstant.EventInsertSignature = "InsertSignature";
            TelemetryConstant.EventIsAllDayOnChange = "IsAllDayEventOnChange";
            TelemetryConstant.EventDirectionCodeOnChange = "DirectionCodeOnChange";
            TelemetryConstant.EventQuickCreateOnChange = "QuickCreateOnSave";
            TelemetryConstant.EventUnresolveEmailAddressLookupDialogOnload = "UnresolveEmailAddressLookupDialogOnload";
            TelemetryConstant.EventParameterFileSize = "param_AttachmentFileSize";
            TelemetryConstant.EventParameterFileType = "param_AttachmentFileType";
            TelemetryConstant.EventParameterAttachmentCount = "param_AttachmentCount";
            TelemetryConstant.EventParameterTemplateInserted = "param_TemplateInserted";
            TelemetryConstant.EventParameterTemplateId = "param_TemplateId";
            TelemetryConstant.EventEditRecurrence = "RecurrenceDialog";
            TelemetryConstant.EventEndSeries = "EndSeries";
            TelemetryConstant.EventEditSeries = "EditSeries";
            TelemetryConstant.EventRecurringAppointmentDelete = "RecurringAppointmentDelete";
            TelemetryConstant.EventGridRecurringAppointmentDelete = "EventGridRecurringAppointmentDelete";
            TelemetryConstant.RecurrenceDialogAction = "RecurrenceDialogAction";
            TelemetryConstant.FromAppointment = "FromAppointment";
            TelemetryConstant.EndSeriesDialogAction = "EndSeriesDialogAction";
            TelemetryConstant.EnablePerfImprovements = "EnablePerfImprovements";
            TelemetryConstant.UseSchedulingEngine = "UseSchedulingEngine";
            TelemetryConstant.EventAppointmentOnSave = "AppointmentOnSave";
            TelemetryConstant.RecurrinAppointmentOnSave = "RecurrinAppointmentOnSave";
            TelemetryConstant.EventBPFNavigationOnAppointmentForm = "BPFNavigationOnAppointmentForm";
            TelemetryConstant.ExecutionContextMissing = "Execution context is missing from the handler";
            TelemetryConstant.TemplatePreviewClicked = "TemplatePreviewClicked";
            TelemetryConstant.EventAnnotationFileDownload = "NoteFileNameClicked";
            TelemetryConstant.EventNoteAttachmentControlUpdateView = "NoteAttachmentControlUpdateView";
            TelemetryConstant.EventNoteRegardingControlUpdateView = "NoteRegardingControlUpdateView";
            TelemetryConstant.EventNoteNavigateToRegarding = "NoteNavigateToRegarding";
            TelemetryConstant.EventNoteRegardingControlInit = "NoteRegardingControlInit";
        })(TelemetryConstant = Constants.TelemetryConstant || (Constants.TelemetryConstant = {}));
        var DialogNames;
        (function (DialogNames) {
            DialogNames.ApplyEmailTemplate = "ApplyEmailTemplate";
            DialogNames.SelectTemplateRecipient = "SelectTemplateRecipient";
            DialogNames.UpdateAttachment = "UpdateAttachment";
            DialogNames.InsertSignature = "InsertSignature";
            DialogNames.AppointmentSchedulingConflict = "AppointmentSchedulingConflict";
            DialogNames.EmailTemplatePreview = "EmailTemplateDialog";
            DialogNames.LearnMoreDialog = "LearnMoreDialog";
        })(DialogNames = Constants.DialogNames || (Constants.DialogNames = {}));
        var MetadataDrivenDialogConstants;
        (function (MetadataDrivenDialogConstants) {
            // Entity Names
            MetadataDrivenDialogConstants.EmailSignatureEntityName = "emailsignature";
            MetadataDrivenDialogConstants.EmailEntityName = "email";
            MetadataDrivenDialogConstants.TemplateEntityName = "template";
            // Attribute Names
            MetadataDrivenDialogConstants.SubjectAttribute = "subject";
            MetadataDrivenDialogConstants.DescriptionAttribute = "description";
            // Insert Email Template Dialog parameters.
            MetadataDrivenDialogConstants.ParamLastButtonClicked = "param_lastButtonClicked";
            MetadataDrivenDialogConstants.ParamEntityId = "param_entityId";
            MetadataDrivenDialogConstants.ParamEmailFormData = "param_emailFormData";
            MetadataDrivenDialogConstants.ParamEntityType = "param_entityType";
            MetadataDrivenDialogConstants.ParamEmailSubject = "param_emailsubject";
            MetadataDrivenDialogConstants.ParamEmailDescription = "param_emaildescription";
            MetadataDrivenDialogConstants.ParamTemplateId = "param_templateId";
            MetadataDrivenDialogConstants.ParamEmailEntityId = "param_id";
            // Insert Signature dialog parameters.
            MetadataDrivenDialogConstants.ParamSignatureText = "param_signaturetext";
            MetadataDrivenDialogConstants.ParamOwnerId = "param_ownerId";
            // Scheduling Conflict Dialog Constants
            MetadataDrivenDialogConstants.ParamIsDraft = "param_isDraft";
            MetadataDrivenDialogConstants.ParamNotificationsData = "param_notificationsData";
            MetadataDrivenDialogConstants.ParamActivityType = "param_activityType";
            MetadataDrivenDialogConstants.RecipientNames = "name";
            MetadataDrivenDialogConstants.KeyPresent = "KeyPresent";
            MetadataDrivenDialogConstants.EmailFormData = "emailFormData";
            MetadataDrivenDialogConstants.EmailEntityType = "entityType";
            MetadataDrivenDialogConstants.EmailEntityId = "id";
            MetadataDrivenDialogConstants.EntityTypeCode = "entityTypeCode";
            MetadataDrivenDialogConstants.LastButtonClicked = "lastButtonClicked";
            MetadataDrivenDialogConstants.EmailSubject = "emailsubject";
            MetadataDrivenDialogConstants.TemplateId = "templateId";
            MetadataDrivenDialogConstants.EntityType = "type";
            MetadataDrivenDialogConstants.SelectControlName = "select_id";
            MetadataDrivenDialogConstants.SendControlName = "send_id";
            MetadataDrivenDialogConstants.TemplatePreviewControlName = "template_preview";
            MetadataDrivenDialogConstants.TemplateInsertDataControlName = "template_insert_data";
            MetadataDrivenDialogConstants.BulkEmailSenderControlName = "sender_id";
            MetadataDrivenDialogConstants.BulkEmailSelectedRecordsParam = "param_selectedRecords";
            MetadataDrivenDialogConstants.BulkEmailRecipientsControlName = "recipients";
            MetadataDrivenDialogConstants.GridControl = "param_gridControl";
            MetadataDrivenDialogConstants.PreviewControlName = "preview_id";
            MetadataDrivenDialogConstants.EntityId = "entityId";
            MetadataDrivenDialogConstants.EntityTypeInfo = "entityTypeInfo";
            MetadataDrivenDialogConstants.FieldControlName = "fieldname_id";
            MetadataDrivenDialogConstants.RecordControlName = "record_id";
            MetadataDrivenDialogConstants.ControlNullError = " control cannot be null";
            MetadataDrivenDialogConstants.EmailTemplateControlName = "emailtemplates_id";
            MetadataDrivenDialogConstants.DefaultLookupName = "default";
            MetadataDrivenDialogConstants.LanguageId = "language_id";
            MetadataDrivenDialogConstants.SaveControlId = "save_id";
            MetadataDrivenDialogConstants.ConflictDialogDescription1ControlId = "description1_id";
            MetadataDrivenDialogConstants.ConflictDialogDescription2ControlId = "description2_id";
            MetadataDrivenDialogConstants.ProgressValue = 40;
            MetadataDrivenDialogConstants.ProgressMinValue = 0;
            MetadataDrivenDialogConstants.ProgressMaxValue = 100;
            MetadataDrivenDialogConstants.DialogOkId = "ok_id";
            MetadataDrivenDialogConstants.DialogCancelId = "cancel_id";
            MetadataDrivenDialogConstants.AttachementSubGridControl = "attachmentsGrid";
            MetadataDrivenDialogConstants.EmailSignatureControl = "signatures_id";
            MetadataDrivenDialogConstants.UnresolvedAddress = "unresolvedaddress";
            MetadataDrivenDialogConstants.Required = "requiredattendees";
            MetadataDrivenDialogConstants.Optional = "optionalattendees";
            //lookup names
            MetadataDrivenDialogConstants.From = 'from';
            MetadataDrivenDialogConstants.To = 'to';
            MetadataDrivenDialogConstants.Cc = 'cc';
            MetadataDrivenDialogConstants.Bcc = 'bcc';
            //Mailbox not enabled dialog parameters
            MetadataDrivenDialogConstants.ParamLearnMoreLink = "param_learnMoreLink";
            MetadataDrivenDialogConstants.ParamPrimaryText = "param_primarytext";
            MetadataDrivenDialogConstants.ParamTitleText = "param_titletext";
            MetadataDrivenDialogConstants.ParamLearnMoreButtonLabel = "param_learnMoreLabel";
            MetadataDrivenDialogConstants.ParamContinueButtonLabel = "param_continueLabel";
            //Mailbox not enabled dialog controls
            MetadataDrivenDialogConstants.ControlTitle = "title_id";
            MetadataDrivenDialogConstants.ControlPrimaryText = "primarytext_id";
            MetadataDrivenDialogConstants.ControlLearnMoreButton = "learnmore_id";
            MetadataDrivenDialogConstants.ControlContinueButton = "continue_id";
        })(MetadataDrivenDialogConstants = Constants.MetadataDrivenDialogConstants || (Constants.MetadataDrivenDialogConstants = {}));
        var HtmlTags;
        (function (HtmlTags) {
            HtmlTags.Div = "div";
            HtmlTags.Paragraph = "p";
            HtmlTags.Img = "img";
            HtmlTags.Iframe = "iframe";
        })(HtmlTags = Constants.HtmlTags || (Constants.HtmlTags = {}));
        var HtmlTagSelectors;
        (function (HtmlTagSelectors) {
            HtmlTagSelectors.DialogMainDiv = "div[data-preview-id={0}]"; // replace {0} with form id
            HtmlTagSelectors.DialogHeaderDiv = "div[data-id=dialogHeader]";
            HtmlTagSelectors.DialogFooterDiv = "div[data-id=dialogFooter]";
        })(HtmlTagSelectors = Constants.HtmlTagSelectors || (Constants.HtmlTagSelectors = {}));
        var HtmlAttributes;
        (function (HtmlAttributes) {
            HtmlAttributes.Src = "src";
            HtmlAttributes.Base64Template = "data:{0};base64,{1}"; // replace {0} with mimetype and {1} with base64 content
        })(HtmlAttributes = Constants.HtmlAttributes || (Constants.HtmlAttributes = {}));
        var HtmlStyles;
        (function (HtmlStyles) {
            HtmlStyles.Hidden = "hidden";
            HtmlStyles.OneHundredPercent = "100%";
            HtmlStyles.Zero = "0";
            HtmlStyles.Auto = "auto";
            HtmlStyles.Pixel = "px";
            HtmlStyles.Center = "center";
            HtmlStyles.None = "none";
            HtmlStyles.InlineFlex = "inline-flex";
            HtmlStyles.FlexDirectionColumn = "column";
            HtmlStyles.FontWeight600 = "600";
            HtmlStyles.FontSize18 = "18px";
        })(HtmlStyles = Constants.HtmlStyles || (Constants.HtmlStyles = {}));
        // The order of these should be same as defined in FeatureList dictionary defined in PackageTemplate.cs
        var ActivitiesFeature;
        (function (ActivitiesFeature) {
            ActivitiesFeature.ActivitiesFeatureOrgDbOrgSettings = "EnableActivitiesFeatures";
            var ActivitiesFeatureList;
            (function (ActivitiesFeatureList) {
                ActivitiesFeatureList[ActivitiesFeatureList["EnableInsertSignatureInUCI"] = 1] = "EnableInsertSignatureInUCI";
            })(ActivitiesFeatureList = ActivitiesFeature.ActivitiesFeatureList || (ActivitiesFeature.ActivitiesFeatureList = {}));
        })(ActivitiesFeature = Constants.ActivitiesFeature || (Constants.ActivitiesFeature = {}));
        var AppointmentStatusCode;
        (function (AppointmentStatusCode) {
            AppointmentStatusCode[AppointmentStatusCode["busy"] = 5] = "busy";
        })(AppointmentStatusCode = Constants.AppointmentStatusCode || (Constants.AppointmentStatusCode = {}));
        var AppointmentStateCode;
        (function (AppointmentStateCode) {
            AppointmentStateCode[AppointmentStateCode["open"] = 0] = "open";
            AppointmentStateCode[AppointmentStateCode["completed"] = 1] = "completed";
            AppointmentStateCode[AppointmentStateCode["canceled"] = 2] = "canceled";
            AppointmentStateCode[AppointmentStateCode["scheduled"] = 3] = "scheduled";
        })(AppointmentStateCode = Constants.AppointmentStateCode || (Constants.AppointmentStateCode = {}));
        var SaveMode;
        (function (SaveMode) {
            SaveMode[SaveMode["save"] = 1] = "save";
            SaveMode[SaveMode["saveandclose"] = 2] = "saveandclose";
            SaveMode[SaveMode["deactivate"] = 5] = "deactivate";
            SaveMode[SaveMode["saveascompleted"] = 58] = "saveascompleted";
            SaveMode[SaveMode["autosave"] = 70] = "autosave";
        })(SaveMode = Constants.SaveMode || (Constants.SaveMode = {}));
        var DateTimeFieldBehavior;
        (function (DateTimeFieldBehavior) {
            DateTimeFieldBehavior[DateTimeFieldBehavior["None"] = 0] = "None";
            DateTimeFieldBehavior[DateTimeFieldBehavior["UserLocal"] = 1] = "UserLocal";
            DateTimeFieldBehavior[DateTimeFieldBehavior["DateOnly"] = 2] = "DateOnly";
            DateTimeFieldBehavior[DateTimeFieldBehavior["TimeZoneIndependent"] = 3] = "TimeZoneIndependent";
        })(DateTimeFieldBehavior = Constants.DateTimeFieldBehavior || (Constants.DateTimeFieldBehavior = {}));
        var AttributeSubmitModes;
        (function (AttributeSubmitModes) {
            //change this to string enum when upgrading to typecript
            AttributeSubmitModes[AttributeSubmitModes["dirty"] = 0] = "dirty";
            AttributeSubmitModes[AttributeSubmitModes["always"] = 1] = "always";
            AttributeSubmitModes[AttributeSubmitModes["never"] = 2] = "never";
        })(AttributeSubmitModes = Constants.AttributeSubmitModes || (Constants.AttributeSubmitModes = {}));
        var AttributeRequiredLevel;
        (function (AttributeRequiredLevel) {
            AttributeRequiredLevel.None = "none";
            AttributeRequiredLevel.Required = "required";
            AttributeRequiredLevel.Recommended = "recommended";
        })(AttributeRequiredLevel = Constants.AttributeRequiredLevel || (Constants.AttributeRequiredLevel = {}));
        var FormNotificationLevel;
        (function (FormNotificationLevel) {
            FormNotificationLevel.Error = "ERROR";
            FormNotificationLevel.Warning = "WARNING";
            FormNotificationLevel.Info = "INFO";
        })(FormNotificationLevel = Constants.FormNotificationLevel || (Constants.FormNotificationLevel = {}));
        var Templates;
        (function (Templates) {
            // entity attribute names
            Templates.SafeHtml = "safehtml";
            Templates.SubjectSafeHtml = "subjectsafehtml";
            Templates.Subject = "subject";
            Templates.Description = "description";
            // dialog names
            Templates.InsertDataDialog = "EmailTemplateInsertDataValue";
            Templates.CreateTemplateDialog = "CreateTemplateDialog";
            Templates.ConvertEmailToTemplateDialog = "ConvertEmailToTemplateDialog";
            // dialog field identifiers
            Templates.TemplateNameId = "templateNameId";
            Templates.PermissionLevelId = "permissionLevelId";
            Templates.LanguageId = "languageId";
            // dialog query parameters
            Templates.ParamCategory = "param_category";
            Templates.ParamSubject = "param_subject";
            Templates.ParamBody = "param_body";
            Templates.ParamEmailId = "param_emailId";
            Templates.ParamTemplateRecord = "param_templateRecord";
            // resx
            Templates.RequiredFieldsErrorMessage = "RequiredFieldsErrorMessage";
            Templates.ConvertingEmailToTemplateProgressMessage = "ConvertingEmailToTemplateProgressMessage";
            Templates.CopyingAttachmentsToTemplateMessage = "CopyingAttachmentsToTemplateMessage";
            Templates.CreatingTemplateProgressMessage = "CreatingTemplateProgressMessage";
            Templates.ErrorCreateTemplate = "ErrorCreateTemplate";
            Templates.ErrorCopyAttachmentsToTemplate = "ErrorCopyAttachmentsToTemplate";
            Templates.ErrorRetrievingAttachmentsForTemplate = "ErrorRetrievingAttachmentsForTemplate";
            Templates.CreateOrgEmailTemplatesPrivilegeId = "01750f14-3320-49cc-a7d1-52502cdcd16d";
            Templates.Header_Ownerid = "header_ownerid";
            Templates.TemplateTypeCode = "templatetypecode";
            Templates.templateFormCkeditorControl = {
                RichTextEditor: "Rich text editor",
                ActivityEditor: false
            };
            // TemplateInsertDataControl
            Templates.RemoveLabel = "InsertDataRemoveButtonLabel";
            Templates.MoveUpLabel = "InsertDataMoveUpButtonLabel";
            Templates.MoveDownLabel = "InsertDataMoveDownButtonLabel";
            Templates.iconDics = {
                "InsertDataRemoveButtonLabel": 7,
                "InsertDataMoveUpButtonLabel": 58,
                "InsertDataMoveDownButtonLabel": 59
            };
            // dialog names       
            Templates.BlankTemplateBase64 = '/9j/4AAQSkZJRgABAQEAYABgAAD/4RCgRXhpZgAATU0AKgAAAAgABAE7AAIAAAAPAAAISodpAAQAAAABAAAIWpydAAEAAAAeAAAQeuocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENoYW50YWwgTXVydGh5AAAAAeocAAcAAAgMAAAIbAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQwBoAGEAbgB0AGEAbAAgAE0AdQByAHQAaAB5AAAA/+EKZ2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iLz48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+PGRjOmNyZWF0b3I+PHJkZjpTZXEgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOmxpPkNoYW50YWwgTXVydGh5PC9yZGY6bGk+PC9yZGY6U2VxPg0KCQkJPC9kYzpjcmVhdG9yPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMABwUFBgUEBwYFBggHBwgKEQsKCQkKFQ8QDBEYFRoZGBUYFxseJyEbHSUdFxgiLiIlKCkrLCsaIC8zLyoyJyorKv/bAEMBBwgICgkKFAsLFCocGBwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKv/AABEIASoBLwMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APpGiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKK5DW/ir4M8OavNpes6z9mvIMeZF9lmfbkZHKoR0PrQB19FcD/wALw+Hn/Qw/+SVx/wDG6P8AheHw8/6GH/ySuP8A43QB31FcD/wvD4ef9DD/AOSVx/8AG6P+F4fDz/oYf/JK4/8AjdAHfUVwP/C8Ph5/0MP/AJJXH/xuj/heHw8/6GH/AMkrj/43QB31FcJB8a/h9cXEcMfiFQ8jBVL2s6Lk+rFAAPcnFd0rB1DIQysMgg5BFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXyF8bP+Su6x9Y//Ra19e18hfGz/krusfWP/wBFrTQmbOn/ALPPizUdNtr2DUNGWO5iWVA88oYBhkZxH15qx/wzZ4w/6CWif9/5v/jVfQ/hX/kT9I/68of/AEAVq0XCx8x/8M2eMP8AoJaJ/wB/5v8A41R/wzZ4w/6CWif9/wCb/wCNV9OUUXYWPmP/AIZs8Yf9BLRP+/8AN/8AGqP+GbPGH/QS0T/v/N/8ar6coouwsfDninw3eeEvEdzoupSQS3Ntt3vbsShyoPBIB7+leo/B34xHRGh8O+KZy2msQlrducm2PZWP9z3/AIfp05T42f8AJXdY+sf/AKLWtHx58JZ9D8N2HiXQVkn02e1ikuovvNbMVBLe6E9+1MR9VqwdQyEMrDIIOQRS182/B34xHRGh8O+KZy2msQlrducm2PZWP9z3/h+nT6RVg6hkIZWGQQcgipKFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+QvjZ/yV3WPrH/AOi1r69r5C+Nn/JXdY+sf/otaaEz6o8K/wDIn6R/15Q/+gCtWsrwr/yJ+kf9eUP/AKAK1aQwooooAKKKKAPkL42f8ld1j6x/+i1r6m8MxpL4L0qOVFdHsIlZWGQwKDIIr5Z+Nn/JXdY+sf8A6LWo7X4z+PrKzhtbXXtkMCCONfscB2qBgDJTPSq6EnT/ABg+D7+G5Jdf8NQs+kOd09uoybQnuP8AY/l9KsfB34xHRGh8O+KZy2msQlrducm2PZWP9z3/AIfp05OT42fECWNo5deV0cFWVrG3IYHqCPLrhZJDLK0jbQzEk7VCjn0A4H0FAH3urB1DIQysMgg5BFLXhn7O/jLVNSW78OahJ9otbKAS20jnLxjdjZnuvPHp9OnudSUFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFfIXxs/5K7rH1j/8ARa19e18hfGz/AJK7rH1j/wDRa00Jn1R4V/5E/SP+vKH/ANAFatZXhX/kT9I/68of/QBWrSGFFFFABRRRQBkX3hHw3qd493qXh/Sru5kxvmuLKOR2wMcsVyar/wDCBeD/APoVNE/8F0P/AMTW/RQBgf8ACBeD/wDoVNE/8F0P/wATXD/GHwl4c0z4Xapd6b4f0uzuUMeya3so43XMig4YDIr1evP/AI3/APJItW+sX/oxaYjyz9mn/kcNW/68h/6GK+k6+bP2af8AkcNW/wCvIf8AoYr6Toe4IKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvkL42f8ld1j6x/+i1r69r5C+Nn/JXdY+sf/otaaEz6o8K/8ifpH/XlD/6AK1ayvCv/ACJ+kf8AXlD/AOgCtWkMKKKKACiiigAooooAK8/+N/8AySLVvrF/6MWvQK8/+N//ACSLVvrF/wCjFoA8s/Zp/wCRw1b/AK8h/wChivpOvmz9mn/kcNW/68h/6GK+k6b3EgooopDCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK+QvjZ/wAld1j6x/8Aota+va+QvjZ/yV3WPrH/AOi1poTPqjwr/wAifpH/AF5Q/wDoArVrK8K/8ifpH/XlD/6AK1aQwooooAKKKKACiiigArz/AON//JItW+sX/oxa9Arz/wCN/wDySLVvrF/6MWgDyz9mn/kcNW/68h/6GK+k6+bP2af+Rw1b/ryH/oYr6TpvcSCiiikMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAr5C+Nn/JXdY+sf/ota+va+QvjZ/yV3WPrH/6LWmhM+qPCv/In6R/15Q/+gCtWsrwr/wAifpH/AF5Q/wDoArVpDCiiigAooooAKKKKACvP/jf/AMki1b6xf+jFr0CvP/jf/wAki1b6xf8AoxaAPLP2af8AkcNW/wCvIf8AoYr6Tr5s/Zp/5HDVv+vIf+hivpOm9xIKKKKQwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACvkL42f8AJXdY+sf/AKLWvr2vnL4o/Crxn4j+I2papo2jfabOcp5cv2qFN2EAPDOD1HpTQmet+G/HHhSDwrpUU/ifRo5I7OJXR9QiDKQgyCC3BrT/AOE98H/9DXon/gxh/wDiq+Yv+FH/ABD/AOhe/wDJ23/+OUf8KP8AiH/0L3/k7b//ABynZAfTv/Ce+D/+hr0T/wAGMP8A8VR/wnvg/wD6GvRP/BjD/wDFV8xf8KP+If8A0L3/AJO2/wD8co/4Uf8AEP8A6F7/AMnbf/45RZAfTv8Awnvg/wD6GvRP/BjD/wDFUf8ACe+D/wDoa9E/8GMP/wAVXzF/wo/4h/8AQvf+Ttv/APHKP+FH/EP/AKF7/wAnbf8A+OUWQH07/wAJ74P/AOhr0T/wYw//ABVH/Ce+D/8Aoa9E/wDBjD/8VXzF/wAKP+If/Qvf+Ttv/wDHKP8AhR/xD/6F7/ydt/8A45RZAfTv/Ce+D/8Aoa9E/wDBjD/8VXD/ABh8W+HNT+F2qWmm+INLvLlzHsht72OR2xIpOFBya8a/4Uf8Q/8AoXv/ACdt/wD45R/wo/4h/wDQvf8Ak7b/APxyiyA6n9mn/kcNW/68h/6GK+k68R+B/wAPfE/g/wASajdeI9M+xwzWojjb7RFJltwOMIxPSvbqTBBRRRSGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9k=';
            Templates.defaultFieldPlaceHolder = "---";
            Templates.defaultTextLabel = "InsertDataDefaultTextLabel";
            Templates.recordTypeLabel = "InsertDataRecordTypeLabel";
            Templates.fieldNameLabel = "InsertDataFieldNameLabel";
            Templates.addDataFieldLabel = "InsertDataAddDataFieldButtonLabel";
            Templates.CommonWebResource = "Activities/Resources/Activities";
            Templates.RTEdefaultWebResource = "msdyn_/RichTextEditorControl/RTEGlobalConfiguration.json";
            Templates.malformedDefaultValue = "malformedDefaultValue";
            Templates.subjectSafeHtmlNotification = "subjectsafehtml_RequiredFieldMustBeFilledIn";
            Templates.RequiredFieldMustBeFilledIn = "RequiredFieldMustBeFilledIn";
            Templates.RetrieveRecordTypeComponent = "TemplateInsertDataControl_RetrieveRecordType";
            Templates.RetrieveFieldNameComponent = "TemplateInsertDataControl_RetrieveFieldName";
            Templates.NotFocusedOnSubjectOrBody = "NotFocusedOnSubjectOrBody";
            Templates.nodeType = {
                ELEMENT_NODE: 1,
                TEXT_NODE: 3,
            };
        })(Templates = Constants.Templates || (Constants.Templates = {}));
        var keyboardEvent;
        (function (keyboardEvent) {
            keyboardEvent.keyCode = {
                ArrowRight: "ArrowRight",
                ArrowLeft: "ArrowLeft",
                ArrowUp: "ArrowUp",
                ArrowDown: "ArrowDown",
                Backspace: "Backspace"
            };
        })(keyboardEvent = Constants.keyboardEvent || (Constants.keyboardEvent = {}));
        var MailBoxConstants;
        (function (MailBoxConstants) {
            MailBoxConstants.OutgoingEmailDeliveryMethod = "outgoingemaildeliverymethod";
            MailBoxConstants.EnabledForOutgoingEmail = "enabledforoutgoingemail";
            MailBoxConstants.OutgoingEmailStatus = "outgoingemailstatus";
            var MailboxAccessStatus;
            (function (MailboxAccessStatus) {
                MailboxAccessStatus[MailboxAccessStatus["NotRun"] = 0] = "NotRun";
                MailboxAccessStatus[MailboxAccessStatus["Success"] = 1] = "Success";
                MailboxAccessStatus[MailboxAccessStatus["Failure"] = 2] = "Failure";
            })(MailboxAccessStatus = MailBoxConstants.MailboxAccessStatus || (MailBoxConstants.MailboxAccessStatus = {}));
            var EmailDeliveryMethod;
            (function (EmailDeliveryMethod) {
                EmailDeliveryMethod[EmailDeliveryMethod["Unset"] = -1] = "Unset";
                EmailDeliveryMethod[EmailDeliveryMethod["None"] = 0] = "None";
                EmailDeliveryMethod[EmailDeliveryMethod["OutlookClient"] = 1] = "OutlookClient";
                EmailDeliveryMethod[EmailDeliveryMethod["EmailRouter"] = 2] = "EmailRouter";
                EmailDeliveryMethod[EmailDeliveryMethod["ForwardMailbox"] = 3] = "ForwardMailbox";
            })(EmailDeliveryMethod = MailBoxConstants.EmailDeliveryMethod || (MailBoxConstants.EmailDeliveryMethod = {}));
            var EmailConnectionChannel;
            (function (EmailConnectionChannel) {
                EmailConnectionChannel[EmailConnectionChannel["SSS"] = 0] = "SSS";
                EmailConnectionChannel[EmailConnectionChannel["Router"] = 1] = "Router";
            })(EmailConnectionChannel = MailBoxConstants.EmailConnectionChannel || (MailBoxConstants.EmailConnectionChannel = {}));
        })(MailBoxConstants = Constants.MailBoxConstants || (Constants.MailBoxConstants = {}));
    })(Constants = Activities.Constants || (Activities.Constants = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var ClientApi;
    (function (ClientApi) {
        ClientApi.IsUci = Xrm.Internal.isUci();
        function getResourceString(key) {
            try {
                var value = ClientApi.ClientApiAbstracts.Instance().getResourceString(key);
                return value;
            }
            catch (exception) {
                //not adding separate telemetry as the error is already logged from the function called in try block
                //this is to handle webclient/ur2 client issue - bug:1834000
                return key;
            }
        }
        ClientApi.getResourceString = getResourceString;
        //To be moved to Common
        function getFormUIForRibbon(form) {
            return ClientApi.ClientApiAbstracts.Instance().getFormUi(form);
        }
        ClientApi.getFormUIForRibbon = getFormUIForRibbon;
        function getFormDataForRibbon(form) {
            return ClientApi.ClientApiAbstracts.Instance().getFormData(form);
        }
        ClientApi.getFormDataForRibbon = getFormDataForRibbon;
        /// <summary>
        /// Error message resource id prefix
        /// </summary>
        var ErrorMessageIdPrefix = "Error_Message_0x";
        var Generic_Error_Mesage = "Generic_ErrorMessage";
        var GenericErrorDialogKey = "Error_In_Dialog_Open";
        /// <summary>
        /// string of hex format error code
        /// </summary>
        /// <param name="errorCode">The error code </param>
        /// <returns>hex format error code</returns>
        function getHexErrorCode(errorCode) {
            var code = errorCode;
            if (code < 0) {
                // Handle negative decimal values 
                code = (code + 0xFFFFFFFF + 1);
            }
            //Converting the Hex string to lower case to maintain the convention
            return code.toString(16).toLowerCase();
        }
        function getErrorMessageKey(errorCode) {
            return ErrorMessageIdPrefix + getHexErrorCode(errorCode);
        }
        function getErrorMessage(errorCode) {
            var completeErrorCode = getErrorMessageKey(errorCode);
            var errorMessage = ClientApi.ClientApiAbstracts.Instance().getResourceString(completeErrorCode);
            if (Activities.Common.Util.IsNullOrEmptyString(errorMessage) || errorMessage === completeErrorCode) {
                return null;
            }
            else {
                return errorMessage;
            }
        }
        function dialogActionRawFailedCallback(response, telemetryitem) {
            if (!Activities.Common.Util.IsNullOrUndefined(telemetryitem)) {
                telemetryitem.traceEventError("Error in dialog action.", response);
                telemetryitem.report();
            }
            try {
                var errorMessage = response.message;
                var jsonResponse = response.raw && JSON.parse(response.raw);
                //if there are any parameters in error message and raw response is not null
                if (!Activities.Common.Util.IsNullOrUndefined(errorMessage) && errorMessage.indexOf("{0}") != -1 && !Activities.Common.Util.IsNullOrUndefined(jsonResponse)
                    && !Activities.Common.Util.IsNullOrUndefined(jsonResponse._organizationServiceFault) && !Activities.Common.Util.IsNullOrUndefined(jsonResponse._organizationServiceFault._annotations)) {
                    var i = 0;
                    while (i < 10) {
                        if (errorMessage.indexOf("{" + i + "}") != -1) {
                            var param = jsonResponse._organizationServiceFault._annotations["@Microsoft.PowerApps.CDS.ErrorDetails." + i];
                            if (!Activities.Common.Util.IsNullOrUndefined(param)) {
                                errorMessage = errorMessage.replace("{" + i + "}", param);
                            }
                        }
                        else {
                            break;
                        }
                        i++;
                    }
                }
                var options = {
                    errorCode: response.errorCode,
                    message: errorMessage,
                };
                Xrm.Navigation.openErrorDialog(options);
            }
            catch (exception) {
                Xrm.Navigation.openErrorDialog(response);
            }
        }
        ClientApi.dialogActionRawFailedCallback = dialogActionRawFailedCallback;
        function dialogActionFailedCallback(response, telemetryitem) {
            if (!Activities.Common.Util.IsNullOrUndefined(telemetryitem)) {
                telemetryitem.traceEventError("Error in dialog action.", response);
                telemetryitem.report();
            }
            Xrm.Navigation.openErrorDialog(response);
        }
        ClientApi.dialogActionFailedCallback = dialogActionFailedCallback;
        function dialogOpenFailedCallback(response, telemetryitem) {
            var genericErrorMessage = getResourceString(GenericErrorDialogKey);
            if (!Activities.Common.Util.IsNullOrUndefined(telemetryitem)) {
                telemetryitem.traceEventError("Error opening dialog.", response);
                telemetryitem.report();
            }
            openAlertDialog(genericErrorMessage);
        }
        ClientApi.dialogOpenFailedCallback = dialogOpenFailedCallback;
        function openDialogFailedCallback(response) {
            var genericErrorMessage = getResourceString(GenericErrorDialogKey);
            openAlertDialog(genericErrorMessage);
        }
        ClientApi.openDialogFailedCallback = openDialogFailedCallback;
        function IsMocaOffline() {
            return IsMobileClient() && IsOffline();
        }
        ClientApi.IsMocaOffline = IsMocaOffline;
        function IsOffline() {
            return Xrm.Utility.getGlobalContext().client.getClientState() == Xrm.Constants.ClientStates.offline;
        }
        ClientApi.IsOffline = IsOffline;
        function IsMobileClient() {
            return Xrm.Utility.getGlobalContext().client.getClient() == Xrm.Constants.ClientNames.mobile;
        }
        ClientApi.IsMobileClient = IsMobileClient;
        function IsOutlookClient() {
            return Xrm.Utility.getGlobalContext().client.getClient() == Xrm.Constants.ClientNames.outlook;
        }
        ClientApi.IsOutlookClient = IsOutlookClient;
        function getWindowCenter() {
            return ClientApi.ClientApiAbstracts.Instance().WindowPositionCenter;
        }
        ClientApi.getWindowCenter = getWindowCenter;
        function openAlertDialog(text) {
            return ClientApi.ClientApiAbstracts.Instance().openAlertDialog(text);
        }
        ClientApi.openAlertDialog = openAlertDialog;
        function openDialog(name, options, parameters) {
            return ClientApi.ClientApiAbstracts.Instance().openDialog(name, options, parameters);
        }
        ClientApi.openDialog = openDialog;
        function openConfirmDialog(confirmStrings, options) {
            return ClientApi.ClientApiAbstracts.Instance().openConfirmDialog(confirmStrings, options);
        }
        ClientApi.openConfirmDialog = openConfirmDialog;
        function retrieveRecord(entityName, recordId, options) {
            if (ClientApi.IsMocaOffline()) {
                return Xrm.WebApi.offline.retrieveRecord(entityName, recordId, options);
            }
            else {
                return Xrm.WebApi.online.retrieveRecord(entityName, recordId, options);
            }
        }
        ClientApi.retrieveRecord = retrieveRecord;
        // Web resource names for getResources
        var CommonWebResource = "Activities/Resources/Activities";
        var ClientApiAbstracts = (function () {
            function ClientApiAbstracts() {
                this.WindowPositionCenter = 1 /* center */;
            }
            ClientApiAbstracts.Instance = function () {
                if (this._clientApi != null) {
                    return this._clientApi;
                }
                if (Xrm.Internal.isUci()) {
                    ClientApiAbstracts._clientApi = new UClientApi();
                }
                else {
                    this._clientApi = new WebClientApi();
                }
                return this._clientApi;
            };
            ClientApiAbstracts.prototype.getResourceString = function (key, webResourceName) {
                if (webResourceName === void 0) { webResourceName = CommonWebResource; }
                return Xrm.Utility.getResourceString(webResourceName, key);
            };
            ClientApiAbstracts.prototype.openAlertDialog = function (text) {
                return Xrm.Navigation.openAlertDialog({ "text": text }, null);
            };
            ClientApiAbstracts.prototype.openDialog = function (name, options, parameters) {
                return Xrm.Navigation.openDialog(name, options, parameters);
            };
            ClientApiAbstracts.prototype.openConfirmDialog = function (confirmStrings, options) {
                return Xrm.Navigation.openConfirmDialog(confirmStrings, options);
            };
            return ClientApiAbstracts;
        }());
        ClientApiAbstracts._clientApi = null;
        ClientApi.ClientApiAbstracts = ClientApiAbstracts;
        var UClientApi = (function (_super) {
            __extends(UClientApi, _super);
            function UClientApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UClientApi.prototype.getFormData = function (form) {
                return form.data;
            };
            UClientApi.prototype.getFormUi = function (form) {
                return form.ui;
            };
            return UClientApi;
        }(ClientApiAbstracts));
        var WebClientApi = (function (_super) {
            __extends(WebClientApi, _super);
            function WebClientApi() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            WebClientApi.prototype.getFormData = function (form) {
                return Xrm.Page.data;
            };
            WebClientApi.prototype.getFormUi = function (form) {
                return Xrm.Page.ui;
            };
            return WebClientApi;
        }(ClientApiAbstracts));
    })(ClientApi = Activities.ClientApi || (Activities.ClientApi = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var AddAttachment = (function () {
        function AddAttachment() {
        }
        /// <summary>
        /// Opens MDD Dialog for attachment
        /// </summary>
        AddAttachment.openAddAttachmentDialog = function (primaryRecordId, gridControl, records) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, "AttachmentDialogOnLoad");
            AddAttachment.addAttachmentInternal(primaryRecordId, gridControl, telemetryItem);
        };
        ;
        //Attach from Ribbon
        AddAttachment.openAddAttachmentDialogFormCommand = function (form, primaryRecordId, attachmentsGridName) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, "AttachmentDialogOnLoad (Ribbon)");
            var subGridControl = form.getControl(attachmentsGridName);
            AddAttachment.addAttachmentInternal(primaryRecordId, subGridControl, telemetryItem, form);
        };
        ;
        /// <summary>
        /// Internal method to add an attachment
        /// Will either add an attachment through a dialog or the mult-attachment experience (October 2020)
        /// </summary>
        AddAttachment.addAttachmentInternal = function (primaryRecordId, gridControl, telemetryItem, form) {
            var dialogParams = {};
            var isUci = Xrm.Internal.isUci();
            var entityName = gridControl.getParentForm().data.entity.getEntityName();
            var isMultiAttachmentUploadEnabled = Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.MultiAttachmentUploadOctober2020UpdateFCB, Activities.Constants.FCBConstant.October2020UpdateFCB);
            if (isMultiAttachmentUploadEnabled) {
                // October 2020 multi-attachment experience enabled
                var featureUsageTelemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventAddAttachmentOctober2020);
                featureUsageTelemetryItem.traceFeatureUsage(Activities.Constants.FCBConstant.MultiAttachmentUploadOctober2020UpdateFCB, isMultiAttachmentUploadEnabled);
                if (!Activities.Common.Util.IsNullOrUndefined(form) &&
                    form.ui.getFormType() == 1 &&
                    Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.AttachFileAutoSaveOctober2020UpdateFCB, Activities.Constants.FCBConstant.October2020UpdateFCB)) {
                    // automatically save the form and then upload attachments
                    form.data.save().then(function () {
                        AddAttachment.uploadAttachments(gridControl);
                    });
                }
                else {
                    AddAttachment.uploadAttachments(gridControl);
                }
            }
            else {
                // default attachment dialog experience
                dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterEntityName] = entityName;
                if (Activities.Common.Util.isEmailEngagementFCBEnabled(isUci) && Activities.Common.Util.isEmailEngagementActionsFCBEnabled(isUci)) {
                    AddAttachment.addEmailFollowStatusToDialogParams(entityName, gridControl, dialogParams);
                }
                AddAttachment.openDialog(dialogParams, primaryRecordId, '', "1", gridControl, telemetryItem);
            }
        };
        // Adds Email Follow status to dialog params if the entity is email
        AddAttachment.addEmailFollowStatusToDialogParams = function (entityName, subGridControl, dialogParams) {
            if (entityName === Activities.Common.Util.AttachmentDialogConstants.AttachmentParentEntityEmailLogicalName) {
                var emailFollowStatus = subGridControl.formContext.data.entity.attributes.get(Activities.Common.Util.AttachmentDialogConstants.IsEmailFollowed) ? subGridControl.formContext.data.entity.attributes.get(Activities.Common.Util.AttachmentDialogConstants.IsEmailFollowed).getValue() : false;
                dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterIsEmailFollowed] = emailFollowStatus;
            }
        };
        AddAttachment.openEditAttachmentDialog = function (primaryRecordId, gridControl, records) {
            if (Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.AttachmentPreviewFCB, Activities.Constants.FCBConstant.October2020UpdateFCB) && records.length === 1) {
                var recordId = Activities.Common.Util.convertGuidToString(records[0].Id);
                if (AddAttachment.isAttachmentPreviewSupported(gridControl)) {
                    // supported mime type for preview
                    // open the October 2020 attachment preview experience
                    AddAttachment.openAttachmentPreview(recordId);
                }
                else {
                    // not supported for preview automatically download
                    var formContext = gridControl && gridControl.getParentForm();
                    this.downloadAttachments(formContext, records);
                }
            }
            else {
                // open standard edit attachment dialog experience
                AddAttachment.openEditAttachmentDialogInternal(primaryRecordId, gridControl, records);
            }
        };
        /**
         * Opens a preview dialog for a selected attachment
         * @param attachmentId id of the attachment record to preview
         */
        AddAttachment.openAttachmentPreview = function (attachmentId) {
            if (attachmentId) {
                var dialogParams = {};
                dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId] = attachmentId;
                var dialogOptions = {
                    width: "65%",
                    height: "80%",
                    position: Activities.ClientApi.getWindowCenter(),
                };
                Xrm.Navigation.openDialog(Activities.Common.Util.AttachmentDialogConstants.AttachmentPreviewDialogName, dialogOptions, dialogParams);
            }
        };
        /**
         * Determines whether or not the selected attachments supports preview functionality
         * @param gridControl the grid where the attachment was selected from
         */
        AddAttachment.isAttachmentPreviewSupported = function (gridControl) {
            var selectedRows = gridControl && gridControl.getGrid() && gridControl.getGrid().getSelectedRows();
            var selectedRowData = selectedRows && selectedRows.get(0) && selectedRows.get(0).getData();
            var selectedEntity = selectedRowData && selectedRowData.getEntity();
            var selectedEntityAtrributes = selectedEntity && selectedEntity.attributes;
            var mimeTypeAttribute = selectedEntityAtrributes && selectedEntityAtrributes.getByName(Activities.Constants.AttachmentConstants.MimeType);
            var mimeType = mimeTypeAttribute && mimeTypeAttribute.getValue();
            return !Activities.Common.Util.IsNullOrUndefined(mimeType) && (mimeType.indexOf('image') !== -1 || mimeType.indexOf('pdf') !== -1);
        };
        AddAttachment.openEditAttachmentDialogInternal = function (primaryRecordId, gridControl, records) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, "EditAttachment");
            var attachmentId = '';
            var entityId = primaryRecordId;
            var dialogParams = {};
            var isUci = Xrm.Internal.isUci();
            var attachmentGridControl = (gridControl);
            var entityName = attachmentGridControl.formContext.data.entity.getEntityName();
            if (records != undefined && records.length == 1) {
                attachmentId = records[0].Id;
                var filter = "?$select=" + Activities.Constants.AttachmentConstants.MimeType + "," + Activities.Constants.AttachmentConstants.FileName + "," + Activities.Constants.AttachmentConstants.FileSize + "," + Activities.Constants.AttachmentConstants.Body;
                Xrm.WebApi.retrieveRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentId, filter).then(function (entity) {
                    dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterFileType] = entity[Activities.Constants.AttachmentConstants.MimeType];
                    dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterFileName] = entity[Activities.Constants.AttachmentConstants.FileName];
                    dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterFileSize] = entity[Activities.Constants.AttachmentConstants.FileSize].toString();
                    dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterFileContent] = entity[Activities.Constants.AttachmentConstants.Body];
                    dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterEntityName] = entityName;
                    if (Activities.Common.Util.isEmailEngagementFCBEnabled(isUci) && Activities.Common.Util.isEmailEngagementActionsFCBEnabled(isUci))
                        AddAttachment.addEmailEngagementParams(entityName, entity, attachmentGridControl, dialogParams);
                    AddAttachment.openDialog(dialogParams, entityId, attachmentId, "0", gridControl, telemetryItem);
                }, function (errorResponse) {
                    Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
                });
            }
            else if (records.length > 1) {
                return;
            }
            else {
                AddAttachment.openDialog(dialogParams, entityId, attachmentId, "1", gridControl, telemetryItem);
            }
        };
        ;
        // Adds Email Follow status to dialog params if the entity is email
        AddAttachment.addEmailEngagementParams = function (entityName, entity, attachmentGridControl, dialogParams) {
            if (entityName === Activities.Common.Util.AttachmentDialogConstants.AttachmentParentEntityEmailLogicalName) {
                var emailFollowStatus = attachmentGridControl.formContext.data.entity.attributes.get(Activities.Common.Util.AttachmentDialogConstants.IsEmailFollowed) ? attachmentGridControl.formContext.data.entity.attributes.get(Activities.Common.Util.AttachmentDialogConstants.IsEmailFollowed).getValue() : false;
                dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterIsFollowed] = entity[Activities.Constants.AttachmentConstants.IsFollowed];
                dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterIsEmailFollowed] = emailFollowStatus;
            }
        };
        /// <summary>
        /// Validate and Upload File
        /// </summary>
        AddAttachment.attachmentUploadHandler = function (eventContext, telemetryItem) {
            var attributes = eventContext.getFormContext().data.attributes;
            var entityName = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterEntityName).getValue();
            var entityId = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterEntityId).getValue();
            var fileName = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileName).getValue();
            var fileContent = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileContent).getValue();
            var mimeType = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileType).getValue();
            var fileSize = attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileSize).getValue();
            var file = {
                fileName: fileName,
                fileContent: fileContent,
                fileSize: fileSize,
                mimeType: mimeType
            };
            AddAttachment.validateUploadFiles(entityId, entityName, file, telemetryItem, eventContext).catch(function () { }); // ignore rejection as error handling is handled within validateUploadFiles
        };
        /// <summary>
        /// Opens new/edit Dialog based on params
        /// </summary>
        AddAttachment.openDialog = function (dialogParams, entityId, attachmentId, attachmentReadMode, gridControl, telemetryItem) {
            if (dialogParams === void 0) { dialogParams = {}; }
            dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterEntityId] = entityId;
            dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId] = attachmentId;
            dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterParentEntityLogicalName] = Xrm.Page.data.entity.getEntityName();
            dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterFileMode] = attachmentReadMode;
            var dialogOptions = {
                height: 280,
                width: 520,
                position: Activities.ClientApi.getWindowCenter()
            };
            Xrm.Navigation.openDialog(Activities.Common.Util.AttachmentDialogConstants.AddAttachmentToActivityDialogName, dialogOptions, dialogParams).then(function (data) {
                // Refresh the grid only if the attachment has changed
                if (gridControl && data && dialogParams && data.parameters[Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId] != dialogParams[Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId]) {
                    gridControl.refresh();
                }
            }, function (errorResponse) {
                Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
                if (gridControl != null)
                    gridControl.refresh();
            });
        };
        /// <summary>
        /// Method to check if Follow feature for attachment can be enabled or not
        /// </summary>
        AddAttachment.isFollowFeatureEnabled = function (isUci, documentEnableResponse) {
            return Activities.Common.Util.isEmailEngagementFCBEnabled(isUci) && Activities.Common.Util.isEmailEngagementActionsFCBEnabled(isUci) && Activities.Common.Util.isOneDriveFCBEnabled(isUci) && Activities.Common.Util.isSharePointFCBEnabled(isUci) && Activities.Common.Util.isEmailEngagementAndOneDriveEnabledAtOrgLevel() && documentEnableResponse;
        };
        /// <summary>
        /// MDD Dialog Onload handler
        /// </summary>
        AddAttachment.onLoad = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventAttachmentDialogOnLoad);
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventSourceEntityType + ": " + eventContext.getFormContext().data.attributes.get("param_entityName").getValue());
            var entityName = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterEntityName) ? eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterEntityName).getValue() : "";
            if (entityName === Activities.Common.Util.AttachmentDialogConstants.AttachmentParentEntityEmailLogicalName) {
                AddAttachment.handleOnLoadForEmail(eventContext);
                telemetryItem.report();
            }
            else {
                AddAttachment.attachmentButtonHandler(eventContext);
            }
        };
        AddAttachment.handleOnLoadForEmail = function (eventContext) {
            var isUci = Xrm.Internal.isUci();
            AddAttachment.isAttachmentFollowed = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterIsFollowed).getValue();
            Activities.Common.Util.isDocumentManagementEnabled().then(function (response) {
                var isFollowFeatureEnabled = AddAttachment.isFollowFeatureEnabled(isUci, response);
                var emailFollowedStatus = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterIsEmailFollowed).getValue();
                AddAttachment.attachmentFollowStatus = emailFollowedStatus && isFollowFeatureEnabled;
                AddAttachment.attachmentButtonHandler(eventContext);
            }, function (error) {
                AddAttachment.attachmentButtonHandler(eventContext);
            });
        };
        /// <summary>
        /// Attachment follow beahviour
        /// </summary>
        AddAttachment.attachmentButtonHandler = function (eventContext) {
            var attachmentId = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).getValue();
            var lblSubHeading = eventContext.getFormContext().ui.controls.get("lbl_descriptionattachment_id");
            var lblAttachMessage = eventContext.getFormContext().ui.controls.get("attachmentControl");
            if (!Activities.Common.Util.IsNullOrWhiteSpace(attachmentId)) {
                // Existing attachment
                if (AddAttachment.attachmentFollowStatus) {
                    AddAttachment.toggleFollowButton(false, eventContext, !AddAttachment.isAttachmentFollowed);
                }
                else {
                    AddAttachment.toggleFollowButton(false, eventContext, null);
                }
                AddAttachment.toggleButton(false, eventContext, lblSubHeading, lblAttachMessage);
            }
            else {
                // New attachment
                AddAttachment.toggleButton(true, eventContext, lblSubHeading, lblAttachMessage);
                AddAttachment.toggleFollowButton(true, eventContext, null);
            }
        };
        /// <summary>
        /// Toggle MDD Dialog Follow button visibility
        /// </summary>
        AddAttachment.toggleFollowButton = function (visible, eventContext, isFollowed) {
            if (isFollowed !== null) {
                if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId) != null) {
                    eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId).setVisible(!visible && !isFollowed);
                }
                if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId) != null) {
                    eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId).setVisible(!visible && isFollowed);
                }
            }
            else {
                if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId) != null) {
                    eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId).setVisible(false);
                }
                if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId) != null) {
                    eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId).setVisible(false);
                }
            }
        };
        /// <summary>
        /// Toggle MDD Dialog button visibility
        /// </summary>
        AddAttachment.toggleButton = function (visible, eventContext, labelSubHeading, labelAttachMessage) {
            if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId) != null) {
                eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId).setVisible(visible);
            }
            if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonRemoveId) != null) {
                eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonRemoveId).setVisible((Activities.ClientApi.IsOffline() ? false : !visible));
            }
            if (labelSubHeading != null) {
                labelSubHeading.setLabel(visible ? Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.NewAttachmentFormDescription) : Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.ExistingAttachmentFormDescription));
            }
            if (labelAttachMessage != null) {
                labelAttachMessage.setLabel(visible ? Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.NewAttachmentLabelMessage) + ":" : Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.NewAttachmentLabelMessage));
            }
        };
        AddAttachment.validationFailureHandler = function (eventContext, errorText, fileName) {
            var isMultiAttachmentUploadEnabled = Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.MultiAttachmentUploadOctober2020UpdateFCB, Activities.Constants.FCBConstant.October2020UpdateFCB);
            //enabling attach button and opening alert dialog
            var dialogMessage = {
                title: isMultiAttachmentUploadEnabled && !Activities.Common.Util.IsNullOrWhiteSpace(fileName) && fileName,
                text: errorText,
                confirmButtonLabel: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.ButtonOk)
            };
            eventContext && eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId).setDisabled(false);
            Xrm.Navigation.openAlertDialog(dialogMessage);
            return Promise.reject(errorText);
        };
        AddAttachment.xhrFailureHandler = function (eventContext, xhrErrorResponse, telemetryItem) {
            eventContext && eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId).setDisabled(false);
            Activities.ClientApi.dialogActionFailedCallback(xhrErrorResponse, telemetryItem);
            return Promise.reject(xhrErrorResponse);
        };
        /// <summary>
        /// Close Dialog
        /// </summary>
        AddAttachment.closeDialog = function (eventContext) {
            var context = eventContext.getFormContext();
            context.ui.close();
        };
        /// <summary>
        /// Validate and Remove attachment
        /// </summary>
        AddAttachment.remove = function (attachmentId, eventContext, telemetryItem) {
            var confirmDialogStrings = { text: "" };
            confirmDialogStrings.title = "";
            confirmDialogStrings.text = Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.ConfirmAttachmentRemoval);
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventRemoveAttachment);
            Xrm.Navigation.openConfirmDialog(confirmDialogStrings, AddAttachment.defaultDialogOptions()).then(function (response) {
                if (response.confirmed) {
                    var filter = "?$select=" + Activities.Constants.AttachmentConstants.MimeType;
                    Xrm.WebApi.retrieveRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentId, filter).then(function (response) {
                        Xrm.WebApi.deleteRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentId).then(function (response) {
                            // alert success and refresh page
                            var fileRemovalMessage = {
                                text: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.RemovedAttachmentConfirmation),
                                confirmButtonLabel: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.ButtonOk)
                            };
                            Xrm.Navigation.openAlertDialog(fileRemovalMessage).then(function (response) {
                                // Set attachment Id to null as attached file is removed
                                eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).setValue(null);
                                eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileType).setValue(null);
                                eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileMode).setValue("1");
                                eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileName).setValue(null);
                                eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileSize).setValue(null);
                                var lblSubHeading = eventContext.getFormContext().ui.controls.get("lbl_descriptionattachment_id");
                                var lblAttachMessage = eventContext.getFormContext().ui.controls.get("attachmentControl");
                                // Toggle button and enable attach button, hide remove button
                                AddAttachment.toggleButton(true, eventContext, lblSubHeading, lblAttachMessage);
                                AddAttachment.toggleFollowButton(true, eventContext, null);
                                // Setting focus on close button
                                eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonCloseId).setFocus();
                                //enabling attach button
                                eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId).setDisabled(false);
                                telemetryItem.report();
                            }, function (errorResponse) {
                                Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
                            });
                        }, function (errorResponse) {
                            Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
                        });
                    }, function (errorResponse) {
                        Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
                    });
                }
            }, function (errorResponse) {
                Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
            });
        };
        /// <summary>
        /// validate files before uploading
        /// </summary>
        AddAttachment.validateUploadFiles = function (entityId, entityName, file, telemetryItem, eventContext) {
            // File is not selected 
            if (Activities.Common.Util.IsNull(file.fileName)) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.FileNotFound));
            }
            else if (Activities.Common.Util.IsNullOrWhiteSpace(file.fileName) || file.fileName.length <= 0) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.UnsupportedAttachment));
            }
            else if (file.fileName.length > 165) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.FileNameLengthExceeded), file.fileName);
            }
            else if (file.fileContent == null) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.EmptyFile), file.fileName);
            }
            return AddAttachment.isBlockedAttachment(entityId, entityName, file, telemetryItem, eventContext);
        };
        /// <summary>
        /// Is type of file in blocked attachment list
        /// </summary>
        AddAttachment.isBlockedAttachment = function (entityId, entityName, file, telemetryItem, eventContext) {
            var lastIndex = file.fileName.lastIndexOf('.');
            // File name has dot either at start or at the end
            if (lastIndex <= 0 || lastIndex == file.fileName.length - 1) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.InvalidFileExtension), file.fileName);
            }
            // File extension is missing
            var extension = file.fileName.substr(lastIndex + 1);
            if (Activities.Common.Util.IsNull(extension)) {
                return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.InvalidFileExtension), file.fileName);
            }
            var blockedAttachments = "";
            var maxUploadFileSize = 0;
            return Xrm.WebApi.retrieveRecord(Activities.Common.Util.AttachmentDialogConstants.OrganizationEntityLogicalName, Xrm.Utility.getGlobalContext().organizationSettings.organizationId, Activities.Common.Util.AttachmentDialogConstants.OrganizationEntityQuery).then(function (entity) {
                if (Activities.Common.Util.IsNull(entity)) {
                    //A generic message when org data retrieve call fails
                    return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.GenericError));
                }
                blockedAttachments = entity[Activities.Common.Util.AttachmentDialogConstants.OrganizationEntityColumnBlockedAttachments];
                maxUploadFileSize = entity[Activities.Common.Util.AttachmentDialogConstants.OrganizationEntityColumnMaxUploadFileSize];
                // Actual size of the file on disk
                if (file.fileSize > maxUploadFileSize) {
                    maxUploadFileSize = maxUploadFileSize / 1024;
                    var errorTextMsg = Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.FileSizeExceeded);
                    errorTextMsg = errorTextMsg.replace("{0}", maxUploadFileSize.toString());
                    return AddAttachment.validationFailureHandler(eventContext, errorTextMsg, file.fileName);
                }
                var blockedAttachmentsList = blockedAttachments ? blockedAttachments.toLowerCase().split(";") : [];
                var position = blockedAttachmentsList.indexOf(extension.toLowerCase());
                if (position > 0) {
                    return AddAttachment.validationFailureHandler(eventContext, Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.InvalidFileExtension), file.fileName);
                }
                else {
                    eventContext && eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileType).setValue(extension);
                    telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventParameterFileType + ": " + extension);
                    telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventParameterFileSize + ": " + file.fileContent.length);
                    return AddAttachment.uploadFile(entityId, entityName, file, eventContext, telemetryItem);
                }
            }, function (errorResponse) {
                //enabling attach button and showing error response
                return AddAttachment.xhrFailureHandler(eventContext, errorResponse, telemetryItem);
            });
        };
        /// <summary>
        /// Upload File
        /// </summary>
        AddAttachment.uploadFile = function (entityId, entityName, file, eventContext, telemetryItem) {
            entityId = Activities.Common.Util.convertGuidToString(entityId);
            var attachmentEntity;
            if (entityName == Activities.Constants.EntityNames.Email) {
                attachmentEntity = {
                    "body": file.fileContent,
                    "mimetype": file.mimeType,
                    "filename": file.fileName,
                    "objectid_email@odata.bind": "emails(" + entityId + ")",
                    "objecttypecode": Activities.Common.Util.AttachmentDialogConstants.AttachmentParentEntityEmailLogicalName
                };
            }
            else if (entityName == Activities.Constants.EntityNames.Appointment) {
                attachmentEntity = {
                    "body": file.fileContent,
                    "mimetype": file.mimeType,
                    "filename": file.fileName,
                    "objectid_appointment@odata.bind": "appointments(" + entityId + ")",
                    "objecttypecode": Activities.Common.Util.AttachmentDialogConstants.AttachmentParentEntityAppointmentLogicalName
                };
            }
            else if (entityName == Activities.Constants.EntityNames.Template) {
                attachmentEntity = {
                    "body": file.fileContent,
                    "mimetype": file.mimeType,
                    "filename": file.fileName,
                    "objectid_template@odata.bind": "templates(" + entityId + ")",
                    "objecttypecode": 'template'
                };
            }
            // It creates the record. Probably need to show error message in case create record throws error. 
            return Xrm.WebApi.createRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentEntity).then(function (createdAttachmentEntityRef) {
                if (eventContext) {
                    // To-Do : Get created attachmentId and assign to parameter -- createdAttachmentEntityRef.id.guid is giving compilation error
                    eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).setValue(createdAttachmentEntityRef.id);
                    eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileMode).setValue("0");
                    eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterFileName).setValue(file.fileName);
                    var lblSubHeading = eventContext.getFormContext().ui.controls.get("lbl_descriptionattachment_id");
                    var lblAttachMessage = eventContext.getFormContext().ui.controls.get("attachmentControl");
                    // Toggle button and hide attach button, show remove button
                    AddAttachment.toggleButton(false, eventContext, lblSubHeading, lblAttachMessage);
                    if (AddAttachment.attachmentFollowStatus) {
                        AddAttachment.toggleFollowButton(false, eventContext, true);
                    }
                    else {
                        AddAttachment.toggleFollowButton(false, eventContext, null);
                    }
                    // Setting focus on close button
                    eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonCloseId).setFocus();
                }
                telemetryItem.report();
            }, function (errorResponse) {
                //enabling attach button and showing error response
                return AddAttachment.xhrFailureHandler(eventContext, errorResponse, telemetryItem);
            });
        };
        /// <summary>
        /// Follow button click handler
        /// </summary>
        AddAttachment.followAttachmentClick = function (eventContext) {
            var temeletryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventFollowAttachment);
            temeletryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventSourceEntityType + ": " + eventContext.getFormContext().data.attributes.get("param_entityName").getValue());
            eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId).setDisabled(true);
            var activityMimeAttachmentId = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).getValue();
            if (activityMimeAttachmentId != null) {
                var FollowEmailAttachmentRequest = new Activities.FollowEmailAttachmentRequest(activityMimeAttachmentId);
                AddAttachment.handleAttachmentFollow(eventContext, temeletryItem, FollowEmailAttachmentRequest, Activities.Constants.TelemetryConstant.EventFollowAttachment, Activities.Common.Util.AttachmentDialogConstants.ButtonFollowId, false);
            }
        };
        ;
        /// <summary>
        /// Unfollow button click handler
        /// </summary>
        AddAttachment.unFollowAttachmentClick = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventUnFollowAttachment);
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventSourceEntityType + ": " + eventContext.getFormContext().data.attributes.get("param_entityName").getValue());
            var activityMimeAttachmentId = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).getValue();
            eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId).setDisabled(true);
            if (activityMimeAttachmentId != null) {
                var UnfollowEmailAttachmentRequest = new Activities.UnfollowEmailAttachmentRequest(activityMimeAttachmentId);
                AddAttachment.handleAttachmentFollow(eventContext, telemetryItem, UnfollowEmailAttachmentRequest, Activities.Constants.TelemetryConstant.EventUnFollowAttachment, Activities.Common.Util.AttachmentDialogConstants.ButtonUnFollowId, true);
            }
        };
        ;
        AddAttachment.handleAttachmentFollow = function (eventContext, telemetryItem, attachmentRequest, eventName, buttonId, toggleStatus) {
            var lblSubHeading = eventContext.getFormContext().ui.controls.get("lbl_descriptionattachment_id");
            var lblAttachMessage = eventContext.getFormContext().ui.controls.get("attachmentControl");
            Xrm.WebApi.online.execute(attachmentRequest).then(function (response) {
                eventContext.getFormContext().ui.controls.get(buttonId).setDisabled(false);
                telemetryItem.report();
                AddAttachment.toggleButton(false, eventContext, lblSubHeading, lblAttachMessage);
                AddAttachment.toggleFollowButton(false, eventContext, toggleStatus);
            }, function (error) {
                telemetryItem.traceEventError("Error while unfollowing.", error.innerror.message);
                telemetryItem.report();
                Xrm.Navigation.openErrorDialog(error);
                eventContext.getFormContext().ui.controls.get(buttonId).setDisabled(false);
            });
        };
        /// <summary>
        /// Attach button click handler
        /// </summary>
        AddAttachment.addAttachmentToActivityDialogOkClick = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventAddAttachment);
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventSourceEntityType + ": " + eventContext.getFormContext().data.attributes.get("param_entityName").getValue());
            // The Client API is returning NULL for IE browser. Thus to avoid the script error added the NULL chcek. ALso opened a follow up bug on the client api team BUG - 1362681
            if (eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId) != null) {
                eventContext.getFormContext().ui.controls.get(Activities.Common.Util.AttachmentDialogConstants.ButtonAttachId).setDisabled(true);
            }
            AddAttachment.attachmentUploadHandler(eventContext, telemetryItem);
        };
        ;
        /// <summary>
        /// Remove button click handler
        /// </summary>
        AddAttachment.addAttachmentDialogRemoveClick = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventRemoveAttachment);
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.EventSourceEntityType + ": " + eventContext.getFormContext().data.attributes.get("param_entityName").getValue());
            var attachmentId = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).getValue();
            if (!Activities.Common.Util.IsNullOrWhiteSpace(attachmentId)) {
                AddAttachment.remove(attachmentId, eventContext, telemetryItem);
            }
            else {
                var errorMessage = {
                    text: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.NonEditableDialog),
                    confirmButtonLabel: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.ButtonOk)
                };
                telemetryItem.traceEventError(Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.NonEditableDialog));
                telemetryItem.report();
                Xrm.Navigation.openAlertDialog(errorMessage);
            }
        };
        /// <summary>
        /// Download an attachment from the preview dialog
        /// </summary>
        AddAttachment.downloadAttachmentDialog = function (eventContext) {
            var attachmentId = eventContext.getFormContext().data.attributes.get(Activities.Common.Util.AttachmentDialogConstants.ParameterAttachmentId).getValue();
            if (attachmentId) {
                Activities.Common.AttachmentDownloadUtility.downloadAttachment(attachmentId)
                    .catch(function (errorResponse) {
                    // an error occurred while trying to download the attachment(s)
                    var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventDownloadAttachmentOctober2020);
                    telemetryItem.traceEventError("Failed to download attachment", errorResponse);
                    telemetryItem.report();
                    Xrm.Navigation.openAlertDialog({
                        text: Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadGenericError),
                    });
                });
            }
        };
        /// <summary>
        /// Downloads one or many attachments
        /// </summary>
        AddAttachment.downloadAttachments = function (formContext, records) {
            if (records && records.length > 0) {
                // show a notification to the user to indicate the the files are beginning to download
                formContext.ui.setFormNotification(Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadFormNotification), Activities.Constants.AttachmentConstants.DownloadFormNotificationLevel, Activities.Constants.AttachmentConstants.AttachmentFormNotificationId);
                // collection of download promises
                var promises_1 = [];
                // download each of the selected attachments
                records.forEach(function (record) {
                    promises_1.push(Activities.Common.AttachmentDownloadUtility.downloadAttachment(record.Id));
                });
                Promise.all(promises_1)
                    .then(function () {
                    // finished downloading attachments, wait at least 2 seconds before clearing the notification
                    setTimeout(function () { formContext.ui.clearFormNotification(Activities.Constants.AttachmentConstants.AttachmentFormNotificationId); }, 2000);
                })
                    .catch(function (errorResponse) {
                    // an error occurred while trying to download the attachment(s)
                    var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventDownloadAttachmentOctober2020);
                    telemetryItem.traceEventError("Failed to download attachment", errorResponse);
                    telemetryItem.report();
                    formContext.ui.clearFormNotification(Activities.Constants.AttachmentConstants.AttachmentFormNotificationId);
                    Xrm.Navigation.openAlertDialog({
                        text: Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadGenericError),
                    });
                });
            }
        };
        /// <summary>
        /// Uploads one or many attachments
        /// </summary>
        AddAttachment.uploadAttachments = function (gridControl) {
            var formContext = gridControl && gridControl.getParentForm();
            var entity = formContext && formContext.data && formContext.data.entity;
            var entityId = entity && entity.getId();
            var entityName = entity && entity.getEntityName();
            // ensure required parameters are present
            if (Activities.Common.Util.IsNullOrUndefined(entityId) || Activities.Common.Util.IsNullOrUndefined(entityName)) {
                // unable to add attachment if an associated entity and id is not present
                Xrm.Navigation.openAlertDialog({
                    text: Activities.ClientApi.getResourceString(Activities.Common.Util.AttachmentDialogConstants.GenericError),
                });
                return;
            }
            // file picker options
            var options = {
                allowMultipleFiles: true,
            };
            // open file picker
            Xrm.Device.pickFile(options).then(function (files) {
                files.forEach(function (file) {
                    var fileUploadTelemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventAddAttachmentOctober2020);
                    AddAttachment.validateUploadFiles(entityId, entityName, file, fileUploadTelemetryItem)
                        .then(function () { return gridControl.refresh(); })
                        .catch(function () { }); // ignore rejection as error handling is handled within validateUploadFiles
                });
            }, function (errorResponse) {
                Xrm.Navigation.openAlertDialog({
                    text: errorResponse.message,
                });
            });
        };
        /**
         * Handler to set a custom conditional image on the attachment sub grid
         * Used to support thumbnail images on image type attachments
         * @param dataSetRecord a single record in the grid
         * @param userLCID user language code id
         */
        AddAttachment.setThumbnailImage = function (dataSetRecord, userLCID) {
            var thumbnailFCB = Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.SubGridThumbnailOctober2020UpdateFCB, Activities.Constants.FCBConstant.October2020UpdateFCB);
            if (dataSetRecord && thumbnailFCB) {
                var telemetryItem_1 = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.ActivityMimeAttachment, Activities.Constants.TelemetryConstant.EventLoadAttachmentThumbnail);
                var attachmentRecord_1 = null;
                // try to parse dataset record json
                try {
                    attachmentRecord_1 = JSON.parse(dataSetRecord);
                }
                catch (err) {
                    // failed to parse json
                    telemetryItem_1.traceEventError("Failed to parse grid dataset record json", err);
                    telemetryItem_1.report();
                    return null;
                }
                // fetch body from attachment and return base64 content and tooltip array
                var attachmentId_1 = attachmentRecord_1 && attachmentRecord_1.RowId;
                var mimeType_1 = attachmentRecord_1 && attachmentRecord_1.mimetype;
                if (mimeType_1 && mimeType_1.indexOf('image') !== -1) {
                    var attachmentObjectUrl = Activities.Common.AttachmentBlobUtility.getExistingObjectUrl(attachmentId_1);
                    if (attachmentObjectUrl) {
                        // already have blob url so just return
                        return Promise.resolve([attachmentObjectUrl, attachmentRecord_1.filename]);
                    }
                    var filter = "?$select=" + Activities.Constants.AttachmentConstants.Body;
                    return Xrm.WebApi.retrieveRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentId_1, filter).then(function (attachment) {
                        var body = attachment[Activities.Constants.AttachmentConstants.Body];
                        return [Activities.Common.AttachmentBlobUtility.createObjectUrl(attachmentId_1, body, mimeType_1), attachmentRecord_1.filename];
                    }, function (err) {
                        // error retrieving body of attachment
                        telemetryItem_1.traceEventError("Failed to retrieve body from attachment", err);
                        telemetryItem_1.report();
                        return null;
                    });
                }
            }
            return null;
        };
        return AddAttachment;
    }());
    /// <summary>
    /// default Dialog Options
    /// </summary>
    AddAttachment.defaultDialogOptions = function () {
        var dialogOptions = { height: 300, width: 450, position: 1 /* center */ };
        return dialogOptions;
    };
    AddAttachment.attachmentFollowStatus = false;
    AddAttachment.isAttachmentFollowed = false;
    Activities.AddAttachment = AddAttachment;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var Common;
    (function (Common) {
        /**
         * Utility for converting an attachment to a blob and creating a local object url
         */
        var AttachmentBlobUtility = (function () {
            function AttachmentBlobUtility() {
            }
            /**
             * Converts the attachment body to a Blob
             *
             * @param body base64 body content of the attachment
             * @param mimeType mime type of the attachment
             */
            AttachmentBlobUtility.convertToBlob = function (body, mimeType) {
                if (Common.Util.IsNullOrEmptyString(body) || Common.Util.IsNullOrEmptyString(mimeType)) {
                    return null;
                }
                var bodyByteString = atob(body);
                var bodyBuffer = new ArrayBuffer(bodyByteString.length);
                var bodyView = new Uint8Array(bodyBuffer);
                for (var i = 0; i < bodyByteString.length; i++) {
                    bodyView[i] = bodyByteString.charCodeAt(i);
                }
                return new Blob([bodyBuffer], { type: mimeType });
            };
            /**
             * Trys to get an existing object url if it exists
             * Otherwise will return null
             * @param attachmentId used to find a corresponding object url if it exists
             */
            AttachmentBlobUtility.getExistingObjectUrl = function (attachmentId) {
                if (attachmentId in this.attachmentToBlobUrlMap) {
                    // already have blob url so just return
                    return this.attachmentToBlobUrlMap[attachmentId];
                }
                return null;
            };
            /**
             * Creates a new object url for the attachment
             * Will use existing url if possible
             *
             * @param attachmentId the associated id for the attachment
             * @param body base64 body content of the attachment
             * @param mimeType mime type of the attachment
             */
            AttachmentBlobUtility.createObjectUrl = function (attachmentId, body, mimeType) {
                var objectUrl = this.getExistingObjectUrl(attachmentId);
                if (!Common.Util.IsNullOrUndefined(objectUrl)) {
                    return objectUrl;
                }
                var attachmentBlob = this.convertToBlob(body, mimeType);
                if (Common.Util.IsNullOrUndefined(attachmentBlob)) {
                    return null;
                }
                this.attachmentToBlobUrlMap[attachmentId] = URL.createObjectURL(attachmentBlob);
                return this.attachmentToBlobUrlMap[attachmentId];
            };
            return AttachmentBlobUtility;
        }());
        // map from attachment id to blob url
        AttachmentBlobUtility.attachmentToBlobUrlMap = {};
        Common.AttachmentBlobUtility = AttachmentBlobUtility;
        ;
    })(Common = Activities.Common || (Activities.Common = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var Common;
    (function (Common) {
        var Util;
        (function (Util) {
            var AttachmentDialogConstants;
            (function (AttachmentDialogConstants) {
                AttachmentDialogConstants.AddAttachmentToActivityDialogName = "AddAttachmentToActivity";
                AttachmentDialogConstants.AttachmentParentEntityEmailLogicalName = "email";
                AttachmentDialogConstants.AttachmentParentEntityAppointmentLogicalName = "appointment";
                AttachmentDialogConstants.ButtonAttachId = "ok_id";
                AttachmentDialogConstants.ButtonCloseId = "cancel_id";
                AttachmentDialogConstants.ButtonOk = "Button_Ok";
                AttachmentDialogConstants.ButtonRemoveId = "remove_id";
                AttachmentDialogConstants.ButtonFollowId = "follow_id";
                AttachmentDialogConstants.ButtonUnFollowId = "donot_follow_id";
                AttachmentDialogConstants.ConfirmAttachmentRemoval = "ConfirmAttachmentRemoval";
                AttachmentDialogConstants.EmptyFile = "EmptyFile";
                AttachmentDialogConstants.FileNameLengthExceeded = "FileNameLengthExceeded";
                AttachmentDialogConstants.FileNotFound = "FileNotFound";
                AttachmentDialogConstants.FileSizeExceeded = "FileSizeExceeded";
                AttachmentDialogConstants.GenericError = "Generic_ErrorMessage";
                AttachmentDialogConstants.InvalidFileExtension = "InvalidFileExtension";
                AttachmentDialogConstants.NonEditableDialog = "NonEditableDialog";
                AttachmentDialogConstants.OrganizationEntityColumnBlockedAttachments = "blockedattachments";
                AttachmentDialogConstants.OrganizationEntityColumnMaxUploadFileSize = "maxuploadfilesize";
                AttachmentDialogConstants.OrganizationEntityLogicalName = "organization";
                AttachmentDialogConstants.OrganizationEntityQuery = "?$select=blockedattachments,maxuploadfilesize";
                AttachmentDialogConstants.ParameterAttachmentId = "param_attachmentId";
                AttachmentDialogConstants.ParameterEntityId = "param_entityId";
                AttachmentDialogConstants.ParameterFileContent = "param_AttachmentFileContent";
                AttachmentDialogConstants.ParameterFileMode = "param_AttachmentFileMode";
                AttachmentDialogConstants.ParameterFileName = "param_AttachmentFileName";
                AttachmentDialogConstants.ParameterFileSize = "param_AttachmentFileSize";
                AttachmentDialogConstants.ParameterFileType = "param_AttachmentFileType";
                AttachmentDialogConstants.ParameterIsFollowed = "param_AttachmentIsFollowed";
                AttachmentDialogConstants.ParameterIsEmailFollowed = "param_IsEmailFollowed";
                AttachmentDialogConstants.ParameterEntityName = "param_EntityName";
                AttachmentDialogConstants.ParameterParentEntityLogicalName = "param_entityName";
                AttachmentDialogConstants.RemovedAttachmentConfirmation = "RemovedAttachmentConfirmation";
                AttachmentDialogConstants.UnsavedChanges = "UnsavedChanges";
                AttachmentDialogConstants.UnsupportedAttachment = "UnsupportedAttachment";
                AttachmentDialogConstants.NewAttachmentFormDescription = "New_Attachment_Form_Description";
                AttachmentDialogConstants.ExistingAttachmentFormDescription = "Existing_Attachment_Form_Description";
                AttachmentDialogConstants.NewAttachmentLabelMessage = "New_Attachment_Label_Message";
                AttachmentDialogConstants.IsEmailFollowed = "isemailfollowed";
                AttachmentDialogConstants.AttachmentPreviewDialogName = "AttachmentPreviewDialog";
            })(AttachmentDialogConstants = Util.AttachmentDialogConstants || (Util.AttachmentDialogConstants = {}));
        })(Util = Common.Util || (Common.Util = {}));
    })(Common = Activities.Common || (Activities.Common = {}));
    var Constants;
    (function (Constants) {
        var AttachmentConstants;
        (function (AttachmentConstants) {
            // attributes    
            AttachmentConstants.Body = "body";
            AttachmentConstants.FileName = "filename";
            AttachmentConstants.FileSize = "filesize";
            AttachmentConstants.MimeType = "mimetype";
            AttachmentConstants.IsFollowed = "isfollowed";
            // resx
            AttachmentConstants.AttachmentDownloadError = "AttachmentDownloadError";
            AttachmentConstants.AttachmentDownloadGenericError = "AttachmentDownloadGenericError";
            AttachmentConstants.AttachmentDownloadFormNotification = "AttachmentDownloadFormNotification";
            // other
            AttachmentConstants.OpenFileSaveMode = 2; // save mode for downloading attachment
            AttachmentConstants.AttachmentFormNotificationId = "AttachmentFormNotificationId";
            AttachmentConstants.DownloadFormNotificationLevel = "INFO";
        })(AttachmentConstants = Constants.AttachmentConstants || (Constants.AttachmentConstants = {}));
    })(Constants = Activities.Constants || (Activities.Constants = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var Common;
    (function (Common) {
        /**
         * Handles attachment downloading from generating token to constructing download url to downloading the file
         */
        var AttachmentDownloadUtility = (function () {
            function AttachmentDownloadUtility() {
            }
            /**
             * Batch downloads one or many attachments
             * @param attachmentIds array of ActivityMimeAttachment unique guids
             */
            AttachmentDownloadUtility.downloadMultipleAttachments = function (attachmentIds) {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    Xrm.WebApi.retrieveMultipleRecords(Activities.Constants.EntityNames.ActivityMimeAttachment, _this.getAttachmentFetchXml(attachmentIds)).then(function (attachments) {
                        if (attachments && attachments.entities && attachments.entities.length > 0) {
                            var promises_2 = [];
                            attachments.entities.forEach(function (attachment) {
                                promises_2.push(_this.saveAttachment(attachment));
                            });
                            Promise.all(promises_2).then(function () {
                                // all downloads have finished
                                resolve();
                            }, function () {
                                // error downloading
                                reject(Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadGenericError));
                            });
                        }
                        else {
                            // no attachments retrieved
                            reject(Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadGenericError));
                        }
                    }, function () {
                        // web request failed
                        reject(Activities.ClientApi.getResourceString(Activities.Constants.AttachmentConstants.AttachmentDownloadGenericError));
                    });
                });
            };
            /**
             * Single request download for an individual attachment
             * @param attachmentId
             */
            AttachmentDownloadUtility.downloadAttachment = function (attachmentId) {
                var _this = this;
                var filter = "?$select=" + Activities.Constants.AttachmentConstants.MimeType + "," + Activities.Constants.AttachmentConstants.FileName + "," + Activities.Constants.AttachmentConstants.FileSize + "," + Activities.Constants.AttachmentConstants.Body;
                return Xrm.WebApi.retrieveRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentId, filter).then(function (attachment) {
                    return _this.saveAttachment(attachment);
                });
            };
            /**
             * Saves an individual attachment using the openFile api
             * @param attachment attachment entity reference
             */
            AttachmentDownloadUtility.saveAttachment = function (attachment) {
                return Xrm.Navigation.openFile(this.getFile(attachment), this.getSaveMode());
            };
            /**
             * Reformats the attachment reference into a format that can be interpretted by the openFile api
             * @param attachment attachment entity reference
             */
            AttachmentDownloadUtility.getFile = function (attachment) {
                if (attachment[Activities.Constants.AttachmentConstants.MimeType] == null) {
                    attachment[Activities.Constants.AttachmentConstants.MimeType] = "text/plain";
                }
                return {
                    fileName: attachment[Activities.Constants.AttachmentConstants.FileName],
                    mimeType: attachment[Activities.Constants.AttachmentConstants.MimeType],
                    fileContent: attachment[Activities.Constants.AttachmentConstants.Body],
                    fileSize: attachment[Activities.Constants.AttachmentConstants.FileSize]
                };
            };
            /**
             * Assembles the fetchXml to retrieve the requested ActivityMimeAttachments to download
             * @param attachmentIds array of ActivityMimeAttachment unique guids
             */
            AttachmentDownloadUtility.getAttachmentFetchXml = function (attachmentIds) {
                var attachmentIdValues = "";
                if (attachmentIds && attachmentIds.length > 0) {
                    attachmentIds.forEach(function (id) {
                        attachmentIdValues += "<value>" + id + "</value>";
                    });
                }
                var fetchXml = "<fetch version='1.0' output-format='xml-platform' mapping='logical'>\n                                    <entity name='activitymimeattachment'>\n                                        <attribute name='filename' />\n                                        <attribute name='activitymimeattachmentid' />\n                                        <attribute name='body' />\n                                        <attribute name='filesize' />\n                                        <attribute name='mimetype' />\n                                        <filter type='and'>\n                                            <condition attribute='activitymimeattachmentid' operator='in'>" + attachmentIdValues + "</condition>\n                                        </filter>\n                                    </entity></fetch>";
                return "?fetchXml=" + encodeURIComponent(fetchXml);
            };
            /**
             * Gets the appropriate openMode to save the file
             */
            AttachmentDownloadUtility.getSaveMode = function () {
                return {
                    openMode: Activities.Constants.AttachmentConstants.OpenFileSaveMode
                };
            };
            return AttachmentDownloadUtility;
        }());
        Common.AttachmentDownloadUtility = AttachmentDownloadUtility;
        ;
    })(Common = Activities.Common || (Activities.Common = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    ///// <summary>
    ///// Follow Attachment Request
    ///// </summary>
    var FollowEmailAttachmentRequest = (function () {
        function FollowEmailAttachmentRequest(ActivityMimeAttachmentId) {
            this.ActivityMimeAttachmentId = null;
            this.ActivityMimeAttachmentId = null;
            this.ActivityMimeAttachmentId = ActivityMimeAttachmentId;
        }
        FollowEmailAttachmentRequest.prototype.getMetadata = function () {
            var metadata = {
                boundParameter: null,
                parameterTypes: {
                    "ActivityMimeAttachmentId": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    }
                },
                operationName: "FollowEmailAttachment",
                operationType: 0,
            };
            return metadata;
        };
        return FollowEmailAttachmentRequest;
    }());
    Activities.FollowEmailAttachmentRequest = FollowEmailAttachmentRequest;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    ///// <summary>
    ///// UnFollow Attachment Request
    ///// </summary>
    var UnfollowEmailAttachmentRequest = (function () {
        function UnfollowEmailAttachmentRequest(ActivityMimeAttachmentId) {
            this.ActivityMimeAttachmentId = null;
            this.ActivityMimeAttachmentId = null;
            this.ActivityMimeAttachmentId = ActivityMimeAttachmentId;
        }
        UnfollowEmailAttachmentRequest.prototype.getMetadata = function () {
            var metadata = {
                boundParameter: null,
                parameterTypes: {
                    "ActivityMimeAttachmentId": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    }
                },
                operationName: "UnfollowEmailAttachment",
                operationType: 0,
            };
            return metadata;
        };
        return UnfollowEmailAttachmentRequest;
    }());
    Activities.UnfollowEmailAttachmentRequest = UnfollowEmailAttachmentRequest;
})(Activities || (Activities = {}));
//# sourceMappingURL=ActivityMimeAttachment.js.map