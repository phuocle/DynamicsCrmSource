
var bUseEngine = true,
    bCloseForm = false,
    bSaveInProgress = false,
    bSaveAndNew = false;

function CustomFormSubmit(sender, args) {
    var oCrmFormSubmit = $get("crmFormSubmit"),
        entityType = oCrmFormSubmit.crmFormSubmitObjectTypeName.value;
    if (IsNull(args.get_isCalledFromSubmitCrmForm()) &&
        (entityType == "appointment" || entityType == "serviceappointment"))
        return;
    if (bSaveInProgress || args.isDefaultPrevented()) {
        args.preventDefault();
        return
    }
    var mode = args.getSaveMode();
    bCloseForm = mode == 2;
    bSaveAndNew = mode == 59;
    var isPreventDefault = true,
        isNew = oCrmFormSubmit.crmFormSubmitId.value == "",
        callbackReference = null;
    if (!IsOnline())
        bUseEngine = false;
    if (bUseEngine)
        if (mode == 1 || mode == 2 || mode == 59) {
            var crmNotifications = $find("crmNotifications"),
                iStatus = $find("crmForm").BuildXml(false, !isNew),
                parameters = [args, mode, url, pageMode, etc, oCrmFormSubmit],
                url = Mscrm.CrmUri.create(location.href),
                pageMode = url.get_query()["pagemode"],
                etc = url.get_query()["etc"];
            delete url.get_query()["mode"];
            if (iStatus == 1)
                if (_bAllowSchedule) {
                    var command;
                    bSaveInProgress = true;
                    if (isNew)
                        command = GetRemoteCommandObject("ActivitiesWebService", "Book");
                    else {
                        command = GetRemoteCommandObject("ActivitiesWebService", "Reschedule");
                        command.SetParameter("id", oCrmFormSubmit.crmFormSubmitId.value)
                    }
                    command.SetXmlParameter("content", oCrmFormSubmit.crmFormSubmitXml.value);
                    command.SetParameter("typeCode", _iActivityTypeCode);
                    var oResult = command.Execute();
                    bSaveInProgress = false;
                    if (oResult.Success)
                        if (oResult.ReturnValue.OperationSuccess) {
                            if (isNew) {
                                url.clearQuery();
                                url.get_query()["id"] = oResult.ReturnValue.Id
                            } else {
                                delete url.get_query()["mode"];
                                delete url.get_query()["preloadcache"];
                                if (typeof _redirectNewUrlOnUpdate != "undefined" &&
                                    !IsNull(_redirectNewUrlOnUpdate) &&
                                    _redirectNewUrlOnUpdate) {
                                    url.clearQuery();
                                    url.get_query()["id"] = oResult.ReturnValue.Id
                                }
                            }
                            $find("crmForm").detachCloseAlert();
                            if (!bCloseForm && !bSaveAndNew) {
                                url.get_query()["pagemode"] = pageMode;
                                url.get_query()["etc"] = etc;
                                delete url.get_query()["loadDialog"];
                                window.location.href = url.toString()
                            }
                            RefreshRelatedGrids(_iActivityTypeCode, oResult.ReturnValue.Id)
                        } else {
                            var notification = oResult.ReturnValue.Notifications.Notification,
                                aNotifications = [],
                                oNotification,
                                arguments;
                            if (!isArray(notification))
                                if (notification == null) {
                                    var oaNotifications = new
                                        Array(crmNotifications
                                            .CreateNotification("guid", 1, "strategy", LOCID_GENERIC_SERVER_ERROR));
                                    crmNotifications.SetNotifications(oaNotifications, "strategy")
                                } else {
                                    arguments = notification;
                                    oNotification = crmNotifications
                                        .CreateNotification(arguments.Id,
                                            arguments.Severity,
                                            arguments.Source,
                                            arguments.Text);
                                    aNotifications.push(oNotification);
                                    crmNotifications.SetNotifications(aNotifications, arguments.Source)
                                }
                            else {
                                for (var i = 0; i < notification.length; i++) {
                                    arguments = notification[i];
                                    oNotification = crmNotifications
                                        .CreateNotification(arguments.Id,
                                            arguments.Severity,
                                            arguments.Source,
                                            arguments.Text);
                                    aNotifications.push(oNotification)
                                }
                                crmNotifications.SetNotifications(aNotifications, "strategy")
                            }
                            callbackReference = Mscrm.Utilities
                                .createCallbackFunctionObject("callBackFunction", this, parameters, false);
                            isPreventDefault = ShowNotificationDialog(callbackReference)
                        }
                    else if (typeof _useCustomRCErrorHandler == "undefined" ||
                        IsNull(_useCustomRCErrorHandler) ||
                        !_useCustomRCErrorHandler) {
                        var oaNotifications = new Array(crmNotifications
                            .CreateNotification("guid", 1, "strategy", LOCID_GENERIC_SERVER_ERROR));
                        crmNotifications.SetNotifications(oaNotifications, "strategy");
                        callbackReference = Mscrm.Utilities
                            .createCallbackFunctionObject("callBackFunction", this, parameters, false);
                        isPreventDefault = ShowNotificationDialog(callbackReference)
                    } else {
                        bCloseForm = false;
                        bSaveAndNew = false
                    }
                } else {
                    var oaNotifications = new Array(crmNotifications
                        .CreateNotification("Cannot_Validate_Activity",
                            1,
                            "PrivilegeCheck",
                            LOCID_CANNOT_VALIDATE_APPT));
                    crmNotifications.SetNotifications(oaNotifications, "PrivilegeCheck");
                    callbackReference = Mscrm.Utilities
                        .createCallbackFunctionObject("callBackFunction", this, parameters, false);
                    isPreventDefault = ShowNotificationDialog(callbackReference)
                }
            else if (iStatus == 2) {
                bCloseForm = false;
                bSaveAndNew = false
            }
        }
    if (IsNull(callbackReference))
        callBackFunction(isPreventDefault, args, mode, url, pageMode, etc, oCrmFormSubmit);
    else
        args.preventDefault()
}

function callBackFunction(isPreventDefault, args, mode, url, pageMode, etc, oCrmFormSubmit) {
    if (bUseEngine)
        if (mode == 1 || mode == 2 || mode == 59) {
            bCloseForm &&
                closeMainWindow();
            if (bSaveAndNew) {
                url = Mscrm.CrmUri.create("/userdefined/edit.aspx");
                url.get_query()["pagemode"] = pageMode;
                url.get_query()["etc"] = etc;
                delete url.get_query()["mode"];
                window.location.href = url.toString()
            }
            isPreventDefault &&
                args.preventDefault()
        }
    if (!isPreventDefault) {
        var oUrl = Mscrm.CrmUri.create(window.location.href);
        delete oUrl.get_query()["loadDialog"];
        delete oUrl.get_query()["autoSearch"];
        delete oUrl.get_query()["_StartTime"];
        delete oUrl.get_query()["mode"];
        if (mode == 6)
            oUrl.get_query()["mode"] = "reactivate";
        oCrmFormSubmit.action = oUrl.toString();
        var crmFormCtrl = $find("crmForm");
        crmFormCtrl.SubmitAfterSave(mode, false, false, false)
    }
}

function closeMainWindow() {
    closeWindow()
}

function ShowNotificationDialog(callbackReference) {
    bCloseForm = false;
    bSaveAndNew = false;
    var isPreventDefault = true,
        sResult = "Save",
        oNotifications = SeveritySetNotifications();
    if (oNotifications.length > 0) {
        var oUrl = Mscrm.CrmUri.create("/SM/ActivityScheduling/SchedulingNotificationsDialog.aspx?activityType=" +
            _iActivityTypeCode);
        if (_bEnableSchedulingDialog)
            oUrl.get_query()["AllowSchedule"] = "true";
        var parameters = [callbackReference, isPreventDefault],
            crmDialog = new Mscrm.CrmDialog(oUrl, oNotifications, 600, 300, null);
        crmDialog.setCallbackInfo("performActionAfterSND", this, parameters);
        return crmDialog.show()
    }
    return isPreventDefault
}

function performActionAfterSND(sResult, callbackReference, isPreventDefault) {
    switch (sResult) {
    case "Save":
        bUseEngine = false;
        isPreventDefault = false;
        Mscrm.Utilities.executeFunction(callbackReference, isPreventDefault);
        break;
    case "Cancel":
        CancelSchedule();
        Mscrm.Utilities.executeFunction(callbackReference, isPreventDefault);
        break;
    case "Schedule":
        isPreventDefault = false;
        ScheduleActivity($get("crmFormSubmit").crmFormSubmitId.value,
            _iActivityTypeCode,
            callbackReference,
            isPreventDefault);
        break
    }
    return isPreventDefault
}

function Reactivate(entityName) {
    var token = GetTokenAsQS(Mscrm.CrmUri.create("/activities/" + entityName + "/edit.aspx"));
    location.search = "?id=" + $get("crmFormSubmit").crmFormSubmitId.value + "&mode=reactivate&" + token
}

function SeveritySetNotifications() {
    for (var crmNotifications = $find("crmNotifications"),
        eNotifications = [],
        aNotifications = crmNotifications.GetNotifications(),
        i = 0;
        i < aNotifications.length;
        i++) {
        var aNote = aNotifications[i];
        (aNote.Severity == Mscrm.Severity.SEVERITYERROR ||
                aNote.Severity == Mscrm.Severity.SEVERITYWARNING ||
                aNote.Severity == Mscrm.Severity.SEVERITYINFORMATION) &&
            eNotifications.push(aNote)
    }
    return eNotifications
}

function GetRemoteCommandObject(sObject, sCommand) {
    var command = new RemoteCommand(sObject, sCommand);
    if (typeof _useCustomRCErrorHandler != "undefined" && !IsNull(_useCustomRCErrorHandler) && _useCustomRCErrorHandler)
        if (typeof customRemoteCommandErrorHandler == "function")
            command.ErrorHandler = customRemoteCommandErrorHandler;
    return command
}

function RefreshRelatedGrids(activityTypeCode, entityId) {
    if (isOutlookHostedWindow())
        getOutlookHostedWindow().notifyItemChanged(activityTypeCode, entityId);
    else if (typeof customGridRefreshHandler == "function")
        customGridRefreshHandler(activityTypeCode);
    else
        RefreshParentGrid(_iActivityTypeCode, entityId)
}

function CancelSchedule() {
    typeof cancelScheduleHandler == "function" &&
        cancelScheduleHandler()
}