Type.registerNamespace("Mscrm");
Mscrm.ExternalSearch = function() {};
Mscrm.ExternalSearch.$$cctor = function() {
    Mscrm.PerceivedCommandBarHelper.hasPerceivedCommandBar() &&
        Mscrm.PerceivedCommandBarHelper.removePerceivedCommandBar();
    $P_CRM(window).bind("unload", Mscrm.ExternalSearch.$p);
    $P_CRM(window).bind("load", Mscrm.ExternalSearch.$l);
    $P_CRM(window).bind("resize", Mscrm.ExternalSearch.$19);
    Mscrm.MetricsReporting.instance().addMetric("ExternalSearchSessionStart", Mscrm.ExternalSearch.$15())
};
Mscrm.ExternalSearch.$15 = function() {
    return {
        CurrentDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
        ClientName: Xrm.Page.context.client.getClient(),
        UserId: Xrm.Page.context.getUserId(),
        OrganizationName: Xrm.Page.context.getOrgUniqueName(),
        OrganizationId: window.ORG_ID,
        ExternalSearcPageLoad: true
    }
};
Mscrm.ExternalSearch.$l = function($p0) {
    $addHandler(window.document.getElementById("mainContainer"), "mouseover", Mscrm.ExternalSearch.$m);
    var $v_0 = $P_CRM("#searchTextBox");
    window.setTimeout(function() { $v_0.focus() }, 0);
    var $v_1 = window.document.getElementById("searchTextBox");
    window.setTimeout(function() { Mscrm.ExternalSearch.$1F($v_1) }, 0);
    Mscrm.ExternalSearch.$t();
    Mscrm.ExternalSearch.addMoreRecordsHandler();
    Mscrm.ExternalSearch.$d();
    Mscrm.ExternalSearch.$T = true;
    var $v_2 = $P_CRM("#entityCombo");
    $v_2.css("display", "none");
    var $v_3 = $P_CRM("#RecordTypeEntityTitleDisplay");
    $v_3.css("display", "none");
    var $v_4 = $P_CRM("#crmContentPanel");
    $v_4.css("top", "60px");
    var $v_5 = $P_CRM("#ownerNameTitleDisplay");
    $v_5.css("display", "none");
    var $v_6 = window.top.document.getElementById("crmRibbonManager");
    if (!IsNull($v_6)) {
        $v_6.style.visibility = "hidden";
        $v_6.style.display = "none"
    }
    XrmUI.Manager.XrmUIPage = new Mscrm.XrmUIPageWrapper("Search", null)
};
Mscrm.ExternalSearch.$1F = function($p0) {
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var $v_0 = $p0.createTextRange();
        $v_0.moveStart("character", $p0.value.length);
        $v_0.collapse(false);
        $v_0.select()
    } else $p0.setSelectionRange($p0.value.length, $p0.value.length)
};
Mscrm.ExternalSearch.receiveprocessedJson = function(jsonPram) { Mscrm.ExternalSearch.processedJson = jsonPram };
Mscrm.ExternalSearch.$19 = function($p0) {
    Mscrm.ExternalSearch.$r();
    Mscrm.ExternalSearch.$d()
};
Mscrm.ExternalSearch.$r = function() {
    var $v_0 = $P_CRM(window).height(),
        $v_1 = $v_0 - 110,
        $v_2 = $P_CRM("#panoramaContainer"),
        $v_3 = $P_CRM(".scrollRegion"),
        $v_4 = $P_CRM(".panoramaItem")
};
Mscrm.ExternalSearch.$d = function() {
    var $v_0 = $P_CRM("#findCriteriaImg"), $v_1 = window.HighContrastEnabled;
    if (!IsNull($v_0) && !IsNull($v_0.attr("src")))
        if ($v_1) $v_0.attr("src", "/_imgs/navbar/highcontrast/search_hc_16.png");
        else $v_0.attr("src", window.CDNURL + "/_imgs/search_white_16.png")
};
Mscrm.ExternalSearch.$t = function() {
    var $v_0 = $P_CRM("#contentResult");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.children().find(Mscrm.ExternalSearch.$P + "#scrollbarRegion_All"), $v_2 = $get($v_1.attr("ID"));
        if (!IsNull($v_2)) {
            var $v_3 = Xrm.Page.context.client.getClient() === "Mobile";
            if (window.UseTabletExperience ||
                Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled() ||
                $v_3 ||
                Mscrm.Utilities.isEdge()) $v_2.className = $v_2.className + " meqfVerticalScrollDevice";
            $addHandler($v_2, "mouseover", Mscrm.ExternalSearch.$o)
        }
    }
};
Mscrm.ExternalSearch.$c = function() {
    var $v_0 = window.document.getElementById("mainContainer"),
        $v_1 = window.document.getElementById("mainContainer")._events.DOMMouseScroll;
    if (!IsNull($v_1) && typeof $v_1 !== "undefined") {
        $removeHandler($v_0, "DOMMouseScroll", Mscrm.ExternalSearch.$j);
        $removeHandler($v_0, "mousewheel", Mscrm.ExternalSearch.$j)
    }
};
Mscrm.ExternalSearch.addMoreRecordsHandler = function() {
    var $v_0 = $P_CRM("#moreRecordsText");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $get($v_0.attr("ID"));
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) && $addHandler($v_1, "click", Mscrm.ExternalSearch.$n)
    }
};
Mscrm.ExternalSearch.removeMoreRecordsEventHandler = function() {
    var $v_0 = window.document.getElementById("moreRecordsText");
    if (null !== $v_0) {
        var $v_1 = window.document.getElementById("moreRecordsText")._events.click;
        typeof $v_1 !== "undefined" && $removeHandler($v_0, "click", Mscrm.ExternalSearch.$n)
    }
};
Mscrm.ExternalSearch.$p = function($p0) {
    Mscrm.ExternalSearch.$1A();
    Mscrm.ExternalSearch.$1B();
    Mscrm.ExternalSearch.$c();
    Mscrm.ExternalSearch.removeMoreRecordsEventHandler();
    $P_CRM(window).unbind("unload", Mscrm.ExternalSearch.$p);
    $P_CRM(window).unbind("load", Mscrm.ExternalSearch.$l);
    var $v_0 = false;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(Mscrm.ExternalSearch.entityRecordOpened)) $v_0 = true;
    $removeHandler(window.document.getElementById("mainContainer"), "mouseover", Mscrm.ExternalSearch.$m);
    Mscrm.MetricsReporting.instance().addMetric("ExternalSearchSessionEnd",
    {
        ExterSearchWindowUnloadDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
        ClientName: Xrm.Page.context.client.getClient(),
        UserId: Xrm.Page.context.getUserId(),
        OrganizationName: Xrm.Page.context.getOrgUniqueName(),
        OrganizationId: window.ORG_ID,
        searchText: Mscrm.ExternalSearch.get_searchText(),
        sessionSuccessfull: $v_0
    })
};
Mscrm.ExternalSearch.get_searchText = function() {
    var $v_0 = $get("searchTextBox").value.trim();
    if (!isNullOrEmptyString($v_0)) return $v_0.toString();
    else return ""
};
Mscrm.ExternalSearch.validateSearchText = function() {
    if (isNullOrEmptyString(Mscrm.ExternalSearch.get_searchText())) return true;
    else return false
};
Mscrm.ExternalSearch.hidePanorama = function(messageToRender) {
    if (!IsNull($get("panoramaContainer"))) $get("panoramaContainer").style.display = "none";
    if (!IsNull($get("searchCriteria"))) {
        XUI.Html.SetText($get("searchCriteria"), messageToRender);
        $get("searchCriteria").style.display = "inline-block"
    }
};
Mscrm.ExternalSearch.showPanorama = function(pageNumber) {
    if (!IsNull($get("panoramaContainer"))) $get("panoramaContainer").style.display = "block";
    if (!IsNull($get("searchCriteria"))) $get("searchCriteria").style.display = "none";
    if (!IsNull($get("scrollbarRegion_All")) && !pageNumber) $get("scrollbarRegion_All").scrollTop = 0
};
Mscrm.ExternalSearch.setFilterDropDownHeight = function() { Mscrm.ExternalSearch.$16() };
Mscrm.ExternalSearch.showHideCheckBox = function() {
    for (var $v_0 = $get("entityCombo"), $v_1 = $v_0.options, $v_2 = 0;
        $v_2 < $v_1.length;
        $v_2++
    )
        if ($v_1[$v_2].getAttribute("value") === Mscrm.ExternalSearch.$9.toString() &&
        ($v_1[$v_2]
            .getAttribute("hasactivities") ===
            "1" ||
            $v_1[$v_2].getAttribute("hasnotes") === "1")) Mscrm.ExternalSearch.$Q = false;
    if (Mscrm.ExternalSearch.$Q) $get("checkBoxContainer").style.display = "none"
};
Mscrm.ExternalSearch.updateCheckBoxState = function() {
    if (Mscrm.ExternalSearch.$Q) return;
    var $v_0 = Mscrm.ExternalSearch.getSelectedFilterOptionElement(), $v_1 = $get("searchCheckBox");
    if ($v_0.value === "0" || $v_0.getAttribute("hasactivities") === "0" && $v_0.getAttribute("hasnotes") === "0") {
        $v_1.checked = false;
        $v_1.disabled = true
    } else $v_1.disabled = false
};
Mscrm.ExternalSearch.isCheckBoxChecked = function() {
    var $v_0 = $get("searchCheckBox");
    if (!IsNull($v_0)) return $v_0.checked;
    else return false
};
Mscrm.ExternalSearch.includeActivities = function() {
    var $v_0 = Mscrm.ExternalSearch.getSelectedFilterOptionElement();
    if (Mscrm.ExternalSearch
        .isCheckBoxChecked() &&
        !IsNull($v_0)) if ($v_0.getAttribute("hasactivities") === "1") return true;
    return false
};
Mscrm.ExternalSearch.includeNotes = function() {
    var $v_0 = Mscrm.ExternalSearch.getSelectedFilterOptionElement();
    if (Mscrm.ExternalSearch
        .isCheckBoxChecked() &&
        !IsNull($v_0)) if ($v_0.getAttribute("hasnotes") === "1") return true;
    return false
};
Mscrm.ExternalSearch.getSelectedFilterOptionElement = function() {
    var $v_0 = $get("entityCombo");
    return $v_0.options[$v_0.selectedIndex]
};
Mscrm.ExternalSearch.executeSearchSdkCall = function(pageSize, pageNumber) {
    Mscrm.ExternalSearch.externalSearchDateTimeRecords = [];
    Mscrm.ExternalSearch.executeRecordSearchSdkCall(pageSize, pageNumber, 0, "", false, "")
};
Mscrm.ExternalSearch.executeRecordSearchEntityNameCall = function(pageSize, pageNumber, selectedEntity) {
    var $v_0 = Xrm.Internal.getEntityCode(selectedEntity);
    Mscrm.ExternalSearch.executeRecordSearchSdkCall(pageSize, pageNumber, $v_0, "", false, "")
};
Mscrm.ExternalSearch.getEntityName = function(id) { return Xrm.Internal.getEntityName(id) };
Mscrm.ExternalSearch.executeRecordSearchSdkCall = function(pageSize, pageNumber, ID, filter, removeFilter, filterType) {
    setPerfMarkerTimestamp("ExecuteQuickFindSdkCallStartLoad");
    Mscrm.ExternalSearch.showProgress(pageNumber);
    if (!Mscrm.ExternalSearch.validateSearchText()) {
        var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow();
        Mscrm.MetricsReporting.instance().addMetric("ExternalSearchExecuted",
            { ExterSearchStartDateTime: $v_0, searchText: Mscrm.ExternalSearch.get_searchText() });
        $get("result1").innerHTML = "Searching Record for text " + Mscrm.ExternalSearch.get_searchText();
        Mscrm.ExternalSearch.entityRecordOpened = "";
        Mscrm.ExternalSearch.searchCount++;
        var $v_1 = 1, $v_2 = window.APPLICATION_VERSION, $v_3 = "";
        if (filterType !== "DateTime") Mscrm.ExternalSearch.skipBarChartColumnName = "";
        var $v_4 = String.format("/api/search/indexes/default/Entities?api-version={0}&search={1}",
                CrmEncodeDecode.CrmUrlEncode($v_2),
                CrmEncodeDecode.CrmUrlEncode(Mscrm.ExternalSearch.get_searchText())),
            $v_5 = Xrm.Internal.getEntityName(parseInt(ID));
        if (removeFilter) {
            Mscrm.ExternalSearch.$q(filter, false);
            filter = "IncludeNotes"
        }
        var $v_6 = [];
        if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(filter) && filter !== "IncludeNotes") {
            var $v_C = false;
            if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
                for (var $v_D = 0; $v_D < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_D++) {
                    var $v_E = Mscrm.ExternalSearch.externalSearchFilterList[$v_D];
                    if ($v_E.$8_0 === filter && (filterType !== "DateTime" || filterType !== "Slider")) $v_C = true
                }
            if (!$v_C) {
                var $v_F = new Mscrm.ExternalSearchFilterRecord;
                $v_F.$8_0 = filter;
                if (filter.indexOf("ownerid") > -1 ||
                    filter.indexOf("createdon") > -1 ||
                    filter.indexOf("modifiedon") > -1) $v_F.$5_0 = true;
                else $v_F.$5_0 = false;
                Array.add(Mscrm.ExternalSearch.externalSearchFilterList, $v_F)
            }
        } else if (!(filterType === "DateTime" || filterType === "Slider"))
            if (!ID && filter !== "IncludeNotes") Mscrm.ExternalSearch.externalSearchFilterList = [];
            else filter !== "IncludeNotes" && Mscrm.ExternalSearch.$q("", true);
        if (null !== $v_5) {
            Mscrm.ExternalSearch.$9 = parseInt(ID);
            $v_4 += "&searchEntities=" + CrmEncodeDecode.CrmUrlEncode($v_5);
            var $v_G = Mscrm.ExternalSearch.$12($v_5);
            $v_6 = Mscrm.ExternalSearch.$13($v_G, $v_5);
            var $v_H = Mscrm.ExternalSearch.includeActivities(), $v_I = Mscrm.ExternalSearch.includeNotes();
            if ($v_H) $v_4 += "," + CrmEncodeDecode.CrmUrlEncode("activities");
            if ($v_I) $v_4 += "," + CrmEncodeDecode.CrmUrlEncode("annotation");
            var $v_J = "&$filter=", $v_K = Mscrm.ExternalSearch.$X(true), $v_L = Mscrm.ExternalSearch.$Y(true);
            if (!isNullOrEmptyString($v_K) && !isNullOrEmptyString($v_L)
            ) $v_3 += CrmEncodeDecode.CrmUrlEncode($v_K) + " and " + CrmEncodeDecode.CrmUrlEncode($v_L);
            else if (!isNullOrEmptyString($v_K)) $v_3 += CrmEncodeDecode.CrmUrlEncode($v_K);
            else $v_3 += CrmEncodeDecode.CrmUrlEncode($v_L);
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) {
                $v_4 += $v_J;
                $v_4 += $v_5 + ":";
                $v_4 += $v_3;
                $v_J = ""
            }
            var $v_M = Mscrm.ExternalSearch.$Y(false), $v_N = Mscrm.ExternalSearch.$X(false);
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_M)) {
                $v_4 += $v_J;
                if (isNullOrEmptyString($v_J)) $v_4 += " and ";
                else $v_4 += $v_5 + ":";
                $v_4 += CrmEncodeDecode.CrmUrlEncode($v_M);
                $v_J = ""
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_N)) {
                $v_4 += $v_J;
                if (isNullOrEmptyString($v_J)) $v_4 += " and ";
                else $v_4 += $v_5 + ":";
                $v_4 += CrmEncodeDecode.CrmUrlEncode($v_N);
                $v_J = ""
            }
            if ($v_H) {
                if (isNullOrEmptyString($v_J)) $v_4 += ",";
                $v_4 += $v_J +
                    CrmEncodeDecode.CrmUrlEncode("activities") +
                    ":regardingobjecttypecode eq '" +
                    CrmEncodeDecode.CrmUrlEncode($v_5) +
                    "'"
            }
            if ($v_I) {
                if ($v_H) $v_4 += ",";
                else if (isNullOrEmptyString($v_J)) $v_4 += ",";
                else $v_4 += $v_J;
                $v_4 += CrmEncodeDecode.CrmUrlEncode("annotation") +
                    ":objecttypecode eq '" +
                    CrmEncodeDecode.CrmUrlEncode($v_5) +
                    "'"
            }
        } else {
            Mscrm.ExternalSearch.$9 = 0;
            var $v_O = Mscrm.ExternalSearch.$X(true);
            $v_3 = CrmEncodeDecode.CrmUrlEncode($v_O);
            var $v_P = Mscrm.ExternalSearch.$Y(true);
            if (!isNullOrEmptyString($v_3) && !isNullOrEmptyString($v_P)
            ) $v_3 += " and " + CrmEncodeDecode.CrmUrlEncode($v_P);
            else $v_3 += CrmEncodeDecode.CrmUrlEncode($v_P);
            if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_3)) $v_4 += "&$filter=" + $v_3
        }
        $v_4 += "&$top=" + Math.min(pageSize, 1e3).toString();
        if (0 < pageNumber) $v_4 += "&$skip=" + Math.min(Math.max(0, pageNumber * pageSize), 1e5).toString();
        for (var $v_7 = Mscrm.ExternalSearch.getFutureAndPastDateTimeNow(), $v_8 = "(modifiedon,values:", $v_Q = 0;
            $v_Q < 4;
            $v_Q++) $v_8 += $v_7[$v_Q] + "|";
        $v_8 = $v_8.substring(0, $v_8.length - 1);
        $v_8 += "),";
        for (var $v_9 = "(createdon,values:", $v_R = 0; $v_R < 4; $v_R++) $v_9 += $v_7[$v_R] + "|";
        $v_9 = $v_9.substring(0, $v_9.length - 1);
        $v_9 += ")";
        var $v_A = "";
        if (ID)
            if ($v_6.length > 0)
                for (var $v_S = 0; $v_S < $v_6.length; $v_S++) {
                    var $v_T = $v_6[$v_S];
                    if ($v_T.$3_0 === "Lookup" || $v_T.$3_0 === "Customer") $v_A += "(" + $v_T.$4_0 + ",count:100),";
                    else if ($v_T.$3_0 === "DateTime") {
                        for (var $v_U = Mscrm.ExternalSearch.getFutureAndPastDateTimeNow(),
                            $v_V = "(" + $v_T.$4_0 + ",values:",
                            $v_W = 0;
                            $v_W < 5;
                            $v_W++) $v_V += $v_U[$v_W] + "|";
                        $v_A += $v_V + "),"
                    } else if ($v_T
                        .$3_0 ===
                        "Money" ||
                        $v_T.$3_0 === "Integer" ||
                        $v_T.$3_0 === "Decimal") $v_A += "(" + $v_T.$4_0 + ",interval:100),";
                    else if ($v_T.$3_0 === "Picklist") $v_A += "(" + $v_T.$4_0 + ",count:100),"
                }
        $v_4 += "&facet=" +
            CrmEncodeDecode.CrmUrlEncode("(@search.entityname,count:100),") +
            CrmEncodeDecode.CrmUrlEncode($v_A) +
            CrmEncodeDecode.CrmUrlEncode("(ownerid,count:100),") +
            CrmEncodeDecode.CrmUrlEncode($v_8) +
            CrmEncodeDecode.CrmUrlEncode($v_9);
        var $v_B = Mscrm.CrmUri.create($v_4);
        !window.IS_LIVE && !window.IS_SPLA && $v_B.set_useOrganizationName(true);
        setPerfMarkerTimestamp("ExecuteQuickFindStartLoad");
        Mscrm.InlineContentLoader.requestJsonContentByGet($v_B,
            function($p1_0) {
                var $v_X = $p1_0.responseText;
                ProcessJsonResponse($v_X, "");
                var $v_Y = Sys.Serialization.JavaScriptSerializer.deserialize(Mscrm.ExternalSearch.processedJson),
                    $v_Z = Mscrm.DateTimeUtility.localDateTimeNow();
                Mscrm.MetricsReporting.instance().addMetric("ExternalSearchCompleted",
                    { ExterSearchCompletedDateTime: $v_Z, searchText: Mscrm.ExternalSearch.get_searchText() });
                var $v_a = $v_Y["value"], $v_b = $v_Y["facets"];
                $P_CRM("#recordTypeJson").val($v_X);
                if (!IsNull($v_a)) {
                    setPerfMarkerTimestamp("GetEntitySummaryResultStartLoad");
                    $v_1 = Mscrm.ExternalSearch.$11($v_a, pageNumber, pageSize);
                    if ($v_1 !== 1 || $v_1 !== 2) {
                        Mscrm.ExternalSearch.showPanorama(pageNumber);
                        Mscrm.ExternalSearch.hideProgress(pageNumber)
                    }
                    if ($v_1 === 1 && filterType !== "Slider") {
                        HideRecordPanel(false);
                        if (!ID) Mscrm.ExternalSearch.$S($v_b, true, $v_6);
                        else Mscrm.ExternalSearch.$S($v_b, false, $v_6)
                    } else if ($v_1 !== 1) {
                        HideRecordPanel(false);
                        if (!ID) Mscrm.ExternalSearch.$S($v_b, true, $v_6);
                        else Mscrm.ExternalSearch.$S($v_b, false, $v_6)
                    }
                    setPerfMarkerTimestamp("GetEntitySummaryResultEndLoad");
                    Mscrm.ExternalSearch.$1G()
                }
                Mscrm.ExternalSearch.hideProgress(pageNumber);
                SearchResultTabbingSequenceChange();
                if ($v_1 === 1) {
                    if (filterType !== "Slider") {
                        var $v_c = $P_CRM("#RecordTypeEntityTitleDisplay");
                        $v_c.css("visibility", "hidden");
                        var $v_d = $P_CRM("#ownerNameTitleDisplay");
                        $v_d.css("visibility", "hidden");
                        var $v_e = $P_CRM("#globalModifiedOn");
                        $v_e.css("visibility", "hidden");
                        var $v_f = $P_CRM("#globalCreatedOn");
                        $v_f.css("visibility", "hidden");
                        var $v_g = $P_CRM("#recordType");
                        $v_g.css("display", "none")
                    }
                    Mscrm.ExternalSearch.hidePanorama(window.LOCID_MEQF_MIN_CHARACTER_SEARCH);
                    Mscrm.MetricsReporting.instance()
                        .addMetric("InvalidExternalSearch",
                        {
                            ExterSearchCompletedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
                            searchText: Mscrm.ExternalSearch.get_searchText(),
                            error: window.LOCID_MEQF_MIN_CHARACTER_SEARCH
                        })
                } else if ($v_1 === 2) {
                    var $v_h = $P_CRM("#RecordTypeEntityTitleDisplay");
                    $v_h.css("visibility", "hidden");
                    var $v_i = $P_CRM("#ownerNameTitleDisplay");
                    $v_i.css("visibility", "hidden");
                    var $v_j = $P_CRM("#globalModifiedOn");
                    $v_j.css("visibility", "hidden");
                    var $v_k = $P_CRM("#globalCreatedOn");
                    $v_k.css("visibility", "hidden");
                    var $v_l = $P_CRM("#recordType");
                    $v_l.css("display", "none");
                    Mscrm.ExternalSearch.hidePanorama(window.LOCID_ES_SERVER_UNAVAILABLE);
                    Mscrm.MetricsReporting.instance()
                        .addMetric("InvalidExternalSearch",
                        {
                            ExterSearchCompletedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
                            searchText: Mscrm.ExternalSearch.get_searchText(),
                            error: window.LOCID_ES_SERVER_UNAVAILABLE
                        })
                }
                Mscrm.ExternalSearch.$r();
                setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad")
            },
            function($p1_0) {
                Mscrm.ExternalSearch.hideProgress(pageNumber);
                switch ($p1_0.status) {
                case 500:
                    if ($p1_0.statusText === "1")
                        Mscrm.ExternalSearch.hidePanorama(Xrm.Internal
                            .getResourceString("ExternalSearch_InitialProvisioning_Error"));
                    else {
                        Mscrm.ExternalSearch.hidePanorama(window.LOCID_ES_SERVER_UNAVAILABLE);
                        Mscrm.MetricsReporting.instance()
                            .addMetric("InvalidExternalSearch",
                            {
                                ExterSearchCompletedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
                                searchText: Mscrm.ExternalSearch.get_searchText(),
                                error: window.LOCID_ES_SERVER_UNAVAILABLE
                            })
                    }
                    break;
                default:
                    Mscrm.ExternalSearch.hidePanorama(window.LOCID_ES_SERVER_UNEXPECTEDERROR);
                    Mscrm.MetricsReporting.instance()
                        .addMetric("InvalidExternalSearch",
                        {
                            ExterSearchCompletedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
                            searchText: Mscrm.ExternalSearch.get_searchText(),
                            error: window.LOCID_ES_SERVER_UNEXPECTEDERROR
                        });
                    break
                }
                setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad")
            })
    } else {
        Mscrm.ExternalSearch.hideProgress(pageNumber);
        HideRecordPanel(true);
        !Mscrm.ExternalSearch.$T && Mscrm.ExternalSearch.hidePanorama(window.LOCID_MEQF_MIN_CHARACTER_SEARCH);
        setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad")
    }
    Mscrm.ExternalSearch.$T = false
};
Mscrm.ExternalSearch.$Y = function($p0) {
    var $v_0 = "";
    if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0) {
        for (var $v_1 = false, $v_2 = 0; $v_2 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_2++) {
            var $v_3 = Mscrm.ExternalSearch.externalSearchFilterList[$v_2];
            if (isNullOrEmptyString($v_3.$1_0))
                if ($p0 && $v_3.$5_0) {
                    $v_1 = true;
                    $v_0 += $v_3.$8_0 + " and "
                } else if (!$p0 && !$v_3.$5_0) {
                    $v_1 = true;
                    $v_0 += $v_3.$8_0 + " and "
                }
        }
        if ($v_1) $v_0 = $v_0.substring(0, $v_0.length - 4)
    }
    return $v_0
};
Mscrm.ExternalSearch.$q = function($p0, $p1) {
    for (var $v_0 = [], $v_1 = 0; $v_1 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_1++) {
        var $v_2 = Mscrm.ExternalSearch.externalSearchFilterList[$v_1], $v_3 = false;
        if (!isNullOrEmptyString($v_2.$1_0) && ($v_2.$1_0 === "DateTime" || $v_2.$1_0 === "Slider")) {
            $v_3 = true;
            Array.add($v_0, $v_2)
        } else if (!isNullOrEmptyString($v_2.$8_0) && $p1 && $v_2.$5_0) {
            $v_3 = true;
            Array.add($v_0, $v_2)
        } else if (!isNullOrEmptyString($v_2.$8_0) && !$p1 && $v_2.$8_0.indexOf($p0) === -1) {
            $v_3 = true;
            Array.add($v_0, $v_2)
        }
        !$v_3 && Mscrm.ExternalSearch.metricsReportingForFiltersRemoved($v_2.$8_0, $v_2.$2_0, $v_2.$1_0)
    }
    Mscrm.ExternalSearch.externalSearchFilterList = $v_0
};
Mscrm.ExternalSearch.$13 = function($p0, $p1) {
    var $v_0 = JSON.parse($p0), $v_1 = new Mscrm.ExternalSearchColumnResult;
    $v_1.$H_0 = [];
    for (var $v_2 = $v_0[$p1], $v_3 = $v_2["attributeNames"], $v_5 = 0; $v_5 < $v_3.length; $v_5++) {
        var $v_6 = new Mscrm.ExternalSearchColumnRecord, $v_7 = $v_3[$v_5];
        $v_6.$3_0 = $v_7["type"].toString();
        $v_6.$4_0 = $p1 + "." + $v_7["logicalName"].toString();
        $v_6.$G_0 = $v_7["displayName"].toString();
        $v_6.$I_0 = parseInt($v_7["order"].toString());
        if ($v_7["type"].toString() === "Lookup") {
            if (!isNullOrEmptyString($v_7["LookUpOTC"].toString())) $v_6.$K_0 = $v_7["LookUpOTC"].toString();
            if (!isNullOrEmptyString($v_7["ImageColumn"].toString())) $v_6.$J_0 = $v_7["ImageColumn"].toString()
        }
        Array.add($v_1.$H_0, $v_6)
    }
    var $v_4 = Mscrm.ExternalSearch.$v;
    $v_1.$H_0.sort($v_4);
    return $v_1.$H_0
};
Mscrm.ExternalSearch.$v = function($p0, $p1) {
    var $v_0 = parseInt($p0.$I_0), $v_1 = parseInt($p1.$I_0);
    if ($v_0 < $v_1) return -1;
    else if ($v_0 > $v_1) return 1;
    return 0
};
Mscrm.ExternalSearch.$14 = function($p0, $p1, $p2) {
    var $v_0 = new RemoteCommand("CustomerService", "GetLookUpImageUrl");
    $v_0.SetParameter("Id", $p0);
    $v_0.SetParameter("entityLogicalName", $p1);
    $v_0.SetParameter("columnName", $p2 + "_url");
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else return ""
};
Mscrm.ExternalSearch.$12 = function($p0) {
    var $v_0 = new RemoteCommand("CustomerService", "GetLocalFacets");
    $v_0.SetParameter("entityName", $p0);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else return ""
};
Mscrm.ExternalSearch.getFutureAndPastDateTimeNow = function() {
    var $v_0 = Mscrm.DateTimeUtility.localDateTimeNow();
    $v_0.setHours(0);
    $v_0.setMinutes(0);
    $v_0.setSeconds(0);
    var $v_1 = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate() - 7),
        $v_2 = new Date($v_0.getFullYear(), $v_0.getMonth() - 1, $v_0.getDate()),
        $v_3 = new Date($v_0.getFullYear() - 1, $v_0.getMonth(), $v_0.getDate()),
        $v_4 = new Date($v_0.getFullYear(), $v_0.getMonth(), $v_0.getDate() + 1),
        $v_5 = "yyyy'-'MM'-'ddTHH':'mm':'ss",
        $v_6 = new Array(5);
    $v_6[0] = $v_3.format($v_5);
    $v_6[1] = $v_2.format($v_5);
    $v_6[2] = $v_1.format($v_5);
    $v_6[3] = $v_0.format($v_5);
    $v_6[4] = $v_4.format($v_5);
    return $v_6
};
Mscrm.ExternalSearch.$S = function($p0, $p1, $p2) {
    var $v_0 = [];
    $v_0 = $p0["@search.entityname"];
    var $v_1 = [];
    $v_1 = $p0["ownerid"];
    var $v_2 = [];
    $v_2 = $p0["createdon"];
    var $v_3 = [];
    $v_3 = $p0["modifiedon"];
    Mscrm.ExternalSearch.$e(true);
    if ($p1) Mscrm.ExternalSearch.$f($v_0, "#globalRecordType", "entity");
    else Mscrm.ExternalSearch.$y($p0, $p2);
    Mscrm.ExternalSearch.$f($v_1, "#globalOwnerId", "owner");
    Mscrm.ExternalSearch.$x($v_3);
    Mscrm.ExternalSearch.$w($v_2)
};
Mscrm.ExternalSearch.$x = function($p0) {
    if (Mscrm.ExternalSearch.skipBarChartColumnName !== "globalModifiedOn") {
        var $v_0 = null, $v_1 = $P_CRM("#globalModifiedOn");
        if (!IsNull($p0)) {
            var $v_2 = new Array(5), $v_3 = 0, $v_4 = 5, $v_5 = 0;
            if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
                for (var $v_6 = 0; $v_6 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_6++) {
                    var $v_7 = Mscrm.ExternalSearch.externalSearchFilterList[$v_6];
                    if (!isNullOrEmptyString($v_7.$1_0) && $v_7.$1_0 === "DateTime")
                        if ($v_7.$2_0 === "modifiedon") {
                            $v_3 = $v_7.$7_0;
                            $v_4 = $v_7.$6_0
                        }
                }
            $v_1.empty();
            for (var $v_8 = 0; $v_8 < $p0.length; $v_8++) {
                $v_0 = $p0[$v_8];
                $v_2[$v_8] = $v_0["Count"];
                if (!$v_2[$v_8]) $v_5++
            }
            if ($v_5 !== 5) {
                for (var $v_9 = null, $v_A = false, $v_C = 0;
                    $v_C < Mscrm.ExternalSearch.externalSearchDateTimeRecords.length;
                    $v_C++) {
                    var $v_D = Mscrm.ExternalSearch.externalSearchDateTimeRecords[$v_C];
                    if ($v_D.$2_0 === "ModifiedOn") {
                        $v_A = true;
                        $v_9 = $v_D.$D_0
                    }
                }
                if (!$v_A) {
                    var $v_E = new Mscrm.ExternalSearchDateTimeRecord;
                    $v_E.$2_0 = "ModifiedOn";
                    $v_E.$D_0 = $v_2;
                    Array.add(Mscrm.ExternalSearch.externalSearchDateTimeRecords, $v_E);
                    $v_9 = $v_2
                }
                $v_1.css("visibility", "visible");
                $v_1.css("display", "inline");
                var $v_B = CrmEncodeDecode
                    .CrmHtmlAttributeEncode(Xrm.Internal
                        .getResourceString("Web.SFA.Workflow.WorkflowTemplate.ModifiedOn"));
                createDateTimeControl("globalModifiedOn",
                    $v_2,
                    Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString(),
                    $v_B,
                    Mscrm.ExternalSearch.$9,
                    "ModifiedOn",
                    $v_3,
                    $v_4,
                    "true",
                    "5",
                    true,
                    true,
                    true,
                    $v_9)
            }
        }
    }
};
Mscrm.ExternalSearch.getBarChartCategories = function() {
    var $v_0 = new Array(5);
    $v_0[0] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_EarlierThanOneYear_Title");
    $v_0[1] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo_OneMonthAgo_Title");
    $v_0[2] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search__OneMonthAgo_OneWeekAgo_Title");
    $v_0[3] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_One Week Ago_Today_Title");
    $v_0[4] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Today_Title");
    return $v_0
};
Mscrm.ExternalSearch.getFutureBarChartCategories = function() {
    var $v_0 = new Array(6);
    $v_0[0] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_EarlierThanOneYear_Title");
    $v_0[1] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo_OneMonthAgo_Title");
    $v_0[2] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search__OneMonthAgo_OneWeekAgo_Title");
    $v_0[3] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_One Week Ago_Today_Title");
    $v_0[4] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Today_Title") +
        " - " +
        Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Future_Title");
    $v_0[5] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Future_Title");
    return $v_0
};
Mscrm.ExternalSearch.getBarChartTextToDisplay = function() {
    var $v_0 = new Array(5);
    $v_0[0] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo");
    $v_0[1] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneMonthAgo");
    $v_0[2] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneWeekAgo");
    $v_0[3] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Today_Title");
    $v_0[4] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All");
    return $v_0
};
Mscrm.ExternalSearch.getFutureBarChartTextToDisplay = function() {
    var $v_0 = new Array(6);
    $v_0[0] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo");
    $v_0[1] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneMonthAgo");
    $v_0[2] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneWeekAgo");
    $v_0[3] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Today_Title");
    $v_0[4] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Future_Title");
    $v_0[5] = Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All");
    return $v_0
};
Mscrm.ExternalSearch.getBarChartStartTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo")
};
Mscrm.ExternalSearch.getBarChartEndTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Today_Title")
};
Mscrm.ExternalSearch.getBarChartBeforeTodayTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ThroughToday_Title")
};
Mscrm.ExternalSearch.getBarChartAllTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All")
};
Mscrm.ExternalSearch.getFutureBarChartStartTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_OneYearAgo")
};
Mscrm.ExternalSearch.getFutureBarChartEndTextToDisplay = function() {
    return Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_Future_Title")
};
Mscrm.ExternalSearch.getAttachmentsLabelTextToDisplay = function() {
    return Xrm.Internal.getResourceString("KMControl.SearchKMArticles.AttachmentIconToolTip")
};
Mscrm.ExternalSearch.getAttachmentShowMoreTextToDisplay = function() {
    return Xrm.Internal.getResourceString("Tag_Filter_Show_More")
};
Mscrm.ExternalSearch.getAttachmentShowLessTextToDisplay = function() {
    return Xrm.Internal.getResourceString("Tag_Filter_Show_Less")
};
Mscrm.ExternalSearch.getEntityDisplayName = function(entityName) {
    return Xrm.Internal.getEntityLocalizedSetName(entityName)
};
Mscrm.ExternalSearch.getEntityTypeCode = function(entityName) { return Xrm.Internal.getEntityCode(entityName) };
Mscrm.ExternalSearch.$w = function($p0) {
    if (Mscrm.ExternalSearch.skipBarChartColumnName !== "globalCreatedOn") {
        var $v_0 = null, $v_1 = $P_CRM("#globalCreatedOn");
        if (!IsNull($p0)) {
            var $v_2 = 0, $v_3 = 5, $v_4 = 0;
            if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
                for (var $v_6 = 0; $v_6 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_6++) {
                    var $v_7 = Mscrm.ExternalSearch.externalSearchFilterList[$v_6];
                    if (!isNullOrEmptyString($v_7.$1_0) && $v_7.$1_0 === "DateTime")
                        if ($v_7.$2_0 === "createdon") {
                            $v_2 = $v_7.$7_0;
                            $v_3 = $v_7.$6_0
                        }
                }
            var $v_5 = new Array(5);
            $v_1.empty();
            for (var $v_8 = 0; $v_8 < $p0.length; $v_8++) {
                $v_0 = $p0[$v_8];
                $v_5[$v_8] = $v_0["Count"];
                if (!$v_5[$v_8]) $v_4++
            }
            if ($v_4 !== 5) {
                for (var $v_9 = null, $v_A = false, $v_C = 0;
                    $v_C < Mscrm.ExternalSearch.externalSearchDateTimeRecords.length;
                    $v_C++) {
                    var $v_D = Mscrm.ExternalSearch.externalSearchDateTimeRecords[$v_C];
                    if ($v_D.$2_0 === "CreatedOn") {
                        $v_A = true;
                        $v_9 = $v_D.$D_0
                    }
                }
                if (!$v_A) {
                    var $v_E = new Mscrm.ExternalSearchDateTimeRecord;
                    $v_E.$2_0 = "CreatedOn";
                    $v_E.$D_0 = $v_5;
                    $v_9 = $v_5;
                    Array.add(Mscrm.ExternalSearch.externalSearchDateTimeRecords, $v_E)
                }
                $v_1.css("visibility", "visible");
                $v_1.css("display", "inline");
                var $v_B = CrmEncodeDecode
                    .CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("Web.Reports.CreatedOn"));
                createDateTimeControl("globalCreatedOn",
                    $v_5,
                    Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString(),
                    $v_B,
                    Mscrm.ExternalSearch.$9,
                    "CreatedOn",
                    $v_2,
                    $v_3,
                    "true",
                    "6",
                    true,
                    true,
                    true,
                    $v_9)
            }
        }
    }
};
Mscrm.ExternalSearch.$e = function($p0) {
    var $v_0 = $P_CRM("#RecordTypeEntityTitleDisplay");
    $v_0.css("visibility", "visible");
    var $v_1 = $P_CRM("#ownerNameTitleDisplay");
    $v_1.css("visibility", "visible");
    var $v_2 = $P_CRM("#globalRecordType"), $v_3 = $P_CRM("#recordType");
    if ($p0) {
        $v_3.css("visibility", "hidden");
        $v_3.css("display", "none");
        $v_2.css("visibility", "visible");
        $v_2.css("display", "inline")
    } else {
        $v_2.css("visibility", "hidden");
        $v_2.css("display", "none");
        $v_3.css("visibility", "visible");
        $v_3.css("display", "inline")
    }
};
Mscrm.ExternalSearch.$f = function($p0, $p1, $p2) {
    if (!IsNull($p0)) {
        var $v_0 = null, $v_1 = "";
        $v_1 += "<ul id='recordUL'>";
        var $v_2 = $p0.length, $v_3 = $P_CRM($p1);
        $v_3.empty();
        var $v_4 = $P_CRM("#ownerNameTitleDisplay");
        $v_4.css("display", "none");
        $v_4.css("visibility", "hidden");
        for (var $v_5 = false, $v_8 = 0; $v_8 < $v_2; $v_8++) {
            $v_0 = $p0[$v_8];
            if (!IsNull($v_0)) {
                var $v_9 = "";
                if ($p2 === "entity") {
                    var $v_A = $P_CRM("#RecordTypeEntityTitleDisplay");
                    $v_A.css("display", "inline");
                    $v_A.css("visibility", "visible");
                    var $v_B = String.format("onclick = 'return record_onclick({0})'",
                            CrmEncodeDecode
                            .CrmHtmlAttributeEncode(Xrm.Internal.getEntityCode($v_0["Value"]).toString())),
                        $v_C = Xrm.Internal.getEntityLocalizedSetName($v_0["Value"]);
                    $v_9 = String
                        .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", $v_0["Value"], $v_B, CrmEncodeDecode.CrmHtmlAttributeEncode($v_C), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), " ", CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.ExternalSearch.entityTypeImage(Xrm.Internal.getEntityCode($v_0["Value"]))), CrmEncodeDecode.CrmHtmlAttributeEncode($v_C), "")
                } else {
                    var $v_D = $v_0["OptionalValue"],
                        $v_E = $v_0["Value"],
                        $v_F = Mscrm.CrmUri.create("/_imgs/ico_16_8.gif").toString(),
                        $v_G = "",
                        $v_H = Mscrm.ExternalSearch.getOwnerDisplayImage($v_E);
                    if (!isNullOrEmptyString($v_H) && $v_H.toString().startsWith("/Image")
                    ) $v_F = Mscrm.CrmUri.create($v_H).toString();
                    $v_4.css("display", "inline-block");
                    $v_4.css("visibility", "visible");
                    if (Mscrm.ExternalSearch.$Z($v_E, true)) {
                        $v_G = "style = 'color:#0072C6; font-weight: 500;'";
                        if (!$v_5) {
                            var $v_I = "onclick=reset_onclick('ownerid','" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.ExternalSearch.$9.toString()) +
                                "')";
                            $v_1 += String.format("<li id='{0}' class='allrecords'><a href='#' {1}>{2}</a></li>",
                                CrmEncodeDecode.CrmHtmlAttributeEncode("all_Ownerid"),
                                $v_I,
                                CrmEncodeDecode
                                .CrmHtmlAttributeEncode(Xrm.Internal
                                    .getResourceString("ExternalSearch_Relevance_Search_All")));
                            $v_5 = true
                        }
                    } else $v_G = "onclick=ownerName_onclick('" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_E) + "')";
                    $v_9 = String
                        .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_E), $v_G, CrmEncodeDecode.CrmHtmlAttributeEncode($v_D), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), "", $v_F, CrmEncodeDecode.CrmHtmlAttributeEncode($v_D), "")
                }
                if ($v_8 < 4) $v_1 += $v_9;
                else if ($v_8 === 4) {
                    var $v_J = "onclick=show_more('" + $p2 + "')";
                    $v_1 += String
                        .format("<li id='showMore{1}'  class='showmore_lessfacet'><a href='#' id ='RTSM{1}' role='link' aria-label='Show More Records' style='color:#0b0080; font-weight: 400;' {2}>{0}</a></li>", CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowMore")), $p2, $v_J);
                    $v_1 += "</ ul >";
                    $v_1 += "<ul id='morerecordUL" + $p2 + "'  style='display:none'>";
                    $v_1 += $v_9
                } else if ($v_8 < 10) $v_1 += $v_9
            }
        }
        if ($v_2 > 10)
            $v_1 += " <div class='ui-widget'><input id='autompleteRecordType" +
                $p2 +
                "'  role='combobox' aria-autocomplete='list' aria-haspopup='true' aria-expanded='true' aria-controls='sw_as" +
                $p2 +
                "' aria-owns='sw_as" +
                $p2 +
                "' aria-activedescendant='ui-active-menuitem'><div id='sw_as" +
                $p2 +
                "' aria-live='polite' aria-relevant='all' aria-atomic='true' role='listbox' aria-label='Suggestions' ></div></div>";
        var $v_6 = "onclick=show_less('" + $p2 + "')";
        $v_1 += String
            .format("<li id='showLess{1}' class='showmore_lessfacet' style='display:none;'><a href='#' role='link' aria-label='Show Fewer Records'  id ='RTSF{1}' style='color:#0b0080; font-weight: 400;' {2}>{0}</a></li>", CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowFewer")), $p2, $v_6);
        $v_1 += "</ ul >";
        if (!$v_2) {
            $v_1 = "";
            if ($p1 === "#globalOwnerId") {
                var $v_K = $P_CRM("#ownerfacet");
                $v_K.css("display", "none")
            }
        }
        var $v_7 = $P_CRM($v_1);
        $v_3.prepend($v_7)
    }
};
Mscrm.ExternalSearch.$Z = function($p0, $p1) {
    if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
        for (var $v_0 = 0; $v_0 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_0++) {
            var $v_1 = Mscrm.ExternalSearch.externalSearchFilterList[$v_0];
            if (!isNullOrEmptyString($v_1
                    .$8_0) &&
                ($v_1
                    .$1_0 !==
                    "DateTime" ||
                    $v_1.$1_0 !== "Slider")) if ($v_1.$8_0.indexOf($p0) > -1 && $v_1.$5_0 === $p1) return true
        }
    return false
};
Mscrm.ExternalSearch.$y = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = null, $v_1 = [];
        $v_1 = $p0["@search.entityname"];
        Mscrm.ExternalSearch.$1E();
        var $v_2 = "", $v_3 = 1;
        if (Mscrm.ExternalSearch.isCheckBoxChecked()) $v_2 = "checked='checked'";
        var $v_4 = $P_CRM("#entityType");
        $v_4.empty();
        Mscrm.ExternalSearch.$e(false);
        var $v_5 = Mscrm.ExternalSearch.$9, $v_6 = "";
        $v_6 += "<div><ul id='recordUL'>";
        $v_6 += String
            .format("<li id='{0}' ><span class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover'></span>  <a href='#'  class='allrecords' onclick='return record_onclick({1})'>{2}</a></li>", CrmEncodeDecode.CrmHtmlAttributeEncode("allRecords"), CrmEncodeDecode.CrmHtmlAttributeEncode("0"), CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All")));
        for (var $v_7 = false, $v_8 = 0; $v_8 < $v_1.length; $v_8++) {
            $v_0 = $v_1[$v_8];
            var $v_9 = Xrm.Internal.getEntityCode($v_0["Value"]);
            if ($v_5 === $v_9 && !IsNull($v_0)) {
                var $v_A = "",
                    $v_B = Xrm.Internal.getEntityLocalizedSetName($v_0["Value"]),
                    $v_C = "style='color:#0072C6; font-weight: 500;'";
                $v_6 += String
                    .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Value"].toString()), $v_A, CrmEncodeDecode.CrmHtmlAttributeEncode($v_B), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), CrmEncodeDecode.CrmHtmlEncode("style='color:#87CEEB'"), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.ExternalSearch.entityTypeImage($v_5)), CrmEncodeDecode.CrmHtmlAttributeEncode($v_B), $v_C, "");
                $v_6 += String
                    .format("<li id='checkBoxContainer'><label><input style='margin-top : 1px;' type = 'checkbox' aria-label='{3}' id='searchCheckBox' class='includeActivitiesAndNotes' name='includeActivitiesAndNotes' {0} runat='server' onclick='return onCheckBoxClick({1});'>{2}</label></li>", $v_2, CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getEntityCode($v_0["Value"]).toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_RelatedNotes")), CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_RelatedNotes")));
                $v_7 = true
            }
        }
        if (!$v_7) {
            for (var $v_D = 0, $v_I = 0; $v_I < $v_1.length; $v_I++) {
                $v_0 = $v_1[$v_I];
                $v_D += $v_0["Count"]
            }
            $v_0 = $v_1[0];
            var $v_E = "",
                $v_F = Xrm.Internal.getEntityName($v_5),
                $v_G = Xrm.Internal.getEntityLocalizedSetName($v_F),
                $v_H = "style='color:#0072C6; font-weight: 500;'";
            $v_6 += String
                .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_F), $v_E, CrmEncodeDecode.CrmHtmlAttributeEncode($v_G), CrmEncodeDecode.CrmHtmlAttributeEncode($v_D.toLocaleString()), CrmEncodeDecode.CrmHtmlEncode("style='color:#87CEEB'"), CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.ExternalSearch.entityTypeImage($v_5)), CrmEncodeDecode.CrmHtmlAttributeEncode($v_G), $v_H, "");
            $v_6 += String
                .format("<li id='checkBoxContainer'><label><input style='margin-top : 1px;' type = 'checkbox' aria-label='{3}' id='searchCheckBox' class='includeActivitiesAndNotes' name='includeActivitiesAndNotes' {0} runat='server' onclick='return onCheckBoxClick({1});'>{2}</label></li>", $v_2, CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getEntityCode($v_F).toString()), CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_RelatedNotes")), CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_RelatedNotes")))
        }
        $v_6 += "</ ul ></div>";
        $v_4.append($v_6);
        Mscrm.ExternalSearch.$Q = true;
        Mscrm.ExternalSearch.showHideCheckBox();
        if ($p1.length > 0)
            for (var $v_J = 0; $v_J < $p1.length; $v_J++) {
                $v_6 = "";
                var $v_K = $p1[$v_J];
                if ($v_K.$3_0 === "Lookup" || $v_K.$3_0 === "Picklist" || $v_K.$3_0 === "Customer") {
                    var $v_L = [];
                    $v_L = $p0[$v_K.$4_0];
                    if (!IsNull($v_L)) {
                        var $v_M = $v_L.length;
                        if ($v_M > 0) {
                            var $v_N = $P_CRM("#datetime" + $v_3);
                            $v_N.empty();
                            var $v_O = $v_K.$4_0.split("."), $v_P = $v_K.$G_0;
                            $v_6 += String
                                .format("<div class='facetsname_RecordOwnerCreatedModified'><span id = '{0}'>{1}</ span ></div>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1] + "_span"), CrmEncodeDecode.CrmHtmlAttributeEncode($v_P), CrmEncodeDecode.CrmHtmlAttributeEncode($v_P));
                            $v_6 += "<div><ul id='" + CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) + "'>";
                            for (var $v_Q = false,
                                $v_R = false,
                                $v_S = "style='padding-left: 0px; width: 134px;'",
                                $v_V = 0;
                                $v_V < $v_M;
                                $v_V++) {
                                var $v_W = Mscrm.CrmUri.create("/_imgs/ico_16_8.gif").toString();
                                $v_0 = $v_L[$v_V];
                                if (!IsNull($v_0)) {
                                    var $v_X = "", $v_Y = "'Display:none'";
                                    if ($v_K.$3_0 === "Lookup" || $v_K.$3_0 === "Customer") {
                                        var $v_Z = $v_0["OptionalValue"],
                                            $v_a = $v_0["Value"],
                                            $v_b = $v_0["Value"],
                                            $v_c = "";
                                        if ($v_K.$3_0 === "Lookup") {
                                            $v_Y = "'visibility:visible'";
                                            if (!isNullOrEmptyString($v_K.$K_0) && !isNullOrEmptyString($v_K.$J_0)) {
                                                var $v_d = Mscrm.ExternalSearch
                                                    .$14($v_a,
                                                        Xrm.Internal.getEntityName(parseInt($v_K.$K_0)),
                                                        $v_K.$J_0);
                                                if (!isNullOrEmptyString($v_d) && $v_d.toString().startsWith("/Image")
                                                ) $v_W = Mscrm.CrmUri.create($v_d).toString()
                                            }
                                        }
                                        if (Mscrm.ExternalSearch.$Z($v_b, false)) {
                                            $v_c = "style='color:#0072C6; font-weight: 500;'";
                                            if (!$v_Q) {
                                                var $v_e = "onclick=reset_onclick('" +
                                                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_b) +
                                                    "','" +
                                                    CrmEncodeDecode
                                                    .CrmHtmlAttributeEncode(Mscrm.ExternalSearch.$9.toString()) +
                                                    "')";
                                                $v_6 += String
                                                    .format("<li id='{0}' class='allrecords'><a href='#' {1}>{2}</a></li>", CrmEncodeDecode.CrmHtmlAttributeEncode("all_Lookup"), $v_e, CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All")));
                                                $v_Q = true
                                            }
                                        } else
                                            $v_c = "onclick=lookup_onclick('" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_b) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.toString()) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','Lookup')";
                                        if ($v_K
                                            .$3_0 ===
                                            "Lookup")
                                            $v_X = String
                                                .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_a), $v_c, CrmEncodeDecode.CrmHtmlEncode($v_Z), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), "", $v_W, CrmEncodeDecode.CrmHtmlAttributeEncode($v_Z), $v_Y, "");
                                        else
                                            $v_X = String
                                                .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_a), $v_c, CrmEncodeDecode.CrmHtmlEncode($v_Z), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), "", "", CrmEncodeDecode.CrmHtmlAttributeEncode($v_Z), $v_Y, $v_S)
                                    } else if ($v_K.$3_0 === "Picklist") {
                                        var $v_f = Mscrm.ExternalSearch
                                                .getOptionDisplayName($v_5, $v_O[1], $v_0["Value"]),
                                            $v_g = "";
                                        if (Mscrm.ExternalSearch.$Z($v_O[1], false)) {
                                            $v_g = "style='color:#0072C6; font-weight: 500;'";
                                            if (!$v_R) {
                                                var $v_h = "onclick=reset_onclick('" +
                                                    CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                    "','" +
                                                    CrmEncodeDecode
                                                    .CrmHtmlAttributeEncode(Mscrm.ExternalSearch.$9.toString()) +
                                                    "')";
                                                $v_6 += String
                                                    .format("<li id='{0}' class='allrecords'><a href='#' {1}>{2}</a></li>", CrmEncodeDecode.CrmHtmlAttributeEncode("all_PickList"), $v_h, CrmEncodeDecode.CrmHtmlAttributeEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_All")));
                                                $v_R = true
                                            }
                                        } else
                                            $v_g = "onclick=lookup_onclick('" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Value"]) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.toString()) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','Picklist')";
                                        $v_X = String
                                            .format("<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>", CrmEncodeDecode.CrmHtmlAttributeEncode("Picklist_" + $v_f), $v_g, CrmEncodeDecode.CrmHtmlEncode($v_f), CrmEncodeDecode.CrmHtmlAttributeEncode($v_0["Count"].toLocaleString()), "", "", CrmEncodeDecode.CrmHtmlAttributeEncode($v_f), $v_Y, $v_S)
                                    }
                                    if ($v_V < 4) $v_6 += $v_X;
                                    else if ($v_V === 4) {
                                        var $v_i = "";
                                        if ($v_K
                                            .$3_0 ===
                                            "Lookup" ||
                                            $v_K
                                            .$3_0 ===
                                            "Customer")
                                            $v_i = "id='RTSF" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                                "' onclick=show_morerecord('" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.toString()) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','Lookup')";
                                        else if ($v_K
                                            .$3_0 ===
                                            "Picklist")
                                            $v_i = "id='RTSF" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                                "' onclick=show_morerecord('" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_5.toString()) +
                                                "','" +
                                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                                "','Picklist')";
                                        $v_6 += String
                                            .format("<li id='{0}'   class='showmore_lessfacet'><a href='#' style='color:#0b0080; role='link' font-weight: 400;' aria-label='Show More Records' {1} >{2}</a></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1] + "_showMore"), $v_i, CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowMore")), CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowMore")));
                                        $v_6 += "</ ul >";
                                        $v_6 += "<ul id='" +
                                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                            "' style='display:none'>";
                                        $v_6 += $v_X
                                    } else if ($v_V < 10) $v_6 += $v_X
                                }
                            }
                            if ($v_M > 10)
                                $v_6 += " <div class='ui-widget'><input id='autompleteRecordType_" +
                                    $v_O[1] +
                                    "'  role='combobox' aria-autocomplete='list' aria-haspopup='true' aria-expanded='true' aria-controls='sw_as_" +
                                    $v_O[1] +
                                    "'  aria-owns='sw_as_" +
                                    $v_O[1] +
                                    "'  aria-activedescendant='ui-active-menuitem'><div id='sw_as_" +
                                    $v_O[1] +
                                    "'  aria-live='polite' aria-relevant='all' aria-atomic='true' role='listbox' aria-label='Suggestions' ></div></div>";
                            var $v_T = "id='RTSM" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                "' onclick=show_lessrecord('" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_K.$4_0) +
                                "','" +
                                CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1]) +
                                "')";
                            $v_6 += String
                                .format("<li id='{0}'  class='showmore_lessfacet' style='display:none'><a href='#' style='color:#0b0080; role='link' font-weight: 400;' aria-label='Show Fewer Records' {1}>{2}</a></li>", CrmEncodeDecode.CrmHtmlAttributeEncode($v_O[1] + "_showLess"), $v_T, CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowFewer")), CrmEncodeDecode.CrmHtmlEncode(Xrm.Internal.getResourceString("ExternalSearch_Relevance_Search_ShowFewer")));
                            $v_6 += "</ ul ></div>";
                            var $v_U = $P_CRM($v_6);
                            $v_N.css("visibility", "visible");
                            $v_N.css("display", "inline");
                            $v_N.append($v_U);
                            $v_3++
                        }
                    }
                } else if ($v_K.$3_0 === "DateTime") {
                    var $v_j = [];
                    $v_j = $p0[$v_K.$4_0];
                    if (!IsNull($v_j)) {
                        var $v_k = $v_j.length;
                        if ($v_k > 0) {
                            var $v_l = $P_CRM("#datetime" + $v_3);
                            if (Mscrm.ExternalSearch.skipBarChartColumnName !== "datetime" + $v_3) {
                                var $v_m = $v_K.$4_0.split("."),
                                    $v_n = $v_K.$G_0,
                                    $v_o = new Array(6),
                                    $v_p = 0,
                                    $v_q = 6;
                                $v_l.empty();
                                if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
                                    for (var $v_s = 0;
                                        $v_s < Mscrm.ExternalSearch.externalSearchFilterList.length;
                                        $v_s++) {
                                        var $v_t = Mscrm.ExternalSearch.externalSearchFilterList[$v_s];
                                        if (!isNullOrEmptyString($v_t.$1_0) && $v_t.$1_0 === "DateTime")
                                            if ($v_t.$2_0 === $v_m[1]) {
                                                $v_p = $v_t.$7_0;
                                                $v_q = $v_t.$6_0
                                            }
                                    }
                                for (var $v_r = 0, $v_u = 0; $v_u < $v_k; $v_u++) {
                                    $v_0 = $v_j[$v_u];
                                    if (!IsNull($v_0)) {
                                        $v_o[$v_u] = $v_0["Count"];
                                        if (!$v_o[$v_u]) $v_r++
                                    }
                                }
                                if ($v_r !== 6) {
                                    for (var $v_v = null, $v_w = false, $v_x = 0;
                                        $v_x < Mscrm.ExternalSearch.externalSearchDateTimeRecords.length;
                                        $v_x++) {
                                        var $v_y = Mscrm.ExternalSearch.externalSearchDateTimeRecords[$v_x];
                                        if ($v_y.$2_0 === $v_m[1].toString()) {
                                            $v_w = true;
                                            $v_v = $v_y.$D_0
                                        }
                                    }
                                    if (!$v_w) {
                                        var $v_z = new Mscrm.ExternalSearchDateTimeRecord;
                                        $v_z.$2_0 = $v_m[1].toString();
                                        $v_z.$D_0 = $v_o;
                                        $v_v = $v_o;
                                        Array.add(Mscrm.ExternalSearch.externalSearchDateTimeRecords, $v_z)
                                    }
                                    $v_l.css("visibility", "visible");
                                    $v_l.css("display", "inline");
                                    createFutureDateTimeControl("datetime" + $v_3,
                                        $v_o,
                                        Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString(),
                                        $v_n,
                                        Mscrm.ExternalSearch.$9,
                                        $v_m[1],
                                        $v_p,
                                        $v_q,
                                        "true",
                                        $v_3.toString(),
                                        true,
                                        true,
                                        true,
                                        $v_v)
                                }
                            } else {
                                $v_l.css("visibility", "visible");
                                $v_l.css("display", "inline")
                            }
                            $v_3++
                        }
                    }
                } else if ($v_K.$3_0 === "Money" || $v_K.$3_0 === "Integer" || $v_K.$3_0 === "Decimal") {
                    var $v_10 = [];
                    $v_10 = $p0[$v_K.$4_0];
                    if (!IsNull($v_10)) {
                        var $v_11 = $v_10.length;
                        if ($v_11 > 0) {
                            var $v_12 = $v_K.$4_0.split("."), $v_13 = $v_K.$G_0, $v_14 = $P_CRM("#datetime" + $v_3);
                            $v_14.empty();
                            for (var $v_15 = 0, $v_16 = 0, $v_17 = false, $v_18 = 0;
                                $v_18 < Mscrm.ExternalSearch.externalSearchFilterList.length;
                                $v_18++) {
                                var $v_19 = Mscrm.ExternalSearch.externalSearchFilterList[$v_18];
                                if (!isNullOrEmptyString($v_19.$1_0) && $v_19.$1_0 === "Slider")
                                    if ($v_19.$2_0 === $v_12[1]) {
                                        $v_15 = $v_19.$7_0;
                                        $v_16 = $v_19.$6_0;
                                        $v_17 = true
                                    }
                            }
                            if (!$v_17 && $v_11 > 0) {
                                var $v_1A = 0, $v_1B = 0;
                                if ($v_11 === 1) {
                                    var $v_1H = $v_10[0];
                                    $v_1A = parseInt($v_1H["Value"]);
                                    $v_1B = $v_1A + 100
                                } else {
                                    var $v_1I = $v_10[0];
                                    $v_1A = parseInt($v_1I["Value"]);
                                    var $v_1J = $v_10[$v_11 - 1];
                                    $v_1B = parseInt($v_1J["Value"]);
                                    $v_1B = $v_1B + 100
                                }
                                var $v_1C = $v_1B - $v_1A, $v_1D = 0;
                                if ($v_1C > 10) {
                                    $v_1C = parseInt($v_1C / 10);
                                    $v_1D = 11
                                } else {
                                    $v_1D = $v_1C + 1;
                                    $v_1C = 1
                                }
                                $v_15 = $v_1A;
                                $v_16 = $v_1B;
                                for (var $v_1E = new Array($v_1D), $v_1F = new Array($v_1D), $v_1K = 0;
                                    $v_1K < $v_1D;
                                    $v_1K++) {
                                    if (!$v_1K) $v_1E[$v_1K] = $v_1A;
                                    else if ($v_1K === $v_1D - 1) $v_1E[$v_1K] = $v_1B;
                                    else $v_1E[$v_1K] = parseInt($v_1C + $v_1E[$v_1K - 1]);
                                    if ($v_K
                                        .$3_0 ===
                                        "Money")
                                        $v_1F[$v_1K] = Sys.CultureInfo.CurrentCulture.numberFormat["CurrencySymbol"]
                                            .toString() +
                                            $v_1E[$v_1K].toLocaleString();
                                    else $v_1F[$v_1K] = $v_1E[$v_1K].toLocaleString()
                                }
                                var $v_1G = new Mscrm.ExternalSearchFilterRecord;
                                $v_1G.$7_0 = $v_1A;
                                $v_1G.$6_0 = $v_1B;
                                $v_1G.$M_0 = $v_1A;
                                $v_1G.$L_0 = $v_1B;
                                $v_1G.$2_0 = $v_12[1];
                                $v_1G.$C_0 = $v_1E;
                                $v_1G.$O_0 = $v_1F;
                                $v_1G.$1_0 = "Slider";
                                $v_1G.$N_0 = Mscrm.ExternalSearch.$9;
                                Array.add(Mscrm.ExternalSearch.externalSearchFilterList, $v_1G);
                                $v_14.css("visibility", "visible");
                                $v_14.css("display", "inline");
                                createSliderControl("datetime" + $v_3,
                                    $v_1E,
                                    Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString(),
                                    $v_13,
                                    Mscrm.ExternalSearch.$9,
                                    $v_12[1],
                                    $v_15,
                                    $v_16,
                                    $v_3.toString(),
                                    $v_1E,
                                    $v_1F)
                            } else if ($v_17) {
                                for (var $v_1L = null, $v_1M = null, $v_1N = 0;
                                    $v_1N < Mscrm.ExternalSearch.externalSearchFilterList.length;
                                    $v_1N++) {
                                    var $v_1O = Mscrm.ExternalSearch.externalSearchFilterList[$v_1N];
                                    if (!isNullOrEmptyString($v_1O.$1_0) && $v_1O.$1_0 === "Slider")
                                        if ($v_1O.$2_0 === $v_12[1] && !IsNull($v_1O.$C_0) && $v_1O.$C_0.length > 0) {
                                            $v_1L = $v_1O.$C_0;
                                            $v_1M = $v_1O.$O_0
                                        }
                                }
                                $v_14.css("visibility", "visible");
                                $v_14.css("display", "inline");
                                createSliderControl("datetime" + $v_3,
                                    $v_1L,
                                    Microsoft.Crm.Client.Core.Framework.Guid.newGuid().toString(),
                                    $v_13,
                                    Mscrm.ExternalSearch.$9,
                                    $v_12[1],
                                    $v_15,
                                    $v_16,
                                    $v_3.toString(),
                                    $v_1L,
                                    $v_1M)
                            }
                            $v_3++
                        }
                    }
                }
            }
    }
};
Mscrm.ExternalSearch.$1E = function() {
    for (var $v_0 = 1; $v_0 < 5; $v_0++)
        if (Mscrm.ExternalSearch.skipBarChartColumnName !== "datetime" + $v_0) {
            var $v_1 = $P_CRM("#datetime" + $v_0);
            $v_1.empty();
            $v_1.css("visibility", "hidden")
        }
};
Mscrm.ExternalSearch.$18 = function($p0) {
    if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
        for (var $v_0 = 0; $v_0 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_0++) {
            var $v_1 = Mscrm.ExternalSearch.externalSearchFilterList[$v_0];
            if (!isNullOrEmptyString($v_1.$1_0) && $v_1.$1_0 === "DateTime") if ($v_1.$2_0 === $p0) return true
        }
    return false
};
Mscrm.ExternalSearch.$b = function($p0) {
    var $v_0 = [];
    if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
        for (var $v_1 = 0; $v_1 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_1++) {
            var $v_2 = Mscrm.ExternalSearch.externalSearchFilterList[$v_1];
            if (isNullOrEmptyString($v_2.$1_0) || $v_2.$2_0 !== $p0) Array.add($v_0, $v_2);
            else
                $v_2.$2_0 === $p0 &&
                    Mscrm.ExternalSearch.metricsReportingForFiltersRemoved($v_2.$8_0, $v_2.$2_0, $v_2.$1_0)
        }
    Mscrm.ExternalSearch.externalSearchFilterList = $v_0
};
Mscrm.ExternalSearch.$1C = function($p0) {
    var $v_0 = [];
    if (Mscrm.ExternalSearch.externalSearchFilterList.length > 0)
        for (var $v_1 = 0; $v_1 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_1++) {
            var $v_2 = Mscrm.ExternalSearch.externalSearchFilterList[$v_1];
            if (isNullOrEmptyString($v_2.$1_0) || $v_2.$2_0 !== $p0.$2_0)
                if (!IsNull($v_2.$C_0) && $v_2.$7_0 === $v_2.$M_0 && $v_2.$6_0 === $v_2.$L_0) continue;
                else Array.add($v_0, $v_2);
            else if (!isNullOrEmptyString($v_2.$1_0) && $v_2.$2_0 === $p0.$2_0 && !IsNull($v_2.$C_0)) {
                $v_2.$7_0 = $p0.$7_0;
                $v_2.$6_0 = $p0.$6_0;
                Array.add($v_0, $v_2)
            }
        }
    Mscrm.ExternalSearch.externalSearchFilterList = $v_0
};
Mscrm.ExternalSearch.filterDatetimeFieldsData = function(recieveBarResponseData) {
    var $v_0 = recieveBarResponseData[0], $v_1 = recieveBarResponseData[1];
    Mscrm.ExternalSearch.$18($v_0[1].toString().toLowerCase()) &&
        Mscrm.ExternalSearch.$b($v_0[1].toString().toLowerCase());
    var $v_2 = $v_0[0], $v_3 = new Mscrm.ExternalSearchFilterRecord;
    $v_3.$2_0 = $v_0[1].toString().toLowerCase();
    $v_3.$7_0 = parseInt($v_1[0].toString());
    $v_3.$6_0 = parseInt($v_1[1].toString());
    $v_3.$N_0 = $v_2;
    var $v_4 = $v_0[2];
    $v_3.$1_0 = $v_4 ? "DateTime" : "Slider";
    if ($v_0[1].toString()
        .toLowerCase() ===
        "modifiedon" ||
        $v_0[1].toString().toLowerCase() === "createdon") $v_3.$5_0 = true;
    else $v_3.$5_0 = false;
    if ($v_3.$1_0 === "Slider") {
        Mscrm.ExternalSearch.$1C($v_3);
        Mscrm.ExternalSearch.executeRecordSearchSdkCall(20, 0, $v_2, "", false, "Slider")
    } else {
        Mscrm.ExternalSearch.skipBarChartColumnName = $v_0[4].toString();
        Array.add(Mscrm.ExternalSearch.externalSearchFilterList, $v_3);
        Mscrm.ExternalSearch.executeRecordSearchSdkCall(20, 0, $v_2, "", false, "DateTime")
    }
};
Mscrm.ExternalSearch.$X = function($p0) {
    for (var $v_0 = "", $v_1 = [], $v_2 = 0; $v_2 < Mscrm.ExternalSearch.externalSearchFilterList.length; $v_2++) {
        var $v_3 = Mscrm.ExternalSearch.externalSearchFilterList[$v_2];
        if (!isNullOrEmptyString($v_3.$1_0) && ($v_3.$1_0 === "DateTime" || $v_3.$1_0 === "Slider"))
            if (!$p0 && !$v_3.$5_0) Array.add($v_1, $v_3);
            else $p0 && $v_3.$5_0 && Array.add($v_1, $v_3)
    }
    for (var $v_4 = 0; $v_4 < $v_1.length; $v_4++) {
        var $v_5 = $v_1[$v_4];
        if (!isNullOrEmptyString($v_5.$1_0) && ($v_5.$1_0 === "DateTime" || $v_5.$1_0 === "Slider")) {
            var $v_6 = $v_5.$7_0, $v_7 = $v_5.$6_0, $v_8 = "", $v_9 = "";
            !$v_6 && $v_7 === 5 && $v_5.$5_0 && $v_5.$1_0 === "DateTime" && Mscrm.ExternalSearch.$b($v_5.$2_0);
            !$v_6 && $v_7 === 6 && !$v_5.$5_0 && $v_5.$1_0 === "DateTime" && Mscrm.ExternalSearch.$b($v_5.$2_0);
            if ($v_5.$1_0 === "DateTime") {
                if ($v_6) {
                    $v_8 = Mscrm.ExternalSearch.getDateTimeInterval($v_6, false);
                    $v_0 += $v_5.$2_0 + " " + $v_8 + " and "
                }
                if ($v_5.$5_0 && $v_7 !== 5 || !$v_5.$5_0 && $v_7 !== 6) {
                    $v_9 = Mscrm.ExternalSearch.getDateTimeInterval($v_7, true);
                    $v_0 += $v_5.$2_0 + " " + $v_9 + " and "
                }
                Mscrm.ExternalSearch
                    .metricsReportingForFiltersAdded($v_0.substring(0, $v_0.length - 4), $v_5.$2_0, "DateTime")
            } else {
                if ($v_5.$M_0 !== $v_5.$7_0) $v_0 += $v_5.$2_0 + " ge " + $v_5.$7_0 + " and ";
                if ($v_5.$L_0 !== $v_5.$6_0) $v_0 += $v_5.$2_0 + " le " + $v_5.$6_0 + " and ";
                Mscrm.ExternalSearch
                    .metricsReportingForFiltersAdded($v_0.substring(0, $v_0.length - 4), $v_5.$2_0, "Slider")
            }
        }
    }
    $v_0 = $v_0.substring(0, $v_0.length - 4);
    return $v_0
};
Mscrm.ExternalSearch.getDateTimeInterval = function(startsliderIndex, start) {
    var $v_0 = Mscrm.ExternalSearch.getFutureAndPastDateTimeNow(), $v_1 = "";
    if (start)
        switch (startsliderIndex) {
        case 1:
            $v_1 = "lt " + $v_0[0].toString();
            break;
        case 2:
            $v_1 = "lt " + $v_0[1].toString();
            break;
        case 3:
            $v_1 = "lt " + $v_0[2].toString();
            break;
        case 4:
            $v_1 = "lt " + $v_0[3].toString();
            break;
        case 5:
            $v_1 = "lt " + $v_0[4].toString();
            break
        }
    else
        switch (startsliderIndex) {
        case 1:
            $v_1 = "ge " + $v_0[0].toString();
            break;
        case 2:
            $v_1 = "ge " + $v_0[1].toString();
            break;
        case 3:
            $v_1 = "ge " + $v_0[2].toString();
            break;
        case 4:
            $v_1 = "ge " + $v_0[3].toString();
            break;
        case 5:
            $v_1 = "ge " + $v_0[4].toString();
            break
        }
    return $v_1
};
Mscrm.ExternalSearch.$11 = function($p0, $p1, $p2) {
    var $v_0 = "",
        $v_1 = null,
        $v_2 = "",
        $v_3,
        $v_4 = false,
        $v_5 = "",
        $v_6 = "",
        $v_7 = Mscrm.ExternalSearch.unProcessedJsonValueLength,
        $v_8 = 1,
        $v_9 = "";
    if (0 === $v_7) $v_8 = 1;
    else {
        var $v_B = Mscrm.ExternalSearch.$10($p0);
        if (!IsNull($v_B["entityInfoCollection"])) $v_0 = $v_B["entityInfoCollection"].toString();
        else $v_8 = 2
    }
    var $v_A = new Mscrm.ExternalSearchResult($v_7, $p1);
    $v_A._records = [];
    if ($v_8 !== 2 && ($v_7 > 0 || !$v_7 && $p1 > 0)) $v_8 = 0;
    for (var $v_C = 0; $v_C < $v_7; $v_C++) {
        $v_1 = $p0[$v_C];
        if (!IsNull($v_1)) {
            Mscrm.ExternalSearch.$A = null;
            $v_4 = false;
            $v_5 = "";
            $v_6 = "";
            $v_3 = Xrm.Internal.getEntityCode($v_1["@search.entityname"]);
            var $$t_I,
                $$t_J,
                $$t_K,
                $$t_L,
                $$t_M,
                $$t_N,
                $v_D = ($$t_N = Mscrm.ExternalSearch
                    .getEntityQuickFindColumnCollection($v_0,
                        $v_3,
                        $$t_I = { val: $v_2 },
                        $$t_J = { val: $v_4 },
                        $$t_K = { val: $v_5 },
                        $$t_L = { val: $v_6 },
                        $$t_M = { val: $v_9 }), $v_2 = $$t_I.val, $v_4 = $$t_J.val, $v_5 = $$t_K.val, $v_6 = $$t_L
                    .val, $v_9 = $$t_M.val, $$t_N),
                $v_E = new Mscrm.ExternalSearchRecord;
            $v_E._attachments = [];
            $v_E._notes = [];
            $v_E._activities = [];
            $v_E._entityTypeCode = $v_3;
            $v_E._entityDisplayName = $v_2.toUpperCase();
            $v_E._entityColor = Mscrm.ExternalSearch.entityColor($v_3, $v_4, $v_6);
            $v_E._entityTheme = Mscrm.ExternalSearch.entityTheme($v_3, $v_4, $v_6);
            $v_E._entitySymbol = Mscrm.ExternalSearch.entityImage($v_3, $v_5);
            Mscrm.ExternalSearch.$u($v_1, $v_D, $v_9, $v_E);
            Array.add($v_A._records, $v_E);
            if (!IsNull($v_1["attachments"])) $v_E._attachments = $v_1["attachments"];
            if (!IsNull($v_1["notes"])) $v_E._notes = $v_1["notes"];
            if (!IsNull($v_1["activities"])) $v_E._activities = $v_1["activities"]
        }
    }
    Mscrm.ExternalSearch.parseTemplate($v_A, $p2);
    return $v_8
};
Mscrm.ExternalSearch.$10 = function($p0) {
    var $v_0 = {}, $v_1 = "", $v_2 = "", $v_3 = null, $v_4 = {}, $v_5 = 0;
    $v_5 = $p0.length;
    for (var $v_6 = 0; $v_6 < $v_5; $v_6++) {
        $v_3 = $p0[$v_6];
        if (!IsNull($v_3)) {
            $v_2 = $v_3["@search.entityname"];
            if (!($v_2 in $v_4)) {
                $v_4[$v_2] = true;
                var $v_7;
                $v_7 = Xrm.Internal.getEntityCode($v_2);
                $v_1 += $v_7 + ","
            }
        }
    }
    if (!isNullOrEmptyString($v_1))
        $v_0["entityInfoCollection"] = CrmEncodeDecode
            .CrmXmlDecode(Mscrm.ExternalSearch
                .getQuickFindColumnCollectionForEntityArray($v_1.substring(0, $v_1.length - 1)));
    return $v_0
};
Mscrm.ExternalSearch.$1G = function() {
    var $v_0 = window.top.Sys.Application.findComponent("crmPageManager");
    if (!IsNull($v_0)) {
        var $v_1 = {};
        $v_1["updateQueryString"] = String.format("text={0}&option={1}",
            CrmEncodeDecode.CrmUrlEncode(Mscrm.ExternalSearch.get_searchText()));
        $v_0.raiseEvent(43, $v_1)
    }
};
Mscrm.ExternalSearch.showProgress = function(pageNumber) {
    if (0 === pageNumber) {
        $get("searchCriteria").style.display = "none";
        $get("panoramaContainer").style.display = "none";
        $get("loadingdiv").style.display = "block";
        $get("InviteProgress").innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG) + "&nbsp;"
    } else $get("progressImage").style.visibility = "visible"
};
Mscrm.ExternalSearch.hideProgress = function(pageNumber) {
    var $v_0 = window.top.document.getElementById("crmRibbonManager");
    if (!IsNull($v_0)) {
        $v_0.style.visibility = "hidden";
        $v_0.style.display = "none"
    }
    $get("loadingdiv").style.display = "none";
    $get("panoramaContainer").style.display = "block";
    $get("progressImage").style.visibility = "hidden"
};
Mscrm.ExternalSearch.$u = function($p0, $p1, $p2, $p3) {
    if (!IsNull($p0["@search.objectid"]))
        $p3._id = new Microsoft.Crm.Client.Core.Framework.Guid($p0["@search.objectid"]);
    if (!IsNull($p0["objectid"])) $p3._objId = new Microsoft.Crm.Client.Core.Framework.Guid($p0["objectid"]);
    if (!IsNull($p0["entityimage_url"])) $p3._entityImage = $p0["entityimage_url"];
    if (!IsNull($p0["isalreadytraversed"])) $p3._isalreadytraversed = $p0["isalreadytraversed"];
    if (!IsNull($p0["isdummyentity"])) $p3._isdummyentity = $p0["isdummyentity"];
    if (!IsNull($p0["haschild"])) $p3._haschild = $p0["haschild"];
    if (!IsNull($p0["shouldreplacedummy"])) $p3._shouldReplaceDummy = $p0["shouldreplacedummy"];
    var $v_0 = !IsNull($p0["@search.highlights"]) ? $p0["@search.highlights"] : {},
        $v_1 = 5,
        $v_2 = new Array($v_1),
        $v_3 = 0,
        $v_4 = "",
        $v_5 = [];
    if (null !== $p2 && $p2.length > 0)
        if ($p2 in $v_0 && !IsNull($v_0[$p2])) {
            $v_4 = CrmEncodeDecode.CrmHtmlEncode($v_0[$p2]);
            var $v_7 = Mscrm.ExternalSearch.$F($v_4, false);
            $v_4 = Mscrm.ExternalSearch.$F($v_4, true);
            $v_2[$v_3] = $v_7;
            Array.add($v_5, $v_7);
            $v_3++
        } else if ($p2 in $p0 && !IsNull($p0[$p2])) {
            $v_4 = CrmEncodeDecode.CrmHtmlEncode($p0[$p2]);
            $v_2[$v_3] = $v_4;
            $v_3++
        }
    for (var $v_6 = {}, $v_8 = 0; $v_8 < $p1.length; $v_8++) {
        if ($v_3 >= $v_1) break;
        var $v_9 = $p1[$v_8],
            $v_A = $v_9.attributes.getNamedItem("name").nodeValue,
            $v_B = $v_9.attributes.getNamedItem("type").nodeValue;
        if ($v_A !== $p2 && !IsNull($p0[$v_A]))
            if ($v_A in $v_0 && !IsNull($v_0[$v_A])) {
                var $v_C = Mscrm.ExternalSearch.$g($v_B, $p0, $v_A, $v_0),
                    $v_D = Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode($v_C), false);
                $v_2[$v_3] = $v_D;
                Array.add($v_5, $v_D);
                $v_3++;
                delete $v_0[$v_A]
            } else if ($v_A in $p0 && !IsNull($p0[$v_A])) {
                var $v_E = Mscrm.ExternalSearch.$g($v_B, $p0, $v_A, $v_0);
                $v_2[$v_3] = $v_E;
                $v_3++
            }
    }
    var $$dict_L = $v_0;
    for (var $$key_M in $$dict_L) {
        var $v_F = { key: $$key_M, value: $$dict_L[$$key_M] };
        if ($v_5.length >= $v_1) break;
        var $v_G = Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode($v_F.value), false);
        $v_F.key !== $p2 &&
            !IsNull($v_F.value) &&
            Mscrm.ExternalSearch.$i($v_2, $v_G) &&
            !Array.contains($v_5, $v_G) &&
            Array.add($v_5,
                Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode(Mscrm.ExternalSearch.$U($v_F.value)), false))
    }
    var $$dict_P = $v_0;
    for (var $$key_Q in $$dict_P) {
        var $v_H = { key: $$key_Q, value: $$dict_P[$$key_Q] };
        if ($v_5.length >= $v_1) break;
        if ($v_H.key !== $p2 &&
            !IsNull($v_H.value) &&
            !Mscrm.ExternalSearch.$i($v_2, Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode($v_H.value), false))) {
            var $v_I = Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode(Mscrm.ExternalSearch.$U($v_H.value)),
                false);
            $v_2 = Mscrm.ExternalSearch.$1D($v_2, $v_5, $v_I);
            $v_3++
        }
    }
    $p3._title = $v_4;
    $p3._attribute1 = $v_2[0];
    for (var $v_J = 1; $v_J < $v_2.length; $v_J++)
        switch ($v_J) {
        case 1:
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_2[$v_J])) $p3._attribute2 = $v_2[$v_J].toString();
            break;
        case 2:
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_2[$v_J])) $p3._attribute3 = $v_2[$v_J].toString();
            break;
        case 3:
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_2[$v_J])) $p3._attribute4 = $v_2[$v_J].toString();
            break;
        case 4:
            if (!Mscrm.InternalUtilities.JSTypes
                .isNullOrEmptyString($v_2[$v_J])) $p3._attribute5 = $v_2[$v_J].toString();
            break;
        default:
            break
        }
};
Mscrm.ExternalSearch.$i = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p0.length; $v_0++)
        if (!Mscrm.InternalUtilities.JSTypes
            .isNullOrEmptyString($p0[$v_0]) &&
            $p0[$v_0].toString() === $p1) return true;
    return false
};
Mscrm.ExternalSearch.$g = function($p0, $p1, $p2, $p3) {
    var $v_0 = "";
    if (($p0 === "Lookup" || $p0 === "Customer" || $p0 === "Owner") && !isNullOrEmptyString($p1[$p2 + "name"]))
        if ($p2 + "name" in $p3 && !IsNull($p3[$p2 + "name"])
        )
            $v_0 = Mscrm.ExternalSearch.$F(CrmEncodeDecode.CrmHtmlEncode(Mscrm.ExternalSearch.$U($p3[$p2 + "name"])),
                false);
        else $v_0 = $p1[$p2 + "name"];
    else if ($p2 in $p3 && !IsNull($p3[$p2])) $v_0 = Mscrm.ExternalSearch.$U($p3[$p2]);
    else $v_0 = $p1[$p2];
    return $v_0
};
Mscrm.ExternalSearch.$U = function($p0) {
    if ($p0.length > 1) {
        for (var $v_0 = "", $v_1 = 0; $v_1 < $p0.length - 1; $v_1++) $v_0 += $p0[$v_1].toString() + "...";
        $v_0 += $p0[$p0.length - 1].toString();
        return $v_0
    }
    return $p0.toString()
};
Mscrm.ExternalSearch.$1D = function($p0, $p1, $p2) {
    var $v_0 = Mscrm.ExternalSearch.$z($p0);
    if ($v_0 < $p0.length) {
        $p0[$v_0] = $p2;
        Array.add($p1, $p2)
    } else {
        var $v_1 = $v_0 - 1;
        while ($v_1 >= 0)
            if (Array.contains($p1, $p0[$v_1])) $v_1--;
            else {
                var $v_2 = $v_1;
                while ($v_2 < $v_0 - 1) {
                    $p0[$v_2] = $p0[$v_2 + 1];
                    $v_2++
                }
                $p0[$v_2] = $p2;
                Array.add($p1, $p2);
                break
            }
    }
    return $p0
};
Mscrm.ExternalSearch.$z = function($p0) {
    var $v_0 = 0;
    while ($p0[$v_0]) $v_0++;
    return $v_0
};
Mscrm.ExternalSearch.$F = function($p0, $p1) {
    var $v_0 = $p1 ? "" : "<em>",
        $v_1 = $p1 ? "" : "</em>",
        $v_2 = $p0.replace(new RegExp("&#123;crmhit&#125;", "g"), $v_0);
    $v_2 = $v_2.replace(new RegExp("&#123;&#47;crmhit&#125;", "g"), $v_1);
    return $v_2
};
Mscrm.ExternalSearch.entityColor = function(entityTypeCode, isCustomEntity, entityTileColor) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityTileColor)) {
        var $v_1 = parseInt(entityTileColor.substr(1, entityTileColor.length - 1), 16),
            $v_2 = $v_1 >> 16,
            $v_3 = $v_1 >> 8 & 255,
            $v_4 = $v_1 & 255;
        return String.format("rgba({0},{1},{2},0.15)", $v_2, $v_3, $v_4)
    }
    if (isCustomEntity) return "rgba(0,133,106,0.15)";
    Mscrm.ExternalSearch.initializeEntityTypeToEntityColor();
    var $v_0 = "";
    $v_0 = Mscrm.ExternalSearch.$A[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return $v_0;
    return "rgba(85,85,85,0.15)"
};
Mscrm.ExternalSearch.initializeEntityTypeToEntityColor = function() {
    if (IsNull(Mscrm.ExternalSearch.$A)) {
        Mscrm.ExternalSearch.$A = {};
        Mscrm.ExternalSearch.$A["1"] = "rgba(206, 114, 0, 0.15)";
        Mscrm.ExternalSearch.$A["2"] = "rgba(0,114,198,0.15)";
        Mscrm.ExternalSearch.$A["3"] = "rgba(62,114,57,0.15)";
        Mscrm.ExternalSearch.$A["4"] = "rgba(48,82,166,0.15)";
        Mscrm.ExternalSearch.$A["112"] = "rgba(122,39,143,0.15)"
    }
};
Mscrm.ExternalSearch.entityTheme = function(entityTypeCode, isCustomEntity, entityColor) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityColor)) return entityColor;
    if (isCustomEntity) return "#00856A";
    Mscrm.ExternalSearch.$17();
    var $v_0 = "";
    $v_0 = Mscrm.ExternalSearch.$E[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return $v_0;
    return "#636363"
};
Mscrm.ExternalSearch.$17 = function() {
    if (!Mscrm.ExternalSearch.$E) {
        Mscrm.ExternalSearch.$E = {};
        Mscrm.ExternalSearch.$E["1"] = "#CE7200";
        Mscrm.ExternalSearch.$E["2"] = "#0072C6";
        Mscrm.ExternalSearch.$E["3"] = "#3E7239";
        Mscrm.ExternalSearch.$E["4"] = "#3052A6";
        Mscrm.ExternalSearch.$E["112"] = "#7A278F"
    }
};
Mscrm.ExternalSearch.entityTypeImage = function(entityTypeCode) {
    var $v_0 = "";
    $v_0 = Mscrm.ExternalSearch.$0[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0))
        if (entityTypeCode === 9600 || entityTypeCode === 9603 || entityTypeCode === 5 || entityTypeCode === 1001
        ) return "/_imgs/ico_16_" + entityTypeCode + ".png";
        else return "/_imgs/ico_16_" + entityTypeCode + ".gif";
    else return "/_imgs/Ribbon/CustomEntity_16.png"
};
Mscrm.ExternalSearch.entityImage = function(entityTypeCode, iconPath) {
    var $v_0 = "";
    $v_0 = Mscrm.ExternalSearch.$0[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return "/_imgs/NavBar/ActionImgs/" + $v_0;
    else if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(iconPath)) return iconPath;
    return "/_imgs/NavBar/ActionImgs/CustomEntity_32.png"
};
Mscrm.ExternalSearch.$16 = function() {
    if (!Mscrm.ExternalSearch.$0) {
        Mscrm.ExternalSearch.$0 = {};
        Mscrm.ExternalSearch.$0["1"] = "Account_32.png";
        Mscrm.ExternalSearch.$0["4200"] = "Activities_32.png";
        Mscrm.ExternalSearch.$0["4201"] = "Appointment_32.png";
        Mscrm.ExternalSearch.$0["4700"] = "BackgroundProcess_32.png";
        Mscrm.ExternalSearch.$0["4567"] = "Auditing_32.png";
        Mscrm.ExternalSearch.$0["4406"] = "QuickCampaign_32.png";
        Mscrm.ExternalSearch.$0["132"] = "Articles_32.png";
        Mscrm.ExternalSearch.$0["4003"] = "Calendar_32.png";
        Mscrm.ExternalSearch.$0["4400"] = "Campaign_32.png";
        Mscrm.ExternalSearch.$0["4401"] = "CampaignResponse_32.png";
        Mscrm.ExternalSearch.$0["4402"] = "CampaignActivity_32.png";
        Mscrm.ExternalSearch.$0["123"] = "Competitors_32.png";
        Mscrm.ExternalSearch.$0["3234"] = "Connections_32.png";
        Mscrm.ExternalSearch.$0["4007"] = "ResourceGroup_32.png";
        Mscrm.ExternalSearch.$0["2"] = "Contact_32.png";
        Mscrm.ExternalSearch.$0["1010"] = "Contract_32.png";
        Mscrm.ExternalSearch.$0["1011"] = "ContractLines_32.png";
        Mscrm.ExternalSearch.$0["1013"] = "Discount_32.png";
        Mscrm.ExternalSearch.$0["4202"] = "Email_32.png";
        Mscrm.ExternalSearch.$0["9700"] = "Entitlement_32.png";
        Mscrm.ExternalSearch.$0["4204"] = "Faxl_32.png";
        Mscrm.ExternalSearch.$0["1200"] = "FieldSecurityProfiles_32.png";
        Mscrm.ExternalSearch.$0["9600"] = "Goal_32.png";
        Mscrm.ExternalSearch.$0["9602"] = "RollupQueries_32.png";
        Mscrm.ExternalSearch.$0["112"] = "Cases_32.png";
        Mscrm.ExternalSearch.$0["1090"] = "Invoices_32.png";
        Mscrm.ExternalSearch.$0["127"] = "Articles_32.png";
        Mscrm.ExternalSearch.$0["9930"] = "KnowledgeBase_32.png";
        Mscrm.ExternalSearch.$0["4"] = "Lead_32.png";
        Mscrm.ExternalSearch.$0["4207"] = "Letter_32.png";
        Mscrm.ExternalSearch.$0["4300"] = "MarketingList_32.png";
        Mscrm.ExternalSearch.$0["9603"] = "GoalMetrics_32.png";
        Mscrm.ExternalSearch.$0["3"] = "Opportunity_32.png";
        Mscrm.ExternalSearch.$0["4210"] = "PhoneCall_32.png";
        Mscrm.ExternalSearch.$0["4710"] = "RealTimeProcess_32.png";
        Mscrm.ExternalSearch.$0["1024"] = "Products_32.png";
        Mscrm.ExternalSearch.$0["2020"] = "Queues_32.png";
        Mscrm.ExternalSearch.$0["2029"] = "Queues_32.png";
        Mscrm.ExternalSearch.$0["1084"] = "Quote_32.png";
        Mscrm.ExternalSearch.$0["4251"] = "RecurringAppointment_32.png";
        Mscrm.ExternalSearch.$0["9100"] = "Report_32.png";
        Mscrm.ExternalSearch.$0["1036"] = "SecurityRoles_32.png";
        Mscrm.ExternalSearch.$0["9604"] = "RollupQueries_32.png";
        Mscrm.ExternalSearch.$0["1038"] = "SalesLiterature_32.png";
        Mscrm.ExternalSearch.$0["1088"] = "Order_32.png";
        Mscrm.ExternalSearch.$0["4001"] = "Service_32.png";
        Mscrm.ExternalSearch.$0["4214"] = "ServiceAppointment_32.png";
        Mscrm.ExternalSearch.$0["9508"] = "Documents_32.png";
        Mscrm.ExternalSearch.$0["9507"] = "Documents_32.png";
        Mscrm.ExternalSearch.$0["99"] = "Social_Profile_32.png";
        Mscrm.ExternalSearch.$0["7100"] = "Solutions_32.png";
        Mscrm.ExternalSearch.$0["8"] = "User_32.png";
        Mscrm.ExternalSearch.$0["4212"] = "Task_32.png";
        Mscrm.ExternalSearch.$0["9"] = "Team_32.png";
        Mscrm.ExternalSearch.$0["2010"] = "Templates_32.png";
        Mscrm.ExternalSearch.$0["2013"] = "Territory_32.png";
        Mscrm.ExternalSearch.$0["9105"] = "Currency_32.png";
        Mscrm.ExternalSearch.$0["1031"] = "User_32.png";
        Mscrm.ExternalSearch.$0["150"] = "UserSettings_32.png";
        Mscrm.ExternalSearch.$0["4703"] = "Processes_32.png";
        Mscrm.ExternalSearch.$0["1025"] = "Bundle_White_32.png";
        Mscrm.ExternalSearch.$0["1028"] = "Relationships_White_32.png";
        Mscrm.ExternalSearch.$0["5"] = "Note_32.png"
    }
};
Mscrm.ExternalSearch.parseTemplate = function(jsonObject, pageSize) {
    if (!IsNull(jsonObject)) {
        var $v_0 = $P_CRM("#headerTemplate"), $v_1 = $P_CRM("#listHeader");
        $v_1.empty();
        var $v_2 = $v_0;
        $v_1.append($v_2.tmpl(jsonObject));
        var $v_3 = $P_CRM("#contentRecords");
        0 === jsonObject._pageNumber && $v_3.empty();
        var $v_4 = $P_CRM("#contentTemplate"), $v_5 = $v_4;
        $v_3.append($v_5.tmpl(jsonObject));
        Mscrm.ExternalSearch.$s($v_3);
        Mscrm.ExternalSearch.$R("#attribone", $v_3);
        Mscrm.ExternalSearch.$R("#attribtwo", $v_3);
        Mscrm.ExternalSearch.$R("#attribthree", $v_3);
        Mscrm.ExternalSearch.$R("#attribfour", $v_3);
        Mscrm.ExternalSearch.$R("#attribfive", $v_3);
        Mscrm.ExternalSearch.$1H(pageSize <= jsonObject._pageCount)
    }
};
Mscrm.ExternalSearch.$1H = function($p0) {
    var $v_0 = $get("moreRecords");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0))
        if (true === $p0) $v_0.style.display = "block";
        else $v_0.style.display = "none"
};
Mscrm.ExternalSearch.$s = function($p0) {
    var $v_0 = $p0.find(Mscrm.ExternalSearch.$B + "#entityRecordTypeCode"),
        $v_1 = $p0.find(Mscrm.ExternalSearch.$B + "#entityId"),
        $v_2 = $p0.find(Mscrm.ExternalSearch.$B + "#entityColor");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_3].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0[$v_3].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2[$v_3].innerHTML)) {
                var $v_4 = $p0.find(Mscrm.ExternalSearch.$P +
                        "#Record_" +
                        $v_0[$v_3].innerHTML.toString().trim() +
                        "_" +
                        $v_1[$v_3].innerHTML.toString().trim()),
                    $v_5 = $get($v_4.attr("ID"));
                if (!IsNull($v_5) && null === $v_5.getAttribute("entityId")) {
                    $v_5.setAttribute("entityRecordTypeCode",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0[$v_3].innerHTML.toString().trim()));
                    $v_5.setAttribute("entityId",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_1[$v_3].innerHTML.toString().trim()));
                    $v_5.setAttribute("entityColor",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_2[$v_3].innerHTML.toString().trim()));
                    $addHandler($v_5, "click", Mscrm.ExternalSearch.$a);
                    $addHandler($v_5, "mouseover", Mscrm.ExternalSearch.$W);
                    $addHandler($v_5, "mouseout", Mscrm.ExternalSearch.$V);
                    $addHandler($v_5, "focus", Mscrm.ExternalSearch.$W);
                    $addHandler($v_5, "blur", Mscrm.ExternalSearch.$V);
                    $addHandler($v_5, "keydown", Mscrm.ExternalSearch.$k)
                }
            }
};
Mscrm.ExternalSearch.$a = function($p0) {
    var $v_0 = $p0.rawEvent.currentTarget, $v_1 = "";
    if (!IsNull($v_0) &&
        !IsNull($v_0.getAttribute("entityRecordTypeCode")) &&
        $v_0.getAttribute("entityRecordTypeCode").toString() === "4200") {
        if (!IsNull($v_0.getAttribute("entityId")))
            $v_1 = Mscrm.ExternalSearch.getActivitySpecificObjectTypeCode($v_0.getAttribute("entityId").toString());
        if (!isNullOrEmptyString($v_1)) {
            Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
            {
                ExterSearchCompleted: Mscrm.DateTimeUtility.localDateTimeNow(),
                ClientName: Xrm.Page.context.client.getClient(),
                UserId: Xrm.Page.context.getUserId(),
                OrganizationName: Xrm.Page.context.getOrgUniqueName(),
                OrganizationId: window.ORG_ID,
                searchText: Mscrm.ExternalSearch.get_searchText(),
                PageNumber: Mscrm.ExternalSearch.$h(),
                searchCompleted: true,
                RecordTypeOpened: $v_1,
                columnType: "activitySpecific",
                searchCount: Mscrm.ExternalSearch.searchCount,
                entityId: $v_0.getAttribute("entityId").toString()
            });
            Mscrm.ExternalSearch.entityRecordOpened = "RecordOpenedEvent";
            openObj(Number.parseInvariant(CrmEncodeDecode.CrmHtmlDecode($v_1)),
                CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityId").toString()),
                "")
        }
    } else if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0.getAttribute("entityRecordTypeCode")) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getAttribute("entityId"))) {
        Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
        {
            ExterSearchCompleted: Mscrm.DateTimeUtility.localDateTimeNow(),
            ClientName: Xrm.Page.context.client.getClient(),
            UserId: Xrm.Page.context.getUserId(),
            OrganizationName: Xrm.Page.context.getOrgUniqueName(),
            OrganizationId: window.ORG_ID,
            searchText: Mscrm.ExternalSearch.get_searchText(),
            PageNumber: Mscrm.ExternalSearch.$h(),
            searchCompleted: true,
            RecordTypeOpened: $v_0.getAttribute("entityRecordTypeCode").toString(),
            columnType: "EntitySpecific",
            entityId: $v_0.getAttribute("entityId").toString()
        });
        Mscrm.ExternalSearch.entityRecordOpened = "RecordOpenedEvent";
        openObj(Number.parseInvariant(CrmEncodeDecode
                .CrmHtmlDecode($v_0.getAttribute("entityRecordTypeCode").toString())),
            CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityId").toString()),
            "")
    }
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$W = function($p0) {
    try {
        var $v_0 = $P_CRM(".mainContainer"), $v_1 = $p0.rawEvent.currentTarget;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getAttribute("entityColor"))) {
            $v_1.style.backgroundColor = CrmEncodeDecode.CrmHtmlDecode($v_1.getAttribute("entityColor").toString());
            $p0.preventDefault();
            $p0.stopPropagation()
        }
        Mscrm.ExternalSearch.$c()
    } catch ($$e_3) {
    }
};
Mscrm.ExternalSearch.$o = function($p0) {
    Mscrm.ExternalSearch.$c();
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$m = function($p0) {
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$n = function($p0) {
    var $v_0 = 0,
        $v_1 = $P_CRM("#listHeader"),
        $v_2 = $v_1.find(Mscrm.ExternalSearch.$B + "#pageNumber"),
        $v_3 = Mscrm.ExternalSearch.getSelectedFilterOptionElement(),
        $v_4 = 0;
    if (!IsNull($v_3)) $v_4 = Number.parseInvariant($v_3.getAttribute("value"));
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        $v_0 = Number.parseInvariant($v_2[0].innerHTML.toString().trim());
    Mscrm.ExternalSearch.executeRecordSearchSdkCall(20, $v_0 + 1, $v_4, "", false, "");
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$h = function() {
    var $v_0 = 0, $v_1 = $P_CRM("#listHeader"), $v_2 = $v_1.find(Mscrm.ExternalSearch.$B + "#pageNumber");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        $v_0 = Number.parseInvariant($v_2[0].innerHTML.toString().trim());
    return $v_0
};
Mscrm.ExternalSearch.autoMoreRecordsClick = function() {
    var $v_0 = 0,
        $v_1 = $P_CRM("#listHeader"),
        $v_2 = $v_1.find(Mscrm.ExternalSearch.$B + "#pageNumber"),
        $v_3 = Mscrm.ExternalSearch.getSelectedFilterOptionElement(),
        $v_4 = 0;
    if (!IsNull($v_3)) $v_4 = Number.parseInvariant($v_3.getAttribute("value"));
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        $v_0 = Number.parseInvariant($v_2[0].innerHTML.toString().trim());
    Mscrm.ExternalSearch.executeRecordSearchSdkCall(20, $v_0 + 1, $v_4, "", false, "")
};
Mscrm.ExternalSearch.$j = function($p0) {
    var $v_0 = $p0.rawEvent.wheelDelta, $v_1 = $p0.rawEvent.detail, $v_2 = $p0.rawEvent.currentTarget;
    if (Mscrm.Utilities.isFirefox()) $v_2.scrollLeft = $v_2.scrollLeft + $v_1 * 120;
    else $v_2.scrollLeft = $v_2.scrollLeft - $v_0;
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$k = function($p0) {
    $p0.keyCode === 13 && Mscrm.ExternalSearch.$a($p0);
    if ($p0.keyCode === 38) {
        var $v_0 = $P_CRM("#" + $p0.rawEvent.currentTarget.id).prevAll(".listItem").first();
        $v_0 && !isNullOrEmptyString($v_0.html()) && $v_0.focus()
    }
    if ($p0.keyCode === 40) {
        var $v_1 = $P_CRM("#" + $p0.rawEvent.currentTarget.id).nextAll(".listItem").first();
        $v_1 && !isNullOrEmptyString($v_1.html()) && $v_1.focus()
    }
    if ($p0.keyCode === 37) {
        var $v_2 = $P_CRM("#" + $p0.rawEvent.currentTarget.id).parents(".panoramaItem "),
            $v_3 = $v_2.prev().find(".listItem").first();
        $v_3 && !isNullOrEmptyString($v_3.html()) && $v_3.focus()
    }
    if ($p0.keyCode === 39) {
        var $v_4 = $P_CRM("#" + $p0.rawEvent.currentTarget.id).parents(".panoramaItem "),
            $v_5 = $v_4.next().find(".listItem").first();
        $v_5 && !isNullOrEmptyString($v_5.html()) && $v_5.focus()
    }
};
Mscrm.ExternalSearch.$V = function($p0) {
    var $v_0 = $p0.rawEvent.currentTarget;
    $v_0.style.backgroundColor = "transparent";
    XUI.Html.SetOpacity($v_0, 1);
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.ExternalSearch.$1A = function() {
    var $v_0 = $P_CRM("#contentResult");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.children().find(Mscrm.ExternalSearch.$P + "#scrollbarRegion_All"), $v_2 = $get($v_1.attr("ID"));
        !IsNull($v_2) && $removeHandler($v_2, "mouseover", Mscrm.ExternalSearch.$o)
    }
};
Mscrm.ExternalSearch.$1B = function() {
    var $v_0 = $P_CRM("#contentRecords");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.find(Mscrm.ExternalSearch.$B + "#entityId"),
            $v_2 = $v_0.find(Mscrm.ExternalSearch.$B + "#entityRecordTypeCode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_3].innerHTML)) {
                    var $v_4 = $v_0.find(Mscrm.ExternalSearch.$P +
                            "#Record_" +
                            $v_2[$v_3].innerHTML.toString().trim() +
                            "_" +
                            $v_1[$v_3].innerHTML.toString().trim()),
                        $v_5 = $get($v_4.attr("ID"));
                    if (!IsNull($v_5)) {
                        $removeHandler($v_5, "click", Mscrm.ExternalSearch.$a);
                        $removeHandler($v_5, "mouseover", Mscrm.ExternalSearch.$W);
                        $removeHandler($v_5, "mouseout", Mscrm.ExternalSearch.$V);
                        $removeHandler($v_5, "focus", Mscrm.ExternalSearch.$W);
                        $removeHandler($v_5, "blur", Mscrm.ExternalSearch.$V);
                        $removeHandler($v_5, "keydown", Mscrm.ExternalSearch.$k)
                    }
                }
    }
};
Mscrm.ExternalSearch.$R = function($p0, $p1) {
    for (var $v_0 = $p1.find(Mscrm.ExternalSearch
                 .$B +
                 $p0),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++) if (isNullOrEmptyString($v_0[$v_1].innerHTML)) $v_0[$v_1].parentNode.parentNode.style.display = "none"
};
Mscrm.ExternalSearch.getOptionDisplayName = function(entityTypeCode, columneName, option) {
    if (!IsNull(entityTypeCode) && !IsNull(columneName) && !IsNull(option)) {
        var $v_0 = new RemoteCommand("CustomerService", "GetOptionDisplayName");
        $v_0.SetParameter("entityTypeCode", entityTypeCode);
        $v_0.SetParameter("columneName", columneName);
        $v_0.SetParameter("option", option);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) return $v_1.ReturnValue
    }
    return ""
};
Mscrm.ExternalSearch.getOwnerDisplayImage = function(systemUserId) {
    if (!IsNull(systemUserId)) {
        var $v_0 = new RemoteCommand("CustomerService", "GetImageUrl");
        $v_0.SetParameter("systemUserId", systemUserId);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) return $v_1.ReturnValue
    }
    return ""
};
Mscrm.ExternalSearch.getActivitySpecificObjectTypeCode = function(entityId) {
    var $v_0 = null;
    if (entityId) {
        var $v_1 = new RemoteCommand("CustomerService", "GetActivitySpecificTypeCode");
        $v_1.SetParameter("entityId", entityId);
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) $v_0 = $v_2.ReturnValue
    }
    return $v_0
};
Mscrm.ExternalSearch.getEntityCollectionName = function(entityTypeCode) {
    var $v_0 = new RemoteCommand("CustomerService", "GetEntityCollectionName");
    $v_0.SetParameter("entityCodes", entityTypeCode);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success)
        if (!$v_1.ReturnValue) return null;
        else return $v_1.ReturnValue;
    else return null
};
Mscrm.ExternalSearch.getQuickFindColumnCollectionForEntityArray = function(entityTypeCodes) {
    var $v_0 = new RemoteCommand("CustomerService", "GetQuickFindColumnCollectionForEntityArray");
    $v_0.SetParameter("entityCodes", entityTypeCodes);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else return null
};
Mscrm.ExternalSearch.getEntityLogicalName = function(objectTypeCode) {
    var $v_0 = new RemoteCommand("ImportWebService", "GetEntityLogicalName");
    $v_0.SetParameter("objectTypeCode", objectTypeCode);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else return null
};
Mscrm.ExternalSearch
    .getEntityQuickFindColumnCollection = function(xmlValue,
        entityCode,
        entityDisplayName,
        isCustomEntity,
        iconPath,
        entityColor,
        entityPrimaryNameAttributeLogicalName) {
        for (var $v_0 = XUI.Xml.LoadXml(xmlValue),
            $v_1 = XUI.Xml.SelectNodes($v_0, "EntityInfoCollection/EntityInfo", null),
            $v_2 = null,
            $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++)
            if (Number.parseInvariant($v_1[$v_3].attributes.getNamedItem("EntityCode").nodeValue) === entityCode) {
                entityDisplayName.val = $v_1[$v_3].attributes.getNamedItem("EntitySingularDisplayName").nodeValue;
                isCustomEntity.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("IsCustomEntity").nodeValue);
                iconPath.val = $v_1[$v_3].attributes.getNamedItem("icon").nodeValue;
                entityColor.val = $v_1[$v_3].attributes.getNamedItem("EntityColor").nodeValue;
                entityPrimaryNameAttributeLogicalName.val = $v_1[$v_3].attributes
                    .getNamedItem("EntityPrimaryNameAttributeLogicalName").nodeValue;
                var $v_4 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($v_1[$v_3]));
                $v_2 = XUI.Xml.SelectNodes($v_4, "EntityInfo/grid/row/cell", null)
            }
        return $v_2
    };
Mscrm.ExternalSearch.getEntityQuickFindColumn = function(xmlValue) {
    for (var $v_0 = XUI.Xml.LoadXml(xmlValue),
        $v_1 = XUI.Xml.SelectNodes($v_0, "EntityInfoCollection/EntityInfo", null),
        $v_2 = null,
        $v_3 = 0;
        $v_3 < $v_1.length;
        $v_3++) {
        var $v_4 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($v_1[$v_3]));
        $v_2 = XUI.Xml.SelectNodes($v_4, "EntityInfo/grid/row/cell", null)
    }
    return $v_2
};
Mscrm.ExternalSearch.isSocialProfile = function(element) {
    var $v_0 = false;
    if (!isNullOrEmptyString(element.innerHTML))
        $v_0 = Xrm.Internal.getEntityCode(element.innerHTML.toString().trim()).toString() === "99";
    return $v_0
};
Mscrm.ExternalSearch.metricsReportingForSearchDropDown = function(SearchOptionSelected) {
    Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
    {
        ExterSearchSwitchDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
        SearchOptionSelected: SearchOptionSelected,
        searchText: Mscrm.ExternalSearch.get_searchText()
    })
};
Mscrm.ExternalSearch
    .metricsReportingForIncludeNotesAndActivites = function() {
        Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
        {
            ExterSearchIncudedOrRemovedNotesDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
            IsIncludeNotesAndActivites: Mscrm.ExternalSearch.isCheckBoxChecked(),
            searchText: Mscrm.ExternalSearch.get_searchText()
        })
    };
Mscrm.ExternalSearch.metricsReportingForFiltersAdded = function(filter, columnName, columnType) {
    Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
    {
        ExterSearchFilterAddedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
        IsIncludeNotesAndActivites: Mscrm.ExternalSearch.isCheckBoxChecked(),
        searchText: Mscrm.ExternalSearch.get_searchText(),
        filter: filter,
        filterAdded: true,
        columnName: columnName,
        columnType: columnType
    })
};
Mscrm.ExternalSearch.metricsReportingForFiltersRemoved = function(filter, columnName, columnType) {
    Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
    {
        ExterSearchFilterRemovedDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
        IsIncludeNotesAndActivites: Mscrm.ExternalSearch.isCheckBoxChecked(),
        searchText: Mscrm.ExternalSearch.get_searchText(),
        filter: filter,
        filterRemoved: true,
        columnName: columnName,
        columnType: columnType
    })
};
Mscrm.ExternalSearchResult = function(pageCount, pageNumber) {
    this._pageCount = pageCount;
    this._pageNumber = pageNumber
};
Mscrm.ExternalSearchResult.prototype = {
    _pageCount: 0,
    _pageNumber: 0,
    _records: null,
    get_pageCount: function() { return this._pageCount },
    get_pageNumber: function() { return this._pageNumber },
    get_records: function() { return this._records },
    set_records: function(value) {
        this._records = value;
        return value
    }
};
Mscrm.ExternalSearchRecord = function() {
    this._id = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._objId = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._id = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._objId = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._attribute1 = "";
    this._attribute2 = "";
    this._attribute3 = "";
    this._attribute4 = "";
    this._entityImage = "";
    this._isalreadytraversed = false;
    this._isdummyentity = false;
    this._haschild = false;
    this._shouldReplaceDummy = false
};
Mscrm.ExternalSearchRecord.prototype = {
    _entityLogicalName: null,
    _entityDisplayName: null,
    _entityTypeCode: 0,
    _entityColor: null,
    _entityTheme: null,
    _entitySymbol: null,
    _title: "",
    _attribute1: "",
    _attribute2: "",
    _attribute3: "",
    _attribute4: "",
    _attribute5: "",
    _entityImage: "",
    _isalreadytraversed: false,
    _isdummyentity: false,
    _haschild: false,
    _shouldReplaceDummy: false,
    _attachments: null,
    _notes: null,
    _activities: null,
    get_attachments: function() { return this._attachments },
    set_attachments: function(value) {
        this._attachments = value;
        return value
    },
    get_notes: function() { return this._notes },
    set_notes: function(value) {
        this._notes = value;
        return value
    },
    get_activities: function() { return this._activities },
    set_activities: function(value) {
        this._activities = value;
        return value
    },
    get_entityLogicalName: function() { return this._entityLogicalName },
    set_entityLogicalName: function(value) {
        this._entityLogicalName = value;
        return value
    },
    get_entityDisplayName: function() { return this._entityDisplayName },
    set_entityDisplayName: function(value) {
        this._entityDisplayName = value;
        return value
    },
    get_entityColor: function() { return this._entityColor },
    set_entityColor: function(value) {
        this._entityColor = value;
        return value
    },
    get_entityTheme: function() { return this._entityTheme },
    set_entityTheme: function(value) {
        this._entityTheme = value;
        return value
    },
    get_entitySymbol: function() { return this._entitySymbol },
    set_entitySymbol: function(value) {
        this._entitySymbol = value;
        return value
    },
    get_entityTypeCode: function() { return this._entityTypeCode },
    set_entityTypeCode: function(value) {
        this._entityTypeCode = value;
        return value
    },
    get_title: function() { return this._title },
    set_title: function(value) {
        this._title = value;
        return value
    },
    get_attribute1: function() { return this._attribute1 },
    set_attribute1: function(value) {
        this._attribute1 = value;
        return value
    },
    get_attribute2: function() { return this._attribute2 },
    set_attribute2: function(value) {
        this._attribute2 = value;
        return value
    },
    get_attribute3: function() { return this._attribute3 },
    set_attribute3: function(value) {
        this._attribute3 = value;
        return value
    },
    get_attribute4: function() { return this._attribute4 },
    set_attribute4: function(value) {
        this._attribute4 = value;
        return value
    },
    get_attribute5: function() { return this._attribute5 },
    set_attribute5: function(value) {
        this._attribute5 = value;
        return value
    },
    get_id: function() { return this._id },
    set_id: function(value) {
        this._id = value;
        return value
    },
    get_objId: function() { return this._objId },
    set_objId: function(value) {
        this._objId = value;
        return value
    },
    get_entityImage: function() { return this._entityImage },
    set_entityImage: function(value) {
        this._entityImage = value;
        return value
    },
    get_isalreadytraversed: function() { return this._isalreadytraversed },
    set_isalreadytraversed: function(value) {
        this._isalreadytraversed = value;
        return value
    },
    get_isdummyentity: function() { return this._isdummyentity },
    set_isdummyentity: function(value) {
        this._isdummyentity = value;
        return value
    },
    get_haschild: function() { return this._haschild },
    set_haschild: function(value) {
        this._haschild = value;
        return value
    },
    get_shouldReplaceDummy: function() { return this._shouldReplaceDummy },
    set_shouldReplaceDummy: function(value) {
        this._shouldReplaceDummy = value;
        return value
    }
};
Mscrm.ExternalSearchColumnResult = function() {};
Mscrm.ExternalSearchColumnResult.prototype = {
    $H_0: null,
    get_records: function() { return this.$H_0 },
    set_records: function(value) {
        this.$H_0 = value;
        return value
    }
};
Mscrm.ExternalSearchColumnRecord = function() {};
Mscrm.ExternalSearchColumnRecord.prototype = {
    $3_0: null,
    get_columnType: function() { return this.$3_0 },
    set_columnType: function(value) {
        this.$3_0 = value;
        return value
    },
    $4_0: null,
    get_columnName: function() { return this.$4_0 },
    set_columnName: function(value) {
        this.$4_0 = value;
        return value
    },
    $K_0: null,
    get_lookUpOTC: function() { return this.$K_0 },
    set_lookUpOTC: function(value) {
        this.$K_0 = value;
        return value
    },
    $J_0: null,
    get_imageColumn: function() { return this.$J_0 },
    set_imageColumn: function(value) {
        this.$J_0 = value;
        return value
    },
    $G_0: null,
    get_displayName: function() { return this.$G_0 },
    set_displayName: function(value) {
        this.$G_0 = value;
        return value
    },
    $I_0: 0,
    get_facetOrder: function() { return this.$I_0 },
    set_facetOrder: function(value) {
        this.$I_0 = value;
        return value
    }
};
Mscrm.ExternalSearchFilterRecord = function() {};
Mscrm.ExternalSearchFilterRecord.prototype = {
    $8_0: null,
    get_filter: function() { return this.$8_0 },
    set_filter: function(value) {
        this.$8_0 = value;
        return value
    },
    $5_0: false,
    get_isGlobal: function() { return this.$5_0 },
    set_isGlobal: function(value) {
        this.$5_0 = value;
        return value
    },
    $2_0: null,
    get_columnName: function() { return this.$2_0 },
    set_columnName: function(value) {
        this.$2_0 = value;
        return value
    },
    $7_0: 0,
    get_start: function() { return this.$7_0 },
    set_start: function(value) {
        this.$7_0 = value;
        return value
    },
    $6_0: 0,
    get_end: function() { return this.$6_0 },
    set_end: function(value) {
        this.$6_0 = value;
        return value
    },
    $M_0: 0,
    get_min: function() { return this.$M_0 },
    set_min: function(value) {
        this.$M_0 = value;
        return value
    },
    $L_0: 0,
    get_max: function() { return this.$L_0 },
    set_max: function(value) {
        this.$L_0 = value;
        return value
    },
    $N_0: 0,
    get_OTC: function() { return this.$N_0 },
    set_OTC: function(value) {
        this.$N_0 = value;
        return value
    },
    $1_0: null,
    get_columntype: function() { return this.$1_0 },
    set_columntype: function(value) {
        this.$1_0 = value;
        return value
    },
    $C_0: null,
    get_sliderRange: function() { return this.$C_0 },
    set_sliderRange: function(value) {
        this.$C_0 = value;
        return value
    },
    $O_0: null,
    get_sliderDisplayText: function() { return this.$O_0 },
    set_sliderDisplayText: function(value) {
        this.$O_0 = value;
        return value
    }
};
Mscrm.ExternalSearchDateTimeRecord = function() {};
Mscrm.ExternalSearchDateTimeRecord.prototype = {
    $2_0: null,
    get_columnName: function() { return this.$2_0 },
    set_columnName: function(value) {
        this.$2_0 = value;
        return value
    },
    $D_0: null,
    get_values: function() { return this.$D_0 },
    set_values: function(value) {
        this.$D_0 = value;
        return value
    }
};
Mscrm.ExternalSearchConstants = function() {};
Mscrm.ExternalSearch.registerClass("Mscrm.ExternalSearch");
Mscrm.ExternalSearchResult.registerClass("Mscrm.ExternalSearchResult");
Mscrm.ExternalSearchRecord.registerClass("Mscrm.ExternalSearchRecord");
Mscrm.ExternalSearchColumnResult.registerClass("Mscrm.ExternalSearchColumnResult");
Mscrm.ExternalSearchColumnRecord.registerClass("Mscrm.ExternalSearchColumnRecord");
Mscrm.ExternalSearchFilterRecord.registerClass("Mscrm.ExternalSearchFilterRecord");
Mscrm.ExternalSearchDateTimeRecord.registerClass("Mscrm.ExternalSearchDateTimeRecord");
Mscrm.ExternalSearchConstants.registerClass("Mscrm.ExternalSearchConstants");
Mscrm.ExternalSearch.$A = null;
Mscrm.ExternalSearch.$E = null;
Mscrm.ExternalSearch.$0 = null;
Mscrm.ExternalSearch.$9 = 0;
Mscrm.ExternalSearch.$B = "span";
Mscrm.ExternalSearch.$P = "div";
Mscrm.ExternalSearch.$T = false;
Mscrm.ExternalSearch.$Q = true;
Mscrm.ExternalSearch.externalSearchFilterList = [];
Mscrm.ExternalSearch.externalSearchDateTimeRecords = [];
Mscrm.ExternalSearch.processedJson = null;
Mscrm.ExternalSearch.unProcessedJsonValueLength = 0;
Mscrm.ExternalSearch.processedMasterJson = null;
Mscrm.ExternalSearch.skipBarChartColumnName = null;
Mscrm.ExternalSearch.entityRecordOpened = "";
Mscrm.ExternalSearch.searchCount = 0;
Mscrm.ExternalSearch.$$cctor();
Mscrm.ExternalSearchConstants.searchTextControl = "searchTextBox";
Mscrm.ExternalSearchConstants.searchCriteriaControl = "SearchCriteria";
Mscrm.ExternalSearchConstants.containerDivControl = "panoramaContainer";
Mscrm.ExternalSearchConstants.searchButton = "SearchButton";
Mscrm.ExternalSearchConstants.divBackColor = "white";
Mscrm.ExternalSearchConstants.searchCheckBox = "searchCheckBox";
Mscrm.ExternalSearchConstants.listTemplate = "<li id='{0}' title='{1}' tabindex='0'>{1}</li>";
Mscrm.ExternalSearchConstants
    .listAllRecordTemplate =
    "<li id='{0}' ><span class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover'></span>  <a href='#'  class='allrecords' onclick='return record_onclick({1})'>{2}</a></li>";
Mscrm.ExternalSearchConstants
    .listRecordTemplate =
    "<li id='{0}' title='{6}' class='listitemsforfacets'><span style={7} class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover' ><img src='{5}' alt='Entity Image' style='margin-left: -3px' class='ms-crm-IL-MenuItem-Icon ms-crm-IL-MenuItem-Icon-Hover facetsImage'></span><div class='entityNameFacets' {8}> <a  aria-label='Refine by {2} {3}' href='#' {4} {1} {7} style='font-weight: 400; color: #444;'>{2}</a></div><div class='entitycount'><span title = '{3}' {7}>({3})</span></div></li>";
Mscrm.ExternalSearchConstants
    .listShowMoreTemplate =
    "<li id='showMore{1}'  class='showmore_lessfacet'><a href='#' id ='RTSM{1}' role='link' aria-label='Show More Records' style='color:#0b0080; font-weight: 400;' {2}>{0}</a></li>";
Mscrm.ExternalSearchConstants
    .listShowLessTemplate =
    "<li id='showLess{1}' class='showmore_lessfacet' style='display:none;'><a href='#' role='link' aria-label='Show Fewer Records'  id ='RTSF{1}' style='color:#0b0080; font-weight: 400;' {2}>{0}</a></li>";
Mscrm.ExternalSearchConstants
    .checkBoxTemplate =
    "<li id='checkBoxContainer'><label><input style='margin-top : 1px;' type = 'checkbox' aria-label='{3}' id='searchCheckBox' class='includeActivitiesAndNotes' name='includeActivitiesAndNotes' {0} runat='server' onclick='return onCheckBoxClick({1});'>{2}</label></li>";
Mscrm.ExternalSearchConstants
    .recordTypeHeader = "<div class='facetsname_RecordOwnerCreatedModified'><span id = '{0}'>{1}</ span ></div>";
Mscrm.ExternalSearchConstants
    .listRecordTypeShowMoreTemplate =
    "<li id='{0}'   class='showmore_lessfacet'><a href='#' style='color:#0b0080; role='link' font-weight: 400;' aria-label='Show More Records' {1} >{2}</a></li>";
Mscrm.ExternalSearchConstants
    .listRecordTypeShowLessTemplate =
    "<li id='{0}'  class='showmore_lessfacet' style='display:none'><a href='#' style='color:#0b0080; role='link' font-weight: 400;' aria-label='Show Fewer Records' {1}>{2}</a></li>";
Mscrm.ExternalSearchConstants
    .listRecordTypeAutoCompleteTemplate = "<div class='ui-widget'><input id='autompleteRecordType_{0}'></div>";
Mscrm.ExternalSearchConstants.listRecordTemplateReset = "<li id='{0}' class='allrecords'><a href='#' {1}>{2}</a></li>";
Mscrm.ExternalSearchConstants.entityDivId = "entityDiv_";
Mscrm.ExternalSearchConstants.errorTemplateDiv = "errorTemplateDiv";
Mscrm.ExternalSearchConstants.globalQuickCreateActionType = "GlobalQuickCreateAction";
Mscrm.ExternalSearchConstants.imageColumnName = "entityimage_url";
Mscrm.ExternalSearchConstants.searchGroupConstantName = "Mobile Client Search";
Mscrm.ExternalSearchConstants.actionImagePath = "/_imgs/NavBar/ActionImgs/";
Mscrm.ExternalSearchConstants.entityTypeImagePath = "/_imgs/";
Mscrm.ExternalSearchConstants.commaSymbol = ",";
Mscrm.ExternalSearchConstants.semicolonWithSpace = " : ";
Mscrm.ExternalSearchConstants.windowHeightForScrollBars = 330;
Mscrm.ExternalSearchConstants.windowHeightForTileScrollBars = 600;
Mscrm.ExternalSearchConstants.windowHeightForTileZoomMinimum = 500;
Mscrm.ExternalSearchConstants.windowWidth = 940;
Mscrm.ExternalSearchConstants.windowWidthLeastSize = 600;
Mscrm.ExternalSearchConstants.totalRecordCountLimitExceededErrorCode = -2147164124;
Mscrm.ExternalSearchConstants.newRecordImage = "/_imgs/navbar/navbarglobalquickcreate_blue.png";
Mscrm.ExternalSearchConstants.newRecordHighContrastImage = "/_imgs/navbar/highcontrast/globalquickcreate_hc.png"