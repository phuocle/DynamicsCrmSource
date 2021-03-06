Type.registerNamespace("Mscrm");
Mscrm.UIElementsGrid = function() {};
Mscrm.UIElementsGrid.onFormsGridClick = function(sender, args) {
    Mscrm.UIElementsGrid.editExistingForm(sender, args);
    args.breakEvent = true
};
Mscrm.UIElementsGrid.editExistingForm = function(sender, args) {
    var $v_0 = $find("gridForm"), $v_1 = Mscrm.UIElementsGrid.$0(args.objectTypeCode.toString());
    Mscrm.UIElementsGrid.$2($v_1, args.objectID, $v_0);
    args.breakEvent = true
};
Mscrm.UIElementsGrid.editExistingFormFromGridCommand = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    var $v_1 = $v_0.get_selectedIds()[0],
        $v_2 = $v_0.get_selectedRecords()[0],
        $v_3 = Mscrm.UIElementsGrid.$0($v_2.TypeCode.toString());
    Mscrm.UIElementsGrid.$2($v_3, $v_1, $v_0)
};
Mscrm.UIElementsGrid.createNewForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = parseInt($v_0.GetParameter("entityOtc"), 10);
    Mscrm.FormEditor.OpenFormEditor($v_1, "main", null, 0)
};
Mscrm.UIElementsGrid.createNewMobileForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = $v_0.GetParameter("entityLogicalName");
    Mscrm.FormEditor.OpenMobileFormEditor($v_1, null)
};
Mscrm.UIElementsGrid.createNewQuickForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = parseInt($v_0.GetParameter("entityOtc"), 10);
    Mscrm.FormEditor.OpenFormEditor($v_1, "quick", null, 0)
};
Mscrm.UIElementsGrid.createNewQuickCreateForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = parseInt($v_0.GetParameter("entityOtc"), 10);
    Mscrm.FormEditor.OpenFormEditor($v_1, "quickCreate", null, 0)
};
Mscrm.UIElementsGrid.createNewCardForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = parseInt($v_0.GetParameter("entityOtc"), 10);
    Mscrm.FormEditor.OpenFormEditor($v_1, "card", null, 0)
};
Mscrm.UIElementsGrid.createNewMainInteractionCentricForm = function() {
    var $v_0 = $find("gridForm"), $v_1 = parseInt($v_0.GetParameter("entityOtc"), 10);
    Mscrm.FormEditor.OpenFormEditor($v_1, "mainInteractionCentric", null, 0)
};
Mscrm.UIElementsGrid.assignRoles = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    var $v_1 = $v_0.get_selectedIds()[0],
        $v_2 = $v_0.get_selectedRecords()[0],
        $v_3 = Mscrm.UIElementsGrid.$0($v_2.TypeCode.toString());
    if ($v_3 === "quickCreate" || $v_3 === "quick" || $v_3 === "card") {
        var $v_4 = new Mscrm.CrmDialog(Mscrm.UIElementsGrid.$5("/_grid/cmds/dlg_securityrolesassign.aspx", $v_0),
            [window._Process_Id],
            500,
            200,
            null);
        $v_4.show()
    } else {
        var $v_5 = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormRoleAssignment.aspx");
        $v_5.get_query()["formId"] = $v_1;
        $v_5.get_query()["type"] = $v_0.getCellValue("type", $v_1);
        $v_5.get_query()["objectTypeCode"] = $v_0.GetParameter("entityOtc");
        var $v_6 = {};
        $v_6["formId"] = $v_1;
        var $v_7 = new Xrm.DialogOptions;
        $v_7.height = 550;
        $v_7.width = 800;
        Xrm.Internal.openDialog($v_5.toString(), $v_7, $v_6, null, null)
    }
};
Mscrm.UIElementsGrid.$5 = function($p0, $p1) {
    var $v_0 = Mscrm.CrmUri.create($p0);
    $v_0.get_query()["iObjType"] = $p1.get_entityTypeCode();
    $v_0.get_query()["sIds"] = $p1.get_selectedRecords()[0].Id;
    return $v_0
};
Mscrm.UIElementsGrid.formOrder = function(formType) {
    var $v_0 = $find("gridForm"), $v_1 = Mscrm.CrmUri.create("/Tools/FormEditor/Dialogs/FormsOrder.aspx"), $v_2 = {};
    $v_2["type"] = formType;
    $v_2["objectTypeCode"] = $v_0.GetParameter("entityOtc");
    var $v_3 = new Xrm.DialogOptions;
    $v_3.height = 550;
    $v_3.width = 650;
    Xrm.Internal.openDialog($v_1.toString(), $v_3, $v_2, null, null)
};
Mscrm.UIElementsGrid.displayManagedProperties = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    var $v_1 = $v_0.get_selectedIds()[0];
    Mscrm.ManagedPropertyUtil.launchManagedPropertyDlg(1030, $v_1)
};
Mscrm.UIElementsGrid.showDependencies = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    var $v_1 = $v_0.get_selectedIds()[0];
    Mscrm.Dependency.launchDependencyDlg(1030, $v_1)
};
Mscrm.UIElementsGrid.deleteItem = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    Mscrm.GridRibbonActions.deleteRecords($v_0, $v_0.get_selectedRecords(), $v_0.get_entityTypeCode())
};
Mscrm.UIElementsGrid.activateItem = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    Mscrm.GridRibbonActions.changeFormStateRecords($v_0, $v_0.get_selectedRecords(), $v_0.get_entityTypeCode(), 1)
};
Mscrm.UIElementsGrid.deactivateItem = function() {
    var $v_0 = $find("gridForm");
    if ($v_0.get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONEFORM);
        return
    }
    Mscrm.GridRibbonActions.changeFormStateRecords($v_0, $v_0.get_selectedRecords(), $v_0.get_entityTypeCode(), 0)
};
Mscrm.UIElementsGrid.$0 = function($p0) {
    switch ($p0) {
    case "0":
        return "dashboard";
    case "1":
        return "appointmentBook";
    case "2":
        return "main";
    case "4":
        return "preview";
    case "5":
        return "mobile";
    case "6":
        return "quick";
    case "7":
        return "quickCreate";
    case "9":
        return "taskBasedForm";
    case "11":
        return "card";
    case "12":
        return "mainInteractionCentric";
    default:
        return "undefined"
    }
};
Mscrm.UIElementsGrid.$2 = function($p0, $p1, $p2) {
    var $v_0 = parseInt($p2.GetParameter("entityOtc"), 10);
    if ($p0 === "mobile") {
        var $v_1 = Mscrm.CrmUri.create("/m/Console/EntityConfig.aspx");
        $v_1.get_query()["etn"] = $p2.GetParameter("entityLogicalName");
        $v_1.get_query()["formid"] = $p1;
        openStdWin($v_1, "Editor", 800, 600, null)
    } else Mscrm.FormEditor.OpenFormEditor($v_0, $p0, $p1, -1)
};
Mscrm.UIElementsGrid.$6 = function() {
    for (var $v_0 = [
                 "mnubtnCreateForm", "mnubtnFormOrder", "btnDeleteForm", "btnAssignFormRoles", "btnAssignFormRoles",
                 "btnActivateForm", "btnDeactivateForm", "btnRemoveComponent", "btnAddSubcomponents", "mnuMoreActions"
             ],
        $v_1 = new Array(0),
        $$arr_2 = $v_0,
        $$len_3 = $$arr_2.length,
        $$idx_4 = 0;
        $$idx_4 < $$len_3;
        ++$$idx_4) {
        var $v_2 = $$arr_2[$$idx_4], $v_3 = $get($v_2);
        !IsNull($v_3) && $v_1.push($v_3)
    }
    return $v_1
};
Mscrm.UIElementsGrid.handleSystemFormMenuButtons = function(viewId) {
    for (var $v_0 = Mscrm.UIElementsGrid.$6(),
        $v_1 = !(viewId === Mscrm.UIElementsGrid.$4),
        $$arr_3 = $v_0,
        $$len_4 = $$arr_3.length,
        $$idx_5 = 0;
        $$idx_5 < $$len_4;
        ++$$idx_5) {
        var $v_3 = $$arr_3[$$idx_5];
        Mscrm.UIElementsGrid.$1($v_3, $v_1)
    }
    var $v_2 = $get("btnShowDependencies");
    if (!IsNull($v_2)) {
        Mscrm.UIElementsGrid.$1($v_2, !$v_1);
        $v_2.setAttribute("forceShowText", !$v_1);
        Mscrm.UIElementsGrid.$7($v_2)
    }
};
Mscrm.UIElementsGrid.$1 = function($p0, $p1) {
    if (!IsNull($p0)) {
        Mscrm.UIElementsGrid.$3($p0, $p1);
        Mscrm.UIElementsGrid.$8($p0, $p1)
    }
};
Mscrm.UIElementsGrid.$3 = function($p0, $p1) {
    if (IsNull($p0)) return;
    if ($p1) {
        $p0.style.display = "";
        $p0.setAttribute("forceHidden", false)
    } else {
        $p0.style.display = "none";
        $p0.setAttribute("forceHidden", true)
    }
};
Mscrm.UIElementsGrid.$8 = function($p0, $p1) {
    if (!IsNull($p0) && !IsNull($p0.nextSibling)) {
        var $v_0 = $p0.nextSibling;
        $v_0.className.indexOf("ms-crm-Menu-Spacer") >= 0 && Mscrm.UIElementsGrid.$3($v_0, $p1)
    }
};
Mscrm.UIElementsGrid.hideShowDependenciesButton = function() {
    var $v_0 = $get("btnShowDependencies");
    Mscrm.UIElementsGrid.$1($v_0, false)
};
Mscrm.UIElementsGrid.$7 = function($p0) {
    var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
    if (!IsNull($v_0) && $v_0.tagName === "SPAN") {
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_1) && $v_1.tagName === "A") {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if (!IsNull($v_2) && $v_2.tagName === "IMG" && $v_1.children.length >= 2) {
                var $v_3 = XUI.Html.DomUtils.GetChildElementAt($v_1, 1);
                if (!IsNull($v_3) && $v_3.tagName === "SPAN") $v_3.style.display = "inline"
            }
        }
    }
};
Mscrm.UIElementsGrid.registerClass("Mscrm.UIElementsGrid");
Mscrm.UIElementsGrid.$4 = "{FC4F7F68-F656-47B6-BD98-A6EBB9745F92}"