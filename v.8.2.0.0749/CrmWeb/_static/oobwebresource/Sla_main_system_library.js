Type.registerNamespace("Mscrm");
Mscrm.CreateSlaDialog = function() {};
Mscrm.CreateSlaDialog.onLoadCreateSla = function() {
    if (Xrm.Page.context.client.getClientState() !== "Online") {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        Xrm.Page.ui.close();
        return
    }
    for (var $v_0 = Xrm.Page.getControl("applicableEntity_id"),
        $v_1 = $v_0.getAttribute(),
        $v_2 = $v_1.getOptions(),
        $$arr_3 = $v_2,
        $$len_4 = $$arr_3.length,
        $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_5 = $$arr_3[$$idx_5];
        $v_0.removeOption($v_5.value)
    }
    var $v_3 = Xrm.Page.data.entity.attributes.get("applicableEntity_id"), $v_4 = $v_3.getOptions();
    $v_4.sort(function($p1_0, $p1_1) { return $p1_0.text.localeCompare($p1_1.text) });
    for (var $$arr_B = $v_4, $$len_C = $$arr_B.length, $$idx_D = 0; $$idx_D < $$len_C; ++$$idx_D) {
        var $v_6 = $$arr_B[$$idx_D];
        $v_0.addOption($v_6)
    }
    $v_0.setVisible(true)
};
Mscrm.CreateSlaDialog.createSlaClick = function() {
    if (Xrm.Page.context.client.getClientState() !== "Online") {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
    var $v_0 = Xrm.Page.data.entity.attributes.get("applicableEntity_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_2 = $v_0.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("applicableEntity_id", $v_2)
    }
    var $v_1 = Xrm.Page.data.entity.attributes.get("name_id");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_3 = $v_1.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
            Mscrm.InternalUtilities.DialogUtility.setAttributeValue("name_id", $v_3)
    }
    Mscrm.InternalUtilities.DialogUtility.setLastButtonClicked("ok_id");
    Xrm.Page.ui.close()
};
Mscrm.CreateSlaDialog.onChangeSlaEntity = function() {
    if (Xrm.Page.context.client.getClientState() !== "Online") {
        Mscrm.InternalUtilities.DialogUtility.showMoCAOfflineError();
        return
    }
};
Mscrm.SLAGridCommandActions = function() {};
Mscrm.SLAGridCommandActions.setAsDefault = function(gridControl, records, entityTypeCode) {
    if (records.length === 1) {
        var $v_0 = records[0].Id.toString(),
            $v_1 = records[0].TypeCode.toString(),
            $v_2 = ["statecode", "objecttypecode"];
        Mscrm.SlaMainSystemLibraryWebResource
            .updateIfSlaActive($v_0, $v_1, $v_2, false, gridControl, records, entityTypeCode)
    }
};
Mscrm.SlaMainSystemLibraryWebResource = function() {};
Mscrm.SlaMainSystemLibraryWebResource.applicableFromPicklistOnchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("applicablefrompicklist"),
        $v_1 = Xrm.Page.data.entity.attributes.get("applicablefrom");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_0.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_1.setValue(Mscrm.SlaMainSystemLibraryWebResource.$2[$v_2])
    }
};
Mscrm.SlaMainSystemLibraryWebResource.businessHoursIdOnclick = function() {
    var $v_0 = Xrm.Page.ui.controls.get("businesshoursid");
    $v_0.setParameter("serviceCalendarType", "1")
};
Mscrm.SlaMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = function($p1_0) {
        Mscrm.SlaMainSystemLibraryWebResource.$9();
        Mscrm.SlaMainSystemLibraryWebResource.$5();
        Mscrm.SlaMainSystemLibraryWebResource.$8()
    };
    Xrm.Page.data.addOnLoad($v_0);
    if (Xrm.Page.context.isCrmOnline() && Xrm.Internal.isFeatureEnabled("FCB.SLAV2")) {
        var $v_2 = Xrm.Page.data.entity.attributes.get("objecttypecode"),
            $v_3 = Xrm.Page.data.entity.attributes.get("statecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_3.getValue() === 0) {
            var $v_4 = $v_2.getValue();
            Mscrm.SlaMainSystemLibraryWebResource.$A($v_4)
        }
    }
    Mscrm.SlaMainSystemLibraryWebResource.$6();
    var $v_1 = Xrm.Page.ui.getFormType() === 1;
    if ($v_1) {
        Mscrm.SlaMainSystemLibraryWebResource.$7();
        var $v_5 = Xrm.Page.data.entity.attributes.get("slatype"), $v_6 = Xrm.Page.getAttribute("allowpauseresume");
        $v_6.setValue(true);
        $v_5.setValue(1)
    }
};
Mscrm.SlaMainSystemLibraryWebResource.$A = function($p0) {
    Xrm.Internal.messages.shouldDisplaySLALimitNotification($p0).then(function($p1_0) {
            var $v_0 = $p1_0.result;
            $v_0 &&
                Xrm.Internal.messages.whoAmI().then(function($p2_0) {
                        var $v_1 = $p2_0.organizationId.toString(), $v_2 = ["maximumentitieswithactivesla"];
                        Xrm.Internal.messages.retrieve("organization", $v_1, $v_2).then(function($p3_0) {
                                var $v_3 = $p3_0.entity,
                                    $v_4 = $v_3.getValue("maximumentitieswithactivesla").toString(),
                                    $v_5 = String.format(Xrm.Internal.getResourceString("SLA_Limit_Online"), $v_4);
                                Xrm.Page.ui.setFormNotification($v_5, "WARNING", "SLALimitNotification")
                            },
                            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.SlaMainSystemLibraryWebResource.$6 = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("objecttypecode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.controls;
        $v_0.setSubmitMode("never");
        if (Xrm.Internal.isFeatureEnabled("FCB.SLAV2")) {
            $v_0.setRequiredLevel("required");
            $v_1.forEach(function($p1_0, $p1_1) {
                var $v_2 = $p1_0;
                $v_2.setDisabled(true)
            })
        } else
            $v_1.forEach(function($p1_0, $p1_1) {
                var $v_3 = $p1_0;
                $v_3.setVisible(false)
            })
    }
};
Mscrm.SlaMainSystemLibraryWebResource.$7 = function() {
    if (Xrm.Internal.isFeatureEnabled("FCB.SLAV2")) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("objecttypecode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = $v_0.getValue();
            if ($v_1 !== 112) {
                var $v_2 = Xrm.Page.ui.controls.get("SLAType"), $v_3 = $v_2.getAttribute();
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                    $v_3.setValue(1);
                    $v_2.setDisabled(true)
                }
            }
        }
    }
};
Mscrm.SlaMainSystemLibraryWebResource
    .updateIfSlaActive = function(slaId, entityName, columnNames, isForm, gridControl, records, entityTypeCode) {
        Xrm.Internal.messages.retrieve("sla", slaId, columnNames).then(function($p1_0) {
                var $v_0 = $p1_0.entity;
                if ($v_0.hasValue("statecode")) {
                    var $v_1 = $v_0.getValue("statecode"), $v_2 = $v_0.getValue("objecttypecode"), $v_3 = "0";
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0
                        .getValue("objecttypecode"))) $v_3 = $v_2.get_valueString();
                    if ($v_1.get_value() === 1)
                        Mscrm.SlaMainSystemLibraryWebResource
                            .updateSlaIfNoDefaultSlaExists(gridControl,
                                records,
                                entityTypeCode,
                                slaId,
                                entityName,
                                isForm,
                                $v_3);
                    else Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_SLADEFAULT_INACTIVE_MSG"), null)
                }
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    };
Mscrm.SlaMainSystemLibraryWebResource
    .updateSlaIfNoDefaultSlaExists = function(gridControl,
        records,
        entityTypeCode,
        slaId,
        entityName,
        isForm,
        currentTypeCode) {
        var $v_0 = null, $v_1 = 112;
        if (currentTypeCode !== "0" && currentTypeCode !== "112") {
            $v_1 = Number.parseInvariant(currentTypeCode);
            $v_0 =
                "<fetch version='1.0' mapping='logical'><entity name='sla'><attribute name='slaid' /><filter type='and'><condition attribute='isdefault' operator='eq' value='1' /><condition attribute='objecttypecode' operator='eq' value='";
            $v_0 += CrmEncodeDecode.CrmXmlAttributeEncode(currentTypeCode);
            $v_0 += "' /></filter></entity></fetch>"
        } else {
            $v_0 =
                "<fetch version='1.0' mapping='logical'><entity name='sla'><attribute name='slaid' /><filter type='and'><condition attribute='isdefault' operator='eq' value='1' /><filter type='or'><condition attribute='objecttypecode' operator='eq' value='";
            $v_0 += CrmEncodeDecode.CrmXmlAttributeEncode("112");
            $v_0 += "' /><condition attribute='objecttypecode' operator='null' /></filter></filter></entity></fetch>"
        }
        var $v_2 = null;
        Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) {
                $v_2 = $p1_0.entityCollection;
                var $v_3 = null;
                if ($v_2.get_count() > 0) $v_3 = $v_2.get_entities()[0].getValue("slaid").toString();
                else $v_3 = "";
                if (isForm)
                    Mscrm.SlaMainSystemLibraryWebResource.$B(slaId,
                        entityName,
                        $v_3,
                        Xrm.Internal.getEntityDisplayName(Xrm.Internal.getEntityName($v_1)));
                else
                    Mscrm.SlaMainSystemLibraryWebResource.$C(gridControl,
                        records,
                        entityTypeCode,
                        slaId,
                        $v_3,
                        Xrm.Internal.getEntityDisplayName(Xrm.Internal.getEntityName($v_1)))
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    };
Mscrm.SlaMainSystemLibraryWebResource.$5 = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("applicablefrom").getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length) return;
    else {
        var $v_1 = Xrm.Page.ui.controls.get("applicablefrompicklist");
        $v_1.setDisabled(true)
    }
};
Mscrm.SlaMainSystemLibraryWebResource.$9 = function() {
    var $v_0 = "applicablefrompicklist", $v_1 = Xrm.Page.data.entity.attributes.get($v_0);
    $v_1.setRequiredLevel("required")
};
Mscrm.SlaMainSystemLibraryWebResource.$8 = function() {
    var $v_0 = 112, $v_1 = Xrm.Page.data.entity.attributes.get("objecttypecode");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) $v_0 = $v_1.getValue();
    Xrm.Internal.messages.retrieveAttributeList($v_0).then(function($p1_0) {
            var $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize($p1_0.result),
                $v_3 = Xrm.Page.data.entity.attributes.get("applicablefrompicklist"),
                $v_4 = Xrm.Page.ui.controls.get("applicablefrompicklist");
            if (Mscrm.InternalUtilities.JSTypes.isNull($v_4) || Mscrm.InternalUtilities.JSTypes.isNull($v_3)) return;
            $v_3.setSubmitMode("never");
            $v_3.clearOptions();
            $v_4.clearOptions();
            var $v_5 = [];
            Mscrm.SlaMainSystemLibraryWebResource.$2 = {};
            Mscrm.SlaMainSystemLibraryWebResource.$1 = {};
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2["Options"]))
                for (var $v_7 = $v_2["Options"], $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                    var $v_9 = $v_7[$v_8],
                        $v_A = $v_9["AttributeLogicalName"],
                        $v_B = $v_9["AttributeDisplayName"],
                        $v_C = new Xrm.OptionSetItem($v_8, $v_B);
                    $v_5[$v_8] = $v_C;
                    Mscrm.SlaMainSystemLibraryWebResource.$1[$v_A] = $v_8;
                    Mscrm.SlaMainSystemLibraryWebResource.$2[$v_8.toString()] = $v_A;
                    $v_3.addOption($v_C);
                    $v_4.addOption($v_C)
                }
            var $v_6 = Xrm.Page.getAttribute("applicablefrom");
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.SlaMainSystemLibraryWebResource.$1) &&
                !Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_6.getValue()))
                $v_3.setValue(Mscrm.SlaMainSystemLibraryWebResource.$1[$v_6.getValue()]);
            else {
                $v_3.setValue($v_5[0].value);
                $v_6.setValue(Mscrm.SlaMainSystemLibraryWebResource.$2[$v_3.getValue()])
            }
        },
        function($p1_0) {})
};
Mscrm.SlaMainSystemLibraryWebResource.$B = function($p0, $p1, $p2, $p3) {
    var $v_0 = new Xrm.DialogOptions;
    $v_0.width = 600;
    $v_0.height = 200;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p2) && $p1.toString() === "9750") {
        var $v_1 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("defaultsla_confirm", 9750, 1);
        $v_1.get_query()["iEntityName"] = $p3;
        $v_1.get_query()["iOldId"] = $p2;
        var $v_2 = new Array(1);
        $v_2[0] = $p0;
        Xrm.Internal.openDialog($v_1.toString(), $v_0, $v_2, null, Mscrm.SlaMainSystemLibraryWebResource.$4)
    } else {
        var $v_3 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("defaultsla_apply", 9750, 1),
            $v_4 = new Array(1);
        $v_4[0] = $p0;
        Xrm.Internal.openDialog($v_3.toString(), $v_0, $v_4, null, Mscrm.SlaMainSystemLibraryWebResource.$4)
    }
};
Mscrm.SlaMainSystemLibraryWebResource.$4 = function() { Xrm.Page.data.refresh(true) };
Mscrm.SlaMainSystemLibraryWebResource.$C = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = [false, $p0], $v_1 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p4))
        if ($p4
            .toUpperCase() ===
            $p3.replace("{", "").replace("}", "")
            .toUpperCase()) Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_SLADEFAULTED_MSG"), null);
        else {
            var $v_2 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("defaultsla_confirm", 9750, 1);
            $v_2.get_query()["iEntityName"] = $p5;
            $v_2.get_query()["iOldId"] = $p4;
            var $v_3 = new Array(1);
            $v_3[0] = $p3;
            Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_2, $p1, 600, 200, $v_1, $v_3)
        }
    else {
        var $v_4 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("defaultsla_apply", $p2, 1),
            $v_5 = new Array(1);
        $v_5[0] = $p3;
        Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_4, $p1, 600, 200, $v_1, $v_5)
    }
};
Mscrm.SlaMainSystemLibraryWebResource.SLAState = function() {};
Mscrm.SlaMainSystemLibraryWebResource.SLAState.prototype = { draft: 0, active: 1 };
Mscrm.SlaMainSystemLibraryWebResource.SLAState.registerEnum("Mscrm.SlaMainSystemLibraryWebResource.SLAState", false);
Mscrm.SLACommandBarActions = function() {};
Mscrm.SLACommandBarActions.isSlaDefault = function(slaId) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("isdefault");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) Mscrm.SLACommandBarActions.$0 = $v_0.getValue();
    else
        Xrm.Internal.messages.retrieve("sla", slaId, ["isdefault"]).then(function($p1_0) {
                var $v_1 = $p1_0.entity, $v_2 = 0;
                if ($v_1
                    .hasField("isdefault") &&
                    $v_1.hasValue("isdefault")) $v_2 = $v_1.getValue("isdefault").get_value();
                if ($v_2 === 1) Mscrm.SLACommandBarActions.$0 = true;
                else Mscrm.SLACommandBarActions.$0 = false;
                if (!Mscrm.SLACommandBarActions.$3) {
                    Xrm.Page.ui.refreshRibbon();
                    Mscrm.SLACommandBarActions.$3 = true
                } else Mscrm.SLACommandBarActions.$3 = false
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback);
    return Mscrm.SLACommandBarActions.$0
};
Mscrm.SLACommandBarActions.setDefaultSla = function(entityId, entityName) {
    var $v_0 = ["statecode", "objecttypecode"];
    Mscrm.SlaMainSystemLibraryWebResource.updateIfSlaActive(entityId, entityName, $v_0, true)
};
Mscrm.CreateSlaDialog.registerClass("Mscrm.CreateSlaDialog");
Mscrm.SLAGridCommandActions.registerClass("Mscrm.SLAGridCommandActions");
Mscrm.SlaMainSystemLibraryWebResource.registerClass("Mscrm.SlaMainSystemLibraryWebResource");
Mscrm.SLACommandBarActions.registerClass("Mscrm.SLACommandBarActions");
Mscrm.SlaMainSystemLibraryWebResource.$2 = null;
Mscrm.SlaMainSystemLibraryWebResource.$1 = null;
Mscrm.SLACommandBarActions.$3 = false;
Mscrm.SLACommandBarActions.$0 = false;
Type.registerNamespace("Mscrm");
Mscrm.applicablefrompicklist_onchange = Mscrm.SlaMainSystemLibraryWebResource.applicableFromPicklistOnchange;
Mscrm.businesshoursid_onclick = Mscrm.SlaMainSystemLibraryWebResource.businessHoursIdOnclick;
Mscrm.Form_onload = Mscrm.SlaMainSystemLibraryWebResource.formOnload