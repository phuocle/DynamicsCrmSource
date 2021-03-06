Type.registerNamespace("Mscrm");
Mscrm.IViewSelectorMenu = function() {};
Mscrm.IViewSelectorMenu.registerInterface("Mscrm.IViewSelectorMenu");
Mscrm.SplitterControl = function(element) {
    this.$$d_$2k_3 = Function.createDelegate(this, this.$2k_3);
    this.$$d_$2h_3 = Function.createDelegate(this, this.$2h_3);
    this.$$d_$1v_3 = Function.createDelegate(this, this.$1v_3);
    this.$$d_$2j_3 = Function.createDelegate(this, this.$2j_3);
    this.$$d_$2i_3 = Function.createDelegate(this, this.$2i_3);
    Mscrm.SplitterControl.initializeBase(this, [element]);
    this.get_element().innerHTML = Mscrm.SplitterControl.get_$1w();
    this.$1G_3 = this.$$d_$2i_3;
    this.$S_3 = this.$$d_$2j_3;
    this.$T_3 = this.$$d_$1v_3;
    this.$1F_3 = this.$$d_$2h_3;
    this.$s_3 = this.$$d_$2k_3;
    this.$1H_3 = this.get_element().getElementsByTagName("TABLE")[0];
    if (!window.UseTabletExperience) {
        this.$B_3 = this.get_element().getElementsByTagName("A")[0];
        $addHandler(this.$B_3, "mousedown", this.$1G_3);
        $addHandler(this.$B_3, "dblclick", this.$1F_3)
    }
    this.$5_3 = document.createElement("IFrame");
    this.$5_3.id = "splitter_backFrame";
    this.$5_3.setAttribute("name", "splitter_backFrame");
    this.$5_3.title = this.$Y_3;
    this.$5_3.style.position = "absolute";
    this.$5_3.style.top = "0px";
    this.$5_3.style.left = "0px";
    this.$5_3.style.width = document.body.offsetWidth.toString() + "px";
    this.$5_3.style.height = document.body.offsetHeight.toString() + "px";
    this.$5_3.style.zIndex = 31000;
    XUI.Html.SetOpacity(this.$5_3, 0);
    this.$5_3.style.display = "none";
    document.body.appendChild(this.$5_3);
    this.$7_3 = document.createElement("DIV");
    this.$7_3.className = "ms-crm-Splitter-Fixed ms-crm-SplitterMotion-Fixed";
    this.$7_3.innerHTML = Mscrm.SplitterControl.get_$1w();
    document.body.appendChild(this.$7_3)
};
Mscrm.SplitterControl.get_$1w = function() {
    var $v_0 = "";
    if (!window.UseTabletExperience) {
        var $v_1 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/verticalgripper.gif"));
        $v_0 = String.format("<img valign='middle' class='ms-crm-Splitter {0}' src='{1}' alt=''/>",
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.cssClass),
            CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.source))
    }
    return String
        .format("<a class='ms-crm-Splitter'><table class='stdTable ms-crm-Splitter' cellspacing='0'><tr class='ms-crm-Splitter'><td>{0}</td></tr></table></a>", $v_0)
};
Mscrm.SplitterControl.prototype = {
    size: 3,
    $g_3: 0,
    $h_3: 0,
    $12_3: 0,
    $5_3: null,
    $7_3: null,
    $B_3: null,
    $1H_3: null,
    $1G_3: null,
    $T_3: null,
    $S_3: null,
    $s_3: null,
    $1F_3: null,
    $Y_3: "",
    get_iFrameTitle: function() { return this.$Y_3 },
    set_iFrameTitle: function(value) {
        this.$Y_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$5_3.title = this.$Y_3
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 14:
            this.$1i_3(parameters);
            break
        }
        return null
    },
    $1i_3: function($p0) {
        $p0 = $p0[this.get_id()];
        var $v_0 = $p0["height"], $v_1 = $p0["left"], $v_2 = $p0["top"];
        this.$h_3 = $p0["minLeft"];
        this.$12_3 = $p0["maxLeft"];
        if (!IsNull($p0["defaultXPos"])) this.$g_3 = $p0["defaultXPos"];
        this.set_left($v_1);
        this.$1H_3.style.height = $v_0.toString() + "px";
        this.set_height($v_0);
        this.set_top($v_2)
    },
    $2k_3: function($p0) { window.document.activeElement !== this.$B_3 && this.$1v_3($p0) },
    $2h_3: function($p0) {
        if (this.$7_3.offsetLeft !== this.$g_3 && this.$g_3 > 0) {
            this.set_left(this.$g_3);
            this.raiseEvent(20, null)
        }
    },
    $1v_3: function($p0) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer || Sys.Browser.agent === Sys.Browser.Firefox) {
            this.$B_3.releaseCapture();
            $removeHandler(this.$B_3, "mousemove", this.$S_3);
            $removeHandler(this.$B_3, "mouseup", this.$T_3);
            $removeHandler(this.$7_3, "mouseover", this.$s_3)
        } else {
            this.$5_3.contentWindow.document.removeEventListener("mousemove", this.$S_3, true);
            this.$5_3.contentWindow.document.removeEventListener("mouseup", this.$T_3, true)
        }
        this.set_left(this.$7_3.offsetLeft);
        this.$5_3.style.display = "none";
        this.$7_3.style.display = "none";
        this.raiseEvent(20, null);
        $p0.stopPropagation()
    },
    $2j_3: function($p0) {
        var $v_0 = $p0.clientX;
        if ($p0
            .clientX <
            this.$h_3 ||
            $p0.clientX > this.$12_3) $v_0 = $p0.clientX < this.$h_3 ? this.$h_3 : this.$12_3;
        this.$7_3.style.left = $v_0.toString() + "px";
        $p0.stopPropagation()
    },
    $2i_3: function($p0) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer || Sys.Browser.agent === Sys.Browser.Firefox) {
            this.$B_3.setCapture();
            $addHandler(this.$B_3, "mousemove", this.$S_3);
            $addHandler(this.$B_3, "mouseup", this.$T_3);
            $addHandler(this.$7_3, "mouseover", this.$s_3)
        } else {
            this.$5_3.contentWindow.document.addEventListener("mousemove", this.$S_3, true);
            this.$5_3.contentWindow.document.addEventListener("mouseup", this.$T_3, true)
        }
        this.$5_3.style.display = "inline";
        this.$7_3.style.left = this.get_element().offsetLeft.toString() + "px";
        this.$7_3.style.top = this.get_element().offsetTop.toString() + "px";
        this.$7_3.style.height = this.get_element().offsetHeight.toString() + "px";
        this.$7_3.style.display = "inline";
        this.$7_3.focus()
    }
};
Mscrm.AppNavBar = function($p0) {
    this.$$d_$25_3 = Function.createDelegate(this, this.$25_3);
    this.$$d_$27_3 = Function.createDelegate(this, this.$27_3);
    this.$$d_$1p_3 = Function.createDelegate(this, this.$1p_3);
    this.$$d_$1T_3 = Function.createDelegate(this, this.$1T_3);
    this.$$d_$2e_3 = Function.createDelegate(this, this.$2e_3);
    this.$3_3 = {};
    Mscrm.AppNavBar.initializeBase(this, [$p0])
};
Mscrm.AppNavBar.prototype = {
    $6_3: false,
    $G_3: null,
    get_siteMap: function() { return this.$G_3 },
    $D_3: null,
    $17_3: null,
    $18_3: null,
    $1B_3: null,
    $1E_3: null,
    $A_3: null,
    $2_3: null,
    $4_3: null,
    $l_3: null,
    $V_3: null,
    $U_3: null,
    $P_3: null,
    $m_3: null,
    flyoutAnimation: false,
    $I_3: 200,
    get_actualWidth: function() { return this.$I_3 },
    set_actualWidth: function(value) {
        if (value >= 0) this.$I_3 = value;
        return value
    },
    collapsedWidth: 0,
    defaultAreaId: null,
    defaultSubAreaId: null,
    selectedAreaId: null,
    selectedSubAreaId: null,
    titleFormat: null,
    altGroupExpanded: null,
    altGroupCollapsed: null,
    collapsedNavLabel: null,
    viewSelectorTooltip: null,
    viewSelectorAltText: null,
    areasXslXml: null,
    subAreasXslXml: null,
    siteMapXml: null,
    altHomeIcon: null,
    altRecentlyViewedIcon: null,
    newRecordTitle: null,
    newRecordTooltip: null,
    newActivityTitle: null,
    newActivityTooltip: null,
    recentlyVisitedTitle: null,
    openActionTitle: null,
    openInNewWindowActionTitle: null,
    copyShortcutActionTitle: null,
    sendShortcutActionTitle: null,
    emptyTitle: null,
    $M_3: false,
    get_collapsed: function() { return this.$M_3 },
    _subAreaIconMap: null,
    get_subAreaIconMap: function() { return this._subAreaIconMap },
    set_subAreaIconMap: function(value) {
        this._subAreaIconMap = value;
        return value
    },
    $C_3: null,
    get_activityList: function() { return this.$C_3 },
    set_activityList: function(value) {
        this.$C_3 = value;
        return value
    },
    get_height: function() {
        var $v_0 = this.get_element().offsetHeight;
        if (this.$6_3) $v_0 = 0;
        return $v_0
    },
    get_width: function() {
        var $v_0 = this.get_element().offsetWidth;
        if (this.$6_3) $v_0 = 0;
        return $v_0
    },
    get_$2c_3: function() { return this.get_element() },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this._subAreaIconMap = {};
        this.$G_3 = XUI.Xml.LoadXml(this.siteMapXml);
        this.$2o_3(this.$G_3);
        this.$2a_3();
        this.$18_3 = this.$$d_$2e_3;
        $addHandler(this.get_element(), "focusout", this.$18_3);
        this.$1B_3 = this.$$d_$1T_3;
        $addHandler(this.get_element(), "keypress", this.$1B_3);
        this.$4_3 = new Mscrm.AppWonderBar(this.$P_3, this, this.selectedAreaId);
        this.$A_3 = new Mscrm.AppNavTitle(this.$V_3, this);
        this.$A_3.set_title(this.$4_3.get_areaTitle());
        this.$2_3 = new Mscrm.AppSubAreas(this.$U_3, this, this.selectedSubAreaId);
        if (window.UseTabletExperience) {
            this.$4_3.setVisibility(false);
            this.$l_3 = new Mscrm.AppNavCollapsedBar(this.$m_3, this, this.$M_3);
            this.$1E_3 = this.$$d_$1p_3;
            $addHandler(this.get_element(), "orientationchange", this.$1E_3);
            var $$t_0 = this;
            window.setTimeout(function() { $$t_0.$1p_3(null) }, 0)
        }
    },
    $2o_3: function($p0) {
        for (var $v_0 = XUI.Xml.SelectNodes($p0, "//*[@Icon]", null), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1],
                $v_3 = $v_2.attributes.getNamedItem("Icon"),
                $v_4 = XUI.Xml.GetText($v_2.attributes.getNamedItem("Id"));
            if ($v_2.nodeName === "SubArea") {
                var $v_6 = XUI.Xml.GetText($v_2.parentNode.parentNode.attributes.getNamedItem("Id")),
                    $v_7 = $v_6 + "-" + $v_4;
                this._subAreaIconMap[$v_7] = XUI.Xml.GetText($v_3)
            }
            var $v_5 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(XUI.Xml.GetText($v_3)));
            $v_3.value = $v_5.source;
            if (!isNullOrEmptyString($v_5.cssClass)) {
                var $v_8 = $p0.createAttribute("IconClass");
                $v_8.value = $v_5.cssClass;
                $v_2.attributes.setNamedItem($v_8)
            }
        }
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 9:
            this.$2P_3(parameters);
            break;
        case 8:
            this.$2N_3(parameters);
            break;
        case 6:
            this.$2O_3(parameters);
            break;
        case 7:
            this.$1h_3(parameters);
            break;
        case 12:
            this.$2S_3(parameters);
            break;
        case 14:
            this.$1i_3(parameters);
            break;
        case 1:
            this.$2J_3(parameters);
            break;
        case 13:
            this.$2V_3(parameters);
            break;
        case 60:
        case 61:
            this.$2W_3(parameters);
            break;
        case 3:
            return this.$2I_3(parameters);
        case 4:
            return this.$2H_3(parameters);
        case 48:
            return this.$2C_3(parameters);
        case 58:
            this.$A_3.setFocusOnRecentIcon();
            break;
        case 59:
            this.$2_3.setFocusOnFirstItem();
            break
        }
        return null
    },
    toggleCollapsedMode: function() {
        if (this.$M_3) {
            this.set_width(this.$I_3);
            this.$l_3.setVisibility(false);
            this.$A_3.setVisibility(true);
            this.$2_3.setVisibility(true);
            this.$M_3 = false;
            this.raiseEvent(20, null)
        } else {
            this.set_width(this.collapsedWidth);
            this.$l_3.setVisibility(true);
            this.$A_3.setVisibility(false);
            this.$2_3.setVisibility(false);
            this.$M_3 = true;
            this.raiseEvent(20, null)
        }
    },
    $2N_3: function($p0) {
        var $v_0 = Mscrm.CrmUri.create($p0["uri"]);
        switch ($v_0.get_pageType()) {
        case "entityrecord":
            break;
        case "entitylist":
            this.show();
            break;
        default:
            break
        }
        !IsNull($p0["saveStateId"]) && this.$1h_3($p0)
    },
    $2V_3: function($p0) { this.$2_3.handleViewUrlChanged($p0) },
    $2W_3: function($p0) { this.$2_3.handleVisualizationOrDashboardsUrlChanged($p0) },
    $2C_3: function($p0) { return this.$2_3.getStickyViewIdAndUpdateCurrentSubAreaPageId($p0) },
    $2I_3: function($p0) { return this.$2_3.handleGetSelectedAreaSubAreaIds() },
    $2H_3: function($p0) {
        if (!IsNull($p0) && !IsNull($p0["pageType"]) && $p0["pageType"] === "isv") return this.$2_3.getAppNavState();
        else return null
    },
    $2J_3: function($p0) {
        var $v_0 = $p0["areaId"], $v_1 = $p0["subAreaId"];
        this.$2_3.loadSubAreas($v_0);
        this.$4_3.selectArea($v_0);
        this.$2_3.selectSubArea($v_1);
        this.$A_3.set_title(this.$4_3.get_areaTitle());
        var $v_2 = {};
        $v_2["uri"] = this.$2_3.get_uri().toString();
        this.$13_3($v_2)
    },
    $1i_3: function($p0) { this.$2l_3($p0) },
    $13_3: function($p0) {
        var $v_0 = $p0["uri"];
        if (IsNull($v_0) || !$v_0.length) return null;
        return this.raiseEvent(21, $p0)
    },
    $2l_3: function($p0) {
        if (this.get_element().style.display === "none") return;
        this.$6_3 && $p0["sizeChanged"] && this.hideFloatingMode();
        this.$1X_3($p0)
    },
    $1X_3: function($p0) {
        var $v_0 = $p0[this.get_id()], $v_1 = $v_0["top"];
        this.get_element().offsetTop !== $v_1 && this.set_top($v_1);
        var $v_2 = $v_0["left"];
        this.get_element().offsetLeft !== $v_2 && this.set_left($v_2);
        var $v_3 = $v_0["width"];
        this.get_element().offsetWidth !== $v_3 && this.set_width($v_3);
        var $v_4 = this.get_element().offsetHeight, $v_5 = $v_0["height"];
        if (this.get_element().offsetHeight !== $v_5) {
            $v_4 = $v_5;
            this.set_height($v_5)
        }
        this.$4_3.adjustSize($v_0);
        if ($v_4 !== this.$V_3.offsetHeight + this.$U_3.offsetHeight + this.$P_3.offsetHeight) {
            var $v_6 = $v_4 - this.$V_3.offsetHeight - this.$P_3.offsetHeight - 8;
            this.$U_3.style.height = ($v_6 > 0 ? $v_6.toString() : "0") + "px"
        }
        this.$2_3.adjustSubareaWidth()
    },
    $2S_3: function($p0) {
        if (!IsNull($p0) && !IsNull($p0["mode"]) && $p0["mode"] === "float") this.showFloatingMode($p0);
        else this.show()
    },
    $2O_3: function($p0) {
        var $v_0 = $p0["saveStateId"], $v_1 = {};
        $v_1["areaId"] = this.$4_3.$8_0;
        $v_1["subAreaId"] = this.$2_3.get_subAreaId();
        $v_1["display"] = this.get_element().style.display;
        var $v_2 = {};
        $v_2["key"] = this.get_id() + "_" + $v_0;
        $v_2["data"] = $v_1;
        this.raiseEvent(5, $v_2)
    },
    $1h_3: function($p0) {
        var $v_0 = $p0["saveStateId"], $v_1 = {};
        $v_1["key"] = this.get_id() + "_" + $v_0;
        var $v_2 = this.raiseEvent(10, $v_1), $v_3 = $v_2[0], $v_4 = $v_3["areaId"], $v_5 = $v_3["subAreaId"];
        this.$2_3.loadSubAreas($v_4);
        this.$4_3.selectArea($v_4);
        this.$2_3.selectSubArea($v_3["subAreaId"]);
        this.$A_3.set_title(this.$4_3.get_areaTitle());
        var $v_6 = $p0["display"];
        if (IsNull($v_6) || !$v_6.length) $v_6 = "block";
        if (this.get_element().style.display !== $v_6)
            if ($v_6 === "none") this.hide();
            else this.show()
    },
    $2P_3: function($p0) {
        Mscrm.NavigationMode.DefaultNavigationMode === 1 && this.$10_3();
        this.$2r_3($p0);
        Mscrm.NavigationMode.DefaultNavigationMode === 1 && this.raiseEvent(20, null)
    },
    $2r_3: function($p0) {
        if (!IsNull($p0["historyNavigation"]) && $p0["historyNavigation"]) return;
        var $v_0 = Mscrm.CrmUri.create($p0["uri"]), $v_1 = this.$1z_3($p0, $v_0);
        if (!$v_1) {
            var $v_2 = parseInt($v_0.get_query()["etc"], 10);
            if (Mscrm.EntityPropUtil.isActivityTypeCode($v_2) && $v_2 !== 4406) $v_0.get_query()["etc"] = "4200";
            this.$1z_3($p0, $v_0)
        }
    },
    $1z_3: function($p0, $p1) {
        switch ($p1.get_pageType()) {
        case "dashboardeditor":
        case "formeditor":
            this.hide();
            break;
        case "entityrecord":
        case "entityrelatedlist":
            this.show();
            break;
        default:
            this.show();
            break
        }
        delete $p1.get_query().pagemode;
        delete $p1.get_query().sitemappath;
        $p1 = Mscrm.Utilities.getHomePageUrlForRecordPage($p1, $p1);
        var $v_0 = false, $v_1 = null, $v_2 = $p0["areaId"], $v_3 = $p0["subAreaId"];
        if (!IsNull($v_2) && !IsNull($v_3)) {
            var $v_4 = XUI.Xml.SelectSingleNode(this.$G_3,
                "SiteMap/Area[@Id=" + $v_2 + "]/Group/SubArea[@Id=" + $v_3 + "]",
                null);
            if (!IsNull($v_4)) {
                var $v_5 = $v_4.attributes.getNamedItem("Url");
                if (!IsNull($v_5)) {
                    var $v_6 = Mscrm.CrmUri.create(XUI.Xml.GetText($v_5));
                    delete $v_6.get_query().sitemappath;
                    $v_0 = $v_6.subsetOf($p1, true);
                    $v_1 = $v_4
                }
            }
        }
        if (!$v_0) {
            var $v_7 = this.$2_3.get_uri().clone();
            if ($v_7.get_path().endsWith("/homepage.aspx") && $p1.get_path().endsWith("/main.aspx")) {
                $v_7.set_path("/main.aspx");
                $v_7.get_query()["pagetype"] = "entitylist"
            }
            delete $v_7.get_query().pagemode;
            delete $v_7.get_query().sitemappath;
            if ($v_7.subsetOf($p1, true)) return true
        }
        if (!$v_0)
            for (var $v_8 = XUI.Xml.SelectNodes(this.$G_3,
                         'SiteMap/Area[@Id="' + this.$4_3.$8_0 + '"]/Group/SubArea',
                         null),
                $v_9 = 0;
                $v_9 < $v_8.length;
                $v_9++) {
                var $v_A = $v_8[$v_9].attributes.getNamedItem("Url");
                $v_1 = $v_8[$v_9];
                if (!IsNull($v_A)) {
                    var $v_B = Mscrm.CrmUri.create(XUI.Xml.GetText($v_A));
                    delete $v_B.get_query().sitemappath;
                    $v_0 = $v_B.subsetOf($p1, true)
                }
                if ($v_0) break
            }
        if (!$v_0)
            for (var $v_C = XUI.Xml.SelectNodes(this.$G_3, "SiteMap/Area/Group/SubArea", null), $v_D = 0;
                $v_D < $v_C.length;
                $v_D++) {
                var $v_E = $v_C[$v_D].attributes.getNamedItem("Url");
                $v_1 = $v_C[$v_D];
                if (!IsNull($v_E)) {
                    var $v_F = Mscrm.CrmUri.create(XUI.Xml.GetText($v_E));
                    delete $v_F.get_query().sitemappath;
                    $v_0 = $v_F.subsetOf($p1, true)
                }
                if ($v_0) break
            }
        if ($v_0) {
            $v_3 = XUI.Xml.GetText($v_1.attributes.getNamedItem("Id"));
            $v_2 = XUI.Xml.GetText($v_1.parentNode.parentNode.attributes.getNamedItem("Id"));
            this.$2_3.loadSubAreas($v_2);
            this.$4_3.selectArea($v_2);
            this.$A_3.set_title(this.$4_3.get_areaTitle());
            this.$2_3.selectSubArea($v_3)
        }
        return $v_0
    },
    $2a_3: function() {
        this.$V_3 = document.createElement("DIV");
        this.$U_3 = document.createElement("DIV");
        this.$P_3 = document.createElement("DIV");
        this.get_element().appendChild(this.$V_3);
        this.get_element().appendChild(this.$U_3);
        this.get_element().appendChild(this.$P_3);
        if (window.UseTabletExperience) {
            this.$m_3 = document.createElement("DIV");
            this.get_element().appendChild(this.$m_3)
        }
        this.set_width(this.$I_3)
    },
    $27_3: function($p0) { this.hideFloatingMode() },
    $1T_3: function($p0) {
        if (this.$6_3) {
            $p0.keyCode === 27 && this.hideFloatingMode();
            $p0.stopPropagation()
        }
    },
    $2e_3: function($p0) {
        if (!this.$6_3) return;
        var $v_0 = document.activeElement;
        while (!IsNull($v_0)) {
            if ($v_0 === this.get_element()) return;
            $v_0 = $v_0.parentNode
        }
        this.hideFloatingMode()
    },
    $1p_3: function($p0) {
        var $v_0 = window.orientation;
        !($v_0 % 180) === !this.$M_3 && this.toggleCollapsedMode()
    },
    loadHome: function() {
        this.$2_3.loadSubAreas(this.defaultAreaId);
        this.$4_3.selectArea(this.defaultAreaId);
        this.$2_3.selectAreaSubArea(this.defaultSubAreaId, this.defaultAreaId);
        this.loadAreaSubArea(this.defaultAreaId, this.defaultSubAreaId)
    },
    loadArea: function(areaId) {
        this.$2_3.loadSubAreas(areaId);
        this.$4_3.selectArea(areaId);
        this.$A_3.set_title(this.$4_3.get_areaTitle());
        if (!this.$6_3) {
            var $v_0 = {};
            $v_0["uri"] = this.$2_3.get_uri().toString();
            $v_0["appNavTitle"] = String.format(this.titleFormat, this.$4_3.get_areaTitle(), this.$2_3.get_title());
            this.$13_3($v_0);
            this.raiseEvent(20, null)
        }
    },
    loadSubArea: function(subAreaId, uri) {
        this.$2_3.selectSubArea(subAreaId);
        var $v_0 = {};
        $v_0["uri"] = IsNull(uri) ? this.$2_3.get_uri().toString() : uri.toString();
        $v_0["appNavTitle"] = String.format(this.titleFormat, this.$4_3.get_areaTitle(), this.$2_3.get_title());
        var $v_1 = this.$13_3($v_0);
        if (this.$6_3)
            if ($v_1[0]) this.$10_3();
            else this.hideFloatingMode()
    },
    loadAreaSubArea: function(areaId, subAreaId) {
        this.$2_3.selectAreaSubArea(subAreaId, areaId);
        var $v_0 = {};
        $v_0["uri"] = this.$2_3.getUri(areaId).toString();
        $v_0["appNavTitle"] = String.format(this.titleFormat,
            this.$4_3.getAreaTitle(areaId),
            this.$2_3.getTitle(areaId));
        $v_0["areaId"] = areaId;
        $v_0["subAreaId"] = subAreaId;
        var $v_1 = this.$13_3($v_0);
        if (this.$6_3)
            if ($v_1[0]) this.$10_3();
            else this.hideFloatingMode()
    },
    get_title: function() { return this.$A_3.get_title() },
    get_areaId: function() { return this.$4_3.$8_0 },
    show: function() {
        this.get_element().style.display = "block";
        this.raiseEvent(20, null)
    },
    hide: function() {
        this.get_element().style.display = "none";
        this.raiseEvent(20, null)
    },
    get_floatingMode: function() { return this.$6_3 },
    showFloatingMode: function(options) {
        if (this.$6_3) return;
        if (IsNull(options)) options = {};
        var $v_0 = true;
        if (!IsNull(options["animation"])) $v_0 = options["animation"];
        var $v_1 = false;
        if (!IsNull(options["disableFlyoutBlur"])) $v_1 = options["disableFlyoutBlur"];
        this.$3_3["disableFlyoutBlur"] = $v_1;
        if (!IsNull(options["activeElement"])) this.$3_3["activeElement"] = options["activeElement"];
        else this.$3_3["activeElement"] = document.activeElement;
        if (IsNull(this.$D_3)) {
            this.$D_3 = document.createElement("DIV");
            this.$D_3.id = "appnav_overlaydiv";
            this.$D_3.className = "ms-crm-Floating-Div ms-crm-NavBar-Floating-Nav";
            this.$17_3 = this.$$d_$27_3;
            $addHandler(this.$D_3, "click", this.$17_3);
            document.getElementsByTagName("BODY")[0].appendChild(this.$D_3)
        }
        this.$D_3.style.display = "inline";
        this.$6_3 = true;
        this.$3_3["appNavStyle"] = this.get_element().style.display;
        this.$3_3["selectedAreaId"] = this.$4_3.$8_0;
        this.$3_3["selectedSubAreaId"] = this.$2_3.get_subAreaId();
        var $v_2 = true;
        if (!IsNull(options["clearSubAreaSelection"])) $v_2 = options["clearSubAreaSelection"];
        $v_2 && this.$2_3.clearSelection();
        this.get_element().style.display = "block";
        var $v_3 = this.raiseEvent(44, {}), $v_4 = $v_3[0];
        this.$1X_3($v_4);
        if (this.flyoutAnimation && $v_0) {
            var $v_5 = $v_4["height"],
                $v_6 = $v_4["bodyWidth"],
                $v_7 = this.$I_3,
                $v_8 = window.LOCID_UI_DIR.toLowerCase() === "rtl" ? 10 : 20,
                $v_9 = 10;
            this.$3_3["bodyWidth"] = $v_6;
            this.$3_3["width"] = $v_7;
            this.$3_3["height"] = $v_5;
            this.$3_3["incWidth"] = Math.ceil(this.get_element().offsetWidth / $v_8);
            this.$3_3["incHeight"] = Math.ceil(this.get_element().offsetHeight / $v_8);
            this.$3_3["interval"] = $v_9;
            this.set_width(0);
            this.set_height(0);
            this.set_left(window.LOCID_UI_DIR.toLowerCase() === "rtl" ? $v_6 : 0);
            var $v_A = $v_4["bodyHeight"], $v_B = $v_4["height"];
            this.set_top($v_A - $v_B);
            window.setTimeout(this.$$d_$25_3, 1)
        }
        this.get_element().style.display = "block";
        this.get_element().tabIndex = 0;
        this.get_element().focus();
        window.document.focus()
    },
    $25_3: function() {
        if (!this.$6_3) return;
        var $v_0 = this.$3_3["width"], $v_1 = this.$3_3["height"];
        if (this.get_element().offsetWidth >= $v_0 && this.get_element().offsetHeight >= $v_1) {
            this.get_element().tabIndex = 0;
            this.get_element().focus();
            return
        }
        if (this.get_element().offsetWidth !== $v_0) {
            var $v_3 = this.$3_3["incWidth"],
                $v_4 = $v_0 - this.get_element().offsetWidth > $v_3 ? $v_3 : $v_0 - this.get_element().offsetWidth;
            this.set_width(this.get_element().offsetWidth + $v_4);
            var $v_5 = this.$3_3["bodyWidth"], $v_6 = $v_5 - this.get_element().offsetWidth;
            this.set_left(window.LOCID_UI_DIR.toLowerCase() === "rtl" ? $v_6 : 0)
        }
        if (this.get_element().offsetHeight !== $v_1) {
            var $v_7 = this.$3_3["incHeight"],
                $v_8 = $v_1 - this.get_element().offsetHeight > $v_7 ? $v_7 : $v_1 - this.get_element().offsetHeight;
            this.set_height(this.get_element().offsetHeight + $v_8)
        }
        var $v_2 = this.$3_3["interval"];
        window.setTimeout(this.$$d_$25_3, $v_2)
    },
    hideFloatingMode: function() {
        if (!IsNull(this.$3_3["disableFlyoutBlur"]) && this.$3_3["disableFlyoutBlur"]) return;
        this.loadArea(this.$3_3["selectedAreaId"]);
        this.$4_3.selectArea(this.$3_3["selectedAreaId"]);
        this.$2_3.selectSubArea(this.$3_3["selectedSubAreaId"]);
        this.set_width(this.$I_3);
        this.get_element().style.display = "none";
        this.$10_3();
        var $v_0 = this.$3_3["activeElement"];
        !IsNull($v_0) && $v_0.focus()
    },
    $10_3: function() {
        this.$3_3["_disableFlyoutBlur"] = false;
        this.set_width(this.$I_3);
        if (!IsNull(this.$D_3)) this.$D_3.style.display = "none";
        this.$6_3 = false
    }
};
Mscrm.AppNavCollapsedBar = function(root, navBar, initiallyVisible) {
    this.$$d_$1g_0 = Function.createDelegate(this, this.$1g_0);
    this.$1_0 = root;
    this.$0_0 = navBar;
    this.setVisibility(initiallyVisible);
    this.$11_0()
};
Mscrm.AppNavCollapsedBar.prototype = {
    $1_0: null,
    $0_0: null,
    $J_0: null,
    get_element: function() { return this.$1_0 },
    setVisibility: function(setVisible) {
        if (setVisible) this.$1_0.style.display = "block";
        else this.$1_0.style.display = "none"
    },
    $11_0: function() {
        this.$1_0.className = "ms-crm-collapsedAppNav-Container";
        this.$1_0.style.position = "relative";
        this.$1_0.style.height = "100%";
        this.$J_0 = this.$$d_$1g_0;
        var $v_0 = document.createElement("A");
        $v_0.tabIndex = 0;
        $v_0.href = "javascript:;";
        $v_0.setAttribute("onclick", "return false;");
        this.$1_0.appendChild($v_0);
        var $v_1 = document.createElement("table");
        $v_1.className = "ms-crm-collapsedAppNav-Table";
        $v_1.setAttribute("cellspacing", "0");
        $v_1.setAttribute("cellpadding", "0");
        $v_1.setAttribute("style", "table-layout:fixed");
        $v_1.style.width = "100%";
        $v_1.style.height = "100%";
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement("tr");
        $v_2.setAttribute("height", "28px");
        $v_1.appendChild($v_2);
        var $v_3 = document.createElement("td");
        $v_3.setAttribute("align", "center");
        $v_3.setAttribute("vAlign", "bottom");
        $v_2.appendChild($v_3);
        var $v_4 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navright.png"));
        $v_4.id = "navToggleExpand";
        $v_4.className += " ms-crm-RTL-Flip";
        $v_4.alt = this.$0_0.altGroupExpanded;
        $v_3.appendChild($v_4);
        var $v_5 = document.createElement("tr");
        $v_1.appendChild($v_5);
        var $v_6 = document.createElement("td");
        $v_6.setAttribute("height", "100%");
        $v_6.setAttribute("align", "center");
        $v_6.setAttribute("vAlign", "middle");
        $v_5.appendChild($v_6);
        var $v_7 = document.createElement("label");
        $v_7.id = "crmNavBar_CollapsedLabelMessage";
        $v_7.className = "ms-crm-stripNavBarLeftRight ms-crm-stripNavBarLabelLeftRight ms-crm-collapsedNavBarLabel";
        XUI.Html.SetText($v_7, this.$0_0.collapsedNavLabel);
        $v_7.title = this.$0_0.altGroupExpanded;
        $v_6.appendChild($v_7);
        $addHandler($v_0, "click", this.$J_0);
        this.$i_0($v_1)
    },
    $1g_0: function($p0) {
        $p0.stopPropagation();
        this.$0_0.toggleCollapsedMode()
    },
    $i_0: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            $addHandler($v_2, "click", this.$J_0)
        }
    }
};
Mscrm.AppNavTitle = function(root, navBar) {
    this.$$d_$2g_0 = Function.createDelegate(this, this.$2g_0);
    this.$$d_$1u_0 = Function.createDelegate(this, this.$1u_0);
    this.$$d_$2M_0 = Function.createDelegate(this, this.$2M_0);
    this.$$d_$1g_0 = Function.createDelegate(this, this.$1g_0);
    this.$$d_$2R_0 = Function.createDelegate(this, this.$2R_0);
    this.$$d_$2U_0 = Function.createDelegate(this, this.$2U_0);
    this.$$d_$2L_0 = Function.createDelegate(this, this.$2L_0);
    this.$1_0 = root;
    this.$0_0 = navBar;
    this.$11_0()
};
Mscrm.AppNavTitle.prototype = {
    $1_0: null,
    $0_0: null,
    $1A_0: null,
    $w_0: null,
    $1I_0: null,
    $J_0: null,
    $F_0: null,
    $q_0: null,
    $r_0: null,
    $H_0: null,
    recentlyViewedMenuOn: false,
    get_title: function() {
        return XUI.Html.GetText(XUI.Html.DomUtils.GetFirstChild(this.$1_0).getElementsByTagName("nobr")[0])
    },
    set_title: function(value) {
        var $v_0 = this.$1_0.getElementsByTagName("nobr")[0];
        XUI.Html.SetText($v_0, value);
        return value
    },
    setVisibility: function(setVisible) {
        if (setVisible) this.$1_0.style.display = "block";
        else this.$1_0.style.display = "none"
    },
    setFocusOnRecentIcon: function() { this.$1Q_0(this.$H_0, true) },
    $11_0: function() {
        this.$1_0.className = "ms-crm-NavBar-Title";
        this.$1A_0 = this.$$d_$2L_0;
        this.$w_0 = this.$$d_$2U_0;
        this.$1I_0 = this.$$d_$2R_0;
        this.$J_0 = this.$$d_$1g_0;
        this.$F_0 = this.$$d_$2M_0;
        var $v_0 = document.createElement("nobr");
        $v_0.className = "ms-crm-NavBar-Header-Title";
        $v_0.id = "crmNavBarTitle";
        var $v_1 = document.createElement("table");
        $v_1.setAttribute("cellspacing", "0");
        $v_1.setAttribute("cellpadding", "0");
        $v_1.style.tableLayout = "fixed";
        $v_1.style.width = "100%";
        this.$1_0.appendChild($v_1);
        var $v_2 = document.createElement("tbody");
        $v_1.appendChild($v_2);
        var $v_3 = document.createElement("tr");
        $v_2.appendChild($v_3);
        var $v_4 = document.createElement("td");
        $v_3.appendChild($v_4);
        var $v_5 = document.createElement("div");
        $v_5.className = "ms-crm-NavBar-Header-Title";
        $v_4.appendChild($v_5);
        $v_5.appendChild($v_0);
        var $v_6 = document.createElement("td");
        $v_6.noWrap = true;
        if (!window.UseTabletExperience) {
            $v_6.className = "ms-crm-NavBar-Title-HomeRecentIcon";
            $v_3.appendChild($v_6);
            var $v_7 = document.createElement("UL");
            $v_7.className = "ms-crm-NavBar-Title-Icon";
            $v_6.appendChild($v_7);
            var $v_8 = this.$1N_0("navTitleHome",
                this.$0_0.altHomeIcon,
                window.CDNURL + "/_imgs/recentlyviewed/home.png",
                false);
            this.$H_0 = this.$1N_0("navTitleRecent",
                this.$0_0.altRecentlyViewedIcon,
                window.CDNURL + "/_imgs/recentlyviewed/recent.png",
                true);
            $v_7.appendChild($v_8);
            $v_7.appendChild(this.$H_0);
            var $v_9 = this.$1_0.getElementsByTagName("ul")[0];
            this.$i_0($v_9)
        } else {
            $v_6.className = "ms-crm-NavBar-Title-ExpandCollapseIcon";
            $v_3.appendChild($v_6);
            var $v_A = document.createElement("UL");
            $v_6.appendChild($v_A);
            var $v_B = this.$1N_0("navToggleExpandCollapse",
                this.$0_0.altGroupCollapsed,
                window.CDNURL + "/_imgs/navleft.png",
                true);
            $addHandler($v_B, "click", this.$J_0);
            $v_A.appendChild($v_B)
        }
    },
    $1N_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = document.createElement("LI");
        $v_0.className = "ms-crm-NavBar-Title-Icon";
        $v_0.id = $p0;
        $v_0.title = $p1;
        var $v_1 = document.createElement("SPAN");
        $v_1.className = "ms-crm-NavBar-Title-Icon";
        $v_0.appendChild($v_1);
        var $v_2 = document.createElement("A");
        $v_2.className = "ms-crm-NavBar-Title-Icon";
        $v_2.tabIndex = 0;
        $v_2.href = "javascript:;";
        $v_2.setAttribute("onclick", "return false;");
        $v_1.appendChild($v_2);
        var $v_3 = Mscrm.ImageStrip.getImage(Mscrm.CrmUri.create($p2));
        if ($p3) $v_3.className += " ms-crm-RTL-Flip";
        $v_3.alt = $p1;
        $v_2.appendChild($v_3);
        return $v_0
    },
    $2L_0: function($p0) {
        var $v_0 = Mscrm.NavBarUtils.getDomEventElement($p0, "A");
        Mscrm.NavBarUtils.setStyle($v_0, "ms-crm-NavBar-Title-Icon ms-crm-NavBar-Title-Icon-Hovered")
    },
    $2U_0: function($p0) {
        if (!this.recentlyViewedMenuOn) {
            var $v_0 = Mscrm.NavBarUtils.getDomEventElement($p0, "A");
            Mscrm.NavBarUtils.setStyle($v_0, "ms-crm-NavBar-Title-Icon")
        }
    },
    $2R_0: function($p0) {
        var $v_0 = Mscrm.NavBarUtils.getDomEventElement($p0, "A");
        Mscrm.NavBarUtils.setStyle($v_0, "ms-crm-NavBar-Title-Icon ms-crm-NavBar-Title-Icon-Selected")
    },
    $2K_0: function() { this.$0_0.loadHome() },
    $2Q_0: function($p0) {
        var $v_0 = $find("crmRecentlyViewed");
        this.recentlyViewedMenuOn = true;
        if (IsNull(this.$r_0)) this.$r_0 = this.$$d_$1u_0;
        if (IsNull(this.$q_0)) this.$q_0 = this.$$d_$2g_0;
        $v_0.rvHideCallback = $p0 ? this.$q_0 : this.$r_0;
        var $v_1 = this.$H_0.getElementsByTagName("A")[0],
            $v_2 = Mscrm.Utilities.getXYPos($v_1, window.LOCID_UI_DIR === "RTL", document.documentElement);
        $v_2["y"] = $v_2["y"] + $v_1.offsetHeight;
        $v_0.showRecentlyViewed($v_2, $p0 ? $v_1 : document.activeElement)
    },
    $2g_0: function($p0) {
        this.$1u_0($p0);
        this.$1S_0(this.$H_0)
    },
    $1u_0: function($p0) {
        this.recentlyViewedMenuOn = false;
        this.$2Z_0(this.$H_0);
        !IsNull(document.activeElement) &&
            !IsNull(document.activeElement.parentNode) &&
            !IsNull(document.activeElement.parentNode.parentNode) &&
            document.activeElement.parentNode.parentNode === this.$H_0 &&
            this.$1S_0(this.$H_0)
    },
    $2T_0: function($p0) { this.$0_0.toggleCollapsedMode() },
    $2Z_0: function($p0) {
        var $v_0 = $p0.getElementsByTagName("A")[0];
        $v_0.className = "ms-crm-NavBar-Title-Icon"
    },
    $1S_0: function($p0) {
        var $v_0 = $p0.getElementsByTagName("A")[0];
        $v_0.className = "ms-crm-NavBar-Title-Icon ms-crm-NavBar-Title-Icon-Selected"
    },
    $1g_0: function($p0) {
        $p0.stopPropagation();
        var $v_0 = Mscrm.NavBarUtils.getDomEventElement($p0, "LI");
        this.$1Q_0($v_0, false)
    },
    $2M_0: function($p0) {
        switch ($p0.keyCode) {
        case 13:
        case 32:
            $p0.stopPropagation();
            var $v_0 = Mscrm.NavBarUtils.getDomEventElement($p0, "LI");
            this.$1Q_0($v_0, true);
            break
        }
    },
    $1Q_0: function($p0, $p1) {
        var $v_0 = $p0.attributes.getNamedItem("id");
        if (!IsNull($v_0) && !IsNull($v_0.value)) {
            if ($v_0.value === "navToggleExpandCollapse") {
                this.$2T_0($p0);
                return
            }
            this.$1S_0($p0);
            $v_0.value === "navTitleHome" && this.$2K_0();
            $v_0.value === "navTitleRecent" && this.$2Q_0($p1)
        }
    },
    $i_0: function($p0) {
        for (var $v_0 = $p0.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            $addHandler($v_2, "mouseover", this.$1A_0);
            $addHandler($v_2, "mouseout", this.$w_0);
            $addHandler($v_2, "focus", this.$1I_0);
            $addHandler($v_2, "blur", this.$w_0);
            $addHandler($v_2, "keydown", this.$F_0);
            $addHandler($v_2, "click", this.$J_0)
        }
    }
};
Mscrm.NavBarCustomVSEntity = function() {};
Mscrm.AppSubAreas = function(root, navBar, subAreaId) {
    this.$$d_$1y_0 = Function.createDelegate(this, this.$1y_0);
    this.$$d_$2x_0 = Function.createDelegate(this, this.$2x_0);
    this.$$d_$1T_0 = Function.createDelegate(this, this.$1T_0);
    this.$$d_$2G_0 = Function.createDelegate(this, this.$2G_0);
    this.$$d_$2s_0 = Function.createDelegate(this, this.$2s_0);
    this.$$d_$21_0 = Function.createDelegate(this, this.$21_0);
    this.$$d_$1j_0 = Function.createDelegate(this, this.$1j_0);
    this.$$d_$1n_0 = Function.createDelegate(this, this.$1n_0);
    this.$$d_$2q_0 = Function.createDelegate(this, this.$2q_0);
    this.$$d_$2m_0 = Function.createDelegate(this, this.$2m_0);
    this.$$d_$24_0 = Function.createDelegate(this, this.$24_0);
    this.$$d_$2u_0 = Function.createDelegate(this, this.$2u_0);
    this.$$d_$26_0 = Function.createDelegate(this, this.$26_0);
    this.$$d_$1t_0 = Function.createDelegate(this, this.$1t_0);
    this.$$d_$2d_0 = Function.createDelegate(this, this.$2d_0);
    this.$$d_$2n_0 = Function.createDelegate(this, this.$2n_0);
    this.$$d_$2w_0 = Function.createDelegate(this, this.$2w_0);
    this.$$d_$2v_0 = Function.createDelegate(this, this.$2v_0);
    this.$$d_$1Y_0 = Function.createDelegate(this, this.$1Y_0);
    this.$k_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navdown.png"));
    this.$Q_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/navup.png"));
    this.$1_0 = root;
    this.$0_0 = navBar;
    this.$11_0(subAreaId)
};
Mscrm.AppSubAreas.prototype = {
    $1_0: null,
    $0_0: null,
    $o_0: null,
    $c_0: null,
    $u_0: null,
    $b_0: null,
    $E_0: null,
    $d_0: null,
    $e_0: null,
    $x_0: null,
    $t_0: null,
    $K_0: null,
    $1W_0: null,
    $R_0: null,
    $1K_0: null,
    $y_0: null,
    $1D_0: null,
    $X_0: null,
    $L_0: null,
    $F_0: null,
    $N_0: null,
    $1M_0: null,
    $1L_0: null,
    $19_0: null,
    loadSubAreas: function(areaId) {
        if (areaId !== this.$0_0.get_areaId()) {
            for (var $v_0 = false, $v_1 = null, $v_2 = this.$1_0.getElementsByTagName("SPAN"), $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++)
                if ($v_2[$v_3].id === areaId) {
                    $v_2[$v_3].style.display = "block";
                    $v_0 = true;
                    $v_1 = $v_2[$v_3]
                } else $v_2[$v_3].style.display = "none";
            if (!$v_0) {
                $v_1 = this.$1q_0(areaId, true);
                this.$i_0($v_1, areaId)
            }
            this.$1x_0(areaId);
            this.adjustSubareaWidth()
        }
    },
    adjustSubareaWidth: function() { window.setTimeout(this.$$d_$1Y_0, 1) },
    $1Y_0: function() {
        var $v_0 = this.$O_0(this.$9_0(this.$0_0.get_areaId())), $v_1 = $v_0;
        while ($v_1.tagName.toUpperCase() !== "SPAN") $v_1 = $v_1.parentNode;
        var $v_2 = this.$1_0.offsetWidth;
        if ($v_1.scrollHeight > this.$1_0.offsetHeight) $v_2 -= 17;
        $v_2 -= 2;
        if ($v_2 < 0) $v_2 = 0;
        $v_1.style.width = $v_2.toString() + "px"
    },
    selectSubArea: function(subAreaId) {
        var $v_0 = this.$0_0.get_areaId();
        this.selectAreaSubArea(subAreaId, $v_0)
    },
    selectAreaSubArea: function(subAreaId, areaId) {
        var $v_0 = this.$9_0(areaId), $v_1 = this.$O_0($v_0);
        if (this.$0_0.$6_3 || this.$W_0(areaId, subAreaId) !== $v_0) {
            var $v_2 = $v_1.parentNode;
            Mscrm.NavBarUtils.setStyle($v_2, "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Rest");
            Mscrm.NavBarUtils.clearSavedStyle($v_2);
            window.UseTabletExperience && this.$2X_0($v_2);
            var $v_3 = this.$1O_0(areaId, subAreaId), $v_4 = $v_3.parentNode;
            Mscrm.NavBarUtils.setStyle($v_4, "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Selected");
            Mscrm.NavBarUtils.clearSavedStyle($v_4);
            window.UseTabletExperience && this.$1b_0($v_4);
            this.$14_0(areaId, subAreaId)
        }
    },
    handleViewUrlChanged: function(parameters) {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$0_0.selectedSubAreaId, $v_2 = this.$E_0[$v_1];
        if (IsNull($v_2)) $v_2 = Mscrm.CrmUri.create("");
        if ($v_2.get_isWebResource()) return;
        $v_2.get_query()["viewid"] = parameters["viewId"];
        $v_2.get_query()["viewtype"] = parameters["viewType"];
        if (!IsNull(parameters["childEntityName"])) $v_2.get_query()["type"] = parameters["childEntityName"];
        if (!IsNull(parameters["datefilter"])) $v_2.get_query()["datefilter"] = parameters["datefilter"];
        if (!IsNull(parameters["extraParameters"])) {
            var $v_3 = parameters["extraParameters"], $$dict_6 = $v_3;
            for (var $$key_7 in $$dict_6) {
                var $v_4 = { key: $$key_7, value: $$dict_6[$$key_7] };
                $v_2.get_query()[$v_4.key] = $v_4.value
            }
        }
        this.$E_0[this.$0_0.selectedSubAreaId] = $v_2
    },
    handleVisualizationOrDashboardsUrlChanged: function(parameters) {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$0_0.selectedSubAreaId, $v_2 = this.$E_0[$v_1];
        if (IsNull($v_2)) $v_2 = Mscrm.CrmUri.create("");
        if ($v_2.get_isWebResource()) return;
        var $$dict_5 = parameters;
        for (var $$key_6 in $$dict_5) {
            var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if (!IsNull($v_3.value)) $v_2.get_query()[$v_3.key] = $v_3.value
        }
        this.$E_0[this.$0_0.selectedSubAreaId] = $v_2
    },
    getStickyViewIdAndUpdateCurrentSubAreaPageId: function(parameters) {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$9_0($v_0), $v_2 = parameters["pid"];
        this.$14_0($v_1, $v_2);
        return this.$E_0[this.$9_0($v_1)]
    },
    handleGetSelectedAreaSubAreaIds: function() {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$9_0($v_0), $v_2 = this.$O_0($v_1).id, $v_3 = {};
        $v_3["areaId"] = $v_0;
        $v_3["subAreaId"] = $v_2;
        return $v_3
    },
    getAppNavState: function() {
        var $v_0 = this.$0_0.get_areaId(),
            $v_1 = this.$9_0($v_0),
            $v_2 = this.$O_0($v_1).title,
            $v_3 = this.$0_0._subAreaIconMap[$v_1],
            $v_4 = {};
        $v_4["title"] = $v_2;
        $v_4["iconpath"] = $v_3;
        return $v_4
    },
    getUri: function(areaId) {
        var $v_0 = this.$E_0[this.$9_0(areaId)];
        if ($v_0.toString().length > 0 && $v_0.get_isLocalServer()) {
            $v_0.get_query()["pagemode"] = "iframe";
            $v_0.set_useOrganizationName(window.IS_PATHBASEDURLS)
        }
        return $v_0
    },
    getTitle: function(areaId) {
        var $v_0 = this.$O_0(this.$9_0(areaId));
        return XUI.Html.GetText($v_0)
    },
    get_uri: function() { return this.getUri(this.$0_0.get_areaId()) },
    get_title: function() { return this.getTitle(this.$0_0.get_areaId()) },
    get_subAreaId: function() {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$O_0(this.$9_0($v_0));
        return $v_1.id
    },
    clearSelection: function() {
        var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$O_0(this.$9_0($v_0));
        Mscrm.NavBarUtils.setStyle($v_1, "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Rest");
        Mscrm.NavBarUtils.clearSavedStyle($v_1)
    },
    setFocusOnFirstItem: function() {
        var $v_0 = this.$0_0.get_areaId();
        !IsNull(this.$R_0[$v_0]) && this.$R_0[$v_0].focus()
    },
    setVisibility: function(setVisible) {
        if (setVisible) this.$1_0.style.display = "block";
        else this.$1_0.style.display = "none"
    },
    $1q_0: function($p0, $p1) {
        var $v_0 = this.$2D_0($p0), $v_1 = document.createElement("SPAN");
        $v_1.id = $p0;
        $v_1.style.width = "100%";
        $v_1.style.display = "block";
        $v_1.innerHTML = $v_0;
        $p1 && this.$2p_0($p0, $v_1);
        this.$1_0.appendChild($v_1);
        return $v_1
    },
    $2p_0: function($p0, $p1) {
        var $v_0 = this.$1O_0($p0, this.$9_0($p0));
        if (!$v_0) {
            if (this.$15_0($p0))
                $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils
                        .GetNextSibling(XUI.Html.DomUtils
                            .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p1))))));
            else
                $v_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                    .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($p1)));
            this.$R_0[$p0] = $v_0;
            this.$14_0($p0, $v_0.id)
        }
        !this.$0_0.$6_3 &&
            Mscrm.NavBarUtils.setStyle($v_0.parentNode, "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Selected")
    },
    $W_0: function($p0, $p1) { return $p0 + "-" + $p1 },
    $2D_0: function($p0) {
        var $v_0 = this.$0_0.$G_3,
            $v_1 = true,
            $v_2 = XUI.Xml.SelectSingleNode($v_0, 'SiteMap/Area[@Id="' + $p0 + '"]', null);
        $v_1 = $v_2.attributes.getNamedItem("ShowGroups").nodeValue === "True";
        this.$b_0[$p0] = $v_1;
        var $v_3 = this.$1K_0.createProcessor();
        $v_3.input = $v_0;
        $v_3.addParameter("selectedArea", $p0);
        $v_3.addParameter("showGroups", $v_1);
        $v_3.addParameter("navUpSource", this.$Q_0.source);
        $v_3.addParameter("navUpClass", this.$Q_0.cssClass);
        $v_3.transform();
        this.$b_0[$p0] = $v_1;
        return $v_3.output
    },
    $1O_0: function($p0, $p1) { return this.$c_0[this.$W_0($p0, $p1)] },
    $O_0: function($p0) { return this.$c_0[$p0] },
    $9_0: function($p0) { return this.$u_0[$p0] },
    $14_0: function($p0, $p1) {
        this.$u_0[$p0] = this.$W_0($p0, $p1);
        this.$1x_0($p0)
    },
    $1x_0: function($p0) { this.$0_0.selectedSubAreaId = this.$9_0($p0) },
    $15_0: function($p0) { return this.$b_0[$p0] },
    $2s_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A");
        this.$20_0($v_0)
    },
    $20_0: function($p0) {
        var $v_0 = $p0.getElementsByTagName("IMG")[0];
        if (XUI.Html.DomUtils.GetNextSibling($p0).style.display === "none") {
            XUI.Html.DomUtils.GetNextSibling($p0).style.display = "block";
            $v_0.src = this.$Q_0.source;
            Sys.UI.DomElement.removeCssClass($v_0, this.$k_0.cssClass);
            Sys.UI.DomElement.addCssClass($v_0, this.$Q_0.cssClass);
            $v_0.title = XUI.Html.GetText($p0) + ":" + this.$0_0.altGroupCollapsed;
            $v_0.alt = XUI.Html.GetText($p0) + ":" + this.$0_0.altGroupCollapsed
        } else {
            XUI.Html.DomUtils.GetNextSibling($p0).style.display = "none";
            $v_0.src = this.$k_0.source;
            Sys.UI.DomElement.removeCssClass($v_0, this.$Q_0.cssClass);
            Sys.UI.DomElement.addCssClass($v_0, this.$k_0.cssClass);
            $v_0.title = XUI.Html.GetText($p0) + ":" + this.$0_0.altGroupExpanded;
            $v_0.alt = XUI.Html.GetText($p0) + ":" + this.$0_0.altGroupExpanded
        }
        this.$1Y_0()
    },
    $1n_0: function($p0) {
        var $v_0 = (new Date).getTime();
        window.self.NavBarClickTime = $v_0;
        var $v_1 = Mscrm.Utilities.getDomEventElement($p0, "A");
        this.$1o_0($v_1.id, null)
    },
    $1o_0: function($p0, $p1) { this.$0_0.loadSubArea($p0, $p1) },
    $1j_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "LI");
        this.$1R_0($v_0)
    },
    $1R_0: function($p0) {
        var $v_0 = $p0;
        !IsNull(this.$o_0) && this.$1V_0(this.$o_0);
        this.$o_0 = $p0;
        var $v_1 = this.$0_0.get_areaId();
        if ((this.$0_0.$6_3 || this.$W_0($v_1, $p0.id) !== this.$9_0($v_1)) && !window.UseTabletExperience) {
            Mscrm.NavBarUtils.saveCurrentStyle($v_0);
            Mscrm.NavBarUtils.setStyle($v_0,
                $v_0.className === "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Selected"
                ? "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Selected-Hovered"
                : "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Hovered");
            var $v_2 = Boolean.parse($v_0.attributes.getNamedItem("vs").value);
            if ($v_2) {
                XUI.Html.DomUtils.GetFirstChild($v_0).className = "ms-crm-NavBar-Subarea-LinkShrinked";
                var $v_3 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0));
                $v_3.className = "ms-crm-subarea-vs ms-crm-subarea-vs-hover";
                var $v_4 = this.$f_0($v_3, false);
                $v_4.style.display = "inline"
            }
        }
    },
    $f_0: function($p0, $p1) {
        var $v_0 = null;
        if (!$p0.childNodes.length) {
            $v_0 = document.createElement("IMG");
            $v_0.alt = this.$0_0.viewSelectorAltText;
            $v_0.className = Mscrm.Utilities.get_ieBrowserVersion() === 10
                ? "ms-crm-subarea-vsIE10"
                : window.UseTabletExperience ? "ms-crm-subarea-tabletNewRecord" : "ms-crm-subarea-vs";
            $v_0.title = this.$0_0.viewSelectorTooltip;
            $p0.appendChild($v_0)
        } else $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        $v_0.src = window.UseTabletExperience
            ? "/_imgs/theme/tablet/navitem_new.png"
            : "/_imgs/viewpicker_arrow_default.png";
        return $v_0
    },
    $21_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "LI");
        this.$1V_0($v_0)
    },
    $1V_0: function($p0) {
        if (this.$a_0 || this.$Z_0) {
            if (this.$Z_0) this.$Z_0 = false;
            return
        }
        if (this.$0_0.$6_3 || $p0.id !== this.$9_0(this.$0_0.get_areaId())) {
            var $v_0 = $p0;
            Mscrm.NavBarUtils.saveCurrentStyle($v_0);
            Mscrm.NavBarUtils.setStyle($v_0, $v_0.attributes.getNamedItem("previousClass").value);
            var $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0));
            XUI.Html.DomUtils.GetFirstChild($v_0).className = "ms-crm-NavBar-Subarea-Link";
            $v_1.className = "ms-crm-subarea-vs";
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1);
            if ($v_2 && !window.UseTabletExperience) $v_2.style.display = "none"
        }
    },
    $1b_0: function($p0) {
        var $v_0 = Boolean.parse($p0.attributes.getNamedItem("vs").value);
        if ($v_0) {
            var $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($p0));
            if (window.UseTabletExperience && $p0.id === "li_nav_dashboards") {
                $v_1.style.display = "none";
                return
            }
            var $v_2 = this.$f_0($v_1, false);
            $v_2.style.display = "inline"
        }
    },
    $2X_0: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($p0)),
            $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        if ($v_1) $v_1.style.display = "none"
    },
    $1y_0: function($p0) {
        switch ($p0.keyCode) {
        case 22:
        case 13:
        case 38:
        case 40:
            $p0.preventDefault();
            return
        }
    },
    $2G_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode($p0);
        switch ($v_0) {
        case 32:
        case 13:
            var $v_1 = Mscrm.Utilities.getDomEventElement($p0, "A");
            this.$20_0($v_1);
            return
        }
    },
    $2x_0: function($p0) {
        $p0.stopPropagation();
        switch ($p0.keyCode) {
        case 32:
            $p0.target.scrollIntoView();
            this.$1U_0(Mscrm.Utilities.getDomEventElement($p0, "LI"));
            break;
        case 13:
            this.$1U_0(Mscrm.Utilities.getDomEventElement($p0, "LI"));
            break
        }
    },
    $1T_0: function($p0) {
        switch ($p0.keyCode) {
        case 32:
        case 13:
            this.$1n_0($p0);
            return;
        case 38:
            this.$1l_0($p0);
            return;
        case 40:
            this.$1k_0($p0);
            return
        }
    },
    $1l_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
            $v_1 = $v_0.parentNode,
            $v_2 = XUI.Html.DomUtils.GetPrevSibling($v_1),
            $v_3;
        if (IsNull($v_2) || $v_2.tagName !== "LI")
            if (this.$15_0(this.$0_0.get_areaId())) {
                var $v_4 = $v_1.parentNode.parentNode, $v_5 = XUI.Html.DomUtils.GetPrevSibling($v_4);
                if (IsNull($v_5) || $v_5.tagName !== "LI")
                    $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetLastChild(XUI.Html.DomUtils
                            .GetNextSibling(XUI.Html.DomUtils
                                .GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_4.parentNode)))));
                else
                    $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetLastChild(XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_5))))
            } else $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_1.parentNode));
        else $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        $v_3.focus()
    },
    $2q_0: function($p0) {
        $p0.stopPropagation();
        $p0.preventDefault();
        this.$1U_0(Mscrm.Utilities.getDomEventElement($p0, "LI"))
    },
    $1f_0: function($p0) {
        var $v_0 = this.$e_0[$p0];
        if (IsNull($v_0)) {
            $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
            $v_0.set_isInline(true);
            $v_0.set_width(200);
            $v_0.set_propagateStyle(false);
            if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab");
            else $v_0.set_stylePrefix("CM");
            $v_0.set_reference($p0);
            $v_0.set_loadingClassName("ms-crm-VS-loadingmenu");
            this.$e_0[$p0] = $v_0;
            this.$x_0[$p0] = this.$2E_0()
        }
        return $v_0
    },
    $1e_0: function($p0) {
        var $v_0 = this.$t_0[$p0];
        if (IsNull($v_0)) {
            $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
            $v_0.set_width(200);
            $v_0.set_isInline(true);
            $v_0.set_propagateStyle(false);
            if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab");
            else $v_0.set_stylePrefix("CM");
            $v_0.set_reference($p0);
            this.$t_0[$p0] = $v_0
        }
        return $v_0
    },
    $2v_0: function($p0) {
        if ($p0.get_isVisible()) return;
        var $v_0 = $p0.get_reference();
        this.$a_0 = false;
        this.$1V_0($v_0.parentNode);
        var $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0.parentNode));
        $v_1.className = "ms-crm-subarea-vs";
        this.$f_0($v_1, false)
    },
    $a_0: false,
    $Z_0: false,
    $2w_0: function($p0) {
        var $v_0 = $p0.get_reference();
        this.$a_0 = true;
        this.$1R_0($v_0.parentNode);
        var $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0.parentNode));
        $v_1.className = "ms-crm-subarea-vs ms-crm-subarea-vs-sel";
        this.$f_0($v_1, true)
    },
    $1J_0: null,
    $1U_0: function($p0) {
        this.$Z_0 = true;
        var $v_0 = Mscrm.Utilities.getXYPos($p0, window.LOCID_UI_DIR === "RTL", document.documentElement),
            $v_1 = $v_0["y"],
            $v_2 = $v_0["x"];
        if ($p0.offsetParent === this.$0_0.get_$2c_3()) $v_1 = $v_1 - this.$1_0.scrollTop;
        if (window.LOCID_UI_DIR === "LTR") $v_2 += $p0.offsetWidth;
        var $v_3 = null, $v_4 = null, $v_5 = XUI.Html.DomUtils.GetFirstChild($p0);
        Mscrm.NavBarUtils.saveCurrentStyle($v_5.parentNode);
        $removeHandler($v_5.parentNode, "mouseout", this.$L_0);
        $removeHandler($v_5, "blur", this.$L_0);
        $removeHandler(XUI.Html.DomUtils.GetNextSibling($v_5), "blur", this.$L_0);
        var $v_6 = $v_5.attributes.getNamedItem("entityname").value, $v_7 = this.$d_0[$v_6];
        if (IsNull($v_7)) {
            $v_7 = Mscrm.Menu.createMenuForParentElement(document.body);
            if (window.UseTabletExperience) $v_7.set_stylePrefix("CM-Tab");
            else $v_7.set_stylePrefix("CM");
            $v_7.set_focusElementOnShow(null);
            $v_7.set_reference($v_5);
            $v_7.set_width(200);
            var $v_C = this.$2A_0($v_5);
            if (!IsNull($v_C)) {
                $v_7.addItem($v_C);
                var $v_E = Mscrm.MenuItemSeparator.createSeparator(false);
                $v_7.addItem($v_E)
            }
            if (!window.UseTabletExperience) {
                var $v_F = this.$1f_0($v_6);
                $v_7.addItem($v_F);
                this.$1J_0 = Mscrm.MenuItemSeparator.createSeparator(false);
                $v_7.addItem(this.$1J_0)
            }
            var $v_D = this.$1e_0($v_6);
            $v_7.addItem($v_D);
            this.$d_0[$v_6] = $v_7
        }
        $v_7.set_left($v_2);
        $v_7.set_top($v_1);
        $v_7.set_hideCallback(this.$$d_$2v_0);
        var $v_8 = parseInt($v_5.attributes.getNamedItem("etc").value, 10), $v_9 = null;
        $v_3 = {};
        $v_3["maxRecords"] = 6;
        if ($v_8 === 4200) {
            for (var $v_G = new Array(this.$0_0.$C_3
                         .length),
                $v_H = 0;
                $v_H < this.$0_0.$C_3.length;
                $v_H++) $v_G[$v_H] = this.$0_0.$C_3[$v_H].TypeCode;
            $v_3["etcList"] = $v_G
        }
        if ($v_6 === "Dashboard" && $v_8 === 1030) {
            var $v_I = [1030, 1031];
            $v_3["etcList"] = $v_I
        } else $v_3["etc"] = $v_8;
        $v_4 = this.$0_0.raiseEvent(49, $v_3);
        if (!IsNull($v_4) && isArray($v_4) && $v_4.length > 0) $v_9 = $v_4[0];
        var $v_A = this.$1e_0($v_6);
        $v_A.clear();
        this.$2f_0($v_A, $v_9, $v_5);
        var $v_B = this.$2b_0($v_6);
        if (window.UseTabletExperience || !$v_B) {
            $v_7.set_left($v_2);
            $v_7.set_top($v_1);
            $v_7.show();
            $v_7.refresh(this.$$d_$2w_0)
        } else $v_7.show(this.$$d_$2n_0)
    },
    $2A_0: function($p0) {
        var $v_0 = null, $v_1 = parseInt($p0.attributes.getNamedItem("etc").value, 10);
        if ($p0.attributes.getNamedItem("cancreate").value !== "True") return null;
        switch ($v_1) {
        case 4406:
            return null;
        case 2029:
            return null;
        case 4412:
            return null
        }
        if ($v_1 === 4200) {
            var $v_2 = Mscrm.Menu.createMenuForParentElement(document.body);
            $v_2.set_title(this.$0_0.newActivityTitle);
            $v_2.set_tooltip(this.$0_0.newActivityTooltip);
            $v_2.set_iconPath(Mscrm.Utilities.getIconPath(4200));
            if (window.UseTabletExperience) $v_2.set_stylePrefix("CM-Tab");
            else $v_2.set_stylePrefix("CM");
            $v_2.set_width(200);
            $v_2.set_focusElementOnShow(null);
            for (var $v_3 = 0; $v_3 < this.$0_0.$C_3.length; $v_3++) {
                var $v_4;
                $v_4 = Mscrm.MenuItem.createMenuItem(this.$0_0.$C_3[$v_3].TypeName);
                $v_2.addItem($v_4);
                $v_4.set_reference(this.$0_0.$C_3[$v_3].TypeCode);
                $v_4.set_actionCallback(this.$$d_$2d_0);
                $v_4.set_iconPath(Mscrm.Utilities.getIconPath(this.$0_0.$C_3[$v_3].TypeCode))
            }
            $v_0 = $v_2
        } else {
            $v_0 = Mscrm.MenuItem.createMenuItem(this.$0_0.newRecordTitle);
            $v_0.set_tooltip(this.$0_0.newRecordTooltip);
            $v_0.set_actionCallback(this.$$d_$2d_0);
            $v_0.set_reference($v_1);
            window.UseTabletExperience && $v_0.set_stylePrefix("CM-Tab")
        }
        $v_0.set_iconPath(Mscrm.Utilities.getIconPath($v_1));
        return $v_0
    },
    $2d_0: function($p0) { openObj($p0.get_reference(), null) },
    $1t_0: function($p0) {
        var $v_0 = $p0.get_reference();
        openObj($v_0.TypeCode, $v_0.Id, $v_0.Action)
    },
    $2f_0: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.MenuItem.createMenuItem(this.$0_0.recentlyVisitedTitle);
        if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab-header");
        else $v_0.set_stylePrefix("CM-header");
        $p0.addItem($v_0);
        if (!IsNull($p1))
            for (var $v_1 = parseInt($p2.attributes.getNamedItem("etc").value, 10),
                $v_2 = $p1["recordList"],
                $v_3 = this.$2B_0(),
                $v_4 = 0;
                $v_4 < $v_2.length;
                $v_4++) {
                var $v_5 = $v_2[$v_4], $v_6 = Mscrm.MenuItem.createMenuItem($v_5.Name);
                if (window.UseTabletExperience) $v_6.set_stylePrefix("in-CM-Tab");
                else $v_6.set_stylePrefix("in-CM");
                var $v_7 = $p2.attributes.getNamedItem("isActivity").value === "True";
                $v_7 && $v_6.set_iconPath(Mscrm.Utilities.getIconPath($v_5.TypeCode));
                $v_6.set_reference($v_5);
                $v_6.set_actionCallback(this.$$d_$1t_0);
                $v_6.set_contextMenu($v_3);
                $v_1 === 4200 && $v_6.set_iconPath(Mscrm.Utilities.getIconPath($v_5.TypeCode));
                $p0.addItem($v_6)
            }
        if ($p0.get_menuItems().length === 1) {
            var $v_8 = Mscrm.MenuItem.createMenuItem(this.$0_0.emptyTitle);
            if (window.UseTabletExperience) $v_8.set_stylePrefix("in-CM-Tab");
            else $v_8.set_stylePrefix("in-CM");
            $v_8.set_disabled(true);
            $p0.addItem($v_8)
        }
    },
    $2B_0: function() {
        var $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
        if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab");
        else $v_0.set_stylePrefix("CM");
        $v_0.set_width(200);
        var $v_1 = Mscrm.MenuItem.createMenuItem(this.$0_0.openActionTitle);
        $v_1.set_reference(0);
        $v_1.set_actionCallback(this.$$d_$26_0);
        $v_0.addItem($v_1);
        if (Mscrm.NavigationMode.DefaultNavigationMode === 1) {
            var $v_4 = Mscrm.MenuItem.createMenuItem(this.$0_0.openInNewWindowActionTitle);
            $v_4.set_reference(1);
            $v_4.set_actionCallback(this.$$d_$26_0);
            $v_0.addItem($v_4)
        }
        var $v_2 = Mscrm.MenuItem.createMenuItem(this.$0_0.copyShortcutActionTitle);
        $v_2.set_reference(2);
        $v_2.set_actionCallback(this.$$d_$26_0);
        $v_2.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
        $v_0.addItem($v_2);
        var $v_3 = Mscrm.MenuItem.createMenuItem(this.$0_0.sendShortcutActionTitle);
        $v_3.set_reference(3);
        $v_3.set_actionCallback(this.$$d_$26_0);
        $v_0.addItem($v_3);
        return $v_0
    },
    $26_0: function($p0) {
        var $v_0 = $p0.get_parentMenu(), $v_1 = $p0.get_reference();
        switch ($v_1) {
        case 0:
            this.$1Z_0($v_0.get_contextItem(), 1);
            break;
        case 1:
            this.$1Z_0($v_0.get_contextItem(), 0);
            break;
        case 2:
            this.$1a_0($v_0.get_contextItem(), false);
            break;
        case 3:
            this.$1a_0($v_0.get_contextItem(), true);
            break
        }
    },
    $1Z_0: function($p0, $p1) { this.$1t_0($p0) },
    $1a_0: function($p0, $p1) {
        var $v_0 = $p0.get_reference();
        Mscrm.Utilities.sendSelectedRecordsUrl($p1, [$v_0], $v_0.TypeCode, false)
    },
    $2E_0: function() {
        var $v_0 = Mscrm.Menu.createMenuForParentElement(document.body);
        if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab");
        else $v_0.set_stylePrefix("CM");
        var $v_1 = Mscrm.MenuItem.createMenuItem(this.$0_0.openActionTitle);
        $v_1.set_reference(0);
        $v_1.set_actionCallback(this.$$d_$2u_0);
        $v_0.addItem($v_1);
        var $v_2 = Mscrm.MenuItem.createMenuItem(this.$0_0.openInNewWindowActionTitle);
        $v_2.set_reference(1);
        $v_2.set_actionCallback(this.$$d_$2u_0);
        $v_2.set_stopPropagationOnClick(true);
        $v_0.addItem($v_2);
        var $v_3 = Mscrm.MenuItem.createMenuItem(this.$0_0.copyShortcutActionTitle);
        $v_3.set_reference(2);
        $v_3.set_actionCallback(this.$$d_$2u_0);
        var $v_4 = $v_3;
        $v_4.set_stopPropagationOnClick(true);
        $v_4.set_disabled(!Mscrm.Utilities.get_ieBrowserVersion());
        $v_0.addItem($v_3);
        var $v_5 = Mscrm.MenuItem.createMenuItem(this.$0_0.sendShortcutActionTitle);
        $v_5.set_reference(3);
        $v_5.set_actionCallback(this.$$d_$2u_0);
        $v_5.set_stopPropagationOnClick(true);
        $v_0.addItem($v_5);
        $v_0.set_width(200);
        return $v_0
    },
    $2u_0: function($p0) {
        var $v_0 = $p0.get_parentMenu(), $v_1 = $p0.get_reference();
        switch ($v_1) {
        case 0:
            this.$24_0($v_0.get_contextItem());
            break;
        case 1:
            this.$2t_0($v_0.get_contextItem());
            break;
        case 2:
            this.$23_0($v_0.get_contextItem(), false);
            break;
        case 3:
            this.$23_0($v_0.get_contextItem(), true);
            break
        }
    },
    $24_0: function($p0) {
        var $v_0 = $p0.get_parentMenu().get_parentMenu().get_reference(), $v_1 = this.$1P_0($p0);
        if (IsNull($v_1)) return;
        this.$1o_0($v_0.id, $v_1)
    },
    $23_0: function($p0, $p1) {
        var $v_0 = $p0.get_reference(), $v_1 = window.location.href;
        if (!Mscrm.SessionInfo.isOnline()) $v_1 = window.WEB_APP_URL;
        else $v_1 = $v_1.substring(0, $v_1.indexOf(window.location.pathname));
        var $v_2 = Mscrm.CrmUri.create(Mscrm.Help.concatenateUrl($v_1, this.$1P_0($p0).toString()));
        switch ($v_0["entityName"]) {
        case "Dashboard":
            var $v_3 = [], $v_4 = [];
            Array.add($v_3, "dashboardId");
            Array.add($v_4, $v_0["id"]);
            Mscrm.Utilities.sendCustomViewUrl($p1, $v_2, $v_0["title"], $v_3, $v_4);
            break;
        default:
            Mscrm.Utilities.sendViewUrl($p1, $v_2, $v_0["title"], $v_0["id"]);
            break
        }
    },
    $2t_0: function($p0) {
        var $v_0 = Mscrm.CrmUri.create(this.$1P_0($p0).toString());
        if (IsNull($v_0)) return;
        $v_0 = Mscrm.Utilities.getPageUrl($v_0, "entitylist");
        openStdWin($v_0, "_blank", 800, 600, null)
    },
    $1P_0: function($p0) {
        var $v_0 = $p0.get_parentMenu(), $v_1 = $p0.get_reference(), $v_2 = $v_1["type"], $v_3 = $v_1["id"];
        if (isNullOrEmptyString($v_2) || isNullOrEmptyString($v_3)) return null;
        var $v_4 = $v_0.get_parentMenu().get_reference(),
            $v_5 = this.$0_0.get_areaId() + "-" + $v_4.id,
            $v_6 = this.$E_0[$v_5],
            $v_7 = $v_1["entityName"];
        switch ($v_7) {
        case "Dashboard":
            $v_6.get_query()["dashboardId"] = $v_3;
            break;
        default:
            var $v_8 = $v_6.get_query()["etc"];
            if (!isNullOrEmptyString($v_8) && $v_8 === "4200") $v_6.get_query()["type"] = $v_7;
            else $v_6.get_query()["etn"] = $v_7;
            $v_6.get_query()["viewid"] = $v_3;
            $v_6.get_query()["viewtype"] = $v_2;
            break
        }
        return $v_6
    },
    $1s_0: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText($p2.attributes.getNamedItem("LABEL")));
        if (window.UseTabletExperience) $v_0.set_stylePrefix("CM-Tab-header");
        else $v_0.set_stylePrefix("CM-header");
        $p0.addItem($v_0);
        var $v_1 = "";
        if ($p2.parentNode.attributes.length > 0) {
            var $v_4 = $p2.parentNode.attributes.getNamedItem("ReturnedTypeCode");
            if (!IsNull($v_4)) $v_1 = XUI.Xml.GetText($v_4)
        }
        var $v_2 = XUI.Xml.SelectNodes($p2, "option", null), $v_3 = 0;
        while ($v_3 < $v_2.length) {
            var $v_5 = XUI.Xml.GetText($v_2[$v_3]), $v_6 = Mscrm.MenuItem.createMenuItem($v_5);
            if (window.UseTabletExperience) $v_6.set_stylePrefix("in-CM-Tab");
            else $v_6.set_stylePrefix("in-CM");
            var $v_7 = {};
            $v_7["id"] = XUI.Xml.GetText($v_2[$v_3].attributes.getNamedItem("value"));
            $v_7["type"] = XUI.Xml.GetText($v_2[$v_3].attributes.getNamedItem("Type"));
            $v_7["entityName"] = $p1;
            $v_7["TypeCode"] = $v_1;
            $v_7["title"] = $v_5;
            $v_6.set_reference($v_7);
            $v_6.set_actionCallback(this.$$d_$24_0);
            $v_6.set_contextMenu(this.$x_0[$p1]);
            $p0.addItem($v_6);
            $v_3++
        }
    },
    $1r_0: function($p0, $p1) {
        if (IsNull($p0)) return;
        var $v_0 = $p0.get_reference(),
            $v_1 = XUI.Xml.LoadXml($p1),
            $v_2 = this.$1d_0($v_0, true),
            $v_3 = XUI.Xml.SelectSingleNode($v_1, "select/OPTGROUP[@id='" + $v_2 + "']", null);
        !IsNull($v_3) && $v_3.childNodes.length > 0 && this.$1s_0($p0, $v_0, $v_3);
        $v_2 = this.$1d_0($v_0, false);
        var $v_4 = XUI.Xml.SelectSingleNode($v_1, "select/OPTGROUP[@id='" + $v_2 + "']", null);
        !IsNull($v_4) && $v_4.childNodes.length > 0 && this.$1s_0($p0, $v_0, $v_4)
    },
    $1d_0: function($p0, $p1) {
        switch ($p0) {
        case "Dashboard":
            if ($p1) return "SystemDashboard";
            else return "UserDashboard";
        default:
            if ($p1) return "AppSystemViews";
            return "AppUserViews"
        }
    },
    $2n_0: function($p0) {
        var $v_0 = $p0.get_reference();
        this.$a_0 = true;
        this.$1R_0($v_0.parentNode);
        var $v_1 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_0.parentNode));
        $v_1.className = "ms-crm-subarea-vs ms-crm-subarea-vs-sel";
        this.$f_0($v_1, true);
        var $v_2 = $v_0.attributes.getNamedItem("entityname").value,
            $v_3 = $v_0.attributes.getNamedItem("id").value,
            $v_4 = false,
            $v_5 = $v_0.attributes.getNamedItem("hascustomvs");
        if (!IsNull($v_5) && !isNullOrEmptyString($v_5.value)) $v_4 = Mscrm.Utilities.parseBoolean($v_5.value);
        var $v_6 = "", $v_7 = $v_0.attributes.getNamedItem("customvshandler");
        if (!IsNull($v_7)) $v_6 = $v_7.value;
        var $v_8 = Mscrm.ViewSelectorMenuFactory.getViewSelectorMenuDataProvider($v_4, $v_6);
        if (!IsNull($v_8)) {
            var $v_9 = {};
            $v_9["entityName"] = $v_2;
            $v_8.getViewListRemoteCommand($v_9).Execute(this.$$d_$2m_0)
        }
    },
    $2m_0: function($p0, $p1) {
        if ($p0.Success) {
            var $v_0 = $p1.Reference, $v_1 = $p0.ReturnValue, $v_2 = {};
            $v_2["timestamp"] = new Date;
            if ($v_0 === "Dashboard" && !IsNull(this.$K_0[$v_0])) $v_2["timestamp"] = this.$K_0[$v_0]["timestamp"];
            $v_2["queryList"] = $v_1;
            this.$K_0[$v_0] = $v_2;
            var $v_3 = this.$e_0[$v_0];
            $v_3.clear();
            this.$1r_0($v_3, $v_1);
            $v_3.set_isLoading(false);
            var $v_4 = this.$d_0[$v_0];
            $v_4.refresh()
        }
    },
    $1k_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
            $v_1 = $v_0.parentNode,
            $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1),
            $v_3;
        if (IsNull($v_2) || $v_2.tagName !== "LI")
            if (this.$15_0(this.$0_0.get_areaId())) {
                var $v_4 = $v_0.parentNode.parentNode.parentNode, $v_5 = XUI.Html.DomUtils.GetNextSibling($v_4);
                if (IsNull($v_5) || $v_5.tagName !== "LI")
                    $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetFirstChild(XUI.Html.DomUtils
                            .GetNextSibling(XUI.Html.DomUtils
                                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_4.parentNode)))));
                else
                    $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                        .GetFirstChild(XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetFirstChild($v_5))))
            } else $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1.parentNode));
        else $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        $v_3.focus()
    },
    $11_0: function($p0) {
        this.$1_0.className = "ms-crm-NavBar-Subareas";
        this.$1K_0 = Mscrm.XmlUtil.createXslTemplateByXml(this.$0_0.subAreasXslXml);
        this.$c_0 = {};
        this.$u_0 = {};
        this.$b_0 = {};
        this.$E_0 = {};
        this.$d_0 = {};
        this.$K_0 = {};
        this.$e_0 = {};
        this.$x_0 = {};
        this.$1W_0 = {};
        this.$t_0 = {};
        this.$R_0 = {};
        this.$1q_0(this.$0_0.get_areaId(), false);
        this.$y_0 = this.$$d_$2q_0;
        this.$1D_0 = this.$$d_$1n_0;
        this.$X_0 = this.$$d_$1j_0;
        this.$L_0 = this.$$d_$21_0;
        this.$1L_0 = this.$$d_$2s_0;
        this.$19_0 = this.$$d_$2G_0;
        this.$F_0 = this.$$d_$1T_0;
        this.$1M_0 = this.$$d_$2x_0;
        this.$N_0 = this.$$d_$1y_0;
        for (var $v_0 = this.$0_0.get_areaId(), $v_1 = this.$1_0.getElementsByTagName("SPAN"), $v_5 = 0;
            $v_5 < $v_1.length;
            $v_5++) this.$i_0($v_1[$v_5], $v_0);
        var $v_2 = this.$29_0($v_0, $v_1);
        if (IsNull($p0) && !$p0.length) $p0 = $v_2.id;
        this.$14_0($v_0, $p0);
        this.$R_0[$v_0] = $v_2;
        var $v_3 = this.$1O_0($v_0, $p0), $v_4 = $v_3.parentNode;
        Mscrm.NavBarUtils.setStyle($v_4, "ms-crm-NavBar-Subarea ms-crm-NavBar-Subarea-Selected");
        window.UseTabletExperience && this.$1b_0($v_4);
        XUI.Html.DispatchDomEvent($v_4, XUI.Html.CreateDomEvent("mouseover"))
    },
    $29_0: function($p0, $p1) {
        for (var $v_0 = null, $v_1 = 0; $v_1 < $p1.length; $v_1++)
            if ($p1[$v_1].id === $p0) {
                $v_0 = $p1[$v_1];
                break
            }
        if (!$v_0) $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$1_0);
        if (this.$15_0($p0))
            return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils
                    .GetNextSibling(XUI.Html.DomUtils
                        .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_0))))));
        else
            return XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_0)))
    },
    $i_0: function($p0, $p1) {
        for (var $v_0 = $p0.getElementsByTagName("LI"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_0[$v_1]), $v_3 = $v_2.attributes.getNamedItem("atype");
            if (!Mscrm.NavBarUtils.isDOMAttributeNullEmptyUndef($v_3) && $v_3.value === "group") {
                $addHandler($v_2, "click", this.$1L_0);
                $addHandler($v_2, "keypress", this.$19_0);
                $v_2.getElementsByTagName("IMG")[0].title = XUI.Html.GetText($v_2) + ":" + this.$0_0.altGroupCollapsed;
                $v_2.getElementsByTagName("IMG")[0].attributes.getNamedItem("Alt")
                    .value = XUI.Html.GetText($v_2) + ":" + this.$0_0.altGroupCollapsed
            } else {
                var $v_4 = XUI.Html.DomUtils.GetNextSibling($v_2), $v_5 = $v_2.attributes.getNamedItem("url");
                if (!Mscrm.NavBarUtils.isDOMAttributeNull($v_5)) {
                    var $v_6 = Mscrm.CrmUri.create($v_5.value),
                        $v_7 = false,
                        $v_8 = $v_2.attributes.getNamedItem("passparams");
                    if (!Mscrm.NavBarUtils.isDOMAttributeNull($v_8)) {
                        var $v_B = $v_8.value;
                        if ($v_B === "0") $v_7 = false;
                        else if ($v_B === "1") $v_7 = true;
                        else $v_7 = Boolean.parse($v_B)
                    }
                    $v_7 && addIsvParameters($v_6);
                    var $v_9 = $v_2.attributes.getNamedItem("sitemappath");
                    if (!Mscrm.NavBarUtils.isDOMAttributeNull($v_9) &&
                        $v_6.get_isLocalServer() &&
                        Mscrm.Utilities.isHomepageUrl($v_6)) $v_6.get_query()["sitemappath"] = $v_9.value;
                    this.$E_0[this.$W_0($p1, $v_2.id)] = $v_6;
                    $v_4.title = "";
                    var $v_A = document.createAttribute("vs");
                    $v_A.value = "false";
                    $v_4.attributes.getNamedItem("tabIndex").value = "-1";
                    if (Mscrm.Utilities.isHomepageUrl($v_6)) {
                        var $v_C = $v_2.attributes.getNamedItem("entityname"),
                            $v_D = $v_2.attributes.getNamedItem("hascustomvs");
                        if (!Mscrm.NavBarUtils.isDOMAttributeNullEmptyUndef($v_C) ||
                            !Mscrm.NavBarUtils.isDOMAttributeNullEmptyUndef($v_D)) {
                            if (!window.UseTabletExperience) {
                                $v_4.title = this.$0_0.viewSelectorTooltip;
                                $addHandler($v_4, "click", this.$y_0);
                                $addHandler($v_4.parentNode, "contextmenu", this.$y_0);
                                $addHandler($v_4, "keyup", this.$1M_0);
                                $addHandler($v_4, "keydown", this.$N_0)
                            } else {
                                $v_4.title = this.$0_0.newRecordTooltip;
                                var $$t_I = this;
                                $addHandler($v_4,
                                    "click",
                                    function($p1_0) {
                                        $p1_0.stopPropagation();
                                        $p1_0.preventDefault();
                                        var $v_E = XUI.Html.DomUtils
                                            .GetPrevSibling(Mscrm.Utilities.getDomEventElement($p1_0, "A"));
                                        $v_E.attributes.getNamedItem("cancreate").value === "True" &&
                                            openObj(parseInt($v_E.attributes.getNamedItem("etc").value), null)
                                    })
                            }
                            $v_A.value = "true";
                            $v_4.attributes.getNamedItem("tabIndex").value = "0"
                        }
                    }
                    $v_0[$v_1].attributes.setNamedItem($v_A)
                }
                $addHandler($v_2, "click", this.$1D_0);
                $addHandler($v_2.parentNode, "mouseover", this.$X_0);
                $addHandler($v_2.parentNode, "mouseout", this.$L_0);
                $addHandler($v_2, "focus", this.$X_0);
                $addHandler($v_2, "blur", this.$L_0);
                $addHandler($v_4, "focus", this.$X_0);
                $addHandler($v_4, "blur", this.$L_0);
                $addHandler($v_2, "keyup", this.$F_0);
                $addHandler($v_2, "keydown", this.$N_0);
                this.$c_0[this.$W_0($p1, $v_2.id)] = $v_2
            }
        }
    },
    $2b_0: function($p0) {
        if (window.UseTabletExperience) return false;
        var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null;
        $v_1 = {};
        $v_1["key"] = String.format("QueryList_{0}", $p0);
        $v_2 = this.$0_0.raiseEvent(10, $v_1);
        if (!IsNull($v_2) && isArray($v_2) && $v_2.length > 0) $v_3 = $v_2[0];
        var $v_4 = null;
        $v_4 = this.$K_0[$p0];
        var $v_5 = true;
        if (IsNull($v_4)) {
            if (!IsNull($v_3)) {
                this.$K_0[$p0] = $v_3;
                $v_0 = $v_3
            }
        } else if (!IsNull($v_3)) {
            var $v_8 = $v_4["timestamp"], $v_9 = $v_3["timestamp"];
            if ($v_8 === $v_9) {
                $v_0 = $v_4;
                $v_5 = false
            } else {
                this.$K_0[$p0] = $v_3;
                switch ($p0) {
                case "Dashboard":
                    $v_0 = null;
                    $v_5 = true;
                    break;
                default:
                    $v_0 = $v_3;
                    break
                }
            }
        } else $v_5 = false;
        var $v_6 = false, $v_7 = this.$1f_0($p0);
        if ($v_5) {
            $v_7.clear();
            if (!IsNull($v_0)) this.$1r_0($v_7, $v_0["queryList"]);
            else {
                $v_6 = true;
                $v_7.set_isLoading(true)
            }
        }
        return $v_6
    }
};
Mscrm.AppWonderBar = function(root, navBar, selectedAreaId) {
    this.$$d_$1y_0 = Function.createDelegate(this, this.$1y_0);
    this.$$d_$1T_0 = Function.createDelegate(this, this.$1T_0);
    this.$$d_$21_0 = Function.createDelegate(this, this.$21_0);
    this.$$d_$1j_0 = Function.createDelegate(this, this.$1j_0);
    this.$$d_$1m_0 = Function.createDelegate(this, this.$1m_0);
    this.$1_0 = root;
    this.$0_0 = navBar;
    this.$8_0 = selectedAreaId;
    this.$11_0(selectedAreaId)
};
Mscrm.AppWonderBar.prototype = {
    $1_0: null,
    $0_0: null,
    $16_0: null,
    $j_0: null,
    $8_0: null,
    $n_0: null,
    $1C_0: null,
    $p_0: null,
    $v_0: null,
    $F_0: null,
    $N_0: null,
    adjustSize: function(parameters) {
        var $v_0 = parameters["height"],
            $v_1 = Math.ceil($v_0 * .5),
            $v_2 = this.$1_0.scrollHeight,
            $v_3 = $v_1 > $v_2 ? $v_2 : $v_1;
        this.$1_0.style.height = $v_3.toString() + "px"
    },
    selectArea: function(areaId) {
        if (areaId === this.$8_0) return;
        var $v_0 = this.$z_0(areaId);
        Mscrm.NavBarUtils.setStyle($v_0.parentNode, "ms-crm-NavBar-Area ms-crm-ImageStrip-wunderbar_sel");
        Mscrm.NavBarUtils.clearSavedStyle($v_0.parentNode);
        var $v_1 = this.$z_0(this.$8_0);
        Mscrm.NavBarUtils.setStyle($v_1.parentNode, "ms-crm-NavBar-Area ms-crm-ImageStrip-wunderbar_rest");
        Mscrm.NavBarUtils.clearSavedStyle($v_1.parentNode);
        this.$8_0 = areaId
    },
    getAreaTitle: function(areaId) { return XUI.Html.GetText(this.$z_0(areaId).getElementsByTagName("NOBR")[0]) },
    setVisibility: function(setVisible) {
        if (setVisible) this.$1_0.style.display = "block";
        else this.$1_0.style.display = "none"
    },
    get_areaTitle: function() { return this.getAreaTitle(this.$8_0) },
    get_areaId: function() { return this.$8_0 },
    $11_0: function($p0) {
        this.$16_0 = Mscrm.XmlUtil.createXslTemplateByXml(this.$0_0.areasXslXml);
        this.$1_0.innerHTML = this.$2F_0();
        this.$1_0.style.overflowY = "auto";
        this.$1_0.className = "ms-crm-NavBar-Areas";
        if (IsNull(this.$8_0))
            this.$8_0 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils
                .GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$1_0))).id;
        this.$1C_0 = this.$$d_$1m_0;
        this.$p_0 = this.$$d_$1j_0;
        this.$v_0 = this.$$d_$21_0;
        this.$F_0 = this.$$d_$1T_0;
        this.$N_0 = this.$$d_$1y_0;
        this.$j_0 = {};
        this.$i_0()
    },
    $z_0: function($p0) { return this.$j_0[$p0] },
    $i_0: function() {
        for (var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$1_0).getElementsByTagName("A"), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) {
            var $v_2 = $v_0[$v_1];
            $addHandler($v_2, "click", this.$1C_0);
            $addHandler($v_2, "mouseover", this.$p_0);
            $addHandler($v_2, "mouseout", this.$v_0);
            $addHandler($v_2, "focus", this.$p_0);
            $addHandler($v_2, "blur", this.$v_0);
            $addHandler($v_2, "keyup", this.$F_0);
            $addHandler($v_2, "keydown", this.$N_0);
            this.$j_0[$v_2.id] = $v_2
        }
    },
    $1m_0: function($p0) { this.$0_0.loadArea(Mscrm.Utilities.getDomEventElement($p0, "A").id) },
    $1j_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A");
        this.$2Y_0($v_0)
    },
    $2Y_0: function($p0) {
        Mscrm.NavBarUtils.saveCurrentStyle($p0.parentNode);
        !IsNull(this.$n_0) && this.$22_0(this.$n_0);
        this.$n_0 = $p0;
        $p0 !== this.$z_0(this.$8_0) &&
            Mscrm.NavBarUtils.setStyle($p0.parentNode, "ms-crm-NavBar-Area ms-crm-ImageStrip-wunderbar_hover")
    },
    $21_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A");
        this.$22_0($v_0)
    },
    $22_0: function($p0) {
        Mscrm.NavBarUtils.saveCurrentStyle($p0.parentNode);
        Mscrm.NavBarUtils.setStyle($p0.parentNode, $p0.parentNode.attributes.getNamedItem("previousClass").value)
    },
    $1y_0: function($p0) {
        switch ($p0.keyCode) {
        case 32:
        case 13:
        case 38:
        case 40:
            $p0.preventDefault();
            return
        }
    },
    $1T_0: function($p0) {
        switch ($p0.keyCode) {
        case 32:
        case 13:
            this.$1m_0($p0);
            return;
        case 38:
            this.$1l_0($p0);
            return;
        case 40:
            this.$1k_0($p0);
            return
        }
    },
    $1l_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
            $v_1 = $v_0.parentNode,
            $v_2 = XUI.Html.DomUtils.GetPrevSibling($v_1),
            $v_3;
        if (IsNull($v_2) || $v_2.tagName !== "LI")
            $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetLastChild($v_1.parentNode));
        else $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        $v_3.focus()
    },
    $1k_0: function($p0) {
        var $v_0 = Mscrm.Utilities.getDomEventElement($p0, "A"),
            $v_1 = $v_0.parentNode,
            $v_2 = XUI.Html.DomUtils.GetNextSibling($v_1),
            $v_3;
        if (IsNull($v_2) || $v_2.tagName !== "LI")
            $v_3 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild($v_1.parentNode));
        else $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
        $v_3.focus()
    },
    $2F_0: function() {
        var $v_0 = this.$0_0.$G_3, $v_1 = this.$16_0.createProcessor();
        $v_1.input = $v_0;
        $v_1.addParameter("selectedArea", IsNull(this.$8_0) ? "" : this.$8_0);
        $v_1.transform();
        return $v_1.output
    }
};
Mscrm.NavBarUtils = function() {};
Mscrm.NavBarUtils.getDomEventElement = function(e, tagName) {
    var $v_0 = e.target;
    while ($v_0 && $v_0.tagName !== tagName) $v_0 = $v_0.parentNode;
    return $v_0
};
Mscrm.NavBarUtils.setStyle = function(node, className) { node.className = className };
Mscrm.NavBarUtils.saveCurrentStyle = function(node) {
    var $v_0 = Mscrm.NavBarUtils.getAttribute(node, "previousClass"), $v_1 = $v_0.value;
    if (IsNull($v_1) || !$v_1.length) $v_0.value = node.className
};
Mscrm.NavBarUtils.clearSavedStyle = function(node) { Mscrm.NavBarUtils.getAttribute(node, "previousClass").value = "" };
Mscrm.NavBarUtils.getAttribute = function(node, name) {
    var $v_0 = node.attributes.getNamedItem(name);
    if (!$v_0) {
        var $v_1 = document.createAttribute(name);
        $v_1.value = "";
        node.attributes.setNamedItem($v_1);
        $v_0 = $v_1
    }
    return $v_0
};
Mscrm.NavBarUtils.isDOMAttributeNull = function(attr) { return IsNull(attr) || IsNull(attr.value) };
Mscrm.NavBarUtils.isDOMAttributeNullEmptyUndef = function(attr) {
    return IsNull(attr) || IsNull(attr.value) || !attr.value.length
};
Mscrm.ViewSelectorMenuFactory = function() {};
Mscrm.ViewSelectorMenuFactory.getViewSelectorMenuDataProvider = function(hasCustomVS, VSHandler) {
    if (!hasCustomVS) return new Mscrm.DefaultViewListDataProvider;
    switch (VSHandler) {
    case "GetDashboardList":
        return new Mscrm.DashboardListDataProvide;
    default:
        return null
    }
};
Mscrm.DashboardListDataProvide = function() {};
Mscrm.DashboardListDataProvide.prototype = {
    getViewListRemoteCommand: function(parameters) {
        var $v_0 = new RemoteCommand("DashboardWebService", "DashboardSelectorContent", null);
        $v_0.SetParameter("showNewDashboard", false);
        $v_0.Reference = parameters["entityName"];
        return $v_0
    }
};
Mscrm.DefaultViewListDataProvider = function() {};
Mscrm.DefaultViewListDataProvider.prototype = {
    getViewListRemoteCommand: function(parameters) {
        var $v_0 = new RemoteCommand("AdvancedFind", "GetTruncatedQueryList", null);
        $v_0.Reference = parameters["entityName"];
        $v_0.SetParameter("entityName", parameters["entityName"]);
        $v_0.SetParameter("queryType", "0");
        $v_0.SetParameter("includeSystemQuery", "true");
        $v_0.SetParameter("includeUserQuery", "true");
        $v_0.SetParameter("includeAPIQuery", "true");
        $v_0.SetParameter("isTruncateListOfViewsToShow", "true");
        return $v_0
    }
};
Mscrm.SplitterControl.registerClass("Mscrm.SplitterControl", Mscrm.CrmUIControl);
Mscrm.AppNavBar.registerClass("Mscrm.AppNavBar", Mscrm.CrmUIControl);
Mscrm.AppNavCollapsedBar.registerClass("Mscrm.AppNavCollapsedBar");
Mscrm.AppNavTitle.registerClass("Mscrm.AppNavTitle");
Mscrm.NavBarCustomVSEntity.registerClass("Mscrm.NavBarCustomVSEntity");
Mscrm.AppSubAreas.registerClass("Mscrm.AppSubAreas");
Mscrm.AppWonderBar.registerClass("Mscrm.AppWonderBar");
Mscrm.NavBarUtils.registerClass("Mscrm.NavBarUtils");
Mscrm.ViewSelectorMenuFactory.registerClass("Mscrm.ViewSelectorMenuFactory");
Mscrm.DashboardListDataProvide.registerClass("Mscrm.DashboardListDataProvide", null, Mscrm.IViewSelectorMenu);
Mscrm.DefaultViewListDataProvider.registerClass("Mscrm.DefaultViewListDataProvider", null, Mscrm.IViewSelectorMenu);
Mscrm.NavBarCustomVSEntity.dashboard = "Dashboard"