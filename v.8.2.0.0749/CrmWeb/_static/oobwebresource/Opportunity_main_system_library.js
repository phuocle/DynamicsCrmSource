Type.registerNamespace("Mscrm");
Mscrm.CloseOpportunityDialogResult = function() {};
Mscrm.CloseOpportunityDialogResult.prototype = {
    actualEnd: null,
    actualRevenue: null,
    description: null,
    state: 0,
    reason: 0,
    competitor: null
};
Mscrm.OpportunityGridCommandActions = function() {};
Mscrm.OpportunityGridCommandActions.opportunityClose = function(selectedOpportunities, won, gridControl) {
    var $v_0 = selectedOpportunities[0], $v_1 = new Xrm.DialogOptions;
    $v_1.width = 450;
    $v_1.height = 420;
    var $v_2 = {}, $v_3 = {};
    $v_2["won"] = won;
    $v_3["entityName"] = $v_0.Name;
    $v_3["gridControl"] = gridControl;
    $v_2["opportunityId"] = $v_0.Id.toString();
    var $v_4 = Mscrm.InternalUtilities.DialogUtility.closeDialogFromGridCallback;
    Xrm.Dialog.openDialog("CloseOpportunity", $v_1, $v_2, $v_4, $v_3)
};
Mscrm.OpportunityGridCommandActions.onClickCloseOpportunity = function() {
    var $v_0 = null,
        $v_1 = Xrm.Page.getAttribute("actualrevenue_id"),
        $v_2 = Xrm.Page.getAttribute("closedate_id"),
        $v_3 = Xrm.Page.getAttribute("statusreason_id"),
        $v_4 = new Xrm.AlertDialogStrings,
        $v_5 = $v_1.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_5) || !($v_1.getMin() <= $v_5 && $v_1.getMax() >= $v_5)) {
        $v_4.text = String.format(Xrm.Internal.getResourceString("Web.SFA.opps.dlg_closeopp.aspx_37"),
            $v_1.getMin(),
            $v_1.getMax());
        Xrm.Dialog.openAlertDialog($v_4, null, null)
    } else if (Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        $v_4.text = Xrm.Internal.getResourceString("Web.SFA.opps.dlg_closeopp.aspx_67");
        Xrm.Dialog.openAlertDialog($v_4, null, null)
    } else {
        Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
        var $v_6 = Xrm.Page.getAttribute("opportunityId");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6)) $v_0 = $v_6.getValue().toString();
        if (Mscrm.InternalUtilities.DialogUtility.isMocaOffline() &&
            !Xrm.Utility.isEntityOfflineSyncEnabled("opportunity")) {
            Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
            return
        }
        Mscrm.InternalUtilities.DialogUtility.showProgressMessage();
        if (Xrm.Utility.isMocaOffline()) Mscrm.OpportunityGridCommandActions.$3($v_1, $v_2, $v_3, $v_0);
        else Mscrm.OpportunityGridCommandActions.$3($v_1, $v_2, $v_3, $v_0)
    }
};
Mscrm.OpportunityGridCommandActions.$3 = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Mscrm.CloseOpportunityDialogResult;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p1.getValue())) $v_0.actualEnd = $p1.getValue().toString();
    $v_0.actualRevenue = $p0.getValue().toString();
    var $v_1 = Xrm.Page.getAttribute("competitor_id"), $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_2 = $v_1.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        var $v_7 = new Microsoft.Crm.Client.Core.Framework.Guid($v_2[0].id);
        $v_0.competitor = $v_7.toString()
    }
    var $v_3 = Xrm.Page.getAttribute("description_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue())) {
        var $v_8 = $v_3.getValue().toString();
        if ($v_8.length > 200) $v_0.description = $v_8.substring(0, 200);
        else $v_0.description = $v_8
    }
    var $v_4 = Xrm.Page.getAttribute("won");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) {
        var $v_9 = $v_4.getValue();
        $v_0.state = $v_9 ? 1 : 2
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p2.getOptions()) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($p2.getSelectedOption())) $v_0.reason = $p2.getSelectedOption().value;
    Mscrm.OpportunityGridCommandActions.$0 = 1;
    var $v_5 = Xrm.Page.getAttribute("caller"),
        $v_6 = !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && !Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())
            ? $v_5.getValue().toString()
            : null;
    if ($v_6 === "CloseQuote") {
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("actualrevenue_id", $v_0.actualRevenue);
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("description_id", $v_0.description);
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("closedate_id", $v_0.actualEnd);
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("competitor_id", $v_0.competitor);
        Mscrm.InternalUtilities.DialogUtility.setAttributeValue("statusreason_id", $v_0.reason);
        Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
        Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
        Xrm.Page.ui.close()
    } else {
        var $v_A = function() {
            Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
            Xrm.Page.ui.close()
        };
        Mscrm.OpportunityGridCommandActions.$2($v_0, $p3, $v_A)
    }
};
Mscrm.OpportunityGridCommandActions.onLoadCloseOpportunity = function() {
    if (Mscrm.InternalUtilities.DialogUtility
        .isMocaOffline() &&
        !Xrm.Utility.isEntityOfflineSyncEnabled("opportunity")) {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    var $v_0 = null, $v_1 = false, $v_2 = Xrm.Page.getAttribute("opportunityId");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) $v_0 = $v_2.getValue().toString();
    var $v_3 = Xrm.Page.getAttribute("won");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_1 = $v_3.getValue();
    var $v_4 = Xrm.Page.getControl("lbl_closedescription");
    !Mscrm.InternalUtilities.JSTypes
        .isNull($v_4) &&
        $v_4.setLabel(Xrm.Internal.getResourceString("Close_Opp_Dlg_Desc"));
    var $v_5 = Xrm.Page.getControl("actualrevenue_id"),
        $v_6 = $v_5.getAttribute(),
        $v_7 = Xrm.Page.getControl("statusreason_id"),
        $v_8 = Xrm.Page.getControl("competitor_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7))
        if ($v_1) {
            Mscrm.CommandBarActions.filterOptionSetValuesFromControl("opportunity", 1, "statusreason_id");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.setDisabled(true)
        } else Mscrm.CommandBarActions.filterOptionSetValuesFromControl("opportunity", 2, "statusreason_id");
    var $v_9 = Xrm.Page.getControl("closedate_id"), $v_A = $v_9.getAttribute(), $v_B = new Array(0);
    $v_B[$v_B.length] = "transactioncurrencyid";
    $v_B[$v_B.length] = "statecode";
    $v_B[$v_B.length] = "estimatedvalue";
    if (Xrm.Utility.isMocaOffline()) {
        var $v_C = Microsoft.Crm.Client.Core.Framework.Guid.tryCreate($v_0),
            $v_D = new Xrm.Objects.EntityReference("opportunity", $v_C);
        $v_D.Id = $v_C;
        $v_D.TypeName = "opportunity";
        $v_D.TypeCode = Xrm.Internal.getEntityCode("opportunity");
        var $v_E = function($p1_0) { Mscrm.OpportunityGridCommandActions.$4($p1_0, $v_6, $v_A) };
        Xrm.Utility.retrieveEntityRecord($v_D,
            $v_B,
            $v_E,
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    } else
        Xrm.Internal.messages.retrieve("opportunity", $v_0, $v_B).then(function($p1_0) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($p1_0)) {
                    var $v_F = $p1_0.entity, $v_G = $v_F.getValue("transactioncurrencyid");
                    if (Mscrm.InternalUtilities.JSTypes.isNull($v_G)) return;
                    var $v_H = $v_G.getValue("Id").toString();
                    $v_B = new Array(0);
                    $v_B[$v_B.length] = "currencysymbol";
                    Xrm.Internal.messages.retrieve("transactioncurrency", $v_H, $v_B).then(function($p2_0) {
                            if (!Mscrm.InternalUtilities.JSTypes.isNull($p2_0)) {
                                var $v_I = $p2_0.entity;
                                if (!IsNull($v_I)) {
                                    var $v_J = $v_I.getValue("currencysymbol");
                                    $v_6.setCurrencySymbol($v_J)
                                }
                            }
                            Mscrm.OpportunityGridCommandActions.$4($v_F, $v_6, $v_A)
                        },
                        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.OpportunityGridCommandActions.$4 = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        var $v_0 = $p0.getValue("statecode");
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_0)) return;
        var $v_1 = parseInt($v_0.getValue("value").toString(), 10);
        if ($v_1 === 1 || $v_1 === 2) {
            var $v_5 = new Xrm.AlertDialogStrings;
            $v_5.text = Xrm.Internal.getResourceString("Error_Message_0x80040515");
            Xrm.Dialog.openAlertDialog($v_5, null, function() { Xrm.Page.ui.close() });
            return
        }
        var $v_2 = $p0.getValue("estimatedvalue"), $v_3 = Xrm.Page.getAttribute("won").getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_3) $p1.setValue($v_2);
        else $p1.setValue(0);
        var $v_4 = new Date;
        $p2.setValue($v_4)
    }
};
Mscrm.OpportunityGridCommandActions.performActionAfterOpportunityClose = function(returnValue, selectedOpportunity) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        var $v_0 = selectedOpportunity.Id.toString(),
            $v_1 = selectedOpportunity.Name,
            $v_2 = function() { Xrm.Internal.refreshParentGrid(3, $v_1, $v_0) };
        Mscrm.OpportunityGridCommandActions.$1 = $v_1;
        Mscrm.OpportunityGridCommandActions.$0 = 2;
        Mscrm.OpportunityGridCommandActions.$2(returnValue, $v_0, $v_2)
    }
};
Mscrm.OpportunityGridCommandActions.$2 = function($p0, $p1, $p2) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0)) {
        var $v_0 = {}, $v_1 = {}, $v_2 = new Array(4), $v_3 = "opportunityid";
        $v_2[0] = $v_3;
        $v_0[$v_3] = 6;
        $v_1[$v_3] = new Xrm.Objects.EntityReference("opportunity", new Microsoft.Crm.Client.Core.Framework.Guid($p1));
        $v_3 = "actualrevenue";
        $v_2[1] = $v_3;
        $v_0[$v_3] = 8;
        $v_1[$v_3] = $p0.actualRevenue;
        $v_3 = "description";
        $v_2[2] = $v_3;
        $v_0[$v_3] = 14;
        $v_1[$v_3] = $p0.description;
        $v_3 = "actualend";
        $v_2[3] = $v_3;
        $v_0[$v_3] = 2;
        $v_1[$v_3] = new Date($p0.actualEnd);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0.competitor)) {
            $v_3 = "competitorid";
            $v_2[4] = $v_3;
            $v_0[$v_3] = 6;
            $v_1[$v_3] = new Xrm.Objects.EntityReference("competitor",
                new Microsoft.Crm.Client.Core.Framework.Guid($p0.competitor))
        }
        var $v_4 = new Xrm.Objects.EntityReference("opportunityclose",
                Microsoft.Crm.Client.Core.Framework.Guid.get_empty()),
            $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_4,
                    $v_1,
                    $v_0,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_5.get_changedFieldNames().addRange($v_2);
        var $v_6 = Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback;
        if (Mscrm.InternalUtilities.DialogUtility
            .isMDDEnabled()) $v_6 = Mscrm.InternalUtilities.DialogUtility.actionFailedCallbackForMoca;
        var $v_7 = function() { Xrm.Page.data.refresh(true) };
        if (Mscrm.OpportunityGridCommandActions.$0 === 1)
            $v_7 = function() {
                Mscrm.InternalUtilities.DialogUtility.hideProgressMessage();
                Xrm.Page.ui.close()
            };
        else if (Mscrm.OpportunityGridCommandActions
            .$0 ===
            2) $v_7 = function() { Xrm.Internal.refreshParentGrid(3, Mscrm.OpportunityGridCommandActions.$1, $p1) };
        if ($p0.state === 1)
            if (Xrm.Utility.isMocaOffline()) {
                var $v_8 = new Xrm.Gen.WinOpportunityRequest($v_5, $p0.reason);
                Xrm.Utility.executeNonCudCommand("WinOpportunity", "opportunity", $v_8, $v_7, $v_6)
            } else Xrm.Internal.messages.winOpportunity($v_5, $p0.reason).then($p2, $v_6);
        else if (Xrm.Utility.isMocaOffline()) {
            var $v_9 = new Xrm.Gen.LoseOpportunityRequest($v_5, $p0.reason);
            Xrm.Utility.executeNonCudCommand("LoseOpportunity", "opportunity", $v_9, $v_7, $v_6)
        } else Xrm.Internal.messages.loseOpportunity($v_5, $p0.reason).then($p2, $v_6)
    }
};
Mscrm.OpportunityGridCommandActions.opportunityReopen = function(selectedOpportunities) {
    for (var $v_0 = 0, $v_1 = -1, $v_2 = 0; $v_2 < selectedOpportunities.length; $v_2++) {
        var $v_3 = selectedOpportunities[$v_2].Id.toString();
        Xrm.Internal.messages.setState("opportunity", $v_3, $v_0, $v_1)
            .then(function() { Xrm.Internal.refreshParentGrid(3, "", $v_3) },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.OpportunityStatusDialogResult = function() {};
Mscrm.OpportunityStatusDialogResult.prototype = { StatusCode: 0 };
Mscrm.OpportunityMainSystemLibraryWebResource = function() {};
Mscrm.OpportunityMainSystemLibraryWebResource.pricelevelid_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("transactioncurrencyid"), $v_1 = "", $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_2 = $v_0.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2[0].id;
    var $v_3 = '<filter type="and"><condition attribute="transactioncurrencyid" operator="like" value="';
    $v_3 += CrmEncodeDecode.CrmXmlAttributeEncode($v_1);
    $v_3 += '"/></filter>';
    Xrm.Page.ui.controls.get("pricelevelid").addCustomFilter($v_3)
};
Mscrm.OpportunityMainSystemLibraryWebResource.form_onload = function() {
    Xrm.Page.context.client.getClient() === "Mobile" && Mscrm.CommandBarActions.checkForSuggestions();
    var $v_0 = Xrm.Page.ui.getFormType();
    $v_0 === 1 && Mscrm.OpportunityQOIControl.setDefaultPricelistForUser("opportunity", "pricelevelid");
    if ($v_0 !== 3 && $v_0 !== 4) Mscrm.OpportunityMainSystemLibraryWebResource.setValueAndControlsOfEstimatedValue();
    else Mscrm.OpportunityMainSystemLibraryWebResource.enableOrDisableAttributesControl("estimatedvalue", true)
};
Mscrm.OpportunityMainSystemLibraryWebResource
    .isrevenuesystemcalculated_onchange = function() {
        Mscrm.OpportunityMainSystemLibraryWebResource.setValueAndControlsOfEstimatedValue()
    };
Mscrm.OpportunityMainSystemLibraryWebResource
    .transactioncurrencyid_onchange = function() {
        !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("pricelevelid")) &&
            Xrm.Page.data.entity.attributes.get("pricelevelid").setValue([])
    };
Mscrm.OpportunityMainSystemLibraryWebResource.setValueAndControlsOfEstimatedValue = function() {
    Mscrm.OpportunityMainSystemLibraryWebResource.setEstimatedValue("estimatedvalue");
    Mscrm.OpportunityMainSystemLibraryWebResource.enableOrDisableEstimatedValueControl("estimatedvalue");
    Mscrm.OpportunityMainSystemLibraryWebResource.enableOrDisableEstimatedValueControl("header_estimatedvalue")
};
Mscrm.OpportunityMainSystemLibraryWebResource.setEstimatedValue = function(attributeName) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isrevenuesystemcalculated").getValue();
    if ($v_0) {
        var $v_1 = Xrm.Page.data.entity.attributes.get(attributeName);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = Xrm.Page.data.entity.attributes.get("totalamount").getValue();
            $v_1.setValue($v_2)
        }
    }
};
Mscrm.OpportunityMainSystemLibraryWebResource.enableOrDisableEstimatedValueControl = function(controlName) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isrevenuesystemcalculated").getValue(),
        $v_1 = Xrm.Page.ui.controls.get(controlName);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setDisabled($v_0)
};
Mscrm.OpportunityMainSystemLibraryWebResource.enableOrDisableAttributesControl = function(attributeName, disable) {
    var $v_0 = Xrm.Page.data.entity.attributes.get(attributeName), $v_1 = $v_0.controls;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        for (var $v_2 = $v_1.getLength(), $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = $v_1.get($v_3);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setDisabled(disable)
        }
};
Mscrm.OpportunityCommandActions = function() {};
Mscrm.OpportunityCommandActions.opportunityClose = function(isWon) {
    if (!Xrm.Page.data.getIsValid()) return;
    var $v_0 = Xrm.Page.data.entity.getId();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return;
    if (Xrm.Page.data.entity.getIsDirty())
        Xrm.Page.data.save().then(function() { Mscrm.OpportunityCommandActions.$5(isWon) },
            Mscrm.InternalUtilities.ClientApiUtility.operationFailedCallback);
    else Mscrm.OpportunityCommandActions.$5(isWon)
};
Mscrm.OpportunityCommandActions.$5 = function($p0) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.height = 490;
    $v_0.width = Xrm.Page.context.client.getClient() === "Mobile" ? 500 : 450;
    var $v_1 = {};
    $v_1["won"] = $p0;
    $v_1["opportunityId"] = Xrm.Page.data.entity.getId();
    var $v_2 = Mscrm.InternalUtilities.DialogUtility.closeDialogCallback;
    Xrm.Dialog.openDialog("CloseOpportunity", $v_0, $v_1, $v_2, null)
};
Mscrm.OpportunityCommandActions.performActionAfterOpportunityClose = function(returnValue) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(returnValue)) {
        var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = function() { Xrm.Page.data.refresh(true) };
        Mscrm.OpportunityGridCommandActions.$2(returnValue, $v_0, $v_1)
    }
};
Mscrm.OpportunityCommandActions.opportunityReopen = function() {
    Mscrm.CommandBarActions.setState(Xrm.Page.data.entity.getId(), "opportunity", 0)
};
Mscrm.OpportunityCommandActions.opportunityRecalculate = function() { Xrm.Page.data.refresh(true) };
Mscrm.CloseOpportunityDialogResult.registerClass("Mscrm.CloseOpportunityDialogResult");
Mscrm.OpportunityGridCommandActions.registerClass("Mscrm.OpportunityGridCommandActions");
Mscrm.OpportunityStatusDialogResult.registerClass("Mscrm.OpportunityStatusDialogResult");
Mscrm.OpportunityMainSystemLibraryWebResource.registerClass("Mscrm.OpportunityMainSystemLibraryWebResource");
Mscrm.OpportunityCommandActions.registerClass("Mscrm.OpportunityCommandActions");
Mscrm.OpportunityGridCommandActions.$0 = 0;
Mscrm.OpportunityGridCommandActions.$1 = null;
Type.registerNamespace("Mscrm");
Mscrm.pricelevelid_setadditionalparams = Mscrm.OpportunityMainSystemLibraryWebResource.pricelevelid_setadditionalparams;
Mscrm.Form_onload = Mscrm.OpportunityMainSystemLibraryWebResource.form_onload;
Mscrm.isrevenuesystemcalculated_onchange = Mscrm.OpportunityMainSystemLibraryWebResource
    .isrevenuesystemcalculated_onchange;
Mscrm.transactioncurrencyid_onchange = Mscrm.OpportunityMainSystemLibraryWebResource.transactioncurrencyid_onchange;
SetValueAndControlsOfEstimatedValue = Mscrm.OpportunityMainSystemLibraryWebResource.setValueAndControlsOfEstimatedValue;
SetEstimatedValue = Mscrm.OpportunityMainSystemLibraryWebResource.setEstimatedValue;
EnableOrDisableEstimatedValueControl = Mscrm.OpportunityMainSystemLibraryWebResource
    .enableOrDisableEstimatedValueControl