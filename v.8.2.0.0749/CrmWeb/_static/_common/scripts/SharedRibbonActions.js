Type.registerNamespace("Mscrm");
Mscrm.IncidentActions = function() {};
Mscrm.IncidentActions.resolveCase = function(selectedCaseData, gridControl) {
    Mscrm.GridCommandActions.resolveCase(selectedCaseData, gridControl)
};
Mscrm.IncidentActions.cancelCase = function(selectedCaseData, gridControl) {
    Mscrm.IncidentGridCommandActions.cancelCase(selectedCaseData, gridControl)
};
Mscrm.IncidentActions.runRoutingRule = function(gridControl, selectedCases) {
    Mscrm.IncidentGridCommandActions.runRoutingRule(gridControl, selectedCases)
};
Mscrm.RibbonActions = function() {};
Mscrm.RibbonActions.isRefreshForm = function() { return Mscrm.CommandBarActions.isRefreshForm() };
Mscrm.RibbonActions.notOnMarketingListOrListUnlocked = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListUnLocked()
};
Mscrm.RibbonActions.notOnMarketingListOrListActive = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListActive()
};
Mscrm.RibbonActions.alwaysEnabled = function() { return Mscrm.CommandBarActions.alwaysEnabled() };
Mscrm.RibbonActions.isAutoSaveEnabled = function() { return Xrm.Page.context.getIsAutoSaveEnabled() };
Mscrm.RibbonActions.isBulkSetRegardingValid = function(entityTypeCode, records) {
    return Mscrm.GridCommandActions.isBulkSetRegardingValid(entityTypeCode, records)
};
Mscrm.RibbonActions.saveForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("");
    else Mscrm.RibbonActions.saveLegacyForm(form, "Save")
};
Mscrm.RibbonActions.saveAndCloseForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("saveandclose");
    else Mscrm.RibbonActions.saveLegacyForm(form, "SaveAndClose")
};
Mscrm.RibbonActions.saveAndNewForm = function(form) {
    if (Mscrm.RibbonActions.isRefreshForm()) Mscrm.CommandBarActions.saveForm("saveandnew");
    else Mscrm.RibbonActions.saveLegacyForm(form, "SaveAndNew")
};
Mscrm.RibbonActions.sendFormShortcut = function(usingEmail, form) {
    Mscrm.CommandBarActions.sendFormShortcut(usingEmail, form)
};
Mscrm.RibbonActions.openNewRecord = function(entityLogicalName, gridControl) {
    var $v_0 = null;
    if (Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp() ||
        Mscrm.InternalUtilities.Utilities.isRefreshForm() ||
        Mscrm.Utilities.isTurboForm()) {
        Mscrm.CommandBarActions.openNewRecord(entityLogicalName, gridControl, null);
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.isLiteSubGrid())
        if (entityLogicalName === "activitypointer" && gridControl.get_gridType() === 3) {
            gridControl.addButtonClickHandler();
            return
        } else if (entityLogicalName === "activitypointer") {
            $v_0 = {};
            $v_0["activityRegardingObjectId"] = Xrm.Page.data.entity.getId()
        } else if (Mscrm.GridRibbonActions.OpenQuickCreateFormForNewRecord(gridControl)) return;
    if (Xrm.Internal.isFeatureEnabled("FCB.SLAV2") && entityLogicalName === "sla") {
        var $v_1 = null;
        if (Mscrm.CommandBarActions.isWebClient()) {
            $v_1 = new Xrm.DialogOptions;
            $v_1.height = 250;
            $v_1.width = 600
        }
        Xrm.Dialog.openDialog("CreateSlaDialog", $v_1, Mscrm.RibbonActions.$3(), Mscrm.RibbonActions.$0, null)
    } else Xrm.Utility.openEntityForm(entityLogicalName, null, $v_0);
    try {
        var $v_2 = {};
        $v_2["context"] = Mscrm.InternalUtilities.JSTypes.isNull(gridControl) ? "form" : "grid";
        $v_2["dialogName"] = "New";
        $v_2["entityId"] = Xrm.Internal.getEntityCode(entityLogicalName).toString();
        $v_2["userRoleId"] = Xrm.Page.context.getUserRoles().toString();
        Mscrm.MetricsReporting.instance().addMetric("dialogs", $v_2)
    } catch ($v_3) {
    }
};
Mscrm.RibbonActions.$0 = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0["lastButtonClicked"] === "ok_id") {
        var $v_0 = {};
        $v_0["name"] = $p0["name_id"];
        $v_0["objecttypecode"] = $p0["applicableEntity_id"];
        $v_0["primaryentityotc"] = $p0["applicableEntity_id"];
        Xrm.Utility.openEntityForm("sla", null, $v_0)
    }
};
Mscrm.RibbonActions.$3 = function() {
    var $v_0 = {};
    $v_0["lastButtonClicked"] = "ok_id";
    $v_0["name_id"] = "";
    $v_0["applicableEntity_id"] = -1;
    return $v_0
};
Mscrm.RibbonActions.openObjFromClassic = function(entityTypeCode) {
    Mscrm.RibbonActions.openNewRecord(Xrm.Internal.getEntityName(entityTypeCode), null)
};
Mscrm.RibbonActions.isEntitlementActive = function() {
    var $v_0 = true;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page
            .data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui)) {
        var $v_1 = Xrm.Page.getAttribute("statecode");
        if (Xrm.Page.data.entity.getEntityName() === "entitlement")
            if (Xrm.Page.ui.getFormType() === 4) $v_0 = true;
            else $v_0 = false;
        else if (Xrm.Page.ui.getFormType() === 4 &&
            (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.getText() === "Inactive")) $v_0 = false;
        else $v_0 = true
    }
    return $v_0
};
Mscrm.RibbonActions.enableAddCaseForContract = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(window
        .ADDCASE_ENABLED_FOR_CONTRACT)) return window.ADDCASE_ENABLED_FOR_CONTRACT;
    else return true
};
Mscrm.RibbonActions
    .addConnectionFromForm = function(objectId, objectTypeCode, primaryControl, connectToMe, gridControl) {
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(gridControl)) {
            var $v_0 = gridControl.GetParameter("viewid");
            if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
                if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector))
                    if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector().getCurrentView))
                        if (!Mscrm.InternalUtilities.JSTypes.isNull(gridControl.getViewSelector().getCurrentView())) {
                            $v_0 = gridControl.getViewSelector().getCurrentView().id;
                            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
                                $v_0 = $v_0.replace("{", "").replace("}", "").toUpperCase();
                                $v_0 = "{" + $v_0 + "}"
                            }
                        }
            var $v_1 = Xrm.Page.data.entity.getEntityName();
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
                if ($v_1 === "knowledgearticle")
                    if ($v_0 === "{DDB43BE7-F7DA-4D90-845F-06552A446DA0}") {
                        Mscrm.KnowledgeArticleCommandActions.relateArticle();
                        return
                    } else if ($v_0 === "{BA3387BF-382D-4376-A538-5B02467925D3}") {
                        Mscrm.KnowledgeArticleCommandActions.relateProduct();
                        return
                    } else if ($v_0 === "{50E935BA-2E0D-460D-AD36-B699B9B991D8}") {
                        Mscrm.KnowledgeArticleCommandActions.relateCategory();
                        return
                    }
        }
        if (Mscrm.InternalUtilities.Utilities
            .isRefreshForm()) Mscrm.CommandBarActions.addConnectionFromForm(objectId, objectTypeCode, connectToMe);
        else {
            var $v_2 = String.format("pId={0}&pType={1}",
                CrmEncodeDecode.CrmNameValueEncode(objectId),
                CrmEncodeDecode.CrmNameValueEncode(objectTypeCode.toString()));
            if (connectToMe) $v_2 = String.format("{0}&connectToMe=true", $v_2);
            if (objectTypeCode === 1022) $v_2 = String.format("{0}&connectFromPricelevel=true", $v_2);
            openObj(3234, "", $v_2, null, 0, null)
        }
    };
Mscrm.RibbonActions.enableAddCaseForContractLine = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(window
        .ADDCASE_ENABLED_FOR_CONTRACTLINE)) return window.ADDCASE_ENABLED_FOR_CONTRACTLINE;
    else return true
};
Mscrm.RibbonActions.showAbandon = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) return $v_1 === "active"
        }
    }
    return false
};
Mscrm.RibbonActions.showFinish = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus(),
                $v_2 = !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1) && $v_1 === "active";
            if ($v_2) return Xrm.Page.data.process.isLastStage()
        }
    }
    return false
};
Mscrm.RibbonActions.showSetActiveStage = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process)) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script
                .isNullOrUndefined($v_1) &&
                $v_1 === "active") return Xrm.Page.data.process.canSetActiveStage()
        }
    }
    return false
};
Mscrm.RibbonActions.showReactivate = function() {
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.process) &&
        Xrm.Internal.isFeatureEnabled("FCB.ProcessUnification")) {
        var $v_0 = Xrm.Page.data.process.getActiveProcess();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.getStatus();
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_1)) return $v_1 !== "active"
        }
    }
    return false
};
Mscrm.XrmRibbonActionUtilities = function() {};
Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp = function() {
    return Xrm.Page.context.client.getClient() === "Mobile"
};
Mscrm.OpportunityActions = function() {};
Mscrm.OpportunityActions.close = function(selectedOpportunities, won, gridControl) {
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        typeof Mscrm.OpportunityGridCommandActions !== "undefined" &&
            Mscrm.OpportunityActions.$2(selectedOpportunities, won);
        return
    }
    typeof Mscrm.OpportunityActions !== "undefined" &&
        Mscrm.OpportunityActions.closeLegacy(selectedOpportunities, won, gridControl)
};
Mscrm.OpportunityActions.$2 = function($p0, $p1) { Mscrm.OpportunityGridCommandActions.opportunityClose($p0, $p1) };
Mscrm.GridRibbonActions = function() {};
Mscrm.GridRibbonActions.associateChildCase = function(gridControl, records, entityTypeCode) {
    if (!records) return;
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri("mergemultiple", entityTypeCode, records.length),
        $v_1 = -1;
    if (Xrm.Internal.isEnabledForInteractionCentric()) {
        if (records.length < 2) {
            Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ASSCO_LESS_RECORDS"),
                    $v_1.toString()),
                null);
            return
        }
        $v_1 = Xrm.Internal.getLocatorServiceSetting("MaxChildIncidentNumber");
        if (records.length > $v_1) {
            Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ASSCO_TOOMANY_RECORDS"),
                    $v_1.toString()),
                null);
            return
        }
    } else {
        if (records.length < 2) {
            alert(window.LOCID_ASSCO_LESS_RECORDS);
            return
        }
        $v_1 = window.MAX_CHILD_INCIDENT_NUMBER;
        if (records.length > $v_1) {
            alert(String.format(window.LOCID_ASSCO_TOOMANY_RECORDS, $v_1.toString()));
            return
        }
    }
    var $v_2 = false;
    if (Xrm.Internal.isEnabledForInteractionCentric()) $v_2 = Xrm.Internal.savePreSelectedViewModelIds();
    $v_0.get_query()["requestType"] = "associatechild";
    var $v_3 = [$v_2, gridControl, "associatechild", entityTypeCode, records],
        $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.GridCommandActions.showMessageAfterMergeAssocAndRefreshGrid, $v_3);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_0, records, 800, 570, $v_4)
};
Mscrm.GridRibbonActions.deleteRecords = function(gridControl, records, entityTypeCode) {
    if (Mscrm.XrmRibbonActionUtilities.isMobileCompanionApp()) {
        Mscrm.GridCommandActions.deleteRecords(gridControl, records, entityTypeCode);
        return null
    }
    switch (entityTypeCode) {
    case 1085:
    case 1089:
    case 1091:
    case 4230:
    case 9812:
        if (typeof Mscrm.Grid !== "undefined") return Mscrm.Grid.deleteRecords(gridControl, records, entityTypeCode);
        return null;
    default:
        if (typeof Mscrm
            .GridCommandActions !==
            "undefined") Mscrm.GridCommandActions.deleteRecords(gridControl, records, entityTypeCode);
        else if (typeof Mscrm.Grid !== "undefined")
            return Mscrm.Grid.deleteRecords(gridControl, records, entityTypeCode);
        return null
    }
};
Mscrm.GridRibbonActions
    .canMarkComplete = function(records) { return Mscrm.GridCommandActions.canMarkComplete(records) };
Mscrm.GridRibbonActions.gridDisassociate = function(typeCode, gridControl, firstSelectedItemId) {
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        if (typeCode === 9959) {
            Mscrm.GridRibbonActions.$1(typeCode, gridControl);
            return
        }
        Mscrm.CommandBarActions.disassociate(gridControl, null);
        return
    }
    Mscrm.GridRibbonActions.gridDisassociateLegacy(typeCode, gridControl, firstSelectedItemId)
};
Mscrm.GridRibbonActions.$1 = function($p0, $p1) {
    for (var $v_0 = $p1.getGrid().getSelectedRows().getAll(), $v_1 = new Array($v_0.length), $v_A = 0;
        $v_A < $v_0.length;
        $v_A++)
        $v_1[$v_A] = new Xrm.Objects.EntityReference($v_0[$v_A].getData().getEntity().getEntityName(),
            new Microsoft.Crm.Client.Core.Framework.Guid($v_0[$v_A].getKey()));
    var $v_2 = 570,
        $v_3 = 205,
        $v_4 = Xrm.Internal.getEntityName($p0),
        $v_5 = new Xrm.ConfirmDialogStrings,
        $v_6 = !Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($v_4)
            ? Xrm.Internal.getEntityDisplayName($v_4)
            : "",
        $v_7 = {},
        $v_8 = null;
    $v_8 = [
        "Dialog_Delete_Description", "Button_Label_Delete", "Button_Label_Cancel", "Web._grid.cmds.dlg_delete.aspx_26"
    ];
    $v_7 = Xrm.Internal.getStringKeyList($v_8);
    $v_5.text = String.format($v_7["Dialog_Delete_Description"].toString(), $v_6);
    $v_5.confirmButtonLabel = String.format($v_7["Button_Label_Delete"].toString());
    $v_5.cancelButtonLabel = String.format($v_7["Button_Label_Cancel"].toString());
    $v_5.title = String.format($v_7["Web._grid.cmds.dlg_delete.aspx_26"].toString());
    $v_5.subtitle = "";
    var $v_9 = new Xrm.DialogOptions;
    $v_9.height = $v_3;
    $v_9.width = $v_2;
    Xrm.Dialog.openConfirmDialog($v_5, $v_9, function() { Mscrm.CommandBarActions.disassociate($p1, $v_1) }, null)
};
Mscrm.GridRibbonActions.isBulkSaveAsCancelledValid = function(entityTypeCode) {
    if (Xrm.Page.context.client
        .getClient() ===
        "Outlook" &&
        Xrm.Page.context.client.getClientState() === "Offline") return false;
    return Mscrm.GridCommandActions.isBulkSaveAsCancelledValid(entityTypeCode)
};
Mscrm.GridRibbonActions.isBulkSaveAsCompletedValid = function(entityTypeCode) {
    return Mscrm.GridCommandActions.isBulkSaveAsCompletedValid(entityTypeCode)
};
Mscrm.GridRibbonActions
    .addNewFromSubGridStandard = function(gridTypeCode,
        parentEntityTypeCode,
        parentEntityId,
        primaryControl,
        gridControl) {
        if (!Mscrm.XrmRibbonActionUtilities
            .isMobileCompanionApp())
            Mscrm.GridRibbonActions
                .addNewFromSubGridStandardLegacy(gridTypeCode, parentEntityTypeCode, parentEntityId, gridControl);
        else
            Mscrm.GridCommandActions.addNewFromSubGrid(gridTypeCode,
                parentEntityTypeCode,
                parentEntityId,
                primaryControl,
                gridControl)
    };
Mscrm.GridRibbonActions.addExistingFromSubGrid = function(gridTypeCode, gridControl) {
    Mscrm.GridCommandActions.addExistingFromSubGridStandard(gridTypeCode, gridControl)
};
Mscrm.GridRibbonActions.addToQueue = function(gridControl, records, entityTypeCode) {
    Mscrm.GridCommandActions.addToQueue(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.assignSelectedRecords = function(gridControl, selectedRecords, entityTypeCode) {
    Mscrm.GridCommandActions.assignSelectedRecords(gridControl, selectedRecords, entityTypeCode)
};
Mscrm.GridRibbonActions.setRegarding = function(gridControl, records, entityTypeCode) {
    Mscrm.GridCommandActions.setRegarding(gridControl, records, entityTypeCode)
};
Mscrm.GridRibbonActions.activate = function(gridControl, records, entityTypeCode, callback) {
    Mscrm.GridCommandActions.activate(gridControl, records, entityTypeCode, callback)
};
Mscrm.GridRibbonActions.deactivate = function(gridControl, records, entityTypeCode, defaultCloseState, callback) {
    Mscrm.GridCommandActions.deactivate(gridControl, records, entityTypeCode, defaultCloseState, callback)
};
Mscrm.GridRibbonActions.notOnMarketingListOrListUnlocked = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListUnLocked()
};
Mscrm.GridRibbonActions.notOnMarketingListOrListActive = function(entityTypeCode) {
    if (Xrm.Page.context.client.getClient() === "Mobile") return true;
    if (entityTypeCode !== 4300) return true;
    return isListActive()
};
Mscrm.GridRibbonActions.isActionCardButtonVisible = function(gridControl, records, buttonCardTypes) {
    if (!records || !records.length) return false;
    for (var $v_0 = records[0].Id,
        $v_1 = gridControl.getCellValue("cardtype", $v_0),
        $v_2 = buttonCardTypes.split(","),
        $$arr_6 = $v_2,
        $$len_7 = $$arr_6.length,
        $$idx_8 = 0;
        $$idx_8 < $$len_7;
        ++$$idx_8) {
        var $v_3 = $$arr_6[$$idx_8];
        if ($v_3 === $v_1) return true
    }
    return false
};
Mscrm.GridRibbonActions.isRegardingObjectPresent = function(gridControl, records) {
    if (!records || !records.length) return false;
    var $v_0 = records[0].Id, $v_1 = gridControl.getCellValue("regardingobjectid", $v_0);
    if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_1)) {
        if (!IsNull(Xrm.Page.data) && !Mscrm.GridRibbonActions.$4($v_1)) return false;
        return true
    }
    return false
};
Mscrm.GridRibbonActions.isSkypeUrlPresent = function(gridControl, records) {
    if (!records || !records.length) return false;
    var $v_0 = records[0].Id, $v_1 = gridControl.getCellValue("cardtype", $v_0);
    if ($v_1 === "21" || $v_1 === "100") {
        var $v_2 = gridControl.getCellValue("description", $v_0);
        if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_2)) {
            if ($v_2.indexOf("https://join.microsoft.com/meet") > -1) return true;
            return false
        }
    } else {
        var $v_3 = gridControl.getCellValue("data", $v_0);
        if ($v_3) {
            var $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_3), $v_5 = $v_4.cardRelatedInfo;
            if ($v_5) {
                var $v_6 = $v_5.Phone;
                if (!Mscrm.InternalUtilities._String.isNullOrEmpty($v_6)) return true
            }
            return false
        } else return false
    }
    return false
};
Mscrm.GridRibbonActions.isEmailPresentInAttendees = function(gridControl, records) {
    var $v_0 = false, $v_1 = new RegExp('^[^@\\s\\"<>)(\\[\\]:;,]+@[^@\\s\\"<>)(\\[\\]:;,]+$');
    if (!records || !records.length) return $v_0;
    var $v_2 = records[0].Id,
        $v_3 = gridControl.getCellValue("cardtype", $v_2),
        $v_4 = gridControl.getCellValue("data", $v_2);
    if ($v_4) {
        var $v_5 = Sys.Serialization.JavaScriptSerializer.deserialize($v_4),
            $v_6 = $v_5.cardRelatedInfo,
            $v_7 = $v_6.attendees;
        if (!IsNull(Xrm.Page.data)) return $v_0;
        else if ($v_7.length > 0) {
            for (var $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                var $v_9 = $v_7[$v_8], $v_A = $v_9.contextPrimaryInfo, $v_B = $v_A.description;
                if ($v_1.test($v_B)) $v_0 = true
            }
            return $v_0
        }
    }
    return $v_0
};
Mscrm.GridRibbonActions.$4 = function($p0) {
    var $v_0 = $p0.split(":");
    if (Xrm.Page.data.entity.getEntityName() === $v_0[0] &&
        (new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()))
        .equals(new Microsoft.Crm.Client.Core.Framework.Guid($v_0[1]))) return false;
    return true
};
Mscrm.FormAction = function() {};
Mscrm.FormAction.changeState = function(action, objectType, formEventId, objectSubtype) {
    if (!Mscrm.InternalUtilities.Utilities.isRefreshForm()) {
        Mscrm.FormAction.changeStateLegacy(action, objectType, formEventId, objectSubtype);
        return
    }
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.data.entity.getEntityName();
    Mscrm.CommandBarActions.changeState(action, $v_0, $v_1)
};
Mscrm.FormAction.assignObject = function(objectType) {
    if (!Mscrm.CommandBarActions.isMobileCompanionApp()) {
        Mscrm.FormAction.assignObjectLegacy(objectType);
        return
    }
    if (typeof objectType !== "number") objectType = parseInt(objectType, 10);
    Mscrm.CommandBarActions.assignObject(objectType)
};
Mscrm.IncidentActions.registerClass("Mscrm.IncidentActions");
Mscrm.RibbonActions.registerClass("Mscrm.RibbonActions");
Mscrm.XrmRibbonActionUtilities.registerClass("Mscrm.XrmRibbonActionUtilities");
Mscrm.OpportunityActions.registerClass("Mscrm.OpportunityActions");
Mscrm.GridRibbonActions.registerClass("Mscrm.GridRibbonActions");
Mscrm.FormAction.registerClass("Mscrm.FormAction")