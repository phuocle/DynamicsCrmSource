Type.registerNamespace("Mscrm");
Mscrm.SharePointActions = function() {};
Mscrm.SharePointActions.sharePointFormOnLoad = function() {
    Mscrm.SharePointActions.$2 = Mscrm.SharePointActions.$M;
    var $v_0 = $find("crmForm");
    $v_0.add_onSave(Mscrm.SharePointActions.$2)
};
Mscrm.SharePointActions.$3 = function($p0, $p1) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        $v_1 = !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_0.get_dataValue());
    Mscrm.SharePointActions.$D($v_1);
    var $v_2 = Mscrm.SharePointActions.$C(Mscrm.SharePointActions.$0, $p1), $v_3 = $get("crmFormSubmit");
    $v_3.crmFormSubmitXml.value = $v_2;
    $v_3.crmFormSubmitMode.value = $p0;
    if (XUI.Html.DispatchDomEvent($v_3, XUI.Html.CreateDomEvent("submit")))
        if (!IsNull($find("crmInlinePageManager"))) {
            var $v_4 = Mscrm.FormControl.getHttpPostBody($v_3), $v_5 = $find("crmContentPanel");
            $v_5.loadContentByPost(Mscrm.CrmUri.create($v_3.getAttribute("action").toString()), $v_4)
        } else $v_3.submit();
    $p1.add_onSave(Mscrm.SharePointActions.$2)
};
Mscrm.SharePointActions.$G = function() {
    for (var $v_0 = Xrm.Page.ui.controls, $v_1 = $v_0.getLength(), $v_2 = new Array($v_1), $v_3 = 0;
        $v_3 < $v_1;
        $v_3++) {
        var $v_4 = $v_0.get($v_3);
        $v_2[$v_3] = $v_4.getDisabled();
        $v_4.setDisabled(true)
    }
    return $v_2
};
Mscrm.SharePointActions.$5 = function($p0) {
    for (var $v_0 = Xrm.Page.ui.controls, $v_1 = $v_0.getLength(), $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $v_0.get($v_2);
        $v_3.setDisabled($p0[$v_2])
    }
};
Mscrm.SharePointActions.$K = function($p0, $p1, $p2) {
    var $v_0 = $get("isgridpresent");
    if (!IsNull($v_0))
        if (!$v_0.checked)
            if (confirm(window.LOCID_SP_GRID_INSTALLED)) Mscrm.SharePointActions.$3($p0, $p1);
            else {
                Mscrm.RibbonData.setRibbonEnabledState(true);
                $p1.set_saving(false);
                $p1.add_onSave(Mscrm.SharePointActions.$2);
                Mscrm.SharePointActions.$5($p2);
                Mscrm.SharePointFormUtils.removeLoadingDiv()
            }
        else Mscrm.SharePointActions.$3($p0, $p1)
};
Mscrm.SharePointActions.$J = function($p0, $p1, $p2) {
    var $v_0 = $get("isgridpresent");
    if (!IsNull($v_0))
        if ($v_0.checked)
            if (confirm(window.LOCID_SP_GRID_NOT_INSTALLED)) Mscrm.SharePointActions.$3($p0, $p1);
            else {
                Mscrm.RibbonData.setRibbonEnabledState(true);
                $p1.set_saving(false);
                $p1.add_onSave(Mscrm.SharePointActions.$2);
                Mscrm.SharePointActions.$5($p2);
                Mscrm.SharePointFormUtils.removeLoadingDiv()
            }
        else Mscrm.SharePointActions.$3($p0, $p1)
};
Mscrm.SharePointActions.$N = function($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        $v_1 = !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_0.get_dataValue());
    if ($v_1) return !!(Mscrm.SharePointActions.$7($p0) | Mscrm.SharePointActions.$L($p0));
    else return Mscrm.SharePointActions.$7($p0)
};
Mscrm.SharePointActions.$L = function($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("isgridpresent"), $v_1 = false;
    if ($p0 === 9502 && !IsNull($v_0)) $v_1 = $v_0.get_isDirty();
    return $v_1
};
Mscrm.SharePointActions.$7 = function($p0) {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        $v_1 = !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_0.get_dataValue());
    if ($v_1) {
        var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("absoluteurl");
        return $v_2.get_isDirty()
    } else {
        var $v_3 = false;
        if ($p0 === 9502) {
            var $v_5 = Mscrm.FormControlInputBehavior.GetBehavior("parentsite");
            $v_3 = $v_5.get_isDirty()
        } else {
            var $v_6 = Mscrm.FormControlInputBehavior.GetBehavior("parentsiteorlocation");
            $v_3 = $v_6.get_isDirty()
        }
        var $v_4 = Mscrm.FormControlInputBehavior.GetBehavior("relativeurl");
        return $v_3 || $v_4.get_isDirty()
    }
};
Mscrm.SharePointActions.$O = function() {
    var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("validationstatus");
    return $v_0.get_isDirty()
};
Mscrm.SharePointActions.$M = function($p0, $p1) {
    var $v_0 = $p0;
    $v_0.remove_onSave(Mscrm.SharePointActions.$2);
    var $v_1 = $get("crmFormSubmit");
    Mscrm.SharePointActions.$0 = $v_1.crmFormSubmitObjectType.value;
    if (typeof Mscrm.SharePointActions.$0 !== "number")
        Mscrm.SharePointActions.$0 = parseInt(Mscrm.SharePointActions.$0, 10);
    if ($v_0.get_isDirty()) {
        Mscrm.SharePointFormUtils.addLoadingDiv(window.LOCID_SP_SAVING);
        var $v_2 = [], $v_3$5 = $p1.getSaveMode(), $v_4 = Mscrm.SharePointFormUtils.getUrltoValidate();
        if (!isNullOrEmptyString($v_4)) {
            Mscrm.RibbonData.setRibbonEnabledState(false);
            $v_0.set_saving(true);
            if (Mscrm.SharePointActions.$N(Mscrm.SharePointActions.$0))
                try {
                    if (Mscrm.SharePointActions
                        .$0 ===
                        9502)
                        Mscrm.SharePointActions.$7(Mscrm.SharePointActions.$0) &&
                            Mscrm.SharePointFormUtils.setValidationValues(1, 1);
                    $v_2 = Mscrm.SharePointActions.$G();
                    if (Mscrm.SharePointActions.$0 === 9502) {
                        var $v_5 = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
                            $v_6 = !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_5.get_dataValue());
                        if (!$v_6 || Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.SharePointS2S")
                        ) Mscrm.SharePointActions.$3($v_3$5, $v_0);
                        else {
                            var $v_7 = function($p1_0) { Mscrm.SharePointActions.$K($v_3$5, $v_0, $v_2) },
                                $v_8 = function($p1_0) { Mscrm.SharePointActions.$J($v_3$5, $v_0, $v_2) };
                            (new Mscrm.UrlValidatorUsingSharePointGrid).checkGrid($v_4, $v_7, $v_8)
                        }
                    } else {
                        var $v_9 = function() { Mscrm.SharePointActions.$3($v_3$5, $v_0) },
                            $v_A = function($p1_0) {
                                var $v_B = Mscrm.SharePointActions.$I($p1_0);
                                if (confirm($v_B)) Mscrm.SharePointActions.$3($v_3$5, $v_0);
                                else {
                                    Mscrm.RibbonData.setRibbonEnabledState(true);
                                    $v_0.set_saving(false);
                                    $v_0.add_onSave(Mscrm.SharePointActions.$2);
                                    Mscrm.SharePointActions.$5($v_2);
                                    Mscrm.SharePointFormUtils.removeLoadingDiv()
                                }
                            };
                        (new Mscrm.UrlValidatorUsingPing).pingUrl($v_4, $v_9, $v_A)
                    }
                } catch ($$e_H) {
                    Mscrm.SharePointActions.$5($v_2);
                    Mscrm.SharePointActions.$3($v_3$5, $v_0)
                }
            else Mscrm.SharePointActions.$3($v_3$5, $v_0)
        } else {
            Mscrm.RibbonData.setRibbonEnabledState(true);
            $v_0.add_onSave(Mscrm.SharePointActions.$2)
        }
    } else if (Mscrm.SharePointActions.$0 === 9502 && Mscrm.SharePointActions.$O()) {
        var $v_C = $p1.getSaveMode();
        Mscrm.SharePointActions.$3($v_C, $v_0)
    } else {
        $v_0.add_onSave(Mscrm.SharePointActions.$2);
        return true
    }
    $p1.preventDefault()
};
Mscrm.SharePointActions.$I = function($p0) {
    if ($p0 === 10) return window.LOCID_SP_IE_SETTINGS;
    else if ($p0 === 16) return window.LOCID_SP_DIFFERENT_SCHEMES;
    else return window.LOCID_SP_URL_NOTVALID
};
Mscrm.SharePointActions.$A = function($p0, $p1, $p2) {
    var $v_0 = $p0.id,
        $v_1 = XUI.Xml.SelectSingleNode($p1, String.format("/{0}/{1}", $p2.documentElement.nodeName, $v_0), null);
    if (!$v_1) {
        $v_1 = $p2.createElement($v_0);
        $p2.documentElement.appendChild($v_1)
    }
    var $v_2 = XUI.Xml.LoadXml($p0.DataXml).documentElement;
    $p1.replaceChild($v_2, $v_1)
};
Mscrm.SharePointActions.$B = function($p0, $p1, $p2, $p3) {
    var $v_0 = XUI.Xml.SelectSingleNode($p2, String.format("/{0}/{1}", $p3.documentElement.nodeName, $p1), null);
    if (!$v_0) {
        $v_0 = $p3.createElement($p1);
        $p3.documentElement.appendChild($v_0)
    }
    var $v_1;
    if (IsNull($p0.get_dataValue())) $v_1 = $p3.createElement($p1);
    else $v_1 = XUI.Xml.LoadXml($p0.get_dataXml()).documentElement;
    $p2.replaceChild($v_1, $v_0)
};
Mscrm.SharePointActions.$C = function($p0, $p1) {
    var $v_0 = Mscrm.FormUtility.getFormDataXml(), $v_1 = null;
    if (!$v_0.length)
        $v_1 = XUI.Xml.LoadXml($p0 === 9502
            ? "<sharepointsite></sharepointsite>"
            : "<sharepointdocumentlocation></sharepointdocumentlocation>");
    else $v_1 = XUI.Xml.LoadXml($v_0);
    for (var $v_2 = $v_1.documentElement, $v_3 = Xrm.Page.ui.controls, $v_4 = $v_3.getLength(), $v_5 = 0;
        $v_5 < $v_4;
        $v_5++) {
        var $v_6 = $v_3.get($v_5), $v_7 = $v_6.getName(), $v_8 = Mscrm.FormControlInputBehavior.GetBehavior($v_7);
        if (!IsNull($v_8))
            $v_8.get_isDirty() && $v_7 !== "urloption" && Mscrm.SharePointActions.$B($v_8, $v_7, $v_2, $v_1);
        else {
            var $v_9 = $p1.GetControl($v_7),
                $v_A = Mscrm.FormControlInputBehavior.GetElementBehavior($v_9),
                $v_B = $v_A.get_isDirty();
            $v_B && Mscrm.SharePointActions.$A($v_9, $v_2, $v_1)
        }
    }
    return XUI.Xml.XMLSerializer.serializeToString($v_1)
};
Mscrm.SharePointActions.$D = function($p0) {
    if ($p0) {
        var $v_0 = Mscrm.FormControlInputBehavior.GetBehavior("relativeurl");
        $v_0.set_dataValue(null);
        if (Mscrm.SharePointActions.$0 === 9502) {
            var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("parentsite");
            $v_1.set_dataValue(null)
        } else {
            var $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("parentsiteorlocation");
            $v_2.set_dataValue(null)
        }
    } else {
        var $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("absoluteurl");
        $v_3.set_dataValue(null)
    }
};
Mscrm.SharePointFormUtils = function() {};
Mscrm.SharePointFormUtils.removeLoadingDiv = function() {
    var $v_0 = $get("loadingDiv");
    !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
};
Mscrm.SharePointFormUtils.addLoadingDiv = function(message) {
    var $v_0 = document.createElement("div"), $v_1 = document.createElement("img");
    $v_1.src = "/_imgs/advfind/progress.gif";
    $v_0.setAttribute("id", "loadingDiv");
    $v_0.className = "mscrm-sharepoint-LoadingDiv";
    var $v_2 = document.createElement("table");
    $v_2.setAttribute("id", "loadingTable");
    $v_2.className = "mscrm-sharepoint-LoadingTable";
    var $v_3 = Mscrm.SharePointFormUtils.$F($v_2);
    $v_3.appendChild($v_1);
    $v_3.appendChild(document.createElement("br"));
    $v_3.appendChild(document.createTextNode(message));
    $v_0.appendChild($v_2);
    var $v_4 = $get("areaForm");
    $v_4.appendChild($v_0)
};
Mscrm.SharePointFormUtils.$F = function($p0) {
    var $v_0 = $p0.insertRow($p0.rows.length), $v_1 = $v_0.insertCell(0);
    $v_1.setAttribute("valign", "middle");
    $v_1.setAttribute("align", "center");
    return $v_1
};
Mscrm.SharePointFormUtils.$9 = function($p0) {
    var $v_0 = Mscrm.CrmUri.create($p0);
    $v_0.get_scheme() === "http" && window.location.protocol === "https:" && alert(window.LOCID_DOCM_CRMHTTPS_SPHTTP)
};
Mscrm.SharePointFormUtils.getUrltoValidate = function() {
    var $v_0 = $get("crmForm"),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("urloption"),
        $v_2 = !Mscrm.FormInputControl.RadioGroupBehavior.getRadioDataValue($v_1.get_dataValue()),
        $v_3 = $get("crmFormSubmit"),
        $v_4 = parseInt($v_3.crmFormSubmitObjectType.value.toString(), 10);
    if ($v_2) {
        var $v_5 = $get("absoluteurl"), $v_6 = $v_5.value;
        if (!$v_6.length) {
            alert(window.LOCID_SP_ABS_URL_EMPTY);
            Mscrm.SharePointFormUtils.removeLoadingDiv();
            $v_5.focus();
            return null
        } else {
            Mscrm.SharePointFormUtils.$9($v_6);
            return $v_6
        }
    } else {
        var $v_7 = "";
        if ($v_4 === 9502) $v_7 = "parentsite";
        else $v_7 = "parentsiteorlocation";
        var $v_8 = Mscrm.FormControlInputBehavior.GetBehavior($v_7),
            $v_9 = $v_8.GetDataXml(null),
            $v_A = XUI.Xml.LoadXml($v_9),
            $v_B = XUI.Xml.SelectSingleNode($v_A, "/" + $v_7, null),
            $v_C = XUI.Xml.GetText($v_B);
        if ($v_C.length) {
            var $v_D = $get("relativeurl"), $v_E = $v_D.value;
            if ($v_E.indexOf("/")) if ($v_E.length > 0) $v_E = "/" + $v_E;
            if ($v_E.length) {
                var $v_F = parseInt($v_B.attributes.getNamedItem("type").nodeValue, 10),
                    $v_G = Mscrm.SharePointFormUtils.$H($v_C, $v_F);
                if (Object.getType($v_G) !== String || isNullOrEmptyString($v_G)) {
                    if ($v_4 === 9502) alert(window.LOCID_DOCM_SPSITE_INVALIDPARENT);
                    else alert(window.LOCID_DOCM_SPLOC_INVALIDPARENT);
                    Mscrm.SharePointFormUtils.removeLoadingDiv();
                    $v_8.Focus(null);
                    return null
                }
                return $v_G + $v_E
            } else {
                alert(window.LOCID_SP_REL_URL_EMPTY);
                Mscrm.SharePointFormUtils.removeLoadingDiv();
                $v_D.focus();
                return null
            }
        } else {
            alert(window.LOCID_SP_PARENT_SITE_EMPTY);
            Mscrm.SharePointFormUtils.removeLoadingDiv();
            $v_8.Focus(null);
            return null
        }
    }
};
Mscrm.SharePointFormUtils.$H = function($p0, $p1) {
    var $v_0 = "";
    if ($p1 === 9502) $v_0 = "sharepointsite";
    else $v_0 = "sharepointdocumentlocation";
    if (isNullOrEmptyString($v_0));
    var $v_1 = new RemoteCommand("DocumentManagementWebService", "RetrieveAbsoluteAndSiteCollectionUrl");
    $v_1.SetParameter("logicalName", $v_0);
    $v_1.SetParameter("entityId", $p0);
    var $v_2 = $v_1.Execute(), $v_3 = $v_2.ReturnValue.string;
    return $v_3[1]
};
Mscrm.SharePointFormUtils.setValidationValues = function(validationStatusResult, validationStatusReasonResult) {
    var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow(),
        $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("validationstatus"),
        $v_2 = Mscrm.FormControlInputBehavior.GetBehavior("validationstatuserrorcode"),
        $v_3 = Mscrm.FormControlInputBehavior.GetBehavior("lastvalidated");
    $v_1.set_dataValue(validationStatusResult);
    $v_2.set_dataValue(validationStatusReasonResult);
    validationStatusResult !== 1 && $v_3.set_dataValue($v_0)
};
Mscrm.SPSiteValidateResult = function() {};
Mscrm.SPValidationStatusValue = function() {};
Mscrm.SPValidationStatusReasonValue = function() {};
Mscrm.SPUrlType = function() {};
Mscrm.S2SDocLibCreateStatus = function() {};
Mscrm.UrlValidatorUsingPing = function() {};
Mscrm.UrlValidatorUsingPing.prototype = {
    pingUrl: function(urlToValidate, success, failure) {
        try {
            var $v_0 = window.location.protocol;
            if ($v_0.endsWith(":")) $v_0 = $v_0.substr(0, $v_0.length - 1);
            if ($v_0 !== Mscrm.CrmUri.create(urlToValidate).get_scheme()) {
                failure(16);
                return
            }
            var $v_1 = new XMLHttpRequest, $$t_6 = this;
            $v_1.onreadystatechange = function() {
                if ($v_1.readyState === 4) {
                    window.clearTimeout($$t_6.$4_0);
                    $v_1.onreadystatechange = null;
                    if ($v_1.status === 200) success && success();
                    else failure && failure(9)
                }
            };
            $v_1.open("HEAD", urlToValidate, true);
            $v_1.send(null);
            var $$t_7 = this;
            this.$4_0 = window.setTimeout(function() {
                    $v_1.onreadystatechange = null;
                    $v_1.abort();
                    failure(11)
                },
                15000)
        } catch ($$e_5) {
            failure && failure(10)
        }
    },
    $4_0: 0
};
Mscrm.UrlValidatorUsingSharePointGrid = function() { this.$$d_$P_0 = Function.createDelegate(this, this.$P_0) };
Mscrm.UrlValidatorUsingSharePointGrid.prototype = {
    checkGrid: function(siteCollectionUrl, success, failure) {
        this.validateSite(siteCollectionUrl, siteCollectionUrl, success, failure)
    },
    validateUrl: function(siteCollectionUrl, locationRelativeUrl, success, failure) {
        this.$8_0(siteCollectionUrl, locationRelativeUrl, success, failure, 1)
    },
    validateSite: function(siteCollectionUrl, locationRelativeUrl, success, failure) {
        this.$8_0(siteCollectionUrl, locationRelativeUrl, success, failure, 2)
    },
    $8_0: function($p0, $p1, $p2, $p3, $p4) {
        this.$6_0 = $p2;
        this.$1_0 = $p3;
        var $v_0 = this.$E_0($p0, $p1, $p4), $v_1 = window.document.createElement("iframe");
        $v_1.id = "validateUrlFrame";
        $v_1.setAttribute("name", "validateUrlFrame");
        $v_1.style.display = "none";
        $v_1.src = $v_0.toString();
        $addHandler($v_1, "load", this.$$d_$P_0);
        window.document.body.appendChild($v_1);
        var $$t_7 = this;
        this.$4_0 = window.setTimeout(function() {
                $v_1 = $get("validateUrlFrame");
                if (!IsNull($v_1)) {
                    window.document.body.removeChild($v_1);
                    $$t_7.$1_0(11)
                }
            },
            6e4)
    },
    $P_0: function($p0) {
        window.clearTimeout(this.$4_0);
        var $v_0 = $get("validateUrlFrame"),
            $v_1 = Mscrm.Utilities.getExternalIFrame($v_0, "crmProxyIframe"),
            $v_2 = Mscrm.Utilities.getExternalIFrame($v_0, "proxyFrame"),
            $v_3 = Mscrm.Utilities.getExternalIFrame($v_0, "docmErrorFrameFromSharePoint");
        try {
            if (!IsNull($v_1)) {
                var $v_4 = $v_1.location.hash;
                if (!isNullOrEmptyString($v_4)) {
                    var $v_5 = $v_4.split("#")[1];
                    if (!isNullOrEmptyString($v_5)) {
                        var $v_6 = $v_5.split(":")[0];
                        if ($v_6 === "1") {
                            window.document.body.removeChild($get("validateUrlFrame"));
                            var $v_7 = parseInt($v_5.split(":")[1], 10);
                            this.$6_0($v_7)
                        } else {
                            window.document.body.removeChild($get("validateUrlFrame"));
                            this.$1_0(12)
                        }
                    } else {
                        window.document.body.removeChild($get("validateUrlFrame"));
                        this.$1_0(13)
                    }
                } else {
                    window.document.body.removeChild($get("validateUrlFrame"));
                    this.$1_0(13)
                }
            } else if (!IsNull($v_3)) {
                window.document.body.removeChild($get("validateUrlFrame"));
                this.$1_0(8)
            } else if (IsNull($v_2)) {
                window.document.body.removeChild($get("validateUrlFrame"));
                this.$1_0(14)
            } else {
                window.document.body.removeChild($get("validateUrlFrame"));
                this.$1_0(13)
            }
        } catch ($v_8) {
            window.document.body.removeChild($get("validateUrlFrame"));
            this.$1_0(5)
        }
    },
    $E_0: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.CrmUri.create($p0 + "/crmgrid/sitevalidate.aspx");
        $v_0.get_query()["url"] = $p1;
        $v_0.get_query()["serverUrl"] = window.location.protocol +
            "//" +
            window.location.hostname +
            ":" +
            window.location.port +
            "/tools/documentmanagement/crmproxy.html";
        $v_0.get_query()["cmd"] = $p2;
        return $v_0
    },
    $6_0: null,
    $1_0: null,
    $4_0: 0
};
Mscrm.SharePointGridCommands = function() {};
Mscrm.SharePointActions.registerClass("Mscrm.SharePointActions");
Mscrm.SharePointFormUtils.registerClass("Mscrm.SharePointFormUtils");
Mscrm.SPSiteValidateResult.registerClass("Mscrm.SPSiteValidateResult");
Mscrm.SPValidationStatusValue.registerClass("Mscrm.SPValidationStatusValue");
Mscrm.SPValidationStatusReasonValue.registerClass("Mscrm.SPValidationStatusReasonValue");
Mscrm.SPUrlType.registerClass("Mscrm.SPUrlType");
Mscrm.S2SDocLibCreateStatus.registerClass("Mscrm.S2SDocLibCreateStatus");
Mscrm.UrlValidatorUsingPing.registerClass("Mscrm.UrlValidatorUsingPing");
Mscrm.UrlValidatorUsingSharePointGrid.registerClass("Mscrm.UrlValidatorUsingSharePointGrid");
Mscrm.SharePointGridCommands.registerClass("Mscrm.SharePointGridCommands");
Mscrm.SharePointActions.$2 = null;
Mscrm.SharePointActions.$0 = 0;
Mscrm.SPSiteValidateResult.sharePoint2010WithListSolution = 0;
Mscrm.SPSiteValidateResult.sharePoint2010WithoutListSolution = 1;
Mscrm.SPSiteValidateResult.sharepointNot2010 = 2;
Mscrm.SPSiteValidateResult.siteNotSharePoint = 3;
Mscrm.SPSiteValidateResult.siteNotReachable = 4;
Mscrm.SPSiteValidateResult.permissionDenied = 5;
Mscrm.SPSiteValidateResult.noURLEntered = 6;
Mscrm.SPSiteValidateResult.gridFailMixedContent = 7;
Mscrm.SPSiteValidateResult.sharePoint2010WithoutAlternateAccessMapping = 8;
Mscrm.SPSiteValidateResult.xmlHttpErrorUrlNotFound = 9;
Mscrm.SPSiteValidateResult.xmlHttpException = 10;
Mscrm.SPSiteValidateResult.xmlHttpErrorTimeout = 11;
Mscrm.SPSiteValidateResult.urlNotFoundOnSharePoint = 12;
Mscrm.SPSiteValidateResult.unexpectedError = 13;
Mscrm.SPSiteValidateResult.gridNotReachable = 14;
Mscrm.SPSiteValidateResult.emptyOrNullUrl = 15;
Mscrm.SPSiteValidateResult.xmlHttpErrorDifferentSchemes = 16;
Mscrm.SPSiteValidateResult.sharePointS2SConfigured = 17;
Mscrm.SPSiteValidateResult.sharePointS2SConfigureError = 18;
Mscrm.SPValidationStatusValue.urlNotValidated = 1;
Mscrm.SPValidationStatusValue.urlValidationInProgress = 2;
Mscrm.SPValidationStatusValue.urlInvalid = 3;
Mscrm.SPValidationStatusValue.urlValid = 4;
Mscrm.SPValidationStatusValue.urlCouldNotBeValidated = 5;
Mscrm.SPValidationStatusReasonValue.urlNotValidated = 1;
Mscrm.SPValidationStatusReasonValue.urlValid = 2;
Mscrm.SPValidationStatusReasonValue.urlInvalid = 3;
Mscrm.SPValidationStatusReasonValue.xmlHttpErrorDifferentSchemes = 4;
Mscrm.SPValidationStatusReasonValue.xmlHttpIESettingException = 5;
Mscrm.SPValidationStatusReasonValue.authenticationFailure = 6;
Mscrm.SPValidationStatusReasonValue.invalidCertificate = 7;
Mscrm.SPUrlType.site = 1;
Mscrm.SPUrlType.documentLibrary = 2;
Mscrm.SPUrlType.folder = 3;
Mscrm.S2SDocLibCreateStatus.failed = "1";
Mscrm.S2SDocLibCreateStatus.newCreated = "2";
Mscrm.S2SDocLibCreateStatus.alreadyExisting = "3";
Mscrm.SharePointGridCommands.checkUrl = 1;
Mscrm.SharePointGridCommands.checkSite = 2