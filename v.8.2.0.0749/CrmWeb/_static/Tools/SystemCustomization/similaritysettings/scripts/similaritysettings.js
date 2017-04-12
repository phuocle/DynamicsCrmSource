Type.registerNamespace("Mscrm");
Mscrm.SimilarityRuleState = function() {};
Mscrm.SimilarityRuleState.prototype = { draft: 0, active: 1 };
Mscrm.SimilarityRuleState.registerEnum("Mscrm.SimilarityRuleState", false);
Mscrm.SimilaritySettingsGrid = function() {};
Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings = function() {
    if (!Mscrm.SimilaritySettingsGrid.$0) {
        Mscrm.SimilaritySettingsGrid.$0 = $find("gridSimilarityRules");
        if (!Mscrm.SimilaritySettingsGrid.$0) throw Error.argumentNull("gridControl is null")
    }
    return Mscrm.SimilaritySettingsGrid.$0
};
Mscrm.SimilaritySettingsGrid.deleteRuleFromGridCommand = function() {
    if (Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedIds().length < 1) {
        alert(window.LOCID_ACTION_SELECTONESIMILARITYRULE);
        return
    }
    for (var $v_0 = new Array(Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords().length),
        $v_1 = 0;
        $v_1 < Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords().length;
        $v_1++) {
        var $v_2 = Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords()[$v_1];
        $v_2.TypeCode = Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_entityTypeCode();
        $v_0[$v_1] = $v_2
    }
    Mscrm.GridRibbonActions.deleteRecords(Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings(),
        $v_0,
        Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_entityTypeCode())
};
Mscrm.SimilaritySettingsGrid.activateFromGridCommand = function() { Mscrm.SimilaritySettingsGrid.$2(1) };
Mscrm.SimilaritySettingsGrid.deactivateFromGridCommand = function() { Mscrm.SimilaritySettingsGrid.$2(0) };
Mscrm.SimilaritySettingsGrid.editExistingRuleFromGridCommand = function() {
    if (Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedIds().length !== 1) {
        alert(window.LOCID_ACTION_SELECTONESIMILARITYRULE);
        return
    }
    var $v_0 = Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedIds()[0];
    openObj(9951, $v_0, "")
};
Mscrm.SimilaritySettingsGrid
    .onSimilaritySettingsGridClick = function(sender, args) { sender && openObj(9951, args.objectID, "") };
Mscrm.SimilaritySettingsGrid.showDependenciesFromGridCommand = function() { return true };
Mscrm.SimilaritySettingsGrid.showManagedPropertiesFromGridCommand = function() { return true };
Mscrm.SimilaritySettingsGrid.activateSimilarityRule = function(entityId, entityLogicalName) {
    Mscrm.SimilaritySettingsGrid.$1(entityId, entityLogicalName, 1)
};
Mscrm.SimilaritySettingsGrid.deactivateSimilarityRule = function(entityId, entityLogicalName) {
    Mscrm.SimilaritySettingsGrid.$1(entityId, entityLogicalName, 0)
};
Mscrm.SimilaritySettingsGrid.$2 = function($p0) {
    for (var $v_0 = Xrm.Internal.getEntityName(Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings()
                 .get_entityTypeCode()),
        $v_1 = "statecode",
        $v_2 = 0,
        $v_3 = new Array(Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords().length),
        $v_4 = 0;
        $v_4 < Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords().length;
        $v_4++) {
        var $v_5 = Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords()[$v_4],
            $v_6 = new Array(1),
            $v_7 = {},
            $v_8 = {};
        $v_6[0] = $v_1;
        $v_7[$v_1] = 12;
        $v_8[$v_1] = $p0;
        var $v_9 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid($v_5.Id)),
            $v_A = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_9,
                    $v_8,
                    $v_7,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
        $v_A.get_changedFieldNames().addRange($v_6);
        $v_2++;
        Xrm.Internal.messages.update($v_A).then(function($p1_0) {
                $v_2 === Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().get_selectedRecords().length &&
                    Mscrm.SimilaritySettingsGrid.get_gridSimilaritySettings().Refresh()
            },
            Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
    }
};
Mscrm.SimilaritySettingsGrid.$1 = function($p0, $p1, $p2) {
    var $v_0 = $p1, $v_1 = "statecode", $v_2 = 0, $v_3 = new Array(1), $v_4 = {}, $v_5 = {};
    $v_3[0] = $v_1;
    $v_4[$v_1] = 12;
    $v_5[$v_1] = $p2;
    var $v_6 = new Xrm.Objects.EntityReference($v_0, new Microsoft.Crm.Client.Core.Framework.Guid($p0)),
        $v_7 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
            .EntityRecord($v_6,
                $v_5,
                $v_4,
                {},
                {},
                new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
    $v_7.get_changedFieldNames().addRange($v_3);
    $v_2++;
    Xrm.Internal.messages.update($v_7).then(function($p1_0) { window.location.reload() },
        Mscrm.InternalUtilities.ClientApiUtility.actionFailedCallback)
};
Mscrm.SimilaritySettingsGrid.registerClass("Mscrm.SimilaritySettingsGrid");
Mscrm.SimilaritySettingsGrid.$0 = null