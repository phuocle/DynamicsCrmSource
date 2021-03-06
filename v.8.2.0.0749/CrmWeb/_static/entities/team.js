Type.registerNamespace("Mscrm");
Mscrm.Team = function() {};
Mscrm.Team.onLoad = function() {
    var $v_0 = Xrm.Page.getAttribute("teamtype"), $v_1 = $v_0.getValue();
    1 === $v_1 && Mscrm.Team.$0(true);
    typeof refreshRibbon !== "undefined" && refreshRibbon()
};
Mscrm.Team.setTeamType = function() {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return;
    var $v_1 = Xrm.Page.getAttribute("teamtype"), $v_2 = $v_1.getValue();
    if (!Mscrm.Team.$1($v_0, $v_2)) {
        var $v_3 = $v_2 === 1 ? 0 : 1;
        $v_1.setValue($v_3);
        return
    }
    if (1 === $v_2) Mscrm.Team.$0(true);
    else Mscrm.Team.$0(false);
    typeof refreshRibbon !== "undefined" && refreshRibbon()
};
Mscrm.Team.$1 = function($p0, $p1) {
    var $v_0 = new RemoteCommand("OwnerManager", "SetTeamType", null);
    $v_0.SetParameter("teamId", $p0);
    $v_0.SetParameter("teamType", $p1);
    var $v_1 = $v_0.Execute(), $v_2 = $v_1.ReturnValue;
    if (1 === $v_2) {
        alert(TEAM_ACCESS_NO_APPLY_WITH_ROLES);
        return false
    }
    return true
};
Mscrm.Team.$0 = function($p0) {
    var $v_0 = $get("navRoles"), $v_1 = $get("navFieldSecurityProfiles");
    if ($p0) {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.FormNavControl.disableNavLinkForElement($v_0);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && Mscrm.FormNavControl.disableNavLinkForElement($v_1)
    } else {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && Mscrm.FormNavControl.enableNavLinkForElement($v_0);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && Mscrm.FormNavControl.enableNavLinkForElement($v_1)
    }
};
Mscrm.Team.registerClass("Mscrm.Team")