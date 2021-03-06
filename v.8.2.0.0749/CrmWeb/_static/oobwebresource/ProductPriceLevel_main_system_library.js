Type.registerNamespace("Mscrm");
var _amountDisabled, _defaultScheduleUomId;
Mscrm.productid_setadditionalparams = function(context) {
    var oLookup = Mscrm.FormControlInputBehavior.GetBehaviorForForm("productid");
    oLookup.AddBindingColumn("defaultuomscheduleid")
};
Mscrm.productid_onafterselect = function() {
    var lookupBehavior = Xrm.Page.data.entity.attributes.get("productid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(lookupBehavior) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(lookupBehavior.getValue())) {
        var uomScheduleId = "", items = lookupBehavior.getValue();
        if (!Mscrm.InternalUtilities.JSTypes.isNull(items) && items.length > 0) {
            var columns = ["defaultuomscheduleid"];
            Xrm.Internal.messages.retrieve(Mscrm.InternalUtilities.EntityNames.Product, items[0].id, columns)
                .then(function(response) {
                        var childEntity = response.entity, uid = childEntity.getValue("defaultuomscheduleid");
                        uomScheduleId = uid.Id.toString();
                        _defaultScheduleUomId = uomScheduleId
                    },
                    Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
        }
    }
};
Mscrm.discounttypeid_setadditionalparams = function(context) {
    var oLookup = Xrm.Page.ui.controls.get("discounttypeid");
    AddParamsForDiscountType(oLookup)
};

function AddParamsForDiscountType(oLookup) {
    var oTransCurId;
    sTransCurId = "";
    var dataValue;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        oTransCurId = Xrm.Page.data.entity.attributes.get("transactioncurrencyid");
        dataValue = oTransCurId.getValue()
    } else {
        oTransCurId = Mscrm.FormControlInputBehavior.GetBehaviorForForm("transactioncurrencyid");
        dataValue = oTransCurId.get_dataValue()
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull(dataValue)) sTransCurId = dataValue[0].id;
    var fetchXml = '<filter type="or"><condition attribute="transactioncurrencyid" operator="eq" value="' +
        sTransCurId +
        '"/><condition attribute="isamounttype" operator="like" value="false"/></filter>';
    oLookup.addCustomFilter(fetchXml)
}

Mscrm.uomid_onclick = function() {
    var currentScheduleUomId = GetScheduleUomId();
    currentScheduleUomId == "" && alert(LOCID_MISSING_UOM_GROUP)
};
Mscrm.uomid_setadditionalparams = function(context) {
    var currentScheduleUomId = GetScheduleUomId();
    if (currentScheduleUomId != "") {
        var fetchXml = '<filter type="and"><condition attribute="uomscheduleid" operator="eq" value="' +
            currentScheduleUomId +
            '"/></filter>';
        Xrm.Page.ui.controls.get("uomid").addCustomFilter(fetchXml)
    }
};
Mscrm.Form_onload = function() {
    var formType = Xrm.Page.ui.getFormType();
    if (formType == Xrm.FormType.readOnly || formType == Xrm.FormType.disabled) return;
    PricingMethodCodeChanged();
    ValidateRoundingAmount();
    var uomidControl = Xrm.Page.ui.controls.get("uomid"),
        amountControl = Xrm.Page.ui.controls.get("amount"),
        productidAttributes = Xrm.Page.data.entity.attributes.get("productid"),
        productIdValue = productidAttributes.getValue(),
        isUomidDisabled = Mscrm.InternalUtilities.JSTypes.isNull(productIdValue) || productIdValue.length == 0;
    uomidControl.setDisabled(isUomidDisabled);
    _amountDisabled = amountControl.getDisabled()
};
Mscrm.Form_onsave = function() {
    Xrm.Page.data.entity.attributes.get("amount").setSubmitMode("always");
    Xrm.Page.data.entity.attributes.get("percentage").setSubmitMode("always");
    Xrm.Page.data.entity.attributes.get("roundingpolicycode").setSubmitMode("always");
    Xrm.Page.data.entity.attributes.get("roundingoptioncode").setSubmitMode("always");
    Xrm.Page.data.entity.attributes.get("roundingoptionamount").setSubmitMode("always")
};
Mscrm.pricelevelid_onchange = function(context) {
    var transCurId = "",
        transCurISOCurrencyCode = "",
        transCurCurrencySymbol = "",
        lookupBehavior = Mscrm.FormControlInputBehavior.GetBehaviorForForm(context.getEventSource().getName()),
        items = lookupBehavior.Items(false, false, false, false, false);
    if (!Mscrm.InternalUtilities.JSTypes.isNull(items) && items.length > 0) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull(items[0]
            .keyValues["transactioncurrencyid_Hidden"]))
            transCurId = items[0].keyValues["transactioncurrencyid_Hidden"].value;
        else if (!Mscrm.InternalUtilities.JSTypes.isNull(items[0]
            .keyValues["transactioncurrencyid"])) transCurId = items[0].keyValues["transactioncurrencyid"].value;
        if (!IsNull(items[0]
            .keyValues["priceleveltransactioncurrency.isocurrencycode"])
        ) transCurISOCurrencyCode = items[0].keyValues["priceleveltransactioncurrency.isocurrencycode"].value;
        if (!IsNull(items[0]
            .keyValues["priceleveltransactioncurrency.currencysymbol"])
        ) transCurCurrencySymbol = items[0].keyValues["priceleveltransactioncurrency.currencysymbol"].value
    }
    var transactioncurrencyid = Mscrm.FormControlInputBehavior.GetBehaviorForForm("transactioncurrencyid");
    transactioncurrencyid.SetCurrencyIsoCurrencyCode(transCurId, transCurISOCurrencyCode, transCurCurrencySymbol);
    var currencyAttributes = Xrm.Page.data.entity.attributes.get("transactioncurrencyid");
    currencyAttributes._attribute.setValueForCompositeField(transactioncurrencyid.get_dataValue())
};
Mscrm.productid_onchange = function() {
    var uomidAttributes = Xrm.Page.data.entity.attributes.get("uomid"),
        uomidControl = Xrm.Page.ui.controls.get("uomid"),
        productidAttributes = Xrm.Page.data.entity.attributes.get("productid");
    uomidAttributes.setValue([]);
    var productIdValue = productidAttributes.getValue(),
        isUomidDisabled = Mscrm.InternalUtilities.JSTypes.isNull(productIdValue) || productIdValue.length == 0;
    uomidControl.setDisabled(isUomidDisabled)
};
Mscrm.pricingmethodcode_onchange = function() { PricingMethodCodeChanged() };
Mscrm.percentage_onchange = function() { ValidatePricingPercentage() };
Mscrm.roundingpolicycode_onchange = function() { RoundingPolicyCodeChanged() };
Mscrm.roundingoptioncode_onchange = function() { ValidateRoundingAmount() };
Mscrm.roundingoptionamount_onchange = function() { ValidateRoundingAmount() };

function ValidatePricingPercentage() {
    var oPriMtdCodeAttribute = Xrm.Page.data.entity.attributes.get("pricingmethodcode"),
        oPriMtdPerAttribute = Xrm.Page.data.entity.attributes.get("percentage"),
        oPriMtdPerControl = Xrm.Page.ui.controls.get("percentage"),
        iPriPer = oPriMtdPerAttribute.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(iPriPer))
        switch (oPriMtdCodeAttribute.getValue().toString()) {
        case "2":
        case "3":
        case "5":
            if (iPriPer < 0 || iPriPer > 99999.99) {
                if (oPriMtdCodeAttribute.getValue() == 2)
                    alert(formatString(LOCID_INV_PER_PEROFLIST_PM,
                        Mscrm.NumberUtility.addFormatting(0, 2),
                        Mscrm.NumberUtility.addFormatting(99999.99, 2)));
                else
                    alert(formatString(LOCID_INV_PER_PERMARKUP_PM,
                        Mscrm.NumberUtility.addFormatting(0, 2),
                        Mscrm.NumberUtility.addFormatting(99999.99, 2)));
                oPriMtdPerAttribute.setValue(null);
                oPriMtdPerControl.setFocus()
            }
            break;
        case "4":
        case "6":
            if (iPriPer < 0 || iPriPer > 99.99) {
                alert(formatString(LOCID_INV_PER_PERMARGIN_PM,
                    Mscrm.NumberUtility.addFormatting(0, 2),
                    Mscrm.NumberUtility.addFormatting(99.99, 2)));
                oPriMtdPerAttribute.setValue(null);
                oPriMtdPerControl.setFocus()
            }
            break
        }
}

function ValidateRoundingAmount() {
    var oRndOptCodeAttribute = Xrm.Page.data.entity.attributes.get("roundingoptioncode"),
        oRndOptAmtAttribute = Xrm.Page.data.entity.attributes.get("roundingoptionamount"),
        oRndOptAmtControl = Xrm.Page.ui.controls.get("roundingoptionamount"),
        intRndOptAmt = oRndOptAmtAttribute.getValue(),
        oRndOptCodeAttributeValue = oRndOptCodeAttribute.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull(intRndOptAmt) &&
        !Mscrm.InternalUtilities.JSTypes.isNull(oRndOptCodeAttributeValue))
        switch (oRndOptCodeAttributeValue.toString()) {
        case "1":
            if (intRndOptAmt < 0 || intRndOptAmt > 1e9) {
                alert(formatString(LOCID_INV_ROUAMT_ENDSIN_OPT,
                    Mscrm.NumberUtility.addFormatting(0, 2),
                    Mscrm.NumberUtility.addFormatting(1e9, 2)));
                oRndOptAmtAttribute.setValue(null);
                oRndOptAmtControl.setFocus()
            }
            break;
        case "2":
            if (intRndOptAmt < .01 || intRndOptAmt > 1e9) {
                alert(formatString(LOCID_INV_ROUAMT_MULTIPLEOF_OPT,
                    Mscrm.NumberUtility.addFormatting(.01, 2),
                    Mscrm.NumberUtility.addFormatting(1e9, 2)));
                oRndOptAmtAttribute.setValue(null);
                oRndOptAmtControl.setFocus()
            }
            break
        }
}

function PricingMethodCodeChanged() {
    var pricingmethodcode = Xrm.Page.data.entity.attributes.get("pricingmethodcode"),
        val = pricingmethodcode.getValue(),
        disablePercentage = Mscrm.InternalUtilities.JSTypes.isNull(val) || isNaN(val) || val == 1,
        disableAmount = !disablePercentage,
        amountControl = Xrm.Page.ui.controls.get("amount"),
        amountAttributes = Xrm.Page.data.entity.attributes.get("amount"),
        percentageControl = Xrm.Page.ui.controls.get("percentage"),
        percentageAttributes = Xrm.Page.data.entity.attributes.get("percentage"),
        roundingpolicycodeControl = Xrm.Page.ui.controls.get("roundingpolicycode"),
        roundingpolicycodeAttributes = Xrm.Page.data.entity.attributes.get("roundingpolicycode");
    amountControl.setDisabled(disableAmount);
    percentageControl.setDisabled(disablePercentage);
    roundingpolicycodeControl.setDisabled(disablePercentage);
    amountAttributes.setRequiredLevel(disableAmount ? Xrm.RequiredLevel.none : Xrm.RequiredLevel.required);
    percentageAttributes.setRequiredLevel(disablePercentage ? Xrm.RequiredLevel.none : Xrm.RequiredLevel.required);
    roundingpolicycodeAttributes.setRequiredLevel(disablePercentage
        ? Xrm.RequiredLevel.none
        : Xrm.RequiredLevel.required);
    if (disablePercentage) {
        percentageAttributes.setValue(null);
        roundingpolicycodeAttributes = Xrm.Page.data.entity.attributes.get("roundingpolicycode");
        roundingpolicycodeAttributes.setValue(null)
    } else {
        amountAttributes.setValue(null);
        ValidatePricingPercentage()
    }
    RoundingPolicyCodeChanged()
}

function RoundingPolicyCodeChanged() {
    var roundingoptionamountControl = Xrm.Page.ui.controls.get("roundingoptionamount"),
        roundingoptionamountAttributes = Xrm.Page.data.entity.attributes.get("roundingoptionamount"),
        roundingpolicycodeAttributes = Xrm.Page.data.entity.attributes.get("roundingpolicycode"),
        roundingoptioncodeControl = Xrm.Page.ui.controls.get("roundingoptioncode"),
        roundingoptioncodeAttributes = Xrm.Page.data.entity.attributes.get("roundingoptioncode"),
        disable = Mscrm.InternalUtilities.JSTypes.isNull(roundingpolicycodeAttributes.getValue()) ||
            !(roundingpolicycodeAttributes.getValue() > 1);
    roundingoptioncodeControl.setDisabled(disable);
    roundingoptionamountControl.setDisabled(disable);
    roundingoptioncodeAttributes.setRequiredLevel(disable ? Xrm.RequiredLevel.none : Xrm.RequiredLevel.required);
    roundingoptionamountAttributes.setRequiredLevel(disable ? Xrm.RequiredLevel.none : Xrm.RequiredLevel.required);
    if (disable) {
        roundingoptionamountAttributes.setValue(null);
        roundingoptioncodeAttributes.setValue(null)
    }
}

function GetScheduleUomId() {
    if (Mscrm.InternalUtilities.JSTypes.isNull(_defaultScheduleUomId) || _defaultScheduleUomId == "") {
        var uomscheduleidValue = "", uomscheduleid = Xrm.Page.data.entity.attributes.get("uomscheduleid").getValue();
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull(uomscheduleid) &&
            uomscheduleid.length > 0) uomscheduleidValue = uomscheduleid[0].id;
        _defaultScheduleUomId = uomscheduleidValue
    }
    return _defaultScheduleUomId
}