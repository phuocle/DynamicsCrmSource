Type.registerNamespace("Mscrm");
Mscrm.RecurringAppointment = function() {};
Mscrm.RecurringAppointment.doRecurrenceAction = function() {
    Mscrm.RecurringAppointment.openRecurringAppointmentForm(Mscrm.RecurringAppointment.$1)
};
Mscrm.RecurringAppointment.canEnableEditSeries = function() {
    var $v_0 = null;
    $v_0 = Xrm.Page.data.entity.attributes.get("seriesid");
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (!IsNull($v_1)) Mscrm.RecurringAppointment.$1 = $v_1.toString()
    }
    return !isNullOrEmptyString(Mscrm.RecurringAppointment.$1)
};
Mscrm.RecurringAppointment.openRecurringAppointmentForm = function(id) {
    if (!IsNull(id) && id !== "") {
        Xrm.Utility.openEntityForm("recurringappointmentmaster", id, null);
        return
    }
    var $v_0 = Mscrm.RecurringAppointment.$5(), $v_1 = Xrm.Page.getAttribute("scheduledstart");
    $v_0["patternstartdate"] = $v_1.getValue();
    var $v_2 = Mscrm.Utilities.createCallbackFunctionObject("recurrenceDialogCallback",
        Mscrm.RecurringAppointment,
        null,
        false);
    Mscrm.RecurrenceDialogLoader.displayRecurrenceDialog(4251, id, true, false, $v_0, $v_2)
};
Mscrm.RecurringAppointment.recurrenceDialogCallback = function(recurrenceValues) {
    if (IsNull(recurrenceValues)) return;
    try {
        if (!Xrm.Page.data.getIsValid()) return
    } catch ($$e_1) {
        return
    }
    var $v_0 = recurrenceValues, $v_1 = Mscrm.RecurringAppointment.$6($v_0), $v_2 = "recurringAppointmentFormData";
    try {
        var $v_6 = Mscrm.CrmLocalStorage.getItem($v_2);
        $v_6 && Mscrm.CrmLocalStorage.removeItem($v_2);
        Mscrm.CrmLocalStorage.setItem($v_2, $v_1)
    } catch ($$e_6) {
        Mscrm.CrmLocalStorage.setItem($v_2, $v_1)
    }
    var $v_3 = Xrm.Page.getAttribute("seriesid"), $v_4 = $v_3.getValue(), $v_5 = {};
    $v_5[$v_2] = true;
    Xrm.Page.data.setFormDirty(false);
    Xrm.Utility.openEntityForm("recurringappointmentmaster", $v_4, $v_5)
};
Mscrm.RecurringAppointment.$0 = function($p0) {
    var $v_0 = $get("divProgress");
    if (IsNull($v_0)) return;
    $v_0.style.zIndex = 100;
    $v_0.style.display = $p0 ? "inline" : "none"
};
Mscrm.RecurringAppointment.$5 = function() {
    var $v_0 = {},
        $v_1 = Xrm.Page.getAttribute("scheduledstart"),
        $v_2 = Xrm.Page.getAttribute("scheduledend"),
        $v_3 = Xrm.Page.getAttribute("scheduleddurationminutes");
    $v_0["starttime"] = $v_1.getValue();
    $v_0["endtime"] = $v_2.getValue();
    $v_0["duration"] = $v_3.getValue();
    return $v_0
};
Mscrm.RecurringAppointment.initializeRecurringAppointmentForm = function() {
    var $v_0 = $find("crmForm");
    $v_0.add_onSave(Mscrm.RecurringAppointment.SaveEventHandler);
    var $v_1 = window.self._recurrenceUpdated;
    !IsNull($v_1) && $v_1 && Mscrm.RecurringAppointment.$7()
};
Mscrm.RecurringAppointment.$7 = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("recurrencepatterntype");
    $v_0.set_defaultValue("-1")
};
Mscrm.RecurringAppointment.$6 = function($p0) {
    for (var $v_0 = Mscrm.RecurrenceProperties.allProperties,
        $v_1 = "recurringappointmentmaster",
        $v_2 = Mscrm.Utilities.getAttributeXmlForEntity($v_1),
        $v_3 = XUI.Xml.LoadXml($v_2),
        $v_4 = XUI.Xml.SelectSingleNode($v_3, "/" + $v_1, null),
        $v_5 = 0;
        $v_5 < $v_0.length;
        $v_5++) {
        var $v_6 = $v_0[$v_5], $v_7 = $p0[$v_6];
        if (!IsNull($v_7)) {
            var $v_8 = $p0[$v_6].toString();
            if (!IsNull($v_8) && $v_8 !== "") {
                var $v_9 = $v_3.createElement($v_6);
                $v_9.appendChild($v_3.createTextNode($v_8));
                $v_4.appendChild($v_9)
            }
        }
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_3)
};
Mscrm.RecurringAppointment.SaveEventHandler = function($p0, $p1) {
    Mscrm.RecurringAppointment.$0(true);
    Mscrm.RecurringAppointment.$8($p0, $p1);
    Mscrm.RecurringAppointment.$0(false)
};
Mscrm.RecurringAppointment.$8 = function($p0, $p1) {
    var $v_0 = window._appointId;
    Mscrm.RecurringAppointment.$4();
    if (!IsNull($v_0)) Mscrm.RecurringAppointment.$3($v_0, $p1);
    else CustomFormSubmit($p0, $p1)
};
Mscrm.RecurringAppointment.$4 = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("instance");
    !IsNull($v_0) && $v_0.get_dataValue() === "-1" && $v_0.set_dataValue("")
};
Mscrm.RecurringAppointment.$3 = function($p0, $p1) {
    var $v_0 = $find("crmForm"), $v_1 = $v_0.BuildXml(false, false, false, false, false);
    if ($v_1 === 1) {
        var $v_2 = $get("crmFormSubmitXml");
        if (!IsNull($v_2) && !IsNull($v_2.value)) {
            var $v_3 = $v_2.value;
            $p1.preventDefault();
            var $v_4 = $p1.getSaveMode(), $v_5 = new RemoteCommand("ActivitiesWebService", "AddRecurrence", null);
            $v_5.SetXmlParameter("content", $v_3);
            $v_5.SetParameter("oldAppointmentId", $p0);
            $v_5.ErrorHandler = Mscrm.RecurringAppointment.$2;
            var $v_6 = $v_5.Execute(null);
            if (!IsNull($v_6) && !IsNull($v_6.Success) && $v_6.Success) {
                var $v_7 = $v_6.ReturnValue;
                $v_0.detachCloseAlert();
                var $v_8 = String.format("/activities/recurringappointmentmaster/edit.aspx"),
                    $v_9 = Mscrm.CrmUri.create($v_8);
                $v_9.get_query()["id"] = $v_7;
                $v_9.get_query()["pagemode"] = "iframe";
                var $v_A = parseInt(window._iActivityTypeCode, 10);
                Mscrm.RecurrenceUtil.refreshRelatedParentGrids($v_A);
                if ($v_4 === 2) closeWindow();
                else window.location.href = $v_9.toString();
                return
            }
        }
    }
};
Mscrm.RecurringAppointment.$2 = function($p0, $p1) {
    Mscrm.RecurringAppointment.$0(false);
    Mscrm.RecurrenceUtil.handleError($p0)
};
Mscrm.RecurringAppointment.endSeriesClick = function(entityType, entityId) {
    var $v_0 = new Array(1);
    $v_0[0] = entityType;
    var $v_1 = Mscrm.Utilities.createCallbackFunctionObject("endSeriesClickAction",
        Mscrm.RecurringAppointment,
        $v_0,
        false);
    Mscrm.RecurrenceUtil.endSeries(entityType, entityId, $v_1)
};
Mscrm.RecurringAppointment.endSeriesClickAction = function(endSeriesSuccessful, entityType) {
    if (endSeriesSuccessful) {
        Mscrm.RecurrenceUtil.refreshRelatedParentGrids(entityType);
        var $v_0 = { count: 2 };
        getPageManager().raiseEvent(18, $v_0)
    }
};
Mscrm.RecurringAppointment.formSaveErrorHandler = function(errCode, eventType, url) {
    Mscrm.RecurringAppointment.$0(false);
    return Mscrm.RecurrenceUtil.formSaveErrorHandler(errCode, eventType, url)
};
Mscrm.RecurringAppointment.remoteCommandErrorHandler = function(hResult, oXmlNode) {
    Mscrm.RecurringAppointment.$0(false);
    Mscrm.RecurrenceUtil.remoteCommandErrorHandler(hResult, oXmlNode)
};
Mscrm.RecurringAppointment.cancelScheduleHandler = function() { Mscrm.RecurringAppointment.$0(false) };
Mscrm.RecurringAppointment.registerClass("Mscrm.RecurringAppointment");
Mscrm.RecurringAppointment.$1 = null