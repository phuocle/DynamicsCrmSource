Type.registerNamespace("Microsoft.Crm.CommandBar");
Microsoft.Crm.CommandBar.MenuItemControlType = function() {};
Microsoft.Crm.CommandBar.MenuItemControlType.prototype = { spacer: 0, button: 1, subMenu: 2 };
Microsoft.Crm.CommandBar.MenuItemControlType.registerEnum("Microsoft.Crm.CommandBar.MenuItemControlType", false);
Microsoft.Crm.CommandBar.MenuButtonStyles = function() {};
Microsoft.Crm.CommandBar.MenuButtonStyles.prototype = { none: 0, standard: 1, groupHeading: 2, groupItem: 4 };
Microsoft.Crm.CommandBar.MenuButtonStyles.registerEnum("Microsoft.Crm.CommandBar.MenuButtonStyles", false);
Microsoft.Crm.CommandBar.IMenuItemControl = function() {};
Microsoft.Crm.CommandBar.IMenuItemControl.registerInterface("Microsoft.Crm.CommandBar.IMenuItemControl");
Microsoft.Crm.CommandBar.CommandBarControl = function(element) {
    this.$$d_onKeyDown = Function.createDelegate(this, this.onKeyDown);
    this.$$d_onUnHoverHandler = Function.createDelegate(this, this.onUnHoverHandler);
    this.$$d_onHoverHandler = Function.createDelegate(this, this.onHoverHandler);
    this.$$d_onClickHandler = Function.createDelegate(this, this.onClickHandler);
    Microsoft.Crm.CommandBar.CommandBarControl.initializeBase(this, [element]);
    this.$1_3 = element
};
Microsoft.Crm.CommandBar.CommandBarControl.prototype = {
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$B_3 = this.$$d_onClickHandler;
        this.$6_3 = this.$$d_onHoverHandler;
        this.$7_3 = this.$$d_onUnHoverHandler;
        this.$C_3 = this.$$d_onKeyDown
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    attachEvents: function(element) {
        $addHandler(element, "click", this.$B_3);
        $addHandler(element, "mouseover", this.$6_3);
        $addHandler(element, "mouseout", this.$7_3);
        $addHandler(element, "keydown", this.$C_3);
        $addHandler(element, "focus", this.$6_3);
        $addHandler(element, "blur", this.$7_3)
    },
    detachEvents: function(element) {
        if (IsNull(element)) return;
        if (!IsNull(this.$B_3)) {
            $removeHandler(element, "click", this.$B_3);
            this.$B_3 = null
        }
        if (!IsNull(this.$6_3)) {
            $removeHandler(element, "mouseover", this.$6_3);
            $removeHandler(element, "focus", this.$6_3);
            this.$6_3 = null
        }
        if (!IsNull(this.$7_3)) {
            $removeHandler(element, "mouseout", this.$7_3);
            $removeHandler(element, "blur", this.$7_3);
            this.$7_3 = null
        }
        if (!IsNull(this.$C_3)) {
            $removeHandler(element, "keydown", this.$C_3);
            this.$C_3 = null
        }
    },
    get_currentElement: function() { return this.$1_3 },
    $1_3: null,
    $C_3: null,
    $B_3: null,
    $6_3: null,
    $7_3: null
};
Microsoft.Crm.CommandBar.CommandBarPopupControl = function(element) {
    this.$$d_$w_4 = Function.createDelegate(this, this.$w_4);
    this.$$d_$x_4 = Function.createDelegate(this, this.$x_4);
    Microsoft.Crm.CommandBar.CommandBarPopupControl.initializeBase(this, [element])
};
Microsoft.Crm.CommandBar.CommandBarPopupControl.prototype = {
    get_menuXml: function() { return this.$4_4 },
    setItemProperty: function(itemId, propertyName, propertyValue) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$4_4, "/menu/item[@id='" + itemId + "']", null),
            $v_1 = $v_0.attributes.getNamedItem(propertyName);
        if (IsNull($v_1)) {
            $v_1 = this.$4_4.createAttribute(propertyName);
            $v_0.attributes.setNamedItem($v_1)
        }
        XUI.Xml.SetText($v_1, propertyValue);
        !IsNull(this.$3_4) && this.$3_4.clearMenu()
    },
    getItemProperty: function(itemId, propertyName) {
        var $v_0 = XUI.Xml.SelectSingleNode(this.$4_4, "/menu/item[@id='" + itemId + "']", null);
        if (IsNull($v_0)) return null;
        var $v_1 = $v_0.attributes.getNamedItem(propertyName);
        return IsNull($v_1) ? null : XUI.Xml.GetText($v_1)
    },
    initialize: function() {
        Microsoft.Crm.CommandBar.CommandBarControl.prototype.initialize.call(this);
        this.$4_4 = XUI.Xml.LoadXml(this.$1_3.getAttribute("menuxml"));
        this.attachEvents(XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$1_3)))
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        if (!IsNull(this.$1_3)) {
            var $v_0 = XUI.Html.DomUtils.GetFirstChild(this.$1_3);
            !IsNull($v_0) && this.detachEvents(XUI.Html.DomUtils.GetFirstChild($v_0))
        }
        Microsoft.Crm.CommandBar.CommandBarControl.prototype.dispose.call(this)
    },
    onKeyDown: function(domEvent) {
        switch (Mscrm.Utilities.getDomEventKeyCode(domEvent)) {
        case 40:
        case 38:
        case 13:
            this.onClickHandler(domEvent);
            break;
        case 37:
        case 39:
            var $v_0 = this.get_$Z_4();
            !IsNull($v_0) && $v_0.handleKeyNavigation(domEvent);
            break;
        default:
            return
        }
    },
    onClickHandler: function(domEvent) {
        domEvent.stopPropagation();
        domEvent.preventDefault();
        this.selectElement();
        this.processMenuOpenEvent()
    },
    onHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        this.glowElement();
        var $v_0 = this.get_$Z_4();
        !IsNull($v_0) && $v_0.setLastFocused(domEvent)
    },
    onUnHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        (IsNull(this.$3_4) || !this.$3_4.get_isVisible()) && this.resetElementGlow()
    },
    processMenuOpenEvent: function() {
        var $v_0 = Mscrm.Utilities.getXYPos(this.$1_3, window.LOCID_UI_DIR === "RTL"),
            $v_1 = $v_0["y"] + this.$1_3.offsetHeight,
            $v_2 = $v_0["x"];
        if (window.LOCID_UI_DIR === "RTL") $v_2 = $v_2 + this.$1_3.offsetWidth;
        if (IsNull(this.$3_4)) {
            this.$3_4 = new Microsoft.Crm.CommandBar.MainMenuControl(this.$$d_$x_4);
            this.$3_4.$J_1 = this.$$d_$w_4
        }
        this.$3_4.showMenu(this.$4_4, $v_2, $v_1)
    },
    $x_4: function($p0) {
        var $v_0 = $p0
                .get_menuItemId(),
            $v_1 = XUI.Xml.SelectSingleNode(this.$4_4, ".//item[@id='" + $v_0 + "']", null);
        eval(XUI.Xml.GetText($v_1.attributes.getNamedItem("action")))
    },
    $w_4: function($p0) {
        this.resetElementGlow();
        var $v_0 = this.get_$Z_4();
        !IsNull($v_0) && $v_0.setFocusOnLastItem()
    },
    $4_4: null,
    $3_4: null,
    get_$Z_4: function() {
        var $v_0 = Mscrm.Utilities.getParentElementByTagName(this.$1_3, "DIV"), $v_1 = $find($v_0.id);
        return $v_1
    }
};
Microsoft.Crm.CommandBar.CommandJewelPopup = function(element) {
    Microsoft.Crm.CommandBar.CommandJewelPopup.initializeBase(this, [element]);
    if (window.LOCID_UI_DIR === "RTL") {
        this.$9_5 = "right";
        this.$A_5 = "left"
    } else {
        this.$9_5 = "left";
        this.$A_5 = "right"
    }
};
Microsoft.Crm.CommandBar.CommandJewelPopup.prototype = {
    selectElement: function() {
        this.get_$F_5().className = "ms-crm-Menu-JewelButton-first-span ms-crm-ImageStrip-jewel_select_" + this.$9_5;
        this.get_$a_5().className = "ms-crm-Menu-JewelButton-second-span ms-crm-ImageStrip-jewel_select_middle";
        this.get_$b_5().className = "ms-crm-Menu-JewelButton-third-span ms-crm-ImageStrip-jewel_select_" + this.$A_5
    },
    glowElement: function() {
        this.get_$F_5().className = "ms-crm-Menu-JewelButton-first-span ms-crm-ImageStrip-jewel_hover_" + this.$9_5;
        this.get_$a_5().className = "ms-crm-Menu-JewelButton-second-span ms-crm-ImageStrip-jewel_hover_middle";
        this.get_$b_5().className = "ms-crm-Menu-JewelButton-third-span ms-crm-ImageStrip-jewel_hover_" + this.$A_5
    },
    resetElementGlow: function() {
        this.get_$F_5().className = "ms-crm-Menu-JewelButton-first-span ms-crm-ImageStrip-jewel_normal_" + this.$9_5;
        this.get_$a_5().className = "ms-crm-Menu-JewelButton-second-span ms-crm-ImageStrip-jewel_normal_middle";
        this.get_$b_5().className = "ms-crm-Menu-JewelButton-third-span ms-crm-ImageStrip-jewel_normal_" + this.$A_5
    },
    get_$F_5: function() {
        if (IsNull(this.$5_5)) this.$5_5 = XUI.Html.DomUtils.GetChildElementAt(this.get_$g_5(), 0);
        return this.$5_5
    },
    get_$a_5: function() {
        if (IsNull(this.$L_5)) this.$L_5 = XUI.Html.DomUtils.GetChildElementAt(this.get_$g_5(), 1);
        return this.$L_5
    },
    get_$b_5: function() {
        if (IsNull(this.$M_5)) this.$M_5 = XUI.Html.DomUtils.GetChildElementAt(this.get_$g_5(), 2);
        return this.$M_5
    },
    get_$g_5: function() {
        if (IsNull(this.$O_5)) this.$O_5 = XUI.Html.DomUtils.GetFirstChild(XUI.Html.DomUtils.GetFirstChild(this.$1_3));
        return this.$O_5
    },
    $O_5: null,
    $5_5: null,
    $L_5: null,
    $M_5: null,
    $9_5: null,
    $A_5: null
};
Microsoft.Crm.CommandBar.CommandMenuPopup = function(element) {
    Microsoft.Crm.CommandBar.CommandMenuPopup.initializeBase(this, [element])
};
Microsoft.Crm.CommandBar.CommandMenuPopup.prototype = {
    add_onOpenMenu: function(value) { this.get_events().addHandler("onOpenMenu", value) },
    remove_onOpenMenu: function(value) { this.get_events().removeHandler("onOpenMenu", value) },
    processMenuOpenEvent: function() {
        this.fireControlEvent("onOpenMenu", null);
        Microsoft.Crm.CommandBar.CommandBarPopupControl.prototype.processMenuOpenEvent.call(this)
    },
    selectElement: function() { this.get_$F_5().className = "ms-crm-Menu-Label-Opened" },
    glowElement: function() { this.get_$F_5().className = "ms-crm-Menu-Label-Hovered" },
    resetElementGlow: function() { this.get_$F_5().className = "ms-crm-Menu-Label" },
    get_$F_5: function() {
        if (IsNull(this.$5_5)) this.$5_5 = XUI.Html.DomUtils.GetFirstChild(this.$1_3);
        return this.$5_5
    },
    $5_5: null
};
Microsoft.Crm.CommandBar.MenuBarControl = function(element) {
    this.$$d_$z_4 = Function.createDelegate(this, this.$z_4);
    this.$$d_$y_4 = Function.createDelegate(this, this.$y_4);
    Microsoft.Crm.CommandBar.MenuBarControl.initializeBase(this, [element])
};
Microsoft.Crm.CommandBar.MenuBarControl.prototype = {
    initialize: function() {
        Microsoft.Crm.CommandBar.CommandBarControl.prototype.initialize.call(this);
        if (window.LOCID_UI_DIR === "RTL") this.$S_4 = 37;
        else this.$S_4 = 39;
        this.$D_4 = this.$$d_$y_4;
        this.$m_4();
        if (this.$1_3.getAttribute("disableResizeCheck") === "1") {
            this.$P_4 = false;
            return
        }
        this.$P_4 = true;
        this.$v_4()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        this.$8_4 = false;
        this.$n_4();
        Microsoft.Crm.CommandBar.CommandBarControl.prototype.dispose.call(this)
    },
    $v_4: function() {
        if (this.get_isDisposed()) return;
        this.$I_4 = XUI.Html.DomUtils.GetChildElementAt(this.$1_3, 0);
        this.$Y_4 = XUI.Html.DomUtils.GetChildElementAt(this.$1_3, 1);
        this.$Q_4 = this.$i_4(this.$Y_4);
        this.$W_4 = this.$i_4(this.$I_4);
        this.$8_4 = true;
        this.resizeCheck()
    },
    $m_4: function() {
        var $$t_1 = this;
        this.$k_4(function($p1_0) {
            Microsoft.Crm.CommandBar.CommandBarControl.prototype.attachEvents.call($$t_1, $p1_0)
        });
        $addHandler(window, "resize", this.$D_4)
    },
    $n_4: function() {
        var $$t_1 = this;
        this.$k_4(function($p1_0) {
            Microsoft.Crm.CommandBar.CommandBarControl.prototype.detachEvents.call($$t_1, $p1_0)
        });
        if (!IsNull(this.$D_4)) {
            $removeHandler(window, "resize", this.$D_4);
            this.$D_4 = null
        }
    },
    $k_4: function($p0) {
        if (IsNull(this.$1_3)) return;
        for (var $v_0 = this.$1_3.getElementsByTagName("A"), $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
            var $v_2 = $v_0[$v_1];
            if (!IsNull($v_2.attributes
                    .getNamedItem("type")) &&
                $v_2.attributes.getNamedItem("type").value === "menu") continue;
            $p0($v_2)
        }
    },
    $z_4: function() {
        try {
            if (!this.$8_4) return;
            this.$j_4();
            this.$H_4 = false
        } catch ($$e_0) {
            return
        }
    },
    $j_4: function() {
        if (!this.$8_4 || IsNull(this.$1_3) || !this.$P_4) return;
        var $v_0 = (new Date).getTime();
        if ($v_0 - this.$V_4 > 200) {
            this.$V_4 = $v_0;
            this.$H_4 = false;
            this.resizeCheck()
        } else {
            !this.$H_4 && window.setTimeout(this.$$d_$z_4, 300);
            this.$H_4 = true
        }
    },
    $u_4: function($p0) {
        var $v_0 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "paddingRight")),
            $v_1 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "paddingLeft")),
            $v_2 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "marginLeft")),
            $v_3 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "marginRight")),
            $v_4 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "borderLeftWidth")),
            $v_5 = Mscrm.Utilities.parseInt(XUI.Html.GetComputedStyle($p0, "borderRightWidth"));
        return $v_2 + $v_3 + $v_0 + $v_1 + $v_4 + $v_5
    },
    $i_4: function($p0) {
        var $v_0 = 1;
        if (IsNull($p0)) return $v_0;
        $v_0 += this.$u_4($p0);
        if ($p0.tagName !== "UL") return $v_0;
        var $v_1 = XUI.Html.DomUtils.GetFirstChild($p0);
        if (IsNull($v_1)) return $v_0;
        this.$X_4 = $v_0;
        var $$t_5 = this,
            $v_2 = function($p1_0) {
                $v_0 += $p1_0.offsetWidth;
                return false
            };
        XUI.Html.DomUtils.ForEachChild($p0, $v_2);
        return $v_0
    },
    $l_4: function($p0, $p1) {
        var $v_0 = this.$X_4 + 5,
            $$t_A = this,
            $v_1 = function($p1_0) {
                if ($p1_0.getAttribute("forceHidden") === "true") return false;
                var $v_2 = $p1_0.getAttribute("forceShowText") === "true";
                if ($p0) $p1_0.style.display = "inline";
                var $v_3 = XUI.Html.DomUtils.GetFirstChild($p1_0);
                if (!IsNull($v_3) && $v_3.tagName === "SPAN") {
                    var $v_4 = XUI.Html.DomUtils.GetFirstChild($v_3);
                    if (!IsNull($v_4) && $v_4.tagName === "A") {
                        var $v_5 = XUI.Html.DomUtils.GetFirstChild($v_4);
                        if (!IsNull($v_5) && $v_5.tagName === "IMG" && $v_4.children.length >= 2) {
                            var $v_6 = XUI.Html.DomUtils.GetChildElementAt($v_4, 1);
                            if ($v_6
                                .tagName !==
                                "SPAN" &&
                                $v_4.children.length >= 3) $v_6 = XUI.Html.DomUtils.GetChildElementAt($v_4, 2);
                            if ($v_6.tagName === "SPAN") {
                                if ($v_2) $v_6.style.display = "inline";
                                else if ($p0 && $v_6.getAttribute("autoCollapsed")) {
                                    $v_6.style.display = "inline";
                                    $v_6.removeAttribute("autoCollapsed")
                                } else {
                                    $v_6.style.display !== "none" && $v_6.setAttribute("autoCollapsed", true);
                                    $v_6.style.display = "none"
                                }
                                $v_5.setAttribute("alt", $p0 ? "" : XUI.Html.GetText($v_6));
                                $v_5.setAttribute("title", $p0 ? "" : XUI.Html.GetText($v_6));
                                $v_5.tabIndex = $p0 ? -1 : 0
                            }
                        }
                    }
                }
                $v_0 += $p1_0.offsetWidth;
                if (!$p0)
                    if ($v_0 > $p1 && $p1_0.style.display !== "none") $p1_0.style.display = "none";
                    else if ($p1_0.style.display === "none" && $v_0 < $p1) $p1_0.style.display = "inline";
                return false
            };
        !IsNull(this.$I_4) && XUI.Html.DomUtils.ForEachChild(this.$I_4, $v_1)
    },
    resizeCheck: function() {
        if (!this.$8_4 || IsNull(this) || IsNull(this.$1_3)) return;
        var $v_0 = this.$1_3.parentNode.parentNode.offsetWidth;
        if (this.$U_4 === $v_0) return;
        this.$U_4 = $v_0;
        if (this.$W_4 + this.$Q_4 + 15 > $v_0) {
            this.$l_4(false, $v_0 - this.$Q_4);
            this.$N_4 = true
        } else if (this.$N_4) {
            this.$l_4(true, 0);
            this.$N_4 = false
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
        var $v_2 = this.$K_4;
        if (IsNull($v_2)) return;
        switch ($v_1) {
        case 13:
            if (IsNull($find($v_2.id))) {
                $v_2.click();
                domEvent.preventDefault();
                domEvent.stopPropagation()
            }
            break;
        case 37:
        case 39:
            this.handleKeyNavigation(domEvent);
            break;
        default:
            break
        }
        return
    },
    handleKeyNavigation: function(domEvent) {
        var $v_0 = Mscrm.Utilities.getDomEventKeyCode(domEvent);
        this.$10_4(this.$R_4(this.$1_3), $v_0 === this.$S_4 ? 1 : -1);
        domEvent.preventDefault()
    },
    setLastFocused: function(domEvent) { this.$K_4 = this.$t_4(domEvent) },
    setFocusOnLastItem: function() { this.$h_4(this.$K_4) },
    $10_4: function($p0, $p1) {
        var $v_0 = this.$K_4;
        if (IsNull($v_0)) return;
        var $v_1 = $v_0;
        $v_1 = this.$p_4($p0, $v_0, $p1);
        !IsNull($v_1) && this.$h_4(this.$R_4($v_1))
    },
    $p_4: function($p0, $p1, $p2) {
        var $v_0 = $p1, $v_1 = $p1, $v_2 = false;
        do {
            if (!IsNull($v_0)) {
                var $v_3 = $p2 < 0 ? this.$r_4($v_0) : this.$q_4($v_0);
                if ($v_3 !== $v_0) $v_0 = $v_3;
                else $v_0 = null
            }
            if (IsNull($v_0)) {
                if ($v_2) return null;
                $v_0 = $p2 < 0 ? this.$o_4($p0) : this.$R_4($p0);
                $v_2 = true
            }
            if ($v_0 === $v_1) return null;
            if (IsNull($v_0)) return null
        } while ($v_0.tagName !== "LI" || $v_0.className.indexOf("Spacer") >= 0 || $v_0.disabled);
        return $v_0
    },
    $r_4: function($p0) { return XUI.Html.DomUtils.GetPrevSibling($p0) },
    $q_4: function($p0) { return XUI.Html.DomUtils.GetNextSibling($p0) },
    $o_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetLastChild($p0);
        return $v_0
    },
    $R_4: function($p0) {
        var $v_0 = XUI.Html.DomUtils.GetFirstChild($p0);
        return $v_0
    },
    $h_4: function($p0) {
        if (IsNull($p0)) return;
        if ($p0.tabIndex >= 0) {
            $p0.focus();
            return
        }
        for (var $v_0 = $p0.children.length, $v_1 = 0; $v_1 < $v_0; ++$v_1) {
            if (IsNull($p0.children[$v_1])) break;
            !IsNull(this.$R_4($p0.children[$v_1])) && this.$h_4($p0.children[$v_1])
        }
    },
    onClickHandler: function(domEvent) {
        Mscrm.Utilities.getDomEventElement(domEvent, "A").parentNode.className = "ms-crm-Menu-Label-Opened"
    },
    onHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "A");
        $v_0.parentNode.className = "ms-crm-Menu-Label-Hovered";
        this.setLastFocused(domEvent)
    },
    onUnHoverHandler: function(domEvent) {
        domEvent.stopPropagation();
        var $v_0 = Mscrm.Utilities.getDomEventElement(domEvent, "A");
        $v_0.parentNode.className = "ms-crm-Menu-Label"
    },
    $y_4: function($p0) { this.$j_4() },
    $t_4: function($p0) {
        if (IsNull($p0)) return null;
        var $v_0 = $p0.target;
        while (!IsNull($v_0) &&
            $v_0.className !== "ms-crm-Menu" &&
            $v_0.className !== "ms-crm-Menu-Right" &&
            $v_0.className !== "ms-crm-Menu ms-crm-Menu-Jewel") $v_0 = $v_0.parentNode;
        return $v_0
    },
    disableItem: function(element, disable) {
        Mscrm.Utilities.enableDisableDomElement(element, disable);
        if (disable) Sys.UI.DomElement.addCssClass(element, "ms-crm-Menu-disabled");
        else Sys.UI.DomElement.removeCssClass(element, "ms-crm-Menu-disabled")
    },
    setAction: function(element, action) { element.setAttribute("action", action) },
    $D_4: null,
    $I_4: null,
    $Y_4: null,
    $K_4: null,
    $X_4: 0,
    $U_4: 0,
    $W_4: 0,
    $Q_4: 0,
    $S_4: 0,
    $N_4: false,
    $8_4: false,
    $H_4: false,
    $P_4: false,
    $V_4: 0
};
Microsoft.Crm.CommandBar.MenuButtonControl = function() {};
Microsoft.Crm.CommandBar.MenuButtonControl.prototype = {
    addControl: function(menu, node, parameters) {
        var $v_0 = Mscrm.MenuItem.createMenuItem(XUI.Xml.GetText(node.attributes.getNamedItem("title"))),
            $v_1 = Number.parseInvariant(XUI.Xml.GetText(node.attributes.getNamedItem("buttonstyle"))),
            $v_2 = node.attributes.getNamedItem("tooltip");
        !IsNull($v_2) && $v_0.set_tooltip(XUI.Xml.GetText($v_2));
        var $v_3 = node.attributes.getNamedItem("key");
        !IsNull($v_3) && $v_0.set_accessKey(XUI.Xml.GetText($v_3));
        var $v_4 = node.attributes.getNamedItem("icon");
        !IsNull($v_4) && $v_0.set_iconPath(XUI.Xml.GetText($v_4));
        if ($v_1 === 1 || $v_1 === 4) {
            $v_0.set_stylePrefix("VS");
            var $v_6 = node.attributes.getNamedItem("disabled");
            if (!IsNull($v_6) && Mscrm.Utilities.parseBoolean(XUI.Xml.GetText($v_6))
            ) $v_0.get_itemContents().setAttribute("disabled", true);
            else $v_0.set_actionCallback(parameters["actioncallback"])
        } else $v_0.set_stylePrefix("VS-header");
        var $v_5 = node.attributes.getNamedItem("id");
        if (!IsNull($v_5)) {
            $v_0.get_itemContents().id = XUI.Xml.GetText(node.attributes.getNamedItem("id"));
            $v_0.set_menuItemId(XUI.Xml.GetText(node.attributes.getNamedItem("id")))
        }
        menu.addItem($v_0)
    }
};
Microsoft.Crm.CommandBar.MenuControlConstants = function() {};
Microsoft.Crm.CommandBar.MenuControl = function() { this.$E_0 = {} };
Microsoft.Crm.CommandBar.MenuControl.prototype = {
    clearMenu: function() { this.$2_0 = true },
    initializeMenuForDisplay: function(node, parameters) {
        this.$0_0 = Mscrm.Menu.createMenu();
        !IsNull(node) &&
            !IsNull(node.attributes.getNamedItem("id")) &&
            this.$0_0.set_id(XUI.Xml.GetText(node.attributes.getNamedItem("id")));
        this.$0_0.set_propagateStyle(false);
        this.$0_0.set_width(284)
    },
    populateMenu: function(menu, childNodes, parameters) {
        if (!childNodes.length) return;
        this.$2_0 && this.$0_0.clearDOM();
        for (var $v_0 = 0; $v_0 < childNodes.length; $v_0++) {
            var $v_1 = Number.parseInvariant(XUI.Xml.GetText(childNodes[$v_0].attributes.getNamedItem("type"))),
                $v_2 = this.$s_0($v_1, childNodes[$v_0]);
            $v_2.addControl(this.$0_0, childNodes[$v_0], parameters)
        }
    },
    $s_0: function($p0, $p1) {
        if ($p0 === 2) {
            var $v_0 = XUI.Xml.GetText($p1.attributes.getNamedItem("id"));
            if (IsNull(this.$E_0[$v_0]))
                this.$E_0[$v_0] = Microsoft.Crm.CommandBar.MenuItemControlFactory.getControl($p0);
            if (this.$2_0) this.$E_0[$v_0].$2_0 = true;
            return this.$E_0[$v_0]
        }
        return Microsoft.Crm.CommandBar.MenuItemControlFactory.getControl($p0)
    },
    get_internalMenu: function() { return this.$0_0 },
    get_isChanged: function() { return this.$2_0 },
    set_isChanged: function(value) {
        this.$2_0 = value;
        return value
    },
    $0_0: null,
    $E_0: null,
    $2_0: true
};
Microsoft.Crm.CommandBar.MainMenuControl = function(clickHandler) {
    Microsoft.Crm.CommandBar.MainMenuControl.initializeBase(this);
    this.$T_1 = clickHandler
};
Microsoft.Crm.CommandBar.MainMenuControl.prototype = {
    get_menuHideCallback: function() { return this.$J_1 },
    set_menuHideCallback: function(value) {
        this.$J_1 = value;
        return value
    },
    showMenu: function(menuXml, left, top) {
        var $v_0 = {};
        $v_0["hidecallback"] = this.$J_1;
        $v_0["actioncallback"] = this.$T_1;
        IsNull(this.$0_0) && this.initializeMenuForDisplay(menuXml, $v_0);
        this.$2_0 && this.populateMenu(null, XUI.Xml.SelectNodes(menuXml, "./menu/item", null), $v_0);
        this.$0_0.set_left(left);
        this.$0_0.set_top(top);
        this.$0_0.show();
        this.$2_0 = false
    },
    clearMenu: function() { Microsoft.Crm.CommandBar.MenuControl.prototype.clearMenu.call(this) },
    initializeMenuForDisplay: function(node, parameters) {
        var $v_0 = XUI.Xml.SelectSingleNode(node, "./menu", null);
        Microsoft.Crm.CommandBar.MenuControl.prototype.initializeMenuForDisplay.call(this, $v_0, parameters);
        var $v_1 = $v_0.attributes.getNamedItem("id");
        !IsNull($v_1) && this.$0_0.set_menuId(XUI.Xml.GetText($v_1));
        this.$0_0.set_shiftVertical(false);
        this.$0_0.set_stylePrefix("VS");
        this.$0_0.set_hideCallback(parameters["hidecallback"])
    },
    dispose: function() { this.$0_0.dispose() },
    get_isVisible: function() { return this.$0_0.get_isVisible() },
    $T_1: null,
    $J_1: null
};
Microsoft.Crm.CommandBar.SubMenuControl = function() { Microsoft.Crm.CommandBar.SubMenuControl.initializeBase(this) };
Microsoft.Crm.CommandBar.SubMenuControl.prototype = {
    addControl: function(menu, node, parameters) {
        IsNull(this.$0_0) && this.initializeMenuForDisplay(node, parameters);
        this.$2_0 && this.populateMenu(menu, XUI.Xml.SelectNodes(node, "./item", null), parameters);
        this.$2_0 = false
    },
    initializeMenuForDisplay: function(node, parameters) {
        Microsoft.Crm.CommandBar.MenuControl.prototype.initializeMenuForDisplay.call(this, node, parameters);
        if (IsNull(node)) return;
        this.$0_0.set_title(XUI.Xml.GetText(node.attributes.getNamedItem("title")));
        var $v_0 = node.attributes.getNamedItem("id");
        !IsNull(node) && !IsNull($v_0) && this.$0_0.set_menuItemId(XUI.Xml.GetText($v_0));
        this.$0_0.set_stylePrefix("AVS");
        this.$0_0.set_isLoading(true);
        var $v_1 = node.attributes.getNamedItem("icon");
        !IsNull($v_1) && this.$0_0.set_iconPath(XUI.Xml.GetText($v_1))
    },
    populateMenu: function(menu, childNodes, parameters) {
        menu.addItem(this.$0_0);
        Microsoft.Crm.CommandBar.MenuControl.prototype.populateMenu.call(this, menu, childNodes, parameters);
        this.$0_0.get_isLoading() && this.$0_0.set_isLoading(false);
        !IsNull(this.$0_0.get_inlineItem()) && this.$0_0.get_inlineItem().set_stylePrefix("AVS")
    }
};
Microsoft.Crm.CommandBar.MenuItemControlFactory = function() {};
Microsoft.Crm.CommandBar.MenuItemControlFactory.getControl = function(type) {
    switch (type) {
    case 0:
        return new Microsoft.Crm.CommandBar.MenuSpacerControl;
    case 1:
        return new Microsoft.Crm.CommandBar.MenuButtonControl;
    case 2:
        return new Microsoft.Crm.CommandBar.SubMenuControl
    }
    return null
};
Microsoft.Crm.CommandBar.MenuSpacerControl = function() {};
Microsoft.Crm.CommandBar.MenuSpacerControl.prototype = {
    addControl: function(menu, node, parameters) {
        var $v_0 = Mscrm.MenuItemSeparator.createSeparator(false);
        $v_0.set_stylePrefix("VS");
        menu.addItem($v_0)
    }
};
Microsoft.Crm.CommandBar.CommandBarControl.registerClass("Microsoft.Crm.CommandBar.CommandBarControl",
    Mscrm.CrmUIControl);
Microsoft.Crm.CommandBar.CommandBarPopupControl
    .registerClass("Microsoft.Crm.CommandBar.CommandBarPopupControl", Microsoft.Crm.CommandBar.CommandBarControl);
Microsoft.Crm.CommandBar.CommandJewelPopup.registerClass("Microsoft.Crm.CommandBar.CommandJewelPopup",
    Microsoft.Crm.CommandBar.CommandBarPopupControl);
Microsoft.Crm.CommandBar.CommandMenuPopup.registerClass("Microsoft.Crm.CommandBar.CommandMenuPopup",
    Microsoft.Crm.CommandBar.CommandBarPopupControl);
Microsoft.Crm.CommandBar.MenuBarControl.registerClass("Microsoft.Crm.CommandBar.MenuBarControl",
    Microsoft.Crm.CommandBar.CommandBarControl);
Microsoft.Crm.CommandBar.MenuButtonControl.registerClass("Microsoft.Crm.CommandBar.MenuButtonControl",
    null,
    Microsoft.Crm.CommandBar.IMenuItemControl);
Microsoft.Crm.CommandBar.MenuControlConstants.registerClass("Microsoft.Crm.CommandBar.MenuControlConstants");
Microsoft.Crm.CommandBar.MenuControl.registerClass("Microsoft.Crm.CommandBar.MenuControl");
Microsoft.Crm.CommandBar.MainMenuControl.registerClass("Microsoft.Crm.CommandBar.MainMenuControl",
    Microsoft.Crm.CommandBar.MenuControl,
    Sys.IDisposable);
Microsoft.Crm.CommandBar.SubMenuControl.registerClass("Microsoft.Crm.CommandBar.SubMenuControl",
    Microsoft.Crm.CommandBar.MenuControl,
    Microsoft.Crm.CommandBar.IMenuItemControl);
Microsoft.Crm.CommandBar.MenuItemControlFactory.registerClass("Microsoft.Crm.CommandBar.MenuItemControlFactory");
Microsoft.Crm.CommandBar.MenuSpacerControl.registerClass("Microsoft.Crm.CommandBar.MenuSpacerControl",
    null,
    Microsoft.Crm.CommandBar.IMenuItemControl);
Microsoft.Crm.CommandBar.MenuControlConstants.actionAttributeName = "action";
Microsoft.Crm.CommandBar.MenuControlConstants.menuItemTypeAttributeName = "type";
Microsoft.Crm.CommandBar.MenuControlConstants.buttonStyleAttributeName = "buttonstyle";
Microsoft.Crm.CommandBar.MenuControlConstants.disabledAttributeName = "disabled";
Microsoft.Crm.CommandBar.MenuControlConstants.accessKeyAttributeName = "key";
Microsoft.Crm.CommandBar.MenuControlConstants.idAttributeName = "id";
Microsoft.Crm.CommandBar.MenuControlConstants.iconPathAttributeName = "icon";
Microsoft.Crm.CommandBar.MenuControlConstants.tooltipAttributeName = "tooltip";
Microsoft.Crm.CommandBar.MenuControlConstants.titleAttributeName = "title";
Microsoft.Crm.CommandBar.MenuControlConstants.itemElementName = "item";
Microsoft.Crm.CommandBar.MenuControlConstants.menuXmlElementName = "menu"