Type.registerNamespace("Mscrm");
Mscrm.RecurringAppointmentMainSystemLibraryWebResource = function() {};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.Form_onload = function() {
    Mscrm.EntityPageHandlerFactory.create();
    Mscrm.AppointmentNotifications.registerExchangeSyncNotifications()
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.openRecurrenceDialog = function(entityType, id, endSeries) {
    var $v_0 = false;
    if (!Xrm.Page.data.entity.getId()) $v_0 = true;
    var $v_1 = $v_0, $v_2 = Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$9();
    try {
        var $v_3 = Xrm.Internal.getResourceString("LOCID_SERVER_MAX_INSTANCE_WARN"),
            $v_4 = [$v_2, entityType],
            $v_5 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$6, $v_4);
        Mscrm.CommandBarActions.displayRecurrenceDialog(entityType, id, $v_1, endSeries, $v_2, $v_5)
    } catch ($$e_9) {
    }
    return null
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$6 = function($p0, $p1) {
    try {
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
            var $v_0 = $p0;
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_0["seriesstatus"])) !$v_0["seriesstatus"] && Xrm.Page.ui.close();
            else {
                Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$B($v_0);
                var $v_1 = $v_0["recurrencedescription"];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                    Xrm.Page.ui.clearFormNotification("recurrenceDescription");
                    return Xrm.Page.ui.setFormNotification($v_1, "", "recurrenceDescription")
                }
            }
        }
    } catch ($$e_4) {
    }
    return $p0
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$B = function($p0) {
    for (var $v_0 = Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$3, $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = $p0[$v_2];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            var $v_4 = Xrm.Page.getAttribute($v_2);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_3.toString())) {
                if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3.toString())) {
                    $v_4.setValue(null);
                    continue
                }
                var $v_5 = $v_4.getAttributeType();
                switch ($v_5) {
                case "datetime":
                    $v_4.setValue(Mscrm.InternalUtilities.LegacyUtils.parseISO8601Date($v_3.toString()));
                    break;
                case "integer":
                    $v_4.setValue(parseInt($v_3.toString(), 10));
                    break;
                default:
                    $v_4.setValue($v_3.toString());
                    break
                }
            }
        }
    }
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$9 = function() {
    for (var $v_0 = {}, $v_1 = Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$3, $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = $v_1[$v_2], $v_4 = Xrm.Page.getAttribute($v_3);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) $v_0[$v_3] = $v_4.getValue()
    }
    return $v_0
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$7 = function($p0, $p1) {
    var $v_0 = String.format("/activities/act_dlgs/dlg_seriesaction.aspx?actionType=1"),
        $v_1 = parseInt(Xrm.Internal.getResourceString("LOCID_ENDSERIESDLG_HEIGHT"), 10),
        $v_2 = parseInt(Xrm.Internal.getResourceString("LOCID_ENDSERIESDLG_WIDTH"), 10),
        $v_3 = [$p0, $p1],
        $v_4 = new Xrm.DialogOptions;
    $v_4.height = $v_1;
    $v_4.width = $v_2;
    var $v_5 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$A, $v_3);
    Xrm.Internal.openDialog(Mscrm.CrmUri.create($v_0).toString(), $v_4, null, null, $v_5)
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.endSeriesClick = function(entityType, entityId) {
    var $v_0 = new Array(1);
    $v_0[0] = entityType;
    Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$7(entityType, entityId)
};
Mscrm.RecurringAppointmentMainSystemLibraryWebResource.$A = function($p0, $p1, $p2) {
    if (!IsNull($p0)) {
        var $v_0 = $p0;
        if (!IsNull($v_0["EndSeriesDate"])) {
            var $v_1 = new Date($v_0["EndSeriesDate"]);
            $v_1 = new Date($v_1.getFullYear(), $v_1.getMonth(), $v_1.getDate(), 23, 59, 59);
            var $v_2 = $v_0["StateOfPastInstances"], $v_3 = 0;
            switch ($v_2.toLowerCase()) {
            case "open":
                $v_3 = 0;
                break;
            case "completed":
                $v_3 = 1;
                break;
            case "canceled":
                $v_3 = 2;
                break
            }
            var $v_4 = null;
            Xrm.Internal.messages.retrieve(Xrm.Page.data.entity.getEntityName(),
                Xrm.Page.data.entity.getId(),
                ["activityid"]).then(function($p1_0) {
                    if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
                    $v_4 = $p1_0.entity;
                    Xrm.Internal.messages.deleteOpenInstances($v_4, $v_1, $v_3).then(function($p2_0) {
                            Xrm.Internal.refreshParentGrid($p1, "", Xrm.Page.data.entity.getId());
                            parent.getPageManager()
                                .raiseEvent(parent.Mscrm.ScriptEvents.NavigateBackCheckpoint, { count: 2 })
                        },
                        function($p2_0) {})
                },
                function($p1_0) {});
            return true
        }
    }
    return false
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
        .$4("requiredattendees") ||
        Mscrm.AppointmentNotifications
        .$4("optionalattendees"))
        Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync(Mscrm.AppointmentNotifications.$5);
    else Mscrm.AppointmentNotifications.$5(false)
};
Mscrm.AppointmentNotifications.$4 = function($p0) {
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
Mscrm.AppointmentNotifications.$5 = function($p0) {
    var $v_0 = "appointment_exchange_sync_privacy_notification";
    if ($p0)
        Xrm.Page.ui.setFormNotification(Xrm.Internal.getResourceString("LOCID_EXSYNC_APPT_PRIVACY_WARN"),
            "WARNING",
            $v_0);
    else Xrm.Page.ui.clearFormNotification($v_0)
};
Mscrm.AppointmentNotifications.AppointmentOrganizer = function() {};
Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync = function($p0) {
    var $v_0 = Mscrm.AppointmentNotifications.AppointmentOrganizer.$8();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) $p0(false);
    else if ($v_0 === Mscrm.AppointmentNotifications.AppointmentOrganizer.$2
    ) $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$1);
    else
        Mscrm.AppointmentNotifications.AppointmentOrganizer.$C($v_0).then(function($p1_0) {
                var $v_1 = $p1_0.entityCollection.get_count() > 0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = $v_0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$1 = $v_1;
                $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$1)
            },
            function($p1_0) { $p0(true) })
};
Mscrm.AppointmentNotifications.AppointmentOrganizer.$8 = function() {
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
Mscrm.RecurringAppointmentMainSystemLibraryWebResource
    .registerClass("Mscrm.RecurringAppointmentMainSystemLibraryWebResource");
Mscrm.AppointmentNotifications.registerClass("Mscrm.AppointmentNotifications");
Mscrm.AppointmentNotifications.AppointmentOrganizer
    .registerClass("Mscrm.AppointmentNotifications.AppointmentOrganizer");
Mscrm.RecurringAppointmentMainSystemLibraryWebResource
    .$3 = [
        "endtime", "interval", "monthofyear", "effectiveenddate", "daysofweekmask", "starttime", "occurrences",
        "isnthmonthly", "isnthyearly", "isweekdaypattern", "effectivestartdate", "dayofmonth", "isregenerate",
        "duration", "recurrencepatterntype", "instance", "patternenddate", "patternstartdate", "firstdayofweek",
        "patternendtype"
    ];
Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = null;
Mscrm.AppointmentNotifications.AppointmentOrganizer.$1 = true;
Mscrm.Form_onload = Mscrm.RecurringAppointmentMainSystemLibraryWebResource.Form_onload