Type.registerNamespace("Mscrm");
Mscrm.RequiredElementsMask = function() {};
Mscrm.RequiredElementsMask.prototype = { none: 0, grid: 1, chart: 2, all: 3 };
Mscrm.RequiredElementsMask.registerEnum("Mscrm.RequiredElementsMask", false);
Mscrm.ChartAction = function() {};
Mscrm.ChartAction.prototype = { back: 1, cancelDrillDown: 2, none: 0 };
Mscrm.ChartAction.registerEnum("Mscrm.ChartAction", false);
Mscrm.CompositeControl = function(element) {
    this.$$d_pageLoadHandler = Function.createDelegate(this, this.pageLoadHandler);
    Mscrm.CompositeControl.initializeBase(this, [element])
};
Mscrm.CompositeControl.mouseAction = function(domEvent, action, id) {
    var $v_0 = $find(id), $v_1 = $find($v_0.$1_3 + "_splitTD");
    if (!IsNull($v_1))
        switch (action) {
        case "0":
            $v_1.onMouseMove(domEvent);
            break;
        case "1":
            $v_1.onMouseDown(domEvent);
            break;
        case "2":
            $v_1.onMouseUp(domEvent);
            break;
        default:
            break
        }
};
Mscrm.CompositeControl.glowGridStrip = function(on, controlId) {
    var $v_0 = $find(controlId), $v_1 = Mscrm.CompositeControlUtility.findElementByGridId($v_0.$1_3, "gridStripDiv");
    if (on) $v_1.className = "ms-crm-control-SideStrip-Hovered";
    else $v_1.className = "ms-crm-control-SideStrip"
};
Mscrm.CompositeControl.glowPaneStrip = function(on, controlId) {
    var $v_0 = $find(controlId);
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.CompositeControlUtility.findElementByGridId($v_0.$1_3, "paneStripDiv");
        Mscrm.Utilities.glowBackground(on, $v_1, "ms-crm-control-SideStrip-Hovered", "ms-crm-control-SideStrip")
    }
};
Mscrm.CompositeControl.prototype = {
    $1_3: "crmGrid",
    $N_3: null,
    $2H_3: false,
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!isNullOrEmptyString(this.getParameter("gridid"))) this.$1_3 = this.getParameter("gridid");
        else this.$1_3 = "crmGrid";
        this.$2Q_3();
        (IsNull(Mscrm.PageManager.get_instance()) && this.isChartEnabled() ||
                Mscrm.PageManagerBase.get_pageLoadedEventCalled() ||
                window._IsRefreshForm === "1") &&
            window.setTimeout(this.$$d_pageLoadHandler, 0)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 27:
            sourceComponent.get_id() === this.$1_3 && this.$3b_3(parameters);
            break;
        case 26:
            sourceComponent.get_id() === this.$1_3 && this.$3c_3(parameters);
            break;
        case 28:
            sourceComponent.get_id() === this.$1_3 && this.$3d_3(parameters);
            break;
        case 53:
            if (this.isGridEnabled()) {
                IsNull(this.$N_3) && this.$2Q_3();
                !IsNull(this.$N_3) && this.$N_3.refresh()
            } else if (this.isChartEnabled()) {
                var $v_1 = $find(this.get_paneControlID());
                !IsNull($v_1) && $v_1.refreshVisualizationPane(null)
            }
            break;
        case 70:
            var $v_0 = parameters["id"];
            if (!IsNull($v_0) && $v_0 === this.$1_3)
                if (this.isChartEnabled()) {
                    var $v_2 = $find(this.get_paneControlID());
                    !IsNull($v_2) && $v_2.refreshVisualizationPane(null)
                }
            break;
        case 9:
            sourceComponent === $find(sourceComponent.get_id()) && this.$2v_3();
            break;
        case 74:
            this.$3f_3();
            break;
        case 38:
            var $v_3 = parameters["selectedControl"], $v_4 = $find(this.get_paneControlID());
            if (!IsNull($v_4) && $v_4.isEnlargePaneOpen()) break;
            if (!IsNull($v_3) &&
            ($v_3
                .get_id() ===
                this.get_id() ||
                Mscrm.Utilities.isDescendant($v_3.get_element(), this.get_element()))) {
                this.$3P_3();
                if (!IsNull($v_4)) {
                    $v_4.unRegisterToolBarHandler();
                    $v_4.showToolBar("2", $v_4.fadeInAnimator)
                }
            } else {
                this.$41_3();
                if (!IsNull($v_4)) {
                    $v_4.hideToolBarWithAnimation(null, $v_4.fadeOutAnimator);
                    $v_4.registerToolBarHandler()
                }
            }
            break
        }
        return Mscrm.CrmUIControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    pageLoadHandler: function() { !this.$2H_3 && this.$2v_3() },
    $2v_3: function() {
        if (this.isChartEnabled()) {
            var $v_0 = $find(this.get_paneControlID());
            this.$2Q_3();
            if (!IsNull($v_0)) {
                this.$2H_3 = true;
                if (!IsNull(this.$N_3)) {
                    var $v_1 = this.$N_3.GetParameter("isGridHidden") === "true",
                        $v_2 = this.$N_3.GetParameter("subgridAutoExpand") === "1";
                    if (!$v_2 && $v_1) {
                        var $v_3 = $get(this.$1_3 + "_span");
                        if (!IsNull($v_3)) {
                            var $v_4 = $v_3.parentNode;
                            if (!IsNull($v_4) && $v_4.offsetHeight > 0) {
                                var $v_5 = parseInt(XUI.Html.GetComputedStyle($v_4, "paddingTop"), 10);
                                if (isNaN($v_5) || $v_5 < 0) $v_5 = 0;
                                var $v_6 = parseInt(XUI.Html.GetComputedStyle($v_4, "paddingBottom"), 10);
                                if (isNaN($v_6) || $v_6 < 0) $v_6 = 0;
                                var $v_7 = $v_4.offsetHeight - $v_5 - $v_6;
                                if ($v_7 < 0) $v_7 = 0;
                                $v_3.style.height = $v_7 + "px"
                            }
                        }
                    }
                }
                $v_0.handlePageLoad()
            }
        }
    },
    $3f_3: function() {
        if (this.isChartEnabled() && !Mscrm.SessionInfo.isOutlookClient()) {
            var $v_0 = $find(this.get_paneControlID());
            !IsNull($v_0) && $v_0.isVisualizationPaneOpen() && $v_0.handleRibbonLoad()
        }
    },
    $2Q_3: function() {
        var $v_0 = $find(this.$1_3);
        if (!IsNull($v_0)) this.$N_3 = $v_0
    },
    $3P_3: function() {
        var $v_0 = $get(this.$1_3 + "_span");
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.children[0];
        if (!IsNull($v_1) && Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-Form-SubGrid-Layout")) {
            Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-Form-SubGrid-Layout");
            Sys.UI.DomElement.addCssClass($v_1, "ms-crm-Form-Chart-Layout-Selected");
            var $v_2 = $v_1.getElementsByTagName("tr")[0];
            Sys.UI.DomElement.addCssClass($v_2, "ms-crm-Form-SubGrid-viewRow")
        }
    },
    $41_3: function() {
        var $v_0 = $get(this.$1_3 + "_span").children[0];
        if ($v_0 && Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-Form-Chart-Layout-Selected")) {
            Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-Form-Chart-Layout-Selected");
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-Form-SubGrid-Layout");
            var $v_1 = $v_0.getElementsByTagName("tr")[0];
            Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-Form-SubGrid-viewRow")
        }
    },
    get_paneControlID: function() { return this.$1_3 + "_paneControl" },
    $3b_3: function($p0) {
        var $v_0 = $find(this.get_paneControlID());
        if (!IsNull($v_0)) {
            if (!IsNull($p0["gridRefreshSourceElement"]) && $p0["gridRefreshSourceElement"] === "filter"
            ) $v_0.handleGridRefresh(false);
            else $v_0.handleGridRefresh(true);
            this.$2B_3($v_0)
        }
    },
    $3c_3: function($p0) {
        var $v_0 = $find(this.get_paneControlID());
        if (!IsNull($v_0)) {
            $v_0.handleGridReset($p0);
            this.$2B_3($v_0)
        }
    },
    $3d_3: function($p0) {
        var $v_0 = $find(this.$1_3 + "_splitTD");
        !IsNull($v_0) && $v_0.setViewLabelDisplayName();
        var $v_1 = $find(this.get_paneControlID());
        !IsNull($v_1) && $v_1.handleGridResetComplete($p0)
    },
    $2B_3: function($p0) {
        var $v_0 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "divDataArea");
        if (!IsNull($v_0) &&
            !IsNull($v_0.getAttribute("expandable")) &&
            $v_0.getAttribute("expandable").toString() === "1" &&
            $p0.isVisualizationLayoutLeftRight()) {
            var $v_1 = 0, $v_2 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "crmGridTD");
            if (!IsNull($v_2)) $v_1 = $v_2.clientHeight;
            if (!$v_1) {
                var $v_3 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "paneTD");
                if (!IsNull($v_3)) $v_1 = $v_3.clientHeight
            }
            Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "compositeControl").style.height = $v_1 + "px"
        }
    },
    getParameter: function(name) {
        var $v_0 = $get("compositeControlParams", this.get_element());
        if ($v_0) {
            var $v_1 = $get(name, $v_0);
            if ($v_1) return CrmEncodeDecode.CrmHtmlDecode($v_1.getAttribute("value").toString())
        }
        return null
    },
    isOutlookControlProxy: function() {
        var $v_0 = this.getParameter("isOutlookControlProxy");
        if (!$v_0 || !$v_0.length) return false;
        return Boolean.parse($v_0)
    },
    isChartEnabled: function() {
        var $v_0 = this.getParameter("elementsMask");
        if ((Mscrm.RequiredElements.getRequiredElementsMask($v_0) & 2) === 2) return true;
        return false
    },
    isGridEnabled: function() {
        var $v_0 = this.getParameter("elementsMask");
        if ((Mscrm.RequiredElements.getRequiredElementsMask($v_0) & 1) === 1) return true;
        return this.isOutlookControlProxy()
    },
    getVisualizationPaneParameter: function(parameterName) {
        var $v_0 = this.$1_3 + "_paneControl", $v_1 = $get($v_0, this.get_element());
        if (!IsNull($v_1)) {
            var $v_2 = $get(parameterName, $v_1);
            if (!IsNull($v_2)) return CrmEncodeDecode.CrmHtmlDecode($v_2.getAttribute("value").toString())
        }
        return null
    },
    get_compositeLayout: function() {
        var $v_0 = this.getVisualizationPaneParameter("compositeLayout");
        return IsNull($v_0) ? "0" : $v_0
    },
    enableChartButton: function() {
        if (!this
            .isChartEnabled() ||
            !this.isGridEnabled() ||
            this.getParameter("ispreviewmode") === "true") return false;
        return true
    },
    showVisualization: function(toggleVisualization) {
        var $v_0 = $find(this.get_paneControlID());
        if (IsNull($v_0)) {
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_controls/pane/visualizationpane.js"), true);
            $create(Mscrm.VisualizationPane, null, null, null, $get(this.get_paneControlID()));
            $v_0 = $find(this.get_paneControlID())
        }
        var $v_1 = $v_0;
        if (!IsNull($v_1)) {
            this.$2B_3($v_1);
            if (IsNull(toggleVisualization)) toggleVisualization = true;
            $v_1.showVisualization(toggleVisualization)
        }
    },
    hideVisualization: function() {
        var $v_0 = $find(this.get_paneControlID());
        if (IsNull($v_0)) {
            Mscrm.CrmHeader.setScriptFile(Mscrm.CrmUri.create("/_static/_controls/pane/visualizationpane.js"), true);
            $create(Mscrm.VisualizationPane, null, null, null, $get(this.get_paneControlID()));
            $v_0 = $find(this.get_paneControlID())
        }
        var $v_1 = $v_0;
        if (!IsNull($v_1)) {
            this.$2B_3($v_1);
            $v_1.disableVisualization()
        }
    },
    get_chartPaneMode: function() {
        var $v_0 = "", $v_1 = $find(this.get_paneControlID());
        if (!IsNull($v_1)) $v_0 = $v_1.get_currentVisualizationPaneMode();
        switch ($v_0) {
        case "0":
            return 0;
        case "1":
            return 1;
        case "2":
            return 2;
        case "3":
            return 3;
        default:
            return 4
        }
    },
    handleEntityChange: function(entityLogicalName, selectedVisualizationId) {
        var $v_0 = $find(this.get_paneControlID());
        if (IsNull($v_0))
            try {
                var $v_1 = $get(this.get_paneControlID()), $v_2 = $get("vizPanePrimaryEntityName", $v_1);
                $v_2.setAttribute("value", entityLogicalName)
            } catch ($v_3) {
                if (!($v_3.name === "TypeError")) throw $v_3
            }
        else {
            var $v_4 = $v_0;
            !IsNull($v_4) && $v_4.handleEntityChange(entityLogicalName, selectedVisualizationId)
        }
    },
    get_entityTypeCode: function() { return 0 },
    get_entityTypeName: function() { return null },
    get_recordCount: function() { return 0 },
    get_selectedRecordCount: function() { return 0 },
    get_ribbonContextType: function() { return null },
    get_ribbonRelationshipType: function() { return 0 },
    get_allRecordIds: function() { return [] },
    get_allRecords: function() { return [] },
    get_selectedIds: function() { return [] },
    get_selectedRecords: function() { return [] },
    get_unselectedIds: function() { return [] },
    get_unselectedRecords: function() { return [] }
};
Mscrm.CompositeControlUtility = function() {};
Mscrm.CompositeControlUtility.findElementByGridId = function(gridId, elementId) {
    if (isNullOrEmptyString(gridId)) gridId = "crmGrid";
    return window.document.getElementById(gridId + "_" + elementId)
};
Mscrm.RequiredElements = function() {};
Mscrm.RequiredElements.getRequiredElementsMask = function(mode) {
    if (mode === "Grid") return 1;
    else if (mode === "Chart") return 2;
    else if (mode === "All") return 3;
    else return 0
};
Mscrm.CompositeControlForOutlook = function(element) {
    Mscrm.CompositeControlForOutlook.initializeBase(this, [element])
};
Mscrm.CompositeControlForOutlook.prototype = {
    showVisualization: function() {
        var $v_0 = $find(this.get_paneControlID()), $v_1 = IsNull($v_0) || !$v_0.isVisualizationPaneVisible();
        getOutlookHostedWindow().showVisualization($v_1);
        Mscrm.CompositeControl.prototype.showVisualization.call(this)
    },
    hideVisualization: function() {
        Mscrm.CompositeControl.prototype.hideVisualization.call(this);
        var $v_0 = $find(this.get_paneControlID()), $v_1 = IsNull($v_0) || !$v_0.isVisualizationPaneVisible();
        $v_1 && getOutlookHostedWindow().showVisualization(false)
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 8:
            getOutlookHostedWindow().handleEvent(eventCode, parameters["uri"], sourceComponent.get_id());
            break;
        case 32:
            getOutlookHostedWindow().handleEvent(eventCode, null, null);
            break
        }
        return Mscrm.CompositeControl.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    }
};
Mscrm.CompositeControlResizeControl = function(element) {
    this.$$d_$3K_3 = Function.createDelegate(this, this.$3K_3);
    this.$$d_onMouseUp = Function.createDelegate(this, this.onMouseUp);
    this.$$d_onMouseMove = Function.createDelegate(this, this.onMouseMove);
    this.$$d_$4D_3 = Function.createDelegate(this, this.$4D_3);
    this.$$d_showGrid = Function.createDelegate(this, this.showGrid);
    this.$$d_$35_3 = Function.createDelegate(this, this.$35_3);
    this.$$d_$3w_3 = Function.createDelegate(this, this.$3w_3);
    Mscrm.CompositeControlResizeControl.initializeBase(this, [element])
};
Mscrm.CompositeControlResizeControl.clickSideStrip = function(grid, controlId) {
    var $v_0 = $find(controlId);
    !IsNull($v_0) && $v_0.$4E_3(grid)
};
Mscrm.CompositeControlResizeControl.prototype = {
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$1_3 = !isNullOrEmptyString(this.get_element().getAttribute("gridId"))
            ? this.get_element().getAttribute("gridId")
            : "crmGrid";
        this.$B_3 = !isNullOrEmptyString(this.get_element().getAttribute("layout"))
            ? Number.parseInvariant(this.get_element().getAttribute("layout"))
            : 0;
        this.$3_3 = this.get_element().getAttribute("panesize");
        this.$m_3 = !IsNull(this.get_element().getAttribute("requiredElements"))
            ? this.get_element().getAttribute("requiredElements")
            : "All";
        if (this.$m_3 !== "All") return;
        var $v_0 = null;
        if (!this.$B_3) {
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/verticalgripper.gif"));
            this.get_element().innerHTML = String
                .format('<div class="ms-crm-IE7-Height-Fix-Dummy-Container"> <table cellspacing="0"  cellpadding="0" style="height:100%;cursor:col-resize;"><tr><td> <a style="cursor:col-resize;display:inline-block;" onkeypress="$find(\'{0}_splitTD\').togglePane_keypress(new Sys.UI.DomEvent(event));" href="javascript:void(0);"><img class=\'ms-crm-ImageStrip-verticalGripper {1}\'  style="cursor:col-resize" id="{0}_splitterImage" alt="" src=\'{2}\' /></a></td></tr></table></div>', this.$1_3, $v_0.cssClass, $v_0.source)
        } else {
            $v_0 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/horizontalgripper.gif"));
            this.get_element().innerHTML = String
                .format('<a style="cursor:row-resize;display:block;width:100%;height:100%"  onkeypress="$find(\'{0}_splitTD\').togglePane_keypress(new Sys.UI.DomEvent(event));" href="javascript:void(0);"><img class=\'ms-crm-ImageStrip-horizontalGripper {1}\'  style="position:absolute;top:-1px;left:48%;cursor:row-resize;" id="{0}_splitterImage" alt="" src=\'{2}\' /></a>', this.$1_3, $v_0.cssClass, $v_0.source)
        }
        $addHandler(window, "resize", this.$$d_$3w_3);
        window.setTimeout(this.$$d_$35_3, 0)
    },
    hideVisualizationPane: function() {
        if (this.$3_3 !== "0") {
            this.$2I_3 = this.$3_3;
            if (!IsNull(this.get_$A_3()))
                if (!this.$B_3) this.$10_3 = this.get_$A_3().offsetWidth / this.get_$A_3().parentNode.offsetWidth;
                else this.$10_3 = this.get_$A_3().offsetHeight / this.get_$A_3().parentNode.offsetHeight;
            this.$3_3 = "0";
            this.$2a_3();
            refreshRibbon()
        }
        Mscrm.PageManager.isOutlookProxyPage() && getOutlookHostedWindow().showVisualizationCollapsed(true)
    },
    showVisualizationPane: function() {
        if (IsNull(this.get_$8_3())) return;
        if (this.$3_3 === "0" || this.$3_3 === "4")
            switch (this.$2I_3) {
            case "2":
                this.togglePaneSize();
                break;
            case "3":
                if (!IsNull(this.get_$A_3())) {
                    this.$3_3 = "3";
                    this.$2a_3(this.$2k_3(this.$10_3))
                }
                break;
            default:
                this.$3_3 = "1";
                this.$2a_3();
                break
            }
    },
    disableVisualizationPane: function() {
        this.$3_3 = "4";
        this.$2a_3()
    },
    $3w_3: function($p0) { this.$35_3() },
    $35_3: function() {
        if (this.$3_3 !== "1" && this.$3_3 !== "3") return;
        this.$2a_3(this.$2k_3(this.$10_3))
    },
    $2k_3: function($p0) {
        if (!$p0) $p0 = !this.$B_3 ? .68 : .5;
        return Math.round(!this.$B_3
            ? this.get_element().parentNode.offsetWidth - $p0 * this.get_element().parentNode.offsetWidth
            : this.get_element().parentNode.offsetHeight - $p0 * this.get_element().parentNode.offsetHeight)
    },
    showGrid: function() {
        if (this.$3_3 !== "1") {
            this.$3_3 = "1";
            this.$2a_3();
            this.get_$8_3()._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
                this.$2E_3(this.get_$8_3().checkIfDrilldownMode())
        }
    },
    $4E_3: function($p0) {
        if (Boolean.parse($p0)) window.setTimeout(this.$$d_showGrid, 500);
        else {
            window.setTimeout(this.$$d_$4D_3, 500);
            window.setTimeout(this.get_$8_3().$$d_setFocusOnVizPane, 600)
        }
    },
    $4D_3: function() { this.get_$8_3().showVisualizationPane() },
    togglePaneSize: function() {
        var $v_0 = this.get_$8_3().checkIfDrilldownMode();
        if (this.get_$8_3().$S_3) $v_0 = false;
        if (this.$3_3 !== "2") {
            this.$3_3 = "2";
            this.$2a_3();
            this.setViewLabelDisplayName();
            this.get_$8_3()._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode && this.$2E_3($v_0)
        } else {
            this.$3_3 = "1";
            this.$2a_3();
            this.get_$8_3()._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode && this.$2E_3($v_0)
        }
    },
    $3K_3: function($p0) { !IsNull(this.$4_3) && this.$2M_3(this.$4_3.contentWindow.document) },
    $2M_3: function($p0) {
        var $v_0 = $p0;
        $addHandler($v_0, "mousemove", this.$$d_onMouseMove);
        $addHandler($v_0, "mouseup", this.$$d_onMouseUp)
    },
    $2m_3: function($p0) {
        var $v_0 = $p0;
        $removeHandler($v_0, "mousemove", this.$$d_onMouseMove);
        $removeHandler($v_0, "mouseup", this.$$d_onMouseUp)
    },
    onMouseMove: function(domEvent) {
        if (!this.$1r_3) return;
        else {
            var $v_0 = 0;
            if (!this.$B_3) {
                var $v_1 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "splitTD"),
                    $v_2 = Mscrm.Utilities.getXYPos($v_1, window.LOCID_UI_DIR === "RTL");
                $v_0 = $v_2["x"] + (domEvent.screenX - this.$2T_3)
            } else {
                var $v_3 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "splitTD"),
                    $v_4 = Mscrm.Utilities.getXYPos($v_3, window.LOCID_UI_DIR === "RTL");
                $v_0 = $v_4["y"] + (domEvent.screenY - this.$2U_3)
            }
            this.$36_3($v_0)
        }
    },
    onMouseDown: function(domEvent) {
        var $v_0 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "crmGridTD"),
            $v_1 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "splitTD"),
            $v_2 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "paneTD"),
            $v_3 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "crmGridStrip");
        if (this.$3_3 === "4") return;
        else {
            this.$1r_3 = true;
            if (!this.$B_3) {
                $v_0.style.cursor = "col-resize";
                this.$Q_3 = domEvent.clientX;
                if (window.LOCID_UI_DIR === "RTL") {
                    if ($v_0.style.display === "none") this.$Y_3 = $v_0.parentNode.clientWidth - $v_3.clientWidth;
                    else this.$Y_3 = this.$Q_3 + $v_0.clientWidth - $v_1.clientWidth;
                    this.$M_3 = Math.round($v_0.parentNode.clientWidth * (1 - .68));
                    this.$M_3 = Math.max(this.$M_3, 340)
                } else {
                    if ($v_0.style.display === "none") this.$M_3 = $v_3.offsetWidth + 1;
                    else this.$M_3 = this.$Q_3 - $v_0.clientWidth + $v_1.clientWidth;
                    this.$Y_3 = Math.round(this.$Q_3 +
                        $v_2.clientWidth -
                        Math.max($v_0.parentNode.clientWidth * (1 - .68), 340))
                }
            } else {
                $v_0.style.cursor = "row-resize";
                var $v_5 = Mscrm.Utilities.getXYPos($v_0.parentNode, window.LOCID_UI_DIR === "RTL");
                this.$M_3 = $v_5["y"] + Math.round($v_0.parentNode.clientHeight * (1 - .5));
                this.$Y_3 = $v_5["y"] + $v_0.parentNode.clientHeight;
                this.$Q_3 = domEvent.clientY
            }
            this.$4C_3();
            this.$2T_3 = domEvent.screenX;
            this.$2U_3 = domEvent.screenY;
            this.$2M_3(window.document);
            var $v_4 = $get(this.$1_3 + "_vizIframe");
            !IsNull($v_4) && this.$2M_3($v_4.contentWindow.document);
            domEvent.preventDefault()
        }
    },
    onMouseUp: function(domEvent) {
        this.$2m_3(window.document);
        var $v_0 = $get(this.$1_3 + "_vizIframe");
        !IsNull($v_0) && this.$2m_3($v_0.contentWindow.document);
        var $v_1 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "crmGridTD");
        if (this.$1r_3)
            if (this.$3_3 === "4") return;
            else {
                this.$1r_3 = false;
                $v_1.style.cursor = "default";
                var $v_2 = 0;
                if (!this.$B_3) $v_2 = this.$4_3.offsetLeft + this.$4_3.offsetWidth;
                else $v_2 = this.$4_3.offsetTop + this.$4_3.offsetHeight;
                this.$3h_3();
                if (this.$Q_3 >= $v_2 - 10 && this.$Q_3 <= $v_2 + 10) return;
                var $v_3 = 0;
                if (!this.$B_3) $v_3 = window.LOCID_UI_DIR === "RTL" ? this.$Y_3 : this.$M_3;
                var $v_4 = 0;
                if ($v_2 >= this.$M_3 && $v_2 <= this.$Y_3) $v_4 = $v_2 - $v_3;
                else if ($v_2 < this.$M_3) $v_4 = this.$M_3 - $v_3;
                else $v_4 = this.$Y_3 - $v_3;
                if (!this.$B_3 && window.LOCID_UI_DIR === "RTL") $v_4 = -$v_4;
                this.$46_3($v_4)
            }
    },
    $4C_3: function() {
        IsNull(this.$4_3) && this.$3M_3();
        var $v_0 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "splitTD"),
            $v_1 = Mscrm.Utilities.getXYPos($v_0, window.LOCID_UI_DIR === "RTL");
        this.$4_3.style.top = $v_1["y"].toString() + "px";
        this.$4_3.style.left = $v_1["x"].toString() + "px";
        this.$4_3.style.width = $v_0.offsetWidth.toString() + "px";
        this.$4_3.style.height = $v_0.offsetHeight.toString() + "px";
        this.$36_3(this.$Q_3);
        this.$4_3.style.display = "inline"
    },
    $36_3: function($p0) {
        if (!IsNull(this.$4_3)) {
            var $v_0 = $p0;
            if ($p0 < this.$M_3) $v_0 = this.$M_3;
            else if ($p0 > this.$Y_3) $v_0 = this.$Y_3;
            if (!this.$B_3) this.$4_3.style.left = $v_0.toString() + "px";
            else this.$4_3.style.top = $v_0.toString() + "px"
        }
    },
    $3h_3: function() {
        if (!IsNull(this.$4_3)) {
            this.$4_3.style.display = "none";
            this.$4_3.style.height = "";
            this.$4_3.style.width = "";
            this.$4_3.style.left = "";
            this.$4_3.style.top = ""
        }
    },
    $46_3: function($p0) {
        if (this.$Q_3 >= $p0 - 10 && this.$Q_3 <= $p0 + 10) return;
        var $v_0 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "crmGridTD");
        if (!this.$B_3) {
            if ($p0 <= 30) {
                this.$3_3 !== "2" && this.togglePaneSize();
                return
            }
            this.$10_3 = $p0 / this.get_$A_3().parentNode.offsetWidth
        } else {
            if ($v_0.parentNode.clientHeight - $p0 <= 30) {
                this.$3_3 !== "2" && this.togglePaneSize();
                return
            }
            $p0 = $v_0.clientHeight + (this.$Q_3 - $p0);
            if ($p0 < 0) $p0 = 0;
            this.$10_3 = $p0 / this.get_$A_3().parentNode.offsetHeight
        }
        this.$3_3 = "3";
        this.$2a_3(!this.$B_3
            ? this.get_$D_3().parentNode.offsetWidth - $p0
            : this.get_$D_3().parentNode.offsetHeight - $p0);
        this.$2S_3();
        this.get_$8_3()._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
            this.$2E_3(this.get_$8_3().checkIfDrilldownMode())
    },
    $3M_3: function() {
        if (IsNull(this.$4_3)) {
            var $v_0 = document.createElement("iframe");
            $v_0.id = "paneSplitter_backFrame";
            $v_0.style.position = "fixed";
            $v_0.style.display = "none";
            $v_0.frameBorder = "0";
            $v_0.style.zIndex = 99;
            var $v_1 = Mscrm.CrmUri.create("/_static/PaneSplitter.htm");
            $v_0.src = $v_1.toString();
            document.body.appendChild($v_0);
            this.$4_3 = $get("paneSplitter_backFrame");
            $addHandler(this.$4_3.contentWindow, "load", this.$$d_$3K_3)
        }
    },
    $2E_3: function($p0) {
        if (IsNull(this.get_$8_3())) return;
        this.get_$8_3().loadVisualizationsForCurrentViewIfNotLoaded();
        var $v_0 = this.get_$8_3()._useCachedData;
        if (!$p0) this.get_$8_3()._useCachedData = true;
        try {
            this.get_$8_3().cancelDrillDownAndLoadVisualization($p0)
        } finally {
            this.get_$8_3()._useCachedData = $v_0
        }
    },
    setViewLabelDisplayName: function() {
        var $v_0 = Mscrm.CompositeControlUtility.findElementByGridId(this.$1_3, "GridStripLabelMessage");
        if (!IsNull(this.get_$1X_3()) && !IsNull($v_0) && this.$3_3 === "2") {
            var $v_1 = String.format(window.LOCID_VP_COLLAPSED_VIEW_NAME,
                this.get_$1X_3().get_entityDisplayPluralName(),
                this.get_$1X_3().get_viewTitle());
            $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode($v_1);
            $v_0.title = $v_1
        }
    },
    $3S_3: function() {
        if (this.$3_3 === "3") this.$3_3 = "1";
        var $v_0 = Mscrm.VisualizationActions
            .createVizParamsDictionary(this.$3Z_3(),
                this.get_$8_3().get_visualizationId(),
                this.get_$8_3().get_visualizationType().toString(),
                this.$3_3.toString(),
                this.get_$8_3().getParameter("vizPanePrimaryEntityName"),
                this.get_$8_3().getParameter("IsDashboardComponent"));
        this.get_$8_3().set_paneSize(this.$3_3);
        Mscrm.VisualizationActions.fireEventForStickyVisualization($v_0)
    },
    $3Z_3: function() {
        if (this.$B_3 === 1) return "1";
        else return "0"
    },
    $2a_3: function($p0) {
        if (IsNull($p0)) $p0 = 0;
        var $v_0 = 3;
        if (window.UseTabletExperience) $v_0 = 0;
        var $v_1 = !this.$B_3 ? this.get_element().parentNode.offsetWidth : this.get_element().parentNode.offsetHeight;
        switch (this.$3_3) {
        case "3":
        case "1":
            this.$Z_3(this.get_$D_3(), "pane");
            this.$Z_3(this.get_$33_3(), "PaneSS");
            this.$Z_3(this.get_$A_3(), "grid");
            this.$Z_3(this.get_$2l_3(), "GridSS");
            this.$Z_3(this.get_element(), "splitter");
            Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-CC-splitter");
            if (this.$m_3 === "All")
                if (!this.$B_3) {
                    if (!$p0) $p0 = Math.round($v_1 - $v_1 * .68);
                    $p0 = this.get_$8_3().isWordCloudWebResourceVisualization()
                        ? Math.max($p0, 450)
                        : Math.max($p0, 340);
                    if (window.LOCID_UI_DIR !== "RTL") {
                        this.get_$A_3().style.right = $p0.toString() + "px";
                        this.get_$A_3().style.width = "auto";
                        this.get_$A_3().style.left = "";
                        this.get_$D_3().style.left = "";
                        this.get_$D_3().style.right = "0px";
                        this.get_$D_3().style.width = ($p0 - $v_0).toString() + "px";
                        this.get_element().style.right = ($p0 - $v_0).toString() + "px"
                    } else {
                        this.get_$A_3().style.left = $p0.toString() + "px";
                        this.get_$A_3().style.width = "auto";
                        this.get_$A_3().style.right = "";
                        this.get_$D_3().style.right = "";
                        this.get_$D_3().style.left = "0px";
                        this.get_$D_3().style.width = ($p0 - $v_0).toString() + "px";
                        this.get_element().style.left = ($p0 - $v_0).toString() + "px"
                    }
                } else {
                    if (!$p0) $p0 = Math.round($v_1 - $v_1 * .5);
                    this.get_$A_3().style.top = $p0.toString() + "px";
                    this.get_$A_3().style.bottom = "";
                    this.get_$D_3().style.bottom = "";
                    this.get_$D_3().style.top = "0px";
                    this.get_$D_3().style.height = ($p0 - $v_0).toString() + "px";
                    this.get_element().style.top = ($p0 - $v_0).toString() + "px"
                }
            this.$2S_3();
            break;
        case "0":
        case "2":
        default:
            if (this.$m_3 === "All")
                if (!this.$B_3) {
                    this.get_$D_3().style.left = "";
                    this.get_$D_3().style.right = "";
                    this.get_$A_3().style.left = "";
                    this.get_$A_3().style.right = "";
                    this.get_$D_3().style.width = "";
                    if (window.LOCID_UI_DIR !== "RTL") this.get_element().style.right = "";
                    else this.get_element().style.left = ""
                } else {
                    this.get_$D_3().style.bottom = "";
                    this.get_$D_3().style.top = "";
                    this.get_$A_3().style.bottom = "";
                    this.get_$A_3().style.top = "";
                    this.get_$D_3().style.height = "";
                    this.get_element().style.top = ""
                }
            this.$Z_3(this.get_$D_3(), "pane");
            this.$Z_3(this.get_$33_3(), "PaneSS");
            this.$Z_3(this.get_$A_3(), "grid");
            this.$Z_3(this.get_$2l_3(), "GridSS");
            this.$Z_3(this.get_element(), "splitter");
            Sys.UI.DomElement.addCssClass(this.get_element(), "ms-crm-CC-splitter");
            this.$2S_3();
            break
        }
        this.$3S_3()
    },
    $Z_3: function($p0, $p1) {
        if (IsNull($p0)) return;
        var $v_0 = !this.$B_3 ? "LR" : "TB";
        $p0.className = String.format("ms-crm-CC-{0}-{1}-{2}-{3}", $p1, this.$m_3, this.$3_3, $v_0)
    },
    $2S_3: function() {
        !IsNull(this.get_$1X_3()) && !IsNull(this.get_$1X_3().HandleGridResize) && this.get_$1X_3().HandleGridResize()
    },
    get_$1X_3: function() {
        if (IsNull(this.$N_3)) this.$N_3 = $find(this.$1_3);
        return this.$N_3
    },
    get_$8_3: function() {
        if (IsNull(this.$21_3)) this.$21_3 = $find(this.$1_3 + "_paneControl");
        return this.$21_3
    },
    get_$2l_3: function() {
        if (IsNull(this.$1x_3)) this.$1x_3 = $get(this.$1_3 + "_crmGridStrip");
        return this.$1x_3
    },
    get_$A_3: function() {
        if (IsNull(this.$1t_3)) this.$1t_3 = $get(this.$1_3 + "_crmGridTD");
        return this.$1t_3
    },
    get_$D_3: function() {
        if (IsNull(this.$20_3)) this.$20_3 = $get(this.$1_3 + "_paneTD");
        return this.$20_3
    },
    get_$33_3: function() {
        if (IsNull(this.$22_3)) this.$22_3 = $get(this.$1_3 + "_crmVisualizationPaneStrip");
        return this.$22_3
    },
    get_mode: function() { return this.$3_3 },
    set_mode: function(value) {
        this.$3_3 = value;
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        !IsNull(this.$m_3) && this.$m_3 === "All" && $removeHandler(window, "resize", this.$$d_$3w_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $B_3: 0,
    $1t_3: null,
    $20_3: null,
    $22_3: null,
    $1x_3: null,
    $3_3: null,
    $2I_3: null,
    $10_3: 0,
    $21_3: null,
    $4_3: null,
    $N_3: null,
    $1_3: "crmGrid",
    $1r_3: false,
    $Q_3: 0,
    $M_3: 1,
    $Y_3: 800,
    $2T_3: 0,
    $2U_3: 0,
    $m_3: "All"
};
Mscrm.VisualizationPane = function(element) {
    this.$$d_hideToolBarHandler = Function.createDelegate(this, this.hideToolBarHandler);
    this.$$d_showToolBarHandler = Function.createDelegate(this, this.showToolBarHandler);
    this.$$d_attachResizeHandler = Function.createDelegate(this, this.attachResizeHandler);
    this.$$d_fadeOut = Function.createDelegate(this, this.fadeOut);
    this.$$d_fadeIn = Function.createDelegate(this, this.fadeIn);
    this.$$d_enlargePaneKeyUpHandler = Function.createDelegate(this, this.enlargePaneKeyUpHandler);
    this.$$d_reEnlargePaneHandler = Function.createDelegate(this, this.reEnlargePaneHandler);
    this.$$d_$3Q_3 = Function.createDelegate(this, this.$3Q_3);
    this.$$d_$3A_3 = Function.createDelegate(this, this.$3A_3);
    this.$$d_$3R_3 = Function.createDelegate(this, this.$3R_3);
    this.$$d_HandleVisualizationChange = Function.createDelegate(this, this.HandleVisualizationChange);
    this.$$d_onClickHandler = Function.createDelegate(this, this.onClickHandler);
    this.$$d_handleWindowBeforeUnload = Function.createDelegate(this, this.handleWindowBeforeUnload);
    this.$$d_$3e_3 = Function.createDelegate(this, this.$3e_3);
    this.$$d_$3r_3 = Function.createDelegate(this, this.$3r_3);
    this.$$d_setFocusOnVizPane = Function.createDelegate(this, this.setFocusOnVizPane);
    this.topImgFadeIntervalId = -1;
    this.bottomImgFadeIntervalId = -1;
    this.$5_3 = {};
    this.$26_3 = [];
    this.$6_3 = {};
    this.$H_3 = {};
    this.$L_3 = -1;
    this.vizSubmitParams = {};
    this.compressedParametersList = [];
    Mscrm.VisualizationPane.initializeBase(this, [element])
};
Mscrm.VisualizationPane.enableDisableElement = function(enable, elementId) {
    var $v_0 = $get(elementId);
    if (!IsNull($v_0)) {
        $v_0.disabled = !enable;
        Mscrm.VisualizationPane.enableDisableIcon(enable, $v_0)
    }
};
Mscrm.VisualizationPane.enableDisableAddButtons = function(enable) {
    Mscrm.VisualizationPane.enableDisableElement(enable, "addYBtn");
    Mscrm.VisualizationPane.enableDisableElement(enable, "addXBtn")
};
Mscrm.VisualizationPane.enableDisableIcon = function(enable, element) {
    if (!IsNull(element)) {
        var $v_0 = element.getElementsByTagName("img")[0],
            $v_1 = Mscrm.VisualizationPane
                .addOrRemoveSuffixInPath($v_0.getAttribute("imgBase").toString(), "_dis", !enable);
        Mscrm.ImageStrip.changeImage($v_0, $v_1);
        $v_0.setAttribute("imgBase", $v_1)
    }
};
Mscrm.VisualizationPane.addOrRemoveSuffixInPath = function(sourcePath, suffix, conditionToAdd) {
    var $v_0 = ".png", $v_1 = sourcePath.substring(0, sourcePath.length - $v_0.length);
    if (conditionToAdd) {
        if (!$v_1.endsWith(suffix)) return $v_1 + suffix + $v_0
    } else if ($v_1.endsWith(suffix)) return $v_1.substring(0, $v_1.length - suffix.length) + $v_0;
    return sourcePath
};
Mscrm.VisualizationPane.$0 = function($p0, $p1) { return $p0 + "_" + $p1 };
Mscrm.VisualizationPane.$K = function($p0) {
    return String.format("/_imgs/visualization/designer/{0}chart/{0}chart.png", $p0)
};
Mscrm.VisualizationPane.onSystemDesignerViewChange = function() {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0) && $v_0.get_isSystemDesigner()) {
        $v_0.setParameter("vizPaneViewId", $get("visualizationDesignerViewSelector").value);
        $v_0.checkAndPreviewChart(false)
    }
};
Mscrm.VisualizationPane.onHoverAddButton = function(sourceElement, isHovered) {
    sourceElement.className = isHovered && !sourceElement.disabled
        ? "ms-crm-AddSeries-Button-hover"
        : "ms-crm-AddSeries-Button"
};
Mscrm.VisualizationPane.hideInlineActionMenus = function() {
    Mscrm.VisualizationPane.hideChartTypeBox();
    Mscrm.VisualizationPane.hideTopBottomBox()
};
Mscrm.VisualizationPane.displayChartTypeBox = function(domEvent) {
    Mscrm.VisualizationPane.hideTopBottomBox();
    var $v_0 = $get("chartTypeBox");
    if (!IsNull($v_0)) {
        Mscrm.VisualizationPane.$2f(domEvent, $v_0);
        if ($v_0.style.display === "none") $v_0.style.display = "block"
    }
};
Mscrm.VisualizationPane.hideChartTypeBox = function() {
    var $v_0 = $get("chartTypeBox");
    if (!IsNull($v_0)) {
        $v_0.style.display = "none";
        for (var $v_1 = $v_0.getElementsByTagName("img"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
            var $v_3 = $v_1[$v_2],
                $v_4 = Mscrm.VisualizationPane.$2R($v_3),
                $v_5 = false,
                $v_6 = $find("crmGrid_paneControl");
            if (!IsNull($v_6)) {
                $v_5 = $v_6.canApplyChartType($v_4);
                if ($v_3.disabled !== !$v_5) {
                    $v_3.disabled = !$v_5;
                    var $v_7 = $v_3,
                        $v_8 = Mscrm.VisualizationPane
                            .addOrRemoveSuffixInPath($v_7.getAttribute("imgBase").toString(), "_dis", !$v_5);
                    Mscrm.ImageStrip.changeImage($v_7, $v_8);
                    $v_7.setAttribute("imgBase", $v_8)
                }
            }
        }
    }
};
Mscrm.VisualizationPane.$2f = function($p0, $p1) {
    var $v_0 = $p0.target, $v_1 = $v_0.offsetParent.parentNode;
    $p1.style.display = "block";
    var $v_2 = $p1.offsetParent,
        $v_3 = $v_2.offsetWidth,
        $v_4 = -$v_1.offsetTop + $v_0.offsetHeight + $v_0.parentNode.offsetTop;
    $p1.style.top = $v_4.toString() + "px";
    if (Mscrm.Utilities.get_isLeftToRight()) {
        var $v_5 = $v_3 - ($v_0.offsetLeft + $v_0.offsetWidth);
        $p1.style.right = $v_5.toString() + "px"
    } else $p1.style.left = $v_0.offsetLeft.toString() + "px"
};
Mscrm.VisualizationPane.cancelClickEvent = function(domEvent) {
    if (!IsNull(domEvent)) {
        domEvent.preventDefault();
        domEvent.stopPropagation()
    }
};
Mscrm.VisualizationPane.handleKeyPressOnChartTypeMenu = function(domEvent) {
    domEvent.keyCode === 27 && Mscrm.VisualizationPane.hideChartTypeBox()
};
Mscrm.VisualizationPane.selectChartType = function(domEvent) {
    Mscrm.VisualizationPane.cancelClickEvent(domEvent);
    var $v_0 = domEvent.target;
    if (!IsNull($v_0) && !$v_0.disabled) {
        Mscrm.VisualizationPane.applyChartTypeInline(Mscrm.VisualizationPane.$2R($v_0));
        Mscrm.VisualizationPane.hideChartTypeBox()
    }
};
Mscrm.VisualizationPane.$2R = function($p0) { return $p0.id.split("Type")[0] };
Mscrm.VisualizationPane.hoverButton = function(domEvent, hover) {
    var $v_0 = domEvent.target, $v_1 = $v_0;
    if (IsNull($v_1.getAttribute("imgBase"))) $v_1 = $v_0.getElementsByTagName("img")[0];
    var $v_2 = $v_1.getAttribute("imgBase").toString().toLowerCase();
    if (!(Mscrm.Utilities.isDisabled($v_0) || $v_2.indexOf("_dis".toLowerCase(), $v_2.indexOf(".") - 4) !== -1)) {
        var $v_3 = Mscrm.VisualizationPane
            .addOrRemoveSuffixInPath($v_1.getAttribute("imgBase").toString(), "_sel", hover);
        Mscrm.ImageStrip.changeImage($v_1, $v_3);
        $v_1.setAttribute("imgBase", $v_3)
    }
};
Mscrm.VisualizationPane.applyChartTypeInline = function(chartType) {
    var $v_0 = $find("crmGrid_paneControl");
    !IsNull($v_0) && $v_0.applyChartType(chartType, true)
};
Mscrm.VisualizationPane.displayTopBottomBox = function(domEvent) {
    Mscrm.VisualizationPane.hideChartTypeBox();
    var $v_0 = $get("topBottomBox");
    if (!IsNull($v_0)) {
        Mscrm.VisualizationPane.$2f(domEvent, $v_0);
        if ($v_0.style.display === "none") $v_0.style.display = "block"
    }
};
Mscrm.VisualizationPane.hideTopBottomBox = function() {
    var $v_0 = $get("topBottomBox");
    if (!IsNull($v_0)) $v_0.style.display = "none"
};
Mscrm.VisualizationPane.handleKeyPressOnTopBottomMenu = function(domEvent) {
    domEvent.keyCode === 27 && Mscrm.VisualizationPane.hideTopBottomBox()
};
Mscrm.VisualizationPane.selectTopBottom = function(domEvent) {
    Mscrm.VisualizationPane.cancelClickEvent(domEvent);
    var $v_0 = domEvent.target;
    if (!IsNull($v_0) && !$v_0.disabled) {
        var $v_1 = Mscrm.VisualizationPane.$2t($v_0);
        if ($v_1.toUpperCase() === "CLEAR") {
            var $v_2 = $find("crmGrid_paneControl");
            !IsNull($v_2) && $v_2.clearTopBottom();
            Mscrm.VisualizationPane.hideTopBottomBox()
        }
    }
};
Mscrm.VisualizationPane.$2t = function($p0) { return $p0.id.split("Rules")[0] };
Mscrm.VisualizationPane.applyTopBottomInline = function(topBottomValue) {
    var $v_0 = $find("crmGrid_paneControl");
    if (!IsNull($v_0)) {
        var $v_1 = topBottomValue.substr(0, topBottomValue.length - 1),
            $v_2 = $v_1.toUpperCase() === "TOP",
            $v_3 = topBottomValue.substr(topBottomValue.length - 1, 1);
        switch ($v_3) {
        case "x":
            $v_0.appendTopBottomCustom($v_2, true);
            break;
        case "3":
        case "5":
            $v_0.appendTopBottom($v_3, $v_2, true, true);
            break;
        default:
            break
        }
    }
};
Mscrm.VisualizationPane.prototype = {
    getParameter: function(name) {
        var $v_0 = this.getPaneChildElement(name);
        if (!IsNull($v_0) && !IsNull($v_0.getAttribute("value"))
        ) return CrmEncodeDecode.CrmHtmlDecode($v_0.getAttribute("value").toString());
        return null
    },
    setParameter: function(name, value) {
        var $v_0 = this.getPaneChildElement(name);
        if (!IsNull($v_0)) $v_0.setAttribute("value", CrmEncodeDecode.CrmHtmlAttributeEncode(value));
        else {
            var $v_1 = this.getPaneChildElement("divPaneParams"), $v_2 = document.createElement("div");
            $v_2.id = name;
            $v_2.setAttribute("value", CrmEncodeDecode.CrmHtmlAttributeEncode(value));
            $v_1.appendChild($v_2)
        }
    },
    getSelectedVisualization: function() {
        if (!IsNull(this.visualizationMenu)) {
            var $v_0 = XUI.Xml.SelectNodes(this.visualizationMenu.get_menuXml(), "//MenuItem", null),
                $v_1 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                    "//MenuItem[@isselected='true']",
                    null);
            if (!IsNull($v_1)) return XUI.Xml.GetText($v_1.attributes.getNamedItem("id"));
            else if ($v_0.length > 0) {
                this.set_visualizationId(XUI.Xml.GetText($v_0[1].attributes.getNamedItem("id")));
                this.set_visualizationType(Number
                    .parseInvariant(XUI.Xml.GetText($v_0[1].attributes.getNamedItem("type"))));
                this.visualizationMenu.setAttributeUtil($v_0[1], "isselected", "true");
                return XUI.Xml.GetText($v_0[1].attributes.getNamedItem("id"))
            }
        }
        return ""
    },
    isVisualizationLayoutLeftRight: function() {
        var $v_0 = this.getParameter("compositeLayout");
        if (IsNull($v_0) || $v_0 === "0") return true;
        else return false
    },
    getSelectedVisualizationDisplayName: function() {
        if (!IsNull(this.visualizationMenu)) {
            var $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@isselected='true']",
                null);
            if (!IsNull($v_0)) return XUI.Xml.GetText($v_0.attributes.getNamedItem("display"))
        }
        return window.LOCID_CP_NOVISUALIZATION
    },
    getPaneChildElement: function(id) {
        if (id === "vizIframe" || id === "vizForm") {
            var $v_0 = isNullOrEmptyString(this._gridId) ? "crmGrid" : this._gridId;
            return window.document.getElementById($v_0 + "_" + id)
        } else return $get(id, this.get_element())
    },
    get_elementId: function() { return this.get_element().id },
    fireEventForStickyVisualization: function() {
        var $v_0 = this.get_currentVisualizationPaneMode();
        if ($v_0 === "3") $v_0 = "1";
        var $v_1 = Mscrm.VisualizationActions
            .createVizParamsDictionary(this.getParameter("compositeLayout"),
                this.get_visualizationId(),
                this.get_visualizationType().toString(),
                $v_0,
                this.getParameter("vizPanePrimaryEntityName"),
                this.getParameter("IsDashboardComponent"));
        Mscrm.VisualizationActions.fireEventForStickyVisualization($v_1)
    },
    registerControlForXrmUI: function(childControlType, parentId) {
        var $v_0 = {};
        $v_0["type"] = childControlType;
        $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(this.getPaneChildElement(childControlType), $v_0)
    },
    getDivInIFrame: function(divId) {
        var $v_0 = this.getPaneChildElement("vizIframe");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.contentWindow.document.getElementById(divId);
            if (!IsNull($v_1)) return $v_1
        }
        return null
    },
    addFormParameter: function(formName, inputName, value) {
        var $v_0 = this.getPaneChildElement(formName), $v_1 = $get(inputName, $v_0);
        if (IsNull($v_1)) {
            var $v_2 = document.createElement("input");
            $v_2.type = "hidden";
            $v_2.name = inputName;
            $v_2.id = inputName;
            if (IsNull(value)) value = "";
            $v_2.value = value;
            $v_0.appendChild($v_2)
        } else $v_1.value = value
    },
    addSubmitParameters: function(key, value, isCompressed) {
        if (isNullOrEmptyString(value)) return;
        if (IsNull(isCompressed)) isCompressed = false;
        this.vizSubmitParams[key] = value;
        isCompressed && Array.add(this.compressedParametersList, key)
    },
    cancelEvent: function(domEvent) {
        if (!IsNull(domEvent)) {
            domEvent.preventDefault();
            domEvent.stopPropagation()
        }
    },
    buildVisualizationXml: function() {
        var $v_0 = "<{0}{1}>{2}</{0}>", $v_1 = new Sys.StringBuilder("<vizXml>"), $$dict_5 = this.vizSubmitParams;
        for (var $$key_6 in $$dict_5) {
            var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] },
                $v_3 = !$v_2.value ? "" : $v_2.value,
                $v_4 = Array.contains(this.compressedParametersList, $v_2.key) ? " isCompressed='true'" : "";
            $v_1.append(String.format($v_0,
                CrmEncodeDecode.CrmXmlEncode($v_2.key),
                $v_4,
                CrmEncodeDecode.CrmXmlEncode($v_3)))
        }
        $v_1.append("</vizXml>");
        return $v_1.toString()
    },
    getIframeWin: function() {
        var $v_0 = this.$1q_3();
        if (!IsNull($v_0) && !IsNull($v_0.contentWindow)) return $v_0.contentWindow;
        return null
    },
    get_dashboardToolBarContainerId: function() { return this._gridId + "_d" },
    _paneMode: 0,
    $y_3: false,
    $1N_3: false,
    $i_3: "-1",
    _isComplexChart: false,
    _useCachedData: false,
    autoFillTitle: true,
    $I_3: false,
    _currentSeriesAxisLabel: null,
    _currentCategoryAxisLabel: null,
    $J_3: "LineColumnArea",
    _currentDataXml: null,
    _currentPresentationXml: null,
    $2A_3: null,
    $28_3: null,
    $29_3: null,
    $27_3: null,
    $1S_3: null,
    $1o_3: null,
    $1T_3: null,
    $1p_3: null,
    $j_3: false,
    $G_3: "-1",
    $T_3: "-1",
    $2_3: 10,
    $x_3: null,
    $1l_3: null,
    $1g_3: null,
    allAggregateHtml: "",
    countAggregateHtml: "",
    get_counter: function() { return this.$2_3 },
    set_counter: function(value) {
        this.$2_3 = value;
        return value
    },
    get_chartTypesDictionary: function() { return this.$5_3 },
    get_firstSeriesId: function() {
        var $v_0 = "-1", $v_1 = this.$2s_3();
        if ($v_1 && $v_1.length > 0) $v_0 = $v_1[0];
        return $v_0
    },
    $3o_3: function($p0) { return $p0.indexOf("tdyAttributeSelector_") !== -1 },
    $3m_3: function($p0) { return $p0.indexOf("tdxAttributeSelector_") !== -1 },
    $3V_3: function() { return this.$2r_3(true) },
    $2s_3: function() { return this.$2r_3(false) },
    $2r_3: function($p0) {
        var $v_0 = [], $v_1 = this.getPaneChildElement("designerAttributesSelectorTable");
        if (!IsNull($v_1)) {
            var $v_2 = 0, $v_3 = XUI.Html.DomUtils.GetFirstChild($v_1);
            while (!IsNull($v_3)) {
                if ($p0 && this.$3m_3($v_3.id) || !$p0 && this.$3o_3($v_3.id)) {
                    var $v_4 = this.$X_3($v_3.id).toString();
                    $v_0[$v_2] = $v_4;
                    ++$v_2
                }
                $v_3 = XUI.Html.DomUtils.GetNextSibling($v_3)
            }
        }
        return $v_0
    },
    get_currentChartTypeGroup: function() { return this.$J_3 },
    set_currentChartTypeGroup: function(value) {
        this.$J_3 = value;
        return value
    },
    get_selectedSeriesName: function() { return this.generateSeriesLabel(Number.parseInvariant(this.$G_3)) },
    get_seriesCount: function() {
        var $v_0 = 0, $$dict_2 = this.$6_3;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0++
        }
        return $v_0
    },
    get_categoryCount: function() {
        var $v_0 = 0, $$dict_2 = this.$H_3;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            $v_0++
        }
        return $v_0
    },
    get_seriesSelectedForRibbonActions: function() { return this.$G_3 },
    set_seriesSelectedForRibbonActions: function(value) {
        this.$G_3 = value;
        return value
    },
    get_seriesSelectedForInlineActions: function() { return this.$T_3 },
    set_seriesSelectedForInlineActions: function(value) {
        this.$T_3 = value;
        return value
    },
    get_paneMode: function() { return this._paneMode },
    set_paneMode: function(value) {
        this._paneMode = value;
        return value
    },
    get_isComplexChart: function() { return this._isComplexChart },
    get_isSystemDesigner: function() { return this.getParameter("isSystemDesigner") === "1" },
    get_isChartDirty: function() { return this.$I_3 },
    set_isChartDirty: function(value) {
        this.$I_3 = value;
        return value
    },
    switchMode: function(paneRenderingMode) {
        var $v_0 = this.getPaneChildElement("contentSpan"), $v_1 = this._gridId + "_paneControl";
        this.disableEmptyMessageLabels($v_0);
        Mscrm.PageManager.isOutlookProxyPage() &&
            getOutlookHostedWindow()
            .switchVisualizationPaneMode(paneRenderingMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode);
        if (paneRenderingMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
            this.showVisualizationPane(true);
            this.clearContentSpan($v_0);
            this._paneMode = paneRenderingMode;
            window.setTimeout("$find('" + $v_1 + "').switchModeAsync(" + paneRenderingMode + ")", 0)
        } else {
            if (!IsNull(this.$x_3)) {
                this.$x_3.dispose();
                this.$x_3 = null
            }
            if (!IsNull(this.$1l_3)) {
                this.$1l_3.dispose();
                this.$1l_3 = null
            }
            if (!IsNull(this.$1g_3)) {
                this.$1g_3.dispose();
                this.$1g_3 = null
            }
            this.clearContentSpan($v_0);
            this.$45_3();
            var $v_2 = this.getPaneChildElement("headerRowTR");
            $v_2.style.display = "";
            this.updateFooterMessage("");
            var $v_3 = this.getPaneChildElement("contentContainer");
            $v_3.style.top = $v_2.offsetHeight.toString() + "px";
            this._paneMode = Mscrm.VisualizationPaneRenderingModes.RuntimeMode;
            this.refreshCurrentVisualizationIdAndType();
            refreshRibbon()
        }
    },
    $45_3: function() {
        this.$2Z_3();
        this.$J_3 = "LineColumnArea";
        this._currentDataXml = null;
        this._currentPresentationXml = null;
        this.$2A_3 = null;
        this.$28_3 = null;
        this.$29_3 = null;
        this.$27_3 = null;
        this.$6_3 = {};
        this.$H_3 = {};
        this.$1S_3 = null;
        this.$1o_3 = null;
        this.$1T_3 = "";
        this.$1p_3 = "";
        this.$j_3 = false;
        this.$G_3 = "-1";
        this.$T_3 = "-1";
        this.allAggregateHtml = "";
        this.countAggregateHtml = "";
        this.$2_3 = 10
    },
    switchModeAsync: function(paneRenderingMode) {
        var $v_0 = this.getPaneChildElement("contentSpan"),
            $v_1 = 1112,
            $v_2 = new RemoteCommand("PaneWebService", "SwitchMode", null);
        $v_2.SetParameter("paneMode", paneRenderingMode.toString());
        if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode) {
            $v_2.SetParameter("vizId", this.get_visualizationId());
            $v_1 = this.get_visualizationType()
        }
        $v_2.SetParameter("vizPanePrimaryEntityName", this.getParameter("vizPanePrimaryEntityName"));
        $v_2.SetParameter("vizPaneViewType", this.getParameter("vizPaneViewType"));
        $v_2.SetParameter("vizPaneViewId", this.getParameter("vizPaneViewId"));
        $v_2.SetParameter("vizType", $v_1);
        $v_2.SetParameter("paneLayout", this.getParameter("compositeLayout"));
        $v_2.SetParameter("vizPaneId", this.get_element().id);
        var $v_3 = $find(this._gridId), $v_4 = "";
        if (!IsNull($v_3)) $v_4 = $v_3.GetParameter("layoutXml");
        $v_2.SetParameter("layoutXml", $v_4);
        var $v_5 = $v_2.Execute(null);
        if ($v_5.Success) {
            var $v_6 = $v_5.ReturnValue;
            if (!isNullOrEmptyString($v_6)) {
                var $v_7 = this.getPaneChildElement("headerRowTR");
                $v_7.style.display = "none";
                var $v_8 = this.getPaneChildElement("contentContainer");
                $v_8.style.top = "0px";
                var $v_9 = document.createElement("SPAN");
                $v_9.id = "designerSpan";
                $v_0.appendChild($v_9);
                $v_9.innerHTML = $v_6;
                this.initializeDesignerMode();
                this.showContentSpan($v_0);
                this.handleFocus();
                var $v_A = paneRenderingMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode
                    ? this.get_visualizationId()
                    : "";
                this.set_visualizationId($v_A);
                this.set_visualizationType(1112)
            }
        } else {
            this.switchMode(Mscrm.VisualizationPaneRenderingModes.RuntimeMode);
            this.loadVisualization(false);
            this.updateFooterMessageWithIcon(window.LOCID_VPD_ERR_ONLOAD, false);
            return
        }
        refreshRibbon()
    },
    onYAttributeChange: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id), $v_1 = sourceElement;
        if (!IsNull($v_1)) {
            this.$I_3 = true;
            if (this.$30_3(false, $v_0) && $v_1.selectedIndex) {
                var $v_2 = XUI.Xml.DomUtils.GetFirstChild($v_1);
                $v_2.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_2))
            }
            this.setYAttributeInDataXml($v_1.value, $v_0);
            this.setAggregateList(true, $v_0);
            this.updateTopBottomButtonState();
            refreshRibbon()
        }
    },
    setFocusOnVizPane: function() {
        var $v_0 = this.isPaneInDesignerMode();
        if ($v_0) {
            var $v_1 = this.getPaneChildElement("yAttributeSelector1");
            !IsNull($v_1) && this.setFocus($v_1)
        } else {
            var $v_2 = this.getPaneChildElement("visualizationList");
            !IsNull($v_2) && this.setFocus($v_2)
        }
    },
    $3D_3: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/ChartAreas/ChartArea/AxisY2", null);
        if (!$v_0) {
            var $v_1 = XUI.Xml
                .LoadXml('<AxisY2 LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"> <MajorGrid LineColor="239, 242, 246" /> <MajorTickMark LineColor="165, 172, 181" /> <LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /> </AxisY2>');
            $v_0 = XUI.Xml.SelectSingleNode($v_1, "AxisY2", null);
            var $v_2 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/ChartAreas/ChartArea", null);
            $v_2.appendChild($v_0.cloneNode(true))
        }
    },
    $2e_3: function($p0) {
        var $v_0 = this.$6_3[$p0], $v_1 = this._currentPresentationXml.createAttribute("YAxisType");
        $v_1.value = "Secondary";
        $v_0.$F_1.attributes.setNamedItem($v_1)
    },
    $3z_3: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/ChartAreas/ChartArea/AxisY2", null);
        $v_0 && $v_0.parentNode.removeChild($v_0)
    },
    $42_3: function($p0) {
        var $v_0 = this.$6_3[$p0];
        $v_0 && $v_0.$F_1.attributes.removeNamedItem("YAxisType")
    },
    markChartNodeReadyForUse: function(isCategory, itemKey) {
        var $v_0 = isCategory ? this.$H_3[itemKey.toString()] : this.$6_3[itemKey.toString()];
        if (!$v_0.$W_0) $v_0.$W_0 = true
    },
    $30_3: function($p0, $p1) { return !this.$3n_3($p0, $p1) },
    $3n_3: function($p0, $p1) {
        var $v_0 = $p0 ? this.$H_3[$p1.toString()] : this.$6_3[$p1.toString()];
        return $v_0.$W_0
    },
    handleAddField: function(id) {
        if ($get(id).disabled) return;
        if (id === "addXBtn") {
            this.$1s_3(true);
            this.onAddNewX(-1)
        } else {
            this.$1s_3(false);
            this.onAddNewY(-1)
        }
    },
    onAddNewY: function(index) {
        var $v_0 = this.getPaneChildElement("addYDiv");
        if (!IsNull($v_0) && !IsNull(this.$1T_3)) {
            this.addSeriesHtmlRow($v_0);
            if (this.$j_3)
                this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode && this.$37_3(false, index);
            else {
                this.$4F_3();
                this.updateChartTypeIcon(this.getChartTypeString(this.$2_3.toString()), this.$2_3.toString());
                if (this.get_seriesCount() === 2) {
                    this.$2e_3(this.$2_3.toString());
                    this.$3D_3()
                }
            }
            this.updateButtonStates(false);
            Mscrm.VisualizationPane.hideInlineActionMenus();
            refreshRibbon();
            this.$1K_3()
        }
    },
    addSeriesHtmlRow: function(addSeriesButton) {
        var $v_0 = document.createElement("div");
        $v_0.innerHTML = this.$1T_3;
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.VisualizationPane
            .$0("tdyAttributeSelector", this.$2_3.toString()));
        addSeriesButton.parentNode.insertBefore($v_1, addSeriesButton);
        this.updateNewYNodeAttributes()
    },
    updateNewYNodeAttributes: function() {
        var $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAttributeSelector", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("yAttributeSelector", this.$2_3.toString()));
            var $$t_D = this;
            $addHandler($v_0, "change", function($p1_0) { $$t_D.onYAttributeChange($p1_0.target) });
            !this.$j_3 && $v_0.focus()
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAggregateSelector", "0"));
        if ($v_0) {
            $v_0.disabled = true;
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("yAggregateSelector", this.$2_3.toString()));
            var $$t_E = this;
            $addHandler($v_0, "change", function($p1_0) { $$t_E.onYAggregateChange($p1_0.target) })
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("removeSeriesBtn", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("removeSeriesBtn", this.$2_3.toString()));
            $v_0.parentNode.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("removeSeriesBtnLink", this.$2_3.toString()));
            var $$t_F = this;
            $addHandler($v_0.parentNode,
                "click",
                function($p1_0) {
                    Mscrm.VisualizationPane.cancelClickEvent($p1_0);
                    var $v_1 = $p1_0.target;
                    !Mscrm.Utilities.isDisabled($v_1) && $$t_F.onRemoveY($v_1)
                })
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yRowCheckBox", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("yRowCheckBox", this.$2_3.toString()));
            var $$t_G = this;
            $addHandler($v_0, "click", function($p1_0) { $$t_G.onYRowSelect($p1_0.target) })
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("chartTypeImage", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("chartTypeImage", this.$2_3.toString()));
            $v_0.parentNode.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("chartTypeImageLink", this.$2_3.toString()));
            this.updateChartTypeIcon(this.getChartTypeString(this.$2_3.toString()), this.$2_3.toString());
            var $$t_H = this;
            $addHandler($v_0.parentNode,
                "click",
                function($p1_0) {
                    Mscrm.VisualizationPane.cancelClickEvent($p1_0);
                    var $v_2 = $p1_0.target;
                    if (!Mscrm.Utilities.isDisabled($v_2)) {
                        $$t_H.$T_3 = $$t_H.$X_3($v_0.id).toString();
                        Mscrm.VisualizationPane.displayChartTypeBox($p1_0)
                    }
                })
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("topBottomImage", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("topBottomImage", this.$2_3.toString()));
            $v_0.parentNode.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("topBottomImageLink", this.$2_3.toString()));
            var $v_3 = this.$2_3.toString() === this.$i_3;
            if ($v_3) {
                var $v_4 = String.format("/_imgs/visualization/designer/topbottom/{0}rules.png",
                    this.$1N_3 ? "top" : "bottom");
                Mscrm.ImageStrip.changeImage($v_0, $v_4);
                $v_0.setAttribute("imgBase", $v_4)
            } else {
                var $v_5 = "/_imgs/visualization/designer/topbottom/topbottomrules.png";
                Mscrm.ImageStrip.changeImage($v_0, $v_5);
                $v_0.setAttribute("imgBase", $v_5)
            }
            var $$t_I = this;
            $addHandler($v_0.parentNode,
                "click",
                function($p1_0) {
                    Mscrm.VisualizationPane.cancelClickEvent($p1_0);
                    var $v_6 = $p1_0.target;
                    if (!Mscrm.Utilities.isDisabled($v_6)) {
                        $$t_I.$T_3 = $$t_I.$X_3($v_0.id).toString();
                        Mscrm.VisualizationPane.displayTopBottomBox($p1_0)
                    }
                })
        }
    },
    $2G_3: function($p0, $p1, $p2, $p3) {
        if ($p0 !== "-1") {
            var $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("topBottomImage", $p0)),
                $v_1 = "/_imgs/visualization/designer/topbottom/topbottomrules.png";
            Mscrm.ImageStrip.changeImage($v_0, $v_1);
            $v_0.setAttribute("imgBase", $v_1);
            $v_0.title = window.LOCID_TOPBOTTOM_ICON;
            $v_0.alt = $v_0.title
        }
        if ($p1 !== "-1") {
            var $v_2 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("topBottomImage", $p1)),
                $v_3 = String.format("/_imgs/visualization/designer/topbottom/{0}rules.png", $p2 ? "top" : "bottom");
            Mscrm.ImageStrip.changeImage($v_2, $v_3);
            $v_2.setAttribute("imgBase", $v_3);
            var $v_4 = $p2 ? window.LOCID_TOP_ICON : window.LOCID_BOTTOM_ICON;
            $v_2.title = String.format($v_4, $p3);
            $v_2.alt = $v_2.title
        }
    },
    $37_3: function($p0, $p1) {
        this.$48_3($p0, $p1);
        !$p0 && this.setAggregateList(false, this.$2_3);
        this.$47_3($p0, $p1)
    },
    $48_3: function($p0, $p1) {
        var $v_0 = $p0 ? "xAttributeSelector" : "yAttributeSelector",
            $v_1 = this.getPaneChildElement(Mscrm.VisualizationPane.$0($v_0, this.$2_3.toString()));
        if ($v_1) {
            var $v_2 = $p0 ? this.$28_3 : this.$2A_3;
            $v_1.value = $v_2[$p1];
            var $v_3 = $v_1.options[0];
            $v_3.parentNode.removeChild($v_3)
        }
    },
    $47_3: function($p0, $p1) {
        var $v_0 = $p0 ? "xDateTimeGroupingSelector" : "yAggregateSelector",
            $v_1 = this.getPaneChildElement(Mscrm.VisualizationPane.$0($v_0, this.$2_3.toString()));
        if ($v_1) {
            var $v_2 = $p0 ? this.$27_3 : this.$29_3, $v_3 = $v_2[$p1];
            if (!isNullOrEmptyString($v_3))
                if ($v_3.toUpperCase() !== "DUMMY") {
                    $v_1.value = $v_3;
                    if ($p0) $v_1.style.display = "inline"
                }
        }
    },
    $4F_3: function() {
        var $v_0 = new Mscrm.YChartNodeItem(null, "", null, null, true);
        this.$6_3[this.$2_3.toString()] = $v_0;
        this.$4G_3($v_0);
        this.$4I_3($v_0)
    },
    $4G_3: function($p0) {
        var $v_0 = this.$1S_3.cloneNode(true), $v_1 = $v_0.attributes.getNamedItem("alias");
        $v_1.value = "_CRMAutoGen_aggregate_column_Num_" + this.$2_3;
        var $v_2 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null);
        $v_2.appendChild($v_0);
        var $v_3 = XUI.Xml.SelectSingleNode(this._currentDataXml,
                "datadefinition/categorycollection/category/measurecollection",
                null),
            $v_4 = $v_3.cloneNode(true),
            $v_5 = XUI.Xml.SelectSingleNode(this._currentDataXml,
                "datadefinition/categorycollection/category/measurecollection/measure",
                null),
            $v_6 = $v_5.cloneNode(true),
            $v_7 = $v_6.attributes.getNamedItem("alias");
        $v_7.value = "_CRMAutoGen_aggregate_column_Num_" + this.$2_3;
        $v_4.replaceChild($v_6, XUI.Xml.DomUtils.GetFirstChild($v_4));
        $v_3.parentNode.appendChild($v_4);
        $p0.$P_0 = $v_0;
        $p0.$a_0 = XUI.Xml.GetText($v_1);
        $p0.$12_1 = $v_6;
        $p0.$W_0 = false
    },
    $4I_3: function($p0) {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/Series", null), $v_1 = "";
        switch (this.$J_3) {
        case "LineColumnArea":
            $v_1 =
                '<Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
            break;
        case "Bar":
            $v_1 =
                '<Series ChartType="Bar" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>';
            break;
        default:
            $v_1 =
                '<Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
            break
        }
        var $v_2 = XUI.Xml.LoadXml($v_1).documentElement.cloneNode(true);
        $v_0.appendChild($v_2);
        this.addLegends();
        $p0.$F_1 = $v_2
    },
    addLegends: function() {
        if (this.get_seriesCount() === 2 || this.get_categoryCount() === 2) {
            var $v_0 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart", null),
                $v_1 = XUI.Xml.SelectSingleNode($v_0, "Legends", null),
                $v_2 = XUI.Xml
                    .LoadXml('<Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends>').documentElement.cloneNode(true);
            if (IsNull($v_1)) $v_0.appendChild($v_2);
            else !$v_1.hasChildNodes() && $v_0.replaceChild($v_2, $v_1)
        }
    },
    updateButtonStates: function(isCategory) {
        this.updateAddButtonState();
        this.updateRemoveButtonState(isCategory);
        this.updateTopBottomButtonState()
    },
    updateTopBottomButtonState: function() {
        var $$dict_5 = this.$6_3;
        for (var $$key_6 in $$dict_5) {
            var $v_0 = { key: $$key_6, value: $$dict_5[$$key_6] },
                $v_1 = $v_0.key,
                $v_2 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("topBottomImage", $v_1));
            if (!IsNull($v_2)) {
                var $v_3 = this.isTopBottomEnabled($v_0.value), $v_4;
                if (!$v_3) {
                    $v_4 = "/_imgs/visualization/designer/topbottom/topbottomrules.png";
                    $v_2.setAttribute("disabled", "disabled");
                    $v_2.parentNode.setAttribute("disabled", "disabled")
                } else {
                    $v_4 = $v_2.getAttribute("imgBase").toString();
                    $v_2.removeAttribute("disabled");
                    $v_2.parentNode.removeAttribute("disabled")
                }
                $v_4 = Mscrm.VisualizationPane.addOrRemoveSuffixInPath($v_4, "_dis", !$v_3);
                Mscrm.ImageStrip.changeImage($v_2, $v_4);
                $v_2.setAttribute("imgBase", $v_4)
            }
        }
    },
    updateAddButtonState: function() {
        var $v_0 = this.$J_3 === "Incompatible",
            $v_1 = !this._isComplexChart && !$v_0 && this.get_categoryCount() < 2 && this.get_seriesCount() <= 1,
            $v_2 = !this._isComplexChart && !$v_0 && this.get_seriesCount() < 5 && this.get_categoryCount() <= 1;
        Mscrm.VisualizationPane.enableDisableElement($v_1, "addXBtn");
        Mscrm.VisualizationPane.enableDisableElement($v_2, "addYBtn")
    },
    updateRemoveButtonState: function(isCategory) {
        var $v_0 = 0, $v_1 = null, $v_2 = "";
        if (isCategory) {
            $v_0 = this.get_categoryCount();
            $v_1 = this.$H_3;
            $v_2 = "removeXBtn"
        } else {
            $v_0 = this.get_seriesCount();
            $v_1 = this.$6_3;
            $v_2 = "removeSeriesBtn"
        }
        var $v_3 = $v_0 === 1, $$dict_9 = $v_1;
        for (var $$key_A in $$dict_9) {
            var $v_4 = { key: $$key_A, value: $$dict_9[$$key_A] },
                $v_5 = Mscrm.VisualizationPane.$0($v_2, $v_4.key),
                $v_6 = $get($v_5, this.get_element()),
                $v_7 = Mscrm.VisualizationPane
                    .addOrRemoveSuffixInPath($v_6.getAttribute("imgBase").toString(), "_dis", this._isComplexChart);
            Mscrm.ImageStrip.changeImage($v_6, $v_7);
            $v_6.setAttribute("imgBase", $v_7);
            $v_6.parentNode.style.visibility = $v_3 ? "hidden" : "visible"
        }
    },
    onAddNewX: function(index) {
        var $v_0 = this.getPaneChildElement("addXDiv");
        if (!IsNull($v_0))
            if (!IsNull(this.$1p_3)) {
                this.addCategoryHtmlRow($v_0);
                if (this.$j_3)
                    this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode &&
                        this.$37_3(true, index);
                else this.updateDataAndPresentationXmlForNewX()
            }
        this.updateButtonStates(true);
        Mscrm.VisualizationPane.hideInlineActionMenus();
        refreshRibbon();
        this.$1K_3()
    },
    addCategoryHtmlRow: function(addCategoryButton) {
        var $v_0 = document.createElement("div");
        $v_0.innerHTML = this.$1p_3;
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($v_0);
        $v_1.id = CrmEncodeDecode.CrmHtmlAttributeEncode(Mscrm.VisualizationPane
            .$0("tdxAttributeSelector", this.$2_3.toString()));
        addCategoryButton.parentNode.insertBefore($v_1, addCategoryButton);
        this.updateNewXNodeAttributes()
    },
    updateNewXNodeAttributes: function() {
        var $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("xAttributeSelector", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("xAttributeSelector", this.$2_3.toString()));
            var $$t_5 = this;
            $addHandler($v_0, "change", function($p1_0) { $$t_5.onXAttributeChange($p1_0.target) });
            !this.$j_3 && $v_0.focus()
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("xDateTimeGroupingSelector", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("xDateTimeGroupingSelector", this.$2_3.toString()));
            $v_0.style.display = "none";
            var $$t_6 = this;
            $addHandler($v_0, "change", function($p1_0) { $$t_6.onDateGroupingChange($p1_0.target) })
        }
        $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("removeXBtn", "0"));
        if ($v_0) {
            $v_0.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("removeXBtn", this.$2_3.toString()));
            $v_0.parentNode.id = CrmEncodeDecode
                .CrmHtmlAttributeEncode(Mscrm.VisualizationPane.$0("removeXBtnLink", this.$2_3.toString()));
            var $$t_7 = this;
            $addHandler($v_0.parentNode,
                "click",
                function($p1_0) {
                    Mscrm.VisualizationPane.cancelClickEvent($p1_0);
                    var $v_1 = $p1_0.target;
                    !Mscrm.Utilities.isDisabled($v_1) && $$t_7.onRemoveX($v_1)
                })
        }
    },
    updateCategoryNodeAlias: function() {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/categorycollection/category", null),
            $v_1 = this._currentDataXml.createAttribute("alias"),
            $v_2 = this.$3V_3()[0];
        $v_1.value = this.$H_3[$v_2].$a_0;
        $v_0.attributes.setNamedItem($v_1)
    },
    updateDataAndPresentationXmlForNewX: function() {
        var $v_0 = this.$1o_3.cloneNode(true), $v_1 = $v_0.attributes.getNamedItem("alias");
        $v_1.value = "_CRMAutoGen_groupby_column_Num_" + this.$2_3;
        var $v_2 = new Mscrm.ChartNodeItem($v_0, XUI.Xml.GetText($v_1), true);
        this.$H_3[this.$2_3.toString()] = $v_2;
        var $v_3 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null);
        $v_3.appendChild($v_0);
        this.updateCategoryNodeAlias();
        this.addLegends();
        this.get_categoryCount() === 2 && this.clearTopBottom()
    },
    $2p_3: function($p0) {
        var $v_0 = $p0.parentNode;
        while ($v_0.tagName
            .toUpperCase() !==
            "DIV" ||
            $v_0.id.indexOf("AttributeSelector") === -1) $v_0 = $v_0.parentNode;
        return $v_0
    },
    onRemoveX: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id);
        this.modifyDataXmlAttribute(true, "", $v_0, true);
        var $v_1 = this.$2p_3(sourceElement);
        $v_1 && $v_1.parentNode.removeChild($v_1);
        delete this.$H_3[$v_0.toString()];
        this.updateCategoryNodeAlias();
        this.$I_3 = true;
        !this.checkAndPreviewChart(true) && this.$1K_3();
        this.updateButtonStates(true);
        Mscrm.VisualizationPane.hideInlineActionMenus();
        refreshRibbon()
    },
    onYAggregateChange: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id), $v_1 = sourceElement;
        if (!IsNull($v_1)) {
            this.$I_3 = true;
            if ($v_1.options[0].getAttribute("value") === "Aggregate") {
                $v_1.remove(0);
                !this.$2C_3() && this.saveAggregateHtml($v_1, true)
            }
            this.setAggregateInDataXml($v_1.value, $v_0);
            !this.checkAndPreviewChart(true) && this.$1K_3()
        }
    },
    onYRowSelect: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id).toString(), $v_1 = sourceElement, $v_2 = $v_1.checked;
        if (!$v_2) {
            this.highlightSeries(false, $v_0);
            this.$G_3 = this.get_firstSeriesId()
        } else {
            this.highlightSeries(false, this.$G_3);
            this.highlightSeries(true, $v_0);
            if ($v_0.toString() !== this.$G_3) {
                var $v_3 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yRowCheckBox", this.$G_3));
                if ($v_3) $v_3.checked = false;
                this.$G_3 = $v_0.toString()
            }
        }
        refreshRibbon()
    },
    highlightSeries: function(toBeHighlighted, seriesId) {
        if (seriesId !== "-1") {
            var $v_0 = Mscrm.VisualizationPane.$0("tdyAttributeSelector", seriesId),
                $v_1 = this.getPaneChildElement($v_0);
            if (!IsNull($v_1))
                if (toBeHighlighted) $v_1.className += " ms-crm-AddSeries-Selected";
                else $v_1.className = $v_1.className.replace(" ms-crm-AddSeries-Selected", "")
        }
    },
    $1K_3: function() {
        var $v_0 = this.getPaneChildElement("previewFrameCell");
        if (!IsNull($v_0)) {
            var $v_2 = this.getPaneChildElement("previewIframe");
            if (!IsNull($v_2)) $v_2.src = "";
            $v_0.innerHTML = "";
            $v_0.style.display = "none"
        }
        var $v_1 = this.getPaneChildElement("staticImageTable");
        if (!IsNull($v_1)) {
            $v_1.style.display = "";
            this.updateStaticImages();
            var $v_3 = window.LOCID_VPD_INLINEMSG_ONLOAD;
            this.updateFooterMessage($v_3)
        }
    },
    onRemoveY: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id);
        if (IsNull($v_0)) return;
        var $v_1 = $v_0.toString(), $v_2 = $v_1 === this.get_firstSeriesId();
        this.updateSecYAxisInfo($v_1);
        this.modifyDataXmlAttribute(false, "", $v_0, true);
        var $v_3 = this.$2p_3(sourceElement);
        $v_3 && $v_3.parentNode.removeChild($v_3);
        var $v_4 = this.$6_3[$v_1];
        $v_4.$12_1.parentNode.parentNode.removeChild($v_4.$12_1.parentNode);
        $v_4.$F_1.parentNode.removeChild($v_4.$F_1);
        this.$40_3($v_4.$a_0);
        delete this.$6_3[$v_1];
        this.$I_3 = true;
        if ($v_2) {
            var $v_5 = this.$5_3[this.getChartTypeString(this.get_firstSeriesId())];
            if (!IsNull($v_5)) {
                var $v_6 = $v_5;
                this.updatePresXmlColorPalette($v_6.$1k_0)
            }
        }
        if (this.$G_3 === $v_1) this.$G_3 = this.get_firstSeriesId();
        !this.checkAndPreviewChart(true) && this.$1K_3();
        this.updateButtonStates(false);
        Mscrm.VisualizationPane.hideInlineActionMenus();
        refreshRibbon()
    },
    updateSecYAxisInfo: function(seriesNumber) {
        for (var $v_0 = this.$2s_3(), $v_1 = 0; $v_1 < Math.min($v_0.length, 2); ++$v_1)
            if ($v_0[$v_1] === seriesNumber.toString()) {
                this.$3I_3($v_0, !$v_1);
                break
            }
    },
    $3I_3: function($p0, $p1) {
        $p1 && this.$42_3($p0[1]);
        if ($p0.length > 2) this.$2e_3($p0[2]);
        else this.$3z_3()
    },
    $1s_3: function($p0) {
        ++this.$2_3;
        var $v_0 = $p0 ? "_CRMAutoGen_groupby_column_Num_" : "_CRMAutoGen_aggregate_column_Num_",
            $v_1 = $v_0 + this.$2_3;
        while (Array.contains(this.$26_3, $v_1)) {
            ++this.$2_3;
            $v_1 = $v_0 + this.$2_3
        }
    },
    $X_3: function($p0) {
        var $v_0 = -1;
        if ($p0) {
            var $v_1 = $p0.split("_");
            $v_0 = Number.parseInvariant($v_1[$v_1.length - 1])
        }
        return $v_0
    },
    onXAttributeChange: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id), $v_1 = sourceElement;
        if (!IsNull($v_1)) {
            this.$I_3 = true;
            var $v_2 = $v_1.options[$v_1.selectedIndex].getAttribute("type"),
                $v_3 = this.getPaneChildElement(Mscrm.VisualizationPane
                    .$0("xDateTimeGroupingSelector", $v_0.toString()));
            if (!isNullOrEmptyString($v_2) && !IsNull($v_3))
                if ($v_2.toUpperCase() !== "DATETIME") {
                    $v_3.style.display = "none";
                    this.setDateGroupingInDataXml($v_3.value, true, $v_0)
                } else {
                    $v_3.style.display = "inline";
                    $v_3.value = "month";
                    this.setDateGroupingInDataXml($v_3.value, false, $v_0)
                }
            if (this.$30_3(true, $v_0) && $v_1.selectedIndex) {
                var $v_4 = XUI.Xml.DomUtils.GetFirstChild($v_1);
                $v_4.removeChild(XUI.Xml.DomUtils.GetFirstChild($v_4));
                $v_1.style.display = "inline"
            }
            this.setGroupByInDataXml($v_1.value, $v_0);
            this.updateCategoryNodeAlias();
            !this.checkAndPreviewChart(true) && this.$1K_3()
        }
        this.markChartNodeReadyForUse(true, $v_0);
        this.updateTopBottomButtonState();
        refreshRibbon()
    },
    $2g_3: function($p0) {
        var $v_0 = $p0 ? this.$H_3 : this.$6_3, $$dict_4 = $v_0;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_2 = $v_1.value;
            if (!$v_2.$W_0) return false
        }
        return true
    },
    $2h_3: function() { return this.$2i_3() && this.$2j_3() },
    $2i_3: function() { return this.$2g_3(true) },
    $2j_3: function() { return this.$2g_3(false) },
    $2y_3: function() { return this.$2x_3(true) },
    $2z_3: function() { return this.$2x_3(false) },
    $2x_3: function($p0) {
        var $v_0 = $p0 ? this.$H_3 : this.$6_3, $$dict_4 = $v_0;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_2 = $v_1.value;
            if ($v_2.$W_0) return true
        }
        return false
    },
    checkAndPreviewChart: function(updateFooter, useCachedData) {
        var $v_0 = false;
        if (this.areRequiredInputsPresent(false)) {
            this.autoFillTitle && this.setChartName();
            updateFooter && this.updateFooterMessage("");
            this._useCachedData = useCachedData;
            this.loadPreview();
            $v_0 = true
        }
        return $v_0
    },
    onDateGroupingChange: function(sourceElement) {
        var $v_0 = this.$X_3(sourceElement.id);
        this.$I_3 = true;
        var $v_1 = sourceElement;
        if (!IsNull($v_1)) {
            this.setDateGroupingInDataXml($v_1.value, false, $v_0);
            !this.checkAndPreviewChart(false) && this.$1K_3()
        }
    },
    onChartTitleChange: function() {
        var $v_0 = this.get_chartNameInput();
        if (!IsNull($v_0)) {
            if (!isNullOrEmptyString($v_0.value)) this.autoFillTitle = false;
            else {
                this.autoFillTitle = true;
                this.$2h_3() && this.setChartName()
            }
            isNullOrEmptyString(XUI.Html.GetText(this.getPaneChildElement("visualizationDescription"))) &&
                this.updateTooltip()
        }
        this.$2y_3() && this.$2z_3() && this.updateFooterMessage("")
    },
    onChartDescChange: function() {
        this.updateTooltip();
        this.$2y_3() && this.$2z_3() && this.updateFooterMessage("")
    },
    confirmViewChange: function(viewId) {
        if (this.isVisualizationPaneVisible() &&
            this.isPaneInDesignerMode() &&
            !this.isQuickFindQuery(viewId) &&
            this.isDesignerPaneDirty())
            return confirm(window.LOCID_ON_VIEW_CHANGE1 + "\n" + window.LOCID_ON_VIEW_CHANGE2);
        return true
    },
    isDesignerPaneDirty: function() {
        var $v_0 = null;
        if (!IsNull(this.get_chartNameInput()))
            $v_0 = Mscrm.FormControlInputBehavior.GetBehavior(this.get_chartNameInput().id);
        var $v_1 = Mscrm.FormControlInputBehavior.GetBehavior("visualizationDescription");
        return this.$I_3 || !IsNull($v_0) && $v_0.get_isDirty() || !IsNull($v_1) && $v_1.get_isDirty()
    },
    isPaneInDesignerMode: function() {
        if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode) return true;
        return false
    },
    fadeInStaticImg: function(isTopImg) {
        var $v_0 = isTopImg ? "topImg" : "bottomImg",
            $v_1 = this.getPaneChildElement($v_0),
            $v_2 = XUI.Html.GetOpacity($v_1);
        if ($v_2 >= 1) {
            this.clearFading(isTopImg);
            return
        }
        $v_2 = $v_2 + .2;
        !IsNull($v_1) && XUI.Html.SetOpacity($v_1, $v_2)
    },
    fadeOutStaticImg: function(isTopImg) {
        var $v_0 = isTopImg ? "topImg" : "bottomImg",
            $v_1 = this.getPaneChildElement($v_0),
            $v_2 = this._gridId + "_paneControl",
            $v_3 = XUI.Html.GetOpacity($v_1);
        if ($v_3 <= .4) {
            this.clearFading(isTopImg);
            var $v_4 = window.setInterval("$find('" + $v_2 + "').fadeInStaticImg(" + isTopImg + ")", 2);
            this.setFadeIntervalId(isTopImg, $v_4);
            return
        }
        $v_3 = $v_3 - .2;
        !IsNull($v_1) && XUI.Html.SetOpacity($v_1, $v_3)
    },
    handleWindowBeforeUnload: function(oEvent) {
        if (this.isPaneInDesignerMode() && this.isDesignerPaneDirty() && this.get_isSystemDesigner()) {
            oEvent.rawEvent.returnValue = window.LOCID_VPD_CLOSEWARNING;
            return LOCID_VPD_CLOSEWARNING
        }
    },
    handleFocus: function() {
        var $v_0 = this.getPaneChildElement("yAttributeSelector1");
        if (!IsNull($v_0) && !$v_0.disabled) this.setFocus($v_0);
        else this.setFocus(this.get_chartNameInput())
    },
    updateTooltip: function() {
        var $v_0 = this.$1W_3(), $v_1 = window.LOCID_VPD_ALT_TEXT;
        if (!IsNull($v_0)) {
            var $v_2 = XUI.Html.GetText(this.getPaneChildElement("visualizationDescription")).trim();
            if (!isNullOrEmptyString($v_2)) $v_0.alt = String.format($v_1, $v_2);
            else $v_0.alt = String.format($v_1, this.get_chartNameInputValue())
        }
    },
    swapLabelsIfRequired: function(oldChartTypeGroup) {
        if (this.get_seriesCount() > 1) return;
        var $v_0 = this.$J_3 === "Bar" && oldChartTypeGroup !== "Bar" ||
            this.$J_3 !== "Bar" && oldChartTypeGroup === "Bar";
        if (!$v_0) return;
        var $v_1 = this._currentCategoryAxisLabel,
            $v_2 = this._currentCategoryAxisLabel.innerHTML,
            $v_3 = this._currentSeriesAxisLabel.innerHTML;
        this._currentCategoryAxisLabel = this._currentSeriesAxisLabel;
        this._currentCategoryAxisLabel.innerHTML = $v_2;
        this._currentCategoryAxisLabel.setAttribute("title", $v_2);
        this._currentSeriesAxisLabel = $v_1;
        this._currentSeriesAxisLabel.innerHTML = $v_3;
        this._currentSeriesAxisLabel.setAttribute("title", $v_3)
    },
    setFocus: function(control) {
        try {
            control.focus()
        } catch ($$e_1) {
        }
    },
    $3X_3: function() {
        var $v_0 = "", $v_1 = 0, $$dict_5 = this.$6_3;
        for (var $$key_6 in $$dict_5) {
            var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
            if ($v_1 < 2) {
                var $v_3 = this.getSelectedPicklistText(Mscrm.VisualizationPane.$0("yAttributeSelector", $v_2.key)),
                    $v_4 = "";
                if ($v_0.length <= 0) $v_4 = String.format(window.LOCID_VPD_SERIESNAMETEMPLATE, $v_3);
                else $v_4 = String.format(window.LOCID_VPD_MULSERIESNAMETEMPLATE, $v_0, $v_3);
                if ($v_4.length <= 60) $v_0 = $v_4;
                else {
                    $v_0 = String.format(window.LOCID_VPD_ELLIPSISNAMETEMPLATE, $v_0);
                    break
                }
                ++$v_1
            } else {
                $v_0 = String.format(window.LOCID_VPD_ELLIPSISNAMETEMPLATE, $v_0);
                break
            }
        }
        return $v_0
    },
    $3W_3: function($p0) {
        var $v_0 = $p0.length, $v_1 = "", $$dict_6 = this.$H_3;
        for (var $$key_7 in $$dict_6) {
            var $v_2 = { key: $$key_7, value: $$dict_6[$$key_7] },
                $v_3 = this.getSelectedPicklistText(Mscrm.VisualizationPane.$0("xAttributeSelector", $v_2.key)),
                $v_4 = "";
            if ($v_1.length <= 0) $v_4 = String.format(window.LOCID_VPD_CATEGORYNAMETEMPLATE, $v_3);
            else $v_4 = String.format(window.LOCID_VPD_MULCATEGRYNAMETEMPLATE, $v_1, $v_3);
            if ($v_4.length + $v_0 <= 95) $v_1 = $v_4;
            else {
                $v_1 = String.format(window.LOCID_VPD_ELLIPSISNAMETEMPLATE, $v_1);
                break
            }
        }
        return $v_1
    },
    get_chartNameInput: function() { return this.getPaneChildElement(this._gridId + "_paneControl_chartNameInput") },
    get_chartNameInputValue: function() {
        var $v_0 = this.get_chartNameInput().value;
        return $v_0
    },
    get_$3L_3: function() {
        IsNull(this.$x_3) && this.$2w_3();
        return this.$x_3
    },
    $2C_3: function() {
        var $v_0 = false;
        if (Sys.Browser.version >= 8 && !Mscrm.Utilities.isIosDevice()) $v_0 = true;
        return $v_0
    },
    setChartName: function() {
        var $v_0, $v_1, $v_2 = this.$3X_3(), $v_3 = this.$3W_3($v_2);
        if (this.$y_3) {
            var $v_5 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch", null),
                $v_6 = $v_5.attributes.getNamedItem("count");
            $v_0 = this.$1N_3 ? window.LOCID_VPD_NAMETEMPLATEWITHTOP : window.LOCID_VPD_NAMETEMPLATEWITHBOTTOM;
            $v_1 = String.format($v_0, $v_6.value, $v_2, $v_3)
        } else {
            $v_0 = window.LOCID_VPD_NAMETEMPLATE;
            $v_1 = String.format($v_0, $v_2, $v_3)
        }
        var $v_4 = this.get_chartNameInput();
        if (!IsNull($v_4)) $v_4.value = $v_1;
        this.get_$3L_3().toggleHintVisibility(false)
    },
    generateSeriesLabel: function(seriesNumber) {
        var $v_0 = "",
            $v_1 = this.getSelectedPicklistText(Mscrm.VisualizationPane
                .$0("yAttributeSelector", seriesNumber.toString())),
            $v_2 = window.LOCID_VPD_AXISTITLE,
            $v_3 = this.getSelectedPicklistText(Mscrm.VisualizationPane
                .$0("yAggregateSelector", seriesNumber.toString()));
        $v_0 = String.format($v_2, $v_3, $v_1);
        return $v_0
    },
    updateLabel: function(label, value) {
        if (!IsNull(label)) {
            label.innerHTML = CrmEncodeDecode.CrmHtmlEncode(value);
            label.setAttribute("title", value)
        }
    },
    getChartGroup: function(chartType) {
        var $v_0 = "Incompatible", $v_1 = this.$5_3[chartType];
        if (!IsNull($v_1)) $v_0 = $v_1.$1M_0;
        else $v_0 = "Incompatible";
        return $v_0
    },
    setAggregateList: function(fireOnChangeEvent, seriesNumber) {
        var $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAttributeSelector", seriesNumber.toString())),
            $v_1 = $v_0.options[$v_0.selectedIndex].getAttribute("type");
        if (!this.isNumericType($v_1)) this.disableNumericAggregates(fireOnChangeEvent, seriesNumber);
        else this.enableAllAggregates(fireOnChangeEvent, seriesNumber);
        var $v_2 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAggregateSelector", seriesNumber.toString()));
        if ($v_2) $v_2.disabled = this._isComplexChart
    },
    enableAllAggregates: function(fireOnChangeEvent, seriesNumber) {
        var $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAggregateSelector", seriesNumber.toString()));
        if (this.$2C_3()) for (var $v_1 = 0; $v_1 < $v_0.options.length; $v_1++) $v_0.options[$v_1].disabled = false;
        else if (!isNullOrEmptyString(this.allAggregateHtml)) {
            this.updateAggregateSelector($v_0.id, true);
            $v_0 = this.getPaneChildElement(Mscrm.VisualizationPane.$0("yAggregateSelector", seriesNumber.toString()))
        }
        if (fireOnChangeEvent) {
            $v_0.value = "sum";
            this.onYAggregateChange($v_0)
        }
    },
    disableNumericAggregates: function(fireOnChangeEvent, seriesNumber) {
        var $v_0 = Mscrm.VisualizationPane.$0("yAggregateSelector", seriesNumber.toString()),
            $v_1 = this.getPaneChildElement($v_0);
        if (this.$2C_3()) {
            for (var $v_2 = 0;
                $v_2 < $v_1.options.length;
                $v_2++
            )
                if (!this
                    .isAggregateValidForNonNumericTypes($v_1.options[$v_2]
                        .getAttribute("value"))) $v_1.options[$v_2].disabled = true
        } else if (isNullOrEmptyString(this.countAggregateHtml)) {
            for (var $v_3 = 0; $v_3 < $v_1.options.length; $v_3++)
                if (!this.isAggregateValidForNonNumericTypes($v_1.options[$v_3].getAttribute("value"))) {
                    $v_1.remove($v_3);
                    $v_3--
                }
            this.saveAggregateHtml($v_1, false)
        } else {
            this.updateAggregateSelector($v_1.id, false);
            $v_1 = this.getPaneChildElement($v_0)
        }
        if (fireOnChangeEvent) {
            $v_1.value = "count";
            this.onYAggregateChange($v_1)
        }
    },
    isAggregateValidForNonNumericTypes: function(aggregateType) {
        switch (aggregateType) {
        case "count":
        case "countcolumn":
        case "none":
            return true;
        default:
            return false
        }
    },
    isNumericType: function(attributeType) {
        switch (attributeType) {
        case "money":
        case "int":
        case "float":
        case "decimal":
            return true;
        default:
            return false
        }
    },
    generateDataXml: function() { return XUI.Xml.XMLSerializer.serializeToString(this._currentDataXml) },
    getSelectedPicklistValue: function(selectControlId) {
        var $v_0 = this.getPaneChildElement(selectControlId);
        return $v_0.value
    },
    getSelectedPicklistText: function(selectControlId) {
        var $v_0 = this.getPaneChildElement(selectControlId);
        return XUI.Html.GetText($v_0.options[$v_0.selectedIndex])
    },
    getSeriesIndex: function(seriesId) {
        for (var $v_0 = 0,
            $v_1 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/Series", null),
            $$arr_3 = $v_1.childNodes,
            $$len_4 = $$arr_3.length,
            $$idx_5 = 0;
            $$idx_5 < $$len_4;
            ++$$idx_5) {
            var $v_2 = $$arr_3[$$idx_5];
            if ($v_2 === this.$6_3[seriesId].$F_1) return $v_0;
            $v_0++
        }
        return -1
    },
    getChartTypeString: function(seriesId) {
        var $v_0 = "column", $v_1 = this.$6_3[seriesId];
        if (!IsNull($v_1)) {
            var $v_2 = $v_1.$F_1;
            if (!IsNull($v_2)) {
                var $v_3 = $v_2.attributes.getNamedItem("ChartType");
                if (!IsNull($v_3)) $v_0 = $v_3.nodeValue
            }
        }
        return $v_0.toLowerCase()
    },
    areRequiredInputsPresent: function(checkName) {
        var $v_0 = this.$2h_3();
        if (checkName) $v_0 = $v_0 && !isNullOrEmptyString(this.get_chartNameInputValue());
        return $v_0
    },
    loadPreview: function() {
        var $v_0 = this.getPaneChildElement("previewFrameCell");
        if (!IsNull($v_0)) {
            if (IsNull(this.getPaneChildElement("previewIframe"))) {
                var $v_1 = this.getPreviewIFrame();
                $v_0.appendChild($v_1);
                if (!IsNull($v_1.contentWindow)) $v_1.contentWindow.name = $v_1.id
            }
            this.getPaneChildElement("staticImageTable").style.display = "none";
            $v_0.style.display = "none";
            this.getPaneChildElement("loadingImageTable").style.display = "";
            this.delayedLoadVisualization()
        }
    },
    delayedLoadVisualization: function() {
        window.clearInterval(Mscrm.VisualizationPane.timeOutID);
        Mscrm.VisualizationPane.timeOutID = window
            .setTimeout(this.$$d_$3r_3, Mscrm.VisualizationPane.currentVizLoadDelay)
    },
    selectorOnMouseDown: function() { Mscrm.VisualizationPane.currentVizLoadDelay = 0 },
    selectorOnKeyDown: function() {
        Mscrm.VisualizationPane.currentVizLoadDelay = Mscrm.VisualizationPane.vizLoadDelayMS
    },
    $3r_3: function() { this.loadVisualization(false) },
    getPreviewIFrame: function() {
        var $v_0 = document.createElement("iframe");
        $v_0.id = "previewIframe";
        $v_0.setAttribute("name", "previewIframe");
        $v_0.src = "";
        $v_0.scrolling = "auto";
        $v_0.style.height = "99%";
        $v_0.style.width = "100%";
        $v_0.style.overflow = "hidden";
        $v_0.frameBorder = "0";
        return $v_0
    },
    generatePresentationXml: function() {
        if (!IsNull(this._currentPresentationXml))
            return XUI.Xml.XMLSerializer.serializeToString(this._currentPresentationXml);
        return ""
    },
    disableEmptyMessageLabels: function(contentSpan) {
        this.hideVizList();
        contentSpan.style.display = "none";
        this.get_noVisualizations().style.display = "none";
        this.get_loadingSpan().style.display = "inline"
    },
    showContentSpan: function(contentSpan) {
        contentSpan.style.display = "block";
        this.get_loadingSpan().style.display = "none"
    },
    updateStaticImages: function() {
        var $v_0 = this.getPaneChildElement("topImg"), $v_1 = this.getPaneChildElement("bottomImg");
        XUI.Html.SetOpacity($v_0, .3);
        XUI.Html.SetOpacity($v_1, .3);
        this.$2i_3() && this.showSelectedAxis(true, true, false);
        this.$2j_3() && this.showSelectedAxis(false, true, false);
        var $v_2 = this.$5_3[this.getChartTypeString(this.get_firstSeriesId())];
        if (!IsNull($v_2)) {
            var $v_3 = $v_2;
            if (!isNullOrEmptyString($v_3.$1n_0)) $v_0.src = $v_3.$1n_0;
            if (!isNullOrEmptyString($v_3.$1f_0)) $v_1.src = $v_3.$1f_0;
            if ($v_3.$1e_0 === "none" || $v_1.style.display === "none") $v_1.style.display = $v_3.$1e_0;
            if (!isNullOrEmptyString($v_3.$1m_0)) $v_0.style.position = $v_3.$1m_0
        }
    },
    showSelectedAxis: function(isX, isImageToBeUpdated, showAnimation) {
        var $v_0 = this.$5_3[this.getChartTypeString(this.get_firstSeriesId())];
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.$1M_0;
            switch ($v_1) {
            case "LineColumnArea":
                this.reflectSelection(!isX, isImageToBeUpdated, showAnimation);
                break;
            case "Bar":
                this.reflectSelection(isX, isImageToBeUpdated, showAnimation);
                break;
            case "Incompatible":
                this.reflectSelection(true, isImageToBeUpdated, showAnimation);
                break
            }
        }
    },
    reflectSelection: function(isTopImg, isImageToBeUpdated, showAnimation) {
        var $v_0 = isTopImg ? "topImg" : "bottomImg",
            $v_1 = this.getPaneChildElement($v_0),
            $v_2 = this._gridId + "_paneControl";
        if (!IsNull($v_1)) {
            if (!showAnimation) {
                XUI.Html.SetOpacity($v_1, 1);
                return
            }
            var $v_3 = -1;
            if (!isImageToBeUpdated) {
                this.clearFading(isTopImg);
                $v_3 = window.setInterval("$find('" + $v_2 + "').fadeOutStaticImg(" + isTopImg.toString() + ")", 2);
                this.setFadeIntervalId(isTopImg, $v_3)
            } else {
                this.clearFading(isTopImg);
                $v_3 = window.setInterval("$find('" + $v_2 + "').fadeInStaticImg(" + isTopImg.toString() + ")", 5);
                this.setFadeIntervalId(isTopImg, $v_3)
            }
        }
    },
    clearFading: function(isTopImg) {
        switch (isTopImg) {
        case true:
            if (this.topImgFadeIntervalId !== -1) {
                window.clearInterval(this.topImgFadeIntervalId);
                this.topImgFadeIntervalId = -1
            }
            break;
        case false:
            if (this.bottomImgFadeIntervalId !== -1) {
                window.clearInterval(this.bottomImgFadeIntervalId);
                this.bottomImgFadeIntervalId = -1
            }
            break
        }
    },
    setFadeIntervalId: function(isTopImg, fadingIntervalId) {
        if (isTopImg) this.topImgFadeIntervalId = fadingIntervalId;
        else this.bottomImgFadeIntervalId = fadingIntervalId
    },
    setGroupByInDataXml: function(newGroupBy, seriesNumber) {
        this.modifyDataXmlAttribute(true, newGroupBy, seriesNumber, false);
        this.markChartNodeReadyForUse(true, seriesNumber)
    },
    setYAttributeInDataXml: function(newYAttribute, seriesNumber) {
        this.modifyDataXmlAttribute(false, newYAttribute, seriesNumber, false);
        this.markChartNodeReadyForUse(false, seriesNumber)
    },
    modifyDataXmlAttribute: function(isCategory, attributeName, number, remove) {
        var $v_0 = isCategory ? this.$H_3[number.toString()] : this.$6_3[number.toString()],
            $v_1 = $v_0.$P_0,
            $v_2 = $v_0.$a_0,
            $v_3 = $v_1.parentNode,
            $v_4 = this.get_$2F_3(),
            $v_5 = XUI.Xml.SelectSingleNode($v_3, "//order[@alias='" + $v_2 + "']", null),
            $v_6 = -1;
        if (this.$y_3 && !IsNull($v_4) && !IsNull($v_5) && $v_4 === $v_5) {
            var $v_9 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch", null)
                .attributes.getNamedItem("count").nodeValue;
            $v_6 = parseInt($v_9, 10);
            this.$2O_3();
            this.$2G_3(this.$i_3, "-1", false, -1);
            this.$2Z_3()
        }
        !remove && this.addAttribute($v_0, attributeName, $v_1);
        $v_3.removeChild($v_1);
        if (!IsNull($v_5) && !IsNull($v_5.parentNode)) {
            var $v_A = XUI.Xml.GetText(XUI.Xml
                .SelectSingleNode(this._currentDataXml,
                    "datadefinition/fetchcollection/fetch/entity/attribute[@name='" + attributeName + "']",
                    null).attributes.getNamedItem("alias"));
            if (!isNullOrEmptyString($v_A)) {
                var $v_B = this._currentDataXml.createAttribute("alias");
                $v_B.value = $v_A;
                $v_5.attributes.setNamedItem($v_B)
            } else $v_3.removeChild($v_5)
        }
        if (!remove)
            if ($v_6 !== -1 && this.$31_3($v_0)) {
                var $v_C = this.$T_3;
                this.$T_3 = number.toString();
                var $v_D = Boolean.parse($v_5.attributes.getNamedItem("descending").value);
                this.appendTopBottom($v_6.toString(), $v_D, true, false);
                this.$T_3 = $v_C
            }
        var $v_7 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null),
            $v_8 = XUI.Xml.SelectNodes($v_7, "//order", null);
        if (!$v_8.length)
            !IsNull($v_7.parentNode) &&
                !IsNull($v_7.parentNode.attributes.getNamedItem("count")) &&
                $v_7.parentNode.attributes.removeNamedItem("count");
        !$v_3.childNodes.length && !IsNull($v_3.parentNode) && $v_3.parentNode.removeChild($v_3)
    },
    addAttribute: function(chartNode, attributeName, referenceNode) {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null),
            $v_1 = chartNode.$P_0,
            $v_2 = $v_1.cloneNode(true),
            $v_3 = null;
        if (attributeName.indexOf(";") > -1) {
            var $v_5 = attributeName.split(";"),
                $v_6 = XUI.Xml.SelectSingleNode($v_0,
                    "link-entity[@name='" + $v_5[1] + "' and @from='" + $v_5[3] + "' and @to='" + $v_5[2] + "']",
                    null);
            if (IsNull($v_6)) {
                $v_3 = this._currentDataXml.createElement("link-entity");
                var $v_7 = this._currentDataXml.createAttribute("name");
                $v_7.value = $v_5[1];
                $v_3.attributes.setNamedItem($v_7);
                var $v_8 = this._currentDataXml.createAttribute("from");
                $v_8.value = $v_5[3];
                $v_3.attributes.setNamedItem($v_8);
                var $v_9 = this._currentDataXml.createAttribute("to");
                $v_9.value = $v_5[2];
                $v_3.attributes.setNamedItem($v_9);
                var $v_A = this._currentDataXml.createAttribute("link-type");
                $v_A.value = "outer";
                $v_3.attributes.setNamedItem($v_A);
                if (referenceNode.parentNode === $v_0) $v_0.insertBefore($v_3, referenceNode);
                else $v_0.insertBefore($v_3, !IsNull(referenceNode) ? referenceNode.parentNode : null)
            } else $v_3 = $v_6;
            attributeName = $v_5[0]
        } else $v_3 = $v_0;
        var $v_4 = this._currentDataXml.createAttribute("name");
        $v_4.value = attributeName;
        $v_2.attributes.setNamedItem($v_4);
        if (referenceNode.parentNode === $v_3) $v_3.insertBefore($v_2, referenceNode);
        else if ($v_3 === $v_0) $v_3.insertBefore($v_2, !IsNull(referenceNode) ? referenceNode.parentNode : null);
        else $v_3.appendChild($v_2);
        chartNode.$P_0 = $v_2
    },
    setAggregateInDataXml: function(newAggregate, seriesNumber) {
        var $v_0 = this._currentDataXml.createAttribute("aggregate");
        $v_0.value = newAggregate;
        this.$6_3[seriesNumber.toString()].$P_0.attributes.setNamedItem($v_0)
    },
    setDateGroupingInDataXml: function(dateGrouping, remove, seriesNumber) {
        var $v_0 = this.$H_3[seriesNumber.toString()].$P_0;
        if (remove && !IsNull($v_0.attributes.getNamedItem("dategrouping"))
        ) $v_0.attributes.removeNamedItem("dategrouping");
        else if (!remove) {
            var $v_1 = this._currentDataXml.createAttribute("dategrouping");
            if (dateGrouping === "fiscalperiod") $v_1.value = "fiscal-period";
            else if (dateGrouping === "fiscalyear") $v_1.value = "fiscal-year";
            else $v_1.value = dateGrouping;
            $v_0.attributes.setNamedItem($v_1)
        }
    },
    populateChartNodeItemsDictionaryAndCreateHtml: function() {
        this.$6_3 = {};
        this.$H_3 = {};
        try {
            this.$j_3 = true;
            this.populateSeriesDictionaryAndHtml();
            this.populateCategoryDictionaryAndHtml()
        } finally {
            this.$j_3 = false
        }
    },
    populateSeriesDictionaryAndHtml: function() {
        if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode)
            for (var $v_0 = XUI.Xml.SelectNodes(this._currentDataXml,
                         "datadefinition/categorycollection/category/measurecollection",
                         null),
                $v_1 = XUI.Xml.SelectNodes(this._currentPresentationXml, "Chart/Series/Series", null),
                $v_2 = $v_0.length,
                $v_3 = 0;
                $v_3 < $v_2;
                ++$v_3) {
                var $v_4 = XUI.Xml.SelectSingleNode($v_0[$v_3], "measure", null),
                    $v_5 = XUI.Xml.GetText($v_4.attributes.getNamedItem("alias")),
                    $v_6 = XUI.Xml.SelectSingleNode(this._currentDataXml,
                        "datadefinition/fetchcollection/fetch/entity//attribute[@alias='" + $v_5 + "']",
                        null),
                    $v_7 = new Mscrm.YChartNodeItem($v_6, $v_5, $v_4, $v_1[$v_3], false);
                this.$1s_3(false);
                this.$6_3[this.$2_3.toString()] = $v_7;
                if (!this.$1S_3 && $v_6) this.$1S_3 = $v_6.cloneNode(true);
                this.onAddNewY($v_3);
                this.updateTopBottomInfo($v_5, this.$2_3.toString())
            }
        else {
            var $v_8 = "_CRMAutoGen_aggregate_column_Num_" + 0,
                $v_9 = XUI.Xml.SelectSingleNode(this._currentDataXml,
                    "datadefinition/fetchcollection/fetch/entity//attribute[@alias='" + $v_8 + "']",
                    null),
                $v_A = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/Series/Series", null),
                $v_B = XUI.Xml.SelectSingleNode(this._currentDataXml,
                    "datadefinition/categorycollection/category/measurecollection/measure",
                    null),
                $v_C = new Mscrm.YChartNodeItem($v_9, $v_8, $v_B, $v_A, true);
            this.$1s_3(false);
            this.$6_3[this.$2_3.toString()] = $v_C;
            if ($v_9) this.$1S_3 = $v_9.cloneNode(true);
            this.onAddNewY(-1)
        }
    },
    populateCategoryDictionaryAndHtml: function() {
        var $v_0 = this.getParameter("xAliasOrdered"),
            $v_1 = $v_0.split("#"),
            $v_2 = this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode;
        if ($v_1.length > 0)
            for (var $v_3 = 0; $v_3 < $v_1.length; ++$v_3) {
                var $v_4 = $v_1[$v_3];
                if (isNullOrEmptyString($v_4)) continue;
                var $v_5 = XUI.Xml.SelectSingleNode(this._currentDataXml,
                    "datadefinition/fetchcollection/fetch/entity//attribute[@alias='" + $v_4 + "']",
                    null);
                if (!this.$1o_3) this.$1o_3 = $v_5.cloneNode(true);
                var $v_6 = new Mscrm.ChartNodeItem($v_5, $v_4, !$v_2);
                this.$1s_3(true);
                this.$H_3[this.$2_3.toString()] = $v_6;
                this.onAddNewX($v_2 ? $v_3 : -1)
            }
        else {
            var $v_7 = this.getPaneChildElement("xSelectionList");
            if ($v_7) $v_7.style.visibility = "hidden"
        }
    },
    saveAggregateHtml: function(selectElement, numericType) {
        var $v_0 = selectElement.id;
        selectElement.id = "temporarySelectId";
        if (numericType) this.allAggregateHtml = selectElement.parentNode.innerHTML;
        else this.countAggregateHtml = selectElement.parentNode.innerHTML;
        selectElement.id = $v_0
    },
    updateAggregateSelector: function(selectorId, numericType) {
        var $v_0 = this.getPaneChildElement(selectorId);
        $v_0.parentNode.innerHTML = numericType ? this.allAggregateHtml : this.countAggregateHtml;
        var $v_1 = $get("temporarySelectId");
        $v_1.id = selectorId;
        var $$t_5 = this;
        $addHandler($v_1, "change", function($p1_0) { $$t_5.onYAggregateChange($p1_0.target) })
    },
    initializeRowTemplates: function() {
        this.$1T_3 = this.getParameter("YRowHTMLTemplate");
        this.$1p_3 = this.getParameter("XRowHTMLTemplate");
        this.$3i_3()
    },
    $3i_3: function() {
        if (!this.$2C_3()) {
            var $v_0 = document.createElement("div");
            $v_0.innerHTML = this.$1T_3;
            var $v_1 = $get(Mscrm.VisualizationPane.$0("yAggregateSelector", "0"), $v_0);
            $v_1 && this.saveAggregateHtml($v_1, true)
        }
        this.countAggregateHtml = ""
    },
    initializeDesignerMode: function() {
        this.setPropertiesForChartTypes();
        this.initializeRowTemplates();
        if (this
            ._paneMode ===
            Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode) this.initializeDesignerNewMode();
        else this.initializeDesignerEditMode();
        this.$I_3 = false;
        this.populateChartNodeItemsDictionaryAndCreateHtml();
        this.$G_3 = this.get_firstSeriesId();
        this.$J_3 = this.getChartGroup(this.getChartTypeString(this.get_firstSeriesId()));
        this.$J_3 === "Incompatible" && Mscrm.VisualizationPane.enableDisableAddButtons(false);
        this.initializeAxisLabels();
        this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode && this.loadPreview();
        this.$z_3 = this.$$d_$3e_3;
        $addHandler(document, "keydown", this.$z_3);
        this.get_isSystemDesigner() && attachWindowOnBeforeUnload(this.$$d_handleWindowBeforeUnload, window);
        this.$3E_3();
        this.$3F_3();
        this.$3j_3();
        refreshRibbon();
        var $v_0 = window.top.$find("crmRibbonManager");
        $v_0 && $v_0.setChartDesignerCommandBar($get("chartDesignerCommandBar", this.get_element()))
    },
    $3j_3: function() {
        this.$2w_3();
        this.$3k_3();
        this.$3l_3()
    },
    $2w_3: function() {
        var $v_0 = this.get_chartNameInput();
        if (!IsNull($v_0)) this.$x_3 = $create(Mscrm.HintText, null, null, null, $v_0)
    },
    $3k_3: function() {
        var $v_0 = this.get_chartNameInput();
        if (!IsNull($v_0)) this.$1l_3 = $create(Mscrm.FormInputControl.TextBoxInputBehavior, null, null, null, $v_0)
    },
    $3l_3: function() {
        var $v_0 = this.getPaneChildElement("visualizationDescription");
        if (!IsNull($v_0)) this.$1g_3 = $create(Mscrm.FormInputControl.TextAreaInputBehavior, null, null, null, $v_0)
    },
    initializeDesignerNewMode: function() {
        var $v_0 = "", $v_1 = "";
        this._currentPresentationXml = XUI.Xml
            .LoadXml('<Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorTickMark LineColor="165, 172, 181" /><MajorGrid LineColor="Transparent" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles></Chart>');
        $v_0 = window.LOCID_VPD_INLINEMSG_ONLOAD;
        this._isComplexChart = false;
        var $v_2 = "_CRMAutoGen_groupby_column_Num_" + 0, $v_3 = "_CRMAutoGen_aggregate_column_Num_" + 0;
        this.setParameter("xAliasOrdered", $v_2);
        var $v_4 = String
            .format("<datadefinition><fetchcollection><fetch mapping='logical' aggregate='true'><entity name='entity_placeholder'><attribute name='x_placeholder' groupby='true' alias='{0}'/><attribute name='y_placeholder' aggregate='count' alias='{1}'/></entity></fetch></fetchcollection><categorycollection><category><measurecollection><measure alias='{1}'/></measurecollection></category></categorycollection></datadefinition>", $v_2, $v_3);
        this._currentDataXml = XUI.Xml.LoadXml($v_4);
        var $v_5 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null),
            $v_6 = this._currentDataXml.createAttribute("name");
        $v_6.value = this.getParameter("vizPanePrimaryEntityName");
        $v_5.attributes.setNamedItem($v_6);
        this.autoFillTitle = true;
        this.updateFooterMessage($v_0);
        this.updateWindowTitle($v_1)
    },
    initializeDesignerEditMode: function() {
        var $v_0 = "", $v_1 = this.get_chartNameInputValue();
        this._isComplexChart = Boolean.parse(this.getParameter("isComplexChart"));
        if (this._isComplexChart) $v_0 = String.format(window.LOCID_VPD_COMPLEXCHART, $v_1);
        var $v_2 = this.getParameter("currentDataXml");
        this._currentDataXml = XUI.Xml.LoadXml($v_2);
        var $v_3 = this.getParameter("currentPresentationXml");
        this._currentPresentationXml = XUI.Xml.LoadXml($v_3);
        var $v_4 = this.getParameter("ySelectedParams");
        if ($v_4) this.$2A_3 = $v_4.split("#");
        var $v_5 = this.getParameter("xSelectedParams");
        if ($v_5) this.$28_3 = $v_5.split("#");
        var $v_6 = this.getParameter("yAggrParams");
        if ($v_6) this.$29_3 = $v_6.split("#");
        var $v_7 = this.getParameter("xAggrParams");
        if ($v_7) this.$27_3 = $v_7.split("#");
        Array.clear(this.$26_3);
        var $v_8 = this.getParameter("usedAliasInDataDescription");
        if ($v_8)
            for (var $v_9 = $v_8.split("#"), $v_A = 0; $v_A < $v_9.length; ++$v_A) Array.add(this.$26_3, $v_9[$v_A]);
        this.autoFillTitle = false;
        this.updateFooterMessage($v_0);
        this.updateWindowTitle($v_1)
    },
    initializeAxisLabels: function() {
        var $v_0 = "topLeftLabel";
        if (window.LOCID_UI_DIR === "RTL") $v_0 = "topRightLabel";
        this._currentSeriesAxisLabel = this.getPaneChildElement($v_0);
        this._currentCategoryAxisLabel = this.getPaneChildElement("bottomLabel");
        this.swapLabelsIfRequired("")
    },
    isDesignerSupportedChartType: function() {
        return this.$5_3[this.getChartTypeString(this.get_firstSeriesId())] ? true : false
    },
    clearContentSpan: function(contentSpan) {
        var $v_0 = this.$1q_3();
        !IsNull($v_0) && $clearHandlers($v_0.contentWindow);
        contentSpan.innerHTML = ""
    },
    setPropertiesForChartTypes: function() {
        this.$5_3["column"] = new Mscrm.ChartType("column",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/colchart01.gif",
            "/_imgs/visualization/colchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("column"),
            window.LOCID_COLUMN_CHART);
        this.$5_3["stackedcolumn"] = new Mscrm.ChartType("stackedcolumn",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedColumn" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/colchart01.gif",
            "/_imgs/visualization/colchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("column"),
            window.LOCID_STACKEDCOLUMN_CHART);
        this.$5_3["stackedcolumn100"] = new Mscrm.ChartType("stackedcolumn100",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedColumn100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/colchart01.gif",
            "/_imgs/visualization/colchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("column"),
            window.LOCID_STACKEDCOLUMN100_CHART);
        this.$5_3["bar"] = new Mscrm.ChartType("bar",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="Bar" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>',
            "Bar",
            window.CDNURL + "/_imgs/visualization/barchart01.gif",
            "/_imgs/visualization/barchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("bar"),
            window.LOCID_BAR_CHART);
        this.$5_3["stackedbar"] = new Mscrm.ChartType("stackedbar",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedBar" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>',
            "Bar",
            window.CDNURL + "/_imgs/visualization/barchart01.gif",
            "/_imgs/visualization/barchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("bar"),
            window.LOCID_STACKEDBAR_CHART);
        this.$5_3["stackedbar100"] = new Mscrm.ChartType("stackedbar100",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedBar100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>',
            "Bar",
            window.CDNURL + "/_imgs/visualization/barchart01.gif",
            "/_imgs/visualization/barchart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("bar"),
            window.LOCID_STACKEDBAR100_CHART);
        this.$5_3["area"] = new Mscrm.ChartType("area",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="Area" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/areachart01.gif",
            "/_imgs/visualization/areachart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("area"),
            window.LOCID_AREA_CHART);
        this.$5_3["stackedarea"] = new Mscrm.ChartType("stackedarea",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedArea" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/areachart01.gif",
            "/_imgs/visualization/areachart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("area"),
            window.LOCID_STACKEDAREA_CHART);
        this.$5_3["stackedarea100"] = new Mscrm.ChartType("stackedarea100",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="StackedArea100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/areachart01.gif",
            "/_imgs/visualization/areachart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("area"),
            window.LOCID_STACKEDAREA100_CHART);
        this.$5_3["line"] = new Mscrm.ChartType("line",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            '<Series ChartType="Line" IsValueShownAsLabel="True" BorderWidth="3" MarkerStyle="Square" MarkerSize="9" MarkerColor="37, 128, 153" MarkerBorderColor="37, 128, 153"></Series>',
            "LineColumnArea",
            window.CDNURL + "/_imgs/visualization/linechart01.gif",
            "/_imgs/visualization/linechart02.gif",
            "inline",
            "absolute",
            Mscrm.VisualizationPane.$K("line"),
            window.LOCID_LINE_CHART);
        this.$5_3["pie"] = new Mscrm.ChartType("pie",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            null,
            "Incompatible",
            window.CDNURL + "/_imgs/visualization/piechart01.gif",
            "",
            "none",
            "relative",
            Mscrm.VisualizationPane.$K("pie"),
            window.LOCID_PIE_CHART);
        this.$5_3["funnel"] = new Mscrm.ChartType("funnel",
            "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
            null,
            "Incompatible",
            window.CDNURL + "/_imgs/visualization/funnelchart01.gif",
            "",
            "none",
            "relative",
            Mscrm.VisualizationPane.$K("funnel"),
            window.LOCID_FUNNEL_CHART);
        if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.Moca.InteractionCentricDashboard")) {
            this.$5_3["tag"] = new Mscrm.ChartType("tag",
                "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
                null,
                "Incompatible",
                "/_imgs/case_mix_by_product.png",
                "",
                "none",
                "relative",
                Mscrm.VisualizationPane.$K("tag"),
                window.LOCID_TAG_CHART);
            this.$5_3["doughnut"] = new Mscrm.ChartType("doughnut",
                "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;",
                null,
                "Incompatible",
                "/_imgs/case_mix_by_prority.png",
                "",
                "none",
                "relative",
                Mscrm.VisualizationPane.$K("doughnut"),
                window.LOCID_DOUGHNUT_CHART)
        }
    },
    $3E_3: function() {
        var $v_0 = $get("chartTypeBox");
        if (!IsNull($v_0))
            for (var $v_1 = $v_0.getElementsByTagName("img"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2], $v_4 = Mscrm.VisualizationPane.$2R($v_3);
                switch ($v_4) {
                case "column":
                case "bar":
                case "area":
                    var $v_5 = String.format("{0}MenuXML", $v_4), $v_6 = {};
                    $v_6["menuXml"] = this.getParameter($v_5);
                    Mscrm.CrmUIComponent.crmCreate(Mscrm.ChartTypePopup, $v_6, null, null, $v_3.parentNode);
                    break;
                default:
                    break
                }
            }
    },
    $3F_3: function() {
        var $v_0 = $get("topBottomBox");
        if (!IsNull($v_0))
            for (var $v_1 = $v_0.getElementsByTagName("img"), $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2], $v_4 = Mscrm.VisualizationPane.$2t($v_3);
                switch ($v_4) {
                case "top":
                case "bottom":
                    var $v_5 = String.format("{0}MenuXML", $v_4), $v_6 = {};
                    $v_6["menuXml"] = this.getParameter($v_5);
                    Mscrm.CrmUIComponent.crmCreate(Mscrm.TopBottomPopup, $v_6, null, null, $v_3.parentNode);
                    break;
                default:
                    break
                }
            }
    },
    get_drillDownParamObj: function() {
        if (IsNull(this.$v_3)) this.$v_3 = new Mscrm.DrillDownParameter;
        return this.$v_3
    },
    set_drillDownParamObj: function(value) {
        this.$v_3 = value;
        return value
    },
    get_multiLevelDrillDownParametersBackup: function() {
        if (IsNull(this.$1h_3)) this.$1h_3 = new Mscrm.MultiLevelDrillDownParameters;
        return this.$1h_3
    },
    get_navigateBack: function() { return this.$15_3 },
    set_navigateBack: function(value) {
        this.$15_3 = value;
        return value
    },
    get_navigateToHomeChart: function() { return this.$1i_3 },
    set_navigateToHomeChart: function(value) {
        this.$1i_3 = value;
        return value
    },
    checkIfDrilldownMode: function() {
        return !IsNull(this.getParameter("isDrillDownMode")) && Boolean.parse(this.getParameter("isDrillDownMode"))
    },
    getFilterSetControl: function() { return $find(this._gridId + "_filterSet") },
    refreshGridAndLoadVisualizationOnBack: function(isHomeChart) {
        this.handleBackButton(true);
        var $v_0 = !IsNull(this.get_paneGridControl());
        if ($v_0) this.$1L_3 = 1;
        if (!isHomeChart) {
            this.$15_3 = true;
            if ($v_0) {
                this.$O_3 = false;
                var $$t_5 = this;
                window.setTimeout(function() { $$t_5.removeGridFilters(null, true) }, 0)
            }
        } else {
            var $v_1 = window.document, $v_2 = this.getPaneChildElement("contentSpan");
            this.get_noVisualizations().style.display = "none";
            this.get_loadingSpan().style.display = "inline";
            $v_2.style.display = "none";
            var $v_3 = this.getPaneChildElement("vizForm");
            !IsNull($v_3) && $v_2.removeChild($v_3);
            if ($v_0) {
                this.removeGridFilters(null, true);
                this.loadVisualizationWhenGridIsHidden()
            }
        }
        (!isHomeChart || !$v_0) && this.loadVisualizationAsync(!isHomeChart)
    },
    refreshGridOnColumnSelection: function(drillDownParams) {
        if (!IsNull(this.get_paneGridControl())) {
            this.$O_3 = false;
            this.$3J_3(true, drillDownParams)
        }
    },
    refreshGridOnCancel: function(drillDownParams, isGridRefreshRequired, isChartRefreshRequired) {
        if (!IsNull(this.get_paneGridControl())) {
            this.handleBackButton(true);
            if (isGridRefreshRequired) {
                this.$1L_3 = 2;
                if (!isChartRefreshRequired) this.$O_3 = false
            }
            this.removeGridFilters(drillDownParams, isGridRefreshRequired)
        }
    },
    applyDrillDownOnWordCloud: function(parameters) {
        var $v_0 = true;
        !IsNull(this.get_paneGridControl()) && this.get_paneGridControl().SetParameter("doNotFetchData", "false");
        var $v_1 = this.getFilterSetControl();
        if (IsNull($v_1) || $v_1.IsFilterEnabled() || !$v_1.EnableFilters()) return;
        $v_1.set_isFilterOnHiddenCol(true);
        var $v_2 = new Mscrm.FilterConditionCollection(parameters.$1Y_0,
            parameters.$1Z_0,
            parameters.$1c_0,
            parameters.$1b_0,
            "");
        $v_2.set_relatedEntityDetails(parameters.$1d_0);
        var $v_3 = new Mscrm.FilterCondition(2, "eq", parameters.$1a_0, false, null);
        $v_3.set_isDirty(true);
        Array.add($v_2.get_filters(), $v_3);
        $v_1.addFilterConditions($v_2, $v_0);
        Mscrm.PageManager.isOutlookProxyPage() && getOutlookHostedWindow().refreshFilterList()
    },
    handleBackButton: function(isToBeDisabled) {
        var $v_0 = this.getPaneChildElement("vizIframe");
        if (!IsNull($v_0)) {
            this.enableDisableBackHomeButton("btnBack", isToBeDisabled, $v_0);
            this.enableDisableBackHomeButton("btnBackTop", isToBeDisabled, $v_0);
            this.enableDisableBackHomeButton("btnHome", isToBeDisabled, $v_0);
            this.enableDisableBackHomeButton("btnHomeTop", isToBeDisabled, $v_0)
        }
    },
    enableDisableBackHomeButton: function(id, disable, vizIframeElement) {
        var $v_0 = vizIframeElement.contentWindow.document.getElementById(id);
        if (!IsNull($v_0) && $v_0.disabled !== disable)
            if (disable) {
                $v_0.className = "ms-crm-DrillDown-back-disabled";
                $v_0.setAttribute("disabled", "disabled");
                $v_0.tabIndex = -1;
                if (!IsNull(XUI.Html.DomUtils.GetFirstChild($v_0)) &&
                    XUI.Html.DomUtils.GetFirstChild($v_0).nodeName === "IMG")
                    if (id === "btnBack")
                        XUI.Html.DomUtils.GetFirstChild($v_0)
                            .className = "ms-crm-DrillDown-back-imageDisabled flipImage";
                    else XUI.Html.DomUtils.GetFirstChild($v_0).className = "ms-crm-DrillDown-back-imageDisabled"
            } else {
                $v_0.className = "ms-crm-DrillDown-back-Link";
                $v_0.removeAttribute("disabled");
                $v_0.tabIndex = 0;
                if (!IsNull(XUI.Html.DomUtils.GetFirstChild($v_0)) &&
                    XUI.Html.DomUtils.GetFirstChild($v_0).nodeName === "IMG")
                    if (id === "btnBack")
                        XUI.Html.DomUtils.GetFirstChild($v_0)
                            .className = "ms-crm-DrillDown-back-imageEnabled flipImage";
                    else XUI.Html.DomUtils.GetFirstChild($v_0).className = "ms-crm-DrillDown-back-imageEnabled"
            }
    },
    addDrillDownSpecificParameterOnLoadVisualization: function(isDrilldown) {
        if (!IsNull(isDrilldown) && isDrilldown) {
            this.setParameter("isDrillDownMode", "true");
            this.addSubmitParameters("viewBy", this.get_drillDownParamObj().$1C_0);
            this.addSubmitParameters("isDrilldown", "true");
            this.addSubmitParameters("chartType", this.get_drillDownParamObj().$t_0);
            this.addSubmitParameters("x1Value", this.get_drillDownParamObj().$o_0);
            this.addSubmitParameters("x2Value", this.get_drillDownParamObj().$p_0);
            this.addSubmitParameters("primaryGroupByAlias", this.get_drillDownParamObj().$1P_0);
            this.addSubmitParameters("secondaryGroupByAlias", this.get_drillDownParamObj().$1R_0);
            this.addSubmitParameters("formattedXValue", this.get_drillDownParamObj().$h_0);
            !IsNull(this.get_drillDownParamObj().$b_0) &&
                this.addSubmitParameters("formattedX2Value", this.get_drillDownParamObj().$b_0);
            this.addSubmitParameters("seriesIndex", this.get_drillDownParamObj().$1B_0);
            this.addSubmitParameters("yColumnName", this.get_drillDownParamObj().$1G_0);
            this.addSubmitParameters("aggregationFetchXml", this.get_drillDownParamObj().$s_0, true);
            this.addSubmitParameters("filterFetchXml", this.get_drillDownParamObj().$w_0, true);
            !isNullOrEmptyString(this.get_drillDownParamObj().$g_0) &&
                this.addSubmitParameters("drillDownChartTitle", this.get_drillDownParamObj().$g_0);
            this.addSubmitParameters("alreadyViewByAttr", this.getParameter("alreadyViewByAttribute"));
            !isNullOrEmptyString(this.get_drillDownParamObj().$d_0) &&
                this.addSubmitParameters("primaryGroupByStartDate", this.get_drillDownParamObj().$d_0);
            !isNullOrEmptyString(this.get_drillDownParamObj().$c_0) &&
                this.addSubmitParameters("primaryGroupByEndDate", this.get_drillDownParamObj().$c_0);
            !isNullOrEmptyString(this.get_drillDownParamObj().$f_0) &&
                this.addSubmitParameters("secondaryGroupByStartDate", this.get_drillDownParamObj().$f_0);
            !isNullOrEmptyString(this.get_drillDownParamObj().$e_0) &&
                this.addSubmitParameters("secondaryGroupByEndDate", this.get_drillDownParamObj().$e_0);
            this.$15_3 && this.addSubmitParameters("backNavigation", "true")
        } else {
            this.setParameter("isDrillDownMode", "false");
            var $v_1 = this.getFilterSetControl();
            !IsNull($v_1) && $v_1.clearAllFiltersBackup()
        }
        var $v_0 = $find(this._gridId);
        if (!IsNull($v_0)) {
            var $v_2 = $v_0.GetParameter("fetchXmlForFilters");
            if (!isNullOrEmptyString($v_2) && !isNullOrEmptyString(this.getParameter("enableDrillDown"))
            ) this.addSubmitParameters("enableDrillDown", this.getParameter("enableDrillDown"));
            else
                (isNullOrEmptyString($v_2) || this.isQuickFindQuery(this.getParameter("vizPaneViewId"), true)) &&
                    this.addSubmitParameters("enableDrillDown", "false")
        }
    },
    clearDrilldownBackup: function(isDrilldown) {
        if (!isDrilldown) this.$1h_3 = null;
        else if (this.$15_3) {
            this.$v_3 = this.get_multiLevelDrillDownParametersBackup()
                .getAtIndex(this.get_multiLevelDrillDownParametersBackup().$E_0 - 1).clone();
            this.get_multiLevelDrillDownParametersBackup().remove()
        }
    },
    removeGridFilters: function(drillDownParams, isGridRefreshRequired) {
        if (!IsNull(drillDownParams)) this.$3J_3(false, drillDownParams);
        else if (!this
            .$1i_3 &&
            this.get_multiLevelDrillDownParametersBackup().$E_0 > 0) this.$3J_3(false, this.get_drillDownParamObj());
        else
            for (var $v_0 = this.get_multiLevelDrillDownParametersBackup().$E_0; $v_0 >= 0; $v_0--) {
                var $v_1 = this.get_multiLevelDrillDownParametersBackup().getAtIndex($v_0);
                this.$3J_3(false, $v_1)
            }
        if (isGridRefreshRequired) {
            var $v_2 = this.getFilterSetControl();
            !IsNull($v_2) && $v_2.RefreshWithFilters()
        }
    },
    $3J_3: function($p0, $p1, $p2) {
        if (IsNull($p2)) $p2 = true;
        var $v_0 = this.getFilterSetControl();
        if (!IsNull($v_0)) {
            if (!$v_0.IsFilterEnabled()) if (!$v_0.EnableFilters()) return;
            for (var $v_1 = null,
                $v_2 = $p1.$n_0,
                $v_3 = null,
                $v_4 = null,
                $v_5 = null,
                $v_6 = null,
                $v_7 = null,
                $v_8 = null,
                $v_9 = null,
                $v_A = null,
                $v_B = null,
                $v_C = isNullOrEmptyString($v_2),
                $v_D = $v_C ? 1 : 2,
                $v_E = false,
                $v_F = 0;
                $v_F < $v_D;
                $v_F++) {
                $v_B = $p1.$R_0.length > $v_F ? $p1.$R_0[$v_F] : null;
                if (!$v_F) {
                    $v_1 = $p1.$1D_0;
                    $v_3 = $p1.$1F_0;
                    $v_5 = $p1.$o_0;
                    $v_6 = $p1.$11_0;
                    $v_7 = $p1.$h_0;
                    $v_4 = $p1.$1E_0;
                    $v_8 = $p1.$d_0;
                    $v_9 = $p1.$c_0;
                    $v_E = isNullOrEmptyString($p1.$k_0) ? false : Boolean.parse($p1.$k_0);
                    $v_A = $p1.$16_0
                }
                if ($v_F === 1) {
                    $v_1 = $p1.$n_0;
                    $v_3 = $p1.$18_0;
                    $v_5 = $p1.$p_0;
                    $v_6 = $p1.$1A_0;
                    $v_7 = $p1.$b_0;
                    $v_4 = $p1.$17_0;
                    $v_8 = $p1.$f_0;
                    $v_9 = $p1.$e_0;
                    $v_C = true;
                    $v_E = isNullOrEmptyString($p1.$l_0) ? false : Boolean.parse($p1.$l_0);
                    $v_A = $p1.$19_0
                }
                var $v_G = $v_0.findPopup($v_3, $v_1, $v_E, $v_A);
                if (IsNull($v_G) && Mscrm.PageManager.isOutlookProxyPage()) {
                    getOutlookHostedWindow().initializeFilter($v_3, $v_1, $v_E, $v_A);
                    $v_G = $v_0.findPopup($v_3, $v_1, $v_E, $v_A)
                }
                if (!IsNull($v_G))
                    if ($p0) {
                        $v_0.addVisualizationFilter($v_3,
                            $v_1,
                            $v_5,
                            $v_6,
                            $v_7,
                            $v_4 === "datetime",
                            $v_8,
                            $v_9,
                            $v_C && $p2,
                            $v_E,
                            $v_A);
                        Array.add($p1.$R_0, null)
                    } else $v_0.removeVisualizationFilter($v_3, $v_1, $v_E, $v_A);
                else {
                    $v_0.set_isFilterOnHiddenCol(true);
                    var $v_H = new Mscrm.FilterConditionCollection($v_1, $v_4, $v_E, $v_3, "");
                    $v_E && $v_H.set_relatedEntityDetails($v_A);
                    if ($v_4 === "datetime" && !isNullOrEmptyString($v_8) && !isNullOrEmptyString($v_9)
                    ) this.addDateTimeLimits($v_H, $v_1, $v_4, $p0, $v_3, $v_8, $v_9, $v_B);
                    else Array.add($v_H.get_filters(), this.addRegularFilter($v_5, $p0, $v_B));
                    var $v_I = null;
                    if ($p0) {
                        $v_I = $v_0.addFilterConditions($v_H, $v_C && $p2);
                        Array.add($p1.$R_0, $v_I)
                    } else $v_I = $v_0.addFilterConditions($v_H, false)
                }
            }
            Mscrm.PageManager.isOutlookProxyPage() && getOutlookHostedWindow().refreshFilterList()
        }
    },
    addRegularFilter: function(parameterValue, addFilter, filterIds) {
        var $v_0 = 2,
            $v_1 = "eq",
            $v_2 = false,
            $v_3 = addFilter ? null : '/fetch//condition[@gridfilterconditionid="' + filterIds[0] + '"]',
            $v_4;
        if (parameterValue !== "") $v_4 = new Mscrm.FilterCondition($v_0, $v_1, parameterValue, $v_2, $v_3);
        else $v_4 = new Mscrm.FilterCondition(1, "null", parameterValue, $v_2, $v_3);
        $v_4.set_isDirty(true);
        !addFilter && $v_4.set_isDeleted(true);
        return $v_4
    },
    addDateTimeLimits: function(filterConditions,
        attributeName,
        attributeType,
        addFilter,
        entityName,
        startDate,
        endDate,
        filterIds) {
        if (!isNullOrEmptyString(startDate) && !isNullOrEmptyString(endDate)) {
            var $v_0 = 2,
                $v_1 = "on-or-after",
                $v_2 = "on-or-before",
                $v_3 = addFilter ? null : '/fetch//condition[@gridfilterconditionid="' + filterIds[0] + '"]',
                $v_4 = new Mscrm.FilterCondition($v_0, $v_1, startDate, false, $v_3);
            $v_3 = addFilter ? null : '/fetch//condition[@gridfilterconditionid="' + filterIds[1] + '"]';
            var $v_5 = new Mscrm.FilterCondition($v_0, $v_2, endDate, false, $v_3);
            $v_4.set_isDirty(true);
            $v_5.set_isDirty(true);
            var $v_6 = new Mscrm.CustomFilterConditionGroup($v_4, $v_5, 1);
            if (!addFilter) {
                $v_6.set_oldPrimary($v_6.get_primary());
                $v_6.set_primary(null);
                $v_6.set_oldSecondary($v_6.get_secondary());
                $v_6.set_secondary(null)
            }
            filterConditions.set_customFilters($v_6)
        } else {
            var $v_7 = addFilter ? null : '/fetch//condition[@gridfilterconditionid="' + filterIds[0] + '"]',
                $v_8 = new Mscrm.FilterCondition(1, "null", null, !addFilter, $v_7);
            !addFilter && $v_8.set_isDeleted(true);
            $v_8.set_isDirty(true);
            Array.add(filterConditions.get_filters(), $v_8)
        }
        return filterConditions
    },
    isChartDrillable: function() {
        var $v_0 = this.getPaneChildElement("vizIframe");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.contentWindow.document.getElementById("drillDownBox");
            if (!IsNull($v_1)) return true
        }
        return false
    },
    $4H_3: function($p0, $p1) {
        var $v_0 = this.get_paneGridControl();
        if (!IsNull($v_0)) {
            this.$O_3 = false;
            this.$3J_3(true, $p0, $p1)
        }
    },
    $43_3: function() {
        if (this.get_multiLevelDrillDownParametersBackup())
            for (var $v_0 = this.get_multiLevelDrillDownParametersBackup().$E_0, $v_1 = 0; $v_1 <= $v_0; ++$v_1) {
                var $v_2 = this.get_multiLevelDrillDownParametersBackup().getAtIndex($v_1);
                this.$4H_3($v_2, $v_1 === $v_0)
            }
    },
    $4A_3: function() {
        var $v_0 = this.get_paneGridControl();
        !IsNull($v_0) && $v_0.SetParameter("doNotFetchData", "false");
        var $v_1 = false;
        try {
            if (!IsNull(window.top.opener) && !window.top.opener.closed) {
                var $v_2 = this.getParameter("parentVizPaneId"),
                    $v_3 = window.top.opener.Sys.Application.findComponent($v_2);
                if (!IsNull($v_3)) {
                    var $v_4 = $v_3.get_multiLevelDrillDownParametersBackup();
                    if ($v_4.$E_0 >= 0) {
                        for (var $v_5 = 0; $v_5 <= $v_4.$E_0; ++$v_5) {
                            var $v_6 = $v_4.getAtIndex($v_5);
                            this.get_multiLevelDrillDownParametersBackup().add($v_6.clone())
                        }
                        this.$v_3 = this.get_multiLevelDrillDownParametersBackup()
                            .getAtIndex(this.get_multiLevelDrillDownParametersBackup().$E_0).clone();
                        $v_1 = true
                    }
                }
            }
        } catch ($$e_7) {
            $v_1 = false
        }
        if (!$v_1)
            if (!IsNull($v_0)) {
                this.$O_3 = false;
                $v_0.refresh()
            }
        this.setParameter("parentVizPaneId", null);
        return $v_1
    },
    anchorlink: null,
    visualizationMenu: null,
    isVisualizationListEmpty: function() {
        if (this.getSelectedVisualization()) return false;
        return true
    },
    refreshCurrentVisualizationIdAndType: function() {
        this.set_visualizationId(this.getSelectedVisualization());
        this.set_visualizationType(this.getSelectedVisualizationType());
        this.fireEventForStickyVisualization()
    },
    handleEntityChange: function(entityLogicalName, selectedVisualizationId) {
        if (this.getParameter("vizPanePrimaryEntityName") !== entityLogicalName) {
            this.setParameter("vizPanePrimaryEntityName", entityLogicalName);
            if (isNullOrEmptyString(selectedVisualizationId)) this.loadVisualizationsForCurrentView();
            else this.refreshAndSetVisualizationList(selectedVisualizationId)
        }
    },
    HandleVisualizationChange: function(eventCode, parameters) {
        var $v_0 = parameters["menuitem"],
            $v_1 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@id='" + $v_0.get_menuItemId() + "']",
                null),
            $v_2 = XUI.Xml.GetText($v_1.attributes.getNamedItem("display")),
            $v_3 = XUI.Xml.GetText($v_1.attributes.getNamedItem("type")),
            $v_4 = XUI.Xml.GetText($v_1.attributes.getNamedItem("id"));
        this.setChartNameForSelector($v_2, $v_4, $v_3, $v_1);
        !IsNull(this.visualizationMenu.get_menuXml()) && this.refreshCurrentVisualizationIdAndType();
        this.loadVisualization(false)
    },
    getSelectedVisualizationType: function() {
        if (!IsNull(this.visualizationMenu)) {
            var $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@isselected='true']",
                null);
            if (!IsNull($v_0)) return Number.parseInvariant(XUI.Xml.GetText($v_0.attributes.getNamedItem("type")))
        }
        return 0
    },
    getChartType: function() {
        if (!IsNull(this.visualizationMenu)) {
            var $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@isselected='true']",
                null);
            if (!IsNull($v_0)) return Number.parseInvariant(XUI.Xml.GetText($v_0.attributes.getNamedItem("chartType")))
        }
        return 0
    },
    getSelectedVisualizationProperty: function(propertyName) {
        if (!IsNull(this.visualizationMenu)) {
            var $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@isselected='true']",
                null);
            if (!IsNull($v_0)) return XUI.Xml.GetText($v_0.attributes.getNamedItem(propertyName))
        }
        return ""
    },
    loadVisualizationsForCurrentViewIfNotLoaded: function() {
        if (this.$1O_3) return;
        this.loadVisualizationsForCurrentView()
    },
    loadVisualizationsForCurrentView: function() { this.loadAndSetVisualizationsForCurrentView(true) },
    loadAndSetVisualizationsForCurrentView: function(setDefaultSelection) {
        var $v_0 = this.getPaneChildElement("vizList");
        this.hideVizList();
        if (!IsNull($v_0)) {
            var $v_1 = new RemoteCommand("PaneWebService", "GetSortedVisualizationList", null);
            $v_1.IncludeContextInPath = true;
            $v_1.SetParameter("entityLogicalName", this.getParameter("vizPanePrimaryEntityName"));
            $v_1.SetParameter("parametersXml", this.buildParamListForVisualizationRetrieval());
            var $v_2 = $v_1.Execute(null), $v_3 = $v_2.ReturnValue;
            $v_0.innerHTML = $v_3;
            this.$1O_3 = true;
            this.registerVisualizationListHandler();
            this.setSelectorName();
            setDefaultSelection && this.refreshCurrentVisualizationIdAndType()
        }
    },
    removeVizListItems: function(vizList) {
        while (vizList.children.length) vizList.removeChild(XUI.Html.DomUtils.GetLastChild(vizList))
    },
    resetVizlist: function() { this.refreshCurrentVisualizationIdAndType() },
    setVisualizationSelected: function(visualizationId) {
        if (!IsNull(this.visualizationMenu)) {
            visualizationId = visualizationId.toUpperCase();
            var $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@id='" + visualizationId + "']",
                null);
            if (!IsNull($v_0) && !IsNull($v_0.attributes.getNamedItem("id"))) {
                var $v_1 = XUI.Xml.GetText($v_0.attributes.getNamedItem("id"));
                $v_1 = $v_1.replace("{", "");
                $v_1 = $v_1.replace("}", "");
                visualizationId = visualizationId.replace("{", "");
                visualizationId = visualizationId.replace("}", "");
                if ($v_1.toUpperCase() === visualizationId.toUpperCase()) {
                    this.resetSelectedItem();
                    this.visualizationMenu.setAttributeUtil($v_0, "isselected", "true");
                    this.setSelectorName()
                }
            }
            this.refreshCurrentVisualizationIdAndType()
        }
    },
    refreshAndSetVisualizationList: function(vizId) {
        this.set_visualizationId(vizId);
        this.loadAndSetVisualizationsForCurrentView(false);
        this.setVisualizationSelected(vizId)
    },
    buildParamListForVisualizationRetrieval: function() {
        var $v_0 = new Sys.StringBuilder;
        $v_0.append("<parameters>");
        !IsNull(this.getParameter("ShowUserVisualization")) &&
            !Boolean.parse(this.getParameter("ShowUserVisualization")) &&
            $v_0.append("<ShowUserGroup>false</ShowUserGroup>");
        !IsNull(this.getParameter("ShowChartPicker")) &&
            !Boolean.parse(this.getParameter("ShowChartPicker")) &&
            $v_0.append("<ShowChartPicker>false</ShowChartPicker>");
        if (!isNullOrEmptyString(this.getParameter("CurrentVisualizationId")) &&
            !isNullOrEmptyString(this.getParameter("CurrentVisualizationType"))) {
            $v_0.append("<SelectedVisualization>");
            $v_0.append(CrmEncodeDecode.CrmXmlEncode(this.getParameter("CurrentVisualizationId")));
            $v_0.append("</SelectedVisualization>");
            $v_0.append("<SelectedVisualizationType>");
            $v_0.append(CrmEncodeDecode.CrmXmlEncode(this.getParameter("CurrentVisualizationType")));
            $v_0.append("</SelectedVisualizationType>")
        }
        $v_0.append("</parameters>");
        return $v_0.toString()
    },
    onClickHandler: function(domEvent) {
        domEvent.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "A"),
            $v_1 = new Mscrm.SelectorUtil(this.anchorlink, this.visualizationMenu, this.$1y_3);
        $v_1.selectorClicked($v_0)
    },
    resetSelectedItem: function() {
        for (var $v_0 = XUI.Xml.SelectNodes(this.visualizationMenu.get_menuXml(), "//MenuItem", null), $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) this.visualizationMenu.setAttributeUtil($v_0[$v_1], "isselected", "false")
    },
    setChartNameForSelector: function(VisualizationName, VisualizationId, VisualizationType, node) {
        this.resetSelectedItem();
        this.visualizationMenu.setAttributeUtil(node, "isselected", "true");
        var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.getPaneChildElement("visualizationListLink"));
        XUI.Html.SetText($v_0, VisualizationName);
        $v_0.setAttribute("CurrentItem", VisualizationId);
        $v_0.setAttribute("CurrentItemType", VisualizationType)
    },
    registerVisualizationListHandler: function() {
        var $v_0, $v_1 = this.getPaneChildElement("visualizationListContainer");
        if (!IsNull($v_1)) {
            this.$1y_3 = $v_1.attributes.getNamedItem("MenuXml").value;
            this.anchorlink = this.getPaneChildElement("visualizationListLink");
            $v_0 = this.$$d_onClickHandler;
            $addHandler(this.anchorlink, "click", $v_0);
            this.visualizationMenu = new Mscrm.Popup(this.$$d_HandleVisualizationChange);
            this.visualizationMenu.set_menuXml(XUI.Xml.LoadXml(this.$1y_3));
            var $v_2 = document.createAttribute("DefaultItem"),
                $v_3 = XUI.Xml.SelectNodes(this.visualizationMenu.get_menuXml(), "//MenuItem", null);
            if ($v_3.length > 0) {
                if (!IsNull($v_3[1].attributes
                    .getNamedItem("id"))) $v_2.value = XUI.Xml.GetText($v_3[1].attributes.getNamedItem("id"));
                else $v_2.value = "";
                $v_1.attributes.setNamedItem($v_2)
            }
        }
    },
    setSelectorName: function() {
        var $v_0 = null;
        if (!IsNull(this.visualizationMenu))
            $v_0 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@id='" + this.getSelectedVisualization() + "']",
                null);
        var $v_1 = null, $v_2 = null, $v_3 = null;
        if (!IsNull($v_0)) {
            $v_1 = XUI.Xml.GetText($v_0.attributes.getNamedItem("display"));
            $v_2 = XUI.Xml.GetText($v_0.attributes.getNamedItem("type"));
            $v_3 = XUI.Xml.GetText($v_0.attributes.getNamedItem("id"));
            this.setChartNameForSelector($v_1, $v_3, $v_2, $v_0)
        }
    },
    hideVizList: function() {
        !IsNull(this.visualizationMenu) &&
            !IsNull(this.visualizationMenu.get_currentMenu()) &&
            this.visualizationMenu.get_currentMenu().hide()
    },
    $1y_3: null,
    $1z_3: null,
    $z_3: null,
    $14_3: null,
    $13_3: null,
    $1Q_3: null,
    $1v_3: null,
    $1O_3: false,
    $U_3: 0,
    $S_3: true,
    $1L_3: 0,
    $O_3: true,
    $u_3: "/Visualization/visualization.aspx",
    $1i_3: false,
    $15_3: false,
    $v_3: null,
    $1h_3: null,
    $2L_3: null,
    $2J_3: null,
    $1w_3: null,
    $1H_3: 0,
    $1U_3: 0,
    $2X_3: 0,
    $2W_3: 0,
    $2P_3: "0px",
    $1I_3: 0,
    $1J_3: 0,
    $V_3: null,
    _gridId: null,
    get_visualizationId: function() { return this.getParameter("CurrentVisualizationId") },
    set_visualizationId: function(value) {
        this.setParameter("CurrentVisualizationId", value);
        return value
    },
    get_visualizationType: function() { return Number.parseInvariant(this.getParameter("CurrentVisualizationType")) },
    set_visualizationType: function(value) {
        this.setParameter("CurrentVisualizationType", value.toString());
        return value
    },
    get_paneSize: function() { return this.getParameter("paneSize") },
    set_paneSize: function(value) {
        this.setParameter("paneSize", value.toString());
        return value
    },
    get_useCachedData: function() { return this._useCachedData },
    set_useCachedData: function(value) {
        this._useCachedData = value;
        return value
    },
    $23_3: null,
    get_$r_3: function() {
        if (IsNull(this.$23_3)) this.$23_3 = $find(this._gridId + "_splitTD");
        return this.$23_3
    },
    get_noVisualizations: function() {
        if (IsNull(this.$2L_3)) return this.getPaneChildElement("emptyVizSpan");
        else return this.$2L_3
    },
    get_loadingSpan: function() {
        if (IsNull(this.$2J_3)) return this.getPaneChildElement("loadingSpan");
        else return this.$2J_3
    },
    get_paneGridControl: function() {
        if (IsNull(this.$1w_3)) this.$1w_3 = $find(this._gridId);
        return this.$1w_3
    },
    isDefaultVisualizationModule: function() { return this.$2q_3() === this.$u_3 },
    isGridRefreshedThroughChartAction: function() { return !!this.$1L_3 },
    get_isChartStale: function() { return this.$S_3 },
    isVisualizationPaneVisible: function() { return this.get_currentVisualizationPaneMode() !== "4" },
    isVisualizationPaneOpen: function() {
        var $v_0 = this.get_currentVisualizationPaneMode();
        if (Mscrm.SessionInfo.isOutlookClient()) return $v_0 !== "4";
        else return $v_0 !== "4" && $v_0 !== "0"
    },
    get_showVisualizationList: function() {
        var $v_0 = this.getParameter("ShowChartPicker");
        if (!isNullOrEmptyString($v_0)) return Boolean.parse($v_0);
        return false
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (!isNullOrEmptyString(this.getParameter("gridid"))) this._gridId = this.getParameter("gridid");
        else this._gridId = "crmGrid";
        this.$3x_3();
        var $v_0 = $find(this._gridId);
        if (!IsNull($v_0)) {
            this.setParameter("vizPaneViewId", $v_0.GetParameter("viewid"));
            this.setParameter("vizPaneViewType", $v_0.GetParameter("viewtype"))
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.Utilities.removeControlFromXrmUI(this.$V_3);
        var $v_0 = window.top.$find("crmRibbonManager");
        !IsNull($v_0) && $v_0.destroyChartCommandBar();
        !IsNull(this.visualizationMenu) && this.visualizationMenu.dispose();
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    handlePageLoad: function() {
        this._paneMode = parseInt(this.getParameter("vizPaneMode"));
        if (this.get_currentVisualizationPaneMode() !== "4")
            if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode ||
                this
                ._paneMode ===
                Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode) this.initializeDesignerMode();
            else this.initializeRuntimeMode();
        var $v_0 = this.getParameter("vizPaneOtc");
        Mscrm.EntityPropUtil.isActivityTypeCode(Number.parseInvariant($v_0)) &&
            Mscrm.PageManager.isOutlookProxyPage() &&
            this.fireEventForStickyVisualization()
    },
    handleRibbonLoad: function() {
        this._paneMode = parseInt(this.getParameter("vizPaneMode"));
        if (this.get_currentVisualizationPaneMode() !== "4")
            if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode ||
                this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode) {
                var $v_0 = window.top.$find("crmRibbonManager");
                $v_0 && $v_0.setChartDesignerCommandBar($get("chartDesignerCommandBar", this.get_element()))
            } else {
                var $v_1 = window.top.$find("crmRibbonManager");
                if ($v_1) {
                    var $v_2 = $get("chartPaneCommandBar", this.get_element()),
                        $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2);
                    while (!IsNull($v_3)) {
                        $v_2.removeChild($v_3);
                        $v_3 = XUI.Html.DomUtils.GetFirstChild($v_2)
                    }
                    $v_1.setChartPaneCommandBar($get("chartPaneCommandBar", this.get_element()))
                }
            }
    },
    initializeRuntimeMode: function() {
        var $v_0 = this.get_currentVisualizationPaneMode();
        if ($v_0 !== "4" && $v_0 !== "0") this.$1O_3 = true;
        var $v_1 = window.LOCID_EMPTY_GRID_MESSAGE_REFRESH, $v_2 = false;
        if (!isNullOrEmptyString(this.getParameter("ispreviewmode")) &&
            Boolean.parse(this.getParameter("ispreviewmode"))) {
            $v_2 = true;
            $v_1 = this.getParameter("emptypanemessage")
        }
        var $v_3 = $find("PrimaryEntity");
        if ($v_2 || window._IsRefreshForm === "1" && isNullOrEmptyString($v_3.get_recordId())) {
            this.$2b_3($v_1);
            return
        }
        !IsNull(this.get_$r_3()) && this.get_$r_3().setViewLabelDisplayName();
        this.$3g_3()
    },
    $3g_3: function() {
        var $v_0 = false, $v_1 = false;
        if (!isNullOrEmptyString(this.getParameter("parentVizPaneId")))
            if (this.$3p_3()) {
                $v_0 = true;
                $v_1 = true
            } else $v_0 = this.$4A_3();
        this.get_currentVisualizationPaneMode() !== "0" && this.loadVisualization($v_0 ? true : false);
        if ($v_0)
            if ($v_1) this.applyDrillDownOnWordCloud(this.$3Y_3());
            else this.$43_3()
    },
    $3p_3: function() {
        var $v_0 = "isWordCloudDrillDown", $v_1 = Xrm.Page.context.getQueryStringParameters();
        return !IsNull($v_1) && $v_0 in $v_1 && Boolean.parse($v_1[$v_0])
    },
    $3Y_3: function() {
        var $v_0 = new Mscrm.WordCloudDrillDownParameters;
        $v_0.$1b_0 = "topic";
        $v_0.$1Y_0 = "keyphrase";
        $v_0.$1Z_0 = "nvarchar";
        $v_0.$1c_0 = true;
        $v_0.$1d_0 = "topic;incidentid;incidentid";
        $v_0.$1a_0 = this.getParameter("parentVizPaneId");
        return $v_0
    },
    $49_3: function($p0, $p1) {
        if (!IsNull(window
                .parent) &&
            !IsNull(window.parent.opener) &&
            !IsNull(window.parent.opener.AppDesignerCallback)) {
            var $v_0 = $p0.VisualizationId,
                $v_1 = Mscrm.CrmUri.getExtraQueryStringKeyValue("entityId", window.parent.location.href);
            if (!isNullOrEmptyString($v_1)) $v_1 = $v_1.substring(1, $v_1.length - 1).toLowerCase();
            var $v_2 = new Mscrm.AppDesignerResult;
            $v_2.id = $v_0.substring(1, $v_0.length - 1).toLowerCase();
            $v_2.displayName = $p0.VisualizationName;
            $v_2.description = $p1;
            window.parent.opener.AppDesignerCallback($v_2, "Chart", $v_1)
        }
    },
    isCustomQuery: function() {
        var $v_0 = $find(this._gridId);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.GetParameter("isFetchXmlNotFinal");
            if (!isNullOrEmptyString($v_1) && Boolean.parse($v_1)) return true
        }
        return false
    },
    handleGridRefresh: function(autoRefresh) {
        if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode || this.$2N_3()) return;
        this.$2Y_3();
        if (!this.$S_3 && !this.isGridRefreshedThroughChartAction() && this.$O_3)
            if (this.isVisualizationPaneOpen()) {
                if (!autoRefresh) {
                    this.$U_3 = 1;
                    if (this.$L_3 !== -1) {
                        window.clearInterval(this.$L_3);
                        this.$L_3 = -1
                    }
                    var $v_1 = this.$1W_3();
                    if (!IsNull($v_1)) {
                        this.$O_3 = false;
                        this.$3O_3($v_1);
                        this.$L_3 = window.setInterval(this.$$d_$3R_3, 50)
                    } else {
                        var $v_2 = this.getDivInIFrame("errorDiv"), $v_3 = this.getDivInIFrame("updateDiv");
                        if (!IsNull($v_2)) $v_2.style.display = "none";
                        if (!IsNull($v_3)) {
                            this.$O_3 = false;
                            this.$3B_3();
                            this.$S_3 = true
                        }
                    }
                }
                var $v_0 = this.getPaneChildElement("vizIframe");
                if (!IsNull($v_0)) {
                    var $v_4 = $v_0.contentWindow.document.getElementById("drillDownBox");
                    if (!IsNull($v_4)) $v_4.style.display = "none"
                }
            } else if (this.get_currentVisualizationPaneMode() === "0") {
                this.$S_3 = true;
                this.$O_3 = false
            }
        if (this.$O_3) {
            var $v_5 = false;
            switch (this.$1L_3) {
            case 2:
                $v_5 = this.checkIfDrilldownMode();
                break;
            default:
                break
            }
            this.loadVisualizationAsync($v_5)
        } else this.isGridRefreshedThroughChartAction() && this.handleBackButton(false);
        this.$34_3()
    },
    handleGridResetComplete: function(parameters) {
        if (this.isVisualizationPaneOpen()) {
            if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
                this.isQuickFindQuery(parameters["viewid"])) return;
            this.loadVisualization(false)
        } else if (this.get_currentVisualizationPaneMode() === "0") this.$S_3 = true
    },
    handleGridReset: function(parameters) {
        if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
            this.isQuickFindQuery(parameters["viewid"])) return;
        this.setParameter("vizPaneViewId", parameters["viewid"]);
        this.setParameter("vizPaneViewType", parameters["viewtype"]);
        this.$2Y_3();
        this.$34_3();
        if (this.isVisualizationPaneOpen()) {
            this.get_loadingSpan().style.display = "inline";
            var $v_0 = this.getPaneChildElement("contentSpan");
            $v_0.style.display = "none";
            this.get_noVisualizations().style.display = "none";
            this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
                this.switchMode(Mscrm.VisualizationPaneRenderingModes.RuntimeMode)
        }
    },
    $3e_3: function($p0) {
        var $v_0 = this.getIframeWin();
        if (!IsNull($v_0)) {
            var $v_1 = $p0;
            if (!IsNull($v_1))
                switch ($v_1.keyCode) {
                case 83:
                    if ($p0.ctrlKey) this.saveVisualization();
                    else $p0.altKey && this.saveAndCloseVisualization();
                    break;
                case 17:
                case 116:
                    $v_1.keyCode = 0;
                    this.cancelEvent($v_1);
                    break;
                case 27:
                    if (this.isEnlargePaneOpen()) {
                        this.cancelEvent($v_1);
                        this.closeEnlargePane($v_1)
                    }
                    break
                }
        }
        if (!IsNull(window.document)) {
            var $v_2 = window.event;
            if (!IsNull($v_2))
                if ($p0.keyCode === 83 && $p0.ctrlKey) this.saveVisualization();
                else $p0.keyCode === 83 && $p0.altKey && this.saveAndCloseVisualization()
        }
        return
    },
    $3x_3: function() {
        this.registerVisualizationListHandler();
        this.setSelectorName();
        this.registerToolBarHandler();
        this.registerEnlargePaneHandler()
    },
    refreshVisualizationPane: function(domEvent) {
        this.cancelEvent(domEvent);
        if (this.isPaneInDesignerMode()) return;
        Mscrm.PageManager.get_instance().raiseEvent(54, null);
        this.cancelDrillDownAndLoadVisualization(!this.$S_3 && this.checkIfDrilldownMode())
    },
    cancelDrillDownAndLoadVisualization: function(isDrillDown) {
        var $v_0 = false;
        if (!IsNull(this.get_paneGridControl())) {
            var $v_1 = this.getPaneChildElement("vizIframe");
            try {
                $v_0 = $v_1.contentWindow.Mscrm.Visualization.cancelDrillDown(true, true)
            } catch ($$e_3) {
            }
        }
        !$v_0 && this.loadVisualization(isDrillDown)
    },
    hideVisualizationPane: function() {
        var $v_0 = $find(this._gridId + "_splitTD");
        !IsNull($v_0) && $v_0.hideVisualizationPane()
    },
    toggleVisualizationPane: function() {
        var $v_0 = $find(this._gridId + "_splitTD");
        !IsNull($v_0) && $v_0.togglePaneSize()
    },
    showVisualizationPane: function(loadVisualizationNotRequired) {
        if (this.get_currentVisualizationPaneMode() === "0") {
            Mscrm.PageManager.isOutlookProxyPage() && getOutlookHostedWindow().showVisualizationCollapsed(false);
            !this.$1O_3 && this.loadVisualizationsForCurrentView();
            this.get_$r_3().showVisualizationPane();
            if (this.$S_3 && !loadVisualizationNotRequired) this.loadVisualization(false);
            else refreshRibbon(0);
            var $v_0 = window.top.$find("crmRibbonManager");
            $v_0 && $v_0.setChartPaneCommandBar($get("chartPaneCommandBar", this.get_element()))
        }
    },
    loadVisualization: function(isDrilldown) {
        var $v_0 = this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode;
        if (this.get_showVisualizationList()) {
            var $v_8 = this.getPaneChildElement("headerRowTR");
            if (!IsNull($v_8)) $v_8.style.display = "block"
        }
        var $v_1 = "", $v_2 = this.$u_3, $v_3 = this.getPaneChildElement("contentSpan"), $v_4;
        if (!$v_0) {
            $v_4 = this.getPaneChildElement("vizIframe");
            if ($v_3) $v_3.style.display = "none"
        } else $v_4 = this.getPaneChildElement("previewIframe");
        if (this.$2V_3()) return;
        if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
            $v_1 = this.get_visualizationId();
            $v_2 = this.$2q_3();
            if (isNullOrEmptyString($v_1)) {
                if (!this.$2N_3()) {
                    var $v_9 = "";
                    if (!IsNull(this
                        .get_paneGridControl())) $v_9 = this.get_paneGridControl().get_entityDisplayPluralName();
                    var $v_A = String.format(window.LOCID_VP_NOASSOSVISUALIZATION, $v_9);
                    this.$2b_3($v_A);
                    this.updateFooterMessage("")
                }
                if (this.get_loadingSpan()) this.get_loadingSpan().style.display = "none";
                if (this.get_noVisualizations()) this.get_noVisualizations().style.display = "inline";
                this.$3C_3(false);
                if (!isNullOrEmptyString(this.getParameter("IsDashboardComponent")) &&
                    Boolean.parse(this.getParameter("IsDashboardComponent"))) refreshRibbon(0);
                else refreshRibbon();
                return
            } else {
                this.$3C_3(true);
                if (this.$2N_3()) return;
                if (this.get_noVisualizations()) this.get_noVisualizations().style.display = "none";
                if (this.get_loadingSpan()) this.get_loadingSpan().style.display = "inline"
            }
        }
        this.$V_3 = !this._gridId ? this.get_elementId() : this._gridId;
        var $v_5 = $v_0 ? "previewIframe" : this.$V_3 + "_vizIframe",
            $v_6 = this.$V_3 + "_vizForm",
            $v_7 = this.$V_3 + "_span";
        this.updateFooterMessage("");
        if (this.isVisualizationPaneOpen()) {
            var $v_B = this.getParameter("IsDashboardComponent");
            if (window.UseTabletExperience && !isNullOrEmptyString($v_B) && Boolean.parse($v_B)) {
                var $v_C = $get($v_7);
                if (this.isEnlargePaneOpen()) {
                    if (!isDrilldown) {
                        var $v_D = $get("visualizationImage", $v_3);
                        !IsNull($v_D) && $v_D.parentNode.removeChild($v_D)
                    }
                    if (!IsNull($v_C)) $v_C.style.position = "";
                    this.$32_3(isDrilldown, $v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6)
                } else {
                    if (!IsNull($v_C)) $v_C.style.position = "relative";
                    this.$3q_3($v_1, $v_2, $v_3)
                }
            } else {
                this.$32_3(isDrilldown, $v_0, $v_1, $v_2, $v_3, $v_4, $v_5, $v_6);
                var $v_E = $P_CRM(this.get_element());
                this.$3y_3($v_E, this.$V_3);
                this.registerControlForXrmUI("visualizationToolBar", this.$V_3);
                this.registerControlForXrmUI("visualizationListContainer", this.$V_3)
            }
        }
        if (!isNullOrEmptyString(this.getParameter("IsDashboardComponent")) &&
            Boolean.parse(this.getParameter("IsDashboardComponent"))) refreshRibbon(0);
        else refreshRibbon()
    },
    $3y_3: function($p0, $p1) {
        var $v_0 = {};
        $v_0["id"] = $p1;
        Mscrm.Utilities.registerControlForXrmUI($p0, $v_0)
    },
    $3q_3: function($p0, $p1, $p2) {
        this.vizSubmitParams = {};
        this.compressedParametersList = [];
        this.$2d_3($p0, $p1, false);
        this.addDrillDownSpecificParameterOnLoadVisualization(false);
        var $v_0 = "vizXml=" + CrmEncodeDecode.CrmUrlEncode(this.buildVisualizationXml()), $v_1 = new XMLHttpRequest;
        $v_1.open("POST", this.$3U_3($p1, true));
        $v_1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        $v_1.setRequestHeader("Content-length", $v_0.length.toString());
        var $$t_8 = this;
        $v_1.onreadystatechange = function() {
            if ($v_1.readyState === 4 && $v_1.status === 200) {
                $v_1.onreadystatechange = null;
                var $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize($v_1.responseText), $v_3;
                if ($v_2.isValid) {
                    $v_3 = document.createElement("img");
                    $v_3.id = "visualizationImage";
                    $v_3.style.width = $v_2.imageWidth + "px";
                    $v_3.style.height = $v_2.imageHeight + "px";
                    $v_3.style.marginTop = "10px";
                    $v_3.src = "data:image/png;base64," + $v_2.imageData
                } else {
                    $v_3 = document.createElement("div");
                    $v_3.id = "visualizationImage";
                    $v_3.style.display = "table";
                    $v_3.style.height = "100%";
                    var $v_4 = document.createElement("label");
                    $v_4.style.display = "table-cell";
                    $v_4.style.verticalAlign = "middle";
                    $v_4.className = "ms-crm-errorDiv ms-crm-Info-Label";
                    XUI.Html.SetText($v_4, $v_2.message);
                    $v_3.appendChild($v_4)
                }
                $p2.innerHTML = "";
                $p2.appendChild($v_3);
                !$$t_8.get_isDisposed() && $$t_8.$3A_3(null)
            }
        };
        $v_1.send($v_0)
    },
    $32_3: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        try {
            var $v_0 = this.$3t_3($p5, $p6);
            if ($p1) $get("previewFrameCell").appendChild($v_0);
            else $p4.appendChild($v_0);
            this.$1z_3 = this.$$d_$3A_3;
            $addHandler($v_0, "load", this.$1z_3);
            if (isNullOrEmptyString($p2) || $p3 === this.$u_3) {
                var $v_1 = this.getPaneChildElement($p7);
                !IsNull($v_1) && $p4.removeChild($v_1);
                var $v_2 = this.$3u_3($p7, $p6, $p3);
                $p4.appendChild($v_2);
                this.$2d_3($p2, $p3, $p0);
                this.addDrillDownSpecificParameterOnLoadVisualization($p0);
                this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode && this.$3H_3();
                var $v_3 = $find(this._gridId),
                    $v_4 = IsNull(this.vizSubmitParams["enableDrillDown"])
                        ? true
                        : Mscrm.Utilities.parseBoolean(this.vizSubmitParams["enableDrillDown"]);
                !IsNull($v_3) && $v_4 && this.addSubmitParameters("layoutXml", $v_3.GetParameter("layoutXml"));
                this.addFormParameter($v_2.name, "vizXml", this.buildVisualizationXml());
                var $v_5 = Number.parseInvariant(this.vizSubmitParams["paneContentWidth"]),
                    $v_6 = Number.parseInvariant(this.vizSubmitParams["paneContentHeight"]);
                !(0 === $v_5 || 0 === $v_6) && $v_2.submit();
                this.vizSubmitParams = null;
                this.compressedParametersList = null
            } else $v_0.src = this.$3U_3($p3)
        } finally {
            this.$S_3 = false;
            this.clearDrilldownBackup($p0);
            this.$15_3 = false;
            this.$1i_3 = false
        }
    },
    $3u_3: function($p0, $p1, $p2) {
        this.vizSubmitParams = {};
        this.compressedParametersList = [];
        var $v_0 = document.createElement("form");
        $v_0.id = $p0;
        $v_0.name = $p0;
        $v_0.method = "post";
        $v_0.target = $p1;
        $v_0.action = this.$3U_3($p2);
        return $v_0
    },
    $3t_3: function($p0, $p1) {
        var $v_0 = $p0;
        !IsNull($v_0) && $v_0.parentNode.removeChild($v_0);
        var $v_1 = CrmEncodeDecode.CrmHtmlAttributeEncode(this.getSelectedVisualizationDisplayName());
        $v_0 = document.createElement("iframe");
        $v_0.id = $p1;
        $v_0.title = $v_1;
        if (window.UseTabletExperience) {
            $v_0.scrolling = "no";
            $v_0.style.overflow = "hidden"
        } else $v_0.scrolling = "auto";
        $v_0.frameBorder = "0";
        $v_0.style.width = "100%";
        $v_0.style.height = "100%";
        $v_0.style.display = "block";
        $v_0.setAttribute("name", $p1);
        $v_0.setAttribute("gridId", this._gridId);
        return $v_0
    },
    loadVisualizationAsync: function(isDrillDown) {
        var $$t_1 = this;
        window.setTimeout(function() { $$t_1.loadVisualization(isDrillDown) }, 0)
    },
    loadVisualizationWhenGridIsHidden: function() {
        var $v_0 = $find(this._gridId);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.GetParameter("isGridHidden");
            !isNullOrEmptyString($v_1) && Boolean.parse($v_1) && this.loadVisualizationAsync(false)
        }
    },
    $2d_3: function($p0, $p1, $p2) {
        var $v_0 = $find(this._gridId);
        if (IsNull($p2) || !$p2)
            if (!IsNull($v_0)) {
                this.addSubmitParameters("filterFetchXml", $v_0.GetParameter("effectiveFetchXml"));
                var $v_2 = $v_0.GetParameter("isFetchXmlNotFinal");
                !isNullOrEmptyString($v_2) &&
                    Boolean.parse($v_2) &&
                    $p1 !== this.$u_3 &&
                    this.addSubmitParameters("isFetchXmlNotFinal", "true")
            }
        this.addSubmitParameters("visualizationId", $p0);
        this.addSubmitParameters("viewid", this.getParameter("vizPaneViewId"));
        this.addSubmitParameters("viewtype", this.getParameter("vizPaneViewType"));
        this.addSubmitParameters("visType", this.get_visualizationType().toString());
        if (!IsNull(this
                .get_currentVisualizationPaneMode()) &&
            this.getParameter("paneSize") !== "")
            this.addSubmitParameters("layoutSize", this.get_currentVisualizationPaneMode());
        else this.addSubmitParameters("layoutSize", "1");
        this._useCachedData && this.$2c_3();
        this.addSubmitParameters("chartType", this.getChartType().toString());
        var $v_1 = this.getPaneChildElement("vizContent");
        if (!IsNull($v_1)) {
            var $v_3 = 275, $v_4 = 180;
            if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
                var $v_5 = $v_1.offsetHeight;
                $v_3 = Math.round(.95 * $v_1.clientWidth);
                $v_4 = Math.round(.95 * $v_1.clientHeight);
                if (!$v_3 && !$v_4) {
                    $v_3 = this.$2X_3;
                    $v_4 = this.$2W_3
                } else {
                    this.$2X_3 = $v_3;
                    this.$2W_3 = $v_4
                }
            }
            this.addSubmitParameters("paneContentWidth", $v_3.toString());
            this.addSubmitParameters("paneContentHeight", $v_4.toString())
        }
        this.addSubmitParameters("isDashboardComponent", this.getParameter("IsDashboardComponent"));
        this.addSubmitParameters("isSubgridMode", this.getParameter("IsSubgridMode"));
        this.addSubmitParameters("enableViewPicker", this.getParameter("enableViewPicker"));
        this.addSubmitParameters("viewTitle", this.getParameter("viewTitle"));
        this.addSubmitParameters("ShowChartPicker", this.getParameter("ShowChartPicker"));
        this.addSubmitParameters("ie-browser-version", Mscrm.Utilities.get_ieBrowserVersion().toString())
    },
    $3H_3: function() {
        this.addSubmitParameters("isPreview", "true");
        this.addSubmitParameters("vizName", this.get_chartNameInputValue());
        this.addSubmitParameters("vizDescription",
            XUI.Html.GetText(this.getPaneChildElement("visualizationDescription")));
        this.addSubmitParameters("dataXml", this.generateDataXml());
        this.addSubmitParameters("presentationXml", this.generatePresentationXml());
        this.addSubmitParameters("enableDrillDown", "false");
        this._useCachedData && this.$2c_3()
    },
    $2c_3: function() {
        var $v_0 = this.getIframeWin();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.document.getElementById("resultXml");
            if (!IsNull($v_1) && !isNullOrEmptyString($v_1.value)) {
                this.addSubmitParameters("useCachedData", "true");
                this.addSubmitParameters("resultXml", $v_1.value, true)
            }
        }
    },
    $3A_3: function($p0) {
        if (this.get_isDisposed()) return;
        if (!window.UseTabletExperience) {
            this.$z_3 = this.$$d_$3e_3;
            var $v_4 = this.getIframeWin();
            !IsNull($v_4) && !IsNull($v_4.document) && $addHandler($v_4.document.documentElement, "keydown", this.$z_3)
        }
        var $v_0 = this.getPaneChildElement("contentSpan");
        $v_0.style.display = "block";
        $v_0.style.height = "100%";
        this.get_loadingSpan().style.display = "none";
        this.$U_3 = .3;
        if (this.$L_3 !== -1) {
            window.clearInterval(this.$L_3);
            this.$L_3 = -1
        }
        var $v_1 = this.$1W_3();
        if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
            if (!IsNull($v_1))
                this.isChartDrillable() &&
                    this.isDefaultVisualizationModule() &&
                    this.updateFooterMessage(window.LOCID_VP_DRILLDOWNALERT);
            else this.handleBackButton(false);
            var $v_5 = $find(this._gridId);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.GetParameter("isGridHidden");
                !isNullOrEmptyString($v_6) && Boolean.parse($v_6) && this.handleBackButton(false)
            }
        } else {
            this.getPaneChildElement("loadingImageTable").style.display = "none";
            if (IsNull($v_1) && this.isNoDataToCreateChart() && this.isDesignerSupportedChartType()) {
                this.updateStaticImages();
                this.getPaneChildElement("staticImageTable").style.display = "";
                this.updateFooterMessage(window.LOCID_VPD_NODATA)
            } else this.getPaneChildElement("previewFrameCell").style.display = "block"
        }
        var $v_2 = this.checkIfDrilldownMode();
        if (!IsNull($v_1)) {
            $v_2 && this.setFocus($v_1);
            this.$L_3 = window.setInterval(this.$$d_$3Q_3, 50)
        }
        var $v_3 = this.$1q_3();
        if (!IsNull($v_3)) {
            $removeHandler($v_3, "load", this.$1z_3);
            $clearHandlers($v_3.contentWindow)
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_7 = window.status;
            window.status = null;
            window.status = $v_7
        }
    },
    $2q_3: function() {
        var $v_0 = this.$u_3;
        if (!IsNull(this.visualizationMenu)) {
            var $v_1 = XUI.Xml.SelectSingleNode(this.visualizationMenu.get_menuXml(),
                "//MenuItem[@isselected='true']",
                null);
            if (!IsNull($v_1)) $v_0 = XUI.Xml.GetText($v_1.attributes.getNamedItem("visualizationmodule.entrypointurl"))
        }
        return $v_0
    },
    $3U_3: function($p0, $p1) {
        if (IsNull($p1)) $p1 = false;
        var $v_0 = Mscrm.CrmUri.create($p0);
        if ($p0 === this.$u_3) {
            var $v_1 = Math.random();
            $v_0.get_query()["uniqueId"] = $v_1.toString() +
                this.get_visualizationId().replace("{", "").replace("}", "");
            if ($p1) $v_0.get_query()["img"] = true
        } else {
            $v_0.get_query()["type"] = this.getParameter("vizPaneOtc");
            $v_0.get_query()["typename"] = this.getParameter("vizPanePrimaryEntityName");
            $v_0.get_query()["orgname"] = window.ORG_UNIQUE_NAME;
            $v_0.get_query()["userlcid"] = window.USER_LANGUAGE_CODE.toString();
            $v_0.get_query()["orglcid"] = window.ORG_LANGUAGE_CODE.toString();
            var $v_2 = String.format("visid={0}&vistype={1}&viewid={2}&viewtype={3}&IsDashboardComponent={4}",
                    this.get_visualizationId(),
                    this.get_visualizationType().toString(),
                    this.getParameter("vizPaneViewId"),
                    this.getParameter("vizPaneViewType"),
                    this.getParameter("IsDashboardComponent")),
                $v_3 = this.isWordCloudWebResourceVisualization()
                    ? $v_2 + "&parentVizPaneId=" + this.getParameter("parentVizPaneId")
                    : $v_2;
            $v_0.get_query()["data"] = $v_3
        }
        $v_0.set_includeContextInPath(true);
        return $v_0.toString()
    },
    isWordCloudWebResourceVisualization: function() {
        var $v_0 = "{9B0FE80A-25FA-4BA6-A7F5-657829791EBA}";
        return $v_0 === this.get_visualizationId()
    },
    $2V_3: function() {
        if (!isNullOrEmptyString(this
                .getParameter("LoadOnDemand")) &&
            this.getParameter("LoadOnDemand") === "1") return true;
        else return false
    },
    loadVisualizationOnDemand: function() {
        if (this.$2V_3()) {
            this.$2Y_3();
            var $v_0 = $find(this._gridId);
            if (!IsNull($v_0)) $v_0.Refresh();
            else this.loadVisualizationAsync(false)
        }
    },
    $2Y_3: function() {
        if (this.$2V_3()) {
            this.setParameter("LoadOnDemand", "0");
            var $v_0 = this.getPaneChildElement("loadOnDemandMessage");
            $v_0.style.display = "none";
            this.get_loadingSpan().style.display = "inline"
        }
    },
    $3O_3: function($p0) {
        $p0.alt = "";
        var $v_0 = this.getPaneChildElement("vizIframe"), $v_1 = $v_0.contentWindow.document.getElementById("ImageMap");
        !IsNull($v_1) && $v_1.parentNode.removeChild($v_1)
    },
    $3R_3: function() {
        if (this.$U_3 <= .3) {
            window.clearInterval(this.$L_3);
            this.$L_3 = -1;
            this.$3B_3();
            this.$S_3 = true;
            return
        }
        this.$U_3 = this.$U_3 - .05;
        var $v_0 = this.$1W_3();
        !IsNull($v_0) && XUI.Html.SetOpacity($v_0, this.$U_3)
    },
    $3Q_3: function() {
        if (!this.get_isDisposed()) {
            if (this.$U_3 >= 1) {
                window.clearInterval(this.$L_3);
                this.$L_3 = -1;
                !this.isGridRefreshedThroughChartAction() && this.handleBackButton(false);
                return
            }
            this.$U_3 = this.$U_3 + .1;
            var $v_0 = this.$1W_3();
            !IsNull($v_0) && XUI.Html.SetOpacity($v_0, this.$U_3)
        }
    },
    $1W_3: function() {
        var $v_0 = this.$1q_3();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.contentWindow.document.getElementById("CrmChart");
            if (!IsNull($v_1)) return $v_1
        }
        return null
    },
    isNoDataToCreateChart: function() {
        var $v_0 = this.$1q_3();
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.contentWindow.document.getElementById("errorDiv");
            if (!IsNull($v_1)) {
                var $v_2 = $v_1.getAttribute("type");
                return $v_2 === "info"
            }
        }
        return false
    },
    $1q_3: function() {
        if (this
            ._paneMode ===
            Mscrm.VisualizationPaneRenderingModes.RuntimeMode) return this.getPaneChildElement("vizIframe");
        else return this.getPaneChildElement("previewIframe")
    },
    $3B_3: function() {
        var $v_0 = this.getPaneChildElement("vizContent"),
            $v_1 = this.getPaneChildElement("vizIframe"),
            $v_2 = $v_1.contentWindow.document.getElementById("updateDiv"),
            $v_3 = $v_0.clientWidth,
            $v_4 = $v_0.clientHeight,
            $v_5 = this.$1W_3();
        if (!IsNull($v_5)) {
            $v_3 = $v_0.clientWidth;
            $v_4 = $v_0.clientHeight
        } else {
            var $v_A = this.getDivInIFrame("errorDiv");
            if (!IsNull($v_A)) {
                $v_3 = $v_0.clientWidth;
                $v_4 = $v_A.clientHeight
            }
        }
        var $v_6 = 0, $v_7 = 0;
        if (!IsNull($v_2)) {
            $v_2.style.display = "block";
            $v_6 = ($v_3 - $v_2.clientWidth) / 2 - 12 + $v_1.contentWindow.document.body.scrollLeft;
            $v_7 = ($v_4 - $v_2.clientHeight) / 2 + $v_1.contentWindow.document.body.scrollTop;
            if ($v_6 < 0) $v_6 = 0;
            if ($v_7 < 0) $v_7 = 0;
            $v_2.style.left = $v_6 + "px";
            $v_2.style.top = $v_7 + "px"
        }
        var $v_8 = $v_1.contentWindow.document.getElementById("btnBack");
        if (!IsNull($v_8)) {
            $v_8.style.display = "none";
            var $v_B = $v_1.contentWindow.document.getElementById("btnBackTop");
            if (!IsNull($v_B)) $v_B.style.display = "none"
        }
        var $v_9 = $v_1.contentWindow.document.getElementById("btnHome");
        if (!IsNull($v_9)) {
            $v_9.style.display = "none";
            var $v_C = $v_1.contentWindow.document.getElementById("btnHomeTop");
            if (!IsNull($v_C)) $v_C.style.display = "none"
        }
        this.setParameter("isDrillDownMode", "false");
        this.updateFooterMessage(window.LOCID_VP_UPDATECHARTALERT)
    },
    updateFooterMessage: function(message) { this.updateFooterMessageWithIcon(message, true) },
    updateFooterMessageWithIcon: function(message, isInfo) {
        var $v_0 = this.getPaneChildElement("notificationRow");
        if (IsNull($v_0)) return;
        if (isNullOrEmptyString(message)) $v_0.style.display = "none";
        else {
            $v_0.style.display = "inline";
            var $v_1 = this.getPaneChildElement("visualizationPaneMessageLabel");
            if (!IsNull($v_1)) {
                $v_1.innerHTML = CrmEncodeDecode.CrmHtmlEncode(message);
                $v_1.setAttribute("title", message)
            }
            var $v_2 = this.getPaneChildElement("notificationImg");
            if (!IsNull($v_2)) {
                var $v_3 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri
                    .create(isInfo
                        ? window.CDNURL + "/_imgs/error/notif_icn_info16.png"
                        : "/_imgs/error/notif_icn_crit16.png"));
                $v_2.src = $v_3.source;
                $v_2.className = $v_3.cssClass
            }
        }
    },
    updateWindowTitle: function(visualizationName) {
        if (this.getParameter("paneLocation") !== "1") return;
        if (this
            ._paneMode ===
            Mscrm.VisualizationPaneRenderingModes
            .DesignerInNewMode) window.top.document.title = window.LOCID_VPD_TITLE_NEW;
        else if (this
            ._paneMode ===
            Mscrm.VisualizationPaneRenderingModes
            .DesignerInEditMode)
            window.top.document.title = String.format(window.LOCID_VPD_TITLE_EDIT, visualizationName)
    },
    $2N_3: function() {
        var $v_0 = $find(this._gridId);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.GetParameter("isFetchXmlNotFinal");
            if (!isNullOrEmptyString($v_1) && Boolean.parse($v_1))
                if (this.isDefaultVisualizationModule()) {
                    var $v_2 = this.getPaneChildElement("contentSpan");
                    if (!IsNull($v_2)) $v_2.style.display = "none";
                    this.$2b_3(window.LOCID_VP_QUERYAPIVISUALIZATION);
                    this.$2u_3(false);
                    return true
                }
            this.$2u_3(true)
        }
        return false
    },
    $2u_3: function($p0) {
        var $v_0 = this.getPaneChildElement("openDesignerLink");
        if (!IsNull($v_0))
            if ($p0) $v_0.style.display = "inline";
            else $v_0.style.display = "none"
    },
    $2b_3: function($p0) {
        var $v_0 = this.getPaneChildElement("emptymessage");
        if ($v_0) $v_0.innerHTML = CrmEncodeDecode.CrmHtmlEncode($p0);
        if (this.get_noVisualizations()) this.get_noVisualizations().style.display = "inline";
        if (this.get_loadingSpan()) this.get_loadingSpan().style.display = "none"
    },
    $3C_3: function($p0) {
        var $v_0 = this.getPaneChildElement("chartRefreshButton");
        if (IsNull($v_0)) return;
        if ($p0) $v_0.style.display = "inline";
        else $v_0.style.display = "none"
    },
    $34_3: function() {
        this.$1L_3 = 0;
        this.$O_3 = true
    },
    isQuickFindQuery: function(selectedViewId, onlyQuickFindMode) {
        if (Mscrm.PageManager.isOutlookProxyPage())
            return Boolean.parse(getOutlookHostedWindow().getParameter("isQuickFindQuery"));
        var $v_0 = this._gridId + "_SavedNewQuerySelector", $v_1 = $find($v_0);
        if (!IsNull($v_1) && $v_1.showNewVSControl && !$v_1.showOriginalSelectBox) {
            if (onlyQuickFindMode)
                if ($v_1.quickFindQuery.toUpperCase() === selectedViewId.toUpperCase()) return true;
                else return false;
            else if ($v_1.quickFindQuery.toUpperCase() === selectedViewId.toUpperCase() ||
                !IsNull($v_1.originalViewId) &&
                $v_1.originalViewId.toUpperCase() === $v_1.quickFindQuery.toUpperCase() &&
                this.getParameter("vizPaneViewId").toUpperCase() === selectedViewId.toUpperCase()) return true
        } else {
            var $v_2 = $get($v_0);
            if (!IsNull($v_2)) if ($v_2.DataValue === window.LOCID_SEARCH_RESULTS) return true
        }
        return false
    },
    get_currentVisualizationPaneMode: function() {
        if (IsNull(this.get_$r_3())) return "2";
        return this.get_$r_3().get_mode()
    },
    registerEnlargePaneHandler: function() {
        this.$1Q_3 = this.$$d_reEnlargePaneHandler;
        this.$1v_3 = this.$$d_enlargePaneKeyUpHandler;
        this.fadeInAnimator = this.$$d_fadeIn;
        this.fadeOutAnimator = this.$$d_fadeOut
    },
    getEnlargeContainer: function() { return $get("formBodyContainer") },
    getToolBarContainer: function() { return $get(this.get_dashboardToolBarContainerId()) },
    greyOutDashboard: function(container) {
        container.style.overflow = "hidden";
        container.style.visibility = "hidden";
        var $v_0 = container.offsetWidth,
            $v_1 = container.offsetHeight,
            $v_2 = container.scrollWidth,
            $v_3 = container.scrollHeight,
            $v_4 = $v_2 < $v_0 ? $v_0 : $v_2,
            $v_5 = $v_3 < $v_1 ? $v_1 : $v_3,
            $v_6 = $get("greyOutOverlappingIframe");
        if (IsNull($v_6)) {
            $v_6 = document.createElement("iframe");
            this.get_element().parentNode.appendChild($v_6)
        }
        $v_6.id = "greyOutOverlappingIframe";
        $v_6.setAttribute("name", "greyOutOverlappingIframe");
        $v_6.className = "ms-crm-visualizationpane-greyout";
        $v_6.scrolling = "no";
        $v_6.frameBorder = "0";
        $v_6.style.width = $v_4 + "px";
        $v_6.style.height = $v_5 + "px";
        $v_6.setAttribute("tabIndex", "-1");
        var $v_7 = $get("greyOutDiv");
        if (IsNull($v_7)) {
            $v_7 = document.createElement("Div");
            this.get_element().parentNode.appendChild($v_7)
        }
        $v_7.id = "greyOutDiv";
        $v_7.className = "ms-crm-visualizationpane-greyout";
        $v_7.style.width = $v_4 + "px";
        $v_7.style.height = $v_5 + "px"
    },
    unGreyOutDashboard: function(container) {
        container.style.overflow = "auto";
        container.style.visibility = "visible";
        var $v_0 = $get("greyOutOverlappingIframe", this.get_element().parentNode);
        $v_0.parentNode.removeChild($v_0);
        var $v_1 = $get("greyOutDiv", this.get_element().parentNode);
        $v_1.parentNode.removeChild($v_1)
    },
    appendCloseEnlargeButton: function(parentElement) {
        var $v_0 = document.createElement("span");
        $v_0.id = "closeEnlargeButton";
        $v_0.className = "ms-crm-visualizationpane-close-enlarge";
        var $v_1 =
            "<a href='#' onclick='$find(\"{0}\").closeEnlargePane(new Sys.UI.DomEvent(event));'><img id='closeEnlargeButton_image' alt='{1}' title='{1}' /></a>";
        $v_0.innerHTML = String.format($v_1,
            CrmEncodeDecode.CrmHtmlAttributeEncode(this.get_element().id),
            CrmEncodeDecode.CrmHtmlAttributeEncode(window.LOCID_VP_CLOSE_ENLARGE_ALT));
        parentElement.appendChild($v_0);
        var $v_2 = Mscrm.ImageStrip.getImageInfo(Mscrm.CrmUri.create(window.CDNURL + "/_imgs/close.png")),
            $v_3 = $get("closeEnlargeButton_image");
        $v_3.setAttribute("src", $v_2.source);
        Sys.UI.DomElement.addCssClass($v_3, $v_2.cssClass);
        var $v_4 = document.createElement("iframe");
        $v_4.id = "closeEnlargeOverlappingIframe";
        $v_4.className = "ms-crm-visualizationpane-close-enlarge";
        $v_4.frameBorder = "0";
        $v_4.scrolling = "no";
        $v_4.style.width = "16px";
        $v_4.style.height = "16px";
        $v_4.setAttribute("tabIndex", "-1");
        parentElement.appendChild($v_4)
    },
    removeCloseEnlargeButton: function(parentElement) {
        var $v_0 = $get("closeEnlargeButton", parentElement);
        $v_0.parentNode.removeChild($v_0);
        var $v_1 = $get("closeEnlargeOverlappingIframe", parentElement);
        $v_1.parentNode.removeChild($v_1)
    },
    enlargePaneKeyUpHandler: function(e) {
        switch (e.keyCode) {
        case 27:
            this.closeEnlargePane(e);
            break
        }
    },
    reEnlargePaneHandler: function(e) {
        var $v_0 = this.getEnlargeContainer(), $v_1 = $v_0.offsetWidth, $v_2 = $v_0.offsetHeight;
        if (Math.abs($v_1 - this.$1H_3) < 5 && Math.abs($v_2 - this.$1U_3) < 5) return;
        this.$1H_3 = $v_1;
        this.$1U_3 = $v_2;
        $removeHandler(window, "resize", this.$1Q_3);
        this.greyOutDashboard($v_0);
        this.$38_3();
        this.refreshVisualizationPane(e);
        window.setTimeout(this.$$d_attachResizeHandler, 1)
    },
    attachResizeHandler: function() {
        if (!this.isEnlargePaneOpen()) return;
        $addHandler(window, "resize", this.$1Q_3)
    },
    getVisualizationToolBar: function() { return this.getPaneChildElement("visualizationToolBar") },
    getVisualizationToolBarOverlappingIframe: function() {
        return this.getPaneChildElement("visualizationToolBarIframe")
    },
    showToolBarHandler: function(e) { this.showToolBar("2", this.fadeInAnimator) },
    hideToolBarHandler: function(e) { this.hideToolBarWithAnimation(e, this.fadeOutAnimator) },
    showToolBarButton: function(buttonId) {
        var $v_0 = $get(buttonId, this.getVisualizationToolBar());
        if (!IsNull($v_0)) $v_0.style.display = "inline"
    },
    hideToolBarButton: function(buttonId) {
        var $v_0 = $get(buttonId, this.getVisualizationToolBar());
        if (!IsNull($v_0)) $v_0.style.display = "none"
    },
    fadeIn: function(elementList) {
        var $v_0 = this.fadeIn.caller;
        if (!IsNull($v_0)) $v_0 = $v_0.caller;
        if (IsNull($v_0) && !this.$1I_3) return;
        if (this.$1J_3) {
            window.clearTimeout(this.$1J_3);
            this.$1J_3 = 0
        }
        if (!elementList.length) {
            this.$1I_3 = 0;
            return
        }
        for (var $v_1 = 0; $v_1 < elementList.length; $v_1++) {
            var $v_2 = elementList[$v_1], $v_3 = XUI.Html.GetOpacity($v_2), $v_4 = $v_2.style;
            if ($v_4.display === "none") {
                $v_4.display = "block";
                XUI.Html.SetOpacity($v_2, .35)
            } else if ($v_3 < 1) {
                $v_3 += .25;
                XUI.Html.SetOpacity($v_2, $v_3)
            } else {
                XUI.Html.SetOpacity($v_2, 1);
                Array.remove(elementList, $v_2);
                $v_1--
            }
        }
        var $$t_6 = this;
        this.$1I_3 = window.setTimeout(function() { $$t_6.fadeIn(elementList) }, 0)
    },
    fadeOut: function(elementList) {
        var $v_0 = this.fadeOut.caller;
        if (!IsNull($v_0)) $v_0 = $v_0.caller;
        if (IsNull($v_0) && !this.$1J_3) return;
        if (this.$1I_3) {
            window.clearTimeout(this.$1I_3);
            this.$1I_3 = 0
        }
        if (!elementList.length) {
            this.$1J_3 = 0;
            return
        }
        for (var $v_1 = 0; $v_1 < elementList.length; $v_1++) {
            var $v_2 = elementList[$v_1], $v_3 = XUI.Html.GetOpacity($v_2), $v_4 = $v_2.style;
            if ($v_4.display === "none") {
                XUI.Html.SetOpacity($v_2, 1);
                Array.remove(elementList, $v_2);
                $v_1--
            } else if ($v_3 > .1) {
                $v_3 -= .35;
                XUI.Html.SetOpacity($v_2, $v_3)
            } else {
                $v_4.display = "none";
                XUI.Html.SetOpacity($v_2, 1);
                Array.remove(elementList, $v_2);
                $v_1--
            }
        }
        var $$t_6 = this;
        this.$1J_3 = window.setTimeout(function() { $$t_6.fadeOut(elementList) }, 0)
    },
    fadeInAnimator: null,
    fadeOutAnimator: null,
    openView: function(e) {
        this.cancelEvent(e);
        var $v_0 = Mscrm.CrmUri.create("/homepage.aspx");
        $v_0.get_query()["visualizationId"] = this.get_visualizationId();
        $v_0.get_query()["visualizationType"] = this.get_visualizationType();
        $v_0.get_query()["visualizationPaneMode"] = "1";
        if (this.get_multiLevelDrillDownParametersBackup()
            .$E_0 >=
            0) $v_0.get_query()["parentVizPaneId"] = this.get_id();
        var $v_1 = Mscrm.CrmUri.create("/main.aspx");
        $v_1.get_query()["pagetype"] = "ENTITYLIST";
        var $v_2 = this.getParameter("vizPaneOtc");
        $v_1.get_query()["etc"] = $v_2;
        $v_1.get_query()["viewid"] = this.getParameter("vizPaneViewId");
        $v_1.get_query()["viewtype"] = this.getParameter("vizPaneViewType");
        if (this
            .get_visualizationId() ===
            "{475E6F02-32AE-4081-8CB8-E3E24A9FBC0F}")
            $v_0.get_query()["queueId"] = "{5850FC36-8596-45fe-B607-FE81D0C453FD}";
        $v_1.get_query()["extraqs"] = $v_0.get_queryString();
        if (Mscrm.EntityPropUtil.isActivityTypeCode(Number
            .parseInvariant($v_2))) $v_1.get_query()["type"] = this.getParameter("vizPanePrimaryEntityName");
        $v_1.set_includeContextInPath(true);
        openStdWin($v_1, buildWinName(this.get_element().id), 1e3, 600, null)
    },
    enlargePane: function(domEvent) {
        this.cancelEvent(domEvent);
        var $v_0 = this.getEnlargeContainer();
        this.greyOutDashboard($v_0);
        $v_0.scrollTop = 0;
        $v_0.scrollLeft = 0;
        this.$1H_3 = $v_0.offsetWidth;
        this.$1U_3 = $v_0.offsetHeight;
        this.$38_3();
        this.appendCloseEnlargeButton(this.getPaneChildElement("toolBarCell"));
        this.getPaneChildElement("headerRowTR").style.display = "none";
        this.unRegisterToolBarHandler();
        this.HideToolBarControl();
        $addHandler(window, "resize", this.$1Q_3);
        $addHandler(document, "keyup", this.$1v_3);
        this.refreshVisualizationPane(domEvent)
    },
    closeEnlargePane: function(domEvent) {
        this.cancelEvent(domEvent);
        if (!this.isEnlargePaneOpen()) return;
        var $v_0 = this.getEnlargeContainer();
        $removeHandler(window, "resize", this.$1Q_3);
        $removeHandler(document, "keyup", this.$1v_3);
        this.$44_3();
        $v_0.style.visibility = "visible";
        this.removeCloseEnlargeButton(this.getPaneChildElement("toolBarCell"));
        if (isNullOrEmptyString(this.getParameter("ShowChartPicker")) ||
            Boolean.parse(this
                .getParameter("ShowChartPicker"))) this.getPaneChildElement("headerRowTR").style.display = "block";
        else this.getPaneChildElement("headerRowTR").style.display = "none";
        this.unGreyOutDashboard($v_0);
        this.refreshVisualizationPane(domEvent);
        this.registerToolBarHandler();
        var $v_1 = this.getToolBarContainer();
        $v_1.scrollIntoView(true)
    },
    $38_3: function() {
        this.get_element().className = "ms-crm-visualizationpane-enlarge";
        var $v_0 = 3 / 2 * (this.$1U_3 - 30), $v_1 = (this.$1H_3 - $v_0) / 2;
        if ($v_1 < 0) {
            $v_1 = this.$1H_3 > 60 ? 30 : 0;
            $v_0 = this.$1H_3 - 2 * $v_1
        }
        var $v_2 = this.getPaneChildElement("contentContainer");
        this.$2P_3 = $v_2.style.top;
        $v_2.style.top = "0px";
        var $v_3 = this.get_element().style;
        $v_3.height = (this.$1U_3 - Mscrm.Utilities.getVerticalBoxPadding(this.get_element())).toString() + "px";
        $v_3.width = $v_0 + "px";
        $v_3.paddingLeft = $v_3.paddingRight = $v_1 + "px";
        this.get_element().setAttribute("isEnlarge", "True")
    },
    $44_3: function() {
        this.get_element().className = "paneControl";
        this.get_element().style.width = "auto";
        this.get_element().style.height = "100%";
        this.get_element().style.paddingLeft = XUI.Html.GetComputedStyle(this.get_element().parentNode, "paddingLeft");
        this.get_element().style.paddingRight = XUI.Html
            .GetComputedStyle(this.get_element().parentNode, "paddingRight");
        this.get_element().setAttribute("isEnlarge", "False");
        var $v_0 = this.getPaneChildElement("contentContainer");
        $v_0.style.top = this.$2P_3
    },
    showToolBar: function(mode, animator) {
        var $v_0 = this.getVisualizationToolBar(), $v_1 = this.getVisualizationToolBarOverlappingIframe();
        if (IsNull($v_0) || IsNull($v_1)) return;
        var $v_2 = $v_0.style, $v_3 = $v_1.style, $v_4 = this.getPaneChildElement("vizIframe"), $v_5 = null;
        if (!IsNull($v_4) && !IsNull($v_4.contentWindow) && !IsNull($v_4.contentWindow.document)
        ) $v_5 = $v_4.contentWindow.document.body;
        if (!IsNull($v_5) && $v_5.scrollHeight > $v_5.clientHeight) {
            Sys.UI.DomElement.addCssClass($v_0, "ms-crm-visualizationpane-toolbar-scrollbar-offset");
            Sys.UI.DomElement.addCssClass($v_1, "ms-crm-visualizationpane-toolbar-scrollbar-offset")
        } else {
            Sys.UI.DomElement.removeCssClass($v_0, "ms-crm-visualizationpane-toolbar-scrollbar-offset");
            Sys.UI.DomElement.removeCssClass($v_1, "ms-crm-visualizationpane-toolbar-scrollbar-offset")
        }
        var $v_6 = "50px", $v_7 = 12, $v_8 = $v_0.children.length, $v_9 = 6, $v_A = $v_7 * $v_8 + $v_9 * $v_8;
        switch (mode) {
        case "2":
            $v_2.width = "auto";
            $v_2.height = $v_7 + "px";
            $v_3.width = $v_A + "px";
            $v_3.height = $v_7 + "px";
            break;
        case "1":
            $v_2.width = $v_7 + "px";
            $v_2.height = "100%";
            $v_3.width = $v_7 + "px";
            $v_3.height = "100%";
            $v_2.top = $v_6;
            $v_3.top = $v_6;
            break;
        case "3":
            $v_2.width = $v_7 + "px";
            $v_2.height = "auto";
            $v_3.width = $v_7 + "px";
            $v_3.height = $v_A + "px";
            $v_2.top = $v_6;
            $v_3.top = $v_6;
            break;
        case "0":
        default:
            $v_2.width = "100%";
            $v_2.height = $v_7 + "px";
            $v_3.width = "100%";
            $v_3.height = $v_7 + "px";
            break
        }
        if (!IsNull(animator)) {
            $v_3.display = "block";
            var $v_B = [];
            Array.add($v_B, $v_0);
            animator($v_B)
        } else {
            $v_2.display = "block";
            $v_3.display = "block"
        }
    },
    hideToolBarWithAnimation: function(domEvent, animator) {
        var $v_0 = this.getVisualizationToolBar(), $v_1 = this.getVisualizationToolBarOverlappingIframe();
        if (IsNull($v_0) || IsNull($v_1)) return;
        var $v_2 = null;
        if (!IsNull(domEvent)) $v_2 = domEvent.rawEvent.toElement;
        var $v_3 = this.getToolBarContainer();
        if (!IsNull($v_2) && Mscrm.Utilities.isDescendant($v_3, $v_2)) return;
        if (!IsNull(animator)) {
            var $v_4 = [];
            Array.add($v_4, $v_0);
            Array.add($v_4, $v_1);
            animator($v_4)
        } else this.HideToolBarControl()
    },
    registerToolBarHandler: function() {
        if (!IsNull(this.getParameter("IsDashboardComponent")) &&
            Boolean.parse(this.getParameter("IsDashboardComponent"))) {
            if (!IsNull(this.$14_3) && !IsNull(this.$13_3)) return;
            this.$14_3 = this.$$d_showToolBarHandler;
            this.$13_3 = this.$$d_hideToolBarHandler;
            var $v_1 = this.getToolBarContainer();
            if (!IsNull($v_1)) {
                $addHandler($v_1, "mouseover", this.$14_3);
                $addHandler($v_1, "mouseout", this.$13_3)
            }
        }
        this.$V_3 = !this._gridId ? this.get_elementId() : this._gridId;
        var $v_0 = this.getVisualizationToolBar();
        if (!IsNull($v_0))
            for (var $v_2 = $v_0
                         .children,
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++)
                this.registerToolBarButtonsWithXrmUIControl($v_2[$v_3], $v_2[$v_3].id, "ChartToolBarButton", this.$V_3)
    },
    registerToolBarButtonsWithXrmUIControl: function(element, childControlName, childControlType, parentId) {
        var $v_0 = {};
        $v_0["id"] = childControlName;
        $v_0["type"] = childControlType;
        $v_0["parentId"] = parentId;
        Mscrm.Utilities.registerControlForXrmUI(element, $v_0)
    },
    unRegisterToolBarHandler: function() {
        if (IsNull(this.$14_3) && IsNull(this.$13_3)) return;
        var $v_0 = this.getToolBarContainer();
        if (!IsNull($v_0)) {
            $removeHandler($v_0, "mouseover", this.$14_3);
            $removeHandler($v_0, "mouseout", this.$13_3)
        }
        this.$14_3 = null;
        this.$13_3 = null
    },
    isEnlargePaneOpen: function() {
        if (!IsNull(this.get_element()
            .getAttribute("isEnlarge"))) return Boolean.parse(this.get_element().getAttribute("isEnlarge").toString());
        return false
    },
    HideToolBarControl: function() {
        var $v_0 = this.getVisualizationToolBar(), $v_1 = this.getVisualizationToolBarOverlappingIframe();
        if (!IsNull($v_0) && !IsNull($v_1)) {
            $v_0.style.display = "none";
            $v_1.style.display = "none"
        }
    },
    deleteVisualization: function() {
        this.showVisualizationPane();
        var $v_0 = new Mscrm.CrmDialog(Mscrm.CrmUri.create("/_grid/cmds/dlg_confirm_deleteVisualization.aspx"),
            null,
            500,
            300,
            null);
        $v_0.setCallbackInfo("performVisualizationDelete", this, null);
        $v_0.show()
    },
    performVisualizationDelete: function(confirmDelete) {
        if (!confirmDelete) return;
        var $v_0 = this.get_visualizationId();
        if (!$v_0) return;
        var $v_1 = this.get_visualizationType();
        if ($v_1 === 1111) return;
        var $v_2 = new RemoteCommand("PaneWebService", "DeleteVisualization", null);
        $v_2.SetParameter("visualizationId", $v_0);
        $v_2.SetParameter("type", $v_1.toString());
        var $v_3 = $v_2.Execute(null);
        this.loadVisualizationsForCurrentView();
        this.loadVisualization(false)
    },
    showVisualization: function(toggle) {
        if (this.isVisualizationPaneOpen()) !IsNull(toggle) && toggle && this.disableVisualization();
        else {
            this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
                this.switchMode(Mscrm.VisualizationPaneRenderingModes.RuntimeMode);
            if (!this.$1O_3) this.loadVisualizationsForCurrentView();
            else this.resetVizlist();
            this.get_$r_3().showVisualizationPane();
            this.loadVisualization(false)
        }
    },
    exitDesigner: function() {
        if (!this.isPaneInDesignerMode()) return false;
        if (this.getParameter("paneLocation") === "1") {
            closeWindow();
            $removeHandler(document, "keydown", this.$z_3);
            return true
        } else if (this.confirmCloseDesigner()) {
            this.switchMode(Mscrm.VisualizationPaneRenderingModes.RuntimeMode);
            this.loadVisualization(false);
            $removeHandler(document, "keydown", this.$z_3);
            return true
        } else return false
    },
    disableVisualization: function() {
        if (this.isPaneInDesignerMode())
            if (this.confirmCloseDesigner()) this.switchMode(Mscrm.VisualizationPaneRenderingModes.RuntimeMode);
            else return;
        var $v_0 = this.getParameter("IsSubgridMode");
        this.hideVizList();
        this.get_$r_3().disableVisualizationPane();
        refreshRibbon()
    },
    saveChart: function(saveAs, close) {
        if (IsNull(close)) close = false;
        this.showVisualizationPane();
        if (this
            ._paneMode !==
            Mscrm.VisualizationPaneRenderingModes.RuntimeMode &&
            !this.areRequiredInputsPresent(true)) {
            alert(window.LOCID_VPD_INCOMPLETE_CHART);
            return
        }
        if (!saveAs && !this.isDesignerPaneDirty()) {
            close && this.exitDesigner();
            return
        }
        var $v_0 = false, $v_1 = "", $v_2 = "", $v_3 = false, $v_4 = null;
        try {
            var $v_5 = this.getParameter("vizPaneViewId"),
                $v_6 = this.get_chartNameInput(),
                $v_7 = this.getPaneChildElement("visualizationDescription"),
                $v_8 = false,
                $v_9 = this.get_visualizationId();
            if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
                $v_1 = $v_6.value.trim();
                $v_2 = $v_7.value.trim();
                $v_8 = $v_6.IsDirty
            } else $v_2 = this.getSelectedVisualizationProperty("desc");
            var $v_A = this.$3a_3(saveAs, $v_8);
            if (saveAs) {
                if (isNullOrEmptyString($v_1)) $v_1 = this.getSelectedVisualizationDisplayName();
                this._paneMode !== Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode &&
                    $v_A.SetParameter("visualizationId", $v_9)
            } else
                this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode &&
                    $v_A.SetParameter("visualizationId", $v_9);
            $v_A.SetParameter("name", $v_1);
            $v_A.SetParameter("description", $v_2);
            $v_4 = $v_A.Execute(null);
            if ($v_4.Success) {
                var $v_B = null;
                $v_B = Sys.Serialization.JavaScriptSerializer.deserialize($v_4.ReturnValue);
                if ($v_B.DuplicateFound || Boolean.parse($v_A.GetParameter("saveAs").Value)) {
                    var $v_C = [$v_0, saveAs, $v_1, $v_2, close];
                    this.saveChartWithUniqueName($v_A, $v_C, $v_B);
                    $v_3 = true
                }
            }
        } catch ($$e_F) {
            this.updateFooterMessageWithIcon(window.LOCID_VPD_SAVE_ERROR, false);
            $v_0 = false
        }
        !$v_3 && this.saveChartCallback($v_4, $v_0, saveAs, $v_1, $v_2, close)
    },
    $3a_3: function($p0, $p1) {
        var $v_0 = new RemoteCommand("PaneWebService", "SaveChart", null);
        if ($p0) $v_0.SetParameter("saveAs", "true");
        else $v_0.SetParameter("saveAs", "false");
        if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
            $v_0.SetParameter("dataXml", this.generateDataXml());
            $v_0.SetParameter("presentationXml", this.generatePresentationXml())
        }
        if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode ||
            Boolean.parse($v_0.GetParameter("saveAs").Value) ||
            this
            ._paneMode ===
            Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode &&
            $p1) $v_0.SetParameter("checkDuplicate", "true");
        else $v_0.SetParameter("checkDuplicate", "false");
        var $v_1 = this.get_visualizationType(), $v_2 = this.get_isSystemDesigner() ? 1111 : 1112;
        $v_0.SetParameter("sourceVisualizationType", $v_1);
        $v_0.SetParameter("visualizationType", $v_2);
        var $v_3 = this.getParameter("vizPanePrimaryEntityName");
        $v_0.SetParameter("entityName", $v_3);
        return $v_0
    },
    saveChartCallback: function(result, saveSucceeded, saveAs, visualizationName, visualizationDescription, close) {
        try {
            var $v_0 = this.get_chartNameInput(), $v_1 = this.getPaneChildElement("visualizationDescription");
            if (!IsNull(result))
                if (result.Success) {
                    saveSucceeded = true;
                    var $v_2 = Sys.Serialization.JavaScriptSerializer.deserialize(result.ReturnValue),
                        $v_3 = $v_2.VisualizationId,
                        $v_4 = $v_2.VisualizationName,
                        $v_5 = !IsNull(result.description) ? result.description : visualizationDescription;
                    this.refreshAndSetVisualizationList($v_3);
                    if (this._paneMode !== Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
                        this.$I_3 = false;
                        $v_0.defaultValue = $v_4;
                        $v_0.value = $v_4;
                        $v_1.defaultValue = $v_5;
                        XUI.Html.SetText($v_1, $v_5);
                        if (!IsNull(result.autoFillTitle))
                            this.autoFillTitle = this.autoFillTitle && Boolean.parse(result.autoFillTitle);
                        if (!close)
                            if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode) {
                                this._paneMode = Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode;
                                Mscrm.VisualizationPane.hideInlineActionMenus();
                                refreshRibbon()
                            }
                    }
                    if (saveAs) {
                        this.updateFooterMessage(String
                            .format(window.LOCID_VPD_SAVEAS_SUCCESS,
                                visualizationName,
                                $v_4,
                                this.getParameter("entityDisplayName")));
                        this.updateWindowTitle($v_4);
                        if (this
                            ._paneMode ===
                            Mscrm.VisualizationPaneRenderingModes.RuntimeMode) this.loadVisualization(false);
                        else if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode)
                            if (!IsNull(window.CAN_CUSTOMIZE_VISUALIZATION) && !window.CAN_CUSTOMIZE_VISUALIZATION) {
                                var $v_6 = this.getPaneChildElement("designerContentTable");
                                if (!IsNull($v_6)) $v_6.disabled = false;
                                window.CAN_CUSTOMIZE_VISUALIZATION = true;
                                Mscrm.VisualizationPane.hideInlineActionMenus();
                                refreshRibbon()
                            }
                    } else {
                        this.updateFooterMessage(window.LOCID_VPD_SAVE_SUCCESS);
                        this.updateWindowTitle(visualizationName)
                    }
                    Mscrm.FeatureControl.get_Current()
                        .areFeaturesEnabled(["FCB.AppModuleForOrganization", "FCB.AppDesigner"]) &&
                        this.$49_3($v_2, $v_5)
                } else {
                    this.updateFooterMessageWithIcon(window.LOCID_VPD_SAVE_ERROR, false);
                    saveSucceeded = false
                }
        } catch ($$e_D) {
            this.updateFooterMessageWithIcon(window.LOCID_VPD_SAVE_ERROR, false);
            saveSucceeded = false
        }
        saveSucceeded &&
            this.getParameter("paneLocation") === "1" &&
            Mscrm.VisualizationActions.refreshVisualizationsGrid();
        saveSucceeded && close && this.exitDesigner()
    },
    saveChartWithUniqueName: function(rc, parameters, visualizationInfo) {
        var $v_0 = {};
        $v_0.rc = rc;
        $v_0.visInfo = visualizationInfo;
        var $v_1 = Mscrm.CrmUri.create("/Visualization/SaveVisualization.aspx");
        $v_1.get_query()["saveAs"] = rc.GetParameter("saveAs").Value;
        $v_1.get_query()["vizType"] = rc.GetParameter("visualizationType").Value;
        var $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 500, 310, "maximize:no;minimize:no");
        $v_2.setCallbackInfo("saveChartCallback", this, parameters);
        $v_2.show()
    },
    expandVisualization: function() { this.get_$r_3().togglePaneSize() },
    importVisualization: function(setCallback) {
        var $v_0 = Mscrm.CrmUri.create("/Visualization/cmds/dlg_importvisualization.aspx");
        $v_0.get_query()["vizType"] = 1112;
        var $v_1 = new Mscrm.CrmDialog($v_0, null, 400, 260, "maximize:no;minimize:no");
        setCallback && $v_1.setCallbackInfo("performActionAfterImportVisualization", this, null);
        $v_1.show()
    },
    performActionAfterImportVisualization: function(resultInfo) {
        if (!IsNull(resultInfo)) {
            var $v_0 = resultInfo.VisualizationName, $v_1 = resultInfo.EntityLogicalName, $v_2 = resultInfo.Success;
            if ($v_2) {
                var $v_3 = Sys.Serialization.JavaScriptSerializer.deserialize(resultInfo.ReturnValue),
                    $v_4 = $v_3.VisualizationId,
                    $v_5 = resultInfo.EntityPluralDisplayName;
                this.updateFooterMessage(String.format(window.LOCID_VPD_IV_SUCCESS, $v_0, $v_5));
                if (this.getParameter("vizPanePrimaryEntityName") === $v_1) {
                    var $v_6 = this.get_visualizationId();
                    this.loadAndSetVisualizationsForCurrentView(false);
                    if (this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode) {
                        this.setVisualizationSelected($v_4);
                        this.loadVisualization(false)
                    } else
                        this._paneMode === Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode &&
                            this.setVisualizationSelected($v_6)
                }
            } else {
                this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode && this.loadVisualization(false);
                this.updateFooterMessageWithIcon(String.format(window.LOCID_VPD_IV_FAILURE, $v_0), false)
            }
        } else this._paneMode === Mscrm.VisualizationPaneRenderingModes.RuntimeMode && this.loadVisualization(false)
    },
    exportVisualization: function() {
        this.showVisualizationPane();
        var $v_0 = this.get_visualizationId();
        if (IsNull($v_0) || $v_0 === "") return;
        Mscrm.VisualizationActions.exportVisualization($v_0, this.get_visualizationType(), false, this.get_element())
    },
    applyChartType: function(chartTypeToApply, isInlineAction) {
        this.showVisualizationPane();
        var $v_0 = isInlineAction ? this.$T_3 : this.$G_3, $v_1 = this.getChartTypeString($v_0);
        if (chartTypeToApply.toUpperCase() !== $v_1.toUpperCase()) {
            var $v_2 = chartTypeToApply.toLowerCase(), $v_3 = this.$5_3[$v_2];
            if (!IsNull($v_3)) {
                var $v_4 = this.$J_3;
                this.updatePresentationXmlOnChartTypeChange($v_4, $v_3, $v_2, $v_0);
                this.updateDesignerUIOnChartTypeChange($v_4, chartTypeToApply, $v_0);
                this.$I_3 = true;
                !this.checkAndPreviewChart(false, true) && this.updateStaticImages()
            }
        }
        Mscrm.VisualizationPane.hideInlineActionMenus()
    },
    updatePresentationXmlOnChartTypeChange: function(oldChartTypeGroup,
        chartTypeItem,
        chartTypeToApplyInLowercase,
        seriesId) {
        var $v_0 = this.getChartGroup(chartTypeToApplyInLowercase), $v_1 = this.$6_3[seriesId], $v_2 = true;
        if (oldChartTypeGroup === "Incompatible" || $v_0 === "Incompatible"
        ) $v_2 = this.changePresentationXml($v_1, $v_0, chartTypeToApplyInLowercase);
        this.$J_3 = $v_0;
        if ($v_2) {
            var $v_3 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/Series", null),
                $v_4 = XUI.Xml.LoadXml(chartTypeItem.$25_0),
                $v_5 = Mscrm.Utilities.getAdoptedNode(this._currentPresentationXml, $v_4.documentElement),
                $v_6 = $v_3.insertBefore($v_5, $v_1.$F_1),
                $v_7 = $v_1.$F_1.attributes.getNamedItem("YAxisType");
            !IsNull($v_7) && $v_7.value === "Secondary" && $v_6.attributes.setNamedItem($v_7.cloneNode(true));
            $v_3.removeChild($v_1.$F_1);
            $v_1.$F_1 = $v_6;
            seriesId === this.get_firstSeriesId() && this.updatePresXmlColorPalette(chartTypeItem.$1k_0)
        }
    },
    updatePresXmlColorPalette: function(newColorPalette) {
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart", null);
        if (!IsNull($v_0)) {
            var $v_1 = this._currentPresentationXml.createAttribute("PaletteCustomColors");
            $v_1.value = newColorPalette;
            $v_0.attributes.setNamedItem($v_1)
        }
    },
    changePresentationXml: function(chartNode, groupOfChartTypeToApply, chartTypeToApplyInLowercase) {
        var $v_0 = false;
        if (groupOfChartTypeToApply === "Incompatible") {
            if (chartTypeToApplyInLowercase === "pie")
                this._currentPresentationXml = XUI.Xml
                    .LoadXml(' <Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ShadowOffset="0" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PieLabelStyle=Inside, PieDrawingStyle=Default" ChartType="pie"><SmartLabelStyle Enabled="True" /></Series></Series><ChartAreas><ChartArea><Area3DStyle Enable3D="false"/></ChartArea></ChartAreas><Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="0, 0, 0"></Title></Titles></Chart>');
            else if (chartTypeToApplyInLowercase === "funnel"
            )
                this._currentPresentationXml = XUI.Xml
                    .LoadXml('<Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ShadowOffset="0" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Funnel" CustomProperties="FunnelLabelStyle=Outside, FunnelNeckHeight=0, FunnelPointGap=1, FunnelNeckWidth=5 "><SmartLabelStyle Enabled="True" /></Series></Series><ChartAreas><ChartArea><Area3DStyle Enable3D="false"/></ChartArea></ChartAreas><Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="0, 0, 0"></Title></Titles></Chart>');
            else if (chartTypeToApplyInLowercase === "tag"
            )
                this._currentPresentationXml = XUI.Xml
                    .LoadXml('<Chart><Series><Series IsValueShownAsLabel="True" Color="91, 151, 213" BackSecondaryColor="41, 88, 145" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Tag" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True" /><Points /></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid Enabled="False" /><MajorTickMark Enabled="False" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles><Image>/_imgs/case_mix_by_product.png</Image></Chart>');
            else if (chartTypeToApplyInLowercase === "doughnut"
            )
                this._currentPresentationXml = XUI.Xml
                    .LoadXml('<Chart><Series><Series IsValueShownAsLabel="True" Color="91, 151, 213" BackSecondaryColor="41, 88, 145" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Doughnut" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True" /><Points /></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid Enabled="False" /><MajorTickMark Enabled="False" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles><Image>/_imgs/case_mix_by_prority.png</Image></Chart>')
        } else {
            this._currentPresentationXml = XUI.Xml
                .LoadXml('<Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorTickMark LineColor="165, 172, 181" /><MajorGrid LineColor="Transparent" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles></Chart>');
            $v_0 = true
        }
        var $v_1 = XUI.Xml.SelectSingleNode(this._currentPresentationXml, "Chart/Series/Series", null);
        chartNode.$F_1 = $v_1;
        return $v_0
    },
    updateDesignerUIOnChartTypeChange: function(oldChartTypeGroup, chartTypeToApply, seriesId) {
        this.updateChartTypeIcon(chartTypeToApply, seriesId);
        this.swapLabelsIfRequired(oldChartTypeGroup);
        if (this.$J_3 === "Incompatible") Mscrm.VisualizationPane.enableDisableAddButtons(false);
        else oldChartTypeGroup === "Incompatible" && Mscrm.VisualizationPane.enableDisableAddButtons(true);
        refreshRibbon()
    },
    updateChartTypeIcon: function(chartType, seriesId) {
        var $v_0 = $get(Mscrm.VisualizationPane.$0("chartTypeImage", seriesId));
        if (!IsNull($v_0)) {
            var $v_1 = this.$5_3[chartType.toLowerCase()];
            if (IsNull($v_1)) $v_1 = this.$5_3["column"];
            var $v_2 = Mscrm.VisualizationPane.addOrRemoveSuffixInPath($v_1.$24_0, "_dis", this._isComplexChart);
            Mscrm.ImageStrip.changeImage($v_0, $v_2);
            $v_0.setAttribute("imgBase", $v_2);
            $v_0.title = String.format(window.LOCID_CHART_ICON_TOOLTIP, $v_1.$1u_0);
            $v_0.alt = $v_0.title
        }
    },
    canApplyChartType: function(chartTypeToApply) {
        var $v_0 = false, $v_1 = this.$5_3[chartTypeToApply.toLowerCase()];
        if (!IsNull($v_1) && !this._isComplexChart) {
            var $v_2 = $v_1.$1M_0;
            if ((this.get_seriesCount() <= 1 || $v_2 === this.$J_3) &&
                (this.get_categoryCount() <= 1 || $v_2 !== "Incompatible")) $v_0 = true
        }
        return $v_0
    },
    isTopBottomEnabledForSelectedSeries: function() { return this.isTopBottomEnabled(this.$6_3[this.$G_3]) },
    isTopBottomEnabled: function(seriesItem) {
        var $v_0 = false;
        if (!this._isComplexChart &&
            this.get_seriesCount() >= 1 &&
            this.get_categoryCount() <= 1 &&
            this.$31_3(seriesItem)) $v_0 = true;
        return $v_0
    },
    confirmCloseDesigner: function() {
        if (this.isDesignerPaneDirty()) return confirm(window.LOCID_VPD_CLOSEWARNING);
        return true
    },
    assignVisualization: function() {
        this.showVisualizationPane();
        var $v_0 = [this.get_visualizationId()], $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_assign.aspx");
        $v_1.get_query()["iObjType"] = this.get_visualizationType();
        $v_1.get_query()["iTotal"] = "1";
        var $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 456, 310, null);
        $v_2.setCallbackInfo("performActionAfterAssignVisualization", this, null);
        $v_2.show()
    },
    performActionAfterAssignVisualization: function(result) {
        if (!IsNull(result) && result) {
            this.loadVisualizationsForCurrentView();
            this.loadVisualization(false)
        }
    },
    shareVisualizations: function() {
        this.showVisualizationPane();
        var $v_0 = [this.get_visualizationId()], $v_1 = Mscrm.CrmUri.create("/_grid/cmds/dlg_share.aspx");
        $v_1.get_query()["iObjType"] = this.get_visualizationType();
        $v_1.get_query()["iTotal"] = "1";
        var $v_2 = new Mscrm.CrmDialog($v_1, $v_0, 800, 600, null);
        $v_2.show()
    },
    saveVisualization: function() { this.saveChart(false) },
    saveAndCloseVisualization: function() { this.saveChart(false, true) },
    get_isTopBottomAppended: function() { return this.$y_3 },
    get_isTopAppended: function() { return this.$1N_3 },
    get_idOfSeriesWithTopBottomApplied: function() { return this.$i_3 },
    get_topBottomCount: function() {
        var $v_0 = null;
        $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch", null);
        var $v_1 = $v_0.attributes.getNamedItem("count");
        return $v_1 ? Number.parseInvariant($v_1.value) : 0
    },
    $2O_3: function() {
        var $v_0 = false,
            $v_1 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch", null),
            $v_2 = $v_1.attributes.getNamedItem("count"),
            $v_3 = this.get_$2F_3();
        if (!IsNull($v_2) && !IsNull($v_3)) {
            $v_1.attributes.removeNamedItem("count");
            $v_3.parentNode.removeChild($v_3);
            $v_0 = true
        }
        return $v_0
    },
    $2Z_3: function() {
        this.$y_3 = false;
        this.$1N_3 = false;
        this.$i_3 = "-1"
    },
    $39_3: function($p0, $p1) {
        this.$y_3 = true;
        this.$1N_3 = $p0;
        this.$i_3 = $p1
    },
    $3G_3: function($p0, $p1, $p2) {
        if (!isNullOrEmptyString($p1)) {
            var $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//order[@alias='" + $p1 + "']", null);
            if (!IsNull($v_0)) {
                var $v_1 = $v_0.attributes.getNamedItem("descending");
                $v_1.value = $p2 ? "true" : "false"
            } else {
                $v_0 = this._currentDataXml.createElement("order");
                var $v_2 = this._currentDataXml.createAttribute("alias");
                $v_2.value = $p1;
                $v_0.attributes.setNamedItem($v_2);
                var $v_3 = this._currentDataXml.createAttribute("descending");
                $v_3.value = $p2 ? "true" : "false";
                $v_0.attributes.setNamedItem($v_3)
            }
            if (!IsNull($p0)) {
                var $v_4 = $p0.parentNode;
                $v_4.insertBefore($v_0, XUI.Xml.DomUtils.GetFirstChild($v_4))
            }
        }
    },
    $40_3: function($p0) {
        var $v_0 = null;
        if (!isNullOrEmptyString($p0)) {
            $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//order[@alias='" + $p0 + "']", null);
            !IsNull($v_0) && $v_0.parentNode.removeChild($v_0)
        }
    },
    get_$2F_3: function() {
        var $v_0 = null,
            $v_1 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//fetch", null).attributes.getNamedItem("count");
        if (!IsNull($v_1)) {
            $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//entity/order", null);
            if (IsNull($v_0)) $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//order", null);
            if (!IsNull($v_0)) {
                var $v_2 = $v_0.attributes.getNamedItem("alias");
                if (!IsNull($v_2)) {
                    var $v_3 = XUI.Xml.GetText($v_2);
                    if (IsNull(XUI.Xml.SelectSingleNode(this
                        ._currentDataXml,
                        "//measure[@alias='" + $v_3 + "']",
                        null))) $v_0 = null
                } else $v_0 = null
            }
        }
        return $v_0
    },
    $31_3: function($p0) {
        var $v_0 = $p0.$P_0.parentNode,
            $v_1 = XUI.Xml.SelectNodes($v_0, ".//order", null).length,
            $v_2 = XUI.Xml.SelectNodes(this._currentDataXml, "//order", null),
            $v_3 = $v_2.length,
            $v_4 = this.get_$2F_3();
        if (!IsNull($v_4)) {
            $v_3--;
            $v_4 = $v_4.parentNode;
            do
                if ($v_4 === $v_0) {
                    $v_1--;
                    break
                } else $v_4 = $v_4.parentNode;
            while (!IsNull($v_4) && $v_4.nodeName !== "fetch")
        }
        if ($v_1 !== $v_3) return false;
        else return true
    },
    clearTopBottom: function() {
        var $v_0 = this.$2O_3();
        if ($v_0) {
            this.$I_3 = true;
            this.$2G_3(this.$i_3, "-1", false, -1);
            this.$2Z_3();
            Mscrm.VisualizationPane.hideInlineActionMenus();
            this.checkAndPreviewChart(false)
        }
    },
    appendTopBottom: function(number, isTop, isInlineAction, updatePreview) {
        if (isNullOrEmptyString(number)) return;
        this.$2O_3();
        var $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "datadefinition/fetchcollection/fetch/entity", null),
            $v_1 = $v_0.parentNode,
            $v_2 = isInlineAction ? this.$T_3 : this.$G_3,
            $v_3 = this.$6_3[$v_2],
            $v_4 = $v_3.$P_0,
            $v_5 = $v_3.$a_0;
        this.$3G_3($v_4, $v_5, isTop);
        var $v_6 = $v_1.attributes.getNamedItem("count");
        if (!IsNull($v_6)) $v_6.value = number;
        else {
            var $v_7 = this._currentDataXml.createAttribute("count");
            $v_7.value = number;
            $v_1.attributes.setNamedItem($v_7)
        }
        this.$2G_3(this.$i_3, $v_2, isTop, Number.parseInvariant(number));
        this.$39_3(isTop, $v_2);
        Mscrm.VisualizationPane.hideInlineActionMenus();
        this.$I_3 = true;
        updatePreview && this.checkAndPreviewChart(false)
    },
    appendTopBottomCustom: function(isTop, isInlineAction) {
        if (!Mscrm.PageManager.isFlatUIPage() && !Mscrm.PageManager.isOutlookProxyPage()) return;
        var $v_0 = $find("crmGrid_paneControl");
        if (!IsNull($v_0)) {
            var $v_1 = "/Visualization/cmds/dlg_TopBottom.aspx", $v_2 = Mscrm.CrmUri.create($v_1);
            $v_2.get_query()["isTop"] = isTop;
            $v_2.get_query()["count"] = $v_0.get_topBottomCount() ? $v_0.get_topBottomCount() : 3;
            var $v_3 = true,
                $v_4 = [isTop, isInlineAction, $v_3],
                $v_5 = new Mscrm.CrmDialog($v_2, null, 450, 225, null);
            $v_5.setCallbackInfo("appendTopBottom", this, $v_4);
            $v_5.show()
        }
    },
    updateTopBottomInfo: function(alias, seriesId) {
        if (!this.$y_3) {
            var $v_0 = XUI.Xml.SelectSingleNode(this._currentDataXml, "//fetch", null),
                $v_1 = $v_0.attributes.getNamedItem("count"),
                $v_2 = XUI.Xml.SelectSingleNode($v_0, String.format("//order[@alias='{0}']", alias), null),
                $v_3 = this.get_$2F_3();
            if (!IsNull($v_2) &&
                !IsNull($v_1) &&
                !IsNull($v_3) &&
                $v_3.attributes.getNamedItem("alias") === $v_2.attributes.getNamedItem("alias")) {
                var $v_4 = Boolean.parse($v_2.attributes.getNamedItem("descending").value),
                    $v_5 = Number.parseInvariant($v_1.value);
                this.$39_3($v_4, seriesId);
                this.$2G_3("-1", seriesId, $v_4, $v_5)
            }
        }
    }
};
Mscrm.ChartNodeItem = function(node, alias, isDummy) {
    this.$P_0 = node;
    this.$a_0 = alias;
    this.$W_0 = !isDummy
};
Mscrm.ChartNodeItem.prototype = {
    $P_0: null,
    $a_0: null,
    $W_0: false,
    get_xmlNode: function() { return this.$P_0 },
    set_xmlNode: function(value) {
        this.$P_0 = value;
        return value
    },
    get_alias: function() { return this.$a_0 },
    set_alias: function(value) {
        this.$a_0 = value;
        return value
    },
    get_isReadyForUse: function() { return this.$W_0 },
    set_isReadyForUse: function(value) {
        this.$W_0 = value;
        return value
    }
};
Mscrm.YChartNodeItem = function(node, alias, measureNode, presentationXmlSeriesNode, isDummy) {
    Mscrm.YChartNodeItem.initializeBase(this, [node, alias, isDummy]);
    this.$12_1 = measureNode;
    this.$F_1 = presentationXmlSeriesNode
};
Mscrm.YChartNodeItem.prototype = {
    $12_1: null,
    $F_1: null,
    get_presentationXmlSeriesNode: function() { return this.$F_1 },
    set_presentationXmlSeriesNode: function(value) {
        this.$F_1 = value;
        return value
    },
    get_measureNode: function() { return this.$12_1 },
    set_measureNode: function(value) {
        this.$12_1 = value;
        return value
    }
};
Mscrm.ChartType = function(name,
    colorPalette,
    seriesNodeTemplate,
    group,
    topImageSource,
    bottomImageSource,
    bottomImageDisplay,
    topImagePosition,
    seriesIconSource,
    displayName) {
    this.$2K_0 = name;
    this.$1M_0 = group;
    this.$1k_0 = colorPalette;
    this.$25_0 = seriesNodeTemplate;
    this.$1n_0 = topImageSource;
    this.$1f_0 = bottomImageSource;
    this.$1e_0 = bottomImageDisplay;
    this.$1m_0 = topImagePosition;
    this.$24_0 = seriesIconSource;
    this.$1u_0 = displayName
};
Mscrm.ChartType.prototype = {
    $2K_0: null,
    $1M_0: null,
    $1k_0: null,
    $25_0: null,
    $1n_0: null,
    $1f_0: null,
    $1e_0: null,
    $1m_0: null,
    $24_0: null,
    $1u_0: null,
    get_name: function() { return this.$2K_0 },
    get_group: function() { return this.$1M_0 },
    get_presentationXmlColorPalette: function() { return this.$1k_0 },
    get_seriesNodeTemplate: function() { return this.$25_0 },
    get_topImageSource: function() { return this.$1n_0 },
    get_bottomImageSource: function() { return this.$1f_0 },
    get_bottomImageDisplay: function() { return this.$1e_0 },
    get_topImagePosition: function() { return this.$1m_0 },
    get_seriesIconSource: function() { return this.$24_0 },
    get_displayName: function() { return this.$1u_0 }
};
Mscrm.ChartTypePopup = function(element) { Mscrm.ChartTypePopup.initializeBase(this, [element]) };
Mscrm.ChartTypePopup.prototype = {
    MenuItemClicked: function(eventCode, parameters) {
        var $v_0 = parameters["menuitem"];
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_menuItemId(), $v_2 = $v_1.split("_MI")[1].toLowerCase();
            Mscrm.VisualizationPane.applyChartTypeInline($v_2)
        }
    }
};
Mscrm.TopBottomPopup = function(element) { Mscrm.TopBottomPopup.initializeBase(this, [element]) };
Mscrm.TopBottomPopup.prototype = {
    MenuItemClicked: function(eventCode, parameters) {
        var $v_0 = parameters["menuitem"];
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.get_menuItemId(), $v_2 = $v_1.split("_MI")[1].toLowerCase();
            Mscrm.VisualizationPane.applyTopBottomInline($v_2)
        }
    }
};
Mscrm.InlinePopup = function(element) {
    this.$$d_menuHidden = Function.createDelegate(this, this.menuHidden);
    this.$$d_MenuItemClicked = Function.createDelegate(this, this.MenuItemClicked);
    this.$$d_$3v_3 = Function.createDelegate(this, this.$3v_3);
    Mscrm.InlinePopup.initializeBase(this, [element]);
    this._thisElement = element
};
Mscrm.InlinePopup.prototype = {
    xmlString: null,
    menu: null,
    _thisElement: null,
    get_menuXml: function() { return this.xmlString },
    set_menuXml: function(value) {
        this.xmlString = value;
        return value
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.menu.dispose();
        $removeHandler(this._thisElement, "click", this.$$d_$3v_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.constructMenu()
    },
    constructMenu: function() {
        this.menu = new Mscrm.Popup(this.$$d_MenuItemClicked);
        this.menu.set_menuXml(XUI.Xml.LoadXml(this.xmlString));
        $addHandler(this._thisElement, "click", this.$$d_$3v_3)
    },
    $3v_3: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        !$p0.target.disabled && this.$3s_3(this._thisElement)
    },
    $3s_3: function($p0) {
        var $v_0 = $get("crmContentPanel");
        if (IsNull($v_0)) $v_0 = document.body;
        var $v_1 = Mscrm.Utilities.getXYPos(this._thisElement, window.LOCID_UI_DIR === "RTL", $v_0),
            $v_2 = $v_1["y"] + $p0.offsetParent.offsetHeight,
            $v_3 = $v_1["x"];
        this.$4B_3($v_3, $v_2, $v_0)
    },
    $4B_3: function($p0, $p1, $p2) {
        if (IsNull(this.menu.get_currentMenu())) {
            this.menu.set_currentMenu(this.$3N_3($p0, $p1, $p2));
            this.menu.populateFilterMenu(this.xmlString)
        } else {
            this.menu.get_currentMenu().clear();
            this.menu.populateFilterMenu(this.xmlString)
        }
        this.menu.get_currentMenu().set_stylePrefix("CM");
        this.menu.get_currentMenu().set_propagateStyle(false);
        for (var $v_0 = 0; $v_0 < this.menu.get_currentMenu().get_menuItems().length; $v_0++)
            if (!this.menu.get_currentMenu().get_menuItems()[$v_0].get_itemContents().disabled &&
                this.menu.get_currentMenu().get_menuItems()[$v_0].get_actionCallback()) {
                this.menu.get_currentMenu()
                    .set_focusElementOnShow(this.menu.get_currentMenu().get_menuItems()[$v_0].get_itemContents());
                $v_0 = this.menu.get_currentMenu().get_menuItems().length
            }
        this.menu.get_currentMenu().set_left($p0);
        this.menu.get_currentMenu().set_top($p1);
        this.menu.get_currentMenu().show()
    },
    $3N_3: function($p0, $p1, $p2) {
        var $v_0 = Mscrm.Menu.createMenuForParentElement($p2);
        !IsNull(this._thisElement.attributes.getNamedItem("menu")) &&
            $v_0.set_menuId(this._thisElement.attributes.getNamedItem("menu").value);
        $v_0.set_stylePrefix("VS");
        $v_0.set_propagateStyle(false);
        $v_0.set_left($p0);
        $v_0.set_top($p1);
        $v_0.set_width(284);
        $v_0.set_hideCallback(this.$$d_menuHidden);
        $v_0.set_shiftVertical(false);
        return $v_0
    },
    menuHidden: function(menuParameter) { this.menu.get_currentMenu().clearDOM() },
    MenuItemClicked: function(eventCode, parameters) {}
};
Mscrm.PaneLocation = function() {};
Mscrm.ChartTypes = function() {};
Mscrm.ToolBarMode = function() {};
Mscrm.DrillDownParameter = function() { this.$R_0 = [] };
Mscrm.DrillDownParameter.prototype = {
    $g_0: null,
    $t_0: null,
    $1B_0: null,
    $1G_0: null,
    $1C_0: null,
    $w_0: null,
    $s_0: null,
    $o_0: null,
    $h_0: null,
    $1D_0: null,
    $1F_0: null,
    $1E_0: null,
    $11_0: null,
    $d_0: null,
    $c_0: null,
    $k_0: null,
    $p_0: null,
    $b_0: null,
    $n_0: null,
    $18_0: null,
    $17_0: null,
    $f_0: null,
    $e_0: null,
    $1A_0: null,
    $16_0: null,
    $l_0: null,
    $19_0: null,
    $1P_0: null,
    $1R_0: null,
    get_secondaryGroupByRelatedEntityDetail: function() { return this.$19_0 },
    set_secondaryGroupByRelatedEntityDetail: function(value) {
        this.$19_0 = value;
        return value
    },
    get_isSecondaryGroupByRelatedEntityColumn: function() { return this.$l_0 },
    set_isSecondaryGroupByRelatedEntityColumn: function(value) {
        this.$l_0 = value;
        return value
    },
    get_secondaryGroupByEntityName: function() { return this.$18_0 },
    set_secondaryGroupByEntityName: function(value) {
        this.$18_0 = value;
        return value
    },
    get_secondaryGroupByColumnType: function() { return this.$17_0 },
    set_secondaryGroupByColumnType: function(value) {
        this.$17_0 = value;
        return value
    },
    get_secondaryGroupByName: function() { return this.$n_0 },
    set_secondaryGroupByName: function(value) {
        this.$n_0 = value;
        return value
    },
    get_primaryGroupByStartDate: function() { return this.$d_0 },
    set_primaryGroupByStartDate: function(value) {
        this.$d_0 = value;
        return value
    },
    get_primaryGroupByEndDate: function() { return this.$c_0 },
    set_primaryGroupByEndDate: function(value) {
        this.$c_0 = value;
        return value
    },
    get_secondaryGroupByStartDate: function() { return this.$f_0 },
    set_secondaryGroupByStartDate: function(value) {
        this.$f_0 = value;
        return value
    },
    get_secondaryGroupByEndDate: function() { return this.$e_0 },
    set_secondaryGroupByEndDate: function(value) {
        this.$e_0 = value;
        return value
    },
    get_viewBy: function() { return this.$1C_0 },
    set_viewBy: function(value) {
        this.$1C_0 = value;
        return value
    },
    get_chartType: function() { return this.$t_0 },
    set_chartType: function(value) {
        this.$t_0 = value;
        return value
    },
    get_x1Value: function() { return this.$o_0 },
    set_x1Value: function(value) {
        this.$o_0 = value;
        return value
    },
    get_x2Value: function() { return this.$p_0 },
    set_x2Value: function(value) {
        this.$p_0 = value;
        return value
    },
    get_formattedXValue: function() { return this.$h_0 },
    set_formattedXValue: function(value) {
        this.$h_0 = value;
        return value
    },
    get_formattedX2Value: function() { return this.$b_0 },
    set_formattedX2Value: function(value) {
        this.$b_0 = value;
        return value
    },
    get_seriesIndex: function() { return this.$1B_0 },
    set_seriesIndex: function(value) {
        this.$1B_0 = value;
        return value
    },
    get_yColumnName: function() { return this.$1G_0 },
    set_yColumnName: function(value) {
        this.$1G_0 = value;
        return value
    },
    get_filterFetchXml: function() { return this.$w_0 },
    set_filterFetchXml: function(value) {
        this.$w_0 = value;
        return value
    },
    get_aggregationFetchXml: function() { return this.$s_0 },
    set_aggregationFetchXml: function(value) {
        this.$s_0 = value;
        return value
    },
    get_xAttributeName: function() { return this.$1D_0 },
    set_xAttributeName: function(value) {
        this.$1D_0 = value;
        return value
    },
    get_xEntityName: function() { return this.$1F_0 },
    set_xEntityName: function(value) {
        this.$1F_0 = value;
        return value
    },
    get_xAttributeType: function() { return this.$1E_0 },
    set_xAttributeType: function(value) {
        this.$1E_0 = value;
        return value
    },
    get_lookupAttributeString: function() { return this.$11_0 },
    set_lookupAttributeString: function(value) {
        this.$11_0 = value;
        return value
    },
    get_secondaryXLookupAttributeString: function() { return this.$1A_0 },
    set_secondaryXLookupAttributeString: function(value) {
        this.$1A_0 = value;
        return value
    },
    get_isRelatedEntityColumn: function() { return this.$k_0 },
    set_isRelatedEntityColumn: function(value) {
        this.$k_0 = value;
        return value
    },
    get_filterIdsArray: function() { return this.$R_0 },
    set_filterIdsArray: function(value) {
        this.$R_0 = value;
        return value
    },
    get_chartTitle: function() { return this.$g_0 },
    set_chartTitle: function(value) {
        this.$g_0 = value;
        return value
    },
    get_relatedEntityDetail: function() { return this.$16_0 },
    set_relatedEntityDetail: function(value) {
        this.$16_0 = value;
        return value
    },
    get_primaryGroupByAlias: function() { return this.$1P_0 },
    set_primaryGroupByAlias: function(value) {
        this.$1P_0 = value;
        return value
    },
    get_secondaryGroupByAlias: function() { return this.$1R_0 },
    set_secondaryGroupByAlias: function(value) {
        this.$1R_0 = value;
        return value
    },
    clone: function() {
        for (var $v_0 = new Mscrm
                     .DrillDownParameter,
            $v_1 = 0;
            $v_1 < this.$R_0.length;
            ++$v_1) Array.add($v_0.$R_0, this.$R_0[$v_1]);
        $v_0.$g_0 = this.$g_0;
        $v_0.$t_0 = this.$t_0;
        $v_0.$1B_0 = this.$1B_0;
        $v_0.$1G_0 = this.$1G_0;
        $v_0.$1C_0 = this.$1C_0;
        $v_0.$s_0 = this.$s_0;
        $v_0.$w_0 = this.$w_0;
        $v_0.$o_0 = this.$o_0;
        $v_0.$h_0 = this.$h_0;
        $v_0.$1D_0 = this.$1D_0;
        $v_0.$1F_0 = this.$1F_0;
        $v_0.$1E_0 = this.$1E_0;
        $v_0.$11_0 = this.$11_0;
        $v_0.$d_0 = this.$d_0;
        $v_0.$c_0 = this.$c_0;
        $v_0.$k_0 = this.$k_0;
        $v_0.$p_0 = this.$p_0;
        $v_0.$b_0 = this.$b_0;
        $v_0.$n_0 = this.$n_0;
        $v_0.$18_0 = this.$18_0;
        $v_0.$17_0 = this.$17_0;
        $v_0.$f_0 = this.$f_0;
        $v_0.$e_0 = this.$e_0;
        $v_0.$1A_0 = this.$1A_0;
        $v_0.$16_0 = this.$16_0;
        $v_0.$l_0 = this.$l_0;
        $v_0.$19_0 = this.$19_0;
        $v_0.$1P_0 = this.$1P_0;
        $v_0.$1R_0 = this.$1R_0;
        return $v_0
    },
    clear: function() {
        this.$R_0 = [];
        this.$g_0 = null;
        this.$t_0 = null;
        this.$1B_0 = null;
        this.$1G_0 = null;
        this.$1C_0 = null;
        this.$s_0 = null;
        this.$w_0 = null;
        this.$o_0 = null;
        this.$h_0 = null;
        this.$1D_0 = null;
        this.$1F_0 = null;
        this.$1E_0 = null;
        this.$11_0 = null;
        this.$d_0 = null;
        this.$c_0 = null;
        this.$k_0 = null;
        this.$p_0 = null;
        this.$b_0 = null;
        this.$n_0 = null;
        this.$18_0 = null;
        this.$17_0 = null;
        this.$f_0 = null;
        this.$e_0 = null;
        this.$1A_0 = null;
        this.$16_0 = null;
        this.$l_0 = null;
        this.$19_0 = null
    }
};
Mscrm.MultiLevelDrillDownParameters = function() {
    this.$E_0 = -1;
    this.$1j_0 = []
};
Mscrm.MultiLevelDrillDownParameters.prototype = {
    $1j_0: null,
    $E_0: 0,
    get_count: function() { return this.$E_0 },
    add: function(obj) {
        this.$E_0++;
        this.$1j_0[this.$E_0] = obj
    },
    remove: function() {
        if (this.$E_0 >= 0) {
            this.$1j_0[this.$E_0] = null;
            this.$E_0--
        }
    },
    getAtIndex: function(index) {
        if (index >= 0) return this.$1j_0[index];
        else return null
    }
};
Mscrm.WordCloudDrillDownParameters = function() {};
Mscrm.WordCloudDrillDownParameters.prototype = {
    $1b_0: null,
    get_entityName: function() { return this.$1b_0 },
    set_entityName: function(value) {
        this.$1b_0 = value;
        return value
    },
    $1Y_0: null,
    get_attributeName: function() { return this.$1Y_0 },
    set_attributeName: function(value) {
        this.$1Y_0 = value;
        return value
    },
    $1Z_0: null,
    get_attributeType: function() { return this.$1Z_0 },
    set_attributeType: function(value) {
        this.$1Z_0 = value;
        return value
    },
    $1a_0: null,
    get_attributeValue: function() { return this.$1a_0 },
    set_attributeValue: function(value) {
        this.$1a_0 = value;
        return value
    },
    $1c_0: false,
    get_isRelatedEntity: function() { return this.$1c_0 },
    set_isRelatedEntity: function(value) {
        this.$1c_0 = value;
        return value
    },
    $1d_0: null,
    get_relatedEntityDetails: function() { return this.$1d_0 },
    set_relatedEntityDetails: function(value) {
        this.$1d_0 = value;
        return value
    }
};
Mscrm.VisualizationPaneRenderingModes = function() {};
Mscrm.ChartTypeGroups = function() {};
Mscrm.AttributeType = function() {};
Mscrm.AggregateType = function() {};
Mscrm.CompositeControl.registerClass("Mscrm.CompositeControl", Mscrm.CrmUIControl, Mscrm.IRibbonSelectionControl);
Mscrm.CompositeControlUtility.registerClass("Mscrm.CompositeControlUtility");
Mscrm.RequiredElements.registerClass("Mscrm.RequiredElements");
Mscrm.CompositeControlForOutlook.registerClass("Mscrm.CompositeControlForOutlook", Mscrm.CompositeControl);
Mscrm.CompositeControlResizeControl.registerClass("Mscrm.CompositeControlResizeControl", Mscrm.CrmUIControl);
Mscrm.VisualizationPane.registerClass("Mscrm.VisualizationPane", Mscrm.CrmUIControl);
Mscrm.ChartNodeItem.registerClass("Mscrm.ChartNodeItem");
Mscrm.YChartNodeItem.registerClass("Mscrm.YChartNodeItem", Mscrm.ChartNodeItem);
Mscrm.ChartType.registerClass("Mscrm.ChartType");
Mscrm.InlinePopup.registerClass("Mscrm.InlinePopup", Mscrm.CrmUIControl);
Mscrm.ChartTypePopup.registerClass("Mscrm.ChartTypePopup", Mscrm.InlinePopup);
Mscrm.TopBottomPopup.registerClass("Mscrm.TopBottomPopup", Mscrm.InlinePopup);
Mscrm.PaneLocation.registerClass("Mscrm.PaneLocation");
Mscrm.ChartTypes.registerClass("Mscrm.ChartTypes");
Mscrm.ToolBarMode.registerClass("Mscrm.ToolBarMode");
Mscrm.DrillDownParameter.registerClass("Mscrm.DrillDownParameter");
Mscrm.MultiLevelDrillDownParameters.registerClass("Mscrm.MultiLevelDrillDownParameters");
Mscrm.WordCloudDrillDownParameters.registerClass("Mscrm.WordCloudDrillDownParameters");
Mscrm.VisualizationPaneRenderingModes.registerClass("Mscrm.VisualizationPaneRenderingModes");
Mscrm.ChartTypeGroups.registerClass("Mscrm.ChartTypeGroups");
Mscrm.AttributeType.registerClass("Mscrm.AttributeType");
Mscrm.AggregateType.registerClass("Mscrm.AggregateType");
Mscrm.RequiredElements.grid = "Grid";
Mscrm.RequiredElements.chart = "Chart";
Mscrm.RequiredElements.all = "All";
Mscrm.VisualizationPane.dashboardEnlargeContainerId = "formBodyContainer";
Mscrm.VisualizationPane.greyOutOverlappingIframeId = "greyOutOverlappingIframe";
Mscrm.VisualizationPane.greyOutDivId = "greyOutDiv";
Mscrm.VisualizationPane.greyOutClass = "ms-crm-visualizationpane-greyout";
Mscrm.VisualizationPane.closeEnlargeButtonId = "closeEnlargeButton";
Mscrm.VisualizationPane.enlargeClass = "ms-crm-visualizationpane-enlarge";
Mscrm.VisualizationPane.closeEnlargeOverlappingIframeId = "closeEnlargeOverlappingIframe";
Mscrm.VisualizationPane.toolBarScrollBarOffsetClass = "ms-crm-visualizationpane-toolbar-scrollbar-offset";
Mscrm.VisualizationPane.top = "Top";
Mscrm.VisualizationPane.bottom = "Bottom";
Mscrm.VisualizationPane.DATETIME = "DATETIME";
Mscrm.VisualizationPane.YATTRIBUTESELECTORID = "yAttributeSelector1";
Mscrm.VisualizationPane.YATTRIBUTESELECTORIDPREFIX = "yAttributeSelector";
Mscrm.VisualizationPane.NAMETEXTBOXID = "chartNameInput";
Mscrm.VisualizationPane.DESCTEXTAREAID = "visualizationDescription";
Mscrm.VisualizationPane.ATTRIBUTETYPEFIELD = "type";
Mscrm.VisualizationPane.VALUEFIELD = "value";
Mscrm.VisualizationPane.DEFAULTYALIAS = "_CRMAutoGen_aggregate_column_Num_";
Mscrm.VisualizationPane.DEFAULTXALIAS = "_CRMAutoGen_groupby_column_Num_";
Mscrm.VisualizationPane.DATEGROUPINGATTRIBUTE = "dategrouping";
Mscrm.VisualizationPane.DEFAULTDATEGROUP = "month";
Mscrm.VisualizationPane.INITIALAGGREGATEVALUE = "Aggregate";
Mscrm.VisualizationPane.CHARTTYPEBOXID = "chartTypeBox";
Mscrm.VisualizationPane.TOPBOTTOMBOXID = "topBottomBox";
Mscrm.VisualizationPane
    .DATAXMLTEMPLATE =
    "<datadefinition><fetchcollection><fetch mapping='logical' aggregate='true'><entity name='entity_placeholder'><attribute name='x_placeholder' groupby='true' alias='{0}'/><attribute name='y_placeholder' aggregate='count' alias='{1}'/></entity></fetch></fetchcollection><categorycollection><category><measurecollection><measure alias='{1}'/></measurecollection></category></categorycollection></datadefinition>";
Mscrm.VisualizationPane
    .axisY2STRING =
    '<AxisY2 LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"> <MajorGrid LineColor="239, 242, 246" /> <MajorTickMark LineColor="165, 172, 181" /> <LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /> </AxisY2>';
Mscrm.VisualizationPane
    .LEGENDSTRING =
    '<Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends>';
Mscrm.VisualizationPane.YAXISTYPE = "YAxisType";
Mscrm.VisualizationPane.SECONDARY = "Secondary";
Mscrm.VisualizationPane
    .kDefaultChartPresentationTemplate =
    '<Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181" IntervalAutoMode="VariableCount"><MajorTickMark LineColor="165, 172, 181" /><MajorGrid LineColor="Transparent" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles></Chart>';
Mscrm.VisualizationPane
    .kPieChartTemplate =
    ' <Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ShadowOffset="0" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PieLabelStyle=Inside, PieDrawingStyle=Default" ChartType="pie"><SmartLabelStyle Enabled="True" /></Series></Series><ChartAreas><ChartArea><Area3DStyle Enable3D="false"/></ChartArea></ChartAreas><Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="0, 0, 0"></Title></Titles></Chart>';
Mscrm.VisualizationPane
    .kFunnelChartTemplate =
    '<Chart Palette="None" PaletteCustomColors="91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;"><Series><Series ShadowOffset="0" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Funnel" CustomProperties="FunnelLabelStyle=Outside, FunnelNeckHeight=0, FunnelPointGap=1, FunnelNeckWidth=5 "><SmartLabelStyle Enabled="True" /></Series></Series><ChartAreas><ChartArea><Area3DStyle Enable3D="false"/></ChartArea></ChartAreas><Legends><Legend Alignment="Center" LegendStyle="Table" Docking="right" IsEquallySpacedItems="True" Font="{0}, 11px" ShadowColor="0, 0, 0, 0" ForeColor="59, 59, 59" /></Legends><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="0, 0, 0"></Title></Titles></Chart>';
Mscrm.VisualizationPane
    .kColorPaletteOne =
    "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;";
Mscrm.VisualizationPane
    .kColorPaletteTwo =
    "91,151,213; 237,125,49; 160,116,166; 255,192,0; 68,114,196; 112,173,71; 37,94,145; 158,72,14; 117,55,125; 153,115,0; 38,68,120; 67,104,43; 124,175,221; 241,151,90; 186,144,192; 255,205,51; 105,142,208; 140,193,104; 50,125,194; 210,96,18; 150,83,159; 204,154,0; 51,90,161; 90,138,57;";
Mscrm.VisualizationPane
    .kTagChartTemplate =
    '<Chart><Series><Series IsValueShownAsLabel="True" Color="91, 151, 213" BackSecondaryColor="41, 88, 145" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Tag" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True" /><Points /></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid Enabled="False" /><MajorTickMark Enabled="False" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles><Image>/_imgs/case_mix_by_product.png</Image></Chart>';
Mscrm.VisualizationPane
    .kDoughnutChartTemplate =
    '<Chart><Series><Series IsValueShownAsLabel="True" Color="91, 151, 213" BackSecondaryColor="41, 88, 145" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" ChartType="Doughnut" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True" /><Points /></Series></Series><ChartAreas><ChartArea BorderColor="White" BorderDashStyle="Solid"><AxisY LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid LineColor="239, 242, 246" /><MajorTickMark LineColor="165, 172, 181" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisY><AxisX LabelAutoFitMinFontSize="8" TitleForeColor="59, 59, 59" TitleFont="{0}, 10.5px" LineColor="165, 172, 181"><MajorGrid Enabled="False" /><MajorTickMark Enabled="False" /><LabelStyle Font="{0}, 10.5px" ForeColor="59, 59, 59" /></AxisX></ChartArea></ChartAreas><Titles><Title Alignment="TopLeft" DockingOffset="-3" Font="{0}, 13px" ForeColor="59, 59, 59"></Title></Titles><Image>/_imgs/case_mix_by_prority.png</Image></Chart>';
Mscrm.VisualizationPane
    .COLUMNSERIESTEMPLATE =
    '<Series ChartType="Column" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .STACKEDCOLUMNSERIESTEMPLATE =
    '<Series ChartType="StackedColumn" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .stackedcolumN100SERIESTEMPLATE =
    '<Series ChartType="StackedColumn100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .BARSERIESTEMPLATE =
    '<Series ChartType="Bar" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>';
Mscrm.VisualizationPane
    .STACKEDBARSERIESTEMPLATE =
    '<Series ChartType="StackedBar" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>';
Mscrm.VisualizationPane
    .stackedbaR100SERIESTEMPLATE =
    '<Series ChartType="StackedBar100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"><SmartLabelStyle Enabled="True"/></Series>';
Mscrm.VisualizationPane
    .AREASERIESTEMPLATE =
    '<Series ChartType="Area" IsValueShownAsLabel="True" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .STACKEDAREASERIESTEMPLATE =
    '<Series ChartType="StackedArea" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .stackedareA100SERIESTEMPLATE =
    '<Series ChartType="StackedArea100" Font="{0}, 9.5px" LabelForeColor="59, 59, 59" CustomProperties="PointWidth=0.75, MaxPixelPointWidth=40"></Series>';
Mscrm.VisualizationPane
    .LINESERIESTEMPLATE =
    '<Series ChartType="Line" IsValueShownAsLabel="True" BorderWidth="3" MarkerStyle="Square" MarkerSize="9" MarkerColor="37, 128, 153" MarkerBorderColor="37, 128, 153"></Series>';
Mscrm.VisualizationPane.white = "#ffffff";
Mscrm.VisualizationPane.silver = "#e6e6e6";
Mscrm.VisualizationPane.defaultTextBoxValue = "3";
Mscrm.VisualizationPane.vizLoadDelayMS = 500;
Mscrm.VisualizationPane.currentVizLoadDelay = 0;
Mscrm.VisualizationPane.timeOutID = 0;
Mscrm.VisualizationPane.INVALIDINDEX = -1;
Mscrm.VisualizationPane.defaultTopBottomValue = 3;
Mscrm.PaneLocation.inline = "0";
Mscrm.PaneLocation.newWindow = "1";
Mscrm.ChartTypes.barChart = "bar";
Mscrm.ChartTypes.stackedBarChart = "stackedbar";
Mscrm.ChartTypes.stackedBar100Chart = "stackedbar100";
Mscrm.ChartTypes.columnChart = "column";
Mscrm.ChartTypes.stackedColumnChart = "stackedcolumn";
Mscrm.ChartTypes.stackedColumn100Chart = "stackedcolumn100";
Mscrm.ChartTypes.areaChart = "area";
Mscrm.ChartTypes.stackedAreaChart = "stackedarea";
Mscrm.ChartTypes.stackedArea100Chart = "stackedarea100";
Mscrm.ChartTypes.pieChart = "pie";
Mscrm.ChartTypes.lineChart = "line";
Mscrm.ChartTypes.funnelChart = "funnel";
Mscrm.ChartTypes.tagChart = "tag";
Mscrm.ChartTypes.doughnutChart = "doughnut";
Mscrm.ToolBarMode.top = "0";
Mscrm.ToolBarMode.right = "1";
Mscrm.ToolBarMode.topFit = "2";
Mscrm.ToolBarMode.rightFit = "3";
Mscrm.VisualizationPaneRenderingModes.RuntimeMode = 0;
Mscrm.VisualizationPaneRenderingModes.DesignerInNewMode = 1;
Mscrm.VisualizationPaneRenderingModes.DesignerInEditMode = 2;
Mscrm.ChartTypeGroups.lineColumnArea = "LineColumnArea";
Mscrm.ChartTypeGroups.bar = "Bar";
Mscrm.ChartTypeGroups.incompatible = "Incompatible";
Mscrm.AttributeType.picklist = "picklist";
Mscrm.AttributeType.owner = "owner";
Mscrm.AttributeType.date = "date";
Mscrm.AttributeType.dateTime = "datetime";
Mscrm.AttributeType.nVarchar = "nvarchar";
Mscrm.AttributeType.customer = "customer";
Mscrm.AttributeType.lookup = "lookup";
Mscrm.AttributeType.money = "money";
Mscrm.AttributeType.integer = "int";
Mscrm.AttributeType.floatAttribute = "float";
Mscrm.AttributeType.decimalAttribute = "decimal";
Mscrm.AggregateType.none = "none";
Mscrm.AggregateType.count = "count";
Mscrm.AggregateType.countColumn = "countcolumn";
Mscrm.AggregateType.sum = "sum";
Mscrm.AggregateType.avg = "avg";
Mscrm.AggregateType.min = "min";
Mscrm.AggregateType.max = "max"