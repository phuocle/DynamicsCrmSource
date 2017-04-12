Type.registerNamespace("Mscrm");
Mscrm.DashboardPage = function() {};
Mscrm.DashboardPage.run = function() {
    if (Mscrm.DashboardPage.$F("Dashboard.aspx")) return;
    Mscrm.DashboardPage.$G("Dashboard.aspx");
    Mscrm.DashboardPage.$K();
    if (window.UseTabletExperience) {
        Mscrm.DashboardPage.$g();
        window.LOCID_UI_DIR === "RTL" && Mscrm.DashboardPage.$Q()
    }
};
Mscrm.DashboardPage.$Q = function() {
    for (var $v_0 = document.getElementsByTagName("iframe"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        !IsNull($v_2) &&
            !isNullOrEmptyString($v_2.id) &&
            (!$v_2.id.indexOf("WebResource") || !$v_2.id.indexOf("IFRAME")) &&
            $addHandler($v_2, "load", Mscrm.DashboardPage.$h)
    }
};
Mscrm.DashboardPage.$h = function($p0) {
    var $v_0 = null;
    if (!$p0.target.id.indexOf("WebResource")) $v_0 = $p0.target.parentNode.parentNode;
    else if (!$p0.target.id.indexOf("IFRAME")) $v_0 = $p0.target.parentNode;
    if (!IsNull($v_0)) {
        var $v_1 = $v_0.scrollWidth - $v_0.clientWidth;
        $v_0.scrollLeft += $v_1
    }
};
Mscrm.DashboardPage.$g = function() {
    var $v_0 = $get("formBodyContainer");
    $v_0 && new Mscrm.TopBottomScrollRestriction($v_0)
};
Mscrm.DashboardPage.$F = function($p0) {
    var $v_0 = window.top, $v_1 = window.self;
    if ($v_0 &&
        "METADATA_TIMESTAMP" in $v_0 &&
        "METADATA_TIMESTAMP" in $v_1 &&
        $v_0["METADATA_TIMESTAMP"] !== $v_1["METADATA_TIMESTAMP"]
    ) return Mscrm.DashboardPage.$e($p0, $v_0["METADATA_TIMESTAMP"], $v_1["METADATA_TIMESTAMP"]);
    Xrm.Internal.trace.log($p0, "Metadata is up to date");
    return false
};
Mscrm.DashboardPage.$e = function($p0, $p1, $p2) {
    var $v_0 = window.location.href.toString() + $p1 + $p2;
    if (Mscrm.CrmCrossBrowser.getSessionStorage(window.self).getItem($v_0) === "true") {
        Xrm.Internal.trace.log($p0, "Metadata version pair encountered before");
        return false
    }
    Xrm.Internal.trace.log($p0,
        "Metadata updated. Self: {0}; Top: {1}. Redirecting to check for system dashboard list changes",
        $p2,
        $p1);
    Mscrm.CrmCrossBrowser.getSessionStorage(window.self).setItem($v_0, "true");
    window.location.reload(true);
    return true
};
Mscrm.DashboardPage.$K = function() {
    var $v_0 = Mscrm.CrmUri.create(window.location.href),
        $v_1 = $v_0.get_query(),
        $v_2 = $v_1["dashboardId"],
        $v_3 = $v_1["dashboardType"];
    Mscrm.DashboardPage.checkForUserDashboardUpdate("Dashboard.aspx", $v_2, $v_3)
};
Mscrm.DashboardPage.checkForUserDashboardUpdate = function(component, dashboardId, dashboardType) {
    if (dashboardType === "1030") return;
    Xrm.Internal.trace.log(component, "Checking if user dashboard has been updated");
    var $v_0 = new RemoteCommand("DashboardWebService", "GetUserDashboardVersion");
    $v_0.SetParameter("userDashboardId", dashboardId);
    var $v_1 = "cache." + component + ".userDashboard";
    Mscrm.DashboardPage.$6($v_0).done(function($p1_0) {
        var $v_2 = $p1_0.toString(),
            $v_3 = $v_1 + dashboardId + ".version",
            $v_4 = Mscrm.CrmCrossBrowser.getLocalStorage(window.self).getItem($v_3);
        if ($v_2 === $v_4) {
            Xrm.Internal.trace.log(component, "This is the latest version of the dashboard");
            return
        }
        Mscrm.CrmCrossBrowser.getLocalStorage(window.self).setItem($v_3, $v_2);
        if (isNullOrEmptyString($v_4)) return;
        Xrm.Internal.trace.log(component, "Redirecting to update to version {0}", $v_2);
        window.location.reload(true)
    }).fail(function($p1_0) {
        return Xrm.Internal.trace.warning(component, "User dashboard version cannot be retrieved")
    })
};
Mscrm.DashboardPage.$G = function($p0) {
    var $v_0 = new RemoteCommand("DashboardWebService", "GetDashboardWrpcTokens");
    Mscrm.DashboardPage.$6($v_0).done(function($p1_0) {
        var $v_1 = $p1_0.toString();
        if ($v_1.startsWith("while(1);")) $v_1 = $v_1.substr(9);
        var $v_2 = JSON.parse($v_1), $v_3 = window.self["_aWrpcTokens"], $$dict_7 = $v_2;
        for (var $$key_8 in $$dict_7) {
            var $v_4 = { key: $$key_8, value: $$dict_7[$$key_8] };
            $v_3[$v_4.key] = $v_4.value
        }
        Xrm.Internal.trace.log($p0, "Rerieved WRPC tokens")
    }).fail(function($p1_0) {
        return Xrm.Internal.trace.warning($p0, "Can not retrieve WRPC tokens. Some functionality might not work")
    })
};
Mscrm.DashboardPage.$6 = function($p0) {
    var $v_0 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Error);
    $p0.Execute(function($p1_0, $p1_1) {
        if ($p1_0.Success) $v_0.resolve($p1_0.ReturnValue);
        else $v_0.reject()
    });
    return $v_0.promise()
};
Mscrm.DashboardSelector = function(element) {
    this.$$d_$O_3 = Function.createDelegate(this, this.$O_3);
    this.$$d_$N_3 = Function.createDelegate(this, this.$N_3);
    this.$$d_$f_3 = Function.createDelegate(this, this.$f_3);
    this.$$d_$U_3 = Function.createDelegate(this, this.$U_3);
    this.$$d_$Z_3 = Function.createDelegate(this, this.$Z_3);
    this.$A_3 = window.screen.availHeight;
    Mscrm.DashboardSelector.initializeBase(this, [element])
};
Mscrm.DashboardSelector.$B = function() {
    setPerfMarkerTimestamp("FinishDashboardLoadTimeStamp");
    Mscrm.MetricsCollector.collectAndReportClientMetrics(3)
};
Mscrm.DashboardSelector.prototype = {
    $9_3: true,
    $3_3: 0,
    $0_3: null,
    $4_3: null,
    $7_3: false,
    get_selector: function() {
        if (IsNull(this.$4_3)) this.$4_3 = $get("dashboardSelectorContainer", this.get_element());
        return this.$4_3
    },
    set_selector: function(value) {
        this.$4_3 = value;
        return value
    },
    get_dashboardItems: function() { return XUI.Xml.SelectNodes(this.$0_3.get_menuXml(), "/Menu/MenuItem", null) },
    get_currentItem: function() {
        if (!IsNull(this.get_selector().attributes
            .getNamedItem("CurrentItem"))) return this.get_selector().attributes.getNamedItem("CurrentItem").value;
        return ""
    },
    get_currentType: function() {
        if (!IsNull(this.get_selector().attributes
            .getNamedItem("CurrentItemType")))
            return parseInt(this.get_selector().attributes.getNamedItem("CurrentItemType").value, 10);
        return 0
    },
    get_currentPowerBIDashboardUrl: function() {
        if (!IsNull(this.get_selector().attributes
            .getNamedItem("CurrentPowerBIDashboardUrl")))
            return this.get_selector().attributes.getNamedItem("CurrentPowerBIDashboardUrl").value;
        return ""
    },
    getDashboardNode: function(id) {
        return XUI.Xml.SelectSingleNode(this.$0_3.get_menuXml(), "//MenuItem[@id='" + id + "']", null)
    },
    get_reloadNeeded: function() { return this.$7_3 },
    set_reloadNeeded: function(value) {
        this.$7_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$d_3();
        this.loadList(this.get_selector().attributes.getNamedItem("MenuXml").value, null);
        this.selectDefaultDashboard();
        !isNullOrEmptyString(this.get_currentItem()) &&
            Mscrm.DashboardPage.checkForUserDashboardUpdate("Home_Dashboards.aspx",
                this.get_currentItem(),
                this.get_currentType().toString());
        this.$N_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        window.clearTimeout(this.$5_3);
        this.$j_3();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $d_3: function() {
        this.$4_3 = $get("dashboardSelectorContainer", this.get_element());
        if (!IsNull(this.get_selector())) {
            Mscrm.PageManager.get_instance().get_eventManager().subscribeEvent(14, this.get_id());
            var $v_0 = $get("dashboardSelectorLink", this.get_element());
            $addHandler($v_0, "click", this.$$d_$Z_3);
            this.$0_3 = new Mscrm.Popup(this.$$d_$U_3)
        }
    },
    $j_3: function() {
        var $v_0 = $get("dashboardSelectorLink", this.get_element());
        $removeHandler($v_0, "click", this.$$d_$Z_3);
        this.$0_3.dispose()
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 14:
            this.$V_3();
            break
        }
        return null
    },
    $V_3: function() {
        var $v_0 = $get("dashboardSelectorLink"), $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if (IsNull($v_0) || IsNull($v_1)) return;
        try {
            $v_1.style.width = $v_1.clientWidth.toString();
            var $v_2 = $v_0.parentNode.offsetWidth,
                $v_3 = $v_1.scrollWidth,
                $v_4 = XUI.Html.DomUtils.GetNextSibling($v_1).offsetWidth;
            if ($v_3 > $v_2 - $v_4) $v_1.style.width = ($v_2 - $v_4 - 30).toString();
            else $v_1.style.width = "auto"
        } catch ($$e_5) {
        }
    },
    selectDefaultDashboard: function() {
        var $v_0 = "";
        if (!IsNull(this.get_selector().attributes
            .getNamedItem("defaultItem"))) $v_0 = this.get_selector().attributes.getNamedItem("defaultItem").value;
        this.selectDashboard($v_0)
    },
    hide: function() {
        !IsNull(this.$0_3) && !IsNull(this.$0_3.get_currentMenu()) && this.$0_3.get_currentMenu().hide()
    },
    loadList: function(newList, defaultItem) {
        this.$0_3.set_menuXml(XUI.Xml.LoadXml(newList));
        this.$0_3.set_currentMenu(null);
        this.$i_3();
        if (!isNullOrEmptyString(defaultItem)) {
            this.get_selector().setAttribute("defaultItem", defaultItem);
            this.selectDashboard(defaultItem)
        } else this.selectDashboard(null);
        this.$W_3()
    },
    $Z_3: function($p0) {
        $p0.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
            $v_1 = new Mscrm.SelectorUtil($get("dashboardSelectorLink", this.get_element()),
                this.$0_3,
                XUI.Xml.XMLSerializer.serializeToString(this.$0_3.get_menuXml()));
        $v_1.selectorClicked($v_0)
    },
    $U_3: function($p0, $p1) {
        var $v_0 = $p1["menuitem"];
        this.selectDashboard($v_0.get_menuItemId());
        this.loadSelectedDashboard()
    },
    selectDashboard: function(dashboardId) {
        var $v_0 = this.getDashboardNode(dashboardId);
        if (IsNull($v_0)) {
            dashboardId = this.$S_3();
            $v_0 = this.getDashboardNode(dashboardId)
        }
        if (IsNull($v_0) && this.get_dashboardItems().length > 0) {
            dashboardId = XUI.Xml.GetText(this.get_dashboardItems()[1].attributes.getNamedItem("id"));
            $v_0 = this.getDashboardNode(dashboardId)
        }
        var $v_1 = window.LOCID_NO_DASHBOARDS_AVAILABLE, $v_2 = "0", $v_3 = null, $v_4 = null;
        if (!IsNull($v_0)) {
            $v_1 = XUI.Xml.GetText($v_0.attributes.getNamedItem("display"));
            $v_2 = XUI.Xml.GetText($v_0.attributes.getNamedItem("type"));
            $v_3 = XUI.Xml.GetText($v_0.attributes.getNamedItem("dashboardUrl"));
            $v_4 = XUI.Xml.GetText($v_0.attributes.getNamedItem("istabletenabled"))
        }
        XUI.Html.SetText(this.get_selector(), $v_1);
        this.get_selector().setAttribute("CurrentItem", dashboardId);
        this.get_selector().setAttribute("CurrentItemType", $v_2);
        this.get_selector().setAttribute("CurrentPowerBIDashboardUrl", $v_3);
        this.get_selector().setAttribute("isTabletEnabled", $v_4);
        this.get_selector().title = $v_1;
        var $v_5 = String.format(window.LOCID_VIEW_TITLE_FORMAT, window.LOCID_DASHBOARD_PLURAL_NAME, $v_1);
        setPageTitle($v_5);
        setAttributeInWindow("DashboardName", $v_1);
        setAttributeInWindow("DashboardId", dashboardId)
    },
    $i_3: function() {
        this.$C_3("defaultItem");
        this.$C_3("userDefaultItem");
        this.$C_3("systemDefaultItem")
    },
    $C_3: function($p0) {
        var $v_0 = "", $v_1 = XUI.Xml.DomUtils.GetFirstChild(this.$0_3.get_menuXml());
        if (!IsNull($v_1.attributes.getNamedItem($p0))) $v_0 = XUI.Xml.GetText($v_1.attributes.getNamedItem($p0));
        this.get_selector().setAttribute($p0, $v_0)
    },
    $W_3: function() {
        var $v_0 = {};
        $v_0["timestamp"] = new Date;
        $v_0["queryList"] = "";
        var $v_1 = {};
        $v_1["data"] = $v_0;
        $v_1["key"] = String.format("QueryList_{0}", "Dashboard");
        Mscrm.PageManager.get_instance().raiseEvent(5, $v_1)
    },
    $S_3: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$0_3.get_menuXml(), "/Menu", null);
        if (IsNull($v_0)) return null;
        var $v_1 = $v_0.attributes.getNamedItem("defaultItem");
        return IsNull($v_1) ? null : $v_1.value
    },
    $2_3: function($p0, $p1) {
        var $v_0 = $get($p0);
        if (!IsNull($v_0)) {
            $v_0.style.zIndex = $p1;
            if (0 >= $p1) $v_0.style.visibility = "hidden";
            else $v_0.style.visibility = "visible"
        }
    },
    $N_3: function($p0) {
        this.$2_3("dashboardFrameRow", 1);
        this.$2_3("dashboardLoadingRow", 0);
        this.$2_3("dashboardNotificationRow", 0);
        try {
            refreshRibbon();
            this.$L_3();
            this.$X_3();
            if (window.UseTabletExperience && this.$9_3) {
                var $$t_6 = this;
                Sys.Application.add_load(function($p1_0, $p1_1) {
                    $$t_6.$9_3 = false;
                    $$t_6.selectDefaultDashboard();
                    $$t_6.loadSelectedDashboard()
                })
            } else {
                var $v_1 = this.$Y_3();
                Mscrm.PageManager.get_instance().raiseEvent(72, $v_1);
                $addHandler(window, "resize", this.$$d_$f_3);
                this.get_selector().focus()
            }
            var $v_0 = {};
            $v_0["dashboardId"] = this.get_currentItem();
            XrmUI.Manager.XrmUIPage = new Mscrm.XrmUIPageWrapper("Workspace", $v_0)
        } catch ($$e_5) {
        }
    },
    $L_3: function() {
        var $v_0 = $get("dashboardFrame");
        if (!IsNull($v_0)) {
            $removeHandler($v_0, "load", this.$$d_$N_3);
            if ($v_0.contentWindow.document.readyState === "complete") Mscrm.DashboardSelector.$B();
            else $addHandler($v_0.contentWindow.document, "readystatechange", this.$$d_$O_3)
        } else Mscrm.DashboardSelector.$B()
    },
    $O_3: function($p0) {
        var $v_0 = $get("dashboardFrame");
        if ($v_0.contentWindow.document.readyState === "complete") {
            $removeHandler($v_0.contentWindow.document, "readystatechange", this.$$d_$O_3);
            Mscrm.DashboardSelector.$B()
        }
    },
    $X_3: function() {
        var $v_0 = $get("dashboardFrame");
        if (!IsNull($v_0)) this.$3_3 = $v_0.offsetWidth
    },
    $Y_3: function() {
        var $v_0 = {}, $v_1 = Mscrm.CrmUri.create(window.location.href);
        $v_0["uri"] = $v_1.toString();
        if (this.get_currentType()) {
            var $v_2 = this.getDashboardNode(this.get_currentItem());
            $v_0["otc"] = this.get_currentType().toString();
            $v_0["action"] = $v_1.get_queryString().replace("?", "");
            $v_0["etn"] = "Dashboard";
            $v_0["entitydisplayname"] = window.LOCID_DASHBOARD_SINGLE_NAME;
            $v_0["title"] = XUI.Xml.GetText($v_2.attributes.getNamedItem("display"));
            $v_0["id"] = this.get_currentItem()
        }
        return $v_0
    },
    $5_3: 0,
    $f_3: function($p0) {
        window.clearTimeout(this.$5_3);
        var $$t_3 = this;
        this.$5_3 = window.setTimeout(function() {
                if (window.UseTabletExperience && Mscrm.CrmBrowser.get_currentBrowser().get_agent() === 3)
                    if ($$t_3.$A_3 === window.screen.availHeight) return;
                    else $$t_3.$A_3 = window.screen.availHeight;
                var $v_0 = document.body.offsetWidth;
                if (Math.abs($v_0 - $$t_3.$3_3) < 40) return;
                if (!$$t_3.$3_3) {
                    $$t_3.$3_3 = $v_0;
                    return
                }
                Xrm.Internal.trace.logT(Mscrm
                    .DashboardSelector,
                    "resizing dashboard from {0}px to {1}px",
                    $$t_3.$3_3,
                    $v_0);
                $$t_3.$3_3 = $v_0;
                var $v_1 = $$t_3.$R_3();
                !IsNull($v_1) && $v_1.raiseEvent(53, null)
            },
            300)
    },
    $R_3: function() {
        var $v_0 = $get("dashboardFrame");
        if (IsNull($v_0)) return $find("crmPageManager");
        else {
            var $v_1 = $v_0.contentWindow.Sys.Application;
            if (!IsNull($v_1)) return $v_1.findComponent("crmPageManager")
        }
        return null
    },
    loadSelectedDashboard: function() {
        setPerfMarkerTimestamp("StartDashboardLoadTimeStamp");
        var $v_0 = this.get_currentItem(), $v_1 = this.get_currentType();
        if (!this.get_dashboardItems().length || isNullOrEmptyString($v_0)) {
            this.$2_3("dashboardFrameRow", 0);
            this.$2_3("dashboardLoadingRow", 0);
            this.$2_3("dashboardNotificationRow", 1)
        } else {
            var $v_2 = $get("dashboardBodyContainer");
            if (!$v_2) {
                Xrm.Internal.trace.errorT(Mscrm.DashboardSelector, "dashboardBodyContainer is missing");
                return
            }
            this.$2_3("dashboardFrameRow", 0);
            this.$2_3("dashboardLoadingRow", 1);
            this.$2_3("dashboardNotificationRow", 0);
            var $v_3 = Mscrm.CrmUri.create("/dashboards/dashboard.aspx");
            $v_3.set_useVersionStamp(true);
            $v_3.set_includeContextInPath(true);
            $v_3.appendToQuery("dashboardId=" + $v_0);
            $v_3.appendToQuery("&pagemode=iframe");
            $v_3.appendToQuery("&dashboardType=" + $v_1.toString());
            $v_1 !== 1030 && this.$H_3($v_3, $v_0);
            var $v_4 = $get("dashboardFrame");
            if (IsNull($v_4)) {
                this.$P_3();
                $v_2.innerHTML = "";
                $v_4 = this.$M_3(window.document);
                $v_2.appendChild($v_4)
            }
            var $v_5 = this.$$d_$N_3;
            $v_4.contentWindow.location.replace($v_3.toString());
            $addHandler($v_4, "load", $v_5)
        }
        this.updateStickyDashboardUrl($v_0, $v_1)
    },
    $P_3: function() {
        for (var $v_0 = $get("crmForm"), $v_1 = Sys.Application.getComponents(), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            if (IsNull($v_1[$v_2].get_id)) continue;
            var $v_3 = $get($v_1[$v_2].get_id());
            !IsNull($v_3) && $v_0.contains($v_3) && $v_1[$v_2].dispose()
        }
    },
    $M_3: function($p0) {
        var $v_0 = $p0.createElement("IFRAME");
        $v_0.id = "dashboardFrame";
        $v_0.setAttribute("name", "dashboardFrame");
        $v_0.scrolling = "no";
        $v_0.frameBorder = "0";
        $v_0.className = "ms-crm-absolutePosition";
        $v_0.style.borderStyle = "none";
        $v_0.style.width = $v_0.style.height = "100%";
        return $v_0
    },
    $H_3: function($p0, $p1) {
        var $v_0 = Mscrm.CrmLocalStorage.getItem("cache.userDashboard" + $p1 + ".version");
        if (isNullOrEmptyString($v_0)) return;
        $p0.appendToQuery("&dashboardVer=" + CrmEncodeDecode.CrmUrlEncode($v_0))
    },
    updateStickyDashboardUrl: function(dashboardId, dashboardType) {
        if (IsNull(dashboardType)) {
            Xrm.Internal.trace.warningT(Mscrm.DashboardSelector,
                "falling back to dashboard type 0, as it was not provided by the caller");
            dashboardType = 0
        }
        var $v_0 = {};
        $v_0["dashboardId"] = dashboardId;
        $v_0["dashboardType"] = dashboardType.toString();
        if (this.$7_3) $v_0["refreshDashboard"] = true;
        if (isOutlookHostedWindow()) getOutlookHostedWindow().handleEvent(61, $v_0, null);
        else Mscrm.PageManager.get_instance().raiseEvent(61, $v_0)
    }
};
Mscrm.HomeDashboardsPage = function() {};
Mscrm.HomeDashboardsPage.run = function() {
    if (Mscrm.DashboardPage.$F("Home_Dashboards.aspx")) return;
    Mscrm.DashboardPage.$G("Home_Dashboards.aspx");
    Mscrm.HomeDashboardsPage.$J()
};
Mscrm.HomeDashboardsPage.$J = function() {
    var $v_0 = Mscrm.CrmUri.create(window.location.href),
        $v_1 = $v_0.get_query(),
        $v_2 = Mscrm.HomeDashboardsPage.$I($v_0, $v_1),
        $v_3 = Mscrm.HomeDashboardsPage.$T($v_1),
        $v_4 = jQueryApi.jQueryDeferredFactory.Deferred(Object, Error);
    Sys.Application.add_load(function() { $v_4.resolve(null) });
    $P_CRM.when($v_3, $v_2, $v_4).done(function($p1_0) { return Mscrm.HomeDashboardsPage.$a($p1_0, $v_1) })
};
Mscrm.HomeDashboardsPage.$a = function($p0, $p1) {
    var $v_0 = $p0.toString();
    if ($v_0 === $p1["dashboardId"]) return;
    var $v_1 = $find("dashboardSelector"), $v_2 = !IsNull($v_1.getDashboardNode($v_0)), $v_3 = $v_1.get_currentItem();
    if ($v_3 === $v_0) return;
    if ($v_2) {
        var $v_4 = Mscrm.CrmCrossBrowser.getLocalStorage(window.self);
        $v_4.setItem("cache.usersDashboards.defaultFor." + $p1["sitemappath"], $v_0);
        Xrm.Internal.trace.log("Home_Dashboards.aspx", "Default dashboard changed to {0}", $v_0);
        $v_1.selectDashboard($v_0);
        $v_1.loadSelectedDashboard()
    } else Xrm.Internal.trace.warning("Home_Dashboards.aspx", "Requested dashboard {0} not found", $v_0)
};
Mscrm.HomeDashboardsPage.$T = function($p0) {
    var $v_0;
    if ("dashboardId" in $p0) $v_0 = jQueryApi.jQueryDeferredFactory.fromResult(Object, Error, $p0["dashboardId"]);
    else {
        var $v_1 = new RemoteCommand("DashboardWebService", "GetDefaultDashboardId");
        $v_1.SetParameter("siteMapPath", $p0["sitemappath"]);
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.AppModuleForOrganization") &&
            $v_1.SetParameter("appid", $p0["appid"]);
        $v_0 = Mscrm.DashboardPage.$6($v_1)
    }
    return $v_0
};
Mscrm.HomeDashboardsPage.$I = function($p0, $p1) {
    if ("noUpdateCheck" in $p1) {
        Xrm.Internal.trace.log("Home_Dashboards.aspx", "Skipping check for updates");
        return jQueryApi.jQueryDeferredFactory.fromResult(Object, Error, $p1["userDashboardsHash"])
    }
    Xrm.Internal.trace.log("Home_Dashboards.aspx", "Checking if user dashboard has been updated");
    var $v_0 = new
            RemoteCommand("DashboardWebService", "GetUserDashboardListHash"),
        $v_1 = Mscrm.DashboardPage.$6($v_0);
    $v_1.done(function($p1_0) {
        var $v_2 = $p1_0.toString(),
            $v_3 = Mscrm.CrmCrossBrowser.getLocalStorage(window.self).getItem("cache.usersDashboards.hash");
        if (!("userDashboardsHash" in $p1) && $v_2 === $v_3) {
            Xrm.Internal.trace.log("Home_Dashboards.aspx", "Dashboard list is up to date");
            return
        }
        Mscrm.CrmCrossBrowser.getLocalStorage(window.self).setItem("cache.usersDashboards.hash", $v_2);
        if (isNullOrEmptyString($v_3)) return;
        Xrm.Internal.trace.log("Home_Dashboards.aspx", "Redirecting to update dashboard list");
        window.location.reload(true)
    });
    return $v_1
};
Mscrm.TopBottomScrollRestriction = function($p0) {
    this.$$d_$b_0 = Function.createDelegate(this, this.$b_0);
    this.$$d_$c_0 = Function.createDelegate(this, this.$c_0);
    if (!$p0) throw Error.argumentNull("panel");
    this.$1_0 = $p0;
    $addHandler(this.$1_0, "touchstart", this.$$d_$c_0);
    $addHandler(this.$1_0, "touchmove", this.$$d_$b_0)
};
Mscrm.TopBottomScrollRestriction.prototype = {
    $8_0: false,
    $E_0: false,
    $D_0: 0,
    $1_0: null,
    dispose: function() {
        $removeHandler(this.$1_0, "touchstart", this.$$d_$c_0);
        $removeHandler(this.$1_0, "touchmove", this.$$d_$b_0)
    },
    $c_0: function($p0) {
        this.$D_0 = $p0.clientY;
        this.$E_0 = this.$1_0.scrollTop <= 0;
        this.$8_0 = this.$1_0.scrollTop >= this.$1_0.scrollHeight - this.$1_0.clientHeight
    },
    $b_0: function($p0) {
        var $v_0 = this.$D_0 - $p0.clientY;
        if ($v_0 < 0 && this.$E_0 || $v_0 > 0 && this.$8_0) {
            $p0.preventDefault();
            $p0.stopPropagation()
        } else $p0.stopPropagation()
    }
};
Mscrm.DashboardPage.registerClass("Mscrm.DashboardPage");
Mscrm.DashboardSelector.registerClass("Mscrm.DashboardSelector", Mscrm.CrmUIControl);
Mscrm.HomeDashboardsPage.registerClass("Mscrm.HomeDashboardsPage");
Mscrm.TopBottomScrollRestriction.registerClass("Mscrm.TopBottomScrollRestriction", null, Sys.IDisposable)