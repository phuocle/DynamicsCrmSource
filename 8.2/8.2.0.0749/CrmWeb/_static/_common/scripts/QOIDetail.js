Type.registerNamespace("Mscrm");
Mscrm.QoiDetail = function() {};
Mscrm.QoiDetail.setAdditionalParametersForUom = function(objectTypeCode, headerId) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(headerId)) {
        var $v_0 = Xrm.Page.ui.controls.get("uomid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            var $v_1 = Xrm.Page.ui.controls.get("productid").getAttribute(), $v_2 = $v_1.getValue();
            $v_0.setParameter("ObjectTypeCode", objectTypeCode.toString());
            $v_0.setParameter("ObjectId", headerId);
            $v_0.setParameter("ProductId", $v_2[0].id)
        }
    }
};
Mscrm.QoiDetail.setAdditionalParametersForProduct = function(viewGuid, entityName, entityId) {
    var $v_0 = "Products in Parent Price List updated",
        $v_1 =
            "<fetch version='1.0' mapping='logical' distinct='true'><entity name='product'><attribute name='name' /><attribute name='price' /><attribute name='defaultuomid' /><attribute name='productnumber' /><attribute name='productid' /><filter type='or'><condition attribute='statecode' operator='eq' value='0' /><condition attribute='statecode' operator='eq' value='3' /></filter><order attribute='name' descending='false' /><link-entity name='productpricelevel' from='productid' to='productid'><attribute name='productid' /><link-entity name='" + entityName + "' from='pricelevelid' to='pricelevelid'><filter><condition attribute='" + entityName + "id' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(entityId) + "' /></filter></link-entity></link-entity></entity></fetch>",
        $v_2 =
            "<grid name='resultset' object='1024' jump='name' select='1' preview='0' icon='1'><row name='result' id='productid'><cell name='name' width='200' /><cell name='price' width='100' /><cell name='defaultuomid' width='100' /><cell name='productnumber' width='100' /></row></grid>",
        $v_3 = Xrm.Page.ui.controls.get("productid");
    $v_3.addCustomView(viewGuid, "product", $v_0, $v_1, $v_2, true)
};
Mscrm.QoiDetail.setAdditionalParamsForUomId = function(context, entityName, entityId, primaryFieldName) {
    var $v_0 = null, $v_1 = Xrm.Page.getAttribute("productid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_0 = $v_1.getValue();
    var $v_2 = "{1D3425F1-4EEF-4CCD-A34A-9F50318EA0C1}",
        $v_3 = "Unit Group Units By Product Price Level updated",
        $v_4 =
            "<fetch version='1.0' mapping='logical'><entity name='uom'><attribute name='name' /><attribute name='uomid' /><link-entity name='productpricelevel' from='uomid' to='uomid'><link-entity name='" + entityName + "' from='pricelevelid' to='pricelevelid'><filter><condition attribute='" + primaryFieldName + "' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(entityId) + "' /></filter></link-entity><link-entity name='product' from='productid' to='productid'><filter><condition attribute='productid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_0[0].id) + "' /></filter></link-entity></link-entity></entity></fetch>",
        $v_5 =
            "<grid name='resultset' object='1055' jump='name' select='1' preview='0' icon='1'><row name='result' id='uomid'><cell name='name' width='300' /></row></grid>",
        $v_6 = Xrm.Page.ui.controls.get("uomid");
    $v_6.addCustomView($v_2, "uom", $v_3, $v_4, $v_5, true)
};
Mscrm.QoiDetail.initializeFields = function(headerEntityName,
    headerId,
    detailEntityName,
    setAdditionalParamsCallback,
    primaryFieldName) {
    Mscrm.CommandBarActions.initializeCachedProperties();
    if (Xrm.Page.ui.getFormType() !== 3 && Xrm.Page.ui.getFormType() !== 4) {
        var $v_0 = Xrm.Page.data.entity.attributes.get("quantity"), $v_1 = 0;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            $v_1 = $v_0.getValue();
            Mscrm.CommandBarActions.defaultQuantityAccuracy = $v_0.getPrecision()
        }
        Mscrm.CommandBarActions.enableDisableShippingAddress();
        var $v_2 = Xrm.Page.data.entity.attributes.get("productid");
        if (Mscrm.InternalUtilities.JSTypes
            .isNull($v_2) ||
            Mscrm.InternalUtilities.JSTypes.isNull($v_2
                .getValue()))
            Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
        else Mscrm.QoiDetail.$3(headerEntityName, headerId);
        Mscrm.CommandBarActions.isPricingLocked(headerEntityName,
            headerId,
            function($p1_0) {
                if ($p1_0) {
                    var $v_3 = Xrm.Page.ui.getFormType();
                    $v_3 !== 1 && Mscrm.CommandBarActions.setDisabled("productid", true);
                    Mscrm.CommandBarActions.setDisabled("uomid", true);
                    Mscrm.CommandBarActions.setDisabled("isproductoverridden", true);
                    Mscrm.CommandBarActions.setDisabled("productdescription", true);
                    Mscrm.CommandBarActions.setDisabled("ispriceoverridden", true);
                    Mscrm.CommandBarActions.setDisabled("priceperunit", true);
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setRequiredLevel("required");
                    var $v_4 = Xrm.Page.data.entity.attributes.get("uomid");
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_4) && $v_4.setRequiredLevel("required")
                } else {
                    Mscrm.CommandBarActions.setPrevDataValueIfAttributeNotNull("ispriceoverridden");
                    Mscrm.CommandBarActions.setPrevDataValueIfAttributeNotNull("productid");
                    Mscrm.CommandBarActions.setPrevDataValueIfAttributeNotNull("uomid");
                    Mscrm.CommandBarActions.setPrevDataValueIfAttributeNotNull("productdescription");
                    Mscrm.CommandBarActions.productOverriddenHandler();
                    if (!Xrm.Internal.canOverridePriceEngine(detailEntityName)) {
                        Mscrm.CommandBarActions.setDisabled("isproductoverridden", true);
                        Mscrm.CommandBarActions.setDisabled("ispriceoverridden", true)
                    }
                }
            });
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.getIsDirty()) {
            var $v_5 = parseInt($v_0.getValue().toString(), $v_0.getPrecision()),
                $v_6 = Xrm.Internal.getResourceString("LOCID_QTY_CHANGED_DUE_TO_ACC");
            Xrm.Utility.alertDialog(String.format($v_6, $v_1.toString(), $v_5), null)
        }
        Mscrm.QoiDetail.$1(setAdditionalParamsCallback, headerEntityName, headerId, primaryFieldName)
    }
};
Mscrm.QoiDetail.$1 = function($p0, $p1, $p2, $p3) {
    if (Xrm.Page.context.client.getClient() !== "Mobile") return;
    var $v_0 = Xrm.Page.ui.controls.get("productid"), $v_1 = function($p1_0) { $p0($p1_0.toString()) };
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.addPreSearch($v_1);
    var $v_2 = Xrm.Page.ui.controls.get("uomid"),
        $v_3 = function($p1_0) { Mscrm.QoiDetail.setAdditionalParamsForUomId($p1_0.toString(), $p1, $p2, $p3) };
    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.addPreSearch($v_3)
};
Mscrm.QoiDetail.updateFieldsWhenProductChanges = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("uomid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        $v_0.setValue(null);
        var $v_1 = Xrm.Page.data.entity.attributes.get("productid");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            Mscrm.CommandBarActions.setDisabled("uomid", Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()))
    }
    Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantity", Mscrm.CommandBarActions.defaultQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantityshipped", Mscrm.CommandBarActions.defaultQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantitybackordered", Mscrm.CommandBarActions.defaultQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantitycancelled", Mscrm.CommandBarActions.defaultQuantityAccuracy)
};
Mscrm.QoiDetail.updateFieldsWhenUomChanges = function(headerEntityName, headerId) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("uomid"),
        $v_1 = !Mscrm.InternalUtilities.JSTypes.isNull($v_0) ? $v_0.getValue() : null;
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
        Mscrm.CommandBarActions
            .setNumberAttributePrecisionIfNotNull("quantity", Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions
            .setNumberAttributePrecisionIfNotNull("quantityshipped", Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions
            .setNumberAttributePrecisionIfNotNull("quantitybackordered",
                Mscrm.CommandBarActions.productQuantityAccuracy);
        Mscrm.CommandBarActions
            .setNumberAttributePrecisionIfNotNull("quantitycancelled", Mscrm.CommandBarActions.productQuantityAccuracy)
    } else Mscrm.QoiDetail.$0(headerEntityName, headerId, Mscrm.QoiDetail.$2)
};
Mscrm.QoiDetail.$0 = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.CommandBarActions.getIdFromLookupAttribute("uomid"),
        $v_1 = Mscrm.CommandBarActions.getIdFromLookupAttribute("productid");
    Mscrm.CommandBarActions.getQuantityDecimal($p0, $p1, $v_1, $v_0, $p2)
};
Mscrm.QoiDetail.$3 = function($p0, $p1) {
    Mscrm.QoiDetail.$0($p0,
        $p1,
        function($p1_0) {
            Mscrm.CommandBarActions.productQuantityAccuracy = $p1_0;
            Mscrm.CommandBarActions.isPricingLocked($p0,
                $p1,
                function($p2_0) {
                    $p2_0 &&
                        Mscrm.CommandBarActions
                        .setNumberAttributePrecisionIfNotNull("quantity",
                            Mscrm.CommandBarActions.productQuantityAccuracy)
                })
        })
};
Mscrm.QoiDetail.$2 = function($p0) {
    Mscrm.CommandBarActions.productQuantityAccuracy = $p0;
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantity", Mscrm.CommandBarActions.productQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantityshipped", Mscrm.CommandBarActions.productQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantitybackordered", Mscrm.CommandBarActions.productQuantityAccuracy);
    Mscrm.CommandBarActions
        .setNumberAttributePrecisionIfNotNull("quantitycancelled", Mscrm.CommandBarActions.productQuantityAccuracy)
};
Mscrm.QoiDetail.registerClass("Mscrm.QoiDetail")