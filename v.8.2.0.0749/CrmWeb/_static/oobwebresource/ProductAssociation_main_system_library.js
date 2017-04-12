Type.registerNamespace("Mscrm");
Mscrm.ProductAssociationMainSystemLibraryWebResource = function() {};
Mscrm.ProductAssociationMainSystemLibraryWebResource
    .associatedproduct_Setadditionalparams = function() {
        if (!Mscrm.ProductAssociationMainSystemLibraryWebResource
            .$0)
            !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("associatedproduct")) &&
                Xrm.Page.ui.controls.get("associatedproduct")
                .setDefaultView(Mscrm.ProductAssociationMainSystemLibraryWebResource.$2)
    };
Mscrm.ProductAssociationMainSystemLibraryWebResource.associatedproduct_Onafterselect = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("associatedproduct");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getValue())) {
        var $v_1 = $v_0.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.length > 0) {
            var $v_2 = ["defaultuomscheduleid"];
            Xrm.Internal.messages.retrieve("product", $v_1[0].id, $v_2).then(function($p1_0) {
                    var $v_3 = $p1_0.entity, $v_4 = $v_3.getValue("defaultuomscheduleid");
                    Mscrm.ProductAssociationMainSystemLibraryWebResource.$1 = $v_4.Id.toString()
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.uomid_Setadditionalparams = function() {
    var $v_0 = Mscrm.ProductAssociationMainSystemLibraryWebResource.$3();
    if ($v_0 !== "")
        if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("uomid"))) {
            var $v_1 = '<filter type="and"><condition attribute="uomscheduleid" operator="like" value="';
            $v_1 += $v_0;
            $v_1 += '"/></filter>';
            Xrm.Page.ui.controls.get("uomid").addCustomFilter($v_1)
        }
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.form_onload = function() {
    var $v_0 = Xrm.Page.ui.getFormType(), $v_1 = Xrm.Page.ui.controls.get("uomid");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && ($v_0 === 1 || $v_0 === 2) && $v_0 !== 4 && $v_1.setDisabled(true);
    Mscrm.ProductAssociationMainSystemLibraryWebResource.$5();
    Mscrm.ProductAssociationMainSystemLibraryWebResource.$4()
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.$5 = function() {
    var $v_0 = Xrm.Page.context.getQueryStringParameters();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_0["_isReadOnly"])) {
        var $v_1 = Xrm.Page.ui.tabs.get("product_association_dynamic_properties"),
            $v_2 = $v_1.sections.get("product_association_dynamic_properties_section");
        $v_1.setVisible(true);
        $v_2.setVisible(true)
    }
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.$4 = function() {
    var $v_0 = null, $v_1 = null, $v_2 = Xrm.Page.data.entity.attributes.get("productid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        $v_0 = $v_2.getValue()[0].name.toString();
        Xrm.Internal.messages.retrieve("product", $v_2.getValue()[0].id, ["productid", "iskit", "productstructure"])
            .then(function($p1_0) {
                    var $v_3 = $p1_0.entity;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
                        var $v_4 = $v_3.getValue("productstructure"), $v_5 = $v_4.get_value();
                        if ($v_3.getValue("iskit").get_value() && $v_5 === 1) {
                            Mscrm.ProductAssociationMainSystemLibraryWebResource.$0 = false;
                            $v_1 = Xrm.Internal.getResourceString("LOCID_KITPRODUCTS_FORM_TITLE")
                        } else if ($v_5 === 3) {
                            Mscrm.ProductAssociationMainSystemLibraryWebResource.$0 = true;
                            $v_1 = Xrm.Internal.getResourceString("LOCID_BUNDLEPRODUCTS_SECTION_NAME")
                        }
                    } else $v_1 = Xrm.Internal.getResourceString("LOCID_BUNDLEPRODUCTS_SECTION_NAME");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
                        Xrm.Internal.setFormEntityName(String.format("{0}: {1}", $v_1, $v_0));
                    if (!Mscrm.ProductAssociationMainSystemLibraryWebResource.$0) {
                        var $v_6 = Xrm.Page.ui.controls.get("productid"),
                            $v_7 = Xrm.Page.data.entity.attributes.get("quantity"),
                            $v_8 = Xrm.Page.data.entity.attributes.get("productisrequired"),
                            $v_9 = Xrm.Page.data.entity.attributes.get("uomid");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                            $v_6.setLabel(Xrm.Internal.getResourceString("LOCID_KITPRODUCT_LABEL_VALUE"));
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_7) && $v_7.setRequiredLevel("none");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.setRequiredLevel("none");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_9) && $v_9.setRequiredLevel("none")
                    }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.associatedproduct_Onchange = function() {
    var $v_0 = "",
        $v_1 = Xrm.Page.data.entity.attributes.get("uomid"),
        $v_2 = Xrm.Page.ui.controls.get("uomid"),
        $v_3 = Xrm.Page.data.entity.attributes.get("associatedproduct");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setValue([]);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) $v_0 = $v_3.getValue();
    var $v_4 = Mscrm.InternalUtilities.JSTypes.isNull($v_0) || !$v_0.length;
    $v_2.setDisabled($v_4)
};
Mscrm.ProductAssociationMainSystemLibraryWebResource.$3 = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.ProductAssociationMainSystemLibraryWebResource.$1)) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("uomscheduleid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = "", $v_2 = $v_0.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.length > 0) $v_1 = $v_2[0].id;
            Mscrm.ProductAssociationMainSystemLibraryWebResource.$1 = $v_1
        }
    }
    return Mscrm.ProductAssociationMainSystemLibraryWebResource.$1
};
Mscrm.ProductAssociationMainSystemLibraryWebResource
    .registerClass("Mscrm.ProductAssociationMainSystemLibraryWebResource");
Mscrm.ProductAssociationMainSystemLibraryWebResource.$1 = null;
Mscrm.ProductAssociationMainSystemLibraryWebResource.$0 = false;
Mscrm.ProductAssociationMainSystemLibraryWebResource.$2 = "18B841EB-8738-4BCB-9A59-AF7F906E73B4";
Type.registerNamespace("Mscrm");
Mscrm.associatedproduct_setadditionalparams = Mscrm.ProductAssociationMainSystemLibraryWebResource
    .associatedproduct_Setadditionalparams;
Mscrm.associatedproduct_onafterselect = Mscrm.ProductAssociationMainSystemLibraryWebResource
    .associatedproduct_Onafterselect;
Mscrm.uomid_setadditionalparams = Mscrm.ProductAssociationMainSystemLibraryWebResource.uomid_Setadditionalparams;
Mscrm.Form_onload = Mscrm.ProductAssociationMainSystemLibraryWebResource.form_onload;
Mscrm.associatedproduct_onchange = Mscrm.ProductAssociationMainSystemLibraryWebResource.associatedproduct_Onchange