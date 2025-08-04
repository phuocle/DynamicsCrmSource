if (typeof IEnumerator == "undefined") {
    var IEnumerator = function() {};
    IEnumerator.prototype = { get_current: null, moveNext: null, reset: null };
    IEnumerator.registerInterface("IEnumerator")
}
if (typeof IEnumerable == "undefined") {
    var IEnumerable = function() {};
    IEnumerable.prototype = { getEnumerator: null };
    IEnumerable.registerInterface("IEnumerable")
}
Type.registerNamespace("CUI");
Type.registerNamespace("CUI.Page");
if (typeof CUI.Page.PageComponent == "undefined") {
    CUI.Page.ICommandHandler = function() {};
    CUI.Page.ICommandHandler.registerInterface("CUI.Page.ICommandHandler");
    CUI.Page.PageComponent = function() {};
    CUI.Page.PageComponent.prototype = {
        init: function() {},
        getGlobalCommands: function() { return null },
        getFocusedCommands: function() { return null },
        handleCommand: function(commandId, properties, sequence) { return false },
        canHandleCommand: function(commandId) { return false },
        isFocusable: function() { return false },
        receiveFocus: function() { return false },
        yieldFocus: function() { return true },
        getId: function() { return "PageComponent" }
    };
    CUI.Page.PageComponent.registerClass("CUI.Page.PageComponent", null, CUI.Page.ICommandHandler)
}
Type.registerNamespace("Mscrm");
Mscrm.CommandInformation = function() {};
Mscrm.ContextualGroupInfo = function() {};
Mscrm.CrmClientType = function() {};
Mscrm.CrmClientType.prototype = { none: 0, web: 1, outlook: 2 };
Mscrm.CrmClientType.registerEnum("Mscrm.CrmClientType", false);
Mscrm.CrmOutlookClientType = function() {};
Mscrm.CrmOutlookClientType.prototype = { none: 0, crmForOutlook: 1, crmForOutlookOfflineAccess: 2 };
Mscrm.CrmOutlookClientType.registerEnum("Mscrm.CrmOutlookClientType", false);
Mscrm.OutlookRenderType = function() {};
Mscrm.OutlookRenderType.prototype = { none: 0, web: 1, outlook: 2 };
Mscrm.OutlookRenderType.registerEnum("Mscrm.OutlookRenderType", false);
Mscrm.OutlookVersion = function() {};
Mscrm.OutlookVersion.prototype = { none: 0, version2003: 1, version2007: 2, version2010: 3 };
Mscrm.OutlookVersion.registerEnum("Mscrm.OutlookVersion", false);
Mscrm.CrmOfflineAccessState = function() {};
Mscrm.CrmOfflineAccessState.prototype = { none: 0, online: 1, offline: 2 };
Mscrm.CrmOfflineAccessState.registerEnum("Mscrm.CrmOfflineAccessState", false);
Mscrm.CommandBarBase = function(element) {
    this.$$d_onKeyDown = Function.createDelegate(this, this.onKeyDown);
    this.$$d_onUnHoverHandler = Function.createDelegate(this, this.onUnHoverHandler);
    this.$$d_onHoverHandler = Function.createDelegate(this, this.onHoverHandler);
    this.$$d_onClickHandler = Function.createDelegate(this, this.onClickHandler);
    Mscrm.CommandBarBase.initializeBase(this, [element]);
    this.$1m_3 = element
};
Mscrm.CommandBarBase.prototype = {
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$2z_3 = this.$$d_onClickHandler;
        this.$3u_3 = this.$$d_onHoverHandler;
        this.$3v_3 = this.$$d_onUnHoverHandler;
        this.$5q_3 = this.$$d_onKeyDown
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$2z_3 = null;
        this.$3u_3 = null;
        this.$3v_3 = null;
        this.$5q_3 = null;
        Sys.Application.unregisterDisposableObject(this);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    attachEvents: function(element) {
        $addHandler(element, "click", this.$2z_3);
        $addHandler(element, "mouseover", this.$3u_3);
        $addHandler(element, "mouseout", this.$3v_3);
        $addHandler(element, "keydown", this.$5q_3);
        $addHandler(element, "focus", this.$3u_3);
        $addHandler(element, "blur", this.$3v_3)
    },
    detachEvents: function(element) {
        !IsNull(this.$2z_3) && $removeHandler(element, "click", this.$2z_3);
        if (!IsNull(this.$3u_3)) {
            $removeHandler(element, "mouseover", this.$3u_3);
            $removeHandler(element, "focus", this.$3u_3)
        }
        if (!IsNull(this.$3v_3)) {
            $removeHandler(element, "mouseout", this.$3v_3);
            $removeHandler(element, "blur", this.$3v_3)
        }
        !IsNull(this.$5q_3) && $removeHandler(element, "keydown", this.$5q_3)
    },
    get_currentElement: function() { return this.$1m_3 },
    $1m_3: null,
    $5q_3: null,
    $2z_3: null,
    $3u_3: null,
    $3v_3: null
};
Mscrm.CommandBarMoreMenu = function(moreCommandListSelector, listTemplate, menuParentSelector, commandBar) {
    Mscrm.CommandBarMoreMenu.initializeBase(this,
        [moreCommandListSelector, listTemplate, menuParentSelector, commandBar, null])
};
Mscrm.CommandBarMoreMenu.prototype = {
    cacheContent: function() {
        Mscrm.CommandBarMenu.prototype.cacheContent.call(this);
        var $v_0 = $P_CRM(this.$3r_0), $v_1 = $v_0[0];
        !CUI.ScriptUtility.isNullOrUndefined($v_1) &&
            Mscrm.CommandBarMenu.prototype.get_commandBar.call(this).set_moreMenuContent($v_1.innerHTML)
    }
};
Mscrm.CommandBarMenu = function(listSelector, listTemplate, menuParentSelector, commandBar, parentMenu) {
    this.$$d_handleFocus = Function.createDelegate(this, this.handleFocus);
    this.$$d_handleMouseHover = Function.createDelegate(this, this.handleMouseHover);
    this.$$d_flyOutKeyDown = Function.createDelegate(this, this.flyOutKeyDown);
    this.$$d_$B7_0 = Function.createDelegate(this, this.$B7_0);
    this.$6D_0 = $P_CRM("<div class='ui-flyout-dialog-moreCommands'></div>");
    this.$BA_0 = listTemplate;
    this.$6M_0 = menuParentSelector;
    this.$3r_0 = listSelector;
    this.$Q_0 = commandBar;
    this.$1s_0 = parentMenu;
    this.$5l_0 = false;
    this.$88_0 = false
};
Mscrm.CommandBarMenu.prototype = {
    $2j_0: false,
    $Y_0: null,
    $1s_0: null,
    $2i_0: null,
    $1p_0: null,
    $BA_0: "",
    $6K_0: false,
    $6M_0: "",
    $3r_0: "",
    $6T_0: null,
    $5l_0: false,
    $88_0: false,
    get_listSelector: function() { return this.$3r_0 },
    $4e_0: 200,
    $9l_0: 10,
    $BS_0: null,
    $Q_0: null,
    $8E_0: 0,
    $A4_0: 0,
    get_commandBar: function() {
        if (!IsNull(this.$Q_0)) return this.$Q_0;
        if (!IsNull(this.$1s_0)) return this.$1s_0.get_commandBar();
        return null
    },
    get_flyOutWidth: function() { return this.$4e_0 },
    get_flyOutMinHeight: function() { return this.$9l_0 },
    get_isFlyOutVisible: function() { return this.$2j_0 },
    disposeMenu: function() {
        if (!IsNull(this.$2i_0)) {
            this.$2i_0.disposeMenu();
            this.$2i_0 = null
        }
        if (!IsNull(this.$Y_0) && !this.$5l_0) {
            if (this.$6K_0) {
                this.$Y_0.hide();
                this.$Y_0.dispose()
            }
            this.$5l_0 = true
        }
        if (!IsNull(this.$1s_0)) this.$1s_0 = null;
        this.$6T_0 = null;
        return
    },
    cacheContent: function() { return },
    processAndShowMenu: function(flyOutContent, commandData, isInMenu) {
        this.$BS_0 = commandData;
        this.initializeMenu();
        if (this.$2j_0) {
            this.hideFlyout();
            this.$2j_0 = false;
            return
        }
        this.createMenuCommandsPopup(flyOutContent);
        var $v_0 = $get(this.$6M_0), $v_1 = null;
        if (IsNull($v_0)) {
            var $v_5 = $get("crmContentPanel"), $v_6 = $v_5.attributes.getNamedItem("currentContentId"), $v_7 = null;
            if (!IsNull($v_6) && $v_6.specified) $v_7 = $get($v_6.value);
            if (!IsNull($v_7)) $v_1 = Mscrm.Utilities.getXYPos($v_7, window.LOCID_UI_DIR === "RTL");
            if (this.$6M_0.indexOf("ChartDesigner") > -1)
                $v_0 = $get(this.$6M_0, commandData.$2Q_2.getChartCommandBarNode(1));
            else $v_0 = $get(this.$6M_0, commandData.$2Q_2.getChartCommandBarNode(0))
        }
        var $v_2 = $P_CRM($v_0);
        !IsNull($v_0) && this.$Eu_0($v_0, this.$Y_0, isInMenu, $v_1);
        this.$6T_0 = $v_0;
        this.$Y_0.show($v_2, null);
        var $v_3 = $P_CRM(this.$3r_0).children(":first-child"), $v_4 = $P_CRM(this.$3r_0).children();
        if ($v_4.length > 0)
            for (var $v_8 = 0; $v_8 < $v_4.length; $v_8++) {
                var $v_9 = $v_4[$v_8], $v_A = $P_CRM($v_9), $v_B = {};
                $v_B["id"] = $v_9.id;
                $v_B["type"] = "CommandButton";
                $v_B["parentId"] = "appBar";
                Mscrm.Utilities.registerControlForXrmUI($v_A, $v_B)
            }
        while ($v_3.hasClass("ms-cui-menusection-title")) $v_3 = $v_3.next();
        $v_3.addClass("menuSelected");
        $v_3.removeClass("menuUnselected");
        $P_CRM(this.$3r_0 + " IMG").removeClass("menuUnselected");
        this.$2j_0 = true;
        var $$t_F = this;
        window.setTimeout(function() { $v_3.find("a").focus() }, 0)
    },
    $Eu_0: function($p0, $p1, $p2, $p3) {
        var $v_0 = Mscrm.Utilities.getXYPos($p0, window.LOCID_UI_DIR === "RTL");
        $p1.set_dialogTop($p2 ? $v_0["y"] : $v_0["y"] + $p0.clientHeight);
        var $v_1 = 0;
        if (IsNull(window.frameElement))
            $v_1 = Math.round((window.document.body.offsetHeight - $p1.get_dialogTop()) * .98);
        else $v_1 = Math.round((window.frameElement.offsetHeight - $p1.get_dialogTop()) * .98);
        $p1.dialogChrome().css("max-height", $v_1.toString() + "px");
        var $v_2 = this.$8E_0 * 28 + this.$A4_0 * 22;
        $v_2 > $v_1 && $p1.get_options().set_width(this.$4e_0 + 15);
        var $v_3 = 2;
        if (!$p2)
            if (window.LOCID_UI_DIR === "RTL") $p1.set_dialogLeft($v_0["x"] + $p0.clientWidth - this.$4e_0);
            else $p1.set_dialogLeft($v_0["x"]);
        else if (window.LOCID_UI_DIR === "RTL")
            $p1.set_dialogLeft($v_0["x"] + $p0.clientWidth - (this.$4e_0 + this.$1s_0.$4e_0 - $v_3));
        else $p1.set_dialogLeft($v_0["x"] + $p0.clientWidth - $v_3);
        if (!IsNull($p3)) {
            $p1.set_dialogTop($p1.get_dialogTop() + $p3["y"]);
            $p1.set_dialogLeft($p1.get_dialogLeft() + $p3["x"])
        }
        this.$Y_0.set_position("custom")
    },
    flyOutKeyDown: function(handleEvent) {
        switch (handleEvent.which) {
        case 13:
            var $v_0 = $P_CRM(handleEvent.target);
            $v_0.click();
            handleEvent.stopImmediatePropagation();
            break;
        case 38:
        case 40:
            if (handleEvent.target.tagName === "A") {
                handleEvent.stopPropagation();
                this.handleArrowKey(handleEvent);
                handleEvent.stopImmediatePropagation()
            }
            break;
        case 9:
            if (handleEvent.target.tagName === "A") {
                handleEvent.preventDefault();
                this.handleArrowKey(handleEvent)
            }
            break;
        case 27:
            this.hideFlyout();
            this.$2j_0 = false;
            handleEvent.stopImmediatePropagation();
            break
        }
    },
    handleArrowKey: function(handleEvent) {
        var $v_0 = handleEvent.ctrlKey;
        if ($v_0) {
            var $v_3 = Mscrm.Utilities.getParentElementByTagName(handleEvent.target, "LI"), $v_4 = $P_CRM($v_3);
            if (!$v_4.hasClass("ms-crm-CommandBar-Spinner") || !$v_4.hasClass("menuSelected")) return;
            var $v_5 = this.get_commandBar().$1T_4[$v_3.id];
            !IsNull($v_5) && Mscrm.SpinnerControl.isInstanceOfType($v_5) && $v_5.onKeyUpDown($v_3, handleEvent.which);
            return
        }
        var $v_1 = $P_CRM(".menuSelected", this.$1p_0), $v_2;
        if (handleEvent.which === 40 || handleEvent.which === 9 && !handleEvent.shiftKey) {
            $v_2 = $v_1.next();
            if (!$v_2.length) $v_2 = this.$1p_0.children(":first-child");
            while ($v_2.hasClass("ms-cui-menusection-title")) $v_2 = $v_2.next()
        } else {
            $v_2 = $v_1.prev();
            while ($v_2.hasClass("ms-cui-menusection-title")) $v_2 = $v_2.prev();
            if (!$v_2.length) $v_2 = this.$1p_0.children(":last-child")
        }
        if ($v_2.hasClass("ms-crm-CommandBarItem")) {
            this.$Bl_0($v_2, $v_1);
            this.swapSelection($v_2, $v_1);
            $v_2.find("a").focus()
        }
    },
    handleMouseHover: function(handleEvent) {
        var $v_0 = $P_CRM(handleEvent.target);
        if (!$v_0.hasClass("ms-crm-CommandBarItem")) {
            $v_0 = $v_0.parents("li");
            if ($v_0.length !== 1) return
        }
        var $v_1 = $P_CRM(".menuSelected");
        this.$Bl_0($v_0, $v_1);
        this.swapSelection($v_0, $v_1);
        if (handleEvent.target.tagName === "A") handleEvent.target.focus();
        else {
            var $v_2 = Mscrm.Utilities.getParentElementByTagName(handleEvent.target, "A");
            if (!IsNull($v_2)) $v_2.focus();
            else $v_0.find("a").focus()
        }
        handleEvent.stopImmediatePropagation()
    },
    swapSelection: function(newSelection, selectedItem) {
        if (!selectedItem.hasClass("ms-crm-CommandBarItem")) {
            selectedItem = selectedItem.parents("li");
            if (selectedItem.length !== 1) return
        }
        selectedItem.addClass("menuUnselected");
        selectedItem.removeClass("menuSelected");
        newSelection.removeClass("menuUnselected");
        newSelection.addClass("menuSelected")
    },
    handleFocus: function(handleEvent) {
        var $v_0 = $P_CRM(handleEvent.target);
        if (!$v_0.hasClass("ms-crm-CommandBarItem")) {
            $v_0 = $v_0.parents("li");
            if ($v_0.length !== 1) return
        }
        if ($v_0.hasClass("menuSelected") && !$v_0.hasClass("ms-crm-CommandBar-SplitButton")) {
            handleEvent.stopImmediatePropagation();
            return
        }
        var $v_1 = $P_CRM(".menuSelected");
        this.swapSelection($v_0, $v_1);
        this.$Bl_0($v_0, $v_1);
        handleEvent.stopImmediatePropagation()
    },
    $Bl_0: function($p0, $p1) {
        $p1.hasClass("ms-crm-CommandBar-SplitButton") && this.$JV_0($p1);
        $p0.hasClass("ms-crm-CommandBar-SplitButton") && this.$JU_0($p0)
    },
    $JU_0: function($p0) {
        if (!$p0.hasClass("ms-crm-CommandBarItem")) {
            $p0 = $p0.parents("li");
            if ($p0.length !== 1) return
        }
        var $v_0 = $p0.find("A.ms-crm-Menu-Label"),
            $v_1 = $p0.find("A.ms-crm-Menu-Label-Flyout"),
            $v_2 = this.get_commandBar().$1T_4[$p0.attr("id")];
        if (!IsNull($v_2) && Mscrm.SplitButtonControl.isInstanceOfType($v_2))
            if ($v_1.is(":focus")) $v_2.onHoverHandler($v_1.get(0));
            else $v_2.onHoverHandler($v_0.get(0))
    },
    $JV_0: function($p0) {
        if (!$p0.hasClass("ms-crm-CommandBarItem")) {
            $p0 = $p0.parents("li");
            if ($p0.length !== 1) return
        }
        var $v_0 = $p0.find("A.ms-crm-Menu-Label"),
            $v_1 = $p0.find("A.ms-crm-Menu-Label-Flyout"),
            $v_2 = this.get_commandBar().$1T_4[$p0.attr("id")];
        if (!IsNull($v_2) && Mscrm.SplitButtonControl.isInstanceOfType($v_2))
            if ($v_0.hasClass("ms-crm-commandbar-hoveredOver")) $v_2.onUnHoverHandler($v_0.get(0));
            else $v_2.onUnHoverHandler($v_1.get(0))
    },
    initializeMenu: function() {
        if (this.$6K_0) {
            this.$Y_0.get_options().set_modal(IsNull(this.$1s_0));
            return
        }
        this.$Y_0 = new Mscrm.FlyOutDialog;
        this.$Y_0.get_options().set_showButtonPane(false);
        this.$Y_0.get_options().set_modal(IsNull(this.$1s_0));
        this.$Y_0.get_options().set_closeOnEscape(true);
        this.$Y_0.get_options().set_isInDelayMode(true);
        this.$Y_0.get_options().set_letjQueryHandleTabbing(true);
        this.$Y_0.get_options().set_draggable(false);
        this.$Y_0.set_shouldDisposeContent(false);
        var $$t_4 = this;
        this.$Y_0.bind("flyout-canceled", function($p1_0) { $$t_4.$2j_0 = false });
        var $$t_5 = this;
        this.$Y_0.bind("flyout-confirmed", function($p1_0) { $$t_5.$2j_0 = false });
        var $$t_6 = this;
        this.$Y_0.bind("flyout-overlayclicked", function($p1_0) { $$t_6.hideFlyout() });
        var $$t_7 = this;
        this.$Y_0.bind("flyout-visiblechanged", function($p1_0) { $$t_7.$HS_0() });
        $P_CRM(window).resize(this.$$d_$B7_0);
        this.$6K_0 = true
    },
    hideFlyout: function() {
        !IsNull(this.$2i_0) && this.$2i_0.hideFlyout();
        this.$6K_0 && !this.$5l_0 && this.$Y_0.hide()
    },
    $B7_0: function($p0) { this.hideFlyout() },
    hideAllParentFlyouts: function() {
        this.$6K_0 && !this.$5l_0 && this.$Y_0.hide();
        !IsNull(this.$1s_0) && this.$1s_0.hideAllParentFlyouts()
    },
    $HS_0: function() {
        this.$2j_0 = this.$Y_0.get_visible();
        if (!this.$2j_0) {
            this.$1p_0.unbind("keydown");
            this.$1p_0.unbind("mouseover");
            this.$1p_0.find("A").unbind("focus");
            $P_CRM(window).unbind("resize", this.$$d_$B7_0);
            var $$t_7 = this;
            this.$1p_0.find("li").each(function($p1_0, $p1_1) {
                var $v_0 = $P_CRM($p1_1);
                $v_0.unbind()
            });
            this.$1p_0 = null;
            this.cacheContent();
            if (!IsNull(this.$6T_0)) {
                var $v_1 = Mscrm.Utilities.getParentElementByTagName(this.$6T_0, "LI");
                if (!IsNull($v_1)) {
                    if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CommandBar-SplitButton")) {
                        var $v_3 = $v_1.children[0];
                        if (!IsNull($v_3)) {
                            Sys.UI.DomElement.removeCssClass($v_3.children[1], "ms-crm-CommandBar-button-selected");
                            Sys.UI.DomElement
                                .removeCssClass($v_3.children[0], "ms-crm-CommandBar-button-split-selected");
                            var $v_4 = Mscrm.Utilities
                                .getChildElementsByClassName($v_3.children[0], "splitButtonSplitter", true)[0];
                            if (!IsNull($v_4)) $v_4.style.visibility = "visible"
                        }
                    } else
                        Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CommandBar-FlyoutAnchor") &&
                            Sys.UI.DomElement.removeCssClass($v_1.children[0], "ms-crm-CommandBar-button-selected");
                    Sys.UI.DomElement.containsCssClass($v_1, "menuSelected") &&
                        Sys.UI.DomElement.removeCssClass($v_1, "menuSelected");
                    var $v_2 = $P_CRM($v_1);
                    $v_2.find("A").focus()
                }
                this.$6T_0 = null
            }
        } else {
            $P_CRM(window).resize(this.$$d_$B7_0);
            if (!IsNull(this.$1s_0)) this.$1s_0.$2i_0 = this
        }
    },
    createMenuCommandsPopup: function(content) {
        var $v_0 = $P_CRM(this.$BA_0);
        $v_0.append(content);
        if (IsNull(this.$6D_0)) this.$6D_0 = $P_CRM("<div class='ui-flyout-dialog-moreCommands'></div>");
        this.$6D_0.empty();
        this.$6D_0.append($v_0);
        var $v_1 = $P_CRM("img.flyoutAnchorArrow", $v_0);
        $v_1.attr("src", window.CDNURL + "/_imgs/commandbarmenuright.png");
        if (!this.$88_0) {
            this.$Y_0.setContent(this.$6D_0);
            this.$88_0 = true
        }
        this.$1p_0 = $P_CRM(this.$3r_0);
        this.$1p_0.keydown(this.$$d_flyOutKeyDown);
        this.$1p_0.mouseover(this.$$d_handleMouseHover);
        this.$8E_0 = 0;
        this.$A4_0 = this.$1p_0.find("div.ms-cui-menusection-title").length;
        var $$t_D = this;
        this.$1p_0.find("li").each(function($p1_0, $p1_1) {
            $$t_D.$8E_0++;
            var $v_2 = $P_CRM($p1_1);
            $v_2.find("A").focus($$t_D.$$d_handleFocus);
            $v_2.hasClass("menuSelected") && $v_2.removeClass("menuSelected");
            $v_2.addClass("menuUnselected");
            var $v_3 = $v_2.attr("command"), $v_4 = $v_2.attr("id");
            $p1_1.setAttribute("style", "display:block");
            $p1_1.setAttribute("float", "none");
            var $v_5 = null;
            if (!IsNull($$t_D.get_commandBar())) {
                $v_5 = $$t_D.get_commandBar().$1T_4[$v_4];
                if (!IsNull($v_5)) {
                    $v_5.$22_0 = $$t_D;
                    Mscrm.ToggleButtonControl.isInstanceOfType($v_5) &&
                        $v_5.setButtonState($p1_1, $$t_D.$BS_0.get_toggleButtonState()[$v_3])
                }
            }
            $v_2.click(function($p2_0) {
                if (!IsNull($v_5))
                    if (Mscrm.MenuAwareControl.isInstanceOfType($v_5)) {
                        if (Mscrm.SplitButtonControl.isInstanceOfType($v_5) &&
                        (!$p2_0.target.attributes.getNamedItem("role") ||
                            $p2_0.target.attributes.getNamedItem("role").value !== "flyout")) {
                            $$t_D.hideFlyout();
                            $$t_D.hideAllParentFlyouts()
                        }
                    } else if (!Mscrm.SpinnerControl.isInstanceOfType($v_5)) {
                        $$t_D.hideFlyout();
                        $$t_D.hideAllParentFlyouts()
                    }
                window.setTimeout(function() {
                        if (!IsNull($v_5)) {
                            var $v_6 = $p2_0;
                            $v_5.click($p2_0.target, $v_6);
                            return
                        }
                    },
                    0)
            })
        });
        this.$Y_0.set_position("bottom");
        this.$Y_0.get_options().set_width(this.$4e_0);
        this.$Y_0.get_options().set_minHeight(this.$9l_0);
        var $$t_B;
        ($$t_B = this.$Y_0.get_options()).set_dialogClass($$t_B.get_dialogClass() + " ms-crm-moreCommands-flyout");
        if (Mscrm.Utilities.isIosDevice()) {
            var $$t_C;
            ($$t_C = this.$Y_0.get_options())
                .set_dialogClass($$t_C.get_dialogClass() + " ms-crm-moreCommands-flyout-ipad-scroll")
        }
        this.$Y_0.get_options().set_showTitlePane(false)
    }
};
Mscrm.CommandBar = function(element) {
    this.$$d_renderAllControls = Function.createDelegate(this, this.renderAllControls);
    this.$$d_refreshMoreMenu = Function.createDelegate(this, this.refreshMoreMenu);
    this.$$d_$IA_4 = Function.createDelegate(this, this.$IA_4);
    this.$1k_4 = new Sys.StringBuilder;
    this.$27_4 = new Sys.StringBuilder;
    Mscrm.CommandBar.initializeBase(this, [element])
};
Mscrm.CommandBar.$96 = function($p0, $p1) {
    var $v_0 = false, $v_1 = $p1.$3Y_2;
    $p1.$3Y_2 = false;
    try {
        $v_0 = $p1.isControlVisible($p0.command, $p0.id) && $p1.isControlEnabled($p0.command);
        if (!$v_0 && $p0.$5K_0) $v_0 = Mscrm.RibbonManager.get_$3T().$z_1.isCommandEnabled($p0.command)
    } finally {
        $p0.$3Y_0 = $p1.$3Y_2;
        $p1.$3Y_2 = $v_1
    }
    return $v_0
};
Mscrm.CommandBar.prototype = {
    $H_4: null,
    get_ribbonData: function() { return this.$H_4 },
    $4m_4: 0,
    $3A_4: 0,
    $4q_4: false,
    $2t_4: null,
    $u_4: 0,
    get_availableWidth: function() { return this.$u_4 },
    set_availableWidth: function(value) {
        this.$u_4 = value;
        return value
    },
    $2n_4: 0,
    $4n_4: null,
    initialize: function() {
        Mscrm.CommandBarBase.prototype.initialize.call(this);
        if (window.LOCID_UI_DIR === "RTL") this.$9D_4 = 37;
        else this.$9D_4 = 39;
        this.$4q_4 = true;
        this.$3P_4 = [];
        this.$2n_4 = 0;
        this.$1T_4 = {};
        this.$4n_4 = this.$$d_$IA_4
    },
    setCommandBuildOptions: function(data, numberOfButtonsForDisplay, commandBarMode, availableWidth) {
        this.$3h_4 = commandBarMode;
        this.$H_4 = data;
        this.$4m_4 = numberOfButtonsForDisplay;
        this.$3A_4 = numberOfButtonsForDisplay;
        this.$u_4 = availableWidth;
        if (commandBarMode === 2)
            this.$1j_4 = new Mscrm.CommandBarMoreMenu("#moreCommandsList",
                "<ul id='moreCommandsList'></ul>",
                "moreCommands",
                this);
        else {
            var $v_0 = String.format("more{0}Commands", !commandBarMode ? "Charts" : "ChartDesigner"),
                $v_1 = $v_0 + "List";
            this.$1j_4 = new Mscrm.CommandBarMoreMenu("#" + $v_1, "<ul id='" + $v_1 + "'></ul>", $v_0, this)
        }
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.Utilities.removeControlFromXrmUI("appBar");
        if (!IsNull(this.$2t_4)) {
            window.clearTimeout(this.$2t_4);
            this.$2t_4 = null
        }
        if (window.PRERENDERALL && !CUI.ScriptUtility.isNullOrUndefined(this.$2Z_4)) {
            window.clearTimeout(this.$2Z_4);
            this.$2Z_4 = null
        }
        this.detachEvents();
        this.$4n_4 = null;
        this.disposeAllMenus();
        !CUI.ScriptUtility.isNullOrUndefined(this.$3P_4) && Array.clear(this.$3P_4);
        var $$dict_2 = this.$1T_4;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] }, $v_1 = $v_0.value;
            $v_1.dispose()
        }
        Mscrm.CommandBarBase.prototype.dispose.call(this)
    },
    detachEvents: function() {
        var $$t_4 = this;
        this.$E4_4(function($p1_0) { Mscrm.CommandBarBase.prototype.detachEvents.call($$t_4, $p1_0) });
        if (!IsNull(this.$1m_3))
            for (var $v_0 = this.$1m_3.getElementsByTagName("input"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                !IsNull(this.$4n_4) && $removeHandler($v_2, "click", this.$4n_4)
            }
    },
    $E4_4: function($p0) {
        if (IsNull(this.$1m_3)) return;
        for (var $v_0 = this.$1m_3.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (!IsNull($v_2.attributes
                    .getNamedItem("type")) &&
                $v_2.attributes.getNamedItem("type").value === "menu") continue;
            $p0($v_2)
        }
    },
    onKeyDown: function(domEvent) {
        var $v_0 = domEvent.target, $v_1 = Mscrm.Utilities.getDomEventKeyCode(domEvent);
        if (domEvent.altKey) {
            if ($v_0.accessKey.toUpperCase() !== String.fromCharCode($v_1).toUpperCase()) {
                domEvent.preventDefault();
                return
            }
            switch ($v_1) {
            case 9:
            case 115:
                domEvent.preventDefault();
                return
            }
            domEvent.preventDefault()
        }
        switch ($v_1) {
        case 32:
        case 13:
            this.onClickHandler(domEvent);
            break;
        case 37:
        case 39:
            this.handleKeyNavigation(domEvent);
            break;
        case 38:
        case 40:
            this.handleKeyUpDown(domEvent, $v_1);
            break;
        default:
            break
        }
        return
    },
    handleKeyUpDown: function(domEvent, keyCode) {
        var $v_0 = Mscrm.Utilities.getParentElementByTagName(domEvent.target, "LI");
        if (!IsNull($v_0) && Sys.UI.DomElement.containsCssClass($v_0, "ms-crm-CommandBar-Spinner")) {
            domEvent.preventDefault();
            domEvent.stopPropagation();
            var $v_1 = this.$1T_4[$v_0.id];
            !IsNull($v_1) && Mscrm.SpinnerControl.isInstanceOfType($v_1) && $v_1.onKeyUpDown($v_0, keyCode)
        }
    },
    handleKeyNavigation: function(domEvent) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode(domEvent);
        this.$JC_4(this.$7L_4(this.$1m_3), $v_0 === this.$9D_4 ? 1 : -1);
        domEvent.preventDefault();
        domEvent.stopPropagation()
    },
    glowAndSetLastFocused: function(domEvent) { this.onHoverHandler(domEvent) },
    setFocus: function() {
        var $v_0 = this.$Ch_4(this.$7L_4(this.$1m_3), null, 1), $v_1 = $P_CRM("a", $v_0);
        $v_1.length > 0 && this.$9Q_4($v_1.get(0))
    },
    setLastFocused: function() {
        var $v_0 = this.$8K_4;
        if (!IsNull($v_0)) {
            var $v_1 = $P_CRM("a", $v_0);
            $v_1.length > 0 && this.$9Q_4($v_1.get(0))
        } else this.setFocus()
    },
    $JC_4: function($p0, $p1) {
        var $v_0 = this.$8K_4;
        if (IsNull($v_0)) return;
        var $v_1 = $v_0;
        $v_1 = this.$Ch_4($p0, $v_0, $p1);
        !IsNull($v_1) && this.$9Q_4(this.$7L_4($v_1))
    },
    $Ch_4: function($p0, $p1, $p2) {
        var $v_0 = $p1, $v_1 = $p1, $v_2 = false;
        do {
            if (!IsNull($v_0)) {
                var $v_3 = $p2 < 0 ? this.$Ge_4($v_0) : this.$Gd_4($v_0);
                if ($v_3 !== $v_0) $v_0 = $v_3;
                else $v_0 = null
            }
            if (IsNull($v_0)) {
                if ($v_2) return null;
                $v_0 = $p2 < 0 ? this.$Gc_4($p0) : this.$7L_4($p0);
                $v_2 = true
            }
            if ($v_0 === $v_1) return null;
            if (IsNull($v_0)) return null
        } while ($v_0.tagName !== "LI" || $v_0.disabled || $v_0.style.display === "none");
        return $v_0
    },
    $Ge_4: function($p0) { return XUI.Html.DomUtils.GetPrevSibling($p0) },
    $Gd_4: function($p0) { return XUI.Html.DomUtils.GetNextSibling($p0) },
    $Gc_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
        return $v_0
    },
    $7L_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        return $v_0
    },
    $9Q_4: function($p0) {
        if (IsNull($p0)) return;
        if ($p0.tabIndex >= 0) {
            $p0.focus();
            return
        }
        for (var $v_0 = $p0.children.length, $v_1 = 0; $v_1 < $v_0; ++$v_1) {
            if (IsNull($p0.children[$v_1])) break;
            !IsNull(this.$7L_4($p0.children[$v_1])) && this.$9Q_4($p0.children[$v_1])
        }
    },
    onClickHandler: function(domEvent) {
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "LI"), $v_1 = this.$1T_4[$v_0.id];
        if ($v_1) $v_1.click($v_0, domEvent);
        else if (this.$7Q_4($v_0.id)) {
            window.self.CommandBarMoreMenuLoadStartTime = (new Date).getTime();
            this.$I1_4(domEvent);
            window.self.CommandBarMoreMenuLoadEndTime = (new Date).getTime()
        }
    },
    $I1_4: function($p0) {
        if (!$p0.button) {
            $p0.stopPropagation();
            this.$1j_4.processAndShowMenu(this.get_moreMenuContent(), this.$H_4, false)
        }
    },
    onHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "A");
        if (!IsNull($v_0)) {
            var $v_1 = Mscrm.Utilities.getParentElementByTagName($v_0, "LI");
            if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CommandBar-SplitButton")) {
                var $v_2 = this.$1T_4[$v_1.id];
                !IsNull($v_2) && Mscrm.SplitButtonControl.isInstanceOfType($v_2) && $v_2.onHoverHandler($v_0)
            } else {
                Sys.UI.DomElement.removeCssClass($v_0.parentNode, "ms-crm-Menu-Label");
                Sys.UI.DomElement.addCssClass($v_0.parentNode, "ms-crm-Menu-Label-Hovered")
            }
            this.$8K_4 = $v_1
        }
    },
    onUnHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "A"),
            $v_1 = Mscrm.Utilities.getParentElementByTagName($v_0, "LI");
        if (Sys.UI.DomElement.containsCssClass($v_1, "ms-crm-CommandBar-SplitButton")) {
            var $v_2 = this.$1T_4[$v_1.id];
            !IsNull($v_2) && Mscrm.SplitButtonControl.isInstanceOfType($v_2) && $v_2.onUnHoverHandler($v_0)
        } else {
            Sys.UI.DomElement.removeCssClass($v_0.parentNode, "ms-crm-Menu-Label-Hovered");
            Sys.UI.DomElement.addCssClass($v_0.parentNode, "ms-crm-Menu-Label")
        }
    },
    $IA_4: function($p0) {
        $p0.stopPropagation();
        this.onClickHandler($p0)
    },
    $7Q_4: function($p0) {
        return $p0 === "moreCommands" || $p0 === "moreChartsCommands" || $p0 === "moreChartDesignerCommands"
    },
    attachEvents: function() {
        var $$t_4 = this;
        this.$E4_4(function($p1_0) { Mscrm.CommandBarBase.prototype.attachEvents.call($$t_4, $p1_0) });
        if (!IsNull(this.$1m_3) && !IsNull(this.$4n_4))
            for (var $v_0 = this.$1m_3.getElementsByTagName("input"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                $addHandler($v_2, "click", this.$4n_4)
            }
    },
    setButtonVisible: function(button, visible) {
        if (visible) {
            button.style.display = "inline-block";
            var $v_0 = $P_CRM(button), $v_1 = this.$H_4.get_toggleButtonState()[$v_0.attr("command")];
            !IsNull($v_1) && $v_1 && $v_0.children().addClass("ms-crm-CommandBarToggleButton-Active")
        } else button.style.display = "none"
    },
    get_commandBarButtonControls: function() {
        if (this.$1m_3) return this.$1m_3.getElementsByTagName("LI");
        return null
    },
    get_moreMenu: function() { return this.$1j_4 },
    get_renderedControls: function() {
        if (IsNull(this.$3P_4)) this.$3P_4 = [];
        return this.$3P_4
    },
    set_renderedControls: function(value) {
        this.$3P_4 = value;
        return value
    },
    get_commandBarContent: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$27_4) && !this.$27_4.isEmpty()) return this.$27_4.toString();
        else if (CUI.ScriptUtility.isNullOrUndefined(this.$27_4)) this.$27_4 = new Sys.StringBuilder;
        else this.$27_4.clear();
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_renderedControls())) return this.$27_4.toString();
        this.$J1_4();
        for (var $v_0 = false, $v_2 = 0; $v_2 < this.get_renderedControls().length; $v_2++) {
            var $v_3 = this.get_renderedControls()[$v_2];
            if (CUI.ScriptUtility.isNullOrUndefined($v_3)) continue;
            if ($v_3.get_isVisible())
                if (!$v_3.isInMenu) {
                    var $v_4 = this.get_renderedControls()[$v_2].get_element();
                    this.setButtonVisible($v_4, true);
                    $v_4.removeAttribute("overflowIndex");
                    if (this
                        .$3h_4 !==
                        2 &&
                        $v_4.className
                        .indexOf(" ms-crm-ChartCommandBar-menu-text") ===
                        -1) $v_4.className += " ms-crm-ChartCommandBar-menu-text";
                    this.$27_4.append(XUI.Html.GetOuterHTML($v_4))
                } else $v_0 = true
        }
        var $v_1 = this.$Fn_4();
        if ($v_0) this.setButtonVisible($v_1, true);
        else this.setButtonVisible($v_1, false);
        this.$27_4.append(XUI.Html.GetOuterHTML($v_1));
        return this.$27_4.toString()
    },
    $J3_4: function($p0, $p1) {
        var $v_0 = $P_CRM($p0), $v_1 = {};
        if (!isNullOrEmptyString($p1)) $v_1["id"] = $p1;
        else $v_1["id"] = $p0.id;
        $v_1["type"] = "CommandButton";
        $v_1["parentId"] = "appBar";
        Mscrm.Utilities.registerControlForXrmUI($v_0, $v_1)
    },
    $J1_4: function() {
        var $v_0 = {};
        $v_0["type"] = "appBar";
        Mscrm.Utilities.registerControlForXrmUI(this.get_$47_4(), $v_0)
    },
    get_moreMenuContent: function() {
        if (this.$4q_4) {
            this.$1k_4.clear();
            this.refreshMoreMenu()
        } else if (!CUI.ScriptUtility.isNullOrUndefined(this
                .$1k_4) &&
            !this.$1k_4.isEmpty()) return this.$1k_4.toString();
        else if (CUI.ScriptUtility.isNullOrUndefined(this.$1k_4)) this.$1k_4 = new Sys.StringBuilder;
        else this.$1k_4.clear();
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_renderedControls())) return this.$1k_4.toString();
        for (var $v_0 = 0, $v_1 = 0; $v_0 < this.get_renderedControls().length; $v_0++) {
            var $v_2 = this.get_renderedControls()[$v_0];
            if (CUI.ScriptUtility.isNullOrUndefined($v_2)) continue;
            if ($v_2.get_isVisible() && $v_2.isInMenu) {
                var $v_3 = $v_2.get_element();
                $v_3.setAttribute("overflowIndex", $v_1++);
                if (this.$3h_4 !== 2 && $v_3.className.indexOf(" ms-crm-ChartCommandBar-menu-text") !== -1) {
                    var $v_4 = new RegExp("(?:^|\\s)ms-crm-ChartCommandBar-menu-text(?!\\S)", "g");
                    $v_3.className = $v_3.className.replace($v_4, "")
                }
                this.$1k_4.append(XUI.Html.GetOuterHTML($v_3))
            }
        }
        return this.$1k_4.toString()
    },
    set_moreMenuContent: function(value) {
        this.$1k_4.clear();
        this.$1k_4.append(value);
        return value
    },
    refreshCommandBar: function(animate, xrmOnly) {
        this.evaluateCommands(true, true, xrmOnly);
        this.$3Q_4 && this.refreshCommandBarContent(animate);
        if (!IsNull(this.$1j_4) && this.$1j_4.$2j_0) {
            this.$1j_4.hideFlyout();
            this.$4q_4 = true;
            this.$1j_4.processAndShowMenu(this.get_moreMenuContent(), this.$H_4, false)
        }
    },
    refreshCommandBarContent: function(animate) {
        this.detachEvents();
        this.$27_4.clear();
        var $v_0 = $P_CRM(this.get_commandBarContent());
        this.get_$47_4().empty();
        this.get_$47_4().append($v_0);
        for (var $v_1 = this.get_$47_4().find("li")
                     .length,
            $v_2 = 0;
            $v_2 < $v_0.length;
            $v_2++) this.$J3_4($v_0[$v_2], "");
        if (animate) {
            var $v_3 = window.setTimeout(Mscrm.PerceivedCommandBarHelper.switchCommandBars, ($v_1 + 1) * 125);
            Mscrm.PerceivedCommandBarHelper.set_asyncRealCommandBarShowUpHandle($v_3)
        }
        this.attachEvents()
    },
    refreshMoreMenu: function() {
        if (window.PRERENDERALL && !CUI.ScriptUtility.isNullOrUndefined(this.$2Z_4)) {
            window.clearTimeout(this.$2Z_4);
            this.$2Z_4 = null
        }
        this.evaluateCommands(false, false, false);
        this.$1k_4.clear();
        this.$4q_4 = false
    },
    refresh: function(animate, allContent, xrmOnly) {
        this.refreshCommandBar(animate, xrmOnly);
        if (allContent) this.refreshMoreMenu();
        else {
            this.$4q_4 = true;
            if (window
                .PRERENDERALL &&
                CUI.ScriptUtility.isNullOrUndefined(this
                    .$2Z_4)) this.$2Z_4 = window.setTimeout(this.$$d_refreshMoreMenu, 100)
        }
    },
    closeAllMenus: function() {
        !IsNull(this.$1j_4) && this.$1j_4.hideFlyout();
        for (var $v_0 = 0; $v_0 < this.get_renderedControls().length; $v_0++) {
            var $v_1 = this.get_renderedControls()[$v_0];
            !CUI.ScriptUtility.isNullOrUndefined($v_1) &&
                $v_1.get_isVisible() &&
                !$v_1.isInMenu &&
                Mscrm.MenuAwareControl.isInstanceOfType($v_1) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_1.menu) &&
                $v_1.menu.hideFlyout()
        }
    },
    disposeAllMenus: function() {
        if (!IsNull(this.$1j_4)) {
            this.$1j_4.disposeMenu();
            this.$1j_4 = null
        }
        for (var $v_0 = 0; $v_0 < this.get_renderedControls().length; $v_0++) {
            var $v_1 = this.get_renderedControls()[$v_0];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1) &&
                Mscrm.MenuAwareControl.isInstanceOfType($v_1) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_1.menu)) {
                $v_1.menu.disposeMenu();
                $v_1.menu = null
            }
        }
    },
    resizeCommandBar: function(displayLimit, widthLimit) {
        if (!(displayLimit - this.$4m_4)) return;
        this.$3A_4 += displayLimit - this.$4m_4;
        this.$4m_4 = displayLimit;
        this.$u_4 = widthLimit;
        this.evaluateCommands(true, false, false);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_renderedControls())) return;
        for (var $v_0 = 0; $v_0 <= this.$2n_4 && $v_0 < this.get_renderedControls().length; $v_0++) {
            var $v_1 = this.get_renderedControls()[$v_0];
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) continue;
            if (this.$7Q_4($v_1.id)) continue;
            if ($v_1.get_isVisible()) {
                if (displayLimit <= 0) $v_1.isInMenu = true;
                else $v_1.isInMenu = false;
                displayLimit--
            }
        }
        this.refreshCommandBarContent(false);
        this.$4q_4 = true;
        if (window
            .PRERENDERALL &&
            CUI.ScriptUtility.isNullOrUndefined(this
                .$2Z_4)) this.$2Z_4 = window.setTimeout(this.$$d_refreshMoreMenu, 100)
    },
    evaluateCommands: function(partiallyEvaluate, resetIndex, clientApiControlsOnly) {
        var $v_0 = false, $v_1 = null;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_renderedControls())) return $v_0;
        var $v_2 = this.$2n_4;
        if (resetIndex || CUI.ScriptUtility.isNullOrUndefined(this.$2n_4)) {
            this.$2n_4 = 0;
            this.$3Q_4 = false
        }
        if (!this.$2n_4) this.$3A_4 = this.$4m_4;
        for (var $v_3 = this.$2n_4; $v_3 < this.get_renderedControls().length; $v_3++) {
            var $v_4 = this.get_renderedControls()[$v_3];
            if (CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                $v_0 = true;
                continue
            }
            var $v_5, $v_6;
            $v_5 = $v_6 = $v_4.get_isVisible();
            if (partiallyEvaluate && this.$3A_4 < 0 && IsNull($v_1)) {
                this.$3Q_4 = this.$3Q_4 || $v_5 && !$v_4.isInMenu;
                $v_4.set_isVisible(false);
                continue
            }
            this.$2n_4++;
            $v_0 = true;
            if (this.$7Q_4($v_4.id)) continue;
            if (this.$3h_4 === 2 &&
            (this.$H_4.get_$DX_3() && !IsNull(this.$H_4.$7m_3[$v_4.command]) ||
                !this.$H_4.get_$DX_3() && !IsNull(this.$H_4.$7k_3[$v_4.command]))) {
                $v_4.set_isVisible(false);
                $v_4.isInMenu = false;
                continue
            }
            if (!clientApiControlsOnly || $v_4.$3Y_0 || !IsNull($v_2) && this.$2n_4 > $v_2
            ) $v_6 = Mscrm.CommandBar.$96($v_4, this.$H_4);
            if ($v_6) {
                $v_4.set_isVisible(true);
                if (this.$3A_4 > 0) {
                    this.$3Q_4 = this.$3Q_4 || !$v_5 || $v_4.isInMenu;
                    $v_4.isInMenu = false;
                    this.$3A_4--;
                    continue
                }
                $v_4.isInMenu = true;
                if (this.$3h_4 !== 2)
                    if (IsNull($v_1) && !this.$3A_4) {
                        $v_1 = $v_4;
                        $v_4.isInMenu = false
                    } else if (!IsNull($v_1)) {
                        $v_1.isInMenu = true;
                        $v_1 = null
                    }
                this.$3A_4--
            } else {
                this.$3Q_4 = this.$3Q_4 || $v_5 && !$v_4.isInMenu;
                $v_4.set_isVisible(false);
                $v_4.isInMenu = false
            }
        }
        return $v_0
    },
    renderAllControls: function() {
        for (var $v_0 = 0; $v_0 < this.get_renderedControls().length; $v_0++) {
            var $v_1 = this.get_renderedControls()[$v_0];
            if ($v_1.get_element());
        }
    },
    $CU_4: function($p0) {
        if (!IsNull(this.$2t_4)) {
            window.clearTimeout(this.$2t_4);
            this.$2t_4 = null
        }
        var $v_0 = XUI.Html.GetOpacity(this.get_$47_4()[0]) > 0;
        XUI.Html.SetOpacity(this.get_$47_4()[0], $p0);
        !$v_0 && this.detachEvents()
    },
    $CW_4: function($p0) {
        this.detachEvents();
        if ($p0 && !IsNull(this.$2t_4)) {
            var $$t_1 = this;
            this.$2t_4 = window.setTimeout(function() {
                    $$t_1.attachEvents();
                    XUI.Html.RemoveOpacity($$t_1.get_$47_4()[0]);
                    $$t_1.$2t_4 = null
                },
                0)
        } else {
            this.attachEvents();
            XUI.Html.RemoveOpacity(this.get_$47_4()[0])
        }
    },
    $8K_4: null,
    $9D_4: 0,
    $1j_4: null,
    $1T_4: null,
    $3Q_4: true,
    $2Z_4: null,
    $3P_4: null,
    $3h_4: 0,
    get_$I2_4: function() {
        switch (this.$3h_4) {
        case 2:
            return "moreCommands";
        case 0:
            return "moreChartsCommands";
        case 1:
            return "moreChartDesignerCommands"
        }
        return "moreCommands"
    },
    $3g_4: null,
    get_$47_4: function() {
        var $v_0 = $P_CRM(this.$1m_3);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3g_4))
            switch (this.$3h_4) {
            case 2:
                this.$3g_4 = $v_0.find(String.format("ul.{0}", "ms-crm-CommandBar-Menu"));
                break;
            case 0:
                this.$3g_4 = $v_0.find(String.format("ul.{0}.{1}",
                    "ms-crm-CommandBar-Menu",
                    "ms-crm-chartsPaneCommand-Bar"));
                break;
            case 1:
                this.$3g_4 = $v_0.find(String.format("ul.{0}.{1}",
                    "ms-crm-CommandBar-Menu",
                    "ms-crm-chartDesignerCommand-Bar"));
                break
            }
        if (CUI.ScriptUtility.isNullOrUndefined(this
            .$3g_4)) return $v_0.find(String.format("ul.{0}", "ms-crm-CommandBar-Menu"));
        if (!this.$3g_4.length) return $v_0.find(String.format("ul.{0}", "ms-crm-CommandBar-Menu"));
        return this.$3g_4
    },
    $Fn_4: function() {
        var $v_0 = document.createElement("li");
        $v_0.className = "ms-crm-CommandBarItem ms-crm-CommandBar-Menu ms-crm-CommandBar-MoreMenu";
        $v_0.id = this.get_$I2_4();
        $v_0.title = window.LOCID_MORECOMMANDS_TOOLTIP;
        var $v_1 = document.createElement("span");
        $v_1.className = "ms-crm-Menu-Label ms-crm-More-Menu-Label";
        var $v_2 = document.createElement("a");
        $v_2.setAttribute("onclick", "return false");
        $v_2.setAttribute("tabIndex", "0");
        $v_2.className = "ms-crm-Menu-Label";
        if (!this.$4m_4) {
            var $v_3 = document.createElement("span");
            $v_3.className = "ms-crm-MenuItem-TextRTL ms-crm-CommandBar-Menu";
            $v_3.title = window.LOCID_MORECOMMANDS_TOOLTIP;
            $v_3.id = "moreCommandsSpan";
            XUI.Html.SetText($v_3, window.LOCID_MORECOMMANDS_RESIZEDLABEL);
            $v_2.appendChild($v_3)
        } else {
            var $v_4 = document.createElement("img");
            $v_4.setAttribute("tabIndex", "-1");
            $v_4.setAttribute("alt", window.LOCID_MORECOMMANDS_TOOLTIP);
            if (window.HighContrastEnabled) $v_4.setAttribute("src", window.CDNURL + "/_imgs/morehighcontrast_16.png");
            else $v_4.setAttribute("src", window.CDNURL + "/_imgs/more_16.png");
            $v_4.className = "ms-crm-moreCommand-image";
            $v_2.appendChild($v_4)
        }
        $v_1.appendChild($v_2);
        $v_0.appendChild($v_1);
        return $v_0
    }
};
Mscrm.CommandBarBuildOptions = function(data) { this.$1w_0 = data };
Mscrm.CommandBarBuildOptions.prototype = {
    $1w_0: null,
    get_currentRibbonData: function() { return this.$1w_0 },
    set_currentRibbonData: function(value) {
        this.$1w_0 = value;
        return value
    },
    $7E_0: null,
    get_trimmedIds: function() { return this.$7E_0 },
    set_trimmedIds: function(value) {
        this.$7E_0 = value;
        return value
    },
    $2f_0: 0,
    get_numberOfButtonsForDisplay: function() { return this.$2f_0 },
    set_numberOfButtonsForDisplay: function(value) {
        this.$2f_0 = value;
        return value
    },
    $u_0: 0,
    get_availableWidth: function() { return this.$u_0 },
    set_availableWidth: function(value) {
        this.$u_0 = value;
        return value
    }
};
Mscrm.CommandBarBuilder = function(options, elmPlaceholder) {
    this.$17_0 = {};
    this.$1L_0 = new Array(2);
    this.$5D_0 = new Array(2);
    this.$5C_0 = new Array(2);
    this.$62_0 = new Array(3);
    this.$61_0 = new Array(3);
    if (CUI.ScriptUtility
        .isNullOrUndefined(elmPlaceholder)) throw Error.create("Ribbon placeholder DOM element is null or undefined.");
    this.$4F_0 = options;
    this.$Q_0 = this.$DW_0(elmPlaceholder, this.get_commandBarBuildOptions(), 2);
    this.$Go_0()
};
Mscrm.CommandBarBuilder.$7X = function($p0, $p1, $p2, $p3, $p4) {
    var $v_0 = $p0.attrs,
        $v_1 = $v_0.Id,
        $v_2 = $v_0.Command,
        $v_3 = $v_1,
        $v_4 = $p2.$1T_4[$v_3],
        $v_5 = !IsNull($v_4) ? $v_4.$T_0 + 1 : 0;
    while (!IsNull($p2) && !IsNull($v_4))
        if ($p4 && $v_4.command === $v_2) return $v_4;
        else {
            $v_3 = $v_1 + "_" + $v_5.toString();
            $v_4 = $p2.$1T_4[$v_3];
            if (!IsNull($v_4)) $v_5++
        }
    $v_4 = Mscrm.CommandBarControl.factoryMethod($p0, $p1, $v_0);
    if (!$v_4) return null;
    $v_4.id = $v_1;
    $v_4.command = $v_2;
    $v_4.set_count($v_5);
    if (!IsNull($p2)) $p2.$1T_4[$v_3] = $v_4;
    var $v_6 = $p0.name;
    if ($v_6 !== "Button" && $v_6 !== "ToggleButton") {
        var $v_7 = $v_3.replace(/\|/g, "_").replace(/\./g, "_");
        if ($v_6 === "Spinner") $v_4.setAttribute("ArrowId", "arrow_" + $v_7);
        else {
            $v_4.setAttribute("UpArrowId", "up_arrow_" + $v_7);
            $v_4.setAttribute("DownArrowId", "down_arrow_" + $v_7)
        }
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($v_4
            .command) &&
        !CUI.ScriptUtility.isNullOrUndefined($p3)) $p3[$v_0.Command.toString()] = true;
    $v_4.$6c_0 = $p2;
    return $v_4
};
Mscrm.CommandBarBuilder.$DH = function($p0) {
    var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0);
    if (!$v_0 || !$v_0.length) return null;
    var $v_1 = CUI.DataNodeWrapper.getNodeChildren($v_0[0]);
    return $v_1
};
Mscrm.CommandBarBuilder.$HD = function($p0) {
    var $v_0 = {}, $$dict_3 = $p0;
    for (var $$key_4 in $$dict_3) {
        var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
        $v_0[$v_1.key] = CrmEncodeDecode.CrmHtmlAttributeEncode($v_1.value.toString())
    }
    return $v_0
};
Mscrm.CommandBarBuilder.prototype = {
    $4F_0: null,
    $Q_0: null,
    $5i_0: false,
    get_chartPaneCommandBar: function() { return this.$1L_0[0] },
    get_chartDesignerCommandBar: function() { return this.$1L_0[1] },
    get_chartsPaneCommandBarBuildOptions: function() { return this.$5C_0[0] },
    get_chartsDesignerCommandBarBuildOptions: function() { return this.$5C_0[1] },
    get_commandBarBuildOptions: function() { return this.$4F_0 },
    get_commandBar: function() { return this.$Q_0 },
    dispose: function() {
        !IsNull(this.$Q_0) && this.$Q_0.dispose();
        this.$Q_0 = null;
        for (var $v_0 = 0; $v_0 <= 2; $v_0++) {
            if (window.PRERENDERALL && !CUI.ScriptUtility.isNullOrUndefined(this.$62_0[$v_0])) {
                window.clearTimeout(this.$62_0[$v_0]);
                this.$62_0[$v_0] = null
            }
            if (window.PRERENDERALL && !CUI.ScriptUtility.isNullOrUndefined(this.$61_0[$v_0])) {
                window.clearTimeout(this.$61_0[$v_0]);
                this.$61_0[$v_0] = null
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$1L_0[$v_0]) && $v_0 !== 2) {
                this.$1L_0[$v_0].dispose();
                this.$1L_0[$v_0] = null
            }
        }
    },
    buildCommandBar: function(commandBarData) {
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("BuildCommandBar");
        $v_0.start();
        var $v_1 = commandBarData.get_commandLayout();
        !IsNull($v_1) && this.$It_0($v_1);
        $v_0.stop()
    },
    buildChartCommandBar: function(chartDisplayDiv, commandMode, options) {
        this.$5C_0[commandMode] = options;
        this.$1L_0[commandMode] = this.$DW_0(chartDisplayDiv, options, commandMode);
        this.$1L_0[commandMode].$1T_4 = this.$Q_0.$1T_4;
        this.$1L_0[commandMode].$3P_4 = this.$5D_0[commandMode];
        this.$BQ_0(this.$1L_0[commandMode]);
        if (window.PRERENDERALL) {
            this.$62_0[commandMode] = window.setTimeout(this.$1L_0[commandMode].$$d_renderAllControls, 100);
            this.$61_0[commandMode] = window.setTimeout(this.$1L_0[commandMode].$$d_refreshMoreMenu, 100)
        }
    },
    refreshCommandBar: function(parameters) {
        var $v_0 = 3, $v_1 = false, $v_2 = false;
        if (!IsNull(parameters)) {
            if (!IsNull(parameters["mode"])) $v_0 = parameters["mode"];
            if (!IsNull(parameters["animate"])) $v_1 = parameters["animate"];
            if (!IsNull(parameters["XrmOnly"])) $v_2 = parameters["XrmOnly"]
        }
        this.$Q_0 && ($v_0 === 3 || $v_0 === 2) && this.$Q_0.refresh($v_1, false, $v_2);
        for (var $v_3 = 0; $v_3 < 2; $v_3++)
            if (!IsNull(this.$1L_0[$v_3])) ($v_3 === $v_0 || $v_0 === 3) && this.$1L_0[$v_3].refresh($v_1, false, $v_2)
    },
    resizeCommandBar: function() {
        this.$Q_0 &&
            this.$Q_0.resizeCommandBar(this.get_commandBarBuildOptions().$2f_0, this.get_commandBarBuildOptions().$u_0);
        for (var $v_0 = 0; $v_0 < 2; $v_0++)
            !IsNull(this.$1L_0[$v_0]) &&
                this.$1L_0[$v_0].resizeCommandBar(this.$5C_0[$v_0].$2f_0, this.$5C_0[$v_0].$u_0)
    },
    $Go_0: function() {
        if (!Mscrm.TemplateGenerator.$6d) {
            $P_CRM.template("CommandBarButtonTemplate", Mscrm.TemplateGenerator.get_buttonTemplate());
            $P_CRM.template("CommandBarFlyoutAnchorTemplate", Mscrm.TemplateGenerator.get_flyOutAnchorTemplate());
            $P_CRM.template("CommandBarSplitButtonTemplate", Mscrm.TemplateGenerator.get_splitButtonTemplate());
            $P_CRM.template("CommandBarCustomTabTemplate", Mscrm.TemplateGenerator.get_customTabTemplate());
            $P_CRM.template("CommandBarCheckBoxTemplate", Mscrm.TemplateGenerator.get_checkBoxTemplate());
            $P_CRM.template("CommandBarSpinnerTemplate", Mscrm.TemplateGenerator.get_spinnerControlTemplate())
        }
    },
    $It_0: function($p0) {
        var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "CommandBar");
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) throw Error.create("No ribbon element was present in the data");
        var $v_1 = new CUI.DataNodeWrapper($v_0);
        this.$5D_0[0] = [];
        this.$5D_0[1] = [];
        this.$5i_0 = false;
        this.$F5_0($v_1);
        if (!this.$5i_0) {
            this.$BQ_0(this.$Q_0);
            this.$5i_0 = true
        }
        if (window.PRERENDERALL) {
            this.$62_0[2] = window.setTimeout(this.$Q_0.$$d_renderAllControls, 100);
            this.$61_0[2] = window.setTimeout(this.$Q_0.$$d_refreshMoreMenu, 100)
        }
    },
    $F5_0: function($p0) {
        var $v_0 = this.get_commandBarBuildOptions().$1w_0.get_$4D_3();
        if (!$v_0) {
            var $v_3 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
                .getFirstChildNodeWithName($p0.$b_0, "Tabs"));
            if (IsNull($v_3) || !$v_3.length) return;
            for (var $v_4 = false, $v_5 = 0; $v_5 < $v_3.length; $v_5++)
                if (!$v_4 && CUI.DataNodeWrapper.getNodeAttribute($v_3[$v_5], "Id") === "Mscrm.CommandBar") {
                    this.$C6_0($v_3[$v_5], false);
                    $v_4 = true
                } else this.$C5_0($v_3[$v_5], false);
            this.get_commandBarBuildOptions().$1w_0.$7m_3 = this.$17_0
        }
        this.$17_0 = {};
        var $v_1 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
            .getFirstChildNodeWithName($p0.$b_0, "ContextualTabs"));
        if (IsNull($v_1) || !$v_1.length) return;
        for (var $v_2 = false, $v_6 = 0; $v_6 < $v_1.length; $v_6++)
            if (!$v_2 && CUI.DataNodeWrapper.getNodeAttribute($v_1[$v_6], "Id") === "Mscrm.ContextualCommandBar") {
                this.$C6_0($v_1[$v_6], true);
                $v_2 = true
            } else this.$C5_0($v_1[$v_6], true);
        this.get_commandBarBuildOptions().$1w_0.$7k_3 = this.$17_0
    },
    $9A_0: function($p0) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttribute($p0, "Id");
        return this.$4F_0.$7E_0[$v_0]
    },
    $Hh_0: function($p0) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttribute($p0, "Id");
        return $v_0.search(Mscrm.CommandBarBuilder.$Bq) >= 0
    },
    $Hg_0: function($p0) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttribute($p0, "Id");
        return $v_0.search(Mscrm.CommandBarBuilder.$Bp) >= 0
    },
    $C6_0: function($p0, $p1) {
        for (var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Groups"),
            $v_1 = CUI.DataNodeWrapper.getNodeChildren($v_0),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            if (this.$9A_0($v_1[$v_2])) continue;
            for (var $v_3 = new CUI.DataNodeWrapper($v_1[$v_2]), $v_4 = null, $v_6 = 0;
                $v_6 < $v_3.get_children().length;
                $v_6++)
                if ($v_3.get_children()[$v_6].name === "Controls") {
                    $v_4 = $v_3.get_children()[$v_6];
                    break
                }
            if (CUI.ScriptUtility.isNullOrUndefined($v_4))
                throw Error.create("No Controls node found in this Group tag.");
            for (var $v_5 = CUI.DataNodeWrapper.getNodeChildren($v_4), $v_7 = 0; $v_7 < $v_5.length; $v_7++) {
                if (this.$9A_0($v_5[$v_7])) continue;
                var $v_8 = null;
                if (this.$Hh_0($v_5[$v_7])) {
                    $v_8 = Mscrm.CommandBarBuilder.$7X($v_5[$v_7], this.$4F_0.$1w_0, this.$Q_0, this.$17_0, false);
                    if (IsNull($v_8)) continue;
                    Array.add(this.$5D_0[0], $v_8)
                } else if (this.$Hg_0($v_5[$v_7])) {
                    $v_8 = Mscrm.CommandBarBuilder.$7X($v_5[$v_7], this.$4F_0.$1w_0, this.$Q_0, this.$17_0, false);
                    if (IsNull($v_8)) continue;
                    Array.add(this.$5D_0[1], $v_8)
                } else {
                    $v_8 = Mscrm.CommandBarBuilder.$7X($v_5[$v_7], this.$4F_0.$1w_0, this.$Q_0, this.$17_0, false);
                    if (IsNull($v_8)) continue;
                    Array.add(this.$Q_0.get_renderedControls(), $v_8);
                    this.$CD_0(this.$Q_0, $p1)
                }
                var $v_9 = $v_8;
                if ($v_9) $v_9.sections = Mscrm.CommandBarBuilder.$DH($v_5[$v_7])
            }
        }
    },
    $C5_0: function($p0, $p1) {
        var $v_0 = Mscrm.CommandBarBuilder.$7X($p0, this.$4F_0.$1w_0, this.$Q_0, this.$17_0, false);
        Array.add(this.$Q_0.get_renderedControls(), $v_0);
        this.$CD_0(this.$Q_0, $p1);
        var $v_1 = $v_0;
        $v_1.sections = [];
        for (var $v_2 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Groups"),
            $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_2),
            $v_4 = 0,
            $v_5 = 0;
            $v_5 < $v_3.length;
            $v_5++) {
            if (this.$9A_0($v_3[$v_5])) continue;
            for (var $v_6 = new CUI.DataNodeWrapper($v_3[$v_5]), $v_7 = null, $v_9 = 0;
                $v_9 < $v_6.get_children().length;
                $v_9++)
                if ($v_6.get_children()[$v_9].name === "Controls") {
                    $v_7 = $v_6.get_children()[$v_9];
                    break
                }
            if (CUI.ScriptUtility.isNullOrUndefined($v_7))
                throw Error.create("No Controls node found in this Group tag.");
            for (var $v_8 = CUI.DataNodeWrapper.getNodeChildren($v_7), $v_A = 0; $v_A < $v_8.length; $v_A++) {
                var $v_B = $v_8[$v_A];
                if (this.$9A_0($v_B)) continue;
                $v_1.sections[$v_4++] = $v_8[$v_A]
            }
        }
    },
    $DW_0: function($p0, $p1, $p2) {
        var $v_0 = document.createElement("ul");
        $v_0.setAttribute("role", "application");
        $v_0.className = "ms-crm-CommandBar-Menu";
        switch ($p2) {
        case 0:
            $v_0.className += String.format(" {0}", "ms-crm-chartsPaneCommand-Bar");
            break;
        case 1:
            $v_0.className += String.format(" {0}", "ms-crm-chartDesignerCommand-Bar");
            break
        }
        if (this.get_commandBarBuildOptions().$1w_0
            .get_$4D_3()) $v_0.className += String.format(" {0}", "ms-crm-AssociatedGridCommandBar-Menu");
        $p0.appendChild($v_0);
        var $v_1 = Mscrm.CrmUIComponent.crmCreate(Mscrm.CommandBar, null, null, null, $p0);
        $v_1.setCommandBuildOptions($p1.$1w_0, $p1.$2f_0, $p2, $p1.$u_0);
        $v_1.initialize();
        return $v_1
    },
    $BQ_0: function($p0) {
        $p0.evaluateCommands(true, false, false);
        $p0.refreshCommandBarContent(true);
        window.self.CommandBarInitialLoadTime = (new Date).getTime()
    },
    $CD_0: function($p0, $p1) {
        if (!$p1)
            if (!this.$Q_0.evaluateCommands(true, false, false))
                if (!this.$5i_0) {
                    this.$BQ_0($p0);
                    this.$5i_0 = true
                }
    }
};
Mscrm.TemplateGenerator = function() {};
Mscrm.TemplateGenerator.get_$7S = function() {
    if (window.screen.availWidth > 1e3) return 200;
    else return 200
};
Mscrm.TemplateGenerator.get_$Bj = function() { return Mscrm.TemplateGenerator.get_$7S() - 50 };
Mscrm.TemplateGenerator.get_$AT = function() {
    !Mscrm.TemplateGenerator.$7c && Mscrm.TemplateGenerator.$Gj();
    return Mscrm.TemplateGenerator.$7c
};
Mscrm.TemplateGenerator.get_commandBarTemplateSet = function() { return Mscrm.TemplateGenerator.$6d };
Mscrm.TemplateGenerator.set_commandBarTemplateSet = function(value) {
    Mscrm.TemplateGenerator.$6d = value;
    return value
};
Mscrm.TemplateGenerator.get_buttonTemplate = function() {
    !Mscrm.TemplateGenerator.$7d && Mscrm.TemplateGenerator.$Gk();
    return Mscrm.TemplateGenerator.$7d
};
Mscrm.TemplateGenerator.get_checkBoxTemplate = function() {
    !Mscrm.TemplateGenerator.$7e && Mscrm.TemplateGenerator.$Gl();
    return Mscrm.TemplateGenerator.$7e
};
Mscrm.TemplateGenerator.get_flyOutAnchorTemplate = function() {
    !Mscrm.TemplateGenerator.$83 && Mscrm.TemplateGenerator.$Gn();
    return Mscrm.TemplateGenerator.$83
};
Mscrm.TemplateGenerator.get_splitButtonTemplate = function() {
    !Mscrm.TemplateGenerator.$8m && Mscrm.TemplateGenerator.$Gq();
    return Mscrm.TemplateGenerator.$8m
};
Mscrm.TemplateGenerator.get_customTabTemplate = function() {
    !Mscrm.TemplateGenerator.$7p && Mscrm.TemplateGenerator.$Gm();
    return Mscrm.TemplateGenerator.$7p
};
Mscrm.TemplateGenerator.get_spinnerControlTemplate = function() {
    !Mscrm.TemplateGenerator.$8l && Mscrm.TemplateGenerator.$Gp();
    return Mscrm.TemplateGenerator.$8l
};
Mscrm.TemplateGenerator.$Gj = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0
        .append('title ="${ToolTipTitle}${ToolTipDescription}" id ="${Id}" command="${Command}" style = "white-space:pre-line">');
    $v_0.append(String.format('<span tabindex="-1" class="{0} {1}" style = "max-width:{2}px">',
        "ms-crm-Menu-Label",
        "ms-crm-CommandBar-Button",
        Mscrm.TemplateGenerator.get_$7S()));
    $v_0.append(String.format('<a tabindex="0" class="{0}" onclick="return false" >', "ms-crm-Menu-Label"));
    $v_0
        .append('<img tabindex="-1" class="${Image16by16Class} ms-crm-commandbar-image16by16" src="${Image16by16}" style="vertical-align:top"> </img>');
    $v_0.append(String.format('<span tabindex="-1" class="{0}" style = "max-width:{1}px"',
        "ms-crm-CommandBar-Menu",
        Mscrm.TemplateGenerator.get_$Bj()));
    $v_0.append(' command="${Command}" > ${LabelText} </span>');
    $v_0.append('<div class="ms-crm-div-NotVisible"> ${ToolTipDescription} </div> ');
    Mscrm.TemplateGenerator.$7c = $v_0.toString();
    Mscrm.TemplateGenerator.$6d = true
};
Mscrm.TemplateGenerator.$Gk = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2}"',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-Button"));
    $v_0.append(Mscrm.TemplateGenerator.get_$AT());
    $v_0.append(" </a> </span> </li>");
    Mscrm.TemplateGenerator.$7d = $v_0.toString()
};
Mscrm.TemplateGenerator.$Gl = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2}"',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-Checkbox"));
    $v_0
        .append('title ="${ToolTipTitle}${ToolTipDescription}" id ="${Id}" command="${Command}" style = "white-space:pre-line">');
    $v_0.append(String.format('<span class="{0} {1}" style = "max-width:{2}px">',
        "ms-crm-Menu-Label",
        "ms-crm-CommandBar-Button",
        Mscrm.TemplateGenerator.get_$7S()));
    $v_0.append(String.format('<a tabindex="0" class="{0}" onclick="return false" >', "ms-crm-Menu-Label"));
    $v_0.append(String.format('<input tabindex="0" class="{0}" type="checkbox" style = "width:auto" >',
        "ms-crm-Menu-Label"));
    $v_0.append(String.format('<span tabindex="-1" class="{0}" style = "max-width:{1}px"',
        "ms-crm-CommandBar-Menu",
        Mscrm.TemplateGenerator.get_$Bj()));
    $v_0.append(' command="${Command}" > ${LabelText} </span>');
    $v_0.append(" </a> </span> </li>");
    Mscrm.TemplateGenerator.$7e = $v_0.toString()
};
Mscrm.TemplateGenerator.$Gn = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2}"',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-FlyoutAnchor"));
    $v_0.append(Mscrm.TemplateGenerator.get_$AT());
    $v_0.append('<img tabindex="-1" class="flyoutAnchorArrow" src="' +
        window.CDNURL +
        '/_imgs/commandbarmenudown.png" id="${ArrowId}" alt="" >');
    $v_0.append(" </a> </span> </li>");
    Mscrm.TemplateGenerator.$83 = $v_0.toString()
};
Mscrm.TemplateGenerator.$Gq = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2}"',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-SplitButton"));
    $v_0.append(Mscrm.TemplateGenerator.get_$AT());
    $v_0.append('<span class="splitButtonSplitter">');
    $v_0.append('<img tabindex="-1" class="ms-crm-ImageStrip-commandbar_divider" src="' +
        window.CDNURL +
        '/_imgs/imagestrips/transparent_spacer.gif" alt="" />');
    $v_0.append("</span>");
    $v_0.append("</a>");
    if (Mscrm.Utilities.isSafari()) {
        $v_0
            .append('<a tabindex="-1" class="ms-crm-Menu-Label-Flyout" title="${ToolTipTitle}${ToolTipDescription}" onclick="return false" role="flyout">');
        $v_0.append('<img tabindex="0" class="flyoutAnchorArrow" src="' +
            window.CDNURL +
            '/_imgs/commandbarmenudown.png" id="${ArrowId}" role="flyout" alt="${ToolTipTitle}${ToolTipDescription}" />')
    } else {
        $v_0
            .append('<a tabindex="0" class="ms-crm-Menu-Label-Flyout" title="${ToolTipTitle}${ToolTipDescription}" onclick="return false" role="flyout">');
        $v_0.append('<img tabindex="-1" class="flyoutAnchorArrow" src="' +
            window.CDNURL +
            '/_imgs/commandbarmenudown.png" id="${ArrowId}" role="flyout" alt="" />')
    }
    $v_0.append(" </a> </span> </li>");
    Mscrm.TemplateGenerator.$8m = $v_0.toString()
};
Mscrm.TemplateGenerator.$Gm = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2} {3}" ',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-CustomTab"));
    $v_0
        .append('title ="${ToolTipTitle}${ToolTipDescription}" id ="${Id}" command="${Command}" style = "white-space:pre-line">');
    $v_0.append(String.format('<span class="{0} {1}" style = "max-width:{2}px">',
        "ms-crm-Menu-Label",
        "ms-crm-CommandBar-Button",
        Mscrm.TemplateGenerator.get_$7S()));
    $v_0.append(String.format('<a tabindex="0" class="{0}" onclick="return false" >', "ms-crm-Menu-Label"));
    $v_0
        .append('<img tabindex="-1" class="${Image16by16Class}" src="${Image16by16}" style="vertical-align:top" alt="${Alt}"> </img>');
    $v_0.append(String.format('<span tabindex="-1" class="{0}" style = "max-width:{1}px"',
        "ms-crm-CommandBar-Menu",
        Mscrm.TemplateGenerator.get_$Bj()));
    $v_0.append(' command="${Command}" > ${Title} </span>');
    $v_0.append('<img tabindex="-1" class="flyoutAnchorArrow" src="' +
        window.CDNURL +
        '/_imgs/commandbarmenudown.png" id="${ArrowId}" alt="" >');
    $v_0.append(" </a> </span> </li>");
    Mscrm.TemplateGenerator.$7p = $v_0.toString()
};
Mscrm.TemplateGenerator.$Gp = function() {
    var $v_0 = new Sys.StringBuilder;
    $v_0.append(String.format('<li tabindex="-1" class="{0} {1} {2}" ',
        "ms-crm-CommandBarItem",
        "ms-crm-CommandBar-Menu",
        "ms-crm-CommandBar-Spinner"));
    $v_0
        .append('title ="${ToolTipTitle}${ToolTipDescription}" id ="${Id}" command="${Command}" style = "white-space:pre-line">');
    $v_0.append(String.format('<span class="{0} {1}" style="display:inline-block;max-width:{2}px " >',
        "ms-crm-Menu-Label",
        "ms-crm-CommandBar-Button",
        Mscrm.TemplateGenerator.get_$7S()));
    $v_0.append(String.format('<input tabindex="-1" class="{0} {1}" type="textbox" style="width:auto" ',
        "ms-crm-Menu-Label",
        "ms-crm-CommandBar-Input-Container"));
    $v_0.append('value="${DefaultValue}" >');
    $v_0.append("</span>");
    $v_0.append(String
        .format('<span class="{0} {1}" tabindex="-1" style="display:inline-block;vertical-align:top;width:13px;"',
            "ms-crm-Menu-Label",
            "ms-crm-CommandBar-Button"));
    $v_0.append('id ="${Id}" command="${Command}" >');
    $v_0.append('<div tabindex="-1" style="height:11px">');
    $v_0.append('<a tabindex="0" class="ms-crm-CommandBar-Spinner-Up" role="UpArrow" style="display:block">');
    $v_0.append('<img tabindex="-1" class="SpinnerUpArrow" src="' +
        window.CDNURL +
        '/_imgs/commandbarmenudown.png" style="width:13px;height:11px;display:block" id="${UpArrowId}" >');
    $v_0.append("</a>");
    $v_0.append("</div>");
    $v_0.append('<div tabindex="-1" style="height:11px">');
    $v_0.append('<a tabindex="0" class="ms-crm-CommandBar-Spinner-Down" role="DownArrow" style="display:block">');
    $v_0.append('<img tabindex="-1" class="SpinnerDownArrow" src="' +
        window.CDNURL +
        '/_imgs/commandbarmenudown.png" style="width:13px;height:11px;display:block" id="${DownArrowId}" >');
    $v_0.append("</a>");
    $v_0.append("</div>");
    $v_0.append("</span>");
    $v_0.append(" </li>");
    Mscrm.TemplateGenerator.$8l = $v_0.toString()
};
Mscrm.CommandBarConstants = function() {};
Mscrm.ButtonControl = function($p0, $p1) {
    Mscrm.ButtonControl.initializeBase(this, [$p1]);
    this.command = $p0
};
Mscrm.ButtonControl.prototype = {
    click: function($p0, $p1) { this.executeCommand($p0, null) },
    getTemplateName: function() { return "CommandBarButtonTemplate" }
};
Mscrm.CommandBarControl = function($p0) {
    this.ribbonData = $p0;
    Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled() &&
        Array.add(Mscrm.CommandBarControl.get_AllCommands(), this)
};
Mscrm.CommandBarControl.get_AllCommands = function() {
    if (!Mscrm.CommandBarControl.$8u) Mscrm.CommandBarControl.$8u = [];
    return Mscrm.CommandBarControl.$8u
};
Mscrm.CommandBarControl.factoryMethod = function($p0, $p1, $p2) {
    var $v_0 = $p0.name, $v_1 = $p2["Command"], $v_2 = null;
    switch ($v_0) {
    case "FlyoutAnchor":
        $v_2 = new Mscrm.FlyoutAnchorControl($p2, $p1);
        break;
    case "SplitButton":
        $v_2 = new Mscrm.SplitButtonControl($p2, $v_1, $p1);
        break;
    case "Button":
        $v_2 = new Mscrm.ButtonControl($v_1, $p1);
        break;
    case "CheckBox":
        $v_2 = new Mscrm.CheckBoxControl($p2, $v_1, $p1);
        break;
    case "Tab":
        $v_2 = new Mscrm.CustomTabControl($p1);
        break;
    case "ToggleButton":
        $v_2 = new Mscrm.ToggleButtonControl($p2, $v_1, $p1);
        break;
    case "Spinner":
        $v_2 = new Mscrm.SpinnerControl($p0, $v_1, $p1);
        break
    }
    if ($v_2) {
        $v_2.setAttributes($p2);
        return $v_2
    }
    return null
};
Mscrm.CommandBarControl.prototype = {
    ribbonData: null,
    id: null,
    isInMenu: false,
    command: null,
    $3Y_0: false,
    $15_0: null,
    $6a_0: false,
    $7t_0: null,
    $9y_0: false,
    $22_0: null,
    $6c_0: null,
    $5K_0: false,
    get_parentMenu: function() { return this.$22_0 },
    set_parentMenu: function($p0) {
        this.$22_0 = $p0;
        return $p0
    },
    get_commandBar: function() {
        if (!IsNull(this.$6c_0)) return this.$6c_0;
        if (!IsNull(this.$22_0)) return this.$22_0.get_commandBar();
        return null
    },
    set_commandBar: function($p0) {
        this.$6c_0 = $p0;
        return $p0
    },
    get_isVisible: function() { return this.$9y_0 },
    set_isVisible: function($p0) {
        this.$9y_0 = $p0;
        return $p0
    },
    setAttribute: function($p0, $p1) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined(this.$15_0)) {
            this.$15_0[$p0] = $p1;
            this.$6a_0 = true;
            return true
        }
        return false
    },
    setAttributes: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            this.$15_0 = $p0;
            this.$6a_0 = true;
            return true
        }
        return false
    },
    getAttribute: function($p0) {
        if (!CUI.ScriptUtility
            .isNullOrUndefined($p0) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.$15_0)) return this.$15_0[$p0];
        return null
    },
    $T_0: 0,
    get_count: function() { return this.$T_0 },
    set_count: function($p0) {
        if ($p0 >= 0) this.$T_0 = $p0;
        if (this.$T_0 > 0) this.$15_0["Id"] = this.$15_0["Id"] + "_" + this.$T_0.toString();
        return $p0
    },
    get_element: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$7t_0) || this.$6a_0) {
            var $v_0 = null, $v_1 = null;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$15_0)) {
                var $v_3 = this.$15_0.Image16by16;
                if (CUI.ScriptUtility.isNullOrUndefined($v_3) || !$v_3.length) {
                    this.$15_0["Image16by16"] = window.CDNURL + "/_imgs/imagestrips/transparent_spacer.gif";
                    this.$15_0["Image16by16Class"] = "ms-cui-img-16by16"
                }
                $v_0 = this.$15_0["ToolTipTitle"];
                $v_1 = this.$15_0["ToolTipDescription"];
                if (!isNullOrEmptyString($v_1)) {
                    if (!isNullOrEmptyString($v_0)) this.$15_0["ToolTipTitle"] = $v_0 + " \n\n";
                    var $v_4 = new RegExp("<br\\s*[\\/]?>", "ig");
                    this.$15_0["ToolTipDescription"] = $v_1.replace($v_4, "\n")
                }
            }
            var $v_2 = $P_CRM.tmpl(this.getTemplateName(), Mscrm.CommandBarBuilder.$HD(this.$15_0));
            this.$7t_0 = $v_2[0].cloneNode(true);
            $P_CRM.tmpl.complete($v_2);
            $v_2.removeData("tmplItem");
            if (!CUI.ScriptUtility.isNullOrUndefined(this
                    .$15_0) &&
                !isNullOrEmptyString($v_1)) this.$15_0["ToolTipTitle"] = $v_0;
            this.$6a_0 = false
        }
        return this.$7t_0
    },
    get_dynamicControl: function() { return this.$5K_0 },
    set_dynamicControl: function($p0) {
        this.$5K_0 = $p0;
        return $p0
    },
    dispose: function() {
        Mscrm.Performance.GlobalObjectTrackingManager.get_trackingEnabled() &&
            Array.remove(Mscrm.CommandBarControl.get_AllCommands(), this)
    },
    executeCommand: function($p0, $p1) {
        if (!IsNull(this.ribbonData)) {
            if (IsNull($p1)) $p1 = {};
            $p1["SourceControlId"] = IsNull(this.id) ? $p0.id : this.id;
            var $v_0 = this.getAttribute("CommandValueId");
            if (!IsNull($v_0)) $p1["CommandValueId"] = $v_0;
            this.get_commandBar().$CU_4(.5);
            try {
                this.ribbonData.executeCommand(this.command, $p1);
                this.$5K_0 && Mscrm.RibbonManager.get_$3T().$z_1.executeCommand(this.command, $p1)
            } finally {
                this.get_commandBar().$CW_4(true)
            }
        }
    }
};
Mscrm.MenuAwareControl = function($p0) { Mscrm.MenuAwareControl.initializeBase(this, [$p0]) };
Mscrm.MenuAwareControl.prototype = {
    sections: null,
    menu: null,
    populateDynamically: false,
    populateOnlyOnce: false,
    populateQueryCommand: null,
    getNewId: function() {
        if (!this.$T_0) return this.id.replace(/\|/g, "_").replace(/\./g, "_").concat("Menu");
        else return this.id.replace(/\|/g, "_").replace(/\./g, "_").concat("Menu") + "_" + this.$T_0.toString()
    },
    showMenuInternal: function() {
        var $v_0 = new Sys.StringBuilder;
        if (!IsNull(this.sections) && this.sections.length > 0) {
            var $v_2 = document.createElement("ul");
            $v_2.className = "ms-crm-CommandBar-Menu";
            if (Object.getType(this) === Mscrm.CustomTabControl) this.$E8_1(this.sections, $v_0);
            else
                for (var $v_3 = 0; $v_3 < this.sections.length; $v_3++) {
                    var $v_4 = this.sections[$v_3];
                    this.$JO_1($v_4, $v_0);
                    var $v_5 = CUI.DataNodeWrapper.getNodeChildren($v_4),
                        $v_6 = CUI.DataNodeWrapper.getNodeChildren($v_5[0]);
                    this.$E8_1($v_6, $v_0)
                }
        }
        if ($v_0.isEmpty()) {
            var $v_7 = {};
            $v_7["Id"] = this.getNewId() + "_dummControl";
            $v_7["LabelText"] = window.LOCID_DUMMYCONTROL_LABEL;
            $v_7["Image16by16"] = "/_imgs/imagestrips/transparent_spacer.gif";
            $v_7["Image16by16Class"] = "ms-cui-img-16by16";
            var $v_8 = new Mscrm.ButtonControl("", this.ribbonData);
            $v_8.setAttributes($v_7);
            $v_0.append(XUI.Html.GetOuterHTML($v_8.get_element()))
        }
        var $v_1 = $v_0.toString();
        if (!this.menu)
            this.menu = new Mscrm.CommandBarMenu("#" + this.getNewId(),
                String.format("<ul id='{0}'></ul>", this.getNewId()),
                this.getAttribute("Id"),
                this.get_commandBar(),
                this.$22_0);
        if (!IsNull(this.$22_0) && this.$22_0.$2i_0 !== this.menu) {
            !IsNull(this.$22_0.$2i_0) && this.$22_0.$2i_0.hideFlyout();
            this.$22_0.$2i_0 = this.menu
        }
        this.menu.$1s_0 = this.$22_0;
        this.menu.processAndShowMenu($v_1, this.ribbonData, this.isInMenu)
    },
    showMenu: function() {
        this.populateDynamically && this.$Ga_1();
        this.showMenuInternal()
    },
    $5x_1: false,
    $Ga_1: function() {
        if (this.$5x_1 && this.populateOnlyOnce) return;
        if (!this.populateQueryCommand) return;
        var $v_0 = this.ribbonData.getDynamicMenuRibbonFromCommand(this.populateQueryCommand, null);
        if ($v_0) {
            var $v_1 = CUI.Builder.$CK($v_0);
            if ($v_1) {
                var $v_2 = CUI.DataNodeWrapper.getNodeChildren($v_1);
                if ($v_2 && $v_2.length > 0) {
                    this.sections = $v_2;
                    this.$5x_1 = true
                }
            }
        }
    },
    $E8_1: function($p0, $p1) {
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = Mscrm.CommandBarBuilder.$7X($p0[$v_0], this.ribbonData, this.get_commandBar(), null, true);
            if (!IsNull($v_1)) {
                if (Mscrm.MenuAwareControl
                    .isInstanceOfType($v_1)) $v_1.sections = Mscrm.CommandBarBuilder.$DH($p0[$v_0]);
                if (this.populateDynamically) $v_1.$5K_0 = true;
                if (Mscrm.CommandBar.$96($v_1, this.ribbonData)) {
                    $v_1.set_isVisible(true);
                    $v_1.isInMenu = true;
                    $p1.append(XUI.Html.GetOuterHTML($v_1.get_element()))
                } else $v_1.set_isVisible($v_1.isInMenu = false)
            }
        }
    },
    $JO_1: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = $v_0["Title"];
        if (!isNullOrEmptyString($v_1)) {
            var $v_2 = String.format('<div class="ms-cui-menusection-title">{0}</div>', $v_1);
            $p1.append($v_2)
        }
    }
};
Mscrm.FlyoutAnchorControl = function($p0, $p1) {
    Mscrm.FlyoutAnchorControl.initializeBase(this, [$p1]);
    if (!IsNull($p0)) {
        if (!IsNull($p0.PopulateDynamically)) this.populateDynamically = Boolean.parse($p0.PopulateDynamically);
        if (!IsNull($p0.PopulateOnlyOnce)) this.populateOnlyOnce = Boolean.parse($p0.PopulateOnlyOnce);
        this.populateQueryCommand = $p0.PopulateQueryCommand
    }
};
Mscrm.FlyoutAnchorControl.prototype = {
    click: function($p0, $p1) {
        var $v_0 = Mscrm.Utilities.getParentElementByTagName($p1.target, "LI");
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.children[0];
            !IsNull($v_1) && Sys.UI.DomElement.addCssClass($v_1, "ms-crm-CommandBar-button-selected")
        }
        this.showMenu()
    },
    getTemplateName: function() { return "CommandBarFlyoutAnchorTemplate" }
};
Mscrm.ToggleButtonControl = function($p0, $p1, $p2) {
    Mscrm.ToggleButtonControl.initializeBase(this, [$p2]);
    this.command = $p1;
    this.$9J_1 = $p0.QueryCommand;
    $p2.get_toggleButtonState()[$p1] = false;
    this.isActive = false
};
Mscrm.ToggleButtonControl.prototype = {
    $9J_1: null,
    get_isVisible: function() { return Mscrm.CommandBarControl.prototype.get_isVisible.call(this) },
    set_isVisible: function($p0) {
        if ($p0) {
            this.isActive = this.ribbonData.get_toggleButtonState()[this.command];
            this.setButtonState(this.get_element(), this.isActive)
        }
        Mscrm.CommandBarControl.prototype.set_isVisible.call(this, $p0);
        return $p0
    },
    isActive: false,
    click: function($p0, $p1) {
        this.isActive = !this.isActive;
        this.setButtonState($p0, this.isActive);
        this.executeCommand($p0, null)
    },
    setButtonState: function($p0, $p1) {
        $p1 = this.evaluateState($p1);
        var $v_0 = $P_CRM(XUI.Html.DomUtils.GetFirstChild(this.getElement($p0)));
        if ($p1) this.$JI_1($v_0);
        else this.$JJ_1($v_0)
    },
    evaluateState: function($p0) {
        if (!isNullOrEmptyString(this.$9J_1)) {
            var $v_0 = {};
            this.ribbonData.executeCommand(this.$9J_1, $v_0);
            if (!IsNull($v_0["On"])) $p0 = $v_0["On"]
        }
        return $p0
    },
    $JI_1: function($p0) {
        $p0.addClass("ms-crm-CommandBarToggleButton-Active");
        this.ribbonData.get_toggleButtonState()[this.command] = true
    },
    $JJ_1: function($p0) {
        $p0.removeClass("ms-crm-CommandBarToggleButton-Active");
        this.ribbonData.get_toggleButtonState()[this.command] = false
    },
    getElement: function($p0) {
        if (IsNull($p0)) return this.get_element();
        return Mscrm.Utilities.getParentElementByTagName($p0, "LI")
    },
    getTemplateName: function() { return "CommandBarButtonTemplate" }
};
Mscrm.SplitButtonControl = function($p0, $p1, $p2) {
    Mscrm.SplitButtonControl.initializeBase(this, [$p2]);
    this.command = $p1;
    if (!IsNull($p0)) {
        this.populateDynamically = $p0.PopulateDynamically;
        this.populateOnlyOnce = $p0.PopulateOnlyOnce;
        this.populateQueryCommand = $p0.PopulateQueryCommand
    }
};
Mscrm.SplitButtonControl.prototype = {
    click: function($p0, $p1) {
        var $v_0 = $p1.target.attributes.getNamedItem("role");
        if ($v_0 && $v_0.value === "flyout") {
            var $v_1 = Mscrm.Utilities.getParentElementByTagName($p1.target, "LI"), $v_2 = $v_1.children[0];
            if (!IsNull($v_2)) {
                Sys.UI.DomElement.addCssClass($v_2.children[0], "ms-crm-CommandBar-button-split-selected");
                var $v_3 = Mscrm.Utilities
                    .getChildElementsByClassName($v_2.children[0], "splitButtonSplitter", true)[0];
                if (!IsNull($v_3)) $v_3.style.visibility = "hidden";
                Sys.UI.DomElement.addCssClass($v_2.children[1], "ms-crm-CommandBar-button-selected")
            }
            this.showMenu()
        } else this.executeCommand($p0, null)
    },
    getTemplateName: function() { return "CommandBarSplitButtonTemplate" },
    onHoverHandler: function($p0) {
        var $v_0 = $p0.attributes.getNamedItem("role"), $v_1 = Mscrm.Utilities.getParentElementByTagName($p0, "SPAN");
        if (!IsNull($v_1))
            if ($v_0 && $v_0.value === "flyout") {
                Sys.UI.DomElement.addCssClass($v_1.children[0], "ms-crm-commandbar-split-hover");
                var $v_2 = Mscrm.Utilities
                    .getChildElementsByClassName($v_1.children[0], "splitButtonSplitter", true)[0];
                !IsNull($v_2) && Sys.UI.DomElement.addCssClass($v_2, "splitButtonSplitter-hidden");
                Sys.UI.DomElement.addCssClass($v_1.children[1], "ms-crm-commandbar-hoveredOver")
            } else {
                Sys.UI.DomElement.addCssClass($v_1.children[0], "ms-crm-commandbar-hoveredOver");
                var $v_3 = Mscrm.Utilities
                    .getChildElementsByClassName($v_1.children[0], "splitButtonSplitter", true)[0];
                !IsNull($v_3) && Sys.UI.DomElement.addCssClass($v_3, "splitButtonSplitter-hidden");
                Sys.UI.DomElement.addCssClass($v_1.children[1], "ms-crm-commandbar-split-hover")
            }
    },
    onUnHoverHandler: function($p0) {
        var $v_0 = $p0.attributes.getNamedItem("role"), $v_1 = Mscrm.Utilities.getParentElementByTagName($p0, "SPAN");
        if (!IsNull($v_1))
            if ($v_0 && $v_0.value === "flyout") {
                Sys.UI.DomElement.removeCssClass($v_1.children[0], "ms-crm-commandbar-split-hover");
                var $v_2 = Mscrm.Utilities
                    .getChildElementsByClassName($v_1.children[0], "splitButtonSplitter", true)[0];
                !IsNull($v_2) && Sys.UI.DomElement.removeCssClass($v_2, "splitButtonSplitter-hidden");
                Sys.UI.DomElement.removeCssClass($v_1.children[1], "ms-crm-commandbar-hoveredOver")
            } else {
                Sys.UI.DomElement.removeCssClass($v_1.children[0], "ms-crm-commandbar-hoveredOver");
                var $v_3 = Mscrm.Utilities
                    .getChildElementsByClassName($v_1.children[0], "splitButtonSplitter", true)[0];
                !IsNull($v_3) && Sys.UI.DomElement.removeCssClass($v_3, "splitButtonSplitter-hidden");
                Sys.UI.DomElement.removeCssClass($v_1.children[1], "ms-crm-commandbar-split-hover")
            }
    }
};
Mscrm.CustomTabControl = function($p0) { Mscrm.CustomTabControl.initializeBase(this, [$p0]) };
Mscrm.CustomTabControl.prototype = {
    click: function($p0, $p1) { this.showMenu() },
    getTemplateName: function() { return "CommandBarCustomTabTemplate" }
};
Mscrm.CheckBoxControl = function($p0, $p1, $p2) { Mscrm.CheckBoxControl.initializeBase(this, [$p0, $p1, $p2]) };
Mscrm.CheckBoxControl.prototype = {
    click: function($p0, $p1) {
        this.isActive = !this.isActive;
        this.isActive = this.evaluateState(this.isActive);
        this.setButtonState($p0, this.isActive);
        this.$FS_2($p0, this.isActive)
    },
    $FS_2: function($p0, $p1) {
        if (!IsNull(this.ribbonData)) {
            var $v_0 = {};
            $v_0["On"] = $p1;
            this.executeCommand($p0, $v_0)
        }
    },
    setButtonState: function($p0, $p1) {
        var $v_0 = this.getElement($p0), $v_1 = $v_0.getElementsByTagName("input")[0];
        !IsNull($v_1) && this.$JK_2($v_1, $p1)
    },
    $JK_2: function($p0, $p1) {
        $p0.checked = $p1;
        this.ribbonData.get_toggleButtonState()[this.command] = $p1
    },
    getTemplateName: function() { return "CommandBarCheckBoxTemplate" }
};
Mscrm.SpinnerCommandProperties = function() {};
Mscrm.SpinnerControl = function($p0, $p1, $p2) {
    Mscrm.SpinnerControl.initializeBase(this, [$p2]);
    this.command = $p1;
    if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
        this.$7W_1 = $p0.attrs;
        this.$14_1 = this.$C9_1($p0)
    }
    this.$EQ_1()
};
Mscrm.SpinnerControl.$Fr = function($p0, $p1, $p2, $p3, $p4, $p5) { return new CUI.Unit($p0, $p1, $p2, $p3, $p4, $p5) };
Mscrm.SpinnerControl.$Cl = function($p0, $p1) {
    var $v_0 = Math.pow(10, $p1.$6h_0);
    return Math.round($p0 * $v_0) / $v_0
};
Mscrm.SpinnerControl.prototype = {
    $N_1: null,
    $14_1: null,
    $s_1: 0,
    $66_1: false,
    get_isVisible: function() { return Mscrm.CommandBarControl.prototype.get_isVisible.call(this) },
    set_isVisible: function($p0) {
        !CUI.ScriptUtility.isNullOrUndefined($p0) && $p0 && this.$ES_1(this.$s_1, this.$N_1.get_$3U_0());
        Mscrm.CommandBarControl.prototype.set_isVisible.call(this, $p0);
        return $p0
    },
    $5h_1: null,
    get_inputElement: function() {
        var $v_0 = $get(this.$7W_1["Id"]);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$5h_1 = $v_0.getElementsByTagName("input")[0];
        else this.$5h_1 = this.get_element().getElementsByTagName("input")[0];
        return this.$5h_1
    },
    $7W_1: null,
    $2m_1: null,
    getTemplateName: function() { return "CommandBarSpinnerTemplate" },
    $EQ_1: function() {
        var $v_0 = parseFloat(this.$7W_1["DefaultValue"]);
        this.$N_1 = this.$Ai_1(this.$7W_1["DefaultUnit"]);
        if (CUI.ScriptUtility.isNullOrUndefined(this
            .$N_1)) throw Error.create("The default unit is not in the list of valid units");
        $v_0 !== Number.NaN && this.$Eb_1($v_0);
        this.$2m_1 = {};
        this.$2m_1["Value"] = this.$s_1;
        this.$2m_1["Unit"] = this.$N_1.$3t_0
    },
    $C9_1: function($p0) {
        for (var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_1 = $v_0.length, $v_2 = new Array($v_1), $v_3 = 0;
            $v_3 < $v_1;
            $v_3++) {
            var $v_4 = $v_0[$v_3], $v_5 = CUI.DataNodeWrapper.getNodeAttributes($v_4);
            $v_2[$v_3] = Mscrm.SpinnerControl.$Fr($v_5["Name"],
                this.$C8_1(CUI.DataNodeWrapper.getNodeChildren($v_4)),
                this.$6E_1($v_5["MinimumValue"]),
                this.$6E_1($v_5["MaximumValue"]),
                this.$CI_1($v_5["DecimalDigits"]),
                this.$6E_1($v_5["Interval"]))
        }
        return $v_2
    },
    $C8_1: function($p0) {
        for (var $v_0 = $p0.length, $v_1 = new Array($v_0), $v_2 = 0; $v_2 < $v_0; $v_2++) {
            var $v_3 = $p0[$v_2], $v_4 = CUI.DataNodeWrapper.getNodeAttributes($v_3);
            $v_1[$v_2] = $v_4["Value"]
        }
        return $v_1
    },
    $6E_1: function($p0) {
        if (typeof $p0 === "string") return parseFloat($p0);
        return $p0
    },
    $CI_1: function($p0) {
        if (typeof $p0 === "string") return parseInt($p0);
        return $p0
    },
    click: function($p0, $p1) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p1) && !CUI.ScriptUtility.isNullOrUndefined($p1.target)) {
            var $v_0 = $p1.target;
            if ($p1.target.tagName.toUpperCase() === "IMG") $v_0 = Mscrm.Utilities.getParentElementByTagName($v_0, "A");
            if (!IsNull($v_0))
                if ($v_0.getAttribute("role") === "UpArrow") this.$EY_1($p0);
                else if ($v_0.getAttribute("role") === "DownArrow") this.$EX_1($p0);
                else this.$Bk_1($p0)
        }
    },
    onKeyUpDown: function($p0, $p1) {
        if ($p1 === 38) {
            var $v_0 = Mscrm.Utilities.getChildElementsByClassName($p0, "ms-crm-CommandBar-Spinner-Up", true);
            $v_0[0].focus();
            this.$EY_1($p0)
        } else if ($p1 === 40) {
            var $v_1 = Mscrm.Utilities.getChildElementsByClassName($p0, "ms-crm-CommandBar-Spinner-Down", true);
            $v_1[0].focus();
            this.$EX_1($p0)
        }
    },
    $EY_1: function($p0) {
        this.$B9_1(1);
        this.$2m_1["ChangeType"] = "increase";
        this.$2m_1["ChangedByMouse"] = true;
        this.$Bk_1($p0)
    },
    $EX_1: function($p0) {
        this.$AZ_1(1);
        this.$2m_1["ChangeType"] = "decrease";
        this.$2m_1["ChangedByMouse"] = true;
        this.$Bk_1($p0)
    },
    $Bk_1: function($p0) {
        if (!IsNull(this.ribbonData) && !CUI.ScriptUtility.isNullOrUndefined($p0)) {
            var $v_0 = {}, $$dict_3 = this.$2m_1;
            for (var $$key_4 in $$dict_3) {
                var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                $v_0[$v_1.key] = $v_1.value
            }
            this.executeCommand($p0, $v_0)
        }
    },
    $B9_1: function($p0) {
        if (!Mscrm.CommandBarControl.prototype.get_isVisible.call(this)) return;
        if (!this.$Ei_1(this.$N_1, this.$s_1 + $p0 * this.$N_1.$64_0))
            if (this.$s_1 < this.$N_1.$3M_0) this.$Ei_1(this.$N_1, this.$N_1.$3M_0);
            else {
                this.$4H_1();
                return
            }
    },
    $AZ_1: function($p0) {
        if (!Mscrm.CommandBarControl.prototype.get_isVisible.call(this)) return;
        if (!this.$Ei_1(this.$N_1, this.$s_1 - $p0 * this.$N_1.$64_0))
            if (this.$s_1 > this.$N_1.$3N_0) this.$Ei_1(this.$N_1, this.$N_1.$3N_0);
            else {
                this.$4H_1();
                return
            }
    },
    $Eb_1: function($p0) {
        this.$s_1 = $p0;
        this.get_isVisible() &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_inputElement()) &&
            this.$ES_1($p0, this.$N_1.get_$3U_0())
    },
    get_value: function() { return this.$s_1 },
    set_value: function($p0) {
        if (!this.$Ei_1(this.$N_1, $p0)) throw Error.create("Invalid value");
        return $p0
    },
    get_unitString: function() { return this.$N_1.get_$3U_0() },
    set_unitString: function($p0) {
        if (!this.$Bm_1(this.$s_1.toString() + $p0)) {
            this.$4H_1();
            throw Error.create("Invalid unit")
        }
        return $p0
    },
    $5k_1: false,
    $5j_1: false,
    get_$6L_1: function() {
        if (!this.$5k_1) {
            var $v_0 = 1.1, $v_1 = $v_0.toLocaleString().substring(1, 2);
            this.$5j_1 = $v_1 === ",";
            this.$5k_1 = true
        }
        return this.$5j_1
    },
    $Bm_1: function($p0) {
        var $v_0 = "(\\-)?[0-9]*[\\.,]?[0-9]+", $v_1 = new RegExp($v_0);
        $p0 = $p0.trim();
        if ($p0.search($v_1)) return false;
        var $v_2 = $p0.replace($v_1, ""), $v_3 = $p0.replace($v_2, ""), $v_4 = $v_2.trim(), $v_5, $v_6, $v_7 = false;
        if (this.get_$6L_1()) {
            $v_3 = $v_3.replace(".", "");
            if ($v_3.indexOf(",") > -1) {
                $v_7 = true;
                $v_3 = $v_3.replace(",", ".")
            }
        } else $v_3 = $v_3.replace(",", "");
        $v_6 = parseFloat($v_3);
        if (!CUI.ScriptUtility.isNullOrEmptyString($v_4))
            if (this.$N_1.$6C_0($v_4)) $v_5 = this.$N_1;
            else $v_5 = this.$Ci_1($v_4);
        else $v_5 = this.$N_1;
        return this.$Ei_1($v_5, $v_6, $v_7)
    },
    $Ei_1: function($p0, $p1, $p2) {
        if (arguments.length < 3) $p2 = this.get_$6L_1();
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) return false;
        var $v_0 = $p0.$Ej_0($p1);
        if ($v_0 === -1) return false;
        else if ($v_0 === 1) $p1 = Mscrm.SpinnerControl.$Cl($p1, $p0);
        else if ($v_0 === 2) $p1 = $p0.$3N_0;
        else if ($v_0 === 3) $p1 = $p0.$3M_0;
        !CUI.ScriptUtility.isNullOrUndefined(this.get_inputElement()) && this.$ES_1($p1, $p0.get_$3U_0(), $p2);
        this.$N_1 = $p0;
        this.$s_1 = $p1;
        this.$66_1 = $p2;
        this.$2m_1["Unit"] = $p0.$3t_0;
        this.$2m_1["Value"] = $p1;
        return true
    },
    $4H_1: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.get_inputElement()) &&
            this.$ES_1(this.$s_1, this.$N_1.get_$3U_0(), this.$66_1)
    },
    $ES_1: function($p0, $p1, $p2) {
        if (arguments.length < 3) $p2 = this.get_$6L_1();
        var $v_0 = $p0.toString();
        if ($p2) $v_0 = $v_0.replace(".", ",");
        var $v_1 = $v_0 + " " + $p1;
        if (this.get_isVisible() && !CUI.ScriptUtility.isNullOrUndefined(this.get_inputElement())) {
            this.$5h_1.value = $v_1;
            this.$5h_1.setAttribute("value", $v_1)
        }
        Mscrm.CommandBarControl.prototype.setAttribute.call(this, "DefaultValue", $v_1);
        return $v_1
    },
    $Ci_1: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$14_1.length; $v_0++) if (this.$14_1[$v_0].$6C_0($p0)) return this.$14_1[$v_0];
        return null
    },
    $Ai_1: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$14_1.length; $v_0++) {
            if (this.$14_1[$v_0].$3t_0 === $p0) return this.$14_1[$v_0];
            if (this.$14_1[$v_0].$6C_0($p0)) return this.$14_1[$v_0]
        }
        return null
    }
};
Mscrm.CommandHandler = function($p0, $p1, $p2) {
    this.$$d_$Hz_1 = Function.createDelegate(this, this.$Hz_1);
    this.$$d_$Ig_1 = Function.createDelegate(this, this.$Ig_1);
    Mscrm.CommandHandler.initializeBase(this);
    this.$6_1 = $p0;
    this.$H_1 = $p1;
    this.$17_1 = $p2;
    $addHandler(window, "unload", this.$$d_$Ig_1)
};
Mscrm.CommandHandler.$DC = function($p0, $p1, $p2) {
    if (isNullOrEmptyString($p1)) $p1 = null;
    for (var $v_0 = [$p2[$p1], $p2[null]], $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
        var $v_2 = $v_0[$v_1];
        if (!IsNull($v_2)) {
            var $v_3 = $v_2[$p0];
            if (!IsNull($v_3)) return $v_3
        }
    }
    return null
};
Mscrm.CommandHandler.isOnHierarchyPage = function() {
    var $v_0 = Mscrm.Utilities.getContentUrl(null);
    if (!$v_0.isEmpty() && $v_0.get_path() && $v_0.get_path().endsWith("/_root/hierarchy.aspx")) return true;
    return false
};
Mscrm.CommandHandler.$AX = function($p0) {
    if (!$p0) return null;
    else {
        for (var $v_0 = new Sys.StringBuilder, $v_1 = 0; $v_1 < $p0.length; $v_1++) {
            $v_1 > 0 && $v_0.append(",");
            $v_0.append($p0[$v_1].toString())
        }
        return $v_0.toString()
    }
};
Mscrm.CommandHandler.prototype = {
    $6_1: null,
    $H_1: null,
    $17_1: null,
    $6t_1: true,
    $2x_1: false,
    get_enableState: function() { return this.$6t_1 },
    set_enableState: function($p0) {
        this.$6t_1 = $p0;
        return $p0
    },
    getGlobalCommands: function() { return this.$17_1 },
    getFocusedCommands: function() { return this.$17_1 },
    $Ig_1: function($p0) {
        this.$2x_1 = true;
        $removeHandler(window, "unload", this.$$d_$Ig_1)
    },
    handleCommand: function($p0, $p1, $p2) {
        var $v_0 = this.parseCommandFromRibbon($p0),
            $v_1 = this.$Ag_1($v_0.command, $v_0.entityLogicalName, $p1, $p2),
            $v_2 = $p1;
        if (!IsNull($v_2) && !isNullOrEmptyString($v_2.PopulationXML) && !$v_2.SuppressCommandIncludes) {
            var $v_3 = null;
            if ($v_0.entityContext === "Form") {
                var $v_4 = $find("crmFormSelector");
                if ($v_4) $v_3 = $v_4.get_currentFormId()
            }
            $v_2.PopulationXML = this.$Is_1($v_2.PopulationXML, $v_0.entityLogicalName, $v_3)
        }
        return $v_1
    },
    canHandleCommand: function($p0) {
        if (!this.$6t_1) return false;
        var $v_0 = this.parseCommandFromRibbon($p0), $v_1 = this.$FR_1($v_0.command, $v_0.entityLogicalName);
        if ($v_1 && !IsNull(this.$H_1.get_$FZ_2()[$p0]))
            $v_1 = Mscrm.RibbonNavigationModel.shouldContextGroupBeShown($v_0, this.$H_1);
        else if ($v_1 && !IsNull(this.$H_1.get_$5A_2()[$p0])
        ) $v_1 = Mscrm.RibbonNavigationModel.shouldTabBeShown($p0, $v_0, this.$H_1);
        if (!IsNull(this.$H_1.get_$5A_2()[$p0])) this.$H_1.get_$5A_2()[$p0] = $v_1;
        return $v_1
    },
    parseCommandFromRibbon: function($p0) {
        var $v_0 = $p0.indexOf("|"),
            $v_1 = $p0.indexOf("|", $v_0 + 1),
            $v_2 = $p0.indexOf("|", $v_1 + 1),
            $v_3 = new Mscrm.CommandInformation;
        $v_3.entityLogicalName = $p0.substr(0, $v_0);
        var $v_4 = $p0.substr($v_0 + 1, $v_1 - $v_0 - 1);
        $v_3.entityContext = $p0.substr($v_1 + 1, $v_2 - $v_1 - 1);
        $v_3.command = $p0.substr($v_2 + 1);
        switch ($v_4) {
        case "ManyToMany":
            $v_3.relationshipType = 2;
            break;
        case "OneToMany":
            $v_3.relationshipType = 1;
            break;
        case "NoRelationship":
            $v_3.relationshipType = 0;
            break
        }
        return $v_3
    },
    getCommandDefinition: function($p0, $p1) {
        if (IsNull(Mscrm.RibbonCommands) || IsNull(Mscrm.RibbonCommands.commands)) return null;
        return Mscrm.CommandHandler.$DC($p0, $p1, Mscrm.RibbonCommands.commands)
    },
    getEnableRuleDefinition: function($p0, $p1) {
        if (IsNull(Mscrm.RibbonCommands) || IsNull(Mscrm.RibbonCommands.enableRules)) return null;
        return Mscrm.CommandHandler.$DC($p0, $p1, Mscrm.RibbonCommands.enableRules)
    },
    $Is_1: function($p0, $p1, $p2) {
        var $v_0 = new RemoteCommand("Ribbon", "ProcessDynamicMenuXml");
        $v_0.SetParameter("dynamicMenuXml", $p0);
        $v_0.SetParameter("entityLogicalName", $p1);
        $v_0.SetParameter("hierarchyLocation", $p2);
        var $v_1 = $v_0.Execute();
        if ($v_1.Success) {
            var $v_2 = $v_1.ReturnValue,
                $v_3 = Sys.Serialization.JavaScriptSerializer.deserialize($v_2.CommandDefinitions),
                $v_4 = Sys.Serialization.JavaScriptSerializer.deserialize($v_2.RuleDefinitions),
                $v_5 = new Mscrm.DynamicMenuCommandHandler($v_2.CommandPrefix, this.$H_1, $v_3, $v_4, $p1);
            if (this.$H_1 && this.$H_1.$2Q_2) this.$H_1.$2Q_2.$Bx_3($v_5);
            else
                Xrm.Page.context.client.getClient() === "Outlook" &&
                    CUI.Page.PageManager.get_instance().addPageComponent($v_5);
            return $v_2 ? $v_2.MenuXml : $p0
        } else return $p0
    },
    $FR_1: function($p0, $p1) {
        if (IsNull(Mscrm.RibbonCommands) || IsNull(Mscrm.RibbonCommands.enableRules)) return true;
        var $v_0 = this.getCommandDefinition($p0, $p1);
        if (IsNull($v_0)) return true;
        var $v_1 = $v_0.EnableRules;
        if (IsNull($v_1)) return true;
        var $v_2 = true;
        if (Mscrm.CommandHandler
            .isOnHierarchyPage() &&
            !(Array.indexOf($v_1, "Mscrm.IsValidForHierarchyView") >= 0)) return false;
        for (var $v_3 = 0; $v_2 && $v_3 < $v_1.length; $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (IsNull($v_4) || !$v_4.length) continue;
            if (!Mscrm.Utilities.isTurboForm() && Mscrm.Utilities.isRefreshForm()) {
                var $v_5 = Xrm.Page.data;
                if (!IsNull($v_5)) {
                    var $v_6 = $v_5.getEntity();
                    if (!IsNull($v_6)) {
                        var $v_7 = parseInt($v_6.getFormState());
                        if ($p0 === "Mscrm.AddNewRecordFromSubGridStandard" &&
                            $v_4 === "Mscrm.EntityFormIsEnabled" &&
                            $v_7 !== 4) continue
                    }
                }
            }
            $v_2 = $v_2 && this.$GH_1($v_4, $p1)
        }
        return $v_2
    },
    getId: function() { return this.$6_1 },
    get_commandList: function() { return this.$17_1 },
    set_commandList: function($p0) {
        this.$17_1 = $p0;
        return $p0
    },
    $Ag_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.getCommandDefinition($p0, $p1);
        if (IsNull($v_0) || IsNull($v_0.Actions)) return false;
        for (var $v_1 = 0; $v_1 < $v_0.Actions.length; $v_1++) {
            var $v_2 = $v_0.Actions[$v_1];
            switch ($v_2.ActionType) {
            case 2:
                this.$GX_1($v_2.Attributes);
                break;
            case 3:
                var $v_3 = $v_2.Attributes;
                this.$Ce_1($v_3.FunctionName, $v_3.Library, $v_2.Parameters, $p2);
                break;
            case 1:
                this.$GY_1($v_2.Attributes, $v_2.Parameters);
                break
            }
        }
        return true
    },
    $GX_1: function($p0) {
        var $v_0 = $p0.JavaScriptAction;
        !IsNull($v_0) && typeof $v_0 === "function" && $v_0()
    },
    $Ce_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = this.$Fa_1($p2, $p3),
            $v_1 = Mscrm.Utilities.executeJavascriptFunction($p0, $p1, $v_0, this.$$d_$Hz_1);
        return $v_1
    },
    $Hz_1: function($p0) { Xrm.Internal.trace.logT(Mscrm.CommandHandler, $p0) },
    $GY_1: function($p0, $p1) {
        var $v_0 = Mscrm.CrmUri.create($p0.Address);
        $v_0.checkParamsNoEqual = true;
        if ($p0.PassParameters) $v_0 = addIsvParameters($v_0);
        for (var $v_1 = 0; $v_1 < $p1.length; $v_1++) {
            var $v_2 = $p1[$v_1].ParameterName, $v_3 = this.$Cc_1($p1[$v_1], 1);
            if (!IsNull($v_2) && $v_2.length > 0) $v_0.get_query()[$v_2] = $v_3
        }
        openIsvWin($v_0, false, $p0.WinMode, $p0.WinParameters, null)
    },
    $Cc_1: function($p0, $p1) {
        switch ($p0.ParameterType) {
        case 18:
        case 19:
        case 20:
        case 21:
            return $p0.Value;
        case 14:
            return window.ORG_UNIQUE_NAME;
        case 15:
            return window.ORG_LANGUAGE_CODE;
        case 16:
            return window.USER_LANGUAGE_CODE;
        case 1:
            return this.$H_1.get_$E2_2();
        case 2:
            return this.$H_1.get_$E3_2();
        case 3:
            if ($p1 === 1) return Mscrm.CommandHandler.$AX(this.$H_1.get_$BL_2());
            else return Array.clone(this.$H_1.get_$BL_2());
        case 4:
            var $v_0 = this.$H_1.get_$BL_2();
            return !IsNull($v_0) && !IsNull($v_0.length) && $v_0.length > 0 ? $v_0[0] : null;
        case 7:
            return this.$H_1.get_$EF_2();
        case 8:
            return this.$H_1.get_$EG_2();
        case 11:
        case 22:
            return this.$H_1.get_$EH_2();
        case 25:
            var $v_1 = this.$H_1._currentSelectedControl;
            return $v_1 ? $v_1.get_recordCount() : 0;
        case 28:
            var $v_2 = this.$H_1._currentSelectedControl;
            return $v_2 ? $v_2.get_recordCount() - $v_2.get_selectedRecordCount() : 0;
        case 9:
        case 23:
        case 29:
        case 26:
            var $v_3 = this.$H_1._currentSelectedControl, $v_4 = null;
            if ($v_3)
                if ($p0.ParameterType === 9 || $p0.ParameterType === 23) $v_4 = this.$H_1.get_$EI_2();
                else if ($p0.ParameterType === 29) $v_4 = this.$H_1._currentSelectedControl.get_unselectedIds();
                else $v_4 = this.$H_1._currentSelectedControl.get_allRecordIds();
            else $v_4 = [];
            if ($p1 === 1) return Mscrm.CommandHandler.$AX($v_4);
            else return Array.clone($v_4);
        case 24:
        case 30:
        case 27:
            var $v_5 = this.$H_1._currentSelectedControl, $v_6 = null;
            if ($v_5)
                if ($p0.ParameterType === 24) $v_6 = this.$H_1._currentSelectedControl.get_selectedRecords();
                else if ($p0.ParameterType === 30) $v_6 = this.$H_1._currentSelectedControl.get_unselectedRecords();
                else $v_6 = this.$H_1._currentSelectedControl.get_allRecords();
            else $v_6 = [];
            if ($p1 === 1) {
                for (var $v_7 = new Array($v_6
                             .length),
                    $v_8 = 0;
                    $v_8 < $v_6.length;
                    $v_8++) $v_7[$v_8] = $v_6[$v_8].Id;
                return Mscrm.CommandHandler.$AX($v_7)
            } else return Array.clone($v_6);
        case 10:
            var $v_9 = this.$H_1.get_$EI_2();
            return !IsNull($v_9) && !IsNull($v_9.length) && $v_9.length > 0 ? $v_9[0] : null;
        case 5:
        case 6:
        case 12:
        case 13:
            var $v_A = $p0.ParameterType === 5 || $p0.ParameterType === 6,
                $v_B = true,
                $v_C = $v_A ? this.$H_1.$2P_2 : this.$H_1._currentSelectedControl,
                $v_D = null,
                $v_E = null;
            if ($v_C) $v_E = $v_C.get_id();
            else {
                $v_B = false;
                $v_D = $v_A ? null : this.$H_1.$6f_2;
                if ($v_D) $v_E = $v_D.id;
                else return null
            }
            if ($p0.ParameterType === 13 || $p1 === 1) return $v_E;
            else if ($v_B) return $v_C;
            else return $v_D;
        case 0:
        default:
            return null
        }
    },
    $Fa_1: function($p0, $p1) {
        for (var $v_0 = [], $v_1 = 0; $v_1 < $p0.length; $v_1++)
            if ($p0[$v_1].ParameterType === 17) $v_0[$v_1] = $p1;
            else $v_0[$v_1] = this.$Cc_1($p0[$v_1], 3);
        return $v_0
    },
    $GH_1: function($p0, $p1) {
        var $v_0 = this.getEnableRuleDefinition($p0, $p1);
        if (IsNull($v_0) || IsNull($v_0.Rules) || !$v_0.Rules.length) return true;
        for (var $v_1 = true, $v_2 = 0;
            $v_1 && $v_2 < $v_0.Rules.length;
            $v_2++
        ) $v_1 = $v_1 && this.$Cd_1($v_0.Rules[$v_2]);
        return $v_1
    },
    $Cd_1: function($p0) {
        if (IsNull($p0)) return false;
        var $v_0 = $p0.DefaultValue;
        switch ($p0.RuleType) {
        case 8:
            $v_0 = this.$GE_1($p0);
            break;
        case 26:
            $v_0 = this.$GF_1($p0);
            break;
        case 31:
            $v_0 = this.$GG_1($p0);
            break;
        case 1:
            $v_0 = this.$GJ_1($p0);
            break;
        case 7:
            $v_0 = this.$GK_1($p0, $p0.DefaultValue);
            break;
        case 4:
            $v_0 = this.$GL_1($p0, $p0.DefaultValue);
            break;
        case 16:
            $v_0 = this.$GM_1($p0);
            break;
        case 2:
            $v_0 = this.$GN_1($p0);
            break;
        case 10:
            $v_0 = this.$GO_1($p0);
            break;
        case 19:
            $v_0 = this.$GP_1($p0, $p0.DefaultValue);
            break;
        case 17:
            $v_0 = this.$GQ_1($p0);
            break;
        case 12:
            $v_0 = this.$GR_1($p0);
            break;
        case 6:
            $v_0 = this.$GI_1($p0, $p0.DefaultValue);
            break;
        case 5:
            $v_0 = this.$GT_1($p0, $p0.DefaultValue);
            break;
        case 11:
            $v_0 = this.$GU_1($p0);
            break;
        case 3:
            $v_0 = this.$GV_1($p0, $p0.DefaultValue);
            break
        }
        if (IsNull($v_0)) $v_0 = IsNull($p0.DefaultValue) ? true : $p0.DefaultValue;
        if (!IsNull($p0.InvertResult) && $p0.InvertResult) $v_0 = !$v_0;
        return $v_0
    },
    $GF_1: function($p0) { return this.$H_1.get_$1u_2() === 1 ? $p0.ClientType === 2 : $p0.ClientType === 3 },
    $GG_1: function($p0) {
        if (Mscrm.SessionInfo.isOutlookClient()) return $p0.Type === 4;
        else return $p0.Type === 3
    },
    $GE_1: function($p0) {
        if (Mscrm.SessionInfo.isOutlookClient()) return $p0.ClientType === 2;
        else return $p0.ClientType === 1
    },
    $GJ_1: function($p0) {
        var $v_0 = null, $v_1 = null, $v_2 = -1, $v_3 = $p0.AppliesTo;
        if (IsNull($v_3) || !$v_3) $v_3 = 1;
        if ($v_3 === 1) {
            $v_0 = this.$H_1.get_$E3_2();
            $v_2 = this.$H_1.get_$E2_2();
            $v_1 = this.$H_1.get_$Iq_2()
        } else if ($v_3 === 2) {
            $v_0 = this.$H_1.get_$EG_2();
            $v_2 = this.$H_1.get_$EF_2();
            $v_1 = this.$H_1.get_$6S_2()
        }
        var $v_4 = IsNull($p0.EntityLogicalName) ||
            !$p0.EntityLogicalName.length ||
            ($p0.EntityLogicalName === "listmember"
                ? $v_0 === "account" || $v_0 === "contact" || $v_0 === "lead"
                : $v_0 === $p0.EntityLogicalName);
        if (!$v_4)
            if ($v_2 !== -1 &&
                $p0.EntityLogicalName === "activitypointer" &&
                Mscrm.EntityPropUtil.isActivityTypeCode($v_2) &&
                $v_1 === "HomePageGrid") $v_4 = true;
        var $v_5 = IsNull($p0.EntityContextName) || !$p0.EntityContextName.length || $v_1 === $p0.EntityContextName;
        return $v_4 && $v_5
    },
    $GK_1: function($p0, $p1) {
        var $v_0 = this.$H_1.$2P_2;
        if ($v_0 && isInstanceOfTypeAcrossFrames($v_0, Mscrm.FormProxyForRibbon)) $v_0 = $v_0.get_crmFormControl();
        var $v_1 = Mscrm.CrmUri.create(window.location.href),
            $v_2,
            $v_3 = !IsNull($v_1.get_query()["rof"]) ? Boolean.parse($v_1.get_query()["rof"].toString()) : false;
        if ($v_3 || Mscrm.InternalUtilities.Utilities.isRefreshForm()) $v_2 = Mscrm.FormControlLite;
        else $v_2 = Mscrm.FormControl;
        if (!$v_0 || !isInstanceOfTypeAcrossFrames($v_0, $v_2)) return $p1;
        var $v_4 = Xrm.Internal.getEntityCode(Xrm.Page.data.entity.getEntityName()) === 4202
            ? $v_0.get_formType()
            : Xrm.Page.ui.getFormType();
        return $v_4 === $p0.FormState
    },
    $GL_1: function($p0, $p1) {
        var $v_0 = this.$Ce_1($p0.FunctionName, $p0.Library, $p0.Parameters, null);
        if (!IsNull($v_0) && typeof $v_0 === "boolean") return $v_0;
        else return $p1
    },
    $GM_1: function($p0) {
        if (Mscrm.SessionInfo.isOutlookClient())
            if (Mscrm.SessionInfo.isOnline()) return $p0.OfflineAccessState === 1;
            else return $p0.OfflineAccessState === 2;
        else return false
    },
    $GN_1: function($p0) {
        for (var $v_0 = 0; $v_0 < $p0.OrGroups.length; $v_0++) {
            for (var $v_1 = $p0
                         .OrGroups[$v_0],
                $v_2 = true,
                $v_3 = 0;
                $v_2 && $v_3 < $v_1.Rules.length;
                $v_3++) $v_2 = $v_2 && this.$Cd_1($v_1.Rules[$v_3]);
            if ($v_2) return true
        }
        return false
    },
    $GO_1: function($p0) {
        if (Mscrm.SessionInfo.isOutlookWorkstationClient()) return $p0.OutlookClientType === 1;
        else if (Mscrm.SessionInfo.isOutlookLaptopClient()) return $p0.OutlookClientType === 2;
        else return false
    },
    $GP_1: function($p0, $p1) {
        if (Mscrm.SessionInfo.isOutlookClient()) {
            var $v_0 = getOutlookHostedWindow().isItemTrackedInCrm();
            return $v_0 === $p0.TrackedInCrm
        } else return $p1
    },
    $GQ_1: function($p0) {
        if (Mscrm.SessionInfo.isOutlookClient()) {
            var $v_0 = Mscrm.SessionInfo.getOutlookMajorVersion();
            if (!$v_0)
                if ($p0.Version === 1 || $p0.Version === 2) return true;
                else return false;
            else if ($v_0 <= 11) return $p0.Version === 1;
            else if ($v_0 === 12) return $p0.Version === 2;
            else if ($v_0 === 14) return $p0.Version === 3
        }
        return false
    },
    $GR_1: function($p0) {
        var $v_0 = Mscrm.Utilities.getContentUrl(this),
            $v_1 = $v_0.get_path(),
            $v_2 = Mscrm.CrmUri.create($p0.Address).get_path();
        if (!$v_1.startsWith("/")) $v_1 = "/" + $v_1;
        if (!$v_2.startsWith("/")) $v_2 = "/" + $v_2;
        $v_1 = $v_1.toUpperCase();
        $v_2 = $v_2.toUpperCase();
        return $v_1 === $v_2
    },
    $GI_1: function($p0, $p1) {
        var $v_0 = this.$H_1.get_$BK_2();
        if (!$v_0) return $p1;
        var $v_1 = $p0.PrivilegeType;
        return $v_0.verifyRecordPermission($v_1)
    },
    $GT_1: function($p0, $p1) {
        var $v_0;
        if ($p0.AppliesTo === 1) $v_0 = this.$H_1.get_$Ir_2();
        else if ($p0.AppliesTo === 2) $v_0 = this.$H_1.get_$EH_2();
        else return $p1;
        return $v_0 >= $p0.Minimum && ($v_0 <= $p0.Maximum || $p0.Maximum === -1)
    },
    $GU_1: function($p0) {
        var $v_0 = 0;
        if (window.IS_LIVE) $v_0 |= 2;
        if (window.IS_ONPREMISE) $v_0 |= 1;
        if (window.IS_SPLA) $v_0 |= 4;
        var $v_1 = $v_0 & $p0.SkuTypes;
        return !!$v_1
    },
    $GV_1: function($p0, $p1) {
        var $v_0 = this.$H_1.get_$BK_2();
        if (!$v_0) return $p1;
        var $v_1 = null;
        if (this.$H_1.get_isClientApiInitialized()) $v_1 = $v_0.getUnformattedValue($p0.Field);
        else if (!IsNull(window
                .RecordData) &&
            !IsNull(window.RecordData[$p0.Field])) $v_1 = window.RecordData[$p0.Field].value;
        if (IsNull($v_1)) return $p1;
        var $v_2 = $v_1.toString() === $p0.Value;
        if (!$v_2) {
            if (!this.$Ho_1($p0.Field)) return $v_2;
            $v_2 = this.$GS_1($p0, $p1)
        }
        return $v_2
    },
    $Ho_1: function($p0) {
        if (!Xrm.Page.data.entity.attributes.getLength()) return false;
        else {
            var $v_0 = Xrm.Page.getAttribute($p0), $v_1 = $v_0.getAttributeType();
            if ($v_1 === "optionset") return true;
            else return false
        }
    },
    $GS_1: function($p0, $p1) {
        var $v_0 = this.$H_1.get_$BK_2();
        if (!$v_0) return $p1;
        var $v_1 = null;
        if (this.$H_1.get_isClientApiInitialized()) $v_1 = $v_0.getUnformattedRawValue($p0.Field);
        else if (!IsNull(window
                .RecordData) &&
            !IsNull(window.RecordData[$p0.Field])) $v_1 = window.RecordData[$p0.Field].raw;
        if (IsNull($v_1)) return $p1;
        return $v_1.toString() === $p0.Value
    }
};
Mscrm.CommandHandlerWrapper = function($p0) {
    Mscrm.CommandHandlerWrapper.initializeBase(this);
    this.$28_1 = $p0;
    this.$17_1 = $p0.getGlobalCommands();
    this.$6_1 = $p0.getId()
};
Mscrm.CommandHandlerWrapper.prototype = {
    $28_1: null,
    $17_1: null,
    $6_1: null,
    getGlobalCommands: function() { return this.$17_1 },
    getFocusedCommands: function() { return this.$17_1 },
    handleCommand: function($p0, $p1, $p2) {
        if (this.$28_1 && !this.$28_1.$2x_1) return this.$28_1.handleCommand($p0, $p1, $p2);
        return false
    },
    canHandleCommand: function($p0) {
        if (this.$28_1 && !this.$28_1.$2x_1) return this.$28_1.canHandleCommand($p0);
        return false
    },
    getId: function() { return this.$6_1 }
};
Mscrm.AlwaysEnabledCommandHandler = function($p0, $p1) {
    this.$1W_1 = [];
    Mscrm.AlwaysEnabledCommandHandler.initializeBase(this);
    this.$6_1 = $p0;
    this.$1W_1 = $p1
};
Mscrm.AlwaysEnabledCommandHandler.prototype = {
    $6_1: null,
    getGlobalCommands: function() { return this.$1W_1 },
    handleCommand: function($p0, $p1, $p2) { return true },
    canHandleCommand: function($p0) { return true },
    getId: function() { return this.$6_1 }
};
Mscrm.CrmDataSource = function($p0, $p1, $p2) {
    this.$$d_$FX_1 = Function.createDelegate(this, this.$FX_1);
    Mscrm.CrmDataSource.initializeBase(this, [null, null, null]);
    this.$8A_1 = $p1;
    this.$42_1 = $p2;
    this.$Ij_1($p0)
};
Mscrm.CrmDataSource.$FV = function($p0, $p1) {
    var $v_0 = $p0.sequence, $v_1 = $p1.sequence;
    if (IsNull($v_1)) return -1;
    else if (IsNull($v_0)) return 1;
    else return $v_0 - $v_1
};
Mscrm.CrmDataSource.prototype = {
    $2S_1: null,
    $8A_1: null,
    $42_1: null,
    dispose: function() {
        this.$2S_1 = null;
        this.$8A_1 = null;
        this.$42_1 = null;
        CUI.DataSource.prototype.dispose.call(this)
    },
    runQuery: function($p0) {
        var $v_0 = null;
        switch ($p0.queryType) {
        case 5:
            $v_0 = this.$HQ_1($p0);
            break;
        case 4:
            $v_0 = this.$HR_1($p0);
            break;
        case 2:
            $v_0 = this.$HJ_1($p0);
            break;
        default:
            break
        }
        var $v_1 = new CUI.DataQueryResult;
        $v_1.contextData = $p0.data;
        $v_1.id = $p0.id;
        if (!IsNull($v_0)) {
            $v_1.queryData = $v_0;
            $v_1.success = true;
            $p0.handler($v_1)
        } else $v_1.success = false
    },
    getInitialTabId: function($p0) {
        this.$2S_1.sort(this.$$d_$FX_1);
        for (var $v_0 = 0; $v_0 < this.$2S_1.length; $v_0++) if (this.$2S_1[$v_0] === $p0) return $p0;
        if (this.$2S_1.length > 0) return this.$2S_1[0];
        return ""
    },
    onDataReturned: function($p0) {},
    $HQ_1: function($p0) {
        var $v_0 = null;
        if ($p0.id === "Mscrm.Jewel") $v_0 = this.$8A_1;
        return $v_0
    },
    $HR_1: function($p0) {
        var $v_0 = $p0.id, $v_1 = this.$42_1[$v_0];
        if (!IsNull($v_1) && $v_1.TabExists) {
            var $v_2 = [], $v_3 = [];
            if ($v_1.IsContextual) {
                var $v_5 = [];
                Array.add($v_5, $v_1.TabLayout);
                this.$EO_1($v_1.ContextualGroupLayout, $v_5);
                Array.add($v_3, $v_1.ContextualGroupLayout)
            } else Array.add($v_2, $v_1.TabLayout);
            var $v_4 = $v_1.FullLayout;
            this.$ER_1($v_4, $v_2, $v_3);
            return $v_4
        }
        return null
    },
    $HJ_1: function($p0) {
        for (var $v_0 = $p0.id, $v_1 = [], $v_2 = [], $v_3 = {}, $v_4 = null, $v_6 = 0;
            $v_6 < this.$2S_1.length;
            $v_6++) {
            var $v_7 = this.$42_1[this.$2S_1[$v_6]];
            if (!IsNull($v_7) && $v_7.TabExists) {
                var $v_8 = null;
                if ($v_7.IsContextual) {
                    var $v_9 = $v_7.ContextualGroupId;
                    if (IsNull($v_3[$v_9])) {
                        var $v_A = new Mscrm.ContextualGroupInfo;
                        $v_A.id = $v_9;
                        $v_A.sequence = $v_7.ContextGroupSequence;
                        Array.add($v_2, $v_A);
                        $v_3[$v_9] = {};
                        $v_3[$v_9]["Layout"] = $v_7.ContextualGroupLayout;
                        $v_3[$v_9]["Tabs"] = []
                    }
                    $v_8 = $v_3[$v_9]["Tabs"]
                } else $v_8 = $v_1;
                if ($v_7.TabId === $v_0) {
                    Array.add($v_8, $v_7.TabLayout);
                    $v_4 = $v_7.FullLayout
                } else Array.add($v_8, $v_7.TabHeaderLayout)
            }
        }
        if (IsNull($v_4)) return null;
        $v_2.sort(Mscrm.CrmDataSource.$FV);
        for (var $v_5 = [], $v_B = 0; $v_B < $v_2.length; $v_B++) {
            var $v_C = $v_2[$v_B].id, $v_D = $v_3[$v_C], $v_E = $v_D["Layout"];
            this.$EO_1($v_E, $v_D["Tabs"]);
            Array.add($v_5, $v_E)
        }
        if (!$v_1.length && !$v_5.length) return null;
        this.$ER_1($v_4, $v_1, $v_5);
        return $v_4
    },
    $EO_1: function($p0, $p1) { $p0["children"] = $p1 },
    $ER_1: function($p0, $p1, $p2) {
        var $v_0 = 0, $v_1 = $p0["children"];
        if (!IsNull($v_1))
            for (var $v_2 = 0; $v_2 < $v_1.length && $v_0 < 2; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (!IsNull($v_3) && $v_3["name"] === "Ribbon")
                    for (var $v_4 = $v_3["children"], $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                        var $v_6 = $v_4[$v_5];
                        if (!IsNull($v_6)) {
                            var $v_7 = $v_6["name"];
                            if ($v_7 === "Tabs") {
                                $v_6["children"] = $p1;
                                $v_0++
                            } else if ($v_7 === "ContextualTabs") {
                                $v_6["children"] = $p2;
                                $v_0++
                            }
                        }
                    }
            }
    },
    $Ij_1: function($p0) {
        this.$2S_1 = new Array(0);
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0[$v_0], $v_2 = this.$42_1[$v_1];
            if (!IsNull($v_2) && $v_2.TabExists) this.$2S_1[this.$2S_1.length] = $v_1
        }
    },
    $FX_1: function($p0, $p1) {
        var $v_0 = this.$42_1[$p0], $v_1 = this.$42_1[$p1];
        if (IsNull($v_1) || !$v_1.TabExists) return -1;
        else if (IsNull($v_0) || !$v_0.TabExists) return 1;
        if (!$v_0.IsContextual && $v_1.IsContextual) return -1;
        else if ($v_0.IsContextual && !$v_1.IsContextual) return 1;
        var $v_2, $v_3;
        if (!$v_0.IsContextual && !$v_1.IsContextual || $v_0.ContextualGroupId === $v_1.ContextualGroupId) {
            $v_2 = $v_0.TabSequence;
            $v_3 = $v_1.TabSequence
        } else {
            $v_2 = $v_0.ContextGroupSequence;
            $v_3 = $v_1.ContextGroupSequence
        }
        if (IsNull($v_3)) return -1;
        else if (IsNull($v_2)) return 1;
        else return $v_2 - $v_3
    }
};
Mscrm.DynamicMenuCommandHandler = function($p0, $p1, $p2, $p3, $p4) {
    this.$1W_2 = {};
    this.$AC_2 = {};
    Mscrm.DynamicMenuCommandHandler.initializeBase(this, [$p0, $p1, null]);
    this.$9k_2 = $p4;
    for (var $v_0 = new Array($p2.length), $v_1 = 0; $v_1 < $p2.length; $v_1++) {
        $v_0[$v_1] = $p2[$v_1].Id;
        this.$1W_2[$p2[$v_1].Id] = $p2[$v_1]
    }
    for (var $v_2 = 0; $v_2 < $p3.length; $v_2++) this.$AC_2[$p3[$v_2].Id] = $p3[$v_2];
    this.$17_1 = $v_0
};
Mscrm.DynamicMenuCommandHandler.prototype = {
    $9k_2: null,
    getCommandDefinition: function($p0, $p1) {
        var $v_0 = this.$1W_2[$p0];
        return $v_0 ? $v_0 : Mscrm.CommandHandler.prototype.getCommandDefinition.call(this, $p0, $p1)
    },
    getEnableRuleDefinition: function($p0, $p1) {
        var $v_0 = this.$AC_2[$p0];
        return $v_0 ? $v_0 : Mscrm.CommandHandler.prototype.getEnableRuleDefinition.call(this, $p0, $p1)
    },
    parseCommandFromRibbon: function($p0) {
        var $v_0 = new Mscrm.CommandInformation;
        $v_0.command = $p0;
        $v_0.entityContext = "";
        $v_0.entityLogicalName = this.$9k_2;
        $v_0.relationshipType = 0;
        return $v_0
    }
};
Mscrm.RibbonData = function() { Mscrm.RibbonData.initializeBase(this) };
Mscrm.RibbonData.setRibbonEnabledState = function(enabled) {
    var $v_0 = $find("crmRibbonData");
    if ($v_0) {
        $v_0.get_$50_2().$6t_1 = enabled;
        $v_0.raiseEventWithCheck(32, null)
    }
};
Mscrm.RibbonData.prototype = {
    $70_3: null,
    $7l_3: null,
    $1o_3: null,
    $1W_3: null,
    $8p_3: null,
    $7j_3: null,
    $9Y_3: false,
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(Mscrm)) {
            if (!IsNull(Mscrm.RibbonLayout)) {
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.jewelLayout);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.tabs);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.TabLayouts);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.ContextualGroupLayouts);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.menuSectionAndGroupCounts);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.menuSectionAndGroupControls);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.tabGroupCount);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout.parentGroupCommands);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonLayout)
            }
            if (!IsNull(Mscrm.RibbonCommands)) {
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands.commands);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands.enableRules);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands)
            }
            delete Mscrm.RibbonLayout;
            delete Mscrm.RibbonCommands
        }
        Mscrm.CommandData.prototype.dispose.call(this)
    },
    initialize: function() {
        Mscrm.CommandData.prototype.initialize.call(this);
        this.$70_3 = {};
        this.$7l_3 = {};
        this.$8p_3 = {};
        this.$7j_3 = {};
        this.$9Y_3 = Mscrm.RibbonLayout.isInvalid;
        if (!IsNull(this.$V_2) && !IsNull(this.$V_2.TabList))
            for (var $v_0 = 0; $v_0 < this.$V_2.TabList.length; $v_0++) {
                var $v_1 = this.$V_2.TabList[$v_0], $v_2 = $v_1.TabId, $v_3 = this.get_$Ef_2()[$v_2];
                if (!IsNull($v_3) && $v_3.TabExists) {
                    if (!isNullOrEmptyString($v_3.TabCommand)) this.$8p_3[$v_3.TabCommand] = false;
                    if (!isNullOrEmptyString($v_3.ContextGroupCommand)) this.$7j_3[$v_3.ContextGroupCommand] = false
                }
                var $v_4 = this.$Ee_3($v_2);
                if (IsNull(this.get_$Ja_2()[$v_4])) {
                    this.$70_3[$v_2] = true;
                    if (!IsNull($v_3) && $v_3.IsContextual && !isNullOrEmptyString($v_3.ContextualGroupId)
                    ) this.$7l_3[$v_3.ContextualGroupId] = true
                }
            }
        !IsNull(this.$5w_2) && this.setCurrentSelectedElement($get(this.$5w_2.get_id()))
    },
    $Ee_3: function($p0) {
        var $v_0 = $p0;
        if ($v_0.startsWith("EntityTemplateTab.")) {
            $v_0 = $v_0.substr(18);
            for (var $v_1 = new Array(4), $v_2 = 0, $v_3 = 0; $v_3 < 3; $v_3++) {
                var $v_4 = $v_0.indexOf(".", $v_2);
                $v_1[$v_3] = $v_0.substring($v_2, $v_4);
                $v_2 = $v_4 + 1
            }
            $v_1[3] = $v_0.substr($v_2);
            $v_0 = $v_1.join("|")
        }
        return $v_0
    },
    get_$1u_2: function() { return 0 },
    get_$36_2: function() {
        if (!IsNull(this.$63_3)) return this.$63_3.get_ribbon();
        return null
    },
    handleRibbonTabSwitch: function(parameters) {
        var $v_0 = parameters;
        this.$9b_2 = $v_0.NewContextCommand
    },
    get_$Hd_2: function() {
        if (!IsNull(this.$V_2)) return this.$V_2.InitialTabId;
        return null
    },
    set_$Hd_2: function($p0) {
        if (!IsNull(this.$V_2)) this.$V_2.InitialTabId = $p0;
        return $p0
    },
    get_$Ja_2: function() {
        if (IsNull(this.$1o_3)) {
            this.$1o_3 = {};
            if (!IsNull(this.$V_2) && !IsNull(this.$V_2.TrimList))
                for (var $v_0 = 0; $v_0 < this.$V_2.TrimList.length; $v_0++) {
                    var $v_1 = this.$V_2.TrimList[$v_0];
                    this.$1o_3[$v_1] = true;
                    if (!IsNull(Mscrm.RibbonLayout.menuSectionAndGroupControls)) {
                        var $v_2 = Mscrm.RibbonLayout.menuSectionAndGroupControls[$v_1];
                        if (!isNullOrEmptyString($v_2)) {
                            var $v_3 = Mscrm.RibbonLayout.menuSectionAndGroupCounts[$v_2] - 1;
                            Mscrm.RibbonLayout.menuSectionAndGroupCounts[$v_2] = $v_3;
                            if ($v_3 <= 0) {
                                this.$1o_3[$v_2] = true;
                                var $v_4 = Mscrm.RibbonLayout.menuSectionAndGroupControls[$v_2];
                                if (!isNullOrEmptyString($v_4)) {
                                    var $v_5 = Mscrm.RibbonLayout.tabGroupCount[$v_4] - 1;
                                    Mscrm.RibbonLayout.tabGroupCount[$v_4] = $v_5;
                                    if ($v_5 <= 0) {
                                        var $v_6 = this.$Ee_3($v_4);
                                        this.$1o_3[$v_6] = true
                                    }
                                }
                            }
                        }
                    }
                }
            if (this.hasAssociatedGridContext()) {
                var $v_7 = window.parent.$find("crmRibbonData");
                if ($v_7 && isInstanceOfTypeAcrossFrames($v_7, Mscrm.RibbonData)) {
                    var $v_8 = $v_7.get_$Ja_2(), $$dict_A = $v_8;
                    for (var $$key_B in $$dict_A) {
                        var $v_9 = { key: $$key_B, value: $$dict_A[$$key_B] };
                        this.$1o_3[$v_9.key] = $v_9.value
                    }
                }
            }
        }
        return this.$1o_3
    },
    get_$AV_2: function() {
        if (!this.$1W_3) {
            var $v_0 = {};
            if (!IsNull(this
                    .$V_2) &&
                !IsNull(this.$V_2.CommandIds))
                for (var $v_1 = 0; $v_1 < this.$V_2.CommandIds.length; $v_1++) $v_0[this.$V_2.CommandIds[$v_1]] = true;
            this.$1W_3 = $v_0
        }
        return this.$1W_3
    },
    get_$5A_2: function() { return this.$8p_3 },
    get_$FZ_2: function() { return this.$7j_3 },
    get_isEmpty: function() {
        if (isNullOrEmptyString(this.get_$Hd_2())) return true;
        var $$dict_1 = this.$70_3;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            return false
        }
        return true
    },
    get_$Ht_3: function() { return Mscrm.RibbonLayout.jewelLayout },
    get_$Ef_2: function() { return Mscrm.RibbonLayout.tabs },
    $Br_3: null,
    $63_3: null
};

function _ribbonScaleHeader(elmRibbonTopBars, isRtl) { Mscrm.RibbonHeaderScaling.scaleHeader(elmRibbonTopBars, isRtl) }

Mscrm.RibbonHeaderScaling = function() {};
Mscrm.RibbonHeaderScaling.scaleHeader = function(elmTopBars, isRtl) {
    if (IsNull(isRtl)) isRtl = false;
    for (var $v_0 = elmTopBars
                 .childNodes[1],
        $v_1 = $v_0.childNodes.length,
        $v_2 = null,
        $v_6 = 0;
        $v_6 < $v_1;
        $v_6++) {
        var $v_7 = $v_0.childNodes[$v_6];
        if ($v_7.className.indexOf("ms-cui-tts") !== -1) {
            $v_2 = $v_7;
            break
        }
    }
    if (IsNull($v_2)) return;
    !Mscrm.RibbonHeaderScaling.$BD($v_0, $v_2, isRtl) && Mscrm.RibbonHeaderScaling.$GZ($v_0, $v_2, isRtl);
    while (Mscrm.RibbonHeaderScaling.$BD($v_0, $v_2, isRtl)) {
        var $v_8 = Mscrm.RibbonHeaderScaling.$Ay($v_2);
        Mscrm.RibbonHeaderScaling.$DO($v_2, isRtl);
        if ($v_8 === Mscrm.RibbonHeaderScaling.$Ay($v_2)) break
    }
    Mscrm.RibbonHeaderScaling.$G5(elmTopBars, $v_2, isRtl);
    for (var $v_3 = null, $v_4 = $v_2.getElementsByTagName("DIV"), $v_9 = 0; $v_9 < $v_4.length; $v_9++) {
        var $v_A = $v_4[$v_9];
        if ($v_A.className.indexOf("ms-cui-cg-t") >= 0 && $v_A.style.display !== "none") $v_3 = $v_A
    }
    var $v_5 = {};
    $v_5["tabElement"] = $v_2;
    $v_5["lastContextualTabElement"] = $v_3;
    Mscrm.PageManager.get_instance().raiseEvent(69, $v_5)
};
Mscrm.RibbonHeaderScaling.$BD = function($p0, $p1, $p2) {
    if (Mscrm.RibbonHeaderScaling.$CE($p0, $p2)) return true;
    if (Mscrm.RibbonHeaderScaling.$HV($p1, $p2)) return true;
    if (Mscrm.Utilities.isIE7()) return false;
    else return Mscrm.RibbonHeaderScaling.$CE($p1, $p2)
};
Mscrm.RibbonHeaderScaling.$HV = function($p0, $p1) {
    if ($p1) {
        if ($p0.offsetLeft + Mscrm.RibbonHeaderScaling.$Ay($p0) < 220) return true
    } else if ($p0.offsetLeft + $p0.offsetWidth > document.body.offsetWidth - 220) return true;
    return false
};
Mscrm.RibbonHeaderScaling.$CE = function($p0, $p1) {
    if (!$p0.offsetWidth) return false;
    for (var $v_0 = [], $v_1 = $p0.childNodes.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $p0.childNodes[$v_2];
        !IsNull($v_3) &&
            $v_3.nodeName !== "#text" &&
            $v_3.offsetWidth > 0 &&
            $v_3.offsetHeight > 0 &&
            Array.add($v_0, $v_3)
    }
    $v_1 = $v_0.length;
    for (var $v_4 = 0; $v_4 < $v_1 - 1; $v_4++) {
        var $v_5 = $v_0[$v_4], $v_6 = $v_0[$v_4 + 1];
        if (!IsNull($v_6)) if (Mscrm.RibbonHeaderScaling.$El($v_5, $v_6, $p1)) return true
    }
    return false
};
Mscrm.RibbonHeaderScaling.$GZ = function($p0, $p1, $p2) {
    Mscrm.RibbonHeaderScaling.$Jb($p1, $p2);
    while (Mscrm.RibbonHeaderScaling.$B2($p1)) {
        Mscrm.RibbonHeaderScaling.$HU($p1, $p2);
        if (Mscrm.RibbonHeaderScaling.$BD($p0, $p1, $p2)) {
            Mscrm.RibbonHeaderScaling.$DO($p1, $p2);
            break
        }
    }
};
Mscrm.RibbonHeaderScaling.$B2 = function($p0) {
    if (IsNull($p0._scaleStep))
        if ($p0.className.indexOf("ms-cui-tts-scale1") !== -1) $p0._scaleStep = 1;
        else if ($p0.className.indexOf("ms-cui-tts-scale2") !== -1) $p0._scaleStep = 2;
        else $p0._scaleStep = 0;
    return parseInt($p0._scaleStep)
};
Mscrm.RibbonHeaderScaling.$DO = function($p0, $p1) {
    var $v_0 = $p1 && Mscrm.Utilities.isIE7() ? 3 : Mscrm.RibbonHeaderScaling.$B2($p0);
    switch ($v_0) {
    case 0:
        Mscrm.RibbonHeaderScaling.$6W($p0, 1);
        break;
    case 1:
        Mscrm.RibbonHeaderScaling.$6W($p0, 2);
        break;
    case 2:
        Mscrm.RibbonHeaderScaling.$6W($p0, 3);
        break;
    case 3:
        Mscrm.RibbonHeaderScaling.$HX($p0, $p1);
        break
    }
};
Mscrm.RibbonHeaderScaling.$HX = function($p0, $p1) {
    for (var $v_0 = $p0.childNodes, $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--)
        if ($v_0[$v_1].style.visibility !== "hidden") {
            Mscrm.RibbonHeaderScaling.$DQ($v_0[$v_1]);
            break
        }
};
Mscrm.RibbonHeaderScaling.$Jb = function($p0, $p1) {
    for (var $v_0 = $p0.childNodes, $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) Mscrm.RibbonHeaderScaling.$Ed($v_0[$v_1])
};
Mscrm.RibbonHeaderScaling.$HU = function($p0, $p1) {
    var $v_0 = $p1 && Mscrm.Utilities.isIE7() ? 1 : Mscrm.RibbonHeaderScaling.$B2($p0);
    switch ($v_0) {
    case 1:
        Mscrm.RibbonHeaderScaling.$6W($p0, 0);
        break;
    case 2:
        Mscrm.RibbonHeaderScaling.$6W($p0, 1);
        break;
    case 3:
        Mscrm.RibbonHeaderScaling.$6W($p0, 2);
        break
    }
};
Mscrm.RibbonHeaderScaling.$Ay = function($p0) {
    for (var $v_0 = 0, $v_1 = $p0.childNodes, $v_2 = $v_1.length - 1;
        $v_2 >= 0;
        $v_2--
    ) if ($v_1[$v_2].style.visibility === "hidden") $v_0 += $v_1[$v_2].offsetWidth;
    return $v_0
};
Mscrm.RibbonHeaderScaling.$6W = function($p0, $p1) {
    $p0.className = Mscrm.RibbonHeaderScaling.$EB[$p1];
    $p0._scaleStep = $p1
};
Mscrm.RibbonHeaderScaling.$El = function($p0, $p1, $p2) {
    if ($p2) {
        if ($p1.offsetLeft + $p1.offsetWidth > $p0.offsetLeft) return true
    } else if ($p0.offsetLeft + $p0.offsetWidth > $p1.offsetLeft) return true;
    return false
};
Mscrm.RibbonHeaderScaling.$G5 = function($p0, $p1, $p2) {
    var $v_0 = $p0.childNodes[0];
    if (IsNull($v_0)) return;
    for (var $v_1 = $v_0.childNodes.length, $v_2 = null, $v_4 = 0; $v_4 < $v_1; $v_4++) {
        var $v_5 = $v_0.childNodes[$v_4];
        if ($v_5.className.indexOf("ms-cui-QATRowCenter") !== -1) {
            $v_2 = $v_5;
            break
        }
    }
    if (IsNull($v_2)) return;
    var $v_3 = $p1.childNodes[$p1.childNodes.length - 1];
    if ($v_3.className
        .indexOf("ms-cui-cg") !==
        -1 &&
        Mscrm.RibbonHeaderScaling.$El($v_3, $v_2, $p2)) Mscrm.RibbonHeaderScaling.$DQ($v_2);
    else Mscrm.RibbonHeaderScaling.$Ed($v_2)
};
Mscrm.RibbonHeaderScaling.$DQ = function($p0) {
    var $v_0 = $p0._titleHidden;
    if (IsNull($v_0) || $v_0 === "0") {
        $p0.style.visibility = "hidden";
        $p0._titleHidden = "1"
    }
};
Mscrm.RibbonHeaderScaling.$Ed = function($p0) {
    var $v_0 = $p0._titleHidden;
    if (!IsNull($v_0) && $v_0 === "1") {
        $p0.style.visibility = "visible";
        $p0._titleHidden = "0"
    }
};
Mscrm.RibbonManager = function($p0) {
    this.$$d_$Io_3 = Function.createDelegate(this, this.$Io_3);
    this.$$d_$Ip_3 = Function.createDelegate(this, this.$Ip_3);
    this.$$d_$B7_3 = Function.createDelegate(this, this.$B7_3);
    this.$1e_3 = new Array(2);
    this.$4K_3 = new Array(0);
    this.$26_3 = new Array(0);
    this.$4Q_3 = {};
    Mscrm.RibbonManager.initializeBase(this, [$p0]);
    this.get_element().setAttribute("currentRibbonElement", "")
};
Mscrm.RibbonManager.get_$3T = function() {
    if (!Mscrm.RibbonManager.$8Y) Mscrm.RibbonManager.$8Y = CUI.Page.PageManager.get_instance();
    return Mscrm.RibbonManager.$8Y
};
Mscrm.RibbonManager.prototype = {
    $4h_3: false,
    $2w_3: false,
    $6w_3: false,
    $1N_3: null,
    $B_3: null,
    $1v_3: null,
    $39_3: null,
    $6s_3: null,
    $2a_3: false,
    $40_3: false,
    $6u_3: true,
    $3z_3: null,
    $1i_3: null,
    $u_3: 0,
    cmdBarStatus: null,
    get_hideCommandBar: function() {
        return !isNullOrEmptyString(this.cmdBarStatus) && this.cmdBarStatus.toLowerCase() === "false"
    },
    get_availableWidth: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$u_3) || this.$u_3 < 0) this.$u_3 = this.$6B_3(2);
        return this.$u_3
    },
    set_availableWidth: function(value) {
        if (CUI.ScriptUtility.isNullOrUndefined(value) || value <= 0) return value;
        if (this.$u_3 !== value) this.$u_3 = value;
        return value
    },
    $3d_3: 0,
    get_availableWidthOnChartPane: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3d_3) || this.$3d_3 < 0) this.$3d_3 = this.$6B_3(0);
        return this.$3d_3
    },
    set_availableWidthOnChartPane: function(value) {
        if (CUI.ScriptUtility.isNullOrUndefined(value) || value <= 0) return value;
        if (this.$3d_3 !== value) this.$3d_3 = value;
        return value
    },
    $3c_3: 0,
    get_availableWidthOnChartDesigner: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3c_3) || this.$3c_3 < 0) this.$3c_3 = this.$6B_3(1);
        return this.$3c_3
    },
    set_availableWidthOnChartDesigner: function(value) {
        if (CUI.ScriptUtility.isNullOrUndefined(value) || value <= 0) return value;
        if (this.$3c_3 !== value) this.$3c_3 = value;
        return value
    },
    $5o_3: 9,
    $8J_3: 3,
    $8I_3: 3,
    get_numberOfButtonsForDisplay: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5o_3)) this.$5o_3 = 9;
        return this.$5o_3
    },
    set_numberOfButtonsForDisplay: function(value) {
        if (!this.$B_3 || this.$B_3._disposed || this.$B_3.get_$1u_2() !== 1) return value;
        if (CUI.ScriptUtility.isNullOrUndefined(value)) return value;
        if (value > 9) value = 9;
        if (value < 0) value = 0;
        if (this.$5o_3 !== value) this.$5o_3 = value;
        return value
    },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        if (this.get_$Bi_3())
            if (this.get_$Hp_3()) this.get_element().style.height = "62px";
            else this.get_element().style.height = "135px";
        else if (this.$6w_3) this.get_element().style.height = "43px";
        else this.get_element().style.height = "0px"
    },
    get_isOnOutlookStage: function() { return this.$4h_3 },
    set_isOnOutlookStage: function(value) {
        this.$4h_3 = value;
        return value
    },
    get_isOnAssociatedGridCommandBar: function() { return this.$2w_3 },
    set_isOnAssociatedGridCommandBar: function(value) {
        this.$2w_3 = value;
        return value
    },
    get_hideChrome: function() { return this.$6w_3 },
    get_isMinimized: function() { return Mscrm.RibbonManager.$6x },
    set_isMinimized: function(value) {
        if (this.$B_3 && this.$B_3.get_$36_2()) {
            var $v_0 = this.$B_3.$9b_2, $v_1 = this.$B_3.get_$36_2();
            $v_1.set_minimized(Mscrm.RibbonManager.$6x = value);
            !value && !isNullOrEmptyString($v_0) && this.$B_3.get_$5A_2()[$v_0] && $v_1.selectTabByCommand($v_0);
            !value && isNullOrEmptyString($v_0) && $v_1.selectTabById(this.$B_3.get_$Hd_2());
            this.$BR_3(null)
        }
        return value
    },
    setTabById: function(id) {
        if (this.$B_3 && this.$B_3.get_$36_2()) {
            this.$B_3.get_$36_2().selectTabById(id);
            this.$BR_3(null)
        }
    },
    get_$Bi_3: function() {
        if (this.get_hideCommandBar()) return false;
        var $v_0 = true, $v_1 = Mscrm.CrmUri.create(window.location.href);
        if ($v_1.get_scheme().toLowerCase() === "outlook") $v_0 = false;
        else {
            var $v_3 = $v_1.get_query()["web"];
            if (!IsNull($v_3)) $v_0 = $v_3 !== "false"
        }
        if (!IsNull($v_1.get_query()["_hc"])) {
            this.$6w_3 = $v_1.get_query()["_hc"].toLowerCase() === "true";
            if (this.$6w_3) return false
        }
        if (this.$Hn_3($v_0)) return false;
        var $v_2 = Mscrm.SessionInfo.getClientMajorVersion();
        if (!IsNull($v_2) && $v_2 <= 4) return !this.$4h_3 || $v_0;
        if (this.$4h_3) return false;
        return $v_0
    },
    get_$Hp_3: function() { return Mscrm.CrmUri.create(window.location.href).isOutlookPreparationPageUrl() },
    $Hn_3: function($p0) {
        if ($p0) return false;
        var $v_0 = Mscrm.CrmUri.create(window.location.href);
        if ($v_0.get_path().toUpperCase().endsWith("/MAIN.ASPX") && $v_0.get_query()["pagetype"] === "entitylist") {
            var $v_1 = window.IS_ENTITY_RIBBONIZED;
            return !IsNull($v_1) && !$v_1
        }
        return false
    },
    get_$Ec_3: function() { return Mscrm.SessionInfo.isOutlook14Client() },
    get_$Aa_3: function() {
        if (!this.$6s_3) this.$6s_3 = {};
        return this.$6s_3
    },
    $Hj_3: function($p0) {
        var $v_0 = "";
        if (!IsNull($p0) && !IsNull($p0["sourceUri"])) $v_0 = $p0["sourceUri"].toString();
        var $v_1 = window.location.href;
        if (!isNullOrEmptyString($v_0) && $v_1.indexOf($v_0) < 0) return true;
        return false
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 35:
            if (!IsNull(sourceComponent)) {
                var $v_0 = sourceComponent;
                if (!$v_0.get_$1u_2()) {
                    var $v_1 = $v_0;
                    (!$v_1.get_isEmpty() || $v_1.get_$6S_2() === "HomePageGrid") && this.$HO_3($v_1, parameters)
                } else {
                    var $v_2 = $v_0,
                        $v_3 = this.$2w_3 && $v_2.get_$4D_3() && !this.$Hj_3(parameters) ||
                            !this.$2w_3 && !$v_2.get_$4D_3();
                    $v_3 && this.$HI_3($v_2, parameters)
                }
            }
            break;
        case 36:
            if (!IsNull(sourceComponent)) {
                var $v_4 = sourceComponent;
                if (!$v_4.get_$1u_2()) this.$HP_3(sourceComponent);
                else {
                    var $v_5 = $v_4, $v_6 = this.$2w_3 && $v_5.get_$4D_3() || !this.$2w_3 && !$v_5.get_$4D_3();
                    $v_6 && this.$B4_3($v_5)
                }
            }
            break;
        case 9:
            this.$HL_3(sourceComponent, parameters);
            break;
        case 29:
            this.$HM_3(sourceComponent);
            break;
        case 32:
            this.$BR_3(parameters);
            break;
        case 34:
            var $v_7 = parameters["command"], $v_8 = parameters["id"];
            if ($v_7 && typeof $v_7 === "string" && $v_8 && typeof $v_8 === "string") return this.$96_3($v_7, $v_8);
            else return false;
        case 33:
            var $v_9 = parameters["command"], $v_A = parameters["id"];
            if ($v_9 && typeof $v_9 === "string" && $v_A && typeof $v_A === "string") return this.$Hi_3($v_9, $v_A);
            else return false;
        case 31:
            var $v_B = parameters["command"], $v_C = parameters["getRibbonXmlForOutlookClient"];
            if ($v_B && typeof $v_B === "string")
                if (!$v_C) this.$Ag_3($v_B);
                else {
                    var $v_D = this.$HH_3($v_B, parameters);
                    parameters["RibbonXmlForOutlookClientResult"] = $v_D
                }
            break;
        case 37:
            var $v_E = parameters, $v_F = $v_E.Minimized;
            if (!IsNull($v_F) && typeof $v_F === "boolean") Mscrm.RibbonManager.$6x = $v_F;
            this.raiseEvent(20, null);
            break;
        case 39:
            if (!IsNull(this.$B_3) && !this.$B_3.get_$1u_2()) {
                var $v_G = parameters;
                Mscrm.RibbonNavigationModel.onTabSwitch($v_G.OldContextId,
                    $v_G.NewContextId,
                    this.$B_3,
                    $v_G.ChangedByUser)
            }
            break;
        case 56:
        case 55:
            var $v_H = parameters;
            this.$JM_3(eventCode, $v_H.eventElement);
            break;
        case 14:
            if (this.$2a_3) break;
            if (!this.$40_3) {
                this.$40_3 = true;
                this.$3z_3 = window.setTimeout(this.$$d_$B7_3, 100)
            }
            break;
        case 94:
            !IsNull(this.$B_3) && !this.$B_3._disposed && this.$B_3.get_$1u_2() === 1 && this.$E7_3();
            break;
        case 74:
            this.$2w_3 && this.$HY_3();
            break
        }
        return null
    },
    $HY_3: function() {
        var $v_0 = window.top.document.getElementById("crmRibbonManager");
        if ($v_0.style.visibility !== "hidden") {
            var $v_1 = window.top.document.getElementById("crmContentPanel");
            if (!IsNull($v_1)) {
                var $v_2 = $v_1.attributes.getNamedItem("currentContentId"), $v_3 = null;
                if (!IsNull($v_2) && $v_2.specified) $v_3 = window.top.document.getElementById($v_2.value);
                if (!IsNull($v_3)) {
                    var $v_4 = $v_3.contentWindow.document.getElementById("areaForm");
                    if (!IsNull($v_4) && $v_4.style.display === "none") {
                        $v_0.style.visibility = "hidden";
                        Mscrm.PerceivedCommandBarHelper.setPerceivedCommandBarAsHidden()
                    }
                }
            }
        }
    },
    $E7_3: function() {
        var $v_0 = this.$B_3;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.$Q_0) &&
            !$v_0.isDocumentTab()) {
            if (!IsNull(this.$1i_3)) {
                window.clearTimeout(this.$1i_3);
                this.$1i_3 = null
            }
            this.$1i_3 = window.setTimeout($v_0.$$d_reloadCommandBar, 0)
        }
    },
    $B7_3: function() {
        this.$3z_3 = null;
        try {
            if (!CUI.ScriptUtility.isNullOrUndefined(this
                    .$B_3) &&
                !this.$B_3._disposed &&
                this.$B_3.get_$1u_2() === 1) {
                var $v_0 = false, $v_1 = this.get_availableWidth();
                this.set_availableWidth(this.$6B_3(2));
                var $v_2 = this.get_availableWidth(), $v_3 = this.get_availableWidthOnChartPane();
                this.set_availableWidthOnChartPane(this.$6B_3(0));
                var $v_4 = this.get_availableWidthOnChartPane(), $v_5 = this.get_availableWidthOnChartDesigner();
                this.set_availableWidthOnChartDesigner(this.$6B_3(1));
                var $v_6 = this.get_availableWidthOnChartDesigner();
                $v_0 = !CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 !== $v_1 ||
                    !CUI.ScriptUtility.isNullOrUndefined($v_4) && $v_4 !== $v_3 ||
                    !CUI.ScriptUtility.isNullOrUndefined($v_6) && $v_6 !== $v_5;
                if ($v_0 || this.$6u_3) {
                    var $v_7 = false;
                    this.$6u_3 = false;
                    if (this.get_element().style.visibility === "visible") {
                        $v_7 = true;
                        this.get_element().style.visibility = "hidden"
                    }
                    this.$8J_3 = 3;
                    this.$8I_3 = 3;
                    this.set_numberOfButtonsForDisplay(9);
                    this.$E9_3();
                    this.$8J_3 = this.$AW_3(0);
                    this.$8I_3 = this.$AW_3(1);
                    this.set_numberOfButtonsForDisplay(this.$AW_3(2));
                    this.$E9_3();
                    if ($v_7) {
                        this.get_element().style.visibility = "visible";
                        Mscrm.Performance.PerformanceMarkerManager.get_instance().addMarker("CommandBar Rendered", 1)
                    }
                }
            }
        } catch ($v_8) {
            if ($v_8.number !== -2146823277) throw $v_8
        } finally {
            this.$40_3 = false
        }
    },
    $7Q_3: function($p0) {
        return $p0 === "moreCommands" || $p0 === "moreChartsCommands" || $p0 === "moreChartDesignerCommands"
    },
    $HB_3: function($p0) {
        var $v_0 = null, $v_1 = this.$B_3;
        if (CUI.ScriptUtility.isNullOrUndefined($v_1) || CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3)) return $v_0;
        if ($p0 === 2) {
            if (CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.$Q_0)) return $v_0;
            if (this.get_element()) {
                var $v_2 = $P_CRM(this.get_element());
                $v_0 = $v_2.find(String.format("ul.{0}", "ms-crm-CommandBar-Menu"))
            }
        } else {
            if (!$p0 && CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.get_chartPaneCommandBar())) return $v_0;
            if ($p0 === 1 && CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.get_chartDesignerCommandBar())) return $v_0;
            var $v_3 = $get("crmContentPanel");
            if (IsNull($v_3) || IsNull($v_3.attributes)) return $v_0;
            var $v_4 = $v_3.attributes.getNamedItem("currentContentId"), $v_5 = null;
            if (!IsNull($v_4) && $v_4.specified) $v_5 = $get($v_4.value);
            if (!IsNull($v_5)) {
                var $v_6 = $v_5.contentWindow,
                    $v_7 = !$p0 ? "chartPaneCommandBar" : "chartDesignerCommandBar",
                    $v_8 = $v_6.document.getElementById($v_7);
                if (!IsNull($v_8)) {
                    var $v_9 = $P_CRM($v_8),
                        $v_A = !$p0 ? "ms-crm-chartsPaneCommand-Bar" : "ms-crm-chartDesignerCommand-Bar";
                    $v_0 = $v_9.find(String.format("ul.{0}.{1}", "ms-crm-CommandBar-Menu", $v_A))
                }
            }
        }
        return $v_0
    },
    $AW_3: function($p0) {
        var $v_0 = null,
            $v_1 = null,
            $v_2 = null,
            $v_3 = false,
            $v_4 = false,
            $v_5 = 0,
            $v_6 = 0,
            $v_7,
            $v_8,
            $v_9 = "moreCommands";
        if ($p0 === 2) {
            $v_6 = 9;
            $v_7 = 10;
            $v_8 = this.get_availableWidth()
        } else {
            $v_6 = 3;
            $v_7 = 15;
            $v_8 = !$p0 ? this.get_availableWidthOnChartPane() : this.get_availableWidthOnChartDesigner();
            $v_9 = !$p0 ? "moreChartsCommands" : "moreChartDesignerCommands"
        }
        var $v_A = this.$HB_3($p0), $v_B = null;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_A)) $v_B = $v_A[0];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_B)) {
            $v_0 = $v_B.getElementsByTagName("LI");
            $v_1 = $v_A.find(String.format("#{0}", $v_9));
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) $v_2 = $v_1[0]
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0) ||
            CUI.ScriptUtility.isNullOrUndefined($v_0.length) ||
            !$v_0.length) return $v_6;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_5 = 1;
            if ($v_2.style.display !== "none") $v_3 = true
        }
        for (var $v_C = 0; $v_C < $v_0.length; $v_C++) {
            var $v_D = $v_0[$v_C];
            if ($v_8 - ($v_D.offsetWidth + $v_7) < 0) {
                $v_6 = $v_C;
                $v_4 = true;
                if (!$v_5) $v_6--;
                break
            } else {
                if (this.$7Q_3($v_D.id)) {
                    $v_5 = 0;
                    continue
                }
                $v_8 -= $v_D.offsetWidth + $v_7
            }
        }
        if ($v_3 || $v_4) {
            $v_8 -= $v_1.width() + $v_7;
            $v_C--;
            while ($v_8 < 0 && $v_C >= 0) {
                var $v_E = $v_0[$v_C];
                $v_C--;
                $v_8 += $v_E.offsetWidth + $v_7;
                if (this.$7Q_3($v_E.id)) {
                    $v_5 = 1;
                    continue
                }
                $v_6--
            }
        }
        return $v_6
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$CC_3();
        if (!IsNull(this.$3z_3)) {
            window.clearTimeout(this.$3z_3);
            this.$40_3 = false
        }
        !IsNull(this.$1i_3) && window.clearTimeout(this.$1i_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    $Ag_3: function($p0) {
        if (!IsNull(this.$B_3)) {
            var $v_0 = {};
            $v_0["SourceControlId"] = this.get_id();
            this.$B_3.executeCommand($p0, $v_0)
        }
    },
    $HH_3: function($p0, $p1) {
        if (!IsNull(this.$B_3)) return this.$B_3.getDynamicMenuRibbonFromCommand($p0, $p1);
        return null
    },
    $Hi_3: function($p0, $p1) {
        var $v_0 = this.get_$Aa_3()[$p0];
        if (IsNull($v_0)) {
            if (!IsNull(this.$B_3)) $v_0 = this.$96_3($p0, $p1) && this.$B_3.isControlEnabled($p0);
            else $v_0 = false;
            this.get_$Aa_3()[$p0] = $v_0
        }
        return $v_0
    },
    $96_3: function($p0, $p1) {
        if (!IsNull(this.$B_3) && !IsNull($p0)) return this.$B_3.isControlVisible($p0, $p1);
        else return false
    },
    $Bx_3: function($p0) { Mscrm.RibbonManager.get_$3T().addPageComponent($p0) },
    $HI_3: function($p0, $p1) {
        if (!isInstanceOfTypeAcrossFrames($p0, Mscrm.CommandBarData)) return;
        if ($p0.get_$97_2() && IsNull(this.$1N_3)) {
            this.$1N_3 = $p0;
            return
        }
        if (!IsNull($p1) &&
            !IsNull($p1["sourceUri"]) &&
            $p1["sourceUri"].toString().toLowerCase().indexOf("/form/page.aspx") > 0) {
            this.$CB_3();
            this.$Dd_3($p0, $p1)
        } else this.loadCommandBarDataAsync($p0, $p1)
    },
    $HO_3: function($p0, $p1) {
        if (!isInstanceOfTypeAcrossFrames($p0, Mscrm.RibbonData)) return;
        if ($p0.get_$97_2() && IsNull(this.$1N_3)) {
            this.$1N_3 = $p0;
            return
        }
        if (this.$4h_3) this.$BB_3($p0, $p1);
        else this.$De_3($p0, $p1)
    },
    loadCommandBarDataAsync: function(commandBarData, parameters) {
        this.$CB_3();
        var $$t_2 = this;
        this.$1i_3 = window.setTimeout(function() { $$t_2.$Dd_3(commandBarData, parameters) }, 0)
    },
    $Dd_3: function($p0, $p1) {
        try {
            if ($p0.get_isDisposed()) return;
            this.$Dc_3($p0, $p1)
        } catch ($v_0) {
            if ($v_0.number !== -2146823277) throw $v_0
        }
    },
    $CB_3: function() {
        if (!IsNull(this.$1i_3)) {
            window.clearTimeout(this.$1i_3);
            this.$1i_3 = null
        }
    },
    destroyChartCommandBar: function() {
        for (var $v_0 = 0; $v_0 < this.$26_3.length; $v_0++) {
            !IsNull(this.$26_3[$v_0].get_chartPaneCommandBar()) && this.$26_3[$v_0].get_chartPaneCommandBar().dispose();
            !IsNull(this.$26_3[$v_0].get_chartDesignerCommandBar()) &&
                this.$26_3[$v_0].get_chartDesignerCommandBar().dispose()
        }
        this.$CT_3()
    },
    $De_3: function($p0, $p1) {
        var $$t_4 = this,
            $v_0 = function() {
                try {
                    $$t_4.$BB_3($p0, $p1)
                } catch ($v_1) {
                    if ($v_1.number !== -2146823277) throw $v_1
                }
            };
        executeFunctionDeferred($v_0, true, false)
    },
    $BB_3: function($p0, $p1) {
        if (Mscrm.Utilities.getContentUrl(null).isOutlookPreparationPageUrl()) {
            var $v_2 = window.top.document.getElementById("crmRibbonManager");
            if (!IsNull($v_2)) {
                $v_2.style.height = "62px";
                return
            }
        }
        if ($p0.$3K_2) return;
        window.self.RibbonLoadStartTime = (new Date).getTime();
        this.$B_3 && !this.$B_3.$2x_2 && this.$HP_3(this.$B_3, true);
        var $v_0 = $get("ms-crm-lightbox");
        if ($v_0) $v_0.style.visibility = "hidden";
        for (var $v_3 = 0; $v_3 < this.$4K_3.length; $v_3++) {
            var $v_4 = this.$4K_3[$v_3];
            if (!IsNull($v_4)) {
                var $v_5 = $v_4.get_ribbon();
                !IsNull(this.$B_3) && !this.$B_3._disposed && $v_5.dispose();
                $v_4.dispose();
                $v_5 = null;
                $v_4 = null
            }
            this.$4K_3[$v_3] = null
        }
        this.$4K_3 = [];
        $p0.$5d_2 = "ribbonContainer" + Mscrm.RibbonManager.$AL++;
        $p0.$2Q_2 = this;
        try {
            this.$B_3 = $p0.get_isEmpty() ? this.$1N_3 : $p0
        } catch ($$e_7) {
            this.$B_3 = this.$1N_3
        }
        if (!IsNull(this.$B_3)) {
            this.$B_3.$Cn_2();
            this.$Hw_3(this.$B_3);
            this.$Hx_3(this.$B_3, $p1);
            this.get_$Ec_3() && this.$E6_3()
        }
        this.$2a_3 = false;
        var $v_1 = $get("perceivedRibbonId");
        if (!IsNull($v_1)) {
            $v_1.style.visibility = "hidden";
            $v_1.innerHTML = "<div/>"
        }
        this.$EV_3();
        this.raiseEvent(74, null);
        executeFunctionDeferred(this.$$d_$Ip_3, true, false)
    },
    $Ip_3: function() {
        window.self.FullyLoadedTime = (new Date).getTime();
        var $$t_1 = this;
        executeFunctionDeferred(function() {
                var $v_0 = $get("perceivedRibbonId");
                !IsNull($v_0) && typeof processLoadedRibbon !== "undefined" && window.processLoadedRibbon()
            },
            false,
            false)
    },
    $Hw_3: function($p0) {
        if (!IsNull(this.$1v_3)) {
            Mscrm.RibbonManager.get_$3T().removePageComponent(this.$1v_3);
            this.$1v_3 = null
        }
        if (!IsNull($p0) && !IsNull($p0.get_$50_2())) {
            this.$1v_3 = new Mscrm.CommandHandlerWrapper($p0.get_$50_2());
            Mscrm.RibbonManager.get_$3T().addPageComponent(this.$1v_3)
        }
    },
    $Hx_3: function($p0, $p1) {
        this.get_$Bi_3() && this.$Hy_3($p0, $p1);
        isOutlookHostedWindow() && getOutlookHostedWindow().handleEvent(32, null, null)
    },
    $Fv_3: function() {
        for (var $v_0, $v_1 = 0; $v_1 < this.$26_3.length; $v_1++) {
            $v_0 = this.$26_3[$v_1];
            if (!IsNull($v_0)) {
                var $v_2 = $v_0.$Q_0;
                !IsNull($v_2) && $v_2.dispose();
                $v_0.dispose();
                $v_2 = null;
                $v_0 = null
            }
            this.$26_3[$v_1] = null
        }
    },
    $Dc_3: function($p0, $p1) {
        var $v_0 = false, $v_1 = new Mscrm.Performance.PerformanceStopwatch("LoadCommandBarData");
        $v_1.start();
        try {
            if (IsNull($p0) ||
                $p0.$3K_2 ||
                CUI.ScriptUtility.isNullOrUndefined($p0.get_isDisposed()) ||
                $p0.get_isDisposed()) {
                $v_0 = true;
                return
            }
            this.$B_3 && !this.$B_3._disposed && !this.$B_3.$2x_2 && this.$B4_3(this.$B_3);
            this.$Fv_3();
            this.$26_3 = [];
            $p0.$5d_2 = "commandContainer" + Mscrm.RibbonManager.$AL++;
            $p0.$2Q_2 = this;
            var $v_2 = document.createElement("div");
            $v_2.id = $p0.$5d_2;
            try {
                this.$B_3 = !$p0.get_isEmpty() ? $p0 : this.$1N_3
            } catch ($$e_5) {
                this.$B_3 = this.$1N_3
            }
            if (!IsNull(this.$39_3)) {
                Mscrm.Utilities.destroyElement(this.$39_3);
                this.$39_3 = null
            }
            this.$CT_3();
            this.get_element().appendChild($v_2);
            if (!$p0.get_$4D_3()) {
                this.get_element().style.height = "62px";
                if ($p1 && !isNullOrEmptyString($p1["uri"])) {
                    var $v_7 = $p1["uri"].toString(), $v_8 = new RegExp(".*WopiFrame.aspx.*");
                    if (!$v_7.search($v_8)) this.get_element().style.height = "38px"
                }
            } else this.get_element().style.height = "43px";
            this.$39_3 = $v_2;
            this.get_element().setAttribute("currentRibbonElement", $v_2.id);
            var $v_3 = new Mscrm.CommandBarBuildOptions($p0);
            $v_3.$7E_0 = $p0.get_$Ja_2();
            $v_3.$2f_0 = this.get_numberOfButtonsForDisplay();
            $v_3.$u_0 = this.get_availableWidth();
            var $v_4 = new Mscrm.CommandBarBuilder($v_3, $v_2);
            $p0.$S_3 = $v_4;
            $v_4.buildCommandBar($p0);
            var $v_5 = false;
            if (!$p0.get_$4D_3() && !this.$2w_3 && !this.$Hf_3($v_2)) {
                this.get_element().style.display = "none";
                $v_5 = true
            } else {
                if (isNullOrEmptyString(this.get_element().style
                        .display) ||
                    this.get_element().style.display === "none") $v_5 = true;
                this.get_element().style.display = "block";
                $v_2.style.display = "inline";
                if ($p0 === this.$1N_3 && Mscrm.Utilities.getContentUrl(null).isTurboFormUrl()
                ) this.get_element().style.display = "none";
                else if (Mscrm.PerceivedCommandBarHelper
                    .hasPerceivedCommandBar()) this.get_element().style.visibility = "hidden";
                else this.get_element().style.visibility = "visible"
            }
            this.$CX_3();
            this.$EV_3();
            this.$6u_3 = true;
            if (!this.$40_3) {
                this.$40_3 = true;
                if (Mscrm.Utilities.getContentUrl(null).isTurboFormUrl()) this.$B7_3();
                else this.$3z_3 = window.setTimeout(this.$$d_$B7_3, 100)
            }
            var $v_6 = $get("perceivedRibbonId");
            if (!IsNull($v_6)) {
                if ($get("crmTopBar")) {
                    $get("crmTopBar").style.visibility = "visible";
                    if (this.get_hideCommandBar())
                        for (var $v_9 = $get("crmTopBar").getElementsByTagName("A"), $v_A = 0;
                            $v_A < $v_9.length;
                            $v_A++) $v_9[$v_A].setAttribute("tabindex", "-1")
                }
                $v_6.style.visibility = "hidden";
                $v_6.innerHTML = "<div/>"
            }
            $v_5 && this.raiseEvent(20, null);
            this.raiseEvent(74, null)
        } finally {
            if (!$v_0) {
                this.$CX_3();
                executeFunctionDeferred(this.$$d_$Io_3, true, false)
            }
        }
        $v_1.stop()
    },
    $Io_3: function() { window.self.FullyLoadedTime = (new Date).getTime() },
    $EV_3: function() {
        if (!IsNull(this.$B_3)) {
            this.$B_3.$3K_2 = true;
            this.$B_3.$2x_2 = false
        }
    },
    $Hf_3: function($p0) {
        var $v_0 = Mscrm.Utilities.getChildElementsByClassName($p0, "ms-crm-CommandBarItem", false);
        if (!IsNull($v_0) && $v_0.length > 0)
            for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) if ($v_0[$v_1].style.display !== "none") return true;
        return false
    },
    $CT_3: function() {
        if (!IsNull(this.$1e_3[0])) this.$1e_3[0] = null;
        if (!IsNull(this.$1e_3[1])) this.$1e_3[1] = null
    },
    $Hy_3: function($p0, $p1) {
        var $v_0 = document.createElement("div");
        $v_0.id = $p0.$5d_2;
        Mscrm.RibbonManager.get_$3T().disposeAllRoots();
        if (!IsNull(this.$39_3)) {
            Mscrm.Utilities.destroyElement(this.$39_3);
            this.$39_3 = null
        }
        this.get_element().appendChild($v_0);
        this.get_element().style.height = "";
        $p0.$Br_3 = $v_0;
        this.$39_3 = $v_0;
        this.get_element().setAttribute("currentRibbonElement", $v_0.id);
        var $v_1 = $p0.get_$Ja_2(),
            $v_2 = $p0.$7l_3,
            $v_3 = $p0.$70_3,
            $v_4 = $p0.get_$Ef_2(),
            $v_5 = new Array(0),
            $$dict_A = $v_3;
        for (var $$key_B in $$dict_A) {
            var $v_A = { key: $$key_B, value: $$dict_A[$$key_B] }, $v_B = $v_A.key;
            if (!IsNull($v_B) && $v_B.length > 0 && IsNull($v_1[$v_B])) $v_5[$v_5.length] = $v_B
        }
        var $v_6 = new CUI.RibbonBuildOptions;
        $v_6.shownTabs = $v_3;
        $v_6.initiallyVisibleContextualGroups = $v_2;
        $v_6.trimmedIds = $v_1;
        $v_6.showJewelId = "Mscrm.Jewel";
        $v_6.trimEmptyGroups = true;
        $v_6.minimized = Mscrm.RibbonManager.$6x;
        var $v_7 = new CUI.RibbonBuilder($v_6, $v_0, Mscrm.RibbonManager.get_$3T()),
            $v_8 = new Mscrm.CrmDataSource($v_5, $p0.get_$Ht_3(), $v_4);
        $v_7.$10_0 = $v_8;
        var $v_9 = $p0.get_$Hd_2();
        if ($p1 && !isNullOrEmptyString($p1["initialTabId"])) $v_9 = $p1["initialTabId"];
        $p0.set_$Hd_2($v_8.getInitialTabId($v_9));
        $v_7.buildRibbonAndInitialTab($p0.get_$Hd_2());
        $p0.$63_3 = $v_7;
        $v_0.style.display = "inline";
        this.raiseEvent(20, null);
        $p0.$9Y_3 && openErrorDlg("0x8004f671", null, null, 0, 0);
        $v_7.get_ribbon().$59_2();
        window.self.RibbonLoadEndTime = (new Date).getTime()
    },
    $Ek_3: function($p0) {
        if (this.$2a_3) return false;
        if ($p0._disposed) return false;
        var $v_0 = !$p0.get_$1u_2() ? Mscrm.RibbonData : Mscrm.CommandBarData;
        if (!isInstanceOfTypeAcrossFrames($p0, $v_0)) return false;
        if ($p0 !== this.$B_3) return false;
        $p0.$2x_2 = true;
        $p0.$3K_2 = false;
        return true
    },
    $B4_3: function($p0) {
        if (IsNull($p0)) return;
        try {
            if (!this.$Ek_3($p0)) return
        } catch ($v_2) {
            if ($v_2.number !== -2146823277) throw $v_2;
            else return
        }
        var $v_0 = new Mscrm.Performance.PerformanceStopwatch("HandleCommandBarDataUnload");
        $v_0.start();
        if (!IsNull(this.$1i_3)) {
            window.clearTimeout(this.$1i_3);
            this.$1i_3 = null
        }
        this.closeAllMenu($p0);
        this.$2a_3 = true;
        this.$Fw_3();
        var $v_1 = $p0.$S_3;
        if (!IsNull($v_1)) {
            $p0.$S_3 = null;
            this.$26_3[this.$26_3.length] = $v_1
        }
        $v_0.stop()
    },
    $HP_3: function($p0, $p1) {
        var $v_0;
        if (IsNull($p1)) $p1 = false;
        if (!this.$Ek_3($p0)) return;
        if (!IsNull(this.$1v_3)) {
            Mscrm.RibbonManager.get_$3T().removePageComponent(this.$1v_3);
            if (!$p1) {
                var $v_1 = [], $$dict_5 = $p0.get_$5A_2();
                for (var $$key_6 in $$dict_5) {
                    var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
                    if (this.$1v_3.canHandleCommand($v_3.key)) $v_1[$v_1.length] = $v_3.key
                }
                var $$dict_8 = $p0.get_$FZ_2();
                for (var $$key_9 in $$dict_8) {
                    var $v_4 = { key: $$key_9, value: $$dict_8[$$key_9] };
                    if (this.$1v_3.canHandleCommand($v_4.key)) $v_1[$v_1.length] = $v_4.key
                }
                this.$1v_3 = new Mscrm.AlwaysEnabledCommandHandler(this.$1v_3.getId() + "_tabsOnly", $v_1);
                Mscrm.RibbonManager.get_$3T().addPageComponent(this.$1v_3);
                var $v_2 = this.$B_3.get_$36_2();
                if (!IsNull($v_2)) {
                    var $v_5 = $v_2.get_element(), $v_6 = $get("ms-crm-lightbox");
                    if (!$v_6) {
                        $v_6 = document.createElement("DIV");
                        $v_6.id = $v_6.className = "ms-crm-lightbox";
                        $v_6.style.top = $v_5.offsetTop.toString() + "px";
                        $v_6.style.left = $v_5.offsetLeft.toString() + "px";
                        $v_6.style.height = $v_5.offsetHeight.toString() + "px";
                        $v_6.style.width = $v_5.offsetWidth.toString() + "px";
                        $v_5.appendChild($v_6)
                    } else $v_6.style.visibility = "visible";
                    var $v_7 = $v_5.className;
                    $v_5.className = !IsNull($v_7) ? "ms-cui-disabled" : $v_7 + " ms-cui-disabled"
                }
            }
        }
        $v_0 = $p0.$63_3;
        $p0.$63_3 = null;
        if (!IsNull($v_0)) {
            var $v_8 = $v_0.get_ribbon();
            !IsNull($v_8) && $v_8.$69_1();
            this.$4K_3[this.$4K_3.length] = $v_0
        }
        this.$2a_3 = true
    },
    $HL_3: function($p0, $p1) {
        if (isInstanceOfTypeAcrossFrames($p0, Mscrm.ContentPanel) && !IsNull(this.$1N_3)) {
            this.$1N_3.$3K_2 = false;
            if (this.$4h_3) this.$BB_3(this.$1N_3, null);
            else if (!this.$1N_3.get_$1u_2()) this.$De_3(this.$1N_3, null);
            else this.loadCommandBarDataAsync(this.$1N_3, $p1)
        }
    },
    $CC_3: function() {
        var $$dict_1 = this.$4Q_3;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            window.clearTimeout(this.$4Q_3[$v_0.key]);
            delete this.$4Q_3[$v_0.key]
        }
    },
    $HM_3: function($p0) {
        this.$CC_3();
        if (!IsNull(this.$3z_3)) {
            window.clearTimeout(this.$3z_3);
            this.$40_3 = false
        }
        try {
            if (isInstanceOfTypeAcrossFrames($p0, Mscrm.ContentPanel) && !IsNull(this.$B_3) && !this.$B_3._disposed) {
                if (!this.$B_3._disposed)
                    if (!this.$B_3.get_$1u_2()) this.$HP_3(this.$B_3);
                    else this.$B4_3(this.$B_3);
                this.$B_3 = null
            }
        } catch ($v_0) {
            if ($v_0.number !== -2146823277) throw $v_0
        }
    },
    $EA_3: function($p0) {
        var $v_0 = "unspecified";
        if (!IsNull($p0) && !IsNull($p0["mode"])) $v_0 = $p0["mode"];
        return $v_0
    },
    $BR_3: function($p0) {
        if (this.$2a_3) return;
        var $v_0 = this.$EA_3($p0);
        if (!($v_0 in this.$4Q_3)) {
            var $$t_2 = this;
            this.$4Q_3[$v_0] = window.setTimeout(function() { $$t_2.$J6_3($p0) }, 100)
        }
    },
    $J6_3: function($p0) {
        var $v_0 = Xrm.Internal.startMetricsStopwatch("Refresh Ribbon");
        $v_0.start();
        delete this.$4Q_3[this.$EA_3($p0)];
        isOutlookHostedWindow() &&
            Mscrm.SessionInfo.getOutlookMajorVersion() < 14 &&
            getOutlookHostedWindow().handleEvent(32, null, null);
        this.$Iz_3($p0);
        $v_0.stop()
    },
    $Iz_3: function($p0) {
        if (this.$2a_3) return;
        try {
            if (this.get_$Bi_3() && this.$B_3 && !this.$B_3._disposed)
                if (!this.$B_3.get_$1u_2()) this.$J0_3();
                else this.$Iy_3($p0);
            this.get_$Ec_3() && this.$E6_3();
            this.raiseEvent(20, null)
        } catch ($v_0) {
            if ($v_0.number !== -2146823277) throw $v_0
        }
    },
    $Iy_3: function($p0) {
        var $v_0 = this.$B_3;
        !CUI.ScriptUtility.isNullOrUndefined($v_0) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.$Q_0) &&
            $v_0.$S_3.refreshCommandBar($p0)
    },
    $E9_3: function() {
        var $v_0 = this.$B_3;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3) &&
            !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.$Q_0)) {
            $v_0.$S_3.get_commandBarBuildOptions().$2f_0 = this.get_numberOfButtonsForDisplay();
            $v_0.$S_3.get_commandBarBuildOptions().$u_0 = this.get_availableWidth();
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.get_chartsPaneCommandBarBuildOptions())) {
                $v_0.$S_3.get_chartsPaneCommandBarBuildOptions().$2f_0 = this.$8J_3;
                $v_0.$S_3.get_chartsPaneCommandBarBuildOptions().$u_0 = this.$3d_3
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.get_chartsDesignerCommandBarBuildOptions())) {
                $v_0.$S_3.get_chartsDesignerCommandBarBuildOptions().$2f_0 = this.$8I_3;
                $v_0.$S_3.get_chartsDesignerCommandBarBuildOptions().$u_0 = this.$3c_3
            }
            $v_0.$S_3.resizeCommandBar()
        }
    },
    $EM_3: function($p0, $p1) {
        if (!this.$Hq_3()) return;
        window.self.ChartCommandBarLoadStartTime = (new Date).getTime();
        if (IsNull(this.$1e_3[$p0]) || isNullOrEmptyString(this.$1e_3[$p0].innerHTML)) {
            this.$1e_3[$p0] = document.createElement("div");
            var $v_0 = this.$B_3, $v_1 = new Mscrm.CommandBarBuildOptions($v_0);
            $v_1.$u_0 = this.get_availableWidth();
            $v_1.$2f_0 = 3;
            if (!IsNull($v_0) && !IsNull($v_0.$S_3)) {
                $v_0.$S_3.buildChartCommandBar(this.$1e_3[$p0], $p0, $v_1);
                this.$6u_3 = true
            }
        }
        !IsNull($p1) && $p1.appendChild(this.$1e_3[$p0]);
        window.self.ChartCommandBarLoadEndTime = (new Date).getTime()
    },
    getChartCommandBarNode: function(commandMode) {
        if (!IsNull(this.$1e_3[commandMode])) return this.$1e_3[commandMode];
        return null
    },
    setChartDesignerCommandBar: function(chartCommandBar) { this.$EM_3(1, chartCommandBar) },
    setChartPaneCommandBar: function(chartCommandBar) { this.$EM_3(0, chartCommandBar) },
    $Hq_3: function() {
        if (IsNull(this.$B_3) ||
            this.$B_3._disposed ||
            this.$B_3.get_$97_2() ||
            !this.$B_3.get_$1u_2() ||
            !this.$B_3.$3K_2 ||
            this.$B_3.get_$6S_2() !== "HomePageGrid" ||
            Mscrm.SessionInfo.isOutlookClient()) return false;
        return true
    },
    $J0_3: function() {
        if (this.$B_3 && this.$B_3.get_$36_2()) {
            var $v_0 = this.$B_3.get_$36_2(), $v_1 = {}, $$dict_3 = this.$B_3.get_$5A_2();
            for (var $$key_4 in $$dict_3) {
                var $v_3 = { key: $$key_4, value: $$dict_3[$$key_4] };
                $v_1[$v_3.key] = $v_3.value
            }
            this.$B_3.$Cn_2();
            if ($v_0.$E_2) $v_0.$E_2.$1D_2 = false;
            $v_0.refresh();
            var $v_2 = null, $$dict_7 = this.$B_3.get_$5A_2();
            for (var $$key_8 in $$dict_7) {
                var $v_4 = { key: $$key_8, value: $$dict_7[$$key_8] };
                if ($v_4.value && !$v_1[$v_4.key]) {
                    $v_2 = $v_4.key;
                    break
                }
            }
            !isNullOrEmptyString($v_2) && $v_0.selectTabByCommand($v_2)
        }
    },
    $E6_3: function() {
        var $v_0 = this.get_$Aa_3(), $v_1 = {}, $v_2;
        if (!IsNull(this.$B_3) && !this.$B_3._disposed) $v_2 = this.$B_3.get_$AV_2();
        else $v_2 = {};
        var $v_3 = new Array(0), $$dict_8 = $v_2;
        for (var $$key_9 in $$dict_8) {
            var $v_4 = { key: $$key_9, value: $$dict_8[$$key_9] },
                $v_5 = $v_4.key,
                $v_6 = $v_0[$v_5],
                $v_7 = this.$B_3.isControlEnabled($v_5);
            $v_1[$v_5] = $v_7;
            if (IsNull($v_6) || $v_6 !== $v_7) $v_3[$v_3.length] = $v_5
        }
        this.$6s_3 = $v_1;
        getOutlookHostedWindow().handleEvent(32, null, null)
    },
    $JM_3: function($p0, $p1) {
        if (!IsNull(this.$B_3) && !IsNull(this.$B_3.get_$36_2()))
            if (!this.$B_3.get_$1u_2()) {
                var $v_0 = this.$B_3.get_$36_2();
                switch ($p0) {
                case 56:
                    $v_0.jumpToLastFocused($p1);
                    break;
                case 55:
                    $v_0.jumpToRibbonTab($p1);
                    break
                }
            } else if (this.$B_3.get_$1u_2() === 1) {
                var $v_1 = this.$B_3.get_$36_2();
                switch ($p0) {
                case 56:
                    $v_1.setLastFocused();
                    break;
                case 55:
                    $v_1.setFocus();
                    break
                }
            }
    },
    $6B_3: function($p0) {
        var $v_0 = 0, $v_1 = this.$B_3;
        if (CUI.ScriptUtility.isNullOrUndefined($v_1) || CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3)) return $v_0;
        if ($p0 === 2) {
            if (CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.$Q_0)) return $v_0;
            if (this.$2w_3 &&
                !CUI.ScriptUtility.isNullOrUndefined(this.get_parent()) &&
                !CUI.ScriptUtility.isNullOrUndefined(this.get_parent().get_element()) &&
                this.get_parent().get_element().offsetWidth) $v_0 = this.get_parent().get_element().offsetWidth;
            else $v_0 = this.get_width();
            $v_0 -= 20;
            var $v_2 = $P_CRM(this.get_element().parentNode).find(String.format("#{0}", "contextualActionBar"))[0];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) $v_0 -= $v_2.offsetWidth;
            return $v_0
        } else {
            if (!$p0 && CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.get_chartPaneCommandBar())) return $v_0;
            if ($p0 === 1 && CUI.ScriptUtility.isNullOrUndefined($v_1.$S_3.get_chartDesignerCommandBar())) return $v_0;
            if (!IsNull(this.$1e_3[$p0])) {
                var $v_3 = this.$1e_3[$p0].parentNode;
                if (!IsNull($v_3)) {
                    $v_0 = $v_3.offsetWidth;
                    $v_0 -= 10
                }
            }
            return $v_0
        }
    },
    $Fw_3: function() {
        if (this.$2a_3) {
            var $v_0 = this.$B_3;
            !CUI.ScriptUtility.isNullOrUndefined($v_0) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.$Q_0) &&
                $v_0.$S_3.$Q_0.$CU_4(.1)
        }
    },
    $CX_3: function() {
        if (this.$2a_3) {
            this.$2a_3 = false;
            var $v_0 = this.$B_3;
            !CUI.ScriptUtility.isNullOrUndefined($v_0) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3) &&
                !CUI.ScriptUtility.isNullOrUndefined($v_0.$S_3.$Q_0) &&
                $v_0.$S_3.$Q_0.$CW_4(false)
        }
    },
    closeAllMenu: function(commandBarData) {
        if (IsNull(commandBarData)) return;
        var $v_0 = commandBarData.$S_3;
        if (!IsNull($v_0)) {
            !IsNull($v_0.$Q_0) && $v_0.$Q_0.closeAllMenus();
            !IsNull($v_0.get_chartPaneCommandBar()) && $v_0.get_chartPaneCommandBar().closeAllMenus();
            !IsNull($v_0.get_chartDesignerCommandBar()) && $v_0.get_chartDesignerCommandBar().closeAllMenus()
        }
    }
};
Mscrm.RibbonNavigationModel = function() {};
Mscrm.RibbonNavigationModel
    .isContextualGroupForAssociatedGrid = function($p0) { return Mscrm.RibbonNavigationModel.$8o.test($p0) };
Mscrm.RibbonNavigationModel.shouldContextGroupBeShown = function($p0, $p1) {
    if (Mscrm.RibbonNavigationModel.$Bv.test($p0.command)) {
        var $v_0 = $p1._currentSelectedControl;
        if ($v_0 && Mscrm.IGridControl.isInstanceOfType($v_0)) {
            var $v_1 = parseInt($v_0.GetParameter("relationshipType"), 10);
            return $v_1 === $p0.relationshipType
        }
    }
    return true
};
Mscrm.RibbonNavigationModel.shouldTabBeShown = function($p0, $p1, $p2) {
    var $$dict_6 = $p2.get_$Ef_2();
    for (var $$key_7 in $$dict_6) {
        var $v_0 = { key: $$key_7, value: $$dict_6[$$key_7] }, $v_1 = $v_0.value;
        if ($v_1.TabCommand === $p0) {
            var $v_2 = new Mscrm.CommandInformation;
            $v_2.command = $v_1.ContextGroupCommand;
            $v_2.entityContext = $p1.entityContext;
            $v_2.entityLogicalName = $p1.entityLogicalName;
            $v_2.relationshipType = $p1.relationshipType;
            return Mscrm.RibbonNavigationModel.shouldContextGroupBeShown($v_2, $p2)
        }
    }
    return true
};
Mscrm.RibbonNavigationModel.onTabSwitch = function($p0, $p1, $p2, $p3) {
    if ($p3) {
        if (isNullOrEmptyString($p0)) $p0 = $p2.get_$Hd_2();
        var $v_0 = $p2.get_$Ef_2()[$p0], $v_1 = $p2.get_$Ef_2()[$p1];
        if ($v_0 && $v_1) {
            var $v_2 = $v_0.ContextualGroupId || "", $v_3 = $v_1.ContextualGroupId || "";
            if (Mscrm.RibbonNavigationModel.$AK.test($v_2) && !Mscrm.RibbonNavigationModel.$AK.test($v_3)) {
                var $v_4 = window.frames[0].window, $v_5 = $v_4.location.pathname.toUpperCase();
                if (!$v_5.endsWith("/ADVFIND.ASPX")) setSelectedControl(null);
                else $v_4.ShowQuery(null)
            }
            if ((Mscrm.RibbonNavigationModel.$8o.test($v_2) || $p0 === "Mscrm.DocumentsTab") &&
                !Mscrm.RibbonNavigationModel.$8o.test($v_3)) {
                var $v_6 = $find("crmContentPanel"), $v_7 = 0;
                while (true) {
                    var $v_8 = $v_6.get_contentWindow().document.getElementById("tab" + $v_7 + "Tab");
                    if ($v_8) {
                        if ($v_8.parentNode.style.visibility !== "hidden" && $v_8.parentNode.style.display !== "none") {
                            $v_6.get_contentWindow()._initialTabId = $p1;
                            window.setTimeout(function() { Mscrm.Utilities.click($v_8) }, 0);
                            break
                        }
                    } else break;
                    $v_7++
                }
            }
        }
    }
};
Mscrm.CommandData = function() {
    this.$AH_2 = new Array(0);
    Mscrm.CommandData.initializeBase(this)
};
Mscrm.CommandData.prototype = {
    $V_2: null,
    $A9_2: false,
    $28_2: null,
    $5d_2: null,
    $2P_2: null,
    $6f_2: null,
    $5w_2: null,
    $AJ_2: "",
    $AI_2: 0,
    $AG_2: 0,
    $9c_2: "",
    $2Q_2: null,
    $2x_2: false,
    $3K_2: false,
    _currentSelectedControl: null,
    get_serverInformation: function() { return this.$V_2 },
    set_serverInformation: function(value) {
        this.$V_2 = value;
        return value
    },
    $9b_2: null,
    get_$FT_2: function() {
        if (!IsNull(this.$V_2)) return this.$V_2.CommandIds;
        return new Array(0)
    },
    get_$97_2: function() {
        if (!IsNull(this.$V_2)) return this.$V_2.IsDefaultData;
        return false
    },
    get_$50_2: function() {
        if (IsNull(this.$28_2)) {
            var $v_0 = this.$5d_2 + "_CommandHandler";
            this.$28_2 = new Mscrm.CommandHandler($v_0, this, this.get_$FT_2())
        }
        return this.$28_2
    },
    get_$BK_2: function() { return this.$2P_2 },
    get_$EH_2: function() {
        if (!IsNull(this._currentSelectedControl)) return this._currentSelectedControl.get_selectedRecordCount();
        return 0
    },
    get_$Ir_2: function() {
        var $v_0 = this.$2P_2;
        try {
            return $v_0.get_selectedRecordCount()
        } catch ($$e_1) {
            return 0
        }
    },
    get_$6S_2: function() {
        if (!IsNull(this._currentSelectedControl)) return this._currentSelectedControl.get_ribbonContextType();
        return null
    },
    get_$EF_2: function() {
        if (!IsNull(this._currentSelectedControl)) return this._currentSelectedControl.get_entityTypeCode();
        return 0
    },
    get_$EG_2: function() {
        if (!IsNull(this._currentSelectedControl)) return this._currentSelectedControl.get_entityTypeName();
        return null
    },
    get_$Iq_2: function() {
        var $v_0 = this.$2P_2;
        try {
            return $v_0.get_ribbonContextType()
        } catch ($$e_1) {
            return null
        }
    },
    get_$E2_2: function() {
        var $v_0 = this.$2P_2;
        try {
            return $v_0.get_entityTypeCode()
        } catch ($$e_1) {
            return 0
        }
    },
    get_$E3_2: function() {
        var $v_0 = this.$2P_2;
        try {
            return $v_0.get_entityTypeName()
        } catch ($$e_1) {
            return null
        }
    },
    get_permanentlySelectedControl: function() { return this.$5w_2 },
    set_permanentlySelectedControl: function(value) {
        if (!Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl")) this.$5w_2 = value;
        this.setCurrentSelectedControl(value);
        return value
    },
    get_selectedControl: function() { return this._currentSelectedControl },
    get_$EI_2: function() {
        if (!IsNull(this._currentSelectedControl)) return this._currentSelectedControl.get_selectedIds();
        return null
    },
    get_$BL_2: function() {
        var $v_0 = this.$2P_2;
        try {
            return $v_0.get_selectedIds()
        } catch ($$e_1) {
            return new Array(0)
        }
    },
    get_primaryControl: function() { return this.$2P_2 },
    set_primaryControl: function(value) {
        this.$2P_2 = value;
        return value
    },
    setCurrentSelectedElement: function(element) {
        this.$6f_2 = element;
        this.setCurrentSelectedControl($find(element.id))
    },
    setCurrentSelectedControl: function(control) {
        this._currentSelectedControl = control;
        if (!IsNull(control)) this.$6f_2 = $get(control.get_id());
        else this.$6f_2 = null;
        this.setSelectedControlValues(control)
    },
    setSelectedControlValues: function(control) {
        var $v_0 = "", $v_1 = 0, $v_2 = 0, $v_3 = new Array(0), $v_4 = "";
        if (control && Mscrm.IRibbonSelectionControl.isInstanceOfType(control)) {
            $v_0 = control.get_entityTypeName();
            $v_1 = control.get_entityTypeCode();
            $v_2 = control.get_selectedRecordCount();
            $v_3 = control.get_selectedIds();
            $v_4 = control.get_id()
        }
        var $v_5 = this.$AJ_2 !== $v_0 ||
            this.$AI_2 !== $v_1 ||
            this.$AG_2 !== $v_2 ||
            this.$AH_2.length !== $v_3.length ||
            this.$9c_2 !== $v_4;
        this.$AJ_2 = $v_0;
        this.$AI_2 = $v_1;
        this.$AG_2 = $v_2;
        this.$AH_2 = $v_3;
        this.$9c_2 = $v_4;
        var $v_6 = false;
        try {
            var $v_7 = control;
            if (!IsNull($v_7)) $v_6 = true
        } catch ($$e_9) {
            $v_6 = false
        }
        ($v_6 || $v_5) && this.$2Q_2 && this.raiseEvent(32, null)
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIComponent.prototype.dispose.call(this)
    },
    initialize: function() { Mscrm.CrmUIComponent.prototype.initialize.call(this) },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        switch (eventCode) {
        case 9:
            this.$BM_2(parameters, sourceComponent, false, false);
            break;
        case 101:
            this.$BM_2(parameters, sourceComponent, true, false);
            break;
        case 29:
            this.$BM_2(parameters, sourceComponent, false, true);
            break;
        case 87:
            if ($find("crmPageManager") === sourceComponent) {
                if (!this.get_$97_2()) this.$3K_2 = false;
                this.raiseEvent(35, null)
            }
            break;
        case 45:
            if ($find(sourceComponent.get_id()) === sourceComponent)
                if (sourceComponent === this.$2P_2 && this.$2Q_2) this.raiseEvent(32, null);
                else sourceComponent === this._currentSelectedControl && this.setSelectedControlValues(sourceComponent);
            break;
        case 38:
            this.setSelectedControl(parameters);
            break;
        case 39:
            this.handleRibbonTabSwitch(parameters);
            break
        }
        return null
    },
    setSelectedControl: function(parameters) {
        if (IsNull(this.$5w_2)) {
            var $v_0 = parameters["selectedControl"];
            this.setCurrentSelectedControl($v_0)
        }
    },
    getDynamicMenuRibbonFromCommand: function(command, properties) {
        if (this.isControlEnabled(command)) {
            if (!properties) properties = {};
            this.get_$50_2().handleCommand(command, properties, 0);
            return properties["PopulationXML"]
        }
        return null
    },
    areControlsVisible: function(commands, ids) {
        for (var $v_0 = "", $v_1 = 0;
            $v_1 < commands.length;
            $v_1++
        ) $v_0 += this.isControlVisible(commands[$v_1], ids[$v_1]) ? "1" : "0";
        return $v_0
    },
    isControlVisible: function(command, id) {
        try {
            return !IsNull(this.get_$AV_2()[command]) && IsNull(this.get_$Ja_2()[id])
        } catch ($$e_2) {
            return false
        }
    },
    hasAssociatedGridContext: function() {
        if (!IsNull(this.$V_2) && !IsNull(this.$V_2.TabList))
            for (var $v_0 = this.$V_2.TabList, $v_1 = this.get_$Ef_2(), $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
                var $v_3 = $v_1[$v_0[$v_2].TabId];
                if ($v_3 &&
                    $v_3.IsContextual &&
                    !isNullOrEmptyString($v_3.ContextualGroupId) &&
                    Mscrm.RibbonNavigationModel.isContextualGroupForAssociatedGrid($v_3.ContextualGroupId)) return true
            }
        return false
    },
    areControlsEnabled: function(commands, parentCommands, ids) {
        for (var $v_0 = "", $v_1 = 0;
            $v_1 < commands.length;
            $v_1++
        )
            $v_0 += !this.isControlVisible(commands[$v_1], ids[$v_1]) ||
                !IsNull(parentCommands[$v_1]) && !this.isControlEnabled(parentCommands[$v_1])
                ? "0"
                : this.isControlEnabled(commands[$v_1]) ? "1" : "0";
        return $v_0
    },
    isControlEnabled: function(command) {
        return !IsNull(this.get_$AV_2()[command]) && this.get_$50_2().canHandleCommand(command)
    },
    isControlInCommandLayout: function(command) { return false },
    $Cn_2: function() {
        var $$dict_1 = this.get_$5A_2();
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            this.get_$50_2().canHandleCommand($v_0.key)
        }
    },
    executeCommand: function(command, properties) {
        if (this.isControlEnabled(command)) {
            if (!properties) properties = {};
            this.get_$50_2().handleCommand(command, properties, 0)
        }
    },
    initializeRefreshHandler: function() { return },
    $3Y_2: false,
    get_isClientApiInitialized: function() {
        var $v_0 = window.XrmAccess,
            $v_1 = !IsNull(Xrm.Page.data) &&
                !IsNull(Xrm.Page.data.entity) &&
                !!Xrm.Page.data.entity.attributes.getLength();
        window.XrmAccess = $v_0;
        return $v_1
    },
    $BM_2: function($p0, $p1, $p2, $p3) {
        if ((!$p3 || !this.$A9_2) && ($find("crmPageManager") === $p1 || $find("crmInlinePageManager") === $p1)) {
            var $v_0 = null;
            if (!IsNull($p0)) $v_0 = $p0["sourceUri"];
            if (!IsNull($v_0) && !$v_0.compare(Mscrm.Utilities.getContentUrl(null), true, 5)) return;
            var $v_1 = (Mscrm.InternalUtilities.Utilities.isRefreshForm() && $p2 ||
                    !Mscrm.InternalUtilities.Utilities.isRefreshForm() && !$p2 ||
                    Mscrm.InternalUtilities.Utilities.isTurboForm()) &&
                !$p3;
            if ($v_1) {
                this.initializeRefreshHandler();
                this.raiseEvent(35, $p0)
            } else if ($p3) {
                this.$A9_2 = true;
                this.raiseEvent(36, null);
                this.dispose()
            }
        }
    }
};

function loadCommandData(commandBarId) {
    var $v_0 = $find("crmRibbonData");
    if (!IsNull($v_0)) {
        var $v_1 = Mscrm.CommandLayout;
        $v_0.$Dg_3($v_1[commandBarId])
    }
}

Mscrm.CommandBarData = function() {
    this.$$d_reloadCommandBar = Function.createDelegate(this, this.reloadCommandBar);
    Mscrm.CommandBarData.initializeBase(this)
};
Mscrm.CommandBarData.$Dh = function($p0, $p1) {
    var $$dict_6 = $p0;
    for (var $$key_7 in $$dict_6) {
        var $v_0 = { key: $$key_7, value: $$dict_6[$$key_7] };
        if (IsNull($p1[$v_0.key])) $p1[$v_0.key] = $v_0.value;
        else {
            var $$dict_4 = $v_0.value;
            for (var $$key_5 in $$dict_4) {
                var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] };
                $p1[$v_0.key][$v_1.key] = $v_1.value
            }
        }
    }
};
Mscrm.CommandBarData.prototype = {
    $1o_3: null,
    $1W_3: null,
    $7k_3: null,
    $7m_3: null,
    $S_3: null,
    $7C_3: null,
    $5E_3: null,
    $4p_3: null,
    initialize: function() {
        Mscrm.CommandData.prototype.initialize.call(this);
        this.$7k_3 = {};
        this.$7m_3 = {};
        var $v_0 = Mscrm.CommandLayout, $$dict_2 = $v_0;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            this.$Dg_3($v_1.value)
        }
        this.initializeRefreshHandler()
    },
    isDocumentTab: function() {
        return !IsNull(this.$V_2) && !IsNull(this.$V_2.InitialTabId) && this.$V_2.InitialTabId === "Mscrm.DocumentsTab"
    },
    $Dg_3: function($p0) {
        if (IsNull(this.$5E_3)) {
            Mscrm.RibbonCommands.commands = $p0.commands;
            var $$dict_5 = $p0.commands;
            for (var $$key_6 in $$dict_5) {
                var $v_0 = { key: $$key_6, value: $$dict_5[$$key_6] };
                if ($v_0.key === "null") continue;
                var $$dict_3 = $v_0.value;
                for (var $$key_4 in $$dict_3) {
                    var $v_1 = { key: $$key_4, value: $$dict_3[$$key_4] };
                    Mscrm.RibbonCommands.commands["null"][$v_1.key] = $v_1.value
                }
            }
            Mscrm.RibbonCommands.enableRules = $p0.rules;
            this.$5E_3 = $p0.layout
        } else {
            Mscrm.CommandBarData.$Dh($p0.commands, Mscrm.RibbonCommands.commands);
            Mscrm.CommandBarData.$Dh($p0.rules, Mscrm.RibbonCommands.enableRules);
            this.$I0_3($p0.layout)
        }
    },
    $I0_3: function($p0) {
        var $v_0 = this.$5E_3.children[0],
            $v_1 = $v_0.children[0],
            $v_2 = $v_0.children[1],
            $v_3 = $p0.children[0],
            $v_4 = $v_3.children[0],
            $v_5 = $v_3.children[1];
        this.$Di_3($v_1, $v_4);
        this.$Di_3($v_2, $v_5)
    },
    $Di_3: function($p0, $p1) {
        for (var $v_0 = $p0.name === "ContextualTabs", $v_1 = {}, $v_2 = 0; $v_2 < $p0.children.length; $v_2++) {
            var $v_3 = CUI.DataNodeWrapper.getNodeAttribute($p0.children[$v_2], "Id"),
                $v_4 = CUI.DataNodeWrapper.getNodeAttribute($p0.children[$v_2], "Command"),
                $v_5;
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_4)) $v_5 = $v_3 + $v_4;
            else $v_5 = $v_3;
            if ($v_0) {
                var $v_6 = CUI.DataNodeWrapper.getNodeChildren($p0.children[$v_2]), $v_7 = this.$DA_3($v_6);
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_7)) $v_5 = $v_5 + $v_7
            }
            $v_1[$v_5] = $p0.children[$v_2]
        }
        for (var $v_8 = 0; $v_8 < $p1.children.length; $v_8++) {
            var $v_9 = CUI.DataNodeWrapper.getNodeAttribute($p1.children[$v_8], "Id"),
                $v_A = CUI.DataNodeWrapper.getNodeAttribute($p1.children[$v_8], "Command"),
                $v_B;
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_A)) $v_B = $v_9 + $v_A;
            else $v_B = $v_9;
            if ($v_0) {
                var $v_C = CUI.DataNodeWrapper.getNodeChildren($p1.children[$v_8]), $v_D = this.$DA_3($v_C);
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_D)) $v_B = $v_B + $v_D
            }
            if (!($v_B in $v_1)) $p0.children = $p0.children.concat($p1.children[$v_8])
        }
    },
    $DA_3: function($p0) {
        var $v_0 = "", $v_1 = $p0;
        while (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1.length > 0 && isNullOrEmptyString($v_0)) {
            $v_0 = CUI.DataNodeWrapper.getNodeAttribute($v_1[0], "Command");
            var $v_2 = new CUI.DataNodeWrapper($v_1[0]);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) $v_1 = $v_2.get_children();
            else $v_1 = null
        }
        return $v_0
    },
    get_commandLayout: function() { return this.$5E_3 },
    set_commandLayout: function(value) {
        this.$5E_3 = value;
        return value
    },
    get_$1u_2: function() { return 1 },
    get_$36_2: function() {
        if (!IsNull(this.$S_3)) return this.$S_3.$Q_0;
        return null
    },
    get_$5A_2: function() { return {} },
    get_$FZ_2: function() { return {} },
    get_$Hd_2: function() { return "Mscrm.CommandBar" },
    set_$Hd_2: function($p0) {
        return $p0;
        return $p0
    },
    get_isEmpty: function() {
        var $v_0 = Mscrm.CommandLayout;
        if (IsNull($v_0)) return true;
        return false
    },
    get_$Ef_2: function() { return {} },
    handleRibbonTabSwitch: function(parameters) {},
    get_$Ja_2: function() {
        if (IsNull(this.$1o_3)) {
            this.$1o_3 = {};
            if (!IsNull(this
                    .$V_2) &&
                !IsNull(this.$V_2.TrimList))
                for (var $v_0 = this.$V_2.TrimList, $v_1 = 0; $v_1 < $v_0.length; $v_1++) this.$1o_3[$v_0[$v_1]] = true
        }
        return this.$1o_3
    },
    setSelectedControl: function(parameters) {
        Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.DataSetControl") &&
            Mscrm.CommandData.prototype.setSelectedControl.call(this, parameters)
    },
    get_$AV_2: function() {
        if (!this.$1W_3) {
            var $v_0 = {};
            if (!IsNull(this
                    .$V_2) &&
                !IsNull(this.$V_2.CommandIds))
                for (var $v_1 = 0; $v_1 < this.$V_2.CommandIds.length; $v_1++) $v_0[this.$V_2.CommandIds[$v_1]] = true;
            this.$1W_3 = $v_0
        }
        return this.$1W_3
    },
    get_$DX_3: function() {
        if (this
            .get_$6S_2() ===
            "SubGridAssociated" ||
            this.get_$6S_2() === "SubGridStandard" ||
            this.isDocumentTab()) return true;
        else return false
    },
    get_$4D_3: function() {
        if (this.get_$6S_2() === "SubGridAssociated" || this.isDocumentTab()) return true;
        else return false
    },
    get_toggleButtonState: function() {
        if (IsNull(this.$7C_3)) this.$7C_3 = {};
        return this.$7C_3
    },
    set_toggleButtonState: function(value) {
        this.$7C_3 = value;
        return value
    },
    reloadCommandBar: function() {
        if (typeof Mscrm.ClientApiConstants != "undefined" && !IsNull("PrimaryEntity")) {
            var $v_0 = $find("PrimaryEntity");
            if (IsNull($v_0)) return;
            if (isNullOrEmptyString($v_0.get_recordId())) return;
            var $v_1 = $v_0.get_typeName(),
                $v_2 = $find("crmFormSelector"),
                $v_3 = new RemoteCommand("Ribbon", "ReloadCommandBar"),
                $v_4 = "";
            if (!IsNull($v_2)) $v_4 = $v_2.get_currentFormId();
            else if (!IsNull(window.RecordData)) {
                var $v_7 = window.RecordData._formId;
                if (!IsNull($v_7)) $v_4 = $v_7.toString()
            }
            $v_3.SetParameter("hierarchyLocation", $v_4);
            $v_3.SetParameter("entityLogicalName", $v_1);
            $v_3.SetParameter("ribbonContext", "Form");
            $v_3.SetParameter("pageId", window.location.href.toString().toUpperCase());
            $v_3.SetParameter("recordId", $v_0.get_recordId());
            $v_3.SetParameter("formState", $v_0.get_formState());
            var $v_5 = Xrm.Page.data.process.getActiveProcess();
            if (!CUI.ScriptUtility.isNullOrUndefined($v_5)) {
                var $v_8 = $v_5.getStatus();
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_8)) {
                    var $v_9 = $v_8 === Xrm.BusinessProcessFlowInstanceStatus.toString(1) ? (1).toString() : "0";
                    $v_3.SetParameter("status", $v_9)
                }
            }
            if (!IsNull(window.RecordData)) {
                var $v_A = Mscrm.CrmUri.create(window.RecordData["_formlayoutUrl"]);
                Mscrm.PerceivedCommandBarHelper.addFormPerceivedCommandBar($v_A, true)
            }
            var $v_6 = $v_3.Execute();
            if ($v_6.Success) {
                var $v_B = Sys.Serialization.JavaScriptSerializer.deserialize($v_6.ReturnValue.toString());
                this.$V_2 = $v_B;
                this.$1o_3 = null;
                this.$1W_3 = null;
                this.$3K_2 = false;
                this.$2x_2 = true;
                this.$2Q_2.$Dc_3(this, null)
            }
        }
    },
    isControlInCommandLayout: function(command) {
        for (var $v_0 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
                     .getFirstChildNodeWithName(CUI.DataNodeWrapper
                         .getFirstChildNodeWithName(this.get_commandLayout(), "CommandBar"),
                         "ContextualTabs")),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++)
            for (var $v_2 = CUI.DataNodeWrapper
                         .getNodeChildren(CUI.DataNodeWrapper.getFirstChildNodeWithName($v_0[$v_1], "Groups")),
                $v_3 = 0;
                $v_3 < $v_2.length;
                $v_3++) {
                for (var $v_4 = new CUI.DataNodeWrapper($v_2[$v_3]), $v_5 = null, $v_7 = 0;
                    $v_7 < $v_4.get_children().length;
                    $v_7++)
                    if ($v_4.get_children()[$v_7].name === "Controls") {
                        $v_5 = $v_4.get_children()[$v_7];
                        break
                    }
                if (CUI.ScriptUtility
                    .isNullOrUndefined($v_5)) throw Error.create("No Controls node found in this Group tag.");
                for (var $v_6 = CUI.DataNodeWrapper.getNodeChildren($v_5), $v_8 = 0; $v_8 < $v_6.length; $v_8++) {
                    var $v_9 = $v_6[$v_8].attrs;
                    if ($v_9["Command"] === command) return true
                }
            }
        return false
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(Mscrm)) {
            !IsNull(Mscrm.CommandLayout) && Mscrm.Utilities.destroyObject(Mscrm.CommandLayout);
            if (!IsNull(Mscrm.RibbonCommands)) {
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands.commands);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands.enableRules);
                Mscrm.Utilities.destroyObject(Mscrm.RibbonCommands)
            }
            delete Mscrm.CommandLayout;
            delete Mscrm.RibbonCommands
        }
        if (typeof Mscrm.ClientApiConstants != "undefined" && !IsNull("PrimaryEntity")) {
            var $v_0 = $find("PrimaryEntity");
            if ($v_0 && this.get_id() !== "SubGridCommandBarData" && !IsNull(this.$4p_3)) {
                $v_0.removeOnRecordIdChanged(this.$4p_3);
                this.$4p_3 = null
            }
        }
        Mscrm.CommandData.prototype.dispose.call(this)
    },
    initializeRefreshHandler: function() {
        if (!IsNull(this.$4p_3)) return;
        if (typeof Mscrm.ClientApiConstants != "undefined" && !IsNull("PrimaryEntity")) {
            var $v_0 = $find("PrimaryEntity");
            if ($v_0 && this.get_id() !== "SubGridCommandBarData") {
                var $$t_2 = this;
                this.$4p_3 = function($p1_0) { $$t_2.$2Q_2 && $$t_2.$2Q_2.$E7_3() };
                $v_0.addOnRecordIdChanged(this.$4p_3, false)
            }
        }
        return
    },
    isControlEnabled: function(command) {
        var $v_0 = window.XrmAccess, $v_1 = !this.get_isClientApiInitialized();
        if ($v_1) {
            window.XrmAccess = false;
            window.XrmDataProperty = window.Xrm;
            if (!window.XrmAccess)
                try {
                    Object.defineProperty(window,
                        "Xrm",
                        {
                            "get": function() {
                                window.XrmAccess = true;
                                return window.XrmDataProperty
                            },
                            "set": function(val) {
                                window.XrmAccess = true;
                                window.XrmDataProperty = val
                            },
                            configurable: true,
                            enumerable: false
                        })
                } catch ($$e_3) {
                    window.Xrm = window.XrmDataProperty;
                    $v_1 = false
                }
            window.XrmAccess = false
        }
        try {
            return Mscrm.CommandData.prototype.isControlEnabled.call(this, command)
        } catch ($v_2) {
            if (!$v_1 || !window.XrmAccess) throw $v_2;
            else return false
        } finally {
            if ($v_1) {
                this.$3Y_2 = window.XrmAccess;
                window.XrmAccess = $v_0
            }
        }
    }
};
Type.registerNamespace("CUI");
CUI.IRootBuildClient = function() {};
CUI.IRootBuildClient.registerInterface("CUI.IRootBuildClient");
CUI.CommandType = function() {};
CUI.CommandType.prototype = {
    general: 1,
    tabSelection: 2,
    optionSelection: 3,
    menuCreation: 4,
    preview: 5,
    previewRevert: 6,
    optionPreview: 7,
    optionPreviewRevert: 8,
    ignoredByMenu: 9,
    menuClose: 10,
    rootEvent: 11
};
CUI.CommandType.registerEnum("CUI.CommandType", false);
CUI.ISelectableControl = function() {};
CUI.ISelectableControl.registerInterface("CUI.ISelectableControl");
CUI.QueryRecord = function() {};
CUI.DataQueryType = function() {};
CUI.DataQueryType.prototype = { none: 0, all: 1, ribbonVisibleTabDeep: 2, ribbonShallow: 3, ribbonTab: 4, root: 5 };
CUI.DataQueryType.registerEnum("CUI.DataQueryType", false);
CUI.GalleryElementDimensions = function() {};
CUI.GalleryElementDimensions.prototype = {
    size16by16: 1,
    size32by32: 2,
    size48by48: 3,
    size64by48: 4,
    size72by96: 5,
    size96by72: 6,
    size96by96: 7,
    size128by128: 8,
    size190by30: 9,
    size190by40: 10,
    size190by50: 11,
    size190by60: 12
};
CUI.GalleryElementDimensions.registerEnum("CUI.GalleryElementDimensions", false);
CUI.IMenuItem = function() {};
CUI.IMenuItem.registerInterface("CUI.IMenuItem");
CUI.ContextualColor = function() {};
CUI.ContextualColor.prototype = {
    none: 0,
    darkBlue: 1,
    lightBlue: 2,
    teal: 3,
    orange: 4,
    green: 5,
    magenta: 6,
    yellow: 7,
    purple: 8
};
CUI.ContextualColor.registerEnum("CUI.ContextualColor", false);
CUI.DeclarativeTemplateBuildContext = function() {};
CUI.CommandInformation = function() {
    this.CommandId = null;
    this.RootId = null;
    this.TabId = null;
    this.RootType = null;
    this.RootLocation = null
};
CUI.IModalController = function() {};
CUI.IModalController.registerInterface("CUI.IModalController");
CUI.Direction = function() {};
CUI.Direction.prototype = { LTR: 0, RTL: 1 };
CUI.Direction.registerEnum("CUI.Direction", false);
CUI.DisabledCommandInfoProperties = function() {
    this.Description = null;
    this.Title = null;
    this.Icon = null;
    this.IconClass = null;
    this.IconTop = null;
    this.IconLeft = null;
    this.HelpKeyWord = null
};
CUI.ImgContainerType = function() {};
CUI.ImgContainerType.prototype = { div: 1, span: 2, anchor: 3 };
CUI.ImgContainerType.registerEnum("CUI.ImgContainerType", false);
CUI.ImgContainerSize = function() {};
CUI.ImgContainerSize.prototype = {
    none: 0,
    size5by3: 1,
    size13by13: 2,
    size16by16: 3,
    size32by32: 4,
    size48by48: 5,
    size64by48: 6,
    size72by96: 7,
    size96by72: 8,
    size96by96: 9,
    size56by24: 10,
    size2by16: 11
};
CUI.ImgContainerSize.registerEnum("CUI.ImgContainerSize", false);
CUI.PMarker = function() {};
CUI.PMarker.prototype = {
    beginSession: 1,
    endSession: 2,
    perfCUIRibbonInitStart: 7103,
    perfCUIRibbonInitPercvdEnd: 7104,
    perfCUIRibbonTabSwitchWarmStart: 7105,
    perfCUIRibbonTabSwitchWarmPercvdEnd: 7106,
    perfCUIRibbonTabSwitchWarmEnd: 7107,
    perfCUIRibbonCompleteConstruction: 7108,
    perfCUIRibbonQueryDataStart: 7109,
    perfCUIRibbonQueryDataEnd: 7110,
    perfWSSWikiUpdatePanelStart: 7111,
    perfWSSWikiUpdatePanelEnd: 7112,
    perfWSSWebPartComponentMouseClickStart: 7186,
    perfWSSWebPartComponentMouseClickEnd: 7187,
    perfCUIAddAndPositionBackFrameStart: 7188,
    perfCUIAddAndPositionBackFrameEnd: 7189,
    perfCUIFlyoutAnchorOnClickStart: 7190,
    perfCUIFlyoutAnchorOnClickEnd: 7191,
    perfCUIDropDownOnArrowButtonClickStart: 7192,
    perfCUIDropDownOnArrowButtonClickEnd: 7193,
    perfWSSBreadcrumbStart: 7386,
    perfWSSBreadcrumbEnd: 7387,
    perfWSSSelectOrDeselectAllStart: 7388,
    perfWSSSelectOrDeselectAllEnd: 7389,
    perfWSSSelectItemStart: 7390,
    perfWSSSelectItemEnd: 7391,
    perfWSSFilterSortStart: 7392,
    perfWSSFilterSortEnd: 7393,
    perfWSSMMUOpenStart: 7394,
    perfWSSMMUOpenEnd: 7395,
    perfWSSECBClickStart: 7396,
    perfWSSECBClickEnd: 7397,
    perfSPSSaveStatusNoteBegin: 7634,
    perfSPSSaveStatusNoteEnd: 7635,
    perfWSSCalendarRenderStart: 7644,
    perfWSSCalendarRenderEnd: 7645,
    perfPLTxInstrumentStart: 7698,
    perfPLTxInstrumentEnd: 7699,
    perfCUIRibbonButtonOnClickStart: 7700,
    perfCUIRibbonButtonOnClickEnd: 7701,
    perfCUIRibbonInsertTableOnClickStart: 7702,
    perfCUIRibbonInsertTableOnClickEnd: 7703,
    perfCUIRibbonToggleButtonOnClickStart: 7704,
    perfCUIRibbonToggleButtonOnClickEnd: 7705,
    perfWSSDialogShow: 7706,
    perfWSSDialogClosed: 7707,
    perfWSSRTEDialogOnLoadEnd: 7708,
    perfWSSRTEDialogOnOkButtonClickStart: 7709,
    perfWSSRTEAutoCompleteSetResultsStart: 7710,
    perfWSSRTEAutoCompleteSetResultsEnd: 7711,
    perfCUIRibbonEditWikiPageStart: 7735,
    perfCUIRibbonEditWikiPageEnd: 7736
};
CUI.PMarker.registerEnum("CUI.PMarker", false);
CUI.BuildOptions = function() {};
CUI.BuildOptions.prototype = {
    lazyMenuInit: false,
    trimmedIds: null,
    attachToDOM: false,
    validateServerRendering: false,
    fixedPositioningEnabled: false,
    dataExtensions: null,
    clientID: null
};
CUI.BuildContext = function() {};
CUI.DataNodeWrapper = function($p0) { this.$b_0 = $p0 };
CUI.DataNodeWrapper.getFirstChildNodeWithName = function($p0, $p1) {
    for (var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_1 = $v_0.length, $v_2 = null, $v_3 = 0;
        $v_3 < $v_1;
        $v_3++) {
        $v_2 = $v_0[$v_3];
        var $v_4 = $v_2.name;
        if ($v_4 === $p1) return $v_2
    }
    return null
};
CUI.DataNodeWrapper.getNodeName = function($p0) { return $p0.name };
CUI.DataNodeWrapper.getNodeChildren = function($p0) {
    var $v_0 = $p0.children;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return CUI.DataNodeWrapper.get_$G0();
    return $v_0
};
CUI.DataNodeWrapper.get_$G0 = function() {
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.DataNodeWrapper.$9M)) CUI.DataNodeWrapper.$9M = [];
    return CUI.DataNodeWrapper.$9M
};
CUI.DataNodeWrapper.getNodeAttributes = function($p0) { return $p0.attrs };
CUI.DataNodeWrapper.getNodeAttribute = function($p0, $p1) {
    var $v_0 = $p0.attrs;
    return $v_0[$p1]
};
CUI.DataNodeWrapper.prototype = {
    $b_0: null,
    get_node: function() { return this.$b_0 },
    set_node: function($p0) {
        this.$b_0 = $p0;
        return $p0
    },
    get_name: function() { return CUI.DataNodeWrapper.getNodeName(this.$b_0) },
    get_children: function() { return CUI.DataNodeWrapper.getNodeChildren(this.$b_0) },
    get_attributes: function() { return CUI.DataNodeWrapper.getNodeAttributes(this.$b_0) },
    get_hasChildren: function() { return CUI.DataNodeWrapper.getNodeChildren(this.$b_0).length > 0 }
};
CUI.Builder = function(options, elmPlaceholder, rootBuildClient) {
    this.$$d_$Ft_0 = Function.createDelegate(this, this.$Ft_0);
    this.$$d_$BH_0 = Function.createDelegate(this, this.$BH_0);
    this.$16_0 = options;
    if (CUI.ScriptUtility.isNullOrUndefined(this.$16_0.trimmedIds)) this.$16_0.trimmedIds = {};
    this._elmPlaceholder = elmPlaceholder;
    this.$1l_0 = rootBuildClient;
    this.$2N_0 = this.$$d_$BH_0;
    $addHandler(window, "unload", this.$2N_0)
};
CUI.Builder.$CK = function($p0) {
    var $v_0 = CUI.NativeUtility.createXMLDocFromString($p0);
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return null;
    return CUI.Builder.$Fb($v_0)
};
CUI.Builder.$Fb = function($p0) { return eval("(" + CUI.Builder.convertNodeToJSON($p0.documentElement) + ")") };
CUI.Builder.convertNodeToJSON = function(node) {
    var $v_0;
    $v_0 = "{";
    $v_0 += '"name" : "';
    $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode(node.nodeName);
    $v_0 += '",';
    $v_0 += '"attrs": {';
    var $v_1 = node.attributes;
    if (!CUI.ScriptUtility.isNullOrUndefined(node.attributes)) {
        var $v_3 = $v_1.length;
        if ($v_3 > 0)
            for (var $v_4 = true, $v_5 = 0; $v_5 < $v_3; $v_5++) {
                var $v_6 = $v_1.item($v_5);
                if ($v_4) $v_4 = false;
                else $v_0 += ",";
                $v_0 += '"';
                $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode($v_6.name);
                $v_0 += '"';
                $v_0 += ':"';
                $v_0 += CUI.NativeUtility.ecmaScriptStringLiteralEncode($v_6.value);
                $v_0 += '"'
            }
    }
    $v_0 += "}";
    var $v_2 = node.childNodes;
    if ($v_2) {
        var $v_7 = $v_2.length;
        if ($v_7 > 0) {
            $v_0 += ",";
            $v_0 += "children:[";
            for (var $v_8 = true, $v_9 = 0; $v_9 < $v_7; $v_9++) {
                var $v_A = $v_2[$v_9];
                if ($v_A.nodeName === "#text") continue;
                if ($v_8) $v_8 = false;
                else $v_0 += ",";
                $v_0 += CUI.Builder.convertNodeToJSON($v_A)
            }
            $v_0 += "]"
        }
    }
    $v_0 += "}";
    return $v_0
};
CUI.Builder.applyDataNodeExtensions = function(data, extensions) {
    var $v_0 = data.attrs;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return data;
    var $v_1 = $v_0["Id"], $v_2 = extensions[$v_1];
    if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
        for (var $v_9 = null, $v_A = Number.MAX_VALUE, $v_B = $v_2.length, $v_C = 0; $v_C < $v_B; $v_C++) {
            var $v_D = $v_2[$v_C];
            if (!$v_D) return null;
            var $v_E = CUI.DataNodeWrapper.getNodeAttribute($v_D, "Sequence");
            if (CUI.ScriptUtility.isNullOrUndefined($v_E)) {
                if (CUI.ScriptUtility.isNullOrUndefined($v_9)) $v_9 = $v_D;
                continue
            }
            var $v_F = parseInt($v_E);
            if ($v_F < $v_A) {
                $v_9 = $v_D;
                $v_A = $v_F
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_9)) data = $v_9
    }
    var $v_3 = data["children"];
    if (CUI.ScriptUtility.isNullOrUndefined($v_3)) {
        $v_3 = [];
        data["children"] = $v_3
    }
    for (var $v_4 = [], $v_5 = $v_3.length, $v_G = 0; $v_G < $v_5; $v_G++) Array.add($v_4, $v_3[$v_G]);
    var $v_6 = extensions[$v_1 + "._children"];
    if (!CUI.ScriptUtility.isNullOrUndefined($v_6)) {
        for (var $v_H = $v_6.length, $v_I = 0; $v_I < $v_H; $v_I++) Array.add($v_4, $v_6[$v_I]);
        $v_4.sort(CUI.Builder.$FW)
    }
    for (var $v_7 = [], $v_8 = $v_4.length, $v_J = 0; $v_J < $v_8; $v_J++) {
        var $v_K = CUI.Builder.applyDataNodeExtensions($v_4[$v_J], extensions);
        !CUI.ScriptUtility.isNullOrUndefined($v_K) && Array.add($v_7, $v_K)
    }
    data["children"] = $v_7;
    return data
};
CUI.Builder.$FW = function($p0, $p1) {
    var $v_0 = CUI.DataNodeWrapper.getNodeAttribute($p0, "Sequence"),
        $v_1 = CUI.DataNodeWrapper.getNodeAttribute($p1, "Sequence");
    if (CUI.ScriptUtility.isNullOrUndefined($v_1) && CUI.ScriptUtility.isNullOrUndefined($v_0)) return 0;
    if (CUI.ScriptUtility.isNullOrUndefined($v_1)) return -1;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return 1;
    var $v_2 = parseInt($v_0), $v_3 = parseInt($v_1);
    if ($v_2 < $v_3) return -1;
    else if ($v_2 > $v_3) return 1;
    return 0
};
CUI.Builder.prototype = {
    $1l_0: null,
    $2N_0: null,
    $BH_0: function($p0) { this.dispose() },
    $BI_0: function($p0) { $p0.$3n_1 = this.$16_0.fixedPositioningEnabled },
    dispose: function() {
        this.$0_0 = null;
        this.$16_0 = null;
        this._elmPlaceholder = null;
        this.$1l_0 = null;
        this.$10_0 = null;
        $removeHandler(window, "unload", this.$2N_0)
    },
    $0_0: null,
    get_root: function() { return this.$0_0 },
    set_root: function(value) {
        this.$0_0 = value;
        return value
    },
    $3I_0: false,
    get_inQuery: function() { return this.$3I_0 },
    set_inQuery: function(value) {
        this.$3I_0 = value;
        return value
    },
    $10_0: null,
    get_dataSource: function() { return this.$10_0 },
    set_dataSource: function(value) {
        this.$10_0 = value;
        return value
    },
    _elmPlaceholder: null,
    get_placeholder: function() { return this._elmPlaceholder },
    $16_0: null,
    isIdTrimmed: function(id) { return this.$16_0.trimmedIds[id] },
    isNodeTrimmed: function(dataNode) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttribute(dataNode, "Id");
        return this.$16_0.trimmedIds[$v_0]
    },
    $2T_0: function($p0, $p1) {
        var $v_0 = null, $v_1 = $p0.name;
        switch ($v_1) {
        case "ToggleButton":
            $v_0 = this.$FO_0($p0, $p1);
            break;
        case "ComboBox":
            $v_0 = this.$F4_0($p0, $p1);
            break;
        case "DropDown":
            $v_0 = this.$F6_0($p0, $p1);
            break;
        case "Button":
            $v_0 = this.$F0_0($p0, $p1);
            break;
        case "SplitButton":
            $v_0 = this.$FL_0($p0, $p1);
            break;
        case "FlyoutAnchor":
            $v_0 = this.$F7_0($p0, $p1);
            break;
        case "GalleryButton":
            $v_0 = this.$C7_0($p0, $p1, null);
            break;
        case "InsertTable":
            $v_0 = this.$FA_0($p0, $p1);
            break;
        case "Label":
            $v_0 = this.$FE_0($p0, $p1);
            break;
        case "MRUSplitButton":
            $v_0 = this.$FG_0($p0, $p1);
            break;
        case "Spinner":
            $v_0 = this.$FK_0($p0, $p1);
            break;
        case "TextBox":
            $v_0 = this.$FN_0($p0, $p1);
            break;
        case "ColorPicker":
            $v_0 = this.$F3_0($p0, $p1);
            break;
        case "CheckBox":
            $v_0 = this.$F2_0($p0, $p1);
            break;
        case "Separator":
            $v_0 = this.$FJ_0($p0, $p1);
            break;
        default:
            var $v_2 = $p0.attrs, $v_3 = $v_2["Classname"];
            if (CUI.ScriptUtility.isNullOrUndefined($v_3))
                throw Error.create("Unable to create Control with tagname: " + $v_1);
            break
        }
        return $v_0
    },
    $4z_0: function($p0, $p1, $p2) {
        var $v_0 = $p0.attrs, $v_1 = this.$0_0.$CQ_1($v_0["Id"], $v_0["Title"], $v_0["Description"], $v_0["MaxWidth"]);
        if (this.$16_0.lazyMenuInit && $p2) {
            $v_1.$BY_0(this.$$d_$Ft_0, $p0, $p1);
            return $v_1
        }
        this.$Cf_0($v_1, $p0, $p1);
        return $v_1
    },
    $Cf_0: function($p0, $p1, $p2) {
        for (var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p1), $v_1 = $v_0.length, $v_2 = null, $v_3 = 0;
            $v_3 < $v_1;
            $v_3++) {
            $v_2 = $v_0[$v_3];
            var $v_4 = $v_2.name;
            if ($v_4 !== "MenuSection")
                throw Error.create("Tags with the name: " + $v_4 + " cannot be children of Menu tags.");
            if (this.isNodeTrimmed($v_2)) continue;
            var $v_5 = this.$FF_0($v_2, $p2);
            $p0.addChild($v_5)
        }
    },
    $Ft_0: function($p0, $p1, $p2) {
        var $v_0 = $p0;
        this.$Cf_0($v_0, $p1, $p2);
        $v_0.$BG_0(true);
        return $v_0
    },
    $FF_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = $v_0["DisplayMode"];
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) $v_1 = "Menu";
        var $v_2 = this.$0_0.$CR_1($v_0["Id"],
                $v_0["Title"],
                $v_0["Description"],
                $v_0["Scrollable"] === "true",
                $v_0["MaxHeight"],
                $v_1),
            $v_3 = CUI.DataNodeWrapper.getNodeName(CUI.DataNodeWrapper.getNodeChildren($p0)[0]);
        if ($v_3 === "Controls")
            for (var $v_4 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper.getNodeChildren($p0)[0]),
                $v_5 = $v_4.length,
                $v_6 = null,
                $v_7 = 0;
                $v_7 < $v_5;
                $v_7++) {
                $v_6 = $v_4[$v_7];
                if (this.isNodeTrimmed($v_6)) continue;
                var $v_8 = this.$2T_0($v_6, $p1);
                $v_2.addChild($v_8.createComponentForDisplayMode($v_1))
            }
        else if ($v_3 === "Gallery") {
            var $v_9 = this.$F8_0(CUI.DataNodeWrapper.getNodeChildren($p0)[0], $p1, true);
            $v_2.addChild($v_9)
        }
        return $v_2
    },
    $F8_0: function($p0, $p1, $p2) {
        for (var $v_0 = $p0.attrs,
            $v_1 = $p0.attrs,
            $v_2 = this.$0_0.$Fi_1($v_1.Id, $v_0["Title"], $v_0["Description"], $v_1),
            $v_3 = $p2 ? "Menu" : "Default",
            $v_4 = CUI.DataNodeWrapper.getNodeChildren($p0),
            $v_5 = $v_4.length,
            $v_6 = null,
            $v_7 = 0;
            $v_7 < $v_5;
            $v_7++) {
            $v_6 = $v_4[$v_7];
            if (this.isNodeTrimmed($v_6)) continue;
            var $v_8;
            switch (CUI.DataNodeWrapper.getNodeName($v_6)) {
            case "GalleryButton":
                $v_8 = this.$C7_0($v_6, $p1, $v_1.ElementDimensions);
                break;
            default:
                $v_8 = this.$2T_0($v_6, $p1);
                break
            }
            $v_2.addChild($v_8.createComponentForDisplayMode($v_3))
        }
        return $v_2
    },
    $C7_0: function($p0, $p1, $p2) {
        var $v_0;
        if (CUI.ScriptUtility.isNullOrEmptyString($p2)) {
            var $v_3 = $p0.attrs;
            $p2 = $v_3["ElementDimensions"]
        }
        if (CUI.ScriptUtility.isNullOrEmptyString($p2)) $v_0 = 2;
        else $v_0 = CUI.Gallery.$CJ($p2);
        var $v_1 = $p0.attrs, $v_2 = new CUI.Controls.GalleryButton(this.$0_0, $v_1.Id, $v_1, $v_0);
        return $v_2
    },
    $FO_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.ToggleButton(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $F2_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.CheckBox(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $F3_0: function($p0, $p1) {
        for (var $v_0 = $p0.attrs,
            $v_1 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Colors")),
            $v_2 = new Array($v_1.length),
            $v_3 = $v_1.length,
            $v_5 = 0;
            $v_5 < $v_3;
            $v_5++) {
            var $v_6 = new CUI.Controls.ColorStyle,
                $v_7 = CUI.DataNodeWrapper.getNodeAttributes($v_1[$v_5]),
                $v_8 = $v_7["Title"];
            $v_6.Title = CUI.ScriptUtility.isNullOrUndefined($v_8) ? $v_7["Alt"] : $v_8;
            $v_6.Color = $v_7["Color"];
            $v_6.DisplayColor = $v_7["DisplayColor"];
            $v_6.Style = $v_7["Style"];
            $v_2[$v_5] = $v_6
        }
        var $v_4 = new CUI.Controls.ColorPicker(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4
    },
    $F4_0: function($p0, $p1) {
        var $v_0 = $p0.attrs,
            $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0),
            $v_2 = null,
            $v_3 = $p0.attrs,
            $v_4 = null;
        if (!CUI.Utility.$1F($v_3.PopulateDynamically)) {
            $v_2 = this.$4z_0($v_1[0], $p1, false);
            $v_4 = {};
            for (var $v_6 = CUI.DataNodeWrapper.getNodeChildren($v_1[0]), $v_7 = $v_6.length, $v_8 = 0;
                $v_8 < $v_7;
                $v_8++)
                for (var $v_9 = CUI.DataNodeWrapper.getNodeChildren($v_6[$v_8]),
                    $v_A = CUI.DataNodeWrapper.getNodeChildren($v_9[0]),
                    $v_B = $v_A.length,
                    $v_C = 0;
                    $v_C < $v_B;
                    $v_C++) {
                    var $v_D = $v_A[$v_C].attrs, $v_E = $v_D["LabelText"], $v_F = $v_D["MenuItemId"];
                    $v_4[$v_E] = $v_F
                }
        }
        var $v_5 = new CUI.Controls.ComboBox(this.$0_0, $v_0.Id, $v_0, $v_2);
        $v_5.$3s_3 = $v_4;
        return $v_5
    },
    $F6_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_2 = null, $v_3 = $p0.attrs;
        if (!CUI.Utility.$1F($v_3.PopulateDynamically)) $v_2 = this.$4z_0($v_1[0], $p1, false);
        var $v_4 = new CUI.Controls.DropDown(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4
    },
    $F0_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.Button(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $FL_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_2 = null;
        if (!CUI.Utility.$1F($v_0.PopulateDynamically)) $v_2 = this.$4z_0($v_1[0], $p1, true);
        var $v_3 = new CUI.Controls.SplitButton(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_3
    },
    $F7_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_2 = null, $v_3 = $p0.attrs;
        if (!CUI.Utility.$1F($v_3.PopulateDynamically)) $v_2 = this.$4z_0($v_1[0], $p1, true);
        var $v_4 = new CUI.Controls.FlyoutAnchor(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4
    },
    $FA_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.InsertTable(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $FE_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.Label(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $FG_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_2 = null, $v_3 = $p0.attrs;
        if (!CUI.Utility.$1F($v_3.PopulateDynamically)) $v_2 = this.$4z_0($v_1[0], $p1, false);
        var $v_4 = new CUI.Controls.MRUSplitButton(this.$0_0, $v_0.Id, $v_0, $v_2);
        return $v_4
    },
    $FJ_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.Separator(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $FK_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.Spinner(this.$0_0, $v_0.Id, $v_0, this.$C9_0($p0));
        return $v_1
    },
    $FN_0: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.Controls.TextBox(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $6E_0: function($p0) {
        if (typeof $p0 === "string") return parseFloat($p0);
        return $p0
    },
    $CI_0: function($p0) {
        if (typeof $p0 === "string") return parseInt($p0);
        return $p0
    },
    $C9_0: function($p0) {
        for (var $v_0 = CUI.DataNodeWrapper.getNodeChildren($p0),
            $v_1 = new Array($v_0.length),
            $v_2 = $v_0.length,
            $v_3 = 0;
            $v_3 < $v_2;
            $v_3++) {
            var $v_4 = $v_0[$v_3], $v_5 = CUI.DataNodeWrapper.getNodeAttributes($v_4);
            $v_1[$v_3] = CUI.Controls.Spinner.createUnit($v_5["Name"],
                this.$C8_0(CUI.DataNodeWrapper.getNodeChildren($v_4)),
                this.$6E_0($v_5["MinimumValue"]),
                this.$6E_0($v_5["MaximumValue"]),
                this.$CI_0($v_5["DecimalDigits"]),
                this.$6E_0($v_5["Interval"]))
        }
        return $v_1
    },
    $C8_0: function($p0) {
        for (var $v_0 = new Array($p0.length), $v_1 = $p0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
            var $v_3 = $p0[$v_2], $v_4 = CUI.DataNodeWrapper.getNodeAttributes($v_3);
            $v_0[$v_2] = $v_4["Value"]
        }
        return $v_0
    },
    applyDataExtensions: function(data) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$16_0
            .dataExtensions)) return CUI.Builder.applyDataNodeExtensions(data, this.$16_0.dataExtensions);
        else return data
    }
};
CUI.CommandEventArgs = function($p0, $p1, $p2, $p3) {
    CUI.CommandEventArgs.initializeBase(this);
    this.$6_1 = $p0;
    this.$3w_1 = $p3;
    this.$41_1 = $p2;
    this.$M_1 = $p1
};
CUI.CommandEventArgs.prototype = {
    $6_1: null,
    $8g_1: 0,
    $3w_1: null,
    $41_1: null,
    $M_1: 0,
    $7h_1: null,
    get_id: function() { return this.$6_1 },
    get_parameters: function() { return this.$3w_1 },
    get_sequenceNumber: function() { return this.$8g_1 },
    set_sequenceNumber: function($p0) {
        this.$8g_1 = $p0;
        return $p0
    },
    get_source: function() { return this.$41_1 },
    get_sourceControl: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this
                .$41_1) &&
            CUI.ControlComponent.isInstanceOfType(this.$41_1)) return this.$41_1.$W_1;
        return null
    },
    get_type: function() { return this.$M_1 },
    get_properties: function() { return this.$3w_1 },
    get_commandInfo: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$7h_1)) this.$7h_1 = new CUI.CommandInformation;
        return this.$7h_1
    }
};
CUI.Component = function(root, id, title, description) {
    this._componentWidth = -1;
    this._componentHeight = -1;
    this._componentTopPosition = -1;
    this._componentLeftPosition = -1;
    this.$3L_0 = null;
    this.$6_0 = id;
    this.$0_0 = root;
    this.$1a_0 = title;
    this.$4S_0 = description;
    this.createChildArray()
};
CUI.Component.prototype = {
    $6_0: null,
    $3k_0: null,
    $U_0: null,
    $0_0: null,
    $8_0: null,
    $o_0: true,
    $7I_0: true,
    $9_0: true,
    $5b_0: false,
    $4S_0: null,
    $1a_0: null,
    createChildArray: function() { this.$Ab_0() },
    $Ab_0: function() { if (CUI.ScriptUtility.isNullOrUndefined(this.$8_0)) this.$8_0 = new CUI.List },
    get_id: function() { return this.$6_0 },
    set_id: function(value) {
        this.$6_0 = value;
        return value
    },
    get_$3_0: function() { return this.$3k_0 },
    set_$3_0: function($p0) {
        this.$3k_0 = $p0;
        return $p0
    },
    get_root: function() { return this.$0_0 },
    get_parent: function() { return this.$U_0 },
    set_parent: function(value) {
        this.$U_0 = value;
        return value
    },
    $1J_0: function() {},
    $8x_0: function() { return false },
    $8w_0: function() { return false },
    $Aj_0: function() {},
    $Al_0: function() {},
    $Ak_0: function($p0) { return false },
    $D8_0: function($p0) {
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            if ($v_0.$6_0 === $p0) return $v_0
        }
        return null
    },
    getChild: function(id) { return this.$D8_0(id) },
    getChildByTitle: function(title) {
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            if ($v_0.get_title() === title) return $v_0
        }
        return null
    },
    addChild: function(child) { this.$4x_0(child, true) },
    $4x_0: function($p0, $p1) { this.$Bw_0($p0, -1, $p1) },
    addChildAtIndex: function(child, index) { this.$Bw_0(child, index, true) },
    $Bw_0: function($p0, $p1, $p2) {
        $p2 && this.ensureCorrectChildType($p0);
        if (!CUI.ScriptUtility.isNullOrUndefined($p0
            .$U_0))
            throw Error
                .create("This child cannot be added because it has already been added \n to another Component in the hierarchy.  \n You must first call child.Parent.RemoveChild(child)");
        if ($p1 === -1) this.$8_0.add($p0);
        else this.$8_0.insert($p1, $p0);
        $p0.$U_0 = this;
        this.$1G_0()
    },
    removeChild: function(id) {
        var $v_0 = this.$D8_0(id);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create("The child with id: " + id + " is not as child of this Component");
        this.$8_0.remove($v_0);
        $v_0.$U_0 = null;
        this.$1G_0()
    },
    removeChildren: function() {
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            if ($v_0) $v_0.$U_0 = null
        }
        this.$8_0.clear();
        this.$1G_0()
    },
    ensureCorrectChildType: function(child) { return },
    initRootMember: function(root) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this
            .$0_0)) throw Error.create("Root member has already been set for this Component.");
        this.$0_0 = root
    },
    get_visible: function() { return this.$7I_0 },
    set_visible: function(value) {
        this.set_$9T_0(value);
        return value
    },
    set_$9T_0: function($p0) {
        var $v_0 = this.$7I_0;
        this.$7I_0 = $p0;
        $v_0 !== this.$7I_0 && this.$1G_0();
        return $p0
    },
    get_enabled: function() { return this.$9_0 },
    set_enabled: function(value) {
        if (this.$9_0 === value && this.$5b_0) return value;
        if (!CUI.ScriptUtility.isNullOrUndefined(this
                .$U_0) &&
            !this.$U_0.get_enabled() &&
            value)
            throw Error.create("This Component with id: " +
                this.$6_0 +
                " cannot be Enabled because its parent is Disabled");
        this.$9_0 = value;
        this.$5b_0 = true;
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            $v_0.set_enabled(value)
        }
        this.onEnabledChanged(value);
        return value
    },
    onEnabledChanged: function(enabled) {},
    get_title: function() { return this.$1a_0 },
    set_title: function(value) {
        this.$1a_0 = value;
        this.$1G_0();
        return value
    },
    get_description: function() { return this.$4S_0 },
    set_description: function(value) {
        this.$4S_0 = value;
        this.$1G_0();
        return value
    },
    _lastWidthUpdate: 0,
    _lastHeightUpdate: 0,
    get_$FY_0: function() { return this._componentHeight },
    _lastTopUpdate: 0,
    get_$CG_0: function() { return this._componentTopPosition },
    _lastLeftUpdate: 0,
    valueIsDirty: function(lastUpdate) {
        if (CUI.Ribbon.isInstanceOfType(this.$0_0)) {
            var $v_0 = this.$0_0;
            return lastUpdate < $v_0.get_$Hu_2()
        }
        return false
    },
    $BZ_0: function($p0) {
        this.$o_0 = $p0;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$8_0)) return;
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            $v_0.$BZ_0($p0)
        }
    },
    $1G_0: function() {
        if (this.$o_0 || this.$5f_0) return;
        this.$o_0 = true;
        !CUI.ScriptUtility.isNullOrUndefined(this.$U_0) && this.$U_0.$1G_0()
    },
    $5f_0: false,
    $2W_0: function() { this.$o_0 = false },
    $3V_0: function() { this.$o_0 && this.$2W_0() },
    $68_0: function($p0) {
        this.$8v_0();
        this.$g_0();
        this.$o_0 = false;
        if ($p0)
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$8_0)) {
                var $$enum_2 = this.$8_0.getEnumerator();
                while ($$enum_2.moveNext()) {
                    var $v_0 = $$enum_2.get_current();
                    $v_0.$68_0($p0)
                }
            }
    },
    $8v_0: function() {
        var $v_0 = $get(this.$6_0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.set_$3_0($v_0);
        else throw Error.create("Attempting to attach to Id: " + this.$6_0 + " but this id is not present in the DOM")
    },
    $g_0: function() {},
    $2U_0: function() {
        if (!this.$3k_0) {
            this.$3k_0 = CUI.Utility.$5(this.get_domElementTagName());
            this.$3k_0.className = this.get_cssClass();
            this.$3k_0.id = this.$6_0
        }
    },
    get_domElementTagName: function() { return "span" },
    get_cssClass: function() { return "" },
    get_visibleInDOM: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$U_0)) return false;
        return this.$U_0.get_visibleInDOM()
    },
    $Bd_0: function() {
        if (!this.get_visible()) return false;
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            if ($v_0.$Bd_0()) return true
        }
        return false
    },
    ensureDOMElementAndEmpty: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this.$2U_0();
        else this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()))
    },
    appendChildrenToElement: function(elm) {
        var $v_0 = document.createDocumentFragment(), $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            $v_1.$2U_0();
            $v_0.appendChild($v_1.get_$3_0());
            $v_1.$3V_0()
        }
        elm.appendChild($v_0)
    },
    raiseCommandEvent: function(commandId, type, properties) {
        var $v_0 = this.$0_0.$Ff_1(commandId, type, this, properties);
        this.$E5_0($v_0)
    },
    $E5_0: function($p0) {
        this.$4E_0($p0) && !CUI.ScriptUtility.isNullOrUndefined(this.$U_0) && this.$U_0.$E5_0($p0);
        this.$Dt_0($p0)
    },
    $4E_0: function($p0) { return true },
    $Dt_0: function($p0) {},
    getTextValue: function() { return null },
    receiveFocus: function() {},
    onMenuClosed: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$8_0)) return;
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.onMenuClosed()
        }
    },
    $4R_0: null,
    $6i_0: null,
    $6j_0: null,
    $BY_0: function($p0, $p1, $p2) {
        this.$4R_0 = $p0;
        this.$6i_0 = $p1;
        this.$6j_0 = $p2
    },
    $7q_0: false,
    doDelayedInit: function() {
        if (this.$7q_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this
            .$4R_0)) throw Error.create("No delayedinit handler present in this component: " + this.$6_0);
        this.$7q_0 = true;
        this.$4R_0(this, this.$6i_0, this.$6j_0)
    },
    $BG_0: function($p0) {
        if ($p0) {
            this.$4R_0 = null;
            this.$6i_0 = null;
            this.$6j_0 = null;
            this.$1G_0()
        }
        this.$7q_0 = false
    },
    get_needsDelayIniting: function() { return !CUI.ScriptUtility.isNullOrUndefined(this.$4R_0) },
    $6P_0: function() {
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.$6P_0()
        }
    },
    get_$DZ_0: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3L_0)) {
            this.$3L_0 = new Date;
            this.$3L_0.setTime(0)
        }
        return this.$3L_0
    },
    get_$EC_0: function() { return this.get_$DZ_0().getTime() < this.$0_0.get_$DZ_0().getTime() },
    $E0_0: function() { this.get_$EC_0() && this.$6P_0() },
    dispose: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$8_0)) {
            var $$enum_1 = this.$8_0.getEnumerator();
            while ($$enum_1.moveNext()) {
                var $v_0 = $$enum_1.get_current();
                $v_0.dispose()
            }
            this.$8_0 = null
        }
        this.$U_0 = null;
        this.$0_0 = null;
        this.$6i_0 = null;
        this.$4R_0 = null;
        this.$6j_0 = null;
        this.$3k_0 = null
    }
};
CUI.ContextMenu = function($p0, $p1, $p2, $p3, $p4) { CUI.ContextMenu.initializeBase(this, [$p0, $p1, $p2, $p3, $p4]) };
CUI.ContextMenu.prototype = {
    $2W_0: function() {
        this.get_needsDelayIniting() && this.doDelayedInit();
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$X_1)) {
            this.$X_1 = CUI.Utility.$5("div");
            this.$X_1.className = "ms-cui-contextmenu-inner"
        }
        this.get_$3_0().appendChild(this.$X_1);
        this.appendChildrenToElement(this.$X_1);
        CUI.Menu.prototype.$2W_0.call(this)
    },
    get_cssClass: function() { return "ms-cui-contextmenu" }
};
CUI.ContextMenuDock = function($p0, $p1) { CUI.ContextMenuDock.initializeBase(this, [$p0, $p1, "", ""]) };
CUI.ContextMenuDock.prototype = {
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Only children of type Control can be added to Strips.")
    },
    get_visibleInDOM: function() { return true }
};
CUI.ContextMenuLauncher = function($p0, $p1, $p2, $p3) {
    CUI.ContextMenuLauncher.initializeBase(this, [$p0, $p1, $p2, $p3])
};
CUI.ContextMenuLauncher.prototype = {
    $6y_2: null,
    $8q_2: null,
    $AQ_2: 0,
    $AR_2: 0,
    $Da_2: function($p0, $p1) {
        this.$8q_2 = $p1;
        this.$6y_2 = this.getMenuPosition($p0, null);
        this.launchMenu(null);
        this.$F_1.$Aj_0();
        return true
    },
    launchContextMenuAt: function($p0, $p1, $p2) {
        this.$AQ_2 = $p1;
        this.$AR_2 = $p2;
        this.$8q_2 = $p0;
        this.launchMenu(null);
        this.$F_1.$Aj_0();
        return true
    },
    positionMenu: function($p0, $p1) {
        if (this.$6y_2) {
            this.$F_1.get_$3_0().style.top = this.$6y_2.y + "px";
            this.$F_1.get_$3_0().style.left = this.$6y_2.x + "px";
            this.$F_1.get_$3_0().style.position = "absolute"
        } else {
            $p0.style.top = "0px";
            $p0.style.left = "0px";
            var $v_0 = this.getAllElementDimensions($p0, this.$8q_2);
            $v_0["launcherLeft"] = this.$AQ_2;
            $v_0["launcherTop"] = this.$AR_2;
            $v_0["launcherWidth"] = 0;
            $v_0["launcherHeight"] = 0;
            this.$0_0.$Ba_1($p0, $v_0, false)
        }
    },
    getMenuPosition: function($p0, $p1) {
        var $v_0 = new Sys.UI.Bounds(0, 0, 0, 0);
        if (!$p0) $p0 = window.event;
        $v_0.y = $p0.clientY;
        $v_0.x = $p0.clientX;
        return $v_0
    }
};
CUI.ContextMenuRootProperties = function() { CUI.ContextMenuRootProperties.initializeBase(this) };
CUI.ContextMenuRootProperties.prototype = { CommandMenuOpen: null, CommandMenuClose: null };
CUI.ContextMenuRoot = function(id, properties) {
    this.$7n_2 = {};
    CUI.ContextMenuRoot.initializeBase(this, [id, properties])
};
CUI.ContextMenuRoot.prototype = {
    refresh: function() {
        this.$2W_0();
        CUI.Root.prototype.$2W_0.call(this)
    },
    $2W_0: function() {
        CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.$2U_0();
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$o_0 = false
    },
    get_rootType: function() { return "ContextMenu" },
    get_$25_1: function() {
        if (!CUI.Root.prototype.get_$25_1.call(this)) {
            var $v_0 = new CUI.BuildOptions;
            $v_0.lazyMenuInit = false;
            CUI.Root.prototype.set_$25_1.call(this, new CUI.Builder($v_0, null, null));
            CUI.Root.prototype.get_$25_1.call(this).$0_0 = this
        }
        return CUI.Root.prototype.get_$25_1.call(this)
    },
    set_$25_1: function($p0) {
        CUI.Root.prototype.set_$25_1.call(this, $p0);
        return $p0
    },
    get_contextMenuRootProperties: function() { return this.$7_1 },
    ensureCorrectChildType: function(child) {
        if (!CUI.ContextMenuDock.isInstanceOfType(child))
            throw Error.create("Only children of type ContextMenuDock can be added to a ContextMenuRoot")
    },
    createContextMenu: function(props, id, title, description, maxWidth) {
        var $v_0 = new CUI.ContextMenu(this, id, title, description, null);
        if (!props) props = new CUI.Controls.ContextMenuControlProperties;
        props.CommandMenuOpen = this.get_contextMenuRootProperties().CommandMenuOpen;
        props.CommandMenuClose = this.get_contextMenuRootProperties().CommandMenuClose;
        var $v_1 = new CUI.Controls.ContextMenuControl(this, id + "Launcher", props, $v_0);
        this.$7n_2[id] = $v_1;
        var $v_2 = new CUI.ContextMenuDock(this, "dock" + id);
        $v_2.addChild($v_1.createComponentForDisplayMode("Menu"));
        this.addChild($v_2);
        this.refresh()
    },
    showContextMenu: function(id, triggeringEvent, focusedElement) {
        var $v_0 = this.$7n_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create('The context menu "' + id + '" does not exist');
        $v_0.$Da_2(triggeringEvent, focusedElement)
    },
    showContextMenuAt: function(id, elmHadFocus, x, y) {
        var $v_0 = this.$7n_2[id];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create('The context menu "' + id + '" does not exist');
        $v_0.launchContextMenuAt(elmHadFocus, x, y)
    }
};
CUI.ControlProperties = function() {};
CUI.ControlProperties.prototype = {
    Command: null,
    Id: null,
    TemplateAlias: null,
    ToolTipDescription: null,
    ToolTipHelpKeyWord: null,
    ToolTipImage32by32: null,
    ToolTipImage32by32Class: null,
    ToolTipImage32by32Top: null,
    ToolTipImage32by32Left: null,
    ToolTipSelectedItemTitle: null,
    ToolTipShortcutKey: null,
    ToolTipTitle: null,
    LabelCss: null
};
CUI.Control = function($p0, $p1, $p2) {
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_onHelpKeyPress = Function.createDelegate(this, this.onHelpKeyPress);
    this.$$d_$n_0 = Function.createDelegate(this, this.$n_0);
    this.$$d_launchToolTip = Function.createDelegate(this, this.launchToolTip);
    this.$0_0 = $p0;
    this.$6_0 = $p1;
    this.$7_0 = $p2;
    this.$k_0 = [];
    this.$5I_0 = ",";
    this.$3f_0 = {};
    $p0.$J2_1(this)
};
CUI.Control.createStandardControlDOMElement = function($p0, $p1, $p2, $p3, $p4, $p5) {
    var $v_0 = $p3;
    return CUI.Control.createStandardControlDOMElementCore($p0,
        $p1,
        $p2,
        $v_0.Id,
        $v_0.Image32by32,
        $v_0.Image32by32Class,
        $v_0.Image32by32Top,
        $v_0.Image32by32Left,
        $v_0.Image16by16,
        $v_0.Image16by16Class,
        $v_0.Image16by16Top,
        $v_0.Image16by16Left,
        $v_0.LabelText,
        $v_0.LabelCss,
        $v_0.Alt,
        $v_0.Description,
        $v_0.ToolTipTitle,
        $p4,
        $p5)
};
CUI.Control.createStandardControlDOMElementCore = function($p0,
    $p1,
    $p2,
    $p3,
    $p4,
    $p5,
    $p6,
    $p7,
    $p8,
    $p9,
    $p10,
    $p11,
    $p12,
    $p13,
    $p14,
    $p15,
    $p16,
    $p17,
    $p18) {
    if (CUI.ScriptUtility.isNullOrUndefined($p12)) $p12 = "";
    var $v_0 = false, $v_1 = true, $v_2 = CUI.Utility.$7J(), $v_3 = null;
    if ($p2 === "Large") $v_3 = "ms-cui-ctl-large";
    else if ($p2 === "Medium") $v_3 = "ms-cui-ctl-medium";
    else if ($p2 === "Menu16" || $p2 === "Menu") {
        $v_3 = "ms-cui-ctl-menu";
        $v_0 = true
    } else if ($p2 === "Menu32") {
        $v_3 = "ms-cui-ctl-menu ms-cui-ctl-menu32";
        $v_0 = true
    } else $v_3 = "ms-cui-ctl";
    CUI.Utility.ensureCSSClassOnElement($v_2, $v_3);
    $p2 === "Menu" && CUI.Utility.ensureCSSClassOnElement($v_2, "ms-cui-textmenuitem");
    !CUI.ScriptUtility.isNullOrUndefined($p16) && $v_2.setAttribute("aria-describedby", $p3 + "_ToolTip");
    $v_2.setAttribute("mscui:controltype", $p0.get_$CH_0());
    var $v_4 = CUI.Utility.$5("img"), $v_5 = null, $v_6 = null, $v_7 = null, $v_8 = null, $v_9 = 0;
    $v_4.alt = "";
    $p14 = CUI.ScriptUtility.isNullOrEmptyString($p14) ? $p12 : $p14;
    $v_2.setAttribute("role", $p0.get_$4y_0());
    CUI.Controls.FlyoutAnchor.isInstanceOfType($p0) && $v_2.setAttribute("aria-haspopup", "true");
    if (CUI.ScriptUtility.isNullOrEmptyString($p16)) {
        $v_2.title = $p14;
        $v_4.alt = $p14;
        $v_1 = false
    }
    if ($p2 === "Large" || $p2 === "Menu32") {
        $v_5 = $p4;
        $v_6 = $p5;
        $v_7 = $p6;
        $v_8 = $p7;
        $v_9 = 4
    } else {
        $v_5 = $p8;
        $v_6 = $p9;
        $v_7 = $p10;
        $v_8 = $p11;
        $v_9 = 3
    }
    var $v_A = CUI.Utility.$w(2, $v_9, $v_5, $v_6, $v_4, true, false, $v_7, $v_8), $v_B = CUI.Utility.$5("span");
    $v_B.className = $p2 === "Large" ? "ms-cui-ctl-largeIconContainer" : "ms-cui-ctl-iconContainer";
    $v_B.appendChild($v_A);
    var $v_C = null, $v_D = null;
    if ($v_1) $v_D = CUI.Utility.$49($p14);
    if ($p2 !== "Small" || $p18) {
        $v_C = CUI.Utility.$5("span");
        if ($p2 !== "Small") {
            if ($p2 === "Large") {
                CUI.Utility.ensureCSSClassOnElement($v_C, "ms-cui-ctl-largelabel");
                $v_C.innerHTML = CUI.Utility.$Ck($p12, $p18)
            } else {
                var $v_I = $p12;
                if ($p18) $v_I = $v_I + " ";
                CUI.Utility.ensureCSSClassOnElement($v_C, "ms-cui-ctl-mediumlabel");
                CUI.UIUtility.setInnerText($v_C, $v_I)
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString($p13)) $v_C.style.cssText = $p13
        } else {
            CUI.Utility.ensureCSSClassOnElement($v_C, "ms-cui-ctl-smalllabel");
            CUI.UIUtility.setInnerText($v_C, " ")
        }
    } else if ($v_1) $v_C = CUI.Utility.$49($p14);
    var $v_E = null;
    if ($p18) {
        var $v_J = CUI.Utility.$5("img");
        $v_J.alt = "";
        if (CUI.ScriptUtility.isNullOrEmptyString($p16)) $v_J.alt = $p14;
        $v_E = CUI.Utility.$w(2,
            1,
            $p1.$7_1.ImageDownArrow,
            $p1.$7_1.ImageDownArrowClass,
            $v_J,
            true,
            false,
            $p1.$7_1.ImageDownArrowTop,
            $p1.$7_1.ImageDownArrowLeft)
    }
    var $v_F = null, $v_G = null, $v_H = null;
    if ($p2 === "Menu32") {
        $v_F = CUI.Utility.$5("span");
        $v_F.className = "ms-cui-ctl-menulabel";
        CUI.Utility.ensureCSSClassOnElement($v_C, "ms-cui-btn-title");
        $v_F.appendChild($v_C);
        if (!CUI.ScriptUtility.isNullOrUndefined($p15)) {
            $v_G = CUI.Utility.$5("span");
            CUI.Utility.ensureCSSClassOnElement($v_G, "ms-cui-btn-menu-description");
            CUI.Utility.$4I($v_G, $p15);
            $v_G.style.display = "block";
            $v_F.appendChild($v_G)
        }
        $v_H = CUI.Utility.$5("span");
        $v_H.className = "ms-cui-ctl-menu32clear";
        $v_H.innerHTML = "&nbsp;"
    }
    $v_2.appendChild($v_B);
    if (!CUI.ScriptUtility.isNullOrUndefined($v_C)) {
        if (!CUI.ScriptUtility.isNullOrUndefined($v_F)) {
            $v_2.appendChild($v_F);
            $v_2.appendChild($v_H)
        } else {
            $v_2.appendChild($v_C);
            $p2 === "Small" && $p18 && $v_1 && $v_2.appendChild($v_D)
        }
        !CUI.ScriptUtility.isNullOrUndefined($v_E) && $v_C.appendChild($v_E)
    }
    if ($v_0) {
        var $v_K = CUI.Utility.$CN();
        $v_2.appendChild($v_K)
    }
    return $v_2
};
CUI.Control.createTwoAnchorControlDOMElementCore = function($p0,
    $p1,
    $p2,
    $p3,
    $p4,
    $p5,
    $p6,
    $p7,
    $p8,
    $p9,
    $p10,
    $p11,
    $p12,
    $p13,
    $p14,
    $p15) {
    var $v_0 = true;
    if (CUI.ScriptUtility.isNullOrUndefined($p12)) $p12 = "";
    var $v_1 = CUI.Utility.$5("span");
    if ($p2 === "Large") $v_1.className = "ms-cui-ctl-large";
    else if ($p2 === "Medium") $v_1.className = "ms-cui-ctl ms-cui-ctl-medium";
    else $v_1.className = "ms-cui-ctl ms-cui-ctl-small";
    !CUI.ScriptUtility.isNullOrUndefined($p14) && $v_1.setAttribute("aria-describedby", $p3 + "_ToolTip");
    $v_1.setAttribute("mscui:controltype", $p0.get_$CH_0());
    var $v_2 = CUI.Utility.$7J(), $v_3 = CUI.Utility.$7J();
    $v_2.className = "ms-cui-ctl-a1";
    $v_3.className = "ms-cui-ctl-a2";
    $p13 = CUI.ScriptUtility.isNullOrEmptyString($p13) ? $p12 : $p13;
    $v_2.setAttribute("role", $p0.get_$4y_0());
    $v_3.setAttribute("role", $p0.get_$4y_0());
    $v_3.setAttribute("aria-haspopup", "true");
    var $v_4 = CUI.Utility.$5("span");
    $v_4.className = "ms-cui-ctl-a1Internal";
    var $v_5 = CUI.Utility.$5("img"), $v_6 = null, $v_7 = null, $v_8 = null, $v_9 = null, $v_A = 0;
    $v_5.alt = "";
    if (CUI.ScriptUtility.isNullOrEmptyString($p14)) {
        $v_2.title = $p13;
        $v_3.title = $p13;
        $v_5.alt = $p13;
        $v_0 = false
    }
    if ($p2 === "Large" || $p2 === "Menu32") {
        $v_6 = $p4;
        $v_7 = $p5;
        $v_8 = $p6;
        $v_9 = $p7;
        $v_A = 4
    } else {
        $v_6 = $p8;
        $v_7 = $p9;
        $v_8 = $p10;
        $v_9 = $p11;
        $v_A = 3
    }
    var $v_B = CUI.Utility.$w(2, $v_A, $v_6, $v_7, $v_5, true, false, $v_8, $v_9), $v_C = null, $v_D = null;
    if ($v_0) {
        $v_C = CUI.Utility.$49($p13);
        $v_D = CUI.Utility.$49($p13)
    }
    var $v_E = null;
    if ($p2 !== "Small" || $p15) {
        $v_E = CUI.Utility.$5("span");
        if ($p2 !== "Small")
            if ($p2 === "Large") {
                CUI.Utility.ensureCSSClassOnElement($v_E, "ms-cui-ctl-largelabel");
                $v_E.innerHTML = CUI.Utility.$Ck($p12, $p15)
            } else if ($p2 === "Medium") {
                CUI.Utility.ensureCSSClassOnElement($v_E, "ms-cui-ctl-mediumlabel");
                CUI.UIUtility.setInnerText($v_E, $p12)
            }
    }
    var $v_F = null;
    if ($p15) {
        var $v_G = CUI.Utility.$5("img");
        if (CUI.ScriptUtility.isNullOrEmptyString($p14)) $v_G.alt = $p13;
        $v_F = CUI.Utility.$w(2,
            1,
            $p1.$7_1.ImageDownArrow,
            $p1.$7_1.ImageDownArrowClass,
            $v_G,
            true,
            false,
            $p1.$7_1.ImageDownArrowTop,
            $p1.$7_1.ImageDownArrowLeft)
    }
    $v_1.appendChild($v_2);
    $v_1.appendChild($v_3);
    $v_2.appendChild($v_4);
    $v_4.appendChild($v_B);
    if (!CUI.ScriptUtility.isNullOrUndefined($v_E)) {
        if ($p2 === "Large") {
            $v_3.appendChild($v_E);
            $v_0 && $v_2.appendChild($v_C)
        } else {
            $v_4.appendChild($v_E);
            $v_0 && $v_3.appendChild($v_D)
        }
        $p2 === "Small" && $v_0 && $v_2.appendChild($v_C)
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($v_F))
        if ($p2 === "Large") $v_E.appendChild($v_F);
        else $v_3.appendChild($v_F);
    return $v_1
};
CUI.Control.prototype = {
    $0_0: null,
    $6_0: null,
    $k_0: null,
    $7_0: null,
    $5I_0: null,
    $3f_0: null,
    $1n_0: null,
    $7D_0: false,
    $8s_0: null,
    $8r_0: null,
    $9_0: false,
    $5b_0: false,
    get_controlProperties: function() { return this.$7_0 },
    $8n_0: null,
    get_stateProperties: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$8n_0)) this.$8n_0 = {};
        return this.$8n_0
    },
    $7i_0: null,
    get_commandProperties: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$7i_0)) this.$7i_0 = {};
        return this.$7i_0
    },
    get_templateAlias: function() { return this.$7_0.TemplateAlias },
    get_$CH_0: function() { return "Control" },
    get_$4y_0: function() { return "button" },
    ensureValidDisplayMode: function($p0) {
        if (this.$5I_0.indexOf("," + $p0 + ",") !== -1) return;
        throw Error
            .create("The display mode with name: " + $p0 + " is not valid for this control with id: " + this.$6_0)
    },
    refreshDOMElements: function() {
        this.onStateChanged();
        !this.$9_0 && this.onEnabledChanged(false)
    },
    onStateChanged: function() {},
    $7o_0: null,
    getDOMElementForDisplayMode: function($p0) {
        this.ensureValidDisplayMode($p0);
        var $v_0 = this.$3f_0[$p0];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) return $v_0;
        this.$7o_0 = $p0;
        $v_0 = this.createDOMElementForDisplayMode($p0);
        this.$7o_0 = null;
        if (CUI.ScriptUtility.isNullOrEmptyString($v_0.id)) $v_0.id = this.$6_0 + "-" + $p0;
        this.storeElementForDisplayMode($v_0, $p0);
        this.refreshDOMElements();
        return $v_0
    },
    storeElementForDisplayMode: function($p0, $p1) { this.$3f_0[$p1] = $p0 },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        !CUI.ScriptUtility.isNullOrUndefined($v_0) && this.storeElementForDisplayMode($v_0, $p0)
    },
    $Ex_0: function($p0) {},
    createComponentForDisplayMode: function($p0) {
        var $v_0 = this.createComponentForDisplayModeInternal($p0);
        Array.add(this.$k_0, $v_0);
        return $v_0
    },
    get_components: function() { return this.$k_0 },
    createComponentForDisplayModeInternal: function($p0) {
        var $v_0 = this.$0_0.$Fh_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
        return $v_0
    },
    dispose: function() {
        this.releaseEventHandlers();
        this.$0_0 = null;
        this.$k_0 = null;
        this.$5I_0 = null;
        this.$7_0 = null;
        var $$dict_1 = this.$3f_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            delete this.$3f_0[$v_0.key]
        }
        this.$3f_0 = null;
        !CUI.ScriptUtility.isNullOrUndefined(this.$1n_0) && this.$1n_0.dispose()
    },
    releaseEventHandlers: function() {
        var $$dict_1 = this.$3f_0;
        for (var $$key_2 in $$dict_1) {
            var $v_0 = { key: $$key_2, value: $$dict_1[$$key_2] };
            CUI.Utility.$BN($v_0.value)
        }
    },
    get_id: function() { return this.$6_0 },
    get_root: function() { return this.$0_0 },
    addDisplayMode: function($p0) {
        if (this.$5I_0.indexOf("," + $p0 + ",") !== -1) return;
        this.$5I_0 += $p0 + ","
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ToolTip.isInstanceOfType($p0))
            throw Error.create("Child Components may not be added to this type of ControlComponent.")
    },
    get_displayedComponent: function() {
        for (var $v_0 = this.$k_0.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$k_0[$v_1];
            if ($v_2.get_visibleInDOM()) return $v_2
        }
        return null
    },
    $4E_0: function($p0) { return true },
    $Dt_0: function($p0) {},
    onMenuClosed: function() {},
    onClick: function($p0) { $p0.preventDefault() },
    onDblClick: function($p0) {
        $p0.preventDefault();
        if (!this.$9_0) return;
        Sys.Browser.agent === Sys.Browser.InternetExplorer && this.onClick($p0)
    },
    onBeginFocus: function() {
        window.clearInterval(this.$0_0.$3S_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$44_1))
            if (this.$0_0.$44_1.$6_0 === this.$6_0) {
                this.launchToolTip();
                return
            } else {
                this.$0_0.$46_1();
                this.$0_0.$3S_1 = window.setTimeout(this.$$d_launchToolTip, 500)
            }
        else this.$0_0.$3S_1 = window.setTimeout(this.$$d_launchToolTip, 500)
    },
    onEndFocus: function() {
        window.clearInterval(this.$0_0.$3S_1);
        if (this.$7D_0) this.$0_0.$3S_1 = window.setTimeout(this.$$d_$n_0, 100)
    },
    onToolTipOpenned: function() {
        this.$8s_0 = this.$$d_onHelpKeyPress;
        this.$8r_0 = this.$1n_0.$$d_$I5_1;
        $addHandler(document, "keydown", this.$8s_0);
        $addHandler(document, "click", this.$8r_0)
    },
    onToolTipClosed: function() {
        $removeHandler(document, "keydown", this.$8s_0);
        $removeHandler(document, "click", this.$8r_0)
    },
    onHelpKeyPress: function($p0) { !CUI.ScriptUtility.isNullOrUndefined(this.$1n_0) && this.$1n_0.$Dp_1($p0) },
    launchToolTip: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$0_0)) return;
        window.clearInterval(this.$0_0.$3S_1);
        if (this.$7D_0) return;
        !CUI.ScriptUtility.isNullOrUndefined(this.$0_0
                .$44_1) &&
            this.$0_0.$44_1.$6_0 !== this.$6_0 &&
            this.$0_0.$46_1();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$7_0.ToolTipTitle)) return;
        this.$1n_0 = new CUI.ToolTip(this.$0_0,
            this.$6_0 + "_ToolTip",
            this.$7_0.ToolTipTitle,
            this.$7_0.ToolTipDescription,
            this.$7_0);
        if (!this.$9_0) {
            var $v_1 = new CUI.DisabledCommandInfoProperties;
            $v_1.Icon = this.$0_0.$7_1.ToolTipDisabledCommandImage16by16;
            $v_1.IconClass = this.$0_0.$7_1.ToolTipDisabledCommandImage16by16Class;
            $v_1.IconTop = this.$0_0.$7_1.ToolTipDisabledCommandImage16by16Top;
            $v_1.IconLeft = this.$0_0.$7_1.ToolTipDisabledCommandImage16by16Left;
            $v_1.Title = this.$0_0.$7_1.ToolTipDisabledCommandTitle;
            $v_1.Description = this.$0_0.$7_1.ToolTipDisabledCommandDescription;
            $v_1.HelpKeyWord = this.$0_0.$7_1.ToolTipDisabledCommandHelpKey;
            this.$1n_0.$1O_1 = $v_1
        }
        var $v_0 = this.get_displayedComponent();
        $v_0.$Ab_0();
        $v_0.addChild(this.$1n_0);
        this.$1n_0.$Fx_1();
        this.$7D_0 = true;
        this.$0_0.$44_1 = this;
        this.onToolTipOpenned()
    },
    $n_0: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$0_0) && window.clearInterval(this.$0_0.$3S_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1n_0)) {
            this.$1n_0.$DP_1();
            this.$7D_0 = false;
            this.onToolTipClosed();
            CUI.UIUtility.removeNode(this.$1n_0.get_$3_0());
            this.$1n_0 = null
        }
    },
    get_enabled: function() { return this.$9_0 },
    set_enabled: function($p0) {
        if (this.$9_0 === $p0 && this.$5b_0) return $p0;
        this.$9_0 = $p0;
        this.$5b_0 = true;
        this.onEnabledChanged($p0);
        return $p0
    },
    get_enabledInternal: function() { return this.$9_0 },
    set_enabledInternal: function($p0) {
        this.$9_0 = $p0;
        return $p0
    },
    $JL_0: function($p0) {
        this.$9_0 = $p0;
        this.onEnabledChanged($p0)
    },
    $Ih_0: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$7_0.Command) &&
            this.pollForStateAndUpdateInternal(this.$7_0.Command, null, null, false)
    },
    pollForStateAndUpdateInternal: function($p0, $p1, $p2, $p3) {
        var $v_0 = (this.$0_0.$Dz_1($p0, $p1, $p2, $p3) & 1) > 0;
        this.set_enabled($v_0);
        return $v_0
    },
    getTextValue: function() { return "" },
    receiveFocus: function() {},
    $8w_0: function() { return this.$Cm_0() },
    $8x_0: function() { return this.$Cm_0() },
    $Cm_0: function() {
        var $v_0 = this.get_displayedComponent();
        if (!CUI.MenuItem.isInstanceOfType($v_0)) return false;
        if (!$v_0.get_$1b_2()) {
            this.receiveFocus();
            return true
        }
        return false
    },
    $FU_0: function() {},
    $92_0: function() {
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return null;
        return $v_0.get_$3_0()
    },
    $Bc_0: function() { return false }
};
CUI.ControlComponent = function($p0, $p1, $p2, $p3) {
    CUI.ControlComponent.initializeBase(this, [$p0, $p1, $p2, ""]);
    this.$W_1 = $p3
};
CUI.ControlComponent.prototype = {
    $W_1: null,
    get_displayMode: function() { return this.get_title() },
    createChildArray: function() {},
    $2W_0: function() { this.$o_0 = false },
    $8v_0: function() { this.$W_1.$Ew_0(this.get_displayMode()) },
    $g_0: function() { this.$W_1.$Ex_0(this.get_displayMode()) },
    get_$3_0: function() { return this.$W_1.getDOMElementForDisplayMode(this.get_title()) },
    set_$3_0: function($p0) {
        throw Error
            .create("Cannot set the DOM Element of ControlComponents.  They get their DOM Elements from the Control.");
        return $p0
    },
    get_componentElement: function() { return CUI.Component.prototype.get_$3_0.call(this) },
    get_enabled: function() { return this.$W_1.$9_0 },
    set_enabled: function($p0) {
        this.$W_1.set_enabled($p0);
        return $p0
    },
    get_componentWidth: function() {
        if ((this._componentWidth === -1 || this.valueIsDirty(this._lastWidthUpdate)) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentWidth = this.get_$3_0().offsetWidth;
        return this._componentWidth
    },
    get_$FY_0: function() {
        if ((this._componentHeight === -1 || this.valueIsDirty(this._lastHeightUpdate)) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentHeight = this.get_$3_0().offsetHeight;
        return this._componentHeight
    },
    get_$CG_0: function() {
        if ((this._componentTopPosition === -1 || this.valueIsDirty(this._lastTopUpdate)) &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        return this._componentTopPosition
    },
    get_componentLeftPosition: function() {
        if ((this._componentLeftPosition === -1 || this.valueIsDirty(this._lastLeftUpdate)) &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentLeftPosition = CUI.UIUtility.calculateOffsetLeft(this.get_$3_0());
        return this._componentLeftPosition
    },
    setEnabledRecursively: function($p0) { this.$W_1.$JL_0($p0) },
    clone: function($p0) { return this.$W_1.createComponentForDisplayMode(this.get_displayMode()) },
    onEnabledChanged: function($p0) { this.$W_1.onEnabledChanged($p0) },
    ensureCorrectChildType: function($p0) { this.$W_1.ensureCorrectChildType($p0) },
    $4E_0: function($p0) { return this.$W_1.$4E_0($p0) },
    $Dt_0: function($p0) { this.$W_1.$Dt_0($p0) },
    get_textValue: function() { return this.$W_1.getTextValue() },
    $6P_0: function() { this.$W_1.$Ih_0() },
    receiveFocus: function() { this.$W_1.receiveFocus() },
    onMenuClosed: function() { this.$W_1.onMenuClosed() },
    $Bd_0: function() { return this.$W_1.$Bc_0() },
    dispose: function() {
        this.$W_1.dispose();
        this.$W_1 = null;
        CUI.Component.prototype.dispose.call(this)
    }
};
CUI.DataQueryResult = function() {};
CUI.DataQueryResult.prototype = { success: false, id: null, queryData: null, contextData: null };
CUI.DataQuery = function() {};
CUI.DataQuery.prototype = {
    dataUrl: null,
    version: null,
    lcid: null,
    id: null,
    queryType: 0,
    handler: null,
    data: null
};
CUI.DataSource = function(dataUrl, version, lcid) {
    this.$$d_onDataReturned = Function.createDelegate(this, this.onDataReturned);
    this.$6g_0 = dataUrl;
    this.$7H_0 = version;
    this.$71_0 = lcid;
    this.$A7_0 = {}
};
CUI.DataSource.prototype = {
    $6g_0: null,
    $A7_0: null,
    $7H_0: null,
    $71_0: null,
    dispose: function() {
        this.$6g_0 = null;
        this.$7H_0 = null;
        this.$71_0 = null;
        this.$A7_0 = null
    },
    get_dataUrl: function() { return this.$6g_0 },
    get_version: function() { return this.$7H_0 },
    get_lcid: function() { return this.$71_0 },
    runQuery: function(query) {
        var $v_0 = this.$7H_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.version)) $v_0 = query.version;
        var $v_1 = this.$71_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.lcid)) $v_1 = query.lcid;
        var $v_2 = this.$6g_0;
        if (!CUI.ScriptUtility.isNullOrUndefined(query.dataUrl)) $v_2 = query.dataUrl;
        var $v_3, $v_4 = null;
        if ($v_2.indexOf("?") === -1) $v_3 = $v_2 + "?ver=";
        else $v_3 = $v_2 + "&ver=";
        $v_3 = $v_3 + $v_0 + "&id=" + query.id + "&lcid=" + $v_1 + "&qt=";
        switch (query.queryType) {
        case 1:
            $v_4 = "all";
            break;
        case 4:
            $v_4 = "ribbontab";
            break;
        case 3:
            $v_4 = "ribbonshallow";
            break;
        case 5:
            $v_4 = "root";
            break;
        case 2:
            $v_4 = "ribbonvisibletabdeep";
            break
        }
        $v_3 += $v_4;
        CUI.PMetrics.perfMark(7109);
        var $v_5 = new Sys.Net.WebRequest;
        $v_5.set_httpVerb("GET");
        $v_5.set_url($v_3);
        var $v_6 = new CUI.QueryRecord;
        $v_6.id = query.id;
        $v_6.queryType = query.queryType;
        $v_6.data = query.data;
        $v_6.handler = query.handler;
        $v_5.set_userContext($v_6);
        $v_5.add_completed(this.$$d_onDataReturned);
        $v_5.invoke()
    },
    onDataReturned: function(executor) {
        CUI.PMetrics.perfMark(7110);
        var $v_0 = executor.get_webRequest().get_userContext(), $v_1 = new CUI.DataQueryResult;
        $v_1.contextData = $v_0.data;
        $v_1.id = $v_0.id;
        if (executor.get_responseAvailable()) {
            $v_1.success = true;
            $v_1.queryData = executor.get_object();
            $v_0.handler($v_1)
        } else {
            $v_1.success = false;
            $v_0.handler($v_1)
        }
    }
};
CUI.Gallery = function($p0, $p1, $p2, $p3, $p4) {
    this.$A_1 = -1;
    CUI.Gallery.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$4G_1 = $p4;
    this.$67_1 = parseInt(this.$4G_1.Width);
    this.$6m_1 = CUI.Gallery.$CJ(this.$4G_1.ElementDimensions)
};
CUI.Gallery.$CJ = function($p0) {
    switch ($p0) {
    case "Size16by16":
        return 1;
    case "Size32by32":
        return 2;
    case "Size48by48":
        return 3;
    case "Size64by48":
        return 4;
    case "Size72by96":
        return 5;
    case "Size96by72":
        return 6;
    case "Size96by96":
        return 7;
    case "Size128by128":
        return 8;
    case "Size190by30":
        return 9;
    case "Size190by40":
        return 10;
    case "Size190by50":
        return 11;
    case "Size190by60":
        return 12;
    default:
        throw Error.argument("s", "The parameter s is not a valid GalleryElementDimension")
    }
};
CUI.Gallery.prototype = {
    $4G_1: null,
    $6m_1: 0,
    $67_1: 0,
    $8f_1: null,
    get_domElementTagName: function() { return "table" },
    get_cssClass: function() { return "ms-cui-gallery" },
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        var $v_0 = CUI.Utility.$5("tbody");
        this.get_$3_0().appendChild($v_0);
        this.appendChildrenToElement($v_0)
    },
    appendChildrenToElement: function($p0) {
        for (var $v_0 = Math.ceil(this.$8_0.$T_0 / this.$67_1), $v_1, $v_2, $v_3, $v_4 = 0, $v_5 = 0;
            $v_5 < $v_0;
            $v_5++) {
            $v_1 = CUI.Utility.$5("tr");
            for (var $v_6 = 0; $v_6 < this.$67_1; $v_6++) {
                $v_2 = CUI.Utility.$5("td");
                $v_2.className = "ms-cui-gallery-td ms-cui-gallery-element-" + this.$6m_1.toString();
                if ($v_4 < this.$8_0.$T_0) {
                    $v_3 = this.$8_0.get_item($v_4++);
                    $v_3.$2U_0();
                    $v_2.appendChild($v_3.get_$3_0());
                    $v_3.$3V_0()
                }
                $v_1.appendChild($v_2)
            }
            $p0.appendChild($v_1)
        }
    },
    $8c_1: false,
    $4E_0: function($p0) {
        if (this.$8c_1) return true;
        if ($p0.$M_1 === 3) {
            var $v_0 = $p0.$41_1;
            if (!CUI.ISelectableControl.isInstanceOfType($v_0
                .$W_1)) return CUI.Component.prototype.$4E_0.call(this, $p0);
            var $v_1 = $v_0.$W_1;
            !CUI.ScriptUtility.isNullOrUndefined(this.$8f_1) && this.$8f_1.deselect();
            this.$8f_1 = $v_1
        }
        if ($p0.$M_1 === 3 || $p0.$M_1 === 7 || $p0.$M_1 === 8) {
            var $v_2;
            switch ($p0.$M_1) {
            case 3:
                $v_2 = this.$4G_1.Command;
                break;
            case 7:
                $v_2 = this.$4G_1.CommandPreview;
                break;
            case 8:
                $v_2 = this.$4G_1.CommandRevert;
                break;
            default:
                $v_2 = this.$4G_1.Command;
                break
            }
            this.$8c_1 = true;
            this.raiseCommandEvent($v_2, $p0.$M_1, $p0.$3w_1);
            this.$8c_1 = false;
            CUI.Component.prototype.$4E_0.call(this, $p0);
            return false
        }
        return CUI.Component.prototype.$4E_0.call(this, $p0)
    },
    $1J_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 = 0;
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.$1J_0()
        }
    },
    $Aj_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = 0;
        this.$8_0.get_item(this.$A_1).$Aj_0()
    },
    $Al_0: function() {
        var $v_0 = this.$8_0.$T_0;
        if (!$v_0) return;
        this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = $v_0 - 1;
        this.$8_0.get_item(this.$A_1).$Al_0()
    },
    $Ak_0: function($p0) {
        if (!this.$8_0.$T_0) return false;
        var $v_0 = 0, $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            if ($v_1.$Ak_0($p0)) {
                this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
                this.$A_1 = $v_0;
                return true
            }
            $v_0++
        }
        return false
    },
    $8x_0: function() {
        if (this.$A_1 === -1) this.$A_1 = this.$8_0.$T_0 - 1;
        var $v_0 = this.$A_1, $v_1 = this.$8_0.getEnumeratorAtPos($v_0);
        while ($v_1.movePrevious()) {
            if ($v_1.get_current().$8x_0()) {
                if ($v_0 !== this.$A_1) {
                    this.$8_0.get_item(this.$A_1).$1J_0();
                    this.$A_1 = $v_0
                }
                return true
            }
            $v_0--
        }
        this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = -1;
        return false
    },
    $8w_0: function() {
        if (this.$A_1 === -1) this.$A_1 = 0;
        var $v_0 = this.$A_1, $v_1 = this.$8_0.getEnumeratorAtPos($v_0);
        while ($v_1.moveNext()) {
            if ($v_1.get_current().$8w_0()) {
                if ($v_0 !== this.$A_1) {
                    this.$8_0.get_item(this.$A_1).$1J_0();
                    this.$A_1 = $v_0
                }
                return true
            }
            $v_0++
        }
        this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = -1;
        return false
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Galleries can only have children controls of type GalleryButton");
        var $v_0 = $p0;
        if (!CUI.Controls.GalleryButton.isInstanceOfType($v_0
            .$W_1)) throw Error.create("Galleries can only have children of type GalleryButton")
    },
    get_elementDimensions: function() { return this.$6m_1 },
    set_elementDimensions: function($p0) {
        this.$6m_1 = $p0;
        return $p0
    },
    get_width: function() { return this.$67_1 },
    set_width: function($p0) {
        this.$67_1 = $p0;
        return $p0
    }
};
CUI.Jewel = function($p0, $p1) { CUI.Jewel.initializeBase(this, [$p0, $p1]) };
CUI.Jewel.prototype = {
    $A3_2: null,
    refresh: function() {
        this.$2W_0();
        CUI.Root.prototype.refresh.call(this)
    },
    $2W_0: function() {
        CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.$2U_0();
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$o_0 = false
    },
    ensureCorrectChildType: function(child) {
        if (!CUI.ControlComponent.isInstanceOfType(child))
            throw Error.create('The child "' + child.$6_0 + '" is not a ControlComponent');
        if (!CUI.Controls.JewelMenuLauncher
            .isInstanceOfType(child.$W_1))
            throw Error.create("Only children of type JewelMenuLauncher can be added to a Jewel")
    },
    get_cssClass: function() { return "ms-cui-jewel " + CUI.Root.prototype.get_cssClass.call(this) },
    get_rootType: function() { return "Jewel" },
    get_visibleInDOM: function() { return true },
    set_$Hr_2: function($p0) {
        this.set_$25_1($p0);
        return $p0
    },
    $Gg_2: function() { this.$A3_2.$Gi_2() }
};
CUI.JewelBuildContext = function() { CUI.JewelBuildContext.initializeBase(this) };
CUI.JewelBuildContext.prototype = { jewel: null, jewelId: null };
CUI.JewelBuildOptions = function() { CUI.JewelBuildOptions.initializeBase(this) };
CUI.JewelBuilder = function(options, elmPlaceholder, rootBuildClient) {
    this.$$d_$Du_1 = Function.createDelegate(this, this.$Du_1);
    CUI.JewelBuilder.initializeBase(this, [options, elmPlaceholder, rootBuildClient]);
    if (CUI.ScriptUtility
        .isNullOrUndefined(elmPlaceholder)) throw Error.create("Jewel placeholder DOM element is null or undefined.")
};
CUI.JewelBuilder.prototype = {
    get_jewel: function() { return this.$0_0 },
    set_jewel: function(value) {
        this.$0_0 = value;
        return value
    },
    buildJewel: function(jewelId) {
        if (this.$3I_0) return false;
        if (this.isIdTrimmed(jewelId)) return true;
        var $v_0 = new CUI.JewelBuildContext;
        $v_0.jewelId = jewelId;
        this.$3I_0 = true;
        var $v_1 = new CUI.DataQuery;
        $v_1.id = $v_0.jewelId;
        $v_1.queryType = 5;
        $v_1.handler = this.$$d_$Du_1;
        $v_1.data = $v_0;
        this.$10_0.runQuery($v_1);
        return true
    },
    $FB_1: function($p0, $p1) {
        var $v_0 = new CUI.DataQueryResult;
        $v_0.success = true;
        $v_0.queryData = $p0;
        $v_0.contextData = $p1;
        this.$Du_1($v_0)
    },
    $Du_1: function($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, "Jewel");
        this.set_jewel(this.$FC_1($v_1, $v_0));
        this.get_jewel().set_$Hr_2(this);
        this.$1l_0.onComponentCreated(this.get_jewel(), this.get_jewel().$6_0);
        if (this.get_$Hs_1().attachToDOM) this.get_jewel().$68_0(true);
        else {
            this.get_jewel().$2W_0();
            this._elmPlaceholder.appendChild(this.get_jewel().get_$3_0());
            CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, "loaded")
        }
        this.$BI_0(this.get_jewel());
        this.$1l_0.onComponentBuilt(this.get_jewel(), this.get_jewel().$6_0)
    },
    $FC_1: function($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) throw Error.create("No Jewel element was present in the data");
        var $v_0 = new CUI.DataNodeWrapper($p0);
        this.set_jewel(new CUI.Jewel($v_0.get_attributes()["Id"], $v_0.get_attributes()));
        var $v_1 = this.$FD_1($p0, $p1);
        this.get_jewel().addChild($v_1.createComponentForDisplayMode("Default"));
        this.get_jewel().$A3_2 = $v_1;
        return this.get_jewel()
    },
    $FD_1: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = CUI.DataNodeWrapper.getNodeChildren($p0), $v_2 = null, $v_3 = $p0.attrs;
        if (!CUI.Utility.$1F($v_3.PopulateDynamically)) $v_2 = this.$4z_0($v_1[0], $p1, false);
        var $v_4 = new CUI.Controls.JewelMenuLauncher(this.get_jewel(), $v_0.Id, $v_0, $v_2);
        return $v_4
    },
    get_$Hs_1: function() { return this.$16_0 }
};
CUI.Menu = function($p0, $p1, $p2, $p3, $p4) {
    this.$A_1 = -1;
    CUI.Menu.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$8G_1 = $p4
};
CUI.Menu.prototype = {
    $X_1: null,
    $Bt_1: null,
    $Bs_1: null,
    $4s_1: null,
    $8G_1: null,
    $9V_1: 25,
    $2W_0: function() {
        this.get_needsDelayIniting() && this.doDelayedInit();
        this.ensureDOMElementAndEmpty();
        var $v_0 = this.$0_0._textDirection, $v_1 = this.get_$3_0(), $v_2 = this.$X_1;
        if (!$v_0) $v_1.style.direction = "ltr";
        else if ($v_0 === 1) {
            CUI.Utility.ensureCSSClassOnElement($v_1, "ms-cui-rtl");
            $v_1.style.direction = "rtl"
        }
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) {
            $v_2 = CUI.Utility.$5("div");
            $v_2.className = "ms-cui-smenu-inner"
        }
        $v_1.setAttribute("role", "menu");
        $v_1.appendChild($v_2);
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$8G_1)) $v_1.style.maxWidth = this.$8G_1;
        this.appendChildrenToElement($v_2);
        CUI.Component.prototype.$2W_0.call(this);
        $addHandler($v_1, "contextmenu", CUI.Utility.get_returnFalseHandler())
    },
    get_cssClass: function() { return "ms-cui-menu" },
    get_domElementTagName: function() { return "div" },
    ensureCorrectChildType: function($p0) {
        if (!CUI.MenuSection.isInstanceOfType($p0))
            throw Error.create("Only MenuSection Components can be added to Menu Components.")
    },
    get_innerDiv: function() { return this.$X_1 },
    set_innerDiv: function($p0) {
        this.$X_1 = $p0;
        return $p0
    },
    get_additionalWidth: function() {
        var $v_0 = this.$9V_1;
        this.$9V_1 = 0;
        return $v_0
    },
    $8X_1: null,
    set_$Dy_1: function($p0) {
        $p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$8X_1) && this.$0_0.$45_1(this.$8X_1);
        this.$8X_1 = $p0;
        return $p0
    },
    get_componentWidth: function() {
        if (this
            ._componentWidth ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentWidth = this.get_$3_0().offsetWidth;
        return this._componentWidth
    },
    get_$FY_0: function() {
        if (this
            ._componentHeight ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentHeight = this.get_$3_0().offsetHeight;
        return this._componentHeight
    },
    get_$CG_0: function() {
        if (this
            ._componentTopPosition ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        return this._componentTopPosition
    },
    get_componentLeftPosition: function() {
        if (this
            ._componentLeftPosition ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentLeftPosition = CUI.UIUtility.calculateOffsetLeft(this.get_$3_0());
        return this._componentLeftPosition
    },
    $He_1: function() {
        this._componentWidth = -1;
        this._componentHeight = -1;
        this._componentTopPosition = -1;
        this._componentLeftPosition = -1
    },
    $6P_0: function() {
        this.$3L_0 = new Date;
        CUI.Component.prototype.$6P_0.call(this)
    },
    $1J_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 = 0;
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.$1J_0()
        }
    },
    $Aj_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 = 0;
        this.$8_0.get_item(0).$Aj_0();
        this.$8w_0()
    },
    $Al_0: function() {
        var $v_0 = this.$8_0.$T_0;
        if (!$v_0) return;
        this.$A_1 = $v_0 - 1;
        this.$8_0.get_item(this.$A_1).$Al_0();
        this.$8x_0()
    },
    $Ak_0: function($p0) {
        if (!this.$8_0.$T_0) return false;
        this.$A_1 = 0;
        var $v_0 = 0, $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            if ($v_1.$Ak_0($p0)) {
                this.$A_1 = $v_0;
                return true
            }
            $v_0++
        }
        return false
    },
    $8x_0: function() {
        if (this.$A_1 === -1) this.$A_1 = this.$8_0.$T_0 - 1;
        var $v_0 = this.$8_0.getEnumeratorAtPos(this.$A_1), $v_1 = this.$A_1;
        while ($v_0.movePrevious()) {
            if ($v_0.get_current().$8x_0()) {
                this.$A_1 = $v_1;
                return true
            }
            $v_1--
        }
        this.$A_1 = -1;
        return false
    },
    $8w_0: function() {
        if (this.$A_1 === -1) this.$A_1 = 0;
        var $v_0 = this.$8_0.getEnumeratorAtPos(this.$A_1), $v_1 = this.$A_1;
        while ($v_0.moveNext()) {
            if ($v_0.get_current().$8w_0()) {
                this.$A_1 = $v_1;
                return true
            }
            $v_1++
        }
        this.$A_1 = -1;
        return false
    },
    $DE_1: function($p0) { return this.$DF_1(this, $p0) },
    $DF_1: function($p0, $p1) {
        var $v_0;
        if (CUI.ControlComponent.isInstanceOfType($p0)) {
            var $v_2 = $p0;
            if (CUI.ISelectableControl.isInstanceOfType($v_2.$W_1)) {
                var $v_3 = $v_2.$W_1;
                if ($v_3.getMenuItemId() === $p1) return $v_3
            }
        }
        var $v_1 = $p0.$8_0;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            var $$enum_7 = $v_1.getEnumerator();
            while ($$enum_7.moveNext()) {
                var $v_4 = $$enum_7.get_current();
                $v_0 = this.$DF_1($v_4, $p1);
                if ($v_0) return $v_0
            }
        }
        return null
    },
    $HT_1: function() {
        var $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_0 = $$enum_3.get_current(), $$enum_2 = $v_0.$8_0.getEnumerator();
            while ($$enum_2.moveNext()) {
                var $v_1 = $$enum_2.get_current();
                if ($v_1.get_visible()) return true
            }
        }
        return false
    },
    get_visibleInDOM: function() { return this.$8D_1 },
    $8D_1: false,
    dispose: function() {
        CUI.Component.prototype.dispose.call(this);
        this.$X_1 = null;
        this.$Bt_1 = null;
        this.$Bs_1 = null;
        this.$4s_1 = null;
        try {
            $removeHandler(this.get_$3_0(), "contextmenu", CUI.Utility.get_returnFalseHandler())
        } catch ($$e_0) {
        }
    }
};
CUI.MenuItem = function($p0, $p1, $p2, $p3) { CUI.MenuItem.initializeBase(this, [$p0, $p1, $p2, $p3]) };
CUI.MenuItem.prototype = {
    $9m_2: false,
    get_$1b_2: function() { return this.$9m_2 },
    set_$1b_2: function($p0) {
        this.$9m_2 = $p0;
        return $p0
    },
    $Ak_0: function($p0) {
        if (CUI.ISelectableControl.isInstanceOfType(this.$W_1)) {
            var $v_0 = this.$W_1;
            if ($v_0.getMenuItemId() === $p0)
                if (this.get_visible() && this.get_enabled()) {
                    this.receiveFocus();
                    this.set_$1b_2(true);
                    return true
                }
        }
        return false
    },
    $8x_0: function() {
        if (!this.get_visible()) return false;
        this.set_$1b_2(this.$W_1.$8x_0());
        return this.get_$1b_2()
    },
    $8w_0: function() {
        if (!this.get_visible()) return false;
        this.set_$1b_2(this.$W_1.$8w_0());
        return this.get_$1b_2()
    },
    $1J_0: function() { this.set_$1b_2(false) }
};
CUI.MenuLauncherControlProperties = function() { CUI.MenuLauncherControlProperties.initializeBase(this) };
CUI.MenuLauncherControlProperties.prototype = {
    CacheMenuVersions: null,
    CommandMenuOpen: null,
    CommandMenuClose: null,
    CommandValueId: null,
    PopulateDynamically: null,
    PopulateOnlyOnce: null,
    PopulateQueryCommand: null
};
CUI.BrowserUtility = function() {};
CUI.BrowserUtility.$DY = function() {
    return Sys.Browser.agent === Sys.Browser.Firefox ||
        Sys.Browser.name.toLowerCase().indexOf("firefox") !== -1 ||
        navigator.userAgent.toLowerCase().indexOf("gecko") !== -1
};
CUI.BrowserUtility.$Hm = function() {
    return navigator.userAgent != "" &&
        navigator.userAgent != null &&
        (navigator.userAgent.toLowerCase().search("ipad") > -1 ||
            navigator.userAgent.toLowerCase().search("ipod") > -1 ||
            navigator.userAgent.toLowerCase().search("iphone") > -1)
};
CUI.MenuLauncher = function($p0, $p1, $p2, $p3) {
    this.$$d_$Ic_1 = Function.createDelegate(this, this.$Ic_1);
    this.$$d_addAndPositionBackFrameInternal = Function.createDelegate(this, this.addAndPositionBackFrameInternal);
    this.$8Z_1 = -1;
    CUI.MenuLauncher.initializeBase(this, [$p0, $p1, $p2]);
    this.$F_1 = $p3
};
CUI.MenuLauncher.dictToInt = function($p0, $p1) { return $p0[$p1] };
CUI.MenuLauncher.prototype = {
    $t_1: false,
    _selectedControl: null,
    get_menuLaunched: function() { return this.$t_1 },
    $F_1: null,
    $1D_1: false,
    get_launchedByKeyboard: function() { return this.$1D_1 },
    set_launchedByKeyboard: function($p0) {
        this.$1D_1 = $p0;
        return $p0
    },
    $3D_1: null,
    get_elmHadFocus: function() { return this.$3D_1 },
    set_elmHadFocus: function($p0) {
        this.$3D_1 = $p0;
        return $p0
    },
    $4U_1: null,
    get_$C2_1: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4U_1)) this.$4U_1 = CUI.Utility.$CO();
        return this.$4U_1
    },
    launchMenu: function($p0, $p1) {
        if (this.$t_1) return false;
        this.$3D_1 = $p0;
        CUI.Utility.$1F(this.get_$2_1().PopulateDynamically) && this.pollForDynamicMenu(true, $p1);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$F_1)) return false;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5p_1)) {
            this.$5p_1();
            this.$5p_1 = null
        }
        this.$F_1.$3V_0();
        if (!this.$F_1.$HT_1()) return false;
        var $v_0 = this.get_displayedComponent();
        $v_0.$Ab_0();
        $v_0.$5f_0 = true;
        $v_0.addChild(this.$F_1);
        $v_0.$5f_0 = false;
        this.$F_1.$E0_0();
        this.$F_1.$He_1();
        var $v_1 = CUI.Ribbon.isInstanceOfType(this.$0_0), $v_2 = null, $v_3 = false;
        if ($v_1) {
            $v_2 = this.$0_0;
            $v_3 = $v_2.$8t_2;
            $v_2.set_$9U_2(false)
        }
        var $v_4 = this.$F_1.get_$3_0();
        $v_4.style.visibility = "hidden";
        $v_4.style.position = "absolute";
        $v_4.style.top = "0px";
        $v_4.style.left = "0px";
        $v_4.style.zIndex = 1001;
        document.body.appendChild($v_4);
        if ((CUI.Utility.$58() || CUI.Utility.get_$99()) && this.$0_0._textDirection === 1) {
            var $v_5 = $v_4.offsetWidth + this.$F_1.get_additionalWidth();
            $v_5 = $v_5 >= 18 ? $v_5 - 18 : 0;
            var $v_6 = $v_5 + "px", $v_7 = this.$F_1.$8_0, $$enum_E = $v_7.getEnumerator();
            while ($$enum_E.moveNext()) {
                var $v_8 = $$enum_E.get_current(), $v_9 = $v_8.$8_0, $$enum_D = $v_9.getEnumerator();
                while ($$enum_D.moveNext()) {
                    var $v_A = $$enum_D.get_current();
                    if (CUI.MenuItem.isInstanceOfType($v_A)) $v_A.get_$3_0().style.width = $v_6
                }
            }
        }
        this.positionMenu($v_4, $v_0.get_$3_0());
        Sys.Browser.agent === Sys.Browser.InternetExplorer && this.addAndPositionBackFrame();
        this.$0_0.$Ez_1(this, this.$3D_1);
        this.$0_0.$Eq_1(this);
        $v_4.style.visibility = "visible";
        this.$t_1 = true;
        this.$F_1.$8D_1 = true;
        this.$Gh_1();
        $v_1 && $v_2.set_$9U_2($v_3);
        return true
    },
    $Gh_1: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$F_1.$4s_1) &&
            !CUI.ScriptUtility.isNullOrUndefined(this._selectedControl)) {
            var $v_0 = this._selectedControl, $v_1 = $v_0.get_displayedComponent();
            if (CUI.MenuItem.isInstanceOfType($v_1)) this.$F_1.$4s_1 = $v_1
        }
        if (this.$1D_1) this.$F_1.$Aj_0();
        else {
            var $v_2 = this.$F_1.$4s_1;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && !CUI.BrowserUtility.$Hm()) {
                var $v_3 = $v_2.$W_1;
                if (CUI.Controls.ToggleButton.isInstanceOfType($v_3) && CUI.ISelectableControl.isInstanceOfType($v_3)) {
                    var $v_4 = $v_3;
                    !this.$F_1.$Ak_0($v_4.getMenuItemId()) && this.$F_1.$Aj_0()
                }
            }
        }
    },
    addAndPositionBackFrame: function() {
        this.$8Z_1 !== -1 && window.clearTimeout(this.$8Z_1);
        this.$8Z_1 = window.setTimeout(this.$$d_addAndPositionBackFrameInternal, 50)
    },
    addAndPositionBackFrameInternal: function() {
        CUI.PMetrics.perfMark(7188);
        document.body.appendChild(this.get_$C2_1());
        CUI.Utility.$E1(this.get_$C2_1(), this.$F_1.get_$3_0());
        CUI.PMetrics.perfMark(7189)
    },
    onModalBodyClick: function($p0) {
        $p0.stopPropagation();
        this.$1D_1 = false;
        this.$0_0.$45_1(this)
    },
    onModalBodyMouseOver: function($p0) {},
    onModalBodyMouseOut: function($p0) {},
    onModalContextMenu: function($p0) {
        $p0.stopPropagation();
        !CUI.BrowserUtility.$DY() && $p0.preventDefault();
        this.$1D_1 = false;
        this.$0_0.$45_1(this)
    },
    onModalKeyPress: function($p0) {
        if ($p0)
            if ($p0.rawEvent) {
                if ($p0.rawEvent.keyCode === 27) {
                    $p0.stopPropagation();
                    this.$1D_1 = true;
                    this.$0_0.$45_1(this)
                }
                if ($p0.rawEvent.keyCode === 9)
                    if ($p0.shiftKey) {
                        !this.$F_1.$8x_0() && this.$F_1.$Al_0();
                        $p0.preventDefault()
                    } else {
                        !this.$F_1.$8w_0() && this.$F_1.$Aj_0();
                        $p0.preventDefault()
                    }
                if ($p0.rawEvent.keyCode === 40) {
                    !this.$F_1.$8w_0() && this.$F_1.$Aj_0();
                    $p0.preventDefault();
                    $p0.stopPropagation()
                }
                if ($p0.rawEvent.keyCode === 38) {
                    !this.$F_1.$8x_0() && this.$F_1.$Al_0();
                    $p0.preventDefault();
                    $p0.stopPropagation()
                }
                if (CUI.Controls.FlyoutAnchor.isInstanceOfType(this)) {
                    if ($p0.rawEvent.keyCode === 39 && !this.$0_0._textDirection ||
                        $p0.rawEvent.keyCode === 37 && this.$0_0._textDirection === 1) {
                        !this.$F_1.$8w_0() && this.$F_1.$Aj_0();
                        $p0.preventDefault();
                        $p0.stopPropagation()
                    }
                    if ($p0.rawEvent.keyCode === 37 && !this.$0_0._textDirection ||
                        $p0.rawEvent.keyCode === 39 && this.$0_0._textDirection === 1) {
                        !this.$F_1.$8x_0() && this.$F_1.$Al_0();
                        $p0.preventDefault();
                        $p0.stopPropagation()
                    }
                }
            }
    },
    positionMenu: function($p0, $p1) { this.$0_0.$Il_1($p0, $p1) },
    getAllElementDimensions: function($p0, $p1) { return this.$0_0.$Aw_1($p0, $p1) },
    $6A_1: function() {
        if (!this.$t_1) return;
        $clearHandlers(this.$F_1.get_$3_0());
        CUI.UIUtility.removeNode(this.$F_1.get_$3_0());
        !CUI.ScriptUtility.isNullOrUndefined(this.$4U_1) && CUI.UIUtility.removeNode(this.$4U_1);
        this.$F_1.onMenuClosed();
        var $v_0 = this.$F_1.$U_0;
        $v_0.$5f_0 = true;
        $v_0.removeChild(this.$F_1.$6_0);
        $v_0.$5f_0 = false;
        this.$t_1 = false;
        this.$F_1.$8D_1 = false;
        this.$0_0.$G2_1(this);
        !CUI.ScriptUtility.isNullOrUndefined(this.$3D_1) && this.$1D_1 && this.$3D_1.focus();
        this.$3D_1 = null;
        this.$1D_1 = false;
        this.onLaunchedMenuClosed()
    },
    onMenuClosed: function() {},
    onLaunchedMenuClosed: function() { this.$F_1.$1J_0() },
    ensureCorrectChildType: function($p0) {
        if (!CUI.Menu
            .isInstanceOfType($p0) &&
            !CUI.ToolTip.isInstanceOfType($p0))
            throw Error.create("This Component can only have Menu and ToolTip Components as children.")
    },
    $4E_0: function($p0) {
        if (this.$t_1 &&
            $p0.$M_1 !== 4 &&
            $p0.$M_1 !== 5 &&
            $p0.$M_1 !== 6 &&
            $p0.$M_1 !== 7 &&
            $p0.$M_1 !== 8 &&
            $p0.$M_1 !== 9 &&
            $p0.$M_1 !== 10) {
            if (!CUI.ScriptUtility.isNullOrUndefined($p0.get_sourceControl())) {
                var $v_0 = $p0.get_sourceControl().get_displayedComponent();
                this.$F_1.$4s_1 = $v_0
            }
            this.$0_0.$45_1(this)
        }
        return true
    },
    $5x_1: false,
    $5p_1: null,
    pollForDynamicMenu: function($p0, $p1) {
        if (this.$5x_1 && CUI.Utility.$1F(this.get_$2_1().PopulateOnlyOnce)) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().PopulateQueryCommand)) return;
        var $v_0 = {}, $v_1;
        if (CUI.Utility.$1F(this.get_$2_1().CacheMenuVersions)) {
            $v_1 = {};
            var $$dict_5 = this.$4M_1;
            for (var $$key_6 in $$dict_5) {
                var $v_3 = { key: $$key_6, value: $$dict_5[$$key_6] };
                $v_1[$v_3.key] = true
            }
            $v_0.CachedVersions = $v_1
        }
        var $v_2 = this.$0_0.$7U_1(this.get_$2_1().PopulateQueryCommand, this.get_$2_1().PopulateQueryCommand, $v_0);
        if ($v_2) {
            var $v_4 = null, $v_5 = null;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0.PopulationJSON)) $v_5 = $v_0.PopulationJSON;
            else if (!CUI.ScriptUtility.isNullOrUndefined($v_0
                .PopulationXML)) $v_5 = CUI.Builder.$CK($v_0.PopulationXML);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_5)) {
                $v_4 = this.$0_0.get_$25_1().$4z_0($v_5, new CUI.BuildContext, false);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                    this.$5x_1 = true;
                    if (CUI.Utility.$1F(this.get_$2_1().CacheMenuVersions) &&
                        !CUI.ScriptUtility
                        .isNullOrUndefined($v_0
                            .PopulationVersion)) this.get_cachedMenuVersions()[$v_0.PopulationVersion] = $v_4
                }
            } else if (!CUI.ScriptUtility.isNullOrUndefined($v_0
                .PopulationVersion)) $v_4 = this.get_cachedMenuVersions()[$v_0.PopulationVersion];
            else if ($p0 && -1 !== $v_0.PollAgainInterval) {
                this.$5p_1 = $p1;
                window.setTimeout(this.$$d_$Ic_1, $v_0.PollAgainInterval);
                this.$F_1 = null
            }
            if (!CUI.ScriptUtility.isNullOrUndefined($v_4)) {
                this.$F_1 = $v_4;
                this.onDynamicMenuPopulated()
            }
        }
    },
    $Ic_1: function() { this.launchMenu(this.$3D_1, this.$5p_1) },
    onDynamicMenuPopulated: function() {},
    get_$2_1: function() { return this.$7_0 },
    $4M_1: null,
    get_cachedMenuVersions: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4M_1)) this.$4M_1 = {};
        return this.$4M_1
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        !CUI.ScriptUtility.isNullOrUndefined(this.$F_1) && this.$F_1.dispose();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4M_1)) {
            var $$dict_2 = this.$4M_1;
            for (var $$key_3 in $$dict_2) {
                var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] }, $v_1 = $v_0.value;
                $v_1.dispose()
            }
        }
        this._selectedControl = null;
        this.$F_1 = null;
        this.$4U_1 = null
    }
};
CUI.MenuSection = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    this.$A_1 = -1;
    CUI.MenuSection.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$AF_1 = $p4;
    this.$8F_1 = $p5;
    this.$7r_1 = $p6
};
CUI.MenuSection.prototype = {
    $AF_1: false,
    $8F_1: null,
    $7r_1: null,
    $4c_1: null,
    $G_1: null,
    $2r_1: null,
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.$4c_1 = CUI.Utility.$5("div");
        this.$4c_1.className = "ms-cui-menusection";
        this.get_$3_0().appendChild(this.$4c_1);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_title())) {
            this.$G_1 = CUI.Utility.$5("div");
            CUI.UIUtility.setInnerText(this.$G_1, this.get_title());
            this.$G_1.className = "ms-cui-menusection-title";
            this.$4c_1.appendChild(this.$G_1)
        }
        this.$2r_1 = CUI.Utility.$5("ul");
        this.$2r_1.className = "ms-cui-menusection-items";
        var $v_0;
        if (this.$7r_1 === "Menu32") {
            if (!this.$0_0._textDirection) $v_0 = "ms-cui-menusection-items32";
            else $v_0 = "ms-cui-menusection-items32rtl";
            var $v_1 = this.$U_0;
            CUI.Menu.isInstanceOfType($v_1) && CUI.Utility.ensureCSSClassOnElement($v_1.get_$3_0(), "ms-cui-menu32")
        } else if (this.$7r_1 === "Menu16")
            if (!this.$0_0._textDirection) $v_0 = "ms-cui-menusection-items16";
            else $v_0 = "ms-cui-menusection-items16rtl";
        else $v_0 = "";
        $v_0 !== "" && CUI.Utility.ensureCSSClassOnElement(this.$2r_1, $v_0);
        if (this.$AF_1) {
            this.$2r_1.style.overflowY = "auto";
            this.$2r_1.style.position = "relative"
        }
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$8F_1)) this.$2r_1.style.maxHeight = this.$8F_1;
        this.$4c_1.appendChild(this.$2r_1);
        this.appendChildrenToElement(this.$2r_1)
    },
    get_domElementTagName: function() { return "div" },
    appendChildrenToElement: function($p0) {
        var $v_0, $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            $v_0 = CUI.Utility.$5("li");
            $v_0.className = "ms-cui-menusection-items";
            $v_1.$2U_0();
            $v_0.appendChild($v_1.get_$3_0());
            $p0.appendChild($v_0);
            $v_1.$3V_0()
        }
    },
    $1J_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 = 0;
        var $$enum_1 = this.$8_0.getEnumerator();
        while ($$enum_1.moveNext()) {
            var $v_0 = $$enum_1.get_current();
            $v_0.$1J_0()
        }
    },
    $Aj_0: function() {
        if (!this.$8_0.$T_0) return;
        this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = 0;
        this.$8_0.get_item(this.$A_1).$Aj_0()
    },
    $Al_0: function() {
        var $v_0 = this.$8_0.$T_0;
        if (!$v_0) return;
        this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = $v_0 - 1;
        this.$8_0.get_item(this.$A_1).$Al_0()
    },
    $Ak_0: function($p0) {
        if (!this.$8_0.$T_0) return false;
        var $v_0 = 0, $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            if ($v_1.$Ak_0($p0)) {
                this.$A_1 > -1 && this.$8_0.get_item(this.$A_1).$1J_0();
                this.$A_1 = $v_0;
                return true
            }
            $v_0++
        }
        return false
    },
    $8x_0: function() {
        var $v_0 = this.$8_0.$T_0;
        if (this.$A_1 === -1) this.$A_1 = $v_0 - 1;
        var $v_1 = this.$A_1, $v_2 = this.$8_0.getEnumeratorAtPos($v_1);
        while ($v_2.movePrevious()) {
            if ($v_2.get_current().$8x_0()) {
                if ($v_1 !== this.$A_1) {
                    this.$8_0.get_item(this.$A_1).$1J_0();
                    this.$A_1 = $v_1
                }
                return true
            }
            $v_1--
        }
        $v_0 > 0 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = -1;
        return false
    },
    $8w_0: function() {
        if (this.$A_1 === -1) this.$A_1 = 0;
        var $v_0 = this.$8_0.getEnumeratorAtPos(this.$A_1), $v_1 = this.$A_1;
        while ($v_0.moveNext()) {
            if ($v_0.get_current().$8w_0()) {
                if ($v_1 !== this.$A_1) {
                    !CUI.ScriptUtility.isNullOrUndefined(this.$8_0.get_item(this.$A_1)) &&
                        this.$8_0.get_item(this.$A_1).$1J_0();
                    this.$A_1 = $v_1
                }
                return true
            }
            $v_1++
        }
        this.$8_0.$T_0 > 0 && this.$8_0.get_item(this.$A_1).$1J_0();
        this.$A_1 = -1;
        return false
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.MenuItem.isInstanceOfType($p0) &&
            !CUI.Gallery.isInstanceOfType($p0) &&
            !CUI.GroupPopup.isInstanceOfType($p0))
            throw Error.create("MenuSections can only have children of type MenuItem, Gallery or GroupPopup.")
    },
    $EZ_1: function($p0) {
        this.$1a_0 = $p0;
        CUI.UIUtility.setInnerText(this.$G_1, $p0)
    },
    dispose: function() {
        CUI.Component.prototype.dispose.call(this);
        this.$2r_1 = null;
        this.$G_1 = null;
        this.$4c_1 = null
    }
};
CUI.QAT = function($p0, $p1) { CUI.QAT.initializeBase(this, [$p0, $p1]) };
CUI.QAT.prototype = {
    refresh: function() {
        this.$2W_0();
        CUI.Root.prototype.refresh.call(this)
    },
    $2W_0: function() {
        CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.$2U_0();
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        this.appendChildrenToElement(this.get_$3_0());
        this.$o_0 = false
    },
    ensureCorrectChildType: function(child) {
        if (!CUI.ControlComponent.isInstanceOfType(child))
            throw Error.create("Only children of type ControlComponent can be added to a QAT")
    },
    get_cssClass: function() { return "ms-cui-QAT " + CUI.Root.prototype.get_cssClass.call(this) },
    get_rootType: function() { return "QAT" },
    get_visibleInDOM: function() { return true },
    set_$Iw_2: function($p0) {
        this.set_$25_1($p0);
        return $p0
    }
};
CUI.QATBuildContext = function() { CUI.QATBuildContext.initializeBase(this) };
CUI.QATBuildContext.prototype = { QAT: null, qatId: null };
CUI.QATBuildOptions = function() { CUI.QATBuildOptions.initializeBase(this) };
CUI.QATBuilder = function(options, elmPlaceholder, rootBuildClient) {
    this.$$d_$IT_1 = Function.createDelegate(this, this.$IT_1);
    CUI.QATBuilder.initializeBase(this, [options, elmPlaceholder, rootBuildClient]);
    if (CUI.ScriptUtility
        .isNullOrUndefined(elmPlaceholder)) throw Error.create("QAT placeholder DOM element is null or undefined.")
};
CUI.QATBuilder.prototype = {
    get_QAT: function() { return this.$0_0 },
    set_QAT: function(value) {
        this.$0_0 = value;
        return value
    },
    buildQAT: function(qatId) {
        if (this.$3I_0) return false;
        if (this.isIdTrimmed(qatId)) return true;
        var $v_0 = new CUI.QATBuildContext;
        $v_0.qatId = qatId;
        this.$3I_0 = true;
        var $v_1 = new CUI.DataQuery;
        $v_1.id = $v_0.qatId;
        $v_1.queryType = 5;
        $v_1.handler = this.$$d_$IT_1;
        $v_1.data = $v_0;
        this.$10_0.runQuery($v_1);
        return true
    },
    $IT_1: function($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        this.set_QAT(this.$FH_1(CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, "QAT"), $v_0));
        this.get_QAT().set_$Iw_2(this);
        this.$1l_0.onComponentCreated(this.get_QAT(), this.get_QAT().$6_0);
        if (this.get_$Ix_1().attachToDOM) this.get_QAT().$68_0(true);
        else {
            this.get_QAT().$2W_0();
            this._elmPlaceholder.appendChild(this.get_QAT().get_$3_0());
            CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, "loaded")
        }
        this.$BI_0(this.get_QAT());
        this.$1l_0.onComponentBuilt(this.get_QAT(), this.get_QAT().$6_0)
    },
    $FH_1: function($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) throw Error.create("No QAT element was present in the data");
        var $v_0 = new CUI.DataNodeWrapper($p0);
        this.set_QAT(new CUI.QAT($v_0.get_attributes()["Id"], $v_0.get_attributes()));
        for (var $v_1 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
                     .getFirstChildNodeWithName($v_0.$b_0, "Controls")),
            $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++)
            if (!this.isNodeTrimmed($v_1[$v_2])) {
                var $v_3 = this.$2T_0($v_1[$v_2], $p1);
                this.get_QAT().addChild($v_3.createComponentForDisplayMode("Small"))
            }
        return this.get_QAT()
    },
    get_$Ix_1: function() { return this.$16_0 }
};
CUI.RibbonPeripheralSection = function() {};
CUI.ContextualGroup = function($p0, $p1, $p2, $p3) {
    this.$6_0 = $p0;
    this.$1a_0 = $p1;
    this.$4O_0 = $p2;
    this.$y_0 = $p3
};
CUI.ContextualGroup.$91 = function($p0) {
    switch ($p0) {
    case 1:
        return "db";
    case 2:
        return "lb";
    case 3:
        return "tl";
    case 4:
        return "or";
    case 5:
        return "gr";
    case 6:
        return "mg";
    case 7:
        return "yl";
    case 8:
        return "pp";
    default:
        return ""
    }
};
CUI.ContextualGroup.prototype = {
    $6_0: null,
    $1a_0: null,
    $4O_0: 0,
    $y_0: null,
    $3R_0: 0,
    get_id: function() { return this.$6_0 },
    get_count: function() { return this.$3R_0 },
    get_title: function() { return this.$1a_0 },
    get_color: function() { return this.$4O_0 },
    get_command: function() { return this.$y_0 },
    $1z_0: null,
    $G_0: null,
    $2c_0: null,
    get_$3_0: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1z_0)) {
            this.$1z_0 = CUI.Utility.$5("li");
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$6_0)) this.$1z_0.id = this.$6_0;
            this.$1z_0.className = "ms-cui-cg";
            var $v_0 = CUI.ContextualGroup.$91(this.$4O_0);
            $v_0 !== "" && CUI.Utility.ensureCSSClassOnElement(this.$1z_0, "ms-cui-cg-" + $v_0);
            var $v_1 = CUI.Utility.$5("div");
            $v_1.className = "ms-cui-cg-i";
            $v_1.title = this.$1a_0;
            this.$1z_0.appendChild($v_1);
            this.$G_0 = CUI.Utility.$5("div");
            this.$G_0.className = "ms-cui-cg-t";
            $v_1.appendChild(this.$G_0);
            var $v_2 = CUI.Utility.$5("span");
            $v_2.className = "ms-cui-cg-t-i";
            CUI.UIUtility.setInnerText($v_2, this.$1a_0);
            this.$G_0.appendChild($v_2);
            this.$2c_0 = CUI.Utility.$5("ul");
            this.$2c_0.className = "ms-cui-ct-ul";
            this.$1z_0.appendChild(this.$2c_0);
            this.$3R_0 = 0
        }
        return this.$1z_0
    },
    $Ey_0: function() {
        var $v_0 = $get(this.$6_0);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.$1z_0 = $v_0;
            this.$G_0 = this.$1z_0.childNodes[0].childNodes[0];
            this.$2c_0 = this.$1z_0.childNodes[1]
        }
    },
    $Er_0: function($p0) {
        this.$2c_0.appendChild($p0);
        this.$3R_0++;
        if (this.$3R_0 === 1) CUI.Utility.ensureCSSClassOnElement(this.$2c_0, "ms-cui-oneCtxTab");
        else this.$3R_0 === 2 && CUI.Utility.removeCSSClassFromElement(this.$2c_0, "ms-cui-oneCtxTab")
    },
    $GA_0: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$2c_0) && CUI.Utility.removeChildNodesSlow(this.$2c_0);
        this.$3R_0 = 0
    },
    dispose: function() {
        this.$1z_0 = null;
        this.$G_0 = null;
        this.$2c_0 = null;
        this.$3R_0 = 0
    }
};
CUI.DeclarativeTemplate = function($p0) {
    this.$$d_$Fs_1 = Function.createDelegate(this, this.$Fs_1);
    CUI.DeclarativeTemplate.initializeBase(this);
    this.$10_1 = new CUI.DataNodeWrapper($p0)
};
CUI.DeclarativeTemplate.prototype = {
    $10_1: null,
    createGroup: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
        var $v_0 = new CUI.DeclarativeTemplateBuildContext;
        $v_0.ribbon = $p0;
        $v_0.controls = $p6;
        $v_0.parameters = $p7;
        for (var $v_1 = $p0.$Fj_2($p1, $p2, $p3, $p4, $p5), $v_2 = 0; $v_2 < this.$10_1.get_children().length; $v_2++) {
            var $v_3 = this.$Fm_1(this.$10_1.get_children()[$v_2], $v_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_1.addChild($v_3)
        }
        return $v_1
    },
    $Fm_1: function($p0, $p1, $p2) {
        var $v_0 = $p0.attrs.Title;
        if ($v_0 === "Popup") {
            var $v_2 = $p0.attrs.LayoutTitle;
            $p1.set_popupLayoutTitle($v_2);
            return null
        }
        var $v_1 = $p2.ribbon.$CP_2($p1.$6_0 + "-" + $v_0, $v_0);
        $v_1.$BY_0(this.$$d_$Fs_1, $p0, $p2);
        return $v_1
    },
    $Fs_1: function($p0, $p1, $p2) {
        var $v_0 = $p0, $v_1 = $p2;
        this.$Gb_1($p1, $v_0, $v_1);
        $v_0.$BG_0(true);
        return $v_0
    },
    $Gb_1: function($p0, $p1, $p2) {
        for (var $v_0 = $p0.children, $v_1 = 0, $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2].name;
            if ($v_3 === "Section") {
                var $v_4 = this.$Fo_1($v_0[$v_2], $p2, $p1, $v_1++);
                $p1.addChild($v_4)
            } else $v_1 = this.$B6_1($v_0[$v_2], $p2, $p1, $v_1)
        }
    },
    $Fo_1: function($p0, $p1, $p2, $p3) {
        var $v_0, $v_1 = $p0.attrs.Type, $v_2 = $p0.attrs.Alignment;
        switch ($v_1) {
        case "OneRow":
            $v_0 = 2;
            break;
        case "TwoRow":
            $v_0 = 3;
            break;
        case "ThreeRow":
            $v_0 = 4;
            break;
        case "Divider":
            $v_0 = 1;
            break;
        default:
            throw Error.create('Invalid Section attribute "Type" found in XML: ' + $v_1)
        }
        var $v_3 = 1;
        if ($v_2 === "Middle") $v_3 = 2;
        var $v_4 = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3, $v_0, $v_3);
        if ($v_0 !== 1) {
            this.$B8_1($v_4.getRow(1), $p0.children[0], $p1);
            ($v_4.$M_2 === 3 || $v_4.$M_2 === 4) && this.$B8_1($v_4.getRow(2), $p0.children[1], $p1);
            $v_4.$M_2 === 4 && this.$B8_1($v_4.getRow(3), $p0.children[2], $p1)
        }
        return $v_4
    },
    $B8_1: function($p0, $p1, $p2) {
        for (var $v_0 = $p1.children, $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].name, $v_3 = null;
            if ($v_2 === "ControlRef") $v_3 = this.$CL_1($v_0[$v_1], $p2);
            else if ($v_2 === "OverflowArea") this.$B6_1($v_0[$v_1], $p2, $p0, $v_1);
            else $v_3 = this.$Fp_1($v_0[$v_1], $p2, $p0, $v_1);
            !CUI.ScriptUtility.isNullOrUndefined($v_3) && $p0.addChild($v_3)
        }
    },
    $Fp_1: function($p0, $p1, $p2, $p3) {
        for (var $v_0 = $p0.children, $v_1 = $p1.ribbon.$CS_2($p2.$6_0 + "-" + $p3), $v_2 = 0;
            $v_2 < $v_0.length;
            $v_2++) {
            var $v_3 = CUI.DataNodeWrapper.getNodeName($v_0[$v_2]);
            if ($v_3 === "ControlRef") {
                var $v_4 = this.$CL_1($v_0[$v_2], $p1);
                !CUI.ScriptUtility.isNullOrUndefined($v_4) && $v_1.addChild($v_4)
            } else this.$B6_1($v_0[$v_2], $p1, $v_1, $v_2)
        }
        if (!$v_1.$8_0.$T_0) return null;
        return $v_1
    },
    $CL_1: function($p0, $p1) {
        var $v_0 = $p0.attrs,
            $v_1 = $v_0["TemplateAlias"],
            $v_2 = $v_0["DisplayMode"],
            $v_3 = $p1.controls[$v_1],
            $v_4 = null;
        if (!CUI.ScriptUtility
            .isNullOrUndefined($v_3) &&
            CUI.Control.isInstanceOfType($v_3)) $v_4 = $v_3.createComponentForDisplayMode($v_2);
        return $v_4
    },
    $B6_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttributes($p0),
            $v_1 = $v_0["TemplateAlias"],
            $v_2 = CUI.DataNodeWrapper.getNodeName($p0),
            $v_3 = $p1.controls[$v_1];
        if (CUI.ScriptUtility.isNullOrUndefined($v_3)) return $p3;
        var $v_4 = false, $v_5 = false, $v_6 = 2;
        if ($v_2 === "OverflowSection") {
            $v_4 = CUI.Utility.$1F($v_0["DividerBefore"]);
            $v_5 = CUI.Utility.$1F($v_0["DividerAfter"]);
            if ($v_4) {
                var $v_9 = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 1, 1);
                $p2.addChild($v_9)
            }
            var $v_8 = $v_0["Type"];
            switch ($v_8) {
            case "OneRow":
                $v_6 = 2;
                break;
            case "TwoRow":
                $v_6 = 3;
                break;
            case "ThreeRow":
                $v_6 = 4;
                break;
            default:
                throw Error.create('Invalid Section attribute "Type" found in XML: ' + $v_8)
            }
        }
        var $v_7 = $v_0["DisplayMode"];
        if (Array.isInstanceOfType($v_3))
            for (var $v_A = $v_3, $v_B = null, $v_C = 0; $v_C < $v_A.length; $v_C++) {
                var $v_D = $v_A[$v_C];
                if ($v_2 === "OverflowSection")
                    if ($v_6 === 2) {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 2, 1);
                            $p2.addChild($v_B)
                        }
                        $v_B.getRow(1).addChild($v_D.createComponentForDisplayMode($v_7))
                    } else if ($v_6 === 4) {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 4, 1);
                            $p2.addChild($v_B)
                        }
                        $v_B.getRow($v_C % 3 + 1).addChild($v_D.createComponentForDisplayMode($v_7));
                        if ($v_C % 3 === 2) $v_B = null
                    } else {
                        if (CUI.ScriptUtility.isNullOrUndefined($v_B)) {
                            $v_B = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 3, 1);
                            $p2.addChild($v_B)
                        }
                        $v_B.getRow($v_C % 2 + 1).addChild($v_D.createComponentForDisplayMode($v_7));
                        if ($v_C % 2 === 1) $v_B = null
                    }
                else $p2.addChild($v_D.createComponentForDisplayMode($v_7))
            }
        else {
            var $v_E = $v_3;
            if ($v_2 === "OverflowSection") {
                var $v_F;
                if ($v_6 === 2) {
                    $v_F = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 2, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7))
                } else if ($v_6 === 4) {
                    $v_F = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 4, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7))
                } else {
                    $v_F = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 3, 1);
                    $v_F.getRow(1).addChild($v_E.createComponentForDisplayMode($v_7))
                }
                $p2.addChild($v_F)
            } else $p2.addChild($v_E.createComponentForDisplayMode($v_7))
        }
        if ($v_5) {
            var $v_G = $p1.ribbon.$31_2($p2.$6_0 + "-" + $p3++, 1, 1);
            $p2.addChild($v_G)
        }
        return $p3
    }
};
CUI.Group = function($p0, $p1, $p2, $p3, $p4, $p5) {
    CUI.Group.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$y_2 = $p4;
    this.$7_2 = $p5
};
CUI.Group.prototype = {
    $c_2: null,
    $G_2: null,
    $3m_2: null,
    $f_2: null,
    $7_2: null,
    dispose: function() {
        CUI.Component.prototype.dispose.call(this);
        this.$c_2 = null;
        this.$G_2 = null;
        this.$3m_2 = null;
        this.$7_2 = null
    },
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$G_2)) {
            this.$G_2 = CUI.Utility.$5("span");
            this.$G_2.className = "ms-cui-groupTitle"
        } else this.$G_2 = CUI.Utility.removeChildNodes(this.$G_2);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$c_2)) {
            this.$c_2 = CUI.Utility.$5("span");
            this.$c_2.className = "ms-cui-groupBody"
        } else this.$c_2 = CUI.Utility.removeChildNodes(this.$c_2);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3m_2)) {
            this.$3m_2 = CUI.Utility.$5("span");
            this.$3m_2.className = "ms-cui-groupSeparator"
        }
        var $v_0 = this.get_title();
        !CUI.ScriptUtility.isNullOrUndefined($v_0) && CUI.UIUtility.setInnerText(this.$G_2, $v_0);
        this.$G_2.title = this.get_title();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$f_2) && CUI.GroupPopupLayout.isInstanceOfType(this.$f_2)) {
            this.$f_2.$2U_0();
            this.get_$3_0().appendChild(this.$f_2.get_$3_0());
            this.get_$3_0().appendChild(this.$3m_2);
            this.$f_2.$3V_0()
        } else {
            var $v_1 = CUI.Utility.$5("span");
            $v_1.className = "ms-cui-groupContainer";
            $v_1.appendChild(this.$c_2);
            $v_1.appendChild(this.$G_2);
            this.get_$3_0().appendChild($v_1);
            this.get_$3_0().appendChild(this.$3m_2);
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$f_2)) {
                this.$f_2.$2U_0();
                this.$c_2.appendChild(this.$f_2.get_$3_0());
                this.$f_2.$3V_0()
            }
        }
        CUI.Component.prototype.$2W_0.call(this)
    },
    $8v_0: function() {
        CUI.Component.prototype.$8v_0.call(this);
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$f_2) && !CUI.GroupPopupLayout.isInstanceOfType(this.$f_2)) {
            var $v_0 = this.get_$3_0().childNodes[0];
            this.$3m_2 = this.get_$3_0().childNodes[1];
            this.$c_2 = $v_0.childNodes[0];
            this.$G_2 = $v_0.childNodes[1]
        }
    },
    $68_0: function($p0) {
        this.$8v_0();
        this.$g_0();
        this.$o_0 = false;
        $p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$f_2) && this.$f_2.$68_0(true)
    },
    $2U_0: function() {
        var $v_0 = this.get_$3_0();
        CUI.Component.prototype.$2U_0.call(this)
    },
    get_cssClass: function() { return "ms-cui-group" },
    get_domElementTagName: function() { return "li" },
    unselectLayout: function() { this.selectLayout(null, null) },
    selectLayout: function($p0, $p1) {
        var $v_0 = null;
        if ($p0 !== "Popup") $v_0 = CUI.ScriptUtility.isNullOrUndefined($p0) ? null : this.getChildByTitle($p0);
        else {
            !CUI.ScriptUtility.isNullOrUndefined($p1) && this.set_popupLayoutTitle($p1);
            this.$G7_2();
            $v_0 = this.$5z_2
        }
        if ($v_0 === this.$f_2 ||
            CUI.ScriptUtility.isNullOrUndefined($v_0) && CUI.ScriptUtility.isNullOrUndefined(this.$f_2)) return;
        this.$f_2 = !CUI.ScriptUtility.isNullOrUndefined($v_0) ? $v_0 : null;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0.$BZ_0(true);
            $p0 === "Popup" && this.$76_2.$BZ_0(true)
        }
        this.$1G_0()
    },
    get_selectedLayout: function() { return this.$f_2 },
    ensureCorrectChildType: function($p0) {
        if (!CUI.Layout
            .isInstanceOfType($p0) &&
            !CUI.GroupPopupLayout.isInstanceOfType($p0))
            throw Error.create("Only children of type Layout can be added to Groups");
        if (!CUI.ScriptUtility.isNullOrUndefined(this
            .getChildByTitle($p0.get_title())))
            throw Error.create("A Layout with title " + $p0.get_title() + " already exists in this Group.")
    },
    get_$BJ_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this
                .$f_2) ||
            CUI.ScriptUtility.isNullOrUndefined(this.$f_2.get_$3_0())) return false;
        return this.get_$3_0().offsetHeight < this.$f_2.get_$3_0().offsetHeight ||
            this.get_$3_0().offsetWidth < this.$f_2.get_$3_0().offsetWidth
    },
    $y_2: null,
    get_command: function() { return this.$y_2 },
    $60_2: null,
    get_popupLayoutTitle: function() { return this.$60_2 },
    set_popupLayoutTitle: function($p0) {
        if ($p0 === "Popup") throw Error.create("PopupLayoutTitle cannot be set to 'Popup'");
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined($p0) ? null : this.getChildByTitle($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create("This Group does not have a Layout with Title: " + $p0);
        if (this.$60_2 === $p0) return $p0;
        this.$60_2 = $p0;
        !CUI.ScriptUtility.isNullOrUndefined(this.$5y_2) && this.$5y_2.set_layoutTitle($p0);
        return $p0
    },
    $5z_2: null,
    $4o_2: null,
    $5y_2: null,
    $76_2: null,
    $8a_2: null,
    $G7_2: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5z_2)) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$60_2)) throw Error.create("No PopupLayoutTitle has been set.");
        this.$5z_2 = this.get_ribbon().$Fl_2(this.$6_0 + "-Popup", this);
        this.$76_2 = this.get_ribbon().$CQ_1(this.$6_0 + "-popupMenu", null, null, null);
        this.$8a_2 = this.get_ribbon().$CR_1(this.$6_0 + "-popupMenuSection", null, null, false, null, null);
        var $v_0 = {};
        $v_0.LabelText = this.get_title();
        var $v_1 = this.get_ribbon().get_ribbonProperties();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$7_2.Image32by32Popup)) {
            $v_0.Image32by32 = this.$7_2.Image32by32Popup;
            $v_0.Image32by32Class = this.$7_2.Image32by32PopupClass;
            $v_0.Image32by32Top = this.$7_2.Image32by32PopupTop;
            $v_0.Image32by32Left = this.$7_2.Image32by32PopupLeft
        } else {
            $v_0.Image32by32 = $v_1.Image32by32GroupPopupDefault;
            $v_0.Image32by32Class = $v_1.Image32by32GroupPopupDefaultClass;
            $v_0.Image32by32Left = $v_1.Image32by32GroupPopupDefaultLeft;
            $v_0.Image32by32Top = $v_1.Image32by32GroupPopupDefaultTop
        }
        $v_0.Command = this.$y_2;
        this.$4o_2 = new CUI.Controls.FlyoutAnchor(this.get_ribbon(), this.$6_0 + "-PopupAnchor", $v_0, this.$76_2);
        this.$4o_2.$89_2 = true;
        this.$4o_2.set_enabled(this.get_enabled());
        this.$5y_2 = this.get_ribbon().$Fk_2(this.$6_0 + "-popupMenuItem", this);
        this.$5z_2.addChild(this.$4o_2.createComponentForDisplayMode("Large"));
        this.$76_2.addChild(this.$8a_2);
        this.$8a_2.addChild(this.$5y_2);
        this.$5y_2.set_layoutTitle(this.$60_2);
        this.addChild(this.$5z_2)
    },
    $6P_0: function() {
        this.set_enabled(CUI.ScriptUtility.isNullOrUndefined(this.$y_2)
            ? true
            : this.get_ribbon().$7U_1(this.$y_2, null, null));
        if (!this.get_enabled() || CUI.ScriptUtility.isNullOrUndefined(this.$f_2)) return;
        this.$f_2.$6P_0()
    },
    onEnabledChanged: function($p0) {
        CUI.Component.prototype.onEnabledChanged.call(this, $p0);
        !CUI.ScriptUtility.isNullOrUndefined(this.$4o_2) && this.$4o_2.set_enabled($p0)
    },
    $Bd_0: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$f_2) && CUI.GroupPopupLayout.isInstanceOfType(this.$f_2)) {
            this.$f_2.get_$3_0().getElementsByTagName("A")[0].focus();
            return true
        }
        return CUI.Component.prototype.$Bd_0.call(this)
    }
};
CUI.GroupPopup = function($p0, $p1, $p2) {
    this.$$d_$I7_1 = Function.createDelegate(this, this.$I7_1);
    CUI.GroupPopup.initializeBase(this, [$p0, $p1, "", ""]);
    this.$4g_1 = $p2
};
CUI.GroupPopup.prototype = {
    $4g_1: null,
    $G_1: null,
    $c_1: null,
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        if (CUI.ScriptUtility.isNullOrUndefined(this.$G_1)) {
            this.$G_1 = CUI.Utility.$5("div");
            this.$G_1.className = "ms-cui-groupTitle"
        } else this.$G_1 = CUI.Utility.removeChildNodes(this.$G_1);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
            this.$c_1 = CUI.Utility.$5("div");
            this.$c_1.className = "ms-cui-groupBody"
        } else this.$c_1 = CUI.Utility.removeChildNodes(this.$c_1);
        CUI.UIUtility.setInnerText(this.$G_1, this.$4g_1.get_title());
        this.get_$3_0().appendChild(this.$c_1);
        this.get_$3_0().appendChild(this.$G_1);
        var $v_0 = this.$4g_1.getChildByTitle(this.$5m_1);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create("Cannot find Layout with title: " +
                this.$5m_1 +
                " for this GroupPopup to use from the Group with id: " +
                this.$4g_1.$6_0);
        var $v_1 = $v_0.clone(true);
        this.removeChildren();
        this.addChild($v_1);
        this.appendChildrenToElement(this.$c_1);
        CUI.Component.prototype.$2W_0.call(this)
    },
    $5m_1: null,
    get_layoutTitle: function() { return this.$5m_1 },
    set_layoutTitle: function($p0) {
        if (this.$5m_1 === $p0) return $p0;
        this.$5m_1 = $p0;
        this.$1G_0();
        return $p0
    },
    get_cssClass: function() { return "ms-cui-groupPopup" },
    $5G_1: null,
    $4E_0: function($p0) {
        if ($p0.$M_1 === 4) {
            var $v_0 = $p0.get_sourceControl();
            if (this.$5G_1) return CUI.Component.prototype.$4E_0.call(this, $p0);
            this.$5G_1 = $v_0;
            this.$JT_1()
        } else if ($p0.$M_1 === 10) {
            this.$HW_1();
            this.$5G_1 = null
        }
        return CUI.Component.prototype.$4E_0.call(this, $p0)
    },
    $4V_1: null,
    $6v_1: false,
    $JT_1: function() {
        if (this.$6v_1) return;
        if (!this.$4V_1) {
            this.$4V_1 = CUI.Utility.$CN();
            $addHandler(this.$4V_1, "click", this.$$d_$I7_1);
            this.get_$3_0().appendChild(this.$4V_1)
        }
        this.$4V_1.style.display = "";
        this.$6v_1 = true
    },
    $HW_1: function() {
        if (!this.$6v_1) return;
        this.$4V_1.style.display = "none";
        this.$6v_1 = false
    },
    $I7_1: function($p0) { this.$5G_1 && this.$5G_1.$6A_1() }
};
CUI.GroupPopupLayout = function($p0, $p1, $p2) {
    CUI.GroupPopupLayout.initializeBase(this, [$p0, $p1, "Popup"]);
    this.$4g_3 = $p2
};
CUI.GroupPopupLayout.prototype = {
    $4g_3: null,
    $2W_0: function() { CUI.Layout.prototype.$2W_0.call(this) },
    get_cssClass: function() { return null },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Only ControlComponents can be added to GroupPopupLayout.");
        if (this.$8_0.$T_0 > 0) throw Error.create("GroupPopupLayouts can only have one child")
    }
};
CUI.Layout = function($p0, $p1, $p2) { CUI.Layout.initializeBase(this, [$p0, $p1, $p2, ""]) };
CUI.Layout.prototype = {
    $2W_0: function() {
        this.get_needsDelayIniting() && this.doDelayedInit();
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    $8v_0: function() {
        this.get_needsDelayIniting() && this.doDelayedInit();
        this.set_$3_0($get(this.$U_0.$6_0 + "-" + this.get_title()))
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.Section.isInstanceOfType($p0)) throw Error.create("Only children of Section can be added to a Layout")
    },
    get_cssClass: function() { return "ms-cui-layout" },
    clone: function($p0) {
        this.get_needsDelayIniting() && this.doDelayedInit();
        var $v_0 = this.get_ribbon().$CP_2("clonedLayout-" + this.get_ribbon().$33_1(), this.get_title());
        if (!$p0) return $v_0;
        var $$enum_4 = this.$8_0.getEnumerator();
        while ($$enum_4.moveNext()) {
            var $v_1 = $$enum_4.get_current(), $v_2 = $v_1.clone($p0);
            $v_0.addChild($v_2)
        }
        return $v_0
    },
    get_visibleInDOM: function() {
        if (CUI.Group.isInstanceOfType(this.$U_0)) {
            var $v_0 = this.$U_0;
            return $v_0.$f_2 === this
        } else if (CUI.GroupPopup.isInstanceOfType(this.$U_0)) return true;
        else return false
    }
};
CUI.RibbonEventCommandProperties = function() { CUI.RibbonEventCommandProperties.initializeBase(this) };
CUI.RibbonEventCommandProperties.prototype = { Minimized: false, Maximized: false };
CUI.CommandContextSwitchCommandProperties = function() {};
CUI.CommandContextSwitchCommandProperties.prototype = {
    OldContextId: null,
    OldContextCommand: null,
    NewContextId: null,
    NewContextCommand: null,
    ChangedByUser: false
};
CUI.Ribbon = function($p0, $p1) {
    this.$$d_$IE_2 = Function.createDelegate(this, this.$IE_2);
    this.$$d_$IW_2 = Function.createDelegate(this, this.$IW_2);
    this.$$d_$IF_2 = Function.createDelegate(this, this.$IF_2);
    this.$$d_$If_2 = Function.createDelegate(this, this.$If_2);
    this.$A2_2 = new Date(0);
    this.$AO_2 = CUI.Utility.$55();
    this.$AN_2 = CUI.Utility.$6J();
    CUI.Ribbon.initializeBase(this, [$p0, $p1]);
    this.$1B_2 = {};
    this.$A0_2 = $p1.ShortcutKeyJumpToRibbon_Ctrl +
        $p1.ShortcutKeyJumpToRibbon_Alt +
        $p1.ShortcutKeyJumpToRibbon_Shift +
        $p1.ShortcutKeyJumpToRibbon_AccessKey;
    this.$9z_2 = $p1.ShortcutKeyJumpToFirstControl_Ctrl +
        $p1.ShortcutKeyJumpToFirstControl_Alt +
        $p1.ShortcutKeyJumpToFirstControl_Shift +
        $p1.ShortcutKeyJumpToFirstControl_AccessKey;
    this.$3q_2 = this.$DL_2()
};
CUI.Ribbon.prototype = {
    $E_2: null,
    $3y_2: null,
    $2F_2: null,
    $l_2: null,
    $m_2: null,
    $18_2: null,
    $9h_2: null,
    $x_2: null,
    $3l_2: null,
    $v_2: null,
    $3F_2: null,
    $A8_2: null,
    $2H_2: null,
    $2I_2: null,
    $11_2: null,
    $12_2: null,
    $5v_2: false,
    $3G_2: null,
    $5g_2: null,
    $9z_2: null,
    $A0_2: null,
    $5r_2: null,
    $8t_2: false,
    $73_2: null,
    $74_2: null,
    $72_2: null,
    $81_2: false,
    $8M_2: null,
    get_storedFocus: function() { return this.$3G_2 },
    set_storedFocus: function(value) {
        this.$3G_2 = value;
        return value
    },
    $Bh_2: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) return false;
        else if (!CUI.ScriptUtility.isNullOrUndefined($p0.id) && $p0.id === "Ribbon") return false;
        else if ($p0.tagName === "BODY") return true;
        else return this.$Bh_2($p0.parentNode)
    },
    refresh: function() {
        this.$2W_0();
        CUI.Root.prototype.refresh.call(this);
        this.$59_2()
    },
    $2W_0: function() {
        CUI.Root.prototype.$2W_0.call(this);
        this.$2U_0();
        this.$HN_2();
        var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null, $v_4 = null;
        CUI.Utility.removeChildNodesSlow(this.$18_2);
        var $$dict_7 = this.$1B_2;
        for (var $$key_8 in $$dict_7) {
            var $v_B = { key: $$key_8, value: $$dict_7[$$key_8] }, $v_C = $v_B.value;
            $v_C.$GA_0()
        }
        var $v_5 = 0, $v_6 = new CUI.List, $$enum_C = this.$8_0.getEnumerator();
        while ($$enum_C.moveNext()) {
            var $v_D = $$enum_C.get_current();
            if ($v_D.get_visible()) {
                $v_6.add($v_D);
                $v_5++
            }
        }
        var $v_7 = 0,
            $v_8 = $v_6.$T_0,
            $v_9 = !(CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonProperties().ATTabPositionText) ||
                CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonProperties().ATContextualTabText)),
            $$enum_H = $v_6.getEnumerator();
        while ($$enum_H.moveNext()) {
            var $v_E = $$enum_H.get_current();
            $v_E.$Ae_2();
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = $v_E;
                this.$5g_2 = $v_1.$6_0
            }
            $v_E.$J8_2();
            if ($v_E.$1M_2) {
                if (!$v_3 || $v_E.$1A_2 !== $v_3) {
                    if ($v_E.$1A_2 !== $v_3)
                        !CUI.ScriptUtility.isNullOrUndefined($v_2) &&
                            $v_2.$1M_2 &&
                            CUI.Utility.ensureCSSClassOnElement($v_2.$G_2, "ms-cui-ct-last");
                    $v_3 = $v_E.$1A_2;
                    $v_4 = this.$1B_2[$v_E.$1A_2];
                    CUI.Utility.removeCSSClassFromElement($v_4.get_$3_0(), "ms-cui-cg-s");
                    this.$BX_2(0);
                    this.$18_2.appendChild($v_4.get_$3_0());
                    CUI.Utility.ensureCSSClassOnElement($v_E.$G_2, "ms-cui-ct-first")
                }
                $v_4.$Er_0($v_E.$G_2)
            } else {
                if ($v_3) {
                    CUI.Utility.ensureCSSClassOnElement($v_2.$G_2, "ms-cui-ct-last");
                    $v_3 = null;
                    $v_4 = null
                }
                if ($v_9) {
                    $v_7++;
                    $v_E.$EP_2(this.get_ribbonProperties().ATTabPositionText, null, null, $v_7, $v_8)
                }
                this.$18_2.appendChild($v_E.$G_2)
            }
            if ($v_E === this.$E_2) $v_0 = $v_E;
            $v_2 = $v_E
        }
        if ($v_3) {
            CUI.Utility.ensureCSSClassOnElement($v_2.$G_2, "ms-cui-ct-last");
            $v_2 = null;
            $v_3 = null;
            $v_4 = null
        }
        var $v_A = 1;
        if ($v_9)
            for (var $v_F = 0; $v_F < $v_5; $v_F++) {
                var $v_G = $v_6.get_item($v_F);
                if ($v_G.$1M_2) {
                    if ($v_G.$1A_2 !== $v_3) {
                        $v_3 = $v_G.$1A_2;
                        $v_4 = this.$1B_2[$v_G.$1A_2];
                        $v_A = 1
                    }
                    $v_G.$CZ_2();
                    $v_G.$EP_2(this.get_ribbonProperties().ATTabPositionText,
                        this.get_ribbonProperties().ATContextualTabText,
                        $v_4.$1a_0,
                        $v_A,
                        $v_4.$3R_0);
                    $v_A++
                }
            }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0))
            if ($v_0.$1M_2) {
                var $v_H = this.$Ax_2($v_0.$1A_2);
                CUI.Utility.ensureCSSClassOnElement($v_H.get_$3_0(), "ms-cui-cg-s");
                this.$BX_2($v_H.$4O_0)
            }
        if (CUI.ScriptUtility.isNullOrUndefined($v_0) && !this.$2K_2) {
            $v_0 = !CUI.ScriptUtility.isNullOrUndefined(this.$8C_2) ? this.$8C_2 : $v_1;
            this.$9C_2($v_0)
        }
        if (this.$2K_2) $v_0 = null;
        this.$Jd_2();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0.get_$EC_0() && CUI.Utility.disableElement(this.$v_2);
            var $v_I = this.$v_2.className.indexOf("ms-cui-disabled") !== -1;
            this.$v_2.className = $v_0.$HC_2() + ($v_I ? " ms-cui-disabled" : "")
        }
        this.$g_0();
        this.$o_0 = false;
        if (this.$8H_2 && !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().RootEventCommand)) {
            var $v_J = new CUI.RibbonEventCommandProperties;
            $v_J.RootId = this.$6_0;
            $v_J.RootType = "Ribbon";
            $v_J.Minimized = this.$2K_2;
            $v_J.Maximized = !this.$2K_2;
            this.raiseCommandEvent(this.get_ribbonProperties().RootEventCommand, 11, $v_J);
            this.$8H_2 = false
        }
    },
    $68_0: function($p0) {
        this.$8v_0();
        this.$g_0();
        this.$o_0 = false;
        var $v_0 = this.$8_0;
        if ($p0)
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                var $$enum_3 = $v_0.getEnumerator();
                while ($$enum_3.moveNext()) {
                    var $v_1 = $$enum_3.get_current();
                    if (!$v_1.get_visible()) continue;
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && this.$E_2 === $v_1) this.$E_2.$68_0($p0);
                    else {
                        $v_1.$C0_2();
                        $v_1.$C1_2()
                    }
                }
            }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1B_2)) {
            var $$dict_5 = this.$1B_2;
            for (var $$key_6 in $$dict_5) {
                var $v_2 = { key: $$key_6, value: $$dict_5[$$key_6] };
                $v_2.value.$Ey_0()
            }
        }
    },
    $8v_0: function() {
        CUI.Component.prototype.$8v_0.call(this);
        var $v_0 = this.get_$3_0().childNodes;
        this.$9h_2 = $get("cui-" + this.$6_0 + "-scrollCurtain");
        this.$3F_2 = $v_0[0];
        this.$2F_2 = $v_0[1];
        this.$l_2 = this.$2F_2.childNodes[0];
        this.$m_2 = this.$2F_2.childNodes[1];
        this.$x_2 = this.$m_2.childNodes[0];
        if ($v_0.length > 2) this.$v_2 = $v_0[2];
        this.$3l_2 = CUI.Utility.$93(this.$l_2, "ms-cui-qat-container");
        this.$18_2 = CUI.Utility.$93(this.$m_2, "ms-cui-tts");
        if (CUI.ScriptUtility.isNullOrUndefined(this
            .$18_2)) this.$18_2 = CUI.Utility.$93(this.$m_2, "ms-cui-tts-scale-1");
        if (CUI.ScriptUtility.isNullOrUndefined(this
            .$18_2)) this.$18_2 = CUI.Utility.$93(this.$m_2, "ms-cui-tts-scale-2")
    },
    $g_0: function() {
        this.$5r_2 = this.$$d_$If_2;
        this.set_$9U_2(true);
        this.$73_2 = this.$$d_$IF_2;
        this.$74_2 = this.$$d_$IW_2;
        this.$72_2 = this.$$d_$IE_2;
        if (!this.$81_2) {
            $addHandler(this.get_$3_0(), "keydown", this.$74_2);
            $addHandler(document, "keydown", this.$73_2);
            $addHandler(this.get_$3_0(), "keydown", this.$72_2);
            this.$81_2 = true
        }
        CUI.Component.prototype.$g_0.call(this)
    },
    set_$9U_2: function($p0) {
        if ($p0 === this.$8t_2) return $p0;
        if ($p0) $addHandler(window, "resize", this.$5r_2);
        else
            try {
                $removeHandler(window, "resize", this.$5r_2)
            } catch ($$e_1) {
            }
        this.$8t_2 = $p0;
        return $p0
    },
    $IF_2: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = $p0.rawEvent.keyCode, $v_1 = $p0.ctrlKey ? "t" : "f";
            $v_1 += $p0.altKey ? "t" : "f";
            $v_1 += $p0.shiftKey ? "t" : "f";
            try {
                $v_1 += String.fromCharCode(_processKeyCodes($v_0))
            } catch ($$e_3) {
                return
            }
            var $v_2 = $p0.target;
            if ($v_1 === this.$9z_2) {
                this.$CF_2();
                this.jumpToLastFocused($v_2)
            } else if ($v_1 === this.$A0_2) {
                this.$CF_2();
                this.jumpToRibbonTab($v_2)
            }
        }
    },
    $CF_2: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(document.selection) && document.selection.type === "Control") {
            for (var $v_0 = document.selection
                         .createRange(),
                $v_1 = $v_0.length;
                $v_1 > 0;
                $v_1--) $v_0.remove($v_1 - 1);
            $v_0.select()
        }
    },
    jumpToLastFocused: function(currentElement) {
        this.$2L_1 && this.$0_0.$69_1();
        if (this.$Bh_2(currentElement)) this.$3G_2 = currentElement;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4j_1)) {
            try {
                this.setFocus()
            } catch ($$e_1) {
            }
            return
        }
        this.setFocusOnRibbon()
    },
    jumpToRibbonTab: function(currentElement) {
        if (this.$Bh_2(currentElement)) this.$3G_2 = currentElement;
        this.$2L_1 && this.$0_0.$69_1();
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$5g_2)) {
            var $v_0 = $get(this.$5g_2 + "-title");
            !CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0.firstChild.focus()
        }
    },
    setFocusOnTabTitle: function() {
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$5g_2)) {
            var $v_0 = $get(this.$5g_2 + "-title");
            !CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0.firstChild.focus()
        }
    },
    $IE_2: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = $p0.rawEvent.keyCode;
            if (($p0.ctrlKey || $p0.shiftKey) && ($v_0 === 39 && !this.$0_0._textDirection) ||
                $v_0 === 37 && this.$0_0._textDirection === 1) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$E_2.$Dk_2(true)
            } else if (($p0.ctrlKey || $p0.shiftKey) && ($v_0 === 37 && !this.$0_0._textDirection) ||
                $v_0 === 39 && this.$0_0._textDirection === 1) {
                $p0.preventDefault();
                $p0.stopPropagation();
                this.$E_2.$Dk_2(false)
            }
        }
    },
    setFocusOnRibbon: function() {
        if (this.$2K_2) this.setFocusOnTabTitle();
        else this.$E_2.$EU_2()
    },
    setFocusOnCurrentTab: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) this.$E_2.$JN_2();
        else this.setFocusOnRibbon()
    },
    setFocus: function() {
        (this.$2K_2 || !CUI.Root.prototype.setFocus.call(this)) && this.setFocusOnTabTitle();
        return true
    },
    $IW_2: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) &&
            !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent) &&
            !this.$2L_1)
            if ($p0.rawEvent.keyCode === 27 && !CUI.ScriptUtility.isNullOrUndefined(this.$3G_2)) {
                $p0.stopPropagation();
                $p0.preventDefault();
                try {
                    this.$3G_2.focus()
                } catch ($$e_1) {
                }
                this.$3G_2 = null
            }
    },
    $1B_2: null,
    addContextualGroup: function(id, title, color, command) {
        var $v_0 = this.$1B_2[id];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create("A contextual group with id: " + id + " has already been added to this ribbon.");
        $v_0 = new CUI.ContextualGroup(id, title, color, command);
        this.$1B_2[id] = $v_0
    },
    get_contextualGroupIds: function() {
        var $v_0 = [], $$dict_2 = this.$1B_2;
        for (var $$key_3 in $$dict_2) {
            var $v_1 = { key: $$key_3, value: $$dict_2[$$key_3] };
            Array.add($v_0, $v_1.key)
        }
        return $v_0
    },
    removeContextualGroup: function(id) {
        var $v_0 = this.$1B_2[id];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $$enum_3 = this.$8_0.getEnumerator();
            while ($$enum_3.moveNext()) {
                var $v_1 = $$enum_3.get_current();
                if ($v_1.$1M_2 && $v_1.$1A_2 === id)
                    throw Error.create("You cannot remove a contextual group when there are Tabs that refer to it.")
            }
            delete this.$1B_2[id]
        }
    },
    showContextualGroup: function(id) { this.$Bg_2(id, true) },
    hideContextualGroup: function(id) { this.$Bg_2(id, false) },
    $Bg_2: function($p0, $p1) {
        var $v_0 = this.$1B_2[$p0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            throw Error.create("This ribbon does not contain a contextual group with id: " + $p0);
        var $v_1 = false, $$enum_5 = this.$8_0.getEnumerator();
        while ($$enum_5.moveNext()) {
            var $v_2 = $$enum_5.get_current();
            if ($v_2.$1A_2 === $p0) {
                if ($v_2.get_visible() !== $p1) $v_1 = true;
                $v_2.set_$9T_0($p1)
            }
        }
        $v_1 && this.$1G_0()
    },
    $Ax_2: function($p0) { return this.$1B_2[$p0] },
    addChildAtIndex: function(child, index) {
        this.ensureCorrectChildType(child);
        var $v_0 = child;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) throw Error.create("child must not be null or undefined.");
        if ($v_0.$1M_2) {
            var $v_1 = this.$1B_2[$v_0.$1A_2];
            if (CUI.ScriptUtility.isNullOrUndefined($v_1))
                throw Error.create("A contextual tab with contextual group id: " +
                    $v_0.$1A_2 +
                    " cannot be added because  the ribbon does not have a contextual group with this id.")
        }
        CUI.Component.prototype.addChildAtIndex.call(this, child, index)
    },
    ensureCorrectChildType: function(child) {
        if (!CUI.Tab.isInstanceOfType(child)) throw Error.create("Only children of type Tab can be added to a Ribbon")
    },
    get_cssClass: function() { return "ms-cui-ribbon" },
    get_rootType: function() { return "Ribbon" },
    $Ca_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$x_2)) {
            this.$x_2 = CUI.Utility.$5("div");
            this.$x_2.id = "jewelcontainer";
            this.$x_2.className = "ms-cui-jewel-container";
            this.$x_2.style.display = "none";
            this.$m_2.appendChild(this.$x_2)
        }
    },
    $G8_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3l_2)) {
            this.$3l_2 = CUI.Utility.$5("span");
            this.$3l_2.className = "ms-cui-qat-container";
            this.$l_2.appendChild(this.$3l_2)
        }
    },
    $C4_2: function($p0, $p1, $p2) {
        var $v_0 = new CUI.QATBuildOptions;
        $v_0.attachToDOM = $p1;
        $v_0.trimmedIds = this.get_$3a_2().$16_0.trimmedIds;
        var $v_1 = new CUI.QATBuilder($v_0, this.$3l_2, this.get_$3a_2().$1l_0);
        $v_1.$10_0 = $p2;
        if (!$v_1.buildQAT($p0)) throw Error.create("QAT could not be built");
        this._qat = $v_1.get_QAT();
        this.$l_2.style.display = "block"
    },
    $C3_2: function($p0, $p1, $p2) {
        this.$x_2.style.display = "block";
        var $v_0 = new CUI.JewelBuildOptions;
        $v_0.attachToDOM = $p1;
        $v_0.trimmedIds = this.get_$3a_2().$16_0.trimmedIds;
        var $v_1 = new CUI.JewelBuilder($v_0, this.$x_2, this.get_$3a_2().$1l_0);
        $v_1.$10_0 = $p2;
        if (!$v_1.buildJewel($p0)) throw Error.create("Jewel could not be built");
        this._jewel = $v_1.get_jewel();
        this.$4i_2 && this.$4i_2.dispose();
        this.$4i_2 = $v_1
    },
    _qat: null,
    get_QAT: function() { return this._qat },
    set_QAT: function(value) {
        this._qat = value;
        return value
    },
    $4i_2: null,
    _jewel: null,
    get_jewel: function() { return this._jewel },
    set_jewel: function(value) {
        this._jewel = value;
        return value
    },
    $Fq_2: function($p0, $p1, $p2, $p3, $p4) { return new CUI.Tab(this, $p0, $p1, $p2, $p3, false, null, $p4) },
    $Fg_2: function($p0, $p1, $p2, $p3, $p4, $p5) { return new CUI.Tab(this, $p0, $p1, $p2, $p3, true, $p4, $p5) },
    $Fj_2: function($p0, $p1, $p2, $p3, $p4) { return new CUI.Group(this, $p0, $p2, $p3, $p4, $p1) },
    $Fk_2: function($p0, $p1) { return new CUI.GroupPopup(this, $p0, $p1) },
    $Fl_2: function($p0, $p1) { return new CUI.GroupPopupLayout(this, $p0, $p1) },
    $CP_2: function($p0, $p1) { return new CUI.Layout(this, $p0, $p1) },
    $31_2: function($p0, $p1, $p2) { return new CUI.Section(this, $p0, $p1, $p2) },
    $CS_2: function($p0) { return new CUI.Strip(this, $p0) },
    $8C_2: null,
    $Jd_2: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && this.$E_2.$2U_0();
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && !this.$E_2.$1M_2) this.$8C_2 = this.$E_2;
        if (CUI.ScriptUtility.isNullOrUndefined(this
                .$E_2) ||
            !this.$E_2.$8_0.$T_0)
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) &&
                !CUI.ScriptUtility.isNullOrUndefined(this.$v_2) &&
                this.get_$3_0().lastChild === this.$v_2 &&
                this.get_$3_0().removeChild(this.$v_2);
        else !CUI.ScriptUtility.isNullOrUndefined(this.$v_2) && this.get_$3_0().appendChild(this.$v_2);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) return;
        var $v_0 = this.$E_2.$o_0;
        this.$E_2.$3V_0();
        if (this.$E_2.$8_0.$T_0 > 0 && !CUI.ScriptUtility.isNullOrUndefined(this.$v_2)) {
            var $v_1 = false;
            if (this.$v_2.hasChildNodes()) {
                $v_1 = this.$v_2.firstChild === this.$E_2.get_$3_0();
                !$v_1 && this.$v_2.removeChild(this.$v_2.firstChild)
            }
            !$v_1 && this.$v_2.appendChild(this.$E_2.get_$3_0())
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().TabSwitchCommand) &&
            this.$3y_2 !== this.$E_2) {
            var $v_2 = new CUI.CommandContextSwitchCommandProperties;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$3y_2) && this.$3y_2 !== this.$E_2) {
                $v_2.OldContextId = this.$3y_2.$6_0;
                $v_2.OldContextCommand = this.$3y_2.$y_2
            } else {
                $v_2.OldContextId = null;
                $v_2.OldContextCommand = null
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) {
                $v_2.NewContextId = this.$E_2.$6_0;
                $v_2.NewContextCommand = this.$E_2.$y_2;
                $v_2.ChangedByUser = this.$E_2.$77_2
            }
            this.raiseCommandEvent(this.get_ribbonProperties().TabSwitchCommand, 2, $v_2);
            this.$Je_2(this.$E_2)
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) {
            this.$E_2.$77_2 = false;
            this.$E_2.$1D_2 && this.$E_2.$EU_2()
        }
    },
    $9C_2: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0)) {
            this.$1G_0();
            $p0.$Bf_2(true, false);
            !$p0.$1M_2 && this.$BX_2(0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && this.$E_2 !== $p0 && this.$E_2.$Bf_2(false, false);
            this.$E_2 = $p0;
            this.set_$6N_2(false)
        }
        this.set_$1I_1(null)
    },
    $Je_2: function($p0) { this.$3y_2 = $p0 },
    selectTabById: function(tabId) {
        var $v_0 = this.getChild(tabId);
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if ($v_0.$4r_2 && $v_0.get_visible()) return true;
            $v_0.$1M_2 && !$v_0.get_visible() && this.showContextualGroup($v_0.$1A_2);
            if ($v_0.get_visible()) {
                $v_0.set_selected(true);
                return true
            }
        }
        return false
    },
    selectTabByCommand: function(tabCommand) {
        if (this.get_selectedTabCommand() === tabCommand) return true;
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            if ($v_0.$y_2 === tabCommand) return this.selectTabById($v_0.$6_0)
        }
        return false
    },
    $BX_2: function($p0) {
        var $v_0 = CUI.ContextualGroup.$91($p0);
        if ($v_0 === "") {
            CUI.Utility.removeCSSClassFromElement(this.$m_2, this.$4P_2);
            this.$4P_2 = null
        } else {
            !this.$4P_2 && CUI.Utility.removeCSSClassFromElement(this.$m_2, this.$4P_2);
            this.$4P_2 = "ms-cui-ct-topBar-" + $v_0;
            CUI.Utility.ensureCSSClassOnElement(this.$m_2, this.$4P_2)
        }
    },
    $4P_2: null,
    get_selectedTabCommand: function() { return this.$E_2 ? this.$E_2.$y_2 : null },
    get_selectedTabId: function() { return this.$E_2 ? this.$E_2.$6_0 : null },
    $DK_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) return 0;
        return this.$v_2.offsetHeight - this.$E_2.get_$3_0().offsetHeight
    },
    $94_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) return 0;
        return this.$v_2.offsetWidth - this.$E_2.$HF_2()
    },
    $B3_2: function() { return this.get_$3_0().offsetWidth },
    $DG_2: function() { return 100 },
    $DP_2: function() {
        this.$A8_2 = this.get_$3_0().style.display;
        this.get_$3_0().style.display = "none";
        return
    },
    $JS_2: function() {
        this.get_$3_0().style.display = this.$A8_2;
        if (this.$B3_2() < this.$DG_2()) {
            this.get_$3_0().style.display = "none";
            return
        }
    },
    $DL_2: function() { return CUI.Utility.$55().toString() + CUI.Utility.$6J().toString() },
    $JA_2: function($p0) {
        var $v_0 = 20;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) return false;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && !this.$E_2.$AD_2) {
            var $v_6 = null;
            if (this.$7G_1) $v_6 = this.getDataCookieValue(this.$E_2.$6_0);
            var $v_7 = this.$3q_2;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_6) && $v_6.startsWith($v_7)) {
                var $v_8 = $v_6.split("|");
                if (!CUI.ScriptUtility.isNullOrUndefined($v_8) && $v_8.length === 4) {
                    var $v_9 = parseInt($v_8[1]), $v_A = parseInt($v_8[2]), $v_B = $v_8[3];
                    $v_0 = $v_A > $v_0 ? $v_A : $v_0;
                    if (!isNaN($v_9) && $v_9 >= 0)
                        if ($v_9 >= 0 && $v_9 < this.$E_2.get_scaling().$2R_0.length) {
                            this.$E_2.scaleIndex($v_9);
                            this.$E_2.$AD_2 = true;
                            this.$2W_0();
                            if ($v_B === this.get_$25_1().get_ribbonBuildOptions().scalingHint) {
                                this.$E_2.$8B_2 = this.$3q_2;
                                return true
                            }
                        }
                }
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) return false;
        this.$E_2.$o_0 && this.$2W_0();
        if ($p0 && this.$B3_2() > 0)
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()))
                if (this.get_$3_0().style.display !== "none" && this.$B3_2() < this.$DG_2()) this.$DP_2();
                else this.get_$3_0().style.display === "none" && this.$JS_2();
        var $v_1 = 0, $v_2 = false;
        while ((this.$94_2() < 0 || this.$DK_2() < 0 || this.$E_2.get_$BJ_2()) && $v_1 < 25) {
            if (!this.$E_2.scaleDown()) {
                $v_2 = true;
                break
            }
            this.$2W_0();
            $v_1++
        }
        if ($v_2);
        var $v_3 = 0, $v_4 = 0;
        if ($v_1 <= 0)
            while (this.$94_2() > $v_0 && $v_3 < 25) {
                if (!this.$E_2.scaleUp()) break;
                this.$2W_0();
                $v_3++;
                if (this.$94_2() <= 0 || this.$DK_2() < 0 || this.$E_2.get_$BJ_2()) {
                    this.$E_2.scaleDown();
                    this.$2W_0();
                    $v_4++;
                    break
                }
            }
        this.$7G_1 && this.$E_2.$1Y_2 >= -1 && this.$JY_2();
        this.$E_2.$8B_2 = this.$3q_2;
        this.$BT_2();
        var $v_5 = $v_1 > 0 || $v_3 - $v_4 > 0;
        if ($v_5)
            !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonProperties().ScaleCommand) &&
                this.raiseCommandEvent(this.get_ribbonProperties().ScaleCommand, 1, null);
        return $v_5
    },
    $JR_2: function() { return this.$0_0._textDirection === 1 && (CUI.Utility.$58() || CUI.Utility.get_$99()) },
    $JP_2: function() {
        var $v_0 = this.$CA_2(this.$18_2);
        this.$18_2.style.width = $v_0 + "px";
        this.$18_2.setAttribute("_widthAdded", true)
    },
    $CA_2: function($p0) {
        for (var $v_0 = 0, $v_1 = $p0.children, $v_2 = $v_1.length, $v_3 = 0; $v_3 < $v_2; $v_3++) {
            var $v_4 = $v_1[$v_3];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_4) && $v_4.nodeName === "LI" && $v_4.offsetWidth > 0) {
                var $v_5 = $v_4.childNodes[1];
                if (!CUI.ScriptUtility.isNullOrUndefined($v_5) && $v_5.nodeName === "UL") {
                    var $v_6 = this.$CA_2($v_5);
                    $v_5.style.width = $v_6 + "px";
                    $v_0 = $v_0 + $v_6 + 4
                } else $v_0 = $v_0 + $v_4.offsetWidth + 2
            }
        }
        return $v_0
    },
    $BT_2: function() {
        this.$JR_2() && this.$JP_2();
        if (!CUI.ScriptUtility.isNullOrUndefined(window._ribbonScaleHeader))
            try {
                window._ribbonScaleHeader(this.$2F_2, this.$0_0._textDirection === 1)
            } catch ($v_0) {
                if ($v_0.number !== -2146827843) throw $v_0
            }
    },
    $59_2: function() {
        if (this.$2K_2) {
            this.$BT_2();
            return false
        }
        var $v_0 = this.$JA_2(false);
        this.$A2_2 = new Date;
        return $v_0
    },
    $J9_2: function($p0) { !CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && this.$E_2.$EE_2($p0) },
    $Bo_2: true,
    get_$Hu_2: function() { return this.$A2_2.getTime() },
    $JY_2: function() {
        this.storeDataCookie(this.$E_2.$6_0,
            CUI.Utility.$55().toString() +
            CUI.Utility.$6J().toString() +
            "|" +
            this.$E_2.$1Y_2.toString() +
            "|" +
            this.$94_2().toString() +
            "|" +
            this.get_$25_1().get_ribbonBuildOptions().scalingHint.toString())
    },
    $2K_2: false,
    $Bu_2: false,
    $8H_2: false,
    get_minimized: function() { return this.$2K_2 },
    set_minimized: function(value) {
        if (this.$2K_2 !== value) {
            this.set_$6N_2(value);
            !value && this.get_$7V_1() && this.pollForStateAndUpdate()
        }
        return value
    },
    $A5_2: false,
    set_$6N_2: function($p0) {
        if (this.$2K_2 !== $p0 || !this.$A5_2) {
            this.$1G_0();
            this.$Bu_2 = !$p0;
            this.$8H_2 = true;
            this.$2K_2 = $p0;
            this.$A5_2 = true;
            if ($p0 && !CUI.ScriptUtility.isNullOrUndefined(this.$E_2)) {
                this.$E_2.$Bf_2(false, false);
                this.$E_2 = null
            }
        }
        return $p0
    },
    $6P_0: function() {
        this.$3L_0 = new Date;
        this.$4J_1 = false;
        var $v_0 = {}, $$dict_4 = this.$1B_2;
        for (var $$key_5 in $$dict_4) {
            var $v_1 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_2 = $v_1.value, $v_3 = false;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2
                .$y_0)) $v_3 = this.get_rootUser().isRootCommandEnabled($v_2.$y_0, this);
            if ($v_3) $v_0[$v_1.key] = true;
            this.$Bg_2($v_1.key, $v_3)
        }
        this._qat && this._qat.pollForStateAndUpdate();
        this._jewel && this._jewel.pollForStateAndUpdate();
        if (this.$o_0) {
            this.$2W_0();
            this.$BT_2()
        }
        !CUI.ScriptUtility.isNullOrUndefined(this.$E_2) && this.$E_2.$6P_0();
        if (this.$4J_1) {
            this.$59_2();
            this.$4J_1 = false
        }
        this.ensureGlobalDisablingRemoved()
    },
    $4E_0: function($p0) {
        if ($p0.$M_1 !== 11) {
            $p0.get_commandInfo().RootLocation = $p0.$M_1 === 2 ? "UpperRibbon" : "LowerRibbon";
            if ($p0.$M_1 === 2) {
                var $v_0 = $p0.$3w_1;
                $p0.get_commandInfo().TabId = $v_0.NewContextId
            }
        }
        return CUI.Root.prototype.$4E_0.call(this, $p0)
    },
    get_jewelElement: function() { return this.$x_2 },
    set_jewelElement: function(value) {
        this.$x_2 = value;
        return value
    },
    $85_2: false,
    $3q_2: null,
    $If_2: function($p0) {
        if (this.get_$CV_1()) return;
        var $v_0 = this.$DL_2();
        if (this.$3q_2 === $v_0) return;
        this.$3q_2 = $v_0;
        if (!this.$85_2 && this.$Bo_2 && this.$Jg_2()) {
            this.$J7_2();
            this.$85_2 = true;
            this._componentWidth = this._componentHeight = -1;
            this.$69_1();
            this.$46_1();
            var $v_1 = this.$59_2();
            $v_1 && this.pollForStateAndUpdate();
            this.$85_2 = false
        }
    },
    $Jg_2: function() { return this.$AO_2 !== CUI.Utility.$55() || this.$AN_2 !== CUI.Utility.$6J() },
    $J7_2: function() {
        this.$AO_2 = CUI.Utility.$55();
        this.$AN_2 = CUI.Utility.$6J()
    },
    get_ribbonProperties: function() { return this.$7_1 },
    get_$3a_2: function() { return this.get_$25_1() },
    set_$3a_2: function($p0) {
        this.set_$25_1($p0);
        return $p0
    },
    get_domElementTagName: function() { return "div" },
    $2U_0: function() {
        CUI.Root.prototype.$2U_0.call(this);
        this.get_$3_0().setAttribute("aria-describedby", "ribboninstructions");
        this.get_$3_0().setAttribute("role", "toolbar");
        this.$GC_2();
        this.$GD_2();
        this.$G8_2();
        this.$Ca_2();
        this.$G9_2();
        this.$G6_2();
        this.$Ca_2()
    },
    $GD_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$l_2)) {
            this.$l_2 = CUI.Utility.$5("div");
            this.$l_2.className = "ms-cui-topBar1";
            this.$l_2.style.display = "none";
            this.$2F_2.appendChild(this.$l_2)
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$m_2)) {
            this.$m_2 = CUI.Utility.$5("div");
            this.$m_2.className = "ms-cui-topBar2";
            this.$2F_2.appendChild(this.$m_2)
        }
    },
    $GC_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3F_2)) {
            this.$3F_2 = CUI.Utility.$5("span");
            this.$3F_2.className = "ms-cui-hidden";
            this.$3F_2.id = "ribboninstruction";
            CUI.Utility.$4I(this.$3F_2, this.$7_1.NavigationHelpText)
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2F_2)) {
            this.$2F_2 = CUI.Utility.$5("div");
            this.$2F_2.className = "ms-cui-ribbonTopBars";
            this.get_$3_0().appendChild(this.$3F_2);
            this.get_$3_0().appendChild(this.$2F_2)
        }
    },
    $G9_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$v_2)) {
            this.$v_2 = CUI.Utility.$5("div");
            CUI.Utility.disableElement(this.$v_2)
        }
    },
    $G6_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$11_2)) this.$11_2 = $get(this.$37_1 + "-QATRowCenter");
        if (CUI.ScriptUtility.isNullOrUndefined(this.$12_2)) this.$12_2 = $get(this.$37_1 + "-QATRowRight");
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2H_2)) this.$2H_2 = $get(this.$37_1 + "-TabRowLeft");
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2I_2)) this.$2I_2 = $get(this.$37_1 + "-TabRowRight")
    },
    $HN_2: function() {
        if (!this.$5v_2 && !CUI.ScriptUtility.isNullOrUndefined(this.$11_2) && this.$11_2.parentNode !== this.$l_2) {
            this.$11_2.parentNode && this.$11_2.parentNode.removeChild(this.$11_2);
            this.$l_2.appendChild(this.$11_2);
            this.$11_2.style.display = "inline-block";
            this.$l_2.style.display = "block";
            CUI.Utility.$35(this.$11_2, true, false)
        }
        if (!this.$5v_2 && !CUI.ScriptUtility.isNullOrUndefined(this.$12_2) && this.$12_2.parentNode !== this.$l_2) {
            this.$12_2.parentNode && this.$12_2.parentNode.removeChild(this.$12_2);
            this.$l_2.appendChild(this.$12_2);
            this.$12_2.style.display = "inline-block";
            this.$l_2.style.display = "block";
            CUI.Utility.$35(this.$12_2, true, false)
        }
        if (!this.$5v_2 && !CUI.ScriptUtility.isNullOrUndefined(this.$2H_2) && this.$2H_2.parentNode !== this.$m_2) {
            this.$2H_2.parentNode && this.$2H_2.parentNode.removeChild(this.$2H_2);
            this.$m_2.appendChild(this.$2H_2);
            this.$2H_2.style.display = "block";
            CUI.Utility.$35(this.$2H_2, true, false)
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$18_2)) {
            this.$18_2 = CUI.Utility.$5("ul");
            this.$18_2.setAttribute("role", "tablist");
            this.$18_2.className = "ms-cui-tts";
            this.$m_2.appendChild(this.$18_2)
        }
        if (!this.$5v_2 && !CUI.ScriptUtility.isNullOrUndefined(this.$2I_2) && this.$2I_2.parentNode !== this.$m_2) {
            this.$2I_2.parentNode && this.$2I_2.parentNode.removeChild(this.$2I_2);
            this.$m_2.appendChild(this.$2I_2);
            this.$2I_2.style.display = "block";
            CUI.Utility.$35(this.$2I_2, true, false)
        }
        this.$5v_2 = true
    },
    ensureGlobalDisablingRemoved: function() {
        CUI.Utility.enableElement(this.$18_2);
        this.$Cb_2();
        this._jewel && this._jewel.set_enabled(true);
        this._qat && this._qat.pollForStateAndUpdate()
    },
    $Cb_2: function() { CUI.Utility.enableElement(this.$v_2) },
    get_rootUser: function() { return CUI.Root.prototype.get_rootUser.call(this) },
    set_rootUser: function(value) {
        CUI.Root.prototype.set_rootUser.call(this, value);
        !CUI.ScriptUtility.isNullOrUndefined(this._qat) && this._qat.set_rootUser(value);
        !CUI.ScriptUtility.isNullOrUndefined(this._jewel) && this._jewel.set_rootUser(value);
        return value
    },
    dispose: function() {
        this.set_$CV_1(true);
        var $v_0 = this.$0_0;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0.$3S_1;
            !CUI.ScriptUtility.isNullOrUndefined($v_1) && window.clearTimeout($v_1);
            $v_0.$46_1()
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$5r_2)) {
            this.set_$9U_2(false);
            this.$5r_2 = null
        }
        if (this.$8M_2) {
            $removeHandler(this.get_$3_0(), "contextmenu", this.$8M_2);
            this.$8M_2 = null
        }
        if (this.$81_2) {
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.get_$3_0().getAttribute("_events")) {
                $removeHandler(this.get_$3_0(), "keydown", this.$74_2);
                this.$74_2 = null;
                $removeHandler(this.get_$3_0(), "keydown", this.$72_2);
                this.$72_2 = null
            }
            $removeHandler(document, "keydown", this.$73_2);
            this.$73_2 = null
        }
        CUI.Root.prototype.dispose.call(this);
        this.$3y_2 = null;
        this.$E_2 = null;
        this.$2F_2 = null;
        this.$18_2 = null;
        this.$x_2 = null;
        this.$v_2 = null;
        this.$2H_2 = null;
        this.$2I_2 = null;
        this.$3l_2 = null;
        this.$11_2 = null;
        this.$12_2 = null;
        this.$l_2 = null;
        this.$m_2 = null;
        this.$3F_2 = null;
        this.$9h_2 = null;
        this.$3G_2 = null;
        var $$dict_4 = this.$1B_2;
        for (var $$key_5 in $$dict_4) {
            var $v_2 = { key: $$key_5, value: $$dict_4[$$key_5] }, $v_3 = $v_2.value;
            $v_3.dispose()
        }
        this.$1B_2 = null;
        if (this.$4i_2) {
            this.$4i_2.dispose();
            this.$4i_2 = null
        }
    }
};
CUI.RibbonCommand = function() {};
CUI.RibbonCommand.$DI = function($p0) {
    var $v_0 = window._v_rg_spbutton;
    if ($v_0) {
        var $v_1 = $v_0[$p0];
        if ($v_1) {
            var $v_2 = $get($v_1);
            return $v_2
        }
    }
    return null
};
CUI.RibbonCommand.serverButton = function(srcId, menuItemId) {
    var $v_0 = CUI.RibbonCommand.$DI(srcId);
    if ($v_0) {
        var $v_1 = $v_0;
        if (CUI.BrowserUtility.$DY())
            if ($v_0.tagName !== "A") CUI.NativeUtility.ffClick($v_0);
            else window.location.href = $v_1.href;
        else $v_0.click()
    }
};
CUI.RibbonCommand.serverQueryButton = function(srcId) {
    var $v_0 = CUI.RibbonCommand.$DI(srcId);
    return !!$v_0
};
CUI.RibbonCommand.serverControlLabel = function(ribbonCommand) {
    var $v_0 = window._v_rg_spbutton;
    if ($v_0) {
        var $v_1 = $v_0[ribbonCommand];
        if ($v_1) {
            var $v_2 = $get($v_1);
            return $v_2.value
        }
    }
    return null
};
CUI.RibbonBuildContext = function() { CUI.RibbonBuildContext.initializeBase(this) };
CUI.RibbonBuildContext.prototype = {
    clone: function() {
        var $v_0 = new CUI.RibbonBuildContext;
        $v_0.initializedTab = this.initializedTab;
        $v_0.initialScalingIndex = this.initialScalingIndex;
        $v_0.initialTabId = this.initialTabId;
        $v_0.ribbon = this.ribbon;
        return $v_0
    },
    initializedTab: null,
    initialTabId: null,
    initialScalingIndex: 0,
    ribbon: null
};
CUI.RibbonBuildOptions = function() {
    this.initialScalingIndex = -1;
    CUI.RibbonBuildOptions.initializeBase(this)
};
CUI.RibbonBuildOptions.prototype = {
    lazyTabInit: false,
    shallowTabs: false,
    showQATId: null,
    showJewelId: null,
    minimized: false,
    shownTabs: null,
    shownContextualGroups: null,
    initiallyVisibleContextualGroups: null,
    normalizedContextualGroups: null,
    trimEmptyGroups: false,
    initialTabSelectedByUser: false,
    launchedByKeyboard: false,
    scalingHint: "0"
};
CUI.RibbonBuilder = function(options, elmPlaceholder, rootBuildClient) {
    this.$$d_$IU_1 = Function.createDelegate(this, this.$IU_1);
    this.$$d_$Fu_1 = Function.createDelegate(this, this.$Fu_1);
    this.$$d_$Dv_1 = Function.createDelegate(this, this.$Dv_1);
    CUI.RibbonBuilder.initializeBase(this, [options, elmPlaceholder, rootBuildClient]);
    if (CUI.ScriptUtility
        .isNullOrUndefined(elmPlaceholder)) throw Error.create("Ribbon placeholder DOM element is null or undefined.")
};
CUI.RibbonBuilder.prototype = {
    get_ribbon: function() { return this.$0_0 },
    set_ribbon: function(value) {
        this.$0_0 = value;
        return value
    },
    get_ribbonBuildOptions: function() { return this.$16_0 },
    buildRibbonAndInitialTab: function(initialTabId) {
        if (CUI.ScriptUtility
            .isNullOrUndefined(initialTabId)) throw Error.create("Initial tab for ribbon is null or undefined");
        if (this.$3I_0) return false;
        var $v_0 = new CUI.RibbonBuildContext;
        $v_0.initialTabId = initialTabId;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().attachToDOM) &&
            this.get_ribbonBuildOptions().attachToDOM)
            $v_0.initialScalingIndex = this.get_ribbonBuildOptions().initialScalingIndex;
        this.$3I_0 = true;
        var $v_1 = new CUI.DataQuery;
        $v_1.id = $v_0.initialTabId;
        $v_1.queryType = 2;
        $v_1.handler = this.$$d_$Dv_1;
        $v_1.data = $v_0;
        this.$10_0.runQuery($v_1);
        return true
    },
    buildRibbonFromData: function(dataNode, initialTabId) {
        var $v_0 = new CUI.RibbonBuildContext;
        $v_0.initialTabId = initialTabId;
        var $v_1 = new CUI.DataQueryResult;
        $v_1.success = true;
        $v_1.queryData = dataNode;
        $v_1.contextData = $v_0;
        this.$Dv_1($v_1)
    },
    $Dv_1: function($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, "loaded");
        var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, "Templates");
        !CUI.ScriptUtility.isNullOrUndefined($v_1) && CUI.TemplateManager.get_instance().loadTemplates($v_1);
        this.set_ribbon(this.$FI_1($p0.queryData, $v_0));
        this.get_ribbon().set_$3a_2(this);
        this.$1l_0.onComponentCreated(this.get_ribbon(), this.get_ribbon().$6_0);
        if (this.get_ribbonBuildOptions().minimized) this.get_ribbon().set_$6N_2(true);
        else {
            this.get_ribbon().set_$6N_2(false);
            var $v_3 = this.get_ribbon().getChild($v_0.initialTabId);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_3)) {
                $v_3.$77_2 = this.get_ribbonBuildOptions().initialTabSelectedByUser;
                this.get_ribbon().$9C_2($v_3)
            }
        }
        this.get_ribbon().$37_1 = this.get_ribbonBuildOptions().clientID;
        var $v_2 = !this.get_ribbonBuildOptions().minimized && this.get_ribbonBuildOptions().attachToDOM;
        if ($v_2) {
            !this.$16_0.minimized && this.get_ribbon().$J9_2($v_0.initialScalingIndex - 1);
            this.get_ribbon().$68_0(true);
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showQATId) &&
                this.get_ribbon().$C4_2(this.get_ribbonBuildOptions().showQATId, true, this.$10_0);
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showJewelId) &&
                this.get_ribbon().$C3_2(this.get_ribbonBuildOptions().showJewelId, true, this.$10_0)
        } else {
            this.get_ribbon().$2U_0();
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showQATId) &&
                this.get_ribbon().$C4_2(this.get_ribbonBuildOptions().showQATId, false, this.$10_0);
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbonBuildOptions().showJewelId) &&
                this.get_ribbon().$C3_2(this.get_ribbonBuildOptions().showJewelId, false, this.$10_0);
            CUI.Utility.removeChildNodesSlow(this._elmPlaceholder);
            this._elmPlaceholder.appendChild(this.get_ribbon().get_$3_0())
        }
        this.get_ribbon().$59_2();
        this.$BI_0(this.get_ribbon());
        this.$1l_0.onComponentBuilt(this.get_ribbon(), this.get_ribbon().$6_0);
        this.get_ribbonBuildOptions().launchedByKeyboard && this.get_ribbon().setFocusOnRibbon();
        CUI.PMetrics.perfMark(7104)
    },
    $IU_1: function($p0) {
        var $v_0 = $p0.contextData;
        if ($p0.success) {
            var $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, "Ribbon"),
                $v_2 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1, "Tabs"),
                $v_3 = null;
            if (CUI.ScriptUtility.isNullOrUndefined($v_2) || !CUI.DataNodeWrapper.getNodeChildren($v_2).length)
                for (var $v_6 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1, "ContextualTabs"),
                    $v_7 = CUI.DataNodeWrapper.getNodeChildren($v_6),
                    $v_8 = 0;
                    $v_8 < $v_7.length;
                    $v_8++) {
                    var $v_9 = $v_7[$v_8];
                    $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_9);
                    if ($v_3.length > 0) break
                }
            else $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_2);
            var $v_4 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0.queryData, "Templates");
            $v_4 = this.applyDataExtensions($v_4);
            CUI.TemplateManager.get_instance().loadTemplates($v_4);
            var $v_5 = this.applyDataExtensions($v_3[0]);
            this.$Ah_1($v_0.initializedTab, $v_5, $v_0);
            $v_0.initializedTab.get_ribbon().$9C_2($v_0.initializedTab);
            $v_0.initializedTab.$BG_0(true)
        }
        CUI.PMetrics.perfMark(7106)
    },
    $FI_1: function($p0, $p1) {
        var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Ribbon");
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) throw Error.create("No ribbon element was present in the data");
        var $v_1 = new CUI.DataNodeWrapper($v_0);
        this.set_ribbon(new CUI.Ribbon($v_1.get_attributes()["Id"], $v_1.get_attributes()));
        this.get_ribbon().set_useDataCookie(true);
        var $v_2 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
            .getFirstChildNodeWithName($v_1.$b_0, "Tabs"));
        this.$By_1($v_2, null, $p1);
        var $v_3 = CUI.DataNodeWrapper.getFirstChildNodeWithName($v_1.$b_0, "ContextualTabs");
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3))
            for (var $v_4 = CUI.DataNodeWrapper.getNodeChildren($v_3),
                $v_5 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownContextualGroups),
                $v_6 = 0;
                $v_6 < $v_4.length;
                $v_6++) {
                if ($v_5) {
                    var $v_7 = CUI.DataNodeWrapper.getNodeAttributes($v_4[$v_6])["Id"];
                    if (!CUI.ScriptUtility
                        .isNullOrUndefined($v_7))
                        if (CUI.ScriptUtility
                            .isNullOrUndefined(this.get_ribbonBuildOptions().shownContextualGroups[$v_7])) continue
                }
                this.$Ep_1($v_4[$v_6], $p1)
            }
        return this.get_ribbon()
    },
    $Ep_1: function($p0, $p1) {
        var $v_0 = CUI.DataNodeWrapper.getNodeAttributes($p0),
            $v_1 = 0,
            $v_2 = $v_0["Id"],
            $v_3 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().normalizedContextualGroups) &&
                !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().normalizedContextualGroups[$v_2]) &&
                this.get_ribbonBuildOptions().normalizedContextualGroups[$v_2];
        if (!$v_3) {
            switch ($v_0["Color"]) {
            case "DarkBlue":
                $v_1 = 1;
                break;
            case "LightBlue":
                $v_1 = 2;
                break;
            case "Magenta":
                $v_1 = 6;
                break;
            case "Green":
                $v_1 = 5;
                break;
            case "Orange":
                $v_1 = 4;
                break;
            case "Purple":
                $v_1 = 8;
                break;
            case "Teal":
                $v_1 = 3;
                break;
            case "Yellow":
                $v_1 = 7;
                break;
            default:
                $v_1 = 0;
                break
            }
            this.get_ribbon().addContextualGroup($v_2, $v_0["Title"], $v_1, $v_0["Command"])
        }
        var $v_4 = CUI.DataNodeWrapper.getNodeChildren($p0);
        if (!$v_3)
            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                var $v_6 = CUI.DataNodeWrapper.getNodeAttribute($v_4[$v_5], "Id");
                if ($v_6 === $p1.initialTabId) {
                    if (CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions()
                        .initiallyVisibleContextualGroups)
                    ) this.get_ribbonBuildOptions().initiallyVisibleContextualGroups = {};
                    this.get_ribbonBuildOptions().initiallyVisibleContextualGroups[$v_2] = true;
                    break
                }
            }
        this.$By_1($v_4, $v_3 ? null : $v_0["Id"], $p1)
    },
    $By_1: function($p0, $p1, $p2) {
        for (var $v_0 = !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownTabs), $v_1 = 0;
            $v_1 < $p0.length;
            $v_1++) {
            if ($v_0) {
                var $v_3 = CUI.DataNodeWrapper.getNodeAttributes($p0[$v_1])["Id"];
                if (!CUI.ScriptUtility
                    .isNullOrUndefined($v_3))
                    if (CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().shownTabs[$v_3])) continue
            }
            var $v_2 = this.$FM_1($p0[$v_1], $p2, $p1);
            this.get_ribbon().addChild($v_2)
        }
    },
    $FM_1: function($p0, $p1, $p2) {
        var $v_0 = new CUI.DataNodeWrapper($p0), $v_1;
        if (CUI.ScriptUtility.isNullOrUndefined($p2))
            $v_1 = this.get_ribbon().$Fq_2($v_0.get_attributes()["Id"],
                $v_0.get_attributes()["Title"],
                $v_0.get_attributes()["Description"],
                $v_0.get_attributes()["Command"],
                $v_0.get_attributes()["CssClass"]);
        else {
            $v_1 = this.get_ribbon().$Fg_2($v_0.get_attributes()["Id"],
                $v_0.get_attributes()["Title"],
                $v_0.get_attributes()["Description"],
                $v_0.get_attributes()["Command"],
                $p2,
                $v_0.get_attributes()["CssClass"]);
            !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbonBuildOptions().initiallyVisibleContextualGroups) &&
                this.get_ribbonBuildOptions().initiallyVisibleContextualGroups[$p2] &&
                $v_1.set_$9T_0(true)
        }
        if (!$v_0.get_children().length) $v_1.$BY_0(this.$$d_$Fu_1, $v_0.$b_0, $p1.clone());
        else this.$Ah_1($v_1, $p0, $p1);
        return $v_1
    },
    $Ah_1: function($p0, $p1, $p2) {
        for (var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p1, "Groups"),
            $v_1 = CUI.DataNodeWrapper.getNodeChildren($v_0),
            $v_2 = {},
            $v_7 = 0;
            $v_7 < $v_1.length;
            $v_7++) {
            if (this.isNodeTrimmed($v_1[$v_7])) continue;
            var $v_8 = this.$F9_1($v_1[$v_7], $p2);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_8)) $p0.addChild($v_8);
            else {
                var $v_9 = CUI.DataNodeWrapper.getNodeAttribute($v_1[$v_7], "Id");
                if (!CUI.ScriptUtility.isNullOrUndefined($v_9)) $v_2[$v_9] = $v_9
            }
        }
        for (var $v_3 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p1, "Scaling"),
            $v_4 = CUI.DataNodeWrapper.getNodeChildren($v_3),
            $v_5 = null,
            $v_6 = false,
            $v_A = 0;
            $v_A < $v_4.length;
            $v_A++) {
            var $v_B = CUI.DataNodeWrapper.getNodeName($v_4[$v_A]),
                $v_C = CUI.DataNodeWrapper.getNodeAttributes($v_4[$v_A]),
                $v_D = $v_C["GroupId"];
            if ($v_B === "MaxSize") {
                if (this.isIdTrimmed($v_D) || !CUI.ScriptUtility.isNullOrUndefined($v_2[$v_D])) continue;
                $p0.get_scaling().setGroupMaxSize($v_D, $v_C["Size"])
            } else if ($v_B === "Scale") {
                if (this.isIdTrimmed($v_D) || !CUI.ScriptUtility.isNullOrUndefined($v_2[$v_D])) continue;
                $p0.get_scaling().addScalingStep(new CUI
                    .ScalingStep($v_D, $v_C["Size"], $v_C["PopupSize"], $v_5, $v_6));
                $v_5 = null;
                $v_6 = false
            } else if ($v_B === "LowScaleWarning") {
                $v_5 = $v_C["Message"];
                $v_6 = true
            } else throw Error.create("Was expecting a node with name MaxSize or Scale.")
        }
        $p0.scaleMax()
    },
    $Fu_1: function($p0, $p1, $p2) {
        var $v_0 = $p2, $v_1 = $p0, $v_2 = new CUI.DataNodeWrapper($p1);
        $v_0.initializedTab = $p0;
        if (!$v_2.get_hasChildren()) {
            var $v_3 = new CUI.DataQuery;
            $v_3.id = $v_0.initializedTab.$6_0;
            $v_3.queryType = 4;
            $v_3.handler = this.$$d_$IU_1;
            $v_3.data = $v_0;
            this.$10_0.runQuery($v_3);
            return null
        }
        this.$Ah_1($v_1, $p1, $v_0);
        $v_1.$BG_0(true);
        this.get_ribbon().refresh();
        return $v_1
    },
    $F9_1: function($p0, $p1) {
        var $v_0 = new CUI.DataNodeWrapper($p0),
            $v_1 = $v_0.get_attributes()["Template"],
            $v_2 = CUI.TemplateManager.get_instance().getTemplate($v_1);
        if (CUI.ScriptUtility.isNullOrUndefined($v_2))
            throw Error.create("A template with name: " + $v_1 + " could not be loaded.");
        for (var $v_3 = {}, $v_4 = null, $v_8 = 0; $v_8 < $v_0.get_children().length; $v_8++)
            if ($v_0.get_children()[$v_8].name === "Controls") {
                $v_4 = $v_0.get_children()[$v_8];
                break
            }
        if (CUI.ScriptUtility.isNullOrUndefined($v_4)) throw Error.create("No Controls node found in this Group tag.");
        for (var $v_5 = CUI.DataNodeWrapper.getNodeChildren($v_4), $v_6 = true, $v_9 = 0; $v_9 < $v_5.length; $v_9++) {
            if (this.isNodeTrimmed($v_5[$v_9])) continue;
            $v_6 = false;
            var $v_A = this.$2T_0($v_5[$v_9], $p1), $v_B = $v_3[$v_A.get_templateAlias()];
            if (CUI.ScriptUtility.isNullOrUndefined($v_B)) $v_3[$v_A.get_templateAlias()] = $v_A;
            else if (Array.isInstanceOfType($v_B)) Array.add($v_B, $v_A);
            else {
                var $v_C = [];
                Array.add($v_C, $v_B);
                Array.add($v_C, $v_A);
                $v_3[$v_A.get_templateAlias()] = $v_C
            }
        }
        if (this.get_ribbonBuildOptions().trimEmptyGroups && $v_6) return null;
        var $v_7 = $v_2.createGroup(this.get_ribbon(),
            $v_0.get_attributes()["Id"],
            $v_0.get_attributes(),
            $v_0.get_attributes()["Title"],
            $v_0.get_attributes()["Description"],
            $v_0.get_attributes()["Command"],
            $v_3,
            null);
        return $v_7
    }
};
CUI.RibbonComponent = function($p0, $p1, $p2, $p3) { CUI.RibbonComponent.initializeBase(this, [$p0, $p1, $p2, $p3]) };
CUI.RibbonComponent.prototype = { get_ribbon: function() { return this.$0_0 } };
CUI.Row = function($p0, $p1) { CUI.Row.initializeBase(this, [$p0, $p1, "", ""]) };
CUI.Row.prototype = {
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        CUI.Component.prototype.appendChildrenToElement.call(this, this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    $8v_0: function() { this.set_$3_0($get(this.$U_0.$6_0 + "-" + this.$U_0.$8_0.indexOf(this))) },
    ensureCorrectChildType: function($p0) {
        if (!CUI.Strip
            .isInstanceOfType($p0) &&
            !CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Only children of type Strip and ControlComponent can be added to Row Components.")
    },
    get_domElementTagName: function() { return "span" },
    get_cssClass: function() {
        var $v_0 = this.$U_0.$M_2;
        if ($v_0 === 2) return "ms-cui-row-onerow";
        else return "ms-cui-row"
    }
};
CUI.ScalingStep = function($p0, $p1, $p2, $p3, $p4) {
    if (CUI.ScriptUtility
        .isNullOrUndefined($p0) ||
        CUI.ScriptUtility.isNullOrUndefined($p1))
        throw Error.create("groupId, layoutName and message cannot be undefined or null");
    this.$2u_0 = $p0;
    this.$6z_0 = $p1;
    this.$8b_0 = $p2;
    this.$AE_0 = $p3;
    this.$AP_0 = $p4
};
CUI.ScalingStep.prototype = {
    $2u_0: null,
    $6z_0: null,
    $8b_0: null,
    $AE_0: null,
    $AP_0: false,
    $24_0: null,
    $ET_0: function($p0) { this.$24_0 = $p0 },
    get_groupId: function() { return this.$2u_0 },
    get_layoutName: function() { return this.$6z_0 },
    get_popupSize: function() { return this.$8b_0 },
    get_scaleWarningMessage: function() { return this.$AE_0 },
    get_hasScaleWarning: function() { return this.$AP_0 },
    get_previousLayoutName: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$24_0)) return null;
        for (var $v_0 = this.$24_0.getGroupMaxSize(this.$2u_0), $v_1 = this.$24_0.$2R_0, $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++) {
            var $v_3 = $v_1[$v_2];
            if ($v_3 === this) break;
            if ($v_3.$2u_0 === this.$2u_0) $v_0 = $v_3.$6z_0
        }
        return $v_0
    }
};
CUI.Scaling = function() {
    this.$5n_0 = {};
    this.$2R_0 = []
};
CUI.Scaling.prototype = {
    $5n_0: null,
    $2R_0: null,
    setGroupMaxSize: function($p0, $p1) {
        this.$5n_0[$p0] = $p1;
        this.$o_0 = true
    },
    removeGroupMaxSize: function($p0) {
        delete this.$5n_0[$p0];
        this.$o_0 = true
    },
    getGroupMaxSize: function($p0) { return this.$5n_0[$p0] },
    addScalingStep: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0)) throw Error.create("step must be definined and not null");
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5n_0[$p0
            .$2u_0]))
            throw Error.create("You must set the GroupMaxSize of Group: " +
                $p0.$2u_0 +
                " before you add ScalingSteps for it");
        this.addScalingStepAtIndex($p0, this.$2R_0.length)
    },
    addScalingStepAtIndex: function($p0, $p1) {
        if (Array.contains(this.$2R_0, $p0)) throw Error.create("This ScalingInfo already contains this ScaleStep");
        Array.insert(this.$2R_0, $p1, $p0);
        $p0.$ET_0(this);
        this.$o_0 = true
    },
    removeScalingStep: function($p0) {
        Array.remove(this.$2R_0, $p0);
        $p0.$ET_0(null);
        this.$o_0 = true
    },
    get_steps: function() { return Array.clone(this.$2R_0) },
    get_stepsInternal: function() { return this.$2R_0 },
    $o_0: true
};
CUI.Section = function($p0, $p1, $p2, $p3) {
    CUI.Section.initializeBase(this, [$p0, $p1, "", ""]);
    this.$M_2 = $p2;
    this.$1V_2 = $p3;
    switch ($p2) {
    case 4:
        this.$4x_0(new CUI.Row($p0, $p1 + "-0"), false);
        this.$4x_0(new CUI.Row($p0, $p1 + "-1"), false);
        this.$4x_0(new CUI.Row($p0, $p1 + "-2"), false);
        break;
    case 3:
        this.$4x_0(new CUI.Row($p0, $p1 + "-0"), false);
        this.$4x_0(new CUI.Row($p0, $p1 + "-1"), false);
        break;
    case 2:
        this.$4x_0(new CUI.Row($p0, $p1 + "-0"), false);
        break;
    case 1:
        break;
    default:
        throw Error.create("Invalid SectionType")
    }
};
CUI.Section.prototype = {
    $M_2: 0,
    $1V_2: 0,
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        this.$2U_0();
        if (this.$M_2 !== 1) {
            var $v_0 = this.$8_0;
            this.$AS_2($v_0, 1);
            (this.$M_2 === 3 || this.$M_2 === 4) && this.$AS_2($v_0, 2);
            this.$M_2 === 4 && this.$AS_2($v_0, 3)
        }
        this.$o_0 = false
    },
    $8v_0: function() { this.set_$3_0($get(this.$U_0.$6_0 + "-" + this.$U_0.$8_0.indexOf(this).toString())) },
    $AS_2: function($p0, $p1) {
        var $v_0 = $p0.get_item($p1 - 1);
        $v_0.$2U_0();
        if (this.$M_2 === 3) $v_0.get_$3_0().className = "ms-cui-row-tworow";
        this.get_$3_0().appendChild($v_0.get_$3_0());
        $v_0.$3V_0()
    },
    get_cssClass: function() {
        if (this.$1V_2 === 2) return "ms-cui-section-alignmiddle";
        else return "ms-cui-section"
    },
    get_type: function() { return this.$M_2 },
    get_alignment: function() { return this.$1V_2 },
    removeChild: function($p0) {
        throw Error
            .create("Cannot directly add and remove children from Section Components")
    },
    addChildAtIndex: function($p0, $p1) {
        throw Error.create("Cannot directly add and remove children from Section Components")
    },
    getRow: function($p0) {
        switch (this.$M_2) {
        case 4:
            if ($p0 < 1 || $p0 > 3) throw Error.create("This Section type only has Row numbers 1, 2 and 3.");
            break;
        case 3:
            if ($p0 < 1 || $p0 > 2) throw Error.create("This Section type only has Row numbers 1 and 2");
            break;
        case 2:
            if ($p0 !== 1) throw Error.create("This Section type only has Row number 1.");
            break;
        default:
            throw Error.create("This Section type does not have any rows")
        }
        return this.$8_0.get_item($p0 - 1)
    },
    $2U_0: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) return;
        if (this.$M_2 === 1) {
            var $v_0 = CUI.Utility.$5("span");
            $v_0.className = "ms-cui-section-divider";
            this.set_$3_0($v_0);
            return
        }
        CUI.Component.prototype.$2U_0.call(this)
    },
    ensureCorrectChildType: function($p0) {
        var $v_0 = this.$8_0.$T_0;
        if (this
            .$M_2 ===
            2 &&
            $v_0 > 0 ||
            this.$M_2 === 3 && $v_0 > 1 ||
            this.$M_2 === 4 && $v_0 > 2) throw Error.create("No more children can be added to a Section of this type.");
        if (this.$M_2 === 1) throw Error.create("Cannot add child components to Divider Section types.");
        if (!CUI.Row.isInstanceOfType($p0))
            throw Error.create("Only children of type Row can be added to Section Components.")
    },
    clone: function($p0) {
        var $v_0 = this.get_ribbon().$31_2("clonedSection-" + this.get_ribbon().$33_1(), this.$M_2, this.$1V_2);
        if (!$p0) return $v_0;
        var $v_1 = 0, $$enum_8 = this.$8_0.getEnumerator();
        while ($$enum_8.moveNext()) {
            var $v_2 = $$enum_8.get_current(), $$enum_7 = $v_2.$8_0.getEnumerator();
            while ($$enum_7.moveNext()) {
                var $v_3 = $$enum_7.get_current(), $v_4 = null;
                if (CUI.ControlComponent.isInstanceOfType($v_3)) {
                    var $v_5 = $v_3;
                    $v_4 = $v_5.clone($p0)
                } else if (CUI.Strip.isInstanceOfType($v_3)) $v_4 = $v_3.clone($p0);
                $v_0.getRow($v_1 + 1).addChild($v_4)
            }
            $v_1++
        }
        return $v_0
    },
    get_domElementTagName: function() { return "span" }
};
CUI.Strip = function($p0, $p1) { CUI.Strip.initializeBase(this, [$p0, $p1, "", ""]) };
CUI.Strip.prototype = {
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    $8v_0: function() { this.set_$3_0($get(this.$U_0.$6_0 + "-" + this.$U_0.$8_0.indexOf(this))) },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Only children of type Control can be added to Strips.")
    },
    get_cssClass: function() { return "ms-cui-strip" },
    clone: function($p0) {
        var $v_0 = this.get_ribbon().$CS_2("clonedStrip-" + this.get_ribbon().$33_1());
        if (!$p0) return $v_0;
        var $$enum_3 = this.$8_0.getEnumerator();
        while ($$enum_3.moveNext()) {
            var $v_1 = $$enum_3.get_current();
            $v_0.addChild($v_1.clone($p0))
        }
        return $v_0
    }
};
CUI.Tab = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7) {
    this.$$d_$Eg_2 = Function.createDelegate(this, this.$Eg_2);
    this.$$d_$Ib_2 = Function.createDelegate(this, this.$Ib_2);
    this.$$d_$Dx_2 = Function.createDelegate(this, this.$Dx_2);
    this.$$d_$Ia_2 = Function.createDelegate(this, this.$Ia_2);
    CUI.Tab.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$1Y_2 = -1;
    this.$24_2 = new CUI.Scaling;
    this.$1M_2 = $p5;
    this.$1A_2 = $p6;
    this.$y_2 = $p4;
    this.$9a_2 = CUI.ScriptUtility.isNullOrUndefined($p7) ? "" : $p7;
    $p5 && this.set_$9T_0(false)
};
CUI.Tab.prototype = {
    $4r_2: false,
    $G_2: null,
    $13_2: null,
    $4b_2: null,
    $3B_2: null,
    $1Y_2: 0,
    $9a_2: null,
    $1M_2: false,
    $1A_2: null,
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.$Ae_2();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    $C0_2: function() {
        this.$G_2 = $get(this.$6_0 + "-title");
        this.$13_2 = this.$G_2.childNodes[0];
        this.$4b_2 = this.$13_2.childNodes[0];
        this.$3B_2 = this.$13_2.childNodes[1]
    },
    $C1_2: function() {
        $addHandler(this.$13_2, "dblclick", this.$$d_$Ia_2);
        $addHandler(this.$13_2, "click", this.$$d_$Dx_2);
        $addHandler(this.$13_2, "keypress", this.$$d_$Ib_2)
    },
    $8v_0: function() {
        CUI.Component.prototype.$8v_0.call(this);
        this.$C0_2()
    },
    $g_0: function() {
        CUI.Component.prototype.$g_0.call(this);
        this.$C1_2()
    },
    $2U_0: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) return;
        CUI.Component.prototype.$2U_0.call(this);
        this.get_$3_0().setAttribute("role", "tabpanel");
        this.get_$3_0().setAttribute("aria-labelledby", this.$6_0 + "-title")
    },
    get_domElementTagName: function() { return "ul" },
    $GB_2: function() { if (CUI.ScriptUtility.isNullOrUndefined(this.$G_2)) this.$G_2 = CUI.Utility.$5("li") },
    $CZ_2: function() { if (CUI.ScriptUtility.isNullOrUndefined(this.$3B_2)) this.$3B_2 = CUI.Utility.$5("span") },
    $Ae_2: function() {
        var $v_0 = " ";
        if (CUI.ScriptUtility.isNullOrUndefined(this.$13_2)) {
            this.$GB_2();
            this.$13_2 = CUI.Utility.$5("a");
            CUI.Utility.$2k(this.$13_2);
            this.$13_2.className = "ms-cui-tt-a";
            this.$4b_2 = CUI.Utility.$5("span");
            this.$4b_2.className = "ms-cui-tt-span";
            this.$G_2.appendChild(this.$13_2);
            this.$13_2.appendChild(this.$4b_2);
            this.$g_0()
        } else {
            $v_0 += this.$G_2.className.indexOf("ms-cui-ct-first") > -1 ? "ms-cui-ct-first " : "";
            $v_0 += this.$G_2.className.indexOf("ms-cui-ct-last") > -1 ? "ms-cui-ct-last" : "";
            $v_0 = $v_0.trimEnd()
        }
        this.$G_2.className = this.$DJ_2() + $v_0;
        this.$G_2.id = this.$6_0 + "-title";
        this.$G_2.setAttribute("role", "tab");
        this.$G_2.setAttribute("aria-selected", this.$4r_2);
        CUI.UIUtility.setInnerText(this.$4b_2, this.get_title());
        this.$G_2.title = this.get_title();
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.$4S_0)) this.$13_2.setAttribute("title", this.$4S_0);
        else this.$13_2.setAttribute("title", this.get_title())
    },
    $EP_2: function($p0, $p1, $p2, $p3, $p4) {
        CUI.ScriptUtility.isNullOrUndefined(this.$3B_2) && this.$CZ_2();
        if (this.$1M_2) $p1 = String.format($p1, $p2, $p3, $p4);
        else $p1 = String.format($p0, $p3, $p4);
        CUI.UIUtility.setInnerText(this.$3B_2, $p1);
        CUI.Utility.ensureCSSClassOnElement(this.$3B_2, "ms-cui-hidden");
        this.$13_2.appendChild(this.$3B_2)
    },
    $J8_2: function() { this.$G_2.className = this.$DJ_2() },
    get_cssClass: function() { return this.$H9_2() },
    get_selected: function() { return this.$4r_2 },
    set_selected: function($p0) {
        if (!this.get_visible()) throw Error.create("Tabs must be visible and enabled in order to be selected.");
        if ($p0) {
            if (this.get_needsDelayIniting()) {
                this.doDelayedInit();
                return $p0
            }
            this.get_ribbon().$9C_2(this);
            this.get_ribbon().set_$6N_2(false);
            this.get_ribbon().$2W_0();
            this.$8B_2 !== this.get_ribbon().$3q_2 && this.get_ribbon().$59_2();
            this.$E0_0();
            this.$1D_2 = false
        } else
            throw Error
                .create("Selected cannot be set to false explicitly.\nSelecting another Tab will do this implicitly.");
        return $p0
    },
    $J4_2: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon().get_$3a_2()) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_ribbon().get_$3a_2().get_ribbonBuildOptions()) &&
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_ribbon().get_$3a_2().get_ribbonBuildOptions().clientID)) {
            var $v_0 = $get(this.get_ribbon().get_$3a_2().get_ribbonBuildOptions().clientID + "_activeTabId");
            if ($v_0) $v_0.value = this.$6_0
        }
    },
    $Bf_2: function($p0, $p1) {
        $p0 && this.$J4_2();
        this.$4r_2 = $p0;
        this.$1G_0();
        $p1 && this.$Ae_2()
    },
    $BG_0: function($p0) {
        CUI.Component.prototype.$BG_0.call(this, $p0);
        this.get_ribbon().$59_2();
        this.get_ribbon().pollForStateAndUpdate()
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.Group.isInstanceOfType($p0))
            throw Error.create("Only children of type Group can be added to Tab Components")
    },
    $24_2: null,
    get_scaling: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$24_2)) this.$24_2 = new CUI.Scaling;
        return this.$24_2
    },
    get_currentScalingIndex: function() { return this.$1Y_2 },
    $8B_2: null,
    scaleMax: function() {
        this.$BU_2();
        this.$1G_0()
    },
    $BU_2: function() {
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                var $v_1 = this.$24_2.getGroupMaxSize($v_0.$6_0);
                !CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_0.selectLayout($v_1, null)
            }
        }
        this.$1Y_2 = -1
    },
    scaleIndex: function($p0) {
        this.$EE_2($p0);
        this.$1G_0()
    },
    $EE_2: function($p0) {
        this.$BU_2();
        while ($p0 > this.$1Y_2) if (!this.$ED_2()) break
    },
    $JB_2: function() {
        if (this.$1Y_2 === -2) {
            this.$BU_2();
            return true
        }
        if (this.$1Y_2 === -1) return false;
        var $v_0 = this.$24_2.$2R_0, $v_1 = $v_0[this.$1Y_2], $v_2 = this.getChild($v_1.$2u_0);
        !CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2.selectLayout($v_1.get_previousLayoutName(), null);
        this.$1Y_2--;
        return true
    },
    scaleUp: function() {
        var $v_0 = this.$JB_2();
        $v_0 && this.$1G_0();
        return $v_0
    },
    $ED_2: function() {
        if (this.$1Y_2 === -2) {
            this.scaleMax();
            return true
        }
        var $v_0 = this.$24_2.$2R_0;
        if ($v_0.length <= this.$1Y_2 + 1) return false;
        this.$1Y_2++;
        var $v_1 = $v_0[this.$1Y_2], $v_2 = this.getChild($v_1.$2u_0);
        !CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2.selectLayout($v_1.$6z_0, $v_1.$8b_0);
        return true
    },
    scaleDown: function() {
        var $v_0 = this.$ED_2();
        $v_0 && this.$1G_0();
        return $v_0
    },
    $AD_2: false,
    $HF_2: function() {
        for (var $v_0 = 0, $v_1 = this.get_$3_0().childNodes, $v_2 = 0;
            $v_2 < $v_1.length;
            $v_2++
        ) $v_0 += $v_1[$v_2].offsetWidth;
        return $v_0
    },
    get_contextual: function() { return this.$1M_2 },
    get_contextualGroupId: function() { return this.$1A_2 },
    $77_2: false,
    $1D_2: false,
    $Ib_2: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent)) {
            var $v_0 = $p0.rawEvent.keyCode;
            if ($v_0 === 13) {
                this.$1D_2 = true;
                $p0.stopPropagation();
                this.$Dx_2($p0)
            }
        }
    },
    $Dx_2: function($p0) {
        CUI.PMetrics.perfMark(7105);
        $p0.preventDefault();
        this.$8h_2 = true;
        if (this.$4r_2) window.setTimeout(this.$$d_$Eg_2, 500);
        else this.$Eg_2()
    },
    $8h_2: true,
    $Eg_2: function() {
        if (!this.$8h_2) return;
        this.$77_2 = true;
        this.get_ribbon().$CY_1();
        this.set_selected(true);
        this.get_ribbon().$46_1();
        this.get_ribbon().set_$1I_1(null);
        CUI.PMetrics.perfMark(7107)
    },
    $Dk_2: function($p0) {
        var $v_0 = document.activeElement,
            $v_1 = this.$Cg_2($v_0),
            $v_2 = this.$8_0.$T_0,
            $v_3,
            $v_4 = 0,
            $$enum_7 = this.$8_0.getEnumerator();
        while ($$enum_7.moveNext()) {
            var $v_6 = $$enum_7.get_current();
            if ($v_6.$6_0 === $v_1) break;
            $v_4++
        }
        var $v_5;
        if ($p0) $v_5 = ($v_4 + 1) % $v_2;
        else $v_5 = $v_4 - 1;
        if ($v_5 < 0) $v_5 = $v_2 + $v_5;
        while ($v_5 !== $v_4) {
            $v_3 = this.$8_0.get_item($v_5);
            if ($v_3.$Bd_0()) return;
            if ($p0) $v_5 = ($v_5 + 1) % $v_2;
            else $v_5 = $v_5 - 1;
            if ($v_5 < 0) $v_5 = $v_2 + $v_5
        }
    },
    $Cg_2: function($p0) {
        if ($p0.nodeName === "LI") return $p0.id;
        else return this.$Cg_2($p0.parentNode)
    },
    $EU_2: function() {
        var $v_0 = false, $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.$Bd_0()) {
                $v_0 = true;
                return
            }
        }
        !$v_0 && this.$13_2.focus()
    },
    $JN_2: function() { !CUI.ScriptUtility.isNullOrUndefined(this.$13_2) && this.$13_2.focus() },
    $Ia_2: function($p0) {
        this.$8h_2 = false;
        $p0.preventDefault();
        this.get_ribbon().set_$6N_2(true);
        this.get_ribbon().$2W_0()
    },
    get_$BJ_2: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0().lastChild)) {
            var $v_0 = CUI.Utility.$DB(this.get_$3_0().lastChild);
            if (this.$0_0._textDirection !== 1 && CUI.Utility.$55() <= $v_0.width + $v_0.x) return true
        }
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_1 = $$enum_2.get_current();
            if ($v_1.get_$BJ_2()) return true
        }
        return false
    },
    $DJ_2: function() {
        var $v_0 = "ms-cui-tt " + this.$9a_2;
        if (this.$4r_2) $v_0 += " ms-cui-tt-s";
        return $v_0
    },
    $H9_2: function() {
        var $v_0 = "ms-cui-tabBody";
        if (this.$1M_2) $v_0 += " ms-cui-tabBody-" + CUI.ContextualGroup.$91(this.get_ribbon().$Ax_2(this.$1A_2).$4O_0);
        return $v_0
    },
    $HC_2: function() {
        var $v_0 = "ms-cui-tabContainer";
        if (this.$1M_2)
            $v_0 += " ms-cui-tabContainer-" + CUI.ContextualGroup.$91(this.get_ribbon().$Ax_2(this.$1A_2).$4O_0);
        return $v_0
    },
    get_visible: function() { return CUI.Component.prototype.get_visible.call(this) },
    set_visible: function($p0) {
        if (this.$1M_2) throw Error.create("Visibility of Contextual Tabs cannot be set explicitly.");
        CUI.Component.prototype.set_visible.call(this, $p0);
        return $p0
    },
    $y_2: null,
    get_command: function() { return this.$y_2 },
    $4E_0: function($p0) {
        $p0.get_commandInfo().TabId = this.$6_0;
        return CUI.Component.prototype.$4E_0.call(this, $p0)
    },
    $6P_0: function() {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.$y_2)
            ? true
            : this.get_ribbon().$7U_1(this.$y_2, null, null);
        this.set_enabled($v_0);
        if ($v_0) {
            this.$3L_0 = new Date;
            CUI.Component.prototype.$6P_0.call(this)
        }
        this.get_ribbon().$Cb_2()
    },
    dispose: function() {
        CUI.Component.prototype.dispose.call(this);
        CUI.Utility.$BN(this.$G_2);
        this.$3B_2 = null;
        this.$G_2 = null;
        this.$13_2 = null;
        this.$4b_2 = null
    }
};
CUI.Template = function() {};
CUI.TemplateManager = function() { this.$4t_0 = {} };
CUI.TemplateManager.get_instance = function() {
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.TemplateManager.$87)) CUI.TemplateManager.$87 = new CUI.TemplateManager;
    return CUI.TemplateManager.$87
};
CUI.TemplateManager.prototype = {
    $4t_0: null,
    addTemplate: function($p0, $p1) { this.$4t_0[$p1] = $p0 },
    removeTemplate: function($p0) { this.$4t_0[$p0] = null },
    getTemplate: function($p0) { return this.$4t_0[$p0] },
    loadTemplates: function($p0) {
        for (var $v_0 = new CUI.DataNodeWrapper($p0),
            $v_1 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "RibbonTemplates"),
            $v_2 = CUI.DataNodeWrapper.getNodeChildren($v_1),
            $v_3 = 0;
            $v_3 < $v_2.length;
            $v_3++) this.$Hv_0($v_2[$v_3])
    },
    $Hv_0: function($p0) {
        var $v_0 = new CUI.DataNodeWrapper($p0),
            $v_1 = $v_0.get_attributes()["Id"],
            $v_2 = $v_0.get_attributes()["Classname"];
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$4t_0[$v_1])) return;
        if (CUI.ScriptUtility.isNullOrUndefined($v_2)) this.$4t_0[$v_1] = new CUI.DeclarativeTemplate($p0)
    }
};
CUI.RootUser = function() {};
CUI.RootProperties = function() {};
CUI.RootProperties.prototype = {
    RootEventCommand: null,
    ImageDownArrow: null,
    ImageDownArrowClass: null,
    ImageDownArrowTop: null,
    ImageDownArrowLeft: null,
    ImageSideArrow: null,
    ImageSideArrowClass: null,
    ImageSideArrowTop: null,
    ImageSideArrowLeft: null,
    ImageUpArrow: null,
    ImageUpArrowClass: null,
    ImageUpArrowTop: null,
    ImageUpArrowLeft: null,
    TextDirection: null,
    ToolTipFooterText: null,
    ToolTipFooterImage16by16: null,
    ToolTipFooterImage16by16Class: null,
    ToolTipFooterImage16by16Top: null,
    ToolTipFooterImage16by16Left: null,
    ToolTipDisabledCommandImage16by16: null,
    ToolTipDisabledCommandImage16by16Class: null,
    ToolTipDisabledCommandImage16by16Top: null,
    ToolTipDisabledCommandImage16by16Left: null,
    ToolTipDisabledCommandDescription: null,
    ToolTipDisabledCommandTitle: null,
    ToolTipDisabledCommandHelpKey: null,
    ToolTipHelpCommand: null,
    ToolTipSelectedItemTitlePrefix: null
};
CUI.RootEventCommandProperties = function() {};
CUI.RootEventCommandProperties.prototype = { RootId: null, RootType: null };
CUI.Root = function($p0, $p1) {
    this.$$d_$IK_1 = Function.createDelegate(this, this.$IK_1);
    this.$$d_$IN_1 = Function.createDelegate(this, this.$IN_1);
    this.$$d_$IO_1 = Function.createDelegate(this, this.$IO_1);
    this.$$d_$IM_1 = Function.createDelegate(this, this.$IM_1);
    this.$$d_onWindowScroll = Function.createDelegate(this, this.onWindowScroll);
    this.$$d_$BH_1 = Function.createDelegate(this, this.$BH_1);
    this.$$d_$IL_1 = Function.createDelegate(this, this.$IL_1);
    this.$3x_1 = -1;
    this.$5u_1 = -1;
    CUI.Root.initializeBase(this, [null, $p0, null, null]);
    this.initRootMember(this);
    this.$7_1 = $p1;
    this.$k_1 = {};
    this.$9Z_1 = {};
    this.$9X_1 = 0;
    this.$AM_1 = 0;
    if (!CUI.ScriptUtility.isNullOrUndefined($p1
        .TextDirection)) this._textDirection = $p1.TextDirection.toLowerCase() === "rtl" ? 1 : 0;
    this.$8T_1 = this.$$d_$IL_1;
    this.$2N_1 = this.$$d_$BH_1;
    $addHandler(document, "keydown", this.$8T_1);
    $addHandler(window, "unload", this.$2N_1)
};
CUI.Root.$1q = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return 0;
    return $p0[$p1]
};
CUI.Root.prototype = {
    $k_1: null,
    $9Z_1: null,
    $9X_1: 0,
    $AM_1: 0,
    $AB_1: false,
    $4j_1: null,
    $A1_1: null,
    _textDirection: 0,
    $37_1: null,
    $9p_1: true,
    get_initializing: function() { return this.$9p_1 },
    set_$1I_1: function($p0) {
        if (!this.$2L_1) this.$4j_1 = $p0;
        return $p0
    },
    set_$7R_1: function($p0) {
        if (!this.$2L_1) {
            this.$A1_1 = $p0;
            this.$4j_1 = $p0
        }
        return $p0
    },
    $CY_1: function() { !CUI.ScriptUtility.isNullOrUndefined(this.$4j_1) && this.$4j_1.$FU_0() },
    $J2_1: function($p0) { this.$9Z_1[$p0.$6_0] = $p0 },
    $2W_0: function() {
        CUI.Component.prototype.$2W_0.call(this);
        this.$9p_1 = false;
        if (!this.$AB_1) {
            this.$8W_1 = this.$$d_onWindowScroll;
            $addHandler(window, "scroll", this.$8W_1);
            this.$AB_1 = true
        }
    },
    $2U_0: function() {
        CUI.Component.prototype.$2U_0.call(this);
        this._textDirection === 1 && CUI.Utility.ensureCSSClassOnElement(this.get_$3_0(), "ms-cui-rtl")
    },
    setFocus: function() {
        var $v_0 = this.$4j_1;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        return $v_0.$Bc_0()
    },
    restoreFocus: function() {
        var $v_0 = this.$A1_1;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        return $v_0.$Bc_0()
    },
    $Bn_1: false,
    refresh: function() { !CUI.ScriptUtility.isNullOrUndefined(this.$2g_1) && this.$2g_1.onRootRefreshed(this) },
    attach: function() { this.$68_0(true) },
    $4J_1: false,
    get_needScaling: function() { return this.$4J_1 },
    set_needScaling: function(value) {
        this.$4J_1 = value;
        return value
    },
    $2g_1: null,
    get_rootUser: function() { return this.$2g_1 },
    set_rootUser: function(value) {
        this.$2g_1 = value;
        return value
    },
    $3e_1: null,
    get_$25_1: function() { return this.$3e_1 },
    set_$25_1: function($p0) {
        this.$3e_1 = $p0;
        return $p0
    },
    get_$7V_1: function() { return !CUI.ScriptUtility.isNullOrUndefined(this.$2g_1) },
    $7U_1: function($p0, $p1, $p2) { return (this.$Dz_1($p0, $p1, $p2, false) & 1) > 0 },
    $Dz_1: function($p0, $p1, $p2, $p3) {
        var $v_0 = 0, $v_1 = this.$2g_1.isRootCommandEnabled($p0, this);
        if ($v_1) $v_0 = 1;
        if (CUI.ScriptUtility.isNullOrUndefined($p1) || !$p3 && !$v_1) return $v_0;
        if (this.$2g_1.executeRootCommand($p1, $p2, null, this)) $v_0 |= 2;
        return $v_0
    },
    pollForStateAndUpdate: function() { this.$6P_0() },
    $6P_0: function() {
        this.$3L_0 = new Date;
        CUI.Component.prototype.$6P_0.call(this);
        this.ensureGlobalDisablingRemoved()
    },
    ensureGlobalDisablingRemoved: function() { CUI.Utility.enableElement(this.get_$3_0()) },
    get_element: function() { return this.get_$3_0() },
    get_cssClass: function() { return "ms-cui-disabled" },
    get_textDirection: function() { return this._textDirection },
    $33_1: function() { return this.$AM_1++ },
    $CR_1: function($p0, $p1, $p2, $p3, $p4, $p5) { return new CUI.MenuSection(this, $p0, $p1, $p2, $p3, $p4, $p5) },
    $CQ_1: function($p0, $p1, $p2, $p3) { return new CUI.Menu(this, $p0, $p1, $p2, $p3) },
    $Fi_1: function($p0, $p1, $p2, $p3) { return new CUI.Gallery(this, $p0, $p1, $p2, $p3) },
    $Fh_1: function($p0, $p1, $p2) { return new CUI.ControlComponent(this, $p0, $p1, $p2) },
    $6F_1: function($p0, $p1, $p2) { return new CUI.MenuItem(this, $p0, $p1, $p2) },
    $Ff_1: function($p0, $p1, $p2, $p3) { return new CUI.CommandEventArgs($p0, $p1, $p2, $p3) },
    $Ag_1: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0.$6_1)) return;
        $p0.$8g_1 = this.$HG_1();
        var $v_0 = $p0.get_commandInfo();
        $v_0.CommandId = $p0.$6_1;
        $v_0.RootId = this.$6_0;
        $v_0.RootType = this.get_rootType();
        !CUI.ScriptUtility.isNullOrUndefined(this.$2g_1) &&
            this.$2g_1.executeRootCommand($p0.$6_1, $p0.$3w_1, $v_0, this)
    },
    $4E_0: function($p0) {
        this.$Ag_1($p0);
        return true
    },
    get_rootType: function() { return "Root" },
    $HG_1: function() { return this.$9X_1++ },
    $j_1: null,
    $Eq_1: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$j_1)) this.$j_1 = [];
        Array.add(this.$j_1, $p0)
    },
    $7f_1: false,
    $45_1: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$j_1)) return;
        this.$7f_1 = true;
        var $v_0 = Array.indexOf(this.$j_1, $p0);
        if ($v_0 > -1)
            for (var $v_1 = this.$j_1.length - 1; $v_1 >= $v_0; $v_1--) {
                this.$j_1[$v_1].$6A_1();
                Array.removeAt(this.$j_1, $v_1)
            }
        else $p0.$6A_1();
        this.$7f_1 = false
    },
    $69_1: function() {
        if (this.$7f_1 || CUI.ScriptUtility.isNullOrUndefined(this.$j_1)) return;
        for (var $v_0 = this.$j_1.length - 1; $v_0 >= 0; $v_0--) {
            this.$j_1[$v_0].$6A_1();
            Array.removeAt(this.$j_1, $v_0)
        }
    },
    $44_1: null,
    $46_1: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$44_1)) return;
        this.$44_1.$n_0()
    },
    $3S_1: 0,
    $4v_1: null,
    get_$9S_1: function() {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && CUI.ScriptUtility.isNullOrUndefined(this.$4v_1)) {
            this.$4v_1 = CUI.Utility.$CO();
            this.$4v_1.className = "ms-cui-tooltip-backFrame";
            this.$4v_1.style.visibility = "hidden";
            document.body.appendChild(this.$4v_1)
        }
        return this.$4v_1
    },
    $2L_1: false,
    $1Q_1: null,
    $2y_1: null,
    $29_1: null,
    $Ez_1: function($p0, $p1) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2y_1)) this.$2y_1 = [];
        Array.add(this.$2y_1, $p0);
        this.$29_1 = $p0;
        if (this.$2L_1) return false;
        var $v_0 = this.get_$Dj_1();
        $v_0.style.visibility = "hidden";
        document.body.appendChild($v_0);
        $v_0.style.visibility = "visible";
        this.$2L_1 = true;
        return true
    },
    $G2_1: function($p0) {
        if ($p0 !== this.$29_1) return;
        if (!this.$2L_1) throw Error.create("Cannot end modal mode because the Ribbon is not in Modal Mode");
        Array.removeAt(this.$2y_1, this.$2y_1.length - 1);
        this.$29_1 = null;
        if (this.$2y_1.length > 0) this.$29_1 = this.$2y_1[this.$2y_1.length - 1];
        CUI.ScriptUtility.isNullOrUndefined(this.$29_1) && this.$G4_1()
    },
    $G4_1: function() {
        if (!this.$2L_1) return;
        if (!this.$2y_1.length) {
            document.body.removeChild(this.get_$Dj_1());
            this.$2L_1 = false;
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                $clearHandlers(this.$1Q_1);
                this.$1Q_1 = null
            }
        }
    },
    get_$Dj_1: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1Q_1)) {
            this.$1Q_1 = CUI.Utility.$5("div");
            if (Sys.Browser.agent === Sys.Browser.InternetExplorer) this.$1Q_1.className = "ms-cui-modalDiv-ie";
            else this.$1Q_1.className = "ms-cui-modalDiv-ff";
            CUI.Utility.$35(this.$1Q_1, true, false);
            $addHandler(this.$1Q_1, "click", this.$$d_$IM_1);
            $addHandler(this.$1Q_1, "mouseover", this.$$d_$IO_1);
            $addHandler(this.$1Q_1, "mouseout", this.$$d_$IN_1);
            $addHandler(this.$1Q_1, "contextmenu", this.$$d_$IK_1)
        }
        return this.$1Q_1
    },
    $8T_1: null,
    $2N_1: null,
    $8W_1: null,
    $IK_1: function($p0) { this.$29_1.onModalContextMenu($p0) },
    $IM_1: function($p0) { this.$29_1.onModalBodyClick($p0) },
    $IO_1: function($p0) { this.$29_1.onModalBodyMouseOver($p0) },
    $IN_1: function($p0) { !CUI.ScriptUtility.isNullOrUndefined(this.$29_1) && this.$29_1.onModalBodyMouseOut($p0) },
    $IL_1: function($p0) {
        if (!this.$2L_1) return;
        this.$29_1.onModalKeyPress($p0)
    },
    onWindowScroll: function(evt) {
        this.$69_1();
        this.$46_1()
    },
    $Gf_1: function() { this.$CY_1() },
    $BH_1: function($p0) { this.dispose() },
    dispose: function() {
        this.$7s_1 = true;
        !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) &&
            this.$Bn_1 &&
            $removeHandler(this.get_$3_0(), "contextmenu", CUI.Utility.get_returnFalseHandler());
        try {
            $removeHandler(document, "keydown", this.$8T_1)
        } catch ($$e_0) {
        }
        try {
            $removeHandler(window, "scroll", this.$8W_1)
        } catch ($$e_1) {
        }
        $removeHandler(window, "unload", this.$2N_1);
        !CUI.ScriptUtility.isNullOrUndefined(this.$1Q_1) && $clearHandlers(this.$1Q_1);
        this.$1Q_1 = null;
        this.$2g_1 = null;
        this.$3e_1 = null;
        this.$7_1 = null;
        CUI.Component.prototype.dispose.call(this)
    },
    $7s_1: false,
    get_$CV_1: function() { return this.$7s_1 },
    set_$CV_1: function($p0) {
        this.$7s_1 = $p0;
        return $p0
    },
    get_componentWidth: function() {
        if (this
            ._componentWidth ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentWidth = this.get_$3_0().offsetWidth;
        return this._componentWidth
    },
    get_$FY_0: function() {
        if (this
            ._componentHeight ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) this._componentHeight = this.get_$3_0().offsetHeight;
        return this._componentHeight
    },
    get_$CG_0: function() {
        if (this
            ._componentTopPosition ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentTopPosition = CUI.UIUtility.calculateOffsetTop(this.get_$3_0());
        return this._componentTopPosition
    },
    get_componentLeftPosition: function() {
        if (this
            ._componentLeftPosition ===
            -1 &&
            !CUI.ScriptUtility.isNullOrUndefined(this
                .get_$3_0())) this._componentLeftPosition = CUI.UIUtility.calculateOffsetLeft(this.get_$3_0());
        return this._componentLeftPosition
    },
    $6e_1: "",
    get_cookieDataVersion: function() { return this.$6e_1 },
    set_cookieDataVersion: function(value) {
        this.$6e_1 = value;
        return value
    },
    $7G_1: false,
    get_useDataCookie: function() { return this.$7G_1 },
    set_useDataCookie: function(value) {
        this.$7G_1 = false;
        return value
    },
    storeDataCookie: function(name, value) {
        var $v_0 = new Date;
        $v_0.setTime($v_0.getTime() + 6.048e8);
        document.cookie = name + "=" + this.$6e_1 + value + "; expires=" + $v_0.toDateString() + "; path=/"
    },
    getDataCookieValue: function(name) {
        name = this.$6e_1 + name;
        for (var $v_0 = document.cookie.split(";"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1].trimStart();
            if ($v_2.startsWith(name))
                if ($v_2.startsWith(name + "=")) return $v_2.substring(name.length + 1, $v_2.length)
        }
        return null
    },
    $7_1: null,
    $3n_1: false,
    $Il_1: function($p0, $p1) { this.$Eh_1($p0, $p1, false) },
    $Im_1: function($p0, $p1) { this.$Eh_1($p0, $p1, true) },
    $Eh_1: function($p0, $p1, $p2) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) return;
        $p0.style.top = "0px";
        $p0.style.left = "0px";
        var $v_0 = this.$Aw_1($p0, $p1);
        this.$Ba_1($p0, $v_0, $p2)
    },
    $Ba_1: function($p0, $p1, $p2) {
        var $v_0 = false;
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) return;
        var $v_1,
            $v_2,
            $v_3 = CUI.Root.$1q($p1, "launcherLeft"),
            $v_4 = CUI.Root.$1q($p1, "launcherTop"),
            $v_5 = CUI.Root.$1q($p1, "launcherWidth"),
            $v_6 = CUI.Root.$1q($p1, "launcherHeight"),
            $v_7 = CUI.Root.$1q($p1, "flyOutWidth"),
            $v_8 = CUI.Root.$1q($p1, "flyOutHeight"),
            $v_9 = CUI.Root.$1q($p1, "flyOutRealHeight"),
            $v_A = CUI.Root.$1q($p1, "viewportWidth"),
            $v_B = CUI.Root.$1q($p1, "viewportHeight"),
            $v_C = CUI.Root.$1q($p1, "viewableLeft"),
            $v_D = CUI.Root.$1q($p1, "viewableTop"),
            $v_E = !this.$0_0._textDirection,
            $v_F = false,
            $v_G = false,
            $v_H = $p0.getAttribute("mscui:scrollable"),
            $v_I = !CUI.ScriptUtility.isNullOrUndefined($v_H) && $v_H === "true";
        if ($p2) {
            if ($v_E) {
                $v_1 = $v_3 + $v_5;
                $v_1 += 2
            } else $v_1 = $v_3 - $v_7;
            $v_2 = $v_4
        } else {
            if ($v_E) $v_1 = $v_3;
            else $v_1 = $v_3 + $v_5 - $v_7;
            $v_2 = $v_4 + $v_6;
            var $v_J = $v_5 >= 2 ? $v_5 - 2 : $v_5;
            if ($v_J > $v_7) $v_7 = $v_J;
            $p0.style.minWidth = $v_J + "px"
        }
        if (this.$3n_1) {
            $v_2 += $v_D;
            $v_1 += $v_C
        }
        $p0.style.top = $v_2 + "px";
        $p0.style.left = $v_1 + "px";
        if ($v_7 <= $v_A)
            if ($v_1 + $v_7 > $v_C + $v_A) {
                if ($p2 && $v_E && $v_3 - $v_7 > $v_C) $v_1 = $v_3 - $v_7;
                else {
                    $v_1 = $v_C + $v_A - $v_7 - 5;
                    $v_F = true
                }
                $v_0 = true
            } else if ($v_1 < $v_C) {
                if ($p2 && !$v_E && $v_3 + $v_5 + $v_7 < $v_C + $v_A) $v_1 = $v_3 + $v_5;
                else {
                    $v_1 = $v_C + 5;
                    $v_G = true
                }
                $v_0 = true
            } else $v_0 = false;
        else if ($v_E) {
            $v_1 = $v_C;
            $v_0 = true
        } else {
            $v_1 = $v_C + $v_A - $v_7;
            $v_0 = true
        }
        if ($v_0) {
            $p0.style.left = $v_1 + "px";
            $v_0 = false
        }
        if ($v_2 + $v_9 > $v_D + $v_B) {
            var $v_K = $v_2, $v_L = $v_D + $v_B - $v_2;
            $v_2 = $v_4 - $v_9;
            if (this.$3n_1) $v_2 += $v_D;
            var $v_M = $v_4;
            if (!this.$3n_1) $v_M -= $v_D;
            $v_0 = true;
            if ($v_M < $v_9) {
                var $v_N = $v_7 + 22;
                if ($v_M < $v_L) {
                    $v_2 = $v_K;
                    $p0.style.maxHeight = $v_L - 5 + "px";
                    if (!$v_I) {
                        $p0.style.overflowY = "scroll";
                        $p0.style.width = $v_N + "px"
                    }
                    if ($v_F && $v_E) {
                        $v_1 -= 27;
                        $p0.style.left = $v_1 + "px"
                    } else if ($v_G && !$v_E) {
                        $v_1 += 27;
                        $p0.style.left = $v_1 + "px"
                    }
                    $v_0 = false
                } else {
                    $p0.style.maxHeight = $v_M - 5 + "px";
                    if (!$v_I) {
                        $p0.style.overflowY = "scroll";
                        $p0.style.width = $v_N + "px"
                    }
                    if ($v_F && $v_E) {
                        $v_1 -= 27;
                        $p0.style.left = $v_1 + "px"
                    } else if ($v_G && !$v_E) {
                        $v_1 += 27;
                        $p0.style.left = $v_1 + "px"
                    }
                }
                !$v_I && $p0.setAttribute("mscui:scrollable", "true")
            } else if ($v_I) {
                $p0.style.maxHeight = "none";
                $p0.style.overflowY = "visible";
                $p0.style.width = "auto";
                $p0.setAttribute("mscui:scrollable", "false")
            }
        } else {
            if ($v_I) {
                $p0.style.maxHeight = "none";
                $p0.style.overflowY = "visible";
                $p0.style.width = "auto";
                $p0.setAttribute("mscui:scrollable", "false")
            }
            $v_0 = false
        }
        if ($v_0) {
            $p0.style.top = $v_2 + "px";
            $v_0 = false
        }
    },
    $Aw_1: function($p0, $p1) {
        var $v_0 = {};
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined($p1)) return $v_0;
        $v_0["launcherWidth"] = $p1.offsetWidth;
        $v_0["launcherHeight"] = $p1.offsetHeight;
        var $v_1 = $p1.offsetTop, $v_2 = $p1.offsetLeft;
        if (!CUI.ScriptUtility.isNullOrUndefined($p1.offsetParent))
            for (var $v_3 = $p1.offsetParent; !CUI.ScriptUtility.isNullOrUndefined($v_3); $v_3 = $v_3.offsetParent) {
                $v_1 += $v_3.offsetTop;
                $v_2 += $v_3.offsetLeft
            }
        else {
            $v_1 = $p1.offsetTop;
            $v_2 = $p1.offsetLeft
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($p1.parentNode)) {
            for (var $v_4 = 0, $v_5 = 0, $v_6 = $p1.parentNode;
                !CUI.ScriptUtility.isNullOrUndefined($v_6);
                $v_6 = $v_6.parentNode) {
                if ($v_6.scrollTop > 0) $v_4 += $v_6.scrollTop;
                if ($v_6.scrollLeft > 0)
                    if ($v_6 === document.documentElement &&
                        (CUI.Utility.$58() || CUI.Utility.get_$99()) &&
                        this.$0_0._textDirection === 1) $v_5 += document.body.scrollLeft;
                    else $v_5 += $v_6.scrollLeft
            }
            if ($v_1 >= $v_4) $v_1 -= $v_4;
            if ($v_2 >= $v_5) $v_2 -= $v_5
        }
        $v_0["launcherTop"] = $v_1;
        $v_0["launcherLeft"] = $v_2;
        if ($p0) {
            $v_0["flyOutWidth"] = $p0.offsetWidth;
            $v_0["flyOutHeight"] = $p0.offsetHeight;
            $v_0["flyOutRealHeight"] = $p0.scrollHeight;
            $v_0["viewportWidth"] = CUI.Utility.$55();
            $v_0["viewportHeight"] = CUI.Utility.$6J();
            if (CUI.ScriptUtility.isNullOrUndefined($v_0["viewportWidth"])) {
                $v_0["viewportWidth"] = document.documentElement.clientWidth;
                $v_0["viewportHeight"] = document.documentElement.clientHeight
            }
            if (CUI.ScriptUtility.isNullOrUndefined($v_0["viewportWidth"])) {
                $v_0["viewportWidth"] = document.body.clientWidth;
                $v_0["viewportHeight"] = document.body.clientHeight
            }
            $v_0["viewableTop"] = document.documentElement.scrollTop;
            $v_0["viewableLeft"] = document.documentElement.scrollLeft;
            if (CUI.ScriptUtility.isNullOrUndefined($v_0["viewableTop"])) {
                $v_0["viewableTop"] = window.pageYOffset;
                $v_0["viewableLeft"] = window.pageXOffset
            }
            if (CUI.ScriptUtility.isNullOrUndefined($v_0["viewableTop"])) {
                $v_0["viewableTop"] = document.body.scrollTop;
                $v_0["viewableLeft"] = document.body.scrollLeft
            }
            if ((CUI.Utility
                    .$58() ||
                    CUI.Utility.get_$99()) &&
                this.$0_0._textDirection === 1) $v_0["viewableLeft"] = document.body.scrollLeft
        }
        return $v_0
    }
};
CUI.ButtonDock = function($p0, $p1, $p2) {
    CUI.ButtonDock.initializeBase(this, [$p0, $p1, "", ""]);
    this.$1V_1 = $p2.Alignment
};
CUI.ButtonDock.prototype = {
    $1V_1: null,
    $2W_0: function() {
        this.ensureDOMElementAndEmpty();
        this.appendChildrenToElement(this.get_$3_0());
        CUI.Component.prototype.$2W_0.call(this)
    },
    appendChildrenToElement: function($p0) {
        var $$enum_2 = this.$8_0.getEnumerator();
        while ($$enum_2.moveNext()) {
            var $v_0 = $$enum_2.get_current();
            $v_0.$2U_0();
            switch (this.$1V_1) {
            case "Left":
                CUI.Utility.ensureCSSClassOnElement($v_0.get_$3_0(), "ms-cui-toolbar-button-left");
                break;
            case "Center":
                CUI.Utility.ensureCSSClassOnElement($v_0.get_$3_0(), "ms-cui-toolbar-button-center");
                break;
            case "Right":
                CUI.Utility.ensureCSSClassOnElement($v_0.get_$3_0(), "ms-cui-toolbar-button-right");
                break;
            default:
                throw Error.argumentOutOfRange(this.$1V_1)
            }
            $p0.appendChild($v_0.get_$3_0());
            $v_0.$3V_0()
        }
    },
    ensureCorrectChildType: function($p0) {
        if (!CUI.ControlComponent.isInstanceOfType($p0))
            throw Error.create("Only children of type ControlComponent can be added to a ButtonDock.")
    },
    get_cssClass: function() {
        switch (this.$1V_1) {
        case "Left":
            return "ms-cui-toolbar-buttondock alignleft";
        case "Center":
            return "ms-cui-toolbar-buttondock aligncenter";
        case "Right":
            return "ms-cui-toolbar-buttondock alignright";
        default:
            throw Error.argumentOutOfRange(this.$1V_1)
        }
    },
    get_visibleInDOM: function() { return true },
    get_alignment: function() { return this.$1V_1 }
};
CUI.Toolbar = function(id, properties, builder, hasJewel) {
    CUI.Toolbar.initializeBase(this, [id, properties]);
    this.$3e_2 = builder;
    this.$5c_2 = hasJewel
};
CUI.Toolbar.prototype = {
    $5a_2: null,
    $l_2: null,
    $m_2: null,
    $x_2: null,
    $11_2: null,
    $12_2: null,
    $3e_2: null,
    $5c_2: false,
    _jewel: null,
    get_jewel: function() { return this._jewel },
    set_jewel: function(value) {
        this._jewel = value;
        return value
    },
    refresh: function() {
        this.$2W_0();
        CUI.Root.prototype.$2W_0.call(this)
    },
    $2W_0: function() {
        var $v_0 = this.$7_1, $v_1 = !CUI.ScriptUtility.isNullOrUndefined($v_0.Size) || $v_0.Size === "TwoRow";
        CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0()) && this.createToolbarStructure($v_1);
        this.set_$3_0(CUI.Utility.removeChildNodes(this.get_$3_0()));
        if ($v_1) {
            this.get_$3_0().appendChild(this.$5a_2);
            this.appendChildrenToElement(this.$m_2)
        } else {
            this.$5c_2 && this.get_$3_0().appendChild(this.$x_2);
            this.appendChildrenToElement(this.get_$3_0())
        }
        this.$o_0 = false
    },
    createToolbarStructure: function(twoRow) {
        if (this.$5c_2) {
            this.$x_2 = CUI.Utility.$5("div");
            this.$x_2.id = "jewelcontainer";
            this.$x_2.className = "ms-cui-jewel-container";
            this.$x_2.style.display = "none"
        }
        if (twoRow) {
            this.$l_2 = CUI.Utility.$5("div");
            this.$l_2.className = "ms-cui-topBar1";
            this.$l_2.style.display = "none";
            this.$m_2 = CUI.Utility.$5("div");
            this.$m_2.className = "ms-cui-topBar2";
            this.$5c_2 && this.$m_2.appendChild(this.$x_2);
            this.$5a_2 = CUI.Utility.$5("div");
            this.$5a_2.className = "ms-cui-ribbonTopBars";
            this.$5a_2.appendChild(this.$l_2);
            this.$5a_2.appendChild(this.$m_2);
            this.$11_2 = $get(this.$37_1 + "-QATRowCenter");
            this.$12_2 = $get(this.$37_1 + "-QATRowRight");
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$11_2)) {
                this.$11_2.parentNode.removeChild(this.$11_2);
                this.$l_2.appendChild(this.$11_2);
                this.$11_2.style.display = "inline-block";
                this.$l_2.style.display = "block";
                CUI.Utility.$35(this.$11_2, true, false)
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$12_2)) {
                this.$12_2.parentNode.removeChild(this.$12_2);
                this.$l_2.appendChild(this.$12_2);
                this.$12_2.style.display = "inline-block";
                this.$l_2.style.display = "block";
                CUI.Utility.$35(this.$12_2, true, false)
            }
        }
        this.$2U_0()
    },
    $6P_0: function() {
        this._jewel && this._jewel.pollForStateAndUpdate();
        CUI.Root.prototype.$6P_0.call(this)
    },
    ensureGlobalDisablingRemoved: function() {
        CUI.Root.prototype.ensureGlobalDisablingRemoved.call(this);
        this._jewel && this._jewel.set_enabled(true)
    },
    ensureCorrectChildType: function(child) {
        if (!CUI.ButtonDock.isInstanceOfType(child))
            throw Error.create("Only children of type ButtonDock can be added to a Toolbar");
        var $v_0 = child;
        if ($v_0.$1V_1 === "Center") {
            var $$enum_3 = this.$8_0.getEnumerator();
            while ($$enum_3.moveNext()) {
                var $v_1 = $$enum_3.get_current();
                if ($v_1.$1V_1 === "Center")
                    throw Error.create("Can't add a centered buttondock because one is already present.")
            }
        }
    },
    get_cssClass: function() { return "ms-cui-toolbar-toolbar " + CUI.Root.prototype.get_cssClass.call(this) },
    get_domElementTagName: function() { return "div" },
    get_rootType: function() { return "Toolbar" },
    set_$JZ_2: function($p0) {
        this.set_$25_1($p0);
        return $p0
    },
    $Fe_2: function($p0, $p1) {
        var $v_0 = $p0.attrs, $v_1 = new CUI.ButtonDock(this.$0_0, $v_0.Id, $v_0);
        return $v_1
    },
    $Ev_2: function($p0) {
        if (!this.$5c_2) return;
        this.$x_2.style.display = "block";
        var $v_0 = new CUI.DataNodeWrapper($p0), $v_1 = new CUI.JewelBuildContext;
        $v_1.jewelId = $v_0.get_attributes()["Id"];
        var $v_2 = new CUI.JewelBuildOptions;
        $v_2.trimmedIds = this.$3e_2.$16_0.trimmedIds;
        var $v_3 = new CUI.JewelBuilder($v_2, this.$x_2, this.$3e_2.$1l_0);
        $v_3.$FB_1($p0, $v_1);
        this._jewel = $v_3.get_jewel()
    },
    $2U_0: function() {
        CUI.Root.prototype.$2U_0.call(this);
        this.get_$3_0().setAttribute("role", "toolbar")
    },
    setFocusOnJewel: function() { this._jewel && this._jewel.$Gg_2() }
};
CUI.ToolbarBuildContext = function() { CUI.ToolbarBuildContext.initializeBase(this) };
CUI.ToolbarBuildContext.prototype = { toolbar: null };
CUI.ToolbarBuildOptions = function() { CUI.ToolbarBuildOptions.initializeBase(this) };
CUI.ToolbarBuilder = function(options, elmPlaceholder, rootBuildClient) {
    this.$$d_$IV_1 = Function.createDelegate(this, this.$IV_1);
    CUI.ToolbarBuilder.initializeBase(this, [options, elmPlaceholder, rootBuildClient]);
    if (CUI.ScriptUtility
        .isNullOrUndefined(elmPlaceholder)) throw Error.create("Toolbar placeholder DOM element is null or undefined.")
};
CUI.ToolbarBuilder.prototype = {
    get_toolbar: function() { return this.$0_0 },
    set_toolbar: function(value) {
        this.$0_0 = value;
        return value
    },
    buildToolbar: function() {
        var $v_0 = new CUI.ToolbarBuildContext, $v_1 = new CUI.DataQuery;
        $v_1.id = "toolbar";
        $v_1.queryType = 1;
        $v_1.handler = this.$$d_$IV_1;
        $v_1.data = $v_0;
        this.$10_0.runQuery($v_1)
    },
    $IV_1: function($p0) {
        var $v_0 = $p0.contextData;
        $p0.queryData = this.applyDataExtensions($p0.queryData);
        this.set_toolbar(this.$FQ_1($p0.queryData, $v_0));
        this.get_toolbar().set_$JZ_2(this);
        this.$1l_0.onComponentCreated(this.get_toolbar(), this.get_toolbar().$6_0);
        this.get_toolbar().$2W_0();
        this._elmPlaceholder.appendChild(this.get_toolbar().get_$3_0());
        var $$enum_4 = this.get_toolbar().$8_0.getEnumerator();
        while ($$enum_4.moveNext()) {
            var $v_1 = $$enum_4.get_current();
            if ($v_1.$1V_1 === "Left") {
                var $v_2 = $get("jewelcontainer");
                if ($v_2)
                    if (!this.get_toolbar()._textDirection) $v_1.get_$3_0().style.left = $v_2.offsetWidth + "px";
                    else $v_1.get_$3_0().style.right = $v_2.offsetWidth + "px";
                break
            }
        }
        CUI.Utility.ensureCSSClassOnElement(this._elmPlaceholder, "loaded");
        this.$1l_0.onComponentBuilt(this.get_toolbar(), this.get_toolbar().$6_0)
    },
    $FQ_1: function($p0, $p1) {
        var $v_0 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Toolbar");
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) throw Error.create("No toolbar element was present in the data");
        var $v_1 = new CUI.DataNodeWrapper($v_0),
            $v_2 = null !== CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Jewel");
        this.set_toolbar(new CUI.Toolbar($v_1.get_attributes()["Id"], $v_1.get_attributes(), this, $v_2));
        this.get_toolbar().$37_1 = this.$16_0.clientID;
        this.get_toolbar().set_useDataCookie(true);
        this.get_toolbar().$2W_0();
        $v_2 && this.get_toolbar().$Ev_2($p0);
        for (var $v_3 = CUI.DataNodeWrapper.getNodeChildren(CUI.DataNodeWrapper
                     .getFirstChildNodeWithName($v_1.$b_0, "ButtonDocks")),
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            var $v_5 = this.$F1_1($v_3[$v_4], $p1);
            this.get_toolbar().addChild($v_5)
        }
        return this.get_toolbar()
    },
    $F1_1: function($p0, $p1) {
        for (var $v_0 = new CUI.DataNodeWrapper($p0),
            $v_1 = this.get_toolbar().$Fe_2($p0, $p1),
            $v_2 = CUI.DataNodeWrapper.getFirstChildNodeWithName($p0, "Controls"),
            $v_3 = CUI.DataNodeWrapper.getNodeChildren($v_2),
            $v_4 = 0;
            $v_4 < $v_3.length;
            $v_4++) {
            if (this.isNodeTrimmed($v_3[$v_4])) continue;
            var $v_5 = this.$FP_1($v_3[$v_4], $p1);
            $v_1.addChild($v_5)
        }
        return $v_1
    },
    $FP_1: function($p0, $p1) {
        var $v_0 = null,
            $v_1 = new CUI.DataNodeWrapper($p0),
            $v_2 = $v_1.get_name(),
            $v_3 = $v_1.get_attributes()["DisplayMode"];
        switch ($v_2) {
        case "Button":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Small" : $v_3);
        case "CheckBox":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Small" : $v_3);
        case "ComboBox":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode("Medium");
        case "FlyoutAnchor":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Medium" : $v_3);
        case "Label":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Small" : $v_3);
        case "Separator":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode("Small");
        case "TextBox":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Medium" : $v_3);
        case "ToggleButton":
            $v_0 = this.$2T_0($p0, $p1);
            return $v_0.createComponentForDisplayMode(CUI.ScriptUtility.isNullOrEmptyString($v_3) ? "Small" : $v_3);
        default:
            throw Error.create("Invalid control type.")
        }
    }
};
CUI.ToolTip = function($p0, $p1, $p2, $p3, $p4) {
    this.$$d_$I5_1 = Function.createDelegate(this, this.$I5_1);
    CUI.ToolTip.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.$7_1 = $p4;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p4.ToolTipShortcutKey))
        if (!this.$0_0._textDirection)
            this.$1a_0 = String.format("{0} ({1})", this.get_title(), this.$7_1.ToolTipShortcutKey);
        else this.$1a_0 = String.format("({1}) {0}", this.get_title(), this.$7_1.ToolTipShortcutKey)
};
CUI.ToolTip.prototype = {
    $c_1: null,
    $X_1: null,
    $G_1: null,
    $1x_1: null,
    $6l_1: null,
    $5O_1: null,
    $6r_1: null,
    $3j_1: null,
    $7u_1: null,
    $5P_1: null,
    $3C_1: null,
    $5Q_1: null,
    $2q_1: null,
    $7v_1: null,
    $5R_1: null,
    $5S_1: null,
    $79_1: null,
    $7A_1: null,
    $8i_1: null,
    $8j_1: null,
    $8k_1: null,
    $7_1: null,
    $1O_1: null,
    $2W_0: function() {
        this.get_needsDelayIniting() && this.doDelayedInit();
        this.ensureDOMElementAndEmpty();
        this.get_$3_0().setAttribute("role", "tooltip");
        this.get_$3_0().setAttribute("aria-hidden", "true");
        if (CUI.ScriptUtility.isNullOrUndefined(this.$c_1)) {
            this.$c_1 = CUI.Utility.$5("div");
            this.$c_1.className = "ms-cui-tooltip-body"
        } else this.$c_1 = CUI.Utility.removeChildNodes(this.$c_1);
        this.get_$3_0().appendChild(this.$c_1);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$X_1)) {
            this.$X_1 = CUI.Utility.$5("div");
            this.$X_1.className = "ms-cui-tooltip-glow";
            this.$c_1.appendChild(this.$X_1)
        } else this.$X_1 = CUI.Utility.removeChildNodes(this.$X_1);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$G_1)) {
            this.$G_1 = CUI.Utility.$5("h1");
            if (this.$1a_0.length > 100) CUI.UIUtility.setInnerText(this.$G_1, this.$1a_0.substr(0, 100));
            else CUI.UIUtility.setInnerText(this.$G_1, this.get_title());
            this.$X_1.appendChild(this.$G_1)
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6l_1) &&
            !CUI.ScriptUtility.isNullOrEmptyString(this.$7_1.ToolTipImage32by32)) {
            this.$6l_1 = CUI.Utility.$5("img");
            this.$5O_1 = CUI.Utility.$w(2,
                4,
                this.$7_1.ToolTipImage32by32,
                this.$7_1.ToolTipImage32by32Class,
                this.$6l_1,
                true,
                false,
                this.$7_1.ToolTipImage32by32Top,
                this.$7_1.ToolTipImage32by32Left);
            this.$5O_1.className = this.$5O_1.className + " ms-cui-tooltip-bitmap ";
            this.$X_1.appendChild(this.$5O_1)
        }
        var $v_0 = this.$7_1.ToolTipSelectedItemTitle, $v_1 = this.$4S_0;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$1x_1) &&
            (!CUI.ScriptUtility.isNullOrEmptyString($v_1) || !CUI.ScriptUtility.isNullOrEmptyString($v_0))) {
            this.$1x_1 = CUI.Utility.$5("div");
            this.$1x_1.className = "ms-cui-tooltip-description";
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$7_1.ToolTipImage32by32)) this.$1x_1.style.width = "80%";
            this.$X_1.appendChild(this.$1x_1);
            var $v_2 = this.$0_0.$7_1.ToolTipSelectedItemTitlePrefix;
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_0) && !CUI.ScriptUtility.isNullOrEmptyString($v_2)) {
                var $v_3 = String.format($v_2, $v_0);
                this.$6r_1 = CUI.Utility.$5("p");
                CUI.Utility.$4I(this.$6r_1, $v_3);
                this.$1x_1.appendChild(this.$6r_1);
                this.$8k_1 = CUI.Utility.$5("br");
                this.$1x_1.appendChild(this.$8k_1)
            }
            if (!CUI.ScriptUtility.isNullOrEmptyString($v_1))
                if ($v_1.length > 512)
                    this.$1x_1.innerHTML = this.$1x_1.innerHTML + CUI.Utility.$DT($v_1.substr(0, 512), true);
                else this.$1x_1.innerHTML = this.$1x_1.innerHTML + CUI.Utility.$DT($v_1, true)
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3j_1) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.$1O_1) &&
            !CUI.ScriptUtility.isNullOrEmptyString(this.$1O_1.Title)) {
            this.$79_1 = CUI.Utility.$5("div");
            this.$79_1.className = "ms-cui-tooltip-clear";
            this.$X_1.appendChild(this.$79_1);
            this.$8i_1 = CUI.Utility.$5("hr");
            this.$X_1.appendChild(this.$8i_1);
            this.$3C_1 = CUI.Utility.$5("div");
            this.$3C_1.className = "ms-cui-tooltip-footer";
            this.$X_1.appendChild(this.$3C_1);
            this.$5Q_1 = CUI.Utility.$5("div");
            CUI.Utility.$4I(this.$5Q_1, this.$1O_1.Title);
            this.$7u_1 = CUI.Utility.$5("img");
            this.$5P_1 = CUI.Utility.$w(2,
                3,
                this.$1O_1.Icon,
                this.$1O_1.IconClass,
                this.$7u_1,
                true,
                false,
                this.$1O_1.IconTop,
                this.$1O_1.IconLeft);
            this.$5P_1.style.verticalAlign = "top";
            if (!this.$0_0._textDirection) {
                this.$3C_1.appendChild(this.$5P_1);
                this.$3C_1.appendChild(this.$5Q_1)
            } else {
                this.$3C_1.appendChild(this.$5Q_1);
                this.$3C_1.appendChild(this.$5P_1)
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.$1O_1.Description)) {
                this.$3j_1 = CUI.Utility.$5("div");
                this.$3j_1.className = "ms-cui-tooltip-description";
                this.$3j_1.style.width = "90%";
                CUI.Utility.$4I(this.$3j_1, this.$1O_1.Description);
                this.$X_1.appendChild(this.$3j_1)
            }
        }
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2q_1) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$7_1.ToolTipFooterImage16by16) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$7_1.ToolTipFooterText) &&
            (!CUI.ScriptUtility.isNullOrUndefined(this.$1O_1) &&
                !CUI.ScriptUtility.isNullOrEmptyString(this.$1O_1.HelpKeyWord) ||
                !CUI.ScriptUtility.isNullOrEmptyString(this.$7_1.ToolTipHelpKeyWord))) {
            this.$7A_1 = CUI.Utility.$5("div");
            this.$7A_1.className = "ms-cui-tooltip-clear";
            this.$X_1.appendChild(this.$7A_1);
            this.$8j_1 = CUI.Utility.$5("hr");
            this.$X_1.appendChild(this.$8j_1);
            this.$2q_1 = CUI.Utility.$5("div");
            this.$2q_1.className = "ms-cui-tooltip-footer";
            this.$X_1.appendChild(this.$2q_1);
            this.$5S_1 = CUI.Utility.$5("div");
            CUI.Utility.$4I(this.$5S_1, this.$0_0.$7_1.ToolTipFooterText);
            this.$7v_1 = CUI.Utility.$5("img");
            this.$5R_1 = CUI.Utility.$w(2,
                3,
                this.$0_0.$7_1.ToolTipFooterImage16by16,
                this.$0_0.$7_1.ToolTipFooterImage16by16Class,
                this.$7v_1,
                true,
                false,
                this.$0_0.$7_1.ToolTipFooterImage16by16Top,
                this.$0_0.$7_1.ToolTipFooterImage16by16Left);
            this.$5R_1.style.verticalAlign = "top";
            if (!this.$0_0._textDirection) {
                this.$2q_1.appendChild(this.$5R_1);
                this.$2q_1.appendChild(this.$5S_1)
            } else {
                this.$2q_1.appendChild(this.$5S_1);
                this.$2q_1.appendChild(this.$5R_1)
            }
        }
        this.appendChildrenToElement(this.$c_1);
        CUI.Component.prototype.$2W_0.call(this)
    },
    $Fx_1: function() {
        this.$2W_0();
        this.get_$3_0().style.visibility = "hidden";
        this.get_$3_0().style.position = "absolute";
        this.get_$3_0().style.top = "0px";
        this.get_$3_0().style.left = "0px";
        document.body.appendChild(this.get_$3_0());
        this.$In_1();
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            CUI.Utility.$E1(this.$0_0.get_$9S_1(), this.get_$3_0());
            this.$0_0.get_$9S_1().style.visibility = "visible";
            this.$0_0.get_$9S_1().style.border = "none"
        }
        this.get_$3_0().style.visibility = "visible";
        this.set_visible(true);
        this.get_$3_0().setAttribute("aria-hidden", "false");
        return true
    },
    $DP_1: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$3_0())) {
            this.get_$3_0().style.visibility = "hidden";
            this.get_$3_0().setAttribute("aria-hidden", "true")
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) this.$0_0.get_$9S_1().style.visibility = "hidden";
        this.set_visible(false)
    },
    get_cssClass: function() { return "ms-cui-tooltip" },
    get_innerDiv: function() { return this.$X_1 },
    set_innerDiv: function($p0) {
        this.$X_1 = $p0;
        return $p0
    },
    $In_1: function() {
        var $v_0 = this.get_$3_0(), $v_1 = this.$U_0.get_$3_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0) || CUI.ScriptUtility.isNullOrUndefined($v_1)) return;
        $v_0.style.top = "0px";
        $v_0.style.left = "0px";
        var $v_2 = this.$0_0.$Aw_1($v_0, $v_1), $v_3 = CUI.Root.$1q($v_2, "flyOutWidth");
        if (this.$U_0.get_$CG_0() > this.$0_0.get_$CG_0() &&
            this.$U_0.get_$CG_0() + this.$U_0.get_$FY_0() < this.$0_0.get_$CG_0() + this.$0_0.get_$FY_0()) {
            $v_2["launcherTop"] = this.$0_0.get_$CG_0();
            $v_2["launcherHeight"] = this.$0_0.get_$FY_0()
        } else {
            var $v_4 = CUI.Root.$1q($v_2, "launcherLeft"), $v_5 = CUI.Root.$1q($v_2, "launcherTop");
            $v_4 += 30;
            $v_5 += 10;
            $v_2["launcherLeft"] = $v_4;
            $v_2["launcherTop"] = $v_5
        }
        this.$0_0.$Ba_1($v_0, $v_2, false);
        $v_0.style.minWidth = $v_3 + "px"
    },
    $I5_1: function($p0) { this.$0_0 && this.$0_0.$46_1() },
    $Dp_1: function($p0) {
        if ($p0)
            if ($p0.rawEvent) {
                var $v_0 = 113, $v_1 = 123;
                if ($p0.rawEvent.keyCode === $v_0 || $p0.rawEvent.keyCode === $v_1) {
                    var $v_2 = null;
                    if (!CUI.ScriptUtility
                        .isNullOrUndefined(this.$7_1.ToolTipHelpKeyWord)) $v_2 = this.$7_1.ToolTipHelpKeyWord;
                    if (!CUI.ScriptUtility.isNullOrUndefined(this.$1O_1) &&
                        !CUI.ScriptUtility.isNullOrEmptyString(this.$1O_1.HelpKeyWord)) $v_2 = this.$1O_1.HelpKeyWord;
                    if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) {
                        var $v_3 = {};
                        $v_3["HelpKeyword"] = $v_2;
                        !CUI.ScriptUtility.isNullOrUndefined(this.$0_0.$7_1.ToolTipHelpCommand) &&
                            this.raiseCommandEvent(this.$0_0.$7_1.ToolTipHelpCommand, 1, $v_3)
                    }
                    $p0.preventDefault();
                    $p0.stopPropagation();
                    $p0.rawEvent.cancelBubble = true;
                    $p0.rawEvent.returnValue = false
                } else this.$0_0.$46_1()
            }
    },
    dispose: function() {
        CUI.Component.prototype.dispose.call(this);
        this.$c_1 = null;
        this.$1x_1 = null;
        this.$6l_1 = null;
        this.$5O_1 = null;
        this.$3j_1 = null;
        this.$7u_1 = null;
        this.$5P_1 = null;
        this.$3C_1 = null;
        this.$5Q_1 = null;
        this.$2q_1 = null;
        this.$7v_1 = null;
        this.$5R_1 = null;
        this.$5S_1 = null;
        this.$X_1 = null;
        this.$G_1 = null;
        this.$6r_1 = null;
        this.$79_1 = null;
        this.$7A_1 = null;
        this.$8i_1 = null;
        this.$8j_1 = null;
        this.$8k_1 = null;
        this.$7_1 = null
    }
};
CUI.Unit = function($p0, $p1, $p2, $p3, $p4, $p5) {
    this.$3t_0 = $p0;
    this.$6Y_0 = $p1;
    this.$3N_0 = $p2;
    this.$3M_0 = $p3;
    this.$6h_0 = $p4;
    this.$64_0 = $p5
};
CUI.Unit.prototype = {
    $3t_0: null,
    $6Y_0: null,
    $3N_0: 0,
    $3M_0: 0,
    $6h_0: 0,
    $64_0: 0,
    $6C_0: function($p0) {
        if (!$p0) return false;
        for (var $v_0 = 0;
            $v_0 < this.$6Y_0.length;
            $v_0++
        ) if (this.$6Y_0[$v_0].toLowerCase() === $p0.toLowerCase()) return true;
        return false
    },
    $Ej_0: function($p0) {
        if (typeof $p0 !== "number") return -1;
        if ($p0 < this.$3N_0) return 2;
        if ($p0 > this.$3M_0) return 3;
        var $v_0 = $p0.toString(), $v_1 = $v_0.indexOf(".");
        if ($v_1 > -1) {
            var $v_2 = $v_0.substr($v_1 + 1);
            if ($v_2.length > this.$6h_0) return 1
        }
        return 0
    },
    get_$3U_0: function() { return this.$6Y_0[0] }
};
CUI.Utility = function() {};
CUI.Utility.removeChildNodes = function($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return null;
    var $v_0 = $p0.parentNode;
    if ($v_0) {
        var $v_1 = $p0.cloneNode(false);
        $v_0.replaceChild($v_1, $p0);
        return $v_1
    } else {
        var $v_2 = $p0.firstChild, $v_3;
        while ($v_2) {
            $v_3 = $v_2.nextSibling;
            $p0.removeChild($v_2);
            $v_2 = $v_3
        }
        return $p0
    }
};
CUI.Utility.removeChildNodesSlow = function($p0) { while ($p0.hasChildNodes()) $p0.removeChild($p0.firstChild) };
CUI.Utility.ensureCSSClassOnElement = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return;
    var $v_0 = $p0.className;
    if (!CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0.indexOf($p1) !== -1) return;
    var $v_1 = $v_0.trim() + " " + $p1;
    $v_1 = $v_1.trim();
    $p0.className = $v_1
};
CUI.Utility.isDescendantOf = function($p0, $p1) {
    while (!CUI.ScriptUtility.isNullOrUndefined($p1)) {
        try {
            if ($p1.nodeName.toLowerCase() === "body") break
        } catch ($$e_2) {
            if ($p1 === $p0) return true;
            break
        }
        if ($p1 === $p0) return true;
        $p1 = $p1.parentNode
    }
    return false
};
CUI.Utility.removeCSSClassFromElement = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0) ||
        CUI.ScriptUtility.isNullOrUndefined($p1) ||
        CUI.ScriptUtility.isNullOrUndefined($p0.className)) return;
    var $v_0 = $p0.className;
    if ($v_0 !== $v_0.replace($p1, "")) $p0.className = $v_0.replace($p1, "")
};
CUI.Utility.setEnabledOnElement = function($p0, $p1) {
    if ($p1) CUI.Utility.enableElement($p0);
    else CUI.Utility.disableElement($p0)
};
CUI.Utility.enableElement = function($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return;
    CUI.Utility.removeCSSClassFromElement($p0, "ms-cui-disabled")
};
CUI.Utility.disableElement = function($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return;
    CUI.Utility.ensureCSSClassOnElement($p0, "ms-cui-disabled")
};
CUI.Utility.setDisabledAttribute = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return;
    $p0.disabled = $p1
};
CUI.Utility.$2k = function($p0) {
    $p0.setAttribute("href", "javascript:;");
    $p0.setAttribute("onclick", "return false;")
};
CUI.Utility.$7J = function() {
    var $v_0 = CUI.Utility.$5("a");
    $v_0.href = "javascript:;";
    $v_0.setAttribute("onclick", "return false;");
    return $v_0
};
CUI.Utility.$DB = function($p0) {
    var $v_0 = $p0, $v_1 = 0, $v_2 = 0, $v_3 = $p0.offsetWidth, $v_4 = $p0.offsetHeight;
    while (!CUI.ScriptUtility.isNullOrUndefined($v_0) &&
        !CUI.ScriptUtility.isNullOrUndefined($v_0.nodeName) &&
        $v_0.nodeName.toLowerCase() !== "body") {
        var $v_5 = $v_0.clientLeft;
        if (CUI.ScriptUtility.isNullOrUndefined($v_5)) $v_5 = 0;
        var $v_6 = $v_0.clientTop;
        if (CUI.ScriptUtility.isNullOrUndefined($v_6)) $v_6 = 0;
        $v_1 += $v_0.offsetLeft + $v_5;
        $v_2 += $v_0.offsetTop + $v_6;
        $v_0 = $v_0.offsetParent
    }
    return new Sys.UI.Bounds($v_1, $v_2, $v_3, $v_4)
};
CUI.Utility.$4I = function($p0, $p1) { CUI.UIUtility.setInnerText($p0, $p1) };
CUI.Utility.$DT = function($p0, $p1) {
    var $v_0 = new Sys.StringBuilder;
    if (CUI.ScriptUtility.isNullOrEmptyString($p0) || 0 === $p0.length) return null;
    var $v_1 = false, $v_2 = 0, $v_3 = 0, $v_4 = 0, $v_5 = $p0.length;
    while ($v_4 < $v_5) {
        var $v_6, $v_7 = $p0.charCodeAt($v_4);
        if ($v_7 < 63) $v_6 = CUI.Utility.$DS[$v_7];
        else if ($v_7 >= 160 && $v_7 <= 255) $v_6 = -2;
        else $v_6 = 0;
        if ($v_6) {
            if ($v_3 > 0) {
                $v_0.append($p0.substring($v_2, $v_2 + $v_3));
                $v_3 = 0
            }
            $v_2 = $v_4 + 1;
            if ($v_6 === -2) {
                $v_0.append("&#");
                $v_0.append($v_7.toString());
                $v_0.append(";")
            } else if ($v_6 === 8) {
                var $v_8 = $p0.charAt($v_4 + 1);
                if ($v_8 === " " || $v_1) $v_0.append(CUI.Utility.$1U[$v_6]);
                else $v_0.append(" ")
            } else {
                if ($v_6 === 2 && $p1) {
                    if ($v_4 + 5 < $v_5 &&
                        $p0.charAt($v_4 + 1) === "n" &&
                        $p0.charAt($v_4 + 2) === "b" &&
                        $p0.charAt($v_4 + 3) === "s" &&
                        $p0.charAt($v_4 + 4) === "p" &&
                        $p0.charAt($v_4 + 5) === ";") {
                        $v_0.append(CUI.Utility.$1U[8]);
                        $v_4 += 6;
                        $v_2 += 5;
                        continue
                    }
                    if ($v_4 + 5 < $v_5 &&
                        $p0.charAt($v_4 + 1) === "#" &&
                        $p0.charAt($v_4 + 2) === "1" &&
                        $p0.charAt($v_4 + 3) === "6" &&
                        $p0.charAt($v_4 + 4) === "0" &&
                        $p0.charAt($v_4 + 5) === ";") {
                        $v_0.append(CUI.Utility.$1U[8]);
                        $v_4 += 6;
                        $v_2 += 5;
                        continue
                    }
                } else if ($v_6 === 4 && $p1) {
                    var $v_9, $v_A, $v_B;
                    $v_9 = $p0.charAt($v_4 + 1);
                    if ("b" === $v_9 || "B" === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if (">" === $v_A) {
                            $v_0.append(CUI.Utility.$1U[9]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue
                        } else if ("r" === $v_A || "R" === $v_A) {
                            $v_B = $p0.charAt($v_4 + 3);
                            if (">" === $v_B) {
                                $v_0.append(CUI.Utility.$1U[7]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue
                            }
                            if ("/" === $v_B) {
                                var $v_C = $p0.charAt($v_4 + 4);
                                if ($v_C === ">") {
                                    $v_0.append(CUI.Utility.$1U[7]);
                                    $v_4 += 5;
                                    $v_2 += 4;
                                    continue
                                }
                            }
                            if (" " === $v_B) {
                                var $v_D = $p0.charAt($v_4 + 4), $v_E = $p0.charAt($v_4 + 5);
                                if ($v_D === "/" && $v_E === ">") {
                                    $v_0.append(CUI.Utility.$1U[7]);
                                    $v_4 += 6;
                                    $v_2 += 5;
                                    continue
                                }
                            }
                        }
                    } else if ("i" === $v_9 || "I" === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if (">" === $v_A) {
                            $v_0.append(CUI.Utility.$1U[10]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue
                        }
                    } else if ("p" === $v_9 || "P" === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if (">" === $v_A) {
                            $v_0.append(CUI.Utility.$1U[11]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue
                        }
                    } else if ("u" === $v_9 || "U" === $v_9) {
                        $v_A = $p0.charAt($v_4 + 2);
                        if (">" === $v_A) {
                            $v_0.append(CUI.Utility.$1U[12]);
                            $v_4 += 3;
                            $v_2 += 2;
                            continue
                        }
                    } else if ("/" === $v_9) {
                        $v_B = $p0.charAt($v_4 + 3);
                        if (">" === $v_B) {
                            $v_A = $p0.charAt($v_4 + 2);
                            if ("b" === $v_A || "B" === $v_A) {
                                $v_0.append(CUI.Utility.$1U[13]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue
                            } else if ("i" === $v_A || "I" === $v_A) {
                                $v_0.append(CUI.Utility.$1U[14]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue
                            } else if ("p" === $v_A || "P" === $v_A) {
                                $v_0.append(CUI.Utility.$1U[15]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue
                            } else if ("u" === $v_A || "U" === $v_A) {
                                $v_0.append(CUI.Utility.$1U[16]);
                                $v_4 += 4;
                                $v_2 += 3;
                                continue
                            }
                        }
                    }
                } else if ($v_6 === 7) $v_1 = true;
                else $v_1 = false;
                $v_0.append(CUI.Utility.$1U[$v_6])
            }
        } else {
            $v_1 = false;
            $v_3++
        }
        $v_4++
    }
    $v_2 < $v_5 && $v_0.append($p0.substring($v_2, $v_5));
    return $v_0.toString()
};
CUI.Utility.$35 = function($p0, $p1, $p2) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0) || $p0.nodeName === "#text") return;
    if ($p1) $p0.setAttribute("unselectable", "on");
    else $p0.setAttribute("unselectable", "off");
    if ($p2) {
        var $v_0 = $p0.firstChild;
        while ($v_0) {
            CUI.Utility.$35($v_0, $p1, true);
            $v_0 = $v_0.nextSibling
        }
    }
};
CUI.Utility.$w = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = null;
    if ($p0 === 1) $v_0 = CUI.Utility.$5("div");
    else if ($p0 === 3) $v_0 = $p6 ? CUI.Utility.$Fc() : CUI.Utility.$5("a");
    else $v_0 = $p6 ? CUI.Utility.$Fd() : CUI.Utility.$5("span");
    var $v_1 = "", $v_2 = {};
    $v_1 = CUI.Utility.$DU[$p1];
    var $v_3 = !CUI.ScriptUtility.isNullOrUndefined($p7),
        $v_4 = !CUI.ScriptUtility.isNullOrUndefined($p8),
        $v_5 = !CUI.ScriptUtility.isNullOrUndefined($p3);
    if ($p5) $v_1 += " ms-cui-img-cont-float";
    else $v_1 += " ms-cui-img-container";
    if ($v_5) $p4.className = $p3;
    $v_0.className += " " + $v_1;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p2)) {
        $v_0.appendChild($p4);
        $p4.src = $p2;
        if (Sys.Browser.agent === Sys.Browser.Safari) {
            $p4.style.top = "0px";
            $p4.style.left = "0px"
        }
        if ($v_3) $p4.style.top = $p7 + "px";
        if ($v_4) $p4.style.left = $p8 + "px"
    }
    return $v_0
};
CUI.Utility.$2V = function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
    $p0.style.display = "inline-block";
    if (!CUI.ScriptUtility.isNullOrUndefined($p2)) $p0.className = $p2;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p6)) $p0.style.height = $p6 + "px";
    if (!CUI.ScriptUtility.isNullOrEmptyString($p5)) $p0.style.width = $p5 + "px";
    if (!CUI.ScriptUtility.isNullOrEmptyString($p1)) $p0.style.backgroundImage = "url(" + $p1 + ")";
    var $v_0 = "0px", $v_1 = "0px", $v_2 = false;
    if (!CUI.ScriptUtility.isNullOrEmptyString($p4)) {
        $v_0 = $p4 + "px";
        $v_2 = true
    }
    if (!CUI.ScriptUtility.isNullOrEmptyString($p3)) {
        $v_1 = $p3 + "px";
        $v_2 = true
    }
    if ($v_2) $p0.style.backgroundPosition = $v_0 + " " + $v_1
};
CUI.Utility.$CO = function() {
    var $v_0 = CUI.Utility.$5("iframe");
    $v_0.style.position = "absolute";
    $v_0.style.visibility = "hidden";
    return $v_0
};
CUI.Utility.$CN = function() {
    var $v_0 = CUI.Utility.$5("span");
    if (Sys.Browser.agent === Sys.Browser.InternetExplorer) $v_0.className = "ms-cui-glass-ie";
    else $v_0.className = "ms-cui-glass-ff";
    return $v_0
};
CUI.Utility.$E1 = function($p0, $p1) {
    $p0.style.position = "absolute";
    $p0.style.visibility = "hidden";
    $p0.style.border = "none";
    $p0.style.left = $p1.style.left;
    $p0.style.top = $p1.style.top;
    var $v_0 = $p1.offsetWidth, $v_1 = $p1.offsetHeight;
    if (CUI.Utility.$Hl()) {
        $v_0 -= 4;
        $v_1 -= 4
    }
    $p0.style.width = $v_0.toString() + "px";
    $p0.style.height = $v_1.toString() + "px";
    $p0.style.visibility = "visible"
};
CUI.Utility.$2Y = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p1) ||
        CUI.ScriptUtility.isNullOrUndefined($p0) ||
        CUI.ScriptUtility.isNullOrUndefined($p0.ToolTipTitle)) return;
    $p1.setAttribute("aria-describedby", $p0.Id + "_ToolTip")
};
CUI.Utility.$Ck = function($p0, $p1) {
    var $v_0, $v_1 = "<br />", $v_2 = $p0.lastIndexOf("\u200b\u200b"), $v_3 = $p0.lastIndexOf(" ");
    if ($v_2 !== -1) {
        $v_0 = CUI.Utility.$57($p0.substr(0, $v_2)) + $v_1;
        if ($v_2 < $p0.length) $v_0 += CUI.Utility.$57($p0.substr($v_2 + 2))
    } else if ($v_3 !== -1) {
        $v_0 = CUI.Utility.$57($p0.substr(0, $v_3)) + $v_1;
        if ($v_3 < $p0.length) $v_0 += CUI.Utility.$57($p0.substr($v_3 + 1));
        if ($p1) $v_0 += " "
    } else if ($v_3 === -1 && $p1) $v_0 = CUI.Utility.$57($p0) + $v_1;
    else $v_0 = CUI.Utility.$57($p0);
    return $v_0
};
CUI.Utility.$57 = function($p0) {
    if (CUI.ScriptUtility.isNullOrEmptyString($p0)) return "";
    for (var $v_0 = new Sys.StringBuilder, $v_1 = $p0.length, $v_2 = 0; $v_2 < $v_1; $v_2++) {
        var $v_3 = $p0.charAt($v_2);
        switch ($v_3) {
        case "<":
            $v_0.append("&lt;");
            break;
        case ">":
            $v_0.append("&gt;");
            break;
        case "&":
            $v_0.append("&amp;");
            break;
        case '"':
            $v_0.append("&quot;");
            break;
        case "'":
            $v_0.append("&#39;");
            break;
        default:
            $v_0.append($v_3);
            break
        }
    }
    return $v_0.toString()
};
CUI.Utility.$BN = function($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return;
    $clearHandlers($p0);
    if (!CUI.ScriptUtility.isNullOrUndefined($p0
        .childNodes)) for (var $v_0 = 0; $v_0 < $p0.childNodes.length; $v_0++) CUI.Utility.$BN($p0.childNodes[$v_0])
};
CUI.Utility.$Fd = function() {
    var $v_0 = CUI.Utility.$5("span");
    $v_0.className = "ms-cui-block";
    return $v_0
};
CUI.Utility.$Fc = function() {
    var $v_0 = CUI.Utility.$5("a");
    $v_0.className = "ms-cui-block";
    return $v_0
};
CUI.Utility.$1F = function($p0) {
    if (CUI.ScriptUtility.isNullOrUndefined($p0)) return false;
    return $p0 === "True" || $p0 === "true"
};
CUI.Utility.$55 = function() {
    var $v_0 = window.innerWidth;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = document.documentElement.clientWidth;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = document.body.clientWidth;
    return $v_0
};
CUI.Utility.$6J = function() {
    var $v_0 = window.innerHeight;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = document.documentElement.clientHeight;
    if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = document.body.clientHeight;
    return $v_0
};
CUI.Utility.$93 = function($p0, $p1) {
    var $v_0 = CUI.Utility.$HA($p0, $p1, true);
    return $v_0 && $v_0.length > 0 ? $v_0[0] : null
};
CUI.Utility.$HA = function($p0, $p1, $p2) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.getElementsByClassName)) {
        var $v_0 = $p0.getElementsByClassName($p1);
        if ($p2) {
            if (CUI.ScriptUtility.isNullOrUndefined($v_0) || $v_0.length <= 1) return $v_0;
            var $v_1 = [];
            $v_1[0] = $v_0[0];
            return $v_1
        }
        return $v_0
    }
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.querySelectorAll)) {
        if ($p2) {
            var $v_2 = $p0.querySelector("." + $p1), $v_3 = [];
            if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) $v_3[0] = $v_2;
            return $v_3
        }
        return $p0.querySelectorAll("." + $p1)
    } else return CUI.Utility.$D7($p0, $p1, $p2)
};
CUI.Utility.$D7 = function($p0, $p1, $p2) {
    for (var $v_0 = [], $v_1 = 0, $v_2, $v_3 = 0; $v_3 < $p0.childNodes.length; $v_3++) {
        $v_2 = $p0.childNodes[$v_3];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2.className) && $v_2.className.indexOf($p1) >= 0) {
            $v_0[$v_1++] = $v_2;
            if ($p2) break
        }
        $v_0 = $v_0.concat(CUI.Utility.$D7($v_2, $p1, $p2));
        if ($v_0.length > 0 && $p2) break
    }
    return $v_0
};
CUI.Utility.$BV = function($p0) {
    if (!CUI.ScriptUtility.isNullOrUndefined($p0.select)) $p0.select();
    else if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
        var $v_0 = $p0.createTextRange();
        $v_0.moveStart("character", 0);
        $v_0.moveEnd("character", $p0.value.length);
        $v_0.select()
    } else $p0.setSelectionRange(0, $p0.value.length)
};
CUI.Utility.$Hk = function() {
    if (!CUI.Utility.$9u) {
        CUI.Utility.$9v = Sys.Browser.agent === Sys.Browser.InternetExplorer;
        CUI.Utility.$9u = true
    }
    return CUI.Utility.$9v
};
CUI.Utility.$58 = function() {
    if (!CUI.Utility.$9q) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer && !window.document.documentMode) CUI.Utility.$9w = true;
        CUI.Utility.$9q = true
    }
    return CUI.Utility.$9w
};
CUI.Utility.$Hl = function() {
    if (!CUI.Utility.$9r) {
        var $v_0 = window.document.documentMode;
        if (CUI.Utility.$Hk() && $v_0 && $v_0 >= 9) CUI.Utility.$9x = true;
        CUI.Utility.$9r = true
    }
    return CUI.Utility.$9x
};
CUI.Utility.get_$Hc = function() {
    if (!CUI.Utility.$9o) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            CUI.Utility.$5e = 7;
            if (Sys.Browser.version >= 8) CUI.Utility.$5e = Sys.Browser.version;
            else {
                var $v_0 = window.navigator.userAgent, $v_1 = new RegExp("Trident\\/([0-9]{1,}[\\.0-9]{0,})");
                if ($v_1.test($v_0)) {
                    var $v_2 = $v_1.exec($v_0), $v_3 = $v_2.length >= 2 ? Number.parseInvariant($v_2[1]) : 3;
                    CUI.Utility.$5e = $v_3 >= 4 ? $v_3 + 4 : 7
                } else CUI.Utility.$5e = Sys.Browser.version
            }
        }
        CUI.Utility.$9o = true
    }
    return CUI.Utility.$5e
};
CUI.Utility.get_$Hb = function() {
    if (!CUI.Utility.$9n) {
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_0 = document.documentMode;
            if ($v_0) CUI.Utility.$86 = $v_0;
            else {
                var $v_1 = document.compatMode;
                if ($v_1 === "CSS1Compat") CUI.Utility.$86 = 7
            }
        }
        CUI.Utility.$9n = true
    }
    return CUI.Utility.$86
};
CUI.Utility.get_$99 = function() {
    if (!CUI.Utility.$9t) {
        var $v_0 = CUI.Utility.get_$Hc();
        if ($v_0 > 0) {
            var $v_1 = CUI.Utility.get_$Hb();
            if ($v_1 > 0) CUI.Utility.$9s = $v_1 !== $v_0
        }
        CUI.Utility.$9t = true
    }
    return CUI.Utility.$9s
};
CUI.Utility.$B0 = function($p0, $p1) { return CUI.Utility.$HE($p0, [$p1]) };
CUI.Utility.$HE = function($p0, $p1) {
    var $v_0 = $p1.length;
    if (!$p0) return null;
    for (var $v_2 = 0; $v_2 < $v_0; $v_2++) if ($p0.tagName.toLowerCase() === $p1[$v_2].toLowerCase()) return $p0;
    var $v_1 = $p0.parentNode;
    while ($v_1) {
        for (var $v_3 = 0; $v_3 < $v_0; $v_3++) if ($v_1.tagName.toLowerCase() === $p1[$v_3].toLowerCase()) return $v_1;
        $v_1 = $v_1.parentNode
    }
    return null
};
CUI.Utility.$5 = function($p0) {
    var $v_0 = document.createElement($p0);
    $v_0.setAttribute("unselectable", "on");
    return $v_0
};
CUI.Utility.$49 = function($p0) {
    var $v_0 = document.createElement("label");
    $v_0.setAttribute("unselectable", "on");
    $v_0.className = "ms-cui-hidden";
    CUI.UIUtility.setInnerText($v_0, $p0);
    return $v_0
};
CUI.Utility.$AY = function($p0) { return document.createElement($p0) };
CUI.Utility.$Be = function($p0, $p1) {
    if (CUI.ScriptUtility.isNullOrUndefined($p1)) return;
    $p0.style.imeMode = CUI.Utility.$1F($p1) ? "auto" : "disabled"
};
CUI.Utility.get_returnFalseHandler = function() {
    if (CUI.ScriptUtility.isNullOrUndefined(CUI.Utility.$8d)) CUI.Utility.$8d = CUI.NativeUtility.returnFalse;
    return CUI.Utility.$8d
};
CUI.ScriptUtility = function() {};
CUI.ScriptUtility.isNullOrEmptyString = function($p0) {
    var $v_0 = null;
    return $p0 === $v_0 || typeof $p0 === "undefined" || !$p0.length
};
CUI.ScriptUtility.isNullOrUndefined = function($p0) {
    var $v_0 = null;
    return $p0 === $v_0 || typeof $p0 === "undefined"
};
CUI.ScriptUtility.isUndefined = function($p0) { return typeof $p0 === "undefined" };
CUI.UIUtility = function() {};
CUI.UIUtility.generateRandomElementId = function() {
    var $v_0 = null, $v_1 = null;
    do {
        var $v_2 = Math.random();
        $v_2 = $v_2 * 1e5;
        $v_2 = Math.round($v_2);
        $v_0 = "rnd" + $v_2.toString();
        $v_1 = $get($v_0)
    } while ($v_1);
    return $v_0
};
CUI.UIUtility.cancelEvent = function($p0) {
    if ($p0) {
        $p0.preventDefault();
        $p0.stopPropagation()
    }
};
CUI.UIUtility.insertBefore = function($p0, $p1) {
    var $v_0 = $p1.parentNode;
    $v_0.insertBefore($p0, $p1)
};
CUI.UIUtility.insertAfter = function($p0, $p1) {
    var $v_0 = $p1.parentNode;
    if ($v_0.lastChild === $p1) $v_0.appendChild($p0);
    else $v_0.insertBefore($p0, $p1.nextSibling)
};
CUI.UIUtility.removeNode = function($p0) { $p0.parentNode && $p0.parentNode.removeChild($p0) };
CUI.UIUtility.calculateOffsetLeft = function($p0) {
    var $v_0 = 0;
    while ($p0) {
        $v_0 += $p0.offsetLeft;
        $p0 = $p0.offsetParent
    }
    return $v_0
};
CUI.UIUtility.calculateOffsetTop = function($p0) {
    var $v_0 = 0;
    while ($p0) {
        $v_0 += $p0.offsetTop;
        $p0 = $p0.offsetParent
    }
    return $v_0
};
CUI.UIUtility.setInnerText = function($p0, $p1) { CUI.NativeUtility.setInnerText($p0, $p1) };
CUI.UIUtility.isTextNode = function($p0) { return $p0.nodeType === 3 || $p0.nodeType === 4 };
CUI.UIUtility.isNodeOfType = function($p0, $p1) {
    for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) if ($p0.tagName === $p1[$v_0]) return true;
    return false
};
CUI.ListNode = function($p0, $p1, $p2) {
    this.next = $p2;
    this.previous = $p1;
    this.data = $p0
};
CUI.ListNode.prototype = { next: null, previous: null, data: null };
CUI.List = function() {};
CUI.List.prototype = {
    $2J_0: null,
    $43_0: null,
    $T_0: 0,
    add: function($p0) {
        if (!this.$2J_0) this.$2J_0 = this.$43_0 = new CUI.ListNode($p0, null, null);
        else this.$43_0 = this.$43_0.next = new CUI.ListNode($p0, this.$43_0, null);
        this.$T_0++
    },
    insert: function($p0, $p1) {
        if ($p0 > this.$T_0 || 0 > $p0) throw Error.argumentOutOfRange("pos");
        if ($p0 === this.$T_0) {
            this.add($p1);
            return
        }
        var $v_0 = this.$2J_0;
        while (0 !== $p0--) $v_0 = $v_0.next;
        var $v_1 = new CUI.ListNode($p1, $v_0.previous, $v_0);
        if (!$v_0.previous) this.$2J_0 = $v_1;
        else $v_0.previous.next = $v_1;
        if (!$v_0.next) this.$43_0 = $v_1;
        else $v_0.next.previous = $v_1
    },
    remove: function($p0) {
        var $v_0 = this.$2J_0;
        while ($v_0) {
            if ($v_0.data === $p0) break;
            $v_0 = $v_0.next
        }
        if (!$v_0) return false;
        if (!$v_0.previous) this.$2J_0 = $v_0.next;
        else $v_0.previous.next = $v_0.next;
        if (!$v_0.next) this.$43_0 = $v_0.previous;
        else $v_0.next.previous = $v_0.previous;
        return true
    },
    clear: function() {
        var $v_0 = this.$2J_0, $v_1;
        this.$2J_0 = null;
        this.$43_0 = null;
        while ($v_0) {
            $v_1 = $v_0.next;
            $v_0.previous = null;
            $v_0.next = null;
            $v_0 = $v_1
        }
    },
    indexOf: function($p0) {
        var $v_0 = this.$2J_0, $v_1 = 0;
        while ($v_0) {
            if ($v_0.data === $p0) break;
            $v_0 = $v_0.next;
            $v_1++
        }
        if (!$v_0) return -1;
        return $v_1
    },
    get_item: function($p0) {
        var $v_0 = this.$Bz_0($p0);
        return $v_0.data
    },
    get_count: function() { return this.$T_0 },
    getEnumerator: function() { return new CUI.ListEnumerator(this.$2J_0) },
    getEnumeratorAtPos: function($p0) {
        var $v_0 = this.$Bz_0($p0);
        return new CUI.ListEnumerator($v_0)
    },
    $Bz_0: function($p0) {
        var $v_0 = this.$2J_0, $v_1 = 0;
        while ($v_1 !== $p0) {
            if (!$v_0) throw Error.argumentOutOfRange("pos");
            $v_0 = $v_0.next;
            $v_1++
        }
        return $v_0
    }
};
CUI.ListEnumerator = function($p0) { this.$4d_0 = $p0 };
CUI.ListEnumerator.prototype = {
    $4d_0: null,
    $b_0: null,
    get_current: function() {
        if (!this.$b_0) throw Error.argumentOutOfRange();
        return this.$b_0.data
    },
    moveNext: function() {
        if (!this.$b_0) {
            this.$b_0 = this.$4d_0;
            return !!this.$4d_0
        }
        if (!this.$b_0.next) return false;
        this.$b_0 = this.$b_0.next;
        return true
    },
    movePrevious: function() {
        if (!this.$b_0) {
            this.$b_0 = this.$4d_0;
            return !!this.$4d_0
        }
        if (!this.$b_0.previous) return false;
        this.$b_0 = this.$b_0.previous;
        return true
    },
    reset: function() { this.$b_0 = this.$4d_0 }
};
CUI.JsonXmlElement = function(name, attrs) {
    this.name = name;
    if (!attrs) attrs = {};
    this.attrs = attrs
};
CUI.JsonXmlElement.prototype = {
    get_name: function() { return this.name },
    get_attributes: function() { return this.attrs },
    appendChild: function(name, attrs) {
        var $v_0 = new CUI.JsonXmlElement(name, attrs);
        return this.appendChildNode($v_0)
    },
    appendChildNode: function(node) {
        var $v_0 = this.children;
        if (!$v_0) {
            $v_0 = [];
            this.children = $v_0
        }
        Array.add($v_0, node);
        return node
    },
    get_childNodes: function() { return this.children }
};
Type.registerNamespace("CUI.Controls");
CUI.Controls.ColorStyle = function() {
    this.Title = null;
    this.Color = null;
    this.Style = null;
    this.DisplayColor = null
};
CUI.Controls.ColorPickerResult = function() {};
CUI.Controls.ContextMenuControlProperties = function() {
    CUI.Controls.ContextMenuControlProperties.initializeBase(this)
};
CUI.Controls.ContextMenuControl = function($p0, $p1, $p2, $p3) {
    CUI.Controls.ContextMenuControl.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.addDisplayMode("Menu")
};
CUI.Controls.ContextMenuControl.prototype = {
    $BC_3: null,
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Menu":
            this.$BC_3 = CUI.Utility.$5("span");
            return this.$BC_3;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    onEnabledChanged: function($p0) {},
    onMenuButtonClick: function($p0) {
        if (!this.$9_0) return;
        this.$Da_2($p0, null);
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_3().CommandMenuOpen, 4, null)
    },
    onLaunchedMenuClosed: function() {
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_3().CommandMenuClose, 10, null)
    },
    get_$2_3: function() { return this.$7_0 }
};
CUI.Controls.Button = function($p0, $p1, $p2) {
    this.$$d_handleTabBlur = Function.createDelegate(this, this.handleTabBlur);
    this.$$d_handleTabFocus = Function.createDelegate(this, this.handleTabFocus);
    this.$$d_handleMouseBlur = Function.createDelegate(this, this.handleMouseBlur);
    this.$$d_handleMouseFocus = Function.createDelegate(this, this.handleMouseFocus);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.Button.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Small");
    this.addDisplayMode("Medium");
    this.addDisplayMode("Large");
    this.addDisplayMode("Menu");
    this.addDisplayMode("Menu16");
    this.addDisplayMode("Menu32")
};
CUI.Controls.Button.prototype = {
    $K_1: null,
    $C_1: null,
    $D_1: null,
    $a_1: null,
    $i_1: null,
    $2e_1: null,
    $19_1: null,
    $7w_1: null,
    $7x_1: null,
    $7y_1: null,
    $2B_1: null,
    $1f_1: null,
    createComponentForDisplayModeInternal: function($p0) {
        var $v_0;
        if ($p0.startsWith("Menu")) {
            $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
            this.$2e_1 = this.get_$2_1().MenuItemId;
            this.$19_1 = this.get_$2_1().CommandValueId;
            if (CUI.ScriptUtility.isNullOrEmptyString(this.$19_1)) this.$19_1 = this.$2e_1
        } else $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        return $v_0
    },
    createDOMElementForDisplayMode: function($p0) { return this.$48_1($p0, true) },
    $48_1: function($p0, $p1) {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().Alt) ? this.getLabel() : this.get_$2_1().Alt;
        switch ($p0) {
        case "Large":
            this.$K_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Large", this.get_$2_1(), false, false);
            $p1 && this.$Ex_0("Large");
            return this.$K_1;
        case "Medium":
            this.$C_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Medium", this.get_$2_1(), false, false);
            $p1 && this.$Ex_0("Medium");
            return this.$C_1;
        case "Small":
            this.$D_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Small", this.get_$2_1(), false, false);
            $p1 && this.$Ex_0("Small");
            return this.$D_1;
        case "Menu":
        case "Menu16":
            this.$a_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Menu16", this.get_$2_1(), true, false);
            $p1 && this.$Ex_0("Menu16");
            return this.$a_1;
        case "Menu32":
            this.$i_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Menu32", this.get_$2_1(), true, false);
            $p1 && this.$Ex_0("Menu32");
            return this.$i_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Large":
            this.$K_1 = $v_0;
            break;
        case "Medium":
            this.$C_1 = $v_0;
            break;
        case "Small":
            this.$D_1 = $v_0;
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Large":
            this.$g_1(this.$K_1, true);
            break;
        case "Medium":
            this.$g_1(this.$C_1, true);
            break;
        case "Small":
            this.$g_1(this.$D_1, true);
            break;
        case "Menu32":
            this.$g_1(this.$i_1, false);
            break;
        case "Menu16":
            this.$g_1(this.$a_1, false);
            break;
        case "Menu":
            this.$g_1(this.$a_1, false);
            break
        }
    },
    $g_1: function($p0, $p1) {
        $addHandler($p0, "click", this.$$d_onClick);
        $p1 && $addHandler($p0, "dblclick", this.$$d_onDblClick);
        $addHandler($p0, "mouseover", this.$$d_handleMouseFocus);
        $addHandler($p0, "mouseout", this.$$d_handleMouseBlur);
        $addHandler($p0, "focus", this.$$d_handleTabFocus);
        $addHandler($p0, "blur", this.$$d_handleTabBlur)
    },
    onEnabledChanged: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$K_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$C_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$D_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$a_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$i_1, $p0);
        !$p0 && this.$1t_1()
    },
    get_$CH_0: function() { return "Button" },
    getTextValue: function() { return this.getLabel() },
    getLabel: function() { return this.get_$2_1().LabelText },
    receiveFocus: function() {
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        $v_0.set_$1b_2(true);
        !CUI.ScriptUtility.isNullOrUndefined(this.$a_1) && this.$a_1.focus();
        !CUI.ScriptUtility.isNullOrUndefined(this.$i_1) && this.$i_1.focus()
    },
    getDropDownDOMElementForDisplayMode: function($p0) {
        var $v_0;
        switch ($p0) {
        case "Large":
            $v_0 = this.$7w_1;
            break;
        case "Medium":
            $v_0 = this.$7x_1;
            break;
        case "Small":
            $v_0 = this.$7y_1;
            break;
        case "Menu":
            $v_0 = this.$2B_1;
            break;
        case "Text":
            $v_0 = this.$1f_1;
            break;
        default:
            $v_0 = CUI.Utility.$5("span");
            break
        }
        if ($v_0) return $v_0;
        return this.$CM_1($p0)
    },
    $CM_1: function($p0) {
        var $v_0;
        switch ($p0) {
        case "Large":
            $v_0 = this.$48_1($p0, false).cloneNode(true);
            this.$K_1 = null;
            $v_0.style.height = "auto";
            $v_0.childNodes[1].style.height = "auto";
            this.$7w_1 = $v_0;
            break;
        case "Medium":
            $v_0 = this.$48_1($p0, false).cloneNode(true);
            this.$C_1 = null;
            this.$7x_1 = $v_0;
            break;
        case "Small":
            $v_0 = this.$48_1($p0, false).cloneNode(true);
            this.$D_1 = null;
            this.$7y_1 = $v_0;
            break;
        case "Menu":
            this.$2B_1 = this.$48_1("Menu", false).cloneNode(true);
            this.$a_1 = null;
            return this.$2B_1;
        case "Text":
            var $v_1 = CUI.Utility.$5("a");
            CUI.Utility.$2k($v_1);
            this.$1f_1 = CUI.Utility.$5("span");
            this.$1f_1.className = "ms-cui-textmenuitem";
            CUI.UIUtility.setInnerText($v_1, this.get_$2_1().LabelText);
            this.$1f_1.appendChild($v_1);
            return this.$1f_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
        return $v_0
    },
    deselect: function() {},
    getMenuItemId: function() { return this.$2e_1 },
    getCommandValueId: function() { return this.$19_1 },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        this.get_displayedComponent().get_$3_0().focus();
        return true
    },
    focusOnDisplayedComponent: function() { this.receiveFocus() },
    onClick: function($p0) {
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7700);
        $p0.preventDefault();
        $p0.stopPropagation();
        this.$n_0();
        if (!this.$9_0) return;
        this.$0_0.set_$7R_1(this);
        var $v_0 = 1, $v_1 = this.get_stateProperties(), $v_2 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === "OptionSelection") $v_0 = 3;
        $v_1["CommandValueId"] = this.$19_1;
        $v_1["MenuItemId"] = this.$2e_1;
        $v_1["SourceControlId"] = this.$6_0;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().Command, $v_0, $v_1);
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7701)
    },
    handleMouseFocus: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        var $v_0 = this.get_displayedComponent();
        CUI.MenuItem.isInstanceOfType($v_0) && $v_0.set_$1b_2(true);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandPreview)) return;
        var $v_1 = this.get_stateProperties();
        $v_1["CommandValueId"] = this.$19_1;
        $v_1["MenuItemId"] = this.$2e_1;
        var $v_2 = 5, $v_3 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_3 === "OptionSelection") $v_2 = 7;
        $v_0.raiseCommandEvent(this.get_$2_1().CommandPreview, $v_2, $v_1)
    },
    handleMouseBlur: function($p0) {
        this.$1t_1();
        this.onEndFocus();
        if (!this.$9_0) return;
        var $v_0 = this.get_displayedComponent();
        CUI.MenuItem.isInstanceOfType($v_0) && $v_0.set_$1b_2(false);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandRevert)) return;
        var $v_1 = 6, $v_2 = this.get_stateProperties();
        $v_2["CommandValueId"] = this.$19_1;
        $v_2["MenuItemId"] = this.$2e_1;
        var $v_3 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_3 === "OptionSelection") $v_1 = 8;
        $v_0.raiseCommandEvent(this.get_$2_1().CommandRevert, $v_1, $v_2)
    },
    handleTabFocus: function($p0) {
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.MenuItem.isInstanceOfType($v_0)) {
            $v_0.set_$1b_2(true);
            this.$56_1(this.$9_0)
        } else this.$9_0 && this.$0_0.set_$1I_1(this)
    },
    handleTabBlur: function($p0) {
        this.$1t_1();
        this.onEndFocus();
        if (!this.$9_0) return;
        var $v_0 = this.get_displayedComponent();
        CUI.MenuItem.isInstanceOfType($v_0) && $v_0.set_$1b_2(false)
    },
    onMenuClosed: function() {
        this.$1t_1();
        this.$n_0()
    },
    $1t_1: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$K_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$K_1, "ms-cui-ctl-hoveredOver");
        !CUI.ScriptUtility.isNullOrUndefined(this.$C_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$C_1, "ms-cui-ctl-hoveredOver");
        !CUI.ScriptUtility.isNullOrUndefined(this.$D_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$D_1, "ms-cui-ctl-hoveredOver");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$a_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$a_1, "ms-cui-ctl-hoveredOver");
            CUI.Utility.removeCSSClassFromElement(this.$a_1, "ms-cui-ctl-disabledHoveredOver")
        }
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$i_1)) {
            CUI.Utility.removeCSSClassFromElement(this.$i_1, "ms-cui-ctl-hoveredOver");
            CUI.Utility.removeCSSClassFromElement(this.$i_1, "ms-cui-ctl-disabledHoveredOver")
        }
    },
    $56_1: function($p0) {
        var $v_0 = "ms-cui-ctl-hoveredOver";
        if (!$p0) {
            $v_0 = "ms-cui-ctl-disabledHoveredOver";
            !CUI.ScriptUtility.isNullOrUndefined(this.$a_1) && CUI.Utility.ensureCSSClassOnElement(this.$a_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$i_1) && CUI.Utility.ensureCSSClassOnElement(this.$i_1, $v_0)
        } else {
            !CUI.ScriptUtility.isNullOrUndefined(this.$K_1) && CUI.Utility.ensureCSSClassOnElement(this.$K_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$C_1) && CUI.Utility.ensureCSSClassOnElement(this.$C_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$D_1) && CUI.Utility.ensureCSSClassOnElement(this.$D_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$a_1) && CUI.Utility.ensureCSSClassOnElement(this.$a_1, $v_0);
            !CUI.ScriptUtility.isNullOrUndefined(this.$i_1) && CUI.Utility.ensureCSSClassOnElement(this.$i_1, $v_0)
        }
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$K_1 = null;
        this.$C_1 = null;
        this.$D_1 = null;
        this.$a_1 = null;
        this.$i_1 = null;
        this.$7w_1 = null;
        this.$7x_1 = null;
        this.$7y_1 = null;
        this.$2B_1 = null;
        this.$1f_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.CheckBoxCommandProperties = function() {};
CUI.Controls.CheckBox = function($p0, $p1, $p2) {
    this.$$d_$Dq_2 = Function.createDelegate(this, this.$Dq_2);
    this.$$d_$ID_2 = Function.createDelegate(this, this.$ID_2);
    this.$$d_$9F_2 = Function.createDelegate(this, this.$9F_2);
    this.$$d_$9G_2 = Function.createDelegate(this, this.$9G_2);
    this.$$d_$7T_2 = Function.createDelegate(this, this.$7T_2);
    this.$$d_$6O_2 = Function.createDelegate(this, this.$6O_2);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.CheckBox.initializeBase(this, [$p0, $p1, $p2])
};
CUI.Controls.CheckBox.prototype = {
    $D_2: null,
    $1H_2: null,
    $C_2: null,
    $1C_2: null,
    $2s_2: null,
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().Alt)
            ? this.get_$2_2().LabelText
            : this.get_$2_2().Alt;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = "";
        switch ($p0) {
        case "Small":
            this.$D_2 = CUI.Utility.$5("span");
            this.$D_2.className = "ms-cui-cbx";
            this.$D_2.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$1H_2 = CUI.Utility.$5("input");
            this.$1H_2.type = "checkbox";
            this.$1H_2.className = "ms-cui-cbx-input";
            this.$1H_2.id = this._id + "-Small-checkbox";
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().ToolTipTitle)) this.$1H_2.title = $v_0;
            this.$1H_2.setAttribute("role", this.get_$4y_0());
            CUI.Utility.$2Y(this.get_$2_2(), this.$1H_2);
            this.$g_2(this.$1H_2, null);
            this.$D_2.appendChild(this.$1H_2);
            return this.$D_2;
        case "Medium":
            this.$C_2 = CUI.Utility.$5("span");
            this.$C_2.className = "ms-cui-cbx";
            this.$C_2.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$1C_2 = CUI.Utility.$5("input");
            this.$1C_2.type = "checkbox";
            this.$1C_2.className = "ms-cui-cbx-input";
            this.$1C_2.id = this._id + "-Medium-checkbox";
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().ToolTipTitle)) this.$1C_2.title = $v_0;
            this.$1C_2.setAttribute("role", this.get_$4y_0());
            CUI.Utility.$2Y(this.get_$2_2(), this.$1C_2);
            var $v_1 = false;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().LabelText)) {
                this.$2s_2 = CUI.Utility.$5("label");
                if (CUI.Utility.$58()) this.$2s_2.setAttribute("htmlFor", this._id + "-Medium-checkbox");
                else this.$2s_2.setAttribute("for", this._id + "-Medium-checkbox");
                CUI.Utility.$4I(this.$2s_2, this.get_$2_2().LabelText);
                $v_1 = true
            }
            this.$g_2(this.$1C_2, this.$2s_2);
            this.$C_2.appendChild(this.$1C_2);
            $v_1 && this.$C_2.appendChild(this.$2s_2);
            return this.$C_2;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Medium":
            this.$C_2 = $v_0;
            this.$1C_2 = $v_0.firstChild;
            this.$2s_2 = $v_0.childNodes[1];
            break;
        case "Small":
            this.$D_2 = $v_0;
            this.$1H_2 = $v_0.firstChild;
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Medium":
            this.$g_2(this.$1C_2, this.$2s_2);
            break;
        case "Small":
            this.$g_2(this.$1H_2, null);
            break
        }
    },
    $g_2: function($p0, $p1) {
        $addHandler($p0, "click", this.$$d_onClick);
        $addHandler($p0, "focus", this.$$d_$6O_2);
        $addHandler($p0, "blur", this.$$d_$7T_2);
        $addHandler($p0, "mouseover", this.$$d_$9G_2);
        $addHandler($p0, "mouseout", this.$$d_$9F_2);
        $addHandler($p0, "keydown", this.$$d_$ID_2);
        if (!CUI.ScriptUtility.isNullOrUndefined($p1)) {
            $addHandler($p1, "click", this.$$d_$Dq_2);
            $addHandler($p1, "keydown", this.$$d_$ID_2);
            $addHandler($p1, "mouseover", this.$$d_$9G_2);
            $addHandler($p1, "mouseout", this.$$d_$9F_2)
        }
    },
    onEnabledChanged: function($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$D_2);
            CUI.Utility.enableElement(this.$C_2)
        } else {
            CUI.Utility.disableElement(this.$D_2);
            CUI.Utility.disableElement(this.$C_2)
        }
        CUI.Utility.setDisabledAttribute(this.$1H_2, !$p0);
        CUI.Utility.setDisabledAttribute(this.$1C_2, !$p0)
    },
    get_$CH_0: function() { return "CheckBox" },
    get_$4y_0: function() { return "checkbox" },
    onClick: function($p0) {
        this.$n_0();
        if (!this.$9_0) return;
        var $v_0 = 9, $v_1 = this.get_displayedComponent();
        switch ($v_1.get_displayMode()) {
        case "Small":
            this.get_stateProperties()["On"] = this.$1H_2.checked;
            break;
        case "Medium":
            this.get_stateProperties()["On"] = this.$1C_2.checked;
            break;
        default:
            this.ensureValidDisplayMode($v_1.get_displayMode());
            return
        }
        $v_1.raiseCommandEvent(this.get_$2_2().Command, $v_0, this.get_stateProperties());
        if (this.$0_0.get_$7V_1()) this.$Ih_0();
        else this.setState(this.get_stateProperties()["On"])
    },
    $6O_2: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        this.$0_0.set_$1I_1(this);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandPreview)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandPreview, 5, this.get_stateProperties())
    },
    $ID_2: function($p0) { if (!CUI.ScriptUtility.isNullOrUndefined($p0)) $p0.keyCode === 13 && this.$Dq_2($p0) },
    $9G_2: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandPreview)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandPreview, 5, this.get_stateProperties())
    },
    $7T_2: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandRevert)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandRevert, 6, this.get_stateProperties())
    },
    $9F_2: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandRevert)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandRevert, 6, this.get_stateProperties())
    },
    $Dq_2: function($p0) {
        $p0.preventDefault();
        this.$n_0();
        if (!this.$9_0) return;
        this.$0_0.set_$1I_1(this);
        this.setState(!this.$1C_2.checked);
        this.onClick($p0)
    },
    setState: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1H_2)) this.$1H_2.checked = $p0;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1C_2)) this.$1C_2.checked = $p0
    },
    $Ih_0: function() {
        this.pollForStateAndUpdateInternal(this.get_$2_2().Command,
            this.get_$2_2().QueryCommand,
            this.get_stateProperties(),
            true);
        this.setState(this.get_stateProperties()["On"])
    },
    addDisplayModes: function() {
        this.addDisplayMode("Small");
        this.addDisplayMode("Medium")
    },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        var $v_0 = this.get_displayedComponent().get_$3_0();
        $v_0.firstChild.focus();
        return true
    },
    dispose: function() {
        CUI.Controls.ToggleButton.prototype.dispose.call(this);
        this.$C_2 = null;
        this.$1C_2 = null;
        this.$2s_2 = null;
        this.$D_2 = null;
        this.$1H_2 = null
    },
    get_$2_2: function() { return this.$7_0 }
};
CUI.Controls.ColorPickerCommandProperties = function() {};
CUI.Controls.ColorPicker = function($p0, $p1, $p2, $p3) {
    this.$$d_$Dl_1 = Function.createDelegate(this, this.$Dl_1);
    this.$$d_$I4_1 = Function.createDelegate(this, this.$I4_1);
    this.$$d_$Dn_1 = Function.createDelegate(this, this.$Dn_1);
    this.$$d_$Dm_1 = Function.createDelegate(this, this.$Dm_1);
    CUI.Controls.ColorPicker.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Menu");
    this.$9W_1 = $p3
};
CUI.Controls.ColorPicker.prototype = {
    $9W_1: null,
    createComponentForDisplayModeInternal: function($p0) {
        if (this.$k_0.length > 0)
            throw Error.create("Only one ControlComponent can be created for each ColorPicker Control");
        var $v_0;
        $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
        return $v_0
    },
    get_$CH_0: function() { return "ColorPicker" },
    $38_1: null,
    $Eo_1: function($p0, $p1) {
        for (var $v_0 = null, $v_1 = $p0.ownerDocument, $v_2 = 0, $v_3 = $p1.length / 10, $v_4 = 0;
            $v_4 < $p1.length;
            $v_4++) {
            if (!($v_4 % 10)) {
                $v_0 = $v_1.createElement("tr");
                $p0.appendChild($v_0);
                $v_2++
            }
            var $v_5 = $v_1.createElement("td");
            $v_5.className = "ms-cui-colorpicker-cell";
            $v_5.setAttribute("arrayPosition", $v_4);
            if ($v_2 === 1) {
                $v_5.style.padding = "2px";
                $v_5.style.height = "16px"
            }
            $v_0.appendChild($v_5);
            var $v_6 = $v_1.createElement("a");
            $v_6.href = "javascript:";
            var $v_7 = $p1[$v_4].Title;
            $v_6.title = $v_7;
            $v_6.className = "ms-cui-colorpicker-cell-a";
            $addHandler($v_6, "focus", this.$$d_$Dm_1);
            var $v_8 = $v_1.createElement("div"), $v_9 = $p1[$v_4].DisplayColor;
            $v_8.style.backgroundColor = $v_9;
            $v_8.className = "ms-cui-colorpicker-celldiv";
            var $v_A = 13;
            if ($v_2 === 1 || $v_2 === 2) {
                $v_8.style.borderTopWidth = "1px";
                $v_A--
            }
            if ($v_2 === 1 || $v_2 === $v_3) {
                $v_8.style.borderBottomWidth = "1px";
                $v_A--
            }
            if ($v_A !== 13) $v_8.style.height = $v_A + "px";
            var $v_B = $v_1.createElement("div");
            $v_B.className = "ms-cui-colorpicker-cellinternaldiv";
            $addHandler($v_6, "mouseover", this.$$d_$Dn_1);
            $addHandler($v_6, "mouseout", this.$$d_$I4_1);
            $addHandler($v_6, "click", this.$$d_$Dl_1);
            $v_5.appendChild($v_6);
            $v_6.appendChild($v_8);
            $v_8.appendChild($v_B);
            $v_5.colorPickerCssClass = $p1[$v_4];
            Array.add(this.$38_1, $v_5)
        }
    },
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Menu":
            var $v_0 = this.$0_0.get_element().ownerDocument, $v_1 = $v_0.createElement("table");
            if (this.$0_0._textDirection === 1) $v_1.dir = "rtl";
            else $v_1.dir = "ltr";
            $v_1.className = "ms-cui-smenu-inner";
            $v_1.setAttribute("cellSpacing", "0");
            $v_1.setAttribute("cellPadding", "0");
            $v_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$38_1 = [];
            var $v_2 = $v_0.createElement("tbody");
            this.$Eo_1($v_2, this.$9W_1);
            $v_1.appendChild($v_2);
            return $v_1;
        default:
            this.ensureValidDisplayMode($p0);
            break
        }
        return null
    },
    onEnabledChanged: function($p0) {},
    $Dl_1: function($p0) {
        $p0.preventDefault();
        if (!this.$9_0) return;
        var $v_0 = $p0.target, $v_1 = CUI.Utility.$B0($v_0, "td"), $v_2 = this.$D9_1($v_1);
        this.$AU_1();
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().Command, 1, $v_2)
    },
    $D9_1: function($p0) {
        var $v_0 = $p0.colorPickerCssClass, $v_1 = new CUI.Controls.ColorPickerResult;
        $v_1.Color = $v_0.Color;
        $v_1.Style = $v_0.Style;
        return $v_1
    },
    $Dn_1: function($p0) {
        if (!this.$9_0) return;
        var $v_0 = CUI.Utility.$B0($p0.target, "td");
        this.$B5_1($v_0)
    },
    $Dm_1: function($p0) {
        if (!this.$9_0) return;
        var $v_0 = CUI.Utility.$B0($p0.target, "td");
        this.$B5_1($v_0)
    },
    $I4_1: function($p0) {
        if (!this.$9_0) return;
        this.$9K_1();
        CUI.Controls.ColorPicker.$A = -10
    },
    $3Z_1: false,
    $9I_1: null,
    $B5_1: function($p0) {
        var $v_0 = parseInt($p0.getAttribute("arrayPosition"));
        if (CUI.Controls.ColorPicker.$A === $v_0) return;
        CUI.Controls.ColorPicker.$A = $v_0;
        this.$EJ_1($p0);
        this.$Es_1($p0)
    },
    $Es_1: function($p0) {
        this.$9K_1();
        Sys.UI.DomElement.addCssClass($p0, "ms-cui-colorpicker-hoveredOver");
        this.$95_1 = $p0;
        $p0.firstChild && $p0.firstChild.focus()
    },
    $95_1: null,
    $9K_1: function() { if (this.$95_1) this.$95_1.className = "ms-cui-colorpicker-cell" },
    receiveFocus: function() { this.$Bb_1(0) },
    $Bb_1: function($p0) {
        if (this.$38_1 && this.$38_1.length > $p0) {
            var $v_0 = this.$38_1[$p0];
            this.$B5_1($v_0)
        }
    },
    $AU_1: function() {
        this.$3Z_1 = false;
        this.$9I_1 = null
    },
    $Ac_1: function() {
        this.$3Z_1 &&
            !CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1().CommandRevert) &&
            this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandRevert, 6, this.$9I_1)
    },
    $EJ_1: function($p0) {
        if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1().CommandPreview)) {
            this.$3Z_1 = true;
            var $v_0 = this.$D9_1($p0);
            this.$9I_1 = $v_0;
            this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandPreview, 5, $v_0)
        }
    },
    get_$2_1: function() { return this.$7_0 },
    onMenuClosed: function() { this.$Ac_1() },
    $8x_0: function() {
        var $v_0 = 1, $v_1 = window.event;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1.keyCode === 38) $v_0 = 10;
        if (CUI.Controls.ColorPicker.$A < 0) CUI.Controls.ColorPicker.$A += this.$38_1.length + $v_0;
        if (CUI.Controls.ColorPicker.$A >= $v_0) {
            this.$Bb_1(CUI.Controls.ColorPicker.$A - $v_0);
            return true
        }
        this.$9K_1();
        CUI.Controls.ColorPicker.$A -= $v_0;
        return false
    },
    $8w_0: function() {
        var $v_0 = 1, $v_1 = window.event;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1.keyCode === 40) $v_0 = 10;
        if (CUI.Controls.ColorPicker.$A + $v_0 < 0) {
            CUI.Controls.ColorPicker.$A = -1;
            $v_0 = 1
        }
        if (CUI.Controls.ColorPicker.$A + $v_0 < this.$38_1.length) {
            this.$Bb_1(CUI.Controls.ColorPicker.$A + $v_0);
            return true
        }
        this.$9K_1();
        CUI.Controls.ColorPicker.$A -= this.$38_1.length;
        return false
    }
};
CUI.Controls.ComboBoxCommandProperties = function() {};
CUI.Controls.ComboBox = function($p0, $p1, $p2, $p3) {
    this.$$d_executeAutoComplete = Function.createDelegate(this, this.executeAutoComplete);
    this.$$d_onInputKeyDown = Function.createDelegate(this, this.onInputKeyDown);
    this.$$d_onInputBlur = Function.createDelegate(this, this.onInputBlur);
    this.$$d_onInputFocus = Function.createDelegate(this, this.onInputFocus);
    this.$5t_3 = -1;
    CUI.Controls.ComboBox.initializeBase(this, [$p0, $p1, $p2, $p3]);
    if (CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().AllowFreeForm)) this.$7a_3 = false;
    else this.$7a_3 = this.get_cbProperties().AllowFreeForm.toLowerCase() === "true";
    if (CUI.ScriptUtility.isNullOrEmptyString(this.get_cbProperties()
        .AutoComplete)) this.get_cbProperties().AutoComplete = "true";
    if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_cbProperties().AutoCompleteDelay))
        try {
            this.$7b_3 = parseInt(this.get_cbProperties().AutoCompleteDelay)
        } catch ($$e_4) {
            this.$7b_3 = 100
        }
};
CUI.Controls.ComboBox.prototype = {
    $C_3: null,
    $R_3: null,
    $P_3: null,
    $2D_3: null,
    $2E_3: null,
    $7a_3: false,
    $7b_3: 100,
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Medium":
            var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().Alt)
                    ? ""
                    : this.get_cbProperties().Alt,
                $v_1 = CUI.ScriptUtility.isNullOrUndefined(this.get_cbProperties().AltArrow)
                    ? $v_0
                    : this.get_cbProperties().AltArrow;
            this.$C_3 = CUI.Utility.$5("span");
            this.$C_3.className = "ms-cui-cb";
            this.$C_3.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$R_3 = CUI.Utility.$AY("input");
            this.$R_3.setAttribute("name", this.get_cbProperties().Command);
            this.$R_3.type = "text";
            this.$R_3.style.width = this.get_cbProperties().Width;
            this.$R_3.className = "ms-cui-cb-input";
            this.$R_3.setAttribute("autocomplete", "off");
            this.$R_3.id = this.get_cbProperties().Id;
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) this.$R_3.title = $v_0;
            CUI.Utility.$Be(this.$R_3, this.get_properties().ImeEnabled);
            var $v_2 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
            if (CUI.ScriptUtility.isNullOrUndefined($v_2)) $v_2 = this.get_cbProperties().InitialItem;
            !CUI.ScriptUtility.isNullOrUndefined($v_2) && this.$3b_2($v_2);
            CUI.Utility.$2Y(this.get_properties(), this.$R_3);
            this.$P_3 = CUI.Utility.$5("a");
            CUI.Utility.ensureCSSClassOnElement(this.$P_3, "ms-cui-dd-arrow-button");
            CUI.Utility.$2k(this.$P_3);
            this.$P_3.tabIndex = -1;
            this.$P_3.setAttribute("aria-haspopup", true);
            this.$2D_3 = CUI.Utility.$5("img");
            this.$2E_3 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$2D_3,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
                this.$2D_3.alt = $v_1;
                this.$P_3.title = $v_1
            }
            this.$Ex_0("Medium");
            this.$C_3.appendChild(this.$R_3);
            this.$C_3.appendChild(this.$P_3);
            this.$P_3.appendChild(this.$2E_3);
            return this.$C_3;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = null;
        switch ($p0) {
        case "Medium":
            this.$C_3 = $v_0;
            this.$R_3 = $v_0.childNodes[0];
            this.$P_3 = $v_0.childNodes[1];
            this.$2E_3 = this.$P_3.childNodes[0];
            this.$2D_3 = this.$2E_3.childNodes[0];
            CUI.Utility.$35(this.$R_3, false, false);
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Medium":
            this.$g_3();
            break
        }
    },
    $g_3: function() {
        $addHandler(this.$R_3, "focus", this.$$d_onInputFocus);
        $addHandler(this.$R_3, "blur", this.$$d_onInputBlur);
        $addHandler(this.$R_3, "keydown", this.$$d_onInputKeyDown);
        $addHandler(this.$R_3, "mouseup", CUI.Utility.get_returnFalseHandler());
        $addHandler(this.$P_3, "mouseover", this.$$d_onArrowButtonFocus);
        $addHandler(this.$P_3, "mouseout", this.$$d_onArrowButtonBlur);
        $addHandler(this.$P_3, "click", this.$$d_onArrowButtonClick);
        $addHandler(this.$P_3, "focus", this.$$d_onArrowButtonFocus);
        $addHandler(this.$P_3, "blur", this.$$d_onArrowButtonBlur);
        $addHandler(this.$P_3, "keypress", this.$$d_onArrowButtonKeyPress)
    },
    onEnabledChanged: function($p0) {
        if ($p0) {
            CUI.Utility.enableElement(this.$R_3);
            CUI.Utility.enableElement(this.$C_3)
        } else {
            CUI.Utility.disableElement(this.$R_3);
            CUI.Utility.disableElement(this.$C_3)
        }
        CUI.Controls.DropDown.prototype.onEnabledChanged.call(this, $p0)
    },
    get_$CH_0: function() { return "ComboBox" },
    get_$4y_0: function() { return "combobox" },
    $3s_3: null,
    get_menuItems: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3s_3)) this.$3s_3 = {};
        return this.$3s_3
    },
    set_menuItems: function($p0) {
        this.$3s_3 = $p0;
        return $p0
    },
    getFirstMenuItemThatBeginsWith: function($p0) {
        var $$dict_2 = this.$3s_3;
        for (var $$key_3 in $$dict_2) {
            var $v_0 = { key: $$key_3, value: $$dict_2[$$key_3] };
            if ($v_0.key.toLowerCase().startsWith($p0.toLowerCase())) return $v_0
        }
        return null
    },
    $75_3: null,
    onInputKeyDown: function($p0) {
        this.clearPendingAutoComplete();
        var $v_0 = this.$R_3.value;
        this.$n_0();
        if ($p0 && $p0.rawEvent)
            if ($p0.rawEvent.keyCode === 40 && $p0.altKey) {
                this.launchMenuInternal();
                return
            }
        if (CUI.ScriptUtility.isNullOrEmptyString($v_0)) return;
        if ($p0 && $p0.rawEvent) {
            var $v_1 = $p0.rawEvent.keyCode;
            switch ($v_1) {
            case 13:
                this.clearPendingAutoComplete();
                $p0.preventDefault();
                this.validateAndSave();
                return;
            case 27:
                this.clearPendingAutoComplete();
                !this.$t_1 && this.resetToPreviousValue();
                return;
            case 38:
                break;
            case 40:
                if ($p0.altKey) {
                    this.launchMenuInternal();
                    return
                }
                break;
            case 8:
            case 127:
            case 46:
                this.clearPendingAutoComplete();
                this.$75_3 = null;
                return;
            case 36:
            case 35:
            case 33:
            case 34:
            case 37:
            case 39:
            case 16:
            case 18:
            case 17:
            case 20:
                return
            }
        }
        if (CUI.Utility.$1F(this.get_cbProperties().AutoComplete)) {
            this.clearPendingAutoComplete();
            this.$5t_3 = window.setTimeout(this.$$d_executeAutoComplete, this.$7b_3)
        }
    },
    executeAutoComplete: function() {
        this.$5t_3 = -1;
        var $v_0 = this.$R_3.value, $v_1 = this.getFirstMenuItemThatBeginsWith($v_0);
        if (!$v_1) {
            this.$75_3 = null;
            return
        }
        this.$R_3.value = $v_1.key;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_2 = this.$R_3.createTextRange();
            $v_2.moveStart("character", $v_0.length);
            $v_2.moveEnd("character", this.$R_3.value.length);
            $v_2.select()
        } else this.$R_3.setSelectionRange($v_0.length, this.$R_3.value.length);
        this.$75_3 = $v_1.value
    },
    clearPendingAutoComplete: function() {
        this.$5t_3 !== -1 && window.clearTimeout(this.$5t_3);
        this.$5t_3 = -1
    },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$R_3)) {
            this.$R_3.focus();
            return true
        }
        return false
    },
    onInputFocus: function($p0) {
        this.$0_0.set_$1I_1(this);
        this.onArrowButtonFocus($p0);
        CUI.Utility.$1F(this.get_cbProperties().PopulateDynamically) && this.pollForDynamicMenu(false);
        CUI.Utility.$BV(this.$R_3);
        !CUI.ScriptUtility.isNullOrUndefined(this.$F_1) && this.$F_1.$2W_0()
    },
    onInputBlur: function($p0) {
        this.clearPendingAutoComplete();
        this.onArrowButtonBlur($p0)
    },
    get_$98_3: function() { return this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.IsFreeForm] },
    set_$98_3: function($p0) {
        this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.IsFreeForm] = $p0;
        return $p0
    },
    validateAndSave: function() {
        if (!this.$3b_2(this.$75_3)) {
            var $v_0 = this.get_displayedComponent();
            if (!CUI.Utility.$1F(this.get_cbProperties().AutoComplete)) {
                var $v_1 = this.$3s_3[this.$R_3.value];
                if (!CUI.ScriptUtility.isNullOrEmptyString($v_1) && this.$3b_2($v_1)) {
                    this.set_$98_3(false);
                    $v_0.raiseCommandEvent(this.get_cbProperties().Command,
                        3,
                        { IsFreeForm: false, CommandValueId: this._selectedControl.getCommandValueId() });
                    return
                }
            }
            if (this.$7a_3) {
                this.set_$98_3(true);
                this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value] = this.$R_3.value;
                $v_0.raiseCommandEvent(this.get_cbProperties().Command, 3, { IsFreeForm: true, Value: this.$R_3.value })
            } else {
                this.resetToPreviousValue();
                return
            }
        } else {
            this.set_$98_3(false);
            this.get_displayedComponent().raiseCommandEvent(this.get_cbProperties().Command,
                3,
                { IsFreeForm: false, CommandValueId: this._selectedControl.getCommandValueId() })
        }
    },
    resetToPreviousValue: function() {
        if (!CUI.ScriptUtility.isNullOrUndefined(this
            ._selectedControl)) this.$R_3.value = this._selectedControl.getTextValue();
        else this.$R_3.value = ""
    },
    selectMenuItem: function($p0) {
        if (this._selectedControl === $p0) return;
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_0 = $p0;
        this.$R_3.value = $v_0.getTextValue()
    },
    $Ih_0: function() {
        var $v_0 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = this.get_cbProperties()
                .InitialItem;
        var $v_1 = this.pollForStateAndUpdateInternal(this.get_cbProperties().Command,
                this.get_cbProperties().QueryCommand,
                this.get_stateProperties(),
                false),
            $v_2 = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId];
        if ($v_1)
            if (this.get_$98_3()) {
                this.$R_3.value = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value];
                this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.SelectedItemId] = null
            } else if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                if ($v_0 !== $v_2 || !this._itemEverSelected
                ) if (!this.$3b_2($v_2)) throw Error.create("The menu item id requested via polling does not exist")
            } else if (!CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()[CUI.Controls
                .ComboBoxCommandProperties.Value]))
                this.$R_3.value = this.get_stateProperties()[CUI.Controls.ComboBoxCommandProperties.Value]
    },
    onDynamicMenuPopulated: function() {
        var $v_0 = null, $v_1 = null, $v_2 = null, $v_3 = null, $v_4 = null, $v_5 = null;
        if (CUI.ScriptUtility.isNullOrUndefined(this.$F_1)) return;
        var $$enum_9 = this.$F_1.$8_0.getEnumerator();
        while ($$enum_9.moveNext()) {
            var $v_6 = $$enum_9.get_current(), $$enum_8 = $v_6.$8_0.getEnumerator();
            while ($$enum_8.moveNext()) {
                var $v_7 = $$enum_8.get_current();
                if (CUI.MenuItem.isInstanceOfType($v_7)) {
                    $v_0 = $v_7;
                    $v_1 = $v_0.$W_1;
                    if (CUI.ISelectableControl.isInstanceOfType($v_1)) {
                        $v_2 = $v_1;
                        $v_4 = $v_2.getMenuItemId()
                    }
                    if (CUI.IMenuItem.isInstanceOfType($v_1)) {
                        $v_3 = $v_1;
                        $v_5 = $v_3.getTextValue()
                    }
                    if (!(CUI.ScriptUtility.isNullOrUndefined($v_4) || CUI.ScriptUtility.isNullOrUndefined($v_5))) {
                        this.get_menuItems()[$v_5] = $v_4;
                        $v_5 = null;
                        $v_4 = null
                    }
                }
            }
        }
    },
    launchMenuInternal: function() {
        this.launchMenu(this.$R_3, this.$$d_sendMenuCreationCommandEvent) && this.sendMenuCreationCommandEvent()
    },
    dispose: function() {
        CUI.Controls.DropDown.prototype.dispose.call(this);
        this.$C_3 = null;
        this.$2D_3 = null;
        this.$2E_3 = null;
        this.$P_3 = null;
        this.$R_3 = null
    },
    get_cbProperties: function() { return this.$7_0 }
};
CUI.Controls.DropDownCommandProperties = function() {};
CUI.Controls.DropDown = function($p0, $p1, $p2, $p3) {
    this.$$d_onArrowButtonKeyboardFocus = Function.createDelegate(this, this.onArrowButtonKeyboardFocus);
    this.$$d_sendMenuCreationCommandEvent = Function.createDelegate(this, this.sendMenuCreationCommandEvent);
    this.$$d_onArrowButtonKeyPress = Function.createDelegate(this, this.onArrowButtonKeyPress);
    this.$$d_onArrowButtonClick = Function.createDelegate(this, this.onArrowButtonClick);
    this.$$d_onArrowButtonBlur = Function.createDelegate(this, this.onArrowButtonBlur);
    this.$$d_onArrowButtonFocus = Function.createDelegate(this, this.onArrowButtonFocus);
    CUI.Controls.DropDown.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.addDisplayModes();
    this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = null;
    this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value] = null
};
CUI.Controls.DropDown.prototype = {
    $C_2: null,
    $h_2: null,
    $P_2: null,
    $2D_2: null,
    $2E_2: null,
    $Bc_0: function() {
        if (!this.$9_0) return false;
        this.$P_2.focus();
        return true
    },
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt) ? "" : this.get_properties().Alt,
            $v_1 = CUI.ScriptUtility.isNullOrUndefined(this.get_properties().AltArrow)
                ? $v_0
                : this.get_properties().AltArrow,
            $v_2 = true;
        if (CUI.ScriptUtility.isNullOrEmptyString($v_1) &&
            !CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .ToolTipTitle)) $v_1 = this.get_properties().ToolTipTitle;
        var $v_3 = null;
        switch ($p0) {
        case "Text":
        case "Medium":
            this.$C_2 = CUI.Utility.$5("span");
            this.$C_2.className = "ms-cui-dd";
            this.$C_2.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$h_2 = CUI.Utility.$5("span");
            this.$h_2.className = "ms-cui-dd-text";
            this.$h_2.style.width = this.get_properties().Width;
            var $v_4 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
            if (CUI.ScriptUtility.isNullOrUndefined($v_4)) $v_4 = this.get_properties().InitialItem;
            !CUI.ScriptUtility.isNullOrUndefined($v_4) && this.$3b_2($v_4);
            this.$P_2 = CUI.Utility.$5("a");
            this.$P_2.setAttribute("role", this.get_$4y_0());
            this.$P_2.setAttribute("aria-haspopup", true);
            CUI.Utility.ensureCSSClassOnElement(this.$P_2, "ms-cui-dd-arrow-button");
            CUI.Utility.$2Y(this.get_properties(), this.$P_2);
            CUI.Utility.$2k(this.$P_2);
            this.$P_2.id = this.$6_0;
            this.$2D_2 = CUI.Utility.$5("img");
            this.$2E_2 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$2D_2,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ToolTipTitle)) {
                this.$P_2.setAttribute("title", $v_1);
                this.$h_2.title = $v_0;
                this.$2D_2.alt = $v_1;
                $v_2 = false
            }
            this.$Ex_0("Medium");
            this.$C_2.appendChild(this.$h_2);
            this.$C_2.appendChild(this.$P_2);
            this.$P_2.appendChild(this.$2E_2);
            if ($v_2) {
                $v_3 = CUI.Utility.$49($v_1);
                this.$P_2.appendChild($v_3)
            }
            return this.$C_2;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Text":
        case "Medium":
            this.$C_2 = $v_0;
            this.$h_2 = $v_0.childNodes[0];
            this.$P_2 = $v_0.childNodes[1];
            this.$2E_2 = this.$P_2.childNodes[0];
            this.$2D_2 = this.$2E_2.childNodes[0];
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Text":
        case "Medium":
            this.$g_2();
            break
        }
    },
    $g_2: function() {
        $addHandler(this.$C_2, "click", this.$$d_onArrowButtonClick);
        $addHandler(this.$C_2, "keypress", this.$$d_onArrowButtonKeyPress);
        $addHandler(this.$P_2, "mouseover", this.$$d_onArrowButtonFocus);
        $addHandler(this.$P_2, "mouseout", this.$$d_onArrowButtonBlur);
        $addHandler(this.$P_2, "focus", this.$$d_onArrowButtonKeyboardFocus);
        $addHandler(this.$P_2, "blur", this.$$d_onArrowButtonBlur)
    },
    onEnabledChanged: function($p0) {
        if ($p0) CUI.Utility.enableElement(this.$C_2);
        else CUI.Utility.disableElement(this.$C_2)
    },
    get_$CH_0: function() { return "DropDown" },
    $4E_0: function($p0) {
        if ($p0.$M_1 === 3) {
            var $v_0 = $p0.$41_1;
            if (!CUI.ISelectableControl.isInstanceOfType($v_0
                .$W_1)) return CUI.MenuLauncher.prototype.$4E_0.call(this, $p0);
            var $v_1 = $v_0.$W_1;
            !CUI.ScriptUtility.isNullOrUndefined(this._selectedControl) && this._selectedControl.deselect();
            this.selectMenuItem($v_1)
        }
        if ($p0.$M_1 === 3 || $p0.$M_1 === 7 || $p0.$M_1 === 8) {
            var $v_2;
            switch ($p0.$M_1) {
            case 3:
                $v_2 = this.get_properties().Command;
                break;
            case 7:
                $v_2 = this.get_properties().CommandPreview;
                break;
            case 8:
                $v_2 = this.get_properties().CommandRevert;
                break;
            default:
                $v_2 = this.get_properties().Command;
                break
            }
            this.get_displayedComponent().raiseCommandEvent($v_2, $p0.$M_1, $p0.$3w_1);
            CUI.MenuLauncher.prototype.$4E_0.call(this, $p0);
            return false
        }
        return CUI.MenuLauncher.prototype.$4E_0.call(this, $p0)
    },
    selectMenuItem: function($p0) {
        if (this._selectedControl === $p0) return;
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_0;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().SelectedItemDisplayMode)) $v_0 = "Text";
        else $v_0 = this.get_properties().SelectedItemDisplayMode;
        var $v_1;
        if ($v_0 === "Text") {
            var $v_2 = $p0.getTextValue();
            $v_1 = CUI.Utility.$5("a");
            CUI.UIUtility.setInnerText($v_1, $v_2)
        } else $v_1 = this._selectedControl.getDropDownDOMElementForDisplayMode($v_0);
        if (this.$h_2.hasChildNodes()) {
            var $v_3 = this.$h_2.firstChild;
            this.$h_2.replaceChild($v_1, $v_3)
        } else this.$h_2.appendChild($v_1)
    },
    _itemEverSelected: false,
    $3b_2: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined($p0) || CUI.ScriptUtility.isNullOrUndefined(this.$F_1)) return false;
        var $v_0 = this.$F_1.$DE_1($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        this.selectMenuItem($v_0);
        this._itemEverSelected = true;
        return true
    },
    addDisplayModes: function() {
        this.addDisplayMode("Medium");
        this.addDisplayMode("Text")
    },
    onArrowButtonClick: function($p0) {
        var $v_0 = this.$9_0;
        $v_0 && CUI.PMetrics.perfMark(7192);
        this.$n_0();
        $p0.preventDefault();
        if (!$v_0) return;
        this.$0_0.set_$1I_1(this);
        this.launchMenuInternal($p0);
        CUI.PMetrics.perfMark(7193)
    },
    launchMenuInternal: function($p0) {
        this.launchMenu(this.$P_2, this.$$d_sendMenuCreationCommandEvent) && this.sendMenuCreationCommandEvent()
    },
    sendMenuCreationCommandEvent: function() {
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuOpen, 4, null)
    },
    onBeginFocus: function() {
        var $v_0 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
            if (CUI.ScriptUtility.isNullOrUndefined($v_1)) $v_1 = this.get_properties().InitialItem;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && !CUI.ScriptUtility.isNullOrUndefined(this.$F_1)) {
                var $v_2 = this.$F_1.$DE_1($v_1);
                if (!CUI.ScriptUtility.isNullOrUndefined($v_2)) $v_0 = $v_2.getTextValue()
            }
        }
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.get_properties().ToolTipSelectedItemTitle = $v_0;
        CUI.Control.prototype.onBeginFocus.call(this)
    },
    onArrowButtonKeyboardFocus: function($p0) {
        this.$0_0.set_$1I_1(this);
        this.onArrowButtonFocus($p0)
    },
    onArrowButtonFocus: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        this.highlight()
    },
    onArrowButtonBlur: function($p0) {
        this.onEndFocus();
        if (!this.$9_0 || this.$t_1) return;
        this.removeHighlight()
    },
    onArrowButtonKeyPress: function($p0) {
        this.$n_0();
        if (!this.$9_0) return;
        var $v_0 = $p0.rawEvent.keyCode;
        if ($v_0 === 13 || $v_0 === 32 || $v_0 === 40) {
            this.$1D_1 = true;
            this.launchMenuInternal($p0)
        }
    },
    highlight: function() { CUI.Utility.ensureCSSClassOnElement(this.$P_2, "ms-cui-ctl-light-hoveredOver") },
    removeHighlight: function() { CUI.Utility.removeCSSClassFromElement(this.$P_2, "ms-cui-ctl-light-hoveredOver") },
    onLaunchedMenuClosed: function() {
        this.$n_0();
        this.removeHighlight();
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this)
    },
    $Ih_0: function() {
        var $v_0 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0))
            this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = this.get_properties()
                .InitialItem;
        this.pollForStateAndUpdateInternal(this.get_properties().Command,
            this.get_properties().QueryCommand,
            this.get_stateProperties(),
            false);
        var $v_1 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) {
            if ($v_0 !== $v_1 || !this._itemEverSelected)
                if (!this.$3b_2($v_1)) throw Error.create("The menu item id requested via polling does not exist")
        } else if (!CUI.ScriptUtility.isNullOrUndefined(this.get_stateProperties()[CUI.Controls
            .DropDownCommandProperties.Value])) {
            var $v_2 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.Value];
            this.$h_2.innerHTML = "<a>" + CUI.Utility.$57($v_2) + "</a>"
        }
    },
    dispose: function() {
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$C_2 = null;
        this.$2D_2 = null;
        this.$2E_2 = null;
        this.$P_2 = null;
        this.$h_2 = null
    },
    get_properties: function() { return this.$7_0 }
};
CUI.Controls.FlyoutAnchor = function($p0, $p1, $p2, $p3) {
    this.$$d_$II_2 = Function.createDelegate(this, this.$II_2);
    this.$$d_$IH_2 = Function.createDelegate(this, this.$IH_2);
    this.$$d_$IJ_2 = Function.createDelegate(this, this.$IJ_2);
    this.$$d_$45_2 = Function.createDelegate(this, this.$45_2);
    this.$$d_$9F_2 = Function.createDelegate(this, this.$9F_2);
    this.$$d_$9G_2 = Function.createDelegate(this, this.$9G_2);
    this.$$d_$6O_2 = Function.createDelegate(this, this.$6O_2);
    this.$$d_$IS_2 = Function.createDelegate(this, this.$IS_2);
    this.$$d_$IR_2 = Function.createDelegate(this, this.$IR_2);
    this.$$d_$IZ_2 = Function.createDelegate(this, this.$IZ_2);
    this.$$d_$Dp_2 = Function.createDelegate(this, this.$Dp_2);
    this.$$d_$7T_2 = Function.createDelegate(this, this.$7T_2);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.FlyoutAnchor.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.addDisplayMode("Menu");
    this.addDisplayMode("Menu16");
    this.addDisplayMode("Menu32");
    this.addDisplayMode("Small");
    this.addDisplayMode("Medium");
    this.addDisplayMode("Large");
    this.addDisplayMode("Thin")
};
CUI.Controls.FlyoutAnchor.prototype = {
    $6p_2: null,
    $6q_2: null,
    $4Y_2: null,
    $5V_2: null,
    $7z_2: null,
    $5W_2: null,
    $80_2: null,
    $r_2: null,
    $a_2: null,
    $i_2: null,
    $K_2: null,
    $9d_2: null,
    $1y_2: null,
    $C_2: null,
    $9f_2: null,
    $2C_2: null,
    $D_2: null,
    $9i_2: null,
    $2G_2: null,
    $21_2: null,
    $4a_2: null,
    $5Z_2: null,
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().Alt)
            ? this.get_$2_2().LabelText
            : this.get_$2_2().Alt;
        switch ($p0) {
        case "Menu":
            this.$r_2 = this.createMenuDOMElement("Menu",
                "ms-cui-textmenuitem ms-cui-fa-menuitem ms-cui-ctl-menu",
                $v_0,
                null,
                null,
                null,
                null);
            this.$Ex_0($p0);
            this.$r_2.setAttribute("aria-haspopup", true);
            return this.$r_2;
        case "Menu16":
            this.$a_2 = this.createMenuDOMElement("Menu16",
                "ms-cui-fa-menuitem ms-cui-ctl-menu",
                $v_0,
                this.get_$2_2().Image16by16,
                this.get_$2_2().Image16by16Class,
                this.get_$2_2().Image16by16Top,
                this.get_$2_2().Image16by16Left);
            this.$Ex_0($p0);
            this.$a_2.setAttribute("aria-haspopup", true);
            return this.$a_2;
        case "Menu32":
            this.$i_2 = this.createMenuDOMElement("Menu32",
                "ms-cui-fa-menuitem ms-cui-ctl-menu",
                $v_0,
                this.get_$2_2().Image32by32,
                this.get_$2_2().Image32by32Class,
                this.get_$2_2().Image32by32Top,
                this.get_$2_2().Image32by32Left);
            this.$i_2.setAttribute("aria-haspopup", true);
            this.$Ex_0($p0);
            return this.$i_2;
        case "Large":
            this.$K_2 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Large", this.get_$2_2(), false, true);
            this.$K_2.setAttribute("aria-haspopup", true);
            this.$89_2 && CUI.Utility.ensureCSSClassOnElement(this.$K_2, "ms-cui-ctl-large-groupPopup");
            this.$Ex_0("Large");
            return this.$K_2;
        case "Medium":
            this.$C_2 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Medium", this.get_$2_2(), false, true);
            this.$Ex_0("Medium");
            this.$C_2.setAttribute("aria-haspopup", true);
            return this.$C_2;
        case "Small":
            this.$D_2 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Small", this.get_$2_2(), false, true);
            this.$Ex_0("Small");
            this.$D_2.setAttribute("aria-haspopup", true);
            return this.$D_2;
        case "Thin":
            this.$21_2 = CUI.Utility.$7J();
            this.$21_2.className = "ms-cui-ctl-thin";
            this.$4a_2 = CUI.Utility.$5("img");
            this.$4a_2.alt = "";
            if (CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_2().ToolTipTitle)) {
                this.$21_2.title = $v_0;
                this.$4a_2.alt = $v_0
            }
            var $v_1 = this.$0_0;
            this.$5Z_2 = CUI.Utility.$w(2,
                1,
                $v_1.$7_1.ImageDownArrow,
                $v_1.$7_1.ImageDownArrowClass,
                this.$4a_2,
                true,
                false,
                $v_1.$7_1.ImageDownArrowTop,
                $v_1.$7_1.ImageDownArrowLeft);
            this.$21_2.appendChild(this.$5Z_2);
            this.$Ex_0("Thin");
            this.$21_2.setAttribute("aria-haspopup", true);
            return this.$21_2;
        default:
            this.ensureValidDisplayMode($p0);
            break
        }
        return null
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        !CUI.ScriptUtility.isNullOrUndefined($v_0) && this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Large":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$K_2 = $v_0;
            this.$9d_2 = this.$K_2.childNodes[0].childNodes[0];
            this.$1y_2 = this.$K_2.lastChild.lastChild.childNodes[0];
            break;
        case "Medium":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$C_2 = $v_0;
            this.$9f_2 = this.$C_2.childNodes[0].childNodes[0];
            this.$2C_2 = this.$C_2.lastChild.lastChild.childNodes[0];
            break;
        case "Small":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$D_2 = $v_0;
            this.$9i_2 = this.$D_2.childNodes[0].childNodes[0];
            this.$2G_2 = this.$D_2.lastChild.lastChild.childNodes[0];
            break;
        case "Thin":
            this.$21_2 = $v_0;
            this.$5Z_2 = $v_0.firstChild;
            this.$4a_2 = this.$5Z_2.firstChild;
            break
        }
    },
    get_$CH_0: function() { return "FlyoutAnchor" },
    createMenuDOMElement: function($p0, $p1, $p2, $p3, $p4, $p5, $p6) {
        var $v_0 = CUI.Utility.$7J();
        $v_0.className = $p1;
        $v_0.title = $p2;
        $v_0.setAttribute("mscui:controltype", this.get_$CH_0());
        CUI.Utility.$2Y(this.get_$2_2(), $v_0);
        var $v_1 = null;
        switch ($p0) {
        case "Menu16":
            if (CUI.ScriptUtility.isNullOrUndefined(this.$5V_2)) {
                this.$5V_2 = CUI.Utility.$5("img");
                this.$7z_2 = CUI.Utility.$w(2, 3, $p3, $p4, this.$5V_2, true, true, $p5, $p6);
                this.$5V_2.alt = $p2;
                $v_1 = this.$7z_2
            }
            break;
        case "Menu32":
            if (CUI.ScriptUtility.isNullOrUndefined(this.$5W_2)) {
                this.$5W_2 = CUI.Utility.$5("img");
                this.$80_2 = CUI.Utility.$w(2, 4, $p3, $p4, this.$5W_2, true, true, $p5, $p6);
                this.$5W_2.alt = $p2;
                $v_1 = this.$80_2
            }
            break
        }
        this.createMenuLabelDOMElementIfNeeded($p0);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$6p_2)) {
            this.$6p_2 = CUI.Utility.$5("img");
            this.$6q_2 = CUI.Utility.$w(2,
                2,
                this.$0_0.$7_1.ImageSideArrow,
                this.$0_0.$7_1.ImageSideArrowClass,
                this.$6p_2,
                false,
                true,
                this.$0_0.$7_1.ImageSideArrowTop,
                this.$0_0.$7_1.ImageSideArrowLeft);
            CUI.Utility.ensureCSSClassOnElement(this.$6q_2, "ms-cui-fa-menu-arrow")
        }
        if ($v_1) {
            var $v_2 = CUI.Utility.$5("span");
            $v_2.className = "ms-cui-ctl-iconContainer";
            $v_2.appendChild($v_1);
            $v_0.appendChild($v_2)
        }
        $v_0.appendChild(this.$4Y_2);
        $v_0.appendChild(this.$6q_2);
        return $v_0
    },
    createMenuLabelDOMElementIfNeeded: function($p0) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$4Y_2)) {
            this.$4Y_2 = CUI.Utility.$5("span");
            this.$4Y_2.className = "ms-cui-ctl-mediumlabel";
            CUI.UIUtility.setInnerText(this.$4Y_2, this.get_$2_2().LabelText)
        }
    },
    $Ex_0: function($p0) {
        var $v_0 = this.getDisplayedDOMElement($p0);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        var $v_1 = { click: this.$$d_onClick, blur: this.$$d_$7T_2, keypress: this.$$d_$Dp_2, focus: this.$$d_$IZ_2 },
            $v_2;
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer)
            if ($p0.startsWith("Menu")) $v_2 = { mouseenter: this.$$d_$IR_2, mouseleave: this.$$d_$IS_2 };
            else $v_2 = { mouseenter: this.$$d_$6O_2, mouseleave: this.$$d_$7T_2 };
        else if ($p0.startsWith("Menu")) $v_2 = { mouseover: this.$$d_$9G_2, mouseout: this.$$d_$9F_2 };
        else $v_2 = { mouseover: this.$$d_$6O_2, mouseout: this.$$d_$7T_2 };
        $addHandlers($v_0, $v_1);
        $addHandlers($v_0, $v_2)
    },
    onEnabledChanged: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$r_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$a_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$i_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$K_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$C_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$D_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$21_2, $p0)
    },
    positionMenu: function($p0, $p1) {
        if (this.get_displayedComponent().get_displayMode().startsWith("Menu")) this.$0_0.$Im_1($p0, $p1);
        else CUI.MenuLauncher.prototype.positionMenu.call(this, $p0, $p1)
    },
    createComponentForDisplayModeInternal: function($p0) {
        var $v_0;
        if ($p0.startsWith("Menu")) $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
        else $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        return $v_0
    },
    getDisplayedDOMElement: function($p0) {
        switch ($p0) {
        case "Menu":
            return this.$r_2;
        case "Menu16":
            return this.$a_2;
        case "Menu32":
            return this.$i_2;
        case "Large":
            return this.$K_2;
        case "Medium":
            return this.$C_2;
        case "Small":
            return this.$D_2;
        case "Thin":
            return this.$21_2;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    onClick: function($p0) {
        var $v_0 = this.$9_0;
        $v_0 && !this.$t_1 && CUI.PMetrics.perfMark(7190);
        this.$n_0();
        $p0.preventDefault();
        if (!$v_0 || this.$t_1) return;
        this.$0_0.set_$7R_1(this);
        var $v_1 = this.get_displayedComponent(), $v_2 = $v_1.get_$3_0();
        this.$9B_2($v_2);
        !CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().Command) &&
            $v_1.raiseCommandEvent(this.get_$2_2().Command, 4, null);
        CUI.PMetrics.perfMark(7191)
    },
    $6O_2: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return
    },
    $IR_2: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0 || this.$t_1) return;
        var $v_0 = this.get_displayedComponent(), $v_1 = $v_0.get_$3_0();
        this.$9B_2($v_1);
        var $v_2 = this.get_$2_2().Command;
        !CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_0.raiseCommandEvent($v_2, 4, null)
    },
    $9G_2: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0 || this.$t_1) return;
        var $v_0 = $p0.target;
        while ($v_0.nodeType !== 1 || $v_0.tagName.toLowerCase() !== "a") $v_0 = $v_0.parentNode;
        var $v_1 = $p0.rawEvent.relatedTarget;
        if (!($v_0 === this.$r_2 || $v_0 === this.$a_2 || $v_0 === this.$i_2)) return;
        while ($v_1 !== $v_0) {
            try {
                if ($v_1.nodeName.toLowerCase() === "body") break
            } catch ($$e_3) {
                break
            }
            $v_1 = $v_1.parentNode
        }
        if ($v_1 === $v_0) return;
        var $v_2 = this.get_displayedComponent(), $v_3 = $v_2.get_$3_0();
        this.$9B_2($v_3);
        var $v_4 = this.get_$2_2().Command;
        !CUI.ScriptUtility.isNullOrUndefined($v_4) && $v_2.raiseCommandEvent($v_4, 4, null)
    },
    $IJ_2: function($p0) {
        var $v_0 = Array.indexOf(this.$0_0.$j_1, this), $v_1 = this.$0_0.$3x_1;
        if ($v_1 !== -1 && $v_0 >= this.$0_0.$5u_1) {
            window.clearTimeout($v_1);
            this.$0_0.$3x_1 = -1;
            this.$0_0.$5u_1 = -1
        }
    },
    $IZ_2: function($p0) {
        this.onBeginFocus();
        this.get_displayedComponent().get_displayMode().startsWith("Menu") && this.$56_2(this.$9_0);
        this.$9_0 && this.$0_0.set_$1I_1(this)
    },
    $7T_2: function($p0) {
        this.onEndFocus();
        if (this.$t_1) return;
        this.$1t_2()
    },
    $IS_2: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (this.$t_1) {
            for (var $v_0 = Array.indexOf(this.$0_0
                         .$j_1,
                         this),
                $v_1 = $v_0;
                $v_1 < this.$0_0.$j_1.length;
                $v_1++)
                if (CUI.Utility.isDescendantOf(this.$0_0.$j_1[$v_1].$F_1.get_$3_0(), $p0.rawEvent.toElement)) return;
            this.$9P_2()
        }
        this.$1t_2()
    },
    $IH_2: function($p0) {
        this.onEndFocus();
        if (CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), $p0.rawEvent.toElement)) return;
        if (this.$t_1) {
            for (var $v_0 = Array.indexOf(this.$0_0
                         .$j_1,
                         this),
                $v_1 = $v_0;
                $v_1 < this.$0_0.$j_1.length;
                $v_1++)
                if (CUI.Utility.isDescendantOf(this.$0_0.$j_1[$v_1].$F_1.get_$3_0(), $p0.rawEvent.toElement)) return;
            this.$9P_2()
        }
    },
    $9F_2: function($p0) {
        this.onEndFocus();
        if (!this.$9_0 ||
            CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), $p0.rawEvent.relatedTarget)) return;
        if (this.$t_1) {
            for (var $v_0 = Array.indexOf(this.$0_0
                         .$j_1,
                         this),
                $v_1 = $v_0;
                $v_1 < this.$0_0.$j_1.length;
                $v_1++)
                if (CUI.Utility.isDescendantOf(this.$0_0.$j_1[$v_1].$F_1
                    .get_$3_0(),
                    $p0.rawEvent.relatedTarget)) return;
            this.$9P_2()
        }
    },
    $II_2: function($p0) {
        this.onEndFocus();
        if (CUI.Utility.isDescendantOf(this.get_displayedComponent().get_$3_0(), $p0.rawEvent.relatedTarget)) return;
        if (this.$t_1) {
            for (var $v_0 = Array.indexOf(this.$0_0
                         .$j_1,
                         this),
                $v_1 = $v_0;
                $v_1 < this.$0_0.$j_1.length;
                $v_1++)
                if (CUI.Utility.isDescendantOf(this.$0_0.$j_1[$v_1].$F_1
                    .get_$3_0(),
                    $p0.rawEvent.relatedTarget)) return;
            this.$9P_2()
        }
        this.$1t_2()
    },
    $Dp_2: function($p0) {
        this.$n_0();
        if (!this.$9_0) return;
        var $v_0 = $p0.rawEvent.keyCode;
        if (this.$t_1)
            (!this.$0_0._textDirection && $v_0 === 39 || this.$0_0._textDirection === 1 && $v_0 === 37) &&
                this.$F_1.$Aj_0();
        else if ($v_0 === 13 ||
            $v_0 === 32 ||
            (!this.$0_0._textDirection && $v_0 === 39 || this.$0_0._textDirection === 1 && $v_0 === 37) &&
            (!$p0.ctrlKey || !$p0.shiftKey)) {
            this.$1D_1 = true;
            var $v_1 = this.get_displayedComponent(), $v_2 = $v_1.get_$3_0(), $v_3 = this.get_$2_2().Command;
            !CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_1.raiseCommandEvent($v_3, 4, null);
            this.$9B_2($v_2)
        }
    },
    $84_2: false,
    onModalKeyPress: function($p0) {
        if ($p0)
            if ($p0.rawEvent)
                if ((!this.$0_0._textDirection && $p0.rawEvent.keyCode === 37 ||
                        this.$0_0._textDirection === 1 && $p0.rawEvent.keyCode === 39) &&
                    this.get_displayedComponent().get_displayMode().startsWith("Menu") ||
                    $p0.rawEvent.keyCode === 27) {
                    this.$0_0.$45_1(this);
                    return
                }
        if (this.$89_2) {
            if (this.$84_2) return;
            if (this.$F_1.$Bd_0()) this.$84_2 = true;
            $p0.preventDefault()
        } else CUI.MenuLauncher.prototype.onModalKeyPress.call(this, $p0)
    },
    onModalBodyClick: function($p0) { this.$0_0.$69_1() },
    onLaunchedMenuClosed: function() {
        var $v_0 = this.$0_0.$3x_1;
        $v_0 !== -1 && window.clearTimeout($v_0);
        this.$0_0.$3x_1 = -1;
        this.$0_0.$5u_1 = -1;
        this.$1t_2();
        this.$n_0();
        var $v_1 = this.get_displayedComponent();
        if ($v_1.get_displayMode().startsWith("Menu")) {
            var $v_2 = $v_1.$U_0.$U_0;
            $v_2.set_$Dy_1(null)
        }
        $v_1.raiseCommandEvent(this.get_$2_2().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this)
    },
    $9P_2: function() {
        var $v_0 = this.$0_0.$3x_1;
        $v_0 !== -1 && window.clearTimeout($v_0);
        if (null === this.$7g_2) this.$7g_2 = this.$$d_$45_2;
        this.$0_0.$5u_1 = Array.indexOf(this.$0_0.$j_1, this);
        this.$0_0.$3x_1 = window.setTimeout(this.$7g_2, 500)
    },
    $7g_2: null,
    $45_2: function() {
        this.$0_0.$45_1(this);
        this.$0_0.$3x_1 = -1;
        this.$0_0.$5u_1 = -1
    },
    $8S_2: null,
    $8Q_2: null,
    $8R_2: null,
    $9B_2: function($p0) {
        this.$n_0();
        this.$56_2(true);
        this.$0_0.$3n_1 = false;
        this.$84_2 = false;
        var $v_0 = this.get_displayedComponent(), $v_1 = $v_0.get_displayMode().startsWith("Menu");
        if ($v_1) {
            var $v_2 = $v_0.$U_0.$U_0;
            $v_2.set_$Dy_1(this)
        }
        this.launchMenu($p0);
        if (!$v_1) return;
        if (null === this.$8S_2) this.$8S_2 = this.$$d_$IJ_2;
        $addHandler(this.$F_1.get_$3_0(), "mouseover", this.$8S_2);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            if (null === this.$8Q_2) this.$8Q_2 = this.$$d_$IH_2;
            $addHandler(this.$F_1.get_$3_0(), "mouseleave", this.$8Q_2)
        } else {
            if (null === this.$8R_2) this.$8R_2 = this.$$d_$II_2;
            $addHandler(this.$F_1.get_$3_0(), "mouseout", this.$8R_2)
        }
    },
    $1t_2: function() {
        var $v_0 = "ms-cui-ctl-disabledHoveredOver", $v_1 = "ms-cui-ctl-hoveredOver";
        CUI.Utility.removeCSSClassFromElement(this.$r_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$a_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$i_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$K_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$C_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$D_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$21_2, $v_1);
        CUI.Utility.removeCSSClassFromElement(this.$r_2, $v_0);
        CUI.Utility.removeCSSClassFromElement(this.$a_2, $v_0);
        CUI.Utility.removeCSSClassFromElement(this.$i_2, $v_0)
    },
    $56_2: function($p0) {
        var $v_0 = "ms-cui-ctl-hoveredOver";
        if (!$p0) {
            $v_0 = "ms-cui-ctl-disabledHoveredOver";
            CUI.Utility.ensureCSSClassOnElement(this.$r_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$a_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$i_2, $v_0)
        } else {
            CUI.Utility.ensureCSSClassOnElement(this.$r_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$a_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$i_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$K_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$C_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$D_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$21_2, $v_0)
        }
    },
    $89_2: false,
    getTextValue: function() { return this.get_$2_2().LabelText },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        this.receiveFocus();
        return true
    },
    receiveFocus: function() {
        var $v_0 = this.get_displayedComponent().get_$3_0();
        !CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0.focus()
    },
    onMenuClosed: function() { this.$1t_2() },
    dispose: function() {
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$21_2 = null;
        this.$4a_2 = null;
        this.$5Z_2 = null;
        this.$K_2 = null;
        this.$1y_2 = null;
        this.$9d_2 = null;
        this.$C_2 = null;
        this.$2C_2 = null;
        this.$9f_2 = null;
        this.$r_2 = null;
        this.$a_2 = null;
        this.$i_2 = null;
        this.$6p_2 = null;
        this.$6q_2 = null;
        this.$5V_2 = null;
        this.$7z_2 = null;
        this.$5W_2 = null;
        this.$80_2 = null;
        this.$4Y_2 = null;
        this.$D_2 = null;
        this.$2G_2 = null;
        this.$9i_2 = null
    },
    get_$2_2: function() { return this.$7_0 }
};
CUI.Controls.GalleryButtonCommandProperties = function() {};
CUI.Controls.GalleryButton = function($p0, $p1, $p2, $p3) {
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_onFocus = Function.createDelegate(this, this.onFocus);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    CUI.Controls.GalleryButton.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Large");
    this.addDisplayMode("Menu");
    this.$5H_1 = $p3
};
CUI.Controls.GalleryButton.prototype = {
    $J_1: null,
    $O_1: null,
    $5L_1: null,
    $5M_1: null,
    $5H_1: 0,
    createComponentForDisplayModeInternal: function($p0) {
        var $v_0;
        if ($p0 === "Menu") {
            $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
            if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .CommandValueId)) this.get_properties().CommandValueId = this.get_properties().MenuItemId
        } else $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        return $v_0
    },
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Large":
        case "Menu":
            var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt) ? "" : this.get_properties().Alt;
            this.$J_1 = CUI.Utility.$5("span");
            this.$J_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$J_1.className = "ms-cui-gallerybutton ms-cui-gallerybutton-" + CUI.Utility.$Co[this.$5H_1];
            this.$O_1 = CUI.Utility.$5("a");
            this.$O_1.title = $v_0;
            this.$O_1.className = "ms-cui-gallerybutton-a";
            CUI.Utility.$2k(this.$O_1);
            CUI.Utility.$2Y(this.get_properties(), this.$O_1);
            this.$J_1.appendChild(this.$O_1);
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties().InnerHTML)) {
                this.$O_1.innerHTML = this.get_properties().InnerHTML;
                CUI.Utility.$35(this.$O_1, true, true)
            } else {
                if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                    .Image)) throw Error.create("InnerHTML or Image must be defined for this GalleryButton");
                var $v_1 = 4;
                switch (this.$5H_1) {
                case 1:
                    $v_1 = 3;
                    break;
                case 2:
                    $v_1 = 4;
                    break;
                case 3:
                    $v_1 = 5;
                    break;
                case 4:
                    $v_1 = 6;
                    break;
                case 5:
                    $v_1 = 7;
                    break;
                case 6:
                    $v_1 = 8;
                    break;
                case 7:
                    $v_1 = 9;
                    break
                }
                this.$5L_1 = CUI.Utility.$5("img");
                this.$5M_1 = CUI.Utility.$w(2,
                    $v_1,
                    this.get_properties().Image,
                    this.get_properties().ImageClass,
                    this.$5L_1,
                    true,
                    false,
                    this.get_properties().ImageTop,
                    this.get_properties().ImageLeft);
                this.$5L_1.alt = $v_0;
                this.$O_1.appendChild(this.$5M_1)
            }
            this.$Ex_0($p0);
            return this.$J_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Large":
        case "Menu":
            this.$J_1 = $v_0;
            this.$O_1 = this.$J_1.childNodes[0];
            this.$5M_1 = this.$O_1.childNodes[0];
            this.$5L_1 = this.$5M_1.childNodes[0];
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Large":
        case "Menu":
            this.$g_1();
            break
        }
    },
    $g_1: function() {
        $addHandler(this.$O_1, "click", this.$$d_onClick);
        $addHandler(this.$O_1, "focus", this.$$d_onFocus);
        $addHandler(this.$O_1, "mouseover", this.$$d_onFocus);
        $addHandler(this.$O_1, "blur", this.$$d_onBlur);
        $addHandler(this.$O_1, "mouseout", this.$$d_onBlur)
    },
    get_$CH_0: function() { return "GalleryButton" },
    onEnabledChanged: function($p0) {
        if ($p0) CUI.Utility.enableElement(this.$O_1);
        else CUI.Utility.disableElement(this.$O_1)
    },
    onClick: function($p0) {
        this.$n_0();
        $p0.preventDefault();
        if (!this.$9_0) return;
        this.toggle();
        var $v_0 = 1, $v_1 = this.get_properties().CommandType, $v_2 = this.get_stateProperties();
        $v_2[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        $v_2["MenuItemId"] = this.get_properties().MenuItemId;
        $v_2["SourceControlId"] = this.get_properties().Id;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") $v_0 = 3;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().Command, $v_0, $v_2);
        if (this.$0_0.get_$7V_1()) this.$Ih_0();
        else this.$7Z_1(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On])
    },
    onFocus: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        this.$0_0.set_$1I_1(this);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().CommandPreview)) return;
        var $v_0 = 5, $v_1 = this.get_properties().CommandType;
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties()
            .CommandValueId;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") $v_0 = 7;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandPreview,
            $v_0,
            this.get_stateProperties())
    },
    onBlur: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().CommandRevert)) return;
        var $v_0 = 6, $v_1 = this.get_properties().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") {
            $v_0 = 8;
            this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this
                .get_properties().CommandValueId
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandRevert,
            $v_0,
            this.get_stateProperties())
    },
    getDropDownDOMElementForDisplayMode: function($p0) { return CUI.Utility.$5("span") },
    deselect: function() { this.set_selected(false) },
    getMenuItemId: function() { return this.get_properties().MenuItemId },
    getCommandValueId: function() { return this.get_properties().CommandValueId },
    focusOnDisplayedComponent: function() { this.receiveFocus() },
    getTextValue: function() { return this.get_properties().Alt },
    receiveFocus: function() { this.$O_1.focus() },
    onMenuClosed: function() { CUI.Control.prototype.onMenuClosed.call(this) },
    $56_1: function() { CUI.Utility.ensureCSSClassOnElement(this.$J_1, "ms-cui-gallerybutton-highlighted") },
    $1t_1: function() { CUI.Utility.removeCSSClassFromElement(this.$J_1, "ms-cui-gallerybutton-highlighted") },
    toggle: function() {
        var $v_0 = !this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On];
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On] = $v_0;
        this.$7Z_1($v_0)
    },
    $7Z_1: function($p0) {
        if ($p0) this.$56_1();
        else this.$1t_1()
    },
    $Ih_0: function() {
        var $v_0 = this.get_stateProperties();
        $v_0[CUI.Controls.GalleryButtonCommandProperties.CommandValueId] = this.get_properties().CommandValueId;
        $v_0["MenuItemId"] = this.get_properties().MenuItemId;
        $v_0["SourceControlId"] = this.get_properties().Id;
        var $v_1 = this.pollForStateAndUpdateInternal(this.get_properties().Command,
            this.get_properties().QueryCommand,
            $v_0,
            false);
        $v_1 && this.$7Z_1(this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On])
    },
    get_selected: function() { return this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On] },
    set_selected: function($p0) {
        this.get_stateProperties()[CUI.Controls.GalleryButtonCommandProperties.On] = $p0;
        if ($p0) this.$56_1();
        else this.$1t_1();
        return $p0
    },
    get_elementDimensions: function() { return this.$5H_1 },
    set_elementDimensions: function($p0) {
        this.$5H_1 = $p0;
        return $p0
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$J_1 = null;
        this.$O_1 = null;
        this.$5L_1 = null;
        this.$5M_1 = null
    },
    get_properties: function() { return this.$7_0 }
};
CUI.Controls.InsertTableCommandProperties = function() {};
CUI.Controls.InsertTable = function($p0, $p1, $p2) {
    this.$$d_$Dl_1 = Function.createDelegate(this, this.$Dl_1);
    this.$$d_$Dn_1 = Function.createDelegate(this, this.$Dn_1);
    this.$$d_$Dm_1 = Function.createDelegate(this, this.$Dm_1);
    this.$$d_$I6_1 = Function.createDelegate(this, this.$I6_1);
    this.$2M_1 = -1;
    this.$6Q_1 = -1;
    this.$6R_1 = -1;
    CUI.Controls.InsertTable.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Menu")
};
CUI.Controls.InsertTable.prototype = {
    $2v_1: null,
    $5s_1: null,
    createComponentForDisplayModeInternal: function($p0) {
        if (this.$k_0.length > 0)
            throw Error.create("Only one ControlComponent can be created for each InsertTable Control");
        var $v_0;
        $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
        return $v_0
    },
    $J_1: null,
    $3i_1: null,
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Menu":
            this.$J_1 = CUI.Utility.$5("table");
            this.$J_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$3i_1 = CUI.Utility.$5("tbody");
            this.$3i_1.className = "ms-cui-it";
            this.$J_1.setAttribute("cellspacing", "0");
            this.$J_1.setAttribute("cellpadding", "0");
            this.$3i_1.setAttribute("cellspacing", "0");
            this.$3i_1.setAttribute("cellpadding", "0");
            $addHandler(this.$J_1, "mouseout", this.$$d_$I6_1);
            this.$G3_1();
            for (var $v_0, $v_1, $v_2, $v_3, $v_4, $v_5 = 0, $v_6 = 0; $v_6 < 10; $v_6++) {
                $v_0 = CUI.Utility.$5("tr");
                this.$3i_1.appendChild($v_0);
                for (var $v_7 = 0; $v_7 < 10; $v_7++) {
                    $v_1 = CUI.Utility.$5("td");
                    $v_1.style.padding = "0px";
                    $v_0.appendChild($v_1);
                    $v_2 = CUI.Utility.$5("a");
                    CUI.Utility.$2k($v_2);
                    CUI.Utility.$2Y(this.get_$2_1(), $v_2);
                    $addHandler($v_2, "focus", this.$$d_$Dm_1);
                    $v_3 = CUI.Utility.$5("div");
                    $v_3.className = "ms-cui-it-inactiveCell";
                    $v_4 = CUI.Utility.$5("div");
                    $v_4.id = this.$6_0 + "-" + $v_5;
                    $v_4.className = "ms-cui-it-inactiveCellOuter";
                    $addHandler($v_1, "mouseover", this.$$d_$Dn_1);
                    $addHandler($v_1, "click", this.$$d_$Dl_1);
                    $v_1.appendChild($v_4);
                    $v_4.appendChild($v_3);
                    $v_3.appendChild($v_2);
                    this.$2v_1[$v_5] = $v_3;
                    this.$5s_1[$v_5] = $v_4;
                    $v_5++
                }
            }
            this.$J_1.appendChild(this.$3i_1);
            return this.$J_1;
        default:
            this.ensureValidDisplayMode($p0);
            break
        }
        return null
    },
    onEnabledChanged: function($p0) {},
    get_$CH_0: function() { return "InsertTable" },
    $Dl_1: function($p0) {
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7702);
        $p0.preventDefault();
        if (!this.$9_0) return;
        var $v_0 = this.$B1_1($p0.target), $v_1 = this.$Az_1($v_0), $v_2 = this.$7O_1($v_1), $v_3 = this.$7P_1($v_1);
        this.$AU_1();
        this.get_commandProperties()["Rows"] = $v_3 + 1;
        this.get_commandProperties()["Columns"] = $v_2 + 1;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().Command, 1, this.get_commandProperties());
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7703)
    },
    $B1_1: function($p0) {
        while ($p0.hasChildNodes()) $p0 = $p0.childNodes[0];
        return $p0.parentNode.parentNode
    },
    $Ea_1: function($p0) {
        var $v_0 = $p0.childNodes[0].childNodes[0], $v_1 = this.$Az_1($p0);
        $v_0.title = this.$D6_1(this.$7P_1($v_1) + 1, this.$7O_1($v_1) + 1)
    },
    $D6_1: function($p0, $p1) {
        var $v_0 = this.get_$2_1().Alt;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = this.get_$2_1().MenuSectionTitle;
        $v_0 = String.format($v_0, $p1.toString(), $p0.toString());
        return $v_0
    },
    $Dn_1: function($p0) {
        if (!this.$9_0) return;
        var $v_0 = this.$B1_1($p0.target);
        this.$Ea_1($v_0);
        this.$DM_1($v_0)
    },
    $Dm_1: function($p0) {
        if (!this.$9_0) return;
        var $v_0 = this.$B1_1($p0.target);
        this.$Ea_1($v_0);
        this.$DM_1($v_0)
    },
    $I6_1: function($p0) {
        var $v_0 = CUI.Utility.$DB(this.$J_1);
        ($p0.clientX <= $v_0.x ||
                $p0.clientX >= $v_0.x + $v_0.width ||
                $p0.clientY <= $v_0.y ||
                $p0.clientY >= $v_0.y + $v_0.height) &&
            this.$9L_1()
    },
    $9L_1: function() {
        this.$Jc_1();
        this.$Ac_1();
        this.$6Q_1 = -1;
        this.$6R_1 = -1;
        this.$3Z_1 = false
    },
    $Az_1: function($p0) { return parseInt($p0.id.substr(this.$6_0.length + 1)) },
    $3Z_1: false,
    $DM_1: function($p0) {
        var $v_0 = this.$Az_1($p0);
        if (this.$2M_1 === $v_0) return;
        this.$HK_1($v_0)
    },
    $HK_1: function($p0) {
        this.$Et_1($p0);
        this.$2M_1 = $p0;
        this.$Ac_1();
        this.$EJ_1($p0)
    },
    $7P_1: function($p0) { return Math.floor($p0 / 10) },
    $7O_1: function($p0) { return $p0 % 10 },
    $Et_1: function($p0) {
        var $v_0 = this.$7O_1($p0), $v_1 = this.$7P_1($p0), $v_2 = -1, $v_3 = -1;
        if (this.$2M_1 !== -1) {
            $v_2 = this.$7P_1(this.$2M_1);
            $v_3 = this.$7O_1(this.$2M_1)
        }
        while ($v_2 !== $v_1 || $v_3 !== $v_0)
            if ($v_2 < $v_1) this.$EW_1(++$v_2, $v_3, true);
            else if ($v_2 > $v_1) {
                this.$EW_1($v_2, $v_3, false);
                $v_2--
            } else if ($v_3 < $v_0) this.$EN_1(++$v_3, $v_2, true);
            else if ($v_3 > $v_0) {
                this.$EN_1($v_3, $v_2, false);
                $v_3--
            }
        this.get_$DR_1().$EZ_1(this.$D6_1($v_1 + 1, $v_0 + 1))
    },
    $EW_1: function($p0, $p1, $p2) { for (var $v_0 = 0; $v_0 <= $p1; $v_0++) this.$EL_1($p0, $v_0, $p2) },
    $EN_1: function($p0, $p1, $p2) { for (var $v_0 = 0; $v_0 <= $p1; $v_0++) this.$EL_1($v_0, $p0, $p2) },
    $EL_1: function($p0, $p1, $p2) {
        var $v_0 = $p0 * 10 + $p1, $v_1 = this.$2v_1[$v_0], $v_2 = this.$5s_1[$v_0];
        if ($p2) {
            $v_1.className = "ms-cui-it-activeCell";
            $v_2.className = "ms-cui-it-activeCellOuter"
        } else {
            $v_1.className = "ms-cui-it-inactiveCell";
            $v_2.className = "ms-cui-it-inactiveCellOuter"
        }
    },
    $Jc_1: function() {
        for (var $v_1 = 0; $v_1 < 100; $v_1++) {
            this.$2v_1[$v_1].className = "ms-cui-it-inactiveCell";
            this.$5s_1[$v_1].className = "ms-cui-it-inactiveCellOuter"
        }
        this.$2M_1 = -1;
        var $v_0 = this.get_$2_1().MenuSectionInitialTitle;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = "";
        this.get_$DR_1().$EZ_1($v_0)
    },
    $G3_1: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$2v_1)) this.$2v_1 = new Array(100);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$5s_1)) this.$5s_1 = new Array(100)
    },
    receiveFocus: function() {
        var $v_0 = this.$2v_1[0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        $v_0.firstChild.focus()
    },
    $AU_1: function() {
        this.$6Q_1 = -1;
        this.$6R_1 = -1;
        this.$3Z_1 = false
    },
    $Ac_1: function() {
        if (this.$3Z_1) {
            var $v_0 = this.get_$2_1().CommandRevert;
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
                this.get_commandProperties()["Rows"] = this.$6R_1 + 1;
                this.get_commandProperties()["Columns"] = this.$6Q_1 + 1;
                this.get_displayedComponent().raiseCommandEvent($v_0, 6, this.get_commandProperties())
            }
            this.$AU_1()
        }
    },
    $EJ_1: function($p0) {
        this.$6Q_1 = this.$7O_1($p0);
        this.$6R_1 = this.$7P_1($p0);
        this.$3Z_1 = true;
        var $v_0 = this.get_$2_1().CommandPreview;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            this.get_commandProperties()["Rows"] = this.$6R_1 + 1;
            this.get_commandProperties()["Columns"] = this.$6Q_1 + 1;
            this.get_displayedComponent().raiseCommandEvent($v_0, 5, this.get_commandProperties())
        }
    },
    get_$DR_1: function() {
        var $v_0 = this.get_displayedComponent().$U_0;
        if (!CUI.MenuSection.isInstanceOfType($v_0))
            throw Error.create("InsertTable must live inside of a MenuSection.");
        return $v_0
    },
    onMenuClosed: function() { this.$9L_1() },
    $8w_0: function() {
        if (this.$2M_1 === 99) {
            this.$9L_1();
            return false
        }
        this.$2v_1[this.$2M_1 + 1].firstChild.focus();
        return true
    },
    $8x_0: function() {
        if (!this.$2M_1) {
            this.$9L_1();
            return false
        } else if (this.$2M_1 === -1) this.$2v_1[99].firstChild.focus();
        else this.$2v_1[this.$2M_1 - 1].firstChild.focus();
        return true
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$J_1 = null;
        this.$3i_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.LabelCommandProperties = function() {};
CUI.Controls.Label = function($p0, $p1, $p2) {
    CUI.Controls.Label.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Medium");
    this.addDisplayMode("Small")
};
CUI.Controls.Label.prototype = {
    $J_1: null,
    $6k_1: null,
    $2p_1: null,
    $D_1: null,
    $5Y_1: null,
    $7B_1: "",
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = this.get_$2_1().ForId, $v_1 = this.get_$2_1().LabelText;
        switch ($p0) {
        case "Medium":
            if ($v_0) {
                this.$J_1 = CUI.Utility.$5("label");
                if (CUI.Utility.$58()) this.$J_1.setAttribute("htmlFor", $v_0);
                else this.$J_1.setAttribute("for", $v_0)
            } else this.$J_1 = CUI.Utility.$5("span");
            this.$J_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$J_1.className = "ms-cui-ctl-small ms-cui-fslb";
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1().Image16by16)) {
                this.$6k_1 = CUI.Utility.$5("img");
                var $v_4 = CUI.Utility.$w(2,
                        3,
                        this.get_$2_1().Image16by16,
                        this.get_$2_1().Image16by16Class,
                        this.$6k_1,
                        true,
                        false,
                        this.get_$2_1().Image16by16Top,
                        this.get_$2_1().Image16by16Left),
                    $v_5 = CUI.Utility.$5("span");
                $v_5.className = "ms-cui-ctl-iconContainer";
                $v_5.appendChild($v_4);
                this.$J_1.appendChild($v_5)
            }
            this.$2p_1 = CUI.Utility.$5("span");
            this.$2p_1.className = "ms-cui-ctl-mediumlabel";
            !CUI.ScriptUtility.isNullOrUndefined($v_1) && CUI.UIUtility.setInnerText(this.$2p_1, $v_1);
            this.$J_1.appendChild(this.$2p_1);
            return this.$J_1;
        case "Small":
            if ($v_0) {
                this.$D_1 = CUI.Utility.$5("label");
                if (CUI.Utility.$58()) this.$D_1.setAttribute("htmlFor", $v_0);
                else this.$D_1.setAttribute("for", $v_0)
            } else this.$D_1 = CUI.Utility.$5("span");
            this.$D_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$D_1.className = "ms-cui-ctl-small ms-cui-fslb";
            if (CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1()
                .Image16by16)) throw Error.argumentNull("Image16by16", "Small display mode must have an icon set");
            this.$5Y_1 = CUI.Utility.$5("img");
            var $v_2 = CUI.Utility.$w(2,
                3,
                this.get_$2_1().Image16by16,
                this.get_$2_1().Image16by16Class,
                this.$5Y_1,
                true,
                false,
                this.get_$2_1().Image16by16Top,
                this.get_$2_1().Image16by16Left);
            if (!CUI.ScriptUtility.isNullOrUndefined($v_1)) this.$5Y_1.alt = $v_1;
            var $v_3 = CUI.Utility.$5("span");
            $v_3.className = "ms-cui-ctl-iconContainer";
            $v_3.appendChild($v_2);
            this.$D_1.appendChild($v_3);
            return this.$D_1;
        default:
            this.ensureValidDisplayMode($p0);
            break
        }
        return null
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Medium":
            this.$J_1 = $v_0;
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1().Image16by16)) {
                this.$6k_1 = this.$J_1.firstChild.firstChild.firstChild;
                this.$2p_1 = this.$J_1.childNodes[1]
            } else this.$2p_1 = this.$J_1.firstChild;
            break;
        case "Small":
            this.$D_1 = $v_0;
            this.$5Y_1 = this.$D_1.firstChild.firstChild.firstChild;
            break
        }
    },
    onEnabledChanged: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$J_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$D_1, $p0)
    },
    get_$CH_0: function() { return "Label" },
    $Ih_0: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().Command)) return;
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$2_1().Command,
            this.get_$2_1().QueryCommand,
            this.get_stateProperties(),
            false);
        if ($v_0 && !CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().QueryCommand)) {
            var $v_1 = this.$7B_1;
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_stateProperties()[CUI.Controls.LabelCommandProperties
                .Value])) {
                CUI.UIUtility.setInnerText(this.$2p_1,
                    this.get_stateProperties()[CUI.Controls.LabelCommandProperties.Value]);
                this.$7B_1 = this.get_stateProperties()[CUI.Controls.LabelCommandProperties.Value]
            } else {
                CUI.UIUtility.setInnerText(this.$2p_1, this.get_$2_1().LabelText);
                this.$7B_1 = this.get_$2_1().LabelText
            }
            if (this.$7B_1 !== $v_1) this.$0_0.$4J_1 = true
        }
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$J_1 = null;
        this.$6k_1 = null;
        this.$2p_1 = null;
        this.$D_1 = null;
        this.$5Y_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.MRUSplitButton = function($p0, $p1, $p2, $p3) {
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_$Dw_3 = Function.createDelegate(this, this.$Dw_3);
    this.$$d_$IX_3 = Function.createDelegate(this, this.$IX_3);
    this.$$d_$IY_3 = Function.createDelegate(this, this.$IY_3);
    CUI.Controls.MRUSplitButton.initializeBase(this, [$p0, $p1, $p2, $p3])
};
CUI.Controls.MRUSplitButton.prototype = {
    $K_3: null,
    $1X_3: null,
    $Z_3: null,
    $1y_3: null,
    $C_3: null,
    $h_3: null,
    $d_3: null,
    $2C_3: null,
    $D_3: null,
    $1h_3: null,
    $e_3: null,
    $2G_3: null,
    $1d_3: false,
    $4L_3: false,
    $Bc_0: function() {
        if (!this.$9_0) return false;
        if (this.$1d_3) {
            this.get_displayedComponent().get_$3_0().firstChild.firstChild.focus();
            return true
        }
        return false
    },
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = true,
            $v_1 = CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().Alt) ? "" : this.get_properties().Alt,
            $v_2 = $p0 === "Medium" && !CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Width)
                ? this.get_properties().Width
                : "auto",
            $v_3 = null,
            $v_4 = this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_4)) $v_4 = this.get_properties().InitialItem;
        this.$4L_3 = true;
        switch ($p0) {
        case "Large":
            this.$K_3 = CUI.Utility.$5("span");
            this.$K_3.setAttribute("mscui:controltype", this.get_$CH_0());
            CUI.Utility.ensureCSSClassOnElement(this.$K_3, "ms-cui-ctl-large");
            this.$1X_3 = CUI.Utility.$5("span");
            this.$1X_3.className = "ms-cui-mrusb-selecteditem";
            if (!this.$3b_2($v_4))
                if (!CUI.Utility.$1F(this.get_properties()
                    .PopulateDynamically))
                    throw Error.create("No menu item with id '" +
                        this.get_properties().InitialItem +
                        "' exists in this control's menu");
                else {
                    this.$1X_3.style.width = "32px";
                    this.$1X_3.style.height = "32px"
                }
            this.$Z_3 = CUI.Utility.$5("a");
            this.$Z_3.className = "ms-cui-ctl-a2";
            this.$Z_3.style.display = "block";
            this.$Z_3.setAttribute("role", this.get_$4y_0());
            this.$Z_3.setAttribute("aria-haspopup", true);
            CUI.Utility.$2k(this.$Z_3);
            CUI.Utility.$2Y(this.get_properties(), this.$Z_3);
            this.$1y_3 = CUI.Utility.$5("img");
            var $v_5 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$1y_3,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                $v_0 = false;
                this.$Z_3.title = $v_1;
                this.$1y_3.alt = $v_1
            }
            this.$Ex_0($p0);
            this.$Z_3.appendChild($v_5);
            if ($v_0) {
                $v_3 = CUI.Utility.$49($v_1);
                this.$Z_3.appendChild($v_3)
            }
            this.$K_3.appendChild(this.$1X_3);
            this.$K_3.appendChild(this.$Z_3);
            this.$4L_3 = false;
            return this.$K_3;
        case "Medium":
            this.$C_3 = CUI.Utility.$5("span");
            this.$C_3.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$C_3.className = "ms-cui-ctl-medium ms-cui-ctl";
            this.$h_3 = CUI.Utility.$5("span");
            this.$h_3.className = "ms-cui-mrusb-selecteditem";
            this.$h_3.style.width = $v_2;
            if (!this.$3b_2($v_4))
                throw Error.create("No menu item with id '" +
                    this.get_properties().InitialItem +
                    "' exists in this control's menu");
            this.$d_3 = CUI.Utility.$5("a");
            CUI.Utility.$2k(this.$d_3);
            CUI.Utility.$2Y(this.get_properties(), this.$d_3);
            this.$d_3.className = "ms-cui-ctl";
            this.$d_3.setAttribute("role", this.get_$4y_0());
            this.$d_3.setAttribute("aria-haspopup", true);
            this.$2C_3 = CUI.Utility.$5("img");
            if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                $v_0 = false;
                this.$d_3.title = $v_1;
                this.$2C_3.alt = $v_1
            }
            var $v_6 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$2C_3,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            this.$Ex_0($p0);
            this.$d_3.appendChild($v_6);
            if ($v_0) {
                $v_3 = CUI.Utility.$49($v_1);
                this.$d_3.appendChild($v_3)
            }
            this.$C_3.appendChild(this.$h_3);
            this.$C_3.appendChild(this.$d_3);
            this.$4L_3 = false;
            return this.$C_3;
        case "Small":
            this.$D_3 = CUI.Utility.$5("span");
            this.$D_3.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$D_3.className = "ms-cui-ctl-medium ms-cui-ctl";
            this.$1h_3 = CUI.Utility.$5("span");
            this.$1h_3.className = "ms-cui-mrusb-selecteditem";
            this.$1h_3.style.width = $v_2;
            if (!this.$3b_2($v_4))
                throw Error.create("No menu item with id '" +
                    this.get_properties().InitialItem +
                    "' exists in this control's menu");
            this.$e_3 = CUI.Utility.$5("a");
            CUI.Utility.$2k(this.$e_3);
            CUI.Utility.$2Y(this.get_properties(), this.$e_3);
            this.$e_3.setAttribute("role", this.get_$4y_0());
            this.$e_3.setAttribute("aria-haspopup", true);
            this.$e_3.className = "ms-cui-ctl ms-cui-mrusb-arwbtn";
            this.$2G_3 = CUI.Utility.$5("img");
            if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ToolTipTitle)) {
                this.$e_3.title = $v_1;
                this.$2G_3.alt = $v_1;
                $v_0 = false
            }
            var $v_7 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$2G_3,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            this.$Ex_0($p0);
            this.$e_3.appendChild($v_7);
            if ($v_0) {
                $v_3 = CUI.Utility.$49($v_1);
                this.$e_3.appendChild($v_3)
            }
            this.$D_3.appendChild(this.$1h_3);
            this.$D_3.appendChild(this.$e_3);
            this.$4L_3 = false;
            return this.$D_3;
        default:
            this.$4L_3 = false;
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Large":
            this.$K_3 = $v_0;
            this.$1X_3 = this.$K_3.childNodes[0];
            this.$Z_3 = this.$K_3.childNodes[1];
            this.$1y_3 = this.$Z_3.childNodes[0].childNodes[0];
            break;
        case "Medium":
            this.$C_3 = $v_0;
            this.$h_3 = this.$C_3.childNodes[0];
            this.$d_3 = this.$C_3.childNodes[1];
            this.$2C_3 = this.$d_3.childNodes[0].childNodes[0];
            break;
        case "Small":
            this.$D_3 = $v_0;
            this.$1h_3 = this.$D_3.childNodes[0];
            this.$e_3 = this.$D_3.childNodes[1];
            this.$2G_3 = this.$e_3.childNodes[0].childNodes[0];
            break
        }
    },
    $Ex_0: function($p0) { this.$g_3($p0) },
    $g_3: function($p0) {
        switch ($p0) {
        case "Large":
            $addHandler(this.$Z_3, "click", this.$$d_onArrowButtonClick);
            $addHandler(this.$1X_3, "mouseover", this.$$d_$IY_3);
            $addHandler(this.$1X_3, "mouseout", this.$$d_$IX_3);
            $addHandler(this.$Z_3, "mouseover", this.$$d_onArrowButtonFocus);
            $addHandler(this.$Z_3, "mouseout", this.$$d_onArrowButtonBlur);
            $addHandler(this.$Z_3, "focus", this.$$d_onArrowButtonKeyboardFocus);
            $addHandler(this.$Z_3, "blur", this.$$d_onArrowButtonBlur);
            $addHandler(this.$Z_3, "keypress", this.$$d_onArrowButtonKeyPress);
            break;
        case "Medium":
            $addHandler(this.$d_3, "click", this.$$d_onArrowButtonClick);
            $addHandler(this.$h_3, "mouseover", this.$$d_$IY_3);
            $addHandler(this.$h_3, "mouseout", this.$$d_$IX_3);
            $addHandler(this.$d_3, "mouseover", this.$$d_onArrowButtonFocus);
            $addHandler(this.$d_3, "mouseout", this.$$d_onArrowButtonBlur);
            $addHandler(this.$d_3, "focus", this.$$d_onArrowButtonKeyboardFocus);
            $addHandler(this.$d_3, "blur", this.$$d_onArrowButtonBlur);
            $addHandler(this.$d_3, "keypress", this.$$d_onArrowButtonKeyPress);
            break;
        case "Small":
            $addHandler(this.$e_3, "click", this.$$d_onArrowButtonClick);
            $addHandler(this.$1h_3, "mouseover", this.$$d_$IY_3);
            $addHandler(this.$1h_3, "mouseout", this.$$d_$IX_3);
            $addHandler(this.$e_3, "mouseover", this.$$d_onArrowButtonFocus);
            $addHandler(this.$e_3, "mouseout", this.$$d_onArrowButtonBlur);
            $addHandler(this.$e_3, "focus", this.$$d_onArrowButtonKeyboardFocus);
            $addHandler(this.$e_3, "blur", this.$$d_onArrowButtonBlur);
            $addHandler(this.$e_3, "keypress", this.$$d_onArrowButtonKeyPress);
            break
        }
    },
    get_$CH_0: function() { return "MRUSplitButton" },
    selectMenuItem: function($p0) {
        if (this._selectedControl === $p0 && !this.$4L_3) return;
        var $v_0 = !CUI.ScriptUtility.isNullOrUndefined(this.get_displayedComponent())
                ? this.get_displayedComponent().get_title()
                : this.$7o_0,
            $v_1;
        switch ($v_0) {
        case "Large":
            $v_1 = this.$1X_3;
            break;
        case "Medium":
            $v_1 = this.$h_3;
            break;
        case "Small":
            $v_1 = this.$1h_3;
            break;
        default:
            throw Error.create("Invalid display mode on split button while selecting a menu item")
        }
        this._selectedControl = $p0;
        this.get_stateProperties()[CUI.Controls.DropDownCommandProperties.SelectedItemId] = $p0.getMenuItemId();
        var $v_2 = $p0;
        if (CUI.MenuItem.isInstanceOfType($v_2
            .get_displayedComponent())) this.$F_1.$4s_1 = $v_2.get_displayedComponent();
        var $v_3 = this._selectedControl.getDropDownDOMElementForDisplayMode($v_0);
        if ($v_3.childNodes.length > 1) {
            var $v_4 = $v_3.childNodes[1];
            if ($v_4.childNodes.length > 1)
                if ($v_4.childNodes[1].tagName.toLowerCase() === "br") {
                    var $v_5 = CUI.Utility.$5("span");
                    CUI.Utility.$4I($v_5, " ");
                    $v_4.replaceChild($v_5, $v_4.childNodes[1])
                }
        }
        $v_3.id = this.$6_0 + "-SelectedItem";
        if ($v_1.hasChildNodes()) {
            var $v_6 = $v_1.firstChild;
            $v_1.replaceChild($v_3, $v_6);
            $clearHandlers($v_6)
        } else $v_1.appendChild($v_3);
        $addHandler($v_3, "click", this.$$d_$Dw_3);
        $addHandler($v_3, "dblclick", this.$$d_onDblClick)
    },
    addDisplayModes: function() {
        this.addDisplayMode("Large");
        this.addDisplayMode("Medium");
        this.addDisplayMode("Small")
    },
    launchMenuInternal: function($p0) {
        var $v_0 = false;
        this.$0_0.$3n_1 = false;
        switch (this.get_displayedComponent().get_title()) {
        case "Large":
            $v_0 = this.launchMenu(this.$Z_3, this.$$d_sendMenuCreationCommandEvent);
            break;
        case "Medium":
            $v_0 = this.launchMenu(this.$d_3, this.$$d_sendMenuCreationCommandEvent);
            break;
        case "Small":
            $v_0 = this.launchMenu(this.$e_3, this.$$d_sendMenuCreationCommandEvent);
            break
        }
        $v_0 && this.sendMenuCreationCommandEvent()
    },
    onEnabledChanged: function($p0) {
        CUI.Controls.DropDown.prototype.onEnabledChanged.call(this, $p0);
        var $v_0 = "ms-cui-disabled";
        this.$1d_3 = $p0;
        if ($p0) {
            CUI.Utility.removeCSSClassFromElement(this.$K_3, $v_0);
            CUI.Utility.enableElement(this.$Z_3);
            CUI.Utility.removeCSSClassFromElement(this.$C_3, $v_0);
            CUI.Utility.enableElement(this.$d_3);
            CUI.Utility.removeCSSClassFromElement(this.$D_3, $v_0);
            CUI.Utility.enableElement(this.$e_3)
        } else {
            CUI.Utility.ensureCSSClassOnElement(this.$K_3, $v_0);
            CUI.Utility.disableElement(this.$Z_3);
            CUI.Utility.ensureCSSClassOnElement(this.$C_3, $v_0);
            CUI.Utility.disableElement(this.$d_3);
            CUI.Utility.ensureCSSClassOnElement(this.$D_3, $v_0);
            CUI.Utility.disableElement(this.$e_3)
        }
        CUI.Utility.setEnabledOnElement(this.$Z_3, $p0);
        CUI.Utility.setEnabledOnElement(this.$d_3, $p0);
        CUI.Utility.setEnabledOnElement(this.$e_3, $p0)
    },
    onDblClick: function($p0) {
        this.$n_0();
        $p0.preventDefault();
        if (!this.$9_0) return;
        this.$Dw_3($p0)
    },
    $Dw_3: function($p0) {
        CUI.PMetrics.perfMark(7735);
        this.$n_0();
        $p0.preventDefault();
        if (!this.$9_0) return;
        var $v_0 = 3;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().Command,
            $v_0,
            { CommandValueId: this._selectedControl.getCommandValueId() })
    },
    $IY_3: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        switch (this.get_displayedComponent().get_title()) {
        case "Large":
            CUI.Utility.ensureCSSClassOnElement(this.$1X_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.ensureCSSClassOnElement(this.$Z_3, "ms-cui-ctl-split-hover");
            break;
        case "Medium":
            CUI.Utility.ensureCSSClassOnElement(this.$h_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.ensureCSSClassOnElement(this.$d_3, "ms-cui-ctl-split-hover");
            break;
        case "Small":
            CUI.Utility.ensureCSSClassOnElement(this.$1h_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.ensureCSSClassOnElement(this.$e_3, "ms-cui-ctl-split-hover");
            break
        }
        if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().CommandPreview)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandPreview,
            5,
            { CommandValueId: this._selectedControl.getCommandValueId() })
    },
    $IX_3: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        switch (this.get_displayedComponent().get_title()) {
        case "Large":
            CUI.Utility.removeCSSClassFromElement(this.$1X_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.removeCSSClassFromElement(this.$Z_3, "ms-cui-ctl-split-hover");
            break;
        case "Medium":
            CUI.Utility.removeCSSClassFromElement(this.$h_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.removeCSSClassFromElement(this.$d_3, "ms-cui-ctl-split-hover");
            break;
        case "Small":
            CUI.Utility.removeCSSClassFromElement(this.$1h_3, "ms-cui-ctl-light-hoveredOver");
            CUI.Utility.removeCSSClassFromElement(this.$e_3, "ms-cui-ctl-split-hover");
            break
        }
        if (CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().CommandRevert)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandRevert,
            6,
            { CommandValueId: this._selectedControl.getCommandValueId() })
    },
    highlight: function() {
        switch (this.get_displayedComponent().get_title()) {
        case "Large":
            CUI.Utility.ensureCSSClassOnElement(this.$1X_3, "ms-cui-ctl-split-hover");
            CUI.Utility.ensureCSSClassOnElement(this.$Z_3, "ms-cui-ctl-light-hoveredOver");
            break;
        case "Medium":
            CUI.Utility.ensureCSSClassOnElement(this.$h_3, "ms-cui-ctl-split-hover");
            CUI.Utility.ensureCSSClassOnElement(this.$d_3, "ms-cui-ctl-light-hoveredOver");
            break;
        case "Small":
            CUI.Utility.ensureCSSClassOnElement(this.$1h_3, "ms-cui-ctl-split-hover");
            CUI.Utility.ensureCSSClassOnElement(this.$e_3, "ms-cui-ctl-light-hoveredOver");
            break
        }
    },
    removeHighlight: function() {
        switch (this.get_displayedComponent().get_title()) {
        case "Large":
            CUI.Utility.removeCSSClassFromElement(this.$1X_3, "ms-cui-ctl-split-hover");
            CUI.Utility.removeCSSClassFromElement(this.$Z_3, "ms-cui-ctl-light-hoveredOver");
            break;
        case "Medium":
            CUI.Utility.removeCSSClassFromElement(this.$h_3, "ms-cui-ctl-split-hover");
            CUI.Utility.removeCSSClassFromElement(this.$d_3, "ms-cui-ctl-light-hoveredOver");
            break;
        case "Small":
            CUI.Utility.removeCSSClassFromElement(this.$1h_3, "ms-cui-ctl-split-hover");
            CUI.Utility.removeCSSClassFromElement(this.$e_3, "ms-cui-ctl-light-hoveredOver");
            break
        }
    },
    dispose: function() {
        CUI.Controls.DropDown.prototype.dispose.call(this);
        this.$K_3 = null;
        this.$1y_3 = null;
        this.$Z_3 = null;
        this.$1X_3 = null;
        this.$C_3 = null;
        this.$2C_3 = null;
        this.$d_3 = null;
        this.$h_3 = null;
        this.$D_3 = null;
        this.$2G_3 = null;
        this.$e_3 = null;
        this.$1h_3 = null
    }
};
CUI.Controls.Separator = function($p0, $p1, $p2) {
    CUI.Controls.Separator.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Small")
};
CUI.Controls.Separator.prototype = {
    $6n_1: null,
    $6o_1: null,
    $D_1: null,
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Small":
            this.$6n_1 = CUI.Utility.$5("img");
            this.$6n_1.style.cursor = "default";
            this.$6o_1 = CUI.Utility.$w(2,
                11,
                this.get_$2_1().Image,
                this.get_$2_1().ImageClass,
                this.$6n_1,
                true,
                false,
                this.get_$2_1().ImageTop,
                this.get_$2_1().ImageLeft);
            this.$D_1 = CUI.Utility.$5("span");
            this.$D_1.className = "ms-cui-ctl ms-cui-ctl-small ms-cui-separator";
            this.$D_1.appendChild(this.$6o_1);
            return this.$D_1;
        default:
            this.ensureValidDisplayMode($p0);
            break
        }
        return null
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Small":
            this.$6o_1 = $v_0;
            break
        }
    },
    onEnabledChanged: function($p0) {},
    get_$CH_0: function() { return "Separator" },
    $Ih_0: function() {},
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$6n_1 = null;
        this.$6o_1 = null;
        this.$D_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.SpinnerCommandProperties = function() {};
CUI.Controls.Spinner = function($p0, $p1, $p2, $p3) {
    this.$$d_$Em_1 = Function.createDelegate(this, this.$Em_1);
    this.$$d_$En_1 = Function.createDelegate(this, this.$En_1);
    this.$$d_$JW_1 = Function.createDelegate(this, this.$JW_1);
    this.$$d_$JX_1 = Function.createDelegate(this, this.$JX_1);
    this.$$d_$Dr_1 = Function.createDelegate(this, this.$Dr_1);
    this.$$d_$IP_1 = Function.createDelegate(this, this.$IP_1);
    this.$$d_$Id_1 = Function.createDelegate(this, this.$Id_1);
    this.$$d_$I8_1 = Function.createDelegate(this, this.$I8_1);
    this.$$d_$Ds_1 = Function.createDelegate(this, this.$Ds_1);
    this.$$d_$IQ_1 = Function.createDelegate(this, this.$IQ_1);
    this.$$d_$Ie_1 = Function.createDelegate(this, this.$Ie_1);
    this.$$d_$I9_1 = Function.createDelegate(this, this.$I9_1);
    this.$$d_$IG_1 = Function.createDelegate(this, this.$IG_1);
    this.$$d_$IC_1 = Function.createDelegate(this, this.$IC_1);
    this.$$d_$Do_1 = Function.createDelegate(this, this.$Do_1);
    this.$$d_$9H_1 = Function.createDelegate(this, this.$9H_1);
    this.$$d_$9E_1 = Function.createDelegate(this, this.$9E_1);
    this.$$d_$BF_1 = Function.createDelegate(this, this.$BF_1);
    this.$$d_$7T_1 = Function.createDelegate(this, this.$7T_1);
    this.$$d_$6O_1 = Function.createDelegate(this, this.$6O_1);
    CUI.Controls.Spinner.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Medium");
    this.$5B_1 = 0;
    this.$4l_1 = 1;
    this.$14_1 = $p3;
    this.$s_1 = parseFloat(this.get_$2_1().DefaultValue);
    this.get_stateProperties()["Value"] = this.$s_1;
    this.$N_1 = this.$Ai_1(this.get_$2_1().DefaultUnit);
    if (CUI.ScriptUtility.isNullOrUndefined(this.$N_1))
        throw Error.create("The default unit is not in the list of valid units");
    this.get_stateProperties()["Unit"] = this.$N_1.$3t_0
};
CUI.Controls.Spinner.createUnit = function($p0, $p1, $p2, $p3, $p4, $p5) {
    return new CUI.Unit($p0, $p1, $p2, $p3, $p4, $p5)
};
CUI.Controls.Spinner.$Cl = function($p0, $p1) {
    var $v_0 = Math.pow(10, $p1.$6h_0);
    return Math.round($p0 * $v_0) / $v_0
};
CUI.Controls.Spinner.prototype = {
    $J_1: null,
    $I_1: null,
    $2o_1: null,
    $q_1: null,
    $p_1: null,
    $65_1: null,
    $4w_1: null,
    $5J_1: null,
    $4T_1: null,
    $N_1: null,
    $14_1: null,
    $s_1: 0,
    $66_1: false,
    $5B_1: 0,
    $6Z_1: 0,
    $A6_1: 0,
    $4l_1: 0,
    $3J_1: 0,
    $4u_1: 0,
    $6b_1: null,
    $4N_1: false,
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Medium":
            this.$J_1 = CUI.Utility.$5("span");
            this.$J_1.className = "ms-cui-spn";
            this.$J_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$I_1 = CUI.Utility.$AY("input");
            this.$I_1.className = "ms-cui-spn-txtbx";
            this.$I_1.id = this.$6_0;
            this.$I_1.setAttribute("role", "textbox");
            CUI.Utility.$2Y(this.get_$2_1(), this.$I_1);
            CUI.Utility.$Be(this.$I_1, this.get_$2_1().ImeEnabled);
            this.$2o_1 = CUI.Utility.$5("span");
            this.$2o_1.className = "ms-cui-spn-arwbx";
            this.$q_1 = CUI.Utility.$5("a");
            this.$q_1.className = "ms-cui-spn-btnup";
            this.$q_1.setAttribute("role", "spinbutton");
            this.$p_1 = CUI.Utility.$5("a");
            this.$p_1.className = "ms-cui-spn-btndown";
            this.$p_1.setAttribute("role", "spinbutton");
            this.$65_1 = CUI.Utility.$5("img");
            this.$65_1.alt = "";
            this.$4w_1 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageUpArrow,
                this.$0_0.$7_1.ImageUpArrowClass,
                this.$65_1,
                true,
                false,
                this.$0_0.$7_1.ImageUpArrowTop,
                this.$0_0.$7_1.ImageUpArrowLeft);
            CUI.Utility.ensureCSSClassOnElement(this.$4w_1, "ms-cui-spn-imgcnt");
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1()
                .AltUpArrow)) this.$q_1.title = this.get_$2_1().AltUpArrow;
            this.$5J_1 = CUI.Utility.$5("img");
            this.$5J_1.alt = "";
            this.$4T_1 = CUI.Utility.$w(2,
                1,
                this.$0_0.$7_1.ImageDownArrow,
                this.$0_0.$7_1.ImageDownArrowClass,
                this.$5J_1,
                true,
                false,
                this.$0_0.$7_1.ImageDownArrowTop,
                this.$0_0.$7_1.ImageDownArrowLeft);
            CUI.Utility.ensureCSSClassOnElement(this.$4T_1, "ms-cui-spn-imgcnt");
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1()
                .AltDownArrow)) this.$p_1.title = this.get_$2_1().AltDownArrow;
            this.$Ex_0($p0);
            this.$J_1.appendChild(this.$I_1);
            this.$J_1.appendChild(this.$2o_1);
            this.$2o_1.appendChild(this.$q_1);
            this.$2o_1.appendChild(this.$p_1);
            this.$q_1.appendChild(this.$4w_1);
            this.$p_1.appendChild(this.$4T_1);
            return this.$J_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $EQ_1: function() {
        this.$Eb_1(parseFloat(this.get_$2_1().DefaultValue));
        this.$6Z_1 = parseInt(this.get_$2_1().AccelerationInterval);
        this.$A6_1 = parseInt(this.get_$2_1().MultiplierInterval);
        this.$6b_1 = this.get_$2_1().Command
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Medium":
            this.$J_1 = $v_0;
            this.$I_1 = this.$J_1.childNodes[0];
            this.$2o_1 = this.$J_1.childNodes[1];
            this.$q_1 = this.$2o_1.childNodes[0];
            this.$p_1 = this.$2o_1.childNodes[1];
            this.$4w_1 = this.$q_1.childNodes[0];
            this.$4T_1 = this.$p_1.childNodes[0];
            this.$65_1 = this.$4w_1.childNodes[0];
            this.$5J_1 = this.$4T_1.childNodes[0];
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Medium":
            this.$g_1();
            this.$EQ_1();
            break
        }
    },
    $g_1: function() {
        $addHandler(this.$I_1, "focus", this.$$d_$6O_1);
        $addHandler(this.$I_1, "blur", this.$$d_$7T_1);
        $addHandler(this.$I_1, "change", this.$$d_$BF_1);
        $addHandler(this.$I_1, "mouseover", this.$$d_$9E_1);
        $addHandler(this.$I_1, "mouseout", this.$$d_$9H_1);
        $addHandler(this.$I_1, "keypress", this.$$d_$Do_1);
        $addHandler(this.$I_1, "keydown", this.$$d_$IC_1);
        $addHandler(this.$I_1, "keyup", this.$$d_$IG_1);
        $addHandler(this.$q_1, "mouseover", this.$$d_$I9_1);
        $addHandler(this.$q_1, "mouseout", this.$$d_$Ie_1);
        $addHandler(this.$q_1, "mousedown", this.$$d_$IQ_1);
        $addHandler(this.$q_1, "mouseup", this.$$d_$Ds_1);
        $addHandler(this.$p_1, "mouseover", this.$$d_$I8_1);
        $addHandler(this.$p_1, "mouseout", this.$$d_$Id_1);
        $addHandler(this.$p_1, "mousedown", this.$$d_$IP_1);
        $addHandler(this.$p_1, "mouseup", this.$$d_$Dr_1)
    },
    get_$CH_0: function() { return "Spinner" },
    onEnabledChanged: function($p0) { CUI.Utility.setEnabledOnElement(this.$I_1, $p0) },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        this.$I_1.focus();
        return true
    },
    $6O_1: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        this.$0_0.set_$1I_1(this);
        this.$Df_1($p0);
        CUI.Utility.$BV(this.$I_1)
    },
    $7T_1: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        this.$3p_1 && this.$6X_1();
        this.$Df_1($p0)
    },
    $4k_1: false,
    $Df_1: function($p0) {
        this.$4k_1 = !this.$4k_1;
        if (this.$4k_1) this.$9E_1($p0);
        else this.$9H_1($p0)
    },
    $BF_1: function($p0) {
        this.$n_0();
        if (!this.$9_0) return;
        if (!this.$Jf_1()) {
            this.$4H_1();
            return
        }
        var $v_0 = 1;
        this.get_stateProperties()["ChangeType"] = "manual";
        this.get_stateProperties()["ChangedByMouse"] = false;
        this.get_displayedComponent().raiseCommandEvent(this.$6b_1, $v_0, this.get_stateProperties())
    },
    $FU_0: function() { this.$BF_1(null) },
    $9E_1: function($p0) {
        if (!this.$9_0) return;
        CUI.Utility.ensureCSSClassOnElement(this.$I_1, "ms-cui-spn-txtbx-hover");
        CUI.Utility.ensureCSSClassOnElement(this.$q_1, "ms-cui-spn-btnup-ctl-hover");
        CUI.Utility.ensureCSSClassOnElement(this.$p_1, "ms-cui-spn-btndown-ctl-hover")
    },
    $9H_1: function($p0) {
        if (!this.$9_0) return;
        if (!this.$4k_1) {
            CUI.Utility.removeCSSClassFromElement(this.$I_1, "ms-cui-spn-txtbx-hover");
            CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-ctl-hover");
            CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-ctl-hover");
            CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-down");
            CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-down")
        }
    },
    $I9_1: function($p0) {
        if (!this.$9_0) return;
        this.$9E_1($p0);
        CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-ctl-hover");
        CUI.Utility.ensureCSSClassOnElement(this.$q_1, "ms-cui-spn-btnup-hover")
    },
    $Ie_1: function($p0) {
        if (!this.$9_0) return;
        !this.$3p_1 && this.$Ds_1($p0);
        this.$9H_1($p0);
        this.$4k_1 && CUI.Utility.ensureCSSClassOnElement(this.$q_1, "ms-cui-spn-btnup-ctl-hover");
        CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-hover")
    },
    $IQ_1: function($p0) {
        if (!this.$9_0) return;
        this.$4N_1 = true;
        if ($p0.button) {
            this.$6X_1();
            return
        }
        this.$9R_1(1);
        CUI.Utility.ensureCSSClassOnElement(this.$q_1, "ms-cui-spn-btnup-down")
    },
    $Ds_1: function($p0) {
        if (!this.$9_0) return;
        this.$6X_1();
        this.$0_0.set_$1I_1(this);
        CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-down")
    },
    $B9_1: function($p0) {
        if (!this.$9_0) return;
        if (!this.$Ei_1(this.$N_1, this.$s_1 + $p0 * this.$N_1.$64_0))
            if (this.$s_1 < this.$N_1.$3M_0) this.$Ei_1(this.$N_1, this.$N_1.$3M_0);
            else {
                this.$4H_1();
                return
            }
        var $v_0 = 9;
        this.get_stateProperties()["ChangeType"] = "increase";
        this.get_stateProperties()["ChangedByMouse"] = this.$4N_1;
        this.get_displayedComponent().raiseCommandEvent(this.$6b_1, $v_0, this.get_stateProperties())
    },
    $I8_1: function($p0) {
        if (!this.$9_0) return;
        this.$9E_1($p0);
        CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-ctl-hover");
        CUI.Utility.ensureCSSClassOnElement(this.$p_1, "ms-cui-spn-btndown-hover")
    },
    $Id_1: function($p0) {
        if (!this.$9_0) return;
        !this.$3p_1 && this.$Dr_1($p0);
        this.$9H_1($p0);
        this.$4k_1 && CUI.Utility.ensureCSSClassOnElement(this.$p_1, "ms-cui-spn-btndown-ctl-hover");
        CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-hover")
    },
    $IP_1: function($p0) {
        if (!this.$9_0) return;
        this.$4N_1 = true;
        if ($p0.button) {
            this.$6X_1();
            return
        }
        this.$9R_1(-1);
        CUI.Utility.ensureCSSClassOnElement(this.$p_1, "ms-cui-spn-btndown-down")
    },
    $Dr_1: function($p0) {
        if (!this.$9_0) return;
        this.$6X_1();
        this.$0_0.set_$1I_1(this);
        CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-down")
    },
    $AZ_1: function($p0) {
        if (!this.$9_0) return;
        if (!this.$Ei_1(this.$N_1, this.$s_1 - $p0 * this.$N_1.$64_0))
            if (this.$s_1 > this.$N_1.$3N_0) this.$Ei_1(this.$N_1, this.$N_1.$3N_0);
            else {
                this.$4H_1();
                return
            }
        var $v_0 = 9;
        this.get_stateProperties()["ChangeType"] = "decrease";
        this.get_stateProperties()["ChangedByMouse"] = this.$4N_1;
        this.get_displayedComponent().raiseCommandEvent(this.$6b_1, $v_0, this.get_stateProperties())
    },
    $Do_1: function($p0) {
        if (!this.$9_0) return;
        this.$4N_1 = false;
        var $v_0 = $p0.rawEvent.keyCode;
        if ($v_0 === 27) this.$4H_1();
        else if ($v_0 === 13) {
            this.$BF_1($p0);
            $p0.preventDefault()
        } else return
    },
    $3p_1: false,
    $IC_1: function($p0) {
        if (!this.$9_0) return;
        if (this.$3p_1) return;
        this.$4N_1 = false;
        var $v_0 = $p0.rawEvent.keyCode;
        if ($v_0 === 38) {
            this.$9R_1(1);
            CUI.Utility.ensureCSSClassOnElement(this.$q_1, "ms-cui-spn-btnup-down")
        } else if ($v_0 === 40) {
            this.$9R_1(-1);
            CUI.Utility.ensureCSSClassOnElement(this.$p_1, "ms-cui-spn-btndown-down")
        } else return;
        this.$3p_1 = true
    },
    $IG_1: function($p0) {
        if (!this.$9_0) return;
        if (!this.$3p_1) return;
        this.$6X_1();
        CUI.Utility.removeCSSClassFromElement(this.$q_1, "ms-cui-spn-btnup-down");
        CUI.Utility.removeCSSClassFromElement(this.$p_1, "ms-cui-spn-btndown-down");
        this.$3p_1 = false
    },
    $En_1: function() {
        this.$5B_1++;
        this.$B9_1(this.$D5_1())
    },
    $Em_1: function() {
        this.$5B_1++;
        this.$AZ_1(this.$D5_1())
    },
    $9R_1: function($p0) {
        if (this.$3J_1 > -1 || this.$4u_1 > -1) return;
        if ($p0 === 1) this.$B9_1(1);
        else this.$AZ_1(1);
        if ($p0 === 1) this.$4u_1 = window.setTimeout(this.$$d_$JX_1, 500);
        else this.$4u_1 = window.setTimeout(this.$$d_$JW_1, 500)
    },
    $6X_1: function() {
        if (this.$4u_1 > -1) {
            window.clearTimeout(this.$4u_1);
            this.$4u_1 = -1
        }
        if (this.$3J_1 > -1) {
            window.clearInterval(this.$3J_1);
            this.$3J_1 = -1;
            this.$4l_1 = 1;
            this.$5B_1 = 0
        }
    },
    $JX_1: function() {
        if (this.$3J_1 !== -1) return;
        this.$3J_1 = window.setInterval(this.$$d_$En_1, this.$6Z_1)
    },
    $JW_1: function() {
        if (this.$3J_1 !== -1) return;
        this.$3J_1 = window.setInterval(this.$$d_$Em_1, this.$6Z_1)
    },
    $D5_1: function() {
        var $v_0 = this.$5B_1 * this.$6Z_1;
        if ($v_0 >= this.$4l_1 * this.$A6_1 && this.$4l_1 <= 3) this.$4l_1++;
        return this.$4l_1
    },
    $Eb_1: function($p0) {
        this.$s_1 = $p0;
        this.$I_1.value = this.$Cj_1($p0, this.$N_1.get_$3U_0());
        this.get_stateProperties()["Value"] = this.$s_1
    },
    get_value: function() { return this.$s_1 },
    set_value: function($p0) {
        if (!this.$Ei_1(this.$N_1, $p0)) throw Error.create("Invalid value");
        return $p0
    },
    get_unitString: function() { return this.$N_1.get_$3U_0() },
    set_unitString: function($p0) {
        if (!this.$Bm_1(this.$s_1.toString() + $p0)) {
            this.$4H_1();
            throw Error.create("Invalid unit")
        }
        return $p0
    },
    $5k_1: false,
    $5j_1: false,
    get_$6L_1: function() {
        if (!this.$5k_1) {
            var $v_0 = 1.1, $v_1 = $v_0.toLocaleString().substring(1, 2);
            this.$5j_1 = $v_1 === ",";
            this.$5k_1 = true
        }
        return this.$5j_1
    },
    $Jf_1: function() {
        var $v_0 = this.$I_1.value;
        return this.$Bm_1($v_0)
    },
    $Bm_1: function($p0) {
        var $v_0 = "(\\-)?[0-9]*[\\.,]?[0-9]+", $v_1 = new RegExp($v_0);
        $p0 = $p0.trim();
        if ($p0.search($v_1)) return false;
        var $v_2 = $p0.replace($v_1, ""), $v_3 = $p0.replace($v_2, ""), $v_4 = $v_2.trim(), $v_5, $v_6, $v_7 = false;
        if (this.get_$6L_1()) {
            $v_3 = $v_3.replace(".", "");
            if ($v_3.indexOf(",") > -1) {
                $v_7 = true;
                $v_3 = $v_3.replace(",", ".")
            }
        } else $v_3 = $v_3.replace(",", "");
        $v_6 = parseFloat($v_3);
        if (!CUI.ScriptUtility.isNullOrEmptyString($v_4))
            if (this.$N_1.$6C_0($v_4)) $v_5 = this.$N_1;
            else $v_5 = this.$Ci_1($v_4);
        else $v_5 = this.$N_1;
        return this.$Ei_1($v_5, $v_6, $v_7)
    },
    $Ei_1: function($p0, $p1, $p2) {
        if (arguments.length < 3) $p2 = this.get_$6L_1();
        if (!$p0) return false;
        var $v_0 = $p0.$Ej_0($p1);
        if ($v_0 === -1) return false;
        else if ($v_0 === 1) $p1 = CUI.Controls.Spinner.$Cl($p1, $p0);
        else if ($v_0 === 2) $p1 = $p0.$3N_0;
        else if ($v_0 === 3) $p1 = $p0.$3M_0;
        this.$I_1.value = this.$Cj_1($p1, $p0.get_$3U_0(), $p2);
        this.$N_1 = $p0;
        this.$s_1 = $p1;
        this.$66_1 = $p2;
        this.get_stateProperties()["Unit"] = $p0.$3t_0;
        this.get_stateProperties()["Value"] = $p1;
        return true
    },
    $4H_1: function() { this.$I_1.value = this.$Cj_1(this.$s_1, this.$N_1.get_$3U_0(), this.$66_1) },
    $Cj_1: function($p0, $p1, $p2) {
        if (arguments.length < 3) $p2 = this.get_$6L_1();
        var $v_0 = $p0.toString();
        if ($p2) $v_0 = $v_0.replace(".", ",");
        return $v_0 + " " + $p1
    },
    $Ci_1: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$14_1.length; $v_0++) if (this.$14_1[$v_0].$6C_0($p0)) return this.$14_1[$v_0];
        return null
    },
    $Ai_1: function($p0) {
        for (var $v_0 = 0; $v_0 < this.$14_1.length; $v_0++) {
            if (this.$14_1[$v_0].$3t_0 === $p0) return this.$14_1[$v_0];
            if (this.$14_1[$v_0].$6C_0($p0)) return this.$14_1[$v_0]
        }
        return null
    },
    $Ih_0: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$J_1)) return;
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$2_1().Command,
                this.get_$2_1().QueryCommand,
                this.get_stateProperties(),
                true),
            $v_1 = this.$Ai_1(this.get_stateProperties()["Unit"]);
        if (!this
            .$Ei_1($v_1, this.get_stateProperties()["Value"])
        ) throw Error.create("Invalid valid and/or unit returned when polling")
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$5J_1 = null;
        this.$4T_1 = null;
        this.$65_1 = null;
        this.$4w_1 = null;
        this.$J_1 = null;
        this.$2o_1 = null;
        this.$p_1 = null;
        this.$I_1 = null;
        this.$q_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.SplitButton = function($p0, $p1, $p2, $p3) {
    this.$$d_onMenuButtonKeyPress = Function.createDelegate(this, this.onMenuButtonKeyPress);
    this.$$d_onMenuButtonABlur = Function.createDelegate(this, this.onMenuButtonABlur);
    this.$$d_onMenuButtonKeyboardFocus = Function.createDelegate(this, this.onMenuButtonKeyboardFocus);
    this.$$d_onMenuButtonBlur = Function.createDelegate(this, this.onMenuButtonBlur);
    this.$$d_onMenuButtonFocus = Function.createDelegate(this, this.onMenuButtonFocus);
    this.$$d_onMenuButtonClick = Function.createDelegate(this, this.onMenuButtonClick);
    this.$$d_onButtonKeyboardFocus = Function.createDelegate(this, this.onButtonKeyboardFocus);
    this.$$d_onButtonBlur = Function.createDelegate(this, this.onButtonBlur);
    this.$$d_onButtonFocus = Function.createDelegate(this, this.onButtonFocus);
    this.$$d_onMouseOut = Function.createDelegate(this, this.onMouseOut);
    this.$$d_onMouseOver = Function.createDelegate(this, this.onMouseOver);
    this.$$d_onDblClick = Function.createDelegate(this, this.onDblClick);
    this.$$d_onButtonClick = Function.createDelegate(this, this.onButtonClick);
    CUI.Controls.SplitButton.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.addDisplayMode("Large");
    this.addDisplayMode("Medium");
    this.addDisplayMode("Small")
};
CUI.Controls.SplitButton.prototype = {
    $K_2: null,
    $9e_2: null,
    $5T_2: null,
    $4W_2: null,
    $1y_2: null,
    $C_2: null,
    $9g_2: null,
    $5U_2: null,
    $4X_2: null,
    $2C_2: null,
    $D_2: null,
    $9j_2: null,
    $5X_2: null,
    $4Z_2: null,
    $2G_2: null,
    createDOMElementForDisplayMode: function($p0) {
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().Alt)
                ? this.get_$2_2().LabelText
                : this.get_$2_2().Alt,
            $v_1 = CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().MenuAlt) ? $v_0 : this.get_$2_2().MenuAlt;
        this.$7K_2 = $p0;
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) $v_0 = "";
        if (CUI.ScriptUtility.isNullOrUndefined($v_1)) $v_1 = "";
        switch ($p0) {
        case "Large":
            this.$K_2 = CUI.Control
                .createTwoAnchorControlDOMElementCore(this,
                    this.$0_0,
                    "Large",
                    this.get_$2_2().Id,
                    this.get_$2_2().Image32by32,
                    this.get_$2_2().Image32by32Class,
                    this.get_$2_2().Image32by32Top,
                    this.get_$2_2().Image32by32Left,
                    this.get_$2_2().Image16by16,
                    this.get_$2_2().Image16by16Class,
                    this.get_$2_2().Image16by16Top,
                    this.get_$2_2().Image16by16Left,
                    this.get_$2_2().LabelText,
                    this.get_$2_2().Alt,
                    this.get_$2_2().ToolTipTitle,
                    true);
            this.$Ew_0("Large");
            this.$Ex_0($p0);
            return this.$K_2;
        case "Medium":
            this.$C_2 = CUI.Control
                .createTwoAnchorControlDOMElementCore(this,
                    this.$0_0,
                    "Medium",
                    this.get_$2_2().Id,
                    this.get_$2_2().Image32by32,
                    this.get_$2_2().Image32by32Class,
                    this.get_$2_2().Image32by32Top,
                    this.get_$2_2().Image32by32Left,
                    this.get_$2_2().Image16by16,
                    this.get_$2_2().Image16by16Class,
                    this.get_$2_2().Image16by16Top,
                    this.get_$2_2().Image16by16Left,
                    this.get_$2_2().LabelText,
                    this.get_$2_2().Alt,
                    this.get_$2_2().ToolTipTitle,
                    true);
            this.$Ew_0("Medium");
            this.$Ex_0($p0);
            return this.$C_2;
        case "Small":
            this.$D_2 = CUI.Control
                .createTwoAnchorControlDOMElementCore(this,
                    this.$0_0,
                    "Small",
                    this.get_$2_2().Id,
                    this.get_$2_2().Image32by32,
                    this.get_$2_2().Image32by32Class,
                    this.get_$2_2().Image32by32Top,
                    this.get_$2_2().Image32by32Left,
                    this.get_$2_2().Image16by16,
                    this.get_$2_2().Image16by16Class,
                    this.get_$2_2().Image16by16Top,
                    this.get_$2_2().Image16by16Left,
                    this.get_$2_2().LabelText,
                    this.get_$2_2().Alt,
                    this.get_$2_2().ToolTipTitle,
                    true);
            this.$Ew_0("Small");
            this.$Ex_0($p0);
            return this.$D_2;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $7K_2: null,
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        this.$7K_2 = $p0;
        switch ($p0) {
        case "Large":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$K_2 = $v_0;
            this.$5T_2 = this.$K_2.childNodes[0];
            this.$9e_2 = this.$5T_2.childNodes[0].childNodes[0];
            this.$4W_2 = this.$K_2.childNodes[1];
            var $v_1 = this.$4W_2.childNodes[0];
            this.$1y_2 = null;
            for (var $v_2 = 0; $v_2 < $v_1.childNodes.length; $v_2++) {
                var $v_3 = $v_1.childNodes[$v_2].tagName;
                if (!CUI.ScriptUtility.isNullOrUndefined($v_3) && $v_3.toLowerCase() === "span") {
                    this.$1y_2 = $v_1.childNodes[$v_2].childNodes[0];
                    break
                }
            }
            break;
        case "Medium":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$C_2 = $v_0;
            this.$5U_2 = this.$C_2.childNodes[0];
            this.$9g_2 = this.$5U_2.childNodes[0].childNodes[0];
            this.$4X_2 = this.$C_2.childNodes[1];
            this.$2C_2 = this.$4X_2.childNodes[0].childNodes[0].childNodes[0];
            break;
        case "Small":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$D_2 = $v_0;
            this.$5X_2 = this.$D_2.childNodes[0];
            this.$9j_2 = this.$5X_2.childNodes[0].childNodes[0];
            this.$4Z_2 = this.$D_2.childNodes[1];
            this.$2G_2 = this.$4Z_2.childNodes[0].childNodes[0].childNodes[0];
            break
        }
    },
    $Ex_0: function($p0) { this.$g_2($p0) },
    $g_2: function($p0) {
        var $v_0 = null, $v_1 = null;
        switch ($p0) {
        case "Large":
            $v_0 = this.$5T_2;
            $v_1 = this.$4W_2;
            break;
        case "Medium":
            $v_0 = this.$5U_2;
            $v_1 = this.$4X_2;
            break;
        case "Small":
            $v_0 = this.$5X_2;
            $v_1 = this.$4Z_2;
            break
        }
        $addHandler($v_0, "click", this.$$d_onButtonClick);
        $addHandler($v_0, "dblclick", this.$$d_onDblClick);
        $addHandler($v_0, "mouseover", this.$$d_onMouseOver);
        $addHandler($v_0, "mouseout", this.$$d_onMouseOut);
        $addHandler($v_0, "mouseover", this.$$d_onButtonFocus);
        $addHandler($v_0, "mouseout", this.$$d_onButtonBlur);
        $addHandler($v_0, "focus", this.$$d_onButtonKeyboardFocus);
        $addHandler($v_0, "blur", this.$$d_onButtonBlur);
        $addHandler($v_1, "click", this.$$d_onMenuButtonClick);
        $addHandler($v_1, "mouseover", this.$$d_onMenuButtonFocus);
        $addHandler($v_1, "mouseout", this.$$d_onMenuButtonBlur);
        $addHandler($v_1, "focus", this.$$d_onMenuButtonKeyboardFocus);
        $addHandler($v_1, "blur", this.$$d_onMenuButtonABlur);
        $addHandler($v_1, "keypress", this.$$d_onMenuButtonKeyPress)
    },
    $6G_2: false,
    $Bc_0: function() {
        if (!this.$9_0) return false;
        var $v_0 = this.get_displayedComponent().get_$3_0();
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) {
            if (this.$6G_2 || !this.$1d_2) $v_0 = $v_0.childNodes[1];
            else $v_0 = $v_0.childNodes[0];
            $v_0.focus();
            return true
        }
        return false
    },
    onEnabledChanged: function($p0) {
        this.onEnabledChangedForControl($p0);
        this.onEnabledChangedForButton($p0);
        this.onEnabledChangedForMenu($p0)
    },
    get_$CH_0: function() { return "SplitButton" },
    onEnabledChangedForControl: function($p0) {
        var $v_0 = "ms-cui-disabled";
        if ($p0) {
            CUI.Utility.removeCSSClassFromElement(this.$K_2, $v_0);
            CUI.Utility.removeCSSClassFromElement(this.$C_2, $v_0);
            CUI.Utility.removeCSSClassFromElement(this.$D_2, $v_0)
        } else {
            CUI.Utility.ensureCSSClassOnElement(this.$K_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$C_2, $v_0);
            CUI.Utility.ensureCSSClassOnElement(this.$D_2, $v_0)
        }
    },
    $2d_2: true,
    onEnabledChangedForMenu: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$4W_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4X_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4Z_2, $p0);
        this.$BP_2();
        this.$2d_2 = $p0
    },
    $JQ_2: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$4W_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4X_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$4Z_2, $p0)
    },
    $1d_2: false,
    onEnabledChangedForButton: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$5T_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$5U_2, $p0);
        CUI.Utility.setEnabledOnElement(this.$5X_2, $p0);
        this.$BO_2();
        this.$1d_2 = $p0
    },
    onButtonClick: function($p0) {
        $p0.preventDefault();
        this.$n_0();
        if (!this.$9_0 || !this.$1d_2) return;
        this.$0_0.set_$7R_1(this);
        this.$6G_2 = false;
        var $v_0 = this.get_stateProperties();
        $v_0["CommandValueId"] = this.get_$2_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().Command, 1, $v_0)
    },
    onDblClick: function($p0) {
        $p0.preventDefault();
        this.$n_0();
        if (!this.$9_0) return;
        this.onButtonClick($p0)
    },
    onMouseOver: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0 || !this.$1d_2) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandPreview)) return;
        var $v_0 = this.get_stateProperties();
        $v_0["CommandValueId"] = this.get_$2_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandPreview, 5, $v_0)
    },
    onButtonKeyboardFocus: function($p0) {
        this.$0_0.set_$1I_1(this);
        this.$6G_2 = false;
        this.onButtonFocus($p0)
    },
    onButtonFocus: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0 || !this.$1d_2) return;
        this.$HZ_2()
    },
    onMouseOut: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2().CommandRevert)) return;
        var $v_0 = this.get_stateProperties();
        $v_0["CommandValueId"] = this.get_$2_2().CommandValueId;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandRevert, 6, $v_0)
    },
    onButtonBlur: function($p0) {
        this.onEndFocus();
        if (!this.$9_0 || !this.$1d_2) return;
        this.$BO_2()
    },
    onMenuButtonClick: function($p0) {
        $p0.preventDefault();
        this.$n_0();
        if (!this.$9_0 || !this.$2d_2) return;
        this.$0_0.$3n_1 = false;
        this.$0_0.set_$7R_1(this);
        this.$6G_2 = true;
        var $v_0 = $p0.target;
        this.launchMenu($v_0);
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandMenuOpen, 4, null)
    },
    onMenuButtonKeyboardFocus: function($p0) {
        this.onMenuButtonFocus($p0);
        this.$6G_2 = true;
        this.$0_0.set_$1I_1(this)
    },
    onMenuButtonFocus: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0 || !this.$2d_2) return;
        this.$Ha_2()
    },
    onMenuButtonBlur: function($p0) {
        this.onEndFocus();
        if (!this.$9_0 || this.$t_1 || !this.$2d_2) return;
        this.$BP_2()
    },
    onMenuButtonABlur: function($p0) {
        this.onEndFocus();
        if (!this.$9_0 || !this.$2d_2) return;
        this.onMenuButtonBlur($p0)
    },
    onMenuButtonKeyPress: function($p0) {
        this.$n_0();
        if (!this.$9_0 || !this.$2d_2) return;
        if ($p0.rawEvent.keyCode === 13) this.$1D_1 = true
    },
    onLaunchedMenuClosed: function() {
        this.$n_0();
        this.$1t_2();
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_2().CommandMenuClose, 10, null);
        CUI.MenuLauncher.prototype.onLaunchedMenuClosed.call(this)
    },
    $1t_2: function() {
        this.$BO_2();
        this.$BP_2()
    },
    $BO_2: function() {
        var $v_0 = this.$92_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[1], "ms-cui-ctl-split-hover");
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[0], "ms-cui-ctl-light-hoveredOver")
    },
    $HZ_2: function() {
        var $v_0 = this.$92_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[1], "ms-cui-ctl-split-hover");
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[0], "ms-cui-ctl-light-hoveredOver")
    },
    $BP_2: function() {
        var $v_0 = this.$92_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[0], "ms-cui-ctl-split-hover");
        CUI.Utility.removeCSSClassFromElement($v_0.childNodes[1], "ms-cui-ctl-light-hoveredOver")
    },
    $Ha_2: function() {
        var $v_0 = this.$92_0();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[0], "ms-cui-ctl-split-hover");
        CUI.Utility.ensureCSSClassOnElement($v_0.childNodes[1], "ms-cui-ctl-light-hoveredOver")
    },
    $Ih_0: function() {
        var $v_0 = this.$0_0.$7U_1(this.get_$2_2().Command, null, null), $v_1 = true;
        if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$2_2()
            .CommandMenuOpen)) $v_1 = this.$0_0.$7U_1(this.get_$2_2().CommandMenuOpen, null, null);
        else $v_1 = $v_0;
        if ($v_1 !== this.$2d_2 || $v_0 !== this.$1d_2) {
            this.$9_0 = $v_1 || $v_0;
            var $v_2 = this.$2d_2 && this.$1d_2, $v_3 = $v_1 && $v_0;
            $v_2 !== $v_3 && this.onEnabledChangedForControl($v_3);
            this.$JQ_2(this.$9_0);
            $v_0 !== this.$1d_2 && this.onEnabledChangedForButton($v_0);
            $v_1 !== this.$2d_2 && this.onEnabledChangedForMenu($v_1);
            this.$2d_2 = $v_1;
            this.$1d_2 = $v_0
        }
    },
    dispose: function() {
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$K_2 = null;
        this.$9e_2 = null;
        this.$5T_2 = null;
        this.$4W_2 = null;
        this.$1y_2 = null;
        this.$C_2 = null;
        this.$9g_2 = null;
        this.$5U_2 = null;
        this.$4X_2 = null;
        this.$2C_2 = null;
        this.$D_2 = null;
        this.$9j_2 = null;
        this.$5X_2 = null;
        this.$4Z_2 = null;
        this.$2G_2 = null
    },
    get_$2_2: function() { return this.$7_0 }
};
CUI.Controls.TextBoxCommandProperties = function() {};
CUI.Controls.TextBox = function($p0, $p1, $p2) {
    this.$$d_$Do_1 = Function.createDelegate(this, this.$Do_1);
    this.$$d_$9F_1 = Function.createDelegate(this, this.$9F_1);
    this.$$d_$9G_1 = Function.createDelegate(this, this.$9G_1);
    this.$$d_$7T_1 = Function.createDelegate(this, this.$7T_1);
    this.$$d_$6O_1 = Function.createDelegate(this, this.$6O_1);
    this.$$d_$BE_1 = Function.createDelegate(this, this.$BE_1);
    CUI.Controls.TextBox.initializeBase(this, [$p0, $p1, $p2]);
    this.addDisplayMode("Medium")
};
CUI.Controls.TextBox.prototype = {
    $I_1: null,
    get_value: function() {
        this.$Ad_1();
        return this.$I_1.value
    },
    set_value: function($p0) {
        this.$Ad_1();
        if ($p0) this.$I_1.value = $p0;
        else this.$I_1.value = "";
        return $p0
    },
    $Ad_1: function() {
        if (!this.$I_1) {
            this.$I_1 = CUI.Utility.$AY("input");
            this.$I_1.type = "text";
            CUI.Utility.$Be(this.$I_1, this.get_$2_1().ImeEnabled)
        }
    },
    createDOMElementForDisplayMode: function($p0) {
        switch ($p0) {
        case "Medium":
            this.$Ad_1();
            this.$I_1.id = this.$6_0;
            this.$I_1.setAttribute("mscui:controltype", this.get_$CH_0());
            this.$I_1.setAttribute("role", this.get_$4y_0());
            CUI.Utility.$2Y(this.get_$2_1(), this.$I_1);
            this.$I_1.className = "ms-cui-tb";
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_$2_1().MaxLength)) {
                var $v_0 = parseInt(this.get_$2_1().MaxLength);
                $v_0 !== Number.NaN && this.$I_1.setAttribute("maxlength", $v_0)
            }
            if (CUI.Utility.$1F(this.get_$2_1().ShowAsLabel)) {
                CUI.Utility.ensureCSSClassOnElement(this.$I_1, "ms-cui-tb-labelmode");
                this.$I_1.disabled = true
            }
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1()
                .Width)) this.$I_1.style.width = this.get_$2_1().Width;
            this.$g_1();
            return this.$I_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $Ew_0: function($p0) {
        var $v_0 = $get(this.$6_0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Medium":
            this.$I_1 = $v_0;
            break
        }
    },
    $Ex_0: function($p0) { this.$g_1() },
    $g_1: function() {
        $addHandler(this.$I_1, "change", this.$$d_$BE_1);
        $addHandler(this.$I_1, "focus", this.$$d_$6O_1);
        $addHandler(this.$I_1, "blur", this.$$d_$7T_1);
        $addHandler(this.$I_1, "mouseup", CUI.Utility.get_returnFalseHandler());
        $addHandler(this.$I_1, "mouseover", this.$$d_$9G_1);
        $addHandler(this.$I_1, "mouseout", this.$$d_$9F_1);
        $addHandler(this.$I_1, "keypress", this.$$d_$Do_1)
    },
    onEnabledChanged: function($p0) {
        if ($p0) CUI.Utility.enableElement(this.$I_1);
        else CUI.Utility.disableElement(this.$I_1)
    },
    get_$CH_0: function() { return "TextBox" },
    get_$4y_0: function() { return "textbox" },
    $BE_1: function($p0) {
        this.$n_0();
        if (!this.$9_0) return;
        this.get_stateProperties()["Value"] = this.get_value();
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().Command, 1, this.get_stateProperties());
        if (this.$0_0.get_$7V_1()) this.$Ih_0();
        else this.$7Z_1(null)
    },
    $FU_0: function() { this.$BE_1(null) },
    $7Z_1: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this
            .$I_1)) !CUI.ScriptUtility.isNullOrUndefined($p0) && this.set_value($p0)
    },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        this.$I_1.focus();
        return true
    },
    $6O_1: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        CUI.Utility.$BV(this.$I_1);
        this.$0_0.set_$1I_1(this)
    },
    $7T_1: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return
    },
    $9G_1: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandPreview)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandPreview, 5, this.get_stateProperties())
    },
    $9F_1: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandRevert)) return;
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandRevert, 6, this.get_stateProperties())
    },
    $Do_1: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined($p0) && !CUI.ScriptUtility.isNullOrUndefined($p0.rawEvent))
            if ($p0.rawEvent.keyCode === 13) {
                this.$BE_1($p0);
                $p0.preventDefault()
            }
    },
    $Ih_0: function() {
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$2_1().Command,
            this.get_$2_1().QueryCommand,
            this.get_stateProperties(),
            false);
        $v_0 && this.$7Z_1(this.get_stateProperties()["Value"])
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$I_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.ToggleButtonCommandProperties = function() {};
CUI.Controls.ToggleButton = function($p0, $p1, $p2) {
    this.$$d_$IB_1 = Function.createDelegate(this, this.$IB_1);
    this.$$d_$9F_1 = Function.createDelegate(this, this.$9F_1);
    this.$$d_$9G_1 = Function.createDelegate(this, this.$9G_1);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_$7T_1 = Function.createDelegate(this, this.$7T_1);
    this.$$d_$6O_1 = Function.createDelegate(this, this.$6O_1);
    CUI.Controls.ToggleButton.initializeBase(this, [$p0, $p1, $p2]);
    this._id = $p1;
    this.addDisplayModes();
    this.get_stateProperties()["On"] = false
};
CUI.Controls.ToggleButton.prototype = {
    _id: null,
    $K_1: null,
    $2e_1: null,
    $19_1: null,
    $D_1: null,
    $C_1: null,
    $r_1: null,
    $20_1: null,
    $2b_1: null,
    $2B_1: null,
    $1f_1: null,
    get_on: function() { return this.get_stateProperties()["On"] },
    set_on: function($p0) {
        this.get_stateProperties()["On"] = $p0;
        this.setState($p0);
        return $p0
    },
    createComponentForDisplayModeInternal: function($p0) {
        var $v_0;
        if ($p0.startsWith("Menu")) {
            $v_0 = this.$0_0.$6F_1(this.$6_0 + "-" + $p0 + this.$0_0.$33_1(), $p0, this);
            this.$2e_1 = this.get_$2_1().MenuItemId;
            this.$19_1 = this.get_$2_1().CommandValueId;
            if (CUI.ScriptUtility.isNullOrEmptyString(this.$19_1)) this.$19_1 = this.$2e_1
        } else $v_0 = CUI.Control.prototype.createComponentForDisplayModeInternal.call(this, $p0);
        return $v_0
    },
    createDOMElementForDisplayMode: function($p0) { return this.$48_1($p0, true) },
    $48_1: function($p0, $p1) {
        switch ($p0) {
        case "Large":
            this.$K_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Large", this.get_$2_1(), false, false);
            this.$Ew_0("Large");
            $p1 && this.$Ex_0("Large");
            return this.$K_1;
        case "Medium":
            this.$C_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Medium", this.get_$2_1(), false, false);
            this.$Ew_0("Medium");
            $p1 && this.$Ex_0("Medium");
            return this.$C_1;
        case "Small":
            this.$D_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Small", this.get_$2_1(), false, false);
            this.$Ew_0("Small");
            $p1 && this.$Ex_0("Small");
            return this.$D_1;
        case "Menu":
            this.$r_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Menu", this.get_$2_1(), true, false);
            $p1 && this.$Ex_0("Menu");
            return this.$r_1;
        case "Menu16":
            this.$20_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Menu16", this.get_$2_1(), true, false);
            $p1 && this.$Ex_0("Menu16");
            return this.$20_1;
        case "Menu32":
            this.$2b_1 = CUI.Control
                .createStandardControlDOMElement(this, this.$0_0, "Menu32", this.get_$2_1(), true, false);
            $p1 && this.$Ex_0("Menu32");
            return this.$2b_1;
        default:
            this.ensureValidDisplayMode($p0);
            return null
        }
    },
    $7K_1: null,
    $Ew_0: function($p0) {
        this.$7K_1 = $p0;
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        switch ($p0) {
        case "Large":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$K_1 = $v_0;
            break;
        case "Medium":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$C_1 = $v_0;
            break;
        case "Small":
            if (!CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$D_1 = $v_0;
            break
        }
    },
    $Ex_0: function($p0) {
        switch ($p0) {
        case "Large":
            this.$g_1(this.$K_1, true);
            break;
        case "Medium":
            this.$g_1(this.$C_1, true);
            break;
        case "Small":
            this.$g_1(this.$D_1, true);
            break;
        case "Menu32":
            this.$g_1(this.$2b_1, false);
            break;
        case "Menu16":
            this.$g_1(this.$20_1, false);
            break;
        case "Menu":
            this.$g_1(this.$r_1, false);
            break
        }
    },
    $g_1: function($p0, $p1) {
        if ($p1) {
            $addHandler($p0, "mouseover", this.$$d_$6O_1);
            $addHandler($p0, "mouseout", this.$$d_$7T_1)
        }
        $addHandler($p0, "click", this.$$d_onClick);
        $addHandler($p0, "mouseover", this.$$d_$9G_1);
        $addHandler($p0, "mouseout", this.$$d_$9F_1);
        $addHandler($p0, "focus", this.$$d_$IB_1);
        $addHandler($p0, "blur", this.$$d_$7T_1)
    },
    $Bc_0: function() {
        if (!this.$9_0) return false;
        var $v_0 = this.get_displayedComponent().get_$3_0();
        $v_0.focus();
        return true
    },
    onEnabledChanged: function($p0) {
        CUI.Utility.setEnabledOnElement(this.$D_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$C_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$K_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$r_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$20_1, $p0);
        CUI.Utility.setEnabledOnElement(this.$2b_1, $p0);
        if (this.get_on())
            if ($p0) this.setState(true);
            else this.setState(false)
    },
    get_$CH_0: function() { return "ToggleButton" },
    onStateChanged: function() { this.setState(this.get_stateProperties()["On"]) },
    getDropDownDOMElementForDisplayMode: function($p0) {
        var $v_0;
        switch ($p0) {
        case "Menu16":
            $v_0 = this.$2B_1;
            break;
        case "Text":
            $v_0 = this.$1f_1;
            break;
        default:
            $v_0 = CUI.Utility.$5("span");
            break
        }
        if ($v_0) return $v_0;
        return this.$CM_1($p0)
    },
    $CM_1: function($p0) {
        switch ($p0) {
        case "Menu":
            this.$2B_1 = this.$48_1("Menu", false).cloneNode(true);
            return this.$2B_1;
        case "Menu16":
            this.$2B_1 = this.$48_1("Menu16", false).cloneNode(true);
            return this.$2B_1;
        case "Text":
            var $v_0 = CUI.Utility.$5("a");
            CUI.Utility.$2k($v_0);
            this.$1f_1 = CUI.Utility.$5("span");
            this.$1f_1.className = "ms-cui-textmenuitem";
            CUI.UIUtility.setInnerText($v_0, this.get_$2_1().LabelText);
            this.$1f_1.appendChild($v_0);
            return this.$1f_1;
        default:
            return CUI.Utility.$5("span")
        }
    },
    deselect: function() {},
    getMenuItemId: function() { return this.$2e_1 },
    getCommandValueId: function() { return this.$19_1 },
    focusOnDisplayedComponent: function() { this.receiveFocus() },
    getTextValue: function() { return this.get_$2_1().LabelText },
    receiveFocus: function() {
        this.onBeginFocus();
        var $v_0 = this.get_displayedComponent();
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        $v_0.set_$1b_2(true);
        !CUI.ScriptUtility.isNullOrUndefined(this.$r_1) && this.$r_1.focus();
        !CUI.ScriptUtility.isNullOrUndefined(this.$20_1) && this.$20_1.focus()
    },
    onMenuClosed: function() { this.$n_0() },
    onClick: function($p0) {
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7704);
        this.$n_0();
        $p0.preventDefault();
        if (!this.$9_0) return;
        this.$0_0.set_$7R_1(this);
        var $v_0 = 1, $v_1 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") {
            $v_0 = 3;
            this.get_stateProperties()["CommandValueId"] = this.$19_1
        }
        this.get_stateProperties()["On"] = !this.get_stateProperties()["On"];
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().Command, $v_0, this.get_stateProperties());
        if (this.$0_0.get_$7V_1()) this.$Ih_0();
        else this.setState(this.get_stateProperties()["On"]);
        !CUI.ScriptUtility.isNullOrUndefined(CUI.PMetrics) && CUI.PMetrics.perfMark(7705)
    },
    setState: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$D_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$D_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$D_1, "ms-cui-ctl-on");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$C_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$C_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$C_1, "ms-cui-ctl-on");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$K_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$K_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$K_1, "ms-cui-ctl-on");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$2b_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$2b_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$2b_1, "ms-cui-ctl-on");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$r_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$r_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$r_1, "ms-cui-ctl-on");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$20_1))
            if ($p0) CUI.Utility.ensureCSSClassOnElement(this.$20_1, "ms-cui-ctl-on");
            else CUI.Utility.removeCSSClassFromElement(this.$20_1, "ms-cui-ctl-on")
    },
    $56_1: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$2b_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$2b_1, "ms-cui-ctl-disabledHoveredOver");
        !CUI.ScriptUtility.isNullOrUndefined(this.$r_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$r_1, "ms-cui-ctl-disabledHoveredOver");
        !CUI.ScriptUtility.isNullOrUndefined(this.$20_1) &&
            CUI.Utility.removeCSSClassFromElement(this.$20_1, "ms-cui-ctl-disabledHoveredOver")
    },
    $IB_1: function($p0) {
        this.$0_0.set_$1I_1(this);
        this.$6O_1($p0)
    },
    $6O_1: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) {
            this.$56_1();
            return
        }
        var $v_0 = this.get_displayedComponent();
        CUI.MenuItem.isInstanceOfType($v_0) && $v_0.set_$1b_2(true);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandPreview)) return;
        var $v_1 = 5, $v_2 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === "OptionSelection") {
            $v_1 = 7;
            this.get_stateProperties()["CommandValueId"] = this.$19_1
        }
        $v_0.raiseCommandEvent(this.get_$2_1().CommandPreview, $v_1, this.get_stateProperties())
    },
    $9G_1: function($p0) {
        this.onBeginFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandPreview)) return;
        var $v_0 = 5, $v_1 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") {
            $v_0 = 7;
            this.get_stateProperties()["CommandValueId"] = this.$19_1
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandPreview,
            $v_0,
            this.get_stateProperties())
    },
    $7T_1: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        var $v_0 = this.get_displayedComponent();
        CUI.MenuItem.isInstanceOfType($v_0) && $v_0.set_$1b_2(false);
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandRevert)) return;
        var $v_1 = 6, $v_2 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_2) && $v_2 === "OptionSelection") {
            $v_1 = 8;
            this.get_stateProperties()["CommandValueId"] = this.$19_1
        }
        $v_0.raiseCommandEvent(this.get_$2_1().CommandRevert, $v_1, this.get_stateProperties())
    },
    $9F_1: function($p0) {
        this.onEndFocus();
        if (!this.$9_0) return;
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_$2_1().CommandRevert)) return;
        var $v_0 = 6, $v_1 = this.get_$2_1().CommandType;
        if (!CUI.ScriptUtility.isNullOrUndefined($v_1) && $v_1 === "OptionSelection") {
            $v_0 = 8;
            this.get_stateProperties()["CommandValueId"] = this.$19_1
        }
        this.get_displayedComponent().raiseCommandEvent(this.get_$2_1().CommandRevert, $v_0, this.get_stateProperties())
    },
    $Ih_0: function() {
        var $v_0 = this.pollForStateAndUpdateInternal(this.get_$2_1().Command,
            this.get_$2_1().QueryCommand,
            this.get_stateProperties(),
            false);
        $v_0 && this.setState(this.get_stateProperties()["On"])
    },
    addDisplayModes: function() {
        this.addDisplayMode("Small");
        this.addDisplayMode("Medium");
        this.addDisplayMode("Large");
        this.addDisplayMode("Menu");
        this.addDisplayMode("Menu16");
        this.addDisplayMode("Menu32")
    },
    dispose: function() {
        CUI.Control.prototype.dispose.call(this);
        this.$D_1 = null;
        this.$C_1 = null;
        this.$r_1 = null;
        this.$20_1 = null;
        this.$2b_1 = null;
        this.$2B_1 = null;
        this.$1f_1 = null
    },
    get_$2_1: function() { return this.$7_0 }
};
CUI.Controls.JewelMenuLauncher = function($p0, $p1, $p2, $p3) {
    this.$$d_onContextMenu = Function.createDelegate(this, this.onContextMenu);
    this.$$d_onKeyPress = Function.createDelegate(this, this.onKeyPress);
    this.$$d_onClick = Function.createDelegate(this, this.onClick);
    this.$$d_onBlur = Function.createDelegate(this, this.onBlur);
    this.$$d_onFocus = Function.createDelegate(this, this.onFocus);
    CUI.Controls.JewelMenuLauncher.initializeBase(this, [$p0, $p1, $p2, $p3]);
    this.addDisplayMode("Default")
};
CUI.Controls.JewelMenuLauncher.prototype = {
    $J_2: null,
    $O_2: null,
    $2A_2: null,
    $5N_2: null,
    $1P_2: null,
    $1g_2: null,
    $1R_2: null,
    $3E_2: null,
    $3o_2: false,
    $8V_2: null,
    $8O_2: null,
    $8U_2: null,
    $8L_2: null,
    $2z_2: null,
    $8P_2: null,
    $8N_2: null,
    createDOMElementForDisplayMode: function($p0) {
        if ($p0 !== "Default") {
            this.ensureValidDisplayMode($p0);
            return null
        }
        var $v_0 = CUI.ScriptUtility.isNullOrUndefined(this.get_properties().Alt) ? "" : this.get_properties().Alt;
        this.$J_2 = CUI.Utility.$5("span");
        this.$J_2.id = this.get_properties().Id + "-Default";
        this.$J_2.className = "ms-cui-jewel-jewelMenuLauncher";
        this.$O_2 = CUI.Utility.$5("a");
        CUI.Utility.$2k(this.$O_2);
        this.$O_2.title = $v_0;
        this.$3o_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().LabelText);
        if (!this.$3o_2) {
            this.$2A_2 = CUI.Utility.$5("img");
            this.$5N_2 = CUI.Utility.$w(2,
                10,
                this.get_properties().Image,
                this.get_properties().ImageClass,
                this.$2A_2,
                true,
                false,
                this.get_properties().ImageTop,
                this.get_properties().ImageLeft);
            this.$2A_2.alt = $v_0;
            this.$O_2.appendChild(this.$5N_2)
        } else {
            var $v_1 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ImageLeftSide),
                $v_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().ImageRightSide);
            if ($v_1) {
                this.$1P_2 = CUI.Utility.$5("span");
                this.$1P_2.className = "ms-cui-jewel-left";
                this.$1P_2.id = this.get_properties().Id + "-Default-left";
                CUI.Utility.$2V(this.$1P_2,
                    this.get_properties().ImageLeftSide,
                    this.get_properties().ImageLeftSideClass,
                    this.get_properties().ImageLeftSideTop,
                    this.get_properties().ImageLeftSideLeft,
                    null,
                    this.get_properties().Height);
                this.$1P_2.style.width = this.get_properties().ImageLeftSideWidth + "px";
                this.$1P_2.style.height = this.get_properties().Height + "px";
                this.$O_2.appendChild(this.$1P_2)
            }
            this.$1g_2 = CUI.Utility.$5("span");
            this.$1g_2.className = "ms-cui-jewel-middle";
            this.$1g_2.id = this.get_properties().Id + "-Default-middle";
            CUI.Utility.$2V(this.$1g_2,
                this.get_properties().Image,
                this.get_properties().ImageClass,
                this.get_properties().ImageTop,
                this.get_properties().ImageLeft,
                null,
                this.get_properties().Height);
            this.$3E_2 = CUI.Utility.$5("span");
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .LabelCss)) this.$3E_2.style.cssText = this.get_properties().LabelCss;
            this.$3E_2.className = "ms-cui-jewel-label";
            if (!CUI.ScriptUtility.isNullOrEmptyString(this.get_properties()
                .Height))
                this.$3E_2.style.marginTop = Math.floor(parseInt(this.get_properties().Height) - 14) / 2 + "px";
            CUI.UIUtility.setInnerText(this.$3E_2, this.get_properties().LabelText);
            this.$1g_2.appendChild(this.$3E_2);
            this.$O_2.appendChild(this.$1g_2);
            if ($v_2) {
                this.$1R_2 = CUI.Utility.$5("span");
                this.$1R_2.className = "ms-cui-jewel-right";
                this.$1R_2.id = this.get_properties().Id + "-Default-right";
                CUI.Utility.$2V(this.$1R_2,
                    this.get_properties().ImageRightSide,
                    this.get_properties().ImageRightSideClass,
                    this.get_properties().ImageRightSideTop,
                    this.get_properties().ImageRightSideLeft,
                    null,
                    this.get_properties().Height);
                this.$1R_2.style.width = this.get_properties().ImageRightSideWidth + "px";
                this.$1R_2.style.height = this.get_properties().Height + "px";
                this.$O_2.appendChild(this.$1R_2)
            }
        }
        this.$Ex_0($p0);
        this.$J_2.appendChild(this.$O_2);
        return this.$J_2
    },
    $Ew_0: function($p0) {
        this.ensureValidDisplayMode($p0);
        var $v_0 = $get(this.$6_0 + "-" + $p0);
        this.storeElementForDisplayMode($v_0, $p0);
        var $v_1 = $v_0.childNodes[0];
        this.$J_2 = $v_0;
        this.$O_2 = $v_1;
        this.$3o_2 = !CUI.ScriptUtility.isNullOrEmptyString(this.get_properties().LabelText);
        if (!this.$3o_2) {
            this.$5N_2 = this.$O_2.childNodes[0];
            this.$2A_2 = this.$5N_2.childNodes[0]
        } else {
            this.$1P_2 = $get(this.$6_0 + "-" + $p0 + "-left");
            this.$1g_2 = $get(this.$6_0 + "-" + $p0 + "-middle");
            if (this.$1g_2) this.$3E_2 = this.$1g_2.firstChild;
            this.$1R_2 = $get(this.$6_0 + "-" + $p0 + "-right")
        }
    },
    $Ex_0: function($p0) {
        this.ensureValidDisplayMode($p0);
        this.$8V_2 = this.$$d_onFocus;
        this.$8O_2 = this.$$d_onFocus;
        this.$8U_2 = this.$$d_onBlur;
        this.$8L_2 = this.$$d_onBlur;
        this.$2z_2 = this.$$d_onClick;
        this.$8P_2 = this.$$d_onKeyPress;
        $addHandler(this.$O_2, "mouseover", this.$8V_2);
        $addHandler(this.$O_2, "focus", this.$8O_2);
        $addHandler(this.$O_2, "mouseout", this.$8U_2);
        $addHandler(this.$O_2, "blur", this.$8L_2);
        $addHandler(this.$O_2, "click", this.$2z_2);
        $addHandler(this.$O_2, "keypress", this.$8P_2);
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$8N_2 = this.$$d_onContextMenu;
            $addHandler(this.$O_2, "contextmenu", this.$8N_2)
        }
    },
    dispose: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$O_2) && $clearHandlers(this.$O_2);
        this.$8V_2 = null;
        this.$8O_2 = null;
        this.$8U_2 = null;
        this.$8L_2 = null;
        this.$2z_2 = null;
        this.$8P_2 = null;
        this.$8N_2 = null;
        CUI.MenuLauncher.prototype.dispose.call(this);
        this.$J_2 = null;
        this.$O_2 = null;
        this.$2A_2 = null;
        this.$5N_2 = null;
        this.$1P_2 = null;
        this.$1g_2 = null;
        this.$1R_2 = null;
        this.$3E_2 = null
    },
    onEnabledChanged: function($p0) { CUI.Utility.setEnabledOnElement(this.$O_2, $p0) },
    onFocus: function($p0) {
        if (!this.$9_0 || this.$t_1) return;
        this.$56_2()
    },
    onBlur: function($p0) {
        if (!this.$9_0 || this.$t_1) return;
        this.$1t_2()
    },
    onClick: function($p0) {
        $p0.preventDefault();
        if (!this.$9_0 || CUI.ScriptUtility.isNullOrUndefined($p0) || $p0.button) return;
        if (this.$t_1) {
            this.$6A_1();
            return
        }
        this.$Db_2()
    },
    onKeyPress: function($p0) {
        if (!this.$9_0) return;
        if (!$p0 || !$p0.rawEvent) return;
        var $v_0 = $p0.rawEvent.keyCode;
        if ($v_0 === 13 || $v_0 === 32 || $v_0 === 40) {
            this.$1D_1 = true;
            if (this.$t_1) this.$6A_1();
            else this.$Db_2();
            $p0.preventDefault()
        }
    },
    onContextMenu: function($p0) { !CUI.ScriptUtility.isNullOrUndefined($p0) && $p0.preventDefault() },
    $Db_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageDown)) return;
        if (!this.$3o_2) {
            this.$2A_2.src = this.get_properties().ImageDown;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .ImageDownClass)) this.$2A_2.className = this.get_properties().ImageDownClass
        } else {
            this.$1P_2 &&
                CUI.Utility.$2V(this.$1P_2,
                    this.get_properties().ImageLeftSideDown,
                    this.get_properties().ImageLeftSideDownClass,
                    this.get_properties().ImageLeftSideDownTop,
                    this.get_properties().ImageLeftSideDownLeft,
                    null,
                    this.get_properties().Height);
            CUI.Utility.$2V(this.$1g_2,
                this.get_properties().ImageDown,
                this.get_properties().ImageDownClass,
                this.get_properties().ImageDownTop,
                this.get_properties().ImageDownLeft,
                null,
                this.get_properties().Height);
            this.$1R_2 &&
                CUI.Utility.$2V(this.$1R_2,
                    this.get_properties().ImageRightSideDown,
                    this.get_properties().ImageRightSideDownClass,
                    this.get_properties().ImageRightSideDownTop,
                    this.get_properties().ImageRightSideDownLeft,
                    null,
                    this.get_properties().Height)
        }
        this.launchMenuInternal(this.$O_2)
    },
    onLaunchedMenuClosed: function() {
        this.$1t_2();
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuClose, 10, null)
    },
    launchMenuInternal: function($p0) {
        this.launchMenu($p0);
        this.get_displayedComponent().raiseCommandEvent(this.get_properties().CommandMenuOpen, 4, null)
    },
    $56_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageHover)) return;
        if (!this.$3o_2) {
            this.$2A_2.src = this.get_properties().ImageHover;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .ImageHoverClass)) this.$2A_2.className = this.get_properties().ImageHoverClass
        } else {
            this.$1P_2 &&
                CUI.Utility.$2V(this.$1P_2,
                    this.get_properties().ImageLeftSideHover,
                    this.get_properties().ImageLeftSideHoverClass,
                    this.get_properties().ImageLeftSideHoverTop,
                    this.get_properties().ImageLeftSideHoverLeft,
                    null,
                    this.get_properties().Height);
            CUI.Utility.$2V(this.$1g_2,
                this.get_properties().ImageHover,
                this.get_properties().ImageHoverClass,
                this.get_properties().ImageHoverTop,
                this.get_properties().ImageHoverLeft,
                null,
                this.get_properties().Height);
            this.$1R_2 &&
                CUI.Utility.$2V(this.$1R_2,
                    this.get_properties().ImageRightSideHover,
                    this.get_properties().ImageRightSideHoverClass,
                    this.get_properties().ImageRightSideHoverTop,
                    this.get_properties().ImageRightSideHoverLeft,
                    null,
                    this.get_properties().Height)
        }
    },
    $1t_2: function() {
        if (CUI.ScriptUtility.isNullOrUndefined(this.get_properties().ImageHover)) return;
        if (!this.$3o_2) {
            this.$2A_2.src = this.get_properties().Image;
            if (!CUI.ScriptUtility.isNullOrUndefined(this.get_properties()
                .ImageClass)) this.$2A_2.className = this.get_properties().ImageClass
        } else {
            this.$1P_2 &&
                CUI.Utility.$2V(this.$1P_2,
                    this.get_properties().ImageLeftSide,
                    this.get_properties().ImageLeftSideClass,
                    this.get_properties().ImageLeftSideTop,
                    this.get_properties().ImageLeftSideLeft,
                    null,
                    this.get_properties().Height);
            CUI.Utility.$2V(this.$1g_2,
                this.get_properties().Image,
                this.get_properties().ImageClass,
                this.get_properties().ImageTop,
                this.get_properties().ImageLeft,
                null,
                this.get_properties().Height);
            this.$1R_2 &&
                CUI.Utility.$2V(this.$1R_2,
                    this.get_properties().ImageRightSide,
                    this.get_properties().ImageRightSideClass,
                    this.get_properties().ImageRightSideTop,
                    this.get_properties().ImageRightSideLeft,
                    null,
                    this.get_properties().Height)
        }
    },
    get_properties: function() { return this.$7_0 },
    $Gi_2: function() { this.$O_2.focus() }
};
Type.registerNamespace("CUI.Page");
CUI.Page.CommandDispatcher = function() { this.$30_0 = {} };
CUI.Page.CommandDispatcher.prototype = {
    $30_0: null,
    $DV_0: function() {},
    $78_0: 0,
    getNextSequenceNumber: function() {
        if (this.$78_0 + 1 < 0)
            throw Error.create("Command Dispatcher sequence numbers overflowed into negative numbers.");
        return ++this.$78_0
    },
    peekNextSequenceNumber: function() { return this.$78_0 + 1 },
    getLastSequenceNumber: function() { return this.$78_0 },
    executeCommand: function(commandId, properties) {
        return this.$GW_0(commandId, properties, this.getNextSequenceNumber())
    },
    $GW_0: function($p0, $p1, $p2) {
        var $v_0 = this.$30_0[$p0];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        else if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = $v_0, $v_2 = false, $v_3 = 0; $v_3 < $v_1.length; $v_3++) {
                var $v_4 = $v_1[$v_3];
                if (this.callCommandHandler($v_4, $p0, $p1, $p2)) $v_2 = true
            }
            return $v_2
        } else return this.callCommandHandler($v_0, $p0, $p1, $p2)
    },
    isCommandEnabled: function(commandId) {
        var $v_0 = this.$30_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        else if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = $v_0, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (this.callCommandHandlerForEnabled($v_3, commandId)) return true
            }
            return false
        } else return this.callCommandHandlerForEnabled($v_0, commandId)
    },
    $DD_0: function($p0) { return this.$30_0[$p0] },
    registerCommandHandler: function(commandId, handler) {
        if (CUI.ScriptUtility
            .isNullOrUndefined(commandId) ||
            CUI.ScriptUtility.isNullOrUndefined(handler))
            throw Error.create("commandId and handler may not be null or undefined");
        var $v_0 = this.$30_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) this.$30_0[commandId] = handler;
        else if (Array.isInstanceOfType($v_0)) !Array.contains($v_0, handler) && Array.add($v_0, handler);
        else {
            if ($v_0 === handler) return;
            var $v_1 = [];
            Array.add($v_1, $v_0);
            Array.add($v_1, handler);
            this.$30_0[commandId] = $v_1
        }
    },
    unregisterCommandHandler: function(commandId, handler) {
        if (CUI.ScriptUtility
            .isNullOrUndefined(commandId) ||
            CUI.ScriptUtility.isNullOrUndefined(handler))
            throw Error.create("commandId and handler may not be null or undefined");
        var $v_0 = this.$30_0[commandId];
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return;
        else if (Array.isInstanceOfType($v_0)) Array.remove($v_0, handler);
        else if ($v_0 === handler) this.$30_0[commandId] = null
    },
    registerMultipleCommandHandler: function(component, commands) {
        for (var $v_0 = 0; $v_0 < commands.length; $v_0++) this.registerCommandHandler(commands[$v_0], component)
    },
    unregisterMultipleCommandHandler: function(component, commands) {
        for (var $v_0 = 0; $v_0 < commands.length; $v_0++) this.unregisterCommandHandler(commands[$v_0], component)
    },
    callCommandHandler: function(handler, commandId, properties, sequenceNumber) {
        return handler.handleCommand(commandId, properties, sequenceNumber)
    },
    callCommandHandlerForEnabled: function(handler, commandId) { return handler.canHandleCommand(commandId) }
};
CUI.Page.FocusManager = function($p0) {
    CUI.Page.FocusManager.initializeBase(this);
    this.$2O_1 = $p0;
    this.$k_1 = [];
    this.$3O_1 = {};
    this.$1c_1 = [];
    this.$3H_1 = {}
};
CUI.Page.FocusManager.prototype = {
    $1c_1: null,
    $3O_1: null,
    $2O_1: null,
    $3H_1: null,
    $DV_0: function() {},
    $DN_1: function() {
        this.$3H_1 = {};
        for (var $v_0 = this.$1c_1.length, $v_1 = 0; $v_1 < $v_0; $v_1++) {
            var $v_2 = this.$1c_1[$v_1];
            this.$3H_1[$v_2] = $v_2
        }
    },
    requestFocusForComponent: function(component) {
        if (CUI.ScriptUtility.isNullOrUndefined(component)) return false;
        if (Array.contains(this.$1c_1, component)) return true;
        Array.add(this.$1c_1, component);
        this.$DN_1();
        component.receiveFocus();
        return true
    },
    releaseFocusFromComponent: function(component) {
        if (CUI.ScriptUtility.isNullOrUndefined(component)) return false;
        if (!Array.contains(this.$1c_1, component)) return true;
        Array.remove(this.$1c_1, component);
        this.$DN_1();
        component.yieldFocus();
        return true
    },
    releaseAllFoci: function() {
        this.$3H_1 = {};
        for (var $v_0 = this.$1c_1.length, $v_1 = $v_0 - 1; $v_1 >= 0; $v_1--) {
            var $v_2 = this.$1c_1[$v_1];
            Array.remove(this.$1c_1, $v_2);
            $v_2.yieldFocus()
        }
        return true
    },
    getFocusedComponents: function() { return Array.clone(this.$1c_1) },
    handleCommand: function(commandId, properties, sequenceNumber) {
        var $v_0 = this.$DD_0(commandId);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        else if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = $v_0, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (CUI.ScriptUtility.isNullOrUndefined(this.$3H_1[$v_3])) continue;
                if (this.callCommandHandler($v_3, commandId, properties, sequenceNumber)) return true
            }
            return false
        } else {
            if (CUI.ScriptUtility.isNullOrUndefined(this.$3H_1[$v_0])) return false;
            return this.callCommandHandler($v_0, commandId, properties, sequenceNumber)
        }
    },
    canHandleCommand: function(commandId) {
        var $v_0 = this.$DD_0(commandId);
        if (CUI.ScriptUtility.isNullOrUndefined($v_0)) return false;
        else if (Array.isInstanceOfType($v_0)) {
            for (var $v_1 = $v_0, $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if (CUI.ScriptUtility.isNullOrUndefined(this.$3H_1[$v_3])) continue;
                if (this.callCommandHandlerForEnabled($v_3, commandId)) return true
            }
            return false
        } else {
            if (CUI.ScriptUtility.isNullOrUndefined(this.$3H_1[$v_0])) return false;
            return this.callCommandHandlerForEnabled($v_0, commandId)
        }
    },
    $k_1: null,
    $Bx_1: function($p0) {
        if (Array.contains(this.$k_1, $p0)) return;
        this.registerMultipleCommandHandler($p0, $p0.getFocusedCommands());
        Array.add(this.$k_1, $p0)
    },
    $J5_1: function($p0) {
        if (!Array.contains(this.$k_1, $p0)) return;
        this.unregisterMultipleCommandHandler($p0, $p0.getFocusedCommands());
        this.releaseFocusFromComponent($p0);
        Array.remove(this.$k_1, $p0)
    },
    executeCommand: function(commandId, properties) {
        throw Error
            .create("ExecuteCommand should not be called on the main CommandDispatcher of the page, not the FocusManager")
    },
    registerCommandHandler: function(commandId, handler) {
        CUI.Page.CommandDispatcher.prototype.registerCommandHandler.call(this, commandId, handler);
        if (CUI.ScriptUtility.isNullOrUndefined(this.$3O_1[commandId])) {
            this.$2O_1.$z_1.registerCommandHandler(commandId, this);
            this.$3O_1[commandId] = 0
        }
        var $v_0 = this.$3O_1[commandId];
        this.$3O_1[commandId] = $v_0 + 1
    },
    unregisterCommandHandler: function(commandId, handler) {
        CUI.Page.CommandDispatcher.prototype.unregisterCommandHandler.call(this, commandId, handler);
        var $v_0 = this.$3O_1[commandId];
        if (!CUI.ScriptUtility.isNullOrUndefined($v_0) && $v_0 > 0) {
            this.$3O_1[commandId] = --$v_0;
            if ($v_0 <= 0) {
                this.$2O_1.$z_1.unregisterCommandHandler(commandId, this);
                delete this.$3O_1[commandId]
            }
        }
    },
    getNextSequenceNumber: function() {
        throw Error
            .create("The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.")
    },
    peekNextSequenceNumber: function() {
        throw Error
            .create("The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.")
    },
    getLastSequenceNumber: function() {
        throw Error
            .create("The FocusManager does not issue command sequence numbers.  This is only done by the main CommandDispatcher of the page.")
    },
    callCommandHandler: function(handler, commandId, properties, sequenceNumber) {
        if (!Array.contains(this.$1c_1, handler)) return false;
        return handler.handleCommand(commandId, properties, sequenceNumber)
    },
    callCommandHandlerForEnabled: function(handler, commandId) {
        if (!Array.contains(this.$1c_1, handler)) return false;
        return handler.canHandleCommand(commandId)
    }
};
CUI.Page.PageManager = function() {
    this.$$d_$BH_1 = Function.createDelegate(this, this.$BH_1);
    CUI.Page.PageManager.initializeBase(this);
    this.$k_1 = [];
    this.$5F_1 = {};
    this.$z_1 = new CUI.Page.CommandDispatcher;
    this.$4f_1 = new CUI.Page.FocusManager(this);
    this.$7F_1 = new CUI.Page.UndoManager(this);
    this.$23_1 = [];
    this.$2N_1 = this.$$d_$BH_1;
    $addHandler(window, "unload", this.$2N_1)
};
CUI.Page.PageManager.initialize = function() {
    if (!CUI.ScriptUtility.isNullOrUndefined(CUI.Page.PageManager._instance)) return;
    CUI.Page.PageManager._instance = CUI.Page.PageManager.createPageManager();
    CUI.Page.PageManager._instance.initializeInternal()
};
CUI.Page.PageManager.createPageManager = function() { return new CUI.Page.PageManager };
CUI.Page.PageManager.get_instance = function() {
    !CUI.Page.PageManager._instance && CUI.Page.PageManager.initialize();
    return CUI.Page.PageManager._instance
};
CUI.Page.PageManager.prototype = {
    $2N_1: null,
    initializeInternal: function() {
        this.$z_1.$DV_0();
        this.$7F_1.$DV_0();
        this.$4f_1.$DV_0();
        this.$z_1.registerCommandHandler("appstatechanged", this)
    },
    $BH_1: function($p0) { this.dispose() },
    dispose: function() {
        !CUI.ScriptUtility.isNullOrUndefined(this.$1Z_1) && this.$1Z_1.$Gf_1();
        this.$4f_1 = null;
        this.$7F_1 = null;
        this.$z_1 = null;
        this.$23_1 = null;
        this.$k_1 = null;
        $removeHandler(window, "unload", this.$2N_1)
    },
    $z_1: null,
    get_commandDispatcher: function() { return this.$z_1 },
    $4f_1: null,
    get_focusManager: function() { return this.$4f_1 },
    $7F_1: null,
    get_undoManager: function() { return this.$7F_1 },
    $82_1: null,
    get_$Af_1: function() {
        if (!this.$82_1) this.$82_1 = new Sys.EventHandlerList;
        return this.$82_1
    },
    $1Z_1: null,
    get_ribbon: function() { return this.$1Z_1 },
    set_ribbon: function(value) {
        if (value === this.$1Z_1) return value;
        if (CUI.ScriptUtility.isNullOrUndefined(value) && !CUI.ScriptUtility.isNullOrUndefined(this.$1Z_1)) {
            this.removeRoot(this.$1Z_1);
            this.$1Z_1 = null
        } else if (!Array.contains(this.$23_1, value)) {
            this.addRoot(value);
            this.$1Z_1 = value
        }
        return value
    },
    add_ribbonInited: function(value) { this.get_$Af_1().addHandler("RibbonInited", value) },
    remove_ribbonInited: function(value) { this.get_$Af_1().removeHandler("RibbonInited", value) },
    onComponentBuilt: function(root, componentId) {
        this.pollRootState(root);
        if (CUI.Ribbon.isInstanceOfType(root)) {
            var $v_0 = this.get_$Af_1().getHandler("RibbonInited");
            $v_0 && $v_0(this, Sys.EventArgs.Empty)
        }
    },
    onComponentCreated: function(root, componentId) {
        if (CUI.Ribbon.isInstanceOfType(root) && CUI.ScriptUtility.isNullOrUndefined(this.$1Z_1)) this.set_ribbon(root);
        else this.addRoot(root)
    },
    $23_1: null,
    addRoot: function(root) {
        if (Array.contains(this.$23_1, root)) throw Error.create("This Root has already been added to the PageManager");
        Array.add(this.$23_1, root);
        root.set_rootUser(this)
    },
    removeRoot: function(root) {
        if (!Array.contains(this.$23_1, root)) throw Error.create("This Root has not been added to the PageManager.");
        Array.remove(this.$23_1, root);
        root.set_rootUser(null)
    },
    disposeAllRoots: function() {
        this.$1Z_1 = null;
        for (var $v_0 = 0; $v_0 < this.$23_1.length; $v_0++) {
            var $v_1 = this.$23_1[$v_0];
            $v_1.dispose()
        }
        this.$23_1 = []
    },
    $k_1: null,
    $5F_1: null,
    getPageComponentById: function(id) { return this.$5F_1[id] },
    addPageComponent: function(component) {
        !CUI.ScriptUtility.isNullOrUndefined(this.$5F_1[component.getId()]) &&
            Error
            .create("A PageComponent with id: " + component.getId() + " has already been added to the PageManger.");
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$k_1) && !Array.contains(this.$k_1, component)) {
            this.$5F_1[component.getId()] = component;
            component.init();
            this.$z_1.registerMultipleCommandHandler(component, component.getGlobalCommands());
            Array.add(this.$k_1, component);
            component.isFocusable() && this.$4f_1.$Bx_1(component)
        }
    },
    removePageComponent: function(component) {
        if (CUI.ScriptUtility.isNullOrUndefined(this.$k_1) || !Array.contains(this.$k_1, component)) return;
        this.$z_1.unregisterMultipleCommandHandler(component, component.getGlobalCommands());
        Array.remove(this.$k_1, component);
        component.isFocusable() && this.$4f_1.$J5_1(component);
        this.$5F_1[component.getId()] = null
    },
    executeRootCommand: function(commandId, properties, commandInfo, root) {
        return this.$z_1.executeCommand(commandId, properties)
    },
    isRootCommandEnabled: function(commandId, root) { return this.$z_1.isCommandEnabled(commandId) },
    onRootRefreshed: function(root) { !CUI.ScriptUtility.isNullOrUndefined(root) && this.pollRootState(root) },
    handleCommand: function(commandId, properties, sequenceNumber) {
        if (commandId === "appstatechanged") {
            for (var $v_0 = 0; $v_0 < this.$23_1.length; $v_0++) {
                var $v_1 = this.$23_1[$v_0];
                this.pollRootState($v_1);
                $v_1.$o_0 && $v_1.$2W_0()
            }
            return true
        }
        return false
    },
    $8e_1: false,
    get_rootPollingInProgress: function() { return this.$8e_1 },
    pollRootState: function(root) {
        try {
            this.$8e_1 = true;
            root.pollForStateAndUpdate()
        } finally {
            this.$8e_1 = false
        }
    },
    changeCommandContext: function(commandContextId) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$1Z_1)) return this.$1Z_1.selectTabByCommand(commandContextId);
        return false
    },
    canHandleCommand: function(commandId) { return commandId === "appstatechanged" },
    restoreFocusToRibbon: function() { !this.$1Z_1.restoreFocus() && this.$1Z_1.setFocus() }
};
CUI.Page.UndoManager = function($p0) {
    this.$AA_0 = CUI.Page.UndoManager.$34;
    this.$2O_0 = $p0;
    this.$1S_0 = [];
    this.$1E_0 = [];
    this.$2h_0 = {}
};
CUI.Page.UndoManager.prototype = {
    $2O_0: null,
    $2h_0: null,
    $1S_0: null,
    $1E_0: null,
    $DV_0: function() {
        this.$2O_0.$z_1.registerCommandHandler("GlobalUndo", this);
        this.$2O_0.$z_1.registerCommandHandler("GlobalRedo", this);
        this.$2O_0.$z_1.registerCommandHandler("grpedit", this)
    },
    addUndoSequenceNumber: function(sequenceNumber) {
        this.$Iv_0(sequenceNumber);
        sequenceNumber !== this.$AA_0 && this.$G1_0()
    },
    addRedoSequenceNumber: function(sequenceNumber) { this.$Iu_0(sequenceNumber) },
    get_oldestSequenceNumber: function() {
        if (!this.$1S_0.length) return CUI.Page.UndoManager.$34;
        var $v_0 = CUI.Page.UndoManager.$34, $v_1 = CUI.Page.UndoManager.$34;
        if (this.$1S_0.length > 0) $v_0 = this.$1S_0[this.$1S_0.length - 1];
        if (this.$1E_0.length > 0) $v_1 = this.$1E_0[0];
        if ($v_0 === CUI.Page.UndoManager.$34) return $v_0;
        else return $v_0
    },
    $Fz_0: function() {
        var $v_0 = this.$Ik_0();
        if ($v_0 === CUI.Page.UndoManager.$34) return;
        var $v_1 = {};
        $v_1["SequenceNumber"] = $v_0;
        this.$2O_0.$z_1.executeCommand("Undo", $v_1)
    },
    $Fy_0: function() {
        var $v_0 = this.$Ii_0();
        if ($v_0 === CUI.Page.UndoManager.$34) return;
        var $v_1 = {};
        $v_1["SequenceNumber"] = $v_0;
        this.$AA_0 = this.$2O_0.$z_1.peekNextSequenceNumber();
        this.$2O_0.$z_1.executeCommand("Redo", $v_1)
    },
    $Ii_0: function() {
        if (!this.$1E_0.length) return CUI.Page.UndoManager.$34;
        var $v_0 = this.$1E_0[0];
        Array.removeAt(this.$1E_0, 0);
        this.$2h_0[$v_0.toString()] = null;
        return $v_0
    },
    $Iu_0: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$2h_0[$p0.toString()])) {
            if (this.$1S_0[0] !== $p0)
                throw Error
                    .create("This command sequence number is already on the undo or the redo stack but it is not ontop of the redo stack.  Pushing it would result in out of sequence redo and undo stacks.");
            return
        }
        Array.insert(this.$1E_0, 0, $p0);
        this.$2h_0[$p0.toString()] = $p0
    },
    $Ik_0: function() {
        if (!this.$1S_0.length) return CUI.Page.UndoManager.$34;
        var $v_0 = this.$1S_0[0];
        Array.removeAt(this.$1S_0, 0);
        this.$2h_0[$v_0.toString()] = null;
        return $v_0
    },
    $Iv_0: function($p0) {
        if (!CUI.ScriptUtility.isNullOrUndefined(this.$2h_0[$p0.toString()])) {
            if (this.$1S_0[0] !== $p0)
                throw Error
                    .create("This command sequence number is already on the stack and not on top.  Pushing it would result in an out of sequence undo stack.");
            return
        }
        Array.insert(this.$1S_0, 0, $p0);
        this.$2h_0[$p0.toString()] = $p0
    },
    $G1_0: function() {
        for (var $v_0 = 0; $v_0 < this.$1E_0.length; $v_0++) {
            this.$2h_0[this.$1E_0[$v_0].toString()] = null;
            Array.remove(this.$1E_0, this.$1E_0[$v_0])
        }
        Array.clear(this.$1E_0)
    },
    invalidateUndoSequenceNumber: function(sequenceNumber) {
        for (var $v_0 = this.$1S_0.length - 1; $v_0 > -1; $v_0--) {
            var $v_1 = this.$1S_0[$v_0];
            if ($v_1 <= sequenceNumber) {
                Array.removeAt(this.$1S_0, $v_0);
                this.$2h_0[$v_1.toString()] = null
            }
        }
        while (this.$1E_0.length > 0 && this.$1E_0[0] <= sequenceNumber) {
            this.$2h_0[this.$1E_0[0].toString()] = null;
            Array.removeAt(this.$1E_0, 0)
        }
    },
    canHandleCommand: function(commandId) {
        if (commandId === "GlobalUndo") return this.$1S_0.length > 0;
        else if (commandId === "GlobalRedo") return this.$1E_0.length > 0;
        else if (commandId === "grpedit") return true;
        return false
    },
    handleCommand: function(commandId, properties, sequenceNumber) {
        switch (commandId) {
        case "GlobalUndo":
            this.$Fz_0();
            return true;
        case "GlobalRedo":
            this.$Fy_0();
            return true
        }
        return false
    }
};
Type.registerNamespace("Commands");
Commands.CommandIds = function() {};
Commands.GlobalRedoProperties = function() {};
Commands.RedoProperties = function() {};
Commands.GlobalUndoProperties = function() {};
Commands.UndoProperties = function() {};
Mscrm.CommandInformation.registerClass("Mscrm.CommandInformation");
Mscrm.ContextualGroupInfo.registerClass("Mscrm.ContextualGroupInfo");
Mscrm.CommandBarBase.registerClass("Mscrm.CommandBarBase", Mscrm.CrmUIControl);
Mscrm.CommandBarMenu.registerClass("Mscrm.CommandBarMenu");
Mscrm.CommandBarMoreMenu.registerClass("Mscrm.CommandBarMoreMenu", Mscrm.CommandBarMenu);
Mscrm.CommandBar.registerClass("Mscrm.CommandBar", Mscrm.CommandBarBase);
Mscrm.CommandBarBuildOptions.registerClass("Mscrm.CommandBarBuildOptions");
Mscrm.CommandBarBuilder.registerClass("Mscrm.CommandBarBuilder");
Mscrm.TemplateGenerator.registerClass("Mscrm.TemplateGenerator");
Mscrm.CommandBarConstants.registerClass("Mscrm.CommandBarConstants");
Mscrm.CommandBarControl.registerClass("Mscrm.CommandBarControl", null, Sys.IDisposable);
Mscrm.ButtonControl.registerClass("Mscrm.ButtonControl", Mscrm.CommandBarControl);
Mscrm.MenuAwareControl.registerClass("Mscrm.MenuAwareControl", Mscrm.CommandBarControl);
Mscrm.FlyoutAnchorControl.registerClass("Mscrm.FlyoutAnchorControl", Mscrm.MenuAwareControl);
Mscrm.ToggleButtonControl.registerClass("Mscrm.ToggleButtonControl", Mscrm.CommandBarControl);
Mscrm.SplitButtonControl.registerClass("Mscrm.SplitButtonControl", Mscrm.MenuAwareControl);
Mscrm.CustomTabControl.registerClass("Mscrm.CustomTabControl", Mscrm.MenuAwareControl);
Mscrm.CheckBoxControl.registerClass("Mscrm.CheckBoxControl", Mscrm.ToggleButtonControl);
Mscrm.SpinnerCommandProperties.registerClass("Mscrm.SpinnerCommandProperties");
Mscrm.SpinnerControl.registerClass("Mscrm.SpinnerControl", Mscrm.CommandBarControl);
Mscrm.CommandHandler.registerClass("Mscrm.CommandHandler", CUI.Page.PageComponent);
Mscrm.CommandHandlerWrapper.registerClass("Mscrm.CommandHandlerWrapper", CUI.Page.PageComponent);
Mscrm.AlwaysEnabledCommandHandler.registerClass("Mscrm.AlwaysEnabledCommandHandler", CUI.Page.PageComponent);
CUI.DataSource.registerClass("CUI.DataSource", null, Sys.IDisposable);
Mscrm.CrmDataSource.registerClass("Mscrm.CrmDataSource", CUI.DataSource);
Mscrm.DynamicMenuCommandHandler.registerClass("Mscrm.DynamicMenuCommandHandler", Mscrm.CommandHandler);
Mscrm.CommandData.registerClass("Mscrm.CommandData", Mscrm.CrmUIComponent, Mscrm.ICommandData);
Mscrm.RibbonData.registerClass("Mscrm.RibbonData", Mscrm.CommandData);
Mscrm.RibbonHeaderScaling.registerClass("Mscrm.RibbonHeaderScaling");
Mscrm.RibbonManager.registerClass("Mscrm.RibbonManager", Mscrm.CrmUIControl);
Mscrm.RibbonNavigationModel.registerClass("Mscrm.RibbonNavigationModel");
Mscrm.CommandBarData.registerClass("Mscrm.CommandBarData", Mscrm.CommandData);
CUI.QueryRecord.registerClass("CUI.QueryRecord");
CUI.DeclarativeTemplateBuildContext.registerClass("CUI.DeclarativeTemplateBuildContext");
CUI.CommandInformation.registerClass("CUI.CommandInformation");
CUI.DisabledCommandInfoProperties.registerClass("CUI.DisabledCommandInfoProperties");
CUI.BuildOptions.registerClass("CUI.BuildOptions");
CUI.BuildContext.registerClass("CUI.BuildContext");
CUI.DataNodeWrapper.registerClass("CUI.DataNodeWrapper");
CUI.Builder.registerClass("CUI.Builder", null, Sys.IDisposable);
CUI.CommandEventArgs.registerClass("CUI.CommandEventArgs", Sys.EventArgs);
CUI.Component.registerClass("CUI.Component", null, CUI.IMenuItem, Sys.IDisposable);
CUI.Menu.registerClass("CUI.Menu", CUI.Component);
CUI.ContextMenu.registerClass("CUI.ContextMenu", CUI.Menu);
CUI.ContextMenuDock.registerClass("CUI.ContextMenuDock", CUI.Component);
CUI.Control.registerClass("CUI.Control", null, Sys.IDisposable, CUI.IMenuItem);
CUI.MenuLauncher.registerClass("CUI.MenuLauncher", CUI.Control, CUI.IModalController);
CUI.ContextMenuLauncher.registerClass("CUI.ContextMenuLauncher", CUI.MenuLauncher);
CUI.RootProperties.registerClass("CUI.RootProperties");
CUI.ContextMenuRootProperties.registerClass("CUI.ContextMenuRootProperties", CUI.RootProperties);
CUI.Root.registerClass("CUI.Root", CUI.Component, Sys.IDisposable);
CUI.ContextMenuRoot.registerClass("CUI.ContextMenuRoot", CUI.Root);
CUI.ControlProperties.registerClass("CUI.ControlProperties");
CUI.ControlComponent.registerClass("CUI.ControlComponent", CUI.Component);
CUI.DataQueryResult.registerClass("CUI.DataQueryResult");
CUI.DataQuery.registerClass("CUI.DataQuery");
CUI.Gallery.registerClass("CUI.Gallery", CUI.Component);
CUI.Jewel.registerClass("CUI.Jewel", CUI.Root);
CUI.JewelBuildContext.registerClass("CUI.JewelBuildContext", CUI.BuildContext);
CUI.JewelBuildOptions.registerClass("CUI.JewelBuildOptions", CUI.BuildOptions);
CUI.JewelBuilder.registerClass("CUI.JewelBuilder", CUI.Builder);
CUI.MenuItem.registerClass("CUI.MenuItem", CUI.ControlComponent);
CUI.MenuLauncherControlProperties.registerClass("CUI.MenuLauncherControlProperties", CUI.ControlProperties);
CUI.BrowserUtility.registerClass("CUI.BrowserUtility");
CUI.MenuSection.registerClass("CUI.MenuSection", CUI.Component);
CUI.QAT.registerClass("CUI.QAT", CUI.Root);
CUI.QATBuildContext.registerClass("CUI.QATBuildContext", CUI.BuildContext);
CUI.QATBuildOptions.registerClass("CUI.QATBuildOptions", CUI.BuildOptions);
CUI.QATBuilder.registerClass("CUI.QATBuilder", CUI.Builder);
CUI.RibbonPeripheralSection.registerClass("CUI.RibbonPeripheralSection");
CUI.ContextualGroup.registerClass("CUI.ContextualGroup", null, Sys.IDisposable);
CUI.Template.registerClass("CUI.Template");
CUI.DeclarativeTemplate.registerClass("CUI.DeclarativeTemplate", CUI.Template);
CUI.RibbonComponent.registerClass("CUI.RibbonComponent", CUI.Component);
CUI.Group.registerClass("CUI.Group", CUI.RibbonComponent);
CUI.GroupPopup.registerClass("CUI.GroupPopup", CUI.Component);
CUI.Layout.registerClass("CUI.Layout", CUI.RibbonComponent);
CUI.GroupPopupLayout.registerClass("CUI.GroupPopupLayout", CUI.Layout);
CUI.RootEventCommandProperties.registerClass("CUI.RootEventCommandProperties");
CUI.RibbonEventCommandProperties.registerClass("CUI.RibbonEventCommandProperties", CUI.RootEventCommandProperties);
CUI.CommandContextSwitchCommandProperties.registerClass("CUI.CommandContextSwitchCommandProperties");
CUI.Ribbon.registerClass("CUI.Ribbon", CUI.Root);
CUI.RibbonCommand.registerClass("CUI.RibbonCommand");
CUI.RibbonBuildContext.registerClass("CUI.RibbonBuildContext", CUI.BuildContext);
CUI.RibbonBuildOptions.registerClass("CUI.RibbonBuildOptions", CUI.BuildOptions);
CUI.RibbonBuilder.registerClass("CUI.RibbonBuilder", CUI.Builder);
CUI.Row.registerClass("CUI.Row", CUI.Component);
CUI.ScalingStep.registerClass("CUI.ScalingStep");
CUI.Scaling.registerClass("CUI.Scaling");
CUI.Section.registerClass("CUI.Section", CUI.RibbonComponent);
CUI.Strip.registerClass("CUI.Strip", CUI.RibbonComponent);
CUI.Tab.registerClass("CUI.Tab", CUI.RibbonComponent);
CUI.TemplateManager.registerClass("CUI.TemplateManager");
CUI.RootUser.registerClass("CUI.RootUser");
CUI.ButtonDock.registerClass("CUI.ButtonDock", CUI.Component);
CUI.Toolbar.registerClass("CUI.Toolbar", CUI.Root);
CUI.ToolbarBuildContext.registerClass("CUI.ToolbarBuildContext", CUI.BuildContext);
CUI.ToolbarBuildOptions.registerClass("CUI.ToolbarBuildOptions", CUI.BuildOptions);
CUI.ToolbarBuilder.registerClass("CUI.ToolbarBuilder", CUI.Builder);
CUI.ToolTip.registerClass("CUI.ToolTip", CUI.Component);
CUI.Unit.registerClass("CUI.Unit");
CUI.Utility.registerClass("CUI.Utility");
CUI.ScriptUtility.registerClass("CUI.ScriptUtility");
CUI.UIUtility.registerClass("CUI.UIUtility");
CUI.ListNode.registerClass("CUI.ListNode");
CUI.List.registerClass("CUI.List", null, IEnumerable);
CUI.ListEnumerator.registerClass("CUI.ListEnumerator", null, IEnumerator);
CUI.JsonXmlElement.registerClass("CUI.JsonXmlElement");
CUI.Controls.ColorStyle.registerClass("CUI.Controls.ColorStyle");
CUI.Controls.ColorPickerResult.registerClass("CUI.Controls.ColorPickerResult");
CUI.Controls.ContextMenuControlProperties.registerClass("CUI.Controls.ContextMenuControlProperties",
    CUI.MenuLauncherControlProperties);
CUI.Controls.ContextMenuControl.registerClass("CUI.Controls.ContextMenuControl", CUI.ContextMenuLauncher);
CUI.Controls.Button.registerClass("CUI.Controls.Button", CUI.Control, CUI.IMenuItem, CUI.ISelectableControl);
CUI.Controls.CheckBoxCommandProperties.registerClass("CUI.Controls.CheckBoxCommandProperties");
CUI.Controls.ToggleButton
    .registerClass("CUI.Controls.ToggleButton", CUI.Control, CUI.IMenuItem, CUI.ISelectableControl);
CUI.Controls.CheckBox.registerClass("CUI.Controls.CheckBox", CUI.Controls.ToggleButton);
CUI.Controls.ColorPickerCommandProperties.registerClass("CUI.Controls.ColorPickerCommandProperties");
CUI.Controls.ColorPicker.registerClass("CUI.Controls.ColorPicker", CUI.Control, CUI.IMenuItem);
CUI.Controls.ComboBoxCommandProperties.registerClass("CUI.Controls.ComboBoxCommandProperties");
CUI.Controls.DropDown.registerClass("CUI.Controls.DropDown", CUI.MenuLauncher);
CUI.Controls.ComboBox.registerClass("CUI.Controls.ComboBox", CUI.Controls.DropDown);
CUI.Controls.DropDownCommandProperties.registerClass("CUI.Controls.DropDownCommandProperties");
CUI.Controls.FlyoutAnchor.registerClass("CUI.Controls.FlyoutAnchor", CUI.MenuLauncher);
CUI.Controls.GalleryButtonCommandProperties.registerClass("CUI.Controls.GalleryButtonCommandProperties");
CUI.Controls.GalleryButton.registerClass("CUI.Controls.GalleryButton", CUI.Control, CUI.ISelectableControl);
CUI.Controls.InsertTableCommandProperties.registerClass("CUI.Controls.InsertTableCommandProperties");
CUI.Controls.InsertTable.registerClass("CUI.Controls.InsertTable", CUI.Control);
CUI.Controls.LabelCommandProperties.registerClass("CUI.Controls.LabelCommandProperties");
CUI.Controls.Label.registerClass("CUI.Controls.Label", CUI.Control);
CUI.Controls.MRUSplitButton.registerClass("CUI.Controls.MRUSplitButton", CUI.Controls.DropDown);
CUI.Controls.Separator.registerClass("CUI.Controls.Separator", CUI.Control);
CUI.Controls.SpinnerCommandProperties.registerClass("CUI.Controls.SpinnerCommandProperties");
CUI.Controls.Spinner.registerClass("CUI.Controls.Spinner", CUI.Control);
CUI.Controls.SplitButton.registerClass("CUI.Controls.SplitButton", CUI.MenuLauncher);
CUI.Controls.TextBoxCommandProperties.registerClass("CUI.Controls.TextBoxCommandProperties");
CUI.Controls.TextBox.registerClass("CUI.Controls.TextBox", CUI.Control);
CUI.Controls.ToggleButtonCommandProperties.registerClass("CUI.Controls.ToggleButtonCommandProperties");
CUI.Controls.JewelMenuLauncher.registerClass("CUI.Controls.JewelMenuLauncher", CUI.MenuLauncher);
CUI.Page.CommandDispatcher.registerClass("CUI.Page.CommandDispatcher");
CUI.Page.FocusManager.registerClass("CUI.Page.FocusManager", CUI.Page.CommandDispatcher, CUI.Page.ICommandHandler);
CUI.Page.PageManager
    .registerClass("CUI.Page.PageManager", CUI.RootUser, CUI.Page.ICommandHandler, CUI.IRootBuildClient);
CUI.Page.UndoManager.registerClass("CUI.Page.UndoManager", null, CUI.Page.ICommandHandler);
Commands.CommandIds.registerClass("Commands.CommandIds");
Commands.GlobalRedoProperties.registerClass("Commands.GlobalRedoProperties");
Commands.RedoProperties.registerClass("Commands.RedoProperties");
Commands.GlobalUndoProperties.registerClass("Commands.GlobalUndoProperties");
Commands.UndoProperties.registerClass("Commands.UndoProperties");
Mscrm.CommandBarBuilder.$Bq = new RegExp("Mscrm[.]HomepageGrid[.][0-9a-zA-Z._-]*[.]Chart[.][0-9a-zA-Z._-]*");
Mscrm.CommandBarBuilder.$Bp = new RegExp("Mscrm[.]HomepageGrid[.][0-9a-zA-Z._-]*[.]VisualizationTab[.][0-9a-zA-Z._-]*");
Mscrm.TemplateGenerator.$7c = null;
Mscrm.TemplateGenerator.$7d = null;
Mscrm.TemplateGenerator.$83 = null;
Mscrm.TemplateGenerator.$8m = null;
Mscrm.TemplateGenerator.$7p = null;
Mscrm.TemplateGenerator.$7e = null;
Mscrm.TemplateGenerator.$8l = null;
Mscrm.TemplateGenerator.$6d = false;
Mscrm.CommandBarConstants.commandBarMenuClass = "ms-crm-CommandBar-Menu";
Mscrm.CommandBarConstants.associatedGridCommandBarMenuClass = "ms-crm-AssociatedGridCommandBar-Menu";
Mscrm.CommandBarConstants.chartsCommandBarMenuClass = "ms-crm-ChartsCommandBar-Menu";
Mscrm.CommandBarConstants.chartsPaneCommandBarMenuClass = "ms-crm-chartsPaneCommand-Bar";
Mscrm.CommandBarConstants.chartsDesignerCommandBarMenuClass = "ms-crm-chartDesignerCommand-Bar";
Mscrm.CommandBarConstants.commandBarItemClass = "ms-crm-CommandBarItem";
Mscrm.CommandBarConstants.menuLabelClass = "ms-crm-Menu-Label";
Mscrm.CommandBarConstants.menuLabelClassHovered = "ms-crm-Menu-Label-Hovered";
Mscrm.CommandBarConstants.menuTextClass = "ms-crm-MenuItem-TextRTL";
Mscrm.CommandBarConstants.moreMenuButton = "moreCommands";
Mscrm.CommandBarConstants.chartsMoreMenuButton = "moreChartsCommands";
Mscrm.CommandBarConstants.chartsDesignerMoreMenuButton = "moreChartDesignerCommands";
Mscrm.CommandBarConstants.moreMenuButtonSpan = "moreCommandsSpan";
Mscrm.CommandBarConstants.moreMenuButtonImage = "ms-crm-moreCommand-image";
Mscrm.CommandBarConstants.commandBarButtonClass = "ms-crm-CommandBar-Button";
Mscrm.CommandBarConstants.commandBarButtonTemplate = "CommandBarButtonTemplate";
Mscrm.CommandBarConstants.commandBarSplitButtonTemplate = "CommandBarSplitButtonTemplate";
Mscrm.CommandBarConstants.commandBarflyOutAnchorTemplate = "CommandBarFlyoutAnchorTemplate";
Mscrm.CommandBarConstants.commandBarCustomTabTemplate = "CommandBarCustomTabTemplate";
Mscrm.CommandBarConstants.commandBarCheckBoxTemplate = "CommandBarCheckBoxTemplate";
Mscrm.CommandBarConstants.commandBarSpinnerTemplate = "CommandBarSpinnerTemplate";
Mscrm.CommandBarConstants.maxButtonWidth = 200;
Mscrm.CommandBarConstants.maxIPadButtonWidth = 200;
Mscrm.CommandBarConstants.maxChartCommandsForDisplay = 3;
Mscrm.CommandBarConstants.toggleButtonActive = "ms-crm-CommandBarToggleButton-Active";
Mscrm.CommandBarConstants.commandBarLeftOffset = 20;
Mscrm.CommandBarConstants.commandBarRightOffset = 0;
Mscrm.CommandBarConstants.commandBarButtonGap = 10;
Mscrm.CommandBarConstants.chartCommandBarLeftOffset = 0;
Mscrm.CommandBarConstants.chartCommandBarRightOffset = 10;
Mscrm.CommandBarConstants.chartCommandBarButtonGap = 15;
Mscrm.CommandBarConstants.recordNavId = "contextualActionBar";
Mscrm.CommandBarConstants.animationDelayBetweenButtons = 125;
Mscrm.CommandBarConstants.animationIntervalForSingleButton = 300;
Mscrm.CommandBarConstants.slidingWidth = 20;
Mscrm.CommandBarControl.$8u = null;
Mscrm.SpinnerCommandProperties.ChangedByMouse = "ChangedByMouse";
Mscrm.SpinnerCommandProperties.ChangeType = "ChangeType";
Mscrm.SpinnerCommandProperties.Value = "Value";
Mscrm.SpinnerCommandProperties.Unit = "Unit";
Mscrm.CommandHandler.$I3 = {
    "$webresource:msdyn_/activityfeeds.form.js": true,
    "$webresource:msdyn_/activityfeeds.services.js": true,
    "$webresource:msdyn_/activityfeeds.ui.js": true,
    "$webresource:msdyn_/crmsoapserviceproxy.js": true,
    "$webresource:msdyn_/filters.command.js": true,
    "$webresource:msdyn_/follow.command.js": true,
    "$webresource:msdyn_/wall.service.js": true,
    "$webresource:msdyn_/scripts/platformscriptloader.js": true,
    "$webresource:msdyn_/installedlocales.js": true
};
Mscrm.RibbonHeaderScaling.$EB = ["ms-cui-tts", "ms-cui-tts-scale-1", "ms-cui-tts-scale-2", "ms-cui-tts-scale-2"];
Mscrm.RibbonManager.$AL = 0;
Mscrm.RibbonManager.$8Y = null;
Mscrm.RibbonManager.$6x = false;
Mscrm.RibbonNavigationModel.$Bv = new RegExp("Mscrm\\.SubGrid\\.[^.]+\\.ContextualTabs");
Mscrm.RibbonNavigationModel
    .$AK = new RegExp("^[^|]+\\|[^|]+\\|SubGridStandard\\|Mscrm\\.SubGrid\\.[^.]+\\.ContextualTabs$");
Mscrm.RibbonNavigationModel
    .$8o = new RegExp("^[^|]+\\|[^|]+\\|SubGridAssociated\\|Mscrm\\.SubGrid\\.[^.]+\\.ContextualTabs$");
CUI.DataNodeWrapper.ATTRIBUTES = "attrs";
CUI.DataNodeWrapper.CHILDREN = "children";
CUI.DataNodeWrapper.NAME = "name";
CUI.DataNodeWrapper.ALIGNMENT = "Alignment";
CUI.DataNodeWrapper.ALT = "Alt";
CUI.DataNodeWrapper.CLASSNAME = "Classname";
CUI.DataNodeWrapper.COLOR = "Color";
CUI.DataNodeWrapper.COMMAND = "Command";
CUI.DataNodeWrapper.CONTEXTUALGROUPID = "ContextualGroupId";
CUI.DataNodeWrapper.CSSCLASS = "CssClass";
CUI.DataNodeWrapper.DARKBLUE = "DarkBlue";
CUI.DataNodeWrapper.DECIMALDIGITS = "DecimalDigits";
CUI.DataNodeWrapper.DESCRIPTION = "Description";
CUI.DataNodeWrapper.DISPLAYCOLOR = "DisplayColor";
CUI.DataNodeWrapper.DISPLAYMODE = "DisplayMode";
CUI.DataNodeWrapper.DIVIDER = "Divider";
CUI.DataNodeWrapper.ELEMENTDIMENSIONS = "ElementDimensions";
CUI.DataNodeWrapper.GREEN = "Green";
CUI.DataNodeWrapper.GROUPID = "GroupId";
CUI.DataNodeWrapper.id = "Id";
CUI.DataNodeWrapper.INDEX = "Index";
CUI.DataNodeWrapper.INTERVAL = "Interval";
CUI.DataNodeWrapper.LABELTEXT = "LabelText";
CUI.DataNodeWrapper.LAYOUTTITLE = "LayoutTitle";
CUI.DataNodeWrapper.LIGHTBLUE = "LightBlue";
CUI.DataNodeWrapper.LOWSCALEWARNING = "LowScaleWarning";
CUI.DataNodeWrapper.MAGENTA = "Magenta";
CUI.DataNodeWrapper.MAXHEIGHT = "MaxHeight";
CUI.DataNodeWrapper.MAXIMUMVALUE = "MaximumValue";
CUI.DataNodeWrapper.MAXWIDTH = "MaxWidth";
CUI.DataNodeWrapper.MENUITEMID = "MenuItemId";
CUI.DataNodeWrapper.MESSAGE = "Message";
CUI.DataNodeWrapper.MINIMUMVALUE = "MinimumValue";
CUI.DataNodeWrapper.namE_CAPS = "Name";
CUI.DataNodeWrapper.ONEROW = "OneRow";
CUI.DataNodeWrapper.ORANGE = "Orange";
CUI.DataNodeWrapper.POPUP = "Popup";
CUI.DataNodeWrapper.POPUPSIZE = "PopupSize";
CUI.DataNodeWrapper.PURPLE = "Purple";
CUI.DataNodeWrapper.SCROLLABLE = "Scrollable";
CUI.DataNodeWrapper.SEQUENCE = "Sequence";
CUI.DataNodeWrapper.SIZE = "Size";
CUI.DataNodeWrapper.STYLE = "Style";
CUI.DataNodeWrapper.TEAL = "Teal";
CUI.DataNodeWrapper.TEMPLATEALIAS = "TemplateAlias";
CUI.DataNodeWrapper.THREEROW = "ThreeRow";
CUI.DataNodeWrapper.TITLE = "Title";
CUI.DataNodeWrapper.TWOROW = "TwoRow";
CUI.DataNodeWrapper.TYPE = "Type";
CUI.DataNodeWrapper.VALUE = "Value";
CUI.DataNodeWrapper.YELLOW = "Yellow";
CUI.DataNodeWrapper.RIBBON = "Ribbon";
CUI.DataNodeWrapper.QAT = "QAT";
CUI.DataNodeWrapper.JEWEL = "Jewel";
CUI.DataNodeWrapper.TABS = "Tabs";
CUI.DataNodeWrapper.CONTEXTUALTABS = "ContextualTabs";
CUI.DataNodeWrapper.CONTEXTUALGROUP = "ContextualGroup";
CUI.DataNodeWrapper.TAB = "Tab";
CUI.DataNodeWrapper.SCALING = "Scaling";
CUI.DataNodeWrapper.MAXSIZE = "MaxSize";
CUI.DataNodeWrapper.SCALE = "Scale";
CUI.DataNodeWrapper.GROUP = "Group";
CUI.DataNodeWrapper.GROUPS = "Groups";
CUI.DataNodeWrapper.LAYOUT = "Layout";
CUI.DataNodeWrapper.SECTION = "Section";
CUI.DataNodeWrapper.OVERFLOWSECTION = "OverflowSection";
CUI.DataNodeWrapper.ROW = "Row";
CUI.DataNodeWrapper.CONTROL = "ControlRef";
CUI.DataNodeWrapper.OVERFLOWAREA = "OverflowArea";
CUI.DataNodeWrapper.STRIP = "Strip";
CUI.DataNodeWrapper.CONTROLS = "Controls";
CUI.DataNodeWrapper.MENU = "Menu";
CUI.DataNodeWrapper.MENUSECTION = "MenuSection";
CUI.DataNodeWrapper.TEMPLATE = "Template";
CUI.DataNodeWrapper.TEMPLATES = "Templates";
CUI.DataNodeWrapper.RIBBONTEMPLATES = "RibbonTemplates";
CUI.DataNodeWrapper.GROUPTEMPLATE = "GroupTemplate";
CUI.DataNodeWrapper.GALLERY = "Gallery";
CUI.DataNodeWrapper.colors = "Colors";
CUI.DataNodeWrapper.color = "Color";
CUI.DataNodeWrapper.toggleButton = "ToggleButton";
CUI.DataNodeWrapper.comboBox = "ComboBox";
CUI.DataNodeWrapper.dropDown = "DropDown";
CUI.DataNodeWrapper.button = "Button";
CUI.DataNodeWrapper.splitButton = "SplitButton";
CUI.DataNodeWrapper.flyoutAnchor = "FlyoutAnchor";
CUI.DataNodeWrapper.galleryButton = "GalleryButton";
CUI.DataNodeWrapper.insertTable = "InsertTable";
CUI.DataNodeWrapper.label = "Label";
CUI.DataNodeWrapper.mruSplitButton = "MRUSplitButton";
CUI.DataNodeWrapper.spinner = "Spinner";
CUI.DataNodeWrapper.textBox = "TextBox";
CUI.DataNodeWrapper.checkBox = "CheckBox";
CUI.DataNodeWrapper.colorPicker = "ColorPicker";
CUI.DataNodeWrapper.separator = "Separator";
CUI.DataNodeWrapper.jewelMenuLauncher = "JewelMenuLauncher";
CUI.DataNodeWrapper.BUTTONDOCK = "ButtonDock";
CUI.DataNodeWrapper.BUTTONDOCKS = "ButtonDocks";
CUI.DataNodeWrapper.CENTERALIGN = "Center";
CUI.DataNodeWrapper.LEFTALIGN = "Left";
CUI.DataNodeWrapper.RIGHTALIGN = "Right";
CUI.DataNodeWrapper.TOOLBAR = "Toolbar";
CUI.DataNodeWrapper.LARGE = "Large";
CUI.DataNodeWrapper.MEDIUM = "Medium";
CUI.DataNodeWrapper.SMALL = "Small";
CUI.DataNodeWrapper.DIVIDERAFTER = "DividerAfter";
CUI.DataNodeWrapper.DIVIDERBEFORE = "DividerBefore";
CUI.DataNodeWrapper.$9M = null;
CUI.RibbonPeripheralSection.tabRowLeft = "TabRowLeft";
CUI.RibbonPeripheralSection.tabRowRight = "TabRowRight";
CUI.RibbonPeripheralSection.qatRowCenter = "QATRowCenter";
CUI.RibbonPeripheralSection.qatRowRight = "QATRowRight";
CUI.TemplateManager.$87 = null;
CUI.Utility.$DU = [
    "", "ms-cui-img-5by3", "ms-cui-img-13by13", "ms-cui-img-16by16", "ms-cui-img-32by32", "ms-cui-img-48by48",
    "ms-cui-img-64by48", "ms-cui-img-72by96", "ms-cui-img-96by72", "ms-cui-img-96by96", "ms-cui-img-56by24",
    "ms-cui-img-2by16"
];
CUI.Utility.$Co = [
    "", "Size16by16", "Size32by32", "Size48by48", "Size64by48", "Size72by96", "Size96by72", "Size96by96",
    "Size128by128", "Size190by30", "Size190by40", "Size190by50", "Size190by60"
];
CUI.Utility.$DS = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 1, 0, 0, 0, 2,
    3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 5, 0
];
CUI.Utility.$1U = [
    "", "&quot;", "&amp;", "&#39;", "&lt;", "&gt;", " ", "<br>", "&nbsp;", "<b>", "<i>", "<p>", "<u>", "</b>", "</i>",
    "</p>", "</u>"
];
CUI.Utility.$9v = false;
CUI.Utility.$9u = false;
CUI.Utility.$9w = false;
CUI.Utility.$9q = false;
CUI.Utility.$9x = false;
CUI.Utility.$9r = false;
CUI.Utility.$5e = 0;
CUI.Utility.$9o = false;
CUI.Utility.$86 = 0;
CUI.Utility.$9n = false;
CUI.Utility.$9s = false;
CUI.Utility.$9t = false;
CUI.Utility.$8d = null;
CUI.ScriptUtility.emptyString = "";
CUI.Controls.CheckBoxCommandProperties.On = "On";
CUI.Controls.CheckBoxCommandProperties.CommandValueId = "CommandValueId";
CUI.Controls.ColorPickerCommandProperties.Color = "Color";
CUI.Controls.ColorPickerCommandProperties.Style = "Style";
CUI.Controls.ColorPicker.$A = -10;
CUI.Controls.ComboBoxCommandProperties.SelectedItemId = "SelectedItemId";
CUI.Controls.ComboBoxCommandProperties.IsFreeForm = "IsFreeForm";
CUI.Controls.ComboBoxCommandProperties.Value = "Value";
CUI.Controls.DropDownCommandProperties.SelectedItemId = "SelectedItemId";
CUI.Controls.DropDownCommandProperties.Value = "Value";
CUI.Controls.GalleryButtonCommandProperties.On = "On";
CUI.Controls.GalleryButtonCommandProperties.CommandValueId = "CommandValueId";
CUI.Controls.InsertTableCommandProperties.Rows = "Rows";
CUI.Controls.InsertTableCommandProperties.Columns = "Columns";
CUI.Controls.LabelCommandProperties.Value = "Value";
CUI.Controls.SpinnerCommandProperties.ChangedByMouse = "ChangedByMouse";
CUI.Controls.SpinnerCommandProperties.ChangeType = "ChangeType";
CUI.Controls.SpinnerCommandProperties.Value = "Value";
CUI.Controls.SpinnerCommandProperties.Unit = "Unit";
CUI.Controls.TextBoxCommandProperties.Value = "Value";
CUI.Controls.ToggleButtonCommandProperties.On = "On";
CUI.Controls.ToggleButtonCommandProperties.CommandValueId = "CommandValueId";
CUI.Page.PageManager._instance = null;
CUI.Page.UndoManager.$34 = -1;
Commands.CommandIds.ApplicationStateChanged = "appstatechanged";
Commands.CommandIds.GlobalRedo = "GlobalRedo";
Commands.CommandIds.Redo = "Redo";
Commands.CommandIds.GlobalUndo = "GlobalUndo";
Commands.CommandIds.Undo = "Undo";
Commands.GlobalRedoProperties.SequenceNumber = "SequenceNumber";
Commands.RedoProperties.SequenceNumber = "SequenceNumber";
Commands.GlobalUndoProperties.SequenceNumber = "SequenceNumber";
Commands.UndoProperties.SequenceNumber = "SequenceNumber";
var g_cuiXMLDOMDocument = null, g_cuiXMLParser = null;
CUI.NativeUtility = function() {};
CUI.NativeUtility.createXMLDocFromString = function(xml) {
    return CUI.NativeUtility.createXMLDocFromStringCore(xml, false)
};
CUI.NativeUtility.createXMLDocFromStringCore = function(xml, newObj) {
    if (window.ActiveXObject) {
        var msxmlDomDoc = newObj ? null : g_cuiXMLDOMDocument;
        if (!msxmlDomDoc)
            try {
                msxmlDomDoc = new ActiveXObject("MSXML.DomDocument");
                if (!newObj) g_cuiXMLDOMDocument = msxmlDomDoc
            } catch (e) {
            }
        msxmlDomDoc != null && msxmlDomDoc.loadXML(xml);
        return msxmlDomDoc
    } else if (DOMParser) {
        var domParser = newObj ? null : g_cuiXMLParser;
        if (!domParser) {
            domParser = new DOMParser;
            if (!newObj) g_cuiXMLParser = domParser
        }
        return domParser.parseFromString(xml, "text/xml")
    } else if (window.XMLHttpRequest) {
        var request = new XMLHttpRequest;
        request.open("GET", "data:text/xml;charset=utf-8," + xml, false);
        request.send(null);
        return request.responseXML()
    }
    return null
};
typeof Sys != "undefined" && Sys && Sys.Application && Sys.Application.notifyScriptLoaded();
CUI.NativeUtility.setInnerText = function(elem, text) {
    var doc = elem.ownerDocument;
    if (doc.createTextNode) {
        var textNode = doc.createTextNode(text);
        elem.innerHTML = "";
        elem.appendChild(textNode)
    } else elem.innerText = text
};
CUI.NativeUtility.ecmaScriptStringLiteralEncode = function(str) {
    if (null == str || typeof str == "undefined") return "";
    for (var strIn = new String(str), strOut = [], ix = 0, max = strIn.length, ix = 0; ix < max; ix++) {
        var charCode = strIn.charCodeAt(ix);
        if (charCode > 4095) strOut.push("\\u" + charCode.toString(16).toUpperCase());
        else if (charCode > 255) strOut.push("\\u0" + charCode.toString(16).toUpperCase());
        else if (charCode > 127) strOut.push("\\u00" + charCode.toString(16).toUpperCase());
        else {
            var c = strIn.charAt(ix);
            switch (c) {
            case "\n":
                strOut.push("\\n");
                break;
            case "\r":
                strOut.push("\\r");
                break;
            case '"':
                strOut.push("\\u0022");
                break;
            case "%":
                strOut.push("\\u0025");
                break;
            case "&":
                strOut.push("\\u0026");
                break;
            case "'":
                strOut.push("\\u0027");
                break;
            case "(":
                strOut.push("\\u0028");
                break;
            case ")":
                strOut.push("\\u0029");
                break;
            case "+":
                strOut.push("\\u002b");
                break;
            case "/":
                strOut.push("\\u002f");
                break;
            case "<":
                strOut.push("\\u003c");
                break;
            case ">":
                strOut.push("\\u003e");
                break;
            case "\\":
                strOut.push("\\\\");
                break;
            default:
                strOut.push(c)
            }
        }
    }
    return strOut.join("")
};
CUI.NativeUtility.ffClick = function(elm) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    elm.dispatchEvent(evt)
};
CUI.NativeUtility.getAttribute = function(attributes, index) { return attributes[index] };
CUI.NativeUtility.returnFalse = function() { return false };
var g_records = [];
CUI.PMetrics = function() {};
CUI.PMetrics.perfMark = function(marker) {
    var r = {};
    r.m = marker;
    r.mt = new Date;
    if (g_records) {
        if (g_records.length == 1e3) g_records = [];
        g_records.push(r)
    }
};
CUI.PMetrics.perfReport = function() {
    if (!g_records) return;
    var l = g_records.length;
    if (l > 0) {
        var _elmResults = document.getElementById("perf-markers");
        if (!_elmResults) {
            _elmResults = document.createElement("div");
            _elmResults.id = "perf-markers";
            _elmResults.style.display = "none"
        }
        var r, rstr = "";
        for (i = 0; i < l; i++) {
            r = g_records[i];
            if (r)
                rstr += "<p><span class='time'>" +
                    r.mt.format("MM/dd/yyyy HH:mm:ss.fffffff") +
                    "</span><span class='marker'>" +
                    r.m +
                    "</span><var class='milliseconds'>" +
                    r.mt.getTime() +
                    "</var></p>"
        }
        _elmResults.innerHTML += rstr;
        document.body.appendChild(_elmResults);
        g_records = []
    }
};
CUI.PMetrics.perfClear = function() { g_records = [] };
typeof Sys != "undefined" && Sys && Sys.Application && Sys.Application.notifyScriptLoaded();
typeof NotifyScriptLoadedAndExecuteWaitingJobs != "undefined" && NotifyScriptLoadedAndExecuteWaitingJobs("CUI.js")