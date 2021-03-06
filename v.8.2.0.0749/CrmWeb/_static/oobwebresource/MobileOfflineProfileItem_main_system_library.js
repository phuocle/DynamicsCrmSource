Type.registerNamespace("Mscrm");
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource = function() {};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.form_OnLoad = function() {
    var $v_0 = Xrm.Page.getAttribute("selectedentitytypecode"),
        $v_1 = Xrm.Page.data.entity.attributes.get("recorddistributioncriteria").getValue(),
        $v_2 = Xrm.Page.getAttribute("recorddistributioncriteria");
    $v_2.addOnChange(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$3);
    Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
        .$3(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$8(false));
    $v_0.addOnChange(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$B);
    var $v_3 = Xrm.Page.getControl("recorddistributioncriteria");
    Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$4 = $v_3.getAttribute();
    Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$1 = Mscrm
        .MobileOfflineProfileItemMainSystemLibraryWebResource.$4.getOptions();
    var $v_4 = Xrm.Page.getControl("selectedentitytypecode"),
        $v_5 = $v_4.getAttribute(),
        $v_6 = Xrm.Page.ui.getFormType();
    $v_5.clearOptions();
    $v_4.clearOptions();
    for (var $v_7 = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$6(), $v_8 = $v_7["entities"], $v_9 = 0;
        $v_9 < $v_8.length;
        $v_9++) {
        var $v_A = $v_8[$v_9],
            $v_B = new Xrm.OptionSetItem(parseInt($v_A["objectTypeCode"].toString()), $v_A["displayName"].toString());
        $v_4.addOption($v_B);
        $v_5.addOption($v_B)
    }
    if ($v_6 !== 1) {
        Mscrm.InternalUtilities._Script.isNullOrUndefined(Xrm.Page.data.entity.attributes.get("selectedentitytypecode")
                .getValue()) &&
            $v_5.setValue(Xrm.Page.data.entity.attributes.get("entityobjecttypecode").getValue());
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$A(true, $v_1)
    } else Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$H($v_8.length);
    Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.selectedEntityTypeCode_onchange();
    Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$5($v_1)
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.selectedEntityTypeCode_onchange = function() {
    var $v_0 = Xrm.Page.getControl("recorddistributioncriteria"),
        $v_1 = Xrm.Page.getAttribute("selectedentitytypecode"),
        $v_2 = $v_1.getValue();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        !Mscrm.InternalUtilities.JSTypes
        .isNullOrEmptyString($v_2.toString()))
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$7($v_0, false);
    else Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$7($v_0, true)
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.openOrgFilterLink = function() {
    var $v_0 = "/tools/systemcustomization/entities/mobileofflinefilters.aspx",
        $v_1 = Mscrm.GlobalImported.CrmUri.create($v_0);
    $v_1.get_query()["entityCode"] = Xrm.Page.getAttribute("selectedentitytypecode").getValue();
    $v_1.get_query()["parentFormObjectTypeCode"] = 9867;
    var $v_2 = new Xrm.DialogOptions;
    $v_2.width = 600;
    $v_2.height = 500;
    var $v_3 = {};
    $v_3["sFilterXml"] = "</fetch>";
    Xrm.Internal.openDialog($v_1.toString(), $v_2, $v_3, null, null)
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .form_OnSave = function() {
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
            .$3(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$8(true))
    };
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .$7 = function($p0, $p1) { !Mscrm.InternalUtilities.JSTypes.isNull($p0) && $p0.setDisabled($p1) };
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$3 = function($p0) {
    var $v_0 = 2;
    Mscrm.InternalUtilities._Script.isNullOrUndefined($p0.getSharedVariable("isSave")) &&
        $p0.setSharedVariable("isSave", false);
    var $v_1 = $p0
            .getSharedVariable("isSave"),
        $v_2 = Xrm.Page.data.entity.attributes.get("recorddistributioncriteria");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_2.getValue())) {
        var $v_3 = $v_2.getValue();
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$5($v_3);
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$I($v_3, $v_1);
        var $v_4 = !(!Mscrm.InternalUtilities.JSTypes.isNull($v_2) && $v_3 !== $v_0);
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$F($v_4, $v_1)
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$5 = function($p0) {
    var $v_0 = false, $v_1 = 1;
    if (Xrm.Internal.isFeatureEnabled("FCB.MocaOfflineProfileRuleEnhancements")) $v_0 = $p0 === 3;
    var $v_2;
    if (!Xrm.Internal.isTurboForm()) $v_2 = window.self;
    else $v_2 = window.parent;
    var $v_3 = $v_2.document.getElementById("mobileOfflineProfileItemFilters"),
        $v_4 = $v_2.document.getElementById("recorddistributioncriteriadiv"),
        $v_5 = $v_2.document.getElementById("recorddistributioncriteria"),
        $v_6 = $v_5.parentNode.parentNode,
        $v_7 = $v_6.nextSibling;
    if (!Mscrm.InternalUtilities._Script
        .isNullOrUndefined($v_5)) $v_1 += parseInt($v_5.getAttribute("tabindex").toString());
    if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_3) &&
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_4)) $v_7.style.display = $v_0 ? "table-row" : "none";
    else {
        var $v_8 = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$C($v_1);
        !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_7.children) &&
            $v_7.children.length >= 2 &&
            !Mscrm.InternalUtilities._Script.isNullOrUndefined($v_7.children[1]) &&
            $v_7.children[1].appendChild($v_8)
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$E = function() {
    var $v_0 = new Sys.StringBuilder, $v_1 = Xrm.Page.getAttribute("profileitementityfilter");
    if (!Mscrm.InternalUtilities.JSTypes
        .isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) $v_0.append($v_1.getValue().toString());
    else {
        var $v_2 = Xrm.Page.getAttribute("selectedentitytypecode"),
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
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$C = function($p0) {
    var $v_0 = document.createElement("div");
    $v_0.id = "recorddistributioncriteriadiv";
    $v_0.className = "ms-crm-Inline-Value";
    var $v_1 = document.createElement("a");
    $v_1.id = "mobileOfflineProfileItemFilters";
    $v_1.style.cursor = "pointer";
    $v_1.style.textDecorationUnderline = "underline";
    $v_1.innerHTML = Xrm.Internal.getResourceString("LOCID_MO_PROFILEITEMFILTER");
    $v_1.setAttribute("tabindex", $p0.toString());
    $addHandler($v_1, "click", Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$9);
    $addHandler($v_1, "keypress", Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$D);
    $v_0.appendChild($v_1);
    return $v_0
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$9 = function($p0) {
    var $v_0 = "/mobileofflineprofileitem/mobileofflineprofileitemfilters.aspx",
        $v_1 = Mscrm.GlobalImported.CrmUri.create($v_0);
    $v_1.get_query()["entityCode"] = Xrm.Page.data.entity.attributes.get("selectedentitytypecode").getValue();
    $v_1.get_query()["fromPage"] = "MobileOfflineProfileItemFilters";
    $v_1.get_query()["isReadOnly"] = Xrm.Page.ui.getFormType() === 3 || Xrm.Page.ui.getFormType() === 4;
    var $v_2 = new Xrm.DialogOptions;
    $v_2.width = 600;
    $v_2.height = 500;
    var $v_3 = {};
    $v_3["sFilterXml"] = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$E();
    Xrm.Internal.openDialog($v_1.toString(),
        $v_2,
        $v_3,
        null,
        Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$G);
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .$D = function($p0) {
        if (!IsNull($p0) && !IsNull($p0.charCode))
            $p0.charCode === 13 && Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$9($p0)
    };
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$G = function($p0) {
    var $v_0 = Xrm.Page.getAttribute("profileitementityfilter");
    !Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($p0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        $v_0.setValue($p0)
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$I = function($p0, $p1) {
    if ($p1 && $p0 !== 3) {
        var $v_0 = Xrm.Page.getAttribute("profileitementityfilter");
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0) && $v_0.setValue(null)
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$F = function($p0, $p1) {
    for (var $v_0 = ["recordsownedbyme", "recordsownedbymyteam", "recordsownedbymybusinessunit"], $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) {
        var $v_2 = Xrm.Page.getAttribute($v_0[$v_1]), $v_3 = Xrm.Page.getControl($v_0[$v_1]);
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2)) {
            $v_2.getValue() && $p1 && !$p0 && $v_2.setValue(0);
            if ($p0) $v_3.setVisible(true);
            else $v_3.setVisible(false)
        }
    }
    if (Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 && $p0) {
        var $v_4 = Xrm.Page.getControl("recordsownedbyme"), $v_5 = Xrm.Page.getControl("recordsownedbymyteam");
        $v_4.setVisible(false);
        $v_5.setVisible(false)
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$8 = function($p0) {
    var $v_0 = new Xrm.ExecutionContext;
    $v_0.setSharedVariable("isSave", $p0);
    return $v_0
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$A = function($p0, $p1) {
    var $v_0 = Xrm.Page.getControl("recorddistributioncriteria"),
        $v_1 = $v_0.getAttribute(),
        $v_2 = Xrm.Page.getControl("recordsownedbyme"),
        $v_3 = Xrm.Page.getControl("recordsownedbymyteam"),
        $v_4 = Xrm.Page.getControl("recordsownedbymybusinessunit"),
        $v_5 = $v_0.getOptions(),
        $v_6 = Xrm.Page.getAttribute("recordsownedbyme"),
        $v_7 = Xrm.Page.getAttribute("recordsownedbymyteam"),
        $v_8 = Xrm.Page.getAttribute("recordsownedbymybusinessunit");
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Xrm.Page.data.entity.attributes.get("selectedentitytypecode")
        .getValue())) {
        var $v_9 = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$6(), $v_A = "", $v_B = "";
        $v_A = Xrm.Page.data.entity.attributes.get("selectedentitytypecode").getValue().toString();
        for (var $v_C = $v_9["entities"], $v_E = 0; $v_E < $v_C.length; $v_E++) {
            var $v_F = $v_C[$v_E];
            if ($v_F["objectTypeCode"].toString() === $v_A) {
                $v_B = $v_F["ownershipType"].toString();
                break
            }
        }
        $v_0.clearOptions();
        $v_1.clearOptions();
        if (!$p0) {
            $v_6.setValue(0);
            $v_7.setValue(0);
            $v_8.setValue(0);
            $v_2.setVisible(false);
            $v_3.setVisible(false);
            $v_4.setVisible(false)
        }
        var $v_D = false;
        switch ($v_B) {
        case "UnOwned":
        case "None":
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$2($v_1, $v_0, 1);
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 = false;
            $v_D = true;
            break;
        case "BusinessOwned":
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$2($v_1, $v_0, 3);
            $v_2.setVisible(false);
            $v_3.setVisible(false);
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 = true;
            break;
        case "OrgOwned":
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$2($v_1, $v_0, 2);
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 = false;
            break;
        default:
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$2($v_1, $v_0, 3);
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 = false;
            break
        }
        if (Xrm.Internal.isFeatureEnabled("FCB.MocaOfflineProfileRuleEnhancements") && !$v_D)
            for (var $$arr_I = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$1,
                $$len_J = $$arr_I.length,
                $$idx_K = 0;
                $$idx_K < $$len_J;
                ++$$idx_K) {
                var $v_G = $$arr_I[$$idx_K];
                if (parseInt($v_G.value) === 3) {
                    $v_0.addOption($v_G);
                    $v_1.addOption($v_G);
                    break
                }
            }
        if (!Mscrm.InternalUtilities.JSTypes.isNull($p1)) {
            $v_1.setValue($p1);
            Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$5($p1)
        }
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$2 = function($p0, $p1, $p2) {
    for (var $v_0 = 0; $v_0 < $p2; $v_0++) {
        $p1.addOption(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$1[$v_0]);
        $p0.addOption(Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$1[$v_0])
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$6 = function() {
    var $v_0 = {}, $v_1 = Xrm.Page.data.entity.attributes.get("selectedentitymetadata");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_1.getValue())) {
        var $v_2 = $v_1.getValue().toString();
        if (!Mscrm.InternalUtilities._Script.isNullOrUndefined($v_2)) $v_0 = JSON.parse($v_2)
    }
    return $v_0
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .$B = function($p0) { Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$A(false, 0) };
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$H = function($p0) {
    if (Xrm.Page.ui.getFormType() === 1) {
        var $v_0 = "";
        if (!$p0) {
            $v_0 = Xrm.Internal.getResourceString("LOCID_MO_ENTITY_NOTAVAILABLE");
            Xrm.Page.ui.setFormNotification($v_0, "WARNING", "MobileOfflineProfileItemNotification")
        }
    }
};
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .registerClass("Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource");
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$4 = null;
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$1 = null;
Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.$0 = false;
Type.registerNamespace("Mscrm");
Mscrm.Form_onload = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.form_OnLoad;
Mscrm.Form_onsave = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.form_OnSave;
Mscrm.savedQueryIdLookUp_SetAdditionalParams = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .savedQueryIdLookUp_SetAdditionalParams;
Mscrm.selectedentitytypecode_onchange = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource
    .selectedEntityTypeCode_onchange;
Mscrm.OpenOrgFilter = Mscrm.MobileOfflineProfileItemMainSystemLibraryWebResource.openOrgFilterLink