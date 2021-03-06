Type.registerNamespace("Mscrm");
Mscrm.AppointmentMainSystemLibraryWebResource = function() {};
Mscrm.AppointmentMainSystemLibraryWebResource.Form_onload = function() {
    var $v_0 = null;
    $v_0 = Xrm.Page.data.entity.attributes.get("seriesid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        try {
            Xrm.Page.ui.refreshRibbon();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                Mscrm.AppointmentMainSystemLibraryWebResource.$1 = false;
                window.setTimeout(Mscrm.AppointmentMainSystemLibraryWebResource.hideAttachmentsGridSection, 1e3)
            }
        } catch ($$e_2) {
        }
    }
    if (Xrm.Internal.isEnabledForInteractionCentric() &&
        Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Page.ui.getFormType() !== 2) {
        var $v_2 = Xrm.Page.ui.controls.get("subject");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !$v_2.getDisabled() && $v_2.setFocus()
    }
    Mscrm.EntityPageHandlerFactory.create();
    Mscrm.AppointmentNotifications.registerExchangeSyncNotifications();
    Mscrm.CommandBarActions.initDates()
};
Mscrm.AppointmentMainSystemLibraryWebResource
    .doRecurrenceAction = function() {
        Mscrm.AppointmentMainSystemLibraryWebResource
            .openRecurringAppointmentForm(Mscrm.AppointmentMainSystemLibraryWebResource.$3)
    };
Mscrm.AppointmentMainSystemLibraryWebResource.openRecurringAppointmentForm = function(id) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(id) && id !== "") {
        Xrm.Utility.openEntityForm("recurringappointmentmaster", id, null);
        return
    }
    var $v_0 = Mscrm.AppointmentMainSystemLibraryWebResource.$A(), $v_1 = Xrm.Page.getAttribute("scheduledstart");
    $v_0["patternstartdate"] = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue())
        ? $v_1.getValue().toString()
        : null;
    var $v_2 = [$v_0],
        $v_3 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.AppointmentMainSystemLibraryWebResource
                .recurrenceDialogCallback,
                $v_2);
    Mscrm.CommandBarActions.displayRecurrenceDialog(4251, id, true, false, $v_0, $v_3)
};
Mscrm.AppointmentMainSystemLibraryWebResource.$A = function() {
    var $v_0 = {},
        $v_1 = Xrm.Page.getAttribute("scheduledstart"),
        $v_2 = Xrm.Page.getAttribute("scheduledend"),
        $v_3 = Xrm.Page.getAttribute("scheduleddurationminutes");
    $v_0["starttime"] = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue())
        ? $v_1.getValue().toString()
        : null;
    $v_0["endtime"] = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2.getValue())
        ? $v_2.getValue().toString()
        : null;
    $v_0["duration"] = $v_3.getValue();
    return $v_0
};
Mscrm.AppointmentMainSystemLibraryWebResource.recurrenceDialogCallback = function(recurrenceValues) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(recurrenceValues)) return;
    try {
        if (!Xrm.Page.data.getIsValid()) return
    } catch ($$e_1) {
        return
    }
    var $v_0 = recurrenceValues,
        $v_1 = Mscrm.AppointmentMainSystemLibraryWebResource.$B($v_0),
        $v_2 = "recurringAppointmentFormData";
    try {
        var $v_6 = Xrm.Internal.getLocalStorageItem($v_2);
        $v_6 && Xrm.Internal.removeLocalStorageItem($v_2);
        Xrm.Internal.setLocalStorageItem($v_2, $v_1)
    } catch ($$e_6) {
        Xrm.Internal.setLocalStorageItem($v_2, $v_1)
    }
    var $v_3 = Xrm.Page.getAttribute("seriesid"), $v_4 = $v_3.getValue(), $v_5 = {};
    $v_5[$v_2] = true;
    Xrm.Page.data.setFormDirty(false);
    Xrm.Utility.openEntityForm("recurringappointmentmaster", $v_4, $v_5)
};
Mscrm.AppointmentMainSystemLibraryWebResource.$B = function($p0) {
    for (var $v_0 = Mscrm.AppointmentMainSystemLibraryWebResource.$5,
        $v_1 = "recurringappointmentmaster",
        $v_2 = Mscrm.AppointmentMainSystemLibraryWebResource.$8($v_1),
        $v_3 = XUI.Xml.LoadXml($v_2),
        $v_4 = XUI.Xml.SelectSingleNode($v_3, " / " + $v_1, null),
        $v_5 = 0;
        $v_5 < $v_0.length;
        $v_5++) {
        var $v_6 = $v_0[$v_5], $v_7 = $p0[$v_6];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7)) {
            var $v_8 = $p0[$v_6].toString();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8 !== "") {
                var $v_9 = $v_3.createElement($v_6);
                $v_9.appendChild($v_3.createTextNode($v_8));
                $v_4.appendChild($v_9)
            }
        }
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_3).toString()
};
Mscrm.AppointmentMainSystemLibraryWebResource.$8 = function($p0) {
    var $v_0 = XUI.Xml.CreateDocument(), $v_1 = $v_0.createElement($p0);
    Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1) {
        var $v_2 = $p1_0.getName(), $v_3 = $p1_0.getValue(), $v_4 = $p1_0.getAttributeType();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            var $v_5 = null;
            if ($v_4 === "lookup") {
                $v_5 = $v_0.createElement($v_2 + "s");
                for (var $v_6 = $v_3, $v_7 = 0; $v_7 < $v_6.length; $v_7++) {
                    var $v_8 = $v_0.createElement($v_2), $v_9 = $v_0.createAttribute("id");
                    $v_9.value = $v_6[$v_7].id;
                    var $v_A = $v_0.createAttribute("name");
                    $v_A.value = $v_6[$v_7].name;
                    var $v_B = $v_0.createAttribute("entityType");
                    $v_B.value = $v_6[$v_7].entityType;
                    $v_8.attributes.setNamedItem($v_9);
                    $v_8.attributes.setNamedItem($v_A);
                    $v_8.attributes.setNamedItem($v_B);
                    $v_5.appendChild($v_8)
                }
            } else {
                $v_5 = $v_0.createElement($v_2);
                $v_5.appendChild($v_0.createTextNode($v_3.toString()))
            }
            $v_1.appendChild($v_5)
        }
    });
    $v_0.appendChild($v_1);
    return XUI.Xml.XMLSerializer.serializeToString($v_0).toString()
};
Mscrm.AppointmentMainSystemLibraryWebResource.canEnableEditSeries = function() {
    var $v_0 = null;
    $v_0 = Xrm.Page.data.entity.attributes.get("seriesid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            Mscrm.AppointmentMainSystemLibraryWebResource.$3 = $v_1.toString()
    }
    return !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.AppointmentMainSystemLibraryWebResource.$3)
};
Mscrm.AppointmentMainSystemLibraryWebResource.Isalldayevent_onchange = function() {
    Xrm.Page.data.entity.attributes.get("scheduledstart").setSubmitMode("always");
    Xrm.Page.data.entity.attributes.get("scheduledend").setSubmitMode("always")
};
Mscrm.AppointmentMainSystemLibraryWebResource.hideAttachmentsGridSection = function() {
    if (!Mscrm.AppointmentMainSystemLibraryWebResource.$1 && Xrm.Page.ui) {
        var $v_0 = Xrm.Page.ui.controls.get("attachmentsGrid");
        if ($v_0) {
            $v_0.getParent().setVisible(false);
            Mscrm.AppointmentMainSystemLibraryWebResource.$1 = true
        }
    }
};
Mscrm.AppointmentNotifications = function() {};
Mscrm.AppointmentNotifications.showExchangeSyncNotifications = function() { Mscrm.AppointmentNotifications.$D() };
Mscrm.AppointmentNotifications.registerExchangeSyncNotifications = function() {
    var $v_0 = function($p1_0) { Mscrm.AppointmentNotifications.showExchangeSyncNotifications() },
        $v_1 = Xrm.Page.getAttribute("organizer");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.addOnChange($v_0);
    var $v_2 = Xrm.Page.getAttribute("requiredattendees");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.addOnChange($v_0);
    var $v_3 = Xrm.Page.getAttribute("optionalattendees");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.addOnChange($v_0)
};
Mscrm.AppointmentNotifications.$D = function() {
    if (Mscrm.AppointmentNotifications
        .$6("requiredattendees") ||
        Mscrm.AppointmentNotifications
        .$6("optionalattendees"))
        Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync(Mscrm.AppointmentNotifications.$7);
    else Mscrm.AppointmentNotifications.$7(false)
};
Mscrm.AppointmentNotifications.$6 = function($p0) {
    var $v_0 = Xrm.Page.getAttribute($p0);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return false;
    var $v_1 = $v_0.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) return false;
    for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        if ($v_2.entityType !== "systemuser") return true
    }
    return false
};
Mscrm.AppointmentNotifications.$7 = function($p0) {
    var $v_0 = "appointment_exchange_sync_privacy_notification";
    if ($p0)
        Xrm.Page.ui.setFormNotification(Xrm.Internal.getResourceString("LOCID_EXSYNC_APPT_PRIVACY_WARN"),
            "WARNING",
            $v_0);
    else Xrm.Page.ui.clearFormNotification($v_0)
};
Mscrm.AppointmentNotifications.AppointmentOrganizer = function() {};
Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync = function($p0) {
    var $v_0 = Mscrm.AppointmentNotifications.AppointmentOrganizer.$9();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) $p0(false);
    else if ($v_0 === Mscrm.AppointmentNotifications.AppointmentOrganizer.$4
    ) $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$2);
    else
        Mscrm.AppointmentNotifications.AppointmentOrganizer.$C($v_0).then(function($p1_0) {
                var $v_1 = $p1_0.entityCollection.get_count() > 0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$4 = $v_0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = $v_1;
                $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$2)
            },
            function($p1_0) { $p0(true) })
};
Mscrm.AppointmentNotifications.AppointmentOrganizer.$9 = function() {
    var $v_0 = Xrm.Page.getAttribute("organizer");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return null;
    var $v_1 = $v_0.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || $v_1.length < 1) return null;
    return $v_1[0].id
};
Mscrm.AppointmentNotifications.AppointmentOrganizer.$C = function($p0) {
    var $v_0 = String
        .format("<fetch mapping='logical'><entity name='mailbox'><attribute name='mailboxid'/><filter type='and'><condition attribute='regardingobjectid' operator='eq' value='{0}'/><condition attribute='actdeliverymethod' operator='eq' value='1'/></filter></entity></fetch>", CrmEncodeDecode.CrmXmlEncode($p0));
    return Xrm.Internal.messages.retrieveMultiple($v_0)
};
Mscrm.AppointmentMainSystemLibraryWebResource.registerClass("Mscrm.AppointmentMainSystemLibraryWebResource");
Mscrm.AppointmentNotifications.registerClass("Mscrm.AppointmentNotifications");
Mscrm.AppointmentNotifications.AppointmentOrganizer
    .registerClass("Mscrm.AppointmentNotifications.AppointmentOrganizer");
Mscrm.AppointmentMainSystemLibraryWebResource.$1 = false;
Mscrm.AppointmentMainSystemLibraryWebResource.$3 = null;
Mscrm.AppointmentMainSystemLibraryWebResource.$5 = [
    "endtime", "interval", "monthofyear", "effectiveenddate", "daysofweekmask", "starttime", "occurrences",
    "isnthmonthly", "isnthyearly", "isweekdaypattern", "effectivestartdate", "dayofmonth", "isregenerate", "duration",
    "recurrencepatterntype", "instance", "patternenddate", "patternstartdate", "firstdayofweek", "patternendtype"
];
Mscrm.AppointmentNotifications.AppointmentOrganizer.$4 = null;
Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = true;
Mscrm.Form_onload = Mscrm.AppointmentMainSystemLibraryWebResource.Form_onload;
Mscrm.isalldayevent_onchange = Mscrm.AppointmentMainSystemLibraryWebResource.Isalldayevent_onchange;
Mscrm.hideattachmentsgridsection = Mscrm.AppointmentMainSystemLibraryWebResource.HideAttachmentsGridSection