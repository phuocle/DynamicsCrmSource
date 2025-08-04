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
/// <reference path="../../../Activities/WebResources/Template/html2canvas.d.ts"/>
/// <reference path="../../../../references/external/TypeDefinitions/jquery.d.ts"/>
var Activities;
(function (Activities) {
    /// <summary>
    /// Template
    /// </summary>
    var Template = (function (_super) {
        __extends(Template, _super);
        function Template() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Template.templateFormOnload = function (executionContext) {
            this.formContext = executionContext.getFormContext();
            var isTemplateUCIEnabled = Activities.Common.Util.isFCBEnabled(Activities.Constants.FCBConstant.TemplateUCIDataOctober2020UpdateFCB, Activities.Constants.FCBConstant.October2020UpdateFCB);
            if (!isTemplateUCIEnabled) {
                Activities.Common.Util.disableAllControls(executionContext);
                this.formContext.getControl(Activities.Constants.Templates.Header_Ownerid).setDisabled(true);
                Activities.Common.Util.showSpecificSectionOnly(executionContext, "Template", "Details");
                executionContext.getFormContext().ui.setFormNotification(Activities.ClientApi.getResourceString("PreOctoberNotification"), Xrm.Constants.FormNotificationLevels.information, "PreOctoberNotification");
                return;
            }
            // disable permission level if user does not have CreateOrgEmailTemplates privilege
            this.permissionLevelPrivilegeCheck(executionContext.getFormContext());
            // Manually setting subjectsafehtml attribute as required since it is using RTE custom control
            var subjectSafehtmlAttribute = this.formContext.data.entity.attributes.get(Activities.Constants.Templates.SubjectSafeHtml);
            subjectSafehtmlAttribute.setRequiredLevel(Xrm.Constants.AttributeRequiredLevels.required);
            // Subject RTE CKEDITOR and body Activity editor CKEDITOR are in different frames
            var _this = this;
            this.editorTimer = setTimeout(this.RegisterCkeditorEvents, this.editorTimeout, _this, executionContext);
        };
        /**
        * setTimeout to make sure both CKEDITOR are found and register focus, blur, and selectionChange event on each of them
        * @param executionContext
        */
        Template.RegisterCkeditorEvents = function (_this, formContext) {
            var rowId = 0;
            // Class name for both ckeditor iframe is "fullPageContentEditorFrame"
            var frames = window.top.document.getElementsByClassName("fullPageContentEditorFrame");
            while (rowId < frames.length) {
                var currentFrameElement = frames[rowId];
                var currentFrame = currentFrameElement.contentWindow;
                if (currentFrame.CKEDITOR) {
                    // Current logic in ckeditor.js is creating one instance per CKEDITOR per window frame.
                    var ckeditor = currentFrame.CKEDITOR;
                    var ckeditorKey = Object.keys(ckeditor.instances)[0];
                    var editor = ckeditor.instances[ckeditorKey];
                    if (editor) {
                        var mappedEditor = _this.ckeditorMap.get(ckeditorKey);
                        if (!mappedEditor) {
                            _this.ckeditorMap.set(ckeditorKey, ckeditorKey);
                            editor.on('focus', function (event) {
                                if (_this.editableSlugElement && !_this.insertInProgress) {
                                    _this.editableSlugElement.setAttribute("contenteditable", "false");
                                }
                                _this.latestFocusedEditor = event.editor;
                                formContext.ui.clearFormNotification(Activities.Constants.Templates.NotFocusedOnSubjectOrBody);
                            });
                            editor.on('blur', function () {
                                if (_this.editableSlugElement && !_this.insertInProgress) {
                                    _this.editableSlugElement.setAttribute("contenteditable", "false");
                                }
                                // Set error notification on subject control if subject is empty, clear notification on subject control otherwise
                                _this.validateSubjectSafeHtml(formContext);
                            });
                            editor.on('selectionChange', function (event) {
                                _this.latestFocusedEditor = event.editor;
                                if (!_this.insertInProgress) {
                                    _this.onSelectionChange(_this, event.editor);
                                }
                            });
                            editor.on('destroy', function (event) {
                                _this.ckeditorMap.delete(event.editor.name);
                                if (_this.latestFocusedEditor && _this.latestFocusedEditor.name === event.editor.name) {
                                    _this.latestFocusedEditor = null;
                                }
                            });
                        }
                    }
                }
                rowId++;
            }
            if (_this.ckeditorMap.size === _this.numberOfCkeditor) {
                if (_this.editorTimer) {
                    clearTimeout(_this.editorTimer);
                    _this.editorTimer = null;
                }
            }
            else {
                _this.editorTimer = setTimeout(_this.RegisterCkeditorEvents, _this.editorTimeout, _this, formContext);
            }
        };
        /**
         * Onsave handler for template form. Remove data-slug span tags for subjectSafehtml and safehtml field before sending to server.
         * @param executionContext
         */
        Template.templateFormOnsave = function (executionContext) {
            // Block autosave when insert data is in progress
            if (this.insertInProgress) {
                this.preventAutoSave(executionContext);
            }
            else {
                executionContext.getFormContext().ui.clearFormNotification(Activities.Constants.Templates.NotFocusedOnSubjectOrBody);
                var safehtmlAttribute = this.formContext.data.entity.attributes.get(Activities.Constants.Templates.SafeHtml);
                var startHtml = safehtmlAttribute.getValue();
                var subjectSafehtmlAttribute = this.formContext.data.entity.attributes.get(Activities.Constants.Templates.SubjectSafeHtml);
                // Set error notification on subject control if subject is empty, clear notification on subject control otherwise
                this.validateSubjectSafeHtml(executionContext.getFormContext());
                // Rmove data-slug span from safehtml and subjectsafehtml
                var processedHtml = this.getHtmlBody(safehtmlAttribute.getValue());
                var processedSubjectHtml = this.getHtmlBody(subjectSafehtmlAttribute.getValue().replace(/(<br>)*/g, '').trimEnd());
                safehtmlAttribute.setValue(processedHtml);
                subjectSafehtmlAttribute.setValue(processedSubjectHtml);
                this.setEntityImageForTemplate(this.formContext.data.entity.getId(), startHtml);
            }
        };
        /**
         * Validate is subjectsafehtml is empty or only contains spaces or new lines
         * @param subjectSafeHtml
         */
        Template.validateSubjectSafeHtml = function (formContext) {
            var subjectSafeHtmlControl = formContext.getControl(Activities.Constants.Templates.SubjectSafeHtml);
            var subjectSafeHtml = subjectSafeHtmlControl.getValue();
            var isSubjectValid;
            if (!!!subjectSafeHtml) {
                isSubjectValid = !!!subjectSafeHtml;
            }
            var removeSpace = subjectSafeHtml.replace(/[&]nbsp[;]/gi, "").trim();
            isSubjectValid = !!removeSpace;
            if (!isSubjectValid) {
                subjectSafeHtmlControl.setNotification(Activities.ClientApi.getResourceString(Activities.Constants.Templates.RequiredFieldMustBeFilledIn), Activities.Constants.Templates.subjectSafeHtmlNotification);
            }
            else {
                subjectSafeHtmlControl.clearNotification(Activities.Constants.Templates.subjectSafeHtmlNotification);
            }
        };
        Template.getHtmlBody = function (htmlContent) {
            var parser = new DOMParser();
            var parsedHtml = parser.parseFromString(htmlContent, 'text/html');
            var bodyElement = parsedHtml.body;
            return bodyElement.innerHTML;
        };
        /**
         * If selection is within a data slug, select the entire slug data span element
         * @param _this
         * @param editor
         */
        Template.onSelectionChange = function (_this, editor) {
            if (_this.editableSlugElement) {
                _this.editableSlugElement.setAttribute("contenteditable", "false");
            }
            var cursorPositionEditorElement = editor.getSelection();
            _this.editableSlugElement = undefined;
            if (cursorPositionEditorElement) {
                cursorPositionEditorElement = cursorPositionEditorElement.getStartElement();
                if (cursorPositionEditorElement) {
                    var cursorPositionHtmlElement = cursorPositionEditorElement.$;
                    if (cursorPositionHtmlElement) {
                        if (cursorPositionHtmlElement.classList.contains("dataslug")) {
                            _this.editableSlugElement = cursorPositionHtmlElement;
                            var range = editor.createRange();
                            range.selectNodeContents(cursorPositionEditorElement);
                            editor.getSelection().selectRanges([range]);
                            // Register a one time click event to handle ckeditor not firing selectionChange for clicking on different places within selected area
                            editor.editable().once('click', function () {
                                _this.latestFocusedEditor = _this.latestFocusedEditor;
                                _this.onSelectionChange(_this, editor);
                            });
                            _this.registerKeyDownEvent(_this, editor);
                            _this.registerKeyUpEvent(_this, editor);
                        }
                    }
                }
            }
        };
        Template.registerKeyDownEvent = function (_this, editor) {
            editor.editable().once('keydown', function (event) {
                if (event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowRight ||
                    event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowLeft ||
                    event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowUp ||
                    event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowDown ||
                    event.data.$.code == Activities.Constants.keyboardEvent.keyCode.Backspace) {
                    if (_this.editableSlugElement) {
                        // Set conteneditable to true to allow deleting the data-slug and moving cursor out
                        _this.editableSlugElement.setAttribute("contenteditable", "true");
                        _this.registerKeyUpEvent(_this, editor);
                    }
                }
                else {
                    if (_this.editableSlugElement) {
                        _this.editableSlugElement.setAttribute("contenteditable", "false");
                        _this.registerKeyDownEvent(_this, editor);
                    }
                }
            });
        };
        Template.registerKeyUpEvent = function (_this, editor) {
            editor.editable().once('keyup', function (event) {
                var cursorPositionEditorElement = editor.getSelection();
                var selectedRanges = cursorPositionEditorElement ? cursorPositionEditorElement.getRanges() : null;
                if (selectedRanges) {
                    cursorPositionEditorElement = cursorPositionEditorElement.getStartElement();
                    if (selectedRanges[0].collapsed && cursorPositionEditorElement.type == Activities.Constants.Templates.nodeType.ELEMENT_NODE && cursorPositionEditorElement.hasClass("dataslug")) {
                        if (event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowRight) {
                            var range = editor.createRange();
                            var nextNode = cursorPositionEditorElement.getNext();
                            // When cursorPositionEditorElement is the last child element of its parent element
                            if (!cursorPositionEditorElement.hasNext()) {
                                // Append an empty node into its parent node, so nextNode will be this empty node
                                var emptyNode = document.createTextNode('\uFEFF');
                                cursorPositionEditorElement.getParent().$.appendChild(emptyNode);
                                nextNode = cursorPositionEditorElement.getNext();
                            }
                            else if (nextNode.type == Activities.Constants.Templates.nodeType.ELEMENT_NODE && (nextNode.hasClass("dataslug") || nextNode.$.nodeName == "BR") && selectedRanges[0].collapsed) {
                                // Insert an empty node in between the cursorPositionEditorElement and next data slug span element node, so now the nextNode will be the empty node
                                var emptyNode = document.createTextNode('\uFEFF');
                                cursorPositionEditorElement.getParent().$.insertBefore(emptyNode, nextNode.$);
                                nextNode = cursorPositionEditorElement.getNext();
                            }
                            // If cursorPositionEditorElement is neither the last child element of its parent element or its next node if not a data slug span element, ex: a text node
                            // nextNode will be whatever node that is following cursorPositionEditorElement
                            range.selectNodeContents(nextNode);
                            range.endOffset = 0;
                            range.startOffset = 0;
                            range.collapsed = true;
                            editor.getSelection().selectRanges([range]);
                        }
                        else if (event.data.$.code == Activities.Constants.keyboardEvent.keyCode.ArrowLeft) {
                            var range = editor.createRange();
                            var prevNode = cursorPositionEditorElement.getPrevious();
                            if (!cursorPositionEditorElement.hasPrevious() ||
                                (prevNode.type == Activities.Constants.Templates.nodeType.ELEMENT_NODE && prevNode.hasClass("dataslug") && selectedRanges[0].collapsed)) {
                                var emptyNode = document.createTextNode('\uFEFF');
                                var cursorPositionNode = cursorPositionEditorElement.$;
                                cursorPositionEditorElement.getParent().$.insertBefore(emptyNode, cursorPositionNode);
                                prevNode = cursorPositionEditorElement.getPrevious();
                                range.selectNodeContents(prevNode);
                                editor.getSelection().selectRanges([range]);
                            }
                        }
                    }
                }
                // Change contenteditable back to false after moving cursor outside of span during keyup event
                if (_this.editableSlugElement) {
                    _this.editableSlugElement.setAttribute("contenteditable", "false");
                    _this.registerKeyDownEvent(_this, editor);
                }
            });
        };
        /**
         * Prevent auto save
         * @param executionContext
         */
        Template.preventAutoSave = function (executionContext) {
            var eventArgs = executionContext.getEventArgs();
            if (eventArgs.getSaveMode() == 70 || eventArgs.getSaveMode() == 2) {
                eventArgs.preventDefault();
            }
        };
        /**
         * On click handler for "Insert dynamic text" button
         * Verify if is currently focused on subject RTE control or body Activity editor control
         * If focused, open insert data dialog, else open info dialog
         * @param selectedControl
         */
        Template.insertDataButtonClick = function () {
            var templateTypeAttribute = Xrm.Page.data.entity.attributes.get(Activities.Constants.Templates.TemplateTypeCode);
            var dialogOptions = {
                width: 600,
                height: 250,
                position: 2 /* side */
            };
            if (this.editorTimer == null && this.ckeditorMap.size === 0) {
                this.RegisterCkeditorEvents(this, this.formContext);
            }
            // If not focused on either subject or body, show confirmation dialog
            if (this.latestFocusedEditor == undefined || this.latestFocusedEditor == null) {
                this.formContext.ui.setFormNotification(Activities.ClientApi.getResourceString("UnableToInsertDynamicText"), Xrm.Constants.FormNotificationLevels.error, Activities.Constants.Templates.NotFocusedOnSubjectOrBody);
            }
            else {
                // Identify which edior is focued on
                var editor = this.latestFocusedEditor;
                var dialogParams = {
                    "param_templateEntity": templateTypeAttribute.getValue(),
                    "param_datafield_control_output": this.editableSlugElement ? this.editableSlugElement.outerHTML : undefined
                };
                var _this = this;
                this.insertInProgress = true;
                Xrm.Navigation.openDialog(Activities.Constants.Templates.InsertDataDialog, dialogOptions, dialogParams).then(function (response) {
                    var slugString = response.parameters.param_datafield_control_output;
                    var eventData = {
                        dataTransfer: {
                            getData: function (key) { return slugString; },
                            getTransferType: function (key) { return 3; },
                            slugString: slugString
                        }
                    };
                    try {
                        // Make data slug element editable for unblocking paste event
                        if (_this.editableSlugElement) {
                            _this.editableSlugElement.setAttribute("contenteditable", "true");
                        }
                        editor.fire("paste", eventData);
                        _this.insertInProgress = false;
                    }
                    catch (e) {
                        // Fall back is paste event failed
                        if (_this.editableSlugElement) {
                            _this.editableSlugElement.setAttribute("contenteditable", "false");
                        }
                        _this.insertInProgress = false;
                    }
                }, function () {
                    _this.insertInProgress = false;
                });
            }
        };
        /**
         * On insert event handler for data value
         * @param eventContext
         */
        Template.onInsert = function (eventContext) {
            var insertDataControlOutput = Xrm.Page.data.attributes.get('param_datafield_control_output').getValue();
            if (insertDataControlOutput == Activities.Constants.Templates.malformedDefaultValue) {
                eventContext.getFormContext().ui.setFormNotification(Activities.ClientApi.getResourceString(Activities.Constants.Templates.malformedDefaultValue), Xrm.Constants.FormNotificationLevels.error, "MalformedDefaultValueMessage");
            }
            else {
                eventContext.getFormContext().ui.close();
            }
        };
        /**
         * On close handler for dialog
         * @param eventContext
         */
        Template.closeDialog = function (eventContext) {
            var dataFieldControl = Xrm.Page.data.attributes.get('param_datafield_control_output');
            dataFieldControl && dataFieldControl.setValue("");
            eventContext.getFormContext().ui.close();
        };
        /**
         * Opens an alert dialog with a localized string
         * @param messageId
         */
        Template.showAlertDialog = function (messageId, onCloseCallback) {
            var message = Activities.ClientApi.getResourceString(messageId);
            Xrm.Navigation.openAlertDialog({ text: message }).then(function () {
                onCloseCallback && onCloseCallback();
            }, function () {
                var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, "ShowAlertDialog");
                telemetryItem.traceEventError("Failed to show alert dialog");
                telemetryItem.report();
            });
        };
        /**
         * Onload handler for the create and convert template dialogs
         * @param formContext
         */
        Template.createOrConvertTemplateDialogOnLoad = function (eventContext) {
            var formContext = eventContext && eventContext.getFormContext();
            var attributes = formContext && formContext.data && formContext.data.attributes;
            // make the category field required for the custom control
            var category = attributes && attributes.get(Activities.Constants.Templates.ParamCategory);
            category && category.setRequiredLevel(Activities.Constants.AttributeRequiredLevel.Required);
            // set the lanuage control to default to the current org language
            // this unblocks issue where language control doesn't have a value set until user changes value
            var language = attributes && attributes.get(Activities.Constants.Templates.LanguageId);
            var orgLcid = Xrm.Utility.getGlobalContext().getOrgLcid(); // using org rather than user lcid because that's what language control does as well
            language && language.setValue(orgLcid);
            // disable permission level if user does not have CreateOrgEmailTemplates privilege
            this.permissionLevelPrivilegeCheck(formContext);
        };
        Template.openEmailTemplateGallery = function () {
            var dialogConfiguration = {
                entityName: "template",
                filterFormId: "ffb6b565-1401-4a05-b5ff-52d82293f685",
                propertiesFormId: "ffb6b565-1401-4a05-b5ff-52d82293f685",
                viewId: "21b8d323-06c2-4cde-b756-95b86f0b3ea1",
                defaultLanguageFilterAttribute: "languagecode",
                isDataImportInProgress: null,
                titleColumn: "title",
                labelColumn: "ispersonal",
                htmlColumn: "safehtml",
                permissionColumn: "ispersonal",
                categoryColumn: "templatetypecode",
                languageColumn: "languagecode"
            };
            var _this = this;
            Xrm.Navigation.openDialog("TemplatePreviewGalleryDialog", {
                width: 1005,
                height: 800,
            }, {
                input_config: JSON.stringify(dialogConfiguration)
            }).then(function (result) {
                if (result.parameters.dialog_result) {
                    if (result.parameters.selected_item) {
                        Xrm.Utility.showProgressIndicator(Activities.ClientApi.getResourceString(Activities.Constants.Templates.CreatingTemplateProgressMessage));
                        _this.cloneTemplateFromGallery(JSON.parse(result.parameters.selected_item));
                    }
                }
            });
        };
        /**
         * Disables the Permission Level field if the user does not have the CreateOrgEmailTemplates privilege
         * @param formContext
         */
        Template.permissionLevelPrivilegeCheck = function (formContext) {
            var userHasCreateOrgTemplatePermission = formContext.context.userSettings.securityRolePrivileges.indexOf(Activities.Constants.Templates.CreateOrgEmailTemplatesPrivilegeId) !== -1;
            if (!userHasCreateOrgTemplatePermission) {
                var isPersonalOptionSet = formContext.getControl(Activities.Constants.Templates.PermissionLevelId);
                isPersonalOptionSet.setDisabled(true); // lock so that user cannot change to organization
            }
        };
        /**
         * Opens either the Create or Convert to an email template dialog
         * @param formContext formContext
         * @param convertEmailToTemplate flag indicating whether or not a conversion from email to template should occur
         */
        Template.openCreateOrConvertTemplateDialog = function (formContext, convertEmailToTemplate) {
            var _this = this;
            var dialogName = convertEmailToTemplate ? Activities.Constants.Templates.ConvertEmailToTemplateDialog : Activities.Constants.Templates.CreateTemplateDialog;
            var dialogParams = {};
            if (convertEmailToTemplate) {
                var emailId = formContext.data.entity.getId();
                dialogParams[Activities.Constants.Templates.ParamEmailId] = Activities.Common.Util.convertGuidToString(emailId);
                dialogParams[Activities.Constants.Templates.ParamSubject] = formContext.getAttribute(Activities.Constants.Templates.Subject).getValue();
                dialogParams[Activities.Constants.Templates.ParamBody] = formContext.getAttribute(Activities.Constants.Templates.Description).getValue();
            }
            // open the new template dialog
            var dialogOptions = {
                width: 500,
                height: 500,
                position: Activities.ClientApi.getWindowCenter(),
            };
            Xrm.Navigation.openDialog(dialogName, dialogOptions, dialogParams).then(function (response) {
                // dialog closed navigate to template record if template record exists
                Xrm.Utility.closeProgressIndicator();
                var params = response && response.parameters;
                var templateRecord = params && params[Activities.Constants.Templates.ParamTemplateRecord];
                templateRecord && _this.openRecord(templateRecord);
            });
        };
        /**
         * Wrapper for converting an email to a template
         * @param eventContext context
         */
        Template.convertToTemplate = function (eventContext) {
            this.createTemplate(eventContext, true);
        };
        /**
         * Creates a new template
         * @param eventContext current context
         * @param convertEmailToTemplate flag indicating whether or not a conversion from email to template should occur
         */
        Template.createTemplate = function (eventContext, convertEmailToTemplate) {
            var _this = this;
            // clear then set form level notification
            var formContext = eventContext.getFormContext();
            formContext.ui.clearFormNotification(Activities.Constants.Templates.RequiredFieldsErrorMessage);
            if (!this.validForCreateOrConvertTemplate(eventContext)) {
                var errorMessage = Activities.ClientApi.getResourceString(Activities.Constants.Templates.RequiredFieldsErrorMessage);
                eventContext.getFormContext().ui.setFormNotification(errorMessage, Activities.Constants.FormNotificationLevel.Error, Activities.Constants.Templates.RequiredFieldsErrorMessage);
                return;
            }
            // collect the inputted fields from the dialog
            var attributes = formContext.data.attributes;
            var templateName = attributes.get(Activities.Constants.Templates.TemplateNameId).getValue();
            var permissionLevel = attributes.get(Activities.Constants.Templates.PermissionLevelId).getValue();
            var language = attributes.get(Activities.Constants.Templates.LanguageId).getValue();
            var category = attributes.get(Activities.Constants.Templates.ParamCategory).getValue();
            var subject = attributes.get(Activities.Constants.Templates.ParamSubject) && attributes.get(Activities.Constants.Templates.ParamSubject).getValue();
            var body = attributes.get(Activities.Constants.Templates.ParamBody) && attributes.get(Activities.Constants.Templates.ParamBody).getValue();
            // start progress indicator
            var progressMessage = convertEmailToTemplate
                ? Activities.ClientApi.getResourceString(Activities.Constants.Templates.ConvertingEmailToTemplateProgressMessage)
                : Activities.ClientApi.getResourceString(Activities.Constants.Templates.CreatingTemplateProgressMessage);
            Xrm.Utility.showProgressIndicator(progressMessage);
            // create a template
            Xrm.WebApi.createRecord(Activities.Constants.EntityNames.Template, {
                title: templateName,
                ispersonal: permissionLevel,
                templatetypecode: category,
                languagecode: language,
                safehtml: body || "&nbsp;",
                subjectsafehtml: subject || "&nbsp;"
            }).then(function (templateRecord) {
                // successfully created new template
                attributes.get(Activities.Constants.Templates.ParamTemplateRecord).setValue(templateRecord);
                if (convertEmailToTemplate) {
                    // copy any attachments over to the email
                    _this.copySourceEntityAttachmentsToTemplate(eventContext, null, null, templateRecord);
                }
                else {
                    Xrm.Utility.closeProgressIndicator();
                    // not converting, close the dialog and open the template record
                    _this.closeDialog(eventContext);
                }
            }, function (errorResponse) {
                // report error to telemetry
                var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, "CreateOrConvertToTemplate");
                telemetryItem.traceEventError("Error creating template", errorResponse);
                telemetryItem.report();
                // end progress indicator and open alert dialog
                Xrm.Utility.closeProgressIndicator();
                _this.showAlertDialog(Activities.Constants.Templates.ErrorCreateTemplate);
            });
        };
        Template.cloneTemplateFromGallery = function (sourceTemplateInfo) {
            var _this = this;
            // creates a new template
            var select = "?$select=ispersonal,templatetypecode,languagecode,subjectsafehtml,safehtml";
            Xrm.WebApi.retrieveRecord(Activities.Constants.EntityNames.Template, sourceTemplateInfo.Id, select).then(function (record) {
                // Rmove data-slug span from safehtml and subjectsafehtml
                var processedHtml = record.safehtml ? _this.getHtmlBody(record.safehtml) : "&nbsp;";
                var processedSubjectHtml = record.subjectsafehtml ? _this.getHtmlBody(record.subjectsafehtml) : "&nbsp;";
                Xrm.WebApi.createRecord('template', {
                    title: sourceTemplateInfo.Title + " - " + Activities.ClientApi.getResourceString("TemplateCopyString"),
                    ispersonal: true,
                    templatetypecode: record.templatetypecode,
                    languagecode: record.languagecode,
                    safehtml: processedHtml,
                    subjectsafehtml: processedSubjectHtml
                }).then(function (targetTemplateRecord) {
                    _this.copySourceEntityAttachmentsToTemplate(null, sourceTemplateInfo.Id, Activities.Constants.EntityNames.Template, targetTemplateRecord);
                }, function (errorResponse) {
                    Xrm.Utility.closeProgressIndicator();
                });
            }, function () {
                Xrm.Utility.closeProgressIndicator();
            });
        };
        /**
         * Copies any attachments on the current email or template over to the new template
         * @param templateRecord a lookup for a template record
         */
        Template.copySourceEntityAttachmentsToTemplate = function (eventContext, sourceEntityId, sourceEntityName, templateRecord) {
            var _this = this;
            var attributes;
            if (eventContext) {
                attributes = eventContext.getFormContext().data.attributes;
                sourceEntityId = attributes.get(Activities.Constants.Templates.ParamEmailId) && attributes.get(Activities.Constants.Templates.ParamEmailId).getValue();
                sourceEntityName = Activities.Constants.EntityNames.Email;
                // if no email id then no attachments exist to be copied over, just return and close the dialog
                if (Activities.Common.Util.IsNullOrEmptyString(sourceEntityId)) {
                    Xrm.Utility.closeProgressIndicator();
                    this.closeDialog(eventContext);
                    return;
                }
            }
            var filter = "?$filter=objectid_" + sourceEntityName + "/" + (sourceEntityName == Activities.Constants.EntityNames.Email ? "activityid" : "templateid") + " eq " + sourceEntityId;
            Xrm.WebApi.retrieveMultipleRecords(Activities.Constants.EntityNames.ActivityMimeAttachment, filter).then(function (records) {
                var attachments = records && records.entities;
                if (attachments && attachments.length > 0) {
                    var filesToUpload_1 = attachments.length;
                    var filesFailedToCopy_1 = 0;
                    for (var _i = 0, attachments_1 = attachments; _i < attachments_1.length; _i++) {
                        var attachment = attachments_1[_i];
                        _this.copyAttachment(attachment, templateRecord).then(function () {
                            _this.checkAttachmentCopyProgress(eventContext, --filesToUpload_1, filesFailedToCopy_1, sourceEntityName, templateRecord);
                        }, function (errorResponse) {
                            // error copying over an attachment
                            _this.checkAttachmentCopyProgress(eventContext, --filesToUpload_1, ++filesFailedToCopy_1, sourceEntityName, templateRecord);
                            var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, "CopyEmailAttachmentsToTemplate");
                            telemetryItem.traceEventError("Error copying attachment from email to template", errorResponse);
                            telemetryItem.report();
                        });
                    }
                }
                else {
                    Xrm.Utility.closeProgressIndicator();
                    if (eventContext) {
                        _this.closeDialog(eventContext);
                    }
                    //open record here if no attachments for the template to template experience
                    if (sourceEntityName == Activities.Constants.EntityNames.Template) {
                        _this.openRecord(templateRecord);
                    }
                }
            }, function (errorResponse) {
                // error retrieving the attachments for the email
                Xrm.Utility.closeProgressIndicator();
                var telemetryItem = new TelemetryLogger.TelemetryItem(Activities.Constants.EntityNames.Template, "CopyEmailAttachmentsToTemplate");
                telemetryItem.traceEventError("Error retrieving attachments to copy over to template", errorResponse);
                telemetryItem.report();
                var closeDialogHandler = function () { _this.closeDialog(eventContext); };
                _this.showAlertDialog(Activities.Constants.Templates.ErrorRetrievingAttachmentsForTemplate, closeDialogHandler);
            });
        };
        /**
         * Copies an individual attachment to the provided entity record
         * @param attachment attachment to copy
         * @param record lookup to the record to copy the attachment to
         */
        Template.copyAttachment = function (attachment, record) {
            var attachmentCopy = {
                "activitysubject": attachment["activitysubject"],
                "body": attachment["body"],
                "filename": attachment["filename"],
                "mimetype": attachment["mimetype"],
                "attachmentcontentid": attachment["attachmentcontentid"],
                "objectid_template@odata.bind": "templates(" + record.id + ")",
                "objecttypecode": record.entityType
            };
            return Xrm.WebApi.createRecord(Activities.Constants.EntityNames.ActivityMimeAttachment, attachmentCopy);
        };
        /**
         * Checks the current copy progress of the attachments to see if it
         * @param filesRemaining
         * @param templateRecord
         */
        Template.checkAttachmentCopyProgress = function (eventContext, filesRemaining, filesFailedToCopy, sourceEntityName, templateRecord) {
            var _this = this;
            if (filesRemaining === 0) {
                // finished copying over all attachments
                Xrm.Utility.closeProgressIndicator();
                // handler for when all the attachments finish copying over.
                var attachmentCopyProgressFinished = function () {
                    if (eventContext) {
                        _this.closeDialog(eventContext);
                    }
                    else {
                        // only open the record if this was cloned from template gallery otherwise will cause unnecessary dialog on email to template conversion
                        // TODO Refactor so both pathways of email to template and clone template, operate after on dialog close
                        if (sourceEntityName == Activities.Constants.EntityNames.Template) {
                            _this.openRecord(templateRecord);
                        }
                    }
                };
                if (filesFailedToCopy > 0) {
                    // 1 or more files failed to copy over make user aware of this
                    this.showAlertDialog(Activities.Constants.Templates.ErrorCopyAttachmentsToTemplate, attachmentCopyProgressFinished);
                }
                else {
                    // TODO Refactor so both pathways of email to template and clone template, operate after on dialog close
                    attachmentCopyProgressFinished();
                }
            }
        };
        /**
         * Opens the form for the provided record
         * @param record a lookup for a template record
         */
        Template.openRecord = function (record) {
            var options = {
                pageType: 'entityrecord',
                entityName: record.entityType,
                entityId: record.id
            };
            Xrm.Navigation.openForm(options);
        };
        Template.onTemplateGalleryLoad = function (context) {
            var _this = this;
            var select = "?$select=safehtml, entityimage";
            Xrm.WebApi.retrieveMultipleRecords('template', select).then(function (result) {
                var promise = Promise.resolve();
                var _loop_1 = function (count) {
                    var templateEntity = result.entities[count];
                    if (!templateEntity.entityimage) {
                        promise = promise.then(function () {
                            return _this.setEntityImageForTemplate(templateEntity.templateid, templateEntity.safehtml);
                        });
                    }
                };
                for (var count = 0; count < result.entities.length; count++) {
                    _loop_1(count);
                }
            });
        };
        Template.htmlIsWhitespace = function (input) {
            var visible = [
                'img', 'iframe', 'object', 'hr',
                'audio', 'video',
                'form', 'button', 'input', 'select', 'textarea'
            ], container = document.createElement('div');
            container.innerHTML = input;
            return !(container.innerText.trim().length > 0 || container.querySelector(visible.join(',')));
        };
        Template.setEntityImageForTemplate = function (templateId, html) {
            if (!html || this.htmlIsWhitespace(html)) {
                var toUpdate = {
                    'entityimage': Activities.Constants.Templates.BlankTemplateBase64
                };
                return Xrm.WebApi.updateRecord('template', templateId, toUpdate);
            }
            else {
                var tempContainer = document.createElement('div');
                tempContainer.setAttribute("id", templateId + "-temporaryContainer");
                tempContainer.style.width = "auto";
                tempContainer.style.height = "auto";
                tempContainer.style.backgroundColor = "white";
                tempContainer.innerHTML = html;
                document.body.appendChild(tempContainer);
                return html2canvas(document.getElementById(templateId + "-temporaryContainer"), {
                    width: 600, height: 300, background: "white",
                }).then(function (canvas) {
                    var dataUrl = canvas.toDataURL('image/png', 1.0).replace(/^data:image\/png;base64,/, "");
                    var toUpdate = {
                        'entityimage': dataUrl
                    };
                    return Xrm.WebApi.updateRecord('template', templateId, toUpdate).then(function () {
                        document.body.removeChild(tempContainer);
                    }, function () {
                        document.body.removeChild(tempContainer);
                    });
                });
            }
        };
        Template.onGallerySelectClick = function (context, resultAttributeName) {
            var page = context.getFormContext();
            var resultAttribute = page.data.attributes.get(resultAttributeName);
            if (resultAttribute) {
                resultAttribute.setValue(true);
            }
            page.ui.close();
        };
        Template.onGalleryCancelClick = function (context, resultAttributeName) {
            var page = context.getFormContext();
            var resultAttribute = page.data.attributes.get(resultAttributeName);
            if (resultAttribute) {
                resultAttribute.setValue(false);
            }
            page.ui.close();
        };
        Template.onGalleryResultChanged = function (context, resultAttributeName) {
            var page = context.getFormContext();
            var resultAttribute = page.data.attributes.get(resultAttributeName);
            if (resultAttribute && resultAttribute.getValue() != null) {
                page.ui.close();
            }
        };
        Template.onGallerySelectedItemChanged = function (context, selectedItemAttributeName, selectButtonName) {
            var page = context.getFormContext();
            var selectedItemAttribute = page.data.attributes.get(selectedItemAttributeName);
            var selectButton = page.getControl(selectButtonName);
            if (selectedItemAttribute && selectButton) {
                selectButton.setDisabled(selectedItemAttribute.getValue() == null);
            }
        };
        /**
         * Validates whether or not to enable the Create or Convert button
         * @param eventContext
         */
        Template.validForCreateOrConvertTemplate = function (eventContext) {
            var formContext = eventContext.getFormContext();
            var attributes = formContext && formContext.data.attributes;
            var templateName = attributes.get(Activities.Constants.Templates.TemplateNameId).getValue();
            var category = attributes.get(Activities.Constants.Templates.ParamCategory).getValue();
            return !Activities.Common.Util.IsNullOrEmptyString(templateName) && !Activities.Common.Util.IsNullOrUndefined(category);
        };
        return Template;
    }(Activities.ActivityPageHandler));
    Template.insertInProgress = false;
    Template.ckeditorMap = new Map();
    Template.editorTimeout = 500;
    Template.numberOfCkeditor = 2;
    Activities.Template = Template;
})(Activities || (Activities = {}));
//# sourceMappingURL=Template.js.map