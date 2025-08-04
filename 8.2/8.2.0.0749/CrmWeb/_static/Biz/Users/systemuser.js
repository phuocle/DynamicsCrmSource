Type.registerNamespace("Mscrm");
Mscrm.SystemUserInviteStatusCode = function() {};
Mscrm.SystemUserInviteStatusCode.prototype = {
    invitationNotSent: 0,
    invited: 1,
    invitationNearExpired: 2,
    invitationExpired: 3,
    invitationAccepted: 4
};
Mscrm.SystemUserInviteStatusCode.registerEnum("Mscrm.SystemUserInviteStatusCode", false);
Mscrm.SystemUserVariables = function() {};

function AssignAllRecords() {
    var $v_0 = Mscrm.GlobalImported.CrmUri
            .create("/_grid/cmds/dlg_assignallrecords.aspx"),
        $v_1 = new Xrm.DialogOptions;
    $v_1.width = 590;
    $v_1.height = 340;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, [Xrm.Page.data.entity.getId()], null, assignRecordsAction)
}

function assignRecordsAction(ownerObject) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(ownerObject)) {
        Xrm.Internal.progress(Xrm.Internal.getResourceString("LOCID_REASSIGNINGRECORDS"), 0, 350, 150);
        var $v_0 = function() { ReassignRecords(ownerObject.OwnerId, ownerObject.OwnerType) };
        window.setTimeout($v_0, 1)
    }
}

function ChangeWLID() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.width = 500;
    $v_0.height = 300;
    if (!Mscrm.SystemUserVariables.bIsLiveEnabled) Xrm.Internal.openDialog("_sNotificationUrl", $v_0, null, null, null);
    else if (Xrm.Page.data.getIsValid()) {
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_changewlid.aspx?userid=" +
            CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId().toString()) +
            "&isform=true");
        Xrm.Internal.openDialog($v_1.toString(), $v_0, null, null, null);
        var $v_2 = Xrm.Page.data.entity.attributes.get("windowsliveid").getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            var $v_3 = Xrm.Page.data.entity.attributes.get("invitestatuscode"), $v_4 = $v_3.getValue();
            if ($v_4 === "4") {
                var $v_5 = new Xrm.DialogOptions;
                $v_5.width = 400;
                $v_5.height = 200;
                var $v_6 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_confirm_invitereset.aspx");
                Xrm.Internal.openDialog($v_6.toString(), $v_5, null, null, null)
            }
            Xrm.Page.getAttribute("windowsliveid").setSubmitMode("always");
            Xrm.Page.data.save()
        }
    }
}

function SetDevErrors(userId) {
    Xrm.Internal.messages.setDevErrors(userId,
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
            !Mscrm.SystemUserVariables.bIsShowDevErrorsEnabled)
        .then(function($p1_0) {
                Mscrm.SystemUserVariables.bIsShowDevErrorsEnabled = !Mscrm.SystemUserVariables.bIsShowDevErrorsEnabled
            },
            function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
}

function ReassignRecords(newOwnerId, newOwnerType) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 = Xrm.Page.data.entity.getEntityName(),
        $v_2 = Xrm.Internal.getEntityCode($v_1);
    Xrm.Internal.messages.assignAllRecords(new Microsoft.Crm.Client.Core.Framework.Guid($v_0),
        $v_2,
        new Microsoft.Crm.Client.Core.Framework.Guid(newOwnerId),
        newOwnerType).then(function($p1_0) { Xrm.Internal.progress("") },
        function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
}

function JoinTeam() {
    var $v_0 = 0;
    if (!Mscrm.SystemUserVariables.oId) {
        Mscrm.SystemUserVariables.oId = [];
        Mscrm.SystemUserVariables.oId[0] = Xrm.Page.data.entity.getId()
    }
    ModifyMembership(null,
        "TeamsSubGrid",
        Mscrm.SystemUserVariables.oId,
        $v_0,
        9,
        "&filterdefault=1",
        "Microsoft.Crm.Application.Controls.TeamGridDataProvider")
}

function CancelFormSubmit() { return false }

function SendEmail() {
    var $v_0 = null,
        $v_1 = -1,
        $v_2 = "",
        $v_3 = Xrm.Page.data.entity.getId(),
        $v_4 = Xrm.Page.data.entity.getEntityName(),
        $v_5 = Xrm.Internal.getEntityCode($v_4),
        $v_6 = Mscrm.SystemUserVariables._sPartyName,
        $v_7 = "";
    Mscrm.CommandBarActions.addActivityTo(4202, $v_0, $v_1, $v_2, $v_3, $v_5, $v_6, $v_7, "")
}

function sendInvite() {
    if (Xrm.Page.data.getIsValid()) {
        var $v_0 = $2();
        if (!$v_0) {
            $0();
            return
        }
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_confirm_invitereset.aspx");
        $1($v_1, confirmInviteReset, 400, 200)
    }
}

function confirmInviteReset($p0) { if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) $p0 && $0() }

function $0() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_sendinvite.aspx");
    $v_0.get_query()["userid"] = Xrm.Page.data.entity.getId();
    $v_0.get_query()["isform"] = true;
    $1($v_0, performSendInviteAction, 450, 270)
}

function performSendInviteAction($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        $p0 &&
            Xrm.Internal.messages.inviteUser(Xrm.Page.data.entity.getId())
            .then(function() { Xrm.Page.data.refresh(true) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
}

function $2() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("invitestatuscode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0.getValue();
    return 0
}

function $1($p0, $p1, $p2, $p3) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.width = $p2;
    $v_0.height = $p3;
    $v_0.left = Xrm.Page.ui.getViewPortWidth() / 2;
    $v_0.top = Xrm.Page.ui.getViewPortHeight() / 2;
    Xrm.Internal.openDialog($p0.toString(), $v_0, null, null, $p1)
}

Mscrm.Owner = function() {};
Mscrm.Owner.prototype = { OwnerId: null, OwnerType: 0 };
Mscrm.SystemUserVariables.registerClass("Mscrm.SystemUserVariables");
Mscrm.Owner.registerClass("Mscrm.Owner");
Mscrm.SystemUserVariables.oId = null;
Mscrm.SystemUserVariables.bIsLiveEnabled = false;
Mscrm.SystemUserVariables._sPartyName = null;
Mscrm.SystemUserVariables.bIsShowDevErrorsEnabled = false;
Type.registerNamespace("Mscrm")