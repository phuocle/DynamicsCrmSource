Type.registerNamespace("Mscrm.FormInputControl.Tabs");
Mscrm.FormInputControl.Tabs.TabChangingEventArgs = function() {
    Mscrm.FormInputControl.Tabs.TabChangingEventArgs.initializeBase(this)
};
Mscrm.FormInputControl.Tabs.TabChangingEventArgs.prototype = {
    $J_2: null,
    $N_2: null,
    $E_2: null,
    $G_2: null,
    $A_2: null,
    $5_2: null,
    $K_2: false,
    get_currentTabContainer: function() { return this.$J_2 },
    set_currentTabContainer: function(value) {
        this.$J_2 = value;
        return value
    },
    get_newTabContainer: function() { return this.$N_2 },
    set_newTabContainer: function(value) {
        this.$N_2 = value;
        return value
    },
    get_currentTabHeader: function() { return this.$E_2 },
    set_currentTabHeader: function(value) {
        this.$E_2 = value;
        return value
    },
    get_newTabHeader: function() { return this.$G_2 },
    set_newTabHeader: function(value) {
        this.$G_2 = value;
        return value
    },
    get_currentTabId: function() { return this.$A_2 },
    set_currentTabId: function(value) {
        this.$A_2 = value;
        return value
    },
    get_newTabId: function() { return this.$5_2 },
    set_newTabId: function(value) {
        this.$5_2 = value;
        return value
    },
    get_firstTime: function() { return this.$K_2 },
    set_firstTime: function(value) {
        this.$K_2 = value;
        return value
    }
};
Mscrm.FormInputControl.Tabs
    .TabsContainerResizedEventArgs = function() {
        Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs.initializeBase(this)
    };
Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs.prototype = {
    $P_1: 0,
    $M_1: 0,
    $6_1: 0,
    $O_1: 0,
    get_oldHeight: function() { return this.$P_1 },
    set_oldHeight: function(value) {
        this.$P_1 = value;
        return value
    },
    get_newHeight: function() { return this.$M_1 },
    set_newHeight: function(value) {
        this.$M_1 = value;
        return value
    },
    get_oldWidth: function() { return this.$6_1 },
    set_oldWidth: function(value) {
        this.$6_1 = value;
        return value
    },
    get_newWidth: function() { return this.$O_1 },
    set_newWidth: function(value) {
        this.$O_1 = value;
        return value
    }
};
Mscrm.FormInputControl.Tabs.TabsControl = function(element) {
    this.$$d_$m_3 = Function.createDelegate(this, this.$m_3);
    Mscrm.FormInputControl.Tabs.TabsControl.initializeBase(this, [element])
};
Mscrm.FormInputControl.Tabs.TabsControl.$f = function() { return isNullOrEmptyString(Xrm.Page.data.entity.getId()) };
Mscrm.FormInputControl.Tabs.TabsControl.prototype = {
    $3_3: null,
    $0_3: null,
    $B_3: null,
    $4_3: null,
    $9_3: null,
    $I_3: null,
    $6_3: 0,
    $D_3: false,
    get_defaultTabId: function() {
        var $v_0 = this.get_element().getAttribute("DefaultTabId");
        if (!this.$S_3($v_0)) $v_0 = this.$V_3();
        return $v_0
    },
    set_defaultTabId: function(value) {
        this.get_element().setAttribute("DefaultTabId", value);
        return value
    },
    get_isUserClickedForTabChange: function() { return this.$D_3 },
    set_isUserClickedForTabChange: function(value) {
        this.$D_3 = value;
        return value
    },
    get_tabLinksjQueryObject: function() { return this.$0_3 },
    set_tabLinksjQueryObject: function(value) {
        this.$0_3 = value;
        return value
    },
    get_tabsControljQueryObject: function() { return this.$3_3 },
    get_tabsHeaderjQueryObject: function() { return this.$9_3 },
    get_tabsContentjQueryObject: function() { return this.$4_3 },
    add_onTabChanging: function(value) { this.get_events().addHandler("otch", value) },
    remove_onTabChanging: function(value) { this.get_events().removeHandler("otch", value) },
    add_tabsContainerResized: function(value) { this.get_events().addHandler("otcrd", value) },
    remove_tabsContainerResized: function(value) { this.get_events().removeHandler("otcrd", value) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$3_3 = $P_CRM(this.get_element().parentNode);
        this.$9_3 = this.$3_3.find(".tabsHeader");
        this.$4_3 = this.$3_3.find(".tabsContent");
        this.$0_3 = this.$3_3.find(".tabLink");
        this.$B_3 = this.$3_3.find(".tabContainer");
        this.$a_3();
        this.$b_3();
        this.$Z_3();
        this.$j_3()
    },
    $a_3: function() {
        var $$t_7 = this;
        this.$I_3 = function($p1_0) {
            var $v_0 = $$t_7.$4_3.height(), $v_1 = $$t_7.$3_3.height() - $$t_7.$9_3.height(), $v_2 = $$t_7.$4_3.width();
            if ($v_0 !== $v_1 || $v_2 !== $$t_7.$6_3) {
                $$t_7.$4_3.height($v_1);
                var $v_3 = $$t_7.get_events().getHandler("otcrd");
                if ($v_3) {
                    var $v_4 = $v_3, $v_5 = new Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs;
                    $v_5.$P_1 = $v_0;
                    $v_5.$M_1 = $v_1;
                    $v_5.$6_1 = $$t_7.$6_3;
                    $v_5.$O_1 = $v_2;
                    $v_4($$t_7, $v_5)
                }
                $$t_7.$6_3 = $v_2
            }
        };
        $P_CRM(window).resize(this.$I_3);
        this.$I_3(null)
    },
    $j_3: function() {
        var $v_0 = this.$9_3.attr("id"), $v_1 = this.$4_3.attr("id"), $v_2 = this.$3_3.attr("id"), $v_3 = {};
        $v_3["id"] = $v_2;
        $v_3["type"] = "NotesControl";
        Mscrm.Utilities.registerControlForXrmUI(this.$3_3, $v_3);
        $v_3 = {};
        $v_3["id"] = $v_0;
        $v_3["type"] = "NotesControlChildElements";
        $v_3["parentId"] = $v_2;
        Mscrm.Utilities.registerControlForXrmUI(this.$9_3, $v_3);
        $v_3 = {};
        $v_3["id"] = $v_1;
        $v_3["type"] = "NotesControlChildElements";
        $v_3["parentId"] = $v_2;
        Mscrm.Utilities.registerControlForXrmUI(this.$4_3, $v_3);
        this.$X_3(this.$0_3, $v_0, "tabid");
        this.$X_3(this.$B_3, $v_1, "tabid")
    },
    $X_3: function($p0, $p1, $p2) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $P_CRM($p0.get($v_0)), $v_2 = {};
            $v_2["id"] = $v_1.attr($p2);
            $v_2["type"] = "NotesControlChildElements";
            $v_2["parentId"] = $p1;
            if ($p1 === this.$4_3.attr("id")) $v_2["controlComplexity"] = "true";
            Mscrm.Utilities.registerControlForXrmUI($v_1, $v_2)
        }
    },
    $b_3: function() {
        for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
            var $v_1 = $P_CRM(this.$0_3.get($v_0)), $v_2 = $P_CRM(this.$B_3.get($v_0));
            $v_1.data("associatedTabContainer", $v_2);
            $v_1.click(this.$$d_$m_3)
        }
    },
    $Z_3: function() {
        var $v_0 = $P_CRM(document.body);
        if (Mscrm.CrmBrowser.get_currentBrowser()
            .get_isTouchEnabled()) !$v_0.hasClass("mobile") && $v_0.addClass("mobile")
    },
    $m_3: function($p0) {
        this.$D_3 = true;
        var $v_0 = $P_CRM($p0.currentTarget);
        this.changeCurrentTab($v_0);
        this.$l_3($v_0);
        $p0.preventDefault();
        window.IS_ACTIONHUB_ENABLED && !Mscrm.FormInputControl.Tabs.TabsControl.$f() && this.$d_3($v_0)
    },
    $l_3: function($p0) {
        var $v_0 = $p0.attr("tabid"), $v_1 = $P_CRM("#header");
        if ($v_0 === "ActivityFeedsTab") $v_1.attr("style", "display:block;");
        else $v_1.attr("style", "display:none;")
    },
    $d_3: function($p0) {
        var $v_0 = $p0.attr("tabid"), $v_1 = $P_CRM("#containerID"), $v_2 = window.top.SHOWCAROUSEL;
        if ($v_0 !== "ActionHubTab") {
            if ($v_1 && $v_1[0].style.display === "none") {
                Mscrm.Performance.PerformanceMarkerManager.get_instance()
                    .addMarker("Action Card Carousel Refresh in Form", 1);
                var $v_3 = $P_CRM("#iFrmActionCards");
                $v_3.contents().find("[id ^= card]").filter(".actionhubcontrol").remove();
                if ($v_3.attr("src") === "about:blank") $v_3.attr("src", $v_3[0].getAttribute("data-src").toString());
                else frames["actionCardsCarousel"].Mscrm.ActionHubControl.ActionHubControlWall.retrieveActionCards()
            }
            $v_2 && $v_1.attr("style", "display:block;")
        } else $v_1.slideUp()
    },
    changeCurrentTab: function(tab) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("ChangeCurrentTab");
        $v_0.start();
        var $v_1 = tab.data("associatedTabContainer"),
            $v_2 = !Boolean.parse($v_1.attr("shown")),
            $v_3 = this.get_events().getHandler("otch");
        if ($v_3) {
            var $v_5 = $v_3, $v_6 = new Mscrm.FormInputControl.Tabs.TabChangingEventArgs;
            $v_6.set_cancel(false);
            $v_6.$E_2 = this.$3_3.find(".tabLink.active");
            $v_6.$J_2 = this.$3_3.find(".tabContainer.active");
            $v_6.$G_2 = tab;
            $v_6.$N_2 = $v_1;
            $v_6.$A_2 = $v_6.$E_2.attr("tabid");
            $v_6.$5_2 = $v_6.$G_2.attr("tabid");
            $v_6.$K_2 = $v_2;
            $v_5(this, $v_6);
            if ($v_6.get_cancel()) {
                $v_0.stop();
                return
            }
        }
        var $$t_8;
        ($$t_8 = this.$0_3).not.apply($$t_8, tab.get()).removeClass("active");
        var $$t_9;
        ($$t_9 = this.$B_3).not.apply($$t_9, $v_1.get()).removeClass("active");
        tab.addClass("active");
        $v_1.addClass("active");
        $v_2 && $v_1.attr("shown", "true");
        var $v_4 = tab.attr("tabid");
        this.onTabChanged($v_4);
        $v_0.stop()
    },
    onTabChanged: function(selectedTabId) {},
    $Y_3: function($p0, $p1) {
        if (isNullOrEmptyString($p0)) return;
        for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
            var $v_1 = $P_CRM(this.$0_3.get($v_0)), $v_2 = $P_CRM(this.$B_3.get($v_0));
            if ($v_1.attr("tabid") === $p0)
                if ($p1) {
                    $v_1.show();
                    $v_2.css("display", "")
                } else {
                    $v_1.hide();
                    $v_2.hide()
                }
        }
    },
    getTabContainerById: function(tabId) {
        for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
            var $v_1 = $P_CRM(this.$0_3.get($v_0));
            if ($v_1.attr("tabid") === tabId) return $P_CRM(this.$B_3.get($v_0))
        }
        return null
    },
    getTabHeaderById: function(tabId) {
        for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
            var $v_1 = $P_CRM(this.$0_3.get($v_0));
            if ($v_1.attr("tabid") === tabId) return $v_1
        }
        return null
    },
    $V_3: function() {
        for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
            var $v_1 = this.$0_3.get($v_0);
            if ($v_1.style.display !== "none") return $P_CRM($v_1).attr("tabid")
        }
        return null
    },
    $S_3: function($p0) {
        var $v_0 = this.getTabHeaderById($p0);
        if (!$v_0 || !$v_0.length) return false;
        return $v_0[0].style.display !== "none"
    },
    setActiveTab: function(tabId) {
        var $v_0 = true;
        if (!this.$S_3(tabId)) {
            tabId = this.$V_3();
            $v_0 = false
        }
        if (IsNull(tabId)) return $v_0;
        var $v_1 = this.getTabHeaderById(tabId);
        if ($v_1 && this.$S_3(tabId)) {
            this.changeCurrentTab($v_1);
            return $v_0
        }
        return false
    },
    showTab: function(tabId) { this.$Y_3(tabId, true) },
    hideTab: function(tabId) { this.$Y_3(tabId, false) },
    getActiveTabId: function() { return this.$0_3.filter(".active").attr("tabid") },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.Utilities.removeControlFromXrmUI(this.$3_3.attr("id"));
        this.$0_3.unbind();
        this.$3_3.unbind();
        this.$9_3.unbind();
        this.$4_3.unbind();
        if (!IsNull(this.$0_3))
            for (var $v_0 = 0; $v_0 < this.$0_3.length; $v_0++) {
                var $v_1 = $P_CRM(this.$0_3.get($v_0));
                $v_1.removeData()
            }
        $P_CRM(window).unbind("resize", this.$I_3);
        this.$3_3 = null;
        this.$9_3 = null;
        this.$4_3 = null;
        this.$0_3 = null;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    }
};
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters = function() {};
Mscrm.FormInputControl.Tabs.SfaTabsControl = function(element) {
    this.$$d_$h_4 = Function.createDelegate(this, this.$h_4);
    Mscrm.FormInputControl.Tabs.SfaTabsControl.initializeBase(this, [element]);
    this.$1_4 = new Mscrm.EntityReference
};
Mscrm.FormInputControl.Tabs.SfaTabsControl.prototype = {
    $F_4: null,
    $C_4: false,
    $Q_4: false,
    $R_4: false,
    $H_4: null,
    $7_4: null,
    $8_4: null,
    $2_4: null,
    $1_4: null,
    $T_4: false,
    $L_4: null,
    get_masterComponentId: function() { return this.$F_4 },
    set_masterComponentId: function(value) {
        this.$F_4 = value;
        return value
    },
    get_sortActivityWall: function() { return this.$8_4 },
    set_sortActivityWall: function(value) {
        this.$8_4 = value;
        return value
    },
    get_orderByActivityWall: function() { return this.$7_4 },
    set_orderByActivityWall: function(value) {
        this.$7_4 = value;
        return value
    },
    get_isControlReadOnly: function() { return this.$C_4 },
    set_isControlReadOnly: function(value) {
        this.$C_4 = value;
        return value
    },
    get_showWallContentOnLoad: function() { return this.$Q_4 },
    set_showWallContentOnLoad: function(value) {
        this.$Q_4 = value;
        return value
    },
    get_$g_4: function() { return !!this.getTabHeaderById("ActivityFeedsSystemTab") },
    initialize: function() {
        Mscrm.FormInputControl.Tabs.TabsControl.prototype.initialize.call(this);
        if (!IsNull(this.get_eventManager())) {
            this.get_eventManager().subscribeEvent(77, this.get_id());
            this.get_eventManager().subscribeEvent(79, this.get_id())
        }
        this.$e_4();
        var $v_0 = $P_CRM(this.get_element()).find(".getYammerHolder");
        if ($v_0.length === 1) this.$L_4 = Mscrm.CrmUIComponent.crmCreate(Mscrm.GetYammer, null, null, null, $v_0[0]);
        var $v_1 = Xrm.Page.data.entity.getEntityReference();
        this.$1_4.Id = $v_1.id;
        this.$1_4.Name = $v_1.name;
        this.$1_4.TypeName = $v_1.entityType;
        if (!this.$C_4 || this.$Q_4)
            if (!window.IsTurboForm)
                if (Mscrm.Utilities.isRefreshForm()) {
                    var $$t_2 = this;
                    Mscrm.OnLoadDeferredExecutor
                        .queueCallback(function() { $$t_2.setActiveTab($$t_2.get_defaultTabId()) }, 2)
                } else {
                    var $$t_3 = this;
                    window.setTimeout(function() { $$t_3.setActiveTab($$t_3.get_defaultTabId()) }, 2e3)
                }
        this.add_onTabChanging(this.$$d_$h_4)
    },
    $e_4: function() {
        var $v_0 = this.getTabContainerById("ActivityFeedsSystemTab");
        if (Mscrm.Utilities.isIosDevice() && !IsNull($v_0)) {
            this.$2_4 = $find(XUI.Html.DomUtils.GetFirstChild($v_0.get(0)).id);
            this.$2_4.set_hasInitialSkeleton(true);
            return
        }
        var $v_1 = this.getTabContainerById("ActivityFeedsTab");
        if (!IsNull($v_1)) {
            var $v_2 = XUI.Html.DomUtils.GetFirstChild($v_1.get(0)).id;
            this.$2_4 = $find($v_2);
            var $v_3 = this.getTabHeaderById("ActivityFeedsSystemTab");
            !IsNull($v_3) && $v_3.data("associatedTabContainer", $v_1);
            !window.IsTurboForm && this.$2_4.set_hasInitialSkeleton(true)
        }
    },
    modifyCssForReadOnly: function() {
        if (this.$C_4)
            if (!IsNull(this.$4_3)) {
                var $v_0 = this.getTabContainerById("ActivityFeedsTab");
                if (!IsNull($v_0)) {
                    this.$4_3.css("margin-top", "8px");
                    $v_0.css("margin-top", "-8px")
                }
                var $v_1 = this.getTabContainerById("ActivityFeedsTab");
                if (!IsNull($v_1)) {
                    var $v_2 = $v_1.find("div[id='wallContainer']");
                    if (!IsNull($v_2)) {
                        $v_2.css("top", "-3px");
                        $v_2.css("padding-top", "0px")
                    }
                }
            }
    },
    $h_4: function($p0, $p1) {
        this.$H_4 = $p1.$A_2;
        if ($p1.$A_2 !== $p1.$5_2 && !IsNull(Xrm.Page.ui.formSelector)) {
            var $v_0 = Xrm.Page.ui.formSelector.getCurrentItem();
            Mscrm.MetricsReporting.instance().addMetric("SFATabs.TabChange",
                { from: $p1.$A_2, to: $p1.$5_2, entity: Xrm.Page.data.entity.getEntityName(), form: $v_0.getId() })
        }
        if (window.UseTabletExperience) {
            var $v_1 = Mscrm.Utilities.getActiveElement(), $v_2 = document.createElement("textarea");
            $v_2.style.height = "0 px";
            $v_2.style.width = "100 px";
            $v_2.style.position = "absolute";
            $v_2.style.top = "0 px";
            $v_2.style.left = "0 px";
            document.body.appendChild($v_2);
            $v_2.focus();
            $v_2.blur();
            document.body.removeChild($v_2);
            !IsNull($v_1) && $v_1.focus()
        }
        ($p1.$5_2 === "ActivityFeedsTab" || $p1.$5_2 === "ActivityFeedsSystemTab") && this.$U_4($p1.$5_2)
    },
    refresh: function(entity) {
        if (!IsNull(entity)) {
            this.updateParentEntity(entity);
            var $v_0 = this.getActiveTabId();
            !IsNull($v_0) && $v_0 !== "ActivitiesTab" && this.setActiveTab($v_0)
        }
    },
    updateEntityReference: function(entityReference) { this.$1_4 = entityReference },
    updateParentEntity: function(entityReference) {
        this.$1_4 = entityReference;
        this.$U_4(this.getActiveTabId())
    },
    $U_4: function($p0) {
        if (this.$2_4) {
            if (($p0 === "ActivityFeedsTab" || $p0 === "ActivityFeedsSystemTab") &&
                (this.$1_4.Id !== this.$2_4.get_entityId() || this.$1_4.TypeName !== this.$2_4.get_entityType()))
                if (IsNull(this.$2_4.set_hasInitialSkeleton)) {
                    var $v_0 = this.getTabContainerById($p0).find(".recordWall.initialFiller");
                    if ($v_0.length > 0) {
                        var $v_1 = $v_0.get(0);
                        $v_1.parentNode.removeChild($v_1)
                    }
                }
            this.$R_4 && this.$2_4.loadWallForEntity(this.$1_4);
            this.get_$g_4() && this.$2_4.selectPostSourceFilter($p0 === "ActivityFeedsTab" ? 2 : 1)
        }
    },
    setActivityFeedsTabState: function(isActivityFeedsEnabled) {
        this.$R_4 = isActivityFeedsEnabled;
        if (isActivityFeedsEnabled && Mscrm.Utilities.isProcessForm()) {
            if (!Mscrm.Utilities.isIosDevice()) this.showTab("ActivityFeedsTab");
            else !this.getTabHeaderById(this.get_defaultTabId()) && this.set_defaultTabId("ActivityFeedsSystemTab");
            this.showTab("ActivityFeedsSystemTab")
        } else if (Mscrm.Utilities
            .isProcessForm() &&
            !IsNull(this
                .getTabHeaderById("ActivitiesTab")))
            IsNull(this.get_defaultTabId()) && this.set_defaultTabId("ActivitiesTab");
        else this.set_defaultTabId("NotesTab")
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent);
        switch (eventCode) {
        case 79:
        case 77:
            if (IsNull(sourceComponent) && this.$F_4 === this.get_id() ||
                !IsNull(sourceComponent) && this.$F_4 === sourceComponent.get_id())
                if (!IsNull(parameters)) {
                    if (!IsNull(parameters["entityReference"])) this.$1_4 = parameters["entityReference"];
                    var $v_0 = false, $v_1 = null;
                    if (!IsNull(parameters["onlyFocus"])) $v_0 = parameters["onlyFocus"];
                    if (!IsNull(parameters["tabName"])) $v_1 = parameters["tabName"];
                    else {
                        $v_1 = this.getActiveTabId();
                        parameters["tabName"] = $v_1
                    }
                    if ($v_0) this.setActiveTab($v_1);
                    else this.$W_4($v_1, parameters)
                }
            break
        }
        return null
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$1_4 = null;
        this.remove_onTabChanging(this.$$d_$h_4);
        this.$L_4 && this.$L_4.dispose();
        if (!IsNull(this.get_eventManager())) {
            this.get_eventManager().dispose();
            this.set_eventManager(null)
        }
        Mscrm.FormInputControl.Tabs.TabsControl.prototype.dispose.call(this)
    },
    onTabChanged: function(tabId) {
        Mscrm.FormInputControl.Tabs.TabsControl.prototype.onTabChanged.call(this, tabId);
        this.$i_4(tabId)
    },
    $i_4: function($p0) {
        var $v_0 = {};
        if (!isNullOrEmptyString(this.$1_4.Id)) $v_0["entityID"] = this.$1_4.Id;
        if (window.IS_ACTIVITY_SORTING && $p0 === "ActivitiesTab") $v_0 = this.$k_4($v_0);
        this.$W_4($p0, $v_0)
    },
    $k_4: function($p0) {
        if (isNullOrEmptyString(this.$7_4)) this.$7_4 = "descending";
        if (isNullOrEmptyString(this.$8_4)) this.$8_4 = "modifiedon";
        $p0["activityorder"] = this.$7_4;
        $p0["activitysort"] = this.$8_4;
        var $v_0 = $P_CRM($get("activityWallSortButton"));
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.find(".activityWallSortImage");
            if (!IsNull($v_1) && $v_1.attr("isSortIconConfigured") !== "true") {
                var $v_2 = "ascending",
                    $v_3 = this.$7_4 === $v_2
                        ? Xrm.Internal.getResourceString("ActivityWallSort_OrderByAsc")
                        : Xrm.Internal.getResourceString("ActivityWallSort_OrderByDesc"),
                    $v_4 = window.self.activityPointerAttributes,
                    $v_5 = !IsNull($v_4) ? $v_4[this.$8_4] : "",
                    $v_6 = this.$7_4 === $v_2 ? "/_IMGS/GRID/sorting_up.png" : "/_IMGS/GRID/sorting_down.png";
                $v_1.attr("fieldNameValue", this.$8_4);
                $v_1.attr("fieldDisplayName", $v_5);
                $v_1.attr("orderByValue", $v_3);
                $v_1.attr("isSortIconConfigured", "true");
                $v_1.attr("src", $v_6);
                $v_0.attr("title",
                    String
                    .format("{0}:: {1} {2}", Xrm.Internal.getResourceString("ActivityWallSort_Title"), $v_5, $v_3))
            }
        }
        return $p0
    },
    $W_4: function($p0, $p1) {
        if (!IsNull($p1["entityID"])) this.$1_4.Id = $p1["entityID"];
        if (isNullOrEmptyString(this.$1_4.Id))
            if (Mscrm.Utilities.isTurboForm()) this.raiseTabRefreshEventHandler($p0, $p1);
            else {
                var $v_0 = $find("PrimaryEntity");
                !IsNull($v_0) && !$v_0.get_isNew() && this.raiseTabRefreshEventHandler($p0, $p1)
            }
        else this.raiseTabRefreshEventHandler($p0, $p1)
    },
    raiseTabRefreshEventHandler: function(tabId, parameters) {
        switch (tabId) {
        case "ActivitiesTab":
            this.get_eventManager().raiseEvent(this.$C_4 ? 76 : 80, parameters, this);
            break;
        case "NotesTab":
            if (this.get_eventManager()) {
                parameters["tabName"] = this.getActiveTabId();
                this.get_eventManager().raiseEvent(78, parameters, this)
            }
            break;
        case "ActivityFeedsSystemTab":
        case "ActivityFeedsTab":
            this.$U_4(tabId);
            break;
        case "OneNoteTab":
            if (!IsNull(this.get_eventManager())) {
                parameters["tabName"] = this.$H_4;
                this.get_eventManager().raiseEvent(110, parameters, this)
            }
            break;
        case "ActionHubTab":
            if (!IsNull(this.get_eventManager())) {
                parameters["tabName"] = this.$H_4;
                this.get_eventManager().raiseEvent(115, parameters, this)
            }
            break;
        case "ArticlesTab":
            if ((this.$H_4 !== "ArticlesTab" || !this.$D_3) && this.get_eventManager()) {
                parameters["tabName"] = this.getActiveTabId();
                this.get_eventManager().raiseEvent(111, parameters, this)
            }
            break
        }
    },
    processData: function() { !IsNull(this.$2_4) && !window.IsTurboForm && this.$2_4.processData() },
    get_shouldDeferDataProcessing: function() { return this.$T_4 },
    set_shouldDeferDataProcessing: function(value) {
        this.$T_4 = value;
        !IsNull(this.$2_4) && !window.IsTurboForm && this.$2_4.set_shouldDeferDataProcessing(value);
        return value
    }
};
Mscrm.FormInputControl.Tabs.TabChangingEventArgs
    .registerClass("Mscrm.FormInputControl.Tabs.TabChangingEventArgs", Sys.CancelEventArgs);
Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs
    .registerClass("Mscrm.FormInputControl.Tabs.TabsContainerResizedEventArgs", Sys.EventArgs);
Mscrm.FormInputControl.Tabs.TabsControl.registerClass("Mscrm.FormInputControl.Tabs.TabsControl", Mscrm.CrmUIControl);
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters
    .registerClass("Mscrm.FormInputControl.Tabs.RefreshTabEventParameters");
Mscrm.FormInputControl.Tabs.SfaTabsControl.registerClass("Mscrm.FormInputControl.Tabs.SfaTabsControl",
    Mscrm.FormInputControl.Tabs.TabsControl,
    Mscrm.IDeferredDataProcessingControl);
Mscrm.FormInputControl.Tabs.TabsControl.associatedTabContainerKey = "associatedTabContainer";
Mscrm.FormInputControl.Tabs.TabsControl.activeTabClassName = "active";
Mscrm.FormInputControl.Tabs.TabsControl.tabAttributeId = "tabid";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.tabName = "tabName";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.refreshAll = "refreshAll";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.onlyFocus = "onlyFocus";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityId = "entityID";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityTypeToExpand = "entityTypeToExpand";
Mscrm.FormInputControl.Tabs.RefreshTabEventParameters.entityReference = "entityReference"