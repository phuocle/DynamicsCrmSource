Type.registerNamespace("Mscrm");
Mscrm.KnowledgeSearchMainSystemLibraryWebResource = function() {};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.formOnload = function() {
    var $v_0 = function($p1_0) {
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$9();
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.populateEntityPicklist()
    };
    Xrm.Page.data.addOnLoad($v_0);
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$6 = Xrm.Page.ui.getFormType() === 1
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.populateEntityPicklist = function() {
    Xrm.Internal.messages.getEntitiesForAzureML('{"Feature":"0"}').then(function($p1_0) {
            var $v_0 = Sys.Serialization.JavaScriptSerializer.deserialize($p1_0.result);
            Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0.clearOptions();
            Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$3.clearOptions();
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0["Options"]) &&
                Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$7($v_0);
            var $v_1 = Xrm.Page.getAttribute("entity");
            if (!Mscrm.KnowledgeSearchMainSystemLibraryWebResource
                .$6)
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$1) &&
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_1.getValue()) &&
                    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0
                    .setValue(Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$1[$v_1.getValue()]);
            else {
                Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0
                    .setValue(Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$4[0].value);
                $v_1.setValue(Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$2[Mscrm
                    .KnowledgeSearchMainSystemLibraryWebResource.$0.getValue()])
            }
        },
        function($p1_0) {})
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.sourceEntityPicklist_Onchange = function() {
    var $v_0 = Xrm.Page.data.entity.attributes
            .get("sourceentity"),
        $v_1 = Xrm.Page.data.entity.attributes.get("entity");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_2 = $v_0.getValue();
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
            $v_1.setValue(Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$2[$v_2])
    }
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$9 = function() {
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$5 = Xrm.Page.data.entity.attributes.get("entity");
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0 = Xrm.Page.data.entity.attributes.get("sourceentity");
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$3 = Xrm.Page.ui.controls.get("sourceentity");
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$5.setSubmitMode("always")
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$7 = function($p0) {
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$4 = [];
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$1 = {};
    Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$2 = {};
    var $v_0 = $p0["Options"], $v_1 = Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$8;
    $v_0.sort($v_1);
    for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
        var $v_3 = $v_0[$v_2],
            $v_4 = $v_3["EntityPlatformName"],
            $v_5 = $v_3["EntityDisplayName"],
            $v_6 = parseInt($v_3["ObjectTypeCode"]),
            $v_7 = new Xrm.OptionSetItem($v_6, $v_5);
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$4[$v_2] = $v_7;
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$1[$v_4] = $v_6;
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$2[$v_6.toString()] = $v_4;
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0.addOption($v_7);
        Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$3.addOption($v_7)
    }
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$8 = function($p0, $p1) {
    return $p0["EntityDisplayName"].localeCompare($p1["EntityDisplayName"])
};
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.registerClass("Mscrm.KnowledgeSearchMainSystemLibraryWebResource");
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$2 = null;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$1 = null;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$6 = true;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$5 = null;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$0 = null;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$3 = null;
Mscrm.KnowledgeSearchMainSystemLibraryWebResource.$4 = null;
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.KnowledgeSearchMainSystemLibraryWebResource.formOnload;
Mscrm.sourceentitypicklist_onchange = Mscrm.KnowledgeSearchMainSystemLibraryWebResource.sourceEntityPicklist_Onchange