Type.registerNamespace("Mscrm");
Mscrm.DetectDuplicateArgs = function() {};
Mscrm.ListState = function() {};
Mscrm.ListState.prototype = { inactive: 0, active: 1 };
Mscrm.ListState.registerEnum("Mscrm.ListState", false);
Mscrm.InsertTemplateFieldOptions = function() {};
Mscrm.InsertTemplateFieldOptions.prototype = { toField: 0, ccField: 1, regarding: 2, none: 3 };
Mscrm.InsertTemplateFieldOptions.registerEnum("Mscrm.InsertTemplateFieldOptions", false);
Mscrm.OperationStatus = function() {};
Mscrm.OperationStatus.prototype = { success: 0, failed: 1 };
Mscrm.OperationStatus.registerEnum("Mscrm.OperationStatus", false);
Mscrm.SharePointServiceType = function() {};
Mscrm.SharePointServiceType.prototype = { sharepoint: 0, oneDriveForBusiness: 1, sharedWithMe: 2 };
Mscrm.SharePointServiceType.registerEnum("Mscrm.SharePointServiceType", false);
Mscrm.DataperformanceAction = function() {};
Mscrm.DataperformanceAction.prototype = { optimize: 0, remove: 1 };
Mscrm.DataperformanceAction.registerEnum("Mscrm.DataperformanceAction", false);
Mscrm.CommandBarActions = function() {};
Mscrm.CommandBarActions.dismiss = function(gridControl, records) {
    (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() === "Online") &&
        Mscrm.CommandBarActions.dismissCardFromUI(records[0].Id);
    var $v_0 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_0 = "";
    var $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id));
    Xrm.Internal.messages.setActionCardState($v_1, 1, $v_0)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.snooze = function(gridControl, records) {
    (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() === "Online") &&
        Mscrm.CommandBarActions.dismissCardFromUI(records[0].Id);
    var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id));
    Xrm.Internal.messages.snoozeActionCard($v_0).then(function($p1_0) {},
        function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$4C = function($p0, $p1) {
    var $v_0 = String.format("${0}.remove();${1}.css('margin-left', '0%');", "('#" + $p0 + "')", "('#" + $p1 + "')");
    eval($v_0 + "Mscrm.ActionHubControl.ActionHubControlWall.actioncardDataCount();")
};
Mscrm.CommandBarActions.dismissCardFromUI = function(Id) {
    var $v_0 = $P_CRM("[Id='" + Id + "']"),
        $v_1 = $P_CRM("[Id='" + Id + "']").css("width"),
        $v_2 = $v_0.parent("div"),
        $v_3 = $v_2.next("div"),
        $v_4 = !$v_3.find("img.CloseCard").length,
        $v_5 = Xrm.Page.context.getQueryStringParameters();
    if (!IsNull($v_5["iscarouselview"]) && !$v_4) {
        var $v_6 = $v_3.css("display") !== "inline-block";
        if ($v_6) $v_3 = $v_3.next("div");
        $v_2.hide(500);
        var $v_7 = {};
        $v_3.animate($v_7, 500)
    } else $v_2.hide(500);
    window.setTimeout(function() { Mscrm.CommandBarActions.$4C($v_2[0].id, !IsNull($v_3[0]) ? $v_3[0].id : "") }, 500)
};
Mscrm.CommandBarActions.addConnectionFromForm = function(objectId, objectTypeCode, connectToMe) {
    var $v_0 = {};
    $v_0["pId"] = objectId;
    $v_0["pType"] = objectTypeCode;
    if (connectToMe) $v_0["connectToMe"] = "true";
    if (objectTypeCode === 1022) $v_0["connectFromPricelevel"] = "true";
    Xrm.Utility.openEntityForm("connection", null, $v_0)
};
Mscrm.CommandBarActions.addToQueue = function(objectType) {
    var $v_0 = null,
        $v_1 = Xrm.Internal.getEntityName(objectType),
        $v_2 = new Xrm.Objects.EntityReference($v_1,
            new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_0 = [$v_2];
    var $v_3 = {};
    $v_3["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_0);
    $v_3["lastButtonClicked"] = "ok_id";
    var $v_4 = null;
    if (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" ||
        Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
        $v_4 = new Xrm.DialogOptions;
        $v_4.height = 235;
        $v_4.width = 450
    }
    Xrm.Dialog.openDialog("AddToQueue", $v_4, $v_3, Mscrm.InternalUtilities.DialogUtility.closeDialogCallback, null)
};
Mscrm.CommandBarActions.addToQueueDialogQueueChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("businessqueues_id");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
    var $v_1 = $v_0.getValue(), $v_2 = Xrm.Page.getControl("ok_id");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return;
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || !$v_1.length) $v_2.setDisabled(true);
    else $v_2.setDisabled(false)
};
Mscrm.CommandBarActions.addToQueueDialogAddClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = Xrm.Page.data.entity.attributes.get("businessqueues_id");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
    var $v_1 = $v_0.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || !$v_1.length) {
        var $v_2 = new Xrm.AlertDialogStrings;
        $v_2.text = Xrm.Internal.getResourceString("Web._grid.cmds.dlg_addtoqueue.aspx_NoQueueSelected");
        Xrm.Dialog.openAlertDialog($v_2, null, null)
    } else {
        var $v_3 = null, $v_4 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1[0].id);
        $v_3 = Mscrm.InternalUtilities.DialogUtility
            .deserializeSdkEntityReferences(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("records")
                .toString());
        Mscrm.CommandBarActions.$30($v_4, $v_3)
    }
};
Mscrm.CommandBarActions.$30 = function($p0, $p1) {
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    if ($p1.length === 1)
        Xrm.Internal.messages.addToQueue($p1[0], null, $p0, null).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                Xrm.Page.ui.close()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
    else if (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client
        .getClient() ===
        "Outlook" &&
        Xrm.Page.context.client.getClientState() === "Online") Mscrm.CommandBarActions.$2b($p0, $p1);
    else Mscrm.CommandBarActions.$19($p0, $p1, 0, true)
};
Mscrm.CommandBarActions.$2b = function($p0, $p1) {
    Xrm.Internal.messages.addMultipleToQueue($p1, null, $p0, null)
        .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() }).then(function($p1_0) {
                for (var $$arr_3 = $p1_0
                             .responses,
                $$len_4 = $$arr_3.length,
                $$idx_5 = 0;
                $$idx_5 < $$len_4;
                ++$$idx_5) {
                    var $v_0 = $$arr_3[$$idx_5];
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.get_fault())) {
                        Mscrm.CommandBarActions.openAlertDialogForAssignMultipleError();
                        return
                    }
                }
                Xrm.Page.ui.close()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.CommandBarActions.$19 = function($p0, $p1, $p2, $p3) {
    if ($p2 >= $p1.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p3 && Mscrm.CommandBarActions.openAlertDialogForAssignMultipleError();
        Xrm.Page.ui.close()
    } else
        Xrm.Internal.messages.addToQueue($p1[$p2], null, $p0, null)
            .then(function() { Mscrm.CommandBarActions.$19($p0, $p1, $p2 + 1, $p3) },
                function() { Mscrm.CommandBarActions.$19($p0, $p1, $p2 + 1, false) })
};
Mscrm.CommandBarActions.openAlertDialogForAssignMultipleError = function() {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0,
        null,
        function() {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close()
        })
};
Mscrm.CommandBarActions.assignObject = function(objectType) {
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Internal.getEntityName(objectType);
    if ($v_1 === "incident" || Xrm.Utility.isActivityType($v_1)) Mscrm.CommandBarActions.assignQueue($v_0, objectType);
    else {
        var $v_2 = new Xrm.Objects.EntityReference($v_1, new Microsoft.Crm.Client.Core.Framework.Guid($v_0)),
            $v_3 = [$v_2],
            $v_4 = {};
        $v_4["entityId"] = $v_0;
        $v_4["entityName"] = $v_1;
        $v_4["entityTypeCode"] = objectType;
        $v_4["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_3);
        $v_4["lastButtonClicked"] = "";
        $v_4["ownerId"] = "";
        $v_4["ownerType"] = "";
        var $v_5 = new Xrm.DialogOptions;
        switch ($v_1) {
        case "sla":
        case "convertrule":
        case "routingrule":
            $v_5.height = 320;
            break;
        case "workflow":
            $v_5.height = 290;
            break;
        default:
            $v_5.height = 285;
            break
        }
        $v_5.width = Xrm.Page.context.client.getClient() === "Mobile" ? 506 : 456;
        Xrm.Dialog.openDialog("Assign", $v_5, $v_4, Mscrm.CommandBarActions.assignDialogCloseCallback, null);
        Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, "Assign", objectType)
    }
};
Mscrm.CommandBarActions.assignQueue = function(entityId, objectType) {
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    var $v_0 = Xrm.Internal.getEntityName(objectType), $v_1 = {};
    $v_1["entityId"] = entityId;
    $v_1["entityTypeCode"] = objectType;
    $v_1["selectedRecordsCount"] = 1;
    $v_1["entityName"] = $v_0;
    $v_1["lastButtonClicked"] = "ok_id";
    $v_1["ownerId"] = "";
    $v_1["ownerType"] = "";
    var $v_2, $v_3;
    if ($v_0 === "incident") {
        $v_2 = 456;
        $v_3 = 250
    } else if (Xrm.Utility.isActivityType($v_0)) {
        $v_2 = 500;
        $v_3 = 220
    } else return;
    var $v_4 = new Xrm.DialogOptions;
    $v_4.height = $v_3;
    $v_4.width = $v_2;
    Xrm.Dialog.openDialog("AssignQueue", $v_4, $v_1, Mscrm.CommandBarActions.assignQueueDialogCloseCallback, null)
};
Mscrm.CommandBarActions.assignObjectAction = function(returnValue) {
    if (returnValue) {
        var $v_0 = returnValue["OwnerId"];
        if ($v_0) {
            var $v_1 = returnValue["OwnerType"];
            if (typeof $v_1 !== "number") $v_1 = parseInt($v_1, 10);
            var $v_2 = Xrm.Internal.getEntityName($v_1),
                $v_3 = Xrm.Page.data.entity.getId(),
                $v_4 = Xrm.Page.data.entity.getEntityName();
            Xrm.Page.context.saveMode = 47;
            if (Mscrm.InternalUtilities.Utilities
                .isRefreshForm())
                Xrm.Page.data.save().then(function() { Mscrm.CommandBarActions.$1O($v_4, $v_3, $v_2, $v_0) },
                    Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
            else Mscrm.CommandBarActions.$1O($v_4, $v_3, $v_2, $v_0);
            Xrm.Page.context.saveMode = -1
        }
    }
};
Mscrm.CommandBarActions.$1O = function($p0, $p1, $p2, $p3) {
    Xrm.Internal.messages.assign($p0, $p1, $p2, $p3).then(function() {
            Xrm.Page.data.refresh(true);
            Mscrm.CommandBarActions.$32(new Xrm.Objects
                .EntityReference($p0, new Microsoft.Crm.Client.Core.Framework.Guid($p1)),
                new Xrm.Objects.EntityReference("systemuser",
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId())),
                1,
                function() { Xrm.Page.data.refresh(false) },
                function() { window.setTimeout(function() { Xrm.Page.ui.close() }, 200) })
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.assignQueueDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams["lastButtonClicked"]) &&
        dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = dialogParams["ownerId"].toString(),
            $v_1 = dialogParams["ownerType"].toString(),
            $v_2 = dialogParams["entityName"].toString(),
            $v_3 = dialogParams["entityId"].toString();
        if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
        Xrm.Page.context.saveMode = 47;
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Page.data.save().then(function() {
                Xrm.Internal.messages.assign($v_2, $v_3.toString(), $v_1, $v_0).then(function($p2_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Page.data.refresh(true)
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            },
            Mscrm.InternalUtilities.DialogUtility.operationFailedCallbackForMoca);
        Xrm.Page.context.saveMode = -1
    }
};
Mscrm.CommandBarActions.assignQueueOnLoad = function() {
    var $v_0 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("selectedRecordsCount"),
        $v_1 = Xrm.Page.getControl("label_DialogDescription");
    if ($v_0 === 1)
        $v_1.setLabel(String.format(Xrm.Internal.getResourceString("Dialog_AssignQueue_Description_Single"),
            $v_0.toString()));
    else
        $v_0 > 1 &&
            $v_1.setLabel(String.format(Xrm.Internal.getResourceString("Dialog_AssignQueue_Description_Plural"), $v_0));
    var $v_2 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString();
    if ($v_2 !== "incident") {
        var $v_3 = Xrm.Page.getControl("rdoMe_id");
        $v_3.setVisible(false)
    } else {
        var $v_4 = Xrm.Page.getControl("systemuserview_id");
        $v_4.setDisabled(true)
    }
};
Mscrm.CommandBarActions.assignQueueClick = function() {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = true,
        $v_3 = Xrm.Page.data.entity.attributes.get("rdoMe_id"),
        $v_4 = $v_3.getValue(),
        $v_5 = Xrm.Page.data.entity.attributes.get("systemuserview_id"),
        $v_6 = Xrm.Page.getControl("rdoMe_id");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_4) ||
        $v_4.toString() === "1" ||
        $v_4.toString() === $v_2.toString() ||
        !$v_6.getVisible()) {
        var $v_7 = $v_5.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_7) || !$v_7.length) {
            var $v_8 = new Xrm.AlertDialogStrings;
            $v_8.text = Xrm.Internal.getResourceString("Web._grid.cmds.dlg_assignallrecords.aspx_60");
            Xrm.Dialog.openAlertDialog($v_8, null, null);
            return
        } else {
            $v_0 = $v_7[0].id;
            var $v_9 = Xrm.Internal.getEntityCode($v_7[0].entityType);
            if (8 === $v_9) $v_1 = Xrm.Internal.getEntityName(8);
            else $v_1 = Xrm.Internal.getEntityName(9)
        }
    } else {
        $v_0 = Xrm.Page.context.getUserId();
        $v_1 = Xrm.Internal.getEntityName(8)
    }
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("ownerId", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("ownerType", $v_1);
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.assignQueueDialogAssignToChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("rdoMe_id"),
        $v_1 = $v_0.getValue(),
        $v_2 = Xrm.Page.getControl("systemuserview_id"),
        $v_3 = $v_0.getValue(),
        $v_4 = Xrm.Page.getControl("ok_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || $v_3)) {
        $v_2.setDisabled(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
            (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("systemuserview_id")
                    .getValue()) ||
                Mscrm.InternalUtilities.JSTypes.isNull($v_1)) &&
            $v_4.setDisabled(true)
    } else {
        $v_2.setDisabled(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setDisabled(false)
    }
};
Mscrm.CommandBarActions.assignDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = dialogParams["ownerId"].toString(),
            $v_1 = dialogParams["ownerType"].toString(),
            $v_2 = dialogParams["entityName"].toString(),
            $v_3 = dialogParams["entityId"].toString(),
            $v_4 = dialogParams["entityTypeCode"];
        if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
        Xrm.Page.context.saveMode = 47;
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if (Mscrm.CommandBarActions
            .shouldSaveBeforeAssigning($v_2))
            Xrm.Page.data.save().then(function() { Mscrm.CommandBarActions.$1Q($v_0, $v_1, $v_2, $v_3, $v_4) },
                Mscrm.InternalUtilities.DialogUtility.operationFailedCallbackForMoca);
        else Mscrm.CommandBarActions.$1Q($v_0, $v_1, $v_2, $v_3, $v_4);
        Xrm.Page.context.saveMode = -1
    }
};
Mscrm.CommandBarActions.shouldSaveBeforeAssigning = function(entityName) {
    if (Xrm.Page.context.client.getClient() !== "Mobile" || Xrm.Page.data.entity.getIsDirty()) return true;
    return entityName !== "quote" &&
        entityName !== "quotedetail" &&
        entityName !== "salesorder" &&
        entityName !== "salesorderdetail" &&
        entityName !== "invoice" &&
        entityName !== "invoicedetail"
};
Mscrm.CommandBarActions.$1Q = function($p0, $p1, $p2, $p3, $p4) {
    Xrm.Internal.messages.assign($p2, $p3, $p1, $p0).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.data.refresh(true);
            Xrm.Internal.refreshParentGrid($p4, "", $p3)
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.CommandBarActions.assignDialogSystemUserChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("systemuserview_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue(), $v_2 = Xrm.Page.getControl("ok_id");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return;
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || !$v_1.length) $v_2.setDisabled(true);
        else $v_2.setDisabled(false)
    }
};
Mscrm.CommandBarActions.associateManyToMany = function(gridControl, parent, child, relationshipName) {
    var $v_0 = gridControl.getRelationshipRoleOrdinal();
    Mscrm.CommandBarActions.associateManyToManyRelation($v_0, parent, child, relationshipName)
        .then(function($p1_0) { !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh() },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions
    .associateManyToManyRelation = function(relationShipRoleOrdinal, parent, child, relationshipName) {
        if (relationShipRoleOrdinal === 2) {
            var $v_1 = parent;
            parent = child;
            child = $v_1
        }
        var $v_0 = [child];
        return Xrm.Internal.messages.associate(parent, relationshipName, $v_0)
    };
Mscrm.CommandBarActions.associateOneToMany = function(gridControl, parent, child, relationshipAttributeName) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(relationshipAttributeName)) return;
    var $v_0 = [relationshipAttributeName];
    Xrm.Internal.messages.retrieve(child.LogicalName, child.Id.toString(), $v_0).then(function($p1_0) {
            var $v_1 = $p1_0.entity;
            if ($v_1.hasValue(relationshipAttributeName)) {
                var $v_2 = $v_1.getValue(relationshipAttributeName), $v_3 = $v_2.Id;
                if ($v_3.equals(parent.Id)) return;
                var $v_4 = parseInt("0x80048478", 16), $v_5 = Xrm.Internal.getErrorMessage($v_4);
                Mscrm.InternalUtilities.ClientApiUtility.handleError($v_4, $v_5)
            } else {
                $v_1.initializeValue(relationshipAttributeName, parent, 6);
                $v_1.get_changedFieldNames().addRange([relationshipAttributeName]);
                Xrm.Internal.messages.update($v_1).then(function($p2_0) {
                        !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.completePhoneCall = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id)),
        $v_2 = gridControl.getCellValue("cardtype", records[0].Id),
        $v_3 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid"),
        $v_4 = "",
        $v_5 = "",
        $v_6 = $v_0.split(":");
    $v_4 = $v_6[0];
    $v_5 = $v_6[1];
    var $v_7 = null;
    if (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" ||
        Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
        $v_7 = new Xrm.DialogOptions;
        $v_7.height = 250;
        $v_7.width = 600
    }
    Xrm.Dialog.openDialog("CompletePhoneCall",
        $v_7,
        Mscrm.CommandBarActions.$36($v_4, $v_5, $v_1, $v_2, $v_3),
        null,
        null)
};
Mscrm.CommandBarActions.open = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id);
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.split(":");
        Xrm.Utility.openEntityForm($v_1[0], $v_1[1], null)
    }
};
Mscrm.CommandBarActions.closeCard = function(gridControl, records) {
    var $v_0 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid"),
        $v_1 = gridControl.getCellValue("actioncardid", records[0].Id),
        $v_2 = gridControl.getCellValue("cardtype", records[0].Id);
    Mscrm.CommandBarActions.$2w(gridControl, $v_0, $v_1, $v_2)
};
Mscrm.CommandBarActions.takeNotes = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = "",
        $v_2 = "",
        $v_3 = $v_0.split(":");
    $v_1 = $v_3[0];
    $v_2 = $v_3[1];
    var $v_4 = $v_1, $v_5 = $v_2, $v_6 = new Xrm.LookupObject;
    $v_6.name = $v_4;
    $v_6.id = $v_5;
    var $v_7 = new Array(1);
    $v_7.push($v_6);
    if (Mscrm.CommandBarActions.isMobileCompanionApp())
        try {
            Xrm.Utility.openTaskFlow("after_meeting", $v_7, null);
            return
        } catch ($v_8) {
        }
    Xrm.Utility.openEntityForm($v_3[0], $v_3[1], null)
};
Mscrm.CommandBarActions.createNewMeetingCard = function(gridControl, records) {
    var $v_0 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid"),
        $v_1 = Mscrm.CommandBarActions.getRecordIdBasedOnFormType(),
        $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id)),
        $v_3 = gridControl.getCellValue("cardtype", records[0].Id),
        $v_4 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_5 = gridControl.getCellValue("data", records[0].Id),
        $v_6 = Sys.Serialization.JavaScriptSerializer.deserialize($v_5),
        $v_7 = $v_6.title,
        $v_8 = $v_6.relatedmailids;
    Mscrm.CommandBarActions.createMeetingActionHandler(gridControl, records, $v_0, $v_8, $v_7, $v_4, 0, true)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions
    .createMeetingActionHandler = function(gridControl,
        records,
        messageId,
        relatedMailIds,
        subject,
        regardingobjectId,
        regardingObjectTypeCode,
        isMocaClient) {
        var $v_0 = Mscrm.NewMeetingHandler
            .createRecordForAppointment(messageId,
                relatedMailIds,
                subject,
                regardingobjectId,
                regardingObjectTypeCode,
                isMocaClient);
        return Xrm.Internal.messages.create($v_0).then(function($p1_0) {
                Mscrm.CommandBarActions.dismiss(gridControl, records);
                var $v_1 = $p1_0.id.toString();
                Xrm.Utility.openEntityForm("appointment", $v_1)
            },
            function($p1_0) { Mscrm.NewMeetingHandler.handleAppointmentCreationError(true) })
    };
Mscrm.CommandBarActions.getRecordIdBasedOnFormType = function() {
    return IsNull(Xrm.Page.data) ? "" : Xrm.Page.data.entity.getId()
};
Mscrm.CommandBarActions.addAsStakeHolder = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "EmailAddress"),
        $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id)),
        $v_3 = gridControl.getCellValue("cardtype", records[0].Id),
        $v_4 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid");
    if (IsNull($v_0) || IsNull($v_1) || $v_0.indexOf(":") === -1) return;
    Mscrm.CommandBarActions.$1m($v_1).then(function($p1_0) {
            var $v_5 = $p1_0.entityCollection;
            if (!$v_5.get_count())
                Mscrm.CommandBarActions.$2n($v_1).then(function($p2_0) {
                        Mscrm.CommandBarActions.$1m($v_1).then(function($p3_0) {
                                var $v_6 = $p3_0.entityCollection;
                                if ($v_6.get_count()) {
                                    Mscrm.CommandBarActions.$1d($v_6, gridControl, $v_0);
                                    Mscrm.CommandBarActions.$2N($v_2, 2, $v_4)
                                }
                            },
                            function($p3_0) { Mscrm.CommandBarActions.$1($p3_0) })
                    },
                    function($p2_0) {
                        var $v_7 = {};
                        $v_7["emailaddress1"] = $v_1;
                        $v_7["lastname"] = $v_1;
                        $v_7["fullname"] = $v_1;
                        Xrm.Utility.openEntityForm("contact", null, $v_7);
                        return
                    });
            else {
                Mscrm.CommandBarActions.$1d($v_5, gridControl, $v_0);
                Mscrm.CommandBarActions.$2N($v_2, 2, $v_4)
            }
        },
        function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$2N = function($p0, $p1, $p2) {
    Xrm.Internal.messages.setActionCardState($p0, $p1, $p2)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$1d = function($p0, $p1, $p2) {
    var $v_0 = $p2.split(":"),
        $v_1 = $v_0[0],
        $v_2 = $v_0[1],
        $v_3 = $p0.get_entities()[0].getValue("contactid"),
        $v_4 = $v_3.toString();
    if (Microsoft.Crm.Client.Core.Framework.Guid.get_empty() === $v_3 || IsNull($v_4)) return;
    var $v_5 = "518D7AAA-3B4C-4041-AD33-A6FD40DF6C81", $v_6 = "contact";
    Mscrm.CommandBarActions.$2m($v_1, $v_2, $v_6, $v_4, $v_5)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$1m = function($p0) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='contact'>\r\n\t\t\t\t\t\t\t\t<attribute name='contactid' />\r\n\t\t\t\t\t\t\t\t<order attribute='fullname' descending='false' />\r\n\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t<condition attribute='emailaddress1' operator='eq' value='{0}' />\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t</fetch>";
    $v_0 = String.format($v_0, CrmEncodeDecode.CrmXmlAttributeEncode($p0));
    return Xrm.Internal.messages.retrieveMultiple($v_0)
};
Mscrm.CommandBarActions.$2n = function($p0) {
    var $v_0 = {},
        $v_1 = {},
        $v_2 = new Xrm.Objects.EntityReference("contact", Microsoft.Crm.Client.Core.Framework.Guid.newGuid()),
        $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_2,
                $v_0,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_0["lastname"] = $p0;
    $v_0["emailaddress1"] = $p0;
    $v_1["lastname"] = 14;
    $v_1["emailaddress1"] = 7;
    $v_3.get_changedFieldNames().addRange(["lastname", "emailaddress1"]);
    return Xrm.Internal.messages.create($v_3)
};
Mscrm.CommandBarActions.$2m = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = "26591187-1160-4D25-8723-2D9C92617D3A",
        $v_1 = {},
        $v_2 = {},
        $v_3 = new Xrm.Objects.EntityReference("connection", Microsoft.Crm.Client.Core.Framework.Guid.newGuid()),
        $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_3,
                $v_1,
                $v_2,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_1["record1id"] = new Xrm.Objects.EntityReference($p0, new Microsoft.Crm.Client.Core.Framework.Guid($p1));
    $v_1["record2id"] = new Xrm.Objects.EntityReference($p2, new Microsoft.Crm.Client.Core.Framework.Guid($p3));
    $v_1["record1roleid"] = new Xrm.Objects.EntityReference("role", new Microsoft.Crm.Client.Core.Framework.Guid($v_0));
    $v_1["record2roleid"] = new Xrm.Objects.EntityReference("role", new Microsoft.Crm.Client.Core.Framework.Guid($p4));
    $v_2["record1id"] = 6;
    $v_2["record2id"] = 6;
    $v_2["record2roleid"] = 6;
    $v_2["record1roleid"] = 6;
    $v_4.get_changedFieldNames().addRange(["record1id", "record2id", "record1roleid", "record2roleid"]);
    return Xrm.Internal.messages.create($v_4)
};
Mscrm.CommandBarActions.openEmailWebClient = function(gridControl, records) {
    var $v_0 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid"),
        $v_1 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "mailweblink");
    window.open($v_1)
};
Mscrm.CommandBarActions.addAsCompetitorUsingCard = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "CompetitorId"),
        $v_2 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id)),
        $v_3 = gridControl.getCellValue("cardtype", records[0].Id),
        $v_4 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid");
    if (IsNull($v_0) || IsNull($v_1) || $v_0.indexOf(":") === -1) return;
    var $v_5 = $v_0.split(":"),
        $v_6 = $v_5[0],
        $v_7 = $v_5[1],
        $v_8 = "competitor",
        $v_9 = 1,
        $v_A = "opportunitycompetitors_association",
        $v_B = new Xrm.Objects.EntityReference($v_8, new Microsoft.Crm.Client.Core.Framework.Guid($v_1)),
        $v_C = new Xrm.Objects.EntityReference($v_6, new Microsoft.Crm.Client.Core.Framework.Guid($v_7));
    Mscrm.CommandBarActions.associateManyToManyRelation($v_9, $v_C, $v_B, $v_A)
        .then(function($p1_0) {
                Xrm.Internal.messages.setActionCardState($v_2, 2, $v_4)
                    .then(function($p2_0) {}, function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
            },
            function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.updateUserActionCardPreferences = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("cardtype", records[0].Id), $v_1 = Number.parseInvariant($v_0);
    if ($v_1 === 5)
        Mscrm.CommandBarActions.updateActionCardUserSettings(gridControl, records)
            .then(function($p1_0) { Mscrm.CommandBarActions.addAsCompetitorUsingCard(gridControl, records) },
                function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) });
    else
        $v_1 === 4 &&
            Mscrm.CommandBarActions.updateActionCardUserSettings(gridControl, records)
            .then(function($p1_0) { Mscrm.CommandBarActions.addAsStakeHolder(gridControl, records) },
                function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.updateActionCardUserSettings = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("cardtype", records[0].Id), $v_1 = Number.parseInvariant($v_0), $v_2 = "";
    if ($v_1 === 5) $v_2 = "99091b4d-ec9a-4113-bfe9-96c4e44a3559";
    else if ($v_1 === 4) $v_2 = "d6232578-c302-4035-894f-868d03ee465b";
    var $v_3 = "actioncardusersettings",
        $v_4 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2),
        $v_5 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId());
    return Mscrm.CommandBarActions.$1n($v_1, $v_3, $v_5).then(function($p1_0) {
            var $v_6 = $p1_0.entityCollection;
            if ($v_6.get_count() > 0) {
                var $v_7 = {}, $v_8 = {}, $v_9 = $v_6.get_entities()[0], $v_A = new Array(2), $v_B = "boolcardoption";
                $v_A[0] = $v_B;
                $v_7[$v_B] = 0;
                $v_8[$v_B] = true;
                var $v_C = new Xrm.Objects.EntityReference($v_3, $v_9.getValue("actioncardusersettingsid")),
                    $v_D = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                        .EntityRecord($v_C,
                            $v_8,
                            $v_7,
                            {},
                            {},
                            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                            .RelatedEntityCollection(new Array(0)));
                $v_D.get_changedFieldNames().addRange($v_A);
                Xrm.Internal.messages.update($v_D).then(function($p2_0) {},
                    function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
            } else
                Mscrm.CommandBarActions.$1a($v_4, $v_1, false, $v_3)
                    .then(function($p2_0) {}, function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
        },
        function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$2w = function($p0, $p1, $p2, $p3) {
    Mscrm.CommandBarActions.updateDismissAction($p1, Mscrm.CommandBarActions.getRecordIdBasedOnFormType())
        .then(function() {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$36 = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = {};
    $v_0["entityId"] = $p1;
    $v_0["entityName"] = $p0;
    $v_0["actionCardId"] = $p2.toString();
    $v_0["cardType"] = $p3.toString();
    $v_0["message_id"] = $p4;
    return $v_0
};
Mscrm.CommandBarActions.getEmailBody = function(isReplyAffirmative, cardContent) {
    var $v_0 = isReplyAffirmative
        ? Xrm.Internal.getResourceString("Ribbon.Tooltip.delveactionhub.YesButton")
        : Xrm.Internal.getResourceString("Ribbon.Tooltip.delveactionhub.NoButton");
    return String.format("{0}\n{1}", cardContent, $v_0)
};
Mscrm.CommandBarActions.updateCompleteAction = function(messageId, recordId) {
    return Xrm.Internal.messages.updateDelveActionStatus(messageId, 2, recordId)
};
Mscrm.CommandBarActions.updateDismissAction = function(messageId, recordId) {
    return Xrm.Internal.messages.updateDelveActionStatus(messageId, 1, recordId)
};
Mscrm.CommandBarActions.replyAction = function(messageId, emailBody) {
    return Xrm.Internal.messages.createEmailReplyDraft(messageId, emailBody)
};
Mscrm.CommandBarActions.cancelPhoneCall = function(gridControl, records) {
    var $v_0 = 3, $v_1 = 2, $v_2 = ["statuscode", "statecode", "subject"];
    Mscrm.CommandBarActions.updateRecordForStateChange(gridControl, records, $v_0, $v_1, $v_2)
};
Mscrm.CommandBarActions.cancelTask = function(gridControl, records) {
    var $v_0 = ["statuscode", "statecode", "subject"], $v_1 = 6, $v_2 = 2;
    Mscrm.CommandBarActions.updateRecordForStateChange(gridControl, records, $v_1, $v_2, $v_0)
};
Mscrm.CommandBarActions
    .updateRecordForStateChange = function(gridControl, records, selectedStatus, selectedState, columns) {
        var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
            $v_1 = "",
            $v_2 = "",
            $v_3 = 0,
            $v_4 = $v_0.split(":");
        $v_1 = $v_4[0];
        $v_2 = $v_4[1];
        $v_3 = Xrm.Internal.getEntityCode($v_1);
        Xrm.Internal.messages.retrieve($v_1, $v_2, columns).then(function($p1_0) {
                var $v_5 = $p1_0, $v_6 = $v_5.entity;
                if ($v_6.hasField("statecode")) {
                    var $v_7 = parseInt($v_6.getValue("statecode").getValue("value").toString());
                    if ($v_7 === 1 || $v_7 === 2)
                        Xrm.Internal.messages.setState($v_1, $v_2.toString(), selectedState, selectedStatus)
                            .then(function($p2_0) {}, function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) });
                    else {
                        records[0].Id = $v_2;
                        records[0].TypeCode = $v_3;
                        Mscrm.GridCommandActions.deactivate(gridControl, records, $v_3, 1, null)
                    }
                }
            },
            function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
    };
Mscrm.CommandBarActions.completeOtherActivity = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = "",
        $v_2 = "",
        $v_3 = 0,
        $v_4 = 0,
        $v_5 = 0;
    if (!IsNull($v_0)) {
        var $v_6 = $v_0.split(":");
        $v_1 = $v_6[0];
        $v_2 = $v_6[1];
        $v_3 = Xrm.Internal.getEntityCode($v_1)
    }
    switch ($v_1) {
    case "appointment":
        $v_4 = 3;
        $v_5 = 1;
        break;
    case "letter":
        $v_4 = 4;
        $v_5 = 1;
        break;
    case "fax":
        $v_4 = 2;
        $v_5 = 1;
        break;
    case "serviceappointment":
        $v_4 = 8;
        $v_5 = 1;
        break;
    default:
        $v_4 = 2;
        $v_5 = 1;
        break
    }
    Xrm.Internal.messages.setState($v_1, $v_2.toString(), $v_5, $v_4)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.cancelOtherActivity = function(gridControl, records) {
    var $v_0 = 0, $v_1 = 0, $v_2 = "", $v_3 = gridControl.getCellValue("regardingobjectid", records[0].Id);
    if (!IsNull($v_3)) {
        var $v_5 = $v_3.split(":");
        $v_2 = $v_5[0]
    }
    var $v_4 = ["statuscode", "statecode", "subject"];
    switch ($v_2) {
    case "appointment":
        $v_0 = 4;
        $v_1 = 2;
        break;
    case "letter":
        $v_0 = 5;
        $v_1 = 2;
        break;
    case "fax":
        $v_0 = 5;
        $v_1 = 2;
        break;
    case "serviceappointment":
        $v_0 = 9;
        $v_1 = 2;
        break;
    default:
        $v_0 = 3;
        $v_1 = 2;
        break
    }
    Mscrm.CommandBarActions.updateRecordForStateChange(gridControl, records, $v_0, $v_1, $v_4)
};
Mscrm.CommandBarActions.completeTask = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(gridControl.getCellValue("actioncardid", records[0].Id)),
        $v_2 = gridControl.getCellValue("cardtype", records[0].Id),
        $v_3 = Mscrm.CommandBarActions.$E(gridControl, records[0].Id, "messageid"),
        $v_4 = "",
        $v_5 = "",
        $v_6 = 0,
        $v_7 = 5,
        $v_8 = 1,
        $v_9 = $v_0.split(":");
    $v_4 = $v_9[0];
    $v_5 = $v_9[1];
    $v_6 = Xrm.Internal.getEntityCode($v_4);
    Xrm.Internal.messages.setState($v_4, $v_5.toString(), $v_8, $v_7)
        .then(function($p1_0) {}, function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.updatePhoneCallData = function() {
    var $v_0 = "",
        $v_1 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
        $v_2 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("actionCardId").toString(),
        $v_3 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("cardType").toString(),
        $v_4 = parseInt($v_3),
        $v_5 = "phonecall",
        $v_6 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1.toString()),
        $v_7 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2.toString()),
        $v_8 = Xrm.Page.getControl("description_id"),
        $v_9 = $v_8.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_9) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_9.getValue())) $v_0 = $v_9.getValue().toString();
    var $v_A = Xrm.Internal.getResourceString("CompletePhoneCall_Description_AppendText"),
        $v_B = {},
        $v_C = {},
        $v_D = "",
        $v_E = new Array(2),
        $v_F = ["description"];
    Xrm.Internal.messages.retrieve($v_5, $v_1, $v_F).then(function($p1_0) {
            var $v_G = $p1_0, $v_H = $v_G.entity;
            if ($v_H.hasField("description")) {
                var $v_L = $v_H.getValue("description");
                if (Mscrm.InternalUtilities.JSTypes
                    .isNullOrEmptyString($v_H.getValue("description").toString())) $v_D = $v_0;
                else $v_D = $v_L.toString() + "\n\n" + $v_A + "\n\n" + $v_0
            } else $v_D = $v_0;
            var $v_I = "description";
            $v_E[0] = $v_I;
            $v_B[$v_I] = 14;
            $v_C[$v_I] = $v_D;
            var $v_J = new Xrm.Objects.EntityReference("phonecall", $v_6),
                $v_K = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_J,
                        $v_C,
                        $v_B,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_K.get_changedFieldNames().addRange($v_E);
            Xrm.Internal.messages.update($v_K).then(function($p2_0) {
                    var $v_M = 2, $v_N = 1;
                    Xrm.Internal.messages.setState("phonecall", $v_1, $v_N, $v_M)
                        .then(function($p3_0) { Xrm.Page.ui.close() },
                            function($p3_0) {
                                Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Page.ui.close();
                                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p3_0)
                            })
                },
                function($p2_0) {
                    Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Page.ui.close();
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p2_0)
                })
        },
        function($p1_0) {
            Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Page.ui.close();
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0)
        })
};
Mscrm.CommandBarActions.$E = function($p0, $p1, $p2) {
    var $v_0 = $p0.getCellValue("data", $p1), $v_1 = {};
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) $v_1 = JSON.parse($v_0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$p2])) return $v_1[$p2].toString();
    return ""
};
Mscrm.CommandBarActions.openNewEmailFormRegarding = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = "",
        $v_2 = "",
        $v_3 = null,
        $v_4 = $v_0.split(":");
    $v_1 = $v_4[0];
    $v_2 = $v_4[1];
    if ($v_1 === "lead" || $v_1 === "contact") {
        var $v_5 = new Xrm.DialogOptions;
        $v_5.openInNewWindow = true;
        var $v_6 = {};
        $v_6["partyid"] = CrmEncodeDecode.CrmUrlEncode($v_2);
        $v_6["partytype"] = CrmEncodeDecode.CrmUrlEncode(Xrm.Internal.getEntityCode($v_1).toString());
        Xrm.Utility.openEntityForm("email", null, $v_6, $v_5)
    } else {
        if ($v_1 === "account") $v_3 = ["primarycontactid", "ownerid"];
        else $v_3 = ["customerid", "ownerid"];
        Xrm.Internal.messages.retrieve($v_1, $v_2, $v_3).then(function($p1_0) {
                var $v_7 = $p1_0, $v_8 = $v_7.entity;
                if ($v_8.hasField("customerid") ||
                    $v_8.hasField("primarycontactid") ||
                    $v_8.hasField("parentcustomerid") ||
                    $v_8.hasField("parentaccountid")) {
                    var $v_9 = $v_8.getValue("ownerid"), $v_A = null;
                    if ($v_8.hasField("primarycontactid")) $v_A = $v_8.getValue("primarycontactid");
                    else if ($v_8.hasField("parentcustomerid")) $v_A = $v_8.getValue("parentcustomerid");
                    else if ($v_8.hasField("parentaccountid")) $v_A = $v_8.getValue("parentaccountid");
                    else if ($v_8.hasField("customerid")) $v_A = $v_8.getValue("customerid");
                    var $v_B = ["emailaddress1"];
                    Xrm.Internal.messages.retrieve($v_A.LogicalName, $v_A.Id.toString(), $v_B).then(function($p2_0) {
                            var $v_C = $p2_0,
                                $v_D = $v_C.entity,
                                $v_E = Mscrm.WindowInformation
                                    .getWindowInformation(Xrm.Internal.getEntityCode("email")),
                                $v_F = Mscrm.InternalUtilities.JSTypes.isNull($v_E) ? null : $v_E.Url,
                                $v_G = new Xrm.DialogOptions;
                            $v_G.openInNewWindow = true;
                            var $v_H = {};
                            $v_H["partyid"] = CrmEncodeDecode.CrmUrlEncode($v_A.Id.toString());
                            $v_H["partytype"] = CrmEncodeDecode
                                .CrmUrlEncode(Xrm.Internal.getEntityCode($v_A.TypeName).toString());
                            $v_H["partyname"] = CrmEncodeDecode.CrmUrlEncode($v_A.Name);
                            Xrm.Utility.openEntityForm("email", null, $v_H, $v_G)
                        },
                        function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
                } else {
                    var $v_I = new Xrm.DialogOptions;
                    $v_I.openInNewWindow = true;
                    Xrm.Utility.openEntityForm("email", null, null, $v_I)
                }
            },
            function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
    }
};
Mscrm.CommandBarActions.makeCall = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("data", records[0].Id),
        $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0),
        $v_2 = $v_1.Phone,
        $v_3 = $v_1.Id,
        $v_4 = $v_1.TypeCode;
    if ($v_2 !== "") {
        var $v_5 = (eval("window.USE_SKYPE_PROTOCOL")).toString().toLowerCase(),
            $v_6 = (eval("window.PHONE_NUMBER_DEFAULT_COUNTRY_CODE")).toString().toLowerCase(),
            $v_7 = !IsNull($v_5) && $v_5 === "false" ? "tel" : "skype";
        Mscrm.Shortcuts.openPhoneWindow($v_2, $v_6, $v_7)
    } else {
        var $v_8 = new Xrm.DialogOptions;
        $v_8.openInNewWindow = true;
        var $v_9 = Xrm.Internal.getEntityName($v_4);
        Xrm.Utility.openEntityForm($v_9, $v_3, null, $v_8)
    }
};
Mscrm.CommandBarActions.openRecipient = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("data", records[0].Id),
        $v_1 = Sys.Serialization.JavaScriptSerializer.deserialize($v_0),
        $v_2 = $v_1.Id,
        $v_3 = $v_1.TypeCode,
        $v_4 = new Xrm.DialogOptions;
    $v_4.openInNewWindow = true;
    var $v_5 = Xrm.Internal.getEntityName($v_3);
    Xrm.Utility.openEntityForm($v_5, $v_2, null, $v_4)
};
Mscrm.CommandBarActions.createCase = function(gridControl, records) {
    var $v_0 = gridControl.getCellValue("regardingobjectid", records[0].Id),
        $v_1 = gridControl.getCellValue("data", records[0].Id),
        $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize($v_1),
        $v_3 = $v_2.title,
        $v_4 = {};
    if ($v_3) {
        $v_3 = $v_3.replace("Re:", "").trim();
        $v_3 = $v_3.replace("Fwd:", "").trim();
        $v_4["title"] = $v_3;
        if (IsNull($v_0)) {
            Mscrm.CommandBarActions.$Z(gridControl, records, $v_4, null, null);
            return
        }
        var $v_5 = $v_0.split(":");
        if (!Mscrm.CommandBarActions.$4Y($v_5[0])) {
            Mscrm.CommandBarActions.$Z(gridControl, records, $v_4, null, null);
            return
        }
        Mscrm.CommandBarActions.$33($v_3).then(function($p1_0) {
                var $v_6 = $p1_0.entityCollection;
                if ($v_6.get_count() > 0) {
                    var $v_7 = $v_6.get_entities(), $v_8 = $v_6.get_entities()[0].getValue("incidentid");
                    Xrm.Utility.openEntityForm("incident", $v_8.toString())
                } else {
                    var $v_9 = new Mscrm.InternalUtilities.EntityReference;
                    $v_9.Id = $v_5[1];
                    $v_9.TypeName = $v_5[0];
                    var $v_A = null, $v_B = null;
                    if ($v_9.TypeName === "opportunity") {
                        var $v_C = ["parentcontactid", "parentaccountid"];
                        Xrm.Internal.messages.retrieve($v_9.TypeName, $v_9.Id.toString(), $v_C).then(function($p2_0) {
                                var $v_D = $p2_0, $v_E = $v_D.entity;
                                if ($v_E.hasField("parentcontactid")) $v_A = $v_E.getValue("parentcontactid");
                                if ($v_E.hasField("parentaccountid")) $v_B = $v_E.getValue("parentaccountid");
                                Mscrm.CommandBarActions.$Z(gridControl, records, $v_4, $v_A, $v_B)
                            },
                            function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
                    } else if ($v_9.TypeName === "account") {
                        var $v_F = ["primarycontactid"];
                        Xrm.Internal.messages.retrieve($v_9.TypeName, $v_9.Id.toString(), $v_F).then(function($p2_0) {
                                var $v_G = $p2_0, $v_H = $v_G.entity;
                                if ($v_H.hasField("primarycontactid")) $v_A = $v_H.getValue("primarycontactid");
                                Mscrm.CommandBarActions.$Z(gridControl, records, $v_4, $v_A, $v_9)
                            },
                            function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
                    } else
                        $v_9.TypeName === "contact" &&
                            Mscrm.CommandBarActions.$Z(gridControl, records, $v_4, $v_9, $v_9)
                }
            },
            function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
    }
};
Mscrm.CommandBarActions.$4Y = function($p0) { return $p0 === "opportunity" || $p0 === "account" || $p0 === "contact" };
Mscrm.CommandBarActions.$Z = function($p0, $p1, $p2, $p3, $p4) {
    if ($p3) {
        $p2["primarycontactid"] = $p3.Id.toString();
        $p2["primarycontactidname"] = $p3.Name
    }
    if ($p4) {
        $p2["customerid"] = $p4.Id.toString();
        $p2["customeridname"] = $p4.Name;
        $p2["customeridtype"] = $p4.TypeName
    }
    Mscrm.CommandBarActions.dismiss($p0, $p1);
    Xrm.Utility.openEntityForm("incident", null, $p2)
};
Mscrm.CommandBarActions.$33 = function($p0) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='incident'>\r\n\t\t\t\t\t\t\t\t<attribute name='incidentid' />\r\n\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t<condition attribute='title' operator='eq' value='{0}' />\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t</fetch>";
    $v_0 = String.format($v_0, CrmEncodeDecode.CrmXmlAttributeEncode($p0));
    return Xrm.Internal.messages.retrieveMultiple($v_0)
};
Mscrm.CommandBarActions.gotItAction = function(gridControl, records) {
    var $v_0 = 28,
        $v_1 = "0734fea3-46b9-4e9c-9001-53e957ec2dd4",
        $v_2 = "actioncardusersettings",
        $v_3 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1),
        $v_4 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId());
    Mscrm.CommandBarActions.$1n($v_0, $v_2, $v_4).then(function($p1_0) {
            var $v_5 = $p1_0.entityCollection;
            if ($v_5.get_count() > 0) {
                var $v_6 = {}, $v_7 = {}, $v_8 = $v_5.get_entities()[0], $v_9 = new Array(2), $v_A = "isenabled";
                $v_9[0] = $v_A;
                $v_6[$v_A] = 0;
                $v_7[$v_A] = false;
                var $v_B = new Xrm.Objects.EntityReference($v_2, $v_8.getValue("actioncardusersettingsid")),
                    $v_C = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                        .EntityRecord($v_B,
                            $v_7,
                            $v_6,
                            {},
                            {},
                            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                            .RelatedEntityCollection(new Array(0)));
                $v_C.get_changedFieldNames().addRange($v_9);
                Xrm.Internal.messages.update($v_C).then(function($p2_0) {},
                    function($p2_0) { Mscrm.CommandBarActions.$1($p2_0) })
            } else Mscrm.CommandBarActions.$1a($v_3, $v_0, false, $v_2);
            loadLetsGetStartedCard(true)
        },
        function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$1n = function($p0, $p1, $p2) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='{0}'>\r\n\t\t\t\t\t\t\t\t<attribute name='isenabled' />\r\n\t\t\t\t\t\t\t\t<attribute name='actioncardusersettingsid' />\r\n\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t<condition attribute='cardtype' operator='eq' value='{1}' />\r\n\t\t\t\t\t\t\t\t<condition attribute='ownerid' operator='eq' value='{2}' />\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t</fetch>";
    $v_0 = String.format($v_0,
        CrmEncodeDecode.CrmXmlAttributeEncode($p1),
        CrmEncodeDecode.CrmXmlAttributeEncode($p0.toString()),
        CrmEncodeDecode.CrmXmlAttributeEncode($p2.toString()));
    return Xrm.Internal.messages.retrieveMultiple($v_0)
};
Mscrm.CommandBarActions.$1a = function($p0, $p1, $p2, $p3) {
    var $v_0 = {},
        $v_1 = {},
        $v_2 = new Xrm.Objects.EntityReference($p3, Microsoft.Crm.Client.Core.Framework.Guid.newGuid()),
        $v_3 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_2,
                $v_0,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_0["cardtypeid"] = new Xrm.Objects.EntityReference("cardtype", $p0);
    $v_0["isenabled"] = $p2;
    $v_0["cardtype"] = $p1;
    if ($p1 === 4 || $p1 === 5) {
        $v_0["boolcardoption"] = true;
        $v_0["isenabled"] = true
    }
    $v_1["cardtypeid"] = 6;
    $v_1["isenabled"] = 0;
    $v_1["cardtype"] = 5;
    if ($p1 === 4 || $p1 === 5) $v_1["boolcardoption"] = 0;
    $v_3.get_changedFieldNames().addRange(["cardtypeid", "isenabled", "cardtype"]);
    ($p1 === 4 || $p1 === 5) && $v_3.get_changedFieldNames().add("boolcardoption");
    return Xrm.Internal.messages.create($v_3).then(function($p1_0) {},
        function($p1_0) { Mscrm.CommandBarActions.$1($p1_0) })
};
Mscrm.CommandBarActions.$1 = function($p0) {
    if (Mscrm.CommandBarActions.isWebClient()) {
        var $v_0 = $p0.get_organizationServiceFault();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = $v_0.get_errorCode(), $v_2 = Xrm.Internal.getErrorMessage($v_1);
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
                Mscrm.CommandBarActions.showErrorMessage(CrmEncodeDecode.CrmHtmlEncode($v_2))
        }
    } else Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p0)
};
Mscrm.CommandBarActions.resolve = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) return;
    if (!Xrm.Page.data.getIsValid()) return;
    var $v_0 = 0;
    if (Xrm.Utility.isMocaOffline())
        Xrm.Utility.getValidStatusTransition("incident",
            Xrm.Page.data.entity.getId(),
            Mscrm.InternalUtilities.DialogUtility.getAttributeValue("statuscode"),
            Mscrm.InternalUtilities.DialogUtility.getAttributeValue("statecode"),
            1).then(function($p1_0) {
                $v_0 = $p1_0;
                Mscrm.CommandBarActions.$e($v_0)
            },
            function($p1_0) { return });
    else
        Xrm.Internal.messages.getValidStatusTransition(Xrm.Page.data.entity.getId(), 1).then(function($p1_0) {
                $v_0 = $p1_0.result;
                Mscrm.CommandBarActions.$e($v_0)
            },
            function() { return })
};
Mscrm.CommandBarActions.$e = function($p0) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 600;
    var $v_1 = null;
    switch ($p0) {
    case 1:
        $v_1 = new Xrm.ConfirmDialogStrings;
        Mscrm.InternalUtilities.DialogConfirmStrings
            .tryGetDialogStringsForEnabledMetadataDialogs("ResolveCaseNOvalidStatusReasonTransition", $v_1, null) &&
            Xrm.Dialog.openConfirmDialog($v_1, $v_0, null, null);
        break;
    case 2:
        $v_1 = new Xrm.ConfirmDialogStrings;
        if (Mscrm.InternalUtilities.DialogConfirmStrings
            .tryGetDialogStringsForEnabledMetadataDialogs("ResolveCase", $v_1, null)) {
            var $v_3 = Mscrm.CommandBarActions.commonForResolve;
            Xrm.Dialog.openConfirmDialog($v_1, $v_0, $v_3, null)
        }
        break;
    case 3:
        Mscrm.CommandBarActions.commonForResolve();
        break;
    case 4:
        var $v_2 = new Xrm.AlertDialogStrings;
        $v_2.text = Xrm.Internal.getResourceString("Error_Message_0x80044411");
        Xrm.Dialog.openAlertDialog($v_2, null, null);
        break
    }
};
Mscrm.CommandBarActions.commonForResolve = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 391;
    $v_0.width = 420;
    var $v_1 = {};
    $v_1["entityId"] = Xrm.Page.data.entity.getId();
    $v_1["lastButtonClicked"] = "ok_id";
    $v_1["timeSpent"] = -1;
    $v_1["remarks_id"] = "";
    $v_1["resolution_id"] = "";
    $v_1["resolutionType_id"] = -1;
    var $v_2 = Mscrm.CommandBarActions.resolveCaseDialogCloseCallback;
    Xrm.Dialog.openDialog("ResolveCase", $v_0, $v_1, $v_2, null)
};
Mscrm.CommandBarActions.resolveCaseDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = Mscrm.CommandBarActions.getResolveCaseDialogResult(dialogParams),
            $v_1 = Xrm.Page.data.entity.getId(),
            $v_2 = function() {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                Mscrm.CommandBarActions.performPageRefresh(false)
            };
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if (Xrm.Utility.isMocaOffline()) Mscrm.CommandBarActions.performResolveCase($v_0, $v_1, $v_2);
        else
            Xrm.Page.data.save().then(function() { Mscrm.CommandBarActions.performResolveCase($v_0, $v_1, $v_2) },
                Mscrm.InternalUtilities.DialogUtility.operationFailedCallbackForMoca)
    }
};
Mscrm.CommandBarActions.getResolveCaseDialogResult = function(dialogParams) {
    var $v_0 = new Mscrm.ResolveCaseDialogResult;
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(dialogParams["timeSpent"])) $v_0.TimeSpent = parseInt(dialogParams["timeSpent"].toString());
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(dialogParams["remarks_id"])) $v_0.Description = dialogParams["remarks_id"].toString();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(dialogParams["resolution_id"])) $v_0.Subject = dialogParams["resolution_id"].toString();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(dialogParams["resolutionType_id"]))
        $v_0.StatusCode = parseInt(dialogParams["resolutionType_id"].toString());
    return $v_0
};
Mscrm.CommandBarActions.performActionAfterCloseCase = function(returnValue) {
    var $v_0 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        var $v_1 = Xrm.Page.data.entity
                .getId(),
            $v_2 = function() { Mscrm.CommandBarActions.performPageRefresh(false) };
        if (Xrm.Utility.isMocaOffline()) Mscrm.CommandBarActions.performResolveCase(returnValue, $v_1, $v_2);
        else
            Xrm.Page.data.save()
                .then(function() { Mscrm.CommandBarActions.performResolveCase(returnValue, $v_1, $v_2) },
                    Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
        $v_0 = true
    }
    return $v_0
};
Mscrm.CommandBarActions.performResolveCase = function(returnValue, caseId, successCallback) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() && !Xrm.Utility.isEntityOfflineSyncEnabled("incident")) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback;
    $v_0 = Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        var $v_1 = {}, $v_2 = {}, $v_3 = new Array(4), $v_4 = "incidentid";
        $v_3[0] = $v_4;
        $v_1[$v_4] = 6;
        $v_2[$v_4] = new Xrm.Objects.EntityReference("incident", new Microsoft.Crm.Client.Core.Framework.Guid(caseId));
        $v_4 = "timespent";
        $v_3[1] = $v_4;
        $v_1[$v_4] = 5;
        $v_2[$v_4] = returnValue.TimeSpent;
        $v_4 = "description";
        $v_3[2] = $v_4;
        $v_1[$v_4] = 14;
        $v_2[$v_4] = returnValue.Description;
        $v_4 = "subject";
        $v_3[3] = $v_4;
        $v_1[$v_4] = 14;
        $v_2[$v_4] = returnValue.Subject;
        var $v_5 = new Xrm.Objects.EntityReference("incidentresolution",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_5,
                    $v_2,
                    $v_1,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_6.get_changedFieldNames().addRange($v_3);
        if (Xrm.Utility.isMocaOffline()) {
            var $v_7 = new Xrm.Gen.CloseIncidentRequest($v_6, returnValue.StatusCode), $v_8 = new Xrm.Sdk.Response;
            $v_8.name = "CloseIncident";
            var $v_9 = function() { successCallback($v_8) };
            if (!Mscrm.InternalUtilities._Script
                .isNullOrUndefined(Xrm.Page.data) &&
                Xrm.Page.data.getIsDirty())
                Xrm.Page.data.save().then(function() {
                        Xrm.Utility.executeNonCudCommand("CloseIncident", "incident", $v_7, $v_9, $v_0)
                    },
                    Mscrm.InternalUtilities.DialogUtility.operationFailedCallbackForMoca);
            else Xrm.Utility.executeNonCudCommand("CloseIncident", "incident", $v_7, $v_9, $v_0)
        } else Xrm.Internal.messages.closeIncident($v_6, returnValue.StatusCode).then(successCallback, $v_0)
    }
};
Mscrm.CommandBarActions.onLoadCloseQuoteDialog = function() {
    Mscrm.CommandBarActions.$3t();
    Mscrm.CommandBarActions.initializeDateControl("closequotedate_id");
    Mscrm.CommandBarActions
        .filterOptionSetValuesFromControl("quote", Mscrm.CommandBarActions.$1s(), "closequotestatusreason_id");
    Mscrm.CommandBarActions.$R("closequotecreaterevisedquote_id", Xrm.Page.context.client.getClient() !== "Outlook");
    Mscrm.CommandBarActions.$2V()
};
Mscrm.CommandBarActions.onCloseCloseQuoteDialog = function() {
    var $v_0 = Mscrm.CommandBarActions.$3L(),
        $v_1 = Mscrm.CommandBarActions.$3I(),
        $v_2 = Mscrm.CommandBarActions.$3J(),
        $v_3 = Mscrm.CommandBarActions.$1s(),
        $v_4 = Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("closequotestatusreason_id"),
        $v_5 = Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("closequotecreaterevisedquote_id"),
        $v_6 = Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("closequotecloseopportunity_id"),
        $v_7 = Mscrm.CommandBarActions.$3K();
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("quoteid", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("opportunityid", $v_7);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closequotedate_id", $v_1);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("description_id", $v_2);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closedstate", $v_3.toString());
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closequotestatusreason_id", $v_4);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closequotecreaterevisedquote_id", $v_5);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closequotecloseopportunity_id", $v_6);
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.onCloseQuoteCreateRevisedChanged = function() { Mscrm.CommandBarActions.$2V() };
Mscrm.CommandBarActions.$3t = function() {
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("header_lbl_closequote", "Close_Quote_Dlg_Title");
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("lbl_closequotedescription", "Close_Quote_Dlg_Desc");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("closequotedate_id", "Web.SFA.quotes.dlg_close.aspx_155")
};
Mscrm.CommandBarActions.$2V = function() {
    var $v_0 = Mscrm.CommandBarActions.$3H() &&
        Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("closequotecreaterevisedquote_id") !== 1;
    Mscrm.CommandBarActions.$R("closequotecloseopportunity_id", $v_0)
};
Mscrm.CommandBarActions.$1s = function() {
    var $v_0 = Xrm.Page.getAttribute("closedstate");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3H = function() {
    var $v_0 = Xrm.Page.getAttribute("cancloseopportunity");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3L = function() {
    var $v_0 = Xrm.Page.getAttribute("quoteid");
    return $v_0.getValue().toString()
};
Mscrm.CommandBarActions.$3K = function() {
    var $v_0 = Xrm.Page.getAttribute("opportunityid");
    return !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()) ? $v_0.getValue().toString() : null
};
Mscrm.CommandBarActions.$3J = function() {
    var $v_0 = Xrm.Page.getAttribute("description_id");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3I = function() {
    var $v_0 = Xrm.Page.getControl("closequotedate_id");
    return $v_0.getAttribute().getValue()
};
Mscrm.CommandBarActions.enableAddCaseForContract = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity) &&
        Xrm.Page.data.entity.getEntityName() === "contract") {
        var $v_0 = Xrm.Page.getAttribute("statecode"),
            $v_1 = !Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? $v_0.getValue() : -1;
        !Mscrm.CommandBarActions.ContractVariables.$G &&
            Mscrm.CommandBarActions.$4E(Xrm.Page.data.entity.getId().toString());
        if ($v_1 === 1 ||
            $v_1 === 5 ||
            $v_1 === 4 ||
            !$v_1 ||
            $v_1 === 3 ||
            !Mscrm.CommandBarActions.ContractVariables.$b) return false;
        else return true
    } else return true
};
Mscrm.CommandBarActions.$4E = function($p0) {
    var $v_0 =
            "<fetch version='1.0' mapping='logical'><entity name='contractdetail'><attribute name='totalallotments' /><filter type='and'><condition attribute='contractid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($p0) + "' /></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            $v_1 = $p1_0.entityCollection;
            if ($v_1.get_count() > 0)
                Mscrm.CommandBarActions.ContractVariables.$b = $v_1.get_entities()[0].getValue("totalallotments");
            if (!Mscrm.CommandBarActions.ContractVariables.$B) {
                Xrm.Page.ui.refreshRibbon();
                Mscrm.CommandBarActions.ContractVariables.$B = true;
                Mscrm.CommandBarActions.ContractVariables.$G = true
            } else Mscrm.CommandBarActions.ContractVariables.$B = false
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.enableAddCaseForContractLine = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity) &&
        Xrm.Page.data.entity.getEntityName() === "contractdetail") {
        var $v_0 = Xrm.Page.getAttribute("statecode"),
            $v_1 = !Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? $v_0.getValue() : -1,
            $v_2 = Xrm.Page.getAttribute("totalallotments"),
            $v_3 = !Mscrm.InternalUtilities.JSTypes.isNull($v_2) ? $v_2.getValue() : 0;
        !Mscrm.CommandBarActions.ContractLineVariables.$G &&
            Mscrm.CommandBarActions.$4F(Xrm.Page.data.entity.getId().toString());
        if ($v_1 === 3 ||
            $v_1 === 2 ||
            (Mscrm.CommandBarActions.ContractLineVariables.$N === 5 ||
                Mscrm.CommandBarActions.ContractLineVariables.$N === 4 ||
                !Mscrm.CommandBarActions.ContractLineVariables.$N ||
                Mscrm.CommandBarActions.ContractLineVariables.$N === 3 ||
                !$v_3)) return false;
        else return true
    } else return true
};
Mscrm.CommandBarActions.$4F = function($p0) {
    var $v_0 =
            "<fetch version='1.0' mapping='logical'><entity name='contractdetail'><attribute name='contractstatecode' /><filter type='and'><condition attribute='contractdetailid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($p0) + "' /></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            $v_1 = $p1_0.entityCollection;
            if ($v_1.get_count() > 0)
                Mscrm.CommandBarActions.ContractLineVariables.$N = $v_1.get_entities()[0].getValue("contractstatecode")
                    .get_value();
            if (!Mscrm.CommandBarActions.ContractLineVariables.$B) {
                Xrm.Page.ui.refreshRibbon();
                Mscrm.CommandBarActions.ContractLineVariables.$B = true;
                Mscrm.CommandBarActions.ContractLineVariables.$G = true
            } else Mscrm.CommandBarActions.ContractLineVariables.$B = false
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.convertActivity = function(activityId,
    activityEntityName,
    targetEntity,
    targetEntityName,
    createCampaignResponse) {
    var $v_0 = function() { Xrm.Page.data.refresh(true) }, $v_1 = null;
    $v_1 = function($p1_0) {};
    return Xrm.Internal.messages.convertActivity(activityId,
        activityEntityName,
        targetEntity,
        targetEntityName,
        createCampaignResponse).then($v_0, $v_1)
};
Mscrm.CommandBarActions.convertActivityPreload = function(element, iObjType) {
    Mscrm.CommandBarActions.entityName = Xrm.Internal.getEntityName(parseInt(iObjType));
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() &&
        !Xrm.Utility.isEntityOfflineSyncEnabled(Mscrm.CommandBarActions.entityName)) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    if (Xrm.Utility.isMocaOffline()) {
        var $v_0 = Xrm.Utility.getDefaultTransactionCurrency();
        Mscrm.CommandBarActions.$1Z(element, iObjType, $v_0)
    } else
        Xrm.Internal.messages.retrieveUserDefaultCurrency().then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $v_1 = $p1_0.currency;
                    Mscrm.CommandBarActions.$1Z(element, iObjType, $v_1)
                } else Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.CommandBarActions.$1Z = function($p0, $p1, $p2) {
    var $v_0 = {}, $$t_I;
    Mscrm.CommandBarActions.$4K($p2, $p0, $$t_I = { val: $v_0 }), $v_0 = $$t_I.val;
    if ($p0.indexOf("leadId") !== -1) {
        var $v_1 = Mscrm.CommandBarActions.$7($p0, "leadId"),
            $v_2 = Mscrm.CommandBarActions.$7($p0, "leadName"),
            $v_3 = new Xrm.LookupObject;
        $v_3.id = CrmEncodeDecode.CrmUrlDecode($v_1);
        $v_3.name = CrmEncodeDecode.CrmUrlDecode($v_2);
        $v_3.entityType = "lead";
        var $v_4 = [];
        $v_4[0] = $v_3;
        $v_0["leadLookup"] = $v_4;
        $v_0["leadId"] = CrmEncodeDecode.CrmUrlDecode($v_1)
    }
    if ($p0.indexOf("campaignId") !== -1) {
        var $v_5 = CrmEncodeDecode.CrmUrlDecode(Mscrm.CommandBarActions.$7($p0, "campaignId").toString()),
            $v_6 = "",
            $v_7 = ["regardingobjectid"];
        if (Mscrm.CommandBarActions.$7($p0, "campaignType").toString() === "4406") $v_6 = "bulkoperation";
        else $v_6 = "campaignactivity";
        Xrm.Internal.messages.retrieve($v_6, $v_5, $v_7).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $v_8 = $p1_0.entity;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8)) {
                        var $v_9 = $v_8.getValue("regardingobjectid");
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) {
                            var $v_A = $v_9.Id.toString(), $v_B = $v_9.Name.toString(), $v_C = new Xrm.LookupObject;
                            $v_C.id = CrmEncodeDecode.CrmUrlDecode($v_A);
                            $v_C.name = CrmEncodeDecode.CrmUrlDecode($v_B);
                            $v_C.entityType = Mscrm.CommandBarActions.$7($p0, "campaignType").toString() === "4406"
                                ? "bulkoperation"
                                : "campaign";
                            var $v_D = [];
                            $v_D[0] = {};
                            $v_0["campaignassociatedview_id"] = $v_D
                        }
                        Mscrm.CommandBarActions.$2P($v_0, $p0, $p1)
                    } else Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
                }
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.CommandBarActions.$2P($v_0, $p0, $p1)
};
Mscrm.CommandBarActions.$4K = function($p0, $p1, $p2) {
    $p2.val = {};
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        var $v_0 = new Xrm.LookupObject;
        $v_0.id = $p0.Id.toString();
        $v_0.name = $p0.Name;
        $v_0.entityType = "transactioncurrency";
        var $v_1 = [];
        $v_1[0] = $v_0;
        $p2.val["currencyLookup"] = $v_1
    }
    if ($p1.indexOf("customerId") !== -1) {
        var $v_2 = Mscrm.CommandBarActions.$7($p1, "customerId"),
            $v_3 = Mscrm.CommandBarActions.$7($p1, "customerName"),
            $v_4 = parseInt(Mscrm.CommandBarActions.$7($p1, "customerType"), 10),
            $v_5 = new Xrm.LookupObject;
        $v_5.id = CrmEncodeDecode.CrmUrlDecode($v_2);
        $v_5.name = CrmEncodeDecode.CrmUrlDecode($v_3);
        $v_5.entityType = Xrm.Internal.getEntityName($v_4);
        var $v_6 = [];
        $v_6[0] = $v_5;
        $p2.val["customerLookup"] = $v_6
    }
};
Mscrm.CommandBarActions.$2P = function($p0, $p1, $p2) {
    if ($p1.indexOf("subject") !== -1) {
        var $v_3 = Mscrm.CommandBarActions.$7($p1, "subject");
        $p0["subject"] = CrmEncodeDecode.CrmUrlDecode($v_3)
    }
    if ($p1.indexOf("ownerId") !== -1) {
        var $v_4 = Mscrm.CommandBarActions.$7($p1, "ownerId"),
            $v_5 = Mscrm.CommandBarActions.$7($p1, "ownerType"),
            $v_6 = "",
            $v_7 = Xrm.Page.data.entity.attributes.get("ownerid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7)) {
            var $v_8 = $v_7.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.length > 0) {
                $v_6 = $v_8[0].name;
                $p0["ownerName"] = CrmEncodeDecode.CrmUrlDecode($v_6)
            }
        }
        $p0["ownerId"] = CrmEncodeDecode.CrmUrlDecode($v_4);
        $p0["ownerType"] = CrmEncodeDecode.CrmUrlDecode($v_5)
    }
    $p0["entityId"] = Xrm.Page.data.entity.getId();
    $p0["entityTypeCode"] = $p2;
    $p0["opportunityId"] = "";
    $p0["saveActivity"] = "false";
    $p0["openNewRecord"] = "false";
    $p0["lastButtonClicked"] = "";
    var $v_0 = Mscrm.CommandBarActions.convertActivityCallback;
    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
    var $v_1 = $p1.indexOf("leadId") !== -1, $v_2 = Mscrm.CommandBarActions.getConvertToOpportunityDialogOptions($v_1);
    Xrm.Dialog.openDialog("ConvertActivity", $v_2, $p0, $v_0, null)
};
Mscrm.CommandBarActions.getConvertToOpportunityDialogOptions = function(isLead) {
    var $v_0 = null, $v_1 = 400;
    if (isLead) $v_1 += 30;
    if (Mscrm.CommandBarActions.isWebClient() || Xrm.Page.context.client.getClient() === "Outlook") {
        $v_0 = new Xrm.DialogOptions;
        $v_0.height = $v_1;
        $v_0.width = 410
    }
    return $v_0
};
Mscrm.CommandBarActions.$7 = function($p0, $p1) {
    var $v_0 = "";
    if ($p0.indexOf($p1) !== -1) {
        $v_0 = $p0.substr($p0.indexOf($p1) + $p1.length + 1);
        if ($v_0.indexOf("&") !== -1) $v_0 = $v_0.substr(0, $v_0.indexOf("&"))
    }
    return $v_0
};
Mscrm.CommandBarActions.convertActivityOnLoad = function() {
    if (Xrm.Utility.isMocaOffline() && !Xrm.Utility.isEntityOfflineSyncEnabled("campaign")) {
        var $v_5 = Xrm.Page.getControl("cbLogResponse_id");
        $v_5.setDisabled(true);
        var $v_6 = Xrm.Page.getControl("campaignassociatedview_id");
        $v_6.setDisabled(true)
    }
    var $v_0 = Xrm.Page.getAttribute("entityTypeCode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_7 = $v_0.getValue(), $v_8 = Xrm.Page.ui.controls.get("cbSaveActivity_id");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8))
            if ($v_7 === 4202) $v_8.setLabel(Xrm.Internal.getResourceString("ConvertActivity_Action_CloseEmail"));
            else
                $v_8.setLabel(String.format(Xrm.Internal.getResourceString("ConvertActivity_Action_SaveActivity"),
                    Xrm.Internal.getEntityName($v_7)))
    }
    if (!Xrm.Utility.isMocaOffline() || Xrm.Utility.isEntityOfflineSyncEnabled("lead")) {
        var $v_9 = Xrm.Page.getAttribute("leadId");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) {
            var $v_A = $v_9.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A) && $v_A.length) {
                var $v_B = Xrm.Page.getControl("leadLookup");
                $v_B.setVisible(true)
            }
        }
    }
    var $v_1 = Xrm.Page.getAttribute("subject");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_C = $v_1.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_C) || !$v_C.length) {
            var $v_D = Xrm.Page.ui.controls.get("cbOpenNew_id");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_D) && $v_D.setDisabled(true)
        }
    }
    var $v_2 = Mscrm.InternalUtilities.DialogUtility.getDialogArguments(),
        $v_3 = Xrm.Page.getAttribute("customerLookup");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        var $v_E = $v_3.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_E))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                var $v_F = $v_2.customerLookup;
                $v_3.setValue($v_F)
            }
    }
    var $v_4 = Xrm.Page.getAttribute("currencyLookup");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
        var $v_G = $v_4.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_G))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                var $v_H = $v_2.currencyLookup;
                $v_4.setValue($v_H)
            }
    }
};
Mscrm.CommandBarActions.convertActivityClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.CommandBarActions.entityName = Xrm.Internal
            .getEntityName(parseInt(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityTypeCode")
                .toString()));
        if (!Xrm.Utility.isEntityOfflineSyncEnabled(Mscrm.CommandBarActions.entityName)) {
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
    }
    var $v_0,
        $v_1 = new Xrm.AlertDialogStrings,
        $v_2 = "",
        $v_3 = "",
        $v_4 = "",
        $v_5 = "",
        $v_6 = "",
        $v_7 = 0,
        $v_8 = "",
        $v_9 = 0,
        $v_A = "",
        $v_B = "",
        $v_C = "false",
        $v_D = "false",
        $v_E = "",
        $v_F = 0,
        $v_G = Xrm.Page.data.entity.attributes.get("customerLookup");
    $v_0 = $v_G.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length) {
        $v_1.text = Xrm.Internal.getResourceString(Xrm.Internal.getResourceString("Alert_Conv_Act_Customer_Must"));
        Xrm.Dialog.openAlertDialog($v_1, null, null);
        return
    } else {
        $v_2 = $v_0[0].id;
        $v_E = $v_0[0].entityType;
        $v_F = Xrm.Internal.getEntityCode($v_E)
    }
    var $v_H = Xrm.Page.data.entity.attributes.get("currencyLookup");
    $v_0 = $v_H.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length) {
        $v_1.text = Xrm.Internal.getResourceString(Xrm.Internal.getResourceString("Alert_Conv_Act_Currency_Must"));
        Xrm.Dialog.openAlertDialog($v_1, null, null);
        return
    } else $v_3 = $v_0[0].id;
    var $v_I = Xrm.Page.getAttribute("cbLogResponse_id"), $v_J = $v_I.getValue();
    if ($v_J) {
        var $v_O = Xrm.Page.data.entity.attributes.get("campaignassociatedview_id");
        $v_0 = $v_O.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length) {
            $v_1.text = Xrm.Internal.getResourceString(Xrm.Internal.getResourceString("Alert_Conv_Act_Campaign_Must"));
            Xrm.Dialog.openAlertDialog($v_1, null, null);
            return
        }
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_K = Xrm.Page.data.entity.attributes.get("campaignassociatedview_id");
    $v_0 = $v_K.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length) $v_4 = $v_0[0].id;
    if (!IsNull(Mscrm.InternalUtilities.DialogUtility
        .getAttributeValue("subject")))
        $v_5 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("subject").toString();
    $v_6 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString();
    $v_7 = parseInt(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityTypeCode").toString());
    $v_8 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("ownerId").toString();
    $v_9 = parseInt(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("ownerType").toString());
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InternalUtilities.DialogUtility
        .getAttributeValue("ownerName")))
        $v_A = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("ownerName").toString();
    var $v_L = Xrm.Page.data.entity.attributes.get("leadLookup");
    $v_0 = $v_L.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length) $v_B = $v_0[0].id;
    var $v_M = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("cbSaveActivity_id");
    if ($v_M) $v_C = "true";
    var $v_N = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("cbOpenNew_id");
    if ($v_N) $v_D = "true";
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    if (Xrm.Utility.isMocaOffline()) {
        var $v_P = Mscrm.CommandBarActions
            .getOpportunityEntityRecord($v_5, $v_6, $v_7, $v_2, $v_F, $v_8, $v_9, $v_B, $v_3, $v_4, 4400, $v_A);
        Mscrm.CommandBarActions.$49($v_6, $v_7, $v_P, $v_C, $v_D)
    } else
        Mscrm.CommandBarActions.convertToOpportunity(function($p1_0) {
                var $v_Q = $p1_0.recordId.toString();
                Mscrm.CommandBarActions.$2H($v_Q, $v_C, $v_D)
            },
            function($p1_0) { Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca($p1_0) },
            $v_5,
            $v_6,
            $v_7,
            $v_2,
            $v_F,
            $v_8,
            $v_9,
            $v_B,
            $v_3,
            $v_4,
            4400,
            $v_J,
            $v_A)
};
Mscrm.CommandBarActions.$49 = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = new Xrm.Gen.ConvertActivityRequest(new Microsoft.Crm.Client.Core.Framework.Guid($p0),
            Xrm.Internal.getEntityName($p1),
            $p2,
            "opportunity",
            false),
        $v_1 = function($p1_0) {
            for (var $v_2 = null, $v_3 = 0; $v_3 < $p1_0.get_Items().length; $v_3++)
                if ($p1_0.get_Items()[$v_3].get_entityType() === "opportunity") {
                    $v_2 = $p1_0.get_Items()[$v_3].get_entity();
                    break
                }
            if ($v_2) {
                var $v_4 = $v_2["opportunityid"].toString();
                Mscrm.CommandBarActions.$2H($v_4, $p3, $p4)
            }
        };
    Xrm.Utility.executeNonCudCommand("ConvertActivity",
        Xrm.Internal.getEntityName($p1),
        $v_0,
        $v_1,
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.CommandBarActions.$2H = function($p0, $p1, $p2) {
    var $v_0 = Xrm.Page.getAttribute("opportunityId");
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("opportunityId", $p0);
    var $v_1 = Xrm.Page.getAttribute("saveActivity");
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("saveActivity", $p1);
    var $v_2 = Xrm.Page.getAttribute("openNewRecord");
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("openNewRecord", $p2);
    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.convertActivityCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = dialogParams["opportunityId"],
            $v_1 = dialogParams["saveActivity"],
            $v_2 = dialogParams["openNewRecord"];
        Mscrm.CommandBarActions.$2l($v_0, $v_1, $v_2)
    }
};
Mscrm.CommandBarActions.setRelatedCampaign = function() {
    var $v_0 = Xrm.Page.getAttribute("cbLogResponse_id"), $v_1 = Xrm.Page.getAttribute("campaignassociatedview_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if ($v_0.getValue()) $v_1.setRequiredLevel("required");
        else $v_1.setRequiredLevel("none")
};
Mscrm.CommandBarActions.$2l = function($p0, $p1, $p2) {
    if ($p1 === "false") {
        if ($p2 === "true") {
            Xrm.Page.data.save();
            Xrm.Utility.openEntityForm("opportunity", $p0)
        }
    } else {
        Xrm.Page.data.setFormDirty(false);
        if ($p2 === "true")
            Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),
                Xrm.Page.data.entity.getEntityName(),
                false,
                "opportunity",
                $p0);
        else
            Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),
                Xrm.Page.data.entity.getEntityName(),
                true,
                null,
                null)
    }
    Mscrm.CommandBarActions.$a(Xrm.Page.data.entity.getId(), Xrm.Page.data.entity.getEntityName())
};
Mscrm.CommandBarActions.openNewRecord = function(entityLogicalName, gridControl, parentEntityAttributes) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityLogicalName)) return;
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        Xrm.Utility.create(entityLogicalName, null, null, parentEntityAttributes, null, null);
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.isLiteSubGrid())
        if (entityLogicalName === "activitypointer" && gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid) {
            gridControl.addButtonClickHandler();
            return
        } else {
            Xrm.Utility.openQuickCreate(entityLogicalName, null, null)
                .then(function($p1_0) { gridControl.refresh() }, null);
            return
        }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        Xrm.Page.data.entity.getEntityName() === "contractdetail") {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getAttribute("contractid"))) {
            var $v_0 = Xrm.Page.getAttribute("contractid").getValue();
            if ($v_0.length === 1) {
                if (Mscrm.InternalUtilities.JSTypes.isNull(parentEntityAttributes)) parentEntityAttributes = {};
                parentEntityAttributes["_CreateFromId"] = $v_0[0].id;
                parentEntityAttributes["_CreateFromType"] = "1010"
            }
        }
        Xrm.Utility.openEntityForm(entityLogicalName, null, parentEntityAttributes);
        return
    }
    if (Xrm.Internal
        .isFeatureEnabled("FCB.SLAV2") &&
        entityLogicalName === "sla") Mscrm.CommandBarActions.openCreateSLADialog();
    else Xrm.Utility.openEntityForm(entityLogicalName, null, null)
};
Mscrm.CommandBarActions.openCreateSLADialog = function() {
    var $v_0 = null;
    if (Mscrm.CommandBarActions.isWebClient()) {
        $v_0 = new Xrm.DialogOptions;
        $v_0.height = 250;
        $v_0.width = 600
    }
    Xrm.Dialog.openDialog("CreateSlaDialog", $v_0, Mscrm.CommandBarActions.$4L(), Mscrm.CommandBarActions.$2i, null)
};
Mscrm.CommandBarActions.$2i = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0["lastButtonClicked"] === "ok_id") {
        var $v_0 = {};
        $v_0["name"] = $p0["name_id"];
        $v_0["objecttypecode"] = $p0["applicableEntity_id"];
        $v_0["primaryentityotc"] = $p0["applicableEntity_id"];
        Xrm.Utility.openEntityForm("sla", null, $v_0)
    }
};
Mscrm.CommandBarActions.$4L = function() {
    var $v_0 = {};
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["name_id"] = "";
    $v_0["applicableEntity_id"] = -1;
    return $v_0
};
Mscrm.CommandBarActions.changeState = function(action, entityId, entityName) {
    Mscrm.CommandBarActions.handleStateChangeAction(action, entityId, entityName);
    switch (action) {
    case "activate":
    case "deactivate":
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(0, action, Xrm.Internal.getEntityCode(entityName));
        break
    }
};
Mscrm.CommandBarActions.handleStateChangeAction = function(action, entityId, entityName) {
    var $v_0 = null;
    if (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" ||
        Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
        $v_0 = new Xrm.DialogOptions;
        $v_0.height = 250;
        $v_0.width = 600
    }
    if (Mscrm.InternalUtilities.DialogUtility.isMDDConverted(action, entityName)) {
        var $v_1 = new Xrm.Objects.EntityReference(entityName, new Microsoft.Crm.Client.Core.Framework.Guid(entityId)),
            $v_2 = [$v_1],
            $v_3 = {};
        $v_3["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_2);
        $v_3["action"] = action;
        $v_3["lastButtonClicked"] = "";
        $v_3["state_id"] = -1;
        $v_3["status_id"] = -1;
        Xrm.Dialog.openDialog("SetStateDialog", $v_0, $v_3, Mscrm.CommandBarActions.closeSetStateDialogCallback, null)
    } else {
        $v_0.height = 250;
        $v_0.width = 420;
        var $v_4 = Xrm.Internal.getEntityCode(entityName),
            $v_5 = Mscrm.GridCommandActions.generateStandardActionUri(action, $v_4, 1);
        $v_5.get_query()["iObjType"] = $v_4;
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["sIds"] = entityId;
        $v_5.get_query()["confirmMode"] = "1";
        var $v_6 = [action, entityId, entityName],
            $v_7 = Mscrm.CommandBarActions
                .createCallbackFunctionFactory(Mscrm.CommandBarActions.performActionAfterChangeStateWeb, $v_6);
        Xrm.Internal.openDialog($v_5.toString(), $v_0, [entityId], null, $v_7)
    }
};
Mscrm.CommandBarActions.closeSetStateDialogCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = null, $v_1 = dialogParams["records"].toString();
        $v_0 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_1);
        var $v_2 = $v_0[0].LogicalName.toString(),
            $v_3 = $v_0[0].Id,
            $v_4 = parseInt(dialogParams["state_id"].toString()),
            $v_5 = parseInt(dialogParams["status_id"].toString());
        Xrm.Page.context.saveMode = dialogParams["action"].toString() === "activate" ? 6 : 5;
        var $v_6 = function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            Xrm.Internal.messages.setState($v_2, $v_3.toString(), $v_4, $v_5).then(function($p2_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    Mscrm.CommandBarActions.performPageRefresh(false)
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        };
        Xrm.Page.data.save().then($v_6, Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
    }
};
Mscrm.CommandBarActions.onLoadSetState = function() {
    if (Xrm.Utility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    var $v_0 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("action").toString(), $v_1 = null, $v_2 = null;
    $v_2 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("records");
    $v_1 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_2.toString());
    if (!$v_1.length) return;
    var $v_3 = $v_1[0].LogicalName,
        $v_4 = Xrm.Internal.getEntityDisplayName($v_3),
        $v_5 = Xrm.Internal.getEntityLocalizedSetName($v_3);
    Mscrm.CommandBarActions.$2T($v_3, $v_4, $v_5, $v_1.length, $v_0);
    if (!Mscrm.InternalUtilities.DialogUtility.isStateTransitionEnforced($v_3)) {
        Mscrm.CommandBarActions.$2A($v_3, $v_0);
        return
    }
    var $v_6 = ["statuscode"];
    Xrm.Internal.messages.retrieve($v_3, $v_1[0].Id.toString(), $v_6).then(function($p1_0) {
            if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
            var $v_7 = $p1_0.entity, $v_8 = parseInt($v_7.getValue("statuscode").getValue("value").toString());
            Xrm.Internal.getAllowedStatusTransitions($v_3, $v_8).then(function($p2_0) {
                    if (Mscrm.InternalUtilities.JSTypes.isNull($p2_0) || !$p2_0.length) Mscrm.CommandBarActions.$2U();
                    else {
                        var $v_9 = JSON.stringify($p2_0);
                        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("allowedTransitions", $v_9);
                        Mscrm.CommandBarActions.$2T($v_3, $v_4, $v_5, $v_1.length, $v_0);
                        Mscrm.CommandBarActions.$2A($v_3, $v_0)
                    }
                },
                function() {})
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$2U = function() {
    Mscrm.InternalUtilities.DialogUtility.setLabel("header_title_id",
        Xrm.Internal.getResourceString("Web._grid.cmds.dlg_deactivate.aspx_200_Activate_warning_Title"));
    Mscrm.InternalUtilities.DialogUtility.setLabel("description_id", "");
    Mscrm.InternalUtilities.DialogUtility.setLabel("cancel_id", Xrm.Internal.getResourceString("Button_Label_OK"));
    Mscrm.InternalUtilities.DialogUtility.showHideControl("ok_id", false);
    Mscrm.InternalUtilities.DialogUtility.showHideControl("cancel_id", true);
    var $v_0 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("action").toString(),
        $v_1 = $v_0 === "activate"
            ? "Web._grid.cmds.dlg_deactivate.aspx_200_Activate_warning"
            : "Web._grid.cmds.dlg_deactivate.aspx_200_Deactivate_warning";
    Mscrm.InternalUtilities.DialogUtility.setLabel("message_id", Xrm.Internal.getResourceString($v_1))
};
Mscrm.CommandBarActions.$2A = function($p0, $p1) {
    var $v_0 = Xrm.Page.getControl("state_id"), $v_1 = null;
    $v_1 = $v_0.getAttribute();
    var $v_2 = $v_1.getOptions();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return;
    $v_2.length > 0 && $v_0.clearOptions();
    var $v_3 = null;
    if (Xrm.Utility.isActivityType($p0) && $p1 === "deactivate") {
        var $v_4 = 1, $v_5 = new Array(2);
        $v_5[0] = 1;
        $v_5[1] = 2;
        Xrm.Internal.getStateFromNumber($p0, $v_5).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $$dict_A = $p1_0;
                    for (var $$key_B in $$dict_A) {
                        var $v_6 = { key: $$key_B, value: $$dict_A[$$key_B] };
                        $v_3 = new Xrm.OptionSetItem(parseInt($v_6.key), $v_6.value.toString());
                        $v_0.addOption($v_3);
                        $v_1.addOption($v_3)
                    }
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InternalUtilities.DialogUtility
                        .getAttributeValue("defaultCloseState"))
                    )
                        $v_4 = parseInt(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("defaultCloseState")
                            .toString())
                }
                $v_0.setVisible(true);
                $v_1.setValue($v_4);
                Mscrm.CommandBarActions.$2C($p0, $v_4)
            },
            function() {})
    } else {
        $v_0.setVisible(false);
        var $v_7 = $p1 === "activate" ? 0 : 1;
        if (Mscrm.CommandBarActions.$46($p0)) $v_7 = $p1 === "activate" ? 1 : 0;
        var $v_8 = [$v_7];
        Xrm.Internal.getStateFromNumber($p0, $v_8).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $$dict_G = $p1_0;
                    for (var $$key_H in $$dict_G) {
                        var $v_9 = { key: $$key_H, value: $$dict_G[$$key_H] };
                        $v_3 = new Xrm.OptionSetItem(parseInt($v_9.key), $v_9.value.toString());
                        $v_0.addOption($v_3);
                        $v_1.addOption($v_3)
                    }
                    $v_1.setValue($v_7);
                    Mscrm.CommandBarActions.$2C($p0, $v_7)
                }
            },
            function() {})
    }
};
Mscrm.CommandBarActions.$46 = function($p0) {
    switch ($p0) {
    case "entitlement":
    case "routingrule":
    case "convertrule":
        return true;
    default:
        return false
    }
};
Mscrm.CommandBarActions.$2C = function($p0, $p1) {
    Xrm.Internal.messages.retrieveDefaultStatusForState($p0, $p1).then(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                var $v_0 = $p1_0.status;
                Mscrm.CommandBarActions.$2B($p0, $p1, $v_0)
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$2T = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0;
    if ($p3 === 1) $v_0 = $p1;
    else $v_0 = $p2;
    var $v_1 = Mscrm.CommandBarActions.isMobileCompanionApp() ? "header_title_id" : "title_id";
    if ($p4 === "deactivate")
        switch ($p0) {
        case "account":
        case "contact":
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                Xrm.Internal.getResourceString("Dialog_Grid_Deactivate_Title"));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Deactivate_Description"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_deactivate.aspx_102_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Deactivate"));
            break;
        case "externalparty":
            if ($p3 === 1) {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal.getResourceString("ExternalParty_Disable_Dialog_Title_SingleItem"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal.getResourceString("ExternalParty_Disable_Dialog_Message_SingleItem"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalParty_Dialog_Button_Disable"))
            } else {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal
                            .getResourceString("ExternalParty_Disable_Dialog_Title_MultipleItems"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalParty_Disable_Dialog_Message_MultipleItems"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalParty_Dialog_Button_Disable"))
            }
            break;
        case "externalpartyitem":
            if ($p3 === 1) {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Disable_Dialog_Title_SingleItem"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Disable_Dialog_Message_SingleItem"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalPartyItem_Dialog_Button_Disable"))
            } else {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Disable_Dialog_Title_MultipleItems"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Disable_Dialog_Message_MultipleItems"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalPartyItem_Dialog_Button_Disable"))
            }
            break;
        case "topicmodel":
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                Xrm.Internal.getResourceString("Dialog_Deactivate_Topicmodel_Title"));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Deactivate_Topicmodel_Description")));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Deactivate"));
            break;
        case "syncerror":
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                Xrm.Internal.getResourceString("Dialog_Grid_Deactivate_Title"));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Deactivate_Description"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("SyncError.Dialog.Deactivate.Messsage.Text"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Deactivate"));
            break;
        default:
            if (Xrm.Utility.isActivityType($p0)) {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1, String.format(Xrm.Internal.getResourceString("Dialog_Close_Activity_Title"), $v_0));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal.getResourceString("Dialog_Close_Activity_Description"), $p3, $v_0));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("message_id",
                        String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_deactivate.aspx_85"), $v_0));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("Button_Label_Close"))
            } else {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1, Xrm.Internal.getResourceString("Dialog_Grid_Deactivate_Title"));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal.getResourceString("Dialog_Deactivate_Description"), $p3, $v_0));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("message_id",
                        String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_deactivate.aspx_55"), $v_0));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("Button_Label_Deactivate"))
            }
            break
        }
    else {
        var $v_2;
        switch ($p0) {
        case "externalparty":
            if ($p3 === 1) {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal.getResourceString("ExternalParty_Enable_Dialog_Title_SingleItem"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal.getResourceString("ExternalParty_Enable_Dialog_Message_SingleItem"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalParty_Dialog_Button_Enable"))
            } else {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal.getResourceString("ExternalParty_Enable_Dialog_Title_MultipleItems"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalParty_Enable_Dialog_Message_MultipleItems"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalParty_Dialog_Button_Enable"))
            }
            break;
        case "externalpartyitem":
            if ($p3 === 1) {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Enable_Dialog_Title_SingleItem"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Enable_Dialog_Message_SingleItem"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalPartyItem_Dialog_Button_Enable"))
            } else {
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel($v_1,
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Enable_Dialog_Title_MultipleItems"),
                            $p1));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("description_id",
                        String.format(Xrm.Internal
                            .getResourceString("ExternalPartyItem_Enable_Dialog_Message_MultipleItems"),
                            $p3));
                Mscrm.InternalUtilities.DialogUtility
                    .setLabel("ok_id", Xrm.Internal.getResourceString("ExternalPartyItem_Dialog_Button_Enable"))
            }
            break;
        case "convertrule":
            $v_2 = Xrm.Internal.getResourceString("Dialog_Label_Active");
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_ConvertRule_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Single_ConvertRule_Description")));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_activate.aspx_55"), $v_0, $v_2));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break;
        case "convertruleitem":
            $v_2 = Xrm.Internal.getResourceString("Dialog_Label_Active");
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_ConvertRule_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Description_Activate"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_activate.aspx_55"), $v_0, $v_2));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break;
        case "recommendationmodel":
            $v_2 = Xrm.Internal.getResourceString("Dialog_Label_Active");
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Title"), $v_0));
            Mscrm.RecommendationModelCommandActions.warnIfModeVersionNotLatest($p3, $v_0);
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_activate.aspx_55"), $v_0, $v_2));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break;
        case "routingrule":
            $v_2 = Xrm.Internal.getResourceString("Dialog_Label_Active");
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_RoutingRule_Description"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_activate.aspx_55"), $v_0, $v_2));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break;
        case "topicmodel":
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Topicmodel_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Topicmodel_Description"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break;
        default:
            $v_2 = Xrm.Internal.getResourceString("Dialog_Label_Active");
            Mscrm.InternalUtilities.DialogUtility.setLabel($v_1,
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Title"), $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("description_id",
                String.format(Xrm.Internal.getResourceString("Dialog_Activate_Description_Activate"), $p3, $v_0));
            Mscrm.InternalUtilities.DialogUtility.setLabel("message_id",
                String.format(Xrm.Internal.getResourceString("Web._grid.cmds.dlg_activate.aspx_55"), $v_0, $v_2));
            Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
                Xrm.Internal.getResourceString("Button_Label_Activate"));
            break
        }
    }
    Mscrm.InternalUtilities.DialogUtility.showHideControl("cancel_id", true);
    Mscrm.InternalUtilities.DialogUtility.showHideControl("ok_id", true)
};
Mscrm.CommandBarActions.deactivateClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() &&
        !Xrm.Utility.isEntityOfflineSyncEnabled(Mscrm.GridCommandActions.entityLogicalName)) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = null;
    $v_0 = Mscrm.InternalUtilities.DialogUtility
        .deserializeSdkEntityReferences(Mscrm.InternalUtilities.DialogUtility.getAttributeValue("records").toString());
    var $v_1 = -1, $v_2 = Xrm.Page.getControl("state_id"), $v_3 = $v_2.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) $v_1 = parseInt($v_3.getValue().toString());
    var $v_4 = -1, $v_5 = Xrm.Page.getControl("status_id"), $v_6 = $v_5.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) $v_4 = parseInt($v_6.getValue().toString());
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("state_id", $v_1);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("status_id", $v_4);
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.onStateChange = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = null, $v_1 = Xrm.Page.getAttribute("records");
    $v_0 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_1.getValue());
    var $v_2 = $v_0[0].LogicalName, $v_3 = Xrm.Page.getControl("state_id"), $v_4 = $v_3.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4) && !Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) {
        var $v_5 = parseInt($v_4.getValue().toString());
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("selectedState", $v_5.toString());
        var $v_6 = -1;
        Xrm.Internal.messages.retrieveDefaultStatusForState($v_2, $v_5).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    $v_6 = $p1_0.status;
                    Mscrm.CommandBarActions.$2B($v_2, $v_5, $v_6)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.CommandBarActions.$2B = function($p0, $p1, $p2) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = Xrm.Page.getControl("status_id"), $v_1 = $v_0.getAttribute();
    $v_0.clearOptions();
    $v_0.setVisible(false);
    Xrm.Internal.getStatusMetadataFromStateCode($p0, $p1).then(function($p1_0) {
            if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
            var $v_2 = null,
                $v_3 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("allowedTransitions"),
                $v_4 = null;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_4 = JSON.parse($v_3);
            for (var $v_5, $v_6 = 0, $$arr_B = $p1_0, $$len_C = $$arr_B.length, $$idx_D = 0;
                $$idx_D < $$len_C;
                ++$$idx_D) {
                var $v_7 = $$arr_B[$$idx_D];
                $v_5 = parseInt($v_7.getValue("value").toString());
                if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || Array.contains($v_4, $v_5)) {
                    $v_2 = new Xrm.OptionSetItem($v_5, $v_7.getValue("label").toString());
                    $v_0.addOption($v_2);
                    $v_1.addOption($v_2);
                    $v_6++
                }
            }
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_3) &&
                $v_6 > 0) $p2 = Array.contains($v_4, $p2) ? $p2 : parseInt($v_1.getOptions()[0].value.toString());
            switch ($v_6) {
            case 0:
                Mscrm.CommandBarActions.$2U();
                break;
            case 1:
                $v_1.setValue($p2);
                break;
            default:
                $p0 !== "businessunit" && $v_0.setVisible(true);
                $v_1.setValue($p2);
                break
            }
        },
        function() {})
};
Mscrm.CommandBarActions.performActionAfterChangeStateMoca = function(returnInfo, action, entityId, entityName) {
    var $v_0 = -1, $v_1 = 0;
    Mscrm.CommandBarActions.performActionAfterStateChange(action, entityId, entityName, $v_1, $v_0, null)
};
Mscrm.CommandBarActions.performActionAfterChangeStateWeb = function(returnInfo, action, entityId, entityName) {
    var $v_0 = -1, $v_1 = 0;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnInfo) && returnInfo) {
        var $v_2 = returnInfo;
        $v_0 = Mscrm.CommandBarActions.$1u($v_2["iStatusCode"]);
        $v_1 = Mscrm.CommandBarActions.$1u($v_2["iStateCode"]);
        Mscrm.CommandBarActions.performActionAfterStateChange(action, entityId, entityName, $v_1, $v_0, $v_2)
    }
};
Mscrm.CommandBarActions.createCallbackFunctionFactory = function(func, parameters) {
    return function(retValue) {
        parameters.unshift(retValue);
        return func.apply(null, parameters)
    }
};
Mscrm.CommandBarActions
    .performActionAfterStateChange = function(action, entityId, entityName, stateCode, statusCode, result) {
        var $v_0 = 0;
        switch (entityName) {
        case "account":
        case "contact":
        case "pricelevel":
        case "recommendationmodel":
        case "systemuser":
        case "topicmodel":
        case "knowledgesearchmodel":
        case "advancedsimilarityrule":
            if (action === "activate") {
                stateCode = 0;
                Xrm.Page.context.saveMode = 6
            } else if (action === "deactivate") {
                stateCode = 1;
                Xrm.Page.context.saveMode = 5
            }
            break;
        case "entitlement":
            if (action === "activate") stateCode = 1;
            else if (action === "deactivate") stateCode = 0;
            break;
        case "campaignactivity":
            if (action === "deactivatecampactivity") {
                $v_0 = 5;
                var $v_1 = new Mscrm.CampaignActivityStateHandler;
                $v_1.setDates(result["iStartDate"], result["iEndDate"]);
                $v_1.updateState()
            }
            break
        }
        if (action === "activate") $v_0 = 6;
        else if (action === "deactivate") $v_0 = 5;
        Xrm.Page.context.saveMode = $v_0;
        Mscrm.CommandBarActions.setState(entityId, entityName, stateCode, statusCode)
    };
Mscrm.CommandBarActions.$1u = function($p0) { return $p0 ? parseInt($p0.toString()) : -1 };
Mscrm.CommandBarActions
    .performActionAfterStateChangeFromGridMoca = function(result, gridControl, entityName, records, action) {
        var $v_0 = -1, $v_1 = "", $v_2 = action === "deactivate" ? 1 : 0;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(records) && records.length > 0)
            for (var $v_3 = 0; $v_3 < records.length; $v_3++) {
                $v_1 = records[$v_3].Id;
                Xrm.Internal.messages.setState(entityName, $v_1, $v_2, $v_0)
                    .then(function($p1_0) {
                            !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                        },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
    };
Mscrm.CommandBarActions.closeActivity = function(entityId, entityName) {
    Mscrm.CommandBarActions.handleStateChangeAction("deactivate", entityId, entityName)
};
Mscrm.CommandBarActions
    .markActivityComplete = function(entityId, entityName, closeWindow, entityToOpen, entityIdToOpen) {
        if (entityName !== "appointment")
            if (entityName === "socialactivity")
                Mscrm.CommandBarActions.setState(entityId, entityName, 1, 1, closeWindow, entityToOpen, entityIdToOpen);
            else
                Mscrm.CommandBarActions
                    .setState(entityId, entityName, 1, -1, closeWindow, entityToOpen, entityIdToOpen);
        else Mscrm.CommandBarActions.setState(entityId, entityName, -1, 3, closeWindow, entityToOpen, entityIdToOpen)
    };
Mscrm.CommandBarActions.isMobileCompanionApp = function() { return Xrm.Page.context.client.getClient() === "Mobile" };
Mscrm.CommandBarActions.isOutlookClient = function() { return Xrm.Page.context.client.getClient() === "Outlook" };
Mscrm.CommandBarActions.isWebClient = function() { return Xrm.Page.context.client.getClient() === "Web" };
Mscrm.CommandBarActions.$i = function() { return Xrm.Page.context.client.getClientState() === "Offline" };
Mscrm.CommandBarActions.$26 = function($p0) { return Xrm.Internal.isFeatureEnabled($p0) };
Mscrm.CommandBarActions.$z = function() {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_0))
        return new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
            new Microsoft.Crm.Client.Core.Framework.Guid($v_0));
    return null
};
Mscrm.CommandBarActions.refreshForm = function() { Xrm.Page.data.refresh(true) };
Mscrm.CommandBarActions.openSimpleAlertDialog = function(text) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = text;
    Xrm.Dialog.openAlertDialog($v_0, null, null)
};
Mscrm.CommandBarActions.createRefreshFormCallback = function() {
    var $v_0 = Mscrm.CommandBarActions.refreshForm;
    return $v_0
};
Mscrm.CommandBarActions.$1C = function($p0) {
    !Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Internal.raiseRecordsDeletedEvent($p0)
};
Mscrm.CommandBarActions.selectResourceString = function(resourceStringMoca, resourceString) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return Xrm.Internal.getResourceString(resourceStringMoca);
    else return Xrm.Internal.getResourceString(resourceString)
};
Mscrm.CommandBarActions.getActivityId = function(dataXml, entityName) {
    var $v_0 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dataXml)) {
        var $v_1 = XUI.Xml.LoadXml(dataXml),
            $v_2 = XUI.Xml.SelectSingleNode($v_1, "/" + entityName + "/activityid", null);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_0 = XUI.Xml.GetText($v_2)
    }
    return $v_0
};
Mscrm.CommandBarActions.$1r = function($p0) {
    var $v_0 = Xrm.Page.getAttribute($p0);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return null;
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3d = function() {
    var $v_0 = Mscrm.CommandBarActions.$1r("statecode");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return null;
    return $v_0
};
Mscrm.CommandBarActions.setEntityAttributeValueFromXml = function(dataXml, entityName) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dataXml)) {
        var $v_0 = XUI.Xml.LoadXml(dataXml);
        Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1) {
            var $v_1 = $p1_0.getName(), $v_2 = Xrm.Page.getAttribute($v_1), $v_3 = $p1_0.getAttributeType();
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                $v_2.controls.get(0);
                $v_3 = $p1_0.getAttributeType()
            }
            var $v_4 = null;
            switch ($v_3) {
            case "boolean":
            case "integer":
            case "optionset":
                $v_4 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_1, null);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    var $v_6 = XUI.Xml.GetText($v_4);
                    $v_2.setValue(parseInt($v_6, 10));
                    $v_2.fireOnChange()
                }
                break;
            case "money":
            case "decimal":
            case "double":
                $v_4 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_1, null);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    var $v_7 = XUI.Xml.GetText($v_4);
                    $v_2.setValue(parseFloat($v_7));
                    $v_2.fireOnChange()
                }
                break;
            case "datetime":
                $v_4 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_1, null);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    var $v_8 = XUI.Xml.GetText($v_4), $v_9 = Date.parseInvariant($v_8);
                    $v_2.setValue($v_9);
                    $v_2.fireOnChange()
                }
                break;
            case "lookup":
                var $v_5 = XUI.Xml.SelectNodes($v_0, "/" + entityName + "/" + $v_1 + "s/" + $v_1, null);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) {
                    for (var $v_A = new Array($v_5.length), $v_B = 0; $v_B < $v_5.length; $v_B++) {
                        $v_A[$v_B] = new Xrm.LookupObject;
                        var $v_C = XUI.Xml.SelectSingleNode($v_5[$v_B], "./@id", null);
                        $v_A[$v_B].id = XUI.Xml.GetText($v_C);
                        var $v_D = XUI.Xml.SelectSingleNode($v_5[$v_B], "./@name", null);
                        $v_A[$v_B].name = XUI.Xml.GetText($v_D);
                        var $v_E = XUI.Xml.SelectSingleNode($v_5[$v_B], "./@entityType", null);
                        $v_A[$v_B].entityType = XUI.Xml.GetText($v_E)
                    }
                    try {
                        $v_2.setValue($v_A);
                        $v_2.fireOnChange()
                    } catch ($$e_J) {
                    }
                }
                break;
            case "string":
            case "memo":
            case "uniqueidentifier":
                $v_4 = XUI.Xml.SelectSingleNode($v_0, "/" + entityName + "/" + $v_1, null);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    $v_2.setValue(XUI.Xml.GetText($v_4));
                    $v_2.fireOnChange()
                }
                break;
            default:
                throw Error.create(String.format("attributeType '{0}' is not supported", $v_3))
            }
        })
    }
};
Mscrm.CommandBarActions.addActivityTo = function(typeCode,
    id,
    type,
    name,
    partyId,
    partyType,
    partyName,
    location,
    contentId) {
    var $v_0 = {};
    if (typeof type !== "number") type = parseInt(type, 10);
    if (typeof partyType !== "number") partyType = parseInt(partyType, 10);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(id) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(type) &&
        typeCode !== 4401) {
        $v_0["pId"] = CrmEncodeDecode.CrmUrlEncode(id);
        $v_0["pType"] = CrmEncodeDecode.CrmUrlEncode(type);
        $v_0["pName"] = CrmEncodeDecode.CrmUrlEncode(name)
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(partyId)) {
        $v_0["partyid"] = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(partyId);
        $v_0["partytype"] = CrmEncodeDecode.CrmUrlEncode(partyType);
        $v_0["partyname"] = CrmEncodeDecode.CrmUrlEncode(partyName);
        if (Mscrm.InternalUtilities.JSTypes.isNull(location)) location = "";
        $v_0["contactInfo"] = CrmEncodeDecode.CrmUrlEncode(location)
    }
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString(contentId)) $v_0["contentId"] = CrmEncodeDecode.CrmUrlEncode(contentId);
    Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName(typeCode), id, $v_0)
};
Mscrm.CommandBarActions.performPageRefresh = function(shouldSaveAndRefresh) {
    if (Xrm.Internal.isEnabledForInteractionCentric())
        if (shouldSaveAndRefresh)
            Xrm.Page.data.save().then(function() { Mscrm.CommandBarActions.performPageDataAndRibbonRefresh() },
                Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
        else Mscrm.CommandBarActions.performPageDataAndRibbonRefresh();
    else Xrm.Page.data.refresh(true)
};
Mscrm.CommandBarActions.performPageDataAndRibbonRefresh = function() {
    Xrm.Page.data.refresh(true).then(function() { Xrm.Page.ui.refreshRibbon() },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.CommandBarActions.$32 = function($p0, $p1, $p2, $p3, $p4) {
    Xrm.Internal.messages.retrievePrincipalAccess($p0, $p1).then(function($p1_0) {
            var $v_0 = $p1_0;
            if ($v_0.accessRights & $p2) {
                $p3();
                return
            }
            Xrm.Internal.messages.retrieveSharedPrincipalsAndAccess($p0).then(function($p2_0) {
                    for (var $v_1 = $p2_0, $$arr_9 = $v_1.principalAccesses, $$len_A = $$arr_9.length, $$idx_B = 0;
                        $$idx_B < $$len_A;
                        ++$$idx_B) {
                        var $v_2 = $$arr_9[$$idx_B];
                        if ($p1.Id.equals($v_2.get_principal().Id))
                            if ($v_2.get_accessMask() & $p2) {
                                $p3();
                                return
                            }
                    }
                    !_Script.isNullOrUndefined($p4) && $p4()
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.createCallbackFunctionObject = function(functionName, context, parameters, onlyForModeless) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(onlyForModeless)) onlyForModeless = true;
    if (!onlyForModeless || !Xrm.Internal.isModalDialogSupported()) {
        var $v_0 = {};
        if (Mscrm.InternalUtilities.JSTypes.isNull(context)) context = window;
        $v_0.context = context;
        $v_0.callback = context[functionName];
        if (!Mscrm.InternalUtilities.JSTypes.isNull(parameters)) $v_0.parameters = parameters;
        return $v_0
    }
    return null
};
Mscrm.CommandBarActions.showErrorMessage = function(errorMessage) {
    var $v_0 = window.top.$P_CRM("#navStatusArea"), $v_1 = window.top.$P_CRM(".navStatusText");
    if ($v_1.length > 0) {
        $v_1.text(CrmEncodeDecode.CrmHtmlDecode(errorMessage));
        $v_1.attr("Title", CrmEncodeDecode.CrmHtmlDecode(errorMessage));
        $v_1.attr("role", "alert")
    } else {
        $v_1 = Mscrm.CommandBarActions.$2o(errorMessage);
        $v_0.append($v_1);
        var $v_2 = $P_CRM("a.navStatusClose", $v_1);
        $v_2.bind("click", Mscrm.CommandBarActions.$13);
        $P_CRM(window).unload(Mscrm.CommandBarActions.$13);
        $v_1.fadeIn("fast", null);
        $v_1.focus()
    }
};
Mscrm.CommandBarActions.$2o = function($p0) {
    var $v_0 =
            $P_CRM('<table tabindex="0" id = "notificationMessage" class="navStatusBar navStatusInfo"><tr></tr></table>'),
        $v_1 = $P_CRM("tr", $v_0);
    $v_1.append($P_CRM('<td><a title="Error" role="button" href="javascript:;" class="' +
        CrmEncodeDecode.CrmHtmlAttributeEncode("navStatusClose") +
        '"><img src="/_imgs/NavBar/StatusError.png" width=16 height=16 alt="Error" class="navStatusIcon"></td>'));
    var $v_2 = $P_CRM(String.format('<td><span title="{0}" class="navStatusText"></span></td>',
        CrmEncodeDecode.CrmHtmlDecode($p0)));
    $v_2.children(".navStatusText").text(CrmEncodeDecode.CrmHtmlDecode($p0));
    $v_1.append($v_2);
    $v_1.append($P_CRM(String.format('<td><a title="{0}" role="button" href="javascript:;" class="' +
        CrmEncodeDecode.CrmHtmlAttributeEncode("navStatusClose") +
        '"><img src="/_imgs/NavBar/StatusClose.png" width=16 height=16 alt="{0}"></a></td>',
        CrmEncodeDecode.CrmHtmlAttributeEncode("Close"))));
    return $v_0
};
Mscrm.CommandBarActions.$13 = function($p0) {
    var $v_0 = window.top.$P_CRM("#notificationMessage");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $P_CRM("a.navStatusClose", $v_0);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.unbind("Click", Mscrm.CommandBarActions.$13);
        $v_0.remove();
        $v_0 = null
    }
};
Mscrm.CommandBarActions.convertToCase = function(successCallback,
    errorCallback,
    targetEntitySubject,
    activityId,
    activityTypeCode,
    customerId,
    customerTypeCode,
    ownerId,
    ownerTypeCode,
    subjectId,
    subjectTypeCode,
    logResponse) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(),
        $v_1 = new Xrm.Objects.EntityReference("incident",
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
            targetEntitySubject),
        $v_2 = {},
        $v_3 = {},
        $v_4 = new Array(0),
        $v_5 = "title";
    $v_2[$v_5] = targetEntitySubject;
    $v_3[$v_5] = 14;
    $v_4[$v_4.length] = $v_5;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(customerId) && customerId !== $v_0) {
        $v_5 = "customerid";
        var $v_7 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(customerTypeCode),
            new Microsoft.Crm.Client.Core.Framework.Guid(customerId));
        $v_2[$v_5] = $v_7;
        $v_3[$v_5] = 6;
        $v_4[$v_4.length] = $v_5
    }
    if (subjectId) {
        $v_5 = "subjectid";
        var $v_8 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(subjectTypeCode),
            new Microsoft.Crm.Client.Core.Framework.Guid(subjectId));
        $v_2[$v_5] = $v_8;
        $v_3[$v_5] = 6;
        $v_4[$v_4.length] = $v_5
    }
    var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_1,
            $v_2,
            $v_3,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_6.get_changedFieldNames().addRange($v_4);
    Xrm.Internal.messages.convertActivity(activityId,
        Xrm.Internal.getEntityName(activityTypeCode),
        $v_6,
        "incident",
        logResponse).then(successCallback, errorCallback)
};
Mscrm.CommandBarActions.convertToCasePreload = function(element, iObjType, entityId) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    var $v_0 = {};
    if (element.indexOf("customerId") !== -1) {
        var $v_1 = Mscrm.CommandBarActions.$7(element, "customerId"),
            $v_2 = Mscrm.CommandBarActions.$7(element, "customerName"),
            $v_3 = parseInt(Mscrm.CommandBarActions.$7(element, "customerType"), 10),
            $v_4 = new Xrm.LookupObject;
        $v_4.id = CrmEncodeDecode.CrmUrlDecode($v_1);
        $v_4.name = CrmEncodeDecode.CrmUrlDecode($v_2);
        $v_4.entityType = Xrm.Internal.getEntityName($v_3);
        var $v_5 = [];
        $v_5[0] = $v_4;
        $v_0["customerLookup"] = $v_5
    }
    if (element.indexOf("subjectId") !== -1) {
        var $v_6 = Mscrm.CommandBarActions.$7(element, "subjectId"), $v_7 = ["regardingobjectid"];
        Xrm.Internal.messages.retrieve("subject", $v_6, $v_7).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $v_8 = $p1_0.entity;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8)) {
                        var $v_9 = $v_8.getValue("regardingobjectid"),
                            $v_A = $v_9.Id.toString(),
                            $v_B = new Xrm.LookupObject;
                        $v_B.id = CrmEncodeDecode.CrmUrlDecode($v_A);
                        $v_B.entityType = "subject";
                        var $v_C = [];
                        $v_C[0] = {};
                        $v_0["subject_id"] = $v_C;
                        Mscrm.CommandBarActions.$2Q($v_0, element, iObjType, entityId)
                    } else Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
                }
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.CommandBarActions.$2Q($v_0, element, iObjType, entityId)
};
Mscrm.CommandBarActions.convertToCaseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = dialogParams["incidentId"],
            $v_1 = dialogParams["saveActivity"],
            $v_2 = dialogParams["openNewRecord"],
            $v_3 = null,
            $v_4 = null;
        if (Xrm.Internal.isEnabledForInteractionCentric()) {
            $v_4 = dialogParams["entityId"];
            $v_3 = !Mscrm.InternalUtilities._Script.isNullOrUndefined(dialogParams["entityTypeCode"])
                ? Xrm.Internal.getEntityName(Number.parseInvariant(dialogParams["entityTypeCode"]))
                : null;
            Mscrm.CommandBarActions.$3x($v_0, $v_1, $v_2, $v_3, $v_4)
        }
        Mscrm.CommandBarActions.$2j($v_0, $v_1, $v_2)
    }
};
Mscrm.CommandBarActions.convertToCaseOnLoad = function() {
    var $v_0 = Mscrm.InternalUtilities.DialogUtility.getDialogArguments(),
        $v_1 = Xrm.Page.getAttribute("customerLookup");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
                var $v_3 = $v_0.customerLookup;
                $v_1.setValue($v_3)
            }
    }
};
Mscrm.CommandBarActions.convertToCaseClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0,
        $v_1 = new Xrm.AlertDialogStrings,
        $v_2 = "",
        $v_3 = "",
        $v_4 = "",
        $v_5 = "",
        $v_6 = 0,
        $v_7 = "false",
        $v_8 = "false",
        $v_9 = "",
        $v_A = 0,
        $v_B = null,
        $v_C = Xrm.Page.data.entity.attributes.get("customerLookup");
    $v_0 = $v_C.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length) {
        $v_1.text = Xrm.Internal.getResourceString(Xrm.Internal.getResourceString("Alert_Conv_Act_Customer_Must"));
        Xrm.Dialog.openAlertDialog($v_1, null, null);
        return
    } else {
        $v_2 = $v_0[0].id;
        $v_9 = $v_0[0].entityType;
        $v_A = Xrm.Internal.getEntityCode($v_9)
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_D = Xrm.Page.data.entity.attributes.get("subject_id");
    $v_0 = $v_D.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length) $v_3 = $v_0[0].id;
    var $v_E = Xrm.Page.getAttribute("subject");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_E)) $v_4 = $v_E.getValue();
    var $v_F = Xrm.Page.getAttribute("entityId");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_F)) $v_5 = $v_F.getValue();
    var $v_G = Xrm.Page.getAttribute("entityTypeCode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_G)) $v_6 = $v_G.getValue();
    var $v_H = Xrm.Page.getAttribute("cbSaveActivity_id");
    if ($v_H.getValue()) $v_7 = "true";
    var $v_I = Xrm.Page.getAttribute("cbOpenNew_id");
    if ($v_I.getValue()) $v_8 = "true";
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Mscrm.CommandBarActions.convertToCase(function($p1_0) {
            var $v_J = $p1_0.recordId.toString(), $v_K = Xrm.Page.getAttribute("incidentId");
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("incidentId", $v_J);
            var $v_L = Xrm.Page.getAttribute("saveActivity");
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("saveActivity", $v_7);
            var $v_M = Xrm.Page.getAttribute("openNewRecord");
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("openNewRecord", $v_8);
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close()
        },
        function($p1_0) { Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca($p1_0) },
        $v_4,
        $v_5,
        $v_6,
        $v_2,
        $v_A,
        null,
        $v_B,
        $v_3,
        129,
        false)
};
Mscrm.CommandBarActions.$3x = function($p0, $p1, $p2, $p3, $p4) {
    if ($p1 === "false") $p2 === "true" && Xrm.Utility.openEntityForm("incident", $p0);
    else if ($p2 === "true") Mscrm.CommandBarActions.markActivityComplete($p4, $p3, false, "incident", $p0);
    else Mscrm.CommandBarActions.markActivityComplete($p4, $p3, true, null, null)
};
Mscrm.CommandBarActions.$2j = function($p0, $p1, $p2) {
    if ($p1 === "false") {
        if ($p2 === "true") {
            Xrm.Page.data.save();
            Xrm.Utility.openEntityForm("incident", $p0)
        }
    } else {
        Xrm.Page.data.setFormDirty(false);
        if ($p2 === "true")
            Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),
                Xrm.Page.data.entity.getEntityName(),
                false,
                "incident",
                $p0);
        else
            Mscrm.CommandBarActions.markActivityComplete(Xrm.Page.data.entity.getId(),
                Xrm.Page.data.entity.getEntityName(),
                true,
                null,
                null)
    }
    Mscrm.CommandBarActions.$a(Xrm.Page.data.entity.getId(), Xrm.Page.data.entity.getEntityName())
};
Mscrm.CommandBarActions.$2Q = function($p0, $p1, $p2, $p3) {
    if ($p1.indexOf("subject") !== -1) {
        var $v_3 = Mscrm.CommandBarActions.$7($p1, "subject");
        $p0["subject"] = CrmEncodeDecode.CrmUrlDecode($v_3)
    }
    $p0["entityId"] = Mscrm.InternalUtilities._String.isNullOrEmpty($p3) ? Xrm.Page.data.entity.getId() : $p3;
    $p0["entityTypeCode"] = $p2;
    $p0["incidentId"] = "";
    $p0["saveActivity"] = "false";
    $p0["openNewRecord"] = "false";
    $p0["lastButtonClicked"] = "";
    var $v_0 = Mscrm.CommandBarActions.convertToCaseCallback;
    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
    var $v_1 = null, $v_2 = 400;
    if ($p1.indexOf("leadId") !== -1) $v_2 += 30;
    if (Mscrm.CommandBarActions.isWebClient() || Xrm.Page.context.client.getClient() === "Outlook") {
        $v_1 = new Xrm.DialogOptions;
        $v_1.height = $v_2;
        $v_1.width = 410
    }
    Xrm.Dialog.openDialog("ConvertToCase", $v_1, $p0, $v_0, null)
};
Mscrm.CommandBarActions.convertToLead = function(successCallback,
    errorCallback,
    targetEntitySubject,
    activityId,
    activityTypeCode,
    topic,
    firstName,
    lastName,
    company,
    emailAddress,
    logResponse) {
    var $v_0 = new Xrm.Objects.EntityReference("lead",
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
            targetEntitySubject),
        $v_1 = {},
        $v_2 = {},
        $v_3 = new Array(0),
        $v_4 = "subject",
        $v_5 = "firstname",
        $v_6 = "lastname",
        $v_7 = "companyname",
        $v_8 = "emailaddress1";
    $v_1[$v_4] = topic;
    $v_2[$v_4] = 14;
    $v_3[$v_3.length] = $v_4;
    $v_1[$v_5] = firstName;
    $v_2[$v_5] = 14;
    $v_3[$v_3.length] = $v_5;
    $v_1[$v_6] = lastName;
    $v_2[$v_6] = 14;
    $v_3[$v_3.length] = $v_6;
    $v_1[$v_7] = company;
    $v_2[$v_7] = 14;
    $v_3[$v_3.length] = $v_7;
    $v_1[$v_8] = emailAddress;
    $v_2[$v_8] = 14;
    $v_3[$v_3.length] = $v_8;
    var $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_0,
            $v_1,
            $v_2,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_9.get_changedFieldNames().addRange($v_3);
    Xrm.Internal.messages.convertActivity(activityId,
        Xrm.Internal.getEntityName(activityTypeCode),
        $v_9,
        "lead",
        logResponse).then(successCallback, errorCallback)
};
Mscrm.CommandBarActions.convertToOpportunity = function(successCallback,
    errorCallback,
    targetEntitySubject,
    activityId,
    activityTypeCode,
    customerId,
    customerTypeCode,
    ownerId,
    ownerTypeCode,
    leadId,
    currencyId,
    campaignId,
    campaignTypeCode,
    logResponse,
    ownerName) {
    var $v_0 = Mscrm.CommandBarActions
        .getOpportunityEntityRecord(targetEntitySubject,
            activityId,
            activityTypeCode,
            customerId,
            customerTypeCode,
            ownerId,
            ownerTypeCode,
            leadId,
            currencyId,
            campaignId,
            campaignTypeCode,
            ownerName);
    Mscrm.CommandBarActions.entityName = Xrm.Internal.getEntityName(activityTypeCode);
    Xrm.Internal.messages.convertActivity(activityId,
        Xrm.Internal.getEntityName(activityTypeCode),
        $v_0,
        "opportunity",
        logResponse).then(successCallback, errorCallback)
};
Mscrm.CommandBarActions
    .getOpportunityEntityRecord = function(targetEntitySubject,
        activityId,
        activityTypeCode,
        customerId,
        customerTypeCode,
        ownerId,
        ownerTypeCode,
        leadId,
        currencyId,
        campaignId,
        campaignTypeCode,
        ownerName) {
        var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(),
            $v_1 = new Xrm.Objects.EntityReference("opportunity",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
                targetEntitySubject),
            $v_2 = {},
            $v_3 = {},
            $v_4 = new Array(0),
            $v_5,
            $v_6 = "name";
        $v_2[$v_6] = targetEntitySubject;
        $v_3[$v_6] = 14;
        $v_4[$v_4.length] = $v_6;
        var $v_7 = Mscrm.InternalUtilities.DialogUtility
            .isMDDConverted("converttoopportunity", Xrm.Internal.getEntityName(activityTypeCode));
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(currencyId) && currencyId !== $v_0) {
            $v_6 = "transactioncurrencyid";
            var $v_9 = new Xrm.Objects.EntityReference("transactioncurrency",
                new Microsoft.Crm.Client.Core.Framework.Guid(currencyId));
            if ($v_7) {
                var $v_A = Xrm.Page.data.entity.attributes.get("currencyLookup");
                $v_5 = $v_A.getValue();
                var $v_B = "";
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.length > 0) $v_B = $v_5[0].name;
                if (!Mscrm.InternalUtilities.JSTypes
                    .isNullOrEmptyString($v_B) &&
                    Xrm.Utility.isMocaOffline()) $v_9.Name = $v_B
            }
            $v_2[$v_6] = $v_9;
            $v_3[$v_6] = 6;
            $v_4[$v_4.length] = $v_6
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(campaignId) &&
            campaignId !== $v_0 &&
            campaignTypeCode === Xrm.Internal.getEntityCode("campaign")) {
            $v_6 = "campaignid";
            var $v_C = new Xrm.Objects.EntityReference(campaignTypeCode
                ? Xrm.Internal.getEntityName(campaignTypeCode)
                : "campaign",
                new Microsoft.Crm.Client.Core.Framework.Guid(campaignId));
            $v_2[$v_6] = $v_C;
            $v_3[$v_6] = 6;
            $v_4[$v_4.length] = $v_6
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(leadId) && leadId !== $v_0) {
            $v_6 = "leadid";
            var $v_D = new Xrm.Objects.EntityReference("lead", new Microsoft.Crm.Client.Core.Framework.Guid(leadId));
            $v_2[$v_6] = $v_D;
            $v_3[$v_6] = 6;
            $v_4[$v_4.length] = $v_6
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(customerId) && customerId !== $v_0) {
            $v_6 = "customerid";
            var $v_E = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(customerTypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid(customerId));
            if ($v_7) {
                var $v_F = Xrm.Page.data.entity.attributes.get("customerLookup");
                $v_5 = $v_F.getValue();
                var $v_G = "";
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.length > 0) $v_G = $v_5[0].name;
                if (Xrm.Utility.isMocaOffline()) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_G)) $v_E.Name = $v_G;
                    $v_E.TypeCode = customerTypeCode
                }
            }
            $v_2[$v_6] = $v_E;
            $v_3[$v_6] = 6;
            $v_4[$v_4.length] = $v_6
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(ownerId) && ownerId !== $v_0) {
            $v_6 = "ownerid";
            var $v_H = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(ownerTypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid(ownerId));
            if ($v_7) $v_H.Name = ownerName;
            $v_2[$v_6] = $v_H;
            $v_3[$v_6] = 6;
            $v_4[$v_4.length] = $v_6
        }
        var $v_8 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_1,
                $v_2,
                $v_3,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_8.get_changedFieldNames().addRange($v_4);
        return $v_8
    };
Mscrm.CommandBarActions.onLoadCreateOrderDialog = function() {
    Mscrm.CommandBarActions.$3u();
    Mscrm.CommandBarActions.initializeDateControl("createorderdate_id");
    Mscrm.CommandBarActions
        .filterOptionSetValuesFromControl("quote", Mscrm.CommandBarActions.$3N(), "createorderstatusreason_id");
    Mscrm.CommandBarActions.$m()
};
Mscrm.CommandBarActions.onCloseCreateOrderDialog = function() {
    var $v_0 = Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createorderstatusreason_id"),
        $v_1 = Mscrm.CommandBarActions.$1t(),
        $v_2 = $v_1 &&
            Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createordercloseopportunity_id") === 1,
        $v_3 = Mscrm.CommandBarActions.$3P(),
        $v_4 = Mscrm.CommandBarActions.$3R(),
        $v_5 = Mscrm.CommandBarActions.$3O(),
        $v_6 = "",
        $v_7 = $v_2 &&
            Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createordercalcrevenue_id") !== 1;
    if ($v_7) $v_6 = Mscrm.CommandBarActions.$3M();
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("createorderdate_id", $v_5.toDateString());
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("description_id", $v_3);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("createorderstatusreason_id", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("createorderstatusreasondescription_id", $v_4);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("createordercalcrevenue_id", !$v_7 ? 1 : 0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("createordercloseopportunity_id", $v_2 ? 1 : 0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("actualrevenue_id", $v_6);
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.onCreateOrderCloseOpportunityChanged = function() { Mscrm.CommandBarActions.$m() };
Mscrm.CommandBarActions.onCreateOrderCalculateRevenueFromQuoteChanged = function() { Mscrm.CommandBarActions.$m() };
Mscrm.CommandBarActions.onCreateOrderActualRevenueChanged = function() { Mscrm.CommandBarActions.$m() };
Mscrm.CommandBarActions.$m = function() {
    var $v_0 = Mscrm.CommandBarActions.$1t();
    Mscrm.CommandBarActions.$R("createordercloseopportunity_id", $v_0);
    var $v_1 = $v_0 &&
        Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createordercloseopportunity_id") === 1;
    Mscrm.CommandBarActions.$R("createordercalcrevenue_id", $v_1);
    Mscrm.CommandBarActions.$R("actualrevenue_id",
        $v_1 && Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createordercalcrevenue_id") !== 1);
    var $v_2 = Xrm.Page.ui.controls.get("ok_id");
    if ($v_1 &&
        Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl("createordercalcrevenue_id") !== 1 &&
        !Mscrm.CommandBarActions.$3Q()) $v_2.setDisabled(true);
    else $v_2.setDisabled(false)
};
Mscrm.CommandBarActions.$1t = function() {
    var $v_0 = Xrm.Page.getAttribute("cancloseopportunity");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3u = function() {
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("header_lbl_createorder", "Accept_Quote_Dlg_Title");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("lbl_createorderdescription", "Accept_Quote_Dlg_Desc");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("createorderdate_id", "Web.SFA.quotes.aspx_50.dlg_accept");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("description_id", "Web.SFA.salesorders.aspx_60.dlg_close");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("actualrevenue_id", "Web.SFA.quotes.aspx_60.dlg_accept")
};
Mscrm.CommandBarActions.$3N = function() {
    var $v_0 = Xrm.Page.getAttribute("closedstate");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3Q = function() {
    var $v_0 = Xrm.Page.getControl("actualrevenue_id"), $v_1 = $v_0.getAttribute();
    return !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())
};
Mscrm.CommandBarActions.$3O = function() {
    var $v_0 = Xrm.Page.getControl("createorderdate_id");
    return $v_0.getAttribute().getValue()
};
Mscrm.CommandBarActions.$3P = function() {
    var $v_0 = Xrm.Page.getAttribute("description_id");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3M = function() {
    var $v_0 = Xrm.Page.getControl("actualrevenue_id"), $v_1 = $v_0.getAttribute();
    return $v_1.getValue()
};
Mscrm.CommandBarActions.$3R = function() {
    var $v_0 = Xrm.Page.getControl("createorderstatusreason_id"), $v_1 = $v_0.getAttribute();
    return $v_1.getSelectedOption().text
};
Mscrm.CommandBarActions
    .isStartDateLessThanEndDate = function(oBeginDate, oEndDate, oSourceCtrl, oBeginDateValue, oEndDateValue) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(oBeginDate.getValue()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(oEndDate.getValue()) &&
            oBeginDate.getValue() > oEndDate.getValue()) {
            var $v_0 = Xrm.Page.data.entity.getEntityName();
            switch ($v_0) {
            case "contract":
            case "contractdetail":
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_CONTRACT_ED_DT_LT_ST_DT"), null);
                break;
            default:
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ENDDATE_LT_STARTDATE"), null);
                break
            }
            switch (oSourceCtrl) {
            case "activeon":
            case "actualstart":
            case "begindate":
            case "billingstarton":
            case "proposedstart":
            case "scheduledstart":
            case "validfromdate":
                oBeginDate.setValue(oBeginDateValue);
                break;
            default:
                oEndDate.setValue(oEndDateValue);
                break
            }
            return false
        }
        return true
    };
Mscrm.CommandBarActions
    .validateStartDateIsSmallerThanEndDate = function(oStartDate, oEndDate, errorMessage, oDateToClear) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(oStartDate.getValue()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(oEndDate.getValue()) &&
            oEndDate.getValue() < oStartDate.getValue()) {
            Xrm.Utility.alertDialog(errorMessage, null);
            oDateToClear.setValue(null);
            oDateToClear.fireOnChange()
        }
    };
Mscrm.CommandBarActions.CloneDate = function(date) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(date)) {
        var $v_0 = new Date;
        $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
        $v_0.setTime(date.getTime());
        return $v_0
    } else return null
};
Mscrm.CommandBarActions.deletePrimaryRecord = function(id, entityName) {
    var $v_0 = 450,
        $v_1 = 205,
        $v_2 = null,
        $v_3 = Xrm.Internal.getEntityCode(entityName),
        $v_4 = [id],
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete.aspx");
    $v_5.get_query()["iObjType"] = $v_3;
    $v_5.get_query()["iTotal"] = "1";
    $v_5.get_query()["sIds"] = id;
    var $v_6 = new Xrm.ConfirmDialogStrings;
    switch (entityName) {
    case "recurringappointmentmaster":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/activities/act_dlgs/dlg_seriesaction.aspx");
        $v_5.get_query()["actionType"] = "6";
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["insDel"] = Mscrm.CommandBarActions.$45();
        $v_0 = 520;
        $v_1 = 240;
        break;
    case "appointment":
        var $v_7 = Xrm.Page.getAttribute("instancetypecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) &&
            $v_7.getValue().toString() !== "0" &&
            $v_7.getValue().toString() !== "1") {
            var $v_E = new Xrm.DialogOptions;
            $v_E.height = 325;
            $v_E.width = 500;
            var $v_F = {};
            $v_F["entityId"] = id;
            var $v_G = Mscrm.CommandBarActions.seriesActionDialogCloseCallback;
            Xrm.Dialog.openDialog("SeriesActionDialog", $v_E, $v_F, $v_G, null);
            return
        }
        break;
    case "account":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_account.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["sIds"] = id;
        $v_0 = 450;
        $v_1 = 250;
        break;
    case "topicmodel":
        $v_0 = 500;
        $v_1 = 220;
        break;
    case "contact":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_contact.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["sIds"] = id;
        $v_0 = 450;
        $v_1 = 250;
        break;
    case "dynamicproperty":
        var $v_8 = Xrm.Page.context.getQueryStringParameters();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8)) {
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_8["_CreateFromType"])) $v_5.get_query()["iParentType"] = $v_8["_CreateFromType"].toString();
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_8["_CreateFromId"])) $v_5.get_query()["sParentId"] = $v_8["_CreateFromId"].toString()
        }
        $v_5.get_query()["sObjectId"] = id;
        break;
    case "opportunityproduct":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_deleteqoiproduct.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["sParentId"] = "";
        $v_0 = 450;
        $v_1 = 250;
        break;
    case "quotedetail":
    case "salesorderdetail":
    case "invoicedetail":
        var $v_9 = "", $v_A = [], $v_B = window.opener;
        if ($v_B && !$v_B.closed) {
            var $v_H = $v_B.parent;
            $v_A[0] = $v_H;
            var $v_I = $v_H.document.getElementById("crmFormSubmit");
            $v_9 = Mscrm.InternalUtilities.LegacyUtils.getFormSubmitId($v_I)
        } else $v_A[0] = null;
        $v_A[1] = $v_4;
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_deleteqoiproduct.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = $v_4.length;
        $v_5.get_query()["sParentId"] = $v_9;
        $v_1 = 205;
        $v_0 = 450;
        break;
    case "queue":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_queue.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = "1";
        $v_5.get_query()["sIds"] = id;
        break;
    case "sharepointsite":
        $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_sharepointsite.aspx");
        $v_5.get_query()["iObjType"] = $v_3;
        $v_5.get_query()["iTotal"] = "1";
        $v_0 = 570;
        $v_1 = 250;
        break;
    case "workflow":
        $v_5.get_query()["sIds"] = id;
        break;
    case "product":
        var $v_C = Xrm.Page.getAttribute("productstructure");
        $v_5.get_query()["productStructure"] = $v_C.getValue();
        break;
    default:
        break
    }
    $v_2 = [$v_3, id];
    var $v_D = new Xrm.DialogOptions;
    $v_D.height = $v_1;
    $v_D.width = $v_0;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("delete", $v_6, entityName, 1, $v_5)) {
        var $v_J = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.performDeleteAction, $v_2);
        Xrm.Dialog.openConfirmDialog($v_6, $v_D, $v_J, null)
    } else {
        var $v_K = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.performActionAfterDelete, $v_2);
        Xrm.Internal.openDialog($v_5.toString(), $v_D, $v_4, null, $v_K)
    }
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, "Delete", $v_3)
};
Mscrm.CommandBarActions.seriesActionDialogDeleteAppointmentOnLoad = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    var $v_0 = Xrm.Page.ui.controls.get("deleteoccurrence_id");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setFocus();
    var $v_1 = Xrm.Page.ui.controls.get("deletedescription_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = Xrm.Page.getAttribute("entityId");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            Xrm.Internal.messages.retrieve("appointment", $v_2.getValue(), ["seriesid", "subject"])
            .then(function($p1_0) {
                    if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
                    var $v_3 = "", $v_4 = "", $v_5 = $p1_0.entity;
                    if ($v_5.hasValue("subject")) {
                        $v_3 = $v_5.getValue("subject");
                        $v_1.setLabel(String.format(Xrm.Internal
                            .getResourceString("activities/act_dlgs/dlg_seriesaction.aspx_textDeleteInstance"),
                            $v_3))
                    }
                    if ($v_5.hasValue("seriesid")) {
                        $v_4 = $v_5.getValue("seriesid").toString();
                        var $v_6 = Xrm.Page.getAttribute("seriesId");
                        $v_6.setValue($v_4)
                    }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.CommandBarActions.seriesActionDialogCloseCallback = function(dialogParams, callbackParams) {
    !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) &&
        dialogParams["lastButtonClicked"] === "ok_id" &&
        Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.seriesActionDialogOkClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = Xrm.Page.getAttribute("entityId"), $v_1 = Xrm.Page.getAttribute("deleteoccurrence_id");
    if ($v_1.getValue()) {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        var $v_2 = $v_0.getValue();
        Xrm.Internal.messages.deleteEntity("appointment", $v_2).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                Xrm.Page.ui.close()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else {
        var $v_3 = Xrm.Page.getAttribute("seriesId");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) return;
            var $v_4 = $v_3.getValue().toString(),
                $v_5 = "recurringappointmentmaster",
                $v_6 = Xrm.Page.getAttribute("deleteserieskeepcompleted_id");
            if ($v_6.getValue()) {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                Xrm.Internal.messages.retrieve($v_5, $v_4, ["activityid"]).then(function($p1_0) {
                        if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
                        var $v_7 = $p1_0.entity, $v_8 = new Date, $v_9 = 0;
                        Xrm.Internal.messages.deleteOpenInstances($v_7, $v_8, $v_9).then(function($p2_0) {
                                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                Xrm.Page.ui.close()
                            },
                            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            } else {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                Xrm.Internal.messages.deleteEntity($v_5, $v_4.toString()).then(function($p1_0) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Page.ui.close()
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
            }
        }
    }
};
Mscrm.CommandBarActions
    .seriesActionDialogFirstOptionChange = function() {
        Mscrm.CommandBarActions.seriesActionDialogOptionChange("deleteoccurrence_id")
    };
Mscrm.CommandBarActions
    .seriesActionDialogSecondOptionChange = function() {
        Mscrm.CommandBarActions.seriesActionDialogOptionChange("deleteserieskeepcompleted_id")
    };
Mscrm.CommandBarActions
    .seriesActionDialogThirdOptionChange = function() {
        Mscrm.CommandBarActions.seriesActionDialogOptionChange("deleteseriesallinstances_id")
    };
Mscrm.CommandBarActions.seriesActionDialogOptionChange = function(selectedOption) {
    var $v_0 = Xrm.Page.getAttribute("deleteoccurrence_id"),
        $v_1 = Xrm.Page.getAttribute("deleteserieskeepcompleted_id"),
        $v_2 = Xrm.Page.getAttribute("deleteseriesallinstances_id");
    switch (selectedOption) {
    case "deleteoccurrence_id":
        $v_1.setValue(false);
        $v_2.setValue(false);
        $v_0.setValue(true);
        break;
    case "deleteserieskeepcompleted_id":
        $v_0.setValue(false);
        $v_2.setValue(false);
        $v_1.setValue(true);
        break;
    case "deleteseriesallinstances_id":
        $v_0.setValue(false);
        $v_1.setValue(false);
        $v_2.setValue(true);
        break
    }
};
Mscrm.CommandBarActions.performDeleteAction = function(result, objectType, recordId) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(recordId)) {
        var $v_0 = Xrm.Internal.getEntityName(objectType);
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Utility.deleteRecord($v_0, recordId).always(function() {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Internal.refreshParentGrid(objectType, "", recordId)
        }).then(function($p1_0) {
                Xrm.Page.data.setFormDirty(false);
                if (Xrm.Internal.isEnabledForInteractionCentric()) {
                    var $v_1 = Xrm.Page.getAttribute("IsInteractionWallQuickAction");
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                        var $v_2 = Xrm.Page.getAttribute("InteractionWallViewModel");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.fireOnChange()
                    } else Xrm.Page.ui.close()
                } else Xrm.Page.ui.close()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
};
Mscrm.CommandBarActions.performActionAfterDelete = function(result, objectType, recordId) {
    if (result) {
        Mscrm.CommandBarActions.$1C([recordId]);
        Xrm.Page.data.setFormDirty(false);
        Xrm.Internal.refreshParentGrid(objectType, "", recordId);
        window.setTimeout(function() { Xrm.Page.ui.close() }, 200)
    }
};
Mscrm.CommandBarActions.$45 = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) return true;
    var $v_0 = Xrm.Page.getAttribute("seriesstatus");
    return !!$v_0 && (!$v_0.getValue() || $v_0.getValue())
};
Mscrm.CommandBarActions.performRecordsDeletedEvent = function(result, id) {
    result && Mscrm.CommandBarActions.$1C([id])
};
Mscrm.CommandBarActions.editSalesProcess = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = window.screen.availHeight;
    $v_0.width = window.screen.availWidth - 10;
    $v_0.left = 0;
    Xrm.Utility.openEntityForm("workflow", Xrm.Page.ui.process.getId(), null, $v_0)
};
Mscrm.CommandBarActions.isBusinessProcessPresent = function() {
    return !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.process)
};
Mscrm.CommandBarActions.canSwitchProcess = function() { return true };
Mscrm.CommandBarActions.canEditProcess = function() { return Mscrm.CommandBarActions.isBusinessProcessPresent() };
Mscrm.CommandBarActions.switchProcess = function() { Xrm.Page.data.process.switchProcess() };
Mscrm.CommandBarActions.abandonProcess = function() { Xrm.Page.data.process.abandonProcess() };
Mscrm.CommandBarActions.reactivateProcess = function() { Xrm.Page.data.process.reactivateProcess() };
Mscrm.CommandBarActions.setActiveStage = function() {
    var $v_0 = function($p1_0) { return }, $v_1 = Xrm.Page.data.process.getSelectedStage();
    $v_1 && Xrm.Page.data.process.setActiveStage($v_1.getId(), $v_0)
};
Mscrm.CommandBarActions.finishProcess = function() { Xrm.Page.data.process.completeProcess() };
Mscrm.CommandBarActions.isRefreshForm = function() {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) return true;
    return Mscrm.InternalUtilities.Utilities.isRefreshForm()
};
Mscrm.CommandBarActions.alwaysEnabled = function() { return true };
Mscrm.CommandBarActions.isIpadOnpremise = function() {
    if (Xrm.Page.context.isCrmOnline()) return false;
    if (Mscrm.CommandBarActions
        .isMobileCompanionApp() ||
        !Mscrm.InternalUtilities.Utilities.isIosDevice()) return false;
    return true
};
Mscrm.CommandBarActions.isValidForHierarchyView = function() { return true };
Mscrm.CommandBarActions.isClaimsAuth = function() { return Xrm.Internal.isClaimsEnabled() };
Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline = function(entityLogicalName) {
    if (Mscrm.CommandBarActions
        .isMobileCompanionApp() &&
        Xrm.Page.context.client
        .getClientState() ===
        "Offline") return Xrm.Utility.isEntityOfflineSyncEnabled(entityLogicalName);
    return true
};
Mscrm.CommandBarActions.notOnMarketingListOrListUnlocked = function(entityTypeCode) { return true };
Mscrm.CommandBarActions.notOnMarketingListOrListActive = function(entityTypeCode) { return true };
Mscrm.CommandBarActions.IsCommandAvailableInMocaOffline = function(isAvailableOfflineMobile, entityLogicalName) {
    if (Xrm.Page.context.client
        .getClientState() ===
        "Offline")
        return isAvailableOfflineMobile &&
            Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline(entityLogicalName);
    return true
};
Mscrm.CommandBarActions
    .IsLeadQualifyAvailableInMocaOffline = function() {
        return Mscrm.CommandBarActions.IsCommandAvailableInMocaOffline(true, "lead") &&
            Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline("account") &&
            Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline("contact") &&
            Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline("opportunity")
    };
Mscrm.CommandBarActions
    .IsOpportunityAvailableInMocaOffline = function() {
        return Mscrm.CommandBarActions.IsEntityAvailableForUserInMocaOffline("opportunity")
    };
Mscrm.CommandBarActions.openFlowTemplatesDialog = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 600;
    $v_0.width = 900;
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/tools/MicrosoftFlow/flowtemplatesdialog.aspx");
    $v_1.get_query()["crm.organization"] = Xrm.Page.context.getOrgUniqueName();
    $v_1.get_query()["crm.entityName"] = Xrm.Page.data.entity.getEntityName();
    $v_1.get_query()["crm.entityId"] = Xrm.Page.data.entity.getId();
    Xrm.Internal.openDialog($v_1.toString(), $v_0, null, null, null)
};
Mscrm.CommandBarActions.onActionMenuClick = function(action, objectType, objectSubtype, callbackArgumentRef) {
    var $v_0 = {};
    $v_0["action"] = action;
    $v_0["objectType"] = objectType;
    $v_0["objectSubtype"] = objectSubtype;
    $v_0["callbackArgumentRef"] = callbackArgumentRef;
    return Mscrm.CommandBarActions.handleActionMenuClick($v_0)
};
Mscrm.CommandBarActions.handleActionMenuClick = function(clickContext) {
    var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null, $v_4 = null;
    if ("action" in clickContext) $v_0 = clickContext["action"];
    if ("objectType" in clickContext) $v_1 = clickContext["objectType"];
    if ("objectSubtype" in clickContext) $v_2 = clickContext["objectSubtype"];
    if ("callbackArgumentRef" in clickContext) $v_3 = clickContext["callbackArgumentRef"];
    if ("recordId" in clickContext) $v_4 = clickContext["recordId"];
    if (Mscrm.InternalUtilities.Utilities.isIosDevice() && "webmailmerge" === $v_0) {
        alert(Xrm.Internal.getResourceString("LOCID_UNSUPPORTED_RIBBONACTION"));
        return null
    }
    if (typeof $v_1 !== "number") $v_1 = parseInt($v_1, 10);
    var $v_5 = 400,
        $v_6 = 200,
        $v_7 = false,
        $v_8 = false,
        $v_9 = null,
        $v_A = null,
        $v_B = null,
        $v_C = false,
        $v_D = null;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) $v_D = Xrm.Page.data.entity.getId();
    else $v_D = $v_4;
    var $v_E = [$v_D],
        $v_F = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" + CrmEncodeDecode.CrmUrlEncode($v_0) + ".aspx");
    $v_F.get_query()["iObjType"] = $v_1;
    $v_F.get_query()["iTotal"] = "1";
    $v_F.get_query()["sIds"] = $v_D;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_F.get_query()["iObjSubType"] = $v_2;
    switch ($v_0) {
    case "applyrule":
        $v_5 = 400;
        $v_6 = 275;
        break;
    case "approve_emailaddress":
        Xrm.Page.data.entity.save();
        $v_F = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
            CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") +
            ".aspx");
        $v_F.get_query()["iObjType"] = $v_1;
        $v_F.get_query()["iTotal"] = "1";
        $v_F.get_query()["sIds"] = $v_D;
        $v_F.get_query()["customAction"] = "approveemail";
        $v_C = true;
        $v_8 = true;
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 500;
        $v_6 = 250;
        break;
    case "reject_emailaddress":
        Xrm.Page.data.entity.save();
        $v_F = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
            CrmEncodeDecode.CrmUrlEncode("approve_emailaddress") +
            ".aspx");
        $v_F.get_query()["iObjType"] = $v_1;
        $v_F.get_query()["iTotal"] = "1";
        $v_F.get_query()["sIds"] = $v_D;
        $v_F.get_query()["customAction"] = "rejectemail";
        $v_C = true;
        $v_8 = true;
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 450;
        $v_6 = 200;
        break;
    case "approve_user":
    case "reject_user":
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 500;
        $v_6 = 230;
        $v_C = true;
        $v_8 = true;
        break;
    case "approve_queue":
    case "reject_queue":
        $v_5 = Xrm.Page.context.client.getClient() === "Outlook" ? 750 : 450;
        $v_6 = 200;
        $v_C = true;
        $v_8 = true;
        break;
    case "assign":
        $v_5 = 456;
        $v_6 = 260;
        $v_7 = true;
        $v_C = true;
        break;
    case "actsetrespon":
        $v_5 = 456;
        $v_6 = 310;
        break;
    case "changeorg":
        $v_5 = 420;
        $v_6 = 325;
        if ($v_1 === 8 || $v_1 === 9) $v_8 = true;
        else $v_7 = true;
        $v_C = true;
        break;
    case "changecaptain":
        $v_5 = 400;
        $v_6 = 225;
        $v_7 = true;
        break;
    case "changeparent":
        $v_5 = 400;
        $v_6 = 245;
        $v_8 = true;
        $v_C = true;
        break;
    case "changeposition":
        $v_5 = 400;
        $v_6 = 245;
        $v_8 = true;
        $v_C = true;
        break;
    case "converttoaccessteam":
        $v_5 = 450;
        $v_6 = 245;
        $v_8 = true;
        $v_C = true;
        break;
    case "delete":
        $v_5 = 450;
        $v_6 = 205;
        $v_7 = true;
        Mscrm.CommandBarActions.deletePrimaryRecord($v_D, Xrm.Page.data.entity.getEntityName());
        break;
    case "activate":
    case "deactivate":
        if ($v_1 === 4703)
            if ($v_F.get_query()["iObjSubType"]) $v_F.get_query()["iObjSubType"] = Mscrm.CommandBarActions.$3h();
        if ($v_1 !== 3231) $v_F.get_query()["confirmMode"] = "1";
        else $v_8 = true;
        $v_6 = 250;
        $v_5 = 540;
        $v_C = true;
        break;
    case "deactivatecampactivity":
        $v_F.get_query()["confirmMode"] = "1";
        $v_C = true;
        $v_6 = 260;
        $v_5 = 350;
        break;
    case "role":
        $v_5 = 500;
        $v_6 = 360;
        $v_C = true;
        break;
    case "share":
        $v_5 = 800;
        $v_6 = 480;
        $v_C = true;
        Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, $v_0, $v_1);
        break;
    case "grant":
        $v_5 = 925;
        $v_6 = 560;
        break;
    case "status":
        $v_5 = 456;
        $v_6 = 250;
        break;
    case "webmailmerge":
        $v_5 = 600;
        $v_6 = 500;
        $v_F = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_webmailmerge.aspx");
        $v_F.get_query()["objectTypeCode"] = $v_1;
        $v_F.get_query()["Id"] = $v_D;
        var $v_G = new Xrm.DialogOptions;
        $v_G.height = $v_5;
        $v_G.width = $v_6;
        Xrm.Internal.openDialog($v_F.toString(), $v_G, null, null, null);
        $v_F = null;
        break
    }
    if ($v_0 !== "delete")
        if (Xrm.Internal
            .isModalDialogSupported() ||
            !$v_B)
            $v_A = Mscrm.CommandBarActions
                .handleCallbackFunction($v_9, $v_F, $v_0, $v_1, $v_E, $v_5, $v_6, $v_7, $v_8, $v_D, $v_3, $v_C);
    return $v_A
};
Mscrm.CommandBarActions.handleCallbackFunction = function(result,
    url,
    action,
    objectType,
    ids,
    width,
    height,
    close,
    reload,
    id,
    callbackArgumentRef,
    isDialogInline) {
    var $v_0 = null;
    $v_0 = [action, objectType, close, reload, id, callbackArgumentRef];
    isDialogInline = !Mscrm.InternalUtilities.JSTypes.isNull(isDialogInline) && isDialogInline;
    if (isDialogInline) {
        var $v_1 = new Xrm.DialogOptions;
        $v_1.height = height;
        $v_1.width = width;
        var $v_2 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.performActionAfterSwitch, $v_0);
        Xrm.Internal.openDialog(url.toString(), $v_1, ids, null, $v_2)
    } else {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(url)) {
            var $v_3 = Mscrm.CommandBarActions.createCallbackFunctionObject("performActionAfterSwitch", window, $v_0),
                $v_4 = new Xrm.DialogOptions;
            $v_4.height = height;
            $v_4.width = width;
            Xrm.Internal.openDialog(url.toString(), $v_4, ids, null, $v_3)
        }
        if (Xrm.Internal.isModalDialogSupported())
            return Mscrm.CommandBarActions
                .performActionAfterSwitch(result, action, objectType, close, reload, id, callbackArgumentRef)
    }
    return result
};
Mscrm.CommandBarActions.performActionAfterSwitch = function(result,
    action,
    objectType,
    close,
    reload,
    id,
    callbackArgumentRef) {
    if (result && close) {
        !Mscrm.InternalUtilities.Utilities.isIosDevice() && Xrm.Internal.refreshParentGrid(objectType, "", id);
        action === "delete" && Mscrm.CommandBarActions.performActionAfterDelete(result, objectType, id);
        Xrm.Page.ui.close();
        Mscrm.InternalUtilities.Utilities.isIosDevice() && Xrm.Internal.refreshParentGrid(objectType, "", id)
    } else if (result && reload)
        if (action === "approve_emailaddress" || action === "reject_emailaddress"
        ) Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), id, null);
        else if (Mscrm.InternalUtilities.Utilities.isRefreshForm()) Xrm.Page.data.refresh(true);
        else {
            crmForm.SubmitCrmForm(4, true, true, false, false);
            Xrm.Internal.refreshParentGrid(objectType, "", id)
        }
    !Mscrm.InternalUtilities.JSTypes.isNull(callbackArgumentRef) &&
        Mscrm.CommandBarActions.$31(callbackArgumentRef, result);
    return result
};
Mscrm.CommandBarActions.$31 = function($p0, $p1) {
    if (Mscrm.InternalUtilities.JSTypes.isNull($p0)) return null;
    var $v_0 = $p0.$1R_0;
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return null;
    var $v_1 = $p0.$1Y_0, $v_2 = $p0.$2F_0, $v_3 = [$p1];
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        for (var $v_4 = 0; $v_4 < $v_2.length; $v_4++) $v_3[$v_4 + 1] = $v_2[$v_4];
    try {
        return $v_0.apply($v_1, $v_3)
    } catch ($$e_7) {
        alert(Xrm.Internal.getResourceString("LOCID_IPADWINCLOSED"))
    }
    return null
};
Mscrm.CommandBarActions.$3h = function() {
    var $v_0 = 1, $v_1 = 3, $v_2 = $v_0, $v_3 = $get("type");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3))
        $v_2 = $v_3.options[$v_3.selectedIndex].value === "1" ? $v_0 : $v_1;
    return $v_2
};
Mscrm.CommandBarActions.disassociate = function(gridControl, selectedRecords) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 = Xrm.Page.data.entity.getEntityName(),
        $v_2 = new Xrm.Objects.EntityReference($v_1, new Microsoft.Crm.Client.Core.Framework.Guid($v_0)),
        $v_3 = gridControl.getRelationshipName(),
        $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.Relationship($v_3),
        $v_5 = null;
    if (!selectedRecords) {
        var $v_6 = gridControl.getGrid().getSelectedRows().getAll();
        $v_5 = new Array($v_6.length);
        for (var $v_7 = 0; $v_7 < $v_6.length; $v_7++)
            $v_5[$v_7] = new Xrm.Objects.EntityReference($v_6[$v_7].getData().getEntity().getEntityName(),
                new Microsoft.Crm.Client.Core.Framework.Guid($v_6[$v_7].getKey()))
    } else {
        $v_5 = new Array(selectedRecords.length);
        for (var $v_8 = 0; $v_8 < selectedRecords.length; $v_8++) {
            var $v_9 = selectedRecords[$v_8], $v_A = Xrm.Internal.getEntityName($v_9.TypeCode);
            $v_5[$v_8] = new Xrm.Objects.EntityReference($v_A,
                new Microsoft.Crm.Client.Core.Framework.Guid($v_9.Id.toString()))
        }
    }
    Xrm.Internal.messages.disassociate($v_2, $v_4, $v_5)
        .then(function($p1_0) { !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh() },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.formPageDeveloperTabEnableRule = function(primaryControl) {
    if (Mscrm.CommandBarActions.isUserUsingBaseLanguage())
        return Mscrm.CommandBarActions.primaryControlIsNotFormProxy(primaryControl);
    else return false
};
Mscrm.CommandBarActions.isUserUsingBaseLanguage = function() {
    if (Xrm.Page.context.getOrgLcid() === Xrm.Page.context.getUserLcid()) return true;
    else return false
};
Mscrm.CommandBarActions
    .generateDocumentTemplateFlyout = function(commandProperties, entityLogicalName, ribbonSelectionControl) {
        Mscrm.CommandBarActions.$1g();
        var $v_0 = ribbonSelectionControl, $v_1 = -1, $v_2 = $v_0.get_gridType();
        if ($v_2 !== 1) {
            var $v_3 = $v_0.getRelationship();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3)) $v_1 = $v_3.relationshipType
        }
        Xrm.Internal.generateDocumentTemplateFlyout(commandProperties,
            entityLogicalName,
            $v_0.get_ribbonContextType(),
            $v_1);
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(1, "ExcelTemplates", Xrm.Internal.getEntityCode(entityLogicalName))
    };
Mscrm.CommandBarActions.$1g = function() {
    if (!IsNull(Mscrm.InternalUtilities.Utilities.getCookie("persistentTemplateTourCookie"))) return;
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_forms/Template/dlg_TemplateTourDialog.aspx"),
        $v_1 = new Xrm.DialogOptions;
    $v_1.height = 445;
    $v_1.width = 880;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
};
Mscrm.CommandBarActions
    .generateWordTemplateFlyout = function(commandProperties, entityLogicalName, isForm, ribbonSelectionControl) {
        Mscrm.CommandBarActions.$1g();
        if (isForm) {
            Xrm.Internal.generateWordTemplateFlyout(commandProperties, entityLogicalName, isForm, "Form", -1);
            Mscrm.InternalUtilities.MetricsReportingHelper
                .addTelemetryLog(0, "WordTemplates", Xrm.Internal.getEntityCode(entityLogicalName))
        } else {
            var $v_0 = ribbonSelectionControl, $v_1 = -1, $v_2 = $v_0.get_gridType();
            if ($v_2 !== 1) {
                var $v_3 = $v_0.getRelationship();
                if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3)) $v_1 = $v_3.relationshipType
            }
            Xrm.Internal.generateWordTemplateFlyout(commandProperties,
                entityLogicalName,
                isForm,
                $v_0.get_ribbonContextType(),
                $v_1);
            Mscrm.InternalUtilities.MetricsReportingHelper
                .addTelemetryLog(1, "WordTemplates", Xrm.Internal.getEntityCode(entityLogicalName))
        }
    };
Mscrm.CommandBarActions.generateReportMenuXml = function(commandProperties,
    entityLogicalName,
    isForm,
    ribbonSelectionControl) {
    if (isForm) {
        Xrm.Internal.generateReportMenuXml(commandProperties, entityLogicalName, isForm, "Form", -1);
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(0, "RunReport", Xrm.Internal.getEntityCode(entityLogicalName))
    } else {
        var $v_0 = ribbonSelectionControl, $v_1 = -1, $v_2 = $v_0.get_gridType();
        if ($v_2 !== 1) {
            var $v_3 = $v_0.getRelationship();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3)) $v_1 = $v_3.relationshipType
        }
        Xrm.Internal.generateReportMenuXml(commandProperties,
            entityLogicalName,
            isForm,
            Mscrm.CommandBarActions.$3a($v_0),
            $v_1);
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(1, "RunReport", Xrm.Internal.getEntityCode(entityLogicalName))
    }
};
Mscrm.CommandBarActions.$3a = function($p0) { return $p0.get_ribbonContextType() };
Mscrm.CommandBarActions.viewHierarchy = function(entityTypeCode) {
    var $v_0 = Xrm.Page.data.entity.getId();
    Xrm.Utility.showHierarchyPage(Xrm.Internal.getEntityName(entityTypeCode), $v_0);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, "ViewHierarchy", entityTypeCode)
};
Mscrm.CommandBarActions.viewHierarchyFromGrid = function(selectedRecords, entityTypeCode) {
    var $v_0 = selectedRecords[0].Id;
    Xrm.Utility.showHierarchyPage(Xrm.Internal.getEntityName(entityTypeCode), $v_0);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "ViewHierarchy", entityTypeCode)
};
Mscrm.CommandBarActions.initDates = function() {
    Mscrm.CommandBarActions.$D = Xrm.Page.ui.controls.get("scheduledend");
    Mscrm.CommandBarActions.$5 = Xrm.Page.getAttribute("scheduledend");
    Mscrm.CommandBarActions.$L = Xrm.Page.ui.controls.get("scheduledstart");
    Mscrm.CommandBarActions.$4 = Xrm.Page.getAttribute("scheduledstart");
    Mscrm.CommandBarActions.$T = Xrm.Page.ui.controls.get("scheduleddurationminutes");
    Mscrm.CommandBarActions.$3 = Xrm.Page.getAttribute("scheduleddurationminutes");
    Mscrm.CommandBarActions.$n = Xrm.Page.ui.controls.get("isalldayevent");
    Mscrm.CommandBarActions.$K = Xrm.Page.getAttribute("isalldayevent");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        !!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$0(Mscrm.CommandBarActions.$3)))
        Mscrm.CommandBarActions.$2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$3);
    if (!Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4) ||
        !Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions
            .$5)) Mscrm.CommandBarActions.$44() && Mscrm.CommandBarActions.$1h(null);
    else if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$0(Mscrm.CommandBarActions.$3))) Mscrm.CommandBarActions.$1i(null);
    else Mscrm.CommandBarActions.$2 = 30;
    Mscrm.CommandBarActions.$O() && Mscrm.CommandBarActions.$1E(null);
    Mscrm.CommandBarActions.$2d()
};
Mscrm.CommandBarActions.$44 = function() {
    var $v_0 = Xrm.Page.data.entity.getEntityName();
    switch ($v_0) {
    case "appointment":
    case "recurringappointmentmaster":
    case "serviceappointment":
        return true;
    default:
        return false
    }
};
Mscrm.CommandBarActions.$2d = function() {
    Mscrm.CommandBarActions.$5.addOnChange(Mscrm.CommandBarActions.$1i);
    Mscrm.CommandBarActions.$4.addOnChange(Mscrm.CommandBarActions.$4U);
    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        Mscrm.CommandBarActions.$3.addOnChange(Mscrm.CommandBarActions.$1h);
    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$n) &&
        Mscrm.CommandBarActions.$K.addOnChange(Mscrm.CommandBarActions.$1E)
};
Mscrm.CommandBarActions.$4U = function($p0) {
    Mscrm.CommandBarActions.$1S("_scheduledstart");
    try {
        Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5, Mscrm.CommandBarActions.endDateAcrossTimeZones());
        Mscrm.CommandBarActions.$1G(Mscrm.CommandBarActions.$3, Mscrm.CommandBarActions.$O())
    } catch ($v_0) {
    } finally {
        Mscrm.CommandBarActions.$P(false)
    }
};
Mscrm.CommandBarActions.$1i = function($p0) {
    Mscrm.CommandBarActions.$W = false;
    Mscrm.CommandBarActions.$1S("_scheduledend");
    if (Mscrm.CommandBarActions.$W) {
        Mscrm.CommandBarActions.$W = false;
        return
    }
    try {
        var $v_0 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4), $v_1 = Mscrm.CommandBarActions.$Y();
        if ($v_1 < $v_0 ||
            Mscrm.CommandBarActions.$O() &&
            Mscrm.CommandBarActions.$Y().toString() ===
            Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4).toString()) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_SPECIFY_END_TIME"), null);
            Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5,
                new Date(Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4).getTime() +
                    Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C))
        }
        Mscrm.CommandBarActions.$1G(Mscrm.CommandBarActions.$3, Mscrm.CommandBarActions.$O())
    } catch ($v_2) {
    } finally {
        Mscrm.CommandBarActions.$P(false)
    }
};
Mscrm.CommandBarActions.$1S = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$L) &&
        Mscrm.CommandBarActions.$L.getDisabled() ||
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$D) &&
        Mscrm.CommandBarActions.$D.getDisabled() ||
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$T) &&
        Mscrm.CommandBarActions.$T.getDisabled()) return;
    if (Mscrm.CommandBarActions.$c) return;
    if (!Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4) ||
        !Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5)) {
        if ($p0 === "_scheduledend" && !Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5)
        ) Mscrm.CommandBarActions.$W = true;
        return
    }
    Mscrm.CommandBarActions.$P(true)
};
Mscrm.CommandBarActions.$O = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
        .$K)) return Mscrm.CommandBarActions.$K.getValue();
    else return false
};
Mscrm.CommandBarActions.$4J = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$K)) {
        var $v_0 = $p0 ? "1" : "0";
        Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$K, $v_0)
    }
};
Mscrm.CommandBarActions.$0 = function($p0) { return $p0.getValue() };
Mscrm.CommandBarActions.$1h = function($p0) {
    if (Mscrm.CommandBarActions.$1F(Mscrm.CommandBarActions.$L) ||
        Mscrm.CommandBarActions.$1F(Mscrm.CommandBarActions.$D) ||
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$T) &&
        Mscrm.CommandBarActions.$1F(Mscrm.CommandBarActions.$T)) return;
    if (Mscrm.CommandBarActions.$c) return;
    Mscrm.CommandBarActions.$P(true);
    if (Mscrm.CommandBarActions.$3) {
        var $v_0 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$3);
        if ($v_0 && !Mscrm.InternalUtilities._String.isNullOrWhiteSpace($v_0.toString())
        ) Mscrm.CommandBarActions.$2 = $v_0;
        else {
            if (!Mscrm.CommandBarActions.$2) Mscrm.CommandBarActions.$2 = 30;
            Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$3, Mscrm.CommandBarActions.$2)
        }
    }
    try {
        if (!Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4))
            if (!Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5)) Mscrm.CommandBarActions.$4P();
            else
                Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$4,
                    new Date(Mscrm.CommandBarActions.$Y() - Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C));
        if (Mscrm.CommandBarActions.$2 < Mscrm.CommandBarActions.$r && Mscrm.CommandBarActions.$O()) {
            Mscrm.CommandBarActions.$9 = new Date(Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4).toString());
            var $v_1 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4);
            Mscrm.CommandBarActions.$8 = new Date($v_1.getTime() +
                Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C);
            Mscrm.CommandBarActions.$4J(false);
            if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$K)) {
                Mscrm.CommandBarActions.$1E(null);
                Mscrm.CommandBarActions.$P(true)
            }
        }
        Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5, Mscrm.CommandBarActions.endDateAcrossTimeZones())
    } catch ($v_2) {
    } finally {
        Mscrm.CommandBarActions.$P(false)
    }
};
Mscrm.CommandBarActions.endDateAcrossTimeZones = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$0(Mscrm.CommandBarActions.$3)))
        Mscrm.CommandBarActions.$2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$3);
    var $v_0 = new Date(Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4).toString()),
        $v_1 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4),
        $v_2 = new Date($v_1.getTime() + Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C),
        $v_3 = Math.round(Mscrm.CommandBarActions.$2 / Mscrm.CommandBarActions.$r);
    if (Mscrm.CommandBarActions.$O()) {
        if (Mscrm.CommandBarActions.$v($v_0, $v_2) < $v_3) $v_2 = Mscrm.CommandBarActions.$h($v_2);
        var $v_4 = $v_2.getTime() - $v_0.getTime();
        if ($v_4 < Mscrm.CommandBarActions.$p) $v_2 = new Date($v_2.getTime() + $v_4)
    }
    return $v_2
};
Mscrm.CommandBarActions.$P = function($p0) { Mscrm.CommandBarActions.$c = $p0 };
Mscrm.CommandBarActions.$1F = function($p0) { return $p0.getDisabled() };
Mscrm.CommandBarActions.$6 = function($p0, $p1) { $p0.setValue($p1) };
Mscrm.CommandBarActions.$4P = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$0(Mscrm.CommandBarActions.$3)))
        Mscrm.CommandBarActions.$2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$3);
    var $v_0 = Mscrm.CommandBarActions.$1v().getTime(),
        $v_1 = $v_0 + (Mscrm.CommandBarActions.$q - $v_0 % Mscrm.CommandBarActions.$q);
    Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$4, new Date($v_1));
    var $v_2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4);
    Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5,
        new Date($v_2.getTime() + Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C))
};
Mscrm.CommandBarActions.$1v = function() {
    var $v_0 = new Date;
    $v_0.format("dd/M/yy h:mm tt");
    $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
    return $v_0
};
Mscrm.CommandBarActions.$Y = function() {
    if (!Mscrm.CommandBarActions
        .$1L ||
        Mscrm.CommandBarActions.$2y()) return Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5);
    else {
        var $v_0 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5);
        if (!$v_0.getHours() && !$v_0.getMinutes()) $v_0 = Mscrm.CommandBarActions.$h($v_0);
        return $v_0
    }
};
Mscrm.CommandBarActions.$2y = function() {
    var $v_0 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5),
        $v_1 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4);
    if ($v_0.getTime() > $v_1.getTime()) return true;
    return false
};
Mscrm.CommandBarActions.$h = function($p0) {
    var $v_0 = new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate() + 1);
    if (Mscrm.CommandBarActions.$v($p0, $v_0) < 1) {
        $v_0.setDate($v_0.getDate() + 1);
        $v_0.setHours(1)
    }
    return $v_0
};
Mscrm.CommandBarActions.$2u = function($p0) {
    var $v_0 = new Date($p0.getFullYear(), $p0.getMonth(), $p0.getDate() - 1);
    if (Mscrm.CommandBarActions.$v($v_0, $p0) >= 2) $v_0 = Mscrm.CommandBarActions.$h($v_0);
    return $v_0
};
Mscrm.CommandBarActions.$v = function($p0, $p1) {
    var $v_0 = new Date($p1.toString()), $v_1 = new Date($p0.toString());
    $v_0.setHours(15);
    $v_1.setHours(12);
    var $v_2 = $v_0.getTime() - $v_1.getTime();
    return $v_2 / 8.64e7
};
Mscrm.CommandBarActions.$1E = function($p0) {
    Mscrm.CommandBarActions.$P(true);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$3) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$0(Mscrm.CommandBarActions.$3)))
        Mscrm.CommandBarActions.$2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$3);
    try {
        if (Mscrm.CommandBarActions.$O()) {
            Mscrm.CommandBarActions.$L.setShowTime(false);
            Mscrm.CommandBarActions.$D.setShowTime(false);
            Mscrm.CommandBarActions.$D.setIsAllDay(true);
            Mscrm.CommandBarActions.$9 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4);
            Mscrm.CommandBarActions.$8 = Mscrm.CommandBarActions.$Y();
            if (!Mscrm.CommandBarActions.$9 && !Mscrm.CommandBarActions.$8) {
                Mscrm.CommandBarActions.$9 = Mscrm.CommandBarActions.$1v();
                Mscrm.CommandBarActions.$8 = new Date(Mscrm.CommandBarActions.$9.getTime() +
                    Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C)
            }
            if (!Mscrm.CommandBarActions.$9)
                Mscrm.CommandBarActions.$9 = new Date(Mscrm.CommandBarActions.$8.getTime() -
                    Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C);
            if (!Mscrm.CommandBarActions.$8)
                Mscrm.CommandBarActions.$8 = new Date(Mscrm.CommandBarActions.$9.getTime() +
                    Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C);
            var $v_0 = new Date(Mscrm.CommandBarActions.$9.getTime());
            $v_0.setHours(0, 0, 0, 0);
            var $v_1 = new Date(Mscrm.CommandBarActions.$8.getTime());
            if ($v_1
                .getHours() ||
                $v_1.getMinutes() ||
                $v_1.getTime() === $v_0.getTime()) $v_1 = Mscrm.CommandBarActions.$h($v_1);
            Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$4, $v_0);
            Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5, $v_1)
        } else {
            if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$u) &&
                !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions.$14) &&
                Mscrm.CommandBarActions.$u === Mscrm.CommandBarActions.$14) {
                Mscrm.CommandBarActions.$L.setShowTime(false);
                Mscrm.CommandBarActions.$D.setShowTime(false)
            } else {
                Mscrm.CommandBarActions.$L.setShowTime(true);
                Mscrm.CommandBarActions.$D.setShowTime(true)
            }
            var $v_2 = null, $v_3 = null;
            if (Mscrm.CommandBarActions.$D.getIsAllDay()) {
                Mscrm.CommandBarActions.$D.setIsAllDay(false);
                $v_2 = new Date(Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4).toString());
                $v_2.setHours(Mscrm.CommandBarActions.$9.getHours(), Mscrm.CommandBarActions.$9.getMinutes(), 0, 0);
                Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$4, $v_2);
                $v_3 = new Date(Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$5).toString());
                if (Mscrm.CommandBarActions.$8.getHours() ||
                    Mscrm.CommandBarActions.$8.getMinutes() ||
                    Mscrm.CommandBarActions.$8.getTime() === $v_2.getTime()) $v_3 = Mscrm.CommandBarActions.$2u($v_3);
                $v_3.setHours(Mscrm.CommandBarActions.$8.getHours(), Mscrm.CommandBarActions.$8.getMinutes(), 0, 0);
                Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5, $v_3)
            }
            if ($v_3 < $v_2) {
                var $v_4 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4);
                Mscrm.CommandBarActions.$6(Mscrm.CommandBarActions.$5,
                    new Date($v_4.getTime() + Mscrm.CommandBarActions.$2 * Mscrm.CommandBarActions.$C))
            }
        }
        Mscrm.CommandBarActions.$1G(Mscrm.CommandBarActions.$3, Mscrm.CommandBarActions.$O())
    } catch ($v_5) {
    } finally {
        Mscrm.CommandBarActions.$P(false)
    }
};
Mscrm.CommandBarActions.$1G = function($p0, $p1) {
    var $v_0 = new Date,
        $v_1 = new Date,
        $v_2 = Mscrm.CommandBarActions.$0(Mscrm.CommandBarActions.$4),
        $v_3 = Mscrm.CommandBarActions.$Y();
    $v_0.setHours(0, 0, 0, 0);
    $v_1.setHours(24, 0, 0, 0);
    if ($p1) {
        var $v_4;
        if ($v_0 < $v_1) {
            $v_4 = ($v_1 - $v_0) / Mscrm.CommandBarActions.$C;
            $v_4 = Math.floor($v_4)
        } else {
            var $v_5 = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate(), 0, 0, 0, 0),
                $v_6 = new Date($v_5.toString());
            $v_6.setDate($v_6.getDate() + 1);
            $v_4 = ($v_1 - $v_5 + ($v_6 - $v_0)) / 60 / 1e3;
            $v_4 = Math.floor($v_4)
        }
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) Mscrm.CommandBarActions.$6($p0, 0);
            else Mscrm.CommandBarActions.$2 = 0;
        else {
            var $v_7 = Math.round(($v_3 - $v_2) / Mscrm.CommandBarActions.$p * $v_4 -
                ($v_3.getTimezoneOffset() - $v_2.getTimezoneOffset()));
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) Mscrm.CommandBarActions.$6($p0, $v_7);
            else Mscrm.CommandBarActions.$2 = $v_7
        }
    } else if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) Mscrm.CommandBarActions.$6($p0, 0);
        else Mscrm.CommandBarActions.$2 = 0;
    else {
        var $v_8 = Math.round(($v_3 - $v_2) / 60 / 1e3 - ($v_3.getTimezoneOffset() - $v_2.getTimezoneOffset()));
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) Mscrm.CommandBarActions.$6($p0, $v_8);
        else Mscrm.CommandBarActions.$2 = $v_8
    }
};
Mscrm.CommandBarActions.insertEmailTemplate = function() {
    var $v_0 = {},
        $v_1 = {},
        $v_2 = {},
        $v_3 = {},
        $v_4 = {},
        $v_5 = {},
        $v_6 = {},
        $v_7 = Mscrm.CommandBarActions.closeRecipientTemplateCallback,
        $v_8 = Mscrm.CommandBarActions.closeEmailTemplateCallback,
        $v_9 = Xrm.Page.data.entity.attributes.getByName("emaildescription"),
        $v_A = !$v_9 ? "" : $v_9.getValue(),
        $v_B,
        $v_C,
        $v_D = 0,
        $v_E = [],
        $v_F = new Array(3);
    $v_F[0] = Xrm.Page.data.entity.attributes.getByName("to");
    $v_F[1] = Xrm.Page.data.entity.attributes.getByName("cc");
    $v_F[2] = Xrm.Page.data.entity.attributes.getByName("regardingobjectid");
    $v_0["cursorInfo"] = $v_A;
    for (var $$arr_G = $v_F, $$len_H = $$arr_G.length, $$idx_I = 0; $$idx_I < $$len_H; ++$$idx_I) {
        var $v_G = $$arr_G[$$idx_I];
        $v_B = $v_G.getName();
        $v_C = $v_G.getValue();
        $v_E = [];
        if ($v_B === "to" || $v_B === "cc" || $v_B === "regardingobjectid") {
            if ($v_C)
                for (var $v_H = 0; $v_H < $v_C.length; $v_H++)
                    if (Mscrm.CommandBarActions.isEntityValidForInsertTemplate($v_C[$v_H])) {
                        $v_3 = $v_C[$v_H];
                        Array.add($v_E, $v_C[$v_H]);
                        $v_5 = $v_3;
                        if (!$v_2[$v_3["name"]]) {
                            $v_2[$v_3["name"]] = "KeyPresent";
                            $v_D += 1
                        }
                    }
            $v_C = $v_E;
            $v_1[$v_B] = $v_C
        }
    }
    if ($v_D > 1) {
        $v_0["emailFormData"] = $v_1;
        Xrm.Dialog.openDialog("SelectTemplateRecipient", null, $v_0, $v_7, $v_4)
    } else if ($v_D === 1) {
        $v_6["entityType"] = $v_5["entityType"];
        $v_6["id"] = new Microsoft.Crm.Client.Core.Framework.Guid($v_5["id"]);
        $v_6["entityTypeCode"] = $v_5["type"];
        $v_0["emailFormData"] = $v_6;
        Xrm.Dialog.openDialog("ApplyEmailTemplate", null, $v_0, $v_8, $v_4)
    } else {
        var $v_I = new Xrm.AlertDialogStrings;
        $v_I.text = Xrm.Internal.getResourceString("Web._cs.ApplyEmailTemplate.dlg_InvalidTargetRecipient");
        Xrm.Dialog.openAlertDialog($v_I, null, null)
    }
};
Mscrm.CommandBarActions.isEntityValidForInsertTemplate = function(EntityInfo) {
    var $v_0 = EntityInfo["type"], $v_1 = $v_0 === "-1" || $v_0 === "2020" || $v_0 === "4406" || $v_0 === "9206";
    return !$v_1
};
Mscrm.CommandBarActions.selectTemplateRecipientDialogOnLoad = function() {
    var $v_0 = Xrm.Page.getControl("fieldname_id"), $v_1 = null, $v_2 = null;
    $v_0.clearOptions();
    var $v_3 = {}, $v_4 = 3;
    $v_3 = Xrm.Page.getAttribute("emailFormData").getValue();
    if ($v_3["to"] && $v_3["to"].length > 0) {
        $v_2 = new Xrm.OptionSetItem(0,
            Xrm.Internal.getResourceString("Web._cs.SelectTemplateRecipient.dlg_ToRecipientString"));
        $v_0.addOption($v_2);
        $v_4 = 0
    }
    if ($v_3["cc"] && $v_3["cc"].length > 0) {
        $v_2 = new Xrm.OptionSetItem(1,
            Xrm.Internal.getResourceString("Web._cs.SelectTemplateRecipient.dlg_CCRecipientString"));
        $v_0.addOption($v_2);
        if ($v_4 === 3) $v_4 = 1
    }
    if ($v_3["regardingobjectid"] && $v_3["regardingobjectid"].length > 0) {
        $v_2 = new Xrm.OptionSetItem(2,
            Xrm.Internal.getResourceString("Web._cs.SelectTemplateRecipient.dlg_RegardingString"));
        $v_0.addOption($v_2);
        if ($v_4 === 3) $v_4 = 2
    }
    $v_1 = $v_0.getAttribute();
    $v_1.setValue($v_4);
    $v_0.getAttribute().fireOnChange()
};
Mscrm.CommandBarActions.selectTemplateRecipientDialogSelect = function() {
    var $v_0 = Xrm.Page.getControl("record_id"),
        $v_1 = $v_0.getAttribute(),
        $v_2 = Xrm.Page.getControl("fieldname_id"),
        $v_3 = $v_2.getAttribute(),
        $v_4 = Xrm.Page.getAttribute("entityId"),
        $v_5 = Xrm.Page.getAttribute("entityTypeCode"),
        $v_6 = Xrm.Page.getAttribute("cursorInfo"),
        $v_7 = $v_3.getValue(),
        $v_8 = $v_1.getValue(),
        $v_9 = {};
    $v_9 = Xrm.Page.getAttribute("emailFormData").getValue();
    if ($v_9["to"] && !$v_7) $v_9["emailFormData"] = $v_9["to"][$v_8];
    else if ($v_9["cc"] && $v_7 === 1) $v_9["emailFormData"] = $v_9["cc"][$v_8];
    else if ($v_9["regardingobjectid"] && $v_7 === 2) $v_9["emailFormData"] = $v_9["regardingobjectid"][$v_8];
    $v_9 = $v_9["emailFormData"];
    $v_4.setValue($v_9["id"].toString());
    $v_5.setValue($v_9["entityType"]);
    $v_6.setValue($v_6.getValue());
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("entityTypeInfo", $v_9["type"]);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("lastButtonClicked", "select_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.selectTemplateRecipientDialogFieldChange = function() {
    var $v_0 = {};
    $v_0 = Xrm.Page.getAttribute("emailFormData").getValue();
    var $v_1 = Xrm.Page.getControl("record_id"),
        $v_2 = Xrm.Page.getControl("fieldname_id"),
        $v_3 = Xrm.Page.getControl("select_id"),
        $v_4 = $v_2.getAttribute(),
        $v_5 = null,
        $v_6,
        $v_7 = null;
    $v_1.clearOptions();
    if (!$v_4.getValue() && $v_0["to"] && $v_0["to"].length > 0) {
        $v_6 = $v_0["to"];
        for (var $v_8 = 0; $v_8 < $v_6.length; $v_8++) {
            $v_7 = new Xrm.OptionSetItem($v_8, $v_6[$v_8]["name"]);
            $v_1.addOption($v_7)
        }
    } else if ($v_4.getValue() === 1 && $v_0["cc"] && $v_0["cc"].length > 0) {
        $v_6 = $v_0["cc"];
        for (var $v_9 = 0; $v_9 < $v_6.length; $v_9++) {
            $v_7 = new Xrm.OptionSetItem($v_9, $v_6[$v_9]["name"]);
            $v_1.addOption($v_7)
        }
    } else if ($v_0["regardingobjectid"] && $v_0["regardingobjectid"].length > 0) {
        $v_6 = $v_0["regardingobjectid"];
        for (var $v_A = 0; $v_A < $v_6.length; $v_A++) {
            $v_7 = new Xrm.OptionSetItem($v_A, $v_6[$v_A]["name"]);
            $v_1.addOption($v_7)
        }
    }
    $v_5 = $v_1.getAttribute();
    $v_5.setValue(0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())) $v_3.setDisabled(false);
    else $v_3.setDisabled(true)
};
Mscrm.CommandBarActions.applyEmailTemplateDialogOnLoad = function() {
    var $v_0 = Xrm.Page.getControl("select_id"), $v_1 = Xrm.Page.getControl("emailtemplates_id");
    $v_1.addPreSearch(Mscrm.CommandBarActions.templateControlEventHandler);
    $v_0.setDisabled(true)
};
Mscrm.CommandBarActions.applyEmailTemplateDialogSelect = function() {
    var $v_0 = Xrm.Page.getControl("emailtemplates_id"), $v_1 = $v_0.getAttribute(), $v_2 = {};
    $v_2 = Xrm.Page.getAttribute("emailFormData").getValue();
    var $v_3 = $v_2["entityType"], $v_4 = $v_2["id"], $v_5 = $v_1.getValue()[0], $v_6 = $v_5["id"];
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("cursorInfo",
        Xrm.Page.getAttribute("cursorInfo").getValue());
    var $v_7, $v_8;
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.instantiateTemplate($v_6, $v_3, $v_4).then(function($p1_0) {
            var $v_9 = $p1_0.entityCollection;
            $v_7 = $v_9.get_entities()[0].getValue("subject").toString();
            $v_8 = $v_9.get_entities()[0].getValue("description").toString();
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("emailsubject", $v_7);
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("emaildescription", $v_8);
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("templateId", $v_6.toString());
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("lastButtonClicked", "select_id");
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close()
        },
        function($p1_0) { Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca($p1_0) })
};
Mscrm.CommandBarActions.applyEmailTemplateDialogFieldChange = function() {
    var $v_0 = Xrm.Page.getControl("emailtemplates_id");
    if (!$v_0.getAttribute().getValue()) {
        var $v_1 = new Xrm.LookupObject, $v_2 = [];
        $v_1.id = "00000000-0000-0000-0000-000000000000";
        $v_1.name = "default";
        var $v_3 = [$v_1];
        $v_1.entityType = "template";
        $v_0.getAttribute().setValue($v_3);
        $v_0.getAttribute().setValue($v_2);
        Xrm.Page.getControl("language_id").setFocus();
        Mscrm.CommandBarActions.addCustomTemplateControlFilter()
    }
};
Mscrm.CommandBarActions.applyEmailTemplateDialogTemplateChange = function() {
    var $v_0 = Xrm.Page.getControl("select_id"), $v_1 = Xrm.Page.getControl("emailtemplates_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getAttribute().getValue())) $v_0.setDisabled(false);
    else $v_0.setDisabled(true)
};
Mscrm.CommandBarActions.addCustomTemplateControlFilter = function() {
    var $v_0 = Xrm.Page.getControl("emailtemplates_id");
    $v_0.removePreSearch(Mscrm.CommandBarActions.templateControlEventHandler);
    $v_0.addPreSearch(Mscrm.CommandBarActions.templateControlEventHandler)
};
Mscrm.CommandBarActions.templateControlEventHandler = function(context) {
    var $v_0 = {};
    $v_0 = Xrm.Page.getAttribute("emailFormData").getValue();
    var $v_1 = Xrm.Page.getAttribute("language_id"),
        $v_2 = !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getSelectedOption())
            ? $v_1.getSelectedOption().value.toString()
            : "",
        $v_3 = Xrm.Page.getControl("emailtemplates_id"),
        $v_4 = $v_0["entityTypeCode"],
        $v_5 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) && $v_2 !== "-1"
            ? "<filter type='and'><condition attribute='languagecode' operator='eq' value='" + $v_2 + "'/></filter>"
            : "",
        $v_6 =
            "<filter type='or'><condition attribute='templatetypecode' operator='eq' value='8'/><condition attribute='templatetypecode' operator='eq' value='" + $v_4 + "'/></filter>",
        $v_7 = "<filter type='and'>" + $v_6 + $v_5 + "</filter>";
    $v_3.addCustomFilter($v_7, "template")
};
Mscrm.CommandBarActions.closeRecipientTemplateCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "select_id") {
        var $v_0 = Mscrm.CommandBarActions.closeEmailTemplateCallback, $v_1 = {}, $v_2 = {}, $v_3 = {};
        $v_2["entityType"] = dialogParams["entityTypeCode"];
        $v_2["id"] = new Microsoft.Crm.Client.Core.Framework.Guid(dialogParams["entityId"]);
        $v_2["entityTypeCode"] = dialogParams["entityTypeInfo"];
        $v_3["emailFormData"] = $v_2;
        $v_3["cursorInfo"] = dialogParams["cursorInfo"];
        Xrm.Dialog.openDialog("ApplyEmailTemplate", null, $v_3, $v_0, $v_1)
    }
};
Mscrm.CommandBarActions.closeEmailTemplateCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "select_id") {
        var $v_0 = dialogParams["emailsubject"],
            $v_1 = dialogParams["emaildescription"],
            $v_2 = dialogParams["templateId"];
        Mscrm.CommandBarActions.$4X($v_2, $v_0, $v_1)
    }
};
Mscrm.CommandBarActions.updateEmailDescription = function(retValue, subject, description) {
    Mscrm.CommandBarActions.$1J(false, subject, description)
};
Mscrm.CommandBarActions.updateEmailDescriptionAndSubject = function(retValue, subject, description) {
    Mscrm.CommandBarActions.$1J(true, subject, description)
};
Mscrm.CommandBarActions.cancelAttachmentUpdate = function(retValue) {};
Mscrm.CommandBarActions.updateBodyAndSubject = function(retValue, subject, description) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("subject").getValue(),
        $v_1 = new Xrm.DialogOptions,
        $v_2 = new Xrm.ConfirmDialogStrings;
    if ($v_0 && $v_0 !== "") {
        $v_1.height = 200;
        $v_1.width = 400;
        if (Mscrm.InternalUtilities.DialogConfirmStrings
            .tryGetDialogStringsForEnabledMetadataDialogs("ApplyEmailTemplate", $v_2, "email")) {
            var $v_3 = Mscrm.CommandBarActions.updateEmailDescriptionAndSubject,
                $v_4 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory($v_3, [subject, description]),
                $v_5 = Mscrm.CommandBarActions.updateEmailDescription,
                $v_6 = Mscrm.InternalUtilities.GridUtilities
                    .createCallbackFunctionFactory($v_5, [subject, description]);
            Xrm.Dialog.openConfirmDialog($v_2, $v_1, $v_4, $v_6)
        }
    } else Mscrm.CommandBarActions.$1J(true, subject, description)
};
Mscrm.CommandBarActions.$4R = function($p0, $p1) {
    var $v_0 = new Xrm.DialogOptions, $v_1 = new Xrm.ConfirmDialogStrings;
    $v_0.height = 200;
    $v_0.width = 400;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("UpdateAttachment", $v_1, "email")) {
        var $v_2 = Mscrm.CommandBarActions.updateBodyAndSubject,
            $v_3 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_2, [$p0, $p1]),
            $v_4 = Mscrm.CommandBarActions.cancelAttachmentUpdate,
            $v_5 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_4, []);
        Xrm.Dialog.openConfirmDialog($v_1, $v_0, $v_3, $v_5)
    }
};
Mscrm.CommandBarActions.$41 = function($p0) {
    return !($p0 && $p0 !== "00000000-0000-0000-0000-000000000000" && $p0 !== "{00000000-0000-0000-0000-000000000000}")
};
Mscrm.CommandBarActions.$1J = function($p0, $p1, $p2) {
    if (Xrm.Page.data.entity.attributes.get("description")) {
        var $v_0 = Xrm.Page.getAttribute("description");
        if ($v_0.getValue()) $p2 = $p2 + $v_0.getValue();
        $v_0.setValue($p2)
    }
    if (Xrm.Page.data.entity.attributes.get("description") && $p0) {
        var $v_1 = Xrm.Page.getAttribute("subject");
        $v_1.setValue($p1)
    }
};
Mscrm.CommandBarActions.$4X = function($p0, $p1, $p2) {
    var $v_0 = Xrm.Page.data.entity.getId().toString(),
        $v_1 = Xrm.Page.data.entity.getEntityName(),
        $v_2 = String
            .format("<fetch version='1.0' mapping='logical'>\r\n\t\t\t\t\t\t\t<entity name='activitymimeattachment'>\r\n\t\t\t\t\t\t\t\t<all-attributes />\r\n\t\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t\t<condition attribute='objectid' operator='eq' value='{0}' />\r\n\t\t\t\t\t\t\t\t\t<condition attribute='objecttypecode' operator='eq' value='{1}' />\r\n\t\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t</fetch>", CrmEncodeDecode.CrmXmlEncode($p0), "2010"),
        $v_3 = null;
    Xrm.Internal.messages.retrieveMultiple($v_2).then(function($p1_0) {
            if (!$p1_0) return;
            $v_3 = $p1_0.entityCollection;
            if ($v_3.get_count() > 0)
                if (!Mscrm.CommandBarActions.$41($v_0)) {
                    for (var $v_4 = 0; $v_4 < $v_3.get_count(); $v_4++) {
                        var $v_5 = $v_3.get_entities()[$v_4],
                            $v_6 = {},
                            $v_7 = {},
                            $v_8 = new Array(3),
                            $v_9 = $v_5.getValue("attachmentid"),
                            $v_A = $v_9["Id"],
                            $v_B = "attachmentid";
                        $v_8[0] = $v_B;
                        $v_6[$v_B] = 6;
                        $v_7[$v_B] = new Xrm.Objects.EntityReference("attachment", $v_A);
                        $v_B = "objectid";
                        $v_8[1] = $v_B;
                        $v_6[$v_B] = 6;
                        $v_7[$v_B] = new Xrm.Objects
                            .EntityReference("email", new Microsoft.Crm.Client.Core.Framework.Guid($v_0));
                        $v_B = "objecttypecode";
                        $v_8[2] = $v_B;
                        $v_6[$v_B] = 5;
                        $v_7[$v_B] = 4202;
                        var $v_C = new Xrm.Objects
                                .EntityReference("activitymimeattachment",
                                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                            $v_D = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                .EntityRecord($v_C,
                                    $v_7,
                                    $v_6,
                                    {},
                                    {},
                                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                                    .RelatedEntityCollection(new Array(0)));
                        $v_D.get_changedFieldNames().add("attachmentid");
                        $v_D.get_changedFieldNames().add("objectid");
                        $v_D.get_changedFieldNames().add("objecttypecode");
                        Xrm.Internal.messages.create($v_D).then(function($p2_0) {
                                var $v_E = Xrm.Page.getControl("attachmentsGrid");
                                $v_E.refresh()
                            },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                    }
                    Mscrm.CommandBarActions.updateBodyAndSubject(true, $p1, $p2)
                } else Mscrm.CommandBarActions.$4R($p1, $p2);
            else Mscrm.CommandBarActions.updateBodyAndSubject(true, $p1, $p2)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.onLoadCloseInvoiceDialog = function() {
    var $v_0 = 2, $v_1 = Mscrm.CommandBarActions.$x();
    if ($v_1 === $v_0) Mscrm.CommandBarActions.$3w();
    else Mscrm.CommandBarActions.$3r();
    Mscrm.CommandBarActions
        .filterOptionSetValuesFromControl("invoice", Mscrm.CommandBarActions.$x(), "closeinvoicestatusreason_id")
};
Mscrm.CommandBarActions.onCloseCloseInvoiceDialog = function() {
    var $v_0 = Mscrm.CommandBarActions.$3B(), $v_1 = Mscrm.CommandBarActions.$x(), $v_2 = Mscrm.CommandBarActions.$3C();
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closedstate", $v_1.toString());
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("invoiceid", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closeinvoicestatusreason_id", $v_2.toString());
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.$3w = function() {
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("header_lbl_closeinvoice", "Dialog_PaidInvoice_Title");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("lbl_closeinvoicedescription", "Dialog_PaidInvoice_Description")
};
Mscrm.CommandBarActions.$3r = function() {
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("header_lbl_closeinvoice", "Dialog_CancelInvoice_Title");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("lbl_closeinvoicedescription", "Dialog_CancelInvoice_Description")
};
Mscrm.CommandBarActions.$3C = function() {
    var $v_0 = Xrm.Page.getControl("closeinvoicestatusreason_id"), $v_1 = $v_0.getAttribute();
    return $v_1.getSelectedOption().value
};
Mscrm.CommandBarActions.$x = function() {
    var $v_0 = Xrm.Page.getAttribute("closedstate");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3B = function() {
    var $v_0 = Xrm.Page.getAttribute("invoiceid");
    return $v_0.getValue().toString()
};
Mscrm.CommandBarActions.launchOnDemandWorkflowForm = function(objectType, workflowId) {
    var $v_0 = new Xrm.LookupOptions, $v_1;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(workflowId)) {
        $v_1 = ["workflow"];
        var $v_2 = {};
        $v_0.lookupStyle = "single";
        $v_0.lookupTypes = $v_1;
        $v_2["membertypecode"] = objectType.toString();
        $v_0.additionalParams = $v_2;
        $v_0.showNew = false;
        $v_0.showProperties = true;
        $v_0.populateLookup = false;
        $v_0.dataProviderOverride = "";
        $v_0.defaultViewId = "45102185-B1B4-422B-A3BF-F1BA9C6E130A";
        $v_0.viewIds = ["{45102185-B1B4-422B-A3BF-F1BA9C6E130A}"];
        Xrm.Internal.lookupObjects($v_0,
            function($p1_0) { Mscrm.CommandBarActions.setObjectIdAndRunWorkflow($p1_0, objectType) });
        return
    }
    Mscrm.CommandBarActions.runWorkflow(workflowId, objectType);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, "RunWorkFlow", objectType)
};
Mscrm.CommandBarActions.runWorkflow = function(itemObjectId, objectType) {
    var $v_0 = Xrm.Page.data.entity.getId(),
        $v_1 = 550,
        $v_2 = 230,
        $v_3 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_runworkflow.aspx");
    $v_3.get_query()["iObjType"] = objectType;
    $v_3.get_query()["iTotal"] = "1";
    $v_3.get_query()["wfId"] = itemObjectId;
    $v_3.get_query()["sIds"] = $v_0 + ";";
    var $v_4 = new Xrm.DialogOptions;
    $v_4.width = $v_1;
    $v_4.height = $v_2;
    Xrm.Internal.openDialog($v_3.toString(), $v_4, [$v_0], null, Mscrm.CommandBarActions.closeCallback)
};
Mscrm.CommandBarActions.closeCallback = function(result) {
    Mscrm.InlineDialogUtility.close("InlineDialog");
    return result
};
Mscrm.CommandBarActions.setObjectIdAndRunWorkflow = function(lookupItems, objectType) {
    var $v_0;
    if (Mscrm.InternalUtilities.JSTypes.isNull(lookupItems) || !lookupItems.length) return;
    $v_0 = lookupItems[0].id;
    Mscrm.CommandBarActions.runWorkflow($v_0, objectType);
    return
};
Mscrm.CommandBarActions.LookupAddress = function() {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes
        .get("customerid"))) $v_0 = Xrm.Page.data.entity.attributes.get("customerid").getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_3 = Xrm.Page.ui.controls.get("customerid").getLabel();
        Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_PROVIDE_VALUE_ADDRESS"), $v_3),
            null);
        return
    }
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 350;
    $v_1.width = 500;
    var $v_2 = Mscrm.GlobalImported.CrmUri.create("/sfa/quotes/dlg_lookupaddress.aspx");
    $v_2.get_query()["headerForm"] = 1;
    $v_2.get_query()["parentType"] = Xrm.Internal.getEntityCode($v_0[0].entityType);
    $v_2.get_query()["parentId"] = $v_0[0].id;
    $v_2.get_query()["willCall"] = Xrm.Page.data.entity.attributes.get("willcall").getValue() ? "1" : "0";
    Xrm.Internal.openDialog($v_2.toString(),
        $v_1,
        "LookupAddress",
        null,
        Mscrm.CommandBarActions.PerformActionAfterLookupAddress)
};
Mscrm.CommandBarActions.LookupDetailAddress = function() {
    if (!Xrm.Page.data.entity.attributes.get("willcall").getValue()) {
        var $v_0 = 0, $v_1 = null, $v_2 = Xrm.Page.data.entity.getEntityName();
        switch ($v_2) {
        case "quotedetail":
            $v_0 = 1084;
            $v_1 = Mscrm.CommandBarActions.getIdFromLookupAttribute("quoteid");
            break;
        case "salesorderdetail":
            $v_0 = 1088;
            $v_1 = Mscrm.CommandBarActions.getIdFromLookupAttribute("salesorderid");
            break;
        case "invoicedetail":
            $v_0 = 1090;
            $v_1 = Mscrm.CommandBarActions.getIdFromLookupAttribute("invoiceid");
            break
        }
        var $v_3 = new Xrm.DialogOptions;
        $v_3.height = 330;
        $v_3.width = 500;
        var $v_4 = Mscrm.GlobalImported.CrmUri.create("/sfa/quotes/dlg_lookupaddress.aspx");
        $v_4.get_query()["headerForm"] = 0;
        $v_4.get_query()["headerType"] = $v_0;
        $v_4.get_query()["headerId"] = $v_1;
        Xrm.Internal.openDialog($v_4.toString(),
            $v_3,
            "LookupAddress",
            null,
            Mscrm.CommandBarActions.PerformActionAfterLookupDetailAddress)
    }
};
Mscrm.CommandBarActions.PerformActionAfterLookupAddress = function(addressDialogResult) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(addressDialogResult)) {
        Mscrm.CommandBarActions.setBillTo(addressDialogResult);
        var $v_0 = Xrm.Page.data.entity.getEntityName();
        Mscrm.CommandBarActions.setShipTo(addressDialogResult, false, $v_0)
    }
};
Mscrm.CommandBarActions.PerformActionAfterLookupDetailAddress = function(addressDialogResult) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(addressDialogResult)) {
        var $v_0 = Xrm.Page.data.entity.getEntityName();
        Mscrm.CommandBarActions.setShipTo(addressDialogResult, true, $v_0)
    }
};
Mscrm.CommandBarActions.setBillTo = function(addressDialogResult) {
    var $v_0 = Xrm.Page.ui.controls.get("billto_addressid"),
        $v_1 = Xrm.Page.ui.controls.get("billto_contactname"),
        $v_2 = Xrm.Page.ui.controls.get("billto_line2"),
        $v_3 = Xrm.Page.ui.controls.get("billto_line3");
    if (addressDialogResult.BillTo) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_composite"))) {
            Xrm.Page.data.entity.attributes.get("billto_line1").setValue(addressDialogResult.Address.Line1);
            Xrm.Page.data.entity.attributes.get("billto_line2").setValue(addressDialogResult.Address.Line2);
            Xrm.Page.data.entity.attributes.get("billto_line3").setValue(addressDialogResult.Address.Line3);
            Xrm.Page.data.entity.attributes.get("billto_city").setValue(addressDialogResult.Address.City);
            Xrm.Page.data.entity.attributes.get("billto_stateorprovince")
                .setValue(addressDialogResult.Address.StateOrProvince);
            Xrm.Page.data.entity.attributes.get("billto_postalcode").setValue(addressDialogResult.Address.PostalCode);
            Xrm.Page.data.entity.attributes.get("billto_country").setValue(addressDialogResult.Address.Country);
            Xrm.Internal.setComposeAddress("billto_",
                addressDialogResult.Address.Line1,
                addressDialogResult.Address.Line2,
                addressDialogResult.Address.Line3,
                addressDialogResult.Address.City,
                addressDialogResult.Address.StateOrProvince,
                addressDialogResult.Address.PostalCode,
                addressDialogResult.Address.Country)
        }
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_name")) &&
            Xrm.Page.data.entity.attributes.get("billto_name").setValue(addressDialogResult.Address.Name);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_line1")) &&
            Xrm.Page.data.entity.attributes.get("billto_line1").setValue(addressDialogResult.Address.Line1);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_city")) &&
            Xrm.Page.data.entity.attributes.get("billto_city").setValue(addressDialogResult.Address.City);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_stateorprovince")) &&
            Xrm.Page.data.entity.attributes.get("billto_stateorprovince")
            .setValue(addressDialogResult.Address.StateOrProvince);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_postalcode")) &&
            Xrm.Page.data.entity.attributes.get("billto_postalcode").setValue(addressDialogResult.Address.PostalCode);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_country")) &&
            Xrm.Page.data.entity.attributes.get("billto_country").setValue(addressDialogResult.Address.Country);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_telephone")) &&
            Xrm.Page.data.entity.attributes.get("billto_telephone").setValue(addressDialogResult.Address.Telephone);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("billto_fax")) &&
            Xrm.Page.data.entity.attributes.get("billto_fax").setValue(addressDialogResult.Address.Fax);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Xrm.Page.data.entity.attributes.get("billto_addressid").setValue(addressDialogResult.Address.AddressId);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            Xrm.Page.data.entity.attributes.get("billto_contactname").setValue(addressDialogResult.Address.ContactName);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            Xrm.Page.data.entity.attributes.get("billto_line2").setValue(addressDialogResult.Address.Line2);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
            Xrm.Page.data.entity.attributes.get("billto_line3").setValue(addressDialogResult.Address.Line3)
    }
};
Mscrm.CommandBarActions.setShipTo = function(addressDialogResult, isDetail, iObjectType) {
    var $v_0 = Xrm.Page.ui.controls.get("shipto_addressid"),
        $v_1 = Xrm.Page.ui.controls.get("shipto_contactname"),
        $v_2 = Xrm.Page.ui.controls.get("shipto_line2"),
        $v_3 = Xrm.Page.ui.controls.get("shipto_line3");
    if (addressDialogResult.ShipTo) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_composite"))) {
            Xrm.Page.data.entity.attributes.get("shipto_line1").setValue(addressDialogResult.Address.Line1);
            Xrm.Page.data.entity.attributes.get("shipto_line2").setValue(addressDialogResult.Address.Line2);
            Xrm.Page.data.entity.attributes.get("shipto_line3").setValue(addressDialogResult.Address.Line3);
            Xrm.Page.data.entity.attributes.get("shipto_city").setValue(addressDialogResult.Address.City);
            Xrm.Page.data.entity.attributes.get("shipto_stateorprovince")
                .setValue(addressDialogResult.Address.StateOrProvince);
            Xrm.Page.data.entity.attributes.get("shipto_postalcode").setValue(addressDialogResult.Address.PostalCode);
            Xrm.Page.data.entity.attributes.get("shipto_country").setValue(addressDialogResult.Address.Country);
            Xrm.Internal.setComposeAddress("shipto_",
                addressDialogResult.Address.Line1,
                addressDialogResult.Address.Line2,
                addressDialogResult.Address.Line3,
                addressDialogResult.Address.City,
                addressDialogResult.Address.StateOrProvince,
                addressDialogResult.Address.PostalCode,
                addressDialogResult.Address.Country)
        }
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_name")) &&
            Xrm.Page.data.entity.attributes.get("shipto_name").setValue(addressDialogResult.Address.Name);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_line1")) &&
            Xrm.Page.data.entity.attributes.get("shipto_line1").setValue(addressDialogResult.Address.Line1);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_city")) &&
            Xrm.Page.data.entity.attributes.get("shipto_city").setValue(addressDialogResult.Address.City);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_stateorprovince")) &&
            Xrm.Page.data.entity.attributes.get("shipto_stateorprovince")
            .setValue(addressDialogResult.Address.StateOrProvince);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_postalcode")) &&
            Xrm.Page.data.entity.attributes.get("shipto_postalcode").setValue(addressDialogResult.Address.PostalCode);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_country")) &&
            Xrm.Page.data.entity.attributes.get("shipto_country").setValue(addressDialogResult.Address.Country);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_telephone")) &&
            Xrm.Page.data.entity.attributes.get("shipto_telephone").setValue(addressDialogResult.Address.Telephone);
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shipto_fax")) &&
            Xrm.Page.data.entity.attributes.get("shipto_fax").setValue(addressDialogResult.Address.Fax);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Xrm.Page.data.entity.attributes.get("shipto_addressid").setValue(addressDialogResult.Address.AddressId);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            Xrm.Page.data.entity.attributes.get("shipto_contactname").setValue(addressDialogResult.Address.ContactName);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            Xrm.Page.data.entity.attributes.get("shipto_line2").setValue(addressDialogResult.Address.Line2);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
            Xrm.Page.data.entity.attributes.get("shipto_line3").setValue(addressDialogResult.Address.Line3);
        if (isDetail)
            Xrm.Page.data.entity.attributes.get("shipto_freighttermscode")
                .setValue(addressDialogResult.Address.FreightTerms);
        else {
            iObjectType !== "invoice" &&
                !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("freighttermscode")) &&
                Xrm.Page.data.entity.attributes.get("freighttermscode")
                .setValue(addressDialogResult.Address.FreightTerms);
            !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("shippingmethodcode")) &&
                Xrm.Page.data.entity.attributes.get("shippingmethodcode")
                .setValue(addressDialogResult.Address.ShippingMethod)
        }
    }
};
Mscrm.CommandBarActions.getSelectedMobileOfflineEnabledEntityTypeCode = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("selectedentitytypecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = $v_0.getValue().toString();
        return $v_1
    }
    return ""
};
Mscrm.CommandBarActions.SetDefaultProfileFromGrid = function(mobileProfileOfflineId) {
    Mscrm.CommandBarActions.$2S(mobileProfileOfflineId, true)
};
Mscrm.CommandBarActions.SetDefaultProfileFromForm = function(mobileProfileOfflineId) {
    Mscrm.CommandBarActions.$2S(mobileProfileOfflineId, false)
};
Mscrm.CommandBarActions.IsDefaultProfileFromGrid = function(mobileProfileOfflineId) {
    return Mscrm.CommandBarActions.$25(mobileProfileOfflineId)
};
Mscrm.CommandBarActions.IsDefaultProfileFromForm = function(mobileProfileOfflineId) {
    return Mscrm.CommandBarActions.$25(mobileProfileOfflineId)
};
Mscrm.CommandBarActions.$2S = function($p0, $p1) { return };
Mscrm.CommandBarActions.$25 = function($p0) { return true };
Mscrm.CommandBarActions.cloneMobileOfflineProfileFromForm = function() {
    var $v_0 = null;
    $v_0 = new Xrm.Objects.EntityReference("mobileofflineprofile",
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_0.LogicalName = "mobileofflineprofile";
    Mscrm.CommandBarActions.$2W($v_0, "form")
};
Mscrm.CommandBarActions.cloneMobileOfflineProfileFromGrid = function(gridControl, records) {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(records) &&
        records.length === 1 &&
        !Mscrm.InternalUtilities.JSTypes.isNull(records[0].Id)) {
        $v_0 = new Xrm.Objects.EntityReference("mobileofflineprofile", records[0].Id);
        $v_0.LogicalName = "mobileofflineprofile";
        Mscrm.CommandBarActions.$2W($v_0, "grid")
    }
};
Mscrm.CommandBarActions.$2W = function($p0, $p1) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 180;
    $v_0.width = 550;
    var $v_1 = new Xrm.ConfirmDialogStrings;
    $v_1.text = Xrm.Internal.getResourceString("LOCID_CLONE_MESSAGE");
    $v_1.title = Xrm.Internal.getResourceString("LOCID_CLONE_TITLE");
    Xrm.Dialog.openConfirmDialog($v_1,
        $v_0,
        function() {
            Xrm.Internal.messages.cloneMobileOfflineProfile($p0)
                .then(function($p2_0) { Mscrm.CommandBarActions.$3m($p2_0, $p0, $p1) },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        null)
};
Mscrm.CommandBarActions.$3m = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if ($p2 === "grid")
            Xrm.Internal.refreshParentGrid(Xrm.Internal.getEntityCode("mobileofflineprofile"), null, $p1.Id.toString());
        else if ($p2 === "form" && !Mscrm.InternalUtilities.JSTypes.isNull($p0.cloneMobileOfflineProfile)) {
            var $v_0 = $p0.cloneMobileOfflineProfile.Id.toString();
            Xrm.Utility.openEntityForm("mobileofflineprofile", $v_0, null);
            Xrm.Internal.refreshParentGrid($p1.TypeCode, null, $v_0)
        }
};
Mscrm.CommandBarActions.publish = function(mobileOfflineProfileId) {
    Mscrm.CommandBarActions.publishXml(Mscrm.CommandBarActions.$1z(null, mobileOfflineProfileId),
        Xrm.Internal.getResourceString("LOCID_PUBLISH_MESSAGE_SINGLE"),
        false)
};
Mscrm.CommandBarActions.publishSelected = function(records) {
    Mscrm.CommandBarActions.publishXml(Mscrm.CommandBarActions.$1z(records, null),
        Xrm.Internal.getResourceString("LOCID_PUBLISH_MESSAGE_MULTIPLE"),
        true)
};
Mscrm.CommandBarActions.$1z = function($p0, $p1) {
    var $v_0 = "<publish><mobileofflineprofiles>";
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1))
        $v_0 = $v_0 + String.format("<mobileofflineprofile>{0}</mobileofflineprofile>", $p1);
    else if (!Mscrm.InternalUtilities.JSTypes
        .isNull($p0) &&
        $p0.length > 0)
        for (var $v_1 = 0; $v_1 < $p0.length; $v_1++)
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p0[$v_1]
                .Id)) $v_0 = $v_0 + String.format("<mobileofflineprofile>{0}</mobileofflineprofile>", $p0[$v_1].Id);
    $v_0 = $v_0 + "</mobileofflineprofiles></publish>";
    return $v_0
};
Mscrm.CommandBarActions.OpenFormEditor = function(typeCode, formType, formId, actionType) {
    var $v_0 = "/main.aspx?pagetype=formeditor",
        $v_1 = "{0}Editor",
        $v_2 = 1024,
        $v_3 = 768,
        $v_4 = new Xrm.DialogOptions;
    $v_4.width = $v_2;
    $v_4.height = $v_3;
    $v_4.openInNewWindow = true;
    var $v_5 = Mscrm.GlobalImported.CrmUri.create($v_0);
    $v_5.get_query()["etc"] = typeCode;
    if (Mscrm.InternalUtilities.JSTypes.isNull(actionType)) actionType = -1;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(formId)) {
        formId = formId.replace("{", "");
        formId = formId.replace("}", "");
        $v_5.get_query()["extraqs"] = "formtype=" +
            CrmEncodeDecode.CrmNameValueEncode(formType) +
            "&formId=" +
            CrmEncodeDecode.CrmNameValueEncode(formId) +
            "&action=" +
            CrmEncodeDecode.CrmNameValueEncode(actionType.toString())
    } else
        $v_5.get_query()["extraqs"] = "formtype=" +
            CrmEncodeDecode.CrmNameValueEncode(formType) +
            "&action=" +
            CrmEncodeDecode.CrmNameValueEncode(actionType.toString());
    var $v_6 = String.format($v_1, formType);
    $v_5.get_query()["windowname"] = $v_6;
    Xrm.Internal.openUrl($v_5.toString(), $v_4)
};
Mscrm.CommandBarActions.overrideDynamicPropertyCommandAction = function(dynamicPropertyId, action) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_overrideDynamicProperty.aspx?action=" +
        CrmEncodeDecode.CrmUrlEncode(action));
    Mscrm.CommandBarActions.$I = Xrm.Page.context.getQueryStringParameters();
    var $v_1 = Mscrm.CommandBarActions.$I["_CreateFromId"].toString(), $v_2 = new Xrm.DialogOptions;
    $v_2.width = 470;
    $v_2.height = 280;
    var $v_3 = [dynamicPropertyId, $v_1], $v_4 = null;
    switch (action) {
    case "override":
        $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.overrideDynamicPropertyCommandActionSuccess, $v_3);
        break;
    case "overwrite":
        $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.overwriteDynamicPropertyCommandActionSuccess, $v_3);
        break
    }
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_4)
};
Mscrm.CommandBarActions.overrideDynamicPropertyCommandActionSuccess = function(result, dynamicPropertyId, productId) {
    if (result) {
        var $v_0 = Xrm.Page.data.entity.getEntityName(),
            $v_1 = null,
            $v_2 = {},
            $v_3 = Mscrm.SdkSerializationHelper
                .getEntityObject($v_0, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_2),
            $v_4 = new Xrm.Objects.EntityReference("dynamicproperty",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(dynamicPropertyId));
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$I["_CreateFromType"]))
            $v_1 = new Xrm.Objects.EntityReference(parseInt(Mscrm.CommandBarActions.$I["_CreateFromType"]
                    .toString()) ===
                1024
                ? "product"
                : "productassociation",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(productId));
        $v_3.setValue("basedynamicpropertyid", $v_4);
        $v_3.setValue("regardingobjectid", $v_1);
        $v_3.get_changedFieldNames().add("basedynamicpropertyid");
        Xrm.Internal.messages.create($v_3).then(function($p1_0) {
                Mscrm.CommandBarActions.handleOverrideResponse($p1_0, productId)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.CommandBarActions.handleOverrideResponse = function(response, productId) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(response.id)) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.openInNewWindow = true;
        var $v_1 = {};
        $v_1["_skipNavigateBackCount"] = 1;
        $v_1["_canDelete"] = true;
        $v_1["_canOverride"] = false;
        $v_1["_isReadOnly"] = false;
        $v_1["_CreateFromId"] = CrmEncodeDecode.CrmUrlEncode(productId);
        $v_1["_CreateFromType"] = CrmEncodeDecode
            .CrmUrlEncode(Mscrm.CommandBarActions.$I["_CreateFromType"].toString());
        Xrm.Utility.openEntityForm("dynamicproperty", response.id.toString(), $v_1, $v_0)
    }
};
Mscrm.CommandBarActions.overwriteDynamicPropertyCommandActionSuccess = function(result, dynamicPropertyId, productId) {
    if (result) {
        var $v_0 = Xrm.Page.data.entity.getEntityName(),
            $v_1 = {},
            $v_2 = null,
            $v_3 = Mscrm.SdkSerializationHelper
                .getEntityObject($v_0, Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_1),
            $v_4 = new Xrm.Objects.EntityReference("dynamicproperty",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(dynamicPropertyId));
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.CommandBarActions
            .$I["_CreateFromType"]))
            $v_2 = new Xrm.Objects.EntityReference(parseInt(Mscrm.CommandBarActions.$I["_CreateFromType"]
                    .toString()) ===
                1024
                ? "product"
                : "productassociation",
                Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(productId));
        $v_3.setValue("basedynamicpropertyid", $v_4);
        $v_3.setValue("regardingobjectid", $v_2);
        !$v_3.get_changedFieldNames().contains("basedynamicpropertyid") &&
            $v_3.get_changedFieldNames().add("basedynamicpropertyid");
        Xrm.Internal.messages.create($v_3).then(function($p1_0) {
                Mscrm.CommandBarActions.handleOverwriteResponse($p1_0, productId)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.CommandBarActions.handleOverwriteResponse = function(response, productId) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(response)) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.openInNewWindow = true;
        var $v_1 = {};
        $v_1["_skipNavigateBackCount"] = 1;
        $v_1["_canDelete"] = true;
        $v_1["_canOverride"] = false;
        $v_1["_isReadOnly"] = false;
        $v_1["_CreateFromId"] = CrmEncodeDecode.CrmUrlEncode(productId);
        $v_1["_CreateFromType"] = CrmEncodeDecode
            .CrmUrlEncode(Mscrm.CommandBarActions.$I["_CreateFromType"].toString());
        Xrm.Utility.openEntityForm("dynamicproperty", response.id.toString(), $v_1, $v_0)
    }
};
Mscrm.CommandBarActions.entityQueueItemDetail = function(objectId) {
    var $v_0 =
            "<fetch version='1.0' mapping='logical'><entity name='queueitem'><attribute name='queueitemid' /><filter type='and'><condition attribute='objectid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(objectId) + "' /></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            $v_1 = $p1_0.entityCollection;
            if ($v_1.get_count() === 1)
                Xrm.Utility
                    .openEntityForm("queueitem", $v_1.get_entities()[0].getValue("queueitemid").toString(), null);
            else if ($v_1.get_count() > 1)
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("RECORD_ADDED_TO_MULTIPLE_QUEUES"), null);
            else Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("RECORD_ADDED_TO_NO_QUEUE"), null)
        },
        function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
};
Mscrm.CommandBarActions.promoteToResponse = function(iObjType) {
    if (Xrm.Page.data.getIsValid()) {
        var $v_0 = {};
        $v_0["_CreateFromType"] = iObjType;
        $v_0["_CreateFromId"] = Xrm.Page.data.entity.getId();
        Xrm.Utility.openEntityForm("campaignresponse", "", $v_0)
    }
};
Mscrm.CommandBarActions.canPromoteActivityToResponse = function() { return Mscrm.CommandBarActions.$2h() };
Mscrm.CommandBarActions.$2h = function() {
    if (!Mscrm.CommandBarActions.$42()) return false;
    var $v_0 = false,
        $v_1 = false,
        $v_2 = false,
        $v_3 = Xrm.Page.getAttribute("regardingobjectid"),
        $v_4 = Xrm.Page.getAttribute("directioncode"),
        $v_5 = Xrm.Page.getAttribute("from"),
        $v_6 = Xrm.Page.getAttribute("to"),
        $v_7 = Xrm.Page.getAttribute("requiredattendees");
    $v_0 = Mscrm.CommandBarActions.$3Y($v_3);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4
            .getValue())) $v_2 = $v_4.getValue().toString() === "false" ? true : false;
    var $v_8 = null;
    if ($v_2) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())) $v_8 = $v_5.getValue()
    } else if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) $v_8 = $v_6.getValue();
    var $v_9 = Xrm.Page.data.entity.getEntityName();
    if ($v_9 === "appointment")
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_7) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_7.getValue())) $v_8 = $v_7.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.length === 1) {
        var $v_A = $v_8[0];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A))
            if ($v_A
                .entityType ===
                "account" ||
                $v_A.entityType === "contact" ||
                $v_A.entityType === "lead") $v_1 = true
    }
    if ($v_0 && $v_1) return true;
    return false
};
Mscrm.CommandBarActions.$3Y = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue())) {
            var $v_0 = $p0.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length === 1) {
                var $v_1 = $v_0[0];
                if (!Mscrm.InternalUtilities.JSTypes
                    .isNull($v_1))
                    if ($v_1.entityType === "campaign" ||
                        $v_1.entityType === "campaignactivity" ||
                        $v_1.entityType === "bulkoperation") return true
            }
        }
    return false
};
Mscrm.CommandBarActions.$42 = function() {
    var $v_0 = Xrm.Page.data.entity.getEntityName();
    if ($v_0 === "appointment" ||
        $v_0 === "recurringappointmentmaster" ||
        $v_0 === "phonecall" ||
        $v_0 === "letter" ||
        $v_0 === "fax" ||
        $v_0 === "email") return true;
    return false
};
Mscrm.CommandBarActions.primaryControlIsNotFormProxy = function(primaryControl) {
    var $v_0 = "Mscrm.FormProxyForRibbon";
    try {
        return !(Mscrm.InternalUtilities.JSTypes.isNull(primaryControl)
            ? false
            : Object.getType(primaryControl).getName() === $v_0)
    } catch ($$e_2) {
        return false
    }
};
Mscrm.CommandBarActions.publishAll = function() {
    Xrm.Internal.messages.publishAllXml().then(function($p1_0) {},
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.publishXml = function(parameterXml, messageId, isFromGrid) {
    Xrm.Internal.progress(messageId, 0, 350, 150);
    Xrm.Internal.messages.publishXml(parameterXml).always(function() { Xrm.Internal.progress("", 350, 350, 150) })
        .then(function($p1_0) { !isFromGrid && Xrm.Page.data.refresh(false) },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.onLoadCloseOrderDialog = function() {
    var $v_0 = 3, $v_1 = Mscrm.CommandBarActions.$y();
    if ($v_1 === $v_0) Mscrm.CommandBarActions.$3v();
    else Mscrm.CommandBarActions.$3s();
    Mscrm.CommandBarActions.$3q();
    Mscrm.CommandBarActions
        .filterOptionSetValuesFromControl("salesorder", Mscrm.CommandBarActions.$y(), "closeorderstatusreason_id")
};
Mscrm.CommandBarActions.onCloseCloseOrderDialog = function() {
    var $v_0 = Mscrm.CommandBarActions.$3G(),
        $v_1 = Mscrm.CommandBarActions.$3D(),
        $v_2 = Mscrm.CommandBarActions.$3E(),
        $v_3 = Mscrm.CommandBarActions.$y(),
        $v_4 = Mscrm.CommandBarActions.$3F();
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("salesorderid", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closeorderdate_id", $v_1);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("description_id", $v_2);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closeorderstatusreason_id", $v_4);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closedstate", $v_3.toString());
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CommandBarActions.$3q = function() {
    var $v_0 = Xrm.Page.getControl("closeorderdate_id"), $v_1 = $v_0.getAttribute();
    $v_1.setValue(new Date)
};
Mscrm.CommandBarActions.$3s = function() {
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("header_lbl_closeorder", "Order_Cancel_Dlg_Title");
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("lbl_closeorderdescription", "Order_Cancel_Dlg_Desc");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("ok_id", "Web.SFA.salesorders.aspx_ConfirmButton.dlg_close");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("closeorderdate_id", "Web.SFA.salesorders.aspx_50.dlg_close")
};
Mscrm.CommandBarActions.$3v = function() {
    Mscrm.CommandBarActions.setControlLabelTextFromResourceString("header_lbl_closeorder", "Order_Fulfill_Dlg_Title");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("lbl_closeorderdescription", "Order_Fulfill_Dlg_Desc");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("ok_id", "Web.SFA.salesorders.aspx_FulfillButton.dlg_close");
    Mscrm.CommandBarActions
        .setControlLabelTextFromResourceString("closeorderdate_id", "Web.SFA.salesorders.aspx_51.dlg_close")
};
Mscrm.CommandBarActions.$3F = function() {
    var $v_0 = Xrm.Page.getControl("closeorderstatusreason_id"), $v_1 = $v_0.getAttribute();
    return $v_1.getSelectedOption().value
};
Mscrm.CommandBarActions.$y = function() {
    var $v_0 = Xrm.Page.getAttribute("closedstate");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3G = function() {
    var $v_0 = Xrm.Page.getAttribute("salesorderid");
    return $v_0.getValue().toString()
};
Mscrm.CommandBarActions.$3E = function() {
    var $v_0 = Xrm.Page.getAttribute("description_id");
    return $v_0.getValue()
};
Mscrm.CommandBarActions.$3D = function() {
    var $v_0 = Xrm.Page.getControl("closeorderdate_id");
    return $v_0.getAttribute().getValue()
};
Mscrm.CommandBarActions.showDocumentSuggestions = function(gridControl, source) {
    Xrm.Page.ui.clearFormNotification("DocumemtRecommendationsNotificationId");
    if (!Mscrm.CommandBarActions.isWebClient() && !Mscrm.CommandBarActions.isMobileCompanionApp()) return;
    if (Mscrm.CommandBarActions.$i()) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_Moca_Offline"));
        return
    }
    Mscrm.CommandBarActions.showDocumentSuggestionsDialog(gridControl,
        Xrm.Page.data.entity.getId(),
        Xrm.Page.data.entity.getEntityName(),
        source)
};
Mscrm.CommandBarActions.showDocumentSuggestionsDialog = function(gridControl, entityId, entityName, source) {
    var $v_0 = {};
    $v_0["gridControl"] = gridControl;
    var $v_1 = Mscrm.CommandBarActions.documentSuggestionsDialogCloseCallback, $v_2 = new Xrm.DialogOptions;
    $v_2.height = 550;
    $v_2.width = 600;
    var $v_3 = "RecommendedDocument";
    if (Mscrm.CommandBarActions.isWebClient()) $v_3 = "DocumentSuggestions";
    Xrm.Dialog.openDialog($v_3, $v_2, Mscrm.CommandBarActions.$37(entityId, entityName, source), $v_1, $v_0)
};
Mscrm.CommandBarActions.documentSuggestionsDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh()
    }
};
Mscrm.CommandBarActions.populateDocumentSuggestionsDialogControls = function() {
    if (Mscrm.CommandBarActions.isWebClient()) {
        var $v_0 = Xrm.Page.ui.controls.get("documentrecommendations_id").getGrid();
        if (IsNull($v_0)) return;
        Xrm.Page.ui.controls.get("documentrecommendations_id").addOnLoad(function($p1_0) { $v_0.showLoadingMessage() });
        var $v_1 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
            $v_2 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString(),
            $v_3 = String
                .format("<filter type='and'>\r\n\t\t\t\t\t<condition attribute='regardingobjectid' operator='eq' uitype='{0}' value='{1}'/>\r\n\t\t\t\t\t<condition attribute='regardingobjecttypecode' operator='eq' value='{2}'/>\r\n\t\t\t\t</filter>", $v_2, new Microsoft.Crm.Client.Core.Framework.Guid($v_1), Xrm.Internal.getEntityCode($v_2));
        $v_0.setParameter("dynamicfilter", $v_3);
        Xrm.Page.ui.controls.get("documentrecommendations_id").refresh()
    }
    Mscrm.CommandBarActions.getOrganizationEntityRecord(function($p1_0) {
            if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0.getFormattedValue("externalbaseurl"))) {
                var $v_5 = Xrm.Page.getControl("viewother_id");
                $v_5.setVisible(false)
            }
            var $v_4 = $p1_0.getFormattedValue("isonedriveenabled");
            Mscrm.CommandBarActions.checkAvailabiltyOfRecommendedDocuments($v_4)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    if (Mscrm.CommandBarActions.isWebClient())
        Mscrm.CommandBarActions.$l = "DocumentRecommendation.SuggestionsDialog.CloseButton.Text";
    Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
        Xrm.Internal.getResourceString("DocumentRecommendation.SuggestionsDialog.CopyButton.Text"));
    Mscrm.InternalUtilities.DialogUtility.setLabel("cancel_id",
        Xrm.Internal.getResourceString(Mscrm.CommandBarActions.$l));
    Mscrm.InternalUtilities.DialogUtility.setLabel("viewother_id",
        Xrm.Internal.getResourceString("DocumentRecommendation.SuggestionsDialog.OtherSuggestionsButton.Text"))
};
Mscrm.CommandBarActions.$37 = function($p0, $p1, $p2) {
    if (IsNull($p2)) $p2 = "commandbar";
    var $v_0 = {};
    $v_0["entityId"] = $p0;
    $v_0["entityName"] = $p1;
    $v_0["PanoramaItemDialog"] = true;
    $v_0["SuggestionsSource"] = $p2;
    $v_0["lastButtonClicked"] = "ok_id";
    return $v_0
};
Mscrm.CommandBarActions.isDocumentRecommendationsEnabledForEntity = function(gridControl) {
    var $v_0 = Xrm.Page.data.entity.getEntityName(),
        $v_1 = (Mscrm.CommandBarActions.isWebClient() || Mscrm.CommandBarActions.isMobileCompanionApp()) &&
            Xrm.Internal.isFeatureEnabled("FCB.DocumentRecommendations") &&
            Xrm.Internal.isFeatureEnabled("FCB.AdvancedSimilaritySearch") &&
            Xrm.Utility.isDocumentRecommendationsEnabledForEntity($v_0);
    if ($v_1 && !Mscrm.CommandBarActions.$o) {
        try {
            if (Mscrm.CommandBarActions.isWebClient())
                Xrm.Internal.postAppMessageBar("AssociatedGrid",
                    "DocumemtRecommendationsNotificationId",
                    Xrm.Internal.getResourceString("Document_Recommendations_Notification_Available_Message"),
                    "DocumentRecommendations",
                    "DocumentRecommendations",
                    Xrm.Internal.getResourceString("Document_Recommendations_Notification_See_Link_Text"));
            else Mscrm.CommandBarActions.$4S(gridControl)
        } catch ($v_2) {
        }
        Mscrm.CommandBarActions.$o = true
    }
    return $v_1
};
Mscrm.CommandBarActions.$4S = function($p0) {
    var $v_0 = new Xrm.FormNotificationOptions;
    $v_0.message = Xrm.Internal.getResourceString("Document_Recommendations_Notification_Available_Message");
    $v_0.notificationLevel = "INFO";
    $v_0.uniqueId = "DocumemtRecommendationsNotificationId";
    $v_0.action = function() { Mscrm.CommandBarActions.showDocumentSuggestions($p0, "notification") };
    $v_0.actionText = Xrm.Internal.getResourceString("Document_Recommendations_Notification_See_Link_Text");
    $v_0.hideOnOffline = true;
    Xrm.Internal.setFormActionableNotification($v_0)
};
Mscrm.CommandBarActions.getOrganizationEntityRecord = function(succeedCallback, errorCallback) {
    var $v_0 = Xrm.Page.context.getUserId(), $v_1 = ["organizationid"];
    Xrm.Internal.messages.retrieve("systemuser", $v_0, $v_1).then(function($p1_0) {
            var $v_2 = $p1_0.entity, $v_3 = $v_2.getValue("organizationid").toString();
            $v_1 = ["isonedriveenabled", "externalbaseurl"];
            Xrm.Internal.messages.retrieve("organization", $v_3, $v_1).then(function($p2_0) {
                    var $v_4 = $p2_0.entity;
                    succeedCallback($v_4)
                },
                errorCallback)
        },
        errorCallback)
};
Mscrm.CommandBarActions.populateDocumentLocations = function(isOnedriveEnabled) {
    var $v_0 = Xrm.Internal.isFeatureEnabled("FCB.SharePointS2S") &&
            Xrm.Internal.isFeatureEnabled("FCB.OneDriveIntegration") &&
            isOnedriveEnabled,
        $v_1 = "All Locations View",
        $v_2 = "{0DD4A52F-D77D-4ABC-B095-C73E0198A347}",
        $v_3 = Mscrm.CommandBarActions.$3W($v_0),
        $v_4 =
            "<grid name='resultset' object='9508' jump='name' select='1' icon='1' preview='1'><row name='result' id='sharepointdocumentlocationid'><cell name='name' width='150' /><cell name='regardingobjectid' width='150' /><cell name='absoluteurl' width='240' /><cell name='parentsiteorlocation' width='140' /><cell name='relativeurl' width='160' /></row></grid>",
        $v_5 = Xrm.Page.getControl("documentlocations_id"),
        $v_6 = Xrm.Page.getControl("description_id"),
        $v_7 = Xrm.Page.getControl("ok_id");
    $v_7.setVisible(true);
    Xrm.Internal.messages.retrieveMultiple($v_3).then(function($p1_0) {
            if (!$p1_0) return;
            var $v_8 = $p1_0.entityCollection;
            if ($v_8.get_count() > 0) {
                $v_5.setVisible(true);
                if ($v_8.get_count() === 1) {
                    var $v_9 = new Array(1);
                    $v_9[0] = new Xrm.LookupObject;
                    $v_9[0].id = $v_8.get_entities()[0].getValue("sharepointdocumentlocationid").toString();
                    $v_9[0].name = $v_8.get_entities()[0].getValue("name").toString();
                    $v_9[0].entityType = "sharepointdocumentlocation";
                    $v_5.getAttribute().setValue($v_9)
                }
                $v_5.addCustomView($v_2, "sharepointdocumentlocation", $v_1, $v_3, $v_4, true)
            } else {
                $v_6.setVisible(true);
                $v_7.setDisabled(true)
            }
        },
        function() {})
};
Mscrm.CommandBarActions.checkAvailabiltyOfRecommendedDocuments = function(isOneDriveEnabled) {
    var $v_0 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
        $v_1 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString(),
        $v_2 = String
            .format("<filter type='and'>\r\n\t\t\t\t\t<condition attribute='regardingobjectid' operator='eq' uitype='{0}' value='{1}'/>\r\n\t\t\t\t\t<condition attribute='regardingobjecttypecode' operator='eq' value='{2}'/>\r\n\t\t\t\t</filter>", $v_1, new Microsoft.Crm.Client.Core.Framework.Guid($v_0), Xrm.Internal.getEntityCode($v_1)),
        $v_3 = String
            .format("<fetch version='1.0' output-format='xml-platform' mapping='logical'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<entity name='recommendeddocument'>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<attribute name='recommendeddocumentid'/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t{0}\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</entity>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</fetch>", $v_2);
    Xrm.Internal.messages.retrieveMultiple($v_3).then(function($p1_0) {
            if (!$p1_0) return;
            var $v_4 = $p1_0.entityCollection;
            if ($v_4.get_count() > 0) Mscrm.CommandBarActions.populateDocumentLocations(isOneDriveEnabled);
            else {
                var $v_5 = Xrm.Page.getControl("ok_id");
                $v_5.setVisible(false)
            }
        },
        function() {})
};
Mscrm.CommandBarActions.copySelectedDocuments = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("documentlocations_id"), $v_1 = $v_0.getValue(), $v_2 = null;
    if (!IsNull($v_1)) {
        $v_2 = $v_1[0].id;
        var $v_3 = Mscrm.CommandBarActions.$3c();
        if (!$v_3) {
            Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
                .getResourceString("DocumentRecommendation.SuggestionsDialog.NoSelectedDocument.ErrorMessage"));
            return
        }
        var $v_4 = [],
            $v_5 = new Array($v_3.getLength()),
            $v_6 = new Array($v_3.getLength()),
            $v_7 = [],
            $v_8 = null,
            $v_9 = 0;
        $v_3.forEach(function($p1_0, $p1_1) {
            if (!IsNull($p1_0)) {
                for (var $v_R = $p1_0.getData().getEntity().getId(),
                    $v_S = $p1_0.getData().getEntity().getAttributes().getAll(),
                    $v_T = 0;
                    $v_T < $p1_0.getData().getEntity().getAttributes().getLength();
                    $v_T++) {
                    if ($v_S[$v_T].getKey() === "absoluteurl") $v_5[$p1_1] = $v_S[$v_T].getValue().toString();
                    if ($v_S[$v_T].getKey() === "location") $v_6[$p1_1] = $v_S[$v_T].getValue().toString();
                    if ($v_S[$v_T].getKey() === "fullname") $v_8 = $v_S[$v_T].getValue().toString();
                    if ($v_S[$v_T].getKey() === "filesize") {
                        var $v_U = Number.parseInvariant($v_S[$v_T].getValue().toString()),
                            $v_V = $v_U / Math.pow(1024, 2);
                        if ($v_V > 128) {
                            $v_7[$v_9] = $v_8;
                            $v_9++
                        }
                    }
                }
                if (!IsNull($v_R)) {
                    var $v_W = {};
                    $v_W["recommendeddocumentid"] = $v_R;
                    $v_4.push($v_W)
                }
            }
        });
        if ($v_4.length <= 0) {
            Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
                .getResourceString("DocumentRecommendation.SuggestionsDialog.NoSelectedDocument.ErrorMessage"));
            return
        }
        if ($v_7.length > 0) {
            var $v_H;
            if ($v_7.length === 1 && $v_4.length === 1)
                $v_H = String.format(Xrm.Internal
                    .getResourceString("DocumentRecommendation.SuggestionsDialog.SingleFileSizeExceeded.ErrorMessage"),
                    128);
            else
                $v_H = String.format(Xrm.Internal
                    .getResourceString("DocumentRecommendation.SuggestionsDialog.FileSizeExceeded.ErrorMessage"),
                    $v_7.length,
                    $v_4.length,
                    128,
                    Mscrm.CommandBarActions.$1x($v_7));
            Mscrm.CommandBarActions.openSimpleAlertDialog($v_H);
            return
        }
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        var $v_A = Mscrm.CommandBarActions.isWebClient()
            ? "Web"
            : Xrm.Page.context.client.getClient() +
            " " +
            Xrm.FormFactor.toString(Xrm.Page.context.client.getFormFactor());
        Xrm.Internal.messages.copySharePointDocuments($v_2, $v_5, $v_6, $v_A).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                var $v_I = $p1_0.status, $v_J = JSON.parse($v_I), $v_K = $v_J.OverallStatus;
                if ($v_K.toUpperCase() === Mscrm.OperationStatus.toString(1).toUpperCase())
                    if ($v_J.FileCopyStatusList.length === 1) {
                        var $v_L = $v_J.FileCopyStatusList[0].Exception, $v_M = $v_J.FileCopyStatusList[0].ErrorCode;
                        Mscrm.InternalUtilities.ClientApiUtility.handleError($v_M, "", $v_L)
                    } else {
                        for (var $v_N = 0, $v_O = [], $v_Q = 0; $v_Q < $v_J.FileCopyStatusList.length; $v_Q++)
                            if ($v_J.FileCopyStatusList[$v_Q].Status.toUpperCase() ===
                                Mscrm.OperationStatus.toString(1).toUpperCase()) {
                                $v_O[$v_N] = $v_J.FileCopyStatusList[$v_Q].FileName;
                                $v_N++
                            }
                        var $v_P = String.format(Xrm.Internal
                            .getResourceString("DocumentRecommendation.SuggestionsDialog.PartialCopy.ErrorMessage"),
                            $v_N,
                            $v_J.FileCopyStatusList.length,
                            Mscrm.CommandBarActions.$1x($v_O));
                        Mscrm.CommandBarActions.openSimpleAlertDialog($v_P)
                    }
                Xrm.Page.ui.close()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("DocumentRecommendation.SuggestionsDialog.NoLocationSelected.ErrorMessage"))
};
Mscrm.CommandBarActions.viewOtherSuggestions = function() {
    if (Mscrm.CommandBarActions.isWebClient()) {
        var $v_0 = {};
        $v_0["entityId"] = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString();
        $v_0["entityName"] = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString();
        $v_0["lastButtonClicked"] = "ok_id";
        var $v_1 = Mscrm.CommandBarActions.otherDocumentSuggestionsDialogCloseCallback, $v_2 = new Xrm.DialogOptions;
        $v_2.height = 550;
        $v_2.width = 600;
        Xrm.Dialog.openDialog("OtherDocumentSuggestions", $v_2, $v_0, $v_1, null);
        Xrm.Internal.messages.logExternalResultsClicked("Web").then(function() {}, function() {})
    } else
        Mscrm.CommandBarActions.getExternalUrl(function($p1_0) {
                var $v_3 = new Xrm.DialogOptions;
                $v_3.openInNewWindow = true;
                Xrm.Internal.openUrl($p1_0, $v_3);
                Xrm.Internal.messages.logExternalResultsClicked("Mobile").then(function() {}, function() {})
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.otherDocumentSuggestionsDialogOnLoad = function() {
    Mscrm.CommandBarActions.getExternalUrl(function($p1_0) {
            var $v_0 = Xrm.Page.getControl("iframe_othersuggestions");
            $v_0.setSrc($p1_0)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    Mscrm.InternalUtilities.DialogUtility.setLabel("ok_id",
        Xrm.Internal.getResourceString("DocumentRecommendation.SuggestionsDialog.BackButton.Text"));
    Mscrm.InternalUtilities.DialogUtility.setLabel("cancel_id",
        Xrm.Internal.getResourceString(Mscrm.CommandBarActions.$l))
};
Mscrm.CommandBarActions
    .otherDocumentSuggestionsDialogCloseCallback = function(dialogParams, callbackParams) {
        !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) &&
            dialogParams["lastButtonClicked"] === "cancel_id" &&
            Xrm.Page.ui.close()
    };
Mscrm.CommandBarActions.otherDocumentSuggestionsDialogBackButtonClick = function() { Xrm.Page.ui.close() };
Mscrm.CommandBarActions.getExternalUrl = function(successCallback, errorCallback) {
    Mscrm.CommandBarActions.getOrganizationEntityRecord(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0.getFormattedValue("externalbaseurl"))) {
                var $v_0 = $p1_0.getFormattedValue("externalbaseurl").toString(),
                    $v_1 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
                    $v_2 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString(),
                    $v_3 = new Xrm.Objects.EntityReference($v_2, new Microsoft.Crm.Client.Core.Framework.Guid($v_1));
                Xrm.Internal.messages.retrieveKeyPhrasesForSimilaritySearch($v_3).then(function($p2_0) {
                        var $v_4 = $p2_0;
                        if (!IsNull($v_4.keyPhrases) && $v_4.keyPhrases.length > 0) {
                            for (var $v_5 = $v_4
                                         .keyPhrases[0],
                                $v_6 = 1;
                                $v_6 < $v_4.keyPhrases.length;
                                $v_6++) $v_5 += " " + $v_4.keyPhrases[$v_6];
                            successCallback(String.format($v_0, CrmEncodeDecode.CrmUrlEncode($v_5)))
                        }
                    },
                    errorCallback)
            }
        },
        errorCallback)
};
Mscrm.CommandBarActions.$1x = function($p0) {
    var $v_0 = $p0[0].toString();
    if ($p0.length > 1) {
        var $v_1 = 1;
        do {
            $v_0 = String.format(Xrm.Internal
                .getResourceString("DocumentRecommendation.SuggestionsDialog.FileSizeExceeded.Files.Text"),
                $v_0,
                $p0[$v_1].toString());
            $v_1++
        } while ($v_1 < $p0.length)
    }
    return $v_0
};
Mscrm.CommandBarActions.$3c = function() {
    var $v_0 = Xrm.Page.ui.controls.get("documentrecommendations_id").getGrid();
    if (IsNull($v_0)) return null;
    return $v_0.getSelectedRows()
};
Mscrm.CommandBarActions.$3W = function($p0) {
    var $v_0 = Xrm.Page.context.getUserId(),
        $v_1 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
        $v_2 = "<order attribute='servicetype' descending='true'/>",
        $v_3 = String
            .format("<filter type='and'>\r\n\t\t\t\t\t\t<condition attribute='regardingobjectid' operator='eq' value='{0}'/>\r\n\t\t\t\t\t\t<condition attribute='statecode' operator='eq' value='0'/>\r\n\t\t\t\t\t\t<condition attribute='statuscode' operator='eq' value='1'/>\r\n\t\t\t\t\t\t<condition attribute='sitecollectionid' operator='not-null' value='true' />\r\n\t\t\t\t\t\t<condition attribute='absoluteurl' operator='null' />\r\n\t\t\t\t\t</filter>", $v_1);
    if ($p0) {
        var $v_5 = String
            .format("<filter type='or'>\r\n\t\t\t\t\t\t\t<condition attribute='servicetype' operator='eq' value='{0}'/>\r\n\t\t\t\t\t\t\t<filter type='and'>\r\n\t\t\t\t\t\t\t\t<condition attribute='servicetype' operator='eq' value='{1}'/>\r\n\t\t\t\t\t\t\t\t<condition attribute='userid' operator='eq' value='{2}'/>\r\n\t\t\t\t\t\t\t</filter>\r\n\t\t\t\t\t\t</filter>", 0, 1, $v_0);
        $v_3 = $v_3 + $v_5
    } else
        $v_3 = $v_3 +
            String.format("<filter type='and'><condition attribute='servicetype' operator='eq' value='{0}'/></filter>",
                0);
    var $v_4 = String
        .format("<fetch version='1.0' output-format='xml-platform' mapping='logical'>\r\n\t\t\t\t\t\t\t\t<entity name='sharepointdocumentlocation'>\r\n\t\t\t\t\t\t\t\t\t<attribute name='name'/>\r\n\t\t\t\t\t\t\t\t\t<attribute name='sharepointdocumentlocationid' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='sitecollectionid' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='relativeurl' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='absoluteurl' />\r\n\t\t\t\t\t\t\t\t\t<attribute name='servicetype' />\r\n\t\t\t\t\t\t{0}\r\n\t\t\t\t\t\t{1}\r\n\t\t\t\t\t</entity>\r\n\t\t\t\t</fetch>", $v_2, $v_3);
    return $v_4
};
Mscrm.CommandBarActions.saveAsCompleted = function() {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.data.entity.getEntityName();
    Xrm.Page.context.saveMode = 58;
    Mscrm.CommandBarActions.setState($v_0, $v_1, 1, -1, true)
};
Mscrm.CommandBarActions.saveForm = function(saveMode) {
    if (Mscrm.InternalUtilities._String.isNullOrWhiteSpace(saveMode)) Xrm.Page.data.entity.save();
    else Xrm.Page.data.entity.save(saveMode)
};
Mscrm.CommandBarActions.bookOrReschedule = function(isInvocationSourceFormInfra, isValidated) {
    Mscrm.CommandBarActions.bookOrRescheduleWithCallback(isInvocationSourceFormInfra, isValidated, null, null, null)
};
Mscrm.CommandBarActions
    .bookOrRescheduleWithCallback = function(isInvocationSourceFormInfra,
        isValidated,
        succeedCallback,
        failureCallback,
        createRecordId) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(isValidated) || !isValidated)
            if (!Xrm.Page.data.getIsValid()) {
                !Mscrm.InternalUtilities.JSTypes.isNull(failureCallback) && failureCallback(null);
                return
            }
        if (Mscrm.CommandBarActions.$3l(succeedCallback, failureCallback)) return;
        var $v_0 = Xrm.Page.data.entity.getEntityName(),
            $v_1 = Mscrm.CommandBarActions.createAppointmentRecord(createRecordId);
        if (Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString(Xrm.Page.data.entity
                .getId()))
            Xrm.Internal.messages.book($v_1).then(function($p1_0) {
                    Mscrm.CommandBarActions.$21($p1_0,
                        $v_0,
                        isInvocationSourceFormInfra,
                        succeedCallback,
                        failureCallback)
                },
                function($p1_0) { Mscrm.CommandBarActions.$12($p1_0, failureCallback) });
        else
            Xrm.Internal.messages.reschedule($v_1).then(function($p1_0) {
                    Mscrm.CommandBarActions.$21($p1_0,
                        $v_0,
                        isInvocationSourceFormInfra,
                        succeedCallback,
                        failureCallback)
                },
                function($p1_0) { Mscrm.CommandBarActions.$12($p1_0, failureCallback) })
    };
Mscrm.CommandBarActions.$12 = function($p0, $p1) {
    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p0);
    !Mscrm.InternalUtilities.JSTypes.isNull($p1) && $p1(null)
};
Mscrm.CommandBarActions.createAppointmentRecord = function(createRecordId) {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(createRecordId)) $v_0 = createRecordId;
    var $v_1 = Xrm.Page.data.entity.getEntityName(), $v_2 = {};
    $v_2["isalldayevent"] = 0;
    $v_2["seriesstatus"] = 0;
    $v_2["organizer"] = 10;
    $v_2["isnthmonthly"] = 0;
    $v_2["isnthyearly"] = 0;
    $v_2["isweekdaypattern"] = 0;
    $v_2["isregenerate"] = 0;
    $v_2["stageid"] = 15;
    $v_2["processid"] = 15;
    var $v_3 = Mscrm.SdkSerializationHelper.getEntityObject($v_1,
            Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)
            ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
            : new Microsoft.Crm.Client.Core.Framework.Guid($v_0),
            $v_2),
        $v_4 = 5,
        $v_5 = Xrm.Page.getAttribute("statuscode");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_5) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())) $v_4 = $v_5.getValue();
    $v_3.initializeValue("statuscode", $v_4, 13);
    !$v_3.get_changedFieldNames().contains("statuscode") && $v_3.get_changedFieldNames().addRange(["statuscode"]);
    var $v_6 = Xrm.Page.getAttribute("isalldayevent"), $v_7 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6)) $v_7 = $v_6.getValue();
    $v_3.initializeValue("isalldayevent", $v_7, 0);
    return $v_3
};
Mscrm.CommandBarActions.$3l = function($p0, $p1) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) return false;
    if (Xrm.Page.data.entity.getEntityName() !== "recurringappointmentmaster") return false;
    var $v_0 = window._appointId;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return false;
    Mscrm.CommandBarActions.addRecurrenceSdkCall($v_0, $p0, $p1);
    return true
};
Mscrm.CommandBarActions.addRecurrenceSdkCall = function(appointmentId, successCallback, failureCallback) {
    var $v_0 = Mscrm.CommandBarActions.createAppointmentRecord(null);
    Xrm.Internal.messages.addRecurrence($v_0, Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(appointmentId))
        .then(function($p1_0) {
                var $v_1 = $p1_0.id, $v_2 = Xrm.Page.getAttribute("activityid");
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setValue($v_1.toString());
                Xrm.Internal.refreshParentGrid(4200, "", Xrm.Page.data.entity.getId());
                if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
                    var $v_3 = Xrm.Page.getAttribute("subject");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue()) &&
                        Xrm.Internal.setFormEntityName($v_3.getValue().toString());
                    window._appointId = ""
                }
                Xrm.Page.data.setFormDirty(false);
                Xrm.Page.data.refresh(false);
                !Mscrm.InternalUtilities.JSTypes.isNull(successCallback) && successCallback(null)
            },
            function($p1_0) { Mscrm.CommandBarActions.$12($p1_0, failureCallback) })
};
Mscrm.CommandBarActions.$21 = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Xrm.Internal.getEntityCode($p1);
    if ($p0.validationResult.get_validationSuccess()) {
        var $v_1 = $p0.validationResult.get_activityId().toString(), $v_2 = Xrm.Page.getAttribute("activityid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setValue($v_1);
        var $v_3 = Xrm.Page.getAttribute("ownerid"), $v_4 = $v_3.getIsDirty();
        if ($v_4 && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
            var $v_5 = new Xrm.SaveOptions;
            $v_5.useSchedulingEngine = false;
            Xrm.Page.data.save($v_5).then(function() { !Mscrm.InternalUtilities.JSTypes.isNull($p3) && $p3(null) },
                function() { !Mscrm.InternalUtilities.JSTypes.isNull($p4) && $p4(null) })
        } else Mscrm.CommandBarActions.saveAndRefresh($v_0, $v_1, $p3, $p4)
    } else if (!$p2) {
        if ($v_0 !== -1) {
            Xrm.Page.ui.clearFormNotification("BookOrRescheduleSaveError");
            var $v_6 = new Xrm.DialogOptions;
            $v_6.height = 300;
            $v_6.width = 600;
            var $v_7 = Mscrm.GlobalImported.CrmUri
                    .create("/SM/ActivityScheduling/SchedulingNotificationsDialog.aspx?activityType=" + $v_0),
                $v_8 = [$p3, $p4],
                $v_9 = Mscrm.CommandBarActions
                    .createCallbackFunctionFactory(Mscrm.CommandBarActions.dialogAction, $v_8),
                $v_A = Mscrm.CommandBarActions.$4V($p0.notifications);
            Xrm.Internal.openDialog($v_7.toString(), $v_6, $v_A, null, $v_9)
        }
    } else {
        for (var $$arr_G = $p0.notifications, $$len_H = $$arr_G.length, $$idx_I = 0; $$idx_I < $$len_H; ++$$idx_I) {
            var $v_B = $$arr_G[$$idx_I], $v_C = "ERROR";
            switch ($v_B.get_severity()) {
            case 1:
                $v_C = "ERROR";
                break;
            case 2:
                $v_C = "WARNING";
                break;
            case 3:
                $v_C = "INFORMATION";
                break
            }
            Xrm.Page.ui.clearFormNotification("BookOrRescheduleSaveError");
            Xrm.Page.ui.setFormNotification($v_B.get_message(), $v_C, "BookOrRescheduleSaveError")
        }
        !Mscrm.InternalUtilities.JSTypes.isNull($p4) && $p4(null)
    }
};
Mscrm.CommandBarActions.$4V = function($p0) {
    if (Mscrm.InternalUtilities.JSTypes.isNull($p0)) return null;
    for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        $v_0[$v_1] = new Mscrm.Notification(null,
            $v_2.get_severity(),
            null,
            $v_2.get_message(),
            $v_1,
            $v_2.get_message())
    }
    return $v_0
};
Mscrm.CommandBarActions.saveAndRefresh = function(etc, id, succeedCallback, failureCallback) {
    Xrm.Page.data.setFormDirty(false);
    Xrm.Internal.refreshParentGrid(etc, "", id);
    var $v_0 = Xrm.Page.data.entity.getEntityName();
    if ($v_0 === "recurringappointmentmaster" || $v_0 === "appointment"
    )
        Xrm.Page.data.refreshAppointment(id).then(function() { Mscrm.CommandBarActions.$22(id, succeedCallback) },
            function() { !Mscrm.InternalUtilities.JSTypes.isNull(failureCallback) && failureCallback(null) });
    else
        Xrm.Page.data.refresh(false).then(function() { Mscrm.CommandBarActions.$22(id, succeedCallback) },
            function() { !Mscrm.InternalUtilities.JSTypes.isNull(failureCallback) && failureCallback(null) })
};
Mscrm.CommandBarActions.$22 = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1)) {
        var $v_0 = Xrm.Page.getAttribute("subject"), $v_1 = {}, $v_2 = {};
        $v_2["Id"] = $p0;
        $v_2["Name"] = $v_0.getValue();
        $v_2["TypeDisplayName"] = Xrm.Page.data.entity.getEntityName();
        $v_2["TypeName"] = Xrm.Page.data.entity.getEntityName();
        $v_2["TypeCode"] = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
        $v_1["_entity"] = $v_2;
        $p1($v_1)
    }
};
Mscrm.CommandBarActions.dialogAction = function(result, succeedCallback, failureCallback) {
    switch (result) {
    case "Save":
        Xrm.Page.ui.clearFormNotification("recurrenceDescription");
        var $v_0 = Xrm.Page.getAttribute("statuscode");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getIsDirty() && $v_0.setValue(5);
        var $v_1 = new Xrm.SaveOptions;
        $v_1.useSchedulingEngine = false;
        Xrm.Page.data.save($v_1).then(function() {
                !Mscrm.InternalUtilities.JSTypes.isNull(succeedCallback) && succeedCallback(null)
            },
            function() { !Mscrm.InternalUtilities.JSTypes.isNull(failureCallback) && failureCallback(null) });
        break;
    default:
        break
    }
};
Mscrm.CommandBarActions.displayRecurrenceDialog = function(entityType,
    id,
    isDefault,
    enableEndSeries,
    recurrenceValues,
    callback) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/activities/act_dlgs/recurrencedialog.aspx");
    $v_0.get_query()["objectType"] = entityType;
    $v_0.get_query()["Id"] = id;
    $v_0.get_query()["default"] = isDefault ? 1 : 0;
    $v_0.get_query()["endEn"] = enableEndSeries ? 1 : 0;
    var $v_1 = parseInt(Xrm.Internal.getResourceString("LOCID_RECURDLG_HEIGHT"), 10),
        $v_2 = parseInt(Xrm.Internal.getResourceString("LOCID_RECURDLG_WIDTH"), 10),
        $v_3 = new Xrm.DialogOptions;
    $v_3.height = $v_1;
    $v_3.width = $v_2;
    Xrm.Internal.openDialog($v_0.toString(), $v_3, recurrenceValues, null, callback)
};
Mscrm.CommandBarActions.swapLookups = function(lookupA, lookupB) {
    var $v_0 = "single", $v_1 = lookupA.getValue(), $v_2 = lookupB.getValue(), $v_3 = false, $v_4 = true;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        $v_1.length > 1 &&
        (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length > 1)) $v_0 = "multi";
    if ($v_0 === "single" &&
    (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.length > 1 ||
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length > 1)) {
        var $v_5 = Mscrm.GlobalImported.CrmUri
                .create("/Activities/dlg_confirm_swap.aspx"),
            $v_6 = new Xrm.DialogOptions;
        $v_6.height = 250;
        $v_6.width = 350;
        var $v_7, $v_8;
        $v_7 = [true, Xrm.Page.getAttribute(lookupA.getName()), Xrm.Page.getAttribute(lookupB.getName())];
        $v_8 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.swapLookupValues, $v_7);
        if (Mscrm.InternalUtilities.DialogUtility.isMDDEnabled()) {
            var $v_9 = new Xrm.ConfirmDialogStrings;
            $v_9.title = Xrm.Internal.getResourceString("Activity_ConfirmSwap_Title");
            $v_9.subtitle = Xrm.Internal.getResourceString("Activity_ConfirmSwap_Description");
            $v_9.text = Xrm.Internal.getResourceString("Web.Activities.dlg_confirm_swap.aspx_27") +
                "\n" +
                Xrm.Internal.getResourceString("Web.Activities.dlg_confirm_swap.aspx_30");
            $v_9.confirmButtonLabel = Xrm.Internal.getResourceString("Activity_ConfirmSwap_OkButton");
            Xrm.Dialog.openConfirmDialog($v_9, $v_6, $v_8, Mscrm.CommandBarActions.resetDirectionValues)
        } else Xrm.Internal.openDialog($v_5.toString(), $v_6, $v_7, null, $v_8);
        return
    }
    Mscrm.CommandBarActions.swapLookupValues($v_4, $v_3, lookupA, lookupB)
};
Mscrm.CommandBarActions.swapLookupValues = function(result, isTrimRequired, lookupA, lookupB) {
    if (!Mscrm.InternalUtilities.DialogUtility.isMDDEnabled())
        if (!result || !Mscrm.InternalUtilities.JSTypes.isNull(result) && result.toString() === "false") {
            Mscrm.CommandBarActions.resetDirectionValues();
            return
        }
    var $v_0 = lookupA, $v_1 = lookupB, $v_2 = lookupA.getValue(), $v_3 = lookupB.getValue();
    if (isTrimRequired) {
        $v_2 = Mscrm.CommandBarActions.trimLookup($v_2);
        $v_3 = Mscrm.CommandBarActions.trimLookup($v_3);
        $v_0.setValue($v_2);
        $v_1.setValue($v_3)
    }
    var $v_4 = $v_0.getValue();
    $v_0.setValue($v_1.getValue());
    $v_1.setValue($v_4)
};
Mscrm.CommandBarActions.trimLookup = function(lookupItems) {
    if (lookupItems.length > 1) {
        var $v_0 = [];
        Array.add($v_0, lookupItems[0]);
        return $v_0
    } else return lookupItems
};
Mscrm.CommandBarActions.resetDirectionValues = function() {
    var $v_0 = Xrm.Page.getAttribute("directioncode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = function($p1_0) { Mscrm.directioncode_onchange };
        $v_0.removeOnChange($v_1);
        $v_0.setValue(!$v_0.getValue());
        $v_0.addOnChange($v_1)
    }
};
Mscrm.CommandBarActions.sendFormShortcut = function(usingEmail, form) {
    if (Mscrm.CommandBarActions.isRefreshForm()) {
        var $v_0 = Xrm.Page.data.entity;
        Mscrm.CommandBarActions.$38(usingEmail,
            CrmEncodeDecode.CrmHtmlDecode($v_0.getPrimaryAttributeValue()),
            $v_0.getId(),
            $v_0.getEntityName());
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(0, "SendEmail", Xrm.Internal.getEntityCode($v_0.getEntityName()))
    } else Mscrm.RibbonActions.sendFormShortcutLegacy(usingEmail, form)
};
Mscrm.CommandBarActions.sendSelectedRecordsUrl = function(useEmail, records, entityTypeCode) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) Mscrm.CommandBarActions.$39(records, entityTypeCode);
    else if (Mscrm.CommandBarActions.isRefreshForm())
        Mscrm.GridCommandActions.sendSelectedRecordsUrl(useEmail, records, entityTypeCode, true);
    else Mscrm.Utilities.sendSelectedRecordsUrl(useEmail, records, entityTypeCode);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "EmailLink", entityTypeCode)
};
Mscrm.CommandBarActions.$38 = function($p0, $p1, $p2, $p3) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) {
        var $v_0 = Mscrm.CommandBarActions.$1q(Xrm.Page.context.getClientUrl().toString(),
                Xrm.Internal.getEntityCode($p3),
                $p2),
            $v_1 = Mscrm.CommandBarActions.$1o("", $p1, $v_0, "");
        Xrm.Internal.openUrl($v_1)
    } else if (Mscrm.CommandBarActions.isRefreshForm())
        Mscrm.CommandBarActions.refreshFormSendFormShortcut($p0, $p1, $p2, $p3);
    else Mscrm.FormAction.sendFormShortcut($p0, $p1, $p2, $p3)
};
Mscrm.CommandBarActions
    .refreshFormSendFormShortcut = function(isThroughEmail, entityTitle, recordId, entityLogicalName) {
        if (!isThroughEmail && Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_UNSUPPORTED_RIBBONACTION"), null);
            return
        }
        var $v_0 = Mscrm.CommandBarActions.$2k(window.location.href);
        $v_0 = $v_0.replace("#", "&");
        var $v_1 = Mscrm.GlobalImported.CrmUri.create($v_0);
        if (Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() !== "Online") {
            var $v_3 = window.location.pathname;
            $v_1 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.LegacyUtils
                .concatenateUrl(Xrm.Page.context.getClientUrl(), $v_0.substr($v_0.indexOf($v_3))));
            $v_0 = Xrm.Page.context.getClientUrl();
            $v_0 = $v_0.substring(0, $v_0.indexOf(window.location.pathname))
        }
        $v_1.set_includeContextInPath(true);
        $v_1 = Mscrm.GridCommandActions.getPageUrl($v_1, "entityrecord");
        delete $v_1.get_query().pagemode;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(recordId)) $v_1.get_query()["id"] = recordId;
        if (!("etc" in $v_1.get_query()))
            $v_1.get_query()["etc"] = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
        delete $v_1.get_query().extraqs;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.formSelector
            .getCurrentItem()))
            $v_1.get_query()["extraqs"] = "formid=" + Xrm.Page.ui.formSelector.getCurrentItem().getId();
        var $v_2 = new Sys.StringBuilder;
        $v_2.append(entityTitle);
        $v_2.append("\r\n" + (Mscrm.InternalUtilities.Utilities.isIosDevice() ? "[" : "<"));
        $v_2.append($v_1.toString());
        $v_2.append(Mscrm.InternalUtilities.Utilities.isIosDevice() ? "]" : ">");
        if (!isThroughEmail) Xrm.Internal.copyTextToClipboard($v_2.toString());
        else {
            var $v_4 = "";
            if ("opportunity" === entityLogicalName) {
                var $v_5 = Xrm.Page.getControl("Pursuit_Team");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) {
                    for (var $v_6 = new Sys.StringBuilder, $v_7 = $v_5.getGrid().getRows(), $v_8 = 0;
                        $v_8 < $v_7.getLength();
                        ++$v_8) {
                        var $v_9 = $v_7.getByIndex($v_8);
                        if (!Mscrm.InternalUtilities.JSTypes
                            .isNull($v_9.getData().getEntity().getAttributes()
                                .getByName("systemuser.internalemailaddress").getValue())) {
                            $v_6.append($v_9.getData().getEntity().getAttributes()
                                .getByName("systemuser.internalemailaddress").getValue().toString());
                            $v_6.append(";")
                        }
                    }
                    $v_4 = $v_6.toString()
                }
            }
            Mscrm.GridCommandActions.openEmailForm("", entityTitle, $v_2.toString(), $v_4)
        }
    };
Mscrm.CommandBarActions.$39 = function($p0, $p1) {
    if (Mscrm.InternalUtilities.JSTypes.isNull($p0) || !$p0.length) {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("LOCID_ACTION_NOITEMSELECTED"));
        return
    }
    if ($p0.length > 10) {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("LOCID_MAX_RECORDS_ERROR"));
        return
    }
    for (var $v_0 = Xrm.Page.context.getClientUrl().toString(), $v_1 = "", $v_4 = 0; $v_4 < $p0.length; $v_4++) {
        if ($v_4 > 0) $v_1 += "\r\n\r\n";
        $v_1 += $p0[$v_4].Name;
        $v_1 += "\r\n";
        $v_1 += "<";
        $v_1 += Mscrm.CommandBarActions.$1q($v_0, $p1, $p0[$v_4].Id);
        $v_1 += ">"
    }
    var $v_2 = "";
    if ($p0.length === 1) $v_2 = $p0[0].Name;
    var $v_3 = Mscrm.CommandBarActions.$1o("", $v_2, $v_1.toString(), "");
    Xrm.Internal.openUrl($v_3)
};
Mscrm.CommandBarActions.$1q = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create($p0 +
        "/userdefined/edit.aspx?etc=" +
        CrmEncodeDecode.CrmUrlEncode($p1.toString()) +
        "&id=" +
        CrmEncodeDecode.CrmUrlEncode($p2));
    return $v_0.toString()
};
Mscrm.CommandBarActions.$1o = function($p0, $p1, $p2, $p3) {
    var $v_0 = "mailto:", $v_1 = $p0;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0.length > 0) {
        var $v_2 = $p0.lastIndexOf("@");
        if ($v_2 >= 0 && $v_2 < $p0.length)
            $v_1 = CrmEncodeDecode.CrmUrlEncode($p0.substr(0, $v_2)) +
                "@" +
                CrmEncodeDecode.CrmUrlEncode($p0.substr($v_2 + 1));
        else $v_1 = CrmEncodeDecode.CrmUrlEncode($p0)
    }
    $v_0 = $v_0 + $v_1 + "?";
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($p1) &&
        $p1.length > 0) $v_0 = $v_0 + "subject=" + CrmEncodeDecode.CrmUrlEncode($p1) + "&";
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($p3) &&
        $p3.length > 0) $v_0 = $v_0 + "cc=" + CrmEncodeDecode.CrmUrlEncode($p3) + "&";
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p2)) $v_0 = $v_0 + "body=" + CrmEncodeDecode.CrmUrlEncode($p2);
    return $v_0
};
Mscrm.CommandBarActions.$2k = function($p0) {
    var $v_0 = $p0;
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        var $v_1 = $v_0.indexOf("?"), $v_2 = $v_0.indexOf("#");
        if ($v_1 !== -1 && $v_2 !== -1 && $v_1 < $v_2 && $v_2 + 1 < $v_0.length) {
            var $v_3 = $v_0.substr(0, $v_1 + 1), $v_4 = $v_0.substr($v_2 + 1);
            $v_0 = $v_3 + $v_4
        }
    }
    return $v_0
};
Mscrm.CommandBarActions.activate = function(entityId, entityName) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp() || Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        var $v_0 = 0;
        switch (entityName) {
        case "campaignresponse":
            Mscrm.CommandBarActions.campaignResponseActivate(entityId, entityName, $v_0);
            return;
        case "duplicaterule":
        case "quote":
            $v_0 = 1;
            break;
        case "contract":
            $v_0 = 2;
            break;
        case "convertrule":
        case "routingrule":
            Mscrm.CommandBarActions.changeState("activate", entityId, entityName);
            return;
        case "channelaccessprofilerule":
            Mscrm.CommandBarActions.$1k(9400, "activate", entityId, false);
            return;
        case "sla":
            Mscrm.CommandBarActions.$1k(9750, "activate", entityId, false);
            return;
        case "product":
            Mscrm.CommandBarActions.$1k(1024, "activate", entityId, false);
            return;
        case "position":
            Mscrm.CommandBarActions.$1k(50, "activate", entityId, false, true);
            return
        }
        if (Mscrm.InternalUtilities.Utilities.enforceStateTransitions(entityName))
            if (!Mscrm.InternalUtilities.DialogUtility
                .isMDDEnabled())
                Mscrm.CommandBarActions.$1k(Xrm.Internal.getEntityCode(entityName), "activate", entityId, false);
            else Mscrm.CommandBarActions.changeState("activate", entityId, entityName);
        else {
            Xrm.Page.context.saveMode = 6;
            Mscrm.CommandBarActions.setState(entityId, entityName, $v_0)
        }
    } else {
        var $v_1 = Xrm.Internal.getEntityCode(entityName);
        Mscrm.FormAction.changeState("activate", $v_1, 6)
    }
};
Mscrm.CommandBarActions.campaignResponseActivate = function(entityId, entityName, stateCode) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/MA/CampaignResponse/Dialogs/dlg_reactivateCampaignResponse.aspx"),
        $v_1 = [entityId, entityName, stateCode],
        $v_2 = new Xrm.DialogOptions;
    $v_2.height = 300;
    $v_2.width = 535;
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.CommandBarActions.performActionAfterReactivateCampaignResponse, $v_1);
    Xrm.Internal.openDialog($v_0.toString(), $v_2, null, null, $v_3)
};
Mscrm.CommandBarActions
    .performActionAfterReactivateCampaignResponse = function(returnValue, entityId, entityName, stateCode) {
        returnValue && Mscrm.CommandBarActions.setState(entityId, entityName, stateCode)
    };
Mscrm.CommandBarActions.deactivate = function(entityId, entityName) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp() || Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        var $v_0 = 1;
        switch (entityName) {
        case "duplicaterule":
            $v_0 = 0;
            break;
        case "channelaccessprofilerule":
            Mscrm.CommandBarActions.$1k(9400, "deactivate", entityId, false);
            return;
        case "convertrule":
        case "routingrule":
            Mscrm.CommandBarActions.changeState("deactivate", entityId, entityName);
            return;
        case "sla":
            Mscrm.CommandBarActions.$1k(9750, "deactivate", entityId, false);
            return;
        case "position":
            Mscrm.CommandBarActions.$1k(50, "deactivate", entityId, false, true);
            return
        }
        if (Mscrm.InternalUtilities.Utilities.enforceStateTransitions(entityName)) {
            if (!Mscrm.InternalUtilities.DialogUtility
                .isMDDEnabled())
                Mscrm.CommandBarActions.$1k(Xrm.Internal.getEntityCode(entityName), "deactivate", entityId, false);
            else Mscrm.CommandBarActions.changeState("deactivate", entityId, entityName);
            return
        }
        Xrm.Internal.getStatusOptionsFromStateCode(entityName, $v_0).then(function($p1_0) {
                if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0) || $p1_0.length <= 1) {
                    Xrm.Page.context.saveMode = 5;
                    Mscrm.CommandBarActions.setState(entityId, entityName, $v_0)
                } else Mscrm.CommandBarActions.changeState("deactivate", entityId, entityName)
            },
            function() {
                Xrm.Page.context.saveMode = 5;
                Mscrm.CommandBarActions.setState(entityId, entityName, $v_0)
            })
    } else {
        var $v_1 = Xrm.Internal.getEntityCode(entityName);
        Mscrm.FormAction.changeState("deactivate", $v_1, 5)
    }
};
Mscrm.CommandBarActions.deactivateCampaign = function(entityId) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'><entity name='campaignactivity'><attribute name='activityid' /><filter type='and'><condition attribute='regardingobjectid' operator='eq' value='" + entityId + "' /></filter><filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter><filter type='and'><condition attribute='statuscode' operator='ne' value='5' /></filter><filter type='and'><condition attribute='statuscode' operator='ne' value='6' /></filter></entity></fetch>";
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            if ($p1_0.entityCollection.get_count() > 0) Xrm.Internal.openErrorDialog(-2140980991, "");
            else {
                Xrm.Page.context.saveMode = 5;
                Mscrm.CommandBarActions.changeState("deactivate", entityId, "campaign")
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.setState = function(entityId,
    entityName,
    stateCode,
    statusCode,
    closeWindow,
    entityToOpen,
    entityIdToOpen) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.getId())) return;
    if (!Xrm.Page.data.getIsValid()) return;
    if (typeof statusCode === "undefined") statusCode = -1;
    else if (stateCode === -1) {
        Xrm.Internal.getStateCodeFromStatusOption(entityName, statusCode).then(function($p1_0) {
                stateCode = $p1_0;
                Mscrm.CommandBarActions.$1H(entityId,
                    entityName,
                    stateCode,
                    statusCode,
                    closeWindow,
                    entityToOpen,
                    entityIdToOpen)
            },
            function() {
                Mscrm.CommandBarActions.$1H(entityId,
                    entityName,
                    stateCode,
                    statusCode,
                    closeWindow,
                    entityToOpen,
                    entityIdToOpen)
            });
        return
    }
    Mscrm.CommandBarActions.$1H(entityId, entityName, stateCode, statusCode, closeWindow, entityToOpen, entityIdToOpen)
};
Mscrm.CommandBarActions.$1H = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = function($p1_0) { Mscrm.CommandBarActions.setStateUpdate($p0, $p1, $p2, $p3, $p4, $p5, $p6) },
        $v_1 = function($p1_0) { Mscrm.CommandBarActions.$Q = false };
    if (!Mscrm.CommandBarActions.$Q) {
        Mscrm.CommandBarActions.$Q = true;
        var $v_2 = new Xrm.SaveOptions;
        $v_2.useSchedulingEngine = false;
        Xrm.Page.data.save($v_2).then($v_0, $v_1)
    }
};
Mscrm.CommandBarActions.setStateUpdate = function(entityId,
    entityName,
    stateCode,
    statusCode,
    closeWindow,
    entityToOpen,
    entityIdToOpen) {
    if (!entityId || !entityId.length) entityId = Xrm.Page.data.entity.getId();
    if (Xrm.Utility.isMocaOffline()) {
        var $v_0 = new Xrm.Objects.EntityReference(entityName, new Microsoft.Crm.Client.Core.Framework.Guid(entityId)),
            $v_1 = new Xrm.Gen.SetStateRequest($v_0, stateCode, statusCode, true),
            $v_2 = function() {
                Mscrm.CommandBarActions.$2I(entityId, entityName, closeWindow, entityToOpen, entityIdToOpen)
            };
        Xrm.Utility.executeNonCudCommand("SetState",
            entityName,
            $v_1,
            $v_2,
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    } else
        Xrm.Internal.messages.setState(entityName, entityId, stateCode, statusCode)
            .then(function($p1_0) {
                    Mscrm.CommandBarActions.$2I(entityId, entityName, closeWindow, entityToOpen, entityIdToOpen)
                },
                function($p1_0) {
                    Mscrm.CommandBarActions.$Q = false;
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0)
                })
};
Mscrm.CommandBarActions.$2I = function($p0, $p1, $p2, $p3, $p4) {
    if (typeof $p2 !== "undefined" && $p2) {
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p3) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p4)) {
            !Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Page.ui.close();
            Xrm.Utility.openEntityForm($p3, $p4, null)
        } else if (Xrm.Internal.isEnabledForInteractionCentric() &&
            Microsoft.Crm.Client.Core.ViewModels.ApplicationShellViewModel.get_instance().get_PrimaryConductor()
            .get_ActiveNavigationStack().get_Count() ===
            1) Xrm.Page.data.refresh(true);
        else {
            Mscrm.CommandBarActions.$a($p0, $p1);
            Xrm.Page.ui.close()
        }
        Mscrm.CommandBarActions.$Q = false;
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p3) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p4)) Xrm.Utility.openEntityForm($p3, $p4, null);
    else {
        Xrm.Page.data.refresh(true);
        Mscrm.CommandBarActions.$a($p0, $p1);
        Mscrm.CommandBarActions.performPageRefresh(true)
    }
    Mscrm.CommandBarActions.$Q = false
};
Mscrm.CommandBarActions.$1k = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = function($p1_0) {
        var $v_1 = 550,
            $v_2 = 200,
            $v_3 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri($p1, $p0, 1),
            $v_4 = new Array(1);
        $v_4[0] = $p2;
        if (Mscrm.InternalUtilities.Utilities.enforceStateTransitions(Xrm.Internal.getEntityName($p0))) {
            $v_3.get_query()["iId"] = $p2;
            $v_1 = 500;
            $v_2 = 250
        }
        var $v_5 = new Xrm.DialogOptions;
        $v_5.height = $v_2;
        $v_5.width = $v_1;
        var $v_6 = [$p0, $p2, $p3];
        $v_6[$v_6.length] = !Mscrm.InternalUtilities.JSTypes.isNull($p4) && $p4;
        var $v_7 = Mscrm.CommandBarActions.createCallbackFunctionFactory(Mscrm.CommandBarActions.refreshFormPage, $v_6);
        Xrm.Internal.openDialog($v_3.toString(), $v_5, $v_4, null, $v_7)
    };
    Xrm.Page.data.save().then($v_0, Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.CommandBarActions.refreshFormPage = function(dialogReturnValue,
    entityTypeCode,
    entityId,
    closeWindow,
    preventBrowserBack) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogReturnValue) &&
        dialogReturnValue &&
        !Mscrm.InternalUtilities.JSTypes.isNull(entityId) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(entityTypeCode)) {
        Mscrm.CommandBarActions.$a(entityId, Xrm.Page.data.entity.getEntityName());
        !Mscrm.InternalUtilities.JSTypes.isNull(closeWindow) && closeWindow && Xrm.Page.ui.close();
        !Mscrm.InternalUtilities.JSTypes.isNull(preventBrowserBack) &&
            preventBrowserBack &&
            Xrm.Internal.preventBrowseBack();
        Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), entityId, null)
    }
};
Mscrm.CommandBarActions.$a = function($p0, $p1) {
    if ($p1) {
        var $v_0 = Xrm.Internal.getEntityCode($p1);
        Xrm.Internal.refreshParentGrid($v_0, "", $p0)
    }
};
Mscrm.CommandBarActions.runScript = function(objectTypeCode, entityName) {
    var $v_0 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity)) $v_0 = Xrm.Page.data.entity.getId();
    var $v_1 = new Mscrm.InternalUtilities.EntityReference;
    $v_1.Id = $v_0;
    $v_1.TypeName = entityName;
    $v_1.TypeCode = objectTypeCode;
    var $v_2 = [$v_1];
    Mscrm.GridCommandActions.runScript($v_2, objectTypeCode);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(0, "StartDialog", objectTypeCode)
};
Mscrm.CommandBarActions.checkForSuggestions = function() {
    var $v_0 = Xrm.Page.ui.getFormType();
    $v_0 !== 1 && $v_0 !== 5 && Mscrm.CommandBarActions.$3f(Mscrm.CommandBarActions.$4T)
};
Mscrm.CommandBarActions.showSuggestionsDialog = function(source) {
    Xrm.Page.ui.clearFormNotification("SuggestionsNotificationId");
    if (!Mscrm.CommandBarActions
        .isMobileCompanionApp() ||
        !Mscrm.CommandBarActions.$26("FCB.ProductRecommendations")) return;
    if (Mscrm.CommandBarActions.$i()) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_Moca_Offline"));
        return
    }
    if (!Mscrm.CommandBarActions.$28(Xrm.Page.data.entity.getEntityName())) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_Record_Inactive"));
        return
    }
    var $v_0 = false, $v_1 = null, $v_2 = Xrm.Page.data.entity.getEntityName();
    Xrm.Internal.messages.retrieveRecommendationLineItemMetadata($v_2).then(function($p1_0) {
            $v_1 = $p1_0.recommendationLineItemMetadata;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
                var $v_3 = JSON.parse($v_1);
                $v_0 = Mscrm.CommandBarActions.$3y($v_3.entityName)
            }
            if (!$v_0 && IsNull(Mscrm.CommandBarActions.$11())) {
                Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
                    .getResourceString("Suggestions_Dlg_Error_No_Price_List"));
                return
            }
            if ($v_0)
                Xrm.Dialog.openDialog("CustomLineItemSuggestions",
                    new Xrm.DialogOptions,
                    Mscrm.CommandBarActions.$1p(source, true, $v_1),
                    Mscrm.InternalUtilities.DialogUtility.closeDialogCallback,
                    null);
            else
                Xrm.Dialog.openDialog("Suggestions",
                    new Xrm.DialogOptions,
                    Mscrm.CommandBarActions.$1p(source, false, null),
                    Mscrm.InternalUtilities.DialogUtility.closeDialogCallback,
                    null)
        },
        function($p1_0) {})
};
Mscrm.CommandBarActions.$3y = function($p0) {
    switch ($p0.toLowerCase()) {
    case "invoicedetail":
    case "opportunityproduct":
    case "quotedetail":
    case "salesorderdetail":
        return false;
    default:
        return true
    }
};
Mscrm.CommandBarActions.populateSuggestionsDialogControls = function() {
    Xrm.Page.ui.controls.getByName("addselected_id")
        .setLabel(Xrm.Internal.getResourceString("Suggestions_Dlg_Add_Selected_Text"));
    Xrm.Page.ui.controls.getByName("cancel_id").setLabel(Xrm.Internal.getResourceString("Button_Label_Cancel"))
};
Mscrm.CommandBarActions.addSelectedSuggestions = function() {
    var $v_0 = null, $v_1 = Xrm.Page.getAttribute("isCustomLineItemEntity"), $v_2 = false;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) {
        $v_2 = $v_1.getValue();
        var $v_5 = Xrm.Page.getAttribute("lineItemMetaData").getValue().toString();
        $v_0 = JSON.parse($v_5)
    }
    if (Mscrm.CommandBarActions.$i()) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_Moca_Offline"));
        return
    }
    var $v_3 = Mscrm.CommandBarActions.$3g();
    if (!$v_3) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_No_Selection"));
        return
    }
    var $v_4 = [];
    $v_3.forEach(function($p1_0, $p1_1) {
        var $v_A;
        if (!IsNull($p1_0)) {
            if ($v_2) {
                var $v_B = $p1_0.data.entity.attributes.getByName("recommendeditemid").getValue();
                $v_A = $v_B.Id.toString()
            } else $v_A = $p1_0.getData().getEntity().getId();
            if (!IsNull($v_A)) {
                var $v_C = {};
                $v_C["productid"] = $v_A;
                $v_4.push($v_C)
            }
        }
    });
    if ($v_4.length <= 0) {
        Mscrm.CommandBarActions.openSimpleAlertDialog(Xrm.Internal
            .getResourceString("Suggestions_Dlg_Error_No_Selection"));
        return
    }
    Mscrm.CommandBarActions.$2t($v_4,
        $v_0,
        $v_2,
        function() {
            Mscrm.InternalUtilities.DialogUtility.closeDialogAsOk();
            Mscrm.CommandBarActions.$4A($v_2, $v_0)
        },
        function($p1_0) {
            var $v_9 = !$p1_0 ? "" : $p1_0.get_localizedMessage();
            Mscrm.InternalUtilities._Script.alert(Mscrm.InternalUtilities._String
                .format(Xrm.Internal.getResourceString("Suggestions_Dlg_Error_Add_Suggestions"), $v_9))
        })
};
Mscrm.CommandBarActions.$3g = function() {
    var $v_0 = Xrm.Page.ui.controls.get("suggestions_id").getGrid();
    if (IsNull($v_0)) return null;
    return $v_0.getSelectedRows()
};
Mscrm.CommandBarActions.$4A = function($p0, $p1) {
    var $v_0 = Xrm.Page.data.entity.getEntityName(), $v_1 = Mscrm.CommandBarActions.$1y($v_0, $p0, $p1);
    Xrm.Page.data.refresh(true).then(function() {
            Xrm.Page.ui.controls.getFirst(function($p2_0, $p2_1) {
                if ($p2_0.getControlType() === "subgrid" && $p2_0.getEntityName() === $v_1) {
                    $p2_0.setFocus();
                    return true
                }
                return false
            })
        },
        function() {})
};
Mscrm.CommandBarActions.$3f = function($p0) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp() ||
        Mscrm.CommandBarActions.$i() ||
        !Mscrm.CommandBarActions.$26("FCB.ProductRecommendations")) return;
    var $v_0 = Mscrm.CommandBarActions.$z();
    if ($v_0) {
        var $v_1 = $v_0.LogicalName,
            $v_2 = new Xrm.Objects.EntityReference("systemuser",
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()));
        Mscrm.CommandBarActions.$32($v_0,
            $v_2,
            16,
            function() {
                if (!Mscrm.CommandBarActions.$28($v_1)) return;
                var $v_3 = Mscrm.CommandBarActions.$11(), $v_4;
                if (IsNull($v_3)) $v_4 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
                else $v_4 = new Microsoft.Crm.Client.Core.Framework.Guid($v_3);
                Xrm.Internal.messages.retrieveRecommendationsCount($v_0, $v_4).then(function($p2_0) {
                        var $v_5 = $p2_0.recommendationsCount;
                        $v_5 > 0 &&
                            Xrm.Internal.getMaxSuggestionsCount().then(function($p3_0) {
                                    $v_5 = $v_5 <= $p3_0 ? $v_5 : $p3_0;
                                    $p0($v_5)
                                },
                                function($p3_0) { $p0($v_5) })
                    },
                    function($p2_0) {})
            })
    }
};
Mscrm.CommandBarActions.$4T = function($p0) {
    var $v_0 = new Xrm.FormNotificationOptions;
    $v_0.message = Mscrm.InternalUtilities._String.format(Xrm.Internal
        .getResourceString("Suggestions_Notification_Available_Message"),
        $p0);
    $v_0.notificationLevel = "INFO";
    $v_0.uniqueId = "SuggestionsNotificationId";
    $v_0.action = function() { Mscrm.CommandBarActions.showSuggestionsDialog("notification") };
    $v_0.actionText = Xrm.Internal.getResourceString("Suggestions_Notification_See_Link_Text");
    $v_0.hideOnOffline = true;
    $v_0.onClickTelemetryName = "suggestions_notificationclick";
    Xrm.Internal.setFormActionableNotification($v_0)
};
Mscrm.CommandBarActions.$1p = function($p0, $p1, $p2) {
    if (IsNull($p0)) $p0 = "commandbar";
    var $v_0 = Mscrm.CommandBarActions.$z(), $v_1 = [$v_0], $v_2 = {};
    $v_2["entityId"] = $v_0.Id.toString();
    $v_2["entityName"] = $v_0.LogicalName;
    $v_2["entityTypeCode"] = Xrm.Internal.getEntityCode($v_0.LogicalName);
    $v_2["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_1);
    if (!$p1) $v_2["pricelevelid"] = Mscrm.CommandBarActions.$11();
    else {
        $v_2["isCustomLineItemEntity"] = true;
        $v_2["lineItemMetaData"] = $p2
    }
    $v_2["PanoramaItemDialog"] = true;
    $v_2["SuggestionsSource"] = $p0;
    return $v_2
};
Mscrm.CommandBarActions.$1y = function($p0, $p1, $p2) {
    if ($p1) return $p2.entityName;
    switch ($p0) {
    case "opportunity":
        return "opportunityproduct";
    case "quote":
        return "quotedetail";
    case "salesorder":
        return "salesorderdetail";
    case "invoice":
        return "invoicedetail";
    default:
        return ""
    }
};
Mscrm.CommandBarActions.mapAttributesToRegardingForm = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters(), $v_1 = null;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0) &&
        !Mscrm.InternalUtilities._Script
        .isNullOrUndefined($v_0["_isSyncErrorRetryRequest"])) $v_1 = $v_0["_isSyncErrorRetryRequest"].toString();
    else return;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = ["requestdata", "statecode"];
        Xrm.Internal.messages.retrieve("syncerror", $v_1, $v_2).then(function($p1_0) {
                var $v_3 = $p1_0.entity;
                if ($v_3.hasValue("statecode") && parseInt($v_3.getValue("statecode").get_ValueString()) !== 0) return;
                if ($v_3.hasValue("requestdata")) {
                    window._isSyncErrorStatusUpdated = false;
                    var $v_4 = $v_3.getValue("requestdata").toString(),
                        $v_5 = Mscrm.CommandBarActions.convertFromJsonToDictionary($v_4);
                    Mscrm.CommandBarActions.setEntityAttributeValueFromDictionary($v_5)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.CommandBarActions.setEntityAttributeValueFromDictionary = function(attributes) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(attributes)) {
        var $v_0 = 0;
        if (Xrm.Page.ui.getFormType() !== 4) {
            (Mscrm.CommandBarActions.isMobileCompanionApp() || Xrm.Internal.isTurboForm()) &&
                Xrm.Internal.enableFieldChangeIndicator();
            (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId()) ||
                    Xrm.Page.data.entity.getId() ===
                    Microsoft.Crm.Client.Core.Framework.Guid
                    .formatToUpper(Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString())) &&
                Xrm.Page.data.entity.setRecordId(attributes["syncerror__regardingentityid"].toString());
            Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1) {
                var $v_2 = $p1_0.getName(), $v_3 = Xrm.Page.getAttribute($v_2);
                if ($v_2 in attributes && !Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                    var $v_4 = $p1_0.getAttributeType();
                    if (Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                        $v_3.controls.get(0);
                        $v_4 = $p1_0.getAttributeType()
                    }
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getControl($v_2)) &&
                        Xrm.Page.getControl($v_2).getDisabled() ||
                        Xrm.Page.ui.getFormType() === 1 && !$v_3.getUserPrivilege().canCreate ||
                        Xrm.Page.ui.getFormType() === 2 && !$v_3.getUserPrivilege().canUpdate) $v_0++;
                    else {
                        var $v_5 = null;
                        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributes[$v_2].toString()))
                            switch ($v_4) {
                            case "integer":
                            case "optionset":
                                $v_5 = parseInt(attributes[$v_2].toString(), 10);
                                break;
                            case "boolean":
                                $v_5 = Mscrm.CommandBarActions.$j(attributes[$v_2].toString());
                                break;
                            case "money":
                            case "decimal":
                            case "double":
                                $v_5 = parseFloat(attributes[$v_2].toString());
                                break;
                            case "datetime":
                                $v_5 = new Date(attributes[$v_2].toString());
                                break;
                            case "lookup":
                                var $v_6 = attributes[$v_2];
                                if ($v_6.length > 0) $v_5 = Mscrm.CommandBarActions.$4N($v_6);
                                break;
                            case "string":
                            case "memo":
                            case "uniqueidentifier":
                                $v_5 = attributes[$v_2].toString();
                                break;
                            default:
                                throw Error.create(String.format("attributeType '{0}' is not supported", $v_4))
                            }
                        try {
                            Mscrm.CommandBarActions.$2e($v_3, $v_5, $v_4)
                        } catch ($v_7) {
                            $v_0++
                        }
                    }
                    delete attributes[$v_2]
                }
            })
        }
        var $v_1 = 0, $$dict_C = attributes;
        for (var $$key_D in $$dict_C) {
            var $v_8 = { key: $$key_D, value: $$dict_C[$$key_D] };
            $v_1++
        }
        if ($v_1 > 2) $v_0++;
        Mscrm.CommandBarActions.$4O($v_0)
    }
};
Mscrm.CommandBarActions.$4O = function($p0) {
    var $v_0 = "RegardingEntityForm_Mapping_Notification_" + $p0, $v_1 = "", $v_2 = "";
    if ($p0 > 0) {
        $v_1 = Xrm.Internal.getResourceString("LOCID_RESOLVE_WARNING_TEXT");
        $v_2 = "WARNING"
    } else {
        $v_1 = Xrm.Internal.getResourceString("LOCID_RESOLVE_INFO_TEXT");
        $v_2 = "INFO"
    }
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) {
        var $v_3 = new Xrm.AlertDialogStrings;
        $v_3.text = $v_1;
        Xrm.Dialog.openAlertDialog($v_3, null, null)
    } else Xrm.Page.ui.setFormNotification($v_1, $v_2, $v_0)
};
Mscrm.CommandBarActions.$2e = function($p0, $p1, $p2) {
    if ($p2 === "datetime" && !IsNull($p1)) $p0.setUtcValue($p1);
    else $p0.setValue($p1);
    $p0.fireOnChange()
};
Mscrm.CommandBarActions.$4N = function($p0) {
    for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        $v_0[$v_1] = new Xrm.LookupObject;
        $v_0[$v_1].id = Microsoft.Crm.Client.Core.Framework.Guid.createFromObjectData($v_2["id"]).toString();
        $v_0[$v_1].name = $v_2["name"].toString();
        $v_0[$v_1].entityType = $v_2["logicalname"].toString()
    }
    return $v_0
};
Mscrm.CommandBarActions.convertFromJsonToDictionary = function(jsonString) {
    var $v_0 = {};
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(jsonString)) $v_0 = JSON.parse(jsonString);
    return $v_0
};
Mscrm.CommandBarActions.sharePointDocumentEdit = function(gridControl, records) {
    setPerfMarkerTimestamp("EditSharepointDocumentStart");
    var $v_0 = "", $v_1 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && records.length === 1) {
        var $v_2 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
            $v_3 = Mscrm.CommandBarActions.$20(gridControl, $v_2);
        $v_0 = Mscrm.CommandBarActions.$3A($v_2, gridControl);
        $v_1 = Mscrm.CommandBarActions.$3S($v_2, gridControl);
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) ||
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) Mscrm.CommandBarActions.$1I($v_1, $v_0);
        else {
            var $v_4 = ["absoluteurl", "editurl"], $v_5 = null;
            Mscrm.CommandBarActions.$29();
            Xrm.Internal.messages.retrieve("sharepointdocument", $v_3, $v_4).then(function($p1_0) {
                    $v_5 = $p1_0.entity;
                    $v_0 = $v_5.getValue("absoluteurl").toString();
                    $v_1 = $v_5.getValue("editurl").toString();
                    Mscrm.CommandBarActions.$1I($v_1, $v_0)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
};
Mscrm.CommandBarActions.openSharePointLocation = function(gridControl, records) {
    setPerfMarkerTimestamp("OpenInSharepointStart");
    var $v_0 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && records.length > 0) {
        var $v_1 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
            $v_2 = Mscrm.CommandBarActions.$20(gridControl, $v_1),
            $v_3 = gridControl.getCellValue("servicetype", $v_1);
        if (Number.parseInvariant($v_3) === 2)
            Xrm.Internal.messages.retrievePersonalSiteUrl().then(function($p1_0) {
                    var $v_4 = $p1_0.personalSiteUrl;
                    $v_0 = String.format("{0}/Documents/Forms/SharedWithMe.aspx/#", $v_4);
                    Mscrm.CommandBarActions.$17($v_0, "")
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        else {
            $v_0 = gridControl.getCellValue("absoluteurl", $v_1);
            var $v_5 = "";
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) Mscrm.CommandBarActions.$17($v_0, $v_5);
            else {
                Mscrm.CommandBarActions.$29();
                var $v_6 = ["absoluteurl"];
                Xrm.Internal.messages.retrieve("sharepointdocument", $v_2, $v_6).then(function($p1_0) {
                        var $v_7 = $p1_0.entity;
                        $v_0 = $v_7.getValue("absoluteurl").toString();
                        Mscrm.CommandBarActions.$17($v_0, "")
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            }
        }
    }
};
Mscrm.CommandBarActions.newSharePointDocument = function(gridControl, documentType) {
    setPerfMarkerTimestamp("NewSharePointDocumentStart");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_0 = gridControl.GetParameter("locationId");
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) $v_0 = Mscrm.CommandBarActions.$S.toString();
        var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
            CrmEncodeDecode.CrmUrlEncode("newdocument") +
            ".aspx");
        $v_1.get_query()["regardingObjectId"] = Xrm.Page.data.entity.getId();
        $v_1.get_query()["regardingTypeCode"] = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
        $v_1.get_query()["locationId"] = $v_0;
        $v_1.get_query()["documentType"] = documentType;
        var $v_2 = new Xrm.DialogOptions;
        $v_2.height = 235;
        $v_2.width = 600;
        var $v_3 = [gridControl],
            $v_4 = Mscrm.CommandBarActions.createCallbackFunctionFactory(Mscrm.CommandBarActions.newDocument, $v_3);
        Xrm.Internal.openDialog($v_1.toString(), $v_2, null, null, $v_4)
    }
};
Mscrm.CommandBarActions.createOneDriveCallback = function(returnValue, gridControl, callback) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        Xrm.Page.context.client.getClient() === "Outlook" && closeWindow(true);
        return
    }
    var $v_0 = returnValue["regardingObjectId"],
        $v_1 = returnValue["filename"],
        $v_2 = returnValue["regardingTypeCode"],
        $v_3 = returnValue["siteType"],
        $v_4 = Xrm.Page.data.entity.getId(),
        $v_5 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
        $v_6 = $v_5 + "_" + $v_4,
        $v_7 = new RegExp("-|{|}", "g");
    $v_6 = $v_6.replace($v_7, "");
    Xrm.Internal.messages.createFolder($v_6, $v_2, $v_0, $v_3, true)
        .then(function($p1_0) {
                callback($v_1,
                    $v_0,
                    $v_2.toString(),
                    $p1_0.locationId
                    .toString(),
                    gridControl,
                    false)
            },
            function($p1_0) {
                var $v_8 = -2147088628;
                if ($p1_0.get_organizationServiceFault().get_errorCode() === $v_8) {
                    var $v_9 = {};
                    $v_9["callback"] = callback;
                    $v_9["isUploadCallBack"] = false;
                    $v_9["filename"] = $v_1;
                    $v_9["gridControl"] = gridControl;
                    Mscrm.CommandBarActions.confirmFolderForOneDrive($v_6, $v_2, $v_0, $v_3, $v_9)
                } else Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands($p1_0)
            })
};
Mscrm.CommandBarActions.confirmFolderForOneDrive = function(locationName,
    regardingType,
    regardingObjectId,
    siteType,
    parameters) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/tools/DocumentManagement/OneDrive/ConfirmFolderForOneDrive.aspx");
    $v_0.get_query()["locationName"] = locationName;
    $v_0.get_query()["regardingType"] = regardingType;
    $v_0.get_query()["regardingObjectId"] = regardingObjectId;
    $v_0.get_query()["siteType"] = siteType;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 500;
    $v_1.height = 200;
    var $v_2 = [
            parameters["callback"], parameters["isUploadCallBack"], parameters["filename"], parameters["gridControl"]
        ],
        $v_3 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.confirmFolderCallback, $v_2);
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, $v_3)
};
Mscrm.CommandBarActions.confirmFolderCallback = function(returnValue,
    callBackFunction,
    isUploadCallback,
    filename,
    gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        Xrm.Page.context.client.getClient() === "Outlook" && isUploadCallback && closeWindow(true);
        return
    }
    var $v_0 = returnValue["locationName"],
        $v_1 = returnValue["regardingObjectId"],
        $v_2 = returnValue["regardingType"],
        $v_3 = returnValue["siteType"],
        $v_4 = false;
    Xrm.Internal.messages.createFolder($v_0, $v_2, $v_1, $v_3, $v_4).then(function($p1_0) {
            var $v_5 = $p1_0.locationId.toString();
            if (isUploadCallback) {
                var $v_6 = callBackFunction;
                $v_6($v_5)
            } else {
                var $v_7 = Mscrm.CommandBarActions.$16;
                $v_7(filename, $v_1, $v_2.toString(), $v_5, gridControl, false)
            }
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.uploadCreate = function(returnValue, parameters) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        Xrm.Page.context.client.getClient() === "Outlook" && closeWindow(true);
        return
    }
    var $v_0 = returnValue["regardingObjectId"],
        $v_1 = returnValue["regardingTypeCode"],
        $v_2 = 1,
        $v_3 = returnValue["foldername"],
        $v_4 = new RegExp("-|{|}", "g");
    $v_3 = $v_3.replace($v_4, "");
    Xrm.Internal.messages.createFolder($v_3, $v_1, $v_0, $v_2, true).then(function($p1_0) {
            var $v_5 = $p1_0.locationId.toString(), $v_6 = returnValue["callback"];
            if (Mscrm.InternalUtilities.JSTypes
                .isNull($v_6) &&
                !Mscrm.InternalUtilities.JSTypes.isNull(parameters)) $v_6 = parameters["callback"];
            $v_6($v_5)
        },
        function($p1_0) {
            var $v_7 = -2147088628;
            if ($p1_0.get_organizationServiceFault().get_errorCode() === $v_7) {
                parameters["isUploadCallBack"] = true;
                Mscrm.CommandBarActions.confirmFolderForOneDrive($v_3, $v_1, $v_0, $v_2, parameters)
            } else Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands($p1_0)
        })
};
Mscrm.CommandBarActions.uploadCreateOneDriveFolder = function(returnValue) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    var $v_0 = returnValue["regardingObjectId"],
        $v_1 = returnValue["regardingTypeCode"],
        $v_2 = 1,
        $v_3 = returnValue["foldername"],
        $v_4 = new RegExp("-|{|}", "g");
    $v_3 = $v_3.replace($v_4, "");
    var $v_5 = returnValue["isPersonalSitePresent"];
    if ($v_5)
        Xrm.Internal.messages.createFolder($v_3, $v_1, $v_0, $v_2, false).then(function($p1_0) {
                var $v_6 = $p1_0.locationId.toString(), $v_7 = returnValue["callback"];
                $v_7($v_6)
            },
            Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands);
    else {
        var $v_8 = Mscrm.GlobalImported.CrmUri.create("/tools/DocumentManagement/OneDrive/OneDriveforBusiness.aspx"),
            $v_9 = new Xrm.DialogOptions;
        $v_9.height = 280;
        $v_9.width = 670;
        $v_8.get_query()["regardingObjectId"] = $v_0;
        $v_8.get_query()["regardingTypeCode"] = $v_1;
        $v_8.get_query()["foldername"] = $v_3;
        $v_8.get_query()["siteType"] = $v_2;
        $v_8.get_query()["filename"] = "";
        var $v_A = [returnValue],
            $v_B = Mscrm.CommandBarActions.createCallbackFunctionFactory(Mscrm.CommandBarActions.uploadCreate, $v_A);
        Xrm.Internal.openDialog($v_8.toString(), $v_9, null, null, $v_B)
    }
};
Mscrm.CommandBarActions.createOneDriveFolder = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    var $v_0 = returnValue["regardingObjectId"],
        $v_1 = returnValue["regardingTypeCode"],
        $v_2 = returnValue["locationId"],
        $v_3 = returnValue["isPersonalSitePresent"],
        $v_4 = returnValue["filename"] + returnValue["documentType"],
        $v_5 = Xrm.Page.data.entity.getId(),
        $v_6 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
        $v_7 = $v_6 + "_" + $v_5,
        $v_8 = new RegExp("-|{|}", "g");
    $v_7 = $v_7.replace($v_8, "");
    var $v_9 = 1, $v_A = Mscrm.CommandBarActions.$16, $v_B = null;
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_2)) $v_B = new Microsoft.Crm.Client.Core.Framework.Guid($v_2);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_B) &&
        $v_B.equals(Mscrm.CommandBarActions._oneDriveLocationNotCreated))
        if (!$v_3) {
            var $v_C = Mscrm.GlobalImported.CrmUri
                    .create("/tools/DocumentManagement/OneDrive/OneDriveforBusiness.aspx"),
                $v_D = new Xrm.DialogOptions;
            $v_D.height = 280;
            $v_D.width = 670;
            $v_C.get_query()["foldername"] = CrmEncodeDecode.CrmUrlEncode($v_7);
            $v_C.get_query()["siteType"] = CrmEncodeDecode.CrmUrlEncode($v_9.toString());
            $v_C.get_query()["regardingObjectId"] = CrmEncodeDecode.CrmUrlEncode(returnValue["regardingObjectId"]);
            $v_C.get_query()["regardingTypeCode"] = CrmEncodeDecode.CrmUrlEncode(returnValue["regardingTypeCode"]);
            $v_C.get_query()["fileName"] = CrmEncodeDecode.CrmUrlEncode($v_4);
            var $v_E = [gridControl, $v_A],
                $v_F = Mscrm.CommandBarActions
                    .createCallbackFunctionFactory(Mscrm.CommandBarActions.createOneDriveCallback, $v_E);
            Xrm.Internal.openDialog($v_C.toString(), $v_D, null, null, $v_F)
        } else
            Xrm.Internal.messages.createFolder($v_7, $v_1, $v_0, $v_9, false)
                .then(function($p1_0) {
                        $v_A($v_4, $v_0, $v_1.toString(), $p1_0.locationId.toString(), gridControl, false)
                    },
                    Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.$16 = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = "";
    if ($p4) $v_0 = Mscrm.CommandBarActions.$1e($p3, $p4);
    Mscrm.CommandBarActions.$U();
    setPerfMarkerTimestamp("NewSharePointDocumentStart");
    Xrm.Internal.messages.newDocument($p0, $p1, $p2, $p3).then(function($p1_0) {
            Mscrm.CommandBarActions.$1I($p1_0.editLink, null);
            Mscrm.CommandBarActions.$1D($p4, $v_0, $p5);
            Mscrm.CommandBarActions.$F()
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands);
    setPerfMarkerTimestamp("NewSharePointDocumentEnd")
};
Mscrm.CommandBarActions.$1e = function($p0, $p1) {
    var $v_0 = $p1.GetParameter("locationId");
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
        $p1.SetParameter("locationId", Mscrm.CommandBarActions.$S.toString());
        return Mscrm.CommandBarActions.$S.toString()
    } else if (!Mscrm.CommandBarActions.$S.equals(new Microsoft.Crm.Client.Core.Framework.Guid($v_0))) {
        $p1.SetParameter("locationId", $p0);
        return $p0
    }
    return $v_0
};
Mscrm.CommandBarActions.newDocument = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    var $v_0 = returnValue["documentType"],
        $v_1 = returnValue["regardingObjectId"],
        $v_2 = returnValue["regardingTypeCode"],
        $v_3 = returnValue["locationId"],
        $v_4 = returnValue["filename"] + $v_0,
        $v_5 = null;
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_3))
        $v_3 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString();
    else $v_5 = new Microsoft.Crm.Client.Core.Framework.Guid($v_3);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
        $v_5.equals(Mscrm.CommandBarActions
            ._oneDriveLocationNotCreated)) Mscrm.CommandBarActions.createOneDriveFolder(returnValue, gridControl);
    else Mscrm.CommandBarActions.$16($v_4, $v_1, $v_2, $v_3, gridControl, true)
};
Mscrm.CommandBarActions.openSharePoint = function(gridControl, primaryEntityTypeCode, locationId) {
    var $v_0;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) locationId = gridControl.GetParameter("locationId");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(primaryEntityTypeCode)) $v_0 = primaryEntityTypeCode;
    else $v_0 = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(locationId)) locationId = "";
    Xrm.Internal.messages.fetchSiteUrl(locationId, Xrm.Page.data.entity.getId(), $v_0).then(function($p1_0) {
            var $v_1 = $p1_0;
            window.open($v_1.siteAndLocationUrl, "_blank")
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.sharePointUpload = function(gridControl, primaryEntityTypeCode) {
    var $v_0 = Xrm.Page.data.entity
            .getId(),
        $v_1 = primaryEntityTypeCode,
        $v_2 = gridControl.GetParameter("locationId");
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) $v_2 = Mscrm.CommandBarActions.$S.toString();
    var $v_3 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
        CrmEncodeDecode.CrmUrlEncode("SP_upload") +
        ".aspx");
    $v_3.get_query()["pid"] = $v_0;
    $v_3.get_query()["pType"] = $v_1;
    $v_3.get_query()["locationId"] = $v_2;
    var $v_4 = Xrm.Page.data.entity.getPrimaryAttributeValue(), $v_5 = $v_4 + "_" + $v_0;
    $v_3.get_query()["foldername"] = $v_5;
    var $v_6 = new Xrm.DialogOptions;
    $v_6.height = 280;
    $v_6.width = 600;
    var $v_7 = [gridControl],
        $v_8 = Mscrm.CommandBarActions
            .createCallbackFunctionFactory(Mscrm.CommandBarActions.uploadDialogCallback, $v_7);
    Xrm.Internal.openDialog($v_3.toString(), $v_6, window.self, null, $v_8)
};
Mscrm.CommandBarActions.uploadDialogCallback = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    setPerfMarkerTimestamp("UploadSharePointDocumentEnd");
    var $v_0 = returnValue["locationId"],
        $v_1 = returnValue["isErrorResponse"],
        $v_2 = returnValue["response"],
        $v_3 = Mscrm.CommandBarActions.$3n($v_2, $v_1);
    if (!$v_3) {
        var $v_4 = returnValue["isOneDriveLocationCreated"];
        $v_0 = Mscrm.CommandBarActions.$1e($v_0, gridControl);
        Mscrm.CommandBarActions.$1D(gridControl, $v_0, $v_4)
    }
};
Mscrm.CommandBarActions.$3n = function($p0, $p1) {
    var $v_0 = false;
    try {
        var $v_1 = Mscrm.CommandBarActions.$3i($p0);
        if ($v_1) {
            var $v_2 = $v_1.getElementsByTagName("error"), $v_3 = "", $v_4 = "";
            if ($v_2 && $v_2.length > 0)
                for (var $v_5 = $v_2[0], $v_6 = 0; $v_6 < $v_5.childNodes.length; $v_6++)
                    if ($v_5.childNodes[$v_6].nodeName
                        .toLowerCase() ===
                        "code") $v_3 = $v_5.childNodes[$v_6].textContent;
                    else if ($v_5.childNodes[$v_6].nodeName
                        .toLowerCase() ===
                        "displaytext") $v_4 = $v_5.childNodes[$v_6].textContent;
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
                var $v_7 = Number.parseInvariant($v_3);
                if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) $v_4 = "";
                Xrm.Internal.openErrorDialog($v_7, $v_4);
                $v_0 = true
            }
        }
    } catch ($$e_A) {
        $v_0 = false
    }
    if ($p1 && !$v_0) {
        Xrm.Internal.openErrorDialog(Mscrm.CommandBarActions.$2Y, "");
        $v_0 = true
    }
    return $v_0
};
Mscrm.CommandBarActions.$3i = function($p0) {
    if (typeof $p0 === "object") return $p0;
    else if (typeof $p0 === "string") return XUI.Xml.LoadXml($p0);
    return null
};
Mscrm.CommandBarActions.refreshParentGridSP = function(gridControl) {
    Mscrm.CommandBarActions.$1D(gridControl, null, true)
};
Mscrm.CommandBarActions.refreshParentGridSPForUpload = function(entityId) {
    setPerfMarkerTimestamp("SharepointGridRefreshStart");
    var $v_0 = "sharepointdocument", $v_1 = 9507;
    Xrm.Internal.refreshParentGrid($v_1, $v_0, entityId);
    setPerfMarkerTimestamp("SharepointGridRefreshEnd")
};
Mscrm.CommandBarActions.deleteSharePointRecords = function(gridControl, records) {
    setPerfMarkerTimestamp("DeleteSharePointRecordsDialogLoadStart");
    Mscrm.CommandBarActions.$U();
    var $v_0 = "", $v_1 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_2 = gridControl.GetRecordsFromInnerGrid(true),
            $v_3 = new Array(4),
            $v_4 = "locationid",
            $v_5 = "regardingobjectid",
            $v_6 = "documentid",
            $v_7 = "sharepointdocumentid",
            $v_8 = "filetype",
            $v_9 = new Array($v_2.length),
            $v_A = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
        $v_3[0] = $v_4;
        $v_3[1] = $v_5;
        $v_3[2] = $v_6;
        $v_3[3] = $v_7;
        $v_3[4] = $v_8;
        for (var $v_G = 0; $v_G < $v_2.length; $v_G++) {
            var $v_H = {}, $v_I = {};
            $v_H[$v_4] = 14;
            $v_H[$v_6] = 5;
            $v_H[$v_7] = 15;
            $v_H[$v_5] = 6;
            $v_H[$v_8] = 14;
            $v_I[$v_5] = $v_A;
            var $v_J = $v_2[$v_G][0];
            $v_0 = Mscrm.CommandBarActions.$f($v_J, gridControl);
            $v_I[$v_6] = $v_0;
            $v_I[$v_8] = Mscrm.CommandBarActions.$3X($v_J, gridControl);
            $v_I[$v_4] = Mscrm.CommandBarActions.$X($v_J, gridControl);
            $v_1 = Mscrm.CommandBarActions.$g($v_J, gridControl);
            $v_I[$v_7] = $v_1;
            var $v_K = new Xrm.Objects.EntityReference("sharepointdocument",
                    new Microsoft.Crm.Client.Core.Framework.Guid($v_1)),
                $v_L = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_K,
                        $v_I,
                        $v_H,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_L.get_changedFieldNames().addRange($v_3);
            $v_9[$v_G] = $v_L
        }
        var $v_B = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityCollection($v_9, false, $v_2.length, false),
            $v_C = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_sp_delete.aspx");
        $v_C.get_query()["iObjType"] = 9507;
        $v_C.get_query()["iTotal"] = records.length;
        var $v_D = [$v_B, gridControl],
            $v_E = Mscrm.CommandBarActions
                .createCallbackFunctionFactory(Mscrm.CommandBarActions.deleteSharePointAction, $v_D),
            $v_F = new Xrm.DialogOptions;
        $v_F.width = 570;
        $v_F.height = 205;
        setPerfMarkerTimestamp("DeleteSharePointRecordsDialogLoadEnd");
        Xrm.Internal.openDialog($v_C.toString(), $v_F, null, null, $v_E)
    }
};
Mscrm.CommandBarActions.deleteSharePointAction = function(isDialogCanceled, entityCollection, gridControl) {
    if (isDialogCanceled) {
        Mscrm.CommandBarActions.$F();
        return
    }
    setPerfMarkerTimestamp("DeleteSharePointRecordsSDKStart");
    if (entityCollection)
        Xrm.Internal.messages.deleteDocument(entityCollection).then(function() {
                setPerfMarkerTimestamp("DeleteSharePointRecordsSDKEnd");
                Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
                Mscrm.CommandBarActions.$F()
            },
            function($p1_0) {
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0);
                Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
                Mscrm.CommandBarActions.$F()
            });
    else Mscrm.CommandBarActions.$F()
};
Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands = function(response) {
    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(response);
    Mscrm.CommandBarActions.$F()
};
Mscrm.CommandBarActions.checkout = function(gridControl) {
    setPerfMarkerTimestamp("CheckoutSharePointDocumentStart");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_0 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
            $v_1 = Mscrm.CommandBarActions.$f($v_0, gridControl),
            $v_2 = Mscrm.CommandBarActions.$g($v_0, gridControl),
            $v_3 = Mscrm.CommandBarActions.$X($v_0, gridControl);
        Mscrm.CommandBarActions.checkoutFile($v_3, $v_1, $v_2, gridControl)
    }
};
Mscrm.CommandBarActions.checkoutFile = function(locationId, documentId, entityId, gridControl) {
    Mscrm.CommandBarActions.$U();
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(3), $v_3 = "documentid";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 14;
    $v_1[$v_3] = documentId;
    $v_3 = "regardingobjectid";
    var $v_4 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_1[$v_3] = $v_4;
    $v_0[$v_3] = 6;
    $v_2[1] = $v_3;
    $v_3 = "locationid";
    $v_2[2] = $v_3;
    $v_0[$v_3] = 14;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(locationId)) $v_1[$v_3] = "";
    else $v_1[$v_3] = locationId;
    var $v_5 = new Xrm.Objects.EntityReference("sharepointdocument",
            new Microsoft.Crm.Client.Core.Framework.Guid(entityId)),
        $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_5,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_6.get_changedFieldNames().addRange($v_2);
    setPerfMarkerTimestamp("CheckoutSharePointDocumentSDKStart");
    Xrm.Internal.messages.checkoutFiles($v_6).then(function($p1_0) {
            setPerfMarkerTimestamp("CheckoutSharePointDocumentSDKEnd");
            Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
            Mscrm.CommandBarActions.$F()
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.discardCheckoutFile = function(locationId, documentId, entityId, gridControl) {
    Mscrm.CommandBarActions.$U();
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(3), $v_3 = "documentid";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 14;
    $v_1[$v_3] = documentId;
    $v_3 = "regardingobjectid";
    var $v_4 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_1[$v_3] = $v_4;
    $v_0[$v_3] = 6;
    $v_2[1] = $v_3;
    $v_3 = "locationid";
    $v_2[2] = $v_3;
    $v_0[$v_3] = 14;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(locationId)) $v_1[$v_3] = "";
    else $v_1[$v_3] = locationId;
    var $v_5 = new Xrm.Objects.EntityReference("sharepointdocument",
            new Microsoft.Crm.Client.Core.Framework.Guid(entityId)),
        $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_5,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_6.get_changedFieldNames().addRange($v_2);
    setPerfMarkerTimestamp("DiscardCheckoutSharePointDocumentSDKStart");
    Xrm.Internal.messages.discardCheckoutFiles($v_6).then(function($p1_0) {
            setPerfMarkerTimestamp("DiscardCheckoutSharePointDocumentSDKEnd");
            Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
            Mscrm.CommandBarActions.$F()
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.discardCheckout = function(gridControl) {
    setPerfMarkerTimestamp("DiscardCheckoutSharePointDocumentDialogStartLoad");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_0 = "sharepointdocument";
        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
            var $v_1 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
                $v_2 = Mscrm.CommandBarActions.$f($v_1, gridControl),
                $v_3 = Mscrm.CommandBarActions.$g($v_1, gridControl),
                $v_4 = Mscrm.CommandBarActions.$X($v_1, gridControl);
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
                var $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_discardcheckout.aspx");
                $v_5.get_query()["spId"] = $v_2;
                $v_5.get_query()["entityId"] = $v_3;
                $v_5.get_query()["entityName"] = $v_0;
                $v_5.get_query()["locationId"] = $v_4;
                var $v_6 = new Xrm.DialogOptions;
                $v_6.height = 200;
                $v_6.width = 400;
                var $v_7 = [gridControl],
                    $v_8 = Mscrm.CommandBarActions
                        .createCallbackFunctionFactory(Mscrm.CommandBarActions.discardDialogClose, $v_7);
                setPerfMarkerTimestamp("DiscardCheckoutSharePointDocumentDialogEndLoad");
                Xrm.Internal.openDialog($v_5.toString(), $v_6, null, null, $v_8)
            }
        }
    }
};
Mscrm.CommandBarActions.discardDialogClose = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    setPerfMarkerTimestamp("DiscardCheckoutSharePointDocumentStart");
    var $v_0 = returnValue["entityId"], $v_1 = returnValue["documentId"], $v_2 = returnValue["locationId"];
    Mscrm.CommandBarActions.discardCheckoutFile($v_2, $v_1, $v_0, gridControl)
};
Mscrm.CommandBarActions.checkIn = function(gridControl) {
    setPerfMarkerTimestamp("CheckinSharePointDocumentDialogLoadStart");
    var $v_0 = "sharepointdocument";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_1 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
            $v_2 = Mscrm.CommandBarActions.$X($v_1, gridControl),
            $v_3 = Mscrm.CommandBarActions.$f($v_1, gridControl),
            $v_4 = Mscrm.CommandBarActions.$g($v_1, gridControl),
            $v_5 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_checkin.aspx");
        $v_5.get_query()["spId"] = $v_3;
        $v_5.get_query()["entityId"] = $v_4;
        $v_5.get_query()["entityName"] = $v_0;
        $v_5.get_query()["locationId"] = $v_2;
        var $v_6 = new Xrm.DialogOptions;
        $v_6.height = 360;
        $v_6.width = 540;
        var $v_7 = [gridControl],
            $v_8 = Mscrm.CommandBarActions
                .createCallbackFunctionFactory(Mscrm.CommandBarActions.dialogCheckInClose, $v_7);
        setPerfMarkerTimestamp("CheckinSharePointDocumentDialogLoadEnd");
        Xrm.Internal.openDialog($v_5.toString(), $v_6, null, null, $v_8)
    }
};
Mscrm.CommandBarActions.dialogCheckInClose = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    setPerfMarkerTimestamp("CheckinSharePointDocumentStart");
    Mscrm.CommandBarActions.$U();
    var $v_0 = returnValue["entityId"],
        $v_1 = returnValue["documentId"],
        $v_2 = returnValue["isRetain"],
        $v_3 = returnValue["comments"],
        $v_4 = returnValue["locationId"],
        $v_5 = new Array(3),
        $v_6 = {},
        $v_7 = {},
        $v_8 = "documentid";
    $v_6[$v_8] = 14;
    $v_7[$v_8] = $v_1;
    $v_5[0] = $v_8;
    $v_8 = "regardingobjectid";
    var $v_9 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_7[$v_8] = $v_9;
    $v_6[$v_8] = 6;
    $v_5[1] = $v_8;
    $v_8 = "locationid";
    $v_5[2] = $v_8;
    $v_6[$v_8] = 14;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) $v_7[$v_8] = "";
    else $v_7[$v_8] = $v_4;
    var $v_A = new Xrm.Objects
            .EntityReference("sharepointdocument", new Microsoft.Crm.Client.Core.Framework.Guid($v_0)),
        $v_B = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_A,
                $v_7,
                $v_6,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_B.get_changedFieldNames().addRange($v_5);
    setPerfMarkerTimestamp("CheckinSharePointDocumentSDKStart");
    Xrm.Internal.messages.checkInFiles($v_B, $v_3, $v_2).then(function($p1_0) {
            setPerfMarkerTimestamp("CheckinSharePointDocumentSDKEnd&GridRefreshStart");
            Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
            setPerfMarkerTimestamp("CheckinSharePointDocumentRefreshGridEnd");
            Mscrm.CommandBarActions.$F()
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.sharePointEditDocumentProperties = function(gridControl) {
    setPerfMarkerTimestamp("EditPropertiesSharePointDocumentDialogStartLoad");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_0 = gridControl.GetRecordsFromInnerGrid(true)[0][0],
            $v_1 = gridControl.getCellValue("oid", $v_0),
            $v_2 = Mscrm.CommandBarActions.$X($v_0, gridControl);
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            var $v_3 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_" +
                CrmEncodeDecode.CrmUrlEncode("editdocumentproperties") +
                ".aspx");
            $v_3.get_query()["oid"] = $v_1;
            $v_3.get_query()["regardingId"] = Xrm.Page.data.entity.getId();
            $v_3.get_query()["regardingTypeCode"] = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
            var $v_4 = {};
            $v_4["sharePointDocumentId"] = $v_1;
            var $v_5 = gridControl.getCellValue("documentid", $v_0),
                $v_6 = gridControl.getCellValue("fullname", $v_0),
                $v_7 = Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(gridControl.getCellValue("title", $v_0))
                    ? ""
                    : gridControl.getCellValue("title", $v_0),
                $v_8 = gridControl.getCellValue("author", $v_0),
                $v_9 = gridControl.getCellValue("sharepointcreatedon", $v_0),
                $v_A = gridControl.getCellValue("sharepointmodifiedby", $v_0),
                $v_B = gridControl.getCellValue("modified", $v_0);
            $v_3.get_query()["documentId"] = $v_5;
            $v_4["documentId"] = $v_5;
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_6) ||
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_8) ||
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_9) ||
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_A) ||
                Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_B)) {
                $v_3.get_query()["useFallback"] = 1;
                $v_4["useFallback"] = 1
            } else {
                $v_3.get_query()["useFallback"] = 0;
                $v_4["useFallback"] = 0;
                $v_4["fullName"] = $v_6;
                $v_4["title"] = $v_7;
                $v_4["createdBy"] = $v_8;
                $v_4["createdOn"] = Mscrm.CommandBarActions.$2G($v_9);
                $v_4["modifiedBy"] = $v_A;
                $v_4["modifiedOn"] = Mscrm.CommandBarActions.$2G($v_B)
            }
            $v_3.get_query()["locationId"] = $v_2;
            var $v_C = new Xrm.DialogOptions;
            $v_C.width = 600;
            $v_C.height = 270;
            var $v_D = [gridControl],
                $v_E = Mscrm.CommandBarActions
                    .createCallbackFunctionFactory(Mscrm.CommandBarActions.sharePointUpdateDocumentProperties, $v_D);
            setPerfMarkerTimestamp("EditPropertiesSharePointDocumentDialogEndLoad");
            Xrm.Internal.openDialog($v_3.toString(), $v_C, $v_4, null, $v_E)
        }
    }
};
Mscrm.CommandBarActions.$2G = function($p0) {
    var $v_0 = Mscrm.InternalUtilities.LegacyUtils.parseISO8601Date($p0);
    $v_0 = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate(), $v_0.getHours(), $v_0.getMinutes());
    return $v_0
};
Mscrm.CommandBarActions.sharePointUpdateDocumentProperties = function(returnValue, gridControl) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) return;
    setPerfMarkerTimestamp("EditPropertiesSharePointDocumentStart");
    Mscrm.CommandBarActions.$U();
    var $v_0 = {},
        $v_1 = {},
        $v_2 = returnValue["locationId"],
        $v_3 = new Array(5),
        $v_4 = "documentid",
        $v_5 = "fullname",
        $v_6 = "title",
        $v_7 = "regardingobjectid",
        $v_8 = "locationid";
    $v_3[0] = $v_4;
    $v_3[1] = $v_5;
    $v_3[2] = $v_6;
    $v_3[3] = $v_7;
    $v_3[4] = $v_8;
    $v_0[$v_4] = 5;
    $v_0[$v_5] = 14;
    $v_0[$v_6] = 14;
    $v_0[$v_8] = 14;
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) $v_1[$v_8] = "";
    else $v_1[$v_8] = $v_2;
    $v_1[$v_4] = returnValue["documentId"];
    $v_1[$v_5] = Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(returnValue["extension"])
        ? returnValue["name"]
        : returnValue["name"] + returnValue["extension"];
    $v_1[$v_6] = returnValue["title"];
    var $v_9 = new Xrm.Objects.EntityReference(Xrm.Page.data.entity.getEntityName(),
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_1[$v_7] = $v_9;
    $v_0[$v_7] = 6;
    var $v_A = new Xrm.Objects.EntityReference("sharepointdocument",
            new Microsoft.Crm.Client.Core.Framework.Guid(returnValue["sharePointDocumentId"])),
        $v_B = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_A,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_B.get_changedFieldNames().addRange($v_3);
    setPerfMarkerTimestamp("EditPropertiesSharePointDocumentStartSDK");
    Xrm.Internal.messages.editDocumentProperties($v_B).then(function() {
            setPerfMarkerTimestamp("EditPropertiesSharePointDocumentSDKEnd");
            Mscrm.CommandBarActions.refreshParentGridSP(gridControl);
            Mscrm.CommandBarActions.$F()
        },
        Mscrm.CommandBarActions.actionFailedCallbackForSharePointCommands)
};
Mscrm.CommandBarActions.$F = function() {
    var $v_0 = window.document.getElementById("associatedGridRibbon"), $v_1 = $v_0.children[0];
    $v_0.style.cursor = "default";
    $v_1.style.visibility = "visible"
};
Mscrm.CommandBarActions.$U = function() {
    var $v_0 = window.document.getElementById("associatedGridRibbon"), $v_1 = $v_0.children[0];
    $v_0.style.cursor = "wait";
    $v_1.style.visibility = "hidden"
};
Mscrm.CommandBarActions.$1D = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        setPerfMarkerTimestamp("SharepointGridRefreshStart");
        if (!$p2 && $p1) {
            var $v_0 = window.frameElement,
                $v_1 = $v_0.contentWindow.location.href,
                $v_2 = Mscrm.GlobalImported.CrmUri.create($v_1);
            $v_2.get_query()["locationId"] = $p1;
            $v_0.src = $v_2.toString()
        } else $p0.refresh();
        setPerfMarkerTimestamp("SharepointGridRefreshEnd")
    }
};
Mscrm.CommandBarActions.$g = function($p0, $p1) { return $p1.getCellValue("oid", $p0) };
Mscrm.CommandBarActions.$f = function($p0, $p1) {
    var $v_0 = $p1.getCellValue("documentid", $p0);
    return Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) ? "-1" : $v_0
};
Mscrm.CommandBarActions.$3X = function($p0, $p1) {
    var $v_0 = $p1.getCellValue("filetype", $p0);
    return Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) ? "" : $v_0
};
Mscrm.CommandBarActions.$X = function($p0, $p1) {
    var $v_0 = $p1.getCellValue("locationid", $p0);
    return Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) ? "" : $v_0
};
Mscrm.CommandBarActions.$3A = function($p0, $p1) { return $p1.getCellValue("absoluteurl", $p0) };
Mscrm.CommandBarActions.$3S = function($p0, $p1) { return $p1.getCellValue("editurl", $p0) };
Mscrm.CommandBarActions.$20 = function($p0, $p1) { return $p0.getCellValue("oid", $p1) };
Mscrm.CommandBarActions.$29 = function() {};
Mscrm.CommandBarActions.$1I = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0)) {
        setPerfMarkerTimestamp("EditSharepointDocument_NewWindowOpen");
        window.open($p0, "_blank")
    } else if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p1)) {
        setPerfMarkerTimestamp("EditSharepointDocument_NewWindowOpen");
        Xrm.Internal.spOpenInNativeClient($p1)
    }
};
Mscrm.CommandBarActions.$17 = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0)) {
        var $v_0 = new RegExp("/+$", "g");
        $p0 = $p0.replace($v_0, "");
        $p1 = $p0.substr(0, $p0.lastIndexOf("/"));
        setPerfMarkerTimestamp("OpenInSharepointOpenNewWindow");
        window.open($p1, "_blank")
    }
};
Mscrm.CommandBarActions.publishTheme = function(gridControl, records) {
    records.length > 0 &&
        Mscrm.CommandBarActions.$2K(new Xrm.Objects
            .EntityReference("theme", new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id)),
            gridControl)
};
Mscrm.CommandBarActions.previewTheme = function(records) {
    if (records.length > 0) {
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id);
        Mscrm.CommandBarActions.$2J($v_0)
    }
};
Mscrm.CommandBarActions.cloneTheme = function(gridControl, records) {
    if (records.length > 0) {
        var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id);
        Mscrm.CommandBarActions.$1U(gridControl, $v_0)
    }
};
Mscrm.CommandBarActions.publishThemeFromForm = function(parentEntityId) {
    Xrm.Page.data.save().then(function() {
            Mscrm.CommandBarActions.$2K(new Xrm.Objects
                .EntityReference("theme", new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId)),
                null)
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.CommandBarActions.cloneThemeFromForm = function(parentEntityId) {
    Mscrm.CommandBarActions.$1U(null, new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId))
};
Mscrm.CommandBarActions.previewThemeFromForm = function(parentEntityId) {
    Xrm.Page.data.save().then(function() {
            Mscrm.CommandBarActions.$2J(new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId))
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.CommandBarActions.$1U = function($p0, $p1) {
    var $v_0 =
            "<fetch version='1.0' mapping='logical'><entity name='theme'><all-attributes /><filter type='and'><condition attribute='themeid' operator='eq' value='" + $p1.toString() + "' /></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            if ($p1_0) {
                $v_1 = $p1_0.entityCollection;
                if ($v_1.get_count()) {
                    var $v_2 = $v_1.get_entities()[0],
                        $v_3 = $v_2.clone(),
                        $v_4 = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
                    delete $v_3.get_cleanFields().themeid;
                    $v_3.setValue("type", true);
                    $v_3.setValue("isdefaulttheme", false);
                    $v_3.setValue("statecode", 0);
                    $v_3.setValue("statuscode", 1);
                    var $v_5 = String.format(String.format(Xrm.Internal.getResourceString("LOCID_CLONE_THEME"),
                        $v_3.getValue("name")));
                    $v_3.setValue("name", $v_5);
                    $v_3.setValue("themeid", $v_4);
                    for (var $$arr_9 = $v_2.get_fieldNames(), $$len_A = $$arr_9.length, $$idx_B = 0;
                        $$idx_B < $$len_A;
                        ++$$idx_B) {
                        var $v_6 = $$arr_9[$$idx_B];
                        $v_3.get_changedFieldNames().add($v_6)
                    }
                    $v_3.get_identifier().Id = $v_4;
                    Xrm.Internal.messages.create($v_3).then(function($p2_0) {
                            $v_4 = $p2_0.id;
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) $p0.refresh();
                            else {
                                Xrm.Utility.openEntityForm("theme", $v_4.toString(), null);
                                Xrm.Internal.refreshParentGrid(2015, "", $v_4.toString())
                            }
                        },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                }
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$2J = function($p0) {
    Mscrm.InternalUtilities.LegacyUtils.setCookie("PreviewThemeId", $p0.toString(), 10);
    Mscrm.InternalUtilities.LegacyUtils.setCookie("PreviewThemeTimeStamp", (new Date).getTime().toString(), 10);
    window.top.location.reload()
};
Mscrm.CommandBarActions.exitPreviewTheme = function() {
    Mscrm.InternalUtilities.LegacyUtils.deleteCookie("PreviewThemeId");
    Mscrm.InternalUtilities.LegacyUtils.deleteCookie("PreviewThemeTimeStamp");
    window.top.location.reload()
};
Mscrm.CommandBarActions.isPreviewEnabled = function() {
    return !Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString(Mscrm.InternalUtilities.Utilities.getCookie("PreviewThemeId"))
};
Mscrm.CommandBarActions.$2K = function($p0, $p1) {
    Xrm.Internal.messages.publishTheme($p0).then(function($p1_0) {
            Mscrm.InternalUtilities.LegacyUtils.deleteCookie("PreviewThemeId");
            Mscrm.InternalUtilities.LegacyUtils.deleteCookie("PreviewThemeTimeStamp");
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($p1) &&
                Xrm.Page.context.client.getClient() === "Outlook") $p1.refresh();
            else window.top.location.reload()
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.homepageApplyOptimization = function(gridControl, records) {
    !Mscrm.CommandBarActions.$3o(gridControl) &&
        Mscrm.CommandBarActions.$1X(gridControl, records, 0, Mscrm.CommandBarActions.performHomepageApplyOptimization)
};
Mscrm.CommandBarActions.formApplyOptimization = function(objectId) { Mscrm.CommandBarActions.$34(objectId) };
Mscrm.CommandBarActions.homepageRemoveOptimization = function(gridControl, records) {
    !Mscrm.CommandBarActions.$3p(gridControl) &&
        Mscrm.CommandBarActions.$1X(gridControl, records, 1, Mscrm.CommandBarActions.performHomepageRemoveOptimization)
};
Mscrm.CommandBarActions.formRemoveOptimization = function(objectId) { Mscrm.CommandBarActions.$35(objectId) };
Mscrm.CommandBarActions.performHomepageApplyOptimization = function(confirmed, gridControl, records) {
    confirmed && Mscrm.CommandBarActions.$1j(gridControl, Mscrm.DataperformanceAction.toString(0))
};
Mscrm.CommandBarActions
    .performHomepageRemoveOptimization = function(confirmed, gridControl, records) {
        confirmed && Mscrm.CommandBarActions.$1j(gridControl, Mscrm.DataperformanceAction.toString(1))
    };
Mscrm.CommandBarActions.$34 = function($p0) { Mscrm.InternalUtilities._Script.alert("FormApplyOptimizationInternal") };
Mscrm.CommandBarActions.$35 = function($p0) { Mscrm.InternalUtilities._Script.alert("FormRemoveOptimizationInternal") };
Mscrm.CommandBarActions.$1X = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 205;
    $v_0.width = 570;
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_confirmdpdaction.aspx");
    $v_1.get_query()["action"] = Mscrm.DataperformanceAction.toString($p2);
    $v_1.get_query()["selectedCount"] = $p1.length;
    var $v_2 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($p3, [$p0, $p1]);
    Xrm.Internal.openDialog($v_1.toString(), $v_0, [], null, $v_2)
};
Mscrm.CommandBarActions.$1j = function($p0, $p1) {
    var $v_0 = Mscrm.CommandBarActions.$4G($p0);
    Xrm.Internal.messages.executeDataPerformanceAction($v_0, $p1)
        .then(function($p1_0) { $p0.refresh() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$4G = function($p0) {
    var $v_0 = $p0.getGrid().getSelectedRows(), $v_1 = $v_0.get(0).getData().getEntity();
    return new Microsoft.Crm.Client.Core.Framework.Guid(Mscrm.CommandBarActions.$H($v_1, "dataperformanceid"))
};
Mscrm.CommandBarActions.homepageOptimizeEnableRule = function(gridControl) {
    var $v_0 = gridControl.getGrid().getSelectedRows();
    if ($v_0.getLength() > 1) return false;
    var $v_1 = $v_0.get(0).getData().getEntity();
    return Mscrm.CommandBarActions.$23(Mscrm.CommandBarActions.$H($v_1, "anyoptimizationavailable"),
        Mscrm.CommandBarActions.$H($v_1, "anyoptimizationapplied"),
        Mscrm.CommandBarActions.$H($v_1, "lastactionresult"))
};
Mscrm.CommandBarActions.formOptimizeEnableRule = function(recordId) {
    if (null !== recordId)
        return Mscrm.CommandBarActions.$23(Mscrm.CommandBarActions.$V("anyoptimizationavailable"),
            Mscrm.CommandBarActions.$V("anyoptimizationapplied"),
            Mscrm.CommandBarActions.$V("lastactionresult"));
    return false
};
Mscrm.CommandBarActions.homepageRemoveOptimizationEnableRule = function(gridControl) {
    var $v_0 = gridControl.getGrid().getSelectedRows();
    if ($v_0.getLength() > 1) return false;
    var $v_1 = $v_0.get(0).getData().getEntity();
    return Mscrm.CommandBarActions.$24(Mscrm.CommandBarActions.$H($v_1, "anyoptimizationavailable"),
        Mscrm.CommandBarActions.$H($v_1, "anyoptimizationapplied"),
        Mscrm.CommandBarActions.$H($v_1, "lastactionresult"))
};
Mscrm.CommandBarActions.formRemoveOptimizationEnableRule = function(recordId) {
    if (null !== recordId)
        return Mscrm.CommandBarActions.$24(Mscrm.CommandBarActions.$V("anyoptimizationavailable"),
            Mscrm.CommandBarActions.$V("anyoptimizationapplied"),
            Mscrm.CommandBarActions.$V("lastactionresult"));
    return false
};
Mscrm.CommandBarActions.$23 = function($p0, $p1, $p2) {
    return Mscrm.CommandBarActions.$j($p0) &&
        $p2.toLowerCase() !== "optimizationinprogress" &&
        $p2.toLowerCase() !== "removalinprogress"
};
Mscrm.CommandBarActions.$24 = function($p0, $p1, $p2) {
    return Mscrm.CommandBarActions.$j($p1) &&
        $p2.toLowerCase() !== "optimizationinprogress" &&
        $p2.toLowerCase() !== "removalinprogress"
};
Mscrm.CommandBarActions.$H = function($p0, $p1) {
    if (null === $p0 || null === $p1) return null;
    var $v_0 = $p0.getAttributes().getByName($p1);
    return null !== $v_0 && null !== $v_0.getValue() ? $v_0.getValue().toString() : null
};
Mscrm.CommandBarActions.$V = function($p0) {
    var $v_0 = Xrm.Page.data.entity.attributes.get($p0);
    if (!$v_0) return null;
    else return $v_0.getValue()
};
Mscrm.CommandBarActions.$j = function($p0) {
    $p0 = $p0.toLowerCase();
    if ($p0 === "yes" || $p0 === "1" || $p0 === "true") return true;
    return false
};
Mscrm.CommandBarActions.$3o = function($p0) {
    var $v_0 = $p0.getGrid().getSelectedRows();
    if (!Mscrm.CommandBarActions.$2Z($v_0)) return true;
    var $v_1 = $v_0.get(0).getData().getEntity(),
        $v_2 = Mscrm.CommandBarActions.$j(Mscrm.CommandBarActions.$H($v_1, "anyoptimizationavailable")),
        $v_3 = Mscrm.CommandBarActions.$H($v_1, "lastactionresult").toLowerCase();
    if (!$v_2) return true;
    return false
};
Mscrm.CommandBarActions.$3p = function($p0) {
    var $v_0 = $p0.getGrid().getSelectedRows();
    if (!Mscrm.CommandBarActions.$2Z($v_0)) return true;
    var $v_1 = $v_0.get(0).getData().getEntity(),
        $v_2 = Mscrm.CommandBarActions.$H($v_1, "lastactionresult").toLowerCase();
    return false
};
Mscrm.CommandBarActions.$2Z = function($p0) {
    if (!$p0.getLength()) {
        alert(Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected"));
        return false
    }
    if ($p0.getLength() !== 1) return false;
    return true
};
Mscrm.CommandBarActions.enableDisableShippingAddress = function() {
    var $v_0 = Xrm.Page.getAttribute("willcall"),
        $v_1 = !$v_0.getValue(),
        $v_2 = Xrm.Page.ui.controls.get("shipto_composite");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_2.setVisible($v_1);
    else
        for (var $v_3 = [
                     "shipto_name", "shipto_line1", "shipto_line2", "shipto_line3", "shipto_city",
                     "shipto_stateorprovince", "shipto_postalcode", "shipto_country", "shipto_telephone", "shipto_fax",
                     "shipto_freighttermscode", "shipto_contactname"
                 ],
            $$arr_4 = $v_3,
            $$len_5 = $$arr_4.length,
            $$idx_6 = 0;
            $$idx_6 < $$len_5;
            ++$$idx_6) {
            var $v_4 = $$arr_4[$$idx_6];
            Mscrm.CommandBarActions.$R($v_4, $v_1);
            Mscrm.CommandBarActions.$R("shipto_composite_compositionLinkControl_" + $v_4, $v_1)
        }
};
Mscrm.CommandBarActions.initializeCachedProperties = function() { Mscrm.CommandBarActions.$M = {} };
Mscrm.CommandBarActions.createNewLineItem = function(lineItemEntityTypeCode,
    parentEntityTypeCode,
    parentId,
    isWriteInProduct) {
    var $v_0 = {};
    if (isWriteInProduct) $v_0["isproductoverridden"] = 1;
    Mscrm.CommandBarActions.$48(lineItemEntityTypeCode, parentEntityTypeCode, parentId, $v_0)
};
Mscrm.CommandBarActions.$2t = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Xrm.Page.getAttribute("records");
    if (IsNull($v_0)) {
        $p4(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses
            .CrmErrorResponse(null, "No parent record found.", "No parent record found."));
        return
    }
    var $v_1 = $v_0.getValue();
    if (IsNull($v_1)) {
        $p4(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses
            .CrmErrorResponse(null, "No parent record found.", "No parent record found."));
        return
    }
    var $v_2 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_1);
    if (!$v_2 && $v_2.length <= 0) {
        $p4(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses
            .CrmErrorResponse(null, "No parent record found.", "No parent record found."));
        return
    }
    var $v_3 = $v_2[0].LogicalName, $v_4 = $v_2[0].Id;
    if (Mscrm.InternalUtilities._String.isNullOrEmpty($v_3) ||
        $v_4 === Microsoft.Crm.Client.Core.Framework.Guid.get_empty()) {
        $p4(new Microsoft.Crm.Client.Core.Storage.CrmSoapServiceProxy.Responses
            .CrmErrorResponse(null, "No parent record found.", "No parent record found."));
        return
    }
    for (var $v_5 = new Array(0), $v_6 = 0; $v_6 < $p0.length; $v_6++) {
        var $v_7 = $p0[$v_6], $v_8 = {}, $v_9 = {}, $v_A = new Array(0);
        if ($p2) {
            var $v_B = new Xrm.Objects.EntityReference($p1.entityName,
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7["productid"])) {
                $v_8[$p1.itemIdAttributeName] = new Xrm.Objects
                    .EntityReference("product",
                        new Microsoft.Crm.Client.Core.Framework.Guid($v_7["productid"].toString()));
                $v_9[$p1.itemIdAttributeName] = 6;
                $v_A[$v_A.length] = $p1.itemIdAttributeName
            }
            $v_8[$p1.basketRecordLookupAttributeName] = new Xrm.Objects.EntityReference($v_3, $v_4);
            $v_9[$p1.basketRecordLookupAttributeName] = 6;
            $v_A[$v_A.length] = $p1.basketRecordLookupAttributeName;
            var $v_C = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_B,
                    $v_8,
                    $v_9,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_C.get_changedFieldNames().addRange($v_A);
            Xrm.Internal.messages.create($v_C).then(function($p1_0) {}, function($p1_0) { $p4($p1_0) })
        } else {
            var $v_D = new Xrm.Objects.EntityReference(Mscrm.CommandBarActions.$1y($v_3, false, null),
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7["productid"])) {
                $v_8["productid"] = new Xrm.Objects
                    .EntityReference("productpricelevel",
                        new Microsoft.Crm.Client.Core.Framework.Guid($v_7["productid"].toString()));
                $v_9["productid"] = 6;
                $v_A[$v_A.length] = "productid"
            }
            var $v_E = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_D,
                    $v_8,
                    $v_9,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_E.get_changedFieldNames().addRange($v_A);
            $v_5[$v_5.length] = $v_E
        }
    }
    if (!$p2) {
        var $v_F = Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities($v_5),
            $v_G = new Xrm.Objects.EntityReference($v_3, $v_4, ""),
            $v_H = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_G,
                    {},
                    {},
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        Xrm.Internal.messages.createProducts($v_F, $v_H)
            .then(function($p1_0) { $p3(true) }, function($p1_0) { $p4($p1_0) })
    } else $p3(true)
};
Mscrm.CommandBarActions.$28 = function($p0) {
    var $v_0 = Mscrm.CommandBarActions.$3d();
    if (IsNull($v_0)) return false;
    var $v_1 = $v_0;
    if ($p0 === "quote") {
        if ($v_1 === 0 || $v_1 === 1) return true
    } else if (!$v_1) return true;
    return false
};
Mscrm.CommandBarActions.$48 = function($p0, $p1, $p2, $p3) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("pricelevelid");
    !$v_0.getUserPrivilege().canRead &&
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_NO_READ_ON_PRICELIST"), null);
    if (IsNull($v_0.getValue()))
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_PRICE_LIST_NOT_SELECTED"), null);
    else if ($v_0.getIsDirty()) {
        var $v_1 = Xrm.Page.data.entity.attributes.get("name"),
            $v_2 = !Mscrm.InternalUtilities.JSTypes.isNull($v_1) ? $v_1.getValue().toString() : "";
        Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_PRICE_LIST_NOT_SAVED"), $v_2), null)
    } else {
        $p3["_CreateFromType"] = $p1.toString();
        $p3["_CreateFromId"] = $p2;
        Xrm.Utility.openEntityForm(Xrm.Internal.getEntityName($p0), "", $p3)
    }
};
Mscrm.CommandBarActions.addTransactionCurrencyFilter = function(lookup) {
    var $v_0 = null, $v_1 = "", $v_2 = null;
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) return;
    $v_0 = Xrm.Page.getAttribute("transactioncurrencyid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        $v_0 = Xrm.Page.getAttribute("transactioncurrencyid");
        $v_2 = $v_0.getValue()
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2[0].id;
    var $v_3 = '<filter type="and"><condition attribute="transactioncurrencyid" operator="like" value="';
    $v_3 += CrmEncodeDecode.CrmXmlAttributeEncode($v_1);
    $v_3 += '"/></filter>';
    lookup.addCustomFilter($v_3)
};
Mscrm.CommandBarActions.lock = function() {
    if (!Xrm.Page.data.getIsValid()) return;
    Mscrm.CommandBarActions.$J = Xrm.Page.data.entity.getEntityName();
    switch (Mscrm.CommandBarActions.$J) {
    case "salesorder":
        Xrm.Internal.messages.lockSalesOrderPricing(Microsoft.Crm.Client.Core.Framework.Guid
            .tryCreate(Xrm.Page.data.entity.getId())).then(function($p1_0) {
                Xrm.Utility.openEntityForm(Mscrm.CommandBarActions.$J, Xrm.Page.data.entity.getId(), null)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        break;
    case "invoice":
        Xrm.Internal.messages.lockInvoicePricing(Xrm.Page.data.entity.getId())
            .then(function($p1_0) {
                    Xrm.Utility.openEntityForm(Mscrm.CommandBarActions.$J, Xrm.Page.data.entity.getId(), null)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        break;
    default:
        break
    }
};
Mscrm.CommandBarActions.unlock = function() {
    if (!Xrm.Page.data.getIsValid()) return;
    Mscrm.CommandBarActions.$J = Xrm.Page.data.entity.getEntityName();
    switch (Mscrm.CommandBarActions.$J) {
    case "salesorder":
        Xrm.Internal.messages.unlockSalesOrderPricing(Microsoft.Crm.Client.Core.Framework.Guid
            .tryCreate(Xrm.Page.data.entity.getId())).then(function($p1_0) {
                Xrm.Utility.openEntityForm(Mscrm.CommandBarActions.$J, Xrm.Page.data.entity.getId(), null)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        break;
    case "invoice":
        Xrm.Internal.messages.unlockInvoicePricing(Xrm.Page.data.entity.getId())
            .then(function($p1_0) {
                    Xrm.Utility.openEntityForm(Mscrm.CommandBarActions.$J, Xrm.Page.data.entity.getId(), null)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
        break;
    default:
        break
    }
};
Mscrm.CommandBarActions.$11 = function() {
    var $v_0 = Mscrm.CommandBarActions.$1r("pricelevelid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return null;
    return $v_0[0].id
};
Mscrm.CommandBarActions.getProducts = function() {
    if (!Xrm.Page.data.getIsValid()) return;
    var $v_0 = Xrm.Page.getAttribute("opportunityid"), $v_1 = "", $v_2 = "", $v_3 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        $v_3 = $v_0.getValue();
        $v_1 = $v_3[0].id;
        $v_2 = $v_3[0].name
    }
    var $v_4 = Xrm.Page.getAttribute("transactioncurrencyid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
        $v_4 = Xrm.Page.getAttribute("transactioncurrencyid");
        $v_3 = $v_4.getValue()
    }
    var $v_5 = Mscrm.GlobalImported.CrmUri.create("/sfa/quotes/dlg_products.aspx?opportunityid=" +
            CrmEncodeDecode.CrmUrlEncode($v_1) +
            "&name=" +
            CrmEncodeDecode.CrmUrlEncode($v_2) +
            "&transactioncurrencyid=" +
            CrmEncodeDecode.CrmUrlEncode($v_3[0].id)),
        $v_6 = Mscrm.CommandBarActions.performActionAfterGetProducts,
        $v_7 = new Xrm.DialogOptions;
    $v_7.width = 400;
    $v_7.height = 200;
    Xrm.Internal.openDialog($v_5.toString(), $v_7, null, null, $v_6)
};
Mscrm.CommandBarActions.performActionAfterGetProducts = function(result) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(result)) {
        var $v_0 = Xrm.Page.data.entity.getEntityName();
        switch ($v_0) {
        case "quote":
            Xrm.Internal.messages.getProductsForQuote(new Microsoft.Crm.Client.Core.Framework
                    .Guid(result.opportunityId),
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()))
                .then(function($p1_0) { Xrm.Page.data.refresh(true) },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "salesorder":
            Xrm.Internal.messages
                .getSalesOrderProductsFromOpportunity(Microsoft.Crm.Client.Core.Framework.Guid
                    .tryCreate(result.opportunityId),
                    Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(Xrm.Page.data.entity.getId()))
                .then(function($p1_0) { Xrm.Page.data.refresh(true) },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break;
        case "invoice":
            Xrm.Internal.messages.getInvoiceProductsFromOpportunity(result.opportunityId, Xrm.Page.data.entity.getId())
                .then(function($p1_0) { Xrm.Page.data.refresh(true) },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
            break
        }
    }
};
Mscrm.CommandBarActions.$R = function($p0, $p1) {
    var $v_0 = Xrm.Page.ui.controls.get($p0);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible($p1)
};
Mscrm.CommandBarActions.setDisabled = function(attributeId, value) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(attributeId)) return;
    var $v_0 = Xrm.Page.getAttribute(attributeId);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
    for (var $v_1 = $v_0.controls.get(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) $v_1[$v_2].setDisabled(value)
};
Mscrm.CommandBarActions.initializeDateControl = function(controlName) {
    var $v_0 = Xrm.Page.getControl(controlName), $v_1 = $v_0.getAttribute();
    $v_1.setValue(new Date)
};
Mscrm.CommandBarActions.getSelectedOptionValueFromOptionSetControl = function(controlName) {
    var $v_0 = Xrm.Page.getControl(controlName), $v_1 = $v_0.getAttribute();
    return $v_1.getSelectedOption().value
};
Mscrm.CommandBarActions.isPricingLocked = function(entityName, entityId, callbackFunction) {
    if (entityName === "quote") callbackFunction(false);
    else {
        var $v_0 = "ispricelocked";
        Xrm.Internal.messages.retrieve(entityName, entityId, [$v_0]).then(function($p1_0) {
                var $v_1 = $p1_0.entity, $v_2 = false;
                if ($v_1.hasValue($v_0)) {
                    var $v_3 = $v_1.getValue($v_0);
                    $v_2 = $v_3.getValue("value") === 1
                }
                callbackFunction($v_2)
            },
            function($p1_0) {})
    }
};
Mscrm.CommandBarActions.getIdFromLookupAttribute = function(attribute) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(attribute);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) ||
        Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.getValue())) return "";
    var $v_1 = $v_0.getValue();
    return $v_1[0].id
};
Mscrm.CommandBarActions.getNameFromLookupAttribute = function(attribute) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(attribute);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) ||
        Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.getValue())) return "";
    var $v_1 = $v_0.getValue();
    return $v_1[0].name
};
Mscrm.CommandBarActions.getQuantityDecimal = function(entityName, recordId, productId, uomId, callbackFunction) {
    var $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(uomId),
        $v_1 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(productId),
        $v_2 = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(recordId);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return;
    var $v_3 = new Xrm.Objects.EntityReference(entityName, $v_2);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        Xrm.Internal.messages.getQuantityDecimal($v_3, $v_1, $v_0)
        .then(function($p1_0) { callbackFunction($p1_0.quantity) }, function($p1_0) {})
};
Mscrm.CommandBarActions.setPrevDataValueIfAttributeNotNull = function(attributeName) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(attributeName);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        Mscrm.CommandBarActions.setValueIfNotNull($v_0.getName(), "prevDataValue", $v_0.getValue())
};
Mscrm.CommandBarActions.setNumberAttributePrecisionIfNotNull = function(attributeName, value) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(attributeName);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setPrecision(value)
};
Mscrm.CommandBarActions.productOverriddenHandler = function() {
    var $v_0 = Xrm.Page.getAttribute("isproductoverridden"),
        $v_1 = !$v_0.getValue(),
        $v_2 = Xrm.Page.getAttribute("quantity"),
        $v_3 = Xrm.Page.getAttribute("quantityshipped"),
        $v_4 = Xrm.Page.getAttribute("quantitybackordered"),
        $v_5 = Xrm.Page.getAttribute("quantitycancelled"),
        $v_6 = Xrm.Page.getAttribute("productdescription"),
        $v_7 = Xrm.Page.getAttribute("priceperunit"),
        $v_8 = Xrm.Page.getAttribute("ispriceoverridden"),
        $v_9 = Xrm.Page.getAttribute("productid"),
        $v_A = Xrm.Page.getAttribute("uomid");
    $v_9.setRequiredLevel($v_1 ? "required" : "none");
    $v_A.setRequiredLevel($v_1 ? "required" : "none");
    $v_6.setRequiredLevel(!$v_1 ? "required" : "none");
    $v_7.setRequiredLevel(!$v_1 ? "required" : "none");
    if (!$v_1) {
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
            var $$dict_C = Mscrm.CommandBarActions.$M;
            for (var $$key_D in $$dict_C) {
                var $v_E = { key: $$key_D, value: $$dict_C[$$key_D] };
                Mscrm.CommandBarActions.$M[$v_E.key] = null
            }
        }
        Mscrm.CommandBarActions.setValueIfNotNull($v_8.getName(), "prevDataValue", $v_8.getValue());
        $v_8.setValue(true);
        Mscrm.CommandBarActions.setValueIfNotNull($v_9.getName(), "prevDataValue", $v_9.getValue());
        $v_9.setValue(null);
        Mscrm.CommandBarActions.setValueIfNotNull($v_A.getName(), "prevDataValue", $v_A.getValue());
        $v_A.setValue(null);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_2, Mscrm.CommandBarActions.defaultQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_3, Mscrm.CommandBarActions.defaultQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_4, Mscrm.CommandBarActions.defaultQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_5, Mscrm.CommandBarActions.defaultQuantityAccuracy);
        Mscrm.CommandBarActions.setValueIfNotNull($v_6.getName(), "prevDataValue", $v_6.getValue());
        $v_6.setValue(Mscrm.CommandBarActions.setValueSaved($v_6.getName(), "prevDataValue"))
    } else {
        Mscrm.CommandBarActions.setValueIfNotNull($v_6.getName(), "prevDataValue", $v_6.getValue());
        $v_6.setValue("");
        Mscrm.CommandBarActions.setPrecisionOnControl($v_2, Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_3, Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_4, Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions.setPrecisionOnControl($v_5, Mscrm.CommandBarActions.productQuantityAccuracy);
        var $v_F = Mscrm.CommandBarActions.setValueSaved($v_8.getName(), "prevDataValue");
        $v_8.setValue(!Mscrm.InternalUtilities.JSTypes.isNull($v_F) ? $v_F : true);
        $v_9.setValue(Mscrm.CommandBarActions.setValueSaved($v_9.getName(), "prevDataValue"));
        $v_A.setValue(Mscrm.CommandBarActions.setValueSaved($v_A.getName(), "prevDataValue"))
    }
    Mscrm.CommandBarActions.updatePriceAttributes(true);
    var $v_B = Xrm.Page.ui.controls.get("productid");
    $v_B.setDisabled(!$v_1);
    var $v_C = Xrm.Page.ui.controls.get("uomid");
    $v_C.setDisabled(!$v_1 || !$v_9.getValue());
    var $v_D = Xrm.Page.ui.controls.get("productdescription");
    $v_D.setDisabled($v_1)
};
Mscrm.CommandBarActions.closeQuoteAndOpportunity = function(newStatus,
    opportunityStatus,
    opportunityState,
    description,
    closeDate,
    activityXml,
    opportunityInfo,
    createRevision,
    closeOpportunity) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(8), $v_3 = "activityid";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 15;
    $v_1[$v_3] = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
    $v_3 = "actualend";
    $v_2[1] = $v_3;
    $v_0[$v_3] = 2;
    $v_1[$v_3] = new Date;
    $v_3 = "quoteid";
    $v_2[2] = $v_3;
    $v_0[$v_3] = 6;
    $v_1[$v_3] = new Xrm.Objects.EntityReference("quote",
        new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()));
    $v_3 = "subject";
    $v_2[3] = $v_3;
    $v_0[$v_3] = 14;
    var $v_4 = Xrm.Page.context.client.getClient() === "Mobile"
        ? Xrm.Internal.getResourceString("Quote_Closed_Subject")
        : Xrm.Internal.getResourceString("LOCID_QUOTE_CLOSED_SUBJECT");
    $v_1[$v_3] = $v_4;
    $v_3 = "description";
    $v_2[4] = $v_3;
    $v_0[$v_3] = 14;
    $v_1[$v_3] = !Mscrm.InternalUtilities.JSTypes.isNull(description)
        ? description
        : Xrm.Page.data.entity.attributes.get("description").getValue();
    $v_3 = "quotenumber";
    $v_2[5] = $v_3;
    $v_0[$v_3] = 14;
    $v_1[$v_3] = Xrm.Page.data.entity.attributes.get("quotenumber").getValue();
    $v_3 = "revision";
    $v_2[6] = $v_3;
    $v_0[$v_3] = 5;
    $v_1[$v_3] = Xrm.Page.data.entity.attributes.get("revisionnumber").getValue();
    $v_3 = "ownerid";
    $v_2[7] = $v_3;
    $v_0[$v_3] = 6;
    var $v_5 = Xrm.Page.data.entity.attributes.get("ownerid").getValue()[0];
    $v_1[$v_3] = new Xrm.Objects.EntityReference($v_5
        .entityType,
        new Microsoft.Crm.Client.Core.Framework.Guid($v_5.id));
    var $v_6 = new Xrm.Objects.EntityReference("quoteclose", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_6,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_7.get_changedFieldNames().addRange($v_2);
    Xrm.Internal.messages.closeQuote($v_7, newStatus).then(function($p1_0) {
            if (closeOpportunity)
                Mscrm.CommandBarActions.$4Z(opportunityInfo, opportunityState, opportunityStatus, createRevision);
            else Mscrm.CommandBarActions.$2M(createRevision)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$4Z = function($p0, $p1, $p2, $p3) {
    var $v_0, $v_1 = {}, $v_2 = {}, $v_3;
    if ("competitor" in $p0 && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0["competitor"])
    ) $v_3 = new Array(8);
    else $v_3 = new Array(7);
    var $v_4 = "", $v_5 = new Date, $v_6 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), $v_7 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("opportunityid").getValue())) {
        $v_0 = "opportunityid";
        $v_3[0] = $v_0;
        $v_1[$v_0] = 6;
        $v_2[$v_0] = new Xrm.Objects.EntityReference("opportunity",
            new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.attributes.get("opportunityid")
                .getValue()[0].id));
        $v_6 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.attributes.get("opportunityid")
            .getValue()[0].id);
        $v_7 = Mscrm.CommandBarActions.getNameFromLookupAttribute("opportunityid")
    }
    $v_0 = "description";
    $v_3[1] = $v_0;
    $v_1[$v_0] = 14;
    $v_2[$v_0] = !Mscrm.InternalUtilities.JSTypes.isNull($p0["description"]) ? $p0["description"].toString() : null;
    $v_0 = "subject";
    $v_3[2] = $v_0;
    $v_1[$v_0] = 14;
    $v_2[$v_0] = !Mscrm.InternalUtilities.JSTypes.isNull($v_7) ? $v_7 : null;
    $v_0 = "actualrevenue";
    $v_3[3] = $v_0;
    $v_1[$v_0] = 8;
    $v_4 = !Mscrm.InternalUtilities.JSTypes.isNull($p0["actualRevenue"]) ? $p0["actualRevenue"].toString() : null;
    $v_2[$v_0] = $v_4;
    $v_0 = "actualend";
    $v_3[4] = $v_0;
    $v_1[$v_0] = 2;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0["actualEnd"])) {
        var $v_C;
        if (Mscrm.CommandBarActions.isDateTime($p0["actualEnd"])) $v_C = $p0["actualEnd"];
        else $v_C = Xrm.Internal.parseDate($p0["actualEnd"].toString());
        $v_2[$v_0] = $v_C;
        $v_5 = $v_C
    } else $v_2[$v_0] = null;
    $v_0 = "activityid";
    $v_3[5] = $v_0;
    $v_1[$v_0] = 15;
    $v_2[$v_0] = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
    $v_0 = "ownerid";
    $v_3[6] = $v_0;
    $v_1[$v_0] = 6;
    var $v_8 = Xrm.Page.data.entity.attributes.get("ownerid").getValue()[0];
    $v_2[$v_0] = new Xrm.Objects.EntityReference($v_8
        .entityType,
        new Microsoft.Crm.Client.Core.Framework.Guid($v_8.id));
    if ("competitor" in $p0 && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0["competitor"])) {
        $v_0 = "competitorid";
        $v_3[7] = $v_0;
        $v_1[$v_0] = 6;
        $v_2[$v_0] = new Xrm.Objects.EntityReference("opportunity",
            new Microsoft.Crm.Client.Core.Framework.Guid($p0["competitor"].toString()))
    }
    var $v_9 = new Xrm.Objects
            .EntityReference("opportunityclose", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_9,
                $v_2,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_A.get_changedFieldNames().addRange($v_3);
    var $v_B = 1;
    if ($p1 === $v_B)
        Xrm.Internal.messages.winOpportunity($v_A, $p2)
            .then(function($p1_0) { Mscrm.CommandBarActions.$2X($p3, $v_4, $v_5, $v_6) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    else
        Xrm.Internal.messages.loseOpportunity($v_A, $p2)
            .then(function($p1_0) { Mscrm.CommandBarActions.$2X($p3, $v_4, $v_5, $v_6) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$2X = function($p0, $p1, $p2, $p3) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(2), $v_3 = "actualvalue";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 8;
    $v_1[$v_3] = $p1;
    $v_3 = "actualclosedate";
    $v_2[1] = $v_3;
    $v_0[$v_3] = 2;
    $v_1[$v_3] = $p2;
    var $v_4 = new Xrm.Objects.EntityReference("opportunity", $p3),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    Xrm.Internal.messages.update($v_5).then(function($p1_0) { Mscrm.CommandBarActions.$2M($p0) },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$2M = function($p0) {
    var $v_0 = [], $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_0);
    if ($p0)
        Xrm.Internal.messages.reviseQuote(new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()),
            $v_1).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0
                    .entity)) Xrm.Utility.openEntityForm("quote", $p1_0.entity.get_identifier().Id.toString());
                else Xrm.Utility.openEntityForm("quote", Xrm.Page.data.entity.getId())
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    else {
        Xrm.Utility.openEntityForm("quote", Xrm.Page.data.entity.getId());
        Mscrm.CommandBarActions.$4B()
    }
};
Mscrm.CommandBarActions.$4B = function() {
    var windowOpener = window.top.opener;
    windowOpener != null &&
        windowOpener.Xrm.Page.data != null &&
        windowOpener.Xrm.Page.data.entity != null &&
        windowOpener.Xrm.Page.data.entity.getEntityName() == Mscrm.InternalUtilities.EntityNames.Opportunity &&
        windowOpener.Xrm.Page.data.refresh(true)
};
Mscrm.CommandBarActions
    .performActionAfterAcceptQuote = function(newStatus,
        newStatusMsg,
        closeDate,
        description,
        closeOpportunity,
        useGivenRevenue,
        actualRevenue) {
        if (!IsNull(closeDate)) {
            var $v_0 = {};
            $v_0["NewStatusCode"] = newStatus;
            $v_0["CloseDate"] = closeDate;
            $v_0["Description"] = description;
            $v_0["CloseQpportunity"] = closeOpportunity;
            $v_0["UseRevenue"] = useGivenRevenue;
            $v_0["ActualRevenue"] = actualRevenue;
            var $v_1 = Xrm.Page.context.client.getClient() === "Mobile"
                    ? Xrm.Internal.getResourceString("Quote_Won_Subject")
                    : Xrm.Internal.getResourceString("LOCID_QUOTE_WON_SUBJECT"),
                $v_2 = String.format($v_1,
                    newStatusMsg,
                    Xrm.Page.data.entity.attributes.get("quotenumber").getValue(),
                    Sys.CultureInfo.InvariantCulture);
            Mscrm.CommandBarActions.$4a(closeDate, $v_0, useGivenRevenue, $v_2)
        }
    };
Mscrm.CommandBarActions.$4a = function($p0, $p1, $p2, $p3) {
    var $v_0 = Microsoft.Crm.Client.Core.Storage.Common.AllColumns.get_instance();
    Xrm.Internal.messages.winQuoteAndCreateOrder(new Microsoft.Crm.Client.Core.Framework
        .Guid(Xrm.Page.data.entity.getId()),
        $v_0,
        $p0,
        $p1["NewStatusCode"],
        $p3,
        $p1["Description"]).then(function($p1_0) {
            var $v_1 = $p1_0.entity, $v_2 = $v_1.get_identifier().Id.toString();
            if ($p1["CloseQpportunity"]) {
                var $v_3 = Xrm.Page.data.entity.attributes.get("opportunityid").getValue();
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_3[0]) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_3[0].id)) {
                    var $v_4 = Xrm.Page.context.client.getClient() === "Mobile"
                            ? Xrm.Internal.getResourceString("Close_Opportunity_Activity_Subject")
                            : Xrm.Internal.getResourceString("LOCID_OPPORTUNITY_CLOSED_SUBJECT"),
                        $v_5 = String.format($v_4, $v_1.getFieldObjectData("name").toString()),
                        $v_6 = "";
                    if ($p2) {
                        $v_6 = $p1["ActualRevenue"].toString();
                        Mscrm.CommandBarActions.$1V($p1["CloseDate"], $v_3[0].id, $v_5, $v_6, $v_2)
                    } else
                        Xrm.Internal.messages
                            .calculateActualOpportunityValue(new Microsoft.Crm.Client.Core.Framework.Guid($v_3[0].id))
                            .then(function($p2_0) {
                                    $v_6 = $p2_0.value.toString();
                                    Mscrm.CommandBarActions.$1V($p1["CloseDate"], $v_3[0].id, $v_5, $v_6, $v_2)
                                },
                                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                }
            } else
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
                    Xrm.Utility.openEntityForm("salesorder", $v_2)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$1V = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(3), $v_3 = "actualvalue";
    $v_2[0] = $v_3;
    $v_0[$v_3] = 8;
    $v_1[$v_3] = $p3;
    $v_3 = "actualclosedate";
    $v_2[1] = $v_3;
    $v_0[$v_3] = 2;
    $v_1[$v_3] = new Date;
    $v_3 = "closeprobability";
    $v_2[2] = $v_3;
    $v_0[$v_3] = 5;
    $v_1[$v_3] = 100;
    var $v_4 = new Xrm.Objects.EntityReference("opportunity", new Microsoft.Crm.Client.Core.Framework.Guid($p1)),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_1,
                $v_0,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    Xrm.Internal.messages.update($v_5).then(function($p1_0) {
            var $v_6 = {}, $v_7 = {}, $v_8 = new Array(6), $v_9 = "activityid";
            $v_8[0] = $v_9;
            $v_6[$v_9] = 15;
            $v_7[$v_9] = Microsoft.Crm.Client.Core.Framework.Guid.newGuid();
            $v_9 = "opportunityid";
            $v_8[1] = $v_9;
            $v_6[$v_9] = 6;
            $v_7[$v_9] = new Xrm.Objects.EntityReference("opportunity",
                new Microsoft.Crm.Client.Core.Framework.Guid($p1));
            $v_9 = "actualend";
            $v_8[2] = $v_9;
            $v_6[$v_9] = 2;
            $v_7[$v_9] = $p0;
            $v_9 = "subject";
            $v_8[3] = $v_9;
            $v_6[$v_9] = 14;
            $v_7[$v_9] = $p2;
            $v_9 = "actualrevenue";
            $v_8[4] = $v_9;
            $v_6[$v_9] = 8;
            $v_7[$v_9] = $p3;
            $v_9 = "ownerid";
            $v_8[5] = $v_9;
            $v_6[$v_9] = 6;
            var $v_A = Xrm.Page.data.entity.attributes.get("ownerid").getValue()[0];
            $v_7[$v_9] = new Xrm.Objects.EntityReference($v_A.entityType,
                new Microsoft.Crm.Client.Core.Framework.Guid($v_A.id));
            var $v_B = new Xrm.Objects.EntityReference("opportunityclose",
                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_C = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                    .EntityRecord($v_B,
                        $v_7,
                        $v_6,
                        {},
                        {},
                        new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_C.get_changedFieldNames().addRange($v_8);
            Xrm.Internal.messages.winOpportunity($v_C, -1)
                .then(function($p2_0) {
                        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p4) &&
                            Xrm.Utility.openEntityForm("salesorder", $p4)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.setValueIfNotNull = function(productDescription, attributeName, value) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(value))
        Mscrm.CommandBarActions.$M[productDescription + attributeName] = value
};
Mscrm.CommandBarActions.clearCacheOnPageLoad = function() { Mscrm.CommandBarActions.$M = {} };
Mscrm.CommandBarActions.setPrecisionOnControl = function(control, defaultPrecision) {
    !Mscrm.InternalUtilities.JSTypes.isNull(control) && control.setPrecision(defaultPrecision)
};
Mscrm.CommandBarActions.updatePriceAttributes = function(refreshPrice) {
    var $v_0 = Xrm.Page.getAttribute("ispriceoverridden"),
        $v_1 = !Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? $v_0.getValue() : false,
        $v_2 = Xrm.Page.getAttribute("isproductoverridden"),
        $v_3 = !$v_2.getValue(),
        $v_4 = Xrm.Page.ui.controls.get("shipto_fax"),
        $v_5 = Xrm.Page.getAttribute("priceperunit"),
        $v_6 = Xrm.Page.ui.controls.get("priceperunit"),
        $v_7 = Xrm.Page.ui.controls.get("ispriceoverridden"),
        $v_8 = Mscrm.CommandBarActions.$3Z(),
        $v_9 = Xrm.Internal.canOverridePriceEngine($v_8);
    if (!$v_9) {
        var $v_A = Xrm.Page.ui.controls.get("isproductoverridden");
        Mscrm.CommandBarActions.disableControl($v_7);
        Mscrm.CommandBarActions.disableControl($v_A);
        Mscrm.CommandBarActions.disableControl($v_6)
    } else {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6.setDisabled(!$v_1);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_7) && $v_7.setDisabled(!$v_3)
    }
    if (!$v_1) {
        Mscrm.CommandBarActions.setValueIfNotNull($v_5.getName(), "prevDataValue", $v_5.getValue());
        var $v_B = Xrm.Page.ui.getFormType();
        $v_B === 1 && Xrm.Page.context.client.getClient() === "Mobile" && $v_5.setValue(null);
        !Mscrm.InternalUtilities.JSTypes.isNull(refreshPrice) &&
            !($v_B === 1 && Xrm.Page.context.client.getClient() === "Mobile") &&
            Xrm.Page.data.refresh(true)
    } else {
        var $v_C = Mscrm.CommandBarActions.setValueSaved($v_5.getName(), "prevDataValue");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_C) && $v_5.setValue($v_C)
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
        $v_4.setDisabled(!$v_1);
        Xrm.Page.getAttribute("priceperunit").setRequiredLevel($v_1 ? "required" : "none")
    }
};
Mscrm.CommandBarActions.$3Z = function() {
    var $v_0 = Xrm.Page.data.entity.getEntityName();
    if ($v_0 === "opportunityproduct") return "opportunity";
    else if ($v_0 === "invoicedetail") return "invoice";
    else if ($v_0 === "salesorderdetail") return "salesorder";
    else if ($v_0 === "quotedetail") return "quote";
    return $v_0
};
Mscrm.CommandBarActions.setValueSaved = function(productDescription, attributeName) {
    var $v_0 = productDescription + attributeName in Mscrm.CommandBarActions.$M
        ? Mscrm.CommandBarActions.$M[productDescription + attributeName]
        : null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0;
    return null
};
Mscrm.CommandBarActions.disableControl = function(control) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(control)) {
        var $v_0 = control.getControlType();
        $v_0 !== "iframe" && $v_0 !== "webresource" && $v_0 !== "subgrid" && control.setDisabled(true)
    }
};
Mscrm.CommandBarActions.checkPriceAndQuantityNonnegative = function(eventArgs) {
    var $v_0 = Xrm.Page.getAttribute("quantity").getValue(), $v_1 = Xrm.Page.getAttribute("priceperunit").getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = parseInt($v_0.toString(), 0), $v_3 = parseInt($v_1.toString(), 0);
        if ($v_2 < 0 && $v_3 < 0) {
            var $v_4 = Mscrm.CommandBarActions.isMobileCompanionApp()
                ? "Web.SFA.QOI.QuantityAndPriceNegativeAlert"
                : "LOCID_QTY_PRICE_NEGATIVE";
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString($v_4), null);
            eventArgs.preventDefault();
            return false
        }
    }
    return true
};
Mscrm.CommandBarActions.setControlLabelTextFromResourceString = function(controlId, resourceId) {
    var $v_0 = Xrm.Page.getControl(controlId);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setLabel(Xrm.Internal.getResourceString(resourceId))
};
Mscrm.CommandBarActions.filterOptionSetValuesFromControl = function(entityName, stateCode, controlId) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() && !Xrm.Utility.isEntityOfflineSyncEnabled(entityName)) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = 1;
    if (Xrm.Utility.isMocaOffline()) {
        $v_0 = Xrm.Utility.retrieveDefaultStatusForState(entityName, stateCode);
        Mscrm.CommandBarActions.$1l(entityName, stateCode, controlId, $v_0)
    } else
        Xrm.Internal.messages.retrieveDefaultStatusForState(entityName, stateCode).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) $v_0 = $p1_0.status;
                Mscrm.CommandBarActions.$1l(entityName, stateCode, controlId, $v_0)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CommandBarActions.$1l = function($p0, $p1, $p2, $p3) {
    var $v_0 = Xrm.Page.getControl($p2), $v_1 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_1 = $v_0.getAttribute();
    var $v_2 = $v_1.getOptions();
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        $v_1.getOptions().length > 0 &&
        Xrm.Internal.getStatusOptionsFromStateCode($p0, $p1).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0) && $p1_0.length >= 1)
                    for (var $$arr_8 = $v_2, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
                        for (var $v_3 = $$arr_8[$$idx_A], $v_4 = true, $v_5 = 0; $v_5 <= $p1_0.length; $v_5++)
                            if ($v_3.value === $p1_0[$v_5]) {
                                $v_4 = false;
                                break
                            }
                        $v_4 && $v_0.removeOption($v_3.value);
                        $v_1.setValue($p3)
                    }
            },
            function() { return })
};
Mscrm.CommandBarActions.canAppendToCustomer = function() {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (Xrm.Page.context.client.getClientState() !== "Online" ||
        Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return false;
    if (Mscrm.CommandBarActions.$15) return Mscrm.CommandBarActions.$d;
    else {
        var $v_1 = Xrm.Page.data.entity.attributes.get("customerid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = $v_1.getValue();
            !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                $v_2.length &&
                Mscrm.CommandBarActions.$2g(function($p1_0) {
                    Mscrm.CommandBarActions.$d = $p1_0;
                    Mscrm.CommandBarActions.$15 = true;
                    if (Mscrm.CommandBarActions.$d) {
                        var $v_3 = 0;
                        $v_3 = window.setInterval(function() {
                                Xrm.Page.ui.refreshRibbon();
                                window.clearInterval($v_3)
                            },
                            200)
                    }
                })
        }
    }
    return false
};
Mscrm.CommandBarActions
    .PerformActionAfterCloseOrder = function(newStatus, closedDate, description, closedState, salesOrderId) {
        var $v_0 = 3, $v_1 = null;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(closedDate)) {
            var $v_2 = {},
                $v_3 = {},
                $v_4 = new Array(3),
                $v_5 = new Xrm.Objects.EntityReference("salesorder",
                    new Microsoft.Crm.Client.Core.Framework.Guid(salesOrderId)),
                $v_6 = "salesorderid";
            $v_4[0] = $v_6;
            $v_2[$v_6] = 6;
            $v_3[$v_6] = $v_5;
            $v_6 = "actualend";
            $v_4[1] = $v_6;
            $v_2[$v_6] = 2;
            $v_3[$v_6] = closedDate;
            $v_6 = "description";
            $v_4[2] = $v_6;
            $v_2[$v_6] = 14;
            $v_3[$v_6] = description;
            var $v_7 = new Xrm.Objects.EntityReference("orderclose",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
            $v_1 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_7,
                    $v_3,
                    $v_2,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_1.get_changedFieldNames().addRange($v_4);
            Xrm.Page.data.save().then(function($p1_0) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
                        if (closedState === $v_0)
                            Xrm.Internal.messages.fulfillSalesOrder($v_1, newStatus)
                                .then(function($p2_0) { Xrm.Page.data.refresh(true) },
                                    function($p2_0) {
                                        Mscrm.InternalUtilities.ClientApiUtility
                                            .actionFailedCallback($p2_0)
                                    });
                        else
                            Xrm.Internal.messages.cancelSalesOrder($v_1, newStatus)
                                .then(function($p2_0) { Xrm.Page.data.refresh(true) },
                                    function($p2_0) {
                                        Mscrm.InternalUtilities.ClientApiUtility
                                            .actionFailedCallback($p2_0)
                                    })
                },
                Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
        }
    };
Mscrm.CommandBarActions.performActionAfterCloseInvoice = function(newStatus, closedState, invoiceId) {
    if (Xrm.Page.data.entity.getIsDirty())
        Mscrm.CommandBarActions.setState(invoiceId, "invoice", closedState, newStatus);
    else Mscrm.CommandBarActions.setStateUpdate(invoiceId, "invoice", closedState, newStatus, false, null, null)
};
Mscrm.CommandBarActions.isDateTime = function(value) {
    return Date.isInstanceOfType(value) || Object.prototype.toString.call(value) === "[object Date]"
};
Mscrm.CommandBarActions.$2g = function($p0) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("customerid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $p0(false);
    else {
        var $v_1 = $v_0.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || !$v_1.length) $p0(false);
        else {
            var $v_2 = $v_1[0],
                $v_3 = new Xrm.Objects.EntityReference($v_2.entityType,
                    new Microsoft.Crm.Client.Core.Framework.Guid($v_2.id),
                    $v_2.name),
                $v_4 = new Xrm.Objects.EntityReference("systemuser",
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()));
            Xrm.Internal.messages.retrievePrincipalAccess($v_3, $v_4).then(function($p1_0) {
                    var $v_5 = $p1_0;
                    $v_5.accessRights & 16 && $p0(true)
                },
                function() { $p0(false) })
        }
    }
};
Mscrm.CommandBarActions.ContractVariables = function() {};
Mscrm.CommandBarActions.ContractVariables
    .get_isRefreshRibbon = function() { return Mscrm.CommandBarActions.ContractVariables.$B };
Mscrm.CommandBarActions.ContractVariables.set_isRefreshRibbon = function(value) {
    Mscrm.CommandBarActions.ContractVariables.$B = value;
    return value
};
Mscrm.CommandBarActions.ContractVariables
    .get_totalAllotments = function() { return Mscrm.CommandBarActions.ContractVariables.$b };
Mscrm.CommandBarActions.ContractVariables.set_totalAllotments = function(value) {
    Mscrm.CommandBarActions.ContractVariables.$b = value;
    return value
};
Mscrm.CommandBarActions.ContractVariables
    .get_isRetrieveInProgress = function() { return Mscrm.CommandBarActions.ContractVariables.$G };
Mscrm.CommandBarActions.ContractVariables.set_isRetrieveInProgress = function(value) {
    Mscrm.CommandBarActions.ContractVariables.$G = value;
    return value
};
Mscrm.CommandBarActions.ContractLineVariables = function() {};
Mscrm.CommandBarActions.ContractLineVariables
    .get_isRefreshRibbon = function() { return Mscrm.CommandBarActions.ContractLineVariables.$B };
Mscrm.CommandBarActions.ContractLineVariables.set_isRefreshRibbon = function(value) {
    Mscrm.CommandBarActions.ContractLineVariables.$B = value;
    return value
};
Mscrm.CommandBarActions.ContractLineVariables
    .get_contractStateCode = function() { return Mscrm.CommandBarActions.ContractLineVariables.$N };
Mscrm.CommandBarActions.ContractLineVariables.set_contractStateCode = function(value) {
    Mscrm.CommandBarActions.ContractLineVariables.$N = value;
    return value
};
Mscrm.CommandBarActions.ContractLineVariables
    .get_isRetrieveInProgress = function() { return Mscrm.CommandBarActions.ContractLineVariables.$G };
Mscrm.CommandBarActions.ContractLineVariables.set_isRetrieveInProgress = function(value) {
    Mscrm.CommandBarActions.ContractLineVariables.$G = value;
    return value
};
Mscrm.CommandBarActions.ContractStateCode = function() {};
Mscrm.CommandBarActions.ContractDetailStateCode = function() {};
Mscrm.CallbackReference = function() {};
Mscrm.CallbackReference.prototype = { $1R_0: null, $1Y_0: null, $2F_0: null };
Mscrm.ResolveCaseDialogResult = function() {};
Mscrm.ResolveCaseDialogResult.prototype = {
    StatusCode: 0,
    TimeSpent: 0,
    Description: null,
    Subject: null,
    ActualEnd: null
};
Mscrm.GridCommandActions = function() {};
Mscrm.GridCommandActions.resolveCase = function(selectedCaseData, gridControl) {
    var $v_0 = selectedCaseData.Id.toString();
    if (Mscrm.CommandBarActions.isMobileCompanionApp())
        $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.formatToUpper(selectedCaseData.Id);
    var $v_1 = 0;
    if (Xrm.Utility.isMocaOffline()) {
        var $v_2 = new Xrm.Objects.EntityReference("incident", new Microsoft.Crm.Client.Core.Framework.Guid($v_0));
        Xrm.Utility.retrieveEntityRecord($v_2,
            ["statecode", "statuscode"],
            function($p1_0) {
                Xrm.Utility.getValidStatusTransition("incident",
                    $v_0,
                    parseInt($p1_0.getValue("statuscode").getValue("value").toString()),
                    parseInt($p1_0.getValue("statecode").getValue("value").toString()),
                    1).then(function($p2_0) {
                        $v_1 = $p2_0;
                        Mscrm.GridCommandActions.$e($v_1, $v_0, gridControl)
                    },
                    function() { return })
            },
            function() { return })
    } else
        Xrm.Internal.messages.getValidStatusTransition($v_0, 1).then(function($p1_0) {
                $v_1 = $p1_0.result;
                Mscrm.GridCommandActions.$e($v_1, $v_0, gridControl)
            },
            function() { return })
};
Mscrm.GridCommandActions.$e = function($p0, $p1, $p2) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 600;
    var $v_1, $v_2 = null;
    switch ($p0) {
    case 1:
        $v_1 = new Xrm.ConfirmDialogStrings;
        Mscrm.InternalUtilities.DialogConfirmStrings
            .tryGetDialogStringsForEnabledMetadataDialogs("ResolveCaseNOvalidStatusReasonTransition", $v_1, null) &&
            Xrm.Dialog.openConfirmDialog($v_1, $v_0, null, null);
        break;
    case 2:
        var $v_3 = Mscrm.GridCommandActions.performActionAfterConfirmCancel;
        $v_1 = new Xrm.ConfirmDialogStrings;
        if (Mscrm.InternalUtilities.DialogConfirmStrings
            .tryGetDialogStringsForEnabledMetadataDialogs("ResolveCase", $v_1, null)) {
            $v_2 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_3, [$p1, $p2]);
            Xrm.Dialog.openConfirmDialog($v_1, $v_0, $v_2, null)
        }
        break;
    case 3:
        Mscrm.GridCommandActions.$1W($p1, $p2);
        break;
    case 4:
        var $v_4 = new Xrm.AlertDialogStrings;
        $v_4.text = Xrm.Internal.getResourceString("Error_Message_0x80044411");
        Xrm.Dialog.openAlertDialog($v_4, null, null);
        break
    }
};
Mscrm.GridCommandActions.performActionAfterConfirmCancel = function(returnValue, caseId, gridControl) {
    Mscrm.GridCommandActions.$1W(caseId, gridControl)
};
Mscrm.GridCommandActions.$1W = function($p0, $p1) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 391;
    $v_0.width = 420;
    var $v_1 = {};
    $v_1["entityId"] = $p0;
    $v_1["lastButtonClicked"] = "";
    $v_1["timeSpent"] = -1;
    $v_1["remarks_id"] = "";
    $v_1["resolution_id"] = "";
    $v_1["resolutionType_id"] = -1;
    var $v_2 = {};
    $v_2["gridControl"] = $p1;
    var $v_3 = Mscrm.GridCommandActions.resolveCaseDialogCloseCallback;
    Xrm.Dialog.openDialog("ResolveCase", $v_0, $v_1, $v_3, $v_2)
};
Mscrm.GridCommandActions.resolveClose = function() {
    var $v_0 = 2;
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    if (Xrm.Page.data.entity.getIsDirty()) {
        var $v_1 = Xrm.Page.getAttribute("resolution_id");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()) && $v_1.getValue().length > 0) {
            var $v_2 = Xrm.Page.getAttribute("billabletime_id"), $v_3 = $v_2.getValue();
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || $v_3 < 0) {
                var $v_8 = new Xrm.AlertDialogStrings;
                $v_8.text = Xrm.Internal.getResourceString("Web.CS.cases.dlg_closecase.aspx_27");
                Xrm.Dialog.openAlertDialog($v_8, null, null);
                return
            }
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("timeSpent", $v_3.toString());
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("resolution_id", $v_1.getValue().toString());
            var $v_4 = Xrm.Page.getAttribute("resolutionType_id");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue()) &&
                Mscrm.InternalUtilities.DialogUtility
                .setAttributeValue("resolutionType_id", $v_4.getValue().toString());
            var $v_5 = Xrm.Page.getAttribute("remarks_id");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue()) &&
                Mscrm.InternalUtilities.DialogUtility.setAttributeValue("remarks_id", $v_5.getValue().toString());
            var $v_6 = Xrm.Page.getAttribute("bIsTimeAllotment"), $v_7 = Xrm.Page.getAttribute("iAllotmentsRemaining");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) {
                var $v_9 = $v_2.getValue(), $v_A = $v_7.getValue();
                if ($v_6.getValue().get_value() === $v_0 && $v_A < $v_9 || $v_A < 1) {
                    confirm(Xrm.Internal.getResourceString("Case_Resolve_Dlg_Confirm_Allotments")) &&
                        Xrm.Page.ui.close();
                    return
                }
            }
            Xrm.Page.ui.close()
        } else {
            var $v_B = new Xrm.AlertDialogStrings;
            $v_B.text = Xrm.Internal.getResourceString("Web.CS.cases.dlg_closecase.aspx_50");
            Xrm.Dialog.openAlertDialog($v_B, null, null);
            Xrm.Page.ui.controls.get("resolution_id").setFocus()
        }
    }
};
Mscrm.GridCommandActions.resolveCaseDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = Mscrm.CommandBarActions.getResolveCaseDialogResult(dialogParams),
            $v_1 = dialogParams["entityId"].toString(),
            $v_2 = function() {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                var $v_3 = callbackParams["gridControl"];
                !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.refresh()
            };
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Mscrm.CommandBarActions.performResolveCase($v_0, $v_1, $v_2)
    }
};
Mscrm.GridCommandActions.activate = function(gridControl, records, entityTypeCode, callback) {
    var $v_0 = "activate";
    if (!records.length) {
        var $v_2 = new Xrm.AlertDialogStrings;
        $v_2.text = Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected");
        Xrm.Dialog.openAlertDialog($v_2, null, null);
        return
    }
    var $v_1 = Xrm.Internal.getEntityName(entityTypeCode);
    if (records.length > 1 && ($v_1 === "knowledgesearchmodel" || $v_1 === "topicmodel")) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("Grid_Action_Too_Many_Custom_Messages_Selected_Alert"),
            null);
        return
    }
    if (!Mscrm.InternalUtilities.DialogUtility.isMDDConverted($v_0, $v_1)) {
        var $v_3 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri($v_0, entityTypeCode, 1);
        $v_3.get_query()["iObjType"] = entityTypeCode;
        $v_3.get_query()["iTotal"] = records.length;
        var $v_4$8 = new Xrm.DialogOptions;
        $v_4$8.width = 600;
        $v_4$8.height = 250;
        if (Mscrm.InternalUtilities.Utilities
            .enforceStateTransitions($v_1)) if (records.length === 1) $v_3.get_query()["iId"] = records[0].Id;
        if ($v_1 === "workflow" && records.length > 0) {
            $v_3.get_query()["iObjSubtype"] = gridControl.getCellValue("type", records[0].Id);
            var $v_5 = ["rendererobjecttypecode"];
            Xrm.Internal.messages.retrieve($v_1, records[0].Id.toString(), $v_5).then(function($p1_0) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                        var $v_6 = $p1_0.entity,
                            $v_7 = !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue("rendererobjecttypecode"))
                                ? $v_6.getValue("rendererobjecttypecode").toString()
                                : null;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7))
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) &&
                            ($v_7 === "sla" ||
                                $v_7 === "slaitem" ||
                                $v_7 === "routingrule" ||
                                $v_7 === "convertrule" ||
                                $v_7 === "convertruleitem")) {
                                Xrm.Utility.alertDialog(Xrm.Internal
                                    .getResourceString("LOCID_ACTIVATE_WORKFLOW"),
                                    null);
                                return
                            }
                    }
                    Mscrm.InternalUtilities.GridUtilities
                        .executeStandardAction($v_3,
                            records,
                            $v_4$8.width,
                            $v_4$8.height,
                            Mscrm.InternalUtilities.JSTypes.isNull(callback)
                            ? Mscrm.GridCommandActions.createRefreshGridCallback(gridControl)
                            : callback)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        } else {
            if ($v_1 === "campaignresponse" && records.length > 0) $v_3.get_query()["bulkChangeStateMode"] = "1";
            else if ($v_1 === "systemuser") $v_4$8.height = 210;
            else if ($v_1 === "sla") $v_3.get_query()["iId"] = records[0].Id;
            Mscrm.InternalUtilities.GridUtilities
                .executeStandardAction($v_3,
                    records,
                    $v_4$8.width,
                    $v_4$8.height,
                    Mscrm.InternalUtilities.JSTypes.isNull(callback)
                    ? Mscrm.GridCommandActions.createRefreshGridCallback(gridControl)
                    : callback)
        }
    } else {
        for (var $v_8 = new Array(records
                     .length),
            $v_D = 0;
            $v_D < records.length;
            $v_D++)
            $v_8[$v_D] = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(records[$v_D].TypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid(records[$v_D].Id));
        var $v_9 = {};
        $v_9["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_8);
        $v_9["action"] = "activate";
        $v_9["lastButtonClicked"] = "";
        $v_9["state_id"] = -1;
        $v_9["status_id"] = -1;
        var $v_A = {};
        $v_A["gridControl"] = gridControl;
        var $v_B = null;
        if (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client.getClient() === "Outlook" ||
            Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
            $v_B = new Xrm.DialogOptions;
            $v_B.height = 250;
            $v_B.width = 600
        }
        var $v_C = function($p1_0, $p1_1) {
            Mscrm.GridCommandActions.closeSetStateDialogFromGridCallback($p1_0, $p1_1, callback)
        };
        Xrm.Dialog.openDialog("SetStateDialog", $v_B, $v_9, $v_C, $v_A)
    }
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "Activate", entityTypeCode)
};
Mscrm.GridCommandActions.assignSelectedRecords = function(gridControl, selectedRecords, entityTypeCode) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(selectedRecords) || !selectedRecords.length) {
        var $v_6 = new Xrm.AlertDialogStrings;
        $v_6.text = Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected");
        Xrm.Dialog.openAlertDialog($v_6, null, null);
        return
    }
    var $v_0 = false, $v_1 = false, $v_2 = new Xrm.DialogOptions;
    $v_2.height = 285;
    $v_2.width = 456;
    var $v_3 = Xrm.Internal.getEntityName(entityTypeCode);
    if (Xrm.Utility.isActivityType($v_3) &&
        Mscrm.InternalUtilities.Utilities.isUserDefinedEntityObjectTypeCode(entityTypeCode)) $v_0 = true;
    switch ($v_3) {
    case "queueitem":
    case "phonecall":
    case "appointment":
        $v_1 = true;
        $v_0 = true;
        break;
    case "activitypointer":
    case "email":
    case "fax":
    case "letter":
        $v_1 = true;
        $v_0 = true;
        break;
    case "incident":
    case "task":
        $v_0 = true;
        break;
    case "campaignresponse":
    case "campaignactivity":
        $v_0 = true;
        break;
    case "sla":
    case "convertrule":
    case "routingrule":
        $v_2.height = 320;
        break
    }
    if ($v_0 && !Mscrm.InternalUtilities.JSTypes.isNull(selectedRecords))
        if ($v_1)
            for (var $v_7 = new Sys.StringBuilder, $v_8 = 0; $v_8 < selectedRecords.length; $v_8++) {
                $v_8 > 0 && $v_7.append(",");
                $v_7.append(selectedRecords[$v_8].TypeCode.toString())
            }
    var $v_4 = {};
    $v_4["gridControl"] = gridControl;
    var $v_5 = {};
    $v_5["entityTypeCode"] = entityTypeCode;
    $v_5["entityName"] = $v_3;
    $v_5["lastButtonClicked"] = "";
    $v_5["ownerId"] = "";
    $v_5["ownerType"] = "";
    if ($v_0) {
        if (selectedRecords.length > 0) {
            $v_5["selectedRecordsCount"] = selectedRecords.length;
            $v_5["records"] = Mscrm.InternalUtilities.DialogUtility.serializeEntityReferences(selectedRecords);
            var $v_9 = Mscrm.GridCommandActions.assignQueueDialogCloseCallback;
            Xrm.Dialog.openDialog("AssignQueue", $v_2, $v_5, $v_9, $v_4)
        }
    } else if (selectedRecords.length > 0) {
        $v_5["selectedRecordsCount"] = selectedRecords.length;
        $v_5["records"] = Mscrm.InternalUtilities.DialogUtility.serializeEntityReferences(selectedRecords);
        var $v_A = Mscrm.GridCommandActions.assignDialogCloseCallback;
        Xrm.Dialog.openDialog("Assign", $v_2, $v_5, $v_A, $v_4)
    }
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "Assign", entityTypeCode)
};
Mscrm.GridCommandActions.assignQueueDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = null, $v_1 = dialogParams["records"].toString();
        $v_0 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_1);
        var $v_2 = dialogParams["ownerId"].toString(), $v_3 = dialogParams["ownerType"].toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            var $v_4 = null;
            if (!Mscrm.InternalUtilities.JSTypes.isNull(callbackParams) &&
                !Mscrm.InternalUtilities.JSTypes
                .isNull(callbackParams["gridControl"])) $v_4 = callbackParams["gridControl"];
            else if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) &&
                !Mscrm.InternalUtilities.JSTypes
                .isNull(dialogParams["gridControl"])) $v_4 = dialogParams["gridControl"];
            if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
                Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
                return
            }
            if ($v_0.length === 1)
                Xrm.Internal.messages.assign($v_0[0].LogicalName, $v_0[0].Id.toString(), $v_3, $v_2)
                    .then(function($p1_0) {
                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.refresh()
                        },
                        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
            else Mscrm.GridCommandActions.$1P($v_0, $v_3, $v_2, $v_4)
        }
    }
};
Mscrm.GridCommandActions.assignDialogOnLoad = function() {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = "",
        $v_3 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityName").toString();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        $v_0 = $v_3;
        $v_1 = Xrm.Internal.getEntityDisplayName($v_0);
        $v_2 = Xrm.Internal.getEntityLocalizedSetName($v_0)
    }
    var $v_4;
    if (Xrm.Page.context.client.getClient() === "Mobile") $v_4 = Xrm.Page.getControl("header_assignheader_id");
    else $v_4 = Xrm.Page.getControl("assignheader_id");
    var $v_5 = "";
    $v_5 = String.format(Xrm.Internal.getResourceString("Dialog_Assign_Title"), $v_1);
    $v_4.setLabel($v_5);
    var $v_6 = Xrm.Page.getControl("label_headerdescription"),
        $v_7 = 0,
        $v_8 = null,
        $v_9 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("records").toString();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9) && !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_9)) {
        $v_8 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_9);
        $v_7 = $v_8.length
    }
    var $v_A = "";
    if ($v_7 === 1)
        $v_A = String.format(Xrm.Internal.getResourceString("Dialog_Assign_DescriptionSingular"), $v_7, $v_1);
    else if ($v_7 > 1)
        $v_A = String.format(Xrm.Internal.getResourceString("Dialog_Assign_DescriptionPlural"), $v_7, $v_2);
    $v_6.setLabel($v_A);
    Mscrm.GridCommandActions.assignDialogAssignToChange()
};
Mscrm.GridCommandActions.assignDialogAssignClick = function() {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = Xrm.Page.data.entity.attributes.get("rdoMe_id"),
        $v_3 = $v_2.getValue(),
        $v_4 = Xrm.Page.data.entity.attributes.get("systemuserview_id"),
        $v_5 = $v_2.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || $v_5) {
        var $v_6 = $v_4.getValue();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_6) || !$v_6.length) {
            var $v_7 = new Xrm.AlertDialogStrings;
            $v_7.text = Xrm.Internal.getResourceString("Web._grid.cmds.dlg_assignallrecords.aspx_60");
            Xrm.Dialog.openAlertDialog($v_7, null, null);
            return
        } else {
            $v_0 = $v_6[0].id;
            var $v_8 = Xrm.Internal.getEntityCode($v_6[0].entityType);
            if (8 === $v_8) $v_1 = Xrm.Internal.getEntityName(8);
            else $v_1 = Xrm.Internal.getEntityName(9)
        }
    } else {
        $v_0 = Xrm.Page.context.getUserId();
        $v_1 = Xrm.Internal.getEntityName(8)
    }
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("ownerId", $v_0);
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("ownerType", $v_1);
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.GridCommandActions.assignDialogAssignToChange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("rdoMe_id"),
        $v_1 = $v_0.getValue(),
        $v_2 = Xrm.Page.getControl("systemuserview_id"),
        $v_3 = $v_0.getValue(),
        $v_4 = Xrm.Page.getControl("ok_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || $v_3)) {
        $v_2.setDisabled(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
            (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("systemuserview_id")
                    .getValue()) ||
                Mscrm.InternalUtilities.JSTypes.isNull($v_1)) &&
            $v_4.setDisabled(true)
    } else {
        $v_2.setDisabled(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setDisabled(false)
    }
};
Mscrm.GridCommandActions.assignDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = null, $v_1 = dialogParams["records"].toString();
        $v_0 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_1);
        var $v_2 = dialogParams["ownerId"].toString(), $v_3 = dialogParams["ownerType"].toString();
        if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
            Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
            var $v_4 = callbackParams["gridControl"];
            if ($v_0.length === 1)
                Xrm.Internal.messages.assign($v_0[0].LogicalName, $v_0[0].Id.toString(), $v_3, $v_2)
                    .then(function($p1_0) {
                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.refresh()
                        },
                        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
            else Mscrm.GridCommandActions.$1P($v_0, $v_3, $v_2, $v_4)
        }
    }
};
Mscrm.GridCommandActions.$1P = function($p0, $p1, $p2, $p3) {
    Xrm.Internal.messages.assignMultiple($p0, $p1, $p2)
        .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() }).then(function($p1_0) {
                for (var $$arr_5 = $p1_0
                             .responses,
                $$len_6 = $$arr_5.length,
                $$idx_7 = 0;
                $$idx_7 < $$len_6;
                ++$$idx_7) {
                    var $v_0 = $$arr_5[$$idx_7];
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.get_fault())) {
                        Mscrm.GridCommandActions.openAlertDialogForAssignMultipleError($p3);
                        return
                    }
                }
                !Mscrm.InternalUtilities.JSTypes.isNull($p3) && $p3.refresh()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.GridCommandActions.openAlertDialogForAssignMultipleError = function(gridControl) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0, null, function() { gridControl.refresh() })
};
Mscrm.GridCommandActions.addExistingProduct = function(parentGridControl) {
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull(parentGridControl))
        !Mscrm.InternalUtilities.JSTypes.isNull(parentGridControl.get_inlineEditGridControls()) &&
            parentGridControl.addButtonClickHandler()
};
Mscrm.GridCommandActions.addToQueue = function(gridControl, records, entityTypeCode) {
    for (var $v_0 = new Array(records
                 .length),
        $v_5 = 0;
        $v_5 < records.length;
        $v_5++)
        $v_0[$v_5] = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(records[$v_5].TypeCode),
            new Microsoft.Crm.Client.Core.Framework.Guid(records[$v_5].Id));
    var $v_1 = {};
    $v_1["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_0);
    $v_1["lastButtonClicked"] = "ok_id";
    var $v_2 = {};
    $v_2["gridControl"] = gridControl;
    var $v_3 = Mscrm.GridCommandActions.addToQueueDialogCloseCallback, $v_4 = null;
    if (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" ||
        Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
        $v_4 = new Xrm.DialogOptions;
        $v_4.height = 235;
        $v_4.width = 450
    }
    Xrm.Dialog.openDialog("AddToQueue", $v_4, $v_1, $v_3, $v_2)
};
Mscrm.GridCommandActions.addToQueueDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh()
    }
};
Mscrm.GridCommandActions
    .addNewFromSubGridStandard = function(gridTypeCode,
        parentEntityTypeCode,
        parentEntityId,
        primaryControl,
        gridControl) {
        if (!Mscrm.CommandBarActions
            .isMobileCompanionApp())
            Mscrm.GridCommandActions
                .addNewFromSubGridStandardLegacy(gridTypeCode, parentEntityTypeCode, parentEntityId, gridControl);
        else
            Mscrm.GridCommandActions.addNewFromSubGrid(gridTypeCode,
                parentEntityTypeCode,
                parentEntityId,
                primaryControl,
                gridControl)
    };
Mscrm.GridCommandActions
    .addNewFromSubGridStandardLegacy = function(gridTypeCode, parentEntityTypeCode, parentEntityId, gridControl) {
        if (parentEntityTypeCode === 3 && (gridTypeCode === 1084 || gridTypeCode === 1088 || gridTypeCode === 1090)) {
            var $v_0 = gridControl;
            Mscrm.GridCommandActions.$2a(gridTypeCode, $v_0)
        } else if (gridTypeCode === 4406) Mscrm.GridCommandActions.$2s();
        else if (gridTypeCode === 4200 && gridControl.get_gridType() === 3) gridControl.addButtonClickHandler();
        else {
            var $v_1 = new Xrm.LookupObject;
            $v_1.id = parentEntityId;
            $v_1.entityType = Xrm.Internal.getEntityName(parentEntityTypeCode);
            var $v_2 = {};
            $v_2["_CreateFromType"] = parentEntityTypeCode;
            $v_2["_CreateFromId"] = parentEntityId;
            if (gridTypeCode === 9945 && (parentEntityTypeCode === 9947 || parentEntityTypeCode === 9949)
            ) $v_2["SourceEntity_Type"] = Xrm.Page.data.entity.attributes.get("sourceentity").getValue();
            if (gridTypeCode === 127) {
                var $v_3 = Mscrm.GlobalImported.CrmUri.create("/CS/articles/lookup_template.aspx"),
                    $v_4 = new Xrm.DialogOptions;
                $v_4.height = 400;
                $v_4.width = 600;
                window.showInlineDialog = false;
                Xrm.Internal.openDialog($v_3.toString(), $v_4, window, null, null)
            } else
                Xrm.Utility.openQuickCreate(Xrm.Internal.getEntityName(gridTypeCode), $v_1, $v_2)
                    .then(function($p1_0) { gridControl.refresh() }, null)
        }
    };
Mscrm.GridCommandActions.$2s = function() {
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
    Xrm.Internal.openDialog($v_3.toString(), $v_4, $v_0, null, Mscrm.GridCommandActions.refreshMiniCampaign)
};
Mscrm.GridCommandActions.refreshMiniCampaign = function(result) {
    if (result) {
        var $v_0 = Xrm.Page.ui.controls.get("QuickCampaigns");
        $v_0.refresh()
    }
};
Mscrm.GridCommandActions.$2a = function($p0, $p1) {
    if (!Xrm.Page.data.getIsValid()) return;
    Xrm.Page.data.save().then(function() {
            var $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId());
            switch ($p0) {
            case 1084:
                Xrm.Internal.messages
                    .generateQuoteFromOpportunity($v_0,
                        new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["quoteid"]))
                    .then(function($p2_0) { Mscrm.GridCommandActions.$w($p2_0, "quoteid", "quote", $p1) },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
                break;
            case 1088:
                Xrm.Internal.messages
                    .generateSalesOrderFromOpportunity($v_0,
                        new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["salesorderid"]))
                    .then(function($p2_0) { Mscrm.GridCommandActions.$w($p2_0, "salesorderid", "salesorder", $p1) },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
                break;
            case 1090:
                Xrm.Internal.messages
                    .generateInvoiceFromOpportunity($v_0,
                        new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet(["invoiceid"]))
                    .then(function($p2_0) { Mscrm.GridCommandActions.$w($p2_0, "invoiceid", "invoice", $p1) },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
                break
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.GridCommandActions.$w = function($p0, $p1, $p2, $p3) {
    var $v_0 = $p0.entity;
    if ($v_0.hasValue($p1)) {
        var $v_1 = $v_0.getValue($p1).toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
            var $v_2 = new Xrm.DialogOptions;
            $v_2.openInNewWindow = true;
            Xrm.Utility.openEntityForm($p2, $v_1, null, $v_2);
            !IsNull($p3) && $p3.refresh()
        }
    }
};
Mscrm.GridCommandActions.addWriteInProduct = function(parentGridControl) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(parentGridControl))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(parentGridControl.get_inlineEditGridControls()))
            if (parentGridControl.get_inlineEditGridControls()
                .get_enableInlineEdit()) parentGridControl.get_inlineEditGridControls().onCreateNewRecordAndFocus();
            else {
                var $v_0 = Xrm.Internal.getEntityCode(parentGridControl.getEntityName()),
                    $v_1 = parentGridControl.get_inlineEditGridControls().get_entityHandler();
                $v_1.openProductLineItemForm($v_0, true)
            }
};
Mscrm.GridCommandActions.sendCurrentViewUrl = function(useEmail, gridControl) {
    var $v_0 = gridControl.getViewSelector().getCurrentView().name, $v_1 = gridControl.GetParameter("viewid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) ||
        $v_0 === Xrm.Internal.getResourceString("LOCID_SEARCH_RESULTS") ||
        gridControl.getViewSelector().getCurrentView().entityType === "userquery" ||
        Mscrm.GridCommandActions.$47($v_1)) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ERROR_INVALID_VIEW"), null);
        return
    }
    var $v_2 = Mscrm.GridCommandActions.getViewUrl(gridControl), $v_3 = $v_2.get_query()["extraqs"];
    if ($v_3 && $v_3.length > 0) {
        for (var $v_5 = "ver=", $v_6 = null, $v_7 = ($v_3.startsWith("?") ? $v_3.substr(1) : $v_3).split("&"), $v_8 = 0;
            $v_8 < $v_7.length;
            ++$v_8)
            if ($v_7[$v_8].startsWith($v_5)) {
                $v_6 = $v_7[$v_8];
                break
            }
        if ($v_6)
            if ($v_7.length === 1) delete $v_2.get_query().extraqs;
            else $v_2.get_query()["extraqs"] = $v_3.replace($v_6, "")
    }
    Mscrm.GridCommandActions.$2c(gridControl, $v_2);
    $v_1 = gridControl.GetParameter("viewid");
    var $v_4 = gridControl.GetParameter("viewtype");
    Mscrm.GridCommandActions.sendViewUrl(useEmail, $v_2, $v_0, $v_1, $v_4)
};
Mscrm.GridCommandActions.sendViewUrl = function(useEmail, uri, title, viewId, viewTypeCode) {
    var $v_0 = [], $v_1 = [];
    Array.add($v_0, "viewid");
    Array.add($v_1, viewId);
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(viewTypeCode)) {
        Array.add($v_0, "viewtype");
        Array.add($v_1, viewTypeCode)
    }
    uri = Mscrm.GridCommandActions.getPageUrl(uri, "entitylist");
    var $v_2 = new Sys.StringBuilder;
    $v_2.append(title);
    $v_2.append(" <");
    delete uri.get_query().pagemode;
    for (var $v_3 = 0; $v_3 < $v_0.length; $v_3++)
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0[$v_3]) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1[$v_3])) uri.get_query()[$v_0[$v_3]] = $v_1[$v_3];
    $v_2.append(uri.toString());
    $v_2.append(">");
    if (useEmail) Mscrm.GridCommandActions.openEmailForm("", title, $v_2.toString(), null);
    else Xrm.Internal.copyTextToClipboard($v_2.toString())
};
Mscrm.GridCommandActions.openEmailForm = function(to, subject, body, cc) {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append("mailto:");
    var $v_1 = to;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(to) && to.length > 0) {
        var $v_3 = to.lastIndexOf("@");
        if ($v_3 >= 0 && $v_3 < to.length)
            $v_1 = CrmEncodeDecode.CrmUrlEncode(to.substr(0, $v_3)) +
                "@" +
                CrmEncodeDecode.CrmUrlEncode(to.substr($v_3 + 1));
        else $v_1 = CrmEncodeDecode.CrmUrlEncode(to)
    }
    $v_0.append($v_1);
    $v_0.append("?");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(subject) && subject.length > 0) {
        $v_0.append("subject=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(subject));
        $v_0.append("&")
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(cc) && cc.length > 0) {
        $v_0.append("cc=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(cc));
        $v_0.append("&")
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(body)) {
        $v_0.append("body=");
        $v_0.append(CrmEncodeDecode.CrmUrlEncode(body))
    }
    var $v_2 = $v_0.toString();
    if ($v_2.length > 2020) Xrm.Internal.openErrorDialog(-2147204303, "");
    else Xrm.Internal.openUrl($v_2)
};
Mscrm.GridCommandActions.getViewUrl = function(gridControl) {
    var $v_0 = window.location.href, $v_1 = null;
    if (Xrm.Page.context.client.getClientState() !== "Online") {
        var $v_2 = window.location.pathname;
        $v_1 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.LegacyUtils
            .concatenateUrl(Xrm.Page.context.getClientUrl(), $v_0.substr($v_0.indexOf($v_2))))
    } else {
        $v_0 = $v_0.substring(0, $v_0.indexOf(window.location.pathname));
        $v_1 = Mscrm.GridCommandActions.getContentUrl()
    }
    if (Mscrm.InternalUtilities.JSTypes
        .isNull($v_1) &&
        $v_1.toString().endsWith("/_root/hierarchy.aspx"))
        $v_1 = Mscrm.GridCommandActions.getPageUrl($v_1, "hierarchypage");
    else $v_1 = Mscrm.GridCommandActions.getPageUrl($v_1, "entitylist");
    $v_1.get_query()["viewid"] = gridControl.getViewSelector().getCurrentView().id;
    $v_1.get_query()["viewtype"] = gridControl.getViewSelector().getCurrentView().entityType;
    if (Xrm.Page.context.client
        .getClientState() ===
        "Online")
        $v_1 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.LegacyUtils
            .concatenateUrl($v_0, $v_1.toString()));
    return $v_1
};
Mscrm.GridCommandActions.getHomepageQueryStringParams = function() {
    var $v_0 = ["etc", "etn", "viewid", "viewtype"];
    return $v_0
};
Mscrm.GridCommandActions.getRecordPageQueryStringParams = function() {
    var $v_0 = ["etc", "etn", "id"];
    return $v_0
};
Mscrm.GridCommandActions.getHierarchyPageQueryStringParams = function() {
    var $v_0 = ["etc", "etn", "id"];
    return $v_0
};
Mscrm.GridCommandActions.getContentUrl = function() {
    var $v_0;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
        .getControl("crmContentPanel"))) $v_0 = Xrm.Page.getControl("crmContentPanel").get_contentUrl();
    else $v_0 = Mscrm.GlobalImported.CrmUri.create(window.location.href);
    return $v_0
};
Mscrm.GridCommandActions.$2c = function($p0, $p1) {
    var $v_0 = $p0.GetParameter("otn");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_0) &&
        Xrm.Utility.isActivityType($v_0)) $p1.get_query()["type"] = $v_0
};
Mscrm.GridCommandActions.$47 = function($p0) {
    switch ($p0) {
    case "{ED1F0041-4F6B-4171-8757-4AC44C2FCAFA}":
    case "{8FBA639E-CD73-DF11-805D-00155DB1891A}":
    case "{A2927069-E4DC-4E8F-8FB1-D2F6C40C427E}":
    case "{8EF40D37-0868-440C-AF6B-CAC0C62E78E3}":
    case "{D234426E-1F37-4944-9255-50E19B541C4C}":
    case "{5E586DB6-222A-4ea3-8BD0-A85EE0FF52C3}":
    case "{DA5750D5-60A6-4ac7-A58A-A90CD2B1AF0A}":
    case "{AB582FB0-A846-453e-AD88-77F75CE91264}":
    case "{974C65FE-C789-48fe-B510-7AE579B9B5C6}":
    case "{6DFBA3A1-6DF3-4140-831B-B385C7E92B64}":
    case "{EF3CDB5B-71ED-4e73-92B2-ED6D47156521}":
    case "{F33B0C61-C5A9-4881-8275-C2DC63626251}":
    case "{B69375FB-61EF-433e-A4C2-031856F9A9E5}":
    case "{2EF7FF1D-8CCD-4422-86C4-4A48FE1F4B1D}":
    case "{634739A8-D8E5-41bb-B7DF-C121BD18E4B4}":
    case "{8DD58E14-0138-47d4-BA2D-A7DC76094D05}":
    case "{A596FF84-88FD-4eea-84F6-335B357E176A}":
    case "{31DAE384-A86F-DF11-986C-00155D2E3002}":
    case "{0894C803-4B27-DF11-893C-00155D26C21D}":
    case "{0E24F0D5-C2E1-4B3D-9F43-E9C817C811DF}":
    case "{01053369-B068-DF11-AE90-00155D2E3002}":
    case "{9C60DC64-4B27-DF11-893C-00155D26C21D}":
    case "{61F1B589-3DAF-45E1-96BF-9BF7B12AF252}":
    case "{2AAE0E9A-29A7-440D-8DD4-6FD37B8A156F}":
    case "{00000000-0000-0000-00AA-000010001028}":
    case "{460F1FAD-2673-DF11-986C-00155D2E3002}":
    case "{2D5E1400-F86D-DF11-986C-00155D2E3002}":
    case "{00000000-0000-0000-00AA-000010001021}":
    case "{00000000-0000-0000-00AA-000010001027}":
    case "{45B0D1D8-8D57-DF11-A5A2-00155D2A9005}":
    case "{8735625E-5657-DF11-A5A2-00155D2A9005}":
    case "{31e76b45-bfe7-447e-b4b5-50dc393bcdbe}":
    case "{b7da133f-10dd-400f-ace6-e2cad3063f0f}":
        return true
    }
    return false
};
Mscrm.GridCommandActions.sendSelectedRecordsUrl = function(useEmail, records, entityTypeCode, writeUrlOnly) {
    if (!useEmail && Sys.Browser.agent !== Sys.Browser.InternetExplorer) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_UNSUPPORTED_RIBBONACTION"), null);
        return
    }
    if (Mscrm.InternalUtilities.JSTypes.isNull(records) || !records.length) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ACTION_NOITEMSELECTED"), null);
        return
    }
    if (records.length > 10) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MAX_RECORDS_ERROR"), null);
        return
    }
    var $v_0 = window.location.href;
    if (Mscrm.InternalUtilities.JSTypes.isNull(writeUrlOnly)) writeUrlOnly = !useEmail && records.length === 1;
    var $v_1 = new Sys.StringBuilder,
        $v_2 = Mscrm.GlobalImported.CrmUri.create(window.location.href),
        $v_3 = $v_2.get_query()["oId"],
        $v_4 = false,
        $v_5 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        entityTypeCode === 4003 &&
        $v_3.toString() === "HolidaySchedule") $v_4 = true;
    else if (entityTypeCode === 4003) $v_5 = true;
    if (Xrm.Page.context.client.getClientState() !== "Online") $v_0 = Xrm.Page.context.getClientUrl();
    else if ($v_4 || $v_5) $v_0 = $v_0.substring(0, $v_0.indexOf("_root"));
    else $v_0 = $v_0.substring(0, $v_0.indexOf(window.location.pathname));
    if ($v_4) {
        $v_1 = Mscrm.GridCommandActions.$3U(records, $v_0, writeUrlOnly);
        Mscrm.GridCommandActions.$1K(useEmail, records, $v_1);
        return
    } else if ($v_5) {
        $v_1 = Mscrm.GridCommandActions.$3T(records, $v_0, writeUrlOnly);
        Mscrm.GridCommandActions.$1K(useEmail, records, $v_1);
        return
    } else
        for (var $v_6 = 0; $v_6 < records.length; $v_6++) {
            var $v_7 = records[$v_6], $v_8 = null;
            if ($v_7.TypeCode) {
                var $v_A = Mscrm.WindowInformation.getWindowInformation($v_7.TypeCode);
                $v_8 = Mscrm.InternalUtilities.JSTypes.isNull($v_A) ? null : $v_A.Url
            } else
                $v_8 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.JSTypes.isNull($v_7.action)
                    ? ""
                    : $v_7.action);
            $v_8 = Mscrm.GridCommandActions.getPageUrl($v_8, "entityrecord");
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_8)) continue;
            $v_1 = Mscrm.GridCommandActions.$t($v_1, $v_7.Name, writeUrlOnly, $v_6);
            switch ($v_7.TypeCode) {
            case 4230:
                var $v_9 = GetQueryData($v_7.TypeCode, $v_7.Id);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) $v_8.get_query()["etn"] = $v_9.ReturnType;
                $v_8.get_query()["QueryId"] = $v_7.Id;
                $v_8.get_query()["ViewType"] = $v_7.TypeCode;
                $v_8.get_query()["AutoRun"] = "true";
                break;
            default:
                if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_7.Id)) {
                    $v_8.get_query()["id"] = $v_7.Id;
                    if (Mscrm.InternalUtilities.Utilities
                        .isUserDefinedEntityObjectTypeCode($v_7.TypeCode)) $v_8.get_query()["etc"] = $v_7.TypeCode
                }
                break
            }
            Mscrm.InternalUtilities.LegacyUtils.concatenateUrl($v_0, $v_8.toString());
            $v_1 = Mscrm.GridCommandActions.$s($v_1, writeUrlOnly)
        }
    Mscrm.GridCommandActions.$1K(useEmail, records, $v_1)
};
Mscrm.GridCommandActions.$1K = function($p0, $p1, $p2) {
    if ($p0) {
        var $v_0 = $p1.length === 1 ? $p1[0].Name : "";
        Mscrm.GridCommandActions.openEmailForm("", $v_0, $p2.toString(), null)
    } else Xrm.Internal.copyTextToClipboard($p2.toString())
};
Mscrm.GridCommandActions.$s = function($p0, $p1) {
    !$p1 && $p0.append(Mscrm.InternalUtilities.Utilities.isIosDevice() ? "]" : ">");
    return $p0
};
Mscrm.GridCommandActions.$3U = function($p0, $p1, $p2) {
    for (var $v_0 = new Sys.StringBuilder,
        $v_1 = Mscrm.GlobalImported.CrmUri.create($p1 + "Tools/business/home_bc.aspx"),
        $v_2 = 0;
        $v_2 < $p0.length;
        $v_2++) {
        var $v_3 = $p0[$v_2];
        $v_0 = Mscrm.GridCommandActions.$t($v_0, $v_3.Name, $p2, $v_2);
        $v_1.get_query()["cType"] = "hs";
        $v_1.get_query()["calendarId"] = $v_3.Id;
        $v_1.get_query()["oType"] = "8";
        $v_1.get_query()["pagemode"] = "iframe";
        $v_0.append($v_1.toString());
        $v_1 = Mscrm.GlobalImported.CrmUri.create($p1 + "Tools/business/home_bc.aspx");
        $v_0 = Mscrm.GridCommandActions.$s($v_0, $p2)
    }
    return $v_0
};
Mscrm.GridCommandActions.getPageUrl = function(pageUrl, pageType) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(pageType)) return pageUrl;
    var $v_0 = null;
    switch (pageType.toUpperCase()) {
    case "ENTITYLIST":
        $v_0 = Mscrm.GridCommandActions.getHomepageQueryStringParams();
        break;
    case "ENTITYRECORD":
        $v_0 = Mscrm.GridCommandActions.getRecordPageQueryStringParams();
        break;
    case "HIERARCHYPAGE":
        $v_0 = Mscrm.GridCommandActions.getHierarchyPageQueryStringParams();
        Mscrm.GridCommandActions.updateRecordId(pageUrl);
        break;
    default:
        return pageUrl
    }
    var $v_1 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.LegacyUtils
        .concatenateUrl(Xrm.Page.context.getClientUrl(), "/main.aspx"));
    $v_1 = Mscrm.GridCommandActions.removeExtraQSParameters($v_1, pageUrl, $v_0);
    pageUrl.get_includeContextInPath() && $v_1.set_includeContextInPath(true);
    $v_1.get_query()["pagetype"] = pageType;
    delete $v_1.get_query().pagemode;
    delete pageUrl.get_query().pagetype;
    var $v_2 = pageUrl.get_query()["extraqs"], $v_3 = new Sys.StringBuilder;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        $v_3.append($v_2);
        delete pageUrl.get_query().extraqs
    }
    var $$dict_7 = pageUrl.get_query();
    for (var $$key_8 in $$dict_7) {
        var $v_4 = { key: $$key_8, value: $$dict_7[$$key_8] };
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length > 0 && $v_3.append("&");
        $v_3.append($v_4.key + "=" + pageUrl.get_query()[$v_4.key])
    }
    if ($v_3.toString().length > 0) $v_1.get_query()["extraqs"] = $v_3.toString();
    return $v_1
};
Mscrm.GridCommandActions.updateRecordId = function(pageUrl) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(pageUrl.get_query()["oId"])) {
        var $v_0 = "{" + $P_CRM(".inFocus").attr("data-recordid").toString() + "}";
        pageUrl.get_query()["oId"] = $v_0
    }
};
Mscrm.GridCommandActions.removeExtraQSParameters = function(uri, pageUrl, qsParams) {
    for (var $v_0 = 0; $v_0 < qsParams.length; $v_0++) {
        var $v_1 = qsParams[$v_0];
        if (!Mscrm.InternalUtilities.JSTypes.isNull(pageUrl.get_query()[$v_1])) {
            uri.get_query()[$v_1] = pageUrl.get_query()[$v_1];
            delete pageUrl.get_query()[$v_1]
        }
    }
    return uri
};
Mscrm.GridCommandActions.$t = function($p0, $p1, $p2, $p3) {
    if (!$p2) {
        $p3 > 0 && $p0.append("\r\n\r\n");
        $p0.append($p1);
        $p0.append("\r\n");
        $p0.append(Mscrm.InternalUtilities.Utilities.isIosDevice() ? "[" : "<")
    }
    return $p0
};
Mscrm.GridCommandActions.$3T = function($p0, $p1, $p2) {
    for (var $v_0 = new Sys.StringBuilder,
        $v_1 = Mscrm.GlobalImported.CrmUri.create($p1 + "sm/workplans/edit.aspx"),
        $v_2 = 0;
        $v_2 < $p0.length;
        $v_2++) {
        var $v_3 = $p0[$v_2];
        $v_0 = Mscrm.GridCommandActions.$t($v_0, $v_3.Name, $p2, $v_2);
        $v_1.get_query()["calendarId"] = $v_3.Id;
        $v_1.get_query()["calendarType"] = "1";
        $v_1.get_query()["mode"] = "edit";
        $v_1.get_query()["oType"] = "8";
        $v_1.get_query()["resourceId"] = Xrm.Page.context.getUserId();
        $v_0.append($v_1.toString());
        $v_1 = Mscrm.GlobalImported.CrmUri.create($p1 + "sm/workplans/edit.aspx");
        $v_0 = Mscrm.GridCommandActions.$s($v_0, $p2)
    }
    return $v_0
};
Mscrm.GridCommandActions.addNewFromSubGrid = function(gridTypeCode,
    parentEntityTypeCode,
    parentEntityId,
    primaryControl,
    gridControl) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp()) return;
    var $v_0 = Xrm.Internal.getEntityName(gridTypeCode),
        $v_1 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(parentEntityTypeCode),
            new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId)),
        $v_2 = gridControl.getRelationship(),
        $v_3 = $v_2.name,
        $v_4 = $v_2.attributeName,
        $v_5 = $v_2.roleType,
        $v_6 = $v_2.relationshipType,
        $v_7 = new Xrm.RelationshipReference($v_3, $v_4, $v_5, $v_6);
    Xrm.Utility.create($v_0, $v_1, $v_7, null, null, null)
};
Mscrm.GridCommandActions
    .addActivityToFormFromSubgridFromClassic = function(activityType, parentEntityId, parentEntityTypeCode) {
        if (!Mscrm.CommandBarActions.isMobileCompanionApp()) return;
        var $v_0 = Xrm.Internal.getEntityName(activityType),
            $v_1 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(parentEntityTypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid(parentEntityId));
        $v_1.Name = Xrm.Page.data.entity.getPrimaryAttributeValue();
        Xrm.Utility.create($v_0, $v_1, null, null, null, null)
    };
Mscrm.GridCommandActions.deactivate = function(gridControl, records, entityTypeCode, defaultCloseState, callback) {
    if (!records.length) {
        var $v_4 = new Xrm.AlertDialogStrings;
        $v_4.text = Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected");
        Xrm.Dialog.openAlertDialog($v_4, null, null);
        return
    }
    if (Xrm.Internal.isEnabledForInteractionCentric())
        for (var $v_5 = records[0].TypeCode, $v_6 = 1; $v_6 < records.length; $v_6++)
            if (records[$v_6].TypeCode === $v_5) continue;
            else {
                var $v_7 = new Xrm.AlertDialogStrings;
                $v_7.text = Xrm.Internal
                    .getResourceString("Grid_Apply_Rule_Heterogenous_Activity_Type_Records_Selected");
                Xrm.Dialog.openAlertDialog($v_7, null, null);
                return
            }
    var $v_0 = new Xrm.DialogOptions;
    $v_0.width = 600;
    $v_0.height = 250;
    var $v_1 = "", $v_2 = null, $v_3 = Xrm.Internal.getEntityName(entityTypeCode);
    Mscrm.GridCommandActions.entityLogicalName = $v_3;
    if ($v_3 === "workflow") {
        if (records.length > 0) {
            $v_2 = gridControl.getCellValue("type", records[0].Id);
            var $v_8 = ["rendererobjecttypecode"];
            Xrm.Internal.messages.retrieve($v_3, records[0].Id.toString(), $v_8).then(function($p1_0) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                        var $v_9 = $p1_0.entity,
                            $v_A = !Mscrm.InternalUtilities.JSTypes.isNull($v_9.getValue("rendererobjecttypecode"))
                                ? $v_9.getValue("rendererobjecttypecode").toString()
                                : null;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A))
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A) &&
                            ($v_A === "sla" ||
                                $v_A === "slaitem" ||
                                $v_A === "routingrule" ||
                                $v_A === "convertrule" ||
                                $v_A === "convertruleitem")) {
                                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_DEACTIVATE_WORKFLOW"),
                                    null);
                                return
                            }
                    }
                    Mscrm.GridCommandActions.$2E(gridControl,
                        records,
                        entityTypeCode,
                        defaultCloseState,
                        callback,
                        $v_0,
                        $v_1,
                        $v_2)
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    } else {
        switch ($v_3) {
        case "businessunit":
            $v_0.width = 650;
            $v_0.height = 280;
            for (var $v_C = 0; $v_C < records.length; $v_C++) $v_1 += records[$v_C].Id;
            break;
        case "discounttype":
        case "account":
        case "contact":
            $v_0.height = 200;
            break;
        case "campaignactivity":
        case "campaignresponse":
            $v_0.height = 250;
            $v_0.width = 400;
            break;
        case "activitypointer":
            for (var $v_B = records[0], $v_D = 1; $v_D < records.length; $v_D++)
                if (records[$v_D].TypeCode !== $v_B.TypeCode) {
                    Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                        .getResourceString("Grid_Apply_Rule_Heterogenous_Activity_Type_Records_Selected"));
                    return
                }
            switch ($v_B.TypeCode) {
            case 4216:
                Mscrm.InternalUtilities._Script.alert(Mscrm.CommandBarActions
                    .selectResourceString("Grid_Apply_Rule_Social_Activity_Type_Records_Selected_For_Invalid_Action",
                        "LOCID_SOCIAL_ACTIVITY_ACTIONERR"));
                return;
            case 4202:
                Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                    .getResourceString("Grid_Apply_Rule_Selected_Emails"));
                return;
            case 4401:
            case 4402:
                if (defaultCloseState === 1) {
                    Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                        .getResourceString("Grid_Apply_Rule_Selected_Records"));
                    return
                }
                break
            }
            entityTypeCode = $v_B.TypeCode;
            break
        }
        Mscrm.GridCommandActions.$2E(gridControl,
            records,
            entityTypeCode,
            defaultCloseState,
            callback,
            $v_0,
            $v_1,
            $v_2)
    }
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "Deactivate", entityTypeCode)
};
Mscrm.GridCommandActions.$2E = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    var $v_0 = "deactivate",
        $v_1 = Xrm.Internal.getEntityName($p2),
        $v_2 = Mscrm.GridCommandActions.generateStandardActionUri($v_0, $p2, 1);
    $v_2.get_query()["iObjType"] = $p2;
    $v_2.get_query()["iTotal"] = $p1.length;
    $v_2.get_query()["sIds"] = $p6;
    if ($p1.length === 1) $v_2.get_query()["iId"] = $p1[0].Id;
    $v_2.get_query()["bulkChangeStateMode"] = "1";
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p3)) $v_2.get_query()["iStateCode"] = $p3;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p7)) $v_2.get_query()["iObjSubtype"] = $p7;
    var $v_3 = new Array($p1.length);
    if (Mscrm.InternalUtilities.DialogUtility.isMDDConverted($v_0, $v_1)) {
        for (var $v_8 = 0; $v_8 < $p1.length; $v_8++) {
            var $v_9 = "";
            switch ($p1[$v_8].TypeCode) {
            case 4216:
                $v_9 = "Grid_Apply_Rule_Social_Activity_Type_Records_Selected_For_Invalid_Action";
                break;
            case 4202:
                $v_9 = "Grid_Apply_Rule_Selected_Emails";
                break;
            case 4401:
            case 4402:
                if ($p3 === 1) $v_9 = "Grid_Apply_Rule_Selected_Records";
                break
            }
            if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_9)) {
                var $v_A = new Xrm.AlertDialogStrings;
                $v_A.text = Xrm.Internal.getResourceString($v_9);
                Xrm.Dialog.openAlertDialog($v_A, null, null);
                return
            }
            $v_3[$v_8] = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p1[$v_8].TypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid($p1[$v_8].Id))
        }
        var $v_4 = {};
        $v_4["records"] = Mscrm.InternalUtilities.DialogUtility.serializeSdkEntityReferences($v_3);
        $v_4["action"] = "deactivate";
        $v_4["lastButtonClicked"] = "";
        $v_4["state_id"] = -1;
        $v_4["status_id"] = -1;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p3)) $v_4["defaultCloseState"] = $p3.toString();
        var $v_5 = {};
        $v_5["gridControl"] = $p0;
        if (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client.getClient() === "Outlook" ||
            Xrm.Page.context.client.getClient() === "UnifiedServiceDesk") {
            $p5.height = 250;
            $p5.width = 600
        }
        var $v_6 = Xrm.Internal.getEntityName($p2),
            $v_7 = function($p1_0, $p1_1) {
                Mscrm.GridCommandActions.closeSetStateDialogFromGridCallback($p1_0, $p1_1, $p4)
            };
        Xrm.Dialog.openDialog("SetStateDialog", $p5, $v_4, $v_7, $v_5)
    } else
        Mscrm.InternalUtilities.GridUtilities
            .executeStandardAction($v_2,
                $p1,
                $p5.width,
                $p5.height,
                Mscrm.InternalUtilities.JSTypes.isNull($p4)
                ? Mscrm.GridCommandActions.createRefreshGridCallback($p0)
                : $p4)
};
Mscrm.GridCommandActions.closeSetStateDialogFromGridCallback = function(dialogParams, callbackParams, callback) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"], $v_1 = null, $v_2 = dialogParams["records"].toString();
        $v_1 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_2);
        var $v_3,
            $v_4 = Microsoft.Crm.Client.Core.Framework.Guid.get_empty(),
            $v_5 = parseInt(dialogParams["state_id"].toString()),
            $v_6 = parseInt(dialogParams["status_id"].toString());
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if ($v_1.length === 1) {
            $v_3 = $v_1[0].LogicalName.toString();
            $v_4 = $v_1[0].Id;
            Xrm.Internal.messages.setState($v_3, $v_4.toString(), $v_5, $v_6).then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh();
                    !Mscrm.InternalUtilities.JSTypes.isNull(callback) && callback()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        } else if (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client
            .getClientState() ===
            "Online") Mscrm.GridCommandActions.$4Q($v_1, $v_5, $v_6, $v_0, callback);
        else Mscrm.GridCommandActions.$1B($v_1, $v_5, $v_6, $v_0, 0, true, callback)
    }
};
Mscrm.GridCommandActions.$4Q = function($p0, $p1, $p2, $p3, $p4) {
    Xrm.Internal.messages.setStateMultiple($p0, $p1, $p2)
        .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() }).then(function($p1_0) {
                for (var $$arr_6 = $p1_0
                             .responses,
                $$len_7 = $$arr_6.length,
                $$idx_8 = 0;
                $$idx_8 < $$len_7;
                ++$$idx_8) {
                    var $v_0 = $$arr_6[$$idx_8];
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.get_fault())) {
                        Mscrm.GridCommandActions.openAlertDialogForSetStateMultipleError($p3);
                        return
                    }
                }
                !Mscrm.InternalUtilities.JSTypes.isNull($p3) && $p3.refresh();
                !Mscrm.InternalUtilities.JSTypes.isNull($p4) && $p4()
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.GridCommandActions.$1B = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    if ($p4 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p5 && Mscrm.GridCommandActions.openAlertDialogForSetStateMultipleError($p3);
        $p3.refresh();
        !Mscrm.InternalUtilities.JSTypes.isNull($p6) && $p6()
    } else
        Xrm.Internal.messages.setState($p0[$p4].LogicalName.toString(), $p0[$p4].Id.toString(), $p1, $p2)
            .then(function() { Mscrm.GridCommandActions.$1B($p0, $p1, $p2, $p3, $p4 + 1, $p5, $p6) },
                function() { Mscrm.GridCommandActions.$1B($p0, $p1, $p2, $p3, $p4 + 1, false, $p6) })
};
Mscrm.GridCommandActions.openAlertDialogForSetStateMultipleError = function(gridControl) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0, null, function() { gridControl.refresh() })
};
Mscrm.GridCommandActions.detectDuplicatesAllRecords = function(gridControl, entityTypeCode, totalRecordCount) {
    var $v_0 = gridControl.GetParameter("queryapi");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_DEDUPE_CANNOT_RUN_ASSO"), null);
        return
    }
    var $v_1 = gridControl.GetParameter("viewid");
    if (Mscrm.GridCommandActions.$43($v_1)) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_DEDUPE_CANNOT_RUN"), null);
        return
    }
    if (!totalRecordCount) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_DEDUPE_NORECORDS_MSG"), null);
        return
    }
    var $v_2 = new Mscrm.DetectDuplicateArgs;
    $v_2.ObjectTypeCode = entityTypeCode;
    $v_2.iOption = 2;
    $v_2.GridXml = "<grid><parameters><viewid>" +
        CrmEncodeDecode.CrmXmlEncode(gridControl.getViewSelector().getCurrentView().id) +
        "</viewid><viewtype>" +
        CrmEncodeDecode.CrmXmlEncode(gridControl.getViewSelector().getCurrentView().entityType) +
        "</viewtype></parameters></grid>";
    $v_2.Ids = "";
    $v_2.ViewName = gridControl.getViewSelector().getCurrentView().name;
    Mscrm.GridCommandActions.$1f($v_2)
};
Mscrm.GridCommandActions.detectDuplicatesSelectedRecords = function(entityTypeCode, recordIds) {
    var $v_0 = new Mscrm.DetectDuplicateArgs;
    $v_0.ObjectTypeCode = entityTypeCode;
    $v_0.iOption = 1;
    $v_0.GridXml = "";
    $v_0.Ids = recordIds;
    $v_0.ViewName = "";
    Mscrm.GridCommandActions.$1f($v_0)
};
Mscrm.GridCommandActions.$1f = function($p0) {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create(Mscrm.InternalUtilities.LegacyUtils
            .concatenateUrl(Xrm.Page.context.getClientUrl(),
                "/WebWizard/WizardContainer.aspx?WizardId=3E4792DF-42CC-4b6b-B7E6-E197B4986EFF")),
        $v_1 = new Xrm.DialogOptions;
    $v_1.height = parseInt(Xrm.Internal.getResourceString("LOCID_DEDUPE_WINDOW_HEIGHT"));
    $v_1.width = parseInt(Xrm.Internal.getResourceString("LOCID_DEDUPE_WINDOW_WIDTH"));
    Xrm.Internal.openDialog($v_0.toString(), $v_1, $p0, null, null)
};
Mscrm.GridCommandActions.$43 = function($p0) {
    switch ($p0) {
    case "{C147F1F7-1D78-4D10-85BF-7E03B79F74FA}":
    case "{CFBCD7AF-AEE5-4E45-8ECC-C040D4020581}":
    case "{9818766E-7172-4D59-9279-013835C3DECD}":
    case "{927E6CD8-B3ED-4C20-A154-B8BD8A86D172}":
    case "{AFE23D8A-6651-474D-B8EE-90210A8231F6}":
    case "{FE961BBB-E5EA-44BA-AFF3-DB1D8BBBA18B}":
        return true
    }
    return false
};
Mscrm.GridCommandActions.doExportToExcel = function(gridControl, entityTypeCode) {
    Mscrm.GridCommandActions.$2v(gridControl, entityTypeCode)
};
Mscrm.GridCommandActions.performExcelExport = function(dialogResult, gridControl, target) {
    if (dialogResult) {
        var $v_0 = null, $v_1 = dialogResult.result;
        Mscrm.GridCommandActions.$4D("DownloadOptions");
        Mscrm.GridCommandActions.$2q();
        switch ($v_1) {
        case -1:
            return;
        case 0:
        case 1:
            var $v_2 = gridControl.get_gridXml(), $v_3 = gridControl.GetParameter("effectiveFetchXml");
            $v_3 = Mscrm.InternalUtilities.JSTypes.isNull($v_3) ? "" : $v_3;
            $v_0 = Mscrm.GridCommandActions.$2r($v_1, $v_2, $v_3, dialogResult.reimport);
            $v_0.action = Mscrm.GlobalImported.CrmUri.create("/_grid/print/print_data.aspx").toString();
            $v_0.target = target;
            break;
        case 2:
            $v_0 = Mscrm.GridCommandActions.$1c(gridControl,
                "list",
                dialogResult.useSqlQuery,
                gridControl.get_gridXml(),
                dialogResult.fetchXml,
                dialogResult.layoutXml,
                target);
            break;
        case 3:
            $v_0 = Mscrm.GridCommandActions.$1c(gridControl,
                "pivot",
                dialogResult.useSqlQuery,
                gridControl.get_gridXml(),
                dialogResult.fetchXml,
                dialogResult.layoutXml,
                target);
            break
        }
        $v_0.submit()
    }
};
Mscrm.GridCommandActions.$2v = function($p0, $p1) {
    var $v_0 = gridControl.get_pageNumber() > 1 || gridControl.get_hasMorePages();
    if (Xrm.Page.context.client.getClient() === "Outlook" &&
        $p1 === 4200 &&
        Mscrm.SessionInfo.getOutlookMajorVersion() > 11) {
        var $v_A = $p0.GetParameter("otc");
        $p1 = Number.parseInvariant($v_A)
    }
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/_grid/print/export_dlg.aspx");
    $v_1 = Mscrm.CrmUri.updateCrmUriHostAndScheme($v_1);
    $v_1.get_query()["multipage"] = $v_0 ? "1" : "0";
    $v_1.get_query()["otc"] = $p1;
    $v_1.get_query()["TotalRecordCount"] = gridControl.get_totalRecordCount().toString();
    $v_1.get_query()["PageRecordCount"] = gridControl.get_pageRecordCount().toString();
    var $v_2 = new Mscrm.GridCommandActions.ExportDialogArguments, $v_3 = $p0.get_gridXml();
    $v_2.layoutXml = Mscrm.GridCommandActions.$2f($v_3);
    var $v_4 = $p0.GetParameter("effectiveFetchXml"), $v_5 = $p0.GetParameter("fetchXml");
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_4)) $v_2.effectiveFetchXml = $v_4;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_5)) $v_2.fetchXml = $v_5;
    $v_2.gridControl = $p0;
    $v_1.get_query()["DuplicateColumnsPresent"] = Mscrm.GridCommandActions.$2x(gridControl.get_gridXml()) ? "1" : "0";
    $v_1.get_query()["viewid"] = $p0.GetParameter("viewid");
    $v_1.get_query()["viewtype"] = $p0.GetParameter("viewtype");
    $v_1.get_query()["isFetchFinal"] = Mscrm.GridCommandActions.$3z($p0) ? "1" : "0";
    var $v_6 = $p0.GetParameter("oId");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6)) $v_1.get_query()["oid"] = $v_6;
    var $v_7 = parseInt(Xrm.Internal.getResourceString("LOCID_EXPORT_WINDOW_WIDTH"), 10),
        $v_8 = parseInt(Xrm.Internal.getResourceString("LOCID_EXPORT_WINDOW_HEIGHT"), 10),
        $v_9 = new Xrm.DialogOptions;
    $v_9.height = $v_8;
    $v_9.width = $v_7;
    if (Xrm.Page.context.client.getClient() !== "Outlook") {
        var $v_B = [$p0, "exportFrame"],
            $v_C = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.GridCommandActions.performExcelExport, $v_B);
        Xrm.Internal.openDialog($v_1.toString(), $v_9, $v_2, null, $v_C)
    }
};
Mscrm.GridCommandActions.$2f = function($p0) {
    var $v_0 = new Sys.StringBuilder, $v_1 = XUI.Xml.LoadXml($p0), $v_2 = false;
    try {
        $v_0.append('<grid name="excelGrid" select="0" icon="0" preview="0">');
        var $v_3 = XUI.Xml.SelectSingleNode($v_1, "grid/parameters/layoutXml", null),
            $v_4 = XUI.Xml.GetText(layout$v_3),
            $v_5 = XUI.Xml.LoadXml($v_4),
            $v_6 = XUI.Xml.SelectSingleNode($v_5, "grid/row", null);
        $v_0.append(XUI.Xml.XMLSerializer.serializeToString($v_6));
        $v_0.append("</grid>")
    } catch ($$e_8) {
        $v_2 = true;
        $v_0.clear()
    }
    if ($v_2) {
        $v_0.append('<grid name="excelGrid" select="0" icon="0" preview="0"><row name="excelRow">');
        for (var $v_7 = XUI.Xml.SelectNodes($v_1, "grid/columns/column", null), $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
            var $v_9 = $v_7[$v_8];
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) {
                var $v_A = $v_9.attributes.getNamedItem("width"), $v_B = $v_9.attributes.getNamedItem("fieldname");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A) &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_A.nodeValue) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_B) &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_B.nodeValue)) {
                    $v_0.append('<cell width="');
                    $v_0.append(CrmEncodeDecode.CrmXmlAttributeEncode($v_A.nodeValue));
                    $v_0.append('" name="');
                    $v_0.append(CrmEncodeDecode.CrmXmlAttributeEncode(XUI.Xml.GetText($v_9)));
                    $v_0.append('" />')
                }
            }
        }
        $v_0.append("</row></grid>")
    }
    return $v_0.toString()
};
Mscrm.GridCommandActions.$2x = function($p0) {
    for (var $v_0 = XUI.Xml.LoadXml($p0),
        $v_1 = XUI.Xml.SelectNodes($v_0, "grid/columns/column", null),
        $v_2 = [],
        $v_3 = 0;
        $v_3 < $v_1.length;
        $v_3++) {
        var $v_4 = $v_1[$v_3];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            var $v_5 = $v_4.attributes.getNamedItem("isHidden");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
                !Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_5.nodeValue)) if ($v_5.nodeValue === "true") continue;
            var $v_6 = $v_4.attributes.getNamedItem("label");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_6.nodeValue)) {
                if (Array.contains($v_2, $v_6.nodeValue)) return true;
                Array.add($v_2, $v_6.nodeValue)
            }
        }
    }
    return false
};
Mscrm.GridCommandActions.$2r = function($p0, $p1, $p2, $p3) {
    var $v_0 = document.getElementsByName("gridExportStatic")[0];
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) Mscrm.GridCommandActions.$1T($v_0);
    else {
        $v_0 = document.createElement("form");
        $v_0.name = "gridExportStatic";
        $v_0.method = "post";
        $v_0.style.display = "none";
        document.body.appendChild($v_0)
    }
    Mscrm.GridCommandActions.$A($v_0, "gridXml", $p1);
    Mscrm.GridCommandActions.$A($v_0, "fetchXml", $p2);
    Mscrm.GridCommandActions.$A($v_0, "printAllPages", $p0.toString());
    Mscrm.GridCommandActions.$A($v_0, "reimport", $p3 ? "1" : "0");
    return $v_0
};
Mscrm.GridCommandActions.$2q = function() {
    var $v_0 = $get("exportFrame");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
    $v_0 = document.createElement("iframe");
    $v_0.id = "exportFrame";
    $v_0.setAttribute("name", "exportFrame");
    $v_0.setAttribute("style", "display: none");
    document.body.appendChild($v_0);
    $v_0.contentWindow.name = "exportFrame"
};
Mscrm.GridCommandActions.$1c = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    var $v_0 = document.getElementsByName("gridExportLive")[0];
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) Mscrm.GridCommandActions.$1T($v_0);
    else {
        $v_0 = document.createElement("form");
        $v_0.setAttribute("name", "gridExportLive");
        $v_0.setAttribute("method", "post");
        $v_0.setAttribute("target", $p6);
        $v_0.setAttribute("action", Mscrm.GlobalImported.CrmUri.create("/_grid/print/export_live.aspx").toString());
        document.body.appendChild($v_0)
    }
    var $v_1 = document.createElement("div");
    $v_1.style.height = "72pt";
    $v_1.style.width = "72pt";
    $v_1.style.visibility = "hidden";
    document.body.appendChild($v_1);
    var $v_2 = $v_1.offsetWidth;
    $v_1.parentNode.removeChild($v_1);
    Mscrm.GridCommandActions.$A($v_0, "gridXml", $p3);
    Mscrm.GridCommandActions.$A($v_0, "xdpi", $v_2.toString());
    Mscrm.GridCommandActions.$A($v_0, "exportType", $p1);
    Mscrm.GridCommandActions.$A($v_0, "useSqlQuery", $p2 ? "1" : "0");
    Mscrm.GridCommandActions.$A($v_0, "fetchXml", Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p4) ? "" : $p4);
    Mscrm.GridCommandActions.$A($v_0, "layoutXml", Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p5) ? "" : $p5);
    var $v_3 = $p0.GetParameter("viewid"), $v_4 = $p0.GetParameter("viewtype");
    Mscrm.GridCommandActions.$A($v_0, "viewid", $v_3);
    Mscrm.GridCommandActions.$A($v_0, "viewtype", $v_4);
    return $v_0
};
Mscrm.GridCommandActions.$4D = function($p0) {
    var $v_0 = window.top.document.getElementsByTagName("Head");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length) {
        var $v_1 = window.top.document.getElementsByTagName("Head")[0];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = $v_1.getElementsByTagName("meta");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length)
                for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                    var $v_4 = $v_2[$v_3].getAttribute("name");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4 === $p0 && $v_1.removeChild($v_2[$v_3])
                }
        }
    }
};
Mscrm.GridCommandActions.$1T = function($p0) {
    for (var $v_0 = $p0.children.length - 1; $v_0 >= 0; $v_0--) $p0.removeChild($p0.children[$v_0])
};
Mscrm.GridCommandActions.$A = function($p0, $p1, $p2) {
    var $v_0 = document.createElement("input");
    $v_0.type = "hidden";
    $v_0.name = $p1;
    $v_0.value = $p2;
    $p0.appendChild($v_0)
};
Mscrm.GridCommandActions.exportToExcel = function(gridControl, entityTypeCode) {
    if (Mscrm.InternalUtilities.Utilities.isIosDevice()) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_UNSUPPORTED_RIBBONACTION"), null);
        return
    }
    var $v_0 = false, $v_1 = gridControl.GetParameter("LoadOnDemand");
    if ($v_1 === "1") {
        $v_0 = true;
        gridControl.SetParameter("LoadOnDemand", "0")
    }
    Mscrm.GridCommandActions.doExportToExcel(gridControl, entityTypeCode);
    $v_0 && gridControl.SetParameter("LoadOnDemand", "1")
};
Mscrm.GridCommandActions.$27 = function($p0) {
    var $v_0 = $p0.GetParameter("LayoutStyle");
    return $v_0 === "LiteGridList" || $v_0 === "AssociatedLiteGridList"
};
Mscrm.GridCommandActions.canMarkComplete = function(records) {
    for (var $v_0 = 0; $v_0 < records.length; $v_0++) {
        var $v_1 = records[$v_0].TypeCode;
        if ($v_1 !== 4202 && $v_1 !== 4402 && $v_1 !== 4401) return true
    }
    return false
};
Mscrm.GridCommandActions.isBulkSaveAsCompletedValid = function(entityTypeCode) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) return true;
    var $v_0 = Xrm.Internal.getEntityName(entityTypeCode);
    if (Xrm.Utility.isActivityType($v_0)) {
        if (Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            entityTypeCode === 4200) entityTypeCode = Mscrm.GridCommandActions.$10();
        switch (entityTypeCode) {
        case 4251:
        case 4402:
        case 4401:
        case 4202:
            return false;
        default:
            return true
        }
    } else return false
};
Mscrm.GridCommandActions.isBulkSaveAsCancelledValid = function(entityTypeCode) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp()) return true;
    var $v_0 = Xrm.Internal.getEntityName(entityTypeCode);
    if (Xrm.Utility.isActivityType($v_0)) {
        if (Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            entityTypeCode === 4200) entityTypeCode = Mscrm.GridCommandActions.$10();
        switch (entityTypeCode) {
        case 4251:
        case 4202:
            return false;
        default:
            return true
        }
    } else return false
};
Mscrm.GridCommandActions.isBulkSetRegardingValid = function(entityTypeCode, records) {
    var $v_0 = Xrm.Internal.getEntityName(entityTypeCode);
    if (Xrm.Utility.isActivityType($v_0)) {
        if (Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            entityTypeCode === 4200) entityTypeCode = Mscrm.GridCommandActions.$10();
        switch (entityTypeCode) {
        case 4200:
            for (var $v_1 = 0; $v_1 < records.length; $v_1++) if (records[$v_1].TypeCode === 4402) return false;
            return true;
        case 4251:
        case 4402:
            return false;
        default:
            return true
        }
    } else return false
};
Mscrm.GridCommandActions.createRefreshGridCallback = function(gridControl) {
    var $v_0 = null;
    if (Mscrm.CommandBarActions.isMobileCompanionApp() || Xrm.Page.context.client.getClient() === "Outlook") {
        var $v_1 = Mscrm.GridCommandActions.RefreshGrid;
        $v_0 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_1, [gridControl])
    }
    return $v_0
};
Mscrm.GridCommandActions.isDraftProductFamily = function() {
    if (Xrm.Page.data.entity.getEntityName() === "product") {
        var $v_0 = Xrm.Page.getAttribute("productstructure"),
            $v_1 = Xrm.Page.getAttribute("statecode"),
            $v_2 = Xrm.Page.context.getQueryStringParameters();
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            return $v_0.getValue() === 2 &&
            ($v_1.getValue() === 2 ||
                $v_1.getValue() === 3 && Mscrm.InternalUtilities.JSTypes.isNull($v_2["revise"]))
    }
    return false
};
Mscrm.GridCommandActions.$3z = function($p0) {
    var $v_0 = $p0.GetParameter("isFetchXmlNotFinal");
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return !Boolean.parse($v_0);
    return false
};
Mscrm.GridCommandActions.bulkEdit = function(gridControl, records, entityTypeCode) {
    if (records.length === 1) {
        var $v_0 = Mscrm.InternalUtilities.LegacyUtils.getParentEntityIdParams();
        $v_0["rof"] = false;
        var $v_1 = records[0];
        Xrm.Utility.openEntityForm($v_1.Name, $v_1.Id, $v_0)
    } else {
        var $v_2;
        if (entityTypeCode === 4200) {
            for (var $v_3 = records[0], $v_4 = 1; $v_4 < records.length; $v_4++)
                if (records[$v_4].TypeCode !== $v_3.TypeCode) {
                    alert(Xrm.Internal.getResourceString("LOCID_HETROGENEOUS_ACTIVITY"));
                    return
                }
            $v_2 = Mscrm.GridCommandActions.generateStandardActionUri("bulkedit", $v_3.TypeCode, records.length)
        } else $v_2 = Mscrm.GridCommandActions.generateStandardActionUri("bulkedit", entityTypeCode, records.length);
        Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_2, records, 1e3, 700, null)
    }
};
Mscrm.GridCommandActions.shareSelectedRecords = function(gridControl, selectedRecords, entityTypeCode) {
    var $v_0 = Mscrm.GridCommandActions.generateStandardActionUri("share", entityTypeCode, selectedRecords.length);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_0, selectedRecords, 885, 500, null)
};
Mscrm.GridCommandActions.sendBulkEmail = function(gridControl, recordIds, entityTypeCode, totalRecordCount) {
    if (recordIds.length > 0) {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_bulkemail.aspx");
        $v_0.get_query()["bulkemail"] = "true";
        $v_0.get_query()["multiPage"] = "false";
        $v_0.get_query()["objectTypeCode"] = entityTypeCode;
        var $v_1 = new Xrm.DialogOptions;
        $v_1.width = 600;
        $v_1.height = 620;
        Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
    } else Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_EMAIL_NORECORDS_MSG"), null)
};
Mscrm.GridCommandActions.addExistingFromSubGridStandard = function(gridTypeCode, gridControl) {
    if (Mscrm.GridCommandActions.$1N(gridTypeCode, gridControl)) return;
    if (Mscrm.GridCommandActions.$27(gridControl) &&
    (gridControl.get_gridType() === Mscrm.GridControl.inlineSubGrid ||
        gridControl.get_gridType() === Mscrm.GridControl.associatedGrid)) gridControl.addButtonClickHandler();
    else Mscrm.Grid.addExistingFromSubGridStandard(gridTypeCode, gridControl, 0, null)
};
Mscrm.GridCommandActions
    .openAssociatedGridViewOnLiteGridStandard = function(gridControl) { gridControl.openAssociatedGrid() };
Mscrm.GridCommandActions.$1N = function($p0, $p1) {
    var $v_0 = $p1.GetParameter("viewid");
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector().getCurrentView))
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getViewSelector().getCurrentView())) {
                    $v_0 = $p1.getViewSelector().getCurrentView().id;
                    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
                        $v_0 = $v_0.replace("{", "").replace("}", "").toUpperCase();
                        $v_0 = "{" + $v_0 + "}"
                    }
                }
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_0) &&
        $v_0 === "{AE82A232-1529-4BDE-9972-93CE21A095C6}") {
        var $v_5 = Xrm.Page.data.entity.getEntityName();
        if ($v_5 === "knowledgearticle") {
            Mscrm.KnowledgeArticleCommandActions.translateArticle();
            return true
        }
        return false
    }
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_0) &&
        $v_0 === "{23FB1036-E41D-4D75-8AA7-27569B5B6512}") {
        var $v_6 = Xrm.Page.data.entity.getEntityName();
        if ($v_6 === "incident") {
            Mscrm.ServiceRefreshUtilities.openCaseResearchFlyOut();
            return true
        }
        return false
    }
    var $v_1 = $p1.GetParameter("relName"), $v_2 = $p1.GetParameter("roleOrd");
    if ($v_0 === "{58FB20FF-D5BE-406F-908E-C777E9DEDF5F}" ||
        $v_0 === "{38A21FFB-4E32-4038-BEB9-03172A0DD034}" ||
        $v_0 === "{FC71D030-7A82-4B51-BDE8-29B24B7ABF9D}") {
        Mscrm.GridCommandActions.checkInParentAndInvoke("locAssocObjMember", $p0, "", $v_1, $v_2, null, 0);
        return true
    }
    var $v_3 = Xrm.Page.data.entity.getId(), $v_4 = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName());
    switch ($v_1) {
    case "campaignlist_association":
        if ($p0 === 4300) {
            Mscrm.GridCommandActions.checkInParentAndInvoke("locAssocObjCampaign",
                $p0,
                "subType=targetLists",
                $v_1,
                $v_2,
                null,
                0);
            return true
        }
        return false;
    case "campaignactivitylist_association":
        if ($v_0 === "{BDD93547-53F6-4609-B591-9F48CE86295F}") return false;
        else {
            Mscrm.GridCommandActions.checkInParentAndInvoke("locAssocObjCampaignActivity",
                $p0,
                "",
                $v_1,
                $v_2,
                $v_3,
                $v_4);
            return true
        }
    }
    return false
};
Mscrm.GridCommandActions.$1b = function($p0, $p1, $p2) {
    if (Mscrm.InternalUtilities.JSTypes.isNull($p2)) $p2 = true;
    if (!$p2 || !(Xrm.Page.context.client.getClient() === "Outlook")) {
        if (Mscrm.InternalUtilities.JSTypes.isNull($p1)) $p1 = window;
        var $v_0 = $p1[$p0];
        return $v_0
    }
    return null
};
Mscrm.GridCommandActions.checkInParentAndInvoke = function(funcName,
    gridTypeCode,
    subtype,
    relationshipName,
    role,
    parentId,
    parentObjectTypeCode) {
    var $v_0 = window;
    if (Xrm.Internal.isTurboForm()) {
        $v_0 = Mscrm.GridCommandActions.getTurboFormCustomScriptWindow();
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_0 = window
    }
    var $v_1 = Mscrm.GridCommandActions.$1b(funcName, $v_0, false);
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        $v_1 = Mscrm.GridCommandActions.$1b(funcName, window.parent, false);
    $v_1(gridTypeCode, subtype, relationshipName, role, parentId, parentObjectTypeCode)
};
Mscrm.GridCommandActions.getTurboFormCustomScriptWindow = function() {
    var $v_0 = $get("customScriptsFrame");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0.contentWindow;
    return null
};
Mscrm.GridCommandActions.addExistingFromSubGridAssociated = function(gridTypeCode, gridControl) {
    var $v_0 = gridControl.get_gridType();
    if (Mscrm.GridCommandActions.$1N(gridTypeCode, gridControl)) return;
    Mscrm.GridCommandActions.$27(gridControl) &&
        ($v_0 === Mscrm.InternalUtilities.GridControlType.InlineSubGrid ||
            $v_0 === Mscrm.InternalUtilities.GridControlType.Associated) &&
        gridControl.addButtonClickHandler()
};
Mscrm.GridCommandActions.canEnableSaveButton = function(gridControl) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp())
        try {
            if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
                var $v_0 = $find(gridControl.get_id() + "_filterSet");
                if (!Mscrm.InternalUtilities.JSTypes
                    .isNull($v_0)) return $v_0.canEnableFilters() && $v_0.isFilterEnabled()
            }
        } catch ($$e_2) {
        }
    return false
};
Mscrm.GridCommandActions.disableButtonsWhenChartMaximized = function(gridControl) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp())
        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
            var $v_0 = $find(gridControl.get_id() + "_paneControl");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) if ($v_0.getParameter("paneSize") === "2") return false
        }
    return true
};
Mscrm.GridCommandActions.openDelveLink = function() {
    var $v_0 = Xrm.Internal.getOrganizationSetting("delveUrl");
    Xrm.Internal.openUrl($v_0)
};
Mscrm.GridCommandActions.isEntitlementActive = function() {
    var $v_0 = true;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) && !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui))
        if (Xrm.Page.data.entity.getEntityName() === "entitlement")
            if (Xrm.Page.ui.getFormType() === 4) $v_0 = true;
            else $v_0 = false;
        else {
            var $v_1 = Xrm.Page.getAttribute("statecode");
            if (Xrm.Page.ui.getFormType() === 4 &&
                (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.getInvariantText() === "Inactive")) $v_0 = false;
            else $v_0 = true
        }
    return $v_0
};
Mscrm.GridCommandActions.closeActivityFromGrid = function(gridControl, records) {
    for (var $v_0 = null, $v_1 = null, $$arr_4 = records, $$len_5 = $$arr_4.length, $$idx_6 = 0;
        $$idx_6 < $$len_5;
        ++$$idx_6) {
        var $v_2 = $$arr_4[$$idx_6];
        $v_0 = $v_2.Id;
        $v_1 = Xrm.Internal.getEntityName($v_2.TypeCode);
        Mscrm.CommandBarActions.changeState("deactivate", $v_0, $v_1)
    }
};
Mscrm.GridCommandActions.$10 = function() { return getOutlookHostedWindow().getParameter("viewOtc") };
Mscrm.GridCommandActions.setRegarding = function(gridControl, records, entityTypeCode) {
    var $v_0 = 500, $v_1 = 240, $v_2 = {};
    $v_2["entityTypeCode"] = entityTypeCode.toString();
    $v_2["records"] = Mscrm.InternalUtilities.DialogUtility.serializeEntityReferences(records);
    var $v_3 = new Xrm.DialogOptions;
    $v_3.height = $v_1;
    $v_3.width = $v_0;
    var $v_4 = {};
    $v_4["gridControl"] = gridControl;
    var $v_5 = Mscrm.InternalUtilities.DialogUtility.closeDialogFromGridCallback;
    Xrm.Dialog.openDialog("SetRegarding", $v_3, $v_2, $v_5, $v_4)
};
Mscrm.GridCommandActions.setRegardingOnLoad = function() {
    var $v_0 = Xrm.Page.ui.controls.get("label_DialogDescription"),
        $v_1 = 0,
        $v_2 = null,
        $v_3 = Xrm.Page.getAttribute("records");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3.getValue())) {
        $v_2 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_3.getValue());
        $v_1 = $v_2.length
    }
    var $v_4 = "";
    if ($v_1 === 1)
        $v_4 = String.format(Xrm.Internal.getResourceString("Dialog_SetRegarding_Description"),
            $v_1,
            Xrm.Internal.getEntityDisplayName("activitypointer"));
    else
        $v_4 = String.format(Xrm.Internal.getResourceString("Dialog_SetRegarding_Description"),
            $v_1,
            Xrm.Internal.getEntityLocalizedSetName("activitypointer"));
    $v_0.setLabel($v_4);
    var $v_5 = Xrm.Page.getControl("ok_id");
    $v_5.setDisabled(true)
};
Mscrm.GridCommandActions.setRegardingDialogSetClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = null,
        $v_1 = "",
        $v_2 = 0,
        $v_3 = Xrm.Page.getAttribute("records"),
        $v_4 = Xrm.Page.data.entity.attributes.get("regarding_id"),
        $v_5 = $v_4.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5))
        if (Mscrm.CommandBarActions.isWebClient() || Mscrm.CommandBarActions.isOutlookClient()) {
            var $v_6 = $v_5[0];
            $v_1 = $v_6.id;
            $v_2 = parseInt($v_6.type)
        } else {
            var $v_7 = $v_4.getValue();
            $v_1 = $v_7.Id.toString();
            $v_2 = $v_7.TypeCode
        }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3.getValue())) {
        $v_0 = Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences($v_3.getValue());
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if ($v_0.length === 1) Mscrm.GridCommandActions.$4I($v_0[0].Id.toString(), $v_0[0].TypeCode, $v_1, $v_2, true);
        else if (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() === "Online") Mscrm.GridCommandActions.$4H($v_0, $v_1, $v_2);
        else Mscrm.GridCommandActions.$k($v_0, $v_1, $v_2, 0, true)
    }
};
Mscrm.GridCommandActions.setRegardingDialogRegardingChange = function() {
    var $v_0 = Xrm.Page.getControl("ok_id"),
        $v_1 = Xrm.Page.data.entity.attributes.get("regarding_id"),
        $v_2 = $v_1.getValue();
    $v_0.setDisabled(Mscrm.InternalUtilities.JSTypes.isNull($v_2))
};
Mscrm.GridCommandActions.$4I = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Xrm.Internal.getEntityName($p3),
        $v_1 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid($p2)),
        $v_2 = Xrm.Internal.getEntityName($p1);
    Xrm.Internal.messages.retrieve($v_2, $p0, ["regardingobjectid", "regardingobjecttypecode"]).then(function($p1_0) {
            var $v_3 = $p1_0.entity;
            $v_3.initializeValue("regardingobjectid", $v_1, 6);
            $v_3.initializeValue("regardingobjecttypecode", $p3, 5);
            $v_3.get_changedFieldNames().addRange(["regardingobjectid", "regardingobjecttypecode"]);
            Xrm.Internal.messages.update($v_3).then(function($p2_0) {
                    if ($p4) {
                        Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Page.ui.close()
                    }
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.GridCommandActions.$4H = function($p0, $p1, $p2) {
    for (var $v_0 = Xrm.Internal.getEntityName($p2),
        $v_1 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid($p1)),
        $v_2 = new Sys.StringBuilder,
        $v_6 = 0;
        $v_6 < $p0.length;
        $v_6++) $v_2.append("<value>" + CrmEncodeDecode.CrmXmlEncode($p0[$v_6].Id.toString()) + "</value>");
    var $v_3 =
            "<fetch mapping='logical' distinct='true'><entity name='activitypointer'><attribute name='activityid'/><attribute name='regardingobjectid'/><attribute name='regardingobjecttypecode'/><attribute name='activitytypecode'/><filter type='and'><condition attribute='activityid' operator='in'>" + $v_2 + "</condition></filter></entity></fetch>",
        $v_4 = null,
        $v_5 = null;
    Xrm.Internal.messages.retrieveMultiple($v_3).then(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                $v_4 = $p1_0.entityCollection;
                if (!$v_4.get_entities().length) {
                    Mscrm.GridCommandActions.openAlertDialogForSetRegardingMultipleError();
                    return
                }
                $v_5 = new Array($v_4.get_entities().length);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    for (var $v_7 = 0; $v_7 < $v_4.get_entities().length; $v_7++) {
                        var $v_8 = $v_4.get_entities()[$v_7];
                        $v_8.initializeValue("regardingobjectid", $v_1, 6);
                        $v_8.initializeValue("regardingobjecttypecode", $p2, 5);
                        $v_8.get_changedFieldNames().addRange(["regardingobjectid", "regardingobjecttypecode"]);
                        $v_5[$v_7] = $v_8
                    }
                    Xrm.Internal.messages.updateMultiple($v_5).then(function($p2_0) {
                            for (var $$arr_E = $p2_0.responses, $$len_F = $$arr_E.length, $$idx_G = 0;
                                $$idx_G < $$len_F;
                                ++$$idx_G) {
                                var $v_9 = $$arr_E[$$idx_G];
                                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9.get_fault()) ||
                                    $p2_0.responses.length !== $p0.length) {
                                    Mscrm.GridCommandActions.openAlertDialogForSetRegardingMultipleError();
                                    return
                                }
                            }
                            Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                            Xrm.Page.ui.close()
                        },
                        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
                }
            }
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.GridCommandActions.openAlertDialogForSetRegardingMultipleError = function() {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0,
        null,
        function() {
            Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close()
        })
};
Mscrm.GridCommandActions.$k = function($p0, $p1, $p2, $p3, $p4) {
    if ($p3 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        if (!$p4) {
            Mscrm.GridCommandActions.openAlertDialogForSetRegardingMultipleError();
            return
        }
        Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
        Xrm.Page.ui.close()
    } else {
        var $v_0 = Xrm.Internal.getEntityName($p2),
            $v_1 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid($p1)),
            $v_2 = Xrm.Internal.getEntityName($p0[$p3].TypeCode);
        Xrm.Internal.messages.retrieve($v_2, $p0[$p3].Id.toString(), ["regardingobjectid", "regardingobjecttypecode"])
            .then(function($p1_0) {
                    var $v_3 = $p1_0.entity;
                    $v_3.initializeValue("regardingobjectid", $v_1, 6);
                    $v_3.initializeValue("regardingobjecttypecode", $p2, 5);
                    $v_3.get_changedFieldNames().addRange(["regardingobjectid", "regardingobjecttypecode"]);
                    Xrm.Internal.messages.update($v_3).then(function() {
                            Mscrm.GridCommandActions.$k($p0, $p1, $p2, $p3 + 1, $p4)
                        },
                        function() { Mscrm.GridCommandActions.$k($p0, $p1, $p2, $p3 + 1, false) })
                },
                function() { Mscrm.GridCommandActions.$k($p0, $p1, $p2, $p3 + 1, false) })
    }
};
Mscrm.GridCommandActions.deleteRecords = function(gridControl, records, entityTypeCode) {
    var $v_0 = false,
        $v_1 = 570,
        $v_2 = 205,
        $v_3 = 250,
        $v_4 = false,
        $v_5 = null,
        $v_6 = null,
        $v_7 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri("delete", entityTypeCode, records.length),
        $v_8 = Xrm.Internal.getEntityName(entityTypeCode),
        $v_9 = new Xrm.ConfirmDialogStrings;
    if (records.length <= 0) {
        var $v_A = new Xrm.AlertDialogStrings;
        $v_A.text = String.format(Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected"));
        Xrm.Dialog.openAlertDialog($v_A, null, null);
        return
    }
    if (!Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("delete", $v_9, $v_8, records.length)) {
        var $v_B = Mscrm.GridCommandActions.PerformActionAfterDeleteFromGrid;
        $v_6 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_B, [gridControl, records])
    }
    if (Xrm.Utility.isActivityType($v_8)) {
        $v_0 = true;
        $v_4 = true
    }
    if ($v_8 === "workflow") {
        for (var $v_C = new Sys.StringBuilder, $v_D = new Sys.StringBuilder, $v_G = 0; $v_G < records.length; $v_G++) {
            $v_D.append("<value>" + CrmEncodeDecode.CrmXmlEncode(records[$v_G].Id) + "</value>");
            $v_G > 0 && $v_C.append(";");
            $v_C.append(records[$v_G].Id)
        }
        var $v_E =
                "<fetch mapping='logical' distinct='true'><entity name='workflow'><attribute name='workflowid'/><attribute name='rendererobjecttypecode'/><filter type='and'><condition attribute='workflowid' operator='in'>" + $v_D + "</condition></filter></entity></fetch>",
            $v_F = null;
        Xrm.Internal.messages.retrieveMultiple($v_E).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    $v_F = $p1_0.entityCollection;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_F))
                        for (var $v_H = 0; $v_H < $v_F.get_entities().length; $v_H++) {
                            var $v_I = !Mscrm.InternalUtilities.JSTypes
                                .isNull($v_F.get_entities()[$v_H].getValue("rendererobjecttypecode"))
                                ? $v_F.get_entities()[$v_H].getValue("rendererobjecttypecode").toString()
                                : null;
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_I))
                                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_I) &&
                                ($v_I === "sla" ||
                                    $v_I === "slaitem" ||
                                    $v_I === "routingrule" ||
                                    $v_I === "convertrule" ||
                                    $v_I === "convertruleitem")) {
                                    Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_DELETE_WORKFLOW"),
                                        null);
                                    return
                                }
                        }
                    $v_7.get_query()["sIds"] = $v_C.toString();
                    Mscrm.GridCommandActions.$2D(gridControl,
                        records,
                        $v_0,
                        $v_1,
                        $v_2,
                        $v_3,
                        $v_4,
                        $v_5,
                        $v_6,
                        $v_7,
                        $v_8,
                        $v_9)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    } else {
        switch ($v_8) {
        case "bulkoperation":
            var $v_M = gridControl.GetParameter("viewid");
            switch ($v_M) {
            case "{FD4DF17C-386E-4E29-9D31-529A568A3BBC}":
            case "{BA825777-1A7B-4837-8778-B86904D1115C}":
            case "{83DC2389-0A4C-4249-A5D3-BA1AB401FF1C}":
            case "{2C9E8543-3E3B-4F8D-AEDF-B8A43446619D}":
                $v_7.get_query()["iObjSubType"] = "7";
                break
            }
            break;
        case "queue":
            $v_7 = Mscrm.InternalUtilities.GridUtilities
                .generateStandardActionUri("delete_queue", entityTypeCode, records.length);
            if (records.length === 1) $v_7.get_query()["sIds"] = records[0].Id.toString();
            $v_1 = 480;
            break;
        case "importmap":
            for (var $v_N = new Sys.StringBuilder, $v_O = 0; $v_O < records.length; $v_O++) {
                $v_O > 0 && $v_N.append(";");
                $v_N.append(records[$v_O].Id)
            }
            $v_7 = Mscrm.InternalUtilities.GridUtilities
                .generateStandardActionUri("delete_importmap", entityTypeCode, records.length);
            $v_7.get_query()["sIds"] = $v_N.toString();
            $v_0 = true;
            break;
        case "recurringappointmentmaster":
            var $v_P = 1, $v_Q = gridControl.GetParameter("viewid");
            switch ($v_Q) {
            case "{4805B7C1-218B-4FAD-95A5-D5708E3CCFC0}":
            case "{E9D20D36-01F3-4830-BB29-3D8A6E9DB557}":
                $v_P = 2;
                break
            }
            $v_7 = Mscrm.GlobalImported.CrmUri.create("/activities/act_dlgs/dlg_seriesaction.aspx");
            $v_7.get_query()["actionType"] = "6";
            $v_7.get_query()["iTotal"] = records.length;
            $v_7.get_query()["insDel"] = $v_P === 1;
            break;
        case "appointment":
        case "activitypointer":
            if (records.length === 1)
                if (typeof gridControl.getCellValue !== "undefined") {
                    var $v_R = gridControl.getCellValue("instancetypecode", records[0].Id);
                    if ($v_R !== "0" && $v_R !== "1") {
                        if (Mscrm.InternalUtilities.JSTypes.isNull($v_R)) {
                            if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
                                Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
                                return
                            }
                            Xrm.Internal.messages.retrieve($v_8, records[0].Id.toString(), ["instancetypecode"])
                                .then(function($p1_0) {
                                        if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) return;
                                        var $v_S = $p1_0.entity;
                                        $v_R = $v_S.getValue("instancetypecode").getValue("value").toString();
                                        if ($v_R !== "0" && $v_R !== "1"
                                        )
                                            Mscrm.GridCommandActions
                                                .displaySeriesActionDialog(gridControl, records[0].Id);
                                        else if (Mscrm.InternalUtilities.DialogConfirmStrings
                                            .tryGetDialogStringsForEnabledMetadataDialogs("delete",
                                                $v_9,
                                                $v_8,
                                                records.length)) {
                                            var $v_T = new Xrm.DialogOptions;
                                            $v_T.height = $v_2;
                                            $v_T.width = $v_1;
                                            var $v_U = Mscrm.GridCommandActions.PerformGridDeleteAction,
                                                $v_V = Mscrm.InternalUtilities.GridUtilities
                                                    .createCallbackFunctionFactory($v_U, [gridControl, records]);
                                            Xrm.Dialog.openConfirmDialog($v_9, $v_T, $v_V, null)
                                        }
                                    },
                                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
                            return
                        } else Mscrm.GridCommandActions.displaySeriesActionDialog(gridControl, records[0].Id);
                        return
                    }
                }
            break;
        case "equipment":
            if (records.length > 0) {
                var $v_W = Xrm.Internal.getResourceString("MenuItem_Delete_Equipment_Confirm_Part1") +
                    "\n\n" +
                    Xrm.Internal.getResourceString("MenuItem_Delete_Equipment_Confirm_Part2");
                if (confirm($v_W))
                    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_7, records, 570, 250, null, $v_5);
                else return
            }
            return;
        case "contract":
            if (records.length === 1) $v_7.get_query()["sIds"] = records[0].Id;
            break;
        case "queueitem":
            $v_0 = true;
            $v_4 = true;
            break;
        case "solution":
            if (records.length !== 1) {
                Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                    .getResourceString("Message.SolutionHomePage.OnlySelectOne"));
                return
            }
            $v_7.get_query()["sIds"] = records[0].Id;
            break;
        case "systemform":
            $v_7.get_query()["sIds"] = records[0].Id;
            break;
        case "audit":
            if (records.length === 1) {
                var $v_X = gridControl.getCellValue("number", records[0].Id);
                if ($v_X === "1") {
                    if (gridControl.getGrid().getTotalRecordCount() === 1) {
                        Mscrm.InternalUtilities._Script
                            .alert(Xrm.Internal.getResourceString("Audit.LogManagement.InUsePartition"));
                        return
                    }
                    var $v_Y = gridControl.getCellValue("enddatetimeraw", records[0].Id);
                    $v_7.get_query()["iAuditEndDate"] = $v_Y
                } else {
                    Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                        .getResourceString("Audit.LogManagement.SelectOldest"));
                    return
                }
            }
            break;
        case "sharepointsite":
            $v_7 = Mscrm.InternalUtilities.GridUtilities
                .generateStandardActionUri("delete_sharepointsite", entityTypeCode, records.length);
            break;
        case "calendar":
            $v_7.get_query()["cType"] = "1";
            break;
        case "account":
            $v_7 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_account.aspx");
            $v_7.get_query()["iObjType"] = entityTypeCode;
            $v_7.get_query()["iTotal"] = records.length;
            $v_7.get_query()["sIds"] = records[0].Id;
            break;
        case "contact":
            $v_7 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_delete_contact.aspx");
            $v_7.get_query()["iObjType"] = entityTypeCode;
            $v_7.get_query()["iTotal"] = records.length;
            $v_7.get_query()["sIds"] = records[0].Id;
            break;
        case "opportunityproduct":
        case "quotedetail":
        case "salesorderdetail":
        case "invoicedetail":
            for (var $v_J = new Array(records
                         .length),
                $v_Z = 0;
                $v_Z < records.length;
                $v_Z++) $v_J[$v_Z] = records[$v_Z].Id;
            var $v_K = [];
            if (Mscrm.CommandBarActions.isMobileCompanionApp()) $v_K[0] = $v_J[0];
            else {
                $v_K[0] = window.parent;
                $v_K[1] = $v_J;
                $v_K[2] = window.self
            }
            $v_5 = $v_K;
            $v_7 = Mscrm.InternalUtilities.GridUtilities
                .generateStandardActionUri("deleteqoiproduct", entityTypeCode, records.length);
            if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
                .data)) $v_7.get_query()["sParentId"] = Xrm.Page.data.entity.getId();
            break;
        case "calendarrule":
            $v_7.get_query()["cType"] = gridControl.GetParameter("calendarType");
            $v_7.get_query()["holidayCalendarId"] = $get("calendarid").value;
            break;
        case "product":
            if (records.length === 1)
                $v_7.get_query()["productStructure"] = gridControl.getCellValue("productstructure", records[0].Id);
            break;
        case "dynamicproperty":
            var $v_L = Xrm.Page.context.getQueryStringParameters();
            if (!Mscrm.InternalUtilities.JSTypes
                .isNull($v_L["etc"])) $v_7.get_query()["iParentType"] = $v_L["etc"].toString();
            $v_7.get_query()["sParentId"] = Xrm.Page.data.entity.getId();
            $v_7.get_query()["sObjectId"] = records[0].Id;
            break;
        default:
            if (entityTypeCode === 9802 || entityTypeCode === 9805 || entityTypeCode === 9812) {
                for (var $v_a = new Array(records.length), $v_b = 0; $v_b < records.length; $v_b++)
                    if (entityTypeCode === 9812) $v_a[$v_b] = records[$v_b].Id;
                    else $v_a[$v_b] = records[$v_b].Id.split(":")[2];
                $v_5 = $v_a
            }
            if (entityTypeCode === 4700)
                for (var $v_c = 0;
                    $v_c < records.length;
                    $v_c++
                ) if (records[$v_c].TypeCode === 9005) records[$v_c].TypeCode = 4700;
            break
        }
        Mscrm.GridCommandActions.$2D(gridControl, records, $v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9)
    }
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "Delete", entityTypeCode)
};
Mscrm.GridCommandActions.$2D = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9, $p10, $p11) {
    if ($p6) $p9.get_query()["sSubTypes"] = Mscrm.GridCommandActions.$3e($p1);
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("delete", $p11, $p10, $p1.length, $p9)) {
        var $v_0 = new Xrm.DialogOptions;
        $v_0.height = $p4;
        $v_0.width = $p3;
        var $v_1 = Mscrm.GridCommandActions.PerformGridDeleteAction,
            $v_2 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_1, [$p0, $p1]);
        Xrm.Dialog.openConfirmDialog($p11, $v_0, $v_2, null)
    } else Mscrm.InternalUtilities.GridUtilities.executeStandardAction($p9, $p1, $p3, $p2 ? $p5 : $p4, $p8, $p7)
};
Mscrm.GridCommandActions.RefreshGrid = function(returnValue, gridControl) {
    (Mscrm.CommandBarActions.isMobileCompanionApp() ||
            !Mscrm.InternalUtilities.JSTypes.isNull(returnValue) && returnValue) &&
        gridControl.refresh()
};
Mscrm.GridCommandActions.PerformGridDeleteAction = function(returnValue, gridControl, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(records) && records.length > 0) {
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        var $v_0 = Xrm.Internal.getEntityName(records[0].TypeCode);
        if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() && !Xrm.Utility.isEntityOfflineSyncEnabled($v_0)) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
        if (records.length === 1)
            Xrm.Utility.deleteRecord($v_0, records[0].Id.toString())
                .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() })
                .then(function($p1_0) {
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
                            Mscrm.GridCommandActions.$2L(gridControl);
                            gridControl.refresh()
                        }
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
        else if (Xrm.Utility.isActivityType($v_0) &&
        (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() === "Online")) {
            for (var $v_1 = 0, $v_2 = {}, $v_5 = 0; $v_5 < records.length; $v_5++) {
                var $v_6 = records[$v_5].TypeCode.toString();
                if (!($v_6 in $v_2)) {
                    $v_2[$v_6] = [];
                    $v_1++
                }
                $v_2[$v_6].push(records[$v_5].Id.toString())
            }
            var $v_3 = 0, $v_4 = new Array($v_1), $$dict_C = $v_2;
            for (var $$key_D in $$dict_C) {
                var $v_7 = { key: $$key_D, value: $$dict_C[$$key_D] };
                $v_4[$v_3++] = $v_7.key
            }
            Mscrm.GridCommandActions.$18($v_2, $v_4, 0, gridControl, true)
        } else if (Mscrm.CommandBarActions.isWebClient() ||
            $v_0 === "knowledgearticle" ||
            Xrm.Page.context.client
            .getClient() ===
            "Outlook" &&
            Xrm.Page.context.client.getClientState() === "Online") {
            for (var $v_8 = new Array(records
                         .length),
                $v_9 = 0;
                $v_9 < records.length;
                $v_9++) $v_8[$v_9] = records[$v_9].Id.toString();
            Xrm.Internal.messages.deleteEntityMultiple($v_0, $v_8)
                .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() })
                .then(function($p1_0) {
                        for (var $$arr_H = $p1_0.responses, $$len_I = $$arr_H.length, $$idx_J = 0;
                            $$idx_J < $$len_I;
                            ++$$idx_J) {
                            var $v_A = $$arr_H[$$idx_J];
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A.get_fault())) {
                                Mscrm.GridCommandActions.openAlertDialogForDeleteMultipleError(gridControl);
                                return
                            }
                        }
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
                            Mscrm.GridCommandActions.$2L(gridControl);
                            gridControl.refresh()
                        }
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        } else Mscrm.GridCommandActions.$1A(records, 0, gridControl, true)
    }
};
Mscrm.GridCommandActions.$2L = function($p0) {
    var $v_0 = $p0.getEntityName();
    ($v_0 === "opportunityproduct" || $v_0 === "quotedetail" || $v_0 === "salesorderdetail" || $v_0 === "invoicedetail"
        ) &&
        Xrm.Internal.recalculateRecord()
};
Mscrm.GridCommandActions.$1A = function($p0, $p1, $p2, $p3) {
    if ($p1 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p3 && Mscrm.GridCommandActions.openAlertDialogForDeleteMultipleError($p2);
        $p2.refresh()
    } else {
        var $v_0 = $p0[$p1], $v_1 = Xrm.Internal.getEntityName($v_0.TypeCode);
        Xrm.Utility.deleteRecord($v_1, $p0[$p1].Id.toString())
            .then(function() { Mscrm.GridCommandActions.$1A($p0, $p1 + 1, $p2, $p3) },
                function() { Mscrm.GridCommandActions.$1A($p0, $p1 + 1, $p2, false) })
    }
};
Mscrm.GridCommandActions.$18 = function($p0, $p1, $p2, $p3, $p4) {
    if ($p2 >= $p1.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p4 && Mscrm.GridCommandActions.openAlertDialogForDeleteMultipleError($p3);
        $p3.refresh()
    } else {
        var $v_0 = Xrm.Internal.getEntityName(parseInt($p1[$p2]));
        Xrm.Internal.messages.deleteEntityMultiple($v_0, $p0[$p1[$p2]])
            .then(function() { Mscrm.GridCommandActions.$18($p0, $p1, $p2 + 1, $p3, $p4) },
                function() { Mscrm.GridCommandActions.$18($p0, $p1, $p2 + 1, $p3, false) })
    }
};
Mscrm.GridCommandActions.openAlertDialogForDeleteMultipleError = function(gridControl) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0, null, function() { gridControl.refresh() })
};
Mscrm.GridCommandActions.PerformActionAfterDeleteFromGrid = function(returnValue, gridControl, records) {
    if (Mscrm.CommandBarActions.isMobileCompanionApp() || Xrm.Page.context.client.getClient() === "Outlook") {
        gridControl.refresh();
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue) && returnValue) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(records) && records.length > 0) {
            for (var $v_0 = new Array(records
                         .length),
                $v_1 = 0;
                $v_1 < records.length;
                $v_1++) $v_0[$v_1] = records[$v_1].Id;
            Mscrm.CommandBarActions.$1C($v_0)
        }
        try {
            gridControl.refresh()
        } catch ($$e_5) {
        }
    }
};
Mscrm.GridCommandActions.$3e = function($p0) {
    for (var $v_0 = new Sys.StringBuilder, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        $v_1 > 0 && $v_0.append(",");
        $v_0.append($p0[$v_1].TypeCode.toString())
    }
    return $v_0.toString()
};
Mscrm.GridCommandActions.displaySeriesActionDialog = function(gridControl, recordId) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 325;
    $v_0.width = 500;
    var $v_1 = {};
    $v_1["entityId"] = recordId;
    var $v_2 = {};
    $v_2["gridControl"] = gridControl;
    Xrm.Dialog.openDialog("SeriesActionDialog",
        $v_0,
        $v_1,
        Mscrm.InternalUtilities.DialogUtility.closeDialogFromGridCallback,
        $v_2)
};
Mscrm.GridCommandActions.createNewLineItem = function(targetEntityTypeCode, primaryEntityTypeCode, primaryEntityId) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp()) return;
    var $v_0 = Xrm.Page.grid;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName(primaryEntityTypeCode),
                new Microsoft.Crm.Client.Core.Framework.Guid(primaryEntityId)),
            $v_2 = $v_0.getRelationshipName(),
            $v_3 = $v_0.getRelationshipAttributeName(),
            $v_4 = $v_0.getRelationshipRoleOrdinal(),
            $v_5 = $v_0.getRelationshipType(),
            $v_6 = new Xrm.RelationshipReference($v_2, $v_3, $v_4, $v_5);
        Xrm.Utility.create(Xrm.Internal.getEntityName(targetEntityTypeCode), $v_1, $v_6, null, null, null)
    }
};
Mscrm.GridCommandActions.mergeRecords = function(gridControl, records, entityTypeCode) {
    if (!records) return;
    var $v_0 = 2, $v_1;
    switch (entityTypeCode) {
    case 112:
        if (records.length < 2) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MERGE_LESS_RECORDS"), null);
            return
        }
        $v_1 = Mscrm.GridCommandActions.generateStandardActionUri("mergemultiple", entityTypeCode, records.length);
        $v_0 = Xrm.Internal.getLocatorServiceSetting("MaxIncidentMergeNumber");
        $v_1.get_query()["requestType"] = "merge";
        if (records.length > $v_0) {
            Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_MERGE_CASE_TOOMANY_RECORDS"),
                    $v_0.toString()),
                null);
            return
        }
        break;
    default:
        $v_1 = Mscrm.GridCommandActions.generateStandardActionUri("merge", entityTypeCode, records.length);
        if (records.length > $v_0) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MERGE_TOOMANY_RECORDS"), null);
            return
        }
        break
    }
    for (var $v_2 = new Sys.StringBuilder, $v_7 = 0; $v_7 < records.length; $v_7++) {
        $v_7 > 0 && $v_2.append(";");
        $v_2.append(records[$v_7].Id.toString())
    }
    $v_1.get_query()["sIds"] = $v_2.toString();
    for (var $v_3 = new Array(records.length), $v_4 = [], $v_8 = 0; $v_8 < records.length; $v_8++) {
        var $v_9 = new Mscrm.InternalUtilities.EntityReference;
        $v_9.Id = records[$v_8].Id.toString();
        $v_9.Name = records[$v_8].Name;
        $v_9.TypeCode = records[$v_8].TypeCode;
        $v_9.TypeName = records[$v_8].TypeName;
        $v_3[$v_8] = $v_9
    }
    var $v_5 = false;
    if (Xrm.Internal.isEnabledForInteractionCentric()) $v_5 = Xrm.Internal.savePreSelectedViewModelIds();
    $v_4 = [$v_5, gridControl, "merge", entityTypeCode, records];
    var $v_6 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.GridCommandActions.showMessageAfterMergeAssocAndRefreshGrid, $v_4);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_1, $v_3, 800, 570, $v_6);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "Merge", entityTypeCode)
};
Mscrm.GridCommandActions
    .showMessageAfterMergeAssocAndRefreshGrid = function(result,
        forceRefresh,
        gridControl,
        requestType,
        typeCode,
        records) {
        if (Xrm.Internal.isEnabledForInteractionCentric()) {
            Xrm.Internal.setIsGridDialogContext(false);
            var $v_0 = result, $v_1 = $v_0["lastButtonClicked"];
            if ($v_1 === "Merge") {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                var $v_2 = Xrm.Internal.getSelectedEntityRecords(), $v_3$9 = $v_2[0];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3$9)) {
                    var $v_4$A = $v_3$9.get_identifier(),
                        $v_5$B = $v_4$A.Id.toString(),
                        $v_6 = $v_3$9.getValue("title"),
                        $v_7 = 0,
                        $v_8 = 0,
                        $v_9 = {},
                        $v_A = -1,
                        $v_B = null;
                    $v_B = function() {
                        $v_A++;
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(records[$v_A])) {
                            if (records[$v_A].Id.toString() === $v_5$B) $v_A++;
                            !Mscrm.InternalUtilities.JSTypes.isNull(records[$v_A]) &&
                                Xrm.Internal.messages.merge($v_4$A,
                                    new Microsoft.Crm.Client.Core.Framework.Guid(records[$v_A].Id.toString()),
                                    $v_3$9,
                                    true).done(function($p2_0) {
                                    $v_B();
                                    $v_7++;
                                    if ($v_7 + $v_8 === records.length - 1) {
                                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                        Xrm.Internal.clearSelectedViewModels();
                                        gridControl.refresh();
                                        if (!$v_8) {
                                            var $v_C = new Xrm.AlertDialogStrings;
                                            $v_C.text = String
                                                .format(Xrm.Internal
                                                    .getResourceString("MergeRecords_Cases_Merged_Success"),
                                                    $v_7,
                                                    $v_6);
                                            Xrm.Dialog.openAlertDialog($v_C, null, null)
                                        } else {
                                            var $v_D = new Xrm.AlertDialogStrings;
                                            $v_D.text = String
                                                .format(Xrm.Internal
                                                    .getResourceString("MergeRecords_Cases_Merged_Success"),
                                                    $v_7,
                                                    $v_6) +
                                                "\n";
                                            $v_D.text += String
                                                .format(Xrm.Internal
                                                    .getResourceString("MergeRecords_Cases_Merged_Fail"),
                                                    $v_8) +
                                                "\n";
                                            var $$dict_M = $v_9;
                                            for (var $$key_N in $$dict_M) {
                                                var $v_E = { key: $$key_N, value: $$dict_M[$$key_N] };
                                                $v_D.text += String
                                                    .format(Xrm.Internal.getResourceString("Error_Message_Fail"),
                                                        $v_E.value) +
                                                    $v_E.key +
                                                    "\n"
                                            }
                                            Xrm.Dialog.openAlertDialog($v_D, null, null)
                                        }
                                    }
                                }).fail(function($p2_0) {
                                    $v_B();
                                    $v_8++;
                                    if ($p2_0
                                        .get_localizedMessage() in
                                        $v_9)
                                        $v_9[$p2_0.get_localizedMessage()] = $v_9[$p2_0.get_localizedMessage()] + 1;
                                    else $v_9[$p2_0.get_localizedMessage()] = 1;
                                    if ($v_7 + $v_8 === records.length - 1) {
                                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                        Xrm.Internal.clearSelectedViewModels();
                                        gridControl.refresh();
                                        var $v_F = new Xrm.AlertDialogStrings;
                                        $v_F.text = "";
                                        if ($v_7 > 0)
                                            $v_F.text = String
                                                .format(Xrm.Internal
                                                    .getResourceString("MergeRecords_Cases_Merged_Success"),
                                                    $v_7,
                                                    $v_6) +
                                                "\n";
                                        $v_F.text += String
                                            .format(Xrm.Internal
                                                .getResourceString("MergeRecords_Cases_Merged_Fail"),
                                                $v_8) +
                                            "\n";
                                        var $$dict_R = $v_9;
                                        for (var $$key_S in $$dict_R) {
                                            var $v_G = { key: $$key_S, value: $$dict_R[$$key_S] };
                                            $v_F.text += String
                                                .format(Xrm.Internal.getResourceString("Error_Message_Fail"),
                                                    $v_G.value) +
                                                $v_G.key +
                                                "\n"
                                        }
                                        Xrm.Dialog.openAlertDialog($v_F, null, null)
                                    }
                                })
                        }
                    };
                    $v_B()
                }
            } else if ($v_1 === "Set") {
                Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
                var $v_H = Xrm.Internal.getSelectedEntityRecords(), $v_I = $v_H[0];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_I))
                    for (var $v_J = $v_I.get_identifier(),
                        $v_K = $v_J.Id.toString(),
                        $v_L = $v_J.LogicalName.toString(),
                        $v_M = ["parentcaseid"],
                        $v_N = 0,
                        $v_O = 0,
                        $v_P = records.length,
                        $v_Q = {},
                        $$arr_d = records,
                        $$len_e = $$arr_d.length,
                        $$idx_f = 0;
                        $$idx_f < $$len_e;
                        ++$$idx_f) {
                        var $v_R = $$arr_d[$$idx_f];
                        $v_R.Id.toString() !== $v_K &&
                            Xrm.Internal.messages.retrieve($v_L, $v_R.Id.toString(), $v_M).done(function($p1_0) {
                                var $v_S = $p1_0.entity;
                                if (Mscrm.InternalUtilities._Script.isNullOrUndefined($v_S.getValue("parentcaseid"))) {
                                    var $v_T = new Xrm.Objects
                                        .EntityReference("incident",
                                            new Microsoft.Crm.Client.Core.Framework
                                            .Guid($v_K));
                                    $v_S.initializeValue("parentcaseid", $v_T, 6);
                                    $v_S.get_changedFieldNames().addRange(["parentcaseid"]);
                                    Xrm.Internal.messages.update($v_S).done(function($p2_0) {
                                        $v_N++;
                                        if ($v_N + $v_O === $v_P - 1) {
                                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                            gridControl.refresh();
                                            if (!$v_O) {
                                                var $v_U = new Xrm.AlertDialogStrings;
                                                $v_U.text = String
                                                    .format(Xrm.Internal
                                                        .getResourceString("ParentChild_Cases_Associate_Success"),
                                                        $v_N);
                                                Xrm.Dialog.openAlertDialog($v_U, null, null)
                                            } else {
                                                var $v_V = new Xrm.AlertDialogStrings;
                                                $v_V.text = String
                                                    .format(Xrm.Internal
                                                        .getResourceString("ParentChild_Cases_Associate_Success"),
                                                        $v_N) +
                                                    "\n";
                                                $v_V.text += String
                                                    .format(Xrm.Internal
                                                        .getResourceString("ParentChild_Cases_NoSuccess_Fail"),
                                                        $v_O) +
                                                    "\n";
                                                var $$dict_o = $v_Q;
                                                for (var $$key_p in $$dict_o) {
                                                    var $v_W = { key: $$key_p, value: $$dict_o[$$key_p] };
                                                    $v_V
                                                        .text +=
                                                        String
                                                        .format(Xrm.Internal.getResourceString("Error_Message_Fail"),
                                                            $v_W.value) +
                                                        $v_W.key +
                                                        "\n"
                                                }
                                                Xrm.Dialog.openAlertDialog($v_V, null, null)
                                            }
                                        }
                                    }).fail(function($p2_0) {
                                        $v_O++;
                                        if ($p2_0
                                            .get_localizedMessage() in
                                            $v_Q)
                                            $v_Q[$p2_0.get_localizedMessage()] = $v_Q[$p2_0.get_localizedMessage()] + 1;
                                        else $v_Q[$p2_0.get_localizedMessage()] = 1;
                                        if ($v_N + $v_O === $v_P - 1) {
                                            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                            gridControl.refresh();
                                            var $v_X = new Xrm.AlertDialogStrings;
                                            $v_X.text = "";
                                            if ($v_N > 0)
                                                $v_X.text = String
                                                    .format(Xrm.Internal
                                                        .getResourceString("ParentChild_Cases_Associate_Success"),
                                                        $v_N) +
                                                    "\n";
                                            $v_X.text += String
                                                .format(Xrm.Internal
                                                    .getResourceString("ParentChild_Cases_NoSuccess_Fail"),
                                                    $v_O) +
                                                "\n";
                                            var $$dict_t = $v_Q;
                                            for (var $$key_u in $$dict_t) {
                                                var $v_Y = { key: $$key_u, value: $$dict_t[$$key_u] };
                                                $v_X.text += String
                                                    .format(Xrm.Internal.getResourceString("Error_Message_Fail"),
                                                        $v_Y.value) +
                                                    $v_Y.key +
                                                    "\n"
                                            }
                                            Xrm.Dialog.openAlertDialog($v_X, null, null)
                                        }
                                    })
                                } else {
                                    $v_P--;
                                    if ($v_P < 2) {
                                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                        gridControl.refresh()
                                    } else if ($v_N + $v_O === $v_P - 1) {
                                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                        gridControl.refresh();
                                        var $v_Z = new Xrm.AlertDialogStrings;
                                        $v_Z.text = "";
                                        if ($v_N > 0)
                                            $v_Z.text = String
                                                .format(Xrm.Internal
                                                    .getResourceString("ParentChild_Cases_Associate_Success"),
                                                    $v_N) +
                                                "\n";
                                        $v_Z.text += String
                                            .format(Xrm.Internal.getResourceString("ParentChild_Cases_NoSuccess_Fail"),
                                                $v_O) +
                                            "\n";
                                        var $$dict_x = $v_Q;
                                        for (var $$key_y in $$dict_x) {
                                            var $v_a = { key: $$key_y, value: $$dict_x[$$key_y] };
                                            $v_Z.text += String
                                                .format(Xrm.Internal.getResourceString("Error_Message_Fail"),
                                                    $v_a.value) +
                                                $v_a.key +
                                                "\n"
                                        }
                                        Xrm.Dialog.openAlertDialog($v_Z, null, null)
                                    }
                                }
                            }).fail(function($p1_0) {
                                $v_O++;
                                if ($v_N + $v_O === $v_P - 1) {
                                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                    gridControl.refresh();
                                    var $v_b = new Xrm.AlertDialogStrings;
                                    $v_b.text = "";
                                    if ($v_N > 0)
                                        $v_b.text = String
                                            .format(Xrm.Internal
                                                .getResourceString("ParentChild_Cases_Associate_Success"),
                                                $v_N) +
                                            "\n";
                                    $v_b.text += String.format(Xrm.Internal
                                            .getResourceString("ParentChild_Cases_NoSuccess_Fail"),
                                            $v_O) +
                                        "\n";
                                    var $$dict_12 = $v_Q;
                                    for (var $$key_13 in $$dict_12) {
                                        var $v_c = { key: $$key_13, value: $$dict_12[$$key_13] };
                                        $v_b.text += String
                                            .format(Xrm.Internal.getResourceString("Error_Message_Fail"), $v_c.value) +
                                            $v_c.key +
                                            "\n"
                                    }
                                    Xrm.Dialog.openAlertDialog($v_b, null, null)
                                }
                            })
                    }
            } else if ($v_1 === "cancel_id") {
                Xrm.Internal.clearSelectedViewModels();
                forceRefresh && gridControl.refresh()
            }
        } else {
            (!Mscrm.InternalUtilities.JSTypes.isNull(result) || forceRefresh) && gridControl.refresh();
            if (!Mscrm.InternalUtilities.JSTypes.isNull(result) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(result.toString()) &&
                typeCode === 112) {
                var $v_d = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_incidentmessages.aspx");
                $v_d.get_query()["requestType"] = requestType;
                $v_d.get_query()["messageContent"] = result.toString();
                var $v_e = new Xrm.DialogOptions;
                $v_e.height = 200;
                $v_e.width = 450;
                Xrm.Internal.openDialog($v_d.toString(), $v_e, null, null, null)
            }
        }
    };
Mscrm.GridCommandActions.generateStandardActionUri = function(actionName, entityTypeCode, selectedRecordCount) {
    return Mscrm.InternalUtilities.GridUtilities
        .generateStandardActionUri(actionName, entityTypeCode, selectedRecordCount)
};
Mscrm.GridCommandActions.trackEmailsByFolder = function(entityId, entityTypeCode) {
    var $v_0 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
        $v_1 = Mscrm.GlobalImported.CrmUri.create("/tools/FolderBasedTracking/FolderBasedTracking.aspx");
    $v_1.get_query()["regardingObjectId"] = entityId;
    $v_1.get_query()["regardingObjectName"] = $v_0;
    $v_1.get_query()["regardingObjectTypeCode"] = entityTypeCode;
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 658;
    $v_2.width = 640;
    $v_2.openInNewWindow = true;
    Xrm.Internal.openUrl($v_1.toString(), $v_2)
};
Mscrm.GridCommandActions.quickCampaignSelectedItems = function(gridControl, records, entityTypeCode, totalRecordCount) {
    if (!totalRecordCount) totalRecordCount = gridControl.getGrid().getTotalRecordCount();
    if (entityTypeCode === 4300) {
        if (records.length > 1)
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MINICAMP_TOOMANY_RECORDS"), null);
        else if (records.length > 0) {
            var $v_0 = new Array(2);
            $v_0[0] = "statecode";
            $v_0[1] = "membertype";
            $v_0.type = "string";
            Xrm.Internal.messages.retrieve(Xrm.Internal.getEntityName(entityTypeCode), records[0], $v_0)
                .then(function($p1_0) {
                        var $v_1 = $p1_0.entity;
                        if ($v_1) {
                            var $v_2 = $v_1.getValue("statecode");
                            if ($v_2 && $v_2 === Mscrm.ListState.toString(0)
                            )
                                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MC_CANNOT_RUN_INACTLST"),
                                    null);
                            else {
                                var $v_3 = $v_1.getValue("membertype");
                                if ($v_3) {
                                    var $v_4 = parseInt($v_3);
                                    Mscrm.GridCommandActions
                                        .runMiniCampaign(gridControl,
                                            records,
                                            entityTypeCode,
                                            totalRecordCount,
                                            1,
                                            $v_4)
                                }
                            }
                        }
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    } else
        Mscrm.GridCommandActions.runMiniCampaign(gridControl,
            records,
            entityTypeCode,
            totalRecordCount,
            1,
            entityTypeCode)
};
Mscrm.GridCommandActions.quickCampaignCurrentPage = function(gridControl, selectedRecordIds, entityTypeCode) {
    if (!gridControl.getGrid().getTotalRecordCount())
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MINICAMP_NORECORDS_MSG"), null);
    else
        Mscrm.GridCommandActions.runMiniCampaign(gridControl,
            selectedRecordIds,
            entityTypeCode,
            gridControl.getGrid().getTotalRecordCount(),
            2,
            entityTypeCode)
};
Mscrm.GridCommandActions.quickCampaignAllPages = function(gridControl, selectedRecordIds, entityTypeCode) {
    var $v_0 = gridControl.GetParameter("queryapi");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_QC_CANNOT_RUN_ASSO"), null);
        return
    }
    if (!gridControl.getGrid().getTotalRecordCount())
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MINICAMP_NORECORDS_MSG"), null);
    else
        Mscrm.GridCommandActions.runMiniCampaign(gridControl,
            selectedRecordIds,
            entityTypeCode,
            gridControl.getGrid().getTotalRecordCount(),
            3,
            entityTypeCode)
};
Mscrm.GridCommandActions.runMiniCampaign = function(gridControl,
    selectedRecords,
    entityTypeCode,
    totalRecordCount,
    mcOption,
    createdFromOtc) {
    var $v_0 = {};
    $v_0["TotalRecords"] = totalRecordCount;
    $v_0["SelectedRecords"] = selectedRecords.length;
    $v_0["ObjectTypeCode"] = entityTypeCode;
    $v_0["MCOption"] = mcOption;
    $v_0["CreatedFromOtc"] = createdFromOtc;
    switch (mcOption) {
    case 1:
        $v_0["MCOptionTitle"] = Xrm.Internal.getResourceString("LOCID_MC_SELECTION_SELECTED");
        $v_0["Ids"] = selectedRecords;
        $v_0["GridXml"] = "";
        break;
    case 2:
        $v_0["MCOptionTitle"] = Xrm.Internal.getResourceString("LOCID_MC_SELECTION_ALLONPAGE");
        $v_0["Ids"] = selectedRecords;
        $v_0["GridXml"] = "";
        break;
    case 3:
        $v_0["MCOptionTitle"] = Xrm.Internal.getResourceString("LOCID_MC_SELECTION_ALL");
        $v_0["Ids"] = "";
        $v_0["GridXml"] = "<grid><parameters><viewid>" +
            CrmEncodeDecode.CrmXmlEncode(gridControl.getViewSelector().getCurrentView().id) +
            "</viewid><viewtype>" +
            CrmEncodeDecode.CrmXmlEncode(gridControl.getViewSelector().getCurrentView().entityType) +
            "</viewtype></parameters></grid>";
        break;
    default:
        Xrm.Internal.reportToWatson("Invalid option value passed to RunMiniCampaign().",
            window.location.href,
            0,
            true,
            null,
            0,
            false);
        break
    }
    var $v_1 = Mscrm.GlobalImported.CrmUri.create("/MA/MiniCampaign/MiniCampaign.aspx"), $v_2 = new Xrm.DialogOptions;
    $v_2.height = parseInt(Xrm.Internal.getResourceString("LOCID_MC_WINDOW_HEIGHT"), 10);
    $v_2.width = parseInt(Xrm.Internal.getResourceString("LOCID_MC_WINDOW_WIDTH"), 10);
    Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_0, null, null)
};
Mscrm.GridCommandActions.runScript = function(records, objectTypeCode) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(records) || !records.length) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ACTION_NOITEMSELECTED"), null);
        return
    }
    if (records.length > 1) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_GRID_TOO_MANY_RECORDS_IWF"), null);
        return
    }
    if (records[0].TypeCode === 4216) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_SOCIAL_ACTIVITY_ACTIONERR"), null);
        return
    }
    var $v_0 = new Xrm.LookupOptions, $v_1, $v_2 = "workflow";
    $v_1 = [$v_2];
    var $v_3 = {};
    $v_0.lookupStyle = "single";
    $v_0.lookupTypes = $v_1;
    $v_3["membertypecode"] = records[0].TypeCode.toString();
    $v_0.additionalParams = $v_3;
    $v_0.dataProviderOverride = "";
    $v_0.defaultViewId = "5DC43D17-D871-4470-B9D7-5B64AC2AF436";
    $v_0.viewIds = ["{5DC43D17-D871-4470-B9D7-5B64AC2AF436}"];
    Xrm.Internal.lookupObjects($v_0, function($p1_0) { Mscrm.GridCommandActions.runDialog($p1_0, records) });
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "StartDialog", objectTypeCode)
};
Mscrm.GridCommandActions.runDialog = function(lookupItems, records) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupItems))
        if (0 !== lookupItems.length) {
            var $v_0 = lookupItems[0].id,
                $v_1 = records[0],
                $v_2 = $v_1.Id,
                $v_3 = Mscrm.GlobalImported.CrmUri.create("/cs/dialog/rundialog.aspx");
            $v_3.get_query()["DialogId"] = $v_0;
            $v_3.get_query()["ObjectId"] = $v_2;
            $v_3.get_query()["EntityName"] = records[0].TypeName;
            var $v_4 = new Xrm.DialogOptions;
            $v_4.height = 480;
            $v_4.width = 615;
            $v_4.openInNewWindow = true;
            Xrm.Internal.openUrl($v_3.toString(), $v_4)
        }
};
Mscrm.GridCommandActions.designView = function(gridControl) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl)) {
        var $v_0 = gridControl.GetParameter("viewid");
        Xrm.Utility.openEntityForm("savedquery", $v_0, null);
        Mscrm.InternalUtilities.MetricsReportingHelper
            .addTelemetryLog(1, "View", Xrm.Internal.getEntityCode(gridControl.getEntityName()))
    }
};
Mscrm.GridCommandActions.manageViews = function(selectedEntityTypeCode) {
    var $v_0 = { def_category: 9801, def_type: selectedEntityTypeCode, def_subcat: "view" };
    Xrm.Utility.openEntityForm("solution", Mscrm.SolutionConstants.defaultSolutionId, $v_0);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "SystemViews", selectedEntityTypeCode)
};
Mscrm.GridCommandActions.createSystemView = function(selectedEntityTypeCode) {
    var $v_0 = { objectTypeCode: selectedEntityTypeCode };
    Xrm.Utility.openEntityForm("savedquery", "", $v_0);
    Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog(1, "NewSystemView", selectedEntityTypeCode)
};
Mscrm.GridCommandActions.ContentPanel = function() {};
Mscrm.GridCommandActions.ContentPanel.prototype = {
    $1M_0: null,
    get_contentUrl: function() { return Mscrm.GlobalImported.CrmUri.create(this.$1M_0) }
};
Mscrm.GridCommandActions.ExportDialogArguments = function() {};
Mscrm.GridCommandActions.ExportDialogReturnValue = function() {
    this.reimport = false;
    this.useSqlQuery = false;
    this.fetchXml = null;
    this.layoutXml = null
};
Mscrm.GridCommandActions.ExportDialogResult = function() {};
Mscrm.GridCommandActions.ExportDialogResult.prototype = {
    cancel: -1,
    currentPage: 0,
    allPages: 1,
    liveList: 2,
    livePivot: 3
};
Mscrm.GridCommandActions.ExportDialogResult.registerEnum("Mscrm.GridCommandActions.ExportDialogResult", false);
Mscrm.NewMeetingHandler = function() {};
Mscrm.NewMeetingHandler
    .createRecordForAppointment = function(messageId,
        relatedMailIds,
        subject,
        regardingObjectId,
        regardingObjectTypeCode,
        isMocaClient) {
        var $v_0 = Mscrm.NewMeetingHandler.$3V(relatedMailIds,
                subject,
                regardingObjectId,
                regardingObjectTypeCode,
                isMocaClient),
            $v_1 = 5;
        $v_0.initializeValue("statuscode", $v_1, 13);
        var $v_2 = false;
        $v_0.initializeValue("isalldayevent", $v_2, 0);
        return $v_0
    };
Mscrm.NewMeetingHandler.$3V = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = "optional",
        $v_1 = "required",
        $v_2 = "sender",
        $v_3 = new Xrm.Objects.EntityReference("appointment", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_4 = {},
        $v_5 = {},
        $v_6 = new Array(6);
    $v_4["subject"] = CrmEncodeDecode.CrmHtmlDecode($p1);
    $v_5["subject"] = 14;
    $v_6[0] = "subject";
    var $v_7 = Mscrm.NewMeetingHandler.getDateTimeNow(), $v_8 = Mscrm.NewMeetingHandler.getDateTimeNow();
    $v_8.setHours($v_8.getHours() + 1);
    $v_4["scheduledstart"] = $v_7;
    $v_5["scheduledstart"] = 2;
    $v_6[1] = "scheduledstart";
    $v_4["scheduledend"] = $v_8;
    $v_5["scheduledend"] = 2;
    $v_6[2] = "scheduledend";
    for (var $v_9 = Sys.Serialization.JavaScriptSerializer.deserialize(CrmEncodeDecode.CrmHtmlDecode($p0)),
        $v_A = new Array(0),
        $v_B = new Array(0),
        $v_F = 0;
        $v_F < $v_9.RelatedRecipientList.length;
        $v_F++) {
        var $v_G = null;
        if (!$v_9.RelatedRecipientList[$v_F].Resolved)
            $v_G = Mscrm.NewMeetingHandler.$4W($v_9.RelatedRecipientList[$v_F].EmailAddress);
        else
            $v_G = Mscrm.NewMeetingHandler.$2p($v_9.RelatedRecipientList[$v_F].ObjectType,
                $v_9.RelatedRecipientList[$v_F].ObjectId);
        if ($v_9.RelatedRecipientList[$v_F].AttendeeType === $v_0) $v_A[$v_A.length] = $v_G;
        if ($v_9.RelatedRecipientList[$v_F].AttendeeType === $v_1 ||
            $v_9.RelatedRecipientList[$v_F].AttendeeType === $v_2) $v_B[$v_B.length] = $v_G
    }
    var $v_C = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityCollection($v_A, false, $v_A.length, false);
    $v_5["optionalattendees"] = 10;
    $v_4["optionalattendees"] = $v_C;
    $v_6[3] = "optionalattendees";
    var $v_D = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityCollection($v_B, false, $v_B.length, false);
    $v_5["requiredattendees"] = 10;
    $v_4["requiredattendees"] = $v_D;
    $v_6[4] = "requiredattendees";
    if (!Mscrm.InternalUtilities._String.isNullOrEmpty(CrmEncodeDecode.CrmHtmlDecode($p2))) {
        var $v_H = "";
        if ($p4) {
            var $v_I = CrmEncodeDecode.CrmHtmlDecode($p2).split(":");
            $v_H = $v_I[0];
            $p2 = $v_I[1]
        } else $v_H = Xrm.Internal.getEntityName($p3);
        $v_6[5] = "regardingobjectid";
        $v_5["regardingobjectid"] = 6;
        $v_4["regardingobjectid"] = new Xrm.Objects
            .EntityReference($v_H, new Microsoft.Crm.Client.Core.Framework.Guid(CrmEncodeDecode.CrmHtmlDecode($p2)))
    }
    var $v_E = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_3,
            $v_4,
            $v_5,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_E.get_changedFieldNames().addRange($v_6);
    return $v_E
};
Mscrm.NewMeetingHandler.$2p = function($p0, $p1) {
    var $v_0, $v_1, $v_2, $v_3;
    $v_1 = new Xrm.Objects.EntityReference(Xrm.Internal.getEntityName($p0), $p1);
    $v_1.TypeCode = $p0;
    $v_2 = { partyid: $v_1 };
    $v_3 = { partyid: 6 };
    var $v_4 = new Xrm.Objects.EntityReference("activityparty", Microsoft.Crm.Client.Core.Framework.Guid.get_empty());
    $v_4.TypeName = "activityparty";
    $v_0 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_4,
            $v_2,
            $v_3,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_0.get_changedFieldNames().add("partyid");
    return $v_0
};
Mscrm.NewMeetingHandler.$4W = function($p0) {
    var $v_0 = { addressused: $p0 },
        $v_1 = { addressused: 14 },
        $v_2 = new Xrm.Objects.EntityReference("activityparty", Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_3 = ["addressused"];
    $v_0["addressused"] = $p0;
    $v_1["addressused"] = 14;
    var $v_4 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_2,
            $v_0,
            $v_1,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_4.get_changedFieldNames().addRange($v_3);
    return $v_4
};
Mscrm.NewMeetingHandler.handleAppointmentCreationError = function(isMocaClient) {
    if (isMocaClient) Xrm.Utility.openEntityForm("appointment", null);
    else {
        var $v_0 = {};
        $v_0["preservePreviousContent"] = true;
        Wall.Control.Utils.WindowUtils.openObject(4201,
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString(),
            null,
            null,
            0,
            $v_0)
    }
};
Mscrm.NewMeetingHandler.getDateTimeNow = function() {
    var $v_0 = new Date;
    $v_0.format("dd/M/yy h:mm tt");
    $v_0.setMinutes($v_0.getMinutes() + $v_0.getTimezoneOffset() + Xrm.Page.context.getTimeZoneOffsetMinutes());
    return $v_0
};
Mscrm.RecipientStatusCollection = function() {};
Mscrm.RecipientStatusCollection.prototype = { RelatedRecipientList: null };
Mscrm.RecipientStatus = function() {};
Mscrm.RecipientStatus.prototype = {
    Resolved: false,
    ObjectId: null,
    ObjectType: 0,
    EmailAddress: null,
    AttendeeType: null
};
Mscrm.SolutionConstants = function() {};
Mscrm.LookupAddressDialogResult = function() {};
Mscrm.LookupAddressDialogResult.prototype = { ShipTo: false, BillTo: false, Address: null };
Mscrm.LookupAddressField = function() {};
Mscrm.LookupAddressField.prototype = {
    AddressId: null,
    City: null,
    ContactName: null,
    Country: null,
    Fax: null,
    Line1: null,
    Line2: null,
    Line3: null,
    Name: null,
    PostalCode: null,
    StateOrProvince: null,
    Telephone: null,
    FreightTerms: 0,
    CustomerAddressId: null,
    PrimaryContactName: null,
    ShippingMethod: 0
};
Mscrm.SdkSerializationHelper = function() {};
Mscrm.SdkSerializationHelper.getEntityObject = function(entityName, entityId, overrideTypes) {
    var $v_0 = new Xrm.Objects.EntityReference(entityName, entityId),
        $v_1 = {},
        $v_2 = {},
        $v_3 = new Array(Xrm.Page.data.entity.attributes.getLength()),
        $v_4 = 0,
        $v_5 = entityId !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    Xrm.Page.data.entity.attributes.forEach(function($p1_0, $p1_1) {
        if ($p1_0.getSubmitMode() !== "never")
            if ($v_5 && $p1_0.getIsDirty() || !$v_5) {
                var $v_7 = $p1_0.getValue(), $v_8 = $p1_0.getName(), $v_9 = overrideTypes[$v_8];
                if (Mscrm.InternalUtilities.JSTypes.isNull($v_9)) $v_9 = Mscrm.SdkSerializationHelper.$3j($p1_0);
                if (Mscrm.InternalUtilities.JSTypes.isNull($v_7)) $v_1[$v_8] = null;
                else $v_1[$v_8] = Mscrm.SdkSerializationHelper.$3k($v_7, $v_9);
                $v_2[$v_8] = $v_9;
                if ($p1_0.getIsDirty() || !$v_5 && !Mscrm.InternalUtilities.JSTypes.isNull($v_7)) $v_3[$v_4++] = $v_8
            }
    });
    $v_1["patternendtype"] = $v_1["patternendtype"] || -1;
    var $v_6 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
        .EntityRecord($v_0,
            $v_1,
            $v_2,
            {},
            {},
            new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_6.get_changedFieldNames().addRange($v_3);
    return $v_6
};
Mscrm.SdkSerializationHelper.$3k = function($p0, $p1) {
    switch ($p1) {
    case 10:
        for (var $v_0 = $p0, $v_1 = new Array($v_0.length), $v_4 = 0; $v_4 < $v_0.length; $v_4++) {
            var $v_5 = $v_0[$v_4],
                $v_6 = new Xrm.Objects.EntityReference("activityparty",
                    Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
                $v_7 = {},
                $v_8 = {};
            $v_7["partyid"] = new Xrm.Objects
                .EntityReference($v_5.entityType, new Microsoft.Crm.Client.Core.Framework.Guid($v_5.id), $v_5.name);
            $v_8["partyid"] = 6;
            var $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_6,
                    $v_7,
                    $v_8,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_9.get_changedFieldNames().add("partyid");
            $v_1[$v_4] = $v_9
        }
        return Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.EntityCollection.createFromEntities($v_1);
    case 6:
        var $v_2 = $p0;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && $v_2.length > 0) {
            var $v_A = $v_2[0];
            return new Xrm.Objects.EntityReference($v_A.entityType,
                new Microsoft.Crm.Client.Core.Framework.Guid($v_A.id),
                $v_A.name)
        }
        return null;
    case 2:
        var $v_3 = $p0;
        $v_3 = new Date($v_3.getFullYear(), $v_3.getMonth(), $v_3.getDate(), $v_3.getHours(), $v_3.getMinutes());
        return $v_3;
    default:
        return $p0
    }
};
Mscrm.SdkSerializationHelper.$3j = function($p0) {
    var $v_0 = $p0.getAttributeType();
    switch ($v_0) {
    case "boolean":
        return 0;
    case "datetime":
        return 2;
    case "integer":
        return 5;
    case "lookup":
        var $v_1 = $p0, $v_2 = !!$v_1 && $v_1.getIsPartyList();
        if ($v_2) return 10;
        return 6;
    case "optionset":
        return 11;
    case "string":
    case "memo":
        return 14;
    case "money":
        return 8;
    case "decimal":
        return 3;
    case "double":
        return 4;
    case "uniqueidentifier":
        return 15;
    default:
        throw Error.create(String.format("attributeType '{0}' is not supported", $v_0))
    }
};
Mscrm.RecommendationLineItemMetadata = function() {};
Mscrm.RecommendationLineItemMetadata.prototype = {
    entityName: null,
    entityPrimaryKey: null,
    basketRecordLookupAttributeName: null,
    itemIdAttributeName: null,
    parentEntityPrimaryAttributeName: null
};
Mscrm.RecommendationModelCommandActions = function() {};
Mscrm.RecommendationModelCommandActions.warnIfModeVersionNotLatest = function(total, entityDisplayName) {
    var $v_0 = "", $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = new Array(0);
    $v_4[$v_4.length] = "recommendationmodelversionid";
    Xrm.Internal.messages.retrieve("recommendationmodel",
        Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString(),
        $v_4).then(function($p1_0) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                var $v_5 = $p1_0.entity;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5)) {
                    var $v_6 = $v_5.getValue("recommendationmodelversionid");
                    if (Mscrm.InternalUtilities.JSTypes.isNull($v_6)) return;
                    $v_0 = $v_6.Id.toString();
                    $v_2 = $v_6.Name;
                    if ($v_0 !== "") {
                        var $v_7 =
                            "<fetch version='1.0' mapping='logical'><entity name='recommendationmodelversion'><attribute name='recommendationmodelversionid' /><attribute name='name' /><order attribute='createdon' descending='true' /><filter type='and'><condition attribute='recommendationmodelid' operator='eq' value='" + Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString() + "' /><condition attribute='statuscode' operator='eq' value='3' /></filter></entity></fetch>";
                        Xrm.Internal.messages.retrieveMultiple($v_7).then(function($p2_0) {
                                var $v_8 = $p2_0.entityCollection;
                                if ($v_8.get_count() > 1) {
                                    $v_1 = $v_8.get_entities()[0].getValue("recommendationmodelversionid").toString();
                                    $v_3 = $v_8.get_entities()[0].getValue("name")
                                }
                                if ($v_1 !== "" && $v_0 !== $v_1)
                                    Mscrm.InternalUtilities.DialogUtility
                                        .setLabel("description_id",
                                            String.format(Xrm.Internal
                                                .getResourceString("Dialog_Activate_RecommendationModel_OldActiveVersion_Label_Text"),
                                                $v_3,
                                                $v_2));
                                else
                                    Mscrm.InternalUtilities.DialogUtility
                                        .setLabel("description_id",
                                            String.format(Xrm.Internal
                                                .getResourceString("Dialog_Activate_Description_Activate"),
                                                total,
                                                entityDisplayName))
                            },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                    }
                }
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.CampaignActivityStateHandler = function() {};
Mscrm.CampaignActivityStateHandler.$2O = function($p0) {
    var $v_0 = Xrm.Page.getAttribute("statecode");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Xrm.Page.ui.refreshRibbon();
    $v_0.removeOnChange(Mscrm.CampaignActivityStateHandler.$2O)
};
Mscrm.CampaignActivityStateHandler.prototype = {
    setDates: function(actualStartDate, actualEndDate) {
        this.$2R_0(actualStartDate, "actualstart");
        this.$2R_0(actualEndDate, "actualend")
    },
    updateState: function() {
        var $v_0 = Xrm.Page.getAttribute("statecode");
        $v_0.addOnChange(Mscrm.CampaignActivityStateHandler.$2O)
    },
    $2R_0: function($p0, $p1) {
        if (Mscrm.InternalUtilities.JSTypes.isNull($p0)) return;
        var $v_0 = $p0.toString();
        if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return;
        var $v_1;
        if ($v_0.length > 10)
            $v_1 = new Date(parseInt($v_0.substr(0, 4), 10),
                parseInt($v_0.substr(5, 2), 10) - 1,
                parseInt($v_0.substr(8, 2), 10),
                parseInt($v_0.substr(11, 2), 10),
                parseInt($v_0.substr(14, 2), 10),
                parseInt($v_0.substr(17, 2), 10));
        else
            $v_1 = new Date(parseInt($v_0.substr(0, 4), 10),
                parseInt($v_0.substr(5, 2), 10) - 1,
                parseInt($v_0.substr(8, 2), 10));
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = Xrm.Page.getAttribute($p1);
            this.$2z_0($p1);
            $v_2.setValue($v_1)
        }
    },
    $2z_0: function($p0) { this.$4M_0($p0, false) },
    $4M_0: function($p0, $p1) {
        var $v_0 = Xrm.Page.ui.controls.get($p0);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getDisabled() !== $p1 && $v_0.setDisabled($p1)
    }
};
Mscrm.OpportunityDialogResult = function() {};
Mscrm.OpportunityDialogResult.prototype = { opportunityId: null };
Type.registerNamespace("Mscrm.InternalUtilities");
Mscrm.InternalUtilities.EntityReference = function() {};
Mscrm.InternalUtilities.MetricsReportingContext = function() {};
Mscrm.InternalUtilities.MetricsReportingContext.prototype = { form: 0, grid: 1 };
Mscrm.InternalUtilities.MetricsReportingContext.registerEnum("Mscrm.InternalUtilities.MetricsReportingContext", false);
Mscrm.InternalUtilities.DialogConfirmStrings = function() {};
Mscrm.InternalUtilities.DialogConfirmStrings
    .tryGetDialogStringsForEnabledMetadataDialogs =
    function(dialogName, confirmDialogStrings, entityName, recordsToDelete, actionUri) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(recordsToDelete)) recordsToDelete = 1;
        if (!Mscrm.InternalUtilities.DialogUtility.isMDDConverted(dialogName, entityName)) return false;
        var $v_0 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityName)
            ? Xrm.Internal.getEntityDisplayName(entityName)
            : "";
        if (recordsToDelete > 1)
            $v_0 = !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityName)
                ? Xrm.Internal.getEntityLocalizedSetName(entityName)
                : "";
        var $v_1 = {}, $v_2 = null;
        switch (dialogName) {
        case "delete":
            switch (entityName) {
            case "contact":
                $v_2 = [
                    "Web._grid.cmds.dlg_delete_contact.aspx_54", "Delete_Customer_Dialog_Account_Instruction",
                    "Delete_Customer_Dialog_Delete_Instruction", "Button_Label_Delete", "Button_Label_Cancel",
                    "Dialog_DeleteContactConfirm_Title", "Dialog_DeleteContactConfirm_Description"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Web._grid.cmds.dlg_delete_contact.aspx_54"].toString(),
                    $v_0);
                confirmDialogStrings.text += "\n";
                confirmDialogStrings.text += String.format($v_1["Delete_Customer_Dialog_Account_Instruction"]
                    .toString(),
                    $v_0);
                confirmDialogStrings.text += "\n";
                confirmDialogStrings.text += String.format($v_1["Delete_Customer_Dialog_Delete_Instruction"].toString(),
                    $v_0);
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Dialog_DeleteContactConfirm_Title"].toString(), $v_0);
                confirmDialogStrings.subtitle = String
                    .format($v_1["Dialog_DeleteContactConfirm_Description"].toString(), recordsToDelete, $v_0);
                break;
            case "account":
                $v_2 = [
                    "Web._grid.cmds.dlg_delete_account.aspx_54", "Button_Label_Delete", "Button_Label_Cancel",
                    "Dialog_DeleteAccountConfirm_Title", "Dialog_DeleteAccountConfirm_Description"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Web._grid.cmds.dlg_delete_account.aspx_54"].toString(),
                    $v_0);
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Dialog_DeleteAccountConfirm_Title"].toString(), $v_0);
                confirmDialogStrings.subtitle = String
                    .format($v_1["Dialog_DeleteAccountConfirm_Description"].toString(), recordsToDelete, $v_0);
                if (Xrm.Internal.isDocumentManagementEnabledAccount("account")) {
                    $v_2 = [
                        "Delete_Account_Dialog_RelatedDocumentsWarning", "Delete_Customer_Dialog_Account_Instruction",
                        "Delete_Customer_Dialog_Delete_Instruction"
                    ];
                    $v_1 = Xrm.Internal.getStringKeyList($v_2);
                    confirmDialogStrings.text += String
                        .format($v_1["Delete_Account_Dialog_RelatedDocumentsWarning"].toString());
                    confirmDialogStrings.text += "\n";
                    confirmDialogStrings.text += String
                        .format($v_1["Delete_Customer_Dialog_Account_Instruction"].toString(), $v_0);
                    confirmDialogStrings.text += "\n";
                    confirmDialogStrings.text += String
                        .format($v_1["Delete_Customer_Dialog_Delete_Instruction"].toString(), $v_0)
                }
                break;
            case "knowledgearticle":
                $v_2 = [
                    "Delete_KnowledgeArticle_Dialog_RelatedInformationWarning", "Button_Label_Delete",
                    "Button_Label_Cancel", "Dialog_DeleteKnowledgeArticleConfirm_Title",
                    "Dialog_DeleteKnowledgeArticleConfirm_Description"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = $v_1["Delete_KnowledgeArticle_Dialog_RelatedInformationWarning"].toString();
                confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_Delete"].toString();
                confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
                confirmDialogStrings.title = $v_1["Dialog_DeleteKnowledgeArticleConfirm_Title"].toString();
                confirmDialogStrings.subtitle = String
                    .format($v_1["Dialog_DeleteKnowledgeArticleConfirm_Description"].toString(), recordsToDelete);
                break;
            case "opportunityproduct":
            case "invoicedetail":
                $v_2 = [
                    "Dialog_Delete_DeleteAll", "Button_Label_Delete", "Button_Label_Cancel",
                    "Web._grid.cmds.dlg_delete.aspx_26"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_Delete_DeleteAll"].toString());
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Web._grid.cmds.dlg_delete.aspx_26"].toString());
                confirmDialogStrings.subtitle = "";
                break;
            case "lead":
            case "competitor":
            case "opportunity":
            case "email":
            case "incident":
            case "syncerror":
                $v_2 = [
                    "Dialog_Delete_Description", "Button_Label_Delete", "Button_Label_Cancel",
                    "Web._grid.cmds.dlg_delete.aspx_26"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_Delete_Description"].toString(), $v_0);
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Web._grid.cmds.dlg_delete.aspx_26"].toString());
                confirmDialogStrings.subtitle = "";
                break;
            case "queue":
                $v_2 = [
                    "Dialog_DeleteQueue_Description", "Button_Label_Delete", "Button_Label_Cancel",
                    "Dialog_DeleteQueueEmpty_Title"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_DeleteQueue_Description"].toString(),
                    recordsToDelete,
                    $v_0);
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Dialog_DeleteQueueEmpty_Title"].toString(), $v_0);
                confirmDialogStrings.subtitle = "";
                break;
            case "topicmodel":
                $v_2 = [
                    "Dialog_Delete_Topicmodel_Description", "Button_Label_Delete", "Button_Label_Cancel",
                    "Dialog_Delete_Topicmodel_Title"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_Delete_Topicmodel_Description"].toString());
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Dialog_Delete_Topicmodel_Title"].toString());
                confirmDialogStrings.subtitle = "";
                break;
            case "azureserviceconnection":
                $v_2 = [
                    "Dialog_Delete_AzureServiceConnection_Description", "Button_Label_Delete", "Button_Label_Cancel",
                    "Dialog_Delete_AzureServiceConnection_Title"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_Delete_AzureServiceConnection_Description"]
                    .toString());
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                confirmDialogStrings.title = String.format($v_1["Dialog_Delete_AzureServiceConnection_Title"]
                    .toString());
                confirmDialogStrings.subtitle = "";
                break;
            case "contract":
            case "recurringappointmentmaster":
            case "serviceappointment":
            case "dynamicproperty":
            case "role":
            case "teamtemplate":
            case "calendarrule":
                return false;
            case "product":
                if (!Mscrm.InternalUtilities.JSTypes.isNull(actionUri) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull(actionUri.get_query()["productStructure"]) &&
                    parseInt(actionUri.get_query()["productStructure"].toString()) === 2) {
                    $v_2 = [
                        "Dialog_Delete_Product_Family", "Button_Label_Delete", "Button_Label_Cancel",
                        "Web._grid.cmds.dlg_delete.aspx_26"
                    ];
                    $v_1 = Xrm.Internal.getStringKeyList($v_2);
                    confirmDialogStrings.text = String.format($v_1["Dialog_Delete_Product_Family"].toString());
                    confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Delete"].toString());
                    confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_Cancel"].toString());
                    confirmDialogStrings.title = String.format($v_1["Web._grid.cmds.dlg_delete.aspx_26"].toString());
                    confirmDialogStrings.subtitle = ""
                } else {
                    var $$t_8, $$t_9;
                    Mscrm.InternalUtilities.DialogConfirmStrings
                        .$1w(confirmDialogStrings, $v_0, $$t_8 = { val: $v_1 }, $$t_9 = { val: $v_2 }), $v_1 = $$t_8
                        .val, $v_2 = $$t_9.val
                }
                break;
            case "category":
                $v_2 = [
                    "Dialog_Delete_Description_Category", "Button_Label_Yes", "Button_Label_No",
                    "Web._grid.cmds.dlg_delete.aspx_26"
                ];
                $v_1 = Xrm.Internal.getStringKeyList($v_2);
                confirmDialogStrings.text = String.format($v_1["Dialog_Delete_Description_Category"].toString(), $v_0);
                confirmDialogStrings.confirmButtonLabel = String.format($v_1["Button_Label_Yes"].toString());
                confirmDialogStrings.cancelButtonLabel = String.format($v_1["Button_Label_No"].toString());
                confirmDialogStrings.title = String.format($v_1["Web._grid.cmds.dlg_delete.aspx_26"].toString());
                confirmDialogStrings.subtitle = "";
                break;
            default:
                var $$t_A, $$t_B;
                Mscrm.InternalUtilities.DialogConfirmStrings
                    .$1w(confirmDialogStrings, $v_0, $$t_A = { val: $v_1 }, $$t_B = { val: $v_2 }), $v_1 = $$t_A
                    .val, $v_2 = $$t_B.val;
                break
            }
            break;
        case "saveandroutecase":
            confirmDialogStrings.text = Xrm.Internal
                .getResourceString("Dlg_RouteCase_AddRequiredConfirmForSingleCase_Body");
            confirmDialogStrings.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_Route");
            confirmDialogStrings.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
            confirmDialogStrings.title = Xrm.Internal.getResourceString("Dlg_RouteCase_AddRequiredConfirm_Title");
            break;
        case "routecase":
            $v_2 = [
                "Dlg_RouteCase_AddRequiredConfirmForSingleCase_Body", "Button_Label_Route", "Button_Label_Cancel",
                "Dlg_RouteCase_AddRequiredConfirm_Title"
            ];
            $v_1 = Xrm.Internal.getStringKeyList($v_2);
            confirmDialogStrings.text = $v_1["Dlg_RouteCase_AddRequiredConfirmForSingleCase_Body"].toString();
            confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_Route"].toString();
            confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
            confirmDialogStrings.title = $v_1["Dlg_RouteCase_AddRequiredConfirm_Title"].toString();
            break;
        case "ReactivateCase":
            $v_2 = [
                "Case_Reactivate_Dlg_Title", "Web.CS.cases.dlg_reactivate.aspx_50", "Button_Label_Reactivate",
                "Button_Label_Cancel"
            ];
            $v_1 = Xrm.Internal.getStringKeyList($v_2);
            confirmDialogStrings.title = $v_1["Case_Reactivate_Dlg_Title"].toString();
            confirmDialogStrings.text = $v_1["Web.CS.cases.dlg_reactivate.aspx_50"].toString();
            confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_Reactivate"].toString();
            confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
            break;
        case "ResolveCase":
            $v_2 = [
                "Web._cs.Cases.dlg_ConfirmResolve.aspx_1", "Web._cs.Cases.dlg_ConfirmResolve.aspx_3",
                "Button_Label_Confirm", "Button_Label_Cancel"
            ];
            $v_1 = Xrm.Internal.getStringKeyList($v_2);
            confirmDialogStrings.title = $v_1["Web._cs.Cases.dlg_ConfirmResolve.aspx_1"].toString();
            confirmDialogStrings.text = $v_1["Web._cs.Cases.dlg_ConfirmResolve.aspx_3"].toString();
            confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_Confirm"].toString();
            confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
            break;
        case "ResolveCaseNOvalidStatusReasonTransition":
            $v_2 = [
                "Web.Record.NoValidStatusReasonTransition.Window_Title01", "Web.Record.NoValidStatusReasonTransition01",
                "Button_Label_OK", "Button_Label_Cancel"
            ];
            $v_1 = Xrm.Internal.getStringKeyList($v_2);
            confirmDialogStrings.title = $v_1["Web.Record.NoValidStatusReasonTransition.Window_Title01"].toString();
            confirmDialogStrings.text = $v_1["Web.Record.NoValidStatusReasonTransition01"].toString();
            confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_OK"].toString();
            confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
            break;
        case "CancelCase":
            $v_2 = [
                "Web._cs.Cases.dlg_ConfirmResolve.aspx_4", "Button_Label_Confirm", "Button_Label_Cancel",
                "Web._cs.Cases.dlg_ConfirmCancel.aspx_2"
            ];
            $v_1 = Xrm.Internal.getStringKeyList($v_2);
            confirmDialogStrings.text = $v_1["Web._cs.Cases.dlg_ConfirmResolve.aspx_4"].toString();
            confirmDialogStrings.confirmButtonLabel = $v_1["Button_Label_Confirm"].toString();
            confirmDialogStrings.cancelButtonLabel = $v_1["Button_Label_Cancel"].toString();
            confirmDialogStrings.title = $v_1["Web._cs.Cases.dlg_ConfirmCancel.aspx_2"].toString();
            break;
        case "ApplyEmailTemplate":
            confirmDialogStrings.text = Xrm.Internal
                .getResourceString("Web._cs.ApplyEmailTemplate.dlg_ConfirmResolveText");
            confirmDialogStrings.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_OK");
            confirmDialogStrings.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
            confirmDialogStrings.title = Xrm.Internal
                .getResourceString("Web._cs.ApplyEmailTemplate.dlg_ConfirmResolveTitle");
            break;
        case "UpdateAttachment":
            confirmDialogStrings.text = Xrm.Internal.getResourceString("AddTemplateWithoutAttachment");
            confirmDialogStrings.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_OK");
            confirmDialogStrings.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
            confirmDialogStrings.title = Xrm.Internal
                .getResourceString("Web._cs.ApplyEmailTemplate.dlg_ConfirmResolveTitle");
            break;
        default:
            return false
        }
        return true
    };
Mscrm.InternalUtilities.DialogConfirmStrings.$1w = function($p0, $p1, $p2, $p3) {
    $p3.val = [
        "Dialog_Delete_Description", "Button_Label_Delete", "Button_Label_Cancel", "Web._grid.cmds.dlg_delete.aspx_26"
    ];
    $p2.val = Xrm.Internal.getStringKeyList($p3.val);
    $p0.text = String.format($p2.val["Dialog_Delete_Description"].toString(), $p1);
    $p0.confirmButtonLabel = String.format($p2.val["Button_Label_Delete"].toString());
    $p0.cancelButtonLabel = String.format($p2.val["Button_Label_Cancel"].toString());
    $p0.title = String.format($p2.val["Web._grid.cmds.dlg_delete.aspx_26"].toString());
    $p0.subtitle = ""
};
Mscrm.InternalUtilities.DialogName = function() {};
Mscrm.InternalUtilities.DialogUtility = function() {};
Mscrm.InternalUtilities.DialogUtility.closeDialog = function() {
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("cancel_id");
    Xrm.Page.ui.close()
};
Mscrm.InternalUtilities.DialogUtility.closeDialogAsOk = function() {
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("add_id");
    Xrm.Page.ui.close()
};
Mscrm.InternalUtilities.DialogUtility.MergeRecords = function() {
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("Merge");
    Xrm.Page.ui.close()
};
Mscrm.InternalUtilities.DialogUtility.SetParent = function() {
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("Set");
    Xrm.Page.ui.close()
};
Mscrm.InternalUtilities.DialogUtility.defaultConfirmDialog = function(title, text) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 400;
    var $v_1 = new Xrm.ConfirmDialogStrings;
    $v_1.text = text;
    $v_1.title = title;
    var $v_2 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.InternalUtilities.DialogUtility.closeDialog, null);
    Xrm.Dialog.openConfirmDialog($v_1, $v_0, $v_2, null)
};
Mscrm.InternalUtilities.DialogUtility.isMDDEnabled = function() {
    return Mscrm.CommandBarActions.isWebClient() ||
        Mscrm.CommandBarActions.isOutlookClient() ||
        Mscrm.CommandBarActions.isMobileCompanionApp() && Mscrm.InternalUtilities.DialogUtility.$40()
};
Mscrm.InternalUtilities.DialogUtility.$40 = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.context.getServerDatabaseVersion())) {
        var $v_0 = ".", $v_1 = Xrm.Page.context.getServerDatabaseVersion().split($v_0), $v_2 = 7.1;
        if ($v_1.length >= 2) return parseFloat($v_1[0] + $v_0 + $v_1[1]) >= $v_2
    }
    return false
};
Mscrm.InternalUtilities.DialogUtility.isMDDConverted = function(action, entityName) {
    switch (action) {
    case "activate":
        switch (entityName) {
        case "audit":
        case "campaignresponse":
        case "channelaccessprofilerule":
        case "contract":
        case "service":
        case "sla":
        case "systemuser":
        case "workflow":
        case "kbarticletemplate":
            return false
        }
        break;
    case "deactivatecampactivity":
        return false;
    case "deactivate":
        switch (entityName) {
        case "audit":
        case "campaignresponse":
        case "channelaccessprofilerule":
        case "contract":
        case "service":
        case "sla":
        case "systemuser":
        case "workflow":
        case "kbarticletemplate":
            return false
        }
        break;
    case "delete":
        switch (entityName) {
        case "audit":
        case "service":
        case "workflow":
        case "hierarchyrule":
            return false
        }
        break;
    case "converttoopportunity":
        switch (entityName) {
        case "serviceappointment":
            return false
        }
        break;
    case "converttocase":
        switch (entityName) {
        case "serviceappointment":
            return false
        }
        break;
    case "assign":
        switch (entityName) {
        case "connection":
        case "duplicaterule":
        case "emailserverprofile":
        case "emailsignature":
        case "goal":
        case "goalrollupquery":
        case "importmap":
        case "mailbox":
        case "mailmergetemplate":
        case "postfollow":
        case "queue":
        case "report":
        case "serviceappointment":
        case "sharepointdocumentlocation":
        case "sharepointsite":
        case "workflow":
            return false
        }
        break
    }
    return true
};
Mscrm.InternalUtilities.DialogUtility.isMocaOffline = function() {
    return Mscrm.CommandBarActions.isMobileCompanionApp() && Xrm.Page.context.client.getClientState() === "Offline"
};
Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError = function() {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Generic_Mobile_Client_Offline");
    Xrm.Dialog.openAlertDialog($v_0, null, null)
};
Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked = function(buttonId) {
    var $v_0 = Xrm.Page.getAttribute("lastButtonClicked");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        $v_0.setValue(buttonId);
        if (window.getDialogArguments) window.getDialogArguments()["lastButtonClicked"] = buttonId;
        else if (window.parent.getDialogArguments) window.parent.getDialogArguments()["lastButtonClicked"] = buttonId
    }
};
Mscrm.InternalUtilities.DialogUtility.processActionMddOkCallbackHandler = function() {
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    if (Xrm.Page.data.getIsValid()) Xrm.Page.ui.close();
    else Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked(null)
};
Mscrm.InternalUtilities.DialogUtility
    .processActionMddCancelCallbackHandler = function() { Mscrm.InternalUtilities.DialogUtility.closeDialog() };
Mscrm.InternalUtilities.DialogUtility
    .closeDialogCallback = function(dialogParams, callbackParams) {
        (Mscrm.CommandBarActions.isWebClient() ||
                !Mscrm.InternalUtilities.JSTypes
                .isNull(dialogParams) &&
                dialogParams["lastButtonClicked"] === "ok_id") &&
            Xrm.Page.data.refresh(true)
    };
Mscrm.InternalUtilities.DialogUtility.closeDialogFromGridCallback = function(dialogParams, callbackParams) {
    if (Mscrm.CommandBarActions.isWebClient() ||
        !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh()
    }
};
Mscrm.InternalUtilities.DialogUtility.setLabel = function(controlId, labelText) {
    var $v_0 = Xrm.Page.getControl(controlId);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setLabel(labelText)
};
Mscrm.InternalUtilities.DialogUtility.setAttributeValue = function(attributeId, value) {
    var $v_0 = Xrm.Page.getAttribute(attributeId);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        $v_0.setValue(value);
        var $v_1 = Mscrm.InternalUtilities.DialogUtility.getDialogArguments();
        if (!IsNull($v_1)) $v_1[attributeId] = value
    }
};
Mscrm.InternalUtilities.DialogUtility.getDialogArguments = function() {
    if (window.getDialogArguments) return window.getDialogArguments();
    else if (window.parent.getDialogArguments) return window.parent.getDialogArguments();
    return null
};
Mscrm.InternalUtilities.DialogUtility.getAttributeValue = function(attributeId) {
    var $v_0 = Xrm.Page.getAttribute(attributeId);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return $v_0.getValue();
    return null
};
Mscrm.InternalUtilities.DialogUtility.showHideControl = function(controlId, show) {
    var $v_0 = Xrm.Page.getControl(controlId);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible(show)
};
Mscrm.InternalUtilities.DialogUtility.showProgressMessage = function() {
    var $v_0 = Xrm.Internal.getResourceString("Msg_Progress_MOCA_Dialog");
    Xrm.Internal.progress($v_0, 40, 100, 0)
};
Mscrm.InternalUtilities.DialogUtility.hideProgressMessage = function() { Xrm.Internal.progress("", 100, 100, 0) };
Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca = function(response) {
    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback(response)
};
Mscrm.InternalUtilities.DialogUtility.operationFailedCallbackForMoca = function(response) {
    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
    Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback(response)
};
Mscrm.InternalUtilities.DialogUtility.serializeEntityReferences = function(records) { return JSON.stringify(records) };
Mscrm.InternalUtilities.DialogUtility
    .serializeSdkEntityReferences = function(records) {
        return JSON.stringify(Mscrm.InternalUtilities.DialogUtility.$z(records))
    };
Mscrm.InternalUtilities.DialogUtility.deserializeSdkEntityReferences = function(stringifiedRecords) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(stringifiedRecords)) return new Array(0);
    return Mscrm.InternalUtilities.DialogUtility.$3b(JSON.parse(stringifiedRecords))
};
Mscrm.InternalUtilities.DialogUtility.$z = function($p0) {
    for (var $v_0 = new Array(0), $$arr_2 = $p0, $$len_3 = $$arr_2.length, $$idx_4 = 0; $$idx_4 < $$len_3; ++$$idx_4) {
        var $v_1 = $$arr_2[$$idx_4], $v_2 = new Mscrm.InternalUtilities.EntityReference;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.Name)) $v_2.Name = $v_1.Name;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.Id)) $v_2.Id = $v_1.Id.toString();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.TypeName)) $v_2.TypeName = $v_1.TypeName;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.TypeCode)) $v_2.TypeCode = $v_1.TypeCode;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.LogicalName)) $v_2.LogicalName = $v_1.LogicalName;
        $v_0[$v_0.length] = $v_2
    }
    return $v_0
};
Mscrm.InternalUtilities.DialogUtility.isStateTransitionEnforced = function(entityName) {
    if (!Mscrm.CommandBarActions
        .isWebClient() &&
        !Mscrm.CommandBarActions.isOutlookClient())
        return Mscrm.InternalUtilities.Utilities.enforceStateTransitions(entityName);
    return Xrm.Utility.areStateTransitionsEnforced(entityName)
};
Mscrm.InternalUtilities.DialogUtility.$3b = function($p0) {
    for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1],
            $v_3 = new Xrm.Objects.EntityReference("", Microsoft.Crm.Client.Core.Framework.Guid.get_empty(), "");
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2.Name)) $v_3.Name = $v_2.Name;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_2.Id)) $v_3.Id = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_2.Id);
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2.TypeName)) $v_3.TypeName = $v_2.TypeName;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.TypeCode)) {
            $v_3.TypeCode = $v_2.TypeCode;
            $v_3.LogicalName = Xrm.Internal.getEntityName($v_2.TypeCode);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.LogicalName)) $v_3.LogicalName = $v_2.LogicalName
        }
        $v_0[$v_1] = $v_3
    }
    return $v_0
};
Mscrm.InternalUtilities.LegacyUtils = function() {};
Mscrm.InternalUtilities.LegacyUtils.concatenateUrl = function(url1, url2) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(url1) || !url1.length) return url2;
    if (Mscrm.InternalUtilities.JSTypes.isNull(url2) || !url2.length) return url1;
    if (url1.charAt(url1.length - 1) !== "/" && url2.charAt(0) !== "/") return url1 + "/" + url2;
    if (url1.charAt(url1.length - 1) === "/" && url2.charAt(0) === "/") return url1 + url2.substr(1, url2.length - 1);
    return url1 + url2
};
Mscrm.InternalUtilities.LegacyUtils.setCookie = function(cookieName, cookieValue, expInMinutes) {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(cookieName)) return;
    var $v_0 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(expInMinutes) || expInMinutes !== -1) {
        var $v_1 = new Date;
        $v_1.setTime($v_1.getTime() + expInMinutes * 60 * 1e3);
        $v_0 = "; expires=" + $v_1.toUTCString()
    }
    document.cookie = cookieName + "=" + CrmEncodeDecode.CrmNameValueEncode(cookieValue) + $v_0 + "; path=/"
};
Mscrm.InternalUtilities.LegacyUtils.deleteCookie = function(cookieName) {
    Mscrm.InternalUtilities.LegacyUtils.setCookie(cookieName, "", -1)
};
Mscrm.InternalUtilities.LegacyUtils.getParentEntityIdParams = function() {
    var $v_0 = window.opener, $v_1 = null;
    while (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.closed) {
        $v_1 = $v_0.document.getElementById("crmFormSubmit");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) ||
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.parent) ||
            $v_0 === $v_0.parent) break;
        $v_0 = $v_0.parent
    }
    var $v_2 = {};
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InternalUtilities.LegacyUtils.getFormSubmitId($v_1)) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InternalUtilities.LegacyUtils.getFormObjectTypeInput($v_1))) {
            $v_2["_CreateFromId"] = CrmEncodeDecode
                .CrmUrlEncode(Mscrm.InternalUtilities.LegacyUtils.getFormSubmitId($v_1));
            $v_2["_CreateFromType"] = CrmEncodeDecode
                .CrmUrlEncode(Mscrm.InternalUtilities.LegacyUtils.getFormObjectTypeInput($v_1))
        }
    return $v_2
};
Mscrm.InternalUtilities.LegacyUtils.getFormSubmitId = function(submitForm) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(submitForm)) submitForm = $get("crmFormSubmit");
    return $get("crmFormSubmitId", submitForm).value
};
Mscrm.InternalUtilities.LegacyUtils.getFormObjectTypeInput = function(submitForm) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(submitForm)) submitForm = $get("crmFormSubmitObjectType");
    return $get("crmFormSubmitObjectType", submitForm).value
};
Mscrm.InternalUtilities.LegacyUtils.parseISO8601Date = function(dateString) {
    var $v_0;
    if (dateString.length > 10)
        $v_0 = new Date(parseInt(dateString.substr(0, 4), 10),
            parseInt(dateString.substr(5, 2), 10) - 1,
            parseInt(dateString.substr(8, 2), 10),
            parseInt(dateString.substr(11, 2), 10),
            parseInt(dateString.substr(14, 2), 10),
            parseInt(dateString.substr(17, 2), 10));
    else
        $v_0 = new Date(parseInt(dateString.substr(0, 4), 10),
            parseInt(dateString.substr(5, 2), 10) - 1,
            parseInt(dateString.substr(8, 2), 10));
    return $v_0
};
Mscrm.InternalUtilities.LegacyUtils.formatDurationValue = function(value) {
    var $v_0 = null, $v_1 = 1e-8, $v_2 = value;
    if (!isNaN($v_2)) {
        if ($v_2 < 60) {
            var $v_3 = String.localeFormat("{0:N0}", $v_2);
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_3) || !$v_3.length) return null;
            if ($v_2 === 1) $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Minute"), $v_3);
            else $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Minutes"), $v_3)
        } else if ($v_2 >= 60 && $v_2 < 1440) {
            var $v_4 = $v_2 / 60, $v_5 = String.localeFormat("{0:N2}", $v_4);
            if (Math
                .abs($v_4 % 1) <=
                $v_1 ||
                Math.abs($v_4 % 1 - 1) <= $v_1) $v_5 = String.localeFormat("{0:N0}", $v_4);
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_5) || !$v_5.length) return null;
            if ($v_4 === 1) $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Hour"), $v_5);
            else $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Hours"), $v_5)
        } else if ($v_2 >= 1440) {
            var $v_6 = $v_2 / 60, $v_7 = $v_6 / 24, $v_8 = String.localeFormat("{0:N2}", $v_7);
            if (Math
                .abs($v_7 % 1) <=
                $v_1 ||
                Math.abs($v_7 % 1 - 1) <= $v_1) $v_8 = String.localeFormat("{0:N0}", $v_7);
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_8) || !$v_8.length) return null;
            if ($v_7 === 1) $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Day"), $v_8);
            else $v_0 = String.format(Xrm.Internal.getResourceString("AppDurationControl_Days"), $v_8)
        }
    } else $v_0 = value.toLocaleString();
    return $v_0
};
Mscrm.InternalUtilities.GridUtilities = function() {};
Mscrm.InternalUtilities.GridUtilities
    .executeStandardAction =
    function(actionUri, selectedRecords, dialogWidth, dialogHeight, callback, dialogArguments) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(selectedRecords) || !selectedRecords.length) {
            Mscrm.InternalUtilities._Script.alert(Xrm.Internal
                .getResourceString("Error_Message_Action_NoItemSelected"));
            return
        }
        var $v_0 = actionUri.get_query()["requestType"];
        if (($v_0 === "merge" || $v_0 === "associatechild") && Xrm.Internal.isEnabledForInteractionCentric()) {
            var $v_1 = new Xrm.DialogOptions, $v_2 = {};
            $v_2["isMultiSelect"] = false;
            $v_2["shouldShowOnlyGrid"] = true;
            $v_2["entityName"] = "incident";
            $v_2["primaryAttribute"] = "incidentid";
            $v_2["isAssociate"] = false;
            if ($v_0 === "associatechild") $v_2["isAssociate"] = true;
            for (var $v_3 = new Array(selectedRecords
                         .length),
                $v_6 = 0;
                $v_6 < selectedRecords.length;
                $v_6++) $v_3[$v_6] = selectedRecords[$v_6].Id;
            $v_2["recordIds"] = $v_3;
            var $v_4 = ["title", "customerid", "prioritycode", "createdon", "statecode"];
            $v_2["columnNames"] = $v_4;
            var $v_5 = [
                Xrm.Internal.getResourceString("InteractionCentric_Case_CaseTitle"), Xrm.Internal
                .getResourceString("InteractionCentric_Case_Customer"), Xrm.Internal
                .getResourceString("InteractionCentric_Case_Priority"), Xrm.Internal
                .getResourceString("InteractionCentric_Case_CreatedOn")
            ];
            $v_2["columnLabels"] = $v_5;
            Xrm.Internal.setIsGridDialogContext(true);
            if ($v_0 === "merge") Xrm.Dialog.openDialog("MergeCase", $v_1, $v_2, callback, null);
            else Xrm.Dialog.openDialog("AssociateCase", $v_1, $v_2, callback, null)
        } else {
            if (Mscrm.InternalUtilities.JSTypes.isNull(dialogWidth)) dialogWidth = 400;
            if (Mscrm.InternalUtilities.JSTypes.isNull(dialogHeight)) dialogHeight = 200;
            if (Mscrm.InternalUtilities.JSTypes.isNull(dialogArguments)) {
                for (var $v_8 = new Array(selectedRecords
                             .length),
                    $v_9 = 0;
                    $v_9 < selectedRecords.length;
                    $v_9++) $v_8[$v_9] = selectedRecords[$v_9].Id;
                dialogArguments = $v_8
            }
            var $v_7 = new Xrm.DialogOptions;
            $v_7.height = dialogHeight;
            $v_7.width = dialogWidth;
            Xrm.Internal.openDialog(actionUri.toString(), $v_7, dialogArguments, null, callback)
        }
    };
Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory = function(func, parameters) {
    return function(retValue) {
        parameters.unshift(retValue);
        return func.apply(null, parameters)
    }
};
Mscrm.InternalUtilities.GridUtilities
    .generateStandardActionUri = function(actionName, entityTypeCode, selectedRecordCount) {
        var $v_0 = Mscrm.GlobalImported.CrmUri.create(String
            .format("/_grid/cmds/dlg_{0}.aspx", CrmEncodeDecode.CrmUrlEncode(actionName)));
        $v_0.get_query()["iObjType"] = entityTypeCode;
        $v_0.get_query()["iTotal"] = selectedRecordCount;
        return $v_0
    };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentState = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentState
    .prototype = { active: 0, closed: 1, canceled: 2, resolved: 5 };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentState
    .registerEnum("Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentState", false);
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractDetailState = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractDetailState
    .prototype = { existing: 0, renewed: 1, canceled: 2, expired: 3 };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractDetailState
    .registerEnum("Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractDetailState", false);
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractState = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractState
    .prototype = { draft: 0, invoiced: 1, active: 2, onHold: 3, canceled: 4, expired: 5 };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractState
    .registerEnum("Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ContractState", false);
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QuoteState = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QuoteState.prototype = { draft: 0, active: 1, won: 2, closed: 3 };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QuoteState
    .registerEnum("Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QuoteState", false);
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityState = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityState.prototype = { open: 0, won: 1, lost: 2 };
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityState
    .registerEnum("Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityState", false);
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate = function() {};
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose = function() {};
Mscrm.InternalUtilities.MetricsReportingHelper = function() {};
Mscrm.InternalUtilities.MetricsReportingHelper.addTelemetryLog = function(context, dialogName, entityId) {
    try {
        var $v_0 = {}, $v_1 = "";
        switch (context) {
        case 0:
            $v_1 = "Form";
            break;
        case 1:
            $v_1 = "Grid";
            break
        }
        $v_0["context"] = $v_1;
        $v_0["dialogName"] = dialogName;
        $v_0["entityId"] = entityId.toString();
        $v_0["userRoleId"] = Xrm.Page.context.getUserRoles().toString();
        Xrm.Internal.addMetric("dialogs", $v_0)
    } catch ($v_2) {
    }
};
Mscrm.DetectDuplicateArgs.registerClass("Mscrm.DetectDuplicateArgs");
Mscrm.CommandBarActions.registerClass("Mscrm.CommandBarActions");
Mscrm.CommandBarActions.ContractVariables.registerClass("Mscrm.CommandBarActions.ContractVariables");
Mscrm.CommandBarActions.ContractLineVariables.registerClass("Mscrm.CommandBarActions.ContractLineVariables");
Mscrm.CommandBarActions.ContractStateCode.registerClass("Mscrm.CommandBarActions.ContractStateCode");
Mscrm.CommandBarActions.ContractDetailStateCode.registerClass("Mscrm.CommandBarActions.ContractDetailStateCode");
Mscrm.CallbackReference.registerClass("Mscrm.CallbackReference");
Mscrm.ResolveCaseDialogResult.registerClass("Mscrm.ResolveCaseDialogResult");
Mscrm.GridCommandActions.registerClass("Mscrm.GridCommandActions");
Mscrm.GridCommandActions.ContentPanel.registerClass("Mscrm.GridCommandActions.ContentPanel");
Mscrm.GridCommandActions.ExportDialogArguments.registerClass("Mscrm.GridCommandActions.ExportDialogArguments");
Mscrm.GridCommandActions.ExportDialogReturnValue.registerClass("Mscrm.GridCommandActions.ExportDialogReturnValue");
Mscrm.NewMeetingHandler.registerClass("Mscrm.NewMeetingHandler");
Mscrm.RecipientStatusCollection.registerClass("Mscrm.RecipientStatusCollection");
Mscrm.RecipientStatus.registerClass("Mscrm.RecipientStatus");
Mscrm.SolutionConstants.registerClass("Mscrm.SolutionConstants");
Mscrm.LookupAddressDialogResult.registerClass("Mscrm.LookupAddressDialogResult");
Mscrm.LookupAddressField.registerClass("Mscrm.LookupAddressField");
Mscrm.SdkSerializationHelper.registerClass("Mscrm.SdkSerializationHelper");
Mscrm.RecommendationLineItemMetadata.registerClass("Mscrm.RecommendationLineItemMetadata");
Mscrm.RecommendationModelCommandActions.registerClass("Mscrm.RecommendationModelCommandActions");
Mscrm.CampaignActivityStateHandler.registerClass("Mscrm.CampaignActivityStateHandler");
Mscrm.OpportunityDialogResult.registerClass("Mscrm.OpportunityDialogResult");
Mscrm.InternalUtilities.EntityReference.registerClass("Mscrm.InternalUtilities.EntityReference");
Mscrm.InternalUtilities.DialogConfirmStrings.registerClass("Mscrm.InternalUtilities.DialogConfirmStrings");
Mscrm.InternalUtilities.DialogName.registerClass("Mscrm.InternalUtilities.DialogName");
Mscrm.InternalUtilities.DialogUtility.registerClass("Mscrm.InternalUtilities.DialogUtility");
Mscrm.InternalUtilities.LegacyUtils.registerClass("Mscrm.InternalUtilities.LegacyUtils");
Mscrm.InternalUtilities.GridUtilities.registerClass("Mscrm.InternalUtilities.GridUtilities");
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .registerClass("Mscrm.InternalUtilities.MetadataDrivenDialogConstants");
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose
    .registerClass("Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose");
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose
    .registerClass("Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose");
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate
    .registerClass("Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate");
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose
    .registerClass("Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose");
Mscrm.InternalUtilities.MetricsReportingHelper.registerClass("Mscrm.InternalUtilities.MetricsReportingHelper");
Mscrm.CommandBarActions.entityName = null;
Mscrm.CommandBarActions.$2 = null;
Mscrm.CommandBarActions.$5 = null;
Mscrm.CommandBarActions.$D = null;
Mscrm.CommandBarActions.$4 = null;
Mscrm.CommandBarActions.$L = null;
Mscrm.CommandBarActions.$3 = null;
Mscrm.CommandBarActions.$T = null;
Mscrm.CommandBarActions.$K = null;
Mscrm.CommandBarActions.$n = null;
Mscrm.CommandBarActions.$c = false;
Mscrm.CommandBarActions.$1L = false;
Mscrm.CommandBarActions.$q = 1.8e6;
Mscrm.CommandBarActions.$C = 6e4;
Mscrm.CommandBarActions.$r = 1440;
Mscrm.CommandBarActions.$p = 8.64e7;
Mscrm.CommandBarActions.$9 = null;
Mscrm.CommandBarActions.$8 = null;
Mscrm.CommandBarActions.$14 = null;
Mscrm.CommandBarActions.$u = null;
Mscrm.CommandBarActions.$W = false;
Mscrm.CommandBarActions.$I = null;
Mscrm.CommandBarActions.$o = false;
Mscrm.CommandBarActions.$l = "Button_Label_Cancel";
Mscrm.CommandBarActions.$Q = false;
Mscrm.CommandBarActions._oneDriveLocationNotCreated = new Microsoft.Crm.Client.Core.Framework
    .Guid("d311bf6e-6683-4583-9909-69f7182da440");
Mscrm.CommandBarActions.$S = new Microsoft.Crm.Client.Core.Framework.Guid("BEF666F6-2EAD-4B6A-BCD4-22D87DFFF51E");
Mscrm.CommandBarActions.$2Y = 2147878720;
Mscrm.CommandBarActions.$J = null;
Mscrm.CommandBarActions.$M = {};
Mscrm.CommandBarActions.defaultQuantityAccuracy = 0;
Mscrm.CommandBarActions.productQuantityAccuracy = 0;
Mscrm.CommandBarActions.$15 = false;
Mscrm.CommandBarActions.$d = false;
Mscrm.CommandBarActions.ContractVariables.$B = false;
Mscrm.CommandBarActions.ContractVariables.$b = -1;
Mscrm.CommandBarActions.ContractVariables.$G = false;
Mscrm.CommandBarActions.ContractLineVariables.$B = false;
Mscrm.CommandBarActions.ContractLineVariables.$N = 0;
Mscrm.CommandBarActions.ContractLineVariables.$G = false;
Mscrm.CommandBarActions.ContractStateCode.Draft = 0;
Mscrm.CommandBarActions.ContractStateCode.Invoiced = 1;
Mscrm.CommandBarActions.ContractStateCode.Active = 2;
Mscrm.CommandBarActions.ContractStateCode.OnHold = 3;
Mscrm.CommandBarActions.ContractStateCode.Canceled = 4;
Mscrm.CommandBarActions.ContractStateCode.Expired = 5;
Mscrm.CommandBarActions.ContractDetailStateCode.Existing = 0;
Mscrm.CommandBarActions.ContractDetailStateCode.Renewed = 1;
Mscrm.CommandBarActions.ContractDetailStateCode.Canceled = 2;
Mscrm.CommandBarActions.ContractDetailStateCode.Expired = 3;
Mscrm.GridCommandActions.entityLogicalName = null;
Mscrm.SolutionConstants.defaultSolutionId = "{FD140AAF-4DF4-11DD-BD17-0019B9312238}";
Mscrm.InternalUtilities.DialogConfirmStrings.ActivateGridDialogWidth = 600;
Mscrm.InternalUtilities.DialogConfirmStrings.ActivateGridDialogHeight = 250;
Mscrm.InternalUtilities.DialogConfirmStrings.DeactivateGridDialogWidth = 600;
Mscrm.InternalUtilities.DialogConfirmStrings.DeactivateGridDialogHeight = 250;
Mscrm.InternalUtilities.DialogConfirmStrings.CompletePhoneCallDialogWidth = 600;
Mscrm.InternalUtilities.DialogConfirmStrings.CompletePhoneCallDialogHeight = 250;
Mscrm.InternalUtilities.DialogConfirmStrings.DeactivateFormDialogWidth = 420;
Mscrm.InternalUtilities.DialogConfirmStrings.DeactivateFormDialogHeight = 250;
Mscrm.InternalUtilities.DialogConfirmStrings.QueueItemReleaseDialogWidth = 450;
Mscrm.InternalUtilities.DialogConfirmStrings.QueueItemReleaseDialogHeight = 200;
Mscrm.InternalUtilities.DialogConfirmStrings.QueueItemRemoveDialogWidth = 450;
Mscrm.InternalUtilities.DialogConfirmStrings.QueueItemRemoveDialogHeight = 200;
Mscrm.InternalUtilities.DialogConfirmStrings.Id = "Id";
Mscrm.InternalUtilities.DialogConfirmStrings.EnableNewMddCode = false;
Mscrm.InternalUtilities.DialogName.RouteCase = "routecase";
Mscrm.InternalUtilities.DialogName.SaveAndRouteCase = "saveandroutecase";
Mscrm.InternalUtilities.DialogName.DeleteDialog = "delete";
Mscrm.InternalUtilities.DialogName.AddToQueueDialog = "AddToQueue";
Mscrm.InternalUtilities.DialogName.ReactivateCase = "ReactivateCase";
Mscrm.InternalUtilities.DialogName.ResolveCase = "ResolveCase";
Mscrm.InternalUtilities.DialogName.QueueItemPickDialog = "QueueItemPick";
Mscrm.InternalUtilities.DialogName.RouteQueuedItemDialog = "RouteQueuedItem";
Mscrm.InternalUtilities.DialogName.Assign = "Assign";
Mscrm.InternalUtilities.DialogName.AssignQueue = "AssignQueue";
Mscrm.InternalUtilities.DialogName.CancelCaseDialog = "CancelCase";
Mscrm.InternalUtilities.DialogName.SetRegarding = "SetRegarding";
Mscrm.InternalUtilities.DialogName.ConvertActivityDialog = "ConvertActivity";
Mscrm.InternalUtilities.DialogName.ConvertToCaseDialog = "ConvertToCase";
Mscrm.InternalUtilities.DialogName.ConvertToKnowledgeArticleDialog = "ConvertToKnowledgeArticle";
Mscrm.InternalUtilities.DialogName.CloseOpportunity = "CloseOpportunity";
Mscrm.InternalUtilities.DialogName.CloseOrder = "CloseOrder";
Mscrm.InternalUtilities.DialogName.CloseInvoice = "InvoiceClose";
Mscrm.InternalUtilities.DialogName.CloseQuote = "CloseQuote";
Mscrm.InternalUtilities.DialogName.CreateOrder = "CreateOrder";
Mscrm.InternalUtilities.DialogName.SetStateDialog = "SetStateDialog";
Mscrm.InternalUtilities.DialogName.RecommendationModelDialog = "RecommendationModelDialog";
Mscrm.InternalUtilities.DialogName.SeriesActionDialog = "SeriesActionDialog";
Mscrm.InternalUtilities.DialogName.DupWarningDialog = "DupWarning";
Mscrm.InternalUtilities.DialogName.ApplyEmailTemplate = "ApplyEmailTemplate";
Mscrm.InternalUtilities.DialogName.SelectTemplateRecipient = "SelectTemplateRecipient";
Mscrm.InternalUtilities.DialogName.UpdateAttachment = "UpdateAttachment";
Mscrm.InternalUtilities.DialogName.Lookup = "Lookup";
Mscrm.InternalUtilities.DialogName.CreateSlaDialog = "CreateSlaDialog";
Mscrm.InternalUtilities.DialogName.AssociateCase = "AssociateCase";
Mscrm.InternalUtilities.DialogName.MergeCase = "MergeCase";
Mscrm.InternalUtilities.DialogName.RecommendedDocument = "RecommendedDocument";
Mscrm.InternalUtilities.DialogName.DocumentSuggestions = "DocumentSuggestions";
Mscrm.InternalUtilities.DialogName.OtherDocumentSuggestions = "OtherDocumentSuggestions";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DialogOkId = "ok_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DialogCancelId = "cancel_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DialogMerge = "Merge";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DialogSet = "Set";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EntityId = "entityId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EntityName = "entityName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ActionCardId = "actionCardId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CardType = "cardType";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LastButtonClicked = "lastButtonClicked";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ProgressValue = 40;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ProgressMinValue = 0;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ProgressMaxValue = 100;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.GridControl = "gridControl";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Records = "records";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .resolveCaseNoValidStatusReasonTransition = "ResolveCaseNOvalidStatusReasonTransition";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EntityTypeCode = "entityTypeCode";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DefaultStatus = -1;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.BusinessQueuesLookupId = "businessqueues_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.incidentActiveState = "Active";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.statusReasonId = "setcasestatus_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.statusReasonLabelId = "lbl_setcasestatus";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .noValidStatusTransitionAlertTextResourceString = "Web.Record.NoValidStatusReasonTransition03";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.timeSpent = "timeSpent";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.isTimeAllotment = "bIsTimeAllotment";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.allotmentsRemaining = "iAllotmentsRemaining";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.resolutionType = "resolutionType_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.resolution = "resolution_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.totalTime = "totaltime_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.billableTime = "billabletime_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.remarks = "remarks_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .closeCaseConfirmAllotments = "Case_Resolve_Dlg_Confirm_Allotments";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.closeCaseString = "Web.CS.cases.dlg_closecase.aspx_27";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .closeCaseStringForNullSubject = "Web.CS.cases.dlg_closecase.aspx_50";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.closeCaseConfirmParent = "Case_Resolve_Dlg_Confirm_Parent";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .closeCaseConfirmContractDetailState = "Case_Resolve_Dlg_Confirm_ContractDetailState";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.resolvedState = "Resolved";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.RemoveQueueItemPickId = "checkboxpick_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemPickHeaderText = "lbl_headerdescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemRouteToId = "routeto_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemUserLookupId = "crmUserLookupControl_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemQueueLookupId = "crmQueueLookupControl_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemRemoveId = "chkBoxRemoveItem_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemAssignedToUserText = "lbl_assignedtouser";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemAssignedToQueueText = "lbl_addtoqueue";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QueueItemRouteHeaderText = "lbl_headerdescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.AssignQueueDialogLabel = "label_DialogDescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.AssignTomeOption = "rdoMe_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SelectedRecordsCount = "selectedRecordsCount";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SystemUserViewId = "systemuserview_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.statusCodeId = "statusCode_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CancelStatus = "Canceled";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Id = "Id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.regardingObjectColumnName = "regardingobjectid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.regardingObjectTypeColumnName = "regardingobjecttypecode";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.regardingControlName = "regarding_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.activity = "Activity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.activityLogicalName = "activitypointer";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpenNewId = "cbOpenNew_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpenNewRecord = "openNewRecord";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SaveActivityId = "cbSaveActivity_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SaveActivity = "saveActivity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LogResponseId = "cbLogResponse_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Subject = "subject";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LeadLookup = "leadLookup";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CustomerLookup = "customerLookup";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CurrencyLookup = "currencyLookup";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CampaignLookup = "campaignassociatedview_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SubjectLookup = "subject_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LeadId = "leadId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OwnerId = "ownerId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OwnerType = "ownerType";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OwnerName = "ownerName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityId = "opportunityId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CaseId = "incidentId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.TransactionCurrencyId = "transactioncurrencyid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.StateCode = "statecode";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Caller = "caller";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CallerParameters = "callerparameters";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EstimatedValue = "estimatedvalue";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ActualRevenueId = "actualrevenue_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.OpportunityStatusReasonId = "statusreason_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CompetitorId = "competitor_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CloseDateId = "closedate_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DescriptionId = "description_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Won = "won";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.WonString = "Won";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LostString = "Lost";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LabelSubtitle = "lbl_closedescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DescriptionMaxLength = 200;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.HeaderTitleId = "header_title_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.TitleId = "title_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.MessageId = "message_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.StateId = "state_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.StatusId = "status_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.selectedState = "selectedState";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.allowedTransitions = "allowedTransitions";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.action = "action";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.activate = "activate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.deactivate = "deactivate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.defaultCloseState = "defaultCloseState";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Completed = 1;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Canceled = 2;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Inactive = 1;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.Active = 0;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DeleteOccurrence = "deleteoccurrence_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DeleteSeriesKeepCompleted = "deleteserieskeepcompleted_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DeleteSeriesAllInstances = "deleteseriesallinstances_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DeleteDescriptionId = "deletedescription_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SeriesId = "seriesId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.AttachementSubGridControl = "attachmentsGrid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ControlNullError = " control cannot be null";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.CursorInfoData = "cursorInfo";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DefaultGuidString = "00000000-0000-0000-0000-000000000000";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants
    .DefaultFormattedGuidString = "{00000000-0000-0000-0000-000000000000}";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DefaultLookupName = "default";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.DescriptionAttribute = "description";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailTemplateControlName = "emailtemplates_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailSubject = "emailsubject";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailDescription = "emaildescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailEntityName = "email";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailEntityId = "id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailEntityType = "entityType";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailFormData = "emailFormData";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailToField = "to";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EmailCcField = "cc";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EntityType = "type";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.EntityTypeInfo = "entityTypeInfo";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.FieldControlName = "fieldname_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.KeyPresent = "KeyPresent";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LanguageId = "language_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.RecordControlName = "record_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.RegardingObject = "regardingobjectid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.RecipientNames = "name";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SelectControlName = "select_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SubjectAttribute = "subject";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.TemplateEntityName = "template";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.TemplateId = "templateId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentAccountLookupId = "parentAccountLookup_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentContactLookupId = "parentContactLookup_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.QualifyStatus = "qualifyStatus";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentAccountId = "parentAccountId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentAccountName = "parentAccountName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentContactId = "parentContactId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ParentContactName = "parentContactName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.qualifyLeadCommandName = "QualifyLead";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.convertActivityCommandName = "ConvertActivity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.loseOpportunityCommandName = "LoseOpportunity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.winOpportunityCommandName = "WinOpportunity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.resolveCaseCommandName = "CloseIncident";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.setState = "SetState";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.closeActivityCommandName = "CloseActivity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.commaSeperator = ",";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.defaultIndex = 0;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.firstIndex = 1;
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.logicalName = "LogicalName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.StatusCode = "statuscode";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentTitle = "incident_title";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentDescription = "incident_description";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentResolution = "incident_resolution";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IncidentResolutionDescription = "incidentresolution_description";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleTitle = "title_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleContent = "content_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleId = "knowledgeArticleId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleOwnerId = "owner_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleSubjectId = "subject_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SubjectId = "subjectId";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SubjectName = "subjectName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleSubjectName = "subjectName";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.ConvertToKnowledgeArticleOwnerType = "ownerType";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.slaName = "name_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SLASelectedEnity = "applicableEntity_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.PriceLevelId = "pricelevelid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.SuggestionsSource = "SuggestionsSource";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.IsCustomLineItemEntity = "isCustomLineItemEntity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.LineItemMetaData = "lineItemMetaData";
Mscrm.InternalUtilities.MetadataDrivenDialogConstants.PanoramaItemDialog = "PanoramaItemDialog";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose.invoiceId = "invoiceid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose.ClosedState = "closedstate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose.DialogTitle = "header_lbl_closeinvoice";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose.DialogDescription = "lbl_closeinvoicedescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsInvoiceClose.Reason = "closeinvoicestatusreason_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.salesId = "salesorderid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.ClosedState = "closedstate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.DialogTitle = "header_lbl_closeorder";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.DialogDescription = "lbl_closeorderdescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.Reason = "closeorderstatusreason_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.Date = "closeorderdate_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderClose.Description = "description_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.quoteId = "quoteid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.canCloseOpportunity = "cancloseopportunity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.opportunityId = "opportunityid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.ClosedState = "closedstate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.DialogTitle = "header_lbl_createorder";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.DialogDescription = "lbl_createorderdescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.Reason = "createorderstatusreason_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate
    .ReasonDescription = "createorderstatusreasondescription_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.Date = "createorderdate_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.CloseOpportunity = "createordercloseopportunity_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate
    .CalculateRevenueFromQuote = "createordercalcrevenue_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.ActualRevenue = "actualrevenue_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsOrderCreate.Description = "description_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.quoteId = "quoteid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.canCloseOpportunity = "cancloseopportunity";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.opportunityId = "opportunityid";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.ClosedState = "closedstate";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.DialogTitle = "header_lbl_closequote";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.DialogDescription = "lbl_closequotedescription";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.Reason = "closequotestatusreason_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.Date = "closequotedate_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.Description = "description_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.CreateRevisedQuote = "closequotecreaterevisedquote_id";
Mscrm.InternalUtilities.MetadataDrivenDialogConstantsQuoteClose.CloseOpportunity = "closequotecloseopportunity_id"