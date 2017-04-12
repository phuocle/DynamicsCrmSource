Type.registerNamespace("Mscrm");
Mscrm.ActivityHelper = function() {};
Mscrm.ActivityHelper.get_entityAttributes = function() { return Xrm.Page.data.entity.attributes };
Mscrm.ActivityHelper.get_entityId = function() { return Xrm.Page.data.entity.getId() };
Mscrm.ActivityHelper.execute = function() {
    Mscrm.ActivityHelper.$0();
    Mscrm.ActivityHelper.checkForPromoteOption()
};
Mscrm.ActivityHelper.checkForPromoteOption = function() {
    if (!Mscrm.ActivityHelper.promoteToResponse) return;
    var $v_0 = false,
        $v_1 = false,
        $v_2 = false,
        $v_3 = Xrm.Page.data.entity.attributes.get("regardingobjectid"),
        $v_4 = Xrm.Page.data.entity.attributes.get("directioncode"),
        $v_5 = Xrm.Page.data.entity.attributes.get("from"),
        $v_6 = Xrm.Page.data.entity.attributes.get("to"),
        $v_7 = Xrm.Page.data.entity.attributes.get("requiredattendees");
    $v_0 = Mscrm.ActivityHelper.$1($v_3);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4
            .getValue())) $v_2 = $v_4.getValue().toString() === "0" ? true : false;
    var $v_8 = null;
    if ($v_2) {
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5))
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_5.getValue())) $v_8 = $v_5.getValue()
    } else if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_6) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_6.getValue())) $v_8 = $v_6.getValue();
    var $v_9 = Xrm.Page.data.entity.getEntityName();
    if ($v_9 === "appointment")
        if (!Mscrm.InternalUtilities.JSTypes
            .isNull($v_7) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_7.getValue())) $v_8 = $v_7.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_8) && $v_8.length === 1) {
        var $v_A = $v_8[0];
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_A))
            if ($v_A
                .entityType ===
                "account" ||
                $v_A.entityType === "contact" ||
                $v_A.entityType === "lead") $v_1 = true
    }
    if ($v_0 && $v_1)
        try {
            Xrm.Page.ui.refreshRibbon()
        } catch ($$e_B) {
        }
};
Mscrm.ActivityHelper.$0 = function() {
    (Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.ActivityHelper.get_entityId()) ||
            Mscrm.ActivityHelper.get_entityId() === "{00000000-0000-0000-0000-000000000000}") &&
        Mscrm.ActivityHelper.setDefaultValues()
};
Mscrm.ActivityHelper.$1 = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull($p0))
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p0.getValue())) {
            var $v_0 = $p0.getValue();
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.length === 1) {
                var $v_1 = $v_0[0];
                if (!Mscrm.InternalUtilities.JSTypes
                    .isNull($v_1))
                    if ($v_1.entityType === "campaignactivity" || $v_1.entityType === "bulkoperation") return true
            }
        }
    return false
};
Mscrm.ActivityHelper.setDefaultValues = function() {
    var $v_0 = Mscrm.ActivityHelper.get_entityAttributes().get("ownerid");
    try {
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(Mscrm.ActivityHelper.getCurrentUser())
    } catch ($$e_1) {
    }
};
Mscrm.ActivityHelper.getCurrentUser = function() {
    var $v_0 = new Array(1);
    $v_0[0] = new Xrm.LookupObject;
    $v_0[0].id = Xrm.Page.context.getUserId();
    $v_0[0].name = Xrm.Page.context.getUserName();
    $v_0[0].entityType = "systemuser";
    return $v_0
};
Mscrm.ActivityHelper.setOrganizer = function() {
    try {
        var $v_0 = Mscrm.ActivityHelper.get_entityAttributes().get("organizer");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(Mscrm.ActivityHelper.getCurrentUser())
    } catch ($$e_1) {
    }
};
Mscrm.ActivityHelper.setFocusOnSubject = function() {
    var $v_0 = Xrm.Page.ui.controls.get("subject");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !$v_0.getDisabled())
        try {
            $v_0.setFocus()
        } catch ($$e_1) {
        }
};
Mscrm.ActivityHelper.registerClass("Mscrm.ActivityHelper");
Mscrm.ActivityHelper.promoteToResponse = false;
Mscrm.ActivityHelper.emptyGuid = "{00000000-0000-0000-0000-000000000000}"