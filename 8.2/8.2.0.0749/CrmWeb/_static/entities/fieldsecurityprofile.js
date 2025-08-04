Type.registerNamespace("Mscrm");
Mscrm.FieldSecurityProfile = function() {};
Mscrm.FieldSecurityProfile.getSelectedMatrix = function() {
    for (var $v_0 = $find("crmGridControl"), $v_1 = $v_0.GetRecordsFromInnerGrid(true), $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++) {
        var $v_3 = new Array(6);
        $v_3[0] = $v_1[$v_2][0];
        var $v_4 = $v_1[$v_2][3];
        $v_3[1] = $v_4.getAttribute("attribute");
        $v_3[2] = $v_4.getAttribute("entity");
        $v_3[3] = $v_4.getAttribute("read");
        $v_3[4] = $v_4.getAttribute("update");
        $v_3[5] = $v_4.getAttribute("create");
        $v_1[$v_2] = $v_3
    }
    return $v_1
};
Mscrm.FieldSecurityProfile.computeSelectValue = function(matrix, index) {
    for (var $v_0 = "3", $v_1 = 0, $v_2 = 0, $v_3 = 0, $v_4 = 0; $v_4 < matrix.length; $v_4++)
        if (matrix[$v_4][index] === "1") $v_2++;
        else if (matrix[$v_4][index] === "2") $v_3++;
        else if (matrix[$v_4][index] === "0") $v_1++;
    if ($v_3 === matrix.length) $v_0 = "2";
    else if ($v_2 === matrix.length - $v_3) $v_0 = "1";
    else if ($v_1 === matrix.length - $v_3) $v_0 = "0";
    return $v_0
};
Mscrm.FieldSecurityProfile.editFieldPermission = function(domEvent) {
    var $v_0 = Mscrm.FieldSecurityProfile.getSelectedMatrix();
    if ($v_0.length > 0) {
        var $v_1 = Mscrm.FieldSecurityProfile.computeSelectValue($v_0, 3),
            $v_2 = Mscrm.FieldSecurityProfile.computeSelectValue($v_0, 4),
            $v_3 = Mscrm.FieldSecurityProfile.computeSelectValue($v_0, 5),
            $v_4 = Mscrm.CrmUri.create("/_grid/cmds/dlg_editfieldpermission.aspx?iTotal=" +
                $v_0.length +
                "&iObjType=1200&read=" +
                $v_1 +
                "&update=" +
                $v_2 +
                "&create=" +
                $v_3 +
                "&objectId=" +
                window._objectId),
            $v_5 = Mscrm.FieldSecurityProfile.editFieldPermissionRefreshGrid,
            $v_6 = new Xrm.DialogOptions;
        $v_6.height = 330;
        $v_6.width = 450;
        Xrm.Internal.openDialog($v_4.toString(), $v_6, $v_0, null, $v_5);
        return
    } else
        window._objectId.toUpperCase() !== "{572329C1-A042-4E22-BE47-367C6374EA45}" &&
            alert(window.LOCID_NO_ITEM_SELECTED)
};
Mscrm.FieldSecurityProfile.editFieldPermissionRefreshGrid = function(returnValue) {
    if (returnValue) {
        var $v_0 = $find("crmGridControl");
        $v_0.refresh()
    }
};
Mscrm.FieldSecurityProfile.onLoad = function() {
    var $v_0 = $find("crmGridControl");
    if ($v_0.GetParameter("gridName") === "FieldPermission") {
        var $v_1 = $get("crmGridControl");
        $addHandler($v_1, "dblclick", Mscrm.FieldSecurityProfile.editFieldPermission)
    }
};
Mscrm.FieldSecurityProfile.registerClass("Mscrm.FieldSecurityProfile")