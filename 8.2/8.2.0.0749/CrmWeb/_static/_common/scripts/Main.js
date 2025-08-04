Type.registerNamespace("Mscrm");
Mscrm.IHistoryData = function() {};
Mscrm.IHistoryData.registerInterface("Mscrm.IHistoryData");
Mscrm.IHistoryStore = function() {};
Mscrm.IHistoryStore.registerInterface("Mscrm.IHistoryStore");
Mscrm.RecordField = function() {};
Mscrm.RecordField.prototype = {
    type: 0,
    objectId: 1,
    entityTypeCode: 2,
    entityTypeName: 3,
    entityDisplayName: 4,
    title: 5,
    action: 6,
    iconPath: 7,
    lastAccessed: 8,
    pinStatus: 9
};
Mscrm.RecordField.registerEnum("Mscrm.RecordField", false);
Mscrm.RecordType = function() {};
Mscrm.RecordType.prototype = { entity: 0, grid: 1, ISV: 2 };
Mscrm.RecordType.registerEnum("Mscrm.RecordType", false);
Mscrm.CacheManager = function() {
    this._data = {};
    this.$c_2 = {};
    Mscrm.CacheManager.initializeBase(this)
};
Mscrm.CacheManager.prototype = {
    $1I_2: null,
    get_pageManager: function() { return this.$1I_2 },
    set_pageManager: function(value) {
        this.$1I_2 = value;
        return value
    },
    $3h_2: function($p0) {
        var $v_0 = $p0["targetPageManager"], $v_1 = 0;
        if (!IsNull($v_0)) {
            var $v_2 = $v_0.raiseEvent(2, null);
            while (!IsNull($v_2) && $v_1 < $v_2.length) {
                var $v_3 = $v_2[$v_1], $$dict_7 = $v_3;
                for (var $$key_8 in $$dict_7) {
                    var $v_4 = { key: $$key_8, value: $$dict_7[$$key_8] }, $v_5 = $v_4.value;
                    switch ($v_5["cacheScope"]) {
                    case 1:
                        break;
                    case 2:
                        $v_5["cacheScope"] = 0;
                        break;
                    case 0:
                        continue;
                    default:
                        continue
                    }
                    this._data[$v_4.key] = this.$29_2($v_5)
                }
                ++$v_1
            }
        }
    },
    $28_2: function($p0) {
        var $v_0 = [];
        if (IsNull($p0)) return $v_0;
        for (var $v_1 = 0; $v_1 < $p0.length; ++$v_1) $v_0[$v_1] = this.$17_2($p0[$v_1]);
        return $v_0
    },
    $29_2: function($p0) {
        var $v_0 = {};
        if (IsNull($p0)) return $v_0;
        var $$dict_3 = $p0;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
            $v_0[$v_1.key] = this.$17_2($v_1.value)
        }
        return $v_0
    },
    $17_2: function($p0) {
        var $v_0 = null;
        if (IsNull($p0)) return $v_0;
        switch (Object.getType($p0).getName()) {
        case "Object":
            var $v_1 = false;
            if (!IsNull($p0.splice)) {
                var $v_2 = -1, $v_3 = $p0.length;
                if (!IsNull($v_3))
                    try {
                        $v_2 = parseInt($v_3, 10);
                        $v_1 = $v_2 >= 0
                    } catch ($$e_5) {
                    }
            }
            if ($v_1) $v_0 = this.$28_2($p0);
            else $v_0 = this.$29_2($p0);
            break;
        case "Array":
            $v_0 = this.$28_2($p0);
            break;
        case "Number":
            $v_0 = $p0;
            break;
        case "String":
            $v_0 = $p0;
            break;
        case "Boolean":
            $v_0 = $p0;
            break;
        case "Date":
            $v_0 = new Date(Date.parse($p0.toString()));
            break;
        default:
            $v_0 = $p0;
            break
        }
        return $v_0
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 5:
            return this.$23_2(parameters);
        case 10:
            return this.$2G_2(parameters);
        case 2:
            return this.$2b_2();
        case 82:
            this.$3W_2(parameters);
            break;
        case 11:
            this.$3h_2(parameters);
            break;
        case 100:
            this.$3T_2(parameters);
            break;
        default:
            break
        }
        return null
    },
    insertCacheData: function(parameters) { return this.$23_2(parameters) },
    retrieveCacheData: function(parameters) { return this.$2G_2(parameters) },
    $23_2: function($p0) {
        var $v_0 = $p0["key"], $v_1 = false;
        if (!IsNull($p0["checkDuplicate"])) $v_1 = $p0["checkDuplicate"];
        if ($v_1 && !IsNull(this._data[$v_0])) throw Error.argumentOutOfRange("key", "null or duplicate key passed");
        if (IsNull($v_0)) $v_0 = this.$2Z_2();
        var $v_2 = {}, $v_3 = this.$17_2($p0["data"]);
        $v_2["data"] = $v_3;
        if (!IsNull($p0["purgeDataOnCacheSync"])) $v_2["purgeDataOnCacheSync"] = $p0["purgeDataOnCacheSync"];
        this._data[$v_0] = $v_2;
        var $v_4 = 0;
        if (!IsNull($p0["cacheScope"])) $v_4 = $p0["cacheScope"];
        $v_2["cacheScope"] = $v_4;
        !IsNull($p0["groupId"]) && this.$2S_2($v_0, $p0["groupId"]);
        return $v_0
    },
    $2G_2: function($p0) {
        var $v_0 = null, $v_1 = $p0["key"], $v_2 = this._data[$v_1];
        if (!IsNull($v_2)) $v_0 = $v_2["data"];
        return this.$17_2($v_0)
    },
    $3W_2: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = $p0["groupIds"];
            this.$3V_2($v_0)
        }
    },
    $2Z_2: function() {
        var $v_0;
        while (true) {
            $v_0 = Math.ceil(Math.random() * 1e9).toString();
            if (IsNull(this._data[$v_0])) break
        }
        return $v_0
    },
    $2b_2: function() {
        var $v_0 = {}, $$dict_4 = this._data;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_2 = $v_1.value, $v_3 = $v_2["cacheScope"];
            if ($v_3 === 1 || $v_3 === 2) {
                $v_0[$v_1.key] = $v_1.value;
                if (!IsNull($v_2["purgeDataOnCacheSync"]) && $v_2["purgeDataOnCacheSync"]) delete this._data[$v_1.key]
            }
        }
        return $v_0
    },
    $2S_2: function($p0, $p1) {
        if (!isNullOrEmptyString($p1) && !isNullOrEmptyString($p0)) {
            var $v_0 = this.$c_2[$p1];
            if (IsNull($v_0)) $v_0 = [];
            var $v_1 = $v_0.length > 0 ? $v_0.length - 1 : 0;
            $v_0[$v_1] = $p0;
            this.$c_2[$p1] = $v_0
        }
    },
    $3T_2: function($p0) {
        var $v_0 = $p0["key"];
        if (!isNullOrEmptyString($v_0)) if ($v_0 in this._data) delete this._data[$v_0]
    },
    $3V_2: function($p0) {
        if (!IsNull($p0))
            for (var $v_0 = 0; $v_0 < $p0.length; ++$v_0)
                !IsNull($p0[$v_0]) && $p0[$v_0] in this.$c_2 && this.$3X_2($p0[$v_0])
    },
    $3X_2: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = this.$c_2[$p0];
            if (!IsNull($v_0))
                for (var $v_1 = 0;
                    $v_1 < $v_0.length;
                    ++$v_1
                ) if (!IsNull($v_0[$v_1]) && $v_0[$v_1] in this._data) delete this._data[$v_0[$v_1]]
        }
    }
};
Mscrm.ContentPanel = function(element) {
    this.$$d_$1g_3 = Function.createDelegate(this, this.$1g_3);
    Mscrm.ContentPanel.initializeBase(this, [element]);
    this.$d_3 = this.$$d_$1g_3;
    this.$k_3 = 120;
    if (!Mscrm.SessionInfo.isOutlookClient() && !Mscrm.Utilities.isMobileRefresh())
        if (Mscrm.Utilities.isIE8OrLower() || Mscrm.Utilities.isIE9()) this.$k_3 = 60;
        else if (Mscrm.Utilities.isIE11StandardOrIE11CompatibleMode()) this.$k_3 = 30
};
Mscrm.ContentPanel.prototype = {
    $E_3: null,
    $8_3: null,
    $d_3: null,
    $b_3: false,
    $P_3: "currentContentId",
    $1i_3: "currentGridId",
    $t_3: "contentDiv",
    $1G_3: "domReadyDiv",
    $u_3: null,
    $k_3: 0,
    $1J_3: 0,
    _iframeMgr: null,
    get_contentUrl: function() { return Mscrm.CrmUri.create(this.$E_3) },
    set_contentUrl: function(value) {
        if (typeof value === "string") this.$E_3 = value.toString();
        else this.$E_3 = value.toString();
        this.get_isInitialized() && this.$1V_3(Mscrm.CrmUri.create(this.$E_3), this.title, false);
        return value
    },
    title: null,
    defaultTitle: null,
    contentAreaText: null,
    $w_3: null,
    get_historyManager: function() { return this.$w_3 },
    set_historyManager: function(value) {
        this.$w_3 = value;
        return value
    },
    get_contentWindow: function() {
        if (this._iframeMgr.get_currentIFrame()) return this._iframeMgr.get_currentIFrame().contentWindow;
        return window.self
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this._iframeMgr = new Mscrm.IFrameManager($get("contentIFrame"), this);
        this.$u_3 = $get("contentPanelAnchor");
        this.get_element().setAttribute("src", this.$E_3);
        if (IsNull(this._iframeMgr.get_currentIFrame())) {
            if (window.location.href.indexOf("#") !== -1) this.$E_3 = this.$w_3.getInitialContent(this.$E_3);
            if (!isNullOrEmptyString(window.top.location.search) &&
                window.top.location.search.toLowerCase().indexOf("appid") > 0 &&
                window.location.href.indexOf("#") === -1) {
                var $v_0 = {};
                $v_0["uri"] = this.$E_3;
                this.get_eventManager().raiseEvent(21, $v_0, null)
            } else this.$1V_3(Mscrm.CrmUri.create(this.$E_3), this.title, false)
        } else this.$b_3 = true
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 8:
            var $v_0 = Mscrm.CrmUri.create(parameters["uri"]), $v_1 = 0;
            if ($v_0.isTurboFormUrl() && Mscrm.Utilities.isFirefox()) $v_1 = 10;
            var $$t_7 = this;
            window.setTimeout(function() {
                    $$t_7.$1V_3($v_0, parameters["appNavTitle"], parameters["preservePreviousContent"])
                },
                $v_1);
            return true;
        case 96:
            this._iframeMgr.preserveCurrentIFrame();
            break;
        case 14:
            this.$3Z_3(parameters);
            break;
        case 15:
            return this.$2c_3();
        case 57:
            var $v_2 = Mscrm.CrmUri.create(parameters["uri"]),
                $v_3 = Mscrm.CrmUri.create(this.get_rootManager().get_contentUrl());
            !$v_2.equals($v_3, true) && this.$3j_3();
            break;
        case 73:
            if (!IsNull(this.$u_3)) this.$u_3.focus();
            else this.get_element().focus();
            break;
        case 86:
        case 27:
        case 28:
            if (this.$1j_3()) return true;
            break;
        case 114:
            this.$36_3();
            break
        }
        return null
    },
    $36_3: function() {
        var $v_0 = $P_CRM("#" + this._iframeMgr.get_currentIFrame().id).contents().find("#formBodyContainer")
            .find("a.ms-crm-InlineTabHeaderText").first();
        !IsNull($v_0) && $v_0.focus()
    },
    $3f_3: function() {
        if (Mscrm.SessionInfo.isOutlookClient() || Mscrm.Utilities.isMobileRefresh()) return false;
        this.$1J_3++;
        return this.$1J_3 > this.$k_3
    },
    $2c_3: function() {
        var $v_0 = Mscrm.CrmUri.create(this.get_element().getAttribute("src")), $v_1 = $v_0.get_query()["pagemode"];
        if (!IsNull($v_1) && $v_0.get_query()["pagemode"].toString().toLowerCase() === "iframe"
        ) delete $v_0.get_query().pagemode;
        $v_0.unsetAppContext();
        return $v_0.toString()
    },
    $3j_3: function() {
        var $v_0 = this.get_element().getAttribute(this.$P_3);
        if (!isNullOrEmptyString($v_0) && $v_0 === this.$t_3) this.$3k_3();
        else this.$1g_3(null)
    },
    $3k_3: function() {
        this.$1B_3();
        this.$8_3.style.visibility = "visible";
        this.$2L_3();
        this.$2T_3()
    },
    $1g_3: function($p0) {
        if (!this.$b_3) {
            $removeHandler(this._iframeMgr.get_currentIFrame(), "load", this.$d_3);
            this.$b_3 = true;
            this.$1D_3();
            this.$1B_3();
            var $v_0 = false;
            try {
                $v_0 = this._iframeMgr.get_currentIFrame().contentWindow._ISFLATUIPAGE
            } catch ($$e_2) {
                $v_0 = false
            }
            if (!$v_0) {
                setPageTitle(!isNullOrEmptyString(this.title) ? this.title : this.defaultTitle);
                var $v_1 = {};
                $v_1["uri"] = this.get_contentUrl().toString();
                $v_1["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
                this.raiseEvent(9, $v_1)
            }
            if (this.get_contentUrl().get_pageType() !== "entitylist") {
                var $v_2 = this._iframeMgr.get_currentIFrame().contentWindow;
                $v_2 && $v_2.focus()
            }
            this.$2L_3()
        }
    },
    $2L_3: function() {
        var $v_0 = window.status;
        window.status = null;
        window.status = $v_0
    },
    $2J_3: function() { Mscrm.Utilities.ShowLoadingDiv(this.get_element()) },
    $1B_3: function() { Mscrm.Utilities.RemoveLoadingDiv() },
    $1D_3: function() { Mscrm.IFrameManager.$2I(this._iframeMgr.get_currentIFrame()) },
    $3C_3: function() { Mscrm.IFrameManager.$22(this._iframeMgr.get_currentIFrame()) },
    $1L_3: function($p0, $p1) {
        var $v_0 = !this._iframeMgr.prepareIFrame($p0, this.contentAreaText, $p1);
        if ($v_0) {
            try {
                $removeHandler(this._iframeMgr.get_currentIFrame(), "load", this.$d_3)
            } catch ($$e_3) {
            }
            $addHandler(this._iframeMgr.get_currentIFrame(), "load", this.$d_3)
        }
        return $v_0
    },
    $1o_3: function() {
        if (IsNull(this.$8_3)) {
            this.$8_3 = document.createElement("div");
            this.get_element().appendChild(this.$8_3);
            this.$8_3.id = this.$t_3;
            this.$8_3.className = "contentDiv"
        }
    },
    $1s_3: function() { this._iframeMgr.destroyContentIframe() },
    $1M_3: function() {
        if (!IsNull(this.$8_3)) {
            Mscrm.Utilities.destroyElement(this.$8_3);
            this.$8_3.innerHTML = "";
            this.$8_3 = null;
            try {
                window.focus()
            } catch ($$e_0) {
            }
        }
    },
    $2X_3: function() {
        if (IsNull(this.$8_3)) return;
        var $v_0 = $get("scriptContainer_" + this.$8_3.id);
        Mscrm.CrmHeader.get_scriptLoader().cleanupMarkedScripts($v_0, true);
        if (!IsNull($v_0)) {
            Mscrm.Utilities.destroyElement($v_0);
            $v_0.innerHTML = ""
        }
        var $v_1 = $get("styleContainer_" + this.$8_3.id);
        if (!IsNull($v_1)) {
            Mscrm.Utilities.destroyElement($v_1);
            $v_1.innerHTML = ""
        }
    },
    $1a_3: function() {
        try {
            Mscrm.Utilities.isIE10OrHigher() &&
                document.queryCommandSupported("ms-clearUndoStack") &&
                document.execCommand("ms-clearUndoStack", false, null)
        } catch ($$e_0) {
        }
    },
    $2D_3: function() {
        var $v_0 = $get(this.$1G_3);
        !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
    },
    $2T_3: function() {
        var $v_0 = document.createElement("div");
        $v_0.id = this.$1G_3;
        this.$8_3.appendChild($v_0)
    },
    $2C_3: function($p0) {
        if ($p0.substring(0, 8) === "for(;;);") $p0 = $p0.substring(8, $p0.length);
        return $p0
    },
    $3K_3: function($p0, $p1) {
        this.$2K_3();
        this.$1s_3();
        this.$1M_3();
        this.$1a_3();
        this.$1o_3();
        this.$2D_3();
        $p0.get_query()["responseType"] = "Json";
        addPassiveAuthParameters($p0);
        if ($p0.get_isLocalServer()) $p0.get_query()["pagemode"] = "iframe";
        this.$E_3 = $p0.toString();
        var $$t_6 = this, $$t_7 = this;
        Mscrm.InlineContentLoader.requestJsonContentByGet($p0,
            function($p1_0) {
                var $v_0 = $$t_6.$2C_3($p1_0.responseText);
                Mscrm.InlineContentLoader.loadJsonResponse(Sys.Serialization.JavaScriptSerializer.deserialize($v_0),
                    $$t_6.$8_3);
                $$t_6.$8_3.style.visibility = "visible";
                $$t_6.$1B_3();
                $$t_6.title = $p1
            },
            function($p1_0) {
                IsNull($$t_7._iframeMgr.get_currentIFrame()) && $$t_7.$1L_3(null, false);
                $$t_7.$8_3.style.display = "none";
                $$t_7.$1D_3();
                $$t_7.get_element().setAttribute($$t_7.$P_3, $$t_7._iframeMgr.get_currentIFrame().id);
                var $v_1 = $$t_7._iframeMgr.get_currentIFrame().contentWindow.document;
                $v_1.open();
                $v_1.write($p1_0.responseText);
                $v_1.close()
            });
        setPageTitle(this.defaultTitle);
        this.$8_3.style.visibility = "hidden";
        this.$2J_3();
        this.raiseEvent(20, null)
    },
    loadContentByPost: function(uri, httpBody) {
        this.$2K_3();
        this.$1s_3();
        this.$1M_3();
        this.$1a_3();
        this.$1o_3();
        this.$2D_3();
        var $$t_6 = this, $$t_7 = this;
        Mscrm.InlineContentLoader.requestJsonContentByPost(uri,
            httpBody,
            function($p1_0) {
                var $v_0 = $$t_6.$2C_3($p1_0.responseText);
                Mscrm.InlineContentLoader.loadJsonResponse(Sys.Serialization.JavaScriptSerializer.deserialize($v_0),
                    $$t_6.$8_3);
                $$t_6.$8_3.style.visibility = "visible";
                $$t_6.$1B_3()
            },
            function($p1_0) {
                IsNull($$t_7._iframeMgr.get_currentIFrame()) && $$t_7.$1L_3(null, false);
                $$t_7.$8_3.style.display = "none";
                $$t_7.$1D_3();
                $$t_7.get_element().setAttribute($$t_7.$P_3, $$t_7._iframeMgr.get_currentIFrame().id);
                var $v_1 = $$t_7._iframeMgr.get_currentIFrame().contentWindow.document;
                $v_1.open();
                $v_1.write($p1_0.responseText);
                $v_1.close()
            })
    },
    unloadTurboFormForOutlook: function() {
        Mscrm.SessionInfo.isOutlookClient() &&
            this._iframeMgr.isTurboActiveFrameInOutlook() &&
            this._iframeMgr.get_currentIFrame().contentWindow.unloadForm()
    },
    $1V_3: function($p0, $p1, $p2) {
        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("Load Content Start", 1);
        var $v_0 = $p0.toString();
        window.NavigationCounter++;
        this.$2Q_3($v_0);
        this.$2E_3($v_0, "navigationStart");
        window.self.ContentPanelLoadContentTime = (new Date).getTime();
        ($p0.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX") ||
                $p0.get_path().toUpperCase().endsWith("/HOME_APPTBOOK.ASPX")) &&
            setPerfMarkerTimestamp("HomePageGridLoadStart");
        this.$3D_3($p0) && $p0.set_includeContextInPath(true);
        this.get_element().setAttribute("src", $p0.toString());
        this.$b_3 = false;
        if (Mscrm.Utilities.isJsonResponseSupported($p0)) {
            this.get_element().setAttribute(this.$P_3, this.$t_3);
            this.$3K_3($p0, $p1)
        } else {
            var $v_1 = window.top.document.getElementById("crmRibbonManager");
            if (!IsNull($v_1)) {
                var $v_2 = $v_1.getAttribute("currentRibbonElement");
                if (!IsNull($v_2) && $v_2.startsWith("commandContainer")) $v_1.style.visibility = "hidden";
                Mscrm.PerceivedCommandBarHelper.addPerceivedCommandBar($p0)
            }
            this.$3J_3($p0, $p1, $p2);
            this.get_element().setAttribute(this.$P_3, this._iframeMgr.get_currentIFrame().id);
            $p0.isTurboFormUrl() && this.$1g_3(null)
        }
        this.$1j_3();
        this.$2E_3($v_0, "navigationEnd")
    },
    $3D_3: function($p0) {
        for (var $v_0 = ["/HOMEPAGE.ASPX", "/HOME_DASHBOARDS.ASPX", "/DATA.ASPX", "/PAGE.ASPX"],
            $$arr_2 = $v_0,
            $$len_3 = $$arr_2.length,
            $$idx_4 = 0;
            $$idx_4 < $$len_3;
            ++$$idx_4) {
            var $v_1 = $$arr_2[$$idx_4];
            if ($p0.get_path().toUpperCase().endsWith($v_1)) return true
        }
        return false
    },
    $3J_3: function($p0, $p1, $p2) {
        this._iframeMgr.get_currentIFrame() &&
            Mscrm.PerformanceTracing.write("Unload", this._iframeMgr.get_currentIFrame().src);
        this.$E_3 = $p0.toString();
        this.$2X_3();
        this.$1M_3();
        this.$1a_3();
        if ($p0.get_isLocalServer()) $p0.get_query()["pagemode"] = "iframe";
        addPassiveAuthParameters($p0);
        if (IsNull($p2)) $p2 = false;
        if ($p0.isTurboFormUrl()) {
            var $v_1 = Mscrm.CrmUri.create("/form/page.aspx");
            $v_1.set_useVersionStamp(true);
            $v_1.set_includeContextInPath(true);
            $v_1.get_query()["themeId"] = IsNull(window.THEME_ID) ? "" : window.THEME_ID;
            $v_1.get_query()["tstamp"] = IsNull(window.METADATA_TIMESTAMP) ? "" : window.METADATA_TIMESTAMP;
            $v_1.get_query()["updateTimeStamp"] = IsNull(window.THEME_UPDATE_TIMESTAMP)
                ? ""
                : window.THEME_UPDATE_TIMESTAMP;
            $v_1.get_query()["lcid"] = window.USER_LANGUAGE_CODE;
            $v_1.get_query()["userts"] = IsNull(window.USER_TIMESTAMP) ? "" : window.USER_TIMESTAMP;
            $v_1.set_fragment($p0.get_queryString().substr(1));
            $p0 = $v_1;
            $p0.set_fragment($p0.get_fragment() + "&counter=" + (new Date).getTime());
            Mscrm.TurboForm.Control.PageBootstrapper.requestTurboFormData($p0)
        }
        var $v_0 = this.$1L_3($p0, $p2);
        if ($p0.isTurboFormUrl()) window.self.turboFormDataRequested = true;
        Xrm.Internal.trace.logT(Mscrm.ContentPanel, "{0}: loading {1}", this._iframeMgr.get_currentIFrame().id, $p0);
        if ($v_0) {
            if (this.$3f_3()) {
                window.location.reload();
                return
            }
            this.$3C_3();
            this.$2J_3();
            var $v_2 = $p0.toString();
            if (!window.DISPLAY_TURBO_FORM) if ($p0.isOutlookPreparationPageUrl()) $v_2 = "/_static/blank.htm";
            Mscrm.PerformanceTracing.write("Navigate", $v_2);
            !Mscrm.Utilities.isIE() && this.raiseEvent(97, null);
            if (Mscrm.Utilities.isChrome()) {
                var $v_3 = window.parent.TurboFormCloseScenario;
                if (!IsNull($v_3) && $v_3 === "true") window.TurboFormCloseScenarioIframeLocationReplace = "true"
            }
            this._iframeMgr.get_currentIFrame().contentWindow.location.replace($v_2)
        } else {
            this.$1D_3();
            var $v_4 = this.get_contentWindow().Sys.Application.findComponent("crmPageManager");
            if ($v_4) {
                !Mscrm.Utilities.isIE() && $v_4.raiseEvent(97, null);
                var $v_5 = {};
                $v_5["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
                $v_5["iframeId"] = IsNull(this._iframeMgr.get_currentIFrame())
                    ? null
                    : this._iframeMgr.get_currentIFrame().id;
                $v_4.raiseEvent(87, $v_5)
            }
        }
        window.self.InnerIFrameSrcChangeTimestamp = (new Date).getTime();
        this.title = $p1;
        if (window
            .LOCID_UI_DIR ===
            "RTL" &&
            $p0.toString().indexOf("PersonalWall") >= 0 &&
            window.UseTabletExperience) this._iframeMgr.get_currentIFrame().style.position = "RELATIVE"
    },
    $2K_3: function() {
        var $v_0 = null;
        try {
            $v_0 = $find("crmInlinePageManager");
            if (IsNull($v_0))
                $v_0 = this._iframeMgr.get_currentIFrame().contentWindow.Sys.Application.findComponent("crmPageManager")
        } catch ($$e_1) {
            $v_0 = null
        }
        if (!IsNull($v_0))
            try {
                $v_0.unloadHandler()
            } catch ($v_1) {
            }
        else {
            var $v_2 = {};
            $v_2["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
            this.raiseEvent(29, $v_2)
        }
    },
    $3Z_3: function($p0) {
        $p0 = $p0[this.get_id()];
        var $v_0 = $p0["top"];
        this.get_element().offsetTop !== $v_0 && this.set_top($v_0);
        var $v_1 = $p0["left"];
        if (!IsNull($v_1)) {
            this.get_element().offsetLeft !== $v_1 && this.set_left($v_1);
            var $v_2 = $p0["width"];
            this.get_element().offsetWidth !== $v_2 && $v_2 > 0 && this.set_width($v_2);
            if (Sys.Browser.agent === Sys.Browser.Firefox) {
                var $v_3 = document.createElement("div");
                this.get_element().appendChild($v_3);
                this.get_element().removeChild($v_3)
            }
        }
    },
    $1j_3: function() {
        if (this.get_contentUrl().get_pageType() !== "entitylist") return false;
        this.get_element().setAttribute(this.$1i_3, this._iframeMgr.cacheGridIFrame());
        return true
    },
    $2Q_3: function($p0) {
        var $v_0 = {
            navigatedAt: Mscrm.DateTimeUtility.getUtcValue(Mscrm.DateTimeUtility.localDateTimeNow()),
            navigationCounter: window.NavigationCounter,
            navigationUri: $p0,
            tabSessionId: window.TabSessionId
        };
        Mscrm.MetricsReporting.instance().addMetric("pagenavigations", $v_0)
    },
    $2E_3: function($p0, $p1) {
        Mscrm.MetricsCollector.reportTimelineEvent("pagenavigations",
            $p1,
            Mscrm.DateTimeUtility.getUtcValue(Mscrm.DateTimeUtility.localDateTimeNow()),
            $p0)
    }
};
Mscrm.FrameDescriptor = function($p0, $p1) {
    this.$3_0 = $p0;
    this.$4_0 = $p1
};
Mscrm.FrameDescriptor.getKey = function($p0) {
    if ($p0.isTurboFormUrl()) return "TurboForm";
    var $v_0 = $p0.clone();
    $v_0.clearQuery();
    var $$dict_3 = $p0.get_query();
    for (var $$key_4 in $$dict_3) {
        var $v_4 = { key: $$key_4, value: $$dict_3[$$key_4] };
        if ($v_4.key === "extraqs") $v_0.appendToQuery($v_4.value.toString());
        else $v_0.get_query()[$v_4.key] = $v_4.value
    }
    var $v_1 = null, $v_2 = "0";
    switch ($p0.get_pageType()) {
    case "entityrecord":
        var $v_3 = IsNull($v_0.get_query()["id"]);
        if (!$v_3) $v_1 = "_E_" + $v_0.get_query()["etc"].toString() + $v_0.get_query()["id"].toString();
        else $v_1 = "_E_" + $v_0.get_query()["etc"].toString() + "_new";
        break;
    case "entitylist":
        $v_1 = "_G_" + $v_0.get_query()["etc"].toString() + "_";
        if ("layout" in $v_0.get_query()) $v_2 = $v_0.get_query()["layout"].toString();
        $v_1 += $v_2;
        if ("viewid" in $v_0.get_query()) $v_1 += $v_0.get_query()["viewid"].toString();
        break;
    default:
        $v_1 = $p0.toString();
        break
    }
    return $v_1
};
Mscrm.FrameDescriptor.prototype = {
    $3_0: null,
    get_iFrame: function() { return this.$3_0 },
    $4_0: null,
    get_key: function() { return this.$4_0 },
    set_key: function($p0) {
        this.$4_0 = $p0;
        return $p0
    },
    get_isGrid: function() { return !this.$4_0.indexOf("_G_") },
    get_isForm: function() { return !this.$4_0.indexOf("_E_") },
    get_isTurboForm: function() { return this.$4_0 === "TurboForm" }
};
Mscrm.IFrameManager = function($p0, $p1) {
    this._frameList = {};
    this.$Z_0 = $p1;
    if (!IsNull($p0)) {
        var $v_0 = Mscrm.FrameDescriptor.getKey(this.$Z_0.get_contentUrl());
        this.$0_0 = new Mscrm.FrameDescriptor($p0, $v_0);
        this._frameList[$v_0] = this.$0_0;
        this.$9_0 = this.$0_0
    } else this.$0_0 = null
};
Mscrm.IFrameManager.$2F = function($p0, $p1) {
    var $v_0 = window.parent.document.getElementById("popoutButton"),
        $v_1 = window.parent.document.getElementById("closeButton"),
        $v_2 = window.parent.document.getElementById("recordSetToolBarProxy");
    if (!IsNull($v_0)) {
        $v_0.style.display = $p1 ? "" : "none";
        if ($p1) $v_0.setAttribute("sourceUrl", $p0.toString());
        else $v_0.removeAttribute("sourceUrl")
    }
    if (!IsNull($v_1)) $v_1.style.display = $p1 ? "" : "none";
    if (!IsNull($v_2)) $v_2.style.display = $p1 ? "" : "none"
};
Mscrm.IFrameManager.$1Z = function($p0) {
    var $v_0 = $p0.$3_0.getAttribute("isPreserved");
    !IsNull($v_0) && $v_0 !== "always" && $p0.$3_0.attributes.removeNamedItem("isPreserved")
};
Mscrm.IFrameManager.$15 = function($p0) {
    if ($p0.$4_0 === "_EMPTY_") return false;
    var $v_0 = $p0.$3_0.getAttribute("isPreserved");
    if (!IsNull($v_0)) return $v_0 === "true" || $v_0 === "always";
    return false
};
Mscrm.IFrameManager.$2I = function($p0) {
    $p0.style.visibility = "visible";
    if (Mscrm.CrmBrowser.get_currentBrowser()
        .get_agent() ===
        4 ||
        Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
        var $v_0 = document.createAttribute("temp");
        $v_0.value = "";
        $p0.attributes.setNamedItem($v_0);
        $p0.attributes.removeNamedItem("temp");
        $p0.style.display = "block"
    }
};
Mscrm.IFrameManager.$22 = function($p0) {
    $p0.style.visibility = "hidden";
    if (Mscrm.CrmBrowser.get_currentBrowser()
        .get_agent() ===
        4 ||
        Mscrm.CrmBrowser.get_currentBrowser().get_isAndroid()) {
        var $v_0 = document.createAttribute("temp");
        $v_0.value = "";
        $p0.attributes.setNamedItem($v_0);
        $p0.attributes.removeNamedItem("temp");
        $p0.style.display = "none"
    }
};
Mscrm.IFrameManager.prototype = {
    $Z_0: null,
    $0_0: null,
    $L_0: null,
    $s_0: null,
    $9_0: null,
    $v_0: null,
    isTurboActiveFrameInOutlook: function() {
        if (Mscrm.SessionInfo.isOutlookClient() && !IsNull(this.$0_0) && this.$0_0.get_isTurboForm()) return true;
        else return false
    },
    get_currentIFrame: function() {
        if (IsNull(this.$0_0)) return null;
        else return this.$0_0.$3_0
    },
    $2W_0: function($p0, $p1) {
        var $v_0 = document.createElement("IFRAME");
        $v_0.frameBorder = "0";
        this.$Z_0.get_element().appendChild($v_0);
        $v_0.id = this.$2g_0();
        $v_0.setAttribute("name", $v_0.id);
        $v_0.style.border = "0";
        $v_0.style.borderStyle = "none";
        $v_0.style.overflow = "hidden";
        $v_0.style.position = "absolute";
        $v_0.style.left = "0px";
        $v_0.style.right = "0px";
        $v_0.style.height = "100%";
        $v_0.style.width = "100%";
        $v_0.title = $p1;
        return new Mscrm.FrameDescriptor($v_0, $p0)
    },
    prepareIFrame: function($p0, $p1, $p2) {
        var $v_0 = !!this.$0_0 && this.$0_0.get_isTurboForm(), $v_1 = $p0.isTurboFormUrl();
        if ($v_0 && !$v_1) {
            try {
                this.$0_0.$3_0.contentWindow.unloadForm()
            } catch ($v_9) {
            }
            var $v_8 = this.$0_0.$3_0.contentWindow.location.href;
            $v_8 += "&deactivate=true";
            this.$0_0.$3_0.contentWindow.location.replace($v_8)
        }
        var $v_2 = false,
            $v_3 = $p0.toString().toLowerCase(),
            $v_4 = $v_3.indexOf("homepage.aspx") > 0,
            $v_5 = $v_3.indexOf("/tools/") > -1 && $v_3.indexOf("sitemappath=settings") > -1;
        ($v_5 || window.IS_PRESERVE_IFRAME && ($v_3.indexOf("dashboard") > -1 || $v_4 || this.$2h_0() >= 4)) &&
            this.$2V_0();
        if (null !== this.$v_0) {
            this.destroyContentIframe();
            this.$v_0 = null;
            if ($v_4) {
                var $$dict_D = this._frameList;
                for (var $$key_E in $$dict_D) {
                    var $v_A = { key: $$key_E, value: $$dict_D[$$key_E] }, $v_B = $v_A.value;
                    !$v_B.get_isGrid() && this.$n_0($v_B)
                }
            }
        }
        var $v_6 = Mscrm.FrameDescriptor.getKey($p0), $v_7 = this.$3G_0($v_6);
        if (!$v_7) {
            this.$3R_0($p1, $p2, $v_6);
            $p0.isTurboFormUrl() && this.$2U_0()
        } else {
            $v_2 = this.$3Q_0($p0, $v_4, $v_6);
            $p0.isTurboFormUrl() && !IsNull(this.$9_0) && this.$n_0(this.$9_0);
            window.pageLoadedCheckForNavigateApi = true
        }
        return $v_2
    },
    $3R_0: function($p0, $p1, $p2) {
        if (!IsNull(this.$0_0)) {
            var $v_0 = false;
            if ($p1) this.$1Y_0(false);
            else if (Mscrm.IFrameManager.$15(this.$0_0)) this.$9_0 = null;
            else $v_0 = !this.$0_0.get_isGrid();
            this.$1q_0($v_0)
        }
        if (IsNull(this.$9_0) || $p1) {
            this.$0_0 = this.$2W_0($p2, $p0);
            this._frameList[$p2] = this.$0_0;
            if (!$p1) this.$9_0 = this.$0_0;
            else this.$v_0 = this.$0_0
        } else {
            delete this._frameList[this.$9_0.$4_0];
            !IsNull(this.$9_0) && Mscrm.IFrameManager.$1Z(this.$9_0);
            this.$9_0.$4_0 = $p2;
            this._frameList[$p2] = this.$9_0;
            this.$0_0 = this.$9_0;
            this.$0_0.get_isTurboForm() && this.$1Y_0(true)
        }
    },
    $3Q_0: function($p0, $p1, $p2) {
        var $v_0 = false, $v_1 = true, $v_2 = this.$3N_0($p0);
        if ($v_2.get_isGrid()) $v_0 = true;
        else if ($v_2.get_isTurboForm()) {
            $v_0 = false;
            if (!IsNull(this.$0_0) && (this.$0_0.get_isGrid() || Mscrm.IFrameManager.$15(this.$0_0))) $v_1 = false
        } else {
            $v_0 = false;
            if (Mscrm.IFrameManager.$15($v_2)) {
                $v_0 = true;
                $v_1 = true;
                Mscrm.IFrameManager.$1Z($v_2)
            }
            if (!IsNull(this.$0_0) && (this.$0_0.get_isGrid() || Mscrm.IFrameManager.$15(this.$0_0))) $v_1 = false
        }
        if (this.$0_0 !== $v_2) {
            this.$1q_0($v_1);
            if (window.IS_PRESERVE_IFRAME)
                if ($v_1 && !IsNull(this.$9_0) && this.$9_0.$4_0 in this._frameList
                ) delete this._frameList[this.$9_0.$4_0];
            this.$0_0 = $v_2;
            this.$3S_0(this.get_currentIFrame());
            if ($p1) Mscrm.IFrameManager.$2F("", false);
            else
                $p0.toString().toLowerCase().indexOf("entityrecord") > 0 &&
                    Mscrm.IFrameManager.$2F($p0.toString(), true)
        }
        if (!$v_0 && !$v_2.get_isTurboForm()) {
            var $v_3 = this.$1S_0();
            delete this._frameList[$v_3];
            this.$0_0.$4_0 = $p2;
            this._frameList[$p2] = this.$0_0;
            this.$1m_0(this.$0_0, true)
        }
        return $v_0
    },
    $2d_0: function($p0) {
        var $v_0 = $p0.$3_0.contentWindow.closureEvents;
        if (IsNull($v_0)) return null;
        for (var $v_1 = {}, $v_2 = 0; $v_2 < $v_0.length; $v_2 += 1) {
            var $v_3 = $v_0[$v_2];
            if ($v_3 && $v_3.length > 0) $v_1[$v_2.toString()] = $v_3
        }
        return $v_1
    },
    $1m_0: function($p0, $p1) {
        if (IsNull($p0.$3_0.contentWindow)) return;
        var $v_0 = this.$2d_0($p0);
        if (!IsNull($v_0)) {
            var $$dict_F = $v_0;
            for (var $$key_G in $$dict_F) {
                var $v_1 = { key: $$key_G, value: $$dict_F[$$key_G] };
                try {
                    for (var $v_2 = $v_1.value, $v_3 = 0; $v_3 < $v_2.length; $v_3 += 1) {
                        var $v_4 = $v_2[$v_3],
                            $v_5 = $v_4.targetObj,
                            $v_6 = $v_4.eventName,
                            $v_7 = $v_4.isEventAttachedByAddHandler;
                        if ($v_7) {
                            var $v_8 = $v_4.eventHandler, $v_9 = $v_5._events;
                            !IsNull($v_9) && $removeHandler($v_5, $v_6, $v_8)
                        } else {
                            var $v_A = $v_4.eventHandler, $v_B = $P_CRM($v_4.targetObj);
                            $v_B.unbind($v_6, $v_A)
                        }
                    }
                } catch ($$e_E) {
                }
            }
        }
        if ($p1) {
            $p0.$3_0.contentWindow.globalId = 1;
            $p0.$3_0.contentWindow.closureEvents = [];
            $p0.$3_0.contentWindow.uniqueId = undefined;
            $p0.$3_0.contentWindow.trackClosures = false
        }
    },
    $2V_0: function() {
        var $$dict_2 = this._frameList;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] }, $v_1 = $v_0.value;
            $v_1.get_isForm() && this.$n_0($v_1)
        }
    },
    preserveCurrentIFrame: function() {
        var $$dict_3 = this._frameList;
        for (var $$key_4 in $$dict_3) {
            var $v_0 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_1 = $v_0.value;
            if ($v_1 === this.$0_0) continue;
            var $v_2 = $v_1.$3_0.getAttribute("isPreserved");
            if (!IsNull($v_2) && $v_2 === "always") {
                this.$1t_0($v_1);
                break
            }
        }
        this.$1Y_0(true)
    },
    $1Y_0: function($p0) {
        if (!IsNull(this.$0_0)) {
            var $v_0 = document.createAttribute("isPreserved");
            $v_0.value = $p0 ? "always" : "true";
            this.$0_0.$3_0.attributes.setNamedItem($v_0)
        }
    },
    $3G_0: function($p0) { return $p0 in this._frameList || !isNullOrEmptyString(this.$1S_0()) },
    $3N_0: function($p0) {
        var $v_0 = Mscrm.FrameDescriptor.getKey($p0);
        if ($v_0 in this._frameList) return this._frameList[$v_0];
        var $v_1 = this.$1S_0();
        if (!isNullOrEmptyString($v_1)) return this._frameList[$v_1];
        return null
    },
    $n_0: function($p0) {
        if (!IsNull($p0) && $p0.$4_0 !== "_EMPTY_" && !$p0.get_isTurboForm()) {
            var $v_0 = null;
            try {
                $v_0 = $p0.$3_0.contentWindow.Sys.Application.findComponent("crmPageManager")
            } catch ($$e_2) {
                $v_0 = null
            }
            if (!IsNull($v_0))
                try {
                    $v_0.unloadHandler()
                } catch ($v_1) {
                }
            else {
                var $v_2 = {};
                $v_2["sourceUri"] = Mscrm.Utilities.getContentUrl(null);
                this.$Z_0.raiseEvent(29, $v_2)
            }
            if (Mscrm.Utilities.isFirefox())
                try {
                    if (!IsNull($p0.$3_0.contentWindow) &&
                        !IsNull($p0.$3_0.contentWindow.document) &&
                        !IsNull($p0.$3_0.contentWindow.document
                            .body)) $p0.$3_0.contentWindow.document.body.style.display = "none"
                } catch ($$e_5) {
                }
            $p0.$3_0.contentWindow.location.replace("about:blank");
            if (!IsNull($v_0)) {
                this.$1m_0($p0, false);
                if (!IsNull($p0.$3_0.contentWindow)) {
                    $p0.$3_0.contentWindow.globalId = 1;
                    $p0.$3_0.contentWindow.closureEvents = [];
                    $p0.$3_0.contentWindow.uniqueId = undefined;
                    $p0.$3_0.contentWindow.trackClosures = false
                }
            }
            delete this._frameList[$p0.$4_0];
            $p0.$4_0 = this.$2e_0();
            this._frameList[$p0.$4_0] = $p0;
            Mscrm.IFrameManager.$1Z($p0);
            return $p0.$4_0
        }
        return null
    },
    $1q_0: function($p0) {
        if (!IsNull(this.$0_0)) {
            Mscrm.IFrameManager.$22(this.$0_0.$3_0);
            $p0 && this.$n_0(this.$0_0)
        }
    },
    $3S_0: function($p0) { Mscrm.IFrameManager.$2I($p0) },
    destroyContentIframe: function() {
        this.$1t_0(this.$0_0);
        this.$0_0 = null
    },
    $1t_0: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = this.$n_0($p0);
            $clearHandlers($p0.$3_0);
            Mscrm.Utilities.destroyElement($p0.$3_0);
            delete this._frameList[$v_0]
        }
    },
    cacheGridIFrame: function() {
        if (IsNull(this.$L_0)) {
            this.$L_0 = this.$9_0;
            this.$9_0 = null;
            this.$0_0 = this.$L_0
        } else if (this.$0_0.$4_0 !== this.$L_0.$4_0) {
            var $v_0 = this.$L_0;
            this.$L_0 = this.$9_0;
            this.$9_0 = $v_0
        }
        return this.$L_0.$3_0.id
    },
    $2U_0: function() {
        if (IsNull(this.$s_0)) {
            this.$s_0 = this.$9_0;
            this.$9_0 = null;
            this.$0_0 = this.$s_0
        }
    },
    $2g_0: function() {
        var $v_0 = 0, $v_1, $v_2 = {}, $v_3, $v_4, $$dict_6 = this._frameList;
        for (var $$key_7 in $$dict_6) {
            var $v_5 = { key: $$key_7, value: $$dict_6[$$key_7] };
            $v_0++;
            $v_3 = $v_5.value.$3_0.id;
            if (!IsNull($v_3)) $v_2[$v_3] = 1
        }
        $v_4 = "contentIFrame" + $v_0.toString();
        if ($v_4 in $v_2)
            for ($v_1 = 0; $v_1 < $v_0 + 1; $v_1++) {
                $v_4 = "contentIFrame" + $v_1.toString();
                if (!($v_4 in $v_2)) break
            }
        return $v_4
    },
    $1S_0: function() {
        var $$dict_1 = this._frameList;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            if ($v_0.key.startsWith("_EMPTY_") && $v_0.value.$4_0 === "_EMPTY_") return $v_0.key
        }
        return null
    },
    $2e_0: function() {
        var $v_0 = 0, $v_1;
        do $v_1 = "_EMPTY_" + $v_0++;
        while ($v_1 in this._frameList);
        return $v_1
    },
    $2h_0: function() {
        var $v_0 = 0, $$dict_3 = this._frameList;
        for (var $$key_4 in $$dict_3) {
            var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] }, $v_2 = $v_1.key.toString().toLowerCase();
            if ($v_2.indexOf("empty") < 0) $v_0++
        }
        return $v_0
    }
};
Mscrm.HistoryManager = function($p0) {
    this.$$d_$3B_3 = Function.createDelegate(this, this.$3B_3);
    Mscrm.HistoryManager.initializeBase(this, [$p0]);
    var $v_0 = null, $v_1 = Mscrm.CrmUri.create(window.top.location.href);
    if ("newWindow" in $v_1.get_query() && $v_1.get_query()["newWindow"] === "true") {
        if ("histKey" in $v_1.get_query()) $v_0 = $v_1.get_query()["histKey"]
    } else if (!isInlineShell()) $v_0 = Math.floor(Math.random() * 1e9).toString();
    this.$1_3 = Mscrm.StorageFactory.$2f($v_0);
    if (!this.$1_3.get_saveStateIdList().get_length()) {
        this.$1_3.get_saveStateIdList().set_item(this.$2_3, "");
        var $$t_4;
        this.$1_3.get_history().set_item((this.set_$U_3(($$t_4 = this.$2_3) + 1), $$t_4), window.document.URL);
        var $$t_5;
        this.$1_3.get_checkPoint().set_item((this.set_$T_3(($$t_5 = this.$B_3) + 1), $$t_5), "true")
    } else {
        this.$2_3 = this.$1_3.get_historyPosition();
        this.$2M_3();
        this.$C_3 = this.$1_3.get_historyCount();
        this.$B_3 = this.$1_3.get_checkPointPosition();
        this.$F_3 = this.$1_3.get_totalCheckpoints();
        this.$10_3 = false;
        this.$i_3 = true;
        if (this.$1_3.get_historyPosition() - 2 >= 0 && window.performance.navigation.type == 2) {
            var $v_2 = this.$1_3.get_history().get_item(this.$2_3 - 2);
            if ($v_2.indexOf("applandingtilepage.aspx?sitemappath") > 0) this.$2_3 = this.$1_3.get_historyPosition() - 1
        }
    }
};
Mscrm.HistoryManager.prototype = {
    $a_3: null,
    $1_3: null,
    $C_3: 0,
    set_$1T_3: function($p0) {
        this.$C_3 = $p0;
        this.$1_3.set_historyCount(this.$C_3);
        return $p0
    },
    $2_3: 0,
    set_$U_3: function($p0) {
        this.$2_3 = $p0;
        this.$2M_3();
        this.$1_3.set_historyPosition(this.$2_3);
        return $p0
    },
    $B_3: 0,
    set_$T_3: function($p0) {
        this.$B_3 = $p0;
        this.$1_3.set_checkPointPosition(this.$B_3);
        return $p0
    },
    $F_3: 0,
    set_$1d_3: function($p0) {
        this.$F_3 = $p0;
        this.$1_3.set_totalCheckpoints(this.$F_3);
        return $p0
    },
    $i_3: false,
    $x_3: true,
    $1H_3: 0,
    get_$2P_3: function() { return Mscrm.CrmCrossBrowser.getHash(window.top.location) },
    getInitialContent: function(defaultValue) {
        var $v_0 = defaultValue;
        if (isInlineShell()) if (this.$2_3 > 1) $v_0 = this.$1_3.get_history().get_item(this.$2_3 - 1);
        return $v_0
    },
    get_uiButtonsState: function() {
        var $v_0 = {};
        $v_0["forwardButton"] = this.$2_3 === this.$C_3 ? 0 : 1;
        $v_0["backButton"] = this.$2_3 <= 1 ? 0 : 1;
        return $v_0
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!Mscrm.SessionInfo.isOutlookClient()) window.onhashchange = this.$$d_$3B_3
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 8:
            this.$2s_3(parameters);
            break;
        case 16:
            this.$2t_3(parameters);
            break;
        case 17:
            this.$2v_3(parameters);
            break;
        case 18:
            this.$2u_3(parameters);
            break;
        case 19:
            return this.$2q_3(parameters);
        case 6:
            this.$2z_3(parameters);
            break;
        case 9:
            this.$12_3(parameters, sourceComponent);
            break;
        case 43:
            this.$38_3(parameters);
            break;
        case 83:
            this.$2p_3(parameters);
            break;
        case 108:
            this.$33_3(parameters);
            break;
        default:
            break
        }
        return null
    },
    navigateBack: function(count) {
        if (this.$2_3 === 1) {
            var $v_1 = Mscrm.CrmUri.create(this.$1_3.get_history().get_item(0));
            if ($v_1.get_path().endsWith("/edit.aspx")) {
                this.raiseEvent(23, null);
                return
            }
            return
        }
        if (count <= 0) count = 1;
        if (count > this.$2_3) count = 1;
        var $v_0 = this.$18_3(this.$2_3 - count - 1);
        if ($v_0) {
            this.set_$U_3(this.$2_3 - count);
            this.set_$T_3(this.$B_3 - count)
        }
    },
    navigateForward: function(count) {
        if (this.$C_3 === 1) return;
        if (count <= 0) count = 1;
        if (count > this.$C_3 - this.$2_3) count = 1;
        var $v_0 = this.$18_3(this.$2_3 + count - 1);
        if ($v_0) {
            this.set_$U_3(this.$2_3 + count);
            this.set_$T_3(this.$B_3 + count)
        }
    },
    navigateBackCheckpoint: function(count) {
        if (this.$2_3 === 1) {
            var $v_3 = Mscrm.CrmUri.create(this.$1_3.get_history().get_item(0));
            this.raiseEvent(23, null);
            return
        }
        count = Math.max(1, count);
        var $v_0 = this.$B_3 - 2, $v_1 = -1;
        while (count > 0 && $v_0 >= 0) {
            if (this.$1_3.get_checkPoint().get_item($v_0) === "true") {
                if ($v_0 > $v_1) $v_1 = $v_0;
                --count
            }
            --$v_0
        }
        if (count > 0) $v_0 = Math.max(0, $v_1);
        else ++$v_0;
        var $v_2 = this.$18_3($v_0);
        if ($v_2) {
            this.set_$U_3($v_0 + 1);
            this.set_$T_3($v_0 + 1)
        }
    },
    $10_3: true,
    $12_3: function($p0, $p1) {
        if (this.$10_3 && $p1 !== Mscrm.PageManager.get_instance()) {
            this.$1_3.get_history().set_item(0, $p0["uri"]);
            this.$10_3 = false;
            var $v_0 = this.$1v_3();
            true === Mscrm.Utilities.replaceWindowHash($v_0) && this.$1_3.get_saveStateIdList().set_item(0, $v_0);
            this.set_$1T_3(1)
        }
    },
    $38_3: function($p0) {
        var $v_0 = 0;
        if (!IsNull($p0["count"])) $v_0 = $p0["count"];
        if (!IsNull($p0["isCheckPoint"])) {
            var $v_2 = $p0["isCheckPoint"], $v_3 = this.$1_3.get_checkPoint().get_item(this.$B_3 - 1) === "true";
            this.$1_3.get_checkPoint().set_item(this.$B_3 - 1, $v_2 ? "true" : "false");
            $v_3 !== $v_2 && this.set_$1d_3(this.$F_3 + ($v_2 ? 1 : 0) - ($v_3 ? 1 : 0))
        }
        var $v_1 = $p0["updateQueryString"];
        if (!IsNull($v_1)) {
            var $v_4 = Mscrm.CrmUri.create(this.$1_3.get_history().get_item(this.$2_3 - $v_0 - 1)),
                $v_5 = Mscrm.CrmUri.create("");
            $v_5.appendToQuery($v_1);
            var $$dict_8 = $v_5.get_query();
            for (var $$key_9 in $$dict_8) {
                var $v_6 = { key: $$key_9, value: $$dict_8[$$key_9] };
                $v_4.get_query()[$v_6.key] = $v_6.value
            }
            this.$1_3.get_history().set_item(this.$2_3 - $v_0 - 1, $v_4.toString())
        }
    },
    $18_3: function($p0) {
        if ($p0 < 0 || $p0 >= this.$C_3) return false;
        var $v_0 = {};
        $v_0["uri"] = this.$1_3.get_history().get_item($p0);
        $v_0["historyNavigation"] = true;
        $v_0["saveStateId"] = this.$1_3.get_saveStateIdList().get_item($p0);
        $v_0["sameWindow"] = true;
        var $v_1 = this.raiseEvent(21, $v_0), $v_2 = false;
        if ($v_1.length > 0) $v_2 = $v_1[0];
        return $v_2
    },
    $2q_3: function($p0) {
        var $v_0 = {};
        $v_0["uri"] = this.$1_3.get_history().get_item(this.$2_3 - 1);
        $v_0["checkpoint"] = this.$1_3.get_checkPoint().get_item(this.$B_3 - 1) === "true" ? true : false;
        $v_0["saveStateId"] = this.$1_3.get_saveStateIdList().get_item(this.$2_3 - 1);
        return $v_0
    },
    $2p_3: function($p0) { if (this.$3i_3($p0)) this.$i_3 = false },
    $2z_3: function($p0) { this.$1_3.get_saveStateIdList().set_item(this.$2_3 - 1, $p0["saveStateId"]) },
    $2s_3: function($p0) {
        if (!IsNull($p0["historyNavigation"]) && $p0["historyNavigation"]) return;
        if (!IsNull($p0["refresh"]) && $p0["refresh"]) return;
        if (!IsNull($p0["replace"]) && $p0["replace"]) {
            this.set_$U_3(this.$2_3 - 1);
            this.set_$1T_3(this.$2_3);
            this.set_$T_3(this.$B_3 - 1);
            this.$1_3.get_checkPoint().get_item(this.$B_3) === "true" && this.set_$1d_3(this.$F_3 - 1)
        } else this.$1_3.get_saveStateIdList().set_item(this.$2_3, this.$1v_3());
        var $$t_2;
        this.$1_3.get_history().set_item((this.set_$U_3(($$t_2 = this.$2_3) + 1), $$t_2), $p0["uri"]);
        this.$3U_3(this.$2_3 - 1, this.$C_3 - 1);
        this.set_$1T_3(this.$2_3);
        var $v_0 = true;
        if (!IsNull($p0["checkpoint"])) $v_0 = $p0["checkpoint"];
        var $$t_3;
        this.$1_3.get_checkPoint().set_item((this.set_$T_3(($$t_3 = this.$B_3) + 1), $$t_3), $v_0 ? "true" : "false");
        $v_0 && this.set_$1d_3(this.$F_3 + 1)
    },
    $2t_3: function($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"])) $v_0 = $p0["count"];
        this.navigateBack($v_0)
    },
    $2v_3: function($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"])) $v_0 = $p0["count"];
        this.navigateForward($v_0)
    },
    $2u_3: function($p0) {
        var $v_0 = 1;
        if (!IsNull($p0) && !IsNull($p0["count"])) $v_0 = $p0["count"];
        this.navigateBackCheckpoint($v_0)
    },
    $33_3: function($p0) { this.$18_3(this.$2_3 - 1) },
    $3U_3: function($p0, $p1) {
        if ($p0 <= $p1) {
            var $v_0 = 0, $v_1 = [];
            while ($p0 <= $p1) {
                $v_1[$v_0++] = this.$1_3.get_saveStateIdList().get_item($p0);
                ++$p0
            }
            var $v_2 = {};
            $v_2["groupIds"] = $v_1;
            this.raiseEvent(82, $v_2)
        }
    },
    $2M_3: function() {
        if (IsNull(this.$a_3)) {
            this.$a_3 = document.createAttribute("count");
            this.get_element().attributes.setNamedItem(this.$a_3)
        }
        this.$a_3.value = this.$2_3.toString()
    },
    $3B_3: function() {
        if (this.$i_3) {
            var $v_0 = null, $v_1 = "";
            $v_0 = Mscrm.CrmUri.create(this.$1_3.get_history().get_item(this.$2_3 - 1));
            $v_1 = $v_0.get_query()["extraqs"];
            var $v_2 = Mscrm.CrmUri.create($v_1), $v_3 = $v_2.get_query()["_skipNavigateBackCount"];
            if (!IsNull($v_3) && this.$x_3) {
                this.$x_3 = false;
                history.go(-1)
            } else {
                this.$x_3 = true;
                var $v_4 = this.get_$2P_3(), $v_5 = this.$1_3.get_saveStateIdList().indexOf($v_4);
                if ($v_5 >= 0 && $v_5 < this.$C_3) {
                    var $v_6 = $v_5 - (this.$2_3 - 1);
                    if ($v_6 < 0) {
                        if (this.$2_3 === this.$C_3) {
                            var $v_7 = {};
                            $v_7["saveStateId"] = this.$1_3.get_saveStateIdList().get_item(this.$2_3 - 1);
                            $v_7["groupId"] = $v_7["saveStateId"];
                            this.raiseEvent(6, $v_7)
                        }
                        this.navigateBack($v_6 * -1)
                    } else this.navigateForward($v_6)
                }
            }
        } else this.$i_3 = true
    },
    $3i_3: function($p0) {
        if (!IsNull($p0) && !IsNull($p0["saveStateId"])) {
            var $v_0 = $p0["saveStateId"], $v_1 = this.get_$2P_3();
            if ($v_0 !== $v_1) {
                window.top.location.hash = $v_0;
                return true
            }
        }
        return false
    },
    $1v_3: function() {
        var $v_0;
        while (true) {
            $v_0 = Math.floor(Math.random() * 1e9).toString();
            var $v_1 = this.$1_3.get_saveStateIdList().indexOf($v_0);
            if ($v_1 < 0 || $v_1 >= this.$C_3) break
        }
        return $v_0
    },
    retrieveHistoryPosition: function() { return this.$2_3 },
    get_historyPositionOffset: function() { return this.$1H_3 },
    set_historyPositionOffset: function(value) {
        this.$1H_3 = value;
        return value
    },
    isOutlookPerceivedFirstVisitingPage: function() {
        if (Mscrm.SessionInfo.isOutlookClient())
            if (this.$2_3 === 1) return true;
            else if (this.$2_3 === 2)
                if (!IsNull(this.$1_3.get_history().get_item(0))) {
                    var $v_0 = Mscrm.CrmUri.create(this.$1_3.get_history().get_item(0)).isOutlookPreparationPageUrl();
                    if ($v_0) return true
                } else return false;
        return false
    }
};
Mscrm.InMemoryHistoryData = function() {
    this.$h_0 = new Mscrm.InMemoryHistoryStore;
    this.$e_0 = new Mscrm.InMemoryHistoryStore;
    this.$Y_0 = new Mscrm.InMemoryHistoryStore
};
Mscrm.InMemoryHistoryData.prototype = {
    $2_0: 0,
    $C_0: 0,
    $B_0: 0,
    $F_0: 0,
    get_saveStateIdList: function() { return this.$h_0 },
    get_history: function() { return this.$e_0 },
    get_checkPoint: function() { return this.$Y_0 },
    get_historyPosition: function() { return this.$2_0 },
    set_historyPosition: function($p0) {
        this.$2_0 = $p0;
        return $p0
    },
    get_historyCount: function() { return this.$C_0 },
    set_historyCount: function($p0) {
        this.$C_0 = $p0;
        return $p0
    },
    get_checkPointPosition: function() { return this.$B_0 },
    set_checkPointPosition: function($p0) {
        this.$B_0 = $p0;
        return $p0
    },
    get_totalCheckpoints: function() { return this.$F_0 },
    set_totalCheckpoints: function($p0) {
        this.$F_0 = $p0;
        return $p0
    }
};
Mscrm.InMemoryHistoryStore = function() { this.$j_0 = [] };
Mscrm.InMemoryHistoryStore.prototype = {
    get_item: function($p0) { return this.$j_0[$p0] },
    set_item: function($p0, $p1) {
        this.$j_0[$p0] = $p1;
        return $p1
    },
    indexOf: function($p0) { return Array.indexOf(this.$j_0, $p0) },
    get_length: function() { return this.$j_0.length }
};
Mscrm.SessionStorageHistoryData = function($p0, $p1) {
    this.$h_0 = new Mscrm.SessionStorageHistoryStore("SaveStateIdList", $p0, $p1);
    this.$e_0 = new Mscrm.SessionStorageHistoryStore("HistoryUrl", $p0, $p1);
    this.$Y_0 = new Mscrm.SessionStorageHistoryStore("CheckPoint", $p0, $p1);
    this.$G_0 = new Mscrm.SessionStorageHistoryStore("HistoryVariables", $p0, $p1);
    if (!this.$G_0.get_length()) {
        this.$G_0.set_item(Mscrm.SessionStorageHistoryData.$14, "0");
        this.$G_0.set_item(Mscrm.SessionStorageHistoryData.$13, "0");
        this.$G_0.set_item(Mscrm.SessionStorageHistoryData.$y, "0");
        this.$G_0.set_item(Mscrm.SessionStorageHistoryData.$1E, "0")
    }
};
Mscrm.SessionStorageHistoryData.prototype = {
    $h_0: null,
    $e_0: null,
    $Y_0: null,
    $G_0: null,
    get_saveStateIdList: function() { return this.$h_0 },
    get_history: function() { return this.$e_0 },
    get_checkPoint: function() { return this.$Y_0 },
    $1C_0: function($p0, $p1) { this.$G_0.set_item($p0, $p1.toString()) },
    $11_0: function($p0) { return parseInt(this.$G_0.get_item($p0)) },
    get_historyPosition: function() { return this.$11_0(Mscrm.SessionStorageHistoryData.$14) },
    set_historyPosition: function($p0) {
        this.$1C_0(Mscrm.SessionStorageHistoryData.$14, $p0);
        return $p0
    },
    get_historyCount: function() { return this.$11_0(Mscrm.SessionStorageHistoryData.$13) },
    set_historyCount: function($p0) {
        this.$1C_0(Mscrm.SessionStorageHistoryData.$13, $p0);
        return $p0
    },
    get_checkPointPosition: function() { return this.$11_0(Mscrm.SessionStorageHistoryData.$y) },
    set_checkPointPosition: function($p0) {
        this.$1C_0(Mscrm.SessionStorageHistoryData.$y, $p0);
        return $p0
    },
    get_totalCheckpoints: function() { return this.$11_0(Mscrm.SessionStorageHistoryData.$1E) },
    set_totalCheckpoints: function($p0) {
        this.$1C_0(Mscrm.SessionStorageHistoryData.$1E, $p0);
        return $p0
    }
};
Mscrm.SessionStorageHistoryStore = function($p0, $p1, $p2) {
    var $v_0 = "_historyStorage-" + $p0 + "$" + $p2 + "$";
    if (!isNullOrEmptyString($p1)) {
        this.$Q_0 = "_historyStorage-" + $p1 + "-" + $p0;
        Mscrm.SessionStorageHistoryStore.$1l($v_0)
    } else this.$Q_0 = $v_0
};
Mscrm.SessionStorageHistoryStore.$1l = function($p0) {
    for (var $v_0 = sessionStorage.length, $v_1 = {}, $v_2 = 0; $v_2 < $v_0; $v_2++) {
        var $v_3 = sessionStorage.key($v_2);
        if ($v_3.startsWith($p0)) $v_1[$v_3] = 1
    }
    var $$dict_6 = $v_1;
    for (var $$key_7 in $$dict_6) {
        var $v_4 = { key: $$key_7, value: $$dict_6[$$key_7] };
        sessionStorage.removeItem($v_4.key)
    }
};
Mscrm.SessionStorageHistoryStore.get_$3E = function() {
    var $v_0 = false;
    if ("sessionStorage" in window && window["sessionStorage"] !== null)
        try {
            var $v_1 = new Mscrm.SessionStorageHistoryStore("test", null, null);
            $v_1.set_item(0, "1");
            $v_0 = true;
            Mscrm.SessionStorageHistoryStore.$1l($v_1.$Q_0)
        } catch ($$e_2) {
        }
    return $v_0
};
Mscrm.SessionStorageHistoryStore.prototype = {
    $Q_0: null,
    $1z_0: function($p0) { return String.format("{0}{1}", this.$Q_0, $p0) },
    get_item: function($p0) { return sessionStorage.getItem(this.$1z_0($p0)) },
    set_item: function($p0, $p1) {
        sessionStorage.setItem(this.$1z_0($p0), $p1);
        return $p1
    },
    indexOf: function($p0) {
        for (var $v_0 = -1, $v_1 = sessionStorage.length, $v_2 = 0; $v_2 < $v_1; $v_2++)
            if (this.get_item($v_2) === $p0) {
                $v_0 = $v_2;
                break
            }
        return $v_0
    },
    get_length: function() {
        for (var $v_0 = sessionStorage.length, $v_1 = 0, $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = sessionStorage.key($v_2);
            if ($v_3.startsWith(this.$Q_0)) $v_1++
        }
        return $v_1
    }
};
Mscrm.StorageFactory = function() {};
Mscrm.StorageFactory.$2f = function($p0) {
    var $v_0 = null;
    if (Mscrm.SessionStorageHistoryStore.get_$3E())
        $v_0 = new Mscrm.SessionStorageHistoryData($p0, window.ORG_UNIQUE_NAME);
    else $v_0 = new Mscrm.InMemoryHistoryData;
    return $v_0
};
Mscrm.NavigationManager = function() { Mscrm.NavigationManager.initializeBase(this) };
Mscrm.NavigationManager.prototype = {
    initialize: function() { Mscrm.CrmUIComponent.prototype.initialize.call(this) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 21:
            return this.$2y_2(parameters, sourceComponent);
        case 22:
            this.$2x_2(parameters, sourceComponent);
            break;
        case 23:
            return this.$2w_2(parameters, sourceComponent);
        case 24:
            this.$37_2(parameters);
            break;
        case 97:
            return this.$1k_2(parameters, sourceComponent);
        case 87:
        case 9:
            return this.$12_2(parameters, sourceComponent)
        }
        return null
    },
    $37_2: function($p0) {
        if (!(window.IS_LIVE || window.IS_SPLA || window.IS_CLAIMS)) return false;
        this.raiseEvent(68, null);
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        $v_0.get_query()["signout"] = "1";
        window.location.href = $v_0.toString();
        return false
    },
    $12_2: function($p0, $p1) {
        if ("sourceUri" in $p0 && !IsNull($p0["sourceUri"])) {
            var $v_0 = $p0["sourceUri"].toString();
            if (!isNullOrEmptyString($v_0) && $v_0.indexOf("main.aspx") === -1 && $v_0.indexOf("form") === -1) {
                var $v_1 = !IsNull(window.urlForNavigateApi) ? window.urlForNavigateApi.toString() : "";
                if (this.$24_2($v_0) ||
                    !this.$25_2($v_0) && isNullOrEmptyString($v_1) ||
                    !this.$25_2($v_0) &&
                    !isNullOrEmptyString($v_1) &&
                    $v_1.indexOf("?") !== -1 &&
                    $v_0.indexOf("?") !== -1 &&
                    $v_0.split("?")[0].indexOf($v_1.split("?")[0]) !== -1) {
                    window.pageLoadedCheckForNavigateApi = true;
                    window.urlForNavigateApi = null;
                    if ($v_0.indexOf("pid") !== -1 || this.$3F_2($v_0)) {
                        var $v_2 = $P_CRM("#TabButtonHelpId");
                        $v_2.trigger("helpIconLoaded")
                    }
                }
            }
        }
        return this.$1k_2($p0, $p1)
    },
    $24_2: function($p0) {
        if ($p0.indexOf("dashboard.aspx") !== -1 || $p0.indexOf("pid") !== -1) return true;
        return false
    },
    $25_2: function($p0) {
        if ($p0.indexOf("pid") !== -1 || $p0.indexOf("home_dashboards.aspx") !== -1) return true;
        return false
    },
    $3F_2: function($p0) {
        if (this.$24_2($p0) && $p0.indexOf("dashboardId") !== -1 && $p0.indexOf("dashboardType") !== -1) return true;
        return false
    },
    $1k_2: function($p0, $p1) {
        var $v_0 = this.raiseEvent(19, null);
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            var $v_1 = {};
            $v_1["saveStateId"] = $v_0[0]["saveStateId"];
            !IsNull($v_1["saveStateId"]) && this.raiseEvent(83, $v_1)
        }
        return null
    },
    $1n_2: function($p0) {
        var $v_0 = this.raiseEvent(46, $p0), $v_1 = true, $v_2 = 0;
        while ($v_1 && $v_2 < $v_0.length) {
            var $v_3 = $v_0[$v_2++];
            if (!IsNull($v_3)) $v_1 = $v_1 && $v_3
        }
        return $v_1
    },
    $2w_2: function($p0, $p1) {
        if (!$p0) $p0 = {};
        $p0["windowClosing"] = true;
        if (this.$1n_2($p0)) {
            closeWindow();
            return true
        }
        return false
    },
    $2x_2: function($p0, $p1) {
        $p0["refresh"] = true;
        $p1.raiseEvent(8, $p0)
    },
    $2y_2: function($p0, $p1) {
        var $v_0 = null, $v_1 = false, $v_2 = null, $v_3 = $p0["uri"];
        if (IsNull($v_3) || !$v_3.length) {
            $v_0 = Mscrm.CrmUri.create("/main.aspx");
            $v_0.get_query()["pagetype"] = $p0["pagetype"];
            switch ($v_0.get_query()["pagetype"]) {
            case "entityrecord":
                $v_0.get_query()["etc"] = $p0["etc"];
                if (!isNullOrEmptyString($p0["id"])) $v_0.get_query()["id"] = $p0["id"];
                if (!isNullOrEmptyString($p0["sitemappath"])) $v_0.get_query()["sitemappath"] = $p0["sitemappath"];
                break;
            case "entitylist":
                $v_0.get_query()["etc"] = $p0["etc"];
                $v_0.get_query()["viewid"] = $p0["viewid"];
                break
            }
        } else $v_0 = Mscrm.CrmUri.create($v_3);
        $p0["includeContextInPath"] && $v_0.set_includeContextInPath(true);
        if (isNullOrEmptyString($v_0.get_path()))
            $p0["uri"] = "/_common/error/errorHandler.aspx?inline=1&ErrorCode=0x80631116";
        $v_1 = $v_0.get_path().toLowerCase().endsWith("/main.aspx");
        if ($v_1) $v_2 = Mscrm.CrmUri.create("");
        var $v_4 = $p0["queryString"];
        if ($v_1)
            if (!IsNull($v_0.get_query()["pagemode"])) {
                if (!IsNull($v_4) && $v_4.length > 0)
                    $v_4 = $v_4 + "&pagemode=" + CrmEncodeDecode.CrmUrlEncode($v_0.get_query()["pagemode"].toString());
                else $v_4 = "pagemode=" + CrmEncodeDecode.CrmUrlEncode($v_0.get_query()["pagemode"].toString());
                delete $v_0.get_query().pagemode
            }
        if (!IsNull($v_4) && $v_4.length > 0)
            if ($v_1) {
                var $v_9 = Mscrm.CrmUri.create("");
                $v_9.appendToQuery($v_4);
                var $$dict_9 = $v_9.get_query();
                for (var $$key_A in $$dict_9) {
                    var $v_A = { key: $$key_A, value: $$dict_9[$$key_A] };
                    $v_2.get_query()[$v_A.key] = $v_A.value
                }
            } else $v_0.appendToQuery($v_4);
        var $v_5 = $p0["query"];
        if (!IsNull($v_5)) {
            var $$dict_D = $v_5;
            for (var $$key_E in $$dict_D) {
                var $v_B = { key: $$key_E, value: $$dict_D[$$key_E] };
                if ($v_1) $v_2.get_query()[$v_B.key] = $v_B.value;
                else $v_0.get_query()[$v_B.key] = $v_B.value
            }
        }
        if ($v_1 && !IsNull($v_2)) $v_0.get_query()["extraqs"] = $v_2.get_queryString();
        var $v_6 = true;
        if ($v_1) {
            if ($v_0.get_query()["pagetype"] === "entityrecord") $v_6 = false
        } else if ($v_0.get_path().toUpperCase().endsWith("/EDIT.ASPX")) $v_6 = false;
        if (!IsNull($p0["sameWindow"]) && $p0["sameWindow"]) $v_6 = $p0["sameWindow"];
        if (!$v_6) {
            var $v_C = "";
            if ($v_0.get_path().toLowerCase().endsWith("/homepage.aspx")) $v_C = "ENTITYLIST";
            if ($v_0.get_path().toLowerCase().endsWith("/edit.aspx")) $v_C = "ENTITYRECORD";
            $v_0 = Mscrm.Utilities.getPageUrl($v_0, $v_C);
            $v_1 = $v_0.get_path().toLowerCase().endsWith("/main.aspx");
            if ($v_1) {
                $v_0.get_query()["newWindow"] = true;
                $v_0.get_query()["histKey"] = Math.floor(Math.random() * 1e9).toString()
            }
            var $v_D = $p0["windowWidth"], $v_E = $p0["windowHeight"], $v_F = buildWinName(null), $v_G = "";
            if (!IsNull($p0["features"])) $v_G += $p0["features"];
            if (!window.ORG_IS_APP_MODE) $v_G += ",location=1,toolbar=1,menubar=1";
            !IsNull($p0["trimStatus"]) && !$p0["trimStatus"] && Mscrm.CrmWindow.set_trimFeatures(false);
            return !IsNull(openStdWin($v_0, $v_F, $v_D, $v_E, $v_G))
        }
        window.pageLoadedCheckForNavigateApi = false;
        Mscrm.InlineDialogUtility.closeAllInlineDialogs();
        (!("disposeQuickCreateObject" in $p0) || $p0["disposeQuickCreateObject"]) &&
            typeof Mscrm.GlobalQuickCreate !== "undefined" &&
            typeof Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior !== "undefined" &&
            Mscrm.GlobalQuickCreate.GlobalQuickCreateBehavior.closeAllGlobalQuickCreateForms();
        var $v_7 = [$p1],
            $v_8 = Mscrm.Utilities.createCallbackFunctionObject("handleNavigateRequestCallback", this, $v_7);
        $p0["callbackForNavigate"] = $v_8;
        if (!this.$1n_2($p0)) return false;
        return this.handleNavigateRequestCallback($p0, $p1)
    },
    handleNavigateRequestCallback: function(parameters, sourceComponent) {
        if (!IsNull(parameters["historyNavigation"]) && parameters["historyNavigation"]) {
            sourceComponent.raiseEvent(8, parameters);
            return true
        }
        if (Mscrm.NavigationMode.DefaultNavigationMode === 1) {
            var $v_0 = this.raiseEvent(19, null);
            if (!IsNull($v_0) && !IsNull($v_0[0])) parameters["saveStateId"] = $v_0[0]["saveStateId"];
            if (IsNull(parameters["saveStateId"]))
                parameters["saveStateId"] = Math.floor(Math.random() * 1e9).toString();
            parameters["groupId"] = parameters["saveStateId"];
            this.raiseEvent(6, parameters)
        }
        if (IsNull(sourceComponent)) sourceComponent = Mscrm.PageManager.get_instance();
        sourceComponent.raiseEvent(8, parameters);
        return true
    }
};
Mscrm.GlobalMruConnector = function() {};
Mscrm.GlobalMruConnector.get_$2B = function() { return $find("crmRecentlyViewed") };
Mscrm.GlobalMruConnector.get_$1W = function() {
    if (!Mscrm.GlobalMruConnector.$f) Mscrm.GlobalMruConnector.$f = new Array(0);
    return Mscrm.GlobalMruConnector.$f
};
Mscrm.GlobalMruConnector.get_$1e = function() {
    if (!Mscrm.GlobalMruConnector.$l) Mscrm.GlobalMruConnector.$l = new Array(0);
    return Mscrm.GlobalMruConnector.$l
};
Mscrm.GlobalMruConnector.get_$1X = function() {
    if (!Mscrm.GlobalMruConnector.$g) Mscrm.GlobalMruConnector.$g = new Array(0);
    return Mscrm.GlobalMruConnector.$g
};
Mscrm.GlobalMruConnector.get_$1f = function() {
    if (!Mscrm.GlobalMruConnector.$m) Mscrm.GlobalMruConnector.$m = new Array(0);
    return Mscrm.GlobalMruConnector.$m
};
Mscrm.GlobalMruConnector.retrieveMruData = function() {
    var $v_0 = [], $v_1 = Mscrm.GlobalMruConnector.get_$2B().fetchAllMruData();
    Mscrm.GlobalMruConnector.$f = $v_1["PinnedRecordList"];
    Mscrm.GlobalMruConnector.$l = $v_1["UnpinnedRecordList"];
    Mscrm.GlobalMruConnector.$g = $v_1["PinnedViewList"];
    Mscrm.GlobalMruConnector.$m = $v_1["UnpinnedViewList"];
    var $v_2 = Mscrm.GlobalMruConnector.$1u(Mscrm.GlobalMruConnector.get_$1W(), Mscrm.GlobalMruConnector.get_$1e(), 0);
    $v_2.Caption = window.GlobalMruRecordsTitle;
    $v_2.Id = "RRId";
    var $v_3 = Mscrm.GlobalMruConnector.$1u(Mscrm.GlobalMruConnector.get_$1X(), Mscrm.GlobalMruConnector.get_$1f(), 1);
    $v_3.Caption = window.GlobalMruViewsTitle;
    $v_3.Id = "RVId";
    Array.add($v_0, $v_3);
    Array.add($v_0, $v_2);
    return $v_0
};
Mscrm.GlobalMruConnector.$1u = function($p0, $p1, $p2) {
    var $v_0 = new Mscrm.NavigationNode;
    $v_0.NodeType = 0;
    $v_0.Children = [];
    Mscrm.GlobalMruConnector.$1p($v_0, $p0, $p2);
    Array.add($v_0.Children, Mscrm.GlobalMruConnector.$2n());
    Mscrm.GlobalMruConnector.$1p($v_0, $p1, $p2);
    return $v_0
};
Mscrm.GlobalMruConnector.$1p = function($p0, $p1, $p2) {
    for (var $v_0 = "/_imgs/NavBar/ActionImgs/", $v_1 = 0, $v_1 = 0; $v_1 < $p1.length; $v_1++) {
        if (!Mscrm.GlobalMruConnector.$3I($p1[$v_1])) continue;
        var $v_2 = new Mscrm.NavigationNode;
        $v_2.Caption = $p1[$v_1]["title"];
        $v_2.Id = $p1[$v_1]["Id"];
        var $v_3 = $p1[$v_1]["entityTypeCode"], $v_4 = parseInt($v_3);
        if (Mscrm.EtcUtil.isSettingAreaEntityWithoutSiteMapPath($v_4)) continue;
        var $v_5 = window.EntityToEntityActionImages[$v_3];
        if (isNullOrEmptyString($v_5)) $v_2.ImageUrl = $v_0 + "CustomEntity_32.png";
        else $v_2.ImageUrl = $v_5;
        var $v_6 = Mscrm.CrmUri.create($v_2.ImageUrl), $v_7 = Mscrm.ImageStrip.getImageInfo($v_6);
        $v_2.StripeUrl = $v_7.source;
        $v_2.StripeClass = $v_7.cssClass;
        var $v_8 = window.EntityToEntityColorAccent[$v_3];
        if (isNullOrEmptyString($v_8)) $v_2.ColorAccent = "#555555";
        else $v_2.ColorAccent = $v_8;
        var $v_9 = $p1[$v_1]["action"], $v_A = {};
        if (!$p2) $v_A["ActionType"] = "MruAction";
        else {
            var $v_B = Mscrm.CrmUri.create("?" + $v_9), $v_C = $v_B.get_query()["sitemappath"];
            $v_2.SiteMapPath = isNullOrEmptyString($v_C) ? "" : $v_C;
            if (isNullOrEmptyString($v_2.SiteMapPath)) continue;
            $v_A["ActionType"] = "NavigateToPageAction";
            $v_A["PageUrl"] = "/" + window.ORG_UNIQUE_NAME + "/" + Mscrm.Utilities.getViewURL($v_4, $v_2.Id, $v_9)
        }
        $v_A["EntityTypeCode"] = $v_4;
        $v_A["Action"] = $v_9;
        $v_A["Id"] = $v_2.Id;
        $v_2.Action = $v_A;
        $v_2.Parameters = {};
        $v_2.Parameters["tooltip"] = String.format(window.GlobalMruItemTooltipFormat,
            $p1[$v_1]["entityDisplayName"],
            $p1[$v_1]["title"]);
        $v_2.Parameters["isPinned"] = parseInt($p1[$v_1]["pinStatus"]);
        $v_2.Parameters["type"] = "pinnable";
        $v_2.Parameters["recordType"] = $p2;
        Array.add($p0.Children, $v_2)
    }
    return
};
Mscrm.GlobalMruConnector.$3I = function($p0) {
    if (isNullOrEmptyString($p0["title"]) ||
        isNullOrEmptyString($p0["Id"]) ||
        isNullOrEmptyString($p0["entityTypeCode"])) return false;
    return true
};
Mscrm.GlobalMruConnector.$2n = function() {
    var $v_0 = new Mscrm.NavigationNode;
    $v_0.Caption = "Separator";
    $v_0.Parameters = {};
    $v_0.Parameters["type"] = "separator";
    return $v_0
};
Mscrm.GlobalMruConnector.pinStatusChanged = function(navNode) {
    Mscrm.GlobalMruConnector.get_$2B().changePinRecord(navNode.Id,
        navNode.Action["Action"],
        navNode.Parameters["isPinned"].toString());
    return Mscrm.GlobalMruConnector.$2j(navNode)
};
Mscrm.GlobalMruConnector.$2j = function($p0) {
    var $v_0 = parseInt($p0.Parameters["recordType"]), $v_1 = parseInt($p0.Parameters["isPinned"]), $v_2, $v_3;
    if ($v_0 === 0) {
        $v_3 = !$v_1 ? Mscrm.GlobalMruConnector.get_$1e() : Mscrm.GlobalMruConnector.get_$1W();
        $v_2 = !$v_1 ? Mscrm.GlobalMruConnector.get_$1W() : Mscrm.GlobalMruConnector.get_$1e()
    } else {
        $v_3 = !$v_1 ? Mscrm.GlobalMruConnector.get_$1f() : Mscrm.GlobalMruConnector.get_$1X();
        $v_2 = !$v_1 ? Mscrm.GlobalMruConnector.get_$1X() : Mscrm.GlobalMruConnector.get_$1f()
    }
    var $v_4 = Mscrm.GlobalMruConnector.$2i($v_3, $p0.Id);
    if ($v_4 < 0) return -1;
    var $v_5 = $v_3[$v_4], $v_6;
    if (!$v_1) $v_6 = Mscrm.GlobalMruConnector.$2l($v_2, $v_5);
    else $v_6 = Mscrm.GlobalMruConnector.$2k($v_2, $v_5);
    if ($v_6 < 0) return -1;
    Array.removeAt($v_3, $v_4);
    Array.insert($v_2, $v_6, $v_5);
    var $v_7 = !$v_1 ? 0 : $v_3.length + 1;
    return $v_6 + $v_7
};
Mscrm.GlobalMruConnector.$2i = function($p0, $p1) {
    for (var $v_0 = 0, $v_0 = 0; $v_0 < $p0.length; $v_0++) {
        var $v_1 = $p0[$v_0];
        if ($p1 === $v_1["Id"]) return $v_0
    }
    return -1
};
Mscrm.GlobalMruConnector.$2k = function($p0, $p1) {
    for (var $v_0 = new Date($p1["lastAccessed"]), $v_1 = 0, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1], $v_3 = new Date($v_2["lastAccessed"]), $v_4 = elapsedTime($v_0, $v_3);
        if (IsNull($v_4) || isNaN($v_4)) {
            Mscrm.MetricsReporting.instance().addMetric("Perf.Client.RecentlyViewed.AssertFailure",
                String.format("Invalid records passed to compare function : [{0},{1}]",
                    $v_0.toString(),
                    $v_3.toString()));
            return -1
        }
        if ($v_4 < 0) break
    }
    return $v_1
};
Mscrm.GlobalMruConnector.$2l = function($p0, $p1) {
    for (var $v_0 = $p1["title"], $v_1 = 0, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
        var $v_2 = $p0[$v_1];
        if ($v_0.localeCompare($v_2["title"]) < 0) break
    }
    return $v_1
};
Mscrm.RecentlyViewed = function($p0) {
    this.$$d_recentlyViewedContextMenuHandler = Function.createDelegate(this, this.recentlyViewedContextMenuHandler);
    this.$$d_pinRecentlyViewedItemSelected = Function.createDelegate(this, this.pinRecentlyViewedItemSelected);
    this.$$d_recentlyViewedItemSelected = Function.createDelegate(this, this.recentlyViewedItemSelected);
    this.$$d_recentlyViewedHidden = Function.createDelegate(this, this.recentlyViewedHidden);
    this.$$d_empty = Function.createDelegate(this, this.empty);
    this.$$d_$3c_3 = Function.createDelegate(this, this.$3c_3);
    this.$$d_$35_3 = Function.createDelegate(this, this.$35_3);
    this.$$d_$3a_3 = Function.createDelegate(this, this.$3a_3);
    this.$$d_$3d_3 = Function.createDelegate(this, this.$3d_3);
    this.$$d_$3b_3 = Function.createDelegate(this, this.$3b_3);
    this.$$d_$3m_3 = Function.createDelegate(this, this.$3m_3);
    this.$$d_$3P_3 = Function.createDelegate(this, this.$3P_3);
    this.$$d_$2A_3 = Function.createDelegate(this, this.$2A_3);
    this.$S_3 = new Array(0);
    this.$1N_3 = new RegExp("Timestamp:Loaded=([^,\x0a]+),Updated=([^,\x0a]+),Saved=([^,\x0a]*)\x0a([\\s\\S]*)");
    this.$p_3 = null;
    this.$O_3 = null;
    this.$N_3 = null;
    this.pinnedIconPath = window.LOCID_UI_DIR === "RTL"
        ? window.CDNURL + "/_imgs/recentlyviewed/pinned_rtl.png"
        : "/_imgs/recentlyviewed/pinned.png";
    this.unPinnedIconPath = window.LOCID_UI_DIR === "RTL"
        ? window.CDNURL + "/_imgs/recentlyviewed/unpinned_rtl.png"
        : "/_imgs/recentlyviewed/unpinned.png";
    Mscrm.RecentlyViewed.initializeBase(this, [$p0]);
    this.$1A_3 = new Mscrm.RecentlyViewedInternal.RecentlyViewedService(this)
};
Mscrm.RecentlyViewed.createRecentlyViewedItemObject = function() { return new Mscrm.RecentlyViewedItem };
Mscrm.RecentlyViewed.prototype = {
    $5_3: null,
    $D_3: null,
    $1A_3: null,
    $R_3: false,
    get_dateFormat: function() { return "MM/dd/yyyy HH:mm:ss" },
    userId: null,
    isSaveEnabled: true,
    $4_3: "",
    $M_3: 11,
    get_maxRecordLength: function() { return this.$M_3 },
    $H_3: 40,
    get_maxEntityRecordCount: function() { return this.$H_3 },
    set_maxEntityRecordCount: function(value) {
        this.$H_3 = value;
        return value
    },
    $I_3: 10,
    get_maxViewRecordCount: function() { return this.$I_3 },
    set_maxViewRecordCount: function(value) {
        this.$I_3 = value;
        return value
    },
    $r_3: 0,
    $6_3: "\n",
    $7_3: ";",
    $X_3: null,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$4_3 = "RV" + this.userId;
        this.$5_3 = new Array(0);
        this.$D_3 = new Array(0);
        $addHandler(window, "unload", this.$$d_$2A_3);
        this.$r_3 = window.setTimeout(this.$$d_$3P_3, 1.8e6);
        Xrm.Internal.getServiceDirectory().register(Xrm.Interfaces.Services.IMostRecentlyViewedService, this.$1A_3)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Xrm.Internal.getServiceDirectory().unregister(Xrm.Interfaces.Services.IMostRecentlyViewedService, this.$1A_3);
        $removeHandler(window, "unload", this.$$d_$2A_3);
        window.clearTimeout(this.$r_3);
        this.$2A_3(null);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 9:
            this.$12_3(parameters, sourceComponent);
            break;
        case 47:
            this.$39_3(parameters, sourceComponent);
            break;
        case 49:
            return this.$34_3(parameters);
        case 51:
            this.$32_3(parameters);
            break;
        case 103:
            this.$31_3(parameters);
            break;
        case 52:
            this.$2o_3(parameters);
            break;
        case 60:
            this.$3A_3(parameters, sourceComponent);
            break;
        case 72:
            this.$2r_3(parameters, sourceComponent);
            break;
        case 68:
            this.$2N_3();
            this.$1K_3();
            this.$R_3 = true;
            break;
        case 75:
            this.$R_3 = false;
            break;
        default:
            break
        }
        return null
    },
    $3P_3: function() {
        this.$2N_3();
        this.$r_3 = window.setTimeout(this.$$d_$3P_3, 1.8e6)
    },
    $2N_3: function() {
        if (this.$26_3()) {
            this.$O_3 = new Date;
            var $$t_1 = this;
            this.$J_3(function($p1_0) { $$t_1.$3l_3($p1_0) })
        }
    },
    $3l_3: function($p0) { this.$2O_3($p0, true, this.$$d_$3m_3, -1, false) },
    $3m_3: function($p0, $p1) {
        if ($p0.Success) {
            this.$N_3 = new Date;
            var $v_0 = $p0.ReturnValue.toString();
            if (!isNullOrEmptyString($v_0)) {
                var $v_1 = this.$z_3($v_0);
                this.$K_3($v_1, $v_1)
            }
        }
    },
    $2A_3: function($p0) {
        if (this.get_isDisposed()) return;
        window.clearTimeout(this.$r_3);
        if (this.$R_3) return;
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if (!IsNull($v_0.get_query()["signout"]) &&
            ($v_0.get_query()["signout"] === "1" || $v_0.get_query()["signout"] === "2")) return;
        var $v_1 = false;
        try {
            var $v_2 = window.self.masterWindow();
            if (!IsNull($v_2) && $v_2 !== window.self) {
                var $v_3 = $v_2.Sys.Application.findComponent("crmRecentlyViewed");
                if (!IsNull($v_3)) $v_1 = true
            }
        } catch ($$e_5) {
        }
        if (!$v_1)
            if (this.$26_3()) {
                var $v_4 = this.$J_3(null);
                this.$2O_3($v_4, false, null, 500, true);
                this.$1K_3()
            }
    },
    $26_3: function() {
        if (!this.isSaveEnabled) return false;
        var $v_0 = true, $v_1 = {};
        if (this.$3M_3($v_1)) {
            var $v_2 = $v_1["savedTime"];
            if (!IsNull($v_2) && !isNaN($v_2)) {
                var $v_3 = false, $v_4 = $v_1["updatedTime"];
                if (!IsNull($v_4)) $v_3 = !!($v_3 | elapsedTime($v_2, $v_4) > 0);
                $v_0 = $v_3
            }
        } else $v_0 = false;
        return $v_0
    },
    $2o_3: function($p0) {
        var $v_0 = $p0;
        this.addRecord(0,
            $v_0.Id,
            $v_0.TypeCode.toString(),
            $v_0.TypeName,
            $v_0.DisplayName,
            $v_0.Name,
            $v_0.Action,
            null)
    },
    $12_3: function($p0, $p1) {
        var $v_0 = Mscrm.CrmUri.create($p0["uri"]);
        if ($v_0.get_path().toUpperCase().endsWith("/MAIN.ASPX")) {
            var $v_1 = $v_0.get_query()["mode"];
            if (isNullOrEmptyString($v_1) || $v_1 !== "iframe") return
        }
        var $$t_6 = this;
        this.$J_3(function($p1_0) {
            try {
                $$t_6.$30_3($p0, $p1)
            } catch ($$e_5) {
            }
        })
    },
    $30_3: function($p0, $p1) {
        var $v_0 = 0, $v_1 = $p0["uri"], $v_2 = Mscrm.CrmUri.create($v_1), $v_3 = null, $v_4 = {};
        if ($p1.get_id() === "crmContentPanel") {
            if ($v_2.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX")) return;
            $v_4["pageType"] = "isv";
            $v_0 = 2;
            delete $v_2.get_query().pagemode;
            $v_3 = $v_2.toString()
        } else if ($p1.get_id() === "crmPageManager" || $p1.get_id() === "crmInlinePageManager")
            if ($v_2.get_path().toUpperCase().endsWith("/USERDEFINED/EDIT.ASPX")) {
                $v_4["pageType"] = "entity";
                $v_0 = 0
            } else if ($v_2.get_path().toUpperCase().endsWith("/HOMEPAGE.ASPX")) {
                $v_4["pageType"] = "grid";
                $v_0 = 1;
                this.$X_3 = $v_2.get_query()["sitemappath"]
            } else if (Mscrm.Utilities.isHomepageUrl($v_2)) {
                $v_4["pageType"] = "isv";
                $v_0 = 2;
                delete $v_2.get_query().pagemode;
                $v_3 = $v_2.toString()
            }
        var $v_5 = Mscrm.PageManager.get_instance().raiseEvent(4, $v_4);
        if (IsNull($v_5) || $v_5.length < 1) return;
        for (var $v_6 = {}, $v_D = 0; $v_D < $v_5.length; $v_D++) if (!IsNull($v_5[$v_D])) $v_6 = $v_5[$v_D];
        if (!$v_6) return;
        var $v_7 = $v_6["Id"],
            $v_8 = $v_6["otc"],
            $v_9 = $v_6["etn"],
            $v_A = $v_6["title"],
            $v_B = $v_6["entitydisplayname"],
            $v_C = $v_6["iconpath"];
        if (!IsNull($v_6["viewtype"])) {
            $v_3 = String.format("viewtype={0}", CrmEncodeDecode.CrmUrlEncode($v_6["viewtype"]));
            if (!isNullOrEmptyString(this.$X_3))
                $v_3 = String.format("{0}&sitemappath={1}", $v_3, CrmEncodeDecode.CrmUrlEncode(this.$X_3));
            else return;
            if (Mscrm.EntityPropUtil
                .isActivityTypeCode(parseInt($v_8, 10)))
                $v_3 = String.format("{0}&type={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_9))
        }
        if (!IsNull($v_2.get_query()["visualizationId"]))
            $v_3 = String.format("{0}&visualizationId={1}",
                $v_3,
                CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationId"]));
        if (!IsNull($v_2
            .get_query()["visualizationType"]))
            $v_3 = String.format("{0}&visualizationType={1}",
                $v_3,
                CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationType"]));
        if (!IsNull($v_2
            .get_query()["visualizationPaneMode"]))
            $v_3 = String.format("{0}&visualizationPaneMode={1}",
                $v_3,
                CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["visualizationPaneMode"]));
        if (!IsNull($v_2.get_query()["layout"]))
            $v_3 = String.format("{0}&layout={1}", $v_3, CrmEncodeDecode.CrmUrlEncode($v_2.get_query()["layout"]));
        if ($v_2.get_path().toUpperCase().endsWith("/HOME_DASHBOARDS.ASPX")) {
            $v_7 = $p0["id"];
            if (IsNull($v_7)) return;
            $v_8 = $p0["otc"];
            $v_9 = $p0["etn"];
            $v_A = $p0["title"];
            $v_B = $p0["entitydisplayname"];
            $v_3 = $p0["action"];
            $v_0 = 0
        }
        if ($v_0 !== 2 && IsNull($v_7)) return;
        this.addRecord($v_0, $v_7, $v_8, $v_9, $v_B, $v_A, $v_3, $v_C)
    },
    $39_3: function($p0, $p1) {
        var $v_0 = $p0["Id"],
            $v_1 = $p0["otc"],
            $v_2 = $p0["etn"],
            $v_3 = $p0["title"],
            $v_4 = $p0["entitydisplayname"],
            $v_5 = String.format("viewtype={0}", CrmEncodeDecode.CrmUrlEncode($p0["viewtype"]));
        if (!isNullOrEmptyString(this.$X_3))
            $v_5 = String.format("{0}&sitemappath={1}", $v_5, CrmEncodeDecode.CrmUrlEncode(this.$X_3));
        else return;
        if (Mscrm.EntityPropUtil
            .isActivityTypeCode(parseInt($v_1, 10)))
            $v_5 = String.format("{0}&type={1}", $v_5, CrmEncodeDecode.CrmUrlEncode($v_2));
        var $v_6 = $p0["iconpath"];
        this.addRecord(1, $v_0, $v_1, $v_2, $v_4, $v_3, $v_5, $v_6)
    },
    $3A_3: function($p0, $p1) {
        var $v_0 = "", $v_1 = false, $v_2 = this.$J_3(null);
        if (!IsNull($v_2)) {
            for (var $v_3 = $v_2.split(this.$6_3), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4].trimStart(), $v_6 = $v_5.split(this.$7_3);
                if ($v_6.length === this.$M_3)
                    if ($v_6[1] === $p0["viewId"]) {
                        var $v_8 = Mscrm.CrmUri.create("dummy?" + $v_6[6]);
                        $v_8.get_query()["visualizationId"] = $p0["visualizationId"];
                        $v_8.get_query()["visualizationType"] = $p0["visualizationType"];
                        $v_8.get_query()["visualizationPaneMode"] = $p0["visualizationPaneMode"];
                        $v_8.get_query()["layout"] = $p0["layout"];
                        $v_6[6] = $v_8.get_queryString().substring(1, $v_8.get_queryString().length);
                        $v_1 = true
                    }
                var $v_7 = $v_6.join(this.$7_3);
                $v_0 = $v_0 + $v_7 + this.$6_3
            }
            $v_1 && this.$K_3($v_0, $v_2)
        }
    },
    $2r_3: function($p0, $p1) { this.$12_3($p0, $p1) },
    $32_3: function($p0) {
        var $v_0 = $p0["Id"],
            $v_1 = $p0["otc"],
            $v_2 = $p0["etn"],
            $v_3 = $p0["title"],
            $v_4 = $p0["entitydisplayname"],
            $v_5 = $p0["iconPath"];
        this.addRecord(0, $v_0, $v_1, $v_2, $v_4, $v_3, null, $v_5)
    },
    $o_3: function($p0, $p1) {
        if (!$p0) {
            var $v_0 = this.$J_3(null);
            this.$1r_3($v_0)
        } else {
            var $$t_4 = this;
            this.$J_3(function($p1_0) {
                $$t_4.$1r_3($p1_0);
                !IsNull($p1) && $p1()
            })
        }
    },
    $1r_3: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = 0, $v_1 = 0;
            this.$D_3 = new Array(0);
            this.$5_3 = new Array(0);
            for (var $v_2 = $p0.split(this.$6_3), $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3].trimStart(), $v_5 = $v_4.split(this.$7_3);
                if ($v_5.length === this.$M_3) {
                    var $v_6 = parseInt($v_5[0], 10), $v_7 = $v_6, $v_8 = {};
                    $v_8["Id"] = $v_5[1];
                    $v_8["entityTypeCode"] = $v_5[2];
                    $v_8["entityTypeName"] = $v_5[3];
                    $v_8["entityDisplayName"] = CrmEncodeDecode.CrmUrlDecode($v_5[4]);
                    $v_8["title"] = CrmEncodeDecode.CrmUrlDecode($v_5[5]);
                    $v_8["action"] = CrmEncodeDecode.CrmUrlDecode($v_5[6]);
                    $v_8["pinStatus"] = $v_5[9];
                    $v_8["iconPath"] = $v_5[7];
                    $v_8["lastAccessed"] = $v_5[8];
                    if ($v_7 === 1) this.$D_3[$v_1++] = $v_8;
                    else this.$5_3[$v_0++] = $v_8
                }
            }
        } else {
            this.$5_3 = new Array(0);
            this.$D_3 = new Array(0)
        }
        this.$D_3.sort(this.$$d_$3b_3);
        this.$5_3.sort(this.$$d_$3b_3)
    },
    $3b_3: function($p0, $p1) {
        var $v_0 = $p0,
            $v_1 = $p1,
            $v_2 = new Date($v_0["lastAccessed"]),
            $v_3 = new Date($v_1["lastAccessed"]),
            $v_4 = elapsedTime($v_3, $v_2);
        if (IsNull($v_4) || isNaN($v_4)) {
            Mscrm.MetricsReporting.instance().addMetric("Perf.Client.RecentlyViewed.AssertFailure",
                String.format("Invalid records passed to compare function : [{0},{1}]",
                    $v_0["lastAccessed"],
                    $v_1["lastAccessed"]));
            $v_4 = 1
        }
        return $v_4
    },
    addRecord: function(type, objectId, entityTypeCode, entityTypeName, entityDisplayName, title, action, iconPath) {
        try {
            if (isNullOrEmptyString(title) ||
                isNullOrEmptyString(objectId) ||
                Mscrm.EtcUtil.isSettingAreaEntityWithoutSiteMapPath(parseInt(entityTypeCode))) return;
            title = CrmEncodeDecode.CrmUrlEncode(title);
            action = CrmEncodeDecode.CrmUrlEncode(action);
            entityDisplayName = CrmEncodeDecode.CrmUrlEncode(entityDisplayName);
            var $v_0 = new Date;
            $v_0.setHours($v_0.getHours() + $v_0.getTimezoneOffset() / 60);
            var $v_1 = "";
            $v_1 = this.$2Y_3(type,
                objectId,
                entityTypeCode,
                entityTypeName,
                entityDisplayName,
                title,
                action,
                iconPath,
                $v_0);
            var $$t_C = this;
            this.$J_3(function($p1_0) { $$t_C.$2R_3($p1_0, $v_1, type, objectId, action) })
        } catch ($$e_B) {
        }
    },
    $2R_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = $p1 + "0;" + this.$6_3, $v_1 = "", $v_2 = "", $v_3 = "", $v_4 = 0;
        if (!IsNull($p0))
            for (var $v_7 = $p0.split(this.$6_3), $v_8 = 0; $v_8 < $v_7.length; $v_8++) {
                var $v_9 = $v_7[$v_8].trimStart(), $v_A = $v_9.split(this.$7_3);
                if ($v_A.length === this.$M_3) {
                    var $v_B = $v_A[0].trimStart(), $v_C = $v_A[1].trimStart(), $v_D = $v_A[6].trimStart();
                    if (this.$3e_3($v_B, $p2))
                        if (!IsNull($p3) && $v_C !== "" && $v_C === $p3) {
                            if ($v_A[9] === "1") $v_0 = $p1 + "1;" + this.$6_3
                        } else if ($p2 === 2 &&
                            $v_D !== "" &&
                            !IsNull($p4) &&
                            ($v_D.startsWith($p4) || $p4.startsWith($v_D))) {
                            var $v_E = new Date;
                            $v_E.setHours($v_E.getHours() + $v_E.getTimezoneOffset() / 60);
                            $v_A[8] = $v_E.format("MM/dd/yyyy HH:mm:ss");
                            $v_0 = $v_A.join(this.$7_3) + this.$6_3
                        } else if ($v_3 === "" && $v_A[9] === "0") $v_3 = $v_9 + this.$6_3;
                        else {
                            if ($v_3 === "") $v_1 = $v_1 + $v_9 + this.$6_3;
                            else $v_2 = $v_2 + $v_9 + this.$6_3;
                            $v_4++
                        }
                    else $v_1 = $v_1 + $v_9 + this.$6_3
                }
            }
        var $v_5 = 0;
        if (!$p2 || $p2 === 2) $v_5 = this.$H_3 - 1;
        if ($p2 === 1) $v_5 = this.$I_3 - 1;
        if ($v_4 < $v_5) $v_1 = $v_1 + $v_3 + $v_2 + $v_0;
        else if ($v_4 === $v_5) $v_1 = $v_1 + $v_2 + $v_0;
        else $v_1 = $v_1 + $v_2;
        var $v_6 = $v_1.trim().split(this.$6_3);
        $v_6.sort(this.$$d_$3d_3);
        this.$O_3 = new Date;
        this.$K_3($v_6.join(this.$6_3), $p0)
    },
    $3d_3: function($p0, $p1) {
        if (isNullOrEmptyString($p0)) return 1;
        if (isNullOrEmptyString($p1)) return -1;
        var $v_0 = new Date($p0.split(this.$7_3)[8]),
            $v_1 = new Date($p1.split(this.$7_3)[8]),
            $v_2 = elapsedTime($v_1, $v_0);
        if (IsNull($v_2) || isNaN($v_2)) {
            Mscrm.MetricsReporting.instance().addMetric("Perf.Client.RecentlyViewed.AssertFailure",
                String.format("Invalid records passed to compare function : [{0},{1}]",
                    $v_0.toString(),
                    $v_1.toString()));
            $v_2 = 1
        }
        return $v_2
    },
    $3e_3: function($p0, $p1) {
        var $v_0 = parseInt($p0, 10);
        if ($v_0 === $p1) return true;
        if (!$v_0 && $p1 === 2 || $v_0 === 2 && !$p1) return true;
        return false
    },
    $2Y_3: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
        var $v_0 = $p0, $v_1 = $v_0, $v_2 = new Array(1), $v_3 = 0;
        $v_2[$v_3++] = $v_1;
        if (!IsNull($p1)) $v_2[$v_3++] = $p1;
        else $v_2[$v_3++] = "";
        if (!IsNull($p2)) $v_2[$v_3++] = $p2;
        else $v_2[$v_3++] = "";
        if (!IsNull($p3)) $v_2[$v_3++] = $p3;
        else $v_2[$v_3++] = "";
        if (!IsNull($p4)) $v_2[$v_3++] = $p4;
        else $v_2[$v_3++] = "";
        $v_2[$v_3++] = $p5;
        if (!IsNull($p6)) $v_2[$v_3++] = $p6;
        else $v_2[$v_3++] = "";
        if (!IsNull($p7)) $v_2[$v_3++] = $p7;
        else $v_2[$v_3++] = "";
        $v_2[$v_3++] = $p8.format("MM/dd/yyyy HH:mm:ss");
        return this.$1w_3($v_2)
    },
    $1w_3: function($p0) {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append($p0[0]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[1]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[2]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[3]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[4]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[5]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[6]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[7]);
        $v_0.append(this.$7_3);
        $v_0.append($p0[8]);
        $v_0.append(this.$7_3);
        return $v_0.toString()
    },
    $3M_3: function($p0) {
        var $v_0 = false, $v_1 = this.$27_3();
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = $v_1.match(this.$1N_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                if (IsNull($p0)) $p0 = {};
                $p0["syncedTime"] = isNullOrEmptyString($v_2[1]) ? null : new Date($v_2[1]);
                $p0["updatedTime"] = isNullOrEmptyString($v_2[2]) ? null : new Date($v_2[2]);
                $p0["savedTime"] = isNullOrEmptyString($v_2[3]) ? null : new Date($v_2[3]);
                $v_0 = true
            }
        }
        return $v_0
    },
    $27_3: function() {
        var $v_0 = null;
        try {
            $v_0 = Mscrm.CrmLocalStorage.getItem(this.$4_3)
        } catch ($v_1) {
        }
        return $v_0
    },
    $J_3: function($p0) {
        var $v_0 = this.$27_3(), $v_1 = false;
        if (!isNullOrEmptyString($v_0)) {
            var $v_2 = $v_0.match(this.$1N_3);
            if (!IsNull($v_2) && $v_2.length === 5) {
                var $v_3 = new Date($v_2[1]), $v_4 = new Date;
                if (elapsedTime($v_3, $v_4) < 3.6e6) {
                    this.$p_3 = $v_3;
                    $v_0 = $v_2[4];
                    $v_1 = true
                }
            }
        }
        if ($v_1) {
            if (!IsNull($v_0)) $v_0 = this.$20_3($v_0);
            !IsNull($p0) && $p0($v_0)
        } else {
            this.$1K_3();
            if (!IsNull($p0)) this.$S_3[this.$S_3.length] = $p0;
            $v_0 = this.$3L_3(!IsNull($p0))
        }
        return $v_0
    },
    $16_3: false,
    $1U_3: null,
    $3L_3: function($p0) {
        var $v_0 = null;
        if (this.$R_3 || $p0 && this.$16_3) return $v_0;
        this.$1U_3 = new Date;
        var $v_1 = new RemoteCommand("RecentlyViewedWebService", "RetrieveRecentlyViewedData", null);
        $v_1.IncludeContextInPath = true;
        $v_1.ErrorHandler = this.$$d_$3a_3;
        var $v_2 = null;
        if ($p0) $v_2 = this.$$d_$35_3;
        var $v_3 = $v_1.Execute($v_2);
        if (!$p0) {
            if ($v_3.Success) {
                var $v_4 = $v_3.ReturnValue;
                $v_0 = this.$21_3($v_4)
            }
        } else this.$16_3 = true;
        return $v_0
    },
    $3a_3: function($p0, $p1) {},
    $35_3: function($p0, $p1) {
        var $v_0 = null;
        if ($p0.Success) {
            $v_0 = $p0.ReturnValue;
            this.$21_3($v_0)
        }
        this.$16_3 = false
    },
    $21_3: function($p0) {
        this.$p_3 = this.$1U_3;
        var $v_0 = this.$z_3($p0);
        $v_0 = this.$20_3($v_0);
        this.$K_3($v_0, $v_0);
        for (var $v_1 = 0; $v_1 < this.$S_3.length; $v_1++) {
            var $v_2 = this.$S_3[$v_1];
            $v_2($v_0)
        }
        this.$S_3 = new Array(0);
        return $v_0
    },
    $31_3: function($p0) {
        if (IsNull($p0)) return;
        try {
            var $v_0 = $p0["objectIds"], $$t_4 = this;
            this.$J_3(function($p1_0) { $$t_4.$3Y_3($p1_0, $v_0) })
        } catch ($$e_3) {
        }
    },
    $3Y_3: function($p0, $p1) {
        if (IsNull($p0) || IsNull($p1) || !$p1.length) return;
        $p0 = $p0.trim();
        for (var $v_0 = $p0.split(this.$6_3), $v_1 = "", $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2].split(this.$7_3), $v_4 = $v_3[1];
            if (!this.$3H_3($v_4, $p1)) $v_1 += $v_0[$v_2] + this.$6_3
        }
        $v_1 = $v_1.trim();
        this.$K_3($v_1, $p0)
    },
    $3H_3: function($p0, $p1) {
        if (IsNull($p0) || IsNull($p1) || !$p1.length) return false;
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) if ($p0.toUpperCase() === $p1[$v_0].toUpperCase()) return true;
        return false
    },
    $20_3: function($p0) {
        $p0 = $p0.trim();
        for (var $v_0 = $p0.split(this.$6_3), $v_1 = new Array(0), $v_2 = new Array(0), $v_3 = false, $v_4 = 0;
            $v_4 < $v_0.length;
            $v_4++) {
            var $v_5 = $v_0[$v_4].split(this.$7_3);
            try {
                var $v_6 = parseInt($v_5[0]);
                if ($v_6 === 1) $v_2[$v_2.length] = $v_0[$v_4];
                else $v_1[$v_1.length] = $v_0[$v_4]
            } catch ($v_7) {
                $v_3 = true
            }
        }
        if ($v_2.length > this.$I_3) {
            var $v_8 = $v_2.length - this.$I_3;
            $v_2.sort(this.$$d_$3d_3);
            for (var $v_9 = 0; $v_9 < this.$I_3; $v_9++) $v_2[$v_9] = $v_2[$v_9 + $v_8];
            $v_2.length = this.$I_3;
            $v_3 = true
        }
        if ($v_1.length > this.$H_3) {
            var $v_A = $v_1.length - this.$H_3;
            $v_1.sort(this.$$d_$3d_3);
            for (var $v_B = 0; $v_B < this.$H_3; $v_B++) $v_1[$v_B] = $v_1[$v_B + $v_A];
            $v_1.length = this.$H_3;
            $v_3 = true
        }
        if ($v_3) {
            var $v_C = $v_2.join(this.$6_3);
            $v_C = $v_C + this.$6_3 + $v_1.join(this.$6_3);
            $v_C = $v_C.trim();
            this.$K_3($v_C, $v_C);
            $p0 = $v_C
        }
        return $p0
    },
    $2O_3: function($p0, $p1, $p2, $p3, $p4) {
        var $v_0 = null;
        if (this.$R_3) return $v_0;
        if (isNullOrEmptyString($p0)) return $v_0;
        for (var $v_1 = $p0.split(this.$6_3), $v_2 = {}, $v_7 = 0; $v_7 < $v_1.length; $v_7++) {
            var $v_8 = $v_1[$v_7].split(this.$7_3);
            if ($v_8.length !== this.$M_3) {
                if (!isNullOrEmptyString($v_1[$v_7]));
                continue
            }
            var $v_9 = 0, $v_A = $v_8[2];
            if (!isNullOrEmptyString($v_A)) $v_9 = parseInt($v_A, 10);
            else $v_9 = 4709;
            if (isNaN($v_9) || !$v_9) continue;
            var $v_B = $v_2[$v_9.toString()];
            if (IsNull($v_B)) {
                $v_B = [];
                $v_2[$v_9.toString()] = $v_B
            }
            $v_B[$v_B.length] = $v_8
        }
        var $v_3 = new Sys.StringBuilder("<RecentlyViewedData>"), $$dict_I = $v_2;
        for (var $$key_J in $$dict_I) {
            var $v_C = { key: $$key_J, value: $$dict_I[$$key_J] };
            $v_3.append(String.format("<RecentlyViewedEntityData etc='{0}'>",
                CrmEncodeDecode.CrmXmlAttributeEncode($v_C.key)));
            for (var $v_D = $v_C.value, $v_E = 0; $v_E < $v_D.length; $v_E++) {
                var $v_F = $v_D[$v_E];
                $v_3.append(String
                    .format("<RecentlyViewedItem>\r\n\t\t\t\t\t\t<Type>{0}</Type>\r\n\t\t\t\t\t\t<ObjectId>{1}</ObjectId>\r\n\t\t\t\t\t\t<EntityTypeCode>{2}</EntityTypeCode>\r\n\t\t\t\t\t\t<EntityTypeName>{3}</EntityTypeName>\r\n\t\t\t\t\t\t<DisplayName>{4}</DisplayName>\r\n\t\t\t\t\t\t<Title>{5}</Title>\r\n\t\t\t\t\t\t<Action>{6}</Action>\r\n\t\t\t\t\t\t<IconPath>{7}</IconPath>\r\n\t\t\t\t\t\t<LastAccessed>{8}</LastAccessed>\r\n\t\t\t\t\t\t<PinStatus>{9}</PinStatus>\r\n\t\t\t\t\t</RecentlyViewedItem>", CrmEncodeDecode.CrmXmlEncode($v_F[0]), CrmEncodeDecode.CrmXmlEncode($v_F[1]), CrmEncodeDecode.CrmXmlEncode($v_F[2]), CrmEncodeDecode.CrmXmlEncode($v_F[3]), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[4])), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[5])), CrmEncodeDecode.CrmXmlEncode(CrmEncodeDecode.CrmUrlDecode($v_F[6])), CrmEncodeDecode.CrmXmlEncode($v_F[7]), CrmEncodeDecode.CrmXmlEncode($v_F[8]), CrmEncodeDecode.CrmXmlEncode($v_F[9] === "1" ? "true" : "false")))
            }
            $v_3.append("</RecentlyViewedEntityData>")
        }
        $v_3.append("</RecentlyViewedData>");
        var $v_4 = new RemoteCommand("RecentlyViewedWebService", "UploadRecentlyViewed", null);
        $v_4.IncludeContextInPath = true;
        $v_4.ErrorHandler = this.$$d_$3a_3;
        $v_4.SetParameter("recentlyViewedXml", $v_3.toString().trim());
        $v_4.SetParameter("retrieveAfterUpdated", $p1);
        var $v_5 = new Date, $v_6 = $p3 < 0 ? $v_4.Execute($p2) : $v_4.Execute($p2, $p3, $p4);
        if (IsNull($p2) && !IsNull($v_6) && $v_6.Success) {
            this.$N_3 = $v_5;
            if ($p1) $v_0 = $v_6.ReturnValue.toString()
        }
        return $v_0
    },
    $z_3: function($p0) {
        if (isNullOrEmptyString($p0)) return "";
        for (var $v_0 = new Sys.StringBuilder,
            $v_1 = XUI.Xml.LoadXml($p0),
            $v_2 = XUI.Xml.SelectNodes($v_1, "/RecentlyViewedData/RecentlyViewedEntityData", null),
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) {
            var $v_4 = $v_2[$v_3];
            try {
                var $v_5 = 0, $v_6 = null, $v_7 = $v_4.attributes.getNamedItem("etn");
                if (!IsNull($v_7)) $v_6 = $v_7.nodeValue;
                if (isNullOrEmptyString($v_6)) $v_5 = parseInt($v_4.attributes.getNamedItem("etc").nodeValue, 10);
                if (isNullOrEmptyString($v_6) && $v_5 <= 0) continue;
                for (var $v_8 = XUI.Xml.SelectNodes($v_4, "RecentlyViewedItem", null), $v_9 = 0;
                    $v_9 < $v_8.length;
                    $v_9++) {
                    var $v_A = $v_8[$v_9];
                    try {
                        var $v_B = parseInt(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_A, "Type", null)), 10),
                            $v_C = null,
                            $v_D = XUI.Xml.SelectSingleNode($v_A, "ObjectId", null);
                        if (!IsNull($v_D)) $v_C = XUI.Xml.GetText($v_D);
                        var $v_E = null, $v_F = XUI.Xml.SelectSingleNode($v_A, "DisplayName", null);
                        if (!IsNull($v_F)) $v_E = XUI.Xml.GetText($v_F);
                        var $v_G = null, $v_H = XUI.Xml.SelectSingleNode($v_A, "Title", null);
                        if (!IsNull($v_H)) $v_G = XUI.Xml.GetText($v_H);
                        var $v_I = null, $v_J = XUI.Xml.SelectSingleNode($v_A, "Action", null);
                        if (!IsNull($v_J)) $v_I = XUI.Xml.GetText($v_J);
                        var $v_K = null, $v_L = XUI.Xml.SelectSingleNode($v_A, "IconPath", null);
                        if (!IsNull($v_L)) $v_K = XUI.Xml.GetText($v_L);
                        var $v_M = false, $v_N = XUI.Xml.SelectSingleNode($v_A, "PinStatus", null);
                        if (!IsNull($v_N)) $v_M = Boolean.parse(XUI.Xml.GetText($v_N));
                        var $v_O = new Date(XUI.Xml.GetText(XUI.Xml.SelectSingleNode($v_A, "LastAccessed", null)));
                        $v_0.append(String.format("{1}{0}{2}{0}{3}{0}{4}{0}{5}{0}{6}{0}{7}{0}{8}{0}{9}{0}{10}{0}{11}",
                            this.$7_3,
                            $v_B,
                            $v_C,
                            $v_5 === 4709 ? "" : $v_5.toString(),
                            $v_6,
                            CrmEncodeDecode.CrmUrlEncode($v_E),
                            CrmEncodeDecode.CrmUrlEncode($v_G),
                            CrmEncodeDecode.CrmUrlEncode($v_I),
                            $v_K,
                            $v_O.format("MM/dd/yyyy HH:mm:ss"),
                            $v_M ? 1 : 0,
                            this.$6_3))
                    } catch ($v_P) {
                        continue
                    }
                }
            } catch ($v_Q) {
                continue
            }
        }
        return $v_0.toString()
    },
    $1K_3: function() {
        try {
            Mscrm.CrmLocalStorage.removeItem(this.$4_3)
        } catch ($$e_0) {
        }
    },
    $K_3: function($p0, $p1) {
        try {
            if (!IsNull($p0)) {
                var $v_0 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}",
                    this.$p_3.toISOString(),
                    !IsNull(this.$O_3) ? this.$O_3.toISOString() : (new Date).toISOString(),
                    !IsNull(this.$N_3) ? this.$N_3.toISOString() : "",
                    this.$6_3,
                    $p0);
                Mscrm.CrmLocalStorage.setItem(this.$4_3, $v_0)
            }
        } catch ($$e_3) {
            var $v_1 = String.format("Timestamp:Loaded={0},Updated={1},Saved={2}{3}{4}",
                this.$p_3.toISOString(),
                this.$O_3.toISOString(),
                !IsNull(this.$N_3) ? this.$N_3.toISOString() : "",
                this.$6_3,
                $p1);
            Mscrm.CrmLocalStorage.setItem(this.$4_3, $v_1)
        }
    },
    getRecordsByEntityType: function(entityTypeCode) {
        this.$o_3(false, null);
        for (var $v_0 = new Array(1), $v_1 = 0, $v_2 = this.$5_3.length - 1; $v_2 >= 0; $v_2--) {
            var $v_3 = this.$5_3[$v_2];
            if (IsNull($v_3)) break;
            var $v_4 = $v_3["entityTypeCode"];
            if ($v_4 === entityTypeCode) $v_0[$v_1++] = $v_3
        }
        return $v_0
    },
    getAllEntityRecords: function(rvXml) {
        if (!isNullOrEmptyString(rvXml) && rvXml.length > 150) {
            var $v_2 = this.$z_3(rvXml);
            this.$K_3($v_2, $v_2)
        } else this.$o_3(false, null);
        for (var $v_0 = new Array(1), $v_1 = 0, $v_3 = this.$5_3.length - 1; $v_3 >= 0; $v_3--) {
            var $v_4 = this.$5_3[$v_3];
            if (IsNull($v_4)) break;
            $v_0[$v_1++] = $v_4
        }
        return $v_0
    },
    setAllEntityRecords: function(rvXml) {
        if (isNullOrEmptyString(rvXml)) return;
        var $v_0 = this.$z_3(rvXml);
        this.$K_3($v_0, $v_0)
    },
    fetchAllMruData: function() {
        this.$o_3(false, null);
        var $v_0 = new Array(0), $v_1 = new Array(0);
        this.$2H_3($v_0, $v_1, this.$5_3);
        var $v_2 = new Array(0), $v_3 = new Array(0);
        this.$2H_3($v_2, $v_3, this.$D_3);
        var $v_4 = {};
        $v_4["PinnedRecordList"] = $v_0;
        $v_4["UnpinnedRecordList"] = $v_1;
        $v_4["PinnedViewList"] = $v_2;
        $v_4["UnpinnedViewList"] = $v_3;
        return $v_4
    },
    $2H_3: function($p0, $p1, $p2) {
        for (var $v_0 = 0, $v_1 = 0, $v_2 = $p2.length - 1; $v_2 >= 0; $v_2--) {
            var $v_3 = $p2[$v_2];
            if (IsNull($v_3)) break;
            if ($v_3["pinStatus"] === "0") $p1[$v_1++] = $v_3;
            else $p0[$v_0++] = $v_3
        }
        $p0.sort(this.$$d_$3c_3)
    },
    $3c_3: function($p0, $p1) {
        var $v_0 = $p0, $v_1 = $p1, $v_2 = $v_0["title"], $v_3 = $v_1["title"];
        return $v_2.localeCompare($v_3)
    },
    $34_3: function($p0) {
        this.$o_3(false, null);
        var $v_0 = false,
            $v_1 = true,
            $v_2 = this.$H_3,
            $v_3 = this.$I_3,
            $v_4 = $p0["etc"],
            $v_5 = $p0["etn"],
            $v_6 = $p0["etcList"],
            $v_7 = $p0["etnList"];
        if (!IsNull($p0["excludeRecords"])) $v_0 = $p0["excludeRecords"];
        if (!IsNull($p0["excludeViews"])) $v_1 = $p0["excludeViews"];
        if (!IsNull($p0["maxRecords"])) $v_2 = $p0["maxRecords"];
        if (!IsNull($p0["maxViews"])) $v_3 = $p0["maxViews"];
        var $v_8 = [], $v_9 = [], $v_A = 0, $v_B = 0, $v_C = false, $v_D = {};
        if (!$v_0) {
            for (var $v_E = this.$5_3.length - 1; $v_E >= 0; $v_E--) {
                if ($v_A >= $v_2) break;
                var $v_F = this.$5_3[$v_E];
                if (IsNull($v_F)) break;
                var $v_G = parseInt($v_F["entityTypeCode"], 10), $v_H = $v_F["entityTypeName"];
                if (!IsNull($v_4) && $v_4 === $v_G) {
                    $v_8[$v_A++] = $v_F;
                    continue
                }
                if (!IsNull($v_6)) {
                    $v_C = false;
                    for (var $v_I = 0; $v_I < $v_6.length; $v_I++)
                        if ($v_G === $v_6[$v_I]) {
                            $v_8[$v_A++] = $v_F;
                            $v_C = true;
                            break
                        }
                    if ($v_C) continue
                }
                if (!IsNull($v_5) && $v_5 === $v_H) {
                    $v_8[$v_A++] = $v_F;
                    continue
                }
                if (!IsNull($v_7))
                    for (var $v_J = 0; $v_J < $v_7.length; $v_J++)
                        if ($v_H === $v_7[$v_J]) {
                            $v_8[$v_A++] = $v_F;
                            break
                        }
            }
            $v_D["recordList"] = this.$2m_3($v_8)
        }
        if (!$v_1) {
            for (var $v_K = this.$D_3.length - 1; $v_K >= 0; $v_K--) {
                if ($v_B >= $v_3) break;
                var $v_L = this.$D_3[$v_K];
                if (IsNull($v_L)) break;
                var $v_M = parseInt($v_L["entityTypeCode"], 10), $v_N = $v_L["entityTypeName"];
                if (!IsNull($v_4) && $v_4 === $v_M) {
                    $v_9[$v_B++] = $v_L;
                    continue
                }
                if (!IsNull($v_6)) {
                    $v_C = false;
                    for (var $v_O = 0; $v_O < $v_6.length; $v_O++)
                        if ($v_M === $v_6[$v_O]) {
                            $v_9[$v_B++] = $v_L;
                            $v_C = true;
                            break
                        }
                    if ($v_C) continue
                }
                if (!IsNull($v_5) && $v_5 === $v_N) {
                    $v_9[$v_B++] = $v_L;
                    continue
                }
                if (!IsNull($v_7))
                    for (var $v_P = 0; $v_P < $v_7.length; $v_P++)
                        if ($v_N === $v_7[$v_P]) {
                            $v_9[$v_B++] = $v_L;
                            break
                        }
            }
            $v_D["viewList"] = $v_9
        }
        return $v_D
    },
    $2m_3: function($p0) {
        for (var $v_0 = new Array($p0.length), $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            var $v_2 = $p0[$v_1], $v_3 = new Mscrm.RecentlyViewedItem;
            $v_3.TypeCode = $v_2["entityTypeCode"];
            $v_3.TypeName = $v_2["entityTypeName"];
            $v_3.Id = $v_2["Id"];
            $v_3.Name = $v_2["title"];
            $v_3.Action = $v_2["action"];
            $v_0[$v_1] = $v_3
        }
        return $v_0
    },
    rvHideCallback: null,
    recentlyViewedHeaderTitle: null,
    recentlyViewedViewsHeaderTitle: null,
    pinItemActionTitle: null,
    unpinItemActionTitle: null,
    copyShortcutActionTitle: null,
    sendShortcutActionTitle: null,
    $A_3: null,
    $19_3: null,
    $1F_3: null,
    getRecentlyViewedHeader: function() {
        var $v_0 = document.createElement("DIV");
        $v_0.className = "ms-crm-RecentlyViewed-Header";
        var $v_1 = document.createElement("NOBR");
        $v_1.className = "ms-crm-RV-Header-Title";
        XUI.Html.SetText($v_1, this.recentlyViewedHeaderTitle);
        $v_0.appendChild($v_1);
        $addHandler($v_0, "click", this.$$d_empty);
        return $v_0
    },
    showRecentlyViewed: function(parameters, focusOnHideElement) {
        var $$t_2 = this;
        this.$o_3(true, function() { $$t_2.$3g_3(parameters, focusOnHideElement) })
    },
    $3g_3: function($p0, $p1) {
        if (!this.$A_3) {
            this.$A_3 = Mscrm.Menu.createMenuForParentElement(document.body);
            this.$A_3.set_propagateStyle(false);
            this.$19_3 = this.getRecentlyViewedContextMenu(true);
            this.$1F_3 = this.getRecentlyViewedContextMenu(false)
        } else this.$A_3.clear();
        this.$A_3.set_width(422);
        this.$A_3.set_stylePrefix("RV");
        this.$A_3.set_isVertical(false);
        var $v_0 = $p0["x"], $v_1 = $p0["y"], $v_2 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_2.set_width(210);
        $v_2.set_stylePrefix("RV");
        $v_2.set_propagateStyle(false);
        $v_2.set_isInline(true);
        if (!this.$5_3.length) {
            var $v_6 = Mscrm.MenuItem.createMenuItem("");
            $v_6.set_stylePrefix("RV-view-header");
            $v_6.set_isFocusable(false);
            $v_2.addItem($v_6)
        }
        this.populateRVSubMenuInternal($v_2, this.$5_3, 0, "RV");
        this.$A_3.addItem($v_2);
        var $v_3 = Mscrm.MenuItemSeparator.createSeparator(true);
        $v_3.set_stylePrefix("RV");
        this.$A_3.addItem($v_3);
        this.$A_3.set_width(427);
        var $v_4 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_4.set_width(210);
        $v_4.set_stylePrefix("RV");
        $v_4.set_propagateStyle(false);
        $v_4.set_isInline(true);
        var $v_5 = Mscrm.MenuItem.createMenuItem(this.recentlyViewedViewsHeaderTitle);
        $v_5.set_stylePrefix("RV-view-header");
        $v_5.set_isFocusable(false);
        $v_4.addItem($v_5);
        this.populateRVSubMenuInternal($v_4, this.$D_3, this.$5_3.length, "RV-view-item");
        this.$A_3.addItem($v_4);
        this.$A_3.set_hideCallback(this.$$d_recentlyViewedHidden);
        this.$A_3.set_shiftVertical(false);
        this.$A_3.set_header(this.getRecentlyViewedHeader());
        this.$A_3.set_left($v_0);
        this.$A_3.set_top($v_1);
        this.$A_3.set_minHeight(200);
        this.$A_3.set_focusElementOnHide($p1);
        this.$A_3.refresh();
        this.$A_3.show()
    },
    populateRVSubMenuInternal: function(itemSubMenu, itemSet, baseIndex, menuItemStyle) {
        for (var $v_0 = itemSet.length - 1; $v_0 >= 0; $v_0--) {
            var $v_1 = itemSet[$v_0];
            if (IsNull($v_1)) break;
            var $v_2 = $v_1["title"],
                $v_3 = $v_1["entityDisplayName"],
                $v_4 = $v_1["entityTypeCode"],
                $v_5 = $v_1["pinStatus"],
                $v_6 = $v_1["iconPath"],
                $v_7 = $v_2;
            if (!isNullOrEmptyString($v_3)) $v_7 = String.format("{0}: {1}", $v_3, $v_2);
            var $v_8 = $v_6;
            if (isNullOrEmptyString($v_8)) {
                if (!isNullOrEmptyString($v_4)) $v_8 = Mscrm.Utilities.getIconPath(parseInt($v_4));
                if (isNullOrEmptyString($v_8)) $v_8 = window.CDNURL + "/_imgs/placeholders/ribbon_placeholder_16.png"
            }
            var $v_9 = Mscrm.MenuItem.createMenuItem($v_2);
            $v_9.set_stylePrefix(menuItemStyle);
            $v_9.set_iconPath($v_8);
            $v_9.set_tooltip($v_7);
            $v_9.set_actionCallback(this.$$d_recentlyViewedItemSelected);
            var $v_A = {};
            $v_A["index"] = baseIndex + $v_0;
            $v_9.set_reference($v_A);
            $v_9.set_auxActionCallback(this.$$d_pinRecentlyViewedItemSelected);
            $v_9.set_hideOnAuxAction(false);
            if ($v_5 === "1") {
                $v_9.set_auxIconPath(this.pinnedIconPath);
                $v_9.set_auxIconTooltip(window.LOCID_RV_PINICON_TOOLTIP);
                $v_9.set_contextMenu(this.$1F_3)
            } else {
                $v_9.set_auxIconPath(this.unPinnedIconPath);
                $v_9.set_auxIconTooltip(window.LOCID_RV_UNPINICON_TOOLTIP);
                $v_9.set_contextMenu(this.$19_3)
            }
            itemSubMenu.addItem($v_9)
        }
    },
    recentlyViewedHidden: function(menu) { !IsNull(this.rvHideCallback) && this.rvHideCallback(this) },
    recentlyViewedItemSelected: function(item) {
        var $v_0 = item.get_reference(), $v_1 = $v_0["index"];
        this.openRecentlyViewedItem($v_1)
    },
    pinRecentlyViewedItemSelected: function(item) {
        var $v_0 = item.get_reference(), $v_1 = $v_0["index"];
        this.pinChanged(item, $v_1)
    },
    empty: function(evt) { evt.stopPropagation() },
    openRecentlyViewedItem: function(position) {
        var $v_0;
        if (position < this.$5_3.length) {
            $v_0 = this.$5_3[position];
            var $v_1 = $v_0["entityTypeCode"], $v_2 = $v_0["Id"], $v_3 = $v_0["action"];
            if ($v_1 > 0) openObj($v_1, $v_2, $v_3, null, 0, null);
            else openUrl($v_3, false)
        } else if (position < this.$5_3.length + this.$D_3.length) {
            $v_0 = this.$D_3[position - this.$5_3.length];
            var $v_4 = $v_0["entityTypeCode"],
                $v_5 = $v_0["Id"],
                $v_6 = $v_0["action"],
                $v_7 = Mscrm.Utilities.getViewURL($v_4, $v_5, $v_6);
            openUrl($v_7, true)
        }
    },
    pinChanged: function(item, position) {
        var $v_0;
        if (position < this.$5_3.length) $v_0 = this.$5_3[position];
        else $v_0 = this.$D_3[position - this.$5_3.length];
        var $v_1 = $v_0["Id"],
            $v_2 = $v_0["action"],
            $v_3 = $v_0["pinStatus"],
            $v_4 = this.changePinRecord($v_1, $v_2, $v_3);
        $v_0["pinStatus"] = $v_4;
        if ($v_4 === "1") {
            item.set_auxIconPath(this.pinnedIconPath);
            item.set_auxIconTooltip(window.LOCID_RV_PINICON_TOOLTIP);
            item.set_contextMenu(this.$1F_3)
        } else {
            item.set_auxIconPath(this.unPinnedIconPath);
            item.set_auxIconTooltip(window.LOCID_RV_UNPINICON_TOOLTIP);
            item.set_contextMenu(this.$19_3)
        }
    },
    changePinRecord: function(objectId, action, pinStatus) {
        action = CrmEncodeDecode.CrmUrlEncode(action);
        var $v_0 = this.$J_3(null), $v_1 = "", $v_2 = "";
        if (!IsNull($v_0))
            for (var $v_3 = $v_0.split(this.$6_3), $v_4 = 0; $v_4 < $v_3.length; $v_4++) {
                var $v_5 = $v_3[$v_4].trimStart(), $v_6 = $v_5.split(this.$7_3);
                if ($v_6.length === this.$M_3) {
                    var $v_7 = $v_6[1].trimStart(), $v_8 = $v_6[6].trimStart(), $v_9 = $v_6[9].trimStart();
                    if ($v_7 === objectId &&
                        CrmEncodeDecode.CrmUrlDecode($v_8) === CrmEncodeDecode.CrmUrlDecode(action) &&
                        pinStatus === $v_9) {
                        var $v_A = this.$1w_3($v_6);
                        if (pinStatus === "1") {
                            $v_A = $v_A + "0" + this.$7_3;
                            $v_2 = "0"
                        } else {
                            $v_A = $v_A + "1" + this.$7_3;
                            $v_2 = "1"
                        }
                        $v_1 = $v_1 + $v_A + this.$6_3
                    } else $v_1 = $v_1 + $v_5 + this.$6_3
                }
            }
        this.$O_3 = new Date;
        this.$K_3($v_1.trim(), $v_0);
        return $v_2
    },
    getRecentlyViewedContextMenu: function(isPinLabel) {
        var $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
        $v_0.set_stylePrefix("CM");
        if (isPinLabel) {
            var $v_3 = Mscrm.MenuItem.createMenuItem(this.pinItemActionTitle);
            $v_3.set_reference(4);
            $v_3.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
            $v_3.set_hideParentOnContextItemAction(false);
            $v_0.addItem($v_3)
        } else {
            var $v_4 = Mscrm.MenuItem.createMenuItem(this.unpinItemActionTitle);
            $v_4.set_reference(5);
            $v_4.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
            $v_4.set_hideParentOnContextItemAction(false);
            $v_0.addItem($v_4)
        }
        var $v_1 = Mscrm.MenuItem.createMenuItem(this.copyShortcutActionTitle);
        $v_1.set_reference(2);
        $v_1.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
        $v_1.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
        $v_0.addItem($v_1);
        var $v_2 = Mscrm.MenuItem.createMenuItem(this.sendShortcutActionTitle);
        $v_2.set_reference(3);
        $v_2.set_actionCallback(this.$$d_recentlyViewedContextMenuHandler);
        $v_0.addItem($v_2);
        $v_0.set_width(200);
        return $v_0
    },
    recentlyViewedContextMenuHandler: function(item) {
        var $v_0 = item.get_parentMenu(), $v_1 = item.get_reference();
        switch ($v_1) {
        case 4:
        case 5:
            this.pinRecentlyViewedItemSelected($v_0.get_contextItem());
            break;
        case 2:
            this.contextMenuActionShortCut($v_0.get_contextItem(), false);
            break;
        case 3:
            this.contextMenuActionShortCut($v_0.get_contextItem(), true);
            break
        }
    },
    contextMenuActionShortCut: function(item, sendEMail) {
        var $v_0 = item.get_reference(), $v_1 = false, $v_2 = $v_0["index"], $v_3, $v_4;
        if ($v_2 < this.$5_3.length) $v_4 = this.$5_3[$v_2];
        else if ($v_2 < this.$5_3.length + this.$D_3.length) {
            $v_4 = this.$D_3[$v_2 - this.$5_3.length];
            $v_1 = true
        } else return;
        $v_3 = new Mscrm.RecentlyViewedItem;
        $v_3.TypeCode = isNullOrEmptyString($v_4["entityTypeCode"]) ? 0 : $v_4["entityTypeCode"];
        $v_3.Id = $v_4["Id"];
        $v_3.Name = $v_4["title"];
        $v_3.Action = $v_4["action"];
        if ($v_1) {
            var $v_5 = window.location.href;
            if (!Mscrm.SessionInfo.isOnline()) $v_5 = window.WEB_APP_URL;
            else $v_5 = $v_5.substring(0, $v_5.indexOf(window.location.pathname));
            var $v_6 = Mscrm.CrmUri.create(Mscrm.Help
                .concatenateUrl($v_5, Mscrm.Utilities.getViewURL($v_3.TypeCode, $v_3.Id, $v_3.Action)));
            Mscrm.Utilities.sendViewUrl(sendEMail, $v_6, $v_4["title"], $v_4["Id"])
        } else Mscrm.Utilities.sendSelectedRecordsUrl(sendEMail, [$v_3], $v_3.TypeCode, false)
    }
};
Type.registerNamespace("Mscrm.RecentlyViewedInternal");
Mscrm.RecentlyViewedInternal.RecentlyViewedService = function($p0) {
    if (IsNull($p0)) throw Error.argumentNull("recentlyViewedControl");
    this.$q_0 = $p0
};
Mscrm.RecentlyViewedInternal.RecentlyViewedService.prototype = {
    $q_0: null,
    loadRecentlyViewedAsync: function() {
        for (var $v_0 = new Array(0), $v_1 = this.$q_0.getAllEntityRecords(null), $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++
        ) $v_0[$v_0.length] = this.$3O_0($v_1[$v_2]);
        return jQueryApi.jQueryDeferredFactory.fromResult(Array, Error, $v_0)
    },
    saveRecentlyViewedAsync: function($p0) {
        var $v_0 = Sales.Common.CrmSoapServiceProxy.ObjectModel.MruUtilities.serializeMruXml($p0);
        this.$q_0.setAllEntityRecords($v_0);
        return jQueryApi.jQueryDeferredFactory.fromResult(Object, Error, null)
    },
    $3O_0: function($p0) {
        var $v_0 = new Xrm.Objects.RecentlyViewedItem;
        $v_0.action = CrmEncodeDecode.CrmUrlDecode($p0["action"]);
        $v_0.displayName = CrmEncodeDecode.CrmUrlDecode($p0["entityDisplayName"]);
        $v_0.entityTypeCode = IsNull($p0["entityTypeCode"]) ? 0 : Number.parseInvariant($p0["entityTypeCode"]);
        $v_0.iconPath = $p0["iconPath"];
        $v_0.lastAccessed = IsNull($p0["lastAccessed"]) ? null : new Date(Date.parse($p0["lastAccessed"]));
        $v_0.objectId = $p0["Id"];
        $v_0.pinStatus = $p0["pinStatus"];
        $v_0.title = CrmEncodeDecode.CrmUrlDecode($p0["title"]);
        $v_0.type = 0;
        return $v_0
    },
    updateRecentlyViewedRecordsAsync: function($p0) {
        for (var $$arr_1 = $p0, $$len_2 = $$arr_1.length, $$idx_3 = 0; $$idx_3 < $$len_2; ++$$idx_3) {
            var $v_0 = $$arr_1[$$idx_3];
            this.$q_0.addRecord(0,
                $v_0.objectId,
                $v_0.entityTypeCode.toString(),
                "",
                $v_0.displayName,
                $v_0.title,
                $v_0.action,
                null)
        }
        return jQueryApi.jQueryDeferredFactory.fromResult(Object, Error, null)
    }
};
Mscrm.CacheManager.registerClass("Mscrm.CacheManager", Mscrm.CrmUIComponent);
Mscrm.ContentPanel.registerClass("Mscrm.ContentPanel", Mscrm.CrmUIControl);
Mscrm.FrameDescriptor.registerClass("Mscrm.FrameDescriptor");
Mscrm.IFrameManager.registerClass("Mscrm.IFrameManager");
Mscrm.HistoryManager.registerClass("Mscrm.HistoryManager", Mscrm.CrmUIControl);
Mscrm.InMemoryHistoryData.registerClass("Mscrm.InMemoryHistoryData", null, Mscrm.IHistoryData);
Mscrm.InMemoryHistoryStore.registerClass("Mscrm.InMemoryHistoryStore", null, Mscrm.IHistoryStore);
Mscrm.SessionStorageHistoryData.registerClass("Mscrm.SessionStorageHistoryData", null, Mscrm.IHistoryData);
Mscrm.SessionStorageHistoryStore.registerClass("Mscrm.SessionStorageHistoryStore", null, Mscrm.IHistoryStore);
Mscrm.StorageFactory.registerClass("Mscrm.StorageFactory");
Mscrm.NavigationManager.registerClass("Mscrm.NavigationManager", Mscrm.CrmUIComponent);
Mscrm.GlobalMruConnector.registerClass("Mscrm.GlobalMruConnector");
Mscrm.RecentlyViewed.registerClass("Mscrm.RecentlyViewed", Mscrm.CrmUIControl);
Mscrm.RecentlyViewedInternal.RecentlyViewedService
    .registerClass("Mscrm.RecentlyViewedInternal.RecentlyViewedService",
        null,
        Xrm.Interfaces.Services.IMostRecentlyViewedService);
Mscrm.FrameDescriptor.unusedKey = "_EMPTY_";
Mscrm.SessionStorageHistoryData.$14 = 0;
Mscrm.SessionStorageHistoryData.$13 = 1;
Mscrm.SessionStorageHistoryData.$y = 2;
Mscrm.SessionStorageHistoryData.$1E = 3;
Mscrm.GlobalMruConnector.$f = null;
Mscrm.GlobalMruConnector.$l = null;
Mscrm.GlobalMruConnector.$g = null;
Mscrm.GlobalMruConnector.$m = null;
Mscrm.RecentlyViewed.innerMenuWidth = 210;
Mscrm.RecentlyViewed.separatorWidth = 5;
Mscrm.RecentlyViewed.menuWidth = 422;
Mscrm.RecentlyViewed.minMenuHeight = 200;
Mscrm.RecentlyViewed.contextMenuWidth = 200;

function MainAspxPageOnLoad() {
    var isOutlookClient = isOutlookHostedWindow();
    if (!isOutlookClient && window.location.pathname.toUpperCase().endsWith("MAIN.ASPX") >= 0) {
        var mainPage = false;
        if (window.location.search.length == 0) mainPage = true;
        else {
            var uri = Mscrm.CrmUri.create(window.location.href), pageType = uri.get_query()["pageType"];
            if (IsNull(pageType) || pageType.length == 0) mainPage = true
        }
        mainPage && RegisterAuthExpiryReminder()
    }
    !isOutlookClient &&
        (window.location.pathname.toUpperCase().endsWith("/MAIN.ASPX") >= 0 && window.location.search.length == 0) &&
        registerReminder();
    _bInvalidSitemap && openErrorDlg(_bInvalidSitemapErrorCode);
    displayNavTourOnFirstRun()
}

function registerReminder() { setTimeout(openReminder, 0) }

function openReminder() {
    _bShowTrialReminder && openStdDlg(Mscrm.CrmUri.create("/tools/trial/trialReminder.aspx"), null, 560, 300);
    if (_bShowPendingEmailReminder) {
        var oUrl = Mscrm.CrmUri.create("/Activities/email/dlg_pendingEmailReminder.aspx"),
            crmDialog = new Mscrm.CrmDialog(oUrl, null, 550, 300, null);
        crmDialog.show()
    }
}

var _authTimeoutIds = [];

function RegisterAuthExpiryReminder(enabled, timer) {
    if (IsNull(enabled) == false) REMIND_AUTH_EXPIRATION = enabled;
    if (IsNull(timer) == false) AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES = timer;
    if (IsNull(REMIND_AUTH_EXPIRATION) || REMIND_AUTH_EXPIRATION == false) return;
    if (IsNull(AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES) || AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES == 0) return;
    (typeof getGlobalAuthReminderTime() == "undefined" ||
            getGlobalAuthReminderTime() < (new Date).getTime() + AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES * 60 * 1e3) &&
        setGlobalAuthReminderTime((new Date).getTime() + AUTH_EXPIRATION_REMINDER_TIME_IN_MINUTES * 60 * 1e3);
    ReInitializeAuthExpireReminder()
}

function getGlobalAuthReminderTime() { return window.self.masterWindow().globalAuthReminderTime }

function setGlobalAuthReminderTime(time) { window.self.masterWindow().globalAuthReminderTime = time }

function getGlobalReminderLastRespondedTime() { return window.self.masterWindow().globalReminderLastClickedTime }

function setGlobalReminderLastRespondedTime(time) { window.self.masterWindow().globalReminderLastClickedTime = time }

function displayNavTourOnFirstRun() {
    if (!window.DISPLAY_NAVIGATION_TOUR || window.APP_MODULE_UNIQUE_NAME) return;
    if (_bDisableNavTour) return;
    var persistentNavTourCookie = Mscrm.Utilities.getCookie("persistentNavTourCookie");
    if (null != persistentNavTourCookie) return;
    var sessionNavTourCookie = Mscrm.Utilities.getCookie("sessionNavTourCookie");
    if (null != sessionNavTourCookie) return;
    Mscrm.InlineDialogUtility.createInlineDialog(Mscrm.CrmUri.create("/_forms/navtour/dlg_navtour.aspx"),
        null,
        802,
        552,
        auto,
        auto)
}

function IsActionMsgShown(divName) {
    var dark = document.getElementById(divName + "Container");
    return !IsNull(dark) && dark.style.display != "none"
}

function CheckReminderState() {
    if (IsActionMsgShown("reAuthObject")) {
        var globalReminderLastRespondedTime = getGlobalReminderLastRespondedTime();
        if (typeof globalReminderLastRespondedTime != "undefined" &&
            globalReminderLastRespondedTime > reminderOpenedTime) HideActionMsg();
        else window.setTimeout("CheckReminderState()", 50)
    }
}

function ReInitializeAuthExpireReminder() {
    for (var i = 0; i < _authTimeoutIds.length; i++) clearTimeout(_authTimeoutIds[i]);
    authReminderTimeOnDialogShow = getGlobalAuthReminderTime();
    var timeoutId = window.setTimeout("AuthExpiryReminder()", getGlobalAuthReminderTime() - (new Date).getTime());
    _authTimeoutIds.push(timeoutId)
}

function AuthExpiryReminder() {
    if (authReminderTimeOnDialogShow >= getGlobalAuthReminderTime()) {
        showAuthDiv(true,
            "reAuthObject",
            { zindex: "1000", bgcolor: "#130E19" },
            DIALOG_REAUTH_DESCRIPTION,
            "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td width='70%'></td><td class='ms-crm-ReAuth-Buttons' style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":7px;'><button id='_sign_in' onclick='signin()'  class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_SIGNIN_BUTTON) + "</button></td><td class='ms-crm-ReAuth-Buttons'><button id='_cancel' onclick='cancelSignin()'  class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_CANCEL_BUTTON) + "</button></td><td style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":14px;'><div>&nbsp;</div></td></tr></table>",
            "ShowSessionExpired()");
        reminderOpenedTime = (new Date).getTime();
        CheckReminderState()
    } else ReInitializeAuthExpireReminder()
}

function ShowSessionExpired() {
    if ((new Date)
        .getTime() <
        getGlobalAuthReminderTime() + (AUTH_EXPIRATION_AFTER_REMINDER_IN_MINUTES - 1) * 60 * 1e3) {
        ReInitializeAuthExpireReminder();
        return
    }
    HideActionMsg();
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
    showAuthDiv(true,
        "sessionExpiredObject",
        { zindex: "1000", bgcolor: "#130E19" },
        DIALOG_REAUTH_EXPIRED_DESCRIPTION,
        "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td width='80%'></td><td class='ms-crm-ReAuth-Buttons'><button id='_close_session' onclick='closeSession()' class='ms-crm-Button'>" + CrmEncodeDecode.CrmHtmlEncode(DIALOG_REAUTH_CLOSE_BUTTON) + "</button></td><td style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":14px;'><div>&nbsp;</div></td></tr></table>")
}

function getPaddingDirection() {
    if (LOCID_UI_DIR == "RTL") return "padding-left";
    else return "padding-right"
}

function cancelSignin() {
    HideActionMsg();
    setGlobalReminderLastRespondedTime((new Date).getTime())
}

function signin() {
    var baseUri = Mscrm.CrmUri.create("/_root/dlg_prompt_reauthenticate.aspx");
    baseUri.get_query()["user_lcid"] = USER_LANGUAGE_CODE;
    baseUri.get_query()["reauth"] = true;
    var oUrl = baseUri.toString(), window = openStdWin(oUrl, null, 980, 520, true);
    HideActionMsg();
    setGlobalReminderLastRespondedTime((new Date).getTime())
}

function HideActionMsg() { showAuthDiv(false, "reAuthObject") }

function closeSession() {
    showAuthDiv(false, "sessionExpiredObject");
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.SignOutRequested, null);
    var uri = Mscrm.CrmUri.create(window.location.href);
    uri.appendToQuery("signout=2");
    if (IS_LIVE) window.location.href = uri.toString();
    else {
        var current = window.parent;
        while (current && current != window.parent);
        if (current) current.location.href = uri.toString()
    }
}

function showAuthDiv(vis, divName, options, message, buttons, timerFunction) {
    var options = options || {},
        zindex = options.zindex || 50,
        opacity = 75,
        dark = document.getElementById(divName + "Container");
    if (!dark) {
        var tbody = document.getElementsByTagName("body")[0], tContainer = document.createElement("div");
        tContainer.id = divName + "Container";
        tContainer.style.display = "none";
        tbody.appendChild(tContainer);
        var tBackgroundNode = document.createElement("div");
        tBackgroundNode.id = divName + "Background";
        tBackgroundNode.className = "ms-crm-ReAuth-Background";
        tBackgroundNode.style.zIndex = zindex + 1;
        XUI.Html.SetOpacity(tBackgroundNode, opacity);
        tContainer.appendChild(tBackgroundNode);
        var tnode = document.createElement("div");
        tnode.id = divName;
        tnode.className = "ms-crm-ReAuth-Dialog";
        tnode.style.zIndex = zindex + 2;
        tnode.style.width = "420px";
        tnode.style.height = "179px";
        tbody.appendChild(tnode);
        var pageWidth = window.innerWidth, pageHeight = window.innerHeight;
        if (typeof pageWidth != "number") {
            pageWidth = document.body.clientWidth;
            pageHeight = document.body.clientHeight
        }
        var divWidth = XUI.Html.GetComputedStyle(tnode, "width").replace("px", ""),
            divHeight = XUI.Html.GetComputedStyle(tnode, "height").replace("px", ""),
            divLeft = (pageWidth - divWidth) / 2,
            divTop = (pageHeight - divHeight) / 2;
        tnode.style.left = divLeft + "px";
        tnode.style.top = divTop + "px";
        var ror1Div = document.createElement("div");
        ror1Div.id = divName + "Row1";
        ror1Div.style.height = "65px";
        ror1Div.className = "ms-crm-Dialog-Header";
        ror1Div.style.verticalAlign = "middle";
        var tHeaderDiv = document.createElement("div");
        tHeaderDiv.className = "ms-crm-Dialog-Header-Desc";
        tHeaderDiv
            .innerHTML =
            "<table cellspacing='0' cellpadding='0' width='100%' height='100%'><tr><td class='ms-crm-ReAuth-Image' ><img alt='warning' src='/_imgs/error/notif_icn_warn.png' /></td><td class='ms-crm-ReAuth-Message' style='" + CrmEncodeDecode.CrmHtmlAttributeEncode(getPaddingDirection()) + ":7px;'>" + message + "</td></tr></table>";
        tHeaderDiv.style.height = "100%";
        ror1Div.appendChild(tHeaderDiv);
        tnode.appendChild(ror1Div);
        var ror2Div = document.createElement("div");
        ror2Div.id = divName + "Row2";
        ror2Div.style.height = "66px";
        ror2Div.className = "ms-crm-Dialog-Header";
        ror2Div.style.borderBottom = "#a4abb2 1px solid";
        tnode.appendChild(ror2Div);
        var ror3Div = document.createElement("div");
        ror3Div.id = divName + "Row3";
        ror3Div.style.height = "42px";
        ror3Div.className = "ms-crm-Dialog-Footer ms-crm-Dialog-Header";
        ror3Div.style.textAlign = "center";
        ror3Div.style.verticalAlign = "middle";
        ror3Div.innerHTML = buttons;
        tnode.appendChild(ror3Div);
        tContainer.appendChild(tnode);
        dark = document.getElementById(divName + "Container")
    }
    if (vis) {
        dark.style.width = "100%";
        dark.style.height = "100%";
        dark.style.display = "block";
        if (timerFunction) {
            var iTimer = (AUTH_EXPIRATION_AFTER_REMINDER_IN_MINUTES - 1) * 60 * 1e3;
            if (iTimer > 0) {
                var timeoutId = window.setTimeout(timerFunction, iTimer);
                _authTimeoutIds.push(timeoutId)
            }
        }
    } else dark.style.display = "none"
}

function goTo(sAreaId, sGroupId, sSubAreaId) {
    var parameters = {};
    parameters["areaId"] = sAreaId;
    parameters["subAreaId"] = sSubAreaId;
    parameters["groupId"] = sGroupId;
    Mscrm.PageManager.get_instance().raiseEvent(Mscrm.ScriptEvents.AppNavGoTo, parameters)
}