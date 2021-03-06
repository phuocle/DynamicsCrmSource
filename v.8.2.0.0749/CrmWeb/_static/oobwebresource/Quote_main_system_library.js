Type.registerNamespace("Mscrm");
Mscrm.QuoteMainSystemLibraryWebResource = function() {};
Mscrm.QuoteMainSystemLibraryWebResource.Mscrm_effective_common_onchange = function(CtrlName) {
    var $v_0 = Xrm.Page.data.entity.attributes.get("effectiveto"),
        $v_1 = Xrm.Page.data.entity.attributes.get("effectivefrom");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1))
        if (CtrlName === "effectivefrom")
            Mscrm.QuoteMainSystemLibraryWebResource
                .IsEffectiveFromDateLessThanEffectiveToDate($v_1,
                    $v_0,
                    Xrm.Internal.getResourceString("LOCID_EFFECTIVEDATE_TO_LT_FROM"),
                    CtrlName);
        else
            Mscrm.QuoteMainSystemLibraryWebResource
                .IsEffectiveFromDateLessThanEffectiveToDate($v_1,
                    $v_0,
                    Xrm.Internal.getResourceString("LOCID_EFFECTIVEDATE_TO_LT_FROM"),
                    CtrlName)
};
Mscrm.QuoteMainSystemLibraryWebResource.Form_onload = function() {
    Xrm.Page.context.client.getClient() === "Mobile" && Mscrm.CommandBarActions.checkForSuggestions();
    Mscrm.QuoteMainSystemLibraryWebResource.$5();
    Xrm.Page.ui.getFormType() === 1 && Mscrm.OpportunityQOIControl.setDefaultPricelistForUser("quote", "pricelevelid");
    var $v_0 = Xrm.Page.data.entity.attributes.get("effectiveto"),
        $v_1 = Xrm.Page.data.entity.attributes.get("effectivefrom");
    Xrm.Page.ui.getFormType() !== 3 &&
        Xrm.Page.ui.getFormType() !== 4 &&
        Mscrm.CommandBarActions.enableDisableShippingAddress();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1)) {
        Mscrm.QuoteMainSystemLibraryWebResource.$0.$1_0 = $v_1.getValue();
        Mscrm.QuoteMainSystemLibraryWebResource.$0.$2_0 = $v_0.getValue()
    }
    var $v_2 = Xrm.Page.ui.navigation;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.items)) {
        var $v_3 = $v_2.items.get("navOrders");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3)) {
            var $v_4 = Xrm.Page.data.entity.attributes.get("statecode");
            !$v_4.getValue() && $v_3.setVisible(false)
        }
    }
    Mscrm.QuoteMainSystemLibraryWebResource.$3()
};
Mscrm.QuoteMainSystemLibraryWebResource.pricelevelid_setadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("pricelevelid");
    Mscrm.QuoteMainSystemLibraryWebResource.addTransactionCurrencyParam($v_0)
};
Mscrm.QuoteMainSystemLibraryWebResource.opportunityid_setadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("opportunityid");
    Mscrm.QuoteMainSystemLibraryWebResource.addTransactionCurrencyParam($v_0)
};
Mscrm.QuoteMainSystemLibraryWebResource
    .effectivefrom_onchange = function() {
        Mscrm.QuoteMainSystemLibraryWebResource.Mscrm_effective_common_onchange("effectivefrom")
    };
Mscrm.QuoteMainSystemLibraryWebResource
    .effectiveto_onchange = function() {
        Mscrm.QuoteMainSystemLibraryWebResource.Mscrm_effective_common_onchange("effectiveto")
    };
Mscrm.QuoteMainSystemLibraryWebResource
    .IsEffectiveFromDateLessThanEffectiveToDate = function(oStartDateAtt, oEndDateAtt, sMsg, CtrlType) {
        var $v_0 = oStartDateAtt.getValue(), $v_1 = oEndDateAtt.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
            $v_0.getTime() > $v_1.getTime()) {
            if (CtrlType.toLocaleLowerCase() === "effectivefrom")
                if (Xrm.Page.context.client.getClient() === "Mobile" &&
                    Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.QuoteMainSystemLibraryWebResource.$0.$1_0)) {
                    oStartDateAtt.setValue($v_1);
                    Mscrm.QuoteMainSystemLibraryWebResource.$0.$1_0 = $v_1
                } else {
                    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(sMsg) && Xrm.Utility.alertDialog(sMsg, null);
                    oStartDateAtt.setValue(Mscrm.QuoteMainSystemLibraryWebResource.$0.$1_0)
                }
            else if (Xrm.Page.context.client.getClient() === "Mobile" &&
                Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.QuoteMainSystemLibraryWebResource.$0.$2_0)) {
                oEndDateAtt.setValue($v_0);
                Mscrm.QuoteMainSystemLibraryWebResource.$0.$2_0 = $v_0
            } else {
                !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(sMsg) && Xrm.Utility.alertDialog(sMsg, null);
                oEndDateAtt.setValue(Mscrm.QuoteMainSystemLibraryWebResource.$0.$2_0)
            }
            return false
        } else {
            if (CtrlType
                .toLocaleLowerCase() ===
                "effectivefrom") Mscrm.QuoteMainSystemLibraryWebResource.$0.$1_0 = oStartDateAtt.getValue();
            else Mscrm.QuoteMainSystemLibraryWebResource.$0.$2_0 = oEndDateAtt.getValue();
            return true
        }
    };
Mscrm.QuoteMainSystemLibraryWebResource
    .willcall_onchange = function() { Mscrm.CommandBarActions.enableDisableShippingAddress() };
Mscrm.QuoteMainSystemLibraryWebResource
    .transactioncurrencyid_onchange = function() {
        Mscrm.QuoteMainSystemLibraryWebResource.onTransactionCurrencyChange()
    };
Mscrm.QuoteMainSystemLibraryWebResource.addTransactionCurrencyParam = function(oLookup) {
    var $v_0 = null, $v_1 = "", $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        $v_0 = Xrm.Page.data.entity.attributes.get("transactioncurrencyid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
            $v_0 = Xrm.Page.getAttribute("transactioncurrencyid");
            $v_2 = $v_0.getValue()
        }
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2[0].id;
    var $v_3 = '<filter type="and"><condition attribute="transactioncurrencyid" operator="like" value="';
    $v_3 += CrmEncodeDecode.CrmXmlAttributeEncode($v_1);
    $v_3 += '"/></filter>';
    oLookup.addCustomFilter($v_3)
};
Mscrm.QuoteMainSystemLibraryWebResource.onTransactionCurrencyChange = function() {
    !Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.ui.controls.get("pricelevelid")) &&
        Xrm.Page.data.entity.attributes.get("pricelevelid").setValue([""]);
    Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("LOCID_CURRENCY_CHANGE_ALERT"), null)
};
Mscrm.QuoteMainSystemLibraryWebResource.$5 = function() {
    var $v_0 = Xrm.Page.getAttribute("effectiveto");
    !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.addOnChange(Mscrm.QuoteMainSystemLibraryWebResource.$4)
};
Mscrm.QuoteMainSystemLibraryWebResource.$4 = function($p0) { Mscrm.QuoteMainSystemLibraryWebResource.$3() };
Mscrm.QuoteMainSystemLibraryWebResource.$3 = function() {
    var $v_0 = Xrm.Page.getAttribute("statecode");
    if ($v_0) {
        var $v_1 = $v_0.getValue(), $v_2 = Xrm.Page.getAttribute("effectiveto"), $v_3 = $v_2.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_3))
            if ((new Date).getTime() > $v_3 && ($v_1 === 0 || $v_1 === 1)) {
                var $v_4 = Xrm.Internal.getResourceString("LOCID_QUOTE_EXPIRED");
                Mscrm.QuoteMainSystemLibraryWebResource.setFormNotification($v_4, "WARNING", "QuoteExpiryNotification")
            } else Mscrm.QuoteMainSystemLibraryWebResource.clearFormNotification("QuoteExpiryNotification")
    }
};
Mscrm.QuoteMainSystemLibraryWebResource
    .clearFormNotification = function(uniqueId) { return Xrm.Page.ui.clearFormNotification(uniqueId) };
Mscrm.QuoteMainSystemLibraryWebResource
    .setFormNotification = function(message, notificationLevel, uniqueId) {
        return Xrm.Page.ui.setFormNotification(message, notificationLevel, uniqueId)
    };
Mscrm.QuoteMainSystemLibraryWebResource.QuoteState = function() {};
Mscrm.QuoteMainSystemLibraryWebResource.QuoteState.prototype = { draft: 0, active: 1, won: 2, closed: 3 };
Mscrm.QuoteMainSystemLibraryWebResource.QuoteState
    .registerEnum("Mscrm.QuoteMainSystemLibraryWebResource.QuoteState", false);
Mscrm.PreviousDateTimeValues = function() {};
Mscrm.PreviousDateTimeValues.prototype = {
    $1_0: null,
    get_beginDate: function() { return this.$1_0 },
    set_beginDate: function(value) {
        this.$1_0 = value;
        return value
    },
    $2_0: null,
    get_endDate: function() { return this.$2_0 },
    set_endDate: function(value) {
        this.$2_0 = value;
        return value
    }
};
Mscrm.QuoteMainSystemLibraryWebResource.registerClass("Mscrm.QuoteMainSystemLibraryWebResource");
Mscrm.PreviousDateTimeValues.registerClass("Mscrm.PreviousDateTimeValues");
Mscrm.QuoteMainSystemLibraryWebResource.$0 = new Mscrm.PreviousDateTimeValues;
Type.registerNamespace("Mscrm");
Mscrm.Mscrm_effective_common_onchange = Mscrm.QuoteMainSystemLibraryWebResource.Mscrm_effective_common_onchange;
Mscrm.Form_onload = Mscrm.QuoteMainSystemLibraryWebResource.Form_onload;
Mscrm.pricelevelid_setadditionalparams = Mscrm.QuoteMainSystemLibraryWebResource.pricelevelid_setadditionalparams;
Mscrm.opportunityid_setadditionalparams = Mscrm.QuoteMainSystemLibraryWebResource.opportunityid_setadditionalparams;
Mscrm.effectivefrom_onchange = Mscrm.QuoteMainSystemLibraryWebResource.effectivefrom_onchange;
Mscrm.effectiveto_onchange = Mscrm.QuoteMainSystemLibraryWebResource.effectiveto_onchange;
Mscrm.IsEffectiveFromDateLessThanEffectiveToDate = Mscrm.QuoteMainSystemLibraryWebResource
    .IsEffectiveFromDateLessThanEffectiveToDate;
Mscrm.willcall_onchange = Mscrm.QuoteMainSystemLibraryWebResource.willcall_onchange;
Mscrm.transactioncurrencyid_onchange = Mscrm.QuoteMainSystemLibraryWebResource.transactioncurrencyid_onchange