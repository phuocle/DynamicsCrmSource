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
    var ActivityPageHandler = (function () {
        function ActivityPageHandler() {
        }
        /// <summary>
        /// Initializes a new instance of the <see cref="ActivityPageHandler"/> class.
        /// </summary>
        ActivityPageHandler.prototype.ActivityPageHandler = function () {
        };
        /// <summary>
        /// Sets the default value for a new communication activity
        /// </summary>
        /// <param name="form">Form context object</param>
        ActivityPageHandler.prototype.setDefaultValues = function (form, telemetryItem) {
            if (Activities.Common.Util.IsNewEntityForm(form)) {
                var ownerId = form.data.entity.attributes.get("ownerid");
                try {
                    if (!Activities.Common.Util.IsNull(ownerId) && Activities.Common.Util.IsNull(ownerId.getValue())) {
                        ownerId.setValue(this.getCurrentUser());
                    }
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error setting default value.", exception.message);
                }
            }
        };
        /// <summary>
        /// Gets the current user lookup value
        /// </summary>
        ActivityPageHandler.prototype.getCurrentUser = function () {
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
        /// <summary>
        /// Sets the organizer to current user
        /// </summary>
        /// <param name="form">Form context object</param>
        ActivityPageHandler.prototype.setOrganizer = function (form, telemetryItem) {
            try {
                var organizer = form.data.entity.attributes.get("organizer");
                if (!Activities.Common.Util.IsNull(organizer)) {
                    var ownerId = form.data.entity.attributes.get("ownerid");
                    if (!Activities.Common.Util.IsNull(ownerId) && !Activities.Common.Util.IsNull(ownerId.getValue())) {
                        organizer.setValue(ownerId.getValue());
                    }
                    else {
                        organizer.setValue(this.getCurrentUser());
                    }
                }
            }
            catch (exception) {
                telemetryItem.traceEventError("Error setting default value.", exception.message);
            }
        };
        /// <summary>
        /// Inserts Default Signature into email body.
        /// </summary>
        /// <param name="form">Form context object</param>
        /// <param name="signature">Signature to be inserted.</param>
        /// <param name="description">The description attribute.</param>
        /// <param name="overwrite">If true overwrite the signature.</param>
        /// <returns></returns>
        ActivityPageHandler.insertSignature = function (form, signature, description, overwrite) {
            if (Activities.Common.Util.IsNullOrUndefined(description)) {
                return;
            }
            var descriptionValue = description.getValue() ? description.getValue() : "";
            var doc = new DOMParser().parseFromString(descriptionValue, "text/html");
            var signatureElement = doc.getElementById("signature");
            if (Activities.Common.Util.IsNullOrUndefined(signatureElement)) {
                var signatureDiv = "<br/><br/><br/><div id=\"signature\">" + signature + "</div>";
                var emailBodyHtml = doc ? (doc.body ? doc.body.innerHTML : "") : "";
                descriptionValue = Activities.Common.Util.IsNullOrEmptyString(emailBodyHtml) ? signatureDiv : emailBodyHtml.concat(signatureDiv);
            }
            else if (overwrite || Activities.Common.Util.IsNullOrEmptyString(signatureElement.innerHTML)) {
                signatureElement.innerHTML = signature;
                descriptionValue = doc ? (doc.body ? doc.body.innerHTML : "") : "";
            }
            description.setValue(descriptionValue);
        };
        ActivityPageHandler.isSystemAdmin = function () {
            var context = Xrm.Utility.getGlobalContext();
            var roles = context.userSettings.roles;
            if (!Activities.Common.Util.IsNullOrUndefined(roles) && roles.getLength() > 0) {
                var rolesList = roles.get();
                for (var i = 0; i < rolesList.length; i++) {
                    if (rolesList[i].name == "System Administrator") {
                        return true;
                    }
                }
            }
            return false;
        };
        return ActivityPageHandler;
    }());
    Activities.ActivityPageHandler = ActivityPageHandler;
})(Activities || (Activities = {}));
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
    var Appointment = (function () {
        function Appointment() {
        }
        Appointment.formOnLoad = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventAppointmentOnLoad);
            var seriesIdAttributeValue = null;
            Activities.Common.Util.isExecutionContextMissingAndReport(eventContext, telemetryItem);
            var formContext = eventContext.getFormContext();
            seriesIdAttributeValue = formContext.data.entity.attributes.get("seriesid");
            var isNewOrDraftAppointment = false;
            var isSaveAsDraftEnabled = this.isSaveAsDraftEnabled(formContext);
            telemetryItem.traceFeatureUsage("Save As Draft Enabled", isSaveAsDraftEnabled);
            if (isSaveAsDraftEnabled) {
                var draftAttr = formContext.data.entity.attributes.get("isdraft");
                if (formContext.ui.getFormType() === 1 /* Create */) {
                    draftAttr.setValue(true);
                    isNewOrDraftAppointment = true;
                }
                else if (draftAttr.getValue() == true) {
                    formContext.ui.setFormEntityName(Activities.ClientApi.getResourceString("Form_Title_Draft_Status_Prefix_For_Appointment"));
                    isNewOrDraftAppointment = true;
                }
            }
            telemetryItem.traceFeatureUsage("Draft Appointment", isNewOrDraftAppointment);
            if (!Activities.Common.Util.IsNull(seriesIdAttributeValue)) {
                var seriesId = seriesIdAttributeValue.getValue();
                try {
                    // disable the refresh ribbon call in case the perf improvement flag is set
                    var enablePerfImprovements = Activities.Common.Util.enableActivitiesTimeLinePerfImprovement(Activities.Constants.PerfConstants.PerfImprovements.FirstStage);
                    telemetryItem.traceEventCustom(Activities.Constants.TelemetryConstant.EnablePerfImprovements, enablePerfImprovements);
                    if (!enablePerfImprovements) {
                        formContext.ui.refreshRibbon();
                    }
                    if (!Activities.Common.Util.IsNull(seriesId)) {
                        Appointment.isAttachmentsGridHidden = false;
                        window.setTimeout(function () {
                            Appointment.hideAttachmentsGridSection(formContext);
                        }, 1e3);
                    }
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error in onload function.", exception.message);
                }
            }
            // Do not call setDefaultValues if it's not a refresh form
            if (Xrm.Internal.isUci() || Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
                Appointment.setDefaults(formContext, telemetryItem);
            }
            Activities.AppointmentNotifications.registerExchangeSyncNotifications(formContext, telemetryItem);
            Activities.DateUtilityFunctions.initDates(eventContext, telemetryItem);
            var useSchedulingEngine = Activities.SchedulingEngine.UseSchedulingEngine(telemetryItem);
            if (useSchedulingEngine) {
                Appointment.setSchedulingNotifications(formContext, telemetryItem);
                formContext.data.entity.addOnSave(Appointment.handleAppointmentSave);
                try {
                    var processControl = formContext.data.process;
                    processControl.addOnPreStageChange(Appointment.validateBPFNavigation);
                    processControl.addOnPreProcessStatusChange(Appointment.validateBPFNavigation);
                }
                catch (exception) {
                    telemetryItem.traceEventError("Error while registering process control handlers.", exception.message);
                }
            }
            var resolveUnknownEmailsFCB = Activities.Common.Util.isResolveUnknownEmailsFCBEnabled();
            if (resolveUnknownEmailsFCB) {
                telemetryItem.traceEventInformation("Resolve unknown emails handler being attached in record " + formContext.data.entity.getId());
                var controls = Activities.getAllLookupControls(eventContext);
                if (controls && controls.length > 0) {
                    controls.forEach(function (lookup) {
                        lookup.addOnLookupTagClick(Activities.openLookupDialogToResolveUnknownEmails);
                    });
                }
            }
            telemetryItem.traceFeatureUsage(Activities.Constants.TelemetryConstant.UseSchedulingEngine, useSchedulingEngine);
            telemetryItem.report();
        };
        ;
        Appointment.validateBPFNavigation = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventBPFNavigationOnAppointmentForm);
            var formContext = eventContext.getFormContext();
            var eventArgs = eventContext.getEventArgs();
            telemetryItem.traceEventInformation("BPF Navigation on Appointment Form.");
            var status = !Activities.Common.Util.IsNull(eventArgs.getStage()) ? eventArgs.getStage().getStatus() : ""; // "active" or "passive"
            telemetryItem.traceEventInformation("BPF Direction: " + eventArgs.getDirection() + " Status: " + status);
            // In case the user is doing a BPF navigation or state change on dirty form, alerting user to save the form first before doing the stage/state navigation
            // This is done because of current limitation in onSaveHandler not returning a promise object
            if (formContext.data.entity.getIsDirty()) {
                var alert_1 = { text: "" };
                alert_1.text = Activities.ClientApi.getResourceString("BPFNavigationBlockAlert");
                Xrm.Navigation.openAlertDialog(alert_1);
                telemetryItem.traceEventInformation("Blocking BPF Navigation and Form Save because of dirty form state.");
                eventContext.getEventArgs().preventDefault();
            }
            telemetryItem.report();
        };
        Appointment.setDefaults = function (formContext, telemetryItem) {
            Appointment.minutesPerInterval = 30;
            Appointment.SkipScheduling = false;
            Activities.SchedulingEngine.saveInProgress = false;
            if (Activities.Common.Util.IsNewEntityForm(formContext)) {
                Appointment.setDefaultValues(formContext, telemetryItem);
                Appointment.populateTimesFromQueryString(formContext);
            }
            var activityId = formContext.data.entity.attributes.get("activityid");
            if (activityId) {
                activityId.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
            }
        };
        Appointment.setDefaultValues = function (formContext, telemetryItem) {
            if (!Activities.Common.Util.IsNewEntityForm(formContext)) {
                return;
            }
            Activities.Common.ActivityHelper.setOwner(formContext, telemetryItem);
            Activities.Common.ActivityHelper.setOrganizer(formContext, telemetryItem);
            Appointment.setAttribute(formContext, "statuscode", Activities.Constants.AppointmentStatusCode.busy);
            Appointment.setAttribute(formContext, "isalldayevent", false);
            Appointment.setAttribute(formContext, "scheduleddurationminutes", Appointment.minutesPerInterval);
        };
        Appointment.setAttribute = function (formContext, name, value) {
            var attribute = formContext.getAttribute(name);
            if (attribute && !attribute.getValue()) {
                attribute.setValue(value);
            }
        };
        Appointment.populateTimesFromQueryString = function (formContext) {
            var unBoundAttributes = formContext.data.attributes;
            var startDate = null;
            // if unboundattributes is null or undefined then set startdate as null
            if (unBoundAttributes && unBoundAttributes.get("_StartTime")) {
                startDate = unBoundAttributes.get("_StartTime").getValue();
            }
            if (startDate) {
                var scheduledStart = formContext.getAttribute("scheduledstart").getValue(), scheduledEnd = scheduledStart;
                scheduledEnd.setMinutes(scheduledStart.getMinutes() + Appointment.minutesPerInterval);
                formContext.getAttribute("scheduledend").setValue(scheduledEnd);
                formContext.getAttribute("scheduleddurationminutes")
                    .setValue(Appointment.minutesPerInterval);
            }
        };
        Appointment.canEnableEditSeries = function (formContext) {
            var seriesIdAttributeValue = formContext.getAttribute("seriesid");
            if (seriesIdAttributeValue) {
                var seriesIdValue = seriesIdAttributeValue.getValue();
                if (!Activities.Common.Util.IsNull(seriesIdValue)) {
                    Appointment.seriesId = seriesIdValue.toString();
                }
            }
            return !Activities.Common.Util.IsNullOrEmptyString(Appointment.seriesId);
        };
        Appointment.isAllDayEventOnChange = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventIsAllDayOnChange);
            Activities.Common.Util.isExecutionContextMissingAndReport(eventContext, telemetryItem);
            eventContext.getFormContext().data.entity.attributes.get("scheduledstart").setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
            eventContext.getFormContext().data.entity.attributes.get("scheduledend").setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
        };
        Appointment.hideAttachmentsGridSection = function (formContext) {
            if (!Appointment.isAttachmentsGridHidden && formContext.ui) {
                var attachmentsGrid = formContext.ui.controls.get("attachmentsGrid");
                if (attachmentsGrid) {
                    attachmentsGrid.getParent().setVisible(false);
                    Appointment.isAttachmentsGridHidden = true;
                }
            }
        };
        Appointment.doRecurrenceAction = function (formContext) {
            Appointment.OpenRecurringAppointmentForm(formContext, Appointment.seriesId);
        };
        Appointment.OpenRecurringAppointmentForm = function (formContext, id) {
            if (!Activities.Common.Util.IsNullOrEmptyString(id)) {
                var formOptions = { "entityName": Activities.Constants.EntityNames.RecurringAppointmentMaster, "entityId": id };
                var parameters = { "recurringAppointmentFormData": true };
                Xrm.Navigation.openForm(formOptions, parameters);
                return;
            }
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventEditRecurrence);
            var recurrenceDlgUrl = "/activities/act_dlgs/recurrencedialog.aspx?dType=1";
            var patternTimeValues = Appointment.getAppointmentPatternValues(formContext);
            var options = {
                height: 650,
                width: 520,
                position: Activities.ClientApi.getWindowCenter()
            };
            var actionUri = formContext.context.isOnPremises() ? formContext.context.prependOrgName(recurrenceDlgUrl) : recurrenceDlgUrl;
            actionUri = actionUri.concat("&Id=", encodeURIComponent(id));
            actionUri = actionUri.concat("&objectType=", encodeURIComponent("4251"));
            actionUri = actionUri.concat("&default=", "1");
            actionUri = actionUri.concat("&endEn=", "0");
            var callbackParameters = [formContext, telemetryItem];
            var callback = Activities.Common.Util.createCallBackFunction(Appointment.RecurrenceDialogCallback, callbackParameters);
            if (Xrm.Internal.isUci()) {
                Xrm.Internal.openLegacyWebDialog(actionUri, options, patternTimeValues, null, callback);
            }
            else {
                Mscrm.CommandBarActions.displayRecurrenceDialog(4251, id, true, false, patternTimeValues, callback);
            }
        };
        Appointment.RecurrenceDialogCallback = function (returnValues, formContext, telemetryItem) {
            if (!returnValues) {
                telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.RecurrenceDialogAction + ": Cancel");
                telemetryItem.report();
                return;
            }
            var recurrenceProperties = Xrm.Internal.isUci() ? returnValues.outboundArgs : returnValues;
            if (!recurrenceProperties) {
                telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.RecurrenceDialogAction + ": Cancel");
                telemetryItem.report();
                return;
            }
            var formParams = Appointment.getRecurrenceFormParameters(formContext, recurrenceProperties);
            if (sessionStorage.getItem(Appointment.key)) {
                sessionStorage.removeItem(Appointment.key);
            }
            sessionStorage.setItem(Appointment.key, JSON.stringify(formParams));
            var formOptions = { entityName: Activities.Constants.EntityNames.RecurringAppointmentMaster, entityId: Appointment.seriesId };
            var parameters = { "recurringAppointmentFormData": true };
            telemetryItem.traceEventInformation(Activities.Constants.TelemetryConstant.RecurrenceDialogAction + ": RecurrencePatternSet");
            telemetryItem.report();
            if (!Xrm.Internal.isUci()) {
                formContext.data.setFormDirty(false);
            }
            Xrm.Navigation.openForm(formOptions, parameters);
        };
        Appointment.setSchedulingNotifications = function (formContext, telemetryItem) {
            if (!Activities.Common.Util.IsNewEntityForm(formContext)) {
                Appointment.cloneActivityRecord(formContext, telemetryItem).then((function (clonnedActivityRecord) {
                    var clonedRecords = clonnedActivityRecord.clonnedRecordSet;
                    var entityCollection = [clonedRecords];
                    var ValidateRequest = new Utilities.CustomMessages.ValidateRequest(entityCollection);
                    Xrm.WebApi.online.execute(ValidateRequest)
                        .then(function (response) { return response.json().then(function (jsonResponse) {
                        if (jsonResponse.Result && jsonResponse.Result.length > 0) {
                            var result = jsonResponse.Result[0];
                            if (!result.ValidationSuccess) {
                                if (result.TraceInfo && result.TraceInfo.ErrorInfoList) {
                                    var notificationIndex = 0;
                                    for (var index1 = 0; index1 < result.TraceInfo.ErrorInfoList.length; index1++) {
                                        var error = result.TraceInfo.ErrorInfoList[index1];
                                        var errorString = Activities.ClientApi.getResourceString(error.ErrorCode);
                                        if (errorString) {
                                            var hasResourceSpec = false;
                                            for (var errorIndex = 0; errorIndex < error.ResourceList.length; errorIndex++) {
                                                // Only allow one notification for ResourceSpecs.
                                                if (error.ResourceList[errorIndex].EntityName == "resourcespec") {
                                                    if (hasResourceSpec) {
                                                        continue;
                                                    }
                                                    hasResourceSpec = true;
                                                }
                                                var notificationMessage = errorString.replace("{0}", error.ResourceList[errorIndex].DisplayName);
                                                var notificationId = "appointment_scheduling_conflict" + notificationIndex;
                                                notificationIndex = notificationIndex + 1;
                                                formContext.ui.setFormNotification(notificationMessage, Xrm.Constants.FormNotificationLevels.error, notificationId);
                                            }
                                        }
                                        else {
                                            telemetryItem.traceEventError("setSchedulingNotifications: Unable to find the error code " + error + " in the resources.");
                                        }
                                    }
                                }
                            }
                        }
                    }); }, function (error) {
                        telemetryItem.traceEventError("Error in Executing ValidateRequest.", error.innerror.message);
                        Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
                    });
                }), function (error) {
                    Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
                });
            }
        };
        Appointment.cloneActivityRecord = function (formContext, telemetryItem) {
            var _this = this;
            var entityName = formContext.data.entity.getEntityName();
            var entityId = formContext.data.entity.getId();
            var activity = {};
            var isOrganizerOrPartyListAttributeDirty = false;
            activity["@odata.type"] = "Microsoft.Dynamics.CRM.appointment";
            var formAttributes = formContext.data.entity.attributes;
            var entitySetNames = this.entitySetNames;
            var navigationPropertyNames = this.navigationPropertyNames;
            var attributeNameValuePairs = {};
            var entityToAttributes = {};
            var odataBindAttributes = {
                attrNames: [],
                parties: [],
            };
            formAttributes.forEach(function (wrapper) {
                var attrName = wrapper.getName(), attrType = wrapper.getAttributeType().toString(), attrValue = wrapper.getValue();
                if (attrValue && attrType === "lookup" && attrValue.length > 0) {
                    for (var _i = 0, attrValue_1 = attrValue; _i < attrValue_1.length; _i++) {
                        var party = attrValue_1[_i];
                        // organizer isn't coming as activity party from this API so specific check for this attribute
                        if (attrName === "organizer" || wrapper.getIsPartyList()) {
                            isOrganizerOrPartyListAttributeDirty = true;
                        }
                        else {
                            // Create list of attribute names for which we need to query for relationship metadata, to retrieve navigationPropertyName.
                            // skipping ownedid attribute since its hardcoded below with known format.
                            if (attrName !== "ownerid") {
                                attributeNameValuePairs[attrName] = attrValue;
                            }
                            odataBindAttributes.attrNames.push(attrName);
                            odataBindAttributes.parties.push(party);
                        }
                        // Create list of entitynames for which we need to query entity metadata to retrieve entitySetName of the entity.
                        if (Activities.Common.Util.IsNullOrUndefined(entityToAttributes[party.entityType]) && !(party.entityType in entityToAttributes)) {
                            entityToAttributes[party.entityType] = ["EntitySetName", "LogicalName"];
                        }
                    }
                }
                else if (attrType === "multiselectoptionset" && !Activities.Common.Util.IsNullOrUndefined(attrValue)) {
                    activity[attrName] = attrValue.length > 0 ? attrValue.toString() : null;
                }
                else if (!Activities.Common.Util.IsNullOrUndefined(attrValue) && attrType !== "lookup") {
                    activity[attrName] = attrValue;
                    if ((attrType === "datetime" || attrType === "date") && wrapper.getAttrDescriptor()) {
                        var convertedDate = new Date(attrValue);
                        var offset = convertedDate.getTimezoneOffset();
                        if ((wrapper.getAttrDescriptor()).Behavior === Activities.Constants.DateTimeFieldBehavior.DateOnly) {
                            offset < 0 && convertedDate.setDate(attrValue.getDate() + 1);
                            var dateOnlyMatch = convertedDate.toISOString().match(/(\d{4}-\d{2}-\d{2})T\d{2}\:\d{2}\:\d{2}\.\d{3}[+-Z]/i);
                            if (dateOnlyMatch[1]) {
                                activity[attrName] = dateOnlyMatch[1];
                            }
                        }
                        else if ((wrapper.getAttrDescriptor()).Behavior === Activities.Constants.DateTimeFieldBehavior.TimeZoneIndependent) {
                            convertedDate.setMinutes(attrValue.getMinutes() - offset);
                            activity[attrName] = convertedDate.toISOString();
                        }
                    }
                }
                else if (wrapper.getIsDirty()) {
                    if (attrName === "organizer" || (attrType === "lookup" && wrapper.getIsPartyList())) {
                        isOrganizerOrPartyListAttributeDirty = true;
                    }
                    else {
                        // for setting lookup fields to null, it needs '_{attrName}_value' to be send as null, for eg, _regardingobjectid_value : null
                        if (attrType === "lookup") {
                            activity["_" + attrName + "_value"] = attrValue;
                        }
                        else {
                            activity[attrName] = attrValue;
                        }
                    }
                }
            });
            // Retrieves entities metadata and then update entitySetNames collections for each entity.
            var entitiesMetadataPromise = Xrm.Utility.getEntitiesMetadata(entityToAttributes).then(function (entitiesMetadata) {
                entitiesMetadata.forEach(function (entityMetadata) {
                    entitySetNames[entityMetadata.LogicalName] = entityMetadata.EntitySetName;
                });
            }, function (error) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(error);
                telemetryItem.traceEventError("Error occurred while retrieving entities metadata for entities: " + Object.keys(entityToAttributes)
                    + " and with error: " + errorMessage);
                return Promise.reject(error);
            });
            // retrieves relationship metadata and then updates navigationPropertyNames collection for each lookup attributes
            var relationshipsMetadataPromise = Xrm.Utility.getEntityMetadata(formContext.data.entity.getEntityName()).then(function (response) {
                var relationships = response.ManyToOneRelationships;
                if (Object.keys(attributeNameValuePairs).length > 0) {
                    for (var attributeName in attributeNameValuePairs) {
                        if (Activities.Common.Util.IsNullOrUndefined(attributeNameValuePairs[attributeName]) || attributeName === "ownerid") {
                            continue;
                        }
                        var referencedEntity = attributeNameValuePairs[attributeName][0].entityType;
                        var referencingAttribute = attributeName;
                        relationships.forEach(function (x) {
                            if (!Activities.Common.Util.IsNullOrUndefined(x.ReferencingAttribute) && x.ReferencedEntity === referencedEntity && x.ReferencingAttribute == referencingAttribute) {
                                _this.navigationPropertyNames[x.ReferencingAttribute] = x.ReferencingEntityNavigationPropertyName;
                            }
                        });
                    }
                }
                else {
                    relationships.forEach(function (x) {
                        if (!Activities.Common.Util.IsNullOrUndefined(x.ReferencingAttribute)) {
                            _this.navigationPropertyNames[x.ReferencingAttribute] = x.ReferencedEntityNavigationPropertyName;
                        }
                    });
                }
            }, function (error) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(error);
                telemetryItem.traceEventError("Error occurred while parsing Relationship metadata json response with error: " + errorMessage);
                return Promise.reject(error);
            });
            return Promise.all([entitiesMetadataPromise, relationshipsMetadataPromise]).then(function () {
                odataBindAttributes.attrNames.forEach(function (attrName, index) {
                    var party = odataBindAttributes.parties[index];
                    var entitySetName = entitySetNames[party.entityType];
                    var navigationPropertyName = navigationPropertyNames[attrName];
                    if (attrName === "ownerid") {
                        activity[attrName + "@odata.bind"] = "/" + entitySetName + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                    }
                    else {
                        activity[navigationPropertyName + "@odata.bind"] = "/" + entitySetName + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                    }
                });
                // In case any organizer or party list attribute is present in the dirty list, then we need to add all the organizer optional and required attendeees in the oData call, 
                // else it will overrides the previous ones
                if (isOrganizerOrPartyListAttributeDirty) {
                    var activity_parties_1 = [];
                    formAttributes.forEach(function (wrapper) {
                        var attrName = wrapper.getName(), attrType = wrapper.getAttributeType().toString(), attrValue = wrapper.getValue();
                        if (attrValue && attrType === "lookup") {
                            for (var _i = 0, attrValue_2 = attrValue; _i < attrValue_2.length; _i++) {
                                var party = attrValue_2[_i];
                                // organizer isn't coming as activity party from this API so specific check for this attribute
                                if (attrName === "organizer" || wrapper.getIsPartyList()) {
                                    var participationtypemask = Activities.Common.ActivityHelper.getParticipationTypeMask(entityName, attrName);
                                    var new_party = {};
                                    if (party.entityType !== "unresolvedaddress") {
                                        new_party["partyid_" + party.entityType + "@odata.bind"] = "/" + entitySetNames[party.entityType] + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                                    }
                                    else {
                                        new_party["addressused"] = party.name;
                                    }
                                    new_party["participationtypemask"] = participationtypemask;
                                    activity_parties_1.push(new_party);
                                }
                            }
                        }
                    });
                    activity[entityName + "_activity_parties"] = activity_parties_1;
                }
                activity["activityid"] = Xrm.Page.data.entity.getId();
                return Promise.resolve({
                    clonnedRecordSet: activity
                });
            }, function (err) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(err);
                telemetryItem.traceEventError("Error occurred in one of the promises: " + errorMessage);
                return Promise.reject(err);
            });
        };
        Appointment.getAppointmentPatternValues = function (formContext) {
            var copyToAttributes = ["scheduledstart", "scheduledend", "scheduleddurationminutes"];
            var formValues = {};
            for (var _i = 0, copyToAttributes_1 = copyToAttributes; _i < copyToAttributes_1.length; _i++) {
                var attr = copyToAttributes_1[_i];
                var attribute = formContext.getAttribute(attr);
                if (attribute && attribute.getValue() != null) {
                    if (attr === "scheduledstart") {
                        var start = Activities.Common.ActivityHelper.convertServerTimeToUserLocalTime(attribute.getValue()).toString();
                        formValues["starttime"] = start;
                        formValues["patternstartdate"] = start;
                    }
                    else if (attr === "scheduledend") {
                        formValues["endtime"] = Activities.Common.ActivityHelper.convertServerTimeToUserLocalTime(attribute.getValue()).toString();
                    }
                    else if (attr === "scheduleddurationminutes") {
                        formValues["duration"] = attribute.getValue().toString();
                    }
                }
            }
            return formValues;
        };
        Appointment.getRecurrenceFormParameters = function (formContext, recurrenceProperties) {
            var formParams = {};
            var formAttributes = formContext.data.entity.attributes;
            formAttributes.forEach(function (attr) {
                var attrName = attr.getName(), attrType = attr.getAttributeType(), attrValue = attr.getValue();
                if (attrName !== "isdraft" && Activities.Common.Util.IsNotNull(attrValue)) {
                    formParams[attrName] = attrValue;
                    if (Xrm.Internal.isUci()) {
                        attr.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                    }
                }
            });
            Appointment.allProperties.forEach(function (property) {
                var value = recurrenceProperties[property];
                if (Activities.Common.Util.IsNotNull(value) && !Activities.Common.Util.IsNullOrWhiteSpace(value.toString())) {
                    formParams[property] = value;
                }
            });
            return formParams;
        };
        Appointment.isSaveAsDraftEnabled = function (formContext) {
            if (!formContext.data) {
                formContext = Xrm.Page;
            }
            var saveAsDraftOrgSettingValue = Activities.Common.Util.getOrgDbOrgSettingValue(Activities.Constants.OrgSettingsConstant.SaveAsDraftOrgSettingName, false);
            return (saveAsDraftOrgSettingValue === "true")
                && formContext.data.entity.attributes.get("isdraft") != null;
        };
        Appointment.isNewOrDraftAppointment = function (formContext) {
            if (!formContext.data) {
                formContext = Xrm.Page;
            }
            var saveAsDraftOrgSettingValue = Activities.Common.Util.getOrgDbOrgSettingValue(Activities.Constants.OrgSettingsConstant.SaveAsDraftOrgSettingName, false);
            if (saveAsDraftOrgSettingValue === "true") {
                return formContext.ui.getFormType() === 1 /* Create */
                    || (formContext.data.entity.attributes.get("isdraft") != null && formContext.data.entity.attributes.get("isdraft").getValue() == true);
            }
        };
        Appointment.bookOrReschedule = function (formContext, isDraft, savemode) {
            if (isDraft === void 0) { isDraft = false; }
            if (savemode === void 0) { savemode = ""; }
            if (!formContext.data) {
                formContext = Xrm.Page;
            }
            var saveAsDraftOrgSettingValue = Activities.Common.Util.getOrgDbOrgSettingValue(Activities.Constants.OrgSettingsConstant.SaveAsDraftOrgSettingName, false);
            if (saveAsDraftOrgSettingValue === "true") {
                var isDraftAttr = formContext.data.entity.attributes.get("isdraft");
                if (isDraftAttr != null) {
                    isDraftAttr.setValue(isDraft);
                    isDraftAttr.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.dirty]);
                }
            }
            Appointment.SkipScheduling = false;
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventAppointmentOnSave);
            if (formContext.data.entity.getIsDirty() || !Activities.SchedulingEngine.UseSchedulingEngine(telemetryItem) || Activities.SchedulingEngine.saveInProgress == false) {
                Activities.SchedulingEngine.saveInProgress = true;
                formContext.data.entity.save(savemode);
            }
        };
        Appointment.handleAppointmentSave = function (eventContext) {
            var formContext = eventContext.getFormContext();
            var saveMode = eventContext.getEventArgs().getSaveMode();
            var isSchedulingNotApplicable = Appointment.SkipScheduling || (saveMode == Activities.Constants.SaveMode.autosave || saveMode == Activities.Constants.SaveMode.saveascompleted || saveMode == Activities.Constants.SaveMode.deactivate);
            var isFormDirty = formContext.data.entity.getIsDirty();
            if (isFormDirty && !isSchedulingNotApplicable) {
                Xrm.Utility.showProgressIndicator(Activities.SchedulingEngine.processMessage); //Showing ProgressSpinner is already handled for "Close appointment, Mark Complete". This handles it for Save, Save and Close, and Auto-save.
            }
            if (!isFormDirty) {
                Activities.SchedulingEngine.saveInProgress = false;
                return;
            }
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventAppointmentOnSave);
            telemetryItem.traceEventInformation("Save Mode : " + saveMode);
            if (isSchedulingNotApplicable) {
                telemetryItem.traceEventInformation("handleAppointmentSave: Skipping Scheduling Logic SkipScheduling: " + Appointment.SkipScheduling + " saveMode: " + saveMode);
                telemetryItem.report();
                return;
            }
            Activities.SchedulingEngine.SaveMode = saveMode;
            Activities.SchedulingEngine.BookOrReScheduleAppointment(formContext, telemetryItem);
            eventContext.getEventArgs().preventDefault();
        };
        Appointment.quickCreateOnSave = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventQuickCreateOnChange);
            Activities.Common.Util.isExecutionContextMissingAndReport(eventContext, telemetryItem);
            var formContext = eventContext.getFormContext();
            if (this.isSaveAsDraftEnabled(formContext)) {
                var draftAttr = formContext.data.entity.attributes.get("isdraft");
                draftAttr.setValue(false);
            }
            Appointment.SkipScheduling = true;
        };
        return Appointment;
    }());
    Appointment.isAttachmentsGridHidden = false;
    Appointment.minutesPerInterval = 30;
    Appointment.seriesId = "";
    Appointment.SkipScheduling = false;
    Appointment.entitySetNames = {};
    Appointment.navigationPropertyNames = {};
    Appointment.allProperties = ["endtime", "interval", "monthofyear",
        "effectiveenddate", "daysofweekmask", "starttime",
        "occurrences", "isnthmonthly", "isnthyearly",
        "isweekdaypattern", "effectivestartdate",
        "dayofmonth", "isregenerate", "duration",
        "recurrencepatterntype", "instance", "patternenddate",
        "patternstartdate", "firstdayofweek", "patternendtype"];
    Appointment.key = "recurringAppointmentFormData";
    Activities.Appointment = Appointment;
    var PriorityCode;
    (function (PriorityCode) {
        PriorityCode[PriorityCode["low"] = 0] = "low";
        PriorityCode[PriorityCode["normal"] = 1] = "normal";
        PriorityCode[PriorityCode["hight"] = 2] = "hight";
    })(PriorityCode = Activities.PriorityCode || (Activities.PriorityCode = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var Common;
    (function (Common) {
        var Util;
        (function (Util) {
            var AttributeNames;
            (function (AttributeNames) {
                AttributeNames.OrganizerAttributeName = "organizer";
                AttributeNames.RequiredAttendeesAttributeName = "requiredattendees";
                AttributeNames.OptionalAttendeesAttributeName = "optionalattendees";
            })(AttributeNames = Util.AttributeNames || (Util.AttributeNames = {}));
        })(Util = Common.Util || (Common.Util = {}));
    })(Common = Activities.Common || (Activities.Common = {}));
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var AppointmentNotifications = (function () {
        function AppointmentNotifications() {
        }
        AppointmentNotifications.showExchangeSyncNotifications = function (formContext, telemetryItem) {
            AppointmentNotifications.showExchangeSyncPrivacyNotification(formContext, telemetryItem);
        };
        AppointmentNotifications.registerExchangeSyncNotifications = function (formContext, telemetryItem) {
            var onAttributeChanged = function (context) {
                AppointmentNotifications.showExchangeSyncNotifications(context.getFormContext(), telemetryItem);
            };
            var organizerAttribute = formContext.getAttribute(Activities.Common.Util.AttributeNames.OrganizerAttributeName);
            if (organizerAttribute) {
                organizerAttribute.addOnChange(onAttributeChanged);
            }
            var requiredAttendeesAttribute = formContext.getAttribute(Activities.Common.Util.AttributeNames.RequiredAttendeesAttributeName);
            if (requiredAttendeesAttribute) {
                requiredAttendeesAttribute.addOnChange(onAttributeChanged);
            }
            var optionalAttendeesAttribute = formContext.getAttribute(Activities.Common.Util.AttributeNames.OptionalAttendeesAttributeName);
            if (optionalAttendeesAttribute) {
                optionalAttendeesAttribute.addOnChange(onAttributeChanged);
            }
        };
        AppointmentNotifications.showExchangeSyncPrivacyNotification = function (formContext, telemetryItem) {
            if (AppointmentNotifications.containsExternalParties(formContext, Activities.Common.Util.AttributeNames.RequiredAttendeesAttributeName) ||
                AppointmentNotifications.containsExternalParties(formContext, Activities.Common.Util.AttributeNames.OptionalAttendeesAttributeName)) {
                AppointmentOrganizer.getUsesExchangeSync(formContext, AppointmentNotifications.updateExchangeSyncPrivacyNotification, telemetryItem);
            }
            else {
                AppointmentNotifications.updateExchangeSyncPrivacyNotification(formContext, false);
            }
        };
        AppointmentNotifications.containsExternalParties = function (formContext, partyListAttributeName) {
            var partyListAttribute = formContext.getAttribute(partyListAttributeName);
            if (Activities.Common.Util.IsNull(partyListAttribute))
                return false;
            var partyList = partyListAttribute.getValue();
            if (Activities.Common.Util.IsNull(partyList))
                return false;
            return partyList.some(function (party) {
                return party.entityType !== "systemuser";
            });
        };
        AppointmentNotifications.updateExchangeSyncPrivacyNotification = function (formContext, show) {
            var notificationId = "appointment_exchange_sync_privacy_notification";
            if (show) {
                formContext.ui.setFormNotification(Activities.ClientApi.getResourceString("ExchangeSyncAppointmentPrivacyWarning"), Xrm.Constants.FormNotificationLevels.warning, notificationId);
            }
            else {
                formContext.ui.clearFormNotification(notificationId);
            }
        };
        return AppointmentNotifications;
    }());
    Activities.AppointmentNotifications = AppointmentNotifications;
    var AppointmentOrganizer = (function () {
        function AppointmentOrganizer() {
        }
        AppointmentOrganizer.getUsesExchangeSync = function (formContext, callback, telemetryItem) {
            var newId = AppointmentOrganizer.getOrganizerId(formContext);
            if (Activities.Common.Util.IsNull(newId)) {
                callback(formContext, false);
            }
            else if (newId === AppointmentOrganizer.lastSeenId) {
                callback(formContext, AppointmentOrganizer.usesExchangeSync);
            }
            else {
                AppointmentOrganizer.retrieveExchangeSyncMailboxes(newId)
                    .then(function (response) {
                    var entityCollection = response.entities;
                    var usesExchangeSync = entityCollection.length > 0;
                    AppointmentOrganizer.lastSeenId = newId;
                    AppointmentOrganizer.usesExchangeSync = usesExchangeSync;
                    callback(formContext, AppointmentOrganizer.usesExchangeSync);
                }, function (errorResponse) {
                    telemetryItem.traceEventError("Error retrieving exchange sync mailboxes.", errorResponse.innerror.message);
                    callback(formContext, true);
                });
            }
        };
        AppointmentOrganizer.getOrganizerId = function (formContext) {
            var organizerAttribute = formContext.getAttribute(Activities.Common.Util.AttributeNames.OrganizerAttributeName);
            if (Activities.Common.Util.IsNull(organizerAttribute))
                return null;
            var organizer = organizerAttribute.getValue();
            if (Activities.Common.Util.IsNullOrUndefined(organizer) || organizer.length < 1)
                return null;
            return organizer[0].id;
        };
        AppointmentOrganizer.retrieveExchangeSyncMailboxes = function (userId) {
            var optionString = "?$select=mailboxid&$filter=_regardingobjectid_value eq '" + Activities.Common.Util.convertGuidToString(userId) + "' and actdeliverymethod eq 1 ";
            return Xrm.WebApi.retrieveMultipleRecords("mailbox", optionString, 50);
        };
        return AppointmentOrganizer;
    }());
    AppointmentOrganizer.lastSeenId = null;
    AppointmentOrganizer.usesExchangeSync = true;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var SchedulingConflictDialog = (function () {
        function SchedulingConflictDialog() {
        }
        SchedulingConflictDialog.onLoad = function (eventContext) {
            var form = eventContext.getFormContext();
            var formAttributes = form.data.attributes;
            var isDraft = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamIsDraft).getValue();
            var activityType = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamActivityType).getValue();
            var notificationData = formAttributes.get(Activities.Constants.MetadataDrivenDialogConstants.ParamNotificationsData).getValue();
            var saveAsDraftOrgSettingValue = Activities.Common.Util.getOrgDbOrgSettingValue(Activities.Constants.OrgSettingsConstant.SaveAsDraftOrgSettingName, false);
            var saveButtonControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.SaveControlId);
            if (saveButtonControl) {
                var saveButtonText = (saveAsDraftOrgSettingValue === "true") ? ((isDraft === "true") ? Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_IgnoreAndSend_Button") :
                    Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_IgnoreAndSave_Button")) : Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_IgnoreAndSave_Button");
                saveButtonControl.setLabel(saveButtonText);
            }
            var descriptionControl = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.ConflictDialogDescription1ControlId);
            if (descriptionControl) {
                var descriptionText = (activityType === Activities.Constants.EntityNames.Appointment) ? Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_Description_Appointment") :
                    Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_Description_RecurringAppointment");
                descriptionControl.setLabel(descriptionText);
            }
            var description2Control = form.getControl(Activities.Constants.MetadataDrivenDialogConstants.ConflictDialogDescription2ControlId);
            if (description2Control && (activityType === Activities.Constants.EntityNames.RecurringAppointmentMaster)) {
                var descriptionText = Activities.ClientApi.getResourceString("Dialog_SchedulingConflict_Description1_RecurringAppointment").replace("{#Brand_CRM}", Activities.ClientApi.getResourceString("Brand_CRM"));
                description2Control.setLabel(descriptionText);
            }
            if (notificationData) {
                var notificationJson = JSON.parse(notificationData);
                for (var index = 0; index < notificationJson.length; index++) {
                    var notificationLevel = void 0;
                    var notificationId = "appointment_scheduling_conflict" + index;
                    switch (notificationJson[index].Severity) {
                        case "Error":
                            notificationLevel = Xrm.Constants.FormNotificationLevels.error;
                            break;
                        case "Warning":
                            notificationLevel = Xrm.Constants.FormNotificationLevels.warning;
                            break;
                        case "Information":
                            notificationLevel = Xrm.Constants.FormNotificationLevels.information;
                            break;
                        default:
                            notificationLevel = Xrm.Constants.FormNotificationLevels.error;
                            break;
                    }
                    form.ui.setFormNotification(notificationJson[index].Message, notificationLevel, notificationId);
                }
            }
        };
        ;
        SchedulingConflictDialog.onSave = function (eventContext) {
            Activities.Common.ActivityHelper.setAttributeValue(eventContext, Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked, Activities.Constants.MetadataDrivenDialogConstants.SaveControlId);
            eventContext.getFormContext().ui.close();
        };
        ;
        return SchedulingConflictDialog;
    }());
    Activities.SchedulingConflictDialog = SchedulingConflictDialog;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var SchedulingEngine = (function () {
        function SchedulingEngine() {
        }
        SchedulingEngine.DialogActionsErrorCallback = function (errorResponse, telemetryItem) {
            Xrm.Utility.closeProgressIndicator();
            Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
        };
        /**
         * Add a recurrence to an existing appointment record
         * @param formContext the form context
         * @param appointmentId the existing appointment Id
         */
        SchedulingEngine.AddRecurrenceSdk = function (formContext, appointmentId, telemetryItem) {
            telemetryItem.traceEventInformation("Cloning activity record.");
            SchedulingEngine.cloneActivityRecord(formContext, SchedulingEngine.RecurringAppointmentEntityType, [], telemetryItem).then((function (clonnedActivityRecord) {
                var recAppointment = clonnedActivityRecord.clonnedRecordSet;
                // patternendtype has to be initialized with -1 to raise invalid recurrence pattern exception at server
                if (!recAppointment["patternendtype"]) {
                    recAppointment["patternendtype"] = -1;
                }
                telemetryItem.traceEventInformation("Activity record cloned.");
                SchedulingEngine.addRecurrenceSdkCall(formContext, recAppointment, appointmentId, telemetryItem);
            }), function (error) {
                SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
            });
        };
        SchedulingEngine.clearFormAttributeSubmitMode = function (formContext, dirtyAttributeListArray) {
            var formAttributes = formContext.data.entity.attributes;
            formAttributes.forEach(function (wrapper) {
                if ((wrapper.getSubmitMode() === Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]) && ((dirtyAttributeListArray.length > 0) && (dirtyAttributeListArray.indexOf(wrapper.getName()) > -1))) {
                    wrapper.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.dirty]);
                }
            });
        };
        /**
         * Clones the attributes from the existing activity record to a new entity record
         * @param formContext the form context
         */
        SchedulingEngine.cloneActivityRecord = function (formContext, entityType, dirtyAttributeList, telemetryItem) {
            var _this = this;
            var entityName = formContext.data.entity.getEntityName();
            var entityId = formContext.data.entity.getId();
            var activity = {};
            var dirtyAttributes = [];
            var isOrganizerOrPartyListAttributeDirty = false;
            var entitySetNames = this.entitySetNames;
            var navigationPropertyNames = this.navigationPropertyNames;
            var attributeNameValuePairs = {};
            var entityToAttributes = {};
            var partylistAttributesList = [];
            activity["@odata.type"] = entityType;
            var update = !Activities.Common.Util.IsNullOrEmptyGuid(entityId);
            var formAttributes = formContext.data.entity.attributes;
            var odataBindAttributes = {
                attrNames: [],
                parties: [],
            };
            formAttributes.forEach(function (wrapper) {
                var attrType = wrapper.getAttributeType().toString(), attrValue = wrapper.getValue();
                var attrName = wrapper.getName();
                if (attrValue && attrType === "lookup" && attrValue.length > 0) {
                    // organizer isn't coming as activity party from this API so specific check for this attribute
                    if (attrName === "organizer" || wrapper.getIsPartyList()) {
                        partylistAttributesList.push(attrValue);
                    }
                }
                if (((wrapper.getSubmitMode() !== Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]) && ((update && wrapper.getIsDirty()) || !update)) ||
                    ((dirtyAttributeList.length > 0) && (dirtyAttributeList.indexOf(wrapper.getName()) > -1))) {
                    if (attrValue && attrType === "lookup" && attrValue.length > 0) {
                        for (var _i = 0, attrValue_3 = attrValue; _i < attrValue_3.length; _i++) {
                            var party = attrValue_3[_i];
                            // organizer isn't coming as activity party from this API so specific check for this attribute
                            if (attrName === "organizer" || wrapper.getIsPartyList()) {
                                isOrganizerOrPartyListAttributeDirty = true;
                            }
                            else {
                                // Create list of attribute names for which we need to query for relationship metadata, to retrieve navigationPropertyName.
                                // skipping ownedid attribute since its hardcoded below with known format.
                                if (attrName !== "ownerid") {
                                    attributeNameValuePairs[attrName] = attrValue;
                                }
                                odataBindAttributes.attrNames.push(attrName);
                                odataBindAttributes.parties.push(party);
                            }
                            // Create list of entitynames for which we need to query entity metadata to retrieve entitySetName of the entity.
                            if (Activities.Common.Util.IsNullOrUndefined(entityToAttributes[party.entityType]) && !(party.entityType in entityToAttributes)) {
                                entityToAttributes[party.entityType] = ["EntitySetName", "LogicalName"];
                            }
                        }
                    }
                    else if (attrType === "multiselectoptionset" && !Activities.Common.Util.IsNullOrUndefined(attrValue)) {
                        activity[attrName] = attrValue.length > 0 ? attrValue.toString() : null;
                    }
                    else if (!Activities.Common.Util.IsNullOrUndefined(attrValue) && attrType !== "lookup") {
                        activity[attrName] = attrValue;
                        if ((attrType === "datetime" || attrType === "date") && wrapper.getAttrDescriptor()) {
                            var convertedDate = new Date(attrValue);
                            var offset = convertedDate.getTimezoneOffset();
                            if ((wrapper.getAttrDescriptor()).Behavior === Activities.Constants.DateTimeFieldBehavior.DateOnly) {
                                offset < 0 && convertedDate.setDate(attrValue.getDate() + 1);
                                var dateOnlyMatch = convertedDate.toISOString().match(/(\d{4}-\d{2}-\d{2})T\d{2}\:\d{2}\:\d{2}\.\d{3}[+-Z]/i);
                                if (dateOnlyMatch[1]) {
                                    activity[attrName] = dateOnlyMatch[1];
                                }
                            }
                            else if ((wrapper.getAttrDescriptor()).Behavior === Activities.Constants.DateTimeFieldBehavior.TimeZoneIndependent) {
                                convertedDate.setMinutes(attrValue.getMinutes() - offset);
                                activity[attrName] = convertedDate.toISOString();
                            }
                        }
                    }
                    else if (wrapper.getIsDirty()) {
                        if (attrName === "organizer" || (attrType === "lookup" && wrapper.getIsPartyList())) {
                            isOrganizerOrPartyListAttributeDirty = true;
                        }
                        else {
                            // for setting lookup fields to null, it needs '_{attrName}_value' to be send as null, for eg, _regardingobjectid_value : null
                            if (attrType === "lookup") {
                                activity["_" + attrName + "_value"] = attrValue;
                            }
                            else {
                                activity[attrName] = attrValue;
                            }
                        }
                    }
                    wrapper.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                    dirtyAttributes.push(attrName);
                }
                // If any of the prtylist attribute is dirty, we need to pass all the party list attributes to the payload otherwise the values are overridden
                if (isOrganizerOrPartyListAttributeDirty) {
                    partylistAttributesList.forEach(function (attrValue) {
                        for (var _i = 0, attrValue_4 = attrValue; _i < attrValue_4.length; _i++) {
                            var party = attrValue_4[_i];
                            if (Activities.Common.Util.IsNullOrUndefined(entityToAttributes[attrValue.entityType]) && !(party.entityType in entityToAttributes)) {
                                entityToAttributes[party.entityType] = ["EntitySetName", "LogicalName"];
                            }
                        }
                    });
                }
            });
            // Retrieves entities metadata and then update entitySetNames collections for each entity.
            var entitiesMetadataPromise = Xrm.Utility.getEntitiesMetadata(entityToAttributes).then(function (entitiesMetadata) {
                entitiesMetadata.forEach(function (entityMetadata) {
                    entitySetNames[entityMetadata.LogicalName] = entityMetadata.EntitySetName;
                });
            }, function (error) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(error);
                telemetryItem.traceEventError("Error occurred while retrieving entities metadata for entities: " + Object.keys(entityToAttributes)
                    + " and with error: " + errorMessage);
                return Promise.reject(error);
            });
            // retrieves relationship metadata and then updates navigationPropertyNames collection for each lookup attributes
            var relationshipsMetadataPromise = Xrm.Utility.getEntityMetadata(formContext.data.entity.getEntityName()).then(function (response) {
                var relationships = response.ManyToOneRelationships;
                if (Object.keys(attributeNameValuePairs).length > 0) {
                    for (var attributeName in attributeNameValuePairs) {
                        if (Activities.Common.Util.IsNullOrUndefined(attributeNameValuePairs[attributeName]) || attributeName === "ownerid") {
                            continue;
                        }
                        var referencedEntity = attributeNameValuePairs[attributeName][0].entityType;
                        var referencingAttribute = attributeName;
                        relationships.forEach(function (x) {
                            if (!Activities.Common.Util.IsNullOrUndefined(x.ReferencingAttribute) && x.ReferencedEntity === referencedEntity && x.ReferencingAttribute == referencingAttribute) {
                                _this.navigationPropertyNames[x.ReferencingAttribute] = x.ReferencingEntityNavigationPropertyName;
                            }
                        });
                    }
                }
                else {
                    relationships.forEach(function (x) {
                        if (!Activities.Common.Util.IsNullOrUndefined(x.ReferencingAttribute)) {
                            _this.navigationPropertyNames[x.ReferencingAttribute] = x.ReferencedEntityNavigationPropertyName;
                        }
                    });
                }
            }, function (error) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(error);
                telemetryItem.traceEventError("Error occurred while parsing Relationship metadata json response with error: " + errorMessage);
                return Promise.reject(error);
            });
            return Promise.all([entitiesMetadataPromise, relationshipsMetadataPromise]).then(function () {
                odataBindAttributes.attrNames.forEach(function (attrName, index) {
                    var party = odataBindAttributes.parties[index];
                    var entitySetName = entitySetNames[party.entityType];
                    if (attrName === "ownerid") {
                        activity[attrName + "@odata.bind"] = "/" + entitySetName + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                    }
                    else {
                        activity[navigationPropertyNames[attrName] + "@odata.bind"] = "/" + entitySetName + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                    }
                });
                // In case any organizer or party list attribute is present in the dirty list, then we need to add all the organizer optional and required attendeees in the oData call, 
                // else it will overrides the previous ones
                if (isOrganizerOrPartyListAttributeDirty) {
                    var activity_parties_2 = [];
                    formAttributes.forEach(function (wrapper) {
                        var attrName = wrapper.getName(), attrType = wrapper.getAttributeType().toString(), attrValue = wrapper.getValue();
                        if (attrValue && attrType === "lookup") {
                            for (var _i = 0, attrValue_5 = attrValue; _i < attrValue_5.length; _i++) {
                                var party = attrValue_5[_i];
                                // organizer isn't coming as activity party from this API so specific check for this attribute
                                if (attrName === "organizer" || wrapper.getIsPartyList()) {
                                    var participationtypemask = Activities.Common.ActivityHelper.getParticipationTypeMask(entityName, attrName);
                                    var new_party = {};
                                    if (party.entityType !== "unresolvedaddress") {
                                        new_party["partyid_" + party.entityType + "@odata.bind"] = "/" + entitySetNames[party.entityType] + "(" + Activities.Common.Util.convertGuidToString(party.id) + ")";
                                    }
                                    else {
                                        new_party["addressused"] = party.name;
                                    }
                                    new_party["participationtypemask"] = participationtypemask;
                                    activity_parties_2.push(new_party);
                                }
                            }
                        }
                    });
                    activity[entityName + "_activity_parties"] = activity_parties_2;
                }
                SchedulingEngine.updateStateCodeAndStatusCode(activity, formContext, telemetryItem);
                SchedulingEngine.ensureBothStateCodeAndStatusCodeArePresent(activity, formContext);
                var isAllDayAttribute = formAttributes.get("isalldayevent");
                activity["isalldayevent"] = isAllDayAttribute && !Activities.Common.Util.IsNullOrUndefined(isAllDayAttribute.getValue())
                    ? isAllDayAttribute.getValue() : false;
                return Promise.resolve({
                    clonnedRecordSet: activity,
                    dirtyAttributeSet: dirtyAttributes
                });
            }, function (err) {
                var errorMessage = Activities.Common.Util.tryGetErrorMessage(err);
                telemetryItem.traceEventError("Error occurred in one of the promises: " + errorMessage);
                return Promise.reject(err);
            });
        };
        SchedulingEngine.ensureBothStateCodeAndStatusCodeArePresent = function (activity, formContext) {
            //This is needed since reschedule API expects both state code and statuscode or none.
            var formAttributes = formContext.data.entity.attributes;
            var STATE_CODE = "statecode";
            var STATUS_CODE = "statuscode";
            var isStatusCodeNotDirty = Activities.Common.Util.IsNullOrUndefined(activity[STATUS_CODE]);
            var isStateCodeNotDirty = Activities.Common.Util.IsNullOrUndefined(activity[STATE_CODE]);
            //return if both are dirty or both aren't
            if (isStateCodeNotDirty === isStatusCodeNotDirty) {
                return;
            }
            if (isStateCodeNotDirty) {
                //state code isn't dirty but status code is. Add state code to the list.
                var stateCodeAttribute = formAttributes.get(STATE_CODE);
                var currentStateCode = stateCodeAttribute ? stateCodeAttribute.getValue() : null;
                activity[STATE_CODE] = currentStateCode;
            }
            else {
                //status code isn't dirty but state code is. Add status code to the list.
                var statusCodeAttribute = formAttributes.get(STATUS_CODE);
                var currentStatusCode = statusCodeAttribute ? statusCodeAttribute.getValue() : null;
                activity[STATUS_CODE] = currentStatusCode;
            }
        };
        SchedulingEngine.updateStateCodeAndStatusCode = function (activity, formContext, telemetryItem) {
            var formAttributes = formContext.data.entity.attributes;
            var STATE_CODE = "statecode";
            var STATUS_CODE = "statuscode";
            var stateCodeAttribute = formAttributes.get(STATE_CODE);
            var currentStateCode = stateCodeAttribute ? stateCodeAttribute.getValue() : null;
            //Will do this only if it is a new appointment or the current state code isnt present.
            if (Activities.Common.Util.IsNullOrEmptyString(Xrm.Page.data.entity.getId())
                || Activities.Common.Util.IsNullOrUndefined(currentStateCode)) {
                // Use default status code.
                var statusCodeAttribute = formContext.getAttribute(STATUS_CODE).getOption(Activities.Constants.AppointmentStatusCode.busy);
                statusCodeAttribute = statusCodeAttribute != null ? statusCodeAttribute['value'] : null;
                if (Activities.Common.Util.IsNullOrUndefined(statusCodeAttribute)) {
                    //Status code doesnt have a value for 5. We need to use some other value.
                    var optionSet = formContext.getAttribute(STATUS_CODE).getAttrDescriptor().OptionSet;
                    optionSet = optionSet.filter(function (item) { return item['State'] == Activities.Constants.AppointmentStateCode.scheduled.toString(); });
                    //DefaultStatus is coming as undefined. Could have used it otherwise.
                    statusCodeAttribute = optionSet != null && optionSet.length > 0 ? optionSet[0]['Value'] : null;
                }
                activity["statuscode"] = statusCodeAttribute;
                // State code default set to scheduled.
                activity["statecode"] = Activities.Constants.AppointmentStateCode.scheduled;
            }
        };
        SchedulingEngine.addRecurrenceSdkCall = function (formContext, newEntity, appointmentId, telemetryItem) {
            var appointmentEntity = {
                id: appointmentId,
                entityType: "appointment"
            };
            var addRecurrenceRequest = new Utilities.CustomMessages.AddRecurrenceRequest(appointmentEntity, newEntity);
            Xrm.WebApi.online.execute(addRecurrenceRequest)
                .then(function (response) { return response.json().then(function (jsonEntity) {
                Xrm.Utility.closeProgressIndicator();
                var id = jsonEntity.activityid;
                var entityName = Activities.Constants.EntityNames.RecurringAppointmentMaster;
                telemetryItem.traceEventInformation("AddRecurrence executed successfully. New recurringappointmentmaster: " + id);
                telemetryItem.report();
                SchedulingEngine.RecurringAppointmentId = "";
                if (SchedulingEngine.SaveMode === Activities.Constants.SaveMode.saveandclose) {
                    telemetryItem.traceEventInformation("Save Complete. Closing form.");
                    telemetryItem.report();
                    formContext.ui.close();
                }
                else {
                    telemetryItem.report();
                    Xrm.Utility.refreshParentGrid({ entityType: entityName, id: id, name: "" });
                    Xrm.Navigation.openForm({ entityId: id, entityName: entityName }, { "recurringAppointmentFormData": true });
                }
            }); }, function (error) {
                SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
            });
        };
        SchedulingEngine.UseSchedulingEngine = function (telemetryItem) {
            var context = Xrm.Utility.getGlobalContext();
            var securityRolePrivileges = context.userSettings.securityRolePrivileges;
            var hasSearchAvailabilityPrivilege = securityRolePrivileges ? (securityRolePrivileges.findIndex(function (securityPrivilege) { return securityPrivilege.toLowerCase() === SchedulingEngine.SearchAvailabilityPrivilege; }) !== -1) : false;
            var isSchedulingEngineEnabled = Xrm.Internal.isUci() && Xrm.Internal.isDisruptiveFeatureEnabled(Activities.Constants.FCBConstant.AppointmentSchedulingInUCIFCB)
                && hasSearchAvailabilityPrivilege && !Activities.ClientApi.IsMocaOffline();
            telemetryItem.traceEventInformation("Is Appointment Scheduling enabled: " + isSchedulingEngineEnabled);
            return isSchedulingEngineEnabled;
        };
        SchedulingEngine.OpenSchedulingConflictDialog = function (formContext, notification, dirtyAttributeSet, telemetryItem) {
            var dialogOptions = { height: 300, width: 600, position: 1 /* center */ };
            var dialogParameters = {};
            SchedulingEngine.DirtyAttributeList = dirtyAttributeSet.toString();
            dialogParameters[Activities.Constants.MetadataDrivenDialogConstants.ParamIsDraft] = Xrm.Page.getAttribute("isdraft") != null ? (!Xrm.Page.getAttribute("isdraft").getValue()).toString() : "false";
            ;
            dialogParameters[Activities.Constants.MetadataDrivenDialogConstants.ParamNotificationsData] = notification;
            dialogParameters[Activities.Constants.MetadataDrivenDialogConstants.ParamActivityType] = formContext.data.entity.getEntityName();
            telemetryItem.traceEventInformation("Opening Conflict Dialog.");
            Xrm.Utility.closeProgressIndicator();
            Xrm.Navigation.openDialog(Activities.Constants.DialogNames.AppointmentSchedulingConflict, dialogOptions, dialogParameters).then(function (response) {
                var dirtyAttributeListArray = (!Activities.Common.Util.IsNullOrEmptyString(SchedulingEngine.DirtyAttributeList)) ?
                    (SchedulingEngine.DirtyAttributeList.substring(0, SchedulingEngine.DirtyAttributeList.length).split(",")) : [];
                SchedulingEngine.DirtyAttributeList = "";
                if (response.parameters[Activities.Constants.MetadataDrivenDialogConstants.ParamLastButtonClicked] === Activities.Constants.MetadataDrivenDialogConstants.SaveControlId) {
                    Xrm.Utility.showProgressIndicator(SchedulingEngine.processMessage);
                    telemetryItem.traceEventInformation("Saving or Sending conflicting appointment");
                    var entityName = formContext.data.entity.getEntityName();
                    var entityType = (entityName === Activities.Constants.EntityNames.Appointment) ? SchedulingEngine.AppointmentEntityType :
                        SchedulingEngine.RecurringAppointmentEntityType;
                    var startTime_1 = new Date();
                    SchedulingEngine.clearFormAttributeSubmitMode(formContext, dirtyAttributeListArray);
                    SchedulingEngine.cloneActivityRecord(formContext, entityType, dirtyAttributeListArray, telemetryItem).then((function (clonnedActivityRecord) {
                        if (Activities.Common.Util.IsNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                            telemetryItem.traceEventInformation("Creating conflicting record.");
                            Xrm.WebApi.createRecord(formContext.data.entity.getEntityName(), clonnedActivityRecord.clonnedRecordSet).then(function (createdEntityRef) {
                                var endtime = new Date();
                                telemetryItem.traceEventCustom("CreateRequestTime", (endtime.valueOf() - startTime_1.valueOf()));
                                SchedulingEngine.HandleSuccessResponse(formContext, createdEntityRef.id, telemetryItem);
                            }).catch(function (exception) {
                                SchedulingEngine.saveInProgress = false;
                                // Clearing the dirty list set, so as to show the unsaved page to user
                                SchedulingEngine.clearFormAttributeSubmitMode(formContext, dirtyAttributeListArray);
                                telemetryItem.traceEventError("Error in Creating the record.", exception);
                                SchedulingEngine.DialogActionsErrorCallback(exception, telemetryItem);
                            });
                        }
                        else {
                            telemetryItem.traceEventInformation("Updating conflicting record.");
                            Xrm.WebApi.updateRecord(formContext.data.entity.getEntityName(), Xrm.Page.data.entity.getId(), clonnedActivityRecord.clonnedRecordSet).then(function (lookupValue) {
                                var endtime = new Date();
                                telemetryItem.traceEventCustom("UpdateRequestTime", (endtime.valueOf() - startTime_1.valueOf()));
                                SchedulingEngine.HandleSuccessResponse(formContext, Xrm.Page.data.entity.getId(), telemetryItem);
                            }).catch(function (exception) {
                                SchedulingEngine.saveInProgress = false;
                                // Clearing the dirty list set, so as to show the unsaved page to user
                                SchedulingEngine.clearFormAttributeSubmitMode(formContext, dirtyAttributeListArray);
                                telemetryItem.traceEventError("Error in Updating the record.", exception);
                                SchedulingEngine.DialogActionsErrorCallback(exception, telemetryItem);
                            });
                        }
                    }), function (error) {
                        SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
                    });
                }
                else {
                    telemetryItem.traceEventInformation("Cancelled Conflict Dialog.");
                    SchedulingEngine.saveInProgress = false;
                    SchedulingEngine.clearFormAttributeSubmitMode(formContext, dirtyAttributeListArray);
                    telemetryItem.report();
                }
            }, function (error) {
                Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
            });
        };
        SchedulingEngine.BookOrReScheduleAppointment = function (formContext, telemetryItem) {
            var entityName = formContext.data.entity.getEntityName();
            var entityType = (entityName === Activities.Constants.EntityNames.Appointment) ? SchedulingEngine.AppointmentEntityType :
                SchedulingEngine.RecurringAppointmentEntityType;
            SchedulingEngine.cloneActivityRecord(formContext, entityType, [], telemetryItem).then((function (clonnedActivityRecord) {
                var clonnedEntity = clonnedActivityRecord.clonnedRecordSet;
                var startTime = new Date();
                // Create Flow
                if (Activities.Common.Util.IsNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                    var bookRequest = new Utilities.CustomMessages.BookRequest(clonnedEntity, true);
                    telemetryItem.traceEventInformation("Create Flow. Executing Book Request");
                    Xrm.WebApi.online.execute(bookRequest)
                        .then(function (response) { return response.json().then(function (jsonResponse) {
                        var endtime = new Date();
                        telemetryItem.traceEventCustom("BookRequestTime", (endtime.valueOf() - startTime.valueOf()));
                        SchedulingEngine.HandleBookOrReScheduleResponse(formContext, jsonResponse, clonnedActivityRecord.dirtyAttributeSet, telemetryItem);
                    }); }, function (error) {
                        telemetryItem.traceEventError("Error in Executing BookRequest.", error.innerror.message);
                        SchedulingEngine.clearFormAttributeSubmitMode(formContext, clonnedActivityRecord.dirtyAttributeSet);
                        SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
                    });
                }
                else {
                    clonnedEntity["activityid"] = Xrm.Page.data.entity.getId();
                    var rescheduleRequest = new Utilities.CustomMessages.RescheduleRequest(clonnedEntity, true);
                    telemetryItem.traceEventInformation("Update Flow. Executing Reschedule Request");
                    Xrm.WebApi.online.execute(rescheduleRequest)
                        .then(function (response) { return response.json().then(function (jsonResponse) {
                        var endtime = new Date();
                        telemetryItem.traceEventCustom("RescheduleRequestTime", (endtime.valueOf() - startTime.valueOf()));
                        SchedulingEngine.HandleBookOrReScheduleResponse(formContext, jsonResponse, clonnedActivityRecord.dirtyAttributeSet, telemetryItem);
                    }); }, function (error) {
                        telemetryItem.traceEventError("Error in Executing RescheduleRequest.", error.innerror.message);
                        SchedulingEngine.clearFormAttributeSubmitMode(formContext, clonnedActivityRecord.dirtyAttributeSet);
                        SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
                    });
                }
            }), function (error) {
                SchedulingEngine.DialogActionsErrorCallback(error, telemetryItem);
            });
        };
        SchedulingEngine.HandleBookOrReScheduleResponse = function (formContext, jsonResponse, dirtyAttributeSet, telemetryItem) {
            telemetryItem.traceEventCustom("Scheduling Conflict", !jsonResponse.ValidationResult.ValidationSuccess);
            if (jsonResponse.ValidationResult.ValidationSuccess) {
                SchedulingEngine.HandleSuccessResponse(formContext, jsonResponse.ValidationResult.ActivityId, telemetryItem);
            }
            else {
                var notifications = jsonResponse.Notifications ? JSON.stringify(jsonResponse.Notifications) : "";
                SchedulingEngine.OpenSchedulingConflictDialog(formContext, notifications, dirtyAttributeSet, telemetryItem);
            }
        };
        SchedulingEngine.HandleSuccessResponse = function (formContext, entityId, telemetryItem) {
            try {
                var formParams_1 = {};
                var formAttributes = formContext.data.entity.attributes;
                formAttributes.forEach(function (attr) {
                    var attrName = attr.getName(), attrType = attr.getAttributeType(), attrValue = attr.getValue();
                    if (attrName !== "isdraft" && Activities.Common.Util.IsNotNull(attrValue)) {
                        formParams_1[attrName] = attrValue;
                        attr.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                    }
                });
                Xrm.Utility.closeProgressIndicator();
                if (SchedulingEngine.SaveMode === Activities.Constants.SaveMode.saveandclose) {
                    telemetryItem.traceEventInformation("Save Complete. Closing form.");
                    telemetryItem.report();
                    formContext.ui.close();
                }
                else {
                    if (sessionStorage.getItem(entityId)) {
                        sessionStorage.removeItem(entityId);
                    }
                    sessionStorage.setItem(entityId, JSON.stringify(formParams_1));
                    var formOptions = { entityName: formContext.data.entity.getEntityName(), entityId: entityId };
                    var parameters = { "recurringAppointmentFormData": true };
                    telemetryItem.traceEventInformation("Save Complete. Reopening Saved form.");
                    telemetryItem.report();
                    if (Xrm.Utility.getPageContext().options && Xrm.Utility.getPageContext().options.target == 2 /* dialog */) {
                        var entityDialogOptions = { entityName: formContext.data.entity.getEntityName(), entityId: entityId };
                        entityDialogOptions["pageType"] = "entityrecord";
                        Xrm.Navigation.navigateTo(entityDialogOptions, { target: 2, position: 1 }).then(function (response) {
                            formContext.ui.close();
                        });
                    }
                    else {
                        Xrm.Navigation.openForm(formOptions, parameters);
                    }
                }
            }
            catch (exception) {
                Xrm.Utility.closeProgressIndicator();
                telemetryItem.traceEventError("Error occurred after the form got saved: " + exception.message);
            }
        };
        return SchedulingEngine;
    }());
    SchedulingEngine.RecurringAppointmentId = "";
    SchedulingEngine.SearchAvailabilityPrivilege = "f1249a6e-33e2-45fe-903b-f4c50810ee58";
    SchedulingEngine.RecurringAppointmentEntityType = "Microsoft.Dynamics.CRM.recurringappointmentmaster";
    SchedulingEngine.AppointmentEntityType = "Microsoft.Dynamics.CRM.appointment";
    SchedulingEngine.SaveMode = Activities.Constants.SaveMode.save;
    SchedulingEngine.DirtyAttributeList = "";
    SchedulingEngine.entitySetNames = {};
    SchedulingEngine.navigationPropertyNames = {};
    SchedulingEngine.saveInProgress = false;
    SchedulingEngine.processMessage = Activities.ClientApi.getResourceString("UCI.Form.Saving");
    Activities.SchedulingEngine = SchedulingEngine;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var DateUtilityFunctions = (function () {
        function DateUtilityFunctions() {
        }
        DateUtilityFunctions.initDates = function (eventContext, telemetryItem) {
            var formContext = eventContext.getFormContext();
            DateUtilityFunctions.scheduledEndControl = formContext.ui.controls.get("scheduledend");
            DateUtilityFunctions.scheduledEndAttribute = formContext.getAttribute("scheduledend");
            DateUtilityFunctions.scheduledStartCtrl = formContext.ui.controls.get("scheduledstart");
            DateUtilityFunctions.scheduledStartAttribute = formContext.getAttribute("scheduledstart");
            DateUtilityFunctions.scheduledDurationMinutesControl = formContext.ui.controls.get("scheduleddurationminutes");
            DateUtilityFunctions.scheduledDurationMinutesAttribute =
                formContext.getAttribute("scheduleddurationminutes");
            DateUtilityFunctions.isAllDayEventControl = formContext.ui.controls.get("isalldayevent");
            DateUtilityFunctions.isAllDayEventAttribute = formContext.getAttribute("isalldayevent");
            DateUtilityFunctions.isAllDay = DateUtilityFunctions.isAllDayEventAttribute.getValue();
            if (DateUtilityFunctions.isAllDay && DateUtilityFunctions.IsAllDayEventInUTCMidnightFCBOn) {
                DateUtilityFunctions.handleAllDay(true);
            }
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute) && Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue())) {
                DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue();
            }
            if (Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledStartAttribute.getValue()) || Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledEndAttribute.getValue())) {
                if (DateUtilityFunctions.isSchedulableActivity(formContext)) {
                    DateUtilityFunctions.durationChanged(null, telemetryItem);
                }
            }
            else if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute) && Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue())) {
                DateUtilityFunctions.endTimeChanged(null, telemetryItem);
            }
            else {
                DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.defaultDurationMinutes;
            }
            DateUtilityFunctions.oldNonAllDayStartTime = DateUtilityFunctions.scheduledStartAttribute.getValue();
            DateUtilityFunctions.oldNonAllDayEndTime = DateUtilityFunctions.scheduledEndAttribute.getValue();
            DateUtilityFunctions.attachTimeControlEvents();
        };
        DateUtilityFunctions.handleAllDay = function (setShowTime) {
            if (Xrm.Internal.isUci()) {
                var userOffSet = Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes();
                if (userOffSet != 0) {
                    DateUtilityFunctions.scheduledStartAttribute.removeOnChange(DateUtilityFunctions.setSubmitMode);
                    DateUtilityFunctions.scheduledEndAttribute.removeOnChange(DateUtilityFunctions.setSubmitMode);
                    DateUtilityFunctions.scheduledDurationMinutesAttribute.removeOnChange(DateUtilityFunctions.setSubmitModeOnDurationChanged);
                    DateUtilityFunctions.scheduledEndAttribute.removeOnChange(DateUtilityFunctions.endTimeChanged);
                    DateUtilityFunctions.scheduledStartAttribute.removeOnChange(DateUtilityFunctions.startTimeChanged);
                    if (DateUtilityFunctions.CheckIfRefresh(DateUtilityFunctions.scheduledStartAttribute.getValue())) {
                        var startDate = DateUtilityFunctions.scheduledStartAttribute.getValue();
                        startDate.setMinutes(startDate.getMinutes() - userOffSet);
                        DateUtilityFunctions.scheduledStartAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                        DateUtilityFunctions.scheduledStartAttribute.setValue(startDate);
                        DateUtilityFunctions.startAttrDontInclude = startDate;
                    }
                    if (DateUtilityFunctions.CheckIfRefresh(DateUtilityFunctions.scheduledEndAttribute.getValue())) {
                        var endDate = DateUtilityFunctions.scheduledEndAttribute.getValue();
                        endDate.setMinutes(endDate.getMinutes() - userOffSet);
                        DateUtilityFunctions.scheduledEndAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                        DateUtilityFunctions.scheduledEndAttribute.setValue(endDate);
                        DateUtilityFunctions.endAttrDontInclude = endDate;
                    }
                    DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledStartAttribute, DateUtilityFunctions.setSubmitMode);
                    DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledEndAttribute, DateUtilityFunctions.setSubmitMode);
                    DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledDurationMinutesAttribute, DateUtilityFunctions.setSubmitModeOnDurationChanged);
                    DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledStartAttribute, DateUtilityFunctions.startTimeChanged);
                    DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledEndAttribute, DateUtilityFunctions.endTimeChanged);
                }
            }
            if (setShowTime) {
                DateUtilityFunctions.scheduledStartCtrl.setShowTime(false);
                DateUtilityFunctions.scheduledEndControl.setShowTime(false);
            }
        };
        DateUtilityFunctions.isSchedulableActivity = function (formContext) {
            var etn = formContext.data.entity.getEntityName();
            switch (etn) {
                case Activities.Constants.EntityNames.Appointment:
                case Activities.Constants.EntityNames.RecurringAppointmentMaster:
                case Activities.Constants.EntityNames.ServiceAppointment:
                    return true;
                default:
                    return false;
            }
        };
        DateUtilityFunctions.attachTimeControlEvents = function () {
            DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledEndAttribute, DateUtilityFunctions.endTimeChanged);
            DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledStartAttribute, DateUtilityFunctions.startTimeChanged);
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute)) {
                DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.scheduledDurationMinutesAttribute, DateUtilityFunctions.durationChanged);
            }
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.isAllDayEventControl)) {
                DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup(DateUtilityFunctions.isAllDayEventAttribute, DateUtilityFunctions.setAllDay);
            }
        };
        DateUtilityFunctions.AddOnChangeEventHandlerWithCleanup = function (attribute, eventHandler) {
            attribute.removeOnChange(eventHandler);
            attribute.addOnChange(eventHandler);
        };
        //if dates are in GMT midnight time on an allday appointment, that means it's from refresh, else it would be in userlocal midnight time. 
        DateUtilityFunctions.CheckIfRefresh = function (date) {
            if (date == null)
                return false;
            var localDateTime = date;
            localDateTime.setMinutes(localDateTime.getMinutes() + localDateTime.getTimezoneOffset());
            var localDate = new Date(localDateTime.toDateString());
            return (localDateTime.toUTCString() == localDate.toUTCString() && Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes() != 0);
        };
        DateUtilityFunctions.startTimeChanged = function (context, telemetryItem) {
            var selfReport = !telemetryItem;
            telemetryItem = selfReport ? new TelemetryLogger.TelemetryItem(context.getFormContext().data.entity.getEntityName(), "startTimeOnChange") : telemetryItem;
            var handle = DateUtilityFunctions.isAllDayEvent() && Xrm.Internal.isUci() && DateUtilityFunctions.IsAllDayEventInUTCMidnightFCBOn;
            var isOnRefresh = false;
            if (handle) {
                if (DateUtilityFunctions.CheckIfRefresh(DateUtilityFunctions.scheduledStartAttribute.getValue())) {
                    isOnRefresh = true;
                }
                else {
                    DateUtilityFunctions.isFormOnRefresh = false;
                }
            }
            DateUtilityFunctions.checkIfControlDisabled("DateUtilityFunctions.scheduledStartAttribute");
            try {
                var endDateAcrossTimeZonesValue = DateUtilityFunctions.endDateAcrossTimeZones(telemetryItem);
                if (Activities.Common.Util.IsNotNull(endDateAcrossTimeZonesValue) && !isOnRefresh) {
                    DateUtilityFunctions.scheduledEndAttribute.setValue(endDateAcrossTimeZonesValue);
                    DateUtilityFunctions.setDuration(DateUtilityFunctions.scheduledDurationMinutesAttribute, DateUtilityFunctions.isAllDayEvent());
                }
            }
            catch (e) {
                telemetryItem.traceEventError("Error in startTimeChanged.", e.message);
            }
            finally {
                DateUtilityFunctions.suppressEvents(false);
                if (isOnRefresh && !DateUtilityFunctions.isFormOnRefresh) {
                    DateUtilityFunctions.isFormOnRefresh = true;
                    DateUtilityFunctions.handleAllDay(false);
                }
            }
            if (selfReport) {
                telemetryItem.report();
            }
        };
        DateUtilityFunctions.setSubmitMode = function (context) {
            if (!DateUtilityFunctions.isFormOnRefresh && !(DateUtilityFunctions.startAttrDontInclude != null && DateUtilityFunctions.endAttrDontInclude != null && DateUtilityFunctions.scheduledStartAttribute.getValue().getTime() == DateUtilityFunctions.startAttrDontInclude.getTime() && DateUtilityFunctions.scheduledEndAttribute.getValue().getTime() == DateUtilityFunctions.endAttrDontInclude.getTime())) {
                DateUtilityFunctions.scheduledStartAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
                DateUtilityFunctions.scheduledEndAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
            }
        };
        DateUtilityFunctions.setSubmitModeOnDurationChanged = function (context) {
            if (!DateUtilityFunctions.isFormOnRefresh) {
                DateUtilityFunctions.scheduledStartAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
                DateUtilityFunctions.scheduledEndAttribute.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.always]);
            }
        };
        DateUtilityFunctions.endTimeChanged = function (context, telemetryItem) {
            var selfReport = !telemetryItem;
            telemetryItem = selfReport ? new TelemetryLogger.TelemetryItem(context.getFormContext().data.entity.getEntityName(), "endTimeOnChange") : telemetryItem;
            var handle = DateUtilityFunctions.isAllDayEvent() && Xrm.Internal.isUci() && DateUtilityFunctions.IsAllDayEventInUTCMidnightFCBOn;
            var isOnRefresh = false;
            if (handle) {
                if (DateUtilityFunctions.CheckIfRefresh(DateUtilityFunctions.scheduledEndAttribute.getValue())) {
                    isOnRefresh = true;
                }
                else {
                    DateUtilityFunctions.isFormOnRefresh = false;
                }
            }
            DateUtilityFunctions.isEndTimeCleared = false;
            DateUtilityFunctions.checkIfControlDisabled("DateUtilityFunctions.scheduledEndAttribute");
            if (DateUtilityFunctions.isEndTimeCleared) {
                DateUtilityFunctions.isEndTimeCleared = false;
                if (isOnRefresh && !DateUtilityFunctions.isFormOnRefresh) {
                    DateUtilityFunctions.isFormOnRefresh = true;
                    DateUtilityFunctions.handleAllDay(false);
                }
                return;
            }
            try {
                var timeStart = DateUtilityFunctions.scheduledStartAttribute.getValue(), timeEnd = DateUtilityFunctions.getScheduledEndValue();
                if (timeEnd < timeStart || DateUtilityFunctions.isAllDayEvent() && DateUtilityFunctions.getScheduledEndValue().toString() === DateUtilityFunctions.scheduledStartAttribute.getValue().toString()) {
                    Activities.ClientApi.openAlertDialog(Activities.ClientApi.getResourceString("MA_Alert_EndDate_LessThan_StartDate"));
                    !isOnRefresh && DateUtilityFunctions.scheduledEndAttribute.setValue(new Date(DateUtilityFunctions.scheduledStartAttribute.getValue().getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute));
                }
                !isOnRefresh && DateUtilityFunctions.setDuration(DateUtilityFunctions.scheduledDurationMinutesAttribute, DateUtilityFunctions.isAllDayEvent());
            }
            catch (e) {
                telemetryItem.traceEventError("Error in endTimeChanged.", e.message);
            }
            finally {
                DateUtilityFunctions.suppressEvents(false);
                if (isOnRefresh && !DateUtilityFunctions.isFormOnRefresh) {
                    DateUtilityFunctions.isFormOnRefresh = true;
                    DateUtilityFunctions.handleAllDay(false);
                }
            }
            if (selfReport) {
                telemetryItem.report();
            }
        };
        DateUtilityFunctions.checkIfControlDisabled = function (attribName) {
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledStartCtrl) && DateUtilityFunctions.scheduledStartCtrl.getDisabled() ||
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledEndControl) && DateUtilityFunctions.scheduledEndControl.getDisabled() ||
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesControl) && DateUtilityFunctions.scheduledDurationMinutesControl.getDisabled()) {
                return;
            }
            if (DateUtilityFunctions.suppressDurationEvents) {
                return;
            }
            if ((!Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledStartAttribute) && Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledStartAttribute.getValue())) ||
                (!Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledEndAttribute) && Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledEndAttribute.getValue()))) {
                if (attribName === "DateUtilityFunctions.scheduledEndAttribute" && Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledEndAttribute)) {
                    DateUtilityFunctions.isEndTimeCleared = true;
                }
                return;
            }
            DateUtilityFunctions.suppressEvents(true);
        };
        DateUtilityFunctions.isAllDayEvent = function () {
            return Activities.Common.Util.IsNotNull(DateUtilityFunctions.isAllDayEventAttribute) &&
                DateUtilityFunctions.isAllDayEventAttribute.getValue();
        };
        DateUtilityFunctions.setAllDayEvent = function (bIsAllDay) {
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.isAllDayEventAttribute)) {
                DateUtilityFunctions.isAllDayEventAttribute.setValue(bIsAllDay);
            }
        };
        DateUtilityFunctions.durationChanged = function (context, telemetryItem) {
            var selfReport = !telemetryItem;
            telemetryItem = selfReport ? new TelemetryLogger.TelemetryItem(context.getFormContext().data.entity.getEntityName(), "durationChanged") : telemetryItem;
            //fixed "Duration" field issue which earlier used to throw script error when removed from form editor
            if (Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledDurationMinutesControl)) {
                return;
            }
            if (DateUtilityFunctions.scheduledStartCtrl.getDisabled() || DateUtilityFunctions.scheduledEndControl.getDisabled() && DateUtilityFunctions.scheduledDurationMinutesControl.getDisabled()) {
                return;
            }
            if (DateUtilityFunctions.suppressDurationEvents) {
                return;
            }
            DateUtilityFunctions.suppressEvents(true);
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute)) {
                var scheduledDurationMinutes = DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue();
                if (Activities.Common.Util.IsNotNull(scheduledDurationMinutes) && !Activities.Common.Util.IsNullOrEmptyString(scheduledDurationMinutes.toString())) {
                    DateUtilityFunctions.minutesInDuration = scheduledDurationMinutes;
                }
                else {
                    if (Activities.Common.Util.IsNull(DateUtilityFunctions.minutesInDuration)) {
                        DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.defaultDurationMinutes;
                    }
                    DateUtilityFunctions.scheduledDurationMinutesAttribute.setValue(DateUtilityFunctions.minutesInDuration);
                }
            }
            try {
                if (Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledStartAttribute.getValue())) {
                    if (Activities.Common.Util.IsNull(DateUtilityFunctions.scheduledEndAttribute.getValue())) {
                        DateUtilityFunctions.setStartEndToNow();
                    }
                    else {
                        DateUtilityFunctions.scheduledStartAttribute.setValue(new Date(DateUtilityFunctions.getScheduledEndValue().getTime() - DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute));
                    }
                }
                if (DateUtilityFunctions.minutesInDuration < DateUtilityFunctions.minutesPerDay && DateUtilityFunctions.isAllDayEvent()) {
                    DateUtilityFunctions.oldNonAllDayStartTime = new Date(DateUtilityFunctions.scheduledStartAttribute.getValue().toString());
                    var _scheduledstarttemp = DateUtilityFunctions.scheduledStartAttribute.getValue();
                    DateUtilityFunctions.oldNonAllDayEndTime = new Date(_scheduledstarttemp.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute);
                    DateUtilityFunctions.setAllDayEvent(false);
                    if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.isAllDayEventAttribute)) {
                        DateUtilityFunctions.setAllDay(null, telemetryItem);
                        DateUtilityFunctions.suppressEvents(true);
                    }
                }
                var endDateAcrossTimeZonesValue = DateUtilityFunctions.endDateAcrossTimeZones(telemetryItem);
                if (Activities.Common.Util.IsNotNull(endDateAcrossTimeZonesValue)) {
                    DateUtilityFunctions.scheduledEndAttribute.setValue(endDateAcrossTimeZonesValue);
                }
            }
            catch (e) {
                telemetryItem.traceEventError("Error in durationChanged.", e.message);
            }
            finally {
                DateUtilityFunctions.suppressEvents(false);
            }
            if (selfReport) {
                telemetryItem.report();
            }
        };
        DateUtilityFunctions.endDateAcrossTimeZones = function (telemetryItem) {
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute) &&
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue())) {
                DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue();
            }
            var oStartDate, _scheduledstarttemp;
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledStartAttribute) &&
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledStartAttribute.getValue())) {
                oStartDate = new Date(DateUtilityFunctions.scheduledStartAttribute.getValue().toString());
                _scheduledstarttemp = DateUtilityFunctions.scheduledStartAttribute.getValue();
            }
            else {
                telemetryItem.traceEventInformation("The Start Date of the Appointment being created is Empty.");
                return null;
            }
            var oEndDate = new Date(_scheduledstarttemp.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute), daysInDuration = Math.round(DateUtilityFunctions.minutesInDuration / DateUtilityFunctions.minutesPerDay);
            if (DateUtilityFunctions.isAllDayEvent()) {
                if (DateUtilityFunctions.dayDifference(oStartDate, oEndDate) < daysInDuration)
                    oEndDate = DateUtilityFunctions.incrementDay(oEndDate);
                var timeDiff = oEndDate.getTime() - oStartDate.getTime();
                if (timeDiff < DateUtilityFunctions.millisecondsPerDay)
                    oEndDate = new Date(oEndDate.getTime() + timeDiff);
            }
            return oEndDate;
        };
        DateUtilityFunctions.suppressEvents = function (suppress) {
            DateUtilityFunctions.suppressDurationEvents = suppress;
        };
        DateUtilityFunctions.setStartEndToNow = function () {
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute) &&
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue())) {
                DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue();
            }
            //Added function getDateTimeNow() for webclient to handle the time zone difference between local server time zone and user setting time zone.
            //function _compensateTimeZoneForInputBehavior() is used to handle time zone differences in UCI.
            var now = Xrm.Internal.isUci() ? new Date().getTime() : DateUtilityFunctions.getDateTimeNow().getTime(), startTime = now + (DateUtilityFunctions.millisecondsPerInterval - now % DateUtilityFunctions.millisecondsPerInterval);
            DateUtilityFunctions.scheduledStartAttribute.setValue(new Date(startTime));
            var _scheduledstarttemp = DateUtilityFunctions.scheduledStartAttribute.getValue();
            DateUtilityFunctions.scheduledEndAttribute.setValue(new Date(_scheduledstarttemp.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute));
        };
        DateUtilityFunctions.getDateTimeNow = function () {
            var now = new Date();
            now.setMinutes(now.getMinutes() + now.getTimezoneOffset() + Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes());
            return now;
        };
        DateUtilityFunctions.getScheduledEndValue = function () {
            if (!DateUtilityFunctions.bSupressEndMidnightWarning || DateUtilityFunctions.endCrossesMidnight()) {
                return DateUtilityFunctions.scheduledEndAttribute.getValue();
            }
            else {
                var oEndTime = DateUtilityFunctions.scheduledEndAttribute.getValue();
                if (!oEndTime.getHours() && !oEndTime.getMinutes()) {
                    oEndTime = DateUtilityFunctions.incrementDay(oEndTime);
                }
                return oEndTime;
            }
        };
        DateUtilityFunctions.endCrossesMidnight = function () {
            var oEndTime = DateUtilityFunctions.scheduledEndAttribute.getValue(), oStartTime = DateUtilityFunctions.scheduledStartAttribute.getValue();
            if (oEndTime.getTime() > oStartTime.getTime()) {
                return true;
            }
            return false;
        };
        DateUtilityFunctions.incrementDay = function (oDay) {
            var oNewDay = new Date(oDay);
            oNewDay.setDate(oNewDay.getDate() + 1);
            if (DateUtilityFunctions.dayDifference(oDay, oNewDay) < 1) {
                oNewDay.setDate(oNewDay.getDate() + 1);
                oNewDay.setHours(1);
            }
            return oNewDay;
        };
        DateUtilityFunctions.getEndDateForIsAllDayEvent = function (milleseconds, dateTime) {
            var oNewDay = new Date(dateTime.getTime() + milleseconds);
            /*Date.getTimezoneOffset(): If your machine time is GMT + X minutes => -X minutes
             * Eg: IST is GMT+ 5:30 => -330
             */
            /*getTimeZoneOffsetMinutes(): If your CRM time is set to GMT + X minutes => +X minutes
             * Eg: IST is GMT + 5:30 => +330
            */
            var localTimeZoneOffsetMilliSeconds = (Xrm.Utility.getGlobalContext().userSettings.getTimeZoneOffsetMinutes() + dateTime.getTimezoneOffset()) * DateUtilityFunctions.millisecondsPerMinute;
            var localEndDateTime = new Date(oNewDay.getTime() + localTimeZoneOffsetMilliSeconds);
            var localEndTime = new Date(localEndDateTime.toDateString()); //creating the date with time stripped off. It will set it to 00:00:00
            if (localEndDateTime.toUTCString() != localEndTime.toUTCString()) {
                //End time is not 00:00:00. This day needs to be counted in appointment as well.
                oNewDay.setDate(oNewDay.getDate() + 1);
            }
            return oNewDay;
        };
        DateUtilityFunctions.decrementDay = function (oDay) {
            var oNewDay = new Date(oDay.getFullYear(), oDay.getMonth(), oDay.getDate() - 1);
            if (DateUtilityFunctions.dayDifference(oNewDay, oDay) >= 2) {
                oNewDay = DateUtilityFunctions.incrementDay(oNewDay);
            }
            return oNewDay;
        };
        DateUtilityFunctions.getDayDifference = function (fromDate, toDate) {
            var td = new Date(toDate.toString()), fd = new Date(fromDate.toString());
            var diffTime = td.getTime() - fd.getTime();
            return diffTime / 8.64e7;
        };
        DateUtilityFunctions.dayDifference = function (fromDate, toDate) {
            var td = new Date(toDate.toString()), fd = new Date(fromDate.toString());
            td.setHours(15);
            fd.setHours(12);
            var diffTime = td.getTime() - fd.getTime();
            return diffTime / 8.64e7;
        };
        DateUtilityFunctions.setAllDay = function (context, telemetryItem) {
            var selfReport = !telemetryItem;
            telemetryItem = selfReport ? new TelemetryLogger.TelemetryItem(context.getFormContext().data.entity.getEntityName(), "setAllDay") : telemetryItem;
            DateUtilityFunctions.suppressEvents(true);
            if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute) &&
                Activities.Common.Util.IsNotNull(DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue())) {
                DateUtilityFunctions.minutesInDuration = DateUtilityFunctions.scheduledDurationMinutesAttribute.getValue();
            }
            try {
                if (DateUtilityFunctions.isAllDayEvent()) {
                    DateUtilityFunctions.scheduledStartCtrl.setShowTime(false);
                    DateUtilityFunctions.scheduledEndControl.setShowTime(false);
                    var oldEndDateTime = DateUtilityFunctions.scheduledEndAttribute.getValue();
                    DateUtilityFunctions.isAllDay = true;
                    DateUtilityFunctions.oldNonAllDayStartTime = DateUtilityFunctions.scheduledStartAttribute.getValue();
                    DateUtilityFunctions.oldNonAllDayEndTime = oldEndDateTime;
                    if (Activities.Common.Util.IsNull(DateUtilityFunctions.oldNonAllDayStartTime) && Activities.Common.Util.IsNull(DateUtilityFunctions.oldNonAllDayEndTime)) {
                        DateUtilityFunctions.oldNonAllDayStartTime = Xrm.Internal.isUci() ? new Date() : DateUtilityFunctions.getDateTimeNow();
                        DateUtilityFunctions.oldNonAllDayEndTime = new Date(DateUtilityFunctions.oldNonAllDayStartTime.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute);
                    }
                    if (Activities.Common.Util.IsNull(DateUtilityFunctions.oldNonAllDayStartTime)) {
                        DateUtilityFunctions.oldNonAllDayStartTime = new Date(DateUtilityFunctions.oldNonAllDayEndTime.getTime() - DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute);
                    }
                    if (Activities.Common.Util.IsNull(DateUtilityFunctions.oldNonAllDayEndTime)) {
                        DateUtilityFunctions.oldNonAllDayEndTime = new Date(DateUtilityFunctions.oldNonAllDayStartTime.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute);
                    }
                    var startTime = new Date(DateUtilityFunctions.oldNonAllDayStartTime.getTime());
                    var newDuration = DateUtilityFunctions.calculateDuration(DateUtilityFunctions.isAllDayEvent(), true);
                    var endTime = DateUtilityFunctions.getEndDateForIsAllDayEvent(newDuration, startTime);
                    //This logic is for setting the hours & minutes to zero in webclient, where as in UCI, if we add below logc it is considering current timezone and start & end times are changing.
                    if (!Xrm.Internal.isUci()) {
                        startTime.setHours(0, 0, 0, 0);
                        endTime.setHours(0, 0, 0, 0);
                    }
                    DateUtilityFunctions.scheduledStartAttribute.setValue(startTime);
                    DateUtilityFunctions.scheduledEndAttribute.setValue(endTime);
                }
                else {
                    if (Activities.Common.Util.IsNotNull(DateUtilityFunctions.cType) && Activities.Common.Util.IsNotNull(DateUtilityFunctions.holidaySchedule) && DateUtilityFunctions.cType === DateUtilityFunctions.holidaySchedule) {
                        DateUtilityFunctions.scheduledStartCtrl.setShowTime(false);
                        DateUtilityFunctions.scheduledEndControl.setShowTime(false);
                    }
                    else {
                        DateUtilityFunctions.scheduledStartCtrl.setShowTime(true);
                        DateUtilityFunctions.scheduledEndControl.setShowTime(true);
                    }
                    var oStartTime = null, oEndTime = null;
                    if (DateUtilityFunctions.isAllDay) {
                        DateUtilityFunctions.isAllDay = false;
                        oStartTime = new Date(DateUtilityFunctions.oldNonAllDayStartTime);
                        DateUtilityFunctions.oldNonAllDayStartTime = DateUtilityFunctions.scheduledStartAttribute.getValue();
                        DateUtilityFunctions.scheduledStartAttribute.setValue(oStartTime);
                        oEndTime = new Date(DateUtilityFunctions.oldNonAllDayEndTime);
                        DateUtilityFunctions.oldNonAllDayEndTime = DateUtilityFunctions.scheduledEndAttribute.getValue();
                        DateUtilityFunctions.scheduledEndAttribute.setValue(oEndTime);
                    }
                    if (oEndTime < oStartTime) {
                        var _scheduledstarttemp = DateUtilityFunctions.scheduledStartAttribute.getValue();
                        DateUtilityFunctions.scheduledEndAttribute.setValue(new Date(_scheduledstarttemp.getTime() + DateUtilityFunctions.minutesInDuration * DateUtilityFunctions.millisecondsPerMinute));
                    }
                }
                DateUtilityFunctions.setDuration(DateUtilityFunctions.scheduledDurationMinutesAttribute, DateUtilityFunctions.isAllDayEvent());
            }
            catch (e) {
                telemetryItem.traceEventError("Error in setAllDay.", e.message);
            }
            finally {
                DateUtilityFunctions.suppressEvents(false);
            }
            if (selfReport) {
                telemetryItem.report();
            }
        };
        DateUtilityFunctions.calculateDuration = function (isAllDay, returnInMilleseconds) {
            if (returnInMilleseconds === void 0) { returnInMilleseconds = false; }
            var _workdayStart = new Date, _workdayEnd = new Date, timeStart = DateUtilityFunctions.scheduledStartAttribute.getValue(), timeEnd = DateUtilityFunctions.getScheduledEndValue();
            _workdayStart.setHours(0, 0, 0, 0);
            _workdayEnd.setHours(24, 0, 0, 0);
            var tempDuration;
            if (isAllDay) {
                var minutesPerWorkday = void 0;
                if (_workdayStart < _workdayEnd) {
                    minutesPerWorkday = (_workdayEnd.getTime() - _workdayStart.getTime()) / DateUtilityFunctions.millisecondsPerMinute;
                    minutesPerWorkday = Math.floor(minutesPerWorkday);
                }
                else {
                    var dayStart = new Date(_workdayStart.getFullYear(), _workdayStart.getMonth(), _workdayStart.getDate(), 0, 0, 0, 0), dayEnd = new Date(dayStart.toString());
                    dayEnd.setDate(dayEnd.getDate() + 1);
                    minutesPerWorkday = (_workdayEnd.getTime() - dayStart.getTime() + (dayEnd.getTime() - _workdayStart.getTime())) / 60 / 1e3;
                    minutesPerWorkday = Math.floor(minutesPerWorkday);
                }
                tempDuration = (timeEnd.getTime() - timeStart.getTime());
                if (!returnInMilleseconds) {
                    tempDuration = Math.round(tempDuration / DateUtilityFunctions.millisecondsPerDay * minutesPerWorkday - (timeEnd.getTimezoneOffset() - timeStart.getTimezoneOffset()));
                }
            }
            else {
                tempDuration = timeEnd.getTime() - timeStart.getTime();
                if (!returnInMilleseconds) {
                    tempDuration = Math.round(tempDuration / 60 / 1e3 - (timeEnd.getTimezoneOffset() - timeStart.getTimezoneOffset()));
                }
            }
            if (Activities.Common.Util.IsNull(timeEnd) || Activities.Common.Util.IsNull(timeStart)) {
                tempDuration = 0;
            }
            return tempDuration;
        };
        DateUtilityFunctions.setDuration = function (durationAttribute, isAllDay) {
            var tempDuration = this.calculateDuration(isAllDay);
            if (Activities.Common.Util.IsNotNull(durationAttribute)) {
                durationAttribute.setValue(tempDuration);
            }
            else {
                DateUtilityFunctions.minutesInDuration = tempDuration;
            }
        };
        return DateUtilityFunctions;
    }());
    DateUtilityFunctions.minutesInDuration = null;
    DateUtilityFunctions.scheduledEndAttribute = null;
    DateUtilityFunctions.scheduledEndControl = null;
    DateUtilityFunctions.scheduledStartAttribute = null;
    DateUtilityFunctions.isFormOnRefresh = false;
    DateUtilityFunctions.startAttrDontInclude = null;
    DateUtilityFunctions.endAttrDontInclude = null;
    DateUtilityFunctions.scheduledStartCtrl = null;
    DateUtilityFunctions.scheduledDurationMinutesAttribute = null;
    DateUtilityFunctions.scheduledDurationMinutesControl = null;
    DateUtilityFunctions.isAllDayEventAttribute = null;
    DateUtilityFunctions.isAllDayEventControl = null;
    DateUtilityFunctions.suppressDurationEvents = false;
    DateUtilityFunctions.bSupressEndMidnightWarning = false;
    DateUtilityFunctions.millisecondsPerInterval = 1.8e6;
    DateUtilityFunctions.millisecondsPerMinute = 6e4;
    DateUtilityFunctions.minutesPerDay = 1440;
    DateUtilityFunctions.millisecondsPerDay = 8.64e7;
    DateUtilityFunctions.oldNonAllDayStartTime = null;
    DateUtilityFunctions.oldNonAllDayEndTime = null;
    DateUtilityFunctions.holidaySchedule = null;
    DateUtilityFunctions.cType = null;
    DateUtilityFunctions.isEndTimeCleared = false;
    DateUtilityFunctions.defaultDurationMinutes = 30;
    DateUtilityFunctions.isAllDay = false;
    DateUtilityFunctions.IsAllDayEventInUTCMidnightFCBOn = Activities.Common.Util.isAllDayEventMidnightFCBEnabled(Xrm.Internal.isUci());
    Activities.DateUtilityFunctions = DateUtilityFunctions;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    /// <summary>
    /// Defines command bar action for DeleteAppointmentRecord.
    /// </summary>
    var DeleteAppointmentRecord = (function () {
        function DeleteAppointmentRecord() {
        }
        /// <summary>
        /// Deletes the current record.
        /// </summary>
        DeleteAppointmentRecord.DeleteRecord = function (entityId, entityName, formContext) {
            var deleteDialogOptions = {
                height: 325,
                width: 500,
                position: Activities.ClientApi.getWindowCenter()
            };
            // delete recurring appointment master
            if (entityName === Activities.Constants.EntityNames.RecurringAppointmentMaster) {
                var dialogArguments = {
                    "input_entityid": entityId,
                };
                Activities.ClientApi.openDialog(Activities.SeriesActionDialogConstants.SeriesDeleteDialogName, deleteDialogOptions, dialogArguments)
                    .then(function (dialogResponse) {
                    DeleteAppointmentRecord.SeriesActionDialogCloseCallback(formContext, dialogResponse);
                }, Activities.ClientApi.openDialogFailedCallback);
                return;
            }
            // delete recurring instances and exceptions
            var instanceTypeCode = Activities.ClientApi.getFormDataForRibbon(formContext).entity.attributes.get(Activities.SeriesActionDialogConstants.InstanceTypeCodeAttribute);
            if (instanceTypeCode != null && instanceTypeCode.getValue() != null && instanceTypeCode.getValue() != 0 && instanceTypeCode.getValue() != 1) {
                var seriesId = Activities.ClientApi.getFormDataForRibbon(formContext).entity.attributes.get(Activities.SeriesActionDialogConstants.SeriesId).getValue();
                var dialogArguments = {
                    "input_entityid": entityId,
                    "input_seriesid": seriesId
                };
                Activities.ClientApi.openDialog(Activities.SeriesActionDialogConstants.SeriesActionDialogName, deleteDialogOptions, dialogArguments).then(function (dialogResponse) {
                    DeleteAppointmentRecord.SeriesActionDialogCloseCallback(formContext, dialogResponse);
                }, Activities.ClientApi.openDialogFailedCallback);
            }
            else {
                XrmCore.Commands.Delete.deletePrimaryRecord(entityId, entityName);
            }
        };
        /// <summary>
        /// Series Action Dialog Delete Appointment OnLoad 
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogDeleteAppointmentOnLoad = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventSeriesActionDialogOnLoad);
            // Set delete description
            var labelControl = eventContext.getFormContext().ui.controls.get(Activities.SeriesActionDialogConstants.DeleteDescriptionIdAttribute);
            if (!Activities.Common.Util.IsNull(labelControl)) {
                var entityAttibute = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.EntityIdAttribute);
                if (!Activities.Common.Util.IsNull(entityAttibute)) {
                    var id = entityAttibute.getValue();
                    var optionsString = "?$select=seriesid,subject";
                    Activities.ClientApi.retrieveRecord(Activities.Constants.EntityNames.Appointment, id, optionsString).then(function (entity) {
                        if (Activities.Common.Util.IsNull(entity)) {
                            telemetryItem.traceEventError("Entity cannot be null.");
                            telemetryItem.report();
                            return;
                        }
                        var subject = "";
                        var seriesid = "";
                        if (!Activities.Common.Util.IsNullOrEmptyString(entity[Activities.SeriesActionDialogConstants.SubjectAttribute])) {
                            subject = entity[Activities.SeriesActionDialogConstants.SubjectAttribute];
                            labelControl.setLabel(Activities.ClientApi.getResourceString(Activities.SeriesActionDialogConstants.SeriesActionDialogLabel).replace("{0}", subject));
                        }
                        if (!Activities.Common.Util.IsNullOrEmptyString(entity[Activities.SeriesActionDialogConstants.SeriesId])) {
                            seriesid = entity["seriesid"];
                            var seriesAttibute = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.SeriesIdAttribute);
                            seriesAttibute.setValue(seriesid);
                        }
                        telemetryItem.report();
                    }, function (error) {
                        Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
                    });
                }
            }
        };
        ;
        /// <summary>
        /// Dialog Close callback for form.
        /// </summary>
        /// <param name="dialogParams">Dialog Parameters</param>
        /// <param name="callbackParams">Callback Parameters</param>
        DeleteAppointmentRecord.SeriesActionDialogCloseCallback = function (formContext, dialogResponse) {
            if (Activities.Common.Util.IsNotNull(dialogResponse) &&
                dialogResponse.parameters[Activities.SeriesActionDialogConstants.LastButtonClickedAttribute] == Activities.SeriesActionDialogConstants.OkButton) {
                Activities.ClientApi.getFormUIForRibbon(formContext).close();
            }
        };
        ;
        /// <summary>
        /// Dialog cancel button click
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogCancelClick = function (eventContext) {
            var formContext = eventContext.getFormContext();
            var lastButtonClickedAttribute = formContext.data.attributes.get(Activities.SeriesActionDialogConstants.LastButtonClickedAttribute);
            lastButtonClickedAttribute.setValue(Activities.SeriesActionDialogConstants.CancelButton);
            formContext.ui.close();
        };
        /// <summary>
        /// Appointment Delete Dialog ok button click
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogOkClick = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Appointment, Activities.Constants.TelemetryConstant.EventAppointmentDeletion);
            var formContext = eventContext.getFormContext();
            //Do not call this if moca is offline.
            if (Activities.ClientApi.IsMocaOffline()) {
                Activities.Common.Util.ShowMoCAOfflineError();
                return;
            }
            var lastButtonClickedAttribute = formContext.data.attributes.get(Activities.SeriesActionDialogConstants.LastButtonClickedAttribute);
            var processMessage = Activities.ClientApi.getResourceString(Activities.SeriesActionDialogConstants.ProgressMessageKey);
            var entityAttibute = formContext.data.attributes.get(Activities.SeriesActionDialogConstants.EntityIdAttribute);
            var deleteOccurrence = formContext.data.attributes.get(Activities.SeriesActionDialogConstants.DeleteOccurrenceIdAttribute);
            lastButtonClickedAttribute.setValue(Activities.SeriesActionDialogConstants.OkButton);
            // Delete Occurrence Appointment
            if (deleteOccurrence.getValue()) {
                // Show progress message
                Xrm.Utility.showProgressIndicator(processMessage);
                var entityId = entityAttibute.getValue();
                DeleteAppointmentRecord.deleteRecord(formContext, Activities.Constants.EntityNames.Appointment, entityId, Activities.Constants.TelemetryConstant.EventAppointmentDeletion, telemetryItem);
            }
            else {
                var seriesAttibute = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.SeriesIdAttribute);
                if (seriesAttibute != null) {
                    if (Activities.Common.Util.IsNullOrEmptyString(seriesAttibute.getValue())) {
                        telemetryItem.traceEventError("seriesId cannot be null.");
                        telemetryItem.report();
                        return;
                    }
                    else {
                        Xrm.Utility.showProgressIndicator(processMessage);
                        var seriesid = seriesAttibute.getValue();
                        var seriesName = Activities.Constants.EntityNames.RecurringAppointmentMaster;
                        var deleteSeriesKeepCompleted = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteSeriesKeepCompletedAttribute);
                        var deleteSeriesAllInstances = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteSeriesAllInstancesAttribute);
                        // Delete the series,keeping the past
                        if (deleteSeriesKeepCompleted.getValue()) {
                            DeleteAppointmentRecord.deleteSeriesKeepPast(formContext, seriesName, seriesid, Activities.Constants.TelemetryConstant.EventAppointmentDeletion, telemetryItem);
                        }
                        else if (deleteSeriesAllInstances.getValue()) {
                            DeleteAppointmentRecord.deleteRecord(formContext, seriesName, seriesid, Activities.Constants.TelemetryConstant.EventAppointmentDeletion, telemetryItem);
                        }
                    }
                }
            }
        };
        /// <summary>
        /// Recurring Appointment Delete Dialog ok button click
        /// </summary>
        DeleteAppointmentRecord.RecurringActionDialogOkClick = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.RecurringAppointmentMaster, Activities.Constants.TelemetryConstant.EventAppointmentDeletion);
            var formContext = eventContext.getFormContext();
            //Do not call this if moca is offline.
            if (Activities.ClientApi.IsMocaOffline()) {
                Activities.Common.Util.ShowMoCAOfflineError();
                return;
            }
            var lastButtonClickedAttribute = formContext.data.attributes.get(Activities.SeriesActionDialogConstants.LastButtonClickedAttribute);
            var processMessage = Activities.ClientApi.getResourceString(Activities.SeriesActionDialogConstants.ProgressMessageKey);
            lastButtonClickedAttribute.setValue(Activities.SeriesActionDialogConstants.OkButton);
            var seriesAttibute = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.EntityIdAttribute);
            if (seriesAttibute != null) {
                if (Activities.Common.Util.IsNullOrEmptyString(seriesAttibute.getValue())) {
                    telemetryItem.traceEventError("entityId cannot be null.");
                    telemetryItem.report();
                    return;
                }
                else {
                    Xrm.Utility.showProgressIndicator(processMessage);
                    var entityId = seriesAttibute.getValue();
                    var seriesName = Activities.Constants.EntityNames.RecurringAppointmentMaster;
                    var deleteRecurrence = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteRecurringAppointment);
                    // Delete all instances 
                    if (deleteRecurrence.getValue() == 1) {
                        DeleteAppointmentRecord.deleteRecord(formContext, seriesName, entityId, Activities.Constants.TelemetryConstant.EventRecurringAppointmentDelete, telemetryItem);
                    }
                    else if (deleteRecurrence.getValue() == 2) {
                        DeleteAppointmentRecord.deleteSeriesKeepPast(formContext, seriesName, entityId, Activities.Constants.TelemetryConstant.EventRecurringAppointmentDelete, telemetryItem);
                    }
                }
            }
        };
        DeleteAppointmentRecord.deleteRecord = function (formContext, entityName, entityId, eventName, telemetryItem) {
            Xrm.WebApi.deleteRecord(entityName, entityId)
                .then(function (response) {
                Xrm.Utility.closeProgressIndicator();
                telemetryItem.traceEventInformation("Record deleted successfully.");
                telemetryItem.report();
                formContext.ui.close();
            }, function (error) {
                DeleteAppointmentRecord.DialogActionsErrorCallback(error, telemetryItem);
            });
        };
        DeleteAppointmentRecord.deleteSeriesKeepPast = function (formContext, entityName, id, eventName, telemetryItem) {
            var optionsString = "?$select=activityid";
            Xrm.WebApi.online.retrieveRecord(entityName, id, optionsString)
                .then(function (entity) {
                if (Activities.Common.Util.IsNull(entity)) {
                    telemetryItem.traceEventError("Entity cannot be null.");
                    telemetryItem.report();
                    return;
                }
                // Set default values for end series.
                var endSeriesDate = new Date().toISOString();
                var stateOfPastInstances = 0;
                var deleteOpenInstancesRequest = new Utilities.CustomMessages.DeleteOpenInstancesRequest(entity["activityid"], endSeriesDate, stateOfPastInstances);
                Xrm.WebApi.online.execute(deleteOpenInstancesRequest)
                    .then(function (response) {
                    telemetryItem.traceEventInformation("Instance deleted successfully.");
                    telemetryItem.report();
                    Xrm.Utility.closeProgressIndicator();
                    formContext.ui.close();
                }, function (error) {
                    DeleteAppointmentRecord.DialogActionsErrorCallback(error, telemetryItem);
                });
            }, function (error) {
                DeleteAppointmentRecord.DialogActionsErrorCallback(error, telemetryItem);
            });
        };
        DeleteAppointmentRecord.isSeriesActive = function (entityId, formContext) {
            if (!Activities.Common.Util.IsNullOrEmptyString(entityId)) {
                return true;
            }
            var attribute = formContext.getAttribute("seriesstatus");
            return attribute != null && ((attribute.getValue() == null || (attribute.getValue()) == true));
        };
        DeleteAppointmentRecord.DialogActionsErrorCallback = function (errorResponse, telemetryItem) {
            Xrm.Utility.closeProgressIndicator();
            Activities.ClientApi.dialogActionFailedCallback(errorResponse, telemetryItem);
        };
        /// <summary>
        /// SeriesActionDialog DeleteOccurrence option change
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogFirstOptionChange = function (eventContext) {
            DeleteAppointmentRecord.SeriesActionDialogOptionChange(Activities.SeriesActionDialogConstants.DeleteOccurrenceIdAttribute, eventContext);
        };
        ;
        /// <summary>
        /// SeriesActionDialog DeleteSeriesKeepCompleted option change
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogSecondOptionChange = function (eventContext) {
            DeleteAppointmentRecord.SeriesActionDialogOptionChange(Activities.SeriesActionDialogConstants.DeleteSeriesKeepCompletedAttribute, eventContext);
        };
        ;
        /// <summary>
        /// SeriesActionDialog DeleteSeriesAllInstances option change
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogThirdOptionChange = function (eventContext) {
            DeleteAppointmentRecord.SeriesActionDialogOptionChange(Activities.SeriesActionDialogConstants.DeleteSeriesAllInstancesAttribute, eventContext);
        };
        ;
        /// <summary>
        /// SeriesActionDialog Option change
        /// </summary>
        DeleteAppointmentRecord.SeriesActionDialogOptionChange = function (selectedOption, eventContext) {
            var deleteOccurrence = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteOccurrenceIdAttribute);
            var deleteSeriesKeepCompleted = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteSeriesKeepCompletedAttribute);
            var deleteSeriesAllInstances = eventContext.getFormContext().data.attributes.get(Activities.SeriesActionDialogConstants.DeleteSeriesAllInstancesAttribute);
            switch (selectedOption) {
                case Activities.SeriesActionDialogConstants.DeleteOccurrenceIdAttribute:
                    deleteSeriesKeepCompleted.setValue(false);
                    deleteSeriesAllInstances.setValue(false);
                    deleteOccurrence.setValue(true);
                    break;
                case Activities.SeriesActionDialogConstants.DeleteSeriesKeepCompletedAttribute:
                    deleteOccurrence.setValue(false);
                    deleteSeriesAllInstances.setValue(false);
                    deleteSeriesKeepCompleted.setValue(true);
                    break;
                case Activities.SeriesActionDialogConstants.DeleteSeriesAllInstancesAttribute:
                    deleteOccurrence.setValue(false);
                    deleteSeriesKeepCompleted.setValue(false);
                    deleteSeriesAllInstances.setValue(true);
                    break;
            }
        };
        ;
        return DeleteAppointmentRecord;
    }());
    Activities.DeleteAppointmentRecord = DeleteAppointmentRecord;
})(Activities || (Activities = {}));
var Activities;
(function (Activities) {
    var SeriesActionDialogConstants;
    (function (SeriesActionDialogConstants) {
        SeriesActionDialogConstants.CancelButton = "cancel_id";
        SeriesActionDialogConstants.DeleteDescriptionIdAttribute = "deletedescription_id";
        SeriesActionDialogConstants.DeleteOccurrenceIdAttribute = "deleteoccurrence_id";
        SeriesActionDialogConstants.DeleteSeriesAllInstancesAttribute = "deleteseriesallinstances_id";
        SeriesActionDialogConstants.DeleteSeriesKeepCompletedAttribute = "deleteserieskeepcompleted_id";
        SeriesActionDialogConstants.DeleteRecurringAppointment = "deleterecurrence_id";
        SeriesActionDialogConstants.EntityIdAttribute = "input_entityid";
        SeriesActionDialogConstants.InstanceTypeCodeAttribute = "instancetypecode";
        SeriesActionDialogConstants.LastButtonClickedAttribute = "input_lastButtonClicked";
        SeriesActionDialogConstants.NoRecordsSelected = "Error_Message_Action_NoItemSelected";
        SeriesActionDialogConstants.OkButton = "ok_id";
        SeriesActionDialogConstants.ProgressMessageKey = "Msg_Progress_MOCA_Dialog";
        SeriesActionDialogConstants.SeriesActionDialogName = "SeriesActionDialog";
        SeriesActionDialogConstants.SeriesActionDialogLabel = "activities/act_dlgs/dlg_seriesaction.aspx_textDeleteInstance";
        SeriesActionDialogConstants.SeriesDeleteDialogName = "DeleteRecurringAppointment";
        SeriesActionDialogConstants.SeriesIdAttribute = "input_seriesid";
        SeriesActionDialogConstants.SeriesId = "seriesid";
        SeriesActionDialogConstants.SubjectAttribute = "subject";
    })(SeriesActionDialogConstants = Activities.SeriesActionDialogConstants || (Activities.SeriesActionDialogConstants = {}));
    /// <summary>
    /// Defines command bar action for Deactivate in the grid.
    /// </summary>
    var GridDeleteRecords = (function () {
        function GridDeleteRecords() {
        }
        /// <summary>
        /// Open a dialog to delete the records that are passed in.
        /// </summary>
        /// <param name="gridControl">Grid control.</param>
        /// <param name="records">Reference to the records for this action.</param>
        /// <param name="entityTypeCode">Entity type code of the grid.</param>
        /// <param name="entityName">The entity name</param>
        GridDeleteRecords.DeleteRecords = function (gridControl, records, entityName) {
            if (Xrm.Internal.isUci()) {
                var promise = Xrm.Utility.getEntitiesMetadata(Activities.Common.Util.GetEntityNames(records));
                if (records.length > 0) {
                    promise.then(function (values) {
                        if (!Activities.Common.Util.CheckIfIsReadOnlyInMobileClient(values)) {
                            GridDeleteRecords.DeleteRecordsInternal(gridControl, records, entityName);
                        }
                    });
                }
                else {
                    GridDeleteRecords.DeleteRecordsInternal(gridControl, records, entityName);
                }
            }
            else {
                GridDeleteRecords.DeleteRecordsInternal(gridControl, records, entityName);
            }
        };
        GridDeleteRecords.DeleteRecordsInternal = function (gridControl, records, entityName) {
            if (records.length <= 0) {
                Activities.ClientApi.openAlertDialog(Activities.ClientApi.getResourceString(SeriesActionDialogConstants.NoRecordsSelected));
                return;
            }
            var eventName = entityName === Activities.Constants.EntityNames.Appointment ? Activities.Constants.TelemetryConstant.EventGridAppointmentDeletion : Activities.Constants.TelemetryConstant.EventGridRecurringAppointmentDelete;
            var telemetryItem = new TelemetryLogger.TelemetryItem(entityName, eventName);
            switch (entityName) {
                case Activities.Constants.EntityNames.Appointment:
                case Activities.Constants.EntityNames.ActivityPointer:
                case Activities.Constants.EntityNames.RecurringAppointmentMaster:
                    if (records.length == 1 && (records[0].TypeName == Activities.Constants.EntityNames.Appointment || records[0].TypeName == Activities.Constants.EntityNames.RecurringAppointmentMaster)) {
                        var optionsString = "?$select=instancetypecode,seriesid";
                        Activities.ClientApi.retrieveRecord(records[0].TypeName, records[0]["Id"], optionsString).then(function (entity) {
                            if (Activities.Common.Util.IsNull(entity)) {
                                telemetryItem.traceEventError("Entity cannot be null.");
                                telemetryItem.report();
                                return;
                            }
                            var instanceTypeCode = entity[SeriesActionDialogConstants.InstanceTypeCodeAttribute];
                            var seriesId = entity[SeriesActionDialogConstants.SeriesId];
                            if (!Activities.Common.Util.IsNullOrUndefined(instanceTypeCode) && instanceTypeCode != "0") {
                                GridDeleteRecords.DisplaySeriesActionDialog(gridControl, records[0], seriesId);
                            }
                            else {
                                XrmCore.Commands.Delete.deleteRecords(gridControl, records, entityName);
                            }
                            telemetryItem.report();
                        }, function (error) {
                            Activities.ClientApi.dialogActionFailedCallback(error, telemetryItem);
                        });
                    }
                    else {
                        XrmCore.Commands.Delete.deleteRecords(gridControl, records, entityName);
                    }
                    break;
                default:
                    XrmCore.Commands.Delete.deleteRecords(gridControl, records, entityName);
                    break;
            }
        };
        /// <summary>
        /// Display SeriesAction Dialog
        /// </summary>
        /// <param name="gridControl">gridControl</param>
        /// <param name="recordId">recordId</param>
        GridDeleteRecords.DisplaySeriesActionDialog = function (gridControl, record, seriesId) {
            var deleteDialogOptions = {
                height: 325,
                width: 500,
                position: Activities.ClientApi.getWindowCenter()
            };
            if (record.TypeName == Activities.Constants.EntityNames.Appointment) {
                var dialogArguments = {
                    "input_entityid": record.Id,
                    "input_seriesid": seriesId
                };
                Activities.ClientApi.openDialog(SeriesActionDialogConstants.SeriesActionDialogName, deleteDialogOptions, dialogArguments).then(function () {
                    gridControl.refresh();
                }, Activities.ClientApi.openDialogFailedCallback);
            }
            else {
                var dialogArguments = {
                    "input_entityid": record.Id,
                };
                Activities.ClientApi.openDialog(SeriesActionDialogConstants.SeriesDeleteDialogName, deleteDialogOptions, dialogArguments).then(function () {
                    gridControl.refresh();
                }, Activities.ClientApi.openDialogFailedCallback);
            }
        };
        return GridDeleteRecords;
    }());
    Activities.GridDeleteRecords = GridDeleteRecords;
})(Activities || (Activities = {}));
/**
 * @license Copyright (c) Microsoft Corporation. All rights reserved.
 */
var Utilities;
(function (Utilities) {
    var CustomMessages;
    (function (CustomMessages) {
        var DeleteOpenInstancesRequest = (function () {
            function DeleteOpenInstancesRequest(target /*Microsoft.Dynamics.CRM.recurringappointmentmaster*/, seriesEndDate /*Edm.DateTimeOffset*/, stateOfPastInstances) {
                this.Target = { "@odata.type": "Microsoft.Dynamics.CRM.recurringappointmentmaster", "activityid": target };
                this.SeriesEndDate = "\"" + seriesEndDate + "\"";
                this.StateOfPastInstances = stateOfPastInstances;
            }
            DeleteOpenInstancesRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: null,
                    parameterTypes: {
                        "Target": {
                            "typeName": "Microsoft.Dynamics.CRM.recurringappointmentmaster",
                            "structuralProperty": 5,
                        },
                        "SeriesEndDate": {
                            "typeName": "Edm.DateTimeOffset",
                            "structuralProperty": 1,
                        },
                        "StateOfPastInstances": {
                            "typeName": "Edm.Int32",
                            "structuralProperty": 1,
                        },
                    },
                    operationName: "DeleteOpenInstances",
                    operationType: 0,
                };
                return metadata;
            };
            return DeleteOpenInstancesRequest;
        }());
        CustomMessages.DeleteOpenInstancesRequest = DeleteOpenInstancesRequest;
        var AddRecurrenceRequest = (function () {
            function AddRecurrenceRequest(entity /*Microsoft.Dynamics.CRM.appointment*/, target /*Microsoft.Dynamics.CRM.recurringappointmentmaster*/) {
                this.entity = entity;
                this.Target = target;
            }
            AddRecurrenceRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: "entity",
                    parameterTypes: {
                        "entity": {
                            "typeName": "Microsoft.Dynamics.CRM.appointment",
                            "structuralProperty": 5,
                        },
                        "Target": {
                            "typeName": "Microsoft.Dynamics.CRM.recurringappointmentmaster",
                            "structuralProperty": 5,
                        },
                    },
                    operationName: "AddRecurrence",
                    operationType: 0,
                };
                return metadata;
            };
            return AddRecurrenceRequest;
        }());
        CustomMessages.AddRecurrenceRequest = AddRecurrenceRequest;
        var BookRequest = (function () {
            function BookRequest(target /*Microsoft.Dynamics.CRM.crmbaseentity*/, returnNotifications) {
                this.Target = target;
                this.ReturnNotifications = returnNotifications;
            }
            BookRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: null,
                    parameterTypes: {
                        "Target": {
                            "typeName": "Microsoft.Dynamics.CRM.crmbaseentity",
                            "structuralProperty": 5,
                        },
                        "ReturnNotifications": {
                            "typeName": "Edm.Boolean",
                            "structuralProperty": 1,
                        },
                    },
                    operationName: "Book",
                    operationType: 0,
                };
                return metadata;
            };
            return BookRequest;
        }());
        CustomMessages.BookRequest = BookRequest;
        var RescheduleRequest = (function () {
            function RescheduleRequest(target /*Microsoft.Dynamics.CRM.crmbaseentity*/, returnNotifications) {
                this.Target = target;
                this.ReturnNotifications = returnNotifications;
            }
            RescheduleRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: null,
                    parameterTypes: {
                        "Target": {
                            "typeName": "Microsoft.Dynamics.CRM.crmbaseentity",
                            "structuralProperty": 5,
                        },
                        "ReturnNotifications": {
                            "typeName": "Edm.Boolean",
                            "structuralProperty": 1,
                        },
                    },
                    operationName: "Reschedule",
                    operationType: 0,
                };
                return metadata;
            };
            return RescheduleRequest;
        }());
        CustomMessages.RescheduleRequest = RescheduleRequest;
        var ValidateRequest = (function () {
            function ValidateRequest(activities) {
                this.Activities = activities;
            }
            ValidateRequest.prototype.getMetadata = function () {
                var metadata = {
                    boundParameter: null,
                    parameterTypes: {
                        "Activities": {
                            "typeName": "mscrm.activitypointer",
                            "structuralProperty": 4,
                        },
                    },
                    operationName: "Validate",
                    operationType: 0,
                };
                return metadata;
            };
            return ValidateRequest;
        }());
        CustomMessages.ValidateRequest = ValidateRequest;
    })(CustomMessages = Utilities.CustomMessages || (Utilities.CustomMessages = {}));
})(Utilities || (Utilities = {}));
var Activities;
(function (Activities) {
    var Util = Activities.Common.Util;
    var Constants = Activities.Constants;
    /// <summary>
    /// Opens simple lookup control to resolve email address.
    /// </summary>
    /// <param name="executionContext">XrmClientApi.EventContext</param>
    /// <returns> void </returns>
    function openLookupDialogToResolveUnknownEmails(executionContext) {
        var entityName = executionContext.getFormContext().data.entity.getEntityName();
        var telemetryItem = new TelemetryLogger.TelemetryItem(entityName, Constants.TelemetryConstant.EventUnresolveEmailAddressLookupDialogOnload);
        var form = executionContext.getFormContext();
        var entityId = form.data.entity.getId();
        var eventArgs = executionContext.getEventArgs();
        var eventPayload = eventArgs ? eventArgs.getTagValue() : null;
        if (Util.IsNullOrUndefined(eventPayload)) {
            telemetryItem.traceEventError("No data found in event arguments for record " + entityId);
            telemetryItem.report();
            return;
        }
        var control = (form.getControl(eventPayload.fieldName));
        var selectedActivityParty = {
            id: eventPayload.id,
            entityType: eventPayload.entityType,
            name: eventPayload.name
        };
        if (selectedActivityParty.entityType !== Constants.MetadataDrivenDialogConstants.UnresolvedAddress) {
            return;
        }
        if (Util.IsNullOrUndefined(control)) {
            telemetryItem.traceEventError("Null/Undefined source Lookup Control passed");
            telemetryItem.report();
            return;
        }
        telemetryItem.traceEventInformation("Resolve unknown emails handler invoked for record " + entityId);
        //preventing the default action.
        executionContext.getEventArgs().preventDefault();
        //Get the look up options.
        var lookUpOptions = getLookUpOptions(control);
        //This populates the text field with the unknown email and triggers a search
        lookUpOptions["searchText"] = selectedActivityParty.name;
        var lookUpPromise = Xrm.Utility.lookupObjects(lookUpOptions);
        lookUpPromise.then(function (data) {
            handleLookupResponse(data, telemetryItem, selectedActivityParty, control, executionContext);
            telemetryItem.report();
        }).catch(function (exception) {
            telemetryItem.traceEventError("Encountered the following exception", exception);
            telemetryItem.report();
        });
    }
    Activities.openLookupDialogToResolveUnknownEmails = openLookupDialogToResolveUnknownEmails;
    /// <summary>
    /// Gets the lookup options parameters to be passed
    /// </summary>
    /// <param name="executionContext">XrmClientApi.EventContext</param>
    /// <returns> void </returns>
    function getLookUpOptions(controlAttribute) {
        //["queue", "systemuser", "unresolvedaddress"]: FROM
        //["account", "contact", "entitlement", "knowledgearticle", "queue", "systemuser", "unresolvedaddress"]; TO,CC,BCC,REQUIRED, OPTIONAL
        var activityParties = controlAttribute.getEntityTypes();
        var defaultEntityforLookup = controlAttribute.getName() === Constants.MetadataDrivenDialogConstants.From ? Constants.EntityNames.SystemUser : Constants.EntityNames.Contact;
        var isDefaultEntitypresent = activityParties.find(function (value) {
            return value === defaultEntityforLookup;
        });
        var activityPartiesNotIncluded = ["knowledgearticle", "unresolvedaddress"];
        activityParties = activityParties.filter(function (activityParty) { return activityPartiesNotIncluded.filter(function (item) { return item === activityParty; }).length == 0; });
        var lookUpOptions = {
            entityTypes: activityParties,
            defaultEntityType: Util.IsNullOrUndefined(isDefaultEntitypresent)
                ? activityParties[0]
                : isDefaultEntitypresent
        };
        return lookUpOptions;
    }
    /// <summary>
    /// Handles the response returned by lookup dialog.
    /// </summary>
    /// <param name="executionContext">XrmClientApi.EventContext</param>
    /// <returns> void </returns>
    function handleLookupResponse(data, telemetryItem, unknownEmailRecord, control, executionContext) {
        telemetryItem.traceEventInformation("Unresolved email look up dialog closed by user.");
        if (data == null || data.length == 0) {
            telemetryItem.traceEventInformation("User selected no record. Returning.");
            return;
        }
        else if (data.length > 1) {
            telemetryItem.traceEventError("Expecting just one lookup value as a resolution. Got " + data.length + " values");
            return;
        }
        if (data[0].entityType === Activities.Constants.MetadataDrivenDialogConstants.UnresolvedAddress) {
            telemetryItem.traceEventError("The lookup value is an unresolved email.");
            return;
        }
        var resolveAllSimilarEmails = Activities.Common.Util.resolveSimilarUnresolvedAddresses();
        telemetryItem.traceEventInformation("resolveSimilarUnresolvedAddresses value : " + resolveAllSimilarEmails);
        //resolving emails for the current lookup
        resolveEmailsAndSetLookupValue(control, unknownEmailRecord, data[0], resolveAllSimilarEmails, telemetryItem);
        //resolving emails for the other lookups if the setting is true.
        if (resolveAllSimilarEmails) {
            var controls = getAllLookupControls(executionContext).filter(function (value) { return value.getName() !== control.getName(); }); //Check from lookup.
            controls.forEach(function (item) {
                resolveEmailsAndSetLookupValue(item, unknownEmailRecord, data[0], resolveAllSimilarEmails, telemetryItem);
            });
        }
        control.setFocus();
    }
    function getAllLookupControls(executionContext) {
        var form = executionContext.getFormContext();
        var controls = form.ui.controls.get().filter(function (value) {
            if (value.getAttrDescriptor && value.getAttrDescriptor().Type) {
                return value.getAttrDescriptor().Type === "partylist";
            }
        });
        return controls;
    }
    Activities.getAllLookupControls = getAllLookupControls;
    function resolveEmailsAndSetLookupValue(control, unknownEmailRecord, resolvedRecord, resolveAllSimilarEmails, telemetryItem) {
        var currentLookUpValue = control.getAttribute().getValue();
        if (!currentLookUpValue || currentLookUpValue.length == 0) {
            telemetryItem.traceEventInformation("The lookup " + control.getName() + " has no value.");
            return;
        }
        var updateFlag = false;
        var count = 0;
        for (var i = 0; i < currentLookUpValue.length; i++) {
            if (currentLookUpValue[i].name.toLocaleUpperCase() === unknownEmailRecord.name.toLocaleUpperCase()) {
                updateFlag = true;
                count++;
                currentLookUpValue[i].name = resolvedRecord.name;
                currentLookUpValue[i].id = resolvedRecord.id;
                currentLookUpValue[i].entityType = resolvedRecord.entityType;
                //if resolve similar emails is true: it resolves all identical unknown records across all emails.
                //if it is false, it doesnt even touch other identical records in the same email.
                if (!resolveAllSimilarEmails) {
                    break;
                }
            }
        }
        if (updateFlag) {
            try {
                telemetryItem.traceEventInformation("Trying to set Value for Lookup: " + control.getName() + ", " + resolvedRecord.id + ", Count of unresolved Emails: " + count + ".");
                control.getAttribute().setValue(currentLookUpValue);
            }
            catch (exception) {
                telemetryItem.traceEventError("Encountered the following exception when trying to set " + control.getName() + " value.", exception.message);
            }
        }
    }
})(Activities || (Activities = {}));
//# sourceMappingURL=Appointment.js.map