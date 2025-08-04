Type.registerNamespace("Mscrm");
Mscrm.SyncErrorCommandBarActions = function() {};
Mscrm.SyncErrorCommandBarActions.retryChangesFromForm = function(syncErrorid) {
    var $v_0 = Xrm.Page.getAttribute("requestdata"), $v_1 = Xrm.Page.getAttribute("action");
    Mscrm.SyncErrorCommandBarActions.$4($v_0, $v_1, syncErrorid, null)
};
Mscrm.SyncErrorCommandBarActions.retryChangesFromGrid = function(gridControl, selectedRecord) {
    var $v_0 = Mscrm.SyncErrorCommandBarActions.$0("requestdata", gridControl),
        $v_1 = Mscrm.SyncErrorCommandBarActions.$0("action", gridControl);
    Mscrm.SyncErrorCommandBarActions.$4($v_0, $v_1, selectedRecord[0].Id.toString(), gridControl)
};
Mscrm.SyncErrorCommandBarActions.$4 = function($p0, $p1, $p2, $p3) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p1.getValue())) {
        var $v_0 = Mscrm.SyncErrorCommandBarActions.$2($p0.getValue().toString());
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = $p1.getValue().toString().toLowerCase(),
                $v_2 = $v_1 === "create" ? null : $v_0["syncerror__regardingentityid"].toString(),
                $v_3 = {};
            $v_3["_isSyncErrorRetryRequest"] = $p2;
            if (Mscrm.CommandBarActions
                .isMobileCompanionApp() &&
                Xrm.Page.context.client.getClientState() === "Online") {
                $v_3["action"] = $v_1;
                Xrm.Utility.openRecord($v_0["entitylogicalname"].toString(), $v_2, $v_3)
                    .then(function($p1_0) { !Mscrm.InternalUtilities.JSTypes.isNull($p3) && $p3.refresh() },
                        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            } else Xrm.Utility.openEntityForm($v_0["entitylogicalname"].toString(), $v_2, $v_3)
        }
    }
};
Mscrm.SyncErrorCommandBarActions.$2 = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($p0) &&
        !Mscrm.InternalUtilities._String.isNullOrEmpty($p0
            .toString())) return Mscrm.CommandBarActions.convertFromJsonToDictionary($p0.toString());
    return null
};
Mscrm.SyncErrorCommandBarActions.$0 = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p1.getGrid()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p1.getGrid().getSelectedRows())) {
        var $v_0 = $p1.getGrid().getSelectedRows().get(0);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getData()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getData().getEntity()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getData().getEntity().getAttributes())) {
            var $v_1 = $v_0.getData().getEntity().getAttributes().getByName($p0);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) return $v_1
        }
    }
    return null
};
Mscrm.SyncErrorCommandBarActions.isRetryableSyncError = function(item, records) {
    if (Xrm.Page.context.client.getClientState() !== "Online") return false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1) {
        var $v_0 = Mscrm.SyncErrorCommandBarActions.$0("statecode", item),
            $v_1 = Mscrm.SyncErrorCommandBarActions.$0("action", item),
            $v_2 = Mscrm.SyncErrorCommandBarActions.$0("errortype", item);
        return Mscrm.SyncErrorCommandBarActions.$3($v_0, $v_1, $v_2)
    } else if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        var $v_3 = Xrm.Page.getAttribute("statecode"),
            $v_4 = Xrm.Page.getAttribute("action"),
            $v_5 = Xrm.Page.getAttribute("errortype");
        return Mscrm.SyncErrorCommandBarActions.$3($v_3, $v_4, $v_5)
    } else return false
};
Mscrm.SyncErrorCommandBarActions.isRegardingEntityVisibleInMoca = function(item, records) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) {
        var $v_0 = {}, $v_1 = null;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(item) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(records) &&
            records.length === 1) $v_1 = Mscrm.SyncErrorCommandBarActions.$0("requestdata", item);
        else
            $v_1 = !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) ? Xrm.Page.getAttribute("requestdata") : null;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            !Mscrm.InternalUtilities._Script
            .isNullOrUndefined($v_1.getValue())) $v_0 = Mscrm.SyncErrorCommandBarActions.$2($v_1.getValue().toString());
        return !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0["entitylogicalname"])
            ? Xrm.Utility.isVisibleInMobileClient($v_0["entitylogicalname"].toString())
            : false
    }
    return true
};
Mscrm.SyncErrorCommandBarActions.$3 = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue()) &&
        Mscrm.SyncErrorCommandBarActions.$6($p0
            .getValue()))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($p2) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($p1.getValue()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($p2
                .getValue()))
            if ($p1.getValue().toString().toLowerCase() === "create" ||
                $p1.getValue().toString().toLowerCase() === "update" &&
                Mscrm.SyncErrorCommandBarActions.$7($p2.getValue())) return true;
    return false
};
Mscrm.SyncErrorCommandBarActions.$6 = function($p0) {
    if ($p0.toString() === "Active" || Mscrm.SyncErrorCommandBarActions.$1($p0) === 0) return true;
    return false
};
Mscrm.SyncErrorCommandBarActions.$7 = function($p0) {
    if (Mscrm.SyncErrorCommandBarActions.$1($p0) === 0 || Mscrm.SyncErrorCommandBarActions.$1($p0) === 3) return true;
    return false
};
Mscrm.SyncErrorCommandBarActions.$1 = function($p0) {
    if (Mscrm.SyncErrorCommandBarActions.$5()) return parseInt($p0.get_ValueString());
    else return parseInt($p0.toString())
};
Mscrm.SyncErrorCommandBarActions.$5 = function() {
    if (Mscrm.CommandBarActions
        .isMobileCompanionApp() &&
        Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) return true;
    return false
};
Mscrm.SyncErrorCommandBarActions.registerClass("Mscrm.SyncErrorCommandBarActions");
Type.registerNamespace("Mscrm");
Mscrm.DeleteSyncErrorRecords = Mscrm.SyncErrorCommandBarActions.deleteSyncErrorRecords;
Mscrm.DeleteSyncErrorRecord = Mscrm.SyncErrorCommandBarActions.deleteSyncErrorRecord;
Mscrm.DeleteAllSyncErrorRecords = Mscrm.SyncErrorCommandBarActions.deleteAllSyncErrorRecords;
Mscrm.RetryChanges = Mscrm.SyncErrorCommandBarActions.retryChangesFromForm;
Mscrm.RetryChangesFromGrid = Mscrm.SyncErrorCommandBarActions.retryChangesFromGrid;
Mscrm.IsRetryableSyncError = Mscrm.SyncErrorCommandBarActions.isRetryableSyncError;
Mscrm.IsRegardingEntityVisibleInMoca = Mscrm.SyncErrorCommandBarActions.isRegardingEntityVisibleInMoca