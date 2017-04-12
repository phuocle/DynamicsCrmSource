Type.registerNamespace("Mscrm");
Mscrm.Appoint = function() {};
Mscrm.Appoint.createNewAppointmentHelper = function(type, dateTime, loadDialog) {
    var $v_0 = "", $v_1 = Mscrm.DateTimeUtility.localDateTimeNow();
    if ($v_1.getMinutes() >= 30) $v_1.setHours($v_1.getHours() + 1);
    else $v_1.setMinutes(30);
    if (!IsNull(dateTime)) {
        var $v_2 = new Date(dateTime.getTime());
        $v_2.setHours($v_1.getHours());
        $v_2.setMinutes($v_1.getMinutes());
        $v_0 = "_StartTime=" + CrmEncodeDecode.CrmUrlEncode(FormatUtcDate($v_2))
    }
    if (!IsNull(loadDialog) && loadDialog) {
        if ($v_0.length > 0) $v_0 += "&";
        $v_0 += "loadDialog=true"
    }
    openObjEx(type, 0, null, !$v_0.length ? "" : "?" + $v_0, null)
};

function CreateNewAppointmentHelper(type, dateTime, loadDialog) {
    Mscrm.Appoint.createNewAppointmentHelper(type, dateTime, loadDialog)
}

Mscrm.Appoint.registerClass("Mscrm.Appoint")