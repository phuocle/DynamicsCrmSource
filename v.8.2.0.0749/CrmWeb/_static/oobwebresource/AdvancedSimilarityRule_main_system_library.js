Type.registerNamespace("Mscrm");
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource = function() {};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = function($p1_0) {
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$G();
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$H();
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateEntityPicklist()
    };
    Xrm.Page.data.addOnLoad($v_0);
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$7 = Xrm.Page.ui.getFormType() === 1
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateEntityPicklist = function() {
    Xrm.Internal.messages.getEntitiesForAzureML(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$C)
        .then(function($p1_0) {
                var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p1_0.result);
                Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1.clearOptions();
                Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$6.clearOptions();
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_0["Options"]) &&
                    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$D($v_0);
                var $v_1 = Xrm.Page.getAttribute("entity");
                if (!Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$7) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                        !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
                            .$3) &&
                        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue())) {
                        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1
                            .setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$3[$v_1.getValue()]);
                        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateFilterResultByStatusPicklist()
                    }
                } else {
                    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1
                        .setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$9[0].value);
                    $v_1.setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$4[Mscrm
                        .AdvancedSimilarityRuleMainSystemLibraryWebResource.$1.getValue()]);
                    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateFilterResultByStatusPicklist()
                }
            },
            function($p1_0) {})
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateFilterResultByStatusPicklist = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("sourceentity");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue(), $v_2 = Xrm.Page.getAttribute("filterresultbystatusdisplayname");
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
            .$E(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$8, $v_1);
        if (!Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
            .$7)
            !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_2.getValue()) &&
                Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.setValue($v_2.getValue());
        else {
            Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0
                .setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$5[0].value);
            !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0
                    .getSelectedOption()) &&
                !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0
                    .getSelectedOption().value) &&
                !Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.getSelectedOption()
                    .value
                    .toString()) &&
                $v_2.setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.getSelectedOption().value
                    .toString())
        }
    }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.sourceEntityPicklist_Onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes
            .get("sourceentity"),
        $v_1 = Xrm.Page.data.entity.attributes.get("entity");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_2 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            $v_1.setValue(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$4[$v_2]);
            Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.populateFilterResultByStatusPicklist()
        }
    }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.filterResultByStatusPicklist_Onchange = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0
            .getSelectedOption())) {
            var $v_0 = Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.getSelectedOption().value.toString();
            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) &&
                Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$B.setValue($v_0.toString())
        }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$G = function() {
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$A = Xrm.Page.data.entity.attributes.get("entity");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1 = Xrm.Page.data.entity.attributes.get("sourceentity");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$6 = Xrm.Page.ui.controls.get("sourceentity");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$B = Xrm.Page.data.entity.attributes
        .get("filterresultbystatusdisplayname");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0 = Xrm.Page.data.entity.attributes
        .get("filterresultbystatus");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$2 = Xrm.Page.ui.controls.get("filterresultbystatus");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$A.setSubmitMode("always")
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$D = function($p0) {
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$9 = [];
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$3 = {};
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$4 = {};
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$8 = {};
    var $v_0 = $p0["Options"], $v_1 = Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$F;
    $v_0.sort($v_1);
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2],
            $v_4 = $v_3["EntityPlatformName"],
            $v_5 = $v_3["EntityDisplayName"],
            $v_6 = parseInt($v_3["ObjectTypeCode"]),
            $v_7 = $v_3["StateCodes"],
            $v_8 = new Xrm.OptionSetItem($v_6, $v_5);
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$9[$v_2] = $v_8;
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$3[$v_4] = $v_6;
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$4[$v_6.toString()] = $v_4;
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$8[$v_6.toString()] = $v_7;
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1.addOption($v_8);
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$6.addOption($v_8)
    }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$E = function($p0, $p1) {
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$5 = [];
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.clearOptions();
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$2.clearOptions();
    var $v_0 = new Xrm.OptionSetItem(-1, "");
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$5[0] = $v_0;
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.addOption($v_0);
    Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$2.addOption($v_0);
    for (var $v_1 = $p0[$p1], $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
        var $v_3 = $v_1[$v_2],
            $v_4 = parseInt($v_3["OptionKey"]),
            $v_5 = $v_3["OptionName"],
            $v_6 = new Xrm.OptionSetItem($v_4, $v_5);
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$5[$v_2 + 1] = $v_6;
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0.addOption($v_6);
        Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$2.addOption($v_6)
    }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
    .$F = function($p0, $p1) { return $p0["EntityDisplayName"].localeCompare($p1["EntityDisplayName"]) };
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$H = function() {
    var $v_0 = Xrm.Internal.isFeatureEnabled("FCB.ServiceCaseTopicAnalysis");
    if (!$v_0 || Xrm.Page.context.getUserLcid().toString() !== "1033") {
        var $v_1 = Xrm.Page.data.entity.attributes.get("maxnumberkeyphrases");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setRequiredLevel("none");
        var $v_2 = Xrm.Page.ui.controls.get("isazuremlrequired");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setDisabled(true);
        var $v_3 = Xrm.Page.ui.tabs.get("{67e8b341-a89a-4207-9bcc-4c1f9cc8b89d}"),
            $v_4 = $v_3.getSections(),
            $v_5 = $v_4.get("{89397326-037F-4A43-B362-6B9B04E7917B}");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.setVisible(false);
        var $v_6 = $v_4.get("{29B6CE18-08E1-4B87-B532-B18A6987BBB2}");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6.setVisible(false)
    }
};
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
    .registerClass("Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource");
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$4 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$3 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$8 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$7 = true;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$A = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$1 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$6 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$B = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$0 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$2 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$9 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$5 = null;
Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.$C = '{ "Feature" : "0", "TextAnalyticsSubFeature" : "1"}';
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource.formOnload;
Mscrm.sourceentitypicklist_onchange = Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
    .sourceEntityPicklist_Onchange;
Mscrm.filterresultbystatus_onchange = Mscrm.AdvancedSimilarityRuleMainSystemLibraryWebResource
    .filterResultByStatusPicklist_Onchange