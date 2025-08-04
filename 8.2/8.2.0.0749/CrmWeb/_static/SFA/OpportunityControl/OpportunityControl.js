Type.registerNamespace("Mscrm");
Mscrm.OpportunityQOIControl = function() {};
Mscrm.OpportunityQOIControl.setDefaultPricelistForUser = function(entityName, priceLevelAttributeName) {
    var $v_0 = "",
        $v_1 = "",
        $v_2 = new Xrm.LookupObject,
        $v_3 = Xrm.Page.data.entity.attributes.get(priceLevelAttributeName);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_3) &&
        Mscrm.InternalUtilities.JSTypes.isNull($v_3.getValue()) &&
        Xrm.Internal.getResourceString("USE_INBUILT_RULE_FOR_PRICELIST") === "true") {
        var $v_4 = [priceLevelAttributeName, "name"],
            $v_5 = new Microsoft.Crm.Client.Core.Storage.Common.ColumnSet($v_4);
        Xrm.Internal.messages.getDefaultPriceLevel(entityName, $v_5).then(function($p1_0) {
                var $v_6 = $p1_0;
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_6) &&
                    !Mscrm.InternalUtilities.JSTypes.isNull($v_6.priceLevels))
                    if ($v_6.priceLevels.get_count() === 1) {
                        $v_0 = $v_6.priceLevels.get_item(0).getValue("pricelevelid").toString();
                        $v_1 = $v_6.priceLevels.get_item(0).getValue("name").toString();
                        $v_2.id = $v_0;
                        $v_2.name = $v_1;
                        $v_2.entityType = "pricelevel";
                        var $v_7 = [$v_2];
                        $v_3.setValue($v_7)
                    }
            },
            null)
    }
};
Mscrm.OpportunityQOIControl.registerClass("Mscrm.OpportunityQOIControl");
Type.registerNamespace("Mscrm");
Mscrm.setDefaultPricelistForUser = Mscrm.OpportunityQOIControl.setDefaultPricelistForUser