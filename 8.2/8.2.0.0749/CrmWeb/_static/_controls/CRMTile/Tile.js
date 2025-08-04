Type.registerNamespace("Mscrm");
Mscrm.IDataProvider = function() {};
Mscrm.IDataProvider.registerInterface("Mscrm.IDataProvider");
Mscrm.ITile = function() {};
Mscrm.ITile.registerInterface("Mscrm.ITile");
Mscrm.TileDataProvider = function(dataManager) { this.$6_0 = dataManager };
Mscrm.TileDataProvider.prototype = {
    $6_0: null,
    getData: function(recordId) {
        var $v_0 = this.$6_0.getData(recordId.toUpperCase());
        return $v_0.get_attributes()
    }
};
Mscrm.CrmTile = function(crmTileOptions) {
    this.$7_0 = [];
    this.$2_0 = crmTileOptions;
    if (!IsNull(crmTileOptions.data)) this.$1_0 = this.$2_0.data;
    else if (!IsNull(this.$2_0.tileDataProviderObject))
        this.$1_0 = this.$2_0.tileDataProviderObject.getData(crmTileOptions.recordId);
    Mscrm.Utilities.fixCurrencyValue(this.$1_0)
};
Mscrm.CrmTile.prototype = {
    $2_0: null,
    $5_0: null,
    $1_0: null,
    $0_0: null,
    get_$4_0: function() { return window.LOCID_UI_DIR === "RTL" },
    $D_0: function($p0) {
        var $v_0 = new CrmJQueryWidget.TileWidgetOptions;
        $v_0.isFocusTile = this.$2_0.isFocusTile;
        var $v_1 = Mscrm.CrmUri.create(this.$2_0.formLayOutUrl);
        $v_0.disabled = this.$H_0(Number.parseInvariant($v_1.get_query()["etc"].toString()));
        $v_0.showPopupToolTip = window.TILE_POPUP_TOOLTIP;
        $v_0.showTileCheckBoxToolTip = window.TILE_CHECKBOX_TOOLTIP;
        var $$t_6 = this;
        $v_0.onPopOutIconClick = function($p1_0) {
            if (!isNullOrEmptyString($v_1.get_query()["etc"].toString())) {
                var $v_2 = "id=" + $$t_6.$2_0.recordId + "&skipFormCache=true";
                openObj($v_1.get_query()["etc"], null, $v_2, null, 0, null)
            }
            $p1_0.stopPropagation()
        };
        var $$t_7 = this;
        this.$0_0.bind("tilewidgetoncheckboxclick",
            function($p1_0) {
                if ($P_CRM("div.checkboxUnSelected", $p0).length > 0) {
                    $P_CRM("div.tileCheckBox", $p0).toggleClass("checkboxSelected checkboxUnSelected");
                    $P_CRM("div.tilePopOutImg", $p0).toggleClass("tilePopOutImgUnchecked tilePopOutImgChecked")
                } else if ($P_CRM("div.checkboxSelected", $p0).length > 0) {
                    $P_CRM("div.tileCheckBox", $p0).toggleClass("checkboxUnSelected checkboxSelected");
                    $P_CRM("div.tilePopOutImg", $p0).toggleClass("tilePopOutImgChecked tilePopOutImgUnchecked")
                }
                $P_CRM($p0).toggleClass("tileUnSelected selectedTileBorder ")
            });
        return $v_0
    },
    $H_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDataForTile(this.$1_0, "statecode", "invariant", false);
        if (isNullOrEmptyString($v_0) && $p0 !== 8) return false;
        switch ($p0) {
        case 1:
        case 2:
        case 4400:
        case 50:
        case 1024:
            if ($v_0 === "Inactive") return true;
            break;
        case 112:
        case 1088:
            if ($v_0 === "Resolved" || $v_0 === "Canceled" || $v_0 === "Fulfilled" || $v_0 === "Invoiced") return true;
            break;
        case 3:
        case 1084:
            if ($v_0 === "Won" || $v_0 === "Lost" || $v_0 === "Closed") return true;
            break;
        case 8:
            var $v_1 = Mscrm.Utilities.getDataForTile(this.$1_0, "isdisabled", "raw", false);
            if (!isNullOrEmptyString($v_1) && $v_1 === "1") return true;
            break;
        default:
            if ($v_0 === "Inactive") return true;
            return false
        }
        return false
    },
    $I_0: function() {
        var $v_0 = "GET", $v_1 = null, $v_2, $v_3 = Mscrm.CrmUri.create(this.$2_0.formLayOutUrl);
        $v_3.setQueryParameter("formts", window.TILE_FORM_TIMESTAMP);
        $v_3.setQueryParameter("user-lcid", window.USER_LANGUAGE_CODE.toString());
        var $v_4 = new XMLHttpRequest;
        $v_4.open($v_0, $v_3.toString(), false);
        $v_4.send($v_1);
        var $$t_5, $$t_6;
        $$t_6 = Mscrm.JsonUtilities.tryGetParsedJson(Mscrm.JsonUtilities.getJsonString($v_4.responseText),
            $$t_5 = { val: $v_2 }), $v_2 = $$t_5.val, $$t_6;
        return $v_2
    },
    $C_0: function() {
        for (var $v_0 = this.$5_0["header"]["JQueryTemplates"], $v_3 = 0; $v_3 < $v_0.length; $v_3++) {
            var $v_4 = document.createElement("script");
            $v_4.id = $v_0[$v_3].Key;
            $v_4.type = "text/x-jsrender";
            var $v_5 = $v_0[$v_3].Value;
            $v_4.text = $v_5;
            document.body.appendChild($v_4)
        }
        var $v_1 = this.$5_0["entityImageEnabled"], $v_2 = $v_1["entityImageEnabled"];
        window.isEntityImageEnabled = $v_2
    },
    $F_0: function($p0) {
        var $v_0 = "";

        function myHelper(arg, arg1, arg2, arg3) {
            if (arg3 == "-")
                return Mscrm.Utilities
                    .getDataOrDefaultForTile(arg, arg1, arg2, Mscrm.InlineEditConstants.DefaultEmptyValuePlaceHolder);
            else return Mscrm.Utilities.getDataOrDefaultForTile(arg, arg1, arg2, arg3)
        }

        $P_CRM.views.helpers({
            getData: Mscrm.Utilities.getDataForTile,
            getCssClass: Mscrm.Utilities.getCssClass,
            getDataOrDefault: myHelper,
            getProcessControlData: Mscrm.Utilities.getProcessControlData
        });
        $v_0 = $P_CRM("#" + Mscrm.InlineEditConstants.JQueryTemplateNameForMainPage).render($p0);
        return $v_0
    },
    $8_0: function($p0) {
        this.$0_0.data("AppendTileContentStartTime", Date.now());
        setPerfMarkerTimestamp("AppendTileContentStartTime");
        var $v_0 = document.createElement("div"), $v_1 = this.$F_0(this.$1_0);
        if ($v_1) $v_0.innerHTML = $v_1;
        $v_0.className = "tileContent";
        $v_0.setAttribute("rtl", this.get_$4_0());
        $p0.appendChild($v_0);
        this.$E_0($p0);
        this.$0_0.data("AppendTileContentEndTime", Date.now());
        setPerfMarkerTimestamp("AppendTileContentEndTime")
    },
    $E_0: function($p0) {
        $P_CRM($p0).find("div.ms-crm-Form-HeaderContainer").css("display", "none");
        $P_CRM($p0).find("h3.ms-crm-Form").css("display", "none");
        $P_CRM($p0).find("td.ms-crm-Form-Section-Print").css("display", "none");
        $P_CRM($p0).find("tr.ms-crm-Form-SectionGapRow").css("display", "none");
        $P_CRM($p0).find("span.ms-crm-Lookup-Item-Read").css("cursor", "pointer");
        $P_CRM($p0).find("table.ms-crm-FormSection").css("direction", this.get_$4_0() ? "rtl" : "ltr");
        $P_CRM($p0).find("td.ms-crm-ReadField-Normal").addClass(" normalTileContentLabelColor tileContentLabelWidth");
        $P_CRM($p0).find("td.ms-crm-ReadField-Normal span:first-child").css("max-width", "");
        $P_CRM($p0).find("td.ms-crm-ReadField-Normal span:first-child")
            .addClass(" tileContentLabelWidth tileContentTextWrap");
        $P_CRM($p0).find("td.ms-crm-Field-Data-Print").addClass(" tileContentValueWidth tileContentTextWrap");
        $P_CRM($p0).find("td.ms-crm-Field-Data-Print span:first-child")
            .addClass(" tileContentValueWidth tileContentTextWrap");
        $P_CRM($p0).find("td.ms-crm-Field-Data-Print div:first-child")
            .addClass(" tileContentValueWidth tileContentTextWrap");
        $P_CRM($p0).find("td.ms-crm-Field-Data-Print span:first-child").attr("tabindex", "0");
        $P_CRM($p0).find("td.ms-crm-Field-Data-Print div:first-child").attr("tabindex", "0");
        var $v_0 = $P_CRM($p0).find("#defaultuomid_cl").html(),
            $v_1 = $P_CRM($p0).find("#defaultuomid_d span:first-child").html();
        $P_CRM($p0).find("#defaultuomid_d span:first-child").attr("aria-label", $v_0 + " " + $v_1)
    },
    $9_0: function($p0) {
        this.$0_0.data("AppendTileImageStartTime", Date.now());
        setPerfMarkerTimestamp("AppendTileImageStartTime");
        var $v_0 = window.isEntityImageEnabled;
        if (Mscrm.Utilities.parseBoolean($v_0)) {
            var $v_1 = document.createElement("div");
            $v_1.className = "tileImage";
            $v_1.setAttribute("rtl", this.get_$4_0());
            var $v_2 = document.createElement("IMG"),
                $v_3 = Mscrm.Utilities.getDataForTile(this.$1_0, "entityimage_url", "value", false);
            if ($v_3.length > 0) $v_3 = CrmEncodeDecode.CrmHtmlDecode($v_3);
            $v_2.src = $v_3;
            $v_2.alt = "";
            $v_2.setAttribute("rtl", this.get_$4_0());
            $v_2.className = "tileImage tileImage2";
            $v_1.appendChild($v_2);
            $p0.appendChild($v_1)
        }
        this.$0_0.data("AppendTileContentEndTime", Date.now());
        setPerfMarkerTimestamp("AppendTileContentEndTime")
    },
    $A_0: function($p0) {
        this.$0_0.data("AppendTileHeaderStartTime", Date.now());
        setPerfMarkerTimestamp("AppendTileHeaderStartTime");
        var $v_0 = document.createElement("div");
        $v_0.className = "tileTitle";
        $v_0.setAttribute("rtl", this.get_$4_0());
        $v_0.setAttribute("tabindex", "0");
        var $v_1 = Mscrm.Utilities.getDataForTile(this.$1_0, "_entity", "Name", false);
        $v_0.title = $v_1;
        $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_1);
        $p0.appendChild($v_0);
        this.$0_0.data("AppendTileHeaderEndTime", Date.now());
        setPerfMarkerTimestamp("AppendTileHeaderEndTime")
    },
    $G_0: function() {
        var $v_0 = window.SCREEN_READER_TEMPLATE;
        $v_0 = $v_0.replace("PRIMARY_NAME", Mscrm.Utilities.getDataForTile(this.$1_0, "_entity", "Name", true));
        var $v_1 = new RegExp("VALUE_[A-Z0-9-]{36}\\([^)]+\\)", "g"), $v_2 = $v_0.match($v_1);
        if ($v_2)
            for (var $v_3 = 0, $$arr_4 = $v_2, $$len_5 = $$arr_4.length, $$idx_6 = 0; $$idx_6 < $$len_5; ++$$idx_6) {
                var $v_4 = $$arr_4[$$idx_6],
                    $v_5 = $v_4.substring($v_4.indexOf("(") + 1, $v_4.length - 1),
                    $v_6 = this.getDecodedValue(Mscrm.Utilities.getDataForTile(this.$1_0, $v_5, "value", true));
                $v_0 = $v_0.replace($v_4, $v_6);
                this.$7_0[$v_3] = $v_6;
                $v_3++
            }
        return $v_0
    },
    getDecodedValue: function(text) {
        var $v_0 = CrmEncodeDecode.CrmHtmlDecode(text);
        $v_0 = $v_0.split("<br>").join("\r");
        return CrmEncodeDecode.CrmHtmlDecode($v_0)
    },
    $B_0: function() {
        var $$t_5 = this;
        this.$0_0.find("td.ms-crm-Field-Data-Print").each(function($p1_0, $p1_1) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild($p1_1);
            if (!$p1_1.children.length) $p1_1.title = XUI.Html.GetText($p1_1);
            else if (!$v_0.title.length && XUI.Html.GetText($v_0).length) {
                $v_0.title = $$t_5.$7_0[$p1_0];
                var $v_1 = $v_0.getAttribute("memo");
                if ($v_1 && $v_1.toString() === "true") {
                    var $v_2 = "                                     <br>";
                    $v_2 = $v_2.replace(new RegExp(" ", "g"), "\u00a0");
                    $v_0.innerHTML = $v_0.innerHTML.replace("<br>", $v_2)
                }
            }
        })
    },
    render: function(tileContainer) {
        this.$0_0 = $P_CRM(tileContainer);
        this.$0_0.data("CRMTileRenderStartTime", Date.now());
        setPerfMarkerTimestamp("CRMTileRenderStartTime");
        tileContainer.tabIndex = 0;
        var $v_0 = this.$D_0(tileContainer);
        tileContainer.setAttribute("rtl", this.get_$4_0());
        this.$0_0.data("FetchCRMTileLayoutStartTime", Date.now());
        setPerfMarkerTimestamp("FetchCRMTileLayoutStartTime");
        var $v_1 = $P_CRM(document).find("#rootJQueryTemplate").html();
        if (isNullOrEmptyString($v_1)) {
            if (IsNull(this.$5_0)) this.$5_0 = this.$I_0();
            this.$C_0()
        }
        this.$0_0.data("FetchCRMTileLayoutEndTime", Date.now());
        setPerfMarkerTimestamp("FetchCRMTileLayoutEndTime");
        var $v_2 = document.createElement("div");
        $v_2.setAttribute("rtl", this.get_$4_0());
        $v_2.className = "contentDiv";
        tileContainer.appendChild($v_2);
        tileContainer.setAttribute("aria-label", this.$G_0());
        this.$9_0($v_2);
        this.$A_0($v_2);
        this.$8_0($v_2);
        this.$B_0();
        this.$0_0.data("TileWidgetCreateStartTime", Date.now());
        setPerfMarkerTimestamp("TileWidgetCreateStartTime");
        var $v_3 = jQueryUIApi.WidgetFactory.createInstance(CrmJQueryWidget.TileWidget, tileContainer, $v_0);
        this.$0_0.data("TileWidgetCreateEndTime", Date.now());
        setPerfMarkerTimestamp("TileWidgetCreateEndTime");
        this.$0_0.data("CRMTileRenderEndTime", Date.now());
        setPerfMarkerTimestamp("CRMTileRenderEndTime")
    }
};
Mscrm.CrmTileOptions = function() {};
Mscrm.CrmTileOptions.prototype = {
    recordId: null,
    formLayOutUrl: null,
    isFocusTile: false,
    data: null,
    tileDataProviderObject: null
};
Mscrm.TileFactory = function() {};
Mscrm.TileFactory.getTile = function(tileType, crmTileOptions) {
    if (IsNull(crmTileOptions.data) && IsNull(crmTileOptions.tileDataProviderObject));
    if (isNullOrEmptyString(crmTileOptions.formLayOutUrl));
    if (IsNull(crmTileOptions.recordId));
    var $v_0 = new Mscrm.CrmTile(crmTileOptions);
    return $v_0
};
Mscrm.TileDataProvider.registerClass("Mscrm.TileDataProvider", null, Mscrm.IDataProvider);
Mscrm.CrmTile.registerClass("Mscrm.CrmTile", null, Mscrm.ITile);
Mscrm.CrmTileOptions.registerClass("Mscrm.CrmTileOptions");
Mscrm.TileFactory.registerClass("Mscrm.TileFactory")