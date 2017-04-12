Type.registerNamespace("Mscrm");
Mscrm.ConvertRuleMainSystemLibraryWebResource = function() {};
Mscrm.ConvertRuleMainSystemLibraryWebResource.form_onload = function() {
    var $v_0 = Mscrm.ConvertRuleMainSystemLibraryWebResource.$0(),
        $v_1 = Mscrm.ConvertRuleMainSystemLibraryWebResource.$2();
    $v_1.setVisible(true);
    Xrm.Page.getAttribute("name").setSubmitMode("always");
    var $v_2 = null,
        $v_3 = Xrm.Page.data.entity.attributes.get("statecode"),
        $v_4 = Xrm.Internal.isFeatureEnabled("FCB.AnyChanelToAnyEntityRecordCreation");
    !$v_4 && Mscrm.ConvertRuleMainSystemLibraryWebResource.$1(["ChannelProperties"], [false]);
    var $v_5 = false, $v_6 = "";
    Mscrm.ConvertRuleMainSystemLibraryWebResource.checkIfResolved_onchange();
    Mscrm.ConvertRuleMainSystemLibraryWebResource.sendAutomaticResponse_onchange();
    $v_5 = Xrm.Page.ui.getFormType() === 1;
    $v_6 = Mscrm.GlobalImported.CrmUri.create(window.location.search).toString();
    var $v_7 = Xrm.Page.ui.controls.get("channelpropertygroupid");
    if ($v_5) {
        $v_6 = CrmEncodeDecode.CrmUrlDecode($v_6);
        $v_2 = Mscrm.GlobalImported.CrmUri.create($v_6).get_query()["id"];
        $v_7.setDisabled(true)
    } else {
        $v_2 = Xrm.Page.data.entity.attributes.get("convertruleid");
        var $v_8 = $v_3.getValue() === 1 ? true : false;
        $v_7.setDisabled($v_8)
    }
    Mscrm.ConvertRuleMainSystemLibraryWebResource.setTabSectionsVisible($v_0);
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        $v_1.setDisabled(true);
        if (!$v_5) {
            var $v_9 = "";
            if (!$v_3.getValue()) $v_9 = Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_RRI");
            else $v_9 = Xrm.Internal.getResourceString("LOCID_ERROR_MISSING_ALL");
            Xrm.Page.ui.setFormNotification($v_9, "WARNING", "ConvertRuleErrorNotification")
        }
    }
};
Mscrm.ConvertRuleMainSystemLibraryWebResource
    .form_onsave = function() { Xrm.Page.getAttribute("name").setSubmitMode("dirty") };
Mscrm.ConvertRuleMainSystemLibraryWebResource.checkIfResolved_onchange = function() {
    var $v_0 = Mscrm.ConvertRuleMainSystemLibraryWebResource.$0();
    ($v_0.getValue() === 2 || $v_0.getValue() === 4202) &&
        Mscrm.ConvertRuleMainSystemLibraryWebResource
        .setControlVisibility(Xrm.Page.getControl("ResolvedSince"), Xrm.Page.getAttribute("checkifresolved"))
};
Mscrm.ConvertRuleMainSystemLibraryWebResource
    .sendAutomaticResponse_onchange = function() {
        Mscrm.ConvertRuleMainSystemLibraryWebResource
            .setControlVisibility(Xrm.Page.getControl("ResponseTemplateId"),
                Xrm.Page.getAttribute("sendautomaticresponse"))
    };
Mscrm.ConvertRuleMainSystemLibraryWebResource
    .setControlVisibility = function(Element, isFlag) { Element.setVisible(isFlag.getValue()) };
Mscrm.ConvertRuleMainSystemLibraryWebResource.sourceTypeCode_onchange = function() {
    var $v_0 = Mscrm.ConvertRuleMainSystemLibraryWebResource.$0();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        Mscrm.ConvertRuleMainSystemLibraryWebResource.$3();
        Mscrm.ConvertRuleMainSystemLibraryWebResource.setTabSectionsVisible($v_0);
        Mscrm.ConvertRuleMainSystemLibraryWebResource.checkIfResolved_onchange()
    }
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.setTabSectionsVisible = function(sourceTypeCode) {
    var $v_0 = ["SocialMonitoringCaseConditions", "EmailCaseConditions", "AutoResponseSettings"],
        $v_1 = true,
        $v_2,
        $v_3 = Xrm.Page.data.entity.attributes.get("statecode");
    switch (sourceTypeCode.getValue()) {
    case 1:
    case 4216:
        $v_2 = [$v_1, !$v_1, !$v_1];
        break;
    case 2:
    case 4202:
        $v_2 = [!$v_1, $v_1, $v_1];
        var $v_4 = Xrm.Page.getControl("SendAutomaticResponse");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_4)) {
            var $v_5 = $v_3.getValue() === 1 ? true : false;
            $v_4.setDisabled($v_5);
            $v_4.setVisible(true)
        }
        break;
    default:
        $v_2 = [!$v_1, !$v_1, !$v_1];
        break
    }
    Mscrm.ConvertRuleMainSystemLibraryWebResource.$1($v_0, $v_2)
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.$1 = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.length && $p0.length === $p1.length; $v_0++) {
        var $v_1 = Xrm.Page.ui.tabs.get("general"), $v_2 = $v_1.sections.get($p0[$v_0]);
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_2.setVisible($p1[$v_0])
    }
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.$0 = function() {
    var $v_0 = Xrm.Internal.isFeatureEnabled("FCB.AnyChanelToAnyEntityRecordCreation"), $v_1 = null;
    if ($v_0) $v_1 = Xrm.Page.data.entity.attributes.get("sourcechanneltypecode");
    else $v_1 = Xrm.Page.data.entity.attributes.get("sourcetypecode");
    return $v_1
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.$2 = function() {
    var $v_0 = Xrm.Internal.isFeatureEnabled("FCB.AnyChanelToAnyEntityRecordCreation"), $v_1 = null;
    if ($v_0) $v_1 = Xrm.Page.getControl("sourcechanneltypecode");
    else $v_1 = Xrm.Page.getControl("sourcetypecode");
    return $v_1
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.channelPropertyGroupId_setadditionalparams = function(context) {
    var $v_0 = Mscrm.ConvertRuleMainSystemLibraryWebResource.$0();
    if (Xrm.Page.context.client.getClient() !== "Mobile") {
        var $v_1 = Xrm.Page.ui.controls.get("channelpropertygroupid"),
            $v_2 = '<filter type="and"><condition attribute="regardingtypecode" operator="like" value="' +
                CrmEncodeDecode.CrmXmlAttributeEncode($v_0.getValue().toString()) +
                '"/></filter>';
        $v_1.addCustomFilter($v_2)
    }
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.$3 = function() {
    for (var $v_0 = [
                 "sendautomaticresponse", "responsetemplateid", "allowunknownsender", "checkactiveentitlement",
                 "checkifresolved", "resolvedsince", "checkblockedsocialprofile", "checkdirectmessages"
             ],
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) {
        var $v_2 = Xrm.Page.getAttribute($v_0[$v_1]);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            switch ($v_0[$v_1]) {
            case "resolvedsince":
            case "responsetemplateid":
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue()) && $v_2.setValue(null);
                break;
            default:
                $v_2.getValue() && $v_2.setValue(0);
                break
            }
    }
};
Mscrm.ConvertRuleMainSystemLibraryWebResource.registerClass("Mscrm.ConvertRuleMainSystemLibraryWebResource");
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.ConvertRuleMainSystemLibraryWebResource.form_onload;
Mscrm.Form_onsave = Mscrm.ConvertRuleMainSystemLibraryWebResource.form_onsave;
Mscrm.CheckIfResolved_onchange = Mscrm.ConvertRuleMainSystemLibraryWebResource.checkIfResolved_onchange;
Mscrm.SendAutomaticResponse_onchange = Mscrm.ConvertRuleMainSystemLibraryWebResource.sendAutomaticResponse_onchange;
Mscrm.sourcetypecode_onchange = Mscrm.ConvertRuleMainSystemLibraryWebResource.sourceTypeCode_onchange;
Mscrm.channelpropertygroupid_setadditionalparams = Mscrm.ConvertRuleMainSystemLibraryWebResource
    .channelPropertyGroupId_setadditionalparams;
Mscrm.SetControlVisibility = Mscrm.ConvertRuleMainSystemLibraryWebResource.setControlVisibility