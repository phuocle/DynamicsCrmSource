Type.registerNamespace("Mscrm");
Mscrm.ComponentOrder = function() {};
Mscrm.ComponentOrder.onLoadOrderPage = function(orderDataXml) {
    Mscrm.ComponentOrder.$3 = Mscrm.ComponentOrder.$6(orderDataXml);
    Mscrm.ComponentOrder.$3.length > 0 && $P_CRM("#componentsOrder_val1").click()
};
Mscrm.ComponentOrder.onOkPress = function(updatedOrderXml) {
    var $v_0 = Mscrm.ComponentOrder.$6(updatedOrderXml),
        $v_1 = Mscrm.ComponentOrder.$7($v_0),
        $v_2 = Mscrm.ComponentOrder.$8($v_1),
        $v_3 = new RemoteCommand("ProcessControl", "UpdateProcessOrder");
    $v_3.SetParameter("processesToOrder", $v_2);
    var $v_4 = $v_3.Execute();
    if ($v_4.Success) return $v_2;
    else return ""
};
Mscrm.ComponentOrder.$8 = function($p0) {
    for (var $v_0 = XUI.Xml.LoadXml("<ComponentOrderInfo/>"), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $v_0.createElement("Component");
        Mscrm.SolutionComponentXmlUtils.addAttribute($v_2,
            "ObjectId",
            Mscrm.ComponentOrderHelper.parseComponentId($p0[$v_1].toString()));
        Mscrm.SolutionComponentXmlUtils.addAttribute($v_2,
            "DisplayOrder",
            Mscrm.ComponentOrderHelper.parseDisplayOrder($p0[$v_1].toString()));
        XUI.Xml.DomUtils.GetFirstChild($v_0).appendChild($v_2)
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_0)
};
Mscrm.ComponentOrder.$6 = function($p0) {
    for (var $v_0 = [],
        $v_1 = XUI.Xml.LoadXml($p0),
        $v_2 = XUI.Xml.SelectNodes($v_1, "/values/value[@description != '']", null),
        $v_3 = 0;
        $v_3 < $v_2.length;
        $v_3++) $v_0[$v_3] = $v_2[$v_3].attributes.getNamedItem("description").nodeValue;
    return $v_0
};
Mscrm.ComponentOrder.$7 = function($p0) {
    for (var $v_0 = [], $v_1 = 0, $v_2 = 0; $v_2 < $p0.length; $v_2++)
        if (isNullOrEmptyString(Mscrm.ComponentOrderHelper.parseDisplayOrder($p0[$v_2].toString()))) {
            $v_0[$v_1] = Mscrm.ComponentOrder.$5($p0[$v_2].toString(), $v_2.toString());
            $v_1++
        } else if ($p0[$v_2] !== Mscrm.ComponentOrder.$3[$v_2]) {
            $v_0[$v_1] = Mscrm.ComponentOrder.$5($p0[$v_2].toString(), $v_2.toString());
            $v_1++
        }
    return $v_0
};
Mscrm.ComponentOrder.$5 = function($p0, $p1) {
    var $v_0 = $p0.split(":");
    if ($v_0.length > 1) $v_0[1] = $p1;
    else return "";
    return $v_0[0] + ":" + $v_0[1] + ":" + $v_0[2]
};
Mscrm.RoleAssignment = function() {};
Mscrm.RoleAssignment.onLoadDialog = function() {
    Mscrm.RoleAssignment.$2 = $find("crmGrid");
    Mscrm.RoleAssignmentHelper.unselectAllRoles();
    Mscrm.RoleAssignment.$4 = XUI.Html.GetText($get("preObjectId"));
    Mscrm.RoleAssignment.$0 = XUI.Html.GetText($get("preEntityName"));
    Mscrm.RoleAssignment.displayConditionsXml = Mscrm.RoleAssignmentHelper.loadDisplayConditionsXml();
    Mscrm.RoleAssignment.$1 = Mscrm.RoleAssignmentHelper
        .updateGridFromDisplayConditions(Mscrm.RoleAssignment.displayConditionsXml)
};
Mscrm.RoleAssignment.onOkPress = function() {
    Mscrm.RoleAssignment.$1 = Mscrm.RoleAssignmentHelper.setSelectedRoles();
    var $v_0 = Mscrm.RoleAssignmentHelper
        .extractDisplayConditionsFromGrid(Mscrm.RoleAssignment.displayConditionsXml, Mscrm.RoleAssignment.$1, true);
    if (!isNullOrEmptyString(Mscrm.RoleAssignment
            .$0) &&
        Mscrm.RoleAssignment.$0 === "documenttemplate") return Mscrm.RoleAssignment.$9($v_0);
    else return Mscrm.RoleAssignment.$A($v_0)
};
Mscrm.RoleAssignment.$A = function($p0) {
    var $v_0 = new RemoteCommand("ProcessControl", "UpdateSecurityRoleAssociation");
    $v_0.SetParameter("processControlId", Mscrm.RoleAssignment.$4);
    $v_0.SetParameter("displayConditionXml", $p0);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $p0;
    else return ""
};
Mscrm.RoleAssignment.$9 = function($p0) {
    var $v_0 = new RemoteCommand("DocumentTemplate", "UpdateDisplayConditions");
    $v_0.SetParameter("entityId", Mscrm.RoleAssignment.$4);
    $v_0.SetParameter("entityName", Mscrm.RoleAssignment.$0);
    $v_0.SetParameter("displayConditionsXml", $p0);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $p0;
    else return ""
};
Mscrm.RoleAssignment.onClickVisibleToEveryone = function() {
    Mscrm.RoleAssignmentHelper.onClickVisibleToEveryone(Mscrm.RoleAssignment.$2)
};
Mscrm.RoleAssignment.onClickVisibleToSelectedRoles = function() {
    Mscrm.RoleAssignmentHelper.onClickVisibleToSelectedRoles(Mscrm.RoleAssignment.$2)
};
Mscrm.RoleAssignment.onClickFallbackCheckBox = function() { Mscrm.RoleAssignmentHelper.onClickFallbackCheckBox() };
Mscrm.ComponentOrder.registerClass("Mscrm.ComponentOrder");
Mscrm.RoleAssignment.registerClass("Mscrm.RoleAssignment");
Mscrm.ComponentOrder.$3 = [];
Mscrm.RoleAssignment.displayConditionsXml = null;
Mscrm.RoleAssignment.$4 = "";
Mscrm.RoleAssignment.$1 = [];
Mscrm.RoleAssignment.$2 = null;
Mscrm.RoleAssignment.$0 = ""