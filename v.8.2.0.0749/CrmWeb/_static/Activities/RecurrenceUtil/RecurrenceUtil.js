Type.registerNamespace("Mscrm");
Mscrm.RecurrenceUtil = function() {};
Mscrm.RecurrenceUtil.addCustomFormSaveErrorHandler = function() {
    customErrorHandler = Mscrm.RecurrenceUtil.formSaveErrorHandler
};
Mscrm.RecurrenceUtil.addCustomRemoteCommandErrorHandler = function() {
    customRemoteCommandErrorHandler = Mscrm.RecurrenceUtil.remoteCommandErrorHandler
};
Mscrm.RecurrenceUtil.addCustomGridRefreshHandler = function() {
    customGridRefreshHandler = Mscrm.RecurrenceUtil.refreshRelatedParentGrids
};
Mscrm.RecurrenceUtil.formSaveErrorHandler = function(errCode, eventType, url) {
    var $v_0 = errCode.toString();
    if (Mscrm.RecurrenceUtil.$0($v_0)) {
        Mscrm.RecurrenceUtil.handleError($v_0);
        return true
    }
    return false
};
Mscrm.RecurrenceUtil.remoteCommandErrorHandler = function(hResult, oXmlNode) {
    var $v_0 = hResult;
    if (!IsNull(oXmlNode)) {
        var $v_1 = XUI.Xml.SelectSingleNode(oXmlNode, "error/description", null);
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Xml.GetText($v_1);
            Mscrm.RecurrenceUtil.handleErrorWithMessage($v_0, $v_2);
            return
        }
    }
    Mscrm.RecurrenceUtil.handleError($v_0)
};
Mscrm.RecurrenceUtil.$0 = function($p0) {
    if ($p0.startsWith("0x8004E")) return true;
    return false
};
Mscrm.RecurrenceUtil.handleError = function(errorCode) { Mscrm.RecurrenceUtil.handleErrorWithMessage(errorCode, null) };
Mscrm.RecurrenceUtil.handleErrorWithMessage = function(errorCode, errorValue) {
    if (Mscrm.RecurrenceUtil.$0(errorCode))
        switch (errorCode) {
        case "0x8004E108":
            break;
        case "0x8004E121":
            break;
        case "0x8004E117":
            break;
        case "0x8004E123":
            break;
        case "0x8004E122":
            break;
        case "0x8004E113":
            break;
        default:
            errorCode = "0x8004E100";
            break
        }
    openErrorDlg(errorCode, CrmEncodeDecode.CrmHtmlEncode(errorValue), null, 0, 0)
};
Mscrm.RecurrenceUtil.refreshForm = function() {
    var $v_0 = $find("crmForm");
    !IsNull($v_0) && $v_0.detachCloseAlert();
    var $v_1 = window.location.href;
    window.location.href = $v_1
};
Mscrm.RecurrenceUtil.setNotificationsForRecurrence = function(id, severity, source, notificationText) {
    var $v_0 = $find("crmNotifications");
    if (!IsNull($v_0)) {
        for (var $v_1 = $v_0
                     .GetNotifications(),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) if ($v_1[$v_2].Text === notificationText) return;
        $v_0.AddNotification(id, severity, source, notificationText)
    }
};
Mscrm.RecurrenceUtil.endSeries = function(entityType, entityId, callbackFunc) {
    var $v_0 = String.format("/activities/act_dlgs/dlg_seriesaction.aspx?actionType=1"),
        $v_1 = parseInt(window.LOCID_ENDSERIESDLG_HEIGHT, 10),
        $v_2 = parseInt(window.LOCID_ENDSERIESDLG_WIDTH, 10),
        $v_3 = [callbackFunc, entityType, entityId],
        $v_4 = new Mscrm.CrmDialog(Mscrm.CrmUri.create($v_0), null, $v_2, $v_1, "scroll:no");
    $v_4.setCallbackInfo("performActionAfterEndSeries", Mscrm.RecurrenceUtil, $v_3);
    $v_4.show()
};
Mscrm.RecurrenceUtil.performActionAfterEndSeries = function(returnValue, callbackFunc, entityType, entityId) {
    if (!IsNull(returnValue)) {
        var $v_0 = returnValue;
        if (!IsNull($v_0["EndSeriesDate"])) {
            var $v_1 = new Date($v_0["EndSeriesDate"]);
            $v_1 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate(), 23, 59, 59);
            var $v_2 = $v_0["StateOfPastInstances"],
                $v_3 = new
                    RemoteCommand("ActivitiesWebService", "EndSeries", null);
            $v_3.SetParameter("objectId", entityId);
            $v_3.SetParameter("seriesEndDate", FormatDateTime($v_1));
            $v_3.SetParameter("stateOfPastInstances", $v_2);
            $v_3.SetParameter("objectTypeCode", entityType.toString());
            $v_3.Execute(null);
            Mscrm.Utilities.executeFunction(callbackFunc, true);
            return true
        }
    }
    return false
};
Mscrm.RecurrenceUtil.refreshRelatedParentGrids = function(entityType) {
    var $v_0 = {};
    $v_0["4251"] = [4251, 4201, 4200];
    $v_0["4201"] = [4201, 4200];
    var $v_1 = $v_0[entityType.toString()];
    if (!IsNull($v_1))
        try {
            var $v_2 = window.top.opener.parent.frames, $v_3 = null;
            if (IsNull($v_2) || IsNull($v_2["contentIFrame"])) $v_3 = window.top.opener.parent;
            else $v_3 = $v_2["contentIFrame"];
            for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) $v_3.auto($v_1[$v_4])
        } catch ($$e_6) {
        }
};
Mscrm.RecurrenceUtil.registerClass("Mscrm.RecurrenceUtil")