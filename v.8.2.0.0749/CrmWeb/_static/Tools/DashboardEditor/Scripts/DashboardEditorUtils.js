Type.registerNamespace("Mscrm");
Mscrm.DashboardEditorConstants = function() {};
Mscrm.DashboardEditorUtils = function() {};
Mscrm.DashboardEditorUtils.refreshPreviewAsync = function(visualizationId,
    isUserChart,
    viewId,
    isUserView,
    formAccessType,
    componentId,
    chartType) {
    var $v_0 = isUserChart === "true" ? 1112 : 1111,
        $v_1 = isUserView === "true" ? 4230 : 1039,
        $v_2 = formAccessType === 1030 ? false : true;
    window.setTimeout(function() {
            Mscrm.DashboardEditorUtils.refreshPreview(visualizationId,
                $v_0,
                viewId,
                $v_1,
                $v_2,
                chartType,
                componentId,
                true)
        },
        0)
};
Mscrm.DashboardEditorUtils.refreshPreview = function(visualizationId,
    visualizationType,
    viewId,
    viewType,
    isUserDashboard,
    chartType,
    componentId,
    fromDashboardEditor) {
    var $v_0 = "/Visualization/visualization.aspx",
        $v_1 = visualizationId.replace("{", "").replace("}", ""),
        $v_2 = Mscrm.DashboardEditorUtils.$0("vizForm", componentId),
        $v_3 = $get($v_2),
        $v_4 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId),
        $v_5 = $get($v_4);
    if (IsNull($v_5)) return;
    var $v_6 = $v_5.parentNode.clientWidth - 10,
        $v_7 = $v_5.parentNode.clientHeight - 10,
        $v_8 = "",
        $v_9 = Mscrm.DashboardEditorUtils.$0("vizXml", componentId),
        $v_A = $get($v_9);
    if (!IsNull($v_3) && fromDashboardEditor)
        if ($v_3.action.indexOf($v_0) !== -1) {
            Mscrm.DashboardEditorUtils.onPreviewChartLoaded(componentId, fromDashboardEditor);
            return
        }
    var $v_B = Mscrm.CrmUri.create($v_0), $v_C = Math.random();
    $v_B.get_query()["uniqueId"] = $v_C.toString() + $v_1;
    var $v_D = $v_B.toString();
    $v_3.action = $v_D;
    if (visualizationId === "{00000000-0000-0000-0000-000000000000}" || visualizationId.length < 36) {
        Mscrm.DashboardEditorUtils.initializeChartFrame(componentId);
        return
    }
    Mscrm.DashboardEditorUtils.showDiv("previewLoadingDiv", componentId);
    var $v_E = {};
    $v_E["visualizationId"] = visualizationId;
    $v_E["visType"] = visualizationType;
    $v_E["viewId"] = viewId;
    $v_E["viewType"] = viewType;
    $v_E["paneContentWidth"] = $v_6;
    $v_E["paneContentHeight"] = $v_7;
    $v_E["isPreview"] = "true";
    $v_E["detailedPreview"] = "true";
    $v_E["isSubGridMode"] = "true";
    $v_E["isDashboardComponent"] = "true";
    $v_E["enableViewPicker"] = "false";
    $v_E["ie-browser-version"] = Mscrm.Utilities.get_ieBrowserVersion().toString();
    $v_E["chartType"] = chartType;
    if (isUserDashboard) $v_E["fetchPublishedForSystem"] = "true";
    var $v_F = "<{0}{1}>{2}</{0}>", $v_G = new Sys.StringBuilder("<vizXml>"), $$dict_S = $v_E;
    for (var $$key_T in $$dict_S) {
        var $v_H = { key: $$key_T, value: $$dict_S[$$key_T] }, $v_I = !$v_H.value ? "" : $v_H.value, $v_J = "";
        $v_G.append(String.format($v_F,
            CrmEncodeDecode.CrmXmlEncode($v_H.key),
            $v_J,
            CrmEncodeDecode.CrmXmlEncode($v_I)))
    }
    $v_G.append("</vizXml>");
    $v_8 = $v_G.toString();
    $v_A.value = $v_8;
    $v_3.submit()
};
Mscrm.DashboardEditorUtils.initializeChartFrame = function(componentId) {
    var $v_0 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId);
    !IsNull($get($v_0)) &&
        $get($v_0).contentWindow.location.replace(Mscrm.CrmUri.create("/_static/blank.htm").toString())
};
Mscrm.DashboardEditorUtils.refreshOrgInsightsPreviewAsync = function(visualizationId, isUserChart, componentId) {
    var $v_0 = 1309;
    window.setTimeout(function() {
            Mscrm.DashboardEditorUtils.refreshOrgInsightsPreview(visualizationId, $v_0, componentId, true)
        },
        0)
};
Mscrm.DashboardEditorUtils
    .refreshOrgInsightsPreview = function(visualizationId, visualizationType, componentId, fromDashboardEditor) {
        var $v_0 = visualizationId.replace("{", "").replace("}", ""),
            $v_1 = visualizationType !== 1309 ? "true" : "false",
            $v_2 = "/tools/admin/orginsightschart.aspx",
            $v_3 = Mscrm.DashboardEditorUtils.$0("vizForm", componentId),
            $v_4 = $get($v_3),
            $v_5 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId),
            $v_6 = $get($v_5);
        if (IsNull($v_6)) return;
        var $v_7 = "", $v_8 = Mscrm.DashboardEditorUtils.$0("vizXml", componentId), $v_9 = $get($v_8);
        if (!IsNull($v_4) && fromDashboardEditor)
            if ($v_4.action.indexOf($v_2) !== -1) {
                Mscrm.DashboardEditorUtils.onPreviewChartLoaded(componentId, fromDashboardEditor);
                return
            }
        var $v_A = Mscrm.CrmUri.create($v_2), $v_B = Math.random();
        $v_A.get_query()["uniqueId"] = $v_B.toString() + $v_0;
        var $v_C = $v_A.toString();
        $v_4.action = $v_C;
        if (visualizationId === "{00000000-0000-0000-0000-000000000000}" || visualizationId.length < 36) {
            Mscrm.DashboardEditorUtils.initializeOrgInsightsConfigurationFrame(componentId);
            return
        }
        Mscrm.DashboardEditorUtils.showDiv("previewLoadingDiv", componentId);
        var $v_D = {};
        $v_D["orgInsightsConfigurationId"] = visualizationId;
        $v_D["isUserOrgInsightsConfiguration"] = $v_1;
        var $v_E = "<{0}{1}>{2}</{0}>", $v_F = new Sys.StringBuilder("<vizXml>"), $$dict_N = $v_D;
        for (var $$key_O in $$dict_N) {
            var $v_G = { key: $$key_O, value: $$dict_N[$$key_O] }, $v_H = !$v_G.value ? "" : $v_G.value, $v_I = "";
            $v_F.append(String.format($v_E,
                CrmEncodeDecode.CrmXmlEncode($v_G.key),
                $v_I,
                CrmEncodeDecode.CrmXmlEncode($v_H)))
        }
        $v_F.append("</vizXml>");
        $v_7 = $v_F.toString();
        $v_9.value = $v_7;
        Mscrm.DashboardEditorUtils.showDiv("previewFrame", componentId);
        $v_4.submit()
    };
Mscrm.DashboardEditorUtils.initializeOrgInsightsConfigurationFrame = function(componentId) {
    var $v_0 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId);
    !IsNull($get($v_0)) &&
        $get($v_0).contentWindow.location.replace(Mscrm.CrmUri
            .create("/tools/admin/orginsightschart.aspx?orginsightsconfigurationid=00000000-0000-0000-0000-000000000000&isuserorginsightsconfiguration=False").toString())
};
Mscrm.DashboardEditorUtils.onPreviewChartLoadedHandler = function(domEvent) {
    Mscrm.DashboardEditorUtils.onPreviewChartLoaded()
};
Mscrm.DashboardEditorUtils.onPreviewChartLoaded = function(componentId, fromDashboardEditor) {
    var $v_0 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId), $v_1 = $get($v_0), $v_2 = $v_1;
    if (!IsNull($v_2) && !IsNull($v_2.contentWindow) && !IsNull($v_2.contentWindow.document)) {
        var $v_3 = $v_2.contentWindow.document.getElementsByTagName("BODY")[0];
        if (fromDashboardEditor)
            if (!IsNull($v_3)) {
                var $v_5 = function($p1_0) { Mscrm.DashboardEditorUtils.setActiveObjectForCell($p1_0, $v_2) };
                $addHandler($v_3, "mousedown", $v_5);
                $addHandler($v_3, "click", $v_5);
                var $v_6 = function($p1_0) { Mscrm.DashboardEditorUtils.viewPropertiesNowForCell($p1_0, $v_2) };
                $addHandler($v_3, "dblclick", $v_6);
                var $v_7 = function($p1_0) { Mscrm.DashboardEditorUtils.onDocumentMouseUpForCell($p1_0) };
                $addHandler($v_2.contentWindow.document, "mouseup", $v_7)
            }
        !IsNull($v_3) &&
            !isNullOrEmptyString($v_3.innerHTML) &&
            Mscrm.DashboardEditorUtils.showDiv("previewFrame", componentId);
        var $v_4 = $v_2.contentWindow.document.getElementById("CrmChart");
        !IsNull($v_4) && XUI.Html.SetOpacity($v_4, 1);
        $clearHandlers($v_1.contentWindow);
        fromDashboardEditor && $clearHandlers($v_1)
    }
};
Mscrm.DashboardEditorUtils.clearHandlersFromIframes = function(element) {
    var $v_0 = null;
    if (IsNull(element)) $v_0 = document.getElementsByTagName("IFRAME");
    else $v_0 = element.getElementsByTagName("IFRAME");
    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        if ($v_0[$v_1]
            .className ===
            "socialInsightsPreviewFrame" ||
            $v_0[$v_1].className === "powerBITilePreviewFrame") continue;
        $v_0[$v_1].src = "";
        $clearHandlers($v_0[$v_1].contentWindow);
        $clearHandlers($v_0[$v_1])
    }
};
Mscrm.DashboardEditorUtils.showDiv = function(divTobeShown, componentId) {
    var $v_0 = Mscrm.DashboardEditorUtils.$0("previewFrame", componentId),
        $v_1 = Mscrm.DashboardEditorUtils.$0("previewLoadingDiv", componentId),
        $v_2 = Mscrm.DashboardEditorUtils.$0("contentDiv", componentId),
        $v_3 = $get($v_0),
        $v_4 = $get($v_1),
        $v_5 = $get($v_2);
    if (!IsNull($v_3)) $v_3.style.display = divTobeShown === "previewFrame" ? "inline" : "none";
    if (!IsNull($v_4)) $v_4.style.display = divTobeShown === "previewLoadingDiv" ? "inline" : "none";
    if (!IsNull($v_5)) $v_5.style.display = divTobeShown === "contentDiv" ? "inline" : "none"
};
Mscrm.DashboardEditorUtils.viewPropertiesNowForCell = function(domEvent, element) {
    Mscrm.DashboardEditorUtils.$1(domEvent);
    ViewPropertiesNow(domEvent, element)
};
Mscrm.DashboardEditorUtils.setActiveObjectForCell = function(domEvent, element) {
    Mscrm.DashboardEditorUtils.$1(domEvent);
    SetActiveObject(domEvent, element)
};
Mscrm.DashboardEditorUtils.onDocumentMouseUpForCell = function(domEvent) {
    Mscrm.DashboardEditorUtils.$1(domEvent);
    OnDocumentMouseUp()
};
Mscrm.DashboardEditorUtils.registerDragObjectForCell = function(domEvent, element) {
    Mscrm.DashboardEditorUtils.$1(domEvent);
    RegisterDragObject(domEvent, "fromMainCanvas", element)
};
Mscrm.DashboardEditorUtils
    .refreshSocialInsightsPreviewAsync = function(formAccessType, formId, componentId) {
        window.setTimeout(function() {
                Mscrm.DashboardEditorUtils.refreshSocialInsightsPreview(formAccessType, formId, componentId)
            },
            0)
    };
Mscrm.DashboardEditorUtils.refreshSocialInsightsPreview = function(formAccessType, formId, componentId) {
    var $v_0 = new Microsoft.Crm.Core.Application.WebServices.SocialInsightsConfiguration;
    $v_0.FormTypeCode = formAccessType;
    $v_0.FormId = formId;
    $v_0.ControlId = componentId;
    var $v_1 = Mscrm.DashboardEditorUtils.$0("socialInsightsPreviewFrame", componentId),
        $v_2 = Mscrm.DashboardEditorUtils.$0("socialInsightsPreviewOverlay", componentId),
        $v_3 = Mscrm.DashboardEditorUtils.$0("socialInsightsPreviewErrorMessage", componentId);
    if (!window._AreSocialInsightsEnabled) {
        Mscrm.DashboardEditorUtils.socialInsightsPreviewError(window.LOCID_NETBREEZE_DISABLED, $v_1, $v_2, $v_3);
        return
    }
    if (!window._IsSocialInsightsInstanceAvailable) {
        Mscrm.DashboardEditorUtils.socialInsightsPreviewError(window.LOCID_NETBREEZE_NO_INSTANCE, $v_1, $v_2, $v_3);
        return
    }
    Mscrm.SocialInsights.Runtime.Services.AuthCheckService.get_checkSignedIn().done(function($p1_0) {
        if (!$p1_0) {
            Mscrm.DashboardEditorUtils.socialInsightsPreviewError(window.LOCID_NETBREEZE_SIGN_IN, $v_1, $v_2, $v_3);
            return
        }
        if ((new Microsoft.Crm.Client.Core.Framework.Guid($v_0.FormId)).toString() ===
            Microsoft.Crm.Client.Core.Framework.Guid.get_empty().toString()) {
            var $v_4 = Mscrm.FormEditorVariables.socialInsightsConfigurations[$v_0.ControlId];
            Mscrm.DashboardEditorUtils.$5($v_1, $v_2, $v_3, $v_4)
        } else Mscrm.DashboardEditorUtils.$B($v_1, $v_2, $v_3, $v_0)
    }).fail(function($p1_0) {
        Mscrm.DashboardEditorUtils.socialInsightsPreviewError(window.LOCID_NETBREEZE_CONNECTION_ERROR, $v_1, $v_2, $v_3)
    })
};
Mscrm.DashboardEditorUtils.$B = function($p0, $p1, $p2, $p3) {
    (new Mscrm.SocialInsights.SocialInsightsConfigurationService).retrieve($p3)
        .done(function($p1_0) { Mscrm.DashboardEditorUtils.$5($p0, $p1, $p2, $p1_0) })
        .fail(function($p1_0) {
            Mscrm.DashboardEditorUtils
                .socialInsightsPreviewError(window.LOCID_NETBREEZE_CONNECTION_ERROR, $p0, $p1, $p2)
        })
};
Mscrm.DashboardEditorUtils.$5 = function($p0, $p1, $p2, $p3) {
    if (IsNull($p3))
        Mscrm.DashboardEditorUtils.socialInsightsPreviewError(window.LOCID_NETBREEZE_NO_CONFIG, $p0, $p1, $p2);
    else {
        var $v_0 = $get($p0),
            $v_1 = $p3.SocialDataParameters.split("-"),
            $v_2 = (new Mscrm.SocialInsights.Runtime.Services.UrlService).createDisplayUrl($p3.SocialDataItemId, $v_1);
        if ($v_2 !== $v_0.src) $v_0.src = $v_2
    }
};
Mscrm.DashboardEditorUtils
    .socialInsightsPreviewError = function(errorMessage, previewFrameId, previewOverlayId, errorMessageContainerId) {
        $get(previewFrameId).style.display = "none";
        $get(previewOverlayId).style.display = "none";
        var $v_0 = $get(errorMessageContainerId);
        $v_0.style.display = "block";
        $v_0.className = "socialInsightsDashboardPreviewMessage";
        $P_CRM($v_0).text(errorMessage)
    };
Mscrm.DashboardEditorUtils.refreshPowerBITilePreviewAsync = function(tileUrl, componentId) {
    Mscrm.DashboardEditorUtils.$4(tileUrl, "tileUrl");
    Mscrm.DashboardEditorUtils.$4(componentId, "ComponentId");
    var $v_0 = window.top.isOutlookHostedWindow();
    if ($v_0) return;
    var $v_1 = Mscrm.DashboardEditorUtils.$0("powerBITilePreviewFrame", componentId), $v_2 = $get($v_1);
    if (!$v_2) throw Error.create("PowerBI tile with the supplied componentId is not found");
    if (_Script.isNullOrUndefined(window.LOCID_POWERBITILE_FIRSTPARTYURL)) {
        window.setTimeout(function() { $v_2.src = "/_static/blank.htm" }, 0);
        return
    }
    if (!Mscrm.DashboardEditorUtils.$2) {
        $P_CRM(window.self).bind("message", Mscrm.DashboardEditorUtils.handlePowerBITileLoadedEvent);
        Mscrm.DashboardEditorUtils.$2 = true
    }
    $v_2.src === "" &&
        window.setTimeout(function() { Mscrm.DashboardEditorUtils.refreshPowerBITilePreview(tileUrl, componentId) }, 0)
};
Mscrm.DashboardEditorUtils.handlePowerBITileLoadedEvent = function(jqueryEvent) {
    if (!Mscrm.DashboardEditorUtils.$A(jqueryEvent)) return;
    var $v_0 = Mscrm.DashboardEditorUtils.$7(jqueryEvent);
    if (IsNull($v_0)) return;
    var $v_1 = Mscrm.DashboardEditorUtils.$8($v_0);
    switch ($v_1) {
    case "tileLoaded":
        Mscrm.DashboardEditorUtils.$3 === "signInNeeded" && Mscrm.DashboardEditorUtils.$9($v_0);
        break;
    case "signInNeeded":
        break;
    default:
        return
    }
    Mscrm.DashboardEditorUtils.$3 = $v_1
};
Mscrm.DashboardEditorUtils.$7 = function($p0) {
    var $v_0 = $p0.originalEvent;
    try {
        return JSON.parse($v_0["data"])
    } catch ($$e_2) {
        return null
    }
};
Mscrm.DashboardEditorUtils.$9 = function($p0) {
    var $v_0 = $p0["componentId"];
    $P_CRM(".powerBITilePreviewFrame").each(function($p1_0, $p1_1) {
        var $v_1 = $p1_1.getAttribute("src"), $v_2 = Mscrm.DashboardEditorUtils.$6($p1_1.id);
        $v_2 !== $v_0 && $p1_1.setAttribute("src", $v_1)
    })
};
Mscrm.DashboardEditorUtils.$8 = function($p0) {
    var $v_0 = "", $v_1 = $p0.powerBIEventData;
    if (!IsNull($v_1)) $v_0 = $v_1["event"];
    return $v_0
};
Mscrm.DashboardEditorUtils.$A = function($p0) {
    var $v_0 = $P_CRM(".powerBITilePreviewFrame").attr("src"), $v_1 = $p0.originalEvent;
    return $v_0.toLowerCase().startsWith($v_1["origin"].toLowerCase())
};
Mscrm.DashboardEditorUtils.refreshPowerBITilePreview = function(tileUrl, componentId) {
    var $v_0 = Mscrm.DashboardEditorUtils.$0("powerBITilePreviewFrame", componentId),
        $v_1 = $get($v_0),
        $v_2 = String
            .format("{0}runtime.html?powerBIUrl={1}&loginLabel={2}&componentId={3}&direction={4}&loginText={5}&env={6}",
                window.LOCID_POWERBITILE_FIRSTPARTYURL,
                CrmEncodeDecode.CrmUrlEncode(tileUrl),
                CrmEncodeDecode.CrmUrlEncode(window.LOCID_LOGIN_LABEL),
                CrmEncodeDecode.CrmUrlEncode(componentId),
                CrmEncodeDecode.CrmUrlEncode(window.LOCID_TEXT_DIRECTION),
                CrmEncodeDecode.CrmUrlEncode(window.LOCID_LOGIN_TEXT),
                CrmEncodeDecode.CrmUrlEncode(window.LOCID_POWERBI_ENV));
    $v_1.src = $v_2
};
Mscrm.DashboardEditorUtils.$1 = function($p0) { !IsNull($p0) && $p0.stopPropagation() };
Mscrm.DashboardEditorUtils.$0 = function($p0, $p1) {
    if (isNullOrEmptyString($p1)) return $p0;
    return $p0 + "_" + $p1
};
Mscrm.DashboardEditorUtils.$4 = function($p0, $p1) {
    if (isNullOrEmptyString($p0)) throw Error.create($p1 + " is empty or null")
};
Mscrm.DashboardEditorUtils.$6 = function($p0) {
    Mscrm.DashboardEditorUtils.$4($p0, "elementId");
    var $v_0 = $p0.split("_");
    if ($v_0.length !== 2) throw Error.create("ElementId should be delimited by delimiter");
    return $v_0[1]
};
Mscrm.DashboardEditorConstants.registerClass("Mscrm.DashboardEditorConstants");
Mscrm.DashboardEditorUtils.registerClass("Mscrm.DashboardEditorUtils");
Mscrm.DashboardEditorConstants.componentGalleryWidth = 630;
Mscrm.DashboardEditorConstants.componentGalleryHeight = 420;
Mscrm.DashboardEditorConstants.orgInsightsComponentGalleryWidth = 680;
Mscrm.DashboardEditorConstants.orgInsightsComponentGalleryHeight = 500;
Mscrm.DashboardEditorConstants.emptyGuid = "{00000000-0000-0000-0000-000000000000}";
Mscrm.DashboardEditorConstants.chartFrameId = "previewFrame";
Mscrm.DashboardEditorConstants.loadingDivId = "previewLoadingDiv";
Mscrm.DashboardEditorConstants.contentDivId = "contentDiv";
Mscrm.DashboardEditorConstants.vizFormId = "vizForm";
Mscrm.DashboardEditorConstants.vizXmlId = "vizXml";
Mscrm.DashboardEditorConstants.chartImageId = "CrmChart";
Mscrm.DashboardEditorUtils.$2 = false;
Mscrm.DashboardEditorUtils.$3 = null