Type.registerNamespace("Mscrm");
Mscrm.RecommendationMapMainSystemLibraryWebResource = function() {};
Mscrm.RecommendationMapMainSystemLibraryWebResource.entityPicklistOnchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("entitypicklist"),
        $v_1 = Xrm.Page.data.entity.attributes.get("entity");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            $v_1.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$0[$v_2]);
            Mscrm.RecommendationMapMainSystemLibraryWebResource
                .populateAccountFieldPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource.$0[$v_2]);
            Mscrm.RecommendationMapMainSystemLibraryWebResource
                .populateProductLineItemRelationshipPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource
                    .$0[$v_2])
        }
    }
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.accountFieldPicklistOnchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("accountfieldpicklist"),
        $v_1 = Xrm.Page.data.entity.attributes.get("accountfield");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_0.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            $v_1.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$4[$v_2])
    }
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.productLineItemRelationshipPicklistOnchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("productlineitemrelationshippicklist"),
        $v_1 = Xrm.Page.data.entity.attributes.get("productlineitemrelationship");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            $v_1.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$7[$v_2]);
            Mscrm.RecommendationMapMainSystemLibraryWebResource
                .populateProductFieldPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource.$A[$v_2])
        }
    }
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.productFieldPicklistOnchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("productfieldpicklist"),
        $v_1 = Xrm.Page.data.entity.attributes.get("productfield");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = $v_0.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            $v_1.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$5[$v_2])
    }
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.$D = function($p0, $p1, $p2, $p3, $p4, $p5) {
    $p4.val = Xrm.Page.data.entity.attributes.get($p1);
    $p5.val = Xrm.Page.ui.controls.get($p1);
    $p4.val.setSubmitMode("never");
    $p4.val.clearOptions();
    $p5.val.clearOptions();
    $p2.val = {};
    $p3.val = {};
    return Sys.Serialization.JavaScriptSerializer.deserialize($p0.result)
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.$E = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = $p0[$p1], $v_1 = $v_0[$p2], $v_2 = $v_0[$p3], $v_3 = new Xrm.OptionSetItem($p1, $v_2);
    $p4[$p1] = $v_3;
    $p8.val[$v_1] = $p1;
    $p7.val[$p1.toString()] = $v_1;
    $p5.addOption($v_3);
    $p6.addOption($v_3)
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.populateEntityPicklist = function() {
    var $v_0 = "";
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$2 = Xrm.Page.ui.getFormType() === 1;
    var $v_1 = Xrm.Page.context.getQueryStringParameters();
    if ("mappingtype" in $v_1) $v_0 = $v_1["mappingtype"].toString();
    var $v_2 = String.format('{{"Feature":"1","EntityMappingType":"{0}","IsCreate":"{1}"}}',
        $v_0,
        Mscrm.RecommendationMapMainSystemLibraryWebResource.$2);
    Xrm.Internal.messages.getEntitiesForAzureML($v_2).then(function($p1_0) {
            var $v_3,
                $v_4,
                $$t_D,
                $$t_E,
                $$t_F,
                $$t_G,
                $$t_H,
                $$t_I,
                $$t_J,
                $v_5 = ($$t_J = Mscrm.RecommendationMapMainSystemLibraryWebResource
                    .$D($p1_0,
                        "entitypicklist",
                        $$t_E = { val: ($$t_D = Mscrm.RecommendationMapMainSystemLibraryWebResource).$0 },
                        $$t_G = { val: ($$t_F = Mscrm.RecommendationMapMainSystemLibraryWebResource).$1 },
                        $$t_H = { val: $v_3 },
                        $$t_I = { val: $v_4 }), $$t_D.$0 = $$t_E.val, $$t_F.$1 = $$t_G.val, $v_3 = $$t_H
                    .val, $v_4 = $$t_I
                    .val, $$t_J),
                $v_6 = [];
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_5["Options"])) {
                var $v_8 = $v_5["Options"];
                Mscrm.RecommendationMapMainSystemLibraryWebResource.$3 = "EntityDisplayName";
                var $v_9 = Mscrm.RecommendationMapMainSystemLibraryWebResource.$C;
                $v_8.sort($v_9);
                for (var $v_A = 0; $v_A < $v_8.length; $v_A++) {
                    var $$t_K, $$t_L, $$t_M, $$t_N;
                    Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .$E($v_8,
                            $v_A,
                            "EntityLogicalName",
                            "EntityDisplayName",
                            $v_6,
                            $v_3,
                            $v_4,
                            $$t_L = { val: ($$t_K = Mscrm.RecommendationMapMainSystemLibraryWebResource).$0 },
                            $$t_N = { val: ($$t_M = Mscrm.RecommendationMapMainSystemLibraryWebResource).$1 }), $$t_K
                        .$0 = $$t_L.val, $$t_M.$1 = $$t_N.val
                }
            }
            var $v_7 = Xrm.Page.getAttribute("entity");
            if (!Mscrm.RecommendationMapMainSystemLibraryWebResource.$2) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.RecommendationMapMainSystemLibraryWebResource.$1) &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_7.getValue())) {
                    $v_3.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$1[$v_7.getValue()]);
                    Mscrm.RecommendationMapMainSystemLibraryWebResource.populateAccountFieldPicklist($v_7.getValue());
                    Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .populateProductLineItemRelationshipPicklist($v_7.getValue())
                }
            } else {
                if ($v_6.length > 0) {
                    $v_3.setValue($v_6[0].value);
                    $v_7.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$0[$v_3.getValue()])
                }
                Mscrm.RecommendationMapMainSystemLibraryWebResource
                    .populateAccountFieldPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource.$0[$v_3
                        .getValue()]);
                Mscrm.RecommendationMapMainSystemLibraryWebResource
                    .populateProductLineItemRelationshipPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .$0[$v_3
                            .getValue()])
            }
        },
        function($p1_0) {})
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.populateAccountFieldPicklist = function(entityName) {
    Xrm.Internal.messages.getFieldListForAzureML(entityName, '{"Feature":"1","LookupType":"account"}')
        .then(function($p1_0) {
                var $v_0,
                    $v_1,
                    $$t_B,
                    $$t_C,
                    $$t_D,
                    $$t_E,
                    $$t_F,
                    $$t_G,
                    $$t_H,
                    $v_2 = ($$t_H = Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .$D($p1_0,
                            "accountfieldpicklist",
                            $$t_C = { val: ($$t_B = Mscrm.RecommendationMapMainSystemLibraryWebResource).$4 },
                            $$t_E = { val: ($$t_D = Mscrm.RecommendationMapMainSystemLibraryWebResource).$8 },
                            $$t_F = { val: $v_0 },
                            $$t_G = { val: $v_1 }), $$t_B.$4 = $$t_C.val, $$t_D.$8 = $$t_E.val, $v_0 = $$t_F
                        .val, $v_1 = $$t_G.val, $$t_H),
                    $v_3 = [];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_2["Options"])) {
                    var $v_4 = $v_2["Options"];
                    Mscrm.RecommendationMapMainSystemLibraryWebResource.$3 = "AttributeDisplayName";
                    var $v_5 = Mscrm.RecommendationMapMainSystemLibraryWebResource.$C;
                    $v_4.sort($v_5);
                    for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                        var $$t_I, $$t_J, $$t_K, $$t_L;
                        Mscrm.RecommendationMapMainSystemLibraryWebResource
                            .$E($v_4,
                                $v_7,
                                "AttributeLogicalName",
                                "AttributeDisplayName",
                                $v_3,
                                $v_0,
                                $v_1,
                                $$t_J = { val: ($$t_I = Mscrm.RecommendationMapMainSystemLibraryWebResource).$4 },
                                $$t_L = { val: ($$t_K = Mscrm.RecommendationMapMainSystemLibraryWebResource).$8 }),
                        $$t_I
                            .$4 = $$t_J.val, $$t_K.$8 = $$t_L.val
                    }
                    var $v_6 = Xrm.Page.getAttribute("accountfield");
                    if ($v_4.length > 0)
                        if (!Mscrm.RecommendationMapMainSystemLibraryWebResource
                            .$2)
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                                !Mscrm.InternalUtilities.JSTypes
                                .isNull(Mscrm.RecommendationMapMainSystemLibraryWebResource.$1) &&
                                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_6.getValue()) &&
                                $v_0.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$8[$v_6.getValue()]);
                        else {
                            $v_0.setValue($v_3[0].value);
                            $v_6.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$4[$v_0.getValue()])
                        }
                }
            },
            function($p1_0) {})
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.populateProductLineItemRelationshipPicklist = function(entityName) {
    var $v_0 = String.format('{{"Feature":"1","EntityMappingType":"{0}","IsCreate":"{1}"}}', "", "");
    Xrm.Internal.messages.getRelationshipsForAzureML(entityName, $v_0).then(function($p1_0) {
            var $v_1,
                $v_2,
                $$t_E,
                $$t_F,
                $$t_G,
                $$t_H,
                $$t_I,
                $$t_J,
                $$t_K,
                $v_3 = ($$t_K = Mscrm.RecommendationMapMainSystemLibraryWebResource
                    .$D($p1_0,
                        "productlineitemrelationshippicklist",
                        $$t_F = { val: ($$t_E = Mscrm.RecommendationMapMainSystemLibraryWebResource).$7 },
                        $$t_H = { val: ($$t_G = Mscrm.RecommendationMapMainSystemLibraryWebResource).$6 },
                        $$t_I = { val: $v_1 },
                        $$t_J = { val: $v_2 }), $$t_E.$7 = $$t_F.val, $$t_G.$6 = $$t_H.val, $v_1 = $$t_I
                    .val, $v_2 = $$t_J
                    .val, $$t_K),
                $v_4 = [];
            Mscrm.RecommendationMapMainSystemLibraryWebResource.$A = {};
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_3["Options"])) {
                var $v_5 = $v_3["Options"];
                Mscrm.RecommendationMapMainSystemLibraryWebResource.$3 = "RelationshipDisplayName";
                var $v_6 = Mscrm.RecommendationMapMainSystemLibraryWebResource.$C;
                $v_5.sort($v_6);
                for (var $v_8 = 0; $v_8 < $v_5.length; $v_8++) {
                    var $$t_L, $$t_M, $$t_N, $$t_O;
                    Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .$E($v_5,
                            $v_8,
                            "RelationshipLogicalName",
                            "RelationshipDisplayName",
                            $v_4,
                            $v_1,
                            $v_2,
                            $$t_M = { val: ($$t_L = Mscrm.RecommendationMapMainSystemLibraryWebResource).$7 },
                            $$t_O = { val: ($$t_N = Mscrm.RecommendationMapMainSystemLibraryWebResource).$6 }), $$t_L
                        .$7 = $$t_M.val, $$t_N.$6 = $$t_O.val;
                    var $v_9 = $v_5[$v_8], $v_A = $v_9["EntityLogicalName"];
                    Mscrm.RecommendationMapMainSystemLibraryWebResource.$A[$v_8.toString()] = $v_A
                }
                var $v_7 = Xrm.Page.getAttribute("productlineitemrelationship");
                if ($v_5.length > 0)
                    if (!Mscrm.RecommendationMapMainSystemLibraryWebResource.$2) {
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) &&
                            !Mscrm.InternalUtilities.JSTypes
                            .isNull(Mscrm.RecommendationMapMainSystemLibraryWebResource.$1) &&
                            !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_7.getValue())) {
                            $v_1.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$6[$v_7.getValue()]);
                            Mscrm.RecommendationMapMainSystemLibraryWebResource
                                .populateProductFieldPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource
                                    .$A[Mscrm
                                        .RecommendationMapMainSystemLibraryWebResource.$6[$v_7.getValue()]])
                        }
                    } else {
                        $v_1.setValue($v_4[0].value);
                        $v_7.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$7[$v_1.getValue()]);
                        Mscrm.RecommendationMapMainSystemLibraryWebResource
                            .populateProductFieldPicklist(Mscrm.RecommendationMapMainSystemLibraryWebResource.$A[$v_1
                                .getValue()])
                    }
            }
        },
        function($p1_0) {})
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.populateProductFieldPicklist = function(entityName) {
    Xrm.Internal.messages.getFieldListForAzureML(entityName, '{"Feature":"1","LookupType":"product"}')
        .then(function($p1_0) {
                var $v_0,
                    $v_1,
                    $$t_B,
                    $$t_C,
                    $$t_D,
                    $$t_E,
                    $$t_F,
                    $$t_G,
                    $$t_H,
                    $v_2 = ($$t_H = Mscrm.RecommendationMapMainSystemLibraryWebResource
                        .$D($p1_0,
                            "productfieldpicklist",
                            $$t_C = { val: ($$t_B = Mscrm.RecommendationMapMainSystemLibraryWebResource).$5 },
                            $$t_E = { val: ($$t_D = Mscrm.RecommendationMapMainSystemLibraryWebResource).$9 },
                            $$t_F = { val: $v_0 },
                            $$t_G = { val: $v_1 }), $$t_B.$5 = $$t_C.val, $$t_D.$9 = $$t_E.val, $v_0 = $$t_F
                        .val, $v_1 = $$t_G.val, $$t_H),
                    $v_3 = [];
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_2["Options"])) {
                    var $v_4 = $v_2["Options"];
                    Mscrm.RecommendationMapMainSystemLibraryWebResource.$3 = "AttributeDisplayName";
                    var $v_5 = Mscrm.RecommendationMapMainSystemLibraryWebResource.$C;
                    $v_4.sort($v_5);
                    for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++) {
                        var $$t_I, $$t_J, $$t_K, $$t_L;
                        Mscrm.RecommendationMapMainSystemLibraryWebResource
                            .$E($v_4,
                                $v_7,
                                "AttributeLogicalName",
                                "AttributeDisplayName",
                                $v_3,
                                $v_0,
                                $v_1,
                                $$t_J = { val: ($$t_I = Mscrm.RecommendationMapMainSystemLibraryWebResource).$5 },
                                $$t_L = { val: ($$t_K = Mscrm.RecommendationMapMainSystemLibraryWebResource).$9 }),
                        $$t_I
                            .$5 = $$t_J.val, $$t_K.$9 = $$t_L.val
                    }
                    var $v_6 = Xrm.Page.getAttribute("productfield");
                    if ($v_4.length > 0)
                        if (!Mscrm.RecommendationMapMainSystemLibraryWebResource
                            .$2)
                            !Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                                !Mscrm.InternalUtilities.JSTypes
                                .isNull(Mscrm.RecommendationMapMainSystemLibraryWebResource.$1) &&
                                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_6.getValue()) &&
                                $v_0.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$9[$v_6.getValue()]);
                        else {
                            $v_0.setValue($v_3[0].value);
                            $v_6.setValue(Mscrm.RecommendationMapMainSystemLibraryWebResource.$5[$v_0.getValue()])
                        }
                }
            },
            function($p1_0) {})
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = function($p1_0) {
        Mscrm.RecommendationMapMainSystemLibraryWebResource.$F();
        Mscrm.RecommendationMapMainSystemLibraryWebResource.populateEntityPicklist()
    };
    Xrm.Page.data.addOnLoad($v_0);
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$2 = Xrm.Page.ui.getFormType() === 1
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.$C = function($p0, $p1) {
    return $p0[Mscrm.RecommendationMapMainSystemLibraryWebResource.$3]
        .localeCompare($p1[Mscrm.RecommendationMapMainSystemLibraryWebResource.$3])
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.$F = function() {
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$B("accountfieldpicklist");
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$B("productlineitemrelationshippicklist");
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$B("productfieldpicklist");
    Mscrm.RecommendationMapMainSystemLibraryWebResource.$B("entitypicklist")
};
Mscrm.RecommendationMapMainSystemLibraryWebResource.$B = function($p0) {
    var $v_0 = Xrm.Page.data.entity.attributes.get($p0), $v_1 = Xrm.Page.ui.controls.get($p0);
    $v_0.clearOptions();
    $v_1.clearOptions()
};
Mscrm.RecommendationMapMainSystemLibraryWebResource
    .registerClass("Mscrm.RecommendationMapMainSystemLibraryWebResource");
Mscrm.RecommendationMapMainSystemLibraryWebResource.$0 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$1 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$4 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$8 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$7 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$6 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$A = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$5 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$9 = null;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$2 = true;
Mscrm.RecommendationMapMainSystemLibraryWebResource.$3 = null;
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.RecommendationMapMainSystemLibraryWebResource.formOnload