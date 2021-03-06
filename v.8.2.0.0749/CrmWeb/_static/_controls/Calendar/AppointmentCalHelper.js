Type.registerNamespace("Mscrm");
Mscrm.AppointmentCalHelper = function() {};
Mscrm.AppointmentCalHelper.openAppt = function(objectType, appointmentId) {
    var $v_0 = Mscrm.CrmUri.create("/activities/act_dlgs/dlg_seriesaction.aspx");
    $v_0.get_query()["actionType"] = "4";
    $v_0.get_query()["eId"] = appointmentId;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 350;
    $v_1.height = 270;
    var $v_2 = Mscrm.AppointmentCalHelper.openAppointmentCallback;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_2)
};
Mscrm.AppointmentCalHelper.openAppointmentCallback = function(returnValue) {
    var $v_0 = returnValue;
    if (!IsNull($v_0)) {
        var $v_1 = $v_0["objectTypeCode"], $v_2 = $v_0["objectId"];
        openObj($v_1, $v_2, null, null, 0, null)
    }
};
Mscrm.AppointmentCalHelper.deleteRecAppt = function(objectType, appointmentId) {
    var $v_0 = Mscrm.CrmUri.create("/activities/act_dlgs/dlg_seriesaction.aspx");
    $v_0.get_query()["actionType"] = "5";
    $v_0.get_query()["eId"] = appointmentId;
    openStdDlg($v_0, null, 350, 270, true, false, null);
    Mscrm.Grid.auto(parseInt(objectType, 10), null)
};
Mscrm.AppointmentCalHelper.registerClass("Mscrm.AppointmentCalHelper")