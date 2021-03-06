
function SetCurrency(sender, args) {
    var oResult = args.get_result(),
        isocurrencycode = Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycode"),
        currencyname = Mscrm.FormControlInputBehavior.GetBehavior("currencyname"),
        currencysymbol = Mscrm.FormControlInputBehavior.GetBehavior("currencysymbol"),
        currencyprecision = Mscrm.FormControlInputBehavior.GetBehavior("currencyprecision");
    if (oResult.items.length > 0) {
        var oItem = oResult.items[0],
            cc = oItem.keyValues["isocurrencycode"].value;
        oItem.name = cc;
        oItem.category = LookupItemCategories.NON_ENTITY;
        isocurrencycode.set_dataValue(cc);
        currencyname.set_dataValue(oItem.keyValues["currencyname"].value);
        currencysymbol.set_dataValue(oItem.keyValues["currencysymbol"].value);
        currencyprecision.set_dataValue(parseInt(oItem.keyValues["currencyprecision"].value, 10));
        sender.set_dataValue(oResult.items)
    } else {
        isocurrencycode.set_dataValue(null);
        currencyname.set_dataValue(null);
        currencysymbol.set_dataValue(null);
        currencyprecision.set_dataValue(null)
    }
}

function setExchangeRateLabel() {
    var isocurrencycode = Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycode"),
        sTransCurCode = isocurrencycode.get_dataValue();
    $find("crmForm").SetLabel($get("exchangerate"),
        formatString(LOCID_EXCHANGERATE_LABEL, BASE_CURRENCY_CODE, IsNull(sTransCurCode) ? "" : sTransCurCode))
}

function refreshUI(sender, args) {
    SetCurrency(sender, args);
    setExchangeRateLabel()
}