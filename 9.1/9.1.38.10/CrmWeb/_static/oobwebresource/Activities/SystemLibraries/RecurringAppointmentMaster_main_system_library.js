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
                    wrapper.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
                    dirtyAttributes.push(attrName);
                }
                // If any of the prtylist attribute is dirty, we need to pass all the party list attributes to the payload otherwise the values are overridden
                if (isOrganizerOrPartyListAttributeDirty) {
                    partylistAttributesList.forEach(function (attrValue) {
                        for (var _i = 0, attrValue_2 = attrValue; _i < attrValue_2.length; _i++) {
                            var party = attrValue_2[_i];
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
                    var activity_parties_1 = [];
                    formAttributes.forEach(function (wrapper) {
                        var attrName = wrapper.getName(), attrType = wrapper.getAttributeType().toString(), attrValue = wrapper.getValue();
                        if (attrValue && attrType === "lookup") {
                            for (var _i = 0, attrValue_3 = attrValue; _i < attrValue_3.length; _i++) {
                                var party = attrValue_3[_i];
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
    var RecurringAppointmentMaster = (function () {
        function RecurringAppointmentMaster() {
        }
        RecurringAppointmentMaster.formOnLoad = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.RecurringAppointmentMaster, Activities.Constants.TelemetryConstant.EventRecurringAppointmentMasterOnLoad);
            Activities.Common.Util.isExecutionContextMissingAndReport(eventContext, telemetryItem);
            var formContext = eventContext.getFormContext();
            if (Xrm.Internal.isUci() || Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
                RecurringAppointmentMaster.setDefaults(formContext, telemetryItem);
            }
            var resolveUnknownEmailsFCB = Activities.Common.Util.isResolveUnknownEmailsFCBEnabled() && !Activities.ClientApi.IsMobileClient();
            if (resolveUnknownEmailsFCB) {
                telemetryItem.traceEventInformation("Resolve unknown emails handler being attached in record " + formContext.data.entity.getId());
                var controls = Activities.getAllLookupControls(eventContext);
                if (controls && controls.length > 0) {
                    controls.forEach(function (lookup) {
                        lookup.addOnLookupTagClick(Activities.openLookupDialogToResolveUnknownEmails);
                    });
                }
            }
            telemetryItem.report();
        };
        ;
        RecurringAppointmentMaster.bookOrReschedule = function (formContext, savemode) {
            if (savemode === void 0) { savemode = ""; }
            formContext.data.entity.save(savemode);
        };
        RecurringAppointmentMaster.setDefaults = function (formContext, telemetryitem) {
            var entityId = formContext.data.entity.getId();
            if (Activities.Common.Util.IsNullOrEmptyGuid(entityId)) {
                RecurringAppointmentMaster.setDefaultValues(formContext, telemetryitem);
            }
            var fromAppointment = false;
            var formParameters = formContext.context.getQueryStringParameters();
            if (formParameters && formParameters[RecurringAppointmentMaster.key]) {
                fromAppointment = true;
            }
            telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.FromAppointment, fromAppointment);
            if (Activities.Common.Util.IsNullOrEmptyString(entityId) && fromAppointment) {
                RecurringAppointmentMaster.configureNewRecurringAppointmentForm(formContext, telemetryitem);
            }
            var activityId = formContext.data.entity.attributes.get("activityid");
            if (activityId) {
                activityId.setSubmitMode(Activities.Constants.AttributeSubmitModes[Activities.Constants.AttributeSubmitModes.never]);
            }
            if (Activities.SchedulingEngine.UseSchedulingEngine(telemetryitem)) {
                formContext.data.entity.addOnSave(RecurringAppointmentMaster.handleRecurringAppointmentSave);
            }
            Activities.Common.ActivityHelper.setFocusToSubject(formContext, telemetryitem);
        };
        RecurringAppointmentMaster.setDefaultValues = function (formContext, telemetryitem) {
            Activities.Common.ActivityHelper.setOwner(formContext, telemetryitem);
            Activities.Common.ActivityHelper.setOrganizer(formContext, telemetryitem);
        };
        RecurringAppointmentMaster.configureNewRecurringAppointmentForm = function (formContext, telemetryitem) {
            try {
                var data = sessionStorage.getItem(RecurringAppointmentMaster.key);
                if (data) {
                    var dataFromAppointment = JSON.parse(data);
                    sessionStorage.removeItem(RecurringAppointmentMaster.key);
                    for (var attr in dataFromAppointment) {
                        if (attr === "activityid") {
                            Activities.SchedulingEngine.RecurringAppointmentId = Activities.Common.Util.convertGuidToString(dataFromAppointment[attr]);
                            if (!Xrm.Internal.isUci()) {
                                window.parent["_appointId"] = Activities.SchedulingEngine.RecurringAppointmentId;
                            }
                            telemetryitem.traceEventInformation("FromAppointmentId: " + dataFromAppointment[attr]);
                        }
                        else if (!Activities.Common.Util.IsNullOrEmptyString(dataFromAppointment[attr])) {
                            var formAttribute = formContext.getAttribute(attr);
                            if (formAttribute) {
                                RecurringAppointmentMaster.populateAttributeValue(formAttribute, dataFromAppointment[attr]);
                            }
                        }
                    }
                    if (!Activities.SchedulingEngine.UseSchedulingEngine(telemetryitem) && Xrm.Internal.isUci()) {
                        formContext.data.entity.addOnSave(RecurringAppointmentMaster.handleRecurringAppointmentSave);
                    }
                }
            }
            catch (exception) {
                telemetryitem.traceEventError("Error configuring new recurringappointmentmaster from appointment.", exception);
            }
        };
        RecurringAppointmentMaster.openRecurrenceDialog = function (formContext) {
            var telemetryitem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.RecurringAppointmentMaster, Activities.Constants.TelemetryConstant.EventEditRecurrence);
            try {
                if (!formContext.data) {
                    formContext = formContext.getFormContext();
                }
                var id = Activities.Common.Util.convertGuidToString(formContext.data.entity.getId());
                var isDefault = !id;
                var recurrenceDlgUrl = "/activities/act_dlgs/recurrencedialog.aspx?dType=1";
                var recValues = RecurringAppointmentMaster.getRecurrenceValues(formContext);
                telemetryitem.traceEventInformation("ExistingRecurrenceValues: " + JSON.stringify(recValues));
                var options = {
                    height: 650,
                    width: 520,
                    position: Activities.ClientApi.getWindowCenter()
                };
                var actionUri = formContext.context.isOnPremises() ? formContext.context.prependOrgName(recurrenceDlgUrl) : recurrenceDlgUrl;
                actionUri = actionUri.concat("&Id=", encodeURIComponent(id));
                actionUri = actionUri.concat("&objectType=", encodeURIComponent("4251"));
                actionUri = actionUri.concat("&default=", encodeURIComponent(isDefault ? "1" : "0"));
                actionUri = actionUri.concat("&endEn=", "1");
                var callbackParameters = [formContext, telemetryitem];
                var callback = Activities.Common.Util.createCallBackFunction(RecurringAppointmentMaster.addRecurrenceCallback, callbackParameters);
                if (Xrm.Internal.isUci()) {
                    Xrm.Internal.openLegacyWebDialog(actionUri, options, recValues, null, callback);
                }
                else {
                    Mscrm.CommandBarActions.displayRecurrenceDialog(4251, id, isDefault, true, recValues, callback);
                }
            }
            catch (exception) {
                telemetryitem.traceEventError("Error opening Recurrence dialog.", exception);
                telemetryitem.report();
            }
        };
        RecurringAppointmentMaster.getRecurrenceValues = function (formContext) {
            var recValues = {};
            RecurringAppointmentMaster.allProperties.forEach(function (propertyName) {
                var recProperty = formContext.getAttribute(propertyName);
                if (!Activities.Common.Util.IsNullOrUndefined(recProperty)) {
                    if (recProperty.getAttributeType().toString() == "datetime") {
                        recValues[propertyName] = !Activities.Common.Util.IsNullOrUndefined(recProperty.getValue()) ?
                            Activities.Common.ActivityHelper.convertServerTimeToUserLocalTime(recProperty.getValue()).toString() : "";
                    }
                    else {
                        recValues[propertyName] = recProperty.getValue();
                    }
                }
            });
            return recValues;
        };
        RecurringAppointmentMaster.addRecurrenceCallback = function (returnValues, formContext, telemetryitem) {
            if (!returnValues) {
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.RecurrenceDialogAction, "Cancel");
                telemetryitem.report();
                return;
            }
            var values = Xrm.Internal.isUci() ? returnValues.outboundArgs : returnValues;
            if (!values) {
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.RecurrenceDialogAction, "Cancel");
                telemetryitem.report();
                return;
            }
            if (values.seriesstatus === 0) {
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.RecurrenceDialogAction, "EndSeries");
                telemetryitem.report();
                formContext.ui.close();
            }
            else {
                telemetryitem.traceEventInformation("Selected recurrence pattern values: " + JSON.stringify(values));
                RecurringAppointmentMaster.allProperties.forEach(function (propertyName) {
                    var propertyValue = values[propertyName];
                    var formAttribute = formContext.getAttribute(propertyName);
                    if (Activities.Common.Util.IsNotNull(propertyValue) && formAttribute) {
                        if (propertyValue === "") {
                            formAttribute.setValue(null);
                        }
                        else {
                            RecurringAppointmentMaster.populateAttributeValue(formAttribute, propertyValue);
                        }
                    }
                });
                var recurrenceWhenString = values.recurrencedescription;
                if (recurrenceWhenString) {
                    formContext.ui.clearFormNotification("recurrencedescription");
                    return formContext.ui.setFormNotification(recurrenceWhenString, Xrm.Constants.FormNotificationLevels.information, "recurrencedescription");
                }
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.RecurrenceDialogAction, "RecurrencePatternSet");
                telemetryitem.report();
            }
            return values;
        };
        RecurringAppointmentMaster.handleRecurringAppointmentSave = function (eventContext) {
            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.RecurringAppointmentMaster, Activities.Constants.TelemetryConstant.RecurrinAppointmentOnSave);
            var useSchedulingEngine = Activities.SchedulingEngine.UseSchedulingEngine(telemetryItem);
            var formContext = eventContext.getFormContext();
            var isFormDirty = formContext.data.entity.getIsDirty();
            /*If recurring appointment is opened from a new unsaved appointment form => book api.
              If the recurring appointment is opened from a saved appointment form => AddRecurranceSDK message. Hence the null string check on SchedulingEngine.RecurringAppointmentId
              For further save on recurring appointment => reschedule sdk.
             */
            var isCustomHandlingNeeded = useSchedulingEngine || !Activities.Common.Util.IsNullOrEmptyString(Activities.SchedulingEngine.RecurringAppointmentId);
            if (isFormDirty && isCustomHandlingNeeded) {
                Xrm.Utility.showProgressIndicator(Activities.SchedulingEngine.processMessage);
            }
            telemetryItem.traceFeatureUsage(Activities.Constants.TelemetryConstant.UseSchedulingEngine, useSchedulingEngine);
            if (!isCustomHandlingNeeded) {
                telemetryItem.report();
                return;
            }
            if (!Xrm.Internal.isUci()) {
                telemetryItem.traceEventInformation("Calling legacy web client add recurrence. AppointmentId: " + Activities.SchedulingEngine.RecurringAppointmentId);
                // call legacy function to handle scheduling and navigation
                formContext.data.setFormDirty(false);
                Mscrm.CommandBarActions.addRecurrenceSdkCall(Activities.SchedulingEngine.RecurringAppointmentId, null, null);
                telemetryItem.traceEventInformation("Legacy web client add recurrence called.");
                telemetryItem.report();
            }
            else {
                if (!formContext.data.entity.getIsDirty()) {
                    telemetryItem.traceEventInformation("Form is not dirty hence cancelling save.");
                    return;
                }
                Activities.SchedulingEngine.SaveMode = eventContext.getEventArgs().getSaveMode();
                if (Activities.Common.Util.IsNullOrEmptyString(Activities.SchedulingEngine.RecurringAppointmentId)) {
                    telemetryItem.traceEventInformation("Calling scheduling engine.");
                    telemetryItem.traceEventInformation("Save Mode : " + Activities.SchedulingEngine.SaveMode);
                    Activities.SchedulingEngine.BookOrReScheduleAppointment(formContext, telemetryItem);
                }
                else {
                    telemetryItem.traceEventInformation("Calling uci add recurrence. AppointmentId: " + Activities.SchedulingEngine.RecurringAppointmentId);
                    Activities.SchedulingEngine.AddRecurrenceSdk(formContext, Activities.SchedulingEngine.RecurringAppointmentId, telemetryItem);
                }
            }
            eventContext.getEventArgs().preventDefault();
        };
        RecurringAppointmentMaster.endSeriesClick = function (formContext, entityId) {
            var telemetryitem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.RecurringAppointmentMaster, Activities.Constants.TelemetryConstant.EventEndSeries);
            var dialogString = "/activities/act_dlgs/dlg_seriesaction.aspx?actionType=1";
            var options = {
                height: 300,
                width: 450,
                position: Activities.ClientApi.getWindowCenter()
            };
            var parameters = [Activities.Common.Util.convertGuidToString(entityId), formContext, telemetryitem];
            var callback = Activities.Common.Util.createCallBackFunction(RecurringAppointmentMaster.performActionAfterEndSeries, parameters);
            if (Xrm.Internal.isUci()) {
                Xrm.Internal.openLegacyWebDialog(dialogString, options, null, null, callback);
            }
            else {
                Xrm.Internal.openDialog(dialogString, options, null, null, callback);
            }
        };
        RecurringAppointmentMaster.populateAttributeValue = function (formAttribute, value) {
            switch (formAttribute.getAttributeType().toString()) {
                case "boolean":
                    formAttribute.setValue(value == 1 ? true : false);
                    formAttribute.fireOnChange();
                    break;
                case "integer":
                case "optionset":
                    formAttribute.setValue(parseInt(value));
                    formAttribute.fireOnChange();
                    break;
                case "datetime":
                    formAttribute.setValue(Activities.Common.ActivityHelper.convertUserLocalTimeToServerTime(value));
                    formAttribute.fireOnChange();
                    break;
                default:
                    formAttribute.setValue(value);
                    formAttribute.fireOnChange();
                    break;
            }
        };
        RecurringAppointmentMaster.performActionAfterEndSeries = function (returnValues, entityId, formContext, telemetryitem) {
            if (!returnValues) {
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.EndSeriesDialogAction, "Cancel");
                telemetryitem.report();
                return false;
            }
            var values = Xrm.Internal.isUci() ? returnValues.outboundArgs : returnValues;
            if (!values || !values["EndSeriesDate"]) {
                telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.EndSeriesDialogAction, "Cancel");
                telemetryitem.report();
                return false;
            }
            var endSeriesDate = new Date(values["EndSeriesDate"]);
            endSeriesDate = new Date(endSeriesDate.getFullYear(), endSeriesDate.getMonth(), endSeriesDate.getDate(), 23, 59, 59);
            var stateOfPastInstances = values["StateOfPastInstances"];
            var stateOfPastInstancesCode;
            switch (stateOfPastInstances.toLowerCase()) {
                case "open":
                    stateOfPastInstancesCode = 0;
                    break;
                case "completed":
                    stateOfPastInstancesCode = 1;
                    break;
                case "canceled":
                    stateOfPastInstancesCode = 2;
                    break;
                default:
                    stateOfPastInstancesCode = 0;
                    break;
            }
            telemetryitem.traceEventInformation("StateOfPastInstances: " + stateOfPastInstancesCode);
            var optionsString = "?$select=activityid";
            Xrm.WebApi.online.retrieveRecord(Activities.Constants.EntityNames.RecurringAppointmentMaster, entityId, optionsString)
                .then(function (entity) {
                if (Activities.Common.Util.IsNull(entity)) {
                    telemetryitem.traceEventError("Entity is null", "Cannot find entity with id " + entityId);
                    telemetryitem.report();
                    return;
                }
                var deleteOpenInstancesRequest = new Utilities.CustomMessages.DeleteOpenInstancesRequest(entity["activityid"], endSeriesDate.toISOString(), stateOfPastInstancesCode);
                Xrm.WebApi.online.execute(deleteOpenInstancesRequest).then(function (response) {
                    Xrm.Utility.refreshParentGrid({ entityType: Activities.Constants.EntityNames.RecurringAppointmentMaster, id: entityId, name: "" });
                    telemetryitem.traceEventCustom(Activities.Constants.TelemetryConstant.EndSeriesDialogAction, "SeriesEnded");
                    telemetryitem.report();
                    if (!Xrm.Internal.isUci()) {
                        parent.getPageManager().raiseEvent(parent.Mscrm.ScriptEvents.NavigateBackCheckpoint, { count: 2 });
                    }
                    else {
                        formContext.ui.close();
                    }
                }, function (error) {
                    Activities.ClientApi.dialogActionFailedCallback(error, telemetryitem);
                });
            }, function (error) {
                Activities.ClientApi.dialogActionFailedCallback(error, telemetryitem);
            });
            return true;
        };
        return RecurringAppointmentMaster;
    }());
    RecurringAppointmentMaster.allProperties = ["endtime", "interval", "monthofyear",
        "effectiveenddate", "daysofweekmask", "starttime",
        "occurrences", "isnthmonthly", "isnthyearly",
        "isweekdaypattern", "effectivestartdate",
        "dayofmonth", "isregenerate", "duration",
        "recurrencepatterntype", "instance", "patternenddate",
        "patternstartdate", "firstdayofweek", "patternendtype"];
    RecurringAppointmentMaster.key = "recurringAppointmentFormData";
    Activities.RecurringAppointmentMaster = RecurringAppointmentMaster;
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
//# sourceMappingURL=RecurringAppointmentMaster.js.map