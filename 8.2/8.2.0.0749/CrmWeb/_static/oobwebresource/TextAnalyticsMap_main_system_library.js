Type.registerNamespace("Mscrm");
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource = function() {};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = function($p1_0) {
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$N();
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$Q();
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource
            .populateEntityPicklist(JSON.stringify(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2))
    };
    Xrm.Page.data.addOnLoad($v_0);
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$6 = Xrm.Page.ui.getFormType() === 1
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.populateEntityPicklist = function(filter) {
    if (Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$6) {
        var $v_0 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$M();
        !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0) &&
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$G($v_0, filter)
    } else Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$O()
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.populateFieldPicklist = function(entityName) {
    Xrm.Internal.messages.getFieldListForAzureML(entityName,
        JSON.stringify(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2)).then(function($p1_0) {
            var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p1_0.result);
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0["Options"]) &&
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$J($v_0);
            var $v_1 = Xrm.Page.getAttribute("field");
            if (!Mscrm.TextAnalyticsMapMainSystemLibraryWebResource
                .$6)
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$A) &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue()) &&
                    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$A[$v_1.getValue()]);
            else {
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$C[0].value);
                $v_1.setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$B[Mscrm
                    .TextAnalyticsMapMainSystemLibraryWebResource.$0.getValue()]);
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$9
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$C[0].text)
            }
        },
        function($p1_0) {})
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.entitypicklist_onchange = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1
                .getSelectedOption()) &&
            !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1
                .getSelectedOption().value)) {
            var $v_0 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3[Mscrm
                .TextAnalyticsMapMainSystemLibraryWebResource.$1.getSelectedOption().value];
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5.setValue($v_0.entityPlatformName);
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$8.setValue($v_0.entityDisplayName);
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4.setValue($v_0.relationshipLogicalName);
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.populateFieldPicklist($v_0.entityPlatformName)
        }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.fieldpicklist_onchange = function() {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0
            .getSelectedOption())) {
            var $v_0 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0.getSelectedOption().value.toString();
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) {
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$E
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$B[$v_0]);
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$9
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0.getSelectedOption().text)
            }
        }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.istextmatchpicklist_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("istextmatchmapping");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getSelectedOption())) {
            var $v_1 = $v_0.getSelectedOption().value.toString();
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1)) {
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2["MappingType"] = $v_1;
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource
                    .populateEntityPicklist(JSON.stringify(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2))
            }
        }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$I = function($p0) {
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3 = [];
    var $v_0 = $p0["Options"], $v_1 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$K;
    $v_0.sort($v_1);
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2], $v_4 = new Mscrm.RelationshipDetails;
        $v_4.entityPlatformName = $v_3["EntityPlatformName"];
        $v_4.entityDisplayName = $v_3["EntityDisplayName"];
        $v_4.relationshipLogicalName = $v_3["RelationshipLogicalName"];
        $v_4.relationshipDisplayName = $v_3["RelationshipDisplayName"];
        var $v_5 = new Xrm.OptionSetItem($v_2, $v_4.entityDisplayName);
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3[$v_2] = $v_4;
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1.addOption($v_5);
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$D.addOption($v_5);
        if (!Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$6)
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5.getValue()))
                if (Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5.getValue().toUpperCase() ===
                    $v_4.entityPlatformName.toUpperCase())
                    if (!Mscrm.InternalUtilities.JSTypes
                        .isNullOrEmptyString(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4.getValue())) {
                        if (Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4.getValue().toUpperCase() ===
                            $v_4.relationshipLogicalName
                            .toUpperCase()) Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$7 = $v_2
                    } else Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$7 = $v_2
    }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$J = function($p0) {
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0.clearOptions();
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$F.clearOptions();
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$C = [];
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$B = {};
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$A = {};
    var $v_0 = $p0["Options"], $v_1 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$L;
    $v_0.sort($v_1);
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2],
            $v_4 = $v_3["AttributeLogicalName"],
            $v_5 = $v_3["AttributeDisplayName"],
            $v_6 = new Xrm.OptionSetItem($v_2, $v_5);
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$C[$v_2] = $v_6;
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$A[$v_4] = $v_2;
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$B[$v_2.toString()] = $v_4;
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0.addOption($v_6);
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$F.addOption($v_6)
    }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$Q = function() {
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1.setRequiredLevel("required");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0.setRequiredLevel("required")
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$G = function($p0, $p1) {
    Xrm.Internal.messages.getRelationshipsForAzureML($p0, $p1).then(function($p1_0) {
            var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p1_0.result);
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1.clearOptions();
            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$D.clearOptions();
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0["Options"]) &&
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$I($v_0);
            var $v_1 = Xrm.Page.getAttribute("entity");
            if (!Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$6) {
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3.length > 0 &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue())) {
                    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1
                        .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$7);
                    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4
                        .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3[Mscrm
                            .TextAnalyticsMapMainSystemLibraryWebResource.$7].relationshipLogicalName);
                    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.populateFieldPicklist($v_1.getValue())
                }
            } else {
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1.setValue(0);
                var $v_2 = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3[0];
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4.setValue($v_2.relationshipLogicalName);
                $v_1.setValue($v_2.entityPlatformName);
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$8
                    .setValue(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3[Mscrm
                        .TextAnalyticsMapMainSystemLibraryWebResource.$7].entityDisplayName);
                Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.populateFieldPicklist($v_2.entityPlatformName)
            }
        },
        function($p1_0) {})
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$M = function() {
    var $v_0 = 112, $v_1 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1["SourceEntity_Type"])) $v_0 = $v_1["SourceEntity_Type"];
    var $v_2 = Xrm.Internal.getEntityName(parseInt($v_0));
    return $v_2
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$O = function() {
    var $v_0 = "Incident", $v_1 = null, $v_2 = Xrm.Page.data.entity.attributes.get("knowledgesearchmodelid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_3 = $v_2.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) && $v_3.length > 0) {
            $v_1 = $v_3[0].id;
            Xrm.Internal.messages.retrieve("knowledgesearchmodel", $v_1, ["entity"]).then(function($p1_0) {
                    var $v_4 = $p1_0.entity;
                    if ($v_4.hasValue("entity"))
                        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue("entity"))) {
                            $v_0 = $v_4.getValue("entity").toString();
                            Mscrm.TextAnalyticsMapMainSystemLibraryWebResource
                                .$G($v_0, JSON.stringify(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2))
                        }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    } else
        Mscrm.TextAnalyticsMapMainSystemLibraryWebResource
            .$G($v_0, JSON.stringify(Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2))
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$N = function() {
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5 = Xrm.Page.data.entity.attributes.get("entity");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$8 = Xrm.Page.data.entity.attributes.get("entitydisplayname");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$E = Xrm.Page.data.entity.attributes.get("field");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$9 = Xrm.Page.data.entity.attributes.get("fielddisplayname");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4 = Xrm.Page.data.entity.attributes.get("relationshipname");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1 = Xrm.Page.data.entity.attributes.get("entitypicklist");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$D = Xrm.Page.ui.controls.get("entitypicklist");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0 = Xrm.Page.data.entity.attributes.get("fieldpicklist");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$F = Xrm.Page.ui.controls.get("fieldpicklist");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5.setSubmitMode("always");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$E.setSubmitMode("always");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$9.setSubmitMode("always");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$8.setSubmitMode("always");
    Xrm.Page.getAttribute("relationshipname").setSubmitMode("always");
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$P();
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2 = {};
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2["Feature"] = "0";
    Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2["IsSimilaritySearch"] = Mscrm
        .TextAnalyticsMapMainSystemLibraryWebResource.$H()
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$K = function($p0, $p1) {
    return $p0["EntityDisplayName"].localeCompare($p1["EntityDisplayName"])
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$L = function($p0, $p1) {
    return $p0["AttributeDisplayName"].localeCompare($p1["AttributeDisplayName"])
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$P = function() {
    if (Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$H()) {
        var $v_0 = Xrm.Page.ui.controls.get("istextmatchmapping");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible(true)
    }
};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$H = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0["_CreateFromType"])) {
            var $v_1 = parseInt($v_0["_CreateFromType"]);
            return $v_1 === 9949
        }
    return false
};
Mscrm.RelationshipDetails = function() {};
Mscrm.RelationshipDetails.prototype = {
    entityPlatformName: null,
    entityDisplayName: null,
    relationshipLogicalName: null,
    relationshipDisplayName: null
};
Mscrm.RelationshipDetailsConstants = function() {};
Mscrm.FilterConstants = function() {};
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.registerClass("Mscrm.TextAnalyticsMapMainSystemLibraryWebResource");
Mscrm.RelationshipDetails.registerClass("Mscrm.RelationshipDetails");
Mscrm.RelationshipDetailsConstants.registerClass("Mscrm.RelationshipDetailsConstants");
Mscrm.FilterConstants.registerClass("Mscrm.FilterConstants");
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$B = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$A = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$6 = true;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$7 = 0;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$5 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$E = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$1 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$D = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$3 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$C = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$0 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$F = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$4 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$8 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$9 = null;
Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.$2 = null;
Mscrm.RelationshipDetailsConstants.options = "Options";
Mscrm.RelationshipDetailsConstants.entityPlatformName = "EntityPlatformName";
Mscrm.RelationshipDetailsConstants.entityDisplayName = "EntityDisplayName";
Mscrm.RelationshipDetailsConstants.relationshipLogicalName = "RelationshipLogicalName";
Mscrm.RelationshipDetailsConstants.relationshipDisplayName = "RelationshipDisplayName";
Mscrm.RelationshipDetailsConstants.attributeLogicalName = "AttributeLogicalName";
Mscrm.RelationshipDetailsConstants.attributeDisplayName = "AttributeDisplayName";
Mscrm.RelationshipDetailsConstants.entity = "entity";
Mscrm.RelationshipDetailsConstants.field = "field";
Mscrm.RelationshipDetailsConstants.relatedField = "relationshipname";
Mscrm.RelationshipDetailsConstants.entityPicklist = "entitypicklist";
Mscrm.RelationshipDetailsConstants.fieldPicklist = "fieldpicklist";
Mscrm.RelationshipDetailsConstants.entityDisplayNameAttribute = "entitydisplayname";
Mscrm.RelationshipDetailsConstants.fieldDisplayNameAttribute = "fielddisplayname";
Mscrm.RelationshipDetailsConstants.knowledgeSearchModeld = "knowledgesearchmodelid";
Mscrm.RelationshipDetailsConstants.isTextMatchMapping = "istextmatchmapping";
Mscrm.RelationshipDetailsConstants.advancedSimilarityRuleOtc = 9949;
Mscrm.FilterConstants.feature = "Feature";
Mscrm.FilterConstants.mappingType = "MappingType";
Mscrm.FilterConstants.isSimilaritySearch = "IsSimilaritySearch";
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.formOnload;
Mscrm.entitypicklist_onchange = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.entitypicklist_onchange;
Mscrm.fieldpicklist_onchange = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.fieldpicklist_onchange;
Mscrm.istextmatchpicklist_onchange = Mscrm.TextAnalyticsMapMainSystemLibraryWebResource.istextmatchpicklist_onchange