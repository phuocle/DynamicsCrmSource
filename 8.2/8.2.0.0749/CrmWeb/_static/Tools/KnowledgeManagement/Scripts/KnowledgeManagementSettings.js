Type.registerNamespace("Mscrm");
Mscrm.EnableKnowledgeManagementPageHelper = function() {};
Mscrm.EnableKnowledgeManagementPageHelper.initializeControls = function(entityCount) {
    var $v_0 = $get("selParatureInstance"), $v_1 = window.self.LOCID_PATARUREINSTANCE_VALUE;
    if (!isNullOrEmptyString($v_1)) $v_0.value = $v_1;
    var $v_2 = $get("txtSiteCollectionUrl");
    if (window.WizardHasProperty("DefaultSiteUrl")) $v_2.value = window.WizardGetProperty("DefaultSiteUrl");
    window.KM_ENTITY_COUNT_SELECTED = 0;
    for (var $v_4 = 0; $v_4 < entityCount; $v_4++) {
        var $v_5 = $get("entityName_" + $v_4).value, $v_6 = $get("knMgmtEnabled_" + $v_5);
        Mscrm.EnableKnowledgeManagementPageHelper.$0[$v_5] = $v_6.checked;
        if ($v_6.checked) window.KM_ENTITY_COUNT_SELECTED++
    }
    if (window.WizardHasProperty("EntityKnMgmtXml")) {
        for (var $v_7 = window.WizardGetProperty("EntityKnMgmtXml"),
            $v_8 = XUI.Xml.LoadXml($v_7),
            $v_9 = XUI.Xml.SelectNodes($v_8, "/EntityKnMgmtXml/entity", null),
            $v_J = 0;
            $v_J < $v_9.length;
            $v_J++) {
            var $v_K = XUI.Xml.GetText($v_9[$v_J].attributes
                    .getNamedItem("name")),
                $v_L = $get("knMgmtEnabled_" + $v_K);
            $v_L.checked = XUI.Xml.GetText($v_9[$v_J]) === "true";
            Mscrm.EnableKnowledgeManagementPageHelper.$1[$v_K] = XUI.Xml.GetText($v_9[$v_J]) === "true" ? true : false
        }
        $v_1 = window.WizardGetProperty("ParatureInstance");
        if (window.WizardHasProperty("ParatureInstance") && !isNullOrEmptyString($v_1)) $v_0.value = $v_1;
        var $v_A = $get("txtAccountId"), $v_B = window.WizardGetProperty("AccountID");
        if (window.WizardHasProperty("AccountID") && !isNullOrEmptyString($v_B)) $v_A.value = $v_B;
        var $v_C = $get("txtDepartment"), $v_D = window.WizardGetProperty("Department");
        if (window.WizardHasProperty("Department") && !isNullOrEmptyString($v_D)) $v_C.value = $v_D;
        var $v_E = $get("txtSupportURL"), $v_F = window.WizardGetProperty("SupportURL");
        if (window.WizardHasProperty("SupportURL") && !isNullOrEmptyString($v_F)) $v_E.value = $v_F;
        var $v_G = $get("chkUseExtPortal");
        if (window.WizardHasProperty("ChkUseExtPortal")) {
            var $v_M = window.WizardGetProperty("ChkUseExtPortal");
            $v_G.checked = $v_M
        } else $v_G.checked = false;
        var $v_H = $get("txtNativeCRMUrl"), $v_I = window.WizardGetProperty("NativeCRMUrl");
        if (window.WizardHasProperty("NativeCRMUrl") && !isNullOrEmptyString($v_I)) $v_H.value = $v_I
    }
    var $v_3 = $get("checkAll");
    $v_3.checked = window.KM_ENTITY_COUNT_SELECTED === entityCount;
    window.WizardSetProperty("ParatureInstance", "");
    window.WizardSetProperty("NativeCRMUrl", "");
    window.WizardSetProperty("SiteCollectionUrl", "");
    window.WizardSetProperty("AccountID", "");
    window.WizardSetProperty("Department", "");
    window.WizardSetProperty("SupportURL", "");
    window.WizardSetProperty("DefaultRelativeSite", "")
};
Mscrm.EnableKnowledgeManagementPageHelper.$6 = function() { return "parature" === $get("selKnowledgeSolution").value };
Mscrm.EnableKnowledgeManagementPageHelper.$7 = function() {
    var $v_0 = window.bCrmUrlGrayTextOn;
    return $v_0 ? "" : $get("txtNativeCRMUrl").value
};
Mscrm.EnableKnowledgeManagementPageHelper.$8 = function() { return $get("selParatureInstance").value };
Mscrm.EnableKnowledgeManagementPageHelper.$9 = function() { return $get("txtSiteCollectionUrl").value };
Mscrm.EnableKnowledgeManagementPageHelper.$2 = function() {
    var $v_0 = window.bAccGrayTextOn;
    return $v_0 ? "" : $get("txtAccountId").value
};
Mscrm.EnableKnowledgeManagementPageHelper.$3 = function() {
    var $v_0 = window.bDepGrayTextOn;
    return $v_0 ? "" : $get("txtDepartment").value
};
Mscrm.EnableKnowledgeManagementPageHelper.$5 = function() { return $get("chkUseExtPortal").checked };
Mscrm.EnableKnowledgeManagementPageHelper.$A = function() {
    var $v_0 = window.bSupGrayTextOn;
    return $v_0 ? "" : $get("txtSupportURL").value
};
Mscrm.EnableKnowledgeManagementPageHelper.savePageProperties = function(entityCount) {
    var $v_0 = window.KM_ENTITY_COUNT_SELECTED;
    window.WizardSetProperty("SelectedEntityCount", window.KM_ENTITY_COUNT_SELECTED);
    if (!window.KM_ENTITY_COUNT_SELECTED) if (!confirm(window.LOCID_DOCM_NOENTITY_SELECTED)) return false;
    var $v_1 = Mscrm.EnableKnowledgeManagementPageHelper.$6();
    window.WizardSetProperty("IsParature", $v_1);
    if ($v_1) {
        var $v_4 = Mscrm.EnableKnowledgeManagementPageHelper.$8(),
            $v_5 = Mscrm.EnableKnowledgeManagementPageHelper.$9(),
            $v_6 = Mscrm.EnableKnowledgeManagementPageHelper.$2(),
            $v_7 = Mscrm.EnableKnowledgeManagementPageHelper.$3(),
            $v_8 = Mscrm.EnableKnowledgeManagementPageHelper.$A(),
            $v_9 = Mscrm.CrmUri.create($v_5);
        if ($v_9.get_host().toUpperCase() === "LOCALHOST") {
            alert(window.LOCID_DOCM_LOCALHOST_URL);
            return false
        }
        window.WizardSetProperty("ParatureInstance", $v_4);
        window.WizardSetProperty("DefaultSiteUrl", $v_5);
        window.WizardSetProperty("AccountID", $v_6);
        window.WizardSetProperty("Department", $v_7);
        window.WizardSetProperty("SupportURL", $v_8)
    } else {
        var $v_A = Mscrm.EnableKnowledgeManagementPageHelper.$5();
        window.WizardSetProperty("ChkUseExtPortal", $v_A);
        if ($v_A) {
            var $v_B = Mscrm.EnableKnowledgeManagementPageHelper.$7();
            window.WizardSetProperty("NativeCRMUrl", $v_B)
        }
    }
    for (var $v_2 = {}, $v_3 = "<EntityKnMgmtXml>", $v_C = 0; $v_C < entityCount; $v_C++) {
        var $v_D = $get("entityName_" + $v_C).value, $v_E = $get("knMgmtEnabled_" + $v_D);
        if (Mscrm.EnableKnowledgeManagementPageHelper.$0[$v_D] !== $v_E.checked ||
            Mscrm.EnableKnowledgeManagementPageHelper.$1[$v_D] === $v_E.checked ||
            $v_E.checked) {
            $v_3 += '<entity name="' + CrmEncodeDecode.CrmXmlAttributeEncode($v_D) + '">';
            $v_3 += $v_E.checked;
            $v_3 += "</entity>"
        }
        if ($v_E.checked) {
            var $v_F = $get("entityBaseLanguageDisplayName_" + $v_C).value,
                $v_G = XUI.Html.GetText($get("entityDisplayName_" + $v_C)),
                $v_H = {};
            $v_H["entityDisplayName"] = $v_G;
            $v_H["entityBaseLanguageDisplayName"] = $v_F;
            $v_2[$v_D] = $v_H
        }
    }
    $v_3 += "</EntityKnMgmtXml>";
    window.WizardSetProperty("EntityKnMgmtXml", $v_3);
    $v_0 > 0 && window.WizardSetProperty("SelectedEntityList", $v_2);
    return true
};
Mscrm.EnableKnowledgeManagementPageHelper
    .saveKnowledgeManagementSettings = function(saveKnowledgeManagementSettingsCallbackFunction) {
        var $v_0 = new RemoteCommand("KnowledgeManagementWebService", "UpdateKnowledgeManagementSettings"),
            $v_1 = window.WizardGetProperty("EntityKnMgmtXml");
        $v_0.SetParameter("entityKnowledgeMgmtXml", $v_1);
        $v_0.Execute(saveKnowledgeManagementSettingsCallbackFunction)
    };
Mscrm.EnableKnowledgeManagementPageHelper.updateKMSettings = function() {
    var $v_0 = Xrm.Page.context.getUserId(),
        $v_1 = ["organizationid"],
        $v_2 = null,
        $v_3 = window.WizardGetProperty("IsReset");
    Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/jquery-2.1.1.min.js"), true);
    Xrm.Internal.messages.retrieve("systemuser", $v_0, $v_1).then(function($p1_0) {
            var $v_4 = $p1_0.entity;
            if ($v_4.hasValue("organizationid")) $v_2 = $v_4.getValue("organizationid");
            var $v_5 = new Xrm.Objects.EntityReference("organization", $v_2),
                $v_6 = {},
                $v_7 = {},
                $v_8 = ["kmsettings"];
            $v_6["kmsettings"] = Mscrm.EnableKnowledgeManagementPageHelper.$4();
            $v_7["kmsettings"] = 14;
            var $v_9 = new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel
                .EntityRecord($v_5,
                    $v_6,
                    $v_7,
                    {},
                    {},
                    new Microsoft.Crm.Client.Core.Storage.Common.ObjectModel.RelatedEntityCollection(new Array(0)));
            $v_9.get_changedFieldNames().addRange($v_8);
            Xrm.Internal.messages.update($v_9).then(function($p2_0) {
                    window.parent.toggleProgressIndicator(false);
                    window.WizardSetProperty("EntityKnMgmtXml", null);
                    (IsNull($v_3) || !$v_3) && window.WizardNavigate(_WizardNavigateEnum.CLOSE)
                },
                function($p2_0) {})
        },
        function($p1_0) {})
};
Mscrm.EnableKnowledgeManagementPageHelper.$4 = function() {
    var $v_0 = "<KMSettings>";
    if (window.WizardHasProperty("IsParature")) {
        var $v_1 = window.WizardGetProperty("IsParature");
        $v_0 += "<IsParature>" + $v_1 + "</IsParature>";
        if ($v_1) {
            var $v_2 = window.WizardGetProperty("ParatureInstance"),
                $v_3 = window.WizardGetProperty("DefaultSiteUrl"),
                $v_4 = window.WizardGetProperty("AccountID"),
                $v_5 = window.WizardGetProperty("Department"),
                $v_6 = window.WizardGetProperty("SupportURL");
            if ($v_2 && $v_3 && $v_4 && $v_5 && $v_6) {
                $v_0 += "<ParatureInstance>" + CrmEncodeDecode.CrmXmlEncode($v_2) + "</ParatureInstance>";
                $v_0 += "<ParatureUrl>" + CrmEncodeDecode.CrmXmlEncode($v_3) + "</ParatureUrl>";
                $v_0 += "<AccountId>" + CrmEncodeDecode.CrmXmlEncode($v_4) + "</AccountId>";
                $v_0 += "<DepartmentId>" + CrmEncodeDecode.CrmXmlEncode($v_5) + "</DepartmentId>";
                $v_0 += "<SupportURL>" + CrmEncodeDecode.CrmXmlEncode($v_6) + "</SupportURL>"
            }
        } else if (window.WizardHasProperty("ChkUseExtPortal") && window.WizardHasProperty("NativeCRMUrl")) {
            var $v_7 = window.WizardGetProperty("ChkUseExtPortal"), $v_8 = window.WizardGetProperty("NativeCRMUrl");
            $v_0 += "<UseExternalPortal>" + $v_7 + "</UseExternalPortal>";
            $v_0 += "<NativeCrmUrl>" + CrmEncodeDecode.CrmXmlEncode($v_8) + "</NativeCrmUrl>"
        }
    }
    $v_0 += "</KMSettings>";
    return $v_0
};
Mscrm.EnableKnowledgeManagementPageHelper.loadIsParature = function() {
    var $v_0 = false,
        $v_1 = $get("knowledgeSolutionTable"),
        $v_2 = $get("nativeCRMDetailsTable"),
        $v_3 = $get("paratureDetailsTable");
    if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.KnowledgeArticle")) {
        $v_1.style.display = "none";
        $v_2.style.display = "none";
        return true
    }
    if (!Mscrm.InternalUtilities.Utilities.isParatureKnowledgebaseVisable()) {
        $v_1.style.display = "none";
        $v_3.style.display = "none";
        return false
    }
    $v_1.style.display = null;
    $v_2.style.display = null;
    $v_3.style.display = null;
    if (window.WizardHasProperty("IsParature")) $v_0 = window.WizardGetProperty("IsParature");
    else {
        var $v_4 = window.self.LOCID_ISPARATURE_VALUE;
        if (!isNullOrEmptyString($v_4)) $v_0 = $v_4 === "1"
    }
    return $v_0
};
Mscrm.EnableKnowledgeManagementPageHelper.validateParatureInstance = function() {
    var $v_0 = $get("selParatureInstance").value, $v_1 = $get("selParatureInstance");
    if (!isNullOrEmptyString($v_0)) {
        for (var $v_2 = false, $v_3 = 0; $v_3 < $v_1.options.length; $v_3++)
            if ($v_1.options[$v_3].attributes.getNamedItem("value").value === $v_0) {
                $v_1.selectedIndex = $v_3;
                $v_2 = true
            }
        if (!$v_2) {
            EnableDisableFields(true);
            var $v_4 = $get("paratureImage");
            $v_4.setAttribute("src", window.CDNURL + "/_imgs/ico/16_error.gif");
            $v_4.setAttribute("title", window.self.LOCID_PARATUREINSTANCE_ERROR.toString());
            $v_4.style.display = "inline";
            var $v_5 = $get("txtSiteCollectionUrl");
            $v_5.value = "";
            $v_1.selectedIndex = -1;
            $get("txtAccountId").value = "";
            $get("txtDepartment").value = "";
            $get("txtSupportURL").value = "";
            $get("buttonNext").disabled = true
        }
    } else $v_1.selectedIndex = -1
};
Mscrm.EnableKnowledgeManagementPageHelper.validateSiteURL = function() {
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
    var $v_3 = Mscrm.Utilities.trimEnd($v_2.get_path().toLowerCase(), ["/"]);
    if ($v_3.endsWith(".aspx") || $v_3.endsWith(".ashx") || $v_3.endsWith(".asmx") || $v_3.endsWith(".svc")) {
        alert(window.LOCID_DOCM_URLCANNOTBEPAGE);
        return
    }
    $v_2.get_scheme() === "http" && window.location.protocol === "https:" && alert(window.LOCID_DOCM_CRMHTTPS_SPHTTP);
    var $v_4 = $get("entityTable"),
        $v_5 = $get("paratureDetailsTable"),
        $v_6 = $get("ResetTable"),
        $v_7 = $get("SupportURLText"),
        $v_8 = $get("showProgress"),
        $v_9 = $get("buttonNext");
    $v_9.disabled = true;
    $v_6.style.display = "none";
    $v_4.style.display = "none";
    $v_5.style.display = "none";
    $v_7.style.display = "none";
    $v_8.style.display = "block"
};
Mscrm.EnableKnowledgeManagementPageHelper.validateAccountID = function() {
    var $v_0 = Mscrm.EnableKnowledgeManagementPageHelper.$2(), $v_1 = new RegExp("^\\w*$");
    !$v_1.test($v_0) && alert(window.LOCID_KM_ACCOUNT_ALPHANUM)
};
Mscrm.EnableKnowledgeManagementPageHelper.validateDepartment = function() {
    var $v_0 = Mscrm.EnableKnowledgeManagementPageHelper.$3(), $v_1 = new RegExp("^\\w*$");
    !$v_1.test($v_0) && alert(window.LOCID_KM_DEPARTMENT_ALPHANUM)
};
Mscrm.EnableKnowledgeManagementPageHelper.validateSupportUrl = function() {
    var $v_0 = window.WizardGetProperty("SupportURL"), $v_1 = Mscrm.CrmUri.create($v_0);
    if (!($v_1.get_scheme() === "http" || $v_1.get_scheme() === "https")) return 2;
    var $v_2 = $v_1.get_host();
    if ($v_2.indexOf(".") < 1 || $v_2.length <= $v_2.lastIndexOf(".") + 2) return 3;
    return 0
};
Mscrm.EnableKnowledgeManagementPageHelper.validateNativeCrmUrl = function() {
    var $v_0 = window.WizardGetProperty("NativeCRMUrl"), $v_1 = Mscrm.CrmUri.create($v_0);
    if (!($v_1.get_scheme() === "http" || $v_1.get_scheme() === "https")) return 102;
    if (-1 === $v_0.indexOf("{kbnum}")) return 104;
    var $v_2 = $v_1.get_host();
    if ($v_2.indexOf(".") < 1 || $v_2.length <= $v_2.lastIndexOf(".") + 2) return 103;
    return 100
};
Mscrm.EnableKnowledgeManagementPageHelper
    .validate = function(url, accountId, department, successCallback, failureCallback) {
        if (!url.endsWith("/api/v1")) url += "/api/v1";
        Mscrm.SearchWidgetControl.Runtime.UrlUtility
            .set_externalServiceUri(Mscrm.CrmUri.create(url + "/" + accountId + "/" + department + "/Article"));
        Mscrm.SearchWidgetControl.Runtime.AuthenticationService.get_checkSignedIn().done(function($p1_0) {
            if (!$p1_0) failureCallback("");
            else successCallback()
        }).fail(function($p1_0) { failureCallback($p1_0) })
    };
Mscrm.EnableKnowledgeManagementPageHelper.getWizardDataToPost = function() {
    var $v_0 = window.WizardGetProperty("ValidateResult"),
        $v_1 = "",
        $v_2 = "",
        $v_3 = "",
        $v_4 = "",
        $v_5 = "",
        $v_6 = "",
        $v_7 = false;
    if (window
        .WizardHasProperty("IsParature") &&
        !isNullOrEmptyString(window.WizardGetProperty("IsParature"))) $v_7 = window.WizardGetProperty("IsParature");
    if (window.WizardHasProperty("SiteCollectionUrl") &&
        !isNullOrEmptyString(window
            .WizardGetProperty("SiteCollectionUrl"))) $v_1 = window.WizardGetProperty("SiteCollectionUrl");
    var $v_8 = "<data><validateresult>" +
        $v_0 +
        "</validateresult><selectedentitycount>" +
        window.KM_ENTITY_COUNT_SELECTED +
        "</selectedentitycount><isParature>" +
        $v_7 +
        "</isParature>";
    if ($v_7) {
        if (window
            .WizardHasProperty("AccountID") &&
            !isNullOrEmptyString(window.WizardGetProperty("AccountID"))) $v_2 = window.WizardGetProperty("AccountID");
        if (window
            .WizardHasProperty("Department") &&
            !isNullOrEmptyString(window.WizardGetProperty("Department"))) $v_3 = window.WizardGetProperty("Department");
        if (window.WizardHasProperty("ParatureInstance") &&
            !isNullOrEmptyString(window
                .WizardGetProperty("ParatureInstance"))) $v_4 = window.WizardGetProperty("ParatureInstance");
        if (window
            .WizardHasProperty("SupportURL") &&
            !isNullOrEmptyString(window.WizardGetProperty("SupportURL"))) $v_5 = window.WizardGetProperty("SupportURL");
        $v_8 += "<paratureinstance>" +
            CrmEncodeDecode.CrmXmlEncode($v_4) +
            "</paratureinstance><sitecollectionurl>" +
            CrmEncodeDecode.CrmXmlEncode($v_1) +
            "</sitecollectionurl><accountid>" +
            CrmEncodeDecode.CrmXmlEncode($v_2) +
            "</accountid><department>" +
            CrmEncodeDecode.CrmXmlEncode($v_3) +
            "</department><supporturl>" +
            CrmEncodeDecode.CrmXmlEncode($v_5) +
            "</supporturl>"
    } else if (window.WizardHasProperty("ChkUseExtPortal")) {
        var $v_9 = window.WizardGetProperty("ChkUseExtPortal");
        $v_8 += "<chkUseExtPortal>" + $v_9 + "</chkUseExtPortal>";
        if ($v_9) {
            if (window.WizardHasProperty("NativeCRMUrl") &&
                !isNullOrEmptyString(window
                    .WizardGetProperty("NativeCRMUrl"))) $v_6 = window.WizardGetProperty("NativeCRMUrl");
            $v_8 += "<nativeCRMUrl>" + CrmEncodeDecode.CrmXmlEncode($v_6) + "</nativeCRMUrl>"
        }
    }
    $v_8 += "</data>";
    return $v_8
};
Mscrm.EnableKnowledgeManagementPageHelper.populateInstanceValues = function() {
    var $v_0 = $get("selParatureInstance").value,
        $v_1 = window.self.LOCID_PARATUREINSTANCES,
        $v_2 = XUI.Xml.LoadXml($v_1),
        $v_3 = "ArrayOfKMSettings/KMSettings/",
        $v_4 = XUI.Xml.SelectNodes($v_2, $v_3 + "ParatureInstance", null),
        $v_5 = XUI.Xml.SelectNodes($v_2, $v_3 + "AccountId", null),
        $v_6 = XUI.Xml.SelectNodes($v_2, $v_3 + "ParatureUrl", null);
    if ($v_4)
        for (var $v_7 = 0; $v_7 < $v_4.length; $v_7++)
            if (XUI.Xml.GetText($v_4[$v_7]) === $v_0) {
                $get("txtSiteCollectionUrl").value = XUI.Xml.GetText($v_6[$v_7]);
                $get("txtAccountId").value = XUI.Xml.GetText($v_5[$v_7]);
                break
            }
};
Mscrm.EnableKnowledgeManagementPageHelper.registerClass("Mscrm.EnableKnowledgeManagementPageHelper");
Mscrm.EnableKnowledgeManagementPageHelper.$0 = {};
Mscrm.EnableKnowledgeManagementPageHelper.$1 = {}