Type.registerNamespace("Mscrm");
Mscrm.EnableDocumentManagementPageHelper = function() {};
Mscrm.EnableDocumentManagementPageHelper.initializeControls = function(entityCount) {
    var $v_0 = $get("txtSiteCollectionUrl");
    if (window.WizardHasProperty("DefaultSiteUrl")) $v_0.value = window.WizardGetProperty("DefaultSiteUrl");
    for (var $v_2 = 0; $v_2 < entityCount; $v_2++) {
        var $v_3 = $get("entityName_" + $v_2).value, $v_4 = $get("docMgmtEnabled_" + $v_3);
        Mscrm.EnableDocumentManagementPageHelper.$C[$v_3] = $v_4.checked
    }
    if (window.WizardHasProperty("EntityDocMgmtXml"))
        for (var $v_5 = window.WizardGetProperty("EntityDocMgmtXml"),
            $v_6 = XUI.Xml.LoadXml($v_5),
            $v_7 = XUI.Xml.SelectNodes($v_6, "/EntityDocMgmtXml/entity", null),
            $v_8 = 0;
            $v_8 < $v_7.length;
            $v_8++) {
            var $v_9 = XUI.Xml.GetText($v_7[$v_8].attributes.getNamedItem("name")),
                $v_A = $get("docMgmtEnabled_" + $v_9);
            $v_A.checked = XUI.Xml.GetText($v_7[$v_8]) === "true";
            if ($v_A.checked) window.DOCM_ENTITY_COUNT_SELECTED++;
            else window.DOCM_ENTITY_COUNT_SELECTED--
        }
    var $v_1 = $get("checkAll");
    $v_1.checked = window.DOCM_ENTITY_COUNT_SELECTED === entityCount;
    window.WizardSetProperty("SiteCollectionUrl", "");
    window.WizardSetProperty("DefaultRelativeSite", "")
};
Mscrm.EnableDocumentManagementPageHelper.$8 = function($p0) {
    window.WizardSetProperty("ValidateResult", $p0);
    window.WizardNavigate(_WizardNavigateEnum.NEXT)
};
Mscrm.EnableDocumentManagementPageHelper.$J = function() {
    if (window.allowHTTPSites) return true;
    return false
};
Mscrm.EnableDocumentManagementPageHelper.$W = function() {
    var $v_0 = window.bGrayTextOn;
    return $v_0 ? "" : $get("txtSiteCollectionUrl").value
};
Mscrm.EnableDocumentManagementPageHelper.savePageProperties = function(entityCount) {
    var $v_0 = window.DOCM_ENTITY_COUNT_SELECTED;
    window.WizardSetProperty("SelectedEntityCount", window.DOCM_ENTITY_COUNT_SELECTED);
    if (!window.DOCM_ENTITY_COUNT_SELECTED) if (!confirm(window.LOCID_DOCM_NOENTITY_SELECTED)) return false;
    var $v_1 = Mscrm.EnableDocumentManagementPageHelper.$W(), $v_2 = Mscrm.CrmUri.create($v_1);
    if ($v_2.get_host().toUpperCase() === "LOCALHOST") {
        alert(window.LOCID_DOCM_LOCALHOST_URL);
        return false
    }
    var $v_3 = Mscrm.CrmUri.create(window.location.href);
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S") &&
        $v_2.get_scheme() !== "https" &&
        !($v_2.get_scheme() === "http" && Mscrm.EnableDocumentManagementPageHelper.$J())) {
        alert(window.LOCID_DOCM_SP_NOT_HTTPS);
        return false
    }
    $v_3.get_scheme() !== $v_2.get_scheme() && alert(window.LOCID_DOCM_MIXEDMODE_WARNING);
    window.WizardSetProperty("DefaultSiteUrl", $v_1);
    for (var $v_4 = {}, $v_5 = "<EntityDocMgmtXml>", $v_6 = 0; $v_6 < entityCount; $v_6++) {
        var $v_7 = $get("entityName_" + $v_6).value, $v_8 = $get("docMgmtEnabled_" + $v_7);
        if (Mscrm.EnableDocumentManagementPageHelper.$C[$v_7] !== $v_8.checked) {
            $v_5 += '<entity name="' + $v_7 + '">';
            $v_5 += $v_8.checked;
            $v_5 += "</entity>"
        }
        if ($v_8.checked) {
            var $v_9 = $get("entityBaseLanguageDisplayName_" + $v_6).value,
                $v_A = XUI.Html.GetText($get("entityDisplayName_" + $v_6)),
                $v_B = {};
            $v_B["entityDisplayName"] = $v_A;
            $v_B["entityBaseLanguageDisplayName"] = $v_9;
            $v_4[$v_7] = $v_B
        }
    }
    $v_5 += "</EntityDocMgmtXml>";
    window.WizardSetProperty("EntityDocMgmtXml", $v_5);
    $v_0 > 0 && window.WizardSetProperty("SelectedEntityList", $v_4);
    return true
};
Mscrm.EnableDocumentManagementPageHelper.$M = function($p0) {
    switch ($p0) {
    case 0:
    case 1:
    case 2:
    case 17:
        return [4, 2];
    case 3:
    case 4:
        return [3, 3];
    default:
        return [1, 1]
    }
};
Mscrm.EnableDocumentManagementPageHelper.saveDocumentManagementSettings = function(funAsyncCallbackFunction) {
    var $v_0, $v_1 = 0, $v_2 = window.WizardGetProperty("ValidateResult");
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")) {
        var $v_3;
        if (window.WizardHasProperty("SiteCollectionUrl") &&
            !isNullOrEmptyString(window.WizardGetProperty("SiteCollectionUrl"))) {
            $v_3 = new RemoteCommand("DocumentManagementWebService",
                "UpdateDocumentManagementSettingsWithRelativeDefaultSite");
            var $v_7 = window.WizardGetProperty("SiteCollectionUrl"),
                $v_8 = window.WizardGetProperty("DefaultRelativeSite");
            $v_3.SetParameter("siteCollection", $v_7);
            $v_3.SetParameter("defaultChildSite", $v_8)
        } else {
            $v_3 = new RemoteCommand("DocumentManagementWebService", "UpdateDocumentManagementSettings");
            var $v_9 = window.WizardGetProperty("DefaultSiteUrl");
            $v_3.SetParameter("siteCollection", $v_9)
        }
        var $v_4 = !$v_2;
        if ($v_4) $v_1 = Mscrm.EnableDocumentManagementPageHelper.$H();
        $v_3.SetParameter("isGridPresent", $v_4);
        $v_3.SetParameter("folderStructureEntity", $v_1);
        var $v_5 = Mscrm.EnableDocumentManagementPageHelper.$M($v_2);
        $v_3.SetParameter("validateStatus", $v_5[0]);
        $v_3.SetParameter("validateStatusReason", $v_5[1]);
        $v_0 = window.WizardGetProperty("EntityDocMgmtXml");
        $v_3.SetParameter("entityDocMgmtXml", $v_0);
        var $v_6 = $v_3.Execute(funAsyncCallbackFunction)
    } else {
        var $v_A = window.WizardGetProperty("DefaultSiteUrl"),
            $v_B = Mscrm.EnableDocumentManagementPageHelper.$M($v_2),
            $v_C = window.WizardGetProperty("SelectedEntityCount");
        $v_1 = Mscrm.EnableDocumentManagementPageHelper.$H();
        $v_0 = window.WizardGetProperty("EntityDocMgmtXml");
        if (isNullOrEmptyString($v_0)) $v_0 = "<EntityDocMgmtXml/>";
        var $v_D = XUI.Xml.LoadXml($v_0),
            $v_E = XUI.Xml.SelectSingleNode($v_D, "/EntityDocMgmtXml", null),
            $v_F = $v_D.createElement("autofolderonsharepoint");
        if (window.WizardGetProperty("AutoFolderOnSharePoint")) $v_F.appendChild($v_D.createTextNode("True"));
        else $v_F.appendChild($v_D.createTextNode("False"));
        $v_E.appendChild($v_F);
        $v_0 = XUI.Xml.XMLSerializer.serializeToString($v_D);
        Xrm.Internal.messages.updateDocumentManagementSettings($v_A, $v_1, $v_0, $v_B[0], $v_B[1]).then(function() {
                window.WizardSetProperty("EntityDocMgmtXml", null);
                if ($v_2 === 17 && $v_C > 0) window.WizardNavigate(_WizardNavigateEnum.NEXT);
                else window.WizardNavigate(_WizardNavigateEnum.CLOSE)
            },
            Mscrm.EnableDocumentManagementPageHelper.$E)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$H = function() {
    var $v_0 = 0,
        $v_1,
        $v_2 = $get("entityCentricSetting").checked,
        $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("folderStructureEntity");
    if ($v_2 && $v_3.get_selectedIndex() > 0) {
        $v_0 = parseInt($v_3.get_dataValue(), 10);
        var $v_4 = window.WizardGetProperty("SelectedEntityList"), $v_5 = XUI.Html.GetText($get("entityName_" + $v_0));
        if (IsNull($v_4[$v_5])) {
            $v_1 = window.WizardGetProperty("EntityDocMgmtXml");
            if (isNullOrEmptyString($v_1)) $v_1 = "<EntityDocMgmtXml/>";
            for (var $v_6,
                $v_7 = XUI.Xml.LoadXml($v_1),
                $v_8 = XUI.Xml.SelectNodes($v_7, "/EntityDocMgmtXml/entity", null),
                $v_F = 0;
                $v_F < $v_8.length;
                $v_F++) {
                $v_6 = $v_8[$v_F];
                XUI.Xml.GetText($v_6.attributes.getNamedItem("name")) === $v_5 &&
                    XUI.Xml.GetText($v_6) === "false" &&
                    $v_6.parentNode.removeChild($v_6)
            }
            var $v_9 = XUI.Xml.SelectSingleNode($v_7, "/EntityDocMgmtXml", null);
            $v_6 = $v_7.createElement("entity");
            var $v_A = $v_7.createAttribute("name");
            $v_A.value = $v_5;
            $v_6.attributes.setNamedItem($v_A);
            $v_6.appendChild($v_7.createTextNode("true"));
            $v_9.appendChild($v_6);
            var $v_B = XUI.Html.GetText($get("entityBaseLanguageDisplayName_" + $v_0)),
                $v_C = XUI.Html.GetText($v_3.get_element()),
                $v_D = {};
            $v_D["entityDisplayName"] = $v_C;
            $v_D["entityBaseLanguageDisplayName"] = $v_B;
            $v_4[$v_5] = $v_D;
            var $v_E = window.WizardGetProperty("SelectedEntityCount");
            window.WizardSetProperty("EntityDocMgmtXml", XUI.Xml.XMLSerializer.serializeToString($v_7));
            window.WizardSetProperty("SelectedEntityList", $v_4);
            window.WizardSetProperty("SelectedEntityCount", $v_E + 1)
        }
    }
    return $v_0
};
Mscrm.EnableDocumentManagementPageHelper.validateSiteURL = function() {
    var $v_0 = window.WizardGetProperty("DefaultSiteUrl"), $v_1 = 2;
    if (validateUrlProtocol($v_0) === $v_1) {
        alert(window.LOCID_DOCM_INVALIDURL);
        return
    }
    var $v_2 = Mscrm.CrmUri.create($v_0);
    if (!($v_2.get_scheme() === "http" || $v_2.get_scheme() === "https")) {
        alert(window.LOCID_DOCM_INVALIDURL);
        return
    }
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S") &&
        $v_2.get_scheme() !== "https" &&
        !($v_2.get_scheme() === "http" && Mscrm.EnableDocumentManagementPageHelper.$J())) {
        alert(window.LOCID_DOCM_SP_NOT_HTTPS);
        return
    }
    var $v_3 = Mscrm.Utilities.trimEnd($v_2.get_path().toLowerCase(), ["/"]);
    if ($v_3.endsWith(".aspx") || $v_3.endsWith(".ashx") || $v_3.endsWith(".asmx") || $v_3.endsWith(".svc")) {
        alert(window.LOCID_DOCM_URLCANNOTBEPAGE);
        return
    }
    $v_2.get_scheme() === "http" && window.location.protocol === "https:" && alert(window.LOCID_DOCM_CRMHTTPS_SPHTTP);
    var $v_4 = $get("entityTable"), $v_5 = $get("siteUrlTable"), $v_6 = $get("showProgress"), $v_7 = $get("buttonNext");
    $v_7.disabled = true;
    $v_4.style.display = "none";
    $v_5.style.display = "none";
    $v_6.style.display = "block";
    if (Mscrm.FeatureControl.get_Current()
        .isFeatureEnabled("FCB.SharePointS2S")) Mscrm.EnableDocumentManagementPageHelper.$X($v_0);
    else Mscrm.EnableDocumentManagementPageHelper.$K($v_0)
};
Mscrm.EnableDocumentManagementPageHelper.$X = function($p0) {
    if ($p0.endsWith("/")) $p0 = $p0.substr(0, $p0.length - 1);
    var $v_0 = "<siteUrlsXml><siteUrl url='" + $p0 + "'>false</siteUrl></siteUrlsXml>";
    Xrm.Internal.messages.validateUrl($v_0).then(function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$V($p1_0) },
        Mscrm.EnableDocumentManagementPageHelper.$E)
};
Mscrm.EnableDocumentManagementPageHelper.$V = function($p0) {
    var $v_0 = $p0.urlValidationResult,
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectNodes($v_1, "/siteUrlsXml/siteUrl", null),
        $v_3 = XUI.Xml.SelectSingleNode($v_1, "/siteUrlsXml/errorlog", null),
        $v_4 = XUI.Xml.GetText($v_2[0]);
    if ($v_4.toLowerCase() === "true") {
        window.WizardSetProperty("ValidateResult", 17);
        window.WizardNavigate(_WizardNavigateEnum.NEXT)
    } else {
        var $v_5 = window.LOCID_SP_VALIDATION_INVALID, $v_6;
        if ($v_3) {
            $v_6 = XUI.Xml.SelectSingleNode($v_3, "//errorcode", null);
            var $v_8 = "", $$t_A, $$t_B;
            $v_5 = ($$t_B = Mscrm.SharePointValidation
                .sharePointValidationText($v_6, $$t_A = { val: $v_8 }, false), $v_8 = $$t_A.val, $$t_B)
        }
        window.WizardSetProperty("ValidateResult", 18);
        window.WizardSetProperty("ErrorCode", $v_5);
        var $v_7 = CrmEncodeDecode.CrmHtmlDecode(window.WizardGetProperty("ErrorLogText"));
        if ($v_7) $v_7 += XUI.Xml.XMLSerializer.serializeToString($v_3);
        else $v_7 = XUI.Xml.XMLSerializer.serializeToString($v_3);
        window.WizardSetProperty("ErrorLogText", CrmEncodeDecode.CrmHtmlEncode($v_7));
        window.WizardNavigate(_WizardNavigateEnum.NEXT)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$E = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.EnableDocumentManagementPageHelper.$K = function($p0) {
    if ($p0.endsWith("/")) $p0 = $p0.substr(0, $p0.length - 1);
    Mscrm.EnableDocumentManagementPageHelper.$1 = Mscrm.CrmUri.create($p0);
    var $v_0 = function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$Q() },
        $v_1 = function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$R($p1_0) };
    (new Mscrm.UrlValidatorUsingSharePointGrid).checkGrid($p0, $v_0, $v_1)
};
Mscrm.EnableDocumentManagementPageHelper.$Q = function() {
    var $v_0 = 0;
    window.WizardSetProperty("ValidateResult", $v_0);
    if (isNullOrEmptyString(Mscrm.EnableDocumentManagementPageHelper
        .$3)) window.WizardNavigate(_WizardNavigateEnum.NEXT);
    else {
        var $v_1 = window.WizardGetProperty("DefaultSiteUrl");
        Mscrm.EnableDocumentManagementPageHelper.$S(Mscrm.EnableDocumentManagementPageHelper.$1.toString(), $v_1)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$S = function($p0, $p1) {
    var $v_0 = function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$Z($p1_0) },
        $v_1 = function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$Y($p1_0) };
    (new Mscrm.UrlValidatorUsingSharePointGrid).validateUrl($p0, $p1, $v_0, $v_1)
};
Mscrm.EnableDocumentManagementPageHelper.$Z = function($p0) {
    var $v_0;
    if ($p0 === 1) {
        window.WizardSetProperty("SiteCollectionUrl", Mscrm.EnableDocumentManagementPageHelper.$1.toString());
        if (Mscrm.EnableDocumentManagementPageHelper.$3
            .startsWith("/"))
            Mscrm.EnableDocumentManagementPageHelper.$3 = Mscrm.EnableDocumentManagementPageHelper.$3.substr(1);
        window.WizardSetProperty("DefaultRelativeSite", Mscrm.EnableDocumentManagementPageHelper.$3);
        $v_0 = 0
    } else {
        $v_0 = 3;
        window.WizardSetProperty("SiteCollectionUrl", "");
        window.WizardSetProperty("DefaultRelativeSite", "")
    }
    Mscrm.EnableDocumentManagementPageHelper.$8($v_0)
};
Mscrm.EnableDocumentManagementPageHelper.$Y = function($p0) { Mscrm.EnableDocumentManagementPageHelper.$N() };
Mscrm.EnableDocumentManagementPageHelper.$R = function($p0) {
    if ($p0 === 8) {
        Mscrm.EnableDocumentManagementPageHelper.$8(8);
        return
    }
    var $v_0 = Mscrm.EnableDocumentManagementPageHelper.$1.get_path();
    if (!isNullOrEmptyString($v_0)) {
        var $v_1 = "";
        if (!isNullOrEmptyString(Mscrm.EnableDocumentManagementPageHelper.$1
            .get_scheme())) $v_1 += Mscrm.EnableDocumentManagementPageHelper.$1.get_scheme() + "://";
        if (!isNullOrEmptyString(Mscrm.EnableDocumentManagementPageHelper.$1
            .get_host())) $v_1 += Mscrm.EnableDocumentManagementPageHelper.$1.get_host();
        if (Mscrm.EnableDocumentManagementPageHelper.$1
            .get_port() >
            0) $v_1 += ":" + Mscrm.EnableDocumentManagementPageHelper.$1.get_port().toString();
        var $v_2 = $v_0.lastIndexOf("/");
        if ($v_2 >= 0) {
            Mscrm.EnableDocumentManagementPageHelper.$3 = $v_0.substr($v_2) +
                Mscrm.EnableDocumentManagementPageHelper.$3;
            $v_0 = $v_0.substr(0, $v_2);
            $v_1 += $v_0;
            Mscrm.EnableDocumentManagementPageHelper.$1.set_path($v_0)
        }
        Mscrm.EnableDocumentManagementPageHelper.$K($v_1)
    } else Mscrm.EnableDocumentManagementPageHelper.$N()
};
Mscrm.EnableDocumentManagementPageHelper.$N = function() {
    var $v_0 = window.WizardGetProperty("DefaultSiteUrl"), $v_1 = window.location.protocol;
    if ($v_1.endsWith(":")) $v_1 = $v_1.substr(0, $v_1.length - 1);
    if ($v_1 !== Mscrm.CrmUri.create($v_0).get_scheme()) {
        Mscrm.EnableDocumentManagementPageHelper.$8(7);
        return
    }
    var $v_2 = Mscrm.CrmUri.create($v_0 + "/_layouts/Lists.asmx");
    try {
        var $v_3 = new RemoteCommand("DocumentManagementWebService", "GetSharepointVersion");
        $v_3.SetParameter("url", $v_2.toString());
        var $v_4 = Mscrm.EnableDocumentManagementPageHelper.$U;
        $v_3.Execute($v_4)
    } catch ($$e_5) {
        Mscrm.EnableDocumentManagementPageHelper.$8(5)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$U = function($p0, $p1) {
    var $v_0;
    if ($p0.Success) {
        var $v_1 = $p0.ReturnValue.toString();
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = Number.parseInvariant($v_1.split(".")[0]);
            if ($v_2 >= 14) $v_0 = 1;
            else $v_0 = 2
        } else $v_0 = 3
    } else $v_0 = 4;
    Mscrm.EnableDocumentManagementPageHelper.$8($v_0)
};
Mscrm.EnableDocumentManagementPageHelper.createDocumentLibraryUsingS2SForSelectedEntities = function() {
    var $v_0 = window.WizardGetProperty("DefaultSiteUrl"), $v_1 = {};
    if (window.WizardHasProperty("SelectedEntityList")) {
        $v_1 = window.WizardGetProperty("SelectedEntityList");
        Mscrm.EnableDocumentManagementPageHelper.$5 = window.WizardGetProperty("SelectedEntityCount");
        if (!Mscrm.EnableDocumentManagementPageHelper.$5) return;
        var $v_9 = $get("ToCreate");
        XUI.Html.SetText($v_9, Mscrm.EnableDocumentManagementPageHelper.$5.toString());
        var $$dict_6 = $v_1;
        for (var $$key_7 in $$dict_6) {
            var $v_A = { key: $$key_7, value: $$dict_6[$$key_7] },
                $v_B = $v_A.key,
                $v_C = $v_A.value["entityDisplayName"];
            Mscrm.EnableDocumentManagementPageHelper.$I($v_B, $v_0 + "/" + $v_B, $v_C)
        }
    }
    var $v_2 = String.format(window.LOCID_S2S_CREATEDL_CONFIRM_MSG0 + "\n" + window.LOCID_S2S_CREATEDL_CONFIRM_MSG1,
            $v_0),
        $v_3 = [],
        $v_4 = 0,
        $v_5 = "<SelectedEntitiesXml/>",
        $v_6 = XUI.Xml.LoadXml($v_5),
        $v_7 = XUI.Xml.SelectSingleNode($v_6, "/SelectedEntitiesXml", null),
        $v_8,
        $$dict_H = $v_1;
    for (var $$key_I in $$dict_H) {
        var $v_D = { key: $$key_I, value: $$dict_H[$$key_I] };
        $v_3[$v_4++] = $v_D.key;
        $v_8 = $v_6.createElement("entity");
        var $v_E = $v_6.createAttribute("name");
        $v_E.value = $v_D.key.toString();
        $v_8.attributes.setNamedItem($v_E);
        $v_8.appendChild($v_6.createTextNode("1"));
        $v_7.appendChild($v_8)
    }
    if (confirm($v_2)) {
        Mscrm.EnableDocumentManagementPageHelper.$9 = true;
        Xrm.Internal.messages.createDocumentLibraries(XUI.Xml.XMLSerializer.serializeToString($v_6), $v_0)
            .then(function($p1_0) { Mscrm.EnableDocumentManagementPageHelper.$T($p1_0) },
                Mscrm.EnableDocumentManagementPageHelper.$E)
    } else Mscrm.EnableDocumentManagementPageHelper.$B(2, $v_3)
};
Mscrm.EnableDocumentManagementPageHelper.$T = function($p0) {
    for (var $v_0 = $p0.documentLibraryResult,
        $v_1 = [],
        $v_2 = [],
        $v_3 = [],
        $v_4 = XUI.Xml.LoadXml($v_0),
        $v_5 = XUI.Xml.SelectNodes($v_4, "/SelectedEntitiesXml/entity", null),
        $v_6 = 0;
        $v_6 < $v_5.length;
        $v_6++) {
        var $v_7 = XUI.Xml.GetText($v_5[$v_6].attributes.getNamedItem("name"));
        switch (XUI.Xml.GetText($v_5[$v_6])) {
        case "3":
            $v_3[Mscrm.EnableDocumentManagementPageHelper.$6++] = $v_7;
            break;
        case "1":
            $v_2[Mscrm.EnableDocumentManagementPageHelper.$4++] = $v_7;
            break;
        case "2":
            $v_1[Mscrm.EnableDocumentManagementPageHelper.$7++] = $v_7;
            break
        }
    }
    Mscrm.EnableDocumentManagementPageHelper.$6 > 0 && Mscrm.EnableDocumentManagementPageHelper.$B(3, $v_3);
    Mscrm.EnableDocumentManagementPageHelper.$4 > 0 && Mscrm.EnableDocumentManagementPageHelper.$B(0, $v_2);
    Mscrm.EnableDocumentManagementPageHelper.$7 > 0 && Mscrm.EnableDocumentManagementPageHelper.$B(4, $v_1);
    Mscrm.EnableDocumentManagementPageHelper.$9 = false
};
Mscrm.EnableDocumentManagementPageHelper.createDocumentLibraryForSelectedEntities = function() {
    var $v_0 = window.WizardGetProperty("DefaultSiteUrl"), $v_1 = "";
    if (window.WizardHasProperty("SiteCollectionUrl") &&
        !isNullOrEmptyString(window
            .WizardGetProperty("SiteCollectionUrl"))) $v_1 = window.WizardGetProperty("SiteCollectionUrl");
    else $v_1 = $v_0;
    if (window.WizardHasProperty("SelectedEntityList")) {
        var $v_2 = window.WizardGetProperty("SelectedEntityList");
        Mscrm.EnableDocumentManagementPageHelper.$5 = window.WizardGetProperty("SelectedEntityCount");
        if (!Mscrm.EnableDocumentManagementPageHelper.$5) return;
        var $v_3 = $get("ToCreate");
        XUI.Html.SetText($v_3, Mscrm.EnableDocumentManagementPageHelper.$5.toString());
        var $v_4 = Mscrm.EnableDocumentManagementPageHelper.$P($v_1, $v_0), $v_5 = 0, $v_6 = [];
        if (IsNull(Mscrm.EnableDocumentManagementPageHelper.$0)) {
            var $v_7 = "<el>", $v_8 = "</el>", $$dict_E = $v_2;
            for (var $$key_F in $$dict_E) {
                var $v_9 = { key: $$key_F, value: $$dict_E[$$key_F] },
                    $v_A = $v_9.key,
                    $v_B = $v_9.value["entityBaseLanguageDisplayName"],
                    $v_C = '<e sn="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_A) +
                        '" dn="' +
                        CrmEncodeDecode.CrmXmlAttributeEncode($v_B) +
                        '" />';
                if ($v_4.get_queryString().length +
                    CrmEncodeDecode.CrmUrlEncode($v_C).length +
                    CrmEncodeDecode.CrmUrlEncode($v_8).length >=
                    2048 ||
                    $v_6.length === 20) {
                    if (IsNull(Mscrm.EnableDocumentManagementPageHelper
                        .$0)) Mscrm.EnableDocumentManagementPageHelper.$0 = {};
                    $v_4.get_query()["createDLInfo"] += $v_8;
                    Mscrm.EnableDocumentManagementPageHelper.$0[$v_4.toString()] = $v_6;
                    $v_4.get_query()["createDLInfo"] = "";
                    $v_5 = 0;
                    $v_6 = []
                }
                $v_6[$v_5++] = $v_9.key;
                if (IsNull($v_4.get_query()["createDLInfo"]) ||
                    isNullOrEmptyString($v_4.get_query()["createDLInfo"]
                        .toString())) $v_4.get_query()["createDLInfo"] = $v_7 + $v_C;
                else $v_4.get_query()["createDLInfo"] += $v_C;
                var $v_D = $v_9.value["entityDisplayName"];
                Mscrm.EnableDocumentManagementPageHelper.$I($v_A, $v_0 + "/" + $v_A, $v_D)
            }
            if (!IsNull($v_4.get_query()["createDLInfo"])) $v_4.get_query()["createDLInfo"] += $v_8;
            if ($v_4.get_queryString().length < 2048) {
                if (IsNull(Mscrm.EnableDocumentManagementPageHelper
                    .$0)) Mscrm.EnableDocumentManagementPageHelper.$0 = {};
                Mscrm.EnableDocumentManagementPageHelper.$0[$v_4.toString()] = $v_6
            }
            Mscrm.EnableDocumentManagementPageHelper.$L()
        }
    }
};
Mscrm.EnableDocumentManagementPageHelper.userClickedBackOrCancelButton = function(wizardNavigateEnum) {
    if (!IsNull(Mscrm.EnableDocumentManagementPageHelper
            .$0) ||
        Mscrm.EnableDocumentManagementPageHelper.$9)
        confirm(window.LOCID_SP_CANCELCONFIRM_MESSAGE) && window.WizardNavigate(wizardNavigateEnum);
    else window.WizardNavigate(wizardNavigateEnum)
};
Mscrm.EnableDocumentManagementPageHelper.$L = function() {
    var $v_0 = window.WizardGetProperty("DefaultSiteUrl");
    Mscrm.EnableDocumentManagementPageHelper.$2 = null;
    var $$dict_4 = Mscrm.EnableDocumentManagementPageHelper.$0;
    for (var $$key_5 in $$dict_4) {
        var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
        Mscrm.EnableDocumentManagementPageHelper.$2 = $v_1.key;
        var $v_2 = Mscrm.CrmUri.create(Mscrm.EnableDocumentManagementPageHelper.$2),
            $v_3 = window.document.createElement("iframe");
        $v_3.style.display = "none";
        $v_3.id = "createDLFrame";
        $v_3.setAttribute("name", "createDLFrame");
        $v_3.src = $v_2.toString();
        $addHandler($v_3, "load", Mscrm.EnableDocumentManagementPageHelper.$O);
        window.document.body.appendChild($v_3);
        break
    }
    if (IsNull(Mscrm.EnableDocumentManagementPageHelper.$2)) {
        var $v_4 = $get("buttonNext");
        $v_4.disabled = false;
        Mscrm.EnableDocumentManagementPageHelper.$0 = null;
        return
    }
};
Mscrm.EnableDocumentManagementPageHelper.$P = function($p0, $p1) {
    var $v_0 = Mscrm.CrmUri.create($p0 + "/crmgrid/createfolder.aspx");
    $v_0.get_query()["locationUrl"] = $p1;
    $v_0.get_query()["langId"] = window.LOCID_DOCM_LANGID;
    $v_0.get_query()["serverUrl"] = window.location.protocol +
        "//" +
        window.location.hostname +
        ":" +
        window.location.port +
        "/tools/documentmanagement/crmproxy.html";
    $v_0.get_query()["createDl"] = "1";
    return $v_0
};
Mscrm.EnableDocumentManagementPageHelper.$O = function($p0) {
    var $v_0 = $get("createDLFrame"),
        $v_1 = Mscrm.Utilities.getExternalIFrame($v_0, "crmProxyIframe"),
        $v_2 = Mscrm.Utilities.getExternalIFrame($v_0, "proxyFrame"),
        $v_3 = Mscrm.Utilities.getExternalIFrame($v_0, "docmErrorFrameFromSharePoint");
    try {
        if (!IsNull($v_1)) {
            var $v_4 = $p0.target;
            $removeHandler($v_4, "load", Mscrm.EnableDocumentManagementPageHelper.$O);
            var $v_5 = $v_1.location.hash;
            if (!isNullOrEmptyString($v_5)) {
                var $v_6 = $v_5.split("#")[1];
                if (!isNullOrEmptyString($v_6)) {
                    var $v_7 = $v_6.split(":"), $v_8 = [];
                    if (!isNullOrEmptyString(Mscrm.EnableDocumentManagementPageHelper.$2)) {
                        $v_8 = Mscrm.EnableDocumentManagementPageHelper.$0[Mscrm.EnableDocumentManagementPageHelper.$2];
                        delete Mscrm.EnableDocumentManagementPageHelper.$0[Mscrm.EnableDocumentManagementPageHelper.$2]
                    }
                    Mscrm.EnableDocumentManagementPageHelper.$A($v_7, $v_8);
                    Mscrm.EnableDocumentManagementPageHelper.$L()
                }
            }
            window.document.body.removeChild($v_0)
        } else if (IsNull($v_2)) {
            Mscrm.EnableDocumentManagementPageHelper.$A([(0).toString()], null);
            window.document.body.removeChild($v_0)
        } else if (!IsNull($v_3)) {
            Mscrm.EnableDocumentManagementPageHelper.$A([(0).toString(), "LOCID_DOCM_AAM_ERROR"], null);
            window.document.body.removeChild($v_0)
        }
    } catch ($v_9) {
        Mscrm.EnableDocumentManagementPageHelper.$A([(0).toString()], null);
        window.document.body.removeChild($v_0)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$B = function($p0, $p1) {
    switch ($p0) {
    case 3:
    case 4:
    case 0:
        var $v_4 = "", $v_5 = "";
        switch ($p0) {
        case 3:
            $v_4 = window.LOCID_SP_CREATEDL_ALREADYEXIST;
            break;
        case 0:
            $v_4 = window.LOCID_SP_CREATEDL_FAILED;
            $v_5 = window.LOCID_GENERIC_MESSAGE;
            break;
        case 4:
            $v_4 = window.LOCID_SP_CREATEDL_SUCCEEDED;
            break
        }
        for (var $v_6 = 0; $v_6 < $p1.length; $v_6++)
            Mscrm.EnableDocumentManagementPageHelper.$F($p1[$v_6], $v_4, $v_5);
        break;
    case 2:
        var $v_7 = "";
        $p1 && Mscrm.EnableDocumentManagementPageHelper.$G($p1, $p0 === 2, $v_7);
        break
    }
    var $v_0 = $get("buttonNext");
    $v_0.disabled = false;
    var $v_1 = $get("AlreadyExist"), $v_2 = $get("NewCreate"), $v_3 = $get("Failed");
    XUI.Html.SetText($v_1, Mscrm.EnableDocumentManagementPageHelper.$6.toString());
    XUI.Html.SetText($v_2, Mscrm.EnableDocumentManagementPageHelper.$7.toString());
    XUI.Html.SetText($v_3, Mscrm.EnableDocumentManagementPageHelper.$4.toString())
};
Mscrm.EnableDocumentManagementPageHelper.$A = function($p0, $p1) {
    var $v_0 = Number.parseInvariant($p0[0]);
    switch ($v_0) {
    case 1:
        var $v_1;
        if (Mscrm.Utilities.isFirefox()) $v_1 = $p0;
        else $v_1 = CrmEncodeDecode.CrmUrlDecode($p0[1]).split(":");
        for (var $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
            var $v_8 = "", $v_9 = "", $v_A = $v_1[$v_7].split(",");
            if ($v_A.length >= 2) {
                var $v_B = $v_A[0], $v_C = Number.parseInvariant($v_A[1]);
                switch ($v_C) {
                case 3:
                    Mscrm.EnableDocumentManagementPageHelper.$6++;
                    $v_8 = window.LOCID_SP_CREATEDL_ALREADYEXIST;
                    break;
                case 0:
                    var $v_D = IsNull($v_A[2]) ? "LOCID_GENERIC_MESSAGE" : $v_A[2];
                    Mscrm.EnableDocumentManagementPageHelper.$4++;
                    $v_8 = window.LOCID_SP_CREATEDL_FAILED;
                    if (isNullOrEmptyString($v_D)) $v_9 = window.LOCID_GENERIC_MESSAGE;
                    else $v_9 = window[$v_D];
                    break;
                case 4:
                    $v_8 = window.LOCID_SP_CREATEDL_SUCCEEDED;
                    Mscrm.EnableDocumentManagementPageHelper.$7++;
                    break
                }
                Mscrm.EnableDocumentManagementPageHelper.$F($v_B, $v_8, $v_9)
            }
        }
        break;
    case 0:
    case 2:
        var $v_2 = "";
        if ($v_0 !== 2) $v_2 = IsNull($p0[1]) ? "LOCID_GENERIC_MESSAGE" : $p0[1];
        $p1 && Mscrm.EnableDocumentManagementPageHelper.$G($p1, $v_0 === 2, $v_2);
        var $$dict_E = Mscrm.EnableDocumentManagementPageHelper.$0;
        for (var $$key_F in $$dict_E) {
            var $v_E = { key: $$key_F, value: $$dict_E[$$key_F] }, $v_F = $v_E.value;
            Mscrm.EnableDocumentManagementPageHelper.$G($v_F, $v_0 === 2, $v_2)
        }
        Mscrm.EnableDocumentManagementPageHelper.$0 = null;
        var $v_3 = $get("buttonNext");
        $v_3.disabled = false;
        break
    }
    var $v_4 = $get("AlreadyExist"), $v_5 = $get("NewCreate"), $v_6 = $get("Failed");
    XUI.Html.SetText($v_4, Mscrm.EnableDocumentManagementPageHelper.$6.toString());
    XUI.Html.SetText($v_5, Mscrm.EnableDocumentManagementPageHelper.$7.toString());
    XUI.Html.SetText($v_6, Mscrm.EnableDocumentManagementPageHelper.$4.toString())
};
Mscrm.EnableDocumentManagementPageHelper.$G = function($p0, $p1, $p2) {
    var $v_0 = !isNullOrEmptyString($p2) ? window[$p2] : "",
        $v_1 = $p1 ? window.LOCID_SP_CREATEDL_CANCELED : window.LOCID_SP_CREATEDL_FAILED;
    if (!$p1) Mscrm.EnableDocumentManagementPageHelper.$4 += $p0.length;
    for (var $v_2 = 0; $v_2 < $p0.length; $v_2++) Mscrm.EnableDocumentManagementPageHelper.$F($p0[$v_2], $v_1, $v_0)
};
Mscrm.EnableDocumentManagementPageHelper.$F = function($p0, $p1, $p2) {
    var $v_0 = $get($p0 + "_createStatusCell");
    if (isNullOrEmptyString($p1)) {
        $v_0.innerHTML = "&nbsp";
        $v_0.setAttribute("title", "")
    } else {
        $v_0.innerHTML = "";
        XUI.Html.SetText($v_0, $p1);
        $v_0.setAttribute("title", $p1)
    }
    var $v_1 = $get($p0 + "_statusReasonCell");
    if (isNullOrEmptyString($p2)) {
        $v_1.innerHTML = "&nbsp";
        $v_1.setAttribute("title", "")
    } else {
        $v_1.innerHTML = "";
        XUI.Html.SetText($v_1, $p2);
        $v_1.setAttribute("title", $p2)
    }
};
Mscrm.EnableDocumentManagementPageHelper.$I = function($p0, $p1, $p2) {
    var $v_0 = $get("StatusReportTable"), $v_1 = $v_0.insertRow(-1);
    $v_1.id = $p0;
    var $v_2 = document.createElement("label");
    XUI.Html.SetText($v_2, $p2);
    $v_2.setAttribute("title", $p2);
    var $v_3 = $v_1.insertCell(-1);
    $v_3.id = $p0 + "_dlNameCell";
    $v_3.className = "mscrm-createDL-entityName-RowColumn";
    $v_3.appendChild($v_2);
    $v_1.appendChild($v_3);
    var $v_4 = document.createElement("a");
    $v_4.setAttribute("title", $p1);
    $v_4.setAttribute("href", $p1);
    $v_4.setAttribute("target", "_blank");
    $v_4.className = "ms-crm-gridUrl";
    XUI.Html.SetText($v_4, $p1);
    $v_4.style.cursor = "pointer";
    var $v_5 = $v_1.insertCell(-1);
    $v_5.id = $p0 + "_dlNameCell";
    $v_5.className = "mscrm-createDL-dlUrl-RowColumn";
    $v_5.appendChild($v_4);
    $v_1.appendChild($v_5);
    var $v_6 = document.createElement("img");
    $v_6.setAttribute("src", window.CDNURL + "/_imgs/ico/16_progress.gif");
    $v_6.setAttribute("alt", window.LOCID_SP_CREATEDL_INPROGRESS);
    var $v_7 = $v_1.insertCell(-1);
    $v_7.id = $p0 + "_createStatusCell";
    $v_7.appendChild($v_6);
    $v_1.appendChild($v_7);
    $v_7.className = "mscrm-createDL-Status-RowColumn";
    var $v_8 = $v_1.insertCell(-1);
    $v_8.id = $p0 + "_statusReasonCell";
    $v_8.innerHTML = "&nbsp";
    $v_8.className = "mscrm-createDL-StatusReason-RowColumn";
    $v_1.scrollIntoView()
};
Mscrm.EnableDocumentManagementPageHelper.getWizardDataToPost = function() {
    var $v_0 = window.WizardGetProperty("ValidateResult"), $v_1 = "", $v_2 = "";
    if (window.WizardHasProperty("SiteCollectionUrl") &&
        !isNullOrEmptyString(window.WizardGetProperty("SiteCollectionUrl"))) {
        $v_1 = window.WizardGetProperty("SiteCollectionUrl");
        $v_2 = window.WizardGetProperty("DefaultRelativeSite")
    } else $v_1 = window.WizardGetProperty("DefaultSiteUrl");
    var $v_3 = "<data><validateresult>" +
        $v_0 +
        "</validateresult><selectedentitycount>" +
        window.DOCM_ENTITY_COUNT_SELECTED +
        "</selectedentitycount><sitecollectionurl>" +
        CrmEncodeDecode.CrmXmlEncode($v_1) +
        "</sitecollectionurl><relativeurl>" +
        CrmEncodeDecode.CrmXmlEncode($v_2) +
        "</relativeurl></data>";
    return $v_3
};
Mscrm.EnableDocumentManagementPageHelper.setEntityCentricDescription = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("folderStructureEntity"),
        $v_1 = $get("entityCentricDescription");
    if ($v_0.get_selectedIndex() > 0) {
        var $v_2 = $v_0.get_dataValue(),
            $v_3 = XUI.Html.GetText($get("entityName_" + $v_2)),
            $v_4 = XUI.Html.GetText($get("entityPluralName_" + $v_2)),
            $v_5 = $v_0.get_innerText(),
            $v_6 = CrmEncodeDecode.CrmHtmlEncode(String.format(window.LOCID_DOCM_ENTITYCENTRICDESC, $v_5, $v_4)),
            $v_7 = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_DOCM_LOCATIONFORMAT),
            $v_8 = CrmEncodeDecode.CrmHtmlEncode(String.format(window.LOCID_DOCM_ENTITYLOCFORMAT, $v_3));
        $v_1.innerHTML = $v_6 + "<br/>" + $v_7 + "&nbsp;<b>" + $v_8 + "</b>"
    } else XUI.Html.SetText($v_1, "")
};
Mscrm.DocumentRecommendationPageHelper = function() {};
Mscrm.DocumentRecommendationPageHelper.updateEntityTableCheckBoxState = function(entityCount) {
    for (var $v_0 = 0; $v_0 < entityCount; $v_0++) {
        var $v_1 = $get("entityName_" + $v_0).value, $v_2 = $get("docRecEnabled_" + $v_1);
        Mscrm.DocumentRecommendationPageHelper.$D[$v_1] = $v_2.checked
    }
};
Mscrm.DocumentRecommendationPageHelper.savePageProperties = function(entityCount) {
    for (var $v_0 = "<EntityDocumentRecommendationEnabledXml>", $v_1 = 0; $v_1 < entityCount; $v_1++) {
        var $v_2 = $get("entityName_" + $v_1).value, $v_3 = $get("docRecEnabled_" + $v_2);
        if (Mscrm.DocumentRecommendationPageHelper.$D[$v_2] !== $v_3.checked) {
            $v_0 += '<entity name="' + $v_2 + '">';
            $v_0 += $v_3.checked;
            $v_0 += "</entity>"
        }
        if ($v_3.checked) {
            var $v_4 = XUI.Html.GetText($get("entityDisplayName_" + $v_1)), $v_5 = {};
            $v_5["entityDisplayName"] = $v_4
        }
    }
    $v_0 += "</EntityDocumentRecommendationEnabledXml>";
    window.DOCR_SELECTED_ENTITY = $v_0;
    return true
};
Mscrm.DocumentRecommendationPageHelper
    .saveDocumentRecommendationSettings = function(funAsyncCallbackFunction, externalBaseUrl) {
        var $v_0, $v_1 = new RemoteCommand("DocumentRecommendationWebService", "UpdatePropertySettingForEntities");
        $v_0 = window.DOCR_SELECTED_ENTITY;
        $v_1.SetParameter("entityPropertyXml", $v_0);
        $v_1.SetParameter("propertyName", "isdocumentrecommendationsenabled");
        $v_1.SetParameter("externalBaseUrl", externalBaseUrl);
        $v_1.Execute(funAsyncCallbackFunction)
    };
Mscrm.EnableDocumentManagementPageHelper.registerClass("Mscrm.EnableDocumentManagementPageHelper");
Mscrm.DocumentRecommendationPageHelper.registerClass("Mscrm.DocumentRecommendationPageHelper");
Mscrm.EnableDocumentManagementPageHelper.$C = {};
Mscrm.EnableDocumentManagementPageHelper.$1 = null;
Mscrm.EnableDocumentManagementPageHelper.$3 = "";
Mscrm.EnableDocumentManagementPageHelper.$6 = 0;
Mscrm.EnableDocumentManagementPageHelper.$7 = 0;
Mscrm.EnableDocumentManagementPageHelper.$4 = 0;
Mscrm.EnableDocumentManagementPageHelper.$0 = null;
Mscrm.EnableDocumentManagementPageHelper.$2 = null;
Mscrm.EnableDocumentManagementPageHelper.$5 = 0;
Mscrm.EnableDocumentManagementPageHelper.$9 = false;
Mscrm.DocumentRecommendationPageHelper.$D = {}