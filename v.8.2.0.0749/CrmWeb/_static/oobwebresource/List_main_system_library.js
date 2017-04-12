Type.registerNamespace("Mscrm");
Mscrm.ListMainSystemLibraryWebResource = function() {};
Mscrm.ListMainSystemLibraryWebResource.listtype_onchange = function() { Mscrm.ListCommands.disableLockStatus() };
Mscrm.ListMainSystemLibraryWebResource.createdfromcode_onchange = function() { Mscrm.ListCommands.setVisibleSubGrid() };
Mscrm.ListMainSystemLibraryWebResource.formOnLoad = function() {
    Mscrm.ListCommands.setVisibleSubGrid();
    Mscrm.ListCommands.disableLockStatus()
};
Mscrm.ListCommandAction = function() {};
Mscrm.ListCommandAction.addListToCampaign = function() { Mscrm.ListCommands.addListToCampaign() };
Mscrm.ListCommandAction.createMiniCampaign = function() { Mscrm.ListCommands.createMiniCampaign() };
Mscrm.ListCommandAction.mailMergeList = function() { Mscrm.ListCommands.mailMergeList() };
Mscrm.ListCommandAction.manageMembersForm = function(form) {
    Mscrm.ListCommands.listActionManageMembersForm(form,
        Xrm.Page.getAttribute("createdfromcode"),
        Xrm.Page.getAttribute("type"))
};
Mscrm.ListCommandAction.copyDynamicListToStatic = function(id) { Mscrm.ListCommands.copyDynamicListToStatic(id) };
Mscrm.ListCommandAction.createOpportunityForMembers = function(gridControl) {
    Mscrm.ListCommands.createOpportunityForMembers(gridControl)
};
Mscrm.ListCommandAction.copyTo = function(gridControl, records, entityTypeCode) {
    Mscrm.ListCommands.copyTo(gridControl, records, entityTypeCode)
};
Mscrm.ListCommandAction.addToCampaign = function(gridControl, records, entityTypeCode) {
    Mscrm.ListCommands.addToCampaign(gridControl, records, entityTypeCode)
};
Mscrm.ListCommandAction.copyToList = function(gridControl, records, entityTypeCode) {
    var $v_0 = "copyto", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["list"];
    var $v_3 = {};
    $v_3["listType"] = "static";
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.additionalParams = $v_3;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    $v_1.defaultViewId = "577EA96E-B1F6-499b-98A7-ABB5BE8233F9";
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) {
            var $v_4 = 400, $v_5 = 250;
            if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0) || !$p1_0.length) return;
            var $v_6 = $p1_0[0].id,
                $v_7 = $p1_0[0].type.toString(),
                $v_8 = Mscrm.InternalUtilities.GridUtilities
                    .generateStandardActionUri($v_0, entityTypeCode, records.length);
            $v_8.get_query()["itemObjectId"] = $v_6;
            $v_8.get_query()["itemObjectTypeCode"] = $v_7;
            $v_4 = Mscrm.InternalUtilities.JSTypes.isNull($v_4) ? 400 : $v_4;
            $v_5 = Mscrm.InternalUtilities.JSTypes.isNull($v_5) ? 250 : $v_5;
            Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_8, records, $v_4, $v_5, null)
        })
};
Mscrm.ListCommandAction.addToCampaignCommand = function(gridControl, records, entityTypeCode) {
    var $v_0 = "addtocampaign", $v_1 = new Xrm.LookupOptions, $v_2;
    $v_2 = ["campaign"];
    $v_1.lookupStyle = "single";
    $v_1.lookupTypes = $v_2;
    $v_1.showNew = true;
    $v_1.showProperties = true;
    Xrm.Internal.lookupObjects($v_1,
        function($p1_0) {
            var $v_3 = 400, $v_4 = 250;
            if (Mscrm.InternalUtilities.JSTypes.isNull($p1_0) || !$p1_0.length) return;
            var $v_5 = $p1_0[0].id,
                $v_6 = $p1_0[0].type.toString(),
                $v_7 = Mscrm.InternalUtilities.GridUtilities
                    .generateStandardActionUri($v_0, entityTypeCode, records.length);
            $v_7.get_query()["itemObjectId"] = $v_5;
            $v_7.get_query()["itemObjectTypeCode"] = $v_6;
            $v_3 = Mscrm.InternalUtilities.JSTypes.isNull($v_3) ? 400 : $v_3;
            $v_4 = Mscrm.InternalUtilities.JSTypes.isNull($v_4) ? 250 : $v_4;
            Mscrm.InternalUtilities.GridUtilities.executeStandardAction($v_7, records, $v_3, $v_4, null)
        })
};
Mscrm.ListMainSystemLibraryWebResource.registerClass("Mscrm.ListMainSystemLibraryWebResource");
Mscrm.ListCommandAction.registerClass("Mscrm.ListCommandAction");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.ListMainSystemLibraryWebResource.formOnLoad;
Mscrm.listtype_onchange = Mscrm.ListMainSystemLibraryWebResource.listtype_onchange;
Mscrm.createdfromcode_onchange = Mscrm.ListMainSystemLibraryWebResource.createdfromcode_onchange