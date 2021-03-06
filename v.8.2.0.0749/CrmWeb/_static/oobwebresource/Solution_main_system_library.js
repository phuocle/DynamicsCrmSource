Type.registerNamespace("Mscrm");
Mscrm.Form_onsave = function(context) {
    var args = context.getEventArgs(),
        regExp = new RegExp("^[A-Za-z0-9_]+$"),
        bValid = regExp.test(Mscrm.FormControlInputBehavior.GetBehavior("uniquename").get_dataValue());
    if (!bValid) {
        var uniquenamelabel = $get("uniquename_c");
        alert(formatString(LOCID_SYSCUST_ALPHANUMSONLY, XUI.Html.GetText(uniquenamelabel.firstChild)));
        setControlFocus($get("uniquename"));
        args.preventDefault();
        return
    }
    regExp = new RegExp("^[0-9]+([.][0-9]+){1,3}$");
    bValid = regExp.test(Mscrm.FormControlInputBehavior.GetBehavior("version").get_dataValue());
    if (!bValid) {
        var versionlabel = $get("version_c");
        alert(LOCID_INVALID_VERSION_FORMAT);
        setControlFocus($get("version"));
        args.preventDefault();
        return
    }
    try {
        window.opener.auto(7100)
    } catch (e) {
    }
};
Mscrm.Form_onload = function() {
    if (IS_DEFAULTSOLUTION) {
        Mscrm.FormControlInputBehavior.GetBehavior("version").set_disabled(true);
        Mscrm.FormControlInputBehavior.GetBehavior("publisherid").set_disabled(true)
    }
};
Mscrm.friendlyname_onchange = function() { Mscrm.SolutionHandler.onDisplayNameChange() };
Mscrm.version_onchange = function() {
    var oVersion = Mscrm.FormControlInputBehavior.GetBehavior("version"),
        strVersion = oVersion.get_dataValue(),
        regExp = RegExp("^[0-9]+$"),
        bValid = regExp.test(strVersion);
    if (!bValid) {
        regExp = new RegExp("^[0-9]+([.][0-9]+){1,3}$");
        bValid = regExp.test(strVersion);
        if (!bValid) {
            alert(LOCID_INVALID_VERSION_FORMAT);
            setControlFocus($get("version"))
        }
    } else oVersion.set_dataValue(strVersion + ".0.0.0")
}