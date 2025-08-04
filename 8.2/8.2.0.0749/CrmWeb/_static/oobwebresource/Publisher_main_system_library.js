Type.registerNamespace("Mscrm");
Mscrm.Form_onsave = function(context) {
    var args = context.getEventArgs(),
        customizationPrefix = Mscrm.FormControlInputBehavior.GetBehavior("customizationprefix"),
        sSchemaNamePrefix = IsNull(customizationPrefix.get_dataValue()) ? "" : customizationPrefix.get_dataValue(),
        regExp = RegExp("^[A-Za-z][A-Za-z0-9]+$"),
        bValid = regExp.test(sSchemaNamePrefix);
    bValid = bValid && sSchemaNamePrefix.substr(0, 5).toLowerCase() != "mscrm";
    if (!bValid) {
        alert(LOCID_INVALID_SCHEMA_NAME_PREFIX);
        setControlFocus(customizationprefix.get_element());
        args.preventDefault();
        return
    }
    regExp = new RegExp("^[A-Za-z0-9_]+$");
    bValid = regExp.test(Mscrm.FormControlInputBehavior.GetBehavior("uniquename").get_dataValue());
    if (!bValid) {
        var uniquenamelabel = $get("uniquename_c");
        alert(formatString(LOCID_SYSCUST_ALPHANUMSONLY, XUI.Html.GetText(uniquenamelabel.firstChild)));
        setControlFocus($get("uniquename"));
        args.preventDefault();
        return
    }
    try {
        window.opener.auto(7101)
    } catch (e) {
    }
};
Mscrm.customizationprefix_onchange = function() {
    var customizationPrefix = Mscrm.FormControlInputBehavior.GetBehavior("customizationprefix"),
        sSchemaNamePrefix = IsNull(customizationPrefix.get_dataValue()) ? "" : customizationPrefix.get_dataValue();
    sSchemaNamePrefix = sSchemaNamePrefix.toLowerCase();
    var regExp = RegExp("^[a-z][a-z0-9]+$"), bValid = regExp.test(sSchemaNamePrefix);
    bValid = bValid && sSchemaNamePrefix != "mscrm";
    if (!bValid) {
        alert(LOCID_INVALID_SCHEMA_NAME_PREFIX);
        setControlFocus(customizationprefix.get_element())
    }
    customizationPrefix.set_dataValue(sSchemaNamePrefix);
    $get("preview_prefix").value = sSchemaNamePrefix == "" ? "" : sSchemaNamePrefix + "_entity";
    if (bValid && !$get("customizationoptionvalueprefix").disabled) {
        var oCommand = new RemoteCommand("Solution", "GetNumberPrefix");
        if (oCommand != null) {
            oCommand.SetParameter("customizationPrefix", customizationPrefix.get_dataValue());
            var oResult = oCommand.Execute();
            oResult.Success &&
                !IsNull(oResult.ReturnValue) &&
                Mscrm.FormControlInputBehavior.GetBehavior("customizationoptionvalueprefix")
                .set_dataValue(oResult.ReturnValue)
        }
    }
};
Mscrm.friendlyname_onchange = function() {
    var friendlyName = Mscrm.FormControlInputBehavior.GetBehavior("friendlyname"),
        uniqueName = Mscrm.FormControlInputBehavior.GetBehavior("uniquename"),
        crmFormSubmitId = $get("crmFormSubmitId");
    if ((IsNull(crmFormSubmitId.value) || crmFormSubmitId.value == "") &&
        (friendlyName.get_dataValue() != null && friendlyName.get_dataValue().length > 0) &&
        (uniqueName.get_dataValue() == null || uniqueName.get_dataValue().length == 0)) {
        var regExp = new RegExp("[^A-Za-z0-9_]", "g");
        uniqueName.set_dataValue(friendlyName.get_dataValue().replace(regExp, "")
            .substr(0, uniqueName.get_maxLength()));
        uniqueName.get_dataValue() != null &&
            uniqueName.get_dataValue().length > 0 &&
            uniqueName.set_dataValue(uniqueName.get_dataValue().toLowerCase())
    }
}