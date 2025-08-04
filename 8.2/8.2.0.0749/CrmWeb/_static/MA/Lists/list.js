Type.registerNamespace("Mscrm");

function AddToCampaign() { Mscrm.ListCommands.addListToCampaign() }

function mailMergeList() { Mscrm.ListCommands.mailMergeList() }

function CreateMiniCampaign() { Mscrm.ListCommands.createMiniCampaign() }

function FormOnLoad() {
    Mscrm.ListCommands.setVisibleSubGrid();
    Mscrm.ListCommands.disableLockStatus()
}

function RefreshMiniCampaign(result) { Mscrm.ListCommands.refreshMiniCampaign(result) }

function DisableLockStatus() { Mscrm.ListCommands.disableLockStatus() }

function SetVisibleSubGrid() { Mscrm.ListCommands.setVisibleSubGrid() }

function isListActive() { Mscrm.ListCommands.isListActive() }

function isListUnLocked() { Mscrm.ListCommands.isListLocked() }

function performActionAfterListAssociate(result, lookupItems, iType, subtype, associationName, roleOrdinal, parent) {
    Mscrm.ListCommands.performActionAfterListAssociate(result,
        lookupItems,
        iType,
        subtype,
        associationName,
        roleOrdinal,
        parent)
}

function openListCaAssociation(lookupItems, iType, subtype, associationName, iRoleOrdinal, parent) {
    Mscrm.ListCommands.openListCaseAssociation(lookupItems, iType, subtype, associationName, iRoleOrdinal, parent)
}

function locAssocObjMember(type, parentId, parentObjectTypeCode) {
    Mscrm.ListCommands.locAssocObjMember(type, parentId, parentObjectTypeCode)
}

function associateListAction(lookupItems, type, sub, associationName, iRoleOrdinal, parent) {
    Mscrm.ListCommands.associateListAction(lookupItems, type, sub, associationName, iRoleOrdinal, parent)
}

function locAssocObjAccount(type, sub, associationName, iRoleOrdinal, parentId, parentObjectTypeCode) {
    Mscrm.ListCommands.locAssocObjAccount(type, sub, associationName, iRoleOrdinal, parentId, parentObjectTypeCode)
}

Mscrm.ListCommands = function() {};
Mscrm.ListCommands.addListToCampaign = function() {
    Xrm.Internal.doAction("", 4300, "addtocampaign", Xrm.Page.data.entity.getId())
};
Mscrm.ListCommands.mailMergeList = function() {
    if (Mscrm.InternalUtilities.Utilities.isIosDevice()) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_UNSUPPORTED_RIBBONACTION"), null);
        return
    }
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx?objectTypeCode=" +
            CrmEncodeDecode.CrmUrlEncode("4300") +
            "&objectId=" +
            CrmEncodeDecode.CrmUrlEncode(Xrm.Page.data.entity.getId())),
        $v_1 = new Xrm.DialogOptions;
    $v_1.width = 600;
    $v_1.height = 500;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
};
Mscrm.ListCommands.createMiniCampaign = function() {
    var $v_0 = {};
    $v_0["ObjectTypeCode"] = 4300;
    var $v_1 = Xrm.Page.data.entity.attributes.get("createdfromcode");
    $v_0["MCOption"] = 1;
    $v_0["TotalRecords"] = 1;
    $v_0["SelectedRecords"] = 1;
    $v_0["GridXml"] = "";
    $v_0["Ids"] = "";
    $v_0["CreatedFromOtc"] = $v_1.getValue().toString();
    $v_0["MCOptionTitle"] = Xrm.Internal.getResourceString("LOCID_MC_SELECTION_SELECTED");
    var $v_2 = [];
    $v_2[0] = Xrm.Page.data.entity.getId();
    $v_0["Ids"] = $v_2;
    var $v_3 = Mscrm.GlobalImported.CrmUri.create("/MA/MiniCampaign/MiniCampaign.aspx"), $v_4 = new Xrm.DialogOptions;
    $v_4.height = parseInt(Xrm.Internal.getResourceString("LOCID_MC_WINDOW_HEIGHT"), 10);
    $v_4.width = parseInt(Xrm.Internal.getResourceString("LOCID_MC_WINDOW_WIDTH"), 10);
    Xrm.Internal.openDialog($v_3.toString(), $v_4, $v_0, null, Mscrm.ListCommands.refreshMiniCampaign)
};
Mscrm.ListCommands.openListCaseAssociation = function(lookupItems, iType, sub, associationName, iRoleOrdinal, parent) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
        var $v_0 = [];
        $v_0[0] = lookupItems;
        $v_0[1] = iType;
        $v_0[2] = sub;
        $v_0[3] = associationName;
        $v_0[4] = iRoleOrdinal;
        $v_0[5] = parent;
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_listcaassociation.aspx?iObjType=" +
                CrmEncodeDecode.CrmUrlEncode(iType.toString())),
            $v_2 = new Xrm.DialogOptions;
        $v_2.width = 450;
        $v_2.height = 250;
        var $v_3 = Mscrm.ListCommands.performActionAfterListAssociate,
            $v_4 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_3, $v_0);
        Xrm.Internal.openDialog($v_1.toString(), $v_2, null, null, $v_4)
    }
};
Mscrm.ListCommands
    .performActionAfterListAssociate =
    function(result, lookupItems, iType, sub, associationName, iRoleOrdinal, parent) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
            if (Mscrm.InternalUtilities.JSTypes.isNull(result)) lookupItems = null;
            if (result) sub = sub + "addtoCA"
        }
        Mscrm.ListCommands.associateListAction(lookupItems, iType, sub, associationName, iRoleOrdinal, parent)
    };
Mscrm.ListCommands.associateListAction = function(lookupItems, type, sub, associationName, iRoleOrdinal, parent) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems)) {
        var $v_0 = null;
        iRoleOrdinal = Mscrm.InternalUtilities.JSTypes.isNull(iRoleOrdinal) ? -1 : iRoleOrdinal;
        $v_0 = iRoleOrdinal.toString() === "-1" ? "false" : iRoleOrdinal.toString() === "2" ? "true" : "false";
        if (!Mscrm.InternalUtilities.JSTypes.isNull(parent)) {
            Xrm.Internal.associateObjects(parent["objectTypeCode"].toString(),
                parent["id"].toString(),
                type,
                lookupItems.items,
                $v_0.toString(),
                sub,
                associationName,
                false);
            Xrm.Internal.refreshParentGrid(type, "", "")
        }
    }
};
Mscrm.ListCommands.isListLocked = function() {
    var $v_0, $v_1 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue().toString())) $v_0 = $v_1.getValue();
    else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue().toString())) $v_0 = $v_1.getValue();
    else return false;
    if ($v_0) return false;
    else return true
};
Mscrm.ListCommands.isListActive = function() {
    var $v_0, $v_1 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue().toString())) $v_0 = $v_1.getValue().toString();
    else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue().toString())) $v_0 = $v_1.getValue().toString();
    else return false;
    if ($v_0 === "Inactive") return false;
    else return true
};
Mscrm.ListCommands.refreshMiniCampaign = function(result) {
    if (result) {
        var $v_0 = Xrm.Page.ui.controls.get("QuickCampaigns");
        $v_0.refresh()
    }
};
Mscrm.ListCommands.setVisibleSubGrid = function() {
    var $v_0 = 0;
    $v_0 = window.setInterval(function() {
            var $v_1 = Xrm.Page.ui.controls.get("accounts"),
                $v_2 = Xrm.Page.ui.controls.get("contacts"),
                $v_3 = Xrm.Page.ui.controls.get("leads"),
                $v_4 = Xrm.Page.data.entity.attributes.get("createdfromcode");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) {
                var $v_5 = Number.parseInvariant($v_4.getValue().toString());
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                    var $v_6 = $v_5 === 1;
                    $v_1.setVisible($v_6);
                    window.clearInterval($v_0)
                }
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                    var $v_7 = $v_5 === 2;
                    $v_2.setVisible($v_7);
                    window.clearInterval($v_0)
                }
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                    var $v_8 = $v_5 === 4;
                    $v_3.setVisible($v_8);
                    window.clearInterval($v_0)
                }
            }
        },
        1e3)
};
Mscrm.ListCommands.disableLockStatus = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("type");
    if ($v_0.getValue()) {
        Xrm.Page.data.entity.attributes.get("lockstatus").setValue(0);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("lockstatus")) &&
            Xrm.Page.ui.controls.get("lockstatus").setDisabled(true)
    } else
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("lockstatus")) &&
            Xrm.Page.ui.controls.get("lockstatus").setDisabled(false)
};
Mscrm.ListCommands.$0 = function($p0, $p1) {
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
};
Mscrm.ListCommands.locAssocObjMember = function(type, parentId, parentObjectTypeCode) {
    var $v_0 = Mscrm.ListCommands
            .$0(parentId, parentObjectTypeCode),
        $v_1 = Xrm.Page.data.entity.attributes.get("type");
    if ($v_1.getValue())
        Mscrm.ListAction.openDynamicListQuery(type, $v_0["objectTypeCode"].toString(), $v_0["id"].toString());
    else
        Mscrm.ListAction.openManageMembersWizard(type,
            $v_0["objectTypeCode"].toString(),
            $v_0["id"].toString(),
            440,
            450)
};
Mscrm.ListCommands.locAssocObjAccount = function(type,
    sub,
    associationName,
    iRoleOrdinal,
    parentId,
    parentObjectTypeCode) {
    var $v_0 = Mscrm.ListCommands.$0(parentId, parentObjectTypeCode), $v_1 = new Xrm.LookupOptions, $v_2;
    switch (type) {
    case 4400:
        $v_2 = ["campaign"];
        $v_1.lookupStyle = "single";
        $v_1.lookupTypes = $v_2;
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_4 = new Mscrm.LookupObjects;
                $v_4.items = $p1_0;
                Mscrm.ListCommands.openListCaseAssociation($v_4,
                    type,
                    sub,
                    associationName,
                    iRoleOrdinal.toString(),
                    $v_0)
            });
        return;
    case 4406:
        Mscrm.ListCommands.createMiniCampaign();
        return;
    default:
        var $v_3 = Xrm.Internal.getEntityName(type);
        $v_2 = [$v_3];
        $v_1.lookupStyle = "multi";
        $v_1.lookupTypes = $v_2;
        Xrm.Internal.lookupObjects($v_1,
            function($p1_0) {
                var $v_5 = new Mscrm.LookupObjects;
                $v_5.items = $p1_0;
                Mscrm.ListCommands.associateListAction($v_5, type, sub, associationName, iRoleOrdinal, $v_0)
            });
        return
    }
};
Mscrm.ListCommands.listActionManageMembersForm = function(form, memberTypeAttribute, typeAttribute) {
    var $v_0 = -1;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(memberTypeAttribute)) $v_0 = memberTypeAttribute.getValue();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(typeAttribute) &&
        typeAttribute.getValue()) Mscrm.ListAction.openDynamicListQuery($v_0, null, Xrm.Page.data.entity.getId());
    else Mscrm.ListAction.openManageMembersWizard($v_0, null, Xrm.Page.data.entity.getId(), 440, 450)
};
Mscrm.ListCommands.copyDynamicListToStatic = function(id) {
    if (Xrm.Page.data.entity.getIsDirty()) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_FORM_DIRTY"), null);
        return
    }
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/MA/Lists/dlg_copytostatic.aspx"),
        $v_1 = null,
        $v_2 = new Xrm.DialogOptions;
    $v_2.width = 450;
    $v_2.height = 200;
    id = Xrm.Page.data.entity.getId();
    $v_1 = Mscrm.CommandBarActions
        .createCallbackFunctionFactory(Mscrm.ListCommands.copyDynamicListToStaticCallback, [id]);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_1)
};
Mscrm.ListCommands.copyDynamicListToStaticCallback = function(isCopy, id) {
    isCopy &&
        Xrm.Internal.messages.copyDynamicListToStatic(id).then(function($p1_0) {
                if ($p1_0) {
                    var $v_0 = $p1_0.staticListId.toString();
                    Xrm.Utility.openEntityForm("list", $v_0, null);
                    Xrm.Internal.refreshParentGrid(4300, "", $v_0)
                }
            },
            function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
};
Mscrm.ListCommands.copyTo = function(gridControl, records, entityTypeCode) {
    var $v_0 = "copyto", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["list"];
    var $v_3 = {};
    $v_3["listType"] = "static";
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.additionalParams = $v_3;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    $v_1.defaultViewId = "577EA96E-B1F6-499b-98A7-ABB5BE8233F9";
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) { Mscrm.ListCommands.takeAction($p1_0, $v_0, entityTypeCode, records, 400, 250) })
};
Mscrm.ListCommands.takeAction = function(lookupItems, actionName, entityTypeCode, records, windowWidth, windowHeight) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(lookupItems) || !lookupItems.length) return;
    var $v_0 = lookupItems[0].id,
        $v_1 = lookupItems[0].type.toString(),
        $v_2 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri(actionName, entityTypeCode, records.length);
    $v_2.get_query()["itemObjectId"] = $v_0;
    $v_2.get_query()["itemObjectTypeCode"] = $v_1;
    windowWidth = Mscrm.InternalUtilities.JSTypes.isNull(windowWidth) ? 400 : windowWidth;
    windowHeight = Mscrm.InternalUtilities.JSTypes.isNull(windowHeight) ? 250 : windowHeight;
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_2, records, windowWidth, windowHeight, null)
};
Mscrm.ListCommands.addToCampaign = function(gridControl, records, entityTypeCode) {
    var $v_0 = "addtocampaign", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["campaign"];
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) { Mscrm.ListCommands.takeAction($p1_0, $v_0, entityTypeCode, records, 475, 250) })
};
Mscrm.ListCommands.$2 = function($p0) {
    var $v_0 = [];
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        var $v_1 = $p0.getGrid().getSelectedRows();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || !$v_1.getLength()) $v_1 = $p0.getGrid().getRows();
        for (var $v_2 = 0; $v_2 < $v_1.getLength(); $v_2++) $v_0[$v_2] = $v_1.get($v_2).getData().getEntity().getId()
    }
    return $v_0
};
Mscrm.ListCommands.createOpportunityForMembers = function(gridControl) {
    var $v_0 = Xrm.Page.data.entity, $v_1 = $v_0.attributes.get("createdfromcode"), $v_2 = $v_1.getValue(), $v_3 = null;
    if (gridControl) $v_3 = gridControl;
    else
        switch ($v_2) {
        case 1:
            $v_3 = Xrm.Page.getControl("accounts");
            break;
        case 2:
            $v_3 = Xrm.Page.getControl("contacts");
            break;
        default:
            throw Error.invalidOperation("Operation is invalid for this list.")
        }
    var $v_4 = Mscrm.ListCommands.$2($v_3);
    Mscrm.ListCommands.$1($v_2, $v_0.getId(), "createopportunity", 4301, $v_4)
};
Mscrm.ListCommands.$1 = function($p0, $p1, $p2, $p3, $p4) {
    if (Mscrm.InternalUtilities.JSTypes
        .isNull($p4) ||
        !$p4.length) Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ACTION_NOITEMSELECTED"), null);
    else {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = 550;
        $v_0.width = 800;
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode($p2) + ".aspx");
        $v_1.get_query()["iObjType"] = $p0;
        $v_1.get_query()["sParentId"] = $p1;
        $v_1.get_query()["iParentType"] = $p3;
        $v_1.get_query()["iTotal"] = $p4.length;
        Xrm.Internal.openDialog($v_1.toString(), $v_0, $p4, null, null)
    }
};
Mscrm.LookupObjects = function() {};
Mscrm.LookupObjects.prototype = { items: null };
Mscrm.ListCommands.registerClass("Mscrm.ListCommands");
Mscrm.LookupObjects.registerClass("Mscrm.LookupObjects")