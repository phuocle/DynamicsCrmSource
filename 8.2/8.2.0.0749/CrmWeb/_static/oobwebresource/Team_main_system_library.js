Type.registerNamespace("Mscrm");
Mscrm.TeamMainSystemLibraryWebResource = function() {};
Mscrm.TeamMainSystemLibraryWebResource.form_onload = function() {
    var $v_0 = Xrm.Page.getAttribute("teamtype"), $v_1 = $v_0.getValue();
    1 === $v_1 && Mscrm.TeamMainSystemLibraryWebResource.$0(true);
    Xrm.Page.ui.refreshRibbon()
};
Mscrm.TeamMainSystemLibraryWebResource.teamtype_onchange = function() {
    var $v_0 = Xrm.Page.data.entity.getId();
    if (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0)) return;
    var $v_1 = Xrm.Page.getAttribute("teamtype");
    Mscrm.TeamMainSystemLibraryWebResource.trySetTeamType($v_0, $v_1)
};
Mscrm.TeamMainSystemLibraryWebResource.trySetTeamType = function(teamId, teamType) {
    var $v_0 = teamType.getValue();
    if ($v_0 === 1) {
        var $v_1 =
            "<fetch version='1.0' mapping='logical'><entity name='teamroles'><attribute name='roleid' /><filter type='and'><condition attribute='teamid' operator='eq' value='" + CrmEncodeDecode.CrmXmlAttributeEncode(teamId) + "' /></filter></entity></fetch>";
        Xrm.Internal.messages.retrieveMultiple($v_1).then(function($p1_0) {
                var $v_2 = $p1_0.entityCollection;
                if ($v_2.get_count() > 0) {
                    Xrm.Utility.alertDialog(Xrm.Internal.getResourceString("TEAM_ACCESS_NO_APPLY_WITH_ROLES"), null);
                    var $v_3 = $v_0 === 1 ? 0 : 1;
                    teamType.setValue($v_3);
                    return
                } else Mscrm.TeamMainSystemLibraryWebResource.$1(teamId, teamType, $v_0)
            },
            function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
    } else Mscrm.TeamMainSystemLibraryWebResource.$1(teamId, teamType, $v_0)
};
Mscrm.TeamMainSystemLibraryWebResource.$1 = function($p0, $p1, $p2) {
    Xrm.Internal.messages.retrieve("team", $p0, ["teamtype"]).then(function($p1_0) {
            var $v_0 = $p1_0.entity;
            $v_0.initializeValue("teamtype", $p1, 5);
            $v_0.get_changedFieldNames().addRange(["teamtype"]);
            Xrm.Internal.messages.update($v_0);
            if (1 === $p2) Mscrm.TeamMainSystemLibraryWebResource.$0(true);
            else Mscrm.TeamMainSystemLibraryWebResource.$0(false);
            Xrm.Page.ui.refreshRibbon()
        },
        function($p1_0) { Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback($p1_0) })
};
Mscrm.TeamMainSystemLibraryWebResource.$0 = function($p0) {
    var $v_0 = Xrm.Page.getControl("navRoles"), $v_1 = Xrm.Page.getControl("navFieldSecurityProfiles");
    if ($p0) {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible(false);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible(false)
    } else {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setVisible(true);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $v_1.setVisible(true)
    }
};
Mscrm.TeamMainSystemLibraryWebResource.TeamType = function() {};
Mscrm.TeamMainSystemLibraryWebResource.TeamType.prototype = { owner: 0, access: 1 };
Mscrm.TeamMainSystemLibraryWebResource.TeamType.registerEnum("Mscrm.TeamMainSystemLibraryWebResource.TeamType", false);
Mscrm.TeamGridCommandActions = function() {};
Mscrm.TeamGridCommandActions.addTeamMembers = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
        .generateStandardActionUri("addtoteam", entityTypeCode, records.length);
    Mscrm.InternalUtilities.GridUtilities
        .executeStandardAction($v_0, records, 500, 225, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
};
Mscrm.TeamGridCommandActions.removeTeamMembers = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
        .generateStandardActionUri("removefromteam", entityTypeCode, records.length);
    Mscrm.InternalUtilities.GridUtilities
        .executeStandardAction($v_0, records, 540, 230, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
};
Mscrm.TeamGridCommandActions.manageTeamRoles = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.InternalUtilities.GridUtilities.generateStandardActionUri("role", entityTypeCode, records.length);
    Mscrm.InternalUtilities.GridUtilities
        .executeStandardAction($v_0, records, 500, 330, Mscrm.GridCommandActions.createRefreshGridCallback(gridControl))
};
Mscrm.TeamMainSystemLibraryWebResource.registerClass("Mscrm.TeamMainSystemLibraryWebResource");
Mscrm.TeamGridCommandActions.registerClass("Mscrm.TeamGridCommandActions");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.TeamMainSystemLibraryWebResource.form_onload;
Mscrm.teamtype_onchange = Mscrm.TeamMainSystemLibraryWebResource.teamtype_onchange