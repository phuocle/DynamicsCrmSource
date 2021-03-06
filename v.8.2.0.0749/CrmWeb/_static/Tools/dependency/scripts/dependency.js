Type.registerNamespace("Mscrm");
Mscrm.Dependency = function() {};
Mscrm.Dependency.resizeDependencyViewPage = function() {
    var $v_0 = document.body,
        $v_1 = $get("tdDialogHeader").offsetHeight,
        $v_2 = $get("tdDialogFooter").offsetHeight,
        $v_3 = $v_0.offsetHeight,
        $v_4 = $v_3 - $v_1 - $v_2 - 10;
    if ($v_4 < 0) $v_4 = 0;
    var $v_5 = $get("div_dependencyContent");
    if ($v_5.offsetHeight !== $v_4) $v_5.style.height = $v_4.toString() + "px"
};
Mscrm.Dependency.$0 = function($p0) { Mscrm.Dependency.resizeDependencyViewPage() };
Mscrm.Dependency.onPageLoad = function() {
    Mscrm.Dependency.resizeDependencyViewPage();
    $addHandler(window, "resize", Mscrm.Dependency.$0)
};
Mscrm.Dependency.launchDependencyDlg = function(objecttype, oid) {
    var $v_0 = Mscrm.CrmUri.create("/tools/dependency/dependencyviewdialog.aspx");
    $v_0.get_query()["objectid"] = oid;
    $v_0.get_query()["objecttype"] = objecttype;
    $v_0.get_query()["operationtype"] = "showdependency";
    var $v_1 = new Xrm.DialogOptions;
    $v_1.width = 800;
    $v_1.height = 620;
    Xrm.Internal.openDialog($v_0.toString(), $v_1, null, null, null)
};
Mscrm.Dependency.launchObject = function(sender, args) {
    var $v_0 = args.objectTypeCode.toString(), $v_1 = args.objectID, $v_2 = $v_1 ? $v_1 : null, $v_3 = args.objectRow;
    if (IsNull($v_0) || IsNull($v_3)) return true;
    var $v_4, $v_5, $v_6 = $v_3.getAttribute("parenttype");
    switch (parseInt($v_0, 10)) {
    case 9803:
    case 9805:
        $v_4 = Mscrm.CrmUri.create("/tools/systemcustomization/Relationships/manageRelationship.aspx");
        $v_4.get_query()["entityRelationshipId"] = $v_3.getAttribute("oid");
        $v_4.get_query()["entityId"] = $v_3.getAttribute("parententityid");
        $v_5 = Mscrm.WindowInformation.getWindowInformation(9803);
        openStdWin($v_4, buildWinName(null), $v_5.Width, $v_5.Height, null);
        args.breakEvent = true;
        return false;
    case 9802:
        $v_4 = Mscrm.CrmUri.create("/tools/systemcustomization/attributes/manageAttribute.aspx");
        $v_4.get_query()["attributeId"] = $v_3.getAttribute("oid");
        $v_4.get_query()["entityId"] = $v_3.getAttribute("parententityid");
        $v_5 = Mscrm.WindowInformation.getWindowInformation(9802);
        openStdWin($v_4, buildWinName(null), $v_5.Width, $v_5.Height, null);
        args.breakEvent = true;
        return false;
    case 9812:
        $v_4 = Mscrm.CrmUri.create("/tools/systemcustomization/alternatekeys/manageAlternateKeys.aspx");
        $v_4.get_query()["entityKeyId"] = $v_3.getAttribute("oid");
        $v_4.get_query()["entityId"] = $v_3.getAttribute("parententityid");
        $v_5 = Mscrm.WindowInformation.getWindowInformation(9812);
        openStdWin($v_4, buildWinName(null), $v_5.Width, $v_5.Height, null);
        args.breakEvent = true;
        return false;
    case 1021:
        Mscrm.FormEditor.OpenFormEditor(Number.parseInvariant($v_6), "main", null, -1);
        args.breakEvent = true;
        return false;
    case 1030:
        if (IsNull($v_6) || isNullOrEmptyString($v_6)) {
            var $v_C = $v_3.getAttribute("oid");
            $v_4 = Mscrm.CrmUri.create("/main.aspx?pagetype=dashboardeditor");
            $v_4.get_query()["extraqs"] = "&formId=" + $v_C + "&dashboardType=" + 1030;
            openStdWin($v_4, buildWinName($v_C), window.screen.availWidth * .9, window.screen.availHeight * .9, null)
        } else {
            var $v_D = $v_3.getAttribute("parententityid"), $v_E = $v_D ? $v_D : null;
            Mscrm.FormEditor.OpenEditor(Number.parseInvariant($v_6), $v_2, $v_E)
        }
        args.breakEvent = true;
        return false;
    case 9100:
        var $v_7 = Mscrm.WindowInformation.getWindowInformation(9099),
            $v_8 = Mscrm.CrmUri.create("/CRMReports/reportproperty.aspx");
        $v_8.get_query()["disablePersonal"] = true;
        var $v_9 = $v_3.getAttribute("oid");
        $v_8.get_query()["id"] = $v_9;
        openStdWin($v_8, buildWinName($v_9), $v_7.Width, $v_7.Height, null);
        args.breakEvent = true;
        return false;
    case 1039:
        $v_4 = Mscrm.CrmUri.create("/tools/vieweditor/viewManager.aspx");
        $v_4.get_query()["id"] = $v_3.getAttribute("oid");
        $v_4.get_query()["entityId"] = $v_3.getAttribute("parententityid");
        openStdWin($v_4, "SavedQuery", 800, 500, null);
        args.breakEvent = true;
        return false;
    case 1111:
        var $v_A = $v_3.getAttribute("oid"), $v_B = $v_6;
        $v_4 = Mscrm.CrmUri.create("/main.aspx?pagetype=vizdesigner");
        $v_4.get_query()["extraqs"] = "etc=" + $v_B + "&id=" + $v_A;
        $v_5 = Mscrm.WindowInformation.getWindowInformation(1111);
        openStdWin($v_4, buildWinName($v_A), $v_5.Width, $v_5.Height, "resizable=0");
        args.breakEvent = true;
        return false;
    case 1116:
    case 1115:
    case 1120:
    case 1117:
    case 1130:
    case 9810:
    case 4709:
    case 4605:
    case 4602:
    case 4608:
    case 4615:
    case 4618:
        args.breakEvent = true;
        return false
    }
    return true
};
Mscrm.Dependency.registerClass("Mscrm.Dependency")