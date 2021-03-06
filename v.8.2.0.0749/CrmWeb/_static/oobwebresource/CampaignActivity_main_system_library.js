Type.registerNamespace("Mscrm");
Mscrm.CampaignActivityMainSystemLibraryWebResource = function() {};
Mscrm.CampaignActivityMainSystemLibraryWebResource
    .scheduledstart_onchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("scheduledstart"),
                Xrm.Page.getAttribute("scheduledend"),
                Xrm.Internal.getResourceString("LOCID_STARTDATE_GREATERTHAN_END"),
                Xrm.Page.getAttribute("scheduledstart"))
    };
Mscrm.CampaignActivityMainSystemLibraryWebResource
    .actualstart_onchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("actualstart"),
                Xrm.Page.getAttribute("actualend"),
                Xrm.Internal.getResourceString("LOCID_STARTDATE_GREATERTHAN_END"),
                Xrm.Page.getAttribute("actualstart"))
    };
Mscrm.CampaignActivityMainSystemLibraryWebResource
    .scheduledend_onchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("scheduledstart"),
                Xrm.Page.getAttribute("scheduledend"),
                Xrm.Internal.getResourceString("LOCID_ENDDATE_LESSTHAN_STARTDATE"),
                Xrm.Page.getAttribute("scheduledend"))
    };
Mscrm.CampaignActivityMainSystemLibraryWebResource
    .actualend_onchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("actualstart"),
                Xrm.Page.getAttribute("actualend"),
                Xrm.Internal.getResourceString("LOCID_ENDDATE_LESSTHAN_STARTDATE"),
                Xrm.Page.getAttribute("actualend"))
    };
Mscrm.CampaignActivityMainSystemLibraryWebResource.regardingobjectid_onchange = function(context) {
    var $v_0 = "", $v_1 = null, $v_2 = Xrm.Page.data.entity.attributes.get("regardingobjectid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2)) return;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_3 = $v_2.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.length > 0) {
            var $v_4 = ["transactioncurrencyid"];
            Xrm.Internal.messages.retrieve("campaign", $v_3[0].id, $v_4).then(function($p1_0) {
                    var $v_5 = $p1_0.entity;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5
                        .getValue("transactioncurrencyid"))) $v_1 = $v_5.getValue("transactioncurrencyid");
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
                        $v_0 = $v_1.Id.toString();
                        var $v_6 = Xrm.Page.data.entity.attributes.get("transactioncurrencyid");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                            Xrm.Internal.messages.retrieve("transactioncurrency", $v_0, ["currencyname"])
                            .then(function($p2_0) {
                                    var $v_7 = $p2_0.entity, $v_8 = "";
                                    if (!Mscrm.InternalUtilities.JSTypes
                                        .isNull($v_7
                                            .getValue("currencyname"))) $v_8 = $v_7.getValue("currencyname").toString();
                                    var $v_9 = new Xrm.LookupObject;
                                    $v_9.id = $v_0;
                                    $v_9.entityType = "transactioncurrency";
                                    $v_9.name = $v_8;
                                    var $v_A = [$v_9];
                                    $v_6.setValue($v_A);
                                    $v_6.fireOnChange()
                                },
                                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
                    }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = Mscrm.CampaignActivityMainSystemLibraryWebResource.$4;
    Xrm.Page.data.addOnLoad($v_0);
    Mscrm.CampaignActivityMainSystemLibraryWebResource.$3();
    Mscrm.CampaignActivityMainSystemLibraryWebResource.$2()
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.$2 = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("regardingobjectid"), $v_1 = null, $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_1 = $v_0.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.length > 0) $v_2 = $v_1[0].id;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
        var $v_3 =
                "<fetch version='1.0' mapping='logical' distinct='true'><entity name='campaign'><attribute name='istemplate' /><filter type='and'><condition attribute='campaignid' operator='eq' value='" + $v_2 + "'/></filter></entity></fetch>",
            $v_4 = null;
        Xrm.Internal.messages.retrieveMultiple($v_3).then(function($p1_0) {
                $v_4 = $p1_0.entityCollection;
                var $v_5 = false;
                if ($v_4.get_count() > 0) $v_5 = $v_4.get_entities()[0].getValue("istemplate").getValue("value");
                if ($v_5)
                    for (var $v_6 = ["scheduledstart", "scheduledend", "actualstart", "actualend", "ownerid"],
                        $$arr_8 = $v_6,
                        $$len_9 = $$arr_8.length,
                        $$idx_A = 0;
                        $$idx_A < $$len_9;
                        ++$$idx_A) {
                        var $v_7 = $$arr_8[$$idx_A],
                            $v_8 = Xrm.Page.ui.controls.get($v_7),
                            $v_9 = Xrm.Page.getAttribute($v_7);
                        if (!Mscrm.InternalUtilities.JSTypes
                            .isNull($v_8) &&
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_9)) {
                            $v_8.setDisabled(true);
                            $v_9.setValue(null)
                        }
                    }
            },
            function($p1_0) { return })
    }
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.$3 = function() {
    Mscrm.CampaignActivityMainSystemLibraryWebResource.$0("actualstart");
    Mscrm.CampaignActivityMainSystemLibraryWebResource.$0("actualend");
    var $v_0 = Xrm.Page.getAttribute("statuscode");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1 !== 1) {
            var $v_2 = Xrm.Page.ui.controls.get("channeltypecode");
            !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setDisabled(true)
        }
    }
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.$0 = function($p0) {
    var $v_0 = Xrm.Page.ui.controls.get($p0);
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setDisabled(true)
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.$4 = function($p0) {
    var $v_0 = false, $v_1 = false, $v_2 = Xrm.Page.data.entity.getId(), $v_3 = 8;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2)) {
        var $v_4 =
                "<fetch version='1.0' mapping='logical' distinct='true'><entity name='bulkoperation'><attribute name='activityid' /><link-entity name='activityparty' to='activityid' from='activityid' link-type='inner' ><filter type='and'><condition attribute='partyid' operator='eq' value='" + $v_2 + "'/><condition attribute='participationtypemask' operator='eq' value='" + $v_3 + "'/></filter></link-entity><order attribute='activityid' descending='false' /></entity></fetch>",
            $v_5 = null;
        Xrm.Internal.messages.retrieveMultiple($v_4).then(function($p1_0) {
                $v_5 = $p1_0.entityCollection;
                if ($v_5.get_count() > 0) $v_0 = true;
                if ($v_0) $v_1 = true;
                Mscrm.CampaignActivityMainSystemLibraryWebResource.$1($v_1)
            },
            function($p1_0) { return })
    } else Mscrm.CampaignActivityMainSystemLibraryWebResource.$1($v_1)
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.$1 = function($p0) {
    var $v_0 = Xrm.Page.ui.navigation.items.get("navBulkOperationSuccesses");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible($p0);
    var $v_1 = Xrm.Page.ui.navigation.items.get("navBulkOperationFailures");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible($p0)
};
Mscrm.CampaignActivityMainSystemLibraryWebResource.registerClass("Mscrm.CampaignActivityMainSystemLibraryWebResource");
Mscrm.scheduledstart_onchange = Mscrm.CampaignActivityMainSystemLibraryWebResource.scheduledstart_onchange;
Mscrm.actualstart_onchange = Mscrm.CampaignActivityMainSystemLibraryWebResource.actualstart_onchange;
Mscrm.scheduledend_onchange = Mscrm.CampaignActivityMainSystemLibraryWebResource.scheduledend_onchange;
Mscrm.actualend_onchange = Mscrm.CampaignActivityMainSystemLibraryWebResource.actualend_onchange;
Mscrm.regardingobjectid_onchange = Mscrm.CampaignActivityMainSystemLibraryWebResource.regardingobjectid_onchange