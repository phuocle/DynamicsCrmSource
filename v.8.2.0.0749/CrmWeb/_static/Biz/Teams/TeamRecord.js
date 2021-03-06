Type.registerNamespace("Mscrm");
Mscrm.TeamRecord = function() {};
Mscrm.TeamRecord.assignAllRecords = function(entityName) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_assignallrecords.aspx");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(entityName) && entityName === "businessunit") {
        $v_0.get_query()["etn"] = entityName;
        $v_0.get_query()["oldBUId"] = Xrm.Page.data.entity.getId()
    }
    var $v_1 = [Xrm.Page.data.entity, entityName], $v_2 = new Xrm.DialogOptions;
    $v_2.height = 340;
    $v_2.width = 590;
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.TeamRecord.assignRecordsAction, $v_1);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, [Xrm.Page.data.entity.getId()], null, $v_3)
};
Mscrm.TeamRecord.assignRecordsAction = function(ownerObject, parentEntity, entityName) {
    if (ownerObject)
        if (entityName !== "businessunit") {
            Xrm.Internal.progress(Xrm.Internal.getResourceString("LOCID_REASSIGNINGRECORDS"), 0, 350, 150);
            var $v_0 = function() { Mscrm.TeamRecord.reassignRecords(ownerObject.OwnerId, ownerObject.OwnerType) };
            window.setTimeout($v_0, 1e3)
        }
};
Mscrm.TeamRecord.reassignRecords = function(newOwnerId, newOwnerType) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 = Xrm.Page.data.entity.getEntityName(),
        $v_2 = Xrm.Internal.getEntityCode($v_1);
    Xrm.Internal.messages.assignAllRecords(new Microsoft.Crm.Client.Core.Framework.Guid($v_0),
        $v_2,
        new Microsoft.Crm.Client.Core.Framework.Guid(newOwnerId),
        newOwnerType).then(function($p1_0) { Xrm.Internal.progress("") },
        function($p1_0) {
            Xrm.Internal.progress("");
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0)
        })
};
Mscrm.TeamRecord.isDefaultInstance = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isdefault");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0.getValue().toString() === "false";
    return false
};
Mscrm.Owner = function() {};
Mscrm.Owner.prototype = { OwnerId: null, OwnerType: 0 };
Mscrm.TeamRecord.registerClass("Mscrm.TeamRecord");
Mscrm.Owner.registerClass("Mscrm.Owner");
Type.registerNamespace("Mscrm");
Mscrm.assignAllRecords = Mscrm.TeamRecord.assignAllRecords;
Mscrm.isDefaultInstance = Mscrm.TeamRecord.isDefaultInstance