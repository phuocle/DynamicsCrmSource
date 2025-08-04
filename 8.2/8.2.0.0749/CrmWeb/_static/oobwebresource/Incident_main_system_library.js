Type.registerNamespace("Mscrm");
Mscrm.ThemeType = function() {};
Mscrm.ThemeType.prototype = { Outlook15White: 0 };
Mscrm.ThemeType.registerEnum("Mscrm.ThemeType", false);
Mscrm.IncidentCommandBarActions = function() {};
Mscrm.IncidentCommandBarActions
    .performActionAfterConfirmCancel = function(returnValue) {
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue) && Mscrm.CommanBardActions.CommonForResolve()
    };
Mscrm.IncidentCommandBarActions.cancel = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) return;
    if (!Xrm.Page.data.getIsValid()) return;
    var $v_0 = 0;
    Xrm.Internal.messages.getValidStatusTransition(Xrm.Page.data.entity.getId(), 2).then(function($p1_0) {
            $v_0 = $p1_0.result;
            switch ($v_0) {
            case 1:
                Mscrm.IncidentCommandBarActions.openAlertDialog(Xrm.Internal
                    .getResourceString("Web.Record.NoValidStatusReasonTransition02"));
                break;
            case 2:
                var $v_1 = new Xrm.DialogOptions;
                $v_1.height = 200;
                $v_1.width = 600;
                Mscrm.IncidentCommandBarActions.performActionAfterCallbackCancelCase($v_1);
                break;
            case 3:
                Mscrm.IncidentCommandBarActions.openDialogAfterConfirmCancelCase();
                break;
            case 4:
                Mscrm.IncidentCommandBarActions
                    .openAlertDialog(Xrm.Internal.getResourceString("Error_Message_0x80044411"));
                break
            }
        },
        function($p1_0) { return })
};
Mscrm.IncidentCommandBarActions.openAlertDialog = function(alertText) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = alertText;
    Xrm.Dialog.openAlertDialog($v_0, null, null)
};
Mscrm.IncidentCommandBarActions.openDialogAfterConfirmCancelCase = function() {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 230;
    $v_0.width = 520;
    var $v_1 = {};
    $v_1["entityId"] = Xrm.Page.data.entity.getId();
    $v_1["lastButtonClicked"] = "ok_id";
    var $v_2 = Mscrm.IncidentCommandBarActions.cancelCaseFormDialogCloseCallback;
    Xrm.Dialog.openDialog("CancelCase", $v_0, $v_1, $v_2, null)
};
Mscrm.IncidentCommandBarActions.performActionAfterCallbackCancelCase = function(options) {
    var $v_0 = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("CancelCase", $v_0, null)) {
        var $v_1 = Mscrm.IncidentCommandBarActions.openDialogAfterConfirmCancelCase;
        Xrm.Dialog.openConfirmDialog($v_0, options, $v_1, null)
    }
};
Mscrm.IncidentCommandBarActions
    .cancelCaseFormDialogCloseCallback = function(dialogParams, callbackParams) {
        !Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) &&
            dialogParams["lastButtonClicked"] === "ok_id" &&
            Mscrm.CommandBarActions.performPageRefresh(true)
    };
Mscrm.IncidentCommandBarActions.caseCancelOnLoad = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    Mscrm.IncidentCommandBarActions.$8(2, "statusCode_id")
};
Mscrm.IncidentCommandBarActions.$8 = function($p0, $p1) {
    if (Mscrm.InternalUtilities.DialogUtility.isStateTransitionEnforced("incident")) {
        if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.InternalUtilities.DialogUtility
            .getAttributeValue("entityId"))) return;
        var $v_0 = Mscrm.InternalUtilities.DialogUtility.getAttributeValue("entityId").toString();
        Xrm.Internal.messages.retrieve("incident", $v_0, ["statuscode"]).then(function($p1_0) {
                var $v_1 = $p1_0.entity, $v_2 = parseInt($v_1.getValue("statuscode").getValue("value").toString());
                Xrm.Internal.getAllowedStatusTransitions("incident", $v_2)
                    .then(function($p2_0) { Mscrm.IncidentCommandBarActions.$0("incident", $p0, $p1, $p2_0) },
                        function() {})
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    } else Mscrm.IncidentCommandBarActions.$0("incident", $p0, $p1, null)
};
Mscrm.IncidentCommandBarActions.caseCancelApplyChangesClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = new Mscrm.CancelCaseDialogResult, $v_1 = "", $v_2 = Xrm.Page.getAttribute("entityId");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2.getValue();
    if (Xrm.Page.data.entity.getIsDirty()) {
        var $v_3 = Xrm.Page.getControl("statusCode_id"), $v_4 = $v_3.getAttribute();
        if (!(Mscrm.InternalUtilities.JSTypes
            .isNull($v_3) &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_4))) $v_0.StatusCode = $v_4.getSelectedOption().value
    } else $v_0.StatusCode = Mscrm.IncidentCommandBarActions.$4;
    Mscrm.IncidentCommandBarActions.performActionAfterCancelCaseMoca($v_0, $v_1)
};
Mscrm.IncidentCommandBarActions
    .performActionAfterCancelCaseMoca = function(returnValue, caseId) {
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue.StatusCode) &&
            Xrm.Internal.messages.setState("incident", caseId, 2, returnValue.StatusCode)
            .then(function() { Xrm.Page.ui.close() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    };
Mscrm.IncidentCommandBarActions.performActionAfterCancelCase = function(returnValue) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        Xrm.Page.context.saveMode = 1;
        Xrm.Page.data.save().then(function() {
                var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = 2;
                Xrm.Internal.messages.setState("incident", $v_0, $v_1, returnValue.StatusCode)
                    .then(function() { Mscrm.CommandBarActions.performPageRefresh(false) },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
            },
            Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
    }
};
Mscrm.IncidentCommandBarActions.reactivate = function() {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 600;
    Mscrm.IncidentCommandBarActions.ReactivateCase($v_0, $v_1)
};
Mscrm.IncidentCommandBarActions.performActionAfterReactivateCase = function(returnValue) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue.StatusCode)) {
        var $v_0 = 0;
        Xrm.Internal.messages.setState("incident", Xrm.Page.data.entity.getId(), $v_0, returnValue.StatusCode)
            .then(function() { Mscrm.CommandBarActions.performPageRefresh(true) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.IncidentCommandBarActions.saveAndRunRoutingRuleAndClose = function(entityId) {
    if (!Xrm.Page.data.getIsValid()) return;
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_routecase.aspx");
    $v_0.get_query()["iTotal"] = 1;
    var $v_1 = Xrm.Page.getAttribute("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_0.get_query()["sStateCode"] = $v_1.getValue();
    var $v_2 = new Xrm.DialogOptions;
    $v_2.height = 200;
    $v_2.width = 400;
    var $v_3 = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("saveandroutecase", $v_3, null)) {
        var $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.IncidentCommandBarActions.actionAfterSaveAndRoutingRule, [entityId]);
        Xrm.Dialog.openConfirmDialog($v_3, $v_2, $v_4, null)
    } else {
        var $v_5 = Mscrm.IncidentCommandBarActions.performActionAfterSaveAndRunRoutingRule;
        Xrm.Internal.openDialog($v_0.toString(), $v_2, [Xrm.Page.data.entity.getId()], null, $v_5)
    }
};
Mscrm.IncidentCommandBarActions.actionAfterSaveAndRoutingRule = function(result, entityId) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Xrm.Page.data.save().then(function() {
            var $v_0 = new Array(1);
            $v_0[0] = Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityId)
                ? Xrm.Page.data.entity.getId()
                : entityId;
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.IncidentGridCommandActions.$1($v_0, null)
        },
        Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback)
};
Mscrm.IncidentCommandBarActions.performActionAfterSaveAndRunRoutingRule = function(result) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(result) && result.toString() === "false") return;
    else Xrm.Page.ui.close()
};
Mscrm.IncidentCommandBarActions.runRoutingRuleAndClose = function(entityId) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 200;
    $v_0.width = 400;
    var $v_1 = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("routecase", $v_1, null)) {
        var $v_2 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.IncidentCommandBarActions.actionAfterRoutingRule, [entityId]);
        Xrm.Dialog.openConfirmDialog($v_1, $v_0, $v_2, null)
    }
};
Mscrm.IncidentCommandBarActions.actionAfterRoutingRule = function(result, entityId) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = new Array(1);
    $v_0[0] = Mscrm.InternalUtilities.JSTypes.isNull(entityId) ? Xrm.Page.data.entity.getId() : entityId;
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.IncidentGridCommandActions.$1($v_0, null)
};
Mscrm.IncidentCommandBarActions.performActionAfterRunRoutingRule = function(result) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(result) && result.toString() === "false") return;
    else Xrm.Page.ui.close()
};
Mscrm.IncidentCommandBarActions.createChildCase = function() {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.data.entity.getEntityName();
    if (Mscrm.CommandBarActions.isMobileCompanionApp())
        Xrm.Utility.create($v_1,
            new Xrm.Objects.EntityReference("incident", new Microsoft.Crm.Client.Core.Framework.Guid($v_0)),
            null,
            null,
            function($p1_0) { Mscrm.IncidentCommandBarActions.$6() },
            null);
    else {
        var $v_2 = new Xrm.LookupObject;
        $v_2.id = $v_0;
        $v_2.entityType = $v_1;
        Xrm.Utility.openQuickCreate(Xrm.Page.data.entity.getEntityName(), $v_2, null)
            .then(function($p1_0) { Mscrm.IncidentCommandBarActions.$6() }, null)
    }
};
Mscrm.IncidentCommandBarActions.$6 = function() { Xrm.Page.data.refresh(true) };
Mscrm.IncidentCommandBarActions.isNotChildCase = function() {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity
            .attributes)) $v_0 = Xrm.Page.getAttribute("parentcaseid");
    return !($v_0 && $v_0.getValue())
};
Mscrm.IncidentCommandBarActions.ReactivateCase = function($p0, $p1) {
    var $v_0 = 0;
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Xrm.Internal.messages.getValidStatusTransition($p0, $v_0).then(function($p1_0) {
            $v_0 = $p1_0.result;
            if (Mscrm.InternalUtilities._Script.isNullOrUndefined($v_0)) return;
            if ($v_0 === 1) {
                var $v_1 = new Xrm.AlertDialogStrings;
                $v_1.text = String.format(Xrm.Internal.getResourceString("Web.Record.NoValidStatusReasonTransition03"));
                Xrm.Dialog.openAlertDialog($v_1, null, null)
            } else {
                var $v_2 = Xrm.Utility.areStateTransitionsEnforced("incident");
                $p1.height = 200;
                $p1.width = 535;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
                    if (!$v_2) {
                        var $v_3 = new Xrm.ConfirmDialogStrings;
                        if (Mscrm.InternalUtilities.DialogConfirmStrings
                            .tryGetDialogStringsForEnabledMetadataDialogs("ReactivateCase", $v_3, null)) {
                            var $v_4 = Mscrm.InternalUtilities.GridUtilities
                                .createCallbackFunctionFactory(Mscrm.IncidentCommandBarActions.ActionAfterReactivate,
                                    [$p0, null, false]);
                            Xrm.Dialog.openConfirmDialog($v_3, $p1, $v_4, null)
                        }
                    } else {
                        var $v_5 = {};
                        $v_5["entityId"] = $p0;
                        Xrm.Dialog.openDialog("ReactivateCase",
                            $p1,
                            $v_5,
                            Mscrm.InternalUtilities.DialogUtility.closeDialogCallback,
                            null)
                    }
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.IncidentCommandBarActions.ActionAfterReactivate = function(retValue, caseId, statusCode, isOpenDialog) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(caseId)) return;
    var $v_0 = 0;
    if (!statusCode || Mscrm.InternalUtilities.JSTypes.isNull(statusCode)) statusCode = -1;
    Xrm.Internal.messages.setState("incident", caseId, $v_0, statusCode).then(function() {
            if (!isOpenDialog) Mscrm.CommandBarActions.performPageRefresh(true);
            else Xrm.Page.ui.close()
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.IncidentCommandBarActions.$0 = function($p0, $p1, $p2, $p3) {
    var $v_0 = -1;
    if (Xrm.Utility.isMocaOffline()) {
        $v_0 = Xrm.Utility.retrieveDefaultStatusForState("incident", $p1);
        Mscrm.IncidentCommandBarActions.$A($p0, $p1, $p2, $p3, $v_0)
    } else
        Xrm.Internal.messages.retrieveDefaultStatusForState("incident", $p1).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) $v_0 = $p1_0.status;
                Mscrm.IncidentCommandBarActions.$A($p0, $p1, $p2, $p3, $v_0)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.IncidentCommandBarActions.$A = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = Xrm.Page.getControl($p2), $v_1 = $v_0.getAttribute();
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        Xrm.Internal.getStatusOptionsFromStateCode($p0, $p1).then(function($p1_0) {
                for (var $v_2 = $v_1.getOptions(),
                    $v_3 = new Array(0),
                    $$arr_A = $v_2,
                    $$len_B = $$arr_A.length,
                    $$idx_C = 0;
                    $$idx_C < $$len_B;
                    ++$$idx_C) {
                    var $v_4 = $$arr_A[$$idx_C];
                    if (Array.contains($p1_0, $v_4.value) &&
                    (Mscrm.InternalUtilities.JSTypes
                        .isNull($p3) ||
                        Array.contains($p3, $v_4.value))) $v_3[$v_3.length] = $v_4.value;
                    else $v_0.removeOption($v_4.value)
                }
                $v_3 = Mscrm.InternalUtilities.JSTypes.isNull($p3) ? $p1_0 : $v_3;
                $v_1.setValue($p4 !== -1 && Array.contains($v_3, $p4) ? $p4 : $v_3[0]);
                $p2 !== "resolutionType_id" && $v_0.setVisible($v_3.length > 1)
            },
            function() {})
};
Mscrm.IncidentCommandBarActions.ReactivateCaseDialogOnLoad = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    Mscrm.IncidentCommandBarActions.$8(0, "setcasestatus_id")
};
Mscrm.IncidentCommandBarActions.ReactivateCaseButtonClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = null;
    if (Xrm.Page.data.entity.getIsDirty()) {
        var $v_2 = Xrm.Page.getControl("setcasestatus_id"), $v_3 = $v_2.getAttribute();
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_2) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_0 = $v_3.getSelectedOption().value
    }
    var $v_1 = Xrm.Page.getAttribute("entityId");
    Mscrm.IncidentCommandBarActions.ActionAfterReactivate(true, $v_1.getValue().toString(), $v_0, true)
};
Mscrm.ConvertToKnowledgeArticle = function() {};
Mscrm.ConvertToKnowledgeArticle.convertToKnowledgeArticleCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = dialogParams["knowledgeArticleId"], $v_1 = dialogParams["openNewRecord"];
        $v_1 === "true" && Xrm.Utility.openEntityForm("knowledgearticle", $v_0, null)
    }
};
Mscrm.ConvertToKnowledgeArticle.convertToKnowledgeArticleOnLoad = function() {
    var $v_0 = Xrm.Page.getAttribute("title_id"), $v_1 = Xrm.Page.getAttribute("incident_title");
    $v_0.setValue($v_1.getValue());
    var $v_2 = null, $v_3 = Xrm.Page.getAttribute("content_id"), $v_4 = Xrm.Page.getAttribute("incident_description");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) $v_2 = $v_4.getValue();
    else $v_2 = "";
    var $v_5 = Xrm.Page.getAttribute("incident_resolution");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_5) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())) $v_2 = $v_2 + " " + $v_5.getValue();
    var $v_6 = Xrm.Page.getAttribute("incidentresolution_description");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) $v_2 = $v_2 + " " + $v_6.getValue();
    $v_3.setValue($v_2);
    var $v_7 = Xrm.Page.getAttribute("owner_id"),
        $v_8 = Xrm.Page.getAttribute("ownerId"),
        $v_9 = Xrm.Page.getAttribute("ownerName"),
        $v_A = Xrm.Page.getAttribute("ownerType");
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_8.getValue()) &&
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_9.getValue())) {
        var $v_E = new Xrm.LookupObject;
        $v_E.entityType = $v_A.getValue();
        $v_E.id = $v_8.getValue();
        $v_E.name = $v_9.getValue();
        var $v_F = new Array(1);
        $v_F[0] = $v_E;
        $v_7.setValue($v_F)
    }
    var $v_B = Xrm.Page.getAttribute("subject_id"),
        $v_C = Xrm.Page.getAttribute("subjectId"),
        $v_D = Xrm.Page.getAttribute("subjectName");
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_C.getValue()) &&
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_D.getValue())) {
        var $v_G = new Xrm.LookupObject;
        $v_G.entityType = "subject";
        $v_G.id = $v_C.getValue();
        $v_G.name = $v_D.getValue();
        var $v_H = new Array(1);
        $v_H[0] = $v_G;
        $v_B.setValue($v_H)
    }
};
Mscrm.ConvertToKnowledgeArticle.convertToKnowledgeArticleClick = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getAttribute("owner_id")) ||
        Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getAttribute("owner_id").getValue())) {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("Alert_Conv_Case_Owner_Must"));
        return
    }
    var $v_0 = Xrm.Page.getAttribute("cbOpenNew_id");
    Mscrm.InternalUtilities.DialogUtility.setAttributeValue("openNewRecord", $v_0.getValue().toString());
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_1 = Xrm.Page.getAttribute("entityId").getValue(),
        $v_2 = Xrm.Page.getAttribute("entityTypeCode").getValue(),
        $v_3 = Xrm.Page.getAttribute("owner_id").getValue()[0],
        $v_4 = Xrm.Page.getAttribute("subject_id").getValue(),
        $v_5 = null;
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_4)) $v_5 = $v_4[0];
    var $v_6 = Xrm.Page.getAttribute("title_id").getValue(), $v_7 = "";
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getAttribute("content_id"))) {
        $v_7 = Xrm.Page.getAttribute("content_id").getValue();
        if ($v_7) $v_7 = Mscrm.ConvertToKnowledgeArticle.formatStringForCKEditor($v_7)
    }
    var $v_8 = null, $v_9 = Mscrm.ConvertToKnowledgeArticle.createKnowledgeArticleEntityRecord($v_6, $v_7, $v_3, $v_5);
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    Xrm.Internal.messages.create($v_9).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            if ($p1_0) {
                $v_8 = $p1_0.id;
                Mscrm.InternalUtilities.DialogUtility.setAttributeValue("knowledgeArticleId", $v_8.toString())
            }
            var $v_A = Mscrm.ConvertToKnowledgeArticle.createKnowledgeArticleIncidentEntityRecord($v_1, $v_8);
            Xrm.Internal.messages.create($v_A).then(function($p2_0) { Xrm.Page.ui.close() },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.ConvertToKnowledgeArticle
    .createKnowledgeArticleEntityRecord = function(title, content, ownerLookup, subjectLookup) {
        var $v_0 = {}, $v_1 = {}, $v_2 = new Array(7), $v_3 = null;
        $v_3 = "title";
        $v_2[0] = $v_3;
        $v_1[$v_3] = 14;
        $v_0[$v_3] = title;
        $v_3 = "content";
        $v_2[1] = $v_3;
        $v_1[$v_3] = 14;
        $v_0[$v_3] = content;
        $v_3 = "stageid";
        $v_2[2] = $v_3;
        $v_1[$v_3] = 15;
        $v_0[$v_3] = "0C6ED1C6-E9F1-4B43-8D9B-F680FDED9B67";
        $v_3 = "processid";
        $v_2[3] = $v_3;
        $v_1[$v_3] = 15;
        $v_0[$v_3] = "AB81C1AF-1A45-48D9-8133-3EDC033DBEEF";
        $v_3 = "traversedpath";
        $v_2[4] = $v_3;
        $v_1[$v_3] = 14;
        $v_0[$v_3] = "0c6ed1c6-e9f1-4b43-8d9b-f680fded9b67";
        $v_3 = "ownerid";
        $v_2[5] = $v_3;
        $v_1[$v_3] = 6;
        $v_0[$v_3] = new Xrm.Objects.EntityReference(ownerLookup.entityType,
            new Microsoft.Crm.Client.Core.Framework.Guid(ownerLookup.id.toString()),
            ownerLookup.name);
        if (!Mscrm.InternalUtilities.JSTypes.isNull(subjectLookup)) {
            $v_3 = "subjectid";
            $v_2[6] = $v_3;
            $v_1[$v_3] = 6;
            $v_0[$v_3] = new Xrm.Objects.EntityReference("subject",
                new Microsoft.Crm.Client.Core.Framework.Guid(subjectLookup.id.toString()),
                subjectLookup.name)
        }
        var $v_4 = new Xrm.Objects.EntityReference("knowledgearticle",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_4,
                    $v_0,
                    $v_1,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_5.get_changedFieldNames().addRange($v_2);
        return $v_5
    };
Mscrm.ConvertToKnowledgeArticle.createKnowledgeArticleIncidentEntityRecord = function(entityId, knowledgeArticleId) {
    var $v_0 = {}, $v_1 = {}, $v_2 = new Array(3), $v_3 = null;
    $v_3 = "knowledgearticleid";
    $v_2[0] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = new Xrm.Objects.EntityReference("knowledgearticle", knowledgeArticleId);
    $v_3 = "incidentid";
    $v_2[1] = $v_3;
    $v_1[$v_3] = 6;
    $v_0[$v_3] = new Xrm.Objects.EntityReference("incident", entityId);
    $v_3 = "knowledgeusage";
    $v_2[2] = $v_3;
    $v_1[$v_3] = 11;
    $v_0[$v_3] = 3;
    var $v_4 = new Xrm.Objects.EntityReference("knowledgearticleincident",
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
        $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_4,
                $v_0,
                $v_1,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_5.get_changedFieldNames().addRange($v_2);
    return $v_5
};
Mscrm.ConvertToKnowledgeArticle.convertToKnowledgeArticleLaunchDialog = function(objectTypeCode) {
    if (Xrm.Page.data.entity.getIsDirty()) {
        Mscrm.InternalUtilities._Script.alert(Xrm.Internal.getResourceString("ConvCaseSaveWarning"));
        return
    } else {
        var $v_0 = {},
            $v_1 = new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.data.entity.getId()),
            $v_2 = Xrm.Page.getAttribute("ownerid").getValue()[0],
            $v_3 = Xrm.Page.getAttribute("subjectid").getValue(),
            $v_4 = null,
            $v_5 = null,
            $v_6 = null;
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3)) {
            $v_4 = $v_3[0];
            $v_5 = new Microsoft.Crm.Client.Core.Framework.Guid($v_4.id);
            $v_6 = $v_4.name
        }
        var $v_7 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2.id), $v_8 = $v_2.name, $v_9 = $v_2.entityType;
        $v_0["entityId"] = $v_1;
        $v_0["entityTypeCode"] = objectTypeCode;
        $v_0["incident_title"] = Xrm.Page.getAttribute("title").getValue();
        $v_0["incident_description"] = Xrm.Page.getAttribute("description").getValue();
        $v_0["ownerId"] = $v_7.toString();
        $v_0["ownerName"] = $v_8;
        $v_0["ownerType"] = $v_9;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && !Mscrm.InternalUtilities.JSTypes.isNull($v_6)) {
            $v_0["subjectId"] = $v_5.toString();
            $v_0["subjectName"] = $v_6
        }
        var $v_A = String
                .format("<fetch version='1.0' mapping='logical'><entity name='incidentresolution'><attribute name='subject' /><attribute name='description' /><filter type='and'><condition attribute='incidentid' operator='eq' value='{0}' /><condition attribute='statuscode' operator='eq' value='2' /></filter><order attribute='createdon' ascending='true'/></entity></fetch>", $v_1.toString()),
            $v_B = null;
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        Xrm.Internal.messages.retrieveMultiple($v_A).then(function($p1_0) {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                if ($p1_0) {
                    var $v_C = "";
                    $v_B = $p1_0.entityCollection;
                    if ($v_B.get_count() > 0)
                        for (var $v_D = "", $v_E = 0; $v_E < $v_B.get_count(); $v_E++) {
                            var $v_F = $v_B.get_entities()[$v_E];
                            $v_D = !Mscrm.InternalUtilities.JSTypes.isNull($v_F.getValue("description"))
                                ? $v_F.getValue("description")
                                : " ";
                            $v_C = $v_C + $v_F.getValue("subject") + "\n" + $v_D + "\n"
                        }
                    $v_0["incidentresolution_description"] = "\n" + $v_C
                }
                Xrm.Dialog.openDialog("ConvertToKnowledgeArticle",
                    null,
                    $v_0,
                    Mscrm.ConvertToKnowledgeArticle.convertToKnowledgeArticleCallback,
                    null)
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
};
Mscrm.ConvertToKnowledgeArticle.formatStringForCKEditor = function(value) {
    for (var $v_0 = value.split("\n"),
        $v_1 = new Sys.StringBuilder,
        $$arr_3 = $v_0,
        $$len_4 = $$arr_3.length,
        $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_2 = $$arr_3[$$idx_5];
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
            $v_1.append("<p>");
            $v_1.append($v_2);
            $v_1.append("</p>")
        }
    }
    return $v_1.toString()
};
Mscrm.CancelCaseDialogResult = function() {};
Mscrm.CancelCaseDialogResult.prototype = {
    StatusCode: 0,
    TimeSpent: 0,
    Description: null,
    Subject: null,
    ActualEnd: null
};
Mscrm.IncidentGridCommandActions = function() {};
Mscrm.IncidentGridCommandActions.caseFlow = function(activityTypeCode) {
    var $v_0 = {};
    $v_0["formid"] = "{4a63c8d1-6c1e-48ec-9db4-3e6c7155334c}";
    $v_0["activitytypecode"] = activityTypeCode;
    $v_0["setlastviewed"] = false;
    $v_0["rof"] = true;
    $v_0["theme"] = Mscrm.ThemeType.toString(0);
    Xrm.Utility.openEntityForm("incident", "", $v_0)
};
Mscrm.IncidentGridCommandActions.associateChildCase = function(gridControl, records, entityTypeCode) {
    if (!records) return;
    var $v_0 = Mscrm.IncidentGridCommandActions.$2("mergemultiple", entityTypeCode, records.length);
    if (records.length < 2) {
        Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ASSCO_LESS_RECORDS"), null);
        return
    }
    var $v_1 = Xrm.Internal.getLocatorServiceSetting("MaxChildIncidentNumber");
    if (records.length > $v_1) {
        Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ASSCO_TOOMANY_RECORDS"),
                $v_1.toString()),
            null);
        return
    }
    $v_0.get_query()["requestType"] = "associatechild";
    var $v_2 = [false, gridControl, "associatechild", entityTypeCode],
        $v_3 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory("showMessageAfterMergeAssocAndRefreshGrid", $v_2);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_0, records, 800, 570, $v_3)
};
Mscrm.IncidentGridCommandActions.mergeRecords = function(gridControl, records, entityTypeCode) {
    if (!records) return;
    var $v_0 = 2, $v_1;
    switch (entityTypeCode) {
    case 112:
        if (records.length < 2) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MERGE_LESS_RECORDS"), null);
            return
        }
        $v_1 = Mscrm.IncidentGridCommandActions.$2("mergemultiple", entityTypeCode, records.length);
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
        $v_1 = Mscrm.IncidentGridCommandActions.$2("merge", entityTypeCode, records.length);
        if (records.length > $v_0) {
            Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_MERGE_TOOMANY_RECORDS"), null);
            return
        }
        break
    }
    for (var $v_2 = new Sys.StringBuilder, $v_6 = 0; $v_6 < records.length; $v_6++) {
        $v_6 > 0 && $v_2.append(";");
        $v_2.append(records[$v_6].Id)
    }
    $v_1.get_query()["sIds"] = $v_2.toString();
    var $v_3, $v_4;
    if (entityTypeCode === 112) {
        $v_3 = [false, gridControl, "merge", entityTypeCode];
        $v_4 = "showMessageAfterMergeAssocAndRefreshGrid"
    } else {
        $v_3 = [false, gridControl];
        $v_4 = "refreshGridAfterMerge"
    }
    var $v_5 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_4, $v_3);
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_1, records, 800, 570, $v_5)
};
Mscrm.IncidentGridCommandActions.$2 = function($p0, $p1, $p2) {
    return Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri($p0, $p1, $p2)
};
Mscrm.IncidentGridCommandActions.performActionAfterCloseCase = function(returnValue, caseId, gridControl) {
    var $v_0 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        var $v_1 = function() { gridControl.refresh() };
        Mscrm.CommandBarActions.PerformResolveCase(returnValue, caseId, $v_1);
        $v_0 = true
    }
    return $v_0
};
Mscrm.IncidentGridCommandActions.cancelCase = function(selectedCaseData, gridControl) {
    var $v_0 = selectedCaseData.toString();
    if (Mscrm.CommandBarActions.isMobileCompanionApp())
        $v_0 = Microsoft.Crm.Client.Core.Framework.Guid.formatToUpper(selectedCaseData.Id);
    var $v_1 = new Xrm.DialogOptions;
    $v_1.height = 200;
    $v_1.width = 600;
    var $v_2 = 0;
    Xrm.Internal.messages.getValidStatusTransition($v_0.toString(), 2).then(function($p1_0) {
            $v_2 = $p1_0.result;
            var $v_3 = new Xrm.AlertDialogStrings;
            switch ($v_2) {
            case 1:
                $v_3.text = Xrm.Internal.getResourceString("Web.Record.NoValidStatusReasonTransition02");
                Xrm.Dialog.openAlertDialog($v_3, null, null);
                break;
            case 2:
                Mscrm.IncidentGridCommandActions.performActionAfterCallbackCancelCase($v_0, gridControl, $v_1);
                break;
            case 3:
                $v_1.height = 230;
                $v_1.width = 520;
                Mscrm.IncidentGridCommandActions.openDialogAfterConfirmCancelCase(false, $v_0, gridControl, $v_1);
                break;
            case 4:
                $v_3.text = Xrm.Internal.getResourceString("Error_Message_0x80044411");
                Xrm.Dialog.openAlertDialog($v_3, null, null);
                break
            }
        },
        function($p1_0) { return })
};
Mscrm.IncidentGridCommandActions
    .openDialogAfterConfirmCancelCase = function(returnValue, caseId, gridControl, options) {
        options.height = 230;
        options.width = 520;
        var $v_0 = {};
        $v_0["entityId"] = caseId;
        var $v_1 = {};
        $v_1["gridControl"] = gridControl;
        var $v_2 = Mscrm.IncidentGridCommandActions.cancelCaseGridDialogCloseCallback;
        Xrm.Dialog.openDialog("CancelCase", options, $v_0, $v_2, $v_1)
    };
Mscrm.IncidentGridCommandActions.performActionAfterCallbackCancelCase = function(caseId, gridControl, options) {
    var $v_0 = Mscrm.IncidentGridCommandActions.openDialogAfterConfirmCancelCase,
        $v_1 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory($v_0, [caseId, gridControl, options]),
        $v_2 = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("CancelCase", $v_2, null)) {
        $v_1 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory($v_0, [caseId, gridControl, options]);
        Xrm.Dialog.openConfirmDialog($v_2, options, $v_1, null)
    }
};
Mscrm.IncidentGridCommandActions.cancelCaseGridDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh()
    }
};
Mscrm.IncidentGridCommandActions.DialogCloseCancelOnLoad = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() && !Xrm.Utility.isEntityOfflineSyncEnabled("incident")) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    var $v_0 = Xrm.Page.getAttribute("bIsTimeAllotment"),
        $v_1 = Xrm.Page.getAttribute("iAllotmentsRemaining"),
        $v_2 = Xrm.Page.getAttribute("entityId");
    if (Xrm.Utility.isMocaOffline())
        if (Xrm.Utility.areStateTransitionsEnforced("incident")) {
            var $v_4 = 1;
            Xrm.Internal.getAllowedStatusTransitions("incident", $v_4)
                .then(function($p1_0) { Mscrm.IncidentCommandBarActions.$0("incident", 1, "resolutionType_id", $p1_0) },
                    function() {})
        } else Mscrm.IncidentCommandBarActions.$0("incident", 1, "resolutionType_id", null);
    else
        Xrm.Internal.messages.retrieve("incident",
            $v_2.getValue().toString(),
            ["statecode", "statuscode", "contractid", "contractdetailid"]).then(function($p1_0) {
                var $v_5 = $p1_0.entity;
                if ($v_5.hasValue("contractid")) {
                    var $v_6 = $v_5.getValue("contractid");
                    Xrm.Internal.messages.retrieve("contract", $v_6.Id.toString(), ["statecode", "allotmenttypecode"])
                        .then(function($p2_0) {
                                var $v_7 = $p2_0.entity;
                                if ($v_7.getValue("statecode") !== 2) {
                                    $v_0.setValue($v_7.getValue("allotmenttypecode"));
                                    if ($v_5.hasValue("contractdetailid")) {
                                        var $v_8 = $v_5.getValue("contractdetailid");
                                        Xrm.Internal.messages
                                            .retrieve("contractdetail",
                                                $v_8.Id.toString(),
                                                ["statecode", "allotmentsremaining"]).then(function($p3_0) {
                                                    var $v_9 = $p3_0.entity, $v_A = $v_9.getValue("statecode");
                                                    if ($v_A !== 3 || $v_A !== 2
                                                    ) $v_1.setValue($v_9.getValue("allotmentsremaining"));
                                                    else
                                                        Mscrm.InternalUtilities.DialogUtility
                                                            .defaultConfirmDialog(Xrm.Internal
                                                                .getResourceString("Case_Resolve_Dlg_Confirm_Parent")
                                                                .toString(),
                                                                "")
                                                },
                                                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                                    }
                                } else
                                    Mscrm.InternalUtilities.DialogUtility
                                        .defaultConfirmDialog(Xrm.Internal
                                            .getResourceString("Case_Resolve_Dlg_Confirm_ContractDetailState")
                                            .toString(),
                                            "")
                            },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                }
                if (Mscrm.InternalUtilities.DialogUtility.isStateTransitionEnforced("incident")) {
                    var $v_B = parseInt($v_5.getValue("statuscode").getValue("value").toString());
                    Xrm.Internal.getAllowedStatusTransitions("incident", $v_B)
                        .then(function($p2_0) {
                                Mscrm.IncidentCommandBarActions.$0("incident", 1, "resolutionType_id", $p2_0)
                            },
                            function() {})
                } else Mscrm.IncidentCommandBarActions.$0("incident", 1, "resolutionType_id", null)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    var $v_3 = Xrm.Page.getAttribute("totaltime_id");
    Xrm.Page.getControl("totaltime_id").setDisabled(true);
    if (Xrm.Utility.isMocaOffline()) {
        $v_3.setValue("0");
        var $v_C = Xrm.Page.getAttribute("billabletime_id");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_C) && $v_C.setValue("0")
    } else {
        var $v_D = "0";
        Xrm.Internal.messages.calculateTotalTimeIncident(new Microsoft.Crm.Client.Core.Framework
            .Guid($v_2.getValue().toString())).then(function($p1_0) {
                var $v_E = $p1_0;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_E)) $v_D = $v_E.totalTime;
                var $v_F = Xrm.Page.getAttribute("billabletime_id"), $v_G = Xrm.Page.getControl("billabletime_id");
                $v_F.setValue($v_D);
                var $v_H = Number.parseInvariant($v_D);
                $v_H = isNaN($v_H) ? 0 : $v_H;
                $v_3.setValue(Mscrm.InternalUtilities.LegacyUtils.formatDurationValue($v_H))
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.IncidentGridCommandActions.performActionAfterCancelCase = function(returnValue, caseId, gridControl) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue.StatusCode)) {
        var $v_0 = 2;
        Xrm.Internal.messages.setState("incident", caseId, $v_0, returnValue.StatusCode)
            .then(function() { gridControl.refresh() }, Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.IncidentGridCommandActions.runRoutingRule = function(gridControl, selectedCases) {
    if (Mscrm.InternalUtilities.JSTypes.isNull(selectedCases) || !selectedCases.length) return;
    for (var $v_0 = new Array(selectedCases
                 .length),
        $v_3 = 0;
        $v_3 < selectedCases.length;
        $v_3++) if ($v_0.length > 0) $v_0[$v_3] = selectedCases[$v_3].Id;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 460;
    $v_1.height = 250;
    var $v_2 = new Xrm.ConfirmDialogStrings;
    if (Mscrm.InternalUtilities.DialogConfirmStrings
        .tryGetDialogStringsForEnabledMetadataDialogs("routecase", $v_2, null)) {
        if (selectedCases.length > 1) {
            $v_2.text = null;
            $v_2.text = String.format(Xrm.Internal
                .getResourceString("Dlg_RouteCase_AddRequiredConfirmForMultipleCase_Body"),
                selectedCases.length)
        }
        var $v_4 = Mscrm.InternalUtilities.GridUtilities
            .createCallbackFunctionFactory(Mscrm.IncidentGridCommandActions
                .actionAfterRoutingRule,
                [gridControl, $v_0]);
        Xrm.Dialog.openConfirmDialog($v_2, $v_1, $v_4, null)
    }
};
Mscrm.IncidentGridCommandActions.actionAfterRoutingRule = function(result, gridControl, caseIds) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    !Mscrm.InternalUtilities.JSTypes.isNull(caseIds) && Mscrm.IncidentGridCommandActions.$1(caseIds, gridControl)
};
Mscrm.IncidentGridCommandActions
    .performActionAfterRunRoutingRule = function(returnValue, gridControl) {
        !Mscrm.InternalUtilities.JSTypes.isNull(returnValue) && returnValue && gridControl.refresh()
    };
Mscrm.IncidentGridCommandActions
    .setDoNotDecrementEntitlementTerm = function(incidentId) { Mscrm.IncidentGridCommandActions.$9(incidentId) };
Mscrm.IncidentGridCommandActions.setDoNotDecrementEntitlementTermOnGrid = function(gridControl, records) {
    if (!records.length) return;
    Mscrm.IncidentGridCommandActions.$9(records[0].Id.toString())
};
Mscrm.IncidentGridCommandActions.$9 = function($p0) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    var $v_0 = new Xrm.ConfirmDialogStrings;
    Xrm.Internal.messages.retrieve("incident", $p0, ["incidentid", "decremententitlementterm", "entitlementid"])
        .then(function($p1_0) {
                if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    return
                }
                var $v_1 = $p1_0.entity;
                if ($v_1) {
                    var $v_2 = new Xrm.DialogOptions;
                    $v_2.width = Number.parseInvariant(Xrm.Internal
                        .getResourceString("Entitlement_Default_Dialog_Width"));
                    $v_2.height = Number.parseInvariant(Xrm.Internal
                        .getResourceString("Entitlement_Default_Dialog_Height"));
                    var $v_3 = parseInt($v_1.getValue("decremententitlementterm").getValue("value").toString());
                    if (!$v_3) {
                        $v_0.title = Xrm.Internal.getResourceString("DontDecrementTerms_Not_Set_DialogTitle");
                        $v_0.text = Xrm.Internal.getResourceString("DontDecrementTerms_Not_Set_DialogMessage");
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Dialog.openConfirmDialog($v_0, $v_2, null, null)
                    } else {
                        if ($v_1.getValue("entitlementid")) {
                            $v_0.title = Xrm.Internal
                                .getResourceString("DontDecrementTermsSet_RecordAssociated_CaseTerms_DecrementedAlready_DialogTitle");
                            $v_0.text = Xrm.Internal
                                .getResourceString("DontDecrementTermsSet_RecordAssociated_CaseTerms_DecrementedAlready_DialogMessage")
                        } else {
                            $v_0.title = Xrm.Internal
                                .getResourceString("DontDecrementTermsSet_Record_Not_Yet_Associated_CaseTerms_NotDecremented_Yet_DialogTitle");
                            $v_0.text = Xrm.Internal
                                .getResourceString("DontDecrementTermsSet_Record_NotYet_Associated_CaseTerms_NotDecremented_Yet_DialogMessage")
                        }
                        var $v_4 = Mscrm.IncidentGridCommandActions.commonForDecrement,
                            $v_5 = Mscrm.InternalUtilities.GridUtilities.createCallbackFunctionFactory($v_4, [$v_1]);
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Dialog.openConfirmDialog($v_0, $v_2, $v_5, null)
                    }
                }
            },
            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.IncidentGridCommandActions.commonForDecrement = function(returnValue, incidentRecord) {
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    var $v_0 = "decremententitlementterm";
    incidentRecord.initializeValue($v_0, 0, 0);
    incidentRecord.get_changedFieldNames().addRange([$v_0]);
    Xrm.Internal.messages.update(incidentRecord).then(function($p1_0) {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage()
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.IncidentGridCommandActions.$1 = function($p0, $p1) {
    var $v_0 =
            "<fetch mapping='logical' distinct='true'><entity name='routingrule'><attribute name='workflowid'/><filter type='and'><condition attribute='statuscode' operator='eq' value='2'/></filter></entity></fetch>",
        $v_1 = null;
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
            $v_1 = $p1_0.entityCollection;
            if (!$v_1 || !$v_1.get_count()) {
                var $v_4 = new Xrm.AlertDialogStrings;
                $v_4.text = String.format(Xrm.Internal
                    .getResourceString("Dlg_RouteCase_Validation_ActiveRouteRuleReqdMsg"));
                Xrm.Dialog.openAlertDialog($v_4, null, null);
                return
            }
            var $v_2 = $v_1.get_entities()[0].getValue("workflowid"), $v_3 = $v_2["Id"];
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                if ($p0.length === 1)
                    !Mscrm.InternalUtilities.JSTypes.isNull($p0[0]) &&
                        Mscrm.IncidentGridCommandActions.$D(new Microsoft.Crm.Client.Core.Framework
                            .Guid($p0[0].toString()),
                            $v_3);
                else Mscrm.IncidentGridCommandActions.$E($p0, $v_3);
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1)) $p1.refresh();
                else Xrm.Page.ui.close()
            }
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.IncidentGridCommandActions.$D = function($p0, $p1) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && !Mscrm.InternalUtilities.JSTypes.isNull($p1)) {
        var $v_0 = {};
        $v_0["UIScript_Input_Integer_IsManualRun"] = 1;
        Xrm.Internal.messages.executeWorkflow($p0, $p1, $v_0)
            .then(function($p1_0) {}, Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    }
};
Mscrm.IncidentGridCommandActions.$E = function($p0, $p1) {
    var $v_0 = {};
    $v_0["UIScript_Input_Integer_IsManualRun"] = 1;
    Xrm.Internal.messages.executeWorkFlowMultiple($p0, $p1, $v_0).then(function($p1_0) {
            for (var $$arr_4 = $p1_0.responses, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_1 = $$arr_4[$$idx_6];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.get_fault())) {
                    Mscrm.IncidentGridCommandActions.openAlertDialogForWorkFlowMultipleError();
                    return
                }
            }
        },
        Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
};
Mscrm.IncidentGridCommandActions.openAlertDialogForWorkFlowMultipleError = function() {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0, null, null)
};
Mscrm.IncidentGridCommandActions.runRoutingRuleGrid = function(gridControl, records) {
    if (IsNull(records) || !records.length) {
        var $v_4 = new Xrm.AlertDialogStrings;
        $v_4.text = Xrm.Internal.getResourceString("Error_Message_Action_NoItemSelected");
        Xrm.Dialog.openAlertDialog($v_4, null, null);
        return
    }
    for (var $v_0 = new Array(records
                 .length),
        $v_5 = 0;
        $v_5 < records.length;
        $v_5++) if ($v_0.length > 0) $v_0[$v_5] = records[$v_5].Id;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 460;
    $v_1.height = 250;
    var $v_2 = new Xrm.ConfirmDialogStrings;
    Mscrm.InternalUtilities.DialogConfirmStrings.tryGetDialogStringsForEnabledMetadataDialogs("routecase", $v_2, null);
    if (records.length > 1) {
        $v_2.text = null;
        $v_2.text = String.format(Xrm.Internal
            .getResourceString("Dlg_RouteCase_AddRequiredConfirmForMultipleCase_Body"),
            records.length)
    }
    var $v_3 = Mscrm.InternalUtilities.GridUtilities
        .createCallbackFunctionFactory(Mscrm.IncidentGridCommandActions.actionAfterRoutingRule, [gridControl, $v_0]);
    Xrm.Dialog.openConfirmDialog($v_2, $v_1, $v_3, null)
};
Mscrm.IncidentMainSystemLibraryWebResource = function() {};
Mscrm.IncidentMainSystemLibraryWebResource
    .setDependentControlState = function(dependentAttributeId, lookupAttributeId) {
        var $v_0 = Xrm.Page.data.entity.attributes.get(dependentAttributeId), $v_1 = false;
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_0) &&
            Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) $v_1 = true;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupAttributeId)) {
            var $v_2 = Xrm.Page.data.entity.attributes.get(lookupAttributeId);
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                var $v_3 = $v_2.controls;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3))
                    for (var $v_4 = $v_3.getLength(), $v_5 = 0; $v_5 < $v_4; $v_5++) {
                        var $v_6 = $v_3.get($v_5);
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6.setDisabled($v_1)
                    }
            }
        }
    };
Mscrm.IncidentMainSystemLibraryWebResource.form_OnSave = function() {
    if (Xrm.Page.context.client.getClient() === "Mobile" && Xrm.Page.ui.getFormType() === 1) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("routecase");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(false)
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.form_onload = function() {
    if (Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Internal.isEnabledForInteractionCentric() &&
        Xrm.Page.ui.getFormType() !== 2) {
        var $v_6 = Xrm.Page.ui.controls.get("title");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && !$v_6.getDisabled() && $v_6.setFocus()
    }
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.ui.controls.get("header_process_relatedcases");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_0)) !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setDisabled(true);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        Mscrm.IncidentMainSystemLibraryWebResource.$7($v_0, $v_1);
        var $v_7 = Mscrm.IncidentMainSystemLibraryWebResource.$I;
        Xrm.Page.data.addOnLoad($v_7);
        var $v_8 = Mscrm.IncidentMainSystemLibraryWebResource.$H;
        $v_1.getAttribute().addOnChange($v_8)
    }
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        var $v_9 = Xrm.Page.getControl("kbarticleid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_9) && $v_9.setDisabled(true)
    }
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) Mscrm.IncidentMainSystemLibraryWebResource.$5($v_0);
    else {
        var $v_A = 0;
        $v_A = window.setInterval(function() {
                Mscrm.IncidentMainSystemLibraryWebResource.$5($v_0) && window.clearInterval($v_A)
            },
            1e3)
    }
    var $v_2 = Xrm.Internal.isCurrentKMParature(), $v_3 = Xrm.Page.ui.controls.get("Associated_KnowledgeArticles");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
        $v_3.setVisible(!$v_2);
        Xrm.Page.context.client.getClient() !== "Mobile" && $v_3.getParent().setVisible(!$v_2)
    }
    var $v_4 = Xrm.Page.ui.controls.get("Associated_Articles");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
        $v_4.setVisible($v_2);
        Xrm.Page.context.client.getClient() !== "Mobile" && $v_4.getParent().setVisible($v_2)
    }
    window.setTimeout(function() {
            var $v_B = Xrm.Page.ui.controls.get("parentcaseid");
            if (Xrm.Page.context.client.getClient() === "Outlook" &&
                Xrm.Page.context.client.getClientState() !== "Online")
                if ($v_B) {
                    $v_B.setVisible(false);
                    return
                }
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) &&
                $v_0 !== "{00000000-0000-0000-0000-000000000000}") {
                var $v_C = ["numberofchildincidents"];
                Xrm.Internal.messages.retrieve("incident", $v_0, $v_C).then(function($p2_0) {
                        var $v_D = $p2_0.entity;
                        if ($v_D.hasValue("numberofchildincidents")) {
                            var $v_E = $v_D.getValue("numberofchildincidents");
                            $v_E > 0 && $v_B && $v_B.setVisible(false)
                        }
                    },
                    function($p2_0) { Mscrm.IncidentErrorHandler.actionFailedCallback($p2_0) })
            }
        },
        0);
    var $v_5 = Xrm.Page.data.entity.attributes.get("statecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.getValue() === 0) {
        var $v_F = Xrm.Page.data.entity.attributes.get("contractid"), $v_G = Xrm.Page.getAttribute("contractdetailid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_G))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_F) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_F.getValue())) $v_G.setRequiredLevel("required");
            else $v_G.setRequiredLevel("none")
    }
    Mscrm.IncidentMainSystemLibraryWebResource.setDependentControlState("customerid", "contractid");
    Mscrm.IncidentMainSystemLibraryWebResource.setDependentControlState("contractid", "contractdetailid");
    if (Mscrm.InternalUtilities.Utilities.isTurboForm()) {
        var $v_H = $get("kbviewer");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_H)) $v_H = window.parent.document.getElementById("kbviewer");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_H)) {
            var $v_I = Xrm.Page.getAttribute("kbarticleid"), $v_J = null;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_I)) $v_J = $v_I.getValue();
            var $v_K = null;
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_J)) $v_K = $v_J[0].toString();
            if (Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_K))
                Mscrm.IncidentMainSystemLibraryWebResource.setDisplayForShowKBViewerCheckBox("none");
            else Mscrm.IncidentMainSystemLibraryWebResource.setDisplayForShowKBViewerCheckBox("table")
        }
        if (Xrm.Page.ui.getFormType() === 1) {
            var $v_L = Mscrm.IncidentMainSystemLibraryWebResource.$J();
            if ($v_L !== -1) {
                var $v_M = Xrm.Page.data.entity.attributes.get("caseorigincode");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_M)) {
                    $v_M.setValue($v_L);
                    $v_M.fireOnChange()
                }
            }
        }
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.contractid_onchange = function() {
    var $v_0 = false, $v_1 = Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet("contractid", "");
    if ($v_1) {
        var $v_3 = Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"));
        if (!$v_3 && !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("customerid"))
        ) Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("contractid");
        else $v_0 = true
    }
    var $v_2 = Xrm.Page.getAttribute("contractdetailid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        if ($v_0) $v_2.setRequiredLevel("required");
        else $v_2.setRequiredLevel("none");
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("contractdetailid");
    Mscrm.IncidentMainSystemLibraryWebResource.setDependentControlState("contractid", "contractdetailid")
};
Mscrm.IncidentMainSystemLibraryWebResource.contractdetailid_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("contractdetailid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("contractid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CONTRACT"));
        if (!$v_1) Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("contractdetailid");
        else Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("productid")
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.contractdetailid_onclick = function(e) {
    var $v_0 = Xrm.Page.getControl("contractid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !$v_0.getDisabled() &&
        Mscrm.IncidentMainSystemLibraryWebResource
        .VerifyIfLookupFieldIsSet("contractid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CONTRACT"))
};
Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet = function($p0, $p1) {
    var $v_0 = Xrm.Page.data.entity.attributes.get($p0), $v_1 = Xrm.Page.getControl($p0);
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) return true;
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p1) &&
        $v_1.setNotification($p1);
    return false
};
Mscrm.IncidentMainSystemLibraryWebResource.contractid_setadditionalparams = function(context) {
    if (Xrm.Page.context.client.getClient() !== "Mobile")
        if (Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"))) {
            var $v_0 = Xrm.Page.data.entity.attributes.get("customerid");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
                var $v_1 = Xrm.Page.ui.controls.get("contractid"),
                    $v_2 = $v_0.getValue(),
                    $v_3 = '<filter type="and"><condition attribute="customerid" operator="like" value="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_2[0].id.toString()) +
                        '"/></filter>';
                $v_1.addCustomFilter($v_3);
                $v_1 && $v_1.allowUserToDisableRelationshipFilter(true)
            }
        }
};
Mscrm.IncidentMainSystemLibraryWebResource
    .contractid_onclick = function(e) {
        Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"))
    };
Mscrm.IncidentMainSystemLibraryWebResource
    .primarycontactid_onclick = function(e) {
        Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"))
    };
Mscrm.IncidentMainSystemLibraryWebResource.primarycontactid_setadditionalparams = function(context) {
    if (Xrm.Page.context.client.getClient() !== "Mobile")
        if (Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"))) {
            var $v_0 = Xrm.Page.data.entity.attributes.get("customerid");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
                var $v_1 = Xrm.Page.ui.controls.get("primarycontactid"),
                    $v_2 = $v_0.getValue(),
                    $v_3 = '<filter type="and"><condition attribute="parentcustomerid" operator="like" value="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_2[0].id.toString()) +
                        '"/></filter>';
                $v_1.addCustomFilter($v_3);
                $v_1 && $v_1.allowUserToDisableRelationshipFilter(false)
            }
        }
};
Mscrm.IncidentMainSystemLibraryWebResource.entitlementid_onclick = function(e) {
    Mscrm.IncidentMainSystemLibraryWebResource
        .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER"));
    Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet("productid", "");
    Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet("primarycontactid", "")
};
Mscrm.IncidentMainSystemLibraryWebResource.entitlementid_setadditionalparams = function(context) {
    if (Xrm.Page.context.client.getClient() !== "Mobile")
        if (Mscrm.IncidentMainSystemLibraryWebResource
            .VerifyIfLookupFieldIsSet("customerid", Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_CUSTOMER")) ||
            Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet("productid", "") ||
            Mscrm.IncidentMainSystemLibraryWebResource.VerifyIfLookupFieldIsSet("primarycontactid", "")) {
            var $v_0 = Xrm.Page.ui.controls.get("entitlementid"),
                $v_1 = Xrm.Page.getAttribute("productid"),
                $v_2 = Xrm.Page.getAttribute("customerid"),
                $v_3 = Xrm.Page.getAttribute("primarycontactid"),
                $v_4 = Mscrm.IncidentMainSystemLibraryWebResource.$3($v_2),
                $v_5 = Mscrm.IncidentMainSystemLibraryWebResource.$3($v_1),
                $v_6 = Mscrm.IncidentMainSystemLibraryWebResource.$3($v_3);
            $v_4 && $v_0.setParameter("customerid", $v_4.toString());
            $v_5 && $v_0.setParameter("productid", $v_5.toString());
            $v_6 && $v_0.setParameter("primarycontactid", $v_6.toString())
        }
};
Mscrm.IncidentMainSystemLibraryWebResource.$3 = function($p0) {
    var $v_0 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0) && !Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue())) {
        var $v_1 = $p0.getValue();
        $v_0 = new Microsoft.Crm.Client.Core.Framework.Guid($v_1[0].id)
    }
    return $v_0
};
Mscrm.IncidentMainSystemLibraryWebResource.clearLookup = function(elementId) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(elementId);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(null)
};
Mscrm.IncidentMainSystemLibraryWebResource.primarycontactid_onchange = function() {
    if (Xrm.Page.context.client.getClient() !== "Mobile") {
        var $v_0 = Xrm.Page.ui.controls.get("entitlementid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setParameter("primarycontactid", "")
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.productid_onchange = function() {
    if (Xrm.Page.context.client.getClient() !== "Mobile") {
        var $v_0 = Xrm.Page.ui.controls.get("entitlementid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setParameter("productid", "")
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.customerid_onchange = function() {
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("contractid");
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("primarycontactid");
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("contractdetailid");
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("entitlementid");
    Mscrm.IncidentMainSystemLibraryWebResource.clearLookup("productid");
    var $v_0 = Xrm.Page.getAttribute("contractdetailid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setRequiredLevel("none");
    Mscrm.InternalUtilities.Utilities.isTurboForm() &&
        Mscrm.IncidentMainSystemLibraryWebResource.setRelatedCaseAdditionalParameters()
};
Mscrm.IncidentMainSystemLibraryWebResource.childCasesGridControlOnRefresh = function(sender) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(sender)) {
        var $v_0 = sender.getGrid();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            Mscrm.IncidentMainSystemLibraryWebResource.enableParentCaseField(!($v_0.getTotalRecordCount() > 0))
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.enableParentCaseField = function(enable) {
    if (Xrm.Page.context.client
        .getClient() ===
        "Outlook" &&
        Xrm.Page.context.client.getClientState() === "Offline") enable = false;
    var $v_0 = Xrm.Page.ui.controls.get("parentcaseid");
    $v_0 && $v_0.setVisible(enable)
};
Mscrm.IncidentMainSystemLibraryWebResource.setRelatedCaseAdditionalParameters = function() {
    var $v_0 = Xrm.Page.ui.controls.get("header_process_relatedcases");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        $v_0.setDefaultView("{FB30F6AF-CEA8-4320-A060-151350F1F0E7}");
        $v_0.setParameter("queryapi", "");
        $v_0.setParameter("oId", "");
        $v_0.setParameter("oTypeName", "");
        var $v_1 = Xrm.Page.getAttribute("customerid");
        if ($v_1) {
            var $v_2 = $v_1.getValue();
            if ($v_2) {
                var $v_3 = Xrm.Page.getControl("customerid");
                $v_3.clearNotifications();
                $v_0.setParameter("queryapi", "CRMIncident.RollUpByParentCustomerId");
                $v_0.setParameter("oId", $v_2[0].id);
                $v_0.setParameter("oTypeName", $v_2[0].entityType)
            }
        }
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.$H = function($p0) {
    var $v_0 = Xrm.Page.ui.controls.get("header_process_relatedcases").getAttribute().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length > 0) {
        var $v_1 = $v_0[0];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.entityType)) {
            var $v_2 = Xrm.Page.data.entity.getId();
            $v_1.entityType === "incident" &&
                $v_2 !== $v_1.id &&
                Xrm.Utility.confirmDialog(Xrm.Internal.getResourceString("LOCID_FORMS_SAVE_CONFIRM_TITLE"),
                    Mscrm.IncidentMainSystemLibraryWebResource.$C($v_1.entityType, $v_1.id),
                    Mscrm.IncidentMainSystemLibraryWebResource.$B())
        }
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.$C = function($p0, $p1) {
    return function() { Mscrm.IncidentMainSystemLibraryWebResource.$G($p0, $p1) }
};
Mscrm.IncidentMainSystemLibraryWebResource.$B = function() {
    return function() {
        var $v_0 = Xrm.Page.ui.controls.get("header_process_relatedcases");
        $v_0.getAttribute().setValue(null)
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.$G = function($p0, $p1) {
    !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data) && Xrm.Page.data.setFormDirty(false);
    Xrm.Utility.openEntityForm($p0, $p1)
};
Mscrm.IncidentMainSystemLibraryWebResource.setDisplayForShowKBViewerCheckBox = function(displayType) {
    var $v_0 = $get("showKBViewer");
    if (Mscrm.InternalUtilities.JSTypes
        .isNull($v_0) &&
        Mscrm.InternalUtilities.Utilities.isTurboForm()) $v_0 = window.parent.document.getElementById("showKBViewer");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        while ($v_0.tagName.toUpperCase() !== "TABLE") $v_0 = $v_0.parentNode;
        $v_0.style.display = displayType
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.$5 = function($p0) {
    var $v_0 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui) && document.readyState === "complete") {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("ChildCasesGrid"))) {
            if (Xrm.Page.context.client.getClient() !== "Mobile") {
                var $v_2 = Xrm.Page.ui.controls.get("ChildCasesGrid");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                    var $v_3 = function() {
                        Mscrm.IncidentMainSystemLibraryWebResource.childCasesGridControlOnRefresh($v_2)
                    };
                    $v_2.addOnLoad($v_3)
                }
            }
            var $v_1 = Xrm.Page.data.entity.attributes.get("parentcaseid");
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()) ||
                Xrm.Page.context.client.getClientState() !== "Online") {
                var $v_4 = Xrm.Page.ui.tabs.get("CASERELATIONSHIP_TAB");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
                    var $v_5 = $v_4.sections.get("ChildCases");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.setVisible(false)
                }
            }
            $v_0 = true
        }
        Xrm.Page.context.client.getClient() !== "Outlook" && Xrm.Page.ui.refreshRibbon()
    }
    return $v_0
};
Mscrm.IncidentMainSystemLibraryWebResource.$I = function($p0) {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.ui.controls.get("header_process_relatedcases");
    Mscrm.IncidentMainSystemLibraryWebResource.$7($v_0, $v_1)
};
Mscrm.IncidentMainSystemLibraryWebResource.$7 = function($p0, $p1) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0)) {
        $p1.setDisabled(true);
        var $v_0 = new Array(1), $v_1 = new Xrm.LookupObject;
        $v_1.id = $p0;
        $v_1.name = Xrm.Page.data.entity.getPrimaryAttributeValue();
        $v_1.entityType = Xrm.Page.data.entity.getEntityName();
        $v_0[0] = $v_1;
        $p1.getAttribute().setSubmitMode("never");
        $p1.getAttribute().setValue($v_0);
        Xrm.Page.data.setFormDirty(true)
    }
};
Mscrm.IncidentMainSystemLibraryWebResource.$J = function() {
    var $v_0 = window.parent._activityTypeCode;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && -1 !== $v_0)
        switch ($v_0) {
        case 4210:
            return 1;
        case 4202:
            return 2;
        case 4800:
            return 3;
        default:
            return -1
        }
    return -1
};
Mscrm.IncidentErrorHandler = function() {};
Mscrm.IncidentErrorHandler.actionFailedCallback = function(response) {
    var $v_0 = response.get_organizationServiceFault();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Mscrm.IncidentErrorHandler.$F($v_1, response.get_message())
    }
};
Mscrm.IncidentErrorHandler.$F = function($p0, $p1) {
    var $v_0 = "0x" + ($p0 < 0 ? 4294967295 + $p0 + 1 : $p0).toString(16).toUpperCase();
    if ($v_0.startsWith("0x8004E1"))
        switch ($v_0) {
        case "0x8004E108":
        case "0x8004E121":
        case "0x8004E117":
        case "0x8004E123":
        case "0x8004E122":
        case "0x8004E113":
            $p1 = Xrm.Internal.getErrorMessage($p0);
            break;
        default:
            $p1 = Xrm.Internal.getErrorMessage(-2147163904);
            break
        }
    else
        switch ($p0) {
        case -2147220891:
        case -2147224494:
            break;
        default:
            var $v_1 = Xrm.Internal.getErrorMessage($p0);
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) $p1 = $v_1;
            break
        }
    Xrm.Internal.openErrorDialog($p0, $p1)
};
Mscrm.IncidentCommandBarActions.registerClass("Mscrm.IncidentCommandBarActions");
Mscrm.ConvertToKnowledgeArticle.registerClass("Mscrm.ConvertToKnowledgeArticle");
Mscrm.CancelCaseDialogResult.registerClass("Mscrm.CancelCaseDialogResult");
Mscrm.IncidentGridCommandActions.registerClass("Mscrm.IncidentGridCommandActions");
Mscrm.IncidentMainSystemLibraryWebResource.registerClass("Mscrm.IncidentMainSystemLibraryWebResource");
Mscrm.IncidentErrorHandler.registerClass("Mscrm.IncidentErrorHandler");
Mscrm.IncidentCommandBarActions.$4 = -1;
Mscrm.ConvertToKnowledgeArticle.convertedKnowledgeArticleStageId = "0C6ED1C6-E9F1-4B43-8D9B-F680FDED9B67";
Mscrm.ConvertToKnowledgeArticle.convertedKnowledgeArticleProcessId = "AB81C1AF-1A45-48D9-8133-3EDC033DBEEF";
Mscrm.ConvertToKnowledgeArticle.convertedKnowledgeArticleTraversedPath = "0c6ed1c6-e9f1-4b43-8d9b-f680fded9b67";
Type.registerNamespace("Mscrm");
Mscrm.setDependentControlState = Mscrm.IncidentMainSystemLibraryWebResource.setDependentControlState;
Mscrm.Form_onload = Mscrm.IncidentMainSystemLibraryWebResource.form_onload;
Mscrm.Form_cleanup = Mscrm.IncidentMainSystemLibraryWebResource.form_cleanup;
Mscrm.contractid_onchange = Mscrm.IncidentMainSystemLibraryWebResource.contractid_onchange;
Mscrm.contractdetailid_onclick = Mscrm.IncidentMainSystemLibraryWebResource.contractdetailid_onclick;
Mscrm.verifyIfLookupFieldIsSet = Mscrm.IncidentMainSystemLibraryWebResource.verifyIfLookupFieldIsSet;
Mscrm.contractid_setadditionalparams = Mscrm.IncidentMainSystemLibraryWebResource.contractid_setadditionalparams;
Mscrm.contractid_onclick = Mscrm.IncidentMainSystemLibraryWebResource.contractid_onclick;
Mscrm.primarycontactid_onclick = Mscrm.IncidentMainSystemLibraryWebResource.primarycontactid_onclick;
Mscrm.primarycontactid_setadditionalparams = Mscrm.IncidentMainSystemLibraryWebResource
    .primarycontactid_setadditionalparams;
Mscrm.entitlementid_onclick = Mscrm.IncidentMainSystemLibraryWebResource.entitlementid_onclick;
Mscrm.entitlementid_setadditionalparams = Mscrm.IncidentMainSystemLibraryWebResource.entitlementid_setadditionalparams;
Mscrm.clearLookup = Mscrm.IncidentMainSystemLibraryWebResource.clearLookup;
Mscrm.primarycontactid_onchange = Mscrm.IncidentMainSystemLibraryWebResource.primarycontactid_onchange;
Mscrm.productid_onchange = Mscrm.IncidentMainSystemLibraryWebResource.productid_onchange;
Mscrm.customerid_onchange = Mscrm.IncidentMainSystemLibraryWebResource.customerid_onchange;
Mscrm.contractdetailid_onchange = Mscrm.IncidentMainSystemLibraryWebResource.contractdetailid_onchange;
Mscrm.setDisplayForShowKbViewerCheckBox = Mscrm.IncidentMainSystemLibraryWebResource.setDisplayForShowKBViewerCheckBox;
Mscrm.kbarticleid_onshowdialog = function(context) {
    var oUrl = Mscrm.CrmUri.create("/CS/dialogs/KBSearch.aspx?isLookup=true"),
        args = context.getEventArgs(),
        parameters = [];
    parameters[0] = args;
    var callbackFunction = Mscrm.Utilities
            .createCallbackFunctionObject("performActionAfterKBsearch", this, parameters, false),
        crmDialog = new Mscrm.CrmDialog(oUrl, null, 700, 500, null);
    crmDialog.setCallbackReference(callbackFunction);
    crmDialog.show()
};
Mscrm.performActionAfterKBsearch = function(ret_val, args) {
    args.set_lookupItems(ret_val);
    Mscrm.Utilities.executeFunction(args.get_callbackForShowDialog(), args)
};
Mscrm.kbarticleid_onchange = function() {
    var oKbViewer = $get("kbviewer");
    if (Mscrm.InternalUtilities.JSTypes
        .isNull(oKbViewer) &&
        Mscrm.InternalUtilities.Utilities.isTurboForm()) oKbViewer = parent.window.$get("kbviewer");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(oKbViewer)) {
        var kbarticleid = Xrm.Page.getAttribute("kbarticleid"), oKBVal = kbarticleid.getValue(), oKBId = null;
        if (!Mscrm.InternalUtilities.JSTypes.isNull(oKBVal)) oKBId = oKBVal[0];
        if (Mscrm.InternalUtilities.JSTypes.isNull(oKBId)) {
            oKbViewer.src = "";
            Mscrm.setDisplayForShowKbViewerCheckBox("none")
        } else {
            var url = Mscrm.CrmUri.create(oKbViewer.getAttribute("baseSrc")), id = url.get_query()["id"];
            if (id != null) {
                url.get_query()["id"] = oKBId.id;
                oKbViewer.src = url;
                oKbViewer.setAttribute("url", url.toString())
            }
            Mscrm.setDisplayForShowKbViewerCheckBox("table")
        }
    }
};
Mscrm.isLookUpInEditMode = function(elementId) {
    return Mscrm.FormControlInputBehavior.GetBehavior(elementId).getLookupEdit().className !==
        "ms-crm-Hidden-NoBehavior"
}