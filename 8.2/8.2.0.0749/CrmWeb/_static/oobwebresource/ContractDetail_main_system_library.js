Type.registerNamespace("Mscrm");
Mscrm.ContractDetailMainSystemLibraryWebResource = function() {};
Mscrm.ContractDetailMainSystemLibraryWebResource
    .get_activeOn = function() { return Xrm.Page.ui.controls.get("activeon").getAttribute() };
Mscrm.ContractDetailMainSystemLibraryWebResource
    .get_expiresOn = function() { return Xrm.Page.ui.controls.get("expireson").getAttribute() };
Mscrm.ContractDetailMainSystemLibraryWebResource.productid_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("defaultuomscheduleid"), $v_1 = "", $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_2 = $v_0.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2[0].id;
    if ($v_1.length > 0) {
        var $v_3 = '<filter type="and"><condition attribute="defaultuomscheduleid" operator="like" value="';
        $v_3 += CrmEncodeDecode.CrmXmlAttributeEncode($v_1);
        $v_3 += '"/></filter>';
        Xrm.Page.ui.controls.get("productid").addCustomFilter($v_3)
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.uomid_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("uomscheduleid");
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0.getValue())) {
        var $v_1 = Xrm.Page.ui.controls.get("uomid");
        if ($v_1) {
            $v_1.setParameter("parentId", $v_0.getValue().toString());
            $v_1.setParameter("parentType", "UoMSchedule")
        }
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.serviceaddress_setadditionalparams = function(context) {
    var $v_0 = Xrm.Page.data.entity.getId(), $v_1 = Xrm.Page.ui.controls.get("serviceaddress");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        var $v_2 = Mscrm.InternalUtilities.Utilities.createAndFilterXmlString("customerid", "neq", $v_0);
        $v_1.addCustomFilter($v_2, "contractdetail")
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.setDisabled = function(attributeId, value) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(attributeId)) {
        var $v_0 = Xrm.Page.getAttribute(attributeId);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
            for (var $v_1 = $v_0.controls
                         .get(),
                $v_2 = $v_1.length,
                $v_3 = 0;
                $v_3 < $v_2;
                $v_3++) $v_1[$v_3].setDisabled(value)
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.Form_onload = function() {
    Mscrm.ContractDetailMainSystemLibraryWebResource.$3 = false;
    Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
        .get_activeOn().getValue();
    Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
        .get_expiresOn().getValue();
    var $v_0 = Xrm.Page.getAttribute("contractid"), $v_1 = $v_0.getValue();
    Xrm.Page.data.addOnLoad(Mscrm.ContractDetailMainSystemLibraryWebResource.$5);
    Xrm.Internal.messages.retrieve("contract", $v_1[0].id.toString(), ["allotmenttypecode", "usediscountaspercentage"])
        .then(function($p1_0) {
                var $v_2 = $p1_0.entity,
                    $v_3 = $v_2.getValue("allotmenttypecode"),
                    $v_4 = $v_2.getValue("usediscountaspercentage");
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_4.get_valueString())) {
                    Mscrm.ContractDetailMainSystemLibraryWebResource.$3 = $v_4.get_valueString() === "1";
                    Mscrm.ContractDetailMainSystemLibraryWebResource.$4 = true
                }
                var $v_5 = Xrm.Page.ui,
                    $v_6 = $v_3 === 3,
                    $v_7 = Xrm.Page.ui.getFormType() !== 3 && Xrm.Page.ui.getFormType() !== 4;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7) && $v_7) {
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) && $v_6) {
                        var $v_9 = Xrm.Page.getAttribute("totalallotments");
                        $v_9.setRequiredLevel("none");
                        $v_9.setValue(null);
                        Mscrm.ContractDetailMainSystemLibraryWebResource.setDisabled("totalallotments", true);
                        Xrm.Page.getAttribute("allotmentsused").setValue(null);
                        Xrm.Page.getAttribute("allotmentsremaining").setValue(null)
                    }
                    Xrm.Page.data.entity.attributes.get("uomid").setSubmitMode("always");
                    var $v_8 = Xrm.Page.getAttribute("productid");
                    Mscrm.ContractDetailMainSystemLibraryWebResource
                        .setDisabled("uomid", Mscrm.InternalUtilities.JSTypes.isNull($v_8.getValue()))
                }
                Mscrm.ContractDetailMainSystemLibraryWebResource.$5(null)
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.ContractDetailMainSystemLibraryWebResource.$5 = function($p0) {
    if (!Mscrm.ContractDetailMainSystemLibraryWebResource.$4) return;
    var $v_0 = null;
    if (Mscrm.ContractDetailMainSystemLibraryWebResource.$3) $v_0 = Xrm.Page.ui.controls.get("discount");
    else $v_0 = Xrm.Page.ui.controls.get("discountpercentage");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setDisabled(true)
};
Mscrm.ContractDetailMainSystemLibraryWebResource.Form_onsave = function(context) {
    var $v_0 = context.getEventArgs(), $v_1 = Xrm.Page.getAttribute("discount"), $v_2 = Xrm.Page.getAttribute("price");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue()) &&
            !isNaN($v_1.getValue()) &&
            (!Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()) && !isNaN($v_2.getValue())))
            if ($v_1.getValue() > $v_2.getValue()) {
                Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_ERROR_INVALID_DISCOUNT"), null);
                $v_0.preventDefault();
                return false
            }
    return true
};
Mscrm.ContractDetailMainSystemLibraryWebResource.productid_onchange = function(context) {
    var $v_0 = "", $v_1 = Xrm.Page.getAttribute("uomid"), $v_2 = null;
    $v_1.setValue(null);
    var $v_3 = Xrm.Page.getAttribute("productid");
    Mscrm.ContractDetailMainSystemLibraryWebResource
        .setDisabled("uomid", Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue()));
    var $v_4 = Xrm.Page.data.entity.attributes.get("productid");
    if (Mscrm.InternalUtilities.JSTypes.isNull($v_4)) return;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4) && !Mscrm.InternalUtilities.JSTypes.isNull($v_4.getValue())) {
        var $v_5 = $v_4.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5) && $v_5.length > 0) {
            var $v_6 = ["defaultuomscheduleid"];
            Xrm.Internal.messages.retrieve("product", $v_5[0].id, $v_6).then(function($p1_0) {
                    var $v_7 = $p1_0.entity;
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_7
                        .getValue("defaultuomscheduleid"))) $v_2 = $v_7.getValue("defaultuomscheduleid");
                    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
                        $v_0 = $v_2.Id.toString();
                        var $v_8 = Xrm.Page.data.entity.attributes.get("defaultuomscheduleid");
                        !Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.setValue($v_0)
                    }
                },
                Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.activeon_onchange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ContractDetailMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
            .get_activeOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ContractDetailMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
            .get_expiresOn().getValue();
    Mscrm.CommandBarActions.isStartDateLessThanEndDate(Mscrm.ContractDetailMainSystemLibraryWebResource.get_activeOn(),
        Mscrm.ContractDetailMainSystemLibraryWebResource.get_expiresOn(),
        "activeon",
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$1_0,
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$2_0)
};
Mscrm.ContractDetailMainSystemLibraryWebResource.expireson_onchange = function() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ContractDetailMainSystemLibraryWebResource.$0
        .$1_0))
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$1_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
            .get_activeOn().getValue();
    if (Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.ContractDetailMainSystemLibraryWebResource.$0
        .$2_0))
        Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$2_0 = Mscrm.ContractDetailMainSystemLibraryWebResource
            .get_expiresOn().getValue();
    var $v_0 = Mscrm.ContractDetailMainSystemLibraryWebResource.get_expiresOn().getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if ($v_0 &&
            Mscrm.CommandBarActions
            .isStartDateLessThanEndDate(Mscrm.ContractDetailMainSystemLibraryWebResource.get_activeOn(),
                Mscrm.ContractDetailMainSystemLibraryWebResource.get_expiresOn(),
                "expireson",
                Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$1_0,
                Mscrm.ContractDetailMainSystemLibraryWebResource.$0.$2_0)) {
            var $v_1 = Mscrm.CommandBarActions.CloneDate($v_0);
            $v_1.setHours(23);
            $v_1.setMinutes(59);
            $v_1.setSeconds(59);
            $v_1.getTime() !== $v_0.getTime() && Xrm.Page.getAttribute("expireson").setValue($v_1);
            return true
        }
    return false
};
Mscrm.ContractDetailMainSystemLibraryWebResource
    .discount_onchange = function() {
        Mscrm.ContractDetailMainSystemLibraryWebResource.handleEmptyInputValue("discount", 0)
    };
Mscrm.ContractDetailMainSystemLibraryWebResource
    .discountpercentage_onchange = function() {
        Mscrm.ContractDetailMainSystemLibraryWebResource.handleEmptyInputValue("discountpercentage", 0)
    };
Mscrm.ContractDetailMainSystemLibraryWebResource.handleEmptyInputValue = function(attributeId, attributeValue) {
    var $v_0 = Xrm.Page.getAttribute(attributeId), $v_1 = $v_0.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        (Mscrm.InternalUtilities.JSTypes.isNull($v_1) || $v_1.toString().trim() === "") && $v_0.setValue(attributeValue)
};
Mscrm.ContractDetailMainSystemLibraryWebResource.getUomSchedule = function(id) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(id)) {
        var $v_0 = new Xrm.LookupObject;
        $v_0.id = id;
        $v_0.name = "";
        $v_0.entityType = "uomschedule";
        return $v_0
    }
    return null
};
Mscrm.ContractAllotmentTypeCode = function() {};
Mscrm.PreviousDateTimeValues = function() {};
Mscrm.PreviousDateTimeValues.prototype = {
    $1_0: null,
    get_activeOn: function() { return this.$1_0 },
    set_activeOn: function(value) {
        this.$1_0 = value;
        return value
    },
    $2_0: null,
    get_expiresOn: function() { return this.$2_0 },
    set_expiresOn: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.ContractDetailMainSystemLibraryWebResource.registerClass("Mscrm.ContractDetailMainSystemLibraryWebResource");
Mscrm.ContractAllotmentTypeCode.registerClass("Mscrm.ContractAllotmentTypeCode");
Mscrm.PreviousDateTimeValues.registerClass("Mscrm.PreviousDateTimeValues");
Mscrm.ContractDetailMainSystemLibraryWebResource.$0 = new Mscrm.PreviousDateTimeValues;
Mscrm.ContractDetailMainSystemLibraryWebResource.$3 = false;
Mscrm.ContractDetailMainSystemLibraryWebResource.$4 = false;
Mscrm.ContractAllotmentTypeCode.time = 2;
Mscrm.ContractAllotmentTypeCode.coverageDates = 3;
Type.registerNamespace("Mscrm");
Mscrm.productid_setadditionalparams = Mscrm.ContractDetailMainSystemLibraryWebResource.productid_setadditionalparams;
Mscrm.uomid_setadditionalparams = Mscrm.ContractDetailMainSystemLibraryWebResource.uomid_setadditionalparams;
Mscrm.serviceaddress_setadditionalparams = Mscrm.ContractDetailMainSystemLibraryWebResource
    .serviceaddress_setadditionalparams;
Mscrm.Form_onload = Mscrm.ContractDetailMainSystemLibraryWebResource.Form_onload;
Mscrm.productid_onchange = Mscrm.ContractDetailMainSystemLibraryWebResource.productid_onchange;
Mscrm.activeon_onchange = Mscrm.ContractDetailMainSystemLibraryWebResource.activeon_onchange;
Mscrm.expireson_onchange = Mscrm.ContractDetailMainSystemLibraryWebResource.expireson_onchange;
Mscrm.discount_onchange = Mscrm.ContractDetailMainSystemLibraryWebResource.discount_onchange;
Mscrm.discountpercentage_onchange = Mscrm.ContractDetailMainSystemLibraryWebResource.discountpercentage_onchange;
Mscrm.handleEmptyInputValue = Mscrm.ContractDetailMainSystemLibraryWebResource.handleEmptyInputValue;
Mscrm.setDisabled = Mscrm.ContractDetailMainSystemLibraryWebResource.setDisabled;
Mscrm.getUomSchedule = Mscrm.ContractDetailMainSystemLibraryWebResource.getUomSchedule;
Mscrm.Form_onsave = Mscrm.ContractDetailMainSystemLibraryWebResource.Form_onsave