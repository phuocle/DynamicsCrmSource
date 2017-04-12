Type.registerNamespace("Mscrm");

function loadArea(selectedNavLink, area, parameters, url, isvMode, passParams) {
    return Mscrm.Details.loadArea(selectedNavLink, area, parameters, url, isvMode, passParams)
}

function loadIsvArea(selectedNavLink, url, passParams, domEvent) {
    return Mscrm.Details.loadIsvArea(selectedNavLink, url, passParams, domEvent)
}

function addActivityTo(typeCode, id, type, name, partyId, partyType, partyName, location, contentId) {
    Mscrm.AddActivity.addActivityTo(typeCode, id, type, name, partyId, partyType, partyName, location, contentId, null)
}

Mscrm.Details = function() {};
Mscrm.Details.get_usingMainFormRibbonData = function() { return !IsNull($get("areaForm")) };
Mscrm.Details.$9 = function() {
    var $v_0 = window.top.document.getElementById("crmRibbonManager");
    if (Mscrm.InternalUtilities.Utilities.isRefreshForm() && $v_0) {
        $v_0.style.visibility = "hidden";
        Mscrm.PerceivedCommandBarHelper.setPerceivedCommandBarAsHidden()
    }
};
Mscrm.Details.$7 = function() {
    var $v_0 = $get("FormTitle"), $v_1 = $find("crmForm");
    if (!IsNull($v_0) && !IsNull($v_1)) {
        var $v_2 = $v_1.get_formUrl();
        !("_CreateFromId" in $v_2.get_query()) && $v_0.setAttribute("sourceUrl", $v_2);
        $v_0.style.cursor = "pointer";
        var $v_3 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (!IsNull($v_3)) {
            $v_3.setAttribute("formTitleText", $v_3.title.toString());
            $v_3.title = window.LOCID_FORM_HEADER_LINK
        }
        $addHandler($v_0,
            "click",
            function($p1_0) {
                Xrm.Utility.openEntityForm(Xrm.Page.data.entity.getEntityName(), Xrm.Page.data.entity.getId(), null)
            })
    }
};
Mscrm.Details.loadArea = function(selectedNavLink, area, parameters, url, isvMode, passParams) {
    Mscrm.Details.$9();
    if (!Mscrm.FormNavControl.isNavLinkEnabled(selectedNavLink)) return false;
    var $v_0 = $get("tdAreas"), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
    if ($v_1.className === "ms-crm-IE7-Height-Fix-Dummy-Container" ||
        $v_1.className === "ms-crm-IE7-Height-Fix-Dummy-Container-ReadForm") $v_0 = $v_1;
    var $v_2 = false;
    if (IsNull(parameters)) parameters = "";
    else if (parameters
        .length >
        0 &&
        (parameters.charAt(0) === "&" || parameters.charAt(0) === "?")) parameters = parameters.substr(1);
    if (parameters.length > 11) {
        var $v_7 = Mscrm.CrmUri.create("areas.aspx?" + parameters);
        if ($v_7.get_query()["refreshmode"] === "1") $v_2 = true;
        delete $v_7.get_query().refreshmode;
        var $v_8 = $v_7.get_queryString();
        if (!isNullOrEmptyString($v_8)) if ($v_8.charAt(0) === "&" || $v_8.charAt(0) === "?") $v_8 = $v_8.substr(1);
        parameters = $v_8
    }
    if (!Mscrm.Details.currentArea) Mscrm.Details.currentArea = XUI.Html.DomUtils.GetFirstChild($v_0);
    Mscrm.Details.currentArea.id === "areaForm" && Mscrm.Details.$7();
    var $v_3 = null,
        $v_4 = function($p1_0) {
            var $v_9 = $p1_0;
            if ($v_9.id === area) {
                var $v_A = IsNull($v_9.params) ? "" : $v_9.params;
                if ($v_A === parameters) {
                    $v_3 = $v_9;
                    return true
                }
            }
            return false
        };
    XUI.Html.DomUtils.ForEachChild($v_0, $v_4);
    setSelectedControl(null);
    if (!IsNull($v_3)) {
        if ($v_3 === Mscrm.Details.currentArea && !$v_2) return false;
        Mscrm.Details.$3();
        Mscrm.Details.currentArea.style.display = "none";
        $v_3.style.display = "";
        if ($v_2) {
            var $v_H = XUI.Html.DomUtils.GetFirstChild($v_3);
            $v_H.contentWindow.location.reload()
        }
        var $v_B = Mscrm.Details.$0(Mscrm.Details.currentArea), $v_C = Mscrm.Details.$1(Mscrm.Details.currentArea);
        if (Mscrm.Details.currentArea.id !== "areaForm" && $v_C) unloadRibbonData($v_B);
        else Mscrm.CommandBarData.isInstanceOfType($v_B) && Mscrm.Details.$2($v_B);
        var $v_D = Mscrm.Details.$0($v_3), $v_E = window._initialTabId;
        window._initialTabId = null;
        var $v_F = {};
        if (!isNullOrEmptyString($v_E)) $v_F["initialTabId"] = $v_E;
        var $v_G = XUI.Html.DomUtils.GetFirstChild($v_3);
        if (!IsNull($v_G)) {
            var $v_I = $v_G.getAttribute("src");
            if (!IsNull($v_I) && !isNullOrEmptyString($v_I.toString())) $v_F["sourceUri"] = $v_I.toString()
        }
        loadRibbonData($v_D, $v_F);
        Mscrm.Details.$B($v_3)
    } else {
        var $v_J = Mscrm.Details.$6(parameters);
        $v_J.set_includeContextInPath(true);
        var $v_K = true;
        if (url) {
            url.checkParamsNoEqual = true;
            if (!url.isEmpty()) {
                var $v_S = url.toString();
                $v_J = Mscrm.CrmUri.create($v_S + ($v_S.indexOf("?") === -1 ? "?" : "&") + parameters);
                if (!$v_J.get_path().toLowerCase().endsWith("areas.aspx")) $v_K = false
            }
        }
        var $v_L = $get("crmFormSubmit"), $v_M = null;
        $v_M = isNullOrEmptyString($v_L.crmFormSubmitId.value)
            ? Xrm.Page.data.entity.getId()
            : $v_L.crmFormSubmitId.value;
        if (IsNull(passParams) || true === passParams) {
            if (!IsNull(isvMode) && isvMode) {
                $v_J.get_query()["id"] = $v_M;
                $v_J.get_query()["type"] = $v_L.crmFormSubmitObjectType.value;
                $v_J.get_query()["typename"] = $v_L.crmFormSubmitObjectTypeName.value
            } else {
                $v_J.get_query()["oId"] = $v_M;
                $v_J.get_query()["oType"] = $v_L.crmFormSubmitObjectType.value;
                $v_J.get_query()["rof"] = Mscrm.Details.$4().toString()
            }
            if (window._IsRefreshForm === "1") {
                if ($v_K) $v_J.get_query()["inlineEdit"] = "1";
                $v_J.get_query()["theme"] = window.RefreshFormTheme
            }
            var $v_T = XUI.Html.GetText(selectedNavLink);
            if ($v_K && !isNullOrEmptyString($v_T)) $v_J.get_query()["navItemName"] = $v_T.trim();
            $v_J.get_query()["security"] = $v_L.crmFormSubmitSecurity.value;
            $v_J.get_query()["tabSet"] = area;
            $v_J.get_query()["pagemode"] = "iframe";
            var $v_U = $find("crmFormSelector");
            if ($v_U) $v_J.get_query()["formid"] = $v_U.get_currentFormId()
        }
        $v_3 = document.createElement("DIV");
        $v_3.id = area;
        $v_3.className = "ms-crm-Form-Area";
        if (!IsNull(parameters)) $v_3.params = parameters;
        $v_J.checkParamsNoEqual = true;
        var $v_N = $v_J.toString();
        Mscrm.PerformanceTracing.write("Navigate", $v_N);
        window.IS_PRESERVE_IFRAME && !Mscrm.InternalUtilities.Utilities.isTurboForm() && raiseEvent(96, null, null);
        var $v_O = CrmEncodeDecode.CrmHtmlAttributeEncode(area), $v_P = "100%";
        $v_3.innerHTML = String.format("<iframe allowTransparency='-1' src='" +
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_N) +
            "' id='" +
            $v_O +
            "Frame' name='" +
            $v_O +
            "Frame' scrolling='auto' isArea='1' frameborder='0' style=\"width: 100%; height: {0}\"></iframe>",
            $v_P);
        Mscrm.Details.$3();
        Mscrm.Details.currentArea.style.display = "none";
        Mscrm.Details.$C($v_0);
        $v_0.appendChild($v_3);
        var $v_Q = Mscrm.Details.$0(Mscrm.Details.currentArea), $v_R = Mscrm.Details.$1(Mscrm.Details.currentArea);
        if ($v_Q)
            if (Mscrm.Details.currentArea.id !== "areaForm" && $v_R) unloadRibbonData($v_Q);
            else Mscrm.CommandBarData.isInstanceOfType($v_Q) && Mscrm.Details.$2($v_Q)
    }
    Mscrm.Details.currentArea = $v_3;
    Mscrm.Details.resetBreadcrumb(selectedNavLink);
    var $v_5 =
        $get("_MBdocumentallRelatedInformationPaneExpanddocumentallRelatedInformationPaneLoadContextDatafollowup");
    if ($v_5) $v_5.disabled = area !== "areaForm";
    var $v_6 = XUI.Html.DomUtils.GetFirstChild($v_3);
    $addHandler($v_6, "load", Mscrm.Details.$A);
    $addHandler($v_6, "load", Mscrm.Details.$5);
    return true
};
Mscrm.Details.$1 = function($p0) {
    var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0).getAttribute("src"),
        $v_1 = IsNull($v_0) ? null : Mscrm.CrmUri.create($v_0.toString()),
        $v_2 = IsNull($v_1) || !IsNull($v_1) && !$v_1.get_isWebResource() && $v_1.get_isLocalServer();
    return $v_2
};
Mscrm.Details.$3 = function() {
    if (!IsNull(Mscrm.Details.currentArea)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(Mscrm.Details.currentArea);
        if (!IsNull($v_0) && !IsNull($v_0.contentWindow))
            try {
                $v_0.contentWindow.Mscrm.Menu.hideOpenedMenu()
            } catch ($$e_1) {
            }
    }
};
Mscrm.Details.$6 = function($p0) {
    var $v_0 = Mscrm.Utilities.getContentUrl(null);
    if (Mscrm.Details.$4()) return Mscrm.CrmUri.create("/userdefined/areas.aspx?" + $p0);
    return Mscrm.CrmUri.create("areas.aspx?" + $p0, $v_0.toString())
};
Mscrm.Details.$4 = function() {
    var $v_0 = $get("rofContainer");
    return !IsNull($v_0)
};
Mscrm.Details.$B = function($p0) {
    for (var $v_0 = $p0.getElementsByTagName("select"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1], $v_3 = $v_2.size;
        $v_2.size = $v_3 + 2;
        $v_2.size = $v_3
    }
};
Mscrm.Details.$C = function($p0) {
    var $v_0 = $get("progress");
    if (!$v_0) {
        $v_0 = document.createElement("DIV");
        $p0.appendChild($v_0);
        $v_0.id = "progress";
        var $v_1 = window.LOCID_PAGELOADING_MSG;
        $v_0
            .innerHTML =
            "<div class='ms-crm-IE7-Height-Fix-Dummy-Container'><TABLE class='ms-crm-Loading-Message' morerecords='0'><TR><TD ID='GridLoadingMessage'><IMG alt='' src='" + window.CDNURL + "/_imgs/advfind/progress.gif'><br>" + CrmEncodeDecode.CrmHtmlEncode($v_1) + "</TD></TR></TABLE></div>";
        $v_0.className = "ms-crm-absolutePosition"
    }
    $v_0.style.display = "block"
};
Mscrm.Details.$A = function($p0) {
    var $v_0 = $get("progress");
    if ($v_0) $v_0.style.display = "none";
    Mscrm.Details.currentArea.style.display = ""
};
Mscrm.Details.$5 = function($p0) {
    var $v_0 = $get("areaSPDocuments");
    if ($v_0)
        if ($v_0.style.display !== "none") {
            var $v_2 = $get("areaSPDocumentsFrame");
            if ($v_2) {
                var $v_3 = $v_2.contentDocument.getElementById("gridBodyTable");
                if ($v_3) {
                    var $v_4 = $v_3.getAttribute("folderpath"), $v_5 = $v_3.getAttribute("siteNotFound");
                    if ($v_5) {
                        var $v_6 = Mscrm.CrmUri.create("/_grid/cmds/dlg_sharepointsiterror.aspx");
                        $v_6.get_query()["attribSiteError"] = CrmEncodeDecode.CrmUrlEncode($v_5);
                        var $v_7 = new Xrm.DialogOptions;
                        $v_7.width = 500;
                        $v_7.height = 200;
                        Xrm.Internal.openDialog($v_6.toString(), $v_7, null, null, null)
                    }
                    if ($v_4) {
                        var $v_8 = Xrm.Page.data.entity.getId(),
                            $v_9 = Xrm.Page.data.entity.getPrimaryAttributeValue(),
                            $v_A = Xrm.Page.context.getQueryStringParameters()["etc"],
                            $v_B = Mscrm.CrmUri.create("/_grid/cmds/dlg_createsharepointfolder.aspx");
                        $v_B.get_query()["folderpath"] = CrmEncodeDecode.CrmUrlEncode($v_4);
                        $v_B.get_query()["objectId"] = $v_8;
                        $v_B.get_query()["oType"] = $v_A;
                        $v_B.get_query()["folderName"] = $v_9;
                        var $v_C = new Xrm.DialogOptions;
                        $v_C.width = 500;
                        $v_C.height = 200;
                        var $v_D = Mscrm.Details.createFolderCB;
                        Xrm.Internal.openDialog($v_B.toString(), $v_C, null, null, $v_D)
                    }
                }
            }
        }
    var $v_1 = $p0.target;
    $removeHandler($v_1, "load", Mscrm.Details.$5)
};
Mscrm.Details.createFolderCB = function(returnValue) {
    var $v_0 = returnValue["objType"], $v_1 = returnValue["objId"], $v_2 = returnValue["folderName"], $v_3 = 0;
    Xrm.Internal.messages.createFolder($v_2, $v_0, $v_1, $v_3, false).then(function() {
            var $v_4 = $get("areaSPDocumentsFrame");
            $v_4.contentWindow.location.reload()
        },
        Mscrm.Details.$8)
};
Mscrm.Details.$8 = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.Details.$0 = function($p0) {
    if (!Mscrm.Details.$D($p0)) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        if (!IsNull($v_0) && $v_0.tagName.toUpperCase() === "IFRAME")
            try {
                return $v_0.contentWindow.$find("crmRibbonData")
            } catch ($$e_2) {
            }
    }
    return $find("crmRibbonData")
};
Mscrm.Details.$2 = function($p0) {
    var $v_0 = window.top.$find("crmRibbonManager");
    !IsNull($v_0) && $v_0.closeAllMenu($p0)
};
Mscrm.Details.$D = function($p0) { return $p0.id === "areaForm" };
Mscrm.Details.loadIsvArea = function(selectedNavLink, url, passParams, domEvent) {
    if (passParams) url = addIsvParameters(url);
    var $v_0 = domEvent.target;
    while (!IsNull($v_0) && $v_0.tagName !== "A") $v_0 = $v_0.parentNode;
    return Mscrm.Details.loadArea(selectedNavLink, $v_0.id + "Area", "", url, true, passParams)
};
Mscrm.Details.resetBreadcrumb = function(selectedNav) {
    var $v_0 = Mscrm.Details.findNavigationComponent(selectedNav, "IMG"),
        $v_1 = Mscrm.Details.findNavigationComponent(selectedNav, "NOBR"),
        $v_2 = $get("leftNavBreadcrumbImg"),
        $v_3 = $get("leftNavBreadcrumbText");
    if ($v_2 && $v_0) {
        $v_2.src = $v_0.src;
        var $v_4 = Mscrm.ImageStrip.getImageStripClassName($v_2);
        $v_4 && $v_4.length > 0 && Sys.UI.DomElement.removeCssClass($v_2, $v_4);
        var $v_5 = Mscrm.ImageStrip.getImageStripClassName($v_0);
        $v_5 && $v_5.length > 0 && Sys.UI.DomElement.addCssClass($v_2, $v_5)
    }
    $v_3 && $v_1 && XUI.Html.SetText($v_3, XUI.Html.GetText($v_1))
};
Mscrm.Details.findNavigationComponent = function(eventSourceElement, elementTagName) {
    var $v_0 = "A" === eventSourceElement.tagName ? eventSourceElement : eventSourceElement.parentNode,
        $v_1 = $v_0.getElementsByTagName(elementTagName)[0];
    if ($v_1) return $v_1;
    else if (Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Nav-Subitem-Link")) {
        var $v_2 = $v_0.parentNode.parentNode.parentNode.getElementsByTagName("A")[0];
        if ($v_2) return Mscrm.Details.findNavigationComponent($v_2, elementTagName)
    }
    return null
};
Mscrm.Details.registerClass("Mscrm.Details");
Mscrm.Details.currentArea = null