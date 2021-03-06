Type.registerNamespace("Mscrm");
Mscrm.CampaignMainSystemLibraryWebResource = function() {};
Mscrm.CampaignMainSystemLibraryWebResource.pricelistidSetadditionalparams = function() {
    var $v_0 = Xrm.Page.ui.controls.get("pricelevelid");
    Mscrm.CampaignMainSystemLibraryWebResource.$0($v_0)
};
Mscrm.CampaignMainSystemLibraryWebResource
    .proposedstartOnchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("proposedstart"),
                Xrm.Page.getAttribute("proposedend"),
                Xrm.Internal.getResourceString("LOCID_STARTDATE_GREATERTHAN_END"),
                Xrm.Page.getAttribute("proposedstart"))
    };
Mscrm.CampaignMainSystemLibraryWebResource
    .actualstartOnchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("actualstart"),
                Xrm.Page.getAttribute("actualend"),
                Xrm.Internal.getResourceString("LOCID_STARTDATE_GREATERTHAN_END"),
                Xrm.Page.getAttribute("actualstart"))
    };
Mscrm.CampaignMainSystemLibraryWebResource
    .proposedendOnchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("proposedstart"),
                Xrm.Page.getAttribute("proposedend"),
                Xrm.Internal.getResourceString("LOCID_ENDDATE_LESSTHAN_START"),
                Xrm.Page.getAttribute("proposedend"))
    };
Mscrm.CampaignMainSystemLibraryWebResource
    .actualendOnchange = function() {
        Mscrm.CommandBarActions
            .validateStartDateIsSmallerThanEndDate(Xrm.Page.getAttribute("actualstart"),
                Xrm.Page.getAttribute("actualend"),
                Xrm.Internal.getResourceString("LOCID_ENDDATE_LESSTHAN_START"),
                Xrm.Page.getAttribute("actualend"))
    };
Mscrm.CampaignMainSystemLibraryWebResource.formOnLoad = function() {
    Mscrm.InternalUtilities.Utilities.isTurboForm() && Mscrm.CampaignMainSystemLibraryWebResource.$1()
};
Mscrm.CampaignMainSystemLibraryWebResource.$0 = function($p0) {
    var $v_0 = null, $v_1 = "", $v_2 = null;
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data)) {
        $v_0 = Xrm.Page.getAttribute("transactioncurrencyid");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) $v_2 = $v_0.getValue()
    }
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) $v_1 = $v_2[0].id;
    var $v_3 = '<filter type="and"><condition attribute="transactioncurrencyid" operator="like" value="';
    $v_3 += CrmEncodeDecode.CrmXmlAttributeEncode($v_1);
    $v_3 += '"/></filter>';
    $p0.addCustomFilter($v_3)
};
Mscrm.CampaignMainSystemLibraryWebResource.$1 = function() {
    var $v_0 = Xrm.Page.ui.getFormType() === 1;
    if ($v_0) {
        var $v_1 = false, $v_2 = "extraqs", $v_3 = "template", $v_4 = Xrm.Page.context.getQueryStringParameters();
        if ($v_2 in $v_4) {
            var $v_6 = $v_4[$v_2].toString();
            $v_1 = $v_6.indexOf("template=1") > 0
        } else if ($v_3 in $v_4) {
            var $v_7 = $v_4[$v_3].toString();
            $v_1 = $v_7 === "1" ? true : false
        }
        var $v_5 = window.location.href ? window.location.href.indexOf("/form/page.aspx") >= 0 : false;
        if ($v_5 && document.parentWindow.parent)
            $v_1 = CrmEncodeDecode.CrmUrlDecode(document.parentWindow.parent.location.href).indexOf("template=1") > 0;
        if ($v_1) {
            var $v_8 = Xrm.Internal.getResourceString("LOCID_CAMPAIGN_NEWTEMPLATE");
            Xrm.Internal.setFormEntityName($v_8);
            var $v_9 = "istemplate",
                $v_A = String.format("header_{0}", $v_9),
                $v_B = Xrm.Page.ui.controls.get($v_A),
                $v_C = Xrm.Page.getAttribute($v_9);
            if ($v_C && $v_B) {
                $v_B.setDisabled(false);
                $v_C.setValue(1);
                $v_B.setDisabled(true)
            } else $v_5 && $v_C && $v_C.setValue(1)
        }
    }
};
Mscrm.CampaignMainSystemLibraryWebResource.registerClass("Mscrm.CampaignMainSystemLibraryWebResource");
Mscrm.pricelistid_setadditionalparams = Mscrm.CampaignMainSystemLibraryWebResource.pricelistidSetadditionalparams;
Mscrm.proposedstart_onchange = Mscrm.CampaignMainSystemLibraryWebResource.proposedstartOnchange;
Mscrm.actualstart_onchange = Mscrm.CampaignMainSystemLibraryWebResource.actualstartOnchange;
Mscrm.proposedend_onchange = Mscrm.CampaignMainSystemLibraryWebResource.proposedendOnchange;
Mscrm.actualend_onchange = Mscrm.CampaignMainSystemLibraryWebResource.actualendOnchange