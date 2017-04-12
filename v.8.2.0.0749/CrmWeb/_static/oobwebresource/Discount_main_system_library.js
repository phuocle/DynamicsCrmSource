Type.registerNamespace("Mscrm");
Mscrm.Form_onload = function() {
    if (IS_AMOUNT_TYPE) {
        var percentage = $get("percentage");
        percentage.disabled = true;
        $find("crmForm").HideField(percentage)
    } else {
        var amount = $get("amount");
        amount.disabled = true;
        $find("crmForm").HideField(amount)
    }
};
Mscrm.Form_onsave = function(context) {
    var lowquantity = $get("lowquantity"),
        highquantity = $get("highquantity"),
        low = Mscrm.NumberUtility.locStringToFloat(lowquantity.value),
        high = Mscrm.NumberUtility.locStringToFloat(highquantity.value);
    if (low > high) {
        alert(LOCID_END_QTY_LESS_BEGIN_QTY);
        highquantity.focus();
        context.getEventArgs().preventDefault()
    }
}