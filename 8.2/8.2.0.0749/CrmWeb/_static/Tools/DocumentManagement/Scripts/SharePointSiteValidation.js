Type.registerNamespace("Mscrm");
Mscrm.SharePointSiteValidationHelper = function() {};
Mscrm.SharePointSiteValidationHelper.$P = function($p0) {
    var $v_0 = function($p1_0) { Mscrm.SharePointSiteValidationHelper.$R($p0) },
        $v_1 = function($p1_0) { Mscrm.SharePointSiteValidationHelper.$Q($p0, $p1_0) };
    (new Mscrm.UrlValidatorUsingSharePointGrid).validateUrl(Mscrm.SharePointSiteValidationHelper.$7[$p0],
        Mscrm.SharePointSiteValidationHelper.$1[$p0],
        $v_0,
        $v_1)
};
Mscrm.SharePointSiteValidationHelper.$R = function($p0) {
    Mscrm.SharePointSiteValidationHelper.updateValidationStatus($p0, window.LOCID_SP_VALIDATION_SUCCESS_MSG, "");
    $p0 + 1 < Mscrm.SharePointSiteValidationHelper.$1.length && Mscrm.SharePointSiteValidationHelper.validate($p0 + 1)
};
Mscrm.SharePointSiteValidationHelper.$Q = function($p0, $p1) { Mscrm.SharePointSiteValidationHelper.$J($p0) };
Mscrm.SharePointSiteValidationHelper.$J = function($p0) {
    var $v_0 = function() { Mscrm.SharePointSiteValidationHelper.$K($p0) },
        $v_1 = function($p1_0) { Mscrm.SharePointSiteValidationHelper.$H($p0, $p1_0) };
    (new Mscrm.UrlValidatorUsingPing).pingUrl(Mscrm.SharePointSiteValidationHelper.$5[$p0], $v_0, $v_1)
};
Mscrm.SharePointSiteValidationHelper.$K = function($p0) {
    Mscrm.SharePointSiteValidationHelper.updateValidationStatus($p0, window.LOCID_SP_VALIDATION_SUCCESS_MSG, "");
    $p0 + 1 < Mscrm.SharePointSiteValidationHelper.$1.length && Mscrm.SharePointSiteValidationHelper.validate($p0 + 1)
};
Mscrm.SharePointSiteValidationHelper.$H = function($p0, $p1) {
    if ($p1 === 9)
        Mscrm.SharePointSiteValidationHelper
            .updateValidationStatus($p0, window.LOCID_SP_VALIDATION_FAILURE_MSG, window.LOCID_SP_VALIDATION_URL_FAIL);
    else if ($p1 === 10)
        Mscrm.SharePointSiteValidationHelper
            .updateValidationStatus($p0,
                window.LOCID_SP_VALIDATION_FAILURE_MSG,
                window.LOCID_SP_VALIDATION_REASONS["5"]);
    else if ($p1 === 16)
        Mscrm.SharePointSiteValidationHelper
            .updateValidationStatus($p0,
                window.LOCID_SP_VALIDATION_FAILURE_MSG,
                window.LOCID_SP_VALIDATION_REASONS["4"]);
    else if ($p1 === 11)
        Mscrm.SharePointSiteValidationHelper
            .updateValidationStatus($p0, window.LOCID_SP_VALIDATION_FAILURE_MSG, window.LOCID_SP_VALIDATION_TIMEOUT);
    else if ($p1 === 15)
        if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper
                .$0[$p0],
                "LocationType",
                null)) ===
            "9502")
            Mscrm.SharePointSiteValidationHelper
                .updateValidationStatus($p0,
                    window.LOCID_SP_VALIDATION_FAILURE_MSG,
                    window.LOCID_DOCM_SPSITE_INVALIDPARENT);
        else
            Mscrm.SharePointSiteValidationHelper
                .updateValidationStatus($p0,
                    window.LOCID_SP_VALIDATION_FAILURE_MSG,
                    window.LOCID_DOCM_SPLOC_INVALIDPARENT);
    $p0 + 1 < Mscrm.SharePointSiteValidationHelper.$1.length && Mscrm.SharePointSiteValidationHelper.validate($p0 + 1)
};
Mscrm.SharePointSiteValidationHelper.validate = function(index) {
    var $v_0 = $get("siteValidationTable"),
        $v_1 = $v_0.rows[index],
        $v_2 = $v_1.cells[2],
        $v_3 = document.createElement("img");
    $v_3.setAttribute("src", window.CDNURL + "/_imgs/ico/16_progress.gif");
    $v_3.setAttribute("alt", window.LOCID_SP_VALIDATION_IN_PROGRESS);
    $v_2.appendChild($v_3);
    if (isNullOrEmptyString(Mscrm.SharePointSiteValidationHelper
        .$1[index])) Mscrm.SharePointSiteValidationHelper.$H(index, 15);
    else if (XUI.Xml.GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[index],
            "IsGridPresent",
            null)) ===
        "1") Mscrm.SharePointSiteValidationHelper.$P(index);
    else Mscrm.SharePointSiteValidationHelper.$J(index)
};
Mscrm.SharePointSiteValidationHelper.$G = function($p0) {
    var $v_0 = $p0.urlValidationResult,
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectNodes($v_1, "/siteUrlsXml/siteUrl", null),
        $v_3 = XUI.Xml.SelectNodes($v_1, "/siteUrlsXml/errorlog/sites/site", null);
    if ($v_2.length < 1) $v_2 = XUI.Xml.SelectNodes($v_1, "/locationUrlsXml/locationUrl", null);
    for (var $v_4, $v_5, $v_6 = 0; $v_6 < $v_2.length; $v_6++) {
        $v_4 = Number.parseInvariant(XUI.Xml.GetText($v_2[$v_6].attributes.getNamedItem("index")));
        $v_5 = XUI.Xml.GetText($v_2[$v_6]);
        var $v_7 = window.LOCID_SP_VALIDATION_URL_FAIL;
        if ($v_5.toLowerCase() === "true")
            Mscrm.SharePointSiteValidationHelper
                .updateValidationStatus($v_4, window.LOCID_SP_VALIDATION_SUCCESS_MSG, "");
        else {
            var $v_8;
            if ($v_3 && $v_3[$v_6]) {
                var $v_9 = "";
                $v_8 = XUI.Xml.SelectSingleNode($v_3[$v_6], "errorcode", null);
                var $$t_C, $$t_D;
                $v_7 = ($$t_D = Mscrm.SharePointValidation
                    .sharePointValidationText($v_8, $$t_C = { val: $v_9 }, false), $v_9 = $$t_C.val, $$t_D);
                var $v_A = CrmEncodeDecode.CrmHtmlDecode(XUI.Html.GetText($get("errorlogtextid")));
                $v_A += XUI.Xml.XMLSerializer.serializeToString($v_3[$v_6]);
                XUI.Html.SetText($get("errorlogtextid"), CrmEncodeDecode.CrmHtmlEncode($v_A))
            }
            Mscrm.SharePointSiteValidationHelper
                .updateValidationStatus($v_4, window.LOCID_SP_VALIDATION_FAILURE_MSG, $v_7)
        }
    }
};
Mscrm.SharePointSiteValidationHelper.$F = function($p0) {
    var $v_0 = $p0.get_organizationServiceFault();
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.get_errorCode();
        Xrm.Internal.openErrorDialog($v_1, $p0.get_message())
    }
};
Mscrm.SharePointSiteValidationHelper.openFormLocation = function(e) {
    var $v_0 = e.target;
    while ($v_0.tagName !== "A") $v_0 = $v_0.parentNode;
    var $v_1 = $v_0.attributes.getNamedItem("locationGuid"),
        $v_2 = $v_0.attributes.getNamedItem("locationTypeCode"),
        $v_3 = Mscrm.CrmUri.create("/userdefined/edit.aspx");
    $v_3.get_query()["etc"] = $v_2.value;
    $v_3.get_query()["id"] = $v_1.value;
    openStdWin($v_3, "openform", 800, 600, null)
};
Mscrm.SharePointSiteValidationHelper.$I = function() {
    var $v_0 = $get("toBeValidated");
    XUI.Html.SetText($v_0, Mscrm.SharePointSiteValidationHelper.$4.toString());
    $v_0 = $get("totalValidated");
    XUI.Html.SetText($v_0, Mscrm.SharePointSiteValidationHelper.$B.toString());
    $v_0 = $get("successCount");
    XUI.Html.SetText($v_0, Mscrm.SharePointSiteValidationHelper.$A.toString());
    $v_0 = $get("failureCount");
    XUI.Html.SetText($v_0, Mscrm.SharePointSiteValidationHelper.$6.toString())
};
Mscrm.SharePointSiteValidationHelper.$9 = function($p0) {
    var $v_0 = $get($p0);
    $v_0.setAttribute("title", XUI.Html.GetText($v_0))
};
Mscrm.SharePointSiteValidationHelper.$L = function() {
    Mscrm.SharePointSiteValidationHelper.$9("columnHeader1");
    Mscrm.SharePointSiteValidationHelper.$9("columnHeader2");
    Mscrm.SharePointSiteValidationHelper.$9("columnHeader3");
    Mscrm.SharePointSiteValidationHelper.$9("columnHeader4")
};
Mscrm.SharePointSiteValidationHelper.process = function() {
    var $v_0 = getDialogArguments();
    if (IsNull($v_0) || !$v_0.length) return;
    var $v_1 = new RemoteCommand("DocumentManagementWebService", "GetXmlForSharePointValidation");
    $v_0.type = "string";
    $v_1.SetParameter("selectedRecords", $v_0);
    var $v_2 = $v_1.Execute();
    if ($v_2.Success) {
        var $v_3 = XUI.Xml.LoadXml($v_2.ReturnValue.toString());
        Mscrm.SharePointSiteValidationHelper.$L();
        Mscrm.SharePointSiteValidationHelper.$0 = XUI.Xml.SelectNodes($v_3, "/Locations/Location", null);
        Mscrm.SharePointSiteValidationHelper.$4 = Mscrm.SharePointSiteValidationHelper.$0.length;
        Mscrm.SharePointSiteValidationHelper.$I();
        Mscrm.SharePointSiteValidationHelper.$1 = new Array(Mscrm.SharePointSiteValidationHelper.$0.length);
        Mscrm.SharePointSiteValidationHelper.$5 = new Array(Mscrm.SharePointSiteValidationHelper.$0.length);
        Mscrm.SharePointSiteValidationHelper.$2 = new Array(Mscrm.SharePointSiteValidationHelper.$0.length);
        Mscrm.SharePointSiteValidationHelper.$7 = new Array(Mscrm.SharePointSiteValidationHelper.$0.length);
        Mscrm.SharePointSiteValidationHelper.$8 = {};
        for (var $v_4 = $get("siteValidationTable"), $v_5 = 0;
            $v_5 < Mscrm.SharePointSiteValidationHelper.$0.length;
            $v_5++) {
            Mscrm.SharePointSiteValidationHelper.$5[$v_5] = XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5], "EncodedUrl", null));
            Mscrm.SharePointSiteValidationHelper.$1[$v_5] = XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5], "Url", null));
            Mscrm.SharePointSiteValidationHelper.$2[$v_5] = XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5], "LocationId", null));
            Mscrm.SharePointSiteValidationHelper.$7[$v_5] = XUI.Xml
                .GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5],
                    "LocationSiteCollectionUrl",
                    null));
            var $v_6 = $v_4.rows.length, $v_7 = $v_4.insertRow($v_6), $v_8 = $v_7.insertCell(0);
            $v_8.className = "mscrm-validate-RowColumn mscrm-validate-Column1-width";
            var $v_9 = Mscrm.CrmUri.create("/userdefined/edit.aspx"),
                $v_A = XUI.Xml.GetText(XUI.Xml
                    .SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5], "LocationType", null));
            $v_9.get_query()["etc"] = $v_A;
            $v_9.get_query()["id"] = Mscrm.SharePointSiteValidationHelper.$2[$v_5];
            if (Number.parseInvariant($v_A) === 9502)
                Mscrm.SharePointSiteValidationHelper.$8[Mscrm.SharePointSiteValidationHelper.$1[$v_5]] = $v_5;
            else {
                if (IsNull(Mscrm.SharePointSiteValidationHelper.$3)) Mscrm.SharePointSiteValidationHelper.$3 = {};
                Mscrm.SharePointSiteValidationHelper.$3[Mscrm.SharePointSiteValidationHelper.$1[$v_5]] = $v_5
            }
            var $v_B = XUI.Xml.GetText(XUI.Xml
                    .SelectSingleNode(Mscrm.SharePointSiteValidationHelper.$0[$v_5], "Name", null)),
                $v_C = document.createElement("a"),
                $v_D = document.createAttribute("locationGuid"),
                $v_E = document.createAttribute("locationTypeCode");
            $v_D.value = Mscrm.SharePointSiteValidationHelper.$2[$v_5];
            $v_E.value = $v_A;
            $v_C.attributes.setNamedItem($v_D);
            $v_C.attributes.setNamedItem($v_E);
            $addHandler($v_C, "click", Mscrm.SharePointSiteValidationHelper.openFormLocation);
            $v_C.setAttribute("title", $v_B);
            $v_C.setAttribute("href", "javascript:;");
            $v_C.style.cursor = "pointer";
            $v_C.className = "mscrm-underlineOnHover";
            var $v_F = document.createElement("nobr"), $v_G = document.createElement("span");
            XUI.Html.SetText($v_G, $v_B);
            $v_F.appendChild($v_G);
            $v_C.appendChild($v_F);
            $v_8.appendChild($v_C);
            var $v_H = $v_7.insertCell(1), $v_I = Mscrm.SharePointSiteValidationHelper.$1[$v_5];
            $v_H.className = "mscrm-validate-RowColumn mscrm-validate-Column2-width";
            var $v_J = document.createElement("a");
            $v_J.setAttribute("title", $v_I);
            $v_J.setAttribute("href", $v_I);
            $v_J.setAttribute("target", "_blank");
            $v_J.className = "ms-crm-gridUrl";
            $v_J.style.cursor = "pointer";
            var $v_K = document.createElement("nobr"), $v_L = document.createElement("span");
            XUI.Html.SetText($v_L, $v_I);
            $v_K.appendChild($v_L);
            $v_J.appendChild($v_K);
            $v_H.appendChild($v_J);
            var $v_M = $v_7.insertCell(2);
            $v_M.className = "mscrm-validate-RowColumn mscrm-validate-Column3-width";
            $v_M.innerHTML = "&nbsp;";
            var $v_N = $v_7.insertCell(3);
            $v_N.className = "mscrm-validate-RowColumn mscrm-validate-Column4-width";
            $v_N.innerHTML = "&nbsp;"
        }
        if (!Mscrm.SharePointSiteValidationHelper.$C) Mscrm.SharePointSiteValidationHelper.validate(0);
        else Mscrm.SharePointSiteValidationHelper.$M()
    }
};
Mscrm.SharePointSiteValidationHelper.$M = function() {
    Mscrm.SharePointSiteValidationHelper.$O();
    !IsNull(Mscrm.SharePointSiteValidationHelper.$3) && Mscrm.SharePointSiteValidationHelper.$N()
};
Mscrm.SharePointSiteValidationHelper.$O = function() {
    var $v_0 = "<siteUrlsXml/>",
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectSingleNode($v_1, "/siteUrlsXml", null),
        $v_3,
        $$dict_5 = Mscrm.SharePointSiteValidationHelper.$8;
    for (var $$key_6 in $$dict_5) {
        var $v_4 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_3 = Mscrm.SharePointSiteValidationHelper.$E($v_1, $v_4, "siteUrl");
        $v_2.appendChild($v_3);
        Mscrm.SharePointSiteValidationHelper.$D($v_4)
    }
    Xrm.Internal.messages.validateUrl(XUI.Xml.XMLSerializer.serializeToString($v_1))
        .then(function($p1_0) { Mscrm.SharePointSiteValidationHelper.$G($p1_0) },
            Mscrm.SharePointSiteValidationHelper.$F)
};
Mscrm.SharePointSiteValidationHelper.$E = function($p0, $p1, $p2) {
    var $v_0;
    $v_0 = $p0.createElement($p2);
    var $v_1 = $p0.createAttribute("url");
    $v_1.value = $p1.key;
    $v_0.attributes.setNamedItem($v_1);
    var $v_2 = $p0.createAttribute("index");
    $v_2.value = $p1.value.toString();
    $v_0.attributes.setNamedItem($v_2);
    var $v_3 = $p0.createAttribute("id");
    $v_3.value = Mscrm.SharePointSiteValidationHelper.$2[Number.parseInvariant($p1.value.toString())];
    $v_0.attributes.setNamedItem($v_3);
    $v_0.appendChild($p0.createTextNode("false"));
    return $v_0
};
Mscrm.SharePointSiteValidationHelper.$D = function($p0) {
    var $v_0 = $get("siteValidationTable"), $v_1, $v_2;
    $v_1 = $v_0.rows[Number.parseInvariant($p0.value.toString())];
    $v_2 = document.createElement("img");
    $v_2.setAttribute("src", window.CDNURL + "/_imgs/ico/16_progress.gif");
    $v_2.setAttribute("alt", window.LOCID_SP_VALIDATION_IN_PROGRESS);
    $v_1.cells[2].appendChild($v_2)
};
Mscrm.SharePointSiteValidationHelper.$N = function() {
    var $v_0 = "<locationUrlsXml/>",
        $v_1 = XUI.Xml.LoadXml($v_0),
        $v_2 = XUI.Xml.SelectSingleNode($v_1, "/locationUrlsXml", null),
        $v_3,
        $$dict_5 = Mscrm.SharePointSiteValidationHelper.$3;
    for (var $$key_6 in $$dict_5) {
        var $v_4 = { key: $$key_6, value: $$dict_5[$$key_6] };
        $v_3 = Mscrm.SharePointSiteValidationHelper.$E($v_1, $v_4, "locationUrl");
        $v_2.appendChild($v_3);
        Mscrm.SharePointSiteValidationHelper.$D($v_4)
    }
    Xrm.Internal.messages.validateUrl(XUI.Xml.XMLSerializer.serializeToString($v_1))
        .then(function($p1_0) { Mscrm.SharePointSiteValidationHelper.$G($p1_0) },
            Mscrm.SharePointSiteValidationHelper.$F)
};
Mscrm.SharePointSiteValidationHelper.updateValidationStatus = function(index, res, failureReason) {
    var $v_0 = Mscrm.SharePointSiteValidationHelper.$1[index];
    Mscrm.SharePointSiteValidationHelper.$4--;
    Mscrm.SharePointSiteValidationHelper.$B++;
    var $v_1, $v_2;
    if (res === window.LOCID_SP_VALIDATION_SUCCESS_MSG) {
        $v_1 = 4;
        $v_2 = 2;
        Mscrm.SharePointSiteValidationHelper.$A++
    } else {
        if (failureReason === window.LOCID_SP_VALIDATION_REASONS["4"]) {
            $v_1 = 5;
            $v_2 = 4
        } else if (failureReason === window.LOCID_SP_VALIDATION_REASONS["5"]) {
            $v_1 = 5;
            $v_2 = 5
        } else {
            $v_1 = 3;
            $v_2 = 3
        }
        Mscrm.SharePointSiteValidationHelper.$6++
    }
    if (!Mscrm.SharePointSiteValidationHelper.$C &&
        XUI.Xml.GetText(XUI.Xml.SelectSingleNode(Mscrm.SharePointSiteValidationHelper
            .$0[index],
            "LocationType",
            null)) ===
        "9502") {
        var $v_9 = new RemoteCommand("DocumentManagementWebService", "UpdateLastValidated");
        $v_9.SetParameter("id", Mscrm.SharePointSiteValidationHelper.$2[index]);
        $v_9.SetParameter("logicalName", "sharepointsite");
        $v_9.SetParameter("validationStatus", $v_1);
        $v_9.SetParameter("validationStatusReason", $v_2);
        $v_9.Execute()
    }
    var $v_3 = $get("siteValidationTable"),
        $v_4 = $v_3.rows[index],
        $v_5 = $v_4.cells[2],
        $v_6 = $v_4.cells[3],
        $v_7 = $v_5.getElementsByTagName("IMG"),
        $v_8 = $v_7[0];
    $v_8.style.display = "none";
    XUI.Html.SetText($v_5, res);
    $v_5.setAttribute("title", res);
    if (res === window.LOCID_SP_VALIDATION_SUCCESS_MSG) {
        $v_5.className = "mscrm-validate-RowColumn mscrm-validate-Column3-width mscrm-validate-Success";
        $v_6.innerHTML = "&nbsp;"
    } else {
        $v_5.className = "mscrm-validate-RowColumn mscrm-validate-Column3-width mscrm-validate-Failure";
        XUI.Html.SetText($v_6, failureReason);
        $v_6.setAttribute("title", failureReason)
    }
    Mscrm.SharePointSiteValidationHelper.$I();
    if (Mscrm.SharePointSiteValidationHelper.$6 > 0) {
        var $v_A = $get("cmdDialogErrorLog");
        if (!IsNull($v_A)) $v_A.style.display = ""
    }
};
Mscrm.SharePointSiteValidationHelper.isValidationRunning = function() {
    return Mscrm.SharePointSiteValidationHelper.$4 > 0
};
Mscrm.SharePointSiteValidationHelper.registerClass("Mscrm.SharePointSiteValidationHelper");
Mscrm.SharePointSiteValidationHelper.$1 = null;
Mscrm.SharePointSiteValidationHelper.$5 = null;
Mscrm.SharePointSiteValidationHelper.$2 = null;
Mscrm.SharePointSiteValidationHelper.$7 = null;
Mscrm.SharePointSiteValidationHelper.$0 = null;
Mscrm.SharePointSiteValidationHelper.$8 = null;
Mscrm.SharePointSiteValidationHelper.$3 = null;
Mscrm.SharePointSiteValidationHelper.$4 = 0;
Mscrm.SharePointSiteValidationHelper.$B = 0;
Mscrm.SharePointSiteValidationHelper.$A = 0;
Mscrm.SharePointSiteValidationHelper.$6 = 0;
Mscrm.SharePointSiteValidationHelper.$C = Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")