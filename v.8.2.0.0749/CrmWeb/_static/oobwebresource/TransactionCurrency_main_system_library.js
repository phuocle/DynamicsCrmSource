Type.registerNamespace("Mscrm");
Mscrm.currencytype_onchange = function() {
    var currencytype = Mscrm.FormControlInputBehavior.GetBehavior("currencytype"),
        isocurrencycodecontrol = Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycodecontrol");
    if (currencytype.get_dataValue() == 0) {
        Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycode").setDisplay(false);
        try {
            $get("isocurrencycodecontrol_lookupTable").style.display = "table"
        } catch (e) {
            $get("isocurrencycodecontrol_lookupTable").style.display = "block"
        }
        isocurrencycodecontrol.set_disabled(false)
    } else {
        Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycode").setDisplay(true);
        $get("isocurrencycodecontrol_lookupTable").style.display = "none";
        isocurrencycodecontrol.set_disabled(true)
    }
};
Mscrm.Form_onload = function() {
    if ($find("crmForm").get_formType() == Mscrm.SdkFormType.createForm) {
        var isocurrencycodecontrol = Mscrm.FormControlInputBehavior.GetBehavior("isocurrencycodecontrol");
        isocurrencycodecontrol.add_change(refreshUI)
    }
    setExchangeRateLabel()
}