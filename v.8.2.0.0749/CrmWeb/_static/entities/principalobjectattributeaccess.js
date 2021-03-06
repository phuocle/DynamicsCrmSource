Type.registerNamespace("Mscrm");
Mscrm.PrincipalObjectAttributeAccess = function() {};
Mscrm.PrincipalObjectAttributeAccess.addPrincipal = function() {
    var $v_0 = Mscrm.Utilities.createCallbackFunctionObject("addPrincipalAction",
        Mscrm.PrincipalObjectAttributeAccess,
        null,
        false);
    LookupObjectsWithCallback($v_0,
        null,
        "multi",
        "8,9",
        0,
        null,
        null,
        1,
        1,
        false,
        "",
        "",
        "",
        "",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null)
};
Mscrm.PrincipalObjectAttributeAccess.addPrincipalAction = function(lookupItems) {
    if (!IsNull(lookupItems) && lookupItems.items.length > 0) {
        for (var $v_0 = "", $v_2 = 0; $v_2 < lookupItems.items.length; $v_2++) {
            $v_0 += lookupItems.items[$v_2].name + ";";
            $v_0 += lookupItems.items[$v_2].type + ";";
            $v_0 += lookupItems.items[$v_2].id + ";"
        }
        var $v_1 = Mscrm.GridControl.findComponent("principalsGrid");
        $v_1.SetParameter("newprincipalslist", $v_0);
        $v_1.Refresh()
    }
};
Mscrm.PrincipalObjectAttributeAccess.removePrincipal = function() {
    var $v_0 = getSelected("principalsGrid");
    if ($v_0.length > 0) {
        for (var $v_1 = "", $v_3 = 0; $v_3 < $v_0.length; $v_3++) $v_1 += $v_0[$v_3] + ";";
        var $v_2 = Mscrm.GridControl.findComponent("principalsGrid");
        $v_2.SetParameter("deleteprincipalslist", $v_1);
        $v_2.Refresh()
    }
};
Mscrm.PrincipalObjectAttributeAccess.computeSelectValue = function(matrix, index) {
    for (var $v_0 = "3", $v_1 = 0, $v_2 = 0, $v_3 = 0, $v_4 = 0; $v_4 < matrix.length; $v_4++)
        if (matrix[$v_4][index] === "1") $v_2++;
        else if (matrix[$v_4][index] === "2") $v_3++;
        else if (matrix[$v_4][index] === "0") $v_1++;
    if ($v_3 === matrix.length) $v_0 = "2";
    else if ($v_2 === matrix.length - $v_3) $v_0 = "1";
    else if ($v_1 === matrix.length - $v_3) $v_0 = "0";
    return $v_0
};
Mscrm.PrincipalObjectAttributeAccess.editGrantPermissions = function(domEvent) {
    var $v_0 = Mscrm.PrincipalObjectAttributeAccess.getSelectedPermissionsMatrix("permissionsGrid");
    if ($v_0.length > 0) {
        var $v_1 = Mscrm.GridControl.findComponent("principalsGrid"),
            $v_2 = Mscrm.GridControl.findComponent("permissionsGrid"),
            $v_3 = Mscrm.PrincipalObjectAttributeAccess.computeSelectValue($v_0, 1),
            $v_4 = Mscrm.PrincipalObjectAttributeAccess.computeSelectValue($v_0, 2),
            $v_5 = Mscrm.CrmUri.create("/_grid/cmds/dlg_editfieldpermission.aspx?iTotal=" +
                $v_0.length +
                "&iObjType=" +
                $v_1.GetParameter("objecttype") +
                "&read=" +
                $v_3 +
                "&update=" +
                $v_4 +
                "&create=0&objectId=" +
                $v_1.GetParameter("objectid") +
                "&principalId=" +
                $v_2.GetParameter("principalid") +
                "&iPrincipalType=" +
                $v_2.GetParameter("principaltype"));
        openStdDlg($v_5, $v_0, 450, 300) && $v_2.Refresh();
        return
    } else alert(window.LOCID_NO_ITEM_SELECTED)
};
Mscrm.PrincipalObjectAttributeAccess.getSelectedPermissionsMatrix = function(sGridName) {
    for (var $v_0 = Mscrm.GridControl.findComponent("permissionsGrid"),
        $v_1 = $v_0.GetRecordsFromInnerGrid(true),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = new Array(3), $v_4 = $v_1[$v_2], $v_5 = $v_4[3];
        $v_3[0] = $v_1[$v_2][0];
        $v_3[1] = $v_5.getAttribute("read");
        $v_3[2] = $v_5.getAttribute("update");
        $v_1[$v_2] = $v_3
    }
    return $v_1
};
Mscrm.PrincipalObjectAttributeAccess.getSelectedPrincipalsMatrix = function() {
    for (var $v_0 = Mscrm.GridControl.findComponent("principalsGrid"),
        $v_1 = $v_0.GetRecordsFromInnerGrid(true),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = new Array(4), $v_4 = $v_1[$v_2], $v_5 = $v_4[3];
        $v_3[0] = $v_1[$v_2][0];
        $v_3[1] = $v_5.getAttribute("principaltype");
        $v_3[2] = $v_5.getAttribute("objectid");
        $v_3[3] = $v_5.getAttribute("objecttype");
        $v_1[$v_2] = $v_3
    }
    return $v_1
};
Mscrm.PrincipalObjectAttributeAccess.getAllPrincipalsMatrix = function() {
    for (var $v_0 = Mscrm.GridControl.findComponent("principalsGrid"),
        $v_1 = $v_0.GetRecordsFromInnerGrid(false),
        $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = new Array(3), $v_4 = $v_1[$v_2], $v_5 = $v_4[3];
        $v_3[0] = $v_1[$v_2][0];
        $v_3[1] = $v_5.getAttribute("principaltype");
        $v_3[2] = $v_5.getAttribute("principalname");
        $v_1[$v_2] = $v_3
    }
    return $v_1
};
Mscrm.PrincipalObjectAttributeAccess.onClickOnPrincipalsGrid = function(sender, args) {
    var $v_0 = Mscrm.PrincipalObjectAttributeAccess.getSelectedPrincipalsMatrix(),
        $v_1 = Mscrm.GridControl.findComponent("permissionsGrid");
    if ($v_0.length > 0) {
        $v_1.SetParameter("principalid", $v_0[0][0]);
        $v_1.SetParameter("principaltype", $v_0[0][1]);
        $v_1.SetParameter("objectid", $v_0[0][2]);
        $v_1.SetParameter("objecttype", $v_0[0][3])
    } else $v_1.SetParameter("principalid", "");
    $v_1.Refresh()
};
Mscrm.PrincipalObjectAttributeAccess.onGridRefresh = function(sender, args) {
    var $v_0 = Mscrm.GridControl.findComponent("principalsGrid");
    $v_0.SetParameter("newprincipalslist", "");
    $v_0.SetParameter("deleteprincipalslist", "");
    var $v_1 = Mscrm.PrincipalObjectAttributeAccess.getAllPrincipalsMatrix(), $v_2 = "", $v_3 = 0;
    while ($v_3 < $v_1.length) {
        var $v_4 = $v_1[$v_3][2], $v_5 = $v_1[$v_3][1], $v_6 = $v_1[$v_3][0];
        $v_3++;
        $v_2 += $v_4 + ";" + $v_5 + ";" + $v_6 + ";"
    }
    $v_0.SetParameter("principalslist", $v_2)
};
Mscrm.PrincipalObjectAttributeAccess.modifyButtons = function() {
    XUI.Html.SetText($get("cmdDialogCancel"), window.LOCID_CANCEL_BUTTON_CAPTION);
    $get("butBegin").style.visibility = "hidden"
};
Mscrm.PrincipalObjectAttributeAccess.applicationLoad = function() {
    var $v_0 = Mscrm.GridControl.findComponent("permissionsGrid");
    $addHandler($v_0.get_element(), "dblclick", Mscrm.PrincipalObjectAttributeAccess.editGrantPermissions);
    var $v_1 = Mscrm.GridControl.findComponent("principalsGrid");
    $v_1.add_onRefresh(Mscrm.PrincipalObjectAttributeAccess.onGridRefresh);
    Mscrm.PrincipalObjectAttributeAccess.modifyButtons();
    $v_1.add_onSelectionChange(Mscrm.PrincipalObjectAttributeAccess.onClickOnPrincipalsGrid);
    Mscrm.PrincipalObjectAttributeAccess.onClickOnPrincipalsGrid(null, null)
};
Mscrm.PrincipalObjectAttributeAccess.registerClass("Mscrm.PrincipalObjectAttributeAccess")