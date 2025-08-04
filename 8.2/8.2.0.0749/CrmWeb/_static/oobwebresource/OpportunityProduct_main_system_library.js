Type.registerNamespace("Mscrm");
Mscrm.OpportunityProductWebResource = function() {};
Mscrm.OpportunityProductWebResource.setAdditionalParamsForUomId = function(context) {
    var $v_0 = null, $v_1 = Xrm.Page.getAttribute("productid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) $v_0 = $v_1.getValue();
    var $v_2 = Mscrm.OpportunityProductWebResource.getOpportunityId(),
        $v_3 = "{15F1D7AC-47FF-4487-9F42-A48E0DEBDF76}",
        $v_4 = "Unit Group Units By Product Price Level updated",
        $v_5 =
            "<fetch version='1.0' mapping='logical'><entity name='uom'><attribute name='name' /><attribute name='uomid' /><link-entity name='productpricelevel' from='uomid' to='uomid'><link-entity name='opportunity' from='pricelevelid' to='pricelevelid'><filter><condition attribute='opportunityid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_2) + "' /></filter></link-entity><link-entity name='product' from='productid' to='productid'><filter><condition attribute='productid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_0[0].id) + "' /></filter></link-entity></link-entity></entity></fetch>",
        $v_6 =
            "<grid name='resultset' object='1055' jump='name' select='1' preview='0' icon='1'><row name='result' id='uomid'><cell name='name' width='300' /></row></grid>",
        $v_7 = Xrm.Page.ui.controls.get("uomid");
    $v_7.addCustomView($v_3, "uom", $v_4, $v_5, $v_6, true)
};
Mscrm.OpportunityProductWebResource.getOpportunityId = function() {
    var $v_0 = Xrm.Page.getAttribute("opportunityid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.getValue();
        return $v_1[0].id
    } else {
        var $v_2 = Xrm.Page.context.getQueryStringParameters()["opportunityid"];
        return $v_2["opportunityid"].toString()
    }
};
Mscrm.OpportunityProductWebResource.formOnLoad = function() {
    Mscrm.CommandBarActions.initializeCachedProperties();
    var $v_0 = Xrm.Page.ui.getFormType(), $v_1 = Xrm.Page.getAttribute("producttypecode");
    if ($v_0 !== 3 && $v_0 !== 4 && $v_0 !== 6 && !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.getValue() !== 3
    ) {
        if ($v_0 === 1) {
            var $v_8 = Xrm.Internal.canOverridePriceEngine("opportunity"),
                $v_9 = Xrm.Page.data.entity.attributes.get("isproductoverridden");
            if (!$v_8) $v_9.setValue(false);
            else if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Xrm.Page.data.entity.getId())) {
                $v_9.setValue(true);
                $v_9.fireOnChange();
                if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.getControl("productdescription"))) {
                    var $v_A = Xrm.Page.getControl("productdescription");
                    $v_A.setFocus()
                }
            }
        }
        Mscrm.OpportunityProductWebResource.addEventHandlers();
        var $v_2 = Xrm.Page.data.entity.attributes.get("quantity"),
            $v_3 = Xrm.Page.getAttribute("ispriceoverridden"),
            $v_4 = Xrm.Page.getAttribute("productid"),
            $v_5 = Xrm.Page.getAttribute("uomid"),
            $v_6 = Xrm.Page.getAttribute("productdescription"),
            $v_7 = $v_4.getValue();
        Mscrm.CommandBarActions.defaultQuantityAccuracy = $v_2.getPrecision();
        Mscrm.CommandBarActions.clearCacheOnPageLoad();
        Mscrm.CommandBarActions.setValueIfNotNull($v_3.getName(), "prevDataValue", $v_3.getValue());
        Mscrm.CommandBarActions.setValueIfNotNull($v_4.getName(), "prevDataValue", $v_4.getValue());
        Mscrm.CommandBarActions.setValueIfNotNull($v_5.getName(), "prevDataValue", $v_5.getValue());
        Mscrm.CommandBarActions.setValueIfNotNull($v_6.getName(), "prevDataValue", $v_6.getValue());
        if (Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) {
            Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
            Mscrm.CommandBarActions.productOverriddenHandler()
        } else
            Mscrm.OpportunityProductWebResource
                .getQuantityDecimalForOP($v_7[0].id, Mscrm.CommandBarActions.productOverriddenHandler);
        if (Xrm.Page.context.client.getClient() !== "Mobile") {
            var $v_B = $v_2.getValue();
            if ($v_2.getIsDirty()) {
                var $v_C = parseInt($v_B.toString(), $v_2.getPrecision()),
                    $v_D = Xrm.Internal.getResourceString("LOCID_QTY_CHANGED_DUE_TO_ACC");
                Xrm.Utility.alertDialog(String.format($v_D, $v_B.toString(), $v_C), null)
            }
        }
    }
};
Mscrm.OpportunityProductWebResource
    .isProductOverriddenonChange = function() { Mscrm.CommandBarActions.productOverriddenHandler() };
Mscrm.OpportunityProductWebResource.onChangeProductId = function() {
    var $v_0 = Xrm.Page.getAttribute("uomid"),
        $v_1 = Xrm.Page.ui.controls.get("uomid"),
        $v_2 = Xrm.Page.getAttribute("productid");
    $v_0.setValue([]);
    $v_1.setDisabled(Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()));
    Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
    var $v_3 = Xrm.Page.data.entity.attributes.get("quantity");
    $v_3.setPrecision(Mscrm.CommandBarActions.productQuantityAccuracy)
};
Mscrm.OpportunityProductWebResource.onChangeUomId = function() {
    var $v_0 = Xrm.Page.getAttribute("uomid"),
        $v_1 = Xrm.Page.data.entity.attributes.get("quantity"),
        $v_2 = $v_0.getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_2) || !$v_2.length) {
        Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
        $v_1.setPrecision(Mscrm.CommandBarActions.productQuantityAccuracy)
    } else {
        var $v_3 = Xrm.Page.getAttribute("productid"), $v_4 = $v_3.getValue();
        Mscrm.OpportunityProductWebResource
            .getQuantityDecimalForOP($v_4[0].id, Mscrm.OpportunityProductWebResource.shimCallBack)
    }
};
Mscrm.OpportunityProductWebResource
    .isPriceOverriddenonChange = function() { Mscrm.CommandBarActions.updatePriceAttributes(true) };
Mscrm.OpportunityProductWebResource.setAdditionalParamsForProductId = function(context) {
    var $v_0 = Mscrm.OpportunityProductWebResource.getOpportunityId(),
        $v_1 = "{3ADA8BBE-DDE2-453B-A855-5A38853BDA21}",
        $v_2 = "Products in Parent Price List updated",
        $v_3 =
            "<fetch version='1.0' mapping='logical' distinct='true'><entity name='product'><attribute name='name' /><attribute name='price' /><attribute name='defaultuomid' /><attribute name='productnumber' /><attribute name='productid' /><filter type='or'><condition attribute='statecode' operator='eq' value='0' /><condition attribute='statecode' operator='eq' value='3' /></filter><order attribute='name' descending='false' /><link-entity name='productpricelevel' from='productid' to='productid'><attribute name='productid' /><link-entity name='opportunity' from='pricelevelid' to='pricelevelid'><filter><condition attribute='opportunityid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode($v_0) + "' /></filter></link-entity></link-entity></entity></fetch>",
        $v_4 =
            "<grid name='resultset' object='1024' jump='name' select='1' preview='0' icon='1'><row name='result' id='productid'><cell name='name' width='200' /><cell name='price' width='100' /><cell name='defaultuomid' width='100' /><cell name='productnumber' width='100' /></row></grid>",
        $v_5 = Xrm.Page.ui.controls.get("productid");
    $v_5.addCustomView($v_1, "product", $v_2, $v_3, $v_4, true)
};
Mscrm.OpportunityProductWebResource.formOnSave = function(context) {
    Mscrm.CommandBarActions.checkPriceAndQuantityNonnegative(context.getEventArgs())
};
Mscrm.OpportunityProductWebResource.shimCallBack = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("quantity");
    $v_0.setPrecision(Mscrm.CommandBarActions.productQuantityAccuracy)
};
Mscrm.OpportunityProductWebResource.addEventHandlers = function() {
    Mscrm.OpportunityProductWebResource.registerMobileClientEvents();
    var $v_0 = Xrm.Page.getAttribute("quantity"),
        $v_1 = Xrm.Page.getAttribute("priceperunit"),
        $v_2 = Xrm.Page.getAttribute("manualdiscountamount"),
        $v_3 = Xrm.Page.getAttribute("tax"),
        $v_4 = function($p1_0) { Mscrm.OpportunityProductWebResource.calculatePrice(null) };
    $v_0.addOnChange($v_4);
    $v_1.addOnChange($v_4);
    $v_2.addOnChange($v_4);
    $v_3.addOnChange($v_4)
};
Mscrm.OpportunityProductWebResource.registerMobileClientEvents = function() {
    if (Xrm.Page.context.client.getClient() !== "Mobile") return;
    var $v_0 = Xrm.Page.ui.controls.get("productid"),
        $v_1 = function($p1_0) {
            Mscrm.OpportunityProductWebResource.setAdditionalParamsForProductId($p1_0
                .toString())
        };
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.addPreSearch($v_1);
    var $v_2 = Xrm.Page.ui.controls.get("uomid"),
        $v_3 = function($p1_0) { Mscrm.OpportunityProductWebResource.setAdditionalParamsForUomId($p1_0.toString()) };
    !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.addPreSearch($v_3)
};
Mscrm.OpportunityProductWebResource.calculatePrice = function(failureCallback) {
    if (Xrm.Page.context.client.getClient() === "Mobile") {
        var $v_0 = Mscrm.OpportunityProductWebResource.getOpportunityId(), $v_1 = new Array(0);
        $v_1[0] = "isrevenuesystemcalculated";
        Xrm.Internal.messages.retrieve("opportunity", $v_0, $v_1).then(function($p1_0) {
                var $v_2 = $p1_0.entity;
                if ($v_2
                    .hasValue("isrevenuesystemcalculated"))
                    !$v_2.getValue("isrevenuesystemcalculated") && Mscrm.OpportunityProductWebResource.updatePrice()
            },
            failureCallback)
    } else {
        var $v_3 = Xrm.Page.ui.getFormType();
        if ($v_3 === 1) return;
        Xrm.Page.data.save()
    }
};
Mscrm.OpportunityProductWebResource.updatePrice = function() {
    var $v_0 = 0, $v_1 = 0, $v_2 = 0, $v_3 = 0, $v_4 = 0, $v_5 = 0, $v_6 = 0, $v_7 = Xrm.Page.getAttribute("quantity");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7)) $v_2 = $v_7.getValue();
    var $v_8 = Xrm.Page.getAttribute("priceperunit");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8)) $v_3 = $v_8.getValue();
    var $v_9 = Xrm.Page.getAttribute("manualdiscountamount");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_9)) $v_4 = $v_9.getValue();
    var $v_A = Xrm.Page.getAttribute("volumediscountamount");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A)) $v_5 = $v_A.getValue();
    var $v_B = Xrm.Page.getAttribute("tax");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_B)) $v_6 = $v_B.getValue();
    $v_0 = $v_2 * ($v_3 - $v_5);
    $v_1 = $v_0 - $v_4 + $v_6;
    if (isNaN($v_0) || isNaN($v_1)) return;
    var $v_C = Xrm.Page.getAttribute("extendedamount");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_C) && $v_C.setValue($v_1);
    var $v_D = Xrm.Page.getAttribute("baseamount");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_D) && $v_D.setValue($v_0)
};
Mscrm.OpportunityProductWebResource.getQuantityDecimalForOP = function(opportunityid, productallback) {
    var $v_0 = new Array(0);
    $v_0[0] = "quantitydecimal";
    Xrm.Internal.messages.retrieve("product", opportunityid, $v_0).then(function($p1_0) {
            var $v_1 = $p1_0.entity;
            if ($v_1.hasValue("quantitydecimal"))
                Mscrm.CommandBarActions.productQuantityAccuracy = $v_1.getValue("quantitydecimal");
            else Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
            !Mscrm.InternalUtilities.JSTypes.isNull(productallback) && productallback()
        },
        function($p1_0) {
            Mscrm.CommandBarActions.productQuantityAccuracy = Mscrm.CommandBarActions.defaultQuantityAccuracy;
            !Mscrm.InternalUtilities.JSTypes.isNull(productallback) && productallback()
        })
};
Mscrm.OpportunityProductWebResource.prototype = {
    removeOnChangeEventHandler: function() {
        var $$t_2 = this, $v_0 = function($p1_0) { Mscrm.OpportunityProductWebResource.calculatePrice(null) };
        Xrm.Page.getAttribute("quantity").removeOnChange($v_0);
        Xrm.Page.getAttribute("priceperunit").removeOnChange($v_0);
        Xrm.Page.getAttribute("manualdiscountamount").removeOnChange($v_0);
        Xrm.Page.getAttribute("tax").removeOnChange($v_0)
    }
};
Mscrm.OpportunityProductWebResource.registerClass("Mscrm.OpportunityProductWebResource");
Mscrm.Form_onload = Mscrm.OpportunityProductWebResource.formOnLoad;
Mscrm.uomid_setadditionalparams = Mscrm.OpportunityProductWebResource.setAdditionalParamsForUomId;
Mscrm.isproductoverridden_onchange = Mscrm.OpportunityProductWebResource.isProductOverriddenonChange;
Mscrm.productid_onchange = Mscrm.OpportunityProductWebResource.onChangeProductId;
Mscrm.uomid_onchange = Mscrm.OpportunityProductWebResource.onChangeUomId;
Mscrm.ispriceoverridden_onchange = Mscrm.OpportunityProductWebResource.isPriceOverriddenonChange;
Mscrm.productid_setadditionalparams = Mscrm.OpportunityProductWebResource.setAdditionalParamsForProductId;
Mscrm.Form_onsave = Mscrm.OpportunityProductWebResource.formOnSave