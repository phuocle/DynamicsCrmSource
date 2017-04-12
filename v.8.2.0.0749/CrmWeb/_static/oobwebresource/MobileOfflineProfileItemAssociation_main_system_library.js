Type.registerNamespace("Mscrm");
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource = function() {};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.form_OnLoad = function() {
    var $v_0 = Xrm.Page.getControl("selectedrelationshipsschema"),
        $v_1 = Xrm.Page.getControl("relationshipname"),
        $v_2 = $v_0.getAttribute(),
        $v_3 = Xrm.Page.ui.getFormType();
    if ($v_3 === 1 && !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
        $v_0.setVisible(true);
        var $v_4 = Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$3();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_4)) {
            var $v_5 = 0, $$dict_8 = $v_4;
            for (var $$key_9 in $$dict_8) {
                var $v_6 = { key: $$key_9, value: $$dict_8[$$key_9] },
                    $v_7 = new Xrm.OptionSetItem($v_5, $v_6.value.toString());
                Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$0[$v_5.toString()] = $v_6.key
                    .toString();
                $v_0.addOption($v_7);
                $v_2.addOption($v_7);
                $v_5++
            }
        }
    } else {
        $v_1.setVisible(true);
        $v_0.setVisible(false);
        var $v_8 = Xrm.Page.data.entity.attributes.get("relationshipname");
        $v_8.setRequiredLevel("systemrequired");
        Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$2()
    }
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.form_OnSave = function() {
    var $v_0 = Xrm.Page.data.entity.attributes.get("relationshipdisplayname"),
        $v_1 = Xrm.Page.getControl("selectedrelationshipsschema"),
        $v_2 = $v_1.getAttribute();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_3 = $v_2.getValue().toString(), $v_4 = $v_2.getText().toString();
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3) &&
            !Mscrm.InternalUtilities._Script
            .isNullOrUndefined(Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$0[$v_3]) &&
            $v_0.setValue(Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$0[$v_3]);
        $v_2.clearOptions();
        $v_1.clearOptions();
        $v_2.setRequiredLevel("none");
        var $v_5 = Xrm.Page.data.entity.attributes.get("relationshipname"),
            $v_6 = Xrm.Page.getControl("relationshipname");
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_4) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_5) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_6)) {
            $v_5.setRequiredLevel("systemrequired");
            $v_5.setValue($v_4);
            $v_6.setVisible(true);
            $v_1.setVisible(false);
            Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$2()
        }
        Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$0 = null
    }
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$3 = function() {
    var $v_0 = {}, $v_1 = Xrm.Page.data.entity.attributes.get("relationshipdata");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) {
        var $v_2 = $v_1.getValue().toString();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_2)) $v_0 = JSON.parse($v_2)
    }
    return $v_0
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$2 = function() {
    var $v_0 = false, $v_1 = 1;
    if (Xrm.Internal.isFeatureEnabled("FCB.MocaOfflineProfileRuleEnhancements")) $v_0 = true;
    var $v_2;
    if (!Xrm.Internal.isTurboForm()) $v_2 = window.self;
    else $v_2 = window.parent;
    var $v_3 = $v_2.document.getElementById("mobileOfflineProfileItemAssociationFilters"),
        $v_4 = $v_2.document.getElementById("mobileOfflineProfileItemAssociationFiltersdiv"),
        $v_5 = $v_2.document.getElementById("relationshipname"),
        $v_6 = $v_2.document.getElementById("filterLabeldiv"),
        $v_7 = $v_5.parentNode.parentNode,
        $v_8 = $v_7.nextSibling;
    if (!Mscrm.InternalUtilities._Script
        .isNullOrUndefined($v_5)) $v_1 += parseInt($v_5.getAttribute("tabindex").toString());
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3) &&
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_4)) $v_8.style.display = $v_0 ? "table-row" : "none";
    else if ($v_0) {
        var $v_9 = Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$4($v_1);
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_8.children) &&
            $v_8.children.length >= 2 &&
            !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_8.children[1])) {
            $v_8.children[1].appendChild($v_9);
            if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_8.children[0])) {
                var $v_A = document.createElement("div");
                $v_A.id = "mobileOfflineProfileItemAssociationFiltersdiv";
                $v_A.innerText = Xrm.Internal.getResourceString("MobileOfflineProfile_DataDownloadFilter");
                $v_8.children[0].appendChild($v_A)
            }
        }
    }
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$6 = function() {
    var $v_0 = new Sys.StringBuilder, $v_1 = Xrm.Page.getAttribute("profileitemassociationentityfilter");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) $v_0.append($v_1.getValue().toString());
    else {
        var $v_2 = Xrm.Page.data.entity.attributes.get("relationshipdisplayname"),
            $v_3 = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>";
        $v_0.append($v_3);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
            $v_0.append("<entity name='");
            $v_0.append(CrmEncodeDecode.CrmXmlEncode(Xrm.Internal.getEntityName($v_2.getValue())));
            $v_0.append("'></entity>")
        }
        $v_0.append("</fetch>")
    }
    return $v_0.toString()
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$4 = function($p0) {
    var $v_0 = document.createElement("div");
    $v_0.id = "mobileOfflineProfileItemAssociationFiltersdiv";
    $v_0.className = "ms-crm-Inline-Value";
    var $v_1 = document.createElement("a");
    $v_1.id = "mobileOfflineProfileItemAssociationFilters";
    $v_1.style.cursor = "pointer";
    $v_1.style.textDecorationUnderline = "underline";
    $v_1.innerHTML = Xrm.Internal.getResourceString("LOCID_MOPI_ASSOCIATION_FILTER");
    $v_1.setAttribute("tabindex", $p0.toString());
    $addHandler($v_1, "click", Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$1);
    $addHandler($v_1, "keypress", Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$5);
    $v_0.appendChild($v_1);
    return $v_0
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$1 = function($p0) {
    var $v_0 = "/mobileofflineprofileitem/mobileofflineprofileitemfilters.aspx",
        $v_1 = Mscrm.GlobalImported.CrmUri.create($v_0);
    $v_1.get_query()["relationshipDisplayName"] = Xrm.Page.data.entity.attributes.get("relationshipdisplayname")
        .getValue();
    $v_1.get_query()["fromPage"] = "MobileOfflineProfileItemAssociationFilters";
    $v_1.get_query()["isReadOnly"] = Xrm.Page.ui.getFormType() === 3 || Xrm.Page.ui.getFormType() === 4;
    var $v_2 = Xrm.Page.data.entity.attributes.get("mobileofflineprofileitemid");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2.getValue())) {
        var $v_5 = $v_2.getValue();
        if ($v_5.length === 1) $v_1.get_query()["mobileOfflineProfileItemId"] = $v_5[0].id
    }
    var $v_3 = new Xrm.DialogOptions;
    $v_3.width = 600;
    $v_3.height = 500;
    var $v_4 = {};
    $v_4["sFilterXml"] = Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$6();
    Xrm.Internal.openDialog($v_1.toString(),
        $v_3,
        $v_4,
        null,
        Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$7);
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource
    .$5 = function($p0) {
        if (!IsNull($p0) && !IsNull($p0.charCode))
            $p0.charCode === 13 && Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$1($p0)
    };
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$7 = function($p0) {
    var $v_0 = Xrm.Page.getAttribute("profileitemassociationentityfilter");
    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        $v_0.setValue($p0)
};
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource
    .registerClass("Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource");
Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.$0 = {};
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.form_OnLoad;
Mscrm.Form_onsave = Mscrm.MobileOfflineProfileItemAssociationMainSystemLibraryWebResource.form_OnSave