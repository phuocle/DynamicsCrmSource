Type.registerNamespace("Mscrm");
Mscrm.QueueItemGridCommandActions = function() {};
Mscrm.QueueItemGridCommandActions.queueManipulation = function(gridControl, records, entityTypeCode, queueAction) {
    var $v_0 = "", $v_1 = new Xrm.ConfirmDialogStrings;
    if (!Mscrm.CommandBarActions.isMobileCompanionApp()) {
        for (var $v_5 = gridControl.getGrid().getSelectedRows(), $v_6 = 0; $v_6 < records.length; $v_6++) {
            for (var $v_7 = $v_5.get($v_6),
                $v_8 = "",
                $v_9 = $v_7.getData().getEntity().getAttributes(),
                $$arr_B = $v_9.getAll(),
                $$len_C = $$arr_B.length,
                $$idx_D = 0;
                $$idx_D < $$len_C;
                ++$$idx_D) {
                var $v_A = $$arr_B[$$idx_D];
                if ($v_A.getName() === "queueitemid" || $v_A.getKey() === "queueitemid") $v_8 = $v_A.getValue()
            }
            records[$v_6].Id = $v_8;
            records[$v_6].TypeCode = 2029
        }
        $v_0 = gridControl.GetParameter("qid")
    }
    var $v_2 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri(queueAction, entityTypeCode, records.length),
        $v_3 = null,
        $v_4 = new Xrm.DialogOptions;
    if (queueAction === "queueitemrouting" && !Mscrm.CommandBarActions.isMobileCompanionApp()) {
        if (records.length === 1) $v_2.get_query()["objectId"] = records[0].Id;
        $v_2.get_query()["queueid"] = $v_0;
        Mscrm.InternalUtilities.GridUtilities
            .executeStandardAction($v_2,
                records,
                500,
                290,
                Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
    } else if (queueAction === "queueitemrouting" || queueAction === "queueitempick") {
        $v_4.width = 500;
        var $v_B = {}, $v_C = {};
        $v_C["gridControl"] = gridControl;
        $v_B["records"] = records;
        var $v_D = Mscrm.QueueItemGridCommandActions.queueItemDialogCloseCallback;
        if (queueAction === "queueitempick") {
            $v_4.height = 290;
            Xrm.Dialog.openDialog("QueueItemPick", $v_4, $v_B, $v_D, $v_C)
        } else if (queueAction === "queueitemrouting") {
            $v_4.height = 310;
            Xrm.Dialog.openDialog("RouteQueuedItem", $v_4, $v_B, $v_D, $v_C)
        }
    } else if (queueAction === "queueitemroute" || queueAction === "queueitemworkon"
    )
        Mscrm.InternalUtilities.GridUtilities
            .executeStandardAction($v_2,
                records,
                500,
                350,
                Mscrm.GridCommandActions.createRefreshGridCallback(gridControl));
    else if (Mscrm.CommandBarActions.isMobileCompanionApp()) {
        if (queueAction === "queueitemrelease") {
            $v_4.height = 200;
            $v_4.width = 450;
            $v_1.text = Xrm.Internal.getResourceString("Dialog_QueueItemRelease_Label_Single");
            $v_1.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_Release");
            $v_1.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
            $v_1.title = Xrm.Internal.getResourceString("Dialog_QueueItemRelease_Title");
            if (records.length === 1)
                $v_1.subtitle = Xrm.Internal.getResourceString("Dialog_QueueItemReleaseNew_Description_Single");
            else
                $v_1.subtitle = String.format(Xrm.Internal
                    .getResourceString("Dialog_QueueItemReleaseNew_Description_Plural"),
                    records.length);
            $v_3 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.QueueItemGridCommandActions.performActionAfterReleaseMoca,
                    [gridControl, records])
        } else if (queueAction === "queueitemremove") {
            $v_4.height = 200;
            $v_4.width = 450;
            $v_1.confirmButtonLabel = Xrm.Internal.getResourceString("Button_Label_Remove");
            $v_1.cancelButtonLabel = Xrm.Internal.getResourceString("Button_Label_Cancel");
            $v_1.title = Xrm.Internal.getResourceString("Dialog_QueueItemRemove_Title");
            if (records.length === 1)
                $v_1.text = Xrm.Internal.getResourceString("Dialog_QueueItemRemoveNew_Description_Single");
            else
                $v_1.text = String.format(Xrm.Internal
                    .getResourceString("Dialog_QueueItemRemoveNew_Description_Plural"),
                    records.length);
            $v_3 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.QueueItemGridCommandActions.performActionAfterRemoveMoca,
                    [gridControl, records])
        }
        Xrm.Dialog.openConfirmDialog($v_1, $v_4, $v_3, null)
    } else if (Mscrm.CommandBarActions.isWebClient()) {
        var $v_E = {}, $v_F = null;
        if (queueAction === "queueitemrelease") {
            $v_F = [
                "Dialog_QueueItemRelease_Label_Single", "Button_Label_Release", "Button_Label_Cancel",
                "Dialog_QueueItemRelease_Title"
            ];
            $v_E = Xrm.Internal.getStringKeyList($v_F);
            $v_4.height = 200;
            $v_4.width = 450;
            $v_1.text = $v_E["Dialog_QueueItemRelease_Label_Single"].toString();
            $v_1.confirmButtonLabel = $v_E["Button_Label_Release"].toString();
            $v_1.cancelButtonLabel = $v_E["Button_Label_Cancel"].toString();
            $v_1.title = $v_E["Dialog_QueueItemRelease_Title"].toString();
            if (records.length === 1)
                $v_1.subtitle = Xrm.Internal.getResourceString("Dialog_QueueItemReleaseNew_Description_Single");
            else
                $v_1.subtitle = String.format(Xrm.Internal
                    .getResourceString("Dialog_QueueItemReleaseNew_Description_Plural"),
                    records.length);
            $v_3 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.QueueItemGridCommandActions.performActionAfterReleaseMoca,
                    [gridControl, records])
        } else if (queueAction === "queueitemremove") {
            $v_F = ["Button_Label_Remove", "Button_Label_Cancel", "Dialog_QueueItemRemove_Title"];
            $v_E = Xrm.Internal.getStringKeyList($v_F);
            $v_4.height = 200;
            $v_4.width = 450;
            $v_1.confirmButtonLabel = $v_E["Button_Label_Remove"].toString();
            $v_1.cancelButtonLabel = $v_E["Button_Label_Cancel"].toString();
            $v_1.title = $v_E["Dialog_QueueItemRemove_Title"].toString();
            if (records.length === 1)
                $v_1.text = Xrm.Internal.getResourceString("Dialog_QueueItemRemoveNew_Description_Single");
            else
                $v_1.text = String.format(Xrm.Internal
                    .getResourceString("Dialog_QueueItemRemoveNew_Description_Plural"),
                    records.length);
            $v_3 = Mscrm.InternalUtilities.GridUtilities
                .createCallbackFunctionFactory(Mscrm.QueueItemGridCommandActions.performActionAfterRemoveMoca,
                    [gridControl, records])
        }
        Xrm.Dialog.openConfirmDialog($v_1, $v_4, $v_3, null)
    } else
        Mscrm.InternalUtilities.GridUtilities
            .executeStandardAction($v_2,
                records,
                450,
                200,
                Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
};
Mscrm.QueueItemGridCommandActions.performActionAfterReleaseMoca = function(returnValue, gridControl, records) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    if (records.length === 1)
        Xrm.Internal.messages.releaseToQueue(new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id))
            .then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
    else if (records.length > 1 &&
    (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" && Xrm.Page.context.client.getClientState() === "Online")) {
        for (var $v_0 = new Array(records
                     .length),
            $v_1 = 0;
            $v_1 < records.length;
            $v_1++) $v_0[$v_1] = records[$v_1].Id.toString();
        Xrm.Internal.messages.releaseMultipleToQueue($v_0)
            .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() }).then(function($p1_0) {
                    for (var $$arr_7 = $p1_0
                                 .responses,
                        $$len_8 = $$arr_7.length,
                        $$idx_9 = 0;
                        $$idx_9 < $$len_8;
                        ++$$idx_9) {
                        var $v_2 = $$arr_7[$$idx_9];
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.get_fault())) {
                            Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(false);
                            return
                        }
                    }
                    !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.QueueItemGridCommandActions.$1(records, 0, gridControl, true)
};
Mscrm.QueueItemGridCommandActions.performActionAfterRemoveMoca = function(returnValue, gridControl, records) {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
    if (records.length === 1)
        Xrm.Internal.messages.removeFromQueue(new Microsoft.Crm.Client.Core.Framework.Guid(records[0].Id))
            .then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
    else if (records.length > 1 &&
    (Mscrm.CommandBarActions.isWebClient() ||
        Xrm.Page.context.client.getClient() === "Outlook" && Xrm.Page.context.client.getClientState() === "Online")) {
        for (var $v_0 = new Array(records
                     .length),
            $v_1 = 0;
            $v_1 < records.length;
            $v_1++) $v_0[$v_1] = records[$v_1].Id.toString();
        Xrm.Internal.messages.removeMultipleFromQueue($v_0)
            .always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() }).then(function($p1_0) {
                    for (var $$arr_7 = $p1_0
                                 .responses,
                        $$len_8 = $$arr_7.length,
                        $$idx_9 = 0;
                        $$idx_9 < $$len_8;
                        ++$$idx_9) {
                        var $v_2 = $$arr_7[$$idx_9];
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.get_fault())) {
                            Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(false);
                            return
                        }
                    }
                    !Mscrm.InternalUtilities.JSTypes.isNull(gridControl) && gridControl.refresh()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
    } else Mscrm.QueueItemGridCommandActions.$2(records, 0, gridControl, true)
};
Mscrm.QueueItemGridCommandActions.queueItemDialogPickOnLoad = function() {
    var $v_0 = Xrm.Page.ui.controls.get("checkboxpick_id");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setFocus();
    var $v_1 = Xrm.Page.getAttribute("records");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1.getValue(), $v_3 = Xrm.Page.ui.controls.get("lbl_headerdescription");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3))
            if ($v_2.length === 1)
                $v_3.setLabel(Xrm.Internal.getResourceString("Dialog_QueueItemPick_Description_Single"));
            else
                $v_3.setLabel(String.format(Xrm.Internal.getResourceString("Dialog_QueueItemPick_Description_Plural"),
                    $v_2.length))
    }
};
Mscrm.QueueItemGridCommandActions.queueItemDialogPickClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = Xrm.Page.getAttribute("gridControl"), $v_1 = $v_0, $v_2 = Xrm.Page.getAttribute("records");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        var $v_3 = Xrm.Page.getAttribute("checkboxpick_id"), $v_4 = false;
        if ($v_3.getValue()) $v_4 = true;
        var $v_5 = $v_2.getValue();
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if ($v_5.length === 1)
            Xrm.Internal.messages.pickFromQueue($v_5[0].Id,
                new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()),
                $v_4).then(function($p1_0) {
                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                    Xrm.Page.ui.close()
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
        else if ($v_5.length > 1 &&
        (Mscrm.CommandBarActions.isWebClient() ||
            Xrm.Page.context.client.getClient() === "Outlook" && Xrm.Page.context.client.getClientState() === "Online"))
            Xrm.Internal.messages.pickMultipleFromQueue($v_5,
                    new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()),
                    $v_4).always(function() { Mscrm.InternalUtilities.DialogUtility.hideProgressMessage() })
                .then(function($p1_0) {
                        for (var $$arr_8 = $p1_0
                                     .responses,
                            $$len_9 = $$arr_8.length,
                            $$idx_A = 0;
                            $$idx_A < $$len_9;
                            ++$$idx_A) {
                            var $v_6 = $$arr_8[$$idx_A];
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6.get_fault())) {
                                Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(true);
                                return
                            }
                        }
                        Xrm.Page.ui.close()
                    },
                    Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
        else Mscrm.QueueItemGridCommandActions.$0($v_5, 0, $v_1, $v_4, true)
    }
};
Mscrm.QueueItemGridCommandActions.$0 = function($p0, $p1, $p2, $p3, $p4) {
    if ($p1 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p4 && Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(true);
        Xrm.Page.ui.close();
        !Mscrm.InternalUtilities.JSTypes.isNull($p2) && $p2.refresh()
    } else
        Xrm.Internal.messages.pickFromQueue($p0[$p1].Id,
            new Microsoft.Crm.Client.Core.Framework.Guid(Xrm.Page.context.getUserId()),
            $p3).then(function() { Mscrm.QueueItemGridCommandActions.$0($p0, $p1 + 1, $p2, $p3, $p4) },
            function() { Mscrm.QueueItemGridCommandActions.$0($p0, $p1 + 1, $p2, $p3, false) })
};
Mscrm.QueueItemGridCommandActions.$2 = function($p0, $p1, $p2, $p3) {
    if ($p1 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p3 && Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($p2) && $p2.refresh()
    } else
        Xrm.Internal.messages.removeFromQueue(new Microsoft.Crm.Client.Core.Framework.Guid($p0[$p1].Id))
            .then(function() { Mscrm.QueueItemGridCommandActions.$2($p0, $p1 + 1, $p2, $p3) },
                function() { Mscrm.QueueItemGridCommandActions.$2($p0, $p1 + 1, $p2, false) })
};
Mscrm.QueueItemGridCommandActions.$1 = function($p0, $p1, $p2, $p3) {
    if ($p1 >= $p0.length) {
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        !$p3 && Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($p2) && $p2.refresh()
    } else
        Xrm.Internal.messages.releaseToQueue(new Microsoft.Crm.Client.Core.Framework.Guid($p0[$p1].Id))
            .then(function() { Mscrm.QueueItemGridCommandActions.$1($p0, $p1 + 1, $p2, $p3) },
                function() { Mscrm.QueueItemGridCommandActions.$1($p0, $p1 + 1, $p2, false) })
};
Mscrm.QueueItemGridCommandActions.queueItemDialogCloseCallback = function(dialogParams, callbackParams) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dialogParams) && dialogParams["lastButtonClicked"] === "ok_id") {
        var $v_0 = callbackParams["gridControl"];
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.refresh()
    }
};
Mscrm.QueueItemGridCommandActions.queueItemDialogRouteOnLoad = function() {
    var $v_0 = Xrm.Page.ui.controls.get("routeto_id");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setFocus();
    var $v_1 = Xrm.Page.getAttribute("records");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_5 = $v_1.getValue(), $v_6 = Xrm.Page.ui.controls.get("lbl_headerdescription");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6))
            if ($v_5.length === 1)
                $v_6.setLabel(Xrm.Internal.getResourceString("Dialog_QueueItemRoute_Description_Single"));
            else
                $v_6.setLabel(String.format(Xrm.Internal.getResourceString("Dialog_QueueItemRoute_Description_Plural"),
                    $v_5.length))
    }
    var $v_2 = Xrm.Page.getControl("chkBoxRemoveItem_id");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setVisible(false);
    var $v_3 = Xrm.Page.getControl("lbl_assignedtouser");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setVisible(false);
    var $v_4 = Xrm.Page.getControl("crmUserLookupControl_id");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setVisible(false)
};
Mscrm.QueueItemGridCommandActions.queueItemDialogRouteClick = function() {
    if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline()) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    var $v_0 = false, $v_1 = Xrm.Page.getAttribute("routeto_id"), $v_2 = false;
    if ($v_1.getValue()) $v_0 = true;
    var $v_3 = null;
    if ($v_0) {
        $v_3 = Mscrm.QueueItemGridCommandActions.$4();
        var $v_5 = Xrm.Page.getAttribute("chkBoxRemoveItem_id");
        if ($v_5.getValue()) $v_2 = true
    } else $v_3 = Mscrm.QueueItemGridCommandActions.$3();
    var $v_4 = Xrm.Page.getAttribute("records");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
        var $v_6 = $v_4.getValue();
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        for (var $v_7 = 0, $$arr_8 = $v_6, $$len_9 = $$arr_8.length, $$idx_A = 0; $$idx_A < $$len_9; ++$$idx_A) {
            var $v_8 = $$arr_8[$$idx_A];
            Xrm.Internal.messages.routeTo($v_3, $v_8.Id).then(function($p1_0) {
                    $v_7++;
                    $v_2 &&
                        Xrm.Internal.messages.removeFromQueue($v_8.Id).then(function($p2_0) {
                                if ($v_7 === $v_6.length) {
                                    Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                                    Xrm.Page.ui.close()
                                }
                            },
                            Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca);
                    if ($v_7 === $v_6.length) {
                        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                        Xrm.Page.ui.close()
                    }
                },
                Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca)
        }
    }
};
Mscrm.QueueItemGridCommandActions.$4 = function() {
    var $v_0 = null, $v_1 = Xrm.Page.data.entity.attributes.get("crmUserLookupControl_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1.getValue(),
            $v_3 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2[0].id),
            $v_4 = $v_2[0].entityType;
        if ($v_3 !== Microsoft.Crm.Client.Core.Framework.Guid.get_empty() &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4))
            if ($v_4 === "systemuser") $v_0 = new Xrm.Objects.EntityReference("systemuser", $v_3);
            else if ($v_4 === "team") $v_0 = new Xrm.Objects.EntityReference("team", $v_3)
    }
    return $v_0
};
Mscrm.QueueItemGridCommandActions.$3 = function() {
    var $v_0 = null, $v_1 = Xrm.Page.data.entity.attributes.get("crmQueueLookupControl_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1.getValue(), $v_3 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2[0].id);
        $v_0 = new Xrm.Objects.EntityReference("queue", $v_3)
    }
    return $v_0
};
Mscrm.QueueItemGridCommandActions.queueItemDialogRouteToChange = function() {
    var $v_0 = Xrm.Page.getAttribute("routeto_id"),
        $v_1 = Xrm.Page.getControl("chkBoxRemoveItem_id"),
        $v_2 = Xrm.Page.getControl("crmQueueLookupControl_id"),
        $v_3 = Xrm.Page.getControl("crmUserLookupControl_id"),
        $v_4 = Xrm.Page.ui.controls.get("lbl_addtoqueue"),
        $v_5 = Xrm.Page.ui.controls.get("lbl_assignedtouser");
    if ($v_0.getValue()) {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setVisible(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.setVisible(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible(true)
    } else {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setVisible(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setVisible(true)
    }
};
Mscrm.QueueItemGridCommandActions.queueItemDialogRouteLookupChange = function() {
    var $v_0 = Xrm.Page.getAttribute("routeto_id"), $v_1 = null;
    if ($v_0.getValue()) $v_1 = Xrm.Page.data.entity.attributes.get("crmUserLookupControl_id");
    else $v_1 = Xrm.Page.data.entity.attributes.get("crmQueueLookupControl_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_1.getValue(), $v_3 = Xrm.Page.getControl("ok_id");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_3)) return;
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_2) || !$v_2.length) $v_3.setDisabled(true);
        else $v_3.setDisabled(false)
    }
};
Mscrm.QueueItemGridCommandActions.openAlertDialogForMultipleError = function(isQueueitemPick) {
    var $v_0 = new Xrm.AlertDialogStrings;
    $v_0.text = Xrm.Internal.getResourceString("Error_Message_Action_MultipleErrorsFound");
    Xrm.Dialog.openAlertDialog($v_0, null, function() { isQueueitemPick && Xrm.Page.ui && Xrm.Page.ui.close() })
};
Mscrm.QueueItemGridCommandActions.registerClass("Mscrm.QueueItemGridCommandActions")