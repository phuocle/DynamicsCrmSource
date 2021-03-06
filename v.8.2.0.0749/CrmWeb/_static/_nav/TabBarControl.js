Type.registerNamespace("Mscrm");
Mscrm.OnTabChangeEventArgs = function(tab, tabContent) {
    Mscrm.OnTabChangeEventArgs.initializeBase(this);
    this.$3_1 = tab;
    this.$4_1 = tabContent;
    this.$2_1 = true
};
Mscrm.OnTabChangeEventArgs.prototype = {
    $3_1: null,
    $4_1: null,
    $2_1: false,
    get_tab: function() { return this.$3_1 },
    get_tabContent: function() { return this.$4_1 },
    get_allowSwitch: function() { return this.$2_1 },
    set_allowSwitch: function(value) {
        this.$2_1 = value;
        return value
    }
};
Mscrm.TabBarControl = function(element) {
    this.$$d_$F_3 = Function.createDelegate(this, this.$F_3);
    this.$$d_$D_3 = Function.createDelegate(this, this.$D_3);
    this.$$d_$C_3 = Function.createDelegate(this, this.$C_3);
    this.$$d_$E_3 = Function.createDelegate(this, this.$E_3);
    this.$$d_$7_3 = Function.createDelegate(this, this.$7_3);
    this.$$d_$8_3 = Function.createDelegate(this, this.$8_3);
    Mscrm.TabBarControl.initializeBase(this, [element]);
    $addHandler(this.get_element(), "mouseover", this.$$d_$8_3);
    $addHandler(this.get_element(), "mouseout", this.$$d_$7_3);
    $addHandler(window, "resize", this.$$d_$E_3);
    $addHandler(this.get_element(), "click", this.$$d_$C_3);
    $addHandler(this.get_element(), "keydown", this.$$d_$D_3);
    $addHandler(this.get_element(), "keyup", this.$$d_$F_3)
};
Mscrm.TabBarControl.$5 = function($p0) {
    var $v_0 = "";
    if (!IsNull($p0))
        if (Mscrm.Utilities.isFirefox()) $v_0 = $p0.textContent;
        else $v_0 = $p0.innerText;
    return $v_0
};
Mscrm.TabBarControl.prototype = {
    $0_3: null,
    $1_3: null,
    add_change: function(value) { this.get_events().addHandler("OnChange", value) },
    remove_change: function(value) { this.get_events().removeHandler("OnChange", value) },
    add_afterChange: function(value) { this.get_events().addHandler("OnAfterChange", value) },
    remove_afterChange: function(value) { this.get_events().removeHandler("OnAfterChange", value) },
    get_currentTab: function() { return this.$0_3 },
    get_currentTabContent: function() { return $get(this.$0_3.getAttribute("tabID").toString()) },
    initialize: function() {
        Mscrm.CrmUIControl.prototype.initialize.call(this);
        this.$9_3()
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        $removeHandler(this.get_element(), "mouseover", this.$$d_$8_3);
        $removeHandler(this.get_element(), "mouseout", this.$$d_$7_3);
        $removeHandler(window, "resize", this.$$d_$E_3);
        $removeHandler(this.get_element(), "click", this.$$d_$C_3);
        $removeHandler(this.get_element(), "keydown", this.$$d_$D_3);
        $removeHandler(this.get_element(), "keyup", this.$$d_$F_3);
        Mscrm.CrmUIControl.prototype.dispose.call(this)
    },
    down: function(tab, force, eventObject) {
        var $v_0 = this.$6_3(!IsNull(tab) ? tab : eventObject.target);
        if (IsNull($v_0)) return;
        if (document.readyState !== "complete" && !force) return;
        var $v_1 = window.LOCID_CUSTOMCONTROLS_TAB_LABEL, $v_2 = window.LOCID_TAB_DISPLAY;
        if ($v_0 !== this.$0_3) {
            var $v_3 = "";
            if (!IsNull(this.$0_3)) $v_3 = Mscrm.TabBarControl.$5(this.$0_3.childNodes[1]);
            if (!IsNull(this.$0_3) &&
                $v_3 === $v_2 &&
                Mscrm.TabBarControl.$5($v_0.childNodes[1]) === $v_1 &&
                Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.CustomControlMobile")) {
                var $v_6 = Mscrm.CustomControls;
                if (!IsNull($v_6)) {
                    var $v_7 = Mscrm.CustomControls.CustomControlManager.get_instance();
                    if (!IsNull($v_7)) {
                        var $v_8 = $get("DataSourceCombo").value.split(":")[0],
                            $v_9 = $v_7.get_currentEntityTypeCode().toString(),
                            $v_A = $v_7.get_existingCustomControlsList().length -
                                $v_7.get_existingEntityCustomControlsList().length <=
                                1;
                        if (!$v_A && $v_8 !== $v_9) if (!confirm(window.LOCID_CCCONFIG_VIEWCHANGE_MSG)) return
                    }
                }
            }
            var $v_4 = new Mscrm.OnTabChangeEventArgs($v_0,
                window.document.getElementById($v_0.getAttribute("tabID").toString()));
            this.$B_3($v_4);
            if (!$v_4.$2_1) return;
            var $v_5 = window.document.getElementById("idRestoreToDefault");
            if ($v_5)
                if ($v_0.getAttribute("tabID").toString() === "fieldLevelSyncTab") $v_5.style.display = "inline";
                else $v_5.style.display = "none";
            $v_0.className = "ms-crm-Tab ms-crm-Tab-Selected";
            window.document.getElementById($v_0.getAttribute("tabID")).style.display = "block";
            if (!IsNull(this.$0_3)) {
                this.$0_3.className = "ms-crm-Tab";
                this.get_currentTabContent().style.display = "none"
            }
            this.$0_3 = $v_0;
            if (Mscrm.FeatureControl.get_Current().isFeatureEnabled("FCB.CustomControlMobile")) {
                var $v_B = Mscrm.CustomControls;
                if (!IsNull($v_B)) {
                    var $v_C = Mscrm.CustomControls.CustomControlManager.get_instance();
                    !IsNull($v_0) &&
                        Mscrm.TabBarControl.$5($v_0.childNodes[1]) === $v_1 &&
                        !IsNull($v_C) &&
                        $v_C.updatePrimaryEntity()
                }
            }
            this.$A_3($v_4)
        }
    },
    $B_3: function($p0) {
        var $v_0 = this.get_events().getHandler("OnChange");
        !IsNull($v_0) && $v_0(this, $p0)
    },
    $A_3: function($p0) {
        var $v_0 = this.get_events().getHandler("OnAfterChange");
        !IsNull($v_0) && $v_0(this, $p0)
    },
    $C_3: function($p0) { this.down(null, false, $p0) },
    recalculateSize: function() {
        var $v_0 = 2, $$t_5 = this;
        XUI.Xml.DomUtils.ForEachChild(this.get_element(),
            function($p1_0) {
                $v_0 += $p1_0.offsetWidth;
                return false
            });
        var $v_1 = XUI.Xml.DomUtils.GetFirstChild(this.get_element()),
            $v_2 = XUI.Xml.DomUtils.GetLastChild(this.get_element()),
            $v_3 = this.get_element().style;
        $v_3.width = $v_0 > 2 ? $v_0 + "px" : "100%";
        if ($v_1.offsetTop !== $v_2.offsetTop) {
            $v_0 = $v_0 + $v_0 * 10 / 100;
            $v_3.width = $v_0 + "px"
        }
    },
    $6_3: function($p0) {
        if ($p0.tagName === "A") $p0 = $p0.parentNode;
        return $p0.tagName === "LI" ? $p0 : null
    },
    $9_3: function() {
        var $v_0 = false, $$t_2 = this;
        XUI.Xml.DomUtils.ForEachChild(this.get_element(),
            function($p1_0) {
                if ($p1_0.className === "ms-crm-Tab ms-crm-Tab-Selected") {
                    $$t_2.down($p1_0, true, null);
                    $v_0 = true
                }
                return false
            });
        this.recalculateSize();
        !$v_0 && this.down(XUI.Xml.DomUtils.GetFirstChild(this.get_element()), true, null)
    },
    $D_3: function($p0) {
        if ($p0.keyCode === 13) {
            Mscrm.Utilities.click($p0.target);
            $p0.preventDefault();
            $p0.stopPropagation()
        }
    },
    $F_3: function($p0) {
        if ($p0.keyCode === 13) {
            $p0.preventDefault();
            $p0.stopPropagation()
        }
    },
    $8_3: function($p0) {
        var $v_0 = this.$6_3($p0.target);
        if (!IsNull($v_0) && $v_0 !== this.$0_3) {
            $v_0.className = "ms-crm-GlowOn ms-crm-Tab";
            this.$1_3 = $v_0
        }
    },
    $7_3: function($p0) {
        if (!IsNull(this.$1_3) && this.$1_3 !== this.$0_3) this.$1_3.className = "ms-crm-Tab";
        this.$1_3 = null
    },
    $E_3: function($p0) { if (!IsNull(this.$0_3)) this.$0_3.className = "ms-crm-Tab ms-crm-Tab-Selected" }
};
Mscrm.OnTabChangeEventArgs.registerClass("Mscrm.OnTabChangeEventArgs", Sys.EventArgs);
Mscrm.TabBarControl.registerClass("Mscrm.TabBarControl", Mscrm.CrmUIControl)