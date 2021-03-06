Type.registerNamespace("Mscrm");
Mscrm.MultiEntitySearchResult = function(entityLogicalName, error, count, entityColor, entityTheme, entitySymbol) {
    this._entityLogicalName = entityLogicalName;
    this._errorCode = error;
    this._resultCount = count;
    this._entityColor = entityColor;
    this._entityTheme = entityTheme;
    this._entitySymbol = entitySymbol
};
Mscrm.MultiEntitySearchResult.prototype = {
    _entityLogicalName: null,
    _entityDisplayName: null,
    _entityTypeCode: 0,
    _entityColor: null,
    _entityTheme: null,
    _entitySymbol: null,
    _resultCount: 0,
    _errorCode: 0,
    _isNewEnabled: false,
    _isQuickCreateEnabled: false,
    _isRefreshEnabled: false,
    _hasLocalizedAttributes: false,
    _records: null,
    get_entityLogicalName: function() { return this._entityLogicalName },
    get_entityDisplayName: function() { return this._entityDisplayName },
    set_entityDisplayName: function(value) {
        this._entityDisplayName = value;
        return value
    },
    get_entityColor: function() { return this._entityColor },
    get_entityTheme: function() { return this._entityTheme },
    get_entitySymbol: function() { return this._entitySymbol },
    get_resultCount: function() { return this._resultCount },
    get_entityTypeCode: function() { return this._entityTypeCode },
    set_entityTypeCode: function(value) {
        this._entityTypeCode = value;
        return value
    },
    get_errorCode: function() { return this._errorCode },
    get_isQuickCreateEnabled: function() { return this._isQuickCreateEnabled },
    set_isQuickCreateEnabled: function(value) {
        this._isQuickCreateEnabled = value;
        return value
    },
    get_isNewEnabled: function() { return this._isNewEnabled },
    set_isNewEnabled: function(value) {
        this._isNewEnabled = value;
        return value
    },
    get_isRefreshEnabled: function() { return this._isRefreshEnabled },
    set_isRefreshEnabled: function(value) {
        this._isRefreshEnabled = value;
        return value
    },
    get_hasLocalizedAttributes: function() { return this._hasLocalizedAttributes },
    set_hasLocalizedAttributes: function(value) {
        this._hasLocalizedAttributes = value;
        return value
    },
    get_records: function() { return this._records },
    set_records: function(value) {
        this._records = value;
        return value
    }
};
Mscrm.MeqfEntityRecord = function() {
    this._id = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._id = Microsoft.Crm.Client.Core.Framework.Guid.get_empty();
    this._attribute1 = "";
    this._attribute2 = "";
    this._attribute3 = "";
    this._entityImage = ""
};
Mscrm.MeqfEntityRecord.prototype = {
    _attribute1: "",
    _attribute2: "",
    _attribute3: "",
    _entityImage: "",
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
    get_id: function() { return this._id },
    set_id: function(value) {
        this._id = value;
        return value
    },
    get_entityImage: function() { return this._entityImage },
    set_entityImage: function(value) {
        this._entityImage = value;
        return value
    }
};
Mscrm.ErrorRecords = function(maxLimitExceedEntities) { this._maxLimitExceedEntities = maxLimitExceedEntities };
Mscrm.ErrorRecords.prototype = {
    _entitiesNotFound: "",
    _maxLimitExceedEntities: "",
    get_maxLimitExceedEntities: function() { return this._maxLimitExceedEntities },
    set_maxLimitExceedEntities: function(value) {
        this._maxLimitExceedEntities = value;
        return value
    }
};
Mscrm.MultiEntityQuickFindConstants = function() {};
Mscrm.MultiEntityQuickFind = function() {};
Mscrm.MultiEntityQuickFind.$$cctor = function() {
    Mscrm.MultiEntityQuickFind.$1 = null;
    Mscrm.PerceivedCommandBarHelper.hasPerceivedCommandBar() && Mscrm.PerceivedCommandBarHelper.switchCommandBars();
    $P_CRM(window).bind("unload", Mscrm.MultiEntityQuickFind.$P);
    $P_CRM(window).bind("click", Mscrm.MultiEntityQuickFind.$4);
    $P_CRM(window).bind("load", Mscrm.MultiEntityQuickFind.$M);
    $P_CRM(window).bind("resize", Mscrm.MultiEntityQuickFind.$e);
    $P_CRM(window).resize(Mscrm.MultiEntityQuickFind.$4)
};
Mscrm.MultiEntityQuickFind.$M = function($p0) {
    $addHandler(window.document.getElementById("mainContainer"), "mouseover", Mscrm.MultiEntityQuickFind.$N);
    var $v_0 = $P_CRM("#searchTextBox");
    window.setTimeout(function() { $v_0.focus() }, 0);
    var $v_1 = window.document.getElementById("searchTextBox");
    window.setTimeout(function() { Mscrm.MultiEntityQuickFind.$i($v_1) }, 0);
    Mscrm.MultiEntityQuickFind.$I();
    Mscrm.MultiEntityQuickFind.$H();
    XrmUI.Manager.XrmUIPage = new Mscrm.XrmUIPageWrapper("Search", null)
};
Mscrm.MultiEntityQuickFind.$i = function($p0) {
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var $v_0 = $p0.createTextRange();
        $v_0.moveStart("character", $p0.value.length);
        $v_0.collapse(false);
        $v_0.select()
    } else $p0.setSelectionRange($p0.value.length, $p0.value.length)
};
Mscrm.MultiEntityQuickFind.$e = function($p0) {
    Mscrm.MultiEntityQuickFind.$R();
    Mscrm.MultiEntityQuickFind.$H()
};
Mscrm.MultiEntityQuickFind.$R = function() {
    var $v_0 = $P_CRM(window).height(),
        $v_1 = $v_0 - 110,
        $v_2 = $P_CRM("#panoramaContainer"),
        $v_3 = $P_CRM(".scrollRegion"),
        $v_4 = $P_CRM(".panoramaItem");
    $v_2.css("height", $v_1 + "px");
    $v_4.css("height", $v_1 + "px");
    $v_3.css("height", $v_1 - 40 + "px")
};
Mscrm.MultiEntityQuickFind.$H = function() {
    var $v_0 = $P_CRM("#findCriteriaImg"), $v_1 = window.HighContrastEnabled;
    if (!IsNull($v_0) && !IsNull($v_0.attr("src")))
        if ($v_1) $v_0.attr("src", "/_imgs/navbar/highcontrast/search_hc_16.png");
        else $v_0.attr("src", window.CDNURL + "/_imgs/search_white_16.png")
};
Mscrm.MultiEntityQuickFind.$I = function() {
    var $v_0 = window.document.getElementById("mainContainer")._events.DOMMouseScroll;
    if (IsNull($v_0) || typeof $v_0 === "undefined" || !$v_0.length) {
        var $v_1 = window.document.getElementById("mainContainer");
        $addHandler($v_1, "DOMMouseScroll", Mscrm.MultiEntityQuickFind.$9);
        $addHandler($v_1, "mousewheel", Mscrm.MultiEntityQuickFind.$9);
        $P_CRM("#mainContainer").scroll(Mscrm.MultiEntityQuickFind.$4)
    }
};
Mscrm.MultiEntityQuickFind.$F = function() {
    var $v_0 = window.document.getElementById("mainContainer"),
        $v_1 = window.document.getElementById("mainContainer")._events.DOMMouseScroll;
    if (!IsNull($v_1) && typeof $v_1 !== "undefined") {
        $removeHandler($v_0, "DOMMouseScroll", Mscrm.MultiEntityQuickFind.$9);
        $removeHandler($v_0, "mousewheel", Mscrm.MultiEntityQuickFind.$9);
        $P_CRM("#mainContainer").unbind("scroll", Mscrm.MultiEntityQuickFind.$4)
    }
};
Mscrm.MultiEntityQuickFind.$P = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.MultiEntityQuickFind.$1)) {
        Mscrm.MultiEntityQuickFind.$1.unbind();
        Mscrm.MultiEntityQuickFind.$1.dispose()
    }
    Mscrm.MultiEntityQuickFind.$g();
    Mscrm.MultiEntityQuickFind.$h();
    Mscrm.MultiEntityQuickFind.$F();
    $P_CRM(window).unbind("unload", Mscrm.MultiEntityQuickFind.$P);
    $P_CRM(window).unbind("click", Mscrm.MultiEntityQuickFind.$4);
    $P_CRM(window).unbind("load", Mscrm.MultiEntityQuickFind.$M);
    $removeHandler(window.document.getElementById("mainContainer"), "mouseover", Mscrm.MultiEntityQuickFind.$N)
};
Mscrm.MultiEntityQuickFind.get_searchText = function() {
    var $v_0 = $get("searchTextBox").value;
    if (!isNullOrEmptyString($v_0)) return $v_0.toString();
    else return ""
};
Mscrm.MultiEntityQuickFind.validateSearchText = function() {
    if (isNullOrEmptyString(Mscrm.MultiEntityQuickFind.get_searchText())) return true;
    else return false
};
Mscrm.MultiEntityQuickFind.hidePanorama = function(isMaximumRecordsExceeded) {
    if (!IsNull($get("searchCriteria"))) {
        $get("searchCriteria").style.display = "block";
        if (!isMaximumRecordsExceeded) {
            $P_CRM("#panoramaContainer").css("display", "none");
            XUI.Html.SetText($get("searchCriteria"), window.LOCID_MEQF_MIN_CHARACTER_SEARCH)
        } else {
            $P_CRM("#panoramaContainer").css("Padding-top", "30px");
            XUI.Html.SetText($get("searchCriteria"), window.LOCID_MEQF_MAXRECORD_EXCEED)
        }
    }
};
Mscrm.MultiEntityQuickFind.showPanorama = function() {
    if (!IsNull($get("panoramaContainer"))) $get("panoramaContainer").style.display = "block";
    if (!IsNull($get("searchCriteria"))) $get("searchCriteria").style.display = "none";
    var $v_0 = $get("panoramaContainer");
    Mscrm.MultiEntityQuickFind.$f($v_0)
};
Mscrm.MultiEntityQuickFind.$f = function($p0) {
    var $v_0 = {};
    $v_0["id"] = "PanoramaContainer";
    $v_0["type"] = "panoramaContainer";
    Mscrm.Utilities.registerControlForXrmUI($p0, $v_0)
};
Mscrm.MultiEntityQuickFind
    .registerChildWithXrmUIControl = function(element, childControlId, childControlType, parentId) {
        var $v_0 = {};
        $v_0["id"] = childControlId;
        $v_0["type"] = childControlType;
        $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(element, $v_0)
    };
Mscrm.MultiEntityQuickFind.setFilterDropDownHeight = function() {
    var $v_0 = $P_CRM("#filterCombo");
    $v_0.css("height", "22px").css("vertical-align", "middle").css("font-size", "12px");
    Mscrm.MultiEntityQuickFind.$Z()
};
Mscrm.MultiEntityQuickFind.executeQuickFindSdkCall = function() {
    setPerfMarkerTimestamp("ExecuteQuickFindSdkCallStartLoad");
    Mscrm.MultiEntityQuickFind.showProgress();
    if (!Mscrm.MultiEntityQuickFind.validateSearchText()) {
        var $v_0 = "",
            $v_1 = "",
            $v_2 = new Array(1),
            $v_3 = $get("filterCombo"),
            $v_4 = $v_3.options[$v_3.selectedIndex];
        $v_0 = $v_4.value;
        $get("entityObjectTypeCode").value = $v_0;
        if (!isNullOrEmptyString($v_0) && Mscrm.MultiEntityQuickFind.$J.toString() !== $v_0) {
            $v_2[0] = Xrm.Internal.getEntityName(Number.parseInvariant($v_0));
            $v_1 = null
        } else {
            $v_1 = "Mobile Client Search";
            $v_2 = null
        }
        setPerfMarkerTimestamp("ExecuteQuickFindStartLoad");
        Xrm.Internal.messages.executeQuickFind(Mscrm.MultiEntityQuickFind.get_searchText(), $v_1, $v_2)
            .then(function($p1_0) {
                    setPerfMarkerTimestamp("ExecuteQuickFindEndLoad");
                    var $v_5 = 0, $v_6 = $p1_0.result;
                    if (!IsNull($v_6.get_resultsList())) {
                        setPerfMarkerTimestamp("GetEntitySummaryResultStartLoad");
                        $v_5 = Mscrm.MultiEntityQuickFind.$Y($v_6);
                        setPerfMarkerTimestamp("GetEntitySummaryResultEndLoad");
                        Mscrm.MultiEntityQuickFind.$j()
                    }
                    Mscrm.MultiEntityQuickFind.hideProgress();
                    if ($v_5 === 1) Mscrm.MultiEntityQuickFind.hidePanorama(false);
                    else if ($v_5 === 2) Mscrm.MultiEntityQuickFind.hidePanorama(true);
                    else Mscrm.MultiEntityQuickFind.showPanorama();
                    Mscrm.MultiEntityQuickFind.$R();
                    setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad")
                },
                function($p1_0) {
                    setPerfMarkerTimestamp("ExecuteQuickFindEndLoad");
                    setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad");
                    return
                })
    } else {
        var $v_7 = $P_CRM("#contentResult");
        $v_7.empty();
        Mscrm.MultiEntityQuickFind.hideProgress();
        setPerfMarkerTimestamp("ExecuteQuickFindSdkCallEndLoad")
    }
};
Mscrm.MultiEntityQuickFind.$Y = function($p0) {
    var $v_0 = [],
        $v_1 = "",
        $v_2 = null,
        $v_3 = "",
        $v_4,
        $v_5 = false,
        $v_6 = false,
        $v_7 = false,
        $v_8 = false,
        $v_9 = false,
        $v_A = "",
        $v_B = "",
        $v_C = 0,
        $v_D = 0,
        $v_E = 1,
        $v_F = Mscrm.MultiEntityQuickFind.$X($p0);
    if (!IsNull($v_F["entityInfoCollection"])) $v_1 = $v_F["entityInfoCollection"].toString();
    if (!IsNull($v_F["maxLimitExceedEntities"])) $v_E = 2;
    $v_C = $p0.get_resultsList().get_Count();
    for (var $v_G = 0; $v_G < $v_C; $v_G++) {
        $v_2 = $p0.get_resultsList().get_item($v_G);
        if (!IsNull($v_2) && !IsNull($v_2.get_data())) {
            Mscrm.MultiEntityQuickFind.$2 = null;
            $v_D = $v_2.get_data().get_count();
            if ($v_D > 0) {
                if ($v_E !== 2) $v_E = 0;
                $v_5 = false;
                $v_6 = false;
                $v_7 = false;
                $v_8 = false;
                $v_9 = false;
                $v_A = "";
                $v_B = "";
                $v_4 = Xrm.Internal.getEntityCode($v_2.get_entityLogicalName());
                var $$t_L,
                    $$t_M,
                    $$t_N,
                    $$t_O,
                    $$t_P,
                    $$t_Q,
                    $$t_R,
                    $$t_S,
                    $$t_T,
                    $v_H = ($$t_T = Mscrm.MultiEntityQuickFind
                        .getEntityQuickFindColumnCollection($v_1,
                            $v_4,
                            $$t_L = { val: $v_9 },
                            $$t_M = { val: $v_5 },
                            $$t_N = { val: $v_3 },
                            $$t_O = { val: $v_6 },
                            $$t_P = { val: $v_7 },
                            $$t_Q = { val: $v_A },
                            $$t_R = { val: $v_8 },
                            $$t_S = { val: $v_B }), $v_9 = $$t_L.val, $v_5 = $$t_M.val, $v_3 = $$t_N.val, $v_6 = $$t_O
                        .val, $v_7 = $$t_P.val, $v_A = $$t_Q.val, $v_8 = $$t_R.val, $v_B = $$t_S.val, $$t_T),
                    $v_I = new Mscrm
                        .MultiEntitySearchResult($v_2.get_entityLogicalName(),
                            $v_2.errorCode,
                            $v_D,
                            Mscrm.MultiEntityQuickFind.entityColor($v_4, $v_7, $v_B),
                            Mscrm.MultiEntityQuickFind.entityTheme($v_4, $v_7, $v_B),
                            Mscrm.MultiEntityQuickFind.entityImage($v_4, $v_A));
                $v_I._entityTypeCode = $v_4;
                $v_I._entityDisplayName = $v_3;
                $v_I._isQuickCreateEnabled = $v_5;
                $v_I._isNewEnabled = $v_9;
                $v_I._isRefreshEnabled = $v_6;
                $v_I._hasLocalizedAttributes = $v_8;
                $v_I._records = [];
                for (var $v_J = 0; $v_J < $v_D; $v_J++)
                    Array.add($v_I._records, Mscrm.MultiEntityQuickFind.$V($v_2.get_data().get_entities()[$v_J], $v_H));
                Array.add($v_0, $v_I)
            }
        }
    }
    Mscrm.MultiEntityQuickFind.parseTemplate($v_0);
    return $v_E
};
Mscrm.MultiEntityQuickFind.$X = function($p0) {
    var $v_0 = {}, $v_1 = "", $v_2 = "", $v_3 = null, $v_4 = 0, $v_5 = 0;
    $v_4 = $p0.get_resultsList().get_Count();
    for (var $v_6 = 0; $v_6 < $v_4; $v_6++) {
        $v_3 = $p0.get_resultsList().get_item($v_6);
        if (!IsNull($v_3) && !IsNull($v_3.get_data())) {
            var $v_7;
            $v_7 = Xrm.Internal.getEntityCode($v_3.get_entityLogicalName());
            Mscrm.MultiEntityQuickFind.$2 = null;
            $v_5 = $v_3.get_data().get_count();
            if ($v_5 > 0) $v_1 += $v_7 + ",";
            else if ($v_3.errorCode === -2147164124) $v_2 += $v_7 + ","
        }
    }
    if (!isNullOrEmptyString($v_1))
        $v_0["entityInfoCollection"] = CrmEncodeDecode
            .CrmXmlDecode(Mscrm.MultiEntityQuickFind
                .getQuickFindColumnCollectionForEntityArray($v_1.substring(0, $v_1.length - 1)));
    if (!isNullOrEmptyString($v_2))
        $v_0["maxLimitExceedEntities"] = Mscrm.MultiEntityQuickFind
            .getEntityCollectionName($v_2.substring(0, $v_2.length - 1));
    return $v_0
};
Mscrm.MultiEntityQuickFind.$j = function() {
    var $v_0 = window.top.Sys.Application.findComponent("crmPageManager");
    if (!IsNull($v_0)) {
        var $v_1 = {}, $v_2 = $get("filterCombo");
        $v_1["updateQueryString"] = String.format("text={0}&option={1}",
            CrmEncodeDecode.CrmUrlEncode(Mscrm.MultiEntityQuickFind.get_searchText()),
            CrmEncodeDecode.CrmUrlEncode($v_2.options[$v_2.selectedIndex].value));
        $v_0.raiseEvent(43, $v_1)
    }
};
Mscrm.MultiEntityQuickFind.showProgress = function() {
    $get("panoramaContainer").style.display = "none";
    $get("loadingdiv").style.display = "block";
    $get("InviteProgress").innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_PAGELOADING_MSG) + "&nbsp;"
};
Mscrm.MultiEntityQuickFind.hideProgress = function() {
    $get("loadingdiv").style.display = "none";
    $get("panoramaContainer").style.display = "block"
};
Mscrm.MultiEntityQuickFind.$V = function($p0, $p1) {
    var $v_0 = new Mscrm.MeqfEntityRecord;
    if (!IsNull($p0.get_identifier()) &&
        !IsNull($p0.get_identifier().Id) &&
        !IsNull($p0.get_identifier().Id.getObjectData())) $v_0._id = $p0.get_identifier().Id.getObjectData()["rawguid"];
    var $v_1 = 0;
    if ($p0.hasField("entityimage_url")) $v_0._entityImage = $p0.getValue("entityimage_url").toString();
    for (var $v_2 = 0; $v_2 < $p1.length; $v_2++) {
        var $v_3 = $p1[$v_2], $v_4 = $v_3.attributes.getNamedItem("name").nodeValue;
        switch ($v_1) {
        case 0:
            if ($p0.hasField($v_4))
                $v_0._attribute1 = CrmEncodeDecode.CrmHtmlEncode(Mscrm.MultiEntityQuickFind.$D($p0, $v_4));
            break;
        case 1:
            if ($p0.hasField($v_4))
                $v_0._attribute2 = CrmEncodeDecode.CrmHtmlEncode(Mscrm.MultiEntityQuickFind.$D($p0, $v_4));
            break;
        case 2:
            if ($p0.hasField($v_4))
                $v_0._attribute3 = CrmEncodeDecode.CrmHtmlEncode(Mscrm.MultiEntityQuickFind.$D($p0, $v_4));
            break;
        default:
            break
        }
        $v_1++
    }
    return $v_0
};
Mscrm.MultiEntityQuickFind.$D = function($p0, $p1) {
    if (!IsNull($p0)) {
        var $v_0 = $p0.getValue($p1);
        if ($v_0 && $v_0.Name) return $v_0.Name;
        var $v_1 = $p0.getValue($p1);
        if ($v_1 && !IsNull($v_1.value)) return $v_1.value.toString();
        if ($p0.getFormattedValue($p1)) return $p0.getFormattedValue($p1).toString();
        if ($p0.getValue($p1)) return $p0.getValue($p1).toString()
    }
    return ""
};
Mscrm.MultiEntityQuickFind.entityColor = function(entityTypeCode, isCustomEntity, entityTileColor) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityTileColor)) {
        var $v_1 = parseInt(entityTileColor.substr(1, entityTileColor.length - 1), 16),
            $v_2 = $v_1 >> 16,
            $v_3 = $v_1 >> 8 & 255,
            $v_4 = $v_1 & 255;
        return String.format("rgba({0},{1},{2},0.15)", $v_2, $v_3, $v_4)
    }
    if (isCustomEntity) return "rgba(0,133,106,0.15)";
    Mscrm.MultiEntityQuickFind.initializeEntityTypeToEntityColor();
    var $v_0 = "";
    $v_0 = Mscrm.MultiEntityQuickFind.$2[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return $v_0;
    return "rgba(85,85,85,0.15)"
};
Mscrm.MultiEntityQuickFind.initializeEntityTypeToEntityColor = function() {
    if (IsNull(Mscrm.MultiEntityQuickFind.$2)) {
        Mscrm.MultiEntityQuickFind.$2 = {};
        Mscrm.MultiEntityQuickFind.$2["1"] = "rgba(206, 114, 0, 0.15)";
        Mscrm.MultiEntityQuickFind.$2["2"] = "rgba(0,114,198,0.15)";
        Mscrm.MultiEntityQuickFind.$2["3"] = "rgba(62,114,57,0.15)";
        Mscrm.MultiEntityQuickFind.$2["4"] = "rgba(48,82,166,0.15)";
        Mscrm.MultiEntityQuickFind.$2["112"] = "rgba(122,39,143,0.15)"
    }
};
Mscrm.MultiEntityQuickFind.entityTheme = function(entityTypeCode, isCustomEntity, entityColor) {
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(entityColor)) return entityColor;
    if (isCustomEntity) return "#00856A";
    Mscrm.MultiEntityQuickFind.$a();
    var $v_0 = "";
    $v_0 = Mscrm.MultiEntityQuickFind.$3[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return $v_0;
    return "#636363"
};
Mscrm.MultiEntityQuickFind.$a = function() {
    if (!Mscrm.MultiEntityQuickFind.$3) {
        Mscrm.MultiEntityQuickFind.$3 = {};
        Mscrm.MultiEntityQuickFind.$3["1"] = "#CE7200";
        Mscrm.MultiEntityQuickFind.$3["2"] = "#0072C6";
        Mscrm.MultiEntityQuickFind.$3["3"] = "#3E7239";
        Mscrm.MultiEntityQuickFind.$3["4"] = "#3052A6";
        Mscrm.MultiEntityQuickFind.$3["112"] = "#7A278F"
    }
};
Mscrm.MultiEntityQuickFind.entityImage = function(entityTypeCode, iconPath) {
    var $v_0 = "";
    $v_0 = Mscrm.MultiEntityQuickFind.$0[entityTypeCode.toString()];
    if (!isNullOrEmptyString($v_0)) return "/_imgs/NavBar/ActionImgs/" + $v_0;
    else if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString(iconPath)) return iconPath;
    return "/_imgs/NavBar/ActionImgs/CustomEntity_32.png"
};
Mscrm.MultiEntityQuickFind.$Z = function() {
    if (!Mscrm.MultiEntityQuickFind.$0) {
        Mscrm.MultiEntityQuickFind.$0 = {};
        Mscrm.MultiEntityQuickFind.$0["1"] = "Account_32.png";
        Mscrm.MultiEntityQuickFind.$0["4200"] = "Activities_32.png";
        Mscrm.MultiEntityQuickFind.$0["4201"] = "Appointment_32.png";
        Mscrm.MultiEntityQuickFind.$0["4700"] = "BackgroundProcess_32.png";
        Mscrm.MultiEntityQuickFind.$0["4567"] = "Auditing_32.png";
        Mscrm.MultiEntityQuickFind.$0["4406"] = "QuickCampaign_32.png";
        Mscrm.MultiEntityQuickFind.$0["132"] = "Articles_32.png";
        Mscrm.MultiEntityQuickFind.$0["4003"] = "Calendar_32.png";
        Mscrm.MultiEntityQuickFind.$0["4400"] = "Campaign_32.png";
        Mscrm.MultiEntityQuickFind.$0["4401"] = "CampaignResponse_32.png";
        Mscrm.MultiEntityQuickFind.$0["4402"] = "CampaignActivity_32.png";
        Mscrm.MultiEntityQuickFind.$0["123"] = "Competitors_32.png";
        Mscrm.MultiEntityQuickFind.$0["3234"] = "Connections_32.png";
        Mscrm.MultiEntityQuickFind.$0["4007"] = "ResourceGroup_32.png";
        Mscrm.MultiEntityQuickFind.$0["2"] = "Contact_32.png";
        Mscrm.MultiEntityQuickFind.$0["1010"] = "Contract_32.png";
        Mscrm.MultiEntityQuickFind.$0["1011"] = "ContractLines_32.png";
        Mscrm.MultiEntityQuickFind.$0["1013"] = "Discount_32.png";
        Mscrm.MultiEntityQuickFind.$0["4202"] = "Email_32.png";
        Mscrm.MultiEntityQuickFind.$0["9700"] = "Entitlement_32.png";
        Mscrm.MultiEntityQuickFind.$0["4204"] = "Faxl_32.png";
        Mscrm.MultiEntityQuickFind.$0["1200"] = "FieldSecurityProfiles_32.png";
        Mscrm.MultiEntityQuickFind.$0["9600"] = "Goal_32.png";
        Mscrm.MultiEntityQuickFind.$0["9602"] = "RollupQueries_32.png";
        Mscrm.MultiEntityQuickFind.$0["112"] = "Cases_32.png";
        Mscrm.MultiEntityQuickFind.$0["1090"] = "Invoices_32.png";
        Mscrm.MultiEntityQuickFind.$0["127"] = "Articles_32.png";
        Mscrm.MultiEntityQuickFind.$0["9930"] = "KnowledgeBase_32.png";
        Mscrm.MultiEntityQuickFind.$0["4"] = "Lead_32.png";
        Mscrm.MultiEntityQuickFind.$0["4207"] = "Letter_32.png";
        Mscrm.MultiEntityQuickFind.$0["4300"] = "MarketingList_32.png";
        Mscrm.MultiEntityQuickFind.$0["9603"] = "GoalMetrics_32.png";
        Mscrm.MultiEntityQuickFind.$0["3"] = "Opportunity_32.png";
        Mscrm.MultiEntityQuickFind.$0["4210"] = "PhoneCall_32.png";
        Mscrm.MultiEntityQuickFind.$0["4710"] = "RealTimeProcess_32.png";
        Mscrm.MultiEntityQuickFind.$0["1024"] = "Products_32.png";
        Mscrm.MultiEntityQuickFind.$0["2020"] = "Queues_32.png";
        Mscrm.MultiEntityQuickFind.$0["2029"] = "Queues_32.png";
        Mscrm.MultiEntityQuickFind.$0["1084"] = "Quote_32.png";
        Mscrm.MultiEntityQuickFind.$0["4251"] = "RecurringAppointment_32.png";
        Mscrm.MultiEntityQuickFind.$0["9100"] = "Report_32.png";
        Mscrm.MultiEntityQuickFind.$0["1036"] = "SecurityRoles_32.png";
        Mscrm.MultiEntityQuickFind.$0["9604"] = "RollupQueries_32.png";
        Mscrm.MultiEntityQuickFind.$0["1038"] = "SalesLiterature_32.png";
        Mscrm.MultiEntityQuickFind.$0["1088"] = "Order_32.png";
        Mscrm.MultiEntityQuickFind.$0["4001"] = "Service_32.png";
        Mscrm.MultiEntityQuickFind.$0["4214"] = "ServiceAppointment_32.png";
        Mscrm.MultiEntityQuickFind.$0["9508"] = "Documents_32.png";
        Mscrm.MultiEntityQuickFind.$0["9507"] = "Documents_32.png";
        Mscrm.MultiEntityQuickFind.$0["99"] = "Social_Profile_32.png";
        Mscrm.MultiEntityQuickFind.$0["7100"] = "Solutions_32.png";
        Mscrm.MultiEntityQuickFind.$0["8"] = "User_32.png";
        Mscrm.MultiEntityQuickFind.$0["4212"] = "Task_32.png";
        Mscrm.MultiEntityQuickFind.$0["9"] = "Team_32.png";
        Mscrm.MultiEntityQuickFind.$0["2010"] = "Templates_32.png";
        Mscrm.MultiEntityQuickFind.$0["2013"] = "Territory_32.png";
        Mscrm.MultiEntityQuickFind.$0["9105"] = "Currency_32.png";
        Mscrm.MultiEntityQuickFind.$0["1031"] = "User_32.png";
        Mscrm.MultiEntityQuickFind.$0["150"] = "UserSettings_32.png";
        Mscrm.MultiEntityQuickFind.$0["4703"] = "Processes_32.png";
        Mscrm.MultiEntityQuickFind.$0["1025"] = "Bundle_White_32.png";
        Mscrm.MultiEntityQuickFind.$0["1028"] = "Relationships_White_32.png";
        Mscrm.MultiEntityQuickFind.$0["5"] = "Note_32.png"
    }
};
Mscrm.MultiEntityQuickFind
    .launchGlobalQuickCreate = function(entityLogicalName, entityDisplayName, quickFormEtc, isQuickCreateEnabled) {
        if (isQuickCreateEnabled && Xrm.Page.context.client.getClient() !== "Outlook") {
            var $v_0 = new window.top.Mscrm.NavStatusBarAnimationStrategy,
                $v_1 = new window.top.Mscrm.NavStatus("#navStatusArea", $v_0),
                $v_2 = {};
            $v_2["ActionType"] = "GlobalQuickCreateAction";
            $v_2["EntityTypeCode"] = quickFormEtc;
            $v_2["QuickCreateTimestamp"] = "";
            var $v_3 = new Mscrm.NavigationNode;
            $v_3.Caption = entityDisplayName;
            $v_3.NodeType = 1;
            $v_3.Action = $v_2;
            var $v_4 = window.top.Sys.Application.findComponent("navBar"), $v_5 = {};
            $v_5["isFromMEQF"] = true;
            var $v_6 = new window.top.Mscrm
                .NavBarGlobalQuickCreateCallbacks("NavBarGloablQuickCreate", $v_1, $v_3, $v_4);
            window.top.Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior
                .launchGlobalQuickCreate($v_6,
                    entityDisplayName,
                    quickFormEtc,
                    null,
                    null,
                    quickFormEtc,
                    Mscrm.MultiEntityQuickFind.get_searchText(),
                    null,
                    null,
                    $v_5)
        } else if (quickFormEtc === 4200) {
            Mscrm.MultiEntityQuickFind.$C = $P_CRM("#newRecord_" + entityLogicalName.trim());
            if (IsNull(Mscrm.MultiEntityQuickFind.$1)) {
                Mscrm.MultiEntityQuickFind.$1 = new Mscrm.FlyOutDialog;
                var $v_7 = Mscrm.MultiEntityQuickFind.$W(), $v_8 = $P_CRM($v_7);
                Mscrm.MultiEntityQuickFind.$1.setContent($v_8);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_width(173);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_height(114);
                Mscrm.MultiEntityQuickFind.$1.set_position("bottom");
                Mscrm.MultiEntityQuickFind.$1.get_options().set_showCloseButton(false);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_showButtonPane(false);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_closeOnEscape(true);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_applyAnchorClassChange(false);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_modal(false);
                Mscrm.MultiEntityQuickFind.$1.get_options().set_letjQueryHandleTabbing(true);
                Mscrm.MultiEntityQuickFind.$1.set_shouldDisposeContent(true);
                Mscrm.MultiEntityQuickFind.$U()
            }
            Mscrm.MultiEntityQuickFind.$1.show(Mscrm.MultiEntityQuickFind.$C)
        } else Mscrm.MultiEntityQuickFind.$8(entityLogicalName)
    };
Mscrm.MultiEntityQuickFind.$8 = function($p0) {
    var $v_0 = {};
    $v_0["isFromMEQF"] = true;
    $v_0["_searchText"] = null;
    Xrm.Utility.openEntityForm($p0, null, $v_0)
};
Mscrm.MultiEntityQuickFind.$W = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append("<div id='MEQFActivitiesFlyout' class='flyoutDiv'> <ul id='ActivitiesFlyout'>");
    $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
        "Task",
        CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MEQF_TASK)));
    $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
        "PhoneCall",
        CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MEQF_PHONECALL)));
    $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
        "Email",
        CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MEQF_EMAIL)));
    $v_0.append(String.format("<li id='{0}' title='{1}' tabindex='0'>{1}</li>",
        "Appointment",
        CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MEQF_APPOINTMENT)));
    $v_0.append("</ul></div>");
    return $v_0.toString()
};
Mscrm.MultiEntityQuickFind.$4 = function($p0) {
    if (!Mscrm.InternalUtilities.JSTypes.isNull(Mscrm.MultiEntityQuickFind.$1)) {
        Mscrm.MultiEntityQuickFind.$1.unbind();
        Mscrm.MultiEntityQuickFind.$1.hide()
    }
};
Mscrm.MultiEntityQuickFind.$U = function() {
    Mscrm.MultiEntityQuickFind.$6 = $P_CRM("#ActivitiesFlyout");
    Mscrm.MultiEntityQuickFind.$6.click(Mscrm.MultiEntityQuickFind.$Q);
    Mscrm.MultiEntityQuickFind.$6.keydown(Mscrm.MultiEntityQuickFind.$d);
    Mscrm.MultiEntityQuickFind.$6.mouseover(Mscrm.MultiEntityQuickFind.$c);
    Mscrm.MultiEntityQuickFind.$6.mouseout(Mscrm.MultiEntityQuickFind.$b)
};
Mscrm.MultiEntityQuickFind.$Q = function($p0) {
    switch ($p0.target.id.toString()) {
    case "PhoneCall":
        Mscrm.MultiEntityQuickFind.$8("phonecall");
        break;
    case "Task":
        Mscrm.MultiEntityQuickFind.$8("task");
        break;
    case "Email":
        Mscrm.MultiEntityQuickFind.$8("email");
        break;
    case "Appointment":
        Mscrm.MultiEntityQuickFind.$8("appointment");
        break
    }
    $p0.preventDefault();
    $p0.stopImmediatePropagation()
};
Mscrm.MultiEntityQuickFind.$c = function($p0) {
    switch ($p0.target.id.toString()) {
    case "PhoneCall":
        $P_CRM("#PhoneCall").removeClass("flyoutItemOnMouseOut").addClass("flyoutItemOnMouseOver");
        break;
    case "Task":
        $P_CRM("#Task").removeClass("flyoutItemOnMouseOut").addClass("flyoutItemOnMouseOver");
        break;
    case "Email":
        $P_CRM("#Email").removeClass("flyoutItemOnMouseOut").addClass("flyoutItemOnMouseOver");
        break;
    case "Appointment":
        $P_CRM("#Appointment").removeClass("flyoutItemOnMouseOut").addClass("flyoutItemOnMouseOver");
        break
    }
    $p0.preventDefault();
    $p0.stopImmediatePropagation()
};
Mscrm.MultiEntityQuickFind.$b = function($p0) {
    switch ($p0.target.id.toString()) {
    case "PhoneCall":
        $P_CRM("#PhoneCall").removeClass("flyoutItemOnMouseOver").addClass("flyoutItemOnMouseOut");
        break;
    case "Task":
        $P_CRM("#Task").removeClass("flyoutItemOnMouseOver").addClass("flyoutItemOnMouseOut");
        break;
    case "Email":
        $P_CRM("#Email").removeClass("flyoutItemOnMouseOver").addClass("flyoutItemOnMouseOut");
        break;
    case "Appointment":
        $P_CRM("#Appointment").removeClass("flyoutItemOnMouseOver").addClass("flyoutItemOnMouseOut");
        break
    }
    $p0.preventDefault();
    $p0.stopImmediatePropagation()
};
Mscrm.MultiEntityQuickFind.parseTemplate = function(jsonObject) {
    if (!IsNull(jsonObject)) {
        var $v_0 = $P_CRM("#contentTemplate"), $v_1 = $P_CRM("#contentResult");
        $v_1.empty();
        var $v_2 = $v_0;
        $v_1.append($v_2.tmpl(jsonObject));
        Mscrm.MultiEntityQuickFind.$S($v_1);
        Mscrm.MultiEntityQuickFind.$T($v_1);
        Mscrm.MultiEntityQuickFind.$G("#attribone", $v_1);
        Mscrm.MultiEntityQuickFind.$G("#attribtwo", $v_1);
        Mscrm.MultiEntityQuickFind.$G("#attribthree", $v_1)
    }
};
Mscrm.MultiEntityQuickFind.$S = function($p0) {
    var $v_0 = $p0.children().find("#entityName"),
        $v_1 = $p0.children().find("#entityLogicalName"),
        $v_2 = $p0.children().find("#entityTypeCode"),
        $v_3 = $p0.children().find("#isNewEnabled"),
        $v_4 = $p0.children().find("#isQuickCreateEnabled"),
        $v_5 = $p0.children().find("#isRefreshEnabled"),
        $v_6 = $p0.children().find("#hasLocalizedAttributes"),
        $v_7 = window.HighContrastEnabled;
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_4))
        for (var $v_8 = 0; $v_8 < $v_0.length; $v_8++) {
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0[$v_8].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_8].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2[$v_8].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_4[$v_8].innerHTML)) {
                var $v_9 = $p0.children().find("#newRecord_" + $v_1[$v_8].innerHTML.toString().trim()),
                    $v_A = $get($v_9.attr("ID")),
                    $v_B = $p0.children().find("#newRecord_" + $v_1[$v_8].innerHTML.toString().trim() + "_img"),
                    $v_C = $get($v_B.attr("ID"));
                if (!IsNull($v_A))
                    if (!Boolean.parse($v_3[$v_8].innerHTML.trim()) ||
                        !(Boolean.parse($v_4[$v_8].innerHTML.trim()) ||
                            Boolean.parse($v_5[$v_8].innerHTML.trim()) ||
                            Number.parseInvariant($v_2[$v_8].innerHTML.toString().trim()) === 4200) ||
                        Mscrm.MultiEntityQuickFind.isSocialProfile($v_1[$v_8]) ||
                        Boolean.parse($v_6[$v_8].innerHTML
                            .trim()) &&
                        !Mscrm.Utilities.isUserUsingBaseLanguage()) $v_A.style.display = "none";
                    else {
                        $v_C.setAttribute("src",
                            $v_7
                            ? "/_imgs/navbar/highcontrast/globalquickcreate_hc.png"
                            : "/_imgs/navbar/navbarglobalquickcreate_blue.png");
                        $v_A.setAttribute("title",
                            window.LOCID_MEQF_ADD +
                            " " +
                            $v_0[$v_8].innerHTML.toString().trim() +
                            " " +
                            window.LOCID_MEQF_RECORD);
                        $v_A.setAttribute("entityDisplayName",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_0[$v_8].innerHTML.toString().trim()));
                        $v_A.setAttribute("entityLogicalName",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_1[$v_8].innerHTML.toString().trim()));
                        $v_A.setAttribute("entityTypeCode",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_2[$v_8].innerHTML.toString().trim()));
                        $v_A.setAttribute("isQuickCreateEnabled",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_4[$v_8].innerHTML.trim()));
                        $v_A.setAttribute("isNewEnabled",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_3[$v_8].innerHTML.trim()));
                        $v_A.setAttribute("isRefreshEnabled",
                            CrmEncodeDecode.CrmHtmlAttributeEncode($v_5[$v_8].innerHTML.trim()));
                        $v_9.bind("click", Mscrm.MultiEntityQuickFind.$4);
                        $addHandler($v_A, "click", Mscrm.MultiEntityQuickFind.$K)
                    }
            }
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_8].innerHTML)) {
                var $v_D = $p0.children().find(Mscrm.MultiEntityQuickFind.$7 +
                        "#scrollbarRegion_" +
                        $v_1[$v_8].innerHTML.toString().trim()),
                    $v_E = $get($v_D.attr("ID"));
                if (!IsNull($v_E)) {
                    var $v_F = Xrm.Page.context.client.getClient() === "Mobile";
                    if (window.UseTabletExperience ||
                        Mscrm.CrmBrowser.get_currentBrowser().get_isTouchEnabled() ||
                        $v_F ||
                        Mscrm.Utilities.isEdge()) $v_E.className = $v_E.className + " meqfVerticalScrollDevice";
                    $addHandler($v_E, "mouseover", Mscrm.MultiEntityQuickFind.$O)
                }
            }
        }
};
Mscrm.MultiEntityQuickFind.$K = function($p0) {
    var $v_0 = $p0.rawEvent.currentTarget;
    Mscrm.MultiEntityQuickFind.launchGlobalQuickCreate(CrmEncodeDecode
        .CrmHtmlDecode($v_0.getAttribute("entityLogicalName").toString()),
        CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityDisplayName").toString()),
        Number.parseInvariant(CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityTypeCode").toString())),
        Boolean.parse(CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("isQuickCreateEnabled").toString())));
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$T = function($p0) {
    var $v_0 = $p0.children().find(Mscrm.MultiEntityQuickFind.$5 + "#entityRecordTypeCode"),
        $v_1 = $p0.children().find(Mscrm.MultiEntityQuickFind.$5 + "#entityId"),
        $v_2 = $p0.children().find(Mscrm.MultiEntityQuickFind.$5 + "#entityColor");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_1) &&
        !Mscrm.InternalUtilities.JSTypes.isNull($v_2))
        for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
            if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_3].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_0[$v_3].innerHTML) &&
                !Mscrm.InternalUtilities.JSTypes.isNull($v_2[$v_3].innerHTML)) {
                var $v_4 = $p0.children().find(Mscrm.MultiEntityQuickFind.$7 +
                        "#Record_" +
                        $v_0[$v_3].innerHTML.toString().trim() +
                        "_" +
                        $v_1[$v_3].innerHTML.toString().trim()),
                    $v_5 = $get($v_4.attr("ID"));
                Mscrm.MultiEntityQuickFind
                    .registerChildWithXrmUIControl($v_5, "listItem", "ListItem", "panoramaContainer");
                if (!IsNull($v_5)) {
                    $v_5.setAttribute("entityRecordTypeCode",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_0[$v_3].innerHTML.toString().trim()));
                    $v_5.setAttribute("entityId",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_1[$v_3].innerHTML.toString().trim()));
                    $v_5.setAttribute("entityColor",
                        CrmEncodeDecode.CrmHtmlAttributeEncode($v_2[$v_3].innerHTML.toString().trim()));
                    $addHandler($v_5, "click", Mscrm.MultiEntityQuickFind.$E);
                    $addHandler($v_5, "mouseover", Mscrm.MultiEntityQuickFind.$B);
                    $addHandler($v_5, "mouseout", Mscrm.MultiEntityQuickFind.$A);
                    $addHandler($v_5, "focus", Mscrm.MultiEntityQuickFind.$B);
                    $addHandler($v_5, "blur", Mscrm.MultiEntityQuickFind.$A);
                    $addHandler($v_5, "keydown", Mscrm.MultiEntityQuickFind.$L)
                }
            }
};
Mscrm.MultiEntityQuickFind.$E = function($p0) {
    var $v_0 = $p0.rawEvent.currentTarget, $v_1 = "";
    if (!IsNull($v_0) &&
        !IsNull($v_0.getAttribute("entityRecordTypeCode")) &&
        $v_0.getAttribute("entityRecordTypeCode").toString() === "4200") {
        if (!IsNull($v_0.getAttribute("entityId")))
            $v_1 = Mscrm.MultiEntityQuickFind
                .getActivitySpecificObjectTypeCode($v_0.getAttribute("entityId").toString());
        !isNullOrEmptyString($v_1) &&
            openObj(Number.parseInvariant(CrmEncodeDecode.CrmHtmlDecode($v_1)),
                CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityId").toString()),
                "")
    } else
        !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getAttribute("entityRecordTypeCode")) &&
            !Mscrm.InternalUtilities.JSTypes.isNull($v_0.getAttribute("entityId")) &&
            openObj(Number.parseInvariant(CrmEncodeDecode
                    .CrmHtmlDecode($v_0.getAttribute("entityRecordTypeCode").toString())),
                CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("entityId").toString()),
                "");
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$B = function($p0) {
    try {
        var $v_0 = $P_CRM(".mainContainer");
        $v_0.find(".listItem").css("background-color", "white");
        var $v_1 = $p0.rawEvent.currentTarget;
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1.getAttribute("entityColor"))) {
            $v_1.style.backgroundColor = CrmEncodeDecode.CrmHtmlDecode($v_1.getAttribute("entityColor").toString());
            $p0.preventDefault();
            $p0.stopPropagation()
        }
        Mscrm.MultiEntityQuickFind.$F()
    } catch ($$e_3) {
    }
};
Mscrm.MultiEntityQuickFind.$O = function($p0) {
    Mscrm.MultiEntityQuickFind.$F();
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$N = function($p0) {
    Mscrm.MultiEntityQuickFind.$I();
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$9 = function($p0) {
    var $v_0 = $p0.rawEvent.wheelDelta, $v_1 = $p0.rawEvent.detail, $v_2 = $p0.rawEvent.currentTarget;
    if (Mscrm.Utilities.isFirefox()) $v_2.scrollLeft = $v_2.scrollLeft + $v_1 * 120;
    else $v_2.scrollLeft = $v_2.scrollLeft - $v_0;
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$L = function($p0) {
    $p0.keyCode === 13 && Mscrm.MultiEntityQuickFind.$E($p0);
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
Mscrm.MultiEntityQuickFind.$d = function($p0) {
    var $v_0 = $p0.which;
    $v_0 === 13 && Mscrm.MultiEntityQuickFind.$Q($p0)
};
Mscrm.MultiEntityQuickFind.$A = function($p0) {
    var $v_0 = $p0.rawEvent.currentTarget;
    $v_0.style.backgroundColor = "white";
    XUI.Html.SetOpacity($v_0, 1);
    $p0.preventDefault();
    $p0.stopPropagation()
};
Mscrm.MultiEntityQuickFind.$g = function() {
    var $v_0 = $P_CRM("#contentResult");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.children().find("#entityName"), $v_2 = $v_0.children().find("#entityLogicalName");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1) && !Mscrm.InternalUtilities.JSTypes.isNull($v_2))
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_2[$v_3].innerHTML)) {
                    var $v_4 = $v_0.children().find("#newRecord_" + $v_2[$v_3].innerHTML.toString().trim()),
                        $v_5 = $get($v_4.attr("ID"));
                    if (!IsNull($v_5) && $v_5.style.display !== "none") {
                        $v_4.unbind("click", Mscrm.MultiEntityQuickFind.$4);
                        $removeHandler($v_5, "click", Mscrm.MultiEntityQuickFind.$K)
                    }
                    var $v_6 = $v_0.children().find(Mscrm.MultiEntityQuickFind.$7 +
                            "#scrollbarRegion_" +
                            $v_2[$v_3].innerHTML.toString().trim()),
                        $v_7 = $get($v_6.attr("ID"));
                    !IsNull($v_7) && $removeHandler($v_7, "mouseover", Mscrm.MultiEntityQuickFind.$O)
                }
    }
};
Mscrm.MultiEntityQuickFind.$h = function() {
    var $v_0 = $P_CRM("#contentResult");
    if (!Mscrm.InternalUtilities.JSTypes.isNull($v_0)) {
        var $v_1 = $v_0.find(Mscrm.MultiEntityQuickFind.$5 + "#entityId"),
            $v_2 = $v_0.find(Mscrm.MultiEntityQuickFind.$5 + "#entityRecordTypeCode");
        if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1))
            for (var $v_3 = 0; $v_3 < $v_1.length; $v_3++)
                if (!Mscrm.InternalUtilities.JSTypes.isNull($v_1[$v_3].innerHTML)) {
                    var $v_4 = $v_0.find(Mscrm.MultiEntityQuickFind.$7 +
                            "#Record_" +
                            $v_2[$v_3].innerHTML.toString().trim() +
                            "_" +
                            $v_1[$v_3].innerHTML.toString().trim()),
                        $v_5 = $get($v_4.attr("ID"));
                    if (!IsNull($v_5)) {
                        $removeHandler($v_5, "click", Mscrm.MultiEntityQuickFind.$E);
                        $removeHandler($v_5, "mouseover", Mscrm.MultiEntityQuickFind.$B);
                        $removeHandler($v_5, "mouseout", Mscrm.MultiEntityQuickFind.$A);
                        $removeHandler($v_5, "focus", Mscrm.MultiEntityQuickFind.$B);
                        $removeHandler($v_5, "blur", Mscrm.MultiEntityQuickFind.$A);
                        $removeHandler($v_5, "keydown", Mscrm.MultiEntityQuickFind.$L)
                    }
                }
    }
};
Mscrm.MultiEntityQuickFind.$G = function($p0, $p1) {
    for (var $v_0 = $p1.find(Mscrm.MultiEntityQuickFind
                 .$5 +
                 $p0),
        $v_1 = 0;
        $v_1 < $v_0.length;
        $v_1++)
        if (isNullOrEmptyString($v_0[$v_1].innerHTML))
            $v_0[$v_1].innerHTML = CrmEncodeDecode.CrmHtmlEncode(window.LOCID_MEQF_ATTRIBUTE_DEFAULT)
};
Mscrm.MultiEntityQuickFind.setSelectedEntityName = function() {
    var $v_0 = "", $v_1 = 0;
    $v_0 = $get("entityObjectTypeCode").value;
    if (!Mscrm.InternalUtilities.JSTypes.isNullOrEmptyString($v_0))
        for (var $v_2 = 0; $v_2 < $get("filterCombo").options.length; $v_2++)
            if ($v_0 === $get("filterCombo").options[$v_2].attributes.getNamedItem("value").value.toString()) {
                $v_1 = $v_2;
                break
            }
    $get("filterCombo").selectedIndex = $v_1
};
Mscrm.MultiEntityQuickFind.getActivitySpecificObjectTypeCode = function(entityId) {
    var $v_0 = null;
    if (entityId) {
        var $v_1 = new RemoteCommand("CustomerService", "GetActivitySpecificTypeCode");
        $v_1.SetParameter("entityId", entityId);
        var $v_2 = $v_1.Execute();
        if ($v_2.Success) $v_0 = $v_2.ReturnValue
    }
    return $v_0
};
Mscrm.MultiEntityQuickFind.getEntityCollectionName = function(entityTypeCode) {
    var $v_0 = new RemoteCommand("CustomerService", "GetEntityCollectionName");
    $v_0.SetParameter("entityCodes", entityTypeCode);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success)
        if (!$v_1.ReturnValue) return null;
        else return $v_1.ReturnValue;
    else return null
};
Mscrm.MultiEntityQuickFind.getQuickFindColumnCollectionForEntityArray = function(entityTypeCodes) {
    var $v_0 = new RemoteCommand("CustomerService", "GetQuickFindColumnCollectionForEntityArray");
    $v_0.SetParameter("entityCodes", entityTypeCodes);
    var $v_1 = $v_0.Execute();
    if ($v_1.Success) return $v_1.ReturnValue;
    else return null
};
Mscrm.MultiEntityQuickFind
    .getEntityQuickFindColumnCollection = function(xmlValue,
        entityCode,
        isNewEnabled,
        isQuickCreateEnabled,
        entityDisplayName,
        isRefreshEnabled,
        isCustomEntity,
        iconPath,
        hasLocalizedAttributes,
        entityColor) {
        for (var $v_0 = XUI.Xml.LoadXml(xmlValue),
            $v_1 = XUI.Xml.SelectNodes($v_0, "EntityInfoCollection/EntityInfo", null),
            $v_2 = null,
            $v_3 = 0;
            $v_3 < $v_1.length;
            $v_3++)
            if (Number.parseInvariant($v_1[$v_3].attributes.getNamedItem("EntityCode").nodeValue) === entityCode) {
                isQuickCreateEnabled.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("IsQuickCreateEnabled")
                    .nodeValue);
                entityDisplayName.val = $v_1[$v_3].attributes.getNamedItem("EntityDisplayName").nodeValue;
                isRefreshEnabled.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("IsRefreshEnabled").nodeValue);
                isCustomEntity.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("IsCustomEntity").nodeValue);
                hasLocalizedAttributes.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("HasLocalizedAttributes")
                    .nodeValue);
                isNewEnabled.val = Boolean.parse($v_1[$v_3].attributes.getNamedItem("IsNewEnabled").nodeValue);
                iconPath.val = $v_1[$v_3].attributes.getNamedItem("icon").nodeValue;
                entityColor.val = $v_1[$v_3].attributes.getNamedItem("EntityColor").nodeValue;
                var $v_4 = XUI.Xml.LoadXml(XUI.Xml.XMLSerializer.serializeToString($v_1[$v_3]));
                $v_2 = XUI.Xml.SelectNodes($v_4, "EntityInfo/grid/row/cell", null)
            }
        return $v_2
    };
Mscrm.MultiEntityQuickFind.isSocialProfile = function(element) {
    var $v_0 = false;
    if (!isNullOrEmptyString(element.innerHTML))
        $v_0 = Xrm.Internal.getEntityCode(element.innerHTML.toString().trim()).toString() === "99";
    return $v_0
};
Mscrm.MultiEntityQuickFind
    .metricsReportingForSearchDropDown = function(SearchOptionSelected) {
        Mscrm.MetricsReporting.instance().addMetric("ExternalSearch",
        {
            ExterSearchSwitchDateTime: Mscrm.DateTimeUtility.localDateTimeNow(),
            searchText: Mscrm.MultiEntityQuickFind.get_searchText()
        })
    };
Mscrm.MultiEntitySearchResult.registerClass("Mscrm.MultiEntitySearchResult");
Mscrm.MeqfEntityRecord.registerClass("Mscrm.MeqfEntityRecord");
Mscrm.ErrorRecords.registerClass("Mscrm.ErrorRecords");
Mscrm.MultiEntityQuickFindConstants.registerClass("Mscrm.MultiEntityQuickFindConstants");
Mscrm.MultiEntityQuickFind.registerClass("Mscrm.MultiEntityQuickFind");
Mscrm.MultiEntityQuickFindConstants.searchTextControl = "searchTextBox";
Mscrm.MultiEntityQuickFindConstants.searchCriteriaControl = "SearchCriteria";
Mscrm.MultiEntityQuickFindConstants.containerDivControl = "panoramaContainer";
Mscrm.MultiEntityQuickFindConstants.searchButton = "SearchButton";
Mscrm.MultiEntityQuickFindConstants.filterWithDropDown = "filterCombo";
Mscrm.MultiEntityQuickFindConstants.divBackColor = "white";
Mscrm.MultiEntityQuickFindConstants.flyOutWidth = 173;
Mscrm.MultiEntityQuickFindConstants.flyOutHeight = 114;
Mscrm.MultiEntityQuickFindConstants.flyOutOffset = 40;
Mscrm.MultiEntityQuickFindConstants.listTemplate = "<li id='{0}' title='{1}' tabindex='0'>{1}</li>";
Mscrm.MultiEntityQuickFindConstants.moreActivityListSelector = "#ActivitiesFlyout";
Mscrm.MultiEntityQuickFindConstants.activityPhoneCall = "PhoneCall";
Mscrm.MultiEntityQuickFindConstants.activityTask = "Task";
Mscrm.MultiEntityQuickFindConstants.activityEmail = "Email";
Mscrm.MultiEntityQuickFindConstants.activityAppointment = "Appointment";
Mscrm.MultiEntityQuickFindConstants.entityDivId = "entityDiv_";
Mscrm.MultiEntityQuickFindConstants.errorTemplateDiv = "errorTemplateDiv";
Mscrm.MultiEntityQuickFindConstants.globalQuickCreateActionType = "GlobalQuickCreateAction";
Mscrm.MultiEntityQuickFindConstants.imageColumnName = "entityimage_url";
Mscrm.MultiEntityQuickFindConstants.searchGroupConstantName = "Mobile Client Search";
Mscrm.MultiEntityQuickFindConstants.actionImagePath = "/_imgs/NavBar/ActionImgs/";
Mscrm.MultiEntityQuickFindConstants.commaSymbol = ",";
Mscrm.MultiEntityQuickFindConstants.semicolonWithSpace = " : ";
Mscrm.MultiEntityQuickFindConstants.windowHeightForScrollBars = 330;
Mscrm.MultiEntityQuickFindConstants.windowHeightForTileScrollBars = 600;
Mscrm.MultiEntityQuickFindConstants.windowHeightForTileZoomMinimum = 500;
Mscrm.MultiEntityQuickFindConstants.windowWidth = 940;
Mscrm.MultiEntityQuickFindConstants.windowWidthLeastSize = 600;
Mscrm.MultiEntityQuickFindConstants.totalRecordCountLimitExceededErrorCode = -2147164124;
Mscrm.MultiEntityQuickFindConstants.newRecordImage = "/_imgs/navbar/navbarglobalquickcreate_blue.png";
Mscrm.MultiEntityQuickFindConstants.newRecordHighContrastImage = "/_imgs/navbar/highcontrast/globalquickcreate_hc.png";
Mscrm.MultiEntityQuickFind.$1 = null;
Mscrm.MultiEntityQuickFind.$C = null;
Mscrm.MultiEntityQuickFind.$2 = null;
Mscrm.MultiEntityQuickFind.$3 = null;
Mscrm.MultiEntityQuickFind.$0 = null;
Mscrm.MultiEntityQuickFind.$6 = null;
Mscrm.MultiEntityQuickFind.$J = 0;
Mscrm.MultiEntityQuickFind.$5 = "span";
Mscrm.MultiEntityQuickFind.$7 = "div";
Mscrm.MultiEntityQuickFind.$$cctor()