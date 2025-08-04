Type.registerNamespace("Mscrm");
Mscrm.AppointmentNotifications = function() {};
Mscrm.AppointmentNotifications.showExchangeSyncNotifications = function() { Mscrm.AppointmentNotifications.$7() };
Mscrm.AppointmentNotifications.registerExchangeSyncNotifications = function() {
    var $v_0 = function($p1_0) { Mscrm.AppointmentNotifications.showExchangeSyncNotifications() },
        $v_1 = Xrm.Page.getAttribute("organizer");
    !IsNull($v_1) && $v_1.addOnChange($v_0);
    var $v_2 = Xrm.Page.getAttribute("requiredattendees");
    !IsNull($v_2) && $v_2.addOnChange($v_0);
    var $v_3 = Xrm.Page.getAttribute("optionalattendees");
    !IsNull($v_3) && $v_3.addOnChange($v_0)
};
Mscrm.AppointmentNotifications.$7 = function() {
    if (Mscrm.AppointmentNotifications
        .$3("requiredattendees") ||
        Mscrm.AppointmentNotifications
        .$3("optionalattendees"))
        Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync(Mscrm.AppointmentNotifications.$4);
    else Mscrm.AppointmentNotifications.$4(false)
};
Mscrm.AppointmentNotifications.$3 = function($p0) {
    var $v_0 = Xrm.Page.getAttribute($p0);
    if (IsNull($v_0)) return false;
    var $v_1 = $v_0.getValue();
    if (IsNull($v_1)) return false;
    for (var $$arr_3 = $v_1, $$len_4 = $$arr_3.length, $$idx_5 = 0; $$idx_5 < $$len_4; ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        if ($v_2.entityType !== "systemuser") return true
    }
    return false
};
Mscrm.AppointmentNotifications.$4 = function($p0) {
    var $v_0 = "appointment_exchange_sync_privacy_notification";
    if ($p0) Xrm.Page.ui.setFormNotification(window.LOCID_EXSYNC_APPT_PRIVACY_WARN, "WARNING", $v_0);
    else Xrm.Page.ui.clearFormNotification($v_0)
};
Mscrm.AppointmentNotifications.AppointmentOrganizer = function() {};
Mscrm.AppointmentNotifications.AppointmentOrganizer.getUsesExchangeSync = function($p0) {
    var $v_0 = Mscrm.AppointmentNotifications.AppointmentOrganizer.$5();
    if (isNullOrEmptyString($v_0)) $p0(false);
    else if ($v_0 === Mscrm.AppointmentNotifications.AppointmentOrganizer.$2
    ) $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$1);
    else
        Mscrm.AppointmentNotifications.AppointmentOrganizer.$6($v_0).then(function($p1_0) {
                var $v_1 = $p1_0.entityCollection.get_count() > 0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = $v_0;
                Mscrm.AppointmentNotifications.AppointmentOrganizer.$1 = $v_1;
                $p0(Mscrm.AppointmentNotifications.AppointmentOrganizer.$1)
            },
            function($p1_0) { $p0(true) })
};
Mscrm.AppointmentNotifications.AppointmentOrganizer.$5 = function() {
    var $v_0 = Xrm.Page.getAttribute("organizer");
    if (IsNull($v_0)) return null;
    var $v_1 = $v_0.getValue();
    if (IsNull($v_1) || $v_1.length < 1) return null;
    return $v_1[0].id
};
Mscrm.AppointmentNotifications.AppointmentOrganizer.$6 = function($p0) {
    var $v_0 = String
        .format("<fetch mapping='logical'><entity name='mailbox'><attribute name='mailboxid'/><filter type='and'><condition attribute='regardingobjectid' operator='eq' value='{0}'/><condition attribute='actdeliverymethod' operator='eq' value='1'/></filter></entity></fetch>", CrmEncodeDecode.CrmXmlEncode($p0));
    return Xrm.Internal.messages.retrieveMultiple($v_0)
};
Mscrm.AppointmentNotifications.registerClass("Mscrm.AppointmentNotifications");
Mscrm.AppointmentNotifications.AppointmentOrganizer
    .registerClass("Mscrm.AppointmentNotifications.AppointmentOrganizer");
Mscrm.AppointmentNotifications.AppointmentOrganizer.$2 = null;
Mscrm.AppointmentNotifications.AppointmentOrganizer.$1 = true