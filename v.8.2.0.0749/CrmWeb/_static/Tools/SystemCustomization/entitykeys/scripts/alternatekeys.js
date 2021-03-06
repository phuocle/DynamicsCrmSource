Type.registerNamespace("Mscrm");
Mscrm.AlternateKeys = function() {};
Mscrm.AlternateKeysGrid = function() {};
Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings = function() {
    if (!Mscrm.AlternateKeysGrid.$0) {
        Mscrm.AlternateKeysGrid.$0 = $find("gridAlternateKeys");
        if (!Mscrm.AlternateKeysGrid.$0) throw Error.argumentNull("gridControl is null")
    }
    return Mscrm.AlternateKeysGrid.$0
};
Mscrm.AlternateKeysGrid.createNewAlternateKey = function() {
    var $v_0 = 5;
    if (Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings()
        .get_totalRecordCount() ===
        $v_0) alert(window.LOCID_WARNING_MAX_KEYS);
    else {
        var $v_1 = !Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().GetParameter("entityId")
                ? ""
                : Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().GetParameter("entityId"),
            $v_2 = Mscrm.CrmUri.create(String
                .format("/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?entityId={0}", $v_1));
        openStdWin($v_2, "AlternateKeysEditor", 1024, 768, null)
    }
};
Mscrm.AlternateKeysGrid.viewDependenciesFromGridCommand = function() {
    if (Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEALTERNATEKEY);
        return
    }
    var $v_0 = Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().get_selectedIds()[0];
    Mscrm.Dependency.launchDependencyDlg(9812, $v_0)
};
Mscrm.AlternateKeysGrid.onAlternateKeysGridDblClick = function(sender, args) {
    if (sender) {
        args.objectTypeCode = Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().get_entityTypeCode();
        Mscrm.AlternateKeysGrid.displayExistingAlternateKey(sender, args);
        args.breakEvent = true
    }
};
Mscrm.AlternateKeysGrid.displayExistingKeyFromGridCommand = function() {
    if (Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEALTERNATEKEY);
        return
    }
    var $v_0 = Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().get_selectedIds()[0];
    Mscrm.AlternateKeysGrid.$1($v_0)
};
Mscrm.AlternateKeysGrid.displayExistingAlternateKey = function(sender, args) {
    if (sender) {
        Mscrm.AlternateKeysGrid.$1(args.objectID);
        args.breakEvent = true
    }
};
Mscrm.AlternateKeysGrid.$1 = function($p0) {
    var $v_0 = !Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().GetParameter("entityId")
            ? ""
            : Mscrm.AlternateKeysGrid.get_gridAlternateKeysSettings().GetParameter("entityId"),
        $v_1 = Mscrm.CrmUri.create(String
            .format("/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?entityId={0}&entityKeyId={1}&_bView={2}", $v_0, $p0, true));
    openStdWin($v_1, buildWinName($p0), 1024, 768, null)
};
Mscrm.AlternateKeys.registerClass("Mscrm.AlternateKeys");
Mscrm.AlternateKeysGrid.registerClass("Mscrm.AlternateKeysGrid");
Mscrm.AlternateKeysGrid
    .createAlternateKeysSettingUrl = "/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?entityId={0}";
Mscrm.AlternateKeysGrid
    .viewAlternateKeysSettingUrl =
    "/tools/systemcustomization/AlternateKeys/manageAlternateKeys.aspx?entityId={0}&entityKeyId={1}&_bView={2}";
Mscrm.AlternateKeysGrid.$0 = null