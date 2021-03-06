Type.registerNamespace("Mscrm");
Mscrm.FieldPermission = function() {};
Mscrm.FieldPermission.applychanges = function() {
    window._matrix = [];
    if (IsNull(window._a)) window._a = getDialogArguments();
    window._matrix = window._a;
    var $v_0 = window._matrix.length;
    window._a = new Array($v_0);
    for (var $v_1 = 0; $v_1 < window._a.length; $v_1++) window._a[$v_1] = window._matrix[$v_1][0];
    window._custParams += "&objectid=" + window._objectId;
    go()
};
Mscrm.FieldPermission.computeNewValue = function(i, j, selected) {
    var $v_0 = "0";
    $v_0 = window._matrix[i][j];
    if ($v_0 !== "2")
        if (selected === "yes") $v_0 = "1";
        else if (selected === "no") $v_0 = "0";
    return $v_0
};
Mscrm.FieldPermission.getCustParamsForItem = function(i) {
    var $v_0 = $get("readSelect"), $v_1 = $get("updateSelect"), $v_2 = $get("createSelect"), $v_3;
    if (window._matrix[0].length === 6) {
        var $v_4 = Mscrm.FieldPermission.computeNewValue(i, 3, $v_0.value),
            $v_5 = Mscrm.FieldPermission.computeNewValue(i, 4, $v_1.value),
            $v_6 = Mscrm.FieldPermission.computeNewValue(i, 5, $v_2.value);
        $v_3 = "&attributeName=" +
            window._matrix[i][1] +
            "&entityName=" +
            window._matrix[i][2] +
            "&read=" +
            $v_4 +
            "&update=" +
            $v_5 +
            "&create=" +
            $v_6
    } else {
        var $v_7 = Mscrm.CrmUri.create(window.location.search),
            $v_8 = $v_7.get_query()["principalId"],
            $v_9 = $v_7.get_query()["iPrincipalType"],
            $v_A = Mscrm.FieldPermission.computeNewValue(i, 1, $v_0.value),
            $v_B = Mscrm.FieldPermission.computeNewValue(i, 2, $v_1.value);
        $v_3 = "&principalId=" + $v_8 + "&iPrincipalType=" + $v_9 + "&read=" + $v_A + "&update=" + $v_B
    }
    return $v_3
};
Mscrm.FieldPermission.registerClass("Mscrm.FieldPermission")