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
    var InstantiateTemplateRequest = (function () {
        function InstantiateTemplateRequest(templateId, objectType, objectId) {
            this.TemplateId = templateId;
            this.ObjectType = objectType;
            this.ObjectId = objectId;
        }
        InstantiateTemplateRequest.prototype.getMetadata = function () {
            var metadata = {
                boundParameter: null,
                parameterTypes: {
                    "TemplateId": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    },
                    "ObjectType": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    },
                    "ObjectId": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    },
                },
                operationName: "InstantiateTemplate",
                operationType: 0,
            };
            return metadata;
        };
        return InstantiateTemplateRequest;
    }());
    Activities.InstantiateTemplateRequest = InstantiateTemplateRequest;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var SendTemplateRequest = (function () {
        function SendTemplateRequest(templateId, sender /*Microsoft.Dynamics.CRM.crmbaseentity*/, recipients, regarding /*Microsoft.Dynamics.CRM.crmbaseentity*/, deliveryPriorityCode) {
            this.TemplateId = templateId;
            this.Sender = sender;
            this.Recipients = recipients;
            this.Regarding = regarding;
            this.DeliveryPriorityCode = deliveryPriorityCode;
        }
        SendTemplateRequest.prototype.getMetadata = function () {
            var metadata = {
                boundParameter: null,
                parameterTypes: {
                    "TemplateId": {
                        "typeName": "Edm.String",
                        "structuralProperty": 1,
                    },
                    "Sender": {
                        "typeName": "Microsoft.Dynamics.CRM.crmbaseentity",
                        "structuralProperty": 5,
                    },
                    "Recipients": {
                        "typeName": "mscrm.crmbaseentity",
                        "structuralProperty": 4,
                    },
                    "Regarding": {
                        "typeName": "Microsoft.Dynamics.CRM.crmbaseentity",
                        "structuralProperty": 5,
                    },
                    "DeliveryPriorityCode": {
                        "typeName": "Edm.Int32",
                        "structuralProperty": 1,
                    },
                },
                operationName: "SendTemplate",
                operationType: 0,
            };
            return metadata;
        };
        return SendTemplateRequest;
    }());
    Activities.SendTemplateRequest = SendTemplateRequest;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var ApplyEmailTemplateDialog = (function () {
        function ApplyEmailTemplateDialog() {
        }
        ApplyEmailTemplateDialog.onLoad = function (eventContext) {
            var form = eventContext.getFormContext();
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, Activities.Constants.TelemetryConstant.EventApplyEmailTemplateDialogOnLoad);
            var selectControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var isApril2020TemplatePreviewEnabled = Activities.Common.Util.isEmailEnhancementsFeatureEnabled(Activities.Constants.FCBConstant.TemplatePreviewApril2020UpdateFCB);
            if (!isApril2020TemplatePreviewEnabled) {
                var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.PreviewControlName);
                if (previewControl)
                    previewControl.setVisible(false);
            }
            this.setPreviewControlEnabledState(form, false);
            templateControl.addPreSearch(ApplyEmailTemplateDialog.templatePreSearchHandler);
            selectControl.setDisabled(true);
            telemetryItem.traceFeatureUsage(Activities.Constants.FCBConstant.TemplatePreviewApril2020UpdateFCB, isApril2020TemplatePreviewEnabled);
            telemetryItem.report();
        };
        ;
        ApplyEmailTemplateDialog.togglePreviewSelectBtn = function (eventContext) {
            var formContext = eventContext.getFormContext();
            var formAttributes = formContext.data.attributes;
            var templateId = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamTemplateId).getValue();
            // By default select button in email template preview dialog will be disabled as no records are selected on load dialog (dacf0e4b-f2da-4301-8299-c48a7517ea73)
            // Once user select any email template from the list then MscrmControls.FieldControls.EmailTemplatesControl will update the param_templateId as outparam
            // So if templateId is null then we are diabling select_id btn else enabling
            var disableSelect = templateId ? false : true;
            formContext.getControl(Activities.Constants.MetadataDrivenDialogConstants.SelectControlName).setDisabled(disableSelect);
        };
        ApplyEmailTemplateDialog.OnPreviewSelect = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, "OnPreviewEmailSelectDialog");
            var templateId;
            var subject;
            var description;
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            templateId = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamTemplateId).getValue();
            var alert = { text: "" };
            if (templateId == null) {
                alert.text = Activities.ClientApi.getResourceString("PreviewTemplateNotSelected");
                Xrm.Navigation.openAlertDialog(alert);
            }
            subject = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailSubject).getValue();
            description = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailDescription).getValue();
            Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamEmailSubject, subject);
            Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamEmailDescription, description);
            Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamTemplateId, templateId);
            Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked, Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
            var updateMruReq = new Activities.UpdateMruItemRequest("template", templateId);
            Xrm.WebApi.online.execute(updateMruReq).then(function (response) {
                form.ui.close();
                telemetryItem.report();
            }, function (error) {
                telemetryItem.traceEventError("Error in UpdateMruItems.", error);
                telemetryItem.report();
                form.ui.close();
            });
        };
        ApplyEmailTemplateDialog.onSelect = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, Activities.Constants.TelemetryConstant.EventInsertTemplate);
            if (Activities.Common.Util.isEmailEnhancementsFeatureEnabled(Activities.Constants.FCBConstant.TemplatePreviewApril2020UpdateFCB)) {
                telemetryItem.traceEventCustom(Activities.Constants.TelemetryConstant.TemplatePreviewClicked, this.isPreviewClicked);
                telemetryItem.traceFeatureUsage(Activities.Constants.FCBConstant.TemplatePreviewApril2020UpdateFCB, true);
            }
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var fieldNameControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var fieldOptionSet = fieldNameControl.getAttribute();
            var emailFormData = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData.toString());
            var objectType = "";
            var objectId = "";
            if (dialogParametersData.length == 1) {
                objectType = dialogParametersData[0].entityType;
                objectId = dialogParametersData[0].id;
            }
            else {
                objectType = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityType).getValue(),
                    objectId = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityId).getValue();
            }
            var fieldOptionValue = fieldOptionSet.getValue()[0];
            var templateId = fieldOptionValue[Activities.Constants.MetadataDrivenDialogConstants.EmailEntityId];
            Activities.ApplyEmailTemplateDialog.showProgressMessage();
            var req = new Activities.InstantiateTemplateRequest(templateId, objectType, objectId);
            var updateMruReq = new Activities.UpdateMruItemRequest("template", templateId);
            Xrm.WebApi.online.execute(updateMruReq).then(function (response) { }, function (error) {
                telemetryItem.traceEventError("Error in UpdateMruItems.", error);
                telemetryItem.report();
            });
            Xrm.WebApi.online.execute(req).then(function (response) {
                return response.json().then(function (jsonResponse) {
                    if (jsonResponse.value.length == 1) {
                        Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamEmailSubject, jsonResponse.value[0].subject);
                        Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamEmailDescription, jsonResponse.value[0].description);
                    }
                    Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamTemplateId, templateId);
                    Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked, Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
                    Activities.ApplyEmailTemplateDialog.hideProgressMessage();
                    form.ui.close();
                    telemetryItem.report();
                }, function (error) {
                    telemetryItem.traceEventError("Error in InstantiateTemplateRequest.", error.innerror.message);
                    telemetryItem.report();
                });
            }, function (error) {
                telemetryItem.traceEventError("Error in InstantiateTemplateRequest.", error.innerror.message);
                Activities.ApplyEmailTemplateDialog.dialogActionFailedCallback(error, telemetryItem);
            });
        };
        ;
        ApplyEmailTemplateDialog.dialogActionFailedCallback = function (response, telemetryItem) {
            Activities.ApplyEmailTemplateDialog.hideProgressMessage();
            Activities.ClientApi.dialogActionFailedCallback(response, telemetryItem);
        };
        ApplyEmailTemplateDialog.onTemplateChange = function (eventContext) {
            var form = eventContext.getFormContext();
            var selectControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            if (templateControl && templateControl.getAttribute() && templateControl.getAttribute().getValue()) {
                selectControl.setDisabled(false);
                this.setPreviewControlEnabledState(form, true);
            }
            else {
                selectControl.setDisabled(true);
                this.setPreviewControlEnabledState(form, false);
            }
        };
        ;
        ApplyEmailTemplateDialog.onPreview = function (eventContext) {
            this.isPreviewClicked = true;
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, Activities.Constants.TelemetryConstant.EventPreviewTemplate);
            telemetryItem.traceEventInformation("Template Preview enabled and Preview clicked");
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var fieldNameControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var fieldOptionSet = fieldNameControl.getAttribute();
            var emailFormData = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData.toString());
            var objectType = "";
            var objectId = "";
            if (dialogParametersData.length == 1) {
                objectType = dialogParametersData[0].entityType;
                objectId = dialogParametersData[0].id;
            }
            else {
                objectType = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityType).getValue(),
                    objectId = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityId).getValue();
            }
            var fieldOptionValue = fieldOptionSet.getValue()[0];
            var templateId = fieldOptionValue[Activities.Constants.MetadataDrivenDialogConstants.EmailEntityId];
            var data = {
                msdynce_custom_dialog_templateId: templateId,
                msdynce_custom_dialog_objectType: objectType,
                msdynce_custom_dialog_objectId: objectId
            };
            var dialogOptions = {
                "position": 1,
                "height": '100%',
                "width": '100%'
            };
            Xrm.Navigation.openDialog("EmailTemplatePreviewDialog", dialogOptions, data);
            telemetryItem.report();
        };
        //TODO: Functionality to be tested after the dependency 435000 is resolved.
        /// <summary>
        /// Function Handles Field Language Field changes on  Apply Template Dialog , accordingly Lookup Data for Email Templates gets modified
        /// </summary>
        ApplyEmailTemplateDialog.onLanguageChange = function (eventContext) {
            var templateControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.LanguageId).setFocus();
            templateControl.removePreSearch(ApplyEmailTemplateDialog.templatePreSearchHandler);
            templateControl.addPreSearch(ApplyEmailTemplateDialog.templatePreSearchHandler);
        };
        ;
        ApplyEmailTemplateDialog.templatePreSearchHandler = function (eventContext) {
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var emailFormData = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData.toString());
            // defaulting it to 0 as the below filter condition adds the filters as OR and there is no entity with otc as 0. So, even if this is passed to the fetch xml, it will be of no harm
            var entityTypeCode = 0;
            var entityId = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityId).getValue();
            for (var index = 0; index < dialogParametersData.length; index++) {
                if (dialogParametersData[index].id == entityId) {
                    entityTypeCode = dialogParametersData[index].entityOtc;
                    break;
                }
            }
            var languageOptionSet = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.LanguageId);
            var languageOption = (languageOptionSet.getValue() != null) ? languageOptionSet.getValue().toString() : "";
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var languageFilter = !Activities.Common.Util.IsNullOrEmptyString(languageOption) && languageOption !== "-1" ? "<filter type='and'><condition attribute='languagecode' operator='eq' value='" + languageOption + "'/></filter>" : "";
            var templateEntityTypeFilter = "<filter type='or'><condition attribute='templatetypecode' operator='eq' value='8'/><condition attribute='templatetypecode' operator='eq' value='" + entityTypeCode + "'/></filter>";
            var customerLanguageFilter = "<filter type='and'>" + templateEntityTypeFilter + languageFilter + "</filter>";
            templateControl.addCustomFilter(customerLanguageFilter, Activities.Constants.MetadataDrivenDialogConstants.TemplateEntityName);
        };
        ;
        ApplyEmailTemplateDialog.showProgressMessage = function () {
            var processingMessage = Activities.ClientApi.getResourceString("Msg_Progress_MOCA_Dialog");
            Xrm.Utility.showProgressIndicator(processingMessage);
        };
        ;
        ApplyEmailTemplateDialog.hideProgressMessage = function () {
            Xrm.Utility.closeProgressIndicator();
        };
        ;
        ApplyEmailTemplateDialog.setPreviewControlEnabledState = function (form, newState) {
            if (Activities.Common.Util.isEmailEnhancementsFeatureEnabled(Activities.Constants.FCBConstant.TemplatePreviewApril2020UpdateFCB)) {
                var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.PreviewControlName);
                if (previewControl) {
                    previewControl.setDisabled(!newState);
                }
            }
        };
        return ApplyEmailTemplateDialog;
    }());
    ApplyEmailTemplateDialog.isPreviewClicked = false;
    Activities.ApplyEmailTemplateDialog = ApplyEmailTemplateDialog;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var BulkEmailDialog = (function () {
        function BulkEmailDialog() {
        }
        /// <summary>
        /// Open Send Bulk Email Dialog. Later on move this function to a different ribbonrules js file.
        /// </summary>
        BulkEmailDialog.openBulkEmailDialog = function (gridControl, records, entityTypeCode, totalRecordCount) {
            if (records.length > 0) {
                var selectedRecords = new Array(records.length);
                var entityType = Xrm.Internal.getEntityName(entityTypeCode);
                for (var i = 0; i < records.length; i++) {
                    selectedRecords[i] = { id: records[i], entityType: entityType };
                }
                var dialogParameters = {};
                dialogParameters["param_otc"] = entityTypeCode;
                dialogParameters["param_selectedRecords"] = selectedRecords;
                dialogParameters["param_gridControl"] = gridControl;
                var dialogOptions = { height: 400, width: 600, position: 2 /* side */ };
                Xrm.Navigation.openDialog("BulkEmailDialog", dialogOptions, dialogParameters).then();
            }
            else {
                Xrm.Navigation.openAlertDialog({
                    text: Activities.ClientApi.getResourceString("LOCID_EMAIL_NORECORDS_MSG")
                });
            }
        };
        BulkEmailDialog.onLoad = function (eventContext) {
            var form = eventContext.getFormContext();
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.TelemetryConstant.BulkEmail, Activities.Constants.TelemetryConstant.EventBulkEmailDialogOnLoad);
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.TemplatePreviewControlName);
            templateControl.addPreSearch(BulkEmailDialog.bulkEmailTemplatePreSearchHandler);
            BulkEmailDialog.setDefaultValues(form, telemetryItem);
            previewControl.setVisible(false);
            //disable Send button if required fields are not populated
            this.updateSendVisibility(form);
            telemetryItem.report();
        };
        ;
        BulkEmailDialog.sendBulkEmail = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.TelemetryConstant.BulkEmail, Activities.Constants.TelemetryConstant.EventSendBulkEmail);
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var template = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName); //emailtemplates_id
            var sender = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.BulkEmailSenderControlName); //sender_id
            var selectedRecords = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.BulkEmailSelectedRecordsParam); //param_selectedRecords
            var recipients_type = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.BulkEmailRecipientsControlName); //recipients
            var gridControl = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.GridControl).getValue(); //param_gridControl
            var entityName = gridControl.getEntityName();
            var regarding = { id: "00000000-0000-0000-0000-000000000000", entityType: entityName };
            var templateId = template.getValue()[0].id;
            var alert = { text: "" };
            if (Activities.Common.Util.IsNullOrUndefined(template.getValue())) {
                alert.text = Activities.ClientApi.getResourceString("TemplateNotSelected");
                Xrm.Navigation.openAlertDialog(alert);
            }
            else if (Activities.Common.Util.IsNullOrUndefined(sender.getValue())) {
                alert.text = Activities.ClientApi.getResourceString("SenderNotSelected");
                Xrm.Navigation.openAlertDialog(alert);
            }
            else if (Activities.Common.Util.IsNullOrUndefined(recipients_type.getValue())) {
                alert.text = Activities.ClientApi.getResourceString("RecipientsNotSelected");
                Xrm.Navigation.openAlertDialog(alert);
            }
            else {
                Xrm.Page.data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked).setValue(Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
                var toValue = recipients_type.getValue();
                //Send to selected records
                if (toValue == 1) {
                    var sendEmailRequest = new Activities.SendTemplateRequest(templateId, sender.getValue()[0], selectedRecords.getValue(), regarding, 1);
                    Xrm.WebApi.online.execute(sendEmailRequest).then(function () {
                        eventContext.getFormContext().ui.close();
                    }, function (error) {
                        telemetryItem.traceEventError("", error.innerror.message);
                        Activities.ApplyEmailTemplateDialog.dialogActionFailedCallback(error, telemetryItem);
                    });
                }
                else {
                    var fetchXml_1 = "?fetchXml=" + gridControl.getFetchXml();
                    if (toValue == 3) {
                        fetchXml_1 = fetchXml_1.replace(/page=\"[0-9]*\" count=\"[0-9]*\"/g, "");
                    }
                    Xrm.WebApi.online.retrieveMultipleRecords(entityName, fetchXml_1).then(function (response) {
                        if (!response || !response.entities || (response.entities.length == 0)) {
                            telemetryItem.traceEventWarning("No records for sending bulk email. fetchxml: " + fetchXml_1);
                            return;
                        }
                        var records = response.entities;
                        var record = null;
                        var recipientRecords = new Array(records.length);
                        var i = 0;
                        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
                            record = records_1[_i];
                            recipientRecords[i++] = { id: record[entityName + "id"], entityType: entityName };
                        }
                        var sendEmailRequest = new Activities.SendTemplateRequest(templateId, sender.getValue()[0], recipientRecords, regarding, 1);
                        Xrm.WebApi.online.execute(sendEmailRequest).then(function () {
                            eventContext.getFormContext().ui.close();
                        }, function (error) {
                            telemetryItem.traceEventError("Error retrieving records.", error.innerror.message);
                            Activities.ApplyEmailTemplateDialog.dialogActionFailedCallback(error, telemetryItem);
                        });
                    }, function (error) {
                        telemetryItem.traceEventError("Error retrieving records.", error.innerror.message);
                        Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
                    });
                }
            }
            telemetryItem.report();
        };
        BulkEmailDialog.dialogActionFailedCallback = function (response, telemetryItem, componentName) {
            Activities.BulkEmailDialog.hideProgressMessage();
            Activities.ClientApi.dialogActionFailedCallback(response, telemetryItem);
        };
        /// <summary>
        /// Function Handles Language Field changes, accordingly Lookup Data for Email Templates gets modified
        /// </summary>
        BulkEmailDialog.onLanguageChange = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.TelemetryConstant.BulkEmail, Activities.Constants.TelemetryConstant.EventBulkEmailLanguageChange);
            var templateControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.LanguageId).setFocus();
            templateControl.removePreSearch(BulkEmailDialog.bulkEmailTemplatePreSearchHandler);
            templateControl.addPreSearch(BulkEmailDialog.bulkEmailTemplatePreSearchHandler);
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            //let languageCode: number = form.context.userSettings.languageId;
            var languageOptionSet = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.LanguageId);
            var languageOption = (languageOptionSet.getValue() != null) ? languageOptionSet.getValue().toString() : "";
            telemetryItem.traceEventInformation("Language changed to " + languageOption);
            //Clear the template field on change of language field
            var template = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.TemplatePreviewControlName);
            template.setValue(null);
            previewControl.setVisible(false);
            telemetryItem.report();
        };
        ;
        /// <summary>
        /// Function Handles Sender Field changes. if all fields on BulkEmail dialog are set, then enable the Send button
        /// </summary>
        BulkEmailDialog.onSenderChange = function (eventContext) {
            var form = eventContext.getFormContext();
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.TelemetryConstant.BulkEmail, Activities.Constants.TelemetryConstant.EventBulkEmailSenderChange);
            this.updateSendVisibility(form);
            telemetryItem.report();
        };
        /// <summary>
        /// Function Handles template Field changes. if all fields on BulkEmail dialog are set, then enable the Send button.
        ///If template has value, show the preview of the template
        /// </summary>
        BulkEmailDialog.onTemplateChange = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.TelemetryConstant.BulkEmail, Activities.Constants.TelemetryConstant.EventBulkEmailTemplateChange);
            var form = eventContext.getFormContext();
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.TemplatePreviewControlName);
            this.updateSendVisibility(form);
            if (templateControl && templateControl.getAttribute() && templateControl.getAttribute().getValue()) {
                BulkEmailDialog.showPreview(form, telemetryItem);
            }
            else {
                previewControl.setVisible(false);
            }
            telemetryItem.report();
        };
        BulkEmailDialog.IsSendBulkEmailInUciEnabled = function () {
            if (Xrm.Internal.isUci()) {
                return Activities.Common.Util.isSendBulkEmailInUciEnabledAtOrgLevel() && Xrm.Internal.isFeatureEnabled(Activities.Constants.FCBConstant.SendBulkEmailInUci);
            }
            else {
                return true; //if webclient
            }
        };
        BulkEmailDialog.showPreview = function (form, telemetryItem) {
            var previewControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.TemplatePreviewControlName);
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            if (previewControl) {
                var templateValue = templateControl.getAttribute().getValue()[0];
                var templateId = templateValue[Activities.Constants.MetadataDrivenDialogConstants.EmailEntityId];
                var formAttributes = form.data.attributes;
                var selectedRecords = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.BulkEmailSelectedRecordsParam); //param_selectedRecords);
                var objectType = selectedRecords.getValue()[0].entityType;
                var objectId = selectedRecords.getValue()[0].id;
                formAttributes.get("internalparam_template").setValue(templateId);
                formAttributes.get("internalparam_entityType").setValue(objectType);
                formAttributes.get("internalparam_entityId").setValue(objectId);
                telemetryItem.traceEventInformation("Preview of templateId: " + templateId + "objectType: " + objectType + "objectid: " + objectId);
                if (!previewControl.getVisible()) {
                    previewControl.setVisible(true);
                    telemetryItem.traceEventInformation("Set Preview control to visible");
                }
            }
        };
        BulkEmailDialog.bulkEmailTemplatePreSearchHandler = function (eventContext) {
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var entityTypeCode = formAttributes.get("param_otc").getValue();
            var languageOptionSet = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.LanguageId);
            var languageOption = (languageOptionSet.getValue() != null) ? languageOptionSet.getValue().toString() : "";
            var templateControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName);
            var languageFilter = !Activities.Common.Util.IsNullOrEmptyString(languageOption) && languageOption !== "-1" ? "<filter type='and'><condition attribute='languagecode' operator='eq' value='" + languageOption + "'/></filter>" : "";
            var templateEntityTypeFilter = "<filter type='or'><condition attribute='templatetypecode' operator='eq' value='8'/><condition attribute='templatetypecode' operator='eq' value='" + entityTypeCode + "'/></filter>";
            var customerLanguageFilter = "<filter type='and'>" + templateEntityTypeFilter + languageFilter + "</filter>";
            templateControl.addCustomFilter(customerLanguageFilter, Activities.Constants.MetadataDrivenDialogConstants.TemplateEntityName);
        };
        ;
        BulkEmailDialog.showProgressMessage = function () {
            var processingMessage = Activities.ClientApi.getResourceString("Msg_Progress_MOCA_Dialog");
            Xrm.Utility.showProgressIndicator(processingMessage);
        };
        ;
        BulkEmailDialog.hideProgressMessage = function () {
            Xrm.Utility.closeProgressIndicator();
        };
        ;
        BulkEmailDialog.setDefaultValues = function (form, telemetryItem) {
            var formAttributes = form.data.attributes;
            telemetryItem.traceEventInformation("setting Bulk Email Default Values");
            //Set Sender value
            var sender = formAttributes.get("sender_id");
            var currentUser = BulkEmailDialog.getFormContextUser(form);
            if (!currentUser) {
                currentUser = BulkEmailDialog.getGlobalContextUser();
            }
            sender.setValue(currentUser);
        };
        BulkEmailDialog.updateSendVisibility = function (form) {
            var formAttributes = form.data.attributes;
            var sendControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.SendControlName); //send_id
            var template = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.EmailTemplateControlName); //emailtemplates_id
            var sender = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.BulkEmailSenderControlName); //sender_id
            if (!sender || Activities.Common.Util.IsNullOrUndefined(sender.getValue())
                || !template || (Activities.Common.Util.IsNullOrUndefined(template.getValue()))) {
                sendControl.setDisabled(true);
            }
            else {
                sendControl.setDisabled(false);
            }
        };
        BulkEmailDialog.getFormContextUser = function (form) {
            var lookupItems = new Array();
            var item = {
                id: form.context.userSettings.userId,
                name: form.context.userSettings.userName,
                entityType: "systemuser"
            };
            lookupItems.push(item);
            return lookupItems;
        };
        BulkEmailDialog.getGlobalContextUser = function () {
            var lookupItems = new Array();
            var userContext = Xrm.Utility.getGlobalContext();
            var item = {
                id: userContext.userSettings.userId,
                name: userContext.userSettings.userName,
                entityType: "systemuser"
            };
            lookupItems.push(item);
            return lookupItems;
        };
        return BulkEmailDialog;
    }());
    Activities.BulkEmailDialog = BulkEmailDialog;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var UpdateMruItemRequest = (function () {
        function UpdateMruItemRequest(entityLogicalName, templateId) {
            this.EntityLogicalName = entityLogicalName;
            this.EntityId = templateId;
        }
        UpdateMruItemRequest.prototype.getMetadata = function () {
            var metadata = {
                boundParameter: null,
                parameterTypes: {
                    EntityId: {
                        typeName: "Edm.String",
                        structuralProperty: 1,
                    },
                    EntityLogicalName: {
                        typeName: "Edm.String",
                        structuralProperty: 1,
                    },
                },
                operationName: "UpdateMruItems",
                operationType: 0,
            };
            return metadata;
        };
        return UpdateMruItemRequest;
    }());
    Activities.UpdateMruItemRequest = UpdateMruItemRequest;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var SelectTemplateRecipientDialog = (function () {
        function SelectTemplateRecipientDialog() {
        }
        SelectTemplateRecipientDialog.onLoad = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Email, Activities.Constants.TelemetryConstant.EventSelectTemplateRecipientDialogOnLoad);
            var fieldNameControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.FieldControlName);
            fieldNameControl.clearOptions();
            var emailFormData = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData);
            var toExists = false;
            var ccExists = false;
            var regardingExists = false;
            var toLabel = "";
            var ccLabel = "";
            var regardingLabel = "";
            for (var item = 0; item < dialogParametersData.length; item++) {
                if (dialogParametersData[item].fieldname == "to") {
                    toExists = true;
                    toLabel = dialogParametersData[item].fieldLabel;
                }
                else if (dialogParametersData[item].fieldname == "cc") {
                    ccExists = true;
                    ccLabel = dialogParametersData[item].fieldLabel;
                }
                else if (dialogParametersData[item].fieldname == "regardingobjectid") {
                    regardingExists = true;
                    regardingLabel = dialogParametersData[item].fieldLabel;
                }
            }
            var setOptionsetValue = Activities.InsertTemplateFieldOptions.None;
            if (toExists) {
                var item = { "value": 0, "text": Activities.Common.Util.IsNullOrEmptyString(toLabel) ? Activities.ClientApi.getResourceString("Web._cs.SelectTemplateRecipient.dlg_ToRecipientString") : toLabel };
                fieldNameControl.addOption(item);
                setOptionsetValue = Activities.InsertTemplateFieldOptions.ToField;
            }
            if (ccExists) {
                var item = { "value": 1, "text": Activities.Common.Util.IsNullOrEmptyString(ccLabel) ? Activities.ClientApi.getResourceString("Web._cs.SelectTemplateRecipient.dlg_CCRecipientString") : ccLabel };
                fieldNameControl.addOption(item);
                if (setOptionsetValue === Activities.InsertTemplateFieldOptions.None)
                    setOptionsetValue = Activities.InsertTemplateFieldOptions.CcField;
            }
            if (regardingExists) {
                var item = { "value": 2, "text": Activities.Common.Util.IsNullOrEmptyString(regardingLabel) ? Activities.ClientApi.getResourceString("Web._cs.SelectTemplateRecipient.dlg_RegardingString") : regardingLabel };
                fieldNameControl.addOption(item);
                if (setOptionsetValue === Activities.InsertTemplateFieldOptions.None)
                    setOptionsetValue = Activities.InsertTemplateFieldOptions.Regarding;
            }
            var fieldOptionSet = fieldNameControl.getAttribute();
            fieldOptionSet.setValue(setOptionsetValue);
            fieldNameControl.getAttribute().fireOnChange();
            telemetryItem.report();
        };
        SelectTemplateRecipientDialog.onSelect = function (eventContext) {
            var recordControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.RecordControlName);
            var recordOptionSet = recordControl.getAttribute();
            var selectedRecordValue = recordOptionSet.getValue();
            var fieldNameControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.FieldControlName);
            var fieldOptionSet = fieldNameControl.getAttribute();
            var selectedFieldValue = fieldOptionSet.getValue();
            var emailFormData = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData.toString());
            var counter = 0;
            var selectedEntityId = "";
            var selectedEntityType = "";
            for (var item = 0; item < dialogParametersData.length; item++) {
                if (dialogParametersData[item].fieldname == "to" && selectedFieldValue === 0) {
                    if (counter == selectedRecordValue) {
                        selectedEntityId = dialogParametersData[item]["id"];
                        selectedEntityType = dialogParametersData[item]["entityType"];
                    }
                    counter++;
                }
                if (dialogParametersData[item].fieldname == "cc" && selectedFieldValue === 1) {
                    if (counter == selectedRecordValue) {
                        selectedEntityId = dialogParametersData[item]["id"];
                        selectedEntityType = dialogParametersData[item]["entityType"];
                    }
                    counter++;
                }
                if (dialogParametersData[item].fieldname == "regardingobjectid" && selectedFieldValue === 2) {
                    if (counter == selectedRecordValue) {
                        selectedEntityId = dialogParametersData[item]["id"];
                        selectedEntityType = dialogParametersData[item]["entityType"];
                    }
                    counter++;
                }
            }
            var entityId = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityId);
            var entityType = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEntityType);
            if (!Activities.Common.Util.IsNullOrEmptyString(selectedEntityId)) {
                entityId.setValue(selectedEntityId);
                entityType.setValue(selectedEntityType);
                Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamEntityType, selectedEntityType);
                Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked, Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
                eventContext.getFormContext().ui.close();
            }
        };
        ;
        SelectTemplateRecipientDialog.onPartyNameChange = function (eventContext) {
            var recordControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.RecordControlName);
            recordControl.clearOptions();
            var fieldNameControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.FieldControlName);
            var fieldOptionSet = fieldNameControl.getAttribute();
            var toExists = false;
            var ccExists = false;
            var regardingExists = false;
            var emailFormData = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamEmailFormData).getValue();
            var dialogParametersData = JSON.parse(emailFormData.toString());
            for (var item = 0; item < dialogParametersData.length; item++) {
                if (dialogParametersData[item].fieldname == "to") {
                    toExists = true;
                }
                if (dialogParametersData[item].fieldname == "cc") {
                    ccExists = true;
                }
                if (dialogParametersData[item].fieldname == "regardingobjectid") {
                    regardingExists = true;
                }
            }
            var counter = 0;
            if (fieldOptionSet.getValue() === 0 && toExists) {
                for (var element_1 = 0; element_1 < dialogParametersData.length; element_1++) {
                    if (dialogParametersData[element_1].fieldname == "to") {
                        var toValue = dialogParametersData[element_1].name;
                        var item = { "value": counter, "text": toValue };
                        recordControl.addOption(item);
                        counter++;
                    }
                }
            }
            else if (fieldOptionSet.getValue() === 1 && ccExists) {
                for (var element = 0; element < dialogParametersData.length; element++) {
                    if (dialogParametersData[element].fieldname == "cc") {
                        var ccValue = dialogParametersData[element].name;
                        var item = { "value": counter, "text": ccValue };
                        recordControl.addOption(item);
                        counter++;
                    }
                }
            }
            else if (regardingExists) {
                for (var element = 0; element < dialogParametersData.length; element++) {
                    if (dialogParametersData[element].fieldname == "regardingobjectid") {
                        var regardingIdValue = dialogParametersData[element].name;
                        var item = { "value": counter, "text": regardingIdValue };
                        recordControl.addOption(item);
                        counter++;
                    }
                }
            }
            var selectControl = eventContext.getFormContext().getControl(Activities.Constants.MetadataDrivenDialogConstants.SelectControlName);
            var recordOptionSet = recordControl.getAttribute();
            if (fieldOptionSet.getValue() > -1) {
                recordOptionSet.setValue(0);
                selectControl.setDisabled(false);
            }
            else {
                recordOptionSet.setValue(-1);
                selectControl.setDisabled(true);
            }
        };
        ;
        return SelectTemplateRecipientDialog;
    }());
    Activities.SelectTemplateRecipientDialog = SelectTemplateRecipientDialog;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var InsertTemplateFieldOptions;
    (function (InsertTemplateFieldOptions) {
        InsertTemplateFieldOptions[InsertTemplateFieldOptions["ToField"] = 0] = "ToField";
        InsertTemplateFieldOptions[InsertTemplateFieldOptions["CcField"] = 1] = "CcField";
        InsertTemplateFieldOptions[InsertTemplateFieldOptions["Regarding"] = 2] = "Regarding";
        InsertTemplateFieldOptions[InsertTemplateFieldOptions["None"] = 3] = "None";
    })(InsertTemplateFieldOptions = Activities.InsertTemplateFieldOptions || (Activities.InsertTemplateFieldOptions = {}));
    var TemplateUtil = (function () {
        function TemplateUtil() {
        }
        TemplateUtil.setAttributeValue = function (eventContext, attributeId, value) {
            var attribute = eventContext.getFormContext().data.attributes.get(attributeId);
            if (attribute != null) {
                attribute.setValue(value);
            }
        };
        ;
        TemplateUtil.closeDialog = function (eventContext) {
            var lastButtonClicked = eventContext.getFormContext().data.attributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked);
            if (lastButtonClicked != null) {
                lastButtonClicked.setValue(Activities.Constants.MetadataDrivenDialogConstants.DialogCancelId);
            }
            eventContext.getFormContext().ui.close();
        };
        ;
        return TemplateUtil;
    }());
    Activities.TemplateUtil = TemplateUtil;
})(Activities || (Activities = {}));
//# sourceMappingURL=InsertEmailTemplate.js.map