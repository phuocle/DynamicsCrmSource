Type.registerNamespace("Mscrm");
Mscrm.S2SIntegrationStage = function() {};
Mscrm.S2SIntegrationStage.prototype = { none: 0, deployment: 1, prepareSites: 2, validateSites: 3 };
Mscrm.S2SIntegrationStage.registerEnum("Mscrm.S2SIntegrationStage", false);
Mscrm.SPSiteRecord = function() {};
Mscrm.SPSiteRecord.prototype = {
    $1_0: null,
    $4_0: null,
    $3_0: null,
    $0_0: null,
    get_parentSite: function() { return this.$1_0 },
    set_parentSite: function(value) {
        this.$1_0 = value;
        return value
    },
    get_relativeUrl: function() { return this.$4_0 },
    set_relativeUrl: function(value) {
        this.$4_0 = value;
        return value
    },
    get_absoluteUrl: function() { return this.$0_0 },
    set_absoluteUrl: function(value) {
        this.$0_0 = value;
        return value
    },
    get_name: function() { return this.$3_0 },
    set_name: function(value) {
        this.$3_0 = value;
        return value
    }
};
Mscrm.S2SUpgradeWizardRerunHelper = function() {};
Mscrm.S2SUpgradeWizardRerunHelper.retrieveSharePointSettings = function() {
    if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")) {
        Mscrm.S2SUpgradeWizardRerunHelper.$E(true);
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/jquery1.7.2.min.js"), true);
        Xrm.Internal.messages.retrieveSharePointGlobalSettings()
            .then(function($p1_0) { Mscrm.S2SUpgradeWizardRerunHelper.$U($p1_0) },
                Mscrm.S2SUpgradePageHelper.handleErrorMessage)
    }
};
Mscrm.S2SUpgradeWizardRerunHelper.$U = function($p0) {
    var $v_0 = Mscrm.S2SUpgradeWizardRerunHelper.$K($p0), $v_1 = false;
    if (!IsNull($v_0["IsSharePointOnline"])) {
        window.WizardSetProperty("isSharePointOnline", $v_0["IsSharePointOnline"]);
        $v_1 = $v_0["IsSharePointOnline"];
        if ($v_1)
            $v_0["SharePointTenantId"] && window.WizardSetProperty("SharePointTenantId", $v_0["SharePointTenantId"]);
        else $v_0["SharePointRealmId"] && window.WizardSetProperty("SharePointRealmId", $v_0["SharePointRealmId"])
    }
    if (window.WizardHasProperty("isSharePointOnline")) {
        Mscrm.S2SUpgradeWizardRerunHelper.setDomElementsInWizard(1, $v_1);
        Mscrm.S2SUpgradeWizardRerunHelper.$E(false)
    }
};
Mscrm.S2SUpgradeWizardRerunHelper.setDomElementsInWizard = function(stage, isSharePointOnline) {
    switch (stage) {
    case 1:
        Mscrm.S2SUpgradeWizardRerunHelper.$T(isSharePointOnline ? "sponline" : "sponprem");
        window.changedradiobutton(isSharePointOnline);
        break;
    case 2:
        if (isSharePointOnline && window.WizardHasProperty("SharePointTenantId")) {
            var $v_0 = $get("txtsharepointTenantid");
            if ($v_0) {
                window.setGreyTextOff("txtsharepointTenantid");
                $v_0.value = window.WizardGetProperty("SharePointTenantId")
            }
        } else if (!isSharePointOnline && window.WizardHasProperty("SharePointRealmId")) {
            var $v_1 = $get("txtsharepointrealmid");
            if ($v_1) {
                window.setGreyTextOff("txtsharepointrealmid");
                $v_1.value = window.WizardGetProperty("SharePointRealmId")
            }
        }
        window.enabledisablenext();
        break
    }
};
Mscrm.S2SUpgradeWizardRerunHelper.$T = function($p0) {
    var $v_0 = $get($p0);
    $v_0.checked = true
};
Mscrm.S2SUpgradeWizardRerunHelper.$E = function($p0) {
    var $v_0 = $get("showProgress"), $v_1 = $get("formcontent");
    if ($v_0) $v_0.style.display = $p0 ? "" : "none";
    if ($v_1) $v_1.style.display = $p0 ? "none" : ""
};
Mscrm.S2SUpgradeWizardRerunHelper.$K = function($p0) {
    var $v_0 = {},
        $v_1 = XUI.Xml.LoadXml($p0.sharePointGlobalSetting),
        $v_2 = Mscrm.S2SUpgradeWizardRerunHelper.$9($v_1, "/SharePointSettings/isSharepointOnline");
    if ($v_2) {
        $v_0["IsSharePointOnline"] = Boolean.parse($v_2);
        if ($v_0["IsSharePointOnline"]) {
            var $v_3 = Mscrm.S2SUpgradeWizardRerunHelper.$9($v_1, "/SharePointSettings/sharePointTenantId");
            if ($v_3) $v_0["SharePointTenantId"] = $v_3
        } else {
            var $v_4 = Mscrm.S2SUpgradeWizardRerunHelper.$9($v_1, "/SharePointSettings/sharePointRealmId");
            if ($v_4) $v_0["SharePointRealmId"] = $v_4
        }
    }
    return $v_0
};
Mscrm.S2SUpgradeWizardRerunHelper.$9 = function($p0, $p1) {
    var $v_0 = XUI.Xml.SelectSingleNode($p0, $p1, null);
    if ($v_0 && $v_0.attributes.length > 0) {
        var $v_1 = $v_0.attributes.getNamedItem("value");
        if ($v_1) return CrmEncodeDecode.CrmHtmlEncode($v_1.nodeValue)
    }
    return null
};
Mscrm.S2SUpgradePageHelper = function() {};
Mscrm.S2SUpgradePageHelper.initializeControls = function() {
    var $v_0 = $get("txtSiteCollectionUrl");
    if (window.WizardHasProperty("DefaultSiteUrl")) $v_0.value = window.WizardGetProperty("DefaultSiteUrl")
};
Mscrm.S2SUpgradePageHelper.$S = function() {
    var $v_0 = window.bGrayTextOn, $v_1 = $v_0["txtSiteCollectionUrl"], $v_2 = "";
    if (!$v_1) {
        $v_2 = $get("txtSiteCollectionUrl").value;
        $v_2 = $v_2.trim()
    }
    return $v_2
};
Mscrm.S2SUpgradePageHelper.$Q = function() { return window.isSharePointOnline };
Mscrm.S2SUpgradePageHelper.renderStageControl = function(stageOfWizard) {
    if (typeof window.LOCID_STAGE_DEFINE_DEPLOYMENT !== "undefined") {
        window.WizardSetProperty("defineDeploymentStage", window.LOCID_STAGE_DEFINE_DEPLOYMENT);
        window.WizardSetProperty("prepareSitesStage", window.LOCID_STAGE_PREPARE_SITES);
        window.WizardSetProperty("validateSitesStage", window.LOCID_STAGE_VALIDATE_SITES)
    }
    var $v_0 = $get("S2SIntegrationStageControl"), $v_1, $v_2, $v_3;
    if (window.LOCID_UI_DIR === "RTL") {
        $v_1 = window.CDNURL + "/_imgs/definedeployment_grey_rtl.png";
        $v_2 = window.CDNURL + "/_imgs/preparesites_grey_rtl.png";
        $v_3 = window.CDNURL + "/_imgs/validatesites_grey_rtl.png"
    } else {
        $v_1 = window.CDNURL + "/_imgs/definedeployment_grey.png";
        $v_2 = window.CDNURL + "/_imgs/preparesites_grey.png";
        $v_3 = window.CDNURL + "/_imgs/validatesites_grey.png"
    }
    var $v_4 = "mscrm-text-unSelectedStage", $v_5 = "mscrm-text-unSelectedStage", $v_6 = "mscrm-text-unSelectedStage";
    switch (stageOfWizard) {
    case 1:
        if (window.LOCID_UI_DIR === "RTL") $v_1 = window.CDNURL + "/_imgs/definedeployment_blue_rtl.png";
        else $v_1 = window.CDNURL + "/_imgs/definedeployment_blue.png";
        $v_4 = "mscrm-text-SelectedStage";
        break;
    case 2:
        if (window.LOCID_UI_DIR === "RTL") $v_2 = window.CDNURL + "/_imgs/preparesites_blue_rtl.png";
        else $v_2 = window.CDNURL + "/_imgs/preparesites_blue.png";
        $v_5 = "mscrm-text-SelectedStage";
        Mscrm.S2SUpgradePageHelper.logMetricsforWizard("WizardLoad", "");
        break;
    case 3:
        if (window.LOCID_UI_DIR === "RTL") $v_3 = window.CDNURL + "/_imgs/validatesites_blue_rtl.png";
        else $v_3 = window.CDNURL + "/_imgs/validatesites_blue.png";
        $v_6 = "mscrm-text-SelectedStage";
        break;
    default:
        break
    }
    $v_0.innerHTML = String
        .format("<table id='ConfigurationStage' cellpadding='0' cellspacing='0' style='text-align:center;width:100%'><colgroup><col width='33%' /><col width='33%' /><col width='33%' /></colgroup><tr><td ><div id='stage1' class='" + $v_4 + "'>{0}</div></td><td><div id='stage2' class='" + $v_5 + "'>{1}</div></td><td><div id='stage3' class='" + $v_6 + "'>{2}</div></div></td></tr><tr><td><div id='stage1Img'><img src='{3}' style='width:100%;height:8px'  alt='{0}'/></div></td><td><div id='stage2Img'><img src='{4}' style='width:100%;height:8px'  alt='{0}'/></div></td><td><div id='stage3Img'><img src='{5}' style='width:100%;height:8px'  alt='{0}'/></div></td></tr></table>", window.WizardGetProperty("defineDeploymentStage"), window.WizardGetProperty("prepareSitesStage"), window.WizardGetProperty("validateSitesStage"), $v_1, $v_2, $v_3)
};
Mscrm.S2SUpgradePageHelper.saveSharePointSiteUrl = function() {
    var $v_0 = Mscrm.S2SUpgradePageHelper.$S();
    if (!Mscrm.S2SUpgradePageHelper.$R($v_0)) return false;
    if ($v_0.endsWith("/")) $v_0 = $v_0.substr(0, $v_0.length - 1);
    var $v_1 = Mscrm.CrmUri.create($v_0), $v_2 = Mscrm.CrmUri.create(window.location.href);
    $v_2.get_scheme() !== $v_1.get_scheme() && alert(window.LOCID_DOCM_MIXEDMODE_WARNING);
    window.WizardSetProperty("DefaultSiteUrl", $v_0);
    return true
};
Mscrm.S2SUpgradePageHelper.savePageDeploymentType = function() {
    var $v_0 = Mscrm.S2SUpgradePageHelper.$Q();
    window.WizardSetProperty("isSharePointOnline", $v_0);
    return true
};
Mscrm.S2SUpgradePageHelper.logMetricsforWizard = function(eventName, pageName) {
    Mscrm.MetricsReporting.instance().addMetric(eventName,
    {
        date: Mscrm.DateTimeUtility.localDateTimeNow().toLocaleDateString(),
        time: Mscrm.DateTimeUtility.localDateTimeNow().toLocaleTimeString(),
        orgId: window.ORG_ID,
        userId: Xrm.Page.context.getUserId(),
        userCancelledPage: Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(pageName) ? "" : pageName
    })
};
Mscrm.S2SUpgradePageHelper.$R = function($p0) {
    var $v_0 = 2;
    if (!isNullOrEmptyString($p0)) {
        var $v_1 = Mscrm.CrmUri.create($p0);
        if (validateUrlProtocol($p0) === $v_0) {
            alert(window.LOCID_DOCM_INVALIDURL);
            return false
        }
        if ($v_1.get_host().toUpperCase() === "LOCALHOST") {
            alert(window.LOCID_DOCM_LOCALHOST_URL);
            return false
        }
        if ($v_1.get_scheme() !== "https" && $v_1.get_scheme() !== "http") {
            alert(window.LOCID_DOCM_INVALIDURL);
            return false
        }
        if ($v_1.get_scheme() !== "https" && !($v_1.get_scheme() === "http" && Mscrm.S2SUpgradePageHelper.$J())) {
            alert(window.LOCID_DOCM_SP_NOT_HTTPS);
            return false
        }
        var $v_2 = Mscrm.Utilities.trimEnd($v_1.get_path().toLowerCase(), ["/"]);
        if ($v_2.endsWith(".aspx") || $v_2.endsWith(".ashx") || $v_2.endsWith(".asmx") || $v_2.endsWith(".svc")) {
            alert(window.LOCID_DOCM_URLCANNOTBEPAGE);
            return false
        }
        return true
    }
    return false
};
Mscrm.S2SUpgradePageHelper
    .updateGlobalSharePointSettings = function(sharepointRealm, isSharepointOnline, useAuthorizationServer) {
        Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_common/scripts/jquery1.7.2.min.js"), true);
        Xrm.Internal.messages
            .updateGlobalSharePointSettings(sharepointRealm, isSharepointOnline, useAuthorizationServer)
            .then(function($p1_0) { Mscrm.S2SUpgradePageHelper.$M($p1_0) },
                Mscrm.S2SUpgradePageHelper.handleErrorMessage)
    };
Mscrm.S2SUpgradePageHelper.$M = function($p0) { window.WizardNavigate(_WizardNavigateEnum.NEXT) };
Mscrm.S2SUpgradePageHelper.finalizeSettings = function() {
    if (!IsOutlookClient()) window.parent.opener && window.parent.opener.location.reload();
    Mscrm.S2SUpgradePageHelper.logMetricsforWizard("WizardComplete", "");
    window.WizardNavigate(_WizardNavigateEnum.CLOSE)
};
Mscrm.S2SUpgradePageHelper.openS2SConfigurationSettings = function(wizardId) {
    var $v_0 = Mscrm.CrmUri.create(String.format("/WebWizard/WizardContainer.aspx?WizardId={0}", wizardId));
    if (isOutlookHostedWindow()) {
        openStdDlg($v_0, "null", 650, 620, false, false);
        window.location.reload()
    } else openStdWin($v_0, "null", 650, 620, "resizable=0, status=0, dialog=1")
};
Mscrm.S2SUpgradePageHelper.openDocumentManagementSettings = function() {
    var $v_0 = Mscrm.CrmUri.create("/WebWizard/WizardContainer.aspx?WizardId=2164dd44-6f89-430c-9c7b-abfa44320cf0");
    openStdWin($v_0, "_blank", 520, 530, null);
    Mscrm.S2SUpgradePageHelper.finalizeSettings()
};
Mscrm.S2SUpgradePageHelper.enableFeature = function() {
    var $v_0 = $get("showProgress"), $v_1 = $get("buttonNext"), $v_2 = window.WizardGetProperty("DefaultSiteUrl");
    $v_2 = IsNull($v_2) ? "" : $v_2;
    var $v_3 = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S");
    Xrm.Internal.messages.migrateToS2S($v_2).then(function() {
            if (!IsNull($v_0)) $v_0.style.display = "none";
            !IsNull($v_1) && Mscrm.Utilities.enableDisableDomElement($v_1, false);
            if ($v_3) Mscrm.S2SUpgradePageHelper.finalizeSettings();
            else window.WizardNavigate(_WizardNavigateEnum.NEXT)
        },
        Mscrm.S2SUpgradePageHelper.handleErrorMessage)
};
Mscrm.S2SUpgradePageHelper.handleErrorMessage = function(response) {
    var $v_0 = $get("showProgress"), $v_1 = response.get_organizationServiceFault();
    if (!IsNull($v_1)) {
        var $v_2 = $v_1.get_errorCode();
        Xrm.Internal.openErrorDialog($v_2, response.get_message());
        $v_2 === -2147188651 && window.location.reload()
    }
    if ($v_0) $v_0.style.display = "none"
};
Mscrm.S2SUpgradePageHelper.retrieveSites = function(stage) {
    var $v_0 =
        "<fetch version='1.0' mapping='logical'><entity name='sharepointsite'><attribute name='absoluteurl' /><attribute name='relativeurl' /><attribute name='name' /><attribute name='sharepointsiteid' /><attribute name='parentsite' /><filter type='and'><condition attribute='statecode' operator='eq' value='0' /></filter></entity></fetch>";
    Xrm.Internal.messages.retrieveMultiple($v_0).then(function($p1_0) { Mscrm.S2SUpgradePageHelper.$L($p1_0, stage) },
        Mscrm.S2SUpgradePageHelper.handleErrorMessage)
};
Mscrm.S2SUpgradePageHelper.$L = function($p0, $p1) {
    var $v_0 = $get("buttonNext");
    Mscrm.Utilities.enableDisableDomElement($v_0, true);
    var $v_1 = $p0.entityCollection,
        $v_2 = window.WizardGetProperty("DefaultSiteUrl"),
        $v_3 = !isNullOrEmptyString($v_2) && $p1 === 3;
    if ($v_1.get_count() > 0 || $v_3) {
        Mscrm.S2SUpgradePageHelper.$2 = $v_1.get_count();
        if ($get("SiteValidationStatus")) $get("SiteValidationStatus").style.display = "";
        if ($get("StatusReportSectionData")) {
            $get("StatusReportSectionData").style.display = "";
            $get("StatusReportSectionData").style.height = "250px";
            $get("statusDiv").style.height = "250px"
        }
        var $v_4 = "", $v_5 = "", $v_6;
        Mscrm.S2SUpgradePageHelper.$5 = {};
        Mscrm.S2SUpgradePageHelper.$7 = [];
        if ($p1 === 3) {
            var $v_7 = new Mscrm.SPSiteRecord;
            if (!isNullOrEmptyString($v_2)) {
                $v_7.$3_0 = window.LOCID_SP_DEFAULT_SITE;
                $v_7.$0_0 = $v_2;
                Mscrm.S2SUpgradePageHelper.$5[Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString()] = $v_7
            }
        }
        for ($v_6 = 0; $v_6 < Mscrm.S2SUpgradePageHelper.$2; $v_6++) {
            var $v_8 = new Mscrm.SPSiteRecord;
            $v_8.$1_0 = IsNull($v_1.get_item($v_6).getFormattedValue("parentsite"))
                ? Microsoft.Crm.Client.Core.Framework.Guid.get_empty()
                : $v_1.get_item($v_6).getFormattedValue("parentsite").Id;
            $v_8.$0_0 = IsNull($v_1.get_item($v_6).getFormattedValue("absoluteurl"))
                ? ""
                : $v_1.get_item($v_6).getFormattedValue("absoluteurl").toString();
            $v_8.$4_0 = IsNull($v_1.get_item($v_6).getFormattedValue("relativeurl"))
                ? ""
                : $v_1.get_item($v_6).getFormattedValue("relativeurl").toString();
            $v_8.$3_0 = IsNull($v_1.get_item($v_6).getFormattedValue("name"))
                ? ""
                : $v_1.get_item($v_6).getFormattedValue("name").toString();
            Mscrm.S2SUpgradePageHelper.$5[$v_1.get_item($v_6).getFormattedValue("sharepointsiteid").toString()] = $v_8
        }
        $v_6 = 0;
        Mscrm.S2SUpgradePageHelper.$2 = $v_3 ? Mscrm.S2SUpgradePageHelper.$2 + 1 : Mscrm.S2SUpgradePageHelper.$2;
        var $$dict_D = Mscrm.S2SUpgradePageHelper.$5;
        for (var $$key_E in $$dict_D) {
            var $v_9 = { key: $$key_E, value: $$dict_D[$$key_E] }, $v_A = $v_9.value;
            if (!isNullOrEmptyString($v_A.$0_0)) $v_5 = $v_A.$0_0;
            else
                $v_5 = String.format("{0}/{1}",
                    Mscrm.Utilities.trimEnd(Mscrm.S2SUpgradePageHelper.$C($v_A.$1_0), ["/"]),
                    $v_A.$4_0,
                    Sys.CultureInfo.InvariantCulture);
            $v_4 = $v_A.$3_0;
            Mscrm.S2SUpgradePageHelper.$7[$v_6++] = $v_5;
            if ($p1 === 3) Mscrm.S2SUpgradePageHelper.$H($v_4, $v_5, $v_6);
            else $p1 === 2 && Mscrm.S2SUpgradePageHelper.$I($v_4, $v_5, $v_6)
        }
        Mscrm.S2SUpgradePageHelper.$D($p1);
        if ($get("SitesValidationStatus")) $get("SitesValidationStatus").style.display = "";
        if ($get("ValidationStatus")) {
            var $v_B = $get("ValidationStatus");
            XUI.Html.SetText($v_B, window.LOCID_SP_VALIDATION_IN_PROGRESS);
            Mscrm.S2SUpgradePageHelper.$G(Mscrm.S2SUpgradePageHelper.$7[0].toString())
        }
    } else {
        if ($get("NoSitesFound")) $get("NoSitesFound").style.display = "";
        Mscrm.S2SUpgradePageHelper.$D($p1);
        var $v_C = $get("buttonBack");
        Mscrm.Utilities.enableDisableDomElement($v_C, false);
        $p1 === 2 && !isNullOrEmptyString($v_2) && Mscrm.Utilities.enableDisableDomElement($v_0, false)
    }
};
Mscrm.S2SUpgradePageHelper.$D = function($p0) {
    if ($p0 === 2) {
        var $v_0 = $get("ShowExistingSites");
        if ($v_0 && !$v_0.rows.length) {
            var $v_3 = $get("ShowURL");
            $v_3.style.display = ""
        } else {
            var $v_4 = $get("Showsites");
            $v_4.style.display = "";
            if (Mscrm.S2SUpgradePageHelper.$P()) {
                var $v_5 = $get("buttonNext");
                Mscrm.Utilities.enableDisableDomElement($v_5, false)
            } else window.enabledisablenext()
        }
        var $v_1 = $get("showProgress"), $v_2 = $get("formcontent");
        if ($v_1) $v_1.style.display = "none";
        if ($v_2) $v_2.style.display = ""
    }
};
Mscrm.S2SUpgradePageHelper.$P = function() {
    if (window.isCRMOnline) return true;
    return false
};
Mscrm.S2SUpgradePageHelper.$J = function() {
    if (window.allowHTTPSites) return true;
    return false
};
Mscrm.S2SUpgradePageHelper.$C = function($p0) {
    var $v_0 = Mscrm.S2SUpgradePageHelper.$5[$p0.toString()];
    if ($v_0.$1_0.equals(Microsoft.Crm.Client.Core.Framework.Guid
        .get_empty())) return $v_0.$0_0.endsWith("/") ? $v_0.$0_0.substr(0, $v_0.$0_0.length - 1) : $v_0.$0_0;
    else
        return String.format("{0}/{1}",
            Mscrm.Utilities.trimEnd(Mscrm.S2SUpgradePageHelper.$C($v_0.$1_0), ["/"]),
            $v_0.$4_0,
            Sys.CultureInfo.InvariantCulture)
};
Mscrm.S2SUpgradePageHelper.$G = function($p0) {
    var $v_0 = String.format("<siteUrlsXml><siteUrl url='{0}'>false</siteUrl></siteUrlsXml>",
        $p0,
        Sys.CultureInfo.InvariantCulture);
    Xrm.Internal.messages.validateUrl($v_0).then(function($p1_0) { Mscrm.S2SUpgradePageHelper.$O($p1_0) },
        Mscrm.S2SUpgradePageHelper.$N)
};
Mscrm.S2SUpgradePageHelper.$N = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
    Mscrm.S2SUpgradePageHelper.$8++;
    Mscrm.S2SUpgradePageHelper.$A(window.LOCID_SP_VALIDATION_INVALID, " mscrm-text-S2Swizard ms-crm-S2SInvalid", null);
    Mscrm.S2SUpgradePageHelper.$F()
};
Mscrm.S2SUpgradePageHelper.$O = function($p0) {
    var $v_0 = $p0.urlValidationResult,
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectNodes($v_1, "/siteUrlsXml/siteUrl", null),
        $v_3 = $v_2[0],
        $v_4 = XUI.Xml.SelectSingleNode($v_1, "/siteUrlsXml/errorlog", null),
        $v_5 = XUI.Xml.GetText($v_3);
    if ($v_5.toLowerCase() === "true") {
        Mscrm.S2SUpgradePageHelper.$B++;
        Mscrm.S2SUpgradePageHelper.$A(window.LOCID_SP_VALIDATION_VALID, " mscrm-text-S2Swizard ms-crm-S2SValid", null)
    } else {
        Mscrm.S2SUpgradePageHelper.$8++;
        var $v_6 = window.LOCID_SP_VALIDATION_INVALID, $v_7 = null, $v_8;
        if ($v_4) {
            $v_8 = XUI.Xml.SelectSingleNode($v_4, "//errorcode", null);
            var $v_9 = window.WizardGetProperty("isSharePointOnline"), $$t_C, $$t_D;
            $v_6 = ($$t_D = Mscrm.SharePointValidation
                .sharePointValidationText($v_8, $$t_C = { val: $v_7 }, $v_9), $v_7 = $$t_C.val, $$t_D);
            var $v_A = CrmEncodeDecode.CrmHtmlDecode(XUI.Html.GetText($get("errorlogid")));
            $v_A += XUI.Xml.XMLSerializer.serializeToString($v_4);
            XUI.Html.SetText($get("errorlogid"), CrmEncodeDecode.CrmHtmlEncode($v_A))
        }
        Mscrm.S2SUpgradePageHelper.$A($v_6, " mscrm-text-S2Swizard ms-crm-S2SInvalid", $v_7)
    }
    Mscrm.S2SUpgradePageHelper.$F()
};
Mscrm.S2SUpgradePageHelper.$F = function() {
    Mscrm.S2SUpgradePageHelper.$6++;
    if (Mscrm.S2SUpgradePageHelper.$6 === Mscrm.S2SUpgradePageHelper.$2) {
        var $v_0 = $get("ValidationStatus");
        if (!Mscrm.S2SUpgradePageHelper.$8) {
            if ($v_0) {
                XUI.Html.SetText($v_0, window.LOCID_SP_VALIDATION_COMPLETE);
                $v_0.setAttribute("class", "ms-crm-S2SValid")
            }
            if ($get("StatusReportSectionData")) {
                $get("StatusReportSectionData").style.height = "150px";
                $get("statusDiv").style.height = "150px"
            }
            if ($get("RealmStatusReportSectionData")) $get("RealmStatusReportSectionData").style.height = "138px";
            var $v_2 = $get("ValidSitesMessage");
            $v_2.style.display = "";
            var $v_3 = $get("buttonNext");
            Mscrm.Utilities.enableDisableDomElement($v_3, false)
        } else {
            if ($v_0) {
                XUI.Html.SetText($v_0, window.LOCID_SP_VALIDATION_FAILED);
                $v_0.setAttribute("class", "ms-crm-S2SInvalid")
            }
            if ($get("StatusReportSectionData")) {
                $get("StatusReportSectionData").style.height = "160px";
                $get("statusDiv").style.height = "150px";
                var $v_4 = $get("InvalidSitesMessage");
                $v_4.style.display = "";
                if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")) {
                    var $v_5 = $get("cannotEnableMsg");
                    $v_5.style.display = ""
                }
            }
            if ($get("RealmStatusReportSectionData")) $get("RealmStatusReportSectionData").style.height = "160px"
        }
        var $v_1 = $get("buttonBack");
        Mscrm.Utilities.enableDisableDomElement($v_1, false);
        if ($get("errorlogid") && XUI.Html.GetText($get("errorlogid"))) {
            $get("errorloglink").style.display = "inline-block";
            $get("errorloglink").className = "ms-crm-S2SLink"
        }
    } else Mscrm.S2SUpgradePageHelper.$G(Mscrm.S2SUpgradePageHelper.$7[Mscrm.S2SUpgradePageHelper.$6])
};
Mscrm.S2SUpgradePageHelper.$A = function($p0, $p1, $p2) {
    var $v_0 = $get(Mscrm.S2SUpgradePageHelper.$6 + 1 + "_validateStatusCell");
    $v_0.innerHTML = "";
    if ($p2) {
        var $v_1 = document.createElement("a");
        $v_1.setAttribute("title", $p2);
        $v_1.setAttribute("href", $p2);
        $v_1.setAttribute("target", "_blank");
        var $v_2 = document.createElement("div");
        $v_2.className += $p1;
        $v_2.style.display = "inline";
        $v_2.className += " mscrm-underlineOnHover";
        XUI.Html.SetText($v_2, $p0);
        $v_1.appendChild($v_2);
        var $v_3 = document.createElement("div");
        $v_3.className = "mscrm-text-SelectedStage ms-crm-S2SHelpLink";
        $v_3.style.display = "inline";
        XUI.Html.SetText($v_3, "?");
        $v_1.appendChild($v_3);
        $v_1.style.cursor = "pointer";
        $v_0.appendChild($v_1)
    } else {
        XUI.Html.SetText($v_0, $p0);
        $v_0.className += $p1;
        $v_0.setAttribute("title", $p0)
    }
};
Mscrm.S2SUpgradePageHelper.$I = function($p0, $p1, $p2) {
    var $v_0 = $get("ShowExistingSites"), $v_1 = $v_0.insertRow();
    $v_1.id = $p2.toString();
    var $v_2 = document.createElement("a");
    $v_2.setAttribute("title", $p1);
    $v_2.setAttribute("href", $p1);
    $v_2.setAttribute("target", "_blank");
    $v_2.className = "ms-crm-gridUrl";
    XUI.Html.SetText($v_2, String.format(window.LOCID_SP_URL_CONCATINATION, $p0, $p1, Sys.CultureInfo.CurrentCulture));
    $v_2.style.cursor = "pointer";
    var $v_3 = document.createElement("li");
    $v_3.appendChild($v_2);
    var $v_4 = document.createElement("ul");
    $v_4.style.marginLeft = "15px";
    $v_4.style.listStyleType = "disc";
    $v_4.appendChild($v_3);
    var $v_5 = $v_1.insertCell(-1);
    $v_5.id = $p2 + "_siteUrlCell";
    $v_5.className = "mscrm-text-regular mscrm-text-dark mscrm-siteTable-RowColumn";
    $v_5.appendChild($v_4);
    $v_1.appendChild($v_5);
    $v_1.scrollIntoView()
};
Mscrm.S2SUpgradePageHelper.$H = function($p0, $p1, $p2) {
    var $v_0 = $get("StatusReportTable"), $v_1 = $v_0.insertRow(-1);
    $v_1.id = $p2.toString();
    $v_1.setAttribute("height", "28px");
    var $v_2 = document.createElement("label");
    XUI.Html.SetText($v_2, $p0);
    $v_2.setAttribute("title", $p0);
    var $v_3 = $v_1.insertCell(-1);
    $v_3.id = $p2 + "_dlNameCell";
    $v_3.className = "mscrm-text-regular mscrm-text-dark mscrm-siteTable-RowColumn";
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
    $v_5.id = $p2 + "_siteUrlCell";
    $v_5.className = "mscrm-text-regular mscrm-text-dark mscrm-siteTable-RowColumn";
    $v_5.appendChild($v_4);
    $v_1.appendChild($v_5);
    var $v_6 = document.createElement("img");
    $v_6.setAttribute("src", window.CDNURL + "/_imgs/ico/16_progress.gif");
    $v_6.setAttribute("alt", window.LOCID_SP_CREATEDL_INPROGRESS);
    var $v_7 = $v_1.insertCell(-1);
    $v_7.id = $p2 + "_validateStatusCell";
    $v_7.style.textAlign = "center";
    $v_7.appendChild($v_6);
    $v_1.appendChild($v_7);
    $v_7.className = "mscrm-siteTable-RowColumn";
    $v_1.scrollIntoView()
};
Mscrm.SPSiteRecord.registerClass("Mscrm.SPSiteRecord");
Mscrm.S2SUpgradeWizardRerunHelper.registerClass("Mscrm.S2SUpgradeWizardRerunHelper");
Mscrm.S2SUpgradePageHelper.registerClass("Mscrm.S2SUpgradePageHelper");
Mscrm.S2SUpgradePageHelper.$B = 0;
Mscrm.S2SUpgradePageHelper.$8 = 0;
Mscrm.S2SUpgradePageHelper.$2 = 0;
Mscrm.S2SUpgradePageHelper.$6 = 0;
Mscrm.S2SUpgradePageHelper.$5 = null;
Mscrm.S2SUpgradePageHelper.$7 = null;
Mscrm.S2SUpgradePageHelper.telemetryLogEventWizardLoad = "WizardLoad";
Mscrm.S2SUpgradePageHelper.telemetryLogEventWizardCancel = "WizardCancel";
Mscrm.S2SUpgradePageHelper.telemetryLogEventWizardComplete = "WizardComplete"