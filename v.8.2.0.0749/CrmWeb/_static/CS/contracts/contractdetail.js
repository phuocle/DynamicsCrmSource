Type.registerNamespace("Mscrm");

function cancel() {
    Xrm.Utility.confirmDialog(Xrm.Internal.getResourceString("LOCID_ACTION_CANNOT_BE_UNDONE"),
        $0(),
        function() { return })
}

function $0() {
    return function() {
        var $v_0 = -1;
        Xrm.Page.data.save().then(function() {
                Xrm.Internal.messages.setState("contractdetail", Xrm.Page.data.entity.getId(), 2, $v_0)
                    .then(function() { Xrm.Page.data.refresh(true) },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            },
            function($p2_0) { return });
        return
    }
}

function launchEffectivityCalendar() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/cs/contracts/dlg_calendar.aspx?id=" +
            CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId()) +
            "&otype=" +
            CrmEncodeDecode.CrmUrlEncode("1011") +
            "&readonly=" +
            CrmEncodeDecode.CrmUrlEncode($1().toString())),
        $v_1 = new Xrm.DialogOptions;
    $v_1.width = 600;
    $v_1.height = 408;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
}

function $1() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        return !($v_1 === 0 && Xrm.Page.ui.getFormType() !== 3)
    }
    return Xrm.Page.ui.getFormType() === 3
}