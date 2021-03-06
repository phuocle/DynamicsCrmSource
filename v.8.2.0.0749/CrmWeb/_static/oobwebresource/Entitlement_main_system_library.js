Type.registerNamespace("Mscrm");
Mscrm.EntitlementCommandActions = function() {};
Mscrm.EntitlementCommandActions.RenewEntitlement = function() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/entitlements/dlg_renew.aspx"), $v_1 = new Xrm.DialogOptions;
    $v_1.width = 450;
    $v_1.height = 200;
    Xrm.Internal.openDialog($v_0.toString(),
        $v_1,
        null,
        null,
        Mscrm.EntitlementCommandActions.performActionAfterRenewEntitlement)
};
Mscrm.EntitlementCommandActions.cancel = function() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_cancel.aspx");
    $v_0.get_query()["iObjType"] = 9700;
    $v_0.get_query()["iTotal"] = 1;
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 410;
    $v_1.height = 200;
    Xrm.Internal.openDialog($v_0.toString(),
        $v_1,
        [Xrm.Page.data.entity.getId()],
        null,
        Mscrm.EntitlementCommandActions.performForceReloadAfterAction)
};
Mscrm.EntitlementCommandActions.performForceReloadAfterAction = function() { Xrm.Page.data.refresh(true) };
Mscrm.EntitlementCommandActions
    .performActionAfterRenewEntitlement = function(returnValue) {
        returnValue && Mscrm.EntitlementGridCommandActions.renewEntitlement(Xrm.Page.data.entity.getId())
    };
Mscrm.EntitlementCommandActions.isEntitlementDefault = function(entitlementId) {
    var $v_0 = false, $v_1 = Xrm.Page.getAttribute("isdefault");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        $v_0 = $v_1.getValue();
        return $v_0
    }
    Xrm.Internal.messages.retrieve("entitlement", entitlementId, ["isdefault"]).then(function($p1_0) {
            var $v_2 = $p1_0.entity;
            $v_0 = $v_2.getValue("isdefault")
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return $v_0
};
Mscrm.EntitlementCommandActions.setDefaultEntitlement = function(entityId, entityName) {
    Mscrm.EntitlementCommandActions.updateIfEntitlementActive(entityId, entityName, ["statecode", "customerid"])
};
Mscrm.EntitlementCommandActions
    .updateIfEntitlementActive = function(entitlementId, entityName, columnName, records, entityTypeCode) {
        Xrm.Internal.messages.retrieve("entitlement", entitlementId, columnName).then(function($p1_0) {
                var $v_0 = $p1_0.entity;
                if ($v_0.hasValue("statecode")) {
                    var $v_1 = $v_0.getValue("statecode");
                    if ($v_1.get_value() === 1)
                        Mscrm.EntitlementCommandActions
                            .updateEntitlementIfNoDefaultEntitlementExists(records,
                                entityTypeCode,
                                entitlementId,
                                entityName,
                                $v_0.getValue("customerid"));
                    else Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ENT_DEFAULT_INACTIVE_MSG"), null)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    };
Mscrm.EntitlementCommandActions
    .updateEntitlementIfNoDefaultEntitlementExists =
    function(records, entityTypeCode, entitlementId, entityName, customer) {
        var $v_0 =
                "<fetch version='1.0' mapping='logical'><entity name='entitlement'><attribute name='entitlementid' /><filter type='and'><condition attribute='isdefault' operator='eq' value='1' /></filter><filter type='and'><condition attribute='customerid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(customer.Id.toString()) + "' /></filter></entity></fetch>",
            $v_1 = null;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                $v_1 = $p1_0.entityCollection;
                var $v_2 = null;
                if ($v_1.get_count() > 0) $v_2 = $v_1.get_entities()[0].getValue("entitlementid").toString();
                Mscrm.EntitlementCommandActions.$1(entitlementId, entityName, $v_2, customer.Id.toString())
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    };
Mscrm.EntitlementCommandActions.$1 = function($p0, $p1, $p2, $p3) {
    var $v_0 = "false",
        $v_1 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("defaultentitlement_confirm", 9700, 1);
    $v_1.get_query()["customerId"] = $p3;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p2) && $p1.toString() === "9700") $v_0 = "true";
    $v_1.get_query()["defaultExists"] = $v_0;
    var $v_2 = [$p0], $v_3 = new Xrm.DialogOptions;
    $v_3.width = parseInt(Xrm.Internal.getResourceString("LOCID_ENT_DEFAULT_DIALOG_WIDTH").toString());
    $v_3.height = parseInt(Xrm.Internal.getResourceString("LOCID_ENT_DEFAULT_DIALOG_HEIGHT").toString());
    Xrm.Internal.openDialog($v_1.toString(), $v_3, $v_2, null, Mscrm.EntitlementCommandActions.$0)
};
Mscrm.EntitlementCommandActions.$0 = function() { Xrm.Page.data.refresh(true) };
Mscrm.EntitlementCommandActions.EntitlementState = function() {};
Mscrm.EntitlementCommandActions.EntitlementState.prototype = { draft: 0, active: 1 };
Mscrm.EntitlementCommandActions.EntitlementState
    .registerEnum("Mscrm.EntitlementCommandActions.EntitlementState", false);
Mscrm.EntitlementMainSystemLibraryWebResource = function() {};
Mscrm.EntitlementMainSystemLibraryWebResource.form_onload = function() {
    Xrm.Page.ui.getFormType() !== 4 && Mscrm.EntitlementMainSystemLibraryWebResource.allocationType_onchange();
    if (Xrm.Page.context.client.getClient() !== "Mobile") {
        var $v_0 = Xrm.Page.getAttribute("remainingterms");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.controls) &&
            $v_0.controls.forEach(function($p1_0, $p1_1) {
                var $v_1 = $p1_0;
                $v_1.setDisabled(true)
            })
    }
};
Mscrm.EntitlementMainSystemLibraryWebResource.allocationType_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("allocationtypecode"),
        $v_1 = Xrm.Page.data.entity.attributes.get("decreaseremainingon"),
        $v_2 = $v_1.getOptions(),
        $v_3 = Xrm.Page.ui.controls.get("decreaseremainingon");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue()))
        if (1 === $v_0.getValue()) {
            $v_1.setValue($v_2[0].value);
            $v_3.setDisabled(true);
            $v_1.setSubmitMode("always")
        } else {
            $v_3.setDisabled(false);
            $v_1.setSubmitMode("dirty")
        }
};
Mscrm.EntitlementMainSystemLibraryWebResource.customerid_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("customerid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = Xrm.Page.ui.controls.get("lookup_grid_EntitlementContacts");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
            var $v_2 = $v_0.getValue(),
                $v_3 = '<filter type="and"><condition attribute="parentcustomerid" operator="like" value="' +
                    CrmEncodeDecode.CrmXmlAttributeEncode($v_2[0].id.toString()) +
                    '"/></filter>';
            $v_1.addCustomFilter($v_3);
            $v_1.allowUserToDisableRelationshipFilter(false)
        }
    }
};
Mscrm.EntitlementGridCommandActions = function() {};
Mscrm.EntitlementGridCommandActions.renewEntitlement = function(entitlementId) {
    Xrm.Internal.messages.renewEntitlement(Microsoft.Crm.Client.Core.Framework.Guid.tryCreate(entitlementId), -1)
        .then(function($p1_0) {
                var $v_0 = $p1_0.entity, $v_1 = $v_0.get_identifier().Id.toString();
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1) &&
                    Xrm.Utility.openEntityForm("entitlement", $v_1, null)
            },
            function($p1_0) {
                Xrm.Internal.openErrorDialog($p1_0.get_organizationServiceFault().get_errorCode(), $p1_0.get_message())
            })
};
Mscrm.EntitlementGridCommandActions.Cancel = function(gridControl, selectedRecords) {
    if (!selectedRecords) return;
    var $v_0 = Number.parseInvariant(Xrm.Internal.getResourceString("LOCID_ENTITLEMENT_CANCEL_TH_LT"));
    if (selectedRecords.length > $v_0) {
        Xrm.Utility.alertDialog(String.format(Xrm.Internal.getResourceString("LOCID_ENTITLEMENT_CANCEL_TH_MSG"),
                $v_0.toString()),
            null);
        return
    }
    for (var $v_1 = new Array(selectedRecords
                 .length),
        $v_4 = 0;
        $v_4 < selectedRecords.length;
        $v_4++) $v_1[$v_4] = selectedRecords[$v_4].Id;
    var $v_2 = Mscrm.GlobalImported.CrmUri.create("/_grid/cmds/dlg_cancel.aspx");
    $v_2.get_query()["iObjType"] = 9700;
    $v_2.get_query()["iTotal"] = selectedRecords.length;
    var $v_3 = new Xrm.DialogOptions;
    $v_3.width = 520;
    $v_3.height = 230;
    Xrm.Internal.openDialog($v_2.toString(),
        $v_3,
        $v_1,
        null,
        Mscrm.EntitlementGridCommandActions.performActionAfterCancelEntitlement)
};
Mscrm.EntitlementGridCommandActions
    .performActionAfterCancelEntitlement = function(returnValue, gridControl) {
        if (returnValue) gridControl && gridControl.refresh()
    };
Mscrm.EntitlementGridCommandActions.openEntitlementTemplate = function() {
    var $v_0 = Mscrm.GlobalImported.CrmUri.create("/entitlements/lookup_template.aspx"), $v_1 = new Xrm.DialogOptions;
    $v_1.width = 370;
    $v_1.height = 370;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, window, null, null)
};
Mscrm.EntitlementCommandActions.registerClass("Mscrm.EntitlementCommandActions");
Mscrm.EntitlementMainSystemLibraryWebResource.registerClass("Mscrm.EntitlementMainSystemLibraryWebResource");
Mscrm.EntitlementGridCommandActions.registerClass("Mscrm.EntitlementGridCommandActions");
Mscrm.Form_onload = Mscrm.EntitlementMainSystemLibraryWebResource.form_onload;
Mscrm.allocationtype_onchange = Mscrm.EntitlementMainSystemLibraryWebResource.allocationType_onchange;
Mscrm.customerid_onchange = Mscrm.EntitlementMainSystemLibraryWebResource.customerid_onchange