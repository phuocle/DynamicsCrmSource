Type.registerNamespace("Mscrm");
Mscrm.ILinkControl = function() {};
Mscrm.ILinkControl.registerInterface("Mscrm.ILinkControl");
Type.registerNamespace("Mscrm.FormInputControl");
Mscrm.FormInputControl.LinkControlFlyOutType = function() {};
Mscrm.FormInputControl.LinkControlFlyOutType.prototype = { standard: 0, composite: 1 };
Mscrm.FormInputControl.LinkControlFlyOutType.registerEnum("Mscrm.FormInputControl.LinkControlFlyOutType", false);
Mscrm.FormInputControl.LinkControlBehavior = function(element) {
    this.$$d_$g_4 = Function.createDelegate(this, this.$g_4);
    this.$$d_$l_4 = Function.createDelegate(this, this.$l_4);
    this.$3_4 = {};
    this.$6_4 = [];
    this.get_flyOutDialog = this.get_$o_4;
    Mscrm.FormInputControl.LinkControlBehavior.initializeBase(this, [element]);
    var $$t_3 = this;
    this.$H_4 = function($p1_0) {
        if ($$t_3.get_isLinkControlInitialized())
            if (IsNull($$t_3.$D_4)) $$t_3.openFlyOut($p1_0);
            else {
                var $v_0 = eval($$t_3.$D_4);
                $v_0(null)
            }
    }
};
Mscrm.FormInputControl.LinkControlBehavior.prototype = {
    $V_4: null,
    $U_4: null,
    $D_4: null,
    $M_4: null,
    $4_4: null,
    $B_4: null,
    $0_4: null,
    $F_4: false,
    $G_4: true,
    $1_4: null,
    $J_4: null,
    $E_4: null,
    $A_4: false,
    $S_4: false,
    $H_4: null,
    $R_4: false,
    $L_4: false,
    $T_4: false,
    $K_4: false,
    $7_4: null,
    $Q_4: false,
    $P_4: null,
    $O_4: null,
    $9_4: null,
    $2_4: null,
    $8_4: null,
    $5_4: null,
    get_isEnabledForNewState: function() { return this.$K_4 },
    set_isEnabledForNewState: function(value) {
        this.$K_4 = value;
        return value
    },
    get_iElement: function() { return this.get_element() },
    get_isDirty: function() { return false },
    get_flyOutDialog: function() { return this.$0_4 },
    get_$o_4: function() { return this.$0_4 },
    get_initialLabel: function() { return this.$J_4 },
    get_completedLabel: function() { return this.$E_4 },
    set_completedLabel: function(value) {
        this.$E_4 = value;
        return value
    },
    get_isLinkControlInitialized: function() { return this.$R_4 && this.$L_4 },
    get_wasFlyOutOpened: function() { return this.$T_4 },
    get_anchor: function() { return IsNull(this.$4_4) ? null : this.$4_4[0] },
    set_anchor: function(value) {
        this.$4_4 = IsNull(value) ? null : $P_CRM(value);
        return value
    },
    $X_4: function() {
        var $v_0 = this.get_element().getAttribute("viewportType"),
            $v_1 = isNullOrEmptyString($v_0) ? 0 : parseInt($v_0);
        return $v_1
    },
    get_viewport: function() { return this.$B_4 },
    set_viewport: function(value) {
        this.$B_4 = value;
        return value
    },
    get_$a_4: function() {
        if (IsNull(this.$5_4)) {
            var $v_0 = this.get_element().getAttribute("id"), $v_1 = $get($v_0 + "_flyoutContent");
            this.$5_4 = $P_CRM($v_1)
        }
        return this.$5_4
    },
    get_$m_4: function() {
        if (IsNull(this.$8_4)) {
            var $v_0 = this.get_element().getAttribute("id"), $v_1 = $get($v_0 + "_flyoutLoadingArea");
            this.$8_4 = $P_CRM($v_1)
        }
        return this.$8_4
    },
    get_showProgressIndicator: function() { return this.$A_4 },
    set_showProgressIndicator: function(value) {
        this.$A_4 = value;
        if (this.$A_4 && IsNull(this.$2_4)) this.$2_4 = new Mscrm.ProgressControl;
        return value
    },
    get_hostId: function() { return this.$P_4 },
    set_hostId: function(value) {
        this.$P_4 = value;
        return value
    },
    get_fieldName: function() { return this.$O_4 },
    set_fieldName: function(value) {
        this.$O_4 = value;
        return value
    },
    get_isAssociatedStepCompleted: function() {
        if (!IsNull(this.$9_4)) {
            this.$F_4 = this.$9_4();
            this.$d_4()
        }
        return this.$F_4
    },
    set_isAssociatedStepCompleted: function(value) {
        this.$F_4 = value;
        this.$d_4();
        return value
    },
    get_onAssociatedStepCheck: function() { return this.$9_4 },
    set_onAssociatedStepCheck: function(value) {
        this.$9_4 = value;
        return value
    },
    get_isEligibleForMarkComplete: function() { return this.$G_4 },
    set_isEligibleForMarkComplete: function(value) {
        this.$G_4 = value;
        return value
    },
    onRender: function() {
        var $v_0 = $P_CRM(this.get_element());
        if (!this.$Z_4()) $v_0.addClass("linkControlDisabled");
        else $v_0.hasClass("linkControlDisabled") && $v_0.removeClass("linkControlDisabled")
    },
    initialize: function() {
        Mscrm.FormControlInputBehavior.prototype.initialize.call(this);
        var $v_0 = this.$X_4();
        this.$0_4 = new Mscrm.InlineFlyOutDialog;
        this.$0_4.set_shouldDisposeContent(false);
        switch ($v_0) {
        case 1:
            this.$0_4.set_position("right");
            this.$0_4.set_isCompositeFlyOut(true);
            break;
        default:
            this.$0_4.set_position("bottom");
            this.$0_4.set_isCompositeFlyOut(false);
            break
        }
        this.$0_4.get_options().set_showCloseButton(false);
        this.$0_4.get_options().set_showButtonPane(true);
        this.$0_4.get_options().set_applyAnchorClassChange(false);
        var $v_1 = this.get_element().getAttribute("id");
        this.$1_4 = $P_CRM(this.get_element());
        if (!IsNull($v_1)) {
            this.$J_4 = this.$1_4.text();
            this.$G_4 = Boolean.parse(this.get_element().getAttribute("isEligibleForMarkComplete").toString());
            this.$i_4();
            var $v_2 = this.get_$a_4()[0];
            if (!IsNull($v_2) && $v_2.hasChildNodes()) {
                var $v_3 = $v_2.getAttribute("flyoutWidthInPixels");
                !IsNull($v_3) && this.$0_4.get_options().set_width(parseInt($v_3.toString()));
                var $v_4 = $v_2.getAttribute("flyoutHeightInPixels");
                !IsNull($v_4) && this.$0_4.get_options().set_height(parseInt($v_4.toString()));
                var $v_5 = $v_2.getAttribute("flyoutTabIndex");
                !IsNull($v_5) && this.$0_4.set_buttonsInitialTabIndex(parseInt($v_5.toString()));
                var $v_6 = this.$j_4($v_2);
                this.setFlyOutViewport($v_6[0]);
                this.$0_4.get_options().set_isInDelayMode(true);
                this.$0_4.setContent(this.get_$m_4());
                this.$4_4 = this.$1_4;
                var $v_7 = $v_2.getAttribute("flyOutTitle");
                if (!IsNull($v_7)) {
                    var $v_B = $v_7.toString();
                    if ($v_B.length) {
                        this.$0_4.get_options().set_title($v_B);
                        this.$0_4.get_options().set_showTitlePane(true)
                    }
                }
                var $v_8 = $v_2.getAttribute("confirm");
                !IsNull($v_8) && this.$0_4.setButtonTooltip(1, $v_8.toString());
                var $v_9 = $v_2.getAttribute("cancel");
                !IsNull($v_9) && this.$0_4.setButtonTooltip(2, $v_9.toString());
                var $$t_I = this;
                this.$0_4.bind("flyout-visiblechanged",
                    function($p1_0) {
                        if (!$$t_I.$0_4.get_visible()) {
                            Mscrm.InlineEditCommonUtilities.setIFramesSourceUrls($v_2);
                            $$t_I.$1_4.trigger("attribute-changed", [$$t_I.$1_4.data()])
                        } else if ($$t_I.$S_4)
                            for (var $v_C = 0; $v_C < $$t_I.$6_4.length; $v_C++) {
                                var $v_D = $$t_I.$6_4[$v_C];
                                $v_D.resetLayout()
                            }
                        if ($$t_I.$0_4.get_visible()) {
                            $$t_I.$A_4 && $$t_I.$2_4.hide();
                            for (var $v_E = 0; $v_E < $$t_I.get_$Y_4().length; $v_E++) {
                                var $v_F = $$t_I.get_$Y_4()[$v_E];
                                $v_F.resetLayout()
                            }
                        }
                    });
                var $v_A = $v_2.getAttribute("flyout-opening");
                if (!IsNull($v_A)) this.$V_4 = $v_A.toString();
                $v_A = null;
                $v_A = $v_2.getAttribute("flyout-opened");
                if (!IsNull($v_A)) this.$U_4 = $v_A.toString();
                $v_A = null;
                $v_A = $v_2.getAttribute("flyout-confirming");
                if (!IsNull($v_A)) this.$M_4 = $v_A.toString();
                $v_A = null;
                $v_A = $v_2.getAttribute("onclick");
                if (!IsNull($v_A)) this.$D_4 = $v_A.toString();
                this.$n_4($v_2);
                this.$k_4($v_2);
                if ($v_0 === 1) {
                    var $v_G = this.$0_4.dialogChrome();
                    $v_G.addClass("composite-callout");
                    $v_G.addClass("composite-border-callout");
                    $v_G.prepend('<b class="composite-notch"></b>');
                    $v_G.prepend('<b class="composite-border-notch composite-notch"></b>')
                }
                this.onRender()
            }
        }
        $addHandler(this.get_element(), "click", this.$H_4);
        $addHandler(this.get_element(), "keydown", this.$$d_$l_4);
        $addHandler(this.get_element(), "keypress", this.$$d_$l_4);
        if ($v_0 === 1) {
            !window.UseTabletExperience && $addHandler(window, "resize", this.$$d_$g_4);
            var $$t_J = this;
            this.$0_4.bind("flyout-overlayclicked", function() { $$t_J.$C_4($$t_J.$M_4) })
        }
        this.$0_4.get_visible() && this.$c_4();
        this.$R_4 = true
    },
    setFlyOutViewport: function(viewportObject) {
        this.$0_4.set_viewport($P_CRM(viewportObject));
        this.$B_4 = this.$0_4.get_viewport()
    },
    $j_4: function($p0) {
        var $v_0 = null, $v_1 = $p0.getAttribute("flyoutviewportdomid");
        if (!IsNull($v_1)) $v_0 = $P_CRM("#" + $v_1.toString());
        else {
            $v_0 = $P_CRM("#processControlContainer");
            if (0 === $v_0.length) $v_0 = $P_CRM("#HeaderTilesWrapperLayoutElement");
            if (0 === $v_0.length) $v_0 = $P_CRM("#crmFormHeaderTop")
        }
        if (0 === $v_0.length) $v_0 = $P_CRM("#HeaderTilesWrapperLayoutElement");
        return $v_0
    },
    $c_4: function() {
        if (this.$Q_4) return;
        this.$Q_4 = true;
        var $v_0 = this.get_$a_4().find("div[" + Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName + "]"),
            $v_1 = {},
            $$t_D = this;
        $v_0.each(function($p1_0, $p1_1) {
            var $v_2 = $P_CRM($p1_1),
                $v_3 = $v_2.attr("data-fdeid"),
                $v_4 = $v_2.attr(Mscrm.InlineEditConstants.HtmlAttributeForAttributeLogicalName),
                $v_5 = $v_1[$v_4];
            if (IsNull($v_5)) {
                var $v_6 = $find($v_3), $v_7 = $v_6.get_attributes().get($v_4);
                $v_1[$v_4] = $v_7;
                $v_7.get_controls().forEach(function($p2_0, $p2_1) {
                    var $v_8 = $p2_0;
                    Array.add($$t_D.get_$Y_4(), $v_8)
                })
            }
        })
    },
    get_$Y_4: function() {
        if (IsNull(this.$7_4)) {
            this.$7_4 = new Array(0);
            this.$c_4()
        }
        return this.$7_4
    },
    subscribeToEvent: function(eventCode, eventHandler) {
        if (!IsNull(eventHandler)) {
            this.get_eventManager().subscribeEvent(eventCode, this.get_id());
            if (eventCode.toString() in this.$3_4) {
                var $v_0 = this.$3_4[eventCode.toString()];
                $v_0[$v_0.length] = eventHandler
            } else {
                var $v_1 = [];
                $v_1[0] = eventHandler;
                this.$3_4[eventCode.toString()] = $v_1
            }
        }
    },
    handleEvent: function(eventCode, parameters, sourceComponent) {
        if (eventCode.toString() in this.$3_4)
            for (var $v_0 = this.$3_4[eventCode.toString()], $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                var $v_2 = $v_0[$v_1];
                !IsNull($v_2) && $v_2(this, eventCode, parameters, sourceComponent)
            }
        return Mscrm.CrmUIBehavior.prototype.handleEvent.call(this, eventCode, parameters, sourceComponent)
    },
    $l_4: function($p0) {
        switch ($p0.keyCode) {
        case 13:
            if (IsNull(this.$D_4)) this.openFlyOut($p0);
            else {
                var $v_0 = eval(this.$D_4);
                $v_0(null)
            }
            $p0.preventDefault();
            $p0.stopPropagation();
            break;
        default:
            break
        }
    },
    $g_4: function($p0) {
        if (this.$0_4.get_visible()) {
            this.$0_4.hide();
            this.$C_4(this.$M_4)
        }
    },
    $i_4: function() {
        for (var $v_0 = Mscrm.Utilities
                     .getChildElementsByClassName(this.get_element().parentNode,
                         "ms-crm-Form-SubGrid-Layout-Lite",
                         false),
            $v_1 = 0;
            $v_1 < $v_0.length;
            $v_1++) {
            var $v_2 = $v_0[$v_1].parentNode.id, $v_3 = $find($v_2);
            if (!IsNull($v_3)) {
                this.$S_4 = true;
                Array.add(this.$6_4, $v_3)
            }
        }
    },
    $k_4: function($p0) {
        var $v_0 = $p0.getAttribute("flyout-initialize");
        if (null !== $v_0) {
            var $v_1 = $v_0.toString(), $$t_3 = this;
            window.setTimeout(function() {
                    $$t_3.$C_4($v_1);
                    $$t_3.$L_4 = true
                },
                0)
        } else this.$L_4 = true
    },
    $N_4: function($p0, $p1) {
        var $v_0 = $p0.getAttribute($p1);
        if (!IsNull($v_0)) {
            var $v_1 = $v_0.toString(), $$t_5 = this;
            this.$0_4.bind($p1, function($p1_0) { $$t_5.$C_4($v_1) })
        }
    },
    $n_4: function($p0) {
        this.$N_4($p0, "flyout-confirming");
        this.$N_4($p0, "flyout-confirmed");
        this.$N_4($p0, "flyout-canceling");
        this.$N_4($p0, "flyout-canceled")
    },
    dispose: function() {
        if (this.get_isDisposed()) return;
        var $v_0 = this.$X_4();
        if (!IsNull(this.get_element())) {
            null !== this.$0_4 && this.$0_4.dispose();
            $removeHandler(this.get_element(), "click", this.$H_4);
            this.$H_4 = null;
            $removeHandler(this.get_element(), "keydown", this.$$d_$l_4);
            $removeHandler(this.get_element(), "keypress", this.$$d_$l_4);
            $v_0 === 1 && !window.UseTabletExperience && $removeHandler(window, "resize", this.$$d_$g_4)
        }
        if (!IsNull(this.$1_4)) {
            this.$1_4.unbind();
            this.$1_4.remove()
        }
        this.$1_4 = null;
        if (!IsNull(this.$8_4)) this.$8_4 = null;
        if (!IsNull(this.$5_4)) this.$5_4 = null;
        if (!IsNull(this.$2_4)) {
            this.$2_4.dispose();
            Mscrm.Utilities.destroyObject(this.$2_4);
            this.$2_4 = null
        }
        Mscrm.Utilities.destroyObject(this.$3_4);
        this.$3_4 = null;
        Mscrm.Utilities.destroyObject(this.$7_4);
        this.$7_4 = null;
        Mscrm.Utilities.destroyObject(this.$6_4);
        this.$6_4 = null;
        this.$9_4 = null;
        Mscrm.CrmUIBehavior.prototype.dispose.call(this)
    },
    openFlyOut: function(domEvent, anchorPoint) {
        setPerfMarkerTimestamp("StartOpenFlyOutTimestamp");
        if (!IsNull(domEvent) || !IsNull(anchorPoint)) {
            if (!this.$Z_4()) return;
            if (!this.$G_4) {
                var $$t_2 = this;
                window.setTimeout(function() { $$t_2.$f_4(anchorPoint) }, 0)
            }
            this.$C_4(this.$V_4);
            if (this.$A_4) {
                this.$2_4.show(0);
                var $$t_3 = this;
                window.setTimeout(function() { $$t_3.openFlyOutWithAnchor(anchorPoint) }, 0)
            } else this.openFlyOutWithAnchor(anchorPoint)
        }
    },
    $f_4: function($p0) {
        var $v_0 = null;
        if (!IsNull($p0)) $v_0 = $p0;
        else $v_0 = this.$4_4;
        var $v_1 = "";
        if (!IsNull($v_0) && !IsNull($v_0[0])) {
            if (!isNullOrEmptyString($v_0[0].id)) $v_1 = $v_0[0].id.replace("_ledit", "");
            else {
                var $v_2 = XUI.Html.DomUtils.GetNextSibling(XUI.Html.DomUtils.GetNextSibling($v_0[0]));
                if (!IsNull($v_2) && !isNullOrEmptyString($v_2.id)) $v_1 = $v_2.id.replace("_ledit", "")
            }
            if (!IsNull($get($v_1))) {
                var $v_3 = Sys.UI.Behavior.getBehaviors($get($v_1));
                if (!IsNull($v_3) && $v_3.length) {
                    var $v_4 = $v_3[0];
                    !IsNull($v_4) && $v_4.hideValidationElement()
                }
            }
        }
    },
    openFlyOutWithAnchor: function(anchorPoint) {
        if (!IsNull(anchorPoint)) this.$0_4.show(anchorPoint, this.$B_4);
        else this.$0_4.show(this.$4_4, this.$B_4);
        this.$C_4(this.$U_4);
        var $v_0 = this.$X_4();
        $v_0 === 1 && this.$e_4();
        this.$T_4 = true;
        setPerfMarkerTimestamp("FinishOpenFlyOutTimestamp")
    },
    $e_4: function() {
        var $v_0 = this.$0_4.dialogChrome().find(".composite-notch");
        if (this.$0_4.get_overflow()) $v_0.addClass("flyout-overflow");
        else $v_0.removeClass("flyout-overflow")
    },
    get_flyOutId: function() { return this.$0_4.get_id() },
    $Z_4: function() {
        var $v_0 = $find("PrimaryEntity"), $v_1 = $v_0.get_isNew(), $v_2 = $v_0.get_isDisabled();
        if ($v_1 && !this.$K_4) return false;
        if ($v_2) return false;
        return true
    },
    $C_4: function($p0) {
        if (!IsNull($p0)) {
            var $v_0 = eval($p0);
            $v_0(this)
        }
    },
    $d_4: function() {
        if (isNullOrEmptyString(this.$E_4)) return;
        if (this.$F_4) this.$1_4.text(this.$E_4);
        else this.$1_4.text(this.$J_4)
    }
};
Mscrm.FormInputControl.LinkControlInitializer = function() {};
Mscrm.FormInputControl.LinkControlInitializer.initializeAllLinkControls = function() {
    $P_CRM("[data-linkcontrolstart]").each(function($p1_0, $p1_1) {
        var $v_0 = false, $v_1 = $p1_1.getAttribute("linkcontroldefinitionid");
        if (IsNull($v_1)) $v_0 = true;
        else if (IsNull(Mscrm.FormInputControl.LinkControlInitializer.$I[$v_1.toString()]) ||
            !Mscrm.FormInputControl.LinkControlInitializer.$I[$v_1.toString()]) {
            $v_0 = true;
            Mscrm.FormInputControl.LinkControlInitializer.$I[$v_1.toString()] = true
        }
        if ($v_0) {
            var $v_2 = {};
            $v_2["eventManager"] = "__Page_crmEventManager";
            Mscrm.CrmUIComponent.crmCreate(Mscrm.FormInputControl.LinkControlBehavior, null, null, $v_2, $p1_1)
        }
    })
};
Mscrm.FormInputControl.LinkControlBehavior.registerClass("Mscrm.FormInputControl.LinkControlBehavior",
    Mscrm.FormControlInputBehavior,
    Mscrm.IProcessAwareDataUnboundControl,
    Mscrm.ILinkControl,
    Mscrm.Behaviors.ILinkControlBehavior,
    Mscrm.IFlyOutContainer);
Mscrm.FormInputControl.LinkControlInitializer.registerClass("Mscrm.FormInputControl.LinkControlInitializer");
Mscrm.FormInputControl.LinkControlInitializer.$I = {}