Type.registerNamespace("Mscrm");

function locAssocObjCampaign(iType, assocSubValueType, associationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    var $v_0 = $1(parentId, parentObjectTypeCode), $v_1 = new Xrm.LookupOptions, $v_2;
    switch (iType) {
    case 4400:
        $v_2 = ["campaign"];
        var $v_3 = {};
        $v_3["currentid"] = $v_0["id"].toString();
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        $v_1.additionalParams = $v_3;
        $v_1.showNew = true;
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_5 = new Mscrm.LookupObjects;
                $v_5.items = $p1_0;
                locAssocCampaignAction($v_5, iType, assocSubValueType, associationName, iRoleOrdinal, $v_0)
            });
        break;
    case 4300:
        $v_2 = ["list"];
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        $v_1.showNew = true;
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_6 = new Mscrm.LookupObjects;
                $v_6.items = $p1_0;
                openListAssociationDialog($v_6, iType, assocSubValueType, associationName, iRoleOrdinal, $v_0)
            });
        break;
    default:
        var $v_4 = Xrm.Internal.getEntityName(iType);
        $v_2 = [$v_4];
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_7 = new Mscrm.LookupObjects;
                $v_7.items = $p1_0;
                locAssocCampaignAction($v_7, iType, assocSubValueType, associationName, iRoleOrdinal, $v_0)
            });
        break
    }
}

function openListAssociationDialog(lookupItems, iType, assocSubValueType, associationName, iRoleOrdinal, parent) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_listcaassociation.aspx");
        $v_0.get_query()["iObjType"] = iType;
        var $v_1 = [lookupItems, iType, assocSubValueType, associationName, iRoleOrdinal, parent],
            $v_2 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(performActionAfterListAssociate, $v_1),
            $v_3 = new Xrm.DialogOptions;
        $v_3.height = 250;
        $v_3.width = 450;
        Xrm.Internal.openDialog($v_0.toString(), $v_3, null, null, $v_2)
    }
}

function performActionAfterListAssociate(resultValue,
    lookupItems,
    iType,
    assocSubValueType,
    associationName,
    iRoleOrdinal,
    parent) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(resultValue)) lookupItems = null;
        if (resultValue) assocSubValueType = assocSubValueType + "addtoCA"
    }
    locAssocCampaignAction(lookupItems, iType, assocSubValueType, associationName, iRoleOrdinal, parent)
}

function locAssocCampaignAction(lookupItems, iType, assocSubValueType, associationName, iRoleOrdinal, parent) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems))
        if (lookupItems.items.length > 0) {
            iRoleOrdinal = Mscrm.InternalUtilities.JSTypes.isNull(iRoleOrdinal) ? "-1" : iRoleOrdinal;
            !Mscrm.InternalUtilities.JSTypes.isNull(parent) &&
                $0(lookupItems, iType, assocSubValueType, iRoleOrdinal, parent, associationName)
        }
}

function $1($p0, $p1) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) || Mscrm.InternalUtilities.JSTypes.isNull($p1))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity)) {
            var $v_1 = Xrm.Page.data.entity.getEntityName();
            $p1 = Xrm.Internal.getEntityCode($v_1);
            $p0 = Xrm.Page.data.entity.getId()
        }
    var $v_0 = {};
    $v_0["id"] = $p0;
    $v_0["objectTypeCode"] = $p1;
    return $v_0
}

function $0($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = "2";
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if ($p0.items.length > 0) {
            $p3 = Mscrm.InternalUtilities.JSTypes.isNull($p3) ? "-1" : $p3;
            for (var $v_1 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p4["objectTypeCode"]),
                         new Microsoft.Crm.Client.Core.Framework.Guid($p4["id"].toString())),
                $v_2 = 0;
                $v_2 < $p0.items.length;
                $v_2++) {
                var $v_3 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p1),
                    new Microsoft.Crm.Client.Core.Framework.Guid($p0.items[$v_2].id));
                if ($p3 === $v_0) {
                    var $v_4 = $v_1;
                    $v_1 = $v_3;
                    $v_3 = $v_4
                }
                Xrm.Internal.messages.addItemCampaign($v_1.Id, $v_3.Id, Xrm.Internal.getEntityName($p1))
                    .then(function($p1_0) {
                            Xrm.Internal.refreshParentGrid($p1, Xrm.Internal.getEntityName($p1), "");
                            for (var $v_5 = Xrm.Page.ui.controls
                                         .get(function($p2_0, $p2_1) {
                                             return $p2_0.getControlType() === "subgrid" &&
                                                 $p2_0.getRelationship().name === $p5
                                         }),
                                $v_6 = 0;
                                $v_6 < $v_5.length;
                                $v_6++) $v_5[$v_6].refresh()
                        },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
        }
}

function newTemplate() {
    var $v_0 = {};
    $v_0["template"] = 1;
    Xrm.Utility.openEntityForm("campaign", null, $v_0)
}

function copyCampaign(campaignId, saveAsTemplate) {
    var $v_0 = saveAsTemplate === 1 ? true : false;
    Xrm.Internal.messages.copyCampaign(campaignId, $v_0).then(function($p1_0) {
            var $v_1 = $p1_0.campaignCopyId.toString();
            Xrm.Utility.openEntityForm("campaign", $v_1, null);
            Xrm.Internal.refreshParentGrid(4400, campaignId, "")
        },
        function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
}

Mscrm.LookupObjects = function() {};
Mscrm.LookupObjects.prototype = { items: null };
Mscrm.LookupObjects.registerClass("Mscrm.LookupObjects");

function DoesNotHasOnlineCampAct() {
    if (window
        .HasOnlineMarketingCampaignActivities ===
        undefined ||
        HasOnlineMarketingCampaignActivities == 0) return true;
    return false
}