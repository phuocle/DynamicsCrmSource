Type.registerNamespace("Mscrm");
Mscrm.PositionActions = function() {};
Mscrm.PositionActions.changeParentPosition = function(gridControl, records, entityTypeCode) {
    var $v_0 = Mscrm.InternalUtilities.GridUtilities
            .generateStandardActionUri("changeposition", entityTypeCode, records.length),
        $v_1 = 400,
        $v_2 = 225;
    Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_0, records, $v_1, $v_2, null)
};
Mscrm.PositionActions.registerClass("Mscrm.PositionActions")